import { useEffect, useRef, useState } from 'react';
import type { SceneItem } from '@/types/timeline';
import { getSceneFrameSource, sceneFrameRequest } from '@/shared/scene/scene-frames';
import { useCurrentFrame, useVideoConfig } from '../hooks/use-player-compat';

export function SceneContent({ item }: { item: SceneItem }) {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revision, setRevision] = useState(0);

  useEffect(() => getSceneFrameSource()?.subscribe?.(() => setRevision((r) => r + 1)), []);

  useEffect(() => {
    const source = getSceneFrameSource();
    const canvas = canvasRef.current;
    if (!source || !canvas) return;
    let current = true;
    const draw = (bitmap: ImageBitmap | null) => {
      if (!current || !bitmap) return;
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      canvas.getContext('2d')?.drawImage(bitmap, 0, 0);
    };
    const request = sceneFrameRequest(item, frame, width, height, 'preview');
    const cached = source.peekFrame?.(request);
    if (cached) draw(cached);
    else void source.getFrame(request).then(draw);
    return () => { current = false; };
  }, [item, frame, width, height, revision]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}
