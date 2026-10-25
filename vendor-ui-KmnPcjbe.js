import { r as i, c as Kn, j as p, b as Vt, a as sc, R as De } from "./react-vendor-18pR7s9b.js";
function Po(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function xe(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = Po(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : Po(e[r], null);
        }
      };
  };
}
function j(...e) {
  return i.useCallback(xe(...e), e);
}
var ic = Symbol.for("react.lazy"), Tt = Kn[" use ".trim().toString()];
function ac(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function tr(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === ic && "_payload" in e && ac(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  const t = /* @__PURE__ */ cc(e), n = i.forwardRef((o, r) => {
    let { children: s, ...a } = o;
    tr(s) && typeof Tt == "function" && (s = Tt(s._payload));
    const c = i.Children.toArray(s), l = c.find(uc);
    if (l) {
      const u = l.props.children, f = c.map((d) => d === l ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var mv = /* @__PURE__ */ Wt("Slot");
// @__NO_SIDE_EFFECTS__
function cc(e) {
  const t = i.forwardRef((n, o) => {
    let { children: r, ...s } = n;
    if (tr(r) && typeof Tt == "function" && (r = Tt(r._payload)), i.isValidElement(r)) {
      const a = fc(r), c = dc(s, r.props);
      return r.type !== i.Fragment && (c.ref = o ? xe(o, a) : a), i.cloneElement(r, c);
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var lc = Symbol("radix.slottable");
function uc(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === lc;
}
function dc(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...c) => {
      const l = s(...c);
      return r(...c), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function fc(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function R(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e?.(r), n === !1 || !r.defaultPrevented)
      return t?.(r);
  };
}
function pc(e, t) {
  const n = i.createContext(t), o = (s) => {
    const { children: a, ...c } = s, l = i.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ p.jsx(n.Provider, { value: l, children: a });
  };
  o.displayName = e + "Provider";
  function r(s) {
    const a = i.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function Q(e, t = []) {
  let n = [];
  function o(s, a) {
    const c = i.createContext(a), l = n.length;
    n = [...n, a];
    const u = (d) => {
      const { scope: v, children: h, ...x } = d, m = v?.[e]?.[l] || c, g = i.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ p.jsx(m.Provider, { value: g, children: h });
    };
    u.displayName = s + "Provider";
    function f(d, v) {
      const h = v?.[e]?.[l] || c, x = i.useContext(h);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [u, f];
  }
  const r = () => {
    const s = n.map((a) => i.createContext(a));
    return function(c) {
      const l = c?.[e] || s;
      return i.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    };
  };
  return r.scopeName = e, [o, mc(r, ...t)];
}
function mc(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const a = o.reduce((c, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...c, ...d };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function vc(e) {
  const t = /* @__PURE__ */ hc(e), n = i.forwardRef((o, r) => {
    const { children: s, ...a } = o, c = i.Children.toArray(s), l = c.find(xc);
    if (l) {
      const u = l.props.children, f = c.map((d) => d === l ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function hc(e) {
  const t = i.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (i.isValidElement(r)) {
      const a = wc(r), c = yc(s, r.props);
      return r.type !== i.Fragment && (c.ref = o ? xe(o, a) : a), i.cloneElement(r, c);
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var gc = Symbol("radix.slottable");
function xc(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gc;
}
function yc(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...c) => {
      const l = s(...c);
      return r(...c), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function wc(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Cc = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], I = Cc.reduce((e, t) => {
  const n = /* @__PURE__ */ vc(`Primitive.${t}`), o = i.forwardRef((r, s) => {
    const { asChild: a, ...c } = r, l = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...c, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function nr(e, t) {
  e && Vt.flushSync(() => e.dispatchEvent(t));
}
function ae(e) {
  const t = i.useRef(e);
  return i.useEffect(() => {
    t.current = e;
  }), i.useMemo(() => (...n) => t.current?.(...n), []);
}
function Sc(e, t = globalThis?.document) {
  const n = ae(e);
  i.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var bc = "DismissableLayer", An = "dismissableLayer.update", Ec = "dismissableLayer.pointerDownOutside", Rc = "dismissableLayer.focusOutside", _o, or = i.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Xe = i.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: c,
      ...l
    } = e, u = i.useContext(or), [f, d] = i.useState(null), v = f?.ownerDocument ?? globalThis?.document, [, h] = i.useState({}), x = j(t, (E) => d(E)), m = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(g), w = f ? m.indexOf(f) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= y, b = Ac((E) => {
      const T = E.target, F = [...u.branches].some((D) => D.contains(T));
      !S || F || (r?.(E), a?.(E), E.defaultPrevented || c?.());
    }, v), M = Mc((E) => {
      const T = E.target;
      [...u.branches].some((D) => D.contains(T)) || (s?.(E), a?.(E), E.defaultPrevented || c?.());
    }, v);
    return Sc((E) => {
      w === u.layers.size - 1 && (o?.(E), !E.defaultPrevented && c && (E.preventDefault(), c()));
    }, v), i.useEffect(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (_o = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Ao(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = _o);
        };
    }, [f, v, n, u]), i.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Ao());
    }, [f, u]), i.useEffect(() => {
      const E = () => h({});
      return document.addEventListener(An, E), () => document.removeEventListener(An, E);
    }, []), /* @__PURE__ */ p.jsx(
      I.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: R(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: R(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: R(
          e.onPointerDownCapture,
          b.onPointerDownCapture
        )
      }
    );
  }
);
Xe.displayName = bc;
var Pc = "DismissableLayerBranch", _c = i.forwardRef((e, t) => {
  const n = i.useContext(or), o = i.useRef(null), r = j(t, o);
  return i.useEffect(() => {
    const s = o.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(I.div, { ...e, ref: r });
});
_c.displayName = Pc;
function Ac(e, t = globalThis?.document) {
  const n = ae(e), o = i.useRef(!1), r = i.useRef(() => {
  });
  return i.useEffect(() => {
    const s = (c) => {
      if (c.target && !o.current) {
        let l = function() {
          rr(
            Ec,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Mc(e, t = globalThis?.document) {
  const n = ae(e), o = i.useRef(!1);
  return i.useEffect(() => {
    const r = (s) => {
      s.target && !o.current && rr(Rc, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Ao() {
  const e = new CustomEvent(An);
  document.dispatchEvent(e);
}
function rr(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? nr(r, s) : r.dispatchEvent(s);
}
var z = globalThis?.document ? i.useLayoutEffect : () => {
}, Tc = Kn[" useId ".trim().toString()] || (() => {
}), Ic = 0;
function q(e) {
  const [t, n] = i.useState(Tc());
  return z(() => {
    n((o) => o ?? String(Ic++));
  }, [e]), t ? `radix-${t}` : "";
}
const Nc = ["top", "right", "bottom", "left"], Pe = Math.min, ne = Math.max, It = Math.round, wt = Math.floor, he = (e) => ({
  x: e,
  y: e
}), Oc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Dc = {
  start: "end",
  end: "start"
};
function Mn(e, t, n) {
  return ne(e, Pe(t, n));
}
function Se(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function be(e) {
  return e.split("-")[0];
}
function Ze(e) {
  return e.split("-")[1];
}
function Gn(e) {
  return e === "x" ? "y" : "x";
}
function zn(e) {
  return e === "y" ? "height" : "width";
}
const jc = /* @__PURE__ */ new Set(["top", "bottom"]);
function ve(e) {
  return jc.has(be(e)) ? "y" : "x";
}
function Yn(e) {
  return Gn(ve(e));
}
function $c(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ze(e), r = Yn(e), s = zn(r);
  let a = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = Nt(a)), [a, Nt(a)];
}
function Lc(e) {
  const t = Nt(e);
  return [Tn(e), t, Tn(t)];
}
function Tn(e) {
  return e.replace(/start|end/g, (t) => Dc[t]);
}
const Mo = ["left", "right"], To = ["right", "left"], kc = ["top", "bottom"], Fc = ["bottom", "top"];
function Bc(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? To : Mo : t ? Mo : To;
    case "left":
    case "right":
      return t ? kc : Fc;
    default:
      return [];
  }
}
function Vc(e, t, n, o) {
  const r = Ze(e);
  let s = Bc(be(e), n === "start", o);
  return r && (s = s.map((a) => a + "-" + r), t && (s = s.concat(s.map(Tn)))), s;
}
function Nt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Oc[t]);
}
function Wc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function sr(e) {
  return typeof e != "number" ? Wc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ot(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Io(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = ve(t), a = Yn(t), c = zn(a), l = be(t), u = s === "y", f = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, v = o[c] / 2 - r[c] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: f,
        y: o.y - r.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      h = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: o.x - r.width,
        y: d
      };
      break;
    default:
      h = {
        x: o.x,
        y: o.y
      };
  }
  switch (Ze(t)) {
    case "start":
      h[a] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      h[a] += v * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const Hc = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: a
  } = n, c = s.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: d
  } = Io(u, o, l), v = o, h = {}, x = 0;
  for (let m = 0; m < c.length; m++) {
    const {
      name: g,
      fn: y
    } = c[m], {
      x: w,
      y: C,
      data: S,
      reset: b
    } = await y({
      x: f,
      y: d,
      initialPlacement: o,
      placement: v,
      strategy: r,
      middlewareData: h,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = w ?? f, d = C ?? d, h = {
      ...h,
      [g]: {
        ...h[g],
        ...S
      }
    }, b && x <= 50 && (x++, typeof b == "object" && (b.placement && (v = b.placement), b.rects && (u = b.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : b.rects), {
      x: f,
      y: d
    } = Io(u, v, l)), m = -1);
  }
  return {
    x: f,
    y: d,
    placement: v,
    strategy: r,
    middlewareData: h
  };
};
async function ot(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: a,
    elements: c,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: v = !1,
    padding: h = 0
  } = Se(t, e), x = sr(h), g = c[v ? d === "floating" ? "reference" : "floating" : d], y = Ot(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: l
  })), w = d === "floating" ? {
    x: o,
    y: r,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), S = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = Ot(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: w,
    offsetParent: C,
    strategy: l
  }) : w);
  return {
    top: (y.top - b.top + x.top) / S.y,
    bottom: (b.bottom - y.bottom + x.bottom) / S.y,
    left: (y.left - b.left + x.left) / S.x,
    right: (b.right - y.right + x.right) / S.x
  };
}
const Uc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: a,
      elements: c,
      middlewareData: l
    } = t, {
      element: u,
      padding: f = 0
    } = Se(e, t) || {};
    if (u == null)
      return {};
    const d = sr(f), v = {
      x: n,
      y: o
    }, h = Yn(r), x = zn(h), m = await a.getDimensions(u), g = h === "y", y = g ? "top" : "left", w = g ? "bottom" : "right", C = g ? "clientHeight" : "clientWidth", S = s.reference[x] + s.reference[h] - v[h] - s.floating[x], b = v[h] - s.reference[h], M = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let E = M ? M[C] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(M))) && (E = c.floating[C] || s.floating[x]);
    const T = S / 2 - b / 2, F = E / 2 - m[x] / 2 - 1, D = Pe(d[y], F), O = Pe(d[w], F), $ = D, B = E - m[x] - O, L = E / 2 - m[x] / 2 + T, V = Mn($, L, B), N = !l.arrow && Ze(r) != null && L !== V && s.reference[x] / 2 - (L < $ ? D : O) - m[x] / 2 < 0, k = N ? L < $ ? L - $ : L - B : 0;
    return {
      [h]: v[h] + k,
      data: {
        [h]: V,
        centerOffset: L - V - k,
        ...N && {
          alignmentOffset: k
        }
      },
      reset: N
    };
  }
}), Kc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: a,
        initialPlacement: c,
        platform: l,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: v,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: m = !0,
        ...g
      } = Se(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const y = be(r), w = ve(c), C = be(c) === c, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), b = v || (C || !m ? [Nt(c)] : Lc(c)), M = x !== "none";
      !v && M && b.push(...Vc(c, m, x, S));
      const E = [c, ...b], T = await ot(t, g), F = [];
      let D = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (f && F.push(T[y]), d) {
        const L = $c(r, a, S);
        F.push(T[L[0]], T[L[1]]);
      }
      if (D = [...D, {
        placement: r,
        overflows: F
      }], !F.every((L) => L <= 0)) {
        var O, $;
        const L = (((O = s.flip) == null ? void 0 : O.index) || 0) + 1, V = E[L];
        if (V && (!(d === "alignment" ? w !== ve(V) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((A) => ve(A.placement) === w ? A.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: D
            },
            reset: {
              placement: V
            }
          };
        let N = ($ = D.filter((k) => k.overflows[0] <= 0).sort((k, A) => k.overflows[1] - A.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!N)
          switch (h) {
            case "bestFit": {
              var B;
              const k = (B = D.filter((A) => {
                if (M) {
                  const P = ve(A.placement);
                  return P === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  P === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((P) => P > 0).reduce((P, K) => P + K, 0)]).sort((A, P) => A[1] - P[1])[0]) == null ? void 0 : B[0];
              k && (N = k);
              break;
            }
            case "initialPlacement":
              N = c;
              break;
          }
        if (r !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
function No(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Oo(e) {
  return Nc.some((t) => e[t] >= 0);
}
const Gc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = Se(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await ot(t, {
            ...r,
            elementContext: "reference"
          }), a = No(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Oo(a)
            }
          };
        }
        case "escaped": {
          const s = await ot(t, {
            ...r,
            altBoundary: !0
          }), a = No(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Oo(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ir = /* @__PURE__ */ new Set(["left", "top"]);
async function zc(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = be(n), c = Ze(n), l = ve(n) === "y", u = ir.has(a) ? -1 : 1, f = s && l ? -1 : 1, d = Se(t, e);
  let {
    mainAxis: v,
    crossAxis: h,
    alignmentAxis: x
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return c && typeof x == "number" && (h = c === "end" ? x * -1 : x), l ? {
    x: h * f,
    y: v * u
  } : {
    x: v * u,
    y: h * f
  };
}
const Yc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: a,
        middlewareData: c
      } = t, l = await zc(t, e);
      return a === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, Xc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: c = {
          fn: (g) => {
            let {
              x: y,
              y: w
            } = g;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = Se(e, t), u = {
        x: n,
        y: o
      }, f = await ot(t, l), d = ve(be(r)), v = Gn(d);
      let h = u[v], x = u[d];
      if (s) {
        const g = v === "y" ? "top" : "left", y = v === "y" ? "bottom" : "right", w = h + f[g], C = h - f[y];
        h = Mn(w, h, C);
      }
      if (a) {
        const g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", w = x + f[g], C = x - f[y];
        x = Mn(w, x, C);
      }
      const m = c.fn({
        ...t,
        [v]: h,
        [d]: x
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - o,
          enabled: {
            [v]: s,
            [d]: a
          }
        }
      };
    }
  };
}, Zc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: a
      } = t, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = Se(e, t), f = {
        x: n,
        y: o
      }, d = ve(r), v = Gn(d);
      let h = f[v], x = f[d];
      const m = Se(c, t), g = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const C = v === "y" ? "height" : "width", S = s.reference[v] - s.floating[C] + g.mainAxis, b = s.reference[v] + s.reference[C] - g.mainAxis;
        h < S ? h = S : h > b && (h = b);
      }
      if (u) {
        var y, w;
        const C = v === "y" ? "width" : "height", S = ir.has(be(r)), b = s.reference[d] - s.floating[C] + (S && ((y = a.offset) == null ? void 0 : y[d]) || 0) + (S ? 0 : g.crossAxis), M = s.reference[d] + s.reference[C] + (S ? 0 : ((w = a.offset) == null ? void 0 : w[d]) || 0) - (S ? g.crossAxis : 0);
        x < b ? x = b : x > M && (x = M);
      }
      return {
        [v]: h,
        [d]: x
      };
    }
  };
}, qc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: s,
        platform: a,
        elements: c
      } = t, {
        apply: l = () => {
        },
        ...u
      } = Se(e, t), f = await ot(t, u), d = be(r), v = Ze(r), h = ve(r) === "y", {
        width: x,
        height: m
      } = s.floating;
      let g, y;
      d === "top" || d === "bottom" ? (g = d, y = v === (await (a.isRTL == null ? void 0 : a.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (y = d, g = v === "end" ? "top" : "bottom");
      const w = m - f.top - f.bottom, C = x - f.left - f.right, S = Pe(m - f[g], w), b = Pe(x - f[y], C), M = !t.middlewareData.shift;
      let E = S, T = b;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = C), (o = t.middlewareData.shift) != null && o.enabled.y && (E = w), M && !v) {
        const D = ne(f.left, 0), O = ne(f.right, 0), $ = ne(f.top, 0), B = ne(f.bottom, 0);
        h ? T = x - 2 * (D !== 0 || O !== 0 ? D + O : ne(f.left, f.right)) : E = m - 2 * ($ !== 0 || B !== 0 ? $ + B : ne(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: E
      });
      const F = await a.getDimensions(c.floating);
      return x !== F.width || m !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ht() {
  return typeof window < "u";
}
function qe(e) {
  return ar(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function oe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ye(e) {
  var t;
  return (t = (ar(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ar(e) {
  return Ht() ? e instanceof Node || e instanceof oe(e).Node : !1;
}
function de(e) {
  return Ht() ? e instanceof Element || e instanceof oe(e).Element : !1;
}
function ge(e) {
  return Ht() ? e instanceof HTMLElement || e instanceof oe(e).HTMLElement : !1;
}
function Do(e) {
  return !Ht() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof oe(e).ShadowRoot;
}
const Qc = /* @__PURE__ */ new Set(["inline", "contents"]);
function ct(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !Qc.has(r);
}
const Jc = /* @__PURE__ */ new Set(["table", "td", "th"]);
function el(e) {
  return Jc.has(qe(e));
}
const tl = [":popover-open", ":modal"];
function Ut(e) {
  return tl.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const nl = ["transform", "translate", "scale", "rotate", "perspective"], ol = ["transform", "translate", "scale", "rotate", "perspective", "filter"], rl = ["paint", "layout", "strict", "content"];
function Xn(e) {
  const t = Zn(), n = de(e) ? fe(e) : e;
  return nl.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ol.some((o) => (n.willChange || "").includes(o)) || rl.some((o) => (n.contain || "").includes(o));
}
function sl(e) {
  let t = _e(e);
  for (; ge(t) && !Ge(t); ) {
    if (Xn(t))
      return t;
    if (Ut(t))
      return null;
    t = _e(t);
  }
  return null;
}
function Zn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const il = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ge(e) {
  return il.has(qe(e));
}
function fe(e) {
  return oe(e).getComputedStyle(e);
}
function Kt(e) {
  return de(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function _e(e) {
  if (qe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Do(e) && e.host || // Fallback.
    ye(e)
  );
  return Do(t) ? t.host : t;
}
function cr(e) {
  const t = _e(e);
  return Ge(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ge(t) && ct(t) ? t : cr(t);
}
function rt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = cr(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = oe(r);
  if (s) {
    const c = In(a);
    return t.concat(a, a.visualViewport || [], ct(r) ? r : [], c && n ? rt(c) : []);
  }
  return t.concat(r, rt(r, [], n));
}
function In(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function lr(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ge(e), s = r ? e.offsetWidth : n, a = r ? e.offsetHeight : o, c = It(n) !== s || It(o) !== a;
  return c && (n = s, o = a), {
    width: n,
    height: o,
    $: c
  };
}
function qn(e) {
  return de(e) ? e : e.contextElement;
}
function He(e) {
  const t = qn(e);
  if (!ge(t))
    return he(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = lr(t);
  let a = (s ? It(n.width) : n.width) / o, c = (s ? It(n.height) : n.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: a,
    y: c
  };
}
const al = /* @__PURE__ */ he(0);
function ur(e) {
  const t = oe(e);
  return !Zn() || !t.visualViewport ? al : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function cl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== oe(e) ? !1 : t;
}
function je(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = qn(e);
  let a = he(1);
  t && (o ? de(o) && (a = He(o)) : a = He(e));
  const c = cl(s, n, o) ? ur(s) : he(0);
  let l = (r.left + c.x) / a.x, u = (r.top + c.y) / a.y, f = r.width / a.x, d = r.height / a.y;
  if (s) {
    const v = oe(s), h = o && de(o) ? oe(o) : o;
    let x = v, m = In(x);
    for (; m && o && h !== x; ) {
      const g = He(m), y = m.getBoundingClientRect(), w = fe(m), C = y.left + (m.clientLeft + parseFloat(w.paddingLeft)) * g.x, S = y.top + (m.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, u *= g.y, f *= g.x, d *= g.y, l += C, u += S, x = oe(m), m = In(x);
    }
  }
  return Ot({
    width: f,
    height: d,
    x: l,
    y: u
  });
}
function Gt(e, t) {
  const n = Kt(e).scrollLeft;
  return t ? t.left + n : je(ye(e)).left + n;
}
function dr(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Gt(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function ll(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", a = ye(o), c = t ? Ut(t.floating) : !1;
  if (o === a || c && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = he(1);
  const f = he(0), d = ge(o);
  if ((d || !d && !s) && ((qe(o) !== "body" || ct(a)) && (l = Kt(o)), ge(o))) {
    const h = je(o);
    u = He(o), f.x = h.x + o.clientLeft, f.y = h.y + o.clientTop;
  }
  const v = a && !d && !s ? dr(a, l) : he(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + f.x + v.x,
    y: n.y * u.y - l.scrollTop * u.y + f.y + v.y
  };
}
function ul(e) {
  return Array.from(e.getClientRects());
}
function dl(e) {
  const t = ye(e), n = Kt(e), o = e.ownerDocument.body, r = ne(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = ne(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + Gt(e);
  const c = -n.scrollTop;
  return fe(o).direction === "rtl" && (a += ne(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: a,
    y: c
  };
}
const jo = 25;
function fl(e, t) {
  const n = oe(e), o = ye(e), r = n.visualViewport;
  let s = o.clientWidth, a = o.clientHeight, c = 0, l = 0;
  if (r) {
    s = r.width, a = r.height;
    const f = Zn();
    (!f || f && t === "fixed") && (c = r.offsetLeft, l = r.offsetTop);
  }
  const u = Gt(o);
  if (u <= 0) {
    const f = o.ownerDocument, d = f.body, v = getComputedStyle(d), h = f.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0, x = Math.abs(o.clientWidth - d.clientWidth - h);
    x <= jo && (s -= x);
  } else u <= jo && (s += u);
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
const pl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ml(e, t) {
  const n = je(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = ge(e) ? He(e) : he(1), a = e.clientWidth * s.x, c = e.clientHeight * s.y, l = r * s.x, u = o * s.y;
  return {
    width: a,
    height: c,
    x: l,
    y: u
  };
}
function $o(e, t, n) {
  let o;
  if (t === "viewport")
    o = fl(e, n);
  else if (t === "document")
    o = dl(ye(e));
  else if (de(t))
    o = ml(t, n);
  else {
    const r = ur(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Ot(o);
}
function fr(e, t) {
  const n = _e(e);
  return n === t || !de(n) || Ge(n) ? !1 : fe(n).position === "fixed" || fr(n, t);
}
function vl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = rt(e, [], !1).filter((c) => de(c) && qe(c) !== "body"), r = null;
  const s = fe(e).position === "fixed";
  let a = s ? _e(e) : e;
  for (; de(a) && !Ge(a); ) {
    const c = fe(a), l = Xn(a);
    !l && c.position === "fixed" && (r = null), (s ? !l && !r : !l && c.position === "static" && !!r && pl.has(r.position) || ct(a) && !l && fr(e, a)) ? o = o.filter((f) => f !== a) : r = c, a = _e(a);
  }
  return t.set(e, o), o;
}
function hl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const a = [...n === "clippingAncestors" ? Ut(t) ? [] : vl(t, this._c) : [].concat(n), o], c = a[0], l = a.reduce((u, f) => {
    const d = $o(t, f, r);
    return u.top = ne(d.top, u.top), u.right = Pe(d.right, u.right), u.bottom = Pe(d.bottom, u.bottom), u.left = ne(d.left, u.left), u;
  }, $o(t, c, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function gl(e) {
  const {
    width: t,
    height: n
  } = lr(e);
  return {
    width: t,
    height: n
  };
}
function xl(e, t, n) {
  const o = ge(t), r = ye(t), s = n === "fixed", a = je(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = he(0);
  function u() {
    l.x = Gt(r);
  }
  if (o || !o && !s)
    if ((qe(t) !== "body" || ct(r)) && (c = Kt(t)), o) {
      const h = je(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else r && u();
  s && !o && r && u();
  const f = r && !o && !s ? dr(r, c) : he(0), d = a.left + c.scrollLeft - l.x - f.x, v = a.top + c.scrollTop - l.y - f.y;
  return {
    x: d,
    y: v,
    width: a.width,
    height: a.height
  };
}
function xn(e) {
  return fe(e).position === "static";
}
function Lo(e, t) {
  if (!ge(e) || fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ye(e) === n && (n = n.ownerDocument.body), n;
}
function pr(e, t) {
  const n = oe(e);
  if (Ut(e))
    return n;
  if (!ge(e)) {
    let r = _e(e);
    for (; r && !Ge(r); ) {
      if (de(r) && !xn(r))
        return r;
      r = _e(r);
    }
    return n;
  }
  let o = Lo(e, t);
  for (; o && el(o) && xn(o); )
    o = Lo(o, t);
  return o && Ge(o) && xn(o) && !Xn(o) ? n : o || sl(e) || n;
}
const yl = async function(e) {
  const t = this.getOffsetParent || pr, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: xl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function wl(e) {
  return fe(e).direction === "rtl";
}
const Cl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ll,
  getDocumentElement: ye,
  getClippingRect: hl,
  getOffsetParent: pr,
  getElementRects: yl,
  getClientRects: ul,
  getDimensions: gl,
  getScale: He,
  isElement: de,
  isRTL: wl
};
function mr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Sl(e, t) {
  let n = null, o;
  const r = ye(e);
  function s() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function a(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), s();
    const u = e.getBoundingClientRect(), {
      left: f,
      top: d,
      width: v,
      height: h
    } = u;
    if (c || t(), !v || !h)
      return;
    const x = wt(d), m = wt(r.clientWidth - (f + v)), g = wt(r.clientHeight - (d + h)), y = wt(f), C = {
      rootMargin: -x + "px " + -m + "px " + -g + "px " + -y + "px",
      threshold: ne(0, Pe(1, l)) || 1
    };
    let S = !0;
    function b(M) {
      const E = M[0].intersectionRatio;
      if (E !== l) {
        if (!S)
          return a();
        E ? a(!1, E) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !mr(u, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      n = new IntersectionObserver(b, {
        ...C,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(b, C);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function bl(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, u = qn(e), f = r || s ? [...u ? rt(u) : [], ...rt(t)] : [];
  f.forEach((y) => {
    r && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const d = u && c ? Sl(u, n) : null;
  let v = -1, h = null;
  a && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === u && h && (h.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var C;
      (C = h) == null || C.observe(t);
    })), n();
  }), u && !l && h.observe(u), h.observe(t));
  let x, m = l ? je(e) : null;
  l && g();
  function g() {
    const y = je(e);
    m && !mr(m, y) && n(), m = y, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    f.forEach((w) => {
      r && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), d?.(), (y = h) == null || y.disconnect(), h = null, l && cancelAnimationFrame(x);
  };
}
const El = Yc, Rl = Xc, Pl = Kc, _l = qc, Al = Gc, ko = Uc, Ml = Zc, Tl = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Cl,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return Hc(e, t, {
    ...r,
    platform: s
  });
};
var Il = typeof document < "u", Nl = function() {
}, _t = Il ? i.useLayoutEffect : Nl;
function Dt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!Dt(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !Dt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fo(e, t) {
  const n = vr(e);
  return Math.round(t * n) / n;
}
function yn(e) {
  const t = i.useRef(e);
  return _t(() => {
    t.current = e;
  }), t;
}
function Ol(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: u
  } = e, [f, d] = i.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, h] = i.useState(o);
  Dt(v, o) || h(o);
  const [x, m] = i.useState(null), [g, y] = i.useState(null), w = i.useCallback((A) => {
    A !== M.current && (M.current = A, m(A));
  }, []), C = i.useCallback((A) => {
    A !== E.current && (E.current = A, y(A));
  }, []), S = s || x, b = a || g, M = i.useRef(null), E = i.useRef(null), T = i.useRef(f), F = l != null, D = yn(l), O = yn(r), $ = yn(u), B = i.useCallback(() => {
    if (!M.current || !E.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: v
    };
    O.current && (A.platform = O.current), Tl(M.current, E.current, A).then((P) => {
      const K = {
        ...P,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: $.current !== !1
      };
      L.current && !Dt(T.current, K) && (T.current = K, Vt.flushSync(() => {
        d(K);
      }));
    });
  }, [v, t, n, O, $]);
  _t(() => {
    u === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [u]);
  const L = i.useRef(!1);
  _t(() => (L.current = !0, () => {
    L.current = !1;
  }), []), _t(() => {
    if (S && (M.current = S), b && (E.current = b), S && b) {
      if (D.current)
        return D.current(S, b, B);
      B();
    }
  }, [S, b, B, D, F]);
  const V = i.useMemo(() => ({
    reference: M,
    floating: E,
    setReference: w,
    setFloating: C
  }), [w, C]), N = i.useMemo(() => ({
    reference: S,
    floating: b
  }), [S, b]), k = i.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!N.floating)
      return A;
    const P = Fo(N.floating, f.x), K = Fo(N.floating, f.y);
    return c ? {
      ...A,
      transform: "translate(" + P + "px, " + K + "px)",
      ...vr(N.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: P,
      top: K
    };
  }, [n, c, N.floating, f.x, f.y]);
  return i.useMemo(() => ({
    ...f,
    update: B,
    refs: V,
    elements: N,
    floatingStyles: k
  }), [f, B, V, N, k]);
}
const Dl = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? ko({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? ko({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, jl = (e, t) => ({
  ...El(e),
  options: [e, t]
}), $l = (e, t) => ({
  ...Rl(e),
  options: [e, t]
}), Ll = (e, t) => ({
  ...Ml(e),
  options: [e, t]
}), kl = (e, t) => ({
  ...Pl(e),
  options: [e, t]
}), Fl = (e, t) => ({
  ..._l(e),
  options: [e, t]
}), Bl = (e, t) => ({
  ...Al(e),
  options: [e, t]
}), Vl = (e, t) => ({
  ...Dl(e),
  options: [e, t]
});
var Wl = "Arrow", hr = i.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...s } = e;
  return /* @__PURE__ */ p.jsx(
    I.svg,
    {
      ...s,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
hr.displayName = Wl;
var Hl = hr;
function Qn(e) {
  const [t, n] = i.useState(void 0);
  return z(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let a, c;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          a = u.inlineSize, c = u.blockSize;
        } else
          a = e.offsetWidth, c = e.offsetHeight;
        n({ width: a, height: c });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Jn = "Popper", [gr, Ae] = Q(Jn), [Ul, xr] = gr(Jn), yr = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = i.useState(null);
  return /* @__PURE__ */ p.jsx(Ul, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
yr.displayName = Jn;
var wr = "PopperAnchor", Cr = i.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, s = xr(wr, n), a = i.useRef(null), c = j(t, a), l = i.useRef(null);
    return i.useEffect(() => {
      const u = l.current;
      l.current = o?.current || a.current, u !== l.current && s.onAnchorChange(l.current);
    }), o ? null : /* @__PURE__ */ p.jsx(I.div, { ...r, ref: c });
  }
);
Cr.displayName = wr;
var eo = "PopperContent", [Kl, Gl] = gr(eo), Sr = i.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: d = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: x,
      ...m
    } = e, g = xr(eo, n), [y, w] = i.useState(null), C = j(t, (_) => w(_)), [S, b] = i.useState(null), M = Qn(S), E = M?.width ?? 0, T = M?.height ?? 0, F = o + (s !== "center" ? "-" + s : ""), D = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, O = Array.isArray(u) ? u : [u], $ = O.length > 0, B = {
      padding: D,
      boundary: O.filter(Yl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: $
    }, { refs: L, floatingStyles: V, placement: N, isPositioned: k, middlewareData: A } = Ol({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (..._) => bl(..._, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        jl({ mainAxis: r + T, alignmentAxis: a }),
        l && $l({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Ll() : void 0,
          ...B
        }),
        l && kl({ ...B }),
        Fl({
          ...B,
          apply: ({ elements: _, rects: W, availableWidth: Z, availableHeight: H }) => {
            const { width: U, height: G } = W.reference, se = _.floating.style;
            se.setProperty("--radix-popper-available-width", `${Z}px`), se.setProperty("--radix-popper-available-height", `${H}px`), se.setProperty("--radix-popper-anchor-width", `${U}px`), se.setProperty("--radix-popper-anchor-height", `${G}px`);
          }
        }),
        S && Vl({ element: S, padding: c }),
        Xl({ arrowWidth: E, arrowHeight: T }),
        v && Bl({ strategy: "referenceHidden", ...B })
      ]
    }), [P, K] = Rr(N), X = ae(x);
    z(() => {
      k && X?.();
    }, [k, X]);
    const le = A.arrow?.x, we = A.arrow?.y, re = A.arrow?.centerOffset !== 0, [Ce, te] = i.useState();
    return z(() => {
      y && te(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...V,
          transform: k ? V.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ce,
          "--radix-popper-transform-origin": [
            A.transformOrigin?.x,
            A.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...A.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          Kl,
          {
            scope: n,
            placedSide: P,
            onArrowChange: b,
            arrowX: le,
            arrowY: we,
            shouldHideArrow: re,
            children: /* @__PURE__ */ p.jsx(
              I.div,
              {
                "data-side": P,
                "data-align": K,
                ...m,
                ref: C,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: k ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Sr.displayName = eo;
var br = "PopperArrow", zl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Er = i.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, s = Gl(br, o), a = zl[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ p.jsx(
          Hl,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Er.displayName = br;
function Yl(e) {
  return e !== null;
}
var Xl = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: o, middlewareData: r } = t, a = r.arrow?.centerOffset !== 0, c = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [u, f] = Rr(n), d = { start: "0%", center: "50%", end: "100%" }[f], v = (r.arrow?.x ?? 0) + c / 2, h = (r.arrow?.y ?? 0) + l / 2;
    let x = "", m = "";
    return u === "bottom" ? (x = a ? d : `${v}px`, m = `${-l}px`) : u === "top" ? (x = a ? d : `${v}px`, m = `${o.floating.height + l}px`) : u === "right" ? (x = `${-l}px`, m = a ? d : `${h}px`) : u === "left" && (x = `${o.floating.width + l}px`, m = a ? d : `${h}px`), { data: { x, y: m } };
  }
});
function Rr(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var lt = yr, ut = Cr, zt = Sr, Yt = Er, Zl = "Portal", Qe = i.forwardRef((e, t) => {
  const { container: n, ...o } = e, [r, s] = i.useState(!1);
  z(() => s(!0), []);
  const a = n || r && globalThis?.document?.body;
  return a ? sc.createPortal(/* @__PURE__ */ p.jsx(I.div, { ...o, ref: t }), a) : null;
});
Qe.displayName = Zl;
function ql(e, t) {
  return i.useReducer((n, o) => t[n][o] ?? n, e);
}
var ee = (e) => {
  const { present: t, children: n } = e, o = Ql(t), r = typeof n == "function" ? n({ present: o.isPresent }) : i.Children.only(n), s = j(o.ref, Jl(r));
  return typeof n == "function" || o.isPresent ? i.cloneElement(r, { ref: s }) : null;
};
ee.displayName = "Presence";
function Ql(e) {
  const [t, n] = i.useState(), o = i.useRef(null), r = i.useRef(e), s = i.useRef("none"), a = e ? "mounted" : "unmounted", [c, l] = ql(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return i.useEffect(() => {
    const u = Ct(o.current);
    s.current = c === "mounted" ? u : "none";
  }, [c]), z(() => {
    const u = o.current, f = r.current;
    if (f !== e) {
      const v = s.current, h = Ct(u);
      e ? l("MOUNT") : h === "none" || u?.display === "none" ? l("UNMOUNT") : l(f && v !== h ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, l]), z(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, d = (h) => {
        const m = Ct(o.current).includes(CSS.escape(h.animationName));
        if (h.target === t && m && (l("ANIMATION_END"), !r.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, v = (h) => {
        h.target === t && (s.current = Ct(o.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: i.useCallback((u) => {
      o.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function Ct(e) {
  return e?.animationName || "none";
}
function Jl(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var eu = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function tu(e) {
  const t = ({ children: n }) => /* @__PURE__ */ p.jsx(p.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = eu, t;
}
var nu = Kn[" useInsertionEffect ".trim().toString()] || z;
function ce({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [r, s, a] = ou({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, l = c ? e : r;
  {
    const f = i.useRef(e !== void 0);
    i.useEffect(() => {
      const d = f.current;
      d !== c && console.warn(
        `${o} is changing from ${d ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = c;
    }, [c, o]);
  }
  const u = i.useCallback(
    (f) => {
      if (c) {
        const d = ru(f) ? f(e) : f;
        d !== e && a.current?.(d);
      } else
        s(f);
    },
    [c, e, s, a]
  );
  return [l, u];
}
function ou({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = i.useState(e), r = i.useRef(n), s = i.useRef(t);
  return nu(() => {
    s.current = t;
  }, [t]), i.useEffect(() => {
    r.current !== n && (s.current?.(n), r.current = n);
  }, [n, r]), [n, o, s];
}
function ru(e) {
  return typeof e == "function";
}
var Pr = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), su = "VisuallyHidden", _r = i.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    I.span,
    {
      ...e,
      ref: t,
      style: { ...Pr, ...e.style }
    }
  )
);
_r.displayName = su;
var iu = _r, [Xt] = Q("Tooltip", [
  Ae
]), Zt = Ae(), Ar = "TooltipProvider", au = 700, Nn = "tooltip.open", [cu, to] = Xt(Ar), Mr = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = au,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: s
  } = e, a = i.useRef(!0), c = i.useRef(!1), l = i.useRef(0);
  return i.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ p.jsx(
    cu,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: n,
      onOpen: i.useCallback(() => {
        window.clearTimeout(l.current), a.current = !1;
      }, []),
      onClose: i.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => a.current = !0,
          o
        );
      }, [o]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: i.useCallback((u) => {
        c.current = u;
      }, []),
      disableHoverableContent: r,
      children: s
    }
  );
};
Mr.displayName = Ar;
var st = "Tooltip", [lu, dt] = Xt(st), Tr = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: c
  } = e, l = to(st, e.__scopeTooltip), u = Zt(t), [f, d] = i.useState(null), v = q(), h = i.useRef(0), x = a ?? l.disableHoverableContent, m = c ?? l.delayDuration, g = i.useRef(!1), [y, w] = ce({
    prop: o,
    defaultProp: r ?? !1,
    onChange: (E) => {
      E ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Nn))) : l.onClose(), s?.(E);
    },
    caller: st
  }), C = i.useMemo(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [y]), S = i.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, g.current = !1, w(!0);
  }, [w]), b = i.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, w(!1);
  }, [w]), M = i.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, w(!0), h.current = 0;
    }, m);
  }, [m, w]);
  return i.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ p.jsx(lt, { ...u, children: /* @__PURE__ */ p.jsx(
    lu,
    {
      scope: t,
      contentId: v,
      open: y,
      stateAttribute: C,
      trigger: f,
      onTriggerChange: d,
      onTriggerEnter: i.useCallback(() => {
        l.isOpenDelayedRef.current ? M() : S();
      }, [l.isOpenDelayedRef, M, S]),
      onTriggerLeave: i.useCallback(() => {
        x ? b() : (window.clearTimeout(h.current), h.current = 0);
      }, [b, x]),
      onOpen: S,
      onClose: b,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
Tr.displayName = st;
var On = "TooltipTrigger", Ir = i.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = dt(On, n), s = to(On, n), a = Zt(n), c = i.useRef(null), l = j(t, c, r.onTriggerChange), u = i.useRef(!1), f = i.useRef(!1), d = i.useCallback(() => u.current = !1, []);
    return i.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ p.jsx(ut, { asChild: !0, ...a, children: /* @__PURE__ */ p.jsx(
      I.button,
      {
        "aria-describedby": r.open ? r.contentId : void 0,
        "data-state": r.stateAttribute,
        ...o,
        ref: l,
        onPointerMove: R(e.onPointerMove, (v) => {
          v.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (r.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: R(e.onPointerLeave, () => {
          r.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: R(e.onPointerDown, () => {
          r.open && r.onClose(), u.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: R(e.onFocus, () => {
          u.current || r.onOpen();
        }),
        onBlur: R(e.onBlur, r.onClose),
        onClick: R(e.onClick, r.onClose)
      }
    ) });
  }
);
Ir.displayName = On;
var no = "TooltipPortal", [uu, du] = Xt(no, {
  forceMount: void 0
}), Nr = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, s = dt(no, t);
  return /* @__PURE__ */ p.jsx(uu, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx(ee, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Qe, { asChild: !0, container: r, children: o }) }) });
};
Nr.displayName = no;
var ze = "TooltipContent", Or = i.forwardRef(
  (e, t) => {
    const n = du(ze, e.__scopeTooltip), { forceMount: o = n.forceMount, side: r = "top", ...s } = e, a = dt(ze, e.__scopeTooltip);
    return /* @__PURE__ */ p.jsx(ee, { present: o || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ p.jsx(Dr, { side: r, ...s, ref: t }) : /* @__PURE__ */ p.jsx(fu, { side: r, ...s, ref: t }) });
  }
), fu = i.forwardRef((e, t) => {
  const n = dt(ze, e.__scopeTooltip), o = to(ze, e.__scopeTooltip), r = i.useRef(null), s = j(t, r), [a, c] = i.useState(null), { trigger: l, onClose: u } = n, f = r.current, { onPointerInTransitChange: d } = o, v = i.useCallback(() => {
    c(null), d(!1);
  }, [d]), h = i.useCallback(
    (x, m) => {
      const g = x.currentTarget, y = { x: x.clientX, y: x.clientY }, w = gu(y, g.getBoundingClientRect()), C = xu(y, w), S = yu(m.getBoundingClientRect()), b = Cu([...C, ...S]);
      c(b), d(!0);
    },
    [d]
  );
  return i.useEffect(() => () => v(), [v]), i.useEffect(() => {
    if (l && f) {
      const x = (g) => h(g, f), m = (g) => h(g, l);
      return l.addEventListener("pointerleave", x), f.addEventListener("pointerleave", m), () => {
        l.removeEventListener("pointerleave", x), f.removeEventListener("pointerleave", m);
      };
    }
  }, [l, f, h, v]), i.useEffect(() => {
    if (a) {
      const x = (m) => {
        const g = m.target, y = { x: m.clientX, y: m.clientY }, w = l?.contains(g) || f?.contains(g), C = !wu(y, a);
        w ? v() : C && (v(), u());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, f, a, u, v]), /* @__PURE__ */ p.jsx(Dr, { ...e, ref: s });
}), [pu, mu] = Xt(st, { isInside: !1 }), vu = /* @__PURE__ */ tu("TooltipContent"), Dr = i.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": r,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...c
    } = e, l = dt(ze, n), u = Zt(n), { onClose: f } = l;
    return i.useEffect(() => (document.addEventListener(Nn, f), () => document.removeEventListener(Nn, f)), [f]), i.useEffect(() => {
      if (l.trigger) {
        const d = (v) => {
          v.target?.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ p.jsx(
      Xe,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ p.jsxs(
          zt,
          {
            "data-state": l.stateAttribute,
            ...u,
            ...c,
            ref: t,
            style: {
              ...c.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ p.jsx(vu, { children: o }),
              /* @__PURE__ */ p.jsx(pu, { scope: n, isInside: !0, children: /* @__PURE__ */ p.jsx(iu, { id: l.contentId, role: "tooltip", children: r || o }) })
            ]
          }
        )
      }
    );
  }
);
Or.displayName = ze;
var jr = "TooltipArrow", hu = i.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = Zt(n);
    return mu(
      jr,
      n
    ).isInside ? null : /* @__PURE__ */ p.jsx(Yt, { ...r, ...o, ref: t });
  }
);
hu.displayName = jr;
function gu(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, s)) {
    case s:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function xu(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
function yu(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
function wu(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const c = t[s], l = t[a], u = c.x, f = c.y, d = l.x, v = l.y;
    f > o != v > o && n < (d - u) * (o - f) / (v - f) + u && (r = !r);
  }
  return r;
}
function Cu(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Su(t);
}
function Su(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], a = t[t.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], a = n[n.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var vv = Mr, hv = Tr, gv = Ir, xv = Nr, yv = Or;
function jt(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
// @__NO_SIDE_EFFECTS__
function Bo(e) {
  const t = /* @__PURE__ */ bu(e), n = i.forwardRef((o, r) => {
    const { children: s, ...a } = o, c = i.Children.toArray(s), l = c.find(Ru);
    if (l) {
      const u = l.props.children, f = c.map((d) => d === l ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function bu(e) {
  const t = i.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (i.isValidElement(r)) {
      const a = _u(r), c = Pu(s, r.props);
      return r.type !== i.Fragment && (c.ref = o ? xe(o, a) : a), i.cloneElement(r, c);
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Eu = Symbol("radix.slottable");
function Ru(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Eu;
}
function Pu(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...c) => {
      const l = s(...c);
      return r(...c), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function _u(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function qt(e) {
  const t = e + "CollectionProvider", [n, o] = Q(t), [r, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (m) => {
    const { scope: g, children: y } = m, w = De.useRef(null), C = De.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(r, { scope: g, itemMap: C, collectionRef: w, children: y });
  };
  a.displayName = t;
  const c = e + "CollectionSlot", l = /* @__PURE__ */ Bo(c), u = De.forwardRef(
    (m, g) => {
      const { scope: y, children: w } = m, C = s(c, y), S = j(g, C.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: S, children: w });
    }
  );
  u.displayName = c;
  const f = e + "CollectionItemSlot", d = "data-radix-collection-item", v = /* @__PURE__ */ Bo(f), h = De.forwardRef(
    (m, g) => {
      const { scope: y, children: w, ...C } = m, S = De.useRef(null), b = j(g, S), M = s(f, y);
      return De.useEffect(() => (M.itemMap.set(S, { ref: S, ...C }), () => void M.itemMap.delete(S))), /* @__PURE__ */ p.jsx(v, { [d]: "", ref: b, children: w });
    }
  );
  h.displayName = f;
  function x(m) {
    const g = s(e + "CollectionConsumer", m);
    return De.useCallback(() => {
      const w = g.collectionRef.current;
      if (!w) return [];
      const C = Array.from(w.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (M, E) => C.indexOf(M.ref.current) - C.indexOf(E.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: a, Slot: u, ItemSlot: h },
    x,
    o
  ];
}
var Au = i.createContext(void 0);
function ft(e) {
  const t = i.useContext(Au);
  return e || t || "ltr";
}
var wn = 0;
function Qt() {
  i.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Vo()), document.body.insertAdjacentElement("beforeend", e[1] ?? Vo()), wn++, () => {
      wn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), wn--;
    };
  }, []);
}
function Vo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Cn = "focusScope.autoFocusOnMount", Sn = "focusScope.autoFocusOnUnmount", Wo = { bubbles: !1, cancelable: !0 }, Mu = "FocusScope", pt = i.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: r,
    onUnmountAutoFocus: s,
    ...a
  } = e, [c, l] = i.useState(null), u = ae(r), f = ae(s), d = i.useRef(null), v = j(t, (m) => l(m)), h = i.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  i.useEffect(() => {
    if (o) {
      let m = function(C) {
        if (h.paused || !c) return;
        const S = C.target;
        c.contains(S) ? d.current = S : Re(d.current, { select: !0 });
      }, g = function(C) {
        if (h.paused || !c) return;
        const S = C.relatedTarget;
        S !== null && (c.contains(S) || Re(d.current, { select: !0 }));
      }, y = function(C) {
        if (document.activeElement === document.body)
          for (const b of C)
            b.removedNodes.length > 0 && Re(c);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", g);
      const w = new MutationObserver(y);
      return c && w.observe(c, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", g), w.disconnect();
      };
    }
  }, [o, c, h.paused]), i.useEffect(() => {
    if (c) {
      Uo.add(h);
      const m = document.activeElement;
      if (!c.contains(m)) {
        const y = new CustomEvent(Cn, Wo);
        c.addEventListener(Cn, u), c.dispatchEvent(y), y.defaultPrevented || (Tu(ju($r(c)), { select: !0 }), document.activeElement === m && Re(c));
      }
      return () => {
        c.removeEventListener(Cn, u), setTimeout(() => {
          const y = new CustomEvent(Sn, Wo);
          c.addEventListener(Sn, f), c.dispatchEvent(y), y.defaultPrevented || Re(m ?? document.body, { select: !0 }), c.removeEventListener(Sn, f), Uo.remove(h);
        }, 0);
      };
    }
  }, [c, u, f, h]);
  const x = i.useCallback(
    (m) => {
      if (!n && !o || h.paused) return;
      const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, y = document.activeElement;
      if (g && y) {
        const w = m.currentTarget, [C, S] = Iu(w);
        C && S ? !m.shiftKey && y === S ? (m.preventDefault(), n && Re(C, { select: !0 })) : m.shiftKey && y === C && (m.preventDefault(), n && Re(S, { select: !0 })) : y === w && m.preventDefault();
      }
    },
    [n, o, h.paused]
  );
  return /* @__PURE__ */ p.jsx(I.div, { tabIndex: -1, ...a, ref: v, onKeyDown: x });
});
pt.displayName = Mu;
function Tu(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Re(o, { select: t }), document.activeElement !== n) return;
}
function Iu(e) {
  const t = $r(e), n = Ho(t, e), o = Ho(t.reverse(), e);
  return [n, o];
}
function $r(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ho(e, t) {
  for (const n of e)
    if (!Nu(n, { upTo: t })) return n;
}
function Nu(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ou(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Re(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ou(e) && t && e.select();
  }
}
var Uo = Du();
function Du() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Ko(e, t), e.unshift(t);
    },
    remove(t) {
      e = Ko(e, t), e[0]?.resume();
    }
  };
}
function Ko(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function ju(e) {
  return e.filter((t) => t.tagName !== "A");
}
// @__NO_SIDE_EFFECTS__
function $u(e) {
  const t = /* @__PURE__ */ Lu(e), n = i.forwardRef((o, r) => {
    const { children: s, ...a } = o, c = i.Children.toArray(s), l = c.find(Fu);
    if (l) {
      const u = l.props.children, f = c.map((d) => d === l ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Lu(e) {
  const t = i.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (i.isValidElement(r)) {
      const a = Vu(r), c = Bu(s, r.props);
      return r.type !== i.Fragment && (c.ref = o ? xe(o, a) : a), i.cloneElement(r, c);
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ku = Symbol("radix.slottable");
function Fu(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ku;
}
function Bu(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...c) => {
      const l = s(...c);
      return r(...c), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Vu(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function oo(e) {
  const t = i.useRef({ value: e, previous: e });
  return i.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Wu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Be = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), bt = {}, bn = 0, Lr = function(e) {
  return e && (e.host || Lr(e.parentNode));
}, Hu = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Lr(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Uu = function(e, t, n, o) {
  var r = Hu(t, Array.isArray(e) ? e : [e]);
  bt[n] || (bt[n] = /* @__PURE__ */ new WeakMap());
  var s = bt[n], a = [], c = /* @__PURE__ */ new Set(), l = new Set(r), u = function(d) {
    !d || c.has(d) || (c.add(d), u(d.parentNode));
  };
  r.forEach(u);
  var f = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(v) {
      if (c.has(v))
        f(v);
      else
        try {
          var h = v.getAttribute(o), x = h !== null && h !== "false", m = (Be.get(v) || 0) + 1, g = (s.get(v) || 0) + 1;
          Be.set(v, m), s.set(v, g), a.push(v), m === 1 && x && St.set(v, !0), g === 1 && v.setAttribute(n, "true"), x || v.setAttribute(o, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", v, y);
        }
    });
  };
  return f(t), c.clear(), bn++, function() {
    a.forEach(function(d) {
      var v = Be.get(d) - 1, h = s.get(d) - 1;
      Be.set(d, v), s.set(d, h), v || (St.has(d) || d.removeAttribute(o), St.delete(d)), h || d.removeAttribute(n);
    }), bn--, bn || (Be = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), bt = {});
  };
}, Jt = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Wu(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Uu(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, me = function() {
  return me = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, me.apply(this, arguments);
};
function kr(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Ku(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var At = "right-scroll-bar-position", Mt = "width-before-scroll-bar", Gu = "with-scroll-bars-hidden", zu = "--removed-body-scroll-bar-size";
function En(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Yu(e, t) {
  var n = i.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Xu = typeof window < "u" ? i.useLayoutEffect : i.useEffect, Go = /* @__PURE__ */ new WeakMap();
function Zu(e, t) {
  var n = Yu(null, function(o) {
    return e.forEach(function(r) {
      return En(r, o);
    });
  });
  return Xu(function() {
    var o = Go.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), a = n.current;
      r.forEach(function(c) {
        s.has(c) || En(c, null);
      }), s.forEach(function(c) {
        r.has(c) || En(c, a);
      });
    }
    Go.set(n, e);
  }, [e]), n;
}
function qu(e) {
  return e;
}
function Qu(e, t) {
  t === void 0 && (t = qu);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, o);
      return n.push(a), function() {
        n = n.filter(function(c) {
          return c !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (o = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(c) {
          return s(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      o = !0;
      var a = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(s), a = n;
      }
      var l = function() {
        var f = a;
        a = [], f.forEach(s);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(f) {
          a.push(f), u();
        },
        filter: function(f) {
          return a = a.filter(f), n;
        }
      };
    }
  };
  return r;
}
function Ju(e) {
  e === void 0 && (e = {});
  var t = Qu(null);
  return t.options = me({ async: !0, ssr: !1 }, e), t;
}
var Fr = function(e) {
  var t = e.sideCar, n = kr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return i.createElement(o, me({}, n));
};
Fr.isSideCarExport = !0;
function ed(e, t) {
  return e.useMedium(t), Fr;
}
var Br = Ju(), Rn = function() {
}, en = i.forwardRef(function(e, t) {
  var n = i.useRef(null), o = i.useState({
    onScrollCapture: Rn,
    onWheelCapture: Rn,
    onTouchMoveCapture: Rn
  }), r = o[0], s = o[1], a = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, f = e.enabled, d = e.shards, v = e.sideCar, h = e.noRelative, x = e.noIsolation, m = e.inert, g = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, C = e.gapMode, S = kr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), b = v, M = Zu([n, t]), E = me(me({}, S), r);
  return i.createElement(
    i.Fragment,
    null,
    f && i.createElement(b, { sideCar: Br, removeScrollBar: u, shards: d, noRelative: h, noIsolation: x, inert: m, setCallbacks: s, allowPinchZoom: !!g, lockRef: n, gapMode: C }),
    a ? i.cloneElement(i.Children.only(c), me(me({}, E), { ref: M })) : i.createElement(w, me({}, E, { className: l, ref: M }), c)
  );
});
en.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
en.classNames = {
  fullWidth: Mt,
  zeroRight: At
};
var td = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function nd() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = td();
  return t && e.setAttribute("nonce", t), e;
}
function od(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function rd(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var sd = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = nd()) && (od(t, n), rd(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, id = function() {
  var e = sd();
  return function(t, n) {
    i.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Vr = function() {
  var e = id(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, ad = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Pn = function(e) {
  return parseInt(e || "", 10) || 0;
}, cd = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Pn(n), Pn(o), Pn(r)];
}, ld = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ad;
  var t = cd(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, ud = Vr(), Ue = "data-scroll-locked", dd = function(e, t, n, o) {
  var r = e.left, s = e.top, a = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Gu, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(c, "px ").concat(o, `;
  }
  body[`).concat(Ue, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(At, ` {
    right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(Mt, ` {
    margin-right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(At, " .").concat(At, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Mt, " .").concat(Mt, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Ue, `] {
    `).concat(zu, ": ").concat(c, `px;
  }
`);
}, zo = function() {
  var e = parseInt(document.body.getAttribute(Ue) || "0", 10);
  return isFinite(e) ? e : 0;
}, fd = function() {
  i.useEffect(function() {
    return document.body.setAttribute(Ue, (zo() + 1).toString()), function() {
      var e = zo() - 1;
      e <= 0 ? document.body.removeAttribute(Ue) : document.body.setAttribute(Ue, e.toString());
    };
  }, []);
}, pd = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  fd();
  var s = i.useMemo(function() {
    return ld(r);
  }, [r]);
  return i.createElement(ud, { styles: dd(s, !t, r, n ? "" : "!important") });
}, Dn = !1;
if (typeof window < "u")
  try {
    var Et = Object.defineProperty({}, "passive", {
      get: function() {
        return Dn = !0, !0;
      }
    });
    window.addEventListener("test", Et, Et), window.removeEventListener("test", Et, Et);
  } catch {
    Dn = !1;
  }
var Ve = Dn ? { passive: !1 } : !1, md = function(e) {
  return e.tagName === "TEXTAREA";
}, Wr = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !md(e) && n[t] === "visible")
  );
}, vd = function(e) {
  return Wr(e, "overflowY");
}, hd = function(e) {
  return Wr(e, "overflowX");
}, Yo = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = Hr(e, o);
    if (r) {
      var s = Ur(e, o), a = s[1], c = s[2];
      if (a > c)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, gd = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, xd = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Hr = function(e, t) {
  return e === "v" ? vd(t) : hd(t);
}, Ur = function(e, t) {
  return e === "v" ? gd(t) : xd(t);
}, yd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, wd = function(e, t, n, o, r) {
  var s = yd(e, window.getComputedStyle(t).direction), a = s * o, c = n.target, l = t.contains(c), u = !1, f = a > 0, d = 0, v = 0;
  do {
    if (!c)
      break;
    var h = Ur(e, c), x = h[0], m = h[1], g = h[2], y = m - g - s * x;
    (x || y) && Hr(e, c) && (d += y, v += x);
    var w = c.parentNode;
    c = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (f && Math.abs(d) < 1 || !f && Math.abs(v) < 1) && (u = !0), u;
}, Rt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Xo = function(e) {
  return [e.deltaX, e.deltaY];
}, Zo = function(e) {
  return e && "current" in e ? e.current : e;
}, Cd = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Sd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, bd = 0, We = [];
function Ed(e) {
  var t = i.useRef([]), n = i.useRef([0, 0]), o = i.useRef(), r = i.useState(bd++)[0], s = i.useState(Vr)[0], a = i.useRef(e);
  i.useEffect(function() {
    a.current = e;
  }, [e]), i.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var m = Ku([e.lockRef.current], (e.shards || []).map(Zo), !0).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = i.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = Rt(m), w = n.current, C = "deltaX" in m ? m.deltaX : w[0] - y[0], S = "deltaY" in m ? m.deltaY : w[1] - y[1], b, M = m.target, E = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && E === "h" && M.type === "range")
      return !1;
    var T = Yo(E, M);
    if (!T)
      return !0;
    if (T ? b = E : (b = E === "v" ? "h" : "v", T = Yo(E, M)), !T)
      return !1;
    if (!o.current && "changedTouches" in m && (C || S) && (o.current = b), !b)
      return !0;
    var F = o.current || b;
    return wd(F, g, m, F === "h" ? C : S);
  }, []), l = i.useCallback(function(m) {
    var g = m;
    if (!(!We.length || We[We.length - 1] !== s)) {
      var y = "deltaY" in g ? Xo(g) : Rt(g), w = t.current.filter(function(b) {
        return b.name === g.type && (b.target === g.target || g.target === b.shadowParent) && Cd(b.delta, y);
      })[0];
      if (w && w.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!w) {
        var C = (a.current.shards || []).map(Zo).filter(Boolean).filter(function(b) {
          return b.contains(g.target);
        }), S = C.length > 0 ? c(g, C[0]) : !a.current.noIsolation;
        S && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = i.useCallback(function(m, g, y, w) {
    var C = { name: m, delta: g, target: y, should: w, shadowParent: Rd(y) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), f = i.useCallback(function(m) {
    n.current = Rt(m), o.current = void 0;
  }, []), d = i.useCallback(function(m) {
    u(m.type, Xo(m), m.target, c(m, e.lockRef.current));
  }, []), v = i.useCallback(function(m) {
    u(m.type, Rt(m), m.target, c(m, e.lockRef.current));
  }, []);
  i.useEffect(function() {
    return We.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", l, Ve), document.addEventListener("touchmove", l, Ve), document.addEventListener("touchstart", f, Ve), function() {
      We = We.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, Ve), document.removeEventListener("touchmove", l, Ve), document.removeEventListener("touchstart", f, Ve);
    };
  }, []);
  var h = e.removeScrollBar, x = e.inert;
  return i.createElement(
    i.Fragment,
    null,
    x ? i.createElement(s, { styles: Sd(r) }) : null,
    h ? i.createElement(pd, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Rd(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Pd = ed(Br, Ed);
var mt = i.forwardRef(function(e, t) {
  return i.createElement(en, me({}, e, { ref: t, sideCar: Pd }));
});
mt.classNames = en.classNames;
var _d = [" ", "Enter", "ArrowUp", "ArrowDown"], Ad = [" ", "Enter"], $e = "Select", [tn, nn, Md] = qt($e), [Je] = Q($e, [
  Md,
  Ae
]), on = Ae(), [Td, Me] = Je($e), [Id, Nd] = Je($e), Kr = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    value: a,
    defaultValue: c,
    onValueChange: l,
    dir: u,
    name: f,
    autoComplete: d,
    disabled: v,
    required: h,
    form: x
  } = e, m = on(t), [g, y] = i.useState(null), [w, C] = i.useState(null), [S, b] = i.useState(!1), M = ft(u), [E, T] = ce({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: $e
  }), [F, D] = ce({
    prop: a,
    defaultProp: c,
    onChange: l,
    caller: $e
  }), O = i.useRef(null), $ = g ? x || !!g.closest("form") : !0, [B, L] = i.useState(/* @__PURE__ */ new Set()), V = Array.from(B).map((N) => N.props.value).join(";");
  return /* @__PURE__ */ p.jsx(lt, { ...m, children: /* @__PURE__ */ p.jsxs(
    Td,
    {
      required: h,
      scope: t,
      trigger: g,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: C,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: b,
      contentId: q(),
      value: F,
      onValueChange: D,
      open: E,
      onOpenChange: T,
      dir: M,
      triggerPointerDownPosRef: O,
      disabled: v,
      children: [
        /* @__PURE__ */ p.jsx(tn.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          Id,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: i.useCallback((N) => {
              L((k) => new Set(k).add(N));
            }, []),
            onNativeOptionRemove: i.useCallback((N) => {
              L((k) => {
                const A = new Set(k);
                return A.delete(N), A;
              });
            }, []),
            children: n
          }
        ) }),
        $ ? /* @__PURE__ */ p.jsxs(
          hs,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: f,
            autoComplete: d,
            value: F,
            onChange: (N) => D(N.target.value),
            disabled: v,
            form: x,
            children: [
              F === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(B)
            ]
          },
          V
        ) : null
      ]
    }
  ) });
};
Kr.displayName = $e;
var Gr = "SelectTrigger", zr = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e, s = on(n), a = Me(Gr, n), c = a.disabled || o, l = j(t, a.onTriggerChange), u = nn(n), f = i.useRef("touch"), [d, v, h] = xs((m) => {
      const g = u().filter((C) => !C.disabled), y = g.find((C) => C.value === a.value), w = ys(g, m, y);
      w !== void 0 && a.onValueChange(w.value);
    }), x = (m) => {
      c || (a.onOpenChange(!0), h()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(ut, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
      I.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: c,
        "data-disabled": c ? "" : void 0,
        "data-placeholder": gs(a.value) ? "" : void 0,
        ...r,
        ref: l,
        onClick: R(r.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && x(m);
        }),
        onPointerDown: R(r.onPointerDown, (m) => {
          f.current = m.pointerType;
          const g = m.target;
          g.hasPointerCapture(m.pointerId) && g.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (x(m), m.preventDefault());
        }),
        onKeyDown: R(r.onKeyDown, (m) => {
          const g = d.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && v(m.key), !(g && m.key === " ") && _d.includes(m.key) && (x(), m.preventDefault());
        })
      }
    ) });
  }
);
zr.displayName = Gr;
var Yr = "SelectValue", Xr = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, children: s, placeholder: a = "", ...c } = e, l = Me(Yr, n), { onValueNodeHasChildrenChange: u } = l, f = s !== void 0, d = j(t, l.onValueNodeChange);
    return z(() => {
      u(f);
    }, [u, f]), /* @__PURE__ */ p.jsx(
      I.span,
      {
        ...c,
        ref: d,
        style: { pointerEvents: "none" },
        children: gs(l.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: a }) : s
      }
    );
  }
);
Xr.displayName = Yr;
var Od = "SelectIcon", Zr = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return /* @__PURE__ */ p.jsx(I.span, { "aria-hidden": !0, ...r, ref: t, children: o || "▼" });
  }
);
Zr.displayName = Od;
var Dd = "SelectPortal", qr = (e) => /* @__PURE__ */ p.jsx(Qe, { asChild: !0, ...e });
qr.displayName = Dd;
var Le = "SelectContent", Qr = i.forwardRef(
  (e, t) => {
    const n = Me(Le, e.__scopeSelect), [o, r] = i.useState();
    if (z(() => {
      r(new DocumentFragment());
    }, []), !n.open) {
      const s = o;
      return s ? Vt.createPortal(
        /* @__PURE__ */ p.jsx(Jr, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(tn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(es, { ...e, ref: t });
  }
);
Qr.displayName = Le;
var ue = 10, [Jr, Te] = Je(Le), jd = "SelectContentImpl", $d = /* @__PURE__ */ $u("SelectContent.RemoveScroll"), es = i.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: o = "item-aligned",
      onCloseAutoFocus: r,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: c,
      sideOffset: l,
      align: u,
      alignOffset: f,
      arrowPadding: d,
      collisionBoundary: v,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: m,
      avoidCollisions: g,
      //
      ...y
    } = e, w = Me(Le, n), [C, S] = i.useState(null), [b, M] = i.useState(null), E = j(t, (_) => S(_)), [T, F] = i.useState(null), [D, O] = i.useState(
      null
    ), $ = nn(n), [B, L] = i.useState(!1), V = i.useRef(!1);
    i.useEffect(() => {
      if (C) return Jt(C);
    }, [C]), Qt();
    const N = i.useCallback(
      (_) => {
        const [W, ...Z] = $().map((G) => G.ref.current), [H] = Z.slice(-1), U = document.activeElement;
        for (const G of _)
          if (G === U || (G?.scrollIntoView({ block: "nearest" }), G === W && b && (b.scrollTop = 0), G === H && b && (b.scrollTop = b.scrollHeight), G?.focus(), document.activeElement !== U)) return;
      },
      [$, b]
    ), k = i.useCallback(
      () => N([T, C]),
      [N, T, C]
    );
    i.useEffect(() => {
      B && k();
    }, [B, k]);
    const { onOpenChange: A, triggerPointerDownPosRef: P } = w;
    i.useEffect(() => {
      if (C) {
        let _ = { x: 0, y: 0 };
        const W = (H) => {
          _ = {
            x: Math.abs(Math.round(H.pageX) - (P.current?.x ?? 0)),
            y: Math.abs(Math.round(H.pageY) - (P.current?.y ?? 0))
          };
        }, Z = (H) => {
          _.x <= 10 && _.y <= 10 ? H.preventDefault() : C.contains(H.target) || A(!1), document.removeEventListener("pointermove", W), P.current = null;
        };
        return P.current !== null && (document.addEventListener("pointermove", W), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", W), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [C, A, P]), i.useEffect(() => {
      const _ = () => A(!1);
      return window.addEventListener("blur", _), window.addEventListener("resize", _), () => {
        window.removeEventListener("blur", _), window.removeEventListener("resize", _);
      };
    }, [A]);
    const [K, X] = xs((_) => {
      const W = $().filter((U) => !U.disabled), Z = W.find((U) => U.ref.current === document.activeElement), H = ys(W, _, Z);
      H && setTimeout(() => H.ref.current.focus());
    }), le = i.useCallback(
      (_, W, Z) => {
        const H = !V.current && !Z;
        (w.value !== void 0 && w.value === W || H) && (F(_), H && (V.current = !0));
      },
      [w.value]
    ), we = i.useCallback(() => C?.focus(), [C]), re = i.useCallback(
      (_, W, Z) => {
        const H = !V.current && !Z;
        (w.value !== void 0 && w.value === W || H) && O(_);
      },
      [w.value]
    ), Ce = o === "popper" ? jn : ts, te = Ce === jn ? {
      side: c,
      sideOffset: l,
      align: u,
      alignOffset: f,
      arrowPadding: d,
      collisionBoundary: v,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: m,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ p.jsx(
      Jr,
      {
        scope: n,
        content: C,
        viewport: b,
        onViewportChange: M,
        itemRefCallback: le,
        selectedItem: T,
        onItemLeave: we,
        itemTextRefCallback: re,
        focusSelectedItem: k,
        selectedItemText: D,
        position: o,
        isPositioned: B,
        searchRef: K,
        children: /* @__PURE__ */ p.jsx(mt, { as: $d, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          pt,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (_) => {
              _.preventDefault();
            },
            onUnmountAutoFocus: R(r, (_) => {
              w.trigger?.focus({ preventScroll: !0 }), _.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              Xe,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (_) => _.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  Ce,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (_) => _.preventDefault(),
                    ...y,
                    ...te,
                    onPlaced: () => L(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: R(y.onKeyDown, (_) => {
                      const W = _.ctrlKey || _.altKey || _.metaKey;
                      if (_.key === "Tab" && _.preventDefault(), !W && _.key.length === 1 && X(_.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(_.key)) {
                        let H = $().filter((U) => !U.disabled).map((U) => U.ref.current);
                        if (["ArrowUp", "End"].includes(_.key) && (H = H.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(_.key)) {
                          const U = _.target, G = H.indexOf(U);
                          H = H.slice(G + 1);
                        }
                        setTimeout(() => N(H)), _.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
es.displayName = jd;
var Ld = "SelectItemAlignedPosition", ts = i.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, s = Me(Le, n), a = Te(Le, n), [c, l] = i.useState(null), [u, f] = i.useState(null), d = j(t, (E) => f(E)), v = nn(n), h = i.useRef(!1), x = i.useRef(!0), { viewport: m, selectedItem: g, selectedItemText: y, focusSelectedItem: w } = a, C = i.useCallback(() => {
    if (s.trigger && s.valueNode && c && u && m && g && y) {
      const E = s.trigger.getBoundingClientRect(), T = u.getBoundingClientRect(), F = s.valueNode.getBoundingClientRect(), D = y.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const U = D.left - T.left, G = F.left - U, se = E.left - G, Oe = E.width + se, vn = Math.max(Oe, T.width), hn = window.innerWidth - ue, gn = jt(G, [
          ue,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ue, hn - vn)
        ]);
        c.style.minWidth = Oe + "px", c.style.left = gn + "px";
      } else {
        const U = T.right - D.right, G = window.innerWidth - F.right - U, se = window.innerWidth - E.right - G, Oe = E.width + se, vn = Math.max(Oe, T.width), hn = window.innerWidth - ue, gn = jt(G, [
          ue,
          Math.max(ue, hn - vn)
        ]);
        c.style.minWidth = Oe + "px", c.style.right = gn + "px";
      }
      const O = v(), $ = window.innerHeight - ue * 2, B = m.scrollHeight, L = window.getComputedStyle(u), V = parseInt(L.borderTopWidth, 10), N = parseInt(L.paddingTop, 10), k = parseInt(L.borderBottomWidth, 10), A = parseInt(L.paddingBottom, 10), P = V + N + B + A + k, K = Math.min(g.offsetHeight * 5, P), X = window.getComputedStyle(m), le = parseInt(X.paddingTop, 10), we = parseInt(X.paddingBottom, 10), re = E.top + E.height / 2 - ue, Ce = $ - re, te = g.offsetHeight / 2, _ = g.offsetTop + te, W = V + N + _, Z = P - W;
      if (W <= re) {
        const U = O.length > 0 && g === O[O.length - 1].ref.current;
        c.style.bottom = "0px";
        const G = u.clientHeight - m.offsetTop - m.offsetHeight, se = Math.max(
          Ce,
          te + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (U ? we : 0) + G + k
        ), Oe = W + se;
        c.style.height = Oe + "px";
      } else {
        const U = O.length > 0 && g === O[0].ref.current;
        c.style.top = "0px";
        const se = Math.max(
          re,
          V + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (U ? le : 0) + te
        ) + Z;
        c.style.height = se + "px", m.scrollTop = W - re + m.offsetTop;
      }
      c.style.margin = `${ue}px 0`, c.style.minHeight = K + "px", c.style.maxHeight = $ + "px", o?.(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    v,
    s.trigger,
    s.valueNode,
    c,
    u,
    m,
    g,
    y,
    s.dir,
    o
  ]);
  z(() => C(), [C]);
  const [S, b] = i.useState();
  z(() => {
    u && b(window.getComputedStyle(u).zIndex);
  }, [u]);
  const M = i.useCallback(
    (E) => {
      E && x.current === !0 && (C(), w?.(), x.current = !1);
    },
    [C, w]
  );
  return /* @__PURE__ */ p.jsx(
    Fd,
    {
      scope: n,
      contentWrapper: c,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: M,
      children: /* @__PURE__ */ p.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ p.jsx(
            I.div,
            {
              ...r,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...r.style
              }
            }
          )
        }
      )
    }
  );
});
ts.displayName = Ld;
var kd = "SelectPopperPosition", jn = i.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: r = ue,
    ...s
  } = e, a = on(n);
  return /* @__PURE__ */ p.jsx(
    zt,
    {
      ...a,
      ...s,
      ref: t,
      align: o,
      collisionPadding: r,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
jn.displayName = kd;
var [Fd, ro] = Je(Le, {}), $n = "SelectViewport", ns = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e, s = Te($n, n), a = ro($n, n), c = j(t, s.onViewportChange), l = i.useRef(0);
    return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ p.jsx(tn.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
        I.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...r,
          ref: c,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...r.style
          },
          onScroll: R(r.onScroll, (u) => {
            const f = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: v } = a;
            if (v?.current && d) {
              const h = Math.abs(l.current - f.scrollTop);
              if (h > 0) {
                const x = window.innerHeight - ue * 2, m = parseFloat(d.style.minHeight), g = parseFloat(d.style.height), y = Math.max(m, g);
                if (y < x) {
                  const w = y + h, C = Math.min(x, w), S = w - C;
                  d.style.height = C + "px", d.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ns.displayName = $n;
var os = "SelectGroup", [Bd, Vd] = Je(os), rs = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = q();
    return /* @__PURE__ */ p.jsx(Bd, { scope: n, id: r, children: /* @__PURE__ */ p.jsx(I.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
  }
);
rs.displayName = os;
var ss = "SelectLabel", is = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = Vd(ss, n);
    return /* @__PURE__ */ p.jsx(I.div, { id: r.id, ...o, ref: t });
  }
);
is.displayName = ss;
var $t = "SelectItem", [Wd, as] = Je($t), cs = i.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: r = !1,
      textValue: s,
      ...a
    } = e, c = Me($t, n), l = Te($t, n), u = c.value === o, [f, d] = i.useState(s ?? ""), [v, h] = i.useState(!1), x = j(
      t,
      (w) => l.itemRefCallback?.(w, o, r)
    ), m = q(), g = i.useRef("touch"), y = () => {
      r || (c.onValueChange(o), c.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      Wd,
      {
        scope: n,
        value: o,
        disabled: r,
        textId: m,
        isSelected: u,
        onItemTextChange: i.useCallback((w) => {
          d((C) => C || (w?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          tn.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: r,
            textValue: f,
            children: /* @__PURE__ */ p.jsx(
              I.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": u && v,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                tabIndex: r ? void 0 : -1,
                ...a,
                ref: x,
                onFocus: R(a.onFocus, () => h(!0)),
                onBlur: R(a.onBlur, () => h(!1)),
                onClick: R(a.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: R(a.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: R(a.onPointerDown, (w) => {
                  g.current = w.pointerType;
                }),
                onPointerMove: R(a.onPointerMove, (w) => {
                  g.current = w.pointerType, r ? l.onItemLeave?.() : g.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: R(a.onPointerLeave, (w) => {
                  w.currentTarget === document.activeElement && l.onItemLeave?.();
                }),
                onKeyDown: R(a.onKeyDown, (w) => {
                  l.searchRef?.current !== "" && w.key === " " || (Ad.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
cs.displayName = $t;
var tt = "SelectItemText", ls = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...s } = e, a = Me(tt, n), c = Te(tt, n), l = as(tt, n), u = Nd(tt, n), [f, d] = i.useState(null), v = j(
      t,
      (y) => d(y),
      l.onItemTextChange,
      (y) => c.itemTextRefCallback?.(y, l.value, l.disabled)
    ), h = f?.textContent, x = i.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: g } = u;
    return z(() => (m(x), () => g(x)), [m, g, x]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(I.span, { id: l.textId, ...s, ref: v }),
      l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Vt.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
ls.displayName = tt;
var us = "SelectItemIndicator", ds = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return as(us, n).isSelected ? /* @__PURE__ */ p.jsx(I.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
ds.displayName = us;
var Ln = "SelectScrollUpButton", fs = i.forwardRef((e, t) => {
  const n = Te(Ln, e.__scopeSelect), o = ro(Ln, e.__scopeSelect), [r, s] = i.useState(!1), a = j(t, o.onScrollButtonChange);
  return z(() => {
    if (n.viewport && n.isPositioned) {
      let c = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ p.jsx(
    ms,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: l } = n;
        c && l && (c.scrollTop = c.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
fs.displayName = Ln;
var kn = "SelectScrollDownButton", ps = i.forwardRef((e, t) => {
  const n = Te(kn, e.__scopeSelect), o = ro(kn, e.__scopeSelect), [r, s] = i.useState(!1), a = j(t, o.onScrollButtonChange);
  return z(() => {
    if (n.viewport && n.isPositioned) {
      let c = function() {
        const u = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < u;
        s(f);
      };
      const l = n.viewport;
      return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ p.jsx(
    ms,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: l } = n;
        c && l && (c.scrollTop = c.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
ps.displayName = kn;
var ms = i.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, s = Te("SelectScrollButton", n), a = i.useRef(null), c = nn(n), l = i.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return i.useEffect(() => () => l(), [l]), z(() => {
    c().find((f) => f.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [c]), /* @__PURE__ */ p.jsx(
    I.div,
    {
      "aria-hidden": !0,
      ...r,
      ref: t,
      style: { flexShrink: 0, ...r.style },
      onPointerDown: R(r.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerMove: R(r.onPointerMove, () => {
        s.onItemLeave?.(), a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerLeave: R(r.onPointerLeave, () => {
        l();
      })
    }
  );
}), Hd = "SelectSeparator", vs = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ p.jsx(I.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
vs.displayName = Hd;
var Fn = "SelectArrow", Ud = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = on(n), s = Me(Fn, n), a = Te(Fn, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ p.jsx(Yt, { ...r, ...o, ref: t }) : null;
  }
);
Ud.displayName = Fn;
var Kd = "SelectBubbleInput", hs = i.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, o) => {
    const r = i.useRef(null), s = j(o, r), a = oo(t);
    return i.useEffect(() => {
      const c = r.current;
      if (!c) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (a !== t && f) {
        const d = new Event("change", { bubbles: !0 });
        f.call(c, t), c.dispatchEvent(d);
      }
    }, [a, t]), /* @__PURE__ */ p.jsx(
      I.select,
      {
        ...n,
        style: { ...Pr, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
hs.displayName = Kd;
function gs(e) {
  return e === "" || e === void 0;
}
function xs(e) {
  const t = ae(e), n = i.useRef(""), o = i.useRef(0), r = i.useCallback(
    (a) => {
      const c = n.current + a;
      t(c), function l(u) {
        n.current = u, window.clearTimeout(o.current), u !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
      }(c);
    },
    [t]
  ), s = i.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return i.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, s];
}
function ys(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = Gd(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find(
    (u) => u.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Gd(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var wv = Kr, Cv = zr, Sv = Xr, bv = Zr, Ev = qr, Rv = Qr, Pv = ns, _v = rs, Av = is, Mv = cs, Tv = ls, Iv = ds, Nv = fs, Ov = ps, Dv = vs, _n = "rovingFocusGroup.onEntryFocus", zd = { bubbles: !1, cancelable: !0 }, vt = "RovingFocusGroup", [Bn, ws, Yd] = qt(vt), [Xd, rn] = Q(
  vt,
  [Yd]
), [Zd, qd] = Xd(vt), Cs = i.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(Bn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(Bn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(Qd, { ...e, ref: t }) }) })
);
Cs.displayName = vt;
var Qd = i.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: r = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...d
  } = e, v = i.useRef(null), h = j(t, v), x = ft(s), [m, g] = ce({
    prop: a,
    defaultProp: c ?? null,
    onChange: l,
    caller: vt
  }), [y, w] = i.useState(!1), C = ae(u), S = ws(n), b = i.useRef(!1), [M, E] = i.useState(0);
  return i.useEffect(() => {
    const T = v.current;
    if (T)
      return T.addEventListener(_n, C), () => T.removeEventListener(_n, C);
  }, [C]), /* @__PURE__ */ p.jsx(
    Zd,
    {
      scope: n,
      orientation: o,
      dir: x,
      loop: r,
      currentTabStopId: m,
      onItemFocus: i.useCallback(
        (T) => g(T),
        [g]
      ),
      onItemShiftTab: i.useCallback(() => w(!0), []),
      onFocusableItemAdd: i.useCallback(
        () => E((T) => T + 1),
        []
      ),
      onFocusableItemRemove: i.useCallback(
        () => E((T) => T - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        I.div,
        {
          tabIndex: y || M === 0 ? -1 : 0,
          "data-orientation": o,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: R(e.onMouseDown, () => {
            b.current = !0;
          }),
          onFocus: R(e.onFocus, (T) => {
            const F = !b.current;
            if (T.target === T.currentTarget && F && !y) {
              const D = new CustomEvent(_n, zd);
              if (T.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const O = S().filter((N) => N.focusable), $ = O.find((N) => N.active), B = O.find((N) => N.id === m), V = [$, B, ...O].filter(
                  Boolean
                ).map((N) => N.ref.current);
                Es(V, f);
              }
            }
            b.current = !1;
          }),
          onBlur: R(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), Ss = "RovingFocusGroupItem", bs = i.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: r = !1,
      tabStopId: s,
      children: a,
      ...c
    } = e, l = q(), u = s || l, f = qd(Ss, n), d = f.currentTabStopId === u, v = ws(n), { onFocusableItemAdd: h, onFocusableItemRemove: x, currentTabStopId: m } = f;
    return i.useEffect(() => {
      if (o)
        return h(), () => x();
    }, [o, h, x]), /* @__PURE__ */ p.jsx(
      Bn.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: o,
        active: r,
        children: /* @__PURE__ */ p.jsx(
          I.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": f.orientation,
            ...c,
            ref: t,
            onMouseDown: R(e.onMouseDown, (g) => {
              o ? f.onItemFocus(u) : g.preventDefault();
            }),
            onFocus: R(e.onFocus, () => f.onItemFocus(u)),
            onKeyDown: R(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = tf(g, f.orientation, f.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let C = v().filter((S) => S.focusable).map((S) => S.ref.current);
                if (y === "last") C.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && C.reverse();
                  const S = C.indexOf(g.currentTarget);
                  C = f.loop ? nf(C, S + 1) : C.slice(S + 1);
                }
                setTimeout(() => Es(C));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: d, hasTabStop: m != null }) : a
          }
        )
      }
    );
  }
);
bs.displayName = Ss;
var Jd = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ef(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function tf(e, t, n) {
  const o = ef(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Jd[o];
}
function Es(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function nf(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Rs = Cs, Ps = bs;
// @__NO_SIDE_EFFECTS__
function of(e) {
  const t = /* @__PURE__ */ rf(e), n = i.forwardRef((o, r) => {
    const { children: s, ...a } = o, c = i.Children.toArray(s), l = c.find(af);
    if (l) {
      const u = l.props.children, f = c.map((d) => d === l ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function rf(e) {
  const t = i.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (i.isValidElement(r)) {
      const a = lf(r), c = cf(s, r.props);
      return r.type !== i.Fragment && (c.ref = o ? xe(o, a) : a), i.cloneElement(r, c);
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var sf = Symbol("radix.slottable");
function af(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === sf;
}
function cf(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...c) => {
      const l = s(...c);
      return r(...c), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function lf(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Vn = ["Enter", " "], uf = ["ArrowDown", "PageUp", "Home"], _s = ["ArrowUp", "PageDown", "End"], df = [...uf, ..._s], ff = {
  ltr: [...Vn, "ArrowRight"],
  rtl: [...Vn, "ArrowLeft"]
}, pf = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ht = "Menu", [it, mf, vf] = qt(ht), [Fe, sn] = Q(ht, [
  vf,
  Ae,
  rn
]), gt = Ae(), As = rn(), [Ms, Ie] = Fe(ht), [hf, xt] = Fe(ht), Ts = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: a = !0 } = e, c = gt(t), [l, u] = i.useState(null), f = i.useRef(!1), d = ae(s), v = ft(r);
  return i.useEffect(() => {
    const h = () => {
      f.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => f.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ p.jsx(lt, { ...c, children: /* @__PURE__ */ p.jsx(
    Ms,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ p.jsx(
        hf,
        {
          scope: t,
          onClose: i.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: f,
          dir: v,
          modal: a,
          children: o
        }
      )
    }
  ) });
};
Ts.displayName = ht;
var gf = "MenuAnchor", so = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = gt(n);
    return /* @__PURE__ */ p.jsx(ut, { ...r, ...o, ref: t });
  }
);
so.displayName = gf;
var io = "MenuPortal", [xf, Is] = Fe(io, {
  forceMount: void 0
}), Ns = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = Ie(io, t);
  return /* @__PURE__ */ p.jsx(xf, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx(ee, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Qe, { asChild: !0, container: r, children: o }) }) });
};
Ns.displayName = io;
var ie = "MenuContent", [yf, ao] = Fe(ie), Os = i.forwardRef(
  (e, t) => {
    const n = Is(ie, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = Ie(ie, e.__scopeMenu), a = xt(ie, e.__scopeMenu);
    return /* @__PURE__ */ p.jsx(it.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(ee, { present: o || s.open, children: /* @__PURE__ */ p.jsx(it.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ p.jsx(wf, { ...r, ref: t }) : /* @__PURE__ */ p.jsx(Cf, { ...r, ref: t }) }) }) });
  }
), wf = i.forwardRef(
  (e, t) => {
    const n = Ie(ie, e.__scopeMenu), o = i.useRef(null), r = j(t, o);
    return i.useEffect(() => {
      const s = o.current;
      if (s) return Jt(s);
    }, []), /* @__PURE__ */ p.jsx(
      co,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: R(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Cf = i.forwardRef((e, t) => {
  const n = Ie(ie, e.__scopeMenu);
  return /* @__PURE__ */ p.jsx(
    co,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Sf = /* @__PURE__ */ of("MenuContent.ScrollLock"), co = i.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: c,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      onFocusOutside: d,
      onInteractOutside: v,
      onDismiss: h,
      disableOutsideScroll: x,
      ...m
    } = e, g = Ie(ie, n), y = xt(ie, n), w = gt(n), C = As(n), S = mf(n), [b, M] = i.useState(null), E = i.useRef(null), T = j(t, E, g.onContentChange), F = i.useRef(0), D = i.useRef(""), O = i.useRef(0), $ = i.useRef(null), B = i.useRef("right"), L = i.useRef(0), V = x ? mt : i.Fragment, N = x ? { as: Sf, allowPinchZoom: !0 } : void 0, k = (P) => {
      const K = D.current + P, X = S().filter((_) => !_.disabled), le = document.activeElement, we = X.find((_) => _.ref.current === le)?.textValue, re = X.map((_) => _.textValue), Ce = Df(re, K, we), te = X.find((_) => _.textValue === Ce)?.ref.current;
      (function _(W) {
        D.current = W, window.clearTimeout(F.current), W !== "" && (F.current = window.setTimeout(() => _(""), 1e3));
      })(K), te && setTimeout(() => te.focus());
    };
    i.useEffect(() => () => window.clearTimeout(F.current), []), Qt();
    const A = i.useCallback((P) => B.current === $.current?.side && $f(P, $.current?.area), []);
    return /* @__PURE__ */ p.jsx(
      yf,
      {
        scope: n,
        searchRef: D,
        onItemEnter: i.useCallback(
          (P) => {
            A(P) && P.preventDefault();
          },
          [A]
        ),
        onItemLeave: i.useCallback(
          (P) => {
            A(P) || (E.current?.focus(), M(null));
          },
          [A]
        ),
        onTriggerLeave: i.useCallback(
          (P) => {
            A(P) && P.preventDefault();
          },
          [A]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: i.useCallback((P) => {
          $.current = P;
        }, []),
        children: /* @__PURE__ */ p.jsx(V, { ...N, children: /* @__PURE__ */ p.jsx(
          pt,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: R(s, (P) => {
              P.preventDefault(), E.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ p.jsx(
              Xe,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: d,
                onInteractOutside: v,
                onDismiss: h,
                children: /* @__PURE__ */ p.jsx(
                  Rs,
                  {
                    asChild: !0,
                    ...C,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: b,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: R(l, (P) => {
                      y.isUsingKeyboardRef.current || P.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p.jsx(
                      zt,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Zs(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...m,
                        ref: T,
                        style: { outline: "none", ...m.style },
                        onKeyDown: R(m.onKeyDown, (P) => {
                          const X = P.target.closest("[data-radix-menu-content]") === P.currentTarget, le = P.ctrlKey || P.altKey || P.metaKey, we = P.key.length === 1;
                          X && (P.key === "Tab" && P.preventDefault(), !le && we && k(P.key));
                          const re = E.current;
                          if (P.target !== re || !df.includes(P.key)) return;
                          P.preventDefault();
                          const te = S().filter((_) => !_.disabled).map((_) => _.ref.current);
                          _s.includes(P.key) && te.reverse(), Nf(te);
                        }),
                        onBlur: R(e.onBlur, (P) => {
                          P.currentTarget.contains(P.target) || (window.clearTimeout(F.current), D.current = "");
                        }),
                        onPointerMove: R(
                          e.onPointerMove,
                          at((P) => {
                            const K = P.target, X = L.current !== P.clientX;
                            if (P.currentTarget.contains(K) && X) {
                              const le = P.clientX > L.current ? "right" : "left";
                              B.current = le, L.current = P.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Os.displayName = ie;
var bf = "MenuGroup", lo = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ p.jsx(I.div, { role: "group", ...o, ref: t });
  }
);
lo.displayName = bf;
var Ef = "MenuLabel", Ds = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ p.jsx(I.div, { ...o, ref: t });
  }
);
Ds.displayName = Ef;
var Lt = "MenuItem", qo = "menu.itemSelect", an = i.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, s = i.useRef(null), a = xt(Lt, e.__scopeMenu), c = ao(Lt, e.__scopeMenu), l = j(t, s), u = i.useRef(!1), f = () => {
      const d = s.current;
      if (!n && d) {
        const v = new CustomEvent(qo, { bubbles: !0, cancelable: !0 });
        d.addEventListener(qo, (h) => o?.(h), { once: !0 }), nr(d, v), v.defaultPrevented ? u.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ p.jsx(
      js,
      {
        ...r,
        ref: l,
        disabled: n,
        onClick: R(e.onClick, f),
        onPointerDown: (d) => {
          e.onPointerDown?.(d), u.current = !0;
        },
        onPointerUp: R(e.onPointerUp, (d) => {
          u.current || d.currentTarget?.click();
        }),
        onKeyDown: R(e.onKeyDown, (d) => {
          const v = c.searchRef.current !== "";
          n || v && d.key === " " || Vn.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
an.displayName = Lt;
var js = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...s } = e, a = ao(Lt, n), c = As(n), l = i.useRef(null), u = j(t, l), [f, d] = i.useState(!1), [v, h] = i.useState("");
    return i.useEffect(() => {
      const x = l.current;
      x && h((x.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ p.jsx(
      it.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? v,
        children: /* @__PURE__ */ p.jsx(Ps, { asChild: !0, ...c, focusable: !o, children: /* @__PURE__ */ p.jsx(
          I.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: u,
            onPointerMove: R(
              e.onPointerMove,
              at((x) => {
                o ? a.onItemLeave(x) : (a.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: R(
              e.onPointerLeave,
              at((x) => a.onItemLeave(x))
            ),
            onFocus: R(e.onFocus, () => d(!0)),
            onBlur: R(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), Rf = "MenuCheckboxItem", $s = i.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ p.jsx(Vs, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ p.jsx(
      an,
      {
        role: "menuitemcheckbox",
        "aria-checked": kt(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": po(n),
        onSelect: R(
          r.onSelect,
          () => o?.(kt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
$s.displayName = Rf;
var Ls = "MenuRadioGroup", [Pf, _f] = Fe(
  Ls,
  { value: void 0, onValueChange: () => {
  } }
), ks = i.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, s = ae(o);
    return /* @__PURE__ */ p.jsx(Pf, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ p.jsx(lo, { ...r, ref: t }) });
  }
);
ks.displayName = Ls;
var Fs = "MenuRadioItem", Bs = i.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = _f(Fs, e.__scopeMenu), s = n === r.value;
    return /* @__PURE__ */ p.jsx(Vs, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ p.jsx(
      an,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: t,
        "data-state": po(s),
        onSelect: R(
          o.onSelect,
          () => r.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Bs.displayName = Fs;
var uo = "MenuItemIndicator", [Vs, Af] = Fe(
  uo,
  { checked: !1 }
), Ws = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, s = Af(uo, n);
    return /* @__PURE__ */ p.jsx(
      ee,
      {
        present: o || kt(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ p.jsx(
          I.span,
          {
            ...r,
            ref: t,
            "data-state": po(s.checked)
          }
        )
      }
    );
  }
);
Ws.displayName = uo;
var Mf = "MenuSeparator", Hs = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ p.jsx(
      I.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
Hs.displayName = Mf;
var Tf = "MenuArrow", Us = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = gt(n);
    return /* @__PURE__ */ p.jsx(Yt, { ...r, ...o, ref: t });
  }
);
Us.displayName = Tf;
var fo = "MenuSub", [If, Ks] = Fe(fo), Gs = (e) => {
  const { __scopeMenu: t, children: n, open: o = !1, onOpenChange: r } = e, s = Ie(fo, t), a = gt(t), [c, l] = i.useState(null), [u, f] = i.useState(null), d = ae(r);
  return i.useEffect(() => (s.open === !1 && d(!1), () => d(!1)), [s.open, d]), /* @__PURE__ */ p.jsx(lt, { ...a, children: /* @__PURE__ */ p.jsx(
    Ms,
    {
      scope: t,
      open: o,
      onOpenChange: d,
      content: u,
      onContentChange: f,
      children: /* @__PURE__ */ p.jsx(
        If,
        {
          scope: t,
          contentId: q(),
          triggerId: q(),
          trigger: c,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
Gs.displayName = fo;
var nt = "MenuSubTrigger", zs = i.forwardRef(
  (e, t) => {
    const n = Ie(nt, e.__scopeMenu), o = xt(nt, e.__scopeMenu), r = Ks(nt, e.__scopeMenu), s = ao(nt, e.__scopeMenu), a = i.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = s, u = { __scopeMenu: e.__scopeMenu }, f = i.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return i.useEffect(() => f, [f]), i.useEffect(() => {
      const d = c.current;
      return () => {
        window.clearTimeout(d), l(null);
      };
    }, [c, l]), /* @__PURE__ */ p.jsx(so, { asChild: !0, ...u, children: /* @__PURE__ */ p.jsx(
      js,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": Zs(n.open),
        ...e,
        ref: xe(t, r.onTriggerChange),
        onClick: (d) => {
          e.onClick?.(d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: R(
          e.onPointerMove,
          at((d) => {
            s.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: R(
          e.onPointerLeave,
          at((d) => {
            f();
            const v = n.content?.getBoundingClientRect();
            if (v) {
              const h = n.content?.dataset.side, x = h === "right", m = x ? -5 : 5, g = v[x ? "left" : "right"], y = v[x ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + m, y: d.clientY },
                  { x: g, y: v.top },
                  { x: y, y: v.top },
                  { x: y, y: v.bottom },
                  { x: g, y: v.bottom }
                ],
                side: h
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(d), d.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: R(e.onKeyDown, (d) => {
          const v = s.searchRef.current !== "";
          e.disabled || v && d.key === " " || ff[o.dir].includes(d.key) && (n.onOpenChange(!0), n.content?.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
zs.displayName = nt;
var Ys = "MenuSubContent", Xs = i.forwardRef(
  (e, t) => {
    const n = Is(ie, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = Ie(ie, e.__scopeMenu), a = xt(ie, e.__scopeMenu), c = Ks(Ys, e.__scopeMenu), l = i.useRef(null), u = j(t, l);
    return /* @__PURE__ */ p.jsx(it.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(ee, { present: o || s.open, children: /* @__PURE__ */ p.jsx(it.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(
      co,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...r,
        ref: u,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          a.isUsingKeyboardRef.current && l.current?.focus(), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: R(e.onFocusOutside, (f) => {
          f.target !== c.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: R(e.onEscapeKeyDown, (f) => {
          a.onClose(), f.preventDefault();
        }),
        onKeyDown: R(e.onKeyDown, (f) => {
          const d = f.currentTarget.contains(f.target), v = pf[a.dir].includes(f.key);
          d && v && (s.onOpenChange(!1), c.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Xs.displayName = Ys;
function Zs(e) {
  return e ? "open" : "closed";
}
function kt(e) {
  return e === "indeterminate";
}
function po(e) {
  return kt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Nf(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Of(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Df(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = Of(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function jf(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const c = t[s], l = t[a], u = c.x, f = c.y, d = l.x, v = l.y;
    f > o != v > o && n < (d - u) * (o - f) / (v - f) + u && (r = !r);
  }
  return r;
}
function $f(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return jf(n, t);
}
function at(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var qs = Ts, Qs = so, Js = Ns, ei = Os, ti = lo, ni = Ds, oi = an, ri = $s, si = ks, ii = Bs, ai = Ws, ci = Hs, li = Us, Lf = Gs, ui = zs, di = Xs, cn = "DropdownMenu", [kf] = Q(
  cn,
  [sn]
), J = sn(), [Ff, fi] = kf(cn), pi = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: s,
    onOpenChange: a,
    modal: c = !0
  } = e, l = J(t), u = i.useRef(null), [f, d] = ce({
    prop: r,
    defaultProp: s ?? !1,
    onChange: a,
    caller: cn
  });
  return /* @__PURE__ */ p.jsx(
    Ff,
    {
      scope: t,
      triggerId: q(),
      triggerRef: u,
      contentId: q(),
      open: f,
      onOpenChange: d,
      onOpenToggle: i.useCallback(() => d((v) => !v), [d]),
      modal: c,
      children: /* @__PURE__ */ p.jsx(qs, { ...l, open: f, onOpenChange: d, dir: o, modal: c, children: n })
    }
  );
};
pi.displayName = cn;
var mi = "DropdownMenuTrigger", vi = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, s = fi(mi, n), a = J(n);
    return /* @__PURE__ */ p.jsx(Qs, { asChild: !0, ...a, children: /* @__PURE__ */ p.jsx(
      I.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: xe(t, s.triggerRef),
        onPointerDown: R(e.onPointerDown, (c) => {
          !o && c.button === 0 && c.ctrlKey === !1 && (s.onOpenToggle(), s.open || c.preventDefault());
        }),
        onKeyDown: R(e.onKeyDown, (c) => {
          o || (["Enter", " "].includes(c.key) && s.onOpenToggle(), c.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
vi.displayName = mi;
var Bf = "DropdownMenuPortal", hi = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = J(t);
  return /* @__PURE__ */ p.jsx(Js, { ...o, ...n });
};
hi.displayName = Bf;
var gi = "DropdownMenuContent", xi = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = fi(gi, n), s = J(n), a = i.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      ei,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...s,
        ...o,
        ref: t,
        onCloseAutoFocus: R(e.onCloseAutoFocus, (c) => {
          a.current || r.triggerRef.current?.focus(), a.current = !1, c.preventDefault();
        }),
        onInteractOutside: R(e.onInteractOutside, (c) => {
          const l = c.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || u;
          (!r.modal || f) && (a.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
xi.displayName = gi;
var Vf = "DropdownMenuGroup", Wf = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
    return /* @__PURE__ */ p.jsx(ti, { ...r, ...o, ref: t });
  }
);
Wf.displayName = Vf;
var Hf = "DropdownMenuLabel", yi = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
    return /* @__PURE__ */ p.jsx(ni, { ...r, ...o, ref: t });
  }
);
yi.displayName = Hf;
var Uf = "DropdownMenuItem", wi = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
    return /* @__PURE__ */ p.jsx(oi, { ...r, ...o, ref: t });
  }
);
wi.displayName = Uf;
var Kf = "DropdownMenuCheckboxItem", Gf = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ p.jsx(ri, { ...r, ...o, ref: t });
});
Gf.displayName = Kf;
var zf = "DropdownMenuRadioGroup", Yf = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ p.jsx(si, { ...r, ...o, ref: t });
});
Yf.displayName = zf;
var Xf = "DropdownMenuRadioItem", Zf = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ p.jsx(ii, { ...r, ...o, ref: t });
});
Zf.displayName = Xf;
var qf = "DropdownMenuItemIndicator", Qf = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ p.jsx(ai, { ...r, ...o, ref: t });
});
Qf.displayName = qf;
var Jf = "DropdownMenuSeparator", Ci = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ p.jsx(ci, { ...r, ...o, ref: t });
});
Ci.displayName = Jf;
var ep = "DropdownMenuArrow", tp = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
    return /* @__PURE__ */ p.jsx(li, { ...r, ...o, ref: t });
  }
);
tp.displayName = ep;
var np = "DropdownMenuSubTrigger", op = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ p.jsx(ui, { ...r, ...o, ref: t });
});
op.displayName = np;
var rp = "DropdownMenuSubContent", sp = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ p.jsx(
    di,
    {
      ...r,
      ...o,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
sp.displayName = rp;
var jv = pi, $v = vi, Lv = hi, kv = xi, Fv = yi, Bv = wi, Vv = Ci, Si = ["PageUp", "PageDown"], bi = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ei = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, et = "Slider", [Wn, ip, ap] = qt(et), [Ri] = Q(et, [
  ap
]), [cp, ln] = Ri(et), Pi = i.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: o = 0,
      max: r = 100,
      step: s = 1,
      orientation: a = "horizontal",
      disabled: c = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: u = [o],
      value: f,
      onValueChange: d = () => {
      },
      onValueCommit: v = () => {
      },
      inverted: h = !1,
      form: x,
      ...m
    } = e, g = i.useRef(/* @__PURE__ */ new Set()), y = i.useRef(0), C = a === "horizontal" ? lp : up, [S = [], b] = ce({
      prop: f,
      defaultProp: u,
      onChange: (O) => {
        [...g.current][y.current]?.focus(), d(O);
      }
    }), M = i.useRef(S);
    function E(O) {
      const $ = vp(S, O);
      D(O, $);
    }
    function T(O) {
      D(O, y.current);
    }
    function F() {
      const O = M.current[y.current];
      S[y.current] !== O && v(S);
    }
    function D(O, $, { commit: B } = { commit: !1 }) {
      const L = yp(s), V = wp(Math.round((O - o) / s) * s + o, L), N = jt(V, [o, r]);
      b((k = []) => {
        const A = pp(k, N, $);
        if (xp(A, l * s)) {
          y.current = A.indexOf(N);
          const P = String(A) !== String(k);
          return P && B && v(A), P ? A : k;
        } else
          return k;
      });
    }
    return /* @__PURE__ */ p.jsx(
      cp,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: c,
        min: o,
        max: r,
        valueIndexToChangeRef: y,
        thumbs: g.current,
        values: S,
        orientation: a,
        form: x,
        children: /* @__PURE__ */ p.jsx(Wn.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ p.jsx(Wn.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ p.jsx(
          C,
          {
            "aria-disabled": c,
            "data-disabled": c ? "" : void 0,
            ...m,
            ref: t,
            onPointerDown: R(m.onPointerDown, () => {
              c || (M.current = S);
            }),
            min: o,
            max: r,
            inverted: h,
            onSlideStart: c ? void 0 : E,
            onSlideMove: c ? void 0 : T,
            onSlideEnd: c ? void 0 : F,
            onHomeKeyDown: () => !c && D(o, 0, { commit: !0 }),
            onEndKeyDown: () => !c && D(r, S.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: O, direction: $ }) => {
              if (!c) {
                const V = Si.includes(O.key) || O.shiftKey && bi.includes(O.key) ? 10 : 1, N = y.current, k = S[N], A = s * V * $;
                D(k + A, N, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Pi.displayName = et;
var [_i, Ai] = Ri(et, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), lp = i.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: o,
      dir: r,
      inverted: s,
      onSlideStart: a,
      onSlideMove: c,
      onSlideEnd: l,
      onStepKeyDown: u,
      ...f
    } = e, [d, v] = i.useState(null), h = j(t, (C) => v(C)), x = i.useRef(void 0), m = ft(r), g = m === "ltr", y = g && !s || !g && s;
    function w(C) {
      const S = x.current || d.getBoundingClientRect(), b = [0, S.width], E = mo(b, y ? [n, o] : [o, n]);
      return x.current = S, E(C - S.left);
    }
    return /* @__PURE__ */ p.jsx(
      _i,
      {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ p.jsx(
          Mi,
          {
            dir: m,
            "data-orientation": "horizontal",
            ...f,
            ref: h,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (C) => {
              const S = w(C.clientX);
              a?.(S);
            },
            onSlideMove: (C) => {
              const S = w(C.clientX);
              c?.(S);
            },
            onSlideEnd: () => {
              x.current = void 0, l?.();
            },
            onStepKeyDown: (C) => {
              const b = Ei[y ? "from-left" : "from-right"].includes(C.key);
              u?.({ event: C, direction: b ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), up = i.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: o,
      inverted: r,
      onSlideStart: s,
      onSlideMove: a,
      onSlideEnd: c,
      onStepKeyDown: l,
      ...u
    } = e, f = i.useRef(null), d = j(t, f), v = i.useRef(void 0), h = !r;
    function x(m) {
      const g = v.current || f.current.getBoundingClientRect(), y = [0, g.height], C = mo(y, h ? [o, n] : [n, o]);
      return v.current = g, C(m - g.top);
    }
    return /* @__PURE__ */ p.jsx(
      _i,
      {
        scope: e.__scopeSlider,
        startEdge: h ? "bottom" : "top",
        endEdge: h ? "top" : "bottom",
        size: "height",
        direction: h ? 1 : -1,
        children: /* @__PURE__ */ p.jsx(
          Mi,
          {
            "data-orientation": "vertical",
            ...u,
            ref: d,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (m) => {
              const g = x(m.clientY);
              s?.(g);
            },
            onSlideMove: (m) => {
              const g = x(m.clientY);
              a?.(g);
            },
            onSlideEnd: () => {
              v.current = void 0, c?.();
            },
            onStepKeyDown: (m) => {
              const y = Ei[h ? "from-bottom" : "from-top"].includes(m.key);
              l?.({ event: m, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Mi = i.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: o,
      onSlideMove: r,
      onSlideEnd: s,
      onHomeKeyDown: a,
      onEndKeyDown: c,
      onStepKeyDown: l,
      ...u
    } = e, f = ln(et, n);
    return /* @__PURE__ */ p.jsx(
      I.span,
      {
        ...u,
        ref: t,
        onKeyDown: R(e.onKeyDown, (d) => {
          d.key === "Home" ? (a(d), d.preventDefault()) : d.key === "End" ? (c(d), d.preventDefault()) : Si.concat(bi).includes(d.key) && (l(d), d.preventDefault());
        }),
        onPointerDown: R(e.onPointerDown, (d) => {
          const v = d.target;
          v.setPointerCapture(d.pointerId), d.preventDefault(), f.thumbs.has(v) ? v.focus() : o(d);
        }),
        onPointerMove: R(e.onPointerMove, (d) => {
          d.target.hasPointerCapture(d.pointerId) && r(d);
        }),
        onPointerUp: R(e.onPointerUp, (d) => {
          const v = d.target;
          v.hasPointerCapture(d.pointerId) && (v.releasePointerCapture(d.pointerId), s(d));
        })
      }
    );
  }
), Ti = "SliderTrack", Ii = i.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...o } = e, r = ln(Ti, n);
    return /* @__PURE__ */ p.jsx(
      I.span,
      {
        "data-disabled": r.disabled ? "" : void 0,
        "data-orientation": r.orientation,
        ...o,
        ref: t
      }
    );
  }
);
Ii.displayName = Ti;
var Hn = "SliderRange", Ni = i.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...o } = e, r = ln(Hn, n), s = Ai(Hn, n), a = i.useRef(null), c = j(t, a), l = r.values.length, u = r.values.map(
      (v) => ji(v, r.min, r.max)
    ), f = l > 1 ? Math.min(...u) : 0, d = 100 - Math.max(...u);
    return /* @__PURE__ */ p.jsx(
      I.span,
      {
        "data-orientation": r.orientation,
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: c,
        style: {
          ...e.style,
          [s.startEdge]: f + "%",
          [s.endEdge]: d + "%"
        }
      }
    );
  }
);
Ni.displayName = Hn;
var Un = "SliderThumb", Oi = i.forwardRef(
  (e, t) => {
    const n = ip(e.__scopeSlider), [o, r] = i.useState(null), s = j(t, (c) => r(c)), a = i.useMemo(
      () => o ? n().findIndex((c) => c.ref.current === o) : -1,
      [n, o]
    );
    return /* @__PURE__ */ p.jsx(dp, { ...e, ref: s, index: a });
  }
), dp = i.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: o, name: r, ...s } = e, a = ln(Un, n), c = Ai(Un, n), [l, u] = i.useState(null), f = j(t, (w) => u(w)), d = l ? a.form || !!l.closest("form") : !0, v = Qn(l), h = a.values[o], x = h === void 0 ? 0 : ji(h, a.min, a.max), m = mp(o, a.values.length), g = v?.[c.size], y = g ? hp(g, x, c.direction) : 0;
    return i.useEffect(() => {
      if (l)
        return a.thumbs.add(l), () => {
          a.thumbs.delete(l);
        };
    }, [l, a.thumbs]), /* @__PURE__ */ p.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [c.startEdge]: `calc(${x}% + ${y}px)`
        },
        children: [
          /* @__PURE__ */ p.jsx(Wn.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ p.jsx(
            I.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || m,
              "aria-valuemin": a.min,
              "aria-valuenow": h,
              "aria-valuemax": a.max,
              "aria-orientation": a.orientation,
              "data-orientation": a.orientation,
              "data-disabled": a.disabled ? "" : void 0,
              tabIndex: a.disabled ? void 0 : 0,
              ...s,
              ref: f,
              style: h === void 0 ? { display: "none" } : e.style,
              onFocus: R(e.onFocus, () => {
                a.valueIndexToChangeRef.current = o;
              })
            }
          ) }),
          d && /* @__PURE__ */ p.jsx(
            Di,
            {
              name: r ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: h
            },
            o
          )
        ]
      }
    );
  }
);
Oi.displayName = Un;
var fp = "RadioBubbleInput", Di = i.forwardRef(
  ({ __scopeSlider: e, value: t, ...n }, o) => {
    const r = i.useRef(null), s = j(r, o), a = oo(t);
    return i.useEffect(() => {
      const c = r.current;
      if (!c) return;
      const l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "value").set;
      if (a !== t && f) {
        const d = new Event("input", { bubbles: !0 });
        f.call(c, t), c.dispatchEvent(d);
      }
    }, [a, t]), /* @__PURE__ */ p.jsx(
      I.input,
      {
        style: { display: "none" },
        ...n,
        ref: s,
        defaultValue: t
      }
    );
  }
);
Di.displayName = fp;
function pp(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((r, s) => r - s);
}
function ji(e, t, n) {
  const s = 100 / (n - t) * (e - t);
  return jt(s, [0, 100]);
}
function mp(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function vp(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((r) => Math.abs(r - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function hp(e, t, n) {
  const o = e / 2, s = mo([0, 50], [0, o]);
  return (o - s(t) * n) * n;
}
function gp(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function xp(e, t) {
  if (t > 0) {
    const n = gp(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function mo(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function yp(e) {
  return (String(e).split(".")[1] || "").length;
}
function wp(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var Wv = Pi, Hv = Ii, Uv = Ni, Kv = Oi, Cp = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Sp = Cp.reduce((e, t) => {
  const n = /* @__PURE__ */ Wt(`Primitive.${t}`), o = i.forwardRef((r, s) => {
    const { asChild: a, ...c } = r, l = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...c, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), bp = "Separator", Qo = "horizontal", Ep = ["horizontal", "vertical"], $i = i.forwardRef((e, t) => {
  const { decorative: n, orientation: o = Qo, ...r } = e, s = Rp(o) ? o : Qo, c = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ p.jsx(
    Sp.div,
    {
      "data-orientation": s,
      ...c,
      ...r,
      ref: t
    }
  );
});
$i.displayName = bp;
function Rp(e) {
  return Ep.includes(e);
}
var Gv = $i, vo = "ContextMenu", [Pp] = Q(vo, [
  sn
]), Y = sn(), [_p, Li] = Pp(vo), ki = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: o, dir: r, modal: s = !0 } = e, [a, c] = i.useState(!1), l = Y(t), u = ae(o), f = i.useCallback(
    (d) => {
      c(d), u(d);
    },
    [u]
  );
  return /* @__PURE__ */ p.jsx(
    _p,
    {
      scope: t,
      open: a,
      onOpenChange: f,
      modal: s,
      children: /* @__PURE__ */ p.jsx(
        qs,
        {
          ...l,
          dir: r,
          open: a,
          onOpenChange: f,
          modal: s,
          children: n
        }
      )
    }
  );
};
ki.displayName = vo;
var Fi = "ContextMenuTrigger", Bi = i.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: o = !1, ...r } = e, s = Li(Fi, n), a = Y(n), c = i.useRef({ x: 0, y: 0 }), l = i.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...c.current })
    }), u = i.useRef(0), f = i.useCallback(
      () => window.clearTimeout(u.current),
      []
    ), d = (v) => {
      c.current = { x: v.clientX, y: v.clientY }, s.onOpenChange(!0);
    };
    return i.useEffect(() => f, [f]), i.useEffect(() => void (o && f()), [o, f]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(Qs, { ...a, virtualRef: l }),
      /* @__PURE__ */ p.jsx(
        I.span,
        {
          "data-state": s.open ? "open" : "closed",
          "data-disabled": o ? "" : void 0,
          ...r,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: o ? e.onContextMenu : R(e.onContextMenu, (v) => {
            f(), d(v), v.preventDefault();
          }),
          onPointerDown: o ? e.onPointerDown : R(
            e.onPointerDown,
            Pt((v) => {
              f(), u.current = window.setTimeout(() => d(v), 700);
            })
          ),
          onPointerMove: o ? e.onPointerMove : R(e.onPointerMove, Pt(f)),
          onPointerCancel: o ? e.onPointerCancel : R(e.onPointerCancel, Pt(f)),
          onPointerUp: o ? e.onPointerUp : R(e.onPointerUp, Pt(f))
        }
      )
    ] });
  }
);
Bi.displayName = Fi;
var Ap = "ContextMenuPortal", Vi = (e) => {
  const { __scopeContextMenu: t, ...n } = e, o = Y(t);
  return /* @__PURE__ */ p.jsx(Js, { ...o, ...n });
};
Vi.displayName = Ap;
var Wi = "ContextMenuContent", Hi = i.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...o } = e, r = Li(Wi, n), s = Y(n), a = i.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      ei,
      {
        ...s,
        ...o,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (c) => {
          e.onCloseAutoFocus?.(c), !c.defaultPrevented && a.current && c.preventDefault(), a.current = !1;
        },
        onInteractOutside: (c) => {
          e.onInteractOutside?.(c), !c.defaultPrevented && !r.modal && (a.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Hi.displayName = Wi;
var Mp = "ContextMenuGroup", Tp = i.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...o } = e, r = Y(n);
    return /* @__PURE__ */ p.jsx(ti, { ...r, ...o, ref: t });
  }
);
Tp.displayName = Mp;
var Ip = "ContextMenuLabel", Np = i.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...o } = e, r = Y(n);
    return /* @__PURE__ */ p.jsx(ni, { ...r, ...o, ref: t });
  }
);
Np.displayName = Ip;
var Op = "ContextMenuItem", Ui = i.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...o } = e, r = Y(n);
    return /* @__PURE__ */ p.jsx(oi, { ...r, ...o, ref: t });
  }
);
Ui.displayName = Op;
var Dp = "ContextMenuCheckboxItem", jp = i.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = Y(n);
  return /* @__PURE__ */ p.jsx(ri, { ...r, ...o, ref: t });
});
jp.displayName = Dp;
var $p = "ContextMenuRadioGroup", Lp = i.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = Y(n);
  return /* @__PURE__ */ p.jsx(si, { ...r, ...o, ref: t });
});
Lp.displayName = $p;
var kp = "ContextMenuRadioItem", Fp = i.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = Y(n);
  return /* @__PURE__ */ p.jsx(ii, { ...r, ...o, ref: t });
});
Fp.displayName = kp;
var Bp = "ContextMenuItemIndicator", Vp = i.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = Y(n);
  return /* @__PURE__ */ p.jsx(ai, { ...r, ...o, ref: t });
});
Vp.displayName = Bp;
var Wp = "ContextMenuSeparator", Ki = i.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = Y(n);
  return /* @__PURE__ */ p.jsx(ci, { ...r, ...o, ref: t });
});
Ki.displayName = Wp;
var Hp = "ContextMenuArrow", Up = i.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...o } = e, r = Y(n);
    return /* @__PURE__ */ p.jsx(li, { ...r, ...o, ref: t });
  }
);
Up.displayName = Hp;
var Gi = "ContextMenuSub", zi = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: o, open: r, defaultOpen: s } = e, a = Y(t), [c, l] = ce({
    prop: r,
    defaultProp: s ?? !1,
    onChange: o,
    caller: Gi
  });
  return /* @__PURE__ */ p.jsx(Lf, { ...a, open: c, onOpenChange: l, children: n });
};
zi.displayName = Gi;
var Kp = "ContextMenuSubTrigger", Yi = i.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = Y(n);
  return /* @__PURE__ */ p.jsx(ui, { ...r, ...o, ref: t });
});
Yi.displayName = Kp;
var Gp = "ContextMenuSubContent", Xi = i.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = Y(n);
  return /* @__PURE__ */ p.jsx(
    di,
    {
      ...r,
      ...o,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Xi.displayName = Gp;
function Pt(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var zv = ki, Yv = Bi, Xv = Vi, Zv = Hi, qv = Ui, Qv = Ki, Jv = zi, eh = Yi, th = Xi;
// @__NO_SIDE_EFFECTS__
function zp(e) {
  const t = /* @__PURE__ */ Yp(e), n = i.forwardRef((o, r) => {
    const { children: s, ...a } = o, c = i.Children.toArray(s), l = c.find(Zp);
    if (l) {
      const u = l.props.children, f = c.map((d) => d === l ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Yp(e) {
  const t = i.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (i.isValidElement(r)) {
      const a = Qp(r), c = qp(s, r.props);
      return r.type !== i.Fragment && (c.ref = o ? xe(o, a) : a), i.cloneElement(r, c);
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Xp = Symbol("radix.slottable");
function Zp(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Xp;
}
function qp(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...c) => {
      const l = s(...c);
      return r(...c), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Qp(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var un = "Dialog", [Zi, qi] = Q(un), [Jp, pe] = Zi(un), Qi = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: a = !0
  } = e, c = i.useRef(null), l = i.useRef(null), [u, f] = ce({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: un
  });
  return /* @__PURE__ */ p.jsx(
    Jp,
    {
      scope: t,
      triggerRef: c,
      contentRef: l,
      contentId: q(),
      titleId: q(),
      descriptionId: q(),
      open: u,
      onOpenChange: f,
      onOpenToggle: i.useCallback(() => f((d) => !d), [f]),
      modal: a,
      children: n
    }
  );
};
Qi.displayName = un;
var Ji = "DialogTrigger", ea = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = pe(Ji, n), s = j(t, r.triggerRef);
    return /* @__PURE__ */ p.jsx(
      I.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": xo(r.open),
        ...o,
        ref: s,
        onClick: R(e.onClick, r.onOpenToggle)
      }
    );
  }
);
ea.displayName = Ji;
var ho = "DialogPortal", [em, ta] = Zi(ho, {
  forceMount: void 0
}), na = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = pe(ho, t);
  return /* @__PURE__ */ p.jsx(em, { scope: t, forceMount: n, children: i.Children.map(o, (a) => /* @__PURE__ */ p.jsx(ee, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Qe, { asChild: !0, container: r, children: a }) })) });
};
na.displayName = ho;
var Ft = "DialogOverlay", oa = i.forwardRef(
  (e, t) => {
    const n = ta(Ft, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = pe(Ft, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(ee, { present: o || s.open, children: /* @__PURE__ */ p.jsx(nm, { ...r, ref: t }) }) : null;
  }
);
oa.displayName = Ft;
var tm = /* @__PURE__ */ zp("DialogOverlay.RemoveScroll"), nm = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = pe(Ft, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(mt, { as: tm, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ p.jsx(
        I.div,
        {
          "data-state": xo(r.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), ke = "DialogContent", ra = i.forwardRef(
  (e, t) => {
    const n = ta(ke, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = pe(ke, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(ee, { present: o || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(om, { ...r, ref: t }) : /* @__PURE__ */ p.jsx(rm, { ...r, ref: t }) });
  }
);
ra.displayName = ke;
var om = i.forwardRef(
  (e, t) => {
    const n = pe(ke, e.__scopeDialog), o = i.useRef(null), r = j(t, n.contentRef, o);
    return i.useEffect(() => {
      const s = o.current;
      if (s) return Jt(s);
    }, []), /* @__PURE__ */ p.jsx(
      sa,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: R(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: R(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, c = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || c) && s.preventDefault();
        }),
        onFocusOutside: R(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), rm = i.forwardRef(
  (e, t) => {
    const n = pe(ke, e.__scopeDialog), o = i.useRef(!1), r = i.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      sa,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (o.current || n.triggerRef.current?.focus(), s.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const a = s.target;
          n.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault();
        }
      }
    );
  }
), sa = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: s, ...a } = e, c = pe(ke, n), l = i.useRef(null), u = j(t, l);
    return Qt(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        pt,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            Xe,
            {
              role: "dialog",
              id: c.contentId,
              "aria-describedby": c.descriptionId,
              "aria-labelledby": c.titleId,
              "data-state": xo(c.open),
              ...a,
              ref: u,
              onDismiss: () => c.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(im, { titleId: c.titleId }),
        /* @__PURE__ */ p.jsx(cm, { contentRef: l, descriptionId: c.descriptionId })
      ] })
    ] });
  }
), go = "DialogTitle", ia = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = pe(go, n);
    return /* @__PURE__ */ p.jsx(I.h2, { id: r.titleId, ...o, ref: t });
  }
);
ia.displayName = go;
var aa = "DialogDescription", ca = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = pe(aa, n);
    return /* @__PURE__ */ p.jsx(I.p, { id: r.descriptionId, ...o, ref: t });
  }
);
ca.displayName = aa;
var la = "DialogClose", ua = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = pe(la, n);
    return /* @__PURE__ */ p.jsx(
      I.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: R(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
ua.displayName = la;
function xo(e) {
  return e ? "open" : "closed";
}
var da = "DialogTitleWarning", [sm, fa] = pc(da, {
  contentName: ke,
  titleName: go,
  docsSlug: "dialog"
}), im = ({ titleId: e }) => {
  const t = fa(da), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return i.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, am = "DialogDescriptionWarning", cm = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${fa(am).contentName}}.`;
  return i.useEffect(() => {
    const r = e.current?.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, lm = Qi, um = ea, dm = na, fm = oa, pm = ra, mm = ia, vm = ca, pa = ua, hm = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function gm(e) {
  const t = ({ children: n }) => /* @__PURE__ */ p.jsx(p.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = hm, t;
}
var ma = "AlertDialog", [xm] = Q(ma, [
  qi
]), Ee = qi(), va = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = Ee(t);
  return /* @__PURE__ */ p.jsx(lm, { ...o, ...n, modal: !0 });
};
va.displayName = ma;
var ym = "AlertDialogTrigger", wm = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Ee(n);
    return /* @__PURE__ */ p.jsx(um, { ...r, ...o, ref: t });
  }
);
wm.displayName = ym;
var Cm = "AlertDialogPortal", ha = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = Ee(t);
  return /* @__PURE__ */ p.jsx(dm, { ...o, ...n });
};
ha.displayName = Cm;
var Sm = "AlertDialogOverlay", ga = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Ee(n);
    return /* @__PURE__ */ p.jsx(fm, { ...r, ...o, ref: t });
  }
);
ga.displayName = Sm;
var Ke = "AlertDialogContent", [bm, Em] = xm(Ke), Rm = /* @__PURE__ */ gm("AlertDialogContent"), xa = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: o, ...r } = e, s = Ee(n), a = i.useRef(null), c = j(t, a), l = i.useRef(null);
    return /* @__PURE__ */ p.jsx(
      sm,
      {
        contentName: Ke,
        titleName: ya,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ p.jsx(bm, { scope: n, cancelRef: l, children: /* @__PURE__ */ p.jsxs(
          pm,
          {
            role: "alertdialog",
            ...s,
            ...r,
            ref: c,
            onOpenAutoFocus: R(r.onOpenAutoFocus, (u) => {
              u.preventDefault(), l.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (u) => u.preventDefault(),
            onInteractOutside: (u) => u.preventDefault(),
            children: [
              /* @__PURE__ */ p.jsx(Rm, { children: o }),
              /* @__PURE__ */ p.jsx(_m, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
xa.displayName = Ke;
var ya = "AlertDialogTitle", wa = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Ee(n);
    return /* @__PURE__ */ p.jsx(mm, { ...r, ...o, ref: t });
  }
);
wa.displayName = ya;
var Ca = "AlertDialogDescription", Sa = i.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...o } = e, r = Ee(n);
  return /* @__PURE__ */ p.jsx(vm, { ...r, ...o, ref: t });
});
Sa.displayName = Ca;
var Pm = "AlertDialogAction", ba = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Ee(n);
    return /* @__PURE__ */ p.jsx(pa, { ...r, ...o, ref: t });
  }
);
ba.displayName = Pm;
var Ea = "AlertDialogCancel", Ra = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, { cancelRef: r } = Em(Ea, n), s = Ee(n), a = j(t, r);
    return /* @__PURE__ */ p.jsx(pa, { ...s, ...o, ref: a });
  }
);
Ra.displayName = Ea;
var _m = ({ contentRef: e }) => {
  const t = `\`${Ke}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Ke}\` by passing a \`${Ca}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Ke}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return i.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, nh = va, oh = ha, rh = ga, sh = xa, ih = ba, ah = Ra, ch = wa, lh = Sa, dn = "Collapsible", [Am] = Q(dn), [Mm, yo] = Am(dn), Pa = i.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: o,
      defaultOpen: r,
      disabled: s,
      onOpenChange: a,
      ...c
    } = e, [l, u] = ce({
      prop: o,
      defaultProp: r ?? !1,
      onChange: a,
      caller: dn
    });
    return /* @__PURE__ */ p.jsx(
      Mm,
      {
        scope: n,
        disabled: s,
        contentId: q(),
        open: l,
        onOpenToggle: i.useCallback(() => u((f) => !f), [u]),
        children: /* @__PURE__ */ p.jsx(
          I.div,
          {
            "data-state": Co(l),
            "data-disabled": s ? "" : void 0,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
Pa.displayName = dn;
var _a = "CollapsibleTrigger", Tm = i.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...o } = e, r = yo(_a, n);
    return /* @__PURE__ */ p.jsx(
      I.button,
      {
        type: "button",
        "aria-controls": r.contentId,
        "aria-expanded": r.open || !1,
        "data-state": Co(r.open),
        "data-disabled": r.disabled ? "" : void 0,
        disabled: r.disabled,
        ...o,
        ref: t,
        onClick: R(e.onClick, r.onOpenToggle)
      }
    );
  }
);
Tm.displayName = _a;
var wo = "CollapsibleContent", Im = i.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = yo(wo, e.__scopeCollapsible);
    return /* @__PURE__ */ p.jsx(ee, { present: n || r.open, children: ({ present: s }) => /* @__PURE__ */ p.jsx(Nm, { ...o, ref: t, present: s }) });
  }
);
Im.displayName = wo;
var Nm = i.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...s } = e, a = yo(wo, n), [c, l] = i.useState(o), u = i.useRef(null), f = j(t, u), d = i.useRef(0), v = d.current, h = i.useRef(0), x = h.current, m = a.open || c, g = i.useRef(m), y = i.useRef(void 0);
  return i.useEffect(() => {
    const w = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), z(() => {
    const w = u.current;
    if (w) {
      y.current = y.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const C = w.getBoundingClientRect();
      d.current = C.height, h.current = C.width, g.current || (w.style.transitionDuration = y.current.transitionDuration, w.style.animationName = y.current.animationName), l(o);
    }
  }, [a.open, o]), /* @__PURE__ */ p.jsx(
    I.div,
    {
      "data-state": Co(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !m,
      ...s,
      ref: f,
      style: {
        "--radix-collapsible-content-height": v ? `${v}px` : void 0,
        "--radix-collapsible-content-width": x ? `${x}px` : void 0,
        ...e.style
      },
      children: m && r
    }
  );
});
function Co(e) {
  return e ? "open" : "closed";
}
var uh = Pa;
// @__NO_SIDE_EFFECTS__
function Om(e) {
  const t = /* @__PURE__ */ Dm(e), n = i.forwardRef((o, r) => {
    const { children: s, ...a } = o, c = i.Children.toArray(s), l = c.find($m);
    if (l) {
      const u = l.props.children, f = c.map((d) => d === l ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...a, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Dm(e) {
  const t = i.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (i.isValidElement(r)) {
      const a = km(r), c = Lm(s, r.props);
      return r.type !== i.Fragment && (c.ref = o ? xe(o, a) : a), i.cloneElement(r, c);
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var jm = Symbol("radix.slottable");
function $m(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === jm;
}
function Lm(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...c) => {
      const l = s(...c);
      return r(...c), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function km(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var fn = "Popover", [Aa] = Q(fn, [
  Ae
]), yt = Ae(), [Fm, Ne] = Aa(fn), Ma = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: a = !1
  } = e, c = yt(t), l = i.useRef(null), [u, f] = i.useState(!1), [d, v] = ce({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: fn
  });
  return /* @__PURE__ */ p.jsx(lt, { ...c, children: /* @__PURE__ */ p.jsx(
    Fm,
    {
      scope: t,
      contentId: q(),
      triggerRef: l,
      open: d,
      onOpenChange: v,
      onOpenToggle: i.useCallback(() => v((h) => !h), [v]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: i.useCallback(() => f(!0), []),
      onCustomAnchorRemove: i.useCallback(() => f(!1), []),
      modal: a,
      children: n
    }
  ) });
};
Ma.displayName = fn;
var Ta = "PopoverAnchor", Bm = i.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = Ne(Ta, n), s = yt(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: c } = r;
    return i.useEffect(() => (a(), () => c()), [a, c]), /* @__PURE__ */ p.jsx(ut, { ...s, ...o, ref: t });
  }
);
Bm.displayName = Ta;
var Ia = "PopoverTrigger", Na = i.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = Ne(Ia, n), s = yt(n), a = j(t, r.triggerRef), c = /* @__PURE__ */ p.jsx(
      I.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": La(r.open),
        ...o,
        ref: a,
        onClick: R(e.onClick, r.onOpenToggle)
      }
    );
    return r.hasCustomAnchor ? c : /* @__PURE__ */ p.jsx(ut, { asChild: !0, ...s, children: c });
  }
);
Na.displayName = Ia;
var So = "PopoverPortal", [Vm, Wm] = Aa(So, {
  forceMount: void 0
}), Oa = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: r } = e, s = Ne(So, t);
  return /* @__PURE__ */ p.jsx(Vm, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx(ee, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Qe, { asChild: !0, container: r, children: o }) }) });
};
Oa.displayName = So;
var Ye = "PopoverContent", Da = i.forwardRef(
  (e, t) => {
    const n = Wm(Ye, e.__scopePopover), { forceMount: o = n.forceMount, ...r } = e, s = Ne(Ye, e.__scopePopover);
    return /* @__PURE__ */ p.jsx(ee, { present: o || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(Um, { ...r, ref: t }) : /* @__PURE__ */ p.jsx(Km, { ...r, ref: t }) });
  }
);
Da.displayName = Ye;
var Hm = /* @__PURE__ */ Om("PopoverContent.RemoveScroll"), Um = i.forwardRef(
  (e, t) => {
    const n = Ne(Ye, e.__scopePopover), o = i.useRef(null), r = j(t, o), s = i.useRef(!1);
    return i.useEffect(() => {
      const a = o.current;
      if (a) return Jt(a);
    }, []), /* @__PURE__ */ p.jsx(mt, { as: Hm, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
      ja,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: R(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), s.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: R(
          e.onPointerDownOutside,
          (a) => {
            const c = a.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
            s.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: R(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Km = i.forwardRef(
  (e, t) => {
    const n = Ne(Ye, e.__scopePopover), o = i.useRef(!1), r = i.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      ja,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (o.current || n.triggerRef.current?.focus(), s.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const a = s.target;
          n.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault();
        }
      }
    );
  }
), ja = i.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: o,
      onOpenAutoFocus: r,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: f,
      ...d
    } = e, v = Ne(Ye, n), h = yt(n);
    return Qt(), /* @__PURE__ */ p.jsx(
      pt,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: r,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ p.jsx(
          Xe,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: f,
            onEscapeKeyDown: c,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onDismiss: () => v.onOpenChange(!1),
            children: /* @__PURE__ */ p.jsx(
              zt,
              {
                "data-state": La(v.open),
                role: "dialog",
                id: v.contentId,
                ...h,
                ...d,
                ref: t,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), $a = "PopoverClose", Gm = i.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = Ne($a, n);
    return /* @__PURE__ */ p.jsx(
      I.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: R(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
Gm.displayName = $a;
var zm = "PopoverArrow", Ym = i.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = yt(n);
    return /* @__PURE__ */ p.jsx(Yt, { ...r, ...o, ref: t });
  }
);
Ym.displayName = zm;
function La(e) {
  return e ? "open" : "closed";
}
var dh = Ma, fh = Na, ph = Oa, mh = Da, pn = "Switch", [Xm] = Q(pn), [Zm, qm] = Xm(pn), ka = i.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: o,
      checked: r,
      defaultChecked: s,
      required: a,
      disabled: c,
      value: l = "on",
      onCheckedChange: u,
      form: f,
      ...d
    } = e, [v, h] = i.useState(null), x = j(t, (C) => h(C)), m = i.useRef(!1), g = v ? f || !!v.closest("form") : !0, [y, w] = ce({
      prop: r,
      defaultProp: s ?? !1,
      onChange: u,
      caller: pn
    });
    return /* @__PURE__ */ p.jsxs(Zm, { scope: n, checked: y, disabled: c, children: [
      /* @__PURE__ */ p.jsx(
        I.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": a,
          "data-state": Wa(y),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: l,
          ...d,
          ref: x,
          onClick: R(e.onClick, (C) => {
            w((S) => !S), g && (m.current = C.isPropagationStopped(), m.current || C.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ p.jsx(
        Va,
        {
          control: v,
          bubbles: !m.current,
          name: o,
          value: l,
          checked: y,
          required: a,
          disabled: c,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ka.displayName = pn;
var Fa = "SwitchThumb", Ba = i.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...o } = e, r = qm(Fa, n);
    return /* @__PURE__ */ p.jsx(
      I.span,
      {
        "data-state": Wa(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    );
  }
);
Ba.displayName = Fa;
var Qm = "SwitchBubbleInput", Va = i.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: o = !0,
    ...r
  }, s) => {
    const a = i.useRef(null), c = j(a, s), l = oo(n), u = Qn(t);
    return i.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (l !== n && h) {
        const x = new Event("click", { bubbles: o });
        h.call(f, n), f.dispatchEvent(x);
      }
    }, [l, n, o]), /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...r,
        tabIndex: -1,
        ref: c,
        style: {
          ...r.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Va.displayName = Qm;
function Wa(e) {
  return e ? "checked" : "unchecked";
}
var vh = ka, hh = Ba;
function Jm(e, t = []) {
  let n = [];
  function o(s, a) {
    const c = i.createContext(a);
    c.displayName = s + "Context";
    const l = n.length;
    n = [...n, a];
    const u = (d) => {
      const { scope: v, children: h, ...x } = d, m = v?.[e]?.[l] || c, g = i.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ p.jsx(m.Provider, { value: g, children: h });
    };
    u.displayName = s + "Provider";
    function f(d, v) {
      const h = v?.[e]?.[l] || c, x = i.useContext(h);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [u, f];
  }
  const r = () => {
    const s = n.map((a) => i.createContext(a));
    return function(c) {
      const l = c?.[e] || s;
      return i.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    };
  };
  return r.scopeName = e, [o, ev(r, ...t)];
}
function ev(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const a = o.reduce((c, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...c, ...d };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var tv = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Ha = tv.reduce((e, t) => {
  const n = /* @__PURE__ */ Wt(`Primitive.${t}`), o = i.forwardRef((r, s) => {
    const { asChild: a, ...c } = r, l = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...c, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), bo = "Progress", Eo = 100, [nv] = Jm(bo), [ov, rv] = nv(bo), Ua = i.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: r,
      getValueLabel: s = sv,
      ...a
    } = e;
    (r || r === 0) && !Jo(r) && console.error(iv(`${r}`, "Progress"));
    const c = Jo(r) ? r : Eo;
    o !== null && !er(o, c) && console.error(av(`${o}`, "Progress"));
    const l = er(o, c) ? o : null, u = Bt(l) ? s(l, c) : void 0;
    return /* @__PURE__ */ p.jsx(ov, { scope: n, value: l, max: c, children: /* @__PURE__ */ p.jsx(
      Ha.div,
      {
        "aria-valuemax": c,
        "aria-valuemin": 0,
        "aria-valuenow": Bt(l) ? l : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": za(l, c),
        "data-value": l ?? void 0,
        "data-max": c,
        ...a,
        ref: t
      }
    ) });
  }
);
Ua.displayName = bo;
var Ka = "ProgressIndicator", Ga = i.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, r = rv(Ka, n);
    return /* @__PURE__ */ p.jsx(
      Ha.div,
      {
        "data-state": za(r.value, r.max),
        "data-value": r.value ?? void 0,
        "data-max": r.max,
        ...o,
        ref: t
      }
    );
  }
);
Ga.displayName = Ka;
function sv(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function za(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Bt(e) {
  return typeof e == "number";
}
function Jo(e) {
  return Bt(e) && !isNaN(e) && e > 0;
}
function er(e, t) {
  return Bt(e) && !isNaN(e) && e <= t && e >= 0;
}
function iv(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Eo}\`.`;
}
function av(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Eo} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var gh = Ua, xh = Ga, cv = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], lv = cv.reduce((e, t) => {
  const n = /* @__PURE__ */ Wt(`Primitive.${t}`), o = i.forwardRef((r, s) => {
    const { asChild: a, ...c } = r, l = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...c, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), uv = "Label", Ya = i.forwardRef((e, t) => /* @__PURE__ */ p.jsx(
  lv.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Ya.displayName = uv;
var yh = Ya, mn = "Tabs", [dv] = Q(mn, [
  rn
]), Xa = rn(), [fv, Ro] = dv(mn), Za = i.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: o,
      onValueChange: r,
      defaultValue: s,
      orientation: a = "horizontal",
      dir: c,
      activationMode: l = "automatic",
      ...u
    } = e, f = ft(c), [d, v] = ce({
      prop: o,
      onChange: r,
      defaultProp: s ?? "",
      caller: mn
    });
    return /* @__PURE__ */ p.jsx(
      fv,
      {
        scope: n,
        baseId: q(),
        value: d,
        onValueChange: v,
        orientation: a,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ p.jsx(
          I.div,
          {
            dir: f,
            "data-orientation": a,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
Za.displayName = mn;
var qa = "TabsList", Qa = i.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: o = !0, ...r } = e, s = Ro(qa, n), a = Xa(n);
    return /* @__PURE__ */ p.jsx(
      Rs,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: o,
        children: /* @__PURE__ */ p.jsx(
          I.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...r,
            ref: t
          }
        )
      }
    );
  }
);
Qa.displayName = qa;
var Ja = "TabsTrigger", ec = i.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, disabled: r = !1, ...s } = e, a = Ro(Ja, n), c = Xa(n), l = oc(a.baseId, o), u = rc(a.baseId, o), f = o === a.value;
    return /* @__PURE__ */ p.jsx(
      Ps,
      {
        asChild: !0,
        ...c,
        focusable: !r,
        active: f,
        children: /* @__PURE__ */ p.jsx(
          I.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": u,
            "data-state": f ? "active" : "inactive",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            id: l,
            ...s,
            ref: t,
            onMouseDown: R(e.onMouseDown, (d) => {
              !r && d.button === 0 && d.ctrlKey === !1 ? a.onValueChange(o) : d.preventDefault();
            }),
            onKeyDown: R(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && a.onValueChange(o);
            }),
            onFocus: R(e.onFocus, () => {
              const d = a.activationMode !== "manual";
              !f && !r && d && a.onValueChange(o);
            })
          }
        )
      }
    );
  }
);
ec.displayName = Ja;
var tc = "TabsContent", nc = i.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, forceMount: r, children: s, ...a } = e, c = Ro(tc, n), l = oc(c.baseId, o), u = rc(c.baseId, o), f = o === c.value, d = i.useRef(f);
    return i.useEffect(() => {
      const v = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(v);
    }, []), /* @__PURE__ */ p.jsx(ee, { present: r || f, children: ({ present: v }) => /* @__PURE__ */ p.jsx(
      I.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": c.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !v,
        id: u,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: v && s
      }
    ) });
  }
);
nc.displayName = tc;
function oc(e, t) {
  return `${e}-trigger-${t}`;
}
function rc(e, t) {
  return `${e}-content-${t}`;
}
var wh = Za, Ch = Qa, Sh = ec, bh = nc;
export {
  lh as $,
  Wv as A,
  Hv as B,
  yv as C,
  Uv as D,
  Kv as E,
  Gv as F,
  _v as G,
  eh as H,
  bv as I,
  th as J,
  Xv as K,
  Av as L,
  Zv as M,
  qv as N,
  Qv as O,
  xv as P,
  zv as Q,
  hv as R,
  mv as S,
  gv as T,
  Yv as U,
  Pv as V,
  Jv as W,
  rh as X,
  oh as Y,
  sh as Z,
  ch as _,
  vv as a,
  ih as a0,
  ah as a1,
  nh as a2,
  fm as a3,
  dm as a4,
  pm as a5,
  pa as a6,
  mm as a7,
  vm as a8,
  lm as a9,
  ph as aa,
  mh as ab,
  dh as ac,
  fh as ad,
  yh as ae,
  Ch as af,
  Sh as ag,
  bh as ah,
  wh as ai,
  Cv as b,
  Nv as c,
  Ov as d,
  Ev as e,
  Rv as f,
  Mv as g,
  Iv as h,
  Tv as i,
  Dv as j,
  wv as k,
  Sv as l,
  Lv as m,
  kv as n,
  Bv as o,
  Fv as p,
  Vv as q,
  jv as r,
  $v as s,
  uh as t,
  Tm as u,
  Im as v,
  vh as w,
  hh as x,
  gh as y,
  xh as z
};
