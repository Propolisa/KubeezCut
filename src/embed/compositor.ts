import { captureTimeline } from '@/features/timeline/stores/timeline-document';
import { useTimelineStore } from '@/features/editor/deps/timeline-store';
import { useProjectStore } from '@/features/editor/deps/projects';
import { convertTimelineToComposition } from '@/features/export/utils/timeline-to-composition';
import { createCompositionRenderer } from '@/features/export/utils/client-render-engine';
import { resolveMediaUrls } from '@/features/timeline/deps/media-library-resolver';
import { holdSceneAudio, type HeldSceneAudio } from '@/shared/scene/scene-audio';
import type { ItemKeyframes } from '@/types/keyframe';
import type { TimelineItem, TimelineTrack } from '@/types/timeline';
import type { Transition } from '@/types/transition';

export interface CompositorRange {
  frameStart: number;
  frameEnd: number;
  width: number;
  height: number;
}

const usesMedia = (item: TimelineItem) => !!item.mediaId && (item.type === 'video' || item.type === 'audio' || item.type === 'image');
const stripName = (item: TimelineItem) => item.label || item.id;

/**
 * The edit's media from the media library (never the URLs stored in the edit, which die with the page), and Scene
 * Audio held for the job, so a scene change while it runs does not take its sound away. Strips whose media is
 * missing are left out and named in `warnings`.
 */
export async function resolveCompositorMedia(tracks: TimelineTrack[], warnings: string[]) {
  const resolved = await resolveMediaUrls(tracks, { useProxy: false });
  const held: HeldSceneAudio[] = [];
  await Promise.all(resolved.flatMap((track) => track.items).map(async (item) => {
    if (item.type === 'audio' && item.scene) {
      const audio = await holdSceneAudio(item.scene);
      if (audio) held.push(audio);
      item.src = audio?.url ?? '';
    } else if (usesMedia(item) && !('src' in item && item.src)) {
      warnings.push(`Strip "${stripName(item)}" has missing media`);
    }
  }));
  return { tracks: resolved, release: () => held.forEach((audio) => audio.release()) };
}

/** The edit composited at full quality over a frame range, for a host's render job and encoder. */
export async function openCompositor({ frameStart, frameEnd, width, height }: CompositorRange) {
  const timeline = captureTimeline();
  const project = useProjectStore.getState().currentProject;
  const items = timeline.items as TimelineItem[];
  const composition = convertTimelineToComposition(
    timeline.tracks as unknown as TimelineTrack[],
    items,
    (timeline.transitions ?? []) as Transition[],
    useTimelineStore.getState().fps,
    width,
    height,
    frameStart,
    frameEnd + 1,
    (timeline.keyframes ?? []) as ItemKeyframes[],
    project?.metadata.backgroundColor,
  );
  const warnings: string[] = [];
  const media = await resolveCompositorMedia(composition.tracks, warnings);
  composition.tracks = media.tracks;
  const canvas = new OffscreenCanvas(width, height);
  const renderer = await createCompositionRenderer(composition, canvas, canvas.getContext('2d')!, { mode: 'export' });
  await renderer.preload();
  const unreadableSound = (itemId: string) => {
    const item = items.find((i) => i.id === itemId);
    const warning = `Strip "${item ? stripName(item) : itemId}" has unreadable sound`;
    if (!warnings.includes(warning)) warnings.push(warning);
  };
  return {
    /** Problems the render goes on without, such as strips with missing media. */
    warnings,
    async renderFrame(frame: number): Promise<OffscreenCanvas> {
      await renderer.renderFrame(frame - frameStart);
      return canvas;
    },
    async audio(signal?: AbortSignal) {
      const canvasAudio = await import('@/features/export/utils/canvas-audio');
      return (await canvasAudio.hasAudioContent(composition)) ? canvasAudio.processAudio(composition, signal, { onSkippedSegment: unreadableSound }) : null;
    },
    dispose: () => { renderer.dispose(); media.release(); },
  };
}
