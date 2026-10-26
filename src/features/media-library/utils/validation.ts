/**
 * Media file validation utilities
 */

// Supported file types based on requirements
const SUPPORTED_VIDEO_TYPES = [
  'video/mp4',
  'video/webm',
  'video/quicktime', // .mov files
  'video/x-matroska', // .mkv files
  'video/matroska', // .mkv files (alternate browser MIME)
  'video/x-msvideo', // .avi files
];

const SUPPORTED_AUDIO_TYPES = [
  'audio/mp3',
  'audio/mpeg', // MP3 also uses audio/mpeg
  'audio/wav',
  'audio/aac',
  'audio/x-m4a', // .m4a files
  'audio/mp4', // .m4a also reported as audio/mp4
  'audio/ogg', // Opus codec in Ogg container
  'audio/webm', // Opus or Vorbis in WebM (browser and Android recordings)
  'audio/flac',
];

const SUPPORTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml', // .svg files
];

const GENERIC_BROWSER_MIME_TYPES = new Set([
  '',
  'application/octet-stream',
  'binary/octet-stream',
]);
const EXTENSION_PREFERRED_MIME_TYPES = new Set([
  '.mkv',
  '.m4a',
]);

// Other names browsers and mobile platforms report for supported formats (Android reports WAV as
// audio/x-wav and camera or recorder files as 3GPP, which is an MP4 container).
const MIME_ALIASES: Record<string, string> = {
  'audio/x-wav': 'audio/wav',
  'audio/wave': 'audio/wav',
  'audio/vnd.wave': 'audio/wav',
  'audio/x-pn-wav': 'audio/wav',
  'audio/x-aac': 'audio/aac',
  'audio/aacp': 'audio/aac',
  'audio/x-mp3': 'audio/mpeg',
  'audio/x-mpeg': 'audio/mpeg',
  'audio/opus': 'audio/ogg',
  'audio/x-flac': 'audio/flac',
  'audio/3gpp': 'audio/mp4',
  'audio/3gpp2': 'audio/mp4',
  'video/3gpp': 'video/mp4',
  'video/3gpp2': 'video/mp4',
  'video/x-m4v': 'video/mp4',
  'video/mkv': 'video/x-matroska',
  'video/avi': 'video/x-msvideo',
  'image/pjpeg': 'image/jpeg',
};

