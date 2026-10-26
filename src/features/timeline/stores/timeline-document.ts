/**
 * The edit as plain data, independent of where it is stored.
 *
 * captureTimeline() reads the root timeline and its sub-compositions from the domain stores, including
 * unsaved changes of the sub-composition being edited, without navigating. applyTimeline() writes one
 * back. The app stores the edit in IndexedDB through saveTimeline()/loadTimeline(); an embedding host can store
 * this document in its own project instead.
 */
import type { ItemKeyframes } from '@/types/keyframe';
import type { TimelineItem, TimelineTrack } from '@/types/timeline';
import type { Transition } from '@/types/transition';
import type { ProjectTimeline } from '@/types/project';
import { useItemsStore } from './items-store';
import { useTransitionsStore } from './transitions-store';
import { useKeyframesStore } from './keyframes-store';
import { useMarkersStore } from './markers-store';
import { useCompositionsStore, type SubComposition } from './compositions-store';
import { useCompositionNavigationStore } from './composition-navigation-store';
import { useSelectionStore } from '@/shared/state/selection';

/** The persisted edit: ProjectTimeline without view state (playhead, zoom, scroll). */
export type TimelineDocument = Omit<ProjectTimeline, 'currentFrame' | 'zoomLevel' | 'scrollPosition'>;

interface Level {
  items: TimelineItem[];
  tracks: TimelineTrack[];
  transitions: Transition[];
  keyframes: ItemKeyframes[];
}

export function cloneTransitionForProject(transition: Transition): Transition {
  return {
    ...transition,
    ...(transition.bezierPoints && { bezierPoints: { ...transition.bezierPoints } }),
    ...(transition.properties && { properties: { ...transition.properties } }),
  };
}

function serializeKeyframes(keyframes: ItemKeyframes[]): ProjectTimeline['keyframes'] {
  return keyframes.map((ik) => ({
    itemId: ik.itemId,
    properties: ik.properties.map((pk) => ({
      property: pk.property,
      keyframes: pk.keyframes.map((k) => ({
        id: k.id,
        frame: k.frame,
        value: k.value,
        easing: k.easing,
        ...(k.easingConfig && { easingConfig: k.easingConfig }),
      })),
    })),
  })) as ProjectTimeline['keyframes'];
}

const liveLevel = (): Level => ({
  items: useItemsStore.getState().items,
  tracks: useItemsStore.getState().tracks,
  transitions: useTransitionsStore.getState().transitions,
  keyframes: useKeyframesStore.getState().keyframes,
});

/** Reads the edit from the stores. Safe to call while a sub-composition is open. */
export function captureTimeline(): TimelineDocument {
  const nav = useCompositionNavigationStore.getState();
  // Inside a sub-composition the stores hold that composition; the root and any intermediate levels are on
  // the stash stack. Each level's latest data wins over the compositions store, which is only written on exit.
  const root: Level = nav.stashStack[0] ?? liveLevel();
  const pending = new Map<string, Level>();
  nav.stashStack.forEach((stash, index) => {
    if (index > 0 && stash.compositionId) pending.set(stash.compositionId, stash);
  });
  if (nav.activeCompositionId) pending.set(nav.activeCompositionId, liveLevel());

  const markers = useMarkersStore.getState();
  const compositions = useCompositionsStore.getState().compositions.map((c): SubComposition => {
    const level = pending.get(c.id);
    if (!level) return c;
    const durationInFrames = level.items.length > 0 ? Math.max(...level.items.map((i) => i.from + i.durationInFrames)) : 0;
    return { ...c, ...level, durationInFrames };
  });

  return {
    tracks: root.tracks.map((track) => ({ ...track, items: undefined })) as unknown as ProjectTimeline['tracks'],
    // Waveforms are cached per media item; they would only bloat the document.
    items: root.items.map((item) => {
      if (!('waveformData' in item)) return item;
      const { waveformData: _waveform, ...rest } = item;
      return rest;
    }) as ProjectTimeline['items'],
    ...(markers.inPoint !== null && { inPoint: markers.inPoint }),
    ...(markers.outPoint !== null && { outPoint: markers.outPoint }),
    ...(markers.markers.length > 0 && {
      markers: markers.markers.map((m) => ({ id: m.id, frame: m.frame, color: m.color, ...(m.label && { label: m.label }) })),
    }),
    ...(root.transitions.length > 0 && { transitions: root.transitions.map(cloneTransitionForProject) }),
    ...(root.keyframes.length > 0 && { keyframes: serializeKeyframes(root.keyframes) }),
    ...(compositions.length > 0 && {
      compositions: compositions.map((c) => ({
        id: c.id,
        name: c.name,
        items: c.items as ProjectTimeline['items'],
        tracks: c.tracks as ProjectTimeline['tracks'],
        ...(c.transitions?.length && { transitions: c.transitions.map(cloneTransitionForProject) as ProjectTimeline['transitions'] }),
        ...(c.keyframes?.length && { keyframes: c.keyframes as ProjectTimeline['keyframes'] }),
        fps: c.fps,
        width: c.width,
        height: c.height,
        durationInFrames: c.durationInFrames,
        ...(c.backgroundColor && { backgroundColor: c.backgroundColor }),
      })),
    }),
  };
}

