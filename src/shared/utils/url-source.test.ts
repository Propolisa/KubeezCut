import { describe, expect, it } from 'vitest';
import { urlSourceOptions } from './url-source';

describe('urlSourceOptions', () => {
  it('does not retry blob: and data: URLs, which never come back', () => {
    for (const url of ['blob:https://example.com/0f6c', 'data:audio/wav;base64,AAAA']) {
      expect(urlSourceOptions(url).getRetryDelay?.()).toBeNull();
    }
  });

  it('keeps mediabunny\'s retries for network URLs', () => {
    expect(urlSourceOptions('https://example.com/clip.mp4')).toEqual({});
    expect(urlSourceOptions(new URL('https://example.com/clip.mp4'))).toEqual({});
  });
});
