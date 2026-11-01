/**
 * Options for mediabunny's UrlSource. A blob: or data: URL that fails to load never recovers (its media is gone or
 * was revoked), so it is not retried; mediabunny otherwise retries same-origin failures without end.
 */
export function urlSourceOptions(src: string | URL | Request): { getRetryDelay?: () => null } {
  const url = src instanceof Request ? src.url : String(src);
  return /^(blob|data):/.test(url) ? { getRetryDelay: () => null } : {};
}
