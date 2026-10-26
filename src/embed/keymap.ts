/**
 * Keyboard handling for embedded islands: shortcuts apply only while the pointer is over an island (or focus is
 * inside one), as Blender keymaps follow the hovered area, and an optional Blender keymap preset.
 */
import { HOTKEYS, setHotkeysActive, type HotkeyKey, type HotkeyOverrideMap } from '@/config/hotkeys';
import { useSettingsStore } from '@/features/settings/stores/settings-store';

const regions = new Set<HTMLElement>();
let forced = 0;

function active(): boolean {
  if (forced > 0) return true;
  const focus = document.activeElement;
  for (const region of regions) {
    if (region.matches(':hover') || (focus && region.contains(focus))) return true;
  }
  return false;
}

/** Elements whose hover or focus enables the shortcuts (island roots and the popup layer). */
export function addKeymapRegion(element: HTMLElement): () => void {
  regions.add(element);
  setHotkeysActive(active);
  return () => regions.delete(element);
}

/**
 * Blender's Video Sequencer keymap where it overlaps KubeezCut's commands. Commands Blender lacks keep
 * KubeezCut's keys unless those collide with Blender's (Shift A is Add, Shift Left/Right jump to the ends,
 * Home frames all, Alt I clears keyframes).
 */
export const BLENDER_KEYMAP: HotkeyOverrideMap = {
  SPLIT_AT_PLAYHEAD: 'k',
  DELETE_SELECTED: 'x',
  DELETE_SELECTED_ALT: 'delete',
  RIPPLE_DELETE: 'shift+delete',
  RIPPLE_DELETE_ALT: 'shift+x',
  GO_TO_START: 'shift+left',
  GO_TO_END: 'shift+right',
  NUDGE_LEFT: 'alt+left',
  NUDGE_RIGHT: 'alt+right',
  NUDGE_UP: 'alt+up',
  NUDGE_DOWN: 'alt+down',
  ZOOM_TO_FIT: 'home',
  ZOOM_IN: 'equal',
  ZOOM_OUT: 'minus',
  TOGGLE_SNAP: 'shift+tab',
  CLEAR_KEYFRAMES: 'alt+i',
  TOGGLE_KEYFRAME_EDITOR: 'mod+tab',
  PREVIOUS_MARKER: 'shift+bracketleft',
  NEXT_MARKER: 'shift+bracketright',
};

export type Keymap = 'blender' | 'kubeezcut';

/** Applies a keymap preset to the shortcut settings (stored per origin, so the host's choice persists). */
export function setKeymap(keymap: Keymap): void {
  const settings = useSettingsStore.getState();
  settings.resetHotkeys();
  if (keymap === 'blender') {
    for (const [key, binding] of Object.entries(BLENDER_KEYMAP)) settings.setHotkeyBinding(key as HotkeyKey, binding);
  }
}

/** Current binding of a command, for menus (for example 'shift+left'). */
export function bindingFor(key: HotkeyKey): string {
  return useSettingsStore.getState().hotkeyOverrides[key] ?? HOTKEYS[key];
}

const codes: Record<string, [string, string]> = {
  space: [' ', 'Space'], left: ['ArrowLeft', 'ArrowLeft'], right: ['ArrowRight', 'ArrowRight'], up: ['ArrowUp', 'ArrowUp'],
  down: ['ArrowDown', 'ArrowDown'], home: ['Home', 'Home'], end: ['End', 'End'], delete: ['Delete', 'Delete'],
  backspace: ['Backspace', 'Backspace'], tab: ['Tab', 'Tab'], equal: ['=', 'Equal'], minus: ['-', 'Minus'],
  backslash: ['\\', 'Backslash'], bracketleft: ['[', 'BracketLeft'], bracketright: [']', 'BracketRight'],
  comma: [',', 'Comma'], period: ['.', 'Period'],
};

/** Runs a command through its shortcut, so menus and keys share one implementation. */
export function runHotkey(key: HotkeyKey): void {
  const parts = bindingFor(key).split(',')[0]!.split('+');
  const name = parts.pop()!;
  const [eventKey, code] = codes[name] ?? (/^[a-z]$/.test(name) ? [name, `Key${name.toUpperCase()}`] : /^\d$/.test(name) ? [name, `Digit${name}`] : [name, name]);
  const mac = /Mac|iPhone|iPad/.test(navigator.platform);
  const init: KeyboardEventInit = {
    key: eventKey, code, bubbles: true, cancelable: true,
    shiftKey: parts.includes('shift'), altKey: parts.includes('alt'),
    ctrlKey: parts.includes('ctrl') || (parts.includes('mod') && !mac),
    metaKey: parts.includes('meta') || (parts.includes('mod') && mac),
  };
  forced++;
  try {
    document.dispatchEvent(new KeyboardEvent('keydown', init));
    document.dispatchEvent(new KeyboardEvent('keyup', init));
  } finally {
    forced--;
  }
}
