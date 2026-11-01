import { c as fe } from "./core-logger-Dau_Juxv.js";
import { g9 as P, ga as V, dx as me, V as X, gb as le, eJ as Q, J as pe, gc as R, gd as U, fE as W, ge as Y, gf as Fe, gg as he, d1 as Ie, gh as Z, gi as ee, gj as ve, al as L, am as A, eK as ge, gk as Ce } from "./feature-editing-core-bYMFyxAZ.js";
import "./gif-processing-CfWcW1Gl.js";
import "./react-vendor-18pR7s9b.js";
function ye(e, a) {
  const d = !e?.enabled, s = !a?.enabled;
  return d && s ? !0 : d !== s ? !1 : (e.model ?? "rnnoise") === (a.model ?? "rnnoise") && (e.denoise ?? !0) === (a.denoise ?? !0) && (e.aggressive ?? !1) === (a.aggressive ?? !1) && (e.highPass ?? !0) === (a.highPass ?? !0) && (e.hum ?? "off") === (a.hum ?? "off") && (e.deEss ?? !1) === (a.deEss ?? !1) && (e.voiceEq ?? !1) === (a.voiceEq ?? !1) && (e.compress ?? !0) === (a.compress ?? !0) && (e.normalize ?? !0) === (a.normalize ?? !0);
}
const k = fe("CanvasAudio"), D = /* @__PURE__ */ new Map();
function Oe(e, a) {
  return e.type === "video" && a.type === "audio" || e.type === "audio" && a.type === "video";
}
function H(e) {
  const a = e;
  return a.sourceStart ?? a.trimStart ?? a.offset ?? null;
}
function Se(e, a) {
  return !Oe(e, a) || e.linkedGroupId || a.linkedGroupId || e.originId || a.originId || !e.mediaId || e.mediaId !== a.mediaId || e.from !== a.from || e.durationInFrames !== a.durationInFrames || H(e) !== H(a) || (e.sourceEnd ?? null) !== (a.sourceEnd ?? null) ? !1 : (e.speed ?? 1) === (a.speed ?? 1);
}
function q(e, a) {
  const d = Ce(e, a);
  return d || (a.type !== "video" ? null : e.find((s) => s.type === "audio" && Se(a, s)) ?? null);
}
function Me(e) {
  const a = /* @__PURE__ */ new Set();
  for (const d of e)
    d.type === "video" && q(e, d) && a.add(d.id);
  return a;
}
function we(e, a) {
  const d = new Map(e.map((c) => [c.id, c])), s = [];
  for (const c of a) {
    const m = d.get(c.leftClipId), f = d.get(c.rightClipId);
    if (m?.type !== "video" || f?.type !== "video") continue;
    const F = q(e, m), h = q(e, f);
    !F || !h || F.trackId === h.trackId && (F.from !== m.from || h.from !== f.from || F.durationInFrames !== m.durationInFrames || h.durationInFrames !== f.durationInFrames || s.push({ transition: c, leftAudio: F, rightAudio: h }));
  }
  return s;
}
function N(e) {
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
function T(e) {
  return e.sourceStart ?? e.trimStart ?? e.offset ?? 0;
}
function te(e) {
  return e.sourceStart !== void 0 || e.trimStart !== void 0 || e.offset !== void 0;
}
function B(e, a, d) {
  const s = e.speed ?? 1, c = a.speed ?? 1, m = e.sourceFps ?? d;
  if (Math.abs(s - c) > 1e-4 || !(e.mediaId && a.mediaId && e.mediaId === a.mediaId || !!e.src && !!a.src && e.src === a.src) || e.originId && a.originId && e.originId !== a.originId) return !1;
  const F = e.from + e.durationInFrames;
  if (Math.abs(a.from - F) > 2) return !1;
  const h = T(e), l = T(a), I = h + L(
    e.durationInFrames,
    s,
    d,
    m
  ), n = e.sourceEnd, g = Math.abs(l - I) <= 2, p = n !== void 0 ? Math.abs(l - n) <= 2 : !1;
  return g || p ? !0 : !te(a);
}
function K(e, a, d) {
  if (e.size === 0 || a.length === 0) return [];
  const s = /* @__PURE__ */ new Map(), c = (t) => {
    const o = s.get(t);
    if (o) return o;
    const S = { before: 0, after: 0, overlapFadeOut: 0, overlapFadeIn: 0, fadeInDelay: 0, fadeOutLead: 0 };
    return s.set(t, S), S;
  }, m = /* @__PURE__ */ new Map();
  for (const [t, o] of e)
    m.set(t, o.item);
  const f = ge(a, m);
  for (const t of f) {
    const o = e.get(t.transition.leftClipId), S = e.get(t.transition.rightClipId);
    if (!o || !S) continue;
    const u = o.item, i = S.item;
    if (B(u, i, d)) continue;
    const v = Math.max(0, i.from - t.startFrame), C = Math.max(0, t.endFrame - (u.from + u.durationInFrames));
    if (v > 0) {
      const M = c(i.id);
      M.before = Math.max(M.before, v);
    }
    if (C > 0) {
      const M = c(u.id);
      M.after = Math.max(M.after, C);
    }
    if (t.durationInFrames > 0) {
      const M = c(u.id);
      M.overlapFadeOut = Math.max(M.overlapFadeOut, t.durationInFrames), M.fadeOutLead = Math.max(M.fadeOutLead, t.leftPortion);
      const y = c(i.id);
      y.overlapFadeIn = Math.max(y.overlapFadeIn, t.durationInFrames), y.fadeInDelay = Math.max(y.fadeInDelay, t.rightPortion);
    }
  }
  const F = /* @__PURE__ */ new Map(), h = Array.from(e.entries()).map(([t, o]) => ({
    id: t,
    trackId: o.trackId,
    item: o.item
  })).toSorted((t, o) => t.trackId !== o.trackId ? t.trackId.localeCompare(o.trackId) : t.item.from !== o.item.from ? t.item.from - o.item.from : t.id.localeCompare(o.id)), l = /* @__PURE__ */ new Map();
  for (const t of h) {
    const o = t.item;
    let u = T(o);
    if (!te(o)) {
      const i = l.get(t.trackId);
      i && B(i, o, d) && (u = (F.get(i.id) ?? T(i)) + L(
        i.durationInFrames,
        i.speed ?? 1,
        d,
        i.sourceFps ?? d
      ));
    }
    F.set(o.id, u), l.set(t.trackId, o);
  }
  const I = [];
  for (const [, t] of e) {
    const o = t.item, S = o.speed ?? 1, u = o.sourceFps ?? d, i = F.get(o.id) ?? T(o), v = s.get(o.id) ?? { before: 0, after: 0, overlapFadeOut: 0, overlapFadeIn: 0, fadeInDelay: 0, fadeOutLead: 0 }, C = S > 0 ? A(i, S, u, d) : 0, M = Math.max(0, Math.min(v.before, C)), y = Math.max(0, v.after), w = v.overlapFadeIn > 0 ? v.overlapFadeIn : M > 0 ? M : void 0, b = v.overlapFadeOut > 0 ? v.overlapFadeOut : y > 0 ? y : void 0;
    I.push({
      itemId: o.id,
      trackId: t.trackId,
      clip: o,
      src: o.src,
      startFrame: o.from - M,
      durationFrames: o.durationInFrames + M + y,
      sourceStartFrame: i - L(M, S, d, u),
      sourceFps: u,
      volume: (o.volume ?? 0) + t.trackVolume,
      fadeInFrames: (o.audioFadeIn ?? 0) * d,
      fadeOutFrames: (o.audioFadeOut ?? 0) * d,
      fadeInCurve: o.audioFadeInCurve ?? 0,
      fadeOutCurve: o.audioFadeOutCurve ?? 0,
      fadeInCurveX: o.audioFadeInCurveX ?? 0.52,
      fadeOutCurveX: o.audioFadeOutCurveX ?? 0.52,
      contentStartOffsetFrames: M,
      contentEndOffsetFrames: y,
      fadeInDelayFrames: v.fadeInDelay,
      fadeOutLeadFrames: v.fadeOutLead,
      clipFadeSpans: [N({
        startFrame: M,
        durationInFrames: o.durationInFrames,
        fadeInFrames: (o.audioFadeIn ?? 0) * d,
        fadeOutFrames: (o.audioFadeOut ?? 0) * d,
        fadeInCurve: o.audioFadeInCurve,
        fadeOutCurve: o.audioFadeOutCurve,
        fadeInCurveX: o.audioFadeInCurveX,
        fadeOutCurveX: o.audioFadeOutCurveX
      })],
      crossfadeFadeInFrames: w,
      crossfadeFadeOutFrames: b,
      speed: S,
      muted: t.muted,
      type: t.type,
      audioCodec: t.audioCodec,
      beforeFrames: M,
      afterFrames: y,
      volumeKeyframes: t.volumeKeyframes,
      itemFrom: t.itemFrom,
      mediaId: o.mediaId,
      audioEnhance: o.audioEnhance
    });
  }
  const n = I.toSorted((t, o) => t.startFrame !== o.startFrame ? t.startFrame - o.startFrame : t.itemId.localeCompare(o.itemId)), g = [];
  let p = null;
  const r = (t, o) => !(!B(t.clip, o.clip, d) || t.src !== o.src || Math.abs(t.speed - o.speed) > 1e-4 || Math.abs(t.volume - o.volume) > 1e-4 || t.muted !== o.muted || t.afterFrames !== 0 || o.beforeFrames !== 0 || t.volumeKeyframes || o.volumeKeyframes || !ye(t.audioEnhance, o.audioEnhance)), O = (t) => ({
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
  for (const t of n) {
    if (!p) {
      p = { ...t };
      continue;
    }
    if (r(p, t)) {
      const o = p.startFrame, S = t.startFrame + t.durationFrames;
      p.durationFrames = S - p.startFrame, p.fadeOutFrames = t.fadeOutFrames, p.fadeOutCurve = t.fadeOutCurve, p.fadeOutCurveX = t.fadeOutCurveX, p.contentEndOffsetFrames = t.contentEndOffsetFrames, p.fadeOutLeadFrames = t.fadeOutLeadFrames, p.crossfadeFadeOutFrames = t.crossfadeFadeOutFrames, p.clipFadeSpans = [...p.clipFadeSpans ?? [], ...(t.clipFadeSpans ?? []).map((u) => ({
        ...u,
        startFrame: u.startFrame + (t.startFrame - o)
      }))], p.clip = t.clip, p.afterFrames = t.afterFrames;
      continue;
    }
    g.push(O(p)), p = { ...t };
  }
  return p && g.push(O(p)), g;
}
function z(e) {
  const { segments: a, track: d, compositionItem: s, subComp: c, fps: m } = e, f = e.visited ?? /* @__PURE__ */ new Set(), F = ve(c.items), h = s.from, l = s.speed ?? 1, I = s.sourceFps ?? m, n = s.sourceStart ?? s.trimStart ?? 0, g = s.sourceEnd ?? n + L(s.durationInFrames, l, m, I), p = d.muted ?? !1;
  for (const r of c.items) {
    const O = c.tracks.find((E) => E.id === r.trackId), t = O?.muted ?? !1, o = Math.max(r.from, n), S = Math.min(r.from + r.durationInFrames, g);
    if (S <= o) continue;
    const u = h + A(o - n, l, I, m), i = h + A(S - n, l, I, m), v = Math.max(1, i - u);
    if (v <= 0) continue;
    const C = o - r.from, M = r.sourceStart ?? r.trimStart ?? 0, y = (r.speed ?? 1) * l, w = M + L(
      C,
      r.speed ?? 1,
      I,
      r.sourceFps ?? I
    );
    if (r.type === "composition" || R(r)) {
      if (r.type === "composition" && Y(c.items, r) || f.has(r.compositionId)) continue;
      const E = X.getState().getComposition(r.compositionId);
      if (!E) continue;
      const ce = {
        ...r,
        from: u,
        durationInFrames: v,
        speed: (r.speed ?? 1) * l,
        sourceStart: w,
        sourceFps: r.sourceFps ?? I,
        ...r.sourceEnd !== void 0 && {
          sourceEnd: Math.max(
            w + 1,
            r.sourceEnd - L(
              r.from + r.durationInFrames - S,
              r.speed ?? 1,
              I,
              r.sourceFps ?? I
            )
          )
        }
      }, _ = new Set(f);
      _.add(r.compositionId), z({
        segments: a,
        track: {
          ...d,
          muted: p || t,
          volume: (d.volume ?? 0) + (O?.volume ?? 0)
        },
        compositionItem: ce,
        subComp: E,
        fps: m,
        visited: _
      });
      continue;
    }
    if (r.type !== "video" && r.type !== "audio" || r.type === "video" && F.has(r.id)) continue;
    const b = r.mediaId ? Q.get(r.mediaId) : r.src;
    if (!b) continue;
    const x = c.keyframes?.find((E) => E.itemId === r.id), j = W(x, "volume"), se = A((r.audioFadeIn ?? 0) * I, l, I, m), ie = A((r.audioFadeOut ?? 0) * I, l, I, m), de = A(o - r.from, l, I, m), ue = A(r.from + r.durationInFrames - S, l, I, m), G = Math.max(0, se - de), J = Math.max(0, ie - ue);
    a.push({
      itemId: r.id,
      trackId: d.id,
      src: b,
      startFrame: u,
      durationFrames: v,
      sourceStartFrame: w,
      sourceFps: r.sourceFps ?? m,
      volume: (r.volume ?? 0) + (d.volume ?? 0) + (O?.volume ?? 0),
      fadeInFrames: G,
      fadeOutFrames: J,
      fadeInCurve: r.audioFadeInCurve ?? 0,
      fadeOutCurve: r.audioFadeOutCurve ?? 0,
      fadeInCurveX: r.audioFadeInCurveX ?? 0.52,
      fadeOutCurveX: r.audioFadeOutCurveX ?? 0.52,
      contentStartOffsetFrames: 0,
      contentEndOffsetFrames: 0,
      fadeInDelayFrames: 0,
      fadeOutLeadFrames: 0,
      clipFadeSpans: [N({
        startFrame: 0,
        durationInFrames: v,
        fadeInFrames: G,
        fadeOutFrames: J,
        fadeInCurve: r.audioFadeInCurve,
        fadeOutCurve: r.audioFadeOutCurve,
        fadeInCurveX: r.audioFadeInCurveX,
        fadeOutCurveX: r.audioFadeOutCurveX
      })],
      speed: y,
      muted: p || t,
      type: r.type,
      audioCodec: U(r.mediaId),
      volumeKeyframes: j.length > 0 ? j : void 0,
      itemFrom: u
    });
  }
}
function ae(e, a) {
  const { tracks: d = [], transitions: s = [] } = e, c = [], m = [], f = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), l = d.flatMap((u) => u.items), I = Me(l), n = we(l, s), g = /* @__PURE__ */ new Set();
  for (const u of n)
    g.add(u.leftAudio.id), g.add(u.rightAudio.id);
  const p = n.map(
    ({ transition: u, leftAudio: i, rightAudio: v }) => ({
      ...u,
      leftClipId: i.id,
      rightClipId: v.id,
      trackId: i.trackId
    })
  ), r = /* @__PURE__ */ new Set(), O = s.filter((u) => {
    const i = l.find((C) => C.id === u.leftClipId), v = l.find((C) => C.id === u.rightClipId);
    return i?.type !== "audio" || v?.type !== "audio" || R(i) || R(v) ? !1 : (r.add(i.id), r.add(v.id), !0);
  });
  for (const u of d)
    if (u.visible !== !1) {
      for (const i of u.items)
        if (i.type === "video") {
          const v = i;
          if (I.has(v.id) || v.embeddedAudioMuted || !v.src) continue;
          f.set(i.id, {
            item: v,
            trackId: u.id,
            muted: u.muted ?? !1,
            trackVolume: u.volume ?? 0,
            type: "video",
            audioCodec: U(v.mediaId),
            volumeKeyframes: (() => {
              const C = e.keyframes?.find((y) => y.itemId === i.id), M = W(C, "volume");
              return M.length > 0 ? M : void 0;
            })(),
            itemFrom: v.from
          });
        } else if (i.type === "audio") {
          const v = i;
          if (R(v)) {
            const w = X.getState().getComposition(v.compositionId);
            if (!w) continue;
            z({
              segments: m,
              track: u,
              compositionItem: v,
              subComp: w,
              fps: a
            });
            continue;
          }
          if (!v.src) continue;
          const C = e.keyframes?.find((w) => w.itemId === i.id), M = W(C, "volume"), y = {
            item: v,
            trackId: u.id,
            muted: u.muted ?? !1,
            trackVolume: u.volume ?? 0,
            type: "audio",
            audioCodec: U(i.mediaId),
            volumeKeyframes: M.length > 0 ? M : void 0,
            itemFrom: i.from
          };
          if (g.has(i.id)) {
            h.set(i.id, y);
            continue;
          }
          if (r.has(i.id)) {
            F.set(i.id, y);
            continue;
          }
          m.push({
            itemId: i.id,
            trackId: u.id,
            src: v.src,
            startFrame: i.from,
            durationFrames: i.durationInFrames,
            sourceStartFrame: v.sourceStart ?? i.trimStart ?? 0,
            sourceFps: v.sourceFps ?? a,
            volume: (i.volume ?? 0) + (u.volume ?? 0),
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
            clipFadeSpans: [N({
              startFrame: 0,
              durationInFrames: i.durationInFrames,
              fadeInFrames: (i.audioFadeIn ?? 0) * a,
              fadeOutFrames: (i.audioFadeOut ?? 0) * a,
              fadeInCurve: i.audioFadeInCurve,
              fadeOutCurve: i.audioFadeOutCurve,
              fadeInCurveX: i.audioFadeInCurveX,
              fadeOutCurveX: i.audioFadeOutCurveX
            })],
            speed: v.speed ?? 1,
            muted: u.muted ?? !1,
            type: "audio",
            audioCodec: y.audioCodec,
            volumeKeyframes: y.volumeKeyframes,
            itemFrom: i.from,
            mediaId: i.mediaId,
            audioEnhance: i.audioEnhance
          });
        }
    }
  const t = K(f, s, a), o = K(F, O, a), S = K(
    h,
    p,
    a
  );
  c.push(...t, ...o, ...S, ...m);
  for (const u of d)
    if (u.visible !== !1)
      for (const i of u.items) {
        if (i.type !== "composition") continue;
        const v = i;
        if (Y(l, v)) continue;
        const C = X.getState().getComposition(v.compositionId);
        C && z({
          segments: c,
          track: u,
          compositionItem: v,
          subComp: C,
          fps: a
        });
      }
  return k.info("Extracted audio segments", {
    count: c.length,
    videoCount: c.filter((u) => u.type === "video").length,
    audioCount: c.filter((u) => u.type === "audio").length
  }), c;
}
async function ke(e, a, d, s, c) {
  const m = await Fe(e, a, d), f = m.sampleRate, F = Math.max(0, Math.floor(s * f)), h = Math.min(m.length, Math.ceil(c * f)), l = Math.max(0, h - F), I = [];
  for (let n = 0; n < m.numberOfChannels; n++) {
    const g = m.getChannelData(n);
    I.push(g.slice(F, h));
  }
  return {
    itemId: "",
    sampleRate: f,
    channels: m.numberOfChannels,
    samples: I,
    duration: l / f
  };
}
async function oe(e, a, d, s, c, m = !1) {
  if (d === void 0 && s === void 0) {
    const f = D.get(e);
    if (f)
      return k.debug("Using cached decoded audio", { itemId: a, src: e.substring(0, 50) }), { ...f, itemId: a };
  }
  k.debug("Decoding audio with mediabunny", {
    itemId: a,
    src: e.substring(0, 50),
    startTime: d,
    endTime: s,
    audioCodec: c
  });
  try {
    P(c) && await V();
    const f = await import("./media-bunny-core-CXIwd4FE.js").then((h) => h.i), F = new f.Input({
      formats: f.ALL_FORMATS,
      source: new f.UrlSource(e, he(e))
    });
    try {
      const h = await F.getPrimaryAudioTrack();
      if (!h)
        throw new Error("No audio track found");
      const l = await F.computeDuration(), I = d ?? 0, n = s ?? l;
      k.debug("Extracting audio range", {
        itemId: a,
        startTime: I,
        endTime: n,
        totalDuration: l
      });
      const g = new f.AudioSampleSink(h), p = [];
      let r = 0, O = 48e3, t = 0;
      for await (const u of g.samples(I, n))
        try {
          const i = u, v = Math.max(0, i.numberOfFrames ?? 0), C = Math.max(1, i.numberOfChannels ?? 1);
          if (v === 0)
            continue;
          if (t === 0) {
            t = C;
            for (let y = 0; y < t; y++)
              p.push([]);
          } else if (C > t) {
            for (let y = t; y < C; y++) {
              const w = [];
              r > 0 && w.push(new Float32Array(r)), p.push(w);
            }
            t = C;
          } else C < t && k.warn("Inconsistent channel count during mediabunny audio decode", {
            itemId: a,
            expectedChannels: t,
            actualChannels: C
          });
          const M = t || C;
          for (let y = 0; y < M; y++) {
            const w = Math.min(y, C - 1), b = new Float32Array(v);
            i.copyTo(b, { planeIndex: w, format: "f32-planar" }), p[y].push(b);
          }
          r += v, i.sampleRate && i.sampleRate > 0 && (O = i.sampleRate);
        } finally {
          u.close();
        }
      if (t === 0 || r === 0)
        throw new Error("Audio decode produced no output");
      const o = [];
      for (let u = 0; u < t; u++) {
        const i = new Float32Array(r);
        let v = 0;
        for (const C of p[u] ?? [])
          i.set(C, v), v += C.length;
        o.push(i);
      }
      const S = {
        itemId: a,
        sampleRate: O,
        channels: t,
        samples: o,
        duration: n - I
      };
      return k.debug("Decoded audio with mediabunny", {
        itemId: a,
        sampleRate: O,
        channels: t,
        duration: S.duration,
        samples: o[0]?.length
      }), d === void 0 && s === void 0 && D.set(e, S), S;
    } finally {
      F.dispose();
    }
  } catch (f) {
    if (!m && !P(c))
      try {
        return await V(), await oe(e, a, d, s, c, !0);
      } catch {
      }
    return k.warn("Mediabunny audio decode failed, using fallback", { itemId: a, error: f }), xe(e, a);
  }
}
async function xe(e, a) {
  const d = D.get(e);
  if (d)
    return k.debug("Using cached decoded audio (fallback)", { itemId: a }), { ...d, itemId: a };
  k.debug("Decoding audio with Web Audio API fallback", { itemId: a, src: e.substring(0, 50) });
  const s = await fetch(e);
  if (!s.ok)
    throw new Error(`Failed to fetch audio: ${s.status}`);
  const c = await s.arrayBuffer(), f = await new OfflineAudioContext(2, 1, 48e3).decodeAudioData(c), F = [];
  for (let l = 0; l < f.numberOfChannels; l++)
    F.push(f.getChannelData(l));
  const h = {
    itemId: a,
    sampleRate: f.sampleRate,
    channels: f.numberOfChannels,
    samples: F,
    duration: f.duration
  };
  return D.set(e, h), k.debug("Decoded audio (fallback)", {
    itemId: a,
    sampleRate: f.sampleRate,
    channels: f.numberOfChannels,
    duration: f.duration,
    samples: F[0]?.length
  }), h;
}
function ne(e) {
  return Math.pow(10, e / 20);
}
function be(e, a) {
  const d = ne(a), s = new Float32Array(e.length);
  for (let c = 0; c < e.length; c++)
    s[c] = e[c] * d;
  return s;
}
function Ae(e, a, d, s, c, m, f) {
  const F = new Float32Array(e.length);
  for (let h = 0; h < e.length; h++) {
    const I = s + h / f * m - c, n = Ie(a, I, d), g = ne(n);
    F[h] = e[h] * g;
  }
  return F;
}
function $(e, a, d, s = !1, c = 0, m = 0, f = 0.52, F = 0.52, h = 0, l = 0, I = 0, n = 0) {
  const g = new Float32Array(e.length);
  g.set(e);
  const p = Math.max(0, Math.min(h + Math.max(0, I), g.length)), r = Math.max(p, g.length - Math.max(0, l + Math.max(0, n))), O = Math.max(0, r - p);
  if (a > 0) {
    for (let t = 0; t < p && t < g.length; t++)
      g[t] = 0;
    for (let t = 0; t < a && t < O; t++) {
      const o = p + t, S = t / a, u = s ? Math.sin(S * Math.PI / 2) : Z(S, c, f);
      g[o] = g[o] * u;
    }
  }
  if (d > 0) {
    const t = Math.max(p, r - d);
    for (let o = 0; o < d; o++) {
      const S = t + o;
      if (S < p || S >= r) continue;
      const u = o / d, i = s ? Math.cos(u * Math.PI / 2) : ee(u, m, F);
      g[S] = g[S] * i;
    }
    for (let o = r; o < g.length; o++)
      g[o] = 0;
  }
  return g;
}
function Ee(e, a, d, s) {
  if (!a || a.length === 0) return e;
  const c = new Float32Array(e.length);
  c.set(e);
  for (const m of a) {
    const f = Math.max(0, Math.floor(m.startFrame / s * d)), F = Math.min(c.length, Math.floor((m.startFrame + m.durationInFrames) / s * d)), h = Math.max(0, F - f);
    if (h === 0) continue;
    const l = Math.max(0, Math.min(h, Math.floor((m.fadeInFrames ?? 0) / s * d))), I = Math.max(0, Math.min(h, Math.floor((m.fadeOutFrames ?? 0) / s * d)));
    for (let g = 0; g < l; g++) {
      const p = g / Math.max(1, l), r = Z(p, m.fadeInCurve, m.fadeInCurveX);
      c[f + g] = c[f + g] * r;
    }
    const n = F - I;
    for (let g = 0; g < I; g++) {
      const p = n + g;
      if (p < f || p >= F) continue;
      const r = g / Math.max(1, I), O = ee(r, m.fadeOutCurve, m.fadeOutCurveX);
      c[p] = c[p] * O;
    }
  }
  return c;
}
async function Le(e, a, d) {
  if (a === 1 || e.length === 0 || e[0].length === 0) return e;
  const s = e.length, c = e[0].length;
  k.debug("Applying pitch-preserved speed change (SoundTouch)", { speed: a, sampleRate: d, numChannels: s });
  try {
    const m = await import("./audio-processing-BENUTf8w.js"), f = new m.SoundTouch();
    f.tempo = a, f.pitch = 1, f.rate = 1;
    const F = new Float32Array(c * 2), h = e[0], l = s >= 2 ? e[1] : h;
    for (let C = 0; C < c; C++)
      F[C * 2] = h[C], F[C * 2 + 1] = l[C];
    let I = 0;
    const n = {
      extract: (C, M) => {
        const y = Math.min(M * 2, F.length - I);
        if (y <= 0) return 0;
        for (let w = 0; w < y; w++)
          C[w] = F[I + w];
        return I += y, y / 2;
      }
    }, g = new m.SimpleFilter(n, f), p = Math.floor(c / a), r = new Float32Array(p * 2);
    let O = 0;
    const t = 4096, o = new Float32Array(t * 2);
    for (; O < r.length; ) {
      const C = g.extract(o, t);
      if (C === 0) break;
      const M = Math.min(C * 2, r.length - O);
      for (let y = 0; y < M; y++)
        r[O + y] = o[y];
      O += C * 2;
    }
    const S = Math.floor(O / 2), u = [], i = new Float32Array(S), v = new Float32Array(S);
    for (let C = 0; C < S; C++)
      i[C] = r[C * 2], v[C] = r[C * 2 + 1];
    if (s >= 2) {
      u.push(i, v);
      for (let C = 2; C < s; C++)
        u.push(i);
    } else
      u.push(i);
    return k.debug("SoundTouch time stretch complete", {
      inputLength: c,
      outputLength: S,
      expectedLength: p,
      speed: a,
      numChannels: s
    }), u;
  } catch (m) {
    k.warn("SoundTouch failed, falling back to simple resampling", { error: m });
    const f = Math.floor(c / a);
    return e.map((F) => {
      const h = new Float32Array(f);
      for (let l = 0; l < f; l++) {
        const I = l * a, n = Math.floor(I), g = Math.min(n + 1, F.length - 1), p = I - n;
        h[l] = F[n] * (1 - p) + F[g] * p;
      }
      return h;
    });
  }
}
async function Te(e, a, d) {
  if (a === d) return e;
  const s = e.length / a, c = new OfflineAudioContext(
    1,
    Math.ceil(s * d),
    d
  ), m = c.createBuffer(1, e.length, a);
  m.getChannelData(0).set(e);
  const f = c.createBufferSource();
  return f.buffer = m, f.connect(c.destination), f.start(0), (await c.startRendering()).getChannelData(0);
}
function Re(e, a) {
  const { sampleRate: d, channels: s, fps: c, totalFrames: m } = a, f = Math.ceil(m / c * d), F = [];
  for (let l = 0; l < s; l++)
    F.push(new Float32Array(f));
  for (const l of e)
    if (!l.muted)
      for (let I = 0; I < s; I++) {
        const n = l.samples[I % l.samples.length];
        if (!n) continue;
        const g = F[I];
        for (let p = 0; p < n.length; p++) {
          const r = l.startSample + p;
          if (r < 0 || r >= f) continue;
          const O = n[p], t = g[r];
          O !== void 0 && t !== void 0 && (g[r] = t + O);
        }
      }
  let h = 0;
  for (const l of F)
    for (let I = 0; I < l.length; I++) {
      const n = l[I];
      n !== void 0 && Math.abs(n) > 1 && (l[I] = Math.tanh(n), h++);
    }
  return h > 0 && k.debug("Soft-clipped audio peaks", { clippedSamples: h }), F;
}
async function re(e) {
  const a = e.tracks ?? [], d = [], s = X.getState().compositionById, c = le(a, s);
  for (const m of c) {
    const f = s[m];
    if (f)
      for (const F of f.items)
        F.type !== "video" && F.type !== "audio" || F.mediaId && !Q.get(F.mediaId) && d.push(pe(F.mediaId).then(() => {
        }));
  }
  d.length > 0 && (k.debug("Pre-resolving sub-comp audio URLs", { count: d.length }), await Promise.all(d));
}
async function Pe(e, a, d = {}) {
  const { fps: s, durationInFrames: c = 0 } = e;
  await re(e);
  const f = ae(e, s).filter((n) => !n.muted);
  if (f.length === 0)
    return k.info("No audio segments to process"), null;
  f.some((n) => P(n.audioCodec)) && (await V(), k.debug("AC-3 decoder pre-registered for export audio decode"));
  const h = {
    sampleRate: 48e3,
    // Standard export sample rate
    channels: 2,
    // Stereo
    fps: s,
    totalFrames: c
  };
  k.info("Processing audio", {
    segmentCount: f.length,
    sampleRate: h.sampleRate,
    channels: h.channels,
    durationSeconds: c / s
  });
  const l = [];
  for (const n of f) {
    if (a?.aborted)
      throw new DOMException("Audio processing cancelled", "AbortError");
    try {
      const g = n.sourceStartFrame / n.sourceFps, p = n.durationFrames / s * n.speed, r = g + p, O = me && n.audioEnhance?.enabled && n.mediaId ? await ke(
        n.mediaId,
        n.src,
        n.audioEnhance,
        g,
        r
      ) : await oe(
        n.src,
        n.itemId,
        g,
        r,
        n.audioCodec
      );
      let t = O.samples;
      n.speed !== 1 && (t = await Le(t, n.speed, O.sampleRate));
      const o = Math.floor(
        n.fadeInFrames / s * O.sampleRate
      ), S = Math.floor(
        n.fadeOutFrames / s * O.sampleRate
      ), u = Math.floor(
        (n.crossfadeFadeInFrames ?? 0) / s * O.sampleRate
      ), i = Math.floor(
        (n.crossfadeFadeOutFrames ?? 0) / s * O.sampleRate
      ), v = Math.floor(
        (n.contentStartOffsetFrames ?? 0) / s * O.sampleRate
      ), C = Math.floor(
        (n.contentEndOffsetFrames ?? 0) / s * O.sampleRate
      ), M = Math.floor(
        (n.fadeInDelayFrames ?? 0) / s * O.sampleRate
      ), y = Math.floor(
        (n.fadeOutLeadFrames ?? 0) / s * O.sampleRate
      );
      for (let b = 0; b < t.length; b++) {
        let x = t[b];
        n.volumeKeyframes && n.volumeKeyframes.length > 0 ? x = Ae(
          x,
          n.volumeKeyframes,
          n.volume,
          n.startFrame,
          n.itemFrom,
          s,
          O.sampleRate
        ) : n.volume !== 0 && (x = be(x, n.volume)), n.clipFadeSpans && n.clipFadeSpans.length > 0 ? x = Ee(x, n.clipFadeSpans, O.sampleRate, s) : (o > 0 || S > 0) && (x = $(
          x,
          o,
          S,
          !1,
          n.fadeInCurve,
          n.fadeOutCurve,
          n.fadeInCurveX,
          n.fadeOutCurveX,
          v,
          C,
          M,
          y
        )), (u > 0 || i > 0) && (x = $(
          x,
          u,
          i,
          !0
        )), O.sampleRate !== h.sampleRate && (x = await Te(x, O.sampleRate, h.sampleRate)), t[b] = x;
      }
      const w = Math.floor(n.startFrame / s * h.sampleRate);
      l.push({
        samples: t,
        startSample: w,
        muted: n.muted
      }), k.debug("Processed audio segment", {
        itemId: n.itemId,
        type: n.type,
        startSample: w,
        outputSamples: t[0]?.length
      });
    } catch (g) {
      k.error("Failed to process audio segment", {
        itemId: n.itemId,
        error: g
      }), d.onSkippedSegment?.(n.itemId, g);
    }
  }
  if (l.length === 0)
    return k.warn("No audio segments were successfully processed"), null;
  const I = Re(l, h);
  return k.info("Audio processing complete", {
    outputSamples: I[0]?.length,
    channels: I.length,
    durationSeconds: (I[0]?.length ?? 0) / h.sampleRate
  }), {
    samples: I,
    sampleRate: h.sampleRate,
    channels: h.channels
  };
}
async function Ve(e) {
  return await re(e), ae(e, e.fps).some((d) => !d.muted);
}
export {
  ae as extractAudioSegments,
  Ve as hasAudioContent,
  Pe as processAudio
};