/** Sorts tracks by their stored order, keeping file order for ties. */
export function sortTracks(tracks: ProjectTimeline['tracks']): TimelineTrack[] {
  return [...tracks]
    .map((track, index) => ({ track, index }))
    .sort((a, b) => (a.track.order ?? a.index) - (b.track.order ?? b.index))
    .map(({ track }) => ({ ...track, items: [] }) as unknown as TimelineTrack);
}

/**
 * Writes an edit into the stores. When a sub-composition is open and still exists afterwards, it stays open
 * with the new data (an undo inside a sub-composition keeps the user there).
 */
export function applyTimeline(timeline: TimelineDocument, { defaultTracks }: { defaultTracks: () => TimelineTrack[] }): void {
  const nav = useCompositionNavigationStore.getState();
  const path = nav.breadcrumbs
    .filter((b) => b.compositionId !== null)
    .map((b) => ({ compositionId: b.compositionId!, label: b.label, entryItemId: b.entryItemId }));
  // Leave without writing the open composition back: the incoming document replaces everything.
  useCompositionNavigationStore.setState({
    breadcrumbs: [{ compositionId: null, label: 'Main Timeline' }],
    activeCompositionId: null,
    stashStack: [],
  });

  const hasTracks = (timeline.tracks?.length ?? 0) > 0;
  const tracks = hasTracks ? sortTracks(timeline.tracks) : defaultTracks();
  const items = (timeline.items ?? []) as TimelineItem[];
  // Keep the selection when the selected strips survive (undo of a property change).
  const ids = new Set(items.map((i) => i.id));
  const selection = useSelectionStore.getState();
  const keep = selection.selectedItemIds.filter((id) => ids.has(id));

  useItemsStore.getState().setTracks(tracks);
  useItemsStore.getState().setItems(items);
  useTransitionsStore.getState().setTransitions((timeline.transitions ?? []) as Transition[]);
  useKeyframesStore.getState().setKeyframes((timeline.keyframes ?? []) as ItemKeyframes[]);
  useMarkersStore.getState().setMarkers(timeline.markers ?? []);
  useMarkersStore.getState().setInPoint(timeline.inPoint ?? null);
  useMarkersStore.getState().setOutPoint(timeline.outPoint ?? null);
  useCompositionsStore.getState().setCompositions((timeline.compositions ?? []).map((c) => ({
    id: c.id,
    name: c.name,
    items: c.items as TimelineItem[],
    tracks: c.tracks as TimelineTrack[],
    transitions: (c.transitions ?? []) as Transition[],
    keyframes: (c.keyframes ?? []) as ItemKeyframes[],
    fps: c.fps,
    width: c.width,
    height: c.height,
    durationInFrames: c.durationInFrames,
    ...(c.backgroundColor && { backgroundColor: c.backgroundColor }),
  })));

  for (const level of path) {
    if (!useCompositionsStore.getState().getComposition(level.compositionId)) break;
    useCompositionNavigationStore.getState().enterComposition(level.compositionId, level.label, level.entryItemId);
  }
  if (path.length === 0 && keep.length !== selection.selectedItemIds.length) selection.selectItems(keep);
}
