/**
 * Touch support for HTML5 drag and drop inside islands. Touch browsers do not reliably fire drag events, so a
 * long press on a `draggable` element starts a drag that this module drives: it dispatches dragstart, dragenter,
 * dragover, dragleave, drop and dragend with one shared DataTransfer, as a mouse drag would, so KubeezCut's drag
 * sources and drop zones work unchanged.
 */
const LONG_PRESS_MS = 350;
const MOVE_TOLERANCE = 8;

interface Session {
  source: HTMLElement;
  data: DataTransfer;
  ghost: HTMLElement;
  over: Element | null;
  accepted: boolean;
}

function fire(target: Element, type: string, data: DataTransfer, x: number, y: number): boolean {
  const event = new DragEvent(type, { bubbles: true, cancelable: true, composed: true, clientX: x, clientY: y, dataTransfer: data });
  return target.dispatchEvent(event);
}

function makeGhost(source: HTMLElement): HTMLElement {
  const rect = source.getBoundingClientRect();
  const ghost = source.cloneNode(true) as HTMLElement;
  Object.assign(ghost.style, {
    position: 'fixed', left: '0', top: '0', width: `${rect.width}px`, height: `${rect.height}px`, margin: '0',
    opacity: '0.75', pointerEvents: 'none', zIndex: '2147483647', transformOrigin: 'center',
  });
  // Keep the clone inside the scoped stylesheet's reach.
  const host = source.closest('.kc-embed') ?? document.body;
  host.appendChild(ghost);
  return ghost;
}

function moveGhost(session: Session, x: number, y: number) {
  const { width, height } = session.ghost.getBoundingClientRect();
  session.ghost.style.transform = `translate(${x - width / 2}px, ${y - height / 2}px) scale(0.8)`;
}

function update(session: Session, x: number, y: number) {
  moveGhost(session, x, y);
  const target = document.elementFromPoint(x, y);
  if (target !== session.over) {
    if (target) fire(target, 'dragenter', session.data, x, y);
    if (session.over) fire(session.over, 'dragleave', session.data, x, y);
    session.over = target;
  }
  // A drop zone accepts by cancelling dragover.
  session.accepted = target ? !fire(target, 'dragover', session.data, x, y) : false;
}

function finish(session: Session, x: number, y: number, cancelled: boolean) {
  session.ghost.remove();
  if (!cancelled && session.over && session.accepted) fire(session.over, 'drop', session.data, x, y);
  else if (session.over) fire(session.over, 'dragleave', session.data, x, y);
  fire(session.source, 'dragend', session.data, x, y);
}

let installed = false;

export function installTouchDrag(): void {
  if (installed || typeof DragEvent === 'undefined' || typeof DataTransfer === 'undefined') return;
  installed = true;
  let session: Session | null = null;
  let timer: ReturnType<typeof setTimeout> | null = null;
  let start: { x: number; y: number; id: number; source: HTMLElement } | null = null;

  const clear = () => {
    if (timer) clearTimeout(timer);
    timer = null;
    start = null;
  };

  document.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' || session) return;
    const source = (e.target as Element | null)?.closest?.<HTMLElement>('.kc-embed [draggable="true"]');
    if (!source) return;
    start = { x: e.clientX, y: e.clientY, id: e.pointerId, source };
    timer = setTimeout(() => {
      if (!start) return;
      const data = new DataTransfer();
      data.effectAllowed = 'all';
      if (!fire(start.source, 'dragstart', data, start.x, start.y)) { clear(); return; }
      navigator.vibrate?.(10);
      session = { source: start.source, data, ghost: makeGhost(start.source), over: null, accepted: false };
      update(session, start.x, start.y);
      timer = null;
    }, LONG_PRESS_MS);
  }, true);

  document.addEventListener('pointermove', (e) => {
    if (!start || e.pointerId !== start.id) return;
    if (session) { if (e.pointerType !== 'touch') update(session, e.clientX, e.clientY); }
    // Moving before the long press completes is a scroll or a swipe, not a drag.
    else if (Math.hypot(e.clientX - start.x, e.clientY - start.y) > MOVE_TOLERANCE) clear();
  }, true);

  const end = (x: number, y: number, cancelled: boolean) => {
    if (session) {
      finish(session, x, y, cancelled);
      session = null;
    }
    clear();
  };
  // Touch drags follow touch events: browsers may cancel the pointer once a touch turns into a gesture.
  document.addEventListener('pointerup', (e) => {
    if (start && e.pointerId === start.id && !(session && e.pointerType === 'touch')) end(e.clientX, e.clientY, false);
  }, true);
  document.addEventListener('pointercancel', (e) => {
    if (start && e.pointerId === start.id && !session) clear();
  }, true);
  document.addEventListener('touchmove', (e) => {
    if (!session) return;
    // Keep the page from scrolling while dragging.
    e.preventDefault();
    const touch = e.touches[0];
    if (touch) update(session, touch.clientX, touch.clientY);
  }, { passive: false, capture: true });
  const touchEnd = (cancelled: boolean) => (e: TouchEvent) => {
    if (!session) return;
    const touch = e.changedTouches[0];
    end(touch?.clientX ?? 0, touch?.clientY ?? 0, cancelled);
  };
  document.addEventListener('touchend', touchEnd(false), true);
  document.addEventListener('touchcancel', touchEnd(true), true);

  // Keep the browser from starting its own drag or context menu on the long press.
  document.addEventListener('contextmenu', (e) => { if (session || timer) e.preventDefault(); }, true);
  document.addEventListener('dragstart', (e) => { if (e.isTrusted && (session || timer)) e.preventDefault(); }, true);
}
