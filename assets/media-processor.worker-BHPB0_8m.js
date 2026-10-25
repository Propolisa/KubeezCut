function M() {
  return 2;
}
function h(n, e) {
  return n >= e;
}
function m(n, e) {
  return n ? `[${n}] ${e}` : e;
}
function y(n, e) {
  let a = e;
  function i(t, o) {
    h(1, a) && console.info(
      m(n, t),
      o
    );
  }
  return {
    debug(t, ...o) {
      h(0, a) && console.log(m(n, t), ...o);
    },
    info(t, ...o) {
      h(1, a) && console.info(m(n, t), ...o);
    },
    warn(t, ...o) {
      h(2, a) && console.warn(m(n, t), ...o);
    },
    error(t, ...o) {
      h(3, a) && console.error(m(n, t), ...o);
    },
    event(t, o) {
      i(t, o);
    },
    startEvent(t, o) {
      const s = Date.now(), r = {};
      return o && (r.opId = o), {
        set(c, d) {
          r[c] = d;
        },
        merge(c) {
          Object.assign(r, c);
        },
        success(c) {
          r.outcome = "success", r.duration_ms = Date.now() - s, c && Object.assign(r, c), i(t, r);
        },
        failure(c, d) {
          r.outcome = "error", r.duration_ms = Date.now() - s, c instanceof Error ? r.error = { message: c.message, name: c.name } : r.error = String(c), d && Object.assign(r, d), h(3, a) ? console.error(m(n, t), r) : i(t, r);
        }
      };
    },
    child(t) {
      return y(
        n ? `${n}:${t}` : t,
        a
      );
    },
    setLevel(t) {
      a = t;
    }
  };
}
function k(n) {
  return y(n, M());
}
const v = k("MediaProcessorWorker"), T = [
  "dts",
  // DTS
  "dtsc",
  // DTS Coherent Acoustics
  "dtse",
  // DTS Express
  "dtsh",
  // DTS-HD High Resolution
  "dtsl",
  // DTS-HD Master Audio
  "truehd",
  // Dolby TrueHD
  "mlpa"
  // Dolby TrueHD (MLP)
];
function P(n) {
  if (!n) return !0;
  const e = n.toLowerCase().trim();
  return !T.some(
    (a) => e.includes(a)
  );
}
let f = null;
async function w() {
  return f || (f = await import("./index-BvfmbwGv.js")), f;
}
async function S(n, e) {
  let a = null;
  try {
    a = new n.EncodedPacketSink(e);
    const i = [], t = { metadataOnly: !0 };
    let o = await a.getFirstKeyPacket(t);
    for (; o; )
      i.push(o.timestamp), o = await a.getNextKeyPacket(o, t);
    return i.length === 0 ? void 0 : i;
  } catch (i) {
    v.warn("Keyframe extraction failed (non-fatal):", i);
    return;
  } finally {
    a?.dispose?.();
  }
}
async function A(n) {
  const e = await w(), a = new e.Input({
    formats: e.ALL_FORMATS,
    source: new e.BlobSource(n)
  });
  try {
    const [i, t, o] = await Promise.all([
      a.computeDuration(),
      a.getPrimaryVideoTrack(),
      a.getPrimaryAudioTrack()
    ]);
    if (!t)
      throw new Error("No video track found in file");
    const [s, r] = await Promise.all([
      t.computePacketStats(50),
      S(e, t)
    ]), c = o?.codec, d = P(c);
    let l;
    return r && r.length >= 2 && (l = (r[r.length - 1] - r[0]) / (r.length - 1)), {
      type: "video",
      duration: i || 0,
      width: t.displayWidth || 1920,
      height: t.displayHeight || 1080,
      fps: s?.averagePacketRate || 30,
      codec: t.codec || "unknown",
      bitrate: 0,
      audioCodec: c,
      audioCodecSupported: d,
      keyframeTimestamps: r,
      gopInterval: l
    };
  } finally {
    a.dispose();
  }
}
async function C(n) {
  const e = await w(), a = new e.Input({
    formats: e.ALL_FORMATS,
    source: new e.BlobSource(n)
  });
  try {
    const [i, t] = await Promise.all([
      a.computeDuration(),
      a.getPrimaryAudioTrack()
    ]);
    return {
      type: "audio",
      duration: i || 0,
      codec: t?.codec,
      channels: t?.channels,
      sampleRate: t?.sampleRate,
      bitrate: 0
    };
  } finally {
    a.dispose();
  }
}
function E(n) {
  const e = n.match(/<svg[^>]*>/i);
  if (!e) return null;
  const a = e[0], i = a.match(/\bwidth=["'](\d+(?:\.\d+)?)\s*(?:px)?["']/), t = a.match(/\bheight=["'](\d+(?:\.\d+)?)\s*(?:px)?["']/);
  if (i && t)
    return { width: Math.round(parseFloat(i[1])), height: Math.round(parseFloat(t[1])) };
  const o = a.match(/viewBox=["']\s*(-?[\d.]+)[\s,]+(-?[\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/);
  return o ? { width: Math.round(parseFloat(o[3])), height: Math.round(parseFloat(o[4])) } : null;
}
async function I(n, e) {
  if (e === "image/svg+xml") {
    const t = await n.text(), o = E(t);
    return {
      type: "image",
      width: o?.width ?? 800,
      height: o?.height ?? 600
    };
  }
  const a = await createImageBitmap(n), i = {
    type: "image",
    width: a.width,
    height: a.height
  };
  return a.close(), i;
}
async function L(n, e, a, i) {
  const t = await w(), o = new t.Input({
    source: new t.BlobSource(n),
    formats: t.ALL_FORMATS
  });
  let s = null;
  try {
    const r = await o.getPrimaryVideoTrack();
    if (!r)
      throw new Error("No video track found");
    const c = r.displayWidth || 1, d = r.displayHeight || 1, l = c > d ? e : Math.floor(e * c / d), u = d > c ? e : Math.floor(e * d / c);
    s = new t.CanvasSink(r, {
      width: l,
      height: u,
      fit: "fill"
    });
    const g = await o.computeDuration(), b = Math.min(i, Math.max(0, g - 0.1)), p = await s.getCanvas(b);
    if (!p)
      throw new Error("Failed to extract frame from video");
    return p.canvas.convertToBlob({ type: "image/webp", quality: a });
  } finally {
    s?.dispose?.(), o.dispose();
  }
}
async function O(n, e, a, i) {
  if (i === "image/svg+xml")
    throw new Error("SVG thumbnail generation not supported in worker");
  const t = await createImageBitmap(n), o = t.width > t.height ? e : Math.floor(e * t.width / t.height), s = t.height > t.width ? e : Math.floor(e * t.height / t.width), r = new OffscreenCanvas(o, s), c = r.getContext("2d");
  if (!c)
    throw t.close(), new Error("Failed to get canvas context");
  return c.drawImage(t, 0, 0, o, s), t.close(), r.convertToBlob({ type: "image/webp", quality: a });
}
async function D(n, e, a) {
  const i = e, t = Math.round(e * (9 / 16)), o = new OffscreenCanvas(i, t), s = o.getContext("2d");
  if (!s)
    throw new Error("Failed to get canvas context");
  const r = s.createLinearGradient(0, 0, i, t);
  r.addColorStop(0, "#1a1a1a"), r.addColorStop(1, "#0a0a0a"), s.fillStyle = r, s.fillRect(0, 0, i, t), s.strokeStyle = "#00ff88", s.lineWidth = 2, s.beginPath();
  const c = t * 0.3, d = t / 2;
  for (let u = 0; u < i; u++) {
    const g = d + Math.sin(u * 0.02) * c;
    u === 0 ? s.moveTo(u, g) : s.lineTo(u, g);
  }
  s.stroke(), s.fillStyle = "#ffffff", s.font = "bold 14px sans-serif", s.textAlign = "center", s.textBaseline = "middle";
  const l = n.name.length > 30 ? n.name.substring(0, 27) + "..." : n.name;
  return s.fillText(l, i / 2, t - 20), o.convertToBlob({ type: "image/webp", quality: a });
}
async function F(n, e, a = {}) {
  const {
    thumbnailMaxSize: i = 320,
    thumbnailQuality: t = 0.6,
    thumbnailTimestamp: o = 1,
    generateThumbnail: s = !0
  } = a;
  let r, c;
  if (e.startsWith("video/")) {
    if (r = await A(n), s)
      try {
        c = await L(n, i, t, o);
      } catch (d) {
        v.warn("Failed to generate video thumbnail:", d);
      }
  } else if (e.startsWith("audio/")) {
    const [d, l] = await Promise.all([
      C(n),
      s ? D(n, i, t).catch(() => {
      }) : Promise.resolve(void 0)
    ]);
    r = d, c = l;
  } else if (e.startsWith("image/")) {
    const [d, l] = await Promise.all([
      I(n, e),
      s ? O(n, i, t, e).catch(() => {
      }) : Promise.resolve(void 0)
    ]);
    r = d, c = l;
  } else
    throw new Error(`Unsupported media type: ${e}`);
  return { metadata: r, thumbnail: c };
}
self.onmessage = async (n) => {
  const e = n.data;
  if (e.type === "process")
    try {
      const a = await F(e.file, e.mimeType, e.options), i = {
        type: "complete",
        requestId: e.requestId,
        metadata: a.metadata,
        thumbnail: a.thumbnail
      };
      self.postMessage(i);
    } catch (a) {
      const i = {
        type: "error",
        requestId: e.requestId,
        error: a instanceof Error ? a.message : String(a)
      };
      self.postMessage(i);
    }
};
