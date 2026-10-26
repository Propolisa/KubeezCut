/**
 * Keeps KubeezCut's playhead on the host clock. The host leads, as a scene has one playhead in Blender: its frame
 * and play state are mirrored into the playback store, with a seek when playback drifts by more than a couple of
 * frames. Seeks and play/pause from KubeezCut's own UI are sent to the host.
 */
import { usePlaybackStore } from '@/shared/state/playback';
import { useItemsStore } from '@/features/editor/deps/timeline-store';
import type { HostClock } from './host';

const MAX_DRIFT_FRAMES = 2;

export function syncClock(clock: HostClock): () => void {
  let applying = false;
  const apply = (fn: () => void) => {
    applying = true;
    try { fn(); } finally { applying = false; }
  };

  const fromHost = () => {
    const playback = usePlaybackStore.getState();
    const frame = Math.round(clock.frame);
    apply(() => {
      if (clock.playing !== playback.isPlaying) {
        if (clock.playing) {
          playback.setCurrentFrame(frame);
          playback.play();
        } else {
          playback.pause();
        }
      }
      const current = usePlaybackStore.getState();
      const drift = Math.abs(current.currentFrame - frame);
      if (current.isPlaying ? drift > MAX_DRIFT_FRAMES : drift > 0) current.setCurrentFrame(frame);
    });
  };

  const contentEnd = () => useItemsStore.getState().maxItemEndFrame ?? 0;

  const fromSequencer = (state: ReturnType<typeof usePlaybackStore.getState>, previous: ReturnType<typeof usePlaybackStore.getState>) => {
    if (applying) return;
    if (state.isPlaying !== previous.isPlaying) {
      if (state.isPlaying && !clock.playing) clock.play();
      // KubeezCut stops by itself at the end of the edit; the scene may run longer, so only a user pause counts.
      else if (!state.isPlaying && clock.playing && state.currentFrame < contentEnd() - 1) clock.pause();
      return;
    }
    if (!state.isPlaying && state.currentFrame !== previous.currentFrame && state.currentFrame !== Math.round(clock.frame)) {
      clock.seek(state.currentFrame);
    }
  };

  fromHost();
  const offHost = clock.subscribe(fromHost);
  const offSequencer = usePlaybackStore.subscribe(fromSequencer);
  return () => { offHost(); offSequencer(); };
}
