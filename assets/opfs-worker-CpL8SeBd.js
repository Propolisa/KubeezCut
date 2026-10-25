function P() {
  return 2;
}
function h(a, s) {
  return a >= s;
}
function g(a, s) {
  return a ? `[${a}] ${s}` : s;
}
function F(a, s) {
  let t = s;
  function n(r, e) {
    h(1, t) && console.info(
      g(a, r),
      e
    );
  }
  return {
    debug(r, ...e) {
      h(0, t) && console.log(g(a, r), ...e);
    },
    info(r, ...e) {
      h(1, t) && console.info(g(a, r), ...e);
    },
    warn(r, ...e) {
      h(2, t) && console.warn(g(a, r), ...e);
    },
    error(r, ...e) {
      h(3, t) && console.error(g(a, r), ...e);
    },
    event(r, e) {
      n(r, e);
    },
    startEvent(r, e) {
      const o = Date.now(), i = {};
      return e && (i.opId = e), {
        set(c, l) {
          i[c] = l;
        },
        merge(c) {
          Object.assign(i, c);
        },
        success(c) {
          i.outcome = "success", i.duration_ms = Date.now() - o, c && Object.assign(i, c), n(r, i);
        },
        failure(c, l) {
          i.outcome = "error", i.duration_ms = Date.now() - o, c instanceof Error ? i.error = { message: c.message, name: c.name } : i.error = String(c), l && Object.assign(i, l), h(3, t) ? console.error(g(a, r), i) : n(r, i);
        }
      };
    },
    child(r) {
      return F(
        a ? `${a}:${r}` : r,
        t
      );
    },
    setLevel(r) {
      t = r;
    }
  };
}
function $(a) {
  return F(a, P());
}
const L = $("OPFSWorker");
let b = null;
async function S() {
  return b || (b = await navigator.storage.getDirectory()), b;
}
async function w(a) {
  const s = await S(), t = a.split("/").filter((e) => e);
  if (t.length === 0)
    throw new Error("Invalid path");
  let n = s;
  for (let e = 0; e < t.length - 1; e++) {
    const o = t[e];
    o && (n = await n.getDirectoryHandle(o, { create: !0 }));
  }
  const r = t[t.length - 1];
  if (!r)
    throw new Error("Invalid path: missing filename");
  return { dir: n, fileName: r };
}
async function M(a, s) {
  const { dir: t, fileName: n } = await w(a), e = await (await t.getFileHandle(n, { create: !0 })).createSyncAccessHandle();
  try {
    const o = new Uint8Array(s);
    e.truncate(0), e.write(o, { at: 0 }), e.flush();
  } finally {
    e.close();
  }
}
async function U(a) {
  const { dir: s, fileName: t } = await w(a);
  try {
    const r = await (await s.getFileHandle(t)).createSyncAccessHandle();
    try {
      const e = r.getSize(), o = new ArrayBuffer(e);
      return r.read(o, { at: 0 }), o;
    } finally {
      r.close();
    }
  } catch (n) {
    throw n instanceof Error && n.name === "NotFoundError" ? new Error(`File not found: ${a}`) : n;
  }
}
async function W(a) {
  const { dir: s, fileName: t } = await w(a);
  try {
    await s.removeEntry(t);
  } catch (n) {
    if (n instanceof Error && n.name === "NotFoundError")
      return;
    throw n;
  }
}
async function O(a) {
  const s = await S(), t = a.split("/").filter((e) => e);
  let n = s;
  for (const e of t)
    try {
      n = await n.getDirectoryHandle(e);
    } catch (o) {
      if (o instanceof Error && o.name === "NotFoundError")
        return [];
      throw o;
    }
  const r = [];
  for await (const [e, o] of n.entries())
    o.kind === "file" && r.push(e);
  return r;
}
function R(a) {
  const s = a.substring(0, 2), t = a.substring(2, 4);
  return `content/${s}/${t}/${a}/data`;
}
function j(a) {
  return Array.from(new Uint8Array(a)).map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function z(a, s) {
  const n = `content/temp/${`temp-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`}/data`, { dir: r, fileName: e } = await w(n), i = await (await r.getFileHandle(e, { create: !0 })).createSyncAccessHandle(), l = a.stream().getReader(), y = [];
  let f = 0;
  try {
    for (i.truncate(0); ; ) {
      const { done: u, value: d } = await l.read();
      if (u) break;
      i.write(d, { at: f }), f += d.byteLength, y.push(d), s?.({
        bytesWritten: f,
        percent: f / a.size * 100
      });
    }
    i.flush();
  } finally {
    i.close();
  }
  const k = y.reduce((u, d) => u + d.byteLength, 0), m = new Uint8Array(k);
  let H = 0;
  for (const u of y)
    m.set(u, H), H += u.byteLength;
  const N = await crypto.subtle.digest("SHA-256", m), v = j(N), E = R(v), { dir: A, fileName: D } = await w(E), p = await (await A.getFileHandle(D, {
    create: !0
  })).createSyncAccessHandle();
  try {
    p.truncate(0), p.write(m, { at: 0 }), p.flush();
  } finally {
    p.close();
  }
  try {
    const { dir: u, fileName: d } = await w(n);
    await u.removeEntry(d);
  } catch {
  }
  return { hash: v, bytesWritten: f, opfsPath: E };
}
async function I(a, s, t) {
  const { dir: n, fileName: r } = await w(s), o = await (await n.getFileHandle(r, { create: !0 })).createSyncAccessHandle(), c = a.stream().getReader();
  let l = 0;
  try {
    for (o.truncate(0); ; ) {
      const { done: y, value: f } = await c.read();
      if (y) break;
      o.write(f, { at: l }), l += f.byteLength, t?.({
        bytesWritten: l,
        percent: l / a.size * 100
      });
    }
    o.flush();
  } finally {
    o.close();
  }
  return { bytesWritten: l, opfsPath: s };
}
self.onmessage = async (a) => {
  const { type: s, payload: t } = a.data, n = a.ports[0];
  if (!n) {
    L.error("No message port provided");
    return;
  }
  let r;
  try {
    switch (s) {
      case "save":
        if (!t.path || !t.data)
          throw new Error("Missing path or data for save operation");
        await M(t.path, t.data), r = { success: !0 };
        break;
      case "get": {
        if (!t.path)
          throw new Error("Missing path for get operation");
        r = { success: !0, data: await U(t.path) };
        break;
      }
      case "delete":
        if (!t.path)
          throw new Error("Missing path for delete operation");
        await W(t.path), r = { success: !0 };
        break;
      case "list": {
        if (!t.directory)
          throw new Error("Missing directory for list operation");
        r = { success: !0, data: await O(t.directory) };
        break;
      }
      case "processUpload": {
        if (!t.file)
          throw new Error("Missing file for processUpload operation");
        const e = await z(
          t.file,
          (o) => {
            n.postMessage({ type: "progress", ...o });
          }
        );
        r = {
          success: !0,
          hash: e.hash,
          bytesWritten: e.bytesWritten,
          opfsPath: e.opfsPath
        };
        break;
      }
      case "saveUpload": {
        if (!t.file || !t.targetPath)
          throw new Error("Missing file or targetPath for saveUpload operation");
        const e = await I(
          t.file,
          t.targetPath,
          (o) => {
            n.postMessage({ type: "progress", ...o });
          }
        );
        r = {
          success: !0,
          bytesWritten: e.bytesWritten,
          opfsPath: e.opfsPath
        };
        break;
      }
      default:
        throw new Error(`Unknown action: ${s}`);
    }
  } catch (e) {
    r = {
      success: !1,
      error: e instanceof Error ? e.message : String(e)
    };
  }
  n.postMessage(r);
};
