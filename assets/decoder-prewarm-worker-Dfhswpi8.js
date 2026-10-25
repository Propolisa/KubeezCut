const d = /* @__PURE__ */ new Map();
function x(e, t) {
  if (e.length === 0 || e[0] > t) return null;
  let n = 0, r = e.length - 1;
  for (; n < r; ) {
    const i = n + r + 1 >>> 1;
    e[i] <= t ? n = i : r = i - 1;
  }
  return e[n];
}
function A(e, t) {
  const n = d.get(e);
  if (!n || n.length === 0) return null;
  const r = x(n, t);
  return r === null ? null : Math.max(0, r - 0.05);
}
let y = null;
async function R() {
  return y || (y = await import("./index-BvfmbwGv.js")), y;
}
const T = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
async function _(e, t) {
  const n = T.get(e);
  if (n) return n;
  const r = g.get(e);
  if (r) return r;
  const i = (async () => {
    const s = await R(), m = t ? new s.BlobSource(t) : new s.UrlSource(e), o = new s.Input({
      formats: s.ALL_FORMATS,
      source: m
    });
    self.postMessage({ type: "debug", step: "init_started" });
    try {
      const c = await o.getPrimaryVideoTrack();
      if (!c || typeof c.canDecode == "function" && !await c.canDecode())
        return o.dispose?.(), null;
      const u = new s.VideoSampleSink(c), f = new OffscreenCanvas(1, 1), l = f.getContext("2d");
      if (!l)
        return o.dispose?.(), null;
      self.postMessage({ type: "debug", step: "init_complete" });
      const a = {
        input: o,
        sink: u,
        canvas: f,
        ctx: l,
        sampleIterator: null,
        currentSample: null,
        nextSample: null,
        iteratorDone: !1,
        lastRequestedTimestamp: null,
        cachedVideoFrame: null,
        cachedVideoFrameSample: null,
        drawLock: null
      };
      return T.set(e, a), a;
    } catch (c) {
      throw o.dispose?.(), c;
    }
  })();
  g.set(e, i);
  try {
    return await i;
  } finally {
    g.delete(e);
  }
}
function w(e) {
  if (!(!e || typeof e.close != "function"))
    try {
      e.close();
    } catch {
    }
}
function v(e) {
  if (e.cachedVideoFrame) {
    try {
      e.cachedVideoFrame.close();
    } catch {
    }
    e.cachedVideoFrame = null, e.cachedVideoFrameSample = null;
  }
}
function M(e) {
  e.sampleIterator && e.sampleIterator.return?.(), e.sampleIterator = null, e.iteratorDone = !0, e.lastRequestedTimestamp = null, v(e), w(e.currentSample), w(e.nextSample), e.currentSample = null, e.nextSample = null;
}
function S(e, t, n) {
  M(e);
  const i = (n ? A(n, t) : null) ?? Math.max(0, t - 1);
  e.sampleIterator = e.sink.samples(i, 1 / 0), e.iteratorDone = !1, e.lastRequestedTimestamp = null;
}
async function F(e) {
  if (e.nextSample)
    return e.nextSample;
  if (!e.sampleIterator || e.iteratorDone)
    return null;
  const t = await e.sampleIterator.next();
  return t.done ? (e.iteratorDone = !0, null) : (e.nextSample = t.value, e.nextSample);
}
async function E(e, t, n) {
  for (e.sampleIterator ? (e.lastRequestedTimestamp !== null && t + 1e-4 < e.lastRequestedTimestamp || e.lastRequestedTimestamp !== null && t - e.lastRequestedTimestamp > 3) && S(e, t, n) : S(e, t, n), e.lastRequestedTimestamp = t; ; ) {
    const r = await F(e);
    if (!r) break;
    if (r.timestamp <= t + 1e-4) {
      v(e), w(e.currentSample), e.currentSample = r, e.nextSample = null;
      continue;
    }
    !e.currentSample && r.timestamp - t <= 0.05 && (e.currentSample = r, e.nextSample = null);
    break;
  }
}
function I(e) {
  const t = e.currentSample;
  if (!t)
    return null;
  let n = e.cachedVideoFrame;
  if (!n || e.cachedVideoFrameSample !== t) {
    if (v(e), typeof t.toVideoFrame == "function" ? n = t.toVideoFrame() : n = t.frame ?? null, !n)
      return null;
    e.cachedVideoFrame = n, e.cachedVideoFrameSample = t;
  }
  return n;
}
function k(e) {
  const t = I(e);
  if (!t)
    return null;
  const n = t.visibleRect, r = n?.width && n.width > 0 ? n.width : t.displayWidth, i = n?.height && n.height > 0 ? n.height : t.displayHeight;
  return r < 1 || i < 1 ? null : (e.canvas.width = r, e.canvas.height = i, n && Number.isFinite(n.width) && Number.isFinite(n.height) && n.width > 0 && n.height > 0 ? e.ctx.drawImage(
    t,
    n.x,
    n.y,
    n.width,
    n.height,
    0,
    0,
    r,
    i
  ) : e.ctx.drawImage(t, 0, 0, r, i), e.canvas.transferToImageBitmap());
}
async function O(e, t, n, r) {
  const i = n instanceof Error ? n.message : String(n);
  if (!/key frame|configure\(\)|flush\(\)|InvalidStateError|decode/i.test(i))
    return !1;
  try {
    return S(e, t, r), await E(e, t, r), e.currentSample !== null;
  } catch {
    return !1;
  }
}
async function C(e, t, n) {
  try {
    return await E(e, t, n), k(e);
  } catch (r) {
    return await O(e, t, r, n) ? k(e) : null;
  }
}
async function V(e, t, n) {
  const r = await _(e, n);
  if (!r) return null;
  const s = (r.drawLock ?? Promise.resolve()).then(() => C(r, t, e));
  return r.drawLock = s.then(() => {
  }, () => {
  }), s;
}
async function D(e, t, n) {
  const r = /* @__PURE__ */ new Map(), i = await _(e, n);
  if (!i || t.length === 0) return r;
  const m = (i.drawLock ?? Promise.resolve()).then(async () => {
    try {
      const o = i.sink.samplesAtTimestamps(t);
      let c = 0;
      for await (const u of o) {
        if (!u || c >= t.length) {
          c++;
          continue;
        }
        const f = t[c];
        c++;
        try {
          const l = typeof u.toVideoFrame == "function" ? u.toVideoFrame() : u.frame ?? null;
          if (!l) {
            u.close?.();
            continue;
          }
          const a = l.visibleRect, p = a?.width && a.width > 0 ? a.width : l.displayWidth, h = a?.height && a.height > 0 ? a.height : l.displayHeight;
          if (p < 1 || h < 1) {
            l.close(), u.close?.();
            continue;
          }
          i.canvas.width = p, i.canvas.height = h, a && a.width > 0 && a.height > 0 ? i.ctx.drawImage(
            l,
            a.x,
            a.y,
            a.width,
            a.height,
            0,
            0,
            p,
            h
          ) : i.ctx.drawImage(l, 0, 0, p, h), l.close();
          const b = i.canvas.transferToImageBitmap();
          r.set(f, b);
        } finally {
          u.close?.();
        }
      }
    } catch {
    }
    return r;
  });
  return i.drawLock = m.then(() => {
  }, () => {
  }), m;
}
self.postMessage({ type: "ready" });
self.onmessage = async (e) => {
  const t = e.data;
  if (t.type === "warmup") {
    R();
    return;
  }
  if (t.type === "set_keyframes") {
    t.src && Array.isArray(t.keyframeTimestamps) && d.set(t.src, t.keyframeTimestamps);
    return;
  }
  if (t.type === "batch_preseek") {
    t.keyframeTimestamps && !d.has(t.src) && d.set(t.src, t.keyframeTimestamps);
    try {
      const n = [...t.timestamps].sort((m, o) => m - o), r = await D(t.src, n, t.blob), i = [], s = [];
      for (const [m, o] of r)
        s.push({ timestamp: m, bitmap: o }), i.push(o);
      self.postMessage(
        { type: "batch_preseek_done", id: t.id, success: !0, entries: s },
        { transfer: i }
      );
    } catch (n) {
      self.postMessage({
        type: "batch_preseek_done",
        id: t.id,
        success: !1,
        error: n instanceof Error ? n.message : String(n)
      });
    }
    return;
  }
  if (t.type === "preseek") {
    t.keyframeTimestamps && !d.has(t.src) && d.set(t.src, t.keyframeTimestamps);
    try {
      const n = await V(t.src, t.timestamp, t.blob);
      n ? self.postMessage(
        { type: "preseek_done", id: t.id, success: !0, timestamp: t.timestamp, bitmap: n },
        { transfer: [n] }
      ) : self.postMessage({ type: "preseek_done", id: t.id, success: !1, timestamp: t.timestamp });
    } catch (n) {
      self.postMessage({
        type: "preseek_done",
        id: t.id,
        success: !1,
        timestamp: t.timestamp,
        error: n instanceof Error ? n.message : String(n)
      });
    }
  }
};
