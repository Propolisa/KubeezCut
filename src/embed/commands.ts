/**
 * Commands for a host's menus, grouped like Blender's Video Sequencer header (View, Select, Marker, Add, Strip).
 * Commands with a shortcut run through it (keymap.ts), so menus and keys share one implementation and show the
 * current binding; the rest call the timeline actions directly.
 */
import type { HotkeyKey } from '@/config/hotkeys';
import { useTimelineStore } from '@/features/editor/deps/timeline-store';
import { useMediaLibraryStore } from '@/features/editor/deps/media-library';
import { useProjectStore } from '@/features/editor/deps/projects';
import { usePlaybackStore } from '@/shared/state/playback';
import { useSelectionStore } from '@/shared/state/selection';
import { createTimelineTemplateItem, getDefaultGeneratedLayerDurationInFrames } from '@/features/timeline/utils/generated-layer-items';
import { duplicateItems } from '@/features/timeline/stores/actions/item-actions';
import { bindingFor, runHotkey } from './keymap';

export interface Command {
  label: string;
  /** Binding for display, Blender style (for example "Shift Left"). */
  keys?: string;
  run: () => void | Promise<unknown>;
  enabled?: () => boolean;
}
export type MenuEntry = Command | '-';

const names: Record<string, string> = {
  mod: /Mac|iPhone|iPad/.test(navigator.platform) ? 'Cmd' : 'Ctrl', shift: 'Shift', alt: 'Alt', ctrl: 'Ctrl', meta: 'Cmd',
  left: 'Left', right: 'Right', up: 'Up', down: 'Down', home: 'Home', end: 'End', space: 'Space', delete: 'Delete',
  backspace: 'Backspace', tab: 'Tab', equal: 'Numpad +', minus: 'Numpad -', bracketleft: '[', bracketright: ']',
  backslash: '\\', comma: ',', period: '.',
};
const display = (binding: string) => binding.split(',')[0]!.split('+').map((part) => names[part] ?? part.toUpperCase()).join(' ');
const shortcut = (label: string, key: HotkeyKey, enabled?: () => boolean): Command => ({ label, keys: display(bindingFor(key)), run: () => runHotkey(key), enabled });

const selected = () => useSelectionStore.getState().selectedItemIds;
const hasSelection = () => selected().length > 0;

function visualTrackId(): string | undefined {
  return useTimelineStore.getState().tracks.filter((t) => !t.isGroup && t.kind !== 'audio').sort((a, b) => a.order - b.order)[0]?.id;
}

function addGenerated(itemType: 'text' | 'shape' | 'adjustment', label: string) {
  const trackId = visualTrackId();
  if (!trackId) return;
  const fps = useTimelineStore.getState().fps;
  const project = useProjectStore.getState().currentProject;
  const item = createTimelineTemplateItem({
    template: { type: 'timeline-template', itemType, label, ...(itemType === 'shape' ? { shapeType: 'rectangle' as const } : {}) },
    placement: {
      trackId, from: Math.round(usePlaybackStore.getState().currentFrame), durationInFrames: getDefaultGeneratedLayerDurationInFrames(fps),
      canvasWidth: project?.metadata.width ?? 1920, canvasHeight: project?.metadata.height ?? 1080,
    },
  });
  useTimelineStore.getState().addItems([item]);
  useSelectionStore.getState().selectItems([item.id]);
}

/**
 * Imports files through the browser's file picker and places each at the playhead, one after another, as Blender's
 * Add > Movie/Sound/Image does. `place` adds one media entry and returns the new strip ids.
 */
async function addFromFiles(place: (mediaId: string, frame: number) => Promise<string[]>) {
  const imported = await useMediaLibraryStore.getState().importMedia();
  let frame = Math.round(usePlaybackStore.getState().currentFrame);
  const fps = useTimelineStore.getState().fps;
  for (const media of imported ?? []) {
    await place(media.id, frame);
    frame += Math.max(1, Math.round((media.duration || 3) * fps));
  }
}

export function sequencerMenus(place: (mediaId: string, frame: number) => Promise<string[]>): Record<string, MenuEntry[]> {
  return {
    View: [
      shortcut('Frame All', 'ZOOM_TO_FIT'),
      shortcut('Zoom In', 'ZOOM_IN'),
      shortcut('Zoom Out', 'ZOOM_OUT'),
      '-',
      shortcut('Play Animation', 'PLAY_PAUSE'),
      shortcut('Jump to Start', 'GO_TO_START'),
      shortcut('Jump to End', 'GO_TO_END'),
      '-',
      shortcut('Snapping', 'TOGGLE_SNAP'),
    ],
    Select: [
      { label: 'All', keys: 'A', run: () => useSelectionStore.getState().selectItems(useTimelineStore.getState().items.map((i) => i.id)) },
      { label: 'None', keys: 'Alt A', run: () => useSelectionStore.getState().clearSelection() },
      {
        label: 'Invert', keys: 'Ctrl I', run: () => {
          const current = new Set(selected());
          useSelectionStore.getState().selectItems(useTimelineStore.getState().items.map((i) => i.id).filter((id) => !current.has(id)));
        },
      },
    ],
    Marker: [
      shortcut('Add Marker', 'ADD_MARKER'),
      shortcut('Delete Marker', 'REMOVE_MARKER'),
      '-',
      shortcut('Jump to Previous Marker', 'PREVIOUS_MARKER'),
      shortcut('Jump to Next Marker', 'NEXT_MARKER'),
    ],
    Add: [
      { label: 'Movie...', run: () => addFromFiles(place) },
      { label: 'Sound...', run: () => addFromFiles(place) },
      { label: 'Image/Sequence...', run: () => addFromFiles(place) },
      '-',
      { label: 'Color', run: () => addGenerated('shape', 'Color') },
      { label: 'Text', run: () => addGenerated('text', 'Text') },
      { label: 'Adjustment Layer', run: () => addGenerated('adjustment', 'Adjustment Layer') },
    ],
    Strip: [
      shortcut('Split', 'SPLIT_AT_PLAYHEAD', hasSelection),
      shortcut('Join', 'JOIN_ITEMS', () => selected().length > 1),
      shortcut('Freeze Frame', 'FREEZE_FRAME', hasSelection),
      '-',
      shortcut('Copy', 'COPY', hasSelection),
      shortcut('Paste', 'PASTE'),
      {
        label: 'Duplicate', keys: 'Shift D', enabled: hasSelection, run: () => {
          const items = useTimelineStore.getState().items.filter((i) => selected().includes(i.id));
          if (!items.length) return;
          const end = Math.max(...items.map((i) => i.from + i.durationInFrames));
          const start = Math.min(...items.map((i) => i.from));
          const created = duplicateItems(items.map((i) => i.id), items.map((i) => ({ from: i.from - start + end, trackId: i.trackId })));
          useSelectionStore.getState().selectItems(created.map((i) => i.id));
        },
      },
      '-',
      shortcut('Delete', 'DELETE_SELECTED', hasSelection),
      shortcut('Ripple Delete', 'RIPPLE_DELETE', hasSelection),
      '-',
      shortcut('Link Audio and Video', 'LINK_AUDIO_VIDEO', hasSelection),
      shortcut('Unlink Audio and Video', 'UNLINK_AUDIO_VIDEO', hasSelection),
    ],
  };
}
