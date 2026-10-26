/* eslint-disable react-refresh/only-export-components -- library entry, not a hot-reloaded module */
/**
 * Embedding entry: mounts KubeezCut's editors as islands inside another app (Bylonder) instead of the routed
 * standalone shell. Each mount takes an element and returns { dispose }. All islands share one project and the
 * same stores, so a Sequencer and a Preview mounted in different host areas stay in sync.
 *
 * Styles: the build emits one stylesheet scoped under `.kc-embed` (see vite.embed.config.ts); hosts load it next
 * to the module.
 */
import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@/components/error-boundary';
import { TooltipProvider } from '@/components/ui/tooltip';
import { GlobalTooltip } from '@/components/ui/global-tooltip';
import { Toaster } from '@/components/ui/sonner';
import { setPortalContainer } from '@/components/ui/portal-container';
import { Timeline } from '@/features/editor/deps/timeline-ui';
import { useTimelineStore, useItemsStore, useTimelineSettingsStore } from '@/features/editor/deps/timeline-store';
import { initTransitionChainSubscription } from '@/features/editor/deps/timeline-subscriptions';
import { useMediaLibraryStore } from '@/features/editor/deps/media-library';
import { useProjectStore } from '@/features/editor/deps/projects';
import { clearPreviewAudioCache } from '@/features/editor/deps/composition-runtime';
import { MediaSidebar } from '@/features/editor/components/media-sidebar';
import { PropertiesSidebar } from '@/features/editor/components/properties-sidebar';
import { PreviewArea } from '@/features/editor/components/preview-area';
import { usePlaybackStore } from '@/shared/state/playback';
import { resolveMediaUrl, getMediaType } from '@/features/timeline/deps/media-library-resolver';
import { mediaLibraryService } from '@/features/timeline/deps/media-library-service';
import { buildDroppedMediaTimelineItems, getDroppedMediaDurationInFrames, type DroppableMediaType } from '@/features/timeline/utils/dropped-media';
import { getProject, createProject } from '@/infrastructure/storage/indexeddb/projects';
import { CURRENT_SCHEMA_VERSION } from '@/domain/projects/migrations/types';
import type { SequencerHost, SequencerEdit, EmbedProject } from './host';
import { getEdit, setEdit, routeHistoryToHost } from './edit';
import { syncClock } from './clock-sync';
import { setSceneFrameSource } from '@/shared/scene/scene-frames';
import './embed.css';
import { useTimelineShortcuts } from '@/features/timeline/hooks/use-timeline-shortcuts';
import { useEditorHotkeys } from '@/features/editor/hooks/use-editor-hotkeys';
import { installTouchDrag } from './touch-drag';
import { installTouchMouse } from './touch-mouse';
import { addKeymapRegion } from './keymap';
import { sequencerMenus } from './commands';

export type { SequencerHost, EmbedProject, SequencerEdit, HostHistory, HostClock, HostScene, SceneFrameSource, SceneFrameRequest } from './host';
export { setIconBase } from './blender-icons';
export { setKeymap, BLENDER_KEYMAP, type Keymap } from './keymap';
export { openCompositor, type CompositorRange } from './compositor';
export type { Command, MenuEntry } from './commands';

let host: SequencerHost | null = null;
let portalRoot: HTMLElement | null = null;
let chrome: { unmount(): void } | null = null;
let stopMediaErrors: (() => void) | undefined;
let stopTransitions: (() => void) | undefined;
let stopCommits: (() => void) | undefined;
let stopHistory: (() => void) | undefined;
let stopClock: (() => void) | undefined;
let releasePortalRegion: (() => void) | undefined;
const mounted = new Set<{ unmount(): void }>();

// KubeezCut's editing, playback and tool shortcuts, mounted once. They act only while the pointer or focus is in
// an island (keymap.ts), so the host keeps its own keys elsewhere.
function Shortcuts() {
  useTimelineShortcuts();
  useEditorHotkeys({ onSave: () => { if (host && !host.history) void useTimelineStore.getState().saveTimeline(host.project.id); } });
  return null;
}

// Popups, tooltips and toasts render into one scoped element so the embed stylesheet reaches them.
function ensurePortalRoot(): HTMLElement {
  if (portalRoot) return portalRoot;
  portalRoot = document.createElement('div');
  portalRoot.className = 'kc-embed kc-embed-portals dark';
  document.body.append(portalRoot);
  setPortalContainer(portalRoot);
  const root = createRoot(portalRoot.appendChild(document.createElement('div')));
  root.render(
    <TooltipProvider delayDuration={300}>
      <Shortcuts />
      <GlobalTooltip />
      <Toaster />
    </TooltipProvider>
  );
  chrome = root;
  releasePortalRegion = addKeymapRegion(portalRoot);
  return portalRoot;
}

