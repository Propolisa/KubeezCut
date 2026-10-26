import { captureTimeline } from '@/features/timeline/stores/timeline-document';
import { useTimelineStore } from '@/features/editor/deps/timeline-store';
import { useProjectStore } from '@/features/editor/deps/projects';
import { convertTimelineToComposition } from '@/features/export/utils/timeline-to-composition';
import { createCompositionRenderer } from '@/features/export/utils/client-render-engine';
import { resolveMediaUrls } from '@/features/timeline/deps/media-library-resolver';
import type { ItemKeyframes } from '@/types/keyframe';
import type { TimelineItem, TimelineTrack } from '@/types/timeline';
import type { Transition } from '@/types/transition';

export interface CompositorRange {
  frameStart: number;
  frameEnd: number;
  width: number;
  height: number;
}

/** The edit composited at full quality over a frame range, for a host's render job and encoder. */
export async function openCompositor({ frameStart, frameEnd, width, height }: CompositorRange) {
  const timeline = captureTimeline();
  const project = useProjectStore.getState().currentProject;
  const composition = convertTimelineToComposition(
    timeline.tracks as unknown as TimelineTrack[],
    timeline.items as TimelineItem[],
    (timeline.transitions ?? []) as Transition[],
    useTimelineStore.getState().fps,
    width,
    height,
    frameStart,
    frameEnd + 1,
    (timeline.keyframes ?? []) as ItemKeyframes[],
    project?.metadata.backgroundColor,
  );
  composition.tracks = await resolveMediaUrls(composition.tracks, { useProxy: false });
  const canvas = new OffscreenCanvas(width, height);
  const renderer = await createCompositionRenderer(composition, canvas, canvas.getContext('2d')!, { mode: 'export' });
  await renderer.preload();
  return {
    async renderFrame(frame: number): Promise<OffscreenCanvas> {
      await renderer.renderFrame(frame - frameStart);
      return canvas;
    },
    async audio(signal?: AbortSignal) {
      const canvasAudio = await import('@/features/export/utils/canvas-audio');
      return (await canvasAudio.hasAudioContent(composition)) ? canvasAudio.processAudio(composition, signal) : null;
    },
    dispose: () => renderer.dispose(),
  };
}
