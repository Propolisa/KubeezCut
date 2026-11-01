import { blobUrlManager } from '@/infrastructure/browser/blob-url-manager';

/** A scene's sound as the host renders it: one Float32Array per channel. */
export interface SceneAudio {
  samples: Float32Array[];
  sampleRate: number;
}

/**
 * Renders Scene Audio strips' sound: each scene's sound over its whole frame range, from its first frame, at its
 * frame rate. However the host makes the sound (Bylonder: the scene's Babylon spatial audio), it arrives as samples.
 */
export interface SceneAudioSource {
  getAudio(scene: string): Promise<SceneAudio | null>;
  /** Whether the host plays the scene's sound live with the timeline; its strips are then silent in the preview, so it
   * is not heard twice. Exports still mix them. */
  live?(scene: string): boolean;
  /** Fires when scenes changed (their sound renders again) or which play live did. */
  subscribe?(listener: () => void): () => void;
}

/** A held URL of a scene's sound; release() lets it go once nothing else holds it. */
export interface HeldSceneAudio {
  url: string;
  release(): void;
}

let source: SceneAudioSource | null = null;
let unsubscribe: (() => void) | null = null;
let generation = 0;
// Each rendering of a scene's sound has its own key, so a render job holding the previous one keeps it after a change.
const wavs = new Map<string, { key: string; wav: Promise<Blob | null> }>();
const previewUrls = new Map<string, Promise<HeldSceneAudio | null>>();
const listeners = new Set<() => void>();

function forget() {
  for (const held of previewUrls.values()) void held.then((audio) => audio?.release());
  previewUrls.clear();
  wavs.clear();
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

/** Whether the host plays the scene's sound live, so the preview leaves its strips silent. */
export const isSceneAudioLive = (scene: string) => source?.live?.(scene) ?? false;

/** The scene's sound as a URL held until release(), even after the scene changes; null when the host has none. */
export async function holdSceneAudio(scene: string): Promise<HeldSceneAudio | null> {
  let rendered = wavs.get(scene);
  if (!rendered) {
    rendered = { key: `scene-audio:${scene}:${++generation}`, wav: (source?.getAudio(scene) ?? Promise.resolve(null)).then((audio) => audio && encodeWav(audio)) };
    wavs.set(scene, rendered);
  }
  const { key, wav } = rendered;
  const blob = await wav;
  return blob && { url: blobUrlManager.acquire(key, blob), release: () => blobUrlManager.release(key) };
}

/** A playable URL of a scene's sound for the preview, empty when the host has none; kept until the scene changes. */
export async function sceneAudioUrl(scene: string): Promise<string> {
  let held = previewUrls.get(scene);
  if (!held) {
    held = holdSceneAudio(scene);
    previewUrls.set(scene, held);
  }
  return (await held)?.url ?? '';
}
