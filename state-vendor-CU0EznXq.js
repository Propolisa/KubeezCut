import { R as _ } from "./react-vendor-18pR7s9b.js";
const w = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), s = (l, i) => {
    const v = typeof l == "function" ? l(t) : l;
    if (!Object.is(v, t)) {
      const h = t;
      t = i ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), r.forEach((p) => p(t, h));
    }
  }, n = () => t, c = { setState: s, getState: n, getInitialState: () => f, subscribe: (l) => (r.add(l), () => r.delete(l)) }, f = t = e(s, n, c);
  return c;
}, D = (e) => e ? w(e) : w, J = (e) => e;
function L(e, t = J) {
  const r = _.useSyncExternalStore(
    e.subscribe,
    _.useCallback(() => t(e.getState()), [e, t]),
    _.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return _.useDebugValue(r), r;
}
const R = (e) => {
  const t = D(e), r = (s) => L(t, s);
  return Object.assign(r, t), r;
}, X = (e) => e ? R(e) : R, j = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_AI_FEATURES: "false", VITE_KUBEEZ_BROWSER_API_URL: "https://api.kubeez.com" }, g = /* @__PURE__ */ new Map(), I = (e) => {
  const t = g.get(e);
  return t ? Object.fromEntries(
    Object.entries(t.stores).map(([r, s]) => [r, s.getState()])
  ) : {};
}, M = (e, t, r) => {
  if (e === void 0)
    return {
      type: "untracked",
      connection: t.connect(r)
    };
  const s = g.get(r.name);
  if (s)
    return { type: "tracked", store: e, ...s };
  const n = {
    connection: t.connect(r),
    stores: {}
  };
  return g.set(r.name, n), { type: "tracked", store: e, ...n };
}, U = (e, t) => {
  if (t === void 0) return;
  const r = g.get(e);
  r && (delete r.stores[t], Object.keys(r.stores).length === 0 && g.delete(e));
}, z = (e) => {
  var t, r;
  if (!e) return;
  const s = e.split(`
`), n = s.findIndex(
    (S) => S.includes("api.setState")
  );
  if (n < 0) return;
  const o = ((t = s[n + 1]) == null ? void 0 : t.trim()) || "";
  return (r = /.+ (.+) .+/.exec(o)) == null ? void 0 : r[1];
}, F = (e, t = {}) => (r, s, n) => {
  const { enabled: o, anonymousActionType: S, store: c, ...f } = t;
  let l;
  try {
    l = (o ?? (j ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch {
  }
  if (!l)
    return e(r, s, n);
  const { connection: i, ...v } = M(c, l, f);
  let h = !0;
  n.setState = (a, m, u) => {
    const d = r(a, m);
    if (!h) return d;
    const y = u === void 0 ? {
      type: S || z(new Error().stack) || "anonymous"
    } : typeof u == "string" ? { type: u } : u;
    return c === void 0 ? (i?.send(y, s()), d) : (i?.send(
      {
        ...y,
        type: `${c}/${y.type}`
      },
      {
        ...I(f.name),
        [c]: n.getState()
      }
    ), d);
  }, n.devtools = {
    cleanup: () => {
      i && typeof i.unsubscribe == "function" && i.unsubscribe(), U(f.name, c);
    }
  };
  const p = (...a) => {
    const m = h;
    h = !1, r(...a), h = m;
  }, b = e(n.setState, s, n);
  if (v.type === "untracked" ? i?.init(b) : (v.stores[v.store] = n, i?.init(
    Object.fromEntries(
      Object.entries(v.stores).map(([a, m]) => [
        a,
        a === v.store ? b : m.getState()
      ])
    )
  )), n.dispatchFromDevtools && typeof n.dispatch == "function") {
    let a = !1;
    const m = n.dispatch;
    n.dispatch = (...u) => {
      (j ? "production" : void 0) !== "production" && u[0].type === "__setState" && !a && (console.warn(
        '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
      ), a = !0), m(...u);
    };
  }
  return i.subscribe((a) => {
    var m;
    switch (a.type) {
      case "ACTION":
        if (typeof a.payload != "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return T(
          a.payload,
          (u) => {
            if (u.type === "__setState") {
              if (c === void 0) {
                p(u.state);
                return;
              }
              Object.keys(u.state).length !== 1 && console.error(
                `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
              );
              const d = u.state[c];
              if (d == null)
                return;
              JSON.stringify(n.getState()) !== JSON.stringify(d) && p(d);
              return;
            }
            n.dispatchFromDevtools && typeof n.dispatch == "function" && n.dispatch(u);
          }
        );
      case "DISPATCH":
        switch (a.payload.type) {
          case "RESET":
            return p(b), c === void 0 ? i?.init(n.getState()) : i?.init(I(f.name));
          case "COMMIT":
            if (c === void 0) {
              i?.init(n.getState());
              return;
            }
            return i?.init(I(f.name));
          case "ROLLBACK":
            return T(a.state, (u) => {
              if (c === void 0) {
                p(u), i?.init(n.getState());
                return;
              }
              p(u[c]), i?.init(I(f.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return T(a.state, (u) => {
              if (c === void 0) {
                p(u);
                return;
              }
              JSON.stringify(n.getState()) !== JSON.stringify(u[c]) && p(u[c]);
            });
          case "IMPORT_STATE": {
            const { nextLiftedState: u } = a.payload, d = (m = u.computedStates.slice(-1)[0]) == null ? void 0 : m.state;
            if (!d) return;
            p(c === void 0 ? d : d[c]), i?.send(
              null,
              // FIXME no-any
              u
            );
            return;
          }
          case "PAUSE_RECORDING":
            return h = !h;
        }
        return;
    }
  }), b;
}, q = F, T = (e, t) => {
  let r;
  try {
    r = JSON.parse(e);
  } catch (s) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      s
    );
  }
  r !== void 0 && t(r);
};
function H(e, t) {
  let r;
  try {
    r = e();
  } catch {
    return;
  }
  return {
    getItem: (n) => {
      var o;
      const S = (f) => f === null ? null : JSON.parse(f, void 0), c = (o = r.getItem(n)) != null ? o : null;
      return c instanceof Promise ? c.then(S) : S(c);
    },
    setItem: (n, o) => r.setItem(n, JSON.stringify(o, void 0)),
    removeItem: (n) => r.removeItem(n)
  };
}
const E = (e) => (t) => {
  try {
    const r = e(t);
    return r instanceof Promise ? r : {
      then(s) {
        return E(s)(r);
      },
      catch(s) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(s) {
        return this;
      },
      catch(s) {
        return E(s)(r);
      }
    };
  }
}, A = (e, t) => (r, s, n) => {
  let o = {
    storage: H(() => localStorage),
    partialize: (a) => a,
    version: 0,
    merge: (a, m) => ({
      ...m,
      ...a
    }),
    ...t
  }, S = !1;
  const c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set();
  let l = o.storage;
  if (!l)
    return e(
      (...a) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
        ), r(...a);
      },
      s,
      n
    );
  const i = () => {
    const a = o.partialize({ ...s() });
    return l.setItem(o.name, {
      state: a,
      version: o.version
    });
  }, v = n.setState;
  n.setState = (a, m) => (v(a, m), i());
  const h = e(
    (...a) => (r(...a), i()),
    s,
    n
  );
  n.getInitialState = () => h;
  let p;
  const b = () => {
    var a, m;
    if (!l) return;
    S = !1, c.forEach((d) => {
      var y;
      return d((y = s()) != null ? y : h);
    });
    const u = ((m = o.onRehydrateStorage) == null ? void 0 : m.call(o, (a = s()) != null ? a : h)) || void 0;
    return E(l.getItem.bind(l))(o.name).then((d) => {
      if (d)
        if (typeof d.version == "number" && d.version !== o.version) {
          if (o.migrate) {
            const y = o.migrate(
              d.state,
              d.version
            );
            return y instanceof Promise ? y.then((O) => [!0, O]) : [!0, y];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, d.state];
      return [!1, void 0];
    }).then((d) => {
      var y;
      const [O, P] = d;
      if (p = o.merge(
        P,
        (y = s()) != null ? y : h
      ), r(p, !0), O)
        return i();
    }).then(() => {
      u?.(p, void 0), p = s(), S = !0, f.forEach((d) => d(p));
    }).catch((d) => {
      u?.(void 0, d);
    });
  };
  return n.persist = {
    setOptions: (a) => {
      o = {
        ...o,
        ...a
      }, a.storage && (l = a.storage);
    },
    clearStorage: () => {
      l?.removeItem(o.name);
    },
    getOptions: () => o,
    rehydrate: () => b(),
    hasHydrated: () => S,
    onHydrate: (a) => (c.add(a), () => {
      c.delete(a);
    }),
    onFinishHydration: (a) => (f.add(a), () => {
      f.delete(a);
    })
  }, o.skipHydration || b(), p || h;
}, Z = A;
var C = (e, t, r) => (n, o) => ({
  pastStates: r?.pastStates || [],
  futureStates: r?.futureStates || [],
  undo: (S = 1) => {
    if (o().pastStates.length) {
      const c = r?.partialize?.(t()) || t(), f = o().pastStates.splice(-S, S), l = f.shift();
      e(l), n({
        pastStates: o().pastStates,
        futureStates: o().futureStates.concat(
          r?.diff?.(c, l) || c,
          f.reverse()
        )
      });
    }
  },
  redo: (S = 1) => {
    if (o().futureStates.length) {
      const c = r?.partialize?.(t()) || t(), f = o().futureStates.splice(-S, S), l = f.shift();
      e(l), n({
        pastStates: o().pastStates.concat(
          r?.diff?.(c, l) || c,
          f.reverse()
        ),
        futureStates: o().futureStates
      });
    }
  },
  clear: () => n({ pastStates: [], futureStates: [] }),
  isTracking: !0,
  pause: () => n({ isTracking: !1 }),
  resume: () => n({ isTracking: !0 }),
  setOnSave: (S) => n({ _onSave: S }),
  // Internal properties
  _onSave: r?.onSave,
  _handleSet: (S, c, f, l) => {
    r?.limit && o().pastStates.length >= r?.limit && o().pastStates.shift(), o()._onSave?.(S, f), n({
      pastStates: o().pastStates.concat(l || S),
      futureStates: []
    });
  }
}), Q = (e, t) => (s, n, o) => {
  o.temporal = D(
    t?.wrapTemporal?.(C(s, n, t)) || C(s, n, t)
  );
  const S = t?.handleSet?.(
    o.temporal.getState()._handleSet
  ) || o.temporal.getState()._handleSet, c = (l) => {
    if (!o.temporal.getState().isTracking) return;
    const i = t?.partialize?.(n()) || n(), v = t?.diff?.(l, i);
    // If the user has provided a diff function but nothing has been changed, deltaState will be null
    v === null || // If the user has provided an equality function, use it
    t?.equality?.(l, i) || S(
      l,
      void 0,
      i,
      v
    );
  }, f = o.setState;
  return o.setState = (...l) => {
    const i = t?.partialize?.(n()) || n();
    f(...l), c(i);
  }, e(
    // Modify the set function to call the userlandSet function
    (...l) => {
      const i = t?.partialize?.(n()) || n();
      s(...l), c(i);
    },
    n,
    o
  );
};
const k = (e) => Symbol.iterator in e, x = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), N = (e, t) => {
  const r = e instanceof Map ? e : new Map(e.entries()), s = t instanceof Map ? t : new Map(t.entries());
  if (r.size !== s.size)
    return !1;
  for (const [n, o] of r)
    if (!s.has(n) || !Object.is(o, s.get(n)))
      return !1;
  return !0;
}, W = (e, t) => {
  const r = e[Symbol.iterator](), s = t[Symbol.iterator]();
  let n = r.next(), o = s.next();
  for (; !n.done && !o.done; ) {
    if (!Object.is(n.value, o.value))
      return !1;
    n = r.next(), o = s.next();
  }
  return !!n.done && !!o.done;
};
function $(e, t) {
  return Object.is(e, t) ? !0 : typeof e != "object" || e === null || typeof t != "object" || t === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) ? !1 : k(e) && k(t) ? x(e) && x(t) ? N(e, t) : W(e, t) : N(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(t) }
  );
}
function V(e) {
  const t = _.useRef(void 0);
  return (r) => {
    const s = e(r);
    return $(t.current, s) ? t.current : t.current = s;
  };
}
export {
  X as c,
  q as d,
  Z as p,
  Q as t,
  V as u
};
