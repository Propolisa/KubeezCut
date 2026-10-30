import { useEffect, useState } from 'react';
import { sceneAudioUrl, subscribeSceneAudio } from '@/shared/scene/scene-audio';
import type { TimelineTrack } from '@/types/timeline';

/** Playable URLs of the Scene Audio strips' scenes in the tracks, resolved again when the host's scenes change. */
export function useSceneAudioUrls(tracks: TimelineTrack[]): Map<string, string> {
  const [urls, setUrls] = useState<Map<string, string>>(new Map());
  const [revision, setRevision] = useState(0);
  const scenes = [...new Set(tracks.flatMap((track) => track.items.flatMap((item) => (item.type === 'audio' && item.scene ? [item.scene] : []))))].sort().join('\n');

  useEffect(() => subscribeSceneAudio(() => setRevision((r) => r + 1)), []);
  useEffect(() => {
    let current = true;
    const ids = scenes ? scenes.split('\n') : [];
    void Promise.all(ids.map(async (scene) => [scene, await sceneAudioUrl(scene)] as const)).then((entries) => {
      if (current) setUrls(new Map(entries));
    });
    return () => { current = false; };
  }, [scenes, revision]);
  return urls;
}
