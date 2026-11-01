import { describe, expect, it, vi } from 'vitest';
import type { TimelineTrack } from '@/types/timeline';

vi.mock('@/features/export/utils/client-render-engine', () => ({ createCompositionRenderer: vi.fn() }));
vi.mock('@/features/timeline/deps/media-library-resolver', () => ({
  // The media library knows media-ok only; stored URLs are never used.
  resolveMediaUrls: vi.fn(async (tracks: TimelineTrack[]) => tracks.map((track) => ({
    ...track,
    items: track.items.map((item) => (item.mediaId ? { ...item, src: item.mediaId === 'media-ok' ? 'blob:fresh' : '' } : item)),
  }))),
}));
const release = vi.fn();
vi.mock('@/shared/scene/scene-audio', () => ({
  holdSceneAudio: vi.fn(async (scene: string) => (scene === 'Scene' ? { url: 'blob:scene-held', release } : null)),
}));

const { resolveCompositorMedia } = await import('./compositor');

const strip = (id: string, extra: object) => ({ id, label: id, trackId: 't', from: 0, durationInFrames: 10, ...extra });

describe('openCompositor media', () => {
  it('takes media from the library and holds Scene Audio, naming strips whose media is missing', async () => {
    const tracks = [{
      id: 't', name: 'V1', order: 0, height: 60, locked: false, visible: true, muted: false, solo: false,
      items: [
        strip('Clip', { type: 'video', mediaId: 'media-ok', src: 'blob:dead' }),
        strip('Gone', { type: 'audio', mediaId: 'media-gone', src: 'blob:dead' }),
        strip('Scene Sound', { type: 'audio', scene: 'Scene', src: '' }),
      ],
    }] as unknown as TimelineTrack[];
    const warnings: string[] = [];
    const media = await resolveCompositorMedia(tracks, warnings);

    expect(media.tracks[0]!.items.map((item) => ('src' in item ? item.src : undefined))).toEqual(['blob:fresh', '', 'blob:scene-held']);
    expect(warnings).toEqual(['Strip "Gone" has missing media']);
    media.release();
    expect(release).toHaveBeenCalledTimes(1);
  });
});
