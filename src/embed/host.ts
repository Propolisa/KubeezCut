/**
 * Contract between KubeezCut and an embedding host (Bylonder). The host owns the project document, undo and the
 * scene clock; KubeezCut owns editing, preview and compositing. Everything except `project` is optional, so an
 * embed also works stand-alone (edit saved to KubeezCut's own IndexedDB storage, own undo, own clock).
 */
import type { TimelineDocument } from '@/features/timeline/stores/timeline-document';
import type { SceneFrameSource } from '@/shared/scene/scene-frames';
import type { SceneAudioSource } from '@/shared/scene/scene-audio';

export type { SceneFrameRequest, SceneFrameSource } from '@/shared/scene/scene-frames';
export type { SceneAudio, SceneAudioSource } from '@/shared/scene/scene-audio';

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

export interface HostScene {
  id: string;
  name: string;
  frameStart: number;
  frameEnd: number;
  width: number;
  height: number;
}

export interface SequencerHost {
  project: EmbedProject;
  /** The edit to open. With `history`, the host's document is the source of truth and this replaces IndexedDB. */
  edit?: SequencerEdit;
  history?: HostHistory;
  clock?: HostClock;
  frames?: SceneFrameSource;
  /** Scenes' sound, for Scene Audio strips (Add > Scene Audio). */
  audio?: SceneAudioSource;
  /** Scenes a scene strip can show (Add > Scene), with their frame range. */
  scenes?(): HostScene[];
  /** Reports problems the host should show (toasts are not visible inside an island). */
  notify?(message: string, level?: 'info' | 'warning' | 'error'): void;
}