// Extension to MIME type mapping for fallback when browser doesn't provide MIME type
const EXTENSION_TO_MIME: Record<string, string> = {
  // Video
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.mkv': 'video/x-matroska',
  '.avi': 'video/x-msvideo',
  // Audio
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.aac': 'audio/aac',
  '.m4a': 'audio/x-m4a',
  '.ogg': 'audio/ogg',
  '.opus': 'audio/ogg',
  '.weba': 'audio/webm',
  '.flac': 'audio/flac',
  '.wave': 'audio/wav',
  '.3gp': 'video/mp4',
  '.3g2': 'video/mp4',
  '.m4v': 'video/mp4',
  // Image
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

/**
 * Get MIME type from file, falling back to extension-based detection
 */
export function getMimeType(file: File): string {
  const ext = file.name.toLowerCase().match(/\.[^.]+$/)?.[0];
  const extensionMimeType = ext ? EXTENSION_TO_MIME[ext] : undefined;

  // Prefer the extension for formats whose browser-reported MIME commonly
  // varies despite the media kind staying the same (for example .mkv, .m4a).
  if (ext && extensionMimeType && EXTENSION_PREFERRED_MIME_TYPES.has(ext)) {
    return extensionMimeType;
  }

  if (!GENERIC_BROWSER_MIME_TYPES.has(file.type)) {
    return MIME_ALIASES[file.type] ?? file.type;
  }

  return extensionMimeType || '';
}

function isSupportedMimeType(mimeType: string): boolean {
  return SUPPORTED_VIDEO_TYPES.includes(mimeType) || SUPPORTED_AUDIO_TYPES.includes(mimeType) || SUPPORTED_IMAGE_TYPES.includes(mimeType);
}

function startsWith(bytes: Uint8Array, signature: string, offset = 0): boolean {
  if (bytes.length < offset + signature.length) return false;
  for (let i = 0; i < signature.length; i++) if (bytes[offset + i] !== signature.charCodeAt(i)) return false;
  return true;
}

/** MIME type from a file's leading bytes, for files whose name and reported type say nothing useful. */
function sniffMimeType(bytes: Uint8Array): string | null {
  if (startsWith(bytes, 'ftyp', 4)) {
    const brand = String.fromCharCode(...bytes.subarray(8, 12));
    if (brand === 'qt  ') return 'video/quicktime';
    return brand.startsWith('M4A') || brand.startsWith('M4B') ? 'audio/mp4' : 'video/mp4';
  }
  if (startsWith(bytes, '\x1a\x45\xdf\xa3')) return 'video/webm';
  if (startsWith(bytes, 'RIFF') && startsWith(bytes, 'WAVE', 8)) return 'audio/wav';
  if (startsWith(bytes, 'RIFF') && startsWith(bytes, 'AVI ', 8)) return 'video/x-msvideo';
  if (startsWith(bytes, 'RIFF') && startsWith(bytes, 'WEBP', 8)) return 'image/webp';
  if (startsWith(bytes, 'OggS')) return 'audio/ogg';
  if (startsWith(bytes, 'fLaC')) return 'audio/flac';
  if (startsWith(bytes, 'ID3')) return 'audio/mpeg';
  if (bytes[0] === 0xff && ((bytes[1] ?? 0) & 0xf6) === 0xf0) return 'audio/aac';
  if (bytes[0] === 0xff && ((bytes[1] ?? 0) & 0xe0) === 0xe0) return 'audio/mpeg';
  if (startsWith(bytes, '\x89PNG')) return 'image/png';
  if (bytes[0] === 0xff && bytes[1] === 0xd8) return 'image/jpeg';
  if (startsWith(bytes, 'GIF8')) return 'image/gif';
  return null;
}

/**
 * Returns the file with a supported MIME type when its name and reported type are unknown but its content is a
 * supported format (for example files from Android's picker that have no extension). The returned File reads the
 * same data; nothing is copied.
 */
export async function withDetectedMimeType(file: File): Promise<File> {
  if (isSupportedMimeType(getMimeType(file))) return file;
  const sniffed = sniffMimeType(new Uint8Array(await file.slice(0, 16).arrayBuffer()));
  return sniffed ? new File([file], file.name, { type: sniffed, lastModified: file.lastModified }) : file;
}

interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validate a media file before upload
 */
export function validateMediaFile(file: File): ValidationResult {
  // Check file size
  if (file.size === 0) {
    return { valid: false, error: 'File is empty' };
  }

  // Check MIME type (with extension-based fallback for files like .mkv where browser doesn't provide MIME)
  // SECURITY NOTE: This validation relies on client-provided MIME types which can be spoofed.
  // For production use, consider adding server-side validation that checks file headers/magic numbers.
  // SVG files must be treated as untrusted content downstream; render them as image sources and avoid
  // inline DOM injection where embedded scripts or event handlers could execute.
  // Additional validation with mediabunny.canDecode() is performed during metadata extraction.
  const mimeType = getMimeType(file);
  if (!isSupportedMimeType(mimeType)) {
    return {
      valid: false,
      error: `Unsupported file type: ${mimeType || file.name.split('.').pop()}. Supported types: video (mp4, 3gp, webm, mov, mkv, avi), audio (mp3, wav, aac, m4a, ogg/opus, webm, flac), image (jpg/jpeg, png, gif, webp, svg)`,
    };
  }

  // Check filename
  if (file.name.length > 255) {
    return {
      valid: false,
      error: 'Filename too long (max 255 characters)',
    };
  }

  return { valid: true };
}

/**
 * Get media type from MIME type
 */
export function getMediaType(
  mimeType: string
): 'video' | 'audio' | 'image' | 'unknown' {
  if (SUPPORTED_VIDEO_TYPES.includes(mimeType)) {
    return 'video';
  }
  if (SUPPORTED_AUDIO_TYPES.includes(mimeType)) {
    return 'audio';
  }
  if (SUPPORTED_IMAGE_TYPES.includes(mimeType)) {
    return 'image';
  }
  return 'unknown';
}

/**
 * Format duration in seconds to MM:SS or HH:MM:SS format
 */
export function formatDuration(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) {
    return '0:00';
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  return `${minutes}:${String(secs).padStart(2, '0')}`;
}
