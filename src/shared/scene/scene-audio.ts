import { blobUrlManager } from '@/infrastructure/browser/blob-url-manager';

/** A scene's sound as the host renders it: one Float32Array per channel. */
export interface SceneAudio {
  samples: Float32Array[];
  sampleRate: number;
}

/** Renders Scene Audio strips' sound: each scene's sound over its whole frame range, from its first frame. */
export interface SceneAudioSource {
  getAudio(scene: string): Promise<SceneAudio | null>;
  /** Fires when scenes changed, so their sound renders again. */
  subscribe?(listener: () => void): () => void;
}

let source: SceneAudioSource | null = null;
let unsubscribe: (() => void) | null = null;
const urls = new Map<string, Promise<string>>();
const listeners = new Set<() => void>();
const urlKey = (scene: string) => `scene-audio:${scene}`;

function forget() {
  for (const scene of urls.keys()) blobUrlManager.invalidate(urlKey(scene));
  urls.clear();
  for (const listener of listeners) listener();
}

export function setSceneAudioSource(next: SceneAudioSource | null) {
  unsubscribe?.();
  source = next;
  unsubscribe = next?.subscribe?.(forget) ?? null;
  forget();
}

/** Fires when Scene Audio strips' sound may have changed, so players resolve it again. */
export function subscribeSceneAudio(listener: () => void): () => void {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

/** A WAV file of 16-bit samples, which every decoder in the editor reads. */
function encodeWav({ samples, sampleRate }: SceneAudio): Blob {
  const channels = samples.length, frames = samples[0]?.length ?? 0, bytes = frames * channels * 2;
  const view = new DataView(new ArrayBuffer(44 + bytes));
  const text = (offset: number, value: string) => { for (let i = 0; i < value.length; i++) view.setUint8(offset + i, value.charCodeAt(i)); };
  text(0, 'RIFF'); view.setUint32(4, 36 + bytes, true); text(8, 'WAVEfmt '); view.setUint32(16, 16, true); view.setUint16(20, 1, true);
  view.setUint16(22, channels, true); view.setUint32(24, sampleRate, true); view.setUint32(28, sampleRate * channels * 2, true);
  view.setUint16(32, channels * 2, true); view.setUint16(34, 16, true); text(36, 'data'); view.setUint32(40, bytes, true);
  for (let i = 0, offset = 44; i < frames; i++) {
    for (const channel of samples) { view.setInt16(offset, Math.max(-1, Math.min(1, channel[i] ?? 0)) * 0x7fff, true); offset += 2; }
  }
  return new Blob([view.buffer], { type: 'audio/wav' });
}

/** A playable URL of a scene's sound, empty when the host has none; kept until the scene changes. */
export function sceneAudioUrl(scene: string): Promise<string> {
  let url = urls.get(scene);
  if (!url) {
    url = (source?.getAudio(scene) ?? Promise.resolve(null)).then((audio) => (audio ? blobUrlManager.acquire(urlKey(scene), encodeWav(audio)) : ''));
    urls.set(scene, url);
  }
  return url;
}
