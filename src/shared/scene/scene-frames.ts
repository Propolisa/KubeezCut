import type { SceneItem } from '@/types/timeline';

export interface SceneFrameRequest {
  scene: string;
  camera?: string;
  frame: number;
  width: number;
  height: number;
  quality: 'preview' | 'final';
}

/** Renders scene strips' frames. Returned bitmaps stay owned by the source: draw them, never close them. */
export interface SceneFrameSource {
  getFrame(request: SceneFrameRequest): Promise<ImageBitmap | null>;
  peekFrame?(request: SceneFrameRequest): ImageBitmap | null;
  /** Fires when earlier frames may be outdated, so previews redraw. */
  subscribe?(listener: () => void): () => void;
  /** Blender's Rebuild Proxy: stores preview frames from request.frame through frameEnd. */
  bake?(request: SceneFrameRequest, frameEnd: number): Promise<void>;
}

let source: SceneFrameSource | null = null;

export const setSceneFrameSource = (next: SceneFrameSource | null) => { source = next; };
export const getSceneFrameSource = () => source;

export function sceneFrameRequest(item: SceneItem, localFrame: number, width: number, height: number, quality: SceneFrameRequest['quality']): SceneFrameRequest {
  return {
    scene: item.scene,
    camera: item.camera,
    frame: (item.sourceStart ?? 0) + Math.floor(localFrame * (item.speed ?? 1)),
    width,
    height,
    quality,
  };
}
