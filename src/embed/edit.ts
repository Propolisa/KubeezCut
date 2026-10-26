/**
 * The edit as host data: read it, replace it, and route edits and undo through the host (see host.ts).
 */
import { captureTimeline, applyTimeline } from '@/features/timeline/stores/timeline-document';
import { setTimelineHistoryDelegate } from '@/features/timeline/stores/timeline-command-store';
import { createDefaultClassicTracks } from '@/features/timeline/utils/classic-tracks';
import { useTimelineSettingsStore } from '@/features/timeline/stores/timeline-settings-store';
import { DEFAULT_TRACK_HEIGHT } from '@/features/timeline/constants';
import { migrateProject } from '@/domain/projects/migrations';
import { CURRENT_SCHEMA_VERSION } from '@/domain/projects/migrations/types';
import type { Project, ProjectTimeline } from '@/types/project';
import type { EmbedProject, HostHistory, SequencerEdit } from './host';

export function getEdit(): SequencerEdit {
  return { schemaVersion: CURRENT_SCHEMA_VERSION, timeline: captureTimeline() };
}

/** Brings an edit stored by an older KubeezCut up to date with the same migrations as stored projects. */
function migrate(edit: SequencerEdit, project: EmbedProject): SequencerEdit['timeline'] {
  if (edit.schemaVersion === CURRENT_SCHEMA_VERSION) return edit.timeline;
  const wrapped: Project = {
    id: project.id, name: project.name, description: '', duration: 0, schemaVersion: edit.schemaVersion,
    metadata: { width: project.width, height: project.height, fps: project.fps },
    createdAt: 0, updatedAt: 0, timeline: edit.timeline as ProjectTimeline,
  };
  return (migrateProject(wrapped).project.timeline ?? { tracks: [], items: [] }) as SequencerEdit['timeline'];
}

/** Replaces the edit, for example after the host's undo. Does not report a commit. */
export function setEdit(edit: SequencerEdit | undefined, project: EmbedProject): void {
  const timeline = edit ? migrate(edit, project) : { tracks: [], items: [] };
  applyTimeline(timeline, { defaultTracks: () => createDefaultClassicTracks(DEFAULT_TRACK_HEIGHT) });
  // The player waits for a timeline load before following the playhead.
  useTimelineSettingsStore.getState().setTimelineLoading(false);
}

/** Sends completed edits to the host's history and undo/redo to the host. */
export function routeHistoryToHost(history: HostHistory): () => void {
  setTimelineHistoryDelegate({
    commit: (label) => history.commit(getEdit(), label),
    undo: () => history.undo(),
    redo: () => history.redo(),
  });
  return () => setTimelineHistoryDelegate(null);
}
