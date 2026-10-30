import { describe, expect, it, vi } from 'vitest';
import { setSceneAudioSource } from '@/shared/scene/scene-audio';
import { resolveMediaUrls } from './media-resolver';
import type { AudioItem, TimelineTrack } from '@/types/timeline';

describe('resolveMediaUrls', () => {
  it('resolves Scene Audio strips for compositing, silent when the host has no sound', async () => {
    setSceneAudioSource({ getAudio: vi.fn(async () => null) });
    const strip = { id: 'a', type: 'audio', scene: 'scene', src: '', trackId: 't', from: 0, durationInFrames: 10, label: 'Scene' } as AudioItem;
    const [track] = await resolveMediaUrls([{ id: 't', items: [strip] } as unknown as TimelineTrack]);
    expect(track!.items[0]).toMatchObject({ scene: 'scene', src: '' });
    expect(track!.items[0]).not.toBe(strip);
  });
});
