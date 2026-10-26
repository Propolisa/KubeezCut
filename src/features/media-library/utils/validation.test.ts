// @vitest-environment node
import { describe, expect, it } from 'vitest';
import {
  getMediaType,
  getMimeType,
  validateMediaFile,
  withDetectedMimeType,
} from '@/features/media-library/utils/validation';

describe('validation', () => {
  it('prefers canonical extension MIME for alternate mkv browser values', () => {
    const file = new File(['data'], 'capture.mkv', { type: 'video/matroska' });

    expect(getMimeType(file)).toBe('video/x-matroska');
  });

  it('preserves browser MIME for ambiguous mp4 containers', () => {
    const file = new File(['data'], 'podcast.mp4', { type: 'audio/mp4' });

    expect(getMimeType(file)).toBe('audio/mp4');
  });

  it('accepts newly supported avi, m4a, and svg files', () => {
    const avi = new File(['data'], 'clip.avi', { type: 'video/x-msvideo' });
    const m4a = new File(['data'], 'voice.m4a', { type: 'audio/mp4' });
    const svg = new File(['<svg></svg>'], 'graphic.svg', { type: '' });

    expect(validateMediaFile(avi)).toEqual({ valid: true });
    expect(validateMediaFile(m4a)).toEqual({ valid: true });
    expect(validateMediaFile(svg)).toEqual({ valid: true });
  });

  it('classifies alternate supported MIME types correctly', () => {
    expect(getMediaType('video/matroska')).toBe('video');
    expect(getMediaType('audio/x-m4a')).toBe('audio');
    expect(getMediaType('audio/mp4')).toBe('audio');
    expect(getMediaType('image/svg+xml')).toBe('image');
  });

  it('accepts the MIME names Android reports for supported formats', () => {
    expect(validateMediaFile(new File(['data'], 'tone.wav', { type: 'audio/x-wav' })).valid).toBe(true);
    expect(getMimeType(new File(['data'], 'VID_1.3gp', { type: 'video/3gpp' }))).toBe('video/mp4');
    expect(getMimeType(new File(['data'], 'memo', { type: 'audio/3gpp' }))).toBe('audio/mp4');
    expect(validateMediaFile(new File(['data'], 'voice.weba', { type: 'audio/webm' })).valid).toBe(true);
  });

  it('detects the format from content when name and type are unknown', async () => {
    const mp4 = new Uint8Array([0, 0, 0, 24, ...'ftypisom'].map((c) => (typeof c === 'string' ? c.charCodeAt(0) : c)));
    const wav = new TextEncoder().encode('RIFF\0\0\0\0WAVEfmt ');
    expect((await withDetectedMimeType(new File([mp4], '1000012345'))).type).toBe('video/mp4');
    expect((await withDetectedMimeType(new File([wav], 'recording'))).type).toBe('audio/wav');
    const unknown = new File(['plain text'], 'notes');
    expect(await withDetectedMimeType(unknown)).toBe(unknown);
  });
});
