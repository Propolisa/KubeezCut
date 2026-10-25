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
import { useTimelineStore, useItemsStore } from '@/features/editor/deps/timeline-store';
import { initTransitionChainSubscription } from '@/features/editor/deps/timeline-subscriptions';
import { useMediaLibraryStore } from '@/features/editor/deps/media-library';
import { useProjectStore } from '@/features/editor/deps/projects';
import { clearPreviewAudioCache } from '@/features/editor/deps/composition-runtime';
import { MediaSidebar } from '@/features/editor/components/media-sidebar';
import { PropertiesSidebar } from '@/features/editor/components/properties-sidebar';
import { PreviewArea } from '@/features/editor/components/preview-area';
import { usePlaybackStore } from '@/shared/state/playback';
import { getProject, createProject } from '@/infrastructure/storage/indexeddb/projects';
import { CURRENT_SCHEMA_VERSION } from '@/domain/projects/migrations/types';
import type { SequencerHost } from './host';
import './embed.css';

export type { SequencerHost, EmbedProject } from './host';

let host: SequencerHost | null = null;
let portalRoot: HTMLElement | null = null;
let chrome: { unmount(): void } | null = null;
let stopTransitions: (() => void) | undefined;
let stopCommits: (() => void) | undefined;
const mounted = new Set<{ unmount(): void }>();

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
      <GlobalTooltip />
      <Toaster />
    </TooltipProvider>
  );
  chrome = root;
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
  useProjectStore.getState().setCurrentProject({
    id: p.id, name: p.name, description: '', duration: 0, schemaVersion: CURRENT_SCHEMA_VERSION,
    metadata: { width: p.width, height: p.height, fps: p.fps, backgroundColor: p.backgroundColor },
    createdAt: Date.now(), updatedAt: Date.now(),
  });
  await useTimelineStore.getState().loadTimeline(p.id, { allowProjectUpgrade: true });
  stopTransitions?.();
  stopTransitions = initTransitionChainSubscription();
  // Until the host owns the timeline document, saving goes to KubeezCut's storage after each edit settles.
  stopCommits?.();
  let timer: ReturnType<typeof setTimeout> | undefined;
  let wasDirty = false;
  stopCommits = useTimelineStore.subscribe(() => {
    const dirty = useTimelineStore.getState().isDirty;
    if (!dirty || wasDirty) { wasDirty = dirty; return; }
    wasDirty = dirty;
    clearTimeout(timer);
    timer = setTimeout(() => {
      void useTimelineStore.getState().saveTimeline(p.id).then(() => host?.commit?.('Sequencer edit'));
    }, 400);
  });
}

function mount(element: HTMLElement, node: ReactNode): { dispose(): void } {
  ensurePortalRoot();
  element.classList.add('kc-embed', 'dark');
  const root = createRoot(element);
  root.render(
    <StrictMode>
      <ErrorBoundary level="feature">
        <TooltipProvider delayDuration={300}>{node}</TooltipProvider>
      </ErrorBoundary>
    </StrictMode>
  );
  mounted.add(root);
  return {
    dispose() {
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
  const project = host?.project;
  if (!project) return null;
  return <PreviewArea project={project} />;
}

/** Blender's Sequencer view: tracks (channels), strips, trimming and transitions. */
export const mountSequencer = (element: HTMLElement) => mount(element, <SequencerTimeline />);
/** Blender's Preview view: the composited frame with the transform gizmo. */
export const mountPreview = (element: HTMLElement) => mount(element, <Preview />);
/** Media pool: import and browse footage, audio and images. */
export const mountMedia = (element: HTMLElement) => mount(element, <MediaSidebar fillContainer />);
/** Strip properties (Blender's sequencer sidebar). */
export const mountStripProperties = (element: HTMLElement) => mount(element, <PropertiesSidebar fillContainer />);

/** Unmounts every island and the shared popup layer. */
export function disposeAll(): void {
  for (const root of [...mounted]) root.unmount();
  mounted.clear();
  chrome?.unmount();
  chrome = null;
  portalRoot?.remove();
  portalRoot = null;
  setPortalContainer(undefined);
  stopTransitions?.();
  stopCommits?.();
  usePlaybackStore.getState().pause();
  clearPreviewAudioCache();
  host = null;
}