/**
 * Opens (or creates) the host's project in KubeezCut's stores. Call once before mounting islands, and again
 * when the host switches project.
 */
export async function openProject(next: SequencerHost): Promise<void> {
  host = next;
  const p = next.project;
  if (!(await getProject(p.id))) {
    await createProject({
      id: p.id, name: p.name, description: '', duration: 0, schemaVersion: CURRENT_SCHEMA_VERSION,
      metadata: { width: p.width, height: p.height, fps: p.fps, backgroundColor: p.backgroundColor },
      createdAt: Date.now(), updatedAt: Date.now(),
    });
  }
  usePlaybackStore.getState().setPreviewFrame(null);
  const media = useMediaLibraryStore.getState();
  media.setCurrentProject(p.id);
  void media.loadMediaItems().catch((error: unknown) => next.notify?.(`Media library: ${String(error)}`, 'error'));
  setProjectFormat(p);
  stopHistory?.();
  stopHistory = undefined;
  stopCommits?.();
  stopCommits = undefined;
  if (next.history) {
    // The host's document holds the edit and the host's history undoes it.
    setEdit(next.edit, p);
    stopHistory = routeHistoryToHost(next.history);
  } else {
    await useTimelineStore.getState().loadTimeline(p.id, { allowProjectUpgrade: true });
    stopCommits = autosave(p.id);
  }
  stopClock?.();
  stopClock = next.clock ? syncClock(next.clock) : undefined;
  setSceneFrameSource(next.frames ?? null);
  stopTransitions?.();
  stopTransitions = initTransitionChainSubscription();
  // Media library errors (failed imports, unavailable picker) also go to the host, since the File Browser that
  // shows them may not be open.
  stopMediaErrors?.();
  stopMediaErrors = useMediaLibraryStore.subscribe((state, prev) => {
    if (state.error && state.error !== prev.error) host?.notify?.(state.error, 'error');
  });
}

// Stand-alone storage: without a host history the edit is saved to KubeezCut's IndexedDB after edits settle.
function autosave(projectId: string): () => void {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let wasDirty = false;
  const off = useTimelineStore.subscribe(() => {
    const dirty = useTimelineStore.getState().isDirty;
    if (!dirty || wasDirty) { wasDirty = dirty; return; }
    wasDirty = dirty;
    clearTimeout(timer);
    timer = setTimeout(() => { void useTimelineStore.getState().saveTimeline(projectId); }, 400);
  });
  return () => { clearTimeout(timer); off(); };
}

/** Output size and frame rate of the edit, from the host's output settings. */
export function setProjectFormat({ width, height, fps }: Pick<EmbedProject, 'width' | 'height' | 'fps'>): void {
  if (!host) return;
  host.project = { ...host.project, width, height, fps };
  const p = host.project;
  useProjectStore.getState().setCurrentProject({
    id: p.id, name: p.name, description: '', duration: 0, schemaVersion: CURRENT_SCHEMA_VERSION,
    metadata: { width, height, fps, backgroundColor: p.backgroundColor },
    createdAt: 0, updatedAt: 0,
  });
  useTimelineSettingsStore.getState().setFps(fps);
}

/** Replaces the open edit with one from the host (undo, redo, reverting the document). */
export function setHostEdit(edit: SequencerEdit | undefined): void {
  if (host) setEdit(edit, host.project);
}

/** The open edit, as the host stores it. */
export { getEdit };

function mount(element: HTMLElement, node: ReactNode, { touchMouse = false } = {}): { dispose(): void } {
  ensurePortalRoot();
  installTouchDrag();
  if (touchMouse) installTouchMouse();
  element.classList.add('kc-embed', 'dark');
  const root = createRoot(element);
  // The island fills the host element exactly: KubeezCut's panels size themselves from their container, so a
  // container sized by its content would feed back into itself (the preview shrinking and growing in a loop).
  root.render(
    <StrictMode>
      <div className="kc-island" data-kc-touch-mouse={touchMouse || undefined}>
        <ErrorBoundary level="feature">
          <TooltipProvider delayDuration={300}>{node}</TooltipProvider>
        </ErrorBoundary>
      </div>
    </StrictMode>
  );
  mounted.add(root);
  const releaseRegion = addKeymapRegion(element);
  return {
    dispose() {
      releaseRegion();
      mounted.delete(root);
      root.unmount();
      element.classList.remove('kc-embed', 'dark');
    },
  };
}

