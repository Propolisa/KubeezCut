/**
 * Touch support for mouse-only interactions. The preview's transform gizmo, selection and mask or corner pin
 * editors listen for mousedown, then mousemove and mouseup on window; touch browsers send mouse events only for
 * a tap, never during a drag. Inside an element marked `data-kc-touch-mouse`, a one-finger touch is replayed as
 * those mouse events, and the browser's own panning and zooming is off (embed.css), so those editors work by
 * touch unchanged.
 */
const SKIP = 'input,textarea,select,[contenteditable="true"],[draggable="true"]';

function fire(type: string, target: EventTarget, e: PointerEvent, buttons: number) {
  target.dispatchEvent(new MouseEvent(type, {
    bubbles: true, cancelable: true, composed: true, view: window,
    clientX: e.clientX, clientY: e.clientY, screenX: e.screenX, screenY: e.screenY,
    button: 0, buttons, detail: 1,
    shiftKey: e.shiftKey, altKey: e.altKey, ctrlKey: e.ctrlKey, metaKey: e.metaKey,
  }));
}

let installed = false;

export function installTouchMouse(): void {
  if (installed) return;
  installed = true;
  let active: number | null = null;

  document.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' || !e.isPrimary || active !== null) return;
    const target = e.target as Element | null;
    if (!target?.closest?.('[data-kc-touch-mouse]') || target.closest(SKIP)) return;
    // Cancelling pointerdown stops the browser's own compatibility mouse events, so the press is not sent twice.
    e.preventDefault();
    active = e.pointerId;
    fire('mousedown', target, e, 1);
  }, true);

  document.addEventListener('pointermove', (e) => {
    if (e.pointerId !== active) return;
    fire('mousemove', document.elementFromPoint(e.clientX, e.clientY) ?? document, e, 1);
  }, true);

  const end = (e: PointerEvent) => {
    if (e.pointerId !== active) return;
    active = null;
    fire('mouseup', document.elementFromPoint(e.clientX, e.clientY) ?? document, e, 0);
  };
  document.addEventListener('pointerup', end, true);
  document.addEventListener('pointercancel', end, true);
}
