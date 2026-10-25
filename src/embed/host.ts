/**
 * Contract between KubeezCut and an embedding host (Bylonder). The host owns the project document, undo and the
 * scene clock; KubeezCut owns editing, preview and export. Everything here is optional except `project`, so an
 * embed works stand-alone first and takes over host responsibilities one by one.
 */
export interface EmbedProject {
  /** Stable id from the host; KubeezCut keys its own storage (IndexedDB, OPFS) by it. */
  id: string;
  name: string;
  width: number;
  height: number;
  fps: number;
  backgroundColor?: string;
}

export interface SequencerHost {
  project: EmbedProject;
  /** Called after an edit completes, so the host can record an undo step or save. */
  commit?(label?: string): void;
  /** Reports problems the host should show (toasts are not visible inside an island). */
  notify?(message: string, level?: 'info' | 'warning' | 'error'): void;
}