function SequencerTimeline() {
  const fps = useTimelineStore((s) => s.fps);
  const maxItemEndFrame = useItemsStore((s) => s.maxItemEndFrame);
  return <Timeline duration={Math.max(maxItemEndFrame / Math.max(fps, 1), 10)} />;
}

function Preview() {
  const metadata = useProjectStore((s) => s.currentProject?.metadata);
  return metadata ? <PreviewArea project={metadata} /> : null;
}

/** Blender's Sequencer view: tracks (channels), strips, trimming and transitions. */
export const mountSequencer = (element: HTMLElement) => mount(element, <SequencerTimeline />);
/** Blender's Preview view: the composited frame with the transform gizmo. */
export const mountPreview = (element: HTMLElement) => mount(element, <Preview />, { touchMouse: true });
/** Media pool: import and browse footage, audio and images. */
export const mountMedia = (element: HTMLElement) => mount(element, <MediaSidebar fillContainer />);
/** Strip properties (Blender's sequencer sidebar). */
export const mountStripProperties = (element: HTMLElement) => mount(element, <PropertiesSidebar fillContainer />);

/**
 * Imports files into the open project's media pool by reference (KubeezCut never copies media). Hosts pass
 * File System Access handles, including handles from the origin private file system.
 */
export async function importMedia(handles: FileSystemFileHandle[]) {
  return useMediaLibraryStore.getState().importHandles(handles);
}

/**
 * Adds a media pool entry to the Sequencer as a strip (plus its linked audio strip for video with sound), at
 * `frame` (default: the playhead) on the top video or audio channel. Same placement rules as dropping it.
 * Returns the new strip ids.
 */
export async function addMediaStrip(mediaId: string, { frame }: { frame?: number } = {}): Promise<string[]> {
  const media = useMediaLibraryStore.getState().mediaItems.find((m) => m.id === mediaId);
  if (!media) throw new Error(`Unknown media: ${mediaId}`);
  const mediaType = getMediaType(media.mimeType) as DroppableMediaType;
  const timeline = useTimelineStore.getState();
  const fps = timeline.fps;
  const tracks = timeline.tracks.filter((t) => !t.isGroup).sort((a, b) => a.order - b.order);
  const videoTrack = tracks.find((t) => t.kind !== 'audio');
  const audioTrack = tracks.find((t) => t.kind === 'audio');
  const primaryTrack = mediaType === 'audio' ? audioTrack : videoTrack;
  if (!primaryTrack) throw new Error('No track for this media type');
  const from = Math.max(0, Math.round(frame ?? usePlaybackStore.getState().currentFrame));
  const durationInFrames = getDroppedMediaDurationInFrames(media, mediaType, fps);
  const [blobUrl, thumbnailUrl] = await Promise.all([
    resolveMediaUrl(mediaId),
    mediaType === 'audio' ? Promise.resolve(null) : mediaLibraryService.getThumbnailBlobUrl(mediaId),
  ]);
  if (!blobUrl) throw new Error(`Media is not readable: ${media.fileName}`);
  const project = useProjectStore.getState().currentProject;
  const items = buildDroppedMediaTimelineItems({
    media, mediaId, mediaType, label: media.fileName, timelineFps: fps, blobUrl, thumbnailUrl,
    canvasWidth: project?.metadata.width ?? 1920, canvasHeight: project?.metadata.height ?? 1080,
    placement: {
      primary: { trackId: primaryTrack.id, from, durationInFrames },
      linkedAudio: mediaType === 'video' && media.audioCodec && audioTrack ? { trackId: audioTrack.id, from, durationInFrames } : undefined,
    },
  });
  timeline.addItems(items);
  return items.map((item) => item.id);
}

/** Menus for the host's Video Sequencer header: View, Select, Marker, Add, Strip (see commands.ts). */
export function menus() {
  return sequencerMenus((mediaId, frame) => addMediaStrip(mediaId, { frame }), () => host?.scenes?.() ?? []);
}

/** Unmounts every island and the shared popup layer. */
export function disposeAll(): void {
  for (const root of [...mounted]) root.unmount();
  mounted.clear();
  chrome?.unmount();
  chrome = null;
  releasePortalRegion?.();
  portalRoot?.remove();
  portalRoot = null;
  setPortalContainer(undefined);
  stopTransitions?.();
  stopCommits?.();
  stopHistory?.();
  stopClock?.();
  stopMediaErrors?.();
  stopTransitions = stopCommits = stopHistory = stopClock = stopMediaErrors = undefined;
  usePlaybackStore.getState().pause();
  clearPreviewAudioCache();
  host = null;
}
