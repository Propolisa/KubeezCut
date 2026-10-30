import { c as fe } from "./core-logger-Dau_Juxv.js";
import { g7 as K, g8 as P, dx as me, V as R, g9 as le, eI as $, J as pe, ga as T, gb as V, fD as U, gc as Q, gd as Fe, d1 as he, ge as Y, gf as Z, gg as Ie, al as E, am as b, eJ as ve, gh as ge } from "./feature-editing-core-TgcUncnh.js";
import "./gif-processing-CfWcW1Gl.js";
import "./react-vendor-18pR7s9b.js";
function Ce(e, a) {
  const r = !e?.enabled, u = !a?.enabled;
  return r && u ? !0 : r !== u ? !1 : (e.model ?? "rnnoise") === (a.model ?? "rnnoise") && (e.denoise ?? !0) === (a.denoise ?? !0) && (e.aggressive ?? !1) === (a.aggressive ?? !1) && (e.highPass ?? !0) === (a.highPass ?? !0) && (e.hum ?? "off") === (a.hum ?? "off") && (e.deEss ?? !1) === (a.deEss ?? !1) && (e.voiceEq ?? !1) === (a.voiceEq ?? !1) && (e.compress ?? !0) === (a.compress ?? !0) && (e.normalize ?? !0) === (a.normalize ?? !0);
}
const k = fe("CanvasAudio"), X = /* @__PURE__ */ new Map();
function ye(e, a) {
  return e.type === "video" && a.type === "audio" || e.type === "audio" && a.type === "video";
}
function _(e) {
  const a = e;
  return a.sourceStart ?? a.trimStart ?? a.offset ?? null;
}
function Oe(e, a) {
  return !ye(e, a) || e.linkedGroupId || a.linkedGroupId || e.originId || a.originId || !e.mediaId || e.mediaId !== a.mediaId || e.from !== a.from || e.durationInFrames !== a.durationInFrames || _(e) !== _(a) || (e.sourceEnd ?? null) !== (a.sourceEnd ?? null) ? !1 : (e.speed ?? 1) === (a.speed ?? 1);
}
function W(e, a) {
  const r = ge(e, a);
  return r || (a.type !== "video" ? null : e.find((u) => u.type === "audio" && Oe(a, u)) ?? null);
}
function Se(e) {
  const a = /* @__PURE__ */ new Set();
  for (const r of e)
    r.type === "video" && W(e, r) && a.add(r.id);
  return a;
}
function Me(e, a) {
  const r = new Map(e.map((c) => [c.id, c])), u = [];
  for (const c of a) {
    const l = r.get(c.leftClipId), m = r.get(c.rightClipId);
    if (l?.type !== "video" || m?.type !== "video") continue;
    const f = W(e, l), v = W(e, m);
    !f || !v || f.trackId === v.trackId && (f.from !== l.from || v.from !== m.from || f.durationInFrames !== l.durationInFrames || v.durationInFrames !== m.durationInFrames || u.push({ transition: c, leftAudio: f, rightAudio: v }));
  }
  return u;
}
function z(e) {
  return {
    startFrame: e.startFrame,
    durationInFrames: e.durationInFrames,
    fadeInFrames: e.fadeInFrames ?? 0,
    fadeOutFrames: e.fadeOutFrames ?? 0,
    fadeInCurve: e.fadeInCurve ?? 0,
    fadeOutCurve: e.fadeOutCurve ?? 0,
    fadeInCurveX: e.fadeInCurveX ?? 0.52,
    fadeOutCurveX: e.fadeOutCurveX ?? 0.52
  };
}
function L(e) {
  return e.sourceStart ?? e.trimStart ?? e.offset ?? 0;
}
function ee(e) {
  return e.sourceStart !== void 0 || e.trimStart !== void 0 || e.offset !== void 0;
}
function D(e, a, r) {
  const u = e.speed ?? 1, c = a.speed ?? 1, l = e.sourceFps ?? r;
  if (Math.abs(u - c) > 1e-4 || !(e.mediaId && a.mediaId && e.mediaId === a.mediaId || !!e.src && !!a.src && e.src === a.src) || e.originId && a.originId && e.originId !== a.originId) return !1;
  const f = e.from + e.durationInFrames;
  if (Math.abs(a.from - f) > 2) return !1;
  const v = L(e), p = L(a), o = v + E(
    e.durationInFrames,
    u,
    r,
    l
  ), C = e.sourceEnd, g = Math.abs(p - o) <= 2, F = C !== void 0 ? Math.abs(p - C) <= 2 : !1;
  return g || F ? !0 : !ee(a);
}
function B(e, a, r) {
  if (e.size === 0 || a.length === 0) return [];
  const u = /* @__PURE__ */ new Map(), c = (t) => {
    const s = u.get(t);
    if (s) return s;
    const O = { before: 0, after: 0, overlapFadeOut: 0, overlapFadeIn: 0, fadeInDelay: 0, fadeOutLead: 0 };
    return u.set(t, O), O;
  }, l = /* @__PURE__ */ new Map();
  for (const [t, s] of e)
    l.set(t, s.item);
  const m = ve(a, l);
  for (const t of m) {
    const s = e.get(t.transition.leftClipId), O = e.get(t.transition.rightClipId);
    if (!s || !O) continue;
    const d = s.item, i = O.item;
    if (D(d, i, r)) continue;
    const h = Math.max(0, i.from - t.startFrame), I = Math.max(0, t.endFrame - (d.from + d.durationInFrames));
    if (h > 0) {
      const S = c(i.id);
      S.before = Math.max(S.before, h);
    }
    if (I > 0) {
      const S = c(d.id);
      S.after = Math.max(S.after, I);
    }
    if (t.durationInFrames > 0) {
      const S = c(d.id);
      S.overlapFadeOut = Math.max(S.overlapFadeOut, t.durationInFrames), S.fadeOutLead = Math.max(S.fadeOutLead, t.leftPortion);
      const y = c(i.id);
      y.overlapFadeIn = Math.max(y.overlapFadeIn, t.durationInFrames), y.fadeInDelay = Math.max(y.fadeInDelay, t.rightPortion);
    }
  }
  const f = /* @__PURE__ */ new Map(), v = Array.from(e.entries()).map(([t, s]) => ({
    id: t,
    trackId: s.trackId,
    item: s.item
  })).toSorted((t, s) => t.trackId !== s.trackId ? t.trackId.localeCompare(s.trackId) : t.item.from !== s.item.from ? t.item.from - s.item.from : t.id.localeCompare(s.id)), p = /* @__PURE__ */ new Map();
  for (const t of v) {
    const s = t.item;
    let d = L(s);
    if (!ee(s)) {
      const i = p.get(t.trackId);
      i && D(i, s, r) && (d = (f.get(i.id) ?? L(i)) + E(
        i.durationInFrames,
        i.speed ?? 1,
        r,
        i.sourceFps ?? r
      ));
    }
    f.set(s.id, d), p.set(t.trackId, s);
  }
  const o = [];
  for (const [, t] of e) {
    const s = t.item, O = s.speed ?? 1, d = s.sourceFps ?? r, i = f.get(s.id) ?? L(s), h = u.get(s.id) ?? { before: 0, after: 0, overlapFadeOut: 0, overlapFadeIn: 0, fadeInDelay: 0, fadeOutLead: 0 }, I = O > 0 ? b(i, O, d, r) : 0, S = Math.max(0, Math.min(h.before, I)), y = Math.max(0, h.after), w = h.overlapFadeIn > 0 ? h.overlapFadeIn : S > 0 ? S : void 0, x = h.overlapFadeOut > 0 ? h.overlapFadeOut : y > 0 ? y : void 0;
    o.push({
      itemId: s.id,
      trackId: t.trackId,
      clip: s,
      src: s.src,
      startFrame: s.from - S,
      durationFrames: s.durationInFrames + S + y,
      sourceStartFrame: i - E(S, O, r, d),
      sourceFps: d,
      volume: (s.volume ?? 0) + t.trackVolume,
      fadeInFrames: (s.audioFadeIn ?? 0) * r,
      fadeOutFrames: (s.audioFadeOut ?? 0) * r,
      fadeInCurve: s.audioFadeInCurve ?? 0,
      fadeOutCurve: s.audioFadeOutCurve ?? 0,
      fadeInCurveX: s.audioFadeInCurveX ?? 0.52,
      fadeOutCurveX: s.audioFadeOutCurveX ?? 0.52,
      contentStartOffsetFrames: S,
      contentEndOffsetFrames: y,
      fadeInDelayFrames: h.fadeInDelay,
      fadeOutLeadFrames: h.fadeOutLead,
      clipFadeSpans: [z({
        startFrame: S,
        durationInFrames: s.durationInFrames,
        fadeInFrames: (s.audioFadeIn ?? 0) * r,
        fadeOutFrames: (s.audioFadeOut ?? 0) * r,
        fadeInCurve: s.audioFadeInCurve,
        fadeOutCurve: s.audioFadeOutCurve,
        fadeInCurveX: s.audioFadeInCurveX,
        fadeOutCurveX: s.audioFadeOutCurveX
      })],
      crossfadeFadeInFrames: w,
      crossfadeFadeOutFrames: x,
      speed: O,
      muted: t.muted,
      type: t.type,
      audioCodec: t.audioCodec,
      beforeFrames: S,
      afterFrames: y,
      volumeKeyframes: t.volumeKeyframes,
      itemFrom: t.itemFrom,
      mediaId: s.mediaId,
      audioEnhance: s.audioEnhance
    });
  }
  const C = o.toSorted((t, s) => t.startFrame !== s.startFrame ? t.startFrame - s.startFrame : t.itemId.localeCompare(s.itemId)), g = [];
  let F = null;
  const n = (t, s) => !(!D(t.clip, s.clip, r) || t.src !== s.src || Math.abs(t.speed - s.speed) > 1e-4 || Math.abs(t.volume - s.volume) > 1e-4 || t.muted !== s.muted || t.afterFrames !== 0 || s.beforeFrames !== 0 || t.volumeKeyframes || s.volumeKeyframes || !Ce(t.audioEnhance, s.audioEnhance)), M = (t) => ({
    itemId: t.itemId,
    trackId: t.trackId,
    src: t.src,
    startFrame: t.startFrame,
    durationFrames: t.durationFrames,
    sourceStartFrame: t.sourceStartFrame,
    sourceFps: t.sourceFps,
    volume: t.volume,
    fadeInFrames: t.fadeInFrames,
    fadeOutFrames: t.fadeOutFrames,
    fadeInCurve: t.fadeInCurve,
    fadeOutCurve: t.fadeOutCurve,
    fadeInCurveX: t.fadeInCurveX,
    fadeOutCurveX: t.fadeOutCurveX,
    contentStartOffsetFrames: t.contentStartOffsetFrames,
    contentEndOffsetFrames: t.contentEndOffsetFrames,
    fadeInDelayFrames: t.fadeInDelayFrames,
    fadeOutLeadFrames: t.fadeOutLeadFrames,
    clipFadeSpans: t.clipFadeSpans,
    crossfadeFadeInFrames: t.crossfadeFadeInFrames,
    crossfadeFadeOutFrames: t.crossfadeFadeOutFrames,
    speed: t.speed,
    muted: t.muted,
    type: t.type,
    audioCodec: t.audioCodec,
    volumeKeyframes: t.volumeKeyframes,
    itemFrom: t.itemFrom,
    mediaId: t.mediaId,
    audioEnhance: t.audioEnhance
  });
  for (const t of C) {
    if (!F) {
      F = { ...t };
      continue;
    }
    if (n(F, t)) {
      const s = F.startFrame, O = t.startFrame + t.durationFrames;
      F.durationFrames = O - F.startFrame, F.fadeOutFrames = t.fadeOutFrames, F.fadeOutCurve = t.fadeOutCurve, F.fadeOutCurveX = t.fadeOutCurveX, F.contentEndOffsetFrames = t.contentEndOffsetFrames, F.fadeOutLeadFrames = t.fadeOutLeadFrames, F.crossfadeFadeOutFrames = t.crossfadeFadeOutFrames, F.clipFadeSpans = [...F.clipFadeSpans ?? [], ...(t.clipFadeSpans ?? []).map((d) => ({
        ...d,
        startFrame: d.startFrame + (t.startFrame - s)
      }))], F.clip = t.clip, F.afterFrames = t.afterFrames;
      continue;
    }
    g.push(M(F)), F = { ...t };
  }
  return F && g.push(M(F)), g;
}
function q(e) {
  const { segments: a, track: r, compositionItem: u, subComp: c, fps: l } = e, m = e.visited ?? /* @__PURE__ */ new Set(), f = Ie(c.items), v = u.from, p = u.speed ?? 1, o = u.sourceFps ?? l, C = u.sourceStart ?? u.trimStart ?? 0, g = u.sourceEnd ?? C + E(u.durationInFrames, p, l, o), F = r.muted ?? !1;
  for (const n of c.items) {
    const M = c.tracks.find((A) => A.id === n.trackId), t = M?.muted ?? !1, s = Math.max(n.from, C), O = Math.min(n.from + n.durationInFrames, g);
    if (O <= s) continue;
    const d = v + b(s - C, p, o, l), i = v + b(O - C, p, o, l), h = Math.max(1, i - d);
    if (h <= 0) continue;
    const I = s - n.from, S = n.sourceStart ?? n.trimStart ?? 0, y = (n.speed ?? 1) * p, w = S + E(
      I,
      n.speed ?? 1,
      o,
      n.sourceFps ?? o
    );
    if (n.type === "composition" || T(n)) {
      if (n.type === "composition" && Q(c.items, n) || m.has(n.compositionId)) continue;
      const A = R.getState().getComposition(n.compositionId);
      if (!A) continue;
      const ce = {
        ...n,
        from: d,
        durationInFrames: h,
        speed: (n.speed ?? 1) * p,
        sourceStart: w,
        sourceFps: n.sourceFps ?? o,
        ...n.sourceEnd !== void 0 && {
          sourceEnd: Math.max(
            w + 1,
            n.sourceEnd - E(
              n.from + n.durationInFrames - O,
              n.speed ?? 1,
              o,
              n.sourceFps ?? o
            )
          )
        }
      }, J = new Set(m);
      J.add(n.compositionId), q({
        segments: a,
        track: {
          ...r,
          muted: F || t,
          volume: (r.volume ?? 0) + (M?.volume ?? 0)
        },
        compositionItem: ce,
        subComp: A,
        fps: l,
        visited: J
      });
      continue;
    }
    if (n.type !== "video" && n.type !== "audio" || n.type === "video" && f.has(n.id)) continue;
    const x = (n.mediaId ? $.get(n.mediaId) : null) ?? n.src ?? "";
    if (!x) continue;
    const re = c.keyframes?.find((A) => A.itemId === n.id), N = U(re, "volume"), se = b((n.audioFadeIn ?? 0) * o, p, o, l), ie = b((n.audioFadeOut ?? 0) * o, p, o, l), de = b(s - n.from, p, o, l), ue = b(n.from + n.durationInFrames - O, p, o, l), G = Math.max(0, se - de), j = Math.max(0, ie - ue);
    a.push({
      itemId: n.id,
      trackId: r.id,
      src: x,
      startFrame: d,
      durationFrames: h,
      sourceStartFrame: w,
      sourceFps: n.sourceFps ?? l,
      volume: (n.volume ?? 0) + (r.volume ?? 0) + (M?.volume ?? 0),
      fadeInFrames: G,
      fadeOutFrames: j,
      fadeInCurve: n.audioFadeInCurve ?? 0,
      fadeOutCurve: n.audioFadeOutCurve ?? 0,
      fadeInCurveX: n.audioFadeInCurveX ?? 0.52,
      fadeOutCurveX: n.audioFadeOutCurveX ?? 0.52,
      contentStartOffsetFrames: 0,
      contentEndOffsetFrames: 0,
      fadeInDelayFrames: 0,
      fadeOutLeadFrames: 0,
      clipFadeSpans: [z({
        startFrame: 0,
        durationInFrames: h,
        fadeInFrames: G,
        fadeOutFrames: j,
        fadeInCurve: n.audioFadeInCurve,
        fadeOutCurve: n.audioFadeOutCurve,
        fadeInCurveX: n.audioFadeInCurveX,
        fadeOutCurveX: n.audioFadeOutCurveX
      })],
      speed: y,
      muted: F || t,
      type: n.type,
      audioCodec: V(n.mediaId),
      volumeKeyframes: N.length > 0 ? N : void 0,
      itemFrom: d
    });
  }
}
function te(e, a) {
  const { tracks: r = [], transitions: u = [] } = e, c = [], l = [], m = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), p = r.flatMap((d) => d.items), o = Se(p), C = Me(p, u), g = /* @__PURE__ */ new Set();
  for (const d of C)
    g.add(d.leftAudio.id), g.add(d.rightAudio.id);
  const F = C.map(
    ({ transition: d, leftAudio: i, rightAudio: h }) => ({
      ...d,
      leftClipId: i.id,
      rightClipId: h.id,
      trackId: i.trackId
    })
  ), n = /* @__PURE__ */ new Set(), M = u.filter((d) => {
    const i = p.find((I) => I.id === d.leftClipId), h = p.find((I) => I.id === d.rightClipId);
    return i?.type !== "audio" || h?.type !== "audio" || T(i) || T(h) ? !1 : (n.add(i.id), n.add(h.id), !0);
  });
  for (const d of r)
    if (d.visible !== !1) {
      for (const i of d.items)
        if (i.type === "video") {
          const h = i;
          if (o.has(h.id) || h.embeddedAudioMuted || !h.src) continue;
          m.set(i.id, {
            item: h,
            trackId: d.id,
            muted: d.muted ?? !1,
            trackVolume: d.volume ?? 0,
            type: "video",
            audioCodec: V(h.mediaId),
            volumeKeyframes: (() => {
              const I = e.keyframes?.find((y) => y.itemId === i.id), S = U(I, "volume");
              return S.length > 0 ? S : void 0;
            })(),
            itemFrom: h.from
          });
        } else if (i.type === "audio") {
          const h = i;
          if (T(h)) {
            const w = R.getState().getComposition(h.compositionId);
            if (!w) continue;
            q({
              segments: l,
              track: d,
              compositionItem: h,
              subComp: w,
              fps: a
            });
            continue;
          }
          if (!h.src) continue;
          const I = e.keyframes?.find((w) => w.itemId === i.id), S = U(I, "volume"), y = {
            item: h,
            trackId: d.id,
            muted: d.muted ?? !1,
            trackVolume: d.volume ?? 0,
            type: "audio",
            audioCodec: V(i.mediaId),
            volumeKeyframes: S.length > 0 ? S : void 0,
            itemFrom: i.from
          };
          if (g.has(i.id)) {
            v.set(i.id, y);
            continue;
          }
          if (n.has(i.id)) {
            f.set(i.id, y);
            continue;
          }
          l.push({
            itemId: i.id,
            trackId: d.id,
            src: h.src,
            startFrame: i.from,
            durationFrames: i.durationInFrames,
            sourceStartFrame: h.sourceStart ?? i.trimStart ?? 0,
            sourceFps: h.sourceFps ?? a,
            volume: (i.volume ?? 0) + (d.volume ?? 0),
            fadeInFrames: (i.audioFadeIn ?? 0) * a,
            fadeOutFrames: (i.audioFadeOut ?? 0) * a,
            fadeInCurve: i.audioFadeInCurve ?? 0,
            fadeOutCurve: i.audioFadeOutCurve ?? 0,
            fadeInCurveX: i.audioFadeInCurveX ?? 0.52,
            fadeOutCurveX: i.audioFadeOutCurveX ?? 0.52,
            contentStartOffsetFrames: 0,
            contentEndOffsetFrames: 0,
            fadeInDelayFrames: 0,
            fadeOutLeadFrames: 0,
            clipFadeSpans: [z({
              startFrame: 0,
              durationInFrames: i.durationInFrames,
              fadeInFrames: (i.audioFadeIn ?? 0) * a,
              fadeOutFrames: (i.audioFadeOut ?? 0) * a,
              fadeInCurve: i.audioFadeInCurve,
              fadeOutCurve: i.audioFadeOutCurve,
              fadeInCurveX: i.audioFadeInCurveX,
              fadeOutCurveX: i.audioFadeOutCurveX
            })],
            speed: h.speed ?? 1,
            muted: d.muted ?? !1,
            type: "audio",
            audioCodec: y.audioCodec,
            volumeKeyframes: y.volumeKeyframes,
            itemFrom: i.from,
            mediaId: i.mediaId,
            audioEnhance: i.audioEnhance
          });
        }
    }
  const t = B(m, u, a), s = B(f, M, a), O = B(
    v,
    F,
    a
  );
  c.push(...t, ...s, ...O, ...l);
  for (const d of r)
    if (d.visible !== !1)
      for (const i of d.items) {
        if (i.type !== "composition") continue;
        const h = i;
        if (Q(p, h)) continue;
        const I = R.getState().getComposition(h.compositionId);
        I && q({
          segments: c,
          track: d,
          compositionItem: h,
          subComp: I,
          fps: a
        });
      }
  return k.info("Extracted audio segments", {
    count: c.length,
    videoCount: c.filter((d) => d.type === "video").length,
    audioCount: c.filter((d) => d.type === "audio").length
  }), c;
}
async function we(e, a, r, u, c) {
  const l = await Fe(e, a, r), m = l.sampleRate, f = Math.max(0, Math.floor(u * m)), v = Math.min(l.length, Math.ceil(c * m)), p = Math.max(0, v - f), o = [];
  for (let C = 0; C < l.numberOfChannels; C++) {
    const g = l.getChannelData(C);
    o.push(g.slice(f, v));
  }
  return {
    itemId: "",
    sampleRate: m,
    channels: l.numberOfChannels,
    samples: o,
    duration: p / m
  };
}
async function ae(e, a, r, u, c, l = !1) {
  if (r === void 0 && u === void 0) {
    const m = X.get(e);
    if (m)
      return k.debug("Using cached decoded audio", { itemId: a, src: e.substring(0, 50) }), { ...m, itemId: a };
  }
  k.debug("Decoding audio with mediabunny", {
    itemId: a,
    src: e.substring(0, 50),
    startTime: r,
    endTime: u,
    audioCodec: c
  });
  try {
    K(c) && await P();
    const m = await import("./media-bunny-core-CXIwd4FE.js").then((v) => v.i), f = new m.Input({
      formats: m.ALL_FORMATS,
      source: new m.UrlSource(e)
    });
    try {
      const v = await f.getPrimaryAudioTrack();
      if (!v)
        throw new Error("No audio track found");
      const p = await f.computeDuration(), o = r ?? 0, C = u ?? p;
      k.debug("Extracting audio range", {
        itemId: a,
        startTime: o,
        endTime: C,
        totalDuration: p
      });
      const g = new m.AudioSampleSink(v), F = [];
      let n = 0, M = 48e3, t = 0;
      for await (const d of g.samples(o, C))
        try {
          const i = d, h = Math.max(0, i.numberOfFrames ?? 0), I = Math.max(1, i.numberOfChannels ?? 1);
          if (h === 0)
            continue;
          if (t === 0) {
            t = I;
            for (let y = 0; y < t; y++)
              F.push([]);
          } else if (I > t) {
            for (let y = t; y < I; y++) {
              const w = [];
              n > 0 && w.push(new Float32Array(n)), F.push(w);
            }
            t = I;
          } else I < t && k.warn("Inconsistent channel count during mediabunny audio decode", {
            itemId: a,
            expectedChannels: t,
            actualChannels: I
          });
          const S = t || I;
          for (let y = 0; y < S; y++) {
            const w = Math.min(y, I - 1), x = new Float32Array(h);
            i.copyTo(x, { planeIndex: w, format: "f32-planar" }), F[y].push(x);
          }
          n += h, i.sampleRate && i.sampleRate > 0 && (M = i.sampleRate);
        } finally {
          d.close();
        }
      if (t === 0 || n === 0)
        throw new Error("Audio decode produced no output");
      const s = [];
      for (let d = 0; d < t; d++) {
        const i = new Float32Array(n);
        let h = 0;
        for (const I of F[d] ?? [])
          i.set(I, h), h += I.length;
        s.push(i);
      }
      const O = {
        itemId: a,
        sampleRate: M,
        channels: t,
        samples: s,
        duration: C - o
      };
      return k.debug("Decoded audio with mediabunny", {
        itemId: a,
        sampleRate: M,
        channels: t,
        duration: O.duration,
        samples: s[0]?.length
      }), r === void 0 && u === void 0 && X.set(e, O), O;
    } finally {
      f.dispose();
    }
  } catch (m) {
    if (!l && !K(c))
      try {
        return await P(), await ae(e, a, r, u, c, !0);
      } catch {
      }
    return k.warn("Mediabunny audio decode failed, using fallback", { itemId: a, error: m }), ke(e, a);
  }
}
async function ke(e, a) {
  const r = X.get(e);
  if (r)
    return k.debug("Using cached decoded audio (fallback)", { itemId: a }), { ...r, itemId: a };
  k.debug("Decoding audio with Web Audio API fallback", { itemId: a, src: e.substring(0, 50) });
  const u = await fetch(e);
  if (!u.ok)
    throw new Error(`Failed to fetch audio: ${u.status}`);
  const c = await u.arrayBuffer(), m = await new OfflineAudioContext(2, 1, 48e3).decodeAudioData(c), f = [];
  for (let p = 0; p < m.numberOfChannels; p++)
    f.push(m.getChannelData(p));
  const v = {
    itemId: a,
    sampleRate: m.sampleRate,
    channels: m.numberOfChannels,
    samples: f,
    duration: m.duration
  };
  return X.set(e, v), k.debug("Decoded audio (fallback)", {
    itemId: a,
    sampleRate: m.sampleRate,
    channels: m.numberOfChannels,
    duration: m.duration,
    samples: f[0]?.length
  }), v;
}
function oe(e) {
  return Math.pow(10, e / 20);
}
function xe(e, a) {
  const r = oe(a), u = new Float32Array(e.length);
  for (let c = 0; c < e.length; c++)
    u[c] = e[c] * r;
  return u;
}
function be(e, a, r, u, c, l, m) {
  const f = new Float32Array(e.length);
  for (let v = 0; v < e.length; v++) {
    const o = u + v / m * l - c, C = he(a, o, r), g = oe(C);
    f[v] = e[v] * g;
  }
  return f;
}
function H(e, a, r, u = !1, c = 0, l = 0, m = 0.52, f = 0.52, v = 0, p = 0, o = 0, C = 0) {
  const g = new Float32Array(e.length);
  g.set(e);
  const F = Math.max(0, Math.min(v + Math.max(0, o), g.length)), n = Math.max(F, g.length - Math.max(0, p + Math.max(0, C))), M = Math.max(0, n - F);
  if (a > 0) {
    for (let t = 0; t < F && t < g.length; t++)
      g[t] = 0;
    for (let t = 0; t < a && t < M; t++) {
      const s = F + t, O = t / a, d = u ? Math.sin(O * Math.PI / 2) : Y(O, c, m);
      g[s] = g[s] * d;
    }
  }
  if (r > 0) {
    const t = Math.max(F, n - r);
    for (let s = 0; s < r; s++) {
      const O = t + s;
      if (O < F || O >= n) continue;
      const d = s / r, i = u ? Math.cos(d * Math.PI / 2) : Z(d, l, f);
      g[O] = g[O] * i;
    }
    for (let s = n; s < g.length; s++)
      g[s] = 0;
  }
  return g;
}
function Ae(e, a, r, u) {
  if (!a || a.length === 0) return e;
  const c = new Float32Array(e.length);
  c.set(e);
  for (const l of a) {
    const m = Math.max(0, Math.floor(l.startFrame / u * r)), f = Math.min(c.length, Math.floor((l.startFrame + l.durationInFrames) / u * r)), v = Math.max(0, f - m);
    if (v === 0) continue;
    const p = Math.max(0, Math.min(v, Math.floor((l.fadeInFrames ?? 0) / u * r))), o = Math.max(0, Math.min(v, Math.floor((l.fadeOutFrames ?? 0) / u * r)));
    for (let g = 0; g < p; g++) {
      const F = g / Math.max(1, p), n = Y(F, l.fadeInCurve, l.fadeInCurveX);
      c[m + g] = c[m + g] * n;
    }
    const C = f - o;
    for (let g = 0; g < o; g++) {
      const F = C + g;
      if (F < m || F >= f) continue;
      const n = g / Math.max(1, o), M = Z(n, l.fadeOutCurve, l.fadeOutCurveX);
      c[F] = c[F] * M;
    }
  }
  return c;
}
async function Ee(e, a, r) {
  if (a === 1 || e.length === 0 || e[0].length === 0) return e;
  const u = e.length, c = e[0].length;
  k.debug("Applying pitch-preserved speed change (SoundTouch)", { speed: a, sampleRate: r, numChannels: u });
  try {
    const l = await import("./audio-processing-BENUTf8w.js"), m = new l.SoundTouch();
    m.tempo = a, m.pitch = 1, m.rate = 1;
    const f = new Float32Array(c * 2), v = e[0], p = u >= 2 ? e[1] : v;
    for (let I = 0; I < c; I++)
      f[I * 2] = v[I], f[I * 2 + 1] = p[I];
    let o = 0;
    const C = {
      extract: (I, S) => {
        const y = Math.min(S * 2, f.length - o);
        if (y <= 0) return 0;
        for (let w = 0; w < y; w++)
          I[w] = f[o + w];
        return o += y, y / 2;
      }
    }, g = new l.SimpleFilter(C, m), F = Math.floor(c / a), n = new Float32Array(F * 2);
    let M = 0;
    const t = 4096, s = new Float32Array(t * 2);
    for (; M < n.length; ) {
      const I = g.extract(s, t);
      if (I === 0) break;
      const S = Math.min(I * 2, n.length - M);
      for (let y = 0; y < S; y++)
        n[M + y] = s[y];
      M += I * 2;
    }
    const O = Math.floor(M / 2), d = [], i = new Float32Array(O), h = new Float32Array(O);
    for (let I = 0; I < O; I++)
      i[I] = n[I * 2], h[I] = n[I * 2 + 1];
    if (u >= 2) {
      d.push(i, h);
      for (let I = 2; I < u; I++)
        d.push(i);
    } else
      d.push(i);
    return k.debug("SoundTouch time stretch complete", {
      inputLength: c,
      outputLength: O,
      expectedLength: F,
      speed: a,
      numChannels: u
    }), d;
  } catch (l) {
    k.warn("SoundTouch failed, falling back to simple resampling", { error: l });
    const m = Math.floor(c / a);
    return e.map((f) => {
      const v = new Float32Array(m);
      for (let p = 0; p < m; p++) {
        const o = p * a, C = Math.floor(o), g = Math.min(C + 1, f.length - 1), F = o - C;
        v[p] = f[C] * (1 - F) + f[g] * F;
      }
      return v;
    });
  }
}
async function Le(e, a, r) {
  if (a === r) return e;
  const u = e.length / a, c = new OfflineAudioContext(
    1,
    Math.ceil(u * r),
    r
  ), l = c.createBuffer(1, e.length, a);
  l.getChannelData(0).set(e);
  const m = c.createBufferSource();
  return m.buffer = l, m.connect(c.destination), m.start(0), (await c.startRendering()).getChannelData(0);
}
function Te(e, a) {
  const { sampleRate: r, channels: u, fps: c, totalFrames: l } = a, m = Math.ceil(l / c * r), f = [];
  for (let p = 0; p < u; p++)
    f.push(new Float32Array(m));
  for (const p of e)
    if (!p.muted)
      for (let o = 0; o < u; o++) {
        const C = p.samples[o % p.samples.length];
        if (!C) continue;
        const g = f[o];
        for (let F = 0; F < C.length; F++) {
          const n = p.startSample + F;
          if (n < 0 || n >= m) continue;
          const M = C[F], t = g[n];
          M !== void 0 && t !== void 0 && (g[n] = t + M);
        }
      }
  let v = 0;
  for (const p of f)
    for (let o = 0; o < p.length; o++) {
      const C = p[o];
      C !== void 0 && Math.abs(C) > 1 && (p[o] = Math.tanh(C), v++);
    }
  return v > 0 && k.debug("Soft-clipped audio peaks", { clippedSamples: v }), f;
}
async function ne(e) {
  const a = e.tracks ?? [], r = [], u = R.getState().compositionById, c = le(a, u);
  for (const l of c) {
    const m = u[l];
    if (m)
      for (const f of m.items)
        f.type !== "video" && f.type !== "audio" || f.mediaId && !$.get(f.mediaId) && r.push(pe(f.mediaId).then(() => {
        }));
  }
  r.length > 0 && (k.debug("Pre-resolving sub-comp audio URLs", { count: r.length }), await Promise.all(r));
}
async function Ke(e, a) {
  const { fps: r, durationInFrames: u = 0 } = e;
  await ne(e);
  const l = te(e, r).filter((o) => !o.muted);
  if (l.length === 0)
    return k.info("No audio segments to process"), null;
  l.some((o) => K(o.audioCodec)) && (await P(), k.debug("AC-3 decoder pre-registered for export audio decode"));
  const f = {
    sampleRate: 48e3,
    // Standard export sample rate
    channels: 2,
    // Stereo
    fps: r,
    totalFrames: u
  };
  k.info("Processing audio", {
    segmentCount: l.length,
    sampleRate: f.sampleRate,
    channels: f.channels,
    durationSeconds: u / r
  });
  const v = [];
  for (const o of l) {
    if (a?.aborted)
      throw new DOMException("Audio processing cancelled", "AbortError");
    try {
      const C = o.sourceStartFrame / o.sourceFps, g = o.durationFrames / r * o.speed, F = C + g, n = me && o.audioEnhance?.enabled && o.mediaId ? await we(
        o.mediaId,
        o.src,
        o.audioEnhance,
        C,
        F
      ) : await ae(
        o.src,
        o.itemId,
        C,
        F,
        o.audioCodec
      );
      let M = n.samples;
      o.speed !== 1 && (M = await Ee(M, o.speed, n.sampleRate));
      const t = Math.floor(
        o.fadeInFrames / r * n.sampleRate
      ), s = Math.floor(
        o.fadeOutFrames / r * n.sampleRate
      ), O = Math.floor(
        (o.crossfadeFadeInFrames ?? 0) / r * n.sampleRate
      ), d = Math.floor(
        (o.crossfadeFadeOutFrames ?? 0) / r * n.sampleRate
      ), i = Math.floor(
        (o.contentStartOffsetFrames ?? 0) / r * n.sampleRate
      ), h = Math.floor(
        (o.contentEndOffsetFrames ?? 0) / r * n.sampleRate
      ), I = Math.floor(
        (o.fadeInDelayFrames ?? 0) / r * n.sampleRate
      ), S = Math.floor(
        (o.fadeOutLeadFrames ?? 0) / r * n.sampleRate
      );
      for (let w = 0; w < M.length; w++) {
        let x = M[w];
        o.volumeKeyframes && o.volumeKeyframes.length > 0 ? x = be(
          x,
          o.volumeKeyframes,
          o.volume,
          o.startFrame,
          o.itemFrom,
          r,
          n.sampleRate
        ) : o.volume !== 0 && (x = xe(x, o.volume)), o.clipFadeSpans && o.clipFadeSpans.length > 0 ? x = Ae(x, o.clipFadeSpans, n.sampleRate, r) : (t > 0 || s > 0) && (x = H(
          x,
          t,
          s,
          !1,
          o.fadeInCurve,
          o.fadeOutCurve,
          o.fadeInCurveX,
          o.fadeOutCurveX,
          i,
          h,
          I,
          S
        )), (O > 0 || d > 0) && (x = H(
          x,
          O,
          d,
          !0
        )), n.sampleRate !== f.sampleRate && (x = await Le(x, n.sampleRate, f.sampleRate)), M[w] = x;
      }
      const y = Math.floor(o.startFrame / r * f.sampleRate);
      v.push({
        samples: M,
        startSample: y,
        muted: o.muted
      }), k.debug("Processed audio segment", {
        itemId: o.itemId,
        type: o.type,
        startSample: y,
        outputSamples: M[0]?.length
      });
    } catch (C) {
      k.error("Failed to process audio segment", {
        itemId: o.itemId,
        error: C
      });
    }
  }
  if (v.length === 0)
    return k.warn("No audio segments were successfully processed"), null;
  const p = Te(v, f);
  return k.info("Audio processing complete", {
    outputSamples: p[0]?.length,
    channels: p.length,
    durationSeconds: (p[0]?.length ?? 0) / f.sampleRate
  }), {
    samples: p,
    sampleRate: f.sampleRate,
    channels: f.channels
  };
}
async function Pe(e) {
  return await ne(e), te(e, e.fps).some((r) => !r.muted);
}
export {
  te as extractAudioSegments,
  Pe as hasAudioContent,
  Ke as processAudio
};
