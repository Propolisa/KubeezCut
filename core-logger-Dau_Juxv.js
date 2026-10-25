function m() {
  return 2;
}
function u(n, c) {
  return n >= c;
}
function a(n, c) {
  return n ? `[${n}] ${c}` : c;
}
function v() {
  return crypto.randomUUID().slice(0, 8);
}
function g(n, c) {
  let s = c;
  function l(e, t) {
    u(1, s) && console.info(
      a(n, e),
      t
    );
  }
  return {
    debug(e, ...t) {
      u(0, s) && console.log(a(n, e), ...t);
    },
    info(e, ...t) {
      u(1, s) && console.info(a(n, e), ...t);
    },
    warn(e, ...t) {
      u(2, s) && console.warn(a(n, e), ...t);
    },
    error(e, ...t) {
      u(3, s) && console.error(a(n, e), ...t);
    },
    event(e, t) {
      l(e, t);
    },
    startEvent(e, t) {
      const f = Date.now(), o = {};
      return t && (o.opId = t), {
        set(r, i) {
          o[r] = i;
        },
        merge(r) {
          Object.assign(o, r);
        },
        success(r) {
          o.outcome = "success", o.duration_ms = Date.now() - f, r && Object.assign(o, r), l(e, o);
        },
        failure(r, i) {
          o.outcome = "error", o.duration_ms = Date.now() - f, r instanceof Error ? o.error = { message: r.message, name: r.name } : o.error = String(r), i && Object.assign(o, i), u(3, s) ? console.error(a(n, e), o) : l(e, o);
        }
      };
    },
    child(e) {
      return g(
        n ? `${n}:${e}` : e,
        s
      );
    },
    setLevel(e) {
      s = e;
    }
  };
}
function d(n) {
  return g(n, m());
}
export {
  v as a,
  d as c
};
