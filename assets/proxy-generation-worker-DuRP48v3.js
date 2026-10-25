const D = "proxies";
const d = /* @__PURE__ */ new Map(), W = async () => import("./index-BvfmbwGv.js");
async function Y(a) {
  return (await (await navigator.storage.getDirectory()).getDirectoryHandle(D, { create: !0 })).getDirectoryHandle(a, { create: !0 });
}
async function H(a, t) {
  const e = await (await a.getFileHandle("meta.json", { create: !0 })).createWritable();
  try {
    await e.write(JSON.stringify(t)), await e.close();
  } catch (n) {
    throw await e.abort().catch(() => {
    }), n;
  }
}
function M(a) {
  const t = Math.max(2, Math.floor(a));
  return t % 2 === 0 ? t : t - 1;
}
function k(a, t) {
  const r = Math.max(1, a), e = Math.max(1, t), n = Math.min(1280 / r, 720 / e, 1), h = M(r * n), f = M(e * n);
  return {
    width: h,
    height: f
  };
}
async function A(a) {
  const { mediaId: t, blobUrl: r, sourceWidth: e, sourceHeight: n } = a, {
    Input: h,
    UrlSource: f,
    Output: E,
    Mp4OutputFormat: x,
    BufferTarget: O,
    StreamTarget: I,
    Conversion: R,
    QUALITY_LOW: P,
    MP4: S,
    WEBM: T,
    MATROSKA: _
  } = await W(), w = await Y(t), s = k(e, n), p = Date.now();
  await H(w, {
    version: 3,
    width: s.width,
    height: s.height,
    sourceWidth: e,
    sourceHeight: n,
    status: "generating",
    createdAt: p
  });
  const m = new h({
    source: new f(r),
    formats: [S, T, _]
  });
  let c = null, u = !1, y = null, l;
  try {
    const b = async (o, i) => {
      const g = new E({
        format: new x({ fastStart: i ? "in-memory" : !1 }),
        target: o
      });
      return R.init({
        input: m,
        output: g,
        video: {
          width: s.width,
          height: s.height,
          fit: "contain",
          codec: "avc",
          // Faster proxy generation preset.
          bitrate: P,
          hardwareAcceleration: "prefer-hardware",
          // Short GOP to speed up random-access decode during scrubbing.
          keyFrameInterval: 1
        },
        audio: {
          // Scrub proxy is video-only for faster generation and smaller files.
          discard: !0
        }
      });
    }, v = await w.getFileHandle("proxy.mp4", { create: !0 });
    try {
      l = await v.createWritable();
      const o = new I(l);
      u = !0, c = await b(o, !1);
    } catch {
      if (l)
        try {
          await l.abort();
        } catch {
        }
      u = !1, y = new O(), c = await b(y, !0);
    }
    if (!c.isValid) {
      const o = c.discardedTracks.map(
        (i) => `${i.track.type ?? "unknown"}: ${i.reason}`
      ).join("; ");
      throw new Error(`Proxy conversion invalid: ${o || "no usable tracks"}`);
    }
    d.set(t, {
      cancel: () => c.cancel()
    }), c.onProgress = (o) => {
      self.postMessage({
        type: "progress",
        mediaId: t,
        progress: o
      });
    };
    try {
      await c.execute();
    } catch (o) {
      if (!d.has(t)) {
        u && await w.removeEntry("proxy.mp4").catch(() => {
        });
        return;
      }
      throw o;
    }
    if (!d.has(t)) {
      u && await w.removeEntry("proxy.mp4").catch(() => {
      });
      return;
    }
    if (!u) {
      const o = y?.buffer;
      if (!o)
        throw new Error("Conversion produced no output buffer");
      const i = await v.createWritable();
      try {
        await i.write(o), await i.close();
      } catch (g) {
        throw await i.abort().catch(() => {
        }), g;
      }
    }
    await H(w, {
      version: 3,
      width: s.width,
      height: s.height,
      sourceWidth: e,
      sourceHeight: n,
      status: "ready",
      createdAt: p
    }), self.postMessage({
      type: "complete",
      mediaId: t
    });
  } finally {
    if (d.delete(t), l)
      try {
        await l.abort();
      } catch {
      }
    m.dispose();
  }
}
self.onmessage = async (a) => {
  const { type: t } = a.data;
  try {
    switch (t) {
      case "generate": {
        await A(a.data);
        break;
      }
      case "cancel": {
        const { mediaId: r } = a.data, e = d.get(r);
        e && (d.delete(r), await e.cancel());
        break;
      }
      default:
        throw new Error(`Unknown message type: ${t}`);
    }
  } catch (r) {
    const e = a.data.mediaId;
    self.postMessage({
      type: "error",
      mediaId: e,
      error: r instanceof Error ? r.message : String(r)
    });
  }
};
