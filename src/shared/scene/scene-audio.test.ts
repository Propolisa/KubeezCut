import { describe, expect, it, beforeEach, vi } from 'vitest';
import { setSceneAudioSource, sceneAudioUrl, subscribeSceneAudio, isSceneAudioLive, type SceneAudioSource } from './scene-audio';
import { getObjectUrlBlob } from '@/infrastructure/browser/object-url-registry';
import { blobUrlManager } from '@/infrastructure/browser/blob-url-manager';

let urls = 0;
const bytesOf = (blob: Blob) => new Promise<ArrayBuffer>((resolve) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result as ArrayBuffer);
  reader.readAsArrayBuffer(blob);
});
beforeEach(() => {
  blobUrlManager.releaseAll();
  vi.stubGlobal('URL', { ...URL, createObjectURL: () => `blob:scene-${++urls}`, revokeObjectURL: () => {} });
});

function hostWith(audio: { samples: Float32Array[]; sampleRate: number } | null) {
  const listeners = new Set<() => void>();
  const source: SceneAudioSource = {
    getAudio: vi.fn(async () => audio),
    subscribe: (listener) => { listeners.add(listener); return () => listeners.delete(listener); },
  };
  return { source, change: () => listeners.forEach((listener) => listener()) };
}

describe('Scene Audio', () => {
  it('knows the scenes the host plays live, whose strips the preview leaves silent', () => {
    setSceneAudioSource({ getAudio: vi.fn(async () => null), live: (scene) => scene === 'active' });
    expect([isSceneAudioLive('active'), isSceneAudioLive('other')]).toEqual([true, false]);
    setSceneAudioSource({ getAudio: vi.fn(async () => null) });
    expect(isSceneAudioLive('active')).toBe(false);
  });

  it('plays the host scene\'s sound as a WAV file, rendered once until the scene changes', async () => {
    const host = hostWith({ samples: [new Float32Array([0, 0.5, -1]), new Float32Array([0, 0.25, 1])], sampleRate: 48000 });
    setSceneAudioSource(host.source);
    const url = await sceneAudioUrl('scene');
    const wav = getObjectUrlBlob(url)!;
    const view = new DataView(await bytesOf(wav));
    expect(wav.type).toBe('audio/wav');
    expect([view.getUint16(22, true), view.getUint32(24, true), view.getUint32(40, true)]).toEqual([2, 48000, 12]);
    expect(view.getInt16(44 + 4 * 2, true)).toBe(-0x7fff);
    expect(await sceneAudioUrl('scene')).toBe(url);
    expect(host.source.getAudio).toHaveBeenCalledTimes(1);

    const changed = vi.fn();
    subscribeSceneAudio(changed);
    host.change();
    expect(changed).toHaveBeenCalled();
    expect(await sceneAudioUrl('scene')).not.toBe(url);
    expect(host.source.getAudio).toHaveBeenCalledTimes(2);
  });

});
