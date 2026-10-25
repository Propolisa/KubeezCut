import { i as tn, a as p, l as Y, C as oi, T as ci, M as li, b as ms, r as ps, t as H, c as fe, d as nr, g as xa, e as v, f as X, k as Ut, h as Pa, j as qe, s as Br, m as Rr, n as _e, o as Ca, p as ee, S as gs, q as Si, u as J, v as _a, w as Ia, x as rn, y as sn, z as ei, A as Nt, B as Ea, D as ze, E as Fi, F as nn, G as an, V as Pe, H as bi, I as ws, J as Mr, K as Q, L as xi, N as Pi, O as Ci, P as ti, U as he, Q as Bi, R as ar, W as ii, X as zr, Y as di, Z as Ot, _ as va, $ as on, a0 as Vi, a1 as ks, a2 as bs, a3 as or, a4 as Aa, a5 as ke, a6 as Ct, a7 as _t, a8 as zt, a9 as cn, aa as Fa, ab as Ba, ac as Ra, ad as Ma, ae as za, af as cr, ag as lr, ah as Da, ai as Ua, aj as Na } from "./sample-Ct6b2DQW.js";
import { ao as fu, ap as mu, am as pu, an as gu, al as wu, ak as ku, aq as bu, ar as yu } from "./sample-Ct6b2DQW.js";
import { n as _i } from "./__vite-browser-external-DJvW0Gyj.js";
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Bt {
  /** Creates a new {@link RichImageData}. */
  constructor(e, t) {
    if (this.data = e, this.mimeType = t, !(e instanceof Uint8Array))
      throw new TypeError("data must be a Uint8Array.");
    if (typeof t != "string")
      throw new TypeError("mimeType must be a string.");
  }
}
class Dr {
  /** Creates a new {@link AttachedFile}. */
  constructor(e, t, r, s) {
    if (this.data = e, this.mimeType = t, this.name = r, this.description = s, !(e instanceof Uint8Array))
      throw new TypeError("data must be a Uint8Array.");
    if (t !== void 0 && typeof t != "string")
      throw new TypeError("mimeType, when provided, must be a string.");
    if (r !== void 0 && typeof r != "string")
      throw new TypeError("name, when provided, must be a string.");
    if (s !== void 0 && typeof s != "string")
      throw new TypeError("description, when provided, must be a string.");
  }
}
const dr = (i) => {
  if (!i || typeof i != "object")
    throw new TypeError("tags must be an object.");
  if (i.title !== void 0 && typeof i.title != "string")
    throw new TypeError("tags.title, when provided, must be a string.");
  if (i.description !== void 0 && typeof i.description != "string")
    throw new TypeError("tags.description, when provided, must be a string.");
  if (i.artist !== void 0 && typeof i.artist != "string")
    throw new TypeError("tags.artist, when provided, must be a string.");
  if (i.album !== void 0 && typeof i.album != "string")
    throw new TypeError("tags.album, when provided, must be a string.");
  if (i.albumArtist !== void 0 && typeof i.albumArtist != "string")
    throw new TypeError("tags.albumArtist, when provided, must be a string.");
  if (i.trackNumber !== void 0 && (!Number.isInteger(i.trackNumber) || i.trackNumber <= 0))
    throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
  if (i.tracksTotal !== void 0 && (!Number.isInteger(i.tracksTotal) || i.tracksTotal <= 0))
    throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
  if (i.discNumber !== void 0 && (!Number.isInteger(i.discNumber) || i.discNumber <= 0))
    throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
  if (i.discsTotal !== void 0 && (!Number.isInteger(i.discsTotal) || i.discsTotal <= 0))
    throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
  if (i.genre !== void 0 && typeof i.genre != "string")
    throw new TypeError("tags.genre, when provided, must be a string.");
  if (i.date !== void 0 && (!(i.date instanceof Date) || Number.isNaN(i.date.getTime())))
    throw new TypeError("tags.date, when provided, must be a valid Date.");
  if (i.lyrics !== void 0 && typeof i.lyrics != "string")
    throw new TypeError("tags.lyrics, when provided, must be a string.");
  if (i.images !== void 0) {
    if (!Array.isArray(i.images))
      throw new TypeError("tags.images, when provided, must be an array.");
    for (const e of i.images) {
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
  if (i.comment !== void 0 && typeof i.comment != "string")
    throw new TypeError("tags.comment, when provided, must be a string.");
  if (i.raw !== void 0) {
    if (!i.raw || typeof i.raw != "object")
      throw new TypeError("tags.raw, when provided, must be an object.");
    for (const e of Object.values(i.raw))
      if (e !== null && typeof e != "string" && !(e instanceof Uint8Array) && !(e instanceof Bt) && !(e instanceof Dr))
        throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, or null.");
  }
}, ri = (i) => i.title === void 0 && i.description === void 0 && i.artist === void 0 && i.album === void 0 && i.albumArtist === void 0 && i.trackNumber === void 0 && i.tracksTotal === void 0 && i.discNumber === void 0 && i.discsTotal === void 0 && i.genre === void 0 && i.date === void 0 && i.lyrics === void 0 && (!i.images || i.images.length === 0) && i.comment === void 0 && (i.raw === void 0 || Object.keys(i.raw).length === 0), ct = {
  default: !0,
  forced: !1,
  original: !1,
  commentary: !1,
  hearingImpaired: !1,
  visuallyImpaired: !1
}, Oa = (i) => {
  if (!i || typeof i != "object")
    throw new TypeError("disposition must be an object.");
  if (i.default !== void 0 && typeof i.default != "boolean")
    throw new TypeError("disposition.default must be a boolean.");
  if (i.forced !== void 0 && typeof i.forced != "boolean")
    throw new TypeError("disposition.forced must be a boolean.");
  if (i.original !== void 0 && typeof i.original != "boolean")
    throw new TypeError("disposition.original must be a boolean.");
  if (i.commentary !== void 0 && typeof i.commentary != "boolean")
    throw new TypeError("disposition.commentary must be a boolean.");
  if (i.hearingImpaired !== void 0 && typeof i.hearingImpaired != "boolean")
    throw new TypeError("disposition.hearingImpaired must be a boolean.");
  if (i.visuallyImpaired !== void 0 && typeof i.visuallyImpaired != "boolean")
    throw new TypeError("disposition.visuallyImpaired must be a boolean.");
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class O {
  constructor(e) {
    this.bytes = e, this.pos = 0;
  }
  seekToByte(e) {
    this.pos = 8 * e;
  }
  readBit() {
    const e = Math.floor(this.pos / 8), t = this.bytes[e] ?? 0, r = 7 - (this.pos & 7), s = (t & 1 << r) >> r;
    return this.pos++, s;
  }
  readBits(e) {
    if (e === 1)
      return this.readBit();
    let t = 0;
    for (let r = 0; r < e; r++)
      t <<= 1, t |= this.readBit();
    return t;
  }
  writeBits(e, t) {
    const r = this.pos + e;
    for (let s = this.pos; s < r; s++) {
      const n = Math.floor(s / 8);
      let a = this.bytes[n];
      const o = 7 - (s & 7);
      a &= ~(1 << o), a |= (t & 1 << r - s - 1) >> r - s - 1 << o, this.bytes[n] = a;
    }
    this.pos = r;
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
    const e = new O(this.bytes);
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
const ot = [
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
], Vt = [-1, 1, 2, 3, 4, 5, 6, 8], ui = (i) => {
  if (!i || i.byteLength < 2)
    throw new TypeError("AAC description must be at least 2 bytes long.");
  const e = new O(i);
  let t = e.readBits(5);
  t === 31 && (t = 32 + e.readBits(6));
  const r = e.readBits(4);
  let s = null;
  r === 15 ? s = e.readBits(24) : r < ot.length && (s = ot[r]);
  const n = e.readBits(4);
  let a = null;
  return n >= 1 && n <= 7 && (a = Vt[n]), {
    objectType: t,
    frequencyIndex: r,
    sampleRate: s,
    channelConfiguration: n,
    numberOfChannels: a
  };
}, Ur = (i) => {
  let e = ot.indexOf(i.sampleRate), t = null;
  e === -1 && (e = 15, t = i.sampleRate);
  const r = Vt.indexOf(i.numberOfChannels);
  if (r === -1)
    throw new TypeError(`Unsupported number of channels: ${i.numberOfChannels}`);
  let s = 13;
  i.objectType >= 32 && (s += 6), e === 15 && (s += 24);
  const n = Math.ceil(s / 8), a = new Uint8Array(n), o = new O(a);
  return i.objectType < 32 ? o.writeBits(5, i.objectType) : (o.writeBits(5, 31), o.writeBits(6, i.objectType - 32)), o.writeBits(4, e), e === 15 && o.writeBits(24, t), o.writeBits(4, r), a;
}, ln = (i) => {
  const e = new Uint8Array(7), t = new O(e), { objectType: r, frequencyIndex: s, channelConfiguration: n } = i, a = r - 1;
  return t.writeBits(12, 4095), t.writeBits(1, 0), t.writeBits(2, 0), t.writeBits(1, 1), t.writeBits(2, a), t.writeBits(4, s), t.writeBits(1, 0), t.writeBits(3, n), t.writeBits(1, 0), t.writeBits(1, 0), t.writeBits(1, 0), t.writeBits(1, 0), t.skipBits(13), t.writeBits(11, 2047), t.writeBits(2, 0), { header: e, bitstream: t };
}, dn = (i, e) => {
  i.pos = 30, i.writeBits(13, e);
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const ue = [
  "avc",
  "hevc",
  "vp9",
  "av1",
  "vp8"
], ne = [
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
], Rt = [
  "aac",
  "opus",
  "mp3",
  "vorbis",
  "flac",
  "ac3",
  "eac3"
], me = [
  ...Rt,
  ...ne
], $e = [
  "webvtt"
], Ii = [
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
], ys = [
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
], st = [
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
], Ts = [
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
], Ss = ".01.01.01.01.00", xs = ".0.110.01.01.01.0", Va = (i, e, t, r) => {
  if (i === "avc") {
    const n = Math.ceil(e / 16) * Math.ceil(t / 16), a = Ii.find((u) => n <= u.maxMacroblocks && r <= u.maxBitrate) ?? Y(Ii), o = a ? a.level : 0, c = "64".padStart(2, "0"), l = "00", d = o.toString(16).padStart(2, "0");
    return `avc1.${c}${l}${d}`;
  } else if (i === "hevc") {
    const s = "", a = "6", o = e * t, c = ys.find((d) => o <= d.maxPictureSize && r <= d.maxBitrate) ?? Y(ys);
    return `hev1.${s}1.${a}.${c.tier}${c.level}.B0`;
  } else {
    if (i === "vp8")
      return "vp8";
    if (i === "vp9") {
      const s = "00", n = e * t, a = st.find((c) => n <= c.maxPictureSize && r <= c.maxBitrate) ?? Y(st);
      return `vp09.${s}.${a.level.toString().padStart(2, "0")}.08`;
    } else if (i === "av1") {
      const n = e * t, a = Ts.find((l) => n <= l.maxPictureSize && r <= l.maxBitrate) ?? Y(Ts);
      return `av01.0.${a.level.toString().padStart(2, "0")}${a.tier}.08`;
    }
  }
  throw new TypeError(`Unhandled codec '${i}'.`);
}, La = (i) => {
  const e = i.split("."), t = Number(e[1]), r = Number(e[2]), s = Number(e[3]), n = e[4] ? Number(e[4]) : 1;
  return [
    1,
    1,
    t,
    2,
    1,
    r,
    3,
    1,
    s,
    4,
    1,
    n
  ];
}, un = (i) => {
  const e = i.split("."), s = (1 << 7) + 1, n = Number(e[1]), a = e[2], o = Number(a.slice(0, -1)), c = (n << 5) + o, l = a.slice(-1) === "H" ? 1 : 0, u = Number(e[3]) === 8 ? 0 : 1, h = 0, f = e[4] ? Number(e[4]) : 0, g = e[5] ? Number(e[5][0]) : 1, m = e[5] ? Number(e[5][1]) : 1, w = e[5] ? Number(e[5][2]) : 0, y = (l << 7) + (u << 6) + (h << 5) + (f << 4) + (g << 3) + (m << 2) + w;
  return [s, c, y, 0];
}, Nr = (i) => {
  const { codec: e, codecDescription: t, colorSpace: r, avcCodecInfo: s, hevcCodecInfo: n, vp9CodecInfo: a, av1CodecInfo: o } = i;
  if (e === "avc") {
    if (p(i.avcType !== null), s) {
      const c = new Uint8Array([
        s.avcProfileIndication,
        s.profileCompatibility,
        s.avcLevelIndication
      ]);
      return `avc${i.avcType}.${ms(c)}`;
    }
    if (!t || t.byteLength < 4)
      throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
    return `avc${i.avcType}.${ms(t.subarray(1, 4))}`;
  } else if (e === "hevc") {
    let c, l, d, u, h, f;
    if (n)
      c = n.generalProfileSpace, l = n.generalProfileIdc, d = ps(n.generalProfileCompatibilityFlags), u = n.generalTierFlag, h = n.generalLevelIdc, f = [...n.generalConstraintIndicatorFlags];
    else {
      if (!t || t.byteLength < 23)
        throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
      const m = H(t), w = m.getUint8(1);
      c = w >> 6 & 3, l = w & 31, d = ps(m.getUint32(2)), u = w >> 5 & 1, h = m.getUint8(12), f = [];
      for (let y = 0; y < 6; y++)
        f.push(m.getUint8(6 + y));
    }
    let g = "hev1.";
    for (g += ["", "A", "B", "C"][c] + l, g += ".", g += d.toString(16).toUpperCase(), g += ".", g += u === 0 ? "L" : "H", g += h; f.length > 0 && f[f.length - 1] === 0; )
      f.pop();
    return f.length > 0 && (g += ".", g += f.map((m) => m.toString(16).toUpperCase()).join(".")), g;
  } else {
    if (e === "vp8")
      return "vp8";
    if (e === "vp9") {
      if (!a) {
        const y = i.width * i.height;
        let k = Y(st).level;
        for (const T of st)
          if (y <= T.maxPictureSize) {
            k = T.level;
            break;
          }
        return `vp09.00.${k.toString().padStart(2, "0")}.08`;
      }
      const c = a.profile.toString().padStart(2, "0"), l = a.level.toString().padStart(2, "0"), d = a.bitDepth.toString().padStart(2, "0"), u = a.chromaSubsampling.toString().padStart(2, "0"), h = a.colourPrimaries.toString().padStart(2, "0"), f = a.transferCharacteristics.toString().padStart(2, "0"), g = a.matrixCoefficients.toString().padStart(2, "0"), m = a.videoFullRangeFlag.toString().padStart(2, "0");
      let w = `vp09.${c}.${l}.${d}.${u}`;
      return w += `.${h}.${f}.${g}.${m}`, w.endsWith(Ss) && (w = w.slice(0, -Ss.length)), w;
    } else if (e === "av1") {
      if (!o) {
        const T = i.width * i.height;
        let S = Y(st).level;
        for (const P of st)
          if (T <= P.maxPictureSize) {
            S = P.level;
            break;
          }
        return `av01.0.${S.toString().padStart(2, "0")}M.08`;
      }
      const c = o.profile, l = o.level.toString().padStart(2, "0"), d = o.tier ? "H" : "M", u = o.bitDepth.toString().padStart(2, "0"), h = o.monochrome ? "1" : "0", f = 100 * o.chromaSubsamplingX + 10 * o.chromaSubsamplingY + 1 * (o.chromaSubsamplingX && o.chromaSubsamplingY ? o.chromaSamplePosition : 0), g = r?.primaries ? oi[r.primaries] : 1, m = r?.transfer ? ci[r.transfer] : 1, w = r?.matrix ? li[r.matrix] : 1, y = r?.fullRange ? 1 : 0;
      let k = `av01.${c}.${l}${d}.${u}`;
      return k += `.${h}.${f.toString().padStart(3, "0")}`, k += `.${g.toString().padStart(2, "0")}`, k += `.${m.toString().padStart(2, "0")}`, k += `.${w.toString().padStart(2, "0")}`, k += `.${y}`, k.endsWith(xs) && (k = k.slice(0, -xs.length)), k;
    }
  }
  throw new TypeError(`Unhandled codec '${e}'.`);
}, Wa = (i, e, t) => {
  if (i === "aac")
    return e >= 2 && t <= 24e3 ? "mp4a.40.29" : t <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
  if (i === "mp3")
    return "mp3";
  if (i === "opus")
    return "opus";
  if (i === "vorbis")
    return "vorbis";
  if (i === "flac")
    return "flac";
  if (i === "ac3")
    return "ac-3";
  if (i === "eac3")
    return "ec-3";
  if (ne.includes(i))
    return i;
  throw new TypeError(`Unhandled codec '${i}'.`);
}, Or = (i) => {
  const { codec: e, codecDescription: t, aacCodecInfo: r } = i;
  if (e === "aac") {
    if (!r)
      throw new TypeError("AAC codec info must be provided.");
    if (r.isMpeg2)
      return "mp4a.67";
    {
      let s;
      return r.objectType !== null ? s = r.objectType : s = ui(t).objectType, `mp4a.40.${s}`;
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
    if (e && ne.includes(e))
      return e;
  }
  throw new TypeError(`Unhandled codec '${e}'.`);
}, Lt = 48e3, hn = /^pcm-([usf])(\d+)+(be)?$/, Ue = (i) => {
  if (p(ne.includes(i)), i === "ulaw")
    return { dataType: "ulaw", sampleSize: 1, littleEndian: !0, silentValue: 255 };
  if (i === "alaw")
    return { dataType: "alaw", sampleSize: 1, littleEndian: !0, silentValue: 213 };
  const e = hn.exec(i);
  p(e);
  let t;
  e[1] === "u" ? t = "unsigned" : e[1] === "s" ? t = "signed" : t = "float";
  const r = Number(e[2]) / 8, s = e[3] !== "be", n = i === "pcm-u8" ? 2 ** 7 : 0;
  return { dataType: t, sampleSize: r, littleEndian: s, silentValue: n };
}, fn = (i) => i.startsWith("avc1") || i.startsWith("avc3") ? "avc" : i.startsWith("hev1") || i.startsWith("hvc1") ? "hevc" : i === "vp8" ? "vp8" : i.startsWith("vp09") ? "vp9" : i.startsWith("av01") ? "av1" : i.startsWith("mp4a.40") || i === "mp4a.67" ? "aac" : i === "mp3" || i === "mp4a.69" || i === "mp4a.6B" || i === "mp4a.6b" ? "mp3" : i === "opus" ? "opus" : i === "vorbis" ? "vorbis" : i === "flac" ? "flac" : i === "ac-3" || i === "ac3" ? "ac3" : i === "ec-3" || i === "eac3" ? "eac3" : i === "ulaw" ? "ulaw" : i === "alaw" ? "alaw" : hn.test(i) ? i : i === "webvtt" ? "webvtt" : null, Ha = (i) => i === "avc" ? {
  avc: {
    format: "avc"
    // Ensure the format is not Annex B
  }
} : i === "hevc" ? {
  hevc: {
    format: "hevc"
    // Ensure the format is not Annex B
  }
} : {}, qa = (i) => i === "aac" ? {
  aac: {
    format: "aac"
    // Ensure the format is not ADTS
  }
} : i === "opus" ? {
  opus: {
    format: "opus"
  }
} : {}, ja = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01"], Qa = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/, $a = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/, Ka = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/, Ga = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/, Vr = (i) => {
  if (!i)
    throw new TypeError("Video chunk metadata must be provided.");
  if (typeof i != "object")
    throw new TypeError("Video chunk metadata must be an object.");
  if (!i.decoderConfig)
    throw new TypeError("Video chunk metadata must include a decoder configuration.");
  if (typeof i.decoderConfig != "object")
    throw new TypeError("Video chunk metadata decoder configuration must be an object.");
  if (typeof i.decoderConfig.codec != "string")
    throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
  if (!ja.some((e) => i.decoderConfig.codec.startsWith(e)))
    throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
  if (!Number.isInteger(i.decoderConfig.codedWidth) || i.decoderConfig.codedWidth <= 0)
    throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
  if (!Number.isInteger(i.decoderConfig.codedHeight) || i.decoderConfig.codedHeight <= 0)
    throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
  if (i.decoderConfig.description !== void 0 && !tn(i.decoderConfig.description))
    throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
  if (i.decoderConfig.colorSpace !== void 0) {
    const { colorSpace: e } = i.decoderConfig;
    if (typeof e != "object")
      throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
    const t = Object.keys(oi);
    if (e.primaries != null && !t.includes(e.primaries))
      throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${t.join(", ")}.`);
    const r = Object.keys(ci);
    if (e.transfer != null && !r.includes(e.transfer))
      throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${r.join(", ")}.`);
    const s = Object.keys(li);
    if (e.matrix != null && !s.includes(e.matrix))
      throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${s.join(", ")}.`);
    if (e.fullRange != null && typeof e.fullRange != "boolean")
      throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.");
  }
  if (i.decoderConfig.codec.startsWith("avc1") || i.decoderConfig.codec.startsWith("avc3")) {
    if (!Qa.test(i.decoderConfig.codec))
      throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.");
  } else if (i.decoderConfig.codec.startsWith("hev1") || i.decoderConfig.codec.startsWith("hvc1")) {
    if (!$a.test(i.decoderConfig.codec))
      throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.");
  } else if (i.decoderConfig.codec.startsWith("vp8")) {
    if (i.decoderConfig.codec !== "vp8")
      throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".');
  } else if (i.decoderConfig.codec.startsWith("vp09")) {
    if (!Ka.test(i.decoderConfig.codec))
      throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.');
  } else if (i.decoderConfig.codec.startsWith("av01") && !Ga.test(i.decoderConfig.codec))
    throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.');
}, Xa = [
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
], Tt = (i) => {
  if (!i)
    throw new TypeError("Audio chunk metadata must be provided.");
  if (typeof i != "object")
    throw new TypeError("Audio chunk metadata must be an object.");
  if (!i.decoderConfig)
    throw new TypeError("Audio chunk metadata must include a decoder configuration.");
  if (typeof i.decoderConfig != "object")
    throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
  if (typeof i.decoderConfig.codec != "string")
    throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
  if (!Xa.some((e) => i.decoderConfig.codec.startsWith(e)))
    throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
  if (!Number.isInteger(i.decoderConfig.sampleRate) || i.decoderConfig.sampleRate <= 0)
    throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
  if (!Number.isInteger(i.decoderConfig.numberOfChannels) || i.decoderConfig.numberOfChannels <= 0)
    throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
  if (i.decoderConfig.description !== void 0 && !tn(i.decoderConfig.description))
    throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
  if (i.decoderConfig.codec.startsWith("mp4a") && i.decoderConfig.codec !== "mp4a.69" && i.decoderConfig.codec !== "mp4a.6B" && i.decoderConfig.codec !== "mp4a.6b") {
    if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(i.decoderConfig.codec))
      throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.");
  } else if (i.decoderConfig.codec.startsWith("mp3") || i.decoderConfig.codec.startsWith("mp4a")) {
    if (i.decoderConfig.codec !== "mp3" && i.decoderConfig.codec !== "mp4a.69" && i.decoderConfig.codec !== "mp4a.6B" && i.decoderConfig.codec !== "mp4a.6b")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".');
  } else if (i.decoderConfig.codec.startsWith("opus")) {
    if (i.decoderConfig.codec !== "opus")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
    if (i.decoderConfig.description && i.decoderConfig.description.byteLength < 18)
      throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.");
  } else if (i.decoderConfig.codec.startsWith("vorbis")) {
    if (i.decoderConfig.codec !== "vorbis")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
    if (!i.decoderConfig.description)
      throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.");
  } else if (i.decoderConfig.codec.startsWith("flac")) {
    if (i.decoderConfig.codec !== "flac")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
    if (!i.decoderConfig.description || i.decoderConfig.description.byteLength < 42)
      throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.");
  } else if (i.decoderConfig.codec.startsWith("ac-3") || i.decoderConfig.codec.startsWith("ac3")) {
    if (i.decoderConfig.codec !== "ac-3")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".');
  } else if (i.decoderConfig.codec.startsWith("ec-3") || i.decoderConfig.codec.startsWith("eac3")) {
    if (i.decoderConfig.codec !== "ec-3")
      throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".');
  } else if ((i.decoderConfig.codec.startsWith("pcm") || i.decoderConfig.codec.startsWith("ulaw") || i.decoderConfig.codec.startsWith("alaw")) && !ne.includes(i.decoderConfig.codec))
    throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${ne.join(", ")}).`);
}, mn = (i) => {
  if (!i)
    throw new TypeError("Subtitle metadata must be provided.");
  if (typeof i != "object")
    throw new TypeError("Subtitle metadata must be an object.");
  if (!i.config)
    throw new TypeError("Subtitle metadata must include a config object.");
  if (typeof i.config != "object")
    throw new TypeError("Subtitle metadata config must be an object.");
  if (typeof i.config.description != "string")
    throw new TypeError("Subtitle metadata config description must be a string.");
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Gt = 4, Ya = [44100, 48e3, 32e3], ur = [
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
], Ri = 1483304551, Lr = 1231971951, hr = (i, e, t, r, s) => e === 0 ? 0 : e === 1 ? Math.floor(144 * t / (r << i)) + s : e === 2 ? Math.floor(144 * t / r) + s : (Math.floor(12 * t / r) + s) * 4, Mi = (i, e) => i === 3 ? e === 3 ? 21 : 36 : e === 3 ? 13 : 21, zi = (i, e) => {
  const t = i >>> 24, r = i >>> 16 & 255, s = i >>> 8 & 255, n = i & 255;
  if (t !== 255 && r !== 255 && s !== 255 && n !== 255)
    return {
      header: null,
      bytesAdvanced: 4
    };
  if (t !== 255)
    return { header: null, bytesAdvanced: 1 };
  if ((r & 224) !== 224)
    return { header: null, bytesAdvanced: 1 };
  let a = 0, o = 0;
  r & 16 ? a = r & 8 ? 0 : 1 : (a = 1, o = 1);
  const c = r >> 3 & 3, l = r >> 1 & 3, d = s >> 4 & 15, u = (s >> 2 & 3) % 3, h = s >> 1 & 1, f = n >> 6 & 3, g = n >> 4 & 3, m = n >> 3 & 1, w = n >> 2 & 1, y = n & 3, k = ur[a * 16 * 4 + l * 16 + d];
  if (k === -1)
    return { header: null, bytesAdvanced: 1 };
  const T = k * 1e3, S = Ya[u] >> a + o, P = hr(a, l, T, S, h);
  if (e !== null && e < P)
    return { header: null, bytesAdvanced: 1 };
  let x;
  return c === 3 ? x = l === 3 ? 384 : 1152 : l === 3 ? x = 384 : l === 2 ? x = 1152 : x = 576, {
    header: {
      totalSize: P,
      mpegVersionId: c,
      layer: l,
      bitrate: T,
      frequencyIndex: u,
      sampleRate: S,
      channel: f,
      modeExtension: g,
      copyright: m,
      original: w,
      emphasis: y,
      audioSamplesInFrame: x
    },
    bytesAdvanced: 1
  };
}, Za = (i) => {
  let e = 127, t = 0, r = i;
  for (; (e ^ 2147483647) !== 0; )
    t = r & ~e, t <<= 1, t |= r & e, e = (e + 1 << 8) - 1, r = t;
  return t;
}, fr = (i) => {
  let e = 2130706432, t = 0;
  for (; e !== 0; )
    t >>= 1, t |= i & e, e >>= 8;
  return t;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Di = [48e3, 44100, 32e3], pn = [24e3, 22050, 16e3];
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
var Ce;
(function(i) {
  i[i.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", i[i.SLICE_DPA = 2] = "SLICE_DPA", i[i.SLICE_DPB = 3] = "SLICE_DPB", i[i.SLICE_DPC = 4] = "SLICE_DPC", i[i.IDR = 5] = "IDR", i[i.SEI = 6] = "SEI", i[i.SPS = 7] = "SPS", i[i.PPS = 8] = "PPS", i[i.AUD = 9] = "AUD", i[i.SPS_EXT = 13] = "SPS_EXT";
})(Ce || (Ce = {}));
var ie;
(function(i) {
  i[i.RASL_N = 8] = "RASL_N", i[i.RASL_R = 9] = "RASL_R", i[i.BLA_W_LP = 16] = "BLA_W_LP", i[i.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", i[i.VPS_NUT = 32] = "VPS_NUT", i[i.SPS_NUT = 33] = "SPS_NUT", i[i.PPS_NUT = 34] = "PPS_NUT", i[i.AUD_NUT = 35] = "AUD_NUT", i[i.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", i[i.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT";
})(ie || (ie = {}));
const Wt = function* (i) {
  let e = 0, t = -1;
  for (; e < i.length - 2; ) {
    const r = i.indexOf(0, e);
    if (r === -1 || r >= i.length - 2)
      break;
    e = r;
    let s = 0;
    if (e + 3 < i.length && i[e + 1] === 0 && i[e + 2] === 0 && i[e + 3] === 1 ? s = 4 : i[e + 1] === 0 && i[e + 2] === 1 && (s = 3), s === 0) {
      e++;
      continue;
    }
    t !== -1 && e > t && (yield {
      offset: t,
      length: e - t
    }), t = e + s, e = t;
  }
  t !== -1 && t < i.length && (yield {
    offset: t,
    length: i.length - t
  });
}, Wr = function* (i, e) {
  let t = 0;
  const r = new DataView(i.buffer, i.byteOffset, i.byteLength);
  for (; t + e <= i.length; ) {
    let s;
    e === 1 ? s = r.getUint8(t) : e === 2 ? s = r.getUint16(t, !1) : e === 3 ? s = Rr(r, t, !1) : (p(e === 4), s = r.getUint32(t, !1)), t += e, yield {
      offset: t,
      length: s
    }, t += s;
  }
}, gn = (i, e) => {
  if (e.description) {
    const s = (ee(e.description)[4] & 3) + 1;
    return Wr(i, s);
  } else
    return Wt(i);
}, Dt = (i) => i & 31, Ui = (i) => {
  const e = [], t = i.length;
  for (let r = 0; r < t; r++)
    r + 2 < t && i[r] === 0 && i[r + 1] === 0 && i[r + 2] === 3 ? (e.push(0, 0), r += 2) : e.push(i[r]);
  return new Uint8Array(e);
}, Li = new Uint8Array([0, 0, 0, 1]), mr = (i) => {
  const e = i.reduce((s, n) => s + Li.byteLength + n.byteLength, 0), t = new Uint8Array(e);
  let r = 0;
  for (const s of i)
    t.set(Li, r), r += Li.byteLength, t.set(s, r), r += s.byteLength;
  return t;
}, wn = (i, e) => {
  const t = i.reduce((n, a) => n + e + a.byteLength, 0), r = new Uint8Array(t);
  let s = 0;
  for (const n of i) {
    const a = new DataView(r.buffer, r.byteOffset, r.byteLength);
    switch (e) {
      case 1:
        a.setUint8(s, n.byteLength);
        break;
      case 2:
        a.setUint16(s, n.byteLength, !1);
        break;
      case 3:
        Br(a, s, n.byteLength, !1);
        break;
      case 4:
        a.setUint32(s, n.byteLength, !1);
        break;
    }
    s += e, r.set(n, s), s += n.byteLength;
  }
  return r;
}, Ja = (i, e) => {
  if (e.description) {
    const s = (ee(e.description)[4] & 3) + 1;
    return wn(i, s);
  } else
    return mr(i);
}, Hr = (i) => {
  try {
    const e = [], t = [], r = [];
    for (const o of Wt(i)) {
      const c = i.subarray(o.offset, o.offset + o.length), l = Dt(c[0]);
      l === Ce.SPS ? e.push(c) : l === Ce.PPS ? t.push(c) : l === Ce.SPS_EXT && r.push(c);
    }
    if (e.length === 0 || t.length === 0)
      return null;
    const s = e[0], n = qr(s);
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
      sequenceParameterSetExt: a ? r : null
    };
  } catch (e) {
    return console.error("Error building AVC Decoder Configuration Record:", e), null;
  }
}, eo = (i) => {
  const e = [];
  e.push(i.configurationVersion), e.push(i.avcProfileIndication), e.push(i.profileCompatibility), e.push(i.avcLevelIndication), e.push(252 | i.lengthSizeMinusOne & 3), e.push(224 | i.sequenceParameterSets.length & 31);
  for (const t of i.sequenceParameterSets) {
    const r = t.byteLength;
    e.push(r >> 8), e.push(r & 255);
    for (let s = 0; s < r; s++)
      e.push(t[s]);
  }
  e.push(i.pictureParameterSets.length);
  for (const t of i.pictureParameterSets) {
    const r = t.byteLength;
    e.push(r >> 8), e.push(r & 255);
    for (let s = 0; s < r; s++)
      e.push(t[s]);
  }
  if (i.avcProfileIndication === 100 || i.avcProfileIndication === 110 || i.avcProfileIndication === 122 || i.avcProfileIndication === 144) {
    p(i.chromaFormat !== null), p(i.bitDepthLumaMinus8 !== null), p(i.bitDepthChromaMinus8 !== null), p(i.sequenceParameterSetExt !== null), e.push(252 | i.chromaFormat & 3), e.push(248 | i.bitDepthLumaMinus8 & 7), e.push(248 | i.bitDepthChromaMinus8 & 7), e.push(i.sequenceParameterSetExt.length);
    for (const t of i.sequenceParameterSetExt) {
      const r = t.byteLength;
      e.push(r >> 8), e.push(r & 255);
      for (let s = 0; s < r; s++)
        e.push(t[s]);
    }
  }
  return new Uint8Array(e);
}, kn = (i) => {
  try {
    const e = H(i);
    let t = 0;
    const r = e.getUint8(t++), s = e.getUint8(t++), n = e.getUint8(t++), a = e.getUint8(t++), o = e.getUint8(t++) & 3, c = e.getUint8(t++) & 31, l = [];
    for (let f = 0; f < c; f++) {
      const g = e.getUint16(t, !1);
      t += 2, l.push(i.subarray(t, t + g)), t += g;
    }
    const d = e.getUint8(t++), u = [];
    for (let f = 0; f < d; f++) {
      const g = e.getUint16(t, !1);
      t += 2, u.push(i.subarray(t, t + g)), t += g;
    }
    const h = {
      configurationVersion: r,
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
    if ((s === 100 || s === 110 || s === 122 || s === 144) && t + 4 <= i.length) {
      const f = e.getUint8(t++) & 3, g = e.getUint8(t++) & 7, m = e.getUint8(t++) & 7, w = e.getUint8(t++);
      h.chromaFormat = f, h.bitDepthLumaMinus8 = g, h.bitDepthChromaMinus8 = m;
      const y = [];
      for (let k = 0; k < w; k++) {
        const T = e.getUint16(t, !1);
        t += 2, y.push(i.subarray(t, t + T)), t += T;
      }
      h.sequenceParameterSetExt = y;
    }
    return h;
  } catch (e) {
    return console.error("Error deserializing AVC Decoder Configuration Record:", e), null;
  }
}, bn = {
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
}, qr = (i) => {
  try {
    const e = new O(Ui(i));
    if (e.skipBits(1), e.skipBits(2), e.readBits(5) !== 7)
      return null;
    const r = e.readAlignedByte(), s = e.readAlignedByte(), n = e.readAlignedByte();
    v(e);
    let a = 1, o = 0, c = 0, l = 0;
    if ((r === 100 || r === 110 || r === 122 || r === 244 || r === 44 || r === 83 || r === 86 || r === 118 || r === 128) && (a = v(e), a === 3 && (l = e.readBits(1)), o = v(e), c = v(e), e.skipBits(1), e.readBits(1))) {
      for (let F = 0; F < (a !== 3 ? 8 : 12); F++)
        if (e.readBits(1)) {
          const L = F < 6 ? 16 : 64;
          let j = 8, $ = 8;
          for (let K = 0; K < L; K++) {
            if ($ !== 0) {
              const te = qe(e);
              $ = (j + te + 256) % 256;
            }
            j = $ === 0 ? j : $;
          }
        }
    }
    v(e);
    const d = v(e);
    if (d === 0)
      v(e);
    else if (d === 1) {
      e.skipBits(1), qe(e), qe(e);
      const U = v(e);
      for (let F = 0; F < U; F++)
        qe(e);
    }
    v(e), e.skipBits(1);
    const u = v(e), h = v(e), f = 16 * (u + 1), g = 16 * (h + 1);
    let m = f, w = g;
    const y = e.readBits(1);
    if (y || e.skipBits(1), e.skipBits(1), e.readBits(1)) {
      const U = v(e), F = v(e), M = v(e), L = v(e);
      let j, $;
      if ((l === 0 ? a : 0) === 0)
        j = 1, $ = 2 - y;
      else {
        const te = a === 3 ? 1 : 2, re = a === 1 ? 2 : 1;
        j = te, $ = re * (2 - y);
      }
      m -= j * (U + F), w -= $ * (M + L);
    }
    let T = 2, S = 2, P = 2, x = 0, C = { num: 1, den: 1 }, _ = null, E = null;
    if (e.readBits(1)) {
      if (e.readBits(1)) {
        const re = e.readBits(8);
        if (re === 255)
          C = {
            num: e.readBits(16),
            den: e.readBits(16)
          };
        else {
          const Ne = bn[re];
          Ne && (C = Ne);
        }
      }
      e.readBits(1) && e.skipBits(1), e.readBits(1) && (e.skipBits(3), x = e.readBits(1), e.readBits(1) && (T = e.readBits(8), S = e.readBits(8), P = e.readBits(8))), e.readBits(1) && (v(e), v(e)), e.readBits(1) && (e.skipBits(32), e.skipBits(32), e.skipBits(1));
      const $ = e.readBits(1);
      $ && Ps(e);
      const K = e.readBits(1);
      K && Ps(e), ($ || K) && e.skipBits(1), e.skipBits(1), e.readBits(1) && (e.skipBits(1), v(e), v(e), v(e), v(e), _ = v(e), E = v(e));
    }
    if (_ === null) {
      p(E === null);
      const U = s & 16;
      if ((r === 44 || r === 86 || r === 100 || r === 110 || r === 122 || r === 244) && U)
        _ = 0, E = 0;
      else {
        const F = u + 1, M = h + 1, L = (2 - y) * M, j = Ii.find((K) => K.level >= n) ?? Y(Ii), $ = Math.min(Math.floor(j.maxDpbMbs / (F * L)), 16);
        _ = $, E = $;
      }
    }
    return p(E !== null), {
      profileIdc: r,
      constraintFlags: s,
      levelIdc: n,
      frameMbsOnlyFlag: y,
      chromaFormatIdc: a,
      bitDepthLumaMinus8: o,
      bitDepthChromaMinus8: c,
      codedWidth: f,
      codedHeight: g,
      displayWidth: m,
      displayHeight: w,
      pixelAspectRatio: C,
      colourPrimaries: T,
      matrixCoefficients: P,
      transferCharacteristics: S,
      fullRangeFlag: x,
      numReorderFrames: _,
      maxDecFrameBuffering: E
    };
  } catch (e) {
    return console.error("Error parsing AVC SPS:", e), null;
  }
}, Ps = (i) => {
  const e = v(i);
  i.skipBits(4), i.skipBits(4);
  for (let t = 0; t <= e; t++)
    v(i), v(i), i.skipBits(1);
  i.skipBits(5), i.skipBits(5), i.skipBits(5), i.skipBits(5);
}, yn = (i, e) => {
  if (e.description) {
    const s = (ee(e.description)[21] & 3) + 1;
    return Wr(i, s);
  } else
    return Wt(i);
}, kt = (i) => i >> 1 & 63, Tn = (i) => {
  try {
    const e = new O(Ui(i));
    e.skipBits(16), e.readBits(4);
    const t = e.readBits(3), r = e.readBits(1), { general_profile_space: s, general_tier_flag: n, general_profile_idc: a, general_profile_compatibility_flags: o, general_constraint_indicator_flags: c, general_level_idc: l } = to(e, t);
    v(e);
    const d = v(e);
    let u = 0;
    d === 3 && (u = e.readBits(1));
    const h = v(e), f = v(e);
    let g = h, m = f;
    if (e.readBits(1)) {
      const F = v(e), M = v(e), L = v(e), j = v(e);
      let $ = 1, K = 1;
      const te = u === 0 ? d : 0;
      te === 1 ? ($ = 2, K = 2) : te === 2 && ($ = 2, K = 1), g -= (F + M) * $, m -= (L + j) * K;
    }
    const w = v(e), y = v(e);
    v(e);
    const T = e.readBits(1) ? 0 : t;
    let S = 0;
    for (let F = T; F <= t; F++)
      v(e), S = v(e), v(e);
    v(e), v(e), v(e), v(e), v(e), v(e), e.readBits(1) && e.readBits(1) && io(e), e.skipBits(1), e.skipBits(1), e.readBits(1) && (e.skipBits(4), e.skipBits(4), v(e), v(e), e.skipBits(1));
    const P = v(e);
    if (ro(e, P), e.readBits(1)) {
      const F = v(e);
      for (let M = 0; M < F; M++)
        v(e), e.skipBits(1);
    }
    e.skipBits(1), e.skipBits(1);
    let x = 2, C = 2, _ = 2, E = 0, N = 0, U = { num: 1, den: 1 };
    if (e.readBits(1)) {
      const F = no(e, t);
      U = F.pixelAspectRatio, x = F.colourPrimaries, C = F.transferCharacteristics, _ = F.matrixCoefficients, E = F.fullRangeFlag, N = F.minSpatialSegmentationIdc;
    }
    return {
      displayWidth: g,
      displayHeight: m,
      pixelAspectRatio: U,
      colourPrimaries: x,
      transferCharacteristics: C,
      matrixCoefficients: _,
      fullRangeFlag: E,
      maxDecFrameBuffering: S + 1,
      spsMaxSubLayersMinus1: t,
      spsTemporalIdNestingFlag: r,
      generalProfileSpace: s,
      generalTierFlag: n,
      generalProfileIdc: a,
      generalProfileCompatibilityFlags: o,
      generalConstraintIndicatorFlags: c,
      generalLevelIdc: l,
      chromaFormatIdc: d,
      bitDepthLumaMinus8: w,
      bitDepthChromaMinus8: y,
      minSpatialSegmentationIdc: N
    };
  } catch (e) {
    return console.error("Error parsing HEVC SPS:", e), null;
  }
}, jr = (i) => {
  try {
    const e = [], t = [], r = [], s = [];
    for (const l of Wt(i)) {
      const d = i.subarray(l.offset, l.offset + l.length), u = kt(d[0]);
      u === ie.VPS_NUT ? e.push(d) : u === ie.SPS_NUT ? t.push(d) : u === ie.PPS_NUT ? r.push(d) : (u === ie.PREFIX_SEI_NUT || u === ie.SUFFIX_SEI_NUT) && s.push(d);
    }
    if (t.length === 0 || r.length === 0)
      return null;
    const n = Tn(t[0]);
    if (!n)
      return null;
    let a = 0;
    if (r.length > 0) {
      const l = r[0], d = new O(Ui(l));
      d.skipBits(16), v(d), v(d), d.skipBits(1), d.skipBits(1), d.skipBits(3), d.skipBits(1), d.skipBits(1), v(d), v(d), qe(d), d.skipBits(1), d.skipBits(1), d.readBits(1) && v(d), qe(d), qe(d), d.skipBits(1), d.skipBits(1), d.skipBits(1), d.skipBits(1);
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
      ...r.length ? [
        {
          arrayCompleteness: 1,
          nalUnitType: ie.PPS_NUT,
          nalUnits: r
        }
      ] : [],
      ...s.length ? [
        {
          arrayCompleteness: 1,
          nalUnitType: kt(s[0][0]),
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
}, to = (i, e) => {
  const t = i.readBits(2), r = i.readBits(1), s = i.readBits(5);
  let n = 0;
  for (let d = 0; d < 32; d++)
    n = n << 1 | i.readBits(1);
  const a = new Uint8Array(6);
  for (let d = 0; d < 6; d++)
    a[d] = i.readBits(8);
  const o = i.readBits(8), c = [], l = [];
  for (let d = 0; d < e; d++)
    c.push(i.readBits(1)), l.push(i.readBits(1));
  if (e > 0)
    for (let d = e; d < 8; d++)
      i.skipBits(2);
  for (let d = 0; d < e; d++)
    c[d] && i.skipBits(88), l[d] && i.skipBits(8);
  return {
    general_profile_space: t,
    general_tier_flag: r,
    general_profile_idc: s,
    general_profile_compatibility_flags: n,
    general_constraint_indicator_flags: a,
    general_level_idc: o
  };
}, io = (i) => {
  for (let e = 0; e < 4; e++)
    for (let t = 0; t < (e === 3 ? 2 : 6); t++)
      if (!i.readBits(1))
        v(i);
      else {
        const s = Math.min(64, 1 << 4 + (e << 1));
        e > 1 && qe(i);
        for (let n = 0; n < s; n++)
          qe(i);
      }
}, ro = (i, e) => {
  const t = [];
  for (let r = 0; r < e; r++)
    t[r] = so(i, r, e, t);
}, so = (i, e, t, r) => {
  let s = 0, n = 0, a = 0;
  if (e !== 0 && (n = i.readBits(1)), n) {
    if (e === t) {
      const c = v(i);
      a = e - (c + 1);
    } else
      a = e - 1;
    i.readBits(1), v(i);
    const o = r[a] ?? 0;
    for (let c = 0; c <= o; c++)
      i.readBits(1) || i.readBits(1);
    s = r[a];
  } else {
    const o = v(i), c = v(i);
    for (let l = 0; l < o; l++)
      v(i), i.readBits(1);
    for (let l = 0; l < c; l++)
      v(i), i.readBits(1);
    s = o + c;
  }
  return s;
}, no = (i, e) => {
  let t = 2, r = 2, s = 2, n = 0, a = 0, o = { num: 1, den: 1 };
  if (i.readBits(1)) {
    const c = i.readBits(8);
    if (c === 255)
      o = {
        num: i.readBits(16),
        den: i.readBits(16)
      };
    else {
      const l = bn[c];
      l && (o = l);
    }
  }
  return i.readBits(1) && i.readBits(1), i.readBits(1) && (i.readBits(3), n = i.readBits(1), i.readBits(1) && (t = i.readBits(8), r = i.readBits(8), s = i.readBits(8))), i.readBits(1) && (v(i), v(i)), i.readBits(1), i.readBits(1), i.readBits(1), i.readBits(1) && (v(i), v(i), v(i), v(i)), i.readBits(1) && (i.readBits(32), i.readBits(32), i.readBits(1) && v(i), i.readBits(1) && ao(i, !0, e)), i.readBits(1) && (i.readBits(1), i.readBits(1), i.readBits(1), a = v(i), v(i), v(i), v(i), v(i)), {
    pixelAspectRatio: o,
    colourPrimaries: t,
    transferCharacteristics: r,
    matrixCoefficients: s,
    fullRangeFlag: n,
    minSpatialSegmentationIdc: a
  };
}, ao = (i, e, t) => {
  let r = !1, s = !1, n = !1;
  r = i.readBits(1) === 1, s = i.readBits(1) === 1, (r || s) && (n = i.readBits(1) === 1, n && (i.readBits(8), i.readBits(5), i.readBits(1), i.readBits(5)), i.readBits(4), i.readBits(4), n && i.readBits(4), i.readBits(5), i.readBits(5), i.readBits(5));
  for (let a = 0; a <= t; a++) {
    const o = i.readBits(1) === 1;
    let c = !0;
    o || (c = i.readBits(1) === 1);
    let l = !1;
    c ? v(i) : l = i.readBits(1) === 1;
    let d = 1;
    l || (d = v(i) + 1), r && Cs(i, d, n), s && Cs(i, d, n);
  }
}, Cs = (i, e, t) => {
  for (let r = 0; r < e; r++)
    v(i), v(i), t && (v(i), v(i)), i.readBits(1);
}, oo = (i) => {
  const e = [];
  e.push(i.configurationVersion), e.push((i.generalProfileSpace & 3) << 6 | (i.generalTierFlag & 1) << 5 | i.generalProfileIdc & 31), e.push(i.generalProfileCompatibilityFlags >>> 24 & 255), e.push(i.generalProfileCompatibilityFlags >>> 16 & 255), e.push(i.generalProfileCompatibilityFlags >>> 8 & 255), e.push(i.generalProfileCompatibilityFlags & 255), e.push(...i.generalConstraintIndicatorFlags), e.push(i.generalLevelIdc & 255), e.push(240 | i.minSpatialSegmentationIdc >> 8 & 15), e.push(i.minSpatialSegmentationIdc & 255), e.push(252 | i.parallelismType & 3), e.push(252 | i.chromaFormatIdc & 3), e.push(248 | i.bitDepthLumaMinus8 & 7), e.push(248 | i.bitDepthChromaMinus8 & 7), e.push(i.avgFrameRate >> 8 & 255), e.push(i.avgFrameRate & 255), e.push((i.constantFrameRate & 3) << 6 | (i.numTemporalLayers & 7) << 3 | (i.temporalIdNested & 1) << 2 | i.lengthSizeMinusOne & 3), e.push(i.arrays.length & 255);
  for (const t of i.arrays) {
    e.push((t.arrayCompleteness & 1) << 7 | 0 | t.nalUnitType & 63), e.push(t.nalUnits.length >> 8 & 255), e.push(t.nalUnits.length & 255);
    for (const r of t.nalUnits) {
      e.push(r.length >> 8 & 255), e.push(r.length & 255);
      for (let s = 0; s < r.length; s++)
        e.push(r[s]);
    }
  }
  return new Uint8Array(e);
}, co = (i) => {
  try {
    const e = H(i);
    let t = 0;
    const r = e.getUint8(t++), s = e.getUint8(t++), n = s >> 6 & 3, a = s >> 5 & 1, o = s & 31, c = e.getUint32(t, !1);
    t += 4;
    const l = i.subarray(t, t + 6);
    t += 6;
    const d = e.getUint8(t++), u = (e.getUint8(t++) & 15) << 8 | e.getUint8(t++), h = e.getUint8(t++) & 3, f = e.getUint8(t++) & 3, g = e.getUint8(t++) & 7, m = e.getUint8(t++) & 7, w = e.getUint16(t, !1);
    t += 2;
    const y = e.getUint8(t++), k = y >> 6 & 3, T = y >> 3 & 7, S = y >> 2 & 1, P = y & 3, x = e.getUint8(t++), C = [];
    for (let _ = 0; _ < x; _++) {
      const E = e.getUint8(t++), N = E >> 7 & 1, U = E & 63, F = e.getUint16(t, !1);
      t += 2;
      const M = [];
      for (let L = 0; L < F; L++) {
        const j = e.getUint16(t, !1);
        t += 2, M.push(i.subarray(t, t + j)), t += j;
      }
      C.push({
        arrayCompleteness: N,
        nalUnitType: U,
        nalUnits: M
      });
    }
    return {
      configurationVersion: r,
      generalProfileSpace: n,
      generalTierFlag: a,
      generalProfileIdc: o,
      generalProfileCompatibilityFlags: c,
      generalConstraintIndicatorFlags: l,
      generalLevelIdc: d,
      minSpatialSegmentationIdc: u,
      parallelismType: h,
      chromaFormatIdc: f,
      bitDepthLumaMinus8: g,
      bitDepthChromaMinus8: m,
      avgFrameRate: w,
      constantFrameRate: k,
      numTemporalLayers: T,
      temporalIdNested: S,
      lengthSizeMinusOne: P,
      arrays: C
    };
  } catch (e) {
    return console.error("Error deserializing HEVC Decoder Configuration Record:", e), null;
  }
}, Sn = (i) => {
  const e = new O(i);
  if (e.readBits(2) !== 2)
    return null;
  const r = e.readBits(1), n = (e.readBits(1) << 1) + r;
  if (n === 3 && e.skipBits(1), e.readBits(1) === 1 || e.readBits(1) !== 0 || (e.skipBits(2), e.readBits(24) !== 4817730))
    return null;
  let l = 8;
  n >= 2 && (l = e.readBits(1) ? 12 : 10);
  const d = e.readBits(3);
  let u = 0, h = 0;
  if (d !== 7)
    if (h = e.readBits(1), n === 1 || n === 3) {
      const C = e.readBits(1), _ = e.readBits(1);
      u = !C && !_ ? 3 : C && !_ ? 2 : 1, e.skipBits(1);
    } else
      u = 1;
  else
    u = 3, h = 1;
  const f = e.readBits(16), g = e.readBits(16), m = f + 1, w = g + 1, y = m * w;
  let k = Y(st).level;
  for (const x of st)
    if (y <= x.maxPictureSize) {
      k = x.level;
      break;
    }
  return {
    profile: n,
    level: k,
    bitDepth: l,
    chromaSubsampling: u,
    videoFullRangeFlag: h,
    colourPrimaries: d === 2 ? 1 : d === 1 ? 6 : 2,
    transferCharacteristics: d === 2 ? 1 : d === 1 ? 6 : 2,
    matrixCoefficients: d === 7 ? 0 : d === 2 ? 1 : d === 1 ? 6 : 2
  };
}, xn = function* (i) {
  const e = new O(i), t = () => {
    let r = 0;
    for (let s = 0; s < 8; s++) {
      const n = e.readAlignedByte();
      if (r |= (n & 127) << s * 7, !(n & 128))
        break;
      if (s === 7 && n & 128)
        return null;
    }
    return r >= 2 ** 32 - 1 ? null : r;
  };
  for (; e.getBitsLeft() >= 8; ) {
    e.skipBits(1);
    const r = e.readBits(4), s = e.readBits(1), n = e.readBits(1);
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
      type: r,
      data: i.subarray(e.pos / 8, e.pos / 8 + a)
    }, e.skipBits(a * 8);
  }
}, Pn = (i) => {
  for (const { type: e, data: t } of xn(i)) {
    if (e !== 1)
      continue;
    const r = new O(t), s = r.readBits(3);
    r.readBits(1);
    const n = r.readBits(1);
    let a = 0, o = 0, c = 0;
    if (n)
      a = r.readBits(5);
    else {
      if (r.readBits(1) && (r.skipBits(32), r.skipBits(32), r.readBits(1)))
        return null;
      const P = r.readBits(1);
      P && (c = r.readBits(5), r.skipBits(32), r.skipBits(5), r.skipBits(5));
      const x = r.readBits(5);
      for (let C = 0; C <= x; C++) {
        r.skipBits(12);
        const _ = r.readBits(5);
        if (C === 0 && (a = _), _ > 7) {
          const N = r.readBits(1);
          C === 0 && (o = N);
        }
        if (P && r.readBits(1)) {
          const U = c + 1;
          r.skipBits(U), r.skipBits(U), r.skipBits(1);
        }
        r.readBits(1) && r.skipBits(4);
      }
    }
    const l = r.readBits(4), d = r.readBits(4), u = l + 1;
    r.skipBits(u);
    const h = d + 1;
    r.skipBits(h);
    let f = 0;
    if (n ? f = 0 : f = r.readBits(1), f && (r.skipBits(4), r.skipBits(3)), r.skipBits(1), r.skipBits(1), r.skipBits(1), !n) {
      r.skipBits(1), r.skipBits(1), r.skipBits(1), r.skipBits(1);
      const S = r.readBits(1);
      S && (r.skipBits(1), r.skipBits(1));
      const P = r.readBits(1);
      let x = 0;
      P ? x = 2 : x = r.readBits(1), x > 0 && (r.readBits(1) || r.skipBits(1)), S && r.skipBits(3);
    }
    r.skipBits(1), r.skipBits(1), r.skipBits(1);
    const g = r.readBits(1);
    let m = 8;
    s === 2 && g ? m = r.readBits(1) ? 12 : 10 : s <= 2 && (m = g ? 10 : 8);
    let w = 0;
    s !== 1 && (w = r.readBits(1));
    let y = 1, k = 1, T = 0;
    return w || (s === 0 ? (y = 1, k = 1) : s === 1 ? (y = 0, k = 0) : m === 12 && (y = r.readBits(1), y && (k = r.readBits(1))), y && k && (T = r.readBits(2))), {
      profile: s,
      level: a,
      tier: o,
      bitDepth: m,
      monochrome: w,
      chromaSubsamplingX: y,
      chromaSubsamplingY: k,
      chromaSamplePosition: T
    };
  }
  return null;
}, Ni = (i) => {
  const e = H(i), t = e.getUint8(9), r = e.getUint16(10, !0), s = e.getUint32(12, !0), n = e.getInt16(16, !0), a = e.getUint8(18);
  let o = null;
  return a && (o = i.subarray(19, 21 + t)), {
    outputChannelCount: t,
    preSkip: r,
    inputSampleRate: s,
    outputGain: n,
    channelMappingFamily: a,
    channelMappingTable: o
  };
}, lo = [
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
], uo = (i) => {
  const e = i[0] >> 3;
  return {
    durationInSamples: lo[e]
  };
}, Cn = (i) => {
  if (i.length < 7)
    throw new Error("Setup header is too short.");
  if (i[0] !== 5)
    throw new Error("Wrong packet type in Setup header.");
  if (String.fromCharCode(...i.slice(1, 7)) !== "vorbis")
    throw new Error("Invalid packet signature in Setup header.");
  const t = i.length, r = new Uint8Array(t);
  for (let u = 0; u < t; u++)
    r[u] = i[t - 1 - u];
  const s = new O(r);
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
    const u = s.pos, h = s.readBits(8), f = s.readBits(16), g = s.readBits(16);
    if (h > 63 || f !== 0 || g !== 0) {
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
}, _n = (i, e, t) => {
  switch (i) {
    case "avc": {
      for (const r of gn(t, e)) {
        const s = t[r.offset], n = Dt(s);
        if (n >= Ce.NON_IDR_SLICE && n <= Ce.SLICE_DPC)
          return "delta";
        if (n === Ce.IDR)
          return "key";
        if (n === Ce.SEI && (!nr() || xa() >= 144)) {
          const a = t.subarray(r.offset, r.offset + r.length), o = Ui(a);
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
              const h = new O(o);
              h.pos = 8 * c;
              const f = v(h), g = h.readBits(1);
              if (f === 0 && g === 1)
                return "key";
            }
            c += d;
          } while (c < o.length - 1);
        }
      }
      return "delta";
    }
    case "hevc": {
      for (const r of yn(t, e)) {
        const s = kt(t[r.offset]);
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
      const r = new O(t);
      if (r.readBits(2) !== 2)
        return null;
      const s = r.readBits(1);
      return (r.readBits(1) << 1) + s === 3 && r.skipBits(1), r.readBits(1) ? null : r.readBits(1) === 0 ? "key" : "delta";
    }
    case "av1": {
      let r = !1;
      for (const { type: s, data: n } of xn(t))
        if (s === 1) {
          const a = new O(n);
          a.skipBits(4), r = !!a.readBits(1);
        } else if (s === 3 || s === 6 || s === 7) {
          if (r)
            return "key";
          const a = new O(n);
          return a.readBits(1) ? null : a.readBits(2) === 0 ? "key" : "delta";
        }
      return null;
    }
    default:
      fe(i), p(!1);
  }
};
var je;
(function(i) {
  i[i.STREAMINFO = 0] = "STREAMINFO", i[i.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", i[i.PICTURE = 6] = "PICTURE";
})(je || (je = {}));
const pr = (i, e) => {
  const t = H(i);
  let r = 0;
  const s = t.getUint32(r, !0);
  r += 4;
  const n = _e.decode(i.subarray(r, r + s));
  r += s, s > 0 && (e.raw ??= {}, e.raw.vendor ??= n);
  const a = t.getUint32(r, !0);
  r += 4;
  for (let o = 0; o < a; o++) {
    const c = t.getUint32(r, !0);
    r += 4;
    const l = _e.decode(i.subarray(r, r + c));
    r += c;
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
          const f = h.split("/"), g = Number.parseInt(f[0], 10), m = f[1] && Number.parseInt(f[1], 10);
          Number.isInteger(g) && g > 0 && (e.trackNumber ??= g), m && Number.isInteger(m) && m > 0 && (e.tracksTotal ??= m);
        }
        break;
      case "TRACKTOTAL":
        {
          const f = Number.parseInt(h, 10);
          Number.isInteger(f) && f > 0 && (e.tracksTotal ??= f);
        }
        break;
      case "DISCNUMBER":
        {
          const f = h.split("/"), g = Number.parseInt(f[0], 10), m = f[1] && Number.parseInt(f[1], 10);
          Number.isInteger(g) && g > 0 && (e.discNumber ??= g), m && Number.isInteger(m) && m > 0 && (e.discsTotal ??= m);
        }
        break;
      case "DISCTOTAL":
        {
          const f = Number.parseInt(h, 10);
          Number.isInteger(f) && f > 0 && (e.discsTotal ??= f);
        }
        break;
      case "DATE":
        {
          const f = new Date(h);
          Number.isNaN(f.getTime()) || (e.date ??= f);
        }
        break;
      case "GENRE":
        e.genre ??= h;
        break;
      case "METADATA_BLOCK_PICTURE":
        {
          const f = Ca(h), g = H(f), m = g.getUint32(0, !1), w = g.getUint32(4, !1), y = String.fromCharCode(...f.subarray(8, 8 + w)), k = g.getUint32(8 + w, !1), T = _e.decode(f.subarray(12 + w, 12 + w + k)), S = g.getUint32(w + k + 28), P = f.subarray(w + k + 32, w + k + 32 + S);
          e.images ??= [], e.images.push({
            data: P,
            mimeType: y,
            kind: m === 3 ? "coverFront" : m === 4 ? "coverBack" : "unknown",
            name: void 0,
            description: T || void 0
          });
        }
        break;
    }
  }
}, gr = (i, e, t) => {
  const r = [
    i
  ], n = X.encode("Mediabunny");
  let a = new Uint8Array(4 + n.length), o = new DataView(a.buffer);
  o.setUint32(0, n.length, !0), a.set(n, 4), r.push(a);
  const c = /* @__PURE__ */ new Set(), l = (g, m) => {
    const w = `${g}=${m}`, y = X.encode(w);
    a = new Uint8Array(4 + y.length), o = new DataView(a.buffer), o.setUint32(0, y.length, !0), a.set(y, 4), r.push(a), c.add(g);
  };
  for (const { key: g, value: m } of Ut(e))
    switch (g) {
      case "title":
        l("TITLE", m);
        break;
      case "description":
        l("DESCRIPTION", m);
        break;
      case "artist":
        l("ARTIST", m);
        break;
      case "album":
        l("ALBUM", m);
        break;
      case "albumArtist":
        l("ALBUMARTIST", m);
        break;
      case "genre":
        l("GENRE", m);
        break;
      case "date":
        {
          const w = e.raw?.DATE ?? e.raw?.date;
          w && typeof w == "string" ? l("DATE", w) : l("DATE", m.toISOString().slice(0, 10));
        }
        break;
      case "comment":
        l("COMMENT", m);
        break;
      case "lyrics":
        l("LYRICS", m);
        break;
      case "trackNumber":
        l("TRACKNUMBER", m.toString());
        break;
      case "tracksTotal":
        l("TRACKTOTAL", m.toString());
        break;
      case "discNumber":
        l("DISCNUMBER", m.toString());
        break;
      case "discsTotal":
        l("DISCTOTAL", m.toString());
        break;
      case "images":
        {
          if (!t)
            break;
          for (const w of m) {
            const y = w.kind === "coverFront" ? 3 : w.kind === "coverBack" ? 4 : 0, k = new Uint8Array(w.mimeType.length);
            for (let C = 0; C < w.mimeType.length; C++)
              k[C] = w.mimeType.charCodeAt(C);
            const T = X.encode(w.description ?? ""), S = new Uint8Array(8 + k.length + 4 + T.length + 16 + 4 + w.data.length), P = H(S);
            P.setUint32(0, y, !1), P.setUint32(4, k.length, !1), S.set(k, 8), P.setUint32(8 + k.length, T.length, !1), S.set(T, 12 + k.length), P.setUint32(28 + k.length + T.length, w.data.length, !1), S.set(w.data, 32 + k.length + T.length);
            const x = Pa(S);
            l("METADATA_BLOCK_PICTURE", x);
          }
        }
        break;
      case "raw":
        break;
      default:
        fe(g);
    }
  if (e.raw)
    for (const g in e.raw) {
      const m = e.raw[g] ?? e.raw[g.toLowerCase()];
      g === "vendor" || m == null || c.has(g) || typeof m == "string" && l(g, m);
    }
  const d = new Uint8Array(4);
  H(d).setUint32(0, c.size, !0), r.splice(2, 0, d);
  const u = r.reduce((g, m) => g + m.length, 0), h = new Uint8Array(u);
  let f = 0;
  for (const g of r)
    h.set(g, f), f += g.length;
  return h;
}, Qr = [2, 1, 2, 3, 3, 4, 4, 5], In = (i) => {
  if (i.length < 7 || i[0] !== 11 || i[1] !== 119)
    return null;
  const e = new O(i);
  e.skipBits(16), e.skipBits(16);
  const t = e.readBits(2);
  if (t === 3)
    return null;
  const r = e.readBits(6), s = e.readBits(5);
  if (s > 8)
    return null;
  const n = e.readBits(3), a = e.readBits(3);
  (a & 1) !== 0 && a !== 1 && e.skipBits(2), (a & 4) !== 0 && e.skipBits(2), a === 2 && e.skipBits(2);
  const o = e.readBits(1), c = Math.floor(r / 2);
  return { fscod: t, bsid: s, bsmod: n, acmod: a, lfeon: o, bitRateCode: c };
}, ho = [
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
], fo = 1536, gi = new Uint8Array([5, 4, 65, 67, 45, 51]), wi = new Uint8Array([5, 4, 69, 65, 67, 51]), En = [1, 2, 3, 6], vn = (i) => {
  if (i.length < 6 || i[0] !== 11 || i[1] !== 119)
    return null;
  const e = new O(i);
  e.skipBits(16);
  const t = e.readBits(2);
  if (e.skipBits(3), t !== 0 && t !== 2)
    return null;
  const r = e.readBits(11), s = e.readBits(2);
  let n = 0, a;
  s === 3 ? (n = e.readBits(2), a = 3) : a = e.readBits(2);
  const o = e.readBits(3), c = e.readBits(1), l = e.readBits(5);
  if (l < 11 || l > 16)
    return null;
  const d = En[a];
  let u;
  return s < 3 ? u = Di[s] / 1e3 : u = pn[n] / 1e3, {
    dataRate: Math.round((r + 1) * u / (d * 16)),
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
}, mo = (i) => {
  if (i.length < 2)
    return null;
  const e = new O(i), t = e.readBits(13), r = e.readBits(3), s = [];
  for (let n = 0; n <= r && !(Math.ceil(e.pos / 8) + 3 > i.length); n++) {
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
}, An = (i) => {
  const e = i.substreams[0];
  return p(e), e.fscod < 3 ? Di[e.fscod] : e.fscod2 !== null && e.fscod2 < 3 ? pn[e.fscod2] : null;
}, Fn = (i) => {
  const e = i.substreams[0];
  p(e);
  let t = Qr[e.acmod] + e.lfeon;
  if (e.numDepSub > 0) {
    const r = [2, 2, 1, 1, 2, 2, 2, 1, 1];
    for (let s = 0; s < 9; s++)
      e.chanLoc & 1 << 8 - s && (t += r[s]);
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
class lt {
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
const Te = /* @__PURE__ */ new Uint8Array(0);
class G {
  /** Creates a new {@link EncodedPacket} from raw bytes and timing information. */
  constructor(e, t, r, s, n = -1, a, o) {
    if (this.data = e, this.type = t, this.timestamp = r, this.duration = s, this.sequenceNumber = n, e === Te && a === void 0)
      throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
    if (a === void 0 && (a = e.byteLength), !(e instanceof Uint8Array))
      throw new TypeError("data must be a Uint8Array.");
    if (t !== "key" && t !== "delta")
      throw new TypeError('type must be either "key" or "delta".');
    if (!Number.isFinite(r))
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
    return this.data === Te;
  }
  /** The timestamp of this packet in microseconds. */
  get microsecondTimestamp() {
    return Math.trunc(gs * this.timestamp);
  }
  /** The duration of this packet in microseconds. */
  get microsecondDuration() {
    return Math.trunc(gs * this.duration);
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
    const r = new Uint8Array(e.byteLength);
    return e.copyTo(r), new G(r, e.type, e.timestamp / 1e6, (e.duration ?? 0) / 1e6, void 0, void 0, t);
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
    return new G(e?.data ?? this.data, e?.type ?? this.type, e?.timestamp ?? this.timestamp, e?.duration ?? this.duration, e?.sequenceNumber ?? this.sequenceNumber, this.byteLength, e?.sideData ?? this.sideData);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const po = (i) => {
  let r = i, s = 4096, n = 0, a = 12, o = 0;
  for (r < 0 && (r = -r, n = 128), r += 33, r > 8191 && (r = 8191); (r & s) !== s && a >= 5; )
    s >>= 1, a--;
  return o = r >> a - 4 & 15, ~(n | a - 5 << 4 | o) & 255;
}, go = (i) => {
  let t = 0, r = 0, s = ~i;
  s & 128 && (s &= -129, t = -1), r = ((s & 240) >> 4) + 5;
  const n = (1 << r | (s & 15) << r - 4 | 1 << r - 5) - 33;
  return t === 0 ? n : -n;
}, wo = (i) => {
  let t = 2048, r = 0, s = 11, n = 0, a = i;
  for (a < 0 && (a = -a, r = 128), a > 4095 && (a = 4095); (a & t) !== t && s >= 5; )
    t >>= 1, s--;
  return n = a >> (s === 4 ? 1 : s - 4) & 15, (r | s - 4 << 4 | n) ^ 85;
}, ko = (i) => {
  let e = 0, t = 0, r = i ^ 85;
  r & 128 && (r &= -129, e = -1), t = ((r & 240) >> 4) + 4;
  let s = 0;
  return t !== 4 ? s = 1 << t | (r & 15) << t - 4 | 1 << t - 5 : s = r << 1 | 1, e === 0 ? s : -s;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const ut = (i) => {
  if (!i || typeof i != "object")
    throw new TypeError("options must be an object.");
  if (i.metadataOnly !== void 0 && typeof i.metadataOnly != "boolean")
    throw new TypeError("options.metadataOnly, when defined, must be a boolean.");
  if (i.verifyKeyPackets !== void 0 && typeof i.verifyKeyPackets != "boolean")
    throw new TypeError("options.verifyKeyPackets, when defined, must be a boolean.");
  if (i.verifyKeyPackets && i.metadataOnly)
    throw new TypeError("options.verifyKeyPackets and options.metadataOnly cannot be enabled together.");
}, Qe = (i) => {
  if (!Nt(i))
    throw new TypeError("timestamp must be a number.");
}, Wi = (i, e, t) => t.verifyKeyPackets ? e.then(async (r) => {
  if (!r || r.type === "delta")
    return r;
  const s = await i.determinePacketType(r);
  return s && (r.type = s), r;
}) : e;
class si {
  /** Creates a new {@link EncodedPacketSink} for the given {@link InputTrack}. */
  constructor(e) {
    if (!(e instanceof Kr))
      throw new TypeError("track must be an InputTrack.");
    this._track = e;
  }
  /**
   * Retrieves the track's first packet (in decode order), or null if it has no packets. The first packet is very
   * likely to be a key packet.
   */
  getFirstPacket(e = {}) {
    if (ut(e), this._track.input._disposed)
      throw new ye();
    return Wi(this._track, this._track._backing.getFirstPacket(e), e);
  }
  /** Retrieves the track's first key packet (in decode order), or null if it has no key packets. */
  async getFirstKeyPacket(e = {}) {
    ut(e);
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
    if (Qe(e), ut(t), this._track.input._disposed)
      throw new ye();
    return Wi(this._track, this._track._backing.getPacket(e, t), t);
  }
  /**
   * Retrieves the packet following the given packet (in decode order), or null if the given packet is the
   * last packet.
   */
  getNextPacket(e, t = {}) {
    if (!(e instanceof G))
      throw new TypeError("packet must be an EncodedPacket.");
    if (ut(t), this._track.input._disposed)
      throw new ye();
    return Wi(this._track, this._track._backing.getNextPacket(e, t), t);
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
    if (Qe(e), ut(t), this._track.input._disposed)
      throw new ye();
    if (!t.verifyKeyPackets)
      return this._track._backing.getKeyPacket(e, t);
    const r = await this._track._backing.getKeyPacket(e, t);
    return r && (p(r.type === "key"), await this._track.determinePacketType(r) === "delta" ? this.getKeyPacket(r.timestamp - 1 / this._track.timeResolution, t) : r);
  }
  /**
   * Retrieves the key packet following the given packet (in decode order), or null if the given packet is the last
   * key packet.
   *
   * To ensure that the returned packet is guaranteed to be a real key frame, enable `options.verifyKeyPackets`.
   */
  async getNextKeyPacket(e, t = {}) {
    if (!(e instanceof G))
      throw new TypeError("packet must be an EncodedPacket.");
    if (ut(t), this._track.input._disposed)
      throw new ye();
    if (!t.verifyKeyPackets)
      return this._track._backing.getNextKeyPacket(e, t);
    const r = await this._track._backing.getNextKeyPacket(e, t);
    return r && (p(r.type === "key"), await this._track.determinePacketType(r) === "delta" ? this.getNextKeyPacket(r, t) : r);
  }
  /**
   * Creates an async iterator that yields the packets in this track in decode order. To enable fast iteration, this
   * method will intelligently preload packets based on the speed of the consumer.
   *
   * @param startPacket - (optional) The packet from which iteration should begin. This packet will also be yielded.
   * @param endTimestamp - (optional) The timestamp at which iteration should end. This packet will _not_ be yielded.
   */
  packets(e, t, r = {}) {
    if (e !== void 0 && !(e instanceof G))
      throw new TypeError("startPacket must be an EncodedPacket.");
    if (e !== void 0 && e.isMetadataOnly && !r?.metadataOnly)
      throw new TypeError("startPacket can only be metadata-only if options.metadataOnly is enabled.");
    if (t !== void 0 && !(t instanceof G))
      throw new TypeError("endPacket must be an EncodedPacket.");
    if (ut(r), this._track.input._disposed)
      throw new ye();
    const s = [];
    let { promise: n, resolve: a } = J(), { promise: o, resolve: c } = J(), l = !1, d = !1, u = null;
    const h = [], f = () => Math.max(2, h.length);
    (async () => {
      let m = e ?? await this.getFirstPacket(r);
      for (; m && !d && !this._track.input._disposed && !(t && m.sequenceNumber >= t?.sequenceNumber); ) {
        if (s.length > f()) {
          ({ promise: o, resolve: c } = J()), await o;
          continue;
        }
        s.push(m), a(), { promise: n, resolve: a } = J(), m = await this.getNextPacket(m, r);
      }
      l = !0, a();
    })().catch((m) => {
      u || (u = m, a());
    });
    const g = this._track;
    return {
      async next() {
        for (; ; ) {
          if (g.input._disposed)
            throw new ye();
          if (d)
            return { value: void 0, done: !0 };
          if (u)
            throw u;
          if (s.length > 0) {
            const m = s.shift(), w = performance.now();
            for (h.push(w); h.length > 0 && w - h[0] >= 1e3; )
              h.shift();
            return c(), { value: m, done: !1 };
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
      async throw(m) {
        throw m;
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
}
class $r {
  constructor(e, t) {
    this.onSample = e, this.onError = t;
  }
}
class Bn {
  /** @internal */
  mediaSamplesInRange(e = 0, t = 1 / 0) {
    Qe(e), Qe(t);
    const r = [];
    let s = !1, n = null, { promise: a, resolve: o } = J(), { promise: c, resolve: l } = J(), d = !1, u = !1, h = !1, f = null;
    (async () => {
      const w = await this._createDecoder((x) => {
        if (l(), x.timestamp >= t && (u = !0), u) {
          x.close();
          return;
        }
        n && (x.timestamp > e ? (r.push(n), s = !0) : n.close()), x.timestamp >= e && (r.push(x), s = !0), n = s ? null : x, r.length > 0 && (o(), { promise: a, resolve: o } = J());
      }, (x) => {
        f || (f = x, o());
      }), y = this._createPacketSink(), k = await y.getKeyPacket(e, { verifyKeyPackets: !0 }) ?? await y.getFirstKeyPacket({ verifyKeyPackets: !0 });
      let T = k;
      const P = y.packets(k ?? void 0, void 0);
      for (await P.next(); T && !u && !this._track.input._disposed; ) {
        const x = _s(r.length);
        if (r.length + w.getDecodeQueueSize() > x) {
          ({ promise: c, resolve: l } = J()), await c;
          continue;
        }
        w.decode(T);
        const C = await P.next();
        if (C.done)
          break;
        T = C.value;
      }
      await P.return(), !h && !this._track.input._disposed && await w.flush(), w.close(), !s && n && r.push(n), d = !0, o();
    })().catch((w) => {
      f || (f = w, o());
    });
    const g = this._track, m = () => {
      n?.close();
      for (const w of r)
        w.close();
    };
    return {
      async next() {
        for (; ; ) {
          if (g.input._disposed)
            throw m(), new ye();
          if (h)
            return { value: void 0, done: !0 };
          if (f)
            throw m(), f;
          if (r.length > 0) {
            const w = r.shift();
            return l(), { value: w, done: !1 };
          } else if (!d)
            await a;
          else
            return { value: void 0, done: !0 };
        }
      },
      async return() {
        return h = !0, u = !0, l(), o(), m(), { value: void 0, done: !0 };
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
    _a(e);
    const t = Ia(e), r = [], s = [];
    let { promise: n, resolve: a } = J(), { promise: o, resolve: c } = J(), l = !1, d = !1, u = null;
    const h = (m) => {
      s.push(m), a(), { promise: n, resolve: a } = J();
    };
    (async () => {
      const m = await this._createDecoder((x) => {
        if (c(), d) {
          x.close();
          return;
        }
        let C = 0;
        for (; r.length > 0 && x.timestamp - r[0] > -1e-10; )
          C++, r.shift();
        if (C > 0)
          for (let _ = 0; _ < C; _++)
            h(_ < C - 1 ? x.clone() : x);
        else
          x.close();
      }, (x) => {
        u || (u = x, a());
      }), w = this._createPacketSink();
      let y = null, k = null, T = -1;
      const S = async () => {
        p(k);
        let x = k;
        for (m.decode(x); x.sequenceNumber < T; ) {
          const C = _s(s.length);
          for (; s.length + m.getDecodeQueueSize() > C && !d; )
            ({ promise: o, resolve: c } = J()), await o;
          if (d)
            break;
          const _ = await w.getNextPacket(x);
          p(_), m.decode(_), x = _;
        }
        T = -1;
      }, P = async () => {
        await m.flush();
        for (let x = 0; x < r.length; x++)
          h(null);
        r.length = 0;
      };
      for await (const x of t) {
        if (Qe(x), d || this._track.input._disposed)
          break;
        const C = await w.getPacket(x), _ = C && await w.getKeyPacket(x, { verifyKeyPackets: !0 });
        if (!_) {
          T !== -1 && (await S(), await P()), h(null), y = null;
          continue;
        }
        y && (_.sequenceNumber !== k.sequenceNumber || C.timestamp < y.timestamp) && (await S(), await P()), r.push(C.timestamp), T = Math.max(C.sequenceNumber, T), y = C, k = _;
      }
      !d && !this._track.input._disposed && (T !== -1 && await S(), await P()), m.close(), l = !0, a();
    })().catch((m) => {
      u || (u = m, a());
    });
    const f = this._track, g = () => {
      for (const m of s)
        m?.close();
    };
    return {
      async next() {
        for (; ; ) {
          if (f.input._disposed)
            throw g(), new ye();
          if (d)
            return { value: void 0, done: !0 };
          if (u)
            throw g(), u;
          if (s.length > 0) {
            const m = s.shift();
            return p(m !== void 0), c(), { value: m, done: !1 };
          } else if (!l)
            await n;
          else
            return { value: void 0, done: !0 };
        }
      },
      async return() {
        return d = !0, c(), a(), g(), { value: void 0, done: !0 };
      },
      async throw(m) {
        throw m;
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
}
const _s = (i) => i === 0 ? 40 : 8;
class bo extends $r {
  constructor(e, t, r, s, n, a) {
    super(e, t), this.codec = r, this.decoderConfig = s, this.rotation = n, this.timeResolution = a, this.decoder = null, this.customDecoder = null, this.customDecoderCallSerializer = new Fi(), this.customDecoderQueueSize = 0, this.inputTimestamps = [], this.sampleQueue = [], this.currentPacketIndex = 0, this.raslSkipped = !1, this.alphaDecoder = null, this.alphaHadKeyframe = !1, this.colorQueue = [], this.alphaQueue = [], this.merger = null, this.mergerCreationFailed = !1, this.decodedAlphaChunkCount = 0, this.alphaDecoderQueueSize = 0, this.nullAlphaFrameQueue = [], this.currentAlphaPacketIndex = 0, this.alphaRaslSkipped = !1;
    const o = an.find((c) => c.supports(r, s));
    if (o)
      this.customDecoder = new o(), this.customDecoder.codec = r, this.customDecoder.config = s, this.customDecoder.onSample = (c) => {
        if (!(c instanceof Pe))
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
      if (r === "avc" && this.decoderConfig.description && nr()) {
        const d = kn(ee(this.decoderConfig.description));
        if (d && d.sequenceParameterSets.length > 0) {
          const u = qr(d.sequenceParameterSets[0]);
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
      if (p(this.decoder), bi() || ws(this.inputTimestamps, e.timestamp, (t) => t), nr() && this.currentPacketIndex === 0 && this.codec === "avc") {
        const t = [];
        for (const s of gn(e.data, this.decoderConfig)) {
          const n = Dt(e.data[s.offset]);
          n >= 20 && n <= 31 || t.push(e.data.subarray(s.offset, s.offset + s.length));
        }
        const r = Ja(t, this.decoderConfig);
        e = new G(r, e.type, e.timestamp, e.duration);
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
        this.merger = new yo();
      } catch (r) {
        console.error("Due to an error, only color data will be decoded.", r), this.mergerCreationFailed = !0, this.decodeAlphaData(e);
        return;
      }
    if (!this.alphaDecoder) {
      const r = (n) => {
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
            r(n);
          } catch (a) {
            this.onError(a);
          }
        },
        error: (n) => {
          n.stack = s, this.onError(n);
        }
      }), this.alphaDecoder.configure(this.decoderConfig);
    }
    const t = _n(this.codec, this.decoderConfig, e.sideData.alpha);
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
    for (const t of yn(e, this.decoderConfig)) {
      const r = kt(e[t.offset]);
      if (r === ie.RASL_N || r === ie.RASL_R)
        return !0;
    }
    return !1;
  }
  /** Handler for the WebCodecs VideoDecoder for ironing out browser differences. */
  sampleHandler(e) {
    if (bi()) {
      if (this.sampleQueue.length > 0 && e.timestamp >= Y(this.sampleQueue).timestamp) {
        for (const t of this.sampleQueue)
          this.finalizeAndEmitSample(t);
        this.sampleQueue.length = 0;
      }
      ws(this.sampleQueue, e, (t) => t.timestamp);
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
      const n = new Pe(e);
      this.sampleHandler(n);
      return;
    }
    p(this.merger), this.merger.update(e, t), e.close(), t.close();
    const r = new VideoFrame(this.merger.canvas, {
      timestamp: e.timestamp,
      duration: e.duration ?? void 0
    }), s = new Pe(r);
    this.sampleHandler(s);
  }
  async flush() {
    if (this.customDecoder ? await this.customDecoderCallSerializer.call(() => this.customDecoder.flush()) : (p(this.decoder), await Promise.all([
      this.decoder.flush(),
      this.alphaDecoder?.flush()
    ]), this.colorQueue.forEach((e) => e.close()), this.colorQueue.length = 0, this.alphaQueue.forEach((e) => e?.close()), this.alphaQueue.length = 0, this.alphaHadKeyframe = !1, this.decodedAlphaChunkCount = 0, this.alphaDecoderQueueSize = 0, this.nullAlphaFrameQueue.length = 0, this.currentAlphaPacketIndex = 0, this.alphaRaslSkipped = !1), bi()) {
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
class yo {
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
		`), r = this.gl.createProgram();
    return this.gl.attachShader(r, e), this.gl.attachShader(r, t), this.gl.linkProgram(r), r;
  }
  createShader(e, t) {
    const r = this.gl.createShader(e);
    return this.gl.shaderSource(r, t), this.gl.compileShader(r), r;
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
    ]), r = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, r), this.gl.bufferData(this.gl.ARRAY_BUFFER, t, this.gl.STATIC_DRAW);
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
class wr extends Bn {
  /** Creates a new {@link VideoSampleSink} for the given {@link InputVideoTrack}. */
  constructor(e) {
    if (!(e instanceof Ht))
      throw new TypeError("videoTrack must be an InputVideoTrack.");
    super(), this._track = e;
  }
  /** @internal */
  async _createDecoder(e, t) {
    if (!await this._track.canDecode())
      throw new Error("This video track cannot be decoded by this browser. Make sure to check decodability before using a track.");
    const r = this._track.codec, s = this._track.rotation, n = await this._track.getDecoderConfig(), a = this._track.timeResolution;
    return p(r && n), new bo(e, t, r, n, s, a);
  }
  /** @internal */
  _createPacketSink() {
    return new si(this._track);
  }
  /**
   * Retrieves the video sample (frame) corresponding to the given timestamp, in seconds. More specifically, returns
   * the last video sample (in presentation order) with a start timestamp less than or equal to the given timestamp.
   * Returns null if the timestamp is before the track's first timestamp.
   *
   * @param timestamp - The timestamp used for retrieval, in seconds.
   */
  async getSample(e) {
    Qe(e);
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
class To {
  /** Creates a new {@link CanvasSink} for the given {@link InputVideoTrack}. */
  constructor(e, t = {}) {
    if (this._nextCanvasIndex = 0, !(e instanceof Ht))
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
    if (t.crop !== void 0 && rn(t.crop, "options."), t.poolSize !== void 0 && (typeof t.poolSize != "number" || !Number.isInteger(t.poolSize) || t.poolSize < 0))
      throw new TypeError("poolSize must be a non-negative integer.");
    const r = t.rotation ?? e.rotation, [s, n] = r % 180 === 0 ? [e.squarePixelWidth, e.squarePixelHeight] : [e.squarePixelHeight, e.squarePixelWidth], a = t.crop;
    a && sn(a, s, n);
    let [o, c] = a ? [a.width, a.height] : [s, n];
    const l = o / c;
    t.width !== void 0 && t.height === void 0 ? (o = t.width, c = Math.round(o / l)) : t.width === void 0 && t.height !== void 0 ? (c = t.height, o = Math.round(c * l)) : t.width !== void 0 && t.height !== void 0 && (o = t.width, c = t.height), this._videoTrack = e, this._alpha = t.alpha ?? !1, this._width = o, this._height = c, this._rotation = r, this._crop = a, this._fit = t.fit ?? "fill", this._videoSampleSink = new wr(e), this._canvasPool = Array.from({ length: t.poolSize ?? 0 }, () => null);
  }
  /** @internal */
  _videoSampleToWrappedCanvas(e) {
    let t = this._canvasPool[this._nextCanvasIndex], r = !1;
    t || (typeof document < "u" ? (t = document.createElement("canvas"), t.width = this._width, t.height = this._height) : t = new OffscreenCanvas(this._width, this._height), this._canvasPool.length > 0 && (this._canvasPool[this._nextCanvasIndex] = t), r = !0), this._canvasPool.length > 0 && (this._nextCanvasIndex = (this._nextCanvasIndex + 1) % this._canvasPool.length);
    const s = t.getContext("2d", {
      alpha: this._alpha || ei()
      // Firefox has VideoFrame glitches with opaque canvases
    });
    p(s), s.resetTransform(), r || (!this._alpha && ei() ? (s.fillStyle = "black", s.fillRect(0, 0, this._width, this._height)) : s.clearRect(0, 0, this._width, this._height)), e.drawWithFit(s, {
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
    Qe(e);
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
    return Si(this._videoSampleSink.samples(e, t), (r) => this._videoSampleToWrappedCanvas(r));
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
    return Si(this._videoSampleSink.samplesAtTimestamps(e), (t) => t && this._videoSampleToWrappedCanvas(t));
  }
}
class So extends $r {
  constructor(e, t, r, s) {
    super(e, t), this.decoder = null, this.customDecoder = null, this.customDecoderCallSerializer = new Fi(), this.customDecoderQueueSize = 0, this.currentTimestamp = null;
    const n = (o) => {
      (this.currentTimestamp === null || Math.abs(o.timestamp - this.currentTimestamp) >= o.duration) && (this.currentTimestamp = o.timestamp);
      const c = this.currentTimestamp;
      if (this.currentTimestamp += o.duration, o.numberOfFrames === 0) {
        o.close();
        return;
      }
      const l = s.sampleRate;
      o.setTimestamp(Math.round(c * l) / l), e(o);
    }, a = nn.find((o) => o.supports(r, s));
    if (a)
      this.customDecoder = new a(), this.customDecoder.codec = r, this.customDecoder.config = s, this.customDecoder.onSample = (o) => {
        if (!(o instanceof ze))
          throw new TypeError("The argument passed to onSample must be an AudioSample.");
        n(o);
      }, this.customDecoderCallSerializer.call(() => this.customDecoder.init());
    else {
      const o = new Error("Decoding error").stack;
      this.decoder = new AudioDecoder({
        output: (c) => {
          try {
            n(new ze(c));
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
class xo extends $r {
  constructor(e, t, r) {
    super(e, t), this.decoderConfig = r, this.currentTimestamp = null, p(ne.includes(r.codec)), this.codec = r.codec;
    const { dataType: s, sampleSize: n, littleEndian: a } = Ue(this.codec);
    switch (this.inputSampleSize = n, n) {
      case 1:
        s === "unsigned" ? this.readInputValue = (o, c) => o.getUint8(c) - 2 ** 7 : s === "signed" ? this.readInputValue = (o, c) => o.getInt8(c) : s === "ulaw" ? this.readInputValue = (o, c) => go(o.getUint8(c)) : s === "alaw" ? this.readInputValue = (o, c) => ko(o.getUint8(c)) : p(!1);
        break;
      case 2:
        s === "unsigned" ? this.readInputValue = (o, c) => o.getUint16(c, a) - 2 ** 15 : s === "signed" ? this.readInputValue = (o, c) => o.getInt16(c, a) : p(!1);
        break;
      case 3:
        s === "unsigned" ? this.readInputValue = (o, c) => Rr(o, c, a) - 2 ** 23 : s === "signed" ? this.readInputValue = (o, c) => Ea(o, c, a) : p(!1);
        break;
      case 4:
        s === "unsigned" ? this.readInputValue = (o, c) => o.getUint32(c, a) - 2 ** 31 : s === "signed" ? this.readInputValue = (o, c) => o.getInt32(c, a) : s === "float" ? this.readInputValue = (o, c) => o.getFloat32(c, a) : p(!1);
        break;
      case 8:
        s === "float" ? this.readInputValue = (o, c) => o.getFloat64(c, a) : p(!1);
        break;
      default:
        fe(n), p(!1);
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
        fe(n), p(!1);
    }
  }
  getDecodeQueueSize() {
    return 0;
  }
  decode(e) {
    const t = H(e.data), r = e.byteLength / this.decoderConfig.numberOfChannels / this.inputSampleSize, s = r * this.decoderConfig.numberOfChannels * this.outputSampleSize, n = new ArrayBuffer(s), a = new DataView(n);
    for (let d = 0; d < r * this.decoderConfig.numberOfChannels; d++) {
      const u = d * this.inputSampleSize, h = d * this.outputSampleSize, f = this.readInputValue(t, u);
      this.writeOutputValue(a, h, f);
    }
    const o = r / this.decoderConfig.sampleRate;
    (this.currentTimestamp === null || Math.abs(e.timestamp - this.currentTimestamp) >= o) && (this.currentTimestamp = e.timestamp);
    const c = this.currentTimestamp;
    this.currentTimestamp += o;
    const l = new ze({
      format: this.outputFormat,
      data: n,
      numberOfChannels: this.decoderConfig.numberOfChannels,
      sampleRate: this.decoderConfig.sampleRate,
      numberOfFrames: r,
      timestamp: c
    });
    this.onSample(l);
  }
  async flush() {
  }
  close() {
  }
}
class kr extends Bn {
  /** Creates a new {@link AudioSampleSink} for the given {@link InputAudioTrack}. */
  constructor(e) {
    if (!(e instanceof Fe))
      throw new TypeError("audioTrack must be an InputAudioTrack.");
    super(), this._track = e;
  }
  /** @internal */
  async _createDecoder(e, t) {
    if (!await this._track.canDecode())
      throw new Error("This audio track cannot be decoded by this browser. Make sure to check decodability before using a track.");
    const r = this._track.codec, s = await this._track.getDecoderConfig();
    return p(r && s), ne.includes(s.codec) ? new xo(e, t, s) : new So(e, t, r, s);
  }
  /** @internal */
  _createPacketSink() {
    return new si(this._track);
  }
  /**
   * Retrieves the audio sample corresponding to the given timestamp, in seconds. More specifically, returns
   * the last audio sample (in presentation order) with a start timestamp less than or equal to the given timestamp.
   * Returns null if the timestamp is before the track's first timestamp.
   *
   * @param timestamp - The timestamp used for retrieval, in seconds.
   */
  async getSample(e) {
    Qe(e);
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
class Nd {
  /** Creates a new {@link AudioBufferSink} for the given {@link InputAudioTrack}. */
  constructor(e) {
    if (!(e instanceof Fe))
      throw new TypeError("audioTrack must be an InputAudioTrack.");
    this._audioSampleSink = new kr(e);
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
    Qe(e);
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
    return Si(this._audioSampleSink.samples(e, t), (r) => this._audioSampleToWrappedArrayBuffer(r));
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
    return Si(this._audioSampleSink.samplesAtTimestamps(e), (t) => t && this._audioSampleToWrappedArrayBuffer(t));
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Kr {
  /** @internal */
  constructor(e, t) {
    this.input = e, this._backing = t;
  }
  /** Returns true if and only if this track is a video track. */
  isVideoTrack() {
    return this instanceof Ht;
  }
  /** Returns true if and only if this track is an audio track. */
  isAudioTrack() {
    return this instanceof Fe;
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
    const t = new si(this);
    let r = 1 / 0, s = -1 / 0, n = 0, a = 0;
    for await (const o of t.packets(void 0, void 0, { metadataOnly: !0 })) {
      if (n >= e && o.timestamp >= s)
        break;
      r = Math.min(r, o.timestamp), s = Math.max(s, o.timestamp + o.duration), n++, a += o.byteLength;
    }
    return {
      packetCount: n,
      averagePacketRate: n ? Number((n / (s - r)).toPrecision(16)) : 0,
      averageBitrate: n ? Number((8 * a / (s - r)).toPrecision(16)) : 0
    };
  }
}
class Ht extends Kr {
  /** @internal */
  constructor(e, t) {
    super(e, t), this._backing = t, this.pixelAspectRatio = Mr({
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
      return p(t !== null), an.some((s) => s.supports(t, e)) ? !0 : typeof VideoDecoder > "u" ? !1 : (await VideoDecoder.isConfigSupported(e)).supported === !0;
    } catch (e) {
      return console.error("Error during decodability check:", e), !1;
    }
  }
  async determinePacketType(e) {
    if (!(e instanceof G))
      throw new TypeError("packet must be an EncodedPacket.");
    if (e.isMetadataOnly)
      throw new TypeError("packet must not be metadata-only to determine its type.");
    if (this.codec === null)
      return null;
    const t = await this.getDecoderConfig();
    return p(t), _n(this.codec, t, e.data);
  }
}
class Fe extends Kr {
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
      return p(t !== null), nn.some((r) => r.supports(t, e)) || e.codec.startsWith("pcm-") ? !0 : typeof AudioDecoder > "u" ? !1 : (await AudioDecoder.isConfigSupported(e)).supported === !0;
    } catch (e) {
      return console.error("Error during decodability check:", e), !1;
    }
  }
  async determinePacketType(e) {
    if (!(e instanceof G))
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
const Rn = (i) => {
  let t = (i.hasVideo ? "video/" : i.hasAudio ? "audio/" : "application/") + (i.isQuickTime ? "quicktime" : "mp4");
  if (i.codecStrings.length > 0) {
    const r = [...new Set(i.codecStrings)];
    t += `; codecs="${r.join(", ")}"`;
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
const We = 8, pt = 16, it = (i) => {
  let e = A(i);
  const t = oe(i, 4);
  let r = 8;
  e === 1 && (e = Ee(i), r = 16);
  const n = e - r;
  return n < 0 ? null : { name: t, totalSize: e, headerSize: r, contentSize: n };
}, ht = (i) => wt(i) / 65536, Hi = (i) => wt(i) / 1073741824, qi = (i) => {
  let e = 0;
  for (let t = 0; t < 4; t++) {
    e <<= 7;
    const r = B(i);
    if (e |= r & 127, (r & 128) === 0)
      break;
  }
  return e;
}, Be = (i) => {
  let e = ae(i);
  return i.skip(2), e = Math.min(e, i.remainingLength), _e.decode(D(i, e));
}, Po = (i) => {
  const e = it(i);
  if (!e || e.name !== "data" || i.remainingLength < 8)
    return null;
  const t = A(i);
  i.skip(4);
  const r = D(i, e.contentSize - 8);
  switch (t) {
    case 1:
      return _e.decode(r);
    // UTF-8
    case 2:
      return new TextDecoder("utf-16be").decode(r);
    // UTF-16-BE
    case 13:
      return new Bt(r, "image/jpeg");
    case 14:
      return new Bt(r, "image/png");
    case 27:
      return new Bt(r, "image/bmp");
    default:
      return r;
  }
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class Co extends lt {
  constructor(e) {
    super(e), this.moovSlice = null, this.currentTrack = null, this.tracks = [], this.metadataPromise = null, this.movieTimescale = -1, this.movieDurationInTimescale = -1, this.isQuickTime = !1, this.metadataTags = {}, this.currentMetadataKeys = null, this.isFragmented = !1, this.fragmentTrackDefaults = [], this.currentFragment = null, this.lastReadFragment = null, this.reader = e._reader;
  }
  async computeDuration() {
    const e = await this.getTracks(), t = await Promise.all(e.map((r) => r.computeDuration()));
    return Math.max(0, ...t);
  }
  async getTracks() {
    return await this.readMetadata(), this.tracks.map((e) => e.inputTrack);
  }
  async getMimeType() {
    await this.readMetadata();
    const e = await Promise.all(this.tracks.map((t) => t.inputTrack.getCodecParameterString()));
    return Rn({
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
        let t = this.reader.requestSliceRange(e, We, pt);
        if (t instanceof Promise && (t = await t), !t)
          break;
        const r = e, s = it(t);
        if (!s)
          break;
        if (s.name === "ftyp") {
          const n = oe(t, 4);
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
        e = r + s.totalSize;
      }
      if (this.isFragmented && this.reader.fileSize !== null) {
        let t = this.reader.requestSlice(this.reader.fileSize - 4, 4);
        t instanceof Promise && (t = await t), p(t);
        const r = A(t), s = this.reader.fileSize - r;
        if (s >= 0 && s <= this.reader.fileSize - pt) {
          let n = this.reader.requestSliceRange(s, We, pt);
          if (n instanceof Promise && (n = await n), n) {
            const a = it(n);
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
    const r = this.moovSlice.slice(e.sampleTableByteOffset);
    if (this.currentTrack = e, this.traverseBox(r), this.currentTrack = null, e.info?.type === "audio" && e.info.codec && ne.includes(e.info.codec) && t.sampleCompositionTimeOffsets.length === 0) {
      p(e.info?.type === "audio");
      const n = Ue(e.info.codec), a = [], o = [];
      for (let c = 0; c < t.sampleToChunk.length; c++) {
        const l = t.sampleToChunk[c], d = t.sampleToChunk[c + 1], u = (d ? d.startChunkIndex : t.chunkOffsets.length) - l.startChunkIndex;
        for (let h = 0; h < u; h++) {
          const f = l.startSampleIndex + h * l.samplesPerChunk, g = f + l.samplesPerChunk, m = Q(t.sampleTimingEntries, f, (_) => _.startIndex), w = t.sampleTimingEntries[m], y = Q(t.sampleTimingEntries, g, (_) => _.startIndex), k = t.sampleTimingEntries[y], T = w.startDecodeTimestamp + (f - w.startIndex) * w.delta, P = k.startDecodeTimestamp + (g - k.startIndex) * k.delta - T, x = Y(a);
          x && x.delta === P ? x.count++ : a.push({
            startIndex: l.startChunkIndex + h,
            startDecodeTimestamp: T,
            count: 1,
            delta: P
          });
          const C = l.samplesPerChunk * n.sampleSize * e.info.numberOfChannels;
          o.push(C);
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
    let t = this.reader.requestSliceRange(e, We, pt);
    t instanceof Promise && (t = await t), p(t);
    const r = it(t);
    p(r?.name === "moof");
    let s = this.reader.requestSlice(e, r.totalSize);
    s instanceof Promise && (s = await s), p(s), this.traverseBox(s);
    const n = this.lastReadFragment;
    p(n && n.moofOffset === e);
    for (const [, a] of n.trackData) {
      const o = a.track, { fragmentPositionCache: c } = o;
      if (!a.startTimestampIsFinal) {
        const d = o.fragmentLookupTable.find((u) => u.moofOffset === n.moofOffset);
        if (d)
          ji(a, d.timestamp);
        else {
          const u = Q(c, n.moofOffset - 1, (h) => h.moofOffset);
          if (u !== -1) {
            const h = c[u];
            ji(a, h.endTimestamp);
          }
        }
        a.startTimestampIsFinal = !0;
      }
      const l = Q(c, a.startTimestamp, (d) => d.startTimestamp);
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
    for (; e.filePos - t <= e.length - We && this.traverseBox(e); )
      ;
  }
  // eslint-disable-next-line @stylistic/generator-star-spacing
  *iterateContiguousBoxes(e) {
    const t = e.filePos;
    for (; e.filePos - t <= e.length - We; ) {
      const r = e.filePos, s = it(e);
      if (!s)
        break;
      yield { boxInfo: s, slice: e }, e.filePos = r + s.totalSize;
    }
  }
  traverseBox(e) {
    const t = e.filePos, r = it(e);
    if (!r)
      return !1;
    const s = e.filePos, n = t + r.totalSize;
    switch (r.name) {
      case "mdia":
      case "minf":
      case "dinf":
      case "mfra":
      case "edts":
        this.readContiguousBoxes(e.slice(s, r.contentSize));
        break;
      case "mvhd":
        {
          const a = B(e);
          e.skip(3), a === 1 ? (e.skip(16), this.movieTimescale = A(e), this.movieDurationInTimescale = Ee(e)) : (e.skip(8), this.movieTimescale = A(e), this.movieDurationInTimescale = A(e));
        }
        break;
      case "trak":
        {
          const a = {
            id: -1,
            demuxer: this,
            inputTrack: null,
            disposition: {
              ...ct
            },
            info: null,
            timescale: -1,
            durationInMovieTimescale: -1,
            durationInMediaTimescale: -1,
            rotation: 0,
            internalCodecId: null,
            name: null,
            languageCode: he,
            sampleTableByteOffset: -1,
            sampleTable: null,
            fragmentLookupTable: [],
            currentFragmentState: null,
            fragmentPositionCache: [],
            editListPreviousSegmentDurations: 0,
            editListOffset: 0
          };
          if (this.currentTrack = a, this.readContiguousBoxes(e.slice(s, r.contentSize)), a.id !== -1 && a.timescale !== -1 && a.info !== null) {
            if (a.info.type === "video" && a.info.width !== -1) {
              const o = a;
              a.inputTrack = new Ht(this.input, new _o(o)), this.tracks.push(a);
            } else if (a.info.type === "audio" && a.info.numberOfChannels !== -1) {
              const o = a;
              a.inputTrack = new Fe(this.input, new Io(o)), this.tracks.push(a);
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
          const o = B(e), l = !!(Et(e) & 1);
          if (a.disposition.default = l, o === 0)
            e.skip(8), a.id = A(e), e.skip(4), a.durationInMovieTimescale = A(e);
          else if (o === 1)
            e.skip(16), a.id = A(e), e.skip(4), a.durationInMovieTimescale = Ee(e);
          else
            throw new Error(`Incorrect track header version ${o}.`);
          e.skip(2 * 4 + 2 + 2 + 2 + 2);
          const d = [
            ht(e),
            ht(e),
            Hi(e),
            ht(e),
            ht(e),
            Hi(e),
            ht(e),
            ht(e),
            Hi(e)
          ], u = Bi(ar(Fo(d), 90));
          p(u === 0 || u === 90 || u === 180 || u === 270), a.rotation = u;
        }
        break;
      case "elst":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          const o = B(e);
          e.skip(3);
          let c = !1, l = 0;
          const d = A(e);
          for (let u = 0; u < d; u++) {
            const h = o === 1 ? Ee(e) : A(e), f = o === 1 ? vc(e) : wt(e), g = ht(e);
            if (h !== 0) {
              if (c) {
                console.warn("Unsupported edit list: multiple edits are not currently supported. Only using first edit.");
                break;
              }
              if (f === -1) {
                l += h;
                continue;
              }
              if (g !== 1) {
                console.warn("Unsupported edit list entry: media rate must be 1.");
                break;
              }
              a.editListPreviousSegmentDurations = l, a.editListOffset = f, c = !0;
            }
          }
        }
        break;
      case "mdhd":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          const o = B(e);
          e.skip(3), o === 0 ? (e.skip(8), a.timescale = A(e), a.durationInMediaTimescale = A(e)) : o === 1 && (e.skip(16), a.timescale = A(e), a.durationInMediaTimescale = Ee(e));
          let c = ae(e);
          if (c > 0) {
            a.languageCode = "";
            for (let l = 0; l < 3; l++)
              a.languageCode = String.fromCharCode(96 + (c & 31)) + a.languageCode, c >>= 5;
            ti(a.languageCode) || (a.languageCode = he);
          }
        }
        break;
      case "hdlr":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          e.skip(8);
          const o = oe(e, 4);
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
          a.sampleTableByteOffset = t, this.readContiguousBoxes(e.slice(s, r.contentSize));
        }
        break;
      case "stsd":
        {
          const a = this.currentTrack;
          if (!a || a.info === null || a.sampleTable)
            break;
          const o = B(e);
          e.skip(3);
          const c = A(e);
          for (let l = 0; l < c; l++) {
            const d = e.filePos, u = it(e);
            if (!u)
              break;
            a.internalCodecId = u.name;
            const h = u.name.toLowerCase();
            if (a.info.type === "video")
              h === "avc1" || h === "avc3" ? (a.info.codec = "avc", a.info.avcType = h === "avc1" ? 1 : 3) : h === "hvc1" || h === "hev1" ? a.info.codec = "hevc" : h === "vp08" ? a.info.codec = "vp8" : h === "vp09" ? a.info.codec = "vp9" : h === "av01" ? a.info.codec = "av1" : console.warn(`Unsupported video codec (sample entry type '${u.name}').`), e.skip(6 * 1 + 2 + 2 + 2 + 3 * 4), a.info.width = ae(e), a.info.height = ae(e), a.info.squarePixelWidth = a.info.width, a.info.squarePixelHeight = a.info.height, e.skip(50), this.readContiguousBoxes(e.slice(e.filePos, d + u.totalSize - e.filePos));
            else {
              h === "mp4a" || (h === "opus" ? a.info.codec = "opus" : h === "flac" ? a.info.codec = "flac" : h === "twos" || h === "sowt" || h === "raw " || h === "in24" || h === "in32" || h === "fl32" || h === "fl64" || h === "lpcm" || h === "ipcm" || h === "fpcm" || (h === "ulaw" ? a.info.codec = "ulaw" : h === "alaw" ? a.info.codec = "alaw" : h === "ac-3" ? a.info.codec = "ac3" : h === "ec-3" ? a.info.codec = "eac3" : console.warn(`Unsupported audio codec (sample entry type '${u.name}').`))), e.skip(6 * 1 + 2);
              const f = ae(e);
              e.skip(3 * 2);
              let g = ae(e), m = ae(e);
              e.skip(2 * 2);
              let w = A(e) / 65536;
              if (o === 0 && f > 0) {
                if (f === 1)
                  e.skip(4), m = 8 * A(e), e.skip(2 * 4);
                else if (f === 2) {
                  e.skip(4), w = ea(e), g = A(e), e.skip(4), m = A(e);
                  const y = A(e);
                  if (e.skip(2 * 4), h === "lpcm") {
                    const k = m + 7 >> 3, T = !!(y & 1), S = !!(y & 2), P = y & 4 ? -1 : 0;
                    m > 0 && m <= 64 && (T ? m === 32 && (a.info.codec = S ? "pcm-f32be" : "pcm-f32") : P & 1 << k - 1 ? k === 1 ? a.info.codec = "pcm-s8" : k === 2 ? a.info.codec = S ? "pcm-s16be" : "pcm-s16" : k === 3 ? a.info.codec = S ? "pcm-s24be" : "pcm-s24" : k === 4 && (a.info.codec = S ? "pcm-s32be" : "pcm-s32") : k === 1 && (a.info.codec = "pcm-u8")), a.info.codec === null && console.warn("Unsupported PCM format.");
                  }
                }
              }
              a.info.codec === "opus" && (w = Lt), a.info.numberOfChannels = g, a.info.sampleRate = w, h === "twos" ? m === 8 ? a.info.codec = "pcm-s8" : m === 16 ? a.info.codec = "pcm-s16be" : (console.warn(`Unsupported sample size ${m} for codec 'twos'.`), a.info.codec = null) : h === "sowt" ? m === 8 ? a.info.codec = "pcm-s8" : m === 16 ? a.info.codec = "pcm-s16" : (console.warn(`Unsupported sample size ${m} for codec 'sowt'.`), a.info.codec = null) : h === "raw " ? a.info.codec = "pcm-u8" : h === "in24" ? a.info.codec = "pcm-s24be" : h === "in32" ? a.info.codec = "pcm-s32be" : h === "fl32" ? a.info.codec = "pcm-f32be" : h === "fl64" ? a.info.codec = "pcm-f64be" : h === "ipcm" ? a.info.codec = "pcm-s16be" : h === "fpcm" && (a.info.codec = "pcm-f32be"), this.readContiguousBoxes(e.slice(e.filePos, d + u.totalSize - e.filePos));
            }
          }
        }
        break;
      case "avcC":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info), a.info.codecDescription = D(e, r.contentSize);
        }
        break;
      case "hvcC":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info), a.info.codecDescription = D(e, r.contentSize);
        }
        break;
      case "vpcC":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "video"), e.skip(4);
          const o = B(e), c = B(e), l = B(e), d = l >> 4, u = l >> 1 & 7, h = l & 1, f = B(e), g = B(e), m = B(e);
          a.info.vp9CodecInfo = {
            profile: o,
            level: c,
            bitDepth: d,
            chromaSubsampling: u,
            videoFullRangeFlag: h,
            colourPrimaries: f,
            transferCharacteristics: g,
            matrixCoefficients: m
          };
        }
        break;
      case "av1C":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "video"), e.skip(1);
          const o = B(e), c = o >> 5, l = o & 31, d = B(e), u = d >> 7, h = d >> 6 & 1, f = d >> 5 & 1, g = d >> 4 & 1, m = d >> 3 & 1, w = d >> 2 & 1, y = d & 3, k = c === 2 && h ? f ? 12 : 10 : h ? 10 : 8;
          a.info.av1CodecInfo = {
            profile: c,
            level: l,
            tier: u,
            bitDepth: k,
            monochrome: g,
            chromaSubsamplingX: m,
            chromaSubsamplingY: w,
            chromaSamplePosition: y
          };
        }
        break;
      case "colr":
        {
          const a = this.currentTrack;
          if (!a || (p(a.info?.type === "video"), oe(e, 4) !== "nclx"))
            break;
          const c = ae(e), l = ae(e), d = ae(e), u = !!(B(e) & 128);
          a.info.colorSpace = {
            primaries: Ci[c],
            transfer: Pi[l],
            matrix: xi[d],
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
        this.readContiguousBoxes(e.slice(s, r.contentSize));
        break;
      case "esds":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "audio"), e.skip(4);
          const o = B(e);
          p(o === 3), qi(e), e.skip(2);
          const c = B(e), l = (c & 128) !== 0, d = (c & 64) !== 0, u = (c & 32) !== 0;
          if (l && e.skip(2), d) {
            const w = B(e);
            e.skip(w);
          }
          u && e.skip(2);
          const h = B(e);
          p(h === 4);
          const f = qi(e), g = e.filePos, m = B(e);
          if (m === 64 || m === 103 ? (a.info.codec = "aac", a.info.aacCodecInfo = {
            isMpeg2: m === 103,
            objectType: null
          }) : m === 105 || m === 107 ? a.info.codec = "mp3" : m === 221 ? a.info.codec = "vorbis" : console.warn(`Unsupported audio codec (objectTypeIndication ${m}) - discarding track.`), e.skip(12), f > e.filePos - g) {
            const w = B(e);
            p(w === 5);
            const y = qi(e);
            if (a.info.codecDescription = D(e, y), a.info.codec === "aac") {
              const k = ui(a.info.codecDescription);
              k.numberOfChannels !== null && (a.info.numberOfChannels = k.numberOfChannels), k.sampleRate !== null && (a.info.sampleRate = k.sampleRate);
            }
          }
        }
        break;
      case "enda":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "audio"), ae(e) & 255 && (a.info.codec === "pcm-s16be" ? a.info.codec = "pcm-s16" : a.info.codec === "pcm-s24be" ? a.info.codec = "pcm-s24" : a.info.codec === "pcm-s32be" ? a.info.codec = "pcm-s32" : a.info.codec === "pcm-f32be" ? a.info.codec = "pcm-f32" : a.info.codec === "pcm-f64be" && (a.info.codec = "pcm-f64"));
        }
        break;
      case "pcmC": {
        const a = this.currentTrack;
        if (!a)
          break;
        p(a.info?.type === "audio"), e.skip(4);
        const c = !!(B(e) & 1), l = B(e);
        a.info.codec === "pcm-s16be" ? c ? l === 16 ? a.info.codec = "pcm-s16" : l === 24 ? a.info.codec = "pcm-s24" : l === 32 ? a.info.codec = "pcm-s32" : (console.warn(`Invalid ipcm sample size ${l}.`), a.info.codec = null) : l === 16 ? a.info.codec = "pcm-s16be" : l === 24 ? a.info.codec = "pcm-s24be" : l === 32 ? a.info.codec = "pcm-s32be" : (console.warn(`Invalid ipcm sample size ${l}.`), a.info.codec = null) : a.info.codec === "pcm-f32be" && (c ? l === 32 ? a.info.codec = "pcm-f32" : l === 64 ? a.info.codec = "pcm-f64" : (console.warn(`Invalid fpcm sample size ${l}.`), a.info.codec = null) : l === 32 ? a.info.codec = "pcm-f32be" : l === 64 ? a.info.codec = "pcm-f64be" : (console.warn(`Invalid fpcm sample size ${l}.`), a.info.codec = null));
        break;
      }
      case "dOps":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "audio"), e.skip(1);
          const o = B(e), c = ae(e), l = A(e), d = _r(e), u = B(e);
          let h;
          u !== 0 ? h = D(e, 2 + o) : h = new Uint8Array(0);
          const f = new Uint8Array(19 + h.byteLength), g = new DataView(f.buffer);
          g.setUint32(0, 1332770163, !1), g.setUint32(4, 1214603620, !1), g.setUint8(8, 1), g.setUint8(9, o), g.setUint16(10, c, !0), g.setUint32(12, l, !0), g.setInt16(16, d, !0), g.setUint8(18, u), f.set(h, 19), a.info.codecDescription = f, a.info.numberOfChannels = o;
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
            const g = B(e), m = Et(e);
            if ((g & o) === je.STREAMINFO) {
              e.skip(10);
              const y = A(e), k = y >>> 12, T = (y >> 9 & 7) + 1;
              a.info.sampleRate = k, a.info.numberOfChannels = T, e.skip(20);
            } else
              e.skip(m);
            if (g & c)
              break;
          }
          const d = e.filePos;
          e.filePos = l;
          const u = D(e, d - l), h = new Uint8Array(4 + u.byteLength);
          new DataView(h.buffer).setUint32(0, 1716281667, !1), h.set(u, 4), a.info.codecDescription = h;
        }
        break;
      case "dac3":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "audio");
          const o = D(e, 3), c = new O(o), l = c.readBits(2);
          c.skipBits(8);
          const d = c.readBits(3), u = c.readBits(1);
          l < 3 && (a.info.sampleRate = Di[l]), a.info.numberOfChannels = Qr[d] + u;
        }
        break;
      case "dec3":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.info?.type === "audio");
          const o = D(e, r.contentSize), c = mo(o);
          if (!c) {
            console.warn("Invalid dec3 box contents, ignoring.");
            break;
          }
          const l = An(c);
          l !== null && (a.info.sampleRate = l), a.info.numberOfChannels = Fn(c);
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
            const d = A(e), u = wt(e);
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
          const o = B(e), c = A(e), l = D(e, Math.ceil(c * o / 8)), d = new O(l);
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
            const l = Ee(e);
            a.sampleTable.chunkOffsets.push(l);
          }
        }
        break;
      case "mvex":
        this.isFragmented = !0, this.readContiguousBoxes(e.slice(s, r.contentSize));
        break;
      case "mehd":
        {
          const a = B(e);
          e.skip(3);
          const o = a === 1 ? Ee(e) : A(e);
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
          const a = B(e);
          e.skip(3);
          const o = A(e), c = this.tracks.find((k) => k.id === o);
          if (!c)
            break;
          const l = A(e), d = (l & 48) >> 4, u = (l & 12) >> 2, h = l & 3, f = [B, ae, Et, A], g = f[d], m = f[u], w = f[h], y = A(e);
          for (let k = 0; k < y; k++) {
            const T = a === 1 ? Ee(e) : A(e), S = a === 1 ? Ee(e) : A(e);
            g(e), m(e), w(e), c.fragmentLookupTable.push({
              timestamp: T,
              moofOffset: S
            });
          }
          c.fragmentLookupTable.sort((k, T) => k.timestamp - T.timestamp);
          for (let k = 0; k < c.fragmentLookupTable.length - 1; k++) {
            const T = c.fragmentLookupTable[k], S = c.fragmentLookupTable[k + 1];
            T.timestamp === S.timestamp && (c.fragmentLookupTable.splice(k + 1, 1), k--);
          }
        }
        break;
      case "moof":
        this.currentFragment = {
          moofOffset: t,
          moofSize: r.totalSize,
          implicitBaseDataOffset: t,
          trackData: /* @__PURE__ */ new Map()
        }, this.readContiguousBoxes(e.slice(s, r.contentSize)), this.lastReadFragment = this.currentFragment, this.currentFragment = null;
        break;
      case "traf":
        if (p(this.currentFragment), this.readContiguousBoxes(e.slice(s, r.contentSize)), this.currentTrack) {
          const a = this.currentFragment.trackData.get(this.currentTrack.id);
          if (a) {
            const { currentFragmentState: o } = this.currentTrack;
            p(o), o.startTimestamp !== null && (ji(a, o.startTimestamp), a.startTimestampIsFinal = !0);
          }
          this.currentTrack.currentFragmentState = null, this.currentTrack = null;
        }
        break;
      case "tfhd":
        {
          p(this.currentFragment), e.skip(1);
          const a = Et(e), o = !!(a & 1), c = !!(a & 2), l = !!(a & 8), d = !!(a & 16), u = !!(a & 32), h = !!(a & 65536), f = !!(a & 131072), g = A(e), m = this.tracks.find((y) => y.id === g);
          if (!m)
            break;
          const w = this.fragmentTrackDefaults.find((y) => y.trackId === g);
          this.currentTrack = m, m.currentFragmentState = {
            baseDataOffset: this.currentFragment.implicitBaseDataOffset,
            sampleDescriptionIndex: w?.defaultSampleDescriptionIndex ?? null,
            defaultSampleDuration: w?.defaultSampleDuration ?? null,
            defaultSampleSize: w?.defaultSampleSize ?? null,
            defaultSampleFlags: w?.defaultSampleFlags ?? null,
            startTimestamp: null
          }, o ? m.currentFragmentState.baseDataOffset = Ee(e) : f && (m.currentFragmentState.baseDataOffset = this.currentFragment.moofOffset), c && (m.currentFragmentState.sampleDescriptionIndex = A(e)), l && (m.currentFragmentState.defaultSampleDuration = A(e)), d && (m.currentFragmentState.defaultSampleSize = A(e)), u && (m.currentFragmentState.defaultSampleFlags = A(e)), h && (m.currentFragmentState.defaultSampleDuration = 0);
        }
        break;
      case "tfdt":
        {
          const a = this.currentTrack;
          if (!a)
            break;
          p(a.currentFragmentState);
          const o = B(e);
          e.skip(3);
          const c = o === 0 ? A(e) : Ee(e);
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
          const o = B(e), c = Et(e), l = !!(c & 1), d = !!(c & 4), u = !!(c & 256), h = !!(c & 512), f = !!(c & 1024), g = !!(c & 2048), m = A(e);
          let w = a.currentFragmentState.baseDataOffset;
          l && (w += wt(e));
          let y = null;
          d && (y = A(e));
          let k = w;
          if (m === 0) {
            this.currentFragment.implicitBaseDataOffset = k;
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
          for (let C = 0; C < m; C++) {
            let _;
            u ? _ = A(e) : (p(a.currentFragmentState.defaultSampleDuration !== null), _ = a.currentFragmentState.defaultSampleDuration);
            let E;
            h ? E = A(e) : (p(a.currentFragmentState.defaultSampleSize !== null), E = a.currentFragmentState.defaultSampleSize);
            let N;
            f ? N = A(e) : (p(a.currentFragmentState.defaultSampleFlags !== null), N = a.currentFragmentState.defaultSampleFlags), C === 0 && y !== null && (N = y);
            let U = 0;
            g && (o === 0 ? U = A(e) : U = wt(e));
            const F = !(N & 65536);
            S.samples.push({
              presentationTimestamp: T + U,
              duration: _,
              byteOffset: k,
              byteSize: E,
              isKeyFrame: F
            }), k += E, T += _;
          }
          S.presentationTimestamps = S.samples.map((C, _) => ({ presentationTimestamp: C.presentationTimestamp, sampleIndex: _ })).sort((C, _) => C.presentationTimestamp - _.presentationTimestamp);
          for (let C = 0; C < S.presentationTimestamps.length; C++) {
            const _ = S.presentationTimestamps[C], E = S.samples[_.sampleIndex];
            if (S.firstKeyFrameTimestamp === null && E.isKeyFrame && (S.firstKeyFrameTimestamp = E.presentationTimestamp), C < S.presentationTimestamps.length - 1) {
              const N = S.presentationTimestamps[C + 1];
              E.duration = N.presentationTimestamp - _.presentationTimestamp;
            }
          }
          const P = S.samples[S.presentationTimestamps[0].sampleIndex], x = S.samples[Y(S.presentationTimestamps).sampleIndex];
          S.startTimestamp = P.presentationTimestamp, S.endTimestamp = x.presentationTimestamp + x.duration, this.currentFragment.implicitBaseDataOffset = k;
        }
        break;
      // Metadata section
      // https://exiftool.org/TagNames/QuickTime.html
      // https://mp4workshop.com/about
      case "udta":
        {
          const a = this.iterateContiguousBoxes(e.slice(s, r.contentSize));
          for (const { boxInfo: o, slice: c } of a) {
            if (o.name !== "meta" && !this.currentTrack) {
              const l = c.filePos;
              this.metadataTags.raw ??= {}, o.name[0] === "©" ? this.metadataTags.raw[o.name] ??= Be(c) : this.metadataTags.raw[o.name] ??= D(c, o.contentSize), c.filePos = l;
            }
            switch (o.name) {
              case "meta":
                c.skip(-o.headerSize), this.traverseBox(c);
                break;
              case "©nam":
              case "name":
                this.currentTrack ? this.currentTrack.name = _e.decode(D(c, o.contentSize)) : this.metadataTags.title ??= Be(c);
                break;
              case "©des":
                this.currentTrack || (this.metadataTags.description ??= Be(c));
                break;
              case "©ART":
                this.currentTrack || (this.metadataTags.artist ??= Be(c));
                break;
              case "©alb":
                this.currentTrack || (this.metadataTags.album ??= Be(c));
                break;
              case "albr":
                this.currentTrack || (this.metadataTags.albumArtist ??= Be(c));
                break;
              case "©gen":
                this.currentTrack || (this.metadataTags.genre ??= Be(c));
                break;
              case "©day":
                if (!this.currentTrack) {
                  const l = new Date(Be(c));
                  Number.isNaN(l.getTime()) || (this.metadataTags.date ??= l);
                }
                break;
              case "©cmt":
                this.currentTrack || (this.metadataTags.comment ??= Be(c));
                break;
              case "©lyr":
                this.currentTrack || (this.metadataTags.lyrics ??= Be(c));
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
          this.currentMetadataKeys = /* @__PURE__ */ new Map(), o ? this.readContiguousBoxes(e.slice(s, r.contentSize)) : this.readContiguousBoxes(e.slice(s + 4, r.contentSize - 4)), this.currentMetadataKeys = null;
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
            const l = _e.decode(D(e, c - 8));
            this.currentMetadataKeys.set(o + 1, l);
          }
        }
        break;
      case "ilst":
        {
          if (!this.currentMetadataKeys)
            break;
          const a = this.iterateContiguousBoxes(e.slice(s, r.contentSize));
          for (const { boxInfo: o, slice: c } of a) {
            let l = o.name;
            const d = (l.charCodeAt(0) << 24) + (l.charCodeAt(1) << 16) + (l.charCodeAt(2) << 8) + l.charCodeAt(3);
            this.currentMetadataKeys.has(d) && (l = this.currentMetadataKeys.get(d));
            const u = Po(c);
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
                u instanceof Bt ? (this.metadataTags.images ??= [], this.metadataTags.images.push({
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
                  const h = u.split("/"), f = Number.parseInt(h[0], 10), g = h[1] && Number.parseInt(h[1], 10);
                  Number.isInteger(f) && f > 0 && (this.metadataTags.trackNumber ??= f), g && Number.isInteger(g) && g > 0 && (this.metadataTags.tracksTotal ??= g);
                }
                break;
              case "trkn":
                if (u instanceof Uint8Array && u.length >= 6) {
                  const h = H(u), f = h.getUint16(2, !1), g = h.getUint16(4, !1);
                  f > 0 && (this.metadataTags.trackNumber ??= f), g > 0 && (this.metadataTags.tracksTotal ??= g);
                }
                break;
              case "disc":
              case "disk":
                if (u instanceof Uint8Array && u.length >= 6) {
                  const h = H(u), f = h.getUint16(2, !1), g = h.getUint16(4, !1);
                  f > 0 && (this.metadataTags.discNumber ??= f), g > 0 && (this.metadataTags.discsTotal ??= g);
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
class Mn {
  constructor(e) {
    this.internalTrack = e, this.packetToSampleIndex = /* @__PURE__ */ new WeakMap(), this.packetToFragmentLocation = /* @__PURE__ */ new WeakMap();
  }
  getId() {
    return this.internalTrack.id;
  }
  getNumber() {
    const e = this.internalTrack.demuxer, r = this.internalTrack.inputTrack.type;
    let s = 0;
    for (const n of e.tracks)
      if (n.inputTrack.type === r && s++, n === this.internalTrack)
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
      (r) => r.trackData.get(this.internalTrack.id) ? {
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
    return ii(e * this.internalTrack.timescale) + this.internalTrack.editListOffset;
  }
  async getPacket(e, t) {
    const r = this.mapTimestampIntoTimescale(e), s = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), n = br(s, r), a = await this.fetchPacketForSampleIndex(n, t);
    return !Is(s) || !this.internalTrack.demuxer.isFragmented ? a : this.performFragmentedLookup(null, (o) => {
      const c = o.trackData.get(this.internalTrack.id);
      if (!c)
        return { sampleIndex: -1, correctSampleFound: !1 };
      const l = Q(c.presentationTimestamps, r, (h) => h.presentationTimestamp), d = l !== -1 ? c.presentationTimestamps[l].sampleIndex : -1, u = l !== -1 && r < c.endTimestamp;
      return { sampleIndex: d, correctSampleFound: u };
    }, r, r, t);
  }
  async getNextPacket(e, t) {
    const r = this.packetToSampleIndex.get(e);
    if (r !== void 0)
      return this.fetchPacketForSampleIndex(r + 1, t);
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
    const r = this.mapTimestampIntoTimescale(e), s = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), n = Eo(s, r), a = await this.fetchPacketForSampleIndex(n, t);
    return !Is(s) || !this.internalTrack.demuxer.isFragmented ? a : this.performFragmentedLookup(null, (o) => {
      const c = o.trackData.get(this.internalTrack.id);
      if (!c)
        return { sampleIndex: -1, correctSampleFound: !1 };
      const l = zr(c.presentationTimestamps, (h) => c.samples[h.sampleIndex].isKeyFrame && h.presentationTimestamp <= r), d = l !== -1 ? c.presentationTimestamps[l].sampleIndex : -1, u = l !== -1 && r < c.endTimestamp;
      return { sampleIndex: d, correctSampleFound: u };
    }, r, r, t);
  }
  async getNextKeyPacket(e, t) {
    const r = this.packetToSampleIndex.get(e);
    if (r !== void 0) {
      const n = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), a = Ao(n, r);
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
    const r = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), s = vo(r, e);
    if (!s)
      return null;
    let n;
    if (t.metadataOnly)
      n = Te;
    else {
      let l = this.internalTrack.demuxer.reader.requestSlice(s.sampleOffset, s.sampleSize);
      l instanceof Promise && (l = await l), p(l), n = D(l, s.sampleSize);
    }
    const a = (s.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale, o = s.duration / this.internalTrack.timescale, c = new G(n, s.isKeyFrame ? "key" : "delta", a, o, e, s.sampleSize);
    return this.packetToSampleIndex.set(c, e), c;
  }
  async fetchPacketInFragment(e, t, r) {
    if (t === -1)
      return null;
    const n = e.trackData.get(this.internalTrack.id).samples[t];
    p(n);
    let a;
    if (r.metadataOnly)
      a = Te;
    else {
      let d = this.internalTrack.demuxer.reader.requestSlice(n.byteOffset, n.byteSize);
      d instanceof Promise && (d = await d), p(d), a = D(d, n.byteSize);
    }
    const o = (n.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale, c = n.duration / this.internalTrack.timescale, l = new G(a, n.isKeyFrame ? "key" : "delta", o, c, e.moofOffset + t, n.byteSize);
    return this.packetToFragmentLocation.set(l, { fragment: e, sampleIndex: t }), l;
  }
  /** Looks for a packet in the fragments while trying to load as few fragments as possible to retrieve it. */
  async performFragmentedLookup(e, t, r, s, n) {
    const a = this.internalTrack.demuxer;
    let o = null, c = null, l = -1;
    if (e) {
      const { sampleIndex: w, correctSampleFound: y } = t(e);
      if (y)
        return this.fetchPacketInFragment(e, w, n);
      w !== -1 && (c = e, l = w);
    }
    const d = Q(this.internalTrack.fragmentLookupTable, r, (w) => w.timestamp), u = d !== -1 ? this.internalTrack.fragmentLookupTable[d] : null, h = Q(this.internalTrack.fragmentPositionCache, r, (w) => w.startTimestamp), f = h !== -1 ? this.internalTrack.fragmentPositionCache[h] : null, g = Math.max(u?.moofOffset ?? 0, f?.moofOffset ?? 0) || null;
    let m;
    for (e ? g === null || e.moofOffset >= g ? (m = e.moofOffset + e.moofSize, o = e) : m = g : m = g ?? 0; ; ) {
      if (o) {
        const T = o.trackData.get(this.internalTrack.id);
        if (T && T.startTimestamp > s)
          break;
      }
      let w = a.reader.requestSliceRange(m, We, pt);
      if (w instanceof Promise && (w = await w), !w)
        break;
      const y = m, k = it(w);
      if (!k)
        break;
      if (k.name === "moof") {
        o = await a.readFragment(y);
        const { sampleIndex: T, correctSampleFound: S } = t(o);
        if (S)
          return this.fetchPacketInFragment(o, T, n);
        T !== -1 && (c = o, l = T);
      }
      m = y + k.totalSize;
    }
    if (u && (!c || c.moofOffset < u.moofOffset)) {
      const w = this.internalTrack.fragmentLookupTable[d - 1];
      p(!w || w.timestamp < u.timestamp);
      const y = w?.timestamp ?? -1 / 0;
      return this.performFragmentedLookup(null, t, y, s, n);
    }
    return c ? this.fetchPacketInFragment(c, l, n) : null;
  }
}
class _o extends Mn {
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
        this.internalTrack.info.vp9CodecInfo = e && Sn(e.data);
      } else if (this.internalTrack.info.codec === "av1" && !this.internalTrack.info.av1CodecInfo) {
        const e = await this.getFirstPacket({});
        this.internalTrack.info.av1CodecInfo = e && Pn(e.data);
      }
      return {
        codec: Nr(this.internalTrack.info),
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
class Io extends Mn {
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
      codec: Or(this.internalTrack.info),
      numberOfChannels: this.internalTrack.info.numberOfChannels,
      sampleRate: this.internalTrack.info.sampleRate,
      description: this.internalTrack.info.codecDescription ?? void 0
    } : null;
  }
}
const br = (i, e) => {
  if (i.presentationTimestamps) {
    const t = Q(i.presentationTimestamps, e, (r) => r.presentationTimestamp);
    return t === -1 ? -1 : i.presentationTimestamps[t].sampleIndex;
  } else {
    const t = Q(i.sampleTimingEntries, e, (s) => s.startDecodeTimestamp);
    if (t === -1)
      return -1;
    const r = i.sampleTimingEntries[t];
    return r.startIndex + Math.min(Math.floor((e - r.startDecodeTimestamp) / r.delta), r.count - 1);
  }
}, Eo = (i, e) => {
  if (!i.keySampleIndices)
    return br(i, e);
  if (i.presentationTimestamps) {
    const t = Q(i.presentationTimestamps, e, (r) => r.presentationTimestamp);
    if (t === -1)
      return -1;
    for (let r = t; r >= 0; r--) {
      const s = i.presentationTimestamps[r].sampleIndex;
      if (di(i.keySampleIndices, s, (a) => a) !== -1)
        return s;
    }
    return -1;
  } else {
    const t = br(i, e), r = Q(i.keySampleIndices, t, (s) => s);
    return i.keySampleIndices[r] ?? -1;
  }
}, vo = (i, e) => {
  const t = Q(i.sampleTimingEntries, e, (y) => y.startIndex), r = i.sampleTimingEntries[t];
  if (!r || r.startIndex + r.count <= e)
    return null;
  let n = r.startDecodeTimestamp + (e - r.startIndex) * r.delta;
  const a = Q(i.sampleCompositionTimeOffsets, e, (y) => y.startIndex), o = i.sampleCompositionTimeOffsets[a];
  o && e - o.startIndex < o.count && (n += o.offset);
  const c = i.sampleSizes[Math.min(e, i.sampleSizes.length - 1)], l = Q(i.sampleToChunk, e, (y) => y.startSampleIndex), d = i.sampleToChunk[l];
  p(d);
  const u = d.startChunkIndex + Math.floor((e - d.startSampleIndex) / d.samplesPerChunk), h = i.chunkOffsets[u], f = d.startSampleIndex + (u - d.startChunkIndex) * d.samplesPerChunk;
  let g = 0, m = h;
  if (i.sampleSizes.length === 1)
    m += c * (e - f), g += c * d.samplesPerChunk;
  else
    for (let y = f; y < f + d.samplesPerChunk; y++) {
      const k = i.sampleSizes[y];
      y < e && (m += k), g += k;
    }
  let w = r.delta;
  if (i.presentationTimestamps) {
    const y = i.presentationTimestampIndexMap[e];
    p(y !== void 0), y < i.presentationTimestamps.length - 1 && (w = i.presentationTimestamps[y + 1].presentationTimestamp - n);
  }
  return {
    presentationTimestamp: n,
    duration: w,
    sampleOffset: m,
    sampleSize: c,
    chunkOffset: h,
    chunkSize: g,
    isKeyFrame: i.keySampleIndices ? di(i.keySampleIndices, e, (y) => y) !== -1 : !0
  };
}, Ao = (i, e) => {
  if (!i.keySampleIndices)
    return e + 1;
  const t = Q(i.keySampleIndices, e, (r) => r);
  return i.keySampleIndices[t + 1] ?? -1;
}, ji = (i, e) => {
  i.startTimestamp += e, i.endTimestamp += e;
  for (const t of i.samples)
    t.presentationTimestamp += e;
  for (const t of i.presentationTimestamps)
    t.presentationTimestamp += e;
}, Fo = (i) => {
  const [e, , , t] = i, r = Math.hypot(e, t), s = e / r, n = t / r, a = -Math.atan2(n, s) * (180 / Math.PI);
  return Number.isFinite(a) ? a : 0;
}, Is = (i) => i.sampleSizes.length === 0;
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class yr {
  constructor(e) {
    this.value = e;
  }
}
class Tr {
  constructor(e) {
    this.value = e;
  }
}
class zn {
  constructor(e) {
    this.value = e;
  }
}
class et {
  constructor(e) {
    this.value = e;
  }
}
var b;
(function(i) {
  i[i.EBML = 440786851] = "EBML", i[i.EBMLVersion = 17030] = "EBMLVersion", i[i.EBMLReadVersion = 17143] = "EBMLReadVersion", i[i.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", i[i.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", i[i.DocType = 17026] = "DocType", i[i.DocTypeVersion = 17031] = "DocTypeVersion", i[i.DocTypeReadVersion = 17029] = "DocTypeReadVersion", i[i.Void = 236] = "Void", i[i.Segment = 408125543] = "Segment", i[i.SeekHead = 290298740] = "SeekHead", i[i.Seek = 19899] = "Seek", i[i.SeekID = 21419] = "SeekID", i[i.SeekPosition = 21420] = "SeekPosition", i[i.Duration = 17545] = "Duration", i[i.Info = 357149030] = "Info", i[i.TimestampScale = 2807729] = "TimestampScale", i[i.MuxingApp = 19840] = "MuxingApp", i[i.WritingApp = 22337] = "WritingApp", i[i.Tracks = 374648427] = "Tracks", i[i.TrackEntry = 174] = "TrackEntry", i[i.TrackNumber = 215] = "TrackNumber", i[i.TrackUID = 29637] = "TrackUID", i[i.TrackType = 131] = "TrackType", i[i.FlagEnabled = 185] = "FlagEnabled", i[i.FlagDefault = 136] = "FlagDefault", i[i.FlagForced = 21930] = "FlagForced", i[i.FlagOriginal = 21934] = "FlagOriginal", i[i.FlagHearingImpaired = 21931] = "FlagHearingImpaired", i[i.FlagVisualImpaired = 21932] = "FlagVisualImpaired", i[i.FlagCommentary = 21935] = "FlagCommentary", i[i.FlagLacing = 156] = "FlagLacing", i[i.Name = 21358] = "Name", i[i.Language = 2274716] = "Language", i[i.LanguageBCP47 = 2274717] = "LanguageBCP47", i[i.CodecID = 134] = "CodecID", i[i.CodecPrivate = 25506] = "CodecPrivate", i[i.CodecDelay = 22186] = "CodecDelay", i[i.SeekPreRoll = 22203] = "SeekPreRoll", i[i.DefaultDuration = 2352003] = "DefaultDuration", i[i.Video = 224] = "Video", i[i.PixelWidth = 176] = "PixelWidth", i[i.PixelHeight = 186] = "PixelHeight", i[i.DisplayWidth = 21680] = "DisplayWidth", i[i.DisplayHeight = 21690] = "DisplayHeight", i[i.DisplayUnit = 21682] = "DisplayUnit", i[i.AlphaMode = 21440] = "AlphaMode", i[i.Audio = 225] = "Audio", i[i.SamplingFrequency = 181] = "SamplingFrequency", i[i.Channels = 159] = "Channels", i[i.BitDepth = 25188] = "BitDepth", i[i.SimpleBlock = 163] = "SimpleBlock", i[i.BlockGroup = 160] = "BlockGroup", i[i.Block = 161] = "Block", i[i.BlockAdditions = 30113] = "BlockAdditions", i[i.BlockMore = 166] = "BlockMore", i[i.BlockAdditional = 165] = "BlockAdditional", i[i.BlockAddID = 238] = "BlockAddID", i[i.BlockDuration = 155] = "BlockDuration", i[i.ReferenceBlock = 251] = "ReferenceBlock", i[i.Cluster = 524531317] = "Cluster", i[i.Timestamp = 231] = "Timestamp", i[i.Cues = 475249515] = "Cues", i[i.CuePoint = 187] = "CuePoint", i[i.CueTime = 179] = "CueTime", i[i.CueTrackPositions = 183] = "CueTrackPositions", i[i.CueTrack = 247] = "CueTrack", i[i.CueClusterPosition = 241] = "CueClusterPosition", i[i.Colour = 21936] = "Colour", i[i.MatrixCoefficients = 21937] = "MatrixCoefficients", i[i.TransferCharacteristics = 21946] = "TransferCharacteristics", i[i.Primaries = 21947] = "Primaries", i[i.Range = 21945] = "Range", i[i.Projection = 30320] = "Projection", i[i.ProjectionType = 30321] = "ProjectionType", i[i.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", i[i.Attachments = 423732329] = "Attachments", i[i.AttachedFile = 24999] = "AttachedFile", i[i.FileDescription = 18046] = "FileDescription", i[i.FileName = 18030] = "FileName", i[i.FileMediaType = 18016] = "FileMediaType", i[i.FileData = 18012] = "FileData", i[i.FileUID = 18094] = "FileUID", i[i.Chapters = 272869232] = "Chapters", i[i.Tags = 307544935] = "Tags", i[i.Tag = 29555] = "Tag", i[i.Targets = 25536] = "Targets", i[i.TargetTypeValue = 26826] = "TargetTypeValue", i[i.TargetType = 25546] = "TargetType", i[i.TagTrackUID = 25541] = "TagTrackUID", i[i.TagEditionUID = 25545] = "TagEditionUID", i[i.TagChapterUID = 25540] = "TagChapterUID", i[i.TagAttachmentUID = 25542] = "TagAttachmentUID", i[i.SimpleTag = 26568] = "SimpleTag", i[i.TagName = 17827] = "TagName", i[i.TagLanguage = 17530] = "TagLanguage", i[i.TagString = 17543] = "TagString", i[i.TagBinary = 17541] = "TagBinary", i[i.ContentEncodings = 28032] = "ContentEncodings", i[i.ContentEncoding = 25152] = "ContentEncoding", i[i.ContentEncodingOrder = 20529] = "ContentEncodingOrder", i[i.ContentEncodingScope = 20530] = "ContentEncodingScope", i[i.ContentCompression = 20532] = "ContentCompression", i[i.ContentCompAlgo = 16980] = "ContentCompAlgo", i[i.ContentCompSettings = 16981] = "ContentCompSettings", i[i.ContentEncryption = 20533] = "ContentEncryption";
})(b || (b = {}));
const Bo = [
  b.EBML,
  b.Segment
], ni = [
  b.SeekHead,
  b.Info,
  b.Cluster,
  b.Tracks,
  b.Cues,
  b.Attachments,
  b.Chapters,
  b.Tags
], yi = [
  ...Bo,
  ...ni
], Es = (i) => i < 256 ? 1 : i < 65536 ? 2 : i < 1 << 24 ? 3 : i < 2 ** 32 ? 4 : i < 2 ** 40 ? 5 : 6, vs = (i) => i < 1n << 8n ? 1 : i < 1n << 16n ? 2 : i < 1n << 24n ? 3 : i < 1n << 32n ? 4 : i < 1n << 40n ? 5 : i < 1n << 48n ? 6 : i < 1n << 56n ? 7 : 8, As = (i) => i >= -64 && i < 64 ? 1 : i >= -8192 && i < 8192 ? 2 : i >= -1048576 && i < 1 << 20 ? 3 : i >= -134217728 && i < 1 << 27 ? 4 : i >= -17179869184 && i < 2 ** 34 ? 5 : 6, Ro = (i) => {
  if (i < 127)
    return 1;
  if (i < 16383)
    return 2;
  if (i < (1 << 21) - 1)
    return 3;
  if (i < (1 << 28) - 1)
    return 4;
  if (i < 2 ** 35 - 1)
    return 5;
  if (i < 2 ** 42 - 1)
    return 6;
  throw new Error("EBML varint size not supported " + i);
};
class Mo {
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
  writeUnsignedInt(e, t = Es(e)) {
    let r = 0;
    switch (t) {
      case 6:
        this.helperView.setUint8(r++, e / 2 ** 40 | 0);
      // eslint-disable-next-line no-fallthrough
      case 5:
        this.helperView.setUint8(r++, e / 2 ** 32 | 0);
      // eslint-disable-next-line no-fallthrough
      case 4:
        this.helperView.setUint8(r++, e >> 24);
      // eslint-disable-next-line no-fallthrough
      case 3:
        this.helperView.setUint8(r++, e >> 16);
      // eslint-disable-next-line no-fallthrough
      case 2:
        this.helperView.setUint8(r++, e >> 8);
      // eslint-disable-next-line no-fallthrough
      case 1:
        this.helperView.setUint8(r++, e);
        break;
      default:
        throw new Error("Bad unsigned int size " + t);
    }
    this.writer.write(this.helper.subarray(0, r));
  }
  writeUnsignedBigInt(e, t = vs(e)) {
    let r = 0;
    for (let s = t - 1; s >= 0; s--)
      this.helperView.setUint8(r++, Number(e >> BigInt(s * 8) & 0xffn));
    this.writer.write(this.helper.subarray(0, r));
  }
  writeSignedInt(e, t = As(e)) {
    e < 0 && (e += 2 ** (t * 8)), this.writeUnsignedInt(e, t);
  }
  writeVarInt(e, t = Ro(e)) {
    let r = 0;
    switch (t) {
      case 1:
        this.helperView.setUint8(r++, 128 | e);
        break;
      case 2:
        this.helperView.setUint8(r++, 64 | e >> 8), this.helperView.setUint8(r++, e);
        break;
      case 3:
        this.helperView.setUint8(r++, 32 | e >> 16), this.helperView.setUint8(r++, e >> 8), this.helperView.setUint8(r++, e);
        break;
      case 4:
        this.helperView.setUint8(r++, 16 | e >> 24), this.helperView.setUint8(r++, e >> 16), this.helperView.setUint8(r++, e >> 8), this.helperView.setUint8(r++, e);
        break;
      case 5:
        this.helperView.setUint8(r++, 8 | e / 2 ** 32 & 7), this.helperView.setUint8(r++, e >> 24), this.helperView.setUint8(r++, e >> 16), this.helperView.setUint8(r++, e >> 8), this.helperView.setUint8(r++, e);
        break;
      case 6:
        this.helperView.setUint8(r++, 4 | e / 2 ** 40 & 3), this.helperView.setUint8(r++, e / 2 ** 32 | 0), this.helperView.setUint8(r++, e >> 24), this.helperView.setUint8(r++, e >> 16), this.helperView.setUint8(r++, e >> 8), this.helperView.setUint8(r++, e);
        break;
      default:
        throw new Error("Bad EBML varint size " + t);
    }
    this.writer.write(this.helper.subarray(0, r));
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
        const t = this.writer.getPos(), r = e.size === -1 ? 1 : e.size ?? 4;
        e.size === -1 ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + r);
        const s = this.writer.getPos();
        if (this.dataOffsets.set(e, s), this.writeEBML(e.data), e.size !== -1) {
          const n = this.writer.getPos() - s, a = this.writer.getPos();
          this.writer.seek(t), this.writeVarInt(n, r), this.writer.seek(a);
        }
      } else if (typeof e.data == "number") {
        const t = e.size ?? Es(e.data);
        this.writeVarInt(t), this.writeUnsignedInt(e.data, t);
      } else if (typeof e.data == "bigint") {
        const t = e.size ?? vs(e.data);
        this.writeVarInt(t), this.writeUnsignedBigInt(e.data, t);
      } else if (typeof e.data == "string")
        this.writeVarInt(e.data.length), this.writeAsciiString(e.data);
      else if (e.data instanceof Uint8Array)
        this.writeVarInt(e.data.byteLength, e.size), this.writer.write(e.data);
      else if (e.data instanceof yr)
        this.writeVarInt(4), this.writeFloat32(e.data.value);
      else if (e.data instanceof Tr)
        this.writeVarInt(8), this.writeFloat64(e.data.value);
      else if (e.data instanceof zn) {
        const t = e.size ?? As(e.data.value);
        this.writeVarInt(t), this.writeSignedInt(e.data.value, t);
      } else if (e.data instanceof et) {
        const t = X.encode(e.data.value);
        this.writeVarInt(t.length), this.writer.write(t);
      } else
        fe(e.data);
  }
}
const Sr = 8, xe = 2, He = 2 * Sr, Dn = (i) => {
  if (i.remainingLength < 1)
    return null;
  const e = B(i);
  if (i.skip(-1), e === 0)
    return null;
  let t = 1, r = 128;
  for (; (e & r) === 0; )
    t++, r >>= 1;
  return i.remainingLength < t ? null : t;
}, Kt = (i) => {
  if (i.remainingLength < 1)
    return null;
  const e = B(i);
  if (e === 0)
    return null;
  let t = 1, r = 128;
  for (; (e & r) === 0; )
    t++, r >>= 1;
  if (i.remainingLength < t - 1)
    return null;
  let s = e & r - 1;
  for (let n = 1; n < t; n++)
    s *= 256, s += B(i);
  return s;
}, V = (i, e) => {
  if (e < 1 || e > 8)
    throw new Error("Bad unsigned int size " + e);
  let t = 0;
  for (let r = 0; r < e; r++)
    t *= 256, t += B(i);
  return t;
}, zo = (i, e) => {
  if (e < 1)
    throw new Error("Bad unsigned int size " + e);
  let t = 0n;
  for (let r = 0; r < e; r++)
    t <<= 8n, t += BigInt(B(i));
  return t;
}, Gr = (i) => {
  const e = Dn(i);
  return e === null || i.remainingLength < e ? null : V(i, e);
}, Un = (i) => {
  if (i.remainingLength < 1)
    return null;
  if (B(i) === 255)
    return;
  i.skip(-1);
  const t = Kt(i);
  if (t === null)
    return null;
  if (t !== 72057594037927940)
    return t;
}, Ve = (i) => {
  p(i.remainingLength >= xe);
  const e = Gr(i);
  if (e === null)
    return null;
  const t = Un(i);
  return t === null ? null : { id: e, size: t };
}, It = (i, e) => {
  const t = D(i, e);
  let r = 0;
  for (; r < e && t[r] !== 0; )
    r += 1;
  return String.fromCharCode(...t.subarray(0, r));
}, qt = (i, e) => {
  const t = D(i, e);
  let r = 0;
  for (; r < e && t[r] !== 0; )
    r += 1;
  return _e.decode(t.subarray(0, r));
}, Qi = (i, e) => {
  if (e === 0)
    return 0;
  if (e !== 4 && e !== 8)
    throw new Error("Bad float size " + e);
  return e === 4 ? Fc(i) : ea(i);
}, xr = async (i, e, t, r) => {
  const s = new Set(t);
  let n = e;
  for (; r === null || n < r; ) {
    let a = i.requestSliceRange(n, xe, He);
    if (a instanceof Promise && (a = await a), !a)
      break;
    const o = Ve(a);
    if (!o)
      break;
    if (s.has(o.id))
      return { pos: n, found: !0 };
    tt(o.size), n = a.filePos + o.size;
  }
  return { pos: r !== null && r > n ? r : n, found: !1 };
}, Nn = async (i, e, t, r) => {
  const n = new Set(t);
  let a = e;
  for (; a < r; ) {
    let o = i.requestSliceRange(a, 0, Math.min(65536, r - a));
    if (o instanceof Promise && (o = await o), !o || o.length < Sr)
      break;
    for (let c = 0; c < o.length - Sr; c++) {
      o.filePos = a;
      const l = Gr(o);
      if (l !== null && n.has(l))
        return a;
      a++;
    }
  }
  return null;
}, we = {
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
function tt(i) {
  if (i === void 0)
    throw new Error("Undefined element size is used in a place where it is not supported.");
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const On = (i) => {
  let t = (i.hasVideo ? "video/" : i.hasAudio ? "audio/" : "application/") + (i.isWebM ? "webm" : "x-matroska");
  if (i.codecStrings.length > 0) {
    const r = [...new Set(i.codecStrings.filter(Boolean))];
    t += `; codecs="${r.join(", ")}"`;
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
var Oe;
(function(i) {
  i[i.None = 0] = "None", i[i.Xiph = 1] = "Xiph", i[i.FixedSize = 2] = "FixedSize", i[i.Ebml = 3] = "Ebml";
})(Oe || (Oe = {}));
var Ei;
(function(i) {
  i[i.Block = 1] = "Block", i[i.Private = 2] = "Private", i[i.Next = 4] = "Next";
})(Ei || (Ei = {}));
var Xt;
(function(i) {
  i[i.Zlib = 0] = "Zlib", i[i.Bzlib = 1] = "Bzlib", i[i.lzo1x = 2] = "lzo1x", i[i.HeaderStripping = 3] = "HeaderStripping";
})(Xt || (Xt = {}));
const $i = [
  { id: b.SeekHead, flag: "seekHeadSeen" },
  { id: b.Info, flag: "infoSeen" },
  { id: b.Tracks, flag: "tracksSeen" },
  { id: b.Cues, flag: "cuesSeen" }
], Vn = 10 * 2 ** 20;
class Do extends lt {
  constructor(e) {
    super(e), this.readMetadataPromise = null, this.segments = [], this.currentSegment = null, this.currentTrack = null, this.currentCluster = null, this.currentBlock = null, this.currentBlockAdditional = null, this.currentCueTime = null, this.currentDecodingInstruction = null, this.currentTagTargetIsMovie = !0, this.currentSimpleTagName = null, this.currentAttachedFile = null, this.isWebM = !1, this.reader = e._reader;
  }
  async computeDuration() {
    const e = await this.getTracks(), t = await Promise.all(e.map((r) => r.computeDuration()));
    return Math.max(0, ...t);
  }
  async getTracks() {
    return await this.readMetadata(), this.segments.flatMap((e) => e.tracks.map((t) => t.inputTrack));
  }
  async getMimeType() {
    await this.readMetadata();
    const e = await this.getTracks(), t = await Promise.all(e.map((r) => r.getCodecParameterString()));
    return On({
      isWebM: this.isWebM,
      hasVideo: this.segments.some((r) => r.tracks.some((s) => s.info?.type === "video")),
      hasAudio: this.segments.some((r) => r.tracks.some((s) => s.info?.type === "audio")),
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
        let t = this.reader.requestSliceRange(e, xe, He);
        if (t instanceof Promise && (t = await t), !t)
          break;
        const r = Ve(t);
        if (!r)
          break;
        const s = r.id;
        let n = r.size;
        const a = t.filePos;
        if (s === b.EBML) {
          tt(n);
          let o = this.reader.requestSlice(a, n);
          if (o instanceof Promise && (o = await o), !o)
            break;
          this.readContiguousElements(o);
        } else if (s === b.Segment) {
          if (await this.readSegment(a, n), n === void 0 || this.reader.fileSize === null)
            break;
        } else if (s === b.Cluster) {
          if (this.reader.fileSize === null)
            break;
          n === void 0 && (n = (await xr(this.reader, a, yi, this.reader.fileSize)).pos - a);
          const o = Y(this.segments);
          o && (o.elementEndPos = a + n);
        }
        tt(n), e = a + n;
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
    let r = e;
    for (; this.currentSegment.elementEndPos === null || r < this.currentSegment.elementEndPos; ) {
      let o = this.reader.requestSliceRange(r, xe, He);
      if (o instanceof Promise && (o = await o), !o)
        break;
      const c = r, l = Ve(o);
      if (!l || !ni.includes(l.id) && l.id !== b.Void) {
        const g = await Nn(this.reader, c, ni, Math.min(this.currentSegment.elementEndPos ?? 1 / 0, c + Vn));
        if (g) {
          r = g;
          continue;
        } else
          break;
      }
      const { id: d, size: u } = l, h = o.filePos, f = $i.findIndex((g) => g.id === d);
      if (f !== -1) {
        const g = $i[f].flag;
        this.currentSegment[g] = !0, tt(u);
        let m = this.reader.requestSlice(h, u);
        m instanceof Promise && (m = await m), m && this.readContiguousElements(m);
      } else if (d === b.Tags || d === b.Attachments) {
        d === b.Tags ? this.currentSegment.tagsSeen = !0 : this.currentSegment.attachmentsSeen = !0, tt(u);
        let g = this.reader.requestSlice(h, u);
        g instanceof Promise && (g = await g), g && this.readContiguousElements(g);
      } else if (d === b.Cluster) {
        this.currentSegment.clusterSeekStartPos = c;
        break;
      }
      if (u === void 0)
        break;
      r = h + u;
    }
    if (this.currentSegment.seekEntries.sort((o, c) => o.segmentPosition - c.segmentPosition), this.reader.fileSize !== null)
      for (const o of this.currentSegment.seekEntries) {
        const c = $i.find((g) => g.id === o.id);
        if (!c || this.currentSegment[c.flag])
          continue;
        let l = this.reader.requestSliceRange(e + o.segmentPosition, xe, He);
        if (l instanceof Promise && (l = await l), !l)
          continue;
        const d = Ve(l);
        if (!d)
          continue;
        const { id: u, size: h } = d;
        if (u !== c.id)
          continue;
        tt(h), this.currentSegment[c.flag] = !0;
        let f = this.reader.requestSlice(l.filePos, h);
        f instanceof Promise && (f = await f), f && this.readContiguousElements(f);
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
    let r = this.reader.requestSliceRange(e, xe, He);
    r instanceof Promise && (r = await r), p(r);
    const s = e, n = Ve(r);
    p(n);
    const a = n.id;
    p(a === b.Cluster);
    let o = n.size;
    const c = r.filePos;
    o === void 0 && (o = (await xr(this.reader, c, yi, t.elementEndPos)).pos - c);
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
      const u = this.readContiguousElements(l, yi);
      d.elementEndPos = u;
    }
    for (const [, u] of d.trackData) {
      const h = u.track;
      p(u.blocks.length > 0);
      let f = !1;
      for (let y = 0; y < u.blocks.length; y++) {
        const k = u.blocks[y];
        k.timestamp += d.timestamp, f ||= k.lacing !== Oe.None;
      }
      u.presentationTimestamps = u.blocks.map((y, k) => ({ timestamp: y.timestamp, blockIndex: k })).sort((y, k) => y.timestamp - k.timestamp);
      for (let y = 0; y < u.presentationTimestamps.length; y++) {
        const k = u.presentationTimestamps[y], T = u.blocks[k.blockIndex];
        if (u.firstKeyFrameTimestamp === null && T.isKeyFrame && (u.firstKeyFrameTimestamp = T.timestamp), y < u.presentationTimestamps.length - 1) {
          const S = u.presentationTimestamps[y + 1];
          T.duration = S.timestamp - T.timestamp;
        } else T.duration === 0 && h.defaultDuration != null && T.lacing === Oe.None && (T.duration = h.defaultDuration);
      }
      f && (this.expandLacedBlocks(u.blocks, h), u.presentationTimestamps = u.blocks.map((y, k) => ({ timestamp: y.timestamp, blockIndex: k })).sort((y, k) => y.timestamp - k.timestamp));
      const g = u.blocks[u.presentationTimestamps[0].blockIndex], m = u.blocks[Y(u.presentationTimestamps).blockIndex];
      u.startTimestamp = g.timestamp, u.endTimestamp = m.timestamp + m.duration;
      const w = Q(h.clusterPositionCache, u.startTimestamp, (y) => y.startTimestamp);
      (w === -1 || h.clusterPositionCache[w].elementStartPos !== s) && h.clusterPositionCache.splice(w + 1, 0, {
        elementStartPos: d.elementStartPos,
        startTimestamp: u.startTimestamp
      });
    }
    return t.lastReadCluster = d, d;
  }
  getTrackDataInCluster(e, t) {
    let r = e.trackData.get(t);
    if (!r) {
      const s = e.segment.tracks.find((n) => n.id === t);
      if (!s)
        return null;
      r = {
        track: s,
        startTimestamp: 0,
        endTimestamp: 0,
        firstKeyFrameTimestamp: null,
        blocks: [],
        presentationTimestamps: []
      }, e.trackData.set(t, r);
    }
    return r;
  }
  expandLacedBlocks(e, t) {
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      if (s.lacing === Oe.None)
        continue;
      s.decoded || (s.data = this.decodeBlockData(t, s.data), s.decoded = !0);
      const n = pe.tempFromBytes(s.data), a = [], o = B(n) + 1;
      switch (s.lacing) {
        case Oe.Xiph:
          {
            let l = 0;
            for (let d = 0; d < o - 1; d++) {
              let u = 0;
              for (; n.bufferPos < n.length; ) {
                const h = B(n);
                if (u += h, h < 255) {
                  a.push(u), l += u;
                  break;
                }
              }
            }
            a.push(n.length - (n.bufferPos + l));
          }
          break;
        case Oe.FixedSize:
          {
            const l = n.length - 1, d = Math.floor(l / o);
            for (let u = 0; u < o; u++)
              a.push(d);
          }
          break;
        case Oe.Ebml:
          {
            const l = Kt(n);
            p(l !== null);
            let d = l;
            a.push(d);
            let u = d;
            for (let h = 1; h < o - 1; h++) {
              const f = n.bufferPos, g = Kt(n);
              p(g !== null);
              const m = g, y = (1 << (n.bufferPos - f) * 7 - 1) - 1, k = m - y;
              d += k, a.push(d), u += d;
            }
            a.push(n.length - (n.bufferPos + u));
          }
          break;
        default:
          p(!1);
      }
      p(a.length === o), e.splice(r, 1);
      const c = s.duration || o * (t.defaultDuration ?? 0);
      for (let l = 0; l < o; l++) {
        const d = a[l], u = D(n, d), h = s.timestamp + c * l / o, f = c / o;
        e.splice(r + l, 0, {
          timestamp: h,
          duration: f,
          isKeyFrame: s.isKeyFrame,
          data: u,
          lacing: Oe.None,
          decoded: !0,
          mainAdditional: s.mainAdditional
        });
      }
      r += o, r--;
    }
  }
  async loadSegmentMetadata(e) {
    for (const t of e.seekEntries) {
      if (!(t.id === b.Tags && !e.tagsSeen)) {
        if (!(t.id === b.Attachments && !e.attachmentsSeen)) continue;
      }
      let r = this.reader.requestSliceRange(e.dataStartPos + t.segmentPosition, xe, He);
      if (r instanceof Promise && (r = await r), !r)
        continue;
      const s = Ve(r);
      if (!s || s.id !== t.id)
        continue;
      const { size: n } = s;
      tt(n), p(!this.currentSegment), this.currentSegment = e;
      let a = this.reader.requestSlice(r.filePos, n);
      a instanceof Promise && (a = await a), a && this.readContiguousElements(a), this.currentSegment = null, t.id === b.Tags ? e.tagsSeen = !0 : t.id === b.Attachments && (e.attachmentsSeen = !0);
    }
  }
  readContiguousElements(e, t) {
    for (; e.remainingLength >= xe; ) {
      const r = e.filePos;
      if (!this.traverseElement(e, t))
        return r;
    }
    return e.filePos;
  }
  traverseElement(e, t) {
    const r = Ve(e);
    if (!r || t && t.includes(r.id))
      return !1;
    const { id: s, size: n } = r, a = e.filePos;
    switch (tt(n), s) {
      case b.DocType:
        this.isWebM = It(e, n) === "webm";
        break;
      case b.Seek:
        {
          if (!this.currentSegment)
            break;
          const o = { id: -1, segmentPosition: -1 };
          this.currentSegment.seekEntries.push(o), this.readContiguousElements(e.slice(a, n)), (o.id === -1 || o.segmentPosition === -1) && this.currentSegment.seekEntries.pop();
        }
        break;
      case b.SeekID:
        {
          const o = this.currentSegment?.seekEntries[this.currentSegment.seekEntries.length - 1];
          if (!o)
            break;
          o.id = V(e, n);
        }
        break;
      case b.SeekPosition:
        {
          const o = this.currentSegment?.seekEntries[this.currentSegment.seekEntries.length - 1];
          if (!o)
            break;
          o.segmentPosition = V(e, n);
        }
        break;
      case b.TimestampScale:
        {
          if (!this.currentSegment)
            break;
          this.currentSegment.timestampScale = V(e, n), this.currentSegment.timestampFactor = 1e9 / this.currentSegment.timestampScale;
        }
        break;
      case b.Duration:
        {
          if (!this.currentSegment)
            break;
          this.currentSegment.duration = Qi(e, n);
        }
        break;
      case b.TrackEntry:
        {
          if (!this.currentSegment || (this.currentTrack = {
            id: -1,
            segment: this.currentSegment,
            demuxer: this,
            clusterPositionCache: [],
            cuePoints: [],
            disposition: {
              ...ct
            },
            inputTrack: null,
            codecId: null,
            codecPrivate: null,
            defaultDuration: null,
            defaultDurationNs: null,
            name: null,
            languageCode: he,
            decodingInstructions: [],
            info: null
          }, this.readContiguousElements(e.slice(a, n)), !this.currentTrack))
            break;
          if (this.currentTrack.decodingInstructions.some((o) => o.data?.type !== "decompress" || o.scope !== Ei.Block || o.data.algorithm !== Xt.HeaderStripping) && (console.warn(`Track #${this.currentTrack.id} has an unsupported content encoding; dropping.`), this.currentTrack = null), this.currentTrack && this.currentTrack.id !== -1 && this.currentTrack.codecId && this.currentTrack.info) {
            const o = this.currentTrack.codecId.indexOf("/"), c = o === -1 ? this.currentTrack.codecId : this.currentTrack.codecId.slice(0, o);
            if (this.currentTrack.info.type === "video" && this.currentTrack.info.width !== -1 && this.currentTrack.info.height !== -1) {
              if (this.currentTrack.info.squarePixelWidth = this.currentTrack.info.width, this.currentTrack.info.squarePixelHeight = this.currentTrack.info.height, this.currentTrack.info.displayWidth !== null && this.currentTrack.info.displayHeight !== null) {
                const u = this.currentTrack.info.displayWidth * this.currentTrack.info.height, h = this.currentTrack.info.displayHeight * this.currentTrack.info.width;
                u > h ? this.currentTrack.info.squarePixelWidth = Math.round(this.currentTrack.info.width * u / h) : this.currentTrack.info.squarePixelHeight = Math.round(this.currentTrack.info.height * h / u);
              }
              this.currentTrack.codecId === we.avc ? (this.currentTrack.info.codec = "avc", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : this.currentTrack.codecId === we.hevc ? (this.currentTrack.info.codec = "hevc", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : c === we.vp8 ? this.currentTrack.info.codec = "vp8" : c === we.vp9 ? this.currentTrack.info.codec = "vp9" : c === we.av1 && (this.currentTrack.info.codec = "av1");
              const l = this.currentTrack, d = new Ht(this.input, new Uo(l));
              this.currentTrack.inputTrack = d, this.currentSegment.tracks.push(this.currentTrack);
            } else if (this.currentTrack.info.type === "audio" && this.currentTrack.info.numberOfChannels !== -1 && this.currentTrack.info.sampleRate !== -1) {
              c === we.aac ? (this.currentTrack.info.codec = "aac", this.currentTrack.info.aacCodecInfo = {
                isMpeg2: this.currentTrack.codecId.includes("MPEG2"),
                objectType: null
              }, this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : this.currentTrack.codecId === we.mp3 ? this.currentTrack.info.codec = "mp3" : c === we.opus ? (this.currentTrack.info.codec = "opus", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate, this.currentTrack.info.sampleRate = Lt) : c === we.vorbis ? (this.currentTrack.info.codec = "vorbis", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : c === we.flac ? (this.currentTrack.info.codec = "flac", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : c === we.ac3 ? (this.currentTrack.info.codec = "ac3", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : c === we.eac3 ? (this.currentTrack.info.codec = "eac3", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : this.currentTrack.codecId === "A_PCM/INT/LIT" ? this.currentTrack.info.bitDepth === 8 ? this.currentTrack.info.codec = "pcm-u8" : this.currentTrack.info.bitDepth === 16 ? this.currentTrack.info.codec = "pcm-s16" : this.currentTrack.info.bitDepth === 24 ? this.currentTrack.info.codec = "pcm-s24" : this.currentTrack.info.bitDepth === 32 && (this.currentTrack.info.codec = "pcm-s32") : this.currentTrack.codecId === "A_PCM/INT/BIG" ? this.currentTrack.info.bitDepth === 8 ? this.currentTrack.info.codec = "pcm-u8" : this.currentTrack.info.bitDepth === 16 ? this.currentTrack.info.codec = "pcm-s16be" : this.currentTrack.info.bitDepth === 24 ? this.currentTrack.info.codec = "pcm-s24be" : this.currentTrack.info.bitDepth === 32 && (this.currentTrack.info.codec = "pcm-s32be") : this.currentTrack.codecId === "A_PCM/FLOAT/IEEE" && (this.currentTrack.info.bitDepth === 32 ? this.currentTrack.info.codec = "pcm-f32" : this.currentTrack.info.bitDepth === 64 && (this.currentTrack.info.codec = "pcm-f64"));
              const l = this.currentTrack, d = new Fe(this.input, new No(l));
              this.currentTrack.inputTrack = d, this.currentSegment.tracks.push(this.currentTrack);
            }
          }
          this.currentTrack = null;
        }
        break;
      case b.TrackNumber:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.id = V(e, n);
        }
        break;
      case b.TrackType:
        {
          if (!this.currentTrack)
            break;
          const o = V(e, n);
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
      case b.FlagEnabled:
        {
          if (!this.currentTrack)
            break;
          V(e, n) || (this.currentTrack = null);
        }
        break;
      case b.FlagDefault:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.default = !!V(e, n);
        }
        break;
      case b.FlagForced:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.forced = !!V(e, n);
        }
        break;
      case b.FlagOriginal:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.original = !!V(e, n);
        }
        break;
      case b.FlagHearingImpaired:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.hearingImpaired = !!V(e, n);
        }
        break;
      case b.FlagVisualImpaired:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.visuallyImpaired = !!V(e, n);
        }
        break;
      case b.FlagCommentary:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.disposition.commentary = !!V(e, n);
        }
        break;
      case b.CodecID:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.codecId = It(e, n);
        }
        break;
      case b.CodecPrivate:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.codecPrivate = D(e, n);
        }
        break;
      case b.DefaultDuration:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.defaultDurationNs = V(e, n);
        }
        break;
      case b.Name:
        {
          if (!this.currentTrack)
            break;
          this.currentTrack.name = qt(e, n);
        }
        break;
      case b.Language:
        {
          if (!this.currentTrack || this.currentTrack.languageCode !== he)
            break;
          this.currentTrack.languageCode = It(e, n), ti(this.currentTrack.languageCode) || (this.currentTrack.languageCode = he);
        }
        break;
      case b.LanguageBCP47:
        {
          if (!this.currentTrack)
            break;
          const c = It(e, n).split("-")[0];
          c ? this.currentTrack.languageCode = c : this.currentTrack.languageCode = he;
        }
        break;
      case b.Video:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.readContiguousElements(e.slice(a, n));
        }
        break;
      case b.PixelWidth:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.width = V(e, n);
        }
        break;
      case b.PixelHeight:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.height = V(e, n);
        }
        break;
      case b.DisplayWidth:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.displayWidth = V(e, n);
        }
        break;
      case b.DisplayHeight:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.displayHeight = V(e, n);
        }
        break;
      case b.DisplayUnit:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.displayUnit = V(e, n);
        }
        break;
      case b.AlphaMode:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.alphaMode = V(e, n) === 1;
        }
        break;
      case b.Colour:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.currentTrack.info.colorSpace = {}, this.readContiguousElements(e.slice(a, n));
        }
        break;
      case b.MatrixCoefficients:
        {
          if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace)
            break;
          const o = V(e, n), c = xi[o] ?? null;
          this.currentTrack.info.colorSpace.matrix = c;
        }
        break;
      case b.Range:
        {
          if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace)
            break;
          this.currentTrack.info.colorSpace.fullRange = V(e, n) === 2;
        }
        break;
      case b.TransferCharacteristics:
        {
          if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace)
            break;
          const o = V(e, n), c = Pi[o] ?? null;
          this.currentTrack.info.colorSpace.transfer = c;
        }
        break;
      case b.Primaries:
        {
          if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace)
            break;
          const o = V(e, n), c = Ci[o] ?? null;
          this.currentTrack.info.colorSpace.primaries = c;
        }
        break;
      case b.Projection:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          this.readContiguousElements(e.slice(a, n));
        }
        break;
      case b.ProjectionPoseRoll:
        {
          if (this.currentTrack?.info?.type !== "video")
            break;
          const c = -Qi(e, n);
          try {
            this.currentTrack.info.rotation = Bi(c);
          } catch {
          }
        }
        break;
      case b.Audio:
        {
          if (this.currentTrack?.info?.type !== "audio")
            break;
          this.readContiguousElements(e.slice(a, n));
        }
        break;
      case b.SamplingFrequency:
        {
          if (this.currentTrack?.info?.type !== "audio")
            break;
          this.currentTrack.info.sampleRate = Qi(e, n);
        }
        break;
      case b.Channels:
        {
          if (this.currentTrack?.info?.type !== "audio")
            break;
          this.currentTrack.info.numberOfChannels = V(e, n);
        }
        break;
      case b.BitDepth:
        {
          if (this.currentTrack?.info?.type !== "audio")
            break;
          this.currentTrack.info.bitDepth = V(e, n);
        }
        break;
      case b.CuePoint:
        {
          if (!this.currentSegment)
            break;
          this.readContiguousElements(e.slice(a, n)), this.currentCueTime = null;
        }
        break;
      case b.CueTime:
        this.currentCueTime = V(e, n);
        break;
      case b.CueTrackPositions:
        {
          if (this.currentCueTime === null)
            break;
          p(this.currentSegment);
          const o = { time: this.currentCueTime, trackId: -1, clusterPosition: -1 };
          this.currentSegment.cuePoints.push(o), this.readContiguousElements(e.slice(a, n)), (o.trackId === -1 || o.clusterPosition === -1) && this.currentSegment.cuePoints.pop();
        }
        break;
      case b.CueTrack:
        {
          const o = this.currentSegment?.cuePoints[this.currentSegment.cuePoints.length - 1];
          if (!o)
            break;
          o.trackId = V(e, n);
        }
        break;
      case b.CueClusterPosition:
        {
          const o = this.currentSegment?.cuePoints[this.currentSegment.cuePoints.length - 1];
          if (!o)
            break;
          p(this.currentSegment), o.clusterPosition = this.currentSegment.dataStartPos + V(e, n);
        }
        break;
      case b.Timestamp:
        {
          if (!this.currentCluster)
            break;
          this.currentCluster.timestamp = V(e, n);
        }
        break;
      case b.SimpleBlock:
        {
          if (!this.currentCluster)
            break;
          const o = Kt(e);
          if (o === null)
            break;
          const c = this.getTrackDataInCluster(this.currentCluster, o);
          if (!c)
            break;
          const l = _r(e), d = B(e), u = d >> 1 & 3;
          let h = !!(d & 128);
          c.track.info?.type === "audio" && c.track.info.codec && (h = !0);
          const f = D(e, n - (e.filePos - a)), g = c.track.decodingInstructions.length > 0;
          c.blocks.push({
            timestamp: l,
            // We'll add the cluster's timestamp to this later
            duration: 0,
            // Will set later
            isKeyFrame: h,
            data: f,
            lacing: u,
            decoded: !g,
            mainAdditional: null
          });
        }
        break;
      case b.BlockGroup:
        {
          if (!this.currentCluster)
            break;
          this.readContiguousElements(e.slice(a, n)), this.currentBlock = null;
        }
        break;
      case b.Block:
        {
          if (!this.currentCluster)
            break;
          const o = Kt(e);
          if (o === null)
            break;
          const c = this.getTrackDataInCluster(this.currentCluster, o);
          if (!c)
            break;
          const l = _r(e), u = B(e) >> 1 & 3, h = D(e, n - (e.filePos - a)), f = c.track.decodingInstructions.length > 0;
          this.currentBlock = {
            timestamp: l,
            // We'll add the cluster's timestamp to this later
            duration: 0,
            // Will set later
            isKeyFrame: !0,
            data: h,
            lacing: u,
            decoded: !f,
            mainAdditional: null
          }, c.blocks.push(this.currentBlock);
        }
        break;
      case b.BlockAdditions:
        this.readContiguousElements(e.slice(a, n));
        break;
      case b.BlockMore:
        {
          if (!this.currentBlock)
            break;
          this.currentBlockAdditional = {
            addId: 1,
            data: null
          }, this.readContiguousElements(e.slice(a, n)), this.currentBlockAdditional.data && this.currentBlockAdditional.addId === 1 && (this.currentBlock.mainAdditional = this.currentBlockAdditional.data), this.currentBlockAdditional = null;
        }
        break;
      case b.BlockAdditional:
        {
          if (!this.currentBlockAdditional)
            break;
          this.currentBlockAdditional.data = D(e, n);
        }
        break;
      case b.BlockAddID:
        {
          if (!this.currentBlockAdditional)
            break;
          this.currentBlockAdditional.addId = V(e, n);
        }
        break;
      case b.BlockDuration:
        {
          if (!this.currentBlock)
            break;
          this.currentBlock.duration = V(e, n);
        }
        break;
      case b.ReferenceBlock:
        {
          if (!this.currentBlock)
            break;
          this.currentBlock.isKeyFrame = !1;
        }
        break;
      case b.Tag:
        this.currentTagTargetIsMovie = !0, this.readContiguousElements(e.slice(a, n));
        break;
      case b.Targets:
        this.readContiguousElements(e.slice(a, n));
        break;
      case b.TargetTypeValue:
        V(e, n) !== 50 && (this.currentTagTargetIsMovie = !1);
        break;
      case b.TagTrackUID:
      case b.TagEditionUID:
      case b.TagChapterUID:
      case b.TagAttachmentUID:
        this.currentTagTargetIsMovie = !1;
        break;
      case b.SimpleTag:
        {
          if (!this.currentTagTargetIsMovie)
            break;
          this.currentSimpleTagName = null, this.readContiguousElements(e.slice(a, n));
        }
        break;
      case b.TagName:
        this.currentSimpleTagName = qt(e, n);
        break;
      case b.TagString:
        {
          if (!this.currentSimpleTagName)
            break;
          const o = qt(e, n);
          this.processTagValue(this.currentSimpleTagName, o);
        }
        break;
      case b.TagBinary:
        {
          if (!this.currentSimpleTagName)
            break;
          const o = D(e, n);
          this.processTagValue(this.currentSimpleTagName, o);
        }
        break;
      case b.AttachedFile:
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
          if (this.currentAttachedFile.fileUid && this.currentAttachedFile.fileData && (o.raw ??= {}, o.raw[this.currentAttachedFile.fileUid.toString()] = new Dr(this.currentAttachedFile.fileData, this.currentAttachedFile.fileMediaType ?? void 0, this.currentAttachedFile.fileName ?? void 0, this.currentAttachedFile.fileDescription ?? void 0)), this.currentAttachedFile.fileMediaType?.startsWith("image/") && this.currentAttachedFile.fileData) {
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
      case b.FileUID:
        {
          if (!this.currentAttachedFile)
            break;
          this.currentAttachedFile.fileUid = zo(e, n);
        }
        break;
      case b.FileName:
        {
          if (!this.currentAttachedFile)
            break;
          this.currentAttachedFile.fileName = qt(e, n);
        }
        break;
      case b.FileMediaType:
        {
          if (!this.currentAttachedFile)
            break;
          this.currentAttachedFile.fileMediaType = It(e, n);
        }
        break;
      case b.FileData:
        {
          if (!this.currentAttachedFile)
            break;
          this.currentAttachedFile.fileData = D(e, n);
        }
        break;
      case b.FileDescription:
        {
          if (!this.currentAttachedFile)
            break;
          this.currentAttachedFile.fileDescription = qt(e, n);
        }
        break;
      case b.ContentEncodings:
        {
          if (!this.currentTrack)
            break;
          this.readContiguousElements(e.slice(a, n)), this.currentTrack.decodingInstructions.sort((o, c) => c.order - o.order);
        }
        break;
      case b.ContentEncoding:
        this.currentDecodingInstruction = {
          order: 0,
          scope: Ei.Block,
          data: null
        }, this.readContiguousElements(e.slice(a, n)), this.currentDecodingInstruction.data && this.currentTrack.decodingInstructions.push(this.currentDecodingInstruction), this.currentDecodingInstruction = null;
        break;
      case b.ContentEncodingOrder:
        {
          if (!this.currentDecodingInstruction)
            break;
          this.currentDecodingInstruction.order = V(e, n);
        }
        break;
      case b.ContentEncodingScope:
        {
          if (!this.currentDecodingInstruction)
            break;
          this.currentDecodingInstruction.scope = V(e, n);
        }
        break;
      case b.ContentCompression:
        {
          if (!this.currentDecodingInstruction)
            break;
          this.currentDecodingInstruction.data = {
            type: "decompress",
            algorithm: Xt.Zlib,
            settings: null
          }, this.readContiguousElements(e.slice(a, n));
        }
        break;
      case b.ContentCompAlgo:
        {
          if (this.currentDecodingInstruction?.data?.type !== "decompress")
            break;
          this.currentDecodingInstruction.data.algorithm = V(e, n);
        }
        break;
      case b.ContentCompSettings:
        {
          if (this.currentDecodingInstruction?.data?.type !== "decompress")
            break;
          this.currentDecodingInstruction.data.settings = D(e, n);
        }
        break;
      case b.ContentEncryption:
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
    let r = t;
    for (const s of e.decodingInstructions)
      switch (p(s.data), s.data.type) {
        case "decompress":
          switch (s.data.algorithm) {
            case Xt.HeaderStripping:
              if (s.data.settings && s.data.settings.length > 0) {
                const n = s.data.settings, a = new Uint8Array(n.length + r.length);
                a.set(n, 0), a.set(r, n.length), r = a;
              }
              break;
          }
          break;
      }
    return r;
  }
  processTagValue(e, t) {
    if (!this.currentSegment?.metadataTags)
      return;
    const r = this.currentSegment.metadataTags;
    if (r.raw ??= {}, r.raw[e] ??= t, typeof t == "string")
      switch (e.toLowerCase()) {
        case "title":
          r.title ??= t;
          break;
        case "description":
          r.description ??= t;
          break;
        case "artist":
          r.artist ??= t;
          break;
        case "album":
          r.album ??= t;
          break;
        case "album_artist":
          r.albumArtist ??= t;
          break;
        case "genre":
          r.genre ??= t;
          break;
        case "comment":
          r.comment ??= t;
          break;
        case "lyrics":
          r.lyrics ??= t;
          break;
        case "date":
          {
            const s = new Date(t);
            Number.isNaN(s.getTime()) || (r.date ??= s);
          }
          break;
        case "track_number":
        case "part_number":
          {
            const s = t.split("/"), n = Number.parseInt(s[0], 10), a = s[1] && Number.parseInt(s[1], 10);
            Number.isInteger(n) && n > 0 && (r.trackNumber ??= n), a && Number.isInteger(a) && a > 0 && (r.tracksTotal ??= a);
          }
          break;
        case "disc_number":
        case "disc":
          {
            const s = t.split("/"), n = Number.parseInt(s[0], 10), a = s[1] && Number.parseInt(s[1], 10);
            Number.isInteger(n) && n > 0 && (r.discNumber ??= n), a && Number.isInteger(a) && a > 0 && (r.discsTotal ??= a);
          }
          break;
      }
  }
}
class Ln {
  constructor(e) {
    this.internalTrack = e, this.packetToClusterLocation = /* @__PURE__ */ new WeakMap();
  }
  getId() {
    return this.internalTrack.id;
  }
  getNumber() {
    const e = this.internalTrack.demuxer, r = this.internalTrack.inputTrack.type;
    let s = 0;
    for (const n of e.segments)
      for (const a of n.tracks)
        if (a.inputTrack.type === r && s++, a === this.internalTrack)
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
    return ii(e * this.internalTrack.segment.timestampFactor);
  }
  async getPacket(e, t) {
    const r = this.intoTimescale(e);
    return this.performClusterLookup(null, (s) => {
      const n = s.trackData.get(this.internalTrack.id);
      if (!n)
        return { blockIndex: -1, correctBlockFound: !1 };
      const a = Q(n.presentationTimestamps, r, (l) => l.timestamp), o = a !== -1 ? n.presentationTimestamps[a].blockIndex : -1, c = a !== -1 && r < n.endTimestamp;
      return { blockIndex: o, correctBlockFound: c };
    }, r, r, t);
  }
  async getNextPacket(e, t) {
    const r = this.packetToClusterLocation.get(e);
    if (r === void 0)
      throw new Error("Packet was not created from this track.");
    return this.performClusterLookup(
      r.cluster,
      (s) => {
        if (s === r.cluster) {
          const n = s.trackData.get(this.internalTrack.id);
          if (r.blockIndex + 1 < n.blocks.length)
            return {
              blockIndex: r.blockIndex + 1,
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
    const r = this.intoTimescale(e);
    return this.performClusterLookup(null, (s) => {
      const n = s.trackData.get(this.internalTrack.id);
      if (!n)
        return { blockIndex: -1, correctBlockFound: !1 };
      const a = zr(n.presentationTimestamps, (l) => n.blocks[l.blockIndex].isKeyFrame && l.timestamp <= r), o = a !== -1 ? n.presentationTimestamps[a].blockIndex : -1, c = a !== -1 && r < n.endTimestamp;
      return { blockIndex: o, correctBlockFound: c };
    }, r, r, t);
  }
  async getNextKeyPacket(e, t) {
    const r = this.packetToClusterLocation.get(e);
    if (r === void 0)
      throw new Error("Packet was not created from this track.");
    return this.performClusterLookup(
      r.cluster,
      (s) => {
        if (s === r.cluster) {
          const a = s.trackData.get(this.internalTrack.id).blocks.findIndex((o, c) => o.isKeyFrame && c > r.blockIndex);
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
  async fetchPacketInCluster(e, t, r) {
    if (t === -1)
      return null;
    const n = e.trackData.get(this.internalTrack.id).blocks[t];
    p(n), n.decoded || (n.data = this.internalTrack.demuxer.decodeBlockData(this.internalTrack, n.data), n.decoded = !0);
    const a = r.metadataOnly ? Te : n.data, o = n.timestamp / this.internalTrack.segment.timestampFactor, c = n.duration / this.internalTrack.segment.timestampFactor, l = {};
    n.mainAdditional && this.internalTrack.info?.type === "video" && this.internalTrack.info.alphaMode && (l.alpha = r.metadataOnly ? Te : n.mainAdditional, l.alphaByteLength = n.mainAdditional.byteLength);
    const d = new G(a, n.isKeyFrame ? "key" : "delta", o, c, e.dataStartPos + t, n.data.byteLength, l);
    return this.packetToClusterLocation.set(d, { cluster: e, blockIndex: t }), d;
  }
  /** Looks for a packet in the clusters while trying to load as few clusters as possible to retrieve it. */
  async performClusterLookup(e, t, r, s, n) {
    const { demuxer: a, segment: o } = this.internalTrack;
    let c = null, l = null, d = -1;
    if (e) {
      const { blockIndex: y, correctBlockFound: k } = t(e);
      if (k)
        return this.fetchPacketInCluster(e, y, n);
      y !== -1 && (l = e, d = y);
    }
    const u = Q(this.internalTrack.cuePoints, r, (y) => y.time), h = u !== -1 ? this.internalTrack.cuePoints[u] : null, f = Q(this.internalTrack.clusterPositionCache, r, (y) => y.startTimestamp), g = f !== -1 ? this.internalTrack.clusterPositionCache[f] : null, m = Math.max(h?.clusterPosition ?? 0, g?.elementStartPos ?? 0) || null;
    let w;
    for (e ? m === null || e.elementStartPos >= m ? (w = e.elementEndPos, c = e) : w = m : w = m ?? o.clusterSeekStartPos; o.elementEndPos === null || w <= o.elementEndPos - xe; ) {
      if (c) {
        const _ = c.trackData.get(this.internalTrack.id);
        if (_ && _.startTimestamp > s)
          break;
      }
      let y = a.reader.requestSliceRange(w, xe, He);
      if (y instanceof Promise && (y = await y), !y)
        break;
      const k = w, T = Ve(y);
      if (!T || !ni.includes(T.id) && T.id !== b.Void) {
        const _ = await Nn(a.reader, k, ni, Math.min(o.elementEndPos ?? 1 / 0, k + Vn));
        if (_) {
          w = _;
          continue;
        } else
          break;
      }
      const S = T.id;
      let P = T.size;
      const x = y.filePos;
      if (S === b.Cluster) {
        c = await a.readCluster(k, o), P = c.elementEndPos - x;
        const { blockIndex: _, correctBlockFound: E } = t(c);
        if (E)
          return this.fetchPacketInCluster(c, _, n);
        _ !== -1 && (l = c, d = _);
      }
      P === void 0 && (p(S !== b.Cluster), P = (await xr(a.reader, x, yi, o.elementEndPos)).pos - x);
      const C = x + P;
      if (o.elementEndPos === null) {
        let _ = a.reader.requestSliceRange(C, xe, He);
        if (_ instanceof Promise && (_ = await _), !_)
          break;
        if (Gr(_) === b.Segment) {
          o.elementEndPos = C;
          break;
        }
      }
      w = C;
    }
    if (h && (!l || l.elementStartPos < h.clusterPosition)) {
      const y = this.internalTrack.cuePoints[u - 1];
      p(!y || y.time < h.time);
      const k = y?.time ?? -1 / 0;
      return this.performClusterLookup(null, t, k, s, n);
    }
    return l ? this.fetchPacketInCluster(l, d, n) : null;
  }
}
class Uo extends Ln {
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
        codec: Nr({
          width: this.internalTrack.info.width,
          height: this.internalTrack.info.height,
          codec: this.internalTrack.info.codec,
          codecDescription: this.internalTrack.info.codecDescription,
          colorSpace: this.internalTrack.info.colorSpace,
          avcType: 1,
          // We don't know better (or do we?) so just assume 'avc1'
          avcCodecInfo: this.internalTrack.info.codec === "avc" && e ? Hr(e.data) : null,
          hevcCodecInfo: this.internalTrack.info.codec === "hevc" && e ? jr(e.data) : null,
          vp9CodecInfo: this.internalTrack.info.codec === "vp9" && e ? Sn(e.data) : null,
          av1CodecInfo: this.internalTrack.info.codec === "av1" && e ? Pn(e.data) : null
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
class No extends Ln {
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
      codec: Or({
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
const Pr = async (i, e, t) => {
  let r = e;
  for (; t === null || r < t; ) {
    let s = i.requestSlice(r, Gt);
    if (s instanceof Promise && (s = await s), !s)
      break;
    const n = A(s), a = zi(n, i.fileSize !== null ? i.fileSize - r : null);
    if (a.header)
      return { header: a.header, startPos: r };
    r += a.bytesAdvanced;
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
class Oo extends lt {
  constructor(e) {
    super(e), this.metadataPromise = null, this.firstFrameHeader = null, this.loadedSamples = [], this.metadataTags = null, this.tracks = [], this.readingMutex = new Ot(), this.lastSampleLoaded = !1, this.lastLoadedPos = 0, this.nextTimestampInSamples = 0, this.reader = e._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      for (; !this.firstFrameHeader && !this.lastSampleLoaded; )
        await this.advanceReader();
      if (!this.firstFrameHeader)
        throw new Error("No valid MP3 frame found.");
      this.tracks = [new Fe(this.input, new Vo(this))];
    })();
  }
  async advanceReader() {
    if (this.lastLoadedPos === 0)
      for (; ; ) {
        let o = this.reader.requestSlice(this.lastLoadedPos, Ge);
        if (o instanceof Promise && (o = await o), !o) {
          this.lastSampleLoaded = !0;
          return;
        }
        const c = bt(o);
        if (!c)
          break;
        this.lastLoadedPos = o.filePos + c.size;
      }
    const e = await Pr(this.reader, this.lastLoadedPos, this.reader.fileSize);
    if (!e) {
      this.lastSampleLoaded = !0;
      return;
    }
    const t = e.header;
    this.lastLoadedPos = e.startPos + t.totalSize - 1;
    const r = Mi(t.mpegVersionId, t.channel);
    let s = this.reader.requestSlice(e.startPos + r, 4);
    if (s instanceof Promise && (s = await s), s) {
      const o = A(s);
      if (o === Ri || o === Lr)
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
      let t = 0, r = !1;
      for (; ; ) {
        let s = this.reader.requestSlice(t, Ge);
        if (s instanceof Promise && (s = await s), !s)
          break;
        const n = bt(s);
        if (!n)
          break;
        r = !0;
        let a = this.reader.requestSlice(s.filePos, n.size);
        if (a instanceof Promise && (a = await a), !a)
          break;
        Jr(a, n, this.metadataTags), t = s.filePos + n.size;
      }
      if (!r && this.reader.fileSize !== null && this.reader.fileSize >= Ti) {
        let s = this.reader.requestSlice(this.reader.fileSize - Ti, Ti);
        s instanceof Promise && (s = await s), p(s), oe(s, 3) === "TAG" && Bc(s, this.metadataTags);
      }
      return this.metadataTags;
    } finally {
      e();
    }
  }
}
class Vo {
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
    return he;
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
      ...ct
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
    const r = this.demuxer.loadedSamples[e];
    if (!r)
      return null;
    let s;
    if (t.metadataOnly)
      s = Te;
    else {
      let n = this.demuxer.reader.requestSlice(r.dataStart, r.dataSize);
      if (n instanceof Promise && (n = await n), !n)
        return null;
      s = D(n, r.dataSize);
    }
    return new G(s, "key", r.timestamp, r.duration, e, r.dataSize);
  }
  getFirstPacket(e) {
    return this.getPacketAtIndex(0, e);
  }
  async getNextPacket(e, t) {
    const r = await this.demuxer.readingMutex.acquire();
    try {
      const s = di(this.demuxer.loadedSamples, e.timestamp, (a) => a.timestamp);
      if (s === -1)
        throw new Error("Packet was not created from this track.");
      const n = s + 1;
      for (; n >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded; )
        await this.demuxer.advanceReader();
      return this.getPacketAtIndex(n, t);
    } finally {
      r();
    }
  }
  async getPacket(e, t) {
    const r = await this.demuxer.readingMutex.acquire();
    try {
      for (; ; ) {
        const s = Q(this.demuxer.loadedSamples, e, (n) => n.timestamp);
        if (s === -1 && this.demuxer.loadedSamples.length > 0)
          return null;
        if (this.demuxer.lastSampleLoaded)
          return this.getPacketAtIndex(s, t);
        if (s >= 0 && s + 1 < this.demuxer.loadedSamples.length)
          return this.getPacketAtIndex(s, t);
        await this.demuxer.advanceReader();
      }
    } finally {
      r();
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
const Xr = 1399285583, Lo = 79764919, Wn = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let e = i << 24;
  for (let t = 0; t < 8; t++)
    e = e & 2147483648 ? e << 1 ^ Lo : e << 1;
  Wn[i] = e >>> 0 & 4294967295;
}
const Hn = (i) => {
  const e = H(i), t = e.getUint32(22, !0);
  e.setUint32(22, 0, !0);
  let r = 0;
  for (let s = 0; s < i.length; s++) {
    const n = i[s];
    r = (r << 8 ^ Wn[r >>> 24 ^ n]) >>> 0;
  }
  return e.setUint32(22, t, !0), r;
}, qn = (i, e, t) => {
  let r = 0, s = null;
  if (i.length > 0)
    if (e.codec === "vorbis") {
      p(e.vorbisInfo);
      const n = e.vorbisInfo.modeBlockflags.length, o = (1 << va(n - 1)) - 1 << 1, c = (i[0] & o) >> 1;
      if (c >= e.vorbisInfo.modeBlockflags.length)
        throw new Error("Invalid mode number.");
      let l = t;
      const d = e.vorbisInfo.modeBlockflags[c];
      if (s = e.vorbisInfo.blocksizes[d], d === 1) {
        const u = (o | 1) + 1, h = i[0] & u ? 1 : 0;
        l = e.vorbisInfo.blocksizes[h];
      }
      r = l !== null ? l + s >> 2 : 0;
    } else e.codec === "opus" && (r = uo(i).durationInSamples);
  return {
    durationInSamples: r,
    vorbisBlockSize: s
  };
}, jn = (i) => {
  let e = "audio/ogg";
  if (i.codecStrings) {
    const t = [...new Set(i.codecStrings)];
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
const gt = 27, Mt = 282, Qn = Mt + 255 * 255, Yt = (i) => {
  const e = i.filePos;
  if (vt(i) !== Xr)
    return null;
  i.skip(1);
  const r = B(i), s = Ac(i), n = vt(i), a = vt(i), o = vt(i), c = B(i), l = new Uint8Array(c);
  for (let f = 0; f < c; f++)
    l[f] = B(i);
  const d = 27 + c, u = l.reduce((f, g) => f + g, 0), h = d + u;
  return {
    headerStartPos: e,
    totalSize: h,
    dataStartPos: e + d,
    dataSize: u,
    headerType: r,
    granulePosition: s,
    serialNumber: n,
    sequenceNumber: a,
    checksum: o,
    lacingValues: l
  };
}, Wo = (i, e) => {
  for (; i.filePos < e - 3; ) {
    const t = vt(i), r = t & 255, s = t >>> 8 & 255, n = t >>> 16 & 255, a = t >>> 24 & 255, o = 79;
    if (!(r !== o && s !== o && n !== o && a !== o)) {
      if (i.skip(-4), t === Xr)
        return !0;
      i.skip(1);
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
class Ho extends lt {
  constructor(e) {
    super(e), this.metadataPromise = null, this.bitstreams = [], this.tracks = [], this.metadataTags = {}, this.reader = e._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      let e = 0;
      for (; ; ) {
        let t = this.reader.requestSliceRange(e, gt, Mt);
        if (t instanceof Promise && (t = await t), !t)
          break;
        const r = Yt(t);
        if (!r || !!!(r.headerType & 2))
          break;
        this.bitstreams.push({
          serialNumber: r.serialNumber,
          bosPage: r,
          description: null,
          numberOfChannels: -1,
          sampleRate: -1,
          codecInfo: {
            codec: null,
            vorbisInfo: null,
            opusInfo: null
          },
          lastMetadataPacket: null
        }), e = r.headerStartPos + r.totalSize;
      }
      for (const t of this.bitstreams) {
        const r = await this.readPacket(t.bosPage, 0);
        r && (// Check for Vorbis
        r.data.byteLength >= 7 && r.data[0] === 1 && r.data[1] === 118 && r.data[2] === 111 && r.data[3] === 114 && r.data[4] === 98 && r.data[5] === 105 && r.data[6] === 115 ? await this.readVorbisMetadata(r, t) : (
          // Check for Opus
          r.data.byteLength >= 8 && r.data[0] === 79 && r.data[1] === 112 && r.data[2] === 117 && r.data[3] === 115 && r.data[4] === 72 && r.data[5] === 101 && r.data[6] === 97 && r.data[7] === 100 && await this.readOpusMetadata(r, t)
        ), t.codecInfo.codec !== null && this.tracks.push(new Fe(this.input, new qo(t, this))));
      }
    })();
  }
  async readVorbisMetadata(e, t) {
    let r = await this.findNextPacketStart(e);
    if (!r)
      return;
    const s = await this.readPacket(r.startPage, r.startSegmentIndex);
    if (!s || (r = await this.findNextPacketStart(s), !r))
      return;
    const n = await this.readPacket(r.startPage, r.startSegmentIndex);
    if (!n || s.data[0] !== 3 || n.data[0] !== 5)
      return;
    const a = [], o = (u) => {
      for (; a.push(Math.min(255, u)), !(u < 255); )
        u -= 255;
    };
    o(e.data.length), o(s.data.length);
    const c = new Uint8Array(1 + a.length + e.data.length + s.data.length + n.data.length);
    c[0] = 2, c.set(a, 1), c.set(e.data, 1 + a.length), c.set(s.data, 1 + a.length + e.data.length), c.set(n.data, 1 + a.length + e.data.length + s.data.length), t.codecInfo.codec = "vorbis", t.description = c, t.lastMetadataPacket = n;
    const l = H(e.data);
    t.numberOfChannels = l.getUint8(11), t.sampleRate = l.getUint32(12, !0);
    const d = l.getUint8(28);
    t.codecInfo.vorbisInfo = {
      blocksizes: [
        1 << (d & 15),
        1 << (d >> 4)
      ],
      modeBlockflags: Cn(n.data).modeBlockflags
    }, pr(s.data.subarray(7), this.metadataTags);
  }
  async readOpusMetadata(e, t) {
    const r = await this.findNextPacketStart(e);
    if (!r)
      return;
    const s = await this.readPacket(r.startPage, r.startSegmentIndex);
    if (!s)
      return;
    t.codecInfo.codec = "opus", t.description = e.data, t.lastMetadataPacket = s;
    const n = Ni(e.data);
    t.numberOfChannels = n.outputChannelCount, t.sampleRate = Lt, t.codecInfo.opusInfo = {
      preSkip: n.preSkip
    }, pr(s.data.subarray(8), this.metadataTags);
  }
  async readPacket(e, t) {
    p(t < e.lacingValues.length);
    let r = 0;
    for (let u = 0; u < t; u++)
      r += e.lacingValues[u];
    let s = e, n = r, a = t;
    const o = [];
    e: for (; ; ) {
      let u = this.reader.requestSlice(s.dataStartPos, s.dataSize);
      u instanceof Promise && (u = await u), p(u);
      const h = D(u, s.dataSize);
      for (; ; ) {
        if (a === s.lacingValues.length) {
          o.push(h.subarray(r, n));
          break;
        }
        const g = s.lacingValues[a];
        if (n += g, g < 255) {
          o.push(h.subarray(r, n));
          break e;
        }
        a++;
      }
      let f = s.headerStartPos + s.totalSize;
      for (; ; ) {
        let g = this.reader.requestSliceRange(f, gt, Mt);
        if (g instanceof Promise && (g = await g), !g)
          return null;
        const m = Yt(g);
        if (!m)
          return null;
        if (s = m, s.serialNumber === e.serialNumber)
          break;
        f = s.headerStartPos + s.totalSize;
      }
      r = 0, n = 0, a = 0;
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
    let r = e.endPage.headerStartPos + e.endPage.totalSize;
    for (; ; ) {
      let s = this.reader.requestSliceRange(r, gt, Mt);
      if (s instanceof Promise && (s = await s), !s)
        return null;
      const n = Yt(s);
      if (!n)
        return null;
      if (n.serialNumber === e.endPage.serialNumber)
        return { startPage: n, startSegmentIndex: 0 };
      r = n.headerStartPos + n.totalSize;
    }
  }
  async getMimeType() {
    await this.readMetadata();
    const e = await Promise.all(this.tracks.map((t) => t.getCodecParameterString()));
    return jn({
      codecStrings: e.filter(Boolean)
    });
  }
  async getTracks() {
    return await this.readMetadata(), this.tracks;
  }
  async computeDuration() {
    const e = await this.getTracks(), t = await Promise.all(e.map((r) => r.computeDuration()));
    return Math.max(0, ...t);
  }
  async getMetadataTags() {
    return await this.readMetadata(), this.metadataTags;
  }
}
class qo {
  constructor(e, t) {
    this.bitstream = e, this.demuxer = t, this.encodedPacketToMetadata = /* @__PURE__ */ new WeakMap(), this.sequentialScanCache = [], this.sequentialScanMutex = new Ot(), this.internalSampleRate = e.codecInfo.codec === "opus" ? Lt : e.sampleRate;
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
    return he;
  }
  getDisposition() {
    return {
      ...ct
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
  createEncodedPacketFromOggPacket(e, t, r) {
    if (!e)
      return null;
    const { durationInSamples: s, vorbisBlockSize: n } = qn(e.data, this.bitstream.codecInfo, t.vorbisLastBlocksize), a = new G(r.metadataOnly ? Te : e.data, "key", Math.max(0, t.timestampInSamples) / this.internalSampleRate, s / this.internalSampleRate, e.endPage.headerStartPos + e.endSegmentIndex, e.data.byteLength);
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
    let r = 0;
    this.bitstream.codecInfo.codec === "opus" && (p(this.bitstream.codecInfo.opusInfo), r -= this.bitstream.codecInfo.opusInfo.preSkip);
    const s = await this.demuxer.readPacket(t.startPage, t.startSegmentIndex);
    return this.createEncodedPacketFromOggPacket(s, {
      timestampInSamples: r,
      vorbisLastBlocksize: null
    }, e);
  }
  async getNextPacket(e, t) {
    const r = this.encodedPacketToMetadata.get(e);
    if (!r)
      throw new Error("Packet was not created from this track.");
    const s = await this.demuxer.findNextPacketStart(r.packet);
    if (!s)
      return null;
    const n = r.timestampInSamples + r.durationInSamples, a = await this.demuxer.readPacket(s.startPage, s.startSegmentIndex);
    return this.createEncodedPacketFromOggPacket(a, {
      timestampInSamples: n,
      vorbisLastBlocksize: r.vorbisBlockSize
    }, t);
  }
  async getPacket(e, t) {
    if (this.demuxer.reader.fileSize === null)
      return this.getPacketSequential(e, t);
    const r = ii(e * this.internalSampleRate);
    if (r === 0)
      return this.getFirstPacket(t);
    if (r < 0)
      return null;
    p(this.bitstream.lastMetadataPacket);
    const s = await this.demuxer.findNextPacketStart(this.bitstream.lastMetadataPacket);
    if (!s)
      return null;
    let n = s.startPage, a = this.demuxer.reader.fileSize;
    const o = [n];
    e: for (; n.headerStartPos + n.totalSize < a; ) {
      const k = n.headerStartPos, T = Math.floor((k + a) / 2);
      let S = T;
      for (; ; ) {
        const P = Math.min(S + Qn, a - gt);
        let x = this.demuxer.reader.requestSlice(S, P - S);
        if (x instanceof Promise && (x = await x), p(x), !Wo(x, P)) {
          a = T + gt;
          continue e;
        }
        let _ = this.demuxer.reader.requestSliceRange(x.filePos, gt, Mt);
        _ instanceof Promise && (_ = await _), p(_);
        const E = Yt(_);
        p(E);
        let N = !1;
        if (E.serialNumber === this.bitstream.serialNumber)
          N = !0;
        else {
          let F = this.demuxer.reader.requestSlice(E.headerStartPos, E.totalSize);
          F instanceof Promise && (F = await F), p(F);
          const M = D(F, E.totalSize);
          N = Hn(M) === E.checksum;
        }
        if (!N) {
          S = E.headerStartPos + 4;
          continue;
        }
        if (N && E.serialNumber !== this.bitstream.serialNumber) {
          S = E.headerStartPos + E.totalSize;
          continue;
        }
        if (E.granulePosition === -1) {
          S = E.headerStartPos + E.totalSize;
          continue;
        }
        this.granulePositionToTimestampInSamples(E.granulePosition) > r ? a = E.headerStartPos : (n = E, o.push(E));
        continue e;
      }
    }
    let c = s.startPage;
    for (const k of o) {
      if (k.granulePosition === n.granulePosition)
        break;
      (!c || k.headerStartPos > c.headerStartPos) && (c = k);
    }
    let l = c;
    const d = [l];
    for (; !(l.serialNumber === this.bitstream.serialNumber && l.granulePosition === n.granulePosition); ) {
      const k = l.headerStartPos + l.totalSize;
      let T = this.demuxer.reader.requestSliceRange(k, gt, Mt);
      T instanceof Promise && (T = await T), p(T);
      const S = Yt(T);
      p(S), l = S, l.serialNumber === this.bitstream.serialNumber && d.push(l);
    }
    p(l.granulePosition !== -1);
    let u = null, h, f, g = l, m = 0;
    if (l.headerStartPos === s.startPage.headerStartPos)
      h = this.granulePositionToTimestampInSamples(0), f = !0, u = 0;
    else {
      h = 0, f = !1;
      for (let S = l.lacingValues.length - 1; S >= 0; S--)
        if (l.lacingValues[S] < 255) {
          u = S + 1;
          break;
        }
      if (u === null)
        throw new Error("Invalid page with granule position: no packets end on this page.");
      m = u - 1;
      const k = {
        data: Te,
        endPage: g,
        endSegmentIndex: m
      };
      if (await this.demuxer.findNextPacketStart(k)) {
        const S = Bs(d, l, u);
        p(S);
        const P = Fs(d, S.page, S.segmentIndex);
        P && (l = P.page, u = P.segmentIndex);
      } else
        for (; ; ) {
          const S = Bs(d, l, u);
          if (!S)
            break;
          const P = Fs(d, S.page, S.segmentIndex);
          if (!P)
            break;
          if (l = P.page, u = P.segmentIndex, S.page.headerStartPos !== g.headerStartPos) {
            g = S.page, m = S.segmentIndex;
            break;
          }
        }
    }
    let w = null, y = null;
    for (; l !== null; ) {
      p(u !== null);
      const k = await this.demuxer.readPacket(l, u);
      if (!k)
        break;
      if (!(l.headerStartPos === s.startPage.headerStartPos && u < s.startSegmentIndex)) {
        let P = this.createEncodedPacketFromOggPacket(k, {
          timestampInSamples: h,
          vorbisLastBlocksize: y?.vorbisBlockSize ?? null
        }, t);
        p(P);
        let x = this.encodedPacketToMetadata.get(P);
        if (p(x), !f && k.endPage.headerStartPos === g.headerStartPos && k.endSegmentIndex === m ? (h = this.granulePositionToTimestampInSamples(l.granulePosition), f = !0, P = this.createEncodedPacketFromOggPacket(k, {
          timestampInSamples: h - x.durationInSamples,
          vorbisLastBlocksize: y?.vorbisBlockSize ?? null
        }, t), p(P), x = this.encodedPacketToMetadata.get(P), p(x)) : h += x.durationInSamples, w = P, y = x, f && // Next timestamp will be too late
        (Math.max(h, 0) > r || Math.max(x.timestampInSamples, 0) === r))
          break;
      }
      const S = await this.demuxer.findNextPacketStart(k);
      if (!S)
        break;
      l = S.startPage, u = S.startSegmentIndex;
    }
    return w;
  }
  // A slower but simpler and sequential algorithm for finding a packet in a file
  async getPacketSequential(e, t) {
    const r = await this.sequentialScanMutex.acquire();
    try {
      const s = ii(e * this.internalSampleRate);
      e = s / this.internalSampleRate;
      const n = Q(this.sequentialScanCache, s, (c) => c.timestampInSamples);
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
          p(l), this.sequentialScanCache.length > 0 && p(Y(this.sequentialScanCache).timestampInSamples <= l.timestampInSamples), this.sequentialScanCache.push(l);
        }
      }
      return a;
    } finally {
      r();
    }
  }
  getKeyPacket(e, t) {
    return this.getPacket(e, t);
  }
  getNextKeyPacket(e, t) {
    return this.getNextPacket(e, t);
  }
}
const Fs = (i, e, t) => {
  let r = e, s = t;
  e: for (; ; ) {
    for (s--, s; s >= 0; s--)
      if (r.lacingValues[s] < 255) {
        s++;
        break e;
      }
    if (p(s === -1), !(r.headerType & 1)) {
      s = 0;
      break;
    }
    const a = on(i, (o) => o.headerStartPos < r.headerStartPos);
    if (!a)
      return null;
    r = a, s = r.lacingValues.length;
  }
  if (p(s !== -1), s === r.lacingValues.length) {
    const n = i[i.indexOf(r) + 1];
    p(n), r = n, s = 0;
  }
  return { page: r, segmentIndex: s };
}, Bs = (i, e, t) => {
  if (t > 0)
    return { page: e, segmentIndex: t - 1 };
  const r = on(i, (s) => s.headerStartPos < e.headerStartPos);
  return r ? { page: r, segmentIndex: r.lacingValues.length - 1 } : null;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
var be;
(function(i) {
  i[i.PCM = 1] = "PCM", i[i.IEEE_FLOAT = 3] = "IEEE_FLOAT", i[i.ALAW = 6] = "ALAW", i[i.MULAW = 7] = "MULAW", i[i.EXTENSIBLE = 65534] = "EXTENSIBLE";
})(be || (be = {}));
class jo extends lt {
  constructor(e) {
    super(e), this.metadataPromise = null, this.dataStart = -1, this.dataSize = -1, this.audioInfo = null, this.tracks = [], this.lastKnownPacketIndex = 0, this.metadataTags = {}, this.reader = e._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      let e = this.reader.requestSlice(0, 12);
      e instanceof Promise && (e = await e), p(e);
      const t = oe(e, 4), r = t !== "RIFX", s = t === "RF64", n = nt(e, r);
      let a = s ? this.reader.fileSize : Math.min(n + 8, this.reader.fileSize ?? 1 / 0);
      if (oe(e, 4) !== "WAVE")
        throw new Error("Invalid WAVE file - wrong format");
      let c = 0, l = null, d = e.filePos;
      for (; a === null || d < a; ) {
        let h = this.reader.requestSlice(d, 8);
        if (h instanceof Promise && (h = await h), !h)
          break;
        const f = oe(h, 4), g = nt(h, r), m = h.filePos;
        if (s && c === 0 && f !== "ds64")
          throw new Error('Invalid RF64 file: First chunk must be "ds64".');
        if (f === "fmt ")
          await this.parseFmtChunk(m, g, r);
        else if (f === "data") {
          if (l ??= g, this.dataStart = h.filePos, this.dataSize = Math.min(l, (a ?? 1 / 0) - this.dataStart), this.reader.fileSize === null)
            break;
        } else if (f === "ds64") {
          let w = this.reader.requestSlice(m, g);
          if (w instanceof Promise && (w = await w), !w)
            break;
          const y = Rs(w, r);
          l = Rs(w, r), a = Math.min(y + 8, this.reader.fileSize ?? 1 / 0);
        } else f === "LIST" ? await this.parseListChunk(m, g, r) : (f === "ID3 " || f === "id3 ") && await this.parseId3Chunk(m, g);
        d = m + g + (g & 1), c++;
      }
      if (!this.audioInfo)
        throw new Error('Invalid WAVE file - missing "fmt " chunk');
      if (this.dataStart === -1)
        throw new Error('Invalid WAVE file - missing "data" chunk');
      const u = this.audioInfo.blockSizeInBytes;
      this.dataSize = Math.floor(this.dataSize / u) * u, this.tracks.push(new Fe(this.input, new Qo(this)));
    })();
  }
  async parseFmtChunk(e, t, r) {
    let s = this.reader.requestSlice(e, t);
    if (s instanceof Promise && (s = await s), !s)
      return;
    let n = jt(s, r);
    const a = jt(s, r), o = nt(s, r);
    s.skip(4);
    const c = jt(s, r);
    let l;
    if (t === 14 ? l = 8 : l = jt(s, r), t >= 18 && n !== 357) {
      const d = jt(s, r), u = t - 18;
      if (Math.min(u, d) >= 22 && n === be.EXTENSIBLE) {
        s.skip(6);
        const f = D(s, 16);
        n = f[0] | f[1] << 8;
      }
    }
    (n === be.MULAW || n === be.ALAW) && (l = 8), this.audioInfo = {
      format: n,
      numberOfChannels: a,
      sampleRate: o,
      sampleSizeInBytes: Math.ceil(l / 8),
      blockSizeInBytes: c
    };
  }
  async parseListChunk(e, t, r) {
    let s = this.reader.requestSlice(e, t);
    if (s instanceof Promise && (s = await s), !s)
      return;
    const n = oe(s, 4);
    if (n !== "INFO" && n !== "INF0")
      return;
    let a = s.filePos;
    for (; a <= e + t - 8; ) {
      s.filePos = a;
      const o = oe(s, 4), c = nt(s, r), l = D(s, c);
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
            const h = u.split("/"), f = Number.parseInt(h[0], 10), g = h[1] && Number.parseInt(h[1], 10);
            Number.isInteger(f) && f > 0 && (this.metadataTags.trackNumber ??= f), g && Number.isInteger(g) && g > 0 && (this.metadataTags.tracksTotal ??= g);
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
    let r = this.reader.requestSlice(e, t);
    if (r instanceof Promise && (r = await r), !r)
      return;
    const s = bt(r);
    if (s) {
      const n = t - Ge;
      if (s.size = Math.min(s.size, n), s.size > 0) {
        const a = r.slice(e + Ge, s.size);
        Jr(a, s, this.metadataTags);
      }
    }
  }
  getCodec() {
    if (p(this.audioInfo), this.audioInfo.format === be.MULAW)
      return "ulaw";
    if (this.audioInfo.format === be.ALAW)
      return "alaw";
    if (this.audioInfo.format === be.PCM) {
      if (this.audioInfo.sampleSizeInBytes === 1)
        return "pcm-u8";
      if (this.audioInfo.sampleSizeInBytes === 2)
        return "pcm-s16";
      if (this.audioInfo.sampleSizeInBytes === 3)
        return "pcm-s24";
      if (this.audioInfo.sampleSizeInBytes === 4)
        return "pcm-s32";
    }
    return this.audioInfo.format === be.IEEE_FLOAT && this.audioInfo.sampleSizeInBytes === 4 ? "pcm-f32" : null;
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
const xt = 2048;
class Qo {
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
    return he;
  }
  getDisposition() {
    return {
      ...ct
    };
  }
  async getFirstTimestamp() {
    return 0;
  }
  async getPacketAtIndex(e, t) {
    p(e >= 0), p(this.demuxer.audioInfo);
    const r = e * xt * this.demuxer.audioInfo.blockSizeInBytes;
    if (r >= this.demuxer.dataSize)
      return null;
    const s = Math.min(xt * this.demuxer.audioInfo.blockSizeInBytes, this.demuxer.dataSize - r);
    if (this.demuxer.reader.fileSize === null) {
      let c = this.demuxer.reader.requestSlice(this.demuxer.dataStart + r, s);
      if (c instanceof Promise && (c = await c), !c)
        return null;
    }
    let n;
    if (t.metadataOnly)
      n = Te;
    else {
      let c = this.demuxer.reader.requestSlice(this.demuxer.dataStart + r, s);
      c instanceof Promise && (c = await c), p(c), n = D(c, s);
    }
    const a = e * xt / this.demuxer.audioInfo.sampleRate, o = s / this.demuxer.audioInfo.blockSizeInBytes / this.demuxer.audioInfo.sampleRate;
    return this.demuxer.lastKnownPacketIndex = Math.max(e, this.demuxer.lastKnownPacketIndex), new G(n, "key", a, o, e, s);
  }
  getFirstPacket(e) {
    return this.getPacketAtIndex(0, e);
  }
  async getPacket(e, t) {
    p(this.demuxer.audioInfo);
    const r = Math.floor(Math.min(e * this.demuxer.audioInfo.sampleRate / xt, (this.demuxer.dataSize - 1) / (xt * this.demuxer.audioInfo.blockSizeInBytes)));
    if (r < 0)
      return null;
    const s = await this.getPacketAtIndex(r, t);
    if (s)
      return s;
    if (r === 0)
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
    const r = Math.round(e.timestamp * this.demuxer.audioInfo.sampleRate / xt);
    return this.getPacketAtIndex(r + 1, t);
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
const ai = 7, at = 9, Ke = (i) => {
  const e = i.filePos, t = D(i, 9), r = new O(t);
  if (r.readBits(12) !== 4095 || (r.skipBits(1), r.readBits(2) !== 0))
    return null;
  const a = r.readBits(1), o = r.readBits(2) + 1, c = r.readBits(4);
  if (c === 15)
    return null;
  r.skipBits(1);
  const l = r.readBits(3);
  if (l === 0)
    throw new Error("ADTS frames with channel configuration 0 are not supported.");
  r.skipBits(1), r.skipBits(1), r.skipBits(1), r.skipBits(1);
  const d = r.readBits(13);
  r.skipBits(11);
  const u = r.readBits(2) + 1;
  if (u !== 1)
    throw new Error("ADTS frames with more than one AAC frame are not supported.");
  let h = null;
  return a === 1 ? i.filePos -= 2 : h = r.readBits(16), {
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
const vi = 1024;
class $o extends lt {
  constructor(e) {
    super(e), this.metadataPromise = null, this.firstFrameHeader = null, this.loadedSamples = [], this.metadataTags = null, this.tracks = [], this.readingMutex = new Ot(), this.lastSampleLoaded = !1, this.lastLoadedPos = 0, this.nextTimestampInSamples = 0, this.reader = e._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      for (; !this.firstFrameHeader && !this.lastSampleLoaded; )
        await this.advanceReader();
      p(this.firstFrameHeader), this.tracks = [new Fe(this.input, new Ko(this))];
    })();
  }
  async advanceReader() {
    if (this.lastLoadedPos === 0)
      for (; ; ) {
        let a = this.reader.requestSlice(this.lastLoadedPos, Ge);
        if (a instanceof Promise && (a = await a), !a) {
          this.lastSampleLoaded = !0;
          return;
        }
        const o = bt(a);
        if (!o)
          break;
        this.lastLoadedPos = a.filePos + o.size;
      }
    let e = this.reader.requestSliceRange(this.lastLoadedPos, ai, at);
    if (e instanceof Promise && (e = await e), !e) {
      this.lastSampleLoaded = !0;
      return;
    }
    const t = Ke(e);
    if (!t) {
      this.lastSampleLoaded = !0;
      return;
    }
    if (this.reader.fileSize !== null && t.startPos + t.frameLength > this.reader.fileSize) {
      this.lastSampleLoaded = !0;
      return;
    }
    this.firstFrameHeader || (this.firstFrameHeader = t);
    const r = ot[t.samplingFrequencyIndex];
    p(r !== void 0);
    const s = vi / r, n = {
      timestamp: this.nextTimestampInSamples / r,
      duration: s,
      dataStart: t.startPos,
      dataSize: t.frameLength
    };
    this.loadedSamples.push(n), this.nextTimestampInSamples += vi, this.lastLoadedPos = t.startPos + t.frameLength;
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
        let r = this.reader.requestSlice(t, Ge);
        if (r instanceof Promise && (r = await r), !r)
          break;
        const s = bt(r);
        if (!s)
          break;
        let n = this.reader.requestSlice(r.filePos, s.size);
        if (n instanceof Promise && (n = await n), !n)
          break;
        Jr(n, s, this.metadataTags), t = r.filePos + s.size;
      }
      return this.metadataTags;
    } finally {
      e();
    }
  }
}
class Ko {
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
    return this.getSampleRate() / vi;
  }
  async computeDuration() {
    const e = await this.getPacket(1 / 0, { metadataOnly: !0 });
    return (e?.timestamp ?? 0) + (e?.duration ?? 0);
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return he;
  }
  getCodec() {
    return "aac";
  }
  getInternalCodecId() {
    return p(this.demuxer.firstFrameHeader), this.demuxer.firstFrameHeader.objectType;
  }
  getNumberOfChannels() {
    p(this.demuxer.firstFrameHeader);
    const e = Vt[this.demuxer.firstFrameHeader.channelConfiguration];
    return p(e !== void 0), e;
  }
  getSampleRate() {
    p(this.demuxer.firstFrameHeader);
    const e = ot[this.demuxer.firstFrameHeader.samplingFrequencyIndex];
    return p(e !== void 0), e;
  }
  getDisposition() {
    return {
      ...ct
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
    const r = this.demuxer.loadedSamples[e];
    if (!r)
      return null;
    let s;
    if (t.metadataOnly)
      s = Te;
    else {
      let n = this.demuxer.reader.requestSlice(r.dataStart, r.dataSize);
      if (n instanceof Promise && (n = await n), !n)
        return null;
      s = D(n, r.dataSize);
    }
    return new G(s, "key", r.timestamp, r.duration, e, r.dataSize);
  }
  getFirstPacket(e) {
    return this.getPacketAtIndex(0, e);
  }
  async getNextPacket(e, t) {
    const r = await this.demuxer.readingMutex.acquire();
    try {
      const s = di(this.demuxer.loadedSamples, e.timestamp, (a) => a.timestamp);
      if (s === -1)
        throw new Error("Packet was not created from this track.");
      const n = s + 1;
      for (; n >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded; )
        await this.demuxer.advanceReader();
      return this.getPacketAtIndex(n, t);
    } finally {
      r();
    }
  }
  async getPacket(e, t) {
    const r = await this.demuxer.readingMutex.acquire();
    try {
      for (; ; ) {
        const s = Q(this.demuxer.loadedSamples, e, (n) => n.timestamp);
        if (s === -1 && this.demuxer.loadedSamples.length > 0)
          return null;
        if (this.demuxer.lastSampleLoaded)
          return this.getPacketAtIndex(s, t);
        if (s >= 0 && s + 1 < this.demuxer.loadedSamples.length)
          return this.getPacketAtIndex(s, t);
        await this.demuxer.advanceReader();
      }
    } finally {
      r();
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
const $n = (i) => i === 0 ? null : i === 1 ? 192 : i >= 2 && i <= 5 ? 144 * 2 ** i : i === 6 ? "uncommon-u8" : i === 7 ? "uncommon-u16" : i >= 8 && i <= 15 ? 2 ** i : null, Go = (i, e) => {
  switch (i) {
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
}, Kn = (i) => {
  let e = 0;
  const t = new O(D(i, 1));
  for (; t.readBits(1) === 1; )
    e++;
  if (e === 0)
    return t.readBits(7);
  const r = [], s = e - 1, n = new O(D(i, s)), a = 8 - e - 1;
  for (let c = 0; c < a; c++)
    r.unshift(t.readBits(1));
  for (let c = 0; c < s; c++)
    for (let l = 0; l < 8; l++) {
      const d = n.readBits(1);
      l < 2 || r.unshift(d);
    }
  return r.reduce((c, l, d) => c | l << d, 0);
}, Gn = (i, e) => {
  if (e === "uncommon-u16")
    return ae(i) + 1;
  if (e === "uncommon-u8")
    return B(i) + 1;
  if (typeof e == "number")
    return e;
  fe(e), p(!1);
}, Xo = (i, e) => e === "uncommon-u16" ? ae(i) : e === "uncommon-u16-10" ? ae(i) * 10 : e === "uncommon-u8" ? B(i) : typeof e == "number" ? e : null, Yo = (i) => {
  let t = 0;
  for (const r of i) {
    t ^= r;
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
class Zo extends lt {
  constructor(e) {
    super(e), this.loadedSamples = [], this.metadataPromise = null, this.track = null, this.metadataTags = {}, this.audioInfo = null, this.lastLoadedPos = null, this.blockingBit = null, this.readingMutex = new Ot(), this.lastSampleLoaded = !1, this.reader = e._reader;
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
        const r = B(t), s = Et(t), n = (r & 128) !== 0;
        switch (r & 127) {
          case je.STREAMINFO: {
            let o = this.reader.requestSlice(e, s);
            if (o instanceof Promise && (o = await o), p(o), o === null)
              throw new Error(`StreamInfo block at position ${e} is too small! Corrupted file.`);
            const c = D(o, 34), l = new O(c), d = l.readBits(16), u = l.readBits(16), h = l.readBits(24), f = l.readBits(24), g = l.readBits(20), m = l.readBits(3) + 1;
            l.readBits(5);
            const w = l.readBits(36);
            l.skipBits(16 * 8);
            const y = new Uint8Array(42);
            y.set(new Uint8Array([102, 76, 97, 67]), 0), y.set(new Uint8Array([128, 0, 0, 34]), 4), y.set(c, 8), this.audioInfo = {
              numberOfChannels: m,
              sampleRate: g,
              totalSamples: w,
              minimumBlockSize: d,
              maximumBlockSize: u,
              minimumFrameSize: h,
              maximumFrameSize: f,
              description: y
            }, this.track = new Fe(this.input, new Jo(this));
            break;
          }
          case je.VORBIS_COMMENT: {
            let o = this.reader.requestSlice(e, s);
            o instanceof Promise && (o = await o), p(o), pr(D(o, s), this.metadataTags);
            break;
          }
          case je.PICTURE: {
            let o = this.reader.requestSlice(e, s);
            o instanceof Promise && (o = await o), p(o);
            const c = A(o), l = A(o), d = _e.decode(D(o, l)), u = A(o), h = _e.decode(D(o, u));
            o.skip(16);
            const f = A(o), g = D(o, f);
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
    const r = 6, n = this.audioInfo.maximumFrameSize + 16, a = await this.reader.requestSliceRange(e, this.audioInfo.minimumFrameSize, n);
    if (!a)
      return null;
    const o = this.readFlacFrameHeader({
      slice: a,
      isFirstPacket: t
    });
    if (!o)
      return null;
    for (a.filePos = e + this.audioInfo.minimumFrameSize; ; ) {
      if (a.filePos > a.end - r)
        return {
          num: o.num,
          blockSize: o.blockSize,
          sampleRate: o.sampleRate,
          size: a.end - e,
          isLastFrame: !0
        };
      if (B(a) === 255) {
        const l = a.filePos, d = B(a), u = this.blockingBit === 1 ? 249 : 248;
        if (d !== u) {
          a.filePos = l;
          continue;
        }
        a.skip(-2);
        const h = a.filePos - e, f = this.readFlacFrameHeader({
          slice: a,
          isFirstPacket: !1
        });
        if (!f) {
          a.filePos = l;
          continue;
        }
        if (this.blockingBit === 0) {
          if (f.num - o.num !== 1) {
            a.filePos = l;
            continue;
          }
        } else if (f.num - o.num !== o.blockSize) {
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
    const r = e.filePos, s = D(e, 4), n = new O(s);
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
    const o = $n(n.readBits(4));
    if (!o)
      return null;
    p(this.audioInfo);
    const c = Go(n.readBits(4), this.audioInfo.sampleRate);
    if (!c || (n.readBits(4), n.readBits(3), n.readBits(1) !== 0))
      return null;
    const d = Kn(e), u = Gn(e, o), h = Xo(e, c);
    if (h === null || h !== this.audioInfo.sampleRate)
      return null;
    const f = e.filePos - r, g = B(e);
    e.skip(-f), e.skip(-1);
    const m = Yo(D(e, f));
    return g !== m ? null : { num: d, blockSize: u, sampleRate: h };
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
    const r = this.loadedSamples[this.loadedSamples.length - 1], n = {
      blockOffset: r ? r.blockOffset + r.blockSize : 0,
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
class Jo {
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
    return he;
  }
  getTimeResolution() {
    return p(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
  }
  getDisposition() {
    return {
      ...ct
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
    const r = await this.demuxer.readingMutex.acquire();
    try {
      for (; ; ) {
        const s = Q(this.demuxer.loadedSamples, e, (c) => c.blockOffset / this.demuxer.audioInfo.sampleRate);
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
      r();
    }
  }
  async getNextPacket(e, t) {
    const r = await this.demuxer.readingMutex.acquire();
    try {
      const s = e.sequenceNumber + 1;
      if (this.demuxer.lastSampleLoaded && s >= this.demuxer.loadedSamples.length)
        return null;
      for (; s >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded; )
        await this.demuxer.advanceReader();
      return this.getPacketAtIndex(s, t);
    } finally {
      r();
    }
  }
  getKeyPacket(e, t) {
    return this.getPacket(e, t);
  }
  getNextKeyPacket(e, t) {
    return this.getNextPacket(e, t);
  }
  async getPacketAtIndex(e, t) {
    const r = this.demuxer.loadedSamples[e];
    if (!r)
      return null;
    let s;
    if (t.metadataOnly)
      s = Te;
    else {
      let o = this.demuxer.reader.requestSlice(r.byteOffset, r.byteSize);
      if (o instanceof Promise && (o = await o), !o)
        return null;
      s = D(o, r.byteSize);
    }
    p(this.demuxer.audioInfo);
    const n = r.blockOffset / this.demuxer.audioInfo.sampleRate, a = r.blockSize / this.demuxer.audioInfo.sampleRate;
    return new G(s, "key", n, a, e, r.byteSize);
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
const ve = 9e4, le = 188, Xn = (i) => {
  let e = "video/MP2T";
  const t = [...new Set(i.filter(Boolean))];
  return t.length > 0 && (e += `; codecs="${t.join(", ")}"`), e;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class ec extends lt {
  constructor(e) {
    super(e), this.metadataPromise = null, this.elementaryStreams = [], this.tracks = [], this.packetOffset = 0, this.packetStride = -1, this.sectionEndPositions = [], this.seekChunkSize = 5 * 1024 * 1024, this.minReferencePointByteDistance = -1, this.reader = e._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      const e = le + 16 + 1;
      let t = this.reader.requestSlice(0, e);
      t instanceof Promise && (t = await t), p(t);
      const r = D(t, e);
      if (r[0] === 71 && r[le] === 71)
        this.packetOffset = 0, this.packetStride = le;
      else if (r[0] === 71 && r[le + 16] === 71)
        this.packetOffset = 0, this.packetStride = le + 16;
      else if (r[4] === 71 && r[4 + le + 4] === 71)
        this.packetOffset = 4, this.packetStride = le + 4;
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
        let f = !1;
        if (!c && d.pid !== 0 && !(d.payload[0] === 0 && d.payload[1] === 0 && d.payload[2] === 1)) {
          const w = new O(d.payload), y = w.readAlignedByte();
          w.skipBits(8 * y), f = w.readBits(8) === 2;
        }
        if (d.pid === 0 && !o) {
          const m = new O(d.payload), w = m.readAlignedByte();
          m.skipBits(8 * w), m.skipBits(14);
          const y = m.readBits(10);
          for (m.skipBits(40); 8 * (y + u) - m.pos > h; ) {
            const k = m.readBits(16);
            if (m.skipBits(3), k !== 0) {
              if (a !== null)
                throw new Error("Only files with a single program are supported.");
              a = m.readBits(13);
            }
          }
          if (a === null)
            throw new Error("Program Association Table must link to a Program Map Table.");
          o = !0;
        } else if ((d.pid === a || f) && !c) {
          const m = new O(d.payload), w = m.readAlignedByte();
          m.skipBits(8 * w), m.skipBits(12);
          const y = m.readBits(12);
          m.skipBits(43), m.readBits(13), m.skipBits(6);
          const k = m.readBits(10);
          for (m.skipBits(8 * k); 8 * (y + u) - m.pos > h; ) {
            const T = m.readBits(8);
            m.skipBits(3);
            const S = m.readBits(13);
            m.skipBits(6);
            const P = m.readBits(10), x = m.pos + 8 * P;
            let C = !1, _ = !1;
            for (; m.pos < x; ) {
              const N = m.readBits(8), U = m.readBits(8);
              N === 106 ? C = !0 : (N === 122 || N === 204) && (_ = !0), m.skipBits(8 * U);
            }
            let E = null;
            switch (T) {
              case 3:
              case 4:
              case 15:
                E = {
                  type: "audio",
                  codec: T === 15 ? "aac" : "mp3",
                  aacCodecInfo: null,
                  numberOfChannels: -1,
                  sampleRate: -1
                };
                break;
              case 27:
              case 36:
                E = {
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
                E = {
                  type: "audio",
                  codec: "ac3",
                  aacCodecInfo: null,
                  numberOfChannels: -1,
                  sampleRate: -1
                };
                break;
              case 135:
                E = {
                  type: "audio",
                  codec: "eac3",
                  aacCodecInfo: null,
                  numberOfChannels: -1,
                  sampleRate: -1
                };
                break;
              case 6:
                _ ? E = {
                  type: "audio",
                  codec: "eac3",
                  aacCodecInfo: null,
                  numberOfChannels: -1,
                  sampleRate: -1
                } : C && (E = {
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
            E && this.elementaryStreams.push({
              demuxer: this,
              pid: S,
              streamType: T,
              initialized: !1,
              firstSection: null,
              info: E,
              referencePesPackets: []
            });
          }
          c = !0;
        } else {
          const m = this.elementaryStreams.find((w) => w.pid === d.pid);
          if (m && !m.initialized) {
            const w = Zt(d);
            if (!w)
              throw new Error(`Couldn't read first PES packet for Elementary Stream with PID ${m.pid}`);
            if (m.firstSection = d, m.info.type === "video")
              if (m.info.codec === "avc") {
                if (m.info.avcCodecInfo = Hr(w.data), !m.info.avcCodecInfo)
                  throw new Error("Invalid AVC video stream; could not extract AVCDecoderConfigurationRecord from first packet.");
                const y = m.info.avcCodecInfo.sequenceParameterSets[0];
                p(y);
                const k = qr(y);
                m.info.width = k.displayWidth, m.info.height = k.displayHeight, k.pixelAspectRatio.num > k.pixelAspectRatio.den ? (m.info.squarePixelWidth = Math.round(m.info.width * k.pixelAspectRatio.num / k.pixelAspectRatio.den), m.info.squarePixelHeight = m.info.height) : (m.info.squarePixelWidth = m.info.width, m.info.squarePixelHeight = Math.round(m.info.height * k.pixelAspectRatio.den / k.pixelAspectRatio.num)), m.info.colorSpace = {
                  primaries: Ci[k.colourPrimaries],
                  transfer: Pi[k.transferCharacteristics],
                  matrix: xi[k.matrixCoefficients],
                  fullRange: !!k.fullRangeFlag
                }, m.info.reorderSize = k.maxDecFrameBuffering, m.initialized = !0;
              } else if (m.info.codec === "hevc") {
                if (m.info.hevcCodecInfo = jr(w.data), !m.info.hevcCodecInfo)
                  throw new Error("Invalid HEVC video stream; could not extract HVCDecoderConfigurationRecord from first packet.");
                const k = m.info.hevcCodecInfo.arrays.find((S) => S.nalUnitType === ie.SPS_NUT).nalUnits[0];
                p(k);
                const T = Tn(k);
                m.info.width = T.displayWidth, m.info.height = T.displayHeight, T.pixelAspectRatio.num > T.pixelAspectRatio.den ? (m.info.squarePixelWidth = Math.round(m.info.width * T.pixelAspectRatio.num / T.pixelAspectRatio.den), m.info.squarePixelHeight = m.info.height) : (m.info.squarePixelWidth = m.info.width, m.info.squarePixelHeight = Math.round(m.info.height * T.pixelAspectRatio.den / T.pixelAspectRatio.num)), m.info.colorSpace = {
                  primaries: Ci[T.colourPrimaries],
                  transfer: Pi[T.transferCharacteristics],
                  matrix: xi[T.matrixCoefficients],
                  fullRange: !!T.fullRangeFlag
                }, m.info.reorderSize = T.maxDecFrameBuffering, m.initialized = !0;
              } else
                throw new Error("Unhandled.");
            else if (m.info.codec === "aac") {
              const y = pe.tempFromBytes(w.data), k = Ke(y);
              if (!k)
                throw new Error("Invalid AAC audio stream; could not read ADTS frame header from first packet.");
              m.info.aacCodecInfo = {
                isMpeg2: !1,
                objectType: k.objectType
              }, m.info.numberOfChannels = Vt[k.channelConfiguration], m.info.sampleRate = ot[k.samplingFrequencyIndex], m.initialized = !0;
            } else if (m.info.codec === "mp3") {
              const y = A(pe.tempFromBytes(w.data)), k = zi(y, w.data.byteLength);
              if (!k.header)
                throw new Error("Invalid MP3 audio stream; could not read frame header from first packet.");
              m.info.numberOfChannels = k.header.channel === 3 ? 1 : 2, m.info.sampleRate = k.header.sampleRate, m.initialized = !0;
            } else if (m.info.codec === "ac3") {
              const y = In(w.data);
              if (!y)
                throw new Error("Invalid AC-3 audio stream; could not read sync frame from first packet.");
              if (y.fscod === 3)
                throw new Error("Invalid AC-3 audio stream; reserved sample rate code found in first packet.");
              m.info.numberOfChannels = Qr[y.acmod] + y.lfeon, m.info.sampleRate = Di[y.fscod], m.initialized = !0;
            } else if (m.info.codec === "eac3") {
              const y = vn(w.data);
              if (!y)
                throw new Error("Invalid E-AC-3 audio stream; could not read sync frame from first packet.");
              const k = An(y);
              if (k === null)
                throw new Error("Invalid E-AC-3 audio stream; reserved sample rate code found in first packet.");
              m.info.numberOfChannels = Fn(y), m.info.sampleRate = k, m.initialized = !0;
            } else
              throw new Error("Unhandled.");
          }
        }
        if (c && this.elementaryStreams.every((m) => m.initialized))
          break;
        n += this.packetStride;
      }
      if (!c)
        throw o ? new Error("No Program Map Table found in the file.") : new Error("No Program Association Table found in the file.");
      for (const l of this.elementaryStreams)
        l.info.type === "video" ? this.tracks.push(new Ht(this.input, new tc(l))) : this.tracks.push(new Fe(this.input, new ic(l)));
    })();
  }
  async getTracks() {
    return await this.readMetadata(), this.tracks;
  }
  async getMetadataTags() {
    return {};
  }
  async computeDuration() {
    const e = await this.getTracks(), t = await Promise.all(e.map((r) => r.computeDuration()));
    return Math.max(0, ...t);
  }
  async getMimeType() {
    await this.readMetadata();
    const e = await this.getTracks(), t = await Promise.all(e.map((r) => r.getCodecParameterString()));
    return Xn(t);
  }
  async readSection(e, t, r = !1) {
    let s = e, n = e;
    const a = [];
    let o = 0, c = null, l = !0, d = 0;
    for (; ; ) {
      const h = await this.readPacket(n);
      if (n += this.packetStride, !h)
        break;
      if (c) {
        if (h.pid !== c.pid) {
          if (r)
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
      const f = !!(h.adaptationFieldControl & 2), g = !!(h.adaptationFieldControl & 1);
      let m = 0;
      if (f && (m = 1 + h.body[0], h === c && m > 1 && (d = h.body[1] >> 6 & 1)), g && (m === 0 ? (a.push(h.body), o += h.body.byteLength) : (a.push(h.body.subarray(m)), o += h.body.byteLength - m)), s = n, !t && o >= 64) {
        l = !1;
        break;
      }
      if (di(this.sectionEndPositions, s, (y) => y) !== -1) {
        l = !1;
        break;
      }
    }
    if (l) {
      const h = Q(this.sectionEndPositions, s, (f) => f);
      this.sectionEndPositions.splice(h + 1, 0, s);
    }
    if (!c)
      return null;
    let u;
    if (a.length === 1)
      u = a[0];
    else {
      const h = a.reduce((g, m) => g + m.length, 0);
      u = new Uint8Array(h);
      let f = 0;
      for (const g of a)
        u.set(g, f), f += g.length;
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
    if (B(t) !== 71)
      throw new Error("Invalid TS packet sync byte. Likely an internal bug, please report this file.");
    const s = ae(t), n = s >> 14 & 1, a = s & 8191, c = B(t) >> 4 & 3;
    return {
      payloadUnitStartIndicator: n,
      pid: a,
      adaptationFieldControl: c
    };
  }
  async readPacket(e) {
    let t = this.reader.requestSlice(e, le);
    if (t instanceof Promise && (t = await t), !t)
      return null;
    const r = D(t, le);
    if (r[0] !== 71)
      throw new Error("Invalid TS packet sync byte. Likely an internal bug, please report this file.");
    const n = (r[1] << 8) + r[2], a = n >> 14 & 1, o = n & 8191, l = r[3] >> 4 & 3;
    return {
      payloadUnitStartIndicator: a,
      pid: o,
      adaptationFieldControl: l,
      body: r.subarray(4)
    };
  }
}
const ft = (i) => {
  if (i.payload.byteLength < 3)
    return null;
  const e = new O(i.payload);
  if (e.readBits(24) !== 1)
    return null;
  const r = e.readBits(8);
  if (e.skipBits(16), r === 188 || r === 190 || r === 191 || r === 240 || r === 241 || r === 255 || r === 242 || r === 248)
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
    sectionStartPos: i.startPos,
    sectionEndPos: i.endPos,
    pts: n,
    randomAccessIndicator: i.randomAccessIndicator
  };
}, Zt = (i) => {
  p(i.endPos !== null);
  const e = ft(i);
  if (!e)
    return null;
  const t = new O(i.payload);
  t.skipBits(32);
  const r = t.readBits(16), s = 6;
  t.skipBits(16);
  const n = t.readBits(8), a = t.pos + 8 * n;
  t.pos = a;
  const o = a / 8;
  p(Number.isInteger(o));
  const c = i.payload.subarray(
    o,
    // "A value of 0 indicates that the PES packet length is neither specified nor bounded and is allowed only in
    // PES packets whose payload consists of bytes from a video elementary stream contained in
    // transport stream packets."
    r > 0 ? s + r : i.payload.byteLength
  );
  return {
    ...e,
    data: c
  };
};
class Oi {
  constructor(e) {
    this.elementaryStream = e, this.packetBuffers = /* @__PURE__ */ new WeakMap(), this.packetSectionStarts = /* @__PURE__ */ new WeakMap();
  }
  getId() {
    return this.elementaryStream.pid;
  }
  getNumber() {
    const e = this.elementaryStream.demuxer, t = this.elementaryStream.info.type;
    let r = 0;
    for (const s of e.tracks)
      if (s.type === t && r++, p(s._backing instanceof Oi), s._backing.elementaryStream === this.elementaryStream)
        break;
    return r;
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
    return he;
  }
  getDisposition() {
    return ct;
  }
  getTimeResolution() {
    return ve;
  }
  async computeDuration() {
    const e = await this.getPacket(1 / 0, { metadataOnly: !0 });
    return (e?.timestamp ?? 0) + (e?.duration ?? 0);
  }
  async getFirstTimestamp() {
    return (await this.getFirstPacket({ metadataOnly: !0 }))?.timestamp ?? 0;
  }
  createEncodedPacket(e, t, r) {
    let s;
    return this.allPacketsAreKeyPackets() ? s = "key" : s = e.randomAccessIndicator === 1 ? "key" : "delta", new G(r.metadataOnly ? Te : e.data, s, e.pts / ve, Math.max(t / ve, 0), e.sequenceNumber, e.data.byteLength);
  }
  async getFirstPacket(e) {
    const t = this.elementaryStream.firstSection;
    p(t);
    const r = Zt(t);
    p(r);
    const s = new Jt(this.elementaryStream, r), n = new Ki(this, s), a = await n.readNext();
    if (!a)
      return null;
    const o = this.createEncodedPacket(a.packet, a.duration, e);
    return this.packetBuffers.set(o, n), this.packetSectionStarts.set(o, a.packet.sectionStartPos), o;
  }
  async getNextPacket(e, t) {
    let r = this.packetBuffers.get(e);
    if (r) {
      const d = await r.readNext();
      if (!d)
        return null;
      this.packetBuffers.delete(e);
      const u = this.createEncodedPacket(d.packet, d.duration, t);
      return this.packetBuffers.set(u, r), this.packetSectionStarts.set(u, d.packet.sectionStartPos), u;
    }
    const s = this.packetSectionStarts.get(e);
    if (s === void 0)
      throw new Error("Packet was not created from this track.");
    const a = await this.elementaryStream.demuxer.readSection(s, !0);
    p(a);
    const o = Zt(a);
    p(o);
    const c = new Jt(this.elementaryStream, o);
    r = new Ki(this, c);
    const l = e.sequenceNumber;
    for (; ; ) {
      const d = await r.readNext();
      if (!d)
        return null;
      if (d.packet.sequenceNumber > l) {
        const u = this.createEncodedPacket(d.packet, d.duration, t);
        return this.packetBuffers.set(u, r), this.packetSectionStarts.set(u, d.packet.sectionStartPos), u;
      }
    }
  }
  async getNextKeyPacket(e, t) {
    let r = e;
    for (; ; ) {
      if (r = await this.getNextPacket(r, t), !r)
        return null;
      if (r.type === "key")
        return r;
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
  async doPacketLookup(e, t, r) {
    const s = ii(e * ve), n = this.elementaryStream.demuxer, { reader: a, seekChunkSize: o } = n, c = this.elementaryStream.pid, l = async (T, S) => {
      let P = T;
      for (; P < S; ) {
        const x = await n.readPacketHeader(P);
        if (!x)
          return null;
        if (x.pid === c && x.payloadUnitStartIndicator === 1) {
          const C = await n.readSection(P, !1);
          if (!C)
            return null;
          const _ = ft(C);
          if (_)
            return _;
        }
        P += n.packetStride;
      }
      return null;
    }, d = this.elementaryStream.firstSection;
    p(d);
    const u = ft(d);
    if (p(u), s < u.pts)
      return null;
    let h;
    const f = this.elementaryStream.referencePesPackets, g = Q(f, s, (T) => T.pts), m = g !== -1 ? f[g] : null;
    if (m && s - m.pts < ve / 2)
      h = m.sectionStartPos;
    else {
      let T = 0;
      if (a.fileSize !== null) {
        const S = Math.ceil(a.fileSize / o);
        if (S > 1) {
          let P = 0, x = S - 1;
          for (T = P; P <= x; ) {
            const C = Math.floor((P + x) / 2), _ = Vi(C * o, n.packetStride) + u.sectionStartPos, E = _ + o, N = await l(_, E);
            if (!N) {
              x = C - 1;
              continue;
            }
            N.pts <= s ? (T = C, P = C + 1) : x = C - 1;
          }
        }
      }
      h = Vi(T * o, n.packetStride) + u.sectionStartPos;
    }
    let w = await l(h, a.fileSize ?? 1 / 0);
    w || (w = u);
    const y = this.getReorderSize(), k = async (T, S) => {
      const P = await n.readSection(T, !0);
      p(P);
      const x = Zt(P);
      p(x);
      const C = new Jt(this.elementaryStream, x), _ = new Ki(this, C);
      for (; !((Y(_.presentationOrderPackets)?.pts ?? -1 / 0) >= s || !await _.readNextPacket()); )
        ;
      const E = zr(_.presentationOrderPackets, S);
      if (E === -1)
        return null;
      const N = _.presentationOrderPackets[E], U = E === 0 ? 0 : N.pts - _.presentationOrderPackets[E - 1].pts;
      for (; _.decodeOrderPackets[0] !== N; )
        _.decodeOrderPackets.shift();
      _.lastDuration = U;
      const F = await _.readNext();
      p(F);
      const M = this.createEncodedPacket(F.packet, F.duration, r);
      return this.packetBuffers.set(M, _), this.packetSectionStarts.set(M, F.packet.sectionStartPos), M;
    };
    if (!t || this.allPacketsAreKeyPackets()) {
      e: for (; ; ) {
        let T = w.sectionStartPos + n.packetStride;
        for (; ; ) {
          const S = await n.readPacketHeader(T);
          if (!S)
            break e;
          if (S.pid === c && S.payloadUnitStartIndicator === 1) {
            const P = await n.readSection(T, !1);
            if (P) {
              const x = ft(P);
              if (x) {
                if (x.pts > s)
                  break e;
                w = x, Cr(this.elementaryStream, x);
                break;
              }
            }
          }
          T += n.packetStride;
        }
      }
      e: for (let T = 0; T < y; T++) {
        let S = w.sectionStartPos - n.packetStride;
        for (; S >= n.packetOffset; ) {
          const P = await n.readPacketHeader(S);
          if (!P)
            break e;
          if (P.pid === c && P.payloadUnitStartIndicator === 1) {
            const x = await n.readSection(S, !1);
            if (x) {
              const C = ft(x);
              if (C) {
                w = C;
                break;
              }
            }
          }
          S -= n.packetStride;
        }
      }
      return k(w.sectionStartPos, (T) => T.pts <= s);
    } else {
      let T = h, S = null;
      for (; ; ) {
        let P = null;
        const x = T <= u.sectionStartPos;
        let C;
        x ? (C = u, P = u) : C = await l(T, a.fileSize ?? 1 / 0);
        let _ = !1, E = 0;
        e: for (; C && !(S !== null && C.sectionStartPos >= S || (C.randomAccessIndicator === 1 && C.pts <= s && (P = C), C.pts > s && (_ = !0), _ && (E++, E >= y))); ) {
          let U = C.sectionStartPos + n.packetStride;
          for (; ; ) {
            const F = await n.readPacketHeader(U);
            if (!F)
              break e;
            if (F.pid === c && F.payloadUnitStartIndicator === 1) {
              const M = await n.readSection(U, !1);
              if (M && (C = ft(M), C)) {
                Cr(this.elementaryStream, C);
                break;
              }
            }
            U += n.packetStride;
          }
        }
        if (P) {
          let N = P;
          if (E === 0)
            e: for (let F = 0; F < y - 1; F++) {
              let M = N.sectionStartPos - n.packetStride;
              for (; M >= n.packetOffset; ) {
                const L = await n.readPacketHeader(M);
                if (!L)
                  break e;
                if (L.pid === c && L.payloadUnitStartIndicator === 1) {
                  const j = await n.readSection(M, !1);
                  if (j) {
                    const $ = ft(j);
                    if ($) {
                      N = $;
                      break;
                    }
                  }
                }
                M -= n.packetStride;
              }
            }
          const U = await k(N.sectionStartPos, (F) => F.pts <= s && F.randomAccessIndicator === 1);
          return p(U), U;
        }
        p(!x), S = T, T = Math.max(Vi(T - u.sectionStartPos - o, n.packetStride) + u.sectionStartPos, u.sectionStartPos);
      }
    }
  }
}
class tc extends Oi {
  constructor(e) {
    super(e), this.elementaryStream = e, this.decoderConfig = {
      codec: Nr({
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
class ic extends Oi {
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
      codec: Or({
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
const Cr = (i, e) => {
  const t = i.referencePesPackets, r = Q(t, e.sectionStartPos, (s) => s.sectionStartPos);
  if (r >= 0) {
    const s = t[r];
    if (e.pts <= s.pts)
      return !1;
    const n = i.demuxer.minReferencePointByteDistance;
    if (e.sectionStartPos - s.sectionStartPos < n)
      return !1;
    if (r < t.length - 1) {
      const a = t[r + 1];
      if (a.pts < e.pts || a.sectionStartPos - e.sectionStartPos < n)
        return !1;
    }
  }
  return t.splice(r + 1, 0, e), !0;
}, rc = async (i) => {
  p(!i.suppliedPacket);
  const e = i.elementaryStream;
  if (e.info.type === "video") {
    const t = e.info.codec, r = 1024;
    if (t !== "avc" && t !== "hevc")
      throw new Error("Unhandled.");
    let s = null;
    for (; ; ) {
      let n = i.ensureBuffered(r);
      if (n instanceof Promise && (n = await n), n === 0)
        break;
      const a = i.currentPos, o = i.readBytes(n), c = o.byteLength;
      let l = 0;
      for (; l < c; ) {
        const d = o.indexOf(0, l);
        if (d === -1 || d >= c)
          break;
        l = d;
        const u = a + l;
        if (l + 4 >= c) {
          i.seekTo(u);
          break;
        }
        const h = o[l + 1], f = o[l + 2], g = o[l + 3];
        let m = 0, w = null;
        if (h === 0 && f === 0 && g === 1 ? (m = 4, w = o[l + 4]) : h === 0 && f === 1 && (m = 3, w = g), m === 0) {
          l++;
          continue;
        }
        const y = u;
        if (s === null) {
          s = y, l += m;
          continue;
        }
        if (w !== null) {
          const k = t === "avc" ? Dt(w) : kt(w);
          if (t === "avc" ? k === Ce.AUD : k === ie.AUD_NUT) {
            const S = y - s;
            return i.seekTo(s), i.supplyPacket(S, 0);
          }
        }
        l += m;
      }
      if (n < r)
        break;
    }
    if (s !== null) {
      const n = i.endPos - s;
      return i.seekTo(s), i.supplyPacket(n, 0);
    }
  } else {
    const t = e.info.codec, r = 128;
    for (; ; ) {
      let s = i.ensureBuffered(r);
      s instanceof Promise && (s = await s);
      const n = i.currentPos;
      for (; i.currentPos - n < s; ) {
        const a = i.readU8();
        if (t === "aac") {
          if (a !== 255)
            continue;
          i.skip(-1);
          const o = i.currentPos;
          let c = i.ensureBuffered(at);
          if (c instanceof Promise && (c = await c), c < at)
            return;
          const l = i.readBytes(at), d = Ke(pe.tempFromBytes(l));
          if (d) {
            i.seekTo(o);
            let u = i.ensureBuffered(d.frameLength);
            return u instanceof Promise && (u = await u), i.supplyPacket(u, Math.round(vi * ve / e.info.sampleRate));
          } else
            i.seekTo(o + 1);
        } else if (t === "mp3") {
          if (a !== 255)
            continue;
          i.skip(-1);
          const o = i.currentPos;
          let c = i.ensureBuffered(Gt);
          if (c instanceof Promise && (c = await c), c < Gt)
            return;
          const l = i.readBytes(Gt), d = H(l).getUint32(0), u = zi(d, null);
          if (u.header) {
            i.seekTo(o);
            let h = i.ensureBuffered(u.header.totalSize);
            h instanceof Promise && (h = await h);
            const f = u.header.audioSamplesInFrame * ve / e.info.sampleRate;
            return i.supplyPacket(h, Math.round(f));
          } else
            i.seekTo(o + 1);
        } else if (t === "ac3") {
          if (a !== 11)
            continue;
          i.skip(-1);
          const o = i.currentPos;
          let c = i.ensureBuffered(5);
          if (c instanceof Promise && (c = await c), c < 5)
            return;
          const l = i.readBytes(5);
          if (l[0] !== 11 || l[1] !== 119) {
            i.seekTo(o + 1);
            continue;
          }
          const d = l[4] >> 6, u = l[4] & 63;
          if (d === 3 || u > 37) {
            i.seekTo(o + 1);
            continue;
          }
          const h = ho[3 * u + d];
          p(h !== void 0), i.seekTo(o), c = i.ensureBuffered(h), c instanceof Promise && (c = await c);
          const f = Math.round(fo * ve / e.info.sampleRate);
          return i.supplyPacket(c, f);
        } else if (t === "eac3") {
          if (a !== 11)
            continue;
          i.skip(-1);
          const o = i.currentPos;
          let c = i.ensureBuffered(5);
          if (c instanceof Promise && (c = await c), c < 5)
            return;
          const l = i.readBytes(5);
          if (l[0] !== 11 || l[1] !== 119) {
            i.seekTo(o + 1);
            continue;
          }
          const u = (((l[2] & 7) << 8 | l[3]) + 1) * 2, f = l[4] >> 6 === 3 ? 3 : l[4] >> 4 & 3, g = En[f];
          i.seekTo(o), c = i.ensureBuffered(u), c instanceof Promise && (c = await c);
          const m = g * 256, w = Math.round(m * ve / e.info.sampleRate);
          return i.supplyPacket(c, w);
        } else
          throw new Error("Unhandled.");
      }
      if (s < r)
        break;
    }
  }
};
class Jt {
  constructor(e, t) {
    this.currentPos = 0, this.pesPackets = [], this.currentPesPacketIndex = 0, this.currentPesPacketPos = 0, this.endPos = 0, this.nextPts = 0, this.suppliedPacket = null, this.elementaryStream = e, this.pid = e.pid, this.demuxer = e.demuxer, this.startingPesPacket = t;
  }
  clone() {
    const e = new Jt(this.elementaryStream, this.startingPesPacket);
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
      let r;
      if (this.pesPackets.length === 0)
        r = this.startingPesPacket;
      else {
        let s = Y(this.pesPackets).sectionEndPos;
        for (p(s !== null); ; ) {
          const n = await this.demuxer.readPacketHeader(s);
          if (!n)
            return;
          if (n.pid === this.pid) {
            const a = await this.demuxer.readSection(s, !0);
            if (!a)
              return;
            const o = Zt(a);
            if (o) {
              r = o;
              break;
            }
          }
          s += this.demuxer.packetStride;
        }
      }
      this.pesPackets.push(r), this.endPos += r.data.byteLength, this.pesPackets.length === 1 && (this.nextPts = r.pts);
    }
  }
  readBytes(e) {
    const t = this.getCurrentPesPacket(), r = this.currentPos - this.currentPesPacketPos, s = r + e;
    if (this.currentPos += e, s <= t.data.byteLength)
      return t.data.subarray(r, s);
    const n = new Uint8Array(e);
    n.set(t.data.subarray(r));
    let a = t.data.byteLength - r;
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
          const t = this.getCurrentPesPacket(), r = this.currentPesPacketPos + t.data.byteLength;
          if (e < r)
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
    const r = this.getCurrentPesPacket();
    Cr(this.elementaryStream, r);
    const s = this.nextPts;
    this.nextPts += t;
    const n = r.sectionStartPos, a = n + (this.currentPos - this.currentPesPacketPos), o = this.readBytes(e);
    let c = r.randomAccessIndicator;
    p(this.elementaryStream.firstSection), r.sectionStartPos === this.elementaryStream.firstSection.startPos && (c = 1), this.suppliedPacket = {
      pts: s,
      data: o,
      sequenceNumber: a,
      sectionStartPos: n,
      randomAccessIndicator: c
    }, this.pesPackets.splice(0, this.currentPesPacketIndex), this.currentPesPacketIndex = 0;
  }
}
class Ki {
  constructor(e, t) {
    this.decodeOrderPackets = [], this.reorderBuffer = [], this.presentationOrderPackets = [], this.reachedEnd = !1, this.lastDuration = 0, this.backing = e, this.context = t, this.reorderSize = e.getReorderSize(), p(this.reorderSize >= 0);
  }
  async readNext() {
    if (this.decodeOrderPackets.length === 0 && !await this.readNextPacket())
      return null;
    await this.ensureCurrentPacketHasNext();
    const e = this.decodeOrderPackets[0], t = this.presentationOrderPackets.indexOf(e);
    p(t !== -1);
    let r;
    for (t === this.presentationOrderPackets.length - 1 ? r = this.lastDuration : (r = this.presentationOrderPackets[t + 1].pts - e.pts, this.lastDuration = r), this.decodeOrderPackets.shift(); this.presentationOrderPackets.length > 0; ) {
      const s = this.presentationOrderPackets[0];
      if (this.decodeOrderPackets.includes(s))
        break;
      this.presentationOrderPackets.shift();
    }
    return { packet: e, duration: r };
  }
  async readNextPacket() {
    if (this.reachedEnd)
      return !1;
    let e;
    return this.context.suppliedPacket ? e = this.context.suppliedPacket : (await rc(this.context), e = this.context.suppliedPacket), this.context.suppliedPacket = null, e ? (this.decodeOrderPackets.push(e), this.processPacketThroughReorderBuffer(e), !0) : (this.reachedEnd = !0, this.flushReorderBuffer(), !1);
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
      const r = this.reorderBuffer.splice(t, 1)[0];
      this.presentationOrderPackets.push(r);
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
class Xe {
}
class Yn extends Xe {
  /** @internal */
  async _getMajorBrand(e) {
    let t = e._reader.requestSlice(0, 12);
    return t instanceof Promise && (t = await t), !t || (t.skip(4), oe(t, 4) !== "ftyp") ? null : oe(t, 4);
  }
  /** @internal */
  _createDemuxer(e) {
    return new Co(e);
  }
}
class sc extends Yn {
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
class nc extends Yn {
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
class Zn extends Xe {
  /** @internal */
  async isSupportedEBMLOfDocType(e, t) {
    let r = e._reader.requestSlice(0, He);
    if (r instanceof Promise && (r = await r), !r)
      return !1;
    const s = Dn(r);
    if (s === null || s < 1 || s > 8 || V(r, s) !== b.EBML)
      return !1;
    const a = Un(r);
    if (typeof a != "number")
      return !1;
    let o = e._reader.requestSlice(r.filePos, a);
    if (o instanceof Promise && (o = await o), !o)
      return !1;
    const c = r.filePos;
    for (; o.filePos <= c + a - xe; ) {
      const l = Ve(o);
      if (!l)
        break;
      const { id: d, size: u } = l, h = o.filePos;
      if (u === void 0)
        return !1;
      switch (d) {
        case b.EBMLVersion:
          if (V(o, u) !== 1)
            return !1;
          break;
        case b.EBMLReadVersion:
          if (V(o, u) !== 1)
            return !1;
          break;
        case b.DocType:
          if (It(o, u) !== t)
            return !1;
          break;
        case b.DocTypeVersion:
          if (V(o, u) > 4)
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
    return new Do(e);
  }
  get name() {
    return "Matroska";
  }
  get mimeType() {
    return "video/x-matroska";
  }
}
class ac extends Zn {
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
class oc extends Xe {
  /** @internal */
  async _canReadInput(e) {
    let t = 0;
    for (; ; ) {
      let u = e._reader.requestSlice(t, Ge);
      if (u instanceof Promise && (u = await u), !u)
        break;
      const h = bt(u);
      if (!h)
        break;
      t = u.filePos + h.size;
    }
    const r = await Pr(e._reader, t, t + 4096);
    if (!r)
      return !1;
    const s = r.header, n = Mi(s.mpegVersionId, s.channel);
    let a = e._reader.requestSlice(r.startPos + n, 4);
    if (a instanceof Promise && (a = await a), !a)
      return !1;
    const o = A(a);
    if (o === Ri || o === Lr)
      return !0;
    t = r.startPos + r.header.totalSize;
    const l = await Pr(e._reader, t, t + Gt);
    if (!l)
      return !1;
    const d = l.header;
    return !(s.channel !== d.channel || s.sampleRate !== d.sampleRate);
  }
  /** @internal */
  _createDemuxer(e) {
    return new Oo(e);
  }
  get name() {
    return "MP3";
  }
  get mimeType() {
    return "audio/mpeg";
  }
}
class cc extends Xe {
  /** @internal */
  async _canReadInput(e) {
    let t = e._reader.requestSlice(0, 12);
    if (t instanceof Promise && (t = await t), !t)
      return !1;
    const r = oe(t, 4);
    return r !== "RIFF" && r !== "RIFX" && r !== "RF64" ? !1 : (t.skip(4), oe(t, 4) === "WAVE");
  }
  /** @internal */
  _createDemuxer(e) {
    return new jo(e);
  }
  get name() {
    return "WAVE";
  }
  get mimeType() {
    return "audio/wav";
  }
}
class lc extends Xe {
  /** @internal */
  async _canReadInput(e) {
    let t = e._reader.requestSlice(0, 4);
    return t instanceof Promise && (t = await t), t ? oe(t, 4) === "OggS" : !1;
  }
  /** @internal */
  _createDemuxer(e) {
    return new Ho(e);
  }
  get name() {
    return "Ogg";
  }
  get mimeType() {
    return "application/ogg";
  }
}
class dc extends Xe {
  /** @internal */
  async _canReadInput(e) {
    let t = e._reader.requestSlice(0, 4);
    return t instanceof Promise && (t = await t), t ? oe(t, 4) === "fLaC" : !1;
  }
  get name() {
    return "FLAC";
  }
  get mimeType() {
    return "audio/flac";
  }
  /** @internal */
  _createDemuxer(e) {
    return new Zo(e);
  }
}
class uc extends Xe {
  /** @internal */
  async _canReadInput(e) {
    let t = 0;
    for (; ; ) {
      let a = e._reader.requestSlice(t, Ge);
      if (a instanceof Promise && (a = await a), !a)
        break;
      const o = bt(a);
      if (!o)
        break;
      t = a.filePos + o.size;
    }
    let r = e._reader.requestSliceRange(t, ai, at);
    if (r instanceof Promise && (r = await r), !r)
      return !1;
    const s = Ke(r);
    if (!s || (t += s.frameLength, r = e._reader.requestSliceRange(t, ai, at), r instanceof Promise && (r = await r), !r))
      return !1;
    const n = Ke(r);
    return n ? s.objectType === n.objectType && s.samplingFrequencyIndex === n.samplingFrequencyIndex && s.channelConfiguration === n.channelConfiguration : !1;
  }
  /** @internal */
  _createDemuxer(e) {
    return new $o(e);
  }
  get name() {
    return "ADTS";
  }
  get mimeType() {
    return "audio/aac";
  }
}
class hc extends Xe {
  /** @internal */
  async _canReadInput(e) {
    const t = le + 16 + 1;
    let r = e._reader.requestSlice(0, t);
    if (r instanceof Promise && (r = await r), !r)
      return !1;
    const s = D(r, t);
    return s[0] === 71 && s[le] === 71 || s[0] === 71 && s[le + 16] === 71 ? !0 : s[4] === 71 && s[4 + le + 4] === 71;
  }
  /** @internal */
  _createDemuxer(e) {
    return new ec(e);
  }
  get name() {
    return "MPEG Transport Stream";
  }
  get mimeType() {
    return "video/MP2T";
  }
}
const fc = /* @__PURE__ */ new sc(), mc = /* @__PURE__ */ new nc(), pc = /* @__PURE__ */ new Zn(), gc = /* @__PURE__ */ new ac(), wc = /* @__PURE__ */ new oc(), kc = /* @__PURE__ */ new cc(), bc = /* @__PURE__ */ new lc(), yc = /* @__PURE__ */ new uc(), Tc = /* @__PURE__ */ new dc(), Sc = /* @__PURE__ */ new hc(), Od = [fc, mc, pc, gc, kc, bc, Tc, wc, yc, Sc];
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const xc = typeof _i < "u" ? _i : void 0;
class St {
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
      throw new ye();
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
      throw new ye();
    const e = await this.getSizeOrNull();
    if (e === null)
      throw new Error("Cannot determine the size of an unsized source.");
    return e;
  }
}
class Vd extends St {
  /**
   * Creates a new {@link BufferSource} backed by the specified `ArrayBuffer`, `SharedArrayBuffer`,
   * or `ArrayBufferView`.
   */
  constructor(e) {
    if (!(e instanceof ArrayBuffer) && !(typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) && !ArrayBuffer.isView(e))
      throw new TypeError("buffer must be an ArrayBuffer, SharedArrayBuffer, or ArrayBufferView.");
    super(), this._onreadCalled = !1, this._bytes = ee(e), this._view = H(e);
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
class Ld extends St {
  /**
   * Creates a new {@link BlobSource} backed by the specified
   * [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob).
   */
  constructor(e, t = {}) {
    if (!(e instanceof Blob))
      throw new TypeError("blob must be a Blob.");
    if (!t || typeof t != "object")
      throw new TypeError("options must be an object.");
    if (t.maxCacheSize !== void 0 && (!Nt(t.maxCacheSize) || t.maxCacheSize < 0))
      throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    super(), this._readers = /* @__PURE__ */ new WeakMap(), this._blob = e, this._orchestrator = new Zr({
      maxCacheSize: t.maxCacheSize ?? 8 * 2 ** 20,
      maxWorkerCount: 4,
      runWorker: this._runWorker.bind(this),
      prefetchProfile: Yr.fileSystem
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
    for (t === void 0 && ("stream" in this._blob && !bi() ? t = this._blob.slice(e.currentPos).stream().getReader() : t = null, this._readers.set(e, t)); e.currentPos < e.targetPos && !e.aborted; )
      if (t) {
        const { done: r, value: s } = await t.read();
        if (r)
          throw this._orchestrator.forgetWorker(e), new Error("Blob reader stopped unexpectedly before all requested data was read.");
        if (e.aborted)
          break;
        this.onread?.(e.currentPos, e.currentPos + s.length), this._orchestrator.supplyWorkerData(e, s);
      } else {
        const r = await this._blob.slice(e.currentPos, e.targetPos).arrayBuffer();
        if (e.aborted)
          break;
        this.onread?.(e.currentPos, e.currentPos + r.byteLength), this._orchestrator.supplyWorkerData(e, new Uint8Array(r));
      }
    e.running = !1, e.aborted && await t?.cancel();
  }
  /** @internal */
  _dispose() {
    this._orchestrator.dispose();
  }
}
const Jn = 0.5 * 2 ** 20, Pc = (i, e, t) => {
  if (e instanceof Error && (e.message.includes("Failed to fetch") || e.message.includes("Load failed") || e.message.includes("NetworkError when attempting to fetch resource"))) {
    let s = null;
    try {
      typeof window < "u" && typeof window.location < "u" && (s = new URL(t instanceof Request ? t.url : t, window.location.href).origin);
    } catch {
    }
    if ((typeof navigator < "u" && typeof navigator.onLine == "boolean" ? navigator.onLine : !0) && s !== null && s !== window.location.origin)
      return console.warn("Request will not be retried because a CORS error was suspected due to different origins. You can modify this behavior by providing your own function for the 'getRetryDelay' option."), null;
  }
  return Math.min(2 ** (i - 2), 16);
};
class Wd extends St {
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
    if (t.maxCacheSize !== void 0 && (!Nt(t.maxCacheSize) || t.maxCacheSize < 0))
      throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    if (t.parallelism !== void 0 && (!Number.isInteger(t.parallelism) || t.parallelism < 1))
      throw new TypeError("options.parallelism, when provided, must be a positive number.");
    if (t.fetchFn !== void 0 && typeof t.fetchFn != "function")
      throw new TypeError("options.fetchFn, when provided, must be a function.");
    super(), this._existingResponses = /* @__PURE__ */ new WeakMap(), this._url = e, this._options = t, this._getRetryDelay = t.getRetryDelay ?? Pc;
    const r = 2;
    this._orchestrator = new Zr({
      maxCacheSize: t.maxCacheSize ?? 64 * 2 ** 20,
      maxWorkerCount: t.parallelism ?? r,
      runWorker: this._runWorker.bind(this),
      prefetchProfile: Yr.network
    });
  }
  /** @internal */
  async _retrieveSize() {
    const e = new AbortController(), t = await ks(this._options.fetchFn ?? fetch, this._url, bs(this._options.requestInit ?? {}, {
      headers: {
        // We could also send a non-range request to request the same bytes (all of them), but doing it like
        // this is an easy way to check if the server supports range requests in the first place
        Range: "bytes=0-"
      },
      signal: e.signal
    }), this._getRetryDelay, () => this._disposed);
    if (!t.ok)
      throw new Error(`Error fetching ${String(this._url)}: ${t.status} ${t.statusText}`);
    let r, s;
    if (t.status === 206)
      s = this._getTotalLengthFromRangeResponse(t), r = this._orchestrator.createWorker(0, Math.min(s, Jn));
    else {
      const n = t.headers.get("Content-Length");
      if (n)
        s = Number(n), r = this._orchestrator.createWorker(0, s), this._orchestrator.options.maxCacheSize = 1 / 0, console.warn("HTTP server did not respond with 206 Partial Content, meaning the entire remote resource now has to be downloaded. For efficient media file streaming across a network, please make sure your server supports range requests.");
      else
        throw new Error(`HTTP response (status ${t.status}) must surface Content-Length header.`);
    }
    return this._orchestrator.fileSize = s, this._existingResponses.set(r, { response: t, abortController: e }), this._orchestrator.runWorker(r), s;
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
      let r = t?.abortController, s = t?.response;
      if (r || (r = new AbortController(), s = await ks(this._options.fetchFn ?? fetch, this._url, bs(this._options.requestInit ?? {}, {
        headers: {
          Range: `bytes=${e.currentPos}-`
        },
        signal: r.signal
      }), this._getRetryDelay, () => this._disposed)), p(s), !s.ok)
        throw new Error(`Error fetching ${String(this._url)}: ${s.status} ${s.statusText}`);
      if (e.currentPos > 0 && s.status !== 206)
        throw new Error("HTTP server did not respond with 206 Partial Content to a range request. To enable efficient media file streaming across a network, please make sure your server supports range requests.");
      if (!s.body)
        throw new Error("Missing HTTP response body stream. The used fetch function must provide the response body as a ReadableStream.");
      const n = s.body.getReader();
      for (; ; ) {
        if (e.currentPos >= e.targetPos || e.aborted) {
          r.abort(), e.running = !1;
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
    const r = e.headers.get("Content-Length");
    if (r)
      return Number(r);
    throw new Error("Partial HTTP response (status 206) must surface either Content-Range or Content-Length header.");
  }
  /** @internal */
  _dispose() {
    this._orchestrator.dispose();
  }
}
class Hd extends St {
  /** Creates a new {@link FilePathSource} backed by the file at the specified file path. */
  constructor(e, t = {}) {
    if (typeof e != "string")
      throw new TypeError("filePath must be a string.");
    if (!t || typeof t != "object")
      throw new TypeError("options must be an object.");
    if (t.maxCacheSize !== void 0 && (!Nt(t.maxCacheSize) || t.maxCacheSize < 0))
      throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    super(), this._fileHandle = null, this._streamSource = new Cc({
      getSize: async () => (this._fileHandle = await xc.fs.open(e, "r"), (await this._fileHandle.stat()).size),
      read: async (r, s) => {
        p(this._fileHandle);
        const n = new Uint8Array(s - r);
        return await this._fileHandle.read(n, 0, s - r, r), n;
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
class Cc extends St {
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
    if (e.maxCacheSize !== void 0 && (!Nt(e.maxCacheSize) || e.maxCacheSize < 0))
      throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    if (e.prefetchProfile && !["none", "fileSystem", "network"].includes(e.prefetchProfile))
      throw new TypeError("options.prefetchProfile, when provided, must be one of 'none', 'fileSystem' or 'network'.");
    super(), this._options = e, this._orchestrator = new Zr({
      maxCacheSize: e.maxCacheSize ?? 8 * 2 ** 20,
      maxWorkerCount: 2,
      // Fixed for now, *should* be fine
      prefetchProfile: Yr[e.prefetchProfile ?? "none"],
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
      const t = e.currentPos, r = e.targetPos;
      let s = this._options.read(e.currentPos, r);
      if (s instanceof Promise && (s = await s), e.aborted)
        break;
      if (s instanceof Uint8Array) {
        if (s = ee(s), s.length !== r - e.currentPos)
          throw new Error(`options.read returned a Uint8Array with unexpected length: Requested ${r - e.currentPos} bytes, but got ${s.length}.`);
        this.onread?.(e.currentPos, e.currentPos + s.length), this._orchestrator.supplyWorkerData(e, s);
      } else if (s instanceof ReadableStream) {
        const n = s.getReader();
        for (; e.currentPos < r && !e.aborted; ) {
          const { done: a, value: o } = await n.read();
          if (a) {
            if (e.currentPos < r)
              throw new Error(`ReadableStream returned by options.read ended before supplying enough data. Requested ${r - t} bytes, but got ${e.currentPos - t}`);
            break;
          }
          if (!(o instanceof Uint8Array))
            throw new TypeError("ReadableStream returned by options.read must yield Uint8Array chunks.");
          if (e.aborted)
            break;
          const c = ee(o);
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
class qd extends St {
  /** Creates a new {@link ReadableStreamSource} backed by the specified `ReadableStream<Uint8Array>`. */
  constructor(e, t = {}) {
    if (!(e instanceof ReadableStream))
      throw new TypeError("stream must be a ReadableStream.");
    if (!t || typeof t != "object")
      throw new TypeError("options must be an object.");
    if (t.maxCacheSize !== void 0 && (!Nt(t.maxCacheSize) || t.maxCacheSize < 0))
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
    const r = Q(this._cache, e, (d) => d.start), s = r !== -1 ? this._cache[r] : null;
    if (s && s.start <= e && t <= s.end)
      return {
        bytes: s.bytes,
        view: s.view,
        offset: s.start
      };
    let n = e;
    const a = new Uint8Array(t - e);
    if (r !== -1)
      for (let d = r; d < this._cache.length; d++) {
        const u = this._cache[d];
        if (u.start >= t)
          break;
        const h = Math.max(e, u.start);
        h > n && this._throwDueToCacheMiss();
        const f = Math.min(t, u.end);
        h < f && (a.set(u.bytes.subarray(h - u.start, f - u.start), h - e), n = f);
      }
    if (n === t)
      return {
        bytes: a,
        view: H(a),
        offset: e
      };
    this._currentIndex > n && this._throwDueToCacheMiss();
    const { promise: o, resolve: c, reject: l } = J();
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
      const r = this._currentIndex, s = this._currentIndex + t.byteLength;
      for (let n = 0; n < this._pendingSlices.length; n++) {
        const a = this._pendingSlices[n], o = Math.max(r, a.start), c = Math.min(s, a.end);
        o < c && (a.bytes.set(t.subarray(o - r, c - r), o - a.start), c === a.end && (a.resolve({
          bytes: a.bytes,
          view: H(a.bytes),
          offset: a.start
        }), this._pendingSlices.splice(n, 1), n--));
      }
      for (this._cache.push({
        start: r,
        end: s,
        bytes: t,
        view: H(t),
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
const Yr = {
  none: (i, e) => ({ start: i, end: e }),
  fileSystem: (i, e) => (i = Math.floor((i - 65536) / 65536) * 65536, e = Math.ceil((e + 65536) / 65536) * 65536, { start: i, end: e }),
  network: (i, e, t) => {
    i = Math.max(0, Math.floor((i - 65536) / 65536) * 65536);
    for (const s of t) {
      const a = Math.max((s.startPos + s.targetPos) / 2, s.targetPos - 8388608);
      if (or(i, e, a, s.targetPos)) {
        const o = s.targetPos - s.startPos, c = Math.ceil((o + 1) / 8388608) * 8388608, l = 2 ** Math.ceil(Math.log2(o + 1)), d = Math.min(l, c);
        e = Math.max(e, s.startPos + d);
      }
    }
    return e = Math.max(e, i + Jn), {
      start: i,
      end: e
    };
  }
};
class Zr {
  constructor(e) {
    this.options = e, this.fileSize = null, this.nextAge = 0, this.workers = [], this.cache = [], this.currentCacheSize = 0, this.disposed = !1;
  }
  read(e, t) {
    p(this.fileSize !== null);
    const r = this.options.prefetchProfile(e, t, this.workers), s = Math.max(r.start, 0), n = Math.min(r.end, this.fileSize);
    p(s <= e && t <= n);
    let a = null;
    const o = Q(this.cache, e, (k) => k.start), c = o !== -1 ? this.cache[o] : null;
    c && c.start <= e && t <= c.end && (c.age = this.nextAge++, a = {
      bytes: c.bytes,
      view: c.view,
      offset: c.start
    });
    const l = Q(this.cache, s, (k) => k.start), d = a ? null : new Uint8Array(t - e);
    let u = 0, h = s;
    const f = [];
    if (l !== -1) {
      for (let k = l; k < this.cache.length; k++) {
        const T = this.cache[k];
        if (T.start >= n)
          break;
        if (T.end <= s)
          continue;
        const S = Math.max(s, T.start), P = Math.min(n, T.end);
        if (p(S <= P), h < S && f.push({ start: h, end: S }), h = P, d) {
          const x = Math.max(e, T.start), C = Math.min(t, T.end);
          if (x < C) {
            const _ = x - e;
            d.set(T.bytes.subarray(x - T.start, C - T.start), _), _ === u && (u = C - e);
          }
        }
        T.age = this.nextAge++;
      }
      h < n && f.push({ start: h, end: n });
    } else
      f.push({ start: s, end: n });
    if (d && u >= d.length && (a = {
      bytes: d,
      view: H(d),
      offset: e
    }), f.length === 0)
      return p(a), a;
    const { promise: g, resolve: m, reject: w } = J(), y = [];
    for (const k of f) {
      const T = Math.max(e, k.start), S = Math.min(t, k.end);
      T === k.start && S === k.end ? y.push(k) : T < S && y.push({ start: T, end: S });
    }
    for (const k of f) {
      const T = d && {
        start: e,
        bytes: d,
        holes: y,
        resolve: m,
        reject: w
      };
      let S = !1;
      for (const P of this.workers)
        if (or(k.start - 131072, k.start, P.currentPos, P.targetPos)) {
          P.targetPos = Math.max(P.targetPos, k.end), S = !0, T && !P.pendingSlices.includes(T) && P.pendingSlices.push(T), P.running || this.runWorker(P);
          break;
        }
      if (!S) {
        const P = this.createWorker(k.start, k.end);
        T && (P.pendingSlices = [T]), this.runWorker(P);
      }
    }
    return a || (p(d), a = g.then((k) => ({
      bytes: k,
      view: H(k),
      offset: e
    }))), a;
  }
  createWorker(e, t) {
    const r = {
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
    for (this.workers.push(r); this.workers.length > this.options.maxWorkerCount; ) {
      let s = 0, n = this.workers[0];
      for (let a = 1; a < this.workers.length; a++) {
        const o = this.workers[a];
        o.age < n.age && (s = a, n = o);
      }
      if (n.running && n.pendingSlices.length > 0)
        break;
      n.aborted = !0, this.workers.splice(s, 1);
    }
    return r;
  }
  runWorker(e) {
    p(!e.running), p(e.currentPos < e.targetPos), e.running = !0, e.age = this.nextAge++, this.options.runWorker(e).catch((t) => {
      if (e.running = !1, e.pendingSlices.length > 0)
        e.pendingSlices.forEach((r) => r.reject(t)), e.pendingSlices.length = 0;
      else
        throw t;
    });
  }
  /** Called by a worker when it has read some data. */
  supplyWorkerData(e, t) {
    p(!e.aborted);
    const r = e.currentPos, s = r + t.length;
    this.insertIntoCache({
      start: r,
      end: s,
      bytes: t,
      view: H(t),
      age: this.nextAge++
    }), e.currentPos += t.length, e.targetPos = Math.max(e.targetPos, e.currentPos);
    for (let n = 0; n < e.pendingSlices.length; n++) {
      const a = e.pendingSlices[n], o = Math.max(r, a.start), c = Math.min(s, a.start + a.bytes.length);
      o < c && a.bytes.set(t.subarray(o - r, c - r), o - a.start);
      for (let l = 0; l < a.holes.length; l++) {
        const d = a.holes[l];
        r <= d.start && s > d.start && (d.start = s), d.end <= d.start && (a.holes.splice(l, 1), l--);
      }
      a.holes.length === 0 && (a.resolve(a.bytes), e.pendingSlices.splice(n, 1), n--);
    }
    for (let n = 0; n < this.workers.length; n++) {
      const a = this.workers[n];
      e === a || a.running || or(r, s, a.currentPos, a.targetPos) && (this.workers.splice(n, 1), n--);
    }
  }
  forgetWorker(e) {
    const t = this.workers.indexOf(e);
    p(t !== -1), this.workers.splice(t, 1);
  }
  insertIntoCache(e) {
    if (this.options.maxCacheSize === 0)
      return;
    let t = Q(this.cache, e.start, (r) => r.start) + 1;
    if (t > 0) {
      const r = this.cache[t - 1];
      if (r.end >= e.end)
        return;
      if (r.end > e.start) {
        const s = new Uint8Array(e.end - r.start);
        s.set(r.bytes, 0), s.set(e.bytes, e.start - r.start), this.currentCacheSize += e.end - r.end, r.bytes = s, r.view = H(s), r.end = e.end, t--, e = r;
      } else
        this.cache.splice(t, 0, e), this.currentCacheSize += e.bytes.length;
    } else
      this.cache.splice(t, 0, e), this.currentCacheSize += e.bytes.length;
    for (let r = t + 1; r < this.cache.length; r++) {
      const s = this.cache[r];
      if (e.end <= s.start)
        break;
      if (e.end >= s.end) {
        this.cache.splice(r, 1), this.currentCacheSize -= s.bytes.length, r--;
        continue;
      }
      const n = new Uint8Array(s.end - e.start);
      n.set(e.bytes, 0), n.set(s.bytes, s.start - e.start), this.currentCacheSize -= e.end - s.start, e.bytes = n, e.view = H(n), e.end = s.end, this.cache.splice(r, 1);
      break;
    }
    for (; this.currentCacheSize > this.options.maxCacheSize; ) {
      let r = 0, s = this.cache[0];
      for (let n = 1; n < this.cache.length; n++) {
        const a = this.cache[n];
        a.age < s.age && (r = n, s = a);
      }
      if (this.currentCacheSize - s.bytes.length <= this.options.maxCacheSize)
        break;
      this.cache.splice(r, 1), this.currentCacheSize -= s.bytes.length;
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
Aa();
class _c {
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
    if (!Array.isArray(e.formats) || e.formats.some((t) => !(t instanceof Xe)))
      throw new TypeError("options.formats must be an array of InputFormat.");
    if (!(e.source instanceof St))
      throw new TypeError("options.source must be a Source.");
    if (e.source._disposed)
      throw new Error("options.source must not be disposed.");
    this._formats = e.formats, this._source = e.source, this._reader = new Ic(e.source);
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
    const t = await Promise.all(e.map((r) => r.getFirstTimestamp()));
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
class ye extends Error {
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
class Ic {
  constructor(e) {
    this.source = e;
  }
  requestSlice(e, t) {
    if (this.source._disposed)
      throw new ye();
    if (e < 0 || this.fileSize !== null && e + t > this.fileSize)
      return null;
    const r = e + t, s = this.source._read(e, r);
    return s instanceof Promise ? s.then((n) => n ? new pe(n.bytes, n.view, n.offset, e, r) : null) : s ? new pe(s.bytes, s.view, s.offset, e, r) : null;
  }
  requestSliceRange(e, t, r) {
    if (this.source._disposed)
      throw new ye();
    if (e < 0)
      return null;
    if (this.fileSize !== null)
      return this.requestSlice(e, ke(this.fileSize - e, t, r));
    {
      const s = this.requestSlice(e, r), n = (a) => {
        if (a)
          return a;
        const o = (l) => (p(l !== null), this.requestSlice(e, ke(l - e, t, r))), c = this.source._retrieveSize();
        return c instanceof Promise ? c.then(o) : o(c);
      };
      return s instanceof Promise ? s.then(n) : n(s);
    }
  }
}
class pe {
  constructor(e, t, r, s, n) {
    this.bytes = e, this.view = t, this.offset = r, this.start = s, this.end = n, this.bufferPos = s - r;
  }
  static tempFromBytes(e) {
    return new pe(e, H(e), 0, 0, e.length);
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
    return new pe(this.bytes, this.view, this.offset, e, e + t);
  }
}
const ge = (i, e) => {
  if (i.filePos < i.start || i.filePos + e > i.end)
    throw new RangeError(`Tried reading [${i.filePos}, ${i.filePos + e}), but slice is [${i.start}, ${i.end}). This is likely an internal error, please report it alongside the file that caused it.`);
}, D = (i, e) => {
  ge(i, e);
  const t = i.bytes.subarray(i.bufferPos, i.bufferPos + e);
  return i.bufferPos += e, t;
}, B = (i) => (ge(i, 1), i.view.getUint8(i.bufferPos++)), jt = (i, e) => {
  ge(i, 2);
  const t = i.view.getUint16(i.bufferPos, e);
  return i.bufferPos += 2, t;
}, ae = (i) => {
  ge(i, 2);
  const e = i.view.getUint16(i.bufferPos, !1);
  return i.bufferPos += 2, e;
}, Et = (i) => {
  ge(i, 3);
  const e = Rr(i.view, i.bufferPos, !1);
  return i.bufferPos += 3, e;
}, _r = (i) => {
  ge(i, 2);
  const e = i.view.getInt16(i.bufferPos, !1);
  return i.bufferPos += 2, e;
}, nt = (i, e) => {
  ge(i, 4);
  const t = i.view.getUint32(i.bufferPos, e);
  return i.bufferPos += 4, t;
}, A = (i) => {
  ge(i, 4);
  const e = i.view.getUint32(i.bufferPos, !1);
  return i.bufferPos += 4, e;
}, vt = (i) => {
  ge(i, 4);
  const e = i.view.getUint32(i.bufferPos, !0);
  return i.bufferPos += 4, e;
}, wt = (i) => {
  ge(i, 4);
  const e = i.view.getInt32(i.bufferPos, !1);
  return i.bufferPos += 4, e;
}, Ec = (i) => {
  ge(i, 4);
  const e = i.view.getInt32(i.bufferPos, !0);
  return i.bufferPos += 4, e;
}, Rs = (i, e) => {
  let t, r;
  return e ? (t = nt(i, !0), r = nt(i, !0)) : (r = nt(i, !1), t = nt(i, !1)), r * 4294967296 + t;
}, Ee = (i) => {
  const e = A(i), t = A(i);
  return e * 4294967296 + t;
}, vc = (i) => {
  const e = wt(i), t = A(i);
  return e * 4294967296 + t;
}, Ac = (i) => {
  const e = vt(i);
  return Ec(i) * 4294967296 + e;
}, Fc = (i) => {
  ge(i, 4);
  const e = i.view.getFloat32(i.bufferPos, !1);
  return i.bufferPos += 4, e;
}, ea = (i) => {
  ge(i, 8);
  const e = i.view.getFloat64(i.bufferPos, !1);
  return i.bufferPos += 8, e;
}, oe = (i, e) => {
  ge(i, e);
  let t = "";
  for (let r = 0; r < e; r++)
    t += String.fromCharCode(i.bytes[i.bufferPos++]);
  return t;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
var At;
(function(i) {
  i[i.Unsynchronisation = 128] = "Unsynchronisation", i[i.ExtendedHeader = 64] = "ExtendedHeader", i[i.ExperimentalIndicator = 32] = "ExperimentalIndicator", i[i.Footer = 16] = "Footer";
})(At || (At = {}));
var de;
(function(i) {
  i[i.ISO_8859_1 = 0] = "ISO_8859_1", i[i.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", i[i.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", i[i.UTF_8 = 3] = "UTF_8";
})(de || (de = {}));
const Ti = 128, Ge = 10, Ft = [
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
], Bc = (i, e) => {
  const t = i.filePos;
  e.raw ??= {}, e.raw.TAG ??= D(i, Ti - 3), i.filePos = t;
  const r = Pt(i, 30);
  r && (e.title ??= r);
  const s = Pt(i, 30);
  s && (e.artist ??= s);
  const n = Pt(i, 30);
  n && (e.album ??= n);
  const a = Pt(i, 4), o = Number.parseInt(a, 10);
  Number.isInteger(o) && o > 0 && (e.date ??= new Date(o, 0, 1));
  const c = D(i, 30);
  let l;
  if (c[28] === 0 && c[29] !== 0) {
    const u = c[29];
    u > 0 && (e.trackNumber ??= u), i.skip(-30), l = Pt(i, 28), i.skip(2);
  } else
    i.skip(-30), l = Pt(i, 30);
  l && (e.comment ??= l);
  const d = B(i);
  d < Ft.length && (e.genre ??= Ft[d]);
}, Pt = (i, e) => {
  const t = D(i, e), r = _t(t.indexOf(0), t.length), s = t.subarray(0, r);
  let n = "";
  for (let a = 0; a < s.length; a++)
    n += String.fromCharCode(s[a]);
  return n.trimEnd();
}, bt = (i) => {
  const e = i.filePos, t = oe(i, 3), r = B(i), s = B(i), n = B(i), a = A(i);
  if (t !== "ID3" || r === 255 || s === 255 || (a & 2155905152) !== 0)
    return i.filePos = e, null;
  const o = fr(a);
  return { majorVersion: r, revision: s, flags: n, size: o };
}, Jr = (i, e, t) => {
  if (![2, 3, 4].includes(e.majorVersion)) {
    console.warn(`Unsupported ID3v2 major version: ${e.majorVersion}`);
    return;
  }
  const r = D(i, e.size), s = new Rc(e, r);
  if (e.flags & At.Footer && s.removeFooter(), e.flags & At.Unsynchronisation && e.majorVersion === 3 && s.ununsynchronizeAll(), e.flags & At.ExtendedHeader) {
    const n = s.readU32();
    e.majorVersion === 3 ? s.pos += n : s.pos += n - 4;
  }
  for (; s.pos <= s.bytes.length - s.frameHeaderSize(); ) {
    const n = s.readId3V2Frame();
    if (!n)
      break;
    const a = s.pos, o = s.pos + n.size;
    let c = !1, l = !1, d = !1;
    if (e.majorVersion === 3 ? (c = !!(n.flags & 64), l = !!(n.flags & 128)) : e.majorVersion === 4 && (c = !!(n.flags & 4), l = !!(n.flags & 8), d = !!(n.flags & 2) || !!(e.flags & At.Unsynchronisation)), c) {
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
          const h = s.readId3V2EncodingAndText(o).split("/"), f = Number.parseInt(h[0], 10), g = h[1] && Number.parseInt(h[1], 10);
          Number.isInteger(f) && f > 0 && (t.trackNumber ??= f), g && Number.isInteger(g) && g > 0 && (t.tracksTotal ??= g);
        }
        break;
      case "TPOS":
      case "TPA":
        {
          const h = s.readId3V2EncodingAndText(o).split("/"), f = Number.parseInt(h[0], 10), g = h[1] && Number.parseInt(h[1], 10);
          Number.isInteger(f) && f > 0 && (t.discNumber ??= f), g && Number.isInteger(g) && g > 0 && (t.discsTotal ??= g);
        }
        break;
      case "TCON":
      case "TCO":
        {
          const u = s.readId3V2EncodingAndText(o);
          let h = /^\((\d+)\)/.exec(u);
          if (h) {
            const f = Number.parseInt(h[1]);
            if (Ft[f] !== void 0) {
              t.genre ??= Ft[f];
              break;
            }
          }
          if (h = /^\d+$/.exec(u), h) {
            const f = Number.parseInt(h[0]);
            if (Ft[f] !== void 0) {
              t.genre ??= Ft[f];
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
          const f = s.readU8(), g = s.readId3V2Text(u, o).trimEnd(), m = o - s.pos;
          if (m >= 0) {
            const w = s.readBytes(m);
            t.images || (t.images = []), t.images.push({
              data: w,
              mimeType: h,
              kind: f === 3 ? "coverFront" : f === 4 ? "coverBack" : "unknown",
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
class Rc {
  constructor(e, t) {
    this.header = e, this.bytes = t, this.pos = 0, this.view = new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  frameHeaderSize() {
    return this.header.majorVersion === 2 ? 6 : 10;
  }
  ununsynchronizeAll() {
    const e = [];
    for (let t = 0; t < this.bytes.length; t++) {
      const r = this.bytes[t];
      e.push(r), r === 255 && t !== this.bytes.length - 1 && this.bytes[t] === 0 && t++;
    }
    this.bytes = new Uint8Array(e), this.view = new DataView(this.bytes.buffer);
  }
  ununsynchronizeRegion(e, t) {
    const r = [];
    for (let a = e; a < t; a++) {
      const o = this.bytes[a];
      r.push(o), o === 255 && a !== t - 1 && this.bytes[a + 1] === 0 && a++;
    }
    const s = this.bytes.subarray(0, e), n = this.bytes.subarray(t);
    this.bytes = new Uint8Array(s.length + r.length + n.length), this.bytes.set(s, 0), this.bytes.set(r, s.length), this.bytes.set(n, s.length + r.length), this.view = new DataView(this.bytes.buffer);
  }
  removeFooter() {
    this.bytes = this.bytes.subarray(0, this.bytes.length - Ge), this.view = new DataView(this.bytes.buffer);
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
    for (let r = 0; r < e; r++)
      t += String.fromCharCode(this.view.getUint8(this.pos + r));
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
      let r = this.header.majorVersion === 4 ? fr(t) : t;
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
      if (!a(r)) {
        const o = this.header.majorVersion === 4 ? t : fr(t);
        a(o) && (r = o);
      }
      return this.pos = n, { id: e, size: r, flags: s };
    }
  }
  readId3V2TextEncoding() {
    const e = this.readU8();
    if (e > 3)
      throw new Error(`Unsupported text encoding: ${e}`);
    return e;
  }
  readId3V2Text(e, t) {
    const r = this.pos, s = this.readBytes(t - this.pos);
    switch (e) {
      case de.ISO_8859_1: {
        let n = "";
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o === 0) {
            this.pos = r + a + 1;
            break;
          }
          n += String.fromCharCode(o);
        }
        return n;
      }
      case de.UTF_16_WITH_BOM:
        if (s[0] === 255 && s[1] === 254) {
          const n = new TextDecoder("utf-16le"), a = _t(s.findIndex((o, c) => o === 0 && s[c + 1] === 0 && c % 2 === 0), s.length);
          return this.pos = r + Math.min(a + 2, s.length), n.decode(s.subarray(2, a));
        } else if (s[0] === 254 && s[1] === 255) {
          const n = new TextDecoder("utf-16be"), a = _t(s.findIndex((o, c) => o === 0 && s[c + 1] === 0 && c % 2 === 0), s.length);
          return this.pos = r + Math.min(a + 2, s.length), n.decode(s.subarray(2, a));
        } else {
          const n = _t(s.findIndex((a) => a === 0), s.length);
          return this.pos = r + Math.min(n + 1, s.length), _e.decode(s.subarray(0, n));
        }
      case de.UTF_16_BE_NO_BOM: {
        const n = new TextDecoder("utf-16be"), a = _t(s.findIndex((o, c) => o === 0 && s[c + 1] === 0 && c % 2 === 0), s.length);
        return this.pos = r + Math.min(a + 2, s.length), n.decode(s.subarray(0, a));
      }
      case de.UTF_8: {
        const n = _t(s.findIndex((a) => a === 0), s.length);
        return this.pos = r + Math.min(n + 1, s.length), _e.decode(s.subarray(0, n));
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
class es {
  constructor(e) {
    this.helper = new Uint8Array(8), this.helperView = H(this.helper), this.writer = e;
  }
  writeId3V2Tag(e) {
    const t = this.writer.getPos();
    this.writeAscii("ID3"), this.writeU8(4), this.writeU8(0), this.writeU8(0), this.writeSynchsafeU32(0);
    const r = this.writer.getPos(), s = /* @__PURE__ */ new Set();
    for (const { key: o, value: c } of Ut(e))
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
          fe(o);
      }
    if (e.raw)
      for (const o in e.raw) {
        const c = e.raw[o];
        if (c == null || o.length !== 4 || s.has(o))
          continue;
        let l;
        if (typeof c == "string") {
          const d = X.encode(c);
          l = new Uint8Array(d.byteLength + 2), l[0] = de.UTF_8, l.set(d, 1);
        } else if (c instanceof Uint8Array)
          l = c;
        else
          continue;
        this.writeAscii(o), this.writeSynchsafeU32(l.byteLength), this.writeU16(0), this.writer.write(l);
      }
    const n = this.writer.getPos(), a = n - r;
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
    this.writeU32(Za(e));
  }
  writeIsoString(e) {
    const t = new Uint8Array(e.length + 1);
    for (let r = 0; r < e.length; r++)
      t[r] = e.charCodeAt(r);
    t[e.length] = 0, this.writer.write(t);
  }
  writeUtf8String(e) {
    const t = X.encode(e);
    this.writer.write(t), this.writeU8(0);
  }
  writeId3V2TextFrame(e, t) {
    const r = Ct(t), n = 1 + (r ? t.length : X.encode(t).byteLength) + 1;
    this.writeAscii(e), this.writeSynchsafeU32(n), this.writeU16(0), this.writeU8(r ? de.ISO_8859_1 : de.UTF_8), r ? this.writeIsoString(t) : this.writeUtf8String(t);
  }
  writeId3V2LyricsFrame(e) {
    const t = Ct(e), r = "", s = 4 + r.length + 1 + e.length + 1;
    this.writeAscii("USLT"), this.writeSynchsafeU32(s), this.writeU16(0), this.writeU8(t ? de.ISO_8859_1 : de.UTF_8), this.writeAscii("und"), t ? (this.writeIsoString(r), this.writeIsoString(e)) : (this.writeUtf8String(r), this.writeUtf8String(e));
  }
  writeId3V2CommentFrame(e) {
    const t = Ct(e), r = t ? e.length : X.encode(e).byteLength, s = "", n = 4 + s.length + 1 + r + 1;
    this.writeAscii("COMM"), this.writeSynchsafeU32(n), this.writeU16(0), this.writeU8(t ? de.ISO_8859_1 : de.UTF_8), this.writeU8(117), this.writeU8(110), this.writeU8(100), t ? (this.writeIsoString(s), this.writeIsoString(e)) : (this.writeUtf8String(s), this.writeUtf8String(e));
  }
  writeId3V2ApicFrame(e, t, r, s) {
    const n = Ct(e) && Ct(r), a = n ? r.length : X.encode(r).byteLength, o = 1 + e.length + 1 + 1 + a + 1 + s.byteLength;
    this.writeAscii("APIC"), this.writeSynchsafeU32(o), this.writeU16(0), this.writeU8(n ? de.ISO_8859_1 : de.UTF_8), n ? this.writeIsoString(e) : this.writeUtf8String(e), this.writeU8(t), n ? this.writeIsoString(r) : this.writeUtf8String(r), this.writer.write(s);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class dt {
  constructor(e) {
    this.mutex = new Ot(), this.firstMediaStreamTimestamp = null, this.trackTimestampInfo = /* @__PURE__ */ new WeakMap(), this.output = e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onTrackClose(e) {
  }
  validateAndNormalizeTimestamp(e, t, r) {
    if (t += e.source._timestampOffset, t < 0)
      throw new Error(`Timestamps must be non-negative (got ${t}s).`);
    let s = this.trackTimestampInfo.get(e);
    if (s) {
      if (r && (s.maxTimestampBeforeLastKeyPacket = s.maxTimestamp), s.maxTimestampBeforeLastKeyPacket !== null && t < s.maxTimestampBeforeLastKeyPacket)
        throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${t}s, but largest timestamp is ${s.maxTimestampBeforeLastKeyPacket}s.`);
      s.maxTimestamp = Math.max(s.maxTimestamp, t);
    } else {
      if (!r)
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
class Mc extends dt {
  constructor(e, t) {
    super(e), this.header = null, this.headerBitstream = null, this.inputIsAdts = null, this.format = t, this.writer = e._writer;
  }
  async start() {
    ri(this.output._metadataTags) || new es(this.writer).writeId3V2Tag(this.output._metadataTags);
  }
  async getMimeType() {
    return "audio/aac";
  }
  async addEncodedVideoPacket() {
    throw new Error("ADTS does not support video.");
  }
  async addEncodedAudioPacket(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      if (this.validateAndNormalizeTimestamp(e, t.timestamp, t.type === "key"), this.inputIsAdts === null) {
        Tt(r);
        const n = r?.decoderConfig?.description;
        if (this.inputIsAdts = !n, !this.inputIsAdts) {
          const a = ui(ee(n)), o = ln(a);
          this.header = o.header, this.headerBitstream = o.bitstream;
        }
      }
      if (this.inputIsAdts) {
        const n = this.writer.getPos();
        this.writer.write(t.data), this.format._options.onFrame && this.format._options.onFrame(t.data, n);
      } else {
        p(this.header);
        const n = t.data.byteLength + this.header.byteLength;
        dn(this.headerBitstream, n);
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
const Ms = /* @__PURE__ */ new Uint8Array([102, 76, 97, 67]), zc = 38, Dc = 34;
class Uc extends dt {
  constructor(e, t) {
    super(e), this.metadataWritten = !1, this.blockSizes = [], this.frameSizes = [], this.sampleRate = null, this.channels = null, this.bitsPerSample = null, this.writer = e._writer, this.format = t;
  }
  async start() {
    this.writer.write(Ms);
  }
  writeHeader({ bitsPerSample: e, minimumBlockSize: t, maximumBlockSize: r, minimumFrameSize: s, maximumFrameSize: n, sampleRate: a, channels: o, totalSamples: c }) {
    p(this.writer.getPos() === 4);
    const l = !ri(this.output._metadataTags), d = new O(new Uint8Array(4));
    d.writeBits(1, +!l), d.writeBits(7, je.STREAMINFO), d.writeBits(24, Dc), this.writer.write(d.bytes);
    const u = new O(new Uint8Array(18));
    if (u.writeBits(16, t), u.writeBits(16, r), u.writeBits(24, s), u.writeBits(24, n), u.writeBits(20, a), u.writeBits(3, o - 1), u.writeBits(5, e - 1), c >= 2 ** 32)
      throw new Error("This muxer only supports writing up to 2 ** 32 samples");
    u.writeBits(4, 0), u.writeBits(32, c), this.writer.write(u.bytes), this.writer.write(new Uint8Array(16));
  }
  writePictureBlock(e) {
    const t = 32 + e.mimeType.length + (e.description?.length ?? 0) + e.data.length, r = new Uint8Array(t);
    let s = 0;
    const n = H(r);
    n.setUint32(s, e.kind === "coverFront" ? 3 : e.kind === "coverBack" ? 4 : 0), s += 4, n.setUint32(s, e.mimeType.length), s += 4, r.set(X.encode(e.mimeType), 8), s += e.mimeType.length, n.setUint32(s, e.description?.length ?? 0), s += 4, r.set(X.encode(e.description ?? ""), s), s += e.description?.length ?? 0, s += 16, n.setUint32(s, e.data.length), s += 4, r.set(e.data, s), s += e.data.length, p(s === t);
    const a = new O(new Uint8Array(4));
    a.writeBits(1, 0), a.writeBits(7, je.PICTURE), a.writeBits(24, t), this.writer.write(a.bytes), this.writer.write(r);
  }
  writeVorbisCommentAndPictureBlock() {
    if (this.writer.seek(zc + Ms.byteLength), ri(this.output._metadataTags)) {
      this.metadataWritten = !0;
      return;
    }
    const e = this.output._metadataTags.images ?? [];
    for (const s of e)
      this.writePictureBlock(s);
    const t = gr(new Uint8Array(0), this.output._metadataTags, !1), r = new O(new Uint8Array(4));
    r.writeBits(1, 1), r.writeBits(7, je.VORBIS_COMMENT), r.writeBits(24, t.length), this.writer.write(r.bytes), this.writer.write(t), this.metadataWritten = !0;
  }
  async getMimeType() {
    return "audio/flac";
  }
  async addEncodedVideoPacket() {
    throw new Error("FLAC does not support video.");
  }
  async addEncodedAudioPacket(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      if (this.validateAndNormalizeTimestamp(e, t.timestamp, t.type === "key"), this.sampleRate === null) {
        Tt(r), p(r), p(r.decoderConfig), p(r.decoderConfig.description), this.sampleRate = r.decoderConfig.sampleRate, this.channels = r.decoderConfig.numberOfChannels;
        const u = new O(ee(r.decoderConfig.description));
        u.skipBits(167);
        const h = u.readBits(5) + 1;
        this.bitsPerSample = h;
      }
      this.metadataWritten || this.writeVorbisCommentAndPictureBlock();
      const n = pe.tempFromBytes(t.data);
      n.skip(2);
      const a = D(n, 2), o = new O(a), c = $n(o.readBits(4));
      if (c === null)
        throw new Error("Invalid FLAC frame: Invalid block size.");
      Kn(n);
      const l = Gn(n, c);
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
    let t = 1 / 0, r = 0, s = 1 / 0, n = 0, a = 0;
    for (let o = 0; o < this.blockSizes.length; o++)
      s = Math.min(s, this.frameSizes[o]), n = Math.max(n, this.frameSizes[o]), r = Math.max(r, this.blockSizes[o]), a += this.blockSizes[o], o !== this.blockSizes.length - 1 && (t = Math.min(t, this.blockSizes[o]));
    p(this.sampleRate !== null), p(this.channels !== null), p(this.bitsPerSample !== null), this.writer.seek(4), this.writeHeader({
      minimumBlockSize: t,
      maximumBlockSize: r,
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
const Qt = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g, Nc = /^WEBVTT(.|\n)*?\n{2}/, Ai = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
class Oc {
  constructor(e) {
    this.preambleText = null, this.preambleEmitted = !1, this.options = e;
  }
  parse(e) {
    e = e.replaceAll(`\r
`, `
`).replaceAll("\r", `
`), Qt.lastIndex = 0;
    let t;
    if (!this.preambleText) {
      if (!Nc.test(e))
        throw new Error("WebVTT preamble incorrect.");
      t = Qt.exec(e);
      const r = e.slice(0, t?.index ?? e.length).trimEnd();
      if (!r)
        throw new Error("No WebVTT preamble provided.");
      this.preambleText = r, t && (e = e.slice(t.index), Qt.lastIndex = 0);
    }
    for (; t = Qt.exec(e); ) {
      const r = e.slice(0, t.index), s = t[1], n = t.index + t[0].length, a = e.indexOf(`
`, n) + 1, o = e.slice(n, a).trim();
      let c = e.indexOf(`

`, n);
      c === -1 && (c = e.length);
      const l = Ir(t[2]), u = Ir(t[3]) - l, h = e.slice(a, c).trim();
      e = e.slice(c).trimStart(), Qt.lastIndex = 0;
      const f = {
        timestamp: l / 1e3,
        duration: u / 1e3,
        text: h,
        identifier: s,
        settings: o,
        notes: r
      }, g = {};
      this.preambleEmitted || (g.config = {
        description: this.preambleText
      }, this.preambleEmitted = !0), this.options.output(f, g);
    }
  }
}
const Vc = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/, Ir = (i) => {
  const e = Vc.exec(i);
  if (!e)
    throw new Error("Expected match.");
  return 60 * 60 * 1e3 * Number(e[1] || "0") + 60 * 1e3 * Number(e[2]) + 1e3 * Number(e[3]) + Number(e[4]);
}, ta = (i) => {
  const e = Math.floor(i / 36e5), t = Math.floor(i % (60 * 60 * 1e3) / (60 * 1e3)), r = Math.floor(i % (60 * 1e3) / 1e3), s = i % 1e3;
  return e.toString().padStart(2, "0") + ":" + t.toString().padStart(2, "0") + ":" + r.toString().padStart(2, "0") + "." + s.toString().padStart(3, "0");
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class zs {
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
      const r = this.writer.getPos(), s = e.size ?? r - t;
      this.writer.seek(t), this.writeBoxHeader(e, s), this.writer.seek(r);
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
    const r = this.writer.getPos();
    this.writer.seek(t), this.writeBox(e), this.writer.seek(r);
  }
  measureBox(e) {
    if (e.contents && !e.children)
      return this.measureBoxHeader(e) + e.contents.byteLength;
    {
      let t = this.measureBoxHeader(e);
      if (e.contents && (t += e.contents.byteLength), e.children)
        for (const r of e.children)
          r && (t += this.measureBox(r));
      return t;
    }
  }
}
const W = /* @__PURE__ */ new Uint8Array(8), De = /* @__PURE__ */ new DataView(W.buffer), Z = (i) => [(i % 256 + 256) % 256], z = (i) => (De.setUint16(0, i, !1), [W[0], W[1]]), ts = (i) => (De.setInt16(0, i, !1), [W[0], W[1]]), ia = (i) => (De.setUint32(0, i, !1), [W[1], W[2], W[3]]), I = (i) => (De.setUint32(0, i, !1), [W[0], W[1], W[2], W[3]]), rt = (i) => (De.setInt32(0, i, !1), [W[0], W[1], W[2], W[3]]), yt = (i) => (De.setUint32(0, Math.floor(i / 2 ** 32), !1), De.setUint32(4, i, !1), [W[0], W[1], W[2], W[3], W[4], W[5], W[6], W[7]]), ra = (i) => (De.setInt16(0, 2 ** 8 * i, !1), [W[0], W[1]]), Le = (i) => (De.setInt32(0, 2 ** 16 * i, !1), [W[0], W[1], W[2], W[3]]), Gi = (i) => (De.setInt32(0, 2 ** 30 * i, !1), [W[0], W[1], W[2], W[3]]), Xi = (i, e) => {
  const t = [];
  let r = i;
  do {
    let s = r & 127;
    r >>= 7, t.length > 0 && (s |= 128), t.push(s);
  } while (r > 0 || e);
  return t.reverse();
}, ce = (i, e = !1) => {
  const t = Array(i.length).fill(null).map((r, s) => i.charCodeAt(s));
  return e && t.push(0), t;
}, is = (i) => {
  let e = null;
  for (const t of i)
    (!e || t.timestamp > e.timestamp) && (e = t);
  return e;
}, sa = (i) => {
  const e = i * (Math.PI / 180), t = Math.round(Math.cos(e)), r = Math.round(Math.sin(e));
  return [
    t,
    r,
    0,
    -r,
    t,
    0,
    0,
    0,
    1
  ];
}, na = /* @__PURE__ */ sa(0), aa = (i) => [
  Le(i[0]),
  Le(i[1]),
  Gi(i[2]),
  Le(i[3]),
  Le(i[4]),
  Gi(i[5]),
  Le(i[6]),
  Le(i[7]),
  Gi(i[8])
], R = (i, e, t) => ({
  type: i,
  contents: e && new Uint8Array(e.flat(10)),
  children: t
}), q = (i, e, t, r, s) => R(i, [Z(e), ia(t), r ?? []], s), Lc = (i) => i.isQuickTime ? R("ftyp", [
  ce("qt  "),
  // Major brand
  I(512),
  // Minor version
  // Compatible brands
  ce("qt  ")
]) : i.fragmented ? R("ftyp", [
  ce("iso5"),
  // Major brand
  I(512),
  // Minor version
  // Compatible brands
  ce("iso5"),
  ce("iso6"),
  ce("mp41")
]) : R("ftyp", [
  ce("isom"),
  // Major brand
  I(512),
  // Minor version
  // Compatible brands
  ce("isom"),
  i.holdsAvc ? ce("avc1") : [],
  ce("mp41")
]), ki = (i) => ({ type: "mdat", largeSize: i }), Wc = (i) => ({ type: "free", size: i }), $t = (i) => R("moov", void 0, [
  Hc(i.creationTime, i.trackDatas),
  ...i.trackDatas.map((e) => qc(e, i.creationTime)),
  i.isFragmented ? El(i.trackDatas) : null,
  Ll(i)
]), Hc = (i, e) => {
  const t = se(Math.max(0, ...e.filter((a) => a.samples.length > 0).map((a) => {
    const o = is(a.samples);
    return o.timestamp + o.duration;
  })), Er), r = Math.max(0, ...e.map((a) => a.track.id)) + 1, s = !zt(i) || !zt(t), n = s ? yt : I;
  return q("mvhd", +s, 0, [
    n(i),
    // Creation time
    n(i),
    // Modification time
    I(Er),
    // Timescale
    n(t),
    // Duration
    Le(1),
    // Preferred rate
    ra(1),
    // Preferred volume
    Array(10).fill(0),
    // Reserved
    aa(na),
    // Matrix
    Array(24).fill(0),
    // Pre-defined
    I(r)
    // Next track ID
  ]);
}, qc = (i, e) => {
  const t = nd(i);
  return R("trak", void 0, [
    jc(i, e),
    Qc(i, e),
    t.name !== void 0 ? R("udta", void 0, [
      R("name", [
        ...X.encode(t.name)
      ])
    ]) : null
  ]);
}, jc = (i, e) => {
  const t = is(i.samples), r = se(t ? t.timestamp + t.duration : 0, Er), s = !zt(e) || !zt(r), n = s ? yt : I;
  let a;
  if (i.type === "video") {
    const c = i.track.metadata.rotation;
    a = sa(c ?? 0);
  } else
    a = na;
  let o = 2;
  return i.track.metadata.disposition?.default !== !1 && (o |= 1), q("tkhd", +s, o, [
    n(e),
    // Creation time
    n(e),
    // Modification time
    I(i.track.id),
    // Track ID
    I(0),
    // Reserved
    n(r),
    // Duration
    Array(8).fill(0),
    // Reserved
    z(0),
    // Layer
    z(i.track.id),
    // Alternate group
    ra(i.type === "audio" ? 1 : 0),
    // Volume
    z(0),
    // Reserved
    aa(a),
    // Matrix
    Le(i.type === "video" ? i.info.width : 0),
    // Track width
    Le(i.type === "video" ? i.info.height : 0)
    // Track height
  ]);
}, Qc = (i, e) => R("mdia", void 0, [
  $c(i, e),
  rs(!0, Kc[i.type], Gc[i.type]),
  Xc(i)
]), $c = (i, e) => {
  const t = is(i.samples), r = se(t ? t.timestamp + t.duration : 0, i.timescale), s = !zt(e) || !zt(r), n = s ? yt : I;
  return q("mdhd", +s, 0, [
    n(e),
    // Creation time
    n(e),
    // Modification time
    I(i.timescale),
    // Timescale
    n(r),
    // Duration
    z(da(i.track.metadata.languageCode ?? he)),
    // Language
    z(0)
    // Quality
  ]);
}, Kc = {
  video: "vide",
  audio: "soun",
  subtitle: "text"
}, Gc = {
  video: "MediabunnyVideoHandler",
  audio: "MediabunnySoundHandler",
  subtitle: "MediabunnyTextHandler"
}, rs = (i, e, t, r = "\0\0\0\0") => q("hdlr", 0, 0, [
  i ? ce("mhlr") : I(0),
  // Component type
  ce(e),
  // Component subtype
  ce(r),
  // Component manufacturer
  I(0),
  // Component flags
  I(0),
  // Component flags mask
  ce(t, !0)
  // Component name
]), Xc = (i) => R("minf", void 0, [
  el[i.type](),
  tl(),
  sl(i)
]), Yc = () => q("vmhd", 0, 1, [
  z(0),
  // Graphics mode
  z(0),
  // Opcolor R
  z(0),
  // Opcolor G
  z(0)
  // Opcolor B
]), Zc = () => q("smhd", 0, 0, [
  z(0),
  // Balance
  z(0)
  // Reserved
]), Jc = () => q("nmhd", 0, 0), el = {
  video: Yc,
  audio: Zc,
  subtitle: Jc
}, tl = () => R("dinf", void 0, [
  il()
]), il = () => q("dref", 0, 0, [
  I(1)
  // Entry count
], [
  rl()
]), rl = () => q("url ", 0, 1), sl = (i) => {
  const e = i.compositionTimeOffsetTable.length > 1 || i.compositionTimeOffsetTable.some((t) => t.sampleCompositionTimeOffset !== 0);
  return R("stbl", void 0, [
    nl(i),
    Tl(i),
    e ? _l(i) : null,
    e ? Il(i) : null,
    xl(i),
    Pl(i),
    Cl(i),
    Sl(i)
  ]);
}, nl = (i) => {
  let e;
  if (i.type === "video")
    e = al(jl(i.track.source._codec, i.info.decoderConfig.codec), i);
  else if (i.type === "audio") {
    const t = la(i.track.source._codec, i.muxer.isQuickTime);
    p(t), e = hl(t, i);
  } else i.type === "subtitle" && (e = bl(Kl[i.track.source._codec], i));
  return p(e), q("stsd", 0, 0, [
    I(1)
    // Entry count
  ], [
    e
  ]);
}, al = (i, e) => R(i, [
  Array(6).fill(0),
  // Reserved
  z(1),
  // Data reference index
  z(0),
  // Pre-defined
  z(0),
  // Reserved
  Array(12).fill(0),
  // Pre-defined
  z(e.info.width),
  // Width
  z(e.info.height),
  // Height
  I(4718592),
  // Horizontal resolution
  I(4718592),
  // Vertical resolution
  I(0),
  // Reserved
  z(1),
  // Frame count
  Array(32).fill(0),
  // Compressor name
  z(24),
  // Depth
  ts(65535)
  // Pre-defined
], [
  Ql[e.track.source._codec](e),
  ol(e),
  cn(e.info.decoderConfig.colorSpace) ? cl(e) : null
]), ol = (i) => i.info.pixelAspectRatio.num === i.info.pixelAspectRatio.den ? null : R("pasp", [
  I(i.info.pixelAspectRatio.num),
  I(i.info.pixelAspectRatio.den)
]), cl = (i) => R("colr", [
  ce("nclx"),
  // Colour type
  z(oi[i.info.decoderConfig.colorSpace.primaries]),
  // Colour primaries
  z(ci[i.info.decoderConfig.colorSpace.transfer]),
  // Transfer characteristics
  z(li[i.info.decoderConfig.colorSpace.matrix]),
  // Matrix coefficients
  Z((i.info.decoderConfig.colorSpace.fullRange ? 1 : 0) << 7)
  // Full range flag
]), ll = (i) => i.info.decoderConfig && R("avcC", [
  // For AVC, description is an AVCDecoderConfigurationRecord, so nothing else to do here
  ...ee(i.info.decoderConfig.description)
]), dl = (i) => i.info.decoderConfig && R("hvcC", [
  // For HEVC, description is an HEVCDecoderConfigurationRecord, so nothing else to do here
  ...ee(i.info.decoderConfig.description)
]), Ds = (i) => {
  if (!i.info.decoderConfig)
    return null;
  const e = i.info.decoderConfig, t = e.codec.split("."), r = Number(t[1]), s = Number(t[2]), n = Number(t[3]), a = t[4] ? Number(t[4]) : 1, o = t[8] ? Number(t[8]) : Number(e.colorSpace?.fullRange ?? 0), c = (n << 4) + (a << 1) + o, l = t[5] ? Number(t[5]) : e.colorSpace?.primaries ? oi[e.colorSpace.primaries] : 2, d = t[6] ? Number(t[6]) : e.colorSpace?.transfer ? ci[e.colorSpace.transfer] : 2, u = t[7] ? Number(t[7]) : e.colorSpace?.matrix ? li[e.colorSpace.matrix] : 2;
  return q("vpcC", 1, 0, [
    Z(r),
    // Profile
    Z(s),
    // Level
    Z(c),
    // Bit depth, chroma subsampling, full range
    Z(l),
    // Colour primaries
    Z(d),
    // Transfer characteristics
    Z(u),
    // Matrix coefficients
    z(0)
    // Codec initialization data size
  ]);
}, ul = (i) => R("av1C", un(i.info.decoderConfig.codec)), hl = (i, e) => {
  let t = 0, r, s = 16;
  const n = ne.includes(e.track.source._codec);
  if (n) {
    const a = e.track.source._codec, { sampleSize: o } = Ue(a);
    s = 8 * o, s > 16 && (t = 1);
  }
  if (e.muxer.isQuickTime && (t = 1), t === 0)
    r = [
      Array(6).fill(0),
      // Reserved
      z(1),
      // Data reference index
      z(t),
      // Version
      z(0),
      // Revision level
      I(0),
      // Vendor
      z(e.info.numberOfChannels),
      // Number of channels
      z(s),
      // Sample size (bits)
      z(0),
      // Compression ID
      z(0),
      // Packet size
      z(e.info.sampleRate < 2 ** 16 ? e.info.sampleRate : 0),
      // Sample rate (upper)
      z(0)
      // Sample rate (lower)
    ];
  else {
    const a = n ? 0 : -2;
    r = [
      Array(6).fill(0),
      // Reserved
      z(1),
      // Data reference index
      z(t),
      // Version
      z(0),
      // Revision level
      I(0),
      // Vendor
      z(e.info.numberOfChannels),
      // Number of channels
      z(Math.min(s, 16)),
      // Sample size (bits)
      ts(a),
      // Compression ID
      z(0),
      // Packet size
      z(e.info.sampleRate < 2 ** 16 ? e.info.sampleRate : 0),
      // Sample rate (upper)
      z(0),
      // Sample rate (lower)
      n ? [
        I(1),
        // Samples per packet (must be 1 for uncompressed formats)
        I(s / 8),
        // Bytes per packet
        I(e.info.numberOfChannels * s / 8)
        // Bytes per frame
      ] : [
        I(0),
        // Samples per packet (don't bother, still works with 0)
        I(0),
        // Bytes per packet (variable)
        I(0)
        // Bytes per frame (variable)
      ],
      I(2)
      // Bytes per sample (constant in FFmpeg)
    ];
  }
  return R(i, r, [
    $l(e.track.source._codec, e.muxer.isQuickTime)?.(e) ?? null
  ]);
}, Yi = (i) => {
  let e;
  switch (i.track.source._codec) {
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
      throw new Error(`Unhandled audio codec: ${i.track.source._codec}`);
  }
  let t = [
    ...Z(e),
    // Object type indication
    ...Z(21),
    // stream type(6bits)=5 audio, flags(2bits)=1
    ...ia(0),
    // 24bit buffer size
    ...I(0),
    // max bitrate
    ...I(0)
    // avg bitrate
  ];
  if (i.info.decoderConfig.description) {
    const r = ee(i.info.decoderConfig.description);
    t = [
      ...t,
      ...Z(5),
      // TAG(5) = DecoderSpecificInfo
      ...Xi(r.byteLength),
      ...r
    ];
  }
  return t = [
    ...z(1),
    // ES_ID = 1
    ...Z(0),
    // flags etc = 0
    ...Z(4),
    // TAG(4) = ES Descriptor
    ...Xi(t.length),
    ...t,
    ...Z(6),
    // TAG(6)
    ...Z(1),
    // length
    ...Z(2)
    // data
  ], t = [
    ...Z(3),
    // TAG(3) = Object Descriptor
    ...Xi(t.length),
    ...t
  ], q("esds", 0, 0, t);
}, Je = (i) => R("wave", void 0, [
  fl(i),
  ml(i),
  R("\0\0\0\0")
  // NULL tag at the end
]), fl = (i) => R("frma", [
  ce(la(i.track.source._codec, i.muxer.isQuickTime))
]), ml = (i) => {
  const { littleEndian: e } = Ue(i.track.source._codec);
  return R("enda", [
    z(+e)
  ]);
}, pl = (i) => {
  let e = i.info.numberOfChannels, t = 3840, r = i.info.sampleRate, s = 0, n = 0, a = new Uint8Array(0);
  const o = i.info.decoderConfig?.description;
  if (o) {
    p(o.byteLength >= 18);
    const c = ee(o), l = Ni(c);
    e = l.outputChannelCount, t = l.preSkip, r = l.inputSampleRate, s = l.outputGain, n = l.channelMappingFamily, l.channelMappingTable && (a = l.channelMappingTable);
  }
  return R("dOps", [
    Z(0),
    // Version
    Z(e),
    // OutputChannelCount
    z(t),
    // PreSkip
    I(r),
    // InputSampleRate
    ts(s),
    // OutputGain
    Z(n),
    // ChannelMappingFamily
    ...a
  ]);
}, gl = (i) => {
  const e = i.info.decoderConfig?.description;
  p(e);
  const t = ee(e);
  return q("dfLa", 0, 0, [
    ...t.subarray(4)
  ]);
}, Re = (i) => {
  const { littleEndian: e, sampleSize: t } = Ue(i.track.source._codec), r = +e;
  return q("pcmC", 0, 0, [
    Z(r),
    Z(8 * t)
  ]);
}, wl = (i) => {
  const e = In(i.info.firstPacket.data);
  if (!e)
    throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
  const t = new Uint8Array(3), r = new O(t);
  return r.writeBits(2, e.fscod), r.writeBits(5, e.bsid), r.writeBits(3, e.bsmod), r.writeBits(3, e.acmod), r.writeBits(1, e.lfeon), r.writeBits(5, e.bitRateCode), r.writeBits(5, 0), R("dac3", [...t]);
}, kl = (i) => {
  const e = vn(i.info.firstPacket.data);
  if (!e)
    throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
  let t = 16;
  for (const a of e.substreams)
    t += 23, a.numDepSub > 0 ? t += 9 : t += 1;
  const r = Math.ceil(t / 8), s = new Uint8Array(r), n = new O(s);
  n.writeBits(13, e.dataRate), n.writeBits(3, e.substreams.length - 1);
  for (const a of e.substreams)
    n.writeBits(2, a.fscod), n.writeBits(5, a.bsid), n.writeBits(1, 0), n.writeBits(1, 0), n.writeBits(3, a.bsmod), n.writeBits(3, a.acmod), n.writeBits(1, a.lfeon), n.writeBits(3, 0), n.writeBits(4, a.numDepSub), a.numDepSub > 0 ? n.writeBits(9, a.chanLoc) : n.writeBits(1, 0);
  return R("dec3", [...s]);
}, bl = (i, e) => R(i, [
  Array(6).fill(0),
  // Reserved
  z(1)
  // Data reference index
], [
  Gl[e.track.source._codec](e)
]), yl = (i) => R("vttC", [
  ...X.encode(i.info.config.description)
]), Tl = (i) => q("stts", 0, 0, [
  I(i.timeToSampleTable.length),
  // Number of entries
  i.timeToSampleTable.map((e) => [
    I(e.sampleCount),
    // Sample count
    I(e.sampleDelta)
    // Sample duration
  ])
]), Sl = (i) => {
  if (i.samples.every((t) => t.type === "key"))
    return null;
  const e = [...i.samples.entries()].filter(([, t]) => t.type === "key");
  return q("stss", 0, 0, [
    I(e.length),
    // Number of entries
    e.map(([t]) => I(t + 1))
    // Sync sample table
  ]);
}, xl = (i) => q("stsc", 0, 0, [
  I(i.compactlyCodedChunkTable.length),
  // Number of entries
  i.compactlyCodedChunkTable.map((e) => [
    I(e.firstChunk),
    // First chunk
    I(e.samplesPerChunk),
    // Samples per chunk
    I(1)
    // Sample description index
  ])
]), Pl = (i) => {
  if (i.type === "audio" && i.info.requiresPcmTransformation) {
    const { sampleSize: e } = Ue(i.track.source._codec);
    return q("stsz", 0, 0, [
      I(e * i.info.numberOfChannels),
      // Sample size
      I(i.samples.reduce((t, r) => t + se(r.duration, i.timescale), 0))
    ]);
  }
  return q("stsz", 0, 0, [
    I(0),
    // Sample size (0 means non-constant size)
    I(i.samples.length),
    // Number of entries
    i.samples.map((e) => I(e.size))
    // Sample size table
  ]);
}, Cl = (i) => i.finalizedChunks.length > 0 && Y(i.finalizedChunks).offset >= 2 ** 32 ? q("co64", 0, 0, [
  I(i.finalizedChunks.length),
  // Number of entries
  i.finalizedChunks.map((e) => yt(e.offset))
  // Chunk offset table
]) : q("stco", 0, 0, [
  I(i.finalizedChunks.length),
  // Number of entries
  i.finalizedChunks.map((e) => I(e.offset))
  // Chunk offset table
]), _l = (i) => q("ctts", 1, 0, [
  I(i.compositionTimeOffsetTable.length),
  // Number of entries
  i.compositionTimeOffsetTable.map((e) => [
    I(e.sampleCount),
    // Sample count
    rt(e.sampleCompositionTimeOffset)
    // Sample offset
  ])
]), Il = (i) => {
  let e = 1 / 0, t = -1 / 0, r = 1 / 0, s = -1 / 0;
  p(i.compositionTimeOffsetTable.length > 0), p(i.samples.length > 0);
  for (let a = 0; a < i.compositionTimeOffsetTable.length; a++) {
    const o = i.compositionTimeOffsetTable[a];
    e = Math.min(e, o.sampleCompositionTimeOffset), t = Math.max(t, o.sampleCompositionTimeOffset);
  }
  for (let a = 0; a < i.samples.length; a++) {
    const o = i.samples[a];
    r = Math.min(r, se(o.timestamp, i.timescale)), s = Math.max(s, se(o.timestamp + o.duration, i.timescale));
  }
  const n = Math.max(-e, 0);
  return s >= 2 ** 31 ? null : q("cslg", 0, 0, [
    rt(n),
    // Composition to DTS shift
    rt(e),
    // Least decode to display delta
    rt(t),
    // Greatest decode to display delta
    rt(r),
    // Composition start time
    rt(s)
    // Composition end time
  ]);
}, El = (i) => R("mvex", void 0, i.map(vl)), vl = (i) => q("trex", 0, 0, [
  I(i.track.id),
  // Track ID
  I(1),
  // Default sample description index
  I(0),
  // Default sample duration
  I(0),
  // Default sample size
  I(0)
  // Default sample flags
]), Us = (i, e) => R("moof", void 0, [
  Al(i),
  ...e.map(Fl)
]), Al = (i) => q("mfhd", 0, 0, [
  I(i)
  // Sequence number
]), oa = (i) => {
  let e = 0, t = 0;
  const r = 0, s = 0, n = i.type === "delta";
  return t |= +n, n ? e |= 1 : e |= 2, e << 24 | t << 16 | r << 8 | s;
}, Fl = (i) => R("traf", void 0, [
  Bl(i),
  Rl(i),
  Ml(i)
]), Bl = (i) => {
  p(i.currentChunk);
  let e = 0;
  e |= 8, e |= 16, e |= 32, e |= 131072;
  const t = i.currentChunk.samples[1] ?? i.currentChunk.samples[0], r = {
    duration: t.timescaleUnitsToNextSample,
    size: t.size,
    flags: oa(t)
  };
  return q("tfhd", 0, e, [
    I(i.track.id),
    // Track ID
    I(r.duration),
    // Default sample duration
    I(r.size),
    // Default sample size
    I(r.flags)
    // Default sample flags
  ]);
}, Rl = (i) => (p(i.currentChunk), q("tfdt", 1, 0, [
  yt(se(i.currentChunk.startTimestamp, i.timescale))
  // Base Media Decode Time
])), Ml = (i) => {
  p(i.currentChunk);
  const e = i.currentChunk.samples.map((m) => m.timescaleUnitsToNextSample), t = i.currentChunk.samples.map((m) => m.size), r = i.currentChunk.samples.map(oa), s = i.currentChunk.samples.map((m) => se(m.timestamp - m.decodeTimestamp, i.timescale)), n = new Set(e), a = new Set(t), o = new Set(r), c = new Set(s), l = o.size === 2 && r[0] !== r[1], d = n.size > 1, u = a.size > 1, h = !l && o.size > 1, f = c.size > 1 || [...c].some((m) => m !== 0);
  let g = 0;
  return g |= 1, g |= 4 * +l, g |= 256 * +d, g |= 512 * +u, g |= 1024 * +h, g |= 2048 * +f, q("trun", 1, g, [
    I(i.currentChunk.samples.length),
    // Sample count
    I(i.currentChunk.offset - i.currentChunk.moofOffset || 0),
    // Data offset
    l ? I(r[0]) : [],
    i.currentChunk.samples.map((m, w) => [
      d ? I(e[w]) : [],
      // Sample duration
      u ? I(t[w]) : [],
      // Sample size
      h ? I(r[w]) : [],
      // Sample flags
      // Sample composition time offsets
      f ? rt(s[w]) : []
    ])
  ]);
}, zl = (i) => R("mfra", void 0, [
  ...i.map(Dl),
  Ul()
]), Dl = (i, e) => q("tfra", 1, 0, [
  I(i.track.id),
  // Track ID
  I(63),
  // This specifies that traf number, trun number and sample number are 32-bit ints
  I(i.finalizedChunks.length),
  // Number of entries
  i.finalizedChunks.map((r) => [
    yt(se(r.samples[0].timestamp, i.timescale)),
    // Time (in presentation time)
    yt(r.moofOffset),
    // moof offset
    I(e + 1),
    // traf number
    I(1),
    // trun number
    I(1)
    // Sample number
  ])
]), Ul = () => q("mfro", 0, 0, [
  // This value needs to be overwritten manually from the outside, where the actual size of the enclosing mfra box
  // is known
  I(0)
  // Size
]), Nl = () => R("vtte"), Ol = (i, e, t, r, s) => R("vttc", void 0, [
  s !== null ? R("vsid", [rt(s)]) : null,
  t !== null ? R("iden", [...X.encode(t)]) : null,
  e !== null ? R("ctim", [...X.encode(ta(e))]) : null,
  r !== null ? R("sttg", [...X.encode(r)]) : null,
  R("payl", [...X.encode(i)])
]), Vl = (i) => R("vtta", [...X.encode(i)]), Ll = (i) => {
  const e = [], t = i.format._options.metadataFormat ?? "auto", r = i.output._metadataTags;
  if (t === "mdir" || t === "auto" && !i.isQuickTime) {
    const s = Hl(r);
    s && e.push(s);
  } else if (t === "mdta") {
    const s = ql(r);
    s && e.push(s);
  } else (t === "udta" || t === "auto" && i.isQuickTime) && Wl(e, i.output._metadataTags);
  return e.length === 0 ? null : R("udta", void 0, e);
}, Wl = (i, e) => {
  for (const { key: t, value: r } of Ut(e))
    switch (t) {
      case "title":
        i.push(Me("©nam", r));
        break;
      case "description":
        i.push(Me("©des", r));
        break;
      case "artist":
        i.push(Me("©ART", r));
        break;
      case "album":
        i.push(Me("©alb", r));
        break;
      case "albumArtist":
        i.push(Me("albr", r));
        break;
      case "genre":
        i.push(Me("©gen", r));
        break;
      case "date":
        i.push(Me("©day", r.toISOString().slice(0, 10)));
        break;
      case "comment":
        i.push(Me("©cmt", r));
        break;
      case "lyrics":
        i.push(Me("©lyr", r));
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
        fe(t);
    }
  if (e.raw)
    for (const t in e.raw) {
      const r = e.raw[t];
      r == null || t.length !== 4 || i.some((s) => s.type === t) || (typeof r == "string" ? i.push(Me(t, r)) : r instanceof Uint8Array && i.push(R(t, Array.from(r))));
    }
}, Me = (i, e) => {
  const t = X.encode(e);
  return R(i, [
    z(t.length),
    z(da("und")),
    Array.from(t)
  ]);
}, Ns = {
  "image/jpeg": 13,
  "image/png": 14,
  "image/bmp": 27
}, ca = (i, e) => {
  const t = [];
  for (const { key: r, value: s } of Ut(i))
    switch (r) {
      case "title":
        t.push({ key: e ? "title" : "©nam", value: Ie(s) });
        break;
      case "description":
        t.push({ key: e ? "description" : "©des", value: Ie(s) });
        break;
      case "artist":
        t.push({ key: e ? "artist" : "©ART", value: Ie(s) });
        break;
      case "album":
        t.push({ key: e ? "album" : "©alb", value: Ie(s) });
        break;
      case "albumArtist":
        t.push({ key: e ? "album_artist" : "aART", value: Ie(s) });
        break;
      case "comment":
        t.push({ key: e ? "comment" : "©cmt", value: Ie(s) });
        break;
      case "genre":
        t.push({ key: e ? "genre" : "©gen", value: Ie(s) });
        break;
      case "lyrics":
        t.push({ key: e ? "lyrics" : "©lyr", value: Ie(s) });
        break;
      case "date":
        t.push({
          key: e ? "date" : "©day",
          value: Ie(s.toISOString().slice(0, 10))
        });
        break;
      case "images":
        for (const n of s)
          n.kind === "coverFront" && t.push({ key: "covr", value: R("data", [
            I(Ns[n.mimeType] ?? 0),
            // Type indicator
            I(0),
            // Locale indicator
            Array.from(n.data)
            // Kinda slow, hopefully temp
          ]) });
        break;
      case "trackNumber":
        if (e) {
          const n = i.tracksTotal !== void 0 ? `${s}/${i.tracksTotal}` : s.toString();
          t.push({ key: "track", value: Ie(n) });
        } else
          t.push({ key: "trkn", value: R("data", [
            I(0),
            // 8 bytes empty
            I(0),
            z(0),
            // Empty
            z(s),
            z(i.tracksTotal ?? 0),
            z(0)
            // Empty
          ]) });
        break;
      case "discNumber":
        e || t.push({ key: "disc", value: R("data", [
          I(0),
          // 8 bytes empty
          I(0),
          z(0),
          // Empty
          z(s),
          z(i.discsTotal ?? 0),
          z(0)
          // Empty
        ]) });
        break;
      case "tracksTotal":
      case "discsTotal":
        break;
      case "raw":
        break;
      default:
        fe(r);
    }
  if (i.raw)
    for (const r in i.raw) {
      const s = i.raw[r];
      s == null || !e && r.length !== 4 || t.some((n) => n.key === r) || (typeof s == "string" ? t.push({ key: r, value: Ie(s) }) : s instanceof Uint8Array ? t.push({ key: r, value: R("data", [
        I(0),
        // Type indicator
        I(0),
        // Locale indicator
        Array.from(s)
      ]) }) : s instanceof Bt && t.push({ key: r, value: R("data", [
        I(Ns[s.mimeType] ?? 0),
        // Type indicator
        I(0),
        // Locale indicator
        Array.from(s.data)
        // Kinda slow, hopefully temp
      ]) }));
    }
  return t;
}, Hl = (i) => {
  const e = ca(i, !1);
  return e.length === 0 ? null : q("meta", 0, 0, void 0, [
    rs(!1, "mdir", "", "appl"),
    // mdir handler
    R("ilst", void 0, e.map((t) => R(t.key, void 0, [t.value])))
    // Item list without keys box
  ]);
}, ql = (i) => {
  const e = ca(i, !0);
  return e.length === 0 ? null : R("meta", void 0, [
    rs(!1, "mdta", ""),
    // mdta handler
    q("keys", 0, 0, [
      I(e.length)
    ], e.map((t) => R("mdta", [
      ...X.encode(t.key)
    ]))),
    R("ilst", void 0, e.map((t, r) => {
      const s = String.fromCharCode(...I(r + 1));
      return R(s, void 0, [t.value]);
    }))
  ]);
}, Ie = (i) => R("data", [
  I(1),
  // Type indicator (UTF-8)
  I(0),
  // Locale indicator
  ...X.encode(i)
]), jl = (i, e) => {
  switch (i) {
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
}, Ql = {
  avc: ll,
  hevc: dl,
  vp8: Ds,
  vp9: Ds,
  av1: ul
}, la = (i, e) => {
  switch (i) {
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
    switch (i) {
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
    switch (i) {
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
}, $l = (i, e) => {
  switch (i) {
    case "aac":
      return Yi;
    case "mp3":
      return Yi;
    case "opus":
      return pl;
    case "vorbis":
      return Yi;
    case "flac":
      return gl;
    case "ac3":
      return wl;
    case "eac3":
      return kl;
  }
  if (e)
    switch (i) {
      case "pcm-s24":
        return Je;
      case "pcm-s24be":
        return Je;
      case "pcm-s32":
        return Je;
      case "pcm-s32be":
        return Je;
      case "pcm-f32":
        return Je;
      case "pcm-f32be":
        return Je;
      case "pcm-f64":
        return Je;
      case "pcm-f64be":
        return Je;
    }
  else
    switch (i) {
      case "pcm-s16":
        return Re;
      case "pcm-s16be":
        return Re;
      case "pcm-s24":
        return Re;
      case "pcm-s24be":
        return Re;
      case "pcm-s32":
        return Re;
      case "pcm-s32be":
        return Re;
      case "pcm-f32":
        return Re;
      case "pcm-f32be":
        return Re;
      case "pcm-f64":
        return Re;
      case "pcm-f64be":
        return Re;
    }
  return null;
}, Kl = {
  webvtt: "wvtt"
}, Gl = {
  webvtt: yl
}, da = (i) => {
  p(i.length === 3);
  let e = 0;
  for (let t = 0; t < 3; t++)
    e <<= 5, e += i.charCodeAt(t) - 96;
  return e;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class ss {
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
    const r = t + e.byteLength - this.trackedStart;
    let s = this.trackedWrites.byteLength;
    for (; s < r; )
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
const Zi = 2 ** 16, Ji = 2 ** 32;
class ua extends ss {
  constructor(e) {
    if (super(), this.pos = 0, this.maxPos = 0, this.target = e, this.supportsResize = "resize" in new ArrayBuffer(0), this.supportsResize)
      try {
        this.buffer = new ArrayBuffer(Zi, { maxByteLength: Ji });
      } catch {
        this.buffer = new ArrayBuffer(Zi), this.supportsResize = !1;
      }
    else
      this.buffer = new ArrayBuffer(Zi);
    this.bytes = new Uint8Array(this.buffer);
  }
  ensureSize(e) {
    let t = this.buffer.byteLength;
    for (; t < e; )
      t *= 2;
    if (t !== this.buffer.byteLength) {
      if (t > Ji)
        throw new Error(`ArrayBuffer exceeded maximum size of ${Ji} bytes. Please consider using another target.`);
      if (this.supportsResize)
        this.buffer.resize(t);
      else {
        const r = new ArrayBuffer(t), s = new Uint8Array(r);
        s.set(this.bytes, 0), this.buffer = r, this.bytes = s;
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
const Xl = 2 ** 24, Yl = 2;
class Zl extends ss {
  constructor(e) {
    super(), this.pos = 0, this.sections = [], this.lastWriteEnd = 0, this.lastFlushEnd = 0, this.writer = null, this.writeError = null, this.chunks = [], this.target = e, this.chunked = e._options.chunked ?? !1, this.chunkSize = e._options.chunkSize ?? Xl;
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
      const r = this.pos - this.lastWriteEnd;
      this.pos = this.lastWriteEnd, this.write(new Uint8Array(r));
    }
    if (p(this.writer), this.sections.length === 0)
      return;
    const e = [], t = [...this.sections].sort((r, s) => r.start - s.start);
    e.push({
      start: t[0].start,
      size: t[0].data.byteLength
    });
    for (let r = 1; r < t.length; r++) {
      const s = e[e.length - 1], n = t[r];
      n.start <= s.start + s.size ? s.size = Math.max(s.size, n.start + n.data.byteLength - s.start) : e.push({
        start: n.start,
        size: n.data.byteLength
      });
    }
    for (const r of e) {
      r.data = new Uint8Array(r.size);
      for (const s of this.sections)
        r.start <= s.start && s.start < r.start + r.size && r.data.set(s.data, s.start - r.start);
      if (this.writer.desiredSize !== null && this.writer.desiredSize <= 0 && await this.writer.ready, this.chunked)
        this.writeDataIntoChunks(r.data, r.start), this.tryToFlushChunks();
      else {
        if (this.ensureMonotonicity && r.start !== this.lastFlushEnd)
          throw new Error("Internal error: Monotonicity violation.");
        this.writer.write({
          type: "write",
          data: r.data,
          position: r.start
        }).catch((s) => {
          this.writeError ??= s;
        }), this.lastFlushEnd = r.start + r.data.byteLength;
      }
    }
    this.sections.length = 0;
  }
  writeDataIntoChunks(e, t) {
    let r = this.chunks.findIndex((c) => c.start <= t && t < c.start + this.chunkSize);
    r === -1 && (r = this.createChunk(t));
    const s = this.chunks[r], n = t - s.start, a = e.subarray(0, Math.min(this.chunkSize - n, e.byteLength));
    s.data.set(a, n);
    const o = {
      start: n,
      end: n + a.byteLength
    };
    if (this.insertSectionIntoChunk(s, o), s.written[0].start === 0 && s.written[0].end === this.chunkSize && (s.shouldFlush = !0), this.chunks.length > Yl) {
      for (let c = 0; c < this.chunks.length - 1; c++)
        this.chunks[c].shouldFlush = !0;
      this.tryToFlushChunks();
    }
    a.byteLength < e.byteLength && this.writeDataIntoChunks(e.subarray(a.byteLength), t + a.byteLength);
  }
  insertSectionIntoChunk(e, t) {
    let r = 0, s = e.written.length - 1, n = -1;
    for (; r <= s; ) {
      const a = Math.floor(r + (s - r + 1) / 2);
      e.written[a].start <= t.start ? (r = a + 1, n = a) : s = a - 1;
    }
    for (e.written.splice(n + 1, 0, t), (n === -1 || e.written[n].end < t.start) && n++; n < e.written.length - 1 && e.written[n].end >= e.written[n + 1].start; )
      e.written[n].end = Math.max(e.written[n].end, e.written[n + 1].end), e.written.splice(n + 1, 1);
  }
  createChunk(e) {
    const r = {
      start: Math.floor(e / this.chunkSize) * this.chunkSize,
      data: new Uint8Array(this.chunkSize),
      written: [],
      shouldFlush: !1
    };
    return this.chunks.push(r), this.chunks.sort((s, n) => s.start - n.start), this.chunks.indexOf(r);
  }
  tryToFlushChunks(e = !1) {
    p(this.writer);
    for (let t = 0; t < this.chunks.length; t++) {
      const r = this.chunks[t];
      if (!(!r.shouldFlush && !e)) {
        for (const s of r.written) {
          const n = r.start + s.start;
          if (this.ensureMonotonicity && n !== this.lastFlushEnd)
            throw new Error("Internal error: Monotonicity violation.");
          this.writer.write({
            type: "write",
            data: r.data.subarray(s.start, s.end),
            position: n
          }).catch((a) => {
            this.writeError ??= a;
          }), this.lastFlushEnd = r.start + s.end;
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
class Jl extends ss {
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
const ed = typeof _i < "u" ? _i : void 0;
class hi {
  constructor() {
    this._output = null, this.onwrite = null;
  }
}
class td extends hi {
  constructor() {
    super(...arguments), this.buffer = null;
  }
  /** @internal */
  _createWriter() {
    return new ua(this);
  }
}
class id extends hi {
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
    return new Zl(this);
  }
}
class jd extends hi {
  /** Creates a new {@link FilePathTarget} that writes to the file at the specified file path. */
  constructor(e, t = {}) {
    if (typeof e != "string")
      throw new TypeError("filePath must be a string.");
    if (!t || typeof t != "object")
      throw new TypeError("options must be an object.");
    super(), this._fileHandle = null;
    const r = new WritableStream({
      start: async () => {
        this._fileHandle = await ed.fs.open(e, "w");
      },
      write: async (s) => {
        p(this._fileHandle), await this._fileHandle.write(s.data, 0, s.data.byteLength, s.position);
      },
      close: async () => {
        this._fileHandle && (await this._fileHandle.close(), this._fileHandle = null);
      }
    });
    this._streamTarget = new id(r, {
      chunked: !0,
      ...t
    }), this._streamTarget._output = this._output;
  }
  /** @internal */
  _createWriter() {
    return this._streamTarget._createWriter();
  }
}
class rd extends hi {
  /** @internal */
  _createWriter() {
    return new Jl(this);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const Er = 1e3, sd = 2082844800, nd = (i) => {
  const e = {}, t = i.track;
  return t.metadata.name !== void 0 && (e.name = t.metadata.name), e;
}, se = (i, e, t = !0) => {
  const r = i * e;
  return t ? Math.round(r) : r;
};
class ad extends dt {
  constructor(e, t) {
    super(e), this.auxTarget = new td(), this.auxWriter = this.auxTarget._createWriter(), this.auxBoxWriter = new zs(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = J(), this.creationTime = Math.floor(Date.now() / 1e3) + sd, this.finalizedChunks = [], this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.format = t, this.writer = e._writer, this.boxWriter = new zs(this.writer), this.isQuickTime = t instanceof wa;
    const r = this.writer instanceof ua ? "in-memory" : !1;
    this.fastStart = t._options.fastStart ?? r, this.isFragmented = this.fastStart === "fragmented", (this.fastStart === "in-memory" || this.isFragmented) && (this.writer.ensureMonotonicity = !0), this.minimumFragmentDuration = t._options.minimumFragmentDuration ?? 1;
  }
  async start() {
    const e = await this.mutex.acquire(), t = this.output._tracks.some((r) => r.type === "video" && r.source._codec === "avc");
    if (this.format._options.onFtyp && this.writer.startTrackingWrites(), this.boxWriter.writeBox(Lc({
      isQuickTime: this.isQuickTime,
      holdsAvc: t,
      fragmented: this.isFragmented
    })), this.format._options.onFtyp) {
      const { data: r, start: s } = this.writer.stopTrackingWrites();
      this.format._options.onFtyp(r, s);
    }
    if (this.ftypSize = this.writer.getPos(), this.fastStart !== "in-memory") if (this.fastStart === "reserve") {
      for (const r of this.output._tracks)
        if (r.metadata.maximumPacketCount === void 0)
          throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.");
    } else this.isFragmented || (this.format._options.onMdat && this.writer.startTrackingWrites(), this.mdat = ki(!0), this.boxWriter.writeBox(this.mdat));
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
    return Rn({
      isQuickTime: this.isQuickTime,
      hasVideo: this.trackDatas.some((t) => t.type === "video"),
      hasAudio: this.trackDatas.some((t) => t.type === "audio"),
      codecStrings: e
    });
  }
  getVideoTrackData(e, t, r) {
    const s = this.trackDatas.find((h) => h.track === e);
    if (s)
      return s;
    Vr(r), p(r), p(r.decoderConfig);
    const n = { ...r.decoderConfig };
    p(n.codedWidth !== void 0), p(n.codedHeight !== void 0);
    let a = !1;
    if (e.source._codec === "avc" && !n.description) {
      const h = Hr(t.data);
      if (!h)
        throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
      n.description = eo(h), a = !0;
    } else if (e.source._codec === "hevc" && !n.description) {
      const h = jr(t.data);
      if (!h)
        throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
      n.description = oo(h), a = !0;
    }
    const o = Fa(1 / (e.metadata.frameRate ?? 57600), 1e6).denominator, c = n.displayAspectWidth, l = n.displayAspectHeight, d = c === void 0 || l === void 0 ? { num: 1, den: 1 } : Mr({
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
    return this.trackDatas.push(u), this.trackDatas.sort((h, f) => h.track.id - f.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), u;
  }
  getAudioTrackData(e, t, r) {
    const s = this.trackDatas.find((c) => c.track === e);
    if (s)
      return s;
    Tt(r), p(r), p(r.decoderConfig);
    const n = { ...r.decoderConfig };
    let a = !1;
    if (e.source._codec === "aac" && !n.description) {
      const c = Ke(pe.tempFromBytes(t.data));
      if (!c)
        throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
      const l = ot[c.samplingFrequencyIndex], d = Vt[c.channelConfiguration];
      if (l === void 0 || d === void 0)
        throw new Error("Invalid ADTS frame header.");
      n.description = Ur({
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
        numberOfChannels: r.decoderConfig.numberOfChannels,
        sampleRate: r.decoderConfig.sampleRate,
        decoderConfig: n,
        requiresPcmTransformation: !this.isFragmented && ne.includes(e.source._codec),
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
    const r = this.trackDatas.find((n) => n.track === e);
    if (r)
      return r;
    mn(t), p(t), p(t.config);
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
  async addEncodedVideoPacket(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getVideoTrackData(e, t, r);
      let a = t.data;
      if (n.info.requiresAnnexBTransformation) {
        const l = [...Wt(a)].map((d) => a.subarray(d.offset, d.offset + d.length));
        if (l.length === 0)
          throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
        a = wn(l, 4);
      }
      const o = this.validateAndNormalizeTimestamp(n.track, t.timestamp, t.type === "key"), c = this.createSampleForTrack(n, a, o, t.duration, t.type);
      await this.registerSample(n, c);
    } finally {
      s();
    }
  }
  async addEncodedAudioPacket(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getAudioTrackData(e, t, r);
      let a = t.data;
      if (n.info.requiresAdtsStripping) {
        const l = Ke(pe.tempFromBytes(a));
        if (!l)
          throw new Error("Expected ADTS frame, didn't get one.");
        const d = l.crcCheck === null ? ai : at;
        a = a.subarray(d);
      }
      const o = this.validateAndNormalizeTimestamp(n.track, t.timestamp, t.type === "key"), c = this.createSampleForTrack(n, a, o, t.duration, t.type);
      n.info.requiresPcmTransformation && await this.maybePadWithSilence(n, o), await this.registerSample(n, c);
    } finally {
      s();
    }
  }
  async maybePadWithSilence(e, t) {
    const r = Y(e.samples), s = r ? r.timestamp + r.duration : 0, n = t - s, a = se(n, e.timescale);
    if (a > 0) {
      const { sampleSize: o, silentValue: c } = Ue(e.info.decoderConfig.codec), l = a * e.info.numberOfChannels, d = new Uint8Array(o * l).fill(c), u = this.createSampleForTrack(e, new Uint8Array(d.buffer), s, n, "key");
      await this.registerSample(e, u);
    }
  }
  async addSubtitleCue(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getSubtitleTrackData(e, r);
      this.validateAndNormalizeTimestamp(n.track, t.timestamp, !0), e.source._codec === "webvtt" && (n.cueQueue.push(t), await this.processWebVTTCues(n, t.timestamp));
    } finally {
      s();
    }
  }
  async processWebVTTCues(e, t) {
    for (; e.cueQueue.length > 0; ) {
      const r = /* @__PURE__ */ new Set([]);
      for (const l of e.cueQueue)
        p(l.timestamp <= t), p(e.lastCueEndTimestamp <= l.timestamp + l.duration), r.add(Math.max(l.timestamp, e.lastCueEndTimestamp)), r.add(l.timestamp + l.duration);
      const s = [...r].sort((l, d) => l - d), n = s[0], a = s[1] ?? n;
      if (t < a)
        break;
      if (e.lastCueEndTimestamp < n) {
        this.auxWriter.seek(0);
        const l = Nl();
        this.auxBoxWriter.writeBox(l);
        const d = this.auxWriter.getSlice(0, this.auxWriter.getPos()), u = this.createSampleForTrack(e, d, e.lastCueEndTimestamp, n - e.lastCueEndTimestamp, "key");
        await this.registerSample(e, u), e.lastCueEndTimestamp = n;
      }
      this.auxWriter.seek(0);
      for (let l = 0; l < e.cueQueue.length; l++) {
        const d = e.cueQueue[l];
        if (d.timestamp >= a)
          break;
        Ai.lastIndex = 0;
        const u = Ai.test(d.text), h = d.timestamp + d.duration;
        let f = e.cueToSourceId.get(d);
        if (f === void 0 && a < h && (f = e.nextSourceId++, e.cueToSourceId.set(d, f)), d.notes) {
          const m = Vl(d.notes);
          this.auxBoxWriter.writeBox(m);
        }
        const g = Ol(d.text, u ? n : null, d.identifier ?? null, d.settings ?? null, f ?? null);
        this.auxBoxWriter.writeBox(g), h === a && e.cueQueue.splice(l--, 1);
      }
      const o = this.auxWriter.getSlice(0, this.auxWriter.getPos()), c = this.createSampleForTrack(e, o, n, a - n, "key");
      await this.registerSample(e, c), e.lastCueEndTimestamp = a;
    }
  }
  createSampleForTrack(e, t, r, s, n) {
    return {
      timestamp: r,
      decodeTimestamp: r,
      // This may be refined later
      duration: s,
      data: t,
      size: t.byteLength,
      type: n,
      timescaleUnitsToNextSample: se(s, e.timescale)
      // Will be refined
    };
  }
  processTimestamps(e, t) {
    if (e.timestampProcessingQueue.length === 0)
      return;
    if (e.type === "audio" && e.info.requiresPcmTransformation) {
      let s = 0;
      for (let n = 0; n < e.timestampProcessingQueue.length; n++) {
        const a = e.timestampProcessingQueue[n], o = se(a.duration, e.timescale);
        s += o;
      }
      if (e.timeToSampleTable.length === 0)
        e.timeToSampleTable.push({
          sampleCount: s,
          sampleDelta: 1
        });
      else {
        const n = Y(e.timeToSampleTable);
        n.sampleCount += s;
      }
      e.timestampProcessingQueue.length = 0;
      return;
    }
    const r = e.timestampProcessingQueue.map((s) => s.timestamp).sort((s, n) => s - n);
    for (let s = 0; s < e.timestampProcessingQueue.length; s++) {
      const n = e.timestampProcessingQueue[s];
      n.decodeTimestamp = r[s], !this.isFragmented && e.lastTimescaleUnits === null && (n.decodeTimestamp = 0);
      const a = se(n.timestamp - n.decodeTimestamp, e.timescale), o = se(n.duration, e.timescale);
      if (e.lastTimescaleUnits !== null) {
        p(e.lastSample);
        const c = se(n.decodeTimestamp, e.timescale, !1), l = Math.round(c - e.lastTimescaleUnits);
        if (p(l >= 0), e.lastTimescaleUnits += l, e.lastSample.timescaleUnitsToNextSample = l, !this.isFragmented) {
          let d = Y(e.timeToSampleTable);
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
          const u = Y(e.compositionTimeOffsetTable);
          p(u), u.sampleCompositionTimeOffset === a ? u.sampleCount++ : e.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: a
          });
        }
      } else
        e.lastTimescaleUnits = se(n.decodeTimestamp, e.timescale, !1), this.isFragmented || (e.timeToSampleTable.push({
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
      const s = se(t.timestamp, e.timescale, !1), n = Math.round(s - e.lastTimescaleUnits);
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
    let r = !1;
    if (!e.currentChunk)
      r = !0;
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
        s >= this.minimumFragmentDuration && n && t.timestamp > this.maxWrittenTimestamp && (r = !0, await this.finalizeFragment());
      } else
        r = s >= 0.5;
    }
    r && (e.currentChunk && await this.finalizeCurrentChunk(e), e.currentChunk = {
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
    if (e.type === "audio" && e.info.requiresPcmTransformation && (t = e.currentChunk.samples.reduce((r, s) => r + se(s.duration, e.timescale), 0)), (e.compactlyCodedChunkTable.length === 0 || Y(e.compactlyCodedChunkTable).samplesPerChunk !== t) && e.compactlyCodedChunkTable.push({
      firstChunk: e.finalizedChunks.length,
      // 1-indexed
      samplesPerChunk: t
    }), this.fastStart === "in-memory") {
      e.currentChunk.offset = 0;
      return;
    }
    e.currentChunk.offset = this.writer.getPos();
    for (const r of e.currentChunk.samples)
      p(r.data), this.writer.write(r.data), r.data = null;
    await this.writer.flush();
  }
  async interleaveSamples(e = !1) {
    if (p(this.isFragmented), !(!e && !this.allTracksAreKnown()))
      e: for (; ; ) {
        let t = null, r = 1 / 0;
        for (const n of this.trackDatas) {
          if (!e && n.sampleQueue.length === 0 && !n.track.source._closed)
            break e;
          n.sampleQueue.length > 0 && n.sampleQueue[0].timestamp < r && (t = n, r = n.sampleQueue[0].timestamp);
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
      const f = $t(this);
      if (this.boxWriter.writeBox(f), this.format._options.onMoov) {
        const { data: g, start: m } = this.writer.stopTrackingWrites();
        this.format._options.onMoov(g, m);
      }
    }
    const r = this.trackDatas.filter((f) => f.currentChunk), s = Us(t, r), n = this.writer.getPos(), a = n + this.boxWriter.measureBox(s);
    let o = a + We, c = 1 / 0;
    for (const f of r) {
      f.currentChunk.offset = o, f.currentChunk.moofOffset = n;
      for (const g of f.currentChunk.samples)
        o += g.size;
      c = Math.min(c, f.currentChunk.startTimestamp);
    }
    const l = o - a, d = l >= 2 ** 32;
    if (d)
      for (const f of r)
        f.currentChunk.offset += pt - We;
    this.format._options.onMoof && this.writer.startTrackingWrites();
    const u = Us(t, r);
    if (this.boxWriter.writeBox(u), this.format._options.onMoof) {
      const { data: f, start: g } = this.writer.stopTrackingWrites();
      this.format._options.onMoof(f, g, c);
    }
    p(this.writer.getPos() === a), this.format._options.onMdat && this.writer.startTrackingWrites();
    const h = ki(d);
    h.size = l, this.boxWriter.writeBox(h), this.writer.seek(a + (d ? pt : We));
    for (const f of r)
      for (const g of f.currentChunk.samples)
        this.writer.write(g.data), g.data = null;
    if (this.format._options.onMdat) {
      const { data: f, start: g } = this.writer.stopTrackingWrites();
      this.format._options.onMdat(f, g);
    }
    for (const f of r)
      f.finalizedChunks.push(f.currentChunk), this.finalizedChunks.push(f.currentChunk), f.currentChunk = null;
    e && await this.writer.flush();
  }
  async registerSampleFastStartReserve(e, t) {
    if (this.allTracksAreKnown()) {
      if (!this.mdat) {
        const r = $t(this), n = this.boxWriter.measureBox(r) + this.computeSampleTableSizeUpperBound() + 4096;
        p(this.ftypSize !== null), this.writer.seek(this.ftypSize + n), this.format._options.onMdat && this.writer.startTrackingWrites(), this.mdat = ki(!0), this.boxWriter.writeBox(this.mdat);
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
      const r = t.track.metadata.maximumPacketCount;
      p(r !== void 0), e += 8 * Math.ceil(2 / 3 * r), e += 4 * r, e += 8 * Math.ceil(2 / 3 * r), e += 12 * Math.ceil(2 / 3 * r), e += 4 * r, e += 8 * r;
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async onTrackClose(e) {
    const t = await this.mutex.acquire(), r = this.trackDatas.find((s) => s.track === e);
    r && (r.type === "subtitle" && e.source._codec === "webvtt" && await this.processWebVTTCues(r, 1 / 0), this.processTimestamps(r)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), t();
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
      this.mdat = ki(!1);
      let t;
      for (let s = 0; s < 2; s++) {
        const n = $t(this), a = this.boxWriter.measureBox(n);
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
      const r = $t(this);
      if (this.boxWriter.writeBox(r), this.format._options.onMoov) {
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
      const t = this.writer.getPos(), r = zl(this.trackDatas);
      this.boxWriter.writeBox(r);
      const s = this.writer.getPos() - t;
      this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(s);
    } else {
      p(this.mdat);
      const t = this.boxWriter.offsets.get(this.mdat);
      p(t !== void 0);
      const r = this.writer.getPos() - t;
      if (this.mdat.size = r, this.mdat.largeSize = r >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.format._options.onMdat) {
        const { data: n, start: a } = this.writer.stopTrackingWrites();
        this.format._options.onMdat(n, a);
      }
      const s = $t(this);
      if (this.fastStart === "reserve") {
        p(this.ftypSize !== null), this.writer.seek(this.ftypSize), this.format._options.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(s);
        const n = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
        this.boxWriter.writeBox(Wc(n));
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
const od = -32768, cd = 2 ** 15 - 1, Os = "Mediabunny", Vs = 6, Ls = 5, ld = {
  video: 1,
  audio: 2,
  subtitle: 17
};
class dd extends dt {
  constructor(e, t) {
    super(e), this.trackDatas = [], this.allTracksKnown = J(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = /* @__PURE__ */ new Map(), this.duration = 0, this.writer = e._writer, this.format = t, this.ebmlWriter = new Mo(this.writer), this.format._options.appendOnly && (this.writer.ensureMonotonicity = !0);
  }
  async start() {
    const e = await this.mutex.acquire();
    this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush(), e();
  }
  writeEBMLHeader() {
    this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
    const e = { id: b.EBML, data: [
      { id: b.EBMLVersion, data: 1 },
      { id: b.EBMLReadVersion, data: 1 },
      { id: b.EBMLMaxIDLength, data: 4 },
      { id: b.EBMLMaxSizeLength, data: 8 },
      { id: b.DocType, data: this.format instanceof $s ? "webm" : "matroska" },
      { id: b.DocTypeVersion, data: 2 },
      { id: b.DocTypeReadVersion, data: 2 }
    ] };
    if (this.ebmlWriter.writeEBML(e), this.format._options.onEbmlHeader) {
      const { data: t, start: r } = this.writer.stopTrackingWrites();
      this.format._options.onEbmlHeader(t, r);
    }
  }
  /**
   * Creates a SeekHead element which is positioned near the start of the file and allows the media player to seek to
   * relevant sections more easily. Since we don't know the positions of those sections yet, we'll set them later.
   */
  maybeCreateSeekHead(e) {
    if (this.format._options.appendOnly)
      return;
    const t = new Uint8Array([28, 83, 187, 107]), r = new Uint8Array([21, 73, 169, 102]), s = new Uint8Array([22, 84, 174, 107]), n = new Uint8Array([25, 65, 164, 105]), a = new Uint8Array([18, 84, 195, 103]), o = { id: b.SeekHead, data: [
      { id: b.Seek, data: [
        { id: b.SeekID, data: t },
        {
          id: b.SeekPosition,
          size: 5,
          data: e ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
        }
      ] },
      { id: b.Seek, data: [
        { id: b.SeekID, data: r },
        {
          id: b.SeekPosition,
          size: 5,
          data: e ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
        }
      ] },
      { id: b.Seek, data: [
        { id: b.SeekID, data: s },
        {
          id: b.SeekPosition,
          size: 5,
          data: e ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
        }
      ] },
      this.attachmentsElement ? { id: b.Seek, data: [
        { id: b.SeekID, data: n },
        {
          id: b.SeekPosition,
          size: 5,
          data: e ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
        }
      ] } : null,
      this.tagsElement ? { id: b.Seek, data: [
        { id: b.SeekID, data: a },
        {
          id: b.SeekPosition,
          size: 5,
          data: e ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
        }
      ] } : null
    ] };
    this.seekHead = o;
  }
  createSegmentInfo() {
    const e = { id: b.Duration, data: new Tr(0) };
    this.segmentDuration = e;
    const t = { id: b.Info, data: [
      { id: b.TimestampScale, data: 1e6 },
      { id: b.MuxingApp, data: Os },
      { id: b.WritingApp, data: Os },
      this.format._options.appendOnly ? null : e
    ] };
    this.segmentInfo = t;
  }
  createTracks() {
    const e = { id: b.Tracks, data: [] };
    this.tracksElement = e;
    for (const t of this.trackDatas) {
      const r = we[t.track.source._codec];
      p(r);
      let s = 0;
      if (t.type === "audio" && t.track.source._codec === "opus") {
        s = 1e6 * 80;
        const n = t.info.decoderConfig.description;
        if (n) {
          const a = ee(n), o = Ni(a);
          s = Math.round(1e9 * (o.preSkip / Lt));
        }
      }
      e.data.push({ id: b.TrackEntry, data: [
        { id: b.TrackNumber, data: t.track.id },
        { id: b.TrackUID, data: t.track.id },
        { id: b.TrackType, data: ld[t.type] },
        t.track.metadata.disposition?.default === !1 ? { id: b.FlagDefault, data: 0 } : null,
        t.track.metadata.disposition?.forced ? { id: b.FlagForced, data: 1 } : null,
        t.track.metadata.disposition?.hearingImpaired ? { id: b.FlagHearingImpaired, data: 1 } : null,
        t.track.metadata.disposition?.visuallyImpaired ? { id: b.FlagVisualImpaired, data: 1 } : null,
        t.track.metadata.disposition?.original ? { id: b.FlagOriginal, data: 1 } : null,
        t.track.metadata.disposition?.commentary ? { id: b.FlagCommentary, data: 1 } : null,
        { id: b.FlagLacing, data: 0 },
        { id: b.Language, data: t.track.metadata.languageCode ?? he },
        { id: b.CodecID, data: r },
        { id: b.CodecDelay, data: 0 },
        { id: b.SeekPreRoll, data: s },
        t.track.metadata.name !== void 0 ? { id: b.Name, data: new et(t.track.metadata.name) } : null,
        t.type === "video" ? this.videoSpecificTrackInfo(t) : null,
        t.type === "audio" ? this.audioSpecificTrackInfo(t) : null,
        t.type === "subtitle" ? this.subtitleSpecificTrackInfo(t) : null
      ] });
    }
  }
  videoSpecificTrackInfo(e) {
    const { frameRate: t, rotation: r } = e.track.metadata, s = [
      e.info.decoderConfig.description ? {
        id: b.CodecPrivate,
        data: ee(e.info.decoderConfig.description)
      } : null,
      t ? {
        id: b.DefaultDuration,
        data: 1e9 / t
      } : null
    ], n = r ? Bi(-r) : 0, a = !!e.info.aspectRatio && e.info.aspectRatio.num * e.info.height !== e.info.aspectRatio.den * e.info.width, o = e.info.decoderConfig.colorSpace, c = { id: b.Video, data: [
      { id: b.PixelWidth, data: e.info.width },
      { id: b.PixelHeight, data: e.info.height },
      a ? { id: b.DisplayWidth, data: e.info.aspectRatio.num } : null,
      a ? { id: b.DisplayHeight, data: e.info.aspectRatio.den } : null,
      a ? { id: b.DisplayUnit, data: 3 } : null,
      // 3 = display aspect ratio
      e.info.alphaMode ? { id: b.AlphaMode, data: 1 } : null,
      cn(o) ? {
        id: b.Colour,
        data: [
          {
            id: b.MatrixCoefficients,
            data: li[o.matrix]
          },
          {
            id: b.TransferCharacteristics,
            data: ci[o.transfer]
          },
          {
            id: b.Primaries,
            data: oi[o.primaries]
          },
          {
            id: b.Range,
            data: o.fullRange ? 2 : 1
          }
        ]
      } : null,
      n ? {
        id: b.Projection,
        data: [
          {
            id: b.ProjectionType,
            data: 0
            // rectangular
          },
          {
            id: b.ProjectionPoseRoll,
            data: new yr((n + 180) % 360 - 180)
            // [0, 270] -> [-180, 90]
          }
        ]
      } : null
    ] };
    return s.push(c), s;
  }
  audioSpecificTrackInfo(e) {
    const t = ne.includes(e.track.source._codec) ? Ue(e.track.source._codec) : null;
    return [
      e.info.decoderConfig.description ? {
        id: b.CodecPrivate,
        data: ee(e.info.decoderConfig.description)
      } : null,
      { id: b.Audio, data: [
        { id: b.SamplingFrequency, data: new yr(e.info.sampleRate) },
        { id: b.Channels, data: e.info.numberOfChannels },
        t ? { id: b.BitDepth, data: 8 * t.sampleSize } : null
      ] }
    ];
  }
  subtitleSpecificTrackInfo(e) {
    return [
      { id: b.CodecPrivate, data: X.encode(e.info.config.description) }
    ];
  }
  maybeCreateTags() {
    const e = [], t = (n, a) => {
      e.push({ id: b.SimpleTag, data: [
        { id: b.TagName, data: new et(n) },
        typeof a == "string" ? { id: b.TagString, data: new et(a) } : { id: b.TagBinary, data: a }
      ] });
    }, r = this.output._metadataTags, s = /* @__PURE__ */ new Set();
    for (const { key: n, value: a } of Ut(r))
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
            const o = r.tracksTotal !== void 0 ? `${a}/${r.tracksTotal}` : a.toString();
            t("PART_NUMBER", o), s.add("PART_NUMBER");
          }
          break;
        case "discNumber":
          {
            const o = r.discsTotal !== void 0 ? `${a}/${r.discsTotal}` : a.toString();
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
          fe(n);
      }
    if (r.raw)
      for (const n in r.raw) {
        const a = r.raw[n];
        a == null || s.has(n) || (typeof a == "string" || a instanceof Uint8Array) && t(n, a);
      }
    e.length !== 0 && (this.tagsElement = {
      id: b.Tags,
      data: [{ id: b.Tag, data: [
        { id: b.Targets, data: [
          { id: b.TargetTypeValue, data: 50 },
          { id: b.TargetType, data: "MOVIE" }
        ] },
        ...e
      ] }]
    });
  }
  maybeCreateAttachments() {
    const e = this.output._metadataTags, t = [], r = /* @__PURE__ */ new Set(), s = e.images ?? [];
    for (const n of s) {
      let a = n.name;
      a === void 0 && (a = (n.kind === "coverFront" ? "cover" : n.kind === "coverBack" ? "back" : "image") + (Ba(n.mimeType) ?? ""));
      let o;
      for (; ; ) {
        o = 0n;
        for (let c = 0; c < 8; c++)
          o <<= 8n, o |= BigInt(Math.floor(Math.random() * 256));
        if (o !== 0n && !r.has(o))
          break;
      }
      r.add(o), t.push({
        id: b.AttachedFile,
        data: [
          n.description !== void 0 ? { id: b.FileDescription, data: new et(n.description) } : null,
          { id: b.FileName, data: new et(a) },
          { id: b.FileMediaType, data: n.mimeType },
          { id: b.FileData, data: n.data },
          { id: b.FileUID, data: o }
        ]
      });
    }
    for (const [n, a] of Object.entries(e.raw ?? {}))
      !(a instanceof Dr) || !/^\d+$/.test(n) || s.find((c) => c.mimeType === a.mimeType && Ra(c.data, a.data)) || t.push({
        id: b.AttachedFile,
        data: [
          a.description !== void 0 ? { id: b.FileDescription, data: new et(a.description) } : null,
          { id: b.FileName, data: new et(a.name ?? "") },
          { id: b.FileMediaType, data: a.mimeType ?? "" },
          { id: b.FileData, data: a.data },
          { id: b.FileUID, data: BigInt(n) }
        ]
      });
    t.length !== 0 && (this.attachmentsElement = { id: b.Attachments, data: t });
  }
  createSegment() {
    this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
    const e = {
      id: b.Segment,
      size: this.format._options.appendOnly ? -1 : Vs,
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
      const { data: t, start: r } = this.writer.stopTrackingWrites();
      this.format._options.onSegmentHeader(t, r);
    }
  }
  createCues() {
    this.cues = { id: b.Cues, data: [] };
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
    return On({
      isWebM: this.format instanceof $s,
      hasVideo: this.trackDatas.some((t) => t.type === "video"),
      hasAudio: this.trackDatas.some((t) => t.type === "audio"),
      codecStrings: e
    });
  }
  getVideoTrackData(e, t, r) {
    const s = this.trackDatas.find((l) => l.track === e);
    if (s)
      return s;
    Vr(r), p(r), p(r.decoderConfig), p(r.decoderConfig.codedWidth !== void 0), p(r.decoderConfig.codedHeight !== void 0);
    const n = r.decoderConfig.displayAspectWidth, a = r.decoderConfig.displayAspectHeight, o = n === void 0 || a === void 0 ? null : Mr({
      num: n,
      den: a
    }), c = {
      track: e,
      type: "video",
      info: {
        width: r.decoderConfig.codedWidth,
        height: r.decoderConfig.codedHeight,
        aspectRatio: o,
        decoderConfig: r.decoderConfig,
        alphaMode: !!t.sideData.alpha
        // The first packet determines if this track has alpha or not
      },
      chunkQueue: [],
      lastWrittenMsTimestamp: null
    };
    return e.source._codec === "vp9" ? c.info.decoderConfig = {
      ...c.info.decoderConfig,
      description: new Uint8Array(La(c.info.decoderConfig.codec))
    } : e.source._codec === "av1" && (c.info.decoderConfig = {
      ...c.info.decoderConfig,
      description: new Uint8Array(un(c.info.decoderConfig.codec))
    }), this.trackDatas.push(c), this.trackDatas.sort((l, d) => l.track.id - d.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), c;
  }
  getAudioTrackData(e, t, r) {
    const s = this.trackDatas.find((c) => c.track === e);
    if (s)
      return s;
    Tt(r), p(r), p(r.decoderConfig);
    const n = { ...r.decoderConfig };
    let a = !1;
    if (e.source._codec === "aac" && !n.description) {
      const c = Ke(pe.tempFromBytes(t.data));
      if (!c)
        throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
      const l = ot[c.samplingFrequencyIndex], d = Vt[c.channelConfiguration];
      if (l === void 0 || d === void 0)
        throw new Error("Invalid ADTS frame header.");
      n.description = Ur({
        objectType: c.objectType,
        sampleRate: l,
        numberOfChannels: d
      }), a = !0;
    }
    const o = {
      track: e,
      type: "audio",
      info: {
        numberOfChannels: r.decoderConfig.numberOfChannels,
        sampleRate: r.decoderConfig.sampleRate,
        decoderConfig: n,
        requiresAdtsStripping: a
      },
      chunkQueue: [],
      lastWrittenMsTimestamp: null
    };
    return this.trackDatas.push(o), this.trackDatas.sort((c, l) => c.track.id - l.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), o;
  }
  getSubtitleTrackData(e, t) {
    const r = this.trackDatas.find((n) => n.track === e);
    if (r)
      return r;
    mn(t), p(t), p(t.config);
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
  async addEncodedVideoPacket(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getVideoTrackData(e, t, r), a = t.type === "key";
      let o = this.validateAndNormalizeTimestamp(n.track, t.timestamp, a), c = t.duration;
      e.metadata.frameRate !== void 0 && (o = ar(o, 1 / e.metadata.frameRate), c = ar(c, 1 / e.metadata.frameRate));
      const l = n.info.alphaMode ? t.sideData.alpha ?? null : null, d = this.createInternalChunk(t.data, o, c, t.type, l);
      e.source._codec === "vp9" && this.fixVP9ColorSpace(n, d), n.chunkQueue.push(d), await this.interleaveChunks();
    } finally {
      s();
    }
  }
  async addEncodedAudioPacket(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getAudioTrackData(e, t, r);
      let a = t.data;
      if (n.info.requiresAdtsStripping) {
        const d = Ke(pe.tempFromBytes(a));
        if (!d)
          throw new Error("Expected ADTS frame, didn't get one.");
        const u = d.crcCheck === null ? ai : at;
        a = a.subarray(u);
      }
      const o = t.type === "key", c = this.validateAndNormalizeTimestamp(n.track, t.timestamp, o), l = this.createInternalChunk(a, c, t.duration, t.type);
      n.chunkQueue.push(l), await this.interleaveChunks();
    } finally {
      s();
    }
  }
  async addSubtitleCue(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getSubtitleTrackData(e, r), a = this.validateAndNormalizeTimestamp(n.track, t.timestamp, !0);
      let o = t.text;
      const c = Math.round(a * 1e3);
      Ai.lastIndex = 0, o = o.replace(Ai, (h) => {
        const g = Ir(h.slice(1, -1)) - c;
        return `<${ta(g)}>`;
      });
      const l = X.encode(o), d = `${t.settings ?? ""}
${t.identifier ?? ""}
${t.notes ?? ""}`, u = this.createInternalChunk(l, a, t.duration, "key", d.trim() ? X.encode(d) : null);
      n.chunkQueue.push(u), await this.interleaveChunks();
    } finally {
      s();
    }
  }
  async interleaveChunks(e = !1) {
    if (!(!e && !this.allTracksAreKnown())) {
      e: for (; ; ) {
        let t = null, r = 1 / 0;
        for (const n of this.trackDatas) {
          if (!e && n.chunkQueue.length === 0 && !n.track.source._closed)
            break e;
          n.chunkQueue.length > 0 && n.chunkQueue[0].timestamp < r && (t = n, r = n.chunkQueue[0].timestamp);
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
    const r = new O(t.data);
    r.skipBits(2);
    const s = r.readBits(1), a = (r.readBits(1) << 1) + s;
    if (a === 3 && r.skipBits(1), r.readBits(1) || r.readBits(1) !== 0 || (r.skipBits(2), r.readBits(24) !== 4817730))
      return;
    a >= 2 && r.skipBits(1);
    const d = {
      rgb: 7,
      bt709: 2,
      bt470bg: 1,
      smpte170m: 3
    }[e.info.decoderConfig.colorSpace.matrix];
    Ma(t.data, r.pos, r.pos + 3, d);
  }
  /** Converts a read-only external chunk into an internal one for easier use. */
  createInternalChunk(e, t, r, s, n = null) {
    return {
      data: e,
      type: s,
      timestamp: t,
      duration: r,
      additions: n
    };
  }
  /** Writes a block containing media data to the file. */
  writeBlock(e, t) {
    this.segment || this.createSegment();
    const r = Math.round(1e3 * t.timestamp), s = this.trackDatas.every((d) => {
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
      const d = r - this.currentClusterStartMsTimestamp;
      n = s && r > this.currentClusterMaxMsTimestamp && d >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || d > cd;
    }
    n && this.createNewCluster(r);
    const a = r - this.currentClusterStartMsTimestamp;
    if (a < od)
      return;
    const o = new Uint8Array(4), c = new DataView(o.buffer);
    c.setUint8(0, 128 | e.track.id), c.setInt16(1, a, !1);
    const l = Math.round(1e3 * t.duration);
    if (t.additions) {
      const d = { id: b.BlockGroup, data: [
        { id: b.Block, data: [
          o,
          t.data
        ] },
        t.type === "delta" ? {
          id: b.ReferenceBlock,
          data: new zn(e.lastWrittenMsTimestamp - r)
        } : null,
        t.additions ? { id: b.BlockAdditions, data: [
          { id: b.BlockMore, data: [
            { id: b.BlockAddID, data: 1 },
            // Some players expect BlockAddID to come first
            { id: b.BlockAdditional, data: t.additions }
          ] }
        ] } : null,
        l > 0 ? { id: b.BlockDuration, data: l } : null
      ] };
      this.ebmlWriter.writeEBML(d);
    } else {
      c.setUint8(3, +(t.type === "key") << 7);
      const d = { id: b.SimpleBlock, data: [
        o,
        t.data
      ] };
      this.ebmlWriter.writeEBML(d);
    }
    this.duration = Math.max(this.duration, r + l), e.lastWrittenMsTimestamp = r, this.trackDatasInCurrentCluster.has(e) || this.trackDatasInCurrentCluster.set(e, {
      firstMsTimestamp: r
    }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, r);
  }
  /** Creates a new Cluster element to contain media chunks. */
  createNewCluster(e) {
    this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
      id: b.Cluster,
      size: this.format._options.appendOnly ? -1 : Ls,
      data: [
        { id: b.Timestamp, data: e }
      ]
    }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = e, this.currentClusterMaxMsTimestamp = e, this.trackDatasInCurrentCluster.clear();
  }
  finalizeCurrentCluster() {
    if (p(this.currentCluster), !this.format._options.appendOnly) {
      const s = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster), n = this.writer.getPos();
      this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(s, Ls), this.writer.seek(n);
    }
    if (this.format._options.onCluster) {
      p(this.currentClusterStartMsTimestamp !== null);
      const { data: s, start: n } = this.writer.stopTrackingWrites();
      this.format._options.onCluster(s, n, this.currentClusterStartMsTimestamp / 1e3);
    }
    const e = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset, t = /* @__PURE__ */ new Map();
    for (const [s, { firstMsTimestamp: n }] of this.trackDatasInCurrentCluster)
      t.has(n) || t.set(n, []), t.get(n).push(s);
    const r = [...t.entries()].sort((s, n) => s[0] - n[0]);
    for (const [s, n] of r)
      p(this.cues), this.cues.data.push({ id: b.CuePoint, data: [
        { id: b.CueTime, data: s },
        // Create CueTrackPositions for each track that starts at this timestamp
        ...n.map((a) => ({ id: b.CueTrackPositions, data: [
          { id: b.CueTrack, data: a.track.id },
          { id: b.CueClusterPosition, data: e }
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
      const t = this.writer.getPos(), r = this.writer.getPos() - this.segmentDataOffset;
      this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(r, Vs), this.segmentDuration.data = new Tr(this.duration), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), p(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead), this.writer.seek(t);
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
class ud {
  constructor(e) {
    this.writer = e, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer);
  }
  writeU32(e) {
    this.helperView.setUint32(0, e, !1), this.writer.write(this.helper.subarray(0, 4));
  }
  writeXingFrame(e) {
    const t = this.writer.getPos(), r = 255, s = 224 | e.mpegVersionId << 3 | e.layer << 1;
    let n;
    e.mpegVersionId & 2 ? n = e.mpegVersionId & 1 ? 0 : 1 : n = 1;
    const a = 0, o = 155;
    let c = -1;
    const l = n * 16 * 4 + e.layer * 16;
    for (let w = 0; w < 16; w++) {
      const y = ur[l + w];
      if (hr(n, e.layer, 1e3 * y, e.sampleRate, a) >= o) {
        c = w;
        break;
      }
    }
    if (c === -1)
      throw new Error("No suitable bitrate found.");
    const d = c << 4 | e.frequencyIndex << 2 | a << 1, u = e.channel << 6 | e.modeExtension << 4 | e.copyright << 3 | e.original << 2 | e.emphasis;
    this.helper[0] = r, this.helper[1] = s, this.helper[2] = d, this.helper[3] = u, this.writer.write(this.helper.subarray(0, 4));
    const h = Mi(e.mpegVersionId, e.channel);
    this.writer.seek(t + h), this.writeU32(Ri);
    let f = 0;
    e.frameCount !== null && (f |= 1), e.fileSize !== null && (f |= 2), e.toc !== null && (f |= 4), this.writeU32(f), this.writeU32(e.frameCount ?? 0), this.writeU32(e.fileSize ?? 0), this.writer.write(e.toc ?? new Uint8Array(100));
    const g = ur[l + c], m = hr(n, e.layer, 1e3 * g, e.sampleRate, a);
    this.writer.seek(t + m);
  }
}
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class hd extends dt {
  constructor(e, t) {
    super(e), this.xingFrameData = null, this.frameCount = 0, this.framePositions = [], this.xingFramePos = null, this.format = t, this.writer = e._writer, this.mp3Writer = new ud(e._writer);
  }
  async start() {
    ri(this.output._metadataTags) || new es(this.writer).writeId3V2Tag(this.output._metadataTags);
  }
  async getMimeType() {
    return "audio/mpeg";
  }
  async addEncodedVideoPacket() {
    throw new Error("MP3 does not support video.");
  }
  async addEncodedAudioPacket(e, t) {
    const r = await this.mutex.acquire();
    try {
      const s = this.format._options.xingHeader !== !1;
      if (!this.xingFrameData && s) {
        const n = H(t.data);
        if (n.byteLength < 4)
          throw new Error("Invalid MP3 header in sample.");
        const a = n.getUint32(0, !1), o = zi(a, null).header;
        if (!o)
          throw new Error("Invalid MP3 header in sample.");
        const c = Mi(o.mpegVersionId, o.channel);
        if (n.byteLength >= c + 4) {
          const l = n.getUint32(c, !1);
          if (l === Ri || l === Lr)
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
      r();
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
    const r = new Uint8Array(100);
    for (let s = 0; s < 100; s++) {
      const n = Math.floor(this.framePositions.length * (s / 100));
      p(n !== -1 && n < this.framePositions.length);
      const a = this.framePositions[n];
      r[s] = 256 * (a / t);
    }
    if (this.xingFrameData.frameCount = this.frameCount, this.xingFrameData.fileSize = t, this.xingFrameData.toc = r, this.format._options.onXingFrame && this.writer.startTrackingWrites(), this.mp3Writer.writeXingFrame(this.xingFrameData), this.format._options.onXingFrame) {
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
const fd = 8192;
class md extends dt {
  constructor(e, t) {
    super(e), this.trackDatas = [], this.bosPagesWritten = !1, this.allTracksKnown = J(), this.pageBytes = new Uint8Array(Qn), this.pageView = new DataView(this.pageBytes.buffer), this.format = t, this.writer = e._writer, this.writer.ensureMonotonicity = !0;
  }
  async start() {
  }
  async getMimeType() {
    return await this.allTracksKnown.promise, jn({
      codecStrings: this.trackDatas.map((e) => e.codecInfo.codec)
    });
  }
  addEncodedVideoPacket() {
    throw new Error("Video tracks are not supported.");
  }
  getTrackData(e, t) {
    const r = this.trackDatas.find((a) => a.track === e);
    if (r)
      return r;
    let s;
    do
      s = Math.floor(2 ** 32 * Math.random());
    while (this.trackDatas.some((a) => a.serialNumber === s));
    p(e.source._codec === "vorbis" || e.source._codec === "opus"), Tt(t), p(t), p(t.decoderConfig);
    const n = {
      track: e,
      serialNumber: s,
      internalSampleRate: e.source._codec === "opus" ? Lt : t.decoderConfig.sampleRate,
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
      const r = ee(t.decoderConfig.description);
      if (r[0] !== 2)
        throw new TypeError("First byte of Vorbis decoder description must be 2.");
      let s = 1;
      const n = () => {
        let m = 0;
        for (; ; ) {
          const w = r[s++];
          if (w === void 0)
            throw new TypeError("Vorbis decoder description is too short.");
          if (m += w, w < 255)
            return m;
        }
      }, a = n(), o = n();
      if (r.length - s <= 0)
        throw new TypeError("Vorbis decoder description is too short.");
      const l = r.subarray(s, s += a);
      s += o;
      const d = r.subarray(s), u = new Uint8Array(7);
      u[0] = 3, u[1] = 118, u[2] = 111, u[3] = 114, u[4] = 98, u[5] = 105, u[6] = 115;
      const h = gr(u, this.output._metadataTags, !0);
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
      const g = H(l).getUint8(28);
      e.codecInfo.vorbisInfo = {
        blocksizes: [
          1 << (g & 15),
          1 << (g >> 4)
        ],
        modeBlockflags: Cn(d).modeBlockflags
      };
    } else if (e.track.source._codec === "opus") {
      if (!t.decoderConfig.description)
        throw new TypeError("For Ogg, Opus decoder description is required.");
      const r = ee(t.decoderConfig.description), s = new Uint8Array(8), n = H(s);
      n.setUint32(0, 1332770163, !1), n.setUint32(4, 1415669619, !1);
      const a = gr(s, this.output._metadataTags, !0);
      e.packetQueue.push({
        data: r,
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
        preSkip: Ni(r).preSkip
      };
    }
  }
  async addEncodedAudioPacket(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getTrackData(e, r);
      this.validateAndNormalizeTimestamp(n.track, t.timestamp, t.type === "key");
      const a = n.currentTimestampInSamples, { durationInSamples: o, vorbisBlockSize: c } = qn(t.data, n.codecInfo, n.vorbisLastBlocksize);
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
          const r = t.packetQueue.shift();
          if (this.writePacket(t, r, !1), r.forcePageFlush)
            break;
        }
      this.bosPagesWritten = !0;
    }
    e: for (; ; ) {
      let t = null, r = 1 / 0;
      for (const a of this.trackDatas) {
        if (!e && a.packetQueue.length <= 1 && !a.track.source._closed)
          break e;
        a.packetQueue.length > 0 && a.packetQueue[0].timestampInSamples < r && (t = a, r = a.packetQueue[0].timestampInSamples);
      }
      if (!t)
        break;
      const s = t.packetQueue.shift(), n = t.packetQueue.length === 0;
      this.writePacket(t, s, n);
    }
    e || await this.writer.flush();
  }
  writePacket(e, t, r) {
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
        if (a = o, e.currentPageData.push(u), e.currentPageSize += u.length, this.writePage(e, r && d), d)
          return;
      }
      if (d)
        break;
      n -= 255;
    }
    const c = t.data.subarray(a);
    e.currentPageData.push(c), e.currentPageSize += c.length, e.currentGranulePosition = s, (e.currentPageSize >= fd || t.forcePageFlush) && this.writePage(e, r);
  }
  writePage(e, t) {
    this.pageView.setUint32(0, Xr, !0), this.pageView.setUint8(4, 0);
    let r = 0;
    e.currentPageStartsWithFreshPacket || (r |= 1), e.pagesWritten === 0 && (r |= 2), t && (r |= 4), this.pageView.setUint8(5, r);
    const s = e.currentLacingValues.every((c) => c === 255) ? -1 : e.currentGranulePosition;
    za(this.pageView, 6, s), this.pageView.setUint32(14, e.serialNumber, !0), this.pageView.setUint32(18, e.pagesWritten, !0), this.pageView.setUint32(22, 0, !0), this.pageView.setUint8(26, e.currentLacingValues.length), this.pageBytes.set(e.currentLacingValues, 27);
    let n = 27 + e.currentLacingValues.length;
    for (const c of e.currentPageData)
      this.pageBytes.set(c, n), n += c.length;
    const a = this.pageBytes.subarray(0, n), o = Hn(a);
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
const pd = 0, ha = 4096, Ws = 256, gd = 224, Hs = 192, qs = new Uint8Array([9, 240]), js = new Uint8Array([70, 1]);
class wd extends dt {
  constructor(e, t) {
    super(e), this.trackDatas = [], this.tablesWritten = !1, this.continuityCounters = /* @__PURE__ */ new Map(), this.packetBuffer = new Uint8Array(le), this.packetView = H(this.packetBuffer), this.allTracksKnown = J(), this.videoTrackIndex = 0, this.audioTrackIndex = 0, this.adaptationFieldBuffer = new Uint8Array(184), this.payloadBuffer = new Uint8Array(184), this.format = t, this.writer = e._writer, this.writer.ensureMonotonicity = !0;
  }
  async start() {
  }
  async getMimeType() {
    return await this.allTracksKnown.promise, Xn(this.trackDatas.map((e) => e.codecString));
  }
  getVideoTrackData(e, t) {
    const r = this.trackDatas.find((l) => l.track === e);
    if (r)
      return r;
    Vr(t), p(t?.decoderConfig);
    const s = e.source._codec;
    p(s === "avc" || s === "hevc");
    const n = s === "avc" ? 27 : 36, a = Ws + this.trackDatas.length, o = gd + this.videoTrackIndex++, c = {
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
    const r = this.trackDatas.find((l) => l.track === e);
    if (r)
      return r;
    Tt(t), p(t?.decoderConfig);
    const s = e.source._codec;
    p(s === "aac" || s === "mp3" || s === "ac3" || s === "eac3");
    let n, a;
    switch (s) {
      case "aac":
        n = 15, a = Hs + this.audioTrackIndex++;
        break;
      case "mp3":
        n = 3, a = Hs + this.audioTrackIndex++;
        break;
      case "ac3":
        n = 129, a = 189;
        break;
      case "eac3":
        n = 135, a = 189;
        break;
    }
    const o = Ws + this.trackDatas.length, c = {
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
  async addEncodedVideoPacket(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getVideoTrackData(e, r), a = this.validateAndNormalizeTimestamp(n.track, t.timestamp, t.type === "key"), o = this.prepareVideoPacket(n, t, r);
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
  async addEncodedAudioPacket(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      const n = this.getAudioTrackData(e, r), a = this.validateAndNormalizeTimestamp(n.track, t.timestamp, t.type === "key"), o = this.prepareAudioPacket(n, t, r);
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
  prepareVideoPacket(e, t, r) {
    const s = e.track.source._codec;
    if (e.inputIsAnnexB === null) {
      const n = r?.decoderConfig?.description;
      if (e.inputIsAnnexB = !n, !e.inputIsAnnexB) {
        const a = ee(n);
        s === "avc" ? e.avcDecoderConfig = kn(a) : e.hevcDecoderConfig = co(a);
      }
    }
    return e.inputIsAnnexB ? this.prepareAnnexBVideoPacket(t.data, s) : this.prepareLengthPrefixedVideoPacket(e, t, s);
  }
  prepareAnnexBVideoPacket(e, t) {
    const r = [];
    for (const n of Wt(e)) {
      const a = e.subarray(n.offset, n.offset + n.length);
      (t === "avc" ? Dt(a[0]) === Ce.AUD : kt(a[0]) === ie.AUD_NUT) || r.push(a);
    }
    const s = t === "avc" ? qs : js;
    return r.unshift(s), mr(r);
  }
  prepareLengthPrefixedVideoPacket(e, t, r) {
    const s = t.data, n = r === "avc" ? e.avcDecoderConfig.lengthSizeMinusOne + 1 : e.hevcDecoderConfig.lengthSizeMinusOne + 1, a = [];
    for (const c of Wr(s, n)) {
      const l = s.subarray(c.offset, c.offset + c.length);
      (r === "avc" ? Dt(l[0]) === Ce.AUD : kt(l[0]) === ie.AUD_NUT) || a.push(l);
    }
    if (t.type === "key")
      if (r === "avc") {
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
    const o = r === "avc" ? qs : js;
    return a.unshift(o), mr(a);
  }
  prepareAudioPacket(e, t, r) {
    const s = e.track.source._codec;
    if (s === "mp3" || s === "ac3" || s === "eac3")
      return t.data;
    if (e.inputIsAdts === null) {
      const c = r?.decoderConfig?.description;
      if (e.inputIsAdts = !c, !e.inputIsAdts) {
        const l = ui(ee(c)), d = ln(l);
        e.adtsHeader = d.header, e.adtsHeaderBitstream = d.bitstream;
      }
    }
    if (e.inputIsAdts)
      return t.data;
    p(e.adtsHeader), p(e.adtsHeaderBitstream);
    const n = e.adtsHeader, a = t.data.byteLength + n.byteLength;
    dn(e.adtsHeaderBitstream, a);
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
    const r = e.timestampProcessingQueue.map((s) => s.presentationTimestamp).sort((s, n) => s - n);
    for (let s = 0; s < e.timestampProcessingQueue.length; s++) {
      const n = e.timestampProcessingQueue[s];
      n.decodeTimestamp = r[s], e.packetQueue.push(n);
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
      let t = null, r = 1 / 0;
      for (const n of this.trackDatas) {
        if (!e && n.packetQueue.length === 0 && !n.track.source._closed)
          break e;
        n.packetQueue.length > 0 && n.packetQueue[0].presentationTimestamp < r && (t = n, r = n.packetQueue[0].presentationTimestamp);
      }
      if (!t)
        break;
      const s = t.packetQueue.shift();
      this.writePesPacket(t, s);
    }
    e || await this.writer.flush();
  }
  writeTables() {
    p(!this.tablesWritten), this.writePsiSection(pd, mt), this.writePsiSection(ha, bd(this.trackDatas)), this.tablesWritten = !0;
  }
  writePsiSection(e, t) {
    let r = 0, s = !0;
    for (; r < t.length; ) {
      const a = 184 - (s ? 1 : 0), o = t.length - r, c = Math.min(a, o);
      let l;
      s ? (l = this.payloadBuffer.subarray(0, 1 + c), l[0] = 0, l.set(t.subarray(r, r + c), 1)) : l = t.subarray(r, r + c), this.writeTsPacket(e, s, null, l), r += c, s = !1;
    }
  }
  writePesPacket(e, t) {
    const r = e.track.type === "video", s = r ? 10 : 5, n = new Uint8Array(9 + s), a = H(n), o = new O(n.subarray(9));
    Br(a, 0, 1, !1), n[3] = e.streamId;
    const c = e.track.type === "video" ? 0 : Math.min(8 + t.data.length, 65535);
    a.setUint16(4, c, !1), a.setUint8(6, 132), a.setUint8(7, r ? 192 : 128), a.setUint8(8, s);
    const l = Math.round(t.presentationTimestamp * ve);
    if (o.pos = 0, o.writeBits(4, r ? 3 : 2), o.writeBits(3, l >>> 30 & 7), o.writeBits(1, 1), o.writeBits(15, l >>> 15 & 32767), o.writeBits(1, 1), o.writeBits(15, l & 32767), o.writeBits(1, 1), r) {
      p(t.decodeTimestamp !== null);
      const f = Math.round(t.decodeTimestamp * ve);
      o.writeBits(4, 1), o.writeBits(3, f >>> 30 & 7), o.writeBits(1, 1), o.writeBits(15, f >>> 15 & 32767), o.writeBits(1, 1), o.writeBits(15, f & 32767), o.writeBits(1, 1);
    }
    const d = n.length + t.data.length;
    let u = 0, h = !0;
    for (; u < d; ) {
      const f = h, g = d - u, m = h && t.isKeyframe, w = h && !e.firstPacketWritten, y = Math.max(0, 184 - g);
      let k;
      m || w ? k = Math.max(2, y) : k = y;
      let T = null;
      if (k > 0) {
        const E = this.adaptationFieldBuffer;
        k === 1 ? E[0] = 0 : (E[0] = k - 1, E[1] = Number(w) << 7 | Number(m) << 6, E.fill(255, 2, k)), T = E.subarray(0, k);
      }
      const S = Math.min(184 - k, g), P = this.payloadBuffer.subarray(0, S);
      let x = 0;
      if (u < n.length) {
        const E = Math.min(n.length - u, S);
        P.set(n.subarray(u, u + E), 0), x = E;
      }
      const C = Math.max(0, u - n.length), _ = C + (S - x);
      x < S && P.set(t.data.subarray(C, _), x), this.writeTsPacket(e.pid, f, T, P), u += S, h = !1;
    }
    e.firstPacketWritten = !0;
  }
  writeTsPacket(e, t, r, s) {
    const n = this.continuityCounters.get(e) ?? 0, a = s.length > 0, o = r ? a ? 3 : 2 : a ? 1 : 0;
    this.packetBuffer[0] = 71, this.packetView.setUint16(1, (t ? 16384 : 0) | e & 8191, !1), this.packetBuffer[3] = o << 4 | n & 15, a && this.continuityCounters.set(e, n + 1 & 15);
    let c = 4;
    r && (this.packetBuffer.set(r, c), c += r.length), this.packetBuffer.set(s, c), c += s.length, c < le && this.packetBuffer.fill(255, c);
    const l = this.writer.getPos();
    this.writer.write(this.packetBuffer), this.format._options.onPacket && this.format._options.onPacket(this.packetBuffer.slice(), l);
  }
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async onTrackClose(e) {
    const t = await this.mutex.acquire();
    this.allTracksAreKnown() && this.allTracksKnown.resolve();
    const r = this.trackDatas.find((s) => s.track === e);
    r && await this.flushTimestampQueue(r, !1), await this.interleavePackets(), t();
  }
  async finalize() {
    const e = await this.mutex.acquire();
    this.allTracksKnown.resolve();
    for (const t of this.trackDatas)
      await this.flushTimestampQueue(t, !1);
    await this.interleavePackets(!0), e();
  }
}
const kd = 79764919, fa = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let e = i << 24;
  for (let t = 0; t < 8; t++)
    e = e & 2147483648 ? e << 1 ^ kd : e << 1;
  fa[i] = e >>> 0 & 4294967295;
}
const ma = (i) => {
  let e = 4294967295;
  for (let t = 0; t < i.length; t++) {
    const r = i[t];
    e = (e << 8 ^ fa[e >>> 24 ^ r]) >>> 0;
  }
  return e;
}, mt = new Uint8Array(16);
{
  const i = H(mt);
  mt[0] = 0, i.setUint16(1, 45069, !1), i.setUint16(3, 1, !1), mt[5] = 193, mt[6] = 0, mt[7] = 0, i.setUint16(8, 1, !1), i.setUint16(10, 57344 | ha & 8191, !1), i.setUint32(12, ma(mt.subarray(0, 12)), !1);
}
const bd = (i) => {
  let e = 0;
  for (const c of i)
    e += 5, c.streamType === 129 ? e += gi.length : c.streamType === 135 && (e += wi.length);
  const t = 9 + e + 4, r = new Uint8Array(3 + t - 4), s = H(r);
  r[0] = 2, s.setUint16(1, 45056 | t & 4095, !1), s.setUint16(3, 1, !1), r[5] = 193, r[6] = 0, r[7] = 0, s.setUint16(8, 65535, !1), s.setUint16(10, 61440, !1);
  let n = 12;
  for (const c of i)
    r[n++] = c.streamType, s.setUint16(n, 57344 | c.pid & 8191, !1), n += 2, c.streamType === 129 ? (s.setUint16(n, 61440 | gi.length, !1), n += 2, r.set(gi, n), n += gi.length) : c.streamType === 135 ? (s.setUint16(n, 61440 | wi.length, !1), n += 2, r.set(wi, n), n += wi.length) : (s.setUint16(n, 61440, !1), n += 2);
  const a = ma(r), o = new Uint8Array(r.length + 4);
  return o.set(r, 0), H(o).setUint32(r.length, a, !1), o;
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
class yd {
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
class Td extends dt {
  constructor(e, t) {
    super(e), this.headerWritten = !1, this.dataSize = 0, this.sampleRate = null, this.sampleCount = 0, this.riffSizePos = null, this.dataSizePos = null, this.ds64RiffSizePos = null, this.ds64DataSizePos = null, this.ds64SampleCountPos = null, this.format = t, this.writer = e._writer, this.riffWriter = new yd(e._writer), this.isRf64 = !!t._options.large;
  }
  async start() {
  }
  async getMimeType() {
    return "audio/wav";
  }
  async addEncodedVideoPacket() {
    throw new Error("WAVE does not support video.");
  }
  async addEncodedAudioPacket(e, t, r) {
    const s = await this.mutex.acquire();
    try {
      if (this.headerWritten || (Tt(r), p(r), p(r.decoderConfig), this.writeHeader(e, r.decoderConfig), this.sampleRate = r.decoderConfig.sampleRate, this.headerWritten = !0), this.validateAndNormalizeTimestamp(e, t.timestamp, t.type === "key"), !this.isRf64 && this.writer.getPos() + t.data.byteLength >= 2 ** 32)
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
    let r;
    const s = e.source._codec, n = Ue(s);
    n.dataType === "ulaw" ? r = be.MULAW : n.dataType === "alaw" ? r = be.ALAW : n.dataType === "float" ? r = be.IEEE_FLOAT : r = be.PCM;
    const a = t.numberOfChannels, o = t.sampleRate, c = n.sampleSize * a;
    if (this.riffWriter.writeAscii(this.isRf64 ? "RF64" : "RIFF"), this.isRf64 ? this.riffWriter.writeU32(4294967295) : (this.riffSizePos = this.writer.getPos(), this.riffWriter.writeU32(0)), this.riffWriter.writeAscii("WAVE"), this.isRf64 && (this.riffWriter.writeAscii("ds64"), this.riffWriter.writeU32(28), this.ds64RiffSizePos = this.writer.getPos(), this.riffWriter.writeU64(0), this.ds64DataSizePos = this.writer.getPos(), this.riffWriter.writeU64(0), this.ds64SampleCountPos = this.writer.getPos(), this.riffWriter.writeU64(0), this.riffWriter.writeU32(0)), this.riffWriter.writeAscii("fmt "), this.riffWriter.writeU32(16), this.riffWriter.writeU16(r), this.riffWriter.writeU16(a), this.riffWriter.writeU32(o), this.riffWriter.writeU32(o * c), this.riffWriter.writeU16(c), this.riffWriter.writeU16(8 * n.sampleSize), !ri(this.output._metadataTags)) {
      const l = this.format._options.metadataFormat ?? "info";
      l === "info" ? this.writeInfoChunk(this.output._metadataTags) : l === "id3" ? this.writeId3Chunk(this.output._metadataTags) : fe(l);
    }
    if (this.riffWriter.writeAscii("data"), this.isRf64 ? this.riffWriter.writeU32(4294967295) : (this.dataSizePos = this.writer.getPos(), this.riffWriter.writeU32(0)), this.format._options.onHeader) {
      const { data: l, start: d } = this.writer.stopTrackingWrites();
      this.format._options.onHeader(l, d);
    }
  }
  writeInfoChunk(e) {
    const t = this.writer.getPos();
    this.riffWriter.writeAscii("LIST"), this.riffWriter.writeU32(0), this.riffWriter.writeAscii("INFO");
    const r = /* @__PURE__ */ new Set(), s = (o, c) => {
      if (!Ct(c)) {
        console.warn(`Didn't write tag '${o}' because '${c}' is not ISO 8859-1-compatible.`);
        return;
      }
      const l = c.length + 1, d = new Uint8Array(l);
      for (let u = 0; u < c.length; u++)
        d[u] = c.charCodeAt(u);
      this.riffWriter.writeAscii(o), this.riffWriter.writeU32(l), this.writer.write(d), l & 1 && this.writer.write(new Uint8Array(1)), r.add(o);
    };
    for (const { key: o, value: c } of Ut(e))
      switch (o) {
        case "title":
          s("INAM", c), r.add("INAM");
          break;
        case "artist":
          s("IART", c), r.add("IART");
          break;
        case "album":
          s("IPRD", c), r.add("IPRD");
          break;
        case "trackNumber":
          {
            const l = e.tracksTotal !== void 0 ? `${c}/${e.tracksTotal}` : c.toString();
            s("ITRK", l), r.add("ITRK");
          }
          break;
        case "genre":
          s("IGNR", c), r.add("IGNR");
          break;
        case "date":
          s("ICRD", c.toISOString().slice(0, 10)), r.add("ICRD");
          break;
        case "comment":
          s("ICMT", c), r.add("ICMT");
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
          fe(o);
      }
    if (e.raw)
      for (const o in e.raw) {
        const c = e.raw[o];
        c == null || o.length !== 4 || r.has(o) || typeof c == "string" && s(o, c);
      }
    const n = this.writer.getPos(), a = n - t - 8;
    this.writer.seek(t + 4), this.riffWriter.writeU32(a), this.writer.seek(n), a & 1 && this.writer.write(new Uint8Array(1));
  }
  writeId3Chunk(e) {
    const t = this.writer.getPos();
    this.riffWriter.writeAscii("ID3 "), this.riffWriter.writeU32(0);
    const s = new es(this.writer).writeId3V2Tag(e), n = this.writer.getPos();
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
class Ye {
  /** Returns a list of video codecs that this output format can contain. */
  getSupportedVideoCodecs() {
    return this.getSupportedCodecs().filter((e) => ue.includes(e));
  }
  /** Returns a list of audio codecs that this output format can contain. */
  getSupportedAudioCodecs() {
    return this.getSupportedCodecs().filter((e) => me.includes(e));
  }
  /** Returns a list of subtitle codecs that this output format can contain. */
  getSupportedSubtitleCodecs() {
    return this.getSupportedCodecs().filter((e) => $e.includes(e));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _codecUnsupportedHint(e) {
    return "";
  }
}
class pa extends Ye {
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
    return new ad(e, this);
  }
}
class ga extends pa {
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
      ...ue,
      ...Rt,
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
      ...$e
    ];
  }
  /** @internal */
  _codecUnsupportedHint(e) {
    return new wa().getSupportedCodecs().includes(e) ? " Switching to MOV will grant support for this codec." : "";
  }
}
class wa extends pa {
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
      ...ue,
      ...me
    ];
  }
  /** @internal */
  _codecUnsupportedHint(e) {
    return new ga().getSupportedCodecs().includes(e) ? " Switching to MP4 will grant support for this codec." : "";
  }
}
class Qs extends Ye {
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
    return new dd(e, this);
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
      ...ue,
      ...Rt,
      ...ne.filter((e) => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(e)),
      ...$e
    ];
  }
  get supportsVideoRotationMetadata() {
    return !1;
  }
  get supportsTimestampedMediaData() {
    return !0;
  }
}
class $s extends Qs {
  /** Creates a new {@link WebMOutputFormat} configured with the specified `options`. */
  constructor(e) {
    super(e);
  }
  getSupportedCodecs() {
    return [
      ...ue.filter((e) => ["vp8", "vp9", "av1"].includes(e)),
      ...me.filter((e) => ["opus", "vorbis"].includes(e)),
      ...$e
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
    return new Qs().getSupportedCodecs().includes(e) ? " Switching to MKV will grant support for this codec." : "";
  }
}
class Qd extends Ye {
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
    return new hd(e, this);
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
class $d extends Ye {
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
    return new Td(e, this);
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
      ...ne.filter((e) => ["pcm-s16", "pcm-s24", "pcm-s32", "pcm-f32", "pcm-u8", "ulaw", "alaw"].includes(e))
    ];
  }
  get supportsVideoRotationMetadata() {
    return !1;
  }
  get supportsTimestampedMediaData() {
    return !1;
  }
}
class Kd extends Ye {
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
    return new md(e, this);
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
      ...me.filter((e) => ["vorbis", "opus"].includes(e))
    ];
  }
  get supportsVideoRotationMetadata() {
    return !1;
  }
  get supportsTimestampedMediaData() {
    return !1;
  }
}
class Gd extends Ye {
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
    return new Mc(e, this);
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
class Xd extends Ye {
  /** Creates a new {@link FlacOutputFormat} configured with the specified `options`. */
  constructor(e = {}) {
    if (!e || typeof e != "object")
      throw new TypeError("options must be an object.");
    super(), this._options = e;
  }
  /** @internal */
  _createMuxer(e) {
    return new Uc(e, this);
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
class Yd extends Ye {
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
    return new wd(e, this);
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
      ...ue.filter((e) => ["avc", "hevc"].includes(e)),
      ...me.filter((e) => ["aac", "mp3", "ac3", "eac3"].includes(e))
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
const ns = (i) => {
  if (!i || typeof i != "object")
    throw new TypeError("Encoding config must be an object.");
  if (!ue.includes(i.codec))
    throw new TypeError(`Invalid video codec '${i.codec}'. Must be one of: ${ue.join(", ")}.`);
  if (!(i.bitrate instanceof Se) && (!Number.isInteger(i.bitrate) || i.bitrate <= 0))
    throw new TypeError("config.bitrate must be a positive integer or a quality.");
  if (i.keyFrameInterval !== void 0 && (!Number.isFinite(i.keyFrameInterval) || i.keyFrameInterval < 0))
    throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
  if (i.sizeChangeBehavior !== void 0 && !["deny", "passThrough", "fill", "contain", "cover"].includes(i.sizeChangeBehavior))
    throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
  if (i.onEncodedPacket !== void 0 && typeof i.onEncodedPacket != "function")
    throw new TypeError("config.onEncodedChunk, when provided, must be a function.");
  if (i.onEncoderConfig !== void 0 && typeof i.onEncoderConfig != "function")
    throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
  ka(i.codec, i);
}, ka = (i, e) => {
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
  if (e.fullCodecString !== void 0 && fn(e.fullCodecString) !== i)
    throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${i}).`);
  if (e.hardwareAcceleration !== void 0 && !["no-preference", "prefer-hardware", "prefer-software"].includes(e.hardwareAcceleration))
    throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
  if (e.scalabilityMode !== void 0 && typeof e.scalabilityMode != "string")
    throw new TypeError("scalabilityMode, when provided, must be a string.");
  if (e.contentHint !== void 0 && typeof e.contentHint != "string")
    throw new TypeError("contentHint, when provided, must be a string.");
}, vr = (i) => {
  const e = i.bitrate instanceof Se ? i.bitrate._toVideoBitrate(i.codec, i.width, i.height) : i.bitrate;
  return {
    codec: i.fullCodecString ?? Va(i.codec, i.width, i.height, e),
    width: i.width,
    height: i.height,
    displayWidth: i.squarePixelWidth,
    displayHeight: i.squarePixelHeight,
    bitrate: e,
    bitrateMode: i.bitrateMode,
    alpha: i.alpha ?? "discard",
    framerate: i.framerate,
    latencyMode: i.latencyMode,
    hardwareAcceleration: i.hardwareAcceleration,
    scalabilityMode: i.scalabilityMode,
    contentHint: i.contentHint,
    ...Ha(i.codec)
  };
}, as = (i) => {
  if (!i || typeof i != "object")
    throw new TypeError("Encoding config must be an object.");
  if (!me.includes(i.codec))
    throw new TypeError(`Invalid audio codec '${i.codec}'. Must be one of: ${me.join(", ")}.`);
  if (i.bitrate === void 0 && (!ne.includes(i.codec) || i.codec === "flac"))
    throw new TypeError("config.bitrate must be provided for compressed audio codecs.");
  if (i.bitrate !== void 0 && !(i.bitrate instanceof Se) && (!Number.isInteger(i.bitrate) || i.bitrate <= 0))
    throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
  if (i.onEncodedPacket !== void 0 && typeof i.onEncodedPacket != "function")
    throw new TypeError("config.onEncodedChunk, when provided, must be a function.");
  if (i.onEncoderConfig !== void 0 && typeof i.onEncoderConfig != "function")
    throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
  ba(i.codec, i);
}, ba = (i, e) => {
  if (!e || typeof e != "object")
    throw new TypeError("Encoding options must be an object.");
  if (e.bitrateMode !== void 0 && !["constant", "variable"].includes(e.bitrateMode))
    throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
  if (e.fullCodecString !== void 0 && typeof e.fullCodecString != "string")
    throw new TypeError("fullCodecString, when provided, must be a string.");
  if (e.fullCodecString !== void 0 && fn(e.fullCodecString) !== i)
    throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${i}).`);
}, Ar = (i) => {
  const e = i.bitrate instanceof Se ? i.bitrate._toAudioBitrate(i.codec) : i.bitrate;
  return {
    codec: i.fullCodecString ?? Wa(i.codec, i.numberOfChannels, i.sampleRate),
    numberOfChannels: i.numberOfChannels,
    sampleRate: i.sampleRate,
    bitrate: e,
    bitrateMode: i.bitrateMode,
    ...qa(i.codec)
  };
};
class Se {
  /** @internal */
  constructor(e) {
    this._factor = e;
  }
  /** @internal */
  _toVideoBitrate(e, t, r) {
    const s = t * r, n = {
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
    if (ne.includes(e) || e === "flac")
      return;
    const r = {
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
    if (!r)
      throw new Error(`Unhandled codec: ${e}`);
    let s = r * this._factor;
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
const Zd = /* @__PURE__ */ new Se(0.3), Jd = /* @__PURE__ */ new Se(0.6), eu = /* @__PURE__ */ new Se(1), Ks = /* @__PURE__ */ new Se(2), tu = /* @__PURE__ */ new Se(4), iu = (i) => {
  if (ue.includes(i))
    return os(i);
  if (me.includes(i))
    return cs(i);
  if ($e.includes(i))
    return ls(i);
  throw new TypeError(`Unknown codec '${i}'.`);
}, os = async (i, e = {}) => {
  const { width: t = 1280, height: r = 720, bitrate: s = 1e6, ...n } = e;
  if (!ue.includes(i))
    return !1;
  if (!Number.isInteger(t) || t <= 0)
    throw new TypeError("width must be a positive integer.");
  if (!Number.isInteger(r) || r <= 0)
    throw new TypeError("height must be a positive integer.");
  if (!(s instanceof Se) && (!Number.isInteger(s) || s <= 0))
    throw new TypeError("bitrate must be a positive integer or a quality.");
  ka(i, n);
  let a = null;
  return cr.length > 0 && (a ??= vr({
    codec: i,
    width: t,
    height: r,
    bitrate: s,
    framerate: void 0,
    ...n
  }), cr.some((l) => l.supports(i, a))) ? !0 : typeof VideoEncoder > "u" || (t % 2 === 1 || r % 2 === 1) && (i === "avc" || i === "hevc") || (a ??= vr({
    codec: i,
    width: t,
    height: r,
    bitrate: s,
    framerate: void 0,
    ...n,
    alpha: "discard"
    // Since we handle alpha ourselves
  }), !(await VideoEncoder.isConfigSupported(a)).supported) ? !1 : ei() ? new Promise(async (l) => {
    try {
      const d = new VideoEncoder({
        output: () => {
        },
        error: () => l(!1)
      });
      d.configure(a);
      const u = new Uint8Array(t * r * 4), h = new VideoFrame(u, {
        format: "RGBA",
        codedWidth: t,
        codedHeight: r,
        timestamp: 0
      });
      d.encode(h), h.close(), await d.flush(), l(!0);
    } catch {
      l(!1);
    }
  }) : !0;
}, cs = async (i, e = {}) => {
  const { numberOfChannels: t = 2, sampleRate: r = 48e3, bitrate: s = 128e3, ...n } = e;
  if (!me.includes(i))
    return !1;
  if (!Number.isInteger(t) || t <= 0)
    throw new TypeError("numberOfChannels must be a positive integer.");
  if (!Number.isInteger(r) || r <= 0)
    throw new TypeError("sampleRate must be a positive integer.");
  if (!(s instanceof Se) && (!Number.isInteger(s) || s <= 0))
    throw new TypeError("bitrate must be a positive integer.");
  ba(i, n);
  let a = null;
  return lr.length > 0 && (a ??= Ar({
    codec: i,
    numberOfChannels: t,
    sampleRate: r,
    bitrate: s,
    ...n
  }), lr.some((c) => c.supports(i, a))) || ne.includes(i) ? !0 : typeof AudioEncoder > "u" ? !1 : (a ??= Ar({
    codec: i,
    numberOfChannels: t,
    sampleRate: r,
    bitrate: s,
    ...n
  }), (await AudioEncoder.isConfigSupported(a)).supported === !0);
}, ls = async (i) => !!$e.includes(i), ru = async () => {
  const [i, e, t] = await Promise.all([
    Sd(),
    Fr(),
    xd()
  ]);
  return [...i, ...e, ...t];
}, Sd = async (i = ue, e) => {
  const t = await Promise.all(i.map((r) => os(r, e)));
  return i.filter((r, s) => t[s]);
}, Fr = async (i = me, e) => {
  const t = await Promise.all(i.map((r) => cs(r, e)));
  return i.filter((r, s) => t[s]);
}, xd = async (i = $e) => {
  const e = await Promise.all(i.map(ls));
  return i.filter((t, r) => e[r]);
}, Pd = async (i, e) => {
  for (const t of i)
    if (await os(t, e))
      return t;
  return null;
}, su = async (i, e) => {
  for (const t of i)
    if (await cs(t, e))
      return t;
  return null;
}, nu = async (i) => {
  for (const e of i)
    if (await ls(e))
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
class ds {
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
class fi extends ds {
  /** Internal constructor. */
  constructor(e) {
    if (super(), this._connectedTrack = null, !ue.includes(e))
      throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${ue.join(", ")}.`);
    this._codec = e;
  }
}
class Cd extends fi {
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
    if (!(e instanceof G))
      throw new TypeError("packet must be an EncodedPacket.");
    if (e.isMetadataOnly)
      throw new TypeError("Metadata-only packets cannot be added.");
    if (t !== void 0 && (!t || typeof t != "object"))
      throw new TypeError("meta, when provided, must be an object.");
    return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, e, t);
  }
}
class us {
  constructor(e, t) {
    this.source = e, this.encodingConfig = t, this.ensureEncoderPromise = null, this.encoderInitialized = !1, this.encoder = null, this.muxer = null, this.lastMultipleOfKeyFrameInterval = -1, this.codedWidth = null, this.codedHeight = null, this.resizeCanvas = null, this.customEncoder = null, this.customEncoderCallSerializer = new Fi(), this.customEncoderQueueSize = 0, this.alphaEncoder = null, this.splitter = null, this.splitterCreationFailed = !1, this.alphaFrameQueue = [], this.error = null;
  }
  async add(e, t, r) {
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
                alpha: ei()
                // Firefox has VideoFrame glitches with opaque canvases
              });
              p(l), c || (ei() ? (l.fillStyle = "black", l.fillRect(0, 0, this.codedWidth, this.codedHeight)) : l.clearRect(0, 0, this.codedWidth, this.codedHeight)), e.drawWithFit(l, { fit: o }), t && e.close(), e = new Pe(this.resizeCanvas, {
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
        ...r,
        keyFrame: r?.keyFrame || s === 0 || n !== this.lastMultipleOfKeyFrameInterval
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
              this.splitter = new _d(l, d);
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
      const t = vr({
        width: e.codedWidth,
        height: e.codedHeight,
        squarePixelWidth: e.squarePixelWidth,
        squarePixelHeight: e.squarePixelHeight,
        ...this.encodingConfig,
        framerate: this.source._connectedTrack?.metadata.frameRate
      });
      this.encodingConfig.onEncoderConfig?.(t);
      const r = cr.find((s) => s.supports(this.encodingConfig.codec, t));
      if (r)
        this.customEncoder = new r(), this.customEncoder.codec = this.encodingConfig.codec, this.customEncoder.config = t, this.customEncoder.onPacket = (s, n) => {
          if (!(s instanceof G))
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
        const d = (h, f, g) => {
          const m = {};
          if (f) {
            const y = new Uint8Array(f.byteLength);
            f.copyTo(y), m.alpha = y;
          }
          const w = G.fromEncodedChunk(h, m);
          this.encodingConfig.onEncodedPacket?.(w, g), this.muxer.addEncodedVideoPacket(this.source._connectedTrack, w, g).catch((y) => {
            this.error ??= y;
          });
        }, u = new Error("Encoding error").stack;
        if (this.encoder = new VideoEncoder({
          output: (h, f) => {
            if (!this.alphaEncoder) {
              d(h, null, f);
              return;
            }
            const g = this.alphaFrameQueue.shift();
            p(g !== void 0), g ? (this.alphaEncoder.encode(g, {
              // Crucial: The alpha frame is forced to be a key frame whenever the color frame
              // also is. Without this, playback can glitch and even crash in some browsers.
              // This is the reason why the two encoders are wired in series and not in parallel.
              keyFrame: h.type === "key"
            }), l++, g.close(), a.push({ chunk: h, meta: f })) : l === 0 ? d(h, null, f) : (o.push(c + l), a.push({ chunk: h, meta: f }));
          },
          error: (h) => {
            h.stack = u, this.error ??= h;
          }
        }), this.encoder.configure(t), this.encodingConfig.alpha === "keep") {
          const h = new Error("Encoding error").stack;
          this.alphaEncoder = new VideoEncoder({
            // We ignore the alpha chunk's metadata
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            output: (f, g) => {
              l--;
              const m = a.shift();
              for (p(m !== void 0), d(m.chunk, f, m.meta), c++; o.length > 0 && o[0] === c; ) {
                o.shift();
                const w = a.shift();
                p(w !== void 0), d(w.chunk, null, w.meta);
              }
            },
            error: (f) => {
              f.stack = h, this.error ??= f;
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
class _d {
  constructor(e, t) {
    this.lastFrame = null, typeof OffscreenCanvas < "u" ? this.canvas = new OffscreenCanvas(e, t) : (this.canvas = document.createElement("canvas"), this.canvas.width = e, this.canvas.height = t);
    const r = this.canvas.getContext("webgl2", {
      alpha: !0
      // Needed due to the YUV thing we do for alpha
    });
    if (!r)
      throw new Error("Couldn't acquire WebGL 2 context.");
    this.gl = r, this.colorProgram = this.createColorProgram(), this.alphaProgram = this.createAlphaProgram(), this.vao = this.createVAO(), this.sourceTexture = this.createTexture(), this.alphaResolutionLocation = this.gl.getUniformLocation(this.alphaProgram, "u_resolution"), this.gl.useProgram(this.colorProgram), this.gl.uniform1i(this.gl.getUniformLocation(this.colorProgram, "u_sourceTexture"), 0), this.gl.useProgram(this.alphaProgram), this.gl.uniform1i(this.gl.getUniformLocation(this.alphaProgram, "u_sourceTexture"), 0);
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
		`), r = this.gl.createProgram();
    return this.gl.attachShader(r, e), this.gl.attachShader(r, t), this.gl.linkProgram(r), r;
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
		`), r = this.gl.createProgram();
    return this.gl.attachShader(r, e), this.gl.attachShader(r, t), this.gl.linkProgram(r), r;
  }
  createShader(e, t) {
    const r = this.gl.createShader(e);
    return this.gl.shaderSource(r, t), this.gl.compileShader(r), this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS) || console.error("Shader compile error:", this.gl.getShaderInfoLog(r)), r;
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
    ]), r = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, r), this.gl.bufferData(this.gl.ARRAY_BUFFER, t, this.gl.STATIC_DRAW);
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
    const { width: t, height: r } = this.canvas, s = Math.ceil(t / 2) * Math.ceil(r / 2), n = t * r + s * 2, a = Math.ceil(n / (t * 4));
    let o = new Uint8Array(4 * t * a);
    this.gl.readPixels(0, 0, t, a, this.gl.RGBA, this.gl.UNSIGNED_BYTE, o), o = o.subarray(0, n), p(o[t * r] === 128), p(o[o.length - 1] === 128);
    const c = {
      format: "I420",
      codedWidth: t,
      codedHeight: r,
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
class Gs extends fi {
  /**
   * Creates a new {@link VideoSampleSource} whose samples are encoded according to the specified
   * {@link VideoEncodingConfig}.
   */
  constructor(e) {
    ns(e), super(e.codec), this._encoder = new us(this, e);
  }
  /**
   * Encodes a video sample (frame) and then adds it to the output.
   *
   * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
   * to respect writer and encoder backpressure.
   */
  add(e, t) {
    if (!(e instanceof Pe))
      throw new TypeError("videoSample must be a VideoSample.");
    return this._encoder.add(e, !1, t);
  }
  /** @internal */
  _flushAndClose(e) {
    return this._encoder.flushAndClose(e);
  }
}
class au extends fi {
  /**
   * Creates a new {@link CanvasSource} from a canvas element or `OffscreenCanvas` whose samples are encoded
   * according to the specified {@link VideoEncodingConfig}.
   */
  constructor(e, t) {
    if (!(typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) && !(typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas))
      throw new TypeError("canvas must be an HTMLCanvasElement or OffscreenCanvas.");
    ns(t), super(t.codec), this._encoder = new us(this, t), this._canvas = e;
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
  add(e, t = 0, r) {
    if (!Number.isFinite(e) || e < 0)
      throw new TypeError("timestamp must be a non-negative number.");
    if (!Number.isFinite(t) || t < 0)
      throw new TypeError("duration must be a non-negative number.");
    const s = new Pe(this._canvas, { timestamp: e, duration: t });
    return this._encoder.add(s, !0, r);
  }
  /** @internal */
  _flushAndClose(e) {
    return this._encoder.flushAndClose(e);
  }
}
class ou extends fi {
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
  constructor(e, t, r = {}) {
    if (!(e instanceof MediaStreamTrack) || e.kind !== "video")
      throw new TypeError("track must be a video MediaStreamTrack.");
    if (ns(t), typeof r != "object" || !r)
      throw new TypeError("options must be an object.");
    if (r.frameRate != null && (typeof r.frameRate != "number" || r.frameRate <= 0))
      throw new TypeError("options.frameRate, when provided, must be either a positive number or null.");
    t = {
      ...t,
      latencyMode: "realtime"
    }, super(t.codec), this._abortController = null, this._workerTrackId = null, this._workerListener = null, this._promiseWithResolvers = J(), this._errorPromiseAccessed = !1, this._paused = !1, this._lastVideoFrame = null, this._timerHandle = null, this._videoElement = null, this._options = r, this._encoder = new us(this, t), this._track = e;
  }
  /** @internal */
  async _start() {
    this._errorPromiseAccessed || console.warn("Make sure not to ignore the `errorPromise` field on MediaStreamVideoTrackSource, so that any internal errors get bubbled up properly.");
    const e = this._options.frameRate !== void 0 ? this._options.frameRate : this._track.getSettings().frameRate ?? null;
    this._abortController = new AbortController();
    let t = null, r = null, s = 0, n = !1, a = null, o = 0;
    const c = () => {
      if (p(e !== null), !this._lastVideoFrame)
        return;
      p(r !== null), p(t !== null);
      const u = performance.now();
      for (; u - r > 1e3 / e; ) {
        r += 1e3 / e;
        const h = t + s / e, f = new VideoFrame(this._videoElement ?? this._lastVideoFrame, {
          timestamp: 1e6 * h,
          duration: 1e6 / e
        });
        d(f, u);
      }
    };
    e !== null && (this._timerHandle = Da(c, 4));
    const l = (u) => {
      if (e === null)
        d(u);
      else {
        const h = performance.now();
        this._lastVideoFrame ? (c(), this._lastVideoFrame?.close(), this._lastVideoFrame = u) : (d(u.clone(), h), r = h, this._lastVideoFrame = u);
      }
    }, d = (u, h = performance.now()) => {
      if (n) {
        u.close();
        return;
      }
      s++;
      const f = u.timestamp / 1e6;
      if (this._paused) {
        if (t !== null) {
          if (a !== null) {
            const w = f - a;
            o -= w;
          }
          a = f;
        }
        u.close();
        return;
      }
      if (t === null) {
        t = f;
        const m = this._connectedTrack.output._muxer;
        m.firstMediaStreamTimestamp === null ? (m.firstMediaStreamTimestamp = h / 1e3, this._timestampOffset = -t) : this._timestampOffset = h / 1e3 - m.firstMediaStreamTimestamp - t;
      }
      if (a = f, this._encoder.getQueueSize() >= 8) {
        u.close();
        return;
      }
      const g = new Pe(u, {
        timestamp: f + o
      });
      this._encoder.add(g, !0).catch((m) => {
        n = !0, this._abortController?.abort(), this._promiseWithResolvers.reject(m), this._workerTrackId !== null && tr({
          type: "stopTrack",
          trackId: this._workerTrackId
        });
      });
    };
    if (typeof MediaStreamTrackProcessor < "u") {
      const u = new MediaStreamTrackProcessor({ track: this._track }), h = new WritableStream({ write: l });
      u.readable.pipeTo(h, {
        signal: this._abortController.signal
      }).catch((f) => {
        f instanceof DOMException && f.name === "AbortError" || this._promiseWithResolvers.reject(f);
      });
    } else if (await Fd())
      this._workerTrackId = vd++, tr({
        type: "videoTrack",
        trackId: this._workerTrackId,
        track: this._track
      }), this._workerListener = (h) => {
        const f = h.data;
        f.type === "videoFrame" && f.trackId === this._workerTrackId ? l(f.videoFrame) : f.type === "error" && f.trackId === this._workerTrackId && this._promiseWithResolvers.reject(f.error);
      }, Ae.addEventListener("message", this._workerListener);
    else if (e !== null) {
      const h = document.createElement("video");
      h.style.position = "fixed", h.style.left = "-10000px", h.style.top = "-10000px", h.style.width = "1px", h.style.height = "1px", h.style.opacity = "0", h.style.pointerEvents = "none", h.muted = !0, h.srcObject = new MediaStream([this._track]), document.body.appendChild(h), this._videoElement = h, h.addEventListener("loadeddata", () => {
        if (n || !this._videoElement)
          return;
        const f = new VideoFrame(h, {
          timestamp: 1e3 * performance.now()
        });
        l(f), f.close();
      }, { once: !0 }), h.play().catch((f) => {
        n = !0, this._promiseWithResolvers.reject(f);
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
    this._abortController && (this._abortController.abort(), this._abortController = null), this._timerHandle && Ua(this._timerHandle), this._lastVideoFrame?.close(), this._videoElement && (this._videoElement.srcObject = null, this._videoElement.remove(), this._videoElement = null), this._workerTrackId !== null && (p(this._workerListener), tr({
      type: "stopTrack",
      trackId: this._workerTrackId
    }), await new Promise((t) => {
      const r = (s) => {
        const n = s.data;
        n.type === "trackStopped" && n.trackId === this._workerTrackId && (p(this._workerListener), Ae.removeEventListener("message", this._workerListener), Ae.removeEventListener("message", r), t());
      };
      Ae.addEventListener("message", r);
    })), await this._encoder.flushAndClose(e);
  }
}
class mi extends ds {
  /** Internal constructor. */
  constructor(e) {
    if (super(), this._connectedTrack = null, !me.includes(e))
      throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${me.join(", ")}.`);
    this._codec = e;
  }
}
class Id extends mi {
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
    if (!(e instanceof G))
      throw new TypeError("packet must be an EncodedPacket.");
    if (e.isMetadataOnly)
      throw new TypeError("Metadata-only packets cannot be added.");
    if (t !== void 0 && (!t || typeof t != "object"))
      throw new TypeError("meta, when provided, must be an object.");
    return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, e, t);
  }
}
class hs {
  constructor(e, t) {
    this.source = e, this.encodingConfig = t, this.ensureEncoderPromise = null, this.encoderInitialized = !1, this.encoder = null, this.muxer = null, this.lastNumberOfChannels = null, this.lastSampleRate = null, this.isPcmEncoder = !1, this.outputSampleSize = null, this.writeOutputValue = null, this.customEncoder = null, this.customEncoderCallSerializer = new Fi(), this.customEncoderQueueSize = 0, this.lastEndSampleIndex = null, this.error = null;
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
        const r = Math.round(e.timestamp * e.sampleRate), s = Math.round((e.timestamp + e.duration) * e.sampleRate);
        if (this.lastEndSampleIndex === null)
          this.lastEndSampleIndex = s;
        else {
          const n = r - this.lastEndSampleIndex;
          if (n >= 64) {
            const a = new ze({
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
        const r = e.clone(), s = this.customEncoderCallSerializer.call(() => this.customEncoder.encode(r)).then(() => this.customEncoderQueueSize--).catch((n) => this.error ??= n).finally(() => {
          r.close();
        });
        this.customEncoderQueueSize >= 4 && await s, await this.muxer.mutex.currentPromise;
      } else if (this.isPcmEncoder)
        await this.doPcmEncoding(e, t);
      else {
        p(this.encoder);
        const r = e.toAudioData();
        this.encoder.encode(r), r.close(), t && e.close(), this.encoder.encodeQueueSize >= 4 && await new Promise((s) => this.encoder.addEventListener("dequeue", s, { once: !0 })), await this.muxer.mutex.currentPromise;
      }
    } finally {
      t && e.close();
    }
  }
  async doPcmEncoding(e, t) {
    p(this.outputSampleSize), p(this.writeOutputValue);
    const { numberOfChannels: r, numberOfFrames: s, sampleRate: n, timestamp: a } = e, o = 2048, c = [];
    for (let h = 0; h < s; h += o) {
      const f = Math.min(o, e.numberOfFrames - h), g = f * r * this.outputSampleSize, m = new ArrayBuffer(g), w = new DataView(m);
      c.push({ frameCount: f, view: w });
    }
    const l = e.allocationSize({ planeIndex: 0, format: "f32-planar" }), d = new Float32Array(l / Float32Array.BYTES_PER_ELEMENT);
    for (let h = 0; h < r; h++) {
      e.copyTo(d, { planeIndex: h, format: "f32-planar" });
      for (let f = 0; f < c.length; f++) {
        const { frameCount: g, view: m } = c[f];
        for (let w = 0; w < g; w++)
          this.writeOutputValue(m, (w * r + h) * this.outputSampleSize, d[f * o + w]);
      }
    }
    t && e.close();
    const u = {
      decoderConfig: {
        codec: this.encodingConfig.codec,
        numberOfChannels: r,
        sampleRate: n
      }
    };
    for (let h = 0; h < c.length; h++) {
      const { frameCount: f, view: g } = c[h], m = g.buffer, w = h * o, y = new G(new Uint8Array(m), "key", a + w / n, f / n);
      this.encodingConfig.onEncodedPacket?.(y, u), await this.muxer.addEncodedAudioPacket(this.source._connectedTrack, y, u);
    }
  }
  ensureEncoder(e) {
    this.ensureEncoderPromise = (async () => {
      const { numberOfChannels: t, sampleRate: r } = e, s = Ar({
        numberOfChannels: t,
        sampleRate: r,
        ...this.encodingConfig
      });
      this.encodingConfig.onEncoderConfig?.(s);
      const n = lr.find((a) => a.supports(this.encodingConfig.codec, s));
      if (n)
        this.customEncoder = new n(), this.customEncoder.codec = this.encodingConfig.codec, this.customEncoder.config = s, this.customEncoder.onPacket = (a, o) => {
          if (!(a instanceof G))
            throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");
          if (o !== void 0 && (!o || typeof o != "object"))
            throw new TypeError("The second argument passed to onPacket must be an object or undefined.");
          this.encodingConfig.onEncodedPacket?.(a, o), this.muxer.addEncodedAudioPacket(this.source._connectedTrack, a, o).catch((c) => {
            this.error ??= c;
          });
        }, await this.customEncoder.init();
      else if (ne.includes(this.encodingConfig.codec))
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
              if (!l.decoderConfig.description || l.decoderConfig.description.byteLength < 2 ? u = !0 : u = ui(ee(l.decoderConfig.description)).objectType === 0, u) {
                const h = Number(Y(s.codec.split(".")));
                l.decoderConfig.description = Ur({
                  objectType: h,
                  numberOfChannels: l.decoderConfig.numberOfChannels,
                  sampleRate: l.decoderConfig.sampleRate
                });
              }
            }
            const d = G.fromEncodedChunk(c);
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
    const e = this.encodingConfig.codec, { dataType: t, sampleSize: r, littleEndian: s } = Ue(e);
    switch (this.outputSampleSize = r, r) {
      case 1:
        t === "unsigned" ? this.writeOutputValue = (n, a, o) => n.setUint8(a, ke((o + 1) * 127.5, 0, 255)) : t === "signed" ? this.writeOutputValue = (n, a, o) => {
          n.setInt8(a, ke(Math.round(o * 128), -128, 127));
        } : t === "ulaw" ? this.writeOutputValue = (n, a, o) => {
          const c = ke(Math.floor(o * 32767), -32768, 32767);
          n.setUint8(a, po(c));
        } : t === "alaw" ? this.writeOutputValue = (n, a, o) => {
          const c = ke(Math.floor(o * 32767), -32768, 32767);
          n.setUint8(a, wo(c));
        } : p(!1);
        break;
      case 2:
        t === "unsigned" ? this.writeOutputValue = (n, a, o) => n.setUint16(a, ke((o + 1) * 32767.5, 0, 65535), s) : t === "signed" ? this.writeOutputValue = (n, a, o) => n.setInt16(a, ke(Math.round(o * 32767), -32768, 32767), s) : p(!1);
        break;
      case 3:
        t === "unsigned" ? this.writeOutputValue = (n, a, o) => Br(n, a, ke((o + 1) * 83886075e-1, 0, 16777215), s) : t === "signed" ? this.writeOutputValue = (n, a, o) => Na(n, a, ke(Math.round(o * 8388607), -8388608, 8388607), s) : p(!1);
        break;
      case 4:
        t === "unsigned" ? this.writeOutputValue = (n, a, o) => n.setUint32(a, ke((o + 1) * 21474836475e-1, 0, 4294967295), s) : t === "signed" ? this.writeOutputValue = (n, a, o) => n.setInt32(a, ke(Math.round(o * 2147483647), -2147483648, 2147483647), s) : t === "float" ? this.writeOutputValue = (n, a, o) => n.setFloat32(a, o, s) : p(!1);
        break;
      case 8:
        t === "float" ? this.writeOutputValue = (n, a, o) => n.setFloat64(a, o, s) : p(!1);
        break;
      default:
        fe(r), p(!1);
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
class Xs extends mi {
  /**
   * Creates a new {@link AudioSampleSource} whose samples are encoded according to the specified
   * {@link AudioEncodingConfig}.
   */
  constructor(e) {
    as(e), super(e.codec), this._encoder = new hs(this, e);
  }
  /**
   * Encodes an audio sample and then adds it to the output.
   *
   * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
   * to respect writer and encoder backpressure.
   */
  add(e) {
    if (!(e instanceof ze))
      throw new TypeError("audioSample must be an AudioSample.");
    return this._encoder.add(e, !1);
  }
  /** @internal */
  _flushAndClose(e) {
    return this._encoder.flushAndClose(e);
  }
}
class cu extends mi {
  /**
   * Creates a new {@link AudioBufferSource} whose `AudioBuffer` instances are encoded according to the specified
   * {@link AudioEncodingConfig}.
   */
  constructor(e) {
    as(e), super(e.codec), this._accumulatedTime = 0, this._encoder = new hs(this, e);
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
    const t = ze._fromAudioBuffer(e, this._accumulatedTime);
    this._accumulatedTime += e.duration;
    for (const r of t)
      await this._encoder.add(r, !0);
  }
  /** @internal */
  _flushAndClose(e) {
    return this._encoder.flushAndClose(e);
  }
}
class lu extends mi {
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
    as(t), super(t.codec), this._abortController = null, this._audioContext = null, this._scriptProcessorNode = null, this._promiseWithResolvers = J(), this._errorPromiseAccessed = !1, this._paused = !1, this._encoder = new hs(this, t), this._track = e;
  }
  /** @internal */
  async _start() {
    this._errorPromiseAccessed || console.warn("Make sure not to ignore the `errorPromise` field on MediaStreamAudioTrackSource, so that any internal errors get bubbled up properly."), this._abortController = new AbortController();
    let e = null, t = !1, r = null, s = 0;
    const n = (a) => {
      if (t) {
        a.close();
        return;
      }
      const o = a.timestamp;
      if (this._paused) {
        if (e !== null) {
          if (r !== null) {
            const l = o - r;
            s -= l;
          }
          r = o;
        }
        a.close();
        return;
      }
      if (e === null) {
        e = a.timestamp;
        const c = this._connectedTrack.output._muxer;
        c.firstMediaStreamTimestamp === null ? (c.firstMediaStreamTimestamp = performance.now() / 1e3, this._timestampOffset = -e) : this._timestampOffset = performance.now() / 1e3 - c.firstMediaStreamTimestamp - e;
      }
      if (r = o, this._encoder.getQueueSize() >= 8) {
        a.close();
        return;
      }
      a.setTimestamp(o + s), this._encoder.add(a, !0).catch((c) => {
        t = !0, this._abortController?.abort(), this._promiseWithResolvers.reject(c), this._audioContext?.suspend();
      });
    };
    if (typeof MediaStreamTrackProcessor < "u") {
      const a = new MediaStreamTrackProcessor({ track: this._track }), o = new WritableStream({
        write: (c) => n(new ze(c))
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
        const d = ze._fromAudioBuffer(l.inputBuffer, c);
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
const Ed = () => {
  const i = (r, s) => {
    s ? self.postMessage(r, { transfer: s }) : self.postMessage(r);
  };
  i({
    type: "support",
    supported: typeof MediaStreamTrackProcessor < "u"
  });
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  self.addEventListener("message", (r) => {
    const s = r.data;
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
              i({
                type: "videoFrame",
                trackId: s.trackId,
                videoFrame: c
              }, [c]);
            }
          }), o = new AbortController();
          e.set(s.trackId, o), n.readable.pipeTo(a, {
            signal: o.signal
          }).catch((c) => {
            c instanceof DOMException && c.name === "AbortError" || i({
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
          n && (n.abort(), e.delete(s.trackId)), t.get(s.trackId)?.stop(), t.delete(s.trackId), i({
            type: "trackStopped",
            trackId: s.trackId
          });
        }
        break;
      default:
        fe(s);
    }
  });
};
let vd = 0, Ae = null;
const Ad = () => {
  const i = new Blob([`(${Ed.toString()})()`], { type: "application/javascript" }), e = URL.createObjectURL(i);
  Ae = new Worker(e);
};
let er = null;
const Fd = async () => er !== null ? er : (Ae || Ad(), new Promise((i) => {
  p(Ae);
  const e = (t) => {
    const r = t.data;
    r.type === "support" && (er = r.supported, Ae.removeEventListener("message", e), i(r.supported));
  };
  Ae.addEventListener("message", e);
})), tr = (i, e) => {
  p(Ae), Ae.postMessage(i);
};
class ya extends ds {
  /** Internal constructor. */
  constructor(e) {
    if (super(), this._connectedTrack = null, !$e.includes(e))
      throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${$e.join(", ")}.`);
    this._codec = e;
  }
}
class du extends ya {
  /** Creates a new {@link TextSubtitleSource} where added text chunks are in the specified `codec`. */
  constructor(e) {
    super(e), this._error = null, this._parser = new Oc({
      codec: e,
      output: (t, r) => {
        this._connectedTrack?.output._muxer.addSubtitleCue(this._connectedTrack, t, r).catch((s) => {
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
const Bd = ["video", "audio", "subtitle"], ir = (i) => {
  if (!i || typeof i != "object")
    throw new TypeError("metadata must be an object.");
  if (i.languageCode !== void 0 && !ti(i.languageCode))
    throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
  if (i.name !== void 0 && typeof i.name != "string")
    throw new TypeError("metadata.name, when provided, must be a string.");
  if (i.disposition !== void 0 && Oa(i.disposition), i.maximumPacketCount !== void 0 && (!Number.isInteger(i.maximumPacketCount) || i.maximumPacketCount < 0))
    throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
};
class Ys {
  /**
   * Creates a new instance of {@link Output} which can then be used to create a new media file according to the
   * specified {@link OutputOptions}.
   */
  constructor(e) {
    if (this.state = "pending", this._tracks = [], this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new Ot(), this._metadataTags = {}, !e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (!(e.format instanceof Ye))
      throw new TypeError("options.format must be an OutputFormat.");
    if (!(e.target instanceof hi))
      throw new TypeError("options.target must be a Target.");
    if (e.target._output)
      throw new Error("Target is already used for another output.");
    e.target._output = this, this.format = e.format, this.target = e.target, this._writer = e.target._createWriter(), this._muxer = e.format._createMuxer(this);
  }
  /** Adds a video track to the output with the given source. Can only be called before the output is started. */
  addVideoTrack(e, t = {}) {
    if (!(e instanceof fi))
      throw new TypeError("source must be a VideoSource.");
    if (ir(t), t.rotation !== void 0 && ![0, 90, 180, 270].includes(t.rotation))
      throw new TypeError(`Invalid video rotation: ${t.rotation}. Has to be 0, 90, 180 or 270.`);
    if (!this.format.supportsVideoRotationMetadata && t.rotation)
      throw new Error(`${this.format._name} does not support video rotation metadata.`);
    if (t.frameRate !== void 0 && (!Number.isFinite(t.frameRate) || t.frameRate <= 0))
      throw new TypeError(`Invalid video frame rate: ${t.frameRate}. Must be a positive number.`);
    this._addTrack("video", e, t);
  }
  /** Adds an audio track to the output with the given source. Can only be called before the output is started. */
  addAudioTrack(e, t = {}) {
    if (!(e instanceof mi))
      throw new TypeError("source must be an AudioSource.");
    ir(t), this._addTrack("audio", e, t);
  }
  /** Adds a subtitle track to the output with the given source. Can only be called before the output is started. */
  addSubtitleTrack(e, t = {}) {
    if (!(e instanceof ya))
      throw new TypeError("source must be a SubtitleSource.");
    ir(t), this._addTrack("subtitle", e, t);
  }
  /**
   * Sets descriptive metadata tags about the media file, such as title, author, date, or cover art. When called
   * multiple times, only the metadata from the last call will be used.
   *
   * Can only be called before the output is started.
   */
  setMetadataTags(e) {
    if (dr(e), this.state !== "pending")
      throw new Error("Cannot set metadata tags after output has been started or canceled.");
    this._metadataTags = e;
  }
  /** @internal */
  _addTrack(e, t, r) {
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
      metadata: r
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
    for (const r of Bd) {
      const s = this._tracks.reduce((a, o) => a + (o.type === r ? 1 : 0), 0), n = e[r].min;
      if (s < n)
        throw new Error(n === e[r].max ? `${this.format._name} requires exactly ${n} ${r} track${n === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${n} ${r} track${n === 1 ? "" : "s"}.`);
    }
    const t = e.total.min;
    if (this._tracks.length < t)
      throw new Error(t === e.total.max ? `${this.format._name} requires exactly ${t} track${t === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${t} track${t === 1 ? "" : "s"}.`);
    if (this.state === "canceled")
      throw new Error("Output has been canceled.");
    return this._startPromise ? (console.warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
      this.state = "started", this._writer.start();
      const r = await this._mutex.acquire();
      await this._muxer.start();
      const s = this._tracks.map((n) => n.source._start());
      await Promise.all(s), r();
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
      const e = await this._mutex.acquire(), t = this._tracks.map((r) => r.source._flushOrWaitForOngoingClose(!0));
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
      const e = await this._mutex.acquire(), t = this._tracks.map((r) => r.source._flushOrWaitForOngoingClose(!1));
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
const Zs = (i) => {
  if (i !== void 0 && (!i || typeof i != "object"))
    throw new TypeError("options.video, when provided, must be an object.");
  if (i?.discard !== void 0 && typeof i.discard != "boolean")
    throw new TypeError("options.video.discard, when provided, must be a boolean.");
  if (i?.forceTranscode !== void 0 && typeof i.forceTranscode != "boolean")
    throw new TypeError("options.video.forceTranscode, when provided, must be a boolean.");
  if (i?.codec !== void 0 && !ue.includes(i.codec))
    throw new TypeError(`options.video.codec, when provided, must be one of: ${ue.join(", ")}.`);
  if (i?.bitrate !== void 0 && !(i.bitrate instanceof Se) && (!Number.isInteger(i.bitrate) || i.bitrate <= 0))
    throw new TypeError("options.video.bitrate, when provided, must be a positive integer or a quality.");
  if (i?.width !== void 0 && (!Number.isInteger(i.width) || i.width <= 0))
    throw new TypeError("options.video.width, when provided, must be a positive integer.");
  if (i?.height !== void 0 && (!Number.isInteger(i.height) || i.height <= 0))
    throw new TypeError("options.video.height, when provided, must be a positive integer.");
  if (i?.fit !== void 0 && !["fill", "contain", "cover"].includes(i.fit))
    throw new TypeError("options.video.fit, when provided, must be one of 'fill', 'contain', or 'cover'.");
  if (i?.width !== void 0 && i.height !== void 0 && i.fit === void 0)
    throw new TypeError("When both options.video.width and options.video.height are provided, options.video.fit must also be provided.");
  if (i?.rotate !== void 0 && ![0, 90, 180, 270].includes(i.rotate))
    throw new TypeError("options.video.rotate, when provided, must be 0, 90, 180 or 270.");
  if (i?.allowRotationMetadata !== void 0 && typeof i.allowRotationMetadata != "boolean")
    throw new TypeError("options.video.allowRotationMetadata, when provided, must be a boolean.");
  if (i?.crop !== void 0 && rn(i.crop, "options.video."), i?.frameRate !== void 0 && (!Number.isFinite(i.frameRate) || i.frameRate <= 0))
    throw new TypeError("options.video.frameRate, when provided, must be a finite positive number.");
  if (i?.alpha !== void 0 && !["discard", "keep"].includes(i.alpha))
    throw new TypeError("options.video.alpha, when provided, must be either 'discard' or 'keep'.");
  if (i?.keyFrameInterval !== void 0 && (!Number.isFinite(i.keyFrameInterval) || i.keyFrameInterval < 0))
    throw new TypeError("options.video.keyFrameInterval, when provided, must be a non-negative number.");
  if (i?.process !== void 0 && typeof i.process != "function")
    throw new TypeError("options.video.process, when provided, must be a function.");
  if (i?.processedWidth !== void 0 && (!Number.isInteger(i.processedWidth) || i.processedWidth <= 0))
    throw new TypeError("options.video.processedWidth, when provided, must be a positive integer.");
  if (i?.processedHeight !== void 0 && (!Number.isInteger(i.processedHeight) || i.processedHeight <= 0))
    throw new TypeError("options.video.processedHeight, when provided, must be a positive integer.");
  if (i?.hardwareAcceleration !== void 0 && !["no-preference", "prefer-hardware", "prefer-software"].includes(i.hardwareAcceleration))
    throw new TypeError("options.video.hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
}, Js = (i) => {
  if (i !== void 0 && (!i || typeof i != "object"))
    throw new TypeError("options.audio, when provided, must be an object.");
  if (i?.discard !== void 0 && typeof i.discard != "boolean")
    throw new TypeError("options.audio.discard, when provided, must be a boolean.");
  if (i?.forceTranscode !== void 0 && typeof i.forceTranscode != "boolean")
    throw new TypeError("options.audio.forceTranscode, when provided, must be a boolean.");
  if (i?.codec !== void 0 && !me.includes(i.codec))
    throw new TypeError(`options.audio.codec, when provided, must be one of: ${me.join(", ")}.`);
  if (i?.bitrate !== void 0 && !(i.bitrate instanceof Se) && (!Number.isInteger(i.bitrate) || i.bitrate <= 0))
    throw new TypeError("options.audio.bitrate, when provided, must be a positive integer or a quality.");
  if (i?.numberOfChannels !== void 0 && (!Number.isInteger(i.numberOfChannels) || i.numberOfChannels <= 0))
    throw new TypeError("options.audio.numberOfChannels, when provided, must be a positive integer.");
  if (i?.sampleRate !== void 0 && (!Number.isInteger(i.sampleRate) || i.sampleRate <= 0))
    throw new TypeError("options.audio.sampleRate, when provided, must be a positive integer.");
  if (i?.process !== void 0 && typeof i.process != "function")
    throw new TypeError("options.audio.process, when provided, must be a function.");
  if (i?.processedNumberOfChannels !== void 0 && (!Number.isInteger(i.processedNumberOfChannels) || i.processedNumberOfChannels <= 0))
    throw new TypeError("options.audio.processedNumberOfChannels, when provided, must be a positive integer.");
  if (i?.processedSampleRate !== void 0 && (!Number.isInteger(i.processedSampleRate) || i.processedSampleRate <= 0))
    throw new TypeError("options.audio.processedSampleRate, when provided, must be a positive integer.");
}, rr = 2, sr = 48e3;
class Ta {
  /** Initializes a new conversion process without starting the conversion. */
  static async init(e) {
    const t = new Ta(e);
    return await t._init(), t;
  }
  /** Creates a new Conversion instance (duh). */
  constructor(e) {
    if (this._addedCounts = {
      video: 0,
      audio: 0,
      subtitle: 0
    }, this._totalTrackCount = 0, this._trackPromises = [], this._executed = !1, this._synchronizer = new Md(), this._totalDuration = null, this._maxTimestamps = /* @__PURE__ */ new Map(), this._canceled = !1, this.onProgress = void 0, this._computeProgress = !1, this._lastProgress = 0, this.isValid = !1, this.utilizedTracks = [], this.discardedTracks = [], !e || typeof e != "object")
      throw new TypeError("options must be an object.");
    if (!(e.input instanceof _c))
      throw new TypeError("options.input must be an Input.");
    if (!(e.output instanceof Ys))
      throw new TypeError("options.output must be an Output.");
    if (e.output._tracks.length > 0 || Object.keys(e.output._metadataTags).length > 0 || e.output.state !== "pending")
      throw new TypeError("options.output must be fresh: no tracks or metadata tags added and not started.");
    if (typeof e.video != "function" && Zs(e.video), typeof e.audio != "function" && Js(e.audio), e.trim !== void 0 && (!e.trim || typeof e.trim != "object"))
      throw new TypeError("options.trim, when provided, must be an object.");
    if (e.trim?.start !== void 0 && !Number.isFinite(e.trim.start))
      throw new TypeError("options.trim.start, when provided, must be a finite number.");
    if (e.trim?.end !== void 0 && !Number.isFinite(e.trim.end))
      throw new TypeError("options.trim.end, when provided, must be a finite number.");
    if (e.trim?.start !== void 0 && e.trim.end !== void 0 && e.trim.start >= e.trim.end)
      throw new TypeError("options.trim.start must be less than options.trim.end.");
    if (e.tags !== void 0 && (typeof e.tags != "object" || !e.tags) && typeof e.tags != "function")
      throw new TypeError("options.tags, when provided, must be an object or a function.");
    if (typeof e.tags == "object" && dr(e.tags), e.showWarnings !== void 0 && typeof e.showWarnings != "boolean")
      throw new TypeError("options.showWarnings, when provided, must be a boolean.");
    this._options = e, this.input = e.input, this.output = e.output;
    const { promise: t, resolve: r } = J();
    this._started = t, this._start = r;
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
    let r = 1, s = 1;
    for (const l of e) {
      let d;
      if (l.isVideoTrack() ? this._options.video && (typeof this._options.video == "function" ? (d = await this._options.video(l, r), Zs(d), r++) : d = this._options.video) : l.isAudioTrack() ? this._options.audio && (typeof this._options.audio == "function" ? (d = await this._options.audio(l, s), Js(d), s++) : d = this._options.audio) : p(!1), d?.discard) {
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
      dr(l), a = l;
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
      const t = this.discardedTracks.every((r) => r.reason === "discarded_by_user" || r.reason === "no_encodable_target_codec");
      if (e.push("Due to discarded tracks, this conversion cannot be executed."), t) {
        const r = this.discardedTracks.flatMap((s) => s.reason === "discarded_by_user" ? [] : s.track.type === "video" ? this.output.format.getSupportedVideoCodecs() : s.track.type === "audio" ? this.output.format.getSupportedAudioCodecs() : this.output.format.getSupportedSubtitleCodecs());
        r.length === 1 ? e.push(`
Tracks were discarded because your environment is not able to encode '${r[0]}'.`) : e.push(`
Tracks were discarded because your environment is not able to encode any of the following codecs: ${r.map((s) => `'${s}'`).join(", ")}.`), r.includes("mp3") && e.push(`
The @mediabunny/mp3-encoder extension package provides support for encoding MP3.`), r.includes("aac") && e.push(`
The @mediabunny/aac-encoder extension package provides support for encoding AAC.`), (r.includes("ac3") || r.includes("eac3")) && e.push(`
The @mediabunny/ac3 extension package provides support for encoding and decoding AC-3/E-AC-3.`), r.includes("flac") && e.push(`
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
      const e = this.utilizedTracks.map((r) => r.computeDuration()), t = Math.max(0, ...await Promise.all(e));
      this._computeProgress = !0, this._totalDuration = Math.min(t - this._startTimestamp, this._endTimestamp - this._startTimestamp);
      for (const r of this.utilizedTracks)
        this._maxTimestamps.set(r.id, 0);
      this.onProgress?.(0);
    }
    await this.output.start(), this._start();
    try {
      await Promise.all(this._trackPromises);
    } catch (e) {
      throw this._canceled || this.cancel(), e;
    }
    if (this._canceled)
      throw new Rd();
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
    const r = e.codec;
    if (!r) {
      this.discardedTracks.push({
        track: e,
        reason: "unknown_source_codec"
      });
      return;
    }
    let s;
    const n = Bi(e.rotation + (t.rotate ?? 0));
    let a = n;
    const o = this.output.format.supportsVideoRotationMetadata && (t.allowRotationMetadata ?? !0), [c, l] = n % 180 === 0 ? [e.squarePixelWidth, e.squarePixelHeight] : [e.squarePixelHeight, e.squarePixelWidth], d = t.crop;
    d && sn(d, c, l);
    const [u, h] = d ? [d.width, d.height] : [c, l];
    let f = u, g = h;
    const m = f / g, w = (P) => Math.ceil(P / 2) * 2;
    t.width !== void 0 && t.height === void 0 ? (f = w(t.width), g = w(Math.round(f / m))) : t.width === void 0 && t.height !== void 0 ? (g = w(t.height), f = w(Math.round(g * m))) : t.width !== void 0 && t.height !== void 0 && (f = w(t.width), g = w(t.height));
    const y = await e.getFirstTimestamp();
    let k = this.output.format.getSupportedVideoCodecs();
    const T = !!t.forceTranscode || y < this._startTimestamp || !!t.frameRate || t.keyFrameInterval !== void 0 || t.process !== void 0 || t.bitrate !== void 0 || !k.includes(r) || t.codec && t.codec !== r || f !== u || g !== h || n !== 0 && !o || !!d, S = t.alpha ?? "discard";
    if (T) {
      if (!await e.canDecode()) {
        this.discardedTracks.push({
          track: e,
          reason: "undecodable_source_codec"
        });
        return;
      }
      t.codec && (k = k.filter((U) => U === t.codec));
      const x = t.bitrate ?? Ks, C = await Pd(k, {
        width: t.process && t.processedWidth ? t.processedWidth : f,
        height: t.process && t.processedHeight ? t.processedHeight : g,
        bitrate: x
      });
      if (!C) {
        this.discardedTracks.push({
          track: e,
          reason: "no_encodable_target_codec"
        });
        return;
      }
      const _ = {
        codec: C,
        bitrate: x,
        keyFrameInterval: t.keyFrameInterval,
        sizeChangeBehavior: t.fit ?? "passThrough",
        alpha: S,
        hardwareAcceleration: t.hardwareAcceleration
      }, E = new Gs(_);
      s = E;
      let N = f !== u || g !== h || n !== 0 && (!o || t.process !== void 0) || !!d || e.squarePixelWidth !== e.codedWidth || e.squarePixelHeight !== e.codedHeight;
      if (!N) {
        const U = new Ys({
          format: new ga(),
          // Supports all video codecs
          target: new rd()
        }), F = new Gs(_);
        U.addVideoTrack(F), await U.start();
        const L = await new wr(e).getSample(y);
        if (L)
          try {
            await F.add(L), L.close(), await U.finalize();
          } catch (j) {
            console.info("Error when probing encoder support. Falling back to rerender path.", j), N = !0, U.cancel();
          }
        else
          await U.cancel();
      }
      N ? this._trackPromises.push((async () => {
        await this._started;
        const F = new To(e, {
          width: f,
          height: g,
          fit: t.fit ?? "fill",
          rotation: n,
          // Bake the rotation into the output
          crop: t.crop,
          poolSize: 1,
          alpha: S === "keep"
        }).canvases(this._startTimestamp, this._endTimestamp), M = t.frameRate;
        a = 0;
        let L = null, j = null, $ = null;
        const K = async (te) => {
          p(L), p(M !== void 0);
          const re = Math.round((te - j) * M);
          for (let Ne = 1; Ne < re; Ne++) {
            const Ze = new Pe(L, {
              timestamp: j + Ne / M,
              duration: 1 / M
            });
            await this._registerVideoSample(e, t, E, Ze), Ze.close();
          }
        };
        for await (const { canvas: te, timestamp: re, duration: Ne } of F) {
          if (this._canceled)
            return;
          let Ze = Math.max(re - this._startTimestamp, 0);
          if ($ = Ze + Ne, M !== void 0) {
            const pi = Math.floor(Ze * M) / M;
            if (L !== null)
              if (pi <= j) {
                L = te, j = pi;
                continue;
              } else
                await K(pi);
            Ze = pi;
          }
          const fs = new Pe(te, {
            timestamp: Ze,
            duration: M !== void 0 ? 1 / M : Ne
          });
          await this._registerVideoSample(e, t, E, fs), fs.close(), M !== void 0 && (L = te, j = Ze);
        }
        L && (p($ !== null), p(M !== void 0), await K(Math.floor($ * M) / M)), E.close(), this._synchronizer.closeTrack(e.id);
      })()) : this._trackPromises.push((async () => {
        await this._started;
        const U = new wr(e), F = t.frameRate;
        let M = null, L = null, j = null;
        const $ = async (K) => {
          p(M), p(F !== void 0);
          const te = Math.round((K - L) * F);
          for (let re = 1; re < te; re++)
            M.setTimestamp(L + re / F), M.setDuration(1 / F), await this._registerVideoSample(e, t, E, M);
          M.close();
        };
        for await (const K of U.samples(this._startTimestamp, this._endTimestamp)) {
          if (this._canceled) {
            K.close(), M?.close();
            return;
          }
          let te = Math.max(K.timestamp - this._startTimestamp, 0);
          if (j = te + K.duration, F !== void 0) {
            const re = Math.floor(te * F) / F;
            if (M !== null)
              if (re <= L) {
                M.close(), M = K, L = re;
                continue;
              } else
                await $(re);
            te = re, K.setDuration(1 / F);
          }
          K.setTimestamp(te), await this._registerVideoSample(e, t, E, K), F !== void 0 ? (M = K, L = te) : K.close();
        }
        M && (p(j !== null), p(F !== void 0), await $(Math.floor(j * F) / F)), E.close(), this._synchronizer.closeTrack(e.id);
      })());
    } else {
      const P = new Cd(r);
      s = P, this._trackPromises.push((async () => {
        await this._started;
        const x = new si(e), _ = { decoderConfig: await e.getDecoderConfig() ?? void 0 }, E = Number.isFinite(this._endTimestamp) ? await x.getPacket(this._endTimestamp, { metadataOnly: !0 }) ?? void 0 : void 0;
        for await (const N of x.packets(void 0, E, { verifyKeyPackets: !0 })) {
          if (this._canceled)
            return;
          const U = N.clone({
            timestamp: N.timestamp - this._startTimestamp,
            sideData: S === "discard" ? {} : N.sideData
          });
          p(U.timestamp >= 0), this._reportProgress(e.id, U.timestamp), await P.add(U, _), this._synchronizer.shouldWait(e.id, U.timestamp) && await this._synchronizer.wait(U.timestamp);
        }
        P.close(), this._synchronizer.closeTrack(e.id);
      })());
    }
    this.output.addVideoTrack(s, {
      frameRate: t.frameRate,
      // TODO: This condition can be removed when all demuxers properly homogenize to BCP47 in v2
      languageCode: ti(e.languageCode) ? e.languageCode : void 0,
      name: e.name ?? void 0,
      disposition: e.disposition,
      rotation: a
    }), this._addedCounts.video++, this._totalTrackCount++, this.utilizedTracks.push(e);
  }
  /** @internal */
  async _registerVideoSample(e, t, r, s) {
    if (this._canceled)
      return;
    this._reportProgress(e.id, s.timestamp);
    let n;
    if (!t.process)
      n = [s];
    else {
      let a = t.process(s);
      a instanceof Promise && (a = await a), Array.isArray(a) || (a = a === null ? [] : [a]), n = a.map((o) => o instanceof Pe ? o : typeof VideoFrame < "u" && o instanceof VideoFrame ? new Pe(o) : new Pe(o, {
        timestamp: s.timestamp,
        duration: s.duration
      }));
    }
    for (const a of n) {
      if (this._canceled)
        break;
      await r.add(a), this._synchronizer.shouldWait(e.id, a.timestamp) && await this._synchronizer.wait(a.timestamp);
    }
    for (const a of n)
      a !== s && a.close();
  }
  /** @internal */
  async _processAudioTrack(e, t) {
    const r = e.codec;
    if (!r) {
      this.discardedTracks.push({
        track: e,
        reason: "unknown_source_codec"
      });
      return;
    }
    let s;
    const n = e.numberOfChannels, a = e.sampleRate, o = await e.getFirstTimestamp();
    let c = t.numberOfChannels ?? n, l = t.sampleRate ?? a, d = c !== n || l !== a || o < this._startTimestamp || o > this._startTimestamp && !this.output.format.supportsTimestampedMediaData, u = this.output.format.getSupportedAudioCodecs();
    if (!t.forceTranscode && !t.bitrate && !d && u.includes(r) && (!t.codec || t.codec === r) && !t.process) {
      const h = new Id(r);
      s = h, this._trackPromises.push((async () => {
        await this._started;
        const f = new si(e), m = { decoderConfig: await e.getDecoderConfig() ?? void 0 }, w = Number.isFinite(this._endTimestamp) ? await f.getPacket(this._endTimestamp, { metadataOnly: !0 }) ?? void 0 : void 0;
        for await (const y of f.packets(void 0, w)) {
          if (this._canceled)
            return;
          const k = y.clone({
            timestamp: y.timestamp - this._startTimestamp
          });
          p(k.timestamp >= 0), this._reportProgress(e.id, k.timestamp), await h.add(k, m), this._synchronizer.shouldWait(e.id, k.timestamp) && await this._synchronizer.wait(k.timestamp);
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
      let f = null;
      t.codec && (u = u.filter((w) => w === t.codec));
      const g = t.bitrate ?? Ks, m = await Fr(u, {
        numberOfChannels: t.process && t.processedNumberOfChannels ? t.processedNumberOfChannels : c,
        sampleRate: t.process && t.processedSampleRate ? t.processedSampleRate : l,
        bitrate: g
      });
      if (!m.some((w) => Rt.includes(w)) && u.some((w) => Rt.includes(w)) && (c !== rr || l !== sr)) {
        const y = (await Fr(u, {
          numberOfChannels: rr,
          sampleRate: sr,
          bitrate: g
        })).find((k) => Rt.includes(k));
        y && (d = !0, f = y, c = rr, l = sr);
      } else
        f = m[0] ?? null;
      if (f === null) {
        this.discardedTracks.push({
          track: e,
          reason: "no_encodable_target_codec"
        });
        return;
      }
      if (d)
        s = this._resampleAudio(e, t, f, c, l, g);
      else {
        const w = new Xs({
          codec: f,
          bitrate: g
        });
        s = w, this._trackPromises.push((async () => {
          await this._started;
          const y = new kr(e);
          for await (const k of y.samples(void 0, this._endTimestamp)) {
            if (this._canceled) {
              k.close();
              return;
            }
            k.setTimestamp(k.timestamp - this._startTimestamp), await this._registerAudioSample(e, t, w, k), k.close();
          }
          w.close(), this._synchronizer.closeTrack(e.id);
        })());
      }
    }
    this.output.addAudioTrack(s, {
      // TODO: This condition can be removed when all demuxers properly homogenize to BCP47 in v2
      languageCode: ti(e.languageCode) ? e.languageCode : void 0,
      name: e.name ?? void 0,
      disposition: e.disposition
    }), this._addedCounts.audio++, this._totalTrackCount++, this.utilizedTracks.push(e);
  }
  /** @internal */
  async _registerAudioSample(e, t, r, s) {
    if (this._canceled)
      return;
    this._reportProgress(e.id, s.timestamp);
    let n;
    if (!t.process)
      n = [s];
    else {
      let a = t.process(s);
      if (a instanceof Promise && (a = await a), Array.isArray(a) || (a = a === null ? [] : [a]), !a.every((o) => o instanceof ze))
        throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");
      n = a;
    }
    for (const a of n) {
      if (this._canceled)
        break;
      await r.add(a), this._synchronizer.shouldWait(e.id, a.timestamp) && await this._synchronizer.wait(a.timestamp);
    }
    for (const a of n)
      a !== s && a.close();
  }
  /** @internal */
  _resampleAudio(e, t, r, s, n, a) {
    const o = new Xs({
      codec: r,
      bitrate: a
    });
    return this._trackPromises.push((async () => {
      await this._started;
      const c = new zd({
        targetNumberOfChannels: s,
        targetSampleRate: n,
        startTime: this._startTimestamp,
        endTime: this._endTimestamp,
        onSample: async (u) => {
          await this._registerAudioSample(e, t, o, u), u.close();
        }
      }), d = new kr(e).samples(this._startTimestamp, this._endTimestamp);
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
    const r = Math.min(...this._maxTimestamps.values()), s = ke(r / this._totalDuration, 0, 1);
    s !== this._lastProgress && (this._lastProgress = s, this.onProgress?.(s));
  }
}
class Rd extends Error {
  /** Creates a new {@link ConversionCanceledError}. */
  constructor(e = "Conversion has been canceled.") {
    super(e), this.name = "ConversionCanceledError";
  }
}
const en = 5;
class Md {
  constructor() {
    this.maxTimestamps = /* @__PURE__ */ new Map(), this.resolvers = [];
  }
  computeMinAndMaybeResolve() {
    let e = 1 / 0;
    for (const [, t] of this.maxTimestamps)
      e = Math.min(e, t);
    for (let t = 0; t < this.resolvers.length; t++) {
      const r = this.resolvers[t];
      r.timestamp - e < en && (r.resolve(), this.resolvers.splice(t, 1), t--);
    }
    return e;
  }
  shouldWait(e, t) {
    this.maxTimestamps.set(e, Math.max(t, this.maxTimestamps.get(e) ?? -1 / 0));
    const r = this.computeMinAndMaybeResolve();
    return t - r >= en;
  }
  wait(e) {
    const { promise: t, resolve: r } = J();
    return this.resolvers.push({
      timestamp: e,
      resolve: r
    }), t;
  }
  closeTrack(e) {
    this.maxTimestamps.delete(e), this.computeMinAndMaybeResolve();
  }
}
class zd {
  constructor(e) {
    this.sourceSampleRate = null, this.sourceNumberOfChannels = null, this.targetSampleRate = e.targetSampleRate, this.targetNumberOfChannels = e.targetNumberOfChannels, this.startTime = e.startTime, this.endTime = e.endTime, this.onSample = e.onSample, this.bufferSizeInFrames = Math.floor(this.targetSampleRate * 5), this.bufferSizeInSamples = this.bufferSizeInFrames * this.targetNumberOfChannels, this.outputBuffer = new Float32Array(this.bufferSizeInSamples), this.bufferStartFrame = 0, this.maxWrittenFrame = -1;
  }
  /**
   * Sets up the channel mixer to handle up/downmixing in the case where input and output channel counts don't match.
   */
  doChannelMixerSetup() {
    p(this.sourceNumberOfChannels !== null);
    const e = this.sourceNumberOfChannels, t = this.targetNumberOfChannels;
    e === 1 && t === 2 ? this.channelMixer = (r, s) => r[s * e] : e === 1 && t === 4 ? this.channelMixer = (r, s, n) => r[s * e] * +(n < 2) : e === 1 && t === 6 ? this.channelMixer = (r, s, n) => r[s * e] * +(n === 2) : e === 2 && t === 1 ? this.channelMixer = (r, s) => {
      const n = s * e;
      return 0.5 * (r[n] + r[n + 1]);
    } : e === 2 && t === 4 ? this.channelMixer = (r, s, n) => r[s * e + n] * +(n < 2) : e === 2 && t === 6 ? this.channelMixer = (r, s, n) => r[s * e + n] * +(n < 2) : e === 4 && t === 1 ? this.channelMixer = (r, s) => {
      const n = s * e;
      return 0.25 * (r[n] + r[n + 1] + r[n + 2] + r[n + 3]);
    } : e === 4 && t === 2 ? this.channelMixer = (r, s, n) => {
      const a = s * e;
      return 0.5 * (r[a + n] + r[a + n + 2]);
    } : e === 4 && t === 6 ? this.channelMixer = (r, s, n) => {
      const a = s * e;
      return n < 2 ? r[a + n] : n === 2 || n === 3 ? 0 : r[a + n - 2];
    } : e === 6 && t === 1 ? this.channelMixer = (r, s) => {
      const n = s * e;
      return Math.SQRT1_2 * (r[n] + r[n + 1]) + r[n + 2] + 0.5 * (r[n + 4] + r[n + 5]);
    } : e === 6 && t === 2 ? this.channelMixer = (r, s, n) => {
      const a = s * e;
      return r[a + n] + Math.SQRT1_2 * (r[a + 2] + r[a + n + 4]);
    } : e === 6 && t === 4 ? this.channelMixer = (r, s, n) => {
      const a = s * e;
      return n < 2 ? r[a + n] + Math.SQRT1_2 * r[a + 2] : r[a + n + 2];
    } : this.channelMixer = (r, s, n) => n < e ? r[s * e + n] : 0;
  }
  ensureTempBufferSize(e) {
    let t = this.tempSourceBuffer.length;
    for (; t < e; )
      t *= 2;
    if (t !== this.tempSourceBuffer.length) {
      const r = new Float32Array(t);
      r.set(this.tempSourceBuffer), this.tempSourceBuffer = r;
    }
  }
  async add(e) {
    this.sourceSampleRate === null && (this.sourceSampleRate = e.sampleRate, this.sourceNumberOfChannels = e.numberOfChannels, this.tempSourceBuffer = new Float32Array(this.sourceSampleRate * this.sourceNumberOfChannels), this.doChannelMixerSetup());
    const t = e.numberOfFrames * e.numberOfChannels;
    this.ensureTempBufferSize(t);
    const r = e.allocationSize({ planeIndex: 0, format: "f32" }), s = new Float32Array(this.tempSourceBuffer.buffer, 0, r / 4);
    e.copyTo(s, { planeIndex: 0, format: "f32" });
    const n = e.timestamp - this.startTime, a = e.numberOfFrames / this.sourceSampleRate, o = Math.min(n + a, this.endTime - this.startTime), c = Math.floor(n * this.targetSampleRate), l = Math.ceil(o * this.targetSampleRate);
    for (let d = c; d < l; d++) {
      if (d < this.bufferStartFrame)
        continue;
      for (; d >= this.bufferStartFrame + this.bufferSizeInFrames; )
        await this.finalizeCurrentBuffer(), this.bufferStartFrame += this.bufferSizeInFrames;
      const u = d - this.bufferStartFrame;
      p(u < this.bufferSizeInFrames);
      const g = (d / this.targetSampleRate - n) * this.sourceSampleRate, m = Math.floor(g), w = Math.ceil(g), y = g - m;
      for (let k = 0; k < this.targetNumberOfChannels; k++) {
        let T = 0, S = 0;
        m >= 0 && m < e.numberOfFrames && (T = this.channelMixer(s, m, k)), w >= 0 && w < e.numberOfFrames && (S = this.channelMixer(s, w, k));
        const P = T + y * (S - T), x = u * this.targetNumberOfChannels + k;
        this.outputBuffer[x] += P;
      }
      this.maxWrittenFrame = Math.max(this.maxWrittenFrame, u);
    }
  }
  async finalizeCurrentBuffer() {
    if (this.maxWrittenFrame < 0)
      return;
    const e = (this.maxWrittenFrame + 1) * this.targetNumberOfChannels, t = new Float32Array(e);
    t.set(this.outputBuffer.subarray(0, e));
    const r = this.bufferStartFrame / this.targetSampleRate, s = new ze({
      format: "f32",
      sampleRate: this.targetSampleRate,
      numberOfChannels: this.targetNumberOfChannels,
      timestamp: r,
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
const Sa = Symbol.for("mediabunny loaded");
globalThis[Sa] && console.error(`[WARNING]
Mediabunny was loaded twice. This will likely cause Mediabunny not to work correctly. Check if multiple dependencies are importing different versions of Mediabunny, or if something is being bundled incorrectly.`);
globalThis[Sa] = !0;
export {
  yc as ADTS,
  Od as ALL_FORMATS,
  Bd as ALL_TRACK_TYPES,
  me as AUDIO_CODECS,
  uc as AdtsInputFormat,
  Gd as AdtsOutputFormat,
  Dr as AttachedFile,
  Nd as AudioBufferSink,
  cu as AudioBufferSource,
  ze as AudioSample,
  kr as AudioSampleSink,
  Xs as AudioSampleSource,
  mi as AudioSource,
  Bn as BaseMediaSampleSink,
  Ld as BlobSource,
  Vd as BufferSource,
  td as BufferTarget,
  To as CanvasSink,
  au as CanvasSource,
  Ta as Conversion,
  Rd as ConversionCanceledError,
  fu as CustomAudioDecoder,
  mu as CustomAudioEncoder,
  pu as CustomVideoDecoder,
  gu as CustomVideoEncoder,
  Id as EncodedAudioPacketSource,
  G as EncodedPacket,
  si as EncodedPacketSink,
  Cd as EncodedVideoPacketSource,
  Tc as FLAC,
  Hd as FilePathSource,
  jd as FilePathTarget,
  dc as FlacInputFormat,
  Xd as FlacOutputFormat,
  _c as Input,
  Fe as InputAudioTrack,
  ye as InputDisposedError,
  Xe as InputFormat,
  Kr as InputTrack,
  Ht as InputVideoTrack,
  Yn as IsobmffInputFormat,
  pa as IsobmffOutputFormat,
  pc as MATROSKA,
  wc as MP3,
  fc as MP4,
  Sc as MPEG_TS,
  Zn as MatroskaInputFormat,
  ds as MediaSource,
  lu as MediaStreamAudioTrackSource,
  ou as MediaStreamVideoTrackSource,
  Qs as MkvOutputFormat,
  wa as MovOutputFormat,
  oc as Mp3InputFormat,
  Qd as Mp3OutputFormat,
  sc as Mp4InputFormat,
  ga as Mp4OutputFormat,
  hc as MpegTsInputFormat,
  Yd as MpegTsOutputFormat,
  Rt as NON_PCM_AUDIO_CODECS,
  rd as NullTarget,
  bc as OGG,
  lc as OggInputFormat,
  Kd as OggOutputFormat,
  Ys as Output,
  Ye as OutputFormat,
  ne as PCM_AUDIO_CODECS,
  mc as QTFF,
  Ks as QUALITY_HIGH,
  Jd as QUALITY_LOW,
  eu as QUALITY_MEDIUM,
  tu as QUALITY_VERY_HIGH,
  Zd as QUALITY_VERY_LOW,
  Se as Quality,
  nc as QuickTimeInputFormat,
  qd as ReadableStreamSource,
  Bt as RichImageData,
  $e as SUBTITLE_CODECS,
  St as Source,
  Cc as StreamSource,
  id as StreamTarget,
  ya as SubtitleSource,
  hi as Target,
  du as TextSubtitleSource,
  Wd as UrlSource,
  ue as VIDEO_CODECS,
  wu as VIDEO_SAMPLE_PIXEL_FORMATS,
  Pe as VideoSample,
  ku as VideoSampleColorSpace,
  wr as VideoSampleSink,
  Gs as VideoSampleSource,
  fi as VideoSource,
  kc as WAVE,
  gc as WEBM,
  $d as WavOutputFormat,
  cc as WaveInputFormat,
  ac as WebMInputFormat,
  $s as WebMOutputFormat,
  iu as canEncode,
  cs as canEncodeAudio,
  ls as canEncodeSubtitles,
  os as canEncodeVideo,
  Fr as getEncodableAudioCodecs,
  ru as getEncodableCodecs,
  xd as getEncodableSubtitleCodecs,
  Sd as getEncodableVideoCodecs,
  su as getFirstEncodableAudioCodec,
  nu as getFirstEncodableSubtitleCodec,
  Pd as getFirstEncodableVideoCodec,
  bu as registerDecoder,
  yu as registerEncoder
};
