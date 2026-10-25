/**
 * Build-time feature switches for embedding KubeezCut in other hosts (Bylonder).
 *
 * `VITE_AI_FEATURES=false` removes every AI entry point from the parts an embedding host mounts: hosted Kubeez
 * generation and credits, Whisper transcription and captions, text-to-speech and RNNoise enhancement.
 * The standalone app keeps them by default.
 */
export const AI_FEATURES = import.meta.env.VITE_AI_FEATURES !== 'false';
