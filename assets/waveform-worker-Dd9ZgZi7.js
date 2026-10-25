const W = /(^|[^a-z0-9])(ac-?3|ec-?3|e-?ac-?3|eac3)([^a-z0-9]|$)/i;
let P = null;
function X(p) {
  if (!p) return !1;
  const a = p.toLowerCase().trim();
  return W.test(a) ? !0 : a.replace(/[_-]+/g, " ").includes("dolby digital");
}
async function Y() {
  return P || (P = (async () => {
    const { registerAc3Decoder: p } = await import("./mediabunny-ac3-CK5ihZ8S.js");
    try {
      p();
    } catch (a) {
      const e = a instanceof Error ? a.message : String(a);
      if (!/already registered/i.test(e))
        throw a;
    }
  })()), P;
}
const T = /* @__PURE__ */ new Map();
async function Z() {
  return import("./index-CpHD-z6s.js");
}
self.onmessage = async (p) => {
  const { type: a } = p.data;
  if (a === "abort") {
    const l = T.get(p.data.requestId);
    l && (l.aborted = !0);
    return;
  }
  if (a !== "generate") return;
  const { requestId: e, blobUrl: $, samplesPerSecond: r, binDurationSec: F = 30 } = p.data, y = { aborted: !1 };
  T.set(e, y);
  let z = null;
  try {
    self.postMessage({ type: "progress", requestId: e, progress: 5 });
    const l = await Z(), { Input: C, UrlSource: j, AudioSampleSink: B, ALL_FORMATS: G } = l;
    if (y.aborted) throw new Error("Aborted");
    const D = new C({
      source: new j($),
      formats: G
    });
    z = D;
    const u = await D.getPrimaryAudioTrack();
    if (!u) {
      const t = await D.computeDuration(), n = typeof t == "number" && Number.isFinite(t) && t > 0 ? t : 1;
      if (y.aborted)
        throw new Error("Aborted");
      const c = !1, o = 1, R = Math.max(1, Math.ceil(n * r)), w = new Float32Array(R), E = Math.max(1, Math.round(r * F));
      self.postMessage({ type: "progress", requestId: e, progress: 20 }), self.postMessage({
        type: "init",
        requestId: e,
        duration: n,
        channels: o,
        sampleRate: r,
        totalSamples: w.length,
        stereo: c
      });
      let d = 0;
      for (; d < w.length; ) {
        const h = Math.min(d + E, w.length), I = w.slice(d, h);
        self.postMessage(
          {
            type: "chunk",
            requestId: e,
            startIndex: d,
            peaks: I
          },
          { transfer: [I.buffer] }
        ), d = h;
      }
      self.postMessage({ type: "progress", requestId: e, progress: 95 }), self.postMessage({
        type: "complete",
        requestId: e,
        maxPeak: 0
      });
      return;
    }
    const H = typeof u.codec == "string" ? u.codec : void 0;
    X(H) && await Y(), self.postMessage({ type: "progress", requestId: e, progress: 10 });
    const N = u.sampleRate || 0, J = N > 0 ? N : 48e3, _ = u.numberOfChannels || 1, O = await u.computeDuration();
    if (y.aborted) throw new Error("Aborted");
    const K = new B(u), x = _ >= 2, q = Math.max(1, Math.ceil(O * r)), S = q * (x ? 2 : 1), m = new Float32Array(S), L = Math.max(1, Math.round(r * F * (x ? 2 : 1)));
    let A = 0, b = 0, f = 0;
    self.postMessage({ type: "progress", requestId: e, progress: 20 }), self.postMessage({
      type: "init",
      requestId: e,
      duration: O,
      channels: _,
      sampleRate: r,
      totalSamples: S,
      stereo: x
    });
    const U = (t, n) => {
      if (n <= t) return;
      const c = m.slice(t, n);
      self.postMessage(
        {
          type: "chunk",
          requestId: e,
          startIndex: t,
          peaks: c
        },
        { transfer: [c.buffer] }
      );
    };
    for await (const t of K.samples())
      try {
        if (y.aborted)
          throw new Error("Aborted");
        const n = t.numberOfFrames, c = Math.max(1, t.numberOfChannels), o = t, R = o.sampleRate && o.sampleRate > 0 ? o.sampleRate : J, w = o.duration && o.duration > 0 ? o.duration : n / R, E = Number.isFinite(o.timestamp) ? Math.max(0, o.timestamp) : A, d = Math.max(0, Math.floor(E * r)), h = [];
        for (let s = 0; s < c; s++) {
          const g = new Float32Array(n);
          t.copyTo(g, { planeIndex: s, format: "f32-planar" }), h.push(g);
        }
        for (let s = 0; s < n; s++) {
          const g = Math.min(
            q - 1,
            d + Math.floor(s * r / R)
          );
          if (x) {
            const M = Math.abs(h[0][s] ?? 0), i = Math.abs(h[Math.min(1, c - 1)][s] ?? 0), k = g * 2, v = g * 2 + 1;
            M > m[k] && (m[k] = M, M > f && (f = M)), i > m[v] && (m[v] = i, i > f && (f = i));
          } else {
            let M = 0;
            for (let k = 0; k < c; k++)
              M += h[k][s] ?? 0;
            const i = Math.abs(M / c);
            i > m[g] && (m[g] = i, i > f && (f = i));
          }
        }
        A = Math.max(
          A,
          E + w
        );
        const I = Math.min(
          S,
          Math.floor(A * r) * (x ? 2 : 1)
        );
        for (; b + L <= I; ) {
          const s = b + L;
          U(b, s), b = s;
        }
        const V = 20 + Math.min(
          60,
          Math.round(A / Math.max(O, 1e-3) * 60)
        );
        self.postMessage({ type: "progress", requestId: e, progress: V });
      } finally {
        t.close();
      }
    if (y.aborted) throw new Error("Aborted");
    self.postMessage({ type: "progress", requestId: e, progress: 80 }), b < S && U(b, S), self.postMessage({ type: "progress", requestId: e, progress: 90 }), self.postMessage({ type: "progress", requestId: e, progress: 95 });
    const Q = {
      type: "complete",
      requestId: e,
      maxPeak: f
    };
    self.postMessage(Q);
  } catch (l) {
    const C = l instanceof Error ? l.message : "Unknown error";
    C !== "Aborted" && self.postMessage({ type: "error", requestId: e, error: C });
  } finally {
    z?.dispose?.(), T.delete(e);
  }
};
