async function Xo(r, e) {
  let t;
  try {
    await r.write(e), await r.close();
  } catch (i) {
    throw t = i, i;
  } finally {
    if (t)
      try {
        await r.abort(t);
      } catch {
      }
  }
}
const Yo = "filmstrips", Zo = "image/jpeg", Jo = 0.7, ec = "jpg", Mr = 1, Si = /* @__PURE__ */ new Map();
function tc(r) {
  if (!r || typeof r != "object") return "unknown";
  const e = r;
  return typeof e.requestId == "string" ? e.requestId : "unknown";
}
const rc = () => Promise.resolve().then(function() {
  return Sh;
});
async function ic(r) {
  return (await (await navigator.storage.getDirectory()).getDirectoryHandle(Yo, { create: !0 })).getDirectoryHandle(r, { create: !0 });
}
async function sc(r, e, t) {
  const s = await (await r.getFileHandle(`${e}.${ec}`, { create: !0 })).createWritable();
  await Xo(s, t);
}
async function nc(r, e) {
  const {
    requestId: t,
    mediaId: i,
    blobUrl: s,
    duration: n,
    width: a,
    height: o,
    skipIndices: c,
    priorityIndices: l,
    targetIndices: d,
    startIndex: u,
    endIndex: h,
    totalFrames: m,
    maxParallelSaves: g
  } = r, f = Math.ceil(n * Mr), w = u ?? 0, k = h ?? f, b = m ?? f, T = new Set(c || []), S = new Set(l || []), x = [], P = Array.isArray(d) && d.length > 0, _ = P ? d.filter((B) => B >= w && B < k).sort((B, H) => B - H) : [], C = new Set(_), I = P ? _.reduce((B, H) => T.has(H) ? B + 1 : B, 0) : Array.from(T).reduce(
    (B, H) => H >= w && H < k ? B + 1 : B,
    0
  );
  for (const B of S) {
    const H = B >= w && B < k, Y = !P || C.has(B);
    H && Y && !T.has(B) && x.push({ index: B, timestamp: B / Mr });
  }
  if (P)
    for (const B of _)
      !T.has(B) && !S.has(B) && x.push({ index: B, timestamp: B / Mr });
  else
    for (let B = w; B < k; B++)
      !T.has(B) && !S.has(B) && x.push({ index: B, timestamp: B / Mr });
  if (x.length === 0) {
    self.postMessage({
      type: "complete",
      requestId: t,
      frameCount: I
    });
    return;
  }
  const U = await ic(i), { Input: D, UrlSource: F, CanvasSink: R, ALL_FORMATS: q } = await rc();
  let j = null, Q = null;
  try {
    j = new D({
      source: new F(s),
      formats: q
    });
    const B = await j.getPrimaryVideoTrack();
    if (!B)
      throw new Error("No video track found");
    Q = new R(B, {
      width: a,
      height: o,
      fit: "cover",
      poolSize: 4
      // Reduced for 1fps extraction
    });
    let H = I, Y = 0, de = [];
    async function* Me() {
      for (const qe of x) {
        if (e.aborted) return;
        yield qe.timestamp;
      }
    }
    const ze = [], Ot = Math.max(1, Math.min(6, g ?? 4));
    let Fr = null, Br = [];
    const on = async () => {
      if (!Fr) return;
      const { blob: qe, frameIndex: tt } = await Fr;
      Fr = null;
      const wt = sc(U, tt, qe).then(() => {
        const rt = ze.indexOf(wt);
        rt > -1 && ze.splice(rt, 1), de.push({ index: tt, blob: qe });
      });
      ze.push(wt), ze.length >= Ot && await Promise.race(ze);
    };
    for await (const qe of Q.canvasesAtTimestamps(Me())) {
      if (e.aborted) break;
      const tt = x[Y];
      if (!tt) break;
      if (!qe) {
        Y++;
        continue;
      }
      const wt = qe.canvas, rt = tt.index, [Qo, Rr] = await Promise.all([
        createImageBitmap(wt),
        createImageBitmap(wt)
      ]);
      Br.push({ index: rt, bitmap: Qo }), await on();
      const cn = new OffscreenCanvas(Rr.width, Rr.height);
      if (cn.getContext("2d").drawImage(Rr, 0, 0), Rr.close(), Fr = cn.convertToBlob({
        type: Zo,
        quality: Jo
      }).then((yi) => ({ blob: yi, frameIndex: rt })), H++, Y++, H <= 3 || H % 10 === 0 || Br.length > 0) {
        const yi = Math.round(H / b * 100), ln = de;
        de = [];
        const Ko = ln.map((Ti) => Ti.index), dn = Br;
        Br = [];
        const Go = dn.map((Ti) => Ti.bitmap);
        self.postMessage({
          type: "progress",
          requestId: t,
          frameIndex: rt,
          frameCount: H,
          progress: Math.min(yi, 99),
          savedFrames: ln,
          savedIndices: Ko,
          bitmapFrames: dn
        }, { transfer: Go });
      }
    }
    if (await on(), ze.length > 0 && await Promise.all(ze), de.length > 0) {
      const qe = Math.round(H / b * 100), tt = de, wt = tt.map((rt) => rt.index);
      self.postMessage({
        type: "progress",
        requestId: t,
        frameIndex: x[Math.max(0, Y - 1)]?.index ?? w,
        frameCount: H,
        progress: Math.min(qe, 99),
        savedFrames: tt,
        savedIndices: wt
      }), de = [];
    }
    e.aborted || self.postMessage({
      type: "complete",
      requestId: t,
      frameCount: H
    });
  } finally {
    Q?.dispose?.(), j?.dispose();
  }
}
self.onmessage = async (r) => {
  const { type: e } = r.data;
  try {
    switch (e) {
      case "extract": {
        const t = r.data, { requestId: i } = t, s = { aborted: !1 };
        Si.set(i, s);
        try {
          await nc(t, s);
        } finally {
          Si.delete(i);
        }
        break;
      }
      case "abort": {
        const { requestId: t } = r.data, i = Si.get(t);
        i && (i.aborted = !0);
        break;
      }
      default:
        throw new Error(`Unknown message type: ${e}`);
    }
  } catch (t) {
    const i = tc(r.data);
    self.postMessage({
      type: "error",
      requestId: i,
      error: t instanceof Error ? t.message : String(t)
    });
  }
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
function p(r) {
  if (!r)
    throw new Error("Assertion failed.");
}
const ti = (r) => {
  const e = (r % 360 + 360) % 360;
  if (e === 0 || e === 90 || e === 180 || e === 270)
    return e;
  throw new Error(`Invalid rotation ${r}.`);
}, ee = (r) => r && r[r.length - 1], Gt = (r) => r >= 0 && r < 2 ** 32, v = (r) => {
  let e = 0;
  for (; r.readBits(1) === 0 && e < 32; )
    e++;
  if (e >= 32)
    throw new Error("Invalid exponential-Golomb code.");
  return (1 << e) - 1 + r.readBits(e);
}, Xe = (r) => {
  const e = v(r);
  return (e & 1) === 0 ? -(e >> 1) : e + 1 >> 1;
}, ac = (r, e, t, i) => {
  for (let s = e; s < t; s++) {
    const n = Math.floor(s / 8);
    let a = r[n];
    const o = 7 - (s & 7);
    a &= ~(1 << o), a |= (i & 1 << t - s - 1) >> t - s - 1 << o, r[n] = a;
  }
}, Z = (r) => r.constructor === Uint8Array ? r : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : new Uint8Array(r), L = (r) => r.constructor === DataView ? r : ArrayBuffer.isView(r) ? new DataView(r.buffer, r.byteOffset, r.byteLength) : new DataView(r), Ee = /* @__PURE__ */ new TextDecoder(), J = /* @__PURE__ */ new TextEncoder(), Vt = (r) => {
  for (let e = 0; e < r.length; e++)
    if (r.charCodeAt(e) > 255)
      return !1;
  return !0;
}, Ts = (r) => Object.fromEntries(Object.entries(r).map(([e, t]) => [t, e])), Bt = {
  bt709: 1,
  // ITU-R BT.709
  bt470bg: 5,
  // ITU-R BT.470BG
  smpte170m: 6,
  // ITU-R BT.601 525 - SMPTE 170M
  bt2020: 9,
  // ITU-R BT.202
  smpte432: 12
  // SMPTE EG 432-1
}, Wr = /* @__PURE__ */ Ts(Bt), Rt = {
  bt709: 1,
  // ITU-R BT.709
  smpte170m: 6,
  // SMPTE 170M
  linear: 8,
  // Linear transfer characteristics
  "iec61966-2-1": 13,
  // IEC 61966-2-1
  pq: 16,
  // Rec. ITU-R BT.2100-2 perceptual quantization (PQ) system
  hlg: 18
  // Rec. ITU-R BT.2100-2 hybrid loggamma (HLG) system
}, Lr = /* @__PURE__ */ Ts(Rt), Mt = {
  rgb: 0,
  // Identity
  bt709: 1,
  // ITU-R BT.709
  bt470bg: 5,
  // ITU-R BT.470BG
  smpte170m: 6,
  // SMPTE 170M
  "bt2020-ncl": 9
  // ITU-R BT.2020-2 (non-constant luminance)
}, Hr = /* @__PURE__ */ Ts(Mt), Yn = (r) => !!r && !!r.primaries && !!r.transfer && !!r.matrix && r.fullRange !== void 0, ri = (r) => r instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && r instanceof SharedArrayBuffer || ArrayBuffer.isView(r);
class Jt {
  constructor() {
    this.currentPromise = Promise.resolve(), this.pending = 0;
  }
  async acquire() {
    let e;
    const t = new Promise((s) => {
      let n = !1;
      e = () => {
        n || (s(), this.pending--, n = !0);
      };
    }), i = this.currentPromise;
    return this.currentPromise = t, this.pending++, await i, e;
  }
}
const un = (r) => [...r].map((e) => e.toString(16).padStart(2, "0")).join(""), hn = (r) => (r = r >> 1 & 1431655765 | (r & 1431655765) << 1, r = r >> 2 & 858993459 | (r & 858993459) << 2, r = r >> 4 & 252645135 | (r & 252645135) << 4, r = r >> 8 & 16711935 | (r & 16711935) << 8, r = r >> 16 & 65535 | (r & 65535) << 16, r >>> 0), vr = (r, e, t) => {
  let i = 0, s = r.length - 1, n = -1;
  for (; i <= s; ) {
    const a = i + s >> 1, o = t(r[a]);
    o === e ? (n = a, s = a - 1) : o < e ? i = a + 1 : s = a - 1;
  }
  return n;
}, G = (r, e, t) => {
  let i = 0, s = r.length - 1, n = -1;
  for (; i <= s; ) {
    const a = i + (s - i + 1) / 2 | 0;
    t(r[a]) <= e ? (n = a, i = a + 1) : s = a - 1;
  }
  return n;
}, fn = (r, e, t) => {
  const i = G(r, t(e), t);
  r.splice(i + 1, 0, e);
}, re = () => {
  let r, e;
  return { promise: new Promise((i, s) => {
    r = i, e = s;
  }), resolve: r, reject: e };
}, Zn = (r, e) => {
  for (let t = r.length - 1; t >= 0; t--)
    if (e(r[t]))
      return r[t];
}, Ss = (r, e) => {
  for (let t = r.length - 1; t >= 0; t--)
    if (e(r[t]))
      return t;
  return -1;
}, oc = async function* (r) {
  Symbol.iterator in r ? yield* r[Symbol.iterator]() : yield* r[Symbol.asyncIterator]();
}, cc = (r) => {
  if (!(Symbol.iterator in r) && !(Symbol.asyncIterator in r))
    throw new TypeError("Argument must be an iterable or async iterable.");
}, ge = (r) => {
  throw new Error(`Unexpected value: ${r}`);
}, ii = (r, e, t) => {
  const i = r.getUint8(e), s = r.getUint8(e + 1), n = r.getUint8(e + 2);
  return t ? i | s << 8 | n << 16 : i << 16 | s << 8 | n;
}, lc = (r, e, t) => ii(r, e, t) << 8 >> 8, si = (r, e, t, i) => {
  t = t >>> 0, t = t & 16777215, i ? (r.setUint8(e, t & 255), r.setUint8(e + 1, t >>> 8 & 255), r.setUint8(e + 2, t >>> 16 & 255)) : (r.setUint8(e, t >>> 16 & 255), r.setUint8(e + 1, t >>> 8 & 255), r.setUint8(e + 2, t & 255));
}, dc = (r, e, t, i) => {
  t = ce(t, -8388608, 8388607), t < 0 && (t = t + 16777216 & 16777215), si(r, e, t, i);
}, uc = (r, e, t, i) => {
  r.setUint32(e + 0, t, !0), r.setInt32(e + 4, Math.floor(t / 2 ** 32), !0);
}, qr = (r, e) => ({
  async next() {
    const t = await r.next();
    return t.done ? { value: void 0, done: !0 } : { value: e(t.value), done: !1 };
  },
  return() {
    return r.return();
  },
  throw(t) {
    return r.throw(t);
  },
  [Symbol.asyncIterator]() {
    return this;
  }
}), ce = (r, e, t) => Math.max(e, Math.min(t, r)), ke = "und", Tr = (r) => {
  const e = Math.round(r);
  return Math.abs(r / e - 1) < 10 * Number.EPSILON ? e : r;
}, Qi = (r, e) => Math.round(r / e) * e, xi = (r, e) => Math.floor(r / e) * e, hc = (r) => {
  let e = 0;
  for (; r; )
    e++, r >>= 1;
  return e;
}, fc = /^[a-z]{3}$/, Sr = (r) => fc.test(r), ct = 1e6 * (1 + Number.EPSILON), mn = (r, e) => {
  const t = { ...r, ...e };
  if (r.headers || e.headers) {
    const i = r.headers ? pn(r.headers) : {}, s = e.headers ? pn(e.headers) : {}, n = { ...i };
    Object.entries(s).forEach(([a, o]) => {
      const c = Object.keys(n).find((l) => l.toLowerCase() === a.toLowerCase());
      c && delete n[c], n[a] = o;
    }), t.headers = n;
  }
  return t;
}, pn = (r) => {
  if (r instanceof Headers) {
    const e = {};
    return r.forEach((t, i) => {
      e[i] = t;
    }), e;
  }
  if (Array.isArray(r)) {
    const e = {};
    return r.forEach(([t, i]) => {
      e[t] = i;
    }), e;
  }
  return r;
}, gn = async (r, e, t, i, s) => {
  let n = 0;
  for (; ; )
    try {
      return await r(e, t);
    } catch (a) {
      if (s())
        throw a;
      n++;
      const o = i(n, a, e);
      if (o === null)
        throw a;
      if (console.error("Retrying failed fetch. Error:", a), !Number.isFinite(o) || o < 0)
        throw new TypeError("Retry delay must be a non-negative finite number.");
      if (o > 0 && await new Promise((c) => setTimeout(c, 1e3 * o)), s())
        throw a;
    }
}, mc = (r, e) => {
  const t = r < 0 ? -1 : 1;
  r = Math.abs(r);
  let i = 0, s = 1, n = 1, a = 0, o = r;
  for (; ; ) {
    const c = Math.floor(o), l = c * n + i, d = c * a + s;
    if (d > e)
      return {
        numerator: t * n,
        denominator: a
      };
    if (i = n, s = a, n = l, a = d, o = 1 / (o - c), !isFinite(o))
      break;
  }
  return {
    numerator: t * n,
    denominator: a
  };
};
class ni {
  constructor() {
    this.currentPromise = Promise.resolve();
  }
  call(e) {
    return this.currentPromise = this.currentPromise.then(e);
  }
}
let Pi = null;
const pr = () => Pi !== null ? Pi : Pi = !!(typeof navigator < "u" && (navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
let Ci = null;
const Xt = () => Ci !== null ? Ci : Ci = typeof navigator < "u" && navigator.userAgent?.includes("Firefox");
let _i = null;
const Ki = () => _i !== null ? _i : _i = !!(typeof navigator < "u" && (navigator.vendor?.includes("Google Inc") || /Chrome/.test(navigator.userAgent)));
let Ii = null;
const pc = () => {
  if (Ii !== null)
    return Ii;
  if (typeof navigator > "u")
    return null;
  const r = /\bChrome\/(\d+)/.exec(navigator.userAgent);
  return r ? Ii = Number(r[1]) : null;
}, Wt = (r, e) => r !== -1 ? r : e, Gi = (r, e, t, i) => r <= i && t <= e, er = function* (r) {
  for (const e in r) {
    const t = r[e];
    t !== void 0 && (yield { key: e, value: t });
  }
}, gc = (r) => {
  switch (r.toLowerCase()) {
    case "image/jpeg":
    case "image/jpg":
      return ".jpg";
    case "image/png":
      return ".png";
    case "image/gif":
      return ".gif";
    case "image/webp":
      return ".webp";
    case "image/bmp":
      return ".bmp";
    case "image/svg+xml":
      return ".svg";
    case "image/tiff":
      return ".tiff";
    case "image/avif":
      return ".avif";
    case "image/x-icon":
    case "image/vnd.microsoft.icon":
      return ".ico";
    default:
      return null;
  }
}, wc = (r) => {
  const e = atob(r), t = new Uint8Array(e.length);
  for (let i = 0; i < e.length; i++)
    t[i] = e.charCodeAt(i);
  return t;
}, bc = (r) => {
  let e = "";
  for (let t = 0; t < r.length; t++)
    e += String.fromCharCode(r[t]);
  return btoa(e);
}, kc = (r, e) => {
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}, Jn = () => {
  Symbol.dispose ??= Symbol("Symbol.dispose");
}, tr = (r) => typeof r == "number" && !Number.isNaN(r), ai = (r) => {
  p(r.den !== 0);
  let e = Math.abs(r.num), t = Math.abs(r.den);
  for (; t !== 0; ) {
    const s = e % t;
    e = t, t = s;
  }
  const i = e || 1;
  return {
    num: r.num / i,
    den: r.den / i
  };
}, wn = (r, e) => {
  if (typeof r != "object" || !r)
    throw new TypeError(`${e} must be an object.`);
  if (!Number.isInteger(r.left) || r.left < 0)
    throw new TypeError(`${e}.left must be a non-negative integer.`);
  if (!Number.isInteger(r.top) || r.top < 0)
    throw new TypeError(`${e}.top must be a non-negative integer.`);
  if (!Number.isInteger(r.width) || r.width < 0)
    throw new TypeError(`${e}.width must be a non-negative integer.`);
  if (!Number.isInteger(r.height) || r.height < 0)
    throw new TypeError(`${e}.height must be a non-negative integer.`);
};
let cr, yc = 1;
const bn = /* @__PURE__ */ new Map(), xs = /* @__PURE__ */ new Map(), ea = () => typeof window > "u", Tc = () => {
  const r = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
  self.onmessage = (t) => {
    const i = t.data;
    switch (i.type) {
      case "set-timeout":
        {
          const s = setTimeout(() => {
            r.delete(i.timerId), self.postMessage({ type: "fire", timerId: i.timerId });
          }, i.delay);
          r.set(i.timerId, s);
        }
        break;
      case "set-interval":
        {
          const s = setInterval(() => {
            self.postMessage({ type: "fire", timerId: i.timerId });
          }, i.delay);
          e.set(i.timerId, s);
        }
        break;
      case "clear-timeout":
        {
          const s = r.get(i.timerId);
          s !== void 0 && (clearTimeout(s), r.delete(i.timerId));
        }
        break;
      case "clear-interval":
        {
          const s = e.get(i.timerId);
          s !== void 0 && (clearInterval(s), e.delete(i.timerId));
        }
        break;
    }
  };
}, ta = () => {
  if (cr)
    return cr;
  const r = `(${Tc.toString()})();`, e = URL.createObjectURL(new Blob([r], { type: "text/javascript" }));
  return cr = new Worker(e), URL.revokeObjectURL(e), cr.onmessage = (t) => {
    const i = t.data, s = bn.get(i.timerId);
    if (s) {
      bn.delete(i.timerId), s();
      return;
    }
    const n = xs.get(i.timerId);
    n && n();
  }, cr;
}, Sc = (r, e) => {
  if (ea())
    return { id: setInterval(r, e) };
  const t = yc++;
  return xs.set(t, () => {
    r();
  }), ta().postMessage({
    type: "set-interval",
    timerId: t,
    delay: e
  }), { id: t };
}, xc = (r) => {
  if (ea()) {
    clearInterval(r.id);
    return;
  }
  p(typeof r.id == "number"), xs.delete(r.id), ta().postMessage({
    type: "clear-interval",
    timerId: r.id
  });
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class It {
  /** Creates a new {@link RichImageData}. */
  constructor(e, t) {
    if (this.data = e, this.mimeType = t, !(e instanceof Uint8Array))
      throw new TypeError("data must be a Uint8Array.");
    if (typeof t != "string")
      throw new TypeError("mimeType must be a string.");
  }
}
class oi {
  /** Creates a new {@link AttachedFile}. */
  constructor(e, t, i, s) {
    if (this.data = e, this.mimeType = t, this.name = i, this.description = s, !(e instanceof Uint8Array))
      throw new TypeError("data must be a Uint8Array.");
    if (t !== void 0 && typeof t != "string")
      throw new TypeError("mimeType, when provided, must be a string.");
    if (i !== void 0 && typeof i != "string")
      throw new TypeError("name, when provided, must be a string.");
    if (s !== void 0 && typeof s != "string")
      throw new TypeError("description, when provided, must be a string.");
  }
}
const Xi = (r) => {
  if (!r || typeof r != "object")
    throw new TypeError("tags must be an object.");
  if (r.title !== void 0 && typeof r.title != "string")
    throw new TypeError("tags.title, when provided, must be a string.");
  if (r.description !== void 0 && typeof r.description != "string")
    throw new TypeError("tags.description, when provided, must be a string.");
  if (r.artist !== void 0 && typeof r.artist != "string")
    throw new TypeError("tags.artist, when provided, must be a string.");
  if (r.album !== void 0 && typeof r.album != "string")
    throw new TypeError("tags.album, when provided, must be a string.");
  if (r.albumArtist !== void 0 && typeof r.albumArtist != "string")
    throw new TypeError("tags.albumArtist, when provided, must be a string.");
  if (r.trackNumber !== void 0 && (!Number.isInteger(r.trackNumber) || r.trackNumber <= 0))
    throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
  if (r.tracksTotal !== void 0 && (!Number.isInteger(r.tracksTotal) || r.tracksTotal <= 0))
    throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
  if (r.discNumber !== void 0 && (!Number.isInteger(r.discNumber) || r.discNumber <= 0))
    throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
  if (r.discsTotal !== void 0 && (!Number.isInteger(r.discsTotal) || r.discsTotal <= 0))
    throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
  if (r.genre !== void 0 && typeof r.genre != "string")
    throw new TypeError("tags.genre, when provided, must be a string.");
  if (r.date !== void 0 && (!(r.date instanceof Date) || Number.isNaN(r.date.getTime())))
    throw new TypeError("tags.date, when provided, must be a valid Date.");
  if (r.lyrics !== void 0 && typeof r.lyrics != "string")
    throw new TypeError("tags.lyrics, when provided, must be a string.");
  if (r.images !== void 0) {
    if (!Array.isArray(r.images))
      throw new TypeError("tags.images, when provided, must be an array.");
    for (const e of r.images) {
      if (!e || typeof e != "object")
        throw new TypeError("Each image in tags.images must be an object.");
      if (!(e.data instanceof Uint8Array))
        throw new TypeError("Each image.data must be a Uint8Array.");
      if (typeof e.mimeType != "string")
        throw new TypeError("Each image.mimeType must be a string.");
      if (!["coverFront", "coverBack", "unknown"].includes(e.kind))
        throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.");
    }
  }
  if (r.comment !== void 0 && typeof r.comment != "string")
    throw new TypeError("tags.comment, when provided, must be a string.");
  if (r.raw !== void 0) {
    if (!r.raw || typeof r.raw != "object")
      throw new TypeError("tags.raw, when provided, must be an object.");
    for (const e of Object.values(r.raw))
      if (e !== null && typeof e != "string" && !(e instanceof Uint8Array) && !(e instanceof It) && !(e instanceof oi))
        throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, or null.");
  }
}, xr = (r) => r.title === void 0 && r.description === void 0 && r.artist === void 0 && r.album === void 0 && r.albumArtist === void 0 && r.trackNumber === void 0 && r.tracksTotal === void 0 && r.discNumber === void 0 && r.discsTotal === void 0 && r.genre === void 0 && r.date === void 0 && r.lyrics === void 0 && (!r.images || r.images.length === 0) && r.comment === void 0 && (r.raw === void 0 || Object.keys(r.raw).length === 0), ft = {
  default: !0,
  forced: !1,
  original: !1,
  commentary: !1,
  hearingImpaired: !1,
  visuallyImpaired: !1
}, Pc = (r) => {
  if (!r || typeof r != "object")
    throw new TypeError("disposition must be an object.");
  if (r.default !== void 0 && typeof r.default != "boolean")
    throw new TypeError("disposition.default must be a boolean.");
  if (r.forced !== void 0 && typeof r.forced != "boolean")
    throw new TypeError("disposition.forced must be a boolean.");
  if (r.original !== void 0 && typeof r.original != "boolean")
    throw new TypeError("disposition.original must be a boolean.");
  if (r.commentary !== void 0 && typeof r.commentary != "boolean")
    throw new TypeError("disposition.commentary must be a boolean.");
  if (r.hearingImpaired !== void 0 && typeof r.hearingImpaired != "boolean")
    throw new TypeError("disposition.hearingImpaired must be a boolean.");
  if (r.visuallyImpaired !== void 0 && typeof r.visuallyImpaired != "boolean")
    throw new TypeError("disposition.visuallyImpaired must be a boolean.");
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class V {
  constructor(e) {
    this.bytes = e, this.pos = 0;
  }
  seekToByte(e) {
    this.pos = 8 * e;
  }
  readBit() {
    const e = Math.floor(this.pos / 8), t = this.bytes[e] ?? 0, i = 7 - (this.pos & 7), s = (t & 1 << i) >> i;
    return this.pos++, s;
  }
  readBits(e) {
    if (e === 1)
      return this.readBit();
    let t = 0;
    for (let i = 0; i < e; i++)
      t <<= 1, t |= this.readBit();
    return t;
  }
  writeBits(e, t) {
    const i = this.pos + e;
    for (let s = this.pos; s < i; s++) {
      const n = Math.floor(s / 8);
      let a = this.bytes[n];
      const o = 7 - (s & 7);
      a &= ~(1 << o), a |= (t & 1 << i - s - 1) >> i - s - 1 << o, this.bytes[n] = a;
    }
    this.pos = i;
  }
  readAlignedByte() {
    if (this.pos % 8 !== 0)
      throw new Error("Bitstream is not byte-aligned.");
    const e = this.pos / 8, t = this.bytes[e] ?? 0;
    return this.pos += 8, t;
  }
  skipBits(e) {
    this.pos += e;
  }
  getBitsLeft() {
    return this.bytes.length * 8 - this.pos;
  }
  clone() {
    const e = new V(this.bytes);
    return e.pos = this.pos, e;
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const ht = [
  96e3,
  88200,
  64e3,
  48e3,
  44100,
  32e3,
  24e3,
  22050,
  16e3,
  12e3,
  11025,
  8e3,
  7350
], rr = [-1, 1, 2, 3, 4, 5, 6, 8], Ar = (r) => {
  if (!r || r.byteLength < 2)
    throw new TypeError("AAC description must be at least 2 bytes long.");
  const e = new V(r);
  let t = e.readBits(5);
  t === 31 && (t = 32 + e.readBits(6));
  const i = e.readBits(4);
  let s = null;
  i === 15 ? s = e.readBits(24) : i < ht.length && (s = ht[i]);
  const n = e.readBits(4);
  let a = null;
  return n >= 1 && n <= 7 && (a = rr[n]), {
    objectType: t,
    frequencyIndex: i,
    sampleRate: s,
    channelConfiguration: n,
    numberOfChannels: a
  };
}, Ps = (r) => {
  let e = ht.indexOf(r.sampleRate), t = null;
  e === -1 && (e = 15, t = r.sampleRate);
  const i = rr.indexOf(r.numberOfChannels);
  if (i === -1)
    throw new TypeError(`Unsupported number of channels: ${r.numberOfChannels}`);
  let s = 13;
  r.objectType >= 32 && (s += 6), e === 15 && (s += 24);
  const n = Math.ceil(s / 8), a = new Uint8Array(n), o = new V(a);
  return r.objectType < 32 ? o.writeBits(5, r.objectType) : (o.writeBits(5, 31), o.writeBits(6, r.objectType - 32)), o.writeBits(4, e), e === 15 && o.writeBits(24, t), o.writeBits(4, i), a;
}, ra = (r) => {
  const e = new Uint8Array(7), t = new V(e), { objectType: i, frequencyIndex: s, channelConfiguration: n } = r, a = i - 1;
  return t.writeBits(12, 4095), t.writeBits(1, 0), t.writeBits(2, 0), t.writeBits(1, 1), t.writeBits(2, a), t.writeBits(4, s), t.writeBits(1, 0), t.writeBits(3, n), t.writeBits(1, 0), t.writeBits(1, 0), t.writeBits(1, 0), t.writeBits(1, 0), t.skipBits(13), t.writeBits(11, 2047), t.writeBits(2, 0), { header: e, bitstream: t };
}, ia = (r, e) => {
  r.pos = 30, r.writeBits(13, e);
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const fe = [
  "avc",
  "hevc",
  "vp9",
  "av1",
  "vp8"
], se = [
  "pcm-s16",
  // We don't prefix 'le' so we're compatible with the WebCodecs-registered PCM codec strings
  "pcm-s16be",
  "pcm-s24",
  "pcm-s24be",
  "pcm-s32",
  "pcm-s32be",
  "pcm-f32",
  "pcm-f32be",
  "pcm-f64",
  "pcm-f64be",
  "pcm-u8",
  "pcm-s8",
  "ulaw",
  "alaw"
], Et = [
  "aac",
  "opus",
  "mp3",
  "vorbis",
  "flac",
  "ac3",
  "eac3"
], we = [
  ...Et,
  ...se
], Ne = [
  "webvtt"
], jr = [
  { maxMacroblocks: 99, maxBitrate: 64e3, maxDpbMbs: 396, level: 10 },
  // Level 1
  { maxMacroblocks: 396, maxBitrate: 192e3, maxDpbMbs: 900, level: 11 },
  // Level 1.1
  { maxMacroblocks: 396, maxBitrate: 384e3, maxDpbMbs: 2376, level: 12 },
  // Level 1.2
  { maxMacroblocks: 396, maxBitrate: 768e3, maxDpbMbs: 2376, level: 13 },
  // Level 1.3
  { maxMacroblocks: 396, maxBitrate: 2e6, maxDpbMbs: 2376, level: 20 },
  // Level 2
  { maxMacroblocks: 792, maxBitrate: 4e6, maxDpbMbs: 4752, level: 21 },
  // Level 2.1
  { maxMacroblocks: 1620, maxBitrate: 4e6, maxDpbMbs: 8100, level: 22 },
  // Level 2.2
  { maxMacroblocks: 1620, maxBitrate: 1e7, maxDpbMbs: 8100, level: 30 },
  // Level 3
  { maxMacroblocks: 3600, maxBitrate: 14e6, maxDpbMbs: 18e3, level: 31 },
  // Level 3.1
  { maxMacroblocks: 5120, maxBitrate: 2e7, maxDpbMbs: 20480, level: 32 },
  // Level 3.2
  { maxMacroblocks: 8192, maxBitrate: 2e7, maxDpbMbs: 32768, level: 40 },
  // Level 4
  { maxMacroblocks: 8192, maxBitrate: 5e7, maxDpbMbs: 32768, level: 41 },
  // Level 4.1
  { maxMacroblocks: 8704, maxBitrate: 5e7, maxDpbMbs: 34816, level: 42 },
  // Level 4.2
  { maxMacroblocks: 22080, maxBitrate: 135e6, maxDpbMbs: 110400, level: 50 },
  // Level 5
  { maxMacroblocks: 36864, maxBitrate: 24e7, maxDpbMbs: 184320, level: 51 },
  // Level 5.1
  { maxMacroblocks: 36864, maxBitrate: 24e7, maxDpbMbs: 184320, level: 52 },
  // Level 5.2
  { maxMacroblocks: 139264, maxBitrate: 24e7, maxDpbMbs: 696320, level: 60 },
  // Level 6
  { maxMacroblocks: 139264, maxBitrate: 48e7, maxDpbMbs: 696320, level: 61 },
  // Level 6.1
  { maxMacroblocks: 139264, maxBitrate: 8e8, maxDpbMbs: 696320, level: 62 }
  // Level 6.2
], kn = [
  { maxPictureSize: 36864, maxBitrate: 128e3, tier: "L", level: 30 },
  // Level 1 (Low Tier)
  { maxPictureSize: 122880, maxBitrate: 15e5, tier: "L", level: 60 },
  // Level 2 (Low Tier)
  { maxPictureSize: 245760, maxBitrate: 3e6, tier: "L", level: 63 },
  // Level 2.1 (Low Tier)
  { maxPictureSize: 552960, maxBitrate: 6e6, tier: "L", level: 90 },
  // Level 3 (Low Tier)
  { maxPictureSize: 983040, maxBitrate: 1e7, tier: "L", level: 93 },
  // Level 3.1 (Low Tier)
  { maxPictureSize: 2228224, maxBitrate: 12e6, tier: "L", level: 120 },
  // Level 4 (Low Tier)
  { maxPictureSize: 2228224, maxBitrate: 3e7, tier: "H", level: 120 },
  // Level 4 (High Tier)
  { maxPictureSize: 2228224, maxBitrate: 2e7, tier: "L", level: 123 },
  // Level 4.1 (Low Tier)
  { maxPictureSize: 2228224, maxBitrate: 5e7, tier: "H", level: 123 },
  // Level 4.1 (High Tier)
  { maxPictureSize: 8912896, maxBitrate: 25e6, tier: "L", level: 150 },
  // Level 5 (Low Tier)
  { maxPictureSize: 8912896, maxBitrate: 1e8, tier: "H", level: 150 },
  // Level 5 (High Tier)
  { maxPictureSize: 8912896, maxBitrate: 4e7, tier: "L", level: 153 },
  // Level 5.1 (Low Tier)
  { maxPictureSize: 8912896, maxBitrate: 16e7, tier: "H", level: 153 },
  // Level 5.1 (High Tier)
  { maxPictureSize: 8912896, maxBitrate: 6e7, tier: "L", level: 156 },
  // Level 5.2 (Low Tier)
  { maxPictureSize: 8912896, maxBitrate: 24e7, tier: "H", level: 156 },
  // Level 5.2 (High Tier)
  { maxPictureSize: 35651584, maxBitrate: 6e7, tier: "L", level: 180 },
  // Level 6 (Low Tier)
  { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "H", level: 180 },
  // Level 6 (High Tier)
  { maxPictureSize: 35651584, maxBitrate: 12e7, tier: "L", level: 183 },
  // Level 6.1 (Low Tier)
  { maxPictureSize: 35651584, maxBitrate: 48e7, tier: "H", level: 183 },
  // Level 6.1 (High Tier)
  { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "L", level: 186 },
  // Level 6.2 (Low Tier)
  { maxPictureSize: 35651584, maxBitrate: 8e8, tier: "H", level: 186 }
  // Level 6.2 (High Tier)
], lt = [
  { maxPictureSize: 36864, maxBitrate: 2e5, level: 10 },
  // Level 1
  { maxPictureSize: 73728, maxBitrate: 8e5, level: 11 },
  // Level 1.1
  { maxPictureSize: 122880, maxBitrate: 18e5, level: 20 },
  // Level 2
  { maxPictureSize: 245760, maxBitrate: 36e5, level: 21 },
  // Level 2.1
  { maxPictureSize: 552960, maxBitrate: 72e5, level: 30 },
  // Level 3
  { maxPictureSize: 983040, maxBitrate: 12e6, level: 31 },
  // Level 3.1
  { maxPictureSize: 2228224, maxBitrate: 18e6, level: 40 },
  // Level 4
  { maxPictureSize: 2228224, maxBitrate: 3e7, level: 41 },
  // Level 4.1
  { maxPictureSize: 8912896, maxBitrate: 6e7, level: 50 },
  // Level 5
  { maxPictureSize: 8912896, maxBitrate: 12e7, level: 51 },
  // Level 5.1
  { maxPictureSize: 8912896, maxBitrate: 18e7, level: 52 },
  // Level 5.2
  { maxPictureSize: 35651584, maxBitrate: 18e7, level: 60 },
  // Level 6
  { maxPictureSize: 35651584, maxBitrate: 24e7, level: 61 },
  // Level 6.1
  { maxPictureSize: 35651584, maxBitrate: 48e7, level: 62 }
  // Level 6.2
], yn = [
  { maxPictureSize: 147456, maxBitrate: 15e5, tier: "M", level: 0 },
  // Level 2.0 (Main Tier)
  { maxPictureSize: 278784, maxBitrate: 3e6, tier: "M", level: 1 },
  // Level 2.1 (Main Tier)
  { maxPictureSize: 665856, maxBitrate: 6e6, tier: "M", level: 4 },
  // Level 3.0 (Main Tier)
  { maxPictureSize: 1065024, maxBitrate: 1e7, tier: "M", level: 5 },
  // Level 3.1 (Main Tier)
  { maxPictureSize: 2359296, maxBitrate: 12e6, tier: "M", level: 8 },
  // Level 4.0 (Main Tier)
  { maxPictureSize: 2359296, maxBitrate: 3e7, tier: "H", level: 8 },
  // Level 4.0 (High Tier)
  { maxPictureSize: 2359296, maxBitrate: 2e7, tier: "M", level: 9 },
  // Level 4.1 (Main Tier)
  { maxPictureSize: 2359296, maxBitrate: 5e7, tier: "H", level: 9 },
  // Level 4.1 (High Tier)
  { maxPictureSize: 8912896, maxBitrate: 3e7, tier: "M", level: 12 },
  // Level 5.0 (Main Tier)
  { maxPictureSize: 8912896, maxBitrate: 1e8, tier: "H", level: 12 },
  // Level 5.0 (High Tier)
  { maxPictureSize: 8912896, maxBitrate: 4e7, tier: "M", level: 13 },
  // Level 5.1 (Main Tier)
  { maxPictureSize: 8912896, maxBitrate: 16e7, tier: "H", level: 13 },
  // Level 5.1 (High Tier)
  { maxPictureSize: 8912896, maxBitrate: 6e7, tier: "M", level: 14 },
  // Level 5.2 (Main Tier)
  { maxPictureSize: 8912896, maxBitrate: 24e7, tier: "H", level: 14 },
  // Level 5.2 (High Tier)
  { maxPictureSize: 35651584, maxBitrate: 6e7, tier: "M", level: 15 },
  // Level 5.3 (Main Tier)
  { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "H", level: 15 },
  // Level 5.3 (High Tier)
  { maxPictureSize: 35651584, maxBitrate: 6e7, tier: "M", level: 16 },
  // Level 6.0 (Main Tier)
  { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "H", level: 16 },
  // Level 6.0 (High Tier)
  { maxPictureSize: 35651584, maxBitrate: 1e8, tier: "M", level: 17 },
  // Level 6.1 (Main Tier)
  { maxPictureSize: 35651584, maxBitrate: 48e7, tier: "H", level: 17 },
  // Level 6.1 (High Tier)
  { maxPictureSize: 35651584, maxBitrate: 16e7, tier: "M", level: 18 },
  // Level 6.2 (Main Tier)
  { maxPictureSize: 35651584, maxBitrate: 8e8, tier: "H", level: 18 },
  // Level 6.2 (High Tier)
  { maxPictureSize: 35651584, maxBitrate: 16e7, tier: "M", level: 19 },
  // Level 6.3 (Main Tier)
  { maxPictureSize: 35651584, maxBitrate: 8e8, tier: "H", level: 19 }
  // Level 6.3 (High Tier)
], Tn = ".01.01.01.01.00", Sn = ".0.110.01.01.01.0", Cc = (r, e, t, i) => {
  if (r === "avc") {
    const n = Math.ceil(e / 16) * Math.ceil(t / 16), a = jr.find((u) => n <= u.maxMacroblocks && i <= u.maxBitrate) ?? ee(jr), o = a ? a.level : 0, c = "64".padStart(2, "0"), l = "00", d = o.toString(16).padStart(2, "0");
    return `avc1.${c}${l}${d}`;
  } else if (r === "hevc") {
    const s = "", a = "6", o = e * t, c = kn.find((d) => o <= d.maxPictureSize && i <= d.maxBitrate) ?? ee(kn);
    return `hev1.${s}1.${a}.${c.tier}${c.level}.B0`;
  } else {
    if (r === "vp8")
      return "vp8";
    if (r === "vp9") {
      const s = "00", n = e * t, a = lt.find((c) => n <= c.maxPictureSize && i <= c.maxBitrate) ?? ee(lt);
      return `vp09.${s}.${a.level.toString().padStart(2, "0")}.08`;
    } else if (r === "av1") {
      const n = e * t, a = yn.find((l) => n <= l.maxPictureSize && i <= l.maxBitrate) ?? ee(yn);
      return `av01.0.${a.level.toString().padStart(2, "0")}${a.tier}.08`;
    }
  }
  throw new TypeError(`Unhandled codec '${r}'.`);
}, _c = (r) => {
  const e = r.split("."), t = Number(e[1]), i = Number(e[2]), s = Number(e[3]), n = e[4] ? Number(e[4]) : 1;
  return [
    1,
    1,
    t,
    2,
    1,
    i,
    3,
    1,
    s,
    4,
    1,
    n
  ];
}, sa = (r) => {
  const e = r.split("."), s = (1 << 7) + 1, n = Number(e[1]), a = e[2], o = Number(a.slice(0, -1)), c = (n << 5) + o, l = a.slice(-1) === "H" ? 1 : 0, u = Number(e[3]) === 8 ? 0 : 1, h = 0, m = e[4] ? Number(e[4]) : 0, g = e[5] ? Number(e[5][0]) : 1, f = e[5] ? Number(e[5][1]) : 1, w = e[5] ? Number(e[5][2]) : 0, k = (l << 7) + (u << 6) + (h << 5) + (m << 4) + (g << 3) + (f << 2) + w;
  return [s, c, k, 0];
}, Cs = (r) => {
  const { codec: e, codecDescription: t, colorSpace: i, avcCodecInfo: s, hevcCodecInfo: n, vp9CodecInfo: a, av1CodecInfo: o } = r;
  if (e === "avc") {
    if (p(r.avcType !== null), s) {
      const c = new Uint8Array([
        s.avcProfileIndication,
        s.profileCompatibility,
        s.avcLevelIndication
      ]);
      return `avc${r.avcType}.${un(c)}`;
    }
    if (!t || t.byteLength < 4)
      throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
    return `avc${r.avcType}.${un(t.subarray(1, 4))}`;
  } else if (e === "hevc") {
    let c, l, d, u, h, m;
    if (n)
      c = n.generalProfileSpace, l = n.generalProfileIdc, d = hn(n.generalProfileCompatibilityFlags), u = n.generalTierFlag, h = n.generalLevelIdc, m = [...n.generalConstraintIndicatorFlags];
    else {
      if (!t || t.byteLength < 23)
        throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
      const f = L(t), w = f.getUint8(1);
      c = w >> 6 & 3, l = w & 31, d = hn(f.getUint32(2)), u = w >> 5 & 1, h = f.getUint8(12), m = [];
      for (let k = 0; k < 6; k++)
        m.push(f.getUint8(6 + k));
    }
    let g = "hev1.";
    for (g += ["", "A", "B", "C"][c] + l, g += ".", g += d.toString(16).toUpperCase(), g += ".", g += u === 0 ? "L" : "H", g += h; m.length > 0 && m[m.length - 1] === 0; )
      m.pop();
    return m.length > 0 && (g += ".", g += m.map((f) => f.toString(16).toUpperCase()).join(".")), g;
  } else {
    if (e === "vp8")
      return "vp8";
    if (e === "vp9") {
      if (!a) {
        const k = r.width * r.height;
        let b = ee(lt).level;
        for (const T of lt)
          if (k <= T.maxPictureSize) {
            b = T.level;
            break;
          }
        return `vp09.00.${b.toString().padStart(2, "0")}.08`;
      }
      const c = a.profile.toString().padStart(2, "0"), l = a.level.toString().padStart(2, "0"), d = a.bitDepth.toString().padStart(2, "0"), u = a.chromaSubsampling.toString().padStart(2, "0"), h = a.colourPrimaries.toString().padStart(2, "0"), m = a.transferCharacteristics.toString().padStart(2, "0"), g = a.matrixCoefficients.toString().padStart(2, "0"), f = a.videoFullRangeFlag.toString().padStart(2, "0");
      let w = `vp09.${c}.${l}.${d}.${u}`;
      return w += `.${h}.${m}.${g}.${f}`, w.endsWith(Tn) && (w = w.slice(0, -Tn.length)), w;
    } else if (e === "av1") {
      if (!o) {
        const T = r.width * r.height;
        let S = ee(lt).level;
        for (const x of lt)
          if (T <= x.maxPictureSize) {
            S = x.level;
            break;
          }
        return `av01.0.${S.toString().padStart(2, "0")}M.08`;
      }
      const c = o.profile, l = o.level.toString().padStart(2, "0"), d = o.tier ? "H" : "M", u = o.bitDepth.toString().padStart(2, "0"), h = o.monochrome ? "1" : "0", m = 100 * o.chromaSubsamplingX + 10 * o.chromaSubsamplingY + 1 * (o.chromaSubsamplingX && o.chromaSubsamplingY ? o.chromaSamplePosition : 0), g = i?.primaries ? Bt[i.primaries] : 1, f = i?.transfer ? Rt[i.transfer] : 1, w = i?.matrix ? Mt[i.matrix] : 1, k = i?.fullRange ? 1 : 0;
      let b = `av01.${c}.${l}${d}.${u}`;
      return b += `.${h}.${m.toString().padStart(3, "0")}`, b += `.${g.toString().padStart(2, "0")}`, b += `.${f.toString().padStart(2, "0")}`, b += `.${w.toString().padStart(2, "0")}`, b += `.${k}`, b.endsWith(Sn) && (b = b.slice(0, -Sn.length)), b;
    }
  }
  throw new TypeError(`Unhandled codec '${e}'.`);
}, Ic = (r, e, t) => {
  if (r === "aac")
    return e >= 2 && t <= 24e3 ? "mp4a.40.29" : t <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
  if (r === "mp3")
    return "mp3";
  if (r === "opus")
    return "opus";
  if (r === "vorbis")
    return "vorbis";
  if (r === "flac")
    return "flac";
  if (r === "ac3")
    return "ac-3";
  if (r === "eac3")
    return "ec-3";
  if (se.includes(r))
    return r;
  throw new TypeError(`Unhandled codec '${r}'.`);
}, _s = (r) => {
  const { codec: e, codecDescription: t, aacCodecInfo: i } = r;
  if (e === "aac") {
    if (!i)
      throw new TypeError("AAC codec info must be provided.");
    if (i.isMpeg2)
      return "mp4a.67";
    {
      let s;
      return i.objectType !== null ? s = i.objectType : s = Ar(t).objectType, `mp4a.40.${s}`;
    }
  } else {
    if (e === "mp3")
      return "mp3";
    if (e === "opus")
      return "opus";
    if (e === "vorbis")
      return "vorbis";
    if (e === "flac")
      return "flac";
    if (e === "ac3")
      return "ac-3";
    if (e === "eac3")
      return "ec-3";
    if (e && se.includes(e))
      return e;
  }
  throw new TypeError(`Unhandled codec '${e}'.`);
}, ir = 48e3, na = /^pcm-([usf])(\d+)+(be)?$/, We = (r) => {
  if (p(se.includes(r)), r === "ulaw")
    return { dataType: "ulaw", sampleSize: 1, littleEndian: !0, silentValue: 255 };
  if (r === "alaw")
    return { dataType: "alaw", sampleSize: 1, littleEndian: !0, silentValue: 213 };
  const e = na.exec(r);
  p(e);
  let t;
  e[1] === "u" ? t = "unsigned" : e[1] === "s" ? t = "signed" : t = "float";
  const i = Number(e[2]) / 8, s = e[3] !== "be", n = r === "pcm-u8" ? 2 ** 7 : 0;
  return { dataType: t, sampleSize: i, littleEndian: s, silentValue: n };
}, aa = (r) => r.startsWith("avc1") || r.startsWith("avc3") ? "avc" : r.startsWith("hev1") || r.startsWith("hvc1") ? "hevc" : r === "vp8" ? "vp8" : r.startsWith("vp09") ? "vp9" : r.startsWith("av01") ? "av1" : r.startsWith("mp4a.40") || r === "mp4a.67" ? "aac" : r === "mp3" || r === "mp4a.69" || r === "mp4a.6B" || r === "mp4a.6b" ? "mp3" : r === "opus" ? "opus" : r === "vorbis" ? "vorbis" : r === "flac" ? "flac" : r === "ac-3" || r === "ac3" ? "ac3" : r === "ec-3" || r === "eac3" ? "eac3" : r === "ulaw" ? "ulaw" : r === "alaw" ? "alaw" : na.test(r) ? r : r === "webvtt" ? "webvtt" : null, Ec = (r) => r === "avc" ? {
  avc: {
    format: "avc"
    // Ensure the format is not Annex B
  }
} : r === "hevc" ? {
  hevc: {
    format: "hevc"
    // Ensure the format is not Annex B
  }
} : {}, vc = (r) => r === "aac" ? {
  aac: {
    format: "aac"
    // Ensure the format is not ADTS
  }
} : r === "opus" ? {
  opus: {
    format: "opus"
  }
} : {}, Ac = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01"], Fc = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/, Bc = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/, Rc = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/, Mc = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/, Is = (r) => {
  if (!r)
    throw new TypeError("Video chunk metadata must be provided.");
  if (typeof r != "object")
    throw new TypeError("Video chunk metadata must be an object.");
  if (!r.decoderConfig)
    throw new TypeError("Video chunk metadata must include a decoder configuration.");
  if (typeof r.decoderConfig != "object")
    throw new TypeError("Video chunk metadata decoder configuration must be an object.");
  if (typeof r.decoderConfig.codec != "string")
    throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
  if (!Ac.some((e) => r.decoderConfig.codec.startsWith(e)))
    throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
  if (!Number.isInteger(r.decoderConfig.codedWidth) || r.decoderConfig.codedWidth <= 0)
    throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
  if (!Number.isInteger(r.decoderConfig.codedHeight) || r.decoderConfig.codedHeight <= 0)
    throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
  if (r.decoderConfig.description !== void 0 && !ri(r.decoderConfig.description))
    throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
  if (r.decoderConfig.colorSpace !== void 0) {
    const { colorSpace: e } = r.decoderConfig;
    if (typeof e != "object")
      throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
    const t = Object.keys(Bt);
    if (e.primaries != null && !t.includes(e.primaries))
      throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${t.join(", ")}.`);
    const i = Object.keys(Rt);
    if (e.transfer != null && !i.includes(e.transfer))
      throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${i.join(", ")}.`);
    const s = Object.keys(Mt);
    if (e.matrix != null && !s.includes(e.matrix))
      throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${s.join(", ")}.`);
    if (e.fullRange != null && typeof e.fullRange != "boolean")
      throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.");
  }
  if (r.decoderConfig.codec.startsWith("avc1") || r.decoderConfig.codec.startsWith("avc3")) {
    if (!Fc.test(r.decoderConfig.codec))
      throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.");
  } else if (r.decoderConfig.codec.startsWith("hev1") || r.decoderConfig.codec.startsWith("hvc1")) {
    if (!Bc.test(r.decoderConfig.codec))
      throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.");
  } else if (r.decoderConfig.codec.startsWith("vp8")) {
    if (r.decoderConfig.codec !== "vp8")
      throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".');
  } else if (r.decoderConfig.codec.startsWith("vp09")) {
    if (!Rc.test(r.decoderConfig.codec))
      throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.');
  } else if (r.decoderConfig.codec.startsWith("av01") && !Mc.test(r.decoderConfig.codec))
    throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.');
}, zc = [
  "mp4a",
  "mp3",
  "opus",
  "vorbis",
  "flac",
  "ulaw",
  "alaw",
  "pcm",
  "ac-3",
  "ec-3"
], zt = (r) => {
  if (!r)
    throw new TypeError("Audio chunk metadata must be provided.");
  if (typeof r != "object")
    throw new TypeError("Audio chunk metadata must be an object.");
  if (!r.decoderConfig)
    throw new TypeError("Audio chunk metadata must include a decoder configuration.");
  if (typeof r.decoderConfig != "object")
    throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
  if (typeof r.decoderConfig.codec != "string")
    throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
  if (!zc.some((e) => r.decoderConfig.codec.startsWith(e)))
    throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
  if (!Number.isInteger(r.decoderConfig.sampleRate) || r.decoderConfig.sampleRate <= 0)
    throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
  if (!Number.isInteger(r.decoderConfig.numberOfChannels) || r.decoderConfig.numberOfChannels <= 0)
    throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
  if (r.decoderConfig.description !== void 0 && !ri(r.decoderConfig.description))
    throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
  if (r.decoderConfig.codec.startsWith("mp4a") && r.decoderConfig.codec !== "mp4a.69" && r.decoderConfig.codec !== "mp4a.6B" && r.decoderConfig.codec !== "mp4a.6b") {
    if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(r.decoderConfig.codec))
      throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.");
  } else if (r.decoderConfig.codec.startsWith("mp3") || r.decoderConfig.codec.startsWith("mp4a")) {
    if (r.decoderConfig.codec !== "mp3" && r.decoderConfig.codec !== "mp4a.69" && r.decoderConfig.codec !== "mp4a.6B" && r.decoderConfig.codec !== "mp4a.6b")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".');
  } else if (r.decoderConfig.codec.startsWith("opus")) {
    if (r.decoderConfig.codec !== "opus")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
    if (r.decoderConfig.description && r.decoderConfig.description.byteLength < 18)
      throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.");
  } else if (r.decoderConfig.codec.startsWith("vorbis")) {
    if (r.decoderConfig.codec !== "vorbis")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
    if (!r.decoderConfig.description)
      throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.");
  } else if (r.decoderConfig.codec.startsWith("flac")) {
    if (r.decoderConfig.codec !== "flac")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
    if (!r.decoderConfig.description || r.decoderConfig.description.byteLength < 42)
      throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.");
  } else if (r.decoderConfig.codec.startsWith("ac-3") || r.decoderConfig.codec.startsWith("ac3")) {
    if (r.decoderConfig.codec !== "ac-3")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".');
  } else if (r.decoderConfig.codec.startsWith("ec-3") || r.decoderConfig.codec.startsWith("eac3")) {
    if (r.decoderConfig.codec !== "ec-3")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".');
  } else if ((r.decoderConfig.codec.startsWith("pcm") || r.decoderConfig.codec.startsWith("ulaw") || r.decoderConfig.codec.startsWith("alaw")) && !se.includes(r.decoderConfig.codec))
    throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${se.join(", ")}).`);
}, oa = (r) => {
  if (!r)
    throw new TypeError("Subtitle metadata must be provided.");
  if (typeof r != "object")
    throw new TypeError("Subtitle metadata must be an object.");
  if (!r.config)
    throw new TypeError("Subtitle metadata must include a config object.");
  if (typeof r.config != "object")
    throw new TypeError("Subtitle metadata config must be an object.");
  if (typeof r.config.description != "string")
    throw new TypeError("Subtitle metadata config description must be a string.");
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const gr = 4, Dc = [44100, 48e3, 32e3], Yi = [
  // lowSamplingFrequency === 0
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // layer = 0
  -1,
  32,
  40,
  48,
  56,
  64,
  80,
  96,
  112,
  128,
  160,
  192,
  224,
  256,
  320,
  -1,
  // layer 1
  -1,
  32,
  48,
  56,
  64,
  80,
  96,
  112,
  128,
  160,
  192,
  224,
  256,
  320,
  384,
  -1,
  // layer = 2
  -1,
  32,
  64,
  96,
  128,
  160,
  192,
  224,
  256,
  288,
  320,
  352,
  384,
  416,
  448,
  -1,
  // layer = 3
  // lowSamplingFrequency === 1
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // layer = 0
  -1,
  8,
  16,
  24,
  32,
  40,
  48,
  56,
  64,
  80,
  96,
  112,
  128,
  144,
  160,
  -1,
  // layer = 1
  -1,
  8,
  16,
  24,
  32,
  40,
  48,
  56,
  64,
  80,
  96,
  112,
  128,
  144,
  160,
  -1,
  // layer = 2
  -1,
  32,
  48,
  56,
  64,
  80,
  96,
  112,
  128,
  144,
  160,
  176,
  192,
  224,
  256,
  -1
  // layer = 3
], ci = 1483304551, Es = 1231971951, Zi = (r, e, t, i, s) => e === 0 ? 0 : e === 1 ? Math.floor(144 * t / (i << r)) + s : e === 2 ? Math.floor(144 * t / i) + s : (Math.floor(12 * t / i) + s) * 4, li = (r, e) => r === 3 ? e === 3 ? 21 : 36 : e === 3 ? 13 : 21, di = (r, e) => {
  const t = r >>> 24, i = r >>> 16 & 255, s = r >>> 8 & 255, n = r & 255;
  if (t !== 255 && i !== 255 && s !== 255 && n !== 255)
    return {
      header: null,
      bytesAdvanced: 4
    };
  if (t !== 255)
    return { header: null, bytesAdvanced: 1 };
  if ((i & 224) !== 224)
    return { header: null, bytesAdvanced: 1 };
  let a = 0, o = 0;
  i & 16 ? a = i & 8 ? 0 : 1 : (a = 1, o = 1);
  const c = i >> 3 & 3, l = i >> 1 & 3, d = s >> 4 & 15, u = (s >> 2 & 3) % 3, h = s >> 1 & 1, m = n >> 6 & 3, g = n >> 4 & 3, f = n >> 3 & 1, w = n >> 2 & 1, k = n & 3, b = Yi[a * 16 * 4 + l * 16 + d];
  if (b === -1)
    return { header: null, bytesAdvanced: 1 };
  const T = b * 1e3, S = Dc[u] >> a + o, x = Zi(a, l, T, S, h);
  if (e !== null && e < x)
    return { header: null, bytesAdvanced: 1 };
  let P;
  return c === 3 ? P = l === 3 ? 384 : 1152 : l === 3 ? P = 384 : l === 2 ? P = 1152 : P = 576, {
    header: {
      totalSize: x,
      mpegVersionId: c,
      layer: l,
      bitrate: T,
      frequencyIndex: u,
      sampleRate: S,
      channel: m,
      modeExtension: g,
      copyright: f,
      original: w,
      emphasis: k,
      audioSamplesInFrame: P
    },
    bytesAdvanced: 1
  };
}, Oc = (r) => {
  let e = 127, t = 0, i = r;
  for (; (e ^ 2147483647) !== 0; )
    t = i & ~e, t <<= 1, t |= i & e, e = (e + 1 << 8) - 1, i = t;
  return t;
}, Ji = (r) => {
  let e = 2130706432, t = 0;
  for (; e !== 0; )
    t >>= 1, t |= r & e, e >>= 8;
  return t;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const ui = [48e3, 44100, 32e3], ca = [24e3, 22050, 16e3];
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
var Ie;
(function(r) {
  r[r.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", r[r.SLICE_DPA = 2] = "SLICE_DPA", r[r.SLICE_DPB = 3] = "SLICE_DPB", r[r.SLICE_DPC = 4] = "SLICE_DPC", r[r.IDR = 5] = "IDR", r[r.SEI = 6] = "SEI", r[r.SPS = 7] = "SPS", r[r.PPS = 8] = "PPS", r[r.AUD = 9] = "AUD", r[r.SPS_EXT = 13] = "SPS_EXT";
})(Ie || (Ie = {}));
var ie;
(function(r) {
  r[r.RASL_N = 8] = "RASL_N", r[r.RASL_R = 9] = "RASL_R", r[r.BLA_W_LP = 16] = "BLA_W_LP", r[r.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", r[r.VPS_NUT = 32] = "VPS_NUT", r[r.SPS_NUT = 33] = "SPS_NUT", r[r.PPS_NUT = 34] = "PPS_NUT", r[r.AUD_NUT = 35] = "AUD_NUT", r[r.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", r[r.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT";
})(ie || (ie = {}));
const sr = function* (r) {
  let e = 0, t = -1;
  for (; e < r.length - 2; ) {
    const i = r.indexOf(0, e);
    if (i === -1 || i >= r.length - 2)
      break;
    e = i;
    let s = 0;
    if (e + 3 < r.length && r[e + 1] === 0 && r[e + 2] === 0 && r[e + 3] === 1 ? s = 4 : r[e + 1] === 0 && r[e + 2] === 1 && (s = 3), s === 0) {
      e++;
      continue;
    }
    t !== -1 && e > t && (yield {
      offset: t,
      length: e - t
    }), t = e + s, e = t;
  }
  t !== -1 && t < r.length && (yield {
    offset: t,
    length: r.length - t
  });
}, vs = function* (r, e) {
  let t = 0;
  const i = new DataView(r.buffer, r.byteOffset, r.byteLength);
  for (; t + e <= r.length; ) {
    let s;
    e === 1 ? s = i.getUint8(t) : e === 2 ? s = i.getUint16(t, !1) : e === 3 ? s = ii(i, t, !1) : (p(e === 4), s = i.getUint32(t, !1)), t += e, yield {
      offset: t,
      length: s
    }, t += s;
  }
}, la = (r, e) => {
  if (e.description) {
    const s = (Z(e.description)[4] & 3) + 1;
    return vs(r, s);
  } else
    return sr(r);
}, Yt = (r) => r & 31, hi = (r) => {
  const e = [], t = r.length;
  for (let i = 0; i < t; i++)
    i + 2 < t && r[i] === 0 && r[i + 1] === 0 && r[i + 2] === 3 ? (e.push(0, 0), i += 2) : e.push(r[i]);
  return new Uint8Array(e);
}, Ei = new Uint8Array([0, 0, 0, 1]), es = (r) => {
  const e = r.reduce((s, n) => s + Ei.byteLength + n.byteLength, 0), t = new Uint8Array(e);
  let i = 0;
  for (const s of r)
    t.set(Ei, i), i += Ei.byteLength, t.set(s, i), i += s.byteLength;
  return t;
}, da = (r, e) => {
  const t = r.reduce((n, a) => n + e + a.byteLength, 0), i = new Uint8Array(t);
  let s = 0;
  for (const n of r) {
    const a = new DataView(i.buffer, i.byteOffset, i.byteLength);
    switch (e) {
      case 1:
        a.setUint8(s, n.byteLength);
        break;
      case 2:
        a.setUint16(s, n.byteLength, !1);
        break;
      case 3:
        si(a, s, n.byteLength, !1);
        break;
      case 4:
        a.setUint32(s, n.byteLength, !1);
        break;
    }
    s += e, i.set(n, s), s += n.byteLength;
  }
  return i;
}, Uc = (r, e) => {
  if (e.description) {
    const s = (Z(e.description)[4] & 3) + 1;
    return da(r, s);
  } else
    return es(r);
}, As = (r) => {
  try {
    const e = [], t = [], i = [];
    for (const o of sr(r)) {
      const c = r.subarray(o.offset, o.offset + o.length), l = Yt(c[0]);
      l === Ie.SPS ? e.push(c) : l === Ie.PPS ? t.push(c) : l === Ie.SPS_EXT && i.push(c);
    }
    if (e.length === 0 || t.length === 0)
      return null;
    const s = e[0], n = Fs(s);
    p(n !== null);
    const a = n.profileIdc === 100 || n.profileIdc === 110 || n.profileIdc === 122 || n.profileIdc === 144;
    return {
      configurationVersion: 1,
      avcProfileIndication: n.profileIdc,
      profileCompatibility: n.constraintFlags,
      avcLevelIndication: n.levelIdc,
      lengthSizeMinusOne: 3,
      // Typically 4 bytes for length field
      sequenceParameterSets: e,
      pictureParameterSets: t,
      chromaFormat: a ? n.chromaFormatIdc : null,
      bitDepthLumaMinus8: a ? n.bitDepthLumaMinus8 : null,
      bitDepthChromaMinus8: a ? n.bitDepthChromaMinus8 : null,
      sequenceParameterSetExt: a ? i : null
    };
  } catch (e) {
    return console.error("Error building AVC Decoder Configuration Record:", e), null;
  }
}, Nc = (r) => {
  const e = [];
  e.push(r.configurationVersion), e.push(r.avcProfileIndication), e.push(r.profileCompatibility), e.push(r.avcLevelIndication), e.push(252 | r.lengthSizeMinusOne & 3), e.push(224 | r.sequenceParameterSets.length & 31);
  for (const t of r.sequenceParameterSets) {
    const i = t.byteLength;
    e.push(i >> 8), e.push(i & 255);
    for (let s = 0; s < i; s++)
      e.push(t[s]);
  }
  e.push(r.pictureParameterSets.length);
  for (const t of r.pictureParameterSets) {
    const i = t.byteLength;
    e.push(i >> 8), e.push(i & 255);
    for (let s = 0; s < i; s++)
      e.push(t[s]);
  }
  if (r.avcProfileIndication === 100 || r.avcProfileIndication === 110 || r.avcProfileIndication === 122 || r.avcProfileIndication === 144) {
    p(r.chromaFormat !== null), p(r.bitDepthLumaMinus8 !== null), p(r.bitDepthChromaMinus8 !== null), p(r.sequenceParameterSetExt !== null), e.push(252 | r.chromaFormat & 3), e.push(248 | r.bitDepthLumaMinus8 & 7), e.push(248 | r.bitDepthChromaMinus8 & 7), e.push(r.sequenceParameterSetExt.length);
    for (const t of r.sequenceParameterSetExt) {
      const i = t.byteLength;
      e.push(i >> 8), e.push(i & 255);
      for (let s = 0; s < i; s++)
        e.push(t[s]);
    }
  }
  return new Uint8Array(e);
}, ua = (r) => {
  try {
    const e = L(r);
    let t = 0;
    const i = e.getUint8(t++), s = e.getUint8(t++), n = e.getUint8(t++), a = e.getUint8(t++), o = e.getUint8(t++) & 3, c = e.getUint8(t++) & 31, l = [];
    for (let m = 0; m < c; m++) {
      const g = e.getUint16(t, !1);
      t += 2, l.push(r.subarray(t, t + g)), t += g;
    }
    const d = e.getUint8(t++), u = [];
    for (let m = 0; m < d; m++) {
      const g = e.getUint16(t, !1);
      t += 2, u.push(r.subarray(t, t + g)), t += g;
    }
    const h = {
      configurationVersion: i,
      avcProfileIndication: s,
      profileCompatibility: n,
      avcLevelIndication: a,
      lengthSizeMinusOne: o,
      sequenceParameterSets: l,
      pictureParameterSets: u,
      chromaFormat: null,
      bitDepthLumaMinus8: null,
      bitDepthChromaMinus8: null,
      sequenceParameterSetExt: null
    };
    if ((s === 100 || s === 110 || s === 122 || s === 144) && t + 4 <= r.length) {
      const m = e.getUint8(t++) & 3, g = e.getUint8(t++) & 7, f = e.getUint8(t++) & 7, w = e.getUint8(t++);
      h.chromaFormat = m, h.bitDepthLumaMinus8 = g, h.bitDepthChromaMinus8 = f;
      const k = [];
      for (let b = 0; b < w; b++) {
        const T = e.getUint16(t, !1);
        t += 2, k.push(r.subarray(t, t + T)), t += T;
      }
      h.sequenceParameterSetExt = k;
    }
    return h;
  } catch (e) {
    return console.error("Error deserializing AVC Decoder Configuration Record:", e), null;
  }
}, ha = {
  1: { num: 1, den: 1 },
  2: { num: 12, den: 11 },
  3: { num: 10, den: 11 },
  4: { num: 16, den: 11 },
  5: { num: 40, den: 33 },
  6: { num: 24, den: 11 },
  7: { num: 20, den: 11 },
  8: { num: 32, den: 11 },
  9: { num: 80, den: 33 },
  10: { num: 18, den: 11 },
  11: { num: 15, den: 11 },
  12: { num: 64, den: 33 },
  13: { num: 160, den: 99 },
  14: { num: 4, den: 3 },
  15: { num: 3, den: 2 },
  16: { num: 2, den: 1 }
}, Fs = (r) => {
  try {
    const e = new V(hi(r));
    if (e.skipBits(1), e.skipBits(2), e.readBits(5) !== 7)
      return null;
    const i = e.readAlignedByte(), s = e.readAlignedByte(), n = e.readAlignedByte();
    v(e);
    let a = 1, o = 0, c = 0, l = 0;
    if ((i === 100 || i === 110 || i === 122 || i === 244 || i === 44 || i === 83 || i === 86 || i === 118 || i === 128) && (a = v(e), a === 3 && (l = e.readBits(1)), o = v(e), c = v(e), e.skipBits(1), e.readBits(1))) {
      for (let F = 0; F < (a !== 3 ? 8 : 12); F++)
        if (e.readBits(1)) {
          const q = F < 6 ? 16 : 64;
          let j = 8, Q = 8;
          for (let B = 0; B < q; B++) {
            if (Q !== 0) {
              const H = Xe(e);
              Q = (j + H + 256) % 256;
            }
            j = Q === 0 ? j : Q;
          }
        }
    }
    v(e);
    const d = v(e);
    if (d === 0)
      v(e);
    else if (d === 1) {
      e.skipBits(1), Xe(e), Xe(e);
      const D = v(e);
      for (let F = 0; F < D; F++)
        Xe(e);
    }
    v(e), e.skipBits(1);
    const u = v(e), h = v(e), m = 16 * (u + 1), g = 16 * (h + 1);
    let f = m, w = g;
    const k = e.readBits(1);
    if (k || e.skipBits(1), e.skipBits(1), e.readBits(1)) {
      const D = v(e), F = v(e), R = v(e), q = v(e);
      let j, Q;
      if ((l === 0 ? a : 0) === 0)
        j = 1, Q = 2 - k;
      else {
        const H = a === 3 ? 1 : 2, Y = a === 1 ? 2 : 1;
        j = H, Q = Y * (2 - k);
      }
      f -= j * (D + F), w -= Q * (R + q);
    }
    let T = 2, S = 2, x = 2, P = 0, _ = { num: 1, den: 1 }, C = null, I = null;
    if (e.readBits(1)) {
      if (e.readBits(1)) {
        const Y = e.readBits(8);
        if (Y === 255)
          _ = {
            num: e.readBits(16),
            den: e.readBits(16)
          };
        else {
          const de = ha[Y];
          de && (_ = de);
        }
      }
      e.readBits(1) && e.skipBits(1), e.readBits(1) && (e.skipBits(3), P = e.readBits(1), e.readBits(1) && (T = e.readBits(8), S = e.readBits(8), x = e.readBits(8))), e.readBits(1) && (v(e), v(e)), e.readBits(1) && (e.skipBits(32), e.skipBits(32), e.skipBits(1));
      const Q = e.readBits(1);
      Q && xn(e);
      const B = e.readBits(1);
      B && xn(e), (Q || B) && e.skipBits(1), e.skipBits(1), e.readBits(1) && (e.skipBits(1), v(e), v(e), v(e), v(e), C = v(e), I = v(e));
    }
    if (C === null) {
      p(I === null);
      const D = s & 16;
      if ((i === 44 || i === 86 || i === 100 || i === 110 || i === 122 || i === 244) && D)
        C = 0, I = 0;
      else {
        const F = u + 1, R = h + 1, q = (2 - k) * R, j = jr.find((B) => B.level >= n) ?? ee(jr), Q = Math.min(Math.floor(j.maxDpbMbs / (F * q)), 16);
        C = Q, I = Q;
      }
    }
    return p(I !== null), {
      profileIdc: i,
      constraintFlags: s,
      levelIdc: n,
      frameMbsOnlyFlag: k,
      chromaFormatIdc: a,
      bitDepthLumaMinus8: o,
      bitDepthChromaMinus8: c,
      codedWidth: m,
      codedHeight: g,
      displayWidth: f,
      displayHeight: w,
      pixelAspectRatio: _,
      colourPrimaries: T,
      matrixCoefficients: x,
      transferCharacteristics: S,
      fullRangeFlag: P,
      numReorderFrames: C,
      maxDecFrameBuffering: I
    };
  } catch (e) {
    return console.error("Error parsing AVC SPS:", e), null;
  }
}, xn = (r) => {
  const e = v(r);
  r.skipBits(4), r.skipBits(4);
  for (let t = 0; t <= e; t++)
    v(r), v(r), r.skipBits(1);
  r.skipBits(5), r.skipBits(5), r.skipBits(5), r.skipBits(5);
}, fa = (r, e) => {
  if (e.description) {
    const s = (Z(e.description)[21] & 3) + 1;
    return vs(r, s);
  } else
    return sr(r);
}, vt = (r) => r >> 1 & 63, ma = (r) => {
  try {
    const e = new V(hi(r));
    e.skipBits(16), e.readBits(4);
    const t = e.readBits(3), i = e.readBits(1), { general_profile_space: s, general_tier_flag: n, general_profile_idc: a, general_profile_compatibility_flags: o, general_constraint_indicator_flags: c, general_level_idc: l } = Vc(e, t);
    v(e);
    const d = v(e);
    let u = 0;
    d === 3 && (u = e.readBits(1));
    const h = v(e), m = v(e);
    let g = h, f = m;
    if (e.readBits(1)) {
      const F = v(e), R = v(e), q = v(e), j = v(e);
      let Q = 1, B = 1;
      const H = u === 0 ? d : 0;
      H === 1 ? (Q = 2, B = 2) : H === 2 && (Q = 2, B = 1), g -= (F + R) * Q, f -= (q + j) * B;
    }
    const w = v(e), k = v(e);
    v(e);
    const T = e.readBits(1) ? 0 : t;
    let S = 0;
    for (let F = T; F <= t; F++)
      v(e), S = v(e), v(e);
    v(e), v(e), v(e), v(e), v(e), v(e), e.readBits(1) && e.readBits(1) && Wc(e), e.skipBits(1), e.skipBits(1), e.readBits(1) && (e.skipBits(4), e.skipBits(4), v(e), v(e), e.skipBits(1));
    const x = v(e);
    if (Lc(e, x), e.readBits(1)) {
      const F = v(e);
      for (let R = 0; R < F; R++)
        v(e), e.skipBits(1);
    }
    e.skipBits(1), e.skipBits(1);
    let P = 2, _ = 2, C = 2, I = 0, U = 0, D = { num: 1, den: 1 };
    if (e.readBits(1)) {
      const F = qc(e, t);
      D = F.pixelAspectRatio, P = F.colourPrimaries, _ = F.transferCharacteristics, C = F.matrixCoefficients, I = F.fullRangeFlag, U = F.minSpatialSegmentationIdc;
    }
    return {
      displayWidth: g,
      displayHeight: f,
      pixelAspectRatio: D,
      colourPrimaries: P,
      transferCharacteristics: _,
      matrixCoefficients: C,
      fullRangeFlag: I,
      maxDecFrameBuffering: S + 1,
      spsMaxSubLayersMinus1: t,
      spsTemporalIdNestingFlag: i,
      generalProfileSpace: s,
      generalTierFlag: n,
      generalProfileIdc: a,
      generalProfileCompatibilityFlags: o,
      generalConstraintIndicatorFlags: c,
      generalLevelIdc: l,
      chromaFormatIdc: d,
      bitDepthLumaMinus8: w,
      bitDepthChromaMinus8: k,
      minSpatialSegmentationIdc: U
    };
  } catch (e) {
    return console.error("Error parsing HEVC SPS:", e), null;
  }
}, Bs = (r) => {
  try {
    const e = [], t = [], i = [], s = [];
    for (const l of sr(r)) {
      const d = r.subarray(l.offset, l.offset + l.length), u = vt(d[0]);
      u === ie.VPS_NUT ? e.push(d) : u === ie.SPS_NUT ? t.push(d) : u === ie.PPS_NUT ? i.push(d) : (u === ie.PREFIX_SEI_NUT || u === ie.SUFFIX_SEI_NUT) && s.push(d);
    }
    if (t.length === 0 || i.length === 0)
      return null;
    const n = ma(t[0]);
    if (!n)
      return null;
    let a = 0;
    if (i.length > 0) {
      const l = i[0], d = new V(hi(l));
      d.skipBits(16), v(d), v(d), d.skipBits(1), d.skipBits(1), d.skipBits(3), d.skipBits(1), d.skipBits(1), v(d), v(d), Xe(d), d.skipBits(1), d.skipBits(1), d.readBits(1) && v(d), Xe(d), Xe(d), d.skipBits(1), d.skipBits(1), d.skipBits(1), d.skipBits(1);
      const u = d.readBits(1), h = d.readBits(1);
      !u && !h ? a = 0 : u && !h ? a = 2 : !u && h ? a = 3 : a = 0;
    }
    const o = [
      ...e.length ? [
        {
          arrayCompleteness: 1,
          nalUnitType: ie.VPS_NUT,
          nalUnits: e
        }
      ] : [],
      ...t.length ? [
        {
          arrayCompleteness: 1,
          nalUnitType: ie.SPS_NUT,
          nalUnits: t
        }
      ] : [],
      ...i.length ? [
        {
          arrayCompleteness: 1,
          nalUnitType: ie.PPS_NUT,
          nalUnits: i
        }
      ] : [],
      ...s.length ? [
        {
          arrayCompleteness: 1,
          nalUnitType: vt(s[0][0]),
          nalUnits: s
        }
      ] : []
    ];
    return {
      configurationVersion: 1,
      generalProfileSpace: n.generalProfileSpace,
      generalTierFlag: n.generalTierFlag,
      generalProfileIdc: n.generalProfileIdc,
      generalProfileCompatibilityFlags: n.generalProfileCompatibilityFlags,
      generalConstraintIndicatorFlags: n.generalConstraintIndicatorFlags,
      generalLevelIdc: n.generalLevelIdc,
      minSpatialSegmentationIdc: n.minSpatialSegmentationIdc,
      parallelismType: a,
      chromaFormatIdc: n.chromaFormatIdc,
      bitDepthLumaMinus8: n.bitDepthLumaMinus8,
      bitDepthChromaMinus8: n.bitDepthChromaMinus8,
      avgFrameRate: 0,
      constantFrameRate: 0,
      numTemporalLayers: n.spsMaxSubLayersMinus1 + 1,
      temporalIdNested: n.spsTemporalIdNestingFlag,
      lengthSizeMinusOne: 3,
      arrays: o
    };
  } catch (e) {
    return console.error("Error building HEVC Decoder Configuration Record:", e), null;
  }
}, Vc = (r, e) => {
  const t = r.readBits(2), i = r.readBits(1), s = r.readBits(5);
  let n = 0;
  for (let d = 0; d < 32; d++)
    n = n << 1 | r.readBits(1);
  const a = new Uint8Array(6);
  for (let d = 0; d < 6; d++)
    a[d] = r.readBits(8);
  const o = r.readBits(8), c = [], l = [];
  for (let d = 0; d < e; d++)
    c.push(r.readBits(1)), l.push(r.readBits(1));
  if (e > 0)
    for (let d = e; d < 8; d++)
      r.skipBits(2);
  for (let d = 0; d < e; d++)
    c[d] && r.skipBits(88), l[d] && r.skipBits(8);
  return {
    general_profile_space: t,
    general_tier_flag: i,
    general_profile_idc: s,
    general_profile_compatibility_flags: n,
    general_constraint_indicator_flags: a,
    general_level_idc: o
  };
}, Wc = (r) => {
  for (let e = 0; e < 4; e++)
    for (let t = 0; t < (e === 3 ? 2 : 6); t++)
      if (!r.readBits(1))
        v(r);
      else {
        const s = Math.min(64, 1 << 4 + (e << 1));
        e > 1 && Xe(r);
        for (let n = 0; n < s; n++)
          Xe(r);
      }
}, Lc = (r, e) => {
  const t = [];
  for (let i = 0; i < e; i++)
    t[i] = Hc(r, i, e, t);
}, Hc = (r, e, t, i) => {
  let s = 0, n = 0, a = 0;
  if (e !== 0 && (n = r.readBits(1)), n) {
    if (e === t) {
      const c = v(r);
      a = e - (c + 1);
    } else
      a = e - 1;
    r.readBits(1), v(r);
    const o = i[a] ?? 0;
    for (let c = 0; c <= o; c++)
      r.readBits(1) || r.readBits(1);
    s = i[a];
  } else {
    const o = v(r), c = v(r);
    for (let l = 0; l < o; l++)
      v(r), r.readBits(1);
    for (let l = 0; l < c; l++)
      v(r), r.readBits(1);
    s = o + c;
  }
  return s;
}, qc = (r, e) => {
  let t = 2, i = 2, s = 2, n = 0, a = 0, o = { num: 1, den: 1 };
  if (r.readBits(1)) {
    const c = r.readBits(8);
    if (c === 255)
      o = {
        num: r.readBits(16),
        den: r.readBits(16)
      };
    else {
      const l = ha[c];
      l && (o = l);
    }
  }
  return r.readBits(1) && r.readBits(1), r.readBits(1) && (r.readBits(3), n = r.readBits(1), r.readBits(1) && (t = r.readBits(8), i = r.readBits(8), s = r.readBits(8))), r.readBits(1) && (v(r), v(r)), r.readBits(1), r.readBits(1), r.readBits(1), r.readBits(1) && (v(r), v(r), v(r), v(r)), r.readBits(1) && (r.readBits(32), r.readBits(32), r.readBits(1) && v(r), r.readBits(1) && jc(r, !0, e)), r.readBits(1) && (r.readBits(1), r.readBits(1), r.readBits(1), a = v(r), v(r), v(r), v(r), v(r)), {
    pixelAspectRatio: o,
    colourPrimaries: t,
    transferCharacteristics: i,
    matrixCoefficients: s,
    fullRangeFlag: n,
    minSpatialSegmentationIdc: a
  };
}, jc = (r, e, t) => {
  let i = !1, s = !1, n = !1;
  i = r.readBits(1) === 1, s = r.readBits(1) === 1, (i || s) && (n = r.readBits(1) === 1, n && (r.readBits(8), r.readBits(5), r.readBits(1), r.readBits(5)), r.readBits(4), r.readBits(4), n && r.readBits(4), r.readBits(5), r.readBits(5), r.readBits(5));
  for (let a = 0; a <= t; a++) {
    const o = r.readBits(1) === 1;
    let c = !0;
    o || (c = r.readBits(1) === 1);
    let l = !1;
    c ? v(r) : l = r.readBits(1) === 1;
    let d = 1;
    l || (d = v(r) + 1), i && Pn(r, d, n), s && Pn(r, d, n);
  }
}, Pn = (r, e, t) => {
  for (let i = 0; i < e; i++)
    v(r), v(r), t && (v(r), v(r)), r.readBits(1);
}, $c = (r) => {
  const e = [];
  e.push(r.configurationVersion), e.push((r.generalProfileSpace & 3) << 6 | (r.generalTierFlag & 1) << 5 | r.generalProfileIdc & 31), e.push(r.generalProfileCompatibilityFlags >>> 24 & 255), e.push(r.generalProfileCompatibilityFlags >>> 16 & 255), e.push(r.generalProfileCompatibilityFlags >>> 8 & 255), e.push(r.generalProfileCompatibilityFlags & 255), e.push(...r.generalConstraintIndicatorFlags), e.push(r.generalLevelIdc & 255), e.push(240 | r.minSpatialSegmentationIdc >> 8 & 15), e.push(r.minSpatialSegmentationIdc & 255), e.push(252 | r.parallelismType & 3), e.push(252 | r.chromaFormatIdc & 3), e.push(248 | r.bitDepthLumaMinus8 & 7), e.push(248 | r.bitDepthChromaMinus8 & 7), e.push(r.avgFrameRate >> 8 & 255), e.push(r.avgFrameRate & 255), e.push((r.constantFrameRate & 3) << 6 | (r.numTemporalLayers & 7) << 3 | (r.temporalIdNested & 1) << 2 | r.lengthSizeMinusOne & 3), e.push(r.arrays.length & 255);
  for (const t of r.arrays) {
    e.push((t.arrayCompleteness & 1) << 7 | 0 | t.nalUnitType & 63), e.push(t.nalUnits.length >> 8 & 255), e.push(t.nalUnits.length & 255);
    for (const i of t.nalUnits) {
      e.push(i.length >> 8 & 255), e.push(i.length & 255);
      for (let s = 0; s < i.length; s++)
        e.push(i[s]);
    }
  }
  return new Uint8Array(e);
}, Qc = (r) => {
  try {
    const e = L(r);
    let t = 0;
    const i = e.getUint8(t++), s = e.getUint8(t++), n = s >> 6 & 3, a = s >> 5 & 1, o = s & 31, c = e.getUint32(t, !1);
    t += 4;
    const l = r.subarray(t, t + 6);
    t += 6;
    const d = e.getUint8(t++), u = (e.getUint8(t++) & 15) << 8 | e.getUint8(t++), h = e.getUint8(t++) & 3, m = e.getUint8(t++) & 3, g = e.getUint8(t++) & 7, f = e.getUint8(t++) & 7, w = e.getUint16(t, !1);
    t += 2;
    const k = e.getUint8(t++), b = k >> 6 & 3, T = k >> 3 & 7, S = k >> 2 & 1, x = k & 3, P = e.getUint8(t++), _ = [];
    for (let C = 0; C < P; C++) {
      const I = e.getUint8(t++), U = I >> 7 & 1, D = I & 63, F = e.getUint16(t, !1);
      t += 2;
      const R = [];
      for (let q = 0; q < F; q++) {
        const j = e.getUint16(t, !1);
        t += 2, R.push(r.subarray(t, t + j)), t += j;
      }
      _.push({
        arrayCompleteness: U,
        nalUnitType: D,
        nalUnits: R
      });
    }
    return {
      configurationVersion: i,
      generalProfileSpace: n,
      generalTierFlag: a,
      generalProfileIdc: o,
      generalProfileCompatibilityFlags: c,
      generalConstraintIndicatorFlags: l,
      generalLevelIdc: d,
      minSpatialSegmentationIdc: u,
      parallelismType: h,
      chromaFormatIdc: m,
      bitDepthLumaMinus8: g,
      bitDepthChromaMinus8: f,
      avgFrameRate: w,
      constantFrameRate: b,
      numTemporalLayers: T,
      temporalIdNested: S,
      lengthSizeMinusOne: x,
      arrays: _
    };
  } catch (e) {
    return console.error("Error deserializing HEVC Decoder Configuration Record:", e), null;
  }
}, pa = (r) => {
  const e = new V(r);
  if (e.readBits(2) !== 2)
    return null;
  const i = e.readBits(1), n = (e.readBits(1) << 1) + i;
  if (n === 3 && e.skipBits(1), e.readBits(1) === 1 || e.readBits(1) !== 0 || (e.skipBits(2), e.readBits(24) !== 4817730))
    return null;
  let l = 8;
  n >= 2 && (l = e.readBits(1) ? 12 : 10);
  const d = e.readBits(3);
  let u = 0, h = 0;
  if (d !== 7)
    if (h = e.readBits(1), n === 1 || n === 3) {
      const _ = e.readBits(1), C = e.readBits(1);
      u = !_ && !C ? 3 : _ && !C ? 2 : 1, e.skipBits(1);
    } else
      u = 1;
  else
    u = 3, h = 1;
  const m = e.readBits(16), g = e.readBits(16), f = m + 1, w = g + 1, k = f * w;
  let b = ee(lt).level;
  for (const P of lt)
    if (k <= P.maxPictureSize) {
      b = P.level;
      break;
    }
  return {
    profile: n,
    level: b,
    bitDepth: l,
    chromaSubsampling: u,
    videoFullRangeFlag: h,
    colourPrimaries: d === 2 ? 1 : d === 1 ? 6 : 2,
    transferCharacteristics: d === 2 ? 1 : d === 1 ? 6 : 2,
    matrixCoefficients: d === 7 ? 0 : d === 2 ? 1 : d === 1 ? 6 : 2
  };
}, ga = function* (r) {
  const e = new V(r), t = () => {
    let i = 0;
    for (let s = 0; s < 8; s++) {
      const n = e.readAlignedByte();
      if (i |= (n & 127) << s * 7, !(n & 128))
        break;
      if (s === 7 && n & 128)
        return null;
    }
    return i >= 2 ** 32 - 1 ? null : i;
  };
  for (; e.getBitsLeft() >= 8; ) {
    e.skipBits(1);
    const i = e.readBits(4), s = e.readBits(1), n = e.readBits(1);
    e.skipBits(1), s && e.skipBits(8);
    let a;
    if (n) {
      const o = t();
      if (o === null)
        return;
      a = o;
    } else
      a = Math.floor(e.getBitsLeft() / 8);
    p(e.pos % 8 === 0), yield {
      type: i,
      data: r.subarray(e.pos / 8, e.pos / 8 + a)
    }, e.skipBits(a * 8);
  }
}, wa = (r) => {
  for (const { type: e, data: t } of ga(r)) {
    if (e !== 1)
      continue;
    const i = new V(t), s = i.readBits(3);
    i.readBits(1);
    const n = i.readBits(1);
    let a = 0, o = 0, c = 0;
    if (n)
      a = i.readBits(5);
    else {
      if (i.readBits(1) && (i.skipBits(32), i.skipBits(32), i.readBits(1)))
        return null;
      const x = i.readBits(1);
      x && (c = i.readBits(5), i.skipBits(32), i.skipBits(5), i.skipBits(5));
      const P = i.readBits(5);
      for (let _ = 0; _ <= P; _++) {
        i.skipBits(12);
        const C = i.readBits(5);
        if (_ === 0 && (a = C), C > 7) {
          const U = i.readBits(1);
          _ === 0 && (o = U);
        }
        if (x && i.readBits(1)) {
          const D = c + 1;
          i.skipBits(D), i.skipBits(D), i.skipBits(1);
        }
        i.readBits(1) && i.skipBits(4);
      }
    }
    const l = i.readBits(4), d = i.readBits(4), u = l + 1;
    i.skipBits(u);
    const h = d + 1;
    i.skipBits(h);
    let m = 0;
    if (n ? m = 0 : m = i.readBits(1), m && (i.skipBits(4), i.skipBits(3)), i.skipBits(1), i.skipBits(1), i.skipBits(1), !n) {
      i.skipBits(1), i.skipBits(1), i.skipBits(1), i.skipBits(1);
      const S = i.readBits(1);
      S && (i.skipBits(1), i.skipBits(1));
      const x = i.readBits(1);
      let P = 0;
      x ? P = 2 : P = i.readBits(1), P > 0 && (i.readBits(1) || i.skipBits(1)), S && i.skipBits(3);
    }
    i.skipBits(1), i.skipBits(1), i.skipBits(1);
    const g = i.readBits(1);
    let f = 8;
    s === 2 && g ? f = i.readBits(1) ? 12 : 10 : s <= 2 && (f = g ? 10 : 8);
    let w = 0;
    s !== 1 && (w = i.readBits(1));
    let k = 1, b = 1, T = 0;
    return w || (s === 0 ? (k = 1, b = 1) : s === 1 ? (k = 0, b = 0) : f === 12 && (k = i.readBits(1), k && (b = i.readBits(1))), k && b && (T = i.readBits(2))), {
      profile: s,
      level: a,
      tier: o,
      bitDepth: f,
      monochrome: w,
      chromaSubsamplingX: k,
      chromaSubsamplingY: b,
      chromaSamplePosition: T
    };
  }
  return null;
}, fi = (r) => {
  const e = L(r), t = e.getUint8(9), i = e.getUint16(10, !0), s = e.getUint32(12, !0), n = e.getInt16(16, !0), a = e.getUint8(18);
  let o = null;
  return a && (o = r.subarray(19, 21 + t)), {
    outputChannelCount: t,
    preSkip: i,
    inputSampleRate: s,
    outputGain: n,
    channelMappingFamily: a,
    channelMappingTable: o
  };
}, Kc = [
  480,
  960,
  1920,
  2880,
  480,
  960,
  1920,
  2880,
  480,
  960,
  1920,
  2880,
  480,
  960,
  480,
  960,
  120,
  240,
  480,
  960,
  120,
  240,
  480,
  960,
  120,
  240,
  480,
  960,
  120,
  240,
  480,
  960
], Gc = (r) => {
  const e = r[0] >> 3;
  return {
    durationInSamples: Kc[e]
  };
}, ba = (r) => {
  if (r.length < 7)
    throw new Error("Setup header is too short.");
  if (r[0] !== 5)
    throw new Error("Wrong packet type in Setup header.");
  if (String.fromCharCode(...r.slice(1, 7)) !== "vorbis")
    throw new Error("Invalid packet signature in Setup header.");
  const t = r.length, i = new Uint8Array(t);
  for (let u = 0; u < t; u++)
    i[u] = r[t - 1 - u];
  const s = new V(i);
  let n = 0;
  for (; s.getBitsLeft() > 97; )
    if (s.readBits(1) === 1) {
      n = s.pos;
      break;
    }
  if (n === 0)
    throw new Error("Invalid Setup header: framing bit not found.");
  let a = 0, o = !1, c = 0;
  for (; s.getBitsLeft() >= 97; ) {
    const u = s.pos, h = s.readBits(8), m = s.readBits(16), g = s.readBits(16);
    if (h > 63 || m !== 0 || g !== 0) {
      s.pos = u;
      break;
    }
    if (s.skipBits(1), a++, a > 64)
      break;
    s.clone().readBits(6) + 1 === a && (o = !0, c = a);
  }
  if (!o)
    throw new Error("Invalid Setup header: mode header not found.");
  if (c > 63)
    throw new Error(`Unsupported mode count: ${c}.`);
  const l = c;
  s.pos = 0, s.skipBits(n);
  const d = Array(l).fill(0);
  for (let u = l - 1; u >= 0; u--)
    s.skipBits(40), d[u] = s.readBits(1);
  return { modeBlockflags: d };
}, ka = (r, e, t) => {
  switch (r) {
    case "avc": {
      for (const i of la(t, e)) {
        const s = t[i.offset], n = Yt(s);
        if (n >= Ie.NON_IDR_SLICE && n <= Ie.SLICE_DPC)
          return "delta";
        if (n === Ie.IDR)
          return "key";
        if (n === Ie.SEI && (!Ki() || pc() >= 144)) {
          const a = t.subarray(i.offset, i.offset + i.length), o = hi(a);
          let c = 1;
          do {
            let l = 0;
            for (; ; ) {
              const h = o[c++];
              if (h === void 0 || (l += h, h < 255))
                break;
            }
            let d = 0;
            for (; ; ) {
              const h = o[c++];
              if (h === void 0 || (d += h, h < 255))
                break;
            }
            if (l === 6) {
              const h = new V(o);
              h.pos = 8 * c;
              const m = v(h), g = h.readBits(1);
              if (m === 0 && g === 1)
                return "key";
            }
            c += d;
          } while (c < o.length - 1);
        }
      }
      return "delta";
    }
    case "hevc": {
      for (const i of fa(t, e)) {
        const s = vt(t[i.offset]);
        if (s < ie.BLA_W_LP)
          return "delta";
        if (s <= ie.RSV_IRAP_VCL23)
          return "key";
      }
      return "delta";
    }
    case "vp8":
      return (t[0] & 1) === 0 ? "key" : "delta";
    case "vp9": {
      const i = new V(t);
      if (i.readBits(2) !== 2)
        return null;
      const s = i.readBits(1);
      return (i.readBits(1) << 1) + s === 3 && i.skipBits(1), i.readBits(1) ? null : i.readBits(1) === 0 ? "key" : "delta";
    }
    case "av1": {
      let i = !1;
      for (const { type: s, data: n } of ga(t))
        if (s === 1) {
          const a = new V(n);
          a.skipBits(4), i = !!a.readBits(1);
        } else if (s === 3 || s === 6 || s === 7) {
          if (i)
            return "key";
          const a = new V(n);
          return a.readBits(1) ? null : a.readBits(2) === 0 ? "key" : "delta";
        }
      return null;
    }
    default:
      ge(r), p(!1);
  }
};
var Ye;
(function(r) {
  r[r.STREAMINFO = 0] = "STREAMINFO", r[r.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", r[r.PICTURE = 6] = "PICTURE";
})(Ye || (Ye = {}));
const ts = (r, e) => {
  const t = L(r);
  let i = 0;
  const s = t.getUint32(i, !0);
  i += 4;
  const n = Ee.decode(r.subarray(i, i + s));
  i += s, s > 0 && (e.raw ??= {}, e.raw.vendor ??= n);
  const a = t.getUint32(i, !0);
  i += 4;
  for (let o = 0; o < a; o++) {
    const c = t.getUint32(i, !0);
    i += 4;
    const l = Ee.decode(r.subarray(i, i + c));
    i += c;
    const d = l.indexOf("=");
    if (d === -1)
      continue;
    const u = l.slice(0, d).toUpperCase(), h = l.slice(d + 1);
    switch (e.raw ??= {}, e.raw[u] ??= h, u) {
      case "TITLE":
        e.title ??= h;
        break;
      case "DESCRIPTION":
        e.description ??= h;
        break;
      case "ARTIST":
        e.artist ??= h;
        break;
      case "ALBUM":
        e.album ??= h;
        break;
      case "ALBUMARTIST":
        e.albumArtist ??= h;
        break;
      case "COMMENT":
        e.comment ??= h;
        break;
      case "LYRICS":
        e.lyrics ??= h;
        break;
      case "TRACKNUMBER":
        {
          const m = h.split("/"), g = Number.parseInt(m[0], 10), f = m[1] && Number.parseInt(m[1], 10);
          Number.isInteger(g) && g > 0 && (e.trackNumber ??= g), f && Number.isInteger(f) && f > 0 && (e.tracksTotal ??= f);
        }
        break;
      case "TRACKTOTAL":
        {
          const m = Number.parseInt(h, 10);
          Number.isInteger(m) && m > 0 && (e.tracksTotal ??= m);
        }
        break;
      case "DISCNUMBER":
        {
          const m = h.split("/"), g = Number.parseInt(m[0], 10), f = m[1] && Number.parseInt(m[1], 10);
          Number.isInteger(g) && g > 0 && (e.discNumber ??= g), f && Number.isInteger(f) && f > 0 && (e.discsTotal ??= f);
        }
        break;
      case "DISCTOTAL":
        {
          const m = Number.parseInt(h, 10);
          Number.isInteger(m) && m > 0 && (e.discsTotal ??= m);
        }
        break;
      case "DATE":
        {
          const m = new Date(h);
          Number.isNaN(m.getTime()) || (e.date ??= m);
        }
        break;
      case "GENRE":
        e.genre ??= h;
        break;
      case "METADATA_BLOCK_PICTURE":
        {
          const m = wc(h), g = L(m), f = g.getUint32(0, !1), w = g.getUint32(4, !1), k = String.fromCharCode(...m.subarray(8, 8 + w)), b = g.getUint32(8 + w, !1), T = Ee.decode(m.subarray(12 + w, 12 + w + b)), S = g.getUint32(w + b + 28), x = m.subarray(w + b + 32, w + b + 32 + S);
          e.images ??= [], e.images.push({
            data: x,
            mimeType: k,
            kind: f === 3 ? "coverFront" : f === 4 ? "coverBack" : "unknown",
            name: void 0,
            description: T || void 0
          });
        }
        break;
    }
  }
}, rs = (r, e, t) => {
  const i = [
    r
  ], n = J.encode("Mediabunny");
  let a = new Uint8Array(4 + n.length), o = new DataView(a.buffer);
  o.setUint32(0, n.length, !0), a.set(n, 4), i.push(a);
  const c = /* @__PURE__ */ new Set(), l = (g, f) => {
    const w = `${g}=${f}`, k = J.encode(w);
    a = new Uint8Array(4 + k.length), o = new DataView(a.buffer), o.setUint32(0, k.length, !0), a.set(k, 4), i.push(a), c.add(g);
  };
  for (const { key: g, value: f } of er(e))
    switch (g) {
      case "title":
        l("TITLE", f);
        break;
      case "description":
        l("DESCRIPTION", f);
        break;
      case "artist":
        l("ARTIST", f);
        break;
      case "album":
        l("ALBUM", f);
        break;
      case "albumArtist":
        l("ALBUMARTIST", f);
        break;
      case "genre":
        l("GENRE", f);
        break;
      case "date":
        {
          const w = e.raw?.DATE ?? e.raw?.date;
          w && typeof w == "string" ? l("DATE", w) : l("DATE", f.toISOString().slice(0, 10));
        }
        break;
      case "comment":
        l("COMMENT", f);
        break;
      case "lyrics":
        l("LYRICS", f);
        break;
      case "trackNumber":
        l("TRACKNUMBER", f.toString());
        break;
      case "tracksTotal":
        l("TRACKTOTAL", f.toString());
        break;
      case "discNumber":
        l("DISCNUMBER", f.toString());
        break;
      case "discsTotal":
        l("DISCTOTAL", f.toString());
        break;
      case "images":
        {
          if (!t)
            break;
          for (const w of f) {
            const k = w.kind === "coverFront" ? 3 : w.kind === "coverBack" ? 4 : 0, b = new Uint8Array(w.mimeType.length);
            for (let _ = 0; _ < w.mimeType.length; _++)
              b[_] = w.mimeType.charCodeAt(_);
            const T = J.encode(w.description ?? ""), S = new Uint8Array(8 + b.length + 4 + T.length + 16 + 4 + w.data.length), x = L(S);
            x.setUint32(0, k, !1), x.setUint32(4, b.length, !1), S.set(b, 8), x.setUint32(8 + b.length, T.length, !1), S.set(T, 12 + b.length), x.setUint32(28 + b.length + T.length, w.data.length, !1), S.set(w.data, 32 + b.length + T.length);
            const P = bc(S);
            l("METADATA_BLOCK_PICTURE", P);
          }
        }
        break;
      case "raw":
        break;
      default:
        ge(g);
    }
  if (e.raw)
    for (const g in e.raw) {
      const f = e.raw[g] ?? e.raw[g.toLowerCase()];
      g === "vendor" || f == null || c.has(g) || typeof f == "string" && l(g, f);
    }
  const d = new Uint8Array(4);
  L(d).setUint32(0, c.size, !0), i.splice(2, 0, d);
  const u = i.reduce((g, f) => g + f.length, 0), h = new Uint8Array(u);
  let m = 0;
  for (const g of i)
    h.set(g, m), m += g.length;
  return h;
}, Rs = [2, 1, 2, 3, 3, 4, 4, 5], ya = (r) => {
  if (r.length < 7 || r[0] !== 11 || r[1] !== 119)
    return null;
  const e = new V(r);
  e.skipBits(16), e.skipBits(16);
  const t = e.readBits(2);
  if (t === 3)
    return null;
  const i = e.readBits(6), s = e.readBits(5);
  if (s > 8)
    return null;
  const n = e.readBits(3), a = e.readBits(3);
  (a & 1) !== 0 && a !== 1 && e.skipBits(2), (a & 4) !== 0 && e.skipBits(2), a === 2 && e.skipBits(2);
  const o = e.readBits(1), c = Math.floor(i / 2);
  return { fscod: t, bsid: s, bsmod: n, acmod: a, lfeon: o, bitRateCode: c };
}, Xc = [
  // frmsizecod, [48kHz, 44.1kHz, 32kHz] in bytes
  64 * 2,
  69 * 2,
  96 * 2,
  64 * 2,
  70 * 2,
  96 * 2,
  80 * 2,
  87 * 2,
  120 * 2,
  80 * 2,
  88 * 2,
  120 * 2,
  96 * 2,
  104 * 2,
  144 * 2,
  96 * 2,
  105 * 2,
  144 * 2,
  112 * 2,
  121 * 2,
  168 * 2,
  112 * 2,
  122 * 2,
  168 * 2,
  128 * 2,
  139 * 2,
  192 * 2,
  128 * 2,
  140 * 2,
  192 * 2,
  160 * 2,
  174 * 2,
  240 * 2,
  160 * 2,
  175 * 2,
  240 * 2,
  192 * 2,
  208 * 2,
  288 * 2,
  192 * 2,
  209 * 2,
  288 * 2,
  224 * 2,
  243 * 2,
  336 * 2,
  224 * 2,
  244 * 2,
  336 * 2,
  256 * 2,
  278 * 2,
  384 * 2,
  256 * 2,
  279 * 2,
  384 * 2,
  320 * 2,
  348 * 2,
  480 * 2,
  320 * 2,
  349 * 2,
  480 * 2,
  384 * 2,
  417 * 2,
  576 * 2,
  384 * 2,
  418 * 2,
  576 * 2,
  448 * 2,
  487 * 2,
  672 * 2,
  448 * 2,
  488 * 2,
  672 * 2,
  512 * 2,
  557 * 2,
  768 * 2,
  512 * 2,
  558 * 2,
  768 * 2,
  640 * 2,
  696 * 2,
  960 * 2,
  640 * 2,
  697 * 2,
  960 * 2,
  768 * 2,
  835 * 2,
  1152 * 2,
  768 * 2,
  836 * 2,
  1152 * 2,
  896 * 2,
  975 * 2,
  1344 * 2,
  896 * 2,
  976 * 2,
  1344 * 2,
  1024 * 2,
  1114 * 2,
  1536 * 2,
  1024 * 2,
  1115 * 2,
  1536 * 2,
  1152 * 2,
  1253 * 2,
  1728 * 2,
  1152 * 2,
  1254 * 2,
  1728 * 2,
  1280 * 2,
  1393 * 2,
  1920 * 2,
  1280 * 2,
  1394 * 2,
  1920 * 2
], Yc = 1536, zr = new Uint8Array([5, 4, 65, 67, 45, 51]), Dr = new Uint8Array([5, 4, 69, 65, 67, 51]), Ta = [1, 2, 3, 6], Sa = (r) => {
  if (r.length < 6 || r[0] !== 11 || r[1] !== 119)
    return null;
  const e = new V(r);
  e.skipBits(16);
  const t = e.readBits(2);
  if (e.skipBits(3), t !== 0 && t !== 2)
    return null;
  const i = e.readBits(11), s = e.readBits(2);
  let n = 0, a;
  s === 3 ? (n = e.readBits(2), a = 3) : a = e.readBits(2);
  const o = e.readBits(3), c = e.readBits(1), l = e.readBits(5);
  if (l < 11 || l > 16)
    return null;
  const d = Ta[a];
  let u;
  return s < 3 ? u = ui[s] / 1e3 : u = ca[n] / 1e3, {
    dataRate: Math.round((i + 1) * u / (d * 16)),
    substreams: [{
      fscod: s,
      fscod2: n,
      bsid: l,
      bsmod: 0,
      acmod: o,
      lfeon: c,
      numDepSub: 0,
      chanLoc: 0
    }]
  };
}, Zc = (r) => {
  if (r.length < 2)
    return null;
  const e = new V(r), t = e.readBits(13), i = e.readBits(3), s = [];
  for (let n = 0; n <= i && !(Math.ceil(e.pos / 8) + 3 > r.length); n++) {
    const a = e.readBits(2), o = e.readBits(5);
    e.skipBits(1), e.skipBits(1);
    const c = e.readBits(3), l = e.readBits(3), d = e.readBits(1);
    e.skipBits(3);
    const u = e.readBits(4);
    let h = 0;
    u > 0 ? h = e.readBits(9) : e.skipBits(1), s.push({
      fscod: a,
      fscod2: null,
      bsid: o,
      bsmod: c,
      acmod: l,
      lfeon: d,
      numDepSub: u,
      chanLoc: h
    });
  }
  return s.length === 0 ? null : { dataRate: t, substreams: s };
}, xa = (r) => {
  const e = r.substreams[0];
  return p(e), e.fscod < 3 ? ui[e.fscod] : e.fscod2 !== null && e.fscod2 < 3 ? ca[e.fscod2] : null;
}, Pa = (r) => {
  const e = r.substreams[0];
  p(e);
  let t = Rs[e.acmod] + e.lfeon;
  if (e.numDepSub > 0) {
    const i = [2, 2, 1, 1, 2, 2, 2, 1, 1];
    for (let s = 0; s < 9; s++)
      e.chanLoc & 1 << 8 - s && (t += i[s]);
  }
  return t;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class mt {
  constructor(e) {
    this.input = e;
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Ca {
  /** Returns true if and only if the decoder can decode the given codec configuration. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static supports(e, t) {
    return !1;
  }
}
class _a {
  /** Returns true if and only if the decoder can decode the given codec configuration. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static supports(e, t) {
    return !1;
  }
}
class Ia {
  /** Returns true if and only if the encoder can encode the given codec configuration. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static supports(e, t) {
    return !1;
  }
}
class Ea {
  /** Returns true if and only if the encoder can encode the given codec configuration. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static supports(e, t) {
    return !1;
  }
}
const $r = [], Qr = [], Pr = [], Cr = [], Jc = (r) => {
  if (r.prototype instanceof Ca) {
    const e = r;
    if ($r.includes(e)) {
      console.warn("Video decoder already registered.");
      return;
    }
    $r.push(e);
  } else if (r.prototype instanceof _a) {
    const e = r;
    if (Qr.includes(e)) {
      console.warn("Audio decoder already registered.");
      return;
    }
    Qr.push(e);
  } else
    throw new TypeError("Decoder must be a CustomVideoDecoder or CustomAudioDecoder.");
}, el = (r) => {
  if (r.prototype instanceof Ia) {
    const e = r;
    if (Pr.includes(e)) {
      console.warn("Video encoder already registered.");
      return;
    }
    Pr.push(e);
  } else if (r.prototype instanceof Ea) {
    const e = r;
    if (Cr.includes(e)) {
      console.warn("Audio encoder already registered.");
      return;
    }
    Cr.push(e);
  } else
    throw new TypeError("Encoder must be a CustomVideoEncoder or CustomAudioEncoder.");
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Ce = /* @__PURE__ */ new Uint8Array(0);
class X {
  /** Creates a new {@link EncodedPacket} from raw bytes and timing information. */
  constructor(e, t, i, s, n = -1, a, o) {
    if (this.data = e, this.type = t, this.timestamp = i, this.duration = s, this.sequenceNumber = n, e === Ce && a === void 0)
      throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
    if (a === void 0 && (a = e.byteLength), !(e instanceof Uint8Array))
      throw new TypeError("data must be a Uint8Array.");
    if (t !== "key" && t !== "delta")
      throw new TypeError('type must be either "key" or "delta".');
    if (!Number.isFinite(i))
      throw new TypeError("timestamp must be a number.");
    if (!Number.isFinite(s) || s < 0)
      throw new TypeError("duration must be a non-negative number.");
    if (!Number.isFinite(n))
      throw new TypeError("sequenceNumber must be a number.");
    if (!Number.isInteger(a) || a < 0)
      throw new TypeError("byteLength must be a non-negative integer.");
    if (o !== void 0 && (typeof o != "object" || !o))
      throw new TypeError("sideData, when provided, must be an object.");
    if (o?.alpha !== void 0 && !(o.alpha instanceof Uint8Array))
      throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
    if (o?.alphaByteLength !== void 0 && (!Number.isInteger(o.alphaByteLength) || o.alphaByteLength < 0))
      throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
    this.byteLength = a, this.sideData = o ?? {}, this.sideData.alpha && this.sideData.alphaByteLength === void 0 && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength);
  }
  /**
   * If this packet is a metadata-only packet. Metadata-only packets don't contain their packet data. They are the
   * result of retrieving packets with {@link PacketRetrievalOptions.metadataOnly} set to `true`.
   */
  get isMetadataOnly() {
    return this.data === Ce;
  }
  /** The timestamp of this packet in microseconds. */
  get microsecondTimestamp() {
    return Math.trunc(ct * this.timestamp);
  }
  /** The duration of this packet in microseconds. */
  get microsecondDuration() {
    return Math.trunc(ct * this.duration);
  }
  /** Converts this packet to an
   * [`EncodedVideoChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk) for use with the
   * WebCodecs API. */
  toEncodedVideoChunk() {
    if (this.isMetadataOnly)
      throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
    if (typeof EncodedVideoChunk > "u")
      throw new Error("Your browser does not support EncodedVideoChunk.");
    return new EncodedVideoChunk({
      data: this.data,
      type: this.type,
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration
    });
  }
  /**
   * Converts this packet to an
   * [`EncodedVideoChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk) for use with the
   * WebCodecs API, using the alpha side data instead of the color data. Throws if no alpha side data is defined.
   */
  alphaToEncodedVideoChunk(e = this.type) {
    if (!this.sideData.alpha)
      throw new TypeError("This packet does not contain alpha side data.");
    if (this.isMetadataOnly)
      throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
    if (typeof EncodedVideoChunk > "u")
      throw new Error("Your browser does not support EncodedVideoChunk.");
    return new EncodedVideoChunk({
      data: this.sideData.alpha,
      type: e,
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration
    });
  }
  /** Converts this packet to an
   * [`EncodedAudioChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedAudioChunk) for use with the
   * WebCodecs API. */
  toEncodedAudioChunk() {
    if (this.isMetadataOnly)
      throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");
    if (typeof EncodedAudioChunk > "u")
      throw new Error("Your browser does not support EncodedAudioChunk.");
    return new EncodedAudioChunk({
      data: this.data,
      type: this.type,
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration
    });
  }
  /**
   * Creates an {@link EncodedPacket} from an
   * [`EncodedVideoChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedVideoChunk) or
   * [`EncodedAudioChunk`](https://developer.mozilla.org/en-US/docs/Web/API/EncodedAudioChunk). This method is useful
   * for converting chunks from the WebCodecs API to `EncodedPacket` instances.
   */
  static fromEncodedChunk(e, t) {
    if (!(e instanceof EncodedVideoChunk || e instanceof EncodedAudioChunk))
      throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
    const i = new Uint8Array(e.byteLength);
    return e.copyTo(i), new X(i, e.type, e.timestamp / 1e6, (e.duration ?? 0) / 1e6, void 0, void 0, t);
  }
  /** Clones this packet while optionally modifying the new packet's data. */
  clone(e) {
    if (e !== void 0 && (typeof e != "object" || e === null))
      throw new TypeError("options, when provided, must be an object.");
    if (e?.data !== void 0 && !(e.data instanceof Uint8Array))
      throw new TypeError("options.data, when provided, must be a Uint8Array.");
    if (e?.type !== void 0 && e.type !== "key" && e.type !== "delta")
      throw new TypeError('options.type, when provided, must be either "key" or "delta".');
    if (e?.timestamp !== void 0 && !Number.isFinite(e.timestamp))
      throw new TypeError("options.timestamp, when provided, must be a number.");
    if (e?.duration !== void 0 && !Number.isFinite(e.duration))
      throw new TypeError("options.duration, when provided, must be a number.");
    if (e?.sequenceNumber !== void 0 && !Number.isFinite(e.sequenceNumber))
      throw new TypeError("options.sequenceNumber, when provided, must be a number.");
    if (e?.sideData !== void 0 && (typeof e.sideData != "object" || e.sideData === null))
      throw new TypeError("options.sideData, when provided, must be an object.");
    return new X(e?.data ?? this.data, e?.type ?? this.type, e?.timestamp ?? this.timestamp, e?.duration ?? this.duration, e?.sequenceNumber ?? this.sequenceNumber, this.byteLength, e?.sideData ?? this.sideData);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const tl = (r) => {
  let i = r, s = 4096, n = 0, a = 12, o = 0;
  for (i < 0 && (i = -i, n = 128), i += 33, i > 8191 && (i = 8191); (i & s) !== s && a >= 5; )
    s >>= 1, a--;
  return o = i >> a - 4 & 15, ~(n | a - 5 << 4 | o) & 255;
}, rl = (r) => {
  let t = 0, i = 0, s = ~r;
  s & 128 && (s &= -129, t = -1), i = ((s & 240) >> 4) + 5;
  const n = (1 << i | (s & 15) << i - 4 | 1 << i - 5) - 33;
  return t === 0 ? n : -n;
}, il = (r) => {
  let t = 2048, i = 0, s = 11, n = 0, a = r;
  for (a < 0 && (a = -a, i = 128), a > 4095 && (a = 4095); (a & t) !== t && s >= 5; )
    t >>= 1, s--;
  return n = a >> (s === 4 ? 1 : s - 4) & 15, (i | s - 4 << 4 | n) ^ 85;
}, sl = (r) => {
  let e = 0, t = 0, i = r ^ 85;
  i & 128 && (i &= -129, e = -1), t = ((i & 240) >> 4) + 4;
  let s = 0;
  return t !== 4 ? s = 1 << t | (i & 15) << t - 4 | 1 << t - 5 : s = i << 1 | 1, e === 0 ? s : -s;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
Jn();
let Cn = -1 / 0, _n = -1 / 0, _r = null;
typeof FinalizationRegistry < "u" && (_r = new FinalizationRegistry((r) => {
  const e = Date.now();
  r.type === "video" ? (e - Cn >= 1e3 && (console.error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), Cn = e), typeof VideoFrame < "u" && r.data instanceof VideoFrame && r.data.close()) : (e - _n >= 1e3 && (console.error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), _n = e), typeof AudioData < "u" && r.data instanceof AudioData && r.data.close());
}));
const Ms = [
  // 4:2:0 Y, U, V
  "I420",
  "I420P10",
  "I420P12",
  // 4:2:0 Y, U, V, A
  "I420A",
  "I420AP10",
  "I420AP12",
  // 4:2:2 Y, U, V
  "I422",
  "I422P10",
  "I422P12",
  // 4:2:2 Y, U, V, A
  "I422A",
  "I422AP10",
  "I422AP12",
  // 4:4:4 Y, U, V
  "I444",
  "I444P10",
  "I444P12",
  // 4:4:4 Y, U, V, A
  "I444A",
  "I444AP10",
  "I444AP12",
  // 4:2:0 Y, UV
  "NV12",
  // 4:4:4 RGBA
  "RGBA",
  // 4:4:4 RGBX (opaque)
  "RGBX",
  // 4:4:4 BGRA
  "BGRA",
  // 4:4:4 BGRX (opaque)
  "BGRX"
], nl = new Set(Ms);
class ae {
  /** The width of the frame in pixels. */
  get codedWidth() {
    return this.visibleRect.width;
  }
  /** The height of the frame in pixels. */
  get codedHeight() {
    return this.visibleRect.height;
  }
  /** The display width of the frame in pixels, after aspect ratio adjustment and rotation. */
  get displayWidth() {
    return this.rotation % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight;
  }
  /** The display height of the frame in pixels, after aspect ratio adjustment and rotation. */
  get displayHeight() {
    return this.rotation % 180 === 0 ? this.squarePixelHeight : this.squarePixelWidth;
  }
  /** The presentation timestamp of the frame in microseconds. */
  get microsecondTimestamp() {
    return Math.trunc(ct * this.timestamp);
  }
  /** The duration of the frame in microseconds. */
  get microsecondDuration() {
    return Math.trunc(ct * this.duration);
  }
  /**
   * Whether this sample uses a pixel format that can hold transparency data. Note that this doesn't necessarily mean
   * that the sample is transparent.
   */
  get hasAlpha() {
    return this.format && this.format.includes("A");
  }
  constructor(e, t) {
    if (this._closed = !1, e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer || ArrayBuffer.isView(e)) {
      if (!t || typeof t != "object")
        throw new TypeError("init must be an object.");
      if (t.format === void 0 || !nl.has(t.format))
        throw new TypeError("init.format must be one of: " + Ms.join(", "));
      if (!Number.isInteger(t.codedWidth) || t.codedWidth <= 0)
        throw new TypeError("init.codedWidth must be a positive integer.");
      if (!Number.isInteger(t.codedHeight) || t.codedHeight <= 0)
        throw new TypeError("init.codedHeight must be a positive integer.");
      if (t.rotation !== void 0 && ![0, 90, 180, 270].includes(t.rotation))
        throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      if (!Number.isFinite(t.timestamp))
        throw new TypeError("init.timestamp must be a number.");
      if (t.duration !== void 0 && (!Number.isFinite(t.duration) || t.duration < 0))
        throw new TypeError("init.duration, when provided, must be a non-negative number.");
      if (t.layout !== void 0) {
        if (!Array.isArray(t.layout))
          throw new TypeError("init.layout, when provided, must be an array.");
        for (const i of t.layout) {
          if (!i || typeof i != "object" || Array.isArray(i))
            throw new TypeError("Each entry in init.layout must be an object.");
          if (!Number.isInteger(i.offset) || i.offset < 0)
            throw new TypeError("plane.offset must be a non-negative integer.");
          if (!Number.isInteger(i.stride) || i.stride < 0)
            throw new TypeError("plane.stride must be a non-negative integer.");
        }
      }
      if (t.visibleRect !== void 0 && wn(t.visibleRect, "init.visibleRect"), t.displayWidth !== void 0 && (!Number.isInteger(t.displayWidth) || t.displayWidth <= 0))
        throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
      if (t.displayHeight !== void 0 && (!Number.isInteger(t.displayHeight) || t.displayHeight <= 0))
        throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
      if (t.displayWidth !== void 0 != (t.displayHeight !== void 0))
        throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
      this._data = Z(e).slice(), this._layout = t.layout ?? al(t.format, t.codedWidth, t.codedHeight), this.format = t.format, this.rotation = t.rotation ?? 0, this.timestamp = t.timestamp, this.duration = t.duration ?? 0, this.colorSpace = new Ur(t.colorSpace), this.visibleRect = {
        left: t.visibleRect?.left ?? 0,
        top: t.visibleRect?.top ?? 0,
        width: t.visibleRect?.width ?? t.codedWidth,
        height: t.visibleRect?.height ?? t.codedHeight
      }, t.displayWidth !== void 0 ? (this.squarePixelWidth = this.rotation % 180 === 0 ? t.displayWidth : t.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? t.displayHeight : t.displayWidth) : (this.squarePixelWidth = this.codedWidth, this.squarePixelHeight = this.codedHeight);
    } else if (typeof VideoFrame < "u" && e instanceof VideoFrame) {
      if (t?.rotation !== void 0 && ![0, 90, 180, 270].includes(t.rotation))
        throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      if (t?.timestamp !== void 0 && !Number.isFinite(t?.timestamp))
        throw new TypeError("init.timestamp, when provided, must be a number.");
      if (t?.duration !== void 0 && (!Number.isFinite(t.duration) || t.duration < 0))
        throw new TypeError("init.duration, when provided, must be a non-negative number.");
      t?.visibleRect !== void 0 && wn(t.visibleRect, "init.visibleRect"), this._data = e, this._layout = null, this.format = e.format, this.visibleRect = {
        left: e.visibleRect?.x ?? 0,
        top: e.visibleRect?.y ?? 0,
        width: e.visibleRect?.width ?? e.codedWidth,
        height: e.visibleRect?.height ?? e.codedHeight
      }, this.rotation = t?.rotation ?? 0, this.squarePixelWidth = e.displayWidth, this.squarePixelHeight = e.displayHeight, this.timestamp = t?.timestamp ?? e.timestamp / 1e6, this.duration = t?.duration ?? (e.duration ?? 0) / 1e6, this.colorSpace = new Ur(e.colorSpace);
    } else if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof SVGImageElement < "u" && e instanceof SVGImageElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas) {
      if (!t || typeof t != "object")
        throw new TypeError("init must be an object.");
      if (t.rotation !== void 0 && ![0, 90, 180, 270].includes(t.rotation))
        throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      if (!Number.isFinite(t.timestamp))
        throw new TypeError("init.timestamp must be a number.");
      if (t.duration !== void 0 && (!Number.isFinite(t.duration) || t.duration < 0))
        throw new TypeError("init.duration, when provided, must be a non-negative number.");
      if (typeof VideoFrame < "u")
        return new ae(new VideoFrame(e, {
          timestamp: Math.trunc(t.timestamp * ct),
          // Drag 0 to undefined
          duration: Math.trunc((t.duration ?? 0) * ct) || void 0
        }), t);
      let i = 0, s = 0;
      if ("naturalWidth" in e ? (i = e.naturalWidth, s = e.naturalHeight) : "videoWidth" in e ? (i = e.videoWidth, s = e.videoHeight) : "width" in e && (i = Number(e.width), s = Number(e.height)), !i || !s)
        throw new TypeError("Could not determine dimensions.");
      const n = new OffscreenCanvas(i, s), a = n.getContext("2d", {
        alpha: Xt(),
        // Firefox has VideoFrame glitches with opaque canvases
        willReadFrequently: !0
      });
      p(a), a.drawImage(e, 0, 0), this._data = n, this._layout = null, this.format = "RGBX", this.visibleRect = { left: 0, top: 0, width: i, height: s }, this.squarePixelWidth = i, this.squarePixelHeight = s, this.rotation = t.rotation ?? 0, this.timestamp = t.timestamp, this.duration = t.duration ?? 0, this.colorSpace = new Ur({
        matrix: "rgb",
        primaries: "bt709",
        transfer: "iec61966-2-1",
        fullRange: !0
      });
    } else
      throw new TypeError("Invalid data type: Must be a BufferSource or CanvasImageSource.");
    this.pixelAspectRatio = ai({
      num: this.squarePixelWidth * this.codedHeight,
      den: this.squarePixelHeight * this.codedWidth
    }), _r?.register(this, { type: "video", data: this._data }, this);
  }
  /** Clones this video sample. */
  clone() {
    if (this._closed)
      throw new Error("VideoSample is closed.");
    return p(this._data !== null), bt(this._data) ? new ae(this._data.clone(), {
      timestamp: this.timestamp,
      duration: this.duration,
      rotation: this.rotation
    }) : this._data instanceof Uint8Array ? (p(this._layout), new ae(this._data, {
      format: this.format,
      layout: this._layout,
      codedWidth: this.codedWidth,
      codedHeight: this.codedHeight,
      timestamp: this.timestamp,
      duration: this.duration,
      colorSpace: this.colorSpace,
      rotation: this.rotation,
      visibleRect: this.visibleRect,
      displayWidth: this.displayWidth,
      displayHeight: this.displayHeight
    })) : new ae(this._data, {
      format: this.format,
      codedWidth: this.codedWidth,
      codedHeight: this.codedHeight,
      timestamp: this.timestamp,
      duration: this.duration,
      colorSpace: this.colorSpace,
      rotation: this.rotation,
      visibleRect: this.visibleRect,
      displayWidth: this.displayWidth,
      displayHeight: this.displayHeight
    });
  }
  /**
   * Closes this video sample, releasing held resources. Video samples should be closed as soon as they are not
   * needed anymore.
   */
  close() {
    this._closed || (_r?.unregister(this), bt(this._data) ? this._data.close() : this._data = null, this._closed = !0);
  }
  /**
   * Returns the number of bytes required to hold this video sample's pixel data. Throws if `format` is `null`.
   */
  allocationSize(e = {}) {
    if (In(e), this._closed)
      throw new Error("VideoSample is closed.");
    if (this.format === null)
      throw new Error("Cannot get allocation size when format is null. Sorry!");
    if (p(this._data !== null), !bt(this._data) && (e.colorSpace || e.format && e.format !== this.format || e.layout || e.rect)) {
      const t = this.toVideoFrame(), i = t.allocationSize(e);
      return t.close(), i;
    }
    return bt(this._data) ? this._data.allocationSize(e) : this._data instanceof Uint8Array ? this._data.byteLength : this.codedWidth * this.codedHeight * 4;
  }
  /**
   * Copies this video sample's pixel data to an ArrayBuffer or ArrayBufferView. Throws if `format` is `null`.
   * @returns The byte layout of the planes of the copied data.
   */
  async copyTo(e, t = {}) {
    if (!ri(e))
      throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
    if (In(t), this._closed)
      throw new Error("VideoSample is closed.");
    if (this.format === null)
      throw new Error("Cannot copy video sample data when format is null. Sorry!");
    if (p(this._data !== null), !bt(this._data) && (t.colorSpace || t.format && t.format !== this.format || t.layout || t.rect)) {
      const i = this.toVideoFrame(), s = await i.copyTo(e, t);
      return i.close(), s;
    }
    if (bt(this._data))
      return this._data.copyTo(e, t);
    if (this._data instanceof Uint8Array)
      return p(this._layout), Z(e).set(this._data), this._layout;
    {
      const s = this._data.getContext("2d");
      p(s);
      const n = s.getImageData(0, 0, this.codedWidth, this.codedHeight);
      return Z(e).set(n.data), [{
        offset: 0,
        stride: 4 * this.codedWidth
      }];
    }
  }
  /**
   * Converts this video sample to a VideoFrame for use with the WebCodecs API. The VideoFrame returned by this
   * method *must* be closed separately from this video sample.
   */
  toVideoFrame() {
    if (this._closed)
      throw new Error("VideoSample is closed.");
    return p(this._data !== null), bt(this._data) ? new VideoFrame(this._data, {
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration || void 0
      // Drag 0 duration to undefined, glitches some codecs
    }) : this._data instanceof Uint8Array ? new VideoFrame(this._data, {
      format: this.format,
      codedWidth: this.codedWidth,
      codedHeight: this.codedHeight,
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration || void 0,
      colorSpace: this.colorSpace
    }) : new VideoFrame(this._data, {
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration || void 0
    });
  }
  draw(e, t, i, s, n, a, o, c, l) {
    let d = 0, u = 0, h = this.displayWidth, m = this.displayHeight, g = 0, f = 0, w = this.displayWidth, k = this.displayHeight;
    if (a !== void 0 ? (d = t, u = i, h = s, m = n, g = a, f = o, c !== void 0 ? (w = c, k = l) : (w = h, k = m)) : (g = t, f = i, s !== void 0 && (w = s, k = n)), !(typeof CanvasRenderingContext2D < "u" && e instanceof CanvasRenderingContext2D || typeof OffscreenCanvasRenderingContext2D < "u" && e instanceof OffscreenCanvasRenderingContext2D))
      throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
    if (!Number.isFinite(d))
      throw new TypeError("sx must be a number.");
    if (!Number.isFinite(u))
      throw new TypeError("sy must be a number.");
    if (!Number.isFinite(h) || h < 0)
      throw new TypeError("sWidth must be a non-negative number.");
    if (!Number.isFinite(m) || m < 0)
      throw new TypeError("sHeight must be a non-negative number.");
    if (!Number.isFinite(g))
      throw new TypeError("dx must be a number.");
    if (!Number.isFinite(f))
      throw new TypeError("dy must be a number.");
    if (!Number.isFinite(w) || w < 0)
      throw new TypeError("dWidth must be a non-negative number.");
    if (!Number.isFinite(k) || k < 0)
      throw new TypeError("dHeight must be a non-negative number.");
    if (this._closed)
      throw new Error("VideoSample is closed.");
    ({ sx: d, sy: u, sWidth: h, sHeight: m } = this._rotateSourceRegion(d, u, h, m, this.rotation));
    const b = this.toCanvasImageSource();
    e.save();
    const T = g + w / 2, S = f + k / 2;
    e.translate(T, S), e.rotate(this.rotation * Math.PI / 180);
    const x = this.rotation % 180 === 0 ? 1 : w / k;
    e.scale(1 / x, x), e.drawImage(b, d, u, h, m, -w / 2, -k / 2, w, k), e.restore();
  }
  /**
   * Draws the sample in the middle of the canvas corresponding to the context with the specified fit behavior.
   */
  drawWithFit(e, t) {
    if (!(typeof CanvasRenderingContext2D < "u" && e instanceof CanvasRenderingContext2D || typeof OffscreenCanvasRenderingContext2D < "u" && e instanceof OffscreenCanvasRenderingContext2D))
      throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
    if (!t || typeof t != "object")
      throw new TypeError("options must be an object.");
    if (!["fill", "contain", "cover"].includes(t.fit))
      throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
    if (t.rotation !== void 0 && ![0, 90, 180, 270].includes(t.rotation))
      throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
    t.crop !== void 0 && Ds(t.crop, "options.");
    const i = e.canvas.width, s = e.canvas.height, n = t.rotation ?? this.rotation, [a, o] = n % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
    t.crop && zs(t.crop, a, o);
    let c, l, d, u;
    const { sx: h, sy: m, sWidth: g, sHeight: f } = this._rotateSourceRegion(t.crop?.left ?? 0, t.crop?.top ?? 0, t.crop?.width ?? a, t.crop?.height ?? o, n);
    if (t.fit === "fill")
      c = 0, l = 0, d = i, u = s;
    else {
      const [k, b] = t.crop ? [t.crop.width, t.crop.height] : [a, o], T = t.fit === "contain" ? Math.min(i / k, s / b) : Math.max(i / k, s / b);
      d = k * T, u = b * T, c = (i - d) / 2, l = (s - u) / 2;
    }
    e.save();
    const w = n % 180 === 0 ? 1 : d / u;
    e.translate(i / 2, s / 2), e.rotate(n * Math.PI / 180), e.scale(1 / w, w), e.translate(-i / 2, -s / 2), e.drawImage(this.toCanvasImageSource(), h, m, g, f, c, l, d, u), e.restore();
  }
  /** @internal */
  _rotateSourceRegion(e, t, i, s, n) {
    return n === 90 ? [e, t, i, s] = [
      t,
      this.squarePixelHeight - e - i,
      s,
      i
    ] : n === 180 ? [e, t] = [
      this.squarePixelWidth - e - i,
      this.squarePixelHeight - t - s
    ] : n === 270 && ([e, t, i, s] = [
      this.squarePixelWidth - t - s,
      e,
      s,
      i
    ]), { sx: e, sy: t, sWidth: i, sHeight: s };
  }
  /**
   * Converts this video sample to a
   * [`CanvasImageSource`](https://udn.realityripple.com/docs/Web/API/CanvasImageSource) for drawing to a canvas.
   *
   * You must use the value returned by this method immediately, as any VideoFrame created internally will
   * automatically be closed in the next microtask.
   */
  toCanvasImageSource() {
    if (this._closed)
      throw new Error("VideoSample is closed.");
    if (p(this._data !== null), this._data instanceof Uint8Array) {
      const e = this.toVideoFrame();
      return queueMicrotask(() => e.close()), e;
    } else
      return this._data;
  }
  /** Sets the rotation metadata of this video sample. */
  setRotation(e) {
    if (![0, 90, 180, 270].includes(e))
      throw new TypeError("newRotation must be 0, 90, 180, or 270.");
    this.rotation = e;
  }
  /** Sets the presentation timestamp of this video sample, in seconds. */
  setTimestamp(e) {
    if (!Number.isFinite(e))
      throw new TypeError("newTimestamp must be a number.");
    this.timestamp = e;
  }
  /** Sets the duration of this video sample, in seconds. */
  setDuration(e) {
    if (!Number.isFinite(e) || e < 0)
      throw new TypeError("newDuration must be a non-negative number.");
    this.duration = e;
  }
  /** Calls `.close()`. */
  [Symbol.dispose]() {
    this.close();
  }
}
class Ur {
  /** Creates a new VideoSampleColorSpace. */
  constructor(e) {
    if (e !== void 0) {
      if (!e || typeof e != "object")
        throw new TypeError("init.colorSpace, when provided, must be an object.");
      const t = Object.keys(Bt);
      if (e.primaries != null && !t.includes(e.primaries))
        throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${t.join(", ")}.`);
      const i = Object.keys(Rt);
      if (e.transfer != null && !i.includes(e.transfer))
        throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${i.join(", ")}.`);
      const s = Object.keys(Mt);
      if (e.matrix != null && !s.includes(e.matrix))
        throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${s.join(", ")}.`);
      if (e.fullRange != null && typeof e.fullRange != "boolean")
        throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.");
    }
    this.primaries = e?.primaries ?? null, this.transfer = e?.transfer ?? null, this.matrix = e?.matrix ?? null, this.fullRange = e?.fullRange ?? null;
  }
  /** Serializes the color space to a JSON object. */
  toJSON() {
    return {
      primaries: this.primaries,
      transfer: this.transfer,
      matrix: this.matrix,
      fullRange: this.fullRange
    };
  }
}
const bt = (r) => typeof VideoFrame < "u" && r instanceof VideoFrame, zs = (r, e, t) => {
  r.left = Math.min(r.left, e), r.top = Math.min(r.top, t), r.width = Math.min(r.width, e - r.left), r.height = Math.min(r.height, t - r.top), p(r.width >= 0), p(r.height >= 0);
}, Ds = (r, e) => {
  if (!r || typeof r != "object")
    throw new TypeError(e + "crop, when provided, must be an object.");
  if (!Number.isInteger(r.left) || r.left < 0)
    throw new TypeError(e + "crop.left must be a non-negative integer.");
  if (!Number.isInteger(r.top) || r.top < 0)
    throw new TypeError(e + "crop.top must be a non-negative integer.");
  if (!Number.isInteger(r.width) || r.width < 0)
    throw new TypeError(e + "crop.width must be a non-negative integer.");
  if (!Number.isInteger(r.height) || r.height < 0)
    throw new TypeError(e + "crop.height must be a non-negative integer.");
}, In = (r) => {
  if (!r || typeof r != "object")
    throw new TypeError("options must be an object.");
  if (r.colorSpace !== void 0 && !["display-p3", "srgb"].includes(r.colorSpace))
    throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
  if (r.format !== void 0 && typeof r.format != "string")
    throw new TypeError("options.format, when provided, must be a string.");
  if (r.layout !== void 0) {
    if (!Array.isArray(r.layout))
      throw new TypeError("options.layout, when provided, must be an array.");
    for (const e of r.layout) {
      if (!e || typeof e != "object")
        throw new TypeError("Each entry in options.layout must be an object.");
      if (!Number.isInteger(e.offset) || e.offset < 0)
        throw new TypeError("plane.offset must be a non-negative integer.");
      if (!Number.isInteger(e.stride) || e.stride < 0)
        throw new TypeError("plane.stride must be a non-negative integer.");
    }
  }
  if (r.rect !== void 0) {
    if (!r.rect || typeof r.rect != "object")
      throw new TypeError("options.rect, when provided, must be an object.");
    if (r.rect.x !== void 0 && (!Number.isInteger(r.rect.x) || r.rect.x < 0))
      throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
    if (r.rect.y !== void 0 && (!Number.isInteger(r.rect.y) || r.rect.y < 0))
      throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
    if (r.rect.width !== void 0 && (!Number.isInteger(r.rect.width) || r.rect.width < 0))
      throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
    if (r.rect.height !== void 0 && (!Number.isInteger(r.rect.height) || r.rect.height < 0))
      throw new TypeError("options.rect.height, when provided, must be a non-negative integer.");
  }
}, al = (r, e, t) => {
  const i = ol(r), s = [];
  let n = 0;
  for (const a of i) {
    const o = Math.ceil(e / a.widthDivisor), c = Math.ceil(t / a.heightDivisor), l = o * a.sampleBytes, d = l * c;
    s.push({
      offset: n,
      stride: l
    }), n += d;
  }
  return s;
}, ol = (r) => {
  const e = (t, i, s, n, a) => {
    const o = [
      { sampleBytes: t, widthDivisor: 1, heightDivisor: 1 },
      { sampleBytes: i, widthDivisor: s, heightDivisor: n },
      { sampleBytes: i, widthDivisor: s, heightDivisor: n }
    ];
    return a && o.push({ sampleBytes: t, widthDivisor: 1, heightDivisor: 1 }), o;
  };
  switch (r) {
    case "I420":
      return e(1, 1, 2, 2, !1);
    case "I420P10":
    case "I420P12":
      return e(2, 2, 2, 2, !1);
    case "I420A":
      return e(1, 1, 2, 2, !0);
    case "I420AP10":
    case "I420AP12":
      return e(2, 2, 2, 2, !0);
    case "I422":
      return e(1, 1, 2, 1, !1);
    case "I422P10":
    case "I422P12":
      return e(2, 2, 2, 1, !1);
    case "I422A":
      return e(1, 1, 2, 1, !0);
    case "I422AP10":
    case "I422AP12":
      return e(2, 2, 2, 1, !0);
    case "I444":
      return e(1, 1, 1, 1, !1);
    case "I444P10":
    case "I444P12":
      return e(2, 2, 1, 1, !1);
    case "I444A":
      return e(1, 1, 1, 1, !0);
    case "I444AP10":
    case "I444AP12":
      return e(2, 2, 1, 1, !0);
    case "NV12":
      return [
        { sampleBytes: 1, widthDivisor: 1, heightDivisor: 1 },
        { sampleBytes: 2, widthDivisor: 2, heightDivisor: 2 }
        // Interleaved U and V
      ];
    case "RGBA":
    case "RGBX":
    case "BGRA":
    case "BGRX":
      return [
        { sampleBytes: 4, widthDivisor: 1, heightDivisor: 1 }
      ];
    default:
      ge(r), p(!1);
  }
}, vi = /* @__PURE__ */ new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
class he {
  /** The presentation timestamp of the sample in microseconds. */
  get microsecondTimestamp() {
    return Math.trunc(ct * this.timestamp);
  }
  /** The duration of the sample in microseconds. */
  get microsecondDuration() {
    return Math.trunc(ct * this.duration);
  }
  /**
   * Creates a new {@link AudioSample}, either from an existing
   * [`AudioData`](https://developer.mozilla.org/en-US/docs/Web/API/AudioData) or from raw bytes specified in
   * {@link AudioSampleInit}.
   */
  constructor(e) {
    if (this._closed = !1, lr(e)) {
      if (e.format === null)
        throw new TypeError("AudioData with null format is not supported.");
      this._data = e, this.format = e.format, this.sampleRate = e.sampleRate, this.numberOfFrames = e.numberOfFrames, this.numberOfChannels = e.numberOfChannels, this.timestamp = e.timestamp / 1e6, this.duration = e.numberOfFrames / e.sampleRate;
    } else {
      if (!e || typeof e != "object")
        throw new TypeError("Invalid AudioDataInit: must be an object.");
      if (!vi.has(e.format))
        throw new TypeError("Invalid AudioDataInit: invalid format.");
      if (!Number.isFinite(e.sampleRate) || e.sampleRate <= 0)
        throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
      if (!Number.isInteger(e.numberOfChannels) || e.numberOfChannels === 0)
        throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
      if (!Number.isFinite(e?.timestamp))
        throw new TypeError("init.timestamp must be a number.");
      const t = e.data.byteLength / (xt(e.format) * e.numberOfChannels);
      if (!Number.isInteger(t))
        throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
      this.format = e.format, this.sampleRate = e.sampleRate, this.numberOfFrames = t, this.numberOfChannels = e.numberOfChannels, this.timestamp = e.timestamp, this.duration = t / e.sampleRate;
      let i;
      if (e.data instanceof ArrayBuffer)
        i = new Uint8Array(e.data);
      else if (ArrayBuffer.isView(e.data))
        i = new Uint8Array(e.data.buffer, e.data.byteOffset, e.data.byteLength);
      else
        throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
      const s = this.numberOfFrames * this.numberOfChannels * xt(this.format);
      if (i.byteLength < s)
        throw new TypeError("Invalid AudioDataInit: insufficient data size.");
      this._data = i;
    }
    _r?.register(this, { type: "audio", data: this._data }, this);
  }
  /** Returns the number of bytes required to hold the audio sample's data as specified by the given options. */
  allocationSize(e) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (!Number.isInteger(e.planeIndex) || e.planeIndex < 0)
      throw new TypeError("planeIndex must be a non-negative integer.");
    if (e.format !== void 0 && !vi.has(e.format))
      throw new TypeError("Invalid format.");
    if (e.frameOffset !== void 0 && (!Number.isInteger(e.frameOffset) || e.frameOffset < 0))
      throw new TypeError("frameOffset must be a non-negative integer.");
    if (e.frameCount !== void 0 && (!Number.isInteger(e.frameCount) || e.frameCount < 0))
      throw new TypeError("frameCount must be a non-negative integer.");
    if (this._closed)
      throw new Error("AudioSample is closed.");
    const t = e.format ?? this.format, i = e.frameOffset ?? 0;
    if (i >= this.numberOfFrames)
      throw new RangeError("frameOffset out of range");
    const s = e.frameCount !== void 0 ? e.frameCount : this.numberOfFrames - i;
    if (s > this.numberOfFrames - i)
      throw new RangeError("frameCount out of range");
    const n = xt(t), a = qt(t);
    if (a && e.planeIndex >= this.numberOfChannels)
      throw new RangeError("planeIndex out of range");
    if (!a && e.planeIndex !== 0)
      throw new RangeError("planeIndex out of range");
    return (a ? s : s * this.numberOfChannels) * n;
  }
  /** Copies the audio sample's data to an ArrayBuffer or ArrayBufferView as specified by the given options. */
  copyTo(e, t) {
    if (!ri(e))
      throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
    if (!t || typeof t != "object")
      throw new TypeError("options must be an object.");
    if (!Number.isInteger(t.planeIndex) || t.planeIndex < 0)
      throw new TypeError("planeIndex must be a non-negative integer.");
    if (t.format !== void 0 && !vi.has(t.format))
      throw new TypeError("Invalid format.");
    if (t.frameOffset !== void 0 && (!Number.isInteger(t.frameOffset) || t.frameOffset < 0))
      throw new TypeError("frameOffset must be a non-negative integer.");
    if (t.frameCount !== void 0 && (!Number.isInteger(t.frameCount) || t.frameCount < 0))
      throw new TypeError("frameCount must be a non-negative integer.");
    if (this._closed)
      throw new Error("AudioSample is closed.");
    const { planeIndex: i, format: s, frameCount: n, frameOffset: a } = t, o = this.format, c = s ?? this.format;
    if (!c)
      throw new Error("Destination format not determined");
    const l = this.numberOfFrames, d = this.numberOfChannels, u = a ?? 0;
    if (u >= l)
      throw new RangeError("frameOffset out of range");
    const h = n !== void 0 ? n : l - u;
    if (h > l - u)
      throw new RangeError("frameCount out of range");
    const m = xt(c), g = qt(c);
    if (g && i >= d)
      throw new RangeError("planeIndex out of range");
    if (!g && i !== 0)
      throw new RangeError("planeIndex out of range");
    const w = (g ? h : h * d) * m;
    if (e.byteLength < w)
      throw new RangeError("Destination buffer is too small");
    const k = L(e), b = Aa(c);
    if (lr(this._data))
      pr() && d > 2 && c !== o ? cl(this._data, k, o, c, d, i, u, h) : this._data.copyTo(e, {
        planeIndex: i,
        frameOffset: u,
        frameCount: h,
        format: c
      });
    else {
      const T = this._data, S = L(T), x = va(o), P = xt(o), _ = qt(o);
      for (let C = 0; C < h; C++)
        if (g) {
          const I = C * m;
          let U;
          _ ? U = (i * l + (C + u)) * P : U = ((C + u) * d + i) * P;
          const D = x(S, U);
          b(k, I, D);
        } else
          for (let I = 0; I < d; I++) {
            const D = (C * d + I) * m;
            let F;
            _ ? F = (I * l + (C + u)) * P : F = ((C + u) * d + I) * P;
            const R = x(S, F);
            b(k, D, R);
          }
    }
  }
  /** Clones this audio sample. */
  clone() {
    if (this._closed)
      throw new Error("AudioSample is closed.");
    if (lr(this._data)) {
      const e = new he(this._data.clone());
      return e.setTimestamp(this.timestamp), e;
    } else
      return new he({
        format: this.format,
        sampleRate: this.sampleRate,
        numberOfFrames: this.numberOfFrames,
        numberOfChannels: this.numberOfChannels,
        timestamp: this.timestamp,
        data: this._data
      });
  }
  /**
   * Closes this audio sample, releasing held resources. Audio samples should be closed as soon as they are not
   * needed anymore.
   */
  close() {
    this._closed || (_r?.unregister(this), lr(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0);
  }
  /**
   * Converts this audio sample to an AudioData for use with the WebCodecs API. The AudioData returned by this
   * method *must* be closed separately from this audio sample.
   */
  toAudioData() {
    if (this._closed)
      throw new Error("AudioSample is closed.");
    if (lr(this._data)) {
      if (this._data.timestamp === this.microsecondTimestamp)
        return this._data.clone();
      if (qt(this.format)) {
        const e = this.allocationSize({ planeIndex: 0, format: this.format }), t = new ArrayBuffer(e * this.numberOfChannels);
        for (let i = 0; i < this.numberOfChannels; i++)
          this.copyTo(new Uint8Array(t, i * e, e), { planeIndex: i, format: this.format });
        return new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: t
        });
      } else {
        const e = new ArrayBuffer(this.allocationSize({ planeIndex: 0, format: this.format }));
        return this.copyTo(e, { planeIndex: 0, format: this.format }), new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: e
        });
      }
    } else
      return new AudioData({
        format: this.format,
        sampleRate: this.sampleRate,
        numberOfFrames: this.numberOfFrames,
        numberOfChannels: this.numberOfChannels,
        timestamp: this.microsecondTimestamp,
        data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        // In the case of SharedArrayBuffer, convert to ArrayBuffer
      });
  }
  /** Convert this audio sample to an AudioBuffer for use with the Web Audio API. */
  toAudioBuffer() {
    if (this._closed)
      throw new Error("AudioSample is closed.");
    const e = new AudioBuffer({
      numberOfChannels: this.numberOfChannels,
      length: this.numberOfFrames,
      sampleRate: this.sampleRate
    }), t = new Float32Array(this.allocationSize({ planeIndex: 0, format: "f32-planar" }) / 4);
    for (let i = 0; i < this.numberOfChannels; i++)
      this.copyTo(t, { planeIndex: i, format: "f32-planar" }), e.copyToChannel(t, i);
    return e;
  }
  /** Sets the presentation timestamp of this audio sample, in seconds. */
  setTimestamp(e) {
    if (!Number.isFinite(e))
      throw new TypeError("newTimestamp must be a number.");
    this.timestamp = e;
  }
  /** Calls `.close()`. */
  [Symbol.dispose]() {
    this.close();
  }
  /** @internal */
  static *_fromAudioBuffer(e, t) {
    if (!(e instanceof AudioBuffer))
      throw new TypeError("audioBuffer must be an AudioBuffer.");
    const i = 48e3 * 5, s = e.numberOfChannels, n = e.sampleRate, a = e.length, o = Math.floor(i / s);
    let c = 0, l = a;
    for (; l > 0; ) {
      const d = Math.min(o, l), u = new Float32Array(s * d);
      for (let h = 0; h < s; h++)
        e.copyFromChannel(u.subarray(h * d, (h + 1) * d), h, c);
      yield new he({
        format: "f32-planar",
        sampleRate: n,
        numberOfFrames: d,
        numberOfChannels: s,
        timestamp: t + c / n,
        data: u
      }), c += d, l -= d;
    }
  }
  /**
   * Creates AudioSamples from an AudioBuffer, starting at the given timestamp in seconds. Typically creates exactly
   * one sample, but may create multiple if the AudioBuffer is exceedingly large.
   */
  static fromAudioBuffer(e, t) {
    if (!(e instanceof AudioBuffer))
      throw new TypeError("audioBuffer must be an AudioBuffer.");
    const i = 48e3 * 5, s = e.numberOfChannels, n = e.sampleRate, a = e.length, o = Math.floor(i / s);
    let c = 0, l = a;
    const d = [];
    for (; l > 0; ) {
      const u = Math.min(o, l), h = new Float32Array(s * u);
      for (let g = 0; g < s; g++)
        e.copyFromChannel(h.subarray(g * u, (g + 1) * u), g, c);
      const m = new he({
        format: "f32-planar",
        sampleRate: n,
        numberOfFrames: u,
        numberOfChannels: s,
        timestamp: t + c / n,
        data: h
      });
      d.push(m), c += u, l -= u;
    }
    return d;
  }
}
const xt = (r) => {
  switch (r) {
    case "u8":
    case "u8-planar":
      return 1;
    case "s16":
    case "s16-planar":
      return 2;
    case "s32":
    case "s32-planar":
      return 4;
    case "f32":
    case "f32-planar":
      return 4;
    default:
      throw new Error("Unknown AudioSampleFormat");
  }
}, qt = (r) => {
  switch (r) {
    case "u8-planar":
    case "s16-planar":
    case "s32-planar":
    case "f32-planar":
      return !0;
    default:
      return !1;
  }
}, va = (r) => {
  switch (r) {
    case "u8":
    case "u8-planar":
      return (e, t) => (e.getUint8(t) - 128) / 128;
    case "s16":
    case "s16-planar":
      return (e, t) => e.getInt16(t, !0) / 32768;
    case "s32":
    case "s32-planar":
      return (e, t) => e.getInt32(t, !0) / 2147483648;
    case "f32":
    case "f32-planar":
      return (e, t) => e.getFloat32(t, !0);
  }
}, Aa = (r) => {
  switch (r) {
    case "u8":
    case "u8-planar":
      return (e, t, i) => e.setUint8(t, ce((i + 1) * 127.5, 0, 255));
    case "s16":
    case "s16-planar":
      return (e, t, i) => e.setInt16(t, ce(Math.round(i * 32767), -32768, 32767), !0);
    case "s32":
    case "s32-planar":
      return (e, t, i) => e.setInt32(t, ce(Math.round(i * 2147483647), -2147483648, 2147483647), !0);
    case "f32":
    case "f32-planar":
      return (e, t, i) => e.setFloat32(t, i, !0);
  }
}, lr = (r) => typeof AudioData < "u" && r instanceof AudioData, cl = (r, e, t, i, s, n, a, o) => {
  const c = va(t), l = Aa(i), d = xt(t), u = xt(i), h = qt(t);
  if (qt(i))
    if (h) {
      const g = new ArrayBuffer(o * d), f = L(g);
      r.copyTo(g, {
        planeIndex: n,
        frameOffset: a,
        frameCount: o,
        format: t
      });
      for (let w = 0; w < o; w++) {
        const k = w * d, b = w * u, T = c(f, k);
        l(e, b, T);
      }
    } else {
      const g = new ArrayBuffer(o * s * d), f = L(g);
      r.copyTo(g, {
        planeIndex: 0,
        frameOffset: a,
        frameCount: o,
        format: t
      });
      for (let w = 0; w < o; w++) {
        const k = (w * s + n) * d, b = w * u, T = c(f, k);
        l(e, b, T);
      }
    }
  else if (h) {
    const g = o * d, f = new ArrayBuffer(g), w = L(f);
    for (let k = 0; k < s; k++) {
      r.copyTo(f, {
        planeIndex: k,
        frameOffset: a,
        frameCount: o,
        format: t
      });
      for (let b = 0; b < o; b++) {
        const T = b * d, S = (b * s + k) * u, x = c(w, T);
        l(e, S, x);
      }
    }
  } else {
    const g = new ArrayBuffer(o * s * d), f = L(g);
    r.copyTo(g, {
      planeIndex: 0,
      frameOffset: a,
      frameCount: o,
      format: t
    });
    for (let w = 0; w < o; w++)
      for (let k = 0; k < s; k++) {
        const b = w * s + k, T = b * d, S = b * u, x = c(f, T);
        l(e, S, x);
      }
  }
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const kt = (r) => {
  if (!r || typeof r != "object")
    throw new TypeError("options must be an object.");
  if (r.metadataOnly !== void 0 && typeof r.metadataOnly != "boolean")
    throw new TypeError("options.metadataOnly, when defined, must be a boolean.");
  if (r.verifyKeyPackets !== void 0 && typeof r.verifyKeyPackets != "boolean")
    throw new TypeError("options.verifyKeyPackets, when defined, must be a boolean.");
  if (r.verifyKeyPackets && r.metadataOnly)
    throw new TypeError("options.verifyKeyPackets and options.metadataOnly cannot be enabled together.");
}, Ze = (r) => {
  if (!tr(r))
    throw new TypeError("timestamp must be a number.");
}, Ai = (r, e, t) => t.verifyKeyPackets ? e.then(async (i) => {
  if (!i || i.type === "delta")
    return i;
  const s = await r.determinePacketType(i);
  return s && (i.type = s), i;
}) : e;
class Zt {
  /** Creates a new {@link EncodedPacketSink} for the given {@link InputTrack}. */
  constructor(e) {
    if (!(e instanceof mi))
      throw new TypeError("track must be an InputTrack.");
    this._track = e;
  }
  /**
   * Retrieves the track's first packet (in decode order), or null if it has no packets. The first packet is very
   * likely to be a key packet.
   */
  getFirstPacket(e = {}) {
    if (kt(e), this._track.input._disposed)
      throw new be();
    return Ai(this._track, this._track._backing.getFirstPacket(e), e);
  }
  /** Retrieves the track's first key packet (in decode order), or null if it has no key packets. */
  async getFirstKeyPacket(e = {}) {
    kt(e);
    const t = await this.getFirstPacket(e);
    return t ? t.type === "key" ? t : this.getNextKeyPacket(t, e) : null;
  }
  /**
   * Retrieves the packet corresponding to the given timestamp, in seconds. More specifically, returns the last packet
   * (in presentation order) with a start timestamp less than or equal to the given timestamp. This method can be
   * used to retrieve a track's last packet using `getPacket(Infinity)`. The method returns null if the timestamp
   * is before the first packet in the track.
   *
   * @param timestamp - The timestamp used for retrieval, in seconds.
   */
  getPacket(e, t = {}) {
    if (Ze(e), kt(t), this._track.input._disposed)
      throw new be();
    return Ai(this._track, this._track._backing.getPacket(e, t), t);
  }
  /**
   * Retrieves the packet following the given packet (in decode order), or null if the given packet is the
   * last packet.
   */
  getNextPacket(e, t = {}) {
    if (!(e instanceof X))
      throw new TypeError("packet must be an EncodedPacket.");
    if (kt(t), this._track.input._disposed)
      throw new be();
    return Ai(this._track, this._track._backing.getNextPacket(e, t), t);
  }
  /**
   * Retrieves the key packet corresponding to the given timestamp, in seconds. More specifically, returns the last
   * key packet (in presentation order) with a start timestamp less than or equal to the given timestamp. A key packet
   * is a packet that doesn't require previous packets to be decoded. This method can be used to retrieve a track's
   * last key packet using `getKeyPacket(Infinity)`. The method returns null if the timestamp is before the first
   * key packet in the track.
   *
   * To ensure that the returned packet is guaranteed to be a real key frame, enable `options.verifyKeyPackets`.
   *
   * @param timestamp - The timestamp used for retrieval, in seconds.
   */
  async getKeyPacket(e, t = {}) {
    if (Ze(e), kt(t), this._track.input._disposed)
      throw new be();
    if (!t.verifyKeyPackets)
      return this._track._backing.getKeyPacket(e, t);
    const i = await this._track._backing.getKeyPacket(e, t);
    return i && (p(i.type === "key"), await this._track.determinePacketType(i) === "delta" ? this.getKeyPacket(i.timestamp - 1 / this._track.timeResolution, t) : i);
  }
  /**
   * Retrieves the key packet following the given packet (in decode order), or null if the given packet is the last
   * key packet.
   *
   * To ensure that the returned packet is guaranteed to be a real key frame, enable `options.verifyKeyPackets`.
   */
  async getNextKeyPacket(e, t = {}) {
    if (!(e instanceof X))
      throw new TypeError("packet must be an EncodedPacket.");
    if (kt(t), this._track.input._disposed)
      throw new be();
    if (!t.verifyKeyPackets)
      return this._track._backing.getNextKeyPacket(e, t);
    const i = await this._track._backing.getNextKeyPacket(e, t);
    return i && (p(i.type === "key"), await this._track.determinePacketType(i) === "delta" ? this.getNextKeyPacket(i, t) : i);
  }
  /**
   * Creates an async iterator that yields the packets in this track in decode order. To enable fast iteration, this
   * method will intelligently preload packets based on the speed of the consumer.
   *
   * @param startPacket - (optional) The packet from which iteration should begin. This packet will also be yielded.
   * @param endTimestamp - (optional) The timestamp at which iteration should end. This packet will _not_ be yielded.
   */
  packets(e, t, i = {}) {
    if (e !== void 0 && !(e instanceof X))
      throw new TypeError("startPacket must be an EncodedPacket.");
    if (e !== void 0 && e.isMetadataOnly && !i?.metadataOnly)
      throw new TypeError("startPacket can only be metadata-only if options.metadataOnly is enabled.");
    if (t !== void 0 && !(t instanceof X))
      throw new TypeError("endPacket must be an EncodedPacket.");
    if (kt(i), this._track.input._disposed)
      throw new be();
    const s = [];
    let { promise: n, resolve: a } = re(), { promise: o, resolve: c } = re(), l = !1, d = !1, u = null;
    const h = [], m = () => Math.max(2, h.length);
    (async () => {
      let f = e ?? await this.getFirstPacket(i);
      for (; f && !d && !this._track.input._disposed && !(t && f.sequenceNumber >= t?.sequenceNumber); ) {
        if (s.length > m()) {
          ({ promise: o, resolve: c } = re()), await o;
          continue;
        }
        s.push(f), a(), { promise: n, resolve: a } = re(), f = await this.getNextPacket(f, i);
      }
      l = !0, a();
    })().catch((f) => {
      u || (u = f, a());
    });
    const g = this._track;
    return {
      async next() {
        for (; ; ) {
          if (g.input._disposed)
            throw new be();
          if (d)
            return { value: void 0, done: !0 };
          if (u)
            throw u;
          if (s.length > 0) {
            const f = s.shift(), w = performance.now();
            for (h.push(w); h.length > 0 && w - h[0] >= 1e3; )
              h.shift();
            return c(), { value: f, done: !1 };
          } else {
            if (l)
              return { value: void 0, done: !0 };
            await n;
          }
        }
      },
      async return() {
        return d = !0, c(), a(), { value: void 0, done: !0 };
      },
      async throw(f) {
        throw f;
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
}
class Os {
  constructor(e, t) {
    this.onSample = e, this.onError = t;
  }
}
class Us {
  /** @internal */
  mediaSamplesInRange(e = 0, t = 1 / 0) {
    Ze(e), Ze(t);
    const i = [];
    let s = !1, n = null, { promise: a, resolve: o } = re(), { promise: c, resolve: l } = re(), d = !1, u = !1, h = !1, m = null;
    (async () => {
      const w = await this._createDecoder((P) => {
        if (l(), P.timestamp >= t && (u = !0), u) {
          P.close();
          return;
        }
        n && (P.timestamp > e ? (i.push(n), s = !0) : n.close()), P.timestamp >= e && (i.push(P), s = !0), n = s ? null : P, i.length > 0 && (o(), { promise: a, resolve: o } = re());
      }, (P) => {
        m || (m = P, o());
      }), k = this._createPacketSink(), b = await k.getKeyPacket(e, { verifyKeyPackets: !0 }) ?? await k.getFirstKeyPacket({ verifyKeyPackets: !0 });
      let T = b;
      const x = k.packets(b ?? void 0, void 0);
      for (await x.next(); T && !u && !this._track.input._disposed; ) {
        const P = En(i.length);
        if (i.length + w.getDecodeQueueSize() > P) {
          ({ promise: c, resolve: l } = re()), await c;
          continue;
        }
        w.decode(T);
        const _ = await x.next();
        if (_.done)
          break;
        T = _.value;
      }
      await x.return(), !h && !this._track.input._disposed && await w.flush(), w.close(), !s && n && i.push(n), d = !0, o();
    })().catch((w) => {
      m || (m = w, o());
    });
    const g = this._track, f = () => {
      n?.close();
      for (const w of i)
        w.close();
    };
    return {
      async next() {
        for (; ; ) {
          if (g.input._disposed)
            throw f(), new be();
          if (h)
            return { value: void 0, done: !0 };
          if (m)
            throw f(), m;
          if (i.length > 0) {
            const w = i.shift();
            return l(), { value: w, done: !1 };
          } else if (!d)
            await a;
          else
            return { value: void 0, done: !0 };
        }
      },
      async return() {
        return h = !0, u = !0, l(), o(), f(), { value: void 0, done: !0 };
      },
      async throw(w) {
        throw w;
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
  /** @internal */
  mediaSamplesAtTimestamps(e) {
    cc(e);
    const t = oc(e), i = [], s = [];
    let { promise: n, resolve: a } = re(), { promise: o, resolve: c } = re(), l = !1, d = !1, u = null;
    const h = (f) => {
      s.push(f), a(), { promise: n, resolve: a } = re();
    };
    (async () => {
      const f = await this._createDecoder((P) => {
        if (c(), d) {
          P.close();
          return;
        }
        let _ = 0;
        for (; i.length > 0 && P.timestamp - i[0] > -1e-10; )
          _++, i.shift();
        if (_ > 0)
          for (let C = 0; C < _; C++)
            h(C < _ - 1 ? P.clone() : P);
        else
          P.close();
      }, (P) => {
        u || (u = P, a());
      }), w = this._createPacketSink();
      let k = null, b = null, T = -1;
      const S = async () => {
        p(b);
        let P = b;
        for (f.decode(P); P.sequenceNumber < T; ) {
          const _ = En(s.length);
          for (; s.length + f.getDecodeQueueSize() > _ && !d; )
            ({ promise: o, resolve: c } = re()), await o;
          if (d)
            break;
          const C = await w.getNextPacket(P);
          p(C), f.decode(C), P = C;
        }
        T = -1;
      }, x = async () => {
        await f.flush();
        for (let P = 0; P < i.length; P++)
          h(null);
        i.length = 0;
      };
      for await (const P of t) {
        if (Ze(P), d || this._track.input._disposed)
          break;
        const _ = await w.getPacket(P), C = _ && await w.getKeyPacket(P, { verifyKeyPackets: !0 });
        if (!C) {
          T !== -1 && (await S(), await x()), h(null), k = null;
          continue;
        }
        k && (C.sequenceNumber !== b.sequenceNumber || _.timestamp < k.timestamp) && (await S(), await x()), i.push(_.timestamp), T = Math.max(_.sequenceNumber, T), k = _, b = C;
      }
      !d && !this._track.input._disposed && (T !== -1 && await S(), await x()), f.close(), l = !0, a();
    })().catch((f) => {
      u || (u = f, a());
    });
    const m = this._track, g = () => {
      for (const f of s)
        f?.close();
    };
    return {
      async next() {
        for (; ; ) {
          if (m.input._disposed)
            throw g(), new be();
          if (d)
            return { value: void 0, done: !0 };
          if (u)
            throw g(), u;
          if (s.length > 0) {
            const f = s.shift();
            return p(f !== void 0), c(), { value: f, done: !1 };
          } else if (!l)
            await n;
          else
            return { value: void 0, done: !0 };
        }
      },
      async return() {
        return d = !0, c(), a(), g(), { value: void 0, done: !0 };
      },
      async throw(f) {
        throw f;
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
}
const En = (r) => r === 0 ? 40 : 8;
class ll extends Os {
  constructor(e, t, i, s, n, a) {
    super(e, t), this.codec = i, this.decoderConfig = s, this.rotation = n, this.timeResolution = a, this.decoder = null, this.customDecoder = null, this.customDecoderCallSerializer = new ni(), this.customDecoderQueueSize = 0, this.inputTimestamps = [], this.sampleQueue = [], this.currentPacketIndex = 0, this.raslSkipped = !1, this.alphaDecoder = null, this.alphaHadKeyframe = !1, this.colorQueue = [], this.alphaQueue = [], this.merger = null, this.mergerCreationFailed = !1, this.decodedAlphaChunkCount = 0, this.alphaDecoderQueueSize = 0, this.nullAlphaFrameQueue = [], this.currentAlphaPacketIndex = 0, this.alphaRaslSkipped = !1;
    const o = $r.find((c) => c.supports(i, s));
    if (o)
      this.customDecoder = new o(), this.customDecoder.codec = i, this.customDecoder.config = s, this.customDecoder.onSample = (c) => {
        if (!(c instanceof ae))
          throw new TypeError("The argument passed to onSample must be a VideoSample.");
        this.finalizeAndEmitSample(c);
      }, this.customDecoderCallSerializer.call(() => this.customDecoder.init());
    else {
      const c = (d) => {
        if (this.alphaQueue.length > 0) {
          const u = this.alphaQueue.shift();
          p(u !== void 0), this.mergeAlpha(d, u);
        } else
          this.colorQueue.push(d);
      };
      if (i === "avc" && this.decoderConfig.description && Ki()) {
        const d = ua(Z(this.decoderConfig.description));
        if (d && d.sequenceParameterSets.length > 0) {
          const u = Fs(d.sequenceParameterSets[0]);
          u && u.frameMbsOnlyFlag === 0 && (this.decoderConfig = {
            ...this.decoderConfig,
            hardwareAcceleration: "prefer-software"
          });
        }
      }
      const l = new Error("Decoding error").stack;
      this.decoder = new VideoDecoder({
        output: (d) => {
          try {
            c(d);
          } catch (u) {
            this.onError(u);
          }
        },
        error: (d) => {
          d.stack = l, this.onError(d);
        }
      }), this.decoder.configure(this.decoderConfig);
    }
  }
  getDecodeQueueSize() {
    return this.customDecoder ? this.customDecoderQueueSize : (p(this.decoder), Math.max(this.decoder.decodeQueueSize, this.alphaDecoder?.decodeQueueSize ?? 0));
  }
  decode(e) {
    if (this.codec === "hevc" && this.currentPacketIndex > 0 && !this.raslSkipped) {
      if (this.hasHevcRaslPicture(e.data))
        return;
      this.raslSkipped = !0;
    }
    if (this.customDecoder)
      this.customDecoderQueueSize++, this.customDecoderCallSerializer.call(() => this.customDecoder.decode(e)).then(() => this.customDecoderQueueSize--);
    else {
      if (p(this.decoder), pr() || fn(this.inputTimestamps, e.timestamp, (t) => t), Ki() && this.currentPacketIndex === 0 && this.codec === "avc") {
        const t = [];
        for (const s of la(e.data, this.decoderConfig)) {
          const n = Yt(e.data[s.offset]);
          n >= 20 && n <= 31 || t.push(e.data.subarray(s.offset, s.offset + s.length));
        }
        const i = Uc(t, this.decoderConfig);
        e = new X(i, e.type, e.timestamp, e.duration);
      }
      this.decoder.decode(e.toEncodedVideoChunk()), this.decodeAlphaData(e);
    }
    this.currentPacketIndex++;
  }
  decodeAlphaData(e) {
    if (!e.sideData.alpha || this.mergerCreationFailed) {
      this.pushNullAlphaFrame();
      return;
    }
    if (!this.merger)
      try {
        this.merger = new dl();
      } catch (i) {
        console.error("Due to an error, only color data will be decoded.", i), this.mergerCreationFailed = !0, this.decodeAlphaData(e);
        return;
      }
    if (!this.alphaDecoder) {
      const i = (n) => {
        if (this.alphaDecoderQueueSize--, this.colorQueue.length > 0) {
          const a = this.colorQueue.shift();
          p(a !== void 0), this.mergeAlpha(a, n);
        } else
          this.alphaQueue.push(n);
        for (this.decodedAlphaChunkCount++; this.nullAlphaFrameQueue.length > 0 && this.nullAlphaFrameQueue[0] === this.decodedAlphaChunkCount; )
          if (this.nullAlphaFrameQueue.shift(), this.colorQueue.length > 0) {
            const a = this.colorQueue.shift();
            p(a !== void 0), this.mergeAlpha(a, null);
          } else
            this.alphaQueue.push(null);
      }, s = new Error("Decoding error").stack;
      this.alphaDecoder = new VideoDecoder({
        output: (n) => {
          try {
            i(n);
          } catch (a) {
            this.onError(a);
          }
        },
        error: (n) => {
          n.stack = s, this.onError(n);
        }
      }), this.alphaDecoder.configure(this.decoderConfig);
    }
    const t = ka(this.codec, this.decoderConfig, e.sideData.alpha);
    if (this.alphaHadKeyframe || (this.alphaHadKeyframe = t === "key"), this.alphaHadKeyframe) {
      if (this.codec === "hevc" && this.currentAlphaPacketIndex > 0 && !this.alphaRaslSkipped) {
        if (this.hasHevcRaslPicture(e.sideData.alpha)) {
          this.pushNullAlphaFrame();
          return;
        }
        this.alphaRaslSkipped = !0;
      }
      this.currentAlphaPacketIndex++, this.alphaDecoder.decode(e.alphaToEncodedVideoChunk(t ?? e.type)), this.alphaDecoderQueueSize++;
    } else
      this.pushNullAlphaFrame();
  }
  pushNullAlphaFrame() {
    this.alphaDecoderQueueSize === 0 ? this.alphaQueue.push(null) : this.nullAlphaFrameQueue.push(this.decodedAlphaChunkCount + this.alphaDecoderQueueSize);
  }
  /**
   * If we're using HEVC, we need to make sure to skip any RASL slices that follow a non-IDR key frame such as
   * CRA_NUT. This is because RASL slices cannot be decoded without data before the CRA_NUT. Browsers behave
   * differently here: Chromium drops the packets, Safari throws a decoder error. Either way, it's not good
   * and causes bugs upstream. So, let's take the dropping into our own hands.
   */
  hasHevcRaslPicture(e) {
    for (const t of fa(e, this.decoderConfig)) {
      const i = vt(e[t.offset]);
      if (i === ie.RASL_N || i === ie.RASL_R)
        return !0;
    }
    return !1;
  }
  /** Handler for the WebCodecs VideoDecoder for ironing out browser differences. */
  sampleHandler(e) {
    if (pr()) {
      if (this.sampleQueue.length > 0 && e.timestamp >= ee(this.sampleQueue).timestamp) {
        for (const t of this.sampleQueue)
          this.finalizeAndEmitSample(t);
        this.sampleQueue.length = 0;
      }
      fn(this.sampleQueue, e, (t) => t.timestamp);
    } else {
      const t = this.inputTimestamps.shift();
      p(t !== void 0), e.setTimestamp(t), this.finalizeAndEmitSample(e);
    }
  }
  finalizeAndEmitSample(e) {
    e.setTimestamp(Math.round(e.timestamp * this.timeResolution) / this.timeResolution), e.setDuration(Math.round(e.duration * this.timeResolution) / this.timeResolution), e.setRotation(this.rotation), this.onSample(e);
  }
  mergeAlpha(e, t) {
    if (!t) {
      const n = new ae(e);
      this.sampleHandler(n);
      return;
    }
    p(this.merger), this.merger.update(e, t), e.close(), t.close();
    const i = new VideoFrame(this.merger.canvas, {
      timestamp: e.timestamp,
      duration: e.duration ?? void 0
    }), s = new ae(i);
    this.sampleHandler(s);
  }
  async flush() {
    if (this.customDecoder ? await this.customDecoderCallSerializer.call(() => this.customDecoder.flush()) : (p(this.decoder), await Promise.all([
      this.decoder.flush(),
      this.alphaDecoder?.flush()
    ]), this.colorQueue.forEach((e) => e.close()), this.colorQueue.length = 0, this.alphaQueue.forEach((e) => e?.close()), this.alphaQueue.length = 0, this.alphaHadKeyframe = !1, this.decodedAlphaChunkCount = 0, this.alphaDecoderQueueSize = 0, this.nullAlphaFrameQueue.length = 0, this.currentAlphaPacketIndex = 0, this.alphaRaslSkipped = !1), pr()) {
      for (const e of this.sampleQueue)
        this.finalizeAndEmitSample(e);
      this.sampleQueue.length = 0;
    }
    this.currentPacketIndex = 0, this.raslSkipped = !1;
  }
  close() {
    this.customDecoder ? this.customDecoderCallSerializer.call(() => this.customDecoder.close()) : (p(this.decoder), this.decoder.close(), this.alphaDecoder?.close(), this.colorQueue.forEach((e) => e.close()), this.colorQueue.length = 0, this.alphaQueue.forEach((e) => e?.close()), this.alphaQueue.length = 0, this.merger?.close());
    for (const e of this.sampleQueue)
      e.close();
    this.sampleQueue.length = 0;
  }
}
class dl {
  constructor() {
    typeof OffscreenCanvas < "u" ? this.canvas = new OffscreenCanvas(300, 150) : this.canvas = document.createElement("canvas");
    const e = this.canvas.getContext("webgl2", {
      premultipliedAlpha: !1
    });
    if (!e)
      throw new Error("Couldn't acquire WebGL 2 context.");
    this.gl = e, this.program = this.createProgram(), this.vao = this.createVAO(), this.colorTexture = this.createTexture(), this.alphaTexture = this.createTexture(), this.gl.useProgram(this.program), this.gl.uniform1i(this.gl.getUniformLocation(this.program, "u_colorTexture"), 0), this.gl.uniform1i(this.gl.getUniformLocation(this.program, "u_alphaTexture"), 1);
  }
  createProgram() {
    const e = this.createShader(this.gl.VERTEX_SHADER, `#version 300 es
			in vec2 a_position;
			in vec2 a_texCoord;
			out vec2 v_texCoord;
			
			void main() {
				gl_Position = vec4(a_position, 0.0, 1.0);
				v_texCoord = a_texCoord;
			}
		`), t = this.createShader(this.gl.FRAGMENT_SHADER, `#version 300 es
			precision highp float;
			
			uniform sampler2D u_colorTexture;
			uniform sampler2D u_alphaTexture;
			in vec2 v_texCoord;
			out vec4 fragColor;
			
			void main() {
				vec3 color = texture(u_colorTexture, v_texCoord).rgb;
				float alpha = texture(u_alphaTexture, v_texCoord).r;
				fragColor = vec4(color, alpha);
			}
		`), i = this.gl.createProgram();
    return this.gl.attachShader(i, e), this.gl.attachShader(i, t), this.gl.linkProgram(i), i;
  }
  createShader(e, t) {
    const i = this.gl.createShader(e);
    return this.gl.shaderSource(i, t), this.gl.compileShader(i), i;
  }
  createVAO() {
    const e = this.gl.createVertexArray();
    this.gl.bindVertexArray(e);
    const t = new Float32Array([
      -1,
      -1,
      0,
      1,
      1,
      -1,
      1,
      1,
      -1,
      1,
      0,
      0,
      1,
      1,
      1,
      0
    ]), i = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, i), this.gl.bufferData(this.gl.ARRAY_BUFFER, t, this.gl.STATIC_DRAW);
    const s = this.gl.getAttribLocation(this.program, "a_position"), n = this.gl.getAttribLocation(this.program, "a_texCoord");
    return this.gl.enableVertexAttribArray(s), this.gl.vertexAttribPointer(s, 2, this.gl.FLOAT, !1, 16, 0), this.gl.enableVertexAttribArray(n), this.gl.vertexAttribPointer(n, 2, this.gl.FLOAT, !1, 16, 8), e;
  }
  createTexture() {
    const e = this.gl.createTexture();
    return this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), e;
  }
  update(e, t) {
    (e.displayWidth !== this.canvas.width || e.displayHeight !== this.canvas.height) && (this.canvas.width = e.displayWidth, this.canvas.height = e.displayHeight), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, this.colorTexture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, e), this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, this.alphaTexture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, t), this.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.bindVertexArray(this.vao), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }
  close() {
    this.gl.getExtension("WEBGL_lose_context")?.loseContext(), this.gl = null;
  }
}
class Kr extends Us {
  /** Creates a new {@link VideoSampleSink} for the given {@link InputVideoTrack}. */
  constructor(e) {
    if (!(e instanceof Dt))
      throw new TypeError("videoTrack must be an InputVideoTrack.");
    super(), this._track = e;
  }
  /** @internal */
  async _createDecoder(e, t) {
    if (!await this._track.canDecode())
      throw new Error("This video track cannot be decoded by this browser. Make sure to check decodability before using a track.");
    const i = this._track.codec, s = this._track.rotation, n = await this._track.getDecoderConfig(), a = this._track.timeResolution;
    return p(i && n), new ll(e, t, i, n, s, a);
  }
  /** @internal */
  _createPacketSink() {
    return new Zt(this._track);
  }
  /**
   * Retrieves the video sample (frame) corresponding to the given timestamp, in seconds. More specifically, returns
   * the last video sample (in presentation order) with a start timestamp less than or equal to the given timestamp.
   * Returns null if the timestamp is before the track's first timestamp.
   *
   * @param timestamp - The timestamp used for retrieval, in seconds.
   */
  async getSample(e) {
    Ze(e);
    for await (const t of this.mediaSamplesAtTimestamps([e]))
      return t;
    throw new Error("Internal error: Iterator returned nothing.");
  }
  /**
   * Creates an async iterator that yields the video samples (frames) of this track in presentation order. This method
   * will intelligently pre-decode a few frames ahead to enable fast iteration.
   *
   * @param startTimestamp - The timestamp in seconds at which to start yielding samples (inclusive).
   * @param endTimestamp - The timestamp in seconds at which to stop yielding samples (exclusive).
   */
  samples(e = 0, t = 1 / 0) {
    return this.mediaSamplesInRange(e, t);
  }
  /**
   * Creates an async iterator that yields a video sample (frame) for each timestamp in the argument. This method
   * uses an optimized decoding pipeline if these timestamps are monotonically sorted, decoding each packet at most
   * once, and is therefore more efficient than manually getting the sample for every timestamp. The iterator may
   * yield null if no frame is available for a given timestamp.
   *
   * @param timestamps - An iterable or async iterable of timestamps in seconds.
   */
  samplesAtTimestamps(e) {
    return this.mediaSamplesAtTimestamps(e);
  }
}
class Fa {
  /** Creates a new {@link CanvasSink} for the given {@link InputVideoTrack}. */
  constructor(e, t = {}) {
    if (this._nextCanvasIndex = 0, !(e instanceof Dt))
      throw new TypeError("videoTrack must be an InputVideoTrack.");
    if (t && typeof t != "object")
      throw new TypeError("options must be an object.");
    if (t.alpha !== void 0 && typeof t.alpha != "boolean")
      throw new TypeError("options.alpha, when provided, must be a boolean.");
    if (t.width !== void 0 && (!Number.isInteger(t.width) || t.width <= 0))
      throw new TypeError("options.width, when defined, must be a positive integer.");
    if (t.height !== void 0 && (!Number.isInteger(t.height) || t.height <= 0))
      throw new TypeError("options.height, when defined, must be a positive integer.");
    if (t.fit !== void 0 && !["fill", "contain", "cover"].includes(t.fit))
      throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
    if (t.width !== void 0 && t.height !== void 0 && t.fit === void 0)
      throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
    if (t.rotation !== void 0 && ![0, 90, 180, 270].includes(t.rotation))
      throw new TypeError("options.rotation, when provided, must be 0, 90, 180 or 270.");
    if (t.crop !== void 0 && Ds(t.crop, "options."), t.poolSize !== void 0 && (typeof t.poolSize != "number" || !Number.isInteger(t.poolSize) || t.poolSize < 0))
      throw new TypeError("poolSize must be a non-negative integer.");
    const i = t.rotation ?? e.rotation, [s, n] = i % 180 === 0 ? [e.squarePixelWidth, e.squarePixelHeight] : [e.squarePixelHeight, e.squarePixelWidth], a = t.crop;
    a && zs(a, s, n);
    let [o, c] = a ? [a.width, a.height] : [s, n];
    const l = o / c;
    t.width !== void 0 && t.height === void 0 ? (o = t.width, c = Math.round(o / l)) : t.width === void 0 && t.height !== void 0 ? (c = t.height, o = Math.round(c * l)) : t.width !== void 0 && t.height !== void 0 && (o = t.width, c = t.height), this._videoTrack = e, this._alpha = t.alpha ?? !1, this._width = o, this._height = c, this._rotation = i, this._crop = a, this._fit = t.fit ?? "fill", this._videoSampleSink = new Kr(e), this._canvasPool = Array.from({ length: t.poolSize ?? 0 }, () => null);
  }
  /** @internal */
  _videoSampleToWrappedCanvas(e) {
    let t = this._canvasPool[this._nextCanvasIndex], i = !1;
    t || (typeof document < "u" ? (t = document.createElement("canvas"), t.width = this._width, t.height = this._height) : t = new OffscreenCanvas(this._width, this._height), this._canvasPool.length > 0 && (this._canvasPool[this._nextCanvasIndex] = t), i = !0), this._canvasPool.length > 0 && (this._nextCanvasIndex = (this._nextCanvasIndex + 1) % this._canvasPool.length);
    const s = t.getContext("2d", {
      alpha: this._alpha || Xt()
      // Firefox has VideoFrame glitches with opaque canvases
    });
    p(s), s.resetTransform(), i || (!this._alpha && Xt() ? (s.fillStyle = "black", s.fillRect(0, 0, this._width, this._height)) : s.clearRect(0, 0, this._width, this._height)), e.drawWithFit(s, {
      fit: this._fit,
      rotation: this._rotation,
      crop: this._crop
    });
    const n = {
      canvas: t,
      timestamp: e.timestamp,
      duration: e.duration
    };
    return e.close(), n;
  }
  /**
   * Retrieves a canvas with the video frame corresponding to the given timestamp, in seconds. More specifically,
   * returns the last video frame (in presentation order) with a start timestamp less than or equal to the given
   * timestamp. Returns null if the timestamp is before the track's first timestamp.
   *
   * @param timestamp - The timestamp used for retrieval, in seconds.
   */
  async getCanvas(e) {
    Ze(e);
    const t = await this._videoSampleSink.getSample(e);
    return t && this._videoSampleToWrappedCanvas(t);
  }
  /**
   * Creates an async iterator that yields canvases with the video frames of this track in presentation order. This
   * method will intelligently pre-decode a few frames ahead to enable fast iteration.
   *
   * @param startTimestamp - The timestamp in seconds at which to start yielding canvases (inclusive).
   * @param endTimestamp - The timestamp in seconds at which to stop yielding canvases (exclusive).
   */
  canvases(e = 0, t = 1 / 0) {
    return qr(this._videoSampleSink.samples(e, t), (i) => this._videoSampleToWrappedCanvas(i));
  }
  /**
   * Creates an async iterator that yields a canvas for each timestamp in the argument. This method uses an optimized
   * decoding pipeline if these timestamps are monotonically sorted, decoding each packet at most once, and is
   * therefore more efficient than manually getting the canvas for every timestamp. The iterator may yield null if
   * no frame is available for a given timestamp.
   *
   * @param timestamps - An iterable or async iterable of timestamps in seconds.
   */
  canvasesAtTimestamps(e) {
    return qr(this._videoSampleSink.samplesAtTimestamps(e), (t) => t && this._videoSampleToWrappedCanvas(t));
  }
}
class ul extends Os {
  constructor(e, t, i, s) {
    super(e, t), this.decoder = null, this.customDecoder = null, this.customDecoderCallSerializer = new ni(), this.customDecoderQueueSize = 0, this.currentTimestamp = null;
    const n = (o) => {
      (this.currentTimestamp === null || Math.abs(o.timestamp - this.currentTimestamp) >= o.duration) && (this.currentTimestamp = o.timestamp);
      const c = this.currentTimestamp;
      if (this.currentTimestamp += o.duration, o.numberOfFrames === 0) {
        o.close();
        return;
      }
      const l = s.sampleRate;
      o.setTimestamp(Math.round(c * l) / l), e(o);
    }, a = Qr.find((o) => o.supports(i, s));
    if (a)
      this.customDecoder = new a(), this.customDecoder.codec = i, this.customDecoder.config = s, this.customDecoder.onSample = (o) => {
        if (!(o instanceof he))
          throw new TypeError("The argument passed to onSample must be an AudioSample.");
        n(o);
      }, this.customDecoderCallSerializer.call(() => this.customDecoder.init());
    else {
      const o = new Error("Decoding error").stack;
      this.decoder = new AudioDecoder({
        output: (c) => {
          try {
            n(new he(c));
          } catch (l) {
            this.onError(l);
          }
        },
        error: (c) => {
          c.stack = o, this.onError(c);
        }
      }), this.decoder.configure(s);
    }
  }
  getDecodeQueueSize() {
    return this.customDecoder ? this.customDecoderQueueSize : (p(this.decoder), this.decoder.decodeQueueSize);
  }
  decode(e) {
    this.customDecoder ? (this.customDecoderQueueSize++, this.customDecoderCallSerializer.call(() => this.customDecoder.decode(e)).then(() => this.customDecoderQueueSize--)) : (p(this.decoder), this.decoder.decode(e.toEncodedAudioChunk()));
  }
  flush() {
    return this.customDecoder ? this.customDecoderCallSerializer.call(() => this.customDecoder.flush()) : (p(this.decoder), this.decoder.flush());
  }
  close() {
    this.customDecoder ? this.customDecoderCallSerializer.call(() => this.customDecoder.close()) : (p(this.decoder), this.decoder.close());
  }
}
class hl extends Os {
  constructor(e, t, i) {
    super(e, t), this.decoderConfig = i, this.currentTimestamp = null, p(se.includes(i.codec)), this.codec = i.codec;
    const { dataType: s, sampleSize: n, littleEndian: a } = We(this.codec);
    switch (this.inputSampleSize = n, n) {
      case 1:
        s === "unsigned" ? this.readInputValue = (o, c) => o.getUint8(c) - 2 ** 7 : s === "signed" ? this.readInputValue = (o, c) => o.getInt8(c) : s === "ulaw" ? this.readInputValue = (o, c) => rl(o.getUint8(c)) : s === "alaw" ? this.readInputValue = (o, c) => sl(o.getUint8(c)) : p(!1);
        break;
      case 2:
        s === "unsigned" ? this.readInputValue = (o, c) => o.getUint16(c, a) - 2 ** 15 : s === "signed" ? this.readInputValue = (o, c) => o.getInt16(c, a) : p(!1);
        break;
      case 3:
        s === "unsigned" ? this.readInputValue = (o, c) => ii(o, c, a) - 2 ** 23 : s === "signed" ? this.readInputValue = (o, c) => lc(o, c, a) : p(!1);
        break;
      case 4:
        s === "unsigned" ? this.readInputValue = (o, c) => o.getUint32(c, a) - 2 ** 31 : s === "signed" ? this.readInputValue = (o, c) => o.getInt32(c, a) : s === "float" ? this.readInputValue = (o, c) => o.getFloat32(c, a) : p(!1);
        break;
      case 8:
        s === "float" ? this.readInputValue = (o, c) => o.getFloat64(c, a) : p(!1);
        break;
      default:
        ge(n), p(!1);
    }
    switch (n) {
      case 1:
        s === "ulaw" || s === "alaw" ? (this.outputSampleSize = 2, this.outputFormat = "s16", this.writeOutputValue = (o, c, l) => o.setInt16(c, l, !0)) : (this.outputSampleSize = 1, this.outputFormat = "u8", this.writeOutputValue = (o, c, l) => o.setUint8(c, l + 2 ** 7));
        break;
      case 2:
        this.outputSampleSize = 2, this.outputFormat = "s16", this.writeOutputValue = (o, c, l) => o.setInt16(c, l, !0);
        break;
      case 3:
        this.outputSampleSize = 4, this.outputFormat = "s32", this.writeOutputValue = (o, c, l) => o.setInt32(c, l << 8, !0);
        break;
      case 4:
        this.outputSampleSize = 4, s === "float" ? (this.outputFormat = "f32", this.writeOutputValue = (o, c, l) => o.setFloat32(c, l, !0)) : (this.outputFormat = "s32", this.writeOutputValue = (o, c, l) => o.setInt32(c, l, !0));
        break;
      case 8:
        this.outputSampleSize = 4, this.outputFormat = "f32", this.writeOutputValue = (o, c, l) => o.setFloat32(c, l, !0);
        break;
      default:
        ge(n), p(!1);
    }
  }
  getDecodeQueueSize() {
    return 0;
  }
  decode(e) {
    const t = L(e.data), i = e.byteLength / this.decoderConfig.numberOfChannels / this.inputSampleSize, s = i * this.decoderConfig.numberOfChannels * this.outputSampleSize, n = new ArrayBuffer(s), a = new DataView(n);
    for (let d = 0; d < i * this.decoderConfig.numberOfChannels; d++) {
      const u = d * this.inputSampleSize, h = d * this.outputSampleSize, m = this.readInputValue(t, u);
      this.writeOutputValue(a, h, m);
    }
    const o = i / this.decoderConfig.sampleRate;
    (this.currentTimestamp === null || Math.abs(e.timestamp - this.currentTimestamp) >= o) && (this.currentTimestamp = e.timestamp);
    const c = this.currentTimestamp;
    this.currentTimestamp += o;
    const l = new he({
      format: this.outputFormat,
      data: n,
      numberOfChannels: this.decoderConfig.numberOfChannels,
      sampleRate: this.decoderConfig.sampleRate,
      numberOfFrames: i,
      timestamp: c
    });
    this.onSample(l);
  }
  async flush() {
  }
  close() {
  }
}
class Gr extends Us {
  /** Creates a new {@link AudioSampleSink} for the given {@link InputAudioTrack}. */
  constructor(e) {
    if (!(e instanceof ve))
      throw new TypeError("audioTrack must be an InputAudioTrack.");
    super(), this._track = e;
  }
  /** @internal */
  async _createDecoder(e, t) {
    if (!await this._track.canDecode())
      throw new Error("This audio track cannot be decoded by this browser. Make sure to check decodability before using a track.");
    const i = this._track.codec, s = await this._track.getDecoderConfig();
    return p(i && s), se.includes(s.codec) ? new hl(e, t, s) : new ul(e, t, i, s);
  }
  /** @internal */
  _createPacketSink() {
    return new Zt(this._track);
  }
  /**
   * Retrieves the audio sample corresponding to the given timestamp, in seconds. More specifically, returns
   * the last audio sample (in presentation order) with a start timestamp less than or equal to the given timestamp.
   * Returns null if the timestamp is before the track's first timestamp.
   *
   * @param timestamp - The timestamp used for retrieval, in seconds.
   */
  async getSample(e) {
    Ze(e);
    for await (const t of this.mediaSamplesAtTimestamps([e]))
      return t;
    throw new Error("Internal error: Iterator returned nothing.");
  }
  /**
   * Creates an async iterator that yields the audio samples of this track in presentation order. This method
   * will intelligently pre-decode a few samples ahead to enable fast iteration.
   *
   * @param startTimestamp - The timestamp in seconds at which to start yielding samples (inclusive).
   * @param endTimestamp - The timestamp in seconds at which to stop yielding samples (exclusive).
   */
  samples(e = 0, t = 1 / 0) {
    return this.mediaSamplesInRange(e, t);
  }
  /**
   * Creates an async iterator that yields an audio sample for each timestamp in the argument. This method
   * uses an optimized decoding pipeline if these timestamps are monotonically sorted, decoding each packet at most
   * once, and is therefore more efficient than manually getting the sample for every timestamp. The iterator may
   * yield null if no sample is available for a given timestamp.
   *
   * @param timestamps - An iterable or async iterable of timestamps in seconds.
   */
  samplesAtTimestamps(e) {
    return this.mediaSamplesAtTimestamps(e);
  }
}
class fl {
  /** Creates a new {@link AudioBufferSink} for the given {@link InputAudioTrack}. */
  constructor(e) {
    if (!(e instanceof ve))
      throw new TypeError("audioTrack must be an InputAudioTrack.");
    this._audioSampleSink = new Gr(e);
  }
  /** @internal */
  _audioSampleToWrappedArrayBuffer(e) {
    const t = {
      buffer: e.toAudioBuffer(),
      timestamp: e.timestamp,
      duration: e.duration
    };
    return e.close(), t;
  }
  /**
   * Retrieves the audio buffer corresponding to the given timestamp, in seconds. More specifically, returns
   * the last audio buffer (in presentation order) with a start timestamp less than or equal to the given timestamp.
   * Returns null if the timestamp is before the track's first timestamp.
   *
   * @param timestamp - The timestamp used for retrieval, in seconds.
   */
  async getBuffer(e) {
    Ze(e);
    const t = await this._audioSampleSink.getSample(e);
    return t && this._audioSampleToWrappedArrayBuffer(t);
  }
  /**
   * Creates an async iterator that yields audio buffers of this track in presentation order. This method
   * will intelligently pre-decode a few buffers ahead to enable fast iteration.
   *
   * @param startTimestamp - The timestamp in seconds at which to start yielding buffers (inclusive).
   * @param endTimestamp - The timestamp in seconds at which to stop yielding buffers (exclusive).
   */
  buffers(e = 0, t = 1 / 0) {
    return qr(this._audioSampleSink.samples(e, t), (i) => this._audioSampleToWrappedArrayBuffer(i));
  }
  /**
   * Creates an async iterator that yields an audio buffer for each timestamp in the argument. This method
   * uses an optimized decoding pipeline if these timestamps are monotonically sorted, decoding each packet at most
   * once, and is therefore more efficient than manually getting the buffer for every timestamp. The iterator may
   * yield null if no buffer is available for a given timestamp.
   *
   * @param timestamps - An iterable or async iterable of timestamps in seconds.
   */
  buffersAtTimestamps(e) {
    return qr(this._audioSampleSink.samplesAtTimestamps(e), (t) => t && this._audioSampleToWrappedArrayBuffer(t));
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class mi {
  /** @internal */
  constructor(e, t) {
    this.input = e, this._backing = t;
  }
  /** Returns true if and only if this track is a video track. */
  isVideoTrack() {
    return this instanceof Dt;
  }
  /** Returns true if and only if this track is an audio track. */
  isAudioTrack() {
    return this instanceof ve;
  }
  /** The unique ID of this track in the input file. */
  get id() {
    return this._backing.getId();
  }
  /**
   * The 1-based index of this track among all tracks of the same type in the input file. For example, the first
   * video track has number 1, the second video track has number 2, and so on. The index refers to the order in
   * which the tracks are returned by {@link Input.getTracks}.
   */
  get number() {
    return this._backing.getNumber();
  }
  /**
   * The identifier of the codec used internally by the container. It is not homogenized by Mediabunny
   * and depends entirely on the container format.
   *
   * This field can be used to determine the codec of a track in case Mediabunny doesn't know that codec.
   *
   * - For ISOBMFF files, this field returns the name of the Sample Description Box (e.g. `'avc1'`).
   * - For Matroska files, this field returns the value of the `CodecID` element.
   * - For WAVE files, this field returns the value of the format tag in the `'fmt '` chunk.
   * - For ADTS files, this field contains the `MPEG-4 Audio Object Type`.
   * - For MPEG-TS files, this field contains the `streamType` value from the Program Map Table.
   * - In all other cases, this field is `null`.
   */
  get internalCodecId() {
    return this._backing.getInternalCodecId();
  }
  /**
   * The ISO 639-2/T language code for this track. If the language is unknown, this field is `'und'` (undetermined).
   */
  get languageCode() {
    return this._backing.getLanguageCode();
  }
  /** A user-defined name for this track. */
  get name() {
    return this._backing.getName();
  }
  /**
   * A positive number x such that all timestamps and durations of all packets of this track are
   * integer multiples of 1/x.
   */
  get timeResolution() {
    return this._backing.getTimeResolution();
  }
  /** The track's disposition, i.e. information about its intended usage. */
  get disposition() {
    return this._backing.getDisposition();
  }
  /**
   * Returns the start timestamp of the first packet of this track, in seconds. While often near zero, this value
   * may be positive or even negative. A negative starting timestamp means the track's timing has been offset. Samples
   * with a negative timestamp should not be presented.
   */
  getFirstTimestamp() {
    return this._backing.getFirstTimestamp();
  }
  /** Returns the end timestamp of the last packet of this track, in seconds. */
  computeDuration() {
    return this._backing.computeDuration();
  }
  /**
   * Computes aggregate packet statistics for this track, such as average packet rate or bitrate.
   *
   * @param targetPacketCount - This optional parameter sets a target for how many packets this method must have
   * looked at before it can return early; this means, you can use it to aggregate only a subset (prefix) of all
   * packets. This is very useful for getting a great estimate of video frame rate without having to scan through the
   * entire file.
   */
  async computePacketStats(e = 1 / 0) {
    const t = new Zt(this);
    let i = 1 / 0, s = -1 / 0, n = 0, a = 0;
    for await (const o of t.packets(void 0, void 0, { metadataOnly: !0 })) {
      if (n >= e && o.timestamp >= s)
        break;
      i = Math.min(i, o.timestamp), s = Math.max(s, o.timestamp + o.duration), n++, a += o.byteLength;
    }
    return {
      packetCount: n,
      averagePacketRate: n ? Number((n / (s - i)).toPrecision(16)) : 0,
      averageBitrate: n ? Number((8 * a / (s - i)).toPrecision(16)) : 0
    };
  }
}
class Dt extends mi {
  /** @internal */
  constructor(e, t) {
    super(e, t), this._backing = t, this.pixelAspectRatio = ai({
      num: this._backing.getSquarePixelWidth() * this._backing.getCodedHeight(),
      den: this._backing.getSquarePixelHeight() * this._backing.getCodedWidth()
    });
  }
  get type() {
    return "video";
  }
  get codec() {
    return this._backing.getCodec();
  }
  /** The width in pixels of the track's coded samples, before any transformations or rotations. */
  get codedWidth() {
    return this._backing.getCodedWidth();
  }
  /** The height in pixels of the track's coded samples, before any transformations or rotations. */
  get codedHeight() {
    return this._backing.getCodedHeight();
  }
  /** The angle in degrees by which the track's frames should be rotated (clockwise). */
  get rotation() {
    return this._backing.getRotation();
  }
  /** The width of the track's frames in square pixels, adjusted for pixel aspect ratio but before rotation. */
  get squarePixelWidth() {
    return this._backing.getSquarePixelWidth();
  }
  /** The height of the track's frames in square pixels, adjusted for pixel aspect ratio but before rotation. */
  get squarePixelHeight() {
    return this._backing.getSquarePixelHeight();
  }
  /** The display width of the track's frames in pixels, after aspect ratio adjustment and rotation. */
  get displayWidth() {
    return this._backing.getRotation() % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight;
  }
  /** The display height of the track's frames in pixels, after aspect ratio adjustment and rotation. */
  get displayHeight() {
    return this._backing.getRotation() % 180 === 0 ? this.squarePixelHeight : this.squarePixelWidth;
  }
  /** Returns the color space of the track's samples. */
  getColorSpace() {
    return this._backing.getColorSpace();
  }
  /** If this method returns true, the track's samples use a high dynamic range (HDR). */
  async hasHighDynamicRange() {
    const e = await this._backing.getColorSpace();
    return e.primaries === "bt2020" || e.primaries === "smpte432" || e.transfer === "pg" || e.transfer === "hlg" || e.matrix === "bt2020-ncl";
  }
  /** Checks if this track may contain transparent samples with alpha data. */
  canBeTransparent() {
    return this._backing.canBeTransparent();
  }
  /**
   * Returns the [decoder configuration](https://www.w3.org/TR/webcodecs/#video-decoder-config) for decoding the
   * track's packets using a [`VideoDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/VideoDecoder). Returns
   * null if the track's codec is unknown.
   */
  getDecoderConfig() {
    return this._backing.getDecoderConfig();
  }
  async getCodecParameterString() {
    return (await this._backing.getDecoderConfig())?.codec ?? null;
  }
  async canDecode() {
    try {
      const e = await this._backing.getDecoderConfig();
      if (!e)
        return !1;
      const t = this._backing.getCodec();
      return p(t !== null), $r.some((s) => s.supports(t, e)) ? !0 : typeof VideoDecoder > "u" ? !1 : (await VideoDecoder.isConfigSupported(e)).supported === !0;
    } catch (e) {
      return console.error("Error during decodability check:", e), !1;
    }
  }
  async determinePacketType(e) {
    if (!(e instanceof X))
      throw new TypeError("packet must be an EncodedPacket.");
    if (e.isMetadataOnly)
      throw new TypeError("packet must not be metadata-only to determine its type.");
    if (this.codec === null)
      return null;
    const t = await this.getDecoderConfig();
    return p(t), ka(this.codec, t, e.data);
  }
}
class ve extends mi {
  /** @internal */
  constructor(e, t) {
    super(e, t), this._backing = t;
  }
  get type() {
    return "audio";
  }
  get codec() {
    return this._backing.getCodec();
  }
  /** The number of audio channels in the track. */
  get numberOfChannels() {
    return this._backing.getNumberOfChannels();
  }
  /** The track's audio sample rate in hertz. */
  get sampleRate() {
    return this._backing.getSampleRate();
  }
  /**
   * Returns the [decoder configuration](https://www.w3.org/TR/webcodecs/#audio-decoder-config) for decoding the
   * track's packets using an [`AudioDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/AudioDecoder). Returns
   * null if the track's codec is unknown.
   */
  getDecoderConfig() {
    return this._backing.getDecoderConfig();
  }
  async getCodecParameterString() {
    return (await this._backing.getDecoderConfig())?.codec ?? null;
  }
  async canDecode() {
    try {
      const e = await this._backing.getDecoderConfig();
      if (!e)
        return !1;
      const t = this._backing.getCodec();
      return p(t !== null), Qr.some((i) => i.supports(t, e)) || e.codec.startsWith("pcm-") ? !0 : typeof AudioDecoder > "u" ? !1 : (await AudioDecoder.isConfigSupported(e)).supported === !0;
    } catch (e) {
      return console.error("Error during decodability check:", e), !1;
    }
  }
  async determinePacketType(e) {
    if (!(e instanceof X))
      throw new TypeError("packet must be an EncodedPacket.");
    return this.codec === null ? null : "key";
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Ba = (r) => {
  let t = (r.hasVideo ? "video/" : r.hasAudio ? "audio/" : "application/") + (r.isQuickTime ? "quicktime" : "mp4");
  if (r.codecStrings.length > 0) {
    const i = [...new Set(r.codecStrings)];
    t += `; codecs="${i.join(", ")}"`;
  }
  return t;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Ke = 8, Pt = 16, at = (r) => {
  let e = A(r);
  const t = le(r, 4);
  let i = 8;
  e === 1 && (e = Fe(r), i = 16);
  const n = e - i;
  return n < 0 ? null : { name: t, totalSize: e, headerSize: i, contentSize: n };
}, yt = (r) => _t(r) / 65536, Fi = (r) => _t(r) / 1073741824, Bi = (r) => {
  let e = 0;
  for (let t = 0; t < 4; t++) {
    e <<= 7;
    const i = M(r);
    if (e |= i & 127, (i & 128) === 0)
      break;
  }
  return e;
}, De = (r) => {
  let e = oe(r);
  return r.skip(2), e = Math.min(e, r.remainingLength), Ee.decode(N(r, e));
}, ml = (r) => {
  const e = at(r);
  if (!e || e.name !== "data" || r.remainingLength < 8)
    return null;
  const t = A(r);
  r.skip(4);
  const i = N(r, e.contentSize - 8);
  switch (t) {
    case 1:
      return Ee.decode(i);
    // UTF-8
    case 2:
      return new TextDecoder("utf-16be").decode(i);
    // UTF-16-BE
    case 13:
      return new It(i, "image/jpeg");
    case 14:
      return new It(i, "image/png");
    case 27:
      return new It(i, "image/bmp");
    default:
      return i;
  }
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class pl extends mt {
  constructor(e) {
    super(e), this.moovSlice = null, this.currentTrack = null, this.tracks = [], this.metadataPromise = null, this.movieTimescale = -1, this.movieDurationInTimescale = -1, this.isQuickTime = !1, this.metadataTags = {}, this.currentMetadataKeys = null, this.isFragmented = !1, this.fragmentTrackDefaults = [], this.currentFragment = null, this.lastReadFragment = null, this.reader = e._reader;
  }
  async computeDuration() {
    const e = await this.getTracks(), t = await Promise.all(e.map((i) => i.computeDuration()));
    return Math.max(0, ...t);
  }
  async getTracks() {
    return await this.readMetadata(), this.tracks.map((e) => e.inputTrack);
  }
  async getMimeType() {
    await this.readMetadata();
    const e = await Promise.all(this.tracks.map((t) => t.inputTrack.getCodecParameterString()));
    return Ba({
      isQuickTime: this.isQuickTime,
      hasVideo: this.tracks.some((t) => t.info?.type === "video"),
      hasAudio: this.tracks.some((t) => t.info?.type === "audio"),
      codecStrings: e.filter(Boolean)
    });
  }
  async getMetadataTags() {
    return await this.readMetadata(), this.metadataTags;
  }
  readMetadata() {
    return this.metadataPromise ??= (async () => {
      let e = 0;
      for (; ; ) {
        let t = this.reader.requestSliceRange(e, Ke, Pt);
        if (t instanceof Promise && (t = await t), !t)
          break;
        const i = e, s = at(t);
        if (!s)
          break;
        if (s.name === "ftyp") {
          const n = le(t, 4);
          this.isQuickTime = n === "qt  ";
        } else if (s.name === "moov") {
          let n = this.reader.requestSlice(t.filePos, s.contentSize);
          if (n instanceof Promise && (n = await n), !n)
            break;
          this.moovSlice = n, this.readContiguousBoxes(this.moovSlice), this.tracks.sort((a, o) => Number(o.disposition.default) - Number(a.disposition.default));
          for (const a of this.tracks) {
            const o = a.editListPreviousSegmentDurations / this.movieTimescale;
            a.editListOffset -= Math.round(o * a.timescale);
          }
          break;
        }
        e = i + s.totalSize;
      }
      if (this.isFragmented && this.reader.fileSize !== null) {
        let t = this.reader.requestSlice(this.reader.fileSize - 4, 4);
        t instanceof Promise && (t = await t), p(t);
        const i = A(t), s = this.reader.fileSize - i;
        if (s >= 0 && s <= this.reader.fileSize - Pt) {
          let n = this.reader.requestSliceRange(s, Ke, Pt);
          if (n instanceof Promise && (n = await n), n) {
            const a = at(n);
            if (a && a.name === "mfra") {
              let o = this.reader.requestSlice(n.filePos, a.contentSize);
              o instanceof Promise && (o = await o), o && this.readContiguousBoxes(o);
            }
          }
        }
      }
    })();
  }
  getSampleTableForTrack(e) {
    if (e.sampleTable)
      return e.sampleTable;
    const t = {
      sampleTimingEntries: [],
      sampleCompositionTimeOffsets: [],
      sampleSizes: [],
      keySampleIndices: null,
      chunkOffsets: [],
      sampleToChunk: [],
      presentationTimestamps: null,
      presentationTimestampIndexMap: null
    };
    e.sampleTable = t, p(this.moovSlice);
    const i = this.moovSlice.slice(e.sampleTableByteOffset);
    if (this.currentTrack = e, this.traverseBox(i), this.currentTrack = null, e.info?.type === "audio" && e.info.codec && se.includes(e.info.codec) && t.sampleCompositionTimeOffsets.length === 0) {
      p(e.info?.type === "audio");
      const n = We(e.info.codec), a = [], o = [];
      for (let c = 0; c < t.sampleToChunk.length; c++) {
        const l = t.sampleToChunk[c], d = t.sampleToChunk[c + 1], u = (d ? d.startChunkIndex : t.chunkOffsets.length) - l.startChunkIndex;
        for (let h = 0; h < u; h++) {
          const m = l.startSampleIndex + h * l.samplesPerChunk, g = m + l.samplesPerChunk, f = G(t.sampleTimingEntries, m, (C) => C.startIndex), w = t.sampleTimingEntries[f], k = G(t.sampleTimingEntries, g, (C) => C.startIndex), b = t.sampleTimingEntries[k], T = w.startDecodeTimestamp + (m - w.startIndex) * w.delta, x = b.startDecodeTimestamp + (g - b.startIndex) * b.delta - T, P = ee(a);
          P && P.delta === x ? P.count++ : a.push({
            startIndex: l.startChunkIndex + h,
            startDecodeTimestamp: T,
            count: 1,
            delta: x
          });
          const _ = l.samplesPerChunk * n.sampleSize * e.info.numberOfChannels;
          o.push(_);
        }
        l.startSampleIndex = l.startChunkIndex, l.samplesPerChunk = 1;
      }
      t.sampleTimingEntries = a, t.sampleSizes = o;
    }
    if (t.sampleCompositionTimeOffsets.length > 0) {
      t.presentationTimestamps = [];
      for (const n of t.sampleTimingEntries)
        for (let a = 0; a < n.count; a++)
          t.presentationTimestamps.push({
            presentationTimestamp: n.startDecodeTimestamp + a * n.delta,
            sampleIndex: n.startIndex + a
          });
      for (const n of t.sampleCompositionTimeOffsets)
        for (let a = 0; a < n.count; a++) {
          const o = n.startIndex + a, c = t.presentationTimestamps[o];
          c && (c.presentationTimestamp += n.offset);
        }
      t.presentationTimestamps.sort((n, a) => n.presentationTimestamp - a.presentationTimestamp), t.presentationTimestampIndexMap = Array(t.presentationTimestamps.length).fill(-1);
      for (let n = 0; n < t.presentationTimestamps.length; n++)
        t.presentationTimestampIndexMap[t.presentationTimestamps[n].sampleIndex] = n;
    }
    return t;
  }
  async readFragment(e) {
    if (this.lastReadFragment?.moofOffset === e)
      return this.lastReadFragment;
    let t = this.reader.requestSliceRange(e, Ke, Pt);
    t instanceof Promise && (t = await t), p(t);
    const i = at(t);
    p(i?.name === "moof");
    let s = this.reader.requestSlice(e, i.totalSize);
    s instanceof Promise && (s = await s), p(s), this.traverseBox(s);
    const n = this.lastReadFragment;
    p(n && n.moofOffset === e);
    for (const [, a] of n.trackData) {
      const o = a.track, { fragmentPositionCache: c } = o;
      if (!a.startTimestampIsFinal) {
        const d = o.fragmentLookupTable.find((u) => u.moofOffset === n.moofOffset);
        if (d)
          Ri(a, d.timestamp);
        else {
          const u = G(c, n.moofOffset - 1, (h) => h.moofOffset);
          if (u !== -1) {
            const h = c[u];
            Ri(a, h.endTimestamp);
          }
        }
        a.startTimestampIsFinal = !0;
      }
      const l = G(c, a.startTimestamp, (d) => d.startTimestamp);
      (l === -1 || c[l].moofOffset !== n.moofOffset) && c.splice(l + 1, 0, {
        moofOffset: n.moofOffset,
        startTimestamp: a.startTimestamp,
        endTimestamp: a.endTimestamp
      });
    }
    return n;
  }
  readContiguousBoxes(e) {
    const t = e.filePos;
    for (; e.filePos - t <= e.length - Ke && this.traverseBox(e); )
      ;
  }
  // eslint-disable-next-line @stylistic/generator-star-spacing
  *iterateContiguousBoxes(e) {
    const t = e.filePos;
    for (; e.filePos - t <= e.length - Ke; ) {
      const i = e.filePos, s = at(e);
      if (!s)
        break;
      yield { boxInfo: s, slice: e }, e.filePos = i + s.totalSize;
    }
  }
  traverseBox(e) {
    const t = e.filePos, i = at(e);
    if (!i)
      return !1;
    const s = e.filePos, n = t + i.totalSize;
    switch (i.name) {
      case "mdia":
      case "minf":
      case "dinf":
      case "mfra":
      case "edts":
        this.readContiguousBoxes(e.slice(s, i.contentSize));
        break;
      case "mvhd":
        {
          const a = M(e);
          e.skip(3), a === 1 ? (e.skip(16), this.movieTimescale = A(e), this.movieDurationInTimescale = Fe(e)) : (e.skip(8), this.movieTimescale = A(e), this.movieDurationInTimescale = A(e));
        }
        break;
      case "trak":
        {
          const a = {
            id: -1,
            demuxer: this,
            inputTrack: null,
            disposition: {
              ...ft
            },
            info: null,
            timescale: -1,
            durationInMovieTimescale: -1,
            durationInMediaTimescale: -1,
            rotation: 0,
            internalCodecId: null,
            name: null,
            languageCode: ke,
            sampleTableByteOffset: -1,
            sampleTable: null,
            fragmentLookupTable: [],
            currentFragmentState: null,
            fragmentPositionCache: [],
            editListPreviousSegmentDurations: 0,
            editListOffset: 0
          };
          if (this.currentTrack = a, this.readContiguousBoxes(e.slice(s, i.contentSize)), a.id !== -1 && a.timescale !== -1 && a.info !== null) {
            if (a.info.type === "video" && a.info.width !== -1) {
              const o = a;
              a.inputTrack = new Dt(this.input, new gl(o)), this.tracks.push(a);
            } else if (a.info.type === "audio" && a.info.numberOfChannels !== -1) {
              const o = a;
              a.inputTrack = new ve(this.input, new wl(o)), this.tracks.push(a);
            }
          }
          this.currentTrack = null;
        }
        break;
      case "tkhd":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          const o = M(e), l = !!(Ht(e) & 1);
          if (a.disposition.default = l, o === 0)
            e.skip(8), a.id = A(e), e.skip(4), a.durationInMovieTimescale = A(e);
          else if (o === 1)
            e.skip(16), a.id = A(e), e.skip(4), a.durationInMovieTimescale = Fe(e);
          else
            throw new Error(`Incorrect track header version ${o}.`);
          e.skip(2 * 4 + 2 + 2 + 2 + 2);
          const d = [
            yt(e),
            yt(e),
            Fi(e),
            yt(e),
            yt(e),
            Fi(e),
            yt(e),
            yt(e),
            Fi(e)
          ], u = ti(Qi(Tl(d), 90));
          p(u === 0 || u === 90 || u === 180 || u === 270), a.rotation = u;
        }
        break;
      case "elst":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          const o = M(e);
          e.skip(3);
          let c = !1, l = 0;
          const d = A(e);
          for (let u = 0; u < d; u++) {
            const h = o === 1 ? Fe(e) : A(e), m = o === 1 ? nd(e) : _t(e), g = yt(e);
            if (h !== 0) {
              if (c) {
                console.warn("Unsupported edit list: multiple edits are not currently supported. Only using first edit.");
                break;
              }
              if (m === -1) {
                l += h;
                continue;
              }
              if (g !== 1) {
                console.warn("Unsupported edit list entry: media rate must be 1.");
                break;
              }
              a.editListPreviousSegmentDurations = l, a.editListOffset = m, c = !0;
            }
          }
        }
        break;
      case "mdhd":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          const o = M(e);
          e.skip(3), o === 0 ? (e.skip(8), a.timescale = A(e), a.durationInMediaTimescale = A(e)) : o === 1 && (e.skip(16), a.timescale = A(e), a.durationInMediaTimescale = Fe(e));
          let c = oe(e);
          if (c > 0) {
            a.languageCode = "";
            for (let l = 0; l < 3; l++)
              a.languageCode = String.fromCharCode(96 + (c & 31)) + a.languageCode, c >>= 5;
            Sr(a.languageCode) || (a.languageCode = ke);
          }
        }
        break;
      case "hdlr":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          e.skip(8);
          const o = le(e, 4);
          o === "vide" ? a.info = {
            type: "video",
            width: -1,
            height: -1,
            squarePixelWidth: -1,
            squarePixelHeight: -1,
            codec: null,
            codecDescription: null,
            colorSpace: null,
            avcType: null,
            avcCodecInfo: null,
            hevcCodecInfo: null,
            vp9CodecInfo: null,
            av1CodecInfo: null
          } : o === "soun" && (a.info = {
            type: "audio",
            numberOfChannels: -1,
            sampleRate: -1,
            codec: null,
            codecDescription: null,
            aacCodecInfo: null
          });
        }
        break;
      case "stbl":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          a.sampleTableByteOffset = t, this.readContiguousBoxes(e.slice(s, i.contentSize));
        }
        break;
      case "stsd":
        {
          const a = this.currentTrack;
          if (!a || a.info === null || a.sampleTable)
            break;
          const o = M(e);
          e.skip(3);
          const c = A(e);
          for (let l = 0; l < c; l++) {
            const d = e.filePos, u = at(e);
            if (!u)
              break;
            a.internalCodecId = u.name;
            const h = u.name.toLowerCase();
            if (a.info.type === "video")
              h === "avc1" || h === "avc3" ? (a.info.codec = "avc", a.info.avcType = h === "avc1" ? 1 : 3) : h === "hvc1" || h === "hev1" ? a.info.codec = "hevc" : h === "vp08" ? a.info.codec = "vp8" : h === "vp09" ? a.info.codec = "vp9" : h === "av01" ? a.info.codec = "av1" : console.warn(`Unsupported video codec (sample entry type '${u.name}').`), e.skip(6 * 1 + 2 + 2 + 2 + 3 * 4), a.info.width = oe(e), a.info.height = oe(e), a.info.squarePixelWidth = a.info.width, a.info.squarePixelHeight = a.info.height, e.skip(50), this.readContiguousBoxes(e.slice(e.filePos, d + u.totalSize - e.filePos));
            else {
              h === "mp4a" || (h === "opus" ? a.info.codec = "opus" : h === "flac" ? a.info.codec = "flac" : h === "twos" || h === "sowt" || h === "raw " || h === "in24" || h === "in32" || h === "fl32" || h === "fl64" || h === "lpcm" || h === "ipcm" || h === "fpcm" || (h === "ulaw" ? a.info.codec = "ulaw" : h === "alaw" ? a.info.codec = "alaw" : h === "ac-3" ? a.info.codec = "ac3" : h === "ec-3" ? a.info.codec = "eac3" : console.warn(`Unsupported audio codec (sample entry type '${u.name}').`))), e.skip(6 * 1 + 2);
              const m = oe(e);
              e.skip(3 * 2);
              let g = oe(e), f = oe(e);
              e.skip(2 * 2);
              let w = A(e) / 65536;
              if (o === 0 && m > 0) {
                if (m === 1)
                  e.skip(4), f = 8 * A(e), e.skip(2 * 4);
                else if (m === 2) {
                  e.skip(4), w = ko(e), g = A(e), e.skip(4), f = A(e);
                  const k = A(e);
                  if (e.skip(2 * 4), h === "lpcm") {
                    const b = f + 7 >> 3, T = !!(k & 1), S = !!(k & 2), x = k & 4 ? -1 : 0;
                    f > 0 && f <= 64 && (T ? f === 32 && (a.info.codec = S ? "pcm-f32be" : "pcm-f32") : x & 1 << b - 1 ? b === 1 ? a.info.codec = "pcm-s8" : b === 2 ? a.info.codec = S ? "pcm-s16be" : "pcm-s16" : b === 3 ? a.info.codec = S ? "pcm-s24be" : "pcm-s24" : b === 4 && (a.info.codec = S ? "pcm-s32be" : "pcm-s32") : b === 1 && (a.info.codec = "pcm-u8")), a.info.codec === null && console.warn("Unsupported PCM format.");
                  }
                }
              }
              a.info.codec === "opus" && (w = ir), a.info.numberOfChannels = g, a.info.sampleRate = w, h === "twos" ? f === 8 ? a.info.codec = "pcm-s8" : f === 16 ? a.info.codec = "pcm-s16be" : (console.warn(`Unsupported sample size ${f} for codec 'twos'.`), a.info.codec = null) : h === "sowt" ? f === 8 ? a.info.codec = "pcm-s8" : f === 16 ? a.info.codec = "pcm-s16" : (console.warn(`Unsupported sample size ${f} for codec 'sowt'.`), a.info.codec = null) : h === "raw " ? a.info.codec = "pcm-u8" : h === "in24" ? a.info.codec = "pcm-s24be" : h === "in32" ? a.info.codec = "pcm-s32be" : h === "fl32" ? a.info.codec = "pcm-f32be" : h === "fl64" ? a.info.codec = "pcm-f64be" : h === "ipcm" ? a.info.codec = "pcm-s16be" : h === "fpcm" && (a.info.codec = "pcm-f32be"), this.readContiguousBoxes(e.slice(e.filePos, d + u.totalSize - e.filePos));
            }
          }
        }
        break;
      case "avcC":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info), a.info.codecDescription = N(e, i.contentSize);
        }
        break;
      case "hvcC":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info), a.info.codecDescription = N(e, i.contentSize);
        }
        break;
      case "vpcC":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "video"), e.skip(4);
          const o = M(e), c = M(e), l = M(e), d = l >> 4, u = l >> 1 & 7, h = l & 1, m = M(e), g = M(e), f = M(e);
          a.info.vp9CodecInfo = {
            profile: o,
            level: c,
            bitDepth: d,
            chromaSubsampling: u,
            videoFullRangeFlag: h,
            colourPrimaries: m,
            transferCharacteristics: g,
            matrixCoefficients: f
          };
        }
        break;
      case "av1C":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "video"), e.skip(1);
          const o = M(e), c = o >> 5, l = o & 31, d = M(e), u = d >> 7, h = d >> 6 & 1, m = d >> 5 & 1, g = d >> 4 & 1, f = d >> 3 & 1, w = d >> 2 & 1, k = d & 3, b = c === 2 && h ? m ? 12 : 10 : h ? 10 : 8;
          a.info.av1CodecInfo = {
            profile: c,
            level: l,
            tier: u,
            bitDepth: b,
            monochrome: g,
            chromaSubsamplingX: f,
            chromaSubsamplingY: w,
            chromaSamplePosition: k
          };
        }
        break;
      case "colr":
        {
          const a = this.currentTrack;
          if (!a || (p(a.info?.type === "video"), le(e, 4) !== "nclx"))
            break;
          const c = oe(e), l = oe(e), d = oe(e), u = !!(M(e) & 128);
          a.info.colorSpace = {
            primaries: Wr[c],
            transfer: Lr[l],
            matrix: Hr[d],
            fullRange: u
          };
        }
        break;
      case "pasp":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "video");
          const o = A(e), c = A(e);
          o > c ? a.info.squarePixelWidth = Math.round(a.info.width * o / c) : a.info.squarePixelHeight = Math.round(a.info.height * c / o);
        }
        break;
      case "wave":
        this.readContiguousBoxes(e.slice(s, i.contentSize));
        break;
      case "esds":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "audio"), e.skip(4);
          const o = M(e);
          p(o === 3), Bi(e), e.skip(2);
          const c = M(e), l = (c & 128) !== 0, d = (c & 64) !== 0, u = (c & 32) !== 0;
          if (l && e.skip(2), d) {
            const w = M(e);
            e.skip(w);
          }
          u && e.skip(2);
          const h = M(e);
          p(h === 4);
          const m = Bi(e), g = e.filePos, f = M(e);
          if (f === 64 || f === 103 ? (a.info.codec = "aac", a.info.aacCodecInfo = {
            isMpeg2: f === 103,
            objectType: null
          }) : f === 105 || f === 107 ? a.info.codec = "mp3" : f === 221 ? a.info.codec = "vorbis" : console.warn(`Unsupported audio codec (objectTypeIndication ${f}) - discarding track.`), e.skip(12), m > e.filePos - g) {
            const w = M(e);
            p(w === 5);
            const k = Bi(e);
            if (a.info.codecDescription = N(e, k), a.info.codec === "aac") {
              const b = Ar(a.info.codecDescription);
              b.numberOfChannels !== null && (a.info.numberOfChannels = b.numberOfChannels), b.sampleRate !== null && (a.info.sampleRate = b.sampleRate);
            }
          }
        }
        break;
      case "enda":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "audio"), oe(e) & 255 && (a.info.codec === "pcm-s16be" ? a.info.codec = "pcm-s16" : a.info.codec === "pcm-s24be" ? a.info.codec = "pcm-s24" : a.info.codec === "pcm-s32be" ? a.info.codec = "pcm-s32" : a.info.codec === "pcm-f32be" ? a.info.codec = "pcm-f32" : a.info.codec === "pcm-f64be" && (a.info.codec = "pcm-f64"));
        }
        break;
      case "pcmC": {
        const a = this.currentTrack;
        if (!a)
          break;
        p(a.info?.type === "audio"), e.skip(4);
        const c = !!(M(e) & 1), l = M(e);
        a.info.codec === "pcm-s16be" ? c ? l === 16 ? a.info.codec = "pcm-s16" : l === 24 ? a.info.codec = "pcm-s24" : l === 32 ? a.info.codec = "pcm-s32" : (console.warn(`Invalid ipcm sample size ${l}.`), a.info.codec = null) : l === 16 ? a.info.codec = "pcm-s16be" : l === 24 ? a.info.codec = "pcm-s24be" : l === 32 ? a.info.codec = "pcm-s32be" : (console.warn(`Invalid ipcm sample size ${l}.`), a.info.codec = null) : a.info.codec === "pcm-f32be" && (c ? l === 32 ? a.info.codec = "pcm-f32" : l === 64 ? a.info.codec = "pcm-f64" : (console.warn(`Invalid fpcm sample size ${l}.`), a.info.codec = null) : l === 32 ? a.info.codec = "pcm-f32be" : l === 64 ? a.info.codec = "pcm-f64be" : (console.warn(`Invalid fpcm sample size ${l}.`), a.info.codec = null));
        break;
      }
      case "dOps":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "audio"), e.skip(1);
          const o = M(e), c = oe(e), l = A(e), d = ds(e), u = M(e);
          let h;
          u !== 0 ? h = N(e, 2 + o) : h = new Uint8Array(0);
          const m = new Uint8Array(19 + h.byteLength), g = new DataView(m.buffer);
          g.setUint32(0, 1332770163, !1), g.setUint32(4, 1214603620, !1), g.setUint8(8, 1), g.setUint8(9, o), g.setUint16(10, c, !0), g.setUint32(12, l, !0), g.setInt16(16, d, !0), g.setUint8(18, u), m.set(h, 19), a.info.codecDescription = m, a.info.numberOfChannels = o;
        }
        break;
      case "dfLa":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "audio"), e.skip(4);
          const o = 127, c = 128, l = e.filePos;
          for (; e.filePos < n; ) {
            const g = M(e), f = Ht(e);
            if ((g & o) === Ye.STREAMINFO) {
              e.skip(10);
              const k = A(e), b = k >>> 12, T = (k >> 9 & 7) + 1;
              a.info.sampleRate = b, a.info.numberOfChannels = T, e.skip(20);
            } else
              e.skip(f);
            if (g & c)
              break;
          }
          const d = e.filePos;
          e.filePos = l;
          const u = N(e, d - l), h = new Uint8Array(4 + u.byteLength);
          new DataView(h.buffer).setUint32(0, 1716281667, !1), h.set(u, 4), a.info.codecDescription = h;
        }
        break;
      case "dac3":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "audio");
          const o = N(e, 3), c = new V(o), l = c.readBits(2);
          c.skipBits(8);
          const d = c.readBits(3), u = c.readBits(1);
          l < 3 && (a.info.sampleRate = ui[l]), a.info.numberOfChannels = Rs[d] + u;
        }
        break;
      case "dec3":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "audio");
          const o = N(e, i.contentSize), c = Zc(o);
          if (!c) {
            console.warn("Invalid dec3 box contents, ignoring.");
            break;
          }
          const l = xa(c);
          l !== null && (a.info.sampleRate = l), a.info.numberOfChannels = Pa(c);
        }
        break;
      case "stts":
        {
          const a = this.currentTrack;
          if (!a || !a.sampleTable)
            break;
          e.skip(4);
          const o = A(e);
          let c = 0, l = 0;
          for (let d = 0; d < o; d++) {
            const u = A(e), h = A(e);
            a.sampleTable.sampleTimingEntries.push({
              startIndex: c,
              startDecodeTimestamp: l,
              count: u,
              delta: h
            }), c += u, l += u * h;
          }
        }
        break;
      case "ctts":
        {
          const a = this.currentTrack;
          if (!a || !a.sampleTable)
            break;
          e.skip(4);
          const o = A(e);
          let c = 0;
          for (let l = 0; l < o; l++) {
            const d = A(e), u = _t(e);
            a.sampleTable.sampleCompositionTimeOffsets.push({
              startIndex: c,
              count: d,
              offset: u
            }), c += d;
          }
        }
        break;
      case "stsz":
        {
          const a = this.currentTrack;
          if (!a || !a.sampleTable)
            break;
          e.skip(4);
          const o = A(e), c = A(e);
          if (o === 0)
            for (let l = 0; l < c; l++) {
              const d = A(e);
              a.sampleTable.sampleSizes.push(d);
            }
          else
            a.sampleTable.sampleSizes.push(o);
        }
        break;
      case "stz2":
        {
          const a = this.currentTrack;
          if (!a || !a.sampleTable)
            break;
          e.skip(4), e.skip(3);
          const o = M(e), c = A(e), l = N(e, Math.ceil(c * o / 8)), d = new V(l);
          for (let u = 0; u < c; u++) {
            const h = d.readBits(o);
            a.sampleTable.sampleSizes.push(h);
          }
        }
        break;
      case "stss":
        {
          const a = this.currentTrack;
          if (!a || !a.sampleTable)
            break;
          e.skip(4), a.sampleTable.keySampleIndices = [];
          const o = A(e);
          for (let c = 0; c < o; c++) {
            const l = A(e) - 1;
            a.sampleTable.keySampleIndices.push(l);
          }
          a.sampleTable.keySampleIndices[0] !== 0 && a.sampleTable.keySampleIndices.unshift(0);
        }
        break;
      case "stsc":
        {
          const a = this.currentTrack;
          if (!a || !a.sampleTable)
            break;
          e.skip(4);
          const o = A(e);
          for (let l = 0; l < o; l++) {
            const d = A(e) - 1, u = A(e), h = A(e);
            a.sampleTable.sampleToChunk.push({
              startSampleIndex: -1,
              startChunkIndex: d,
              samplesPerChunk: u,
              sampleDescriptionIndex: h
            });
          }
          let c = 0;
          for (let l = 0; l < a.sampleTable.sampleToChunk.length; l++)
            if (a.sampleTable.sampleToChunk[l].startSampleIndex = c, l < a.sampleTable.sampleToChunk.length - 1) {
              const u = a.sampleTable.sampleToChunk[l + 1].startChunkIndex - a.sampleTable.sampleToChunk[l].startChunkIndex;
              c += u * a.sampleTable.sampleToChunk[l].samplesPerChunk;
            }
        }
        break;
      case "stco":
        {
          const a = this.currentTrack;
          if (!a || !a.sampleTable)
            break;
          e.skip(4);
          const o = A(e);
          for (let c = 0; c < o; c++) {
            const l = A(e);
            a.sampleTable.chunkOffsets.push(l);
          }
        }
        break;
      case "co64":
        {
          const a = this.currentTrack;
          if (!a || !a.sampleTable)
            break;
          e.skip(4);
          const o = A(e);
          for (let c = 0; c < o; c++) {
            const l = Fe(e);
            a.sampleTable.chunkOffsets.push(l);
          }
        }
        break;
      case "mvex":
        this.isFragmented = !0, this.readContiguousBoxes(e.slice(s, i.contentSize));
        break;
      case "mehd":
        {
          const a = M(e);
          e.skip(3);
          const o = a === 1 ? Fe(e) : A(e);
          this.movieDurationInTimescale = o;
        }
        break;
      case "trex":
        {
          e.skip(4);
          const a = A(e), o = A(e), c = A(e), l = A(e), d = A(e);
          this.fragmentTrackDefaults.push({
            trackId: a,
            defaultSampleDescriptionIndex: o,
            defaultSampleDuration: c,
            defaultSampleSize: l,
            defaultSampleFlags: d
          });
        }
        break;
      case "tfra":
        {
          const a = M(e);
          e.skip(3);
          const o = A(e), c = this.tracks.find((b) => b.id === o);
          if (!c)
            break;
          const l = A(e), d = (l & 48) >> 4, u = (l & 12) >> 2, h = l & 3, m = [M, oe, Ht, A], g = m[d], f = m[u], w = m[h], k = A(e);
          for (let b = 0; b < k; b++) {
            const T = a === 1 ? Fe(e) : A(e), S = a === 1 ? Fe(e) : A(e);
            g(e), f(e), w(e), c.fragmentLookupTable.push({
              timestamp: T,
              moofOffset: S
            });
          }
          c.fragmentLookupTable.sort((b, T) => b.timestamp - T.timestamp);
          for (let b = 0; b < c.fragmentLookupTable.length - 1; b++) {
            const T = c.fragmentLookupTable[b], S = c.fragmentLookupTable[b + 1];
            T.timestamp === S.timestamp && (c.fragmentLookupTable.splice(b + 1, 1), b--);
          }
        }
        break;
      case "moof":
        this.currentFragment = {
          moofOffset: t,
          moofSize: i.totalSize,
          implicitBaseDataOffset: t,
          trackData: /* @__PURE__ */ new Map()
        }, this.readContiguousBoxes(e.slice(s, i.contentSize)), this.lastReadFragment = this.currentFragment, this.currentFragment = null;
        break;
      case "traf":
        if (p(this.currentFragment), this.readContiguousBoxes(e.slice(s, i.contentSize)), this.currentTrack) {
          const a = this.currentFragment.trackData.get(this.currentTrack.id);
          if (a) {
            const { currentFragmentState: o } = this.currentTrack;
            p(o), o.startTimestamp !== null && (Ri(a, o.startTimestamp), a.startTimestampIsFinal = !0);
          }
          this.currentTrack.currentFragmentState = null, this.currentTrack = null;
        }
        break;
      case "tfhd":
        {
          p(this.currentFragment), e.skip(1);
          const a = Ht(e), o = !!(a & 1), c = !!(a & 2), l = !!(a & 8), d = !!(a & 16), u = !!(a & 32), h = !!(a & 65536), m = !!(a & 131072), g = A(e), f = this.tracks.find((k) => k.id === g);
          if (!f)
            break;
          const w = this.fragmentTrackDefaults.find((k) => k.trackId === g);
          this.currentTrack = f, f.currentFragmentState = {
            baseDataOffset: this.currentFragment.implicitBaseDataOffset,
            sampleDescriptionIndex: w?.defaultSampleDescriptionIndex ?? null,
            defaultSampleDuration: w?.defaultSampleDuration ?? null,
            defaultSampleSize: w?.defaultSampleSize ?? null,
            defaultSampleFlags: w?.defaultSampleFlags ?? null,
            startTimestamp: null
          }, o ? f.currentFragmentState.baseDataOffset = Fe(e) : m && (f.currentFragmentState.baseDataOffset = this.currentFragment.moofOffset), c && (f.currentFragmentState.sampleDescriptionIndex = A(e)), l && (f.currentFragmentState.defaultSampleDuration = A(e)), d && (f.currentFragmentState.defaultSampleSize = A(e)), u && (f.currentFragmentState.defaultSampleFlags = A(e)), h && (f.currentFragmentState.defaultSampleDuration = 0);
        }
        break;
      case "tfdt":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.currentFragmentState);
          const o = M(e);
          e.skip(3);
          const c = o === 0 ? A(e) : Fe(e);
          a.currentFragmentState.startTimestamp = c;
        }
        break;
      case "trun":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          if (p(this.currentFragment), p(a.currentFragmentState), this.currentFragment.trackData.has(a.id)) {
            console.warn("Can't have two trun boxes for the same track in one fragment. Ignoring...");
            break;
          }
          const o = M(e), c = Ht(e), l = !!(c & 1), d = !!(c & 4), u = !!(c & 256), h = !!(c & 512), m = !!(c & 1024), g = !!(c & 2048), f = A(e);
          let w = a.currentFragmentState.baseDataOffset;
          l && (w += _t(e));
          let k = null;
          d && (k = A(e));
          let b = w;
          if (f === 0) {
            this.currentFragment.implicitBaseDataOffset = b;
            break;
          }
          let T = 0;
          const S = {
            track: a,
            startTimestamp: 0,
            endTimestamp: 0,
            firstKeyFrameTimestamp: null,
            samples: [],
            presentationTimestamps: [],
            startTimestampIsFinal: !1
          };
          this.currentFragment.trackData.set(a.id, S);
          for (let _ = 0; _ < f; _++) {
            let C;
            u ? C = A(e) : (p(a.currentFragmentState.defaultSampleDuration !== null), C = a.currentFragmentState.defaultSampleDuration);
            let I;
            h ? I = A(e) : (p(a.currentFragmentState.defaultSampleSize !== null), I = a.currentFragmentState.defaultSampleSize);
            let U;
            m ? U = A(e) : (p(a.currentFragmentState.defaultSampleFlags !== null), U = a.currentFragmentState.defaultSampleFlags), _ === 0 && k !== null && (U = k);
            let D = 0;
            g && (o === 0 ? D = A(e) : D = _t(e));
            const F = !(U & 65536);
            S.samples.push({
              presentationTimestamp: T + D,
              duration: C,
              byteOffset: b,
              byteSize: I,
              isKeyFrame: F
            }), b += I, T += C;
          }
          S.presentationTimestamps = S.samples.map((_, C) => ({ presentationTimestamp: _.presentationTimestamp, sampleIndex: C })).sort((_, C) => _.presentationTimestamp - C.presentationTimestamp);
          for (let _ = 0; _ < S.presentationTimestamps.length; _++) {
            const C = S.presentationTimestamps[_], I = S.samples[C.sampleIndex];
            if (S.firstKeyFrameTimestamp === null && I.isKeyFrame && (S.firstKeyFrameTimestamp = I.presentationTimestamp), _ < S.presentationTimestamps.length - 1) {
              const U = S.presentationTimestamps[_ + 1];
              I.duration = U.presentationTimestamp - C.presentationTimestamp;
            }
          }
          const x = S.samples[S.presentationTimestamps[0].sampleIndex], P = S.samples[ee(S.presentationTimestamps).sampleIndex];
          S.startTimestamp = x.presentationTimestamp, S.endTimestamp = P.presentationTimestamp + P.duration, this.currentFragment.implicitBaseDataOffset = b;
        }
        break;
      // Metadata section
      // https://exiftool.org/TagNames/QuickTime.html
      // https://mp4workshop.com/about
      case "udta":
        {
          const a = this.iterateContiguousBoxes(e.slice(s, i.contentSize));
          for (const { boxInfo: o, slice: c } of a) {
            if (o.name !== "meta" && !this.currentTrack) {
              const l = c.filePos;
              this.metadataTags.raw ??= {}, o.name[0] === "©" ? this.metadataTags.raw[o.name] ??= De(c) : this.metadataTags.raw[o.name] ??= N(c, o.contentSize), c.filePos = l;
            }
            switch (o.name) {
              case "meta":
                c.skip(-o.headerSize), this.traverseBox(c);
                break;
              case "©nam":
              case "name":
                this.currentTrack ? this.currentTrack.name = Ee.decode(N(c, o.contentSize)) : this.metadataTags.title ??= De(c);
                break;
              case "©des":
                this.currentTrack || (this.metadataTags.description ??= De(c));
                break;
              case "©ART":
                this.currentTrack || (this.metadataTags.artist ??= De(c));
                break;
              case "©alb":
                this.currentTrack || (this.metadataTags.album ??= De(c));
                break;
              case "albr":
                this.currentTrack || (this.metadataTags.albumArtist ??= De(c));
                break;
              case "©gen":
                this.currentTrack || (this.metadataTags.genre ??= De(c));
                break;
              case "©day":
                if (!this.currentTrack) {
                  const l = new Date(De(c));
                  Number.isNaN(l.getTime()) || (this.metadataTags.date ??= l);
                }
                break;
              case "©cmt":
                this.currentTrack || (this.metadataTags.comment ??= De(c));
                break;
              case "©lyr":
                this.currentTrack || (this.metadataTags.lyrics ??= De(c));
                break;
            }
          }
        }
        break;
      case "meta":
        {
          if (this.currentTrack)
            break;
          const o = A(e) !== 0;
          this.currentMetadataKeys = /* @__PURE__ */ new Map(), o ? this.readContiguousBoxes(e.slice(s, i.contentSize)) : this.readContiguousBoxes(e.slice(s + 4, i.contentSize - 4)), this.currentMetadataKeys = null;
        }
        break;
      case "keys":
        {
          if (!this.currentMetadataKeys)
            break;
          e.skip(4);
          const a = A(e);
          for (let o = 0; o < a; o++) {
            const c = A(e);
            e.skip(4);
            const l = Ee.decode(N(e, c - 8));
            this.currentMetadataKeys.set(o + 1, l);
          }
        }
        break;
      case "ilst":
        {
          if (!this.currentMetadataKeys)
            break;
          const a = this.iterateContiguousBoxes(e.slice(s, i.contentSize));
          for (const { boxInfo: o, slice: c } of a) {
            let l = o.name;
            const d = (l.charCodeAt(0) << 24) + (l.charCodeAt(1) << 16) + (l.charCodeAt(2) << 8) + l.charCodeAt(3);
            this.currentMetadataKeys.has(d) && (l = this.currentMetadataKeys.get(d));
            const u = ml(c);
            switch (this.metadataTags.raw ??= {}, this.metadataTags.raw[l] ??= u, l) {
              case "©nam":
              case "titl":
              case "com.apple.quicktime.title":
              case "title":
                typeof u == "string" && (this.metadataTags.title ??= u);
                break;
              case "©des":
              case "desc":
              case "dscp":
              case "com.apple.quicktime.description":
              case "description":
                typeof u == "string" && (this.metadataTags.description ??= u);
                break;
              case "©ART":
              case "com.apple.quicktime.artist":
              case "artist":
                typeof u == "string" && (this.metadataTags.artist ??= u);
                break;
              case "©alb":
              case "albm":
              case "com.apple.quicktime.album":
              case "album":
                typeof u == "string" && (this.metadataTags.album ??= u);
                break;
              case "aART":
              case "album_artist":
                typeof u == "string" && (this.metadataTags.albumArtist ??= u);
                break;
              case "©cmt":
              case "com.apple.quicktime.comment":
              case "comment":
                typeof u == "string" && (this.metadataTags.comment ??= u);
                break;
              case "©gen":
              case "gnre":
              case "com.apple.quicktime.genre":
              case "genre":
                typeof u == "string" && (this.metadataTags.genre ??= u);
                break;
              case "©lyr":
              case "lyrics":
                typeof u == "string" && (this.metadataTags.lyrics ??= u);
                break;
              case "©day":
              case "rldt":
              case "com.apple.quicktime.creationdate":
              case "date":
                if (typeof u == "string") {
                  const h = new Date(u);
                  Number.isNaN(h.getTime()) || (this.metadataTags.date ??= h);
                }
                break;
              case "covr":
              case "com.apple.quicktime.artwork":
                u instanceof It ? (this.metadataTags.images ??= [], this.metadataTags.images.push({
                  data: u.data,
                  kind: "coverFront",
                  mimeType: u.mimeType
                })) : u instanceof Uint8Array && (this.metadataTags.images ??= [], this.metadataTags.images.push({
                  data: u,
                  kind: "coverFront",
                  mimeType: "image/*"
                }));
                break;
              case "track":
                if (typeof u == "string") {
                  const h = u.split("/"), m = Number.parseInt(h[0], 10), g = h[1] && Number.parseInt(h[1], 10);
                  Number.isInteger(m) && m > 0 && (this.metadataTags.trackNumber ??= m), g && Number.isInteger(g) && g > 0 && (this.metadataTags.tracksTotal ??= g);
                }
                break;
              case "trkn":
                if (u instanceof Uint8Array && u.length >= 6) {
                  const h = L(u), m = h.getUint16(2, !1), g = h.getUint16(4, !1);
                  m > 0 && (this.metadataTags.trackNumber ??= m), g > 0 && (this.metadataTags.tracksTotal ??= g);
                }
                break;
              case "disc":
              case "disk":
                if (u instanceof Uint8Array && u.length >= 6) {
                  const h = L(u), m = h.getUint16(2, !1), g = h.getUint16(4, !1);
                  m > 0 && (this.metadataTags.discNumber ??= m), g > 0 && (this.metadataTags.discsTotal ??= g);
                }
                break;
            }
          }
        }
        break;
    }
    return e.filePos = n, !0;
  }
}
class Ra {
  constructor(e) {
    this.internalTrack = e, this.packetToSampleIndex = /* @__PURE__ */ new WeakMap(), this.packetToFragmentLocation = /* @__PURE__ */ new WeakMap();
  }
  getId() {
    return this.internalTrack.id;
  }
  getNumber() {
    const e = this.internalTrack.demuxer, i = this.internalTrack.inputTrack.type;
    let s = 0;
    for (const n of e.tracks)
      if (n.inputTrack.type === i && s++, n === this.internalTrack)
        break;
    return s;
  }
  getCodec() {
    throw new Error("Not implemented on base class.");
  }
  getInternalCodecId() {
    return this.internalTrack.internalCodecId;
  }
  getName() {
    return this.internalTrack.name;
  }
  getLanguageCode() {
    return this.internalTrack.languageCode;
  }
  getTimeResolution() {
    return this.internalTrack.timescale;
  }
  getDisposition() {
    return this.internalTrack.disposition;
  }
  async computeDuration() {
    const e = await this.getPacket(1 / 0, { metadataOnly: !0 });
    return (e?.timestamp ?? 0) + (e?.duration ?? 0);
  }
  async getFirstTimestamp() {
    return (await this.getFirstPacket({ metadataOnly: !0 }))?.timestamp ?? 0;
  }
  async getFirstPacket(e) {
    const t = await this.fetchPacketForSampleIndex(0, e);
    return t || !this.internalTrack.demuxer.isFragmented ? t : this.performFragmentedLookup(
      null,
      (i) => i.trackData.get(this.internalTrack.id) ? {
        sampleIndex: 0,
        correctSampleFound: !0
      } : {
        sampleIndex: -1,
        correctSampleFound: !1
      },
      -1 / 0,
      // Use -Infinity as a search timestamp to avoid using the lookup entries
      1 / 0,
      e
    );
  }
  mapTimestampIntoTimescale(e) {
    return Tr(e * this.internalTrack.timescale) + this.internalTrack.editListOffset;
  }
  async getPacket(e, t) {
    const i = this.mapTimestampIntoTimescale(e), s = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), n = is(s, i), a = await this.fetchPacketForSampleIndex(n, t);
    return !vn(s) || !this.internalTrack.demuxer.isFragmented ? a : this.performFragmentedLookup(null, (o) => {
      const c = o.trackData.get(this.internalTrack.id);
      if (!c)
        return { sampleIndex: -1, correctSampleFound: !1 };
      const l = G(c.presentationTimestamps, i, (h) => h.presentationTimestamp), d = l !== -1 ? c.presentationTimestamps[l].sampleIndex : -1, u = l !== -1 && i < c.endTimestamp;
      return { sampleIndex: d, correctSampleFound: u };
    }, i, i, t);
  }
  async getNextPacket(e, t) {
    const i = this.packetToSampleIndex.get(e);
    if (i !== void 0)
      return this.fetchPacketForSampleIndex(i + 1, t);
    const s = this.packetToFragmentLocation.get(e);
    if (s === void 0)
      throw new Error("Packet was not created from this track.");
    return this.performFragmentedLookup(
      s.fragment,
      (n) => {
        if (n === s.fragment) {
          const a = n.trackData.get(this.internalTrack.id);
          if (s.sampleIndex + 1 < a.samples.length)
            return {
              sampleIndex: s.sampleIndex + 1,
              correctSampleFound: !0
            };
        } else if (n.trackData.get(this.internalTrack.id))
          return {
            sampleIndex: 0,
            correctSampleFound: !0
          };
        return {
          sampleIndex: -1,
          correctSampleFound: !1
        };
      },
      -1 / 0,
      // Use -Infinity as a search timestamp to avoid using the lookup entries
      1 / 0,
      t
    );
  }
  async getKeyPacket(e, t) {
    const i = this.mapTimestampIntoTimescale(e), s = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), n = bl(s, i), a = await this.fetchPacketForSampleIndex(n, t);
    return !vn(s) || !this.internalTrack.demuxer.isFragmented ? a : this.performFragmentedLookup(null, (o) => {
      const c = o.trackData.get(this.internalTrack.id);
      if (!c)
        return { sampleIndex: -1, correctSampleFound: !1 };
      const l = Ss(c.presentationTimestamps, (h) => c.samples[h.sampleIndex].isKeyFrame && h.presentationTimestamp <= i), d = l !== -1 ? c.presentationTimestamps[l].sampleIndex : -1, u = l !== -1 && i < c.endTimestamp;
      return { sampleIndex: d, correctSampleFound: u };
    }, i, i, t);
  }
  async getNextKeyPacket(e, t) {
    const i = this.packetToSampleIndex.get(e);
    if (i !== void 0) {
      const n = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), a = yl(n, i);
      return this.fetchPacketForSampleIndex(a, t);
    }
    const s = this.packetToFragmentLocation.get(e);
    if (s === void 0)
      throw new Error("Packet was not created from this track.");
    return this.performFragmentedLookup(
      s.fragment,
      (n) => {
        if (n === s.fragment) {
          const o = n.trackData.get(this.internalTrack.id).samples.findIndex((c, l) => c.isKeyFrame && l > s.sampleIndex);
          if (o !== -1)
            return {
              sampleIndex: o,
              correctSampleFound: !0
            };
        } else {
          const a = n.trackData.get(this.internalTrack.id);
          if (a && a.firstKeyFrameTimestamp !== null) {
            const o = a.samples.findIndex((c) => c.isKeyFrame);
            return p(o !== -1), {
              sampleIndex: o,
              correctSampleFound: !0
            };
          }
        }
        return {
          sampleIndex: -1,
          correctSampleFound: !1
        };
      },
      -1 / 0,
      // Use -Infinity as a search timestamp to avoid using the lookup entries
      1 / 0,
      t
    );
  }
  async fetchPacketForSampleIndex(e, t) {
    if (e === -1)
      return null;
    const i = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), s = kl(i, e);
    if (!s)
      return null;
    let n;
    if (t.metadataOnly)
      n = Ce;
    else {
      let l = this.internalTrack.demuxer.reader.requestSlice(s.sampleOffset, s.sampleSize);
      l instanceof Promise && (l = await l), p(l), n = N(l, s.sampleSize);
    }
    const a = (s.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale, o = s.duration / this.internalTrack.timescale, c = new X(n, s.isKeyFrame ? "key" : "delta", a, o, e, s.sampleSize);
    return this.packetToSampleIndex.set(c, e), c;
  }
  async fetchPacketInFragment(e, t, i) {
    if (t === -1)
      return null;
    const n = e.trackData.get(this.internalTrack.id).samples[t];
    p(n);
    let a;
    if (i.metadataOnly)
      a = Ce;
    else {
      let d = this.internalTrack.demuxer.reader.requestSlice(n.byteOffset, n.byteSize);
      d instanceof Promise && (d = await d), p(d), a = N(d, n.byteSize);
    }
    const o = (n.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale, c = n.duration / this.internalTrack.timescale, l = new X(a, n.isKeyFrame ? "key" : "delta", o, c, e.moofOffset + t, n.byteSize);
    return this.packetToFragmentLocation.set(l, { fragment: e, sampleIndex: t }), l;
  }
  /** Looks for a packet in the fragments while trying to load as few fragments as possible to retrieve it. */
  async performFragmentedLookup(e, t, i, s, n) {
    const a = this.internalTrack.demuxer;
    let o = null, c = null, l = -1;
    if (e) {
      const { sampleIndex: w, correctSampleFound: k } = t(e);
      if (k)
        return this.fetchPacketInFragment(e, w, n);
      w !== -1 && (c = e, l = w);
    }
    const d = G(this.internalTrack.fragmentLookupTable, i, (w) => w.timestamp), u = d !== -1 ? this.internalTrack.fragmentLookupTable[d] : null, h = G(this.internalTrack.fragmentPositionCache, i, (w) => w.startTimestamp), m = h !== -1 ? this.internalTrack.fragmentPositionCache[h] : null, g = Math.max(u?.moofOffset ?? 0, m?.moofOffset ?? 0) || null;
    let f;
    for (e ? g === null || e.moofOffset >= g ? (f = e.moofOffset + e.moofSize, o = e) : f = g : f = g ?? 0; ; ) {
      if (o) {
        const T = o.trackData.get(this.internalTrack.id);
        if (T && T.startTimestamp > s)
          break;
      }
      let w = a.reader.requestSliceRange(f, Ke, Pt);
      if (w instanceof Promise && (w = await w), !w)
        break;
      const k = f, b = at(w);
      if (!b)
        break;
      if (b.name === "moof") {
        o = await a.readFragment(k);
        const { sampleIndex: T, correctSampleFound: S } = t(o);
        if (S)
          return this.fetchPacketInFragment(o, T, n);
        T !== -1 && (c = o, l = T);
      }
      f = k + b.totalSize;
    }
    if (u && (!c || c.moofOffset < u.moofOffset)) {
      const w = this.internalTrack.fragmentLookupTable[d - 1];
      p(!w || w.timestamp < u.timestamp);
      const k = w?.timestamp ?? -1 / 0;
      return this.performFragmentedLookup(null, t, k, s, n);
    }
    return c ? this.fetchPacketInFragment(c, l, n) : null;
  }
}
class gl extends Ra {
  constructor(e) {
    super(e), this.decoderConfigPromise = null, this.internalTrack = e;
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getCodedWidth() {
    return this.internalTrack.info.width;
  }
  getCodedHeight() {
    return this.internalTrack.info.height;
  }
  getSquarePixelWidth() {
    return this.internalTrack.info.squarePixelWidth;
  }
  getSquarePixelHeight() {
    return this.internalTrack.info.squarePixelHeight;
  }
  getRotation() {
    return this.internalTrack.rotation;
  }
  async getColorSpace() {
    return {
      primaries: this.internalTrack.info.colorSpace?.primaries,
      transfer: this.internalTrack.info.colorSpace?.transfer,
      matrix: this.internalTrack.info.colorSpace?.matrix,
      fullRange: this.internalTrack.info.colorSpace?.fullRange
    };
  }
  async canBeTransparent() {
    return !1;
  }
  async getDecoderConfig() {
    return this.internalTrack.info.codec ? this.decoderConfigPromise ??= (async () => {
      if (this.internalTrack.info.codec === "vp9" && !this.internalTrack.info.vp9CodecInfo) {
        const e = await this.getFirstPacket({});
        this.internalTrack.info.vp9CodecInfo = e && pa(e.data);
      } else if (this.internalTrack.info.codec === "av1" && !this.internalTrack.info.av1CodecInfo) {
        const e = await this.getFirstPacket({});
        this.internalTrack.info.av1CodecInfo = e && wa(e.data);
      }
      return {
        codec: Cs(this.internalTrack.info),
        codedWidth: this.internalTrack.info.width,
        codedHeight: this.internalTrack.info.height,
        displayAspectWidth: this.internalTrack.info.squarePixelWidth,
        displayAspectHeight: this.internalTrack.info.squarePixelHeight,
        description: this.internalTrack.info.codecDescription ?? void 0,
        colorSpace: this.internalTrack.info.colorSpace ?? void 0
      };
    })() : null;
  }
}
class wl extends Ra {
  constructor(e) {
    super(e), this.decoderConfig = null, this.internalTrack = e;
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getNumberOfChannels() {
    return this.internalTrack.info.numberOfChannels;
  }
  getSampleRate() {
    return this.internalTrack.info.sampleRate;
  }
  async getDecoderConfig() {
    return this.internalTrack.info.codec ? this.decoderConfig ??= {
      codec: _s(this.internalTrack.info),
      numberOfChannels: this.internalTrack.info.numberOfChannels,
      sampleRate: this.internalTrack.info.sampleRate,
      description: this.internalTrack.info.codecDescription ?? void 0
    } : null;
  }
}
const is = (r, e) => {
  if (r.presentationTimestamps) {
    const t = G(r.presentationTimestamps, e, (i) => i.presentationTimestamp);
    return t === -1 ? -1 : r.presentationTimestamps[t].sampleIndex;
  } else {
    const t = G(r.sampleTimingEntries, e, (s) => s.startDecodeTimestamp);
    if (t === -1)
      return -1;
    const i = r.sampleTimingEntries[t];
    return i.startIndex + Math.min(Math.floor((e - i.startDecodeTimestamp) / i.delta), i.count - 1);
  }
}, bl = (r, e) => {
  if (!r.keySampleIndices)
    return is(r, e);
  if (r.presentationTimestamps) {
    const t = G(r.presentationTimestamps, e, (i) => i.presentationTimestamp);
    if (t === -1)
      return -1;
    for (let i = t; i >= 0; i--) {
      const s = r.presentationTimestamps[i].sampleIndex;
      if (vr(r.keySampleIndices, s, (a) => a) !== -1)
        return s;
    }
    return -1;
  } else {
    const t = is(r, e), i = G(r.keySampleIndices, t, (s) => s);
    return r.keySampleIndices[i] ?? -1;
  }
}, kl = (r, e) => {
  const t = G(r.sampleTimingEntries, e, (k) => k.startIndex), i = r.sampleTimingEntries[t];
  if (!i || i.startIndex + i.count <= e)
    return null;
  let n = i.startDecodeTimestamp + (e - i.startIndex) * i.delta;
  const a = G(r.sampleCompositionTimeOffsets, e, (k) => k.startIndex), o = r.sampleCompositionTimeOffsets[a];
  o && e - o.startIndex < o.count && (n += o.offset);
  const c = r.sampleSizes[Math.min(e, r.sampleSizes.length - 1)], l = G(r.sampleToChunk, e, (k) => k.startSampleIndex), d = r.sampleToChunk[l];
  p(d);
  const u = d.startChunkIndex + Math.floor((e - d.startSampleIndex) / d.samplesPerChunk), h = r.chunkOffsets[u], m = d.startSampleIndex + (u - d.startChunkIndex) * d.samplesPerChunk;
  let g = 0, f = h;
  if (r.sampleSizes.length === 1)
    f += c * (e - m), g += c * d.samplesPerChunk;
  else
    for (let k = m; k < m + d.samplesPerChunk; k++) {
      const b = r.sampleSizes[k];
      k < e && (f += b), g += b;
    }
  let w = i.delta;
  if (r.presentationTimestamps) {
    const k = r.presentationTimestampIndexMap[e];
    p(k !== void 0), k < r.presentationTimestamps.length - 1 && (w = r.presentationTimestamps[k + 1].presentationTimestamp - n);
  }
  return {
    presentationTimestamp: n,
    duration: w,
    sampleOffset: f,
    sampleSize: c,
    chunkOffset: h,
    chunkSize: g,
    isKeyFrame: r.keySampleIndices ? vr(r.keySampleIndices, e, (k) => k) !== -1 : !0
  };
}, yl = (r, e) => {
  if (!r.keySampleIndices)
    return e + 1;
  const t = G(r.keySampleIndices, e, (i) => i);
  return r.keySampleIndices[t + 1] ?? -1;
}, Ri = (r, e) => {
  r.startTimestamp += e, r.endTimestamp += e;
  for (const t of r.samples)
    t.presentationTimestamp += e;
  for (const t of r.presentationTimestamps)
    t.presentationTimestamp += e;
}, Tl = (r) => {
  const [e, , , t] = r, i = Math.hypot(e, t), s = e / i, n = t / i, a = -Math.atan2(n, s) * (180 / Math.PI);
  return Number.isFinite(a) ? a : 0;
}, vn = (r) => r.sampleSizes.length === 0;
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class ss {
  constructor(e) {
    this.value = e;
  }
}
class ns {
  constructor(e) {
    this.value = e;
  }
}
class Ma {
  constructor(e) {
    this.value = e;
  }
}
class st {
  constructor(e) {
    this.value = e;
  }
}
var y;
(function(r) {
  r[r.EBML = 440786851] = "EBML", r[r.EBMLVersion = 17030] = "EBMLVersion", r[r.EBMLReadVersion = 17143] = "EBMLReadVersion", r[r.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", r[r.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", r[r.DocType = 17026] = "DocType", r[r.DocTypeVersion = 17031] = "DocTypeVersion", r[r.DocTypeReadVersion = 17029] = "DocTypeReadVersion", r[r.Void = 236] = "Void", r[r.Segment = 408125543] = "Segment", r[r.SeekHead = 290298740] = "SeekHead", r[r.Seek = 19899] = "Seek", r[r.SeekID = 21419] = "SeekID", r[r.SeekPosition = 21420] = "SeekPosition", r[r.Duration = 17545] = "Duration", r[r.Info = 357149030] = "Info", r[r.TimestampScale = 2807729] = "TimestampScale", r[r.MuxingApp = 19840] = "MuxingApp", r[r.WritingApp = 22337] = "WritingApp", r[r.Tracks = 374648427] = "Tracks", r[r.TrackEntry = 174] = "TrackEntry", r[r.TrackNumber = 215] = "TrackNumber", r[r.TrackUID = 29637] = "TrackUID", r[r.TrackType = 131] = "TrackType", r[r.FlagEnabled = 185] = "FlagEnabled", r[r.FlagDefault = 136] = "FlagDefault", r[r.FlagForced = 21930] = "FlagForced", r[r.FlagOriginal = 21934] = "FlagOriginal", r[r.FlagHearingImpaired = 21931] = "FlagHearingImpaired", r[r.FlagVisualImpaired = 21932] = "FlagVisualImpaired", r[r.FlagCommentary = 21935] = "FlagCommentary", r[r.FlagLacing = 156] = "FlagLacing", r[r.Name = 21358] = "Name", r[r.Language = 2274716] = "Language", r[r.LanguageBCP47 = 2274717] = "LanguageBCP47", r[r.CodecID = 134] = "CodecID", r[r.CodecPrivate = 25506] = "CodecPrivate", r[r.CodecDelay = 22186] = "CodecDelay", r[r.SeekPreRoll = 22203] = "SeekPreRoll", r[r.DefaultDuration = 2352003] = "DefaultDuration", r[r.Video = 224] = "Video", r[r.PixelWidth = 176] = "PixelWidth", r[r.PixelHeight = 186] = "PixelHeight", r[r.DisplayWidth = 21680] = "DisplayWidth", r[r.DisplayHeight = 21690] = "DisplayHeight", r[r.DisplayUnit = 21682] = "DisplayUnit", r[r.AlphaMode = 21440] = "AlphaMode", r[r.Audio = 225] = "Audio", r[r.SamplingFrequency = 181] = "SamplingFrequency", r[r.Channels = 159] = "Channels", r[r.BitDepth = 25188] = "BitDepth", r[r.SimpleBlock = 163] = "SimpleBlock", r[r.BlockGroup = 160] = "BlockGroup", r[r.Block = 161] = "Block", r[r.BlockAdditions = 30113] = "BlockAdditions", r[r.BlockMore = 166] = "BlockMore", r[r.BlockAdditional = 165] = "BlockAdditional", r[r.BlockAddID = 238] = "BlockAddID", r[r.BlockDuration = 155] = "BlockDuration", r[r.ReferenceBlock = 251] = "ReferenceBlock", r[r.Cluster = 524531317] = "Cluster", r[r.Timestamp = 231] = "Timestamp", r[r.Cues = 475249515] = "Cues", r[r.CuePoint = 187] = "CuePoint", r[r.CueTime = 179] = "CueTime", r[r.CueTrackPositions = 183] = "CueTrackPositions", r[r.CueTrack = 247] = "CueTrack", r[r.CueClusterPosition = 241] = "CueClusterPosition", r[r.Colour = 21936] = "Colour", r[r.MatrixCoefficients = 21937] = "MatrixCoefficients", r[r.TransferCharacteristics = 21946] = "TransferCharacteristics", r[r.Primaries = 21947] = "Primaries", r[r.Range = 21945] = "Range", r[r.Projection = 30320] = "Projection", r[r.ProjectionType = 30321] = "ProjectionType", r[r.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", r[r.Attachments = 423732329] = "Attachments", r[r.AttachedFile = 24999] = "AttachedFile", r[r.FileDescription = 18046] = "FileDescription", r[r.FileName = 18030] = "FileName", r[r.FileMediaType = 18016] = "FileMediaType", r[r.FileData = 18012] = "FileData", r[r.FileUID = 18094] = "FileUID", r[r.Chapters = 272869232] = "Chapters", r[r.Tags = 307544935] = "Tags", r[r.Tag = 29555] = "Tag", r[r.Targets = 25536] = "Targets", r[r.TargetTypeValue = 26826] = "TargetTypeValue", r[r.TargetType = 25546] = "TargetType", r[r.TagTrackUID = 25541] = "TagTrackUID", r[r.TagEditionUID = 25545] = "TagEditionUID", r[r.TagChapterUID = 25540] = "TagChapterUID", r[r.TagAttachmentUID = 25542] = "TagAttachmentUID", r[r.SimpleTag = 26568] = "SimpleTag", r[r.TagName = 17827] = "TagName", r[r.TagLanguage = 17530] = "TagLanguage", r[r.TagString = 17543] = "TagString", r[r.TagBinary = 17541] = "TagBinary", r[r.ContentEncodings = 28032] = "ContentEncodings", r[r.ContentEncoding = 25152] = "ContentEncoding", r[r.ContentEncodingOrder = 20529] = "ContentEncodingOrder", r[r.ContentEncodingScope = 20530] = "ContentEncodingScope", r[r.ContentCompression = 20532] = "ContentCompression", r[r.ContentCompAlgo = 16980] = "ContentCompAlgo", r[r.ContentCompSettings = 16981] = "ContentCompSettings", r[r.ContentEncryption = 20533] = "ContentEncryption";
})(y || (y = {}));
const Sl = [
  y.EBML,
  y.Segment
], Ir = [
  y.SeekHead,
  y.Info,
  y.Cluster,
  y.Tracks,
  y.Cues,
  y.Attachments,
  y.Chapters,
  y.Tags
], Nr = [
  ...Sl,
  ...Ir
], An = (r) => r < 256 ? 1 : r < 65536 ? 2 : r < 1 << 24 ? 3 : r < 2 ** 32 ? 4 : r < 2 ** 40 ? 5 : 6, Fn = (r) => r < 1n << 8n ? 1 : r < 1n << 16n ? 2 : r < 1n << 24n ? 3 : r < 1n << 32n ? 4 : r < 1n << 40n ? 5 : r < 1n << 48n ? 6 : r < 1n << 56n ? 7 : 8, Bn = (r) => r >= -64 && r < 64 ? 1 : r >= -8192 && r < 8192 ? 2 : r >= -1048576 && r < 1 << 20 ? 3 : r >= -134217728 && r < 1 << 27 ? 4 : r >= -17179869184 && r < 2 ** 34 ? 5 : 6, xl = (r) => {
  if (r < 127)
    return 1;
  if (r < 16383)
    return 2;
  if (r < (1 << 21) - 1)
    return 3;
  if (r < (1 << 28) - 1)
    return 4;
  if (r < 2 ** 35 - 1)
    return 5;
  if (r < 2 ** 42 - 1)
    return 6;
  throw new Error("EBML varint size not supported " + r);
};
class Pl {
  constructor(e) {
    this.writer = e, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = /* @__PURE__ */ new WeakMap(), this.dataOffsets = /* @__PURE__ */ new WeakMap();
  }
  writeByte(e) {
    this.helperView.setUint8(0, e), this.writer.write(this.helper.subarray(0, 1));
  }
  writeFloat32(e) {
    this.helperView.setFloat32(0, e, !1), this.writer.write(this.helper.subarray(0, 4));
  }
  writeFloat64(e) {
    this.helperView.setFloat64(0, e, !1), this.writer.write(this.helper);
  }
  writeUnsignedInt(e, t = An(e)) {
    let i = 0;
    switch (t) {
      case 6:
        this.helperView.setUint8(i++, e / 2 ** 40 | 0);
      // eslint-disable-next-line no-fallthrough
      case 5:
        this.helperView.setUint8(i++, e / 2 ** 32 | 0);
      // eslint-disable-next-line no-fallthrough
      case 4:
        this.helperView.setUint8(i++, e >> 24);
      // eslint-disable-next-line no-fallthrough
      case 3:
        this.helperView.setUint8(i++, e >> 16);
      // eslint-disable-next-line no-fallthrough
      case 2:
        this.helperView.setUint8(i++, e >> 8);
      // eslint-disable-next-line no-fallthrough
      case 1:
        this.helperView.setUint8(i++, e);
        break;
      default:
        throw new Error("Bad unsigned int size " + t);
    }
    this.writer.write(this.helper.subarray(0, i));
  }
  writeUnsignedBigInt(e, t = Fn(e)) {
    let i = 0;
    for (let s = t - 1; s >= 0; s--)
      this.helperView.setUint8(i++, Number(e >> BigInt(s * 8) & 0xffn));
    this.writer.write(this.helper.subarray(0, i));
  }
  writeSignedInt(e, t = Bn(e)) {
    e < 0 && (e += 2 ** (t * 8)), this.writeUnsignedInt(e, t);
  }
  writeVarInt(e, t = xl(e)) {
    let i = 0;
    switch (t) {
      case 1:
        this.helperView.setUint8(i++, 128 | e);
        break;
      case 2:
        this.helperView.setUint8(i++, 64 | e >> 8), this.helperView.setUint8(i++, e);
        break;
      case 3:
        this.helperView.setUint8(i++, 32 | e >> 16), this.helperView.setUint8(i++, e >> 8), this.helperView.setUint8(i++, e);
        break;
      case 4:
        this.helperView.setUint8(i++, 16 | e >> 24), this.helperView.setUint8(i++, e >> 16), this.helperView.setUint8(i++, e >> 8), this.helperView.setUint8(i++, e);
        break;
      case 5:
        this.helperView.setUint8(i++, 8 | e / 2 ** 32 & 7), this.helperView.setUint8(i++, e >> 24), this.helperView.setUint8(i++, e >> 16), this.helperView.setUint8(i++, e >> 8), this.helperView.setUint8(i++, e);
        break;
      case 6:
        this.helperView.setUint8(i++, 4 | e / 2 ** 40 & 3), this.helperView.setUint8(i++, e / 2 ** 32 | 0), this.helperView.setUint8(i++, e >> 24), this.helperView.setUint8(i++, e >> 16), this.helperView.setUint8(i++, e >> 8), this.helperView.setUint8(i++, e);
        break;
      default:
        throw new Error("Bad EBML varint size " + t);
    }
    this.writer.write(this.helper.subarray(0, i));
  }
  writeAsciiString(e) {
    this.writer.write(new Uint8Array(e.split("").map((t) => t.charCodeAt(0))));
  }
  writeEBML(e) {
    if (e !== null)
      if (e instanceof Uint8Array)
        this.writer.write(e);
      else if (Array.isArray(e))
        for (const t of e)
          this.writeEBML(t);
      else if (this.offsets.set(e, this.writer.getPos()), this.writeUnsignedInt(e.id), Array.isArray(e.data)) {
        const t = this.writer.getPos(), i = e.size === -1 ? 1 : e.size ?? 4;
        e.size === -1 ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + i);
        const s = this.writer.getPos();
        if (this.dataOffsets.set(e, s), this.writeEBML(e.data), e.size !== -1) {
          const n = this.writer.getPos() - s, a = this.writer.getPos();
          this.writer.seek(t), this.writeVarInt(n, i), this.writer.seek(a);
        }
      } else if (typeof e.data == "number") {
        const t = e.size ?? An(e.data);
        this.writeVarInt(t), this.writeUnsignedInt(e.data, t);
      } else if (typeof e.data == "bigint") {
        const t = e.size ?? Fn(e.data);
        this.writeVarInt(t), this.writeUnsignedBigInt(e.data, t);
      } else if (typeof e.data == "string")
        this.writeVarInt(e.data.length), this.writeAsciiString(e.data);
      else if (e.data instanceof Uint8Array)
        this.writeVarInt(e.data.byteLength, e.size), this.writer.write(e.data);
      else if (e.data instanceof ss)
        this.writeVarInt(4), this.writeFloat32(e.data.value);
      else if (e.data instanceof ns)
        this.writeVarInt(8), this.writeFloat64(e.data.value);
      else if (e.data instanceof Ma) {
        const t = e.size ?? Bn(e.data.value);
        this.writeVarInt(t), this.writeSignedInt(e.data.value, t);
      } else if (e.data instanceof st) {
        const t = J.encode(e.data.value);
        this.writeVarInt(t.length), this.writer.write(t);
      } else
        ge(e.data);
  }
}
const as = 8, _e = 2, Ge = 2 * as, za = (r) => {
  if (r.remainingLength < 1)
    return null;
  const e = M(r);
  if (r.skip(-1), e === 0)
    return null;
  let t = 1, i = 128;
  for (; (e & i) === 0; )
    t++, i >>= 1;
  return r.remainingLength < t ? null : t;
}, mr = (r) => {
  if (r.remainingLength < 1)
    return null;
  const e = M(r);
  if (e === 0)
    return null;
  let t = 1, i = 128;
  for (; (e & i) === 0; )
    t++, i >>= 1;
  if (r.remainingLength < t - 1)
    return null;
  let s = e & i - 1;
  for (let n = 1; n < t; n++)
    s *= 256, s += M(r);
  return s;
}, W = (r, e) => {
  if (e < 1 || e > 8)
    throw new Error("Bad unsigned int size " + e);
  let t = 0;
  for (let i = 0; i < e; i++)
    t *= 256, t += M(r);
  return t;
}, Cl = (r, e) => {
  if (e < 1)
    throw new Error("Bad unsigned int size " + e);
  let t = 0n;
  for (let i = 0; i < e; i++)
    t <<= 8n, t += BigInt(M(r));
  return t;
}, Ns = (r) => {
  const e = za(r);
  return e === null || r.remainingLength < e ? null : W(r, e);
}, Da = (r) => {
  if (r.remainingLength < 1)
    return null;
  if (M(r) === 255)
    return;
  r.skip(-1);
  const t = mr(r);
  if (t === null)
    return null;
  if (t !== 72057594037927940)
    return t;
}, $e = (r) => {
  p(r.remainingLength >= _e);
  const e = Ns(r);
  if (e === null)
    return null;
  const t = Da(r);
  return t === null ? null : { id: e, size: t };
}, Lt = (r, e) => {
  const t = N(r, e);
  let i = 0;
  for (; i < e && t[i] !== 0; )
    i += 1;
  return String.fromCharCode(...t.subarray(0, i));
}, dr = (r, e) => {
  const t = N(r, e);
  let i = 0;
  for (; i < e && t[i] !== 0; )
    i += 1;
  return Ee.decode(t.subarray(0, i));
}, Mi = (r, e) => {
  if (e === 0)
    return 0;
  if (e !== 4 && e !== 8)
    throw new Error("Bad float size " + e);
  return e === 4 ? od(r) : ko(r);
}, os = async (r, e, t, i) => {
  const s = new Set(t);
  let n = e;
  for (; i === null || n < i; ) {
    let a = r.requestSliceRange(n, _e, Ge);
    if (a instanceof Promise && (a = await a), !a)
      break;
    const o = $e(a);
    if (!o)
      break;
    if (s.has(o.id))
      return { pos: n, found: !0 };
    nt(o.size), n = a.filePos + o.size;
  }
  return { pos: i !== null && i > n ? i : n, found: !1 };
}, Oa = async (r, e, t, i) => {
  const n = new Set(t);
  let a = e;
  for (; a < i; ) {
    let o = r.requestSliceRange(a, 0, Math.min(65536, i - a));
    if (o instanceof Promise && (o = await o), !o || o.length < as)
      break;
    for (let c = 0; c < o.length - as; c++) {
      o.filePos = a;
      const l = Ns(o);
      if (l !== null && n.has(l))
        return a;
      a++;
    }
  }
  return null;
}, xe = {
  avc: "V_MPEG4/ISO/AVC",
  hevc: "V_MPEGH/ISO/HEVC",
  vp8: "V_VP8",
  vp9: "V_VP9",
  av1: "V_AV1",
  aac: "A_AAC",
  mp3: "A_MPEG/L3",
  opus: "A_OPUS",
  vorbis: "A_VORBIS",
  flac: "A_FLAC",
  ac3: "A_AC3",
  eac3: "A_EAC3",
  "pcm-u8": "A_PCM/INT/LIT",
  "pcm-s16": "A_PCM/INT/LIT",
  "pcm-s16be": "A_PCM/INT/BIG",
  "pcm-s24": "A_PCM/INT/LIT",
  "pcm-s24be": "A_PCM/INT/BIG",
  "pcm-s32": "A_PCM/INT/LIT",
  "pcm-s32be": "A_PCM/INT/BIG",
  "pcm-f32": "A_PCM/FLOAT/IEEE",
  "pcm-f64": "A_PCM/FLOAT/IEEE",
  webvtt: "S_TEXT/WEBVTT"
};
function nt(r) {
  if (r === void 0)
    throw new Error("Undefined element size is used in a place where it is not supported.");
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Ua = (r) => {
  let t = (r.hasVideo ? "video/" : r.hasAudio ? "audio/" : "application/") + (r.isWebM ? "webm" : "x-matroska");
  if (r.codecStrings.length > 0) {
    const i = [...new Set(r.codecStrings.filter(Boolean))];
    t += `; codecs="${i.join(", ")}"`;
  }
  return t;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
var je;
(function(r) {
  r[r.None = 0] = "None", r[r.Xiph = 1] = "Xiph", r[r.FixedSize = 2] = "FixedSize", r[r.Ebml = 3] = "Ebml";
})(je || (je = {}));
var Xr;
(function(r) {
  r[r.Block = 1] = "Block", r[r.Private = 2] = "Private", r[r.Next = 4] = "Next";
})(Xr || (Xr = {}));
var wr;
(function(r) {
  r[r.Zlib = 0] = "Zlib", r[r.Bzlib = 1] = "Bzlib", r[r.lzo1x = 2] = "lzo1x", r[r.HeaderStripping = 3] = "HeaderStripping";
})(wr || (wr = {}));
const zi = [
  { id: y.SeekHead, flag: "seekHeadSeen" },
  { id: y.Info, flag: "infoSeen" },
  { id: y.Tracks, flag: "tracksSeen" },
  { id: y.Cues, flag: "cuesSeen" }
], Na = 10 * 2 ** 20;
class _l extends mt {
  constructor(e) {
    super(e), this.readMetadataPromise = null, this.segments = [], this.currentSegment = null, this.currentTrack = null, this.currentCluster = null, this.currentBlock = null, this.currentBlockAdditional = null, this.currentCueTime = null, this.currentDecodingInstruction = null, this.currentTagTargetIsMovie = !0, this.currentSimpleTagName = null, this.currentAttachedFile = null, this.isWebM = !1, this.reader = e._reader;
  }
  async computeDuration() {
    const e = await this.getTracks(), t = await Promise.all(e.map((i) => i.computeDuration()));
    return Math.max(0, ...t);
  }
  async getTracks() {
    return await this.readMetadata(), this.segments.flatMap((e) => e.tracks.map((t) => t.inputTrack));
  }
  async getMimeType() {
    await this.readMetadata();
    const e = await this.getTracks(), t = await Promise.all(e.map((i) => i.getCodecParameterString()));
    return Ua({
      isWebM: this.isWebM,
      hasVideo: this.segments.some((i) => i.tracks.some((s) => s.info?.type === "video")),
      hasAudio: this.segments.some((i) => i.tracks.some((s) => s.info?.type === "audio")),
      codecStrings: t.filter(Boolean)
    });
  }
  async getMetadataTags() {
    await this.readMetadata();
    for (const t of this.segments)
      t.metadataTagsCollected || (this.reader.fileSize !== null && await this.loadSegmentMetadata(t), t.metadataTagsCollected = !0);
    let e = {};
    for (const t of this.segments)
      e = { ...e, ...t.metadataTags };
    return e;
  }
  readMetadata() {
    return this.readMetadataPromise ??= (async () => {
      let e = 0;
      for (; ; ) {
        let t = this.reader.requestSliceRange(e, _e, Ge);
        if (t instanceof Promise && (t = await t), !t)
          break;
        const i = $e(t);
        if (!i)
          break;
        const s = i.id;
        let n = i.size;
        const a = t.filePos;
        if (s === y.EBML) {
          nt(n);
          let o = this.reader.requestSlice(a, n);
          if (o instanceof Promise && (o = await o), !o)
            break;
          this.readContiguousElements(o);
        } else if (s === y.Segment) {
          if (await this.readSegment(a, n), n === void 0 || this.reader.fileSize === null)
            break;
        } else if (s === y.Cluster) {
          if (this.reader.fileSize === null)
            break;
          n === void 0 && (n = (await os(this.reader, a, Nr, this.reader.fileSize)).pos - a);
          const o = ee(this.segments);
          o && (o.elementEndPos = a + n);
        }
        nt(n), e = a + n;
      }
    })();
  }
  async readSegment(e, t) {
    this.currentSegment = {
      seekHeadSeen: !1,
      infoSeen: !1,
      tracksSeen: !1,
      cuesSeen: !1,
      tagsSeen: !1,
      attachmentsSeen: !1,
      timestampScale: -1,
      timestampFactor: -1,
      duration: -1,
      seekEntries: [],
      tracks: [],
      cuePoints: [],
      dataStartPos: e,
      elementEndPos: t === void 0 ? null : e + t,
      clusterSeekStartPos: e,
      lastReadCluster: null,
      metadataTags: {},
      metadataTagsCollected: !1
    }, this.segments.push(this.currentSegment);
    let i = e;
    for (; this.currentSegment.elementEndPos === null || i < this.currentSegment.elementEndPos; ) {
      let o = this.reader.requestSliceRange(i, _e, Ge);
      if (o instanceof Promise && (o = await o), !o)
        break;
      const c = i, l = $e(o);
      if (!l || !Ir.includes(l.id) && l.id !== y.Void) {
        const g = await Oa(this.reader, c, Ir, Math.min(this.currentSegment.elementEndPos ?? 1 / 0, c + Na));
        if (g) {
          i = g;
          continue;
        } else
          break;
      }
      const { id: d, size: u } = l, h = o.filePos, m = zi.findIndex((g) => g.id === d);
      if (m !== -1) {
        const g = zi[m].flag;
        this.currentSegment[g] = !0, nt(u);
        let f = this.reader.requestSlice(h, u);
        f instanceof Promise && (f = await f), f && this.readContiguousElements(f);
      } else if (d === y.Tags || d === y.Attachments) {
        d === y.Tags ? this.currentSegment.tagsSeen = !0 : this.currentSegment.attachmentsSeen = !0, nt(u);
        let g = this.reader.requestSlice(h, u);
        g instanceof Promise && (g = await g), g && this.readContiguousElements(g);
      } else if (d === y.Cluster) {
        this.currentSegment.clusterSeekStartPos = c;
        break;
      }
      if (u === void 0)
        break;
      i = h + u;
    }
    if (this.currentSegment.seekEntries.sort((o, c) => o.segmentPosition - c.segmentPosition), this.reader.fileSize !== null)
      for (const o of this.currentSegment.seekEntries) {
        const c = zi.find((g) => g.id === o.id);
        if (!c || this.currentSegment[c.flag])
          continue;
        let l = this.reader.requestSliceRange(e + o.segmentPosition, _e, Ge);
        if (l instanceof Promise && (l = await l), !l)
          continue;
        const d = $e(l);
        if (!d)
          continue;
        const { id: u, size: h } = d;
        if (u !== c.id)
          continue;
        nt(h), this.currentSegment[c.flag] = !0;
        let m = this.reader.requestSlice(l.filePos, h);
        m instanceof Promise && (m = await m), m && this.readContiguousElements(m);
      }
    this.currentSegment.timestampScale === -1 && (this.currentSegment.timestampScale = 1e6, this.currentSegment.timestampFactor = 1e9 / 1e6);
    for (const o of this.currentSegment.tracks)
      o.defaultDurationNs !== null && (o.defaultDuration = this.currentSegment.timestampFactor * o.defaultDurationNs / 1e9);
    this.currentSegment.tracks.sort((o, c) => Number(c.disposition.default) - Number(o.disposition.default));
    const s = new Map(this.currentSegment.tracks.map((o) => [o.id, o]));
    for (const o of this.currentSegment.cuePoints) {
      const c = s.get(o.trackId);
      c && c.cuePoints.push(o);
    }
    for (const o of this.currentSegment.tracks) {
      o.cuePoints.sort((c, l) => c.time - l.time);
      for (let c = 0; c < o.cuePoints.length - 1; c++) {
        const l = o.cuePoints[c], d = o.cuePoints[c + 1];
        l.time === d.time && (o.cuePoints.splice(c + 1, 1), c--);
      }
    }
    let n = null, a = -1 / 0;
    for (const o of this.currentSegment.tracks)
      o.cuePoints.length > a && (a = o.cuePoints.length, n = o);
    for (const o of this.currentSegment.tracks)
      o.cuePoints.length === 0 && (o.cuePoints = n.cuePoints);
    this.currentSegment = null;
  }
  async readCluster(e, t) {
    if (t.lastReadCluster?.elementStartPos === e)
      return t.lastReadCluster;
    let i = this.reader.requestSliceRange(e, _e, Ge);
    i instanceof Promise && (i = await i), p(i);
    const s = e, n = $e(i);
    p(n);
    const a = n.id;
    p(a === y.Cluster);
    let o = n.size;
    const c = i.filePos;
    o === void 0 && (o = (await os(this.reader, c, Nr, t.elementEndPos)).pos - c);
    let l = this.reader.requestSlice(c, o);
    l instanceof Promise && (l = await l);
    const d = {
      segment: t,
      elementStartPos: s,
      elementEndPos: c + o,
      dataStartPos: c,
      timestamp: -1,
      trackData: /* @__PURE__ */ new Map()
    };
    if (this.currentCluster = d, l) {
      const u = this.readContiguousElements(l, Nr);
      d.elementEndPos = u;
    }
    for (const [, u] of d.trackData) {
      const h = u.track;
      p(u.blocks.length > 0);
      let m = !1;
      for (let k = 0; k < u.blocks.length; k++) {
        const b = u.blocks[k];
        b.timestamp += d.timestamp, m ||= b.lacing !== je.None;
      }
      u.presentationTimestamps = u.blocks.map((k, b) => ({ timestamp: k.timestamp, blockIndex: b })).sort((k, b) => k.timestamp - b.timestamp);
      for (let k = 0; k < u.presentationTimestamps.length; k++) {
        const b = u.presentationTimestamps[k], T = u.blocks[b.blockIndex];
        if (u.firstKeyFrameTimestamp === null && T.isKeyFrame && (u.firstKeyFrameTimestamp = T.timestamp), k < u.presentationTimestamps.length - 1) {
          const S = u.presentationTimestamps[k + 1];
          T.duration = S.timestamp - T.timestamp;
        } else T.duration === 0 && h.defaultDuration != null && T.lacing === je.None && (T.duration = h.defaultDuration);
      }
      m && (this.expandLacedBlocks(u.blocks, h), u.presentationTimestamps = u.blocks.map((k, b) => ({ timestamp: k.timestamp, blockIndex: b })).sort((k, b) => k.timestamp - b.timestamp));
      const g = u.blocks[u.presentationTimestamps[0].blockIndex], f = u.blocks[ee(u.presentationTimestamps).blockIndex];
      u.startTimestamp = g.timestamp, u.endTimestamp = f.timestamp + f.duration;
      const w = G(h.clusterPositionCache, u.startTimestamp, (k) => k.startTimestamp);
      (w === -1 || h.clusterPositionCache[w].elementStartPos !== s) && h.clusterPositionCache.splice(w + 1, 0, {
        elementStartPos: d.elementStartPos,
        startTimestamp: u.startTimestamp
      });
    }
    return t.lastReadCluster = d, d;
  }
  getTrackDataInCluster(e, t) {
    let i = e.trackData.get(t);
    if (!i) {
      const s = e.segment.tracks.find((n) => n.id === t);
      if (!s)
        return null;
      i = {
        track: s,
        startTimestamp: 0,
        endTimestamp: 0,
        firstKeyFrameTimestamp: null,
        blocks: [],
        presentationTimestamps: []
      }, e.trackData.set(t, i);
    }
    return i;
  }
  expandLacedBlocks(e, t) {
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      if (s.lacing === je.None)
        continue;
      s.decoded || (s.data = this.decodeBlockData(t, s.data), s.decoded = !0);
      const n = ye.tempFromBytes(s.data), a = [], o = M(n) + 1;
      switch (s.lacing) {
        case je.Xiph:
          {
            let l = 0;
            for (let d = 0; d < o - 1; d++) {
              let u = 0;
              for (; n.bufferPos < n.length; ) {
                const h = M(n);
                if (u += h, h < 255) {
                  a.push(u), l += u;
                  break;
                }
              }
            }
            a.push(n.length - (n.bufferPos + l));
          }
          break;
        case je.FixedSize:
          {
            const l = n.length - 1, d = Math.floor(l / o);
            for (let u = 0; u < o; u++)
              a.push(d);
          }
          break;
        case je.Ebml:
          {
            const l = mr(n);
            p(l !== null);
            let d = l;
            a.push(d);
            let u = d;
            for (let h = 1; h < o - 1; h++) {
              const m = n.bufferPos, g = mr(n);
              p(g !== null);
              const f = g, k = (1 << (n.bufferPos - m) * 7 - 1) - 1, b = f - k;
              d += b, a.push(d), u += d;
            }
            a.push(n.length - (n.bufferPos + u));
          }
          break;
        default:
          p(!1);
      }
      p(a.length === o), e.splice(i, 1);
      const c = s.duration || o * (t.defaultDuration ?? 0);
      for (let l = 0; l < o; l++) {
        const d = a[l], u = N(n, d), h = s.timestamp + c * l / o, m = c / o;
        e.splice(i + l, 0, {
          timestamp: h,
          duration: m,
          isKeyFrame: s.isKeyFrame,
          data: u,
          lacing: je.None,
          decoded: !0,
          mainAdditional: s.mainAdditional
        });
      }
      i += o, i--;
    }
  }
  async loadSegmentMetadata(e) {
    for (const t of e.seekEntries) {
      if (!(t.id === y.Tags && !e.tagsSeen)) {
        if (!(t.id === y.Attachments && !e.attachmentsSeen)) continue;
      }
      let i = this.reader.requestSliceRange(e.dataStartPos + t.segmentPosition, _e, Ge);
      if (i instanceof Promise && (i = await i), !i)
        continue;
      const s = $e(i);
      if (!s || s.id !== t.id)
        continue;
      const { size: n } = s;
      nt(n), p(!this.currentSegment), this.currentSegment = e;
      let a = this.reader.requestSlice(i.filePos, n);
      a instanceof Promise && (a = await a), a && this.readContiguousElements(a), this.currentSegment = null, t.id === y.Tags ? e.tagsSeen = !0 : t.id === y.Attachments && (e.attachmentsSeen = !0);
    }
  }
  readContiguousElements(e, t) {
    for (; e.remainingLength >= _e; ) {
      const i = e.filePos;
      if (!this.traverseElement(e, t))
        return i;
    }
    return e.filePos;
  }
  traverseElement(e, t) {
    const i = $e(e);
    if (!i || t && t.includes(i.id))
      return !1;
    const { id: s, size: n } = i, a = e.filePos;
    switch (nt(n), s) {
      case y.DocType:
        this.isWebM = Lt(e, n) === "webm";
        break;
      case y.Seek:
        {
          if (!this.currentSegment)
            break;
          const o = { id: -1, segmentPosition: -1 };
          this.currentSegment.seekEntries.push(o), this.readContiguousElements(e.slice(a, n)), (o.id === -1 || o.segmentPosition === -1) && this.currentSegment.seekEntries.pop();
        }
        break;
      case y.SeekID:
        {
          const o = this.currentSegment?.seekEntries[this.currentSegment.seekEntries.length - 1];
          if (!o)
            break;
          o.id = W(e, n);
        }
        break;
      case y.SeekPosition:
        {
          const o = this.currentSegment?.seekEntries[this.currentSegment.seekEntries.length - 1];
          if (!o)
            break;
          o.segmentPosition = W(e, n);
        }
        break;
      case y.TimestampScale:
        {
          if (!this.currentSegment)
            break;
          this.currentSegment.timestampScale = W(e, n), this.currentSegment.timestampFactor = 1e9 / this.currentSegment.timestampScale;
        }
        break;
      case y.Duration:
        {
          if (!this.currentSegment)
            break;
          this.currentSegment.duration = Mi(e, n);
        }
        break;
      case y.TrackEntry:
        {
          if (!this.currentSegment || (this.currentTrack = {
            id: -1,
            segment: this.currentSegment,
            demuxer: this,
            clusterPositionCache: [],
            cuePoints: [],
            disposition: {
              ...ft
            },
            inputTrack: null,
            codecId: null,
            codecPrivate: null,
            defaultDuration: null,
            defaultDurationNs: null,
            name: null,
            languageCode: ke,
            decodingInstructions: [],
            info: null
          }, this.readContiguousElements(e.slice(a, n)), !this.currentTrack))
            break;
          if (this.currentTrack.decodingInstructions.some((o) => o.data?.type !== "decompress" || o.scope !== Xr.Block || o.data.algorithm !== wr.HeaderStripping) && (console.warn(`Track #${this.currentTrack.id} has an unsupported content encoding; dropping.`), this.currentTrack = null), this.currentTrack && this.currentTrack.id !== -1 && this.currentTrack.codecId && this.currentTrack.info) {
            const o = this.currentTrack.codecId.indexOf("/"), c = o === -1 ? this.currentTrack.codecId : this.currentTrack.codecId.slice(0, o);
            if (this.currentTrack.info.type === "video" && this.currentTrack.info.width !== -1 && this.currentTrack.info.height !== -1) {
              if (this.currentTrack.info.squarePixelWidth = this.currentTrack.info.width, this.currentTrack.info.squarePixelHeight = this.currentTrack.info.height, this.currentTrack.info.displayWidth !== null && this.currentTrack.info.displayHeight !== null) {
                const u = this.currentTrack.info.displayWidth * this.currentTrack.info.height, h = this.currentTrack.info.displayHeight * this.currentTrack.info.width;
                u > h ? this.currentTrack.info.squarePixelWidth = Math.round(this.currentTrack.info.width * u / h) : this.currentTrack.info.squarePixelHeight = Math.round(this.currentTrack.info.height * h / u);
              }
              this.currentTrack.codecId === xe.avc ? (this.currentTrack.info.codec = "avc", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : this.currentTrack.codecId === xe.hevc ? (this.currentTrack.info.codec = "hevc", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : c === xe.vp8 ? this.currentTrack.info.codec = "vp8" : c === xe.vp9 ? this.currentTrack.info.codec = "vp9" : c === xe.av1 && (this.currentTrack.info.codec = "av1");
              const l = this.currentTrack, d = new Dt(this.input, new Il(l));
              this.currentTrack.inputTrack = d, this.currentSegment.tracks.push(this.currentTrack);
            } else if (this.currentTrack.info.type === "audio" && this.currentTrack.info.numberOfChannels !== -1 && this.currentTrack.info.sampleRate !== -1) {
              c === xe.aac ? (this.currentTrack.info.codec = "aac", this.currentTrack.info.aacCodecInfo = {
                isMpeg2: this.currentTrack.codecId.includes("MPEG2"),
                objectType: null
              }, this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : this.currentTrack.codecId === xe.mp3 ? this.currentTrack.info.codec = "mp3" : c === xe.opus ? (this.currentTrack.info.codec = "opus", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate, this.currentTrack.info.sampleRate = ir) : c === xe.vorbis ? (this.currentTrack.info.codec = "vorbis", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : c === xe.flac ? (this.currentTrack.info.codec = "flac", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : c === xe.ac3 ? (this.currentTrack.info.codec = "ac3", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : c === xe.eac3 ? (this.currentTrack.info.codec = "eac3", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : this.currentTrack.codecId === "A_PCM/INT/LIT" ? this.currentTrack.info.bitDepth === 8 ? this.currentTrack.info.codec = "pcm-u8" : this.currentTrack.info.bitDepth === 16 ? this.currentTrack.info.codec = "pcm-s16" : this.currentTrack.info.bitDepth === 24 ? this.currentTrack.info.codec = "pcm-s24" : this.currentTrack.info.bitDepth === 32 && (this.currentTrack.info.codec = "pcm-s32") : this.currentTrack.codecId === "A_PCM/INT/BIG" ? this.currentTrack.info.bitDepth === 8 ? this.currentTrack.info.codec = "pcm-u8" : this.currentTrack.info.bitDepth === 16 ? this.currentTrack.info.codec = "pcm-s16be" : this.currentTrack.info.bitDepth === 24 ? this.currentTrack.info.codec = "pcm-s24be" : this.currentTrack.info.bitDepth === 32 && (this.currentTrack.info.codec = "pcm-s32be") : this.currentTrack.codecId === "A_PCM/FLOAT/IEEE" && (this.currentTrack.info.bitDepth === 32 ? this.currentTrack.info.codec = "pcm-f32" : this.currentTrack.info.bitDepth === 64 && (this.currentTrack.info.codec = "pcm-f64"));
              const l = this.currentTrack, d = new ve(this.input, new El(l));
              this.currentTrack.inputTrack = d, this.currentSegment.tracks.push(this.currentTrack);
            }
          }
          this.currentTrack = null;
        }
        break;
      case y.TrackNumber:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.id = W(e, n);
        }
        break;
      case y.TrackType:
        {
          if (!this.currentTrack)
            break;
          const o = W(e, n);
          o === 1 ? this.currentTrack.info = {
            type: "video",
            width: -1,
            height: -1,
            displayWidth: null,
            displayHeight: null,
            displayUnit: null,
            squarePixelWidth: -1,
            squarePixelHeight: -1,
            rotation: 0,
            codec: null,
            codecDescription: null,
            colorSpace: null,
            alphaMode: !1
          } : o === 2 && (this.currentTrack.info = {
            type: "audio",
            numberOfChannels: -1,
            sampleRate: -1,
            bitDepth: -1,
            codec: null,
            codecDescription: null,
            aacCodecInfo: null
          });
        }
        break;
      case y.FlagEnabled:
        {
          if (!this.currentTrack)
            break;
          W(e, n) || (this.currentTrack = null);
        }
        break;
      case y.FlagDefault:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.default = !!W(e, n);
        }
        break;
      case y.FlagForced:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.forced = !!W(e, n);
        }
        break;
      case y.FlagOriginal:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.original = !!W(e, n);
        }
        break;
      case y.FlagHearingImpaired:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.hearingImpaired = !!W(e, n);
        }
        break;
      case y.FlagVisualImpaired:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.visuallyImpaired = !!W(e, n);
        }
        break;
      case y.FlagCommentary:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.commentary = !!W(e, n);
        }
        break;
      case y.CodecID:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.codecId = Lt(e, n);
        }
        break;
      case y.CodecPrivate:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.codecPrivate = N(e, n);
        }
        break;
      case y.DefaultDuration:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.defaultDurationNs = W(e, n);
        }
        break;
      case y.Name:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.name = dr(e, n);
        }
        break;
      case y.Language:
        {
          if (!this.currentTrack || this.currentTrack.languageCode !== ke)
            break;
          this.currentTrack.languageCode = Lt(e, n), Sr(this.currentTrack.languageCode) || (this.currentTrack.languageCode = ke);
        }
        break;
      case y.LanguageBCP47:
        {
          if (!this.currentTrack)
            break;
          const c = Lt(e, n).split("-")[0];
          c ? this.currentTrack.languageCode = c : this.currentTrack.languageCode = ke;
        }
        break;
      case y.Video:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.readContiguousElements(e.slice(a, n));
        }
        break;
      case y.PixelWidth:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.width = W(e, n);
        }
        break;
      case y.PixelHeight:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.height = W(e, n);
        }
        break;
      case y.DisplayWidth:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.displayWidth = W(e, n);
        }
        break;
      case y.DisplayHeight:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.displayHeight = W(e, n);
        }
        break;
      case y.DisplayUnit:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.displayUnit = W(e, n);
        }
        break;
      case y.AlphaMode:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.alphaMode = W(e, n) === 1;
        }
        break;
      case y.Colour:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.colorSpace = {}, this.readContiguousElements(e.slice(a, n));
        }
        break;
      case y.MatrixCoefficients:
        {
          if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace)
            break;
          const o = W(e, n), c = Hr[o] ?? null;
          this.currentTrack.info.colorSpace.matrix = c;
        }
        break;
      case y.Range:
        {
          if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace)
            break;
          this.currentTrack.info.colorSpace.fullRange = W(e, n) === 2;
        }
        break;
      case y.TransferCharacteristics:
        {
          if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace)
            break;
          const o = W(e, n), c = Lr[o] ?? null;
          this.currentTrack.info.colorSpace.transfer = c;
        }
        break;
      case y.Primaries:
        {
          if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace)
            break;
          const o = W(e, n), c = Wr[o] ?? null;
          this.currentTrack.info.colorSpace.primaries = c;
        }
        break;
      case y.Projection:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.readContiguousElements(e.slice(a, n));
        }
        break;
      case y.ProjectionPoseRoll:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          const c = -Mi(e, n);
          try {
            this.currentTrack.info.rotation = ti(c);
          } catch {
          }
        }
        break;
      case y.Audio:
        {
          if (this.currentTrack?.info?.type !== "audio")
            break;
          this.readContiguousElements(e.slice(a, n));
        }
        break;
      case y.SamplingFrequency:
        {
          if (this.currentTrack?.info?.type !== "audio")
            break;
          this.currentTrack.info.sampleRate = Mi(e, n);
        }
        break;
      case y.Channels:
        {
          if (this.currentTrack?.info?.type !== "audio")
            break;
          this.currentTrack.info.numberOfChannels = W(e, n);
        }
        break;
      case y.BitDepth:
        {
          if (this.currentTrack?.info?.type !== "audio")
            break;
          this.currentTrack.info.bitDepth = W(e, n);
        }
        break;
      case y.CuePoint:
        {
          if (!this.currentSegment)
            break;
          this.readContiguousElements(e.slice(a, n)), this.currentCueTime = null;
        }
        break;
      case y.CueTime:
        this.currentCueTime = W(e, n);
        break;
      case y.CueTrackPositions:
        {
          if (this.currentCueTime === null)
            break;
          p(this.currentSegment);
          const o = { time: this.currentCueTime, trackId: -1, clusterPosition: -1 };
          this.currentSegment.cuePoints.push(o), this.readContiguousElements(e.slice(a, n)), (o.trackId === -1 || o.clusterPosition === -1) && this.currentSegment.cuePoints.pop();
        }
        break;
      case y.CueTrack:
        {
          const o = this.currentSegment?.cuePoints[this.currentSegment.cuePoints.length - 1];
          if (!o)
            break;
          o.trackId = W(e, n);
        }
        break;
      case y.CueClusterPosition:
        {
          const o = this.currentSegment?.cuePoints[this.currentSegment.cuePoints.length - 1];
          if (!o)
            break;
          p(this.currentSegment), o.clusterPosition = this.currentSegment.dataStartPos + W(e, n);
        }
        break;
      case y.Timestamp:
        {
          if (!this.currentCluster)
            break;
          this.currentCluster.timestamp = W(e, n);
        }
        break;
      case y.SimpleBlock:
        {
          if (!this.currentCluster)
            break;
          const o = mr(e);
          if (o === null)
            break;
          const c = this.getTrackDataInCluster(this.currentCluster, o);
          if (!c)
            break;
          const l = ds(e), d = M(e), u = d >> 1 & 3;
          let h = !!(d & 128);
          c.track.info?.type === "audio" && c.track.info.codec && (h = !0);
          const m = N(e, n - (e.filePos - a)), g = c.track.decodingInstructions.length > 0;
          c.blocks.push({
            timestamp: l,
            // We'll add the cluster's timestamp to this later
            duration: 0,
            // Will set later
            isKeyFrame: h,
            data: m,
            lacing: u,
            decoded: !g,
            mainAdditional: null
          });
        }
        break;
      case y.BlockGroup:
        {
          if (!this.currentCluster)
            break;
          this.readContiguousElements(e.slice(a, n)), this.currentBlock = null;
        }
        break;
      case y.Block:
        {
          if (!this.currentCluster)
            break;
          const o = mr(e);
          if (o === null)
            break;
          const c = this.getTrackDataInCluster(this.currentCluster, o);
          if (!c)
            break;
          const l = ds(e), u = M(e) >> 1 & 3, h = N(e, n - (e.filePos - a)), m = c.track.decodingInstructions.length > 0;
          this.currentBlock = {
            timestamp: l,
            // We'll add the cluster's timestamp to this later
            duration: 0,
            // Will set later
            isKeyFrame: !0,
            data: h,
            lacing: u,
            decoded: !m,
            mainAdditional: null
          }, c.blocks.push(this.currentBlock);
        }
        break;
      case y.BlockAdditions:
        this.readContiguousElements(e.slice(a, n));
        break;
      case y.BlockMore:
        {
          if (!this.currentBlock)
            break;
          this.currentBlockAdditional = {
            addId: 1,
            data: null
          }, this.readContiguousElements(e.slice(a, n)), this.currentBlockAdditional.data && this.currentBlockAdditional.addId === 1 && (this.currentBlock.mainAdditional = this.currentBlockAdditional.data), this.currentBlockAdditional = null;
        }
        break;
      case y.BlockAdditional:
        {
          if (!this.currentBlockAdditional)
            break;
          this.currentBlockAdditional.data = N(e, n);
        }
        break;
      case y.BlockAddID:
        {
          if (!this.currentBlockAdditional)
            break;
          this.currentBlockAdditional.addId = W(e, n);
        }
        break;
      case y.BlockDuration:
        {
          if (!this.currentBlock)
            break;
          this.currentBlock.duration = W(e, n);
        }
        break;
      case y.ReferenceBlock:
        {
          if (!this.currentBlock)
            break;
          this.currentBlock.isKeyFrame = !1;
        }
        break;
      case y.Tag:
        this.currentTagTargetIsMovie = !0, this.readContiguousElements(e.slice(a, n));
        break;
      case y.Targets:
        this.readContiguousElements(e.slice(a, n));
        break;
      case y.TargetTypeValue:
        W(e, n) !== 50 && (this.currentTagTargetIsMovie = !1);
        break;
      case y.TagTrackUID:
      case y.TagEditionUID:
      case y.TagChapterUID:
      case y.TagAttachmentUID:
        this.currentTagTargetIsMovie = !1;
        break;
      case y.SimpleTag:
        {
          if (!this.currentTagTargetIsMovie)
            break;
          this.currentSimpleTagName = null, this.readContiguousElements(e.slice(a, n));
        }
        break;
      case y.TagName:
        this.currentSimpleTagName = dr(e, n);
        break;
      case y.TagString:
        {
          if (!this.currentSimpleTagName)
            break;
          const o = dr(e, n);
          this.processTagValue(this.currentSimpleTagName, o);
        }
        break;
      case y.TagBinary:
        {
          if (!this.currentSimpleTagName)
            break;
          const o = N(e, n);
          this.processTagValue(this.currentSimpleTagName, o);
        }
        break;
      case y.AttachedFile:
        {
          if (!this.currentSegment)
            break;
          this.currentAttachedFile = {
            fileUid: null,
            fileName: null,
            fileMediaType: null,
            fileData: null,
            fileDescription: null
          }, this.readContiguousElements(e.slice(a, n));
          const o = this.currentSegment.metadataTags;
          if (this.currentAttachedFile.fileUid && this.currentAttachedFile.fileData && (o.raw ??= {}, o.raw[this.currentAttachedFile.fileUid.toString()] = new oi(this.currentAttachedFile.fileData, this.currentAttachedFile.fileMediaType ?? void 0, this.currentAttachedFile.fileName ?? void 0, this.currentAttachedFile.fileDescription ?? void 0)), this.currentAttachedFile.fileMediaType?.startsWith("image/") && this.currentAttachedFile.fileData) {
            const c = this.currentAttachedFile.fileName;
            let l = "unknown";
            if (c) {
              const d = c.toLowerCase();
              d.startsWith("cover.") ? l = "coverFront" : d.startsWith("back.") && (l = "coverBack");
            }
            o.images ??= [], o.images.push({
              data: this.currentAttachedFile.fileData,
              mimeType: this.currentAttachedFile.fileMediaType,
              kind: l,
              name: this.currentAttachedFile.fileName ?? void 0,
              description: this.currentAttachedFile.fileDescription ?? void 0
            });
          }
          this.currentAttachedFile = null;
        }
        break;
      case y.FileUID:
        {
          if (!this.currentAttachedFile)
            break;
          this.currentAttachedFile.fileUid = Cl(e, n);
        }
        break;
      case y.FileName:
        {
          if (!this.currentAttachedFile)
            break;
          this.currentAttachedFile.fileName = dr(e, n);
        }
        break;
      case y.FileMediaType:
        {
          if (!this.currentAttachedFile)
            break;
          this.currentAttachedFile.fileMediaType = Lt(e, n);
        }
        break;
      case y.FileData:
        {
          if (!this.currentAttachedFile)
            break;
          this.currentAttachedFile.fileData = N(e, n);
        }
        break;
      case y.FileDescription:
        {
          if (!this.currentAttachedFile)
            break;
          this.currentAttachedFile.fileDescription = dr(e, n);
        }
        break;
      case y.ContentEncodings:
        {
          if (!this.currentTrack)
            break;
          this.readContiguousElements(e.slice(a, n)), this.currentTrack.decodingInstructions.sort((o, c) => c.order - o.order);
        }
        break;
      case y.ContentEncoding:
        this.currentDecodingInstruction = {
          order: 0,
          scope: Xr.Block,
          data: null
        }, this.readContiguousElements(e.slice(a, n)), this.currentDecodingInstruction.data && this.currentTrack.decodingInstructions.push(this.currentDecodingInstruction), this.currentDecodingInstruction = null;
        break;
      case y.ContentEncodingOrder:
        {
          if (!this.currentDecodingInstruction)
            break;
          this.currentDecodingInstruction.order = W(e, n);
        }
        break;
      case y.ContentEncodingScope:
        {
          if (!this.currentDecodingInstruction)
            break;
          this.currentDecodingInstruction.scope = W(e, n);
        }
        break;
      case y.ContentCompression:
        {
          if (!this.currentDecodingInstruction)
            break;
          this.currentDecodingInstruction.data = {
            type: "decompress",
            algorithm: wr.Zlib,
            settings: null
          }, this.readContiguousElements(e.slice(a, n));
        }
        break;
      case y.ContentCompAlgo:
        {
          if (this.currentDecodingInstruction?.data?.type !== "decompress")
            break;
          this.currentDecodingInstruction.data.algorithm = W(e, n);
        }
        break;
      case y.ContentCompSettings:
        {
          if (this.currentDecodingInstruction?.data?.type !== "decompress")
            break;
          this.currentDecodingInstruction.data.settings = N(e, n);
        }
        break;
      case y.ContentEncryption:
        {
          if (!this.currentDecodingInstruction)
            break;
          this.currentDecodingInstruction.data = {
            type: "decrypt"
          };
        }
        break;
    }
    return e.filePos = a + n, !0;
  }
  decodeBlockData(e, t) {
    p(e.decodingInstructions.length > 0);
    let i = t;
    for (const s of e.decodingInstructions)
      switch (p(s.data), s.data.type) {
        case "decompress":
          switch (s.data.algorithm) {
            case wr.HeaderStripping:
              if (s.data.settings && s.data.settings.length > 0) {
                const n = s.data.settings, a = new Uint8Array(n.length + i.length);
                a.set(n, 0), a.set(i, n.length), i = a;
              }
              break;
          }
          break;
      }
    return i;
  }
  processTagValue(e, t) {
    if (!this.currentSegment?.metadataTags)
      return;
    const i = this.currentSegment.metadataTags;
    if (i.raw ??= {}, i.raw[e] ??= t, typeof t == "string")
      switch (e.toLowerCase()) {
        case "title":
          i.title ??= t;
          break;
        case "description":
          i.description ??= t;
          break;
        case "artist":
          i.artist ??= t;
          break;
        case "album":
          i.album ??= t;
          break;
        case "album_artist":
          i.albumArtist ??= t;
          break;
        case "genre":
          i.genre ??= t;
          break;
        case "comment":
          i.comment ??= t;
          break;
        case "lyrics":
          i.lyrics ??= t;
          break;
        case "date":
          {
            const s = new Date(t);
            Number.isNaN(s.getTime()) || (i.date ??= s);
          }
          break;
        case "track_number":
        case "part_number":
          {
            const s = t.split("/"), n = Number.parseInt(s[0], 10), a = s[1] && Number.parseInt(s[1], 10);
            Number.isInteger(n) && n > 0 && (i.trackNumber ??= n), a && Number.isInteger(a) && a > 0 && (i.tracksTotal ??= a);
          }
          break;
        case "disc_number":
        case "disc":
          {
            const s = t.split("/"), n = Number.parseInt(s[0], 10), a = s[1] && Number.parseInt(s[1], 10);
            Number.isInteger(n) && n > 0 && (i.discNumber ??= n), a && Number.isInteger(a) && a > 0 && (i.discsTotal ??= a);
          }
          break;
      }
  }
}
class Va {
  constructor(e) {
    this.internalTrack = e, this.packetToClusterLocation = /* @__PURE__ */ new WeakMap();
  }
  getId() {
    return this.internalTrack.id;
  }
  getNumber() {
    const e = this.internalTrack.demuxer, i = this.internalTrack.inputTrack.type;
    let s = 0;
    for (const n of e.segments)
      for (const a of n.tracks)
        if (a.inputTrack.type === i && s++, a === this.internalTrack)
          break;
    return s;
  }
  getCodec() {
    throw new Error("Not implemented on base class.");
  }
  getInternalCodecId() {
    return this.internalTrack.codecId;
  }
  async computeDuration() {
    const e = await this.getPacket(1 / 0, { metadataOnly: !0 });
    return (e?.timestamp ?? 0) + (e?.duration ?? 0);
  }
  getName() {
    return this.internalTrack.name;
  }
  getLanguageCode() {
    return this.internalTrack.languageCode;
  }
  async getFirstTimestamp() {
    return (await this.getFirstPacket({ metadataOnly: !0 }))?.timestamp ?? 0;
  }
  getTimeResolution() {
    return this.internalTrack.segment.timestampFactor;
  }
  getDisposition() {
    return this.internalTrack.disposition;
  }
  async getFirstPacket(e) {
    return this.performClusterLookup(
      null,
      (t) => t.trackData.get(this.internalTrack.id) ? {
        blockIndex: 0,
        correctBlockFound: !0
      } : {
        blockIndex: -1,
        correctBlockFound: !1
      },
      -1 / 0,
      // Use -Infinity as a search timestamp to avoid using the cues
      1 / 0,
      e
    );
  }
  intoTimescale(e) {
    return Tr(e * this.internalTrack.segment.timestampFactor);
  }
  async getPacket(e, t) {
    const i = this.intoTimescale(e);
    return this.performClusterLookup(null, (s) => {
      const n = s.trackData.get(this.internalTrack.id);
      if (!n)
        return { blockIndex: -1, correctBlockFound: !1 };
      const a = G(n.presentationTimestamps, i, (l) => l.timestamp), o = a !== -1 ? n.presentationTimestamps[a].blockIndex : -1, c = a !== -1 && i < n.endTimestamp;
      return { blockIndex: o, correctBlockFound: c };
    }, i, i, t);
  }
  async getNextPacket(e, t) {
    const i = this.packetToClusterLocation.get(e);
    if (i === void 0)
      throw new Error("Packet was not created from this track.");
    return this.performClusterLookup(
      i.cluster,
      (s) => {
        if (s === i.cluster) {
          const n = s.trackData.get(this.internalTrack.id);
          if (i.blockIndex + 1 < n.blocks.length)
            return {
              blockIndex: i.blockIndex + 1,
              correctBlockFound: !0
            };
        } else if (s.trackData.get(this.internalTrack.id))
          return {
            blockIndex: 0,
            correctBlockFound: !0
          };
        return {
          blockIndex: -1,
          correctBlockFound: !1
        };
      },
      -1 / 0,
      // Use -Infinity as a search timestamp to avoid using the cues
      1 / 0,
      t
    );
  }
  async getKeyPacket(e, t) {
    const i = this.intoTimescale(e);
    return this.performClusterLookup(null, (s) => {
      const n = s.trackData.get(this.internalTrack.id);
      if (!n)
        return { blockIndex: -1, correctBlockFound: !1 };
      const a = Ss(n.presentationTimestamps, (l) => n.blocks[l.blockIndex].isKeyFrame && l.timestamp <= i), o = a !== -1 ? n.presentationTimestamps[a].blockIndex : -1, c = a !== -1 && i < n.endTimestamp;
      return { blockIndex: o, correctBlockFound: c };
    }, i, i, t);
  }
  async getNextKeyPacket(e, t) {
    const i = this.packetToClusterLocation.get(e);
    if (i === void 0)
      throw new Error("Packet was not created from this track.");
    return this.performClusterLookup(
      i.cluster,
      (s) => {
        if (s === i.cluster) {
          const a = s.trackData.get(this.internalTrack.id).blocks.findIndex((o, c) => o.isKeyFrame && c > i.blockIndex);
          if (a !== -1)
            return {
              blockIndex: a,
              correctBlockFound: !0
            };
        } else {
          const n = s.trackData.get(this.internalTrack.id);
          if (n && n.firstKeyFrameTimestamp !== null) {
            const a = n.blocks.findIndex((o) => o.isKeyFrame);
            return p(a !== -1), {
              blockIndex: a,
              correctBlockFound: !0
            };
          }
        }
        return {
          blockIndex: -1,
          correctBlockFound: !1
        };
      },
      -1 / 0,
      // Use -Infinity as a search timestamp to avoid using the cues
      1 / 0,
      t
    );
  }
  async fetchPacketInCluster(e, t, i) {
    if (t === -1)
      return null;
    const n = e.trackData.get(this.internalTrack.id).blocks[t];
    p(n), n.decoded || (n.data = this.internalTrack.demuxer.decodeBlockData(this.internalTrack, n.data), n.decoded = !0);
    const a = i.metadataOnly ? Ce : n.data, o = n.timestamp / this.internalTrack.segment.timestampFactor, c = n.duration / this.internalTrack.segment.timestampFactor, l = {};
    n.mainAdditional && this.internalTrack.info?.type === "video" && this.internalTrack.info.alphaMode && (l.alpha = i.metadataOnly ? Ce : n.mainAdditional, l.alphaByteLength = n.mainAdditional.byteLength);
    const d = new X(a, n.isKeyFrame ? "key" : "delta", o, c, e.dataStartPos + t, n.data.byteLength, l);
    return this.packetToClusterLocation.set(d, { cluster: e, blockIndex: t }), d;
  }
  /** Looks for a packet in the clusters while trying to load as few clusters as possible to retrieve it. */
  async performClusterLookup(e, t, i, s, n) {
    const { demuxer: a, segment: o } = this.internalTrack;
    let c = null, l = null, d = -1;
    if (e) {
      const { blockIndex: k, correctBlockFound: b } = t(e);
      if (b)
        return this.fetchPacketInCluster(e, k, n);
      k !== -1 && (l = e, d = k);
    }
    const u = G(this.internalTrack.cuePoints, i, (k) => k.time), h = u !== -1 ? this.internalTrack.cuePoints[u] : null, m = G(this.internalTrack.clusterPositionCache, i, (k) => k.startTimestamp), g = m !== -1 ? this.internalTrack.clusterPositionCache[m] : null, f = Math.max(h?.clusterPosition ?? 0, g?.elementStartPos ?? 0) || null;
    let w;
    for (e ? f === null || e.elementStartPos >= f ? (w = e.elementEndPos, c = e) : w = f : w = f ?? o.clusterSeekStartPos; o.elementEndPos === null || w <= o.elementEndPos - _e; ) {
      if (c) {
        const C = c.trackData.get(this.internalTrack.id);
        if (C && C.startTimestamp > s)
          break;
      }
      let k = a.reader.requestSliceRange(w, _e, Ge);
      if (k instanceof Promise && (k = await k), !k)
        break;
      const b = w, T = $e(k);
      if (!T || !Ir.includes(T.id) && T.id !== y.Void) {
        const C = await Oa(a.reader, b, Ir, Math.min(o.elementEndPos ?? 1 / 0, b + Na));
        if (C) {
          w = C;
          continue;
        } else
          break;
      }
      const S = T.id;
      let x = T.size;
      const P = k.filePos;
      if (S === y.Cluster) {
        c = await a.readCluster(b, o), x = c.elementEndPos - P;
        const { blockIndex: C, correctBlockFound: I } = t(c);
        if (I)
          return this.fetchPacketInCluster(c, C, n);
        C !== -1 && (l = c, d = C);
      }
      x === void 0 && (p(S !== y.Cluster), x = (await os(a.reader, P, Nr, o.elementEndPos)).pos - P);
      const _ = P + x;
      if (o.elementEndPos === null) {
        let C = a.reader.requestSliceRange(_, _e, Ge);
        if (C instanceof Promise && (C = await C), !C)
          break;
        if (Ns(C) === y.Segment) {
          o.elementEndPos = _;
          break;
        }
      }
      w = _;
    }
    if (h && (!l || l.elementStartPos < h.clusterPosition)) {
      const k = this.internalTrack.cuePoints[u - 1];
      p(!k || k.time < h.time);
      const b = k?.time ?? -1 / 0;
      return this.performClusterLookup(null, t, b, s, n);
    }
    return l ? this.fetchPacketInCluster(l, d, n) : null;
  }
}
class Il extends Va {
  constructor(e) {
    super(e), this.decoderConfigPromise = null, this.internalTrack = e;
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getCodedWidth() {
    return this.internalTrack.info.width;
  }
  getCodedHeight() {
    return this.internalTrack.info.height;
  }
  getSquarePixelWidth() {
    return this.internalTrack.info.squarePixelWidth;
  }
  getSquarePixelHeight() {
    return this.internalTrack.info.squarePixelHeight;
  }
  getRotation() {
    return this.internalTrack.info.rotation;
  }
  async getColorSpace() {
    return {
      primaries: this.internalTrack.info.colorSpace?.primaries,
      transfer: this.internalTrack.info.colorSpace?.transfer,
      matrix: this.internalTrack.info.colorSpace?.matrix,
      fullRange: this.internalTrack.info.colorSpace?.fullRange
    };
  }
  async canBeTransparent() {
    return this.internalTrack.info.alphaMode;
  }
  async getDecoderConfig() {
    return this.internalTrack.info.codec ? this.decoderConfigPromise ??= (async () => {
      let e = null;
      return (this.internalTrack.info.codec === "vp9" || this.internalTrack.info.codec === "av1" || this.internalTrack.info.codec === "avc" && !this.internalTrack.info.codecDescription || this.internalTrack.info.codec === "hevc" && !this.internalTrack.info.codecDescription) && (e = await this.getFirstPacket({})), {
        codec: Cs({
          width: this.internalTrack.info.width,
          height: this.internalTrack.info.height,
          codec: this.internalTrack.info.codec,
          codecDescription: this.internalTrack.info.codecDescription,
          colorSpace: this.internalTrack.info.colorSpace,
          avcType: 1,
          // We don't know better (or do we?) so just assume 'avc1'
          avcCodecInfo: this.internalTrack.info.codec === "avc" && e ? As(e.data) : null,
          hevcCodecInfo: this.internalTrack.info.codec === "hevc" && e ? Bs(e.data) : null,
          vp9CodecInfo: this.internalTrack.info.codec === "vp9" && e ? pa(e.data) : null,
          av1CodecInfo: this.internalTrack.info.codec === "av1" && e ? wa(e.data) : null
        }),
        codedWidth: this.internalTrack.info.width,
        codedHeight: this.internalTrack.info.height,
        displayAspectWidth: this.internalTrack.info.squarePixelWidth,
        displayAspectHeight: this.internalTrack.info.squarePixelHeight,
        description: this.internalTrack.info.codecDescription ?? void 0,
        colorSpace: this.internalTrack.info.colorSpace ?? void 0
      };
    })() : null;
  }
}
class El extends Va {
  constructor(e) {
    super(e), this.decoderConfig = null, this.internalTrack = e;
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getNumberOfChannels() {
    return this.internalTrack.info.numberOfChannels;
  }
  getSampleRate() {
    return this.internalTrack.info.sampleRate;
  }
  async getDecoderConfig() {
    return this.internalTrack.info.codec ? this.decoderConfig ??= {
      codec: _s({
        codec: this.internalTrack.info.codec,
        codecDescription: this.internalTrack.info.codecDescription,
        aacCodecInfo: this.internalTrack.info.aacCodecInfo
      }),
      numberOfChannels: this.internalTrack.info.numberOfChannels,
      sampleRate: this.internalTrack.info.sampleRate,
      description: this.internalTrack.info.codecDescription ?? void 0
    } : null;
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const cs = async (r, e, t) => {
  let i = e;
  for (; t === null || i < t; ) {
    let s = r.requestSlice(i, gr);
    if (s instanceof Promise && (s = await s), !s)
      break;
    const n = A(s), a = di(n, r.fileSize !== null ? r.fileSize - i : null);
    if (a.header)
      return { header: a.header, startPos: i };
    i += a.bytesAdvanced;
  }
  return null;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class vl extends mt {
  constructor(e) {
    super(e), this.metadataPromise = null, this.firstFrameHeader = null, this.loadedSamples = [], this.metadataTags = null, this.tracks = [], this.readingMutex = new Jt(), this.lastSampleLoaded = !1, this.lastLoadedPos = 0, this.nextTimestampInSamples = 0, this.reader = e._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      for (; !this.firstFrameHeader && !this.lastSampleLoaded; )
        await this.advanceReader();
      if (!this.firstFrameHeader)
        throw new Error("No valid MP3 frame found.");
      this.tracks = [new ve(this.input, new Al(this))];
    })();
  }
  async advanceReader() {
    if (this.lastLoadedPos === 0)
      for (; ; ) {
        let o = this.reader.requestSlice(this.lastLoadedPos, et);
        if (o instanceof Promise && (o = await o), !o) {
          this.lastSampleLoaded = !0;
          return;
        }
        const c = At(o);
        if (!c)
          break;
        this.lastLoadedPos = o.filePos + c.size;
      }
    const e = await cs(this.reader, this.lastLoadedPos, this.reader.fileSize);
    if (!e) {
      this.lastSampleLoaded = !0;
      return;
    }
    const t = e.header;
    this.lastLoadedPos = e.startPos + t.totalSize - 1;
    const i = li(t.mpegVersionId, t.channel);
    let s = this.reader.requestSlice(e.startPos + i, 4);
    if (s instanceof Promise && (s = await s), s) {
      const o = A(s);
      if (o === ci || o === Es)
        return;
    }
    this.firstFrameHeader || (this.firstFrameHeader = t), t.sampleRate !== this.firstFrameHeader.sampleRate && console.warn(`MP3 changed sample rate mid-file: ${this.firstFrameHeader.sampleRate} Hz to ${t.sampleRate} Hz. Might be a bug, so please report this file.`);
    const n = t.audioSamplesInFrame / this.firstFrameHeader.sampleRate, a = {
      timestamp: this.nextTimestampInSamples / this.firstFrameHeader.sampleRate,
      duration: n,
      dataStart: e.startPos,
      dataSize: t.totalSize
    };
    this.loadedSamples.push(a), this.nextTimestampInSamples += t.audioSamplesInFrame;
  }
  async getMimeType() {
    return "audio/mpeg";
  }
  async getTracks() {
    return await this.readMetadata(), this.tracks;
  }
  async computeDuration() {
    await this.readMetadata();
    const e = this.tracks[0];
    return p(e), e.computeDuration();
  }
  async getMetadataTags() {
    const e = await this.readingMutex.acquire();
    try {
      if (await this.readMetadata(), this.metadataTags)
        return this.metadataTags;
      this.metadataTags = {};
      let t = 0, i = !1;
      for (; ; ) {
        let s = this.reader.requestSlice(t, et);
        if (s instanceof Promise && (s = await s), !s)
          break;
        const n = At(s);
        if (!n)
          break;
        i = !0;
        let a = this.reader.requestSlice(s.filePos, n.size);
        if (a instanceof Promise && (a = await a), !a)
          break;
        js(a, n, this.metadataTags), t = s.filePos + n.size;
      }
      if (!i && this.reader.fileSize !== null && this.reader.fileSize >= Vr) {
        let s = this.reader.requestSlice(this.reader.fileSize - Vr, Vr);
        s instanceof Promise && (s = await s), p(s), le(s, 3) === "TAG" && cd(s, this.metadataTags);
      }
      return this.metadataTags;
    } finally {
      e();
    }
  }
}
class Al {
  constructor(e) {
    this.demuxer = e;
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  async getFirstTimestamp() {
    return 0;
  }
  getTimeResolution() {
    return p(this.demuxer.firstFrameHeader), this.demuxer.firstFrameHeader.sampleRate / this.demuxer.firstFrameHeader.audioSamplesInFrame;
  }
  async computeDuration() {
    const e = await this.getPacket(1 / 0, { metadataOnly: !0 });
    return (e?.timestamp ?? 0) + (e?.duration ?? 0);
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return ke;
  }
  getCodec() {
    return "mp3";
  }
  getInternalCodecId() {
    return null;
  }
  getNumberOfChannels() {
    return p(this.demuxer.firstFrameHeader), this.demuxer.firstFrameHeader.channel === 3 ? 1 : 2;
  }
  getSampleRate() {
    return p(this.demuxer.firstFrameHeader), this.demuxer.firstFrameHeader.sampleRate;
  }
  getDisposition() {
    return {
      ...ft
    };
  }
  async getDecoderConfig() {
    return p(this.demuxer.firstFrameHeader), {
      codec: "mp3",
      numberOfChannels: this.demuxer.firstFrameHeader.channel === 3 ? 1 : 2,
      sampleRate: this.demuxer.firstFrameHeader.sampleRate
    };
  }
  async getPacketAtIndex(e, t) {
    if (e === -1)
      return null;
    const i = this.demuxer.loadedSamples[e];
    if (!i)
      return null;
    let s;
    if (t.metadataOnly)
      s = Ce;
    else {
      let n = this.demuxer.reader.requestSlice(i.dataStart, i.dataSize);
      if (n instanceof Promise && (n = await n), !n)
        return null;
      s = N(n, i.dataSize);
    }
    return new X(s, "key", i.timestamp, i.duration, e, i.dataSize);
  }
  getFirstPacket(e) {
    return this.getPacketAtIndex(0, e);
  }
  async getNextPacket(e, t) {
    const i = await this.demuxer.readingMutex.acquire();
    try {
      const s = vr(this.demuxer.loadedSamples, e.timestamp, (a) => a.timestamp);
      if (s === -1)
        throw new Error("Packet was not created from this track.");
      const n = s + 1;
      for (; n >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded; )
        await this.demuxer.advanceReader();
      return this.getPacketAtIndex(n, t);
    } finally {
      i();
    }
  }
  async getPacket(e, t) {
    const i = await this.demuxer.readingMutex.acquire();
    try {
      for (; ; ) {
        const s = G(this.demuxer.loadedSamples, e, (n) => n.timestamp);
        if (s === -1 && this.demuxer.loadedSamples.length > 0)
          return null;
        if (this.demuxer.lastSampleLoaded)
          return this.getPacketAtIndex(s, t);
        if (s >= 0 && s + 1 < this.demuxer.loadedSamples.length)
          return this.getPacketAtIndex(s, t);
        await this.demuxer.advanceReader();
      }
    } finally {
      i();
    }
  }
  getKeyPacket(e, t) {
    return this.getPacket(e, t);
  }
  getNextKeyPacket(e, t) {
    return this.getNextPacket(e, t);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Vs = 1399285583, Fl = 79764919, Wa = new Uint32Array(256);
for (let r = 0; r < 256; r++) {
  let e = r << 24;
  for (let t = 0; t < 8; t++)
    e = e & 2147483648 ? e << 1 ^ Fl : e << 1;
  Wa[r] = e >>> 0 & 4294967295;
}
const La = (r) => {
  const e = L(r), t = e.getUint32(22, !0);
  e.setUint32(22, 0, !0);
  let i = 0;
  for (let s = 0; s < r.length; s++) {
    const n = r[s];
    i = (i << 8 ^ Wa[i >>> 24 ^ n]) >>> 0;
  }
  return e.setUint32(22, t, !0), i;
}, Ha = (r, e, t) => {
  let i = 0, s = null;
  if (r.length > 0)
    if (e.codec === "vorbis") {
      p(e.vorbisInfo);
      const n = e.vorbisInfo.modeBlockflags.length, o = (1 << hc(n - 1)) - 1 << 1, c = (r[0] & o) >> 1;
      if (c >= e.vorbisInfo.modeBlockflags.length)
        throw new Error("Invalid mode number.");
      let l = t;
      const d = e.vorbisInfo.modeBlockflags[c];
      if (s = e.vorbisInfo.blocksizes[d], d === 1) {
        const u = (o | 1) + 1, h = r[0] & u ? 1 : 0;
        l = e.vorbisInfo.blocksizes[h];
      }
      i = l !== null ? l + s >> 2 : 0;
    } else e.codec === "opus" && (i = Gc(r).durationInSamples);
  return {
    durationInSamples: i,
    vorbisBlockSize: s
  };
}, qa = (r) => {
  let e = "audio/ogg";
  if (r.codecStrings) {
    const t = [...new Set(r.codecStrings)];
    e += `; codecs="${t.join(", ")}"`;
  }
  return e;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Ct = 27, Kt = 282, ja = Kt + 255 * 255, br = (r) => {
  const e = r.filePos;
  if (jt(r) !== Vs)
    return null;
  r.skip(1);
  const i = M(r), s = ad(r), n = jt(r), a = jt(r), o = jt(r), c = M(r), l = new Uint8Array(c);
  for (let m = 0; m < c; m++)
    l[m] = M(r);
  const d = 27 + c, u = l.reduce((m, g) => m + g, 0), h = d + u;
  return {
    headerStartPos: e,
    totalSize: h,
    dataStartPos: e + d,
    dataSize: u,
    headerType: i,
    granulePosition: s,
    serialNumber: n,
    sequenceNumber: a,
    checksum: o,
    lacingValues: l
  };
}, Bl = (r, e) => {
  for (; r.filePos < e - 3; ) {
    const t = jt(r), i = t & 255, s = t >>> 8 & 255, n = t >>> 16 & 255, a = t >>> 24 & 255, o = 79;
    if (!(i !== o && s !== o && n !== o && a !== o)) {
      if (r.skip(-4), t === Vs)
        return !0;
      r.skip(1);
    }
  }
  return !1;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Rl extends mt {
  constructor(e) {
    super(e), this.metadataPromise = null, this.bitstreams = [], this.tracks = [], this.metadataTags = {}, this.reader = e._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      let e = 0;
      for (; ; ) {
        let t = this.reader.requestSliceRange(e, Ct, Kt);
        if (t instanceof Promise && (t = await t), !t)
          break;
        const i = br(t);
        if (!i || !!!(i.headerType & 2))
          break;
        this.bitstreams.push({
          serialNumber: i.serialNumber,
          bosPage: i,
          description: null,
          numberOfChannels: -1,
          sampleRate: -1,
          codecInfo: {
            codec: null,
            vorbisInfo: null,
            opusInfo: null
          },
          lastMetadataPacket: null
        }), e = i.headerStartPos + i.totalSize;
      }
      for (const t of this.bitstreams) {
        const i = await this.readPacket(t.bosPage, 0);
        i && (// Check for Vorbis
        i.data.byteLength >= 7 && i.data[0] === 1 && i.data[1] === 118 && i.data[2] === 111 && i.data[3] === 114 && i.data[4] === 98 && i.data[5] === 105 && i.data[6] === 115 ? await this.readVorbisMetadata(i, t) : (
          // Check for Opus
          i.data.byteLength >= 8 && i.data[0] === 79 && i.data[1] === 112 && i.data[2] === 117 && i.data[3] === 115 && i.data[4] === 72 && i.data[5] === 101 && i.data[6] === 97 && i.data[7] === 100 && await this.readOpusMetadata(i, t)
        ), t.codecInfo.codec !== null && this.tracks.push(new ve(this.input, new Ml(t, this))));
      }
    })();
  }
  async readVorbisMetadata(e, t) {
    let i = await this.findNextPacketStart(e);
    if (!i)
      return;
    const s = await this.readPacket(i.startPage, i.startSegmentIndex);
    if (!s || (i = await this.findNextPacketStart(s), !i))
      return;
    const n = await this.readPacket(i.startPage, i.startSegmentIndex);
    if (!n || s.data[0] !== 3 || n.data[0] !== 5)
      return;
    const a = [], o = (u) => {
      for (; a.push(Math.min(255, u)), !(u < 255); )
        u -= 255;
    };
    o(e.data.length), o(s.data.length);
    const c = new Uint8Array(1 + a.length + e.data.length + s.data.length + n.data.length);
    c[0] = 2, c.set(a, 1), c.set(e.data, 1 + a.length), c.set(s.data, 1 + a.length + e.data.length), c.set(n.data, 1 + a.length + e.data.length + s.data.length), t.codecInfo.codec = "vorbis", t.description = c, t.lastMetadataPacket = n;
    const l = L(e.data);
    t.numberOfChannels = l.getUint8(11), t.sampleRate = l.getUint32(12, !0);
    const d = l.getUint8(28);
    t.codecInfo.vorbisInfo = {
      blocksizes: [
        1 << (d & 15),
        1 << (d >> 4)
      ],
      modeBlockflags: ba(n.data).modeBlockflags
    }, ts(s.data.subarray(7), this.metadataTags);
  }
  async readOpusMetadata(e, t) {
    const i = await this.findNextPacketStart(e);
    if (!i)
      return;
    const s = await this.readPacket(i.startPage, i.startSegmentIndex);
    if (!s)
      return;
    t.codecInfo.codec = "opus", t.description = e.data, t.lastMetadataPacket = s;
    const n = fi(e.data);
    t.numberOfChannels = n.outputChannelCount, t.sampleRate = ir, t.codecInfo.opusInfo = {
      preSkip: n.preSkip
    }, ts(s.data.subarray(8), this.metadataTags);
  }
  async readPacket(e, t) {
    p(t < e.lacingValues.length);
    let i = 0;
    for (let u = 0; u < t; u++)
      i += e.lacingValues[u];
    let s = e, n = i, a = t;
    const o = [];
    e: for (; ; ) {
      let u = this.reader.requestSlice(s.dataStartPos, s.dataSize);
      u instanceof Promise && (u = await u), p(u);
      const h = N(u, s.dataSize);
      for (; ; ) {
        if (a === s.lacingValues.length) {
          o.push(h.subarray(i, n));
          break;
        }
        const g = s.lacingValues[a];
        if (n += g, g < 255) {
          o.push(h.subarray(i, n));
          break e;
        }
        a++;
      }
      let m = s.headerStartPos + s.totalSize;
      for (; ; ) {
        let g = this.reader.requestSliceRange(m, Ct, Kt);
        if (g instanceof Promise && (g = await g), !g)
          return null;
        const f = br(g);
        if (!f)
          return null;
        if (s = f, s.serialNumber === e.serialNumber)
          break;
        m = s.headerStartPos + s.totalSize;
      }
      i = 0, n = 0, a = 0;
    }
    const c = o.reduce((u, h) => u + h.length, 0);
    if (c === 0)
      return null;
    const l = new Uint8Array(c);
    let d = 0;
    for (let u = 0; u < o.length; u++) {
      const h = o[u];
      l.set(h, d), d += h.length;
    }
    return {
      data: l,
      endPage: s,
      endSegmentIndex: a
    };
  }
  async findNextPacketStart(e) {
    if (e.endSegmentIndex < e.endPage.lacingValues.length - 1)
      return { startPage: e.endPage, startSegmentIndex: e.endSegmentIndex + 1 };
    if (!!(e.endPage.headerType & 4))
      return null;
    let i = e.endPage.headerStartPos + e.endPage.totalSize;
    for (; ; ) {
      let s = this.reader.requestSliceRange(i, Ct, Kt);
      if (s instanceof Promise && (s = await s), !s)
        return null;
      const n = br(s);
      if (!n)
        return null;
      if (n.serialNumber === e.endPage.serialNumber)
        return { startPage: n, startSegmentIndex: 0 };
      i = n.headerStartPos + n.totalSize;
    }
  }
  async getMimeType() {
    await this.readMetadata();
    const e = await Promise.all(this.tracks.map((t) => t.getCodecParameterString()));
    return qa({
      codecStrings: e.filter(Boolean)
    });
  }
  async getTracks() {
    return await this.readMetadata(), this.tracks;
  }
  async computeDuration() {
    const e = await this.getTracks(), t = await Promise.all(e.map((i) => i.computeDuration()));
    return Math.max(0, ...t);
  }
  async getMetadataTags() {
    return await this.readMetadata(), this.metadataTags;
  }
}
class Ml {
  constructor(e, t) {
    this.bitstream = e, this.demuxer = t, this.encodedPacketToMetadata = /* @__PURE__ */ new WeakMap(), this.sequentialScanCache = [], this.sequentialScanMutex = new Jt(), this.internalSampleRate = e.codecInfo.codec === "opus" ? ir : e.sampleRate;
  }
  getId() {
    return this.bitstream.serialNumber;
  }
  getNumber() {
    const e = this.demuxer.tracks.findIndex((t) => t._backing.bitstream === this.bitstream);
    return p(e !== -1), e + 1;
  }
  getNumberOfChannels() {
    return this.bitstream.numberOfChannels;
  }
  getSampleRate() {
    return this.bitstream.sampleRate;
  }
  getTimeResolution() {
    return this.bitstream.sampleRate;
  }
  getCodec() {
    return this.bitstream.codecInfo.codec;
  }
  getInternalCodecId() {
    return null;
  }
  async getDecoderConfig() {
    return p(this.bitstream.codecInfo.codec), {
      codec: this.bitstream.codecInfo.codec,
      numberOfChannels: this.bitstream.numberOfChannels,
      sampleRate: this.bitstream.sampleRate,
      description: this.bitstream.description ?? void 0
    };
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return ke;
  }
  getDisposition() {
    return {
      ...ft
    };
  }
  async getFirstTimestamp() {
    return 0;
  }
  async computeDuration() {
    const e = await this.getPacket(1 / 0, { metadataOnly: !0 });
    return (e?.timestamp ?? 0) + (e?.duration ?? 0);
  }
  granulePositionToTimestampInSamples(e) {
    return this.bitstream.codecInfo.codec === "opus" ? (p(this.bitstream.codecInfo.opusInfo), e - this.bitstream.codecInfo.opusInfo.preSkip) : e;
  }
  createEncodedPacketFromOggPacket(e, t, i) {
    if (!e)
      return null;
    const { durationInSamples: s, vorbisBlockSize: n } = Ha(e.data, this.bitstream.codecInfo, t.vorbisLastBlocksize), a = new X(i.metadataOnly ? Ce : e.data, "key", Math.max(0, t.timestampInSamples) / this.internalSampleRate, s / this.internalSampleRate, e.endPage.headerStartPos + e.endSegmentIndex, e.data.byteLength);
    return this.encodedPacketToMetadata.set(a, {
      packet: e,
      timestampInSamples: t.timestampInSamples,
      durationInSamples: s,
      vorbisLastBlockSize: t.vorbisLastBlocksize,
      vorbisBlockSize: n
    }), a;
  }
  async getFirstPacket(e) {
    p(this.bitstream.lastMetadataPacket);
    const t = await this.demuxer.findNextPacketStart(this.bitstream.lastMetadataPacket);
    if (!t)
      return null;
    let i = 0;
    this.bitstream.codecInfo.codec === "opus" && (p(this.bitstream.codecInfo.opusInfo), i -= this.bitstream.codecInfo.opusInfo.preSkip);
    const s = await this.demuxer.readPacket(t.startPage, t.startSegmentIndex);
    return this.createEncodedPacketFromOggPacket(s, {
      timestampInSamples: i,
      vorbisLastBlocksize: null
    }, e);
  }
  async getNextPacket(e, t) {
    const i = this.encodedPacketToMetadata.get(e);
    if (!i)
      throw new Error("Packet was not created from this track.");
    const s = await this.demuxer.findNextPacketStart(i.packet);
    if (!s)
      return null;
    const n = i.timestampInSamples + i.durationInSamples, a = await this.demuxer.readPacket(s.startPage, s.startSegmentIndex);
    return this.createEncodedPacketFromOggPacket(a, {
      timestampInSamples: n,
      vorbisLastBlocksize: i.vorbisBlockSize
    }, t);
  }
  async getPacket(e, t) {
    if (this.demuxer.reader.fileSize === null)
      return this.getPacketSequential(e, t);
    const i = Tr(e * this.internalSampleRate);
    if (i === 0)
      return this.getFirstPacket(t);
    if (i < 0)
      return null;
    p(this.bitstream.lastMetadataPacket);
    const s = await this.demuxer.findNextPacketStart(this.bitstream.lastMetadataPacket);
    if (!s)
      return null;
    let n = s.startPage, a = this.demuxer.reader.fileSize;
    const o = [n];
    e: for (; n.headerStartPos + n.totalSize < a; ) {
      const b = n.headerStartPos, T = Math.floor((b + a) / 2);
      let S = T;
      for (; ; ) {
        const x = Math.min(S + ja, a - Ct);
        let P = this.demuxer.reader.requestSlice(S, x - S);
        if (P instanceof Promise && (P = await P), p(P), !Bl(P, x)) {
          a = T + Ct;
          continue e;
        }
        let C = this.demuxer.reader.requestSliceRange(P.filePos, Ct, Kt);
        C instanceof Promise && (C = await C), p(C);
        const I = br(C);
        p(I);
        let U = !1;
        if (I.serialNumber === this.bitstream.serialNumber)
          U = !0;
        else {
          let F = this.demuxer.reader.requestSlice(I.headerStartPos, I.totalSize);
          F instanceof Promise && (F = await F), p(F);
          const R = N(F, I.totalSize);
          U = La(R) === I.checksum;
        }
        if (!U) {
          S = I.headerStartPos + 4;
          continue;
        }
        if (U && I.serialNumber !== this.bitstream.serialNumber) {
          S = I.headerStartPos + I.totalSize;
          continue;
        }
        if (I.granulePosition === -1) {
          S = I.headerStartPos + I.totalSize;
          continue;
        }
        this.granulePositionToTimestampInSamples(I.granulePosition) > i ? a = I.headerStartPos : (n = I, o.push(I));
        continue e;
      }
    }
    let c = s.startPage;
    for (const b of o) {
      if (b.granulePosition === n.granulePosition)
        break;
      (!c || b.headerStartPos > c.headerStartPos) && (c = b);
    }
    let l = c;
    const d = [l];
    for (; !(l.serialNumber === this.bitstream.serialNumber && l.granulePosition === n.granulePosition); ) {
      const b = l.headerStartPos + l.totalSize;
      let T = this.demuxer.reader.requestSliceRange(b, Ct, Kt);
      T instanceof Promise && (T = await T), p(T);
      const S = br(T);
      p(S), l = S, l.serialNumber === this.bitstream.serialNumber && d.push(l);
    }
    p(l.granulePosition !== -1);
    let u = null, h, m, g = l, f = 0;
    if (l.headerStartPos === s.startPage.headerStartPos)
      h = this.granulePositionToTimestampInSamples(0), m = !0, u = 0;
    else {
      h = 0, m = !1;
      for (let S = l.lacingValues.length - 1; S >= 0; S--)
        if (l.lacingValues[S] < 255) {
          u = S + 1;
          break;
        }
      if (u === null)
        throw new Error("Invalid page with granule position: no packets end on this page.");
      f = u - 1;
      const b = {
        data: Ce,
        endPage: g,
        endSegmentIndex: f
      };
      if (await this.demuxer.findNextPacketStart(b)) {
        const S = Mn(d, l, u);
        p(S);
        const x = Rn(d, S.page, S.segmentIndex);
        x && (l = x.page, u = x.segmentIndex);
      } else
        for (; ; ) {
          const S = Mn(d, l, u);
          if (!S)
            break;
          const x = Rn(d, S.page, S.segmentIndex);
          if (!x)
            break;
          if (l = x.page, u = x.segmentIndex, S.page.headerStartPos !== g.headerStartPos) {
            g = S.page, f = S.segmentIndex;
            break;
          }
        }
    }
    let w = null, k = null;
    for (; l !== null; ) {
      p(u !== null);
      const b = await this.demuxer.readPacket(l, u);
      if (!b)
        break;
      if (!(l.headerStartPos === s.startPage.headerStartPos && u < s.startSegmentIndex)) {
        let x = this.createEncodedPacketFromOggPacket(b, {
          timestampInSamples: h,
          vorbisLastBlocksize: k?.vorbisBlockSize ?? null
        }, t);
        p(x);
        let P = this.encodedPacketToMetadata.get(x);
        if (p(P), !m && b.endPage.headerStartPos === g.headerStartPos && b.endSegmentIndex === f ? (h = this.granulePositionToTimestampInSamples(l.granulePosition), m = !0, x = this.createEncodedPacketFromOggPacket(b, {
          timestampInSamples: h - P.durationInSamples,
          vorbisLastBlocksize: k?.vorbisBlockSize ?? null
        }, t), p(x), P = this.encodedPacketToMetadata.get(x), p(P)) : h += P.durationInSamples, w = x, k = P, m && // Next timestamp will be too late
        (Math.max(h, 0) > i || Math.max(P.timestampInSamples, 0) === i))
          break;
      }
      const S = await this.demuxer.findNextPacketStart(b);
      if (!S)
        break;
      l = S.startPage, u = S.startSegmentIndex;
    }
    return w;
  }
  // A slower but simpler and sequential algorithm for finding a packet in a file
  async getPacketSequential(e, t) {
    const i = await this.sequentialScanMutex.acquire();
    try {
      const s = Tr(e * this.internalSampleRate);
      e = s / this.internalSampleRate;
      const n = G(this.sequentialScanCache, s, (c) => c.timestampInSamples);
      let a;
      if (n !== -1) {
        const c = this.sequentialScanCache[n];
        a = this.createEncodedPacketFromOggPacket(c.packet, {
          timestampInSamples: c.timestampInSamples,
          vorbisLastBlocksize: c.vorbisLastBlockSize
        }, t);
      } else
        a = await this.getFirstPacket(t);
      let o = 0;
      for (; a && a.timestamp < e; ) {
        const c = await this.getNextPacket(a, t);
        if (!c || c.timestamp > e)
          break;
        if (a = c, o++, o === 100) {
          o = 0;
          const l = this.encodedPacketToMetadata.get(a);
          p(l), this.sequentialScanCache.length > 0 && p(ee(this.sequentialScanCache).timestampInSamples <= l.timestampInSamples), this.sequentialScanCache.push(l);
        }
      }
      return a;
    } finally {
      i();
    }
  }
  getKeyPacket(e, t) {
    return this.getPacket(e, t);
  }
  getNextKeyPacket(e, t) {
    return this.getNextPacket(e, t);
  }
}
const Rn = (r, e, t) => {
  let i = e, s = t;
  e: for (; ; ) {
    for (s--, s; s >= 0; s--)
      if (i.lacingValues[s] < 255) {
        s++;
        break e;
      }
    if (p(s === -1), !(i.headerType & 1)) {
      s = 0;
      break;
    }
    const a = Zn(r, (o) => o.headerStartPos < i.headerStartPos);
    if (!a)
      return null;
    i = a, s = i.lacingValues.length;
  }
  if (p(s !== -1), s === i.lacingValues.length) {
    const n = r[r.indexOf(i) + 1];
    p(n), i = n, s = 0;
  }
  return { page: i, segmentIndex: s };
}, Mn = (r, e, t) => {
  if (t > 0)
    return { page: e, segmentIndex: t - 1 };
  const i = Zn(r, (s) => s.headerStartPos < e.headerStartPos);
  return i ? { page: i, segmentIndex: i.lacingValues.length - 1 } : null;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
var Pe;
(function(r) {
  r[r.PCM = 1] = "PCM", r[r.IEEE_FLOAT = 3] = "IEEE_FLOAT", r[r.ALAW = 6] = "ALAW", r[r.MULAW = 7] = "MULAW", r[r.EXTENSIBLE = 65534] = "EXTENSIBLE";
})(Pe || (Pe = {}));
class zl extends mt {
  constructor(e) {
    super(e), this.metadataPromise = null, this.dataStart = -1, this.dataSize = -1, this.audioInfo = null, this.tracks = [], this.lastKnownPacketIndex = 0, this.metadataTags = {}, this.reader = e._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      let e = this.reader.requestSlice(0, 12);
      e instanceof Promise && (e = await e), p(e);
      const t = le(e, 4), i = t !== "RIFX", s = t === "RF64", n = dt(e, i);
      let a = s ? this.reader.fileSize : Math.min(n + 8, this.reader.fileSize ?? 1 / 0);
      if (le(e, 4) !== "WAVE")
        throw new Error("Invalid WAVE file - wrong format");
      let c = 0, l = null, d = e.filePos;
      for (; a === null || d < a; ) {
        let h = this.reader.requestSlice(d, 8);
        if (h instanceof Promise && (h = await h), !h)
          break;
        const m = le(h, 4), g = dt(h, i), f = h.filePos;
        if (s && c === 0 && m !== "ds64")
          throw new Error('Invalid RF64 file: First chunk must be "ds64".');
        if (m === "fmt ")
          await this.parseFmtChunk(f, g, i);
        else if (m === "data") {
          if (l ??= g, this.dataStart = h.filePos, this.dataSize = Math.min(l, (a ?? 1 / 0) - this.dataStart), this.reader.fileSize === null)
            break;
        } else if (m === "ds64") {
          let w = this.reader.requestSlice(f, g);
          if (w instanceof Promise && (w = await w), !w)
            break;
          const k = zn(w, i);
          l = zn(w, i), a = Math.min(k + 8, this.reader.fileSize ?? 1 / 0);
        } else m === "LIST" ? await this.parseListChunk(f, g, i) : (m === "ID3 " || m === "id3 ") && await this.parseId3Chunk(f, g);
        d = f + g + (g & 1), c++;
      }
      if (!this.audioInfo)
        throw new Error('Invalid WAVE file - missing "fmt " chunk');
      if (this.dataStart === -1)
        throw new Error('Invalid WAVE file - missing "data" chunk');
      const u = this.audioInfo.blockSizeInBytes;
      this.dataSize = Math.floor(this.dataSize / u) * u, this.tracks.push(new ve(this.input, new Dl(this)));
    })();
  }
  async parseFmtChunk(e, t, i) {
    let s = this.reader.requestSlice(e, t);
    if (s instanceof Promise && (s = await s), !s)
      return;
    let n = ur(s, i);
    const a = ur(s, i), o = dt(s, i);
    s.skip(4);
    const c = ur(s, i);
    let l;
    if (t === 14 ? l = 8 : l = ur(s, i), t >= 18 && n !== 357) {
      const d = ur(s, i), u = t - 18;
      if (Math.min(u, d) >= 22 && n === Pe.EXTENSIBLE) {
        s.skip(6);
        const m = N(s, 16);
        n = m[0] | m[1] << 8;
      }
    }
    (n === Pe.MULAW || n === Pe.ALAW) && (l = 8), this.audioInfo = {
      format: n,
      numberOfChannels: a,
      sampleRate: o,
      sampleSizeInBytes: Math.ceil(l / 8),
      blockSizeInBytes: c
    };
  }
  async parseListChunk(e, t, i) {
    let s = this.reader.requestSlice(e, t);
    if (s instanceof Promise && (s = await s), !s)
      return;
    const n = le(s, 4);
    if (n !== "INFO" && n !== "INF0")
      return;
    let a = s.filePos;
    for (; a <= e + t - 8; ) {
      s.filePos = a;
      const o = le(s, 4), c = dt(s, i), l = N(s, c);
      let d = 0;
      for (let h = 0; h < l.length && l[h] !== 0; h++)
        d++;
      const u = String.fromCharCode(...l.subarray(0, d));
      switch (this.metadataTags.raw ??= {}, this.metadataTags.raw[o] = u, o) {
        case "INAM":
        case "TITL":
          this.metadataTags.title ??= u;
          break;
        case "TIT3":
          this.metadataTags.description ??= u;
          break;
        case "IART":
          this.metadataTags.artist ??= u;
          break;
        case "IPRD":
          this.metadataTags.album ??= u;
          break;
        case "IPRT":
        case "ITRK":
        case "TRCK":
          {
            const h = u.split("/"), m = Number.parseInt(h[0], 10), g = h[1] && Number.parseInt(h[1], 10);
            Number.isInteger(m) && m > 0 && (this.metadataTags.trackNumber ??= m), g && Number.isInteger(g) && g > 0 && (this.metadataTags.tracksTotal ??= g);
          }
          break;
        case "ICRD":
        case "IDIT":
          {
            const h = new Date(u);
            Number.isNaN(h.getTime()) || (this.metadataTags.date ??= h);
          }
          break;
        case "YEAR":
          {
            const h = Number.parseInt(u, 10);
            Number.isInteger(h) && h > 0 && (this.metadataTags.date ??= new Date(h, 0, 1));
          }
          break;
        case "IGNR":
        case "GENR":
          this.metadataTags.genre ??= u;
          break;
        case "ICMT":
        case "CMNT":
        case "COMM":
          this.metadataTags.comment ??= u;
          break;
      }
      a += 8 + c + (c & 1);
    }
  }
  async parseId3Chunk(e, t) {
    let i = this.reader.requestSlice(e, t);
    if (i instanceof Promise && (i = await i), !i)
      return;
    const s = At(i);
    if (s) {
      const n = t - et;
      if (s.size = Math.min(s.size, n), s.size > 0) {
        const a = i.slice(e + et, s.size);
        js(a, s, this.metadataTags);
      }
    }
  }
  getCodec() {
    if (p(this.audioInfo), this.audioInfo.format === Pe.MULAW)
      return "ulaw";
    if (this.audioInfo.format === Pe.ALAW)
      return "alaw";
    if (this.audioInfo.format === Pe.PCM) {
      if (this.audioInfo.sampleSizeInBytes === 1)
        return "pcm-u8";
      if (this.audioInfo.sampleSizeInBytes === 2)
        return "pcm-s16";
      if (this.audioInfo.sampleSizeInBytes === 3)
        return "pcm-s24";
      if (this.audioInfo.sampleSizeInBytes === 4)
        return "pcm-s32";
    }
    return this.audioInfo.format === Pe.IEEE_FLOAT && this.audioInfo.sampleSizeInBytes === 4 ? "pcm-f32" : null;
  }
  async getMimeType() {
    return "audio/wav";
  }
  async computeDuration() {
    await this.readMetadata();
    const e = this.tracks[0];
    return p(e), e.computeDuration();
  }
  async getTracks() {
    return await this.readMetadata(), this.tracks;
  }
  async getMetadataTags() {
    return await this.readMetadata(), this.metadataTags;
  }
}
const Ut = 2048;
class Dl {
  constructor(e) {
    this.demuxer = e;
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  getCodec() {
    return this.demuxer.getCodec();
  }
  getInternalCodecId() {
    return p(this.demuxer.audioInfo), this.demuxer.audioInfo.format;
  }
  async getDecoderConfig() {
    const e = this.demuxer.getCodec();
    return e ? (p(this.demuxer.audioInfo), {
      codec: e,
      numberOfChannels: this.demuxer.audioInfo.numberOfChannels,
      sampleRate: this.demuxer.audioInfo.sampleRate
    }) : null;
  }
  async computeDuration() {
    const e = await this.getPacket(1 / 0, { metadataOnly: !0 });
    return (e?.timestamp ?? 0) + (e?.duration ?? 0);
  }
  getNumberOfChannels() {
    return p(this.demuxer.audioInfo), this.demuxer.audioInfo.numberOfChannels;
  }
  getSampleRate() {
    return p(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
  }
  getTimeResolution() {
    return p(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return ke;
  }
  getDisposition() {
    return {
      ...ft
    };
  }
  async getFirstTimestamp() {
    return 0;
  }
  async getPacketAtIndex(e, t) {
    p(e >= 0), p(this.demuxer.audioInfo);
    const i = e * Ut * this.demuxer.audioInfo.blockSizeInBytes;
    if (i >= this.demuxer.dataSize)
      return null;
    const s = Math.min(Ut * this.demuxer.audioInfo.blockSizeInBytes, this.demuxer.dataSize - i);
    if (this.demuxer.reader.fileSize === null) {
      let c = this.demuxer.reader.requestSlice(this.demuxer.dataStart + i, s);
      if (c instanceof Promise && (c = await c), !c)
        return null;
    }
    let n;
    if (t.metadataOnly)
      n = Ce;
    else {
      let c = this.demuxer.reader.requestSlice(this.demuxer.dataStart + i, s);
      c instanceof Promise && (c = await c), p(c), n = N(c, s);
    }
    const a = e * Ut / this.demuxer.audioInfo.sampleRate, o = s / this.demuxer.audioInfo.blockSizeInBytes / this.demuxer.audioInfo.sampleRate;
    return this.demuxer.lastKnownPacketIndex = Math.max(e, this.demuxer.lastKnownPacketIndex), new X(n, "key", a, o, e, s);
  }
  getFirstPacket(e) {
    return this.getPacketAtIndex(0, e);
  }
  async getPacket(e, t) {
    p(this.demuxer.audioInfo);
    const i = Math.floor(Math.min(e * this.demuxer.audioInfo.sampleRate / Ut, (this.demuxer.dataSize - 1) / (Ut * this.demuxer.audioInfo.blockSizeInBytes)));
    if (i < 0)
      return null;
    const s = await this.getPacketAtIndex(i, t);
    if (s)
      return s;
    if (i === 0)
      return null;
    p(this.demuxer.reader.fileSize === null);
    let n = await this.getPacketAtIndex(this.demuxer.lastKnownPacketIndex, t);
    for (; n; ) {
      const a = await this.getNextPacket(n, t);
      if (!a)
        break;
      n = a;
    }
    return n;
  }
  getNextPacket(e, t) {
    p(this.demuxer.audioInfo);
    const i = Math.round(e.timestamp * this.demuxer.audioInfo.sampleRate / Ut);
    return this.getPacketAtIndex(i + 1, t);
  }
  getKeyPacket(e, t) {
    return this.getPacket(e, t);
  }
  getNextKeyPacket(e, t) {
    return this.getNextPacket(e, t);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Er = 7, ut = 9, Je = (r) => {
  const e = r.filePos, t = N(r, 9), i = new V(t);
  if (i.readBits(12) !== 4095 || (i.skipBits(1), i.readBits(2) !== 0))
    return null;
  const a = i.readBits(1), o = i.readBits(2) + 1, c = i.readBits(4);
  if (c === 15)
    return null;
  i.skipBits(1);
  const l = i.readBits(3);
  if (l === 0)
    throw new Error("ADTS frames with channel configuration 0 are not supported.");
  i.skipBits(1), i.skipBits(1), i.skipBits(1), i.skipBits(1);
  const d = i.readBits(13);
  i.skipBits(11);
  const u = i.readBits(2) + 1;
  if (u !== 1)
    throw new Error("ADTS frames with more than one AAC frame are not supported.");
  let h = null;
  return a === 1 ? r.filePos -= 2 : h = i.readBits(16), {
    objectType: o,
    samplingFrequencyIndex: c,
    channelConfiguration: l,
    frameLength: d,
    numberOfAacFrames: u,
    crcCheck: h,
    startPos: e
  };
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Yr = 1024;
class Ol extends mt {
  constructor(e) {
    super(e), this.metadataPromise = null, this.firstFrameHeader = null, this.loadedSamples = [], this.metadataTags = null, this.tracks = [], this.readingMutex = new Jt(), this.lastSampleLoaded = !1, this.lastLoadedPos = 0, this.nextTimestampInSamples = 0, this.reader = e._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      for (; !this.firstFrameHeader && !this.lastSampleLoaded; )
        await this.advanceReader();
      p(this.firstFrameHeader), this.tracks = [new ve(this.input, new Ul(this))];
    })();
  }
  async advanceReader() {
    if (this.lastLoadedPos === 0)
      for (; ; ) {
        let a = this.reader.requestSlice(this.lastLoadedPos, et);
        if (a instanceof Promise && (a = await a), !a) {
          this.lastSampleLoaded = !0;
          return;
        }
        const o = At(a);
        if (!o)
          break;
        this.lastLoadedPos = a.filePos + o.size;
      }
    let e = this.reader.requestSliceRange(this.lastLoadedPos, Er, ut);
    if (e instanceof Promise && (e = await e), !e) {
      this.lastSampleLoaded = !0;
      return;
    }
    const t = Je(e);
    if (!t) {
      this.lastSampleLoaded = !0;
      return;
    }
    if (this.reader.fileSize !== null && t.startPos + t.frameLength > this.reader.fileSize) {
      this.lastSampleLoaded = !0;
      return;
    }
    this.firstFrameHeader || (this.firstFrameHeader = t);
    const i = ht[t.samplingFrequencyIndex];
    p(i !== void 0);
    const s = Yr / i, n = {
      timestamp: this.nextTimestampInSamples / i,
      duration: s,
      dataStart: t.startPos,
      dataSize: t.frameLength
    };
    this.loadedSamples.push(n), this.nextTimestampInSamples += Yr, this.lastLoadedPos = t.startPos + t.frameLength;
  }
  async getMimeType() {
    return "audio/aac";
  }
  async getTracks() {
    return await this.readMetadata(), this.tracks;
  }
  async computeDuration() {
    await this.readMetadata();
    const e = this.tracks[0];
    return p(e), e.computeDuration();
  }
  async getMetadataTags() {
    const e = await this.readingMutex.acquire();
    try {
      if (await this.readMetadata(), this.metadataTags)
        return this.metadataTags;
      this.metadataTags = {};
      let t = 0;
      for (; ; ) {
        let i = this.reader.requestSlice(t, et);
        if (i instanceof Promise && (i = await i), !i)
          break;
        const s = At(i);
        if (!s)
          break;
        let n = this.reader.requestSlice(i.filePos, s.size);
        if (n instanceof Promise && (n = await n), !n)
          break;
        js(n, s, this.metadataTags), t = i.filePos + s.size;
      }
      return this.metadataTags;
    } finally {
      e();
    }
  }
}
class Ul {
  constructor(e) {
    this.demuxer = e;
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  async getFirstTimestamp() {
    return 0;
  }
  getTimeResolution() {
    return this.getSampleRate() / Yr;
  }
  async computeDuration() {
    const e = await this.getPacket(1 / 0, { metadataOnly: !0 });
    return (e?.timestamp ?? 0) + (e?.duration ?? 0);
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return ke;
  }
  getCodec() {
    return "aac";
  }
  getInternalCodecId() {
    return p(this.demuxer.firstFrameHeader), this.demuxer.firstFrameHeader.objectType;
  }
  getNumberOfChannels() {
    p(this.demuxer.firstFrameHeader);
    const e = rr[this.demuxer.firstFrameHeader.channelConfiguration];
    return p(e !== void 0), e;
  }
  getSampleRate() {
    p(this.demuxer.firstFrameHeader);
    const e = ht[this.demuxer.firstFrameHeader.samplingFrequencyIndex];
    return p(e !== void 0), e;
  }
  getDisposition() {
    return {
      ...ft
    };
  }
  async getDecoderConfig() {
    return p(this.demuxer.firstFrameHeader), {
      codec: `mp4a.40.${this.demuxer.firstFrameHeader.objectType}`,
      numberOfChannels: this.getNumberOfChannels(),
      sampleRate: this.getSampleRate()
    };
  }
  async getPacketAtIndex(e, t) {
    if (e === -1)
      return null;
    const i = this.demuxer.loadedSamples[e];
    if (!i)
      return null;
    let s;
    if (t.metadataOnly)
      s = Ce;
    else {
      let n = this.demuxer.reader.requestSlice(i.dataStart, i.dataSize);
      if (n instanceof Promise && (n = await n), !n)
        return null;
      s = N(n, i.dataSize);
    }
    return new X(s, "key", i.timestamp, i.duration, e, i.dataSize);
  }
  getFirstPacket(e) {
    return this.getPacketAtIndex(0, e);
  }
  async getNextPacket(e, t) {
    const i = await this.demuxer.readingMutex.acquire();
    try {
      const s = vr(this.demuxer.loadedSamples, e.timestamp, (a) => a.timestamp);
      if (s === -1)
        throw new Error("Packet was not created from this track.");
      const n = s + 1;
      for (; n >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded; )
        await this.demuxer.advanceReader();
      return this.getPacketAtIndex(n, t);
    } finally {
      i();
    }
  }
  async getPacket(e, t) {
    const i = await this.demuxer.readingMutex.acquire();
    try {
      for (; ; ) {
        const s = G(this.demuxer.loadedSamples, e, (n) => n.timestamp);
        if (s === -1 && this.demuxer.loadedSamples.length > 0)
          return null;
        if (this.demuxer.lastSampleLoaded)
          return this.getPacketAtIndex(s, t);
        if (s >= 0 && s + 1 < this.demuxer.loadedSamples.length)
          return this.getPacketAtIndex(s, t);
        await this.demuxer.advanceReader();
      }
    } finally {
      i();
    }
  }
  getKeyPacket(e, t) {
    return this.getPacket(e, t);
  }
  getNextKeyPacket(e, t) {
    return this.getNextPacket(e, t);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const $a = (r) => r === 0 ? null : r === 1 ? 192 : r >= 2 && r <= 5 ? 144 * 2 ** r : r === 6 ? "uncommon-u8" : r === 7 ? "uncommon-u16" : r >= 8 && r <= 15 ? 2 ** r : null, Nl = (r, e) => {
  switch (r) {
    case 0:
      return e;
    case 1:
      return 88200;
    case 2:
      return 176400;
    case 3:
      return 192e3;
    case 4:
      return 8e3;
    case 5:
      return 16e3;
    case 6:
      return 22050;
    case 7:
      return 24e3;
    case 8:
      return 32e3;
    case 9:
      return 44100;
    case 10:
      return 48e3;
    case 11:
      return 96e3;
    case 12:
      return "uncommon-u8";
    case 13:
      return "uncommon-u16";
    case 14:
      return "uncommon-u16-10";
    default:
      return null;
  }
}, Qa = (r) => {
  let e = 0;
  const t = new V(N(r, 1));
  for (; t.readBits(1) === 1; )
    e++;
  if (e === 0)
    return t.readBits(7);
  const i = [], s = e - 1, n = new V(N(r, s)), a = 8 - e - 1;
  for (let c = 0; c < a; c++)
    i.unshift(t.readBits(1));
  for (let c = 0; c < s; c++)
    for (let l = 0; l < 8; l++) {
      const d = n.readBits(1);
      l < 2 || i.unshift(d);
    }
  return i.reduce((c, l, d) => c | l << d, 0);
}, Ka = (r, e) => {
  if (e === "uncommon-u16")
    return oe(r) + 1;
  if (e === "uncommon-u8")
    return M(r) + 1;
  if (typeof e == "number")
    return e;
  ge(e), p(!1);
}, Vl = (r, e) => e === "uncommon-u16" ? oe(r) : e === "uncommon-u16-10" ? oe(r) * 10 : e === "uncommon-u8" ? M(r) : typeof e == "number" ? e : null, Wl = (r) => {
  let t = 0;
  for (const i of r) {
    t ^= i;
    for (let s = 0; s < 8; s++)
      (t & 128) !== 0 ? t = t << 1 ^ 7 : t <<= 1, t &= 255;
  }
  return t;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Ll extends mt {
  constructor(e) {
    super(e), this.loadedSamples = [], this.metadataPromise = null, this.track = null, this.metadataTags = {}, this.audioInfo = null, this.lastLoadedPos = null, this.blockingBit = null, this.readingMutex = new Jt(), this.lastSampleLoaded = !1, this.reader = e._reader;
  }
  async computeDuration() {
    return await this.readMetadata(), p(this.track), this.track.computeDuration();
  }
  async getMetadataTags() {
    return await this.readMetadata(), this.metadataTags;
  }
  async getTracks() {
    return await this.readMetadata(), p(this.track), [this.track];
  }
  async getMimeType() {
    return "audio/flac";
  }
  async readMetadata() {
    let e = 4;
    return this.metadataPromise ??= (async () => {
      for (; this.reader.fileSize === null || e < this.reader.fileSize; ) {
        let t = this.reader.requestSlice(e, 4);
        if (t instanceof Promise && (t = await t), e += 4, t === null)
          throw new Error(`Metadata block at position ${e} is too small! Corrupted file.`);
        p(t);
        const i = M(t), s = Ht(t), n = (i & 128) !== 0;
        switch (i & 127) {
          case Ye.STREAMINFO: {
            let o = this.reader.requestSlice(e, s);
            if (o instanceof Promise && (o = await o), p(o), o === null)
              throw new Error(`StreamInfo block at position ${e} is too small! Corrupted file.`);
            const c = N(o, 34), l = new V(c), d = l.readBits(16), u = l.readBits(16), h = l.readBits(24), m = l.readBits(24), g = l.readBits(20), f = l.readBits(3) + 1;
            l.readBits(5);
            const w = l.readBits(36);
            l.skipBits(16 * 8);
            const k = new Uint8Array(42);
            k.set(new Uint8Array([102, 76, 97, 67]), 0), k.set(new Uint8Array([128, 0, 0, 34]), 4), k.set(c, 8), this.audioInfo = {
              numberOfChannels: f,
              sampleRate: g,
              totalSamples: w,
              minimumBlockSize: d,
              maximumBlockSize: u,
              minimumFrameSize: h,
              maximumFrameSize: m,
              description: k
            }, this.track = new ve(this.input, new Hl(this));
            break;
          }
          case Ye.VORBIS_COMMENT: {
            let o = this.reader.requestSlice(e, s);
            o instanceof Promise && (o = await o), p(o), ts(N(o, s), this.metadataTags);
            break;
          }
          case Ye.PICTURE: {
            let o = this.reader.requestSlice(e, s);
            o instanceof Promise && (o = await o), p(o);
            const c = A(o), l = A(o), d = Ee.decode(N(o, l)), u = A(o), h = Ee.decode(N(o, u));
            o.skip(16);
            const m = A(o), g = N(o, m);
            this.metadataTags.images ??= [], this.metadataTags.images.push({
              data: g,
              mimeType: d,
              // https://www.rfc-editor.org/rfc/rfc9639.html#table13
              kind: c === 3 ? "coverFront" : c === 4 ? "coverBack" : "unknown",
              description: h
            });
            break;
          }
        }
        if (e += s, n) {
          this.lastLoadedPos = e;
          break;
        }
      }
    })();
  }
  async readNextFlacFrame({ startPos: e, isFirstPacket: t }) {
    p(this.audioInfo);
    const i = 6, n = this.audioInfo.maximumFrameSize + 16, a = await this.reader.requestSliceRange(e, this.audioInfo.minimumFrameSize, n);
    if (!a)
      return null;
    const o = this.readFlacFrameHeader({
      slice: a,
      isFirstPacket: t
    });
    if (!o)
      return null;
    for (a.filePos = e + this.audioInfo.minimumFrameSize; ; ) {
      if (a.filePos > a.end - i)
        return {
          num: o.num,
          blockSize: o.blockSize,
          sampleRate: o.sampleRate,
          size: a.end - e,
          isLastFrame: !0
        };
      if (M(a) === 255) {
        const l = a.filePos, d = M(a), u = this.blockingBit === 1 ? 249 : 248;
        if (d !== u) {
          a.filePos = l;
          continue;
        }
        a.skip(-2);
        const h = a.filePos - e, m = this.readFlacFrameHeader({
          slice: a,
          isFirstPacket: !1
        });
        if (!m) {
          a.filePos = l;
          continue;
        }
        if (this.blockingBit === 0) {
          if (m.num - o.num !== 1) {
            a.filePos = l;
            continue;
          }
        } else if (m.num - o.num !== o.blockSize) {
          a.filePos = l;
          continue;
        }
        return {
          num: o.num,
          blockSize: o.blockSize,
          sampleRate: o.sampleRate,
          size: h,
          isLastFrame: !1
        };
      }
    }
  }
  readFlacFrameHeader({ slice: e, isFirstPacket: t }) {
    const i = e.filePos, s = N(e, 4), n = new V(s);
    if (n.readBits(15) !== 32764)
      return null;
    if (this.blockingBit === null) {
      p(t);
      const w = n.readBits(1);
      this.blockingBit = w;
    } else if (this.blockingBit === 1) {
      if (p(!t), n.readBits(1) !== 1)
        return null;
    } else if (this.blockingBit === 0) {
      if (p(!t), n.readBits(1) !== 0)
        return null;
    } else
      throw new Error("Invalid blocking bit");
    const o = $a(n.readBits(4));
    if (!o)
      return null;
    p(this.audioInfo);
    const c = Nl(n.readBits(4), this.audioInfo.sampleRate);
    if (!c || (n.readBits(4), n.readBits(3), n.readBits(1) !== 0))
      return null;
    const d = Qa(e), u = Ka(e, o), h = Vl(e, c);
    if (h === null || h !== this.audioInfo.sampleRate)
      return null;
    const m = e.filePos - i, g = M(e);
    e.skip(-m), e.skip(-1);
    const f = Wl(N(e, m));
    return g !== f ? null : { num: d, blockSize: u, sampleRate: h };
  }
  async advanceReader() {
    await this.readMetadata(), p(this.lastLoadedPos !== null), p(this.audioInfo);
    const e = this.lastLoadedPos, t = await this.readNextFlacFrame({
      startPos: e,
      isFirstPacket: this.loadedSamples.length === 0
    });
    if (!t) {
      this.lastSampleLoaded = !0;
      return;
    }
    const i = this.loadedSamples[this.loadedSamples.length - 1], n = {
      blockOffset: i ? i.blockOffset + i.blockSize : 0,
      blockSize: t.blockSize,
      byteOffset: e,
      byteSize: t.size
    };
    if (this.lastLoadedPos = this.lastLoadedPos + t.size, this.loadedSamples.push(n), t.isLastFrame) {
      this.lastSampleLoaded = !0;
      return;
    }
  }
}
class Hl {
  constructor(e) {
    this.demuxer = e;
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  getCodec() {
    return "flac";
  }
  getInternalCodecId() {
    return null;
  }
  getNumberOfChannels() {
    return p(this.demuxer.audioInfo), this.demuxer.audioInfo.numberOfChannels;
  }
  async computeDuration() {
    const e = await this.getPacket(1 / 0, { metadataOnly: !0 });
    return (e?.timestamp ?? 0) + (e?.duration ?? 0);
  }
  getSampleRate() {
    return p(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return ke;
  }
  getTimeResolution() {
    return p(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
  }
  getDisposition() {
    return {
      ...ft
    };
  }
  async getFirstTimestamp() {
    return 0;
  }
  async getDecoderConfig() {
    return p(this.demuxer.audioInfo), {
      codec: "flac",
      numberOfChannels: this.demuxer.audioInfo.numberOfChannels,
      sampleRate: this.demuxer.audioInfo.sampleRate,
      description: this.demuxer.audioInfo.description
    };
  }
  async getPacket(e, t) {
    if (p(this.demuxer.audioInfo), e < 0)
      throw new Error("Timestamp cannot be negative");
    const i = await this.demuxer.readingMutex.acquire();
    try {
      for (; ; ) {
        const s = G(this.demuxer.loadedSamples, e, (c) => c.blockOffset / this.demuxer.audioInfo.sampleRate);
        if (s === -1) {
          await this.demuxer.advanceReader();
          continue;
        }
        const n = this.demuxer.loadedSamples[s], a = n.blockOffset / this.demuxer.audioInfo.sampleRate, o = n.blockSize / this.demuxer.audioInfo.sampleRate;
        if (a + o <= e) {
          if (this.demuxer.lastSampleLoaded)
            return this.getPacketAtIndex(this.demuxer.loadedSamples.length - 1, t);
          await this.demuxer.advanceReader();
          continue;
        }
        return this.getPacketAtIndex(s, t);
      }
    } finally {
      i();
    }
  }
  async getNextPacket(e, t) {
    const i = await this.demuxer.readingMutex.acquire();
    try {
      const s = e.sequenceNumber + 1;
      if (this.demuxer.lastSampleLoaded && s >= this.demuxer.loadedSamples.length)
        return null;
      for (; s >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded; )
        await this.demuxer.advanceReader();
      return this.getPacketAtIndex(s, t);
    } finally {
      i();
    }
  }
  getKeyPacket(e, t) {
    return this.getPacket(e, t);
  }
  getNextKeyPacket(e, t) {
    return this.getNextPacket(e, t);
  }
  async getPacketAtIndex(e, t) {
    const i = this.demuxer.loadedSamples[e];
    if (!i)
      return null;
    let s;
    if (t.metadataOnly)
      s = Ce;
    else {
      let o = this.demuxer.reader.requestSlice(i.byteOffset, i.byteSize);
      if (o instanceof Promise && (o = await o), !o)
        return null;
      s = N(o, i.byteSize);
    }
    p(this.demuxer.audioInfo);
    const n = i.blockOffset / this.demuxer.audioInfo.sampleRate, a = i.blockSize / this.demuxer.audioInfo.sampleRate;
    return new X(s, "key", n, a, e, i.byteSize);
  }
  async getFirstPacket(e) {
    for (; this.demuxer.loadedSamples.length === 0 && !this.demuxer.lastSampleLoaded; )
      await this.demuxer.advanceReader();
    return this.getPacketAtIndex(0, e);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Be = 9e4, me = 188, Ga = (r) => {
  let e = "video/MP2T";
  const t = [...new Set(r.filter(Boolean))];
  return t.length > 0 && (e += `; codecs="${t.join(", ")}"`), e;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class ql extends mt {
  constructor(e) {
    super(e), this.metadataPromise = null, this.elementaryStreams = [], this.tracks = [], this.packetOffset = 0, this.packetStride = -1, this.sectionEndPositions = [], this.seekChunkSize = 5 * 1024 * 1024, this.minReferencePointByteDistance = -1, this.reader = e._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      const e = me + 16 + 1;
      let t = this.reader.requestSlice(0, e);
      t instanceof Promise && (t = await t), p(t);
      const i = N(t, e);
      if (i[0] === 71 && i[me] === 71)
        this.packetOffset = 0, this.packetStride = me;
      else if (i[0] === 71 && i[me + 16] === 71)
        this.packetOffset = 0, this.packetStride = me + 16;
      else if (i[4] === 71 && i[4 + me + 4] === 71)
        this.packetOffset = 4, this.packetStride = me + 4;
      else
        throw new Error("Unreachable.");
      const s = 256;
      this.minReferencePointByteDistance = s * this.packetStride;
      let n = this.packetOffset, a = null, o = !1, c = !1;
      for (; ; ) {
        const l = await this.readPacketHeader(n);
        if (!l)
          break;
        if (l.payloadUnitStartIndicator === 0) {
          n += this.packetStride;
          continue;
        }
        const d = await this.readSection(n, !0, !c);
        if (!d)
          break;
        const u = 3, h = 32;
        let m = !1;
        if (!c && d.pid !== 0 && !(d.payload[0] === 0 && d.payload[1] === 0 && d.payload[2] === 1)) {
          const w = new V(d.payload), k = w.readAlignedByte();
          w.skipBits(8 * k), m = w.readBits(8) === 2;
        }
        if (d.pid === 0 && !o) {
          const f = new V(d.payload), w = f.readAlignedByte();
          f.skipBits(8 * w), f.skipBits(14);
          const k = f.readBits(10);
          for (f.skipBits(40); 8 * (k + u) - f.pos > h; ) {
            const b = f.readBits(16);
            if (f.skipBits(3), b !== 0) {
              if (a !== null)
                throw new Error("Only files with a single program are supported.");
              a = f.readBits(13);
            }
          }
          if (a === null)
            throw new Error("Program Association Table must link to a Program Map Table.");
          o = !0;
        } else if ((d.pid === a || m) && !c) {
          const f = new V(d.payload), w = f.readAlignedByte();
          f.skipBits(8 * w), f.skipBits(12);
          const k = f.readBits(12);
          f.skipBits(43), f.readBits(13), f.skipBits(6);
          const b = f.readBits(10);
          for (f.skipBits(8 * b); 8 * (k + u) - f.pos > h; ) {
            const T = f.readBits(8);
            f.skipBits(3);
            const S = f.readBits(13);
            f.skipBits(6);
            const x = f.readBits(10), P = f.pos + 8 * x;
            let _ = !1, C = !1;
            for (; f.pos < P; ) {
              const U = f.readBits(8), D = f.readBits(8);
              U === 106 ? _ = !0 : (U === 122 || U === 204) && (C = !0), f.skipBits(8 * D);
            }
            let I = null;
            switch (T) {
              case 3:
              case 4:
              case 15:
                I = {
                  type: "audio",
                  codec: T === 15 ? "aac" : "mp3",
                  aacCodecInfo: null,
                  numberOfChannels: -1,
                  sampleRate: -1
                };
                break;
              case 27:
              case 36:
                I = {
                  type: "video",
                  codec: T === 27 ? "avc" : "hevc",
                  avcCodecInfo: null,
                  hevcCodecInfo: null,
                  colorSpace: {
                    primaries: null,
                    transfer: null,
                    matrix: null,
                    fullRange: null
                  },
                  width: -1,
                  height: -1,
                  squarePixelWidth: -1,
                  squarePixelHeight: -1,
                  reorderSize: -1
                };
                break;
              case 129:
                I = {
                  type: "audio",
                  codec: "ac3",
                  aacCodecInfo: null,
                  numberOfChannels: -1,
                  sampleRate: -1
                };
                break;
              case 135:
                I = {
                  type: "audio",
                  codec: "eac3",
                  aacCodecInfo: null,
                  numberOfChannels: -1,
                  sampleRate: -1
                };
                break;
              case 6:
                C ? I = {
                  type: "audio",
                  codec: "eac3",
                  aacCodecInfo: null,
                  numberOfChannels: -1,
                  sampleRate: -1
                } : _ && (I = {
                  type: "audio",
                  codec: "ac3",
                  aacCodecInfo: null,
                  numberOfChannels: -1,
                  sampleRate: -1
                });
                break;
              default:
                console.warn(`Unsupported stream_type 0x${T.toString(16)}; ignoring stream.`);
            }
            I && this.elementaryStreams.push({
              demuxer: this,
              pid: S,
              streamType: T,
              initialized: !1,
              firstSection: null,
              info: I,
              referencePesPackets: []
            });
          }
          c = !0;
        } else {
          const f = this.elementaryStreams.find((w) => w.pid === d.pid);
          if (f && !f.initialized) {
            const w = kr(d);
            if (!w)
              throw new Error(`Couldn't read first PES packet for Elementary Stream with PID ${f.pid}`);
            if (f.firstSection = d, f.info.type === "video")
              if (f.info.codec === "avc") {
                if (f.info.avcCodecInfo = As(w.data), !f.info.avcCodecInfo)
                  throw new Error("Invalid AVC video stream; could not extract AVCDecoderConfigurationRecord from first packet.");
                const k = f.info.avcCodecInfo.sequenceParameterSets[0];
                p(k);
                const b = Fs(k);
                f.info.width = b.displayWidth, f.info.height = b.displayHeight, b.pixelAspectRatio.num > b.pixelAspectRatio.den ? (f.info.squarePixelWidth = Math.round(f.info.width * b.pixelAspectRatio.num / b.pixelAspectRatio.den), f.info.squarePixelHeight = f.info.height) : (f.info.squarePixelWidth = f.info.width, f.info.squarePixelHeight = Math.round(f.info.height * b.pixelAspectRatio.den / b.pixelAspectRatio.num)), f.info.colorSpace = {
                  primaries: Wr[b.colourPrimaries],
                  transfer: Lr[b.transferCharacteristics],
                  matrix: Hr[b.matrixCoefficients],
                  fullRange: !!b.fullRangeFlag
                }, f.info.reorderSize = b.maxDecFrameBuffering, f.initialized = !0;
              } else if (f.info.codec === "hevc") {
                if (f.info.hevcCodecInfo = Bs(w.data), !f.info.hevcCodecInfo)
                  throw new Error("Invalid HEVC video stream; could not extract HVCDecoderConfigurationRecord from first packet.");
                const b = f.info.hevcCodecInfo.arrays.find((S) => S.nalUnitType === ie.SPS_NUT).nalUnits[0];
                p(b);
                const T = ma(b);
                f.info.width = T.displayWidth, f.info.height = T.displayHeight, T.pixelAspectRatio.num > T.pixelAspectRatio.den ? (f.info.squarePixelWidth = Math.round(f.info.width * T.pixelAspectRatio.num / T.pixelAspectRatio.den), f.info.squarePixelHeight = f.info.height) : (f.info.squarePixelWidth = f.info.width, f.info.squarePixelHeight = Math.round(f.info.height * T.pixelAspectRatio.den / T.pixelAspectRatio.num)), f.info.colorSpace = {
                  primaries: Wr[T.colourPrimaries],
                  transfer: Lr[T.transferCharacteristics],
                  matrix: Hr[T.matrixCoefficients],
                  fullRange: !!T.fullRangeFlag
                }, f.info.reorderSize = T.maxDecFrameBuffering, f.initialized = !0;
              } else
                throw new Error("Unhandled.");
            else if (f.info.codec === "aac") {
              const k = ye.tempFromBytes(w.data), b = Je(k);
              if (!b)
                throw new Error("Invalid AAC audio stream; could not read ADTS frame header from first packet.");
              f.info.aacCodecInfo = {
                isMpeg2: !1,
                objectType: b.objectType
              }, f.info.numberOfChannels = rr[b.channelConfiguration], f.info.sampleRate = ht[b.samplingFrequencyIndex], f.initialized = !0;
            } else if (f.info.codec === "mp3") {
              const k = A(ye.tempFromBytes(w.data)), b = di(k, w.data.byteLength);
              if (!b.header)
                throw new Error("Invalid MP3 audio stream; could not read frame header from first packet.");
              f.info.numberOfChannels = b.header.channel === 3 ? 1 : 2, f.info.sampleRate = b.header.sampleRate, f.initialized = !0;
            } else if (f.info.codec === "ac3") {
              const k = ya(w.data);
              if (!k)
                throw new Error("Invalid AC-3 audio stream; could not read sync frame from first packet.");
              if (k.fscod === 3)
                throw new Error("Invalid AC-3 audio stream; reserved sample rate code found in first packet.");
              f.info.numberOfChannels = Rs[k.acmod] + k.lfeon, f.info.sampleRate = ui[k.fscod], f.initialized = !0;
            } else if (f.info.codec === "eac3") {
              const k = Sa(w.data);
              if (!k)
                throw new Error("Invalid E-AC-3 audio stream; could not read sync frame from first packet.");
              const b = xa(k);
              if (b === null)
                throw new Error("Invalid E-AC-3 audio stream; reserved sample rate code found in first packet.");
              f.info.numberOfChannels = Pa(k), f.info.sampleRate = b, f.initialized = !0;
            } else
              throw new Error("Unhandled.");
          }
        }
        if (c && this.elementaryStreams.every((f) => f.initialized))
          break;
        n += this.packetStride;
      }
      if (!c)
        throw o ? new Error("No Program Map Table found in the file.") : new Error("No Program Association Table found in the file.");
      for (const l of this.elementaryStreams)
        l.info.type === "video" ? this.tracks.push(new Dt(this.input, new jl(l))) : this.tracks.push(new ve(this.input, new $l(l)));
    })();
  }
  async getTracks() {
    return await this.readMetadata(), this.tracks;
  }
  async getMetadataTags() {
    return {};
  }
  async computeDuration() {
    const e = await this.getTracks(), t = await Promise.all(e.map((i) => i.computeDuration()));
    return Math.max(0, ...t);
  }
  async getMimeType() {
    await this.readMetadata();
    const e = await this.getTracks(), t = await Promise.all(e.map((i) => i.getCodecParameterString()));
    return Ga(t);
  }
  async readSection(e, t, i = !1) {
    let s = e, n = e;
    const a = [];
    let o = 0, c = null, l = !0, d = 0;
    for (; ; ) {
      const h = await this.readPacket(n);
      if (n += this.packetStride, !h)
        break;
      if (c) {
        if (h.pid !== c.pid) {
          if (i)
            break;
          continue;
        }
        if (h.payloadUnitStartIndicator === 1)
          break;
      } else {
        if (h.payloadUnitStartIndicator === 0)
          break;
        c = h;
      }
      const m = !!(h.adaptationFieldControl & 2), g = !!(h.adaptationFieldControl & 1);
      let f = 0;
      if (m && (f = 1 + h.body[0], h === c && f > 1 && (d = h.body[1] >> 6 & 1)), g && (f === 0 ? (a.push(h.body), o += h.body.byteLength) : (a.push(h.body.subarray(f)), o += h.body.byteLength - f)), s = n, !t && o >= 64) {
        l = !1;
        break;
      }
      if (vr(this.sectionEndPositions, s, (k) => k) !== -1) {
        l = !1;
        break;
      }
    }
    if (l) {
      const h = G(this.sectionEndPositions, s, (m) => m);
      this.sectionEndPositions.splice(h + 1, 0, s);
    }
    if (!c)
      return null;
    let u;
    if (a.length === 1)
      u = a[0];
    else {
      const h = a.reduce((g, f) => g + f.length, 0);
      u = new Uint8Array(h);
      let m = 0;
      for (const g of a)
        u.set(g, m), m += g.length;
    }
    return {
      startPos: e,
      endPos: t ? s : null,
      pid: c.pid,
      payload: u,
      randomAccessIndicator: d
    };
  }
  async readPacketHeader(e) {
    let t = this.reader.requestSlice(e, 4);
    if (t instanceof Promise && (t = await t), !t)
      return null;
    if (M(t) !== 71)
      throw new Error("Invalid TS packet sync byte. Likely an internal bug, please report this file.");
    const s = oe(t), n = s >> 14 & 1, a = s & 8191, c = M(t) >> 4 & 3;
    return {
      payloadUnitStartIndicator: n,
      pid: a,
      adaptationFieldControl: c
    };
  }
  async readPacket(e) {
    let t = this.reader.requestSlice(e, me);
    if (t instanceof Promise && (t = await t), !t)
      return null;
    const i = N(t, me);
    if (i[0] !== 71)
      throw new Error("Invalid TS packet sync byte. Likely an internal bug, please report this file.");
    const n = (i[1] << 8) + i[2], a = n >> 14 & 1, o = n & 8191, l = i[3] >> 4 & 3;
    return {
      payloadUnitStartIndicator: a,
      pid: o,
      adaptationFieldControl: l,
      body: i.subarray(4)
    };
  }
}
const Tt = (r) => {
  if (r.payload.byteLength < 3)
    return null;
  const e = new V(r.payload);
  if (e.readBits(24) !== 1)
    return null;
  const i = e.readBits(8);
  if (e.skipBits(16), i === 188 || i === 190 || i === 191 || i === 240 || i === 241 || i === 255 || i === 242 || i === 248)
    return null;
  e.skipBits(8);
  const s = e.readBits(2);
  e.skipBits(14);
  let n = 0;
  if (s === 2 || s === 3)
    e.skipBits(4), n += e.readBits(3) * (1 << 30), e.skipBits(1), n += e.readBits(15) * 32768, e.skipBits(1), n += e.readBits(15);
  else
    throw new Error("PES packets without PTS are not currently supported. If you think this file should be supported, please report it.");
  return {
    sectionStartPos: r.startPos,
    sectionEndPos: r.endPos,
    pts: n,
    randomAccessIndicator: r.randomAccessIndicator
  };
}, kr = (r) => {
  p(r.endPos !== null);
  const e = Tt(r);
  if (!e)
    return null;
  const t = new V(r.payload);
  t.skipBits(32);
  const i = t.readBits(16), s = 6;
  t.skipBits(16);
  const n = t.readBits(8), a = t.pos + 8 * n;
  t.pos = a;
  const o = a / 8;
  p(Number.isInteger(o));
  const c = r.payload.subarray(
    o,
    // "A value of 0 indicates that the PES packet length is neither specified nor bounded and is allowed only in
    // PES packets whose payload consists of bytes from a video elementary stream contained in
    // transport stream packets."
    i > 0 ? s + i : r.payload.byteLength
  );
  return {
    ...e,
    data: c
  };
};
class pi {
  constructor(e) {
    this.elementaryStream = e, this.packetBuffers = /* @__PURE__ */ new WeakMap(), this.packetSectionStarts = /* @__PURE__ */ new WeakMap();
  }
  getId() {
    return this.elementaryStream.pid;
  }
  getNumber() {
    const e = this.elementaryStream.demuxer, t = this.elementaryStream.info.type;
    let i = 0;
    for (const s of e.tracks)
      if (s.type === t && i++, p(s._backing instanceof pi), s._backing.elementaryStream === this.elementaryStream)
        break;
    return i;
  }
  getCodec() {
    throw new Error("Not implemented on base class.");
  }
  getInternalCodecId() {
    return this.elementaryStream.streamType;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return ke;
  }
  getDisposition() {
    return ft;
  }
  getTimeResolution() {
    return Be;
  }
  async computeDuration() {
    const e = await this.getPacket(1 / 0, { metadataOnly: !0 });
    return (e?.timestamp ?? 0) + (e?.duration ?? 0);
  }
  async getFirstTimestamp() {
    return (await this.getFirstPacket({ metadataOnly: !0 }))?.timestamp ?? 0;
  }
  createEncodedPacket(e, t, i) {
    let s;
    return this.allPacketsAreKeyPackets() ? s = "key" : s = e.randomAccessIndicator === 1 ? "key" : "delta", new X(i.metadataOnly ? Ce : e.data, s, e.pts / Be, Math.max(t / Be, 0), e.sequenceNumber, e.data.byteLength);
  }
  async getFirstPacket(e) {
    const t = this.elementaryStream.firstSection;
    p(t);
    const i = kr(t);
    p(i);
    const s = new yr(this.elementaryStream, i), n = new Di(this, s), a = await n.readNext();
    if (!a)
      return null;
    const o = this.createEncodedPacket(a.packet, a.duration, e);
    return this.packetBuffers.set(o, n), this.packetSectionStarts.set(o, a.packet.sectionStartPos), o;
  }
  async getNextPacket(e, t) {
    let i = this.packetBuffers.get(e);
    if (i) {
      const d = await i.readNext();
      if (!d)
        return null;
      this.packetBuffers.delete(e);
      const u = this.createEncodedPacket(d.packet, d.duration, t);
      return this.packetBuffers.set(u, i), this.packetSectionStarts.set(u, d.packet.sectionStartPos), u;
    }
    const s = this.packetSectionStarts.get(e);
    if (s === void 0)
      throw new Error("Packet was not created from this track.");
    const a = await this.elementaryStream.demuxer.readSection(s, !0);
    p(a);
    const o = kr(a);
    p(o);
    const c = new yr(this.elementaryStream, o);
    i = new Di(this, c);
    const l = e.sequenceNumber;
    for (; ; ) {
      const d = await i.readNext();
      if (!d)
        return null;
      if (d.packet.sequenceNumber > l) {
        const u = this.createEncodedPacket(d.packet, d.duration, t);
        return this.packetBuffers.set(u, i), this.packetSectionStarts.set(u, d.packet.sectionStartPos), u;
      }
    }
  }
  async getNextKeyPacket(e, t) {
    let i = e;
    for (; ; ) {
      if (i = await this.getNextPacket(i, t), !i)
        return null;
      if (i.type === "key")
        return i;
    }
  }
  getPacket(e, t) {
    return this.doPacketLookup(e, !1, t);
  }
  getKeyPacket(e, t) {
    return this.doPacketLookup(e, !0, t);
  }
  /**
   * Searches for the packet with the largest timestamp not larger than `timestamp` in the file, using a combination
   * of chunk-based binary search and linear refinement. The reason the coarse search is done in large chunks is to
   * make it more performant for small files and over high-latency readers such as the network.
   */
  async doPacketLookup(e, t, i) {
    const s = Tr(e * Be), n = this.elementaryStream.demuxer, { reader: a, seekChunkSize: o } = n, c = this.elementaryStream.pid, l = async (T, S) => {
      let x = T;
      for (; x < S; ) {
        const P = await n.readPacketHeader(x);
        if (!P)
          return null;
        if (P.pid === c && P.payloadUnitStartIndicator === 1) {
          const _ = await n.readSection(x, !1);
          if (!_)
            return null;
          const C = Tt(_);
          if (C)
            return C;
        }
        x += n.packetStride;
      }
      return null;
    }, d = this.elementaryStream.firstSection;
    p(d);
    const u = Tt(d);
    if (p(u), s < u.pts)
      return null;
    let h;
    const m = this.elementaryStream.referencePesPackets, g = G(m, s, (T) => T.pts), f = g !== -1 ? m[g] : null;
    if (f && s - f.pts < Be / 2)
      h = f.sectionStartPos;
    else {
      let T = 0;
      if (a.fileSize !== null) {
        const S = Math.ceil(a.fileSize / o);
        if (S > 1) {
          let x = 0, P = S - 1;
          for (T = x; x <= P; ) {
            const _ = Math.floor((x + P) / 2), C = xi(_ * o, n.packetStride) + u.sectionStartPos, I = C + o, U = await l(C, I);
            if (!U) {
              P = _ - 1;
              continue;
            }
            U.pts <= s ? (T = _, x = _ + 1) : P = _ - 1;
          }
        }
      }
      h = xi(T * o, n.packetStride) + u.sectionStartPos;
    }
    let w = await l(h, a.fileSize ?? 1 / 0);
    w || (w = u);
    const k = this.getReorderSize(), b = async (T, S) => {
      const x = await n.readSection(T, !0);
      p(x);
      const P = kr(x);
      p(P);
      const _ = new yr(this.elementaryStream, P), C = new Di(this, _);
      for (; !((ee(C.presentationOrderPackets)?.pts ?? -1 / 0) >= s || !await C.readNextPacket()); )
        ;
      const I = Ss(C.presentationOrderPackets, S);
      if (I === -1)
        return null;
      const U = C.presentationOrderPackets[I], D = I === 0 ? 0 : U.pts - C.presentationOrderPackets[I - 1].pts;
      for (; C.decodeOrderPackets[0] !== U; )
        C.decodeOrderPackets.shift();
      C.lastDuration = D;
      const F = await C.readNext();
      p(F);
      const R = this.createEncodedPacket(F.packet, F.duration, i);
      return this.packetBuffers.set(R, C), this.packetSectionStarts.set(R, F.packet.sectionStartPos), R;
    };
    if (!t || this.allPacketsAreKeyPackets()) {
      e: for (; ; ) {
        let T = w.sectionStartPos + n.packetStride;
        for (; ; ) {
          const S = await n.readPacketHeader(T);
          if (!S)
            break e;
          if (S.pid === c && S.payloadUnitStartIndicator === 1) {
            const x = await n.readSection(T, !1);
            if (x) {
              const P = Tt(x);
              if (P) {
                if (P.pts > s)
                  break e;
                w = P, ls(this.elementaryStream, P);
                break;
              }
            }
          }
          T += n.packetStride;
        }
      }
      e: for (let T = 0; T < k; T++) {
        let S = w.sectionStartPos - n.packetStride;
        for (; S >= n.packetOffset; ) {
          const x = await n.readPacketHeader(S);
          if (!x)
            break e;
          if (x.pid === c && x.payloadUnitStartIndicator === 1) {
            const P = await n.readSection(S, !1);
            if (P) {
              const _ = Tt(P);
              if (_) {
                w = _;
                break;
              }
            }
          }
          S -= n.packetStride;
        }
      }
      return b(w.sectionStartPos, (T) => T.pts <= s);
    } else {
      let T = h, S = null;
      for (; ; ) {
        let x = null;
        const P = T <= u.sectionStartPos;
        let _;
        P ? (_ = u, x = u) : _ = await l(T, a.fileSize ?? 1 / 0);
        let C = !1, I = 0;
        e: for (; _ && !(S !== null && _.sectionStartPos >= S || (_.randomAccessIndicator === 1 && _.pts <= s && (x = _), _.pts > s && (C = !0), C && (I++, I >= k))); ) {
          let D = _.sectionStartPos + n.packetStride;
          for (; ; ) {
            const F = await n.readPacketHeader(D);
            if (!F)
              break e;
            if (F.pid === c && F.payloadUnitStartIndicator === 1) {
              const R = await n.readSection(D, !1);
              if (R && (_ = Tt(R), _)) {
                ls(this.elementaryStream, _);
                break;
              }
            }
            D += n.packetStride;
          }
        }
        if (x) {
          let U = x;
          if (I === 0)
            e: for (let F = 0; F < k - 1; F++) {
              let R = U.sectionStartPos - n.packetStride;
              for (; R >= n.packetOffset; ) {
                const q = await n.readPacketHeader(R);
                if (!q)
                  break e;
                if (q.pid === c && q.payloadUnitStartIndicator === 1) {
                  const j = await n.readSection(R, !1);
                  if (j) {
                    const Q = Tt(j);
                    if (Q) {
                      U = Q;
                      break;
                    }
                  }
                }
                R -= n.packetStride;
              }
            }
          const D = await b(U.sectionStartPos, (F) => F.pts <= s && F.randomAccessIndicator === 1);
          return p(D), D;
        }
        p(!P), S = T, T = Math.max(xi(T - u.sectionStartPos - o, n.packetStride) + u.sectionStartPos, u.sectionStartPos);
      }
    }
  }
}
class jl extends pi {
  constructor(e) {
    super(e), this.elementaryStream = e, this.decoderConfig = {
      codec: Cs({
        width: this.elementaryStream.info.width,
        height: this.elementaryStream.info.height,
        codec: this.elementaryStream.info.codec,
        codecDescription: null,
        colorSpace: this.elementaryStream.info.colorSpace,
        avcType: 1,
        avcCodecInfo: this.elementaryStream.info.avcCodecInfo,
        hevcCodecInfo: this.elementaryStream.info.hevcCodecInfo,
        vp9CodecInfo: null,
        av1CodecInfo: null
      }),
      codedWidth: this.elementaryStream.info.width,
      codedHeight: this.elementaryStream.info.height,
      displayAspectWidth: this.elementaryStream.info.squarePixelWidth,
      displayAspectHeight: this.elementaryStream.info.squarePixelHeight,
      colorSpace: this.elementaryStream.info.colorSpace
    };
  }
  getCodec() {
    return this.elementaryStream.info.codec;
  }
  getCodedWidth() {
    return this.elementaryStream.info.width;
  }
  getCodedHeight() {
    return this.elementaryStream.info.height;
  }
  getSquarePixelWidth() {
    return this.elementaryStream.info.squarePixelWidth;
  }
  getSquarePixelHeight() {
    return this.elementaryStream.info.squarePixelHeight;
  }
  getRotation() {
    return 0;
  }
  async getColorSpace() {
    return this.elementaryStream.info.colorSpace;
  }
  async canBeTransparent() {
    return !1;
  }
  async getDecoderConfig() {
    return this.decoderConfig;
  }
  allPacketsAreKeyPackets() {
    return !1;
  }
  getReorderSize() {
    return this.elementaryStream.info.reorderSize;
  }
}
class $l extends pi {
  constructor(e) {
    super(e), this.elementaryStream = e;
  }
  getCodec() {
    return this.elementaryStream.info.codec;
  }
  getNumberOfChannels() {
    return this.elementaryStream.info.numberOfChannels;
  }
  getSampleRate() {
    return this.elementaryStream.info.sampleRate;
  }
  async getDecoderConfig() {
    return {
      codec: _s({
        codec: this.elementaryStream.info.codec,
        codecDescription: null,
        aacCodecInfo: this.elementaryStream.info.aacCodecInfo
      }),
      numberOfChannels: this.elementaryStream.info.numberOfChannels,
      sampleRate: this.elementaryStream.info.sampleRate
    };
  }
  allPacketsAreKeyPackets() {
    return !0;
  }
  getReorderSize() {
    return 1;
  }
}
const ls = (r, e) => {
  const t = r.referencePesPackets, i = G(t, e.sectionStartPos, (s) => s.sectionStartPos);
  if (i >= 0) {
    const s = t[i];
    if (e.pts <= s.pts)
      return !1;
    const n = r.demuxer.minReferencePointByteDistance;
    if (e.sectionStartPos - s.sectionStartPos < n)
      return !1;
    if (i < t.length - 1) {
      const a = t[i + 1];
      if (a.pts < e.pts || a.sectionStartPos - e.sectionStartPos < n)
        return !1;
    }
  }
  return t.splice(i + 1, 0, e), !0;
}, Ql = async (r) => {
  p(!r.suppliedPacket);
  const e = r.elementaryStream;
  if (e.info.type === "video") {
    const t = e.info.codec, i = 1024;
    if (t !== "avc" && t !== "hevc")
      throw new Error("Unhandled.");
    let s = null;
    for (; ; ) {
      let n = r.ensureBuffered(i);
      if (n instanceof Promise && (n = await n), n === 0)
        break;
      const a = r.currentPos, o = r.readBytes(n), c = o.byteLength;
      let l = 0;
      for (; l < c; ) {
        const d = o.indexOf(0, l);
        if (d === -1 || d >= c)
          break;
        l = d;
        const u = a + l;
        if (l + 4 >= c) {
          r.seekTo(u);
          break;
        }
        const h = o[l + 1], m = o[l + 2], g = o[l + 3];
        let f = 0, w = null;
        if (h === 0 && m === 0 && g === 1 ? (f = 4, w = o[l + 4]) : h === 0 && m === 1 && (f = 3, w = g), f === 0) {
          l++;
          continue;
        }
        const k = u;
        if (s === null) {
          s = k, l += f;
          continue;
        }
        if (w !== null) {
          const b = t === "avc" ? Yt(w) : vt(w);
          if (t === "avc" ? b === Ie.AUD : b === ie.AUD_NUT) {
            const S = k - s;
            return r.seekTo(s), r.supplyPacket(S, 0);
          }
        }
        l += f;
      }
      if (n < i)
        break;
    }
    if (s !== null) {
      const n = r.endPos - s;
      return r.seekTo(s), r.supplyPacket(n, 0);
    }
  } else {
    const t = e.info.codec, i = 128;
    for (; ; ) {
      let s = r.ensureBuffered(i);
      s instanceof Promise && (s = await s);
      const n = r.currentPos;
      for (; r.currentPos - n < s; ) {
        const a = r.readU8();
        if (t === "aac") {
          if (a !== 255)
            continue;
          r.skip(-1);
          const o = r.currentPos;
          let c = r.ensureBuffered(ut);
          if (c instanceof Promise && (c = await c), c < ut)
            return;
          const l = r.readBytes(ut), d = Je(ye.tempFromBytes(l));
          if (d) {
            r.seekTo(o);
            let u = r.ensureBuffered(d.frameLength);
            return u instanceof Promise && (u = await u), r.supplyPacket(u, Math.round(Yr * Be / e.info.sampleRate));
          } else
            r.seekTo(o + 1);
        } else if (t === "mp3") {
          if (a !== 255)
            continue;
          r.skip(-1);
          const o = r.currentPos;
          let c = r.ensureBuffered(gr);
          if (c instanceof Promise && (c = await c), c < gr)
            return;
          const l = r.readBytes(gr), d = L(l).getUint32(0), u = di(d, null);
          if (u.header) {
            r.seekTo(o);
            let h = r.ensureBuffered(u.header.totalSize);
            h instanceof Promise && (h = await h);
            const m = u.header.audioSamplesInFrame * Be / e.info.sampleRate;
            return r.supplyPacket(h, Math.round(m));
          } else
            r.seekTo(o + 1);
        } else if (t === "ac3") {
          if (a !== 11)
            continue;
          r.skip(-1);
          const o = r.currentPos;
          let c = r.ensureBuffered(5);
          if (c instanceof Promise && (c = await c), c < 5)
            return;
          const l = r.readBytes(5);
          if (l[0] !== 11 || l[1] !== 119) {
            r.seekTo(o + 1);
            continue;
          }
          const d = l[4] >> 6, u = l[4] & 63;
          if (d === 3 || u > 37) {
            r.seekTo(o + 1);
            continue;
          }
          const h = Xc[3 * u + d];
          p(h !== void 0), r.seekTo(o), c = r.ensureBuffered(h), c instanceof Promise && (c = await c);
          const m = Math.round(Yc * Be / e.info.sampleRate);
          return r.supplyPacket(c, m);
        } else if (t === "eac3") {
          if (a !== 11)
            continue;
          r.skip(-1);
          const o = r.currentPos;
          let c = r.ensureBuffered(5);
          if (c instanceof Promise && (c = await c), c < 5)
            return;
          const l = r.readBytes(5);
          if (l[0] !== 11 || l[1] !== 119) {
            r.seekTo(o + 1);
            continue;
          }
          const u = (((l[2] & 7) << 8 | l[3]) + 1) * 2, m = l[4] >> 6 === 3 ? 3 : l[4] >> 4 & 3, g = Ta[m];
          r.seekTo(o), c = r.ensureBuffered(u), c instanceof Promise && (c = await c);
          const f = g * 256, w = Math.round(f * Be / e.info.sampleRate);
          return r.supplyPacket(c, w);
        } else
          throw new Error("Unhandled.");
      }
      if (s < i)
        break;
    }
  }
};
class yr {
  constructor(e, t) {
    this.currentPos = 0, this.pesPackets = [], this.currentPesPacketIndex = 0, this.currentPesPacketPos = 0, this.endPos = 0, this.nextPts = 0, this.suppliedPacket = null, this.elementaryStream = e, this.pid = e.pid, this.demuxer = e.demuxer, this.startingPesPacket = t;
  }
  clone() {
    const e = new yr(this.elementaryStream, this.startingPesPacket);
    return e.currentPos = this.currentPos, e.pesPackets = [...this.pesPackets], e.currentPesPacketIndex = this.currentPesPacketIndex, e.currentPesPacketPos = this.currentPesPacketPos, e.endPos = this.endPos, e.nextPts = this.nextPts, e;
  }
  ensureBuffered(e) {
    const t = this.endPos - this.currentPos;
    return t >= e ? e : this.bufferData(e - t).then(() => Math.min(this.endPos - this.currentPos, e));
  }
  getCurrentPesPacket() {
    const e = this.pesPackets[this.currentPesPacketIndex];
    return p(e), e;
  }
  async bufferData(e) {
    const t = this.endPos + e;
    for (; this.endPos < t; ) {
      let i;
      if (this.pesPackets.length === 0)
        i = this.startingPesPacket;
      else {
        let s = ee(this.pesPackets).sectionEndPos;
        for (p(s !== null); ; ) {
          const n = await this.demuxer.readPacketHeader(s);
          if (!n)
            return;
          if (n.pid === this.pid) {
            const a = await this.demuxer.readSection(s, !0);
            if (!a)
              return;
            const o = kr(a);
            if (o) {
              i = o;
              break;
            }
          }
          s += this.demuxer.packetStride;
        }
      }
      this.pesPackets.push(i), this.endPos += i.data.byteLength, this.pesPackets.length === 1 && (this.nextPts = i.pts);
    }
  }
  readBytes(e) {
    const t = this.getCurrentPesPacket(), i = this.currentPos - this.currentPesPacketPos, s = i + e;
    if (this.currentPos += e, s <= t.data.byteLength)
      return t.data.subarray(i, s);
    const n = new Uint8Array(e);
    n.set(t.data.subarray(i));
    let a = t.data.byteLength - i;
    for (; ; ) {
      this.advanceCurrentPacket();
      const o = this.getCurrentPesPacket(), c = e - a;
      if (c <= o.data.byteLength) {
        n.set(o.data.subarray(0, c), a);
        break;
      }
      n.set(o.data, a), a += o.data.byteLength;
    }
    return n;
  }
  readU8() {
    let e = this.getCurrentPesPacket();
    const t = this.currentPos - this.currentPesPacketPos;
    return this.currentPos++, t < e.data.byteLength ? e.data[t] : (this.advanceCurrentPacket(), e = this.getCurrentPesPacket(), e.data[0]);
  }
  seekTo(e) {
    if (e !== this.currentPos) {
      if (e < this.currentPos)
        for (; e < this.currentPesPacketPos; ) {
          this.currentPesPacketIndex--;
          const t = this.getCurrentPesPacket();
          this.currentPesPacketPos -= t.data.byteLength, this.nextPts = t.pts;
        }
      else
        for (; ; ) {
          const t = this.getCurrentPesPacket(), i = this.currentPesPacketPos + t.data.byteLength;
          if (e < i)
            break;
          this.currentPesPacketPos += t.data.byteLength, this.currentPesPacketIndex++, this.nextPts = this.getCurrentPesPacket().pts;
        }
      this.currentPos = e;
    }
  }
  skip(e) {
    this.seekTo(this.currentPos + e);
  }
  advanceCurrentPacket() {
    this.currentPesPacketPos += this.getCurrentPesPacket().data.byteLength, this.currentPesPacketIndex++, this.nextPts = this.getCurrentPesPacket().pts;
  }
  /** Supplies the context with a new encoded packet, beginning at the current position. */
  supplyPacket(e, t) {
    const i = this.getCurrentPesPacket();
    ls(this.elementaryStream, i);
    const s = this.nextPts;
    this.nextPts += t;
    const n = i.sectionStartPos, a = n + (this.currentPos - this.currentPesPacketPos), o = this.readBytes(e);
    let c = i.randomAccessIndicator;
    p(this.elementaryStream.firstSection), i.sectionStartPos === this.elementaryStream.firstSection.startPos && (c = 1), this.suppliedPacket = {
      pts: s,
      data: o,
      sequenceNumber: a,
      sectionStartPos: n,
      randomAccessIndicator: c
    }, this.pesPackets.splice(0, this.currentPesPacketIndex), this.currentPesPacketIndex = 0;
  }
}
class Di {
  constructor(e, t) {
    this.decodeOrderPackets = [], this.reorderBuffer = [], this.presentationOrderPackets = [], this.reachedEnd = !1, this.lastDuration = 0, this.backing = e, this.context = t, this.reorderSize = e.getReorderSize(), p(this.reorderSize >= 0);
  }
  async readNext() {
    if (this.decodeOrderPackets.length === 0 && !await this.readNextPacket())
      return null;
    await this.ensureCurrentPacketHasNext();
    const e = this.decodeOrderPackets[0], t = this.presentationOrderPackets.indexOf(e);
    p(t !== -1);
    let i;
    for (t === this.presentationOrderPackets.length - 1 ? i = this.lastDuration : (i = this.presentationOrderPackets[t + 1].pts - e.pts, this.lastDuration = i), this.decodeOrderPackets.shift(); this.presentationOrderPackets.length > 0; ) {
      const s = this.presentationOrderPackets[0];
      if (this.decodeOrderPackets.includes(s))
        break;
      this.presentationOrderPackets.shift();
    }
    return { packet: e, duration: i };
  }
  async readNextPacket() {
    if (this.reachedEnd)
      return !1;
    let e;
    return this.context.suppliedPacket ? e = this.context.suppliedPacket : (await Ql(this.context), e = this.context.suppliedPacket), this.context.suppliedPacket = null, e ? (this.decodeOrderPackets.push(e), this.processPacketThroughReorderBuffer(e), !0) : (this.reachedEnd = !0, this.flushReorderBuffer(), !1);
  }
  async ensureCurrentPacketHasNext() {
    const e = this.decodeOrderPackets[0];
    for (p(e); ; ) {
      const t = this.presentationOrderPackets.indexOf(e);
      if (t !== -1 && t <= this.presentationOrderPackets.length - 2 || !await this.readNextPacket())
        break;
    }
  }
  processPacketThroughReorderBuffer(e) {
    if (this.reorderBuffer.push(e), this.reorderBuffer.length >= this.reorderSize) {
      let t = 0;
      for (let s = 1; s < this.reorderBuffer.length; s++)
        this.reorderBuffer[s].pts < this.reorderBuffer[t].pts && (t = s);
      const i = this.reorderBuffer.splice(t, 1)[0];
      this.presentationOrderPackets.push(i);
    }
  }
  flushReorderBuffer() {
    this.reorderBuffer.sort((e, t) => e.pts - t.pts), this.presentationOrderPackets.push(...this.reorderBuffer), this.reorderBuffer.length = 0;
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Le {
}
class Ws extends Le {
  /** @internal */
  async _getMajorBrand(e) {
    let t = e._reader.requestSlice(0, 12);
    return t instanceof Promise && (t = await t), !t || (t.skip(4), le(t, 4) !== "ftyp") ? null : le(t, 4);
  }
  /** @internal */
  _createDemuxer(e) {
    return new pl(e);
  }
}
class Xa extends Ws {
  /** @internal */
  async _canReadInput(e) {
    const t = await this._getMajorBrand(e);
    return !!t && t !== "qt  ";
  }
  get name() {
    return "MP4";
  }
  get mimeType() {
    return "video/mp4";
  }
}
class Ya extends Ws {
  /** @internal */
  async _canReadInput(e) {
    return await this._getMajorBrand(e) === "qt  ";
  }
  get name() {
    return "QuickTime File Format";
  }
  get mimeType() {
    return "video/quicktime";
  }
}
class Ls extends Le {
  /** @internal */
  async isSupportedEBMLOfDocType(e, t) {
    let i = e._reader.requestSlice(0, Ge);
    if (i instanceof Promise && (i = await i), !i)
      return !1;
    const s = za(i);
    if (s === null || s < 1 || s > 8 || W(i, s) !== y.EBML)
      return !1;
    const a = Da(i);
    if (typeof a != "number")
      return !1;
    let o = e._reader.requestSlice(i.filePos, a);
    if (o instanceof Promise && (o = await o), !o)
      return !1;
    const c = i.filePos;
    for (; o.filePos <= c + a - _e; ) {
      const l = $e(o);
      if (!l)
        break;
      const { id: d, size: u } = l, h = o.filePos;
      if (u === void 0)
        return !1;
      switch (d) {
        case y.EBMLVersion:
          if (W(o, u) !== 1)
            return !1;
          break;
        case y.EBMLReadVersion:
          if (W(o, u) !== 1)
            return !1;
          break;
        case y.DocType:
          if (Lt(o, u) !== t)
            return !1;
          break;
        case y.DocTypeVersion:
          if (W(o, u) > 4)
            return !1;
          break;
      }
      o.filePos = h + u;
    }
    return !0;
  }
  /** @internal */
  _canReadInput(e) {
    return this.isSupportedEBMLOfDocType(e, "matroska");
  }
  /** @internal */
  _createDemuxer(e) {
    return new _l(e);
  }
  get name() {
    return "Matroska";
  }
  get mimeType() {
    return "video/x-matroska";
  }
}
class Za extends Ls {
  /** @internal */
  _canReadInput(e) {
    return this.isSupportedEBMLOfDocType(e, "webm");
  }
  get name() {
    return "WebM";
  }
  get mimeType() {
    return "video/webm";
  }
}
class Ja extends Le {
  /** @internal */
  async _canReadInput(e) {
    let t = 0;
    for (; ; ) {
      let u = e._reader.requestSlice(t, et);
      if (u instanceof Promise && (u = await u), !u)
        break;
      const h = At(u);
      if (!h)
        break;
      t = u.filePos + h.size;
    }
    const i = await cs(e._reader, t, t + 4096);
    if (!i)
      return !1;
    const s = i.header, n = li(s.mpegVersionId, s.channel);
    let a = e._reader.requestSlice(i.startPos + n, 4);
    if (a instanceof Promise && (a = await a), !a)
      return !1;
    const o = A(a);
    if (o === ci || o === Es)
      return !0;
    t = i.startPos + i.header.totalSize;
    const l = await cs(e._reader, t, t + gr);
    if (!l)
      return !1;
    const d = l.header;
    return !(s.channel !== d.channel || s.sampleRate !== d.sampleRate);
  }
  /** @internal */
  _createDemuxer(e) {
    return new vl(e);
  }
  get name() {
    return "MP3";
  }
  get mimeType() {
    return "audio/mpeg";
  }
}
class eo extends Le {
  /** @internal */
  async _canReadInput(e) {
    let t = e._reader.requestSlice(0, 12);
    if (t instanceof Promise && (t = await t), !t)
      return !1;
    const i = le(t, 4);
    return i !== "RIFF" && i !== "RIFX" && i !== "RF64" ? !1 : (t.skip(4), le(t, 4) === "WAVE");
  }
  /** @internal */
  _createDemuxer(e) {
    return new zl(e);
  }
  get name() {
    return "WAVE";
  }
  get mimeType() {
    return "audio/wav";
  }
}
class to extends Le {
  /** @internal */
  async _canReadInput(e) {
    let t = e._reader.requestSlice(0, 4);
    return t instanceof Promise && (t = await t), t ? le(t, 4) === "OggS" : !1;
  }
  /** @internal */
  _createDemuxer(e) {
    return new Rl(e);
  }
  get name() {
    return "Ogg";
  }
  get mimeType() {
    return "application/ogg";
  }
}
class ro extends Le {
  /** @internal */
  async _canReadInput(e) {
    let t = e._reader.requestSlice(0, 4);
    return t instanceof Promise && (t = await t), t ? le(t, 4) === "fLaC" : !1;
  }
  get name() {
    return "FLAC";
  }
  get mimeType() {
    return "audio/flac";
  }
  /** @internal */
  _createDemuxer(e) {
    return new Ll(e);
  }
}
class io extends Le {
  /** @internal */
  async _canReadInput(e) {
    let t = 0;
    for (; ; ) {
      let a = e._reader.requestSlice(t, et);
      if (a instanceof Promise && (a = await a), !a)
        break;
      const o = At(a);
      if (!o)
        break;
      t = a.filePos + o.size;
    }
    let i = e._reader.requestSliceRange(t, Er, ut);
    if (i instanceof Promise && (i = await i), !i)
      return !1;
    const s = Je(i);
    if (!s || (t += s.frameLength, i = e._reader.requestSliceRange(t, Er, ut), i instanceof Promise && (i = await i), !i))
      return !1;
    const n = Je(i);
    return n ? s.objectType === n.objectType && s.samplingFrequencyIndex === n.samplingFrequencyIndex && s.channelConfiguration === n.channelConfiguration : !1;
  }
  /** @internal */
  _createDemuxer(e) {
    return new Ol(e);
  }
  get name() {
    return "ADTS";
  }
  get mimeType() {
    return "audio/aac";
  }
}
class so extends Le {
  /** @internal */
  async _canReadInput(e) {
    const t = me + 16 + 1;
    let i = e._reader.requestSlice(0, t);
    if (i instanceof Promise && (i = await i), !i)
      return !1;
    const s = N(i, t);
    return s[0] === 71 && s[me] === 71 || s[0] === 71 && s[me + 16] === 71 ? !0 : s[4] === 71 && s[4 + me + 4] === 71;
  }
  /** @internal */
  _createDemuxer(e) {
    return new ql(e);
  }
  get name() {
    return "MPEG Transport Stream";
  }
  get mimeType() {
    return "video/MP2T";
  }
}
const no = /* @__PURE__ */ new Xa(), ao = /* @__PURE__ */ new Ya(), oo = /* @__PURE__ */ new Ls(), co = /* @__PURE__ */ new Za(), lo = /* @__PURE__ */ new Ja(), uo = /* @__PURE__ */ new eo(), ho = /* @__PURE__ */ new to(), fo = /* @__PURE__ */ new io(), mo = /* @__PURE__ */ new ro(), po = /* @__PURE__ */ new so(), Kl = [no, ao, oo, co, uo, ho, mo, lo, fo, po];
var Gl = {}, Zr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Gl
});
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Xl = typeof Zr < "u" ? Zr : void 0;
class pt {
  constructor() {
    this._disposed = !1, this._sizePromise = null, this.onread = null;
  }
  /**
   * Resolves with the total size of the file in bytes. This function is memoized, meaning only the first call
   * will retrieve the size.
   *
   * Returns null if the source is unsized.
   */
  async getSizeOrNull() {
    if (this._disposed)
      throw new be();
    return this._sizePromise ??= Promise.resolve(this._retrieveSize());
  }
  /**
   * Resolves with the total size of the file in bytes. This function is memoized, meaning only the first call
   * will retrieve the size.
   *
   * Throws an error if the source is unsized.
   */
  async getSize() {
    if (this._disposed)
      throw new be();
    const e = await this.getSizeOrNull();
    if (e === null)
      throw new Error("Cannot determine the size of an unsized source.");
    return e;
  }
}
class Yl extends pt {
  /**
   * Creates a new {@link BufferSource} backed by the specified `ArrayBuffer`, `SharedArrayBuffer`,
   * or `ArrayBufferView`.
   */
  constructor(e) {
    if (!(e instanceof ArrayBuffer) && !(typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) && !ArrayBuffer.isView(e))
      throw new TypeError("buffer must be an ArrayBuffer, SharedArrayBuffer, or ArrayBufferView.");
    super(), this._onreadCalled = !1, this._bytes = Z(e), this._view = L(e);
  }
  /** @internal */
  _retrieveSize() {
    return this._bytes.byteLength;
  }
  /** @internal */
  _read() {
    return this._onreadCalled || (this.onread?.(0, this._bytes.byteLength), this._onreadCalled = !0), {
      bytes: this._bytes,
      view: this._view,
      offset: 0
    };
  }
  /** @internal */
  _dispose() {
  }
}
class Zl extends pt {
  /**
   * Creates a new {@link BlobSource} backed by the specified
   * [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob).
   */
  constructor(e, t = {}) {
    if (!(e instanceof Blob))
      throw new TypeError("blob must be a Blob.");
    if (!t || typeof t != "object")
      throw new TypeError("options must be an object.");
    if (t.maxCacheSize !== void 0 && (!tr(t.maxCacheSize) || t.maxCacheSize < 0))
      throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    super(), this._readers = /* @__PURE__ */ new WeakMap(), this._blob = e, this._orchestrator = new qs({
      maxCacheSize: t.maxCacheSize ?? 8 * 2 ** 20,
      maxWorkerCount: 4,
      runWorker: this._runWorker.bind(this),
      prefetchProfile: Hs.fileSystem
    });
  }
  /** @internal */
  _retrieveSize() {
    const e = this._blob.size;
    return this._orchestrator.fileSize = e, e;
  }
  /** @internal */
  _read(e, t) {
    return this._orchestrator.read(e, t);
  }
  /** @internal */
  async _runWorker(e) {
    let t = this._readers.get(e);
    for (t === void 0 && ("stream" in this._blob && !pr() ? t = this._blob.slice(e.currentPos).stream().getReader() : t = null, this._readers.set(e, t)); e.currentPos < e.targetPos && !e.aborted; )
      if (t) {
        const { done: i, value: s } = await t.read();
        if (i)
          throw this._orchestrator.forgetWorker(e), new Error("Blob reader stopped unexpectedly before all requested data was read.");
        if (e.aborted)
          break;
        this.onread?.(e.currentPos, e.currentPos + s.length), this._orchestrator.supplyWorkerData(e, s);
      } else {
        const i = await this._blob.slice(e.currentPos, e.targetPos).arrayBuffer();
        if (e.aborted)
          break;
        this.onread?.(e.currentPos, e.currentPos + i.byteLength), this._orchestrator.supplyWorkerData(e, new Uint8Array(i));
      }
    e.running = !1, e.aborted && await t?.cancel();
  }
  /** @internal */
  _dispose() {
    this._orchestrator.dispose();
  }
}
const go = 0.5 * 2 ** 20, Jl = (r, e, t) => {
  if (e instanceof Error && (e.message.includes("Failed to fetch") || e.message.includes("Load failed") || e.message.includes("NetworkError when attempting to fetch resource"))) {
    let s = null;
    try {
      typeof window < "u" && typeof window.location < "u" && (s = new URL(t instanceof Request ? t.url : t, window.location.href).origin);
    } catch {
    }
    if ((typeof navigator < "u" && typeof navigator.onLine == "boolean" ? navigator.onLine : !0) && s !== null && s !== window.location.origin)
      return console.warn("Request will not be retried because a CORS error was suspected due to different origins. You can modify this behavior by providing your own function for the 'getRetryDelay' option."), null;
  }
  return Math.min(2 ** (r - 2), 16);
};
class ed extends pt {
  /**
   * Creates a new {@link UrlSource} backed by the resource at the specified URL.
   *
   * When passing a `Request` instance, note that the `signal` and `headers.Range` options will be overridden by
   * Mediabunny. If you want to cancel ongoing requests, use {@link Input.dispose}.
   */
  constructor(e, t = {}) {
    if (typeof e != "string" && !(e instanceof URL) && !(typeof Request < "u" && e instanceof Request))
      throw new TypeError("url must be a string, URL or Request.");
    if (!t || typeof t != "object")
      throw new TypeError("options must be an object.");
    if (t.requestInit !== void 0 && (!t.requestInit || typeof t.requestInit != "object"))
      throw new TypeError("options.requestInit, when provided, must be an object.");
    if (t.getRetryDelay !== void 0 && typeof t.getRetryDelay != "function")
      throw new TypeError("options.getRetryDelay, when provided, must be a function.");
    if (t.maxCacheSize !== void 0 && (!tr(t.maxCacheSize) || t.maxCacheSize < 0))
      throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    if (t.parallelism !== void 0 && (!Number.isInteger(t.parallelism) || t.parallelism < 1))
      throw new TypeError("options.parallelism, when provided, must be a positive number.");
    if (t.fetchFn !== void 0 && typeof t.fetchFn != "function")
      throw new TypeError("options.fetchFn, when provided, must be a function.");
    super(), this._existingResponses = /* @__PURE__ */ new WeakMap(), this._url = e, this._options = t, this._getRetryDelay = t.getRetryDelay ?? Jl;
    const i = 2;
    this._orchestrator = new qs({
      maxCacheSize: t.maxCacheSize ?? 64 * 2 ** 20,
      maxWorkerCount: t.parallelism ?? i,
      runWorker: this._runWorker.bind(this),
      prefetchProfile: Hs.network
    });
  }
  /** @internal */
  async _retrieveSize() {
    const e = new AbortController(), t = await gn(this._options.fetchFn ?? fetch, this._url, mn(this._options.requestInit ?? {}, {
      headers: {
        // We could also send a non-range request to request the same bytes (all of them), but doing it like
        // this is an easy way to check if the server supports range requests in the first place
        Range: "bytes=0-"
      },
      signal: e.signal
    }), this._getRetryDelay, () => this._disposed);
    if (!t.ok)
      throw new Error(`Error fetching ${String(this._url)}: ${t.status} ${t.statusText}`);
    let i, s;
    if (t.status === 206)
      s = this._getTotalLengthFromRangeResponse(t), i = this._orchestrator.createWorker(0, Math.min(s, go));
    else {
      const n = t.headers.get("Content-Length");
      if (n)
        s = Number(n), i = this._orchestrator.createWorker(0, s), this._orchestrator.options.maxCacheSize = 1 / 0, console.warn("HTTP server did not respond with 206 Partial Content, meaning the entire remote resource now has to be downloaded. For efficient media file streaming across a network, please make sure your server supports range requests.");
      else
        throw new Error(`HTTP response (status ${t.status}) must surface Content-Length header.`);
    }
    return this._orchestrator.fileSize = s, this._existingResponses.set(i, { response: t, abortController: e }), this._orchestrator.runWorker(i), s;
  }
  /** @internal */
  _read(e, t) {
    return this._orchestrator.read(e, t);
  }
  /** @internal */
  async _runWorker(e) {
    for (; ; ) {
      const t = this._existingResponses.get(e);
      this._existingResponses.delete(e);
      let i = t?.abortController, s = t?.response;
      if (i || (i = new AbortController(), s = await gn(this._options.fetchFn ?? fetch, this._url, mn(this._options.requestInit ?? {}, {
        headers: {
          Range: `bytes=${e.currentPos}-`
        },
        signal: i.signal
      }), this._getRetryDelay, () => this._disposed)), p(s), !s.ok)
        throw new Error(`Error fetching ${String(this._url)}: ${s.status} ${s.statusText}`);
      if (e.currentPos > 0 && s.status !== 206)
        throw new Error("HTTP server did not respond with 206 Partial Content to a range request. To enable efficient media file streaming across a network, please make sure your server supports range requests.");
      if (!s.body)
        throw new Error("Missing HTTP response body stream. The used fetch function must provide the response body as a ReadableStream.");
      const n = s.body.getReader();
      for (; ; ) {
        if (e.currentPos >= e.targetPos || e.aborted) {
          i.abort(), e.running = !1;
          return;
        }
        let a;
        try {
          a = await n.read();
        } catch (l) {
          if (this._disposed)
            throw l;
          const d = this._getRetryDelay(1, l, this._url);
          if (d !== null) {
            console.error("Error while reading response stream. Attempting to resume.", l), await new Promise((u) => setTimeout(u, 1e3 * d));
            break;
          } else
            throw l;
        }
        if (e.aborted)
          continue;
        const { done: o, value: c } = a;
        if (o) {
          if (e.currentPos >= e.targetPos) {
            this._orchestrator.forgetWorker(e), e.running = !1;
            return;
          }
          break;
        }
        this.onread?.(e.currentPos, e.currentPos + c.length), this._orchestrator.supplyWorkerData(e, c);
      }
    }
  }
  /** @internal */
  _getTotalLengthFromRangeResponse(e) {
    const t = e.headers.get("Content-Range");
    if (t) {
      const s = /\/(\d+)/.exec(t);
      if (s)
        return Number(s[1]);
    }
    const i = e.headers.get("Content-Length");
    if (i)
      return Number(i);
    throw new Error("Partial HTTP response (status 206) must surface either Content-Range or Content-Length header.");
  }
  /** @internal */
  _dispose() {
    this._orchestrator.dispose();
  }
}
class td extends pt {
  /** Creates a new {@link FilePathSource} backed by the file at the specified file path. */
  constructor(e, t = {}) {
    if (typeof e != "string")
      throw new TypeError("filePath must be a string.");
    if (!t || typeof t != "object")
      throw new TypeError("options must be an object.");
    if (t.maxCacheSize !== void 0 && (!tr(t.maxCacheSize) || t.maxCacheSize < 0))
      throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    super(), this._fileHandle = null, this._streamSource = new wo({
      getSize: async () => (this._fileHandle = await Xl.fs.open(e, "r"), (await this._fileHandle.stat()).size),
      read: async (i, s) => {
        p(this._fileHandle);
        const n = new Uint8Array(s - i);
        return await this._fileHandle.read(n, 0, s - i, i), n;
      },
      maxCacheSize: t.maxCacheSize,
      prefetchProfile: "fileSystem"
    });
  }
  /** @internal */
  _read(e, t) {
    return this._streamSource._read(e, t);
  }
  /** @internal */
  _retrieveSize() {
    return this._streamSource._retrieveSize();
  }
  /** @internal */
  _dispose() {
    this._streamSource._dispose(), this._fileHandle?.close(), this._fileHandle = null;
  }
}
class wo extends pt {
  /** Creates a new {@link StreamSource} whose behavior is specified by `options`.  */
  constructor(e) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (typeof e.getSize != "function")
      throw new TypeError("options.getSize must be a function.");
    if (typeof e.read != "function")
      throw new TypeError("options.read must be a function.");
    if (e.dispose !== void 0 && typeof e.dispose != "function")
      throw new TypeError("options.dispose, when provided, must be a function.");
    if (e.maxCacheSize !== void 0 && (!tr(e.maxCacheSize) || e.maxCacheSize < 0))
      throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    if (e.prefetchProfile && !["none", "fileSystem", "network"].includes(e.prefetchProfile))
      throw new TypeError("options.prefetchProfile, when provided, must be one of 'none', 'fileSystem' or 'network'.");
    super(), this._options = e, this._orchestrator = new qs({
      maxCacheSize: e.maxCacheSize ?? 8 * 2 ** 20,
      maxWorkerCount: 2,
      // Fixed for now, *should* be fine
      prefetchProfile: Hs[e.prefetchProfile ?? "none"],
      runWorker: this._runWorker.bind(this)
    });
  }
  /** @internal */
  _retrieveSize() {
    const e = this._options.getSize();
    if (e instanceof Promise)
      return e.then((t) => {
        if (!Number.isInteger(t) || t < 0)
          throw new TypeError("options.getSize must return or resolve to a non-negative integer.");
        return this._orchestrator.fileSize = t, t;
      });
    if (!Number.isInteger(e) || e < 0)
      throw new TypeError("options.getSize must return or resolve to a non-negative integer.");
    return this._orchestrator.fileSize = e, e;
  }
  /** @internal */
  _read(e, t) {
    return this._orchestrator.read(e, t);
  }
  /** @internal */
  async _runWorker(e) {
    for (; e.currentPos < e.targetPos && !e.aborted; ) {
      const t = e.currentPos, i = e.targetPos;
      let s = this._options.read(e.currentPos, i);
      if (s instanceof Promise && (s = await s), e.aborted)
        break;
      if (s instanceof Uint8Array) {
        if (s = Z(s), s.length !== i - e.currentPos)
          throw new Error(`options.read returned a Uint8Array with unexpected length: Requested ${i - e.currentPos} bytes, but got ${s.length}.`);
        this.onread?.(e.currentPos, e.currentPos + s.length), this._orchestrator.supplyWorkerData(e, s);
      } else if (s instanceof ReadableStream) {
        const n = s.getReader();
        for (; e.currentPos < i && !e.aborted; ) {
          const { done: a, value: o } = await n.read();
          if (a) {
            if (e.currentPos < i)
              throw new Error(`ReadableStream returned by options.read ended before supplying enough data. Requested ${i - t} bytes, but got ${e.currentPos - t}`);
            break;
          }
          if (!(o instanceof Uint8Array))
            throw new TypeError("ReadableStream returned by options.read must yield Uint8Array chunks.");
          if (e.aborted)
            break;
          const c = Z(o);
          this.onread?.(e.currentPos, e.currentPos + c.length), this._orchestrator.supplyWorkerData(e, c);
        }
      } else
        throw new TypeError("options.read must return or resolve to a Uint8Array or a ReadableStream.");
    }
    e.running = !1;
  }
  /** @internal */
  _dispose() {
    this._orchestrator.dispose(), this._options.dispose?.();
  }
}
class rd extends pt {
  /** Creates a new {@link ReadableStreamSource} backed by the specified `ReadableStream<Uint8Array>`. */
  constructor(e, t = {}) {
    if (!(e instanceof ReadableStream))
      throw new TypeError("stream must be a ReadableStream.");
    if (!t || typeof t != "object")
      throw new TypeError("options must be an object.");
    if (t.maxCacheSize !== void 0 && (!tr(t.maxCacheSize) || t.maxCacheSize < 0))
      throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    super(), this._reader = null, this._cache = [], this._pendingSlices = [], this._currentIndex = 0, this._targetIndex = 0, this._maxRequestedIndex = 0, this._endIndex = null, this._pulling = !1, this._stream = e, this._maxCacheSize = t.maxCacheSize ?? 16 * 2 ** 20;
  }
  /** @internal */
  _retrieveSize() {
    return this._endIndex;
  }
  /** @internal */
  _read(e, t) {
    if (this._endIndex !== null && t > this._endIndex)
      return null;
    this._maxRequestedIndex = Math.max(this._maxRequestedIndex, t);
    const i = G(this._cache, e, (d) => d.start), s = i !== -1 ? this._cache[i] : null;
    if (s && s.start <= e && t <= s.end)
      return {
        bytes: s.bytes,
        view: s.view,
        offset: s.start
      };
    let n = e;
    const a = new Uint8Array(t - e);
    if (i !== -1)
      for (let d = i; d < this._cache.length; d++) {
        const u = this._cache[d];
        if (u.start >= t)
          break;
        const h = Math.max(e, u.start);
        h > n && this._throwDueToCacheMiss();
        const m = Math.min(t, u.end);
        h < m && (a.set(u.bytes.subarray(h - u.start, m - u.start), h - e), n = m);
      }
    if (n === t)
      return {
        bytes: a,
        view: L(a),
        offset: e
      };
    this._currentIndex > n && this._throwDueToCacheMiss();
    const { promise: o, resolve: c, reject: l } = re();
    return this._pendingSlices.push({
      start: e,
      end: t,
      bytes: a,
      resolve: c,
      reject: l
    }), this._targetIndex = Math.max(this._targetIndex, t), this._pulling || (this._pulling = !0, this._pull().catch((d) => {
      if (this._pulling = !1, this._pendingSlices.length > 0)
        this._pendingSlices.forEach((u) => u.reject(d)), this._pendingSlices.length = 0;
      else
        throw d;
    })), o;
  }
  /** @internal */
  _throwDueToCacheMiss() {
    throw new Error("Read is before the cached region. With ReadableStreamSource, you must access the data more sequentially or increase the size of its cache.");
  }
  /** @internal */
  async _pull() {
    for (this._reader ??= this._stream.getReader(); this._currentIndex < this._targetIndex && !this._disposed; ) {
      const { done: e, value: t } = await this._reader.read();
      if (e) {
        for (const n of this._pendingSlices)
          n.resolve(null);
        this._pendingSlices.length = 0, this._endIndex = this._currentIndex;
        break;
      }
      const i = this._currentIndex, s = this._currentIndex + t.byteLength;
      for (let n = 0; n < this._pendingSlices.length; n++) {
        const a = this._pendingSlices[n], o = Math.max(i, a.start), c = Math.min(s, a.end);
        o < c && (a.bytes.set(t.subarray(o - i, c - i), o - a.start), c === a.end && (a.resolve({
          bytes: a.bytes,
          view: L(a.bytes),
          offset: a.start
        }), this._pendingSlices.splice(n, 1), n--));
      }
      for (this._cache.push({
        start: i,
        end: s,
        bytes: t,
        view: L(t),
        age: 0
        // Unused
      }); this._cache.length > 0; ) {
        const n = this._cache[0];
        if (this._maxRequestedIndex - n.end <= this._maxCacheSize)
          break;
        this._cache.shift();
      }
      this._currentIndex += t.byteLength;
    }
    this._pulling = !1;
  }
  /** @internal */
  _dispose() {
    this._pendingSlices.length = 0, this._cache.length = 0;
  }
}
const Hs = {
  none: (r, e) => ({ start: r, end: e }),
  fileSystem: (r, e) => (r = Math.floor((r - 65536) / 65536) * 65536, e = Math.ceil((e + 65536) / 65536) * 65536, { start: r, end: e }),
  network: (r, e, t) => {
    r = Math.max(0, Math.floor((r - 65536) / 65536) * 65536);
    for (const s of t) {
      const a = Math.max((s.startPos + s.targetPos) / 2, s.targetPos - 8388608);
      if (Gi(r, e, a, s.targetPos)) {
        const o = s.targetPos - s.startPos, c = Math.ceil((o + 1) / 8388608) * 8388608, l = 2 ** Math.ceil(Math.log2(o + 1)), d = Math.min(l, c);
        e = Math.max(e, s.startPos + d);
      }
    }
    return e = Math.max(e, r + go), {
      start: r,
      end: e
    };
  }
};
class qs {
  constructor(e) {
    this.options = e, this.fileSize = null, this.nextAge = 0, this.workers = [], this.cache = [], this.currentCacheSize = 0, this.disposed = !1;
  }
  read(e, t) {
    p(this.fileSize !== null);
    const i = this.options.prefetchProfile(e, t, this.workers), s = Math.max(i.start, 0), n = Math.min(i.end, this.fileSize);
    p(s <= e && t <= n);
    let a = null;
    const o = G(this.cache, e, (b) => b.start), c = o !== -1 ? this.cache[o] : null;
    c && c.start <= e && t <= c.end && (c.age = this.nextAge++, a = {
      bytes: c.bytes,
      view: c.view,
      offset: c.start
    });
    const l = G(this.cache, s, (b) => b.start), d = a ? null : new Uint8Array(t - e);
    let u = 0, h = s;
    const m = [];
    if (l !== -1) {
      for (let b = l; b < this.cache.length; b++) {
        const T = this.cache[b];
        if (T.start >= n)
          break;
        if (T.end <= s)
          continue;
        const S = Math.max(s, T.start), x = Math.min(n, T.end);
        if (p(S <= x), h < S && m.push({ start: h, end: S }), h = x, d) {
          const P = Math.max(e, T.start), _ = Math.min(t, T.end);
          if (P < _) {
            const C = P - e;
            d.set(T.bytes.subarray(P - T.start, _ - T.start), C), C === u && (u = _ - e);
          }
        }
        T.age = this.nextAge++;
      }
      h < n && m.push({ start: h, end: n });
    } else
      m.push({ start: s, end: n });
    if (d && u >= d.length && (a = {
      bytes: d,
      view: L(d),
      offset: e
    }), m.length === 0)
      return p(a), a;
    const { promise: g, resolve: f, reject: w } = re(), k = [];
    for (const b of m) {
      const T = Math.max(e, b.start), S = Math.min(t, b.end);
      T === b.start && S === b.end ? k.push(b) : T < S && k.push({ start: T, end: S });
    }
    for (const b of m) {
      const T = d && {
        start: e,
        bytes: d,
        holes: k,
        resolve: f,
        reject: w
      };
      let S = !1;
      for (const x of this.workers)
        if (Gi(b.start - 131072, b.start, x.currentPos, x.targetPos)) {
          x.targetPos = Math.max(x.targetPos, b.end), S = !0, T && !x.pendingSlices.includes(T) && x.pendingSlices.push(T), x.running || this.runWorker(x);
          break;
        }
      if (!S) {
        const x = this.createWorker(b.start, b.end);
        T && (x.pendingSlices = [T]), this.runWorker(x);
      }
    }
    return a || (p(d), a = g.then((b) => ({
      bytes: b,
      view: L(b),
      offset: e
    }))), a;
  }
  createWorker(e, t) {
    const i = {
      startPos: e,
      currentPos: e,
      targetPos: t,
      running: !1,
      // Due to async shenanigans, it can happen that workers are started after disposal. In this case, instead of
      // simply not creating the worker, we allow it to run but immediately label it as aborted, so it can then
      // shut itself down.
      aborted: this.disposed,
      pendingSlices: [],
      age: this.nextAge++
    };
    for (this.workers.push(i); this.workers.length > this.options.maxWorkerCount; ) {
      let s = 0, n = this.workers[0];
      for (let a = 1; a < this.workers.length; a++) {
        const o = this.workers[a];
        o.age < n.age && (s = a, n = o);
      }
      if (n.running && n.pendingSlices.length > 0)
        break;
      n.aborted = !0, this.workers.splice(s, 1);
    }
    return i;
  }
  runWorker(e) {
    p(!e.running), p(e.currentPos < e.targetPos), e.running = !0, e.age = this.nextAge++, this.options.runWorker(e).catch((t) => {
      if (e.running = !1, e.pendingSlices.length > 0)
        e.pendingSlices.forEach((i) => i.reject(t)), e.pendingSlices.length = 0;
      else
        throw t;
    });
  }
  /** Called by a worker when it has read some data. */
  supplyWorkerData(e, t) {
    p(!e.aborted);
    const i = e.currentPos, s = i + t.length;
    this.insertIntoCache({
      start: i,
      end: s,
      bytes: t,
      view: L(t),
      age: this.nextAge++
    }), e.currentPos += t.length, e.targetPos = Math.max(e.targetPos, e.currentPos);
    for (let n = 0; n < e.pendingSlices.length; n++) {
      const a = e.pendingSlices[n], o = Math.max(i, a.start), c = Math.min(s, a.start + a.bytes.length);
      o < c && a.bytes.set(t.subarray(o - i, c - i), o - a.start);
      for (let l = 0; l < a.holes.length; l++) {
        const d = a.holes[l];
        i <= d.start && s > d.start && (d.start = s), d.end <= d.start && (a.holes.splice(l, 1), l--);
      }
      a.holes.length === 0 && (a.resolve(a.bytes), e.pendingSlices.splice(n, 1), n--);
    }
    for (let n = 0; n < this.workers.length; n++) {
      const a = this.workers[n];
      e === a || a.running || Gi(i, s, a.currentPos, a.targetPos) && (this.workers.splice(n, 1), n--);
    }
  }
  forgetWorker(e) {
    const t = this.workers.indexOf(e);
    p(t !== -1), this.workers.splice(t, 1);
  }
  insertIntoCache(e) {
    if (this.options.maxCacheSize === 0)
      return;
    let t = G(this.cache, e.start, (i) => i.start) + 1;
    if (t > 0) {
      const i = this.cache[t - 1];
      if (i.end >= e.end)
        return;
      if (i.end > e.start) {
        const s = new Uint8Array(e.end - i.start);
        s.set(i.bytes, 0), s.set(e.bytes, e.start - i.start), this.currentCacheSize += e.end - i.end, i.bytes = s, i.view = L(s), i.end = e.end, t--, e = i;
      } else
        this.cache.splice(t, 0, e), this.currentCacheSize += e.bytes.length;
    } else
      this.cache.splice(t, 0, e), this.currentCacheSize += e.bytes.length;
    for (let i = t + 1; i < this.cache.length; i++) {
      const s = this.cache[i];
      if (e.end <= s.start)
        break;
      if (e.end >= s.end) {
        this.cache.splice(i, 1), this.currentCacheSize -= s.bytes.length, i--;
        continue;
      }
      const n = new Uint8Array(s.end - e.start);
      n.set(e.bytes, 0), n.set(s.bytes, s.start - e.start), this.currentCacheSize -= e.end - s.start, e.bytes = n, e.view = L(n), e.end = s.end, this.cache.splice(i, 1);
      break;
    }
    for (; this.currentCacheSize > this.options.maxCacheSize; ) {
      let i = 0, s = this.cache[0];
      for (let n = 1; n < this.cache.length; n++) {
        const a = this.cache[n];
        a.age < s.age && (i = n, s = a);
      }
      if (this.currentCacheSize - s.bytes.length <= this.options.maxCacheSize)
        break;
      this.cache.splice(i, 1), this.currentCacheSize -= s.bytes.length;
    }
  }
  dispose() {
    for (const e of this.workers)
      e.aborted = !0;
    this.workers.length = 0, this.cache.length = 0, this.disposed = !0;
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
Jn();
class bo {
  /** True if the input has been disposed. */
  get disposed() {
    return this._disposed;
  }
  /**
   * Creates a new input file from the specified options. No reading operations will be performed until methods are
   * called on this instance.
   */
  constructor(e) {
    if (this._demuxerPromise = null, this._format = null, this._disposed = !1, !e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (!Array.isArray(e.formats) || e.formats.some((t) => !(t instanceof Le)))
      throw new TypeError("options.formats must be an array of InputFormat.");
    if (!(e.source instanceof pt))
      throw new TypeError("options.source must be a Source.");
    if (e.source._disposed)
      throw new Error("options.source must not be disposed.");
    this._formats = e.formats, this._source = e.source, this._reader = new id(e.source);
  }
  /** @internal */
  _getDemuxer() {
    return this._demuxerPromise ??= (async () => {
      this._reader.fileSize = await this._source.getSizeOrNull();
      for (const e of this._formats)
        if (await e._canReadInput(this))
          return this._format = e, e._createDemuxer(this);
      throw new Error("Input has an unsupported or unrecognizable format.");
    })();
  }
  /**
   * Returns the source from which this input file reads its data. This is the same source that was passed to the
   * constructor.
   */
  get source() {
    return this._source;
  }
  /**
   * Returns the format of the input file. You can compare this result directly to the {@link InputFormat} singletons
   * or use `instanceof` checks for subset-aware logic (for example, `format instanceof MatroskaInputFormat` is true
   * for both MKV and WebM).
   */
  async getFormat() {
    return await this._getDemuxer(), p(this._format), this._format;
  }
  /**
   * Computes the duration of the input file, in seconds. More precisely, returns the largest end timestamp among
   * all tracks.
   */
  async computeDuration() {
    return (await this._getDemuxer()).computeDuration();
  }
  /**
   * Returns the timestamp at which the input file starts. More precisely, returns the smallest starting timestamp
   * among all tracks.
   */
  async getFirstTimestamp() {
    const e = await this.getTracks();
    if (e.length === 0)
      return 0;
    const t = await Promise.all(e.map((i) => i.getFirstTimestamp()));
    return Math.min(...t);
  }
  /** Returns the list of all tracks of this input file. */
  async getTracks() {
    return (await this._getDemuxer()).getTracks();
  }
  /** Returns the list of all video tracks of this input file. */
  async getVideoTracks() {
    return (await this.getTracks()).filter((t) => t.isVideoTrack());
  }
  /** Returns the list of all audio tracks of this input file. */
  async getAudioTracks() {
    return (await this.getTracks()).filter((t) => t.isAudioTrack());
  }
  /** Returns the primary video track of this input file, or null if there are no video tracks. */
  async getPrimaryVideoTrack() {
    return (await this.getTracks()).find((t) => t.isVideoTrack()) ?? null;
  }
  /** Returns the primary audio track of this input file, or null if there are no audio tracks. */
  async getPrimaryAudioTrack() {
    return (await this.getTracks()).find((t) => t.isAudioTrack()) ?? null;
  }
  /** Returns the full MIME type of this input file, including track codecs. */
  async getMimeType() {
    return (await this._getDemuxer()).getMimeType();
  }
  /**
   * Returns descriptive metadata tags about the media file, such as title, author, date, cover art, or other
   * attached files.
   */
  async getMetadataTags() {
    return (await this._getDemuxer()).getMetadataTags();
  }
  /**
   * Disposes this input and frees connected resources. When an input is disposed, ongoing read operations will be
   * canceled, all future read operations will fail, any open decoders will be closed, and all ongoing media sink
   * operations will be canceled. Disallowed and canceled operations will throw an {@link InputDisposedError}.
   *
   * You are expected not to use an input after disposing it. While some operations may still work, it is not
   * specified and may change in any future update.
   */
  dispose() {
    this._disposed || (this._disposed = !0, this._source._disposed = !0, this._source._dispose());
  }
  /**
   * Calls `.dispose()` on the input, implementing the `Disposable` interface for use with
   * JavaScript Explicit Resource Management features.
   */
  [Symbol.dispose]() {
    this.dispose();
  }
}
class be extends Error {
  /** Creates a new {@link InputDisposedError}. */
  constructor(e = "Input has been disposed.") {
    super(e), this.name = "InputDisposedError";
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class id {
  constructor(e) {
    this.source = e;
  }
  requestSlice(e, t) {
    if (this.source._disposed)
      throw new be();
    if (e < 0 || this.fileSize !== null && e + t > this.fileSize)
      return null;
    const i = e + t, s = this.source._read(e, i);
    return s instanceof Promise ? s.then((n) => n ? new ye(n.bytes, n.view, n.offset, e, i) : null) : s ? new ye(s.bytes, s.view, s.offset, e, i) : null;
  }
  requestSliceRange(e, t, i) {
    if (this.source._disposed)
      throw new be();
    if (e < 0)
      return null;
    if (this.fileSize !== null)
      return this.requestSlice(e, ce(this.fileSize - e, t, i));
    {
      const s = this.requestSlice(e, i), n = (a) => {
        if (a)
          return a;
        const o = (l) => (p(l !== null), this.requestSlice(e, ce(l - e, t, i))), c = this.source._retrieveSize();
        return c instanceof Promise ? c.then(o) : o(c);
      };
      return s instanceof Promise ? s.then(n) : n(s);
    }
  }
}
class ye {
  constructor(e, t, i, s, n) {
    this.bytes = e, this.view = t, this.offset = i, this.start = s, this.end = n, this.bufferPos = s - i;
  }
  static tempFromBytes(e) {
    return new ye(e, L(e), 0, 0, e.length);
  }
  get length() {
    return this.end - this.start;
  }
  get filePos() {
    return this.offset + this.bufferPos;
  }
  set filePos(e) {
    this.bufferPos = e - this.offset;
  }
  /** The number of bytes left from the current pos to the end of the slice. */
  get remainingLength() {
    return Math.max(this.end - this.filePos, 0);
  }
  skip(e) {
    this.bufferPos += e;
  }
  /** Creates a new subslice of this slice whose byte range must be contained within this slice. */
  slice(e, t = this.end - e) {
    if (e < this.start || e + t > this.end)
      throw new RangeError("Slicing outside of original slice.");
    return new ye(this.bytes, this.view, this.offset, e, e + t);
  }
}
const Te = (r, e) => {
  if (r.filePos < r.start || r.filePos + e > r.end)
    throw new RangeError(`Tried reading [${r.filePos}, ${r.filePos + e}), but slice is [${r.start}, ${r.end}). This is likely an internal error, please report it alongside the file that caused it.`);
}, N = (r, e) => {
  Te(r, e);
  const t = r.bytes.subarray(r.bufferPos, r.bufferPos + e);
  return r.bufferPos += e, t;
}, M = (r) => (Te(r, 1), r.view.getUint8(r.bufferPos++)), ur = (r, e) => {
  Te(r, 2);
  const t = r.view.getUint16(r.bufferPos, e);
  return r.bufferPos += 2, t;
}, oe = (r) => {
  Te(r, 2);
  const e = r.view.getUint16(r.bufferPos, !1);
  return r.bufferPos += 2, e;
}, Ht = (r) => {
  Te(r, 3);
  const e = ii(r.view, r.bufferPos, !1);
  return r.bufferPos += 3, e;
}, ds = (r) => {
  Te(r, 2);
  const e = r.view.getInt16(r.bufferPos, !1);
  return r.bufferPos += 2, e;
}, dt = (r, e) => {
  Te(r, 4);
  const t = r.view.getUint32(r.bufferPos, e);
  return r.bufferPos += 4, t;
}, A = (r) => {
  Te(r, 4);
  const e = r.view.getUint32(r.bufferPos, !1);
  return r.bufferPos += 4, e;
}, jt = (r) => {
  Te(r, 4);
  const e = r.view.getUint32(r.bufferPos, !0);
  return r.bufferPos += 4, e;
}, _t = (r) => {
  Te(r, 4);
  const e = r.view.getInt32(r.bufferPos, !1);
  return r.bufferPos += 4, e;
}, sd = (r) => {
  Te(r, 4);
  const e = r.view.getInt32(r.bufferPos, !0);
  return r.bufferPos += 4, e;
}, zn = (r, e) => {
  let t, i;
  return e ? (t = dt(r, !0), i = dt(r, !0)) : (i = dt(r, !1), t = dt(r, !1)), i * 4294967296 + t;
}, Fe = (r) => {
  const e = A(r), t = A(r);
  return e * 4294967296 + t;
}, nd = (r) => {
  const e = _t(r), t = A(r);
  return e * 4294967296 + t;
}, ad = (r) => {
  const e = jt(r);
  return sd(r) * 4294967296 + e;
}, od = (r) => {
  Te(r, 4);
  const e = r.view.getFloat32(r.bufferPos, !1);
  return r.bufferPos += 4, e;
}, ko = (r) => {
  Te(r, 8);
  const e = r.view.getFloat64(r.bufferPos, !1);
  return r.bufferPos += 8, e;
}, le = (r, e) => {
  Te(r, e);
  let t = "";
  for (let i = 0; i < e; i++)
    t += String.fromCharCode(r.bytes[r.bufferPos++]);
  return t;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
var $t;
(function(r) {
  r[r.Unsynchronisation = 128] = "Unsynchronisation", r[r.ExtendedHeader = 64] = "ExtendedHeader", r[r.ExperimentalIndicator = 32] = "ExperimentalIndicator", r[r.Footer = 16] = "Footer";
})($t || ($t = {}));
var pe;
(function(r) {
  r[r.ISO_8859_1 = 0] = "ISO_8859_1", r[r.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", r[r.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", r[r.UTF_8 = 3] = "UTF_8";
})(pe || (pe = {}));
const Vr = 128, et = 10, Qt = [
  "Blues",
  "Classic rock",
  "Country",
  "Dance",
  "Disco",
  "Funk",
  "Grunge",
  "Hip-hop",
  "Jazz",
  "Metal",
  "New age",
  "Oldies",
  "Other",
  "Pop",
  "Rhythm and blues",
  "Rap",
  "Reggae",
  "Rock",
  "Techno",
  "Industrial",
  "Alternative",
  "Ska",
  "Death metal",
  "Pranks",
  "Soundtrack",
  "Euro-techno",
  "Ambient",
  "Trip-hop",
  "Vocal",
  "Jazz & funk",
  "Fusion",
  "Trance",
  "Classical",
  "Instrumental",
  "Acid",
  "House",
  "Game",
  "Sound clip",
  "Gospel",
  "Noise",
  "Alternative rock",
  "Bass",
  "Soul",
  "Punk",
  "Space",
  "Meditative",
  "Instrumental pop",
  "Instrumental rock",
  "Ethnic",
  "Gothic",
  "Darkwave",
  "Techno-industrial",
  "Electronic",
  "Pop-folk",
  "Eurodance",
  "Dream",
  "Southern rock",
  "Comedy",
  "Cult",
  "Gangsta",
  "Top 40",
  "Christian rap",
  "Pop/funk",
  "Jungle music",
  "Native US",
  "Cabaret",
  "New wave",
  "Psychedelic",
  "Rave",
  "Showtunes",
  "Trailer",
  "Lo-fi",
  "Tribal",
  "Acid punk",
  "Acid jazz",
  "Polka",
  "Retro",
  "Musical",
  "Rock 'n' roll",
  "Hard rock",
  "Folk",
  "Folk rock",
  "National folk",
  "Swing",
  "Fast fusion",
  "Bebop",
  "Latin",
  "Revival",
  "Celtic",
  "Bluegrass",
  "Avantgarde",
  "Gothic rock",
  "Progressive rock",
  "Psychedelic rock",
  "Symphonic rock",
  "Slow rock",
  "Big band",
  "Chorus",
  "Easy listening",
  "Acoustic",
  "Humour",
  "Speech",
  "Chanson",
  "Opera",
  "Chamber music",
  "Sonata",
  "Symphony",
  "Booty bass",
  "Primus",
  "Porn groove",
  "Satire",
  "Slow jam",
  "Club",
  "Tango",
  "Samba",
  "Folklore",
  "Ballad",
  "Power ballad",
  "Rhythmic Soul",
  "Freestyle",
  "Duet",
  "Punk rock",
  "Drum solo",
  "A cappella",
  "Euro-house",
  "Dance hall",
  "Goa music",
  "Drum & bass",
  "Club-house",
  "Hardcore techno",
  "Terror",
  "Indie",
  "Britpop",
  "Negerpunk",
  "Polsk punk",
  "Beat",
  "Christian gangsta rap",
  "Heavy metal",
  "Black metal",
  "Crossover",
  "Contemporary Christian",
  "Christian rock",
  "Merengue",
  "Salsa",
  "Thrash metal",
  "Anime",
  "Jpop",
  "Synthpop",
  "Christmas",
  "Art rock",
  "Baroque",
  "Bhangra",
  "Big beat",
  "Breakbeat",
  "Chillout",
  "Downtempo",
  "Dub",
  "EBM",
  "Eclectic",
  "Electro",
  "Electroclash",
  "Emo",
  "Experimental",
  "Garage",
  "Global",
  "IDM",
  "Illbient",
  "Industro-Goth",
  "Jam Band",
  "Krautrock",
  "Leftfield",
  "Lounge",
  "Math rock",
  "New romantic",
  "Nu-breakz",
  "Post-punk",
  "Post-rock",
  "Psytrance",
  "Shoegaze",
  "Space rock",
  "Trop rock",
  "World music",
  "Neoclassical",
  "Audiobook",
  "Audio theatre",
  "Neue Deutsche Welle",
  "Podcast",
  "Indie rock",
  "G-Funk",
  "Dubstep",
  "Garage rock",
  "Psybient"
], cd = (r, e) => {
  const t = r.filePos;
  e.raw ??= {}, e.raw.TAG ??= N(r, Vr - 3), r.filePos = t;
  const i = Nt(r, 30);
  i && (e.title ??= i);
  const s = Nt(r, 30);
  s && (e.artist ??= s);
  const n = Nt(r, 30);
  n && (e.album ??= n);
  const a = Nt(r, 4), o = Number.parseInt(a, 10);
  Number.isInteger(o) && o > 0 && (e.date ??= new Date(o, 0, 1));
  const c = N(r, 30);
  let l;
  if (c[28] === 0 && c[29] !== 0) {
    const u = c[29];
    u > 0 && (e.trackNumber ??= u), r.skip(-30), l = Nt(r, 28), r.skip(2);
  } else
    r.skip(-30), l = Nt(r, 30);
  l && (e.comment ??= l);
  const d = M(r);
  d < Qt.length && (e.genre ??= Qt[d]);
}, Nt = (r, e) => {
  const t = N(r, e), i = Wt(t.indexOf(0), t.length), s = t.subarray(0, i);
  let n = "";
  for (let a = 0; a < s.length; a++)
    n += String.fromCharCode(s[a]);
  return n.trimEnd();
}, At = (r) => {
  const e = r.filePos, t = le(r, 3), i = M(r), s = M(r), n = M(r), a = A(r);
  if (t !== "ID3" || i === 255 || s === 255 || (a & 2155905152) !== 0)
    return r.filePos = e, null;
  const o = Ji(a);
  return { majorVersion: i, revision: s, flags: n, size: o };
}, js = (r, e, t) => {
  if (![2, 3, 4].includes(e.majorVersion)) {
    console.warn(`Unsupported ID3v2 major version: ${e.majorVersion}`);
    return;
  }
  const i = N(r, e.size), s = new ld(e, i);
  if (e.flags & $t.Footer && s.removeFooter(), e.flags & $t.Unsynchronisation && e.majorVersion === 3 && s.ununsynchronizeAll(), e.flags & $t.ExtendedHeader) {
    const n = s.readU32();
    e.majorVersion === 3 ? s.pos += n : s.pos += n - 4;
  }
  for (; s.pos <= s.bytes.length - s.frameHeaderSize(); ) {
    const n = s.readId3V2Frame();
    if (!n)
      break;
    const a = s.pos, o = s.pos + n.size;
    let c = !1, l = !1, d = !1;
    if (e.majorVersion === 3 ? (c = !!(n.flags & 64), l = !!(n.flags & 128)) : e.majorVersion === 4 && (c = !!(n.flags & 4), l = !!(n.flags & 8), d = !!(n.flags & 2) || !!(e.flags & $t.Unsynchronisation)), c) {
      console.warn(`Skipping encrypted ID3v2 frame ${n.id}`), s.pos = o;
      continue;
    }
    if (l) {
      console.warn(`Skipping compressed ID3v2 frame ${n.id}`), s.pos = o;
      continue;
    }
    switch (d && s.ununsynchronizeRegion(s.pos, o), t.raw ??= {}, n.id[0] === "T" ? t.raw[n.id] ??= s.readId3V2EncodingAndText(o) : t.raw[n.id] ??= s.readBytes(n.size), s.pos = a, n.id) {
      case "TIT2":
      case "TT2":
        t.title ??= s.readId3V2EncodingAndText(o);
        break;
      case "TIT3":
      case "TT3":
        t.description ??= s.readId3V2EncodingAndText(o);
        break;
      case "TPE1":
      case "TP1":
        t.artist ??= s.readId3V2EncodingAndText(o);
        break;
      case "TALB":
      case "TAL":
        t.album ??= s.readId3V2EncodingAndText(o);
        break;
      case "TPE2":
      case "TP2":
        t.albumArtist ??= s.readId3V2EncodingAndText(o);
        break;
      case "TRCK":
      case "TRK":
        {
          const h = s.readId3V2EncodingAndText(o).split("/"), m = Number.parseInt(h[0], 10), g = h[1] && Number.parseInt(h[1], 10);
          Number.isInteger(m) && m > 0 && (t.trackNumber ??= m), g && Number.isInteger(g) && g > 0 && (t.tracksTotal ??= g);
        }
        break;
      case "TPOS":
      case "TPA":
        {
          const h = s.readId3V2EncodingAndText(o).split("/"), m = Number.parseInt(h[0], 10), g = h[1] && Number.parseInt(h[1], 10);
          Number.isInteger(m) && m > 0 && (t.discNumber ??= m), g && Number.isInteger(g) && g > 0 && (t.discsTotal ??= g);
        }
        break;
      case "TCON":
      case "TCO":
        {
          const u = s.readId3V2EncodingAndText(o);
          let h = /^\((\d+)\)/.exec(u);
          if (h) {
            const m = Number.parseInt(h[1]);
            if (Qt[m] !== void 0) {
              t.genre ??= Qt[m];
              break;
            }
          }
          if (h = /^\d+$/.exec(u), h) {
            const m = Number.parseInt(h[0]);
            if (Qt[m] !== void 0) {
              t.genre ??= Qt[m];
              break;
            }
          }
          t.genre ??= u;
        }
        break;
      case "TDRC":
      case "TDAT":
        {
          const u = s.readId3V2EncodingAndText(o), h = new Date(u);
          Number.isNaN(h.getTime()) || (t.date ??= h);
        }
        break;
      case "TYER":
      case "TYE":
        {
          const u = s.readId3V2EncodingAndText(o), h = Number.parseInt(u, 10);
          Number.isInteger(h) && (t.date ??= new Date(h, 0, 1));
        }
        break;
      case "USLT":
      case "ULT":
        {
          const u = s.readU8();
          s.pos += 3, s.readId3V2Text(u, o), t.lyrics ??= s.readId3V2Text(u, o);
        }
        break;
      case "COMM":
      case "COM":
        {
          const u = s.readU8();
          s.pos += 3, s.readId3V2Text(u, o), t.comment ??= s.readId3V2Text(u, o);
        }
        break;
      case "APIC":
      case "PIC":
        {
          const u = s.readId3V2TextEncoding();
          let h;
          if (e.majorVersion === 2) {
            const w = s.readAscii(3);
            h = w === "PNG" ? "image/png" : w === "JPG" ? "image/jpeg" : "image/*";
          } else
            h = s.readId3V2Text(u, o);
          const m = s.readU8(), g = s.readId3V2Text(u, o).trimEnd(), f = o - s.pos;
          if (f >= 0) {
            const w = s.readBytes(f);
            t.images || (t.images = []), t.images.push({
              data: w,
              mimeType: h,
              kind: m === 3 ? "coverFront" : m === 4 ? "coverBack" : "unknown",
              description: g
            });
          }
        }
        break;
      default:
        s.pos += n.size;
        break;
    }
    s.pos = o;
  }
};
class ld {
  constructor(e, t) {
    this.header = e, this.bytes = t, this.pos = 0, this.view = new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  frameHeaderSize() {
    return this.header.majorVersion === 2 ? 6 : 10;
  }
  ununsynchronizeAll() {
    const e = [];
    for (let t = 0; t < this.bytes.length; t++) {
      const i = this.bytes[t];
      e.push(i), i === 255 && t !== this.bytes.length - 1 && this.bytes[t] === 0 && t++;
    }
    this.bytes = new Uint8Array(e), this.view = new DataView(this.bytes.buffer);
  }
  ununsynchronizeRegion(e, t) {
    const i = [];
    for (let a = e; a < t; a++) {
      const o = this.bytes[a];
      i.push(o), o === 255 && a !== t - 1 && this.bytes[a + 1] === 0 && a++;
    }
    const s = this.bytes.subarray(0, e), n = this.bytes.subarray(t);
    this.bytes = new Uint8Array(s.length + i.length + n.length), this.bytes.set(s, 0), this.bytes.set(i, s.length), this.bytes.set(n, s.length + i.length), this.view = new DataView(this.bytes.buffer);
  }
  removeFooter() {
    this.bytes = this.bytes.subarray(0, this.bytes.length - et), this.view = new DataView(this.bytes.buffer);
  }
  readBytes(e) {
    const t = this.bytes.subarray(this.pos, this.pos + e);
    return this.pos += e, t;
  }
  readU8() {
    const e = this.view.getUint8(this.pos);
    return this.pos += 1, e;
  }
  readU16() {
    const e = this.view.getUint16(this.pos, !1);
    return this.pos += 2, e;
  }
  readU24() {
    const e = this.view.getUint16(this.pos, !1), t = this.view.getUint8(this.pos + 1);
    return this.pos += 3, e * 256 + t;
  }
  readU32() {
    const e = this.view.getUint32(this.pos, !1);
    return this.pos += 4, e;
  }
  readAscii(e) {
    let t = "";
    for (let i = 0; i < e; i++)
      t += String.fromCharCode(this.view.getUint8(this.pos + i));
    return this.pos += e, t;
  }
  readId3V2Frame() {
    if (this.header.majorVersion === 2) {
      const e = this.readAscii(3);
      if (e === "\0\0\0")
        return null;
      const t = this.readU24();
      return { id: e, size: t, flags: 0 };
    } else {
      const e = this.readAscii(4);
      if (e === "\0\0\0\0")
        return null;
      const t = this.readU32();
      let i = this.header.majorVersion === 4 ? Ji(t) : t;
      const s = this.readU16(), n = this.pos, a = (o) => {
        const c = this.pos + o;
        if (c > this.bytes.length)
          return !1;
        if (c <= this.bytes.length - this.frameHeaderSize()) {
          this.pos += o;
          const l = this.readAscii(4);
          if (l !== "\0\0\0\0" && !/[0-9A-Z]{4}/.test(l))
            return !1;
        }
        return !0;
      };
      if (!a(i)) {
        const o = this.header.majorVersion === 4 ? t : Ji(t);
        a(o) && (i = o);
      }
      return this.pos = n, { id: e, size: i, flags: s };
    }
  }
  readId3V2TextEncoding() {
    const e = this.readU8();
    if (e > 3)
      throw new Error(`Unsupported text encoding: ${e}`);
    return e;
  }
  readId3V2Text(e, t) {
    const i = this.pos, s = this.readBytes(t - this.pos);
    switch (e) {
      case pe.ISO_8859_1: {
        let n = "";
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o === 0) {
            this.pos = i + a + 1;
            break;
          }
          n += String.fromCharCode(o);
        }
        return n;
      }
      case pe.UTF_16_WITH_BOM:
        if (s[0] === 255 && s[1] === 254) {
          const n = new TextDecoder("utf-16le"), a = Wt(s.findIndex((o, c) => o === 0 && s[c + 1] === 0 && c % 2 === 0), s.length);
          return this.pos = i + Math.min(a + 2, s.length), n.decode(s.subarray(2, a));
        } else if (s[0] === 254 && s[1] === 255) {
          const n = new TextDecoder("utf-16be"), a = Wt(s.findIndex((o, c) => o === 0 && s[c + 1] === 0 && c % 2 === 0), s.length);
          return this.pos = i + Math.min(a + 2, s.length), n.decode(s.subarray(2, a));
        } else {
          const n = Wt(s.findIndex((a) => a === 0), s.length);
          return this.pos = i + Math.min(n + 1, s.length), Ee.decode(s.subarray(0, n));
        }
      case pe.UTF_16_BE_NO_BOM: {
        const n = new TextDecoder("utf-16be"), a = Wt(s.findIndex((o, c) => o === 0 && s[c + 1] === 0 && c % 2 === 0), s.length);
        return this.pos = i + Math.min(a + 2, s.length), n.decode(s.subarray(0, a));
      }
      case pe.UTF_8: {
        const n = Wt(s.findIndex((a) => a === 0), s.length);
        return this.pos = i + Math.min(n + 1, s.length), Ee.decode(s.subarray(0, n));
      }
    }
  }
  readId3V2EncodingAndText(e) {
    if (this.pos >= e)
      return "";
    const t = this.readId3V2TextEncoding();
    return this.readId3V2Text(t, e);
  }
}
class $s {
  constructor(e) {
    this.helper = new Uint8Array(8), this.helperView = L(this.helper), this.writer = e;
  }
  writeId3V2Tag(e) {
    const t = this.writer.getPos();
    this.writeAscii("ID3"), this.writeU8(4), this.writeU8(0), this.writeU8(0), this.writeSynchsafeU32(0);
    const i = this.writer.getPos(), s = /* @__PURE__ */ new Set();
    for (const { key: o, value: c } of er(e))
      switch (o) {
        case "title":
          this.writeId3V2TextFrame("TIT2", c), s.add("TIT2");
          break;
        case "description":
          this.writeId3V2TextFrame("TIT3", c), s.add("TIT3");
          break;
        case "artist":
          this.writeId3V2TextFrame("TPE1", c), s.add("TPE1");
          break;
        case "album":
          this.writeId3V2TextFrame("TALB", c), s.add("TALB");
          break;
        case "albumArtist":
          this.writeId3V2TextFrame("TPE2", c), s.add("TPE2");
          break;
        case "trackNumber":
          {
            const l = e.tracksTotal !== void 0 ? `${c}/${e.tracksTotal}` : c.toString();
            this.writeId3V2TextFrame("TRCK", l), s.add("TRCK");
          }
          break;
        case "discNumber":
          {
            const l = e.discsTotal !== void 0 ? `${c}/${e.discsTotal}` : c.toString();
            this.writeId3V2TextFrame("TPOS", l), s.add("TPOS");
          }
          break;
        case "genre":
          this.writeId3V2TextFrame("TCON", c), s.add("TCON");
          break;
        case "date":
          this.writeId3V2TextFrame("TDRC", c.toISOString().slice(0, 10)), s.add("TDRC");
          break;
        case "lyrics":
          this.writeId3V2LyricsFrame(c), s.add("USLT");
          break;
        case "comment":
          this.writeId3V2CommentFrame(c), s.add("COMM");
          break;
        case "images":
          {
            const l = { coverFront: 3, coverBack: 4, unknown: 0 };
            for (const d of c) {
              const u = l[d.kind] ?? 0, h = d.description ?? "";
              this.writeId3V2ApicFrame(d.mimeType, u, h, d.data);
            }
          }
          break;
        case "tracksTotal":
        case "discsTotal":
          break;
        case "raw":
          break;
        default:
          ge(o);
      }
    if (e.raw)
      for (const o in e.raw) {
        const c = e.raw[o];
        if (c == null || o.length !== 4 || s.has(o))
          continue;
        let l;
        if (typeof c == "string") {
          const d = J.encode(c);
          l = new Uint8Array(d.byteLength + 2), l[0] = pe.UTF_8, l.set(d, 1);
        } else if (c instanceof Uint8Array)
          l = c;
        else
          continue;
        this.writeAscii(o), this.writeSynchsafeU32(l.byteLength), this.writeU16(0), this.writer.write(l);
      }
    const n = this.writer.getPos(), a = n - i;
    return this.writer.seek(t + 6), this.writeSynchsafeU32(a), this.writer.seek(n), a + 10;
  }
  writeU8(e) {
    this.helper[0] = e, this.writer.write(this.helper.subarray(0, 1));
  }
  writeU16(e) {
    this.helperView.setUint16(0, e, !1), this.writer.write(this.helper.subarray(0, 2));
  }
  writeU32(e) {
    this.helperView.setUint32(0, e, !1), this.writer.write(this.helper.subarray(0, 4));
  }
  writeAscii(e) {
    for (let t = 0; t < e.length; t++)
      this.helper[t] = e.charCodeAt(t);
    this.writer.write(this.helper.subarray(0, e.length));
  }
  writeSynchsafeU32(e) {
    this.writeU32(Oc(e));
  }
  writeIsoString(e) {
    const t = new Uint8Array(e.length + 1);
    for (let i = 0; i < e.length; i++)
      t[i] = e.charCodeAt(i);
    t[e.length] = 0, this.writer.write(t);
  }
  writeUtf8String(e) {
    const t = J.encode(e);
    this.writer.write(t), this.writeU8(0);
  }
  writeId3V2TextFrame(e, t) {
    const i = Vt(t), n = 1 + (i ? t.length : J.encode(t).byteLength) + 1;
    this.writeAscii(e), this.writeSynchsafeU32(n), this.writeU16(0), this.writeU8(i ? pe.ISO_8859_1 : pe.UTF_8), i ? this.writeIsoString(t) : this.writeUtf8String(t);
  }
  writeId3V2LyricsFrame(e) {
    const t = Vt(e), i = "", s = 4 + i.length + 1 + e.length + 1;
    this.writeAscii("USLT"), this.writeSynchsafeU32(s), this.writeU16(0), this.writeU8(t ? pe.ISO_8859_1 : pe.UTF_8), this.writeAscii("und"), t ? (this.writeIsoString(i), this.writeIsoString(e)) : (this.writeUtf8String(i), this.writeUtf8String(e));
  }
  writeId3V2CommentFrame(e) {
    const t = Vt(e), i = t ? e.length : J.encode(e).byteLength, s = "", n = 4 + s.length + 1 + i + 1;
    this.writeAscii("COMM"), this.writeSynchsafeU32(n), this.writeU16(0), this.writeU8(t ? pe.ISO_8859_1 : pe.UTF_8), this.writeU8(117), this.writeU8(110), this.writeU8(100), t ? (this.writeIsoString(s), this.writeIsoString(e)) : (this.writeUtf8String(s), this.writeUtf8String(e));
  }
  writeId3V2ApicFrame(e, t, i, s) {
    const n = Vt(e) && Vt(i), a = n ? i.length : J.encode(i).byteLength, o = 1 + e.length + 1 + 1 + a + 1 + s.byteLength;
    this.writeAscii("APIC"), this.writeSynchsafeU32(o), this.writeU16(0), this.writeU8(n ? pe.ISO_8859_1 : pe.UTF_8), n ? this.writeIsoString(e) : this.writeUtf8String(e), this.writeU8(t), n ? this.writeIsoString(i) : this.writeUtf8String(i), this.writer.write(s);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class gt {
  constructor(e) {
    this.mutex = new Jt(), this.firstMediaStreamTimestamp = null, this.trackTimestampInfo = /* @__PURE__ */ new WeakMap(), this.output = e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onTrackClose(e) {
  }
  validateAndNormalizeTimestamp(e, t, i) {
    if (t += e.source._timestampOffset, t < 0)
      throw new Error(`Timestamps must be non-negative (got ${t}s).`);
    let s = this.trackTimestampInfo.get(e);
    if (s) {
      if (i && (s.maxTimestampBeforeLastKeyPacket = s.maxTimestamp), s.maxTimestampBeforeLastKeyPacket !== null && t < s.maxTimestampBeforeLastKeyPacket)
        throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${t}s, but largest timestamp is ${s.maxTimestampBeforeLastKeyPacket}s.`);
      s.maxTimestamp = Math.max(s.maxTimestamp, t);
    } else {
      if (!i)
        throw new Error("First packet must be a key packet.");
      s = {
        maxTimestamp: t,
        maxTimestampBeforeLastKeyPacket: null
      }, this.trackTimestampInfo.set(e, s);
    }
    return t;
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class dd extends gt {
  constructor(e, t) {
    super(e), this.header = null, this.headerBitstream = null, this.inputIsAdts = null, this.format = t, this.writer = e._writer;
  }
  async start() {
    xr(this.output._metadataTags) || new $s(this.writer).writeId3V2Tag(this.output._metadataTags);
  }
  async getMimeType() {
    return "audio/aac";
  }
  async addEncodedVideoPacket() {
    throw new Error("ADTS does not support video.");
  }
  async addEncodedAudioPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      if (this.validateAndNormalizeTimestamp(e, t.timestamp, t.type === "key"), this.inputIsAdts === null) {
        zt(i);
        const n = i?.decoderConfig?.description;
        if (this.inputIsAdts = !n, !this.inputIsAdts) {
          const a = Ar(Z(n)), o = ra(a);
          this.header = o.header, this.headerBitstream = o.bitstream;
        }
      }
      if (this.inputIsAdts) {
        const n = this.writer.getPos();
        this.writer.write(t.data), this.format._options.onFrame && this.format._options.onFrame(t.data, n);
      } else {
        p(this.header);
        const n = t.data.byteLength + this.header.byteLength;
        ia(this.headerBitstream, n);
        const a = this.writer.getPos();
        if (this.writer.write(this.header), this.writer.write(t.data), this.format._options.onFrame) {
          const o = new Uint8Array(n);
          o.set(this.header, 0), o.set(t.data, this.header.byteLength), this.format._options.onFrame(o, a);
        }
      }
      await this.writer.flush();
    } finally {
      s();
    }
  }
  async addSubtitleCue() {
    throw new Error("ADTS does not support subtitles.");
  }
  async finalize() {
    (await this.mutex.acquire())();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Dn = /* @__PURE__ */ new Uint8Array([102, 76, 97, 67]), ud = 38, hd = 34;
class fd extends gt {
  constructor(e, t) {
    super(e), this.metadataWritten = !1, this.blockSizes = [], this.frameSizes = [], this.sampleRate = null, this.channels = null, this.bitsPerSample = null, this.writer = e._writer, this.format = t;
  }
  async start() {
    this.writer.write(Dn);
  }
  writeHeader({ bitsPerSample: e, minimumBlockSize: t, maximumBlockSize: i, minimumFrameSize: s, maximumFrameSize: n, sampleRate: a, channels: o, totalSamples: c }) {
    p(this.writer.getPos() === 4);
    const l = !xr(this.output._metadataTags), d = new V(new Uint8Array(4));
    d.writeBits(1, +!l), d.writeBits(7, Ye.STREAMINFO), d.writeBits(24, hd), this.writer.write(d.bytes);
    const u = new V(new Uint8Array(18));
    if (u.writeBits(16, t), u.writeBits(16, i), u.writeBits(24, s), u.writeBits(24, n), u.writeBits(20, a), u.writeBits(3, o - 1), u.writeBits(5, e - 1), c >= 2 ** 32)
      throw new Error("This muxer only supports writing up to 2 ** 32 samples");
    u.writeBits(4, 0), u.writeBits(32, c), this.writer.write(u.bytes), this.writer.write(new Uint8Array(16));
  }
  writePictureBlock(e) {
    const t = 32 + e.mimeType.length + (e.description?.length ?? 0) + e.data.length, i = new Uint8Array(t);
    let s = 0;
    const n = L(i);
    n.setUint32(s, e.kind === "coverFront" ? 3 : e.kind === "coverBack" ? 4 : 0), s += 4, n.setUint32(s, e.mimeType.length), s += 4, i.set(J.encode(e.mimeType), 8), s += e.mimeType.length, n.setUint32(s, e.description?.length ?? 0), s += 4, i.set(J.encode(e.description ?? ""), s), s += e.description?.length ?? 0, s += 16, n.setUint32(s, e.data.length), s += 4, i.set(e.data, s), s += e.data.length, p(s === t);
    const a = new V(new Uint8Array(4));
    a.writeBits(1, 0), a.writeBits(7, Ye.PICTURE), a.writeBits(24, t), this.writer.write(a.bytes), this.writer.write(i);
  }
  writeVorbisCommentAndPictureBlock() {
    if (this.writer.seek(ud + Dn.byteLength), xr(this.output._metadataTags)) {
      this.metadataWritten = !0;
      return;
    }
    const e = this.output._metadataTags.images ?? [];
    for (const s of e)
      this.writePictureBlock(s);
    const t = rs(new Uint8Array(0), this.output._metadataTags, !1), i = new V(new Uint8Array(4));
    i.writeBits(1, 1), i.writeBits(7, Ye.VORBIS_COMMENT), i.writeBits(24, t.length), this.writer.write(i.bytes), this.writer.write(t), this.metadataWritten = !0;
  }
  async getMimeType() {
    return "audio/flac";
  }
  async addEncodedVideoPacket() {
    throw new Error("FLAC does not support video.");
  }
  async addEncodedAudioPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      if (this.validateAndNormalizeTimestamp(e, t.timestamp, t.type === "key"), this.sampleRate === null) {
        zt(i), p(i), p(i.decoderConfig), p(i.decoderConfig.description), this.sampleRate = i.decoderConfig.sampleRate, this.channels = i.decoderConfig.numberOfChannels;
        const u = new V(Z(i.decoderConfig.description));
        u.skipBits(167);
        const h = u.readBits(5) + 1;
        this.bitsPerSample = h;
      }
      this.metadataWritten || this.writeVorbisCommentAndPictureBlock();
      const n = ye.tempFromBytes(t.data);
      n.skip(2);
      const a = N(n, 2), o = new V(a), c = $a(o.readBits(4));
      if (c === null)
        throw new Error("Invalid FLAC frame: Invalid block size.");
      Qa(n);
      const l = Ka(n, c);
      this.blockSizes.push(l), this.frameSizes.push(t.data.length);
      const d = this.writer.getPos();
      this.writer.write(t.data), this.format._options.onFrame && this.format._options.onFrame(t.data, d), await this.writer.flush();
    } finally {
      s();
    }
  }
  addSubtitleCue() {
    throw new Error("FLAC does not support subtitles.");
  }
  async finalize() {
    const e = await this.mutex.acquire();
    let t = 1 / 0, i = 0, s = 1 / 0, n = 0, a = 0;
    for (let o = 0; o < this.blockSizes.length; o++)
      s = Math.min(s, this.frameSizes[o]), n = Math.max(n, this.frameSizes[o]), i = Math.max(i, this.blockSizes[o]), a += this.blockSizes[o], o !== this.blockSizes.length - 1 && (t = Math.min(t, this.blockSizes[o]));
    p(this.sampleRate !== null), p(this.channels !== null), p(this.bitsPerSample !== null), this.writer.seek(4), this.writeHeader({
      minimumBlockSize: t,
      maximumBlockSize: i,
      minimumFrameSize: s,
      maximumFrameSize: n,
      sampleRate: this.sampleRate,
      channels: this.channels,
      bitsPerSample: this.bitsPerSample,
      totalSamples: a
    }), e();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const hr = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g, md = /^WEBVTT(.|\n)*?\n{2}/, Jr = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
class pd {
  constructor(e) {
    this.preambleText = null, this.preambleEmitted = !1, this.options = e;
  }
  parse(e) {
    e = e.replaceAll(`\r
`, `
`).replaceAll("\r", `
`), hr.lastIndex = 0;
    let t;
    if (!this.preambleText) {
      if (!md.test(e))
        throw new Error("WebVTT preamble incorrect.");
      t = hr.exec(e);
      const i = e.slice(0, t?.index ?? e.length).trimEnd();
      if (!i)
        throw new Error("No WebVTT preamble provided.");
      this.preambleText = i, t && (e = e.slice(t.index), hr.lastIndex = 0);
    }
    for (; t = hr.exec(e); ) {
      const i = e.slice(0, t.index), s = t[1], n = t.index + t[0].length, a = e.indexOf(`
`, n) + 1, o = e.slice(n, a).trim();
      let c = e.indexOf(`

`, n);
      c === -1 && (c = e.length);
      const l = us(t[2]), u = us(t[3]) - l, h = e.slice(a, c).trim();
      e = e.slice(c).trimStart(), hr.lastIndex = 0;
      const m = {
        timestamp: l / 1e3,
        duration: u / 1e3,
        text: h,
        identifier: s,
        settings: o,
        notes: i
      }, g = {};
      this.preambleEmitted || (g.config = {
        description: this.preambleText
      }, this.preambleEmitted = !0), this.options.output(m, g);
    }
  }
}
const gd = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/, us = (r) => {
  const e = gd.exec(r);
  if (!e)
    throw new Error("Expected match.");
  return 60 * 60 * 1e3 * Number(e[1] || "0") + 60 * 1e3 * Number(e[2]) + 1e3 * Number(e[3]) + Number(e[4]);
}, yo = (r) => {
  const e = Math.floor(r / 36e5), t = Math.floor(r % (60 * 60 * 1e3) / (60 * 1e3)), i = Math.floor(r % (60 * 1e3) / 1e3), s = r % 1e3;
  return e.toString().padStart(2, "0") + ":" + t.toString().padStart(2, "0") + ":" + i.toString().padStart(2, "0") + "." + s.toString().padStart(3, "0");
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class On {
  constructor(e) {
    this.writer = e, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = /* @__PURE__ */ new WeakMap();
  }
  writeU32(e) {
    this.helperView.setUint32(0, e, !1), this.writer.write(this.helper.subarray(0, 4));
  }
  writeU64(e) {
    this.helperView.setUint32(0, Math.floor(e / 2 ** 32), !1), this.helperView.setUint32(4, e, !1), this.writer.write(this.helper.subarray(0, 8));
  }
  writeAscii(e) {
    for (let t = 0; t < e.length; t++)
      this.helperView.setUint8(t % 8, e.charCodeAt(t)), t % 8 === 7 && this.writer.write(this.helper);
    e.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, e.length % 8));
  }
  writeBox(e) {
    if (this.offsets.set(e, this.writer.getPos()), e.contents && !e.children)
      this.writeBoxHeader(e, e.size ?? e.contents.byteLength + 8), this.writer.write(e.contents);
    else {
      const t = this.writer.getPos();
      if (this.writeBoxHeader(e, 0), e.contents && this.writer.write(e.contents), e.children)
        for (const n of e.children)
          n && this.writeBox(n);
      const i = this.writer.getPos(), s = e.size ?? i - t;
      this.writer.seek(t), this.writeBoxHeader(e, s), this.writer.seek(i);
    }
  }
  writeBoxHeader(e, t) {
    this.writeU32(e.largeSize ? 1 : t), this.writeAscii(e.type), e.largeSize && this.writeU64(t);
  }
  measureBoxHeader(e) {
    return 8 + (e.largeSize ? 8 : 0);
  }
  patchBox(e) {
    const t = this.offsets.get(e);
    p(t !== void 0);
    const i = this.writer.getPos();
    this.writer.seek(t), this.writeBox(e), this.writer.seek(i);
  }
  measureBox(e) {
    if (e.contents && !e.children)
      return this.measureBoxHeader(e) + e.contents.byteLength;
    {
      let t = this.measureBoxHeader(e);
      if (e.contents && (t += e.contents.byteLength), e.children)
        for (const i of e.children)
          i && (t += this.measureBox(i));
      return t;
    }
  }
}
const $ = /* @__PURE__ */ new Uint8Array(8), Ve = /* @__PURE__ */ new DataView($.buffer), te = (r) => [(r % 256 + 256) % 256], O = (r) => (Ve.setUint16(0, r, !1), [$[0], $[1]]), Qs = (r) => (Ve.setInt16(0, r, !1), [$[0], $[1]]), To = (r) => (Ve.setUint32(0, r, !1), [$[1], $[2], $[3]]), E = (r) => (Ve.setUint32(0, r, !1), [$[0], $[1], $[2], $[3]]), ot = (r) => (Ve.setInt32(0, r, !1), [$[0], $[1], $[2], $[3]]), Ft = (r) => (Ve.setUint32(0, Math.floor(r / 2 ** 32), !1), Ve.setUint32(4, r, !1), [$[0], $[1], $[2], $[3], $[4], $[5], $[6], $[7]]), So = (r) => (Ve.setInt16(0, 2 ** 8 * r, !1), [$[0], $[1]]), Qe = (r) => (Ve.setInt32(0, 2 ** 16 * r, !1), [$[0], $[1], $[2], $[3]]), Oi = (r) => (Ve.setInt32(0, 2 ** 30 * r, !1), [$[0], $[1], $[2], $[3]]), Ui = (r, e) => {
  const t = [];
  let i = r;
  do {
    let s = i & 127;
    i >>= 7, t.length > 0 && (s |= 128), t.push(s);
  } while (i > 0 || e);
  return t.reverse();
}, ue = (r, e = !1) => {
  const t = Array(r.length).fill(null).map((i, s) => r.charCodeAt(s));
  return e && t.push(0), t;
}, Ks = (r) => {
  let e = null;
  for (const t of r)
    (!e || t.timestamp > e.timestamp) && (e = t);
  return e;
}, xo = (r) => {
  const e = r * (Math.PI / 180), t = Math.round(Math.cos(e)), i = Math.round(Math.sin(e));
  return [
    t,
    i,
    0,
    -i,
    t,
    0,
    0,
    0,
    1
  ];
}, Po = /* @__PURE__ */ xo(0), Co = (r) => [
  Qe(r[0]),
  Qe(r[1]),
  Oi(r[2]),
  Qe(r[3]),
  Qe(r[4]),
  Oi(r[5]),
  Qe(r[6]),
  Qe(r[7]),
  Oi(r[8])
], z = (r, e, t) => ({
  type: r,
  contents: e && new Uint8Array(e.flat(10)),
  children: t
}), K = (r, e, t, i, s) => z(r, [te(e), To(t), i ?? []], s), wd = (r) => r.isQuickTime ? z("ftyp", [
  ue("qt  "),
  // Major brand
  E(512),
  // Minor version
  // Compatible brands
  ue("qt  ")
]) : r.fragmented ? z("ftyp", [
  ue("iso5"),
  // Major brand
  E(512),
  // Minor version
  // Compatible brands
  ue("iso5"),
  ue("iso6"),
  ue("mp41")
]) : z("ftyp", [
  ue("isom"),
  // Major brand
  E(512),
  // Minor version
  // Compatible brands
  ue("isom"),
  r.holdsAvc ? ue("avc1") : [],
  ue("mp41")
]), Or = (r) => ({ type: "mdat", largeSize: r }), bd = (r) => ({ type: "free", size: r }), fr = (r) => z("moov", void 0, [
  kd(r.creationTime, r.trackDatas),
  ...r.trackDatas.map((e) => yd(e, r.creationTime)),
  r.isFragmented ? su(r.trackDatas) : null,
  wu(r)
]), kd = (r, e) => {
  const t = ne(Math.max(0, ...e.filter((a) => a.samples.length > 0).map((a) => {
    const o = Ks(a.samples);
    return o.timestamp + o.duration;
  })), hs), i = Math.max(0, ...e.map((a) => a.track.id)) + 1, s = !Gt(r) || !Gt(t), n = s ? Ft : E;
  return K("mvhd", +s, 0, [
    n(r),
    // Creation time
    n(r),
    // Modification time
    E(hs),
    // Timescale
    n(t),
    // Duration
    Qe(1),
    // Preferred rate
    So(1),
    // Preferred volume
    Array(10).fill(0),
    // Reserved
    Co(Po),
    // Matrix
    Array(24).fill(0),
    // Pre-defined
    E(i)
    // Next track ID
  ]);
}, yd = (r, e) => {
  const t = Ru(r);
  return z("trak", void 0, [
    Td(r, e),
    Sd(r, e),
    t.name !== void 0 ? z("udta", void 0, [
      z("name", [
        ...J.encode(t.name)
      ])
    ]) : null
  ]);
}, Td = (r, e) => {
  const t = Ks(r.samples), i = ne(t ? t.timestamp + t.duration : 0, hs), s = !Gt(e) || !Gt(i), n = s ? Ft : E;
  let a;
  if (r.type === "video") {
    const c = r.track.metadata.rotation;
    a = xo(c ?? 0);
  } else
    a = Po;
  let o = 2;
  return r.track.metadata.disposition?.default !== !1 && (o |= 1), K("tkhd", +s, o, [
    n(e),
    // Creation time
    n(e),
    // Modification time
    E(r.track.id),
    // Track ID
    E(0),
    // Reserved
    n(i),
    // Duration
    Array(8).fill(0),
    // Reserved
    O(0),
    // Layer
    O(r.track.id),
    // Alternate group
    So(r.type === "audio" ? 1 : 0),
    // Volume
    O(0),
    // Reserved
    Co(a),
    // Matrix
    Qe(r.type === "video" ? r.info.width : 0),
    // Track width
    Qe(r.type === "video" ? r.info.height : 0)
    // Track height
  ]);
}, Sd = (r, e) => z("mdia", void 0, [
  xd(r, e),
  Gs(!0, Pd[r.type], Cd[r.type]),
  _d(r)
]), xd = (r, e) => {
  const t = Ks(r.samples), i = ne(t ? t.timestamp + t.duration : 0, r.timescale), s = !Gt(e) || !Gt(i), n = s ? Ft : E;
  return K("mdhd", +s, 0, [
    n(e),
    // Creation time
    n(e),
    // Modification time
    E(r.timescale),
    // Timescale
    n(i),
    // Duration
    O(vo(r.track.metadata.languageCode ?? ke)),
    // Language
    O(0)
    // Quality
  ]);
}, Pd = {
  video: "vide",
  audio: "soun",
  subtitle: "text"
}, Cd = {
  video: "MediabunnyVideoHandler",
  audio: "MediabunnySoundHandler",
  subtitle: "MediabunnyTextHandler"
}, Gs = (r, e, t, i = "\0\0\0\0") => K("hdlr", 0, 0, [
  r ? ue("mhlr") : E(0),
  // Component type
  ue(e),
  // Component subtype
  ue(i),
  // Component manufacturer
  E(0),
  // Component flags
  E(0),
  // Component flags mask
  ue(t, !0)
  // Component name
]), _d = (r) => z("minf", void 0, [
  Ad[r.type](),
  Fd(),
  Md(r)
]), Id = () => K("vmhd", 0, 1, [
  O(0),
  // Graphics mode
  O(0),
  // Opcolor R
  O(0),
  // Opcolor G
  O(0)
  // Opcolor B
]), Ed = () => K("smhd", 0, 0, [
  O(0),
  // Balance
  O(0)
  // Reserved
]), vd = () => K("nmhd", 0, 0), Ad = {
  video: Id,
  audio: Ed,
  subtitle: vd
}, Fd = () => z("dinf", void 0, [
  Bd()
]), Bd = () => K("dref", 0, 0, [
  E(1)
  // Entry count
], [
  Rd()
]), Rd = () => K("url ", 0, 1), Md = (r) => {
  const e = r.compositionTimeOffsetTable.length > 1 || r.compositionTimeOffsetTable.some((t) => t.sampleCompositionTimeOffset !== 0);
  return z("stbl", void 0, [
    zd(r),
    Yd(r),
    e ? ru(r) : null,
    e ? iu(r) : null,
    Jd(r),
    eu(r),
    tu(r),
    Zd(r)
  ]);
}, zd = (r) => {
  let e;
  if (r.type === "video")
    e = Dd(Tu(r.track.source._codec, r.info.decoderConfig.codec), r);
  else if (r.type === "audio") {
    const t = Eo(r.track.source._codec, r.muxer.isQuickTime);
    p(t), e = Ld(t, r);
  } else r.type === "subtitle" && (e = Gd(Pu[r.track.source._codec], r));
  return p(e), K("stsd", 0, 0, [
    E(1)
    // Entry count
  ], [
    e
  ]);
}, Dd = (r, e) => z(r, [
  Array(6).fill(0),
  // Reserved
  O(1),
  // Data reference index
  O(0),
  // Pre-defined
  O(0),
  // Reserved
  Array(12).fill(0),
  // Pre-defined
  O(e.info.width),
  // Width
  O(e.info.height),
  // Height
  E(4718592),
  // Horizontal resolution
  E(4718592),
  // Vertical resolution
  E(0),
  // Reserved
  O(1),
  // Frame count
  Array(32).fill(0),
  // Compressor name
  O(24),
  // Depth
  Qs(65535)
  // Pre-defined
], [
  Su[e.track.source._codec](e),
  Od(e),
  Yn(e.info.decoderConfig.colorSpace) ? Ud(e) : null
]), Od = (r) => r.info.pixelAspectRatio.num === r.info.pixelAspectRatio.den ? null : z("pasp", [
  E(r.info.pixelAspectRatio.num),
  E(r.info.pixelAspectRatio.den)
]), Ud = (r) => z("colr", [
  ue("nclx"),
  // Colour type
  O(Bt[r.info.decoderConfig.colorSpace.primaries]),
  // Colour primaries
  O(Rt[r.info.decoderConfig.colorSpace.transfer]),
  // Transfer characteristics
  O(Mt[r.info.decoderConfig.colorSpace.matrix]),
  // Matrix coefficients
  te((r.info.decoderConfig.colorSpace.fullRange ? 1 : 0) << 7)
  // Full range flag
]), Nd = (r) => r.info.decoderConfig && z("avcC", [
  // For AVC, description is an AVCDecoderConfigurationRecord, so nothing else to do here
  ...Z(r.info.decoderConfig.description)
]), Vd = (r) => r.info.decoderConfig && z("hvcC", [
  // For HEVC, description is an HEVCDecoderConfigurationRecord, so nothing else to do here
  ...Z(r.info.decoderConfig.description)
]), Un = (r) => {
  if (!r.info.decoderConfig)
    return null;
  const e = r.info.decoderConfig, t = e.codec.split("."), i = Number(t[1]), s = Number(t[2]), n = Number(t[3]), a = t[4] ? Number(t[4]) : 1, o = t[8] ? Number(t[8]) : Number(e.colorSpace?.fullRange ?? 0), c = (n << 4) + (a << 1) + o, l = t[5] ? Number(t[5]) : e.colorSpace?.primaries ? Bt[e.colorSpace.primaries] : 2, d = t[6] ? Number(t[6]) : e.colorSpace?.transfer ? Rt[e.colorSpace.transfer] : 2, u = t[7] ? Number(t[7]) : e.colorSpace?.matrix ? Mt[e.colorSpace.matrix] : 2;
  return K("vpcC", 1, 0, [
    te(i),
    // Profile
    te(s),
    // Level
    te(c),
    // Bit depth, chroma subsampling, full range
    te(l),
    // Colour primaries
    te(d),
    // Transfer characteristics
    te(u),
    // Matrix coefficients
    O(0)
    // Codec initialization data size
  ]);
}, Wd = (r) => z("av1C", sa(r.info.decoderConfig.codec)), Ld = (r, e) => {
  let t = 0, i, s = 16;
  const n = se.includes(e.track.source._codec);
  if (n) {
    const a = e.track.source._codec, { sampleSize: o } = We(a);
    s = 8 * o, s > 16 && (t = 1);
  }
  if (e.muxer.isQuickTime && (t = 1), t === 0)
    i = [
      Array(6).fill(0),
      // Reserved
      O(1),
      // Data reference index
      O(t),
      // Version
      O(0),
      // Revision level
      E(0),
      // Vendor
      O(e.info.numberOfChannels),
      // Number of channels
      O(s),
      // Sample size (bits)
      O(0),
      // Compression ID
      O(0),
      // Packet size
      O(e.info.sampleRate < 2 ** 16 ? e.info.sampleRate : 0),
      // Sample rate (upper)
      O(0)
      // Sample rate (lower)
    ];
  else {
    const a = n ? 0 : -2;
    i = [
      Array(6).fill(0),
      // Reserved
      O(1),
      // Data reference index
      O(t),
      // Version
      O(0),
      // Revision level
      E(0),
      // Vendor
      O(e.info.numberOfChannels),
      // Number of channels
      O(Math.min(s, 16)),
      // Sample size (bits)
      Qs(a),
      // Compression ID
      O(0),
      // Packet size
      O(e.info.sampleRate < 2 ** 16 ? e.info.sampleRate : 0),
      // Sample rate (upper)
      O(0),
      // Sample rate (lower)
      n ? [
        E(1),
        // Samples per packet (must be 1 for uncompressed formats)
        E(s / 8),
        // Bytes per packet
        E(e.info.numberOfChannels * s / 8)
        // Bytes per frame
      ] : [
        E(0),
        // Samples per packet (don't bother, still works with 0)
        E(0),
        // Bytes per packet (variable)
        E(0)
        // Bytes per frame (variable)
      ],
      E(2)
      // Bytes per sample (constant in FFmpeg)
    ];
  }
  return z(r, i, [
    xu(e.track.source._codec, e.muxer.isQuickTime)?.(e) ?? null
  ]);
}, Ni = (r) => {
  let e;
  switch (r.track.source._codec) {
    case "aac":
      e = 64;
      break;
    case "mp3":
      e = 107;
      break;
    case "vorbis":
      e = 221;
      break;
    default:
      throw new Error(`Unhandled audio codec: ${r.track.source._codec}`);
  }
  let t = [
    ...te(e),
    // Object type indication
    ...te(21),
    // stream type(6bits)=5 audio, flags(2bits)=1
    ...To(0),
    // 24bit buffer size
    ...E(0),
    // max bitrate
    ...E(0)
    // avg bitrate
  ];
  if (r.info.decoderConfig.description) {
    const i = Z(r.info.decoderConfig.description);
    t = [
      ...t,
      ...te(5),
      // TAG(5) = DecoderSpecificInfo
      ...Ui(i.byteLength),
      ...i
    ];
  }
  return t = [
    ...O(1),
    // ES_ID = 1
    ...te(0),
    // flags etc = 0
    ...te(4),
    // TAG(4) = ES Descriptor
    ...Ui(t.length),
    ...t,
    ...te(6),
    // TAG(6)
    ...te(1),
    // length
    ...te(2)
    // data
  ], t = [
    ...te(3),
    // TAG(3) = Object Descriptor
    ...Ui(t.length),
    ...t
  ], K("esds", 0, 0, t);
}, it = (r) => z("wave", void 0, [
  Hd(r),
  qd(r),
  z("\0\0\0\0")
  // NULL tag at the end
]), Hd = (r) => z("frma", [
  ue(Eo(r.track.source._codec, r.muxer.isQuickTime))
]), qd = (r) => {
  const { littleEndian: e } = We(r.track.source._codec);
  return z("enda", [
    O(+e)
  ]);
}, jd = (r) => {
  let e = r.info.numberOfChannels, t = 3840, i = r.info.sampleRate, s = 0, n = 0, a = new Uint8Array(0);
  const o = r.info.decoderConfig?.description;
  if (o) {
    p(o.byteLength >= 18);
    const c = Z(o), l = fi(c);
    e = l.outputChannelCount, t = l.preSkip, i = l.inputSampleRate, s = l.outputGain, n = l.channelMappingFamily, l.channelMappingTable && (a = l.channelMappingTable);
  }
  return z("dOps", [
    te(0),
    // Version
    te(e),
    // OutputChannelCount
    O(t),
    // PreSkip
    E(i),
    // InputSampleRate
    Qs(s),
    // OutputGain
    te(n),
    // ChannelMappingFamily
    ...a
  ]);
}, $d = (r) => {
  const e = r.info.decoderConfig?.description;
  p(e);
  const t = Z(e);
  return K("dfLa", 0, 0, [
    ...t.subarray(4)
  ]);
}, Oe = (r) => {
  const { littleEndian: e, sampleSize: t } = We(r.track.source._codec), i = +e;
  return K("pcmC", 0, 0, [
    te(i),
    te(8 * t)
  ]);
}, Qd = (r) => {
  const e = ya(r.info.firstPacket.data);
  if (!e)
    throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
  const t = new Uint8Array(3), i = new V(t);
  return i.writeBits(2, e.fscod), i.writeBits(5, e.bsid), i.writeBits(3, e.bsmod), i.writeBits(3, e.acmod), i.writeBits(1, e.lfeon), i.writeBits(5, e.bitRateCode), i.writeBits(5, 0), z("dac3", [...t]);
}, Kd = (r) => {
  const e = Sa(r.info.firstPacket.data);
  if (!e)
    throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
  let t = 16;
  for (const a of e.substreams)
    t += 23, a.numDepSub > 0 ? t += 9 : t += 1;
  const i = Math.ceil(t / 8), s = new Uint8Array(i), n = new V(s);
  n.writeBits(13, e.dataRate), n.writeBits(3, e.substreams.length - 1);
  for (const a of e.substreams)
    n.writeBits(2, a.fscod), n.writeBits(5, a.bsid), n.writeBits(1, 0), n.writeBits(1, 0), n.writeBits(3, a.bsmod), n.writeBits(3, a.acmod), n.writeBits(1, a.lfeon), n.writeBits(3, 0), n.writeBits(4, a.numDepSub), a.numDepSub > 0 ? n.writeBits(9, a.chanLoc) : n.writeBits(1, 0);
  return z("dec3", [...s]);
}, Gd = (r, e) => z(r, [
  Array(6).fill(0),
  // Reserved
  O(1)
  // Data reference index
], [
  Cu[e.track.source._codec](e)
]), Xd = (r) => z("vttC", [
  ...J.encode(r.info.config.description)
]), Yd = (r) => K("stts", 0, 0, [
  E(r.timeToSampleTable.length),
  // Number of entries
  r.timeToSampleTable.map((e) => [
    E(e.sampleCount),
    // Sample count
    E(e.sampleDelta)
    // Sample duration
  ])
]), Zd = (r) => {
  if (r.samples.every((t) => t.type === "key"))
    return null;
  const e = [...r.samples.entries()].filter(([, t]) => t.type === "key");
  return K("stss", 0, 0, [
    E(e.length),
    // Number of entries
    e.map(([t]) => E(t + 1))
    // Sync sample table
  ]);
}, Jd = (r) => K("stsc", 0, 0, [
  E(r.compactlyCodedChunkTable.length),
  // Number of entries
  r.compactlyCodedChunkTable.map((e) => [
    E(e.firstChunk),
    // First chunk
    E(e.samplesPerChunk),
    // Samples per chunk
    E(1)
    // Sample description index
  ])
]), eu = (r) => {
  if (r.type === "audio" && r.info.requiresPcmTransformation) {
    const { sampleSize: e } = We(r.track.source._codec);
    return K("stsz", 0, 0, [
      E(e * r.info.numberOfChannels),
      // Sample size
      E(r.samples.reduce((t, i) => t + ne(i.duration, r.timescale), 0))
    ]);
  }
  return K("stsz", 0, 0, [
    E(0),
    // Sample size (0 means non-constant size)
    E(r.samples.length),
    // Number of entries
    r.samples.map((e) => E(e.size))
    // Sample size table
  ]);
}, tu = (r) => r.finalizedChunks.length > 0 && ee(r.finalizedChunks).offset >= 2 ** 32 ? K("co64", 0, 0, [
  E(r.finalizedChunks.length),
  // Number of entries
  r.finalizedChunks.map((e) => Ft(e.offset))
  // Chunk offset table
]) : K("stco", 0, 0, [
  E(r.finalizedChunks.length),
  // Number of entries
  r.finalizedChunks.map((e) => E(e.offset))
  // Chunk offset table
]), ru = (r) => K("ctts", 1, 0, [
  E(r.compositionTimeOffsetTable.length),
  // Number of entries
  r.compositionTimeOffsetTable.map((e) => [
    E(e.sampleCount),
    // Sample count
    ot(e.sampleCompositionTimeOffset)
    // Sample offset
  ])
]), iu = (r) => {
  let e = 1 / 0, t = -1 / 0, i = 1 / 0, s = -1 / 0;
  p(r.compositionTimeOffsetTable.length > 0), p(r.samples.length > 0);
  for (let a = 0; a < r.compositionTimeOffsetTable.length; a++) {
    const o = r.compositionTimeOffsetTable[a];
    e = Math.min(e, o.sampleCompositionTimeOffset), t = Math.max(t, o.sampleCompositionTimeOffset);
  }
  for (let a = 0; a < r.samples.length; a++) {
    const o = r.samples[a];
    i = Math.min(i, ne(o.timestamp, r.timescale)), s = Math.max(s, ne(o.timestamp + o.duration, r.timescale));
  }
  const n = Math.max(-e, 0);
  return s >= 2 ** 31 ? null : K("cslg", 0, 0, [
    ot(n),
    // Composition to DTS shift
    ot(e),
    // Least decode to display delta
    ot(t),
    // Greatest decode to display delta
    ot(i),
    // Composition start time
    ot(s)
    // Composition end time
  ]);
}, su = (r) => z("mvex", void 0, r.map(nu)), nu = (r) => K("trex", 0, 0, [
  E(r.track.id),
  // Track ID
  E(1),
  // Default sample description index
  E(0),
  // Default sample duration
  E(0),
  // Default sample size
  E(0)
  // Default sample flags
]), Nn = (r, e) => z("moof", void 0, [
  au(r),
  ...e.map(ou)
]), au = (r) => K("mfhd", 0, 0, [
  E(r)
  // Sequence number
]), _o = (r) => {
  let e = 0, t = 0;
  const i = 0, s = 0, n = r.type === "delta";
  return t |= +n, n ? e |= 1 : e |= 2, e << 24 | t << 16 | i << 8 | s;
}, ou = (r) => z("traf", void 0, [
  cu(r),
  lu(r),
  du(r)
]), cu = (r) => {
  p(r.currentChunk);
  let e = 0;
  e |= 8, e |= 16, e |= 32, e |= 131072;
  const t = r.currentChunk.samples[1] ?? r.currentChunk.samples[0], i = {
    duration: t.timescaleUnitsToNextSample,
    size: t.size,
    flags: _o(t)
  };
  return K("tfhd", 0, e, [
    E(r.track.id),
    // Track ID
    E(i.duration),
    // Default sample duration
    E(i.size),
    // Default sample size
    E(i.flags)
    // Default sample flags
  ]);
}, lu = (r) => (p(r.currentChunk), K("tfdt", 1, 0, [
  Ft(ne(r.currentChunk.startTimestamp, r.timescale))
  // Base Media Decode Time
])), du = (r) => {
  p(r.currentChunk);
  const e = r.currentChunk.samples.map((f) => f.timescaleUnitsToNextSample), t = r.currentChunk.samples.map((f) => f.size), i = r.currentChunk.samples.map(_o), s = r.currentChunk.samples.map((f) => ne(f.timestamp - f.decodeTimestamp, r.timescale)), n = new Set(e), a = new Set(t), o = new Set(i), c = new Set(s), l = o.size === 2 && i[0] !== i[1], d = n.size > 1, u = a.size > 1, h = !l && o.size > 1, m = c.size > 1 || [...c].some((f) => f !== 0);
  let g = 0;
  return g |= 1, g |= 4 * +l, g |= 256 * +d, g |= 512 * +u, g |= 1024 * +h, g |= 2048 * +m, K("trun", 1, g, [
    E(r.currentChunk.samples.length),
    // Sample count
    E(r.currentChunk.offset - r.currentChunk.moofOffset || 0),
    // Data offset
    l ? E(i[0]) : [],
    r.currentChunk.samples.map((f, w) => [
      d ? E(e[w]) : [],
      // Sample duration
      u ? E(t[w]) : [],
      // Sample size
      h ? E(i[w]) : [],
      // Sample flags
      // Sample composition time offsets
      m ? ot(s[w]) : []
    ])
  ]);
}, uu = (r) => z("mfra", void 0, [
  ...r.map(hu),
  fu()
]), hu = (r, e) => K("tfra", 1, 0, [
  E(r.track.id),
  // Track ID
  E(63),
  // This specifies that traf number, trun number and sample number are 32-bit ints
  E(r.finalizedChunks.length),
  // Number of entries
  r.finalizedChunks.map((i) => [
    Ft(ne(i.samples[0].timestamp, r.timescale)),
    // Time (in presentation time)
    Ft(i.moofOffset),
    // moof offset
    E(e + 1),
    // traf number
    E(1),
    // trun number
    E(1)
    // Sample number
  ])
]), fu = () => K("mfro", 0, 0, [
  // This value needs to be overwritten manually from the outside, where the actual size of the enclosing mfra box
  // is known
  E(0)
  // Size
]), mu = () => z("vtte"), pu = (r, e, t, i, s) => z("vttc", void 0, [
  s !== null ? z("vsid", [ot(s)]) : null,
  t !== null ? z("iden", [...J.encode(t)]) : null,
  e !== null ? z("ctim", [...J.encode(yo(e))]) : null,
  i !== null ? z("sttg", [...J.encode(i)]) : null,
  z("payl", [...J.encode(r)])
]), gu = (r) => z("vtta", [...J.encode(r)]), wu = (r) => {
  const e = [], t = r.format._options.metadataFormat ?? "auto", i = r.output._metadataTags;
  if (t === "mdir" || t === "auto" && !r.isQuickTime) {
    const s = ku(i);
    s && e.push(s);
  } else if (t === "mdta") {
    const s = yu(i);
    s && e.push(s);
  } else (t === "udta" || t === "auto" && r.isQuickTime) && bu(e, r.output._metadataTags);
  return e.length === 0 ? null : z("udta", void 0, e);
}, bu = (r, e) => {
  for (const { key: t, value: i } of er(e))
    switch (t) {
      case "title":
        r.push(Ue("©nam", i));
        break;
      case "description":
        r.push(Ue("©des", i));
        break;
      case "artist":
        r.push(Ue("©ART", i));
        break;
      case "album":
        r.push(Ue("©alb", i));
        break;
      case "albumArtist":
        r.push(Ue("albr", i));
        break;
      case "genre":
        r.push(Ue("©gen", i));
        break;
      case "date":
        r.push(Ue("©day", i.toISOString().slice(0, 10)));
        break;
      case "comment":
        r.push(Ue("©cmt", i));
        break;
      case "lyrics":
        r.push(Ue("©lyr", i));
        break;
      case "raw":
        break;
      case "discNumber":
      case "discsTotal":
      case "trackNumber":
      case "tracksTotal":
      case "images":
        break;
      default:
        ge(t);
    }
  if (e.raw)
    for (const t in e.raw) {
      const i = e.raw[t];
      i == null || t.length !== 4 || r.some((s) => s.type === t) || (typeof i == "string" ? r.push(Ue(t, i)) : i instanceof Uint8Array && r.push(z(t, Array.from(i))));
    }
}, Ue = (r, e) => {
  const t = J.encode(e);
  return z(r, [
    O(t.length),
    O(vo("und")),
    Array.from(t)
  ]);
}, Vn = {
  "image/jpeg": 13,
  "image/png": 14,
  "image/bmp": 27
}, Io = (r, e) => {
  const t = [];
  for (const { key: i, value: s } of er(r))
    switch (i) {
      case "title":
        t.push({ key: e ? "title" : "©nam", value: Ae(s) });
        break;
      case "description":
        t.push({ key: e ? "description" : "©des", value: Ae(s) });
        break;
      case "artist":
        t.push({ key: e ? "artist" : "©ART", value: Ae(s) });
        break;
      case "album":
        t.push({ key: e ? "album" : "©alb", value: Ae(s) });
        break;
      case "albumArtist":
        t.push({ key: e ? "album_artist" : "aART", value: Ae(s) });
        break;
      case "comment":
        t.push({ key: e ? "comment" : "©cmt", value: Ae(s) });
        break;
      case "genre":
        t.push({ key: e ? "genre" : "©gen", value: Ae(s) });
        break;
      case "lyrics":
        t.push({ key: e ? "lyrics" : "©lyr", value: Ae(s) });
        break;
      case "date":
        t.push({
          key: e ? "date" : "©day",
          value: Ae(s.toISOString().slice(0, 10))
        });
        break;
      case "images":
        for (const n of s)
          n.kind === "coverFront" && t.push({ key: "covr", value: z("data", [
            E(Vn[n.mimeType] ?? 0),
            // Type indicator
            E(0),
            // Locale indicator
            Array.from(n.data)
            // Kinda slow, hopefully temp
          ]) });
        break;
      case "trackNumber":
        if (e) {
          const n = r.tracksTotal !== void 0 ? `${s}/${r.tracksTotal}` : s.toString();
          t.push({ key: "track", value: Ae(n) });
        } else
          t.push({ key: "trkn", value: z("data", [
            E(0),
            // 8 bytes empty
            E(0),
            O(0),
            // Empty
            O(s),
            O(r.tracksTotal ?? 0),
            O(0)
            // Empty
          ]) });
        break;
      case "discNumber":
        e || t.push({ key: "disc", value: z("data", [
          E(0),
          // 8 bytes empty
          E(0),
          O(0),
          // Empty
          O(s),
          O(r.discsTotal ?? 0),
          O(0)
          // Empty
        ]) });
        break;
      case "tracksTotal":
      case "discsTotal":
        break;
      case "raw":
        break;
      default:
        ge(i);
    }
  if (r.raw)
    for (const i in r.raw) {
      const s = r.raw[i];
      s == null || !e && i.length !== 4 || t.some((n) => n.key === i) || (typeof s == "string" ? t.push({ key: i, value: Ae(s) }) : s instanceof Uint8Array ? t.push({ key: i, value: z("data", [
        E(0),
        // Type indicator
        E(0),
        // Locale indicator
        Array.from(s)
      ]) }) : s instanceof It && t.push({ key: i, value: z("data", [
        E(Vn[s.mimeType] ?? 0),
        // Type indicator
        E(0),
        // Locale indicator
        Array.from(s.data)
        // Kinda slow, hopefully temp
      ]) }));
    }
  return t;
}, ku = (r) => {
  const e = Io(r, !1);
  return e.length === 0 ? null : K("meta", 0, 0, void 0, [
    Gs(!1, "mdir", "", "appl"),
    // mdir handler
    z("ilst", void 0, e.map((t) => z(t.key, void 0, [t.value])))
    // Item list without keys box
  ]);
}, yu = (r) => {
  const e = Io(r, !0);
  return e.length === 0 ? null : z("meta", void 0, [
    Gs(!1, "mdta", ""),
    // mdta handler
    K("keys", 0, 0, [
      E(e.length)
    ], e.map((t) => z("mdta", [
      ...J.encode(t.key)
    ]))),
    z("ilst", void 0, e.map((t, i) => {
      const s = String.fromCharCode(...E(i + 1));
      return z(s, void 0, [t.value]);
    }))
  ]);
}, Ae = (r) => z("data", [
  E(1),
  // Type indicator (UTF-8)
  E(0),
  // Locale indicator
  ...J.encode(r)
]), Tu = (r, e) => {
  switch (r) {
    case "avc":
      return e.startsWith("avc3") ? "avc3" : "avc1";
    case "hevc":
      return "hvc1";
    case "vp8":
      return "vp08";
    case "vp9":
      return "vp09";
    case "av1":
      return "av01";
  }
}, Su = {
  avc: Nd,
  hevc: Vd,
  vp8: Un,
  vp9: Un,
  av1: Wd
}, Eo = (r, e) => {
  switch (r) {
    case "aac":
      return "mp4a";
    case "mp3":
      return "mp4a";
    case "opus":
      return "Opus";
    case "vorbis":
      return "mp4a";
    case "flac":
      return "fLaC";
    case "ulaw":
      return "ulaw";
    case "alaw":
      return "alaw";
    case "pcm-u8":
      return "raw ";
    case "pcm-s8":
      return "sowt";
    case "ac3":
      return "ac-3";
    case "eac3":
      return "ec-3";
  }
  if (e)
    switch (r) {
      case "pcm-s16":
        return "sowt";
      case "pcm-s16be":
        return "twos";
      case "pcm-s24":
        return "in24";
      case "pcm-s24be":
        return "in24";
      case "pcm-s32":
        return "in32";
      case "pcm-s32be":
        return "in32";
      case "pcm-f32":
        return "fl32";
      case "pcm-f32be":
        return "fl32";
      case "pcm-f64":
        return "fl64";
      case "pcm-f64be":
        return "fl64";
    }
  else
    switch (r) {
      case "pcm-s16":
        return "ipcm";
      case "pcm-s16be":
        return "ipcm";
      case "pcm-s24":
        return "ipcm";
      case "pcm-s24be":
        return "ipcm";
      case "pcm-s32":
        return "ipcm";
      case "pcm-s32be":
        return "ipcm";
      case "pcm-f32":
        return "fpcm";
      case "pcm-f32be":
        return "fpcm";
      case "pcm-f64":
        return "fpcm";
      case "pcm-f64be":
        return "fpcm";
    }
}, xu = (r, e) => {
  switch (r) {
    case "aac":
      return Ni;
    case "mp3":
      return Ni;
    case "opus":
      return jd;
    case "vorbis":
      return Ni;
    case "flac":
      return $d;
    case "ac3":
      return Qd;
    case "eac3":
      return Kd;
  }
  if (e)
    switch (r) {
      case "pcm-s24":
        return it;
      case "pcm-s24be":
        return it;
      case "pcm-s32":
        return it;
      case "pcm-s32be":
        return it;
      case "pcm-f32":
        return it;
      case "pcm-f32be":
        return it;
      case "pcm-f64":
        return it;
      case "pcm-f64be":
        return it;
    }
  else
    switch (r) {
      case "pcm-s16":
        return Oe;
      case "pcm-s16be":
        return Oe;
      case "pcm-s24":
        return Oe;
      case "pcm-s24be":
        return Oe;
      case "pcm-s32":
        return Oe;
      case "pcm-s32be":
        return Oe;
      case "pcm-f32":
        return Oe;
      case "pcm-f32be":
        return Oe;
      case "pcm-f64":
        return Oe;
      case "pcm-f64be":
        return Oe;
    }
  return null;
}, Pu = {
  webvtt: "wvtt"
}, Cu = {
  webvtt: Xd
}, vo = (r) => {
  p(r.length === 3);
  let e = 0;
  for (let t = 0; t < 3; t++)
    e <<= 5, e += r.charCodeAt(t) - 96;
  return e;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Xs {
  constructor() {
    this.ensureMonotonicity = !1, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1;
  }
  start() {
  }
  maybeTrackWrites(e) {
    if (!this.trackedWrites)
      return;
    let t = this.getPos();
    if (t < this.trackedStart) {
      if (t + e.byteLength <= this.trackedStart)
        return;
      e = e.subarray(this.trackedStart - t), t = 0;
    }
    const i = t + e.byteLength - this.trackedStart;
    let s = this.trackedWrites.byteLength;
    for (; s < i; )
      s *= 2;
    if (s !== this.trackedWrites.byteLength) {
      const n = new Uint8Array(s);
      n.set(this.trackedWrites, 0), this.trackedWrites = n;
    }
    this.trackedWrites.set(e, t - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, t + e.byteLength);
  }
  startTrackingWrites() {
    this.trackedWrites = new Uint8Array(2 ** 10), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart;
  }
  stopTrackingWrites() {
    if (!this.trackedWrites)
      throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
    const t = {
      data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
      start: this.trackedStart,
      end: this.trackedEnd
    };
    return this.trackedWrites = null, t;
  }
}
const Vi = 2 ** 16, Wi = 2 ** 32;
class Ao extends Xs {
  constructor(e) {
    if (super(), this.pos = 0, this.maxPos = 0, this.target = e, this.supportsResize = "resize" in new ArrayBuffer(0), this.supportsResize)
      try {
        this.buffer = new ArrayBuffer(Vi, { maxByteLength: Wi });
      } catch {
        this.buffer = new ArrayBuffer(Vi), this.supportsResize = !1;
      }
    else
      this.buffer = new ArrayBuffer(Vi);
    this.bytes = new Uint8Array(this.buffer);
  }
  ensureSize(e) {
    let t = this.buffer.byteLength;
    for (; t < e; )
      t *= 2;
    if (t !== this.buffer.byteLength) {
      if (t > Wi)
        throw new Error(`ArrayBuffer exceeded maximum size of ${Wi} bytes. Please consider using another target.`);
      if (this.supportsResize)
        this.buffer.resize(t);
      else {
        const i = new ArrayBuffer(t), s = new Uint8Array(i);
        s.set(this.bytes, 0), this.buffer = i, this.bytes = s;
      }
    }
  }
  write(e) {
    this.maybeTrackWrites(e), this.ensureSize(this.pos + e.byteLength), this.bytes.set(e, this.pos), this.target.onwrite?.(this.pos, this.pos + e.byteLength), this.pos += e.byteLength, this.maxPos = Math.max(this.maxPos, this.pos);
  }
  seek(e) {
    this.pos = e;
  }
  getPos() {
    return this.pos;
  }
  async flush() {
  }
  async finalize() {
    this.ensureSize(this.pos), this.target.buffer = this.buffer.slice(0, Math.max(this.maxPos, this.pos));
  }
  async close() {
  }
  getSlice(e, t) {
    return this.bytes.slice(e, t);
  }
}
const _u = 2 ** 24, Iu = 2;
class Eu extends Xs {
  constructor(e) {
    super(), this.pos = 0, this.sections = [], this.lastWriteEnd = 0, this.lastFlushEnd = 0, this.writer = null, this.writeError = null, this.chunks = [], this.target = e, this.chunked = e._options.chunked ?? !1, this.chunkSize = e._options.chunkSize ?? _u;
  }
  start() {
    this.writer = this.target._writable.getWriter();
  }
  write(e) {
    if (this.pos > this.lastWriteEnd) {
      const t = this.pos - this.lastWriteEnd;
      this.pos = this.lastWriteEnd, this.write(new Uint8Array(t));
    }
    this.maybeTrackWrites(e), this.sections.push({
      data: e.slice(),
      start: this.pos
    }), this.target.onwrite?.(this.pos, this.pos + e.byteLength), this.pos += e.byteLength, this.lastWriteEnd = Math.max(this.lastWriteEnd, this.pos);
  }
  seek(e) {
    this.pos = e;
  }
  getPos() {
    return this.pos;
  }
  async flush() {
    if (this.writeError !== null)
      throw this.writeError;
    if (this.pos > this.lastWriteEnd) {
      const i = this.pos - this.lastWriteEnd;
      this.pos = this.lastWriteEnd, this.write(new Uint8Array(i));
    }
    if (p(this.writer), this.sections.length === 0)
      return;
    const e = [], t = [...this.sections].sort((i, s) => i.start - s.start);
    e.push({
      start: t[0].start,
      size: t[0].data.byteLength
    });
    for (let i = 1; i < t.length; i++) {
      const s = e[e.length - 1], n = t[i];
      n.start <= s.start + s.size ? s.size = Math.max(s.size, n.start + n.data.byteLength - s.start) : e.push({
        start: n.start,
        size: n.data.byteLength
      });
    }
    for (const i of e) {
      i.data = new Uint8Array(i.size);
      for (const s of this.sections)
        i.start <= s.start && s.start < i.start + i.size && i.data.set(s.data, s.start - i.start);
      if (this.writer.desiredSize !== null && this.writer.desiredSize <= 0 && await this.writer.ready, this.chunked)
        this.writeDataIntoChunks(i.data, i.start), this.tryToFlushChunks();
      else {
        if (this.ensureMonotonicity && i.start !== this.lastFlushEnd)
          throw new Error("Internal error: Monotonicity violation.");
        this.writer.write({
          type: "write",
          data: i.data,
          position: i.start
        }).catch((s) => {
          this.writeError ??= s;
        }), this.lastFlushEnd = i.start + i.data.byteLength;
      }
    }
    this.sections.length = 0;
  }
  writeDataIntoChunks(e, t) {
    let i = this.chunks.findIndex((c) => c.start <= t && t < c.start + this.chunkSize);
    i === -1 && (i = this.createChunk(t));
    const s = this.chunks[i], n = t - s.start, a = e.subarray(0, Math.min(this.chunkSize - n, e.byteLength));
    s.data.set(a, n);
    const o = {
      start: n,
      end: n + a.byteLength
    };
    if (this.insertSectionIntoChunk(s, o), s.written[0].start === 0 && s.written[0].end === this.chunkSize && (s.shouldFlush = !0), this.chunks.length > Iu) {
      for (let c = 0; c < this.chunks.length - 1; c++)
        this.chunks[c].shouldFlush = !0;
      this.tryToFlushChunks();
    }
    a.byteLength < e.byteLength && this.writeDataIntoChunks(e.subarray(a.byteLength), t + a.byteLength);
  }
  insertSectionIntoChunk(e, t) {
    let i = 0, s = e.written.length - 1, n = -1;
    for (; i <= s; ) {
      const a = Math.floor(i + (s - i + 1) / 2);
      e.written[a].start <= t.start ? (i = a + 1, n = a) : s = a - 1;
    }
    for (e.written.splice(n + 1, 0, t), (n === -1 || e.written[n].end < t.start) && n++; n < e.written.length - 1 && e.written[n].end >= e.written[n + 1].start; )
      e.written[n].end = Math.max(e.written[n].end, e.written[n + 1].end), e.written.splice(n + 1, 1);
  }
  createChunk(e) {
    const i = {
      start: Math.floor(e / this.chunkSize) * this.chunkSize,
      data: new Uint8Array(this.chunkSize),
      written: [],
      shouldFlush: !1
    };
    return this.chunks.push(i), this.chunks.sort((s, n) => s.start - n.start), this.chunks.indexOf(i);
  }
  tryToFlushChunks(e = !1) {
    p(this.writer);
    for (let t = 0; t < this.chunks.length; t++) {
      const i = this.chunks[t];
      if (!(!i.shouldFlush && !e)) {
        for (const s of i.written) {
          const n = i.start + s.start;
          if (this.ensureMonotonicity && n !== this.lastFlushEnd)
            throw new Error("Internal error: Monotonicity violation.");
          this.writer.write({
            type: "write",
            data: i.data.subarray(s.start, s.end),
            position: n
          }).catch((a) => {
            this.writeError ??= a;
          }), this.lastFlushEnd = i.start + s.end;
        }
        this.chunks.splice(t--, 1);
      }
    }
  }
  async finalize() {
    if (this.chunked && this.tryToFlushChunks(!0), this.writeError !== null)
      throw this.writeError;
    return p(this.writer), await this.writer.ready, this.writer.close();
  }
  async close() {
    return this.writer?.close();
  }
}
class vu extends Xs {
  constructor(e) {
    super(), this.target = e, this.pos = 0;
  }
  write(e) {
    this.maybeTrackWrites(e), this.target.onwrite?.(this.pos, this.pos + e.byteLength), this.pos += e.byteLength;
  }
  getPos() {
    return this.pos;
  }
  seek(e) {
    this.pos = e;
  }
  async flush() {
  }
  async finalize() {
  }
  async close() {
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Au = typeof Zr < "u" ? Zr : void 0;
class nr {
  constructor() {
    this._output = null, this.onwrite = null;
  }
}
class Fo extends nr {
  constructor() {
    super(...arguments), this.buffer = null;
  }
  /** @internal */
  _createWriter() {
    return new Ao(this);
  }
}
class Bo extends nr {
  /** Creates a new {@link StreamTarget} which writes to the specified `writable`. */
  constructor(e, t = {}) {
    if (super(), !(e instanceof WritableStream))
      throw new TypeError("StreamTarget requires a WritableStream instance.");
    if (t != null && typeof t != "object")
      throw new TypeError("StreamTarget options, when provided, must be an object.");
    if (t.chunked !== void 0 && typeof t.chunked != "boolean")
      throw new TypeError("options.chunked, when provided, must be a boolean.");
    if (t.chunkSize !== void 0 && (!Number.isInteger(t.chunkSize) || t.chunkSize < 1024))
      throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.");
    this._writable = e, this._options = t;
  }
  /** @internal */
  _createWriter() {
    return new Eu(this);
  }
}
class Fu extends nr {
  /** Creates a new {@link FilePathTarget} that writes to the file at the specified file path. */
  constructor(e, t = {}) {
    if (typeof e != "string")
      throw new TypeError("filePath must be a string.");
    if (!t || typeof t != "object")
      throw new TypeError("options must be an object.");
    super(), this._fileHandle = null;
    const i = new WritableStream({
      start: async () => {
        this._fileHandle = await Au.fs.open(e, "w");
      },
      write: async (s) => {
        p(this._fileHandle), await this._fileHandle.write(s.data, 0, s.data.byteLength, s.position);
      },
      close: async () => {
        this._fileHandle && (await this._fileHandle.close(), this._fileHandle = null);
      }
    });
    this._streamTarget = new Bo(i, {
      chunked: !0,
      ...t
    }), this._streamTarget._output = this._output;
  }
  /** @internal */
  _createWriter() {
    return this._streamTarget._createWriter();
  }
}
class Ro extends nr {
  /** @internal */
  _createWriter() {
    return new vu(this);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const hs = 1e3, Bu = 2082844800, Ru = (r) => {
  const e = {}, t = r.track;
  return t.metadata.name !== void 0 && (e.name = t.metadata.name), e;
}, ne = (r, e, t = !0) => {
  const i = r * e;
  return t ? Math.round(i) : i;
};
class Mu extends gt {
  constructor(e, t) {
    super(e), this.auxTarget = new Fo(), this.auxWriter = this.auxTarget._createWriter(), this.auxBoxWriter = new On(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = re(), this.creationTime = Math.floor(Date.now() / 1e3) + Bu, this.finalizedChunks = [], this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.format = t, this.writer = e._writer, this.boxWriter = new On(this.writer), this.isQuickTime = t instanceof Js;
    const i = this.writer instanceof Ao ? "in-memory" : !1;
    this.fastStart = t._options.fastStart ?? i, this.isFragmented = this.fastStart === "fragmented", (this.fastStart === "in-memory" || this.isFragmented) && (this.writer.ensureMonotonicity = !0), this.minimumFragmentDuration = t._options.minimumFragmentDuration ?? 1;
  }
  async start() {
    const e = await this.mutex.acquire(), t = this.output._tracks.some((i) => i.type === "video" && i.source._codec === "avc");
    if (this.format._options.onFtyp && this.writer.startTrackingWrites(), this.boxWriter.writeBox(wd({
      isQuickTime: this.isQuickTime,
      holdsAvc: t,
      fragmented: this.isFragmented
    })), this.format._options.onFtyp) {
      const { data: i, start: s } = this.writer.stopTrackingWrites();
      this.format._options.onFtyp(i, s);
    }
    if (this.ftypSize = this.writer.getPos(), this.fastStart !== "in-memory") if (this.fastStart === "reserve") {
      for (const i of this.output._tracks)
        if (i.metadata.maximumPacketCount === void 0)
          throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.");
    } else this.isFragmented || (this.format._options.onMdat && this.writer.startTrackingWrites(), this.mdat = Or(!0), this.boxWriter.writeBox(this.mdat));
    await this.writer.flush(), e();
  }
  allTracksAreKnown() {
    for (const e of this.output._tracks)
      if (!e.source._closed && !this.trackDatas.some((t) => t.track === e))
        return !1;
    return !0;
  }
  async getMimeType() {
    await this.allTracksKnown.promise;
    const e = this.trackDatas.map((t) => t.type === "video" || t.type === "audio" ? t.info.decoderConfig.codec : {
      webvtt: "wvtt"
    }[t.track.source._codec]);
    return Ba({
      isQuickTime: this.isQuickTime,
      hasVideo: this.trackDatas.some((t) => t.type === "video"),
      hasAudio: this.trackDatas.some((t) => t.type === "audio"),
      codecStrings: e
    });
  }
  getVideoTrackData(e, t, i) {
    const s = this.trackDatas.find((h) => h.track === e);
    if (s)
      return s;
    Is(i), p(i), p(i.decoderConfig);
    const n = { ...i.decoderConfig };
    p(n.codedWidth !== void 0), p(n.codedHeight !== void 0);
    let a = !1;
    if (e.source._codec === "avc" && !n.description) {
      const h = As(t.data);
      if (!h)
        throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
      n.description = Nc(h), a = !0;
    } else if (e.source._codec === "hevc" && !n.description) {
      const h = Bs(t.data);
      if (!h)
        throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
      n.description = $c(h), a = !0;
    }
    const o = mc(1 / (e.metadata.frameRate ?? 57600), 1e6).denominator, c = n.displayAspectWidth, l = n.displayAspectHeight, d = c === void 0 || l === void 0 ? { num: 1, den: 1 } : ai({
      num: c * n.codedHeight,
      den: l * n.codedWidth
    }), u = {
      muxer: this,
      track: e,
      type: "video",
      info: {
        width: n.codedWidth,
        height: n.codedHeight,
        pixelAspectRatio: d,
        decoderConfig: n,
        requiresAnnexBTransformation: a
      },
      timescale: o,
      samples: [],
      sampleQueue: [],
      timestampProcessingQueue: [],
      timeToSampleTable: [],
      compositionTimeOffsetTable: [],
      lastTimescaleUnits: null,
      lastSample: null,
      finalizedChunks: [],
      currentChunk: null,
      compactlyCodedChunkTable: []
    };
    return this.trackDatas.push(u), this.trackDatas.sort((h, m) => h.track.id - m.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), u;
  }
  getAudioTrackData(e, t, i) {
    const s = this.trackDatas.find((c) => c.track === e);
    if (s)
      return s;
    zt(i), p(i), p(i.decoderConfig);
    const n = { ...i.decoderConfig };
    let a = !1;
    if (e.source._codec === "aac" && !n.description) {
      const c = Je(ye.tempFromBytes(t.data));
      if (!c)
        throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
      const l = ht[c.samplingFrequencyIndex], d = rr[c.channelConfiguration];
      if (l === void 0 || d === void 0)
        throw new Error("Invalid ADTS frame header.");
      n.description = Ps({
        objectType: c.objectType,
        sampleRate: l,
        numberOfChannels: d
      }), a = !0;
    }
    const o = {
      muxer: this,
      track: e,
      type: "audio",
      info: {
        numberOfChannels: i.decoderConfig.numberOfChannels,
        sampleRate: i.decoderConfig.sampleRate,
        decoderConfig: n,
        requiresPcmTransformation: !this.isFragmented && se.includes(e.source._codec),
        requiresAdtsStripping: a,
        firstPacket: t
      },
      timescale: n.sampleRate,
      samples: [],
      sampleQueue: [],
      timestampProcessingQueue: [],
      timeToSampleTable: [],
      compositionTimeOffsetTable: [],
      lastTimescaleUnits: null,
      lastSample: null,
      finalizedChunks: [],
      currentChunk: null,
      compactlyCodedChunkTable: []
    };
    return this.trackDatas.push(o), this.trackDatas.sort((c, l) => c.track.id - l.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), o;
  }
  getSubtitleTrackData(e, t) {
    const i = this.trackDatas.find((n) => n.track === e);
    if (i)
      return i;
    oa(t), p(t), p(t.config);
    const s = {
      muxer: this,
      track: e,
      type: "subtitle",
      info: {
        config: t.config
      },
      timescale: 1e3,
      // Reasonable
      samples: [],
      sampleQueue: [],
      timestampProcessingQueue: [],
      timeToSampleTable: [],
      compositionTimeOffsetTable: [],
      lastTimescaleUnits: null,
      lastSample: null,
      finalizedChunks: [],
      currentChunk: null,
      compactlyCodedChunkTable: [],
      lastCueEndTimestamp: 0,
      cueQueue: [],
      nextSourceId: 0,
      cueToSourceId: /* @__PURE__ */ new WeakMap()
    };
    return this.trackDatas.push(s), this.trackDatas.sort((n, a) => n.track.id - a.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), s;
  }
  async addEncodedVideoPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getVideoTrackData(e, t, i);
      let a = t.data;
      if (n.info.requiresAnnexBTransformation) {
        const l = [...sr(a)].map((d) => a.subarray(d.offset, d.offset + d.length));
        if (l.length === 0)
          throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
        a = da(l, 4);
      }
      const o = this.validateAndNormalizeTimestamp(n.track, t.timestamp, t.type === "key"), c = this.createSampleForTrack(n, a, o, t.duration, t.type);
      await this.registerSample(n, c);
    } finally {
      s();
    }
  }
  async addEncodedAudioPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getAudioTrackData(e, t, i);
      let a = t.data;
      if (n.info.requiresAdtsStripping) {
        const l = Je(ye.tempFromBytes(a));
        if (!l)
          throw new Error("Expected ADTS frame, didn't get one.");
        const d = l.crcCheck === null ? Er : ut;
        a = a.subarray(d);
      }
      const o = this.validateAndNormalizeTimestamp(n.track, t.timestamp, t.type === "key"), c = this.createSampleForTrack(n, a, o, t.duration, t.type);
      n.info.requiresPcmTransformation && await this.maybePadWithSilence(n, o), await this.registerSample(n, c);
    } finally {
      s();
    }
  }
  async maybePadWithSilence(e, t) {
    const i = ee(e.samples), s = i ? i.timestamp + i.duration : 0, n = t - s, a = ne(n, e.timescale);
    if (a > 0) {
      const { sampleSize: o, silentValue: c } = We(e.info.decoderConfig.codec), l = a * e.info.numberOfChannels, d = new Uint8Array(o * l).fill(c), u = this.createSampleForTrack(e, new Uint8Array(d.buffer), s, n, "key");
      await this.registerSample(e, u);
    }
  }
  async addSubtitleCue(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getSubtitleTrackData(e, i);
      this.validateAndNormalizeTimestamp(n.track, t.timestamp, !0), e.source._codec === "webvtt" && (n.cueQueue.push(t), await this.processWebVTTCues(n, t.timestamp));
    } finally {
      s();
    }
  }
  async processWebVTTCues(e, t) {
    for (; e.cueQueue.length > 0; ) {
      const i = /* @__PURE__ */ new Set([]);
      for (const l of e.cueQueue)
        p(l.timestamp <= t), p(e.lastCueEndTimestamp <= l.timestamp + l.duration), i.add(Math.max(l.timestamp, e.lastCueEndTimestamp)), i.add(l.timestamp + l.duration);
      const s = [...i].sort((l, d) => l - d), n = s[0], a = s[1] ?? n;
      if (t < a)
        break;
      if (e.lastCueEndTimestamp < n) {
        this.auxWriter.seek(0);
        const l = mu();
        this.auxBoxWriter.writeBox(l);
        const d = this.auxWriter.getSlice(0, this.auxWriter.getPos()), u = this.createSampleForTrack(e, d, e.lastCueEndTimestamp, n - e.lastCueEndTimestamp, "key");
        await this.registerSample(e, u), e.lastCueEndTimestamp = n;
      }
      this.auxWriter.seek(0);
      for (let l = 0; l < e.cueQueue.length; l++) {
        const d = e.cueQueue[l];
        if (d.timestamp >= a)
          break;
        Jr.lastIndex = 0;
        const u = Jr.test(d.text), h = d.timestamp + d.duration;
        let m = e.cueToSourceId.get(d);
        if (m === void 0 && a < h && (m = e.nextSourceId++, e.cueToSourceId.set(d, m)), d.notes) {
          const f = gu(d.notes);
          this.auxBoxWriter.writeBox(f);
        }
        const g = pu(d.text, u ? n : null, d.identifier ?? null, d.settings ?? null, m ?? null);
        this.auxBoxWriter.writeBox(g), h === a && e.cueQueue.splice(l--, 1);
      }
      const o = this.auxWriter.getSlice(0, this.auxWriter.getPos()), c = this.createSampleForTrack(e, o, n, a - n, "key");
      await this.registerSample(e, c), e.lastCueEndTimestamp = a;
    }
  }
  createSampleForTrack(e, t, i, s, n) {
    return {
      timestamp: i,
      decodeTimestamp: i,
      // This may be refined later
      duration: s,
      data: t,
      size: t.byteLength,
      type: n,
      timescaleUnitsToNextSample: ne(s, e.timescale)
      // Will be refined
    };
  }
  processTimestamps(e, t) {
    if (e.timestampProcessingQueue.length === 0)
      return;
    if (e.type === "audio" && e.info.requiresPcmTransformation) {
      let s = 0;
      for (let n = 0; n < e.timestampProcessingQueue.length; n++) {
        const a = e.timestampProcessingQueue[n], o = ne(a.duration, e.timescale);
        s += o;
      }
      if (e.timeToSampleTable.length === 0)
        e.timeToSampleTable.push({
          sampleCount: s,
          sampleDelta: 1
        });
      else {
        const n = ee(e.timeToSampleTable);
        n.sampleCount += s;
      }
      e.timestampProcessingQueue.length = 0;
      return;
    }
    const i = e.timestampProcessingQueue.map((s) => s.timestamp).sort((s, n) => s - n);
    for (let s = 0; s < e.timestampProcessingQueue.length; s++) {
      const n = e.timestampProcessingQueue[s];
      n.decodeTimestamp = i[s], !this.isFragmented && e.lastTimescaleUnits === null && (n.decodeTimestamp = 0);
      const a = ne(n.timestamp - n.decodeTimestamp, e.timescale), o = ne(n.duration, e.timescale);
      if (e.lastTimescaleUnits !== null) {
        p(e.lastSample);
        const c = ne(n.decodeTimestamp, e.timescale, !1), l = Math.round(c - e.lastTimescaleUnits);
        if (p(l >= 0), e.lastTimescaleUnits += l, e.lastSample.timescaleUnitsToNextSample = l, !this.isFragmented) {
          let d = ee(e.timeToSampleTable);
          if (p(d), d.sampleCount === 1) {
            d.sampleDelta = l;
            const h = e.timeToSampleTable[e.timeToSampleTable.length - 2];
            h && h.sampleDelta === l && (h.sampleCount++, e.timeToSampleTable.pop(), d = h);
          } else d.sampleDelta !== l && (d.sampleCount--, e.timeToSampleTable.push(d = {
            sampleCount: 1,
            sampleDelta: l
          }));
          d.sampleDelta === o ? d.sampleCount++ : e.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: o
          });
          const u = ee(e.compositionTimeOffsetTable);
          p(u), u.sampleCompositionTimeOffset === a ? u.sampleCount++ : e.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: a
          });
        }
      } else
        e.lastTimescaleUnits = ne(n.decodeTimestamp, e.timescale, !1), this.isFragmented || (e.timeToSampleTable.push({
          sampleCount: 1,
          sampleDelta: o
        }), e.compositionTimeOffsetTable.push({
          sampleCount: 1,
          sampleCompositionTimeOffset: a
        }));
      e.lastSample = n;
    }
    if (e.timestampProcessingQueue.length = 0, p(e.lastSample), p(e.lastTimescaleUnits !== null), t !== void 0 && e.lastSample.timescaleUnitsToNextSample === 0) {
      p(t.type === "key");
      const s = ne(t.timestamp, e.timescale, !1), n = Math.round(s - e.lastTimescaleUnits);
      e.lastSample.timescaleUnitsToNextSample = n;
    }
  }
  async registerSample(e, t) {
    t.type === "key" && this.processTimestamps(e, t), e.timestampProcessingQueue.push(t), this.isFragmented ? (e.sampleQueue.push(t), await this.interleaveSamples()) : this.fastStart === "reserve" ? await this.registerSampleFastStartReserve(e, t) : await this.addSampleToTrack(e, t);
  }
  async addSampleToTrack(e, t) {
    if (!this.isFragmented && (e.samples.push(t), this.fastStart === "reserve")) {
      const s = e.track.metadata.maximumPacketCount;
      if (p(s !== void 0), e.samples.length > s)
        throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${s}). Either add less packets or increase the maximum packet count.`);
    }
    let i = !1;
    if (!e.currentChunk)
      i = !0;
    else {
      e.currentChunk.startTimestamp = Math.min(e.currentChunk.startTimestamp, t.timestamp);
      const s = t.timestamp - e.currentChunk.startTimestamp;
      if (this.isFragmented) {
        const n = this.trackDatas.every((a) => {
          if (e === a)
            return t.type === "key";
          const o = a.sampleQueue[0];
          return o ? o.type === "key" : a.track.source._closed;
        });
        s >= this.minimumFragmentDuration && n && t.timestamp > this.maxWrittenTimestamp && (i = !0, await this.finalizeFragment());
      } else
        i = s >= 0.5;
    }
    i && (e.currentChunk && await this.finalizeCurrentChunk(e), e.currentChunk = {
      startTimestamp: t.timestamp,
      samples: [],
      offset: null,
      moofOffset: null
    }), p(e.currentChunk), e.currentChunk.samples.push(t), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, t.timestamp));
  }
  async finalizeCurrentChunk(e) {
    if (p(!this.isFragmented), !e.currentChunk)
      return;
    e.finalizedChunks.push(e.currentChunk), this.finalizedChunks.push(e.currentChunk);
    let t = e.currentChunk.samples.length;
    if (e.type === "audio" && e.info.requiresPcmTransformation && (t = e.currentChunk.samples.reduce((i, s) => i + ne(s.duration, e.timescale), 0)), (e.compactlyCodedChunkTable.length === 0 || ee(e.compactlyCodedChunkTable).samplesPerChunk !== t) && e.compactlyCodedChunkTable.push({
      firstChunk: e.finalizedChunks.length,
      // 1-indexed
      samplesPerChunk: t
    }), this.fastStart === "in-memory") {
      e.currentChunk.offset = 0;
      return;
    }
    e.currentChunk.offset = this.writer.getPos();
    for (const i of e.currentChunk.samples)
      p(i.data), this.writer.write(i.data), i.data = null;
    await this.writer.flush();
  }
  async interleaveSamples(e = !1) {
    if (p(this.isFragmented), !(!e && !this.allTracksAreKnown()))
      e: for (; ; ) {
        let t = null, i = 1 / 0;
        for (const n of this.trackDatas) {
          if (!e && n.sampleQueue.length === 0 && !n.track.source._closed)
            break e;
          n.sampleQueue.length > 0 && n.sampleQueue[0].timestamp < i && (t = n, i = n.sampleQueue[0].timestamp);
        }
        if (!t)
          break;
        const s = t.sampleQueue.shift();
        await this.addSampleToTrack(t, s);
      }
  }
  async finalizeFragment(e = !0) {
    p(this.isFragmented);
    const t = this.nextFragmentNumber++;
    if (t === 1) {
      this.format._options.onMoov && this.writer.startTrackingWrites();
      const m = fr(this);
      if (this.boxWriter.writeBox(m), this.format._options.onMoov) {
        const { data: g, start: f } = this.writer.stopTrackingWrites();
        this.format._options.onMoov(g, f);
      }
    }
    const i = this.trackDatas.filter((m) => m.currentChunk), s = Nn(t, i), n = this.writer.getPos(), a = n + this.boxWriter.measureBox(s);
    let o = a + Ke, c = 1 / 0;
    for (const m of i) {
      m.currentChunk.offset = o, m.currentChunk.moofOffset = n;
      for (const g of m.currentChunk.samples)
        o += g.size;
      c = Math.min(c, m.currentChunk.startTimestamp);
    }
    const l = o - a, d = l >= 2 ** 32;
    if (d)
      for (const m of i)
        m.currentChunk.offset += Pt - Ke;
    this.format._options.onMoof && this.writer.startTrackingWrites();
    const u = Nn(t, i);
    if (this.boxWriter.writeBox(u), this.format._options.onMoof) {
      const { data: m, start: g } = this.writer.stopTrackingWrites();
      this.format._options.onMoof(m, g, c);
    }
    p(this.writer.getPos() === a), this.format._options.onMdat && this.writer.startTrackingWrites();
    const h = Or(d);
    h.size = l, this.boxWriter.writeBox(h), this.writer.seek(a + (d ? Pt : Ke));
    for (const m of i)
      for (const g of m.currentChunk.samples)
        this.writer.write(g.data), g.data = null;
    if (this.format._options.onMdat) {
      const { data: m, start: g } = this.writer.stopTrackingWrites();
      this.format._options.onMdat(m, g);
    }
    for (const m of i)
      m.finalizedChunks.push(m.currentChunk), this.finalizedChunks.push(m.currentChunk), m.currentChunk = null;
    e && await this.writer.flush();
  }
  async registerSampleFastStartReserve(e, t) {
    if (this.allTracksAreKnown()) {
      if (!this.mdat) {
        const i = fr(this), n = this.boxWriter.measureBox(i) + this.computeSampleTableSizeUpperBound() + 4096;
        p(this.ftypSize !== null), this.writer.seek(this.ftypSize + n), this.format._options.onMdat && this.writer.startTrackingWrites(), this.mdat = Or(!0), this.boxWriter.writeBox(this.mdat);
        for (const a of this.trackDatas) {
          for (const o of a.sampleQueue)
            await this.addSampleToTrack(a, o);
          a.sampleQueue.length = 0;
        }
      }
      await this.addSampleToTrack(e, t);
    } else
      e.sampleQueue.push(t);
  }
  computeSampleTableSizeUpperBound() {
    p(this.fastStart === "reserve");
    let e = 0;
    for (const t of this.trackDatas) {
      const i = t.track.metadata.maximumPacketCount;
      p(i !== void 0), e += 8 * Math.ceil(2 / 3 * i), e += 4 * i, e += 8 * Math.ceil(2 / 3 * i), e += 12 * Math.ceil(2 / 3 * i), e += 4 * i, e += 8 * i;
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async onTrackClose(e) {
    const t = await this.mutex.acquire(), i = this.trackDatas.find((s) => s.track === e);
    i && (i.type === "subtitle" && e.source._codec === "webvtt" && await this.processWebVTTCues(i, 1 / 0), this.processTimestamps(i)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), t();
  }
  /** Finalizes the file, making it ready for use. Must be called after all video and audio chunks have been added. */
  async finalize() {
    const e = await this.mutex.acquire();
    this.allTracksKnown.resolve();
    for (const t of this.trackDatas)
      t.type === "subtitle" && t.track.source._codec === "webvtt" && await this.processWebVTTCues(t, 1 / 0), this.processTimestamps(t);
    if (this.isFragmented)
      await this.interleaveSamples(!0), await this.finalizeFragment(!1);
    else
      for (const t of this.trackDatas)
        await this.finalizeCurrentChunk(t);
    if (this.fastStart === "in-memory") {
      this.mdat = Or(!1);
      let t;
      for (let s = 0; s < 2; s++) {
        const n = fr(this), a = this.boxWriter.measureBox(n);
        t = this.boxWriter.measureBox(this.mdat);
        let o = this.writer.getPos() + a + t;
        for (const c of this.finalizedChunks) {
          c.offset = o;
          for (const { data: l } of c.samples)
            p(l), o += l.byteLength, t += l.byteLength;
        }
        if (o < 2 ** 32)
          break;
        t >= 2 ** 32 && (this.mdat.largeSize = !0);
      }
      this.format._options.onMoov && this.writer.startTrackingWrites();
      const i = fr(this);
      if (this.boxWriter.writeBox(i), this.format._options.onMoov) {
        const { data: s, start: n } = this.writer.stopTrackingWrites();
        this.format._options.onMoov(s, n);
      }
      this.format._options.onMdat && this.writer.startTrackingWrites(), this.mdat.size = t, this.boxWriter.writeBox(this.mdat);
      for (const s of this.finalizedChunks)
        for (const n of s.samples)
          p(n.data), this.writer.write(n.data), n.data = null;
      if (this.format._options.onMdat) {
        const { data: s, start: n } = this.writer.stopTrackingWrites();
        this.format._options.onMdat(s, n);
      }
    } else if (this.isFragmented) {
      const t = this.writer.getPos(), i = uu(this.trackDatas);
      this.boxWriter.writeBox(i);
      const s = this.writer.getPos() - t;
      this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(s);
    } else {
      p(this.mdat);
      const t = this.boxWriter.offsets.get(this.mdat);
      p(t !== void 0);
      const i = this.writer.getPos() - t;
      if (this.mdat.size = i, this.mdat.largeSize = i >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.format._options.onMdat) {
        const { data: n, start: a } = this.writer.stopTrackingWrites();
        this.format._options.onMdat(n, a);
      }
      const s = fr(this);
      if (this.fastStart === "reserve") {
        p(this.ftypSize !== null), this.writer.seek(this.ftypSize), this.format._options.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(s);
        const n = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
        this.boxWriter.writeBox(bd(n));
      } else
        this.format._options.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(s);
      if (this.format._options.onMoov) {
        const { data: n, start: a } = this.writer.stopTrackingWrites();
        this.format._options.onMoov(n, a);
      }
    }
    e();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const zu = -32768, Du = 2 ** 15 - 1, Wn = "Mediabunny", Ln = 6, Hn = 5, Ou = {
  video: 1,
  audio: 2,
  subtitle: 17
};
class Uu extends gt {
  constructor(e, t) {
    super(e), this.trackDatas = [], this.allTracksKnown = re(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = /* @__PURE__ */ new Map(), this.duration = 0, this.writer = e._writer, this.format = t, this.ebmlWriter = new Pl(this.writer), this.format._options.appendOnly && (this.writer.ensureMonotonicity = !0);
  }
  async start() {
    const e = await this.mutex.acquire();
    this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush(), e();
  }
  writeEBMLHeader() {
    this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
    const e = { id: y.EBML, data: [
      { id: y.EBMLVersion, data: 1 },
      { id: y.EBMLReadVersion, data: 1 },
      { id: y.EBMLMaxIDLength, data: 4 },
      { id: y.EBMLMaxSizeLength, data: 8 },
      { id: y.DocType, data: this.format instanceof ms ? "webm" : "matroska" },
      { id: y.DocTypeVersion, data: 2 },
      { id: y.DocTypeReadVersion, data: 2 }
    ] };
    if (this.ebmlWriter.writeEBML(e), this.format._options.onEbmlHeader) {
      const { data: t, start: i } = this.writer.stopTrackingWrites();
      this.format._options.onEbmlHeader(t, i);
    }
  }
  /**
   * Creates a SeekHead element which is positioned near the start of the file and allows the media player to seek to
   * relevant sections more easily. Since we don't know the positions of those sections yet, we'll set them later.
   */
  maybeCreateSeekHead(e) {
    if (this.format._options.appendOnly)
      return;
    const t = new Uint8Array([28, 83, 187, 107]), i = new Uint8Array([21, 73, 169, 102]), s = new Uint8Array([22, 84, 174, 107]), n = new Uint8Array([25, 65, 164, 105]), a = new Uint8Array([18, 84, 195, 103]), o = { id: y.SeekHead, data: [
      { id: y.Seek, data: [
        { id: y.SeekID, data: t },
        {
          id: y.SeekPosition,
          size: 5,
          data: e ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
        }
      ] },
      { id: y.Seek, data: [
        { id: y.SeekID, data: i },
        {
          id: y.SeekPosition,
          size: 5,
          data: e ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
        }
      ] },
      { id: y.Seek, data: [
        { id: y.SeekID, data: s },
        {
          id: y.SeekPosition,
          size: 5,
          data: e ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
        }
      ] },
      this.attachmentsElement ? { id: y.Seek, data: [
        { id: y.SeekID, data: n },
        {
          id: y.SeekPosition,
          size: 5,
          data: e ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
        }
      ] } : null,
      this.tagsElement ? { id: y.Seek, data: [
        { id: y.SeekID, data: a },
        {
          id: y.SeekPosition,
          size: 5,
          data: e ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
        }
      ] } : null
    ] };
    this.seekHead = o;
  }
  createSegmentInfo() {
    const e = { id: y.Duration, data: new ns(0) };
    this.segmentDuration = e;
    const t = { id: y.Info, data: [
      { id: y.TimestampScale, data: 1e6 },
      { id: y.MuxingApp, data: Wn },
      { id: y.WritingApp, data: Wn },
      this.format._options.appendOnly ? null : e
    ] };
    this.segmentInfo = t;
  }
  createTracks() {
    const e = { id: y.Tracks, data: [] };
    this.tracksElement = e;
    for (const t of this.trackDatas) {
      const i = xe[t.track.source._codec];
      p(i);
      let s = 0;
      if (t.type === "audio" && t.track.source._codec === "opus") {
        s = 1e6 * 80;
        const n = t.info.decoderConfig.description;
        if (n) {
          const a = Z(n), o = fi(a);
          s = Math.round(1e9 * (o.preSkip / ir));
        }
      }
      e.data.push({ id: y.TrackEntry, data: [
        { id: y.TrackNumber, data: t.track.id },
        { id: y.TrackUID, data: t.track.id },
        { id: y.TrackType, data: Ou[t.type] },
        t.track.metadata.disposition?.default === !1 ? { id: y.FlagDefault, data: 0 } : null,
        t.track.metadata.disposition?.forced ? { id: y.FlagForced, data: 1 } : null,
        t.track.metadata.disposition?.hearingImpaired ? { id: y.FlagHearingImpaired, data: 1 } : null,
        t.track.metadata.disposition?.visuallyImpaired ? { id: y.FlagVisualImpaired, data: 1 } : null,
        t.track.metadata.disposition?.original ? { id: y.FlagOriginal, data: 1 } : null,
        t.track.metadata.disposition?.commentary ? { id: y.FlagCommentary, data: 1 } : null,
        { id: y.FlagLacing, data: 0 },
        { id: y.Language, data: t.track.metadata.languageCode ?? ke },
        { id: y.CodecID, data: i },
        { id: y.CodecDelay, data: 0 },
        { id: y.SeekPreRoll, data: s },
        t.track.metadata.name !== void 0 ? { id: y.Name, data: new st(t.track.metadata.name) } : null,
        t.type === "video" ? this.videoSpecificTrackInfo(t) : null,
        t.type === "audio" ? this.audioSpecificTrackInfo(t) : null,
        t.type === "subtitle" ? this.subtitleSpecificTrackInfo(t) : null
      ] });
    }
  }
  videoSpecificTrackInfo(e) {
    const { frameRate: t, rotation: i } = e.track.metadata, s = [
      e.info.decoderConfig.description ? {
        id: y.CodecPrivate,
        data: Z(e.info.decoderConfig.description)
      } : null,
      t ? {
        id: y.DefaultDuration,
        data: 1e9 / t
      } : null
    ], n = i ? ti(-i) : 0, a = !!e.info.aspectRatio && e.info.aspectRatio.num * e.info.height !== e.info.aspectRatio.den * e.info.width, o = e.info.decoderConfig.colorSpace, c = { id: y.Video, data: [
      { id: y.PixelWidth, data: e.info.width },
      { id: y.PixelHeight, data: e.info.height },
      a ? { id: y.DisplayWidth, data: e.info.aspectRatio.num } : null,
      a ? { id: y.DisplayHeight, data: e.info.aspectRatio.den } : null,
      a ? { id: y.DisplayUnit, data: 3 } : null,
      // 3 = display aspect ratio
      e.info.alphaMode ? { id: y.AlphaMode, data: 1 } : null,
      Yn(o) ? {
        id: y.Colour,
        data: [
          {
            id: y.MatrixCoefficients,
            data: Mt[o.matrix]
          },
          {
            id: y.TransferCharacteristics,
            data: Rt[o.transfer]
          },
          {
            id: y.Primaries,
            data: Bt[o.primaries]
          },
          {
            id: y.Range,
            data: o.fullRange ? 2 : 1
          }
        ]
      } : null,
      n ? {
        id: y.Projection,
        data: [
          {
            id: y.ProjectionType,
            data: 0
            // rectangular
          },
          {
            id: y.ProjectionPoseRoll,
            data: new ss((n + 180) % 360 - 180)
            // [0, 270] -> [-180, 90]
          }
        ]
      } : null
    ] };
    return s.push(c), s;
  }
  audioSpecificTrackInfo(e) {
    const t = se.includes(e.track.source._codec) ? We(e.track.source._codec) : null;
    return [
      e.info.decoderConfig.description ? {
        id: y.CodecPrivate,
        data: Z(e.info.decoderConfig.description)
      } : null,
      { id: y.Audio, data: [
        { id: y.SamplingFrequency, data: new ss(e.info.sampleRate) },
        { id: y.Channels, data: e.info.numberOfChannels },
        t ? { id: y.BitDepth, data: 8 * t.sampleSize } : null
      ] }
    ];
  }
  subtitleSpecificTrackInfo(e) {
    return [
      { id: y.CodecPrivate, data: J.encode(e.info.config.description) }
    ];
  }
  maybeCreateTags() {
    const e = [], t = (n, a) => {
      e.push({ id: y.SimpleTag, data: [
        { id: y.TagName, data: new st(n) },
        typeof a == "string" ? { id: y.TagString, data: new st(a) } : { id: y.TagBinary, data: a }
      ] });
    }, i = this.output._metadataTags, s = /* @__PURE__ */ new Set();
    for (const { key: n, value: a } of er(i))
      switch (n) {
        case "title":
          t("TITLE", a), s.add("TITLE");
          break;
        case "description":
          t("DESCRIPTION", a), s.add("DESCRIPTION");
          break;
        case "artist":
          t("ARTIST", a), s.add("ARTIST");
          break;
        case "album":
          t("ALBUM", a), s.add("ALBUM");
          break;
        case "albumArtist":
          t("ALBUM_ARTIST", a), s.add("ALBUM_ARTIST");
          break;
        case "genre":
          t("GENRE", a), s.add("GENRE");
          break;
        case "comment":
          t("COMMENT", a), s.add("COMMENT");
          break;
        case "lyrics":
          t("LYRICS", a), s.add("LYRICS");
          break;
        case "date":
          t("DATE", a.toISOString().slice(0, 10)), s.add("DATE");
          break;
        case "trackNumber":
          {
            const o = i.tracksTotal !== void 0 ? `${a}/${i.tracksTotal}` : a.toString();
            t("PART_NUMBER", o), s.add("PART_NUMBER");
          }
          break;
        case "discNumber":
          {
            const o = i.discsTotal !== void 0 ? `${a}/${i.discsTotal}` : a.toString();
            t("DISC", o), s.add("DISC");
          }
          break;
        case "tracksTotal":
        case "discsTotal":
          break;
        case "images":
        case "raw":
          break;
        default:
          ge(n);
      }
    if (i.raw)
      for (const n in i.raw) {
        const a = i.raw[n];
        a == null || s.has(n) || (typeof a == "string" || a instanceof Uint8Array) && t(n, a);
      }
    e.length !== 0 && (this.tagsElement = {
      id: y.Tags,
      data: [{ id: y.Tag, data: [
        { id: y.Targets, data: [
          { id: y.TargetTypeValue, data: 50 },
          { id: y.TargetType, data: "MOVIE" }
        ] },
        ...e
      ] }]
    });
  }
  maybeCreateAttachments() {
    const e = this.output._metadataTags, t = [], i = /* @__PURE__ */ new Set(), s = e.images ?? [];
    for (const n of s) {
      let a = n.name;
      a === void 0 && (a = (n.kind === "coverFront" ? "cover" : n.kind === "coverBack" ? "back" : "image") + (gc(n.mimeType) ?? ""));
      let o;
      for (; ; ) {
        o = 0n;
        for (let c = 0; c < 8; c++)
          o <<= 8n, o |= BigInt(Math.floor(Math.random() * 256));
        if (o !== 0n && !i.has(o))
          break;
      }
      i.add(o), t.push({
        id: y.AttachedFile,
        data: [
          n.description !== void 0 ? { id: y.FileDescription, data: new st(n.description) } : null,
          { id: y.FileName, data: new st(a) },
          { id: y.FileMediaType, data: n.mimeType },
          { id: y.FileData, data: n.data },
          { id: y.FileUID, data: o }
        ]
      });
    }
    for (const [n, a] of Object.entries(e.raw ?? {}))
      !(a instanceof oi) || !/^\d+$/.test(n) || s.find((c) => c.mimeType === a.mimeType && kc(c.data, a.data)) || t.push({
        id: y.AttachedFile,
        data: [
          a.description !== void 0 ? { id: y.FileDescription, data: new st(a.description) } : null,
          { id: y.FileName, data: new st(a.name ?? "") },
          { id: y.FileMediaType, data: a.mimeType ?? "" },
          { id: y.FileData, data: a.data },
          { id: y.FileUID, data: BigInt(n) }
        ]
      });
    t.length !== 0 && (this.attachmentsElement = { id: y.Attachments, data: t });
  }
  createSegment() {
    this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
    const e = {
      id: y.Segment,
      size: this.format._options.appendOnly ? -1 : Ln,
      data: [
        this.seekHead,
        // null if append-only
        this.segmentInfo,
        this.tracksElement,
        // Matroska spec says put this at the end of the file, but I think placing it before the first cluster
        // makes more sense, and FFmpeg agrees (argumentum ad ffmpegum fallacy)
        this.attachmentsElement,
        this.tagsElement
      ]
    };
    if (this.segment = e, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(e), this.format._options.onSegmentHeader) {
      const { data: t, start: i } = this.writer.stopTrackingWrites();
      this.format._options.onSegmentHeader(t, i);
    }
  }
  createCues() {
    this.cues = { id: y.Cues, data: [] };
  }
  get segmentDataOffset() {
    return p(this.segment), this.ebmlWriter.dataOffsets.get(this.segment);
  }
  allTracksAreKnown() {
    for (const e of this.output._tracks)
      if (!e.source._closed && !this.trackDatas.some((t) => t.track === e))
        return !1;
    return !0;
  }
  async getMimeType() {
    await this.allTracksKnown.promise;
    const e = this.trackDatas.map((t) => t.type === "video" || t.type === "audio" ? t.info.decoderConfig.codec : {
      webvtt: "wvtt"
    }[t.track.source._codec]);
    return Ua({
      isWebM: this.format instanceof ms,
      hasVideo: this.trackDatas.some((t) => t.type === "video"),
      hasAudio: this.trackDatas.some((t) => t.type === "audio"),
      codecStrings: e
    });
  }
  getVideoTrackData(e, t, i) {
    const s = this.trackDatas.find((l) => l.track === e);
    if (s)
      return s;
    Is(i), p(i), p(i.decoderConfig), p(i.decoderConfig.codedWidth !== void 0), p(i.decoderConfig.codedHeight !== void 0);
    const n = i.decoderConfig.displayAspectWidth, a = i.decoderConfig.displayAspectHeight, o = n === void 0 || a === void 0 ? null : ai({
      num: n,
      den: a
    }), c = {
      track: e,
      type: "video",
      info: {
        width: i.decoderConfig.codedWidth,
        height: i.decoderConfig.codedHeight,
        aspectRatio: o,
        decoderConfig: i.decoderConfig,
        alphaMode: !!t.sideData.alpha
        // The first packet determines if this track has alpha or not
      },
      chunkQueue: [],
      lastWrittenMsTimestamp: null
    };
    return e.source._codec === "vp9" ? c.info.decoderConfig = {
      ...c.info.decoderConfig,
      description: new Uint8Array(_c(c.info.decoderConfig.codec))
    } : e.source._codec === "av1" && (c.info.decoderConfig = {
      ...c.info.decoderConfig,
      description: new Uint8Array(sa(c.info.decoderConfig.codec))
    }), this.trackDatas.push(c), this.trackDatas.sort((l, d) => l.track.id - d.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), c;
  }
  getAudioTrackData(e, t, i) {
    const s = this.trackDatas.find((c) => c.track === e);
    if (s)
      return s;
    zt(i), p(i), p(i.decoderConfig);
    const n = { ...i.decoderConfig };
    let a = !1;
    if (e.source._codec === "aac" && !n.description) {
      const c = Je(ye.tempFromBytes(t.data));
      if (!c)
        throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
      const l = ht[c.samplingFrequencyIndex], d = rr[c.channelConfiguration];
      if (l === void 0 || d === void 0)
        throw new Error("Invalid ADTS frame header.");
      n.description = Ps({
        objectType: c.objectType,
        sampleRate: l,
        numberOfChannels: d
      }), a = !0;
    }
    const o = {
      track: e,
      type: "audio",
      info: {
        numberOfChannels: i.decoderConfig.numberOfChannels,
        sampleRate: i.decoderConfig.sampleRate,
        decoderConfig: n,
        requiresAdtsStripping: a
      },
      chunkQueue: [],
      lastWrittenMsTimestamp: null
    };
    return this.trackDatas.push(o), this.trackDatas.sort((c, l) => c.track.id - l.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), o;
  }
  getSubtitleTrackData(e, t) {
    const i = this.trackDatas.find((n) => n.track === e);
    if (i)
      return i;
    oa(t), p(t), p(t.config);
    const s = {
      track: e,
      type: "subtitle",
      info: {
        config: t.config
      },
      chunkQueue: [],
      lastWrittenMsTimestamp: null
    };
    return this.trackDatas.push(s), this.trackDatas.sort((n, a) => n.track.id - a.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), s;
  }
  async addEncodedVideoPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getVideoTrackData(e, t, i), a = t.type === "key";
      let o = this.validateAndNormalizeTimestamp(n.track, t.timestamp, a), c = t.duration;
      e.metadata.frameRate !== void 0 && (o = Qi(o, 1 / e.metadata.frameRate), c = Qi(c, 1 / e.metadata.frameRate));
      const l = n.info.alphaMode ? t.sideData.alpha ?? null : null, d = this.createInternalChunk(t.data, o, c, t.type, l);
      e.source._codec === "vp9" && this.fixVP9ColorSpace(n, d), n.chunkQueue.push(d), await this.interleaveChunks();
    } finally {
      s();
    }
  }
  async addEncodedAudioPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getAudioTrackData(e, t, i);
      let a = t.data;
      if (n.info.requiresAdtsStripping) {
        const d = Je(ye.tempFromBytes(a));
        if (!d)
          throw new Error("Expected ADTS frame, didn't get one.");
        const u = d.crcCheck === null ? Er : ut;
        a = a.subarray(u);
      }
      const o = t.type === "key", c = this.validateAndNormalizeTimestamp(n.track, t.timestamp, o), l = this.createInternalChunk(a, c, t.duration, t.type);
      n.chunkQueue.push(l), await this.interleaveChunks();
    } finally {
      s();
    }
  }
  async addSubtitleCue(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getSubtitleTrackData(e, i), a = this.validateAndNormalizeTimestamp(n.track, t.timestamp, !0);
      let o = t.text;
      const c = Math.round(a * 1e3);
      Jr.lastIndex = 0, o = o.replace(Jr, (h) => {
        const g = us(h.slice(1, -1)) - c;
        return `<${yo(g)}>`;
      });
      const l = J.encode(o), d = `${t.settings ?? ""}
${t.identifier ?? ""}
${t.notes ?? ""}`, u = this.createInternalChunk(l, a, t.duration, "key", d.trim() ? J.encode(d) : null);
      n.chunkQueue.push(u), await this.interleaveChunks();
    } finally {
      s();
    }
  }
  async interleaveChunks(e = !1) {
    if (!(!e && !this.allTracksAreKnown())) {
      e: for (; ; ) {
        let t = null, i = 1 / 0;
        for (const n of this.trackDatas) {
          if (!e && n.chunkQueue.length === 0 && !n.track.source._closed)
            break e;
          n.chunkQueue.length > 0 && n.chunkQueue[0].timestamp < i && (t = n, i = n.chunkQueue[0].timestamp);
        }
        if (!t)
          break;
        const s = t.chunkQueue.shift();
        this.writeBlock(t, s);
      }
      e || await this.writer.flush();
    }
  }
  /**
   * Due to [a bug in Chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=1377842), VP9 streams often
   * lack color space information. This method patches in that information.
   */
  fixVP9ColorSpace(e, t) {
    if (t.type !== "key" || !e.info.decoderConfig.colorSpace || !e.info.decoderConfig.colorSpace.matrix)
      return;
    const i = new V(t.data);
    i.skipBits(2);
    const s = i.readBits(1), a = (i.readBits(1) << 1) + s;
    if (a === 3 && i.skipBits(1), i.readBits(1) || i.readBits(1) !== 0 || (i.skipBits(2), i.readBits(24) !== 4817730))
      return;
    a >= 2 && i.skipBits(1);
    const d = {
      rgb: 7,
      bt709: 2,
      bt470bg: 1,
      smpte170m: 3
    }[e.info.decoderConfig.colorSpace.matrix];
    ac(t.data, i.pos, i.pos + 3, d);
  }
  /** Converts a read-only external chunk into an internal one for easier use. */
  createInternalChunk(e, t, i, s, n = null) {
    return {
      data: e,
      type: s,
      timestamp: t,
      duration: i,
      additions: n
    };
  }
  /** Writes a block containing media data to the file. */
  writeBlock(e, t) {
    this.segment || this.createSegment();
    const i = Math.round(1e3 * t.timestamp), s = this.trackDatas.every((d) => {
      if (e === d)
        return t.type === "key";
      const u = d.chunkQueue[0];
      return u ? u.type === "key" : d.track.source._closed;
    });
    let n = !1;
    if (!this.currentCluster)
      n = !0;
    else {
      p(this.currentClusterStartMsTimestamp !== null), p(this.currentClusterMaxMsTimestamp !== null);
      const d = i - this.currentClusterStartMsTimestamp;
      n = s && i > this.currentClusterMaxMsTimestamp && d >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || d > Du;
    }
    n && this.createNewCluster(i);
    const a = i - this.currentClusterStartMsTimestamp;
    if (a < zu)
      return;
    const o = new Uint8Array(4), c = new DataView(o.buffer);
    c.setUint8(0, 128 | e.track.id), c.setInt16(1, a, !1);
    const l = Math.round(1e3 * t.duration);
    if (t.additions) {
      const d = { id: y.BlockGroup, data: [
        { id: y.Block, data: [
          o,
          t.data
        ] },
        t.type === "delta" ? {
          id: y.ReferenceBlock,
          data: new Ma(e.lastWrittenMsTimestamp - i)
        } : null,
        t.additions ? { id: y.BlockAdditions, data: [
          { id: y.BlockMore, data: [
            { id: y.BlockAddID, data: 1 },
            // Some players expect BlockAddID to come first
            { id: y.BlockAdditional, data: t.additions }
          ] }
        ] } : null,
        l > 0 ? { id: y.BlockDuration, data: l } : null
      ] };
      this.ebmlWriter.writeEBML(d);
    } else {
      c.setUint8(3, +(t.type === "key") << 7);
      const d = { id: y.SimpleBlock, data: [
        o,
        t.data
      ] };
      this.ebmlWriter.writeEBML(d);
    }
    this.duration = Math.max(this.duration, i + l), e.lastWrittenMsTimestamp = i, this.trackDatasInCurrentCluster.has(e) || this.trackDatasInCurrentCluster.set(e, {
      firstMsTimestamp: i
    }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, i);
  }
  /** Creates a new Cluster element to contain media chunks. */
  createNewCluster(e) {
    this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
      id: y.Cluster,
      size: this.format._options.appendOnly ? -1 : Hn,
      data: [
        { id: y.Timestamp, data: e }
      ]
    }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = e, this.currentClusterMaxMsTimestamp = e, this.trackDatasInCurrentCluster.clear();
  }
  finalizeCurrentCluster() {
    if (p(this.currentCluster), !this.format._options.appendOnly) {
      const s = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster), n = this.writer.getPos();
      this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(s, Hn), this.writer.seek(n);
    }
    if (this.format._options.onCluster) {
      p(this.currentClusterStartMsTimestamp !== null);
      const { data: s, start: n } = this.writer.stopTrackingWrites();
      this.format._options.onCluster(s, n, this.currentClusterStartMsTimestamp / 1e3);
    }
    const e = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset, t = /* @__PURE__ */ new Map();
    for (const [s, { firstMsTimestamp: n }] of this.trackDatasInCurrentCluster)
      t.has(n) || t.set(n, []), t.get(n).push(s);
    const i = [...t.entries()].sort((s, n) => s[0] - n[0]);
    for (const [s, n] of i)
      p(this.cues), this.cues.data.push({ id: y.CuePoint, data: [
        { id: y.CueTime, data: s },
        // Create CueTrackPositions for each track that starts at this timestamp
        ...n.map((a) => ({ id: y.CueTrackPositions, data: [
          { id: y.CueTrack, data: a.track.id },
          { id: y.CueClusterPosition, data: e }
        ] }))
      ] });
  }
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async onTrackClose() {
    const e = await this.mutex.acquire();
    this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), e();
  }
  /** Finalizes the file, making it ready for use. Must be called after all media chunks have been added. */
  async finalize() {
    const e = await this.mutex.acquire();
    if (this.allTracksKnown.resolve(), this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), p(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
      const t = this.writer.getPos(), i = this.writer.getPos() - this.segmentDataOffset;
      this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(i, Ln), this.segmentDuration.data = new ns(this.duration), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), p(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead), this.writer.seek(t);
    }
    e();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Nu {
  constructor(e) {
    this.writer = e, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer);
  }
  writeU32(e) {
    this.helperView.setUint32(0, e, !1), this.writer.write(this.helper.subarray(0, 4));
  }
  writeXingFrame(e) {
    const t = this.writer.getPos(), i = 255, s = 224 | e.mpegVersionId << 3 | e.layer << 1;
    let n;
    e.mpegVersionId & 2 ? n = e.mpegVersionId & 1 ? 0 : 1 : n = 1;
    const a = 0, o = 155;
    let c = -1;
    const l = n * 16 * 4 + e.layer * 16;
    for (let w = 0; w < 16; w++) {
      const k = Yi[l + w];
      if (Zi(n, e.layer, 1e3 * k, e.sampleRate, a) >= o) {
        c = w;
        break;
      }
    }
    if (c === -1)
      throw new Error("No suitable bitrate found.");
    const d = c << 4 | e.frequencyIndex << 2 | a << 1, u = e.channel << 6 | e.modeExtension << 4 | e.copyright << 3 | e.original << 2 | e.emphasis;
    this.helper[0] = i, this.helper[1] = s, this.helper[2] = d, this.helper[3] = u, this.writer.write(this.helper.subarray(0, 4));
    const h = li(e.mpegVersionId, e.channel);
    this.writer.seek(t + h), this.writeU32(ci);
    let m = 0;
    e.frameCount !== null && (m |= 1), e.fileSize !== null && (m |= 2), e.toc !== null && (m |= 4), this.writeU32(m), this.writeU32(e.frameCount ?? 0), this.writeU32(e.fileSize ?? 0), this.writer.write(e.toc ?? new Uint8Array(100));
    const g = Yi[l + c], f = Zi(n, e.layer, 1e3 * g, e.sampleRate, a);
    this.writer.seek(t + f);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Vu extends gt {
  constructor(e, t) {
    super(e), this.xingFrameData = null, this.frameCount = 0, this.framePositions = [], this.xingFramePos = null, this.format = t, this.writer = e._writer, this.mp3Writer = new Nu(e._writer);
  }
  async start() {
    xr(this.output._metadataTags) || new $s(this.writer).writeId3V2Tag(this.output._metadataTags);
  }
  async getMimeType() {
    return "audio/mpeg";
  }
  async addEncodedVideoPacket() {
    throw new Error("MP3 does not support video.");
  }
  async addEncodedAudioPacket(e, t) {
    const i = await this.mutex.acquire();
    try {
      const s = this.format._options.xingHeader !== !1;
      if (!this.xingFrameData && s) {
        const n = L(t.data);
        if (n.byteLength < 4)
          throw new Error("Invalid MP3 header in sample.");
        const a = n.getUint32(0, !1), o = di(a, null).header;
        if (!o)
          throw new Error("Invalid MP3 header in sample.");
        const c = li(o.mpegVersionId, o.channel);
        if (n.byteLength >= c + 4) {
          const l = n.getUint32(c, !1);
          if (l === ci || l === Es)
            return;
        }
        this.xingFrameData = {
          mpegVersionId: o.mpegVersionId,
          layer: o.layer,
          frequencyIndex: o.frequencyIndex,
          sampleRate: o.sampleRate,
          channel: o.channel,
          modeExtension: o.modeExtension,
          copyright: o.copyright,
          original: o.original,
          emphasis: o.emphasis,
          frameCount: null,
          fileSize: null,
          toc: null
        }, this.xingFramePos = this.writer.getPos(), this.mp3Writer.writeXingFrame(this.xingFrameData), this.frameCount++;
      }
      this.validateAndNormalizeTimestamp(e, t.timestamp, t.type === "key"), this.writer.write(t.data), this.frameCount++, await this.writer.flush(), s && this.framePositions.push(this.writer.getPos());
    } finally {
      i();
    }
  }
  async addSubtitleCue() {
    throw new Error("MP3 does not support subtitles.");
  }
  async finalize() {
    if (!this.xingFrameData || this.xingFramePos === null)
      return;
    const e = await this.mutex.acquire(), t = this.writer.getPos();
    this.writer.seek(this.xingFramePos);
    const i = new Uint8Array(100);
    for (let s = 0; s < 100; s++) {
      const n = Math.floor(this.framePositions.length * (s / 100));
      p(n !== -1 && n < this.framePositions.length);
      const a = this.framePositions[n];
      i[s] = 256 * (a / t);
    }
    if (this.xingFrameData.frameCount = this.frameCount, this.xingFrameData.fileSize = t, this.xingFrameData.toc = i, this.format._options.onXingFrame && this.writer.startTrackingWrites(), this.mp3Writer.writeXingFrame(this.xingFrameData), this.format._options.onXingFrame) {
      const { data: s, start: n } = this.writer.stopTrackingWrites();
      this.format._options.onXingFrame(s, n);
    }
    this.writer.seek(t), e();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Wu = 8192;
class Lu extends gt {
  constructor(e, t) {
    super(e), this.trackDatas = [], this.bosPagesWritten = !1, this.allTracksKnown = re(), this.pageBytes = new Uint8Array(ja), this.pageView = new DataView(this.pageBytes.buffer), this.format = t, this.writer = e._writer, this.writer.ensureMonotonicity = !0;
  }
  async start() {
  }
  async getMimeType() {
    return await this.allTracksKnown.promise, qa({
      codecStrings: this.trackDatas.map((e) => e.codecInfo.codec)
    });
  }
  addEncodedVideoPacket() {
    throw new Error("Video tracks are not supported.");
  }
  getTrackData(e, t) {
    const i = this.trackDatas.find((a) => a.track === e);
    if (i)
      return i;
    let s;
    do
      s = Math.floor(2 ** 32 * Math.random());
    while (this.trackDatas.some((a) => a.serialNumber === s));
    p(e.source._codec === "vorbis" || e.source._codec === "opus"), zt(t), p(t), p(t.decoderConfig);
    const n = {
      track: e,
      serialNumber: s,
      internalSampleRate: e.source._codec === "opus" ? ir : t.decoderConfig.sampleRate,
      codecInfo: {
        codec: e.source._codec,
        vorbisInfo: null,
        opusInfo: null
      },
      vorbisLastBlocksize: null,
      packetQueue: [],
      currentTimestampInSamples: 0,
      pagesWritten: 0,
      currentGranulePosition: 0,
      currentLacingValues: [],
      currentPageData: [],
      currentPageSize: 27,
      currentPageStartsWithFreshPacket: !0,
      currentPageStartTimestampInSamples: 0
    };
    return this.queueHeaderPackets(n, t), this.trackDatas.push(n), this.allTracksAreKnown() && this.allTracksKnown.resolve(), n;
  }
  queueHeaderPackets(e, t) {
    if (p(t.decoderConfig), e.track.source._codec === "vorbis") {
      p(t.decoderConfig.description);
      const i = Z(t.decoderConfig.description);
      if (i[0] !== 2)
        throw new TypeError("First byte of Vorbis decoder description must be 2.");
      let s = 1;
      const n = () => {
        let f = 0;
        for (; ; ) {
          const w = i[s++];
          if (w === void 0)
            throw new TypeError("Vorbis decoder description is too short.");
          if (f += w, w < 255)
            return f;
        }
      }, a = n(), o = n();
      if (i.length - s <= 0)
        throw new TypeError("Vorbis decoder description is too short.");
      const l = i.subarray(s, s += a);
      s += o;
      const d = i.subarray(s), u = new Uint8Array(7);
      u[0] = 3, u[1] = 118, u[2] = 111, u[3] = 114, u[4] = 98, u[5] = 105, u[6] = 115;
      const h = rs(u, this.output._metadataTags, !0);
      e.packetQueue.push({
        data: l,
        timestampInSamples: 0,
        durationInSamples: 0,
        forcePageFlush: !0
      }, {
        data: h,
        timestampInSamples: 0,
        durationInSamples: 0,
        forcePageFlush: !1
      }, {
        data: d,
        timestampInSamples: 0,
        durationInSamples: 0,
        forcePageFlush: !0
        // The last header packet must flush the page
      });
      const g = L(l).getUint8(28);
      e.codecInfo.vorbisInfo = {
        blocksizes: [
          1 << (g & 15),
          1 << (g >> 4)
        ],
        modeBlockflags: ba(d).modeBlockflags
      };
    } else if (e.track.source._codec === "opus") {
      if (!t.decoderConfig.description)
        throw new TypeError("For Ogg, Opus decoder description is required.");
      const i = Z(t.decoderConfig.description), s = new Uint8Array(8), n = L(s);
      n.setUint32(0, 1332770163, !1), n.setUint32(4, 1415669619, !1);
      const a = rs(s, this.output._metadataTags, !0);
      e.packetQueue.push({
        data: i,
        timestampInSamples: 0,
        durationInSamples: 0,
        forcePageFlush: !0
      }, {
        data: a,
        timestampInSamples: 0,
        durationInSamples: 0,
        forcePageFlush: !0
        // The last header packet must flush the page
      }), e.codecInfo.opusInfo = {
        preSkip: fi(i).preSkip
      };
    }
  }
  async addEncodedAudioPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getTrackData(e, i);
      this.validateAndNormalizeTimestamp(n.track, t.timestamp, t.type === "key");
      const a = n.currentTimestampInSamples, { durationInSamples: o, vorbisBlockSize: c } = Ha(t.data, n.codecInfo, n.vorbisLastBlocksize);
      n.currentTimestampInSamples += o, n.vorbisLastBlocksize = c, n.packetQueue.push({
        data: t.data,
        timestampInSamples: a,
        durationInSamples: o,
        forcePageFlush: !1
      }), await this.interleavePages();
    } finally {
      s();
    }
  }
  addSubtitleCue() {
    throw new Error("Subtitle tracks are not supported.");
  }
  allTracksAreKnown() {
    for (const e of this.output._tracks)
      if (!e.source._closed && !this.trackDatas.some((t) => t.track === e))
        return !1;
    return !0;
  }
  async interleavePages(e = !1) {
    if (!this.bosPagesWritten) {
      if (!this.allTracksAreKnown() && !e)
        return;
      for (const t of this.trackDatas)
        for (; t.packetQueue.length > 0; ) {
          const i = t.packetQueue.shift();
          if (this.writePacket(t, i, !1), i.forcePageFlush)
            break;
        }
      this.bosPagesWritten = !0;
    }
    e: for (; ; ) {
      let t = null, i = 1 / 0;
      for (const a of this.trackDatas) {
        if (!e && a.packetQueue.length <= 1 && !a.track.source._closed)
          break e;
        a.packetQueue.length > 0 && a.packetQueue[0].timestampInSamples < i && (t = a, i = a.packetQueue[0].timestampInSamples);
      }
      if (!t)
        break;
      const s = t.packetQueue.shift(), n = t.packetQueue.length === 0;
      this.writePacket(t, s, n);
    }
    e || await this.writer.flush();
  }
  writePacket(e, t, i) {
    const s = t.timestampInSamples + t.durationInSamples;
    if (this.format._options.maximumPageDuration !== void 0) {
      const l = this.format._options.maximumPageDuration * e.internalSampleRate;
      e.currentLacingValues.length > 0 && s - e.currentPageStartTimestampInSamples > l && this.writePage(e, !1);
    }
    let n = t.data.length, a = 0, o = 0;
    for (; ; ) {
      e.currentLacingValues.length === 0 && a > 0 && (e.currentPageStartsWithFreshPacket = !1);
      const l = Math.min(255, n);
      e.currentLacingValues.push(l), e.currentPageSize++, o += l;
      const d = n < 255;
      if (e.currentLacingValues.length === 255) {
        const u = t.data.subarray(a, o);
        if (a = o, e.currentPageData.push(u), e.currentPageSize += u.length, this.writePage(e, i && d), d)
          return;
      }
      if (d)
        break;
      n -= 255;
    }
    const c = t.data.subarray(a);
    e.currentPageData.push(c), e.currentPageSize += c.length, e.currentGranulePosition = s, (e.currentPageSize >= Wu || t.forcePageFlush) && this.writePage(e, i);
  }
  writePage(e, t) {
    this.pageView.setUint32(0, Vs, !0), this.pageView.setUint8(4, 0);
    let i = 0;
    e.currentPageStartsWithFreshPacket || (i |= 1), e.pagesWritten === 0 && (i |= 2), t && (i |= 4), this.pageView.setUint8(5, i);
    const s = e.currentLacingValues.every((c) => c === 255) ? -1 : e.currentGranulePosition;
    uc(this.pageView, 6, s), this.pageView.setUint32(14, e.serialNumber, !0), this.pageView.setUint32(18, e.pagesWritten, !0), this.pageView.setUint32(22, 0, !0), this.pageView.setUint8(26, e.currentLacingValues.length), this.pageBytes.set(e.currentLacingValues, 27);
    let n = 27 + e.currentLacingValues.length;
    for (const c of e.currentPageData)
      this.pageBytes.set(c, n), n += c.length;
    const a = this.pageBytes.subarray(0, n), o = La(a);
    if (this.pageView.setUint32(22, o, !0), e.pagesWritten++, e.currentLacingValues.length = 0, e.currentPageData.length = 0, e.currentPageSize = 27, e.currentPageStartsWithFreshPacket = !0, e.currentPageStartTimestampInSamples = e.currentGranulePosition, this.format._options.onPage && this.writer.startTrackingWrites(), this.writer.write(a), this.format._options.onPage) {
      const { data: c, start: l } = this.writer.stopTrackingWrites();
      this.format._options.onPage(c, l, e.track.source);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async onTrackClose() {
    const e = await this.mutex.acquire();
    this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleavePages(), e();
  }
  async finalize() {
    const e = await this.mutex.acquire();
    this.allTracksKnown.resolve(), await this.interleavePages(!0);
    for (const t of this.trackDatas)
      t.currentLacingValues.length > 0 && this.writePage(t, !0);
    e();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Hu = 0, Mo = 4096, qn = 256, qu = 224, jn = 192, $n = new Uint8Array([9, 240]), Qn = new Uint8Array([70, 1]);
class ju extends gt {
  constructor(e, t) {
    super(e), this.trackDatas = [], this.tablesWritten = !1, this.continuityCounters = /* @__PURE__ */ new Map(), this.packetBuffer = new Uint8Array(me), this.packetView = L(this.packetBuffer), this.allTracksKnown = re(), this.videoTrackIndex = 0, this.audioTrackIndex = 0, this.adaptationFieldBuffer = new Uint8Array(184), this.payloadBuffer = new Uint8Array(184), this.format = t, this.writer = e._writer, this.writer.ensureMonotonicity = !0;
  }
  async start() {
  }
  async getMimeType() {
    return await this.allTracksKnown.promise, Ga(this.trackDatas.map((e) => e.codecString));
  }
  getVideoTrackData(e, t) {
    const i = this.trackDatas.find((l) => l.track === e);
    if (i)
      return i;
    Is(t), p(t?.decoderConfig);
    const s = e.source._codec;
    p(s === "avc" || s === "hevc");
    const n = s === "avc" ? 27 : 36, a = qn + this.trackDatas.length, o = qu + this.videoTrackIndex++, c = {
      track: e,
      pid: a,
      streamType: n,
      streamId: o,
      codecString: t.decoderConfig.codec,
      timestampProcessingQueue: [],
      packetQueue: [],
      inputIsAnnexB: null,
      inputIsAdts: null,
      avcDecoderConfig: null,
      hevcDecoderConfig: null,
      adtsHeader: null,
      adtsHeaderBitstream: null,
      firstPacketWritten: !1
    };
    return this.trackDatas.push(c), this.allTracksAreKnown() && this.allTracksKnown.resolve(), c;
  }
  getAudioTrackData(e, t) {
    const i = this.trackDatas.find((l) => l.track === e);
    if (i)
      return i;
    zt(t), p(t?.decoderConfig);
    const s = e.source._codec;
    p(s === "aac" || s === "mp3" || s === "ac3" || s === "eac3");
    let n, a;
    switch (s) {
      case "aac":
        n = 15, a = jn + this.audioTrackIndex++;
        break;
      case "mp3":
        n = 3, a = jn + this.audioTrackIndex++;
        break;
      case "ac3":
        n = 129, a = 189;
        break;
      case "eac3":
        n = 135, a = 189;
        break;
    }
    const o = qn + this.trackDatas.length, c = {
      track: e,
      pid: o,
      streamType: n,
      streamId: a,
      codecString: t.decoderConfig.codec,
      timestampProcessingQueue: [],
      packetQueue: [],
      inputIsAnnexB: null,
      inputIsAdts: null,
      avcDecoderConfig: null,
      hevcDecoderConfig: null,
      adtsHeader: null,
      adtsHeaderBitstream: null,
      firstPacketWritten: !1
    };
    return this.trackDatas.push(c), this.allTracksAreKnown() && this.allTracksKnown.resolve(), c;
  }
  async addEncodedVideoPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getVideoTrackData(e, i), a = this.validateAndNormalizeTimestamp(n.track, t.timestamp, t.type === "key"), o = this.prepareVideoPacket(n, t, i);
      t.type === "key" && await this.flushTimestampQueue(n), n.timestampProcessingQueue.push({
        data: o,
        presentationTimestamp: a,
        decodeTimestamp: null,
        isKeyframe: t.type === "key"
      });
    } finally {
      s();
    }
  }
  async addEncodedAudioPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getAudioTrackData(e, i), a = this.validateAndNormalizeTimestamp(n.track, t.timestamp, t.type === "key"), o = this.prepareAudioPacket(n, t, i);
      t.type === "key" && await this.flushTimestampQueue(n), n.timestampProcessingQueue.push({
        data: o,
        presentationTimestamp: a,
        decodeTimestamp: null,
        isKeyframe: t.type === "key"
      });
    } finally {
      s();
    }
  }
  async addSubtitleCue() {
    throw new Error("MPEG-TS does not support subtitles.");
  }
  prepareVideoPacket(e, t, i) {
    const s = e.track.source._codec;
    if (e.inputIsAnnexB === null) {
      const n = i?.decoderConfig?.description;
      if (e.inputIsAnnexB = !n, !e.inputIsAnnexB) {
        const a = Z(n);
        s === "avc" ? e.avcDecoderConfig = ua(a) : e.hevcDecoderConfig = Qc(a);
      }
    }
    return e.inputIsAnnexB ? this.prepareAnnexBVideoPacket(t.data, s) : this.prepareLengthPrefixedVideoPacket(e, t, s);
  }
  prepareAnnexBVideoPacket(e, t) {
    const i = [];
    for (const n of sr(e)) {
      const a = e.subarray(n.offset, n.offset + n.length);
      (t === "avc" ? Yt(a[0]) === Ie.AUD : vt(a[0]) === ie.AUD_NUT) || i.push(a);
    }
    const s = t === "avc" ? $n : Qn;
    return i.unshift(s), es(i);
  }
  prepareLengthPrefixedVideoPacket(e, t, i) {
    const s = t.data, n = i === "avc" ? e.avcDecoderConfig.lengthSizeMinusOne + 1 : e.hevcDecoderConfig.lengthSizeMinusOne + 1, a = [];
    for (const c of vs(s, n)) {
      const l = s.subarray(c.offset, c.offset + c.length);
      (i === "avc" ? Yt(l[0]) === Ie.AUD : vt(l[0]) === ie.AUD_NUT) || a.push(l);
    }
    if (t.type === "key")
      if (i === "avc") {
        const c = e.avcDecoderConfig;
        for (const l of c.pictureParameterSets)
          a.unshift(l);
        for (const l of c.sequenceParameterSets)
          a.unshift(l);
      } else {
        const c = e.hevcDecoderConfig;
        for (const l of c.arrays)
          if (l.nalUnitType === ie.PPS_NUT)
            for (const d of l.nalUnits)
              a.unshift(d);
        for (const l of c.arrays)
          if (l.nalUnitType === ie.SPS_NUT)
            for (const d of l.nalUnits)
              a.unshift(d);
        for (const l of c.arrays)
          if (l.nalUnitType === ie.VPS_NUT)
            for (const d of l.nalUnits)
              a.unshift(d);
      }
    const o = i === "avc" ? $n : Qn;
    return a.unshift(o), es(a);
  }
  prepareAudioPacket(e, t, i) {
    const s = e.track.source._codec;
    if (s === "mp3" || s === "ac3" || s === "eac3")
      return t.data;
    if (e.inputIsAdts === null) {
      const c = i?.decoderConfig?.description;
      if (e.inputIsAdts = !c, !e.inputIsAdts) {
        const l = Ar(Z(c)), d = ra(l);
        e.adtsHeader = d.header, e.adtsHeaderBitstream = d.bitstream;
      }
    }
    if (e.inputIsAdts)
      return t.data;
    p(e.adtsHeader), p(e.adtsHeaderBitstream);
    const n = e.adtsHeader, a = t.data.byteLength + n.byteLength;
    ia(e.adtsHeaderBitstream, a);
    const o = new Uint8Array(a);
    return o.set(n, 0), o.set(t.data, n.byteLength), o;
  }
  allTracksAreKnown() {
    for (const e of this.output._tracks)
      if (!e.source._closed && !this.trackDatas.some((t) => t.track === e))
        return !1;
    return !0;
  }
  async flushTimestampQueue(e, t = !0) {
    if (e.timestampProcessingQueue.length === 0)
      return;
    const i = e.timestampProcessingQueue.map((s) => s.presentationTimestamp).sort((s, n) => s - n);
    for (let s = 0; s < e.timestampProcessingQueue.length; s++) {
      const n = e.timestampProcessingQueue[s];
      n.decodeTimestamp = i[s], e.packetQueue.push(n);
    }
    e.timestampProcessingQueue.length = 0, t && await this.interleavePackets();
  }
  async interleavePackets(e = !1) {
    if (!this.tablesWritten) {
      if (!this.allTracksAreKnown() && !e)
        return;
      this.writeTables();
    }
    e: for (; ; ) {
      let t = null, i = 1 / 0;
      for (const n of this.trackDatas) {
        if (!e && n.packetQueue.length === 0 && !n.track.source._closed)
          break e;
        n.packetQueue.length > 0 && n.packetQueue[0].presentationTimestamp < i && (t = n, i = n.packetQueue[0].presentationTimestamp);
      }
      if (!t)
        break;
      const s = t.packetQueue.shift();
      this.writePesPacket(t, s);
    }
    e || await this.writer.flush();
  }
  writeTables() {
    p(!this.tablesWritten), this.writePsiSection(Hu, St), this.writePsiSection(Mo, Qu(this.trackDatas)), this.tablesWritten = !0;
  }
  writePsiSection(e, t) {
    let i = 0, s = !0;
    for (; i < t.length; ) {
      const a = 184 - (s ? 1 : 0), o = t.length - i, c = Math.min(a, o);
      let l;
      s ? (l = this.payloadBuffer.subarray(0, 1 + c), l[0] = 0, l.set(t.subarray(i, i + c), 1)) : l = t.subarray(i, i + c), this.writeTsPacket(e, s, null, l), i += c, s = !1;
    }
  }
  writePesPacket(e, t) {
    const i = e.track.type === "video", s = i ? 10 : 5, n = new Uint8Array(9 + s), a = L(n), o = new V(n.subarray(9));
    si(a, 0, 1, !1), n[3] = e.streamId;
    const c = e.track.type === "video" ? 0 : Math.min(8 + t.data.length, 65535);
    a.setUint16(4, c, !1), a.setUint8(6, 132), a.setUint8(7, i ? 192 : 128), a.setUint8(8, s);
    const l = Math.round(t.presentationTimestamp * Be);
    if (o.pos = 0, o.writeBits(4, i ? 3 : 2), o.writeBits(3, l >>> 30 & 7), o.writeBits(1, 1), o.writeBits(15, l >>> 15 & 32767), o.writeBits(1, 1), o.writeBits(15, l & 32767), o.writeBits(1, 1), i) {
      p(t.decodeTimestamp !== null);
      const m = Math.round(t.decodeTimestamp * Be);
      o.writeBits(4, 1), o.writeBits(3, m >>> 30 & 7), o.writeBits(1, 1), o.writeBits(15, m >>> 15 & 32767), o.writeBits(1, 1), o.writeBits(15, m & 32767), o.writeBits(1, 1);
    }
    const d = n.length + t.data.length;
    let u = 0, h = !0;
    for (; u < d; ) {
      const m = h, g = d - u, f = h && t.isKeyframe, w = h && !e.firstPacketWritten, k = Math.max(0, 184 - g);
      let b;
      f || w ? b = Math.max(2, k) : b = k;
      let T = null;
      if (b > 0) {
        const I = this.adaptationFieldBuffer;
        b === 1 ? I[0] = 0 : (I[0] = b - 1, I[1] = Number(w) << 7 | Number(f) << 6, I.fill(255, 2, b)), T = I.subarray(0, b);
      }
      const S = Math.min(184 - b, g), x = this.payloadBuffer.subarray(0, S);
      let P = 0;
      if (u < n.length) {
        const I = Math.min(n.length - u, S);
        x.set(n.subarray(u, u + I), 0), P = I;
      }
      const _ = Math.max(0, u - n.length), C = _ + (S - P);
      P < S && x.set(t.data.subarray(_, C), P), this.writeTsPacket(e.pid, m, T, x), u += S, h = !1;
    }
    e.firstPacketWritten = !0;
  }
  writeTsPacket(e, t, i, s) {
    const n = this.continuityCounters.get(e) ?? 0, a = s.length > 0, o = i ? a ? 3 : 2 : a ? 1 : 0;
    this.packetBuffer[0] = 71, this.packetView.setUint16(1, (t ? 16384 : 0) | e & 8191, !1), this.packetBuffer[3] = o << 4 | n & 15, a && this.continuityCounters.set(e, n + 1 & 15);
    let c = 4;
    i && (this.packetBuffer.set(i, c), c += i.length), this.packetBuffer.set(s, c), c += s.length, c < me && this.packetBuffer.fill(255, c);
    const l = this.writer.getPos();
    this.writer.write(this.packetBuffer), this.format._options.onPacket && this.format._options.onPacket(this.packetBuffer.slice(), l);
  }
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async onTrackClose(e) {
    const t = await this.mutex.acquire();
    this.allTracksAreKnown() && this.allTracksKnown.resolve();
    const i = this.trackDatas.find((s) => s.track === e);
    i && await this.flushTimestampQueue(i, !1), await this.interleavePackets(), t();
  }
  async finalize() {
    const e = await this.mutex.acquire();
    this.allTracksKnown.resolve();
    for (const t of this.trackDatas)
      await this.flushTimestampQueue(t, !1);
    await this.interleavePackets(!0), e();
  }
}
const $u = 79764919, zo = new Uint32Array(256);
for (let r = 0; r < 256; r++) {
  let e = r << 24;
  for (let t = 0; t < 8; t++)
    e = e & 2147483648 ? e << 1 ^ $u : e << 1;
  zo[r] = e >>> 0 & 4294967295;
}
const Do = (r) => {
  let e = 4294967295;
  for (let t = 0; t < r.length; t++) {
    const i = r[t];
    e = (e << 8 ^ zo[e >>> 24 ^ i]) >>> 0;
  }
  return e;
}, St = new Uint8Array(16);
{
  const r = L(St);
  St[0] = 0, r.setUint16(1, 45069, !1), r.setUint16(3, 1, !1), St[5] = 193, St[6] = 0, St[7] = 0, r.setUint16(8, 1, !1), r.setUint16(10, 57344 | Mo & 8191, !1), r.setUint32(12, Do(St.subarray(0, 12)), !1);
}
const Qu = (r) => {
  let e = 0;
  for (const c of r)
    e += 5, c.streamType === 129 ? e += zr.length : c.streamType === 135 && (e += Dr.length);
  const t = 9 + e + 4, i = new Uint8Array(3 + t - 4), s = L(i);
  i[0] = 2, s.setUint16(1, 45056 | t & 4095, !1), s.setUint16(3, 1, !1), i[5] = 193, i[6] = 0, i[7] = 0, s.setUint16(8, 65535, !1), s.setUint16(10, 61440, !1);
  let n = 12;
  for (const c of r)
    i[n++] = c.streamType, s.setUint16(n, 57344 | c.pid & 8191, !1), n += 2, c.streamType === 129 ? (s.setUint16(n, 61440 | zr.length, !1), n += 2, i.set(zr, n), n += zr.length) : c.streamType === 135 ? (s.setUint16(n, 61440 | Dr.length, !1), n += 2, i.set(Dr, n), n += Dr.length) : (s.setUint16(n, 61440, !1), n += 2);
  const a = Do(i), o = new Uint8Array(i.length + 4);
  return o.set(i, 0), L(o).setUint32(i.length, a, !1), o;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Ku {
  constructor(e) {
    this.writer = e, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer);
  }
  writeU16(e) {
    this.helperView.setUint16(0, e, !0), this.writer.write(this.helper.subarray(0, 2));
  }
  writeU32(e) {
    this.helperView.setUint32(0, e, !0), this.writer.write(this.helper.subarray(0, 4));
  }
  writeU64(e) {
    this.helperView.setUint32(0, e, !0), this.helperView.setUint32(4, Math.floor(e / 2 ** 32), !0), this.writer.write(this.helper);
  }
  writeAscii(e) {
    this.writer.write(new TextEncoder().encode(e));
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Gu extends gt {
  constructor(e, t) {
    super(e), this.headerWritten = !1, this.dataSize = 0, this.sampleRate = null, this.sampleCount = 0, this.riffSizePos = null, this.dataSizePos = null, this.ds64RiffSizePos = null, this.ds64DataSizePos = null, this.ds64SampleCountPos = null, this.format = t, this.writer = e._writer, this.riffWriter = new Ku(e._writer), this.isRf64 = !!t._options.large;
  }
  async start() {
  }
  async getMimeType() {
    return "audio/wav";
  }
  async addEncodedVideoPacket() {
    throw new Error("WAVE does not support video.");
  }
  async addEncodedAudioPacket(e, t, i) {
    const s = await this.mutex.acquire();
    try {
      if (this.headerWritten || (zt(i), p(i), p(i.decoderConfig), this.writeHeader(e, i.decoderConfig), this.sampleRate = i.decoderConfig.sampleRate, this.headerWritten = !0), this.validateAndNormalizeTimestamp(e, t.timestamp, t.type === "key"), !this.isRf64 && this.writer.getPos() + t.data.byteLength >= 2 ** 32)
        throw new Error("Adding more audio data would exceed the maximum RIFF size of 4 GiB. To write larger files, use RF64 by setting `large: true` in the WavOutputFormatOptions.");
      this.writer.write(t.data), this.dataSize += t.data.byteLength, this.sampleCount += Math.round(t.duration * this.sampleRate), await this.writer.flush();
    } finally {
      s();
    }
  }
  async addSubtitleCue() {
    throw new Error("WAVE does not support subtitles.");
  }
  writeHeader(e, t) {
    this.format._options.onHeader && this.writer.startTrackingWrites();
    let i;
    const s = e.source._codec, n = We(s);
    n.dataType === "ulaw" ? i = Pe.MULAW : n.dataType === "alaw" ? i = Pe.ALAW : n.dataType === "float" ? i = Pe.IEEE_FLOAT : i = Pe.PCM;
    const a = t.numberOfChannels, o = t.sampleRate, c = n.sampleSize * a;
    if (this.riffWriter.writeAscii(this.isRf64 ? "RF64" : "RIFF"), this.isRf64 ? this.riffWriter.writeU32(4294967295) : (this.riffSizePos = this.writer.getPos(), this.riffWriter.writeU32(0)), this.riffWriter.writeAscii("WAVE"), this.isRf64 && (this.riffWriter.writeAscii("ds64"), this.riffWriter.writeU32(28), this.ds64RiffSizePos = this.writer.getPos(), this.riffWriter.writeU64(0), this.ds64DataSizePos = this.writer.getPos(), this.riffWriter.writeU64(0), this.ds64SampleCountPos = this.writer.getPos(), this.riffWriter.writeU64(0), this.riffWriter.writeU32(0)), this.riffWriter.writeAscii("fmt "), this.riffWriter.writeU32(16), this.riffWriter.writeU16(i), this.riffWriter.writeU16(a), this.riffWriter.writeU32(o), this.riffWriter.writeU32(o * c), this.riffWriter.writeU16(c), this.riffWriter.writeU16(8 * n.sampleSize), !xr(this.output._metadataTags)) {
      const l = this.format._options.metadataFormat ?? "info";
      l === "info" ? this.writeInfoChunk(this.output._metadataTags) : l === "id3" ? this.writeId3Chunk(this.output._metadataTags) : ge(l);
    }
    if (this.riffWriter.writeAscii("data"), this.isRf64 ? this.riffWriter.writeU32(4294967295) : (this.dataSizePos = this.writer.getPos(), this.riffWriter.writeU32(0)), this.format._options.onHeader) {
      const { data: l, start: d } = this.writer.stopTrackingWrites();
      this.format._options.onHeader(l, d);
    }
  }
  writeInfoChunk(e) {
    const t = this.writer.getPos();
    this.riffWriter.writeAscii("LIST"), this.riffWriter.writeU32(0), this.riffWriter.writeAscii("INFO");
    const i = /* @__PURE__ */ new Set(), s = (o, c) => {
      if (!Vt(c)) {
        console.warn(`Didn't write tag '${o}' because '${c}' is not ISO 8859-1-compatible.`);
        return;
      }
      const l = c.length + 1, d = new Uint8Array(l);
      for (let u = 0; u < c.length; u++)
        d[u] = c.charCodeAt(u);
      this.riffWriter.writeAscii(o), this.riffWriter.writeU32(l), this.writer.write(d), l & 1 && this.writer.write(new Uint8Array(1)), i.add(o);
    };
    for (const { key: o, value: c } of er(e))
      switch (o) {
        case "title":
          s("INAM", c), i.add("INAM");
          break;
        case "artist":
          s("IART", c), i.add("IART");
          break;
        case "album":
          s("IPRD", c), i.add("IPRD");
          break;
        case "trackNumber":
          {
            const l = e.tracksTotal !== void 0 ? `${c}/${e.tracksTotal}` : c.toString();
            s("ITRK", l), i.add("ITRK");
          }
          break;
        case "genre":
          s("IGNR", c), i.add("IGNR");
          break;
        case "date":
          s("ICRD", c.toISOString().slice(0, 10)), i.add("ICRD");
          break;
        case "comment":
          s("ICMT", c), i.add("ICMT");
          break;
        case "albumArtist":
        case "discNumber":
        case "tracksTotal":
        case "discsTotal":
        case "description":
        case "lyrics":
        case "images":
          break;
        case "raw":
          break;
        default:
          ge(o);
      }
    if (e.raw)
      for (const o in e.raw) {
        const c = e.raw[o];
        c == null || o.length !== 4 || i.has(o) || typeof c == "string" && s(o, c);
      }
    const n = this.writer.getPos(), a = n - t - 8;
    this.writer.seek(t + 4), this.riffWriter.writeU32(a), this.writer.seek(n), a & 1 && this.writer.write(new Uint8Array(1));
  }
  writeId3Chunk(e) {
    const t = this.writer.getPos();
    this.riffWriter.writeAscii("ID3 "), this.riffWriter.writeU32(0);
    const s = new $s(this.writer).writeId3V2Tag(e), n = this.writer.getPos();
    this.writer.seek(t + 4), this.riffWriter.writeU32(s), this.writer.seek(n), s & 1 && this.writer.write(new Uint8Array(1));
  }
  async finalize() {
    const e = await this.mutex.acquire(), t = this.writer.getPos();
    this.isRf64 ? (p(this.ds64RiffSizePos !== null), this.writer.seek(this.ds64RiffSizePos), this.riffWriter.writeU64(t - 8), p(this.ds64DataSizePos !== null), this.writer.seek(this.ds64DataSizePos), this.riffWriter.writeU64(this.dataSize), p(this.ds64SampleCountPos !== null), this.writer.seek(this.ds64SampleCountPos), this.riffWriter.writeU64(this.sampleCount)) : (p(this.riffSizePos !== null), this.writer.seek(this.riffSizePos), this.riffWriter.writeU32(t - 8), p(this.dataSizePos !== null), this.writer.seek(this.dataSizePos), this.riffWriter.writeU32(this.dataSize)), this.writer.seek(t), e();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class He {
  /** Returns a list of video codecs that this output format can contain. */
  getSupportedVideoCodecs() {
    return this.getSupportedCodecs().filter((e) => fe.includes(e));
  }
  /** Returns a list of audio codecs that this output format can contain. */
  getSupportedAudioCodecs() {
    return this.getSupportedCodecs().filter((e) => we.includes(e));
  }
  /** Returns a list of subtitle codecs that this output format can contain. */
  getSupportedSubtitleCodecs() {
    return this.getSupportedCodecs().filter((e) => Ne.includes(e));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _codecUnsupportedHint(e) {
    return "";
  }
}
class Ys extends He {
  /** Internal constructor. */
  constructor(e = {}) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (e.fastStart !== void 0 && ![!1, "in-memory", "reserve", "fragmented"].includes(e.fastStart))
      throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
    if (e.minimumFragmentDuration !== void 0 && (!Number.isFinite(e.minimumFragmentDuration) || e.minimumFragmentDuration < 0))
      throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
    if (e.onFtyp !== void 0 && typeof e.onFtyp != "function")
      throw new TypeError("options.onFtyp, when provided, must be a function.");
    if (e.onMoov !== void 0 && typeof e.onMoov != "function")
      throw new TypeError("options.onMoov, when provided, must be a function.");
    if (e.onMdat !== void 0 && typeof e.onMdat != "function")
      throw new TypeError("options.onMdat, when provided, must be a function.");
    if (e.onMoof !== void 0 && typeof e.onMoof != "function")
      throw new TypeError("options.onMoof, when provided, must be a function.");
    if (e.metadataFormat !== void 0 && !["mdir", "mdta", "udta", "auto"].includes(e.metadataFormat))
      throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
    super(), this._options = e;
  }
  getSupportedTrackCounts() {
    return {
      video: { min: 0, max: 4294967295 },
      audio: { min: 0, max: 4294967295 },
      subtitle: { min: 0, max: 4294967295 },
      total: { min: 1, max: 4294967295 }
    };
  }
  get supportsVideoRotationMetadata() {
    return !0;
  }
  get supportsTimestampedMediaData() {
    return !0;
  }
  /** @internal */
  _createMuxer(e) {
    return new Mu(e, this);
  }
}
class Zs extends Ys {
  /** Creates a new {@link Mp4OutputFormat} configured with the specified `options`. */
  constructor(e) {
    super(e);
  }
  /** @internal */
  get _name() {
    return "MP4";
  }
  get fileExtension() {
    return ".mp4";
  }
  get mimeType() {
    return "video/mp4";
  }
  getSupportedCodecs() {
    return [
      ...fe,
      ...Et,
      // These are supported via ISO/IEC 23003-5:
      "pcm-s16",
      "pcm-s16be",
      "pcm-s24",
      "pcm-s24be",
      "pcm-s32",
      "pcm-s32be",
      "pcm-f32",
      "pcm-f32be",
      "pcm-f64",
      "pcm-f64be",
      ...Ne
    ];
  }
  /** @internal */
  _codecUnsupportedHint(e) {
    return new Js().getSupportedCodecs().includes(e) ? " Switching to MOV will grant support for this codec." : "";
  }
}
class Js extends Ys {
  /** Creates a new {@link MovOutputFormat} configured with the specified `options`. */
  constructor(e) {
    super(e);
  }
  /** @internal */
  get _name() {
    return "MOV";
  }
  get fileExtension() {
    return ".mov";
  }
  get mimeType() {
    return "video/quicktime";
  }
  getSupportedCodecs() {
    return [
      ...fe,
      ...we
    ];
  }
  /** @internal */
  _codecUnsupportedHint(e) {
    return new Zs().getSupportedCodecs().includes(e) ? " Switching to MP4 will grant support for this codec." : "";
  }
}
class fs extends He {
  /** Creates a new {@link MkvOutputFormat} configured with the specified `options`. */
  constructor(e = {}) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (e.appendOnly !== void 0 && typeof e.appendOnly != "boolean")
      throw new TypeError("options.appendOnly, when provided, must be a boolean.");
    if (e.minimumClusterDuration !== void 0 && (!Number.isFinite(e.minimumClusterDuration) || e.minimumClusterDuration < 0))
      throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
    if (e.onEbmlHeader !== void 0 && typeof e.onEbmlHeader != "function")
      throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
    if (e.onSegmentHeader !== void 0 && typeof e.onSegmentHeader != "function")
      throw new TypeError("options.onHeader, when provided, must be a function.");
    if (e.onCluster !== void 0 && typeof e.onCluster != "function")
      throw new TypeError("options.onCluster, when provided, must be a function.");
    super(), this._options = e;
  }
  /** @internal */
  _createMuxer(e) {
    return new Uu(e, this);
  }
  /** @internal */
  get _name() {
    return "Matroska";
  }
  getSupportedTrackCounts() {
    return {
      video: { min: 0, max: 127 },
      audio: { min: 0, max: 127 },
      subtitle: { min: 0, max: 127 },
      total: { min: 1, max: 127 }
    };
  }
  get fileExtension() {
    return ".mkv";
  }
  get mimeType() {
    return "video/x-matroska";
  }
  getSupportedCodecs() {
    return [
      ...fe,
      ...Et,
      ...se.filter((e) => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(e)),
      ...Ne
    ];
  }
  get supportsVideoRotationMetadata() {
    return !1;
  }
  get supportsTimestampedMediaData() {
    return !0;
  }
}
class ms extends fs {
  /** Creates a new {@link WebMOutputFormat} configured with the specified `options`. */
  constructor(e) {
    super(e);
  }
  getSupportedCodecs() {
    return [
      ...fe.filter((e) => ["vp8", "vp9", "av1"].includes(e)),
      ...we.filter((e) => ["opus", "vorbis"].includes(e)),
      ...Ne
    ];
  }
  /** @internal */
  get _name() {
    return "WebM";
  }
  get fileExtension() {
    return ".webm";
  }
  get mimeType() {
    return "video/webm";
  }
  /** @internal */
  _codecUnsupportedHint(e) {
    return new fs().getSupportedCodecs().includes(e) ? " Switching to MKV will grant support for this codec." : "";
  }
}
class Xu extends He {
  /** Creates a new {@link Mp3OutputFormat} configured with the specified `options`. */
  constructor(e = {}) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (e.xingHeader !== void 0 && typeof e.xingHeader != "boolean")
      throw new TypeError("options.xingHeader, when provided, must be a boolean.");
    if (e.onXingFrame !== void 0 && typeof e.onXingFrame != "function")
      throw new TypeError("options.onXingFrame, when provided, must be a function.");
    super(), this._options = e;
  }
  /** @internal */
  _createMuxer(e) {
    return new Vu(e, this);
  }
  /** @internal */
  get _name() {
    return "MP3";
  }
  getSupportedTrackCounts() {
    return {
      video: { min: 0, max: 0 },
      audio: { min: 1, max: 1 },
      subtitle: { min: 0, max: 0 },
      total: { min: 1, max: 1 }
    };
  }
  get fileExtension() {
    return ".mp3";
  }
  get mimeType() {
    return "audio/mpeg";
  }
  getSupportedCodecs() {
    return ["mp3"];
  }
  get supportsVideoRotationMetadata() {
    return !1;
  }
  get supportsTimestampedMediaData() {
    return !1;
  }
}
class Yu extends He {
  /** Creates a new {@link WavOutputFormat} configured with the specified `options`. */
  constructor(e = {}) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (e.large !== void 0 && typeof e.large != "boolean")
      throw new TypeError("options.large, when provided, must be a boolean.");
    if (e.metadataFormat !== void 0 && !["info", "id3"].includes(e.metadataFormat))
      throw new TypeError("options.metadataFormat, when provided, must be either 'info' or 'id3'.");
    if (e.onHeader !== void 0 && typeof e.onHeader != "function")
      throw new TypeError("options.onHeader, when provided, must be a function.");
    super(), this._options = e;
  }
  /** @internal */
  _createMuxer(e) {
    return new Gu(e, this);
  }
  /** @internal */
  get _name() {
    return "WAVE";
  }
  getSupportedTrackCounts() {
    return {
      video: { min: 0, max: 0 },
      audio: { min: 1, max: 1 },
      subtitle: { min: 0, max: 0 },
      total: { min: 1, max: 1 }
    };
  }
  get fileExtension() {
    return ".wav";
  }
  get mimeType() {
    return "audio/wav";
  }
  getSupportedCodecs() {
    return [
      ...se.filter((e) => ["pcm-s16", "pcm-s24", "pcm-s32", "pcm-f32", "pcm-u8", "ulaw", "alaw"].includes(e))
    ];
  }
  get supportsVideoRotationMetadata() {
    return !1;
  }
  get supportsTimestampedMediaData() {
    return !1;
  }
}
class Zu extends He {
  /** Creates a new {@link OggOutputFormat} configured with the specified `options`. */
  constructor(e = {}) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (e.maximumPageDuration !== void 0 && (!Number.isFinite(e.maximumPageDuration) || e.maximumPageDuration <= 0))
      throw new TypeError("options.maximumPageDuration, when provided, must be a positive number.");
    if (e.onPage !== void 0 && typeof e.onPage != "function")
      throw new TypeError("options.onPage, when provided, must be a function.");
    super(), this._options = e;
  }
  /** @internal */
  _createMuxer(e) {
    return new Lu(e, this);
  }
  /** @internal */
  get _name() {
    return "Ogg";
  }
  getSupportedTrackCounts() {
    return {
      video: { min: 0, max: 0 },
      audio: { min: 0, max: 4294967296 },
      subtitle: { min: 0, max: 0 },
      total: { min: 1, max: 4294967296 }
    };
  }
  get fileExtension() {
    return ".ogg";
  }
  get mimeType() {
    return "application/ogg";
  }
  getSupportedCodecs() {
    return [
      ...we.filter((e) => ["vorbis", "opus"].includes(e))
    ];
  }
  get supportsVideoRotationMetadata() {
    return !1;
  }
  get supportsTimestampedMediaData() {
    return !1;
  }
}
class Ju extends He {
  /** Creates a new {@link AdtsOutputFormat} configured with the specified `options`. */
  constructor(e = {}) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (e.onFrame !== void 0 && typeof e.onFrame != "function")
      throw new TypeError("options.onFrame, when provided, must be a function.");
    super(), this._options = e;
  }
  /** @internal */
  _createMuxer(e) {
    return new dd(e, this);
  }
  /** @internal */
  get _name() {
    return "ADTS";
  }
  getSupportedTrackCounts() {
    return {
      video: { min: 0, max: 0 },
      audio: { min: 1, max: 1 },
      subtitle: { min: 0, max: 0 },
      total: { min: 1, max: 1 }
    };
  }
  get fileExtension() {
    return ".aac";
  }
  get mimeType() {
    return "audio/aac";
  }
  getSupportedCodecs() {
    return ["aac"];
  }
  get supportsVideoRotationMetadata() {
    return !1;
  }
  get supportsTimestampedMediaData() {
    return !1;
  }
}
class eh extends He {
  /** Creates a new {@link FlacOutputFormat} configured with the specified `options`. */
  constructor(e = {}) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    super(), this._options = e;
  }
  /** @internal */
  _createMuxer(e) {
    return new fd(e, this);
  }
  /** @internal */
  get _name() {
    return "FLAC";
  }
  getSupportedTrackCounts() {
    return {
      video: { min: 0, max: 0 },
      audio: { min: 1, max: 1 },
      subtitle: { min: 0, max: 0 },
      total: { min: 1, max: 1 }
    };
  }
  get fileExtension() {
    return ".flac";
  }
  get mimeType() {
    return "audio/flac";
  }
  getSupportedCodecs() {
    return ["flac"];
  }
  get supportsVideoRotationMetadata() {
    return !1;
  }
  get supportsTimestampedMediaData() {
    return !1;
  }
}
class th extends He {
  /** Creates a new {@link MpegTsOutputFormat} configured with the specified `options`. */
  constructor(e = {}) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (e.onPacket !== void 0 && typeof e.onPacket != "function")
      throw new TypeError("options.onPacket, when provided, must be a function.");
    super(), this._options = e;
  }
  /** @internal */
  _createMuxer(e) {
    return new ju(e, this);
  }
  /** @internal */
  get _name() {
    return "MPEG-TS";
  }
  getSupportedTrackCounts() {
    return {
      video: { min: 0, max: 16 },
      audio: { min: 0, max: 32 },
      subtitle: { min: 0, max: 0 },
      total: { min: 1, max: 48 }
    };
  }
  get fileExtension() {
    return ".ts";
  }
  get mimeType() {
    return "video/MP2T";
  }
  getSupportedCodecs() {
    return [
      ...fe.filter((e) => ["avc", "hevc"].includes(e)),
      ...we.filter((e) => ["aac", "mp3", "ac3", "eac3"].includes(e))
    ];
  }
  get supportsVideoRotationMetadata() {
    return !1;
  }
  get supportsTimestampedMediaData() {
    return !0;
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const en = (r) => {
  if (!r || typeof r != "object")
    throw new TypeError("Encoding config must be an object.");
  if (!fe.includes(r.codec))
    throw new TypeError(`Invalid video codec '${r.codec}'. Must be one of: ${fe.join(", ")}.`);
  if (!(r.bitrate instanceof Se) && (!Number.isInteger(r.bitrate) || r.bitrate <= 0))
    throw new TypeError("config.bitrate must be a positive integer or a quality.");
  if (r.keyFrameInterval !== void 0 && (!Number.isFinite(r.keyFrameInterval) || r.keyFrameInterval < 0))
    throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
  if (r.sizeChangeBehavior !== void 0 && !["deny", "passThrough", "fill", "contain", "cover"].includes(r.sizeChangeBehavior))
    throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
  if (r.onEncodedPacket !== void 0 && typeof r.onEncodedPacket != "function")
    throw new TypeError("config.onEncodedChunk, when provided, must be a function.");
  if (r.onEncoderConfig !== void 0 && typeof r.onEncoderConfig != "function")
    throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
  Oo(r.codec, r);
}, Oo = (r, e) => {
  if (!e || typeof e != "object")
    throw new TypeError("Encoding options must be an object.");
  if (e.alpha !== void 0 && !["discard", "keep"].includes(e.alpha))
    throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
  if (e.bitrateMode !== void 0 && !["constant", "variable"].includes(e.bitrateMode))
    throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
  if (e.latencyMode !== void 0 && !["quality", "realtime"].includes(e.latencyMode))
    throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
  if (e.fullCodecString !== void 0 && typeof e.fullCodecString != "string")
    throw new TypeError("fullCodecString, when provided, must be a string.");
  if (e.fullCodecString !== void 0 && aa(e.fullCodecString) !== r)
    throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${r}).`);
  if (e.hardwareAcceleration !== void 0 && !["no-preference", "prefer-hardware", "prefer-software"].includes(e.hardwareAcceleration))
    throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
  if (e.scalabilityMode !== void 0 && typeof e.scalabilityMode != "string")
    throw new TypeError("scalabilityMode, when provided, must be a string.");
  if (e.contentHint !== void 0 && typeof e.contentHint != "string")
    throw new TypeError("contentHint, when provided, must be a string.");
}, ps = (r) => {
  const e = r.bitrate instanceof Se ? r.bitrate._toVideoBitrate(r.codec, r.width, r.height) : r.bitrate;
  return {
    codec: r.fullCodecString ?? Cc(r.codec, r.width, r.height, e),
    width: r.width,
    height: r.height,
    displayWidth: r.squarePixelWidth,
    displayHeight: r.squarePixelHeight,
    bitrate: e,
    bitrateMode: r.bitrateMode,
    alpha: r.alpha ?? "discard",
    framerate: r.framerate,
    latencyMode: r.latencyMode,
    hardwareAcceleration: r.hardwareAcceleration,
    scalabilityMode: r.scalabilityMode,
    contentHint: r.contentHint,
    ...Ec(r.codec)
  };
}, tn = (r) => {
  if (!r || typeof r != "object")
    throw new TypeError("Encoding config must be an object.");
  if (!we.includes(r.codec))
    throw new TypeError(`Invalid audio codec '${r.codec}'. Must be one of: ${we.join(", ")}.`);
  if (r.bitrate === void 0 && (!se.includes(r.codec) || r.codec === "flac"))
    throw new TypeError("config.bitrate must be provided for compressed audio codecs.");
  if (r.bitrate !== void 0 && !(r.bitrate instanceof Se) && (!Number.isInteger(r.bitrate) || r.bitrate <= 0))
    throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
  if (r.onEncodedPacket !== void 0 && typeof r.onEncodedPacket != "function")
    throw new TypeError("config.onEncodedChunk, when provided, must be a function.");
  if (r.onEncoderConfig !== void 0 && typeof r.onEncoderConfig != "function")
    throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
  Uo(r.codec, r);
}, Uo = (r, e) => {
  if (!e || typeof e != "object")
    throw new TypeError("Encoding options must be an object.");
  if (e.bitrateMode !== void 0 && !["constant", "variable"].includes(e.bitrateMode))
    throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
  if (e.fullCodecString !== void 0 && typeof e.fullCodecString != "string")
    throw new TypeError("fullCodecString, when provided, must be a string.");
  if (e.fullCodecString !== void 0 && aa(e.fullCodecString) !== r)
    throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${r}).`);
}, gs = (r) => {
  const e = r.bitrate instanceof Se ? r.bitrate._toAudioBitrate(r.codec) : r.bitrate;
  return {
    codec: r.fullCodecString ?? Ic(r.codec, r.numberOfChannels, r.sampleRate),
    numberOfChannels: r.numberOfChannels,
    sampleRate: r.sampleRate,
    bitrate: e,
    bitrateMode: r.bitrateMode,
    ...vc(r.codec)
  };
};
class Se {
  /** @internal */
  constructor(e) {
    this._factor = e;
  }
  /** @internal */
  _toVideoBitrate(e, t, i) {
    const s = t * i, n = {
      avc: 1,
      // H.264/AVC (baseline)
      hevc: 0.6,
      // H.265/HEVC (~40% more efficient than AVC)
      vp9: 0.6,
      // Similar to HEVC
      av1: 0.4,
      // ~60% more efficient than AVC
      vp8: 1.2
      // Slightly less efficient than AVC
    }, a = 1920 * 1080, o = 3e6, c = Math.pow(s / a, 0.95), u = o * c * n[e] * this._factor;
    return Math.ceil(u / 1e3) * 1e3;
  }
  /** @internal */
  _toAudioBitrate(e) {
    if (se.includes(e) || e === "flac")
      return;
    const i = {
      aac: 128e3,
      // 128kbps base for AAC
      opus: 64e3,
      // 64kbps base for Opus
      mp3: 16e4,
      // 160kbps base for MP3
      vorbis: 64e3,
      // 64kbps base for Vorbis
      ac3: 384e3,
      // 384kbps base for AC-3
      eac3: 192e3
      // 192kbps base for E-AC-3
    }[e];
    if (!i)
      throw new Error(`Unhandled codec: ${e}`);
    let s = i * this._factor;
    return e === "aac" ? s = [96e3, 128e3, 16e4, 192e3].reduce((a, o) => Math.abs(o - s) < Math.abs(a - s) ? o : a) : e === "opus" || e === "vorbis" ? s = Math.max(6e3, s) : e === "mp3" && (s = [
      8e3,
      16e3,
      24e3,
      32e3,
      4e4,
      48e3,
      64e3,
      8e4,
      96e3,
      112e3,
      128e3,
      16e4,
      192e3,
      224e3,
      256e3,
      32e4
    ].reduce((a, o) => Math.abs(o - s) < Math.abs(a - s) ? o : a)), Math.round(s / 1e3) * 1e3;
  }
}
const rh = /* @__PURE__ */ new Se(0.3), ih = /* @__PURE__ */ new Se(0.6), sh = /* @__PURE__ */ new Se(1), ws = /* @__PURE__ */ new Se(2), nh = /* @__PURE__ */ new Se(4), ah = (r) => {
  if (fe.includes(r))
    return gi(r);
  if (we.includes(r))
    return wi(r);
  if (Ne.includes(r))
    return bi(r);
  throw new TypeError(`Unknown codec '${r}'.`);
}, gi = async (r, e = {}) => {
  const { width: t = 1280, height: i = 720, bitrate: s = 1e6, ...n } = e;
  if (!fe.includes(r))
    return !1;
  if (!Number.isInteger(t) || t <= 0)
    throw new TypeError("width must be a positive integer.");
  if (!Number.isInteger(i) || i <= 0)
    throw new TypeError("height must be a positive integer.");
  if (!(s instanceof Se) && (!Number.isInteger(s) || s <= 0))
    throw new TypeError("bitrate must be a positive integer or a quality.");
  Oo(r, n);
  let a = null;
  return Pr.length > 0 && (a ??= ps({
    codec: r,
    width: t,
    height: i,
    bitrate: s,
    framerate: void 0,
    ...n
  }), Pr.some((l) => l.supports(r, a))) ? !0 : typeof VideoEncoder > "u" || (t % 2 === 1 || i % 2 === 1) && (r === "avc" || r === "hevc") || (a ??= ps({
    codec: r,
    width: t,
    height: i,
    bitrate: s,
    framerate: void 0,
    ...n,
    alpha: "discard"
    // Since we handle alpha ourselves
  }), !(await VideoEncoder.isConfigSupported(a)).supported) ? !1 : Xt() ? new Promise(async (l) => {
    try {
      const d = new VideoEncoder({
        output: () => {
        },
        error: () => l(!1)
      });
      d.configure(a);
      const u = new Uint8Array(t * i * 4), h = new VideoFrame(u, {
        format: "RGBA",
        codedWidth: t,
        codedHeight: i,
        timestamp: 0
      });
      d.encode(h), h.close(), await d.flush(), l(!0);
    } catch {
      l(!1);
    }
  }) : !0;
}, wi = async (r, e = {}) => {
  const { numberOfChannels: t = 2, sampleRate: i = 48e3, bitrate: s = 128e3, ...n } = e;
  if (!we.includes(r))
    return !1;
  if (!Number.isInteger(t) || t <= 0)
    throw new TypeError("numberOfChannels must be a positive integer.");
  if (!Number.isInteger(i) || i <= 0)
    throw new TypeError("sampleRate must be a positive integer.");
  if (!(s instanceof Se) && (!Number.isInteger(s) || s <= 0))
    throw new TypeError("bitrate must be a positive integer.");
  Uo(r, n);
  let a = null;
  return Cr.length > 0 && (a ??= gs({
    codec: r,
    numberOfChannels: t,
    sampleRate: i,
    bitrate: s,
    ...n
  }), Cr.some((c) => c.supports(r, a))) || se.includes(r) ? !0 : typeof AudioEncoder > "u" ? !1 : (a ??= gs({
    codec: r,
    numberOfChannels: t,
    sampleRate: i,
    bitrate: s,
    ...n
  }), (await AudioEncoder.isConfigSupported(a)).supported === !0);
}, bi = async (r) => !!Ne.includes(r), oh = async () => {
  const [r, e, t] = await Promise.all([
    No(),
    ei(),
    Vo()
  ]);
  return [...r, ...e, ...t];
}, No = async (r = fe, e) => {
  const t = await Promise.all(r.map((i) => gi(i, e)));
  return r.filter((i, s) => t[s]);
}, ei = async (r = we, e) => {
  const t = await Promise.all(r.map((i) => wi(i, e)));
  return r.filter((i, s) => t[s]);
}, Vo = async (r = Ne) => {
  const e = await Promise.all(r.map(bi));
  return r.filter((t, i) => e[i]);
}, Wo = async (r, e) => {
  for (const t of r)
    if (await gi(t, e))
      return t;
  return null;
}, ch = async (r, e) => {
  for (const t of r)
    if (await wi(t, e))
      return t;
  return null;
}, lh = async (r) => {
  for (const e of r)
    if (await bi(e))
      return e;
  return null;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class ki {
  constructor() {
    this._connectedTrack = null, this._closingPromise = null, this._closed = !1, this._timestampOffset = 0;
  }
  /** @internal */
  _ensureValidAdd() {
    if (!this._connectedTrack)
      throw new Error("Source is not connected to an output track.");
    if (this._connectedTrack.output.state === "canceled")
      throw new Error("Output has been canceled.");
    if (this._connectedTrack.output.state === "finalizing" || this._connectedTrack.output.state === "finalized")
      throw new Error("Output has been finalized.");
    if (this._connectedTrack.output.state === "pending")
      throw new Error("Output has not started.");
    if (this._closed)
      throw new Error("Source is closed.");
  }
  /** @internal */
  async _start() {
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async _flushAndClose(e) {
  }
  /**
   * Closes this source. This prevents future samples from being added and signals to the output file that no further
   * samples will come in for this track. Calling `.close()` is optional but recommended after adding the
   * last sample - for improved performance and reduced memory usage.
   */
  close() {
    if (this._closingPromise)
      return;
    const e = this._connectedTrack;
    if (!e)
      throw new Error("Cannot call close without connecting the source to an output track.");
    if (e.output.state === "pending")
      throw new Error("Cannot call close before output has been started.");
    this._closingPromise = (async () => {
      await this._flushAndClose(!1), this._closed = !0, !(e.output.state === "finalizing" || e.output.state === "finalized") && e.output._muxer.onTrackClose(e);
    })();
  }
  /** @internal */
  async _flushOrWaitForOngoingClose(e) {
    return this._closingPromise ??= (async () => {
      await this._flushAndClose(e), this._closed = !0;
    })();
  }
}
class ar extends ki {
  /** Internal constructor. */
  constructor(e) {
    if (super(), this._connectedTrack = null, !fe.includes(e))
      throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${fe.join(", ")}.`);
    this._codec = e;
  }
}
class Lo extends ar {
  /** Creates a new {@link EncodedVideoPacketSource} whose packets are encoded using `codec`. */
  constructor(e) {
    super(e);
  }
  /**
   * Adds an encoded packet to the output video track. Packets must be added in *decode order*, while a packet's
   * timestamp must be its *presentation timestamp*. B-frames are handled automatically.
   *
   * @param meta - Additional metadata from the encoder. You should pass this for the first call, including a valid
   * decoder config.
   *
   * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
   * to respect writer and encoder backpressure.
   */
  add(e, t) {
    if (!(e instanceof X))
      throw new TypeError("packet must be an EncodedPacket.");
    if (e.isMetadataOnly)
      throw new TypeError("Metadata-only packets cannot be added.");
    if (t !== void 0 && (!t || typeof t != "object"))
      throw new TypeError("meta, when provided, must be an object.");
    return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, e, t);
  }
}
class rn {
  constructor(e, t) {
    this.source = e, this.encodingConfig = t, this.ensureEncoderPromise = null, this.encoderInitialized = !1, this.encoder = null, this.muxer = null, this.lastMultipleOfKeyFrameInterval = -1, this.codedWidth = null, this.codedHeight = null, this.resizeCanvas = null, this.customEncoder = null, this.customEncoderCallSerializer = new ni(), this.customEncoderQueueSize = 0, this.alphaEncoder = null, this.splitter = null, this.splitterCreationFailed = !1, this.alphaFrameQueue = [], this.error = null;
  }
  async add(e, t, i) {
    try {
      if (this.checkForEncoderError(), this.source._ensureValidAdd(), this.codedWidth !== null && this.codedHeight !== null) {
        if (e.codedWidth !== this.codedWidth || e.codedHeight !== this.codedHeight) {
          const o = this.encodingConfig.sizeChangeBehavior ?? "deny";
          if (o !== "passThrough") {
            if (o === "deny")
              throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'strict' in the encoding options.`);
            {
              let c = !1;
              this.resizeCanvas || (typeof document < "u" ? (this.resizeCanvas = document.createElement("canvas"), this.resizeCanvas.width = this.codedWidth, this.resizeCanvas.height = this.codedHeight) : this.resizeCanvas = new OffscreenCanvas(this.codedWidth, this.codedHeight), c = !0);
              const l = this.resizeCanvas.getContext("2d", {
                alpha: Xt()
                // Firefox has VideoFrame glitches with opaque canvases
              });
              p(l), c || (Xt() ? (l.fillStyle = "black", l.fillRect(0, 0, this.codedWidth, this.codedHeight)) : l.clearRect(0, 0, this.codedWidth, this.codedHeight)), e.drawWithFit(l, { fit: o }), t && e.close(), e = new ae(this.resizeCanvas, {
                timestamp: e.timestamp,
                duration: e.duration,
                rotation: e.rotation
              }), t = !0;
            }
          }
        }
      } else
        this.codedWidth = e.codedWidth, this.codedHeight = e.codedHeight;
      this.encoderInitialized || (this.ensureEncoderPromise || this.ensureEncoder(e), this.encoderInitialized || await this.ensureEncoderPromise), p(this.encoderInitialized);
      const s = this.encodingConfig.keyFrameInterval ?? 5, n = Math.floor(e.timestamp / s), a = {
        ...i,
        keyFrame: i?.keyFrame || s === 0 || n !== this.lastMultipleOfKeyFrameInterval
      };
      if (this.lastMultipleOfKeyFrameInterval = n, this.customEncoder) {
        this.customEncoderQueueSize++;
        const o = e.clone(), c = this.customEncoderCallSerializer.call(() => this.customEncoder.encode(o, a)).then(() => this.customEncoderQueueSize--).catch((l) => this.error ??= l).finally(() => {
          o.close();
        });
        this.customEncoderQueueSize >= 4 && await c;
      } else {
        p(this.encoder);
        const o = e.toVideoFrame();
        if (!this.alphaEncoder)
          this.encoder.encode(o, a), o.close();
        else if (!!o.format && !o.format.includes("A") || this.splitterCreationFailed)
          this.alphaFrameQueue.push(null), this.encoder.encode(o, a), o.close();
        else {
          const l = o.displayWidth, d = o.displayHeight;
          if (!this.splitter)
            try {
              this.splitter = new dh(l, d);
            } catch (u) {
              console.error("Due to an error, only color data will be encoded.", u), this.splitterCreationFailed = !0, this.alphaFrameQueue.push(null), this.encoder.encode(o, a), o.close();
            }
          if (this.splitter) {
            const u = this.splitter.extractColor(o), h = this.splitter.extractAlpha(o);
            this.alphaFrameQueue.push(h), this.encoder.encode(u, a), u.close(), o.close();
          }
        }
        t && e.close(), this.encoder.encodeQueueSize >= 4 && await new Promise((c) => this.encoder.addEventListener("dequeue", c, { once: !0 }));
      }
      await this.muxer.mutex.currentPromise;
    } finally {
      t && e.close();
    }
  }
  ensureEncoder(e) {
    this.ensureEncoderPromise = (async () => {
      const t = ps({
        width: e.codedWidth,
        height: e.codedHeight,
        squarePixelWidth: e.squarePixelWidth,
        squarePixelHeight: e.squarePixelHeight,
        ...this.encodingConfig,
        framerate: this.source._connectedTrack?.metadata.frameRate
      });
      this.encodingConfig.onEncoderConfig?.(t);
      const i = Pr.find((s) => s.supports(this.encodingConfig.codec, t));
      if (i)
        this.customEncoder = new i(), this.customEncoder.codec = this.encodingConfig.codec, this.customEncoder.config = t, this.customEncoder.onPacket = (s, n) => {
          if (!(s instanceof X))
            throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");
          if (n !== void 0 && (!n || typeof n != "object"))
            throw new TypeError("The second argument passed to onPacket must be an object or undefined.");
          this.encodingConfig.onEncodedPacket?.(s, n), this.muxer.addEncodedVideoPacket(this.source._connectedTrack, s, n).catch((a) => {
            this.error ??= a;
          });
        }, await this.customEncoder.init();
      else {
        if (typeof VideoEncoder > "u")
          throw new Error("VideoEncoder is not supported by this browser.");
        if (t.alpha = "discard", this.encodingConfig.alpha === "keep" && (t.latencyMode = "quality"), (t.width % 2 === 1 || t.height % 2 === 1) && (this.encodingConfig.codec === "avc" || this.encodingConfig.codec === "hevc"))
          throw new Error(`The dimensions ${t.width}x${t.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);
        if (!(await VideoEncoder.isConfigSupported(t)).supported)
          throw new Error(`This specific encoder configuration (${t.codec}, ${t.bitrate} bps, ${t.width}x${t.height}, hardware acceleration: ${t.hardwareAcceleration ?? "no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`);
        const a = [], o = [];
        let c = 0, l = 0;
        const d = (h, m, g) => {
          const f = {};
          if (m) {
            const k = new Uint8Array(m.byteLength);
            m.copyTo(k), f.alpha = k;
          }
          const w = X.fromEncodedChunk(h, f);
          this.encodingConfig.onEncodedPacket?.(w, g), this.muxer.addEncodedVideoPacket(this.source._connectedTrack, w, g).catch((k) => {
            this.error ??= k;
          });
        }, u = new Error("Encoding error").stack;
        if (this.encoder = new VideoEncoder({
          output: (h, m) => {
            if (!this.alphaEncoder) {
              d(h, null, m);
              return;
            }
            const g = this.alphaFrameQueue.shift();
            p(g !== void 0), g ? (this.alphaEncoder.encode(g, {
              // Crucial: The alpha frame is forced to be a key frame whenever the color frame
              // also is. Without this, playback can glitch and even crash in some browsers.
              // This is the reason why the two encoders are wired in series and not in parallel.
              keyFrame: h.type === "key"
            }), l++, g.close(), a.push({ chunk: h, meta: m })) : l === 0 ? d(h, null, m) : (o.push(c + l), a.push({ chunk: h, meta: m }));
          },
          error: (h) => {
            h.stack = u, this.error ??= h;
          }
        }), this.encoder.configure(t), this.encodingConfig.alpha === "keep") {
          const h = new Error("Encoding error").stack;
          this.alphaEncoder = new VideoEncoder({
            // We ignore the alpha chunk's metadata
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            output: (m, g) => {
              l--;
              const f = a.shift();
              for (p(f !== void 0), d(f.chunk, m, f.meta), c++; o.length > 0 && o[0] === c; ) {
                o.shift();
                const w = a.shift();
                p(w !== void 0), d(w.chunk, null, w.meta);
              }
            },
            error: (m) => {
              m.stack = h, this.error ??= m;
            }
          }), this.alphaEncoder.configure(t);
        }
      }
      p(this.source._connectedTrack), this.muxer = this.source._connectedTrack.output._muxer, this.encoderInitialized = !0;
    })();
  }
  async flushAndClose(e) {
    e || this.checkForEncoderError(), this.customEncoder ? (e || this.customEncoderCallSerializer.call(() => this.customEncoder.flush()), await this.customEncoderCallSerializer.call(() => this.customEncoder.close())) : this.encoder && (e || (await this.encoder.flush(), await this.alphaEncoder?.flush()), this.encoder.state !== "closed" && this.encoder.close(), this.alphaEncoder && this.alphaEncoder.state !== "closed" && this.alphaEncoder.close(), this.alphaFrameQueue.forEach((t) => t?.close()), this.splitter?.close()), e || this.checkForEncoderError();
  }
  getQueueSize() {
    return this.customEncoder ? this.customEncoderQueueSize : this.encoder?.encodeQueueSize ?? 0;
  }
  checkForEncoderError() {
    if (this.error)
      throw this.error;
  }
}
class dh {
  constructor(e, t) {
    this.lastFrame = null, typeof OffscreenCanvas < "u" ? this.canvas = new OffscreenCanvas(e, t) : (this.canvas = document.createElement("canvas"), this.canvas.width = e, this.canvas.height = t);
    const i = this.canvas.getContext("webgl2", {
      alpha: !0
      // Needed due to the YUV thing we do for alpha
    });
    if (!i)
      throw new Error("Couldn't acquire WebGL 2 context.");
    this.gl = i, this.colorProgram = this.createColorProgram(), this.alphaProgram = this.createAlphaProgram(), this.vao = this.createVAO(), this.sourceTexture = this.createTexture(), this.alphaResolutionLocation = this.gl.getUniformLocation(this.alphaProgram, "u_resolution"), this.gl.useProgram(this.colorProgram), this.gl.uniform1i(this.gl.getUniformLocation(this.colorProgram, "u_sourceTexture"), 0), this.gl.useProgram(this.alphaProgram), this.gl.uniform1i(this.gl.getUniformLocation(this.alphaProgram, "u_sourceTexture"), 0);
  }
  createVertexShader() {
    return this.createShader(this.gl.VERTEX_SHADER, `#version 300 es
			in vec2 a_position;
			in vec2 a_texCoord;
			out vec2 v_texCoord;
			
			void main() {
				gl_Position = vec4(a_position, 0.0, 1.0);
				v_texCoord = a_texCoord;
			}
		`);
  }
  createColorProgram() {
    const e = this.createVertexShader(), t = this.createShader(this.gl.FRAGMENT_SHADER, `#version 300 es
			precision highp float;
			
			uniform sampler2D u_sourceTexture;
			in vec2 v_texCoord;
			out vec4 fragColor;
			
			void main() {
				vec4 source = texture(u_sourceTexture, v_texCoord);
				fragColor = vec4(source.rgb, 1.0);
			}
		`), i = this.gl.createProgram();
    return this.gl.attachShader(i, e), this.gl.attachShader(i, t), this.gl.linkProgram(i), i;
  }
  createAlphaProgram() {
    const e = this.createVertexShader(), t = this.createShader(this.gl.FRAGMENT_SHADER, `#version 300 es
			precision highp float;
			
			uniform sampler2D u_sourceTexture;
			uniform vec2 u_resolution; // The width and height of the canvas
			in vec2 v_texCoord;
			out vec4 fragColor;

			// This function determines the value for a single byte in the YUV stream
			float getByteValue(float byteOffset) {
				float width = u_resolution.x;
				float height = u_resolution.y;

				float yPlaneSize = width * height;

				if (byteOffset < yPlaneSize) {
					// This byte is in the luma plane. Find the corresponding pixel coordinates to sample from
					float y = floor(byteOffset / width);
					float x = mod(byteOffset, width);
					
					// Add 0.5 to sample the center of the texel
					vec2 sampleCoord = (vec2(x, y) + 0.5) / u_resolution;
					
					// The luma value is the alpha from the source texture
					return texture(u_sourceTexture, sampleCoord).a;
				} else {
					// Write a fixed value for chroma and beyond
					return 128.0 / 255.0;
				}
			}
			
			void main() {
				// Each fragment writes 4 bytes (R, G, B, A)
				float pixelIndex = floor(gl_FragCoord.y) * u_resolution.x + floor(gl_FragCoord.x);
				float baseByteOffset = pixelIndex * 4.0;

				vec4 result;
				for (int i = 0; i < 4; i++) {
					float currentByteOffset = baseByteOffset + float(i);
					result[i] = getByteValue(currentByteOffset);
				}
				
				fragColor = result;
			}
		`), i = this.gl.createProgram();
    return this.gl.attachShader(i, e), this.gl.attachShader(i, t), this.gl.linkProgram(i), i;
  }
  createShader(e, t) {
    const i = this.gl.createShader(e);
    return this.gl.shaderSource(i, t), this.gl.compileShader(i), this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS) || console.error("Shader compile error:", this.gl.getShaderInfoLog(i)), i;
  }
  createVAO() {
    const e = this.gl.createVertexArray();
    this.gl.bindVertexArray(e);
    const t = new Float32Array([
      -1,
      -1,
      0,
      1,
      1,
      -1,
      1,
      1,
      -1,
      1,
      0,
      0,
      1,
      1,
      1,
      0
    ]), i = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, i), this.gl.bufferData(this.gl.ARRAY_BUFFER, t, this.gl.STATIC_DRAW);
    const s = this.gl.getAttribLocation(this.colorProgram, "a_position"), n = this.gl.getAttribLocation(this.colorProgram, "a_texCoord");
    return this.gl.enableVertexAttribArray(s), this.gl.vertexAttribPointer(s, 2, this.gl.FLOAT, !1, 16, 0), this.gl.enableVertexAttribArray(n), this.gl.vertexAttribPointer(n, 2, this.gl.FLOAT, !1, 16, 8), e;
  }
  createTexture() {
    const e = this.gl.createTexture();
    return this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), e;
  }
  updateTexture(e) {
    this.lastFrame !== e && ((e.displayWidth !== this.canvas.width || e.displayHeight !== this.canvas.height) && (this.canvas.width = e.displayWidth, this.canvas.height = e.displayHeight), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, this.sourceTexture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, e), this.lastFrame = e);
  }
  extractColor(e) {
    return this.updateTexture(e), this.gl.useProgram(this.colorProgram), this.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.bindVertexArray(this.vao), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4), new VideoFrame(this.canvas, {
      timestamp: e.timestamp,
      duration: e.duration ?? void 0,
      alpha: "discard"
    });
  }
  extractAlpha(e) {
    this.updateTexture(e), this.gl.useProgram(this.alphaProgram), this.gl.uniform2f(this.alphaResolutionLocation, this.canvas.width, this.canvas.height), this.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.bindVertexArray(this.vao), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
    const { width: t, height: i } = this.canvas, s = Math.ceil(t / 2) * Math.ceil(i / 2), n = t * i + s * 2, a = Math.ceil(n / (t * 4));
    let o = new Uint8Array(4 * t * a);
    this.gl.readPixels(0, 0, t, a, this.gl.RGBA, this.gl.UNSIGNED_BYTE, o), o = o.subarray(0, n), p(o[t * i] === 128), p(o[o.length - 1] === 128);
    const c = {
      format: "I420",
      codedWidth: t,
      codedHeight: i,
      timestamp: e.timestamp,
      duration: e.duration ?? void 0,
      transfer: [o.buffer]
    };
    return new VideoFrame(o, c);
  }
  close() {
    this.gl.getExtension("WEBGL_lose_context")?.loseContext(), this.gl = null;
  }
}
class bs extends ar {
  /**
   * Creates a new {@link VideoSampleSource} whose samples are encoded according to the specified
   * {@link VideoEncodingConfig}.
   */
  constructor(e) {
    en(e), super(e.codec), this._encoder = new rn(this, e);
  }
  /**
   * Encodes a video sample (frame) and then adds it to the output.
   *
   * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
   * to respect writer and encoder backpressure.
   */
  add(e, t) {
    if (!(e instanceof ae))
      throw new TypeError("videoSample must be a VideoSample.");
    return this._encoder.add(e, !1, t);
  }
  /** @internal */
  _flushAndClose(e) {
    return this._encoder.flushAndClose(e);
  }
}
class uh extends ar {
  /**
   * Creates a new {@link CanvasSource} from a canvas element or `OffscreenCanvas` whose samples are encoded
   * according to the specified {@link VideoEncodingConfig}.
   */
  constructor(e, t) {
    if (!(typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) && !(typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas))
      throw new TypeError("canvas must be an HTMLCanvasElement or OffscreenCanvas.");
    en(t), super(t.codec), this._encoder = new rn(this, t), this._canvas = e;
  }
  /**
   * Captures the current canvas state as a video sample (frame), encodes it and adds it to the output.
   *
   * @param timestamp - The timestamp of the sample, in seconds.
   * @param duration - The duration of the sample, in seconds.
   *
   * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
   * to respect writer and encoder backpressure.
   */
  add(e, t = 0, i) {
    if (!Number.isFinite(e) || e < 0)
      throw new TypeError("timestamp must be a non-negative number.");
    if (!Number.isFinite(t) || t < 0)
      throw new TypeError("duration must be a non-negative number.");
    const s = new ae(this._canvas, { timestamp: e, duration: t });
    return this._encoder.add(s, !0, i);
  }
  /** @internal */
  _flushAndClose(e) {
    return this._encoder.flushAndClose(e);
  }
}
class hh extends ar {
  /** A promise that rejects upon any error within this source. This promise never resolves. */
  get errorPromise() {
    return this._errorPromiseAccessed = !0, this._promiseWithResolvers.promise;
  }
  /** Whether this source is currently paused as a result of calling `.pause()`. */
  get paused() {
    return this._paused;
  }
  /**
   * Creates a new {@link MediaStreamVideoTrackSource} from a
   * [`MediaStreamVideoTrack`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack), which will pull
   * video samples from the stream in real time and encode them according to {@link VideoEncodingConfig}.
   */
  constructor(e, t, i = {}) {
    if (!(e instanceof MediaStreamTrack) || e.kind !== "video")
      throw new TypeError("track must be a video MediaStreamTrack.");
    if (en(t), typeof i != "object" || !i)
      throw new TypeError("options must be an object.");
    if (i.frameRate != null && (typeof i.frameRate != "number" || i.frameRate <= 0))
      throw new TypeError("options.frameRate, when provided, must be either a positive number or null.");
    t = {
      ...t,
      latencyMode: "realtime"
    }, super(t.codec), this._abortController = null, this._workerTrackId = null, this._workerListener = null, this._promiseWithResolvers = re(), this._errorPromiseAccessed = !1, this._paused = !1, this._lastVideoFrame = null, this._timerHandle = null, this._videoElement = null, this._options = i, this._encoder = new rn(this, t), this._track = e;
  }
  /** @internal */
  async _start() {
    this._errorPromiseAccessed || console.warn("Make sure not to ignore the `errorPromise` field on MediaStreamVideoTrackSource, so that any internal errors get bubbled up properly.");
    const e = this._options.frameRate !== void 0 ? this._options.frameRate : this._track.getSettings().frameRate ?? null;
    this._abortController = new AbortController();
    let t = null, i = null, s = 0, n = !1, a = null, o = 0;
    const c = () => {
      if (p(e !== null), !this._lastVideoFrame)
        return;
      p(i !== null), p(t !== null);
      const u = performance.now();
      for (; u - i > 1e3 / e; ) {
        i += 1e3 / e;
        const h = t + s / e, m = new VideoFrame(this._videoElement ?? this._lastVideoFrame, {
          timestamp: 1e6 * h,
          duration: 1e6 / e
        });
        d(m, u);
      }
    };
    e !== null && (this._timerHandle = Sc(c, 4));
    const l = (u) => {
      if (e === null)
        d(u);
      else {
        const h = performance.now();
        this._lastVideoFrame ? (c(), this._lastVideoFrame?.close(), this._lastVideoFrame = u) : (d(u.clone(), h), i = h, this._lastVideoFrame = u);
      }
    }, d = (u, h = performance.now()) => {
      if (n) {
        u.close();
        return;
      }
      s++;
      const m = u.timestamp / 1e6;
      if (this._paused) {
        if (t !== null) {
          if (a !== null) {
            const w = m - a;
            o -= w;
          }
          a = m;
        }
        u.close();
        return;
      }
      if (t === null) {
        t = m;
        const f = this._connectedTrack.output._muxer;
        f.firstMediaStreamTimestamp === null ? (f.firstMediaStreamTimestamp = h / 1e3, this._timestampOffset = -t) : this._timestampOffset = h / 1e3 - f.firstMediaStreamTimestamp - t;
      }
      if (a = m, this._encoder.getQueueSize() >= 8) {
        u.close();
        return;
      }
      const g = new ae(u, {
        timestamp: m + o
      });
      this._encoder.add(g, !0).catch((f) => {
        n = !0, this._abortController?.abort(), this._promiseWithResolvers.reject(f), this._workerTrackId !== null && Hi({
          type: "stopTrack",
          trackId: this._workerTrackId
        });
      });
    };
    if (typeof MediaStreamTrackProcessor < "u") {
      const u = new MediaStreamTrackProcessor({ track: this._track }), h = new WritableStream({ write: l });
      u.readable.pipeTo(h, {
        signal: this._abortController.signal
      }).catch((m) => {
        m instanceof DOMException && m.name === "AbortError" || this._promiseWithResolvers.reject(m);
      });
    } else if (await bh())
      this._workerTrackId = gh++, Hi({
        type: "videoTrack",
        trackId: this._workerTrackId,
        track: this._track
      }), this._workerListener = (h) => {
        const m = h.data;
        m.type === "videoFrame" && m.trackId === this._workerTrackId ? l(m.videoFrame) : m.type === "error" && m.trackId === this._workerTrackId && this._promiseWithResolvers.reject(m.error);
      }, Re.addEventListener("message", this._workerListener);
    else if (e !== null) {
      const h = document.createElement("video");
      h.style.position = "fixed", h.style.left = "-10000px", h.style.top = "-10000px", h.style.width = "1px", h.style.height = "1px", h.style.opacity = "0", h.style.pointerEvents = "none", h.muted = !0, h.srcObject = new MediaStream([this._track]), document.body.appendChild(h), this._videoElement = h, h.addEventListener("loadeddata", () => {
        if (n || !this._videoElement)
          return;
        const m = new VideoFrame(h, {
          timestamp: 1e3 * performance.now()
        });
        l(m), m.close();
      }, { once: !0 }), h.play().catch((m) => {
        n = !0, this._promiseWithResolvers.reject(m);
      });
    } else
      throw new Error("When no explicit frame rate is set, MediaStreamTrackProcessor is required; but it's not supported by this browser.");
  }
  /**
   * Pauses the capture of video frames - any video frames emitted by the underlying media stream will be ignored
   * while paused. This does *not* close the underlying `MediaStreamVideoTrack`, it just ignores its output.
   */
  pause() {
    this._paused = !0;
  }
  /** Resumes the capture of video frames after being paused. */
  resume() {
    this._paused = !1;
  }
  /** @internal */
  async _flushAndClose(e) {
    this._abortController && (this._abortController.abort(), this._abortController = null), this._timerHandle && xc(this._timerHandle), this._lastVideoFrame?.close(), this._videoElement && (this._videoElement.srcObject = null, this._videoElement.remove(), this._videoElement = null), this._workerTrackId !== null && (p(this._workerListener), Hi({
      type: "stopTrack",
      trackId: this._workerTrackId
    }), await new Promise((t) => {
      const i = (s) => {
        const n = s.data;
        n.type === "trackStopped" && n.trackId === this._workerTrackId && (p(this._workerListener), Re.removeEventListener("message", this._workerListener), Re.removeEventListener("message", i), t());
      };
      Re.addEventListener("message", i);
    })), await this._encoder.flushAndClose(e);
  }
}
class or extends ki {
  /** Internal constructor. */
  constructor(e) {
    if (super(), this._connectedTrack = null, !we.includes(e))
      throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${we.join(", ")}.`);
    this._codec = e;
  }
}
class Ho extends or {
  /** Creates a new {@link EncodedAudioPacketSource} whose packets are encoded using `codec`. */
  constructor(e) {
    super(e);
  }
  /**
   * Adds an encoded packet to the output audio track. Packets must be added in *decode order*.
   *
   * @param meta - Additional metadata from the encoder. You should pass this for the first call, including a valid
   * decoder config.
   *
   * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
   * to respect writer and encoder backpressure.
   */
  add(e, t) {
    if (!(e instanceof X))
      throw new TypeError("packet must be an EncodedPacket.");
    if (e.isMetadataOnly)
      throw new TypeError("Metadata-only packets cannot be added.");
    if (t !== void 0 && (!t || typeof t != "object"))
      throw new TypeError("meta, when provided, must be an object.");
    return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, e, t);
  }
}
class sn {
  constructor(e, t) {
    this.source = e, this.encodingConfig = t, this.ensureEncoderPromise = null, this.encoderInitialized = !1, this.encoder = null, this.muxer = null, this.lastNumberOfChannels = null, this.lastSampleRate = null, this.isPcmEncoder = !1, this.outputSampleSize = null, this.writeOutputValue = null, this.customEncoder = null, this.customEncoderCallSerializer = new ni(), this.customEncoderQueueSize = 0, this.lastEndSampleIndex = null, this.error = null;
  }
  async add(e, t) {
    try {
      if (this.checkForEncoderError(), this.source._ensureValidAdd(), this.lastNumberOfChannels !== null && this.lastSampleRate !== null) {
        if (e.numberOfChannels !== this.lastNumberOfChannels || e.sampleRate !== this.lastSampleRate)
          throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`);
      } else
        this.lastNumberOfChannels = e.numberOfChannels, this.lastSampleRate = e.sampleRate;
      this.encoderInitialized || (this.ensureEncoderPromise || this.ensureEncoder(e), this.encoderInitialized || await this.ensureEncoderPromise), p(this.encoderInitialized);
      {
        const i = Math.round(e.timestamp * e.sampleRate), s = Math.round((e.timestamp + e.duration) * e.sampleRate);
        if (this.lastEndSampleIndex === null)
          this.lastEndSampleIndex = s;
        else {
          const n = i - this.lastEndSampleIndex;
          if (n >= 64) {
            const a = new he({
              data: new Float32Array(n * e.numberOfChannels),
              format: "f32-planar",
              sampleRate: e.sampleRate,
              numberOfChannels: e.numberOfChannels,
              numberOfFrames: n,
              timestamp: this.lastEndSampleIndex / e.sampleRate
            });
            await this.add(a, !0);
          }
          this.lastEndSampleIndex += e.numberOfFrames;
        }
      }
      if (this.customEncoder) {
        this.customEncoderQueueSize++;
        const i = e.clone(), s = this.customEncoderCallSerializer.call(() => this.customEncoder.encode(i)).then(() => this.customEncoderQueueSize--).catch((n) => this.error ??= n).finally(() => {
          i.close();
        });
        this.customEncoderQueueSize >= 4 && await s, await this.muxer.mutex.currentPromise;
      } else if (this.isPcmEncoder)
        await this.doPcmEncoding(e, t);
      else {
        p(this.encoder);
        const i = e.toAudioData();
        this.encoder.encode(i), i.close(), t && e.close(), this.encoder.encodeQueueSize >= 4 && await new Promise((s) => this.encoder.addEventListener("dequeue", s, { once: !0 })), await this.muxer.mutex.currentPromise;
      }
    } finally {
      t && e.close();
    }
  }
  async doPcmEncoding(e, t) {
    p(this.outputSampleSize), p(this.writeOutputValue);
    const { numberOfChannels: i, numberOfFrames: s, sampleRate: n, timestamp: a } = e, o = 2048, c = [];
    for (let h = 0; h < s; h += o) {
      const m = Math.min(o, e.numberOfFrames - h), g = m * i * this.outputSampleSize, f = new ArrayBuffer(g), w = new DataView(f);
      c.push({ frameCount: m, view: w });
    }
    const l = e.allocationSize({ planeIndex: 0, format: "f32-planar" }), d = new Float32Array(l / Float32Array.BYTES_PER_ELEMENT);
    for (let h = 0; h < i; h++) {
      e.copyTo(d, { planeIndex: h, format: "f32-planar" });
      for (let m = 0; m < c.length; m++) {
        const { frameCount: g, view: f } = c[m];
        for (let w = 0; w < g; w++)
          this.writeOutputValue(f, (w * i + h) * this.outputSampleSize, d[m * o + w]);
      }
    }
    t && e.close();
    const u = {
      decoderConfig: {
        codec: this.encodingConfig.codec,
        numberOfChannels: i,
        sampleRate: n
      }
    };
    for (let h = 0; h < c.length; h++) {
      const { frameCount: m, view: g } = c[h], f = g.buffer, w = h * o, k = new X(new Uint8Array(f), "key", a + w / n, m / n);
      this.encodingConfig.onEncodedPacket?.(k, u), await this.muxer.addEncodedAudioPacket(this.source._connectedTrack, k, u);
    }
  }
  ensureEncoder(e) {
    this.ensureEncoderPromise = (async () => {
      const { numberOfChannels: t, sampleRate: i } = e, s = gs({
        numberOfChannels: t,
        sampleRate: i,
        ...this.encodingConfig
      });
      this.encodingConfig.onEncoderConfig?.(s);
      const n = Cr.find((a) => a.supports(this.encodingConfig.codec, s));
      if (n)
        this.customEncoder = new n(), this.customEncoder.codec = this.encodingConfig.codec, this.customEncoder.config = s, this.customEncoder.onPacket = (a, o) => {
          if (!(a instanceof X))
            throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");
          if (o !== void 0 && (!o || typeof o != "object"))
            throw new TypeError("The second argument passed to onPacket must be an object or undefined.");
          this.encodingConfig.onEncodedPacket?.(a, o), this.muxer.addEncodedAudioPacket(this.source._connectedTrack, a, o).catch((c) => {
            this.error ??= c;
          });
        }, await this.customEncoder.init();
      else if (se.includes(this.encodingConfig.codec))
        this.initPcmEncoder();
      else {
        if (typeof AudioEncoder > "u")
          throw new Error("AudioEncoder is not supported by this browser.");
        if (!(await AudioEncoder.isConfigSupported(s)).supported)
          throw new Error(`This specific encoder configuration (${s.codec}, ${s.bitrate} bps, ${s.numberOfChannels} channels, ${s.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);
        const o = new Error("Encoding error").stack;
        this.encoder = new AudioEncoder({
          output: (c, l) => {
            if (this.encodingConfig.codec === "aac" && l?.decoderConfig) {
              let u = !1;
              if (!l.decoderConfig.description || l.decoderConfig.description.byteLength < 2 ? u = !0 : u = Ar(Z(l.decoderConfig.description)).objectType === 0, u) {
                const h = Number(ee(s.codec.split(".")));
                l.decoderConfig.description = Ps({
                  objectType: h,
                  numberOfChannels: l.decoderConfig.numberOfChannels,
                  sampleRate: l.decoderConfig.sampleRate
                });
              }
            }
            const d = X.fromEncodedChunk(c);
            this.encodingConfig.onEncodedPacket?.(d, l), this.muxer.addEncodedAudioPacket(this.source._connectedTrack, d, l).catch((u) => {
              this.error ??= u;
            });
          },
          error: (c) => {
            c.stack = o, this.error ??= c;
          }
        }), this.encoder.configure(s);
      }
      p(this.source._connectedTrack), this.muxer = this.source._connectedTrack.output._muxer, this.encoderInitialized = !0;
    })();
  }
  initPcmEncoder() {
    this.isPcmEncoder = !0;
    const e = this.encodingConfig.codec, { dataType: t, sampleSize: i, littleEndian: s } = We(e);
    switch (this.outputSampleSize = i, i) {
      case 1:
        t === "unsigned" ? this.writeOutputValue = (n, a, o) => n.setUint8(a, ce((o + 1) * 127.5, 0, 255)) : t === "signed" ? this.writeOutputValue = (n, a, o) => {
          n.setInt8(a, ce(Math.round(o * 128), -128, 127));
        } : t === "ulaw" ? this.writeOutputValue = (n, a, o) => {
          const c = ce(Math.floor(o * 32767), -32768, 32767);
          n.setUint8(a, tl(c));
        } : t === "alaw" ? this.writeOutputValue = (n, a, o) => {
          const c = ce(Math.floor(o * 32767), -32768, 32767);
          n.setUint8(a, il(c));
        } : p(!1);
        break;
      case 2:
        t === "unsigned" ? this.writeOutputValue = (n, a, o) => n.setUint16(a, ce((o + 1) * 32767.5, 0, 65535), s) : t === "signed" ? this.writeOutputValue = (n, a, o) => n.setInt16(a, ce(Math.round(o * 32767), -32768, 32767), s) : p(!1);
        break;
      case 3:
        t === "unsigned" ? this.writeOutputValue = (n, a, o) => si(n, a, ce((o + 1) * 83886075e-1, 0, 16777215), s) : t === "signed" ? this.writeOutputValue = (n, a, o) => dc(n, a, ce(Math.round(o * 8388607), -8388608, 8388607), s) : p(!1);
        break;
      case 4:
        t === "unsigned" ? this.writeOutputValue = (n, a, o) => n.setUint32(a, ce((o + 1) * 21474836475e-1, 0, 4294967295), s) : t === "signed" ? this.writeOutputValue = (n, a, o) => n.setInt32(a, ce(Math.round(o * 2147483647), -2147483648, 2147483647), s) : t === "float" ? this.writeOutputValue = (n, a, o) => n.setFloat32(a, o, s) : p(!1);
        break;
      case 8:
        t === "float" ? this.writeOutputValue = (n, a, o) => n.setFloat64(a, o, s) : p(!1);
        break;
      default:
        ge(i), p(!1);
    }
  }
  async flushAndClose(e) {
    e || this.checkForEncoderError(), this.customEncoder ? (e || this.customEncoderCallSerializer.call(() => this.customEncoder.flush()), await this.customEncoderCallSerializer.call(() => this.customEncoder.close())) : this.encoder && (e || await this.encoder.flush(), this.encoder.state !== "closed" && this.encoder.close()), e || this.checkForEncoderError();
  }
  getQueueSize() {
    return this.customEncoder ? this.customEncoderQueueSize : this.isPcmEncoder ? 0 : this.encoder?.encodeQueueSize ?? 0;
  }
  checkForEncoderError() {
    if (this.error)
      throw this.error;
  }
}
class ks extends or {
  /**
   * Creates a new {@link AudioSampleSource} whose samples are encoded according to the specified
   * {@link AudioEncodingConfig}.
   */
  constructor(e) {
    tn(e), super(e.codec), this._encoder = new sn(this, e);
  }
  /**
   * Encodes an audio sample and then adds it to the output.
   *
   * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
   * to respect writer and encoder backpressure.
   */
  add(e) {
    if (!(e instanceof he))
      throw new TypeError("audioSample must be an AudioSample.");
    return this._encoder.add(e, !1);
  }
  /** @internal */
  _flushAndClose(e) {
    return this._encoder.flushAndClose(e);
  }
}
class fh extends or {
  /**
   * Creates a new {@link AudioBufferSource} whose `AudioBuffer` instances are encoded according to the specified
   * {@link AudioEncodingConfig}.
   */
  constructor(e) {
    tn(e), super(e.codec), this._accumulatedTime = 0, this._encoder = new sn(this, e);
  }
  /**
   * Converts an AudioBuffer to audio samples, encodes them and adds them to the output. The first AudioBuffer will
   * be played at timestamp 0, and any subsequent AudioBuffer will have a timestamp equal to the total duration of
   * all previous AudioBuffers.
   *
   * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
   * to respect writer and encoder backpressure.
   */
  async add(e) {
    if (!(e instanceof AudioBuffer))
      throw new TypeError("audioBuffer must be an AudioBuffer.");
    const t = he._fromAudioBuffer(e, this._accumulatedTime);
    this._accumulatedTime += e.duration;
    for (const i of t)
      await this._encoder.add(i, !0);
  }
  /** @internal */
  _flushAndClose(e) {
    return this._encoder.flushAndClose(e);
  }
}
class mh extends or {
  /** A promise that rejects upon any error within this source. This promise never resolves. */
  get errorPromise() {
    return this._errorPromiseAccessed = !0, this._promiseWithResolvers.promise;
  }
  /** Whether this source is currently paused as a result of calling `.pause()`. */
  get paused() {
    return this._paused;
  }
  /**
   * Creates a new {@link MediaStreamAudioTrackSource} from a `MediaStreamAudioTrack`, which will pull audio samples
   * from the stream in real time and encode them according to {@link AudioEncodingConfig}.
   */
  constructor(e, t) {
    if (!(e instanceof MediaStreamTrack) || e.kind !== "audio")
      throw new TypeError("track must be an audio MediaStreamTrack.");
    tn(t), super(t.codec), this._abortController = null, this._audioContext = null, this._scriptProcessorNode = null, this._promiseWithResolvers = re(), this._errorPromiseAccessed = !1, this._paused = !1, this._encoder = new sn(this, t), this._track = e;
  }
  /** @internal */
  async _start() {
    this._errorPromiseAccessed || console.warn("Make sure not to ignore the `errorPromise` field on MediaStreamAudioTrackSource, so that any internal errors get bubbled up properly."), this._abortController = new AbortController();
    let e = null, t = !1, i = null, s = 0;
    const n = (a) => {
      if (t) {
        a.close();
        return;
      }
      const o = a.timestamp;
      if (this._paused) {
        if (e !== null) {
          if (i !== null) {
            const l = o - i;
            s -= l;
          }
          i = o;
        }
        a.close();
        return;
      }
      if (e === null) {
        e = a.timestamp;
        const c = this._connectedTrack.output._muxer;
        c.firstMediaStreamTimestamp === null ? (c.firstMediaStreamTimestamp = performance.now() / 1e3, this._timestampOffset = -e) : this._timestampOffset = performance.now() / 1e3 - c.firstMediaStreamTimestamp - e;
      }
      if (i = o, this._encoder.getQueueSize() >= 8) {
        a.close();
        return;
      }
      a.setTimestamp(o + s), this._encoder.add(a, !0).catch((c) => {
        t = !0, this._abortController?.abort(), this._promiseWithResolvers.reject(c), this._audioContext?.suspend();
      });
    };
    if (typeof MediaStreamTrackProcessor < "u") {
      const a = new MediaStreamTrackProcessor({ track: this._track }), o = new WritableStream({
        write: (c) => n(new he(c))
      });
      a.readable.pipeTo(o, {
        signal: this._abortController.signal
      }).catch((c) => {
        c instanceof DOMException && c.name === "AbortError" || this._promiseWithResolvers.reject(c);
      });
    } else {
      const a = window.AudioContext || window.webkitAudioContext;
      this._audioContext = new a({ sampleRate: this._track.getSettings().sampleRate });
      const o = this._audioContext.createMediaStreamSource(new MediaStream([this._track]));
      this._scriptProcessorNode = this._audioContext.createScriptProcessor(4096), this._audioContext.state === "suspended" && await this._audioContext.resume(), o.connect(this._scriptProcessorNode), this._scriptProcessorNode.connect(this._audioContext.destination);
      let c = 0;
      this._scriptProcessorNode.onaudioprocess = (l) => {
        const d = he._fromAudioBuffer(l.inputBuffer, c);
        c += l.inputBuffer.duration;
        for (const u of d)
          n(u);
      };
    }
  }
  /**
   * Pauses the capture of audio data - any audio data emitted by the underlying media stream will be ignored
   * while paused. This does *not* close the underlying `MediaStreamAudioTrack`, it just ignores its output.
   */
  pause() {
    this._paused = !0;
  }
  /** Resumes the capture of audio data after being paused. */
  resume() {
    this._paused = !1;
  }
  /** @internal */
  async _flushAndClose(e) {
    this._abortController && (this._abortController.abort(), this._abortController = null), this._audioContext && (p(this._scriptProcessorNode), this._scriptProcessorNode.disconnect(), await this._audioContext.suspend()), await this._encoder.flushAndClose(e);
  }
}
const ph = () => {
  const r = (i, s) => {
    s ? self.postMessage(i, { transfer: s }) : self.postMessage(i);
  };
  r({
    type: "support",
    supported: typeof MediaStreamTrackProcessor < "u"
  });
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  self.addEventListener("message", (i) => {
    const s = i.data;
    switch (s.type) {
      case "videoTrack":
        {
          t.set(s.trackId, s.track);
          const n = new MediaStreamTrackProcessor({ track: s.track }), a = new WritableStream({
            write: (c) => {
              if (!t.has(s.trackId)) {
                c.close();
                return;
              }
              r({
                type: "videoFrame",
                trackId: s.trackId,
                videoFrame: c
              }, [c]);
            }
          }), o = new AbortController();
          e.set(s.trackId, o), n.readable.pipeTo(a, {
            signal: o.signal
          }).catch((c) => {
            c instanceof DOMException && c.name === "AbortError" || r({
              type: "error",
              trackId: s.trackId,
              error: c
            });
          });
        }
        break;
      case "stopTrack":
        {
          const n = e.get(s.trackId);
          n && (n.abort(), e.delete(s.trackId)), t.get(s.trackId)?.stop(), t.delete(s.trackId), r({
            type: "trackStopped",
            trackId: s.trackId
          });
        }
        break;
      default:
        ge(s);
    }
  });
};
let gh = 0, Re = null;
const wh = () => {
  const r = new Blob([`(${ph.toString()})()`], { type: "application/javascript" }), e = URL.createObjectURL(r);
  Re = new Worker(e);
};
let Li = null;
const bh = async () => Li !== null ? Li : (Re || wh(), new Promise((r) => {
  p(Re);
  const e = (t) => {
    const i = t.data;
    i.type === "support" && (Li = i.supported, Re.removeEventListener("message", e), r(i.supported));
  };
  Re.addEventListener("message", e);
})), Hi = (r, e) => {
  p(Re), Re.postMessage(r);
};
class nn extends ki {
  /** Internal constructor. */
  constructor(e) {
    if (super(), this._connectedTrack = null, !Ne.includes(e))
      throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${Ne.join(", ")}.`);
    this._codec = e;
  }
}
class kh extends nn {
  /** Creates a new {@link TextSubtitleSource} where added text chunks are in the specified `codec`. */
  constructor(e) {
    super(e), this._error = null, this._parser = new pd({
      codec: e,
      output: (t, i) => {
        this._connectedTrack?.output._muxer.addSubtitleCue(this._connectedTrack, t, i).catch((s) => {
          this._error ??= s;
        });
      }
    });
  }
  /**
   * Parses the subtitle text according to the specified codec and adds it to the output track. You don't have to
   * add the entire subtitle file at once here; you can provide it in chunks.
   *
   * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
   * to respect writer and encoder backpressure.
   */
  add(e) {
    if (typeof e != "string")
      throw new TypeError("text must be a string.");
    return this._checkForError(), this._ensureValidAdd(), this._parser.parse(e), this._connectedTrack.output._muxer.mutex.currentPromise;
  }
  /** @internal */
  _checkForError() {
    if (this._error)
      throw this._error;
  }
  /** @internal */
  async _flushAndClose(e) {
    e || this._checkForError();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const qo = ["video", "audio", "subtitle"], qi = (r) => {
  if (!r || typeof r != "object")
    throw new TypeError("metadata must be an object.");
  if (r.languageCode !== void 0 && !Sr(r.languageCode))
    throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
  if (r.name !== void 0 && typeof r.name != "string")
    throw new TypeError("metadata.name, when provided, must be a string.");
  if (r.disposition !== void 0 && Pc(r.disposition), r.maximumPacketCount !== void 0 && (!Number.isInteger(r.maximumPacketCount) || r.maximumPacketCount < 0))
    throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
};
class ys {
  /**
   * Creates a new instance of {@link Output} which can then be used to create a new media file according to the
   * specified {@link OutputOptions}.
   */
  constructor(e) {
    if (this.state = "pending", this._tracks = [], this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new Jt(), this._metadataTags = {}, !e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (!(e.format instanceof He))
      throw new TypeError("options.format must be an OutputFormat.");
    if (!(e.target instanceof nr))
      throw new TypeError("options.target must be a Target.");
    if (e.target._output)
      throw new Error("Target is already used for another output.");
    e.target._output = this, this.format = e.format, this.target = e.target, this._writer = e.target._createWriter(), this._muxer = e.format._createMuxer(this);
  }
  /** Adds a video track to the output with the given source. Can only be called before the output is started. */
  addVideoTrack(e, t = {}) {
    if (!(e instanceof ar))
      throw new TypeError("source must be a VideoSource.");
    if (qi(t), t.rotation !== void 0 && ![0, 90, 180, 270].includes(t.rotation))
      throw new TypeError(`Invalid video rotation: ${t.rotation}. Has to be 0, 90, 180 or 270.`);
    if (!this.format.supportsVideoRotationMetadata && t.rotation)
      throw new Error(`${this.format._name} does not support video rotation metadata.`);
    if (t.frameRate !== void 0 && (!Number.isFinite(t.frameRate) || t.frameRate <= 0))
      throw new TypeError(`Invalid video frame rate: ${t.frameRate}. Must be a positive number.`);
    this._addTrack("video", e, t);
  }
  /** Adds an audio track to the output with the given source. Can only be called before the output is started. */
  addAudioTrack(e, t = {}) {
    if (!(e instanceof or))
      throw new TypeError("source must be an AudioSource.");
    qi(t), this._addTrack("audio", e, t);
  }
  /** Adds a subtitle track to the output with the given source. Can only be called before the output is started. */
  addSubtitleTrack(e, t = {}) {
    if (!(e instanceof nn))
      throw new TypeError("source must be a SubtitleSource.");
    qi(t), this._addTrack("subtitle", e, t);
  }
  /**
   * Sets descriptive metadata tags about the media file, such as title, author, date, or cover art. When called
   * multiple times, only the metadata from the last call will be used.
   *
   * Can only be called before the output is started.
   */
  setMetadataTags(e) {
    if (Xi(e), this.state !== "pending")
      throw new Error("Cannot set metadata tags after output has been started or canceled.");
    this._metadataTags = e;
  }
  /** @internal */
  _addTrack(e, t, i) {
    if (this.state !== "pending")
      throw new Error("Cannot add track after output has been started or canceled.");
    if (t._connectedTrack)
      throw new Error("Source is already used for a track.");
    const s = this.format.getSupportedTrackCounts(), n = this._tracks.reduce((l, d) => l + (d.type === e ? 1 : 0), 0), a = s[e].max;
    if (n === a)
      throw new Error(a === 0 ? `${this.format._name} does not support ${e} tracks.` : `${this.format._name} does not support more than ${a} ${e} track${a === 1 ? "" : "s"}.`);
    const o = s.total.max;
    if (this._tracks.length === o)
      throw new Error(`${this.format._name} does not support more than ${o} tracks${o === 1 ? "" : "s"} in total.`);
    const c = {
      id: this._tracks.length + 1,
      output: this,
      type: e,
      source: t,
      metadata: i
    };
    if (c.type === "video") {
      const l = this.format.getSupportedVideoCodecs();
      if (l.length === 0)
        throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(c.source._codec));
      if (!l.includes(c.source._codec))
        throw new Error(`Codec '${c.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${l.map((d) => `'${d}'`).join(", ")}.` + this.format._codecUnsupportedHint(c.source._codec));
    } else if (c.type === "audio") {
      const l = this.format.getSupportedAudioCodecs();
      if (l.length === 0)
        throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(c.source._codec));
      if (!l.includes(c.source._codec))
        throw new Error(`Codec '${c.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${l.map((d) => `'${d}'`).join(", ")}.` + this.format._codecUnsupportedHint(c.source._codec));
    } else if (c.type === "subtitle") {
      const l = this.format.getSupportedSubtitleCodecs();
      if (l.length === 0)
        throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(c.source._codec));
      if (!l.includes(c.source._codec))
        throw new Error(`Codec '${c.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${l.map((d) => `'${d}'`).join(", ")}.` + this.format._codecUnsupportedHint(c.source._codec));
    }
    this._tracks.push(c), t._connectedTrack = c;
  }
  /**
   * Starts the creation of the output file. This method should be called after all tracks have been added. Only after
   * the output has started can media samples be added to the tracks.
   *
   * @returns A promise that resolves when the output has successfully started and is ready to receive media samples.
   */
  async start() {
    const e = this.format.getSupportedTrackCounts();
    for (const i of qo) {
      const s = this._tracks.reduce((a, o) => a + (o.type === i ? 1 : 0), 0), n = e[i].min;
      if (s < n)
        throw new Error(n === e[i].max ? `${this.format._name} requires exactly ${n} ${i} track${n === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${n} ${i} track${n === 1 ? "" : "s"}.`);
    }
    const t = e.total.min;
    if (this._tracks.length < t)
      throw new Error(t === e.total.max ? `${this.format._name} requires exactly ${t} track${t === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${t} track${t === 1 ? "" : "s"}.`);
    if (this.state === "canceled")
      throw new Error("Output has been canceled.");
    return this._startPromise ? (console.warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
      this.state = "started", this._writer.start();
      const i = await this._mutex.acquire();
      await this._muxer.start();
      const s = this._tracks.map((n) => n.source._start());
      await Promise.all(s), i();
    })();
  }
  /**
   * Resolves with the full MIME type of the output file, including track codecs.
   *
   * The returned promise will resolve only once the precise codec strings of all tracks are known.
   */
  getMimeType() {
    return this._muxer.getMimeType();
  }
  /**
   * Cancels the creation of the output file, releasing internal resources like encoders and preventing further
   * samples from being added.
   *
   * @returns A promise that resolves once all internal resources have been released.
   */
  async cancel() {
    if (this._cancelPromise)
      return console.warn("Output has already been canceled."), this._cancelPromise;
    if (this.state === "finalizing" || this.state === "finalized") {
      console.warn("Output has already been finalized.");
      return;
    }
    return this._cancelPromise = (async () => {
      this.state = "canceled";
      const e = await this._mutex.acquire(), t = this._tracks.map((i) => i.source._flushOrWaitForOngoingClose(!0));
      await Promise.all(t), await this._writer.close(), e();
    })();
  }
  /**
   * Finalizes the output file. This method must be called after all media samples across all tracks have been added.
   * Once the Promise returned by this method completes, the output file is ready.
   */
  async finalize() {
    if (this.state === "pending")
      throw new Error("Cannot finalize before starting.");
    if (this.state === "canceled")
      throw new Error("Cannot finalize after canceling.");
    return this._finalizePromise ? (console.warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
      this.state = "finalizing";
      const e = await this._mutex.acquire(), t = this._tracks.map((i) => i.source._flushOrWaitForOngoingClose(!1));
      await Promise.all(t), await this._muxer.finalize(), await this._writer.flush(), await this._writer.finalize(), this.state = "finalized", e();
    })();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Kn = (r) => {
  if (r !== void 0 && (!r || typeof r != "object"))
    throw new TypeError("options.video, when provided, must be an object.");
  if (r?.discard !== void 0 && typeof r.discard != "boolean")
    throw new TypeError("options.video.discard, when provided, must be a boolean.");
  if (r?.forceTranscode !== void 0 && typeof r.forceTranscode != "boolean")
    throw new TypeError("options.video.forceTranscode, when provided, must be a boolean.");
  if (r?.codec !== void 0 && !fe.includes(r.codec))
    throw new TypeError(`options.video.codec, when provided, must be one of: ${fe.join(", ")}.`);
  if (r?.bitrate !== void 0 && !(r.bitrate instanceof Se) && (!Number.isInteger(r.bitrate) || r.bitrate <= 0))
    throw new TypeError("options.video.bitrate, when provided, must be a positive integer or a quality.");
  if (r?.width !== void 0 && (!Number.isInteger(r.width) || r.width <= 0))
    throw new TypeError("options.video.width, when provided, must be a positive integer.");
  if (r?.height !== void 0 && (!Number.isInteger(r.height) || r.height <= 0))
    throw new TypeError("options.video.height, when provided, must be a positive integer.");
  if (r?.fit !== void 0 && !["fill", "contain", "cover"].includes(r.fit))
    throw new TypeError("options.video.fit, when provided, must be one of 'fill', 'contain', or 'cover'.");
  if (r?.width !== void 0 && r.height !== void 0 && r.fit === void 0)
    throw new TypeError("When both options.video.width and options.video.height are provided, options.video.fit must also be provided.");
  if (r?.rotate !== void 0 && ![0, 90, 180, 270].includes(r.rotate))
    throw new TypeError("options.video.rotate, when provided, must be 0, 90, 180 or 270.");
  if (r?.allowRotationMetadata !== void 0 && typeof r.allowRotationMetadata != "boolean")
    throw new TypeError("options.video.allowRotationMetadata, when provided, must be a boolean.");
  if (r?.crop !== void 0 && Ds(r.crop, "options.video."), r?.frameRate !== void 0 && (!Number.isFinite(r.frameRate) || r.frameRate <= 0))
    throw new TypeError("options.video.frameRate, when provided, must be a finite positive number.");
  if (r?.alpha !== void 0 && !["discard", "keep"].includes(r.alpha))
    throw new TypeError("options.video.alpha, when provided, must be either 'discard' or 'keep'.");
  if (r?.keyFrameInterval !== void 0 && (!Number.isFinite(r.keyFrameInterval) || r.keyFrameInterval < 0))
    throw new TypeError("options.video.keyFrameInterval, when provided, must be a non-negative number.");
  if (r?.process !== void 0 && typeof r.process != "function")
    throw new TypeError("options.video.process, when provided, must be a function.");
  if (r?.processedWidth !== void 0 && (!Number.isInteger(r.processedWidth) || r.processedWidth <= 0))
    throw new TypeError("options.video.processedWidth, when provided, must be a positive integer.");
  if (r?.processedHeight !== void 0 && (!Number.isInteger(r.processedHeight) || r.processedHeight <= 0))
    throw new TypeError("options.video.processedHeight, when provided, must be a positive integer.");
  if (r?.hardwareAcceleration !== void 0 && !["no-preference", "prefer-hardware", "prefer-software"].includes(r.hardwareAcceleration))
    throw new TypeError("options.video.hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
}, Gn = (r) => {
  if (r !== void 0 && (!r || typeof r != "object"))
    throw new TypeError("options.audio, when provided, must be an object.");
  if (r?.discard !== void 0 && typeof r.discard != "boolean")
    throw new TypeError("options.audio.discard, when provided, must be a boolean.");
  if (r?.forceTranscode !== void 0 && typeof r.forceTranscode != "boolean")
    throw new TypeError("options.audio.forceTranscode, when provided, must be a boolean.");
  if (r?.codec !== void 0 && !we.includes(r.codec))
    throw new TypeError(`options.audio.codec, when provided, must be one of: ${we.join(", ")}.`);
  if (r?.bitrate !== void 0 && !(r.bitrate instanceof Se) && (!Number.isInteger(r.bitrate) || r.bitrate <= 0))
    throw new TypeError("options.audio.bitrate, when provided, must be a positive integer or a quality.");
  if (r?.numberOfChannels !== void 0 && (!Number.isInteger(r.numberOfChannels) || r.numberOfChannels <= 0))
    throw new TypeError("options.audio.numberOfChannels, when provided, must be a positive integer.");
  if (r?.sampleRate !== void 0 && (!Number.isInteger(r.sampleRate) || r.sampleRate <= 0))
    throw new TypeError("options.audio.sampleRate, when provided, must be a positive integer.");
  if (r?.process !== void 0 && typeof r.process != "function")
    throw new TypeError("options.audio.process, when provided, must be a function.");
  if (r?.processedNumberOfChannels !== void 0 && (!Number.isInteger(r.processedNumberOfChannels) || r.processedNumberOfChannels <= 0))
    throw new TypeError("options.audio.processedNumberOfChannels, when provided, must be a positive integer.");
  if (r?.processedSampleRate !== void 0 && (!Number.isInteger(r.processedSampleRate) || r.processedSampleRate <= 0))
    throw new TypeError("options.audio.processedSampleRate, when provided, must be a positive integer.");
}, ji = 2, $i = 48e3;
class an {
  /** Initializes a new conversion process without starting the conversion. */
  static async init(e) {
    const t = new an(e);
    return await t._init(), t;
  }
  /** Creates a new Conversion instance (duh). */
  constructor(e) {
    if (this._addedCounts = {
      video: 0,
      audio: 0,
      subtitle: 0
    }, this._totalTrackCount = 0, this._trackPromises = [], this._executed = !1, this._synchronizer = new yh(), this._totalDuration = null, this._maxTimestamps = /* @__PURE__ */ new Map(), this._canceled = !1, this.onProgress = void 0, this._computeProgress = !1, this._lastProgress = 0, this.isValid = !1, this.utilizedTracks = [], this.discardedTracks = [], !e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (!(e.input instanceof bo))
      throw new TypeError("options.input must be an Input.");
    if (!(e.output instanceof ys))
      throw new TypeError("options.output must be an Output.");
    if (e.output._tracks.length > 0 || Object.keys(e.output._metadataTags).length > 0 || e.output.state !== "pending")
      throw new TypeError("options.output must be fresh: no tracks or metadata tags added and not started.");
    if (typeof e.video != "function" && Kn(e.video), typeof e.audio != "function" && Gn(e.audio), e.trim !== void 0 && (!e.trim || typeof e.trim != "object"))
      throw new TypeError("options.trim, when provided, must be an object.");
    if (e.trim?.start !== void 0 && !Number.isFinite(e.trim.start))
      throw new TypeError("options.trim.start, when provided, must be a finite number.");
    if (e.trim?.end !== void 0 && !Number.isFinite(e.trim.end))
      throw new TypeError("options.trim.end, when provided, must be a finite number.");
    if (e.trim?.start !== void 0 && e.trim.end !== void 0 && e.trim.start >= e.trim.end)
      throw new TypeError("options.trim.start must be less than options.trim.end.");
    if (e.tags !== void 0 && (typeof e.tags != "object" || !e.tags) && typeof e.tags != "function")
      throw new TypeError("options.tags, when provided, must be an object or a function.");
    if (typeof e.tags == "object" && Xi(e.tags), e.showWarnings !== void 0 && typeof e.showWarnings != "boolean")
      throw new TypeError("options.showWarnings, when provided, must be a boolean.");
    this._options = e, this.input = e.input, this.output = e.output;
    const { promise: t, resolve: i } = re();
    this._started = t, this._start = i;
  }
  /** @internal */
  async _init() {
    this._startTimestamp = this._options.trim?.start ?? Math.max(
      await this.input.getFirstTimestamp(),
      // Samples can also have negative timestamps, but the meaning typically is "don't present me", so let's cut
      // those out by default.
      0
    ), this._endTimestamp = Math.max(this._options.trim?.end ?? 1 / 0, this._startTimestamp);
    const e = await this.input.getTracks(), t = this.output.format.getSupportedTrackCounts();
    let i = 1, s = 1;
    for (const l of e) {
      let d;
      if (l.isVideoTrack() ? this._options.video && (typeof this._options.video == "function" ? (d = await this._options.video(l, i), Kn(d), i++) : d = this._options.video) : l.isAudioTrack() ? this._options.audio && (typeof this._options.audio == "function" ? (d = await this._options.audio(l, s), Gn(d), s++) : d = this._options.audio) : p(!1), d?.discard) {
        this.discardedTracks.push({
          track: l,
          reason: "discarded_by_user"
        });
        continue;
      }
      if (this._totalTrackCount === t.total.max) {
        this.discardedTracks.push({
          track: l,
          reason: "max_track_count_reached"
        });
        continue;
      }
      if (this._addedCounts[l.type] === t[l.type].max) {
        this.discardedTracks.push({
          track: l,
          reason: "max_track_count_of_type_reached"
        });
        continue;
      }
      l.isVideoTrack() ? await this._processVideoTrack(l, d ?? {}) : l.isAudioTrack() && await this._processAudioTrack(l, d ?? {});
    }
    const n = await this.input.getMetadataTags();
    let a;
    if (this._options.tags) {
      const l = typeof this._options.tags == "function" ? await this._options.tags(n) : this._options.tags;
      Xi(l), a = l;
    } else
      a = n;
    const o = (await this.input.getFormat()).mimeType === this.output.format.mimeType, c = n.raw === a.raw;
    if (n.raw && c && !o && delete a.raw, this.output.setMetadataTags(a), this.isValid = this._totalTrackCount >= t.total.min && this._addedCounts.video >= t.video.min && this._addedCounts.audio >= t.audio.min && this._addedCounts.subtitle >= t.subtitle.min, this._options.showWarnings ?? !0) {
      const l = [], d = this.discardedTracks.filter((u) => u.reason !== "discarded_by_user");
      d.length > 0 && l.push("Some tracks had to be discarded from the conversion:", d), this.isValid || l.push(`

` + this._getInvalidityExplanation().join("")), l.length > 0 && console.warn(...l);
    }
  }
  /** @internal */
  _getInvalidityExplanation() {
    const e = [];
    if (this.discardedTracks.length === 0)
      e.push("Due to missing tracks, this conversion cannot be executed.");
    else {
      const t = this.discardedTracks.every((i) => i.reason === "discarded_by_user" || i.reason === "no_encodable_target_codec");
      if (e.push("Due to discarded tracks, this conversion cannot be executed."), t) {
        const i = this.discardedTracks.flatMap((s) => s.reason === "discarded_by_user" ? [] : s.track.type === "video" ? this.output.format.getSupportedVideoCodecs() : s.track.type === "audio" ? this.output.format.getSupportedAudioCodecs() : this.output.format.getSupportedSubtitleCodecs());
        i.length === 1 ? e.push(`
Tracks were discarded because your environment is not able to encode '${i[0]}'.`) : e.push(`
Tracks were discarded because your environment is not able to encode any of the following codecs: ${i.map((s) => `'${s}'`).join(", ")}.`), i.includes("mp3") && e.push(`
The @mediabunny/mp3-encoder extension package provides support for encoding MP3.`), i.includes("aac") && e.push(`
The @mediabunny/aac-encoder extension package provides support for encoding AAC.`), (i.includes("ac3") || i.includes("eac3")) && e.push(`
The @mediabunny/ac3 extension package provides support for encoding and decoding AC-3/E-AC-3.`), i.includes("flac") && e.push(`
The @mediabunny/flac-encoder extension package provides support for encoding FLAC.`);
      } else
        e.push(`
Check the discardedTracks field for more info.`);
    }
    return e;
  }
  /**
   * Executes the conversion process. Resolves once conversion is complete.
   *
   * Will throw if `isValid` is `false`.
   */
  async execute() {
    if (!this.isValid)
      throw new Error(`Cannot execute this conversion because its output configuration is invalid. Make sure to always check the isValid field before executing a conversion.
` + this._getInvalidityExplanation().join(""));
    if (this._executed)
      throw new Error("Conversion cannot be executed twice.");
    if (this._executed = !0, this.onProgress) {
      const e = this.utilizedTracks.map((i) => i.computeDuration()), t = Math.max(0, ...await Promise.all(e));
      this._computeProgress = !0, this._totalDuration = Math.min(t - this._startTimestamp, this._endTimestamp - this._startTimestamp);
      for (const i of this.utilizedTracks)
        this._maxTimestamps.set(i.id, 0);
      this.onProgress?.(0);
    }
    await this.output.start(), this._start();
    try {
      await Promise.all(this._trackPromises);
    } catch (e) {
      throw this._canceled || this.cancel(), e;
    }
    if (this._canceled)
      throw new jo();
    await this.output.finalize(), this._computeProgress && this.onProgress?.(1);
  }
  /**
   * Cancels the conversion process, causing any ongoing `execute` call to throw a `ConversionCanceledError`.
   * Does nothing if the conversion is already complete.
   */
  async cancel() {
    if (!(this.output.state === "finalizing" || this.output.state === "finalized")) {
      if (this._canceled) {
        console.warn("Conversion already canceled.");
        return;
      }
      this._canceled = !0, await this.output.cancel();
    }
  }
  /** @internal */
  async _processVideoTrack(e, t) {
    const i = e.codec;
    if (!i) {
      this.discardedTracks.push({
        track: e,
        reason: "unknown_source_codec"
      });
      return;
    }
    let s;
    const n = ti(e.rotation + (t.rotate ?? 0));
    let a = n;
    const o = this.output.format.supportsVideoRotationMetadata && (t.allowRotationMetadata ?? !0), [c, l] = n % 180 === 0 ? [e.squarePixelWidth, e.squarePixelHeight] : [e.squarePixelHeight, e.squarePixelWidth], d = t.crop;
    d && zs(d, c, l);
    const [u, h] = d ? [d.width, d.height] : [c, l];
    let m = u, g = h;
    const f = m / g, w = (x) => Math.ceil(x / 2) * 2;
    t.width !== void 0 && t.height === void 0 ? (m = w(t.width), g = w(Math.round(m / f))) : t.width === void 0 && t.height !== void 0 ? (g = w(t.height), m = w(Math.round(g * f))) : t.width !== void 0 && t.height !== void 0 && (m = w(t.width), g = w(t.height));
    const k = await e.getFirstTimestamp();
    let b = this.output.format.getSupportedVideoCodecs();
    const T = !!t.forceTranscode || k < this._startTimestamp || !!t.frameRate || t.keyFrameInterval !== void 0 || t.process !== void 0 || t.bitrate !== void 0 || !b.includes(i) || t.codec && t.codec !== i || m !== u || g !== h || n !== 0 && !o || !!d, S = t.alpha ?? "discard";
    if (T) {
      if (!await e.canDecode()) {
        this.discardedTracks.push({
          track: e,
          reason: "undecodable_source_codec"
        });
        return;
      }
      t.codec && (b = b.filter((D) => D === t.codec));
      const P = t.bitrate ?? ws, _ = await Wo(b, {
        width: t.process && t.processedWidth ? t.processedWidth : m,
        height: t.process && t.processedHeight ? t.processedHeight : g,
        bitrate: P
      });
      if (!_) {
        this.discardedTracks.push({
          track: e,
          reason: "no_encodable_target_codec"
        });
        return;
      }
      const C = {
        codec: _,
        bitrate: P,
        keyFrameInterval: t.keyFrameInterval,
        sizeChangeBehavior: t.fit ?? "passThrough",
        alpha: S,
        hardwareAcceleration: t.hardwareAcceleration
      }, I = new bs(C);
      s = I;
      let U = m !== u || g !== h || n !== 0 && (!o || t.process !== void 0) || !!d || e.squarePixelWidth !== e.codedWidth || e.squarePixelHeight !== e.codedHeight;
      if (!U) {
        const D = new ys({
          format: new Zs(),
          // Supports all video codecs
          target: new Ro()
        }), F = new bs(C);
        D.addVideoTrack(F), await D.start();
        const q = await new Kr(e).getSample(k);
        if (q)
          try {
            await F.add(q), q.close(), await D.finalize();
          } catch (j) {
            console.info("Error when probing encoder support. Falling back to rerender path.", j), U = !0, D.cancel();
          }
        else
          await D.cancel();
      }
      U ? this._trackPromises.push((async () => {
        await this._started;
        const F = new Fa(e, {
          width: m,
          height: g,
          fit: t.fit ?? "fill",
          rotation: n,
          // Bake the rotation into the output
          crop: t.crop,
          poolSize: 1,
          alpha: S === "keep"
        }).canvases(this._startTimestamp, this._endTimestamp), R = t.frameRate;
        a = 0;
        let q = null, j = null, Q = null;
        const B = async (H) => {
          p(q), p(R !== void 0);
          const Y = Math.round((H - j) * R);
          for (let de = 1; de < Y; de++) {
            const Me = new ae(q, {
              timestamp: j + de / R,
              duration: 1 / R
            });
            await this._registerVideoSample(e, t, I, Me), Me.close();
          }
        };
        for await (const { canvas: H, timestamp: Y, duration: de } of F) {
          if (this._canceled)
            return;
          let Me = Math.max(Y - this._startTimestamp, 0);
          if (Q = Me + de, R !== void 0) {
            const Ot = Math.floor(Me * R) / R;
            if (q !== null)
              if (Ot <= j) {
                q = H, j = Ot;
                continue;
              } else
                await B(Ot);
            Me = Ot;
          }
          const ze = new ae(H, {
            timestamp: Me,
            duration: R !== void 0 ? 1 / R : de
          });
          await this._registerVideoSample(e, t, I, ze), ze.close(), R !== void 0 && (q = H, j = Me);
        }
        q && (p(Q !== null), p(R !== void 0), await B(Math.floor(Q * R) / R)), I.close(), this._synchronizer.closeTrack(e.id);
      })()) : this._trackPromises.push((async () => {
        await this._started;
        const D = new Kr(e), F = t.frameRate;
        let R = null, q = null, j = null;
        const Q = async (B) => {
          p(R), p(F !== void 0);
          const H = Math.round((B - q) * F);
          for (let Y = 1; Y < H; Y++)
            R.setTimestamp(q + Y / F), R.setDuration(1 / F), await this._registerVideoSample(e, t, I, R);
          R.close();
        };
        for await (const B of D.samples(this._startTimestamp, this._endTimestamp)) {
          if (this._canceled) {
            B.close(), R?.close();
            return;
          }
          let H = Math.max(B.timestamp - this._startTimestamp, 0);
          if (j = H + B.duration, F !== void 0) {
            const Y = Math.floor(H * F) / F;
            if (R !== null)
              if (Y <= q) {
                R.close(), R = B, q = Y;
                continue;
              } else
                await Q(Y);
            H = Y, B.setDuration(1 / F);
          }
          B.setTimestamp(H), await this._registerVideoSample(e, t, I, B), F !== void 0 ? (R = B, q = H) : B.close();
        }
        R && (p(j !== null), p(F !== void 0), await Q(Math.floor(j * F) / F)), I.close(), this._synchronizer.closeTrack(e.id);
      })());
    } else {
      const x = new Lo(i);
      s = x, this._trackPromises.push((async () => {
        await this._started;
        const P = new Zt(e), C = { decoderConfig: await e.getDecoderConfig() ?? void 0 }, I = Number.isFinite(this._endTimestamp) ? await P.getPacket(this._endTimestamp, { metadataOnly: !0 }) ?? void 0 : void 0;
        for await (const U of P.packets(void 0, I, { verifyKeyPackets: !0 })) {
          if (this._canceled)
            return;
          const D = U.clone({
            timestamp: U.timestamp - this._startTimestamp,
            sideData: S === "discard" ? {} : U.sideData
          });
          p(D.timestamp >= 0), this._reportProgress(e.id, D.timestamp), await x.add(D, C), this._synchronizer.shouldWait(e.id, D.timestamp) && await this._synchronizer.wait(D.timestamp);
        }
        x.close(), this._synchronizer.closeTrack(e.id);
      })());
    }
    this.output.addVideoTrack(s, {
      frameRate: t.frameRate,
      // TODO: This condition can be removed when all demuxers properly homogenize to BCP47 in v2
      languageCode: Sr(e.languageCode) ? e.languageCode : void 0,
      name: e.name ?? void 0,
      disposition: e.disposition,
      rotation: a
    }), this._addedCounts.video++, this._totalTrackCount++, this.utilizedTracks.push(e);
  }
  /** @internal */
  async _registerVideoSample(e, t, i, s) {
    if (this._canceled)
      return;
    this._reportProgress(e.id, s.timestamp);
    let n;
    if (!t.process)
      n = [s];
    else {
      let a = t.process(s);
      a instanceof Promise && (a = await a), Array.isArray(a) || (a = a === null ? [] : [a]), n = a.map((o) => o instanceof ae ? o : typeof VideoFrame < "u" && o instanceof VideoFrame ? new ae(o) : new ae(o, {
        timestamp: s.timestamp,
        duration: s.duration
      }));
    }
    for (const a of n) {
      if (this._canceled)
        break;
      await i.add(a), this._synchronizer.shouldWait(e.id, a.timestamp) && await this._synchronizer.wait(a.timestamp);
    }
    for (const a of n)
      a !== s && a.close();
  }
  /** @internal */
  async _processAudioTrack(e, t) {
    const i = e.codec;
    if (!i) {
      this.discardedTracks.push({
        track: e,
        reason: "unknown_source_codec"
      });
      return;
    }
    let s;
    const n = e.numberOfChannels, a = e.sampleRate, o = await e.getFirstTimestamp();
    let c = t.numberOfChannels ?? n, l = t.sampleRate ?? a, d = c !== n || l !== a || o < this._startTimestamp || o > this._startTimestamp && !this.output.format.supportsTimestampedMediaData, u = this.output.format.getSupportedAudioCodecs();
    if (!t.forceTranscode && !t.bitrate && !d && u.includes(i) && (!t.codec || t.codec === i) && !t.process) {
      const h = new Ho(i);
      s = h, this._trackPromises.push((async () => {
        await this._started;
        const m = new Zt(e), f = { decoderConfig: await e.getDecoderConfig() ?? void 0 }, w = Number.isFinite(this._endTimestamp) ? await m.getPacket(this._endTimestamp, { metadataOnly: !0 }) ?? void 0 : void 0;
        for await (const k of m.packets(void 0, w)) {
          if (this._canceled)
            return;
          const b = k.clone({
            timestamp: k.timestamp - this._startTimestamp
          });
          p(b.timestamp >= 0), this._reportProgress(e.id, b.timestamp), await h.add(b, f), this._synchronizer.shouldWait(e.id, b.timestamp) && await this._synchronizer.wait(b.timestamp);
        }
        h.close(), this._synchronizer.closeTrack(e.id);
      })());
    } else {
      if (!await e.canDecode()) {
        this.discardedTracks.push({
          track: e,
          reason: "undecodable_source_codec"
        });
        return;
      }
      let m = null;
      t.codec && (u = u.filter((w) => w === t.codec));
      const g = t.bitrate ?? ws, f = await ei(u, {
        numberOfChannels: t.process && t.processedNumberOfChannels ? t.processedNumberOfChannels : c,
        sampleRate: t.process && t.processedSampleRate ? t.processedSampleRate : l,
        bitrate: g
      });
      if (!f.some((w) => Et.includes(w)) && u.some((w) => Et.includes(w)) && (c !== ji || l !== $i)) {
        const k = (await ei(u, {
          numberOfChannels: ji,
          sampleRate: $i,
          bitrate: g
        })).find((b) => Et.includes(b));
        k && (d = !0, m = k, c = ji, l = $i);
      } else
        m = f[0] ?? null;
      if (m === null) {
        this.discardedTracks.push({
          track: e,
          reason: "no_encodable_target_codec"
        });
        return;
      }
      if (d)
        s = this._resampleAudio(e, t, m, c, l, g);
      else {
        const w = new ks({
          codec: m,
          bitrate: g
        });
        s = w, this._trackPromises.push((async () => {
          await this._started;
          const k = new Gr(e);
          for await (const b of k.samples(void 0, this._endTimestamp)) {
            if (this._canceled) {
              b.close();
              return;
            }
            b.setTimestamp(b.timestamp - this._startTimestamp), await this._registerAudioSample(e, t, w, b), b.close();
          }
          w.close(), this._synchronizer.closeTrack(e.id);
        })());
      }
    }
    this.output.addAudioTrack(s, {
      // TODO: This condition can be removed when all demuxers properly homogenize to BCP47 in v2
      languageCode: Sr(e.languageCode) ? e.languageCode : void 0,
      name: e.name ?? void 0,
      disposition: e.disposition
    }), this._addedCounts.audio++, this._totalTrackCount++, this.utilizedTracks.push(e);
  }
  /** @internal */
  async _registerAudioSample(e, t, i, s) {
    if (this._canceled)
      return;
    this._reportProgress(e.id, s.timestamp);
    let n;
    if (!t.process)
      n = [s];
    else {
      let a = t.process(s);
      if (a instanceof Promise && (a = await a), Array.isArray(a) || (a = a === null ? [] : [a]), !a.every((o) => o instanceof he))
        throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");
      n = a;
    }
    for (const a of n) {
      if (this._canceled)
        break;
      await i.add(a), this._synchronizer.shouldWait(e.id, a.timestamp) && await this._synchronizer.wait(a.timestamp);
    }
    for (const a of n)
      a !== s && a.close();
  }
  /** @internal */
  _resampleAudio(e, t, i, s, n, a) {
    const o = new ks({
      codec: i,
      bitrate: a
    });
    return this._trackPromises.push((async () => {
      await this._started;
      const c = new Th({
        targetNumberOfChannels: s,
        targetSampleRate: n,
        startTime: this._startTimestamp,
        endTime: this._endTimestamp,
        onSample: async (u) => {
          await this._registerAudioSample(e, t, o, u), u.close();
        }
      }), d = new Gr(e).samples(this._startTimestamp, this._endTimestamp);
      for await (const u of d) {
        if (this._canceled) {
          u.close();
          return;
        }
        await c.add(u), u.close();
      }
      await c.finalize(), o.close(), this._synchronizer.closeTrack(e.id);
    })()), o;
  }
  /** @internal */
  _reportProgress(e, t) {
    if (!this._computeProgress)
      return;
    p(this._totalDuration !== null), this._maxTimestamps.set(e, Math.max(t, this._maxTimestamps.get(e)));
    const i = Math.min(...this._maxTimestamps.values()), s = ce(i / this._totalDuration, 0, 1);
    s !== this._lastProgress && (this._lastProgress = s, this.onProgress?.(s));
  }
}
class jo extends Error {
  /** Creates a new {@link ConversionCanceledError}. */
  constructor(e = "Conversion has been canceled.") {
    super(e), this.name = "ConversionCanceledError";
  }
}
const Xn = 5;
class yh {
  constructor() {
    this.maxTimestamps = /* @__PURE__ */ new Map(), this.resolvers = [];
  }
  computeMinAndMaybeResolve() {
    let e = 1 / 0;
    for (const [, t] of this.maxTimestamps)
      e = Math.min(e, t);
    for (let t = 0; t < this.resolvers.length; t++) {
      const i = this.resolvers[t];
      i.timestamp - e < Xn && (i.resolve(), this.resolvers.splice(t, 1), t--);
    }
    return e;
  }
  shouldWait(e, t) {
    this.maxTimestamps.set(e, Math.max(t, this.maxTimestamps.get(e) ?? -1 / 0));
    const i = this.computeMinAndMaybeResolve();
    return t - i >= Xn;
  }
  wait(e) {
    const { promise: t, resolve: i } = re();
    return this.resolvers.push({
      timestamp: e,
      resolve: i
    }), t;
  }
  closeTrack(e) {
    this.maxTimestamps.delete(e), this.computeMinAndMaybeResolve();
  }
}
class Th {
  constructor(e) {
    this.sourceSampleRate = null, this.sourceNumberOfChannels = null, this.targetSampleRate = e.targetSampleRate, this.targetNumberOfChannels = e.targetNumberOfChannels, this.startTime = e.startTime, this.endTime = e.endTime, this.onSample = e.onSample, this.bufferSizeInFrames = Math.floor(this.targetSampleRate * 5), this.bufferSizeInSamples = this.bufferSizeInFrames * this.targetNumberOfChannels, this.outputBuffer = new Float32Array(this.bufferSizeInSamples), this.bufferStartFrame = 0, this.maxWrittenFrame = -1;
  }
  /**
   * Sets up the channel mixer to handle up/downmixing in the case where input and output channel counts don't match.
   */
  doChannelMixerSetup() {
    p(this.sourceNumberOfChannels !== null);
    const e = this.sourceNumberOfChannels, t = this.targetNumberOfChannels;
    e === 1 && t === 2 ? this.channelMixer = (i, s) => i[s * e] : e === 1 && t === 4 ? this.channelMixer = (i, s, n) => i[s * e] * +(n < 2) : e === 1 && t === 6 ? this.channelMixer = (i, s, n) => i[s * e] * +(n === 2) : e === 2 && t === 1 ? this.channelMixer = (i, s) => {
      const n = s * e;
      return 0.5 * (i[n] + i[n + 1]);
    } : e === 2 && t === 4 ? this.channelMixer = (i, s, n) => i[s * e + n] * +(n < 2) : e === 2 && t === 6 ? this.channelMixer = (i, s, n) => i[s * e + n] * +(n < 2) : e === 4 && t === 1 ? this.channelMixer = (i, s) => {
      const n = s * e;
      return 0.25 * (i[n] + i[n + 1] + i[n + 2] + i[n + 3]);
    } : e === 4 && t === 2 ? this.channelMixer = (i, s, n) => {
      const a = s * e;
      return 0.5 * (i[a + n] + i[a + n + 2]);
    } : e === 4 && t === 6 ? this.channelMixer = (i, s, n) => {
      const a = s * e;
      return n < 2 ? i[a + n] : n === 2 || n === 3 ? 0 : i[a + n - 2];
    } : e === 6 && t === 1 ? this.channelMixer = (i, s) => {
      const n = s * e;
      return Math.SQRT1_2 * (i[n] + i[n + 1]) + i[n + 2] + 0.5 * (i[n + 4] + i[n + 5]);
    } : e === 6 && t === 2 ? this.channelMixer = (i, s, n) => {
      const a = s * e;
      return i[a + n] + Math.SQRT1_2 * (i[a + 2] + i[a + n + 4]);
    } : e === 6 && t === 4 ? this.channelMixer = (i, s, n) => {
      const a = s * e;
      return n < 2 ? i[a + n] + Math.SQRT1_2 * i[a + 2] : i[a + n + 2];
    } : this.channelMixer = (i, s, n) => n < e ? i[s * e + n] : 0;
  }
  ensureTempBufferSize(e) {
    let t = this.tempSourceBuffer.length;
    for (; t < e; )
      t *= 2;
    if (t !== this.tempSourceBuffer.length) {
      const i = new Float32Array(t);
      i.set(this.tempSourceBuffer), this.tempSourceBuffer = i;
    }
  }
  async add(e) {
    this.sourceSampleRate === null && (this.sourceSampleRate = e.sampleRate, this.sourceNumberOfChannels = e.numberOfChannels, this.tempSourceBuffer = new Float32Array(this.sourceSampleRate * this.sourceNumberOfChannels), this.doChannelMixerSetup());
    const t = e.numberOfFrames * e.numberOfChannels;
    this.ensureTempBufferSize(t);
    const i = e.allocationSize({ planeIndex: 0, format: "f32" }), s = new Float32Array(this.tempSourceBuffer.buffer, 0, i / 4);
    e.copyTo(s, { planeIndex: 0, format: "f32" });
    const n = e.timestamp - this.startTime, a = e.numberOfFrames / this.sourceSampleRate, o = Math.min(n + a, this.endTime - this.startTime), c = Math.floor(n * this.targetSampleRate), l = Math.ceil(o * this.targetSampleRate);
    for (let d = c; d < l; d++) {
      if (d < this.bufferStartFrame)
        continue;
      for (; d >= this.bufferStartFrame + this.bufferSizeInFrames; )
        await this.finalizeCurrentBuffer(), this.bufferStartFrame += this.bufferSizeInFrames;
      const u = d - this.bufferStartFrame;
      p(u < this.bufferSizeInFrames);
      const g = (d / this.targetSampleRate - n) * this.sourceSampleRate, f = Math.floor(g), w = Math.ceil(g), k = g - f;
      for (let b = 0; b < this.targetNumberOfChannels; b++) {
        let T = 0, S = 0;
        f >= 0 && f < e.numberOfFrames && (T = this.channelMixer(s, f, b)), w >= 0 && w < e.numberOfFrames && (S = this.channelMixer(s, w, b));
        const x = T + k * (S - T), P = u * this.targetNumberOfChannels + b;
        this.outputBuffer[P] += x;
      }
      this.maxWrittenFrame = Math.max(this.maxWrittenFrame, u);
    }
  }
  async finalizeCurrentBuffer() {
    if (this.maxWrittenFrame < 0)
      return;
    const e = (this.maxWrittenFrame + 1) * this.targetNumberOfChannels, t = new Float32Array(e);
    t.set(this.outputBuffer.subarray(0, e));
    const i = this.bufferStartFrame / this.targetSampleRate, s = new he({
      format: "f32",
      sampleRate: this.targetSampleRate,
      numberOfChannels: this.targetNumberOfChannels,
      timestamp: i,
      data: t
    });
    await this.onSample(s), this.outputBuffer.fill(0), this.maxWrittenFrame = -1;
  }
  finalize() {
    return this.finalizeCurrentBuffer();
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const $o = Symbol.for("mediabunny loaded");
globalThis[$o] && console.error(`[WARNING]
Mediabunny was loaded twice. This will likely cause Mediabunny not to work correctly. Check if multiple dependencies are importing different versions of Mediabunny, or if something is being bundled incorrectly.`);
globalThis[$o] = !0;
var Sh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ADTS: fo,
  ALL_FORMATS: Kl,
  ALL_TRACK_TYPES: qo,
  AUDIO_CODECS: we,
  AdtsInputFormat: io,
  AdtsOutputFormat: Ju,
  AttachedFile: oi,
  AudioBufferSink: fl,
  AudioBufferSource: fh,
  AudioSample: he,
  AudioSampleSink: Gr,
  AudioSampleSource: ks,
  AudioSource: or,
  BaseMediaSampleSink: Us,
  BlobSource: Zl,
  BufferSource: Yl,
  BufferTarget: Fo,
  CanvasSink: Fa,
  CanvasSource: uh,
  Conversion: an,
  ConversionCanceledError: jo,
  CustomAudioDecoder: _a,
  CustomAudioEncoder: Ea,
  CustomVideoDecoder: Ca,
  CustomVideoEncoder: Ia,
  EncodedAudioPacketSource: Ho,
  EncodedPacket: X,
  EncodedPacketSink: Zt,
  EncodedVideoPacketSource: Lo,
  FLAC: mo,
  FilePathSource: td,
  FilePathTarget: Fu,
  FlacInputFormat: ro,
  FlacOutputFormat: eh,
  Input: bo,
  InputAudioTrack: ve,
  InputDisposedError: be,
  InputFormat: Le,
  InputTrack: mi,
  InputVideoTrack: Dt,
  IsobmffInputFormat: Ws,
  IsobmffOutputFormat: Ys,
  MATROSKA: oo,
  MP3: lo,
  MP4: no,
  MPEG_TS: po,
  MatroskaInputFormat: Ls,
  MediaSource: ki,
  MediaStreamAudioTrackSource: mh,
  MediaStreamVideoTrackSource: hh,
  MkvOutputFormat: fs,
  MovOutputFormat: Js,
  Mp3InputFormat: Ja,
  Mp3OutputFormat: Xu,
  Mp4InputFormat: Xa,
  Mp4OutputFormat: Zs,
  MpegTsInputFormat: so,
  MpegTsOutputFormat: th,
  NON_PCM_AUDIO_CODECS: Et,
  NullTarget: Ro,
  OGG: ho,
  OggInputFormat: to,
  OggOutputFormat: Zu,
  Output: ys,
  OutputFormat: He,
  PCM_AUDIO_CODECS: se,
  QTFF: ao,
  QUALITY_HIGH: ws,
  QUALITY_LOW: ih,
  QUALITY_MEDIUM: sh,
  QUALITY_VERY_HIGH: nh,
  QUALITY_VERY_LOW: rh,
  Quality: Se,
  QuickTimeInputFormat: Ya,
  ReadableStreamSource: rd,
  RichImageData: It,
  SUBTITLE_CODECS: Ne,
  Source: pt,
  StreamSource: wo,
  StreamTarget: Bo,
  SubtitleSource: nn,
  Target: nr,
  TextSubtitleSource: kh,
  UrlSource: ed,
  VIDEO_CODECS: fe,
  VIDEO_SAMPLE_PIXEL_FORMATS: Ms,
  VideoSample: ae,
  VideoSampleColorSpace: Ur,
  VideoSampleSink: Kr,
  VideoSampleSource: bs,
  VideoSource: ar,
  WAVE: uo,
  WEBM: co,
  WavOutputFormat: Yu,
  WaveInputFormat: eo,
  WebMInputFormat: Za,
  WebMOutputFormat: ms,
  canEncode: ah,
  canEncodeAudio: wi,
  canEncodeSubtitles: bi,
  canEncodeVideo: gi,
  getEncodableAudioCodecs: ei,
  getEncodableCodecs: oh,
  getEncodableSubtitleCodecs: Vo,
  getEncodableVideoCodecs: No,
  getFirstEncodableAudioCodec: ch,
  getFirstEncodableSubtitleCodec: lh,
  getFirstEncodableVideoCodec: Wo,
  registerDecoder: Jc,
  registerEncoder: el
});
