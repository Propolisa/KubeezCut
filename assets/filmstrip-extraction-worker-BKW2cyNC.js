async function ne(a, n) {
  let t;
  try {
    await a.write(n), await a.close();
  } catch (r) {
    throw t = r, r;
  } finally {
    if (t)
      try {
        await a.abort(t);
      } catch {
      }
  }
}
const re = "filmstrips", oe = "image/jpeg", ie = 0.7, ce = "jpg", M = 1, T = /* @__PURE__ */ new Map();
function le(a) {
  if (!a || typeof a != "object") return "unknown";
  const n = a;
  return typeof n.requestId == "string" ? n.requestId : "unknown";
}
const de = () => import("./index-BvfmbwGv.js");
async function fe(a) {
  return (await (await navigator.storage.getDirectory()).getDirectoryHandle(re, { create: !0 })).getDirectoryHandle(a, { create: !0 });
}
async function pe(a, n, t) {
  const p = await (await a.getFileHandle(`${n}.${ce}`, { create: !0 })).createWritable();
  await ne(p, t);
}
async function me(a, n) {
  const {
    requestId: t,
    mediaId: r,
    blobUrl: p,
    duration: H,
    width: O,
    height: U,
    skipIndices: j,
    priorityIndices: G,
    targetIndices: v,
    startIndex: $,
    endIndex: V,
    totalFrames: W,
    maxParallelSaves: X
  } = a, C = Math.ceil(H * M), g = $ ?? 0, w = V ?? C, L = W ?? C, h = new Set(j || []), S = new Set(G || []), l = [], y = Array.isArray(v) && v.length > 0, A = y ? v.filter((e) => e >= g && e < w).sort((e, s) => e - s) : [], z = new Set(A), q = y ? A.reduce((e, s) => h.has(s) ? e + 1 : e, 0) : Array.from(h).reduce(
    (e, s) => s >= g && s < w ? e + 1 : e,
    0
  );
  for (const e of S) {
    const s = e >= g && e < w, m = !y || z.has(e);
    s && m && !h.has(e) && l.push({ index: e, timestamp: e / M });
  }
  if (y)
    for (const e of A)
      !h.has(e) && !S.has(e) && l.push({ index: e, timestamp: e / M });
  else
    for (let e = g; e < w; e++)
      !h.has(e) && !S.has(e) && l.push({ index: e, timestamp: e / M });
  if (l.length === 0) {
    self.postMessage({
      type: "complete",
      requestId: t,
      frameCount: q
    });
    return;
  }
  const N = await fe(r), { Input: Q, UrlSource: Y, CanvasSink: J, ALL_FORMATS: K } = await de();
  let E = null, F = null;
  try {
    E = new Q({
      source: new Y(p),
      formats: K
    });
    const e = await E.getPrimaryVideoTrack();
    if (!e)
      throw new Error("No video track found");
    F = new J(e, {
      width: O,
      height: U,
      fit: "cover",
      poolSize: 4
      // Reduced for 1fps extraction
    });
    let s = q, m = 0, u = [];
    async function* Z() {
      for (const o of l) {
        if (n.aborted) return;
        yield o.timestamp;
      }
    }
    const d = [], ee = Math.max(1, Math.min(6, X ?? 4));
    let I = null, x = [];
    const P = async () => {
      if (!I) return;
      const { blob: o, frameIndex: i } = await I;
      I = null;
      const f = pe(N, i, o).then(() => {
        const c = d.indexOf(f);
        c > -1 && d.splice(c, 1), u.push({ index: i, blob: o });
      });
      d.push(f), d.length >= ee && await Promise.race(d);
    };
    for await (const o of F.canvasesAtTimestamps(Z())) {
      if (n.aborted) break;
      const i = l[m];
      if (!i) break;
      if (!o) {
        m++;
        continue;
      }
      const f = o.canvas, c = i.index, [te, b] = await Promise.all([
        createImageBitmap(f),
        createImageBitmap(f)
      ]);
      x.push({ index: c, bitmap: te }), await P();
      const _ = new OffscreenCanvas(b.width, b.height);
      if (_.getContext("2d").drawImage(b, 0, 0), b.close(), I = _.convertToBlob({
        type: oe,
        quality: ie
      }).then((R) => ({ blob: R, frameIndex: c })), s++, m++, s <= 3 || s % 10 === 0 || x.length > 0) {
        const R = Math.round(s / L * 100), B = u;
        u = [];
        const ae = B.map((k) => k.index), D = x;
        x = [];
        const se = D.map((k) => k.bitmap);
        self.postMessage({
          type: "progress",
          requestId: t,
          frameIndex: c,
          frameCount: s,
          progress: Math.min(R, 99),
          savedFrames: B,
          savedIndices: ae,
          bitmapFrames: D
        }, { transfer: se });
      }
    }
    if (await P(), d.length > 0 && await Promise.all(d), u.length > 0) {
      const o = Math.round(s / L * 100), i = u, f = i.map((c) => c.index);
      self.postMessage({
        type: "progress",
        requestId: t,
        frameIndex: l[Math.max(0, m - 1)]?.index ?? g,
        frameCount: s,
        progress: Math.min(o, 99),
        savedFrames: i,
        savedIndices: f
      }), u = [];
    }
    n.aborted || self.postMessage({
      type: "complete",
      requestId: t,
      frameCount: s
    });
  } finally {
    F?.dispose?.(), E?.dispose();
  }
}
self.onmessage = async (a) => {
  const { type: n } = a.data;
  try {
    switch (n) {
      case "extract": {
        const t = a.data, { requestId: r } = t, p = { aborted: !1 };
        T.set(r, p);
        try {
          await me(t, p);
        } finally {
          T.delete(r);
        }
        break;
      }
      case "abort": {
        const { requestId: t } = a.data, r = T.get(t);
        r && (r.aborted = !0);
        break;
      }
      default:
        throw new Error(`Unknown message type: ${n}`);
    }
  } catch (t) {
    const r = le(a.data);
    self.postMessage({
      type: "error",
      requestId: r,
      error: t instanceof Error ? t.message : String(t)
    });
  }
};
