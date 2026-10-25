/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
function I(t) {
  if (!t)
    throw new Error("Assertion failed.");
}
const He = (t) => {
  const e = (t % 360 + 360) % 360;
  if (e === 0 || e === 90 || e === 180 || e === 270)
    return e;
  throw new Error(`Invalid rotation ${t}.`);
}, Be = (t) => t && t[t.length - 1], je = (t) => t >= 0 && t < 2 ** 32, we = (t) => {
  let e = 0;
  for (; t.readBits(1) === 0 && e < 32; )
    e++;
  if (e >= 32)
    throw new Error("Invalid exponential-Golomb code.");
  return (1 << e) - 1 + t.readBits(e);
}, Ue = (t) => {
  const e = we(t);
  return (e & 1) === 0 ? -(e >> 1) : e + 1 >> 1;
}, Le = (t, e, r, n) => {
  for (let s = e; s < r; s++) {
    const a = Math.floor(s / 8);
    let i = t[a];
    const o = 7 - (s & 7);
    i &= ~(1 << o), i |= (n & 1 << r - s - 1) >> r - s - 1 << o, t[a] = i;
  }
}, j = (t) => t.constructor === Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t), F = (t) => t.constructor === DataView ? t : ArrayBuffer.isView(t) ? new DataView(t.buffer, t.byteOffset, t.byteLength) : new DataView(t), qe = /* @__PURE__ */ new TextDecoder(), ke = /* @__PURE__ */ new TextEncoder(), ze = (t) => {
  for (let e = 0; e < t.length; e++)
    if (t.charCodeAt(e) > 255)
      return !1;
  return !0;
}, X = (t) => Object.fromEntries(Object.entries(t).map(([e, r]) => [r, e])), ie = {
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
}, Ge = /* @__PURE__ */ X(ie), oe = {
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
}, Xe = /* @__PURE__ */ X(oe), de = {
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
}, $e = /* @__PURE__ */ X(de), Ke = (t) => !!t && !!t.primaries && !!t.transfer && !!t.matrix && t.fullRange !== void 0, fe = (t) => t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer || ArrayBuffer.isView(t);
class Je {
  constructor() {
    this.currentPromise = Promise.resolve(), this.pending = 0;
  }
  async acquire() {
    let e;
    const r = new Promise((s) => {
      let a = !1;
      e = () => {
        a || (s(), this.pending--, a = !0);
      };
    }), n = this.currentPromise;
    return this.currentPromise = r, this.pending++, await n, e;
  }
}
const Ze = (t) => [...t].map((e) => e.toString(16).padStart(2, "0")).join(""), Qe = (t) => (t = t >> 1 & 1431655765 | (t & 1431655765) << 1, t = t >> 2 & 858993459 | (t & 858993459) << 2, t = t >> 4 & 252645135 | (t & 252645135) << 4, t = t >> 8 & 16711935 | (t & 16711935) << 8, t = t >> 16 & 65535 | (t & 65535) << 16, t >>> 0), Ye = (t, e, r) => {
  let n = 0, s = t.length - 1, a = -1;
  for (; n <= s; ) {
    const i = n + s >> 1, o = r(t[i]);
    o === e ? (a = i, s = i - 1) : o < e ? n = i + 1 : s = i - 1;
  }
  return a;
}, ge = (t, e, r) => {
  let n = 0, s = t.length - 1, a = -1;
  for (; n <= s; ) {
    const i = n + (s - n + 1) / 2 | 0;
    r(t[i]) <= e ? (a = i, n = i + 1) : s = i - 1;
  }
  return a;
}, et = (t, e, r) => {
  const n = ge(t, r(e), r);
  t.splice(n + 1, 0, e);
}, tt = () => {
  let t, e;
  return { promise: new Promise((n, s) => {
    t = n, e = s;
  }), resolve: t, reject: e };
}, rt = (t, e) => {
  for (let r = t.length - 1; r >= 0; r--)
    if (e(t[r]))
      return t[r];
}, nt = (t, e) => {
  for (let r = t.length - 1; r >= 0; r--)
    if (e(t[r]))
      return r;
  return -1;
}, st = async function* (t) {
  Symbol.iterator in t ? yield* t[Symbol.iterator]() : yield* t[Symbol.asyncIterator]();
}, at = (t) => {
  if (!(Symbol.iterator in t) && !(Symbol.asyncIterator in t))
    throw new TypeError("Argument must be an iterable or async iterable.");
}, ye = (t) => {
  throw new Error(`Unexpected value: ${t}`);
}, be = (t, e, r) => {
  const n = t.getUint8(e), s = t.getUint8(e + 1), a = t.getUint8(e + 2);
  return r ? n | s << 8 | a << 16 : n << 16 | s << 8 | a;
}, it = (t, e, r) => be(t, e, r) << 8 >> 8, Ie = (t, e, r, n) => {
  r = r >>> 0, r = r & 16777215, n ? (t.setUint8(e, r & 255), t.setUint8(e + 1, r >>> 8 & 255), t.setUint8(e + 2, r >>> 16 & 255)) : (t.setUint8(e, r >>> 16 & 255), t.setUint8(e + 1, r >>> 8 & 255), t.setUint8(e + 2, r & 255));
}, ot = (t, e, r, n) => {
  r = V(r, -8388608, 8388607), r < 0 && (r = r + 16777216 & 16777215), Ie(t, e, r, n);
}, dt = (t, e, r, n) => {
  t.setUint32(e + 0, r, !0), t.setInt32(e + 4, Math.floor(r / 2 ** 32), !0);
}, ft = (t, e) => ({
  async next() {
    const r = await t.next();
    return r.done ? { value: void 0, done: !0 } : { value: e(r.value), done: !1 };
  },
  return() {
    return t.return();
  },
  throw(r) {
    return t.throw(r);
  },
  [Symbol.asyncIterator]() {
    return this;
  }
}), V = (t, e, r) => Math.max(e, Math.min(r, t)), lt = "und", ut = (t) => {
  const e = Math.round(t);
  return Math.abs(t / e - 1) < 10 * Number.EPSILON ? e : t;
}, ct = (t, e) => Math.round(t / e) * e, ht = (t, e) => Math.floor(t / e) * e, mt = (t) => {
  let e = 0;
  for (; t; )
    e++, t >>= 1;
  return e;
}, Ee = /^[a-z]{3}$/, pt = (t) => Ee.test(t), S = 1e6 * (1 + Number.EPSILON), wt = (t, e) => {
  const r = { ...t, ...e };
  if (t.headers || e.headers) {
    const n = t.headers ? J(t.headers) : {}, s = e.headers ? J(e.headers) : {}, a = { ...n };
    Object.entries(s).forEach(([i, o]) => {
      const f = Object.keys(a).find((u) => u.toLowerCase() === i.toLowerCase());
      f && delete a[f], a[i] = o;
    }), r.headers = a;
  }
  return r;
}, J = (t) => {
  if (t instanceof Headers) {
    const e = {};
    return t.forEach((r, n) => {
      e[n] = r;
    }), e;
  }
  if (Array.isArray(t)) {
    const e = {};
    return t.forEach(([r, n]) => {
      e[r] = n;
    }), e;
  }
  return t;
}, gt = async (t, e, r, n, s) => {
  let a = 0;
  for (; ; )
    try {
      return await t(e, r);
    } catch (i) {
      if (s())
        throw i;
      a++;
      const o = n(a, i, e);
      if (o === null)
        throw i;
      if (console.error("Retrying failed fetch. Error:", i), !Number.isFinite(o) || o < 0)
        throw new TypeError("Retry delay must be a non-negative finite number.");
      if (o > 0 && await new Promise((f) => setTimeout(f, 1e3 * o)), s())
        throw i;
    }
}, yt = (t, e) => {
  const r = t < 0 ? -1 : 1;
  t = Math.abs(t);
  let n = 0, s = 1, a = 1, i = 0, o = t;
  for (; ; ) {
    const f = Math.floor(o), u = f * a + n, d = f * i + s;
    if (d > e)
      return {
        numerator: r * a,
        denominator: i
      };
    if (n = a, s = i, a = u, i = d, o = 1 / (o - f), !isFinite(o))
      break;
  }
  return {
    numerator: r * a,
    denominator: i
  };
};
class bt {
  constructor() {
    this.currentPromise = Promise.resolve();
  }
  call(e) {
    return this.currentPromise = this.currentPromise.then(e);
  }
}
let U = null;
const ve = () => U !== null ? U : U = !!(typeof navigator < "u" && (navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
let L = null;
const Te = () => L !== null ? L : L = typeof navigator < "u" && navigator.userAgent?.includes("Firefox");
let q = null;
const It = () => q !== null ? q : q = !!(typeof navigator < "u" && (navigator.vendor?.includes("Google Inc") || /Chrome/.test(navigator.userAgent)));
let k = null;
const Et = () => {
  if (k !== null)
    return k;
  if (typeof navigator > "u")
    return null;
  const t = /\bChrome\/(\d+)/.exec(navigator.userAgent);
  return t ? k = Number(t[1]) : null;
}, vt = (t, e) => t !== -1 ? t : e, Tt = (t, e, r, n) => t <= n && r <= e, At = function* (t) {
  for (const e in t) {
    const r = t[e];
    r !== void 0 && (yield { key: e, value: r });
  }
}, Ct = (t) => {
  switch (t.toLowerCase()) {
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
}, Rt = (t) => {
  const e = atob(t), r = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e.charCodeAt(n);
  return r;
}, Ft = (t) => {
  let e = "";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return btoa(e);
}, St = (t, e) => {
  if (t.length !== e.length)
    return !1;
  for (let r = 0; r < t.length; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}, Ae = () => {
  Symbol.dispose ??= Symbol("Symbol.dispose");
}, Ot = (t) => typeof t == "number" && !Number.isNaN(t), Ce = (t) => {
  I(t.den !== 0);
  let e = Math.abs(t.num), r = Math.abs(t.den);
  for (; r !== 0; ) {
    const s = e % r;
    e = r, r = s;
  }
  const n = e || 1;
  return {
    num: t.num / n,
    den: t.den / n
  };
}, Z = (t, e) => {
  if (typeof t != "object" || !t)
    throw new TypeError(`${e} must be an object.`);
  if (!Number.isInteger(t.left) || t.left < 0)
    throw new TypeError(`${e}.left must be a non-negative integer.`);
  if (!Number.isInteger(t.top) || t.top < 0)
    throw new TypeError(`${e}.top must be a non-negative integer.`);
  if (!Number.isInteger(t.width) || t.width < 0)
    throw new TypeError(`${e}.width must be a non-negative integer.`);
  if (!Number.isInteger(t.height) || t.height < 0)
    throw new TypeError(`${e}.height must be a non-negative integer.`);
};
let _, Re = 1;
const Q = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), le = () => typeof window > "u", Fe = () => {
  const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
  self.onmessage = (r) => {
    const n = r.data;
    switch (n.type) {
      case "set-timeout":
        {
          const s = setTimeout(() => {
            t.delete(n.timerId), self.postMessage({ type: "fire", timerId: n.timerId });
          }, n.delay);
          t.set(n.timerId, s);
        }
        break;
      case "set-interval":
        {
          const s = setInterval(() => {
            self.postMessage({ type: "fire", timerId: n.timerId });
          }, n.delay);
          e.set(n.timerId, s);
        }
        break;
      case "clear-timeout":
        {
          const s = t.get(n.timerId);
          s !== void 0 && (clearTimeout(s), t.delete(n.timerId));
        }
        break;
      case "clear-interval":
        {
          const s = e.get(n.timerId);
          s !== void 0 && (clearInterval(s), e.delete(n.timerId));
        }
        break;
    }
  };
}, ue = () => {
  if (_)
    return _;
  const t = `(${Fe.toString()})();`, e = URL.createObjectURL(new Blob([t], { type: "text/javascript" }));
  return _ = new Worker(e), URL.revokeObjectURL(e), _.onmessage = (r) => {
    const n = r.data, s = Q.get(n.timerId);
    if (s) {
      Q.delete(n.timerId), s();
      return;
    }
    const a = $.get(n.timerId);
    a && a();
  }, _;
}, _t = (t, e) => {
  if (le())
    return { id: setInterval(t, e) };
  const r = Re++;
  return $.set(r, () => {
    t();
  }), ue().postMessage({
    type: "set-interval",
    timerId: r,
    delay: e
  }), { id: r };
}, xt = (t) => {
  if (le()) {
    clearInterval(t.id);
    return;
  }
  I(typeof t.id == "number"), $.delete(t.id), ue().postMessage({
    type: "clear-interval",
    timerId: t.id
  });
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Se {
  /** Returns true if and only if the decoder can decode the given codec configuration. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static supports(e, r) {
    return !1;
  }
}
class Oe {
  /** Returns true if and only if the decoder can decode the given codec configuration. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static supports(e, r) {
    return !1;
  }
}
class _e {
  /** Returns true if and only if the encoder can encode the given codec configuration. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static supports(e, r) {
    return !1;
  }
}
class xe {
  /** Returns true if and only if the encoder can encode the given codec configuration. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static supports(e, r) {
    return !1;
  }
}
const Y = [], ee = [], te = [], re = [], Pt = (t) => {
  if (t.prototype instanceof Se) {
    const e = t;
    if (Y.includes(e)) {
      console.warn("Video decoder already registered.");
      return;
    }
    Y.push(e);
  } else if (t.prototype instanceof Oe) {
    const e = t;
    if (ee.includes(e)) {
      console.warn("Audio decoder already registered.");
      return;
    }
    ee.push(e);
  } else
    throw new TypeError("Decoder must be a CustomVideoDecoder or CustomAudioDecoder.");
}, Dt = (t) => {
  if (t.prototype instanceof _e) {
    const e = t;
    if (te.includes(e)) {
      console.warn("Video encoder already registered.");
      return;
    }
    te.push(e);
  } else if (t.prototype instanceof xe) {
    const e = t;
    if (re.includes(e)) {
      console.warn("Audio encoder already registered.");
      return;
    }
    re.push(e);
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
Ae();
let ne = -1 / 0, se = -1 / 0, N = null;
typeof FinalizationRegistry < "u" && (N = new FinalizationRegistry((t) => {
  const e = Date.now();
  t.type === "video" ? (e - ne >= 1e3 && (console.error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), ne = e), typeof VideoFrame < "u" && t.data instanceof VideoFrame && t.data.close()) : (e - se >= 1e3 && (console.error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), se = e), typeof AudioData < "u" && t.data instanceof AudioData && t.data.close());
}));
const ce = [
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
], Pe = new Set(ce);
class P {
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
    return Math.trunc(S * this.timestamp);
  }
  /** The duration of the frame in microseconds. */
  get microsecondDuration() {
    return Math.trunc(S * this.duration);
  }
  /**
   * Whether this sample uses a pixel format that can hold transparency data. Note that this doesn't necessarily mean
   * that the sample is transparent.
   */
  get hasAlpha() {
    return this.format && this.format.includes("A");
  }
  constructor(e, r) {
    if (this._closed = !1, e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer || ArrayBuffer.isView(e)) {
      if (!r || typeof r != "object")
        throw new TypeError("init must be an object.");
      if (r.format === void 0 || !Pe.has(r.format))
        throw new TypeError("init.format must be one of: " + ce.join(", "));
      if (!Number.isInteger(r.codedWidth) || r.codedWidth <= 0)
        throw new TypeError("init.codedWidth must be a positive integer.");
      if (!Number.isInteger(r.codedHeight) || r.codedHeight <= 0)
        throw new TypeError("init.codedHeight must be a positive integer.");
      if (r.rotation !== void 0 && ![0, 90, 180, 270].includes(r.rotation))
        throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      if (!Number.isFinite(r.timestamp))
        throw new TypeError("init.timestamp must be a number.");
      if (r.duration !== void 0 && (!Number.isFinite(r.duration) || r.duration < 0))
        throw new TypeError("init.duration, when provided, must be a non-negative number.");
      if (r.layout !== void 0) {
        if (!Array.isArray(r.layout))
          throw new TypeError("init.layout, when provided, must be an array.");
        for (const n of r.layout) {
          if (!n || typeof n != "object" || Array.isArray(n))
            throw new TypeError("Each entry in init.layout must be an object.");
          if (!Number.isInteger(n.offset) || n.offset < 0)
            throw new TypeError("plane.offset must be a non-negative integer.");
          if (!Number.isInteger(n.stride) || n.stride < 0)
            throw new TypeError("plane.stride must be a non-negative integer.");
        }
      }
      if (r.visibleRect !== void 0 && Z(r.visibleRect, "init.visibleRect"), r.displayWidth !== void 0 && (!Number.isInteger(r.displayWidth) || r.displayWidth <= 0))
        throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
      if (r.displayHeight !== void 0 && (!Number.isInteger(r.displayHeight) || r.displayHeight <= 0))
        throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
      if (r.displayWidth !== void 0 != (r.displayHeight !== void 0))
        throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
      this._data = j(e).slice(), this._layout = r.layout ?? Me(r.format, r.codedWidth, r.codedHeight), this.format = r.format, this.rotation = r.rotation ?? 0, this.timestamp = r.timestamp, this.duration = r.duration ?? 0, this.colorSpace = new z(r.colorSpace), this.visibleRect = {
        left: r.visibleRect?.left ?? 0,
        top: r.visibleRect?.top ?? 0,
        width: r.visibleRect?.width ?? r.codedWidth,
        height: r.visibleRect?.height ?? r.codedHeight
      }, r.displayWidth !== void 0 ? (this.squarePixelWidth = this.rotation % 180 === 0 ? r.displayWidth : r.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? r.displayHeight : r.displayWidth) : (this.squarePixelWidth = this.codedWidth, this.squarePixelHeight = this.codedHeight);
    } else if (typeof VideoFrame < "u" && e instanceof VideoFrame) {
      if (r?.rotation !== void 0 && ![0, 90, 180, 270].includes(r.rotation))
        throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      if (r?.timestamp !== void 0 && !Number.isFinite(r?.timestamp))
        throw new TypeError("init.timestamp, when provided, must be a number.");
      if (r?.duration !== void 0 && (!Number.isFinite(r.duration) || r.duration < 0))
        throw new TypeError("init.duration, when provided, must be a non-negative number.");
      r?.visibleRect !== void 0 && Z(r.visibleRect, "init.visibleRect"), this._data = e, this._layout = null, this.format = e.format, this.visibleRect = {
        left: e.visibleRect?.x ?? 0,
        top: e.visibleRect?.y ?? 0,
        width: e.visibleRect?.width ?? e.codedWidth,
        height: e.visibleRect?.height ?? e.codedHeight
      }, this.rotation = r?.rotation ?? 0, this.squarePixelWidth = e.displayWidth, this.squarePixelHeight = e.displayHeight, this.timestamp = r?.timestamp ?? e.timestamp / 1e6, this.duration = r?.duration ?? (e.duration ?? 0) / 1e6, this.colorSpace = new z(e.colorSpace);
    } else if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof SVGImageElement < "u" && e instanceof SVGImageElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas) {
      if (!r || typeof r != "object")
        throw new TypeError("init must be an object.");
      if (r.rotation !== void 0 && ![0, 90, 180, 270].includes(r.rotation))
        throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      if (!Number.isFinite(r.timestamp))
        throw new TypeError("init.timestamp must be a number.");
      if (r.duration !== void 0 && (!Number.isFinite(r.duration) || r.duration < 0))
        throw new TypeError("init.duration, when provided, must be a non-negative number.");
      if (typeof VideoFrame < "u")
        return new P(new VideoFrame(e, {
          timestamp: Math.trunc(r.timestamp * S),
          // Drag 0 to undefined
          duration: Math.trunc((r.duration ?? 0) * S) || void 0
        }), r);
      let n = 0, s = 0;
      if ("naturalWidth" in e ? (n = e.naturalWidth, s = e.naturalHeight) : "videoWidth" in e ? (n = e.videoWidth, s = e.videoHeight) : "width" in e && (n = Number(e.width), s = Number(e.height)), !n || !s)
        throw new TypeError("Could not determine dimensions.");
      const a = new OffscreenCanvas(n, s), i = a.getContext("2d", {
        alpha: Te(),
        // Firefox has VideoFrame glitches with opaque canvases
        willReadFrequently: !0
      });
      I(i), i.drawImage(e, 0, 0), this._data = a, this._layout = null, this.format = "RGBX", this.visibleRect = { left: 0, top: 0, width: n, height: s }, this.squarePixelWidth = n, this.squarePixelHeight = s, this.rotation = r.rotation ?? 0, this.timestamp = r.timestamp, this.duration = r.duration ?? 0, this.colorSpace = new z({
        matrix: "rgb",
        primaries: "bt709",
        transfer: "iec61966-2-1",
        fullRange: !0
      });
    } else
      throw new TypeError("Invalid data type: Must be a BufferSource or CanvasImageSource.");
    this.pixelAspectRatio = Ce({
      num: this.squarePixelWidth * this.codedHeight,
      den: this.squarePixelHeight * this.codedWidth
    }), N?.register(this, { type: "video", data: this._data }, this);
  }
  /** Clones this video sample. */
  clone() {
    if (this._closed)
      throw new Error("VideoSample is closed.");
    return I(this._data !== null), C(this._data) ? new P(this._data.clone(), {
      timestamp: this.timestamp,
      duration: this.duration,
      rotation: this.rotation
    }) : this._data instanceof Uint8Array ? (I(this._layout), new P(this._data, {
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
    })) : new P(this._data, {
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
    this._closed || (N?.unregister(this), C(this._data) ? this._data.close() : this._data = null, this._closed = !0);
  }
  /**
   * Returns the number of bytes required to hold this video sample's pixel data. Throws if `format` is `null`.
   */
  allocationSize(e = {}) {
    if (ae(e), this._closed)
      throw new Error("VideoSample is closed.");
    if (this.format === null)
      throw new Error("Cannot get allocation size when format is null. Sorry!");
    if (I(this._data !== null), !C(this._data) && (e.colorSpace || e.format && e.format !== this.format || e.layout || e.rect)) {
      const r = this.toVideoFrame(), n = r.allocationSize(e);
      return r.close(), n;
    }
    return C(this._data) ? this._data.allocationSize(e) : this._data instanceof Uint8Array ? this._data.byteLength : this.codedWidth * this.codedHeight * 4;
  }
  /**
   * Copies this video sample's pixel data to an ArrayBuffer or ArrayBufferView. Throws if `format` is `null`.
   * @returns The byte layout of the planes of the copied data.
   */
  async copyTo(e, r = {}) {
    if (!fe(e))
      throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
    if (ae(r), this._closed)
      throw new Error("VideoSample is closed.");
    if (this.format === null)
      throw new Error("Cannot copy video sample data when format is null. Sorry!");
    if (I(this._data !== null), !C(this._data) && (r.colorSpace || r.format && r.format !== this.format || r.layout || r.rect)) {
      const n = this.toVideoFrame(), s = await n.copyTo(e, r);
      return n.close(), s;
    }
    if (C(this._data))
      return this._data.copyTo(e, r);
    if (this._data instanceof Uint8Array)
      return I(this._layout), j(e).set(this._data), this._layout;
    {
      const s = this._data.getContext("2d");
      I(s);
      const a = s.getImageData(0, 0, this.codedWidth, this.codedHeight);
      return j(e).set(a.data), [{
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
    return I(this._data !== null), C(this._data) ? new VideoFrame(this._data, {
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
  draw(e, r, n, s, a, i, o, f, u) {
    let d = 0, l = 0, m = this.displayWidth, g = this.displayHeight, p = 0, y = 0, c = this.displayWidth, h = this.displayHeight;
    if (i !== void 0 ? (d = r, l = n, m = s, g = a, p = i, y = o, f !== void 0 ? (c = f, h = u) : (c = m, h = g)) : (p = r, y = n, s !== void 0 && (c = s, h = a)), !(typeof CanvasRenderingContext2D < "u" && e instanceof CanvasRenderingContext2D || typeof OffscreenCanvasRenderingContext2D < "u" && e instanceof OffscreenCanvasRenderingContext2D))
      throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
    if (!Number.isFinite(d))
      throw new TypeError("sx must be a number.");
    if (!Number.isFinite(l))
      throw new TypeError("sy must be a number.");
    if (!Number.isFinite(m) || m < 0)
      throw new TypeError("sWidth must be a non-negative number.");
    if (!Number.isFinite(g) || g < 0)
      throw new TypeError("sHeight must be a non-negative number.");
    if (!Number.isFinite(p))
      throw new TypeError("dx must be a number.");
    if (!Number.isFinite(y))
      throw new TypeError("dy must be a number.");
    if (!Number.isFinite(c) || c < 0)
      throw new TypeError("dWidth must be a non-negative number.");
    if (!Number.isFinite(h) || h < 0)
      throw new TypeError("dHeight must be a non-negative number.");
    if (this._closed)
      throw new Error("VideoSample is closed.");
    ({ sx: d, sy: l, sWidth: m, sHeight: g } = this._rotateSourceRegion(d, l, m, g, this.rotation));
    const w = this.toCanvasImageSource();
    e.save();
    const b = p + c / 2, v = y + h / 2;
    e.translate(b, v), e.rotate(this.rotation * Math.PI / 180);
    const E = this.rotation % 180 === 0 ? 1 : c / h;
    e.scale(1 / E, E), e.drawImage(w, d, l, m, g, -c / 2, -h / 2, c, h), e.restore();
  }
  /**
   * Draws the sample in the middle of the canvas corresponding to the context with the specified fit behavior.
   */
  drawWithFit(e, r) {
    if (!(typeof CanvasRenderingContext2D < "u" && e instanceof CanvasRenderingContext2D || typeof OffscreenCanvasRenderingContext2D < "u" && e instanceof OffscreenCanvasRenderingContext2D))
      throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
    if (!r || typeof r != "object")
      throw new TypeError("options must be an object.");
    if (!["fill", "contain", "cover"].includes(r.fit))
      throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
    if (r.rotation !== void 0 && ![0, 90, 180, 270].includes(r.rotation))
      throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
    r.crop !== void 0 && Ne(r.crop, "options.");
    const n = e.canvas.width, s = e.canvas.height, a = r.rotation ?? this.rotation, [i, o] = a % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
    r.crop && De(r.crop, i, o);
    let f, u, d, l;
    const { sx: m, sy: g, sWidth: p, sHeight: y } = this._rotateSourceRegion(r.crop?.left ?? 0, r.crop?.top ?? 0, r.crop?.width ?? i, r.crop?.height ?? o, a);
    if (r.fit === "fill")
      f = 0, u = 0, d = n, l = s;
    else {
      const [h, w] = r.crop ? [r.crop.width, r.crop.height] : [i, o], b = r.fit === "contain" ? Math.min(n / h, s / w) : Math.max(n / h, s / w);
      d = h * b, l = w * b, f = (n - d) / 2, u = (s - l) / 2;
    }
    e.save();
    const c = a % 180 === 0 ? 1 : d / l;
    e.translate(n / 2, s / 2), e.rotate(a * Math.PI / 180), e.scale(1 / c, c), e.translate(-n / 2, -s / 2), e.drawImage(this.toCanvasImageSource(), m, g, p, y, f, u, d, l), e.restore();
  }
  /** @internal */
  _rotateSourceRegion(e, r, n, s, a) {
    return a === 90 ? [e, r, n, s] = [
      r,
      this.squarePixelHeight - e - n,
      s,
      n
    ] : a === 180 ? [e, r] = [
      this.squarePixelWidth - e - n,
      this.squarePixelHeight - r - s
    ] : a === 270 && ([e, r, n, s] = [
      this.squarePixelWidth - r - s,
      e,
      s,
      n
    ]), { sx: e, sy: r, sWidth: n, sHeight: s };
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
    if (I(this._data !== null), this._data instanceof Uint8Array) {
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
class z {
  /** Creates a new VideoSampleColorSpace. */
  constructor(e) {
    if (e !== void 0) {
      if (!e || typeof e != "object")
        throw new TypeError("init.colorSpace, when provided, must be an object.");
      const r = Object.keys(ie);
      if (e.primaries != null && !r.includes(e.primaries))
        throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${r.join(", ")}.`);
      const n = Object.keys(oe);
      if (e.transfer != null && !n.includes(e.transfer))
        throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${n.join(", ")}.`);
      const s = Object.keys(de);
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
const C = (t) => typeof VideoFrame < "u" && t instanceof VideoFrame, De = (t, e, r) => {
  t.left = Math.min(t.left, e), t.top = Math.min(t.top, r), t.width = Math.min(t.width, e - t.left), t.height = Math.min(t.height, r - t.top), I(t.width >= 0), I(t.height >= 0);
}, Ne = (t, e) => {
  if (!t || typeof t != "object")
    throw new TypeError(e + "crop, when provided, must be an object.");
  if (!Number.isInteger(t.left) || t.left < 0)
    throw new TypeError(e + "crop.left must be a non-negative integer.");
  if (!Number.isInteger(t.top) || t.top < 0)
    throw new TypeError(e + "crop.top must be a non-negative integer.");
  if (!Number.isInteger(t.width) || t.width < 0)
    throw new TypeError(e + "crop.width must be a non-negative integer.");
  if (!Number.isInteger(t.height) || t.height < 0)
    throw new TypeError(e + "crop.height must be a non-negative integer.");
}, ae = (t) => {
  if (!t || typeof t != "object")
    throw new TypeError("options must be an object.");
  if (t.colorSpace !== void 0 && !["display-p3", "srgb"].includes(t.colorSpace))
    throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
  if (t.format !== void 0 && typeof t.format != "string")
    throw new TypeError("options.format, when provided, must be a string.");
  if (t.layout !== void 0) {
    if (!Array.isArray(t.layout))
      throw new TypeError("options.layout, when provided, must be an array.");
    for (const e of t.layout) {
      if (!e || typeof e != "object")
        throw new TypeError("Each entry in options.layout must be an object.");
      if (!Number.isInteger(e.offset) || e.offset < 0)
        throw new TypeError("plane.offset must be a non-negative integer.");
      if (!Number.isInteger(e.stride) || e.stride < 0)
        throw new TypeError("plane.stride must be a non-negative integer.");
    }
  }
  if (t.rect !== void 0) {
    if (!t.rect || typeof t.rect != "object")
      throw new TypeError("options.rect, when provided, must be an object.");
    if (t.rect.x !== void 0 && (!Number.isInteger(t.rect.x) || t.rect.x < 0))
      throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
    if (t.rect.y !== void 0 && (!Number.isInteger(t.rect.y) || t.rect.y < 0))
      throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
    if (t.rect.width !== void 0 && (!Number.isInteger(t.rect.width) || t.rect.width < 0))
      throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
    if (t.rect.height !== void 0 && (!Number.isInteger(t.rect.height) || t.rect.height < 0))
      throw new TypeError("options.rect.height, when provided, must be a non-negative integer.");
  }
}, Me = (t, e, r) => {
  const n = We(t), s = [];
  let a = 0;
  for (const i of n) {
    const o = Math.ceil(e / i.widthDivisor), f = Math.ceil(r / i.heightDivisor), u = o * i.sampleBytes, d = u * f;
    s.push({
      offset: a,
      stride: u
    }), a += d;
  }
  return s;
}, We = (t) => {
  const e = (r, n, s, a, i) => {
    const o = [
      { sampleBytes: r, widthDivisor: 1, heightDivisor: 1 },
      { sampleBytes: n, widthDivisor: s, heightDivisor: a },
      { sampleBytes: n, widthDivisor: s, heightDivisor: a }
    ];
    return i && o.push({ sampleBytes: r, widthDivisor: 1, heightDivisor: 1 }), o;
  };
  switch (t) {
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
      ye(t), I(!1);
  }
}, G = /* @__PURE__ */ new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
class D {
  /** The presentation timestamp of the sample in microseconds. */
  get microsecondTimestamp() {
    return Math.trunc(S * this.timestamp);
  }
  /** The duration of the sample in microseconds. */
  get microsecondDuration() {
    return Math.trunc(S * this.duration);
  }
  /**
   * Creates a new {@link AudioSample}, either from an existing
   * [`AudioData`](https://developer.mozilla.org/en-US/docs/Web/API/AudioData) or from raw bytes specified in
   * {@link AudioSampleInit}.
   */
  constructor(e) {
    if (this._closed = !1, x(e)) {
      if (e.format === null)
        throw new TypeError("AudioData with null format is not supported.");
      this._data = e, this.format = e.format, this.sampleRate = e.sampleRate, this.numberOfFrames = e.numberOfFrames, this.numberOfChannels = e.numberOfChannels, this.timestamp = e.timestamp / 1e6, this.duration = e.numberOfFrames / e.sampleRate;
    } else {
      if (!e || typeof e != "object")
        throw new TypeError("Invalid AudioDataInit: must be an object.");
      if (!G.has(e.format))
        throw new TypeError("Invalid AudioDataInit: invalid format.");
      if (!Number.isFinite(e.sampleRate) || e.sampleRate <= 0)
        throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
      if (!Number.isInteger(e.numberOfChannels) || e.numberOfChannels === 0)
        throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
      if (!Number.isFinite(e?.timestamp))
        throw new TypeError("init.timestamp must be a number.");
      const r = e.data.byteLength / (R(e.format) * e.numberOfChannels);
      if (!Number.isInteger(r))
        throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
      this.format = e.format, this.sampleRate = e.sampleRate, this.numberOfFrames = r, this.numberOfChannels = e.numberOfChannels, this.timestamp = e.timestamp, this.duration = r / e.sampleRate;
      let n;
      if (e.data instanceof ArrayBuffer)
        n = new Uint8Array(e.data);
      else if (ArrayBuffer.isView(e.data))
        n = new Uint8Array(e.data.buffer, e.data.byteOffset, e.data.byteLength);
      else
        throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
      const s = this.numberOfFrames * this.numberOfChannels * R(this.format);
      if (n.byteLength < s)
        throw new TypeError("Invalid AudioDataInit: insufficient data size.");
      this._data = n;
    }
    N?.register(this, { type: "audio", data: this._data }, this);
  }
  /** Returns the number of bytes required to hold the audio sample's data as specified by the given options. */
  allocationSize(e) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (!Number.isInteger(e.planeIndex) || e.planeIndex < 0)
      throw new TypeError("planeIndex must be a non-negative integer.");
    if (e.format !== void 0 && !G.has(e.format))
      throw new TypeError("Invalid format.");
    if (e.frameOffset !== void 0 && (!Number.isInteger(e.frameOffset) || e.frameOffset < 0))
      throw new TypeError("frameOffset must be a non-negative integer.");
    if (e.frameCount !== void 0 && (!Number.isInteger(e.frameCount) || e.frameCount < 0))
      throw new TypeError("frameCount must be a non-negative integer.");
    if (this._closed)
      throw new Error("AudioSample is closed.");
    const r = e.format ?? this.format, n = e.frameOffset ?? 0;
    if (n >= this.numberOfFrames)
      throw new RangeError("frameOffset out of range");
    const s = e.frameCount !== void 0 ? e.frameCount : this.numberOfFrames - n;
    if (s > this.numberOfFrames - n)
      throw new RangeError("frameCount out of range");
    const a = R(r), i = O(r);
    if (i && e.planeIndex >= this.numberOfChannels)
      throw new RangeError("planeIndex out of range");
    if (!i && e.planeIndex !== 0)
      throw new RangeError("planeIndex out of range");
    return (i ? s : s * this.numberOfChannels) * a;
  }
  /** Copies the audio sample's data to an ArrayBuffer or ArrayBufferView as specified by the given options. */
  copyTo(e, r) {
    if (!fe(e))
      throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
    if (!r || typeof r != "object")
      throw new TypeError("options must be an object.");
    if (!Number.isInteger(r.planeIndex) || r.planeIndex < 0)
      throw new TypeError("planeIndex must be a non-negative integer.");
    if (r.format !== void 0 && !G.has(r.format))
      throw new TypeError("Invalid format.");
    if (r.frameOffset !== void 0 && (!Number.isInteger(r.frameOffset) || r.frameOffset < 0))
      throw new TypeError("frameOffset must be a non-negative integer.");
    if (r.frameCount !== void 0 && (!Number.isInteger(r.frameCount) || r.frameCount < 0))
      throw new TypeError("frameCount must be a non-negative integer.");
    if (this._closed)
      throw new Error("AudioSample is closed.");
    const { planeIndex: n, format: s, frameCount: a, frameOffset: i } = r, o = this.format, f = s ?? this.format;
    if (!f)
      throw new Error("Destination format not determined");
    const u = this.numberOfFrames, d = this.numberOfChannels, l = i ?? 0;
    if (l >= u)
      throw new RangeError("frameOffset out of range");
    const m = a !== void 0 ? a : u - l;
    if (m > u - l)
      throw new RangeError("frameCount out of range");
    const g = R(f), p = O(f);
    if (p && n >= d)
      throw new RangeError("planeIndex out of range");
    if (!p && n !== 0)
      throw new RangeError("planeIndex out of range");
    const c = (p ? m : m * d) * g;
    if (e.byteLength < c)
      throw new RangeError("Destination buffer is too small");
    const h = F(e), w = me(f);
    if (x(this._data))
      ve() && d > 2 && f !== o ? Ve(this._data, h, o, f, d, n, l, m) : this._data.copyTo(e, {
        planeIndex: n,
        frameOffset: l,
        frameCount: m,
        format: f
      });
    else {
      const b = this._data, v = F(b), E = he(o), M = R(o), K = O(o);
      for (let T = 0; T < m; T++)
        if (p) {
          const A = T * g;
          let W;
          K ? W = (n * u + (T + l)) * M : W = ((T + l) * d + n) * M;
          const H = E(v, W);
          w(h, A, H);
        } else
          for (let A = 0; A < d; A++) {
            const H = (T * d + A) * g;
            let B;
            K ? B = (A * u + (T + l)) * M : B = ((T + l) * d + A) * M;
            const pe = E(v, B);
            w(h, H, pe);
          }
    }
  }
  /** Clones this audio sample. */
  clone() {
    if (this._closed)
      throw new Error("AudioSample is closed.");
    if (x(this._data)) {
      const e = new D(this._data.clone());
      return e.setTimestamp(this.timestamp), e;
    } else
      return new D({
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
    this._closed || (N?.unregister(this), x(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0);
  }
  /**
   * Converts this audio sample to an AudioData for use with the WebCodecs API. The AudioData returned by this
   * method *must* be closed separately from this audio sample.
   */
  toAudioData() {
    if (this._closed)
      throw new Error("AudioSample is closed.");
    if (x(this._data)) {
      if (this._data.timestamp === this.microsecondTimestamp)
        return this._data.clone();
      if (O(this.format)) {
        const e = this.allocationSize({ planeIndex: 0, format: this.format }), r = new ArrayBuffer(e * this.numberOfChannels);
        for (let n = 0; n < this.numberOfChannels; n++)
          this.copyTo(new Uint8Array(r, n * e, e), { planeIndex: n, format: this.format });
        return new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: r
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
    }), r = new Float32Array(this.allocationSize({ planeIndex: 0, format: "f32-planar" }) / 4);
    for (let n = 0; n < this.numberOfChannels; n++)
      this.copyTo(r, { planeIndex: n, format: "f32-planar" }), e.copyToChannel(r, n);
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
  static *_fromAudioBuffer(e, r) {
    if (!(e instanceof AudioBuffer))
      throw new TypeError("audioBuffer must be an AudioBuffer.");
    const n = 48e3 * 5, s = e.numberOfChannels, a = e.sampleRate, i = e.length, o = Math.floor(n / s);
    let f = 0, u = i;
    for (; u > 0; ) {
      const d = Math.min(o, u), l = new Float32Array(s * d);
      for (let m = 0; m < s; m++)
        e.copyFromChannel(l.subarray(m * d, (m + 1) * d), m, f);
      yield new D({
        format: "f32-planar",
        sampleRate: a,
        numberOfFrames: d,
        numberOfChannels: s,
        timestamp: r + f / a,
        data: l
      }), f += d, u -= d;
    }
  }
  /**
   * Creates AudioSamples from an AudioBuffer, starting at the given timestamp in seconds. Typically creates exactly
   * one sample, but may create multiple if the AudioBuffer is exceedingly large.
   */
  static fromAudioBuffer(e, r) {
    if (!(e instanceof AudioBuffer))
      throw new TypeError("audioBuffer must be an AudioBuffer.");
    const n = 48e3 * 5, s = e.numberOfChannels, a = e.sampleRate, i = e.length, o = Math.floor(n / s);
    let f = 0, u = i;
    const d = [];
    for (; u > 0; ) {
      const l = Math.min(o, u), m = new Float32Array(s * l);
      for (let p = 0; p < s; p++)
        e.copyFromChannel(m.subarray(p * l, (p + 1) * l), p, f);
      const g = new D({
        format: "f32-planar",
        sampleRate: a,
        numberOfFrames: l,
        numberOfChannels: s,
        timestamp: r + f / a,
        data: m
      });
      d.push(g), f += l, u -= l;
    }
    return d;
  }
}
const R = (t) => {
  switch (t) {
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
}, O = (t) => {
  switch (t) {
    case "u8-planar":
    case "s16-planar":
    case "s32-planar":
    case "f32-planar":
      return !0;
    default:
      return !1;
  }
}, he = (t) => {
  switch (t) {
    case "u8":
    case "u8-planar":
      return (e, r) => (e.getUint8(r) - 128) / 128;
    case "s16":
    case "s16-planar":
      return (e, r) => e.getInt16(r, !0) / 32768;
    case "s32":
    case "s32-planar":
      return (e, r) => e.getInt32(r, !0) / 2147483648;
    case "f32":
    case "f32-planar":
      return (e, r) => e.getFloat32(r, !0);
  }
}, me = (t) => {
  switch (t) {
    case "u8":
    case "u8-planar":
      return (e, r, n) => e.setUint8(r, V((n + 1) * 127.5, 0, 255));
    case "s16":
    case "s16-planar":
      return (e, r, n) => e.setInt16(r, V(Math.round(n * 32767), -32768, 32767), !0);
    case "s32":
    case "s32-planar":
      return (e, r, n) => e.setInt32(r, V(Math.round(n * 2147483647), -2147483648, 2147483647), !0);
    case "f32":
    case "f32-planar":
      return (e, r, n) => e.setFloat32(r, n, !0);
  }
}, x = (t) => typeof AudioData < "u" && t instanceof AudioData, Ve = (t, e, r, n, s, a, i, o) => {
  const f = he(r), u = me(n), d = R(r), l = R(n), m = O(r);
  if (O(n))
    if (m) {
      const p = new ArrayBuffer(o * d), y = F(p);
      t.copyTo(p, {
        planeIndex: a,
        frameOffset: i,
        frameCount: o,
        format: r
      });
      for (let c = 0; c < o; c++) {
        const h = c * d, w = c * l, b = f(y, h);
        u(e, w, b);
      }
    } else {
      const p = new ArrayBuffer(o * s * d), y = F(p);
      t.copyTo(p, {
        planeIndex: 0,
        frameOffset: i,
        frameCount: o,
        format: r
      });
      for (let c = 0; c < o; c++) {
        const h = (c * s + a) * d, w = c * l, b = f(y, h);
        u(e, w, b);
      }
    }
  else if (m) {
    const p = o * d, y = new ArrayBuffer(p), c = F(y);
    for (let h = 0; h < s; h++) {
      t.copyTo(y, {
        planeIndex: h,
        frameOffset: i,
        frameCount: o,
        format: r
      });
      for (let w = 0; w < o; w++) {
        const b = w * d, v = (w * s + h) * l, E = f(c, b);
        u(e, v, E);
      }
    }
  } else {
    const p = new ArrayBuffer(o * s * d), y = F(p);
    t.copyTo(p, {
      planeIndex: 0,
      frameOffset: i,
      frameCount: o,
      format: r
    });
    for (let c = 0; c < o; c++)
      for (let h = 0; h < s; h++) {
        const w = c * s + h, b = w * d, v = w * l, E = f(y, b);
        u(e, v, E);
      }
  }
};
export {
  rt as $,
  Ot as A,
  it as B,
  ie as C,
  D,
  bt as E,
  ee as F,
  Y as G,
  ve as H,
  et as I,
  Ce as J,
  ge as K,
  $e as L,
  de as M,
  Xe as N,
  Ge as O,
  pt as P,
  He as Q,
  ct as R,
  S,
  oe as T,
  lt as U,
  P as V,
  ut as W,
  nt as X,
  Ye as Y,
  Je as Z,
  mt as _,
  I as a,
  ht as a0,
  gt as a1,
  wt as a2,
  Tt as a3,
  Ae as a4,
  V as a5,
  ze as a6,
  vt as a7,
  je as a8,
  Ke as a9,
  yt as aa,
  Ct as ab,
  St as ac,
  Le as ad,
  dt as ae,
  te as af,
  re as ag,
  _t as ah,
  xt as ai,
  ot as aj,
  z as ak,
  ce as al,
  Se as am,
  _e as an,
  Oe as ao,
  xe as ap,
  Pt as aq,
  Dt as ar,
  Ze as b,
  ye as c,
  It as d,
  we as e,
  ke as f,
  Et as g,
  Ft as h,
  fe as i,
  Ue as j,
  At as k,
  Be as l,
  be as m,
  qe as n,
  Rt as o,
  j as p,
  ft as q,
  Qe as r,
  Ie as s,
  F as t,
  tt as u,
  at as v,
  st as w,
  Ne as x,
  De as y,
  Te as z
};
