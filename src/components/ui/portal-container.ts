/**
 * Where popups (menus, dialogs, tooltips) mount. Undefined means document.body, as in the standalone app.
 * Embedding hosts set an element inside the scoped `.kc-embed` styles so popups keep their styling.
 */
let container: HTMLElement | undefined;
export function setPortalContainer(element: HTMLElement | undefined): void {
  container = element;
}
export function getPortalContainer(): HTMLElement | undefined {
  return container;
}
