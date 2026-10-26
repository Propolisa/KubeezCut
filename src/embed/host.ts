/**
 * Contract between KubeezCut and an embedding host (Bylonder). The host owns the project document, undo and the
 * scene clock; KubeezCut owns editing, preview and compositing. Everything except `project` is optional, so an
 * embed also works stand-alone (edit saved to KubeezCut's own IndexedDB storage, own undo, own clock).
 */
import type { TimelineDocument } from '@/features/timeline/stores/timeline-document';

export interface EmbedProject {
  /** Stable id from the host; KubeezCut keys its media library (IndexedDB, OPFS) by it. */
  id: string;
  name: string;
  width: number;
  height: number;
  fps: number;
  backgroundColor?: string;
}

/** The edit as the host stores it: plain JSON, versioned so older edits are migrated on open. */
export interface SequencerEdit {
  schemaVersion: number;
  timeline: TimelineDocument;
}

/** Host-owned undo. Completed edits are reported; undo and redo are asked of the host, which calls setEdit(). */
export interface HostHistory {
  commit(edit: SequencerEdit, label: string): void;
  undo(): void;
  redo(): void;
}

/**
 * The host's playhead. Sequencer frames are host frames (a strip at frame 10 shows at scene frame 10). The host
 * clock leads playback; the sequencer follows it and reports seeks and play/pause made in its own UI.
 */
export interface HostClock {
  readonly frame: number;
  readonly playing: boolean;
  /** Called on every frame or playback change. */
  subscribe(listener: () => void): () => void;
  seek(frame: number): void;
  play(): void;
  pause(): void;
}

/** A frame of a scene strip, rendered by the host. */
export interface SceneFrameRequest {
  /** Host scene reference stored on the strip (`SceneItem.scene`). */
  scene: string;
  /** Camera name, or undefined for the scene's active camera. */
  camera?: string;
  /** Frame in the scene's own timeline. */
  frame: number;
  width: number;
  height: number;
  /** Preview frames may come from a cache or a reduced size; final frames are full quality. */
  quality: 'preview' | 'final';
}

export interface HostFrameSource {
  /** Resolves to a frame the caller draws and then closes, or null when no frame is available yet. */
  getFrame(request: SceneFrameRequest, signal?: AbortSignal): Promise<ImageBitmap | null>;
  /** Frame immediately available from a cache, for synchronous preview paths. */
  peekFrame?(request: SceneFrameRequest): ImageBitmap | null;
  /** Fires when frames previously returned may be outdated (scene edited); the preview redraws. */
  subscribe?(listener: () => void): () => void;
}

export interface SequencerHost {
  project: EmbedProject;
  /** The edit to open. With `history`, the host's document is the source of truth and this replaces IndexedDB. */
  edit?: SequencerEdit;
  history?: HostHistory;
  clock?: HostClock;
  frames?: HostFrameSource;
  /** Reports problems the host should show (toasts are not visible inside an island). */
  notify?(message: string, level?: 'info' | 'warning' | 'error'): void;
}
