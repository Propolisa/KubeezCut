import { r as n, j as e, b as ss } from "./react-vendor-18pR7s9b.js";
import { A as Qr, B as Ze, R as Ln, c as Pe, u as Us, a as $i, b as he, d as _e, e as Ft, f as rd, Z as pn, g as Pn, h as ba, E as St, M as sd, i as Zr, G as od, F as ad, j as Ue, S as id, k as ld, L as Bi, l as cd, m as dd, n as ud, o as md, p as on, q as es, r as Ps, s as Xi, t as Vi, v as Ki, w as fd, x as pd, y as hd, z as gd, C as xd, T as bd, D as Wi, H as Ko, I as vd, J as jr, K as yd, N as wd, W as Gi, O as Ui, P as Wn, Q as Id, U as me, V as $t, X as Cd, Y as va, _ as Sd, $ as lt, a0 as jd, a1 as kd, a2 as Td, a3 as Nd, a4 as Md, a5 as Rd, a6 as wr, a7 as Ys, a8 as Nn, a9 as Fs, aa as Mo, ab as Dd, ac as Ed, ad as ya, ae as Pd, af as Ls, ag as Xn, ah as Fd, ai as Ro, aj as Ld, ak as Ad, al as Yi, am as wa, an as Ia, ao as Od, ap as _d, aq as gr, ar as Ca, as as Do, at as Bn, au as Eo, av as ur, aw as mn, ax as zd, ay as Hd, az as $d, aA as Bd, aB as Xd, aC as Vd, aD as Kd, aE as As, aF as Sa, aG as ks, aH as Po, aI as Fo, aJ as ja, aK as En, aL as xs, aM as Zi, aN as Wd, aO as rn, aP as Gd, aQ as Ud, aR as Yd, aS as qi, aT as Ji, aU as Qi, aV as el, aW as ka, aX as Lo, aY as Gt, aZ as Zd, a_ as zr, a$ as Ta, b0 as Na, b1 as Ma, b2 as qd, b3 as Ra, b4 as Jd, b5 as Qd, b6 as Da, b7 as eu, b8 as bs, b9 as fo, ba as po, bb as Ea, bc as vs, bd as tu, be as nu, bf as ru, bg as su, bh as ou, bi as au, bj as Pa, bk as iu, bl as lu, bm as xr, bn as yr, bo as cu, bp as jt, bq as du, br as Fa, bs as ho, bt as Ts, bu as Ao, bv as La, bw as Aa, bx as go, by as tl, bz as uu, bA as mu, bB as fu, bC as Oa, bD as pu, bE as hu, bF as gu, bG as xu, bH as bu, bI as vu, bJ as _a, bK as sn, bL as Vn, bM as yu, bN as wu, bO as Oo, bP as za, bQ as qr, bR as Ha, bS as Os, bT as Ns, bU as Iu, bV as _o, bW as _s, bX as kn, bY as Cu, bZ as zs, b_ as Hs, b$ as zo, c0 as Gr, c1 as Hr, c2 as Zs, c3 as Su, c4 as ju, c5 as $a, c6 as ku, c7 as Tu, c8 as Nu, c9 as Ir, ca as Mu, cb as Ru, cc as $s, cd as br, ce as Kn, cf as nl, cg as Ba, ch as Xa, ci as vr, cj as Va, ck as Jr, cl as rl, cm as Du, cn as Wo, co as Eu, cp as Pu, cq as Fu, cr as Lu, cs as Go, ct as Au, cu as Ou, cv as hn, cw as sl, cx as _u, cy as zu, cz as ol, cA as al, cB as Hu, cC as $u, cD as fr, cE as pr, cF as Bu, cG as Xu, cH as Ka, cI as Vu, cJ as Ku, cK as ts, cL as ns, cM as Wu, cN as rs, cO as Pt, cP as Gu, cQ as Uu, cR as Yu, cS as Zu, cT as Gn, cU as wn, cV as hr, cW as Sn, cX as qu, cY as Ju, cZ as Qu, c_ as em, c$ as Wa, d0 as xo, d1 as bo, d2 as Ga, d3 as tm, d4 as nm, d5 as Ua, d6 as Ya, d7 as Za, d8 as qa, d9 as vo, da as il, db as rm, dc as Bs, dd as sm, de as om, df as am, dg as im, dh as lm, di as Xs, dj as cm, dk as dm, dl as Cr, dm as um, dn as mm, dp as ll, dq as Un, dr as An, ds as jn, dt as Ho, du as cl, dv as fm, dw as Ja, dx as dl, dy as Ms, dz as ul, dA as ml, dB as fl, dC as pl, dD as hl, dE as gl, dF as xl, dG as Ur, dH as bl, dI as pm, dJ as vl, dK as hm, dL as gm, dM as yl, dN as qs, dO as xm, dP as bm, dQ as vm, dR as ym, dS as wm, dT as Im } from "./feature-editing-core-BHu3y9c9.js";
import "./gif-processing-CfWcW1Gl.js";
import { A as wl, B as Cm, D as Sm, E as jm, F as Il, H as Cl, J as Sl, K as km, M as jl, N as kl, O as Tl, Q as Tm, U as Nm, W as Mm, X as Nl, Y as Rm, Z as Ml, _ as Rl, $ as Dl, a0 as El, a1 as Pl, a2 as Dm, a3 as Fl, a4 as Em, a5 as Ll, a6 as Pm, a7 as Al, a8 as Ol, a9 as Fm, aa as Lm, ab as _l, ac as Am, ad as Om } from "./vendor-ui-KmnPcjbe.js";
import { ac as zl, af as Qt, ag as Yr, ah as Qa, ai as ei, aj as _m, ak as zm, al as Hm } from "./vendor-icons-Ce83X_M4.js";
import { c as Js, u as Jt } from "./state-vendor-Ctus6aXD.js";
import { c as an } from "./core-logger-Dau_Juxv.js";
class $m extends n.Component {
  constructor(t) {
    super(t), this.state = { hasError: !1, error: null };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0, error: t };
  }
  componentDidCatch(t, s) {
    this.props.onError?.(t, s);
  }
  handleReset = () => {
    this.setState({ hasError: !1, error: null });
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback)
        return this.props.fallback;
      const { level: t = "component" } = this.props;
      return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center p-8 gap-4 text-center", children: [
        /* @__PURE__ */ e.jsx(Qr, { className: "h-12 w-12 text-destructive" }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsxs("h2", { className: "text-lg font-semibold", children: [
            t === "app" && "Application Error",
            t === "feature" && "Something went wrong",
            t === "component" && "Component Error"
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: this.state.error?.message || "An unexpected error occurred" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ e.jsxs(Ze, { onClick: this.handleReset, variant: "outline", children: [
            /* @__PURE__ */ e.jsx(Ln, { className: "h-4 w-4 mr-2" }),
            "Try Again"
          ] }),
          t === "app" && /* @__PURE__ */ e.jsx(Ze, { onClick: () => window.location.reload(), children: "Reload Page" })
        ] }),
        !1
      ] });
    }
    return this.props.children;
  }
}
const Uo = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsxs(
  wl,
  {
    ref: s,
    className: Pe(
      "relative flex w-full touch-none select-none items-center",
      r
    ),
    ...t,
    children: [
      /* @__PURE__ */ e.jsx(Cm, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ e.jsx(Sm, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ e.jsx(jm, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Uo.displayName = wl.displayName;
const $o = n.forwardRef(
  ({ className: r, orientation: t = "horizontal", decorative: s = !0, ...o }, i) => /* @__PURE__ */ e.jsx(
    Il,
    {
      ref: i,
      decorative: s,
      orientation: t,
      className: Pe(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        r
      ),
      ...o
    }
  )
);
$o.displayName = Il.displayName;
const Bm = n.memo(function({
  onZoomChange: t,
  onZoomIn: s,
  onZoomOut: o,
  isScopesPanelOpen: i = !1,
  onToggleScopesPanel: c
}) {
  const m = Us(), { zoomLevel: d, zoomIn: b, zoomOut: M, setZoom: R } = $i(), N = he((z) => z.snapEnabled), w = he((z) => z.toggleSnap), f = he((z) => z.addMarker), T = _e((z) => z.activeTool), H = _e((z) => z.setActiveTool), E = Ft((z) => z.linkedSelectionEnabled), K = Ft((z) => z.setLinkedSelectionEnabled), $ = { width: St.toolbarButtonSize, height: St.toolbarButtonSize }, v = n.useRef(0), Y = n.useRef(d), S = n.useRef(0), J = n.useRef(null), A = n.useRef(null), p = n.useRef(null), u = n.useRef(!1), L = n.useRef(d);
  L.current = d;
  const [I, h] = n.useState(!1), V = n.useCallback(async () => {
    if (!I) {
      h(!0);
      try {
        await rd();
      } finally {
        h(!1);
      }
    }
  }, [I]), C = n.useCallback((z) => {
    const te = Math.max(pn, Math.min(Pn, z));
    return t ? t(te) : R(te), te;
  }, [t, R]), D = n.useCallback(() => {
    J.current !== null && cancelAnimationFrame(J.current);
    const z = () => {
      if (Math.abs(v.current) > ba) {
        const te = L.current + v.current, U = C(te);
        if (U <= pn || U >= Pn) {
          v.current = 0, J.current = null;
          return;
        }
        v.current *= md, J.current = requestAnimationFrame(z);
      } else
        v.current = 0, J.current = null;
    };
    J.current = requestAnimationFrame(z);
  }, [C]), G = n.useCallback((z) => pn * Math.pow(Pn / pn, z), []), le = n.useCallback((z) => Math.log(z / pn) / Math.log(Pn / pn), []), B = n.useCallback((z) => {
    const te = z[0] ?? 0.5, U = G(te), De = performance.now(), Ce = De - S.current;
    if (Ce > 0 && Ce < 100) {
      const ye = U - Y.current;
      v.current = ye / Ce * 16;
    }
    Y.current = U, S.current = De, u.current = !0, p.current = U, A.current === null && (A.current = requestAnimationFrame(() => {
      A.current = null;
      const ye = p.current;
      ye !== null && C(ye);
    }));
  }, [C, G]), ge = n.useCallback(() => {
    u.current = !1, A.current !== null && (cancelAnimationFrame(A.current), A.current = null), p.current !== null && (C(p.current), p.current = null), Math.abs(v.current) > ba && D(), document.activeElement instanceof HTMLElement && document.activeElement.blur();
  }, [C, D]);
  return n.useEffect(() => () => {
    J.current !== null && cancelAnimationFrame(J.current), A.current !== null && cancelAnimationFrame(A.current);
  }, []), /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "scrollbar-hidden flex shrink-0 items-center justify-between border-b border-border px-2 py-0.5",
      style: { height: St.timelineHeaderHeight },
      role: "toolbar",
      "aria-label": "Timeline controls",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-center gap-1", children: [
          /* @__PURE__ */ e.jsx(
            Ze,
            {
              variant: "ghost",
              size: "icon",
              style: $,
              className: T === "select" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
              onClick: () => H("select"),
              "aria-label": "Select tool",
              "data-tooltip": "Select Tool (V)",
              children: /* @__PURE__ */ e.jsx(sd, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            Ze,
            {
              variant: "ghost",
              size: "icon",
              style: $,
              className: T === "razor" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
              onClick: () => H(T === "razor" ? "select" : "razor"),
              "aria-label": "Razor tool",
              "data-tooltip": "Razor Tool (C)",
              children: /* @__PURE__ */ e.jsx(zl, { className: "w-3.5 h-3.5 -rotate-90" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            Ze,
            {
              variant: "ghost",
              size: "icon",
              style: $,
              className: T === "rate-stretch" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
              onClick: () => H(T === "rate-stretch" ? "select" : "rate-stretch"),
              "aria-label": "Rate stretch tool",
              "data-tooltip": `Rate stretch (${Zr(m.RATE_STRETCH_TOOL)})`,
              children: /* @__PURE__ */ e.jsx(od, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ e.jsx($o, { orientation: "vertical", className: "mx-1 h-4" }),
          /* @__PURE__ */ e.jsx(
            Ze,
            {
              variant: "ghost",
              size: "icon",
              style: $,
              onClick: () => f(Ue.getState().currentFrame),
              "aria-label": "Add marker",
              "data-tooltip": "Add Marker (M)",
              children: /* @__PURE__ */ e.jsx(ad, { className: "w-3.5 h-3.5", style: { color: "var(--color-timeline-marker)" } })
            }
          ),
          /* @__PURE__ */ e.jsx(
            Ze,
            {
              variant: "ghost",
              size: "icon",
              style: $,
              disabled: I,
              onClick: () => {
                V();
              },
              "aria-label": "Freeze frame",
              "data-tooltip": "Freeze Frame — capture current frame, split clip, insert still (≈1s)",
              children: I ? /* @__PURE__ */ e.jsx(Qt, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ e.jsx(id, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ e.jsx($o, { orientation: "vertical", className: "mx-1 h-4" }),
          /* @__PURE__ */ e.jsx(
            Ze,
            {
              variant: "ghost",
              size: "icon",
              style: $,
              className: N ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
              onClick: w,
              "aria-label": N ? "Disable snapping" : "Enable snapping",
              "data-tooltip": N ? "Snap on" : "Snap off",
              children: /* @__PURE__ */ e.jsx(ld, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            Ze,
            {
              variant: "ghost",
              size: "icon",
              style: $,
              className: E ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
              onClick: () => K(!E),
              "aria-label": E ? "Disable linked selection" : "Enable linked selection",
              "aria-pressed": E,
              "data-tooltip": `${E ? "Linked selection on" : "Linked selection off"} (${Zr(m.TOGGLE_LINKED_SELECTION)})`,
              children: /* @__PURE__ */ e.jsx(Bi, { className: "w-3.5 h-3.5" })
            }
          ),
          c && /* @__PURE__ */ e.jsx(
            Ze,
            {
              variant: "ghost",
              size: "icon",
              style: $,
              className: i ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
              onClick: c,
              "aria-label": i ? "Hide color scopes" : "Show color scopes",
              "aria-pressed": i,
              "data-tooltip": i ? "Hide color scopes" : "Show color scopes",
              children: /* @__PURE__ */ e.jsx(cd, { className: "w-3.5 h-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "min-w-0 flex-1", "aria-hidden": "true" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex shrink-0 items-center gap-1.5", children: [
          /* @__PURE__ */ e.jsx(
            Ze,
            {
              variant: "ghost",
              size: "icon",
              style: $,
              onClick: () => {
                o ? o() : M();
              },
              "aria-label": "Zoom out",
              "data-tooltip": "Zoom out",
              children: /* @__PURE__ */ e.jsx(dd, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            Uo,
            {
              value: [le(d)],
              onValueChange: B,
              onValueCommit: ge,
              min: 0,
              max: 1,
              step: 5e-3,
              className: "w-24",
              "aria-label": "Timeline zoom"
            }
          ),
          /* @__PURE__ */ e.jsx(
            Ze,
            {
              variant: "ghost",
              size: "icon",
              style: $,
              onClick: () => {
                s ? s() : b();
              },
              "aria-label": "Zoom in",
              "data-tooltip": "Zoom in",
              children: /* @__PURE__ */ e.jsx(ud, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ]
    }
  );
});
function Xm(r, t) {
  return !(r.right < t.left || r.left > t.right || r.bottom < t.top || r.top > t.bottom);
}
function Hl(r, t, s, o) {
  const i = Math.min(r, s), c = Math.min(t, o), m = Math.max(r, s), d = Math.max(t, o);
  return {
    left: i,
    top: c,
    right: m,
    bottom: d,
    width: m - i,
    height: d - c
  };
}
let Bo = !1;
function Vm() {
  return Bo;
}
function $l({
  containerRef: r,
  hitAreaRef: t,
  items: s,
  onSelectionChange: o,
  enabled: i = !0,
  appendMode: c = !1,
  threshold: m = 5
}) {
  const d = t ?? r, b = n.useRef({ startX: 0, startY: 0, currentX: 0, currentY: 0 }), [M, R] = n.useState({
    active: !1,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0
  }), [N, w] = n.useState([]), f = n.useRef(!1), T = n.useRef(!1), H = n.useRef(o), E = n.useRef([]), K = n.useRef(null), $ = n.useRef(s), v = n.useRef(i);
  n.useEffect(() => {
    H.current = o;
  }, [o]), n.useEffect(() => {
    $.current = s;
  }, [s]), n.useEffect(() => {
    v.current = i;
  }, [i]);
  const Y = n.useCallback(() => {
    if (!r.current) return;
    const p = r.current, u = p.getBoundingClientRect(), L = b.current, I = Hl(
      L.startX - p.scrollLeft + u.left,
      L.startY - p.scrollTop + u.top,
      L.currentX - p.scrollLeft + u.left,
      L.currentY - p.scrollTop + u.top
    ), V = $.current.filter((G) => {
      const le = G.getBoundingRect();
      return le ? Xm(I, le) : !1;
    }).map((G) => G.id), C = E.current;
    (V.length !== C.length || V.some((G) => !C.includes(G)) || C.some((G) => !V.includes(G))) && (w(V), E.current = V, H.current?.(V));
  }, [r]), S = n.useEffectEvent((p) => {
    if (!v.current || !r.current || !d.current || p.button !== 0) return;
    const L = d.current.getBoundingClientRect();
    if (p.clientX < L.left || p.clientX > L.right || p.clientY < L.top || p.clientY > L.bottom)
      return;
    const I = p.target;
    if (I.tagName === "BUTTON" || I.tagName === "INPUT" || I.tagName === "A" || I.closest("button") || I.closest("input") || I.closest("a") || I.closest('[role="button"]') || // Don't start marquee if clicking on a draggable timeline item
    I.closest("[data-item-id]") || // Don't start marquee if clicking on a draggable media card
    I.closest("[data-media-id]") || // Don't start marquee if clicking on a draggable composition card
    I.closest("[data-composition-id]") || // Don't start marquee if clicking in the timeline ruler
    I.closest(".timeline-ruler") || // Don't start marquee if clicking on the playhead handle
    I.closest("[data-playhead-handle]") || // Don't start marquee if clicking on gizmo elements (handles, borders)
    I.closest("[data-gizmo]") || // Don't start marquee if clicking on a resize handle
    I.closest("[data-resize-handle]") || // Don't start marquee if clicking on a track-push handle
    I.closest("[data-track-push]") || I.style.cursor === "col-resize" || I.style.cursor === "ns-resize")
      return;
    f.current = !0, T.current = !1, E.current = [];
    const h = r.current, V = h.getBoundingClientRect(), C = p.clientX - V.left + h.scrollLeft, D = p.clientY - V.top + h.scrollTop;
    b.current = { startX: C, startY: D, currentX: C, currentY: D }, c || (w([]), E.current = []);
  }), J = n.useEffectEvent((p) => {
    if (!f.current || !r.current) return;
    const u = r.current, L = u.getBoundingClientRect(), I = p.clientX - L.left + u.scrollLeft, h = p.clientY - L.top + u.scrollTop, V = Math.max(u.scrollLeft, Math.min(u.scrollLeft + u.clientWidth, I)), C = Math.max(u.scrollTop, Math.min(u.scrollTop + u.clientHeight, h));
    if (!T.current) {
      const D = b.current, G = Math.abs(V - D.startX), le = Math.abs(C - D.startY);
      if (G > m || le > m)
        T.current = !0, R({
          active: !0,
          startX: D.startX,
          startY: D.startY,
          currentX: V,
          currentY: C
        });
      else
        return;
    }
    b.current.currentX = V, b.current.currentY = C, K.current === null && (K.current = requestAnimationFrame(() => {
      K.current = null;
      const D = b.current;
      R((G) => ({
        ...G,
        currentX: D.currentX,
        currentY: D.currentY
      })), Y();
    }));
  }), A = n.useEffectEvent((p) => {
    if (!f.current) return;
    const u = T.current;
    K.current !== null && (cancelAnimationFrame(K.current), K.current = null), f.current = !1, T.current = !1, b.current = { startX: 0, startY: 0, currentX: 0, currentY: 0 }, R({
      active: !1,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0
    }), u && (p.stopPropagation(), p.preventDefault(), Bo = !0, requestAnimationFrame(() => {
      Bo = !1;
    }));
  });
  return n.useEffect(() => () => {
    K.current !== null && cancelAnimationFrame(K.current);
  }, []), n.useEffect(() => (document.addEventListener("mousedown", S, !0), document.addEventListener("mousemove", J), document.addEventListener("mouseup", A, !0), () => {
    document.removeEventListener("mousedown", S, !0), document.removeEventListener("mousemove", J), document.removeEventListener("mouseup", A, !0);
  }), []), {
    marqueeState: M,
    selectedIds: N
  };
}
const Km = n.memo(function() {
  const t = he((p) => p.inPoint), s = he((p) => p.outPoint), o = he((p) => p.setInPoint), i = he((p) => p.setOutPoint), { frameToPixels: c, pixelsToFrame: m } = on(), [d, b] = n.useState(!1), [M, R] = n.useState(!1), N = n.useRef(null), w = n.useRef(null), f = n.useRef(m), T = n.useRef(o), H = n.useRef(i);
  n.useEffect(() => {
    f.current = m, T.current = o, H.current = i;
  }, [m, o, i]);
  const E = n.useCallback((p) => {
    p.preventDefault(), p.stopPropagation(), b(!0);
  }, []), K = n.useCallback((p) => {
    p.preventDefault(), p.stopPropagation(), R(!0);
  }, []);
  n.useEffect(() => {
    if (!d) return;
    const p = document.body.style.cursor;
    document.body.style.cursor = "col-resize";
    const u = (I) => {
      const h = N.current?.closest(".timeline-ruler");
      if (!h) return;
      const V = h.getBoundingClientRect(), C = I.clientX - V.left, D = Math.max(0, f.current(C));
      T.current(D);
    }, L = () => {
      b(!1);
    };
    return document.addEventListener("mousemove", u), document.addEventListener("mouseup", L), () => {
      document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", L), document.body.style.cursor = p;
    };
  }, [d]), n.useEffect(() => {
    if (!M) return;
    const p = document.body.style.cursor;
    document.body.style.cursor = "col-resize";
    const u = (I) => {
      const h = w.current?.closest(".timeline-ruler");
      if (!h) return;
      const V = h.getBoundingClientRect(), C = I.clientX - V.left, D = Math.max(0, f.current(C));
      H.current(D);
    }, L = () => {
      R(!1);
    };
    return document.addEventListener("mousemove", u), document.addEventListener("mouseup", L), () => {
      document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", L), document.body.style.cursor = p;
    };
  }, [M]);
  const $ = "var(--color-timeline-io-handle)", v = 14, Y = v + 6, S = 6, J = 0, A = (p, u, L, I) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: p,
      className: "absolute top-0",
      style: {
        left: `${u}px`,
        width: "2px",
        height: "100%",
        pointerEvents: "none",
        zIndex: 22
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute pointer-events-none",
            style: {
              bottom: "0px",
              left: I === "in" ? `${J}px` : `${-S}px`,
              width: `${S}px`,
              height: `${v}px`,
              borderRadius: "2px",
              background: `linear-gradient(to bottom, ${$}, color-mix(in oklch, ${$} 75%, black))`,
              boxShadow: `0 0 6px color-mix(in oklch, ${$} 55%, transparent)`
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute pointer-events-auto",
            style: {
              bottom: "0px",
              height: `${Y}px`,
              left: "-8px",
              width: "18px",
              cursor: "col-resize"
            },
            onMouseDown: L
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    t !== null && A(N, c(t), E, "in"),
    s !== null && A(w, c(s), K, "out")
  ] });
}), Wm = n.memo(function() {
  const t = he((f) => f.markers), s = he((f) => f.updateMarker), o = _e((f) => f.selectedMarkerId), i = _e((f) => f.selectMarker), { frameToPixels: c, pixelsToFrame: m } = on(), [d, b] = n.useState(null), M = n.useRef(null), R = n.useRef(m), N = n.useRef(s);
  n.useEffect(() => {
    R.current = m, N.current = s;
  }, [m, s]);
  const w = n.useCallback((f, T) => {
    f.preventDefault(), f.stopPropagation(), i(T), b(T);
  }, [i]);
  return n.useEffect(() => {
    if (!d) return;
    const f = document.body.style.cursor;
    document.body.style.cursor = "grabbing";
    const T = (E) => {
      const K = M.current?.closest(".timeline-ruler");
      if (!K) return;
      const $ = K.getBoundingClientRect(), v = E.clientX - $.left, Y = Math.max(0, R.current(v));
      N.current(d, { frame: Y });
    }, H = () => {
      b(null);
    };
    return document.addEventListener("mousemove", T), document.addEventListener("mouseup", H), () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", H), document.body.style.cursor = f;
    };
  }, [d]), t.length === 0 ? null : /* @__PURE__ */ e.jsx("div", { ref: M, className: "absolute inset-0 pointer-events-none", children: t.map((f) => /* @__PURE__ */ e.jsx(
    Gm,
    {
      marker: f,
      markerId: f.id,
      leftPosition: c(f.frame),
      isDragging: d === f.id,
      isSelected: o === f.id,
      onMouseDown: w
    },
    f.id
  )) });
}), Gm = n.memo(function({ marker: t, markerId: s, leftPosition: o, isDragging: i, isSelected: c, onMouseDown: m }) {
  const d = n.useCallback((b) => {
    m(b, s);
  }, [m, s]);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "absolute pointer-events-auto",
      style: {
        left: `${o}px`,
        top: "-2px",
        transform: "translateX(-50%)",
        cursor: i ? "grabbing" : "grab",
        zIndex: c ? 20 : 15
      },
      onMouseDown: d,
      title: t.label || `Marker at frame ${t.frame}`,
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute",
            style: {
              top: "-4px",
              left: "50%",
              width: "20px",
              height: "20px",
              transform: "translateX(-50%)",
              backgroundColor: "transparent"
            }
          }
        ),
        c && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute",
            style: {
              top: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
              borderTop: "18px solid white"
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: `12px solid ${t.color}`,
              filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))"
            }
          }
        )
      ]
    }
  );
}), ti = 20, ni = 0.3, ys = 30, In = 1e3;
function Um(r) {
  const t = Math.log2(1.05), s = Math.round(Math.log2(r) / t) * t;
  return Math.pow(2, s);
}
function ri(r, t, s, o, i, c, m) {
  const d = r.getContext("2d");
  if (!d) return;
  const b = window.devicePixelRatio || 1, M = t * s, R = Math.min(s, m - M);
  r.width = Math.ceil(R * b), r.height = Math.ceil(o * b), r.style.width = `${R}px`, r.style.height = `${o}px`, d.scale(b, b), d.clearRect(0, 0, R, o);
  const N = c(1);
  if (N <= 0) return;
  const { labelIntervalSeconds: w, tickIntervalSeconds: f } = Ki({
    pixelsPerSecond: N,
    fps: Math.max(1, i)
  });
  if (f <= 0) return;
  const T = N, H = M / T, E = (M + R) / T, K = Math.floor(H / f), $ = Math.ceil(E / f), v = f * T, Y = 2, S = Math.max(10, Math.floor(o * 0.52)), J = S - Y, A = "rgba(255, 255, 255, 0.22)", p = "rgba(255, 255, 255, 0.16)", u = "rgba(255, 255, 255, 0.11)";
  for (let L = K; L <= $; L += 1) {
    const I = L * f, V = c(I) - M;
    if (V < -1 || V > R + 1) continue;
    const C = Math.round(V) + 0.5, D = hd({ time: I, labelIntervalSeconds: w }), G = gd(I, w);
    if (!(!D && !G && v < pd))
      if (D)
        d.strokeStyle = A, d.lineWidth = 1, d.beginPath(), d.moveTo(C, Y), d.lineTo(C, S), d.stroke();
      else if (G) {
        const B = Math.max(6, J * 0.58);
        d.strokeStyle = p, d.lineWidth = 1, d.beginPath(), d.moveTo(C, S - B), d.lineTo(C, S), d.stroke();
      } else {
        const B = Math.max(4, J * 0.32);
        d.strokeStyle = u, d.lineWidth = 1, d.beginPath(), d.moveTo(C, S - B), d.lineTo(C, S), d.stroke();
      }
  }
}
const si = 100, Ym = 100;
let oi = 0, ai = 0;
function Zm(r, t, s, o, i, c) {
  const { labelIntervalSeconds: m } = Ki({
    pixelsPerSecond: i,
    fps: Math.max(1, c)
  }), d = m, b = d * i;
  if (b <= 0) return;
  const M = i !== oi || c !== ai;
  M && (oi = i, ai = c);
  const R = o || 1e3, N = Math.max(0, s - si), w = s + R + si, f = Math.max(0, Math.floor(N / b)), T = Math.min(
    Math.ceil(w / b),
    f + Ym
  ), H = /* @__PURE__ */ new Set();
  for (let E = f; E <= T; E++) {
    H.add(E);
    let K = t.get(E);
    const $ = !K;
    if (K || (K = document.createElement("span"), K.className = "absolute text-[10px] font-medium leading-none tracking-tight text-muted-foreground/90 tabular-nums select-none whitespace-nowrap", K.style.top = "auto", K.style.bottom = "3px", K.style.fontFamily = "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif", K.style.fontFeatureSettings = '"tnum"', K.style.textShadow = "0 1px 0 rgba(0, 0, 0, 0.45)", K.style.zIndex = "24", r.appendChild(K), t.set(E, K)), $ || M) {
      const v = E * d;
      K.style.left = `${v * i}px`, K.style.transform = "translateX(-50%)", K.textContent = fd({ timeInSeconds: v, fps: c });
    }
  }
  t.forEach((E, K) => {
    H.has(K) || (E.remove(), t.delete(K));
  });
}
function qm(r) {
  r.forEach((t) => t.remove()), r.clear();
}
const Jm = n.memo(function({ duration: t, width: s }) {
  const o = es((ue) => ue.editorDensity), i = Xi(o), { timeToPixels: c, pixelsPerSecond: m, pixelsToFrame: d } = on(), b = he((ue) => ue.fps), M = he((ue) => ue.inPoint), R = he((ue) => ue.outPoint), N = he((ue) => ue.markDirty), w = Ue((ue) => ue.setCurrentFrame), f = Ue((ue) => ue.setScrubFrame), T = Ue((ue) => ue.pause), H = _e((ue) => ue.selectMarker), E = n.useRef(null), K = n.useRef(null), $ = n.useRef(/* @__PURE__ */ new Map()), v = n.useRef(/* @__PURE__ */ new Map()), Y = n.useRef(0), S = n.useRef(null), J = n.useRef(/* @__PURE__ */ new Map()), [A, p] = n.useState(0), [u, L] = n.useState(!1), [I, h] = n.useState(!1), V = n.useRef(d), C = n.useRef(w), D = n.useRef(f), G = n.useRef(Ue.getState().setPreviewFrame);
  n.useEffect(() => Ue.subscribe((ue) => {
    G.current = ue.setPreviewFrame;
  }), []);
  const le = n.useRef(N), B = n.useRef(T), ge = n.useRef(b), z = n.useRef(m), te = n.useRef(t), U = n.useRef(M), De = n.useRef(R), Ce = n.useRef(0), ye = n.useRef(0), O = n.useRef(0), W = n.useRef(0), Ie = n.useRef(0);
  n.useEffect(() => {
    V.current = d, C.current = w, D.current = f, le.current = N, B.current = T, ge.current = b, z.current = m, te.current = t, U.current = M, De.current = R;
  }, [d, w, f, N, T, b, m, t, M, R]);
  const re = n.useRef(0), j = n.useRef(null), x = n.useRef(null), se = n.useRef(0), ne = n.useRef(null), oe = n.useRef(!1), fe = n.useRef(Ps());
  n.useEffect(() => {
    if (!E.current) return;
    const ue = E.current.closest(".timeline-container");
    if (!ue) return;
    const Ne = () => {
      p(ue.clientWidth);
    }, Fe = () => {
      const nt = ue.scrollLeft;
      nt !== re.current && (re.current = nt, j.current === null && (j.current = requestAnimationFrame(() => {
        j.current = null, et();
      })));
    };
    Ne(), re.current = ue.scrollLeft;
    const qe = new ResizeObserver(Ne);
    return qe.observe(ue), ue.addEventListener("scroll", Fe, { passive: !0 }), () => {
      qe.disconnect(), ue.removeEventListener("scroll", Fe), j.current !== null && cancelAnimationFrame(j.current);
    };
  }, []);
  const je = c(t), xe = s || Math.max(je, A), ve = i.timelineRulerHeight, F = Um(m), _ = `${F.toFixed(4)}-${b}`, ce = n.useRef(xe), ie = n.useRef(ve), Te = n.useRef(F), ze = n.useRef(_), Se = n.useRef(A);
  ce.current = xe, ie.current = ve, Te.current = F, ze.current = _, Se.current = A;
  const Ae = n.useRef(b);
  n.useEffect(() => {
    if (Ae.current !== b) {
      Ae.current = b, Y.current++;
      const ue = v.current;
      ue.forEach((Ne) => Ne.close()), ue.clear();
    }
  }, [b]);
  const We = 50;
  n.useEffect(() => {
    const ue = v.current;
    if (ue.size > We) {
      const Ne = ue.size - We;
      let Fe = 0;
      for (const [qe, nt] of ue) {
        if (Fe >= Ne) break;
        nt.close(), ue.delete(qe), Fe++;
      }
    }
  });
  const et = n.useCallback(() => {
    const ue = K.current, Ne = S.current;
    if (!ue) return;
    const Fe = re.current, qe = Se.current, nt = ce.current, Je = ie.current, pt = Te.current, kt = ze.current, ht = Math.max(0, Math.floor(Fe / In)), l = Math.min(
      Math.ceil(nt / In) - 1,
      Math.ceil((Fe + qe) / In)
    ), X = $.current, P = v.current, be = /* @__PURE__ */ new Set(), ae = window.devicePixelRatio || 1, Be = (dt) => dt * pt, at = ge.current;
    for (let dt = ht; dt <= l; dt++) {
      be.add(dt);
      let Me = X.get(dt);
      Me || (Me = document.createElement("canvas"), Me.style.position = "absolute", Me.style.top = "0", Me.style.left = "0", Me.style.pointerEvents = "none", Me.style.willChange = "transform", Me.style.transform = `translateX(${dt * In}px)`, X.set(dt, Me), ue.appendChild(Me));
      const ut = `${dt}-${kt}`;
      if (Me.dataset.ck === ut) continue;
      const Ut = P.get(ut);
      if (Ut) {
        const Mt = dt * In, Ot = Math.min(In, nt - Mt);
        Me.width = Math.ceil(Ot * ae), Me.height = Math.ceil(Je * ae), Me.style.width = `${Ot}px`, Me.style.height = `${Je}px`;
        const Yt = Me.getContext("2d");
        Yt && Yt.drawImage(Ut, 0, 0), Me.dataset.ck = ut;
      } else
        ri(Me, dt, In, Je, at, Be, nt), Me.dataset.ck = ut, createImageBitmap(Me).then((Mt) => {
          v.current === P ? P.set(ut, Mt) : Mt.close();
        }).catch(() => {
        });
    }
    X.forEach((dt, Me) => {
      be.has(Me) || (dt.remove(), X.delete(Me));
    });
    const Ge = Math.ceil(nt / In) - 1, Ve = [ht - 1, l + 1].filter(
      (dt) => dt >= 0 && dt <= Ge && !P.has(`${dt}-${kt}`)
    );
    Ve.length > 0 && requestIdleCallback(
      (dt) => {
        for (const Me of Ve) {
          if (dt.timeRemaining() < 10 || v.current !== P) break;
          const ut = `${Me}-${kt}`;
          if (P.has(ut)) continue;
          const Ut = document.createElement("canvas");
          ri(Ut, Me, In, Je, at, Be, nt), createImageBitmap(Ut).then((Mt) => {
            v.current === P ? P.set(ut, Mt) : Mt.close();
          }).catch(() => {
          });
        }
      },
      { timeout: 500 }
    ), Ne && Zm(Ne, J.current, Fe, qe, pt, ge.current);
  }, []);
  n.useEffect(() => {
    et();
  }, [F, b, xe, ve, A, et]), n.useEffect(() => () => {
    $.current.forEach((ue) => ue.remove()), $.current.clear(), v.current.forEach((ue) => ue.close()), v.current.clear(), qm(J.current);
  }, []);
  const Ye = n.useCallback(() => {
    if (!oe.current || !E.current) {
      ne.current = null;
      return;
    }
    const ue = x.current, Ne = se.current;
    if (ue) {
      const pt = ue.getBoundingClientRect(), kt = pt.left, ht = pt.right, l = kt - Ne, X = Ne - ht, P = Ne - kt, be = ht - Ne, ae = ue.scrollLeft > 0, Be = ue.scrollLeft + ue.clientWidth < ue.scrollWidth, at = P >= 0 && P < ys, Ge = l > 0;
      if ((Ge || at) && ae) {
        const Me = Ge ? l : (ys - P) * 0.5, ut = Math.min(Me * ni, ti);
        ue.scrollLeft -= ut;
      }
      const Ve = be >= 0 && be < ys, dt = X > 0;
      if ((dt || Ve) && Be) {
        const Me = dt ? X : (ys - be) * 0.5, ut = Math.min(Me * ni, ti);
        ue.scrollLeft += ut;
      }
    }
    let Fe;
    if (ue) {
      const pt = ue.getBoundingClientRect();
      Fe = Ne - pt.left + ue.scrollLeft;
    } else {
      const pt = E.current.getBoundingClientRect();
      Fe = Ne - pt.left;
    }
    const qe = Math.floor(te.current * ge.current), nt = Math.min(qe, Math.max(0, Math.round(V.current(Fe)))), Je = performance.now();
    Vi({
      state: fe.current,
      pointerX: Fe,
      targetFrame: nt,
      pixelsPerSecond: z.current,
      nowMs: Je
    }) && D.current(nt), ne.current = requestAnimationFrame(Ye);
  }, []), Xe = n.useCallback((ue) => {
    if (!E.current) return 0;
    const Ne = E.current.closest(".timeline-container");
    if (Ne) {
      const qe = Ne.getBoundingClientRect();
      return ue - qe.left + Ne.scrollLeft;
    }
    const Fe = E.current.getBoundingClientRect();
    return ue - Fe.left;
  }, []), vt = n.useCallback((ue) => {
    U.current === null || De.current === null || (ue.preventDefault(), ue.stopPropagation(), Ce.current = Xe(ue.clientX), ye.current = U.current, O.current = De.current, W.current = U.current, Ie.current = De.current, h(!0));
  }, [Xe]), ft = n.useCallback((ue) => {
    if (ue.preventDefault(), ue.stopPropagation(), !E.current) return;
    const { selectedMarkerId: Ne } = _e.getState();
    Ne && H(null), x.current = E.current.closest(".timeline-container"), se.current = ue.clientX, oe.current = !0, B.current();
    let Fe;
    if (x.current) {
      const Je = x.current.getBoundingClientRect();
      Fe = ue.clientX - Je.left + x.current.scrollLeft;
    } else {
      const Je = E.current.getBoundingClientRect();
      Fe = ue.clientX - Je.left;
    }
    const qe = Math.floor(te.current * ge.current), nt = Math.min(qe, Math.max(0, Math.round(V.current(Fe))));
    D.current(nt), fe.current = Ps({
      pointerX: Fe,
      frame: nt,
      nowMs: performance.now()
    }), L(!0), ne.current === null && (ne.current = requestAnimationFrame(Ye));
  }, [H, Ye]);
  return n.useEffect(() => {
    if (!u) return;
    const ue = document.body.style.cursor;
    document.body.style.cursor = "grabbing";
    const Ne = (qe) => {
      se.current = qe.clientX;
    }, Fe = () => {
      oe.current = !1, ne.current !== null && (cancelAnimationFrame(ne.current), ne.current = null), L(!1), G.current(null);
    };
    return document.addEventListener("mousemove", Ne), document.addEventListener("mouseup", Fe), () => {
      document.removeEventListener("mousemove", Ne), document.removeEventListener("mouseup", Fe), document.body.style.cursor = ue, oe.current = !1, ne.current !== null && (cancelAnimationFrame(ne.current), ne.current = null);
    };
  }, [u]), n.useEffect(() => {
    if (!I) return;
    const ue = document.body.style.cursor;
    document.body.style.cursor = "move";
    const Ne = (qe) => {
      const nt = Xe(qe.clientX), Je = Math.round(
        V.current(nt) - V.current(Ce.current)
      ), pt = ye.current, kt = O.current, ht = Math.max(1, kt - pt), l = Math.floor(te.current * ge.current), X = Math.max(0, l - ht), P = Math.max(0, Math.min(pt + Je, X)), be = P + ht;
      P === W.current && be === Ie.current || (he.setState({ inPoint: P, outPoint: be }), W.current = P, Ie.current = be);
    }, Fe = () => {
      h(!1), le.current();
    };
    return document.addEventListener("mousemove", Ne), document.addEventListener("mouseup", Fe), () => {
      document.removeEventListener("mousemove", Ne), document.removeEventListener("mouseup", Fe), document.body.style.cursor = ue;
    };
  }, [I, Xe]), /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: E,
      className: "relative border-b border-border/80",
      onMouseDown: ft,
      style: {
        background: "linear-gradient(to bottom, oklch(0.22 0 0 / 0.30), oklch(0.22 0 0 / 0.20), oklch(0.22 0 0 / 0.10))",
        userSelect: "none",
        height: St.timelineRulerHeight,
        width: s ? `${s}px` : void 0,
        minWidth: s ? `${s}px` : void 0
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: K,
            className: "absolute inset-0",
            style: { pointerEvents: "none" }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: S,
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            style: { contain: "layout style paint" }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute inset-y-0 left-0 w-8 pointer-events-none",
            style: { background: "linear-gradient(to right, oklch(0.15 0 0 / 0.15), transparent)" }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute inset-y-0 right-0 w-8 pointer-events-none",
            style: { background: "linear-gradient(to left, oklch(0.15 0 0 / 0.15), transparent)" }
          }
        ),
        M !== null && R !== null && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute top-0 bottom-0 pointer-events-none",
            style: {
              left: `${c(M / b)}px`,
              width: `${Math.max(2, c((R - M) / b))}px`,
              backgroundColor: "oklch(0.50 0.10 220 / 0.16)",
              borderLeft: "1px solid color-mix(in oklch, var(--color-timeline-io-range-border) 45%, transparent)",
              borderRight: "1px solid color-mix(in oklch, var(--color-timeline-io-range-border) 45%, transparent)",
              zIndex: 9
            }
          }
        ),
        M !== null && R !== null && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute cursor-move",
            onMouseDown: vt,
            style: {
              left: `${c(M / b)}px`,
              bottom: "0px",
              height: "11px",
              width: `${Math.max(2, c((R - M) / b))}px`,
              background: "linear-gradient(to bottom, var(--color-timeline-io-range-fill), color-mix(in oklch, var(--color-timeline-io-range-fill) 82%, black))",
              border: "1px solid var(--color-timeline-io-range-border)",
              borderRadius: "2px",
              boxShadow: "inset 0 1px 0 color-mix(in oklch, white 22%, transparent), 0 0 8px var(--color-timeline-io-range-glow)",
              zIndex: 11,
              pointerEvents: "auto"
            }
          }
        ),
        /* @__PURE__ */ e.jsx(Km, {}),
        /* @__PURE__ */ e.jsx(Wm, {})
      ]
    }
  );
});
function ii({ inRuler: r = !1, maxFrame: t }) {
  const s = Ue((u) => u.setCurrentFrame), o = Ue((u) => u.setScrubFrame), { frameToPixels: i, pixelsToFrame: c, pixelsPerSecond: m } = on(), [d, b] = n.useState(!1), [M, R] = n.useState(!1), N = n.useRef(null), w = n.useRef(_e.getState().activeTool);
  n.useEffect(() => _e.subscribe((u) => {
    w.current = u.activeTool;
  }), []);
  const f = n.useRef(c), T = n.useRef(s), H = n.useRef(o), E = n.useRef(t), K = n.useRef(i), $ = n.useRef(m), v = n.useRef(null), Y = n.useRef(null), S = n.useRef(null), J = n.useRef(Ps({
    frame: Ue.getState().currentFrame,
    nowMs: performance.now()
  })), A = n.useRef(Ue.getState().setPreviewFrame);
  n.useEffect(() => Ue.subscribe((u) => {
    A.current = u.setPreviewFrame;
  }), []), n.useEffect(() => {
    f.current = c, T.current = s, H.current = o, E.current = t, K.current = i, $.current = m;
  }, [c, s, o, t, i, m]), n.useEffect(() => {
    const u = (L) => {
      if (!N.current) return;
      const I = Math.round(K.current(L));
      N.current.style.left = `${I}px`;
    };
    return u(Ue.getState().currentFrame), Ue.subscribe((L) => {
      u(L.currentFrame);
    });
  }, []), n.useLayoutEffect(() => {
    if (!N.current) return;
    const u = Ue.getState().currentFrame, L = Math.round(i(u));
    N.current.style.left = `${L}px`;
  }, [i]), n.useEffect(() => {
    const u = () => R(!0), L = () => R(!1);
    return document.addEventListener("dragstart", u), document.addEventListener("dragend", L), document.addEventListener("drop", L), () => {
      document.removeEventListener("dragstart", u), document.removeEventListener("dragend", L), document.removeEventListener("drop", L);
    };
  }, []);
  const p = n.useCallback((u) => {
    u.preventDefault(), u.stopPropagation(), Ue.getState().setPreviewFrame(null);
    const I = (r ? N.current?.closest(".timeline-ruler") : N.current?.closest(".timeline-tracks"))?.getBoundingClientRect(), h = I ? u.clientX - I.left : K.current(Ue.getState().currentFrame);
    J.current = Ps({
      pointerX: h,
      frame: Ue.getState().currentFrame,
      nowMs: performance.now()
    }), b(!0);
  }, [r]);
  return n.useEffect(() => {
    if (!d) return;
    const u = document.body.style.cursor;
    document.body.style.cursor = "grabbing";
    const L = (h) => {
      const V = r ? N.current?.closest(".timeline-ruler") : N.current?.closest(".timeline-tracks");
      if (!V) return;
      const C = V.getBoundingClientRect(), D = h.clientX - C.left;
      let G = Math.max(0, Math.round(f.current(D)));
      E.current !== void 0 && (G = Math.min(G, E.current)), v.current = G, Y.current = D, S.current === null && (S.current = requestAnimationFrame(() => {
        if (S.current = null, v.current !== null && Y.current !== null) {
          const le = v.current, B = Y.current;
          Vi({
            state: J.current,
            pointerX: B,
            targetFrame: le,
            pixelsPerSecond: $.current,
            nowMs: performance.now()
          }) && H.current(le);
        }
      }));
    }, I = () => {
      const h = v.current;
      S.current !== null && (cancelAnimationFrame(S.current), S.current = null), h !== null && T.current(h), v.current = null, Y.current = null, A.current(null), b(!1);
    };
    return document.addEventListener("mousemove", L), document.addEventListener("mouseup", I), () => {
      document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", I), document.body.style.cursor = u, S.current !== null && (cancelAnimationFrame(S.current), S.current = null);
    };
  }, [d, r]), /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: N,
      className: "absolute top-0 bottom-0",
      style: {
        // left is set via ref subscription in useEffect (no re-renders during playback)
        // Ruler: slightly wider + glow; track lanes: hairline (OpenCut-style)
        width: r ? "2px" : "1px",
        pointerEvents: "none",
        zIndex: 9999
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute inset-0 bg-timeline-playhead pointer-events-none",
            style: {
              boxShadow: r ? "0 0 8px color-mix(in oklch, var(--color-timeline-playhead) 50%, transparent)" : "0 0 4px color-mix(in oklch, var(--color-timeline-playhead) 35%, transparent)"
            }
          }
        ),
        r && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute",
              style: {
                top: "-12px",
                left: "50%",
                width: "20px",
                height: "20px",
                transform: "translateX(-50%)",
                cursor: w.current === "razor" ? "default" : d ? "grabbing" : "default",
                // Pass through pointer events in razor mode or during external drag operations
                pointerEvents: w.current === "razor" || M ? "none" : "auto",
                backgroundColor: "transparent"
              },
              onMouseDown: p
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute bg-timeline-playhead pointer-events-none",
              style: {
                top: "-6px",
                left: "50%",
                width: "10px",
                height: "10px",
                boxShadow: "0 0 8px color-mix(in oklch, var(--color-timeline-playhead) 50%, transparent)",
                transform: "translateX(-50%) rotate(45deg)",
                transformOrigin: "center"
              }
            }
          )
        ] })
      ]
    }
  );
}
function li({ inRuler: r = !1, maxFrame: t }) {
  const { frameToPixels: s, fps: o } = on(), i = n.useRef(null), c = n.useRef(null), m = n.useRef(null), d = n.useRef(null), b = n.useRef(s), M = n.useRef(o), R = n.useRef(t);
  return n.useEffect(() => {
    b.current = s, M.current = o, R.current = t;
  }, [s, o, t]), n.useEffect(() => {
    const N = (w) => {
      if (!i.current) return;
      if (w === null) {
        i.current.style.display = "none";
        return;
      }
      let f = Math.max(0, w);
      R.current !== void 0 && (f = Math.min(f, R.current));
      const T = Math.round(b.current(f));
      i.current.style.display = "", i.current.style.left = `${T}px`, c.current && (c.current.textContent = xd(f, M.current));
    };
    return N(Ue.getState().hoverFrame), Ue.subscribe((w) => {
      N(w.hoverFrame);
    });
  }, []), n.useLayoutEffect(() => {
    if (!i.current) return;
    const N = Ue.getState().hoverFrame;
    if (N === null) return;
    let w = Math.max(0, N);
    t !== void 0 && (w = Math.min(w, t));
    const f = Math.round(s(w));
    i.current.style.left = `${f}px`;
  }, [s, t]), n.useEffect(() => {
    const N = (w) => {
      const f = w === "razor", T = w === "rate-stretch", H = w === "trim-edit", E = f ? "rgba(239, 68, 68, 0.7)" : T ? "rgba(168, 85, 247, 0.7)" : H ? "rgba(234, 179, 8, 0.7)" : "rgba(255, 255, 255, 0.3)", K = f ? "rgba(239, 68, 68, 0.8)" : T ? "rgba(168, 85, 247, 0.8)" : H ? "rgba(234, 179, 8, 0.8)" : "rgba(255, 255, 255, 0.4)";
      m.current && (m.current.style.backgroundColor = E), d.current && (d.current.style.backgroundColor = K);
    };
    return N(_e.getState().activeTool), _e.subscribe((w, f) => {
      w.activeTool !== f.activeTool && N(w.activeTool);
    });
  }, []), /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: i,
      className: "absolute top-0 bottom-0",
      style: {
        display: "none",
        // Hidden by default, shown via ref subscription
        width: "1px",
        pointerEvents: "none",
        // Above the playhead (z=9999) so the razor/rate/trim cursor stays
        // visible when it snaps onto the playhead — otherwise the playhead
        // hides it and the user can't see where the cut will land.
        zIndex: 1e4
      },
      children: [
        /* @__PURE__ */ e.jsx("div", { ref: m, className: "absolute inset-0 bg-white/30" }),
        r && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              ref: d,
              className: "absolute bg-white/40",
              style: {
                top: "-5px",
                left: "50%",
                width: "8px",
                height: "8px",
                transform: "translateX(-50%) rotate(45deg)",
                transformOrigin: "center"
              }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              ref: c,
              className: "absolute bg-black/80 text-white font-mono rounded px-1.5 py-0.5 whitespace-nowrap",
              style: {
                top: "-22px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "10px",
                lineHeight: "12px"
              }
            }
          )
        ] })
      ]
    }
  );
}
const Bl = "application/x-kubeez-transition", Kt = Js()((r) => ({
  draggedTransition: null,
  preview: null,
  invalidHint: null,
  setDraggedTransition: (t) => r({ draggedTransition: t }),
  setPreview: (t) => r({ preview: t }),
  setInvalidHint: (t) => r({ invalidHint: t }),
  clearPreview: () => r({ preview: null }),
  clearDrag: () => r({ draggedTransition: null, preview: null, invalidHint: null })
})), ci = n.memo(function({
  clipWidth: t,
  height: s = bd,
  className: o = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `absolute left-0 right-0 overflow-hidden bg-zinc-900/30 ${o}`,
      style: {
        height: s,
        width: t,
        // Subtle shimmer effect using CSS animation
        backgroundImage: `linear-gradient(
          90deg,
          transparent 0%,
          rgba(255,255,255,0.03) 50%,
          transparent 100%
        )`,
        backgroundSize: `${Wi * 2}px 100%`,
        animation: "filmstrip-shimmer 1.5s ease-in-out infinite"
      }
    }
  );
}), Qm = an("ClipFilmstrip"), ef = 80, di = 0.75, tf = 60, nf = 32, rf = 24, sf = 16, of = 260, af = 2, lf = 1, ui = 8, mi = 12, fi = 18, Xl = 120, Vl = 170;
function cf(r, t) {
  if (r.length === 0) return null;
  let s = 0, o = r.length - 1, i = r[0], c = Math.abs(i.timestamp - t);
  for (; s <= o; ) {
    const m = Math.floor((s + o) / 2), d = r[m], b = Math.abs(d.timestamp - t);
    b < c && (c = b, i = d), d.timestamp < t ? s = m + 1 : o = m - 1;
  }
  return i;
}
function df(r, t) {
  return r <= t ? 1 : Math.ceil(r / t);
}
function uf(r) {
  return !Number.isFinite(r) || r <= 0 ? 1 : r >= Vl ? Math.max(1, Math.round(r / fi) * fi) : r >= Xl ? Math.max(1, Math.round(r / mi) * mi) : Math.max(1, Math.round(r / ui) * ui);
}
function mf(r) {
  return r >= Vl ? sf : r >= Xl ? rf : nf;
}
const ff = n.memo(function({
  src: t,
  bitmap: s,
  x: o,
  height: i,
  width: c,
  sourceWidth: m
}) {
  const [d, b] = n.useState(null), M = n.useCallback((w) => {
    if (!w || !s || s.width === 0 || s.height === 0) return;
    w.width = s.width, w.height = s.height;
    const f = w.getContext("2d");
    try {
      f && f.drawImage(s, 0, 0);
    } catch {
    }
  }, [s]), R = n.useCallback(() => {
    b(t);
  }, [t]);
  return s ? /* @__PURE__ */ e.jsx(
    "canvas",
    {
      ref: M,
      className: "absolute top-0",
      style: {
        left: o,
        width: c,
        height: i,
        objectFit: "cover"
      }
    }
  ) : !t || d === t ? null : c > m + 1 ? /* @__PURE__ */ e.jsx(
    "div",
    {
      "aria-hidden": !0,
      className: "absolute top-0",
      style: {
        left: o,
        width: c,
        height: i,
        backgroundImage: `url(${t})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: `${m}px ${i}px`,
        backgroundPosition: "left top"
      }
    }
  ) : /* @__PURE__ */ e.jsx(
    "img",
    {
      src: t,
      alt: "",
      loading: "lazy",
      decoding: "async",
      className: "absolute top-0",
      onError: R,
      style: {
        left: o,
        width: c,
        height: i,
        objectFit: "cover"
      }
    }
  );
}), pi = n.memo(function({
  mediaId: t,
  clipWidth: s,
  sourceStart: o,
  sourceDuration: i,
  trimStart: c,
  speed: m,
  isVisible: d,
  visibleStartRatio: b = 0,
  visibleEndRatio: M = 1,
  pixelsPerSecond: R,
  preferImmediateRendering: N = !1
}) {
  const w = n.useRef(null), [f, T] = n.useState(0), { blobUrl: H, setBlobUrl: E, hasStartedLoadingRef: K, blobUrlVersion: $ } = Ko(t), [v, Y] = n.useState(!1), S = n.useRef(null);
  n.useEffect(() => {
    const z = w.current;
    if (!z) return;
    const te = () => {
      const De = z.parentElement;
      De && T(De.clientHeight);
    };
    te();
    const U = new ResizeObserver(te);
    return z.parentElement && U.observe(z.parentElement), () => U.disconnect();
  }, []);
  const J = Math.round(f * (16 / 9)) || Wi, A = R, p = s, u = Math.max(0, o + c), L = !N && v, I = L ? uf(A) : A, h = n.useRef(R);
  n.useEffect(() => {
    N || h.current !== R && (h.current = R, Y(!0), S.current && clearTimeout(S.current), S.current = setTimeout(() => {
      Y(!1), S.current = null;
    }, ef));
  }, [R, N]), n.useEffect(() => () => {
    S.current && clearTimeout(S.current);
  }, []);
  const V = n.useMemo(() => {
    if (L || i <= 0 || A <= 0 || p <= 0)
      return null;
    const z = p / A * m, te = Math.min(
      z + di * 2,
      tf
    ), U = Math.max(0, u - di), De = Math.min(i, U + te);
    return De <= U ? null : { startTime: U, endTime: De };
  }, [
    i,
    A,
    p,
    m,
    u,
    L
  ]);
  n.useEffect(() => {
    if (!d || !t || K.current)
      return;
    K.current = !0;
    let z = !0;
    return (async () => {
      try {
        const U = await jr(t);
        z && U && E(U);
      } catch (U) {
        Qm.error("Failed to load media blob URL:", U);
      }
    })(), () => {
      z = !1;
    };
  }, [t, d, $, E]);
  const { frames: C, isLoading: D, isComplete: G, error: le } = vd({
    mediaId: t,
    blobUrl: H,
    duration: i,
    isVisible: d,
    enabled: !!H && i > 0,
    priorityWindow: V
  }), B = n.useMemo(() => {
    if (!C || C.length === 0) return null;
    const z = /* @__PURE__ */ new Map();
    for (const te of C)
      z.set(te.index, te);
    return z;
  }, [C]), ge = n.useMemo(() => {
    if (!C || C.length === 0 || J === 0 || I <= 0) return [];
    const z = Math.ceil(p / J);
    if (z <= 0) return [];
    const te = Math.max(0, Math.min(1, b)), U = Math.max(te, Math.min(1, M)), De = p * te, Ce = p * U, ye = L ? lf : af, O = Math.max(0, De - J * ye), W = Math.min(p, Ce + J * ye), Ie = Math.max(0, Math.floor(O / J)), re = Math.min(z, Math.ceil(W / J)), j = Math.max(0, re - Ie);
    if (j <= 0) return [];
    const x = L ? mf(A) : of, se = df(j, x), ne = [];
    for (let oe = Ie; oe < re; oe += se) {
      const fe = oe * J;
      if (fe >= W) break;
      const je = Math.max(
        1,
        Math.min(p, Math.min((oe + se) * J, W)) - fe
      ), xe = fe + je * 0.5, ve = u + xe / I * m, F = Math.max(0, Math.round(ve)), _ = B?.get(F) ?? cf(C, ve);
      _ && ne.push({ tileIndex: oe, frame: _, x: fe, width: je });
    }
    return ne;
  }, [
    C,
    B,
    p,
    I,
    u,
    m,
    J,
    b,
    M,
    L
  ]);
  return le ? null : !C || C.length === 0 || f === 0 ? !D && f > 0 ? /* @__PURE__ */ e.jsx("div", { ref: w, className: "absolute inset-0" }) : /* @__PURE__ */ e.jsx("div", { ref: w, className: "absolute inset-0", children: /* @__PURE__ */ e.jsx(ci, { clipWidth: s, height: f || 40 }) }) : /* @__PURE__ */ e.jsxs("div", { ref: w, className: "absolute inset-0", children: [
    !G && /* @__PURE__ */ e.jsx(ci, { clipWidth: s, height: f }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "absolute left-0 top-0 overflow-hidden pointer-events-none",
        style: {
          width: p,
          height: f,
          contentVisibility: "auto",
          containIntrinsicSize: `${p}px ${f}px`
        },
        children: ge.map(({ tileIndex: z, frame: te, x: U, width: De }) => /* @__PURE__ */ e.jsx(
          ff,
          {
            src: te.url,
            bitmap: te.bitmap,
            x: U,
            height: f,
            width: De,
            sourceWidth: J
          },
          z
        ))
      }
    )
  ] });
}), pf = an("ImageFilmstrip"), hf = n.memo(function({
  bitmap: t,
  x: s,
  width: o,
  height: i
}) {
  const c = n.useCallback((m) => {
    if (!m || !t || t.width === 0 || t.height === 0) return;
    m.width = t.width, m.height = t.height;
    const d = m.getContext("2d");
    try {
      d && d.drawImage(t, 0, 0);
    } catch {
    }
  }, [t]);
  return /* @__PURE__ */ e.jsx(
    "canvas",
    {
      ref: c,
      className: "absolute top-0",
      style: { left: s, width: o, height: i, objectFit: "cover" }
    }
  );
}), hi = 2, gf = n.memo(function({
  mediaId: t,
  isAnimated: s,
  animationFormat: o = "gif",
  clipWidth: i,
  isVisible: c,
  src: m,
  sourceStart: d,
  trimStart: b,
  speed: M,
  visibleStartRatio: R = 0,
  visibleEndRatio: N = 1,
  pixelsPerSecond: w
}) {
  const f = n.useRef(null), [T, H] = n.useState(0);
  n.useEffect(() => {
    const I = f.current;
    if (!I) return;
    const h = () => {
      const C = I.parentElement;
      C && H(C.clientHeight);
    };
    h();
    const V = new ResizeObserver(h);
    return I.parentElement && V.observe(I.parentElement), () => V.disconnect();
  }, []);
  const { blobUrl: E, setBlobUrl: K, hasStartedLoadingRef: $, blobUrlVersion: v } = Ko(t);
  n.useEffect(() => {
    if (!c || !t || $.current) return;
    $.current = !0;
    let I = !0;
    return jr(t).then((h) => {
      I && h && K(h);
    }).catch((h) => pf.error("Failed to load media blob URL:", h)), () => {
      I = !1;
    };
  }, [t, c, v, K]);
  const { frames: Y, durations: S, totalDuration: J } = yd({
    mediaId: t,
    blobUrl: E,
    isVisible: c,
    enabled: s && !!E,
    format: o
  }), A = Math.round(T * (16 / 9)) || 80, p = E || m, u = Math.max(0, d + b), L = n.useMemo(() => {
    if (!s || !Y || Y.length === 0 || !S || J === null || J <= 0 || T === 0)
      return [];
    const I = Math.ceil(i / A);
    if (I <= 0) return [];
    const h = i * Math.max(0, Math.min(1, R)), V = i * Math.max(R, Math.min(1, N)), C = Math.max(0, h - A * hi), D = Math.min(i, V + A * hi), G = Math.max(0, Math.floor(C / A)), le = Math.min(I, Math.ceil(D / A)), B = [];
    let ge = 0;
    for (const te of S)
      ge += te, B.push(ge);
    const z = [];
    for (let te = G; te < le; te++) {
      const U = te * A, De = Math.min(A, i - U);
      if (De <= 0) break;
      const Ce = U + De * 0.5, O = (u + Ce / w * M) * 1e3 % J;
      let W = 0;
      for (let re = 0; re < B.length; re++) {
        if ((B[re] ?? 0) > O) {
          W = re;
          break;
        }
        W = re;
      }
      const Ie = Y[W % Y.length];
      Ie && z.push({ tileIndex: te, bitmap: Ie, x: U, width: De });
    }
    return z;
  }, [s, Y, S, J, i, A, T, M, u, w, R, N]);
  return s ? T === 0 || !Y ? /* @__PURE__ */ e.jsx("div", { ref: f, className: "absolute inset-0" }) : /* @__PURE__ */ e.jsx("div", { ref: f, className: "absolute inset-0", children: /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute left-0 top-0 overflow-hidden pointer-events-none",
      style: { width: i, height: T },
      children: L.map(({ tileIndex: I, bitmap: h, x: V, width: C }) => /* @__PURE__ */ e.jsx(
        hf,
        {
          bitmap: h,
          x: V,
          width: C,
          height: T
        },
        I
      ))
    }
  ) }) : T === 0 || !p ? /* @__PURE__ */ e.jsx("div", { ref: f, className: "absolute inset-0" }) : /* @__PURE__ */ e.jsx("div", { ref: f, className: "absolute inset-0", children: /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute left-0 top-0 pointer-events-none",
      style: {
        width: i,
        height: T,
        backgroundImage: `url(${p})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: `auto ${T}px`,
        backgroundPosition: "left center"
      }
    }
  ) });
}), yo = 1e3, Kl = n.memo(function({
  width: t,
  height: s,
  renderTile: o,
  className: i = "",
  version: c = 0
}) {
  const m = n.useRef(null), d = n.useRef(/* @__PURE__ */ new Map()), b = Math.ceil(t / yo);
  return n.useEffect(() => {
    const M = m.current;
    if (!M) return;
    const R = d.current, N = window.devicePixelRatio || 1;
    for (let w = 0; w < b; w++) {
      let f = R.get(w);
      f || (f = document.createElement("canvas"), f.style.position = "absolute", f.style.top = "0", f.style.left = "0", f.style.pointerEvents = "none", f.style.willChange = "transform", R.set(w, f), M.appendChild(f));
      const T = w * yo, H = Math.min(yo, t - T);
      f.style.transform = `translateX(${T}px)`, f.width = Math.ceil(H * N), f.height = Math.ceil(s * N), f.style.width = `${H}px`, f.style.height = `${s}px`;
      const E = f.getContext("2d");
      E && (E.scale(N, N), E.clearRect(0, 0, H, s), o(E, w, T, H));
    }
    for (const [w, f] of R)
      w >= b && (f.remove(), R.delete(w));
  }, [t, s, b, c, o]), n.useEffect(() => () => {
    const M = d.current;
    for (const R of M.values())
      R.remove();
    M.clear();
  }, []), /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: m,
      className: `absolute inset-0 ${i}`,
      style: {
        pointerEvents: "none",
        width: `${t}px`,
        height: `${s}px`
      }
    }
  );
}), xf = 32, Vs = n.memo(function({
  clipWidth: t,
  height: s = xf,
  className: o = ""
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `absolute left-0 right-0 overflow-hidden bg-timeline-audio/10 ${o}`,
      style: {
        height: s,
        width: t,
        // Subtle shimmer effect matching filmstrip
        backgroundImage: `linear-gradient(
          90deg,
          transparent 0%,
          rgba(158, 107, 214, 0.1) 50%,
          transparent 100%
        )`,
        backgroundSize: "120px 100%",
        animation: "filmstrip-shimmer 1.5s ease-in-out infinite"
      }
    }
  );
}), bf = an("ClipWaveform"), vf = 3, yf = n.memo(function({
  mediaId: t,
  clipWidth: s,
  sourceStart: o,
  sourceDuration: i,
  trimStart: c,
  speed: m,
  fps: d,
  isVisible: b,
  pixelsPerSecond: M
}) {
  const R = n.useRef(null), [N, w] = n.useState(0), { blobUrl: f, setBlobUrl: T, hasStartedLoadingRef: H, blobUrlVersion: E } = Ko(t);
  n.useEffect(() => {
    const C = R.current;
    if (!C) return;
    const D = () => {
      const le = C.parentElement;
      le && w(le.clientHeight);
    };
    D();
    const G = new ResizeObserver(D);
    return C.parentElement && G.observe(C.parentElement), () => G.disconnect();
  }, []);
  const [K, $] = n.useState(!0);
  n.useEffect(() => {
    if (H.current || !b || !t)
      return;
    H.current = !0;
    let C = !0;
    return (async () => {
      try {
        const G = await Wn.getMedia(t);
        if (!C) return;
        const le = G ? G.audioCodecSupported !== !1 || Id(G.audioCodec) : !0;
        if ($(le), !le)
          return;
        const B = await jr(t);
        C && B && T(B);
      } catch (G) {
        bf.error("Failed to load media blob URL:", G);
      }
    })(), () => {
      C = !1;
    };
  }, [t, b, E]);
  const { peaks: v, duration: Y, sampleRate: S, isLoading: J, progress: A, error: p } = wd({
    mediaId: t,
    blobUrl: f,
    isVisible: !0,
    // Always consider visible once we start - prevents re-triggers
    enabled: !!f
  }), u = n.useMemo(() => {
    if (!v || v.length === 0) return 1;
    let C = 0;
    for (let D = 0; D < v.length; D++) {
      const G = v[D] ?? 0;
      G > C && (C = G);
    }
    return C > 0 ? C : 1;
  }, [v]), L = n.useCallback(
    (C, D, G, le) => {
      if (!v || v.length === 0 || Y === 0)
        return;
      const B = o + c, ge = N / 2, z = Math.max(1, N / 2 - vf), te = new Array(le + 1).fill(0);
      C.beginPath(), C.moveTo(0, ge);
      for (let U = 0; U <= le; U++) {
        const De = (G + U) / M, Ce = B + De * m;
        if (Ce < 0 || Ce > i || S <= 0)
          continue;
        const ye = Math.floor(Ce * S);
        if (ye < 0 || ye >= v.length)
          continue;
        const O = Math.max(
          1 / S,
          1 / M * m * 0.5
        ), W = Math.max(1, Math.ceil(O * S)), Ie = Math.floor(W / 2), re = Math.max(0, ye - Ie), j = Math.min(v.length, ye + Ie + 1);
        let x = 0, se = 0, ne = 0, oe = 0;
        for (let ce = re; ce < j; ce++) {
          const ie = v[ce] ?? 0;
          ie >= x ? (se = x, x = ie) : ie > se && (se = ie), ne += ie, oe++;
        }
        if (oe === 0)
          continue;
        const fe = Math.min(1, x / u), je = Math.min(1, se / u), xe = Math.min(1, ne / oe / u), ve = Math.max(0, fe - je), F = Math.min(
          1,
          xe * 0.38 + je * 0.34 + ve * 2.35
        ), _ = F <= 1e-3 ? 0 : Math.pow(F, 1.05);
        te[U] = _ * z;
      }
      for (let U = 0; U <= le; U++)
        C.lineTo(U, ge - te[U]);
      for (let U = le; U >= 0; U--)
        C.lineTo(U, ge + te[U]);
      C.closePath(), C.fillStyle = Gi, C.fill(), C.strokeStyle = Ui, C.lineWidth = 0.75, C.stroke();
    },
    [v, Y, S, M, o, c, m, i, N, u]
  );
  if (!K || p)
    return /* @__PURE__ */ e.jsx("div", { ref: R, className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "w-full h-[1px] bg-foreground/20",
        style: { marginTop: 0 }
      }
    ) });
  if (!v || v.length === 0 || N === 0)
    return !J && N > 0 ? /* @__PURE__ */ e.jsx("div", { ref: R, className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full h-[1px] bg-foreground/20", style: { marginTop: 0 } }) }) : /* @__PURE__ */ e.jsx("div", { ref: R, className: "absolute inset-0", children: /* @__PURE__ */ e.jsx(Vs, { clipWidth: s, height: N || 24 }) });
  const I = Math.round(M / 5) * 5, V = Math.floor(A) * 1e7 + v.length * 1e4 + I + N;
  return /* @__PURE__ */ e.jsxs("div", { ref: R, className: "absolute inset-0", children: [
    J && /* @__PURE__ */ e.jsx(Vs, { clipWidth: s, height: N }),
    /* @__PURE__ */ e.jsx(
      Kl,
      {
        width: s,
        height: N,
        renderTile: L,
        version: V
      }
    )
  ] });
}), wf = an("CompoundClipWaveform"), If = 3, wo = n.memo(function({
  composition: t,
  clipWidth: s,
  sourceStart: o,
  sourceDuration: i,
  isVisible: c,
  pixelsPerSecond: m
}) {
  const d = n.useRef(null), b = n.useRef(0), [M, R] = n.useState(0), [N, w] = n.useState(/* @__PURE__ */ new Map()), [f, T] = n.useState(!1), [H, E] = n.useState(!1), K = me((C) => C.mediaById), $ = $t((C) => C.compositionById);
  n.useEffect(() => {
    const C = d.current;
    if (!C) return;
    const D = () => {
      const le = C.parentElement;
      le && R(le.clientHeight);
    };
    D();
    const G = new ResizeObserver(D);
    return C.parentElement && G.observe(C.parentElement), () => G.disconnect();
  }, []);
  const v = n.useMemo(() => {
    const C = {};
    for (const [D, G] of Object.entries(K))
      C[D] = G?.fps;
    return C;
  }, [K]), Y = n.useMemo(
    () => Cd({
      items: t.items,
      tracks: t.tracks,
      fps: t.fps,
      mediaFpsById: v,
      compositionById: $
    }),
    [t.fps, t.items, t.tracks, $, v]
  ), S = n.useMemo(
    () => Array.from(new Set(Y.map((C) => C.mediaId))).sort(),
    [Y]
  ), J = n.useMemo(() => S.join("|"), [S]);
  n.useEffect(() => {
    b.current += 1;
    const C = b.current;
    if (!c || S.length === 0) {
      w(/* @__PURE__ */ new Map()), T(!1), E(!1);
      return;
    }
    const D = S.flatMap((ge) => {
      const z = va.getFromMemoryCacheSync(ge);
      return z ? [[ge, z]] : [];
    }), G = new Map(D);
    w(G);
    const le = S.filter((ge) => !G.has(ge));
    if (le.length === 0) {
      T(!1), E(!1);
      return;
    }
    let B = !1;
    return T(!0), E(!1), Promise.allSettled(le.map(async (ge) => {
      const z = await jr(ge);
      if (!z)
        throw new Error(`Missing blob URL for ${ge}`);
      const te = await va.getWaveform(ge, z);
      return [ge, te];
    })).then((ge) => {
      if (B || C !== b.current)
        return;
      const z = new Map(G);
      let te = !1;
      for (const U of ge)
        U.status === "fulfilled" ? z.set(U.value[0], U.value[1]) : (te = !0, wf.warn("Failed to load compound waveform source", U.reason));
      w(z), E(te && z.size === 0), T(!1);
    }), () => {
      B = !0;
    };
  }, [c, S, J]);
  const A = n.useMemo(() => Y.length === 0 || N.size === 0 ? null : Sd({
    sources: Y,
    waveformsByMediaId: N,
    durationInFrames: t.durationInFrames,
    fps: t.fps
  }), [t.durationInFrames, t.fps, Y, N]), p = A?.peaks ?? null, u = A?.sampleRate ?? 0, L = n.useMemo(() => {
    if (!p || p.length === 0) return 1;
    let C = 0;
    for (let D = 0; D < p.length; D += 1) {
      const G = p[D] ?? 0;
      G > C && (C = G);
    }
    return C > 0 ? C : 1;
  }, [p]), I = n.useCallback((C, D, G, le) => {
    if (!p || p.length === 0 || u <= 0 || i <= 0)
      return;
    const B = M / 2, ge = Math.max(1, M / 2 - If), z = new Array(le + 1).fill(0);
    C.beginPath(), C.moveTo(0, B);
    for (let te = 0; te <= le; te += 1) {
      const U = (G + te) / m, De = o + U;
      if (De < 0 || De > i)
        continue;
      const Ce = Math.floor(De * u);
      if (Ce < 0 || Ce >= p.length)
        continue;
      const ye = Math.max(
        1 / u,
        1 / m * 0.5
      ), O = Math.max(1, Math.ceil(ye * u)), W = Math.floor(O / 2), Ie = Math.max(0, Ce - W), re = Math.min(p.length, Ce + W + 1);
      let j = 0, x = 0, se = 0, ne = 0;
      for (let _ = Ie; _ < re; _ += 1) {
        const ce = p[_] ?? 0;
        ce >= j ? (x = j, j = ce) : ce > x && (x = ce), se += ce, ne += 1;
      }
      if (ne === 0)
        continue;
      const oe = Math.min(1, j / L), fe = Math.min(1, x / L), je = Math.min(1, se / ne / L), xe = Math.max(0, oe - fe), ve = Math.min(1, je * 0.38 + fe * 0.34 + xe * 2.35), F = ve <= 1e-3 ? 0 : Math.pow(ve, 1.05);
      z[te] = F * ge;
    }
    for (let te = 0; te <= le; te += 1)
      C.lineTo(te, B - z[te]);
    for (let te = le; te >= 0; te -= 1)
      C.lineTo(te, B + z[te]);
    C.closePath(), C.fillStyle = Gi, C.fill(), C.strokeStyle = Ui, C.lineWidth = 0.75, C.stroke();
  }, [M, L, p, m, u, i, o]);
  if (H)
    return /* @__PURE__ */ e.jsx("div", { ref: d, className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full h-[1px] bg-foreground/20", style: { marginTop: 0 } }) });
  if (!p || p.length === 0 || M === 0)
    return !f && M > 0 ? /* @__PURE__ */ e.jsx("div", { ref: d, className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full h-[1px] bg-foreground/20", style: { marginTop: 0 } }) }) : /* @__PURE__ */ e.jsx("div", { ref: d, className: "absolute inset-0", children: /* @__PURE__ */ e.jsx(Vs, { clipWidth: s, height: M || 24 }) });
  const h = Math.round(m / 5) * 5, V = p.length * 1e4 + h + M + N.size;
  return /* @__PURE__ */ e.jsxs("div", { ref: d, className: "absolute inset-0", children: [
    f && /* @__PURE__ */ e.jsx(Vs, { clipWidth: s, height: M }),
    /* @__PURE__ */ e.jsx(
      Kl,
      {
        width: s,
        height: M,
        renderTile: I,
        version: V
      }
    )
  ] });
}), Cf = {}, Sf = n.memo(function({
  item: t,
  clipWidth: s,
  fps: o,
  isLinked: i = !1,
  isClipVisible: c,
  visibleStartRatio: m = 0,
  visibleEndRatio: d = 1,
  pixelsPerSecond: b,
  preferImmediateRendering: M = !1,
  audioWaveformScale: R = 1,
  linkedSyncOffsetFrames: N = null
}) {
  const w = es((re) => re.showWaveforms), f = es((re) => re.showFilmstrips), T = t.type === "audio" && !!t.compositionId, H = t.type === "composition" || T ? t.compositionId : void 0, E = $t(
    n.useCallback((re) => H ? re.compositionById[H] ?? null : null, [H])
  ), K = $t(
    n.useCallback((re) => H ? re.compositionById : Cf, [H])
  ), $ = lt(
    n.useCallback(
      (re) => t.type === "composition" && jd(re.items, t),
      [t]
    )
  ), v = n.useMemo(() => E ? kd({
    items: E.items,
    tracks: E.tracks,
    fps: E.fps,
    compositionById: K
  }) : {
    visualMediaId: null,
    audioMediaId: null,
    hasOwnedAudio: !1,
    hasMultipleOwnedAudioSources: !1,
    visualSource: null
  }, [E, K]), Y = v.visualSource, S = Y?.mediaId ?? null, J = w && v.hasOwnedAudio && !$, A = N === null ? null : Td(N, o), p = n.useCallback((re) => /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-center gap-1.5 overflow-hidden", children: [
    A && /* @__PURE__ */ e.jsx(
      "span",
      {
        className: "shrink-0 rounded bg-destructive/90 px-1.5 py-0.5 font-mono text-[10px] font-bold leading-none text-destructive-foreground",
        title: `Linked clips out of sync by ${A}`,
        children: A
      }
    ),
    i && /* @__PURE__ */ e.jsx(
      "span",
      {
        className: `inline-flex shrink-0 items-center justify-center rounded p-0.5 ${A ? "bg-destructive/85 text-destructive-foreground" : "bg-black/55 text-white/90"}`,
        title: A ? `Linked audio/video pair out of sync by ${A}` : "Linked audio/video pair",
        children: /* @__PURE__ */ e.jsx(Bi, { className: "h-3 w-3" })
      }
    ),
    /* @__PURE__ */ e.jsx("span", { className: "min-w-0 truncate", children: re })
  ] }), [i, A]), u = t.mediaId ?? S, L = me(
    n.useCallback((re) => u && re.mediaById[u]?.fps || o, [u, o])
  ), I = me(
    n.useCallback((re) => u && re.mediaById[u]?.duration || 0, [u])
  ), h = Math.max(1, t.sourceDuration ?? t.durationInFrames), V = Math.max(0, t.sourceStart ?? 0), C = Math.max(
    1,
    t.type === "composition" || T ? t.sourceDuration ?? E?.durationInFrames ?? t.durationInFrames : h
  ), D = Math.max(
    0,
    t.type === "composition" || T ? t.sourceStart ?? t.trimStart ?? 0 : V
  ), G = I > 0 ? I : h / L, le = I > 0 ? V / h * I : V / L, B = (t.trimStart ?? 0) / o, ge = t.speed ?? 1, z = me(
    n.useCallback((re) => S && re.mediaById[S]?.fps || o, [S, o])
  ), te = me(
    n.useCallback((re) => S && re.mediaById[S]?.duration || 0, [S])
  ), U = te > 0 ? te : (Y?.sourceDuration ?? C) / z, De = te > 0 ? (Y?.sourceStart ?? D) / Math.max(1, Y?.sourceDuration ?? C) * te : (Y?.sourceStart ?? D) / z, Ce = Y?.speed ?? 1, ye = E?.fps ?? o, O = C / ye, W = D / ye, Ie = n.useCallback((re) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex items-center gap-1.5 px-2 text-[11px] font-medium truncate shrink-0",
      style: {
        height: St.timelineClipLabelRowHeight,
        lineHeight: St.timelineClipLabelRowHeight
      },
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "rounded bg-violet-950/40 px-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-violet-100/90", children: "Compound" }),
        /* @__PURE__ */ e.jsx("div", { className: "min-w-0 flex-1", children: p(re) })
      ]
    }
  ), [p]);
  if (t.type === "video" && t.mediaId)
    return /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex flex-col", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "px-2 text-[11px] font-medium truncate shrink-0",
          style: {
            height: St.timelineClipLabelRowHeight,
            lineHeight: St.timelineClipLabelRowHeight
          },
          children: p(t.label)
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "relative overflow-hidden flex-1 min-h-0", children: f && /* @__PURE__ */ e.jsx(
        pi,
        {
          mediaId: t.mediaId,
          clipWidth: s,
          sourceStart: le,
          sourceDuration: G,
          trimStart: B,
          speed: ge,
          fps: o,
          isVisible: c,
          visibleStartRatio: m,
          visibleEndRatio: d,
          pixelsPerSecond: b,
          preferImmediateRendering: M
        }
      ) })
    ] });
  if (t.type === "audio" && t.mediaId)
    return /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex flex-col", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "px-2 text-[11px] font-medium truncate shrink-0",
          style: {
            height: St.timelineClipLabelRowHeight,
            lineHeight: St.timelineClipLabelRowHeight
          },
          children: p(t.label)
        }
      ),
      w && /* @__PURE__ */ e.jsx("div", { className: "relative overflow-hidden bg-waveform-gradient flex-1 min-h-0", children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            transform: `scaleY(var(--timeline-audio-waveform-scale, ${R}))`,
            transformOrigin: "50% 50%"
          },
          children: /* @__PURE__ */ e.jsx(
            yf,
            {
              mediaId: t.mediaId,
              clipWidth: s,
              sourceStart: le,
              sourceDuration: G,
              trimStart: B,
              speed: ge,
              fps: o,
              isVisible: c,
              pixelsPerSecond: b
            }
          )
        }
      ) })
    ] });
  if (T && E)
    return /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex flex-col", children: [
      Ie(t.label || "Compound Clip"),
      w && /* @__PURE__ */ e.jsx("div", { className: "relative overflow-hidden bg-waveform-gradient flex-1 min-h-0", children: /* @__PURE__ */ e.jsx(
        wo,
        {
          composition: E,
          clipWidth: s,
          sourceStart: W,
          sourceDuration: O,
          isVisible: c,
          pixelsPerSecond: b
        }
      ) })
    ] });
  if (t.type === "text")
    return /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex flex-col px-2 py-1 overflow-hidden", children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-[10px] text-muted-foreground truncate", children: "Text" }),
      /* @__PURE__ */ e.jsx("div", { className: "text-xs font-medium truncate flex-1", children: t.text || "Empty text" })
    ] });
  if (t.type === "composition")
    return S ? /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex flex-col", children: [
      Ie(t.label || "Compound Clip"),
      /* @__PURE__ */ e.jsx("div", { className: "relative overflow-hidden flex-1 min-h-0", children: f && /* @__PURE__ */ e.jsx(
        pi,
        {
          mediaId: S,
          clipWidth: s,
          sourceStart: De,
          sourceDuration: U,
          trimStart: 0,
          speed: Ce,
          fps: o,
          isVisible: c,
          visibleStartRatio: m,
          visibleEndRatio: d,
          pixelsPerSecond: b,
          preferImmediateRendering: M
        }
      ) }),
      J && E && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "relative overflow-hidden bg-waveform-gradient",
          style: { height: St.timelineWaveformRowHeight },
          children: /* @__PURE__ */ e.jsx(
            wo,
            {
              composition: E,
              clipWidth: s,
              sourceStart: W,
              sourceDuration: O,
              isVisible: c,
              pixelsPerSecond: b
            }
          )
        }
      )
    ] }) : v.hasOwnedAudio && E && !$ ? /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex flex-col", children: [
      Ie(t.label || "Compound Clip"),
      w && /* @__PURE__ */ e.jsx("div", { className: "relative overflow-hidden bg-waveform-gradient flex-1 min-h-0", children: /* @__PURE__ */ e.jsx(
        wo,
        {
          composition: E,
          clipWidth: s,
          sourceStart: W,
          sourceDuration: O,
          isVisible: c,
          pixelsPerSecond: b
        }
      ) })
    ] }) : /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex flex-col overflow-hidden", children: Ie(t.label || "Compound Clip") });
  if (t.type === "adjustment") {
    const re = t.effects?.filter((j) => j.enabled).length ?? 0;
    return /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex flex-col px-2 py-1 overflow-hidden", children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-[10px] text-muted-foreground truncate", children: "Adjustment Layer" }),
      /* @__PURE__ */ e.jsx("div", { className: "text-xs font-medium truncate flex-1", children: re > 0 ? `${re} effect${re > 1 ? "s" : ""}` : "No effects" })
    ] });
  }
  if (t.type === "image" && t.src && t.mediaId) {
    const re = me.getState().mediaById[t.mediaId]?.mimeType, j = re === "image/gif" || Nd(t.src), x = re === "image/webp" || Md(t.src), se = j || x;
    return /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 flex flex-col", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "px-2 text-[11px] font-medium truncate shrink-0",
          style: {
            height: St.timelineClipLabelRowHeight,
            lineHeight: St.timelineClipLabelRowHeight
          },
          children: p(t.label)
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "relative overflow-hidden flex-1 min-h-0", children: f && /* @__PURE__ */ e.jsx(
        gf,
        {
          mediaId: t.mediaId,
          isAnimated: se,
          animationFormat: x ? "webp" : "gif",
          clipWidth: s,
          isVisible: c,
          src: t.src,
          sourceStart: le,
          sourceDuration: G,
          trimStart: B,
          speed: ge,
          fps: o,
          visibleStartRatio: m,
          visibleEndRatio: d,
          pixelsPerSecond: b
        }
      ) })
    ] });
  }
  return /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-xs font-medium truncate", children: t.label });
}), jf = n.memo(function({
  hasKeyframes: t,
  currentSpeed: s,
  isStretching: o,
  stretchFeedback: i,
  isBroken: c,
  hasMediaId: m,
  isMask: d,
  isShape: b
}) {
  const M = Math.abs(s - 1) > 5e-3 && !o;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    (t || b && d || M) && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "absolute right-1 z-10 pointer-events-none flex items-center gap-1",
        style: { top: 0, height: St.timelineClipLabelRowHeight },
        children: [
          t && /* @__PURE__ */ e.jsx("span", { title: "Has keyframe animations", children: /* @__PURE__ */ e.jsx(Rd, { className: "w-3 h-3 text-primary fill-primary/50" }) }),
          b && d && /* @__PURE__ */ e.jsx(
            "span",
            {
              className: "px-1 py-0.5 text-[10px] font-bold bg-cyan-500/80 text-white rounded",
              title: "Mask",
              children: "M"
            }
          ),
          M && /* @__PURE__ */ e.jsxs(
            "span",
            {
              className: "px-1 py-0.5 text-[10px] font-bold bg-black/60 text-white rounded font-mono",
              title: `Speed: ${s.toFixed(2)}x`,
              children: [
                s.toFixed(2),
                "x"
              ]
            }
          )
        ]
      }
    ),
    c && m && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "absolute bottom-1 right-1 p-0.5 rounded bg-destructive/90 text-destructive-foreground",
        title: "Media file missing - relink in Media Library",
        children: /* @__PURE__ */ e.jsx(wr, { className: "w-3 h-3" })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: Pe(
          "absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none z-10 transition-opacity duration-75",
          o && i ? "opacity-100" : "opacity-0"
        ),
        children: /* @__PURE__ */ e.jsxs("span", { className: "text-white font-mono text-sm font-bold", children: [
          i?.speed.toFixed(2) ?? "1.00",
          "x"
        ] })
      }
    )
  ] });
});
function kf(r) {
  return !r.linkedSelectionEnabled || r.isDragging || r.isPartOfDrag ? !1 : r.linkedEditPreviewActive || r.isTrimming || r.isStretching || r.isSlipSlideActive || r.rollingEditDelta !== 0 || r.rippleEditOffset !== 0 || r.rippleEdgeDelta !== 0 || r.slipEditDelta !== 0 || r.slideEditOffset !== 0 || r.slideNeighborDelta !== 0;
}
function Tf(r, t) {
  return t ? r === "select" || r === "trim-edit" : !1;
}
const Xo = {
  edge: "rgba(239, 68, 68, 0.9)",
  glow: "0 0 8px rgba(239, 68, 68, 0.5)",
  fade: "rgba(239, 68, 68, 0.3)"
}, Vo = {
  edge: "rgba(74, 222, 128, 0.9)",
  glow: "0 0 8px rgba(74, 222, 128, 0.5)",
  fade: "rgba(74, 222, 128, 0.3)"
}, On = Tm, _n = Nm, Io = Mm, Rs = n.forwardRef(({ className: r, inset: t, children: s, ...o }, i) => /* @__PURE__ */ e.jsxs(
  Cl,
  {
    ref: i,
    className: Pe(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      r
    ),
    ...o,
    children: [
      s,
      /* @__PURE__ */ e.jsx(Ys, { className: "ml-auto" })
    ]
  }
));
Rs.displayName = Cl.displayName;
const Ds = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsx(
  Sl,
  {
    ref: s,
    className: Pe(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r
    ),
    ...t
  }
));
Ds.displayName = Sl.displayName;
const Tn = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsx(km, { container: Nn(), children: /* @__PURE__ */ e.jsx(
  jl,
  {
    ref: s,
    className: Pe(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r
    ),
    ...t
  }
) }));
Tn.displayName = jl.displayName;
const it = n.forwardRef(({ className: r, inset: t, ...s }, o) => /* @__PURE__ */ e.jsx(
  kl,
  {
    ref: o,
    className: Pe(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      t && "pl-8",
      r
    ),
    ...s
  }
));
it.displayName = kl.displayName;
const Vt = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsx(
  Tl,
  {
    ref: s,
    className: Pe("-mx-1 my-1 h-px bg-border", r),
    ...t
  }
));
Vt.displayName = Tl.displayName;
const qt = ({
  className: r,
  ...t
}) => /* @__PURE__ */ e.jsx(
  "span",
  {
    className: Pe(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      r
    ),
    ...t
  }
);
qt.displayName = "ContextMenuShortcut";
const Nf = {
  edge: "rgba(255, 255, 255, 0.85)",
  glow: "0 0 6px rgba(255, 255, 255, 0.3)",
  fade: "rgba(255, 255, 255, 0.2)"
}, Mf = {
  edge: "rgba(251, 191, 36, 0.95)",
  glow: "0 0 8px rgba(251, 191, 36, 0.5)",
  fade: "rgba(251, 191, 36, 0.3)"
}, Rf = {
  edge: "rgba(251, 191, 36, 0.9)",
  glow: "0 0 8px rgba(251, 191, 36, 0.6)",
  fade: "rgba(251, 191, 36, 0.35)"
};
function gi(r, t, s, o) {
  return s ? o ? Xo : Vo : t ? Rf : r === "ripple" ? Mf : Nf;
}
const Df = n.memo(function({
  trackLocked: t,
  isAnyDragActive: s,
  isTrimming: o,
  trimHandle: i,
  activeTool: c,
  hoveredEdge: m,
  smartTrimIntent: d,
  rollHoverEdge: b,
  activeEdges: M,
  startCursorClass: R,
  endCursorClass: N,
  startTone: w,
  endTone: f,
  hasJoinableLeft: T,
  hasJoinableRight: H,
  onTrimStart: E,
  onJoinLeft: K,
  onJoinRight: $
}) {
  const v = d === "roll-start", Y = d === "roll-end", S = b === "start", J = b === "end", A = M?.start ?? !1, p = M?.end ?? !1, u = !!M && A && (M.constrainedEdge === "start" || M.constrainedEdge === "both"), L = !!M && p && (M.constrainedEdge === "end" || M.constrainedEdge === "both"), I = !t && (!s || o || A) && (c === "select" || c === "trim-edit") && (m === "start" || o && i === "start" || S || A), h = !t && (!s || o || p) && (c === "select" || c === "trim-edit") && (m === "end" || o && i === "end" || J || p), V = gi(
    w,
    v || S,
    o && i === "start" || A,
    u
  ), C = gi(
    f,
    Y || J,
    o && i === "end" || p,
    L
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(On, { children: [
      /* @__PURE__ */ e.jsx(_n, { asChild: !0, disabled: t || !T, children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: Pe(
            "absolute left-0 top-0 bottom-0 w-3 transition-opacity duration-75",
            R,
            I ? "opacity-100" : "opacity-0 pointer-events-none"
          ),
          onMouseDown: (D) => E(D, "start"),
          children: !M && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "absolute inset-y-0 left-0",
                style: { width: "2px", background: V.edge, boxShadow: V.glow }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "absolute inset-y-0",
                style: { left: "2px", width: "8px", background: `linear-gradient(to right, ${V.fade}, transparent)` }
              }
            ),
            v && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "absolute inset-y-0",
                  style: { left: "-2px", width: "2px", background: V.edge, boxShadow: V.glow }
                }
              ),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "absolute inset-y-0",
                  style: { left: "-10px", width: "8px", background: `linear-gradient(to left, ${V.fade}, transparent)` }
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e.jsx(Tn, { children: /* @__PURE__ */ e.jsxs(it, { onClick: K, children: [
        "Join",
        /* @__PURE__ */ e.jsx(qt, { children: "J" })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs(On, { children: [
      /* @__PURE__ */ e.jsx(_n, { asChild: !0, disabled: t || !H, children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: Pe(
            "absolute right-0 top-0 bottom-0 w-3 transition-opacity duration-75",
            N,
            h ? "opacity-100" : "opacity-0 pointer-events-none"
          ),
          onMouseDown: (D) => E(D, "end"),
          children: !M && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "absolute inset-y-0 right-0",
                style: { width: "2px", background: C.edge, boxShadow: C.glow }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "absolute inset-y-0",
                style: { right: "2px", width: "8px", background: `linear-gradient(to left, ${C.fade}, transparent)` }
              }
            ),
            Y && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "absolute inset-y-0",
                  style: { right: "-2px", width: "2px", background: C.edge, boxShadow: C.glow }
                }
              ),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "absolute inset-y-0",
                  style: { right: "-10px", width: "8px", background: `linear-gradient(to right, ${C.fade}, transparent)` }
                }
              )
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ e.jsx(Tn, { children: /* @__PURE__ */ e.jsxs(it, { onClick: $, children: [
        "Join",
        /* @__PURE__ */ e.jsx(qt, { children: "J" })
      ] }) })
    ] })
  ] });
}), Co = {
  edge: "rgba(56, 189, 248, 0.9)",
  glow: "0 0 8px rgba(56, 189, 248, 0.5)",
  fade: "rgba(56, 189, 248, 0.3)"
}, Ef = n.memo(function({
  enabled: t,
  isActive: s,
  clipLeftPx: o,
  zonePx: i,
  onMouseDown: c
}) {
  return !t && !s ? null : /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute inset-y-px cursor-track-push group/trackpush",
      "data-track-push": !0,
      style: {
        left: `${o - i}px`,
        width: `${i}px`,
        zIndex: 1
      },
      onMouseDown: c,
      children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: s ? "opacity-100" : "opacity-0 group-hover/trackpush:opacity-100",
          style: { transition: "opacity 75ms", position: "absolute", inset: 0 },
          children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "absolute inset-y-0 right-0",
                style: { width: "2px", background: Co.edge, boxShadow: Co.glow }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "absolute inset-y-0",
                style: { right: "2px", width: `${Math.max(0, i - 2)}px`, background: `linear-gradient(to left, ${Co.fade}, transparent)` }
              }
            )
          ]
        }
      )
    }
  );
}), Pf = n.memo(function({
  trackLocked: t,
  isAnyDragActive: s,
  isStretching: o,
  stretchHandle: i,
  stretchConstrained: c,
  isRateStretchItem: m,
  onStretchStart: d
}) {
  const b = !t && (!s || o) && m && o && i === "start", M = !t && (!s || o) && m && o && i === "end";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: Pe(
          "absolute left-0 top-0 bottom-0 w-3 cursor-ew-resize transition-opacity duration-75",
          b ? "opacity-100" : "opacity-0 pointer-events-none"
        ),
        onMouseDown: (R) => d(R, "start"),
        children: /* @__PURE__ */ e.jsx("div", { className: Pe(
          "absolute inset-y-0 left-0 w-px rounded-l-sm bg-primary/85 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
          o && i === "start" && "opacity-0",
          c && i === "start" && "bg-red-300/95 shadow-[0_0_0_1px_rgba(252,165,165,0.35)]"
        ) })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: Pe(
          "absolute right-0 top-0 bottom-0 w-3 cursor-ew-resize transition-opacity duration-75",
          M ? "opacity-100" : "opacity-0 pointer-events-none"
        ),
        onMouseDown: (R) => d(R, "end"),
        children: /* @__PURE__ */ e.jsx("div", { className: Pe(
          "absolute inset-y-0 right-0 w-px rounded-r-sm bg-primary/85 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
          o && i === "end" && "opacity-0",
          c && i === "end" && "bg-red-300/95 shadow-[0_0_0_1px_rgba(252,165,165,0.35)]"
        ) })
      }
    )
  ] });
});
function Ff({ anchorRect: r, label: t }) {
  return r ? ss.createPortal(
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-full rounded bg-slate-950/95 px-1.5 py-0.5 text-[10px] font-medium text-white shadow-lg whitespace-nowrap",
        style: { left: r.left + r.width / 2, top: r.top - 4 },
        children: t
      }
    ),
    Nn() ?? document.body
  ) : null;
}
const Lf = n.memo(function({
  trackLocked: t,
  activeTool: s,
  clipWidth: o,
  lineYPercent: i,
  fadeInPixels: c,
  fadeOutPixels: m,
  isSelected: d,
  isEditing: b,
  curveEditingHandle: M,
  fadeInLabel: R,
  fadeOutLabel: N,
  fadeInCurveDot: w,
  fadeOutCurveDot: f,
  onFadeHandleMouseDown: T,
  onFadeHandleDoubleClick: H,
  onFadeCurveDotMouseDown: E,
  onFadeCurveDotDoubleClick: K
}) {
  const [$, v] = n.useState(null), Y = n.useRef(null), S = n.useRef(null), [J, A] = n.useState(null);
  if (n.useLayoutEffect(() => {
    if (!$) {
      A(null);
      return;
    }
    const D = $ === "in" ? Y.current : S.current;
    D && A(D.getBoundingClientRect());
  }, [$, c, m, o]), t || s !== "select" || !d && !b)
    return null;
  const p = Fs({ handle: "in", clipWidthPixels: o, fadePixels: c }), u = Fs({ handle: "out", clipWidthPixels: o, fadePixels: m }), L = $, I = $ === "in" ? R : $ === "out" ? N : null, h = "-2px", V = () => Pe(
    "absolute h-2.5 w-2.5 -translate-x-1/2 rounded-[2px] border pointer-events-auto transition-opacity cursor-ew-resize touch-none focus-visible:outline-none",
    "border-slate-950/70 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.25)]",
    "after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-l-[3px] after:border-r-[3px] after:border-t-[4px] after:border-l-transparent after:border-r-transparent after:border-t-white/90"
  ), C = (D) => Pe(
    "absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 shadow-[0_0_0_1px_rgba(15,23,42,0.2)] transition-opacity pointer-events-auto cursor-move touch-none focus-visible:outline-none",
    M === D || $ === D ? "bg-primary opacity-100" : "bg-primary/90"
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 pointer-events-none z-40", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: Y,
        type: "button",
        className: V(),
        style: { left: `${p}px`, top: h },
        onMouseDown: (D) => T(D, "in"),
        onDoubleClick: (D) => {
          D.preventDefault(), D.stopPropagation(), H("in");
        },
        onMouseEnter: () => v("in"),
        onMouseLeave: () => v((D) => D === "in" ? null : D),
        "aria-label": "Adjust audio fade in"
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: S,
        type: "button",
        className: V(),
        style: { left: `${u}px`, top: h },
        onMouseDown: (D) => T(D, "out"),
        onDoubleClick: (D) => {
          D.preventDefault(), D.stopPropagation(), H("out");
        },
        onMouseEnter: () => v("out"),
        onMouseLeave: () => v((D) => D === "out" ? null : D),
        "aria-label": "Adjust audio fade out"
      }
    ),
    w && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: C("in"),
        style: { left: `${w.x}px`, top: `${w.yPercent}%` },
        onMouseDown: (D) => E(D, "in"),
        onDoubleClick: (D) => {
          D.preventDefault(), D.stopPropagation(), K("in");
        },
        onMouseEnter: () => v(null),
        onMouseLeave: () => v((D) => D === "in" ? null : D),
        "aria-label": "Adjust audio fade in curve"
      }
    ),
    f && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: C("out"),
        style: { left: `${f.x}px`, top: `${f.yPercent}%` },
        onMouseDown: (D) => E(D, "out"),
        onDoubleClick: (D) => {
          D.preventDefault(), D.stopPropagation(), K("out");
        },
        onMouseEnter: () => v(null),
        onMouseLeave: () => v((D) => D === "out" ? null : D),
        "aria-label": "Adjust audio fade out curve"
      }
    ),
    L && I && /* @__PURE__ */ e.jsx(Ff, { anchorRect: J, label: I })
  ] });
});
function Af({
  anchorRect: r,
  label: t
}) {
  return r ? ss.createPortal(
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-full rounded bg-slate-950/95 px-1.5 py-0.5 text-[10px] font-medium text-white shadow-lg whitespace-nowrap",
        style: {
          left: r.left + r.width / 2,
          top: r.top - 4
        },
        children: t
      }
    ),
    Nn() ?? document.body
  ) : null;
}
const Of = n.memo(function({
  trackLocked: t,
  activeTool: s,
  clipWidth: o,
  lineYPercent: i,
  fadeInPixels: c,
  fadeOutPixels: m,
  isSelected: d,
  isEditing: b,
  fadeInLabel: M,
  fadeOutLabel: R,
  onFadeHandleMouseDown: N,
  onFadeHandleDoubleClick: w
}) {
  const [f, T] = n.useState(null), H = n.useRef(null), E = n.useRef(null), [K, $] = n.useState(null);
  if (n.useLayoutEffect(() => {
    if (!f) {
      $(null);
      return;
    }
    const p = f === "in" ? H.current : E.current;
    p && $(p.getBoundingClientRect());
  }, [f, c, m, o]), t || s !== "select" || !d && !b)
    return null;
  const v = Fs({ handle: "in", clipWidthPixels: o, fadePixels: c }), Y = Fs({ handle: "out", clipWidthPixels: o, fadePixels: m }), S = f === "in" ? M : f === "out" ? R : null, J = "-2px", A = Pe(
    "absolute h-2.5 w-2.5 -translate-x-1/2 rounded-[2px] border pointer-events-auto transition-opacity cursor-ew-resize touch-none focus-visible:outline-none",
    "border-slate-950/70 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.25)]",
    "after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-l-[3px] after:border-r-[3px] after:border-t-[4px] after:border-l-transparent after:border-r-transparent after:border-t-white/90"
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 pointer-events-none z-30", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: H,
        type: "button",
        className: A,
        style: { left: `${v}px`, top: J },
        onClick: (p) => {
          p.preventDefault(), p.stopPropagation();
        },
        onMouseDown: (p) => N(p, "in"),
        onDoubleClick: (p) => {
          p.preventDefault(), p.stopPropagation(), w("in");
        },
        onMouseEnter: () => T("in"),
        onMouseLeave: () => T((p) => p === "in" ? null : p),
        "aria-label": "Adjust video fade in"
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: E,
        type: "button",
        className: A,
        style: { left: `${Y}px`, top: J },
        onClick: (p) => {
          p.preventDefault(), p.stopPropagation();
        },
        onMouseDown: (p) => N(p, "out"),
        onDoubleClick: (p) => {
          p.preventDefault(), p.stopPropagation(), w("out");
        },
        onMouseEnter: () => T("out"),
        onMouseLeave: () => T((p) => p === "out" ? null : p),
        "aria-label": "Adjust video fade out"
      }
    ),
    f && S && /* @__PURE__ */ e.jsx(Af, { anchorRect: K, label: S })
  ] });
}), _f = 180, zf = n.memo(function({
  trackLocked: t,
  activeTool: s,
  lineYPercent: o,
  isEditing: i,
  editLabel: c,
  editLabelViewport: m,
  onVolumeMouseDown: d,
  onVolumeDoubleClick: b
}) {
  const [M, R] = n.useState(!1), [N, w] = n.useState(!1);
  n.useEffect(() => {
    if (i) {
      w(!0);
      return;
    }
    if (!M) {
      w(!1);
      return;
    }
    const T = window.setTimeout(() => {
      w(!0);
    }, _f);
    return () => {
      window.clearTimeout(T);
    };
  }, [i, M]);
  const f = i || N;
  return t || s !== "select" ? null : /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-x-0 inset-y-0 pointer-events-none z-30", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: `absolute left-0 right-0 h-2 -translate-y-1/2 pointer-events-auto touch-none ${f ? "cursor-ns-resize" : "cursor-default"}`,
        style: { top: `var(--timeline-audio-volume-line-y, ${o}%)` },
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        onClick: (T) => {
          f && (T.preventDefault(), T.stopPropagation());
        },
        onMouseDown: (T) => {
          f && (T.preventDefault(), T.stopPropagation(), d(T));
        },
        onDoubleClick: (T) => {
          T.preventDefault(), T.stopPropagation(), b();
        },
        tabIndex: -1,
        "aria-label": "Adjust clip volume"
      }
    ),
    i && c && (m ? ss.createPortal(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "pointer-events-none fixed z-[9999] rounded bg-slate-950/95 px-1.5 py-0.5 text-[10px] font-medium text-white shadow-lg whitespace-nowrap",
          style: {
            left: m.clientX,
            top: m.clientY,
            transform: "translate(-50%, calc(-100% - 8px))"
          },
          children: c
        }
      ),
      Nn() ?? document.body
    ) : /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-full rounded bg-slate-950/95 px-1.5 py-0.5 text-[10px] font-medium text-white shadow-lg whitespace-nowrap",
        style: { top: `calc(var(--timeline-audio-volume-line-y, ${o}%) - 10px)` },
        children: c
      }
    ))
  ] });
}), Hf = n.memo(function({
  hasJoinableLeft: t,
  hasJoinableRight: s,
  trackLocked: o,
  dragAffectsJoin: i,
  hoveredEdge: c,
  isTrimming: m,
  isStretching: d,
  isBeingDragged: b
}) {
  const M = t && !o && !i.left && !b && c !== "start" && !m && !d, R = s && !o && !i.right && !b && c !== "end" && !m && !d;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: Pe(
          "absolute left-0 top-0 bottom-0 w-px pointer-events-none transition-opacity duration-75",
          M ? "opacity-100" : "opacity-0"
        ),
        style: { backgroundColor: "var(--color-timeline-join)", boxShadow: "0 0 6px 1px var(--color-timeline-join)" },
        title: "Can join with previous clip (J)"
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: Pe(
          "absolute right-0 top-0 bottom-0 w-px pointer-events-none transition-opacity duration-75",
          R ? "opacity-100" : "opacity-0"
        ),
        style: { backgroundColor: "var(--color-timeline-join)", boxShadow: "0 0 6px 1px var(--color-timeline-join)" },
        title: "Can join with next clip (J)"
      }
    )
  ] });
}), $f = {
  neutral: "bg-black/75 text-white ring-white/10",
  info: "bg-sky-600/85 text-white ring-sky-100/20",
  success: "bg-emerald-600/85 text-white ring-emerald-100/20",
  warning: "bg-amber-500/90 text-black ring-amber-50/30",
  error: "bg-destructive/90 text-destructive-foreground ring-destructive-foreground/20"
};
function xi(r) {
  return `${Math.max(0, Math.min(100, Math.round(r)))}%`;
}
const Bf = n.memo(function({
  overlays: t
}) {
  return t.length === 0 ? null : /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 z-20 pointer-events-none flex items-center justify-center px-2", children: /* @__PURE__ */ e.jsx("div", { className: "flex max-w-full flex-col items-center gap-1", children: t.map((s) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: Pe(
        "flex max-w-full items-center gap-2 rounded-md px-2 py-1 text-[10px] font-medium shadow-lg ring-1 backdrop-blur-sm",
        $f[s.tone ?? "neutral"]
      ),
      title: s.progress === void 0 ? s.label : `${s.label} ${xi(s.progress)}`,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "truncate", children: s.label }),
        s.progress !== void 0 && /* @__PURE__ */ e.jsx("span", { className: "shrink-0 font-mono tabular-nums", children: xi(s.progress) })
      ]
    },
    s.id
  )) }) });
}), Xf = n.memo(function({
  visual: t
}) {
  if (!t) return null;
  const s = t.mode === "rolling" || t.mode === "slide", o = t.mode === "slip", i = t.mode === "trim" || t.mode === "ripple" || t.mode === "stretch", c = t.boxLeftPx !== null && t.boxWidthPx !== null, m = s ? 0 : o ? Math.round(Mo.timelineClipLabelRowHeight) : 1, d = s ? Math.round(Mo.timelineClipLabelRowHeight * 2) : null, b = s ? Pe(
    "border-white/85 bg-transparent shadow-[0_0_0_1px_rgba(248,250,252,0.24),0_8px_20px_rgba(15,23,42,0.16)]",
    t.constrained && "border-white/95 shadow-[0_0_0_1px_rgba(255,255,255,0.36),0_0_14px_rgba(255,255,255,0.14),0_8px_20px_rgba(15,23,42,0.16)]"
  ) : o ? Pe(
    "border-white/85 bg-transparent shadow-[0_0_0_1px_rgba(248,250,252,0.24),0_10px_24px_rgba(15,23,42,0.18)]",
    t.constrained && "border-white/95 shadow-[0_0_0_1px_rgba(255,255,255,0.36),0_0_14px_rgba(255,255,255,0.14),0_10px_24px_rgba(15,23,42,0.18)]"
  ) : "border-white/80 bg-white/[0.035] shadow-[0_0_0_1px_rgba(15,23,42,0.45),0_10px_24px_rgba(15,23,42,0.18)]";
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: c && /* @__PURE__ */ e.jsx(
    "div",
    {
      "data-testid": "tool-operation-bounds-box",
      className: Pe(
        "absolute pointer-events-none z-[1] rounded-[6px] border",
        b
      ),
      style: {
        left: `${t.boxLeftPx}px`,
        width: `${t.boxWidthPx}px`,
        top: m,
        ...d === null ? { bottom: 1 } : { height: d }
      }
    }
  ) });
});
function bi(r) {
  return r.type === "video" || r.type === "composition" || r.type === "image";
}
function Vf({
  isTrimming: r,
  isRollingEdit: t,
  isRippleEdit: s,
  isStretching: o,
  isSlipSlideActive: i,
  slipSlideMode: c
}) {
  return r ? t ? "rolling" : s ? "ripple" : "trim" : o ? "stretch" : i ? c === "slide" ? "slide" : "slip" : "none";
}
function Kf({
  itemId: r,
  dragState: t,
  gestureMode: s
}) {
  return s !== "none" || !t?.isDragging || !t.draggedItemIds.includes(r) ? 0 : t.isAltDrag ? 2 : 1;
}
function Wf({
  isBeingDragged: r,
  isAltDrag: t,
  gestureMode: s
}) {
  return r && !t && s === "none";
}
const Gf = "--editor-timeline-clip-label-row-height";
function vi(r) {
  const t = window.getComputedStyle(r).getPropertyValue(Gf).trim(), s = Number.parseFloat(t);
  return Number.isFinite(s) ? s : Mo.timelineClipLabelRowHeight;
}
const Sr = 1e9, Uf = 12e3;
function Fn(r, t, s) {
  if (!Number.isFinite(r) || !Number.isFinite(t))
    return { boxLeftPx: null, boxWidthPx: null };
  const o = Math.round(s(r)), c = Math.round(s(t)) - o;
  return !Number.isFinite(o) || !Number.isFinite(c) || c <= 0 || c > Uf ? { boxLeftPx: null, boxWidthPx: null } : {
    boxLeftPx: o,
    boxWidthPx: c
  };
}
function Qs(r, t) {
  return r === null || t === null ? [] : [r, r + t];
}
function Yf(r, t, s) {
  const o = /* @__PURE__ */ new Set();
  for (const i of t)
    i.leftClipId === r && o.add(i.rightClipId), i.rightClipId === r && o.add(i.leftClipId);
  return s && o.add(s), o;
}
function yi(r, t, s, o, i, c, m, d) {
  let b = Ls(r, i, c, o).clampedAmount;
  const M = Xn(r, i, t, s), R = m ? M : null;
  if (d || (b = Fd(
    r,
    i,
    b,
    t,
    Yf(r.id, s, m ? R?.id ?? null : null)
  )), m && R) {
    const w = Ls(R, i === "end" ? "start" : "end", b, o).clampedAmount;
    Math.abs(w) < Math.abs(b) && (b = w);
    const f = Ro(s, r.id, i);
    b = Ld(
      r,
      i,
      b,
      R,
      f,
      o
    );
  }
  if (d) {
    const N = Ro(s, r.id, i);
    b = Ad(
      r,
      i,
      b,
      M,
      N,
      o
    );
  }
  return b;
}
function Zf(r, t) {
  const s = r.type === "image" && r.label?.toLowerCase().endsWith(".gif");
  if (r.type !== "video" && r.type !== "audio" && r.type !== "composition" && !s)
    return null;
  const o = r.speed ?? 1, i = r.sourceFps ?? t, c = r.sourceStart ?? 0, m = r.type === "image";
  let d;
  return r.sourceEnd !== void 0 ? d = Math.max(1, r.sourceEnd - c) : r.sourceDuration !== void 0 ? d = Math.max(1, r.sourceDuration - c) : d = Math.max(1, Yi(r.durationInFrames, o, t, i)), {
    sourceDuration: d,
    sourceFps: i,
    isLoopingMedia: m
  };
}
function wi(r, t, s, o, i) {
  let c = t;
  if (r.from + c < 0 && (c = -r.from), s) {
    const m = Ls(s, "end", c, i).clampedAmount;
    Math.abs(m) < Math.abs(c) && (c = m);
  }
  if (o) {
    const m = Ls(o, "start", c, i).clampedAmount;
    Math.abs(m) < Math.abs(c) && (c = m);
  }
  return c;
}
function qf({
  item: r,
  items: t,
  transitions: s,
  fps: o,
  frameToPixels: i,
  handle: c,
  isRollingEdit: m,
  isRippleEdit: d,
  constrained: b,
  currentLeftPx: M,
  currentRightPx: R
}) {
  const N = r.from, w = r.from + r.durationInFrames, f = yi(
    r,
    t,
    s,
    o,
    c,
    -Sr,
    m,
    d
  ), T = yi(
    r,
    t,
    s,
    o,
    c,
    Sr,
    m,
    d
  );
  if (m) {
    const $ = c === "start" ? N : w, v = Fn($ + f, $ + T, i);
    return {
      ...v,
      limitEdgePositionsPx: Qs(v.boxLeftPx, v.boxWidthPx),
      edgePositionsPx: [c === "start" ? M : R],
      edgeConstraintStates: [b],
      constrained: b,
      mode: "rolling"
    };
  }
  if (d && c === "start") {
    const $ = w - T, v = w - f;
    return {
      ...Fn(N, v, i),
      limitEdgePositionsPx: [
        Math.round(i($)),
        Math.round(i(v))
      ],
      edgePositionsPx: [R],
      edgeConstraintStates: [b],
      constrained: b,
      mode: "ripple"
    };
  }
  const H = c === "start" ? Fn(Math.min(N, N + f), w, i) : Fn(N, Math.max(w, w + T), i), E = Math.round(i((c === "start" ? N : w) + f)), K = Math.round(i((c === "start" ? N : w) + T));
  return {
    ...H,
    limitEdgePositionsPx: [E, K],
    edgePositionsPx: [c === "start" ? M : R],
    edgeConstraintStates: [b],
    constrained: b,
    mode: m ? "rolling" : d ? "ripple" : "trim"
  };
}
function Jf({
  item: r,
  fps: t,
  frameToPixels: s,
  handle: o,
  constrained: i,
  currentLeftPx: c,
  currentRightPx: m
}) {
  const d = Zf(r, t);
  if (!d || d.isLoopingMedia)
    return {
      boxLeftPx: null,
      boxWidthPx: null,
      limitEdgePositionsPx: [],
      edgePositionsPx: [o === "start" ? c : m],
      edgeConstraintStates: [i],
      constrained: i,
      mode: "stretch"
    };
  const { sourceDuration: b, sourceFps: M } = d, R = Ed(b, !1, M, t), N = Dd(b, R.max, M, t).duration, w = r.from, f = r.from + r.durationInFrames, T = o === "start" ? Fn(Math.min(w, f - N), f, s) : Fn(w, Math.max(f, w + N), s);
  return {
    ...T,
    limitEdgePositionsPx: Qs(T.boxLeftPx, T.boxWidthPx),
    edgePositionsPx: [o === "start" ? c : m],
    edgeConstraintStates: [i],
    constrained: i,
    mode: "stretch"
  };
}
function Ii({
  item: r,
  items: t,
  transitions: s,
  fps: o,
  frameToPixels: i,
  leftNeighbor: c,
  rightNeighbor: m,
  constraintEdge: d,
  constrained: b,
  currentLeftPx: M,
  currentRightPx: R,
  leftWallFrame: N,
  rightWallFrame: w,
  effectiveMinDelta: f,
  effectiveMaxDelta: T
}) {
  const H = r.from, E = r.from + r.durationInFrames;
  let K, $;
  if (f !== void 0 && T !== void 0)
    K = f, $ = T;
  else {
    if (K = wi(r, -Sr, c, m, o), $ = wi(r, Sr, c, m, o), K = ya(r, K, c, m, t, s, o), $ = ya(r, $, c, m, t, s, o), N != null) {
      const Y = -(H - N);
      Y > K && (K = Y);
    }
    if (w != null) {
      const Y = w - E;
      Y < $ && ($ = Y);
    }
  }
  const v = Fn(
    Math.min(H, H + K),
    Math.max(E, E + $),
    i
  );
  return {
    ...v,
    limitEdgePositionsPx: Qs(v.boxLeftPx, v.boxWidthPx),
    edgePositionsPx: [M, R],
    edgeConstraintStates: [d === "start", d === "end"],
    constrained: b,
    mode: "slide"
  };
}
function Ci({
  item: r,
  fps: t,
  frameToPixels: s,
  constraintEdge: o,
  constrained: i,
  currentLeftPx: c,
  currentRightPx: m
}) {
  if (r.type !== "video" && r.type !== "audio" && r.type !== "composition")
    return {
      boxLeftPx: null,
      boxWidthPx: null,
      limitEdgePositionsPx: [],
      edgePositionsPx: [c, m],
      edgeConstraintStates: [i, i],
      constrained: i,
      mode: "slip"
    };
  const { sourceStart: d, sourceEnd: b, sourceDuration: M, sourceFps: R, speed: N } = Pd(r);
  if (b === void 0 || M === void 0)
    return {
      boxLeftPx: null,
      boxWidthPx: null,
      limitEdgePositionsPx: [],
      edgePositionsPx: [c, m],
      edgeConstraintStates: [i, i],
      constrained: i,
      mode: "slip"
    };
  const w = R ?? t, f = Ia(
    d,
    b,
    M,
    -Sr
  ), T = Ia(
    d,
    b,
    M,
    Sr
  ), H = f < 0 ? wa(-f, N, w, t) : 0, E = T > 0 ? wa(T, N, w, t) : 0, K = Fn(
    r.from - H,
    r.from + r.durationInFrames + E,
    s
  );
  return {
    ...K,
    limitEdgePositionsPx: Qs(K.boxLeftPx, K.boxWidthPx),
    edgePositionsPx: [c, m],
    edgeConstraintStates: [o === "start", o === "end"],
    constrained: i,
    mode: "slip"
  };
}
const Qf = n.memo(function({
  isAltDrag: t,
  isDragging: s,
  left: o,
  width: i,
  dragOffset: c
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: Pe(
        "absolute inset-y-0 rounded border-2 border-dashed border-primary bg-primary/20 pointer-events-none z-50",
        !(t && s) && "hidden"
      ),
      style: {
        left: `${o + c.x}px`,
        width: `${i}px`,
        transform: `translateY(${c.y}px)`
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground shadow-md", children: "+" })
    }
  );
}), ep = n.memo(n.forwardRef(
  function({ left: t, width: s }, o) {
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: o,
        className: "absolute inset-y-0 rounded border-2 border-dashed border-primary bg-primary/20 pointer-events-none z-50",
        style: {
          left: `${t}px`,
          width: `${s}px`,
          display: "none"
        },
        children: /* @__PURE__ */ e.jsx("div", { className: "absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground shadow-md", children: "+" })
      }
    );
  }
)), tp = n.memo(function({
  hint: t
}) {
  return t ? ss.createPortal(
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "pointer-events-none",
        style: {
          position: "fixed",
          left: t.x,
          top: t.y - 8,
          transform: "translate(-50%, -100%)",
          zIndex: 9999
        },
        children: /* @__PURE__ */ e.jsx("div", { className: [
          "overflow-hidden rounded-md px-3 py-1.5 text-xs text-white shadow-lg",
          t.tone === "danger" ? "bg-red-500" : "bg-primary"
        ].join(" "), children: t.message })
      }
    ),
    Nn() ?? document.body
  ) : null;
}), np = n.memo(function({
  children: t,
  trackLocked: s,
  isSelected: o,
  canJoinSelected: i,
  hasJoinableLeft: c,
  hasJoinableRight: m,
  closerEdge: d,
  keyframedProperties: b,
  canLinkSelected: M,
  canUnlinkSelected: R,
  onJoinSelected: N,
  onJoinLeft: w,
  onJoinRight: f,
  onLinkSelected: T,
  onUnlinkSelected: H,
  onRippleDelete: E,
  onDelete: K,
  onClearAllKeyframes: $,
  onClearPropertyKeyframes: v,
  onBentoLayout: Y,
  isVideoItem: S,
  playheadInBounds: J,
  onFreezeFrame: A,
  canGenerateCaptions: p,
  canRegenerateCaptions: u,
  isGeneratingCaptions: L,
  defaultCaptionModel: I,
  onGenerateCaptions: h,
  onRegenerateCaptions: V,
  isCompositionItem: C,
  onEnterComposition: D,
  onDissolveComposition: G,
  canCreatePreComp: le,
  onCreatePreComp: B,
  isTextItem: ge,
  onGenerateAudioFromText: z
  // canDetectScenes, isDetectingScenes, onDetectScenes — disabled pending optical flow tuning
}) {
  const te = Us(), U = _e((O) => O.selectedItemIds.length), De = n.useMemo(() => b ? b.filter((O) => O.keyframes.length > 0) : [], [b]), Ce = n.useMemo(
    () => Od.filter((O) => O.value !== I),
    [I]
  ), ye = De.length > 0;
  return /* @__PURE__ */ e.jsxs(On, { children: [
    /* @__PURE__ */ e.jsx(_n, { asChild: !0, disabled: s, children: t }),
    /* @__PURE__ */ e.jsxs(Tn, { children: [
      (() => {
        const O = c && (d === "left" || !m), W = m && (d === "right" || !c);
        return O || W || i ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          O && /* @__PURE__ */ e.jsxs(it, { onClick: w, children: [
            "Join with Previous",
            /* @__PURE__ */ e.jsx(qt, { children: "J" })
          ] }),
          W && /* @__PURE__ */ e.jsxs(it, { onClick: f, children: [
            "Join with Next",
            /* @__PURE__ */ e.jsx(qt, { children: "J" })
          ] }),
          i && /* @__PURE__ */ e.jsxs(it, { onClick: N, children: [
            "Join Selected",
            /* @__PURE__ */ e.jsx(qt, { children: "J" })
          ] }),
          /* @__PURE__ */ e.jsx(Vt, {})
        ] }) : null;
      })(),
      (M || R) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        M && T && /* @__PURE__ */ e.jsxs(it, { onClick: T, children: [
          "Link Clips",
          /* @__PURE__ */ e.jsx(qt, { children: Zr(te.LINK_AUDIO_VIDEO) })
        ] }),
        R && H && /* @__PURE__ */ e.jsxs(it, { onClick: H, children: [
          "Unlink Clips",
          /* @__PURE__ */ e.jsx(qt, { children: Zr(te.UNLINK_AUDIO_VIDEO) })
        ] }),
        /* @__PURE__ */ e.jsx(Vt, {})
      ] }),
      ye && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(Io, { children: [
          /* @__PURE__ */ e.jsx(Rs, { children: "Clear Keyframes" }),
          /* @__PURE__ */ e.jsxs(Ds, { className: "w-48", children: [
            /* @__PURE__ */ e.jsxs(it, { onClick: $, children: [
              "Clear All",
              /* @__PURE__ */ e.jsx(qt, { children: Zr(te.CLEAR_KEYFRAMES) })
            ] }),
            /* @__PURE__ */ e.jsx(Vt, {}),
            De.map(({ property: O }) => /* @__PURE__ */ e.jsx(
              it,
              {
                onClick: () => v?.(O),
                children: _d[O]
              },
              O
            ))
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(Vt, {})
      ] }),
      U >= 2 && Y && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(it, { onClick: Y, children: "Bento Layout..." }),
        /* @__PURE__ */ e.jsx(Vt, {})
      ] }),
      S && J && A && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs(it, { onClick: A, children: [
          "Insert Freeze Frame",
          /* @__PURE__ */ e.jsx(qt, { children: "Shift+F" })
        ] }),
        /* @__PURE__ */ e.jsx(Vt, {})
      ] }),
      ge && z && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(it, { onClick: z, children: "Generate Audio from Text" }),
        /* @__PURE__ */ e.jsx(Vt, {})
      ] }),
      p && h && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        L ? /* @__PURE__ */ e.jsx(it, { disabled: !0, children: "Updating Captions..." }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs(Io, { children: [
            /* @__PURE__ */ e.jsx(Rs, { children: "Generate Captions for Segment" }),
            /* @__PURE__ */ e.jsxs(Ds, { className: "w-48", children: [
              I && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(it, { onClick: () => h(I), children: `Default (${gr[I]})` }),
                /* @__PURE__ */ e.jsx(Vt, {})
              ] }),
              Ce.map((O) => /* @__PURE__ */ e.jsx(
                it,
                {
                  onClick: () => h(O.value),
                  children: O.label
                },
                O.value
              ))
            ] })
          ] }),
          u && V && /* @__PURE__ */ e.jsxs(Io, { children: [
            /* @__PURE__ */ e.jsx(Rs, { children: "Regenerate Captions for Segment" }),
            /* @__PURE__ */ e.jsxs(Ds, { className: "w-48", children: [
              I && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(it, { onClick: () => V(I), children: `Default (${gr[I]})` }),
                /* @__PURE__ */ e.jsx(Vt, {})
              ] }),
              Ce.map((O) => /* @__PURE__ */ e.jsx(
                it,
                {
                  onClick: () => V(O.value),
                  children: O.label
                },
                O.value
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(Vt, {})
      ] }),
      C && D && /* @__PURE__ */ e.jsx(it, { onClick: D, children: "Open Compound Clip" }),
      C && G && /* @__PURE__ */ e.jsx(it, { onClick: G, children: "Dissolve Compound Clip" }),
      le && B && /* @__PURE__ */ e.jsx(it, { onClick: B, children: "Create Compound Clip" }),
      (C && (D || G) || le && B) && /* @__PURE__ */ e.jsx(Vt, {}),
      /* @__PURE__ */ e.jsxs(
        it,
        {
          onClick: E,
          disabled: !o,
          className: "text-destructive focus:text-destructive",
          children: [
            "Ripple Delete",
            /* @__PURE__ */ e.jsx(qt, { children: "Ctrl+Del" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        it,
        {
          onClick: K,
          disabled: !o,
          className: "text-destructive focus:text-destructive",
          children: [
            "Delete",
            /* @__PURE__ */ e.jsx(qt, { children: "Del" })
          ]
        }
      )
    ] })
  ] });
}), rp = Js((r) => ({
  isOpen: !1,
  initialText: "",
  sourceItemId: null,
  open: (t, s) => r({ isOpen: !0, initialText: t, sourceItemId: s }),
  close: () => r({ isOpen: !1, initialText: "", sourceItemId: null })
})), sp = Js((r) => ({
  isOpen: !1,
  itemIds: [],
  open: (t) => r({ isOpen: !0, itemIds: t }),
  close: () => r({ isOpen: !1, itemIds: [] })
})), $r = "caption-generation", ws = "scene-detection", op = [], Si = [
  "timeline-cursor-trim-left",
  "timeline-cursor-trim-right",
  "timeline-cursor-ripple-left",
  "timeline-cursor-ripple-right",
  "timeline-cursor-trim-center",
  "timeline-cursor-slip-smart",
  "timeline-cursor-slide-smart",
  "timeline-cursor-gauge",
  "timeline-cursor-track-push"
], ji = Ao, Is = 6, ki = 14, Ti = 120;
function ap(r, t) {
  const s = r >= Ti ? Is : Math.round(Is + (ki - Is) * (1 - r / Ti));
  return Math.max(Is, Math.min(s, t, ki));
}
const Br = 1e-4, Ht = 1e-4, Ni = 0.05, Cn = 100, ip = 120, lp = 4;
function Mi(r) {
  const t = Kt.getState().draggedTransition;
  if (t) return t;
  const s = r.dataTransfer.getData(Bl);
  if (!s) return null;
  try {
    const o = JSON.parse(s);
    return typeof o.presentation != "string" ? null : {
      presentation: o.presentation,
      direction: o.direction
    };
  } catch {
    return null;
  }
}
const cp = n.memo(function({ item: t, timelineDuration: s = 30, trackLocked: o = !1, trackHidden: i = !1 }) {
  const { timeToPixels: c, frameToPixels: m, pixelsToFrame: d, pixelsPerSecond: b } = on(), M = _e(
    n.useCallback((a) => a.selectedItemIds.includes(t.id), [t.id])
  ), R = me(
    n.useCallback(
      (a) => t.mediaId ? !!(a.brokenMediaIds.includes(t.mediaId) || a.orphanedClips.some((k) => k.itemId === t.id)) : !1,
      [t.mediaId, t.id]
    )
  ), N = me(
    n.useCallback(
      (a) => t.mediaId ? a.transcriptStatus.get(t.mediaId) ?? "idle" : "idle",
      [t.mediaId]
    )
  ), w = lt(
    n.useCallback(
      (a) => a.items.some(
        (k) => k.type === "text" && (k.captionSource?.type === "transcript" && k.captionSource.clipId === t.id || !k.captionSource && k.mediaId === t.mediaId && k.from >= t.from && k.from + k.durationInFrames <= t.from + t.durationInFrames && k.text.trim().length > 0 && k.label === k.text.slice(0, 48))
      ),
      [t.durationInFrames, t.from, t.id, t.mediaId]
    )
  ), f = es((a) => a.defaultWhisperModel), T = lt(
    n.useCallback((a) => Ca(a.items, t.id), [t.id])
  ), H = lt(
    n.useCallback(
      (a) => {
        if (t.type !== "audio") return !1;
        const k = Do(a.items, t.id);
        return k.length <= 1 ? !1 : k.some((Z) => Z.id !== t.id && Z.type === "video");
      },
      [t.id, t.type]
    )
  ), E = Ft((a) => a.linkedSelectionEnabled), K = Bn(
    n.useCallback((a) => a.overlaysByItemId[t.id] ?? op, [t.id])
  ), $ = Eo(
    n.useCallback(
      (a) => a.keyframesByItemId[t.id] ?? null,
      [t.id]
    )
  ), v = n.useMemo(
    () => $?.properties.filter((a) => a.keyframes.length > 0) ?? [],
    [$]
  ), Y = v.length > 0, S = _e((a) => a.activeTool), J = _e((a) => !!a.dragState?.isDragging), A = n.useRef(S);
  A.current = S;
  const [p, u] = n.useState(null), [L, I] = n.useState(null), [h, V] = n.useState(null);
  n.useEffect(() => {
    u(null), I(null), V(null), ur.getState().clearRollHover(t.id);
  }, [S, t.id]);
  const C = ur(
    n.useCallback((a) => a.neighborItemId === t.id ? a.neighborEdge : null, [t.id])
  ), D = mn(
    n.useCallback((a) => a.targetItemIds.length === 1 && a.targetItemIds[0] === t.id, [t.id])
  ), G = mn(
    n.useCallback((a) => a.targetItemIds.length > 1 && a.targetItemIds.includes(t.id), [t.id])
  ), le = mn(
    n.useCallback(
      (a) => a.hoveredItemId === t.id && a.targetItemIds.length > 1 ? a.targetItemIds.length : 0,
      [t.id]
    )
  ), B = D || G, [ge, z] = n.useState(null), [te, U] = n.useState(null);
  n.useEffect(() => {
    if (!te) return;
    const a = () => U(null);
    return window.addEventListener("mouseup", a), () => window.removeEventListener("mouseup", a);
  }, [te]), n.useEffect(() => {
    if (!B) return;
    const a = () => mn.getState().clearPreview();
    return window.addEventListener("dragend", a), window.addEventListener("drop", a), () => {
      window.removeEventListener("dragend", a), window.removeEventListener("drop", a);
    };
  }, [B]);
  const [De, Ce] = n.useState({ left: !1, right: !1 }), ye = n.useRef(null), O = n.useRef(null), { isDragging: W, dragOffset: Ie, handleDragStart: re } = zd(t, s, o, ye), { isTrimming: j, trimHandle: x, trimDelta: se, isRollingEdit: ne, isRippleEdit: oe, trimConstrained: fe, handleTrimStart: je } = Hd(t, s, o), { isStretching: xe, stretchHandle: ve, stretchConstrained: F, handleStretchStart: _, getVisualFeedback: ce } = $d(t, s, o), {
    isSlipSlideActive: ie,
    slipSlideMode: Te,
    slipSlideConstrained: ze,
    slipSlideConstraintEdge: Se,
    handleSlipSlideStart: Ae
  } = Bd(t, s, o), { isTrackPushActive: We, handleTrackPushStart: et } = Xd(t, s, o), Ye = n.useMemo(() => {
    if (j) {
      if (x === "start")
        return ne ? "timeline-cursor-trim-center" : oe ? "timeline-cursor-ripple-left" : "timeline-cursor-trim-left";
      if (x === "end")
        return ne ? "timeline-cursor-trim-center" : oe ? "timeline-cursor-ripple-right" : "timeline-cursor-trim-right";
    }
    return xe ? "timeline-cursor-gauge" : ie ? Te === "slide" ? "timeline-cursor-slide-smart" : "timeline-cursor-slip-smart" : We ? "timeline-cursor-track-push" : null;
  }, [ne, oe, ie, xe, j, We, Te, x]), Xe = n.useMemo(() => Vf({
    isTrimming: j,
    isRollingEdit: ne,
    isRippleEdit: oe,
    isStretching: xe,
    isSlipSlideActive: ie,
    slipSlideMode: Te
  }), [ne, oe, ie, xe, j, Te]);
  n.useEffect(() => (document.body.classList.remove(...Si), Ye && document.body.classList.add(Ye), () => {
    document.body.classList.remove(...Si);
  }), [Ye]);
  const vt = n.useRef(!1);
  n.useEffect(() => {
    const a = ye.current;
    if (a)
      return Vd(t.id, a), () => {
        Kd(t.id, a);
      };
  }, [t.id]);
  const ft = n.useRef(!1), ue = n.useRef(!1), Ne = n.useRef(0), Fe = n.useRef(null), qe = n.useRef(t.from), nt = n.useRef(t.durationInFrames), Je = n.useRef(t.trackId);
  qe.current = t.from, nt.current = t.durationInFrames, Je.current = t.trackId, n.useEffect(() => {
    const a = () => {
      if (!ye.current) return;
      const de = Ne.current, Re = de > 0 && !W, ke = de === 2;
      if (Re) {
        const He = ho.current[t.id] ?? Ts.current;
        ke ? (ye.current.style.transform = "", ye.current.style.opacity = "", ye.current.style.transition = "none", ye.current.style.pointerEvents = "none", O.current && (O.current.style.transform = `translate(${He.x}px, ${He.y}px)`, O.current.style.display = "block")) : (ye.current.style.transform = `translate(${He.x}px, ${He.y}px)`, ye.current.style.opacity = String(Fa), ye.current.style.transition = "none", ye.current.style.pointerEvents = "none", ye.current.style.zIndex = "50", O.current && (O.current.style.display = "none")), Fe.current = requestAnimationFrame(a);
      }
    }, k = () => {
      Fe.current && (cancelAnimationFrame(Fe.current), Fe.current = null), ye.current && (ye.current.style.transition = "none", ye.current.style.transform = "", ye.current.style.opacity = "", ye.current.style.pointerEvents = "", ye.current.style.zIndex = ""), O.current && (O.current.style.display = "none");
    };
    let Z = null;
    const ee = _e.subscribe((de) => {
      const Re = ft.current, ke = !!de.dragState?.isDragging;
      if (ft.current = ke, ke && de.dragState?.draggedItemIds) {
        const ot = de.dragState.draggedItemIds, Le = he.getState().items, Oe = qe.current, st = nt.current, $e = Je.current, wt = Le.find(
          (Ct) => Ct.id !== t.id && Ct.trackId === $e && Ct.from + Ct.durationInFrames === Oe
        ), gt = Le.find(
          (Ct) => Ct.id !== t.id && Ct.trackId === $e && Ct.from === Oe + st
        ), It = !!(ot.includes(t.id) || wt && ot.includes(wt.id)), Et = !!(ot.includes(t.id) || gt && ot.includes(gt.id));
        Ce(
          (Ct) => Ct.left === It && Ct.right === Et ? Ct : { left: It, right: Et }
        );
      } else Re && !ke && Ce(
        (ot) => !ot.left && !ot.right ? ot : { left: !1, right: !1 }
      );
      Re && !ke && (ue.current = !0, Z && clearTimeout(Z), Z = setTimeout(() => {
        ue.current = !1;
      }, 100));
      const He = Kf({
        itemId: t.id,
        dragState: de.dragState,
        gestureMode: Xe
      }), tt = Ne.current;
      Ne.current = He, tt === 0 && He > 0 && !W && (Fe.current = requestAnimationFrame(a)), tt > 0 && He === 0 && k();
    });
    return () => {
      ee(), k(), Z && clearTimeout(Z);
    };
  }, [Xe, t.id, W]);
  const pt = Ne.current > 0, kt = Ne.current === 2, ht = pt && !W;
  n.useEffect(() => {
    vt.current && !W && ye.current && (ye.current.style.transition = "none", requestAnimationFrame(() => {
      ye.current && (ye.current.style.transition = "");
    })), vt.current = W;
  }, [W]);
  const l = W || ht, X = Wf({
    isBeingDragged: l,
    isAltDrag: kt,
    gestureMode: Xe
  }), P = As(
    n.useCallback((a) => a.updatesById[t.id] ?? null, [t.id])
  ), be = n.useMemo(() => !P || !(W || ht) || Xe !== "none" ? 0 : (P.from ?? t.from) - t.from, [Xe, W, ht, t.from, P]), ae = n.useMemo(() => P && be === 0 ? { ...t, ...P } : t, [t, P, be]), Be = xe ? ce() : null, at = Sa(ae), Ge = ae.speed || 1, Ve = he((a) => a.fps), dt = he((a) => a.addEffects), Me = he((a) => a.updateItem), ut = lt(
    Jt(
      n.useCallback(
        (a) => Do(a.items, t.id).filter((k) => k.id !== t.id),
        [t.id]
      )
    )
  ), Ut = As(
    Jt(
      n.useCallback((a) => {
        const k = {};
        for (const Z of ut) {
          const ee = a.updatesById[Z.id];
          ee && (k[Z.id] = ee);
        }
        return k;
      }, [t.id, ut])
    )
  ), Mt = Kt((a) => a.draggedTransition), Ot = Kt(
    n.useCallback((a) => !a.preview || a.preview.existingTransitionId ? null : a.preview.leftClipId === t.id ? a.preview : null, [t.id])
  ), Yt = lt(
    n.useCallback((a) => Ot ? a.itemById[Ot.rightClipId] ?? null : null, [Ot])
  ), yt = ks(
    n.useCallback((a) => a.neighborItemId !== t.id ? 0 : a.neighborDelta, [t.id])
  ), xt = ks(
    n.useCallback((a) => a.neighborItemId !== t.id ? null : a.handle, [t.id])
  ), Yn = ks(
    n.useCallback((a) => a.neighborItemId === t.id && a.constrained, [t.id])
  ), en = Po(
    n.useCallback((a) => a.trimmedItemId && a.downstreamItemIds.has(t.id) ? a.delta : 0, [t.id])
  ), ln = Po(
    n.useCallback((a) => a.trimmedItemId !== t.id ? 0 : a.delta, [t.id])
  ), Zn = Fo(
    n.useCallback((a) => a.anchorItemId && a.shiftedItemIds.has(t.id) ? a.delta : 0, [t.id])
  ), gn = ja(
    n.useCallback((a) => a.itemId !== t.id ? 0 : a.slipDelta, [t.id])
  ), g = ja(
    n.useCallback((a) => a.itemId !== null && a.itemId !== t.id, [t.id])
  ) && P !== null && P.sourceStart !== void 0, q = En(
    n.useCallback((a) => {
      if (!a.itemId || a.itemId === t.id || a.leftNeighborId === t.id || a.rightNeighborId === t.id) return !1;
      const k = lt.getState().items;
      return xs(k, a.itemId).includes(t.id);
    }, [t.id])
  ), we = En(
    n.useCallback((a) => a.itemId && a.itemId === t.id ? a.slideDelta : 0, [t.id])
  ), Ee = En(
    n.useCallback((a) => a.itemId && (a.leftNeighborId === t.id || a.rightNeighborId === t.id) ? a.slideDelta : 0, [t.id])
  ), Qe = En(
    n.useCallback((a) => a.itemId ? a.leftNeighborId === t.id ? "left" : a.rightNeighborId === t.id ? "right" : null : null, [t.id])
  ), Tt = En(
    Jt(
      n.useCallback((a) => a.itemId ? { minDelta: a.minDelta, maxDelta: a.maxDelta } : null, [])
    )
  ), Rt = En(
    n.useCallback((a) => a.itemId === t.id ? a.leftNeighborId : null, [t.id])
  ), y = En(
    n.useCallback((a) => a.itemId === t.id ? a.rightNeighborId : null, [t.id])
  ), Q = lt(
    n.useCallback((a) => Rt ? a.itemById[Rt] ?? null : null, [Rt])
  ), pe = lt(
    n.useCallback((a) => y ? a.itemById[y] ?? null : null, [y])
  ), rt = n.useMemo(() => {
    if (!Ot || !Yt) return null;
    const a = Zi(
      ae.from,
      ae.durationInFrames,
      Yt.from,
      Ot.durationInFrames,
      Ot.alignment
    ), k = Math.round(m(a.leftFrame)), Z = Math.round(m(a.rightFrame)), ee = Math.round(m(Yt.from)), de = Z - k, Re = 32, ke = de >= Re ? k : k - (Re - de) / 2;
    return {
      left: ke,
      width: Math.max(de, Re),
      cutOffset: ee - ke
    };
  }, [
    m,
    ae.durationInFrames,
    ae.from,
    Ot,
    Yt
  ]), Ke = we + (Qe === "right" ? Ee : 0), mt = (Qe === "left" ? Ee : 0) + (Qe === "right" ? -Ee : 0), Dt = Math.round(c((ae.from + Ke + en + Zn) / Ve)), Lt = Math.round(c((ae.from + ae.durationInFrames + mt + Ke + en + Zn) / Ve)), Nt = Lt - Dt, tn = ae.sourceFps ?? Ve, Bt = n.useMemo(() => {
    let a = ae, k = 0, Z = 0;
    if (j && x && (x === "start" ? (k += se, Z += -se) : Z += se), yt !== 0 && (xt === "end" ? (k += yt, Z += -yt) : xt === "start" && (Z += yt)), Qe && Ee !== 0 && (Qe === "right" ? (k += Ee, Z += -Ee) : Z += Ee), (a.type === "video" || a.type === "audio") && we !== 0) {
      const ee = Wd(
        a,
        Q,
        pe,
        we,
        Ve
      );
      ee !== 0 && a.sourceEnd !== void 0 && (a = {
        ...a,
        sourceStart: (a.sourceStart ?? 0) + ee,
        sourceEnd: a.sourceEnd + ee
      });
    }
    if ((ae.type === "video" || ae.type === "audio") && gn !== 0) {
      const ee = Math.max(0, (a.sourceStart ?? 0) + gn), de = a.sourceEnd !== void 0 ? Math.max(ee + 1, a.sourceEnd + gn) : void 0;
      a = {
        ...a,
        sourceStart: ee,
        sourceEnd: de
      };
    }
    if ((ae.type === "video" || ae.type === "audio") && k !== 0) {
      const ee = Yi(
        k,
        a.speed ?? 1,
        Ve,
        tn
      );
      a = {
        ...a,
        sourceStart: Math.max(0, (a.sourceStart ?? 0) + ee)
      };
    }
    return Z !== 0 && (a = {
      ...a,
      durationInFrames: Math.max(1, a.durationInFrames + Z)
    }), a;
  }, [
    ae,
    j,
    x,
    se,
    yt,
    xt,
    gn,
    we,
    Qe,
    Ee,
    Q,
    pe,
    Ve,
    tn
  ]), cn = j || ie || yt !== 0 || en !== 0 || ln !== 0 || we !== 0 || Ee !== 0, { visualLeft: dn, visualWidth: ct } = n.useMemo(() => {
    let a = Dt, k = Nt;
    if (ln !== 0)
      k = Math.round(
        c((ae.from + ae.durationInFrames + ln) / Ve)
      ) - a;
    else if (j && x)
      if (x === "start") {
        const Re = Math.round(m(ae.from + se));
        a = Re, k = Lt - Re;
      } else
        k = Math.round(m(ae.from + ae.durationInFrames + se)) - Dt;
    if (yt !== 0)
      if (xt === "end") {
        const Re = Math.round(m(ae.from + yt));
        k -= Re - a, a = Re;
      } else xt === "start" && (k = Math.round(m(ae.from + ae.durationInFrames + yt)) - a);
    let Z = a, ee = k;
    xe && Be && (Z = Math.round(c(Be.from / Ve)), ee = Math.round(c((Be.from + Be.duration) / Ve)) - Z);
    const de = ln !== 0 || j || yt !== 0;
    return {
      visualLeft: xe ? Z : de ? a : Dt,
      visualWidth: xe ? ee : de ? k : Nt
    };
  }, [
    Dt,
    Nt,
    j,
    x,
    xe,
    Be,
    m,
    ae.from,
    ae.durationInFrames,
    c,
    Ve,
    se,
    Lt,
    yt,
    xt,
    ln
  ]), so = n.useMemo(() => {
    if (ct <= 0) return null;
    const a = dn, k = dn + ct;
    if (j && x) {
      const { items: Z } = he.getState(), { transitions: ee } = rn.getState();
      return qf({
        item: t,
        items: Z,
        transitions: ee,
        fps: Ve,
        frameToPixels: m,
        handle: x,
        isRollingEdit: ne,
        isRippleEdit: oe,
        constrained: fe,
        currentLeftPx: a,
        currentRightPx: k
      });
    }
    if (xe && ve)
      return Jf({
        item: t,
        fps: Ve,
        frameToPixels: m,
        handle: ve,
        constrained: F,
        currentLeftPx: a,
        currentRightPx: k
      });
    if (ie && Te === "slide") {
      const { items: Z } = he.getState(), { transitions: ee } = rn.getState(), Re = Ft.getState().linkedSelectionEnabled ? Gd(Z, t.id) : [t];
      let ke = null, He = null;
      for (const tt of Re) {
        const ot = tt.from + tt.durationInFrames, bt = new Set(Re.map((Oe) => Oe.id));
        Q && bt.add(Q.id), pe && bt.add(pe.id);
        for (const Oe of Z) {
          if (Oe.trackId !== tt.trackId || Oe.id === tt.id) continue;
          (Oe.from + Oe.durationInFrames === tt.from || Oe.from === ot) && bt.add(Oe.id);
        }
        const Le = Ud(tt, Z);
        if (Le.leftNeighbor && !bt.has(Le.leftNeighbor.id)) {
          const Oe = Le.leftNeighbor.from + Le.leftNeighbor.durationInFrames, st = -(tt.from - Oe), $e = t.from + st;
          (ke === null || $e > ke) && (ke = $e);
        }
        if (Le.rightNeighbor && !bt.has(Le.rightNeighbor.id)) {
          const st = Le.rightNeighbor.from - ot, $e = t.from + t.durationInFrames + st;
          (He === null || $e < He) && (He = $e);
        }
      }
      return Ii({
        item: t,
        items: Z,
        transitions: ee,
        fps: Ve,
        frameToPixels: m,
        leftNeighbor: Q,
        rightNeighbor: pe,
        constraintEdge: Se,
        constrained: ze,
        currentLeftPx: a,
        currentRightPx: k,
        leftWallFrame: ke,
        rightWallFrame: He,
        effectiveMinDelta: Tt?.minDelta,
        effectiveMaxDelta: Tt?.maxDelta
      });
    }
    return ie && Te === "slip" ? Ci({
      item: Bt,
      fps: Ve,
      frameToPixels: m,
      constraintEdge: Se,
      constrained: ze,
      currentLeftPx: a,
      currentRightPx: k
    }) : q && Tt ? Ii({
      item: t,
      items: [],
      transitions: [],
      fps: Ve,
      frameToPixels: m,
      leftNeighbor: null,
      rightNeighbor: null,
      constraintEdge: null,
      constrained: !1,
      currentLeftPx: a,
      currentRightPx: k,
      effectiveMinDelta: Tt.minDelta,
      effectiveMaxDelta: Tt.maxDelta
    }) : g ? Ci({
      item: ae,
      fps: Ve,
      frameToPixels: m,
      constraintEdge: null,
      constrained: !1,
      currentLeftPx: a,
      currentRightPx: k
    }) : null;
  }, [
    Ve,
    m,
    ne,
    oe,
    ie,
    xe,
    j,
    t,
    Q,
    pe,
    ze,
    Se,
    Te,
    F,
    ve,
    fe,
    x,
    dn,
    ct,
    Bt,
    g,
    q,
    ae
  ]), _t = j && x ? { start: x === "start", end: x === "end", constrainedEdge: fe ? ne ? "both" : x : null } : xt ? { start: xt === "end", end: xt === "start", constrainedEdge: Yn ? "both" : null } : ie ? { start: !0, end: !0, constrainedEdge: ze ? Se ?? "both" : null } : g || q ? { start: !0, end: !0, constrainedEdge: null } : xe ? { start: ve === "start", end: ve === "end", constrainedEdge: F ? ve : null } : null, Pr = Yd(dn, ct), sc = n.useMemo(() => {
    switch (t.type) {
      case "video":
        return "bg-timeline-video border-timeline-video";
      case "audio":
        return "bg-timeline-audio border-timeline-audio";
      case "image":
        return "bg-timeline-image/30 border-timeline-image";
      case "text":
        return "bg-timeline-text/30 border-timeline-text";
      case "shape":
        return "bg-timeline-shape/30 border-timeline-shape";
      case "adjustment":
        return "bg-purple-500/30 border-purple-400";
      case "composition":
        return "bg-violet-600/40 border-violet-400";
      default:
        return "bg-timeline-video border-timeline-video";
    }
  }, [t.type]), oc = n.useCallback((a) => {
    if (a.stopPropagation(), o || Tf(A.current, ue.current)) return;
    if (A.current === "razor") {
      const ke = a.currentTarget.closest(".timeline-tracks"), He = ke?.getBoundingClientRect(), tt = He ? a.clientX - He.left + ke.scrollLeft : m(t.from) + (a.clientX - a.currentTarget.getBoundingClientRect().left), { currentFrame: ot, isPlaying: bt } = Ue.getState();
      let Le;
      if (a.shiftKey) {
        const wt = he.getState(), gt = rn.getState().transitions, It = qi(wt.tracks);
        Le = Ji(wt.items, gt, It), Le.push({ frame: Math.round(ot), type: "playhead" });
        for (const Et of Qi.getState().markers)
          Le.push({ frame: Et.frame, type: "marker" });
      }
      const { splitFrame: Oe } = el({
        cursorX: tt,
        currentFrame: ot,
        isPlaying: bt,
        frameToPixels: m,
        pixelsToFrame: d,
        shiftHeld: a.shiftKey,
        snapTargets: Le
      });
      he.getState().splitItem(t.id, Oe);
      const st = he.getState().items, $e = Ft.getState().linkedSelectionEnabled;
      _e.getState().selectItems(
        $e ? xs(st, t.id) : [t.id]
      );
      return;
    }
    if (A.current === "select" || A.current === "trim-edit") {
      const ke = ka(un.current);
      if (ke) {
        const He = Ro(
          rn.getState().transitions,
          t.id,
          ke
        );
        if (He) {
          _e.getState().selectTransition(He.id);
          return;
        }
      }
    }
    const { selectedItemIds: k, selectItems: Z } = _e.getState(), ee = he.getState().items, de = Ft.getState().linkedSelectionEnabled, Re = de ? xs(ee, t.id) : [t.id];
    if (a.metaKey || a.ctrlKey)
      if (Re.some((He) => k.includes(He))) {
        const He = new Set(Re);
        Z(k.filter((tt) => !He.has(tt)));
      } else
        Z(de ? Lo(ee, [...k, ...Re]) : Array.from(/* @__PURE__ */ new Set([...k, ...Re])));
    else
      Z(Re);
  }, [o, m, d, t.from, t.id]), ac = n.useCallback((a) => {
    if (a.stopPropagation(), o || A.current === "razor") return;
    if ((t.type === "composition" || t.type === "audio" && t.compositionId) && t.compositionId) {
      Gt.getState().enterComposition(t.compositionId, t.label, t.id);
      return;
    }
    if (!t.mediaId) return;
    const k = Zd.getState();
    k.setCurrentMediaId(t.mediaId), k.clearInOutPoints(), t.sourceStart !== void 0 && k.setInPoint(t.sourceStart), t.sourceEnd !== void 0 && k.setOutPoint(t.sourceEnd), k.setPendingSeekFrame(t.sourceStart ?? 0), Ft.getState().setSourcePreviewMediaId(t.mediaId);
  }, [o, t]), Mn = n.useRef(p);
  Mn.current = p;
  const un = n.useRef(L);
  un.current = L;
  const xn = n.useRef(h);
  xn.current = h;
  const bn = n.useCallback((a) => {
    Mn.current = a, u(a);
  }, []), qn = n.useCallback((a) => {
    un.current = a, I(a);
  }, []), Rn = n.useCallback((a) => {
    xn.current = a, V(a);
  }, []), ic = n.useCallback((a) => {
    if (o || A.current === "razor" || ft.current) {
      Mn.current !== null && bn(null), un.current !== null && qn(null), xn.current !== null && Rn(null);
      return;
    }
    const k = a.currentTarget.getBoundingClientRect(), Z = a.clientX - k.left, ee = a.clientY - k.top, de = k.width;
    if (A.current === "trim-edit" || A.current === "select") {
      const Re = he.getState().items, ke = rn.getState().transitions, He = !!Xn(t, "start", Re, ke), tt = !!Xn(t, "end", Re, ke), ot = zr(ke, t.id, "start"), bt = zr(ke, t.id, "end"), Le = Ta({
        x: Z,
        width: de,
        hasLeftNeighbor: He,
        hasRightNeighbor: tt,
        hasStartBridge: ot,
        hasEndBridge: bt,
        preferRippleOuterEdges: A.current === "trim-edit",
        currentIntent: un.current,
        edgeZonePx: Ao,
        rollZonePx: La,
        retentionPx: Aa
      }), Oe = ka(Le);
      if (un.current !== Le) {
        const $e = un.current;
        if (qn(Le), Le === "roll-start") {
          const wt = Xn(t, "start", Re, ke);
          wt && ur.getState().setRollHover(t.id, wt.id, "end");
        } else if (Le === "roll-end") {
          const wt = Xn(t, "end", Re, ke);
          wt && ur.getState().setRollHover(t.id, wt.id, "start");
        } else ($e === "roll-start" || $e === "roll-end") && ur.getState().clearRollHover(t.id);
      }
      if (Mn.current !== Oe && bn(Oe), A.current === "select") {
        xn.current !== null && Rn(null);
        return;
      }
      if (Le) {
        xn.current !== null && Rn(null);
        return;
      }
      const st = Na({
        y: ee,
        height: k.height,
        labelRowHeight: vi(a.currentTarget),
        isMediaItem: t.type === "video" || t.type === "audio" || t.type === "composition",
        currentIntent: xn.current
      });
      xn.current !== st && Rn(st);
      return;
    }
    if (un.current !== null && qn(null), xn.current !== null && Rn(null), A.current === "rate-stretch") {
      Mn.current !== null && bn(null);
      return;
    }
    Z <= ji ? Mn.current !== "start" && bn("start") : Z >= de - ji ? Mn.current !== "end" && bn("end") : Mn.current !== null && bn(null);
  }, [t, bn, Rn, qn, o]), lc = o ? "cursor-not-allowed opacity-60" : S === "razor" ? "cursor-scissors" : (S === "trim-edit" || S === "select") && L === "roll-start" || (S === "trim-edit" || S === "select") && L === "roll-end" ? "cursor-trim-center" : (S === "trim-edit" || S === "select") && L === "ripple-start" ? "cursor-ripple-left" : (S === "trim-edit" || S === "select") && L === "ripple-end" ? "cursor-ripple-right" : (S === "trim-edit" || S === "select") && L === "trim-start" ? "cursor-trim-left" : (S === "trim-edit" || S === "select") && L === "trim-end" ? "cursor-trim-right" : S === "trim-edit" && h === "slide-body" ? "cursor-slide-smart" : S === "trim-edit" && h === "slip-body" ? "cursor-slip-smart" : S === "trim-edit" && h !== null || p !== null && S === "trim-edit" ? "cursor-ew-resize" : S === "rate-stretch" ? "cursor-gauge" : S === "slip" || S === "slide" ? t.type === "video" || t.type === "audio" || t.type === "composition" ? "cursor-ew-resize" : "cursor-not-allowed" : l ? "cursor-grabbing" : "cursor-default", cc = n.useCallback(() => {
    const a = _e.getState().selectedItemIds;
    if (a.length < 2) return !1;
    const k = he.getState().items, Z = a.map((ee) => k.find((de) => de.id === ee)).filter((ee) => ee !== void 0);
    return Ma(Z);
  }, [t.id]), dc = n.useCallback(() => {
    const a = _e.getState().selectedItemIds;
    if (a.length < 2) return !1;
    const k = he.getState().items;
    return qd(k, a);
  }, [t.id]), uc = n.useCallback(() => {
    const a = _e.getState().selectedItemIds;
    if (a.length === 0) return !1;
    const k = he.getState().items;
    return a.some((Z) => Ca(k, Z));
  }, []), mc = lt(
    n.useCallback((a) => {
      const k = a.itemsByTrackId[t.trackId];
      if (!k) return "|";
      let Z = "", ee = "";
      for (const de of k)
        de.id !== t.id && (de.from + de.durationInFrames === t.from ? Z = de.id : de.from === t.from + t.durationInFrames && (ee = de.id));
      return Z + "|" + ee;
    }, [t.id, t.trackId, t.from, t.durationInFrames])
  ), qo = n.useCallback(() => {
    const a = lt.getState().itemsByTrackId[t.trackId] ?? [], k = a.find(
      (ee) => ee.id !== t.id && ee.from + ee.durationInFrames === t.from
    ) ?? null, Z = a.find(
      (ee) => ee.id !== t.id && ee.from === t.from + t.durationInFrames
    ) ?? null;
    return {
      leftNeighbor: k,
      rightNeighbor: Z,
      hasJoinableLeft: k ? Ra(k, t) : !1,
      hasJoinableRight: Z ? Ra(t, Z) : !1
    };
  }, [t]), { leftNeighbor: as, rightNeighbor: oo, hasJoinableLeft: ao, hasJoinableRight: io } = n.useMemo(
    () => qo(),
    [qo, mc]
  ), lo = t.from > 0 && !as, fc = n.useMemo(() => {
    if (!lo) return 0;
    const a = lt.getState().itemsByTrackId[t.trackId] ?? [];
    let k = 0;
    for (const Z of a) {
      if (Z.id === t.id) continue;
      const ee = Z.from + Z.durationInFrames;
      ee <= t.from && ee > k && (k = ee);
    }
    return Math.round(m(t.from - k));
  }, [lo, t.trackId, t.id, t.from, t.durationInFrames, m]), pc = n.useCallback(() => {
    const a = _e.getState().selectedItemIds;
    if (a.length >= 2) {
      const k = lt.getState().itemById, Z = a.map((ee) => k[ee]).filter((ee) => ee !== void 0);
      Ma(Z) && he.getState().joinItems(a);
    }
  }, []), Jo = n.useCallback(() => {
    as && he.getState().joinItems([as.id, t.id]);
  }, [as, t.id]), Qo = n.useCallback(() => {
    oo && he.getState().joinItems([t.id, oo.id]);
  }, [oo, t.id]), hc = n.useCallback(() => {
    const a = _e.getState().selectedItemIds;
    a.length > 0 && he.getState().removeItems(a);
  }, []), gc = n.useCallback(() => {
    const a = _e.getState().selectedItemIds;
    a.length > 0 && he.getState().rippleDeleteItems(a);
  }, []), xc = n.useCallback(() => {
    const a = _e.getState().selectedItemIds;
    Jd(a);
  }, []), bc = n.useCallback(() => {
    const a = _e.getState().selectedItemIds;
    Qd(a);
  }, []), vc = n.useCallback(() => {
    Da.getState().openClearAll([t.id]);
  }, [t.id]), yc = n.useCallback((a) => {
    Da.getState().openClearProperty([t.id], a);
  }, [t.id]), wc = n.useCallback(() => {
    const a = _e.getState().selectedItemIds;
    a.length < 2 || sp.getState().open(a);
  }, []), Ic = n.useCallback(() => {
    if (t.type !== "video") return;
    const { currentFrame: a } = Ue.getState();
    eu(t.id, a);
  }, [t.id, t.type]), co = t.type === "text" ? t.text : "", uo = co.trim().length > 0;
  n.useCallback(() => {
    uo && rp.getState().open(co, t.id);
  }, [t.id, co, uo]);
  const is = n.useCallback((a, k) => {
    if (t.type !== "video" && t.type !== "audio" || !t.mediaId || R)
      return;
    const Z = t.mediaId, ee = t.id, de = me.getState(), Re = Bn.getState(), ke = de.transcriptStatus.get(Z) ?? "idle", He = k?.forceTranscription ?? !1, tt = k?.replaceExisting ?? !1, ot = He ? "Regenerating captions" : "Generating captions";
    (async () => {
      let Le = ke;
      try {
        const Oe = await go.getTranscript(Z);
        He || !Oe || Oe.model !== a ? (Re.upsertOverlay(ee, {
          id: $r,
          label: ot,
          progress: 0,
          tone: "info"
        }), de.setTranscriptStatus(Z, "transcribing"), de.setTranscriptProgress(Z, { stage: "loading", progress: 0 }), await go.transcribeMedia(Z, {
          model: a,
          onProgress: (gt) => {
            const It = me.getState();
            It.setTranscriptProgress(Z, gt);
            const Et = It.transcriptProgress.get(Z) ?? gt;
            Bn.getState().upsertOverlay(ee, {
              id: $r,
              label: ot,
              progress: tl(Et),
              tone: "info"
            });
          }
        }), Le = "ready", de.setTranscriptStatus(Z, Le), de.clearTranscriptProgress(Z)) : (Re.upsertOverlay(ee, {
          id: $r,
          label: tt ? "Replacing captions" : "Adding captions",
          tone: "info"
        }), Le = "ready", de.setTranscriptStatus(Z, Le), de.clearTranscriptProgress(Z));
        const $e = await go.insertTranscriptAsCaptions(Z, {
          clipIds: [ee],
          replaceExisting: tt
        }), wt = tt ? $e.insertedItemCount > 0 ? $e.removedItemCount > 0 ? `Replaced ${$e.removedItemCount} caption clip${$e.removedItemCount === 1 ? "" : "s"} with ${$e.insertedItemCount} updated clip${$e.insertedItemCount === 1 ? "" : "s"} for this segment using ${gr[a]}` : `Regenerated ${$e.insertedItemCount} caption clip${$e.insertedItemCount === 1 ? "" : "s"} for this segment using ${gr[a]}` : `Removed ${$e.removedItemCount} generated caption clip${$e.removedItemCount === 1 ? "" : "s"} for this segment using ${gr[a]}` : `Inserted ${$e.insertedItemCount} caption clip${$e.insertedItemCount === 1 ? "" : "s"} for this segment with ${gr[a]}`;
        de.showNotification({
          type: "success",
          message: wt
        });
      } catch (Oe) {
        if (uu(Oe)) {
          de.setTranscriptStatus(Z, ke), de.clearTranscriptProgress(Z);
          return;
        }
        de.setTranscriptStatus(Z, Le === "ready" ? "ready" : "error"), de.clearTranscriptProgress(Z), de.showNotification({
          type: "error",
          message: Oe instanceof Error ? Oe.message : "Failed to generate captions for segment"
        });
      } finally {
        Bn.getState().removeOverlay(ee, $r);
      }
    })();
  }, [t.id, t.mediaId, t.type, R]);
  n.useCallback((a) => {
    is(a);
  }, [is]), n.useCallback((a) => {
    is(a, {
      forceTranscription: !0,
      replaceExisting: !0
    });
  }, [is]);
  const Cc = K.some(
    (a) => a.id === $r
  ), Sc = K.some(
    (a) => a.id === ws
  ), jc = n.useCallback(() => {
    if (t.type !== "video" || !t.mediaId || R) return;
    const a = t.mediaId, k = t.id, Z = t.from, ee = Bn.getState();
    (async () => {
      const Re = new AbortController();
      try {
        ee.upsertOverlay(k, {
          id: ws,
          label: "Detecting scenes",
          progress: 0,
          tone: "info"
        });
        const ke = await jr(a), He = document.createElement("video");
        He.src = ke, He.muted = !0, He.preload = "auto", await new Promise(($e, wt) => {
          He.onloadedmetadata = () => $e(), He.onerror = () => wt(new Error("Failed to load video for scene detection"));
        });
        const tt = he.getState().fps, ot = await mu(He, tt, {
          sampleIntervalMs: 500,
          useGemmaVerification: !1,
          signal: Re.signal,
          onProgress: ($e) => {
            const gt = {
              "optical-flow": `Analyzing motion (${$e.sceneCuts} candidates)`,
              "loading-model": `Loading Gemma model (${$e.percent}%)`,
              verifying: `Verifying cuts (${$e.sceneCuts}/${$e.totalSamples} confirmed)`
            }[$e.stage ?? "optical-flow"];
            Bn.getState().upsertOverlay(k, {
              id: ws,
              label: gt,
              progress: ($e.stage === "loading-model", $e.percent),
              tone: "info"
            });
          }
        });
        if (He.src = "", ot.length === 0) {
          jt.info("No scene cuts detected");
          return;
        }
        const bt = t.durationInFrames, Le = t.sourceStart ?? 0, Oe = ot.map(($e) => $e.frame - Le).filter(($e) => $e > 0 && $e < bt).map(($e) => $e + Z);
        if (Oe.length === 0) {
          jt.info("No scene cuts within clip bounds");
          return;
        }
        const st = fu(k, Oe);
        st > 0 ? jt.success(`Split clip at ${st} scene cut${st > 1 ? "s" : ""}`) : jt.info("No valid split points found");
      } catch (ke) {
        ke instanceof Error && ke.message.includes("WebGPU") ? jt.error("Scene detection requires WebGPU support") : jt.error("Scene detection failed");
      } finally {
        Bn.getState().removeOverlay(k, ws);
      }
    })();
  }, [t.id, t.type, t.mediaId, t.from, t.durationInFrames, t.sourceStart, R]), Fr = t.type === "composition" || t.type === "audio" && !!t.compositionId, Xt = bi(t), [zt, zn] = n.useState(null), ea = n.useRef(zt);
  ea.current = zt;
  const Jn = n.useRef(null), [nn, Hn] = n.useState(null), ta = n.useRef(nn);
  ta.current = nn;
  const Qn = n.useRef(null), [At, $n] = n.useState(null), na = n.useRef(At);
  na.current = At;
  const er = n.useRef(null), [Zt, Lr] = n.useState(null), [ra, ls] = n.useState(null), Dn = n.useRef(null);
  n.useEffect(() => {
    Zt === null && ls(null);
  }, [Zt]);
  const tr = n.useRef(t.type === "audio" ? t.volume ?? 0 : 0);
  n.useEffect(() => () => {
    Jn.current?.(), Qn.current?.(), er.current?.(), Dn.current?.();
  }, []);
  const nr = Xt ? zt?.previewFadeIn ?? t.fadeIn ?? 0 : 0, rr = Xt ? zt?.previewFadeOut ?? t.fadeOut ?? 0 : 0, sr = t.type === "audio" ? nn?.previewFadeIn ?? t.audioFadeIn ?? 0 : 0, or = t.type === "audio" ? nn?.previewFadeOut ?? t.audioFadeOut ?? 0 : 0, ar = t.type === "audio" ? At?.previewFadeInCurve ?? t.audioFadeInCurve ?? 0 : 0, ir = t.type === "audio" ? At?.previewFadeOutCurve ?? t.audioFadeOutCurve ?? 0 : 0, lr = t.type === "audio" ? At?.previewFadeInCurveX ?? t.audioFadeInCurveX ?? 0.52 : 0.52, cr = t.type === "audio" ? At?.previewFadeOutCurveX ?? t.audioFadeOutCurveX ?? 0.52 : 0.52, cs = t.type === "audio" ? t.volume ?? 0 : 0, ds = n.useMemo(
    () => Xt ? bs(nr, Ve, m, ct) : 0,
    [nr, Ve, m, Xt, ct]
  ), us = n.useMemo(
    () => Xt ? bs(rr, Ve, m, ct) : 0,
    [rr, Ve, m, Xt, ct]
  ), kc = 50, vn = n.useMemo(
    () => t.type === "audio" ? bs(sr, Ve, m, ct) : 0,
    [sr, Ve, m, t.type, ct]
  ), yn = n.useMemo(
    () => t.type === "audio" ? bs(or, Ve, m, ct) : 0,
    [or, Ve, m, t.type, ct]
  ), Tc = n.useMemo(
    () => `Fade In ${sr.toFixed(2)}s`,
    [sr]
  ), Nc = n.useMemo(
    () => `Fade Out ${or.toFixed(2)}s`,
    [or]
  ), Mc = n.useMemo(
    () => `Fade In ${nr.toFixed(2)}s`,
    [nr]
  ), Rc = n.useMemo(
    () => `Fade Out ${rr.toFixed(2)}s`,
    [rr]
  ), Dc = n.useMemo(() => {
    if (!Zt) return null;
    const a = tr.current;
    return `Volume ${a >= 0 ? "+" : ""}${a.toFixed(1)} dB`;
  }, [Zt, ra]), sa = n.useMemo(
    () => t.type === "audio" ? fo(cs, Cn) : Cn / 2,
    [cs, t.type]
  ), oa = n.useMemo(
    () => t.type === "audio" ? po(cs) : 1,
    [cs, t.type]
  ), ms = n.useMemo(
    () => sa / Cn * 100,
    [sa]
  ), Ec = t.type === "audio" && (M || Zt !== null) ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.42)", aa = n.useMemo(
    () => Ea({
      handle: "in",
      fadePixels: vn,
      clipWidthPixels: ct,
      curve: ar,
      curveX: lr
    }),
    [vn, ar, lr, ct]
  ), ia = n.useMemo(
    () => Ea({
      handle: "out",
      fadePixels: yn,
      clipWidthPixels: ct,
      curve: ir,
      curveX: cr
    }),
    [yn, ir, cr, ct]
  ), Pc = n.useMemo(
    () => vs({
      handle: "in",
      fadePixels: vn,
      clipWidthPixels: ct,
      curve: ar,
      curveX: lr
    }),
    [vn, ar, lr, ct]
  ), Fc = n.useMemo(
    () => vs({
      handle: "out",
      fadePixels: yn,
      clipWidthPixels: ct,
      curve: ir,
      curveX: cr
    }),
    [yn, ir, cr, ct]
  ), Lc = n.useMemo(
    () => vs({
      handle: "in",
      fadePixels: ds,
      clipWidthPixels: ct,
      curve: 0,
      curveX: 0.52
    }),
    [ds, ct]
  ), Ac = n.useMemo(
    () => vs({
      handle: "out",
      fadePixels: us,
      clipWidthPixels: ct,
      curve: 0,
      curveX: 0.52
    }),
    [us, ct]
  ), la = n.useRef(null), fs = n.useRef(null), Ar = n.useCallback((a) => {
    tr.current = a, ye.current && (ye.current.style.setProperty(
      "--timeline-audio-volume-line-y",
      `${fo(a, Cn) / Cn * 100}%`
    ), ye.current.style.setProperty(
      "--timeline-audio-waveform-scale",
      String(po(a))
    ));
  }, []), ca = t.type, da = t.volume;
  n.useEffect(() => {
    ca !== "audio" || Zt !== null || Ar(da ?? 0);
  }, [Ar, Zt, ca, da]);
  const Or = n.useCallback((a, k) => {
    if (t.type !== "audio")
      return;
    const Z = t.volume ?? 0, ee = Math.abs(Z - a) > Ni;
    if (Ar(a), (!ee || !k?.preserveLiveGainOnCommit) && tu(t.id), !ee) {
      Lr(null);
      return;
    }
    k?.commitFromActiveEdit ? Lr((de) => de && { ...de, isCommitting: !0 }) : Lr(null), Me(t.id, { volume: a });
  }, [Ar, t, Me]);
  n.useEffect(() => {
    if (!zt?.isCommitting || !Xt)
      return;
    const a = zt.handle === "in" ? t.fadeIn ?? 0 : t.fadeOut ?? 0, k = zt.handle === "in" ? zt.previewFadeIn : zt.previewFadeOut;
    Math.abs(a - k) <= Br && zn(null);
  }, [Xt, t, zt]), n.useEffect(() => {
    if (!nn?.isCommitting || t.type !== "audio")
      return;
    const a = nn.handle === "in" ? t.audioFadeIn ?? 0 : t.audioFadeOut ?? 0, k = nn.handle === "in" ? nn.previewFadeIn : nn.previewFadeOut;
    Math.abs(a - k) <= Ht && Hn(null);
  }, [nn, t]), n.useEffect(() => {
    !Zt?.isCommitting || t.type !== "audio" || Math.abs((t.volume ?? 0) - tr.current) <= Ni && Lr(null);
  }, [Zt, t]), n.useEffect(() => {
    if (!At?.isCommitting || t.type !== "audio")
      return;
    const a = At.handle === "in" ? t.audioFadeInCurve ?? 0 : t.audioFadeOutCurve ?? 0, k = At.handle === "in" ? At.previewFadeInCurve : At.previewFadeOutCurve, Z = At.handle === "in" ? t.audioFadeInCurveX ?? 0.52 : t.audioFadeOutCurveX ?? 0.52, ee = At.handle === "in" ? At.previewFadeInCurveX : At.previewFadeOutCurveX;
    Math.abs(a - k) <= Ht && Math.abs(Z - ee) <= Ht && $n(null);
  }, [At, t]);
  const Oc = n.useCallback((a, k) => {
    if (a.button !== 0 || !Xt || o || S !== "select" || ft.current)
      return;
    a.preventDefault(), a.stopPropagation();
    const Z = nr, ee = rr, de = t.fadeIn ?? 0, Re = t.fadeOut ?? 0, ke = (Le) => {
      const Oe = la.current?.getBoundingClientRect() ?? ye.current?.getBoundingClientRect();
      return Oe ? Oa({
        handle: k,
        clipWidthPixels: Oe.width,
        pointerOffsetPixels: Le - Oe.left,
        fps: Ve,
        maxDurationFrames: t.durationInFrames,
        pixelsToFrame: d
      }) : k === "in" ? Z : ee;
    }, He = (Le) => {
      zn({
        handle: k,
        previewFadeIn: k === "in" ? Le : Z,
        previewFadeOut: k === "out" ? Le : ee,
        originalFadeIn: Z,
        originalFadeOut: ee,
        isCommitting: !1
      });
    }, tt = () => {
      const Le = ea.current, Oe = k === "in" ? Le?.previewFadeIn ?? Z : Le?.previewFadeOut ?? ee;
      Jn.current?.(), Jn.current = null, k === "in" ? Math.abs(Oe - de) > Br ? (zn((st) => st && { ...st, isCommitting: !0 }), Me(t.id, { fadeIn: Oe })) : zn(null) : Math.abs(Oe - Re) > Br ? (zn((st) => st && { ...st, isCommitting: !0 }), Me(t.id, { fadeOut: Oe })) : zn(null);
    };
    He(ke(a.clientX));
    const ot = (Le) => {
      He(ke(Le.clientX));
    }, bt = () => {
      tt();
    };
    window.addEventListener("mousemove", ot), window.addEventListener("mouseup", bt, { once: !0 }), Jn.current = () => {
      window.removeEventListener("mousemove", ot), window.removeEventListener("mouseup", bt);
    };
  }, [S, nr, rr, Ve, Xt, t, d, o, Me]), _c = n.useCallback((a, k) => {
    if (t.type !== "audio" || o || S !== "select" || ft.current)
      return;
    a.preventDefault(), a.stopPropagation();
    const Z = sr, ee = or, de = t.audioFadeIn ?? 0, Re = t.audioFadeOut ?? 0, ke = (Le) => {
      const Oe = fs.current?.getBoundingClientRect() ?? ye.current?.getBoundingClientRect();
      return Oe ? Oa({
        handle: k,
        clipWidthPixels: Oe.width,
        pointerOffsetPixels: Le - Oe.left,
        fps: Ve,
        maxDurationFrames: t.durationInFrames,
        pixelsToFrame: d
      }) : k === "in" ? Z : ee;
    }, He = (Le) => {
      Hn({
        handle: k,
        previewFadeIn: k === "in" ? Le : Z,
        previewFadeOut: k === "out" ? Le : ee,
        originalFadeIn: Z,
        originalFadeOut: ee,
        isCommitting: !1
      });
    }, tt = () => {
      const Le = ta.current, Oe = k === "in" ? Le?.previewFadeIn ?? Z : Le?.previewFadeOut ?? ee;
      Qn.current?.(), Qn.current = null, k === "in" ? Math.abs(Oe - de) > Ht ? (Hn((st) => st && { ...st, isCommitting: !0 }), Me(t.id, { audioFadeIn: Oe })) : Hn(null) : Math.abs(Oe - Re) > Ht ? (Hn((st) => st && { ...st, isCommitting: !0 }), Me(t.id, { audioFadeOut: Oe })) : Hn(null);
    };
    He(ke(a.clientX));
    const ot = (Le) => {
      He(ke(Le.clientX));
    }, bt = () => {
      tt();
    };
    window.addEventListener("mousemove", ot), window.addEventListener("mouseup", bt, { once: !0 }), Qn.current = () => {
      window.removeEventListener("mousemove", ot), window.removeEventListener("mouseup", bt);
    };
  }, [S, sr, or, Ve, t, d, o, Me]), zc = n.useCallback((a, k) => {
    if (t.type !== "audio" || o || S !== "select" || ft.current)
      return;
    const Z = k === "in" ? vn : yn;
    if (Z <= 0)
      return;
    a.preventDefault(), a.stopPropagation();
    const ee = ar, de = ir, Re = lr, ke = cr, He = t.audioFadeInCurve ?? 0, tt = t.audioFadeOutCurve ?? 0, ot = t.audioFadeInCurveX ?? 0.52, bt = t.audioFadeOutCurveX ?? 0.52, Le = (gt, It) => {
      const Et = fs.current?.getBoundingClientRect();
      return Et ? pu({
        handle: k,
        pointerOffsetX: gt - Et.left,
        pointerOffsetY: It - Et.top,
        fadePixels: Z,
        clipWidthPixels: Et.width,
        rowHeight: Et.height
      }) : {
        curve: k === "in" ? ee : de,
        curveX: k === "in" ? Re : ke
      };
    }, Oe = (gt) => {
      $n({
        handle: k,
        previewFadeInCurve: k === "in" ? gt.curve : ee,
        previewFadeOutCurve: k === "out" ? gt.curve : de,
        previewFadeInCurveX: k === "in" ? gt.curveX : Re,
        previewFadeOutCurveX: k === "out" ? gt.curveX : ke,
        originalFadeInCurve: ee,
        originalFadeOutCurve: de,
        originalFadeInCurveX: Re,
        originalFadeOutCurveX: ke,
        isCommitting: !1
      });
    }, st = () => {
      const gt = na.current, It = k === "in" ? gt?.previewFadeInCurve ?? ee : gt?.previewFadeOutCurve ?? de, Et = k === "in" ? gt?.previewFadeInCurveX ?? Re : gt?.previewFadeOutCurveX ?? ke;
      er.current?.(), er.current = null, k === "in" ? Math.abs(It - He) > Ht || Math.abs(Et - ot) > Ht ? ($n((Ct) => Ct && { ...Ct, isCommitting: !0 }), Me(t.id, { audioFadeInCurve: It, audioFadeInCurveX: Et })) : $n(null) : Math.abs(It - tt) > Ht || Math.abs(Et - bt) > Ht ? ($n((Ct) => Ct && { ...Ct, isCommitting: !0 }), Me(t.id, { audioFadeOutCurve: It, audioFadeOutCurveX: Et })) : $n(null);
    };
    Oe(Le(a.clientX, a.clientY));
    const $e = (gt) => {
      Oe(Le(gt.clientX, gt.clientY));
    }, wt = () => {
      st();
    };
    window.addEventListener("mousemove", $e), window.addEventListener("mouseup", wt, { once: !0 }), er.current = () => {
      window.removeEventListener("mousemove", $e), window.removeEventListener("mouseup", wt);
    };
  }, [
    S,
    vn,
    yn,
    ar,
    lr,
    ir,
    cr,
    t,
    o,
    Me
  ]), Hc = n.useCallback((a) => {
    if (t.type !== "audio" || o || S !== "select" || ft.current)
      return;
    a.preventDefault(), a.stopPropagation();
    const k = t.volume ?? 0, Z = nu(t.id), ee = a.clientY, de = a.clientX;
    let Re = ee, ke = de, He = k, tt = !1, ot = null;
    const bt = ee, Le = k, Oe = (Wt) => {
      He = Wt, Ar(Wt);
      const gs = Math.pow(10, (Wt - k) / 20);
      hu([{ itemId: t.id, gain: Z * gs }]);
    }, st = () => {
      ot !== null && (window.clearTimeout(ot), ot = null);
    }, $e = (Wt) => {
      const gs = fs.current?.getBoundingClientRect();
      return gs ? gu({
        startVolumeDb: Le,
        pointerDeltaY: Wt - bt,
        height: gs.height
      }) : k;
    }, wt = () => {
      tt || (tt = !0, Lr({
        originalVolume: k,
        isCommitting: !1
      }), ls({ clientX: ke, clientY: Re }), Oe($e(Re)));
    }, gt = () => {
      const Wt = tr.current ?? He;
      Dn.current?.(), Dn.current = null, Or(Wt, {
        preserveLiveGainOnCommit: !0,
        commitFromActiveEdit: !0
      });
    };
    let It = null;
    const Et = () => {
      if (It = null, !tt) return;
      const Wt = xu();
      ls({ clientX: ke, clientY: Re }), Oe($e(Re)), Wt();
    }, Ct = () => {
      It === null && (It = window.requestAnimationFrame(Et));
    }, ha = () => {
      It !== null && (window.cancelAnimationFrame(It), It = null);
    }, ga = (Wt) => {
      if (Re = Wt.clientY, ke = Wt.clientX, !tt) {
        if (Math.abs(Wt.clientY - ee) < lp)
          return;
        st(), wt();
        return;
      }
      Ct();
    }, xa = () => {
      if (!tt) {
        Dn.current?.(), Dn.current = null, ls(null), Or(k);
        return;
      }
      It !== null && (ha(), Oe($e(Re))), gt();
    };
    window.addEventListener("mousemove", ga), window.addEventListener("mouseup", xa, { once: !0 }), ot = window.setTimeout(() => {
      st(), wt();
    }, ip), Dn.current = () => {
      st(), ha(), window.removeEventListener("mousemove", ga), window.removeEventListener("mouseup", xa);
    };
  }, [S, Or, t, o]), $c = n.useCallback(() => {
    t.type !== "audio" || o || (Dn.current?.(), Dn.current = null, Or(0));
  }, [Or, t, o]), Bc = n.useCallback((a) => {
    if (!(!Xt || o)) {
      if (Jn.current?.(), Jn.current = null, zn(null), a === "in") {
        (t.fadeIn ?? 0) > Br && Me(t.id, { fadeIn: 0 });
        return;
      }
      (t.fadeOut ?? 0) > Br && Me(t.id, { fadeOut: 0 });
    }
  }, [t, o, Me]), Xc = n.useCallback((a) => {
    if (!(t.type !== "audio" || o)) {
      if (Qn.current?.(), Qn.current = null, Hn(null), a === "in") {
        (t.audioFadeIn ?? 0) > Ht && Me(t.id, { audioFadeIn: 0 });
        return;
      }
      (t.audioFadeOut ?? 0) > Ht && Me(t.id, { audioFadeOut: 0 });
    }
  }, [t, o, Me]), Vc = n.useCallback((a) => {
    if (!(t.type !== "audio" || o)) {
      if (er.current?.(), er.current = null, $n(null), a === "in") {
        (Math.abs(t.audioFadeInCurve ?? 0) > Ht || Math.abs((t.audioFadeInCurveX ?? 0.52) - 0.52) > Ht) && Me(t.id, { audioFadeInCurve: 0, audioFadeInCurveX: 0.52 });
        return;
      }
      (Math.abs(t.audioFadeOutCurve ?? 0) > Ht || Math.abs((t.audioFadeOutCurveX ?? 0.52) - 0.52) > Ht) && Me(t.id, { audioFadeOutCurve: 0, audioFadeOutCurveX: 0.52 });
    }
  }, [Xt, t, o, Me]), _r = n.useMemo(() => bi(Bt) && zt !== null ? {
    ...Bt,
    fadeIn: zt.previewFadeIn,
    fadeOut: zt.previewFadeOut
  } : (Bt.type !== "audio", Bt), [Bt, zt]), mo = n.useMemo(() => {
    let a = Ke + en + be;
    return j && x === "start" && (a += se), yt !== 0 && xt === "end" && (a += yt), Qe === "right" && Ee !== 0 && (a += Ee), a === 0 ? _r : {
      ..._r,
      from: _r.from + a
    };
  }, [
    _r,
    j,
    x,
    se,
    yt,
    xt,
    Qe,
    Ee,
    Ke,
    en,
    be
  ]), ua = kf({
    linkedSelectionEnabled: E,
    linkedEditPreviewActive: P !== null,
    isDragging: W,
    isPartOfDrag: ht,
    isTrimming: j,
    isStretching: xe,
    isSlipSlideActive: ie,
    rollingEditDelta: yt,
    rippleEditOffset: en,
    rippleEdgeDelta: ln,
    slipEditDelta: gn,
    slideEditOffset: we,
    slideNeighborDelta: Ee
  }), Kc = n.useMemo(() => !ua && ut.length > 0 ? ru([mo, ...ut], mo.id, Ve, Ut) : null, [ut, mo, Ve, Ut, ua]), Wc = n.useCallback(() => {
    const a = _e.getState().selectedItemIds;
    su(void 0, a);
  }, []), Gc = n.useCallback(() => {
    !Fr || !t.compositionId || Gt.getState().enterComposition(t.compositionId, t.label, t.id);
  }, [Fr, t]), Uc = n.useCallback(() => {
    Fr && ou(t.id);
  }, [Fr, t]), Yc = n.useCallback((a) => {
    const k = a.currentTarget.getBoundingClientRect(), Z = a.clientX - k.left, ee = a.clientY - k.top;
    let de = null;
    if (S === "trim-edit") {
      const Re = he.getState().items, ke = rn.getState().transitions, He = !!Xn(t, "start", Re, ke), tt = !!Xn(t, "end", Re, ke);
      Ta({
        x: Z,
        width: k.width,
        hasLeftNeighbor: He,
        hasRightNeighbor: tt,
        hasStartBridge: zr(ke, t.id, "start"),
        hasEndBridge: zr(ke, t.id, "end"),
        preferRippleOuterEdges: !0,
        currentIntent: un.current,
        edgeZonePx: Ao,
        rollZonePx: La,
        retentionPx: Aa
      }) || (de = Na({
        y: ee,
        height: k.height,
        labelRowHeight: vi(a.currentTarget),
        isMediaItem: t.type === "video" || t.type === "audio" || t.type === "composition",
        currentIntent: xn.current
      }));
    }
    if (S === "trim-edit" && !o && de) {
      (t.type === "video" || t.type === "audio" || t.type === "composition") && Ae(
        a,
        de === "slide-body" ? "slide" : "slip",
        { activateOnMoveThreshold: !0 }
      );
      return;
    }
    if ((S === "slip" || S === "slide") && !o) {
      t.type === "video" || t.type === "audio" || t.type === "composition" ? Ae(a, S) : U({ x: a.clientX, y: a.clientY, message: "Use slip/slide on source-based clips only", tone: "warning" });
      return;
    }
    if (S === "rate-stretch" && !o && !xe) {
      if (!Sa(t)) {
        U({ x: a.clientX, y: a.clientY, message: "This clip can't be rate stretched", tone: "warning" });
        return;
      }
      _(a, "end");
      return;
    }
    o || j || xe || ie || S === "razor" || S === "rate-stretch" || S === "slip" || S === "slide" || p !== null || re(a);
  }, [S, o, xe, j, ie, p, re, Ae, _, t]), Zc = n.useCallback(() => {
    bn(null), qn(null), Rn(null), ur.getState().clearRollHover(t.id);
  }, [t.id, bn, Rn, qn]), qc = n.useCallback((a, k) => {
    const Z = un.current, ee = A.current === "trim-edit" || A.current === "select" ? au(Z) : null, de = A.current === "select" && ee === "ripple" && zr(rn.getState().transitions, t.id, k), Re = de ? null : ee;
    je(a, k, Re || de ? {
      forcedMode: Re,
      destroyTransitionAtHandle: de
    } : void 0);
  }, [je]), Jc = n.useCallback((a) => {
    const k = a.currentTarget.getBoundingClientRect(), Z = a.clientX - k.left, ee = k.width / 2;
    z(Z < ee ? "left" : "right");
    const { selectedItemIds: de, selectItems: Re } = _e.getState(), ke = he.getState().items, He = Ft.getState().linkedSelectionEnabled, tt = He ? xs(ke, t.id) : [t.id];
    tt.some((bt) => de.includes(bt)) || (de.length === 1 && tt.length === 1 && !de.includes(t.id) ? Re(He ? Lo(ke, [...de, t.id]) : Array.from(/* @__PURE__ */ new Set([...de, t.id]))) : Re(tt));
  }, [t.id]), ma = n.useCallback((a) => (k) => {
    if (!Mi(k) || o || !Mt) return;
    const ee = Kt.getState(), de = Pa({
      itemId: t.id,
      edge: a,
      items: lt.getState().items,
      transitions: rn.getState().transitions
    });
    if (!de) {
      ee.clearPreview(), ee.setInvalidHint({
        x: k.clientX,
        y: k.clientY,
        message: "No adjacent clip on this edge"
      });
      return;
    }
    if (de.hasExisting) {
      ee.clearPreview(), ee.setInvalidHint({
        x: k.clientX,
        y: k.clientY,
        message: "Drop on the existing transition bridge to replace it"
      });
      return;
    }
    if (!de.canApply) {
      ee.clearPreview(), ee.setInvalidHint({
        x: k.clientX,
        y: k.clientY,
        message: de.reason ?? "This cut cannot accept a transition"
      });
      return;
    }
    k.preventDefault(), k.stopPropagation(), k.dataTransfer.dropEffect = "copy", ee.setInvalidHint(null), ee.setPreview({
      leftClipId: de.leftClipId,
      rightClipId: de.rightClipId,
      durationInFrames: de.suggestedDurationInFrames,
      alignment: de.alignment
    });
  }, [Mt, t.id, o]), fa = n.useCallback(() => {
    const a = Kt.getState(), k = a.preview;
    !k || k.existingTransitionId || ((k.leftClipId === t.id || k.rightClipId === t.id) && a.clearPreview(), a.setInvalidHint(null));
  }, [t.id]), pa = n.useCallback((a) => (k) => {
    const Z = Mi(k);
    if (!Z || o) return;
    const ee = Pa({
      itemId: t.id,
      edge: a,
      items: lt.getState().items,
      transitions: rn.getState().transitions
    });
    if (!ee || ee.hasExisting || !ee.canApply) {
      Kt.getState().clearDrag();
      return;
    }
    k.preventDefault(), k.stopPropagation(), he.getState().addTransition(
      ee.leftClipId,
      ee.rightClipId,
      "crossfade",
      ee.suggestedDurationInFrames,
      Z.presentation,
      Z.direction
    ), Kt.getState().clearDrag();
  }, [t.id, o]), ps = n.useCallback((a) => {
    const k = iu(a);
    return !k || o || t.type === "audio" ? null : k;
  }, [t.type, o]), dr = n.useCallback((a) => {
    if (!ps(a))
      return [];
    const Z = lt.getState().items, ee = new Map(Z.map((ke) => [ke.id, ke])), de = new Set(
      he.getState().tracks.filter((ke) => ke.locked).map((ke) => ke.id)
    ), Re = _e.getState().selectedItemIds;
    return lu({
      hoveredItemId: t.id,
      items: Z,
      selectedItemIds: Re
    }).filter((ke) => !de.has(ee.get(ke)?.trackId ?? ""));
  }, [t.id, ps]), hs = n.useCallback((a) => {
    if (a.length === 0) {
      mn.getState().clearPreview();
      return;
    }
    mn.getState().setPreview(a, t.id);
  }, [t.id]), Qc = n.useCallback((a) => {
    const k = dr(xr());
    k.length !== 0 && (a.preventDefault(), a.stopPropagation(), hs(k), yr.getState().clearGhostPreviews());
  }, [dr, hs]), ed = n.useCallback((a) => {
    const k = dr(xr());
    if (k.length === 0) {
      mn.getState().clearPreview();
      return;
    }
    a.preventDefault(), a.stopPropagation(), a.dataTransfer.dropEffect = "copy", hs(k), yr.getState().clearGhostPreviews();
  }, [dr, hs]), td = n.useCallback((a) => {
    cu(a, a.currentTarget) || mn.getState().hoveredItemId === t.id && mn.getState().clearPreview();
  }, [t.id]), nd = n.useCallback((a) => {
    const k = a.dataTransfer.getData("application/json");
    let Z = xr();
    if (k)
      try {
        Z = JSON.parse(k);
      } catch {
        Z = xr();
      }
    const ee = ps(Z), de = dr(Z);
    mn.getState().clearPreview(), !(!ee || de.length === 0) && (a.preventDefault(), a.stopPropagation(), yr.getState().clearGhostPreviews(), dt(de.map((Re) => ({ itemId: Re, effects: ee }))), de.length > 1 && jt.success(`Applied effect to ${de.length} clips`));
  }, [dt, ps, dr]);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      np,
      {
        trackLocked: o,
        isSelected: M,
        canJoinSelected: cc(),
        hasJoinableLeft: ao,
        hasJoinableRight: io,
        closerEdge: ge,
        keyframedProperties: v,
        canLinkSelected: dc(),
        canUnlinkSelected: uc(),
        onJoinSelected: pc,
        onJoinLeft: Jo,
        onJoinRight: Qo,
        onLinkSelected: xc,
        onUnlinkSelected: bc,
        onRippleDelete: gc,
        onDelete: hc,
        onClearAllKeyframes: vc,
        onClearPropertyKeyframes: yc,
        onBentoLayout: wc,
        isVideoItem: t.type === "video",
        playheadInBounds: (() => {
          const a = Ue.getState().currentFrame;
          return a > t.from && a < t.from + t.durationInFrames;
        })(),
        onFreezeFrame: Ic,
        isTextItem: t.type === "text" && uo,
        onGenerateAudioFromText: void 0,
        canGenerateCaptions: (t.type === "video" || t.type === "audio") && !!t.mediaId && !R,
        canRegenerateCaptions: w,
        isGeneratingCaptions: Cc || N === "transcribing",
        defaultCaptionModel: f,
        onGenerateCaptions: void 0,
        onRegenerateCaptions: void 0,
        isCompositionItem: Fr,
        onEnterComposition: Gc,
        onDissolveComposition: Uc,
        canCreatePreComp: M,
        onCreatePreComp: Wc,
        canDetectScenes: t.type === "video" && !!t.mediaId && !R,
        isDetectingScenes: Sc,
        onDetectScenes: jc,
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            ref: ye,
            "data-item-id": t.id,
            "data-item-type": t.type,
            className: Pe(
              "absolute inset-y-px rounded overflow-visible group/timeline-item",
              sc,
              lc,
              !l && !xe && !o && "hover:brightness-110"
            ),
            style: {
              left: `${dn}px`,
              width: `${ct}px`,
              transform: l && !kt ? `translate(${(W ? Ie : ho.current[t.id] ?? Ts.current).x}px, ${(W ? Ie : ho.current[t.id] ?? Ts.current).y}px)` : void 0,
              opacity: X ? Fa : i ? 0.3 : o ? 0.6 : 1,
              pointerEvents: l ? "none" : "auto",
              zIndex: l ? 50 : void 0,
              transition: l ? "none" : void 0,
              contain: "layout style paint",
              contentVisibility: "auto",
              containIntrinsicSize: `0 ${du}px`,
              "--timeline-audio-volume-line-y": `${t.type === "audio" && Zt !== null ? fo(tr.current, Cn) / Cn * 100 : ms}%`,
              "--timeline-audio-waveform-scale": String(
                t.type === "audio" && Zt !== null ? po(tr.current) : oa
              )
            },
            onClick: oc,
            onDoubleClick: ac,
            onMouseDown: Yc,
            onMouseMove: ic,
            onMouseLeave: Zc,
            onContextMenu: Jc,
            onDragEnter: Qc,
            onDragOver: ed,
            onDragLeave: td,
            onDrop: nd,
            children: [
              M && !o && !J && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 rounded pointer-events-none z-20 border border-primary" }),
              B && /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "absolute inset-0 rounded pointer-events-none z-20 border border-dashed border-sky-300/90 bg-sky-400/15 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.35)]",
                  children: le > 1 && /* @__PURE__ */ e.jsxs("div", { className: "absolute top-1 right-1 rounded-full bg-sky-300/90 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-slate-950", children: [
                    le,
                    " clips"
                  ] })
                }
              ),
              /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-px rounded-[3px] overflow-hidden", children: [
                /* @__PURE__ */ e.jsx(Bf, { overlays: K }),
                Xt && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    ref: la,
                    className: "absolute inset-x-0 bottom-0 pointer-events-none z-10",
                    style: { top: St.timelineClipLabelRowHeight },
                    children: /* @__PURE__ */ e.jsxs(
                      "svg",
                      {
                        className: "absolute inset-0 h-full w-full",
                        viewBox: `0 0 ${Math.max(1, ct)} ${Cn}`,
                        preserveAspectRatio: "none",
                        children: [
                          ds > 0 && /* @__PURE__ */ e.jsx(
                            "path",
                            {
                              d: Lc,
                              fill: "rgba(15,23,42,0.46)"
                            }
                          ),
                          us > 0 && /* @__PURE__ */ e.jsx(
                            "path",
                            {
                              d: Ac,
                              fill: "rgba(15,23,42,0.46)"
                            }
                          )
                        ]
                      }
                    )
                  }
                ),
                t.type === "audio" && /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    ref: fs,
                    className: "absolute inset-x-0 bottom-0 pointer-events-none z-10",
                    style: { top: St.timelineClipLabelRowHeight },
                    children: [
                      /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          className: "absolute left-0 right-0 h-px -translate-y-1/2 pointer-events-none",
                          style: {
                            top: `var(--timeline-audio-volume-line-y, ${ms}%)`,
                            backgroundColor: Ec
                          }
                        }
                      ),
                      /* @__PURE__ */ e.jsxs(
                        "svg",
                        {
                          className: "absolute inset-0 h-full w-full",
                          viewBox: `0 0 ${Math.max(1, ct)} ${Cn}`,
                          preserveAspectRatio: "none",
                          children: [
                            vn > 0 && /* @__PURE__ */ e.jsx(
                              "path",
                              {
                                d: Pc,
                                fill: "rgba(0,0,0,0.5)"
                              }
                            ),
                            yn > 0 && /* @__PURE__ */ e.jsx(
                              "path",
                              {
                                d: Fc,
                                fill: "rgba(0,0,0,0.5)"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  Sf,
                  {
                    item: _r,
                    clipWidth: ct,
                    fps: Ve,
                    isLinked: T && !H,
                    isClipVisible: Pr.isVisible,
                    visibleStartRatio: Pr.visibleStartRatio,
                    visibleEndRatio: Pr.visibleEndRatio,
                    pixelsPerSecond: b,
                    preferImmediateRendering: cn,
                    audioWaveformScale: oa,
                    linkedSyncOffsetFrames: H ? null : Kc
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  jf,
                  {
                    hasKeyframes: Y,
                    currentSpeed: Ge,
                    isStretching: xe,
                    stretchFeedback: Be,
                    isBroken: R && !H,
                    hasMediaId: !!t.mediaId,
                    isMask: t.type === "shape" ? t.isMask ?? !1 : !1,
                    isShape: t.type === "shape"
                  }
                )
              ] }),
              Xt && /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "absolute inset-x-0 bottom-0 z-30 pointer-events-none",
                  style: { top: St.timelineClipLabelRowHeight },
                  children: /* @__PURE__ */ e.jsx(
                    Of,
                    {
                      trackLocked: o,
                      activeTool: S,
                      clipWidth: ct,
                      lineYPercent: kc,
                      fadeInPixels: ds,
                      fadeOutPixels: us,
                      isSelected: M,
                      isEditing: zt !== null,
                      fadeInLabel: Mc,
                      fadeOutLabel: Rc,
                      onFadeHandleMouseDown: Oc,
                      onFadeHandleDoubleClick: Bc
                    }
                  )
                }
              ),
              t.type === "audio" && /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "absolute inset-x-0 bottom-0 z-30 pointer-events-none",
                  style: { top: St.timelineClipLabelRowHeight },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      Lf,
                      {
                        trackLocked: o,
                        activeTool: S,
                        clipWidth: ct,
                        lineYPercent: ms,
                        fadeInPixels: vn,
                        fadeOutPixels: yn,
                        isSelected: M,
                        isEditing: nn !== null,
                        curveEditingHandle: At?.handle ?? null,
                        fadeInLabel: Tc,
                        fadeOutLabel: Nc,
                        fadeInCurveDot: vn > 0 ? { x: aa.x, yPercent: aa.y } : null,
                        fadeOutCurveDot: yn > 0 ? { x: ia.x, yPercent: ia.y } : null,
                        onFadeHandleMouseDown: _c,
                        onFadeHandleDoubleClick: Xc,
                        onFadeCurveDotMouseDown: zc,
                        onFadeCurveDotDoubleClick: Vc
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      zf,
                      {
                        trackLocked: o,
                        activeTool: S,
                        lineYPercent: ms,
                        isEditing: Zt !== null,
                        editLabel: Dc,
                        editLabelViewport: ra,
                        onVolumeMouseDown: Hc,
                        onVolumeDoubleClick: $c
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                Df,
                {
                  trackLocked: o,
                  isAnyDragActive: ft.current,
                  isTrimming: j,
                  trimHandle: x,
                  activeTool: S,
                  hoveredEdge: p,
                  smartTrimIntent: L,
                  rollHoverEdge: C,
                  activeEdges: _t,
                  startCursorClass: L === "ripple-start" ? "cursor-ripple-left" : L === "roll-start" ? "cursor-trim-center" : "cursor-trim-left",
                  endCursorClass: L === "ripple-end" ? "cursor-ripple-right" : L === "roll-end" ? "cursor-trim-center" : "cursor-trim-right",
                  startTone: L === "ripple-start" || j && x === "start" && oe ? "ripple" : "default",
                  endTone: L === "ripple-end" || j && x === "end" && oe ? "ripple" : "default",
                  hasJoinableLeft: ao,
                  hasJoinableRight: io,
                  onTrimStart: qc,
                  onJoinLeft: Jo,
                  onJoinRight: Qo
                }
              ),
              /* @__PURE__ */ e.jsx(
                Pf,
                {
                  trackLocked: o,
                  isAnyDragActive: ft.current,
                  isStretching: xe,
                  stretchHandle: ve,
                  stretchConstrained: F,
                  isRateStretchItem: at,
                  onStretchStart: _
                }
              ),
              /* @__PURE__ */ e.jsx(
                Hf,
                {
                  hasJoinableLeft: ao,
                  hasJoinableRight: io,
                  trackLocked: o,
                  dragAffectsJoin: De,
                  hoveredEdge: p,
                  isTrimming: j,
                  isStretching: xe,
                  isBeingDragged: l
                }
              ),
              Mt && !o && (t.type === "video" || t.type === "image") && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "absolute inset-y-0 -left-2 z-40 w-4",
                    onDragOver: ma("left"),
                    onDragLeave: fa,
                    onDrop: pa("left")
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "absolute inset-y-0 -right-2 z-40 w-4",
                    onDragOver: ma("right"),
                    onDragLeave: fa,
                    onDrop: pa("right")
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ e.jsx(
      Ef,
      {
        enabled: lo && !o && S === "trim-edit",
        isActive: We,
        clipLeftPx: dn,
        zonePx: ap(b, fc),
        onMouseDown: et
      }
    ),
    /* @__PURE__ */ e.jsx(Xf, { visual: so }),
    _t && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "absolute inset-y-0 pointer-events-none",
        style: { left: `${dn}px`, width: `${ct}px`, zIndex: 2 },
        children: [
          _t.start && (() => {
            const k = _t.constrainedEdge === "start" || _t.constrainedEdge === "both" ? Xo : Vo;
            return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 left-0", style: { width: "2px", background: k.edge, boxShadow: k.glow } }),
              /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0", style: { left: "2px", width: "8px", background: `linear-gradient(to right, ${k.fade}, transparent)` } })
            ] });
          })(),
          _t.end && (() => {
            const k = _t.constrainedEdge === "end" || _t.constrainedEdge === "both" ? Xo : Vo;
            return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0 right-0", style: { width: "2px", background: k.edge, boxShadow: k.glow } }),
              /* @__PURE__ */ e.jsx("div", { className: "absolute inset-y-0", style: { right: "2px", width: "8px", background: `linear-gradient(to left, ${k.fade}, transparent)` } })
            ] });
          })()
        ]
      }
    ),
    rt && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "absolute inset-y-0 pointer-events-none overflow-hidden rounded-sm border border-slate-100/80 shadow-[0_8px_20px_rgba(15,23,42,0.18)]",
        style: {
          left: `${rt.left}px`,
          width: `${rt.width}px`,
          zIndex: 35,
          background: "rgba(248,250,252,0.08)"
        },
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.08),rgba(255,255,255,0.02)_48%,rgba(255,255,255,0.02)_52%,rgba(248,250,252,0.08))]" }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute top-0 bottom-0 w-px bg-slate-50/90",
              style: { left: `${rt.cutOffset}px` }
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-white/60" }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px bg-slate-900/20" })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      Qf,
      {
        isAltDrag: kt,
        isDragging: W,
        left: Dt,
        width: Nt,
        dragOffset: Ie
      }
    ),
    /* @__PURE__ */ e.jsx(
      ep,
      {
        ref: O,
        left: Dt,
        width: Nt
      }
    ),
    /* @__PURE__ */ e.jsx(tp, { hint: te })
  ] });
}, (r, t) => {
  const s = r.item, o = t.item, i = s.type === "shape" ? s.isMask : void 0, c = o.type === "shape" ? o.isMask : void 0;
  return s.id === o.id && s.from === o.from && s.durationInFrames === o.durationInFrames && s.trackId === o.trackId && s.type === o.type && s.label === o.label && s.mediaId === o.mediaId && s.sourceStart === o.sourceStart && s.sourceEnd === o.sourceEnd && s.sourceDuration === o.sourceDuration && s.sourceFps === o.sourceFps && s.trimStart === o.trimStart && s.speed === o.speed && s.volume === o.volume && s.effects === o.effects && s.audioFadeIn === o.audioFadeIn && s.audioFadeOut === o.audioFadeOut && s.audioFadeInCurve === o.audioFadeInCurve && s.audioFadeOutCurve === o.audioFadeOutCurve && s.audioFadeInCurveX === o.audioFadeInCurveX && s.audioFadeOutCurveX === o.audioFadeOutCurveX && s.fadeIn === o.fadeIn && s.fadeOut === o.fadeOut && i === c && r.timelineDuration === t.timelineDuration && r.trackLocked === t.trackLocked && r.trackHidden === t.trackHidden;
}), Cs = 6, Ri = 24;
function Di(r) {
  const t = Kt.getState().draggedTransition;
  if (t) return t;
  const s = r.dataTransfer.getData(Bl);
  if (!s) return null;
  try {
    const o = JSON.parse(s);
    return typeof o.presentation != "string" ? null : {
      presentation: o.presentation,
      direction: o.direction
    };
  } catch {
    return null;
  }
}
const dp = n.memo(function({
  transition: t,
  trackHidden: s = !1
}) {
  const { frameToPixels: o } = on(), i = he((j) => j.fps), c = he(
    (j) => j.removeTransition
  ), m = he(
    (j) => j.updateTransition
  ), d = lt(
    n.useCallback((j) => j.itemById[t.leftClipId], [t.leftClipId])
  ), b = lt(
    n.useCallback((j) => j.itemById[t.rightClipId], [t.rightClipId])
  ), M = _e(
    n.useCallback(
      (j) => j.selectedTransitionId === t.id,
      [t.id]
    )
  ), R = _e(
    (j) => j.selectTransition
  ), { isResizing: N, handleResizeStart: w, previewDuration: f } = bu(t), T = ks(
    Jt(
      n.useCallback(
        (j) => j.trimmedItemId === t.leftClipId || j.trimmedItemId === t.rightClipId || j.neighborItemId === t.leftClipId || j.neighborItemId === t.rightClipId ? {
          trimmedItemId: j.trimmedItemId,
          neighborItemId: j.neighborItemId,
          handle: j.handle,
          delta: j.neighborDelta
        } : {
          trimmedItemId: null,
          neighborItemId: null,
          handle: null,
          delta: 0
        },
        [t.leftClipId, t.rightClipId]
      )
    )
  ), H = En(
    Jt(
      n.useCallback(
        (j) => j.itemId === t.leftClipId || j.itemId === t.rightClipId || j.leftNeighborId === t.leftClipId || j.leftNeighborId === t.rightClipId || j.rightNeighborId === t.leftClipId || j.rightNeighborId === t.rightClipId ? {
          itemId: j.itemId,
          leftNeighborId: j.leftNeighborId,
          rightNeighborId: j.rightNeighborId,
          delta: j.slideDelta
        } : {
          itemId: null,
          leftNeighborId: null,
          rightNeighborId: null,
          delta: 0
        },
        [t.leftClipId, t.rightClipId]
      )
    )
  ), E = Po(
    Jt(
      n.useCallback(
        (j) => {
          const x = j.downstreamItemIds.has(t.leftClipId), se = j.downstreamItemIds.has(t.rightClipId);
          return j.trimmedItemId === t.leftClipId || j.trimmedItemId === t.rightClipId || x || se ? {
            trimmedItemId: j.trimmedItemId,
            delta: j.delta,
            leftDownstream: x,
            rightDownstream: se
          } : {
            trimmedItemId: null,
            delta: 0,
            leftDownstream: !1,
            rightDownstream: !1
          };
        },
        [t.leftClipId, t.rightClipId]
      )
    )
  ), K = vu(
    n.useCallback((j) => j.itemId === t.leftClipId && j.handle === "end" || j.itemId === t.rightClipId && j.handle === "start", [t.leftClipId, t.rightClipId])
  ), $ = As(
    Jt(
      n.useCallback((j) => {
        const x = j.updatesById[t.leftClipId];
        return x ? { from: x.from, durationInFrames: x.durationInFrames } : null;
      }, [t.leftClipId])
    )
  ), v = As(
    Jt(
      n.useCallback((j) => {
        const x = j.updatesById[t.rightClipId];
        return x ? { from: x.from, durationInFrames: x.durationInFrames } : null;
      }, [t.rightClipId])
    )
  ), Y = Fo(
    Jt(
      n.useCallback((j) => j.shiftedItemIds.has(t.leftClipId) ? { delta: j.delta, isShifted: !0 } : void 0, [t.leftClipId])
    )
  ), S = Fo(
    Jt(
      n.useCallback((j) => j.shiftedItemIds.has(t.rightClipId) ? { delta: j.delta, isShifted: !0 } : void 0, [t.rightClipId])
    )
  ), [J, A] = n.useState(null), p = n.useRef(null), u = n.useRef(null), L = n.useRef(!1);
  n.useEffect(() => {
    const j = () => {
      if (!p.current || !L.current) return;
      const se = Ts.current;
      p.current.style.transform = `translate(${se.x}px, ${se.y}px)`, u.current = requestAnimationFrame(j);
    }, x = _e.subscribe((se) => {
      const ne = se.dragState, oe = ne?.isDragging && ne.draggedItemIds.includes(t.leftClipId) && ne.draggedItemIds.includes(t.rightClipId), fe = L.current;
      L.current = !!oe, !fe && oe && (u.current = requestAnimationFrame(j)), fe && !oe && (u.current && (cancelAnimationFrame(u.current), u.current = null), p.current && (p.current.style.transform = ""));
    });
    return () => {
      x(), u.current && cancelAnimationFrame(u.current);
    };
  }, [t.leftClipId, t.rightClipId]);
  const I = n.useMemo(() => d ? _a(
    d.id,
    d.from,
    d.durationInFrames,
    {
      rolling: T,
      slide: H,
      ripple: {
        trimmedItemId: E.trimmedItemId,
        delta: E.delta,
        isDownstream: E.leftDownstream
      },
      linkedEdit: $,
      trackPush: Y
    }
  ) : null, [d, T, H, E, $, Y]), h = n.useMemo(() => b ? _a(
    b.id,
    b.from,
    b.durationInFrames,
    {
      rolling: T,
      slide: H,
      ripple: {
        trimmedItemId: E.trimmedItemId,
        delta: E.delta,
        isDownstream: E.rightDownstream
      },
      linkedEdit: v,
      trackPush: S
    }
  ) : null, [b, T, H, E, v, S]), V = n.useMemo(() => {
    if (!I || !h) return null;
    const j = Zi(
      I.from,
      I.durationInFrames,
      h.from,
      f,
      t.alignment
    ), x = Math.round(o(j.rightFrame)), se = Math.round(o(j.leftFrame)), ne = x - se, oe = I.from + I.durationInFrames, fe = Math.round(o(I.from)), je = Math.round(o(h.from + h.durationInFrames)), xe = Math.abs(oe - h.from) <= 1 ? h.from : oe, ve = Math.round(o(xe)), F = 32, _ = Math.max(ne, je - fe), ce = Math.min(Math.max(ne, F), _), ie = ne >= ce ? se : Math.round((se + x) / 2 - ce / 2), Te = Math.min(Math.max(ie, fe), je - ce);
    return {
      left: Te,
      width: ce,
      cutOffset: ve - Te
    };
  }, [I, h, o, f, t.alignment]), C = n.useMemo(() => (f / i).toFixed(1), [f, i]), D = Kt((j) => j.draggedTransition), G = Kt(
    n.useCallback((j) => j.preview?.existingTransitionId === t.id, [t.id])
  ), le = n.useCallback(
    (j) => {
      j.stopPropagation(), N || R(t.id);
    },
    [t.id, R, N]
  ), B = n.useCallback((j) => {
    j.preventDefault(), j.stopPropagation();
  }, []), ge = n.useCallback(
    (j) => {
      j.stopPropagation();
    },
    []
  ), z = n.useCallback((j, x) => {
    R(t.id), w(j, x);
  }, [w, R, t.id]), te = n.useCallback(() => {
    c(t.id);
  }, [t.id, c]), U = n.useCallback((j) => {
    if (!Di(j) || !D) return;
    j.preventDefault(), j.stopPropagation(), j.dataTransfer.dropEffect = "copy";
    const se = Kt.getState();
    se.setInvalidHint(null), se.setPreview({
      leftClipId: t.leftClipId,
      rightClipId: t.rightClipId,
      durationInFrames: t.durationInFrames,
      alignment: t.alignment ?? 0.5,
      existingTransitionId: t.id
    });
  }, [D, t]), De = n.useCallback(() => {
    const j = Kt.getState();
    j.preview?.existingTransitionId === t.id && j.clearPreview(), j.setInvalidHint(null);
  }, [t.id]), Ce = n.useCallback((j) => {
    const x = Di(j);
    x && (j.preventDefault(), j.stopPropagation(), m(t.id, {
      presentation: x.presentation,
      direction: x.direction
    }), Kt.getState().clearDrag());
  }, [t.id, m]);
  if (!V || !I || !h || K)
    return null;
  const ye = t.presentation?.charAt(0).toUpperCase() + t.presentation?.slice(1) || "Fade", O = J ? "ew-resize" : "pointer", W = Math.max(0, V.cutOffset - Ri / 2 - Cs), Ie = Math.min(
    V.width - Cs,
    V.cutOffset + Ri / 2
  ), re = Math.max(0, V.width - Cs - Ie);
  return /* @__PURE__ */ e.jsxs(On, { children: [
    /* @__PURE__ */ e.jsx(_n, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: p,
        className: Pe(
          "absolute inset-y-0 overflow-visible rounded-sm pointer-events-none",
          M && "ring-2 ring-inset ring-primary",
          G && "ring-2 ring-inset ring-amber-300",
          N && "ring-2 ring-inset ring-purple-400"
        ),
        style: {
          left: `${V.left}px`,
          width: `${V.width}px`,
          top: `calc(${St.timelineClipLabelRowHeight} + 1px)`,
          bottom: "1px",
          zIndex: N ? 50 : 10,
          opacity: s ? 0.3 : void 0,
          cursor: N ? "ew-resize" : void 0
        },
        title: `${ye} (${C}s)`,
        children: [
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: Pe(
                "pointer-events-none relative h-full w-full rounded-sm border bg-transparent",
                M ? "border-primary/90 shadow-[0_0_0_1px_rgba(91,93,241,0.22)]" : "border-slate-100/80 shadow-[0_0_0_1px_rgba(248,250,252,0.1)]"
              ),
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-slate-50/70" }),
                /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px bg-slate-900/15" })
              ]
            }
          ),
          W > 0 && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute inset-y-0 pointer-events-auto",
              style: {
                left: `${Cs}px`,
                width: `${W}px`,
                cursor: N ? "ew-resize" : O
              },
              onMouseDown: ge,
              onClick: le,
              onDragOver: U,
              onDragLeave: De,
              onDrop: Ce
            }
          ),
          re > 0 && /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute inset-y-0 pointer-events-auto",
              style: {
                left: `${Ie}px`,
                width: `${re}px`,
                cursor: N ? "ew-resize" : O
              },
              onMouseDown: ge,
              onClick: le,
              onDragOver: U,
              onDragLeave: De,
              onDrop: Ce
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize rounded-l pointer-events-auto",
              "data-transition-hit-zone": "left-edge",
              onMouseEnter: () => A("left"),
              onMouseLeave: () => {
                N || A(null);
              },
              onMouseDown: (j) => z(j, "left"),
              onMouseUp: B,
              onClick: B
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize rounded-r pointer-events-auto",
              "data-transition-hit-zone": "right-edge",
              onMouseEnter: () => A("right"),
              onMouseLeave: () => {
                N || A(null);
              },
              onMouseDown: (j) => z(j, "right"),
              onMouseUp: B,
              onClick: B
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ e.jsx(Tn, { children: /* @__PURE__ */ e.jsxs(it, { onClick: te, className: "text-destructive", children: [
      /* @__PURE__ */ e.jsx(sn, { className: "w-4 h-4 mr-2" }),
      "Remove Transition"
    ] }) })
  ] });
}), up = n.memo(function({
  trackId: t,
  trackHeight: s
}) {
  const { frameToPixels: o } = on(), i = he((w) => w.closeGapOnTrackAtPosition), c = Vn((w) => w.active), m = n.useCallback(() => {
    if (!c) return;
    const w = Math.round((c.gapStart + c.gapEnd) / 2);
    i(c.hoveredTrackId, w), Vn.getState().setActive(null);
  }, [c, i]);
  if (!c || !c.trackIds.includes(t)) return null;
  const d = o(c.gapStart), M = o(c.gapEnd) - d;
  if (M < 14) return null;
  const R = Math.min(26, Math.max(16, s - 10)), N = Math.min(R, Math.max(14, M - 4));
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center rounded-sm border border-dashed border-destructive/50 bg-destructive/10",
      style: {
        left: `${d}px`,
        width: `${M}px`
      },
      children: /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Ripple delete gap",
          title: "Ripple delete gap",
          className: "pointer-events-auto flex items-center justify-center rounded bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
          style: {
            width: N,
            height: R
          },
          onMouseDown: (w) => {
            w.stopPropagation();
          },
          onContextMenu: (w) => {
            w.stopPropagation(), w.preventDefault();
          },
          onClick: (w) => {
            w.stopPropagation(), w.preventDefault(), m();
          },
          children: /* @__PURE__ */ e.jsx(sn, { size: Math.max(10, Math.min(14, R - 8)) })
        }
      )
    }
  );
}), Ei = an("TimelineTrack");
function mp(r) {
  return r.some((t) => t.type === "audio") ? "border-timeline-audio/60 bg-timeline-audio/10" : r.some((t) => t.type === "video") ? "border-timeline-video/60 bg-timeline-video/10" : r.some((t) => t.type === "text") ? "border-timeline-text/60 bg-timeline-text/10" : r.some((t) => t.type === "shape") ? "border-timeline-shape/60 bg-timeline-shape/10" : r.some((t) => t.type === "adjustment") ? "border-slate-400/60 bg-slate-400/10" : r.some((t) => t.type === "image") ? "border-timeline-image/60 bg-timeline-image/10" : r.some((t) => t.type === "composition") ? "border-violet-400/60 bg-violet-600/10" : r.some((t) => t.type === "external-file") ? "border-primary/60 bg-primary/10" : "border-primary/50 bg-primary/10";
}
function So(r) {
  const t = "absolute inset-y-0 rounded border-2 border-dashed pointer-events-none z-20 flex items-center px-2";
  return r === "composition" ? `${t} border-violet-400 bg-violet-600/20` : r === "external-file" ? `${t} border-primary bg-primary/15` : r === "video" ? `${t} border-timeline-video bg-timeline-video/20` : r === "audio" ? `${t} border-timeline-audio bg-timeline-audio/20` : r === "text" ? `${t} border-timeline-text bg-timeline-text/20` : r === "shape" ? `${t} border-timeline-shape bg-timeline-shape/20` : r === "adjustment" ? `${t} border-slate-400 bg-slate-400/15` : `${t} border-timeline-image bg-timeline-image/20`;
}
function Pi(r) {
  return typeof r == "string" && r.trim().length > 0;
}
function Wl(r) {
  return r === "video" || r === "audio" || r === "image";
}
function Xr(r, t, s, o) {
  if (!o || kn(t) !== "audio" || !s)
    return !1;
  const i = s.getBoundingClientRect();
  return i.height <= 0 ? !1 : (r - i.top) / i.height >= 1 - Cu;
}
function fp(r) {
  const t = Array.from(r.items).filter((s) => s.kind === "file");
  return t.length === 0 ? !1 : t.every((s) => typeof s.type == "string" && s.type.startsWith("audio/"));
}
function pp(r) {
  if (!r || typeof r != "object") return !1;
  const t = r;
  return Pi(t.mediaId) && Wl(t.mediaType) && Pi(t.fileName) && typeof t.duration == "number" && Number.isFinite(t.duration);
}
function hp(r, t) {
  return r.track === t.track && r.timelineWidth === t.timelineWidth;
}
const gp = n.memo(function({ track: t }) {
  const [s, o] = n.useState(!1), [i, c] = n.useState(!1), [m, d] = n.useState(null), [b, M] = n.useState(0), R = n.useRef(null), N = n.useRef(null), w = n.useRef(0), f = n.useRef(null), T = n.useRef(null), H = n.useRef(null), E = n.useRef(0), K = n.useRef(0), $ = n.useRef(0), v = n.useRef(!1), Y = he((F) => {
    const _ = yu(F.tracks).find((ie) => ie.id === t.id);
    if (!_) return t.locked;
    if (_.locked) return !0;
    const ce = _.kind;
    return ce === "audio" ? _.muted : ce === "video" ? _.visible === !1 : _.visible === !1 || _.muted;
  }), { visibleItems: S, visibleTransitions: J } = wu(t.id), A = lt((F) => (F.itemsByTrackId[t.id]?.length ?? 0) > 0), p = he((F) => F.fps), u = he((F) => F.closeGapOnTrackAtPosition), L = yr((F) => F.ghostPreviews), I = yr((F) => F.setGhostPreviews), h = yr((F) => F.clearGhostPreviews), V = me((F) => F.mediaItems), { pixelsToFrame: C, frameToPixels: D } = on(), G = n.useMemo(
    () => L.filter((F) => F.targetTrackId === t.id),
    [L, t.id]
  ), le = n.useMemo(
    () => L.filter((F) => F.previewAboveTrackId === t.id),
    [L, t.id]
  ), B = n.useMemo(
    () => L.filter((F) => F.previewBelowTrackId === t.id),
    [L, t.id]
  ), ge = L.length > 0 && L.every(
    (F) => F.targetTrackId !== t.id && F.previewBelowTrackId !== t.id && F.previewAboveTrackId !== t.id
  ), z = n.useMemo(
    () => mp(G),
    [G]
  ), te = n.useCallback((F) => {
    const _ = Oo(R.current);
    if (!_)
      return null;
    const ce = _.scrollLeft || 0, ie = _.getBoundingClientRect(), Te = F.clientX - ie.left + ce;
    return C(Te);
  }, [C]), U = n.useCallback((F, _, ce) => {
    const { plannedItems: ie } = za({
      entries: F.map((Se) => ({
        payload: Se,
        label: Se.label,
        mediaType: Se.mediaType,
        durationInFrames: qr(
          { duration: Se.duration ?? 0 },
          Se.mediaType,
          p
        ),
        hasLinkedAudio: Se.hasLinkedAudio
      })),
      dropFrame: _,
      tracks: he.getState().tracks,
      existingItems: he.getState().items,
      dropTargetTrackId: t.id,
      preferNewAudioLane: ce
    }), Te = he.getState(), ze = new Set(Te.tracks.map((Se) => Se.id));
    return Ha({
      plannedItems: ie,
      frameToPixels: D,
      existingTrackIds: ze,
      dropTargetTrackId: t.id
    });
  }, [p, D, t.id]), De = n.useCallback((F, _) => {
    const ce = p * 3, ie = Os(
      Math.max(0, F),
      ce,
      t.id,
      he.getState().items
    );
    return ie === null ? [] : [{
      left: D(ie),
      width: D(ce),
      label: _ > 1 ? `${_} files` : "Drop media",
      type: "external-file",
      targetTrackId: t.id
    }];
  }, [p, D, t.id]), Ce = n.useCallback((F, _) => {
    if (!Ns(F))
      return [];
    const ce = he.getState(), ie = _o(p), Te = Iu({
      tracks: ce.tracks,
      items: ce.items,
      itemType: F.itemType,
      preferredTrackId: t.id,
      allowPreferredTrackFallback: !1
    });
    if (!Te)
      return [];
    const ze = Os(
      Math.max(0, _),
      ie,
      Te.id,
      ce.items
    );
    return ze === null ? [] : [{
      left: D(ze),
      width: D(ie),
      label: F.label,
      type: F.itemType,
      targetTrackId: Te.id
    }];
  }, [p, D, t.id]), ye = n.useCallback(() => {
    f.current = null, T.current = null, H.current = null, E.current += 1;
  }, []), O = n.useCallback((F) => {
    const _ = `${F.items.length}:${Array.from(F.items).map((Te) => `${Te.kind}:${Te.type || "unknown"}`).join("|")}`;
    if (T.current === _ && f.current || T.current === _ && H.current)
      return;
    ye(), T.current = _;
    const ce = E.current, ie = (async () => {
      const { supported: Te, entries: ze } = await _s(F);
      if (!Te || ce !== E.current)
        return;
      const Se = ze.flatMap((Ae) => Ae.mediaType === "video" || Ae.mediaType === "audio" || Ae.mediaType === "image" ? [{
        label: Ae.file.name,
        mediaType: Ae.mediaType
      }] : []);
      if (f.current = Se, H.current = null, Se.length > 0) {
        const Ae = Se.every((et) => et.mediaType === "audio"), We = Xr(
          $.current,
          t,
          R.current,
          Ae
        );
        v.current = We, I(
          U(Se, K.current, We)
        );
      }
    })().catch((Te) => {
      ce === E.current && (H.current = null, Ei.warn("Failed to build external drag preview:", Te));
    });
    H.current = ie;
  }, [U, ye, I, t]), W = lt((F) => F.itemsByTrackId[t.id]), Ie = n.useMemo(() => W?.map((F) => F.id) ?? [], [W]), re = _e(
    n.useCallback(
      (F) => F.dragState?.isDragging && F.dragState.draggedItemIds.some((_) => Ie.includes(_)),
      [Ie]
    )
  ), j = n.useCallback((F) => {
    const _ = lt.getState().itemsByTrackId[t.id];
    if (!_ || _.length === 0) return !1;
    const ce = _.toSorted((Te, ze) => Te.from - ze.from);
    for (const Te of ce)
      if (F >= Te.from && F < Te.from + Te.durationInFrames)
        return !1;
    return ce.some((Te) => Te.from > F);
  }, [t.id]), x = n.useCallback((F) => {
    if (F.target.closest("[data-item-id]"))
      return;
    const ce = Oo(R.current);
    if (!ce) return;
    const ie = ce.scrollLeft || 0, Te = ce.getBoundingClientRect(), ze = F.clientX - Te.left + ie, Se = C(ze);
    j(Se) ? d(Se) : (F.preventDefault(), d(null));
  }, [C, j]), se = n.useCallback(() => {
    m !== null && (u(t.id, m), d(null));
  }, [m, u, t.id]), ne = n.useCallback((F) => {
    F.button === 2 && M((_) => _ + 1);
  }, []), oe = n.useCallback((F) => {
    w.current = F.clientX, N.current === null && (N.current = requestAnimationFrame(() => {
      N.current = null;
      const _ = R.current?.getBoundingClientRect();
      if (!_) return;
      const ce = w.current - _.left, ie = lt.getState().itemsByTrackId[t.id];
      if (!ie || ie.length === 0) {
        Vn.getState().clearForTrack(t.id);
        return;
      }
      const Te = [...ie].sort((Ne, Fe) => Ne.from - Fe.from), ze = 90, Se = 14, Ae = { current: null }, We = (Ne, Fe, qe) => {
        if (Fe <= Ne) return;
        const nt = D(Ne), Je = D(Fe);
        if (Je - nt < Se) return;
        const pt = ce < nt ? nt - ce : ce > Je ? ce - Je : 0;
        pt > ze || (!Ae.current || pt < Ae.current.distance) && (Ae.current = { gapStart: Ne, gapEnd: Fe, distance: pt, rightItemId: qe });
      }, et = Te[0];
      et.from > 0 && We(0, et.from, et.id);
      for (let Ne = 0; Ne < Te.length - 1; Ne++) {
        const Fe = Te[Ne], qe = Te[Ne + 1];
        We(Fe.from + Fe.durationInFrames, qe.from, qe.id);
      }
      const Ye = Ae.current;
      if (!Ye) {
        Vn.getState().clearForTrack(t.id);
        return;
      }
      const Xe = [], vt = lt.getState().items, ft = Do(vt, Ye.rightItemId), ue = lt.getState().itemsByTrackId;
      for (const Ne of ft) {
        if (Ne.id === Ye.rightItemId || Ne.trackId === t.id || Ne.from !== Ye.gapEnd) continue;
        const Fe = ue[Ne.trackId];
        if (!Fe) continue;
        Fe.some((nt) => {
          const Je = nt.from + nt.durationInFrames;
          return nt.from < Ye.gapEnd && Je > Ye.gapStart;
        }) || Xe.push(Ne.trackId);
      }
      Vn.getState().setActive({
        trackIds: [t.id, ...Xe],
        gapStart: Ye.gapStart,
        gapEnd: Ye.gapEnd,
        hoveredTrackId: t.id
      });
    }));
  }, [t.id, D]), fe = n.useCallback(() => {
    N.current !== null && (cancelAnimationFrame(N.current), N.current = null), Vn.getState().clearForTrack(t.id);
  }, [t.id]);
  n.useEffect(() => () => {
    N.current !== null && (cancelAnimationFrame(N.current), N.current = null), Vn.getState().clearForTrack(t.id);
  }, [t.id]);
  const je = (F) => {
    if (Y) {
      v.current = !1, F.preventDefault(), F.dataTransfer.dropEffect = "none";
      return;
    }
    const _ = xr(), ce = !_ && F.dataTransfer.types.includes("Files");
    if (!_ && !ce) {
      v.current = !1, c(!1), h();
      return;
    }
    F.preventDefault(), F.dataTransfer.dropEffect = "copy", o(!0), c(ce), $.current = F.clientY;
    const ie = te(F);
    if (ie === null) {
      v.current = !1, h();
      return;
    }
    if (K.current = ie, ce) {
      if (f.current && f.current.length > 0) {
        const ze = f.current.every((We) => We.mediaType === "audio"), Se = Xr(F.clientY, t, R.current, ze);
        v.current = Se;
        const Ae = U(f.current, ie, Se);
        Ae.length === 0 && (F.dataTransfer.dropEffect = "none", o(!1), c(!1)), I(Ae);
      } else {
        const ze = Array.from(F.dataTransfer.items).filter((et) => et.kind === "file").length, Se = fp(F.dataTransfer), Ae = Xr(F.clientY, t, R.current, Se);
        v.current = Ae;
        const We = Se ? U(
          [{ label: ze > 1 ? `${ze} files` : "Drop media", mediaType: "audio", duration: 3 }],
          ie,
          Ae
        ) : De(ie, Math.max(1, ze));
        I(We), O(F.dataTransfer);
      }
      return;
    }
    if (!_) {
      v.current = !1, h();
      return;
    }
    const Te = [];
    if (_.type === "composition") {
      const ze = Gt.getState().activeCompositionId;
      if (Hs({
        parentCompositionId: ze,
        insertedCompositionId: _.compositionId,
        compositionById: $t.getState().compositionById
      })) {
        v.current = !1, F.dataTransfer.dropEffect = "none", h();
        return;
      }
      v.current = !1;
      const Se = he.getState(), Ae = $t.getState().compositionById, We = Ae[_.compositionId];
      if (!We) {
        F.dataTransfer.dropEffect = "none", h();
        return;
      }
      const et = zo({ composition: We, compositionById: Ae }), { plannedItems: Ye } = za({
        entries: [{
          payload: _,
          label: _.name,
          mediaType: "video",
          durationInFrames: _.durationInFrames,
          hasLinkedAudio: et
        }],
        dropFrame: ie,
        tracks: Se.tracks,
        existingItems: Se.items,
        dropTargetTrackId: t.id
      }), Xe = Ye[0];
      if (!Xe) {
        F.dataTransfer.dropEffect = "none", o(!1), h();
        return;
      }
      const vt = new Set(Se.tracks.map((ft) => ft.id));
      Te.push(
        ...Ha({
          plannedItems: [Xe],
          frameToPixels: D,
          existingTrackIds: vt,
          dropTargetTrackId: t.id
        }).map((ft) => ({
          ...ft,
          label: _.name,
          type: ft.type === "video" ? "composition" : ft.type
        }))
      ), I(Te);
      return;
    }
    if (_.type === "timeline-template") {
      v.current = !1;
      const ze = Ce(_, ie);
      ze.length === 0 && (F.dataTransfer.dropEffect = "none", o(!1)), I(ze);
      return;
    }
    if (_.type === "media-items" && _.items) {
      const ze = Array.isArray(_.items) ? _.items : [], Se = ze.filter(pp);
      Se.length !== ze.length && Ei.warn("Skipping invalid media-items preview payload entries", {
        invalidCount: ze.length - Se.length
      });
      const Ae = new Map(V.map((Xe) => [Xe.id, Xe])), We = Se.length > 0 && Se.every((Xe) => Xe.mediaType === "audio"), et = Xr(F.clientY, t, R.current, We);
      v.current = et;
      const Ye = U(
        Se.map((Xe) => ({
          label: Xe.fileName,
          mediaType: Xe.mediaType,
          duration: Xe.duration,
          hasLinkedAudio: Xe.mediaType === "video" && !!Ae.get(Xe.mediaId)?.audioCodec
        })),
        ie,
        et
      );
      Ye.length === 0 && (F.dataTransfer.dropEffect = "none", o(!1)), Te.push(...Ye), I(Te);
      return;
    }
    if (_.type === "media-item" && _.mediaId && _.mediaType && _.fileName) {
      const ze = V.find((et) => et.id === _.mediaId);
      if (!ze || !Wl(_.mediaType)) {
        h();
        return;
      }
      const Se = qr(ze, _.mediaType, p), Ae = Xr(
        F.clientY,
        t,
        R.current,
        _.mediaType === "audio"
      );
      v.current = Ae;
      const We = U([
        {
          label: _.fileName,
          mediaType: _.mediaType,
          duration: Se / p,
          hasLinkedAudio: _.mediaType === "video" && !!ze.audioCodec
        }
      ], ie, Ae);
      We.length === 0 && (F.dataTransfer.dropEffect = "none", o(!1)), Te.push(...We);
    }
    I(Te);
  }, xe = (F) => {
    F.preventDefault(), v.current = !1, o(!1), c(!1), h(), ye();
  }, ve = async (F) => {
    F.preventDefault();
    const _ = v.current;
    if (v.current = !1, o(!1), c(!1), h(), ye(), Y)
      return;
    const ce = te(F);
    ce !== null && await zs({
      dataTransfer: F.dataTransfer,
      dropFrame: ce,
      dropTargetTrackId: t.id,
      preferNewAudioLane: _
    });
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex min-w-0 flex-col",
      onDragOver: je,
      onDragLeave: xe,
      onDrop: ve,
      children: [
        !Y && le.length > 0 && /* @__PURE__ */ e.jsxs(
          "div",
          {
            "data-ephemeral-video-lane": !0,
            className: "relative",
            style: {
              height: `${t.height}px`,
              contain: "layout style"
            },
            children: [
              /* @__PURE__ */ e.jsx("div", { className: "pointer-events-none absolute inset-0 z-10 rounded border border-dashed border-timeline-video/60 bg-timeline-video/10" }),
              le.map((F, _) => /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: So(F.type),
                  style: {
                    left: `${F.left}px`,
                    width: `${F.width}px`
                  },
                  children: /* @__PURE__ */ e.jsx("span", { className: "text-xs text-foreground/70 truncate", children: F.label })
                },
                `above-${_}`
              ))
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(On, { modal: !1, children: [
          /* @__PURE__ */ e.jsx(_n, { asChild: !0, disabled: t.locked, children: /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: R,
              "data-track-id": t.id,
              className: "relative",
              style: {
                height: `${t.height}px`,
                // CSS containment tells browser this element's layout is independent
                // This significantly improves scroll/paint performance for large timelines
                contain: "layout style",
                // Elevate track above others when it contains a dragging clip
                zIndex: re ? 100 : void 0
              },
              onMouseDown: ne,
              onContextMenu: x,
              onMouseMove: t.locked ? void 0 : oe,
              onMouseLeave: t.locked ? void 0 : fe,
              children: [
                s && !Y && !i && G.length === 0 && B.length === 0 && le.length === 0 && !ge && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 pointer-events-none z-10 rounded border border-dashed border-primary/50 bg-primary/10" }),
                !Y && G.length > 0 && /* @__PURE__ */ e.jsx("div", { className: `absolute inset-0 pointer-events-none z-10 rounded border border-dashed ${z}` }),
                !Y && G.map((F, _) => /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: So(F.type),
                    style: {
                      left: `${F.left}px`,
                      width: `${F.width}px`
                    },
                    children: /* @__PURE__ */ e.jsx("span", { className: "text-xs text-foreground/70 truncate", children: F.label })
                  },
                  _
                )),
                S.map((F) => /* @__PURE__ */ e.jsx(cp, { item: F, timelineDuration: 30, trackLocked: t.locked, trackHidden: !t.visible }, F.id)),
                t.kind !== "audio" && J.map((F) => /* @__PURE__ */ e.jsx(dp, { transition: F, trackHidden: !t.visible }, F.id)),
                !t.locked && !s && !i && !re && G.length === 0 && B.length === 0 && le.length === 0 && /* @__PURE__ */ e.jsx(up, { trackId: t.id, trackHeight: t.height }),
                t.locked && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 pointer-events-none flex items-center justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "text-xs text-muted-foreground/50 font-mono", children: "LOCKED" }) })
              ]
            }
          ) }),
          A && m !== null && /* @__PURE__ */ e.jsx(Tn, { children: /* @__PURE__ */ e.jsx(it, { onClick: se, children: "Ripple Delete" }) })
        ] }, b),
        !Y && B.length > 0 && /* @__PURE__ */ e.jsxs(
          "div",
          {
            "data-ephemeral-audio-lane": !0,
            className: "relative",
            style: {
              height: `${t.height}px`,
              contain: "layout style"
            },
            children: [
              /* @__PURE__ */ e.jsx("div", { className: "pointer-events-none absolute inset-0 z-10 rounded border border-dashed border-timeline-audio/60 bg-timeline-audio/10" }),
              B.map((F, _) => /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: So(F.type),
                  style: {
                    left: `${F.left}px`,
                    width: `${F.width}px`
                  },
                  children: /* @__PURE__ */ e.jsx("span", { className: "text-xs text-foreground/70 truncate", children: F.label })
                },
                `below-${_}`
              ))
            ]
          }
        )
      ]
    }
  );
}, hp);
function xp({ activeSnapTarget: r }) {
  const { frameToPixels: t } = on();
  if (!r)
    return null;
  const s = r.type === "item-start" || r.type === "item-end", o = r.type === "playhead";
  if (!s && !o)
    return null;
  const i = t(r.frame);
  return /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 pointer-events-none", style: { zIndex: 1e4 }, children: /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute top-0 bottom-0 w-px",
      style: {
        left: `${i}px`,
        backgroundColor: "var(--color-timeline-snap)",
        opacity: 0.9,
        boxShadow: "0 0 4px var(--color-timeline-snap)"
      }
    }
  ) });
}
const fn = an("TimelineMediaDropZone"), bp = 3;
function Fi(r) {
  return typeof r == "string" && r.trim().length > 0;
}
function Es(r) {
  return r === "video" || r === "audio" || r === "image";
}
function Li(r) {
  if (!r || typeof r != "object") return !1;
  const t = r;
  return Fi(t.mediaId) && Es(t.mediaType) && Fi(t.fileName) && typeof t.duration == "number" && Number.isFinite(t.duration);
}
const Ai = n.memo(function({
  height: t,
  zone: s,
  anchorTrackId: o,
  placement: i = "bottom"
}) {
  const [c, m] = n.useState(!1), [, d] = n.useState(!1), b = n.useRef(null), M = n.useRef(null), R = n.useRef(null), N = n.useRef(null), w = n.useRef(0), f = n.useRef(0), T = n.useRef(0), H = n.useRef(null), E = he((O) => O.addItem), K = he((O) => O.addItems), $ = he((O) => O.fps), v = Gr((O) => O.ghostPreviews), Y = Gr((O) => O.setGhostPreviews), S = Gr((O) => O.clearGhostPreviews), J = Gr((O) => O.setTopVideoNewLaneDropActive), A = me((O) => O.mediaItems), p = me((O) => O.importHandlesForPlacement), { pixelsToFrame: u, frameToPixels: L } = on(), I = n.useMemo(
    () => v.filter((O) => O.targetZone === s),
    [v, s]
  ), h = n.useCallback((O) => {
    const W = Oo(b.current);
    if (!W)
      return null;
    const Ie = W.scrollLeft || 0, re = W.getBoundingClientRect(), j = O.clientX - re.left + Ie;
    return u(j);
  }, [u]), V = n.useCallback((O) => {
    const W = O.find((x) => x.id === o)?.height ?? 64, { plannedItems: Ie, tracks: re } = Hr({
      entries: [{
        payload: null,
        label: "__zone__",
        mediaType: "image",
        durationInFrames: 1
      }],
      dropFrame: 0,
      tracks: O,
      existingItems: [],
      anchorTrackId: o,
      zone: "video",
      preferredTrackHeight: W
    }), j = Ie[0]?.placements[0]?.trackId;
    return j ? { trackId: j, tracks: re } : null;
  }, [o]), C = n.useCallback(() => {
    const O = Zs.getState().currentProject;
    return {
      width: O?.metadata.width ?? 1920,
      height: O?.metadata.height ?? 1080
    };
  }, []), D = n.useCallback(async (O, W) => {
    const Ie = he.getState().tracks, re = Ie.find((ne) => ne.id === o)?.height ?? 64, { plannedItems: j, tracks: x } = Hr({
      entries: O.map((ne) => ({
        payload: ne,
        label: ne.label,
        mediaType: ne.mediaType,
        durationInFrames: qr(ne.media, ne.mediaType, $),
        hasLinkedAudio: ne.mediaType === "video" && !!ne.media.audioCodec
      })),
      dropFrame: W,
      tracks: Ie,
      existingItems: he.getState().items,
      anchorTrackId: o,
      zone: s,
      preferredTrackHeight: re
    });
    return j.length === 0 ? { items: [], tracks: x } : {
      items: (await Su(
        j,
        bp,
        async (ne) => {
          const { entry: oe, placements: fe } = ne, je = oe.payload, xe = oe.mediaType === "video" || oe.mediaType === "image", [ve, F] = await Promise.all([
            jr(je.mediaId),
            xe ? Wn.getThumbnailBlobUrl(je.mediaId) : Promise.resolve(null)
          ]);
          if (!ve)
            return fn.error("Failed to get media blob URL for", oe.label), null;
          const _ = fe.find((Te) => Te.mediaType !== "audio") ?? fe[0], ce = fe.find((Te) => Te.mediaType === "audio"), ie = C();
          return ju({
            media: je.media,
            mediaId: je.mediaId,
            mediaType: oe.mediaType,
            label: oe.label,
            timelineFps: $,
            blobUrl: ve,
            thumbnailUrl: F,
            canvasWidth: ie.width,
            canvasHeight: ie.height,
            placement: {
              primary: {
                trackId: _.trackId,
                from: _.from,
                durationInFrames: _.durationInFrames
              },
              linkedAudio: ce ? {
                trackId: ce.trackId,
                from: ce.from,
                durationInFrames: ce.durationInFrames
              } : void 0
            },
            linkVideoAudio: ne.linkVideoAudio
          });
        }
      )).flatMap((ne) => ne ?? []),
      tracks: x
    };
  }, [o, $, C, s]), G = n.useCallback((O, W) => {
    const Ie = he.getState().tracks, re = Ie.find((x) => x.id === o)?.height ?? 64, { plannedItems: j } = Hr({
      entries: O.map((x) => ({
        payload: x,
        label: x.label,
        mediaType: x.mediaType,
        durationInFrames: qr(
          { duration: x.duration ?? 0 },
          x.mediaType,
          $
        ),
        hasLinkedAudio: x.hasLinkedAudio
      })),
      dropFrame: W,
      tracks: Ie,
      existingItems: he.getState().items,
      anchorTrackId: o,
      zone: s,
      preferredTrackHeight: re
    });
    return $a({
      plannedItems: j,
      frameToPixels: L
    });
  }, [o, $, L, s]), le = n.useCallback((O, W) => {
    const Ie = G([
      {
        label: W > 1 ? `${W} files` : "Drop media",
        mediaType: s === "audio" ? "audio" : "image",
        duration: 3
      }
    ], O);
    return Ie.length > 0 ? [{ ...Ie[0], type: "external-file", targetZone: s }] : [];
  }, [G, s]), B = n.useCallback((O, W) => {
    if (!Ns(O) || s !== "video")
      return [];
    const Ie = he.getState().tracks, re = V(Ie);
    if (!re)
      return [];
    const j = _o($), x = Os(
      Math.max(0, W),
      j,
      re.trackId,
      he.getState().items
    );
    return x === null ? [] : [{
      left: L(x),
      width: L(j),
      label: O.label,
      type: O.itemType,
      targetZone: "video"
    }];
  }, [V, $, L, s]), ge = n.useCallback((O, W) => {
    if (!Ns(O) || s !== "video")
      return null;
    const Ie = he.getState().tracks, re = V(Ie);
    if (!re)
      return null;
    const j = _o($), x = Os(
      Math.max(0, W),
      j,
      re.trackId,
      he.getState().items
    );
    if (x === null)
      return null;
    const se = C();
    return {
      item: ku({
        template: O,
        placement: {
          trackId: re.trackId,
          from: x,
          durationInFrames: j,
          canvasWidth: se.width,
          canvasHeight: se.height
        }
      }),
      tracks: re.tracks
    };
  }, [V, $, C, s]);
  n.useEffect(() => {
    if (!(i !== "top" || s !== "video"))
      return J(c), () => {
        J(!1);
      };
  }, [i, s, c, J]), n.useEffect(() => () => {
    T.current !== 0 && cancelAnimationFrame(T.current);
  }, []);
  const z = n.useCallback(() => {
    M.current = null, R.current = null, N.current = null, w.current += 1;
  }, []), te = n.useCallback((O) => {
    const W = `${O.items.length}:${Array.from(O.items).map((j) => `${j.kind}:${j.type || "unknown"}`).join("|")}`;
    if (R.current === W && M.current || R.current === W && N.current)
      return;
    z(), R.current = W;
    const Ie = w.current, re = (async () => {
      const { supported: j, entries: x } = await _s(O);
      if (!j || Ie !== w.current)
        return;
      const se = x.flatMap((ne) => ne.mediaType === "video" || ne.mediaType === "audio" || ne.mediaType === "image" ? [{
        label: ne.file.name,
        mediaType: ne.mediaType
      }] : []);
      M.current = se, N.current = null, se.length > 0 && Y(G(se, f.current));
    })().catch((j) => {
      Ie === w.current && (N.current = null, fn.warn("Failed to build external drag preview:", j));
    });
    N.current = re;
  }, [G, z, Y]), U = n.useCallback((O) => {
    const W = xr(), Ie = !W && O.dataTransfer.types.includes("Files");
    if (!W && !Ie) {
      d(!1), m(!1), S();
      return;
    }
    O.preventDefault(), O.dataTransfer.dropEffect = "copy", m(!0), d(Ie);
    const re = h(O);
    if (re === null) {
      S();
      return;
    }
    f.current = re;
    let j = 0;
    if (Ie && (!M.current || M.current.length === 0) && (j = Array.from(O.dataTransfer.items).filter((x) => x.kind === "file").length, te(O.dataTransfer)), W?.type === "composition") {
      const x = Gt.getState().activeCompositionId;
      if (s !== "video" || Hs({
        parentCompositionId: x,
        insertedCompositionId: W.compositionId,
        compositionById: $t.getState().compositionById
      })) {
        O.dataTransfer.dropEffect = "none", m(!1), S();
        return;
      }
      if (!$t.getState().compositionById[W.compositionId]) {
        O.dataTransfer.dropEffect = "none", m(!1), S();
        return;
      }
    }
    if (W?.type === "timeline-template" && s !== "video") {
      O.dataTransfer.dropEffect = "none", S();
      return;
    }
    re !== H.current && (T.current !== 0 && cancelAnimationFrame(T.current), T.current = requestAnimationFrame(() => {
      if (T.current = 0, H.current = re, Ie) {
        if (M.current && M.current.length > 0) {
          const x = G(M.current, re);
          x.length === 0 && (m(!1), d(!1)), Y(x);
        } else
          Y(le(re, Math.max(1, j)));
        return;
      }
      if (!W) {
        S();
        return;
      }
      if (W.type === "composition") {
        const x = $t.getState().compositionById, se = x[W.compositionId];
        if (!se) {
          m(!1), S();
          return;
        }
        const ne = he.getState().tracks, oe = ne.find((ve) => ve.id === o)?.height ?? 64, { plannedItems: fe } = Hr({
          entries: [{
            payload: W,
            label: W.name,
            mediaType: "video",
            durationInFrames: W.durationInFrames,
            hasLinkedAudio: zo({ composition: se, compositionById: x })
          }],
          dropFrame: re,
          tracks: ne,
          existingItems: he.getState().items,
          anchorTrackId: o,
          zone: s,
          preferredTrackHeight: oe
        }), je = fe[0], xe = je ? $a({
          plannedItems: [je],
          frameToPixels: L
        }).map((ve) => ({
          ...ve,
          label: W.name,
          type: ve.type === "video" ? "composition" : ve.type
        })) : [];
        xe.length === 0 && m(!1), Y(xe);
        return;
      }
      if (W.type === "timeline-template") {
        const x = B(W, re);
        x.length === 0 && m(!1), Y(x);
        return;
      }
      if (W.type === "media-items" && W.items) {
        const x = Array.isArray(W.items) ? W.items : [], se = x.filter(Li);
        se.length !== x.length && fn.warn("Skipping invalid media-items preview payload entries", {
          invalidCount: x.length - se.length
        });
        const ne = new Map(A.map((fe) => [fe.id, fe])), oe = G(
          se.map((fe) => ({
            label: fe.fileName,
            mediaType: fe.mediaType,
            duration: fe.duration,
            hasLinkedAudio: fe.mediaType === "video" && !!ne.get(fe.mediaId)?.audioCodec
          })),
          re
        );
        oe.length === 0 && m(!1), Y(oe);
        return;
      }
      if (W.type === "media-item" && W.mediaId && W.mediaType && W.fileName) {
        const x = A.find((oe) => oe.id === W.mediaId);
        if (!x || !Es(W.mediaType)) {
          S();
          return;
        }
        const se = qr(x, W.mediaType, $), ne = G([
          {
            label: W.fileName,
            mediaType: W.mediaType,
            duration: se / $,
            hasLinkedAudio: W.mediaType === "video" && !!x.audioCodec
          }
        ], re);
        ne.length === 0 && m(!1), Y(ne);
        return;
      }
      S();
    }));
  }, [
    o,
    le,
    B,
    G,
    S,
    $,
    L,
    h,
    A,
    te,
    Y,
    s
  ]), De = n.useCallback((O) => {
    O.preventDefault(), T.current !== 0 && (cancelAnimationFrame(T.current), T.current = 0), H.current = null, m(!1), d(!1), S(), z();
  }, [z, S]), Ce = n.useCallback(async (O) => {
    O.preventDefault(), T.current !== 0 && (cancelAnimationFrame(T.current), T.current = 0), H.current = null, m(!1), d(!1), S(), z();
    const W = h(O);
    if (W === null)
      return;
    const Ie = O.dataTransfer.getData("application/json");
    if (Ie)
      try {
        const fe = JSON.parse(Ie);
        if (fe.type === "composition") {
          const ve = Gt.getState().activeCompositionId;
          if (s !== "video" || Hs({
            parentCompositionId: ve,
            insertedCompositionId: fe.compositionId,
            compositionById: $t.getState().compositionById
          }))
            return;
          const { compositionId: F, name: _, durationInFrames: ce } = fe, ie = he.getState().tracks, Te = ie.find((Xe) => Xe.id === o)?.height ?? 64, ze = $t.getState().compositionById, Se = ze[F];
          if (!Se) {
            fn.warn("Cannot drop composition into new track zone: compound clip definition not found");
            return;
          }
          const { plannedItems: Ae, tracks: We } = Hr({
            entries: [{
              payload: fe,
              label: _,
              mediaType: "video",
              durationInFrames: ce,
              hasLinkedAudio: zo({ composition: Se, compositionById: ze })
            }],
            dropFrame: W,
            tracks: ie,
            existingItems: he.getState().items,
            anchorTrackId: o,
            zone: s,
            preferredTrackHeight: Te
          }), et = Ae[0];
          if (!et) {
            fn.warn("Cannot drop composition into new track zone: no available space");
            return;
          }
          We !== ie && he.getState().setTracks(We);
          const Ye = Tu({
            compositionId: F,
            composition: Se,
            label: _,
            placements: et.placements
          });
          if (Ye.length === 0) {
            fn.warn("Cannot drop composition into new track zone: failed to build compound clip wrappers");
            return;
          }
          K(Ye);
          return;
        }
        if (Ns(fe)) {
          const ve = ge(fe, W);
          if (!ve) {
            jt.error("Unable to add dropped timeline item");
            return;
          }
          ve.tracks !== he.getState().tracks && he.getState().setTracks(ve.tracks), E(ve.item);
          return;
        }
        let je = [];
        if (fe.type === "media-items") {
          const ve = Array.isArray(fe.items) ? fe.items : [], F = ve.filter(Li);
          F.length !== ve.length && fn.warn("Skipping invalid media-items payload entries", {
            invalidCount: ve.length - F.length
          });
          const _ = new Map(A.map((ce) => [ce.id, ce]));
          je = F.flatMap((ce) => {
            const ie = _.get(ce.mediaId);
            return ie ? [{
              media: ie,
              mediaId: ce.mediaId,
              mediaType: ce.mediaType,
              label: ce.fileName
            }] : (fn.error("Media not found:", ce.mediaId), []);
          });
        } else if (fe.type === "media-item" && fe.mediaId && fe.mediaType && fe.fileName) {
          if (!Es(fe.mediaType))
            return;
          const ve = A.find((F) => F.id === fe.mediaId);
          if (!ve) {
            fn.error("Media not found:", fe.mediaId);
            return;
          }
          je = [{
            media: ve,
            mediaId: fe.mediaId,
            mediaType: fe.mediaType,
            label: fe.fileName
          }];
        }
        if (je.length === 0)
          return;
        const xe = await D(je, W);
        if (xe.items.length === 0) {
          jt.error("Unable to add dropped media items");
          return;
        }
        xe.tracks !== he.getState().tracks && he.getState().setTracks(xe.tracks), xe.items.length < je.length && jt.warning(`Some dropped media items could not be added: ${je.length - xe.items.length} failed`), xe.items.length === 1 ? E(xe.items[0]) : K(xe.items);
        return;
      } catch (fe) {
        fn.warn("Failed to parse drag payload, falling back to file-drop handling", fe);
      }
    if (!O.dataTransfer.types.includes("Files"))
      return;
    const { supported: re, entries: j, errors: x } = await _s(O.dataTransfer);
    if (!re) {
      jt.warning("Drag-drop not supported in this browser. Use Chrome or Edge.");
      return;
    }
    if (x.length > 0 && jt.error(`Some files were rejected: ${x.join(", ")}`), j.length === 0)
      return;
    try {
      await Nu(j);
    } catch (fe) {
      jt.error("Unable to inspect dropped file.", {
        description: fe instanceof Error ? fe.message : "Please try again."
      });
      return;
    }
    const se = await p(j.map((fe) => fe.handle));
    if (se.length === 0) {
      jt.error("Unable to import dropped files");
      return;
    }
    const ne = se.flatMap((fe) => {
      const je = Ir(fe.mimeType);
      return Es(je) ? [{
        media: fe,
        mediaId: fe.id,
        mediaType: je,
        label: fe.fileName
      }] : [];
    });
    if (ne.length === 0) {
      jt.warning("Dropped files were imported, but none could be placed on the timeline.");
      return;
    }
    const oe = await D(ne, W);
    if (oe.items.length === 0) {
      jt.error("Unable to add dropped files to the timeline");
      return;
    }
    oe.tracks !== he.getState().tracks && he.getState().setTracks(oe.tracks), oe.items.length < ne.length && jt.warning(`Some dropped files could not be added: ${ne.length - oe.items.length} failed`), oe.items.length === 1 ? E(oe.items[0]) : K(oe.items);
  }, [
    E,
    K,
    ge,
    S,
    z,
    V,
    h,
    A,
    p,
    D,
    s
  ]);
  if (t <= 0)
    return null;
  const ye = s === "video" ? i === "top" ? "video-top" : "video-bottom" : "audio-bottom";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: b,
      className: "relative",
      "data-timeline-new-zone": ye,
      style: { height: `${t}px` },
      onDragOver: U,
      onDragLeave: De,
      onDrop: Ce,
      children: [
        c && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-x-0 z-[35] h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]",
            style: { top: i === "top" ? 0 : void 0, bottom: i !== "top" ? 0 : void 0 },
            "aria-hidden": !0,
            "data-testid": "timeline-new-lane-drop-indicator"
          }
        ),
        c && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 pointer-events-none z-10 bg-blue-500/[0.04]" }),
        I.map((O, W) => /* @__PURE__ */ e.jsx(
          "div",
          {
            className: `absolute rounded pointer-events-none z-20 flex items-center px-2 border border-dashed transition-[left,width,opacity] duration-150 ease-out ${O.type === "composition" ? "border-violet-400/70 bg-violet-600/15" : O.type === "external-file" ? "border-primary/70 bg-primary/10" : O.type === "video" ? "border-timeline-video/70 bg-timeline-video/15" : O.type === "audio" ? "border-timeline-audio/70 bg-timeline-audio/15" : O.type === "text" ? "border-timeline-text/70 bg-timeline-text/15" : O.type === "shape" ? "border-timeline-shape/70 bg-timeline-shape/15" : O.type === "adjustment" ? "border-slate-400/70 bg-slate-400/10" : "border-timeline-image/70 bg-timeline-image/15"}`,
            style: {
              left: `${O.left}px`,
              width: `${O.width}px`,
              top: 2,
              bottom: 2
            },
            children: /* @__PURE__ */ e.jsx("span", { className: "truncate text-[10px] font-medium text-foreground/60", children: O.label })
          },
          `${O.label}-${W}`
        ))
      ]
    }
  );
});
function Gl({
  children: r,
  className: t,
  multipleLanes: s = !1,
  showTopDivider: o = !1,
  hideBottomDivider: i = !1,
  onResizeMouseDown: c,
  onResizeDoubleClick: m,
  resizeHandleLabel: d,
  resizeHandlePosition: b = "bottom"
}) {
  const M = b === "top" ? "top-0" : "bottom-0", R = "pointer-events-none absolute inset-x-0 h-0 border-border/80 border-dotted", N = s && o, w = s && !i;
  return /* @__PURE__ */ e.jsxs("div", { className: Pe("relative", t), children: [
    N && /* @__PURE__ */ e.jsx(
      "div",
      {
        "aria-hidden": "true",
        "data-testid": "track-row-top-divider",
        className: Pe(R, "top-0 border-t")
      }
    ),
    r,
    w && /* @__PURE__ */ e.jsx(
      "div",
      {
        "aria-hidden": "true",
        "data-testid": "track-row-divider",
        className: Pe(R, "bottom-0 border-b")
      }
    ),
    c && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        className: Pe(
          "absolute inset-x-0 z-30 h-[6px] cursor-row-resize bg-transparent focus-visible:outline-none",
          M
        ),
        "aria-label": d ?? "Resize track height",
        onMouseDown: c,
        onDoubleClick: m
      }
    )
  ] });
}
function Ul({ className: r, onMouseDown: t }) {
  return /* @__PURE__ */ e.jsxs("div", { className: Pe("relative", r), style: { height: `${Mu}px` }, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        "aria-hidden": "true",
        "data-testid": "track-row-section-divider",
        className: "pointer-events-none absolute inset-0 z-30",
        children: /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border/80 shadow-[0_1px_0_rgba(255,255,255,0.15)]" })
      }
    ),
    t && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "absolute inset-0 z-40 cursor-row-resize bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        "aria-label": "Resize video and audio track sections",
        onMouseDown: t
      }
    )
  ] });
}
function Yl({ marqueeState: r, className: t }) {
  if (!r.active) return null;
  const s = Hl(
    r.startX,
    r.startY,
    r.currentX,
    r.currentY
  );
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `
        absolute pointer-events-none z-50
        border-2 border-dashed border-primary bg-primary/10
        ${t || ""}
      `,
      style: {
        left: `${s.left}px`,
        top: `${s.top}px`,
        width: `${s.width}px`,
        height: `${s.height}px`
      }
    }
  );
}
const vp = [
  "timeline-cursor-trim-left",
  "timeline-cursor-trim-right",
  "timeline-cursor-trim-center",
  "timeline-cursor-slip-smart",
  "timeline-cursor-slide-smart",
  "timeline-cursor-gauge",
  "timeline-item-drag-cursor-grabbing",
  "timeline-item-drag-cursor-copy",
  "timeline-item-drag-cursor-not-allowed"
], yp = n.memo(function({
  duration: t,
  tracks: s,
  scrollRef: o,
  allTracksScrollRef: i,
  videoTracksScrollRef: c,
  audioTracksScrollRef: m,
  videoPaneHeight: d = 0,
  audioPaneHeight: b = 0,
  onSectionDividerMouseDown: M,
  onZoomHandlersReady: R,
  onMetricsChange: N
}) {
  Ru();
  const w = he((y) => y.fps), f = n.useMemo(
    () => s.filter((y) => kn(y) === "video"),
    [s]
  ), T = n.useMemo(
    () => s.filter((y) => kn(y) === "audio"),
    [s]
  ), H = f.length > 0 && T.length > 0, E = s[0]?.id ?? null, K = s[s.length - 1]?.id ?? null, $ = s.find((y) => kn(y) === "video")?.id ?? E, v = [...s].reverse().find((y) => kn(y) === "audio")?.id ?? K, Y = n.useMemo(
    () => f.reduce((y, Q) => y + Q.height, 0),
    [f]
  ), S = n.useMemo(
    () => T.reduce((y, Q) => y + Q.height, 0),
    [T]
  ), J = n.useMemo(
    () => $s(d, Y),
    [d, Y]
  ), A = n.useMemo(
    () => $s(b, S),
    [b, S]
  ), p = lt((y) => y.maxItemEndFrame), u = Math.floor(Math.max(p / w, 10) * w), { timeToPixels: L, frameToPixels: I, pixelsToFrame: h, setZoom: V, setZoomImmediate: C, zoomLevel: D } = $i({
    minZoom: pn,
    maxZoom: Pn
  }), G = br((y) => y.pendingInitialZoomFit), le = br((y) => y.isTimelineLoading), B = _e((y) => y.selectItems), ge = _e((y) => y.selectMarker), z = _e((y) => y.clearItemSelection), te = _e((y) => !!y.dragState?.isDragging), U = _e((y) => y.dragState?.activeSnapTarget ?? null), De = _e((y) => y.activeTrackId), Ce = n.useRef(null), ye = n.useRef(null), [O, W] = n.useState(0), Ie = n.useRef(!1), re = n.useRef(!1), j = n.useRef(!1), x = n.useRef(null), se = n.useRef(null), ne = Ue((y) => y.setPreviewFrame), oe = n.useRef(ne);
  oe.current = ne;
  const fe = Ue((y) => y.setHoverFrame), je = n.useRef(fe);
  je.current = fe;
  const xe = n.useRef(null), ve = n.useRef(h);
  ve.current = h;
  const F = n.useRef(u);
  F.current = u, n.useEffect(() => Ue.subscribe((y, Q) => {
    y.isPlaying && !Q.isPlaying && (y.setPreviewFrame(null), y.setHoverFrame(null));
  }), []), n.useEffect(() => {
    if (te) {
      const y = Ue.getState();
      y.previewFrame !== null && y.setPreviewFrame(null), y.hoverFrame !== null && y.setHoverFrame(null);
    }
  }, [te]), n.useEffect(() => () => {
    xe.current !== null && cancelAnimationFrame(xe.current);
  }, []);
  const _ = n.useRef(Ue.getState().currentFrame);
  n.useEffect(() => Ue.subscribe((y) => {
    _.current = y.currentFrame;
  }), []);
  const ce = n.useRef(I);
  ce.current = I;
  const ie = n.useRef(D);
  ie.current = D;
  const Te = n.useRef(10), ze = n.useRef(0), Se = n.useRef(0), Ae = n.useRef(null), We = n.useRef(0), et = n.useRef(null), Ye = n.useRef(null), Xe = n.useCallback(() => {
    const y = Ce.current;
    if (!y) return;
    const Q = ye.current?.clientHeight ?? y.clientHeight;
    Kn.getState().setViewport({
      scrollLeft: y.scrollLeft,
      scrollTop: y.scrollTop,
      viewportWidth: y.clientWidth,
      viewportHeight: Q
    });
  }, []), vt = n.useCallback(() => {
    Ye.current === null && (Ye.current = requestAnimationFrame(() => {
      Ye.current = null, Xe();
    }));
  }, [Xe]), ft = n.useCallback((y) => {
    if (Ce.current = y, o && (o.current = y), y) {
      const Q = ye.current?.clientHeight ?? y.clientHeight;
      Kn.getState().setViewport({
        scrollLeft: y.scrollLeft,
        scrollTop: y.scrollTop,
        viewportWidth: y.clientWidth,
        viewportHeight: Q
      });
    }
  }, [o]);
  n.useEffect(() => {
    const y = () => {
      Ce.current && (W(Ce.current.clientWidth), Xe());
    };
    y();
    const Q = requestIdleCallback(y);
    return window.addEventListener("resize", y), () => {
      cancelIdleCallback(Q), Ye.current !== null && (cancelAnimationFrame(Ye.current), Ye.current = null), window.removeEventListener("resize", y);
    };
  }, [Xe]), n.useEffect(() => {
    if (Ce.current) {
      const y = Ce.current.clientWidth;
      y > 0 && y !== O && W(y), Xe();
    }
  }, [p, O, Xe]);
  const ue = n.useRef(0), Ne = n.useRef(null), Fe = 50, qe = he((y) => y.setScrollPosition);
  n.useEffect(() => {
    const y = Ce.current;
    if (!y) return;
    const Q = () => {
      ue.current = y.scrollLeft, vt(), Ne.current === null && (Ne.current = setTimeout(() => {
        Ne.current = null, qe(ue.current);
      }, Fe));
    };
    return y.addEventListener("scroll", Q, { passive: !0 }), () => {
      y.removeEventListener("scroll", Q), Ne.current !== null && clearTimeout(Ne.current), Ye.current !== null && (cancelAnimationFrame(Ye.current), Ye.current = null);
    };
  }, [qe, vt]);
  const nt = n.useRef(!1);
  n.useEffect(() => {
    if (nt.current) return;
    const y = Ce.current;
    if (!y) return;
    const Q = he.getState().scrollPosition;
    Q > 0 && (y.scrollLeft = Q, ue.current = Q), Xe(), nt.current = !0;
  }, [Xe]), n.useLayoutEffect(() => {
    et.current !== null && Ce.current && (Ce.current.scrollLeft = et.current, et.current = null, Xe());
  });
  const Je = Kn((y) => y.pendingScrollToFrame);
  n.useEffect(() => {
    if (Je === null) return;
    const y = Ce.current;
    if (!y) return;
    Kn.getState().clearScrollToFrame();
    const Q = ce.current(Je), pe = y.scrollLeft, rt = y.clientWidth;
    Q >= pe && Q <= pe + rt || (y.scrollLeft = Math.max(0, Q - rt / 2), Xe());
  }, [Je, Xe]);
  const pt = lt(Jt((y) => y.items.map((Q) => Q.id))), kt = n.useMemo(
    () => pt.map((y) => ({
      id: y,
      getBoundingRect: () => {
        const Q = Ce.current?.querySelector(`[data-item-id="${y}"]`);
        if (!Q)
          return { left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 };
        const pe = Q.getBoundingClientRect();
        return {
          left: pe.left,
          top: pe.top,
          right: pe.right,
          bottom: pe.bottom,
          width: pe.width,
          height: pe.height
        };
      }
    })),
    [pt]
  ), { marqueeState: ht } = $l({
    containerRef: Ce,
    items: kt,
    onSelectionChange: (y) => {
      const Q = Ft.getState().linkedSelectionEnabled;
      B(Q ? Lo(he.getState().items, y) : y);
    },
    enabled: !0,
    threshold: 5
  });
  n.useEffect(() => {
    if (ht.active)
      Ie.current = !0;
    else if (Ie.current) {
      const y = setTimeout(() => {
        Ie.current = !1;
      }, 100);
      return () => clearTimeout(y);
    }
  }, [ht.active]), n.useEffect(() => {
    if (te)
      re.current = !0;
    else if (re.current) {
      const y = setTimeout(() => {
        re.current = !1;
      }, 100);
      return () => clearTimeout(y);
    }
  }, [te]), n.useEffect(() => {
    const y = (pe) => {
      const rt = pe.target;
      (rt.closest("[data-playhead-handle]") || rt.closest(".timeline-ruler")) && (j.current = !0);
    }, Q = () => {
      j.current && (x.current !== null && (clearTimeout(x.current), x.current = null), x.current = setTimeout(() => {
        j.current = !1, x.current = null;
      }, 100));
    };
    return document.addEventListener("mousedown", y, !0), document.addEventListener("mouseup", Q), () => {
      document.removeEventListener("mousedown", y, !0), document.removeEventListener("mouseup", Q), x.current !== null && (clearTimeout(x.current), x.current = null);
    };
  }, []);
  const l = (y) => {
    if (Ie.current || re.current || j.current)
      return;
    y.target.closest("[data-item-id]") || (z(), ge(null));
  }, X = n.useCallback(() => {
    const y = he.getState().items, Q = he.getState().tracks, pe = rn.getState().transitions, rt = qi(Q), Ke = Ji(y, pe, rt);
    Ke.push({ frame: Math.round(_.current), type: "playhead" });
    const mt = Qi.getState().markers;
    for (const Dt of mt)
      Ke.push({ frame: Dt.frame, type: "marker" });
    return Ke;
  }, []), P = n.useCallback((y) => {
    if (y.button !== 0) return;
    const Q = Ue.getState();
    Q.previewFrame !== null && oe.current(null), Q.hoverFrame !== null && je.current(null);
    const pe = y.target;
    if (!pe || !!!pe.closest(".timeline-tracks") || pe.closest("[data-resize-handle]") || pe.closest("[data-track-push]") || pe.closest("[data-playhead-handle]") || pe.closest("[data-gizmo]") || pe.closest("button") || pe.closest("input") || pe.closest("a") || pe.closest('[role="button"]') || pe.closest("[data-item-id]") && _e.getState().activeTool !== "select")
      return;
    const Ke = Ce.current;
    if (!Ke) return;
    const mt = Ke.getBoundingClientRect(), Dt = y.clientX - mt.left + Ke.scrollLeft, Lt = Math.max(
      0,
      Math.min(Math.round(ve.current(Dt)), F.current)
    ), Nt = Ue.getState();
    Nt.isPlaying ? Nt.setCurrentFrame(Lt) : Nt.setScrubFrame(Lt), j.current = !0, x.current !== null && clearTimeout(x.current), x.current = setTimeout(() => {
      j.current = !1, x.current = null;
    }, 100);
  }, []), be = n.useCallback((y) => {
    const Q = () => {
      const _t = Ue.getState();
      _t.previewFrame !== null && oe.current(null), _t.hoverFrame !== null && je.current(null);
    };
    if (Ue.getState().isPlaying) {
      Q();
      return;
    }
    if (_e.getState().dragState?.isDragging) {
      xe.current !== null && (cancelAnimationFrame(xe.current), xe.current = null), Q();
      return;
    }
    const pe = document.body;
    if (vp.some((_t) => pe.classList.contains(_t)) || pe.style.userSelect === "none") {
      Q();
      return;
    }
    if (Ie.current || re.current || j.current) return;
    const mt = Ce.current;
    if (!mt) return;
    const Dt = mt.getBoundingClientRect(), Lt = y.clientX - Dt.left + mt.scrollLeft, Nt = _e.getState().activeTool === "razor";
    let tn;
    if (Nt) {
      const _t = y.shiftKey ? X() : void 0, { splitFrame: Pr } = el({
        cursorX: Lt,
        currentFrame: _.current,
        isPlaying: !1,
        frameToPixels: ce.current,
        pixelsToFrame: ve.current,
        shiftHeld: y.shiftKey,
        snapTargets: _t
      });
      tn = Math.max(0, Math.min(Pr, F.current));
    } else
      tn = Math.max(
        0,
        Math.min(Math.round(ve.current(Lt)), F.current)
      );
    const cn = y.target.closest("[data-item-id]"), dn = cn?.getAttribute("data-item-id") ?? void 0, ct = cn?.getAttribute("data-item-type") ?? void 0, so = ct === "video" || ct === "image";
    xe.current !== null && cancelAnimationFrame(xe.current), xe.current = requestAnimationFrame(() => {
      xe.current = null, !_e.getState().dragState?.isDragging && (Ue.getState().isPlaying || (je.current(tn, dn), so ? oe.current(tn, dn) : Ue.getState().previewFrame !== null && oe.current(null)));
    });
  }, []), ae = n.useCallback(() => {
    xe.current !== null && (cancelAnimationFrame(xe.current), xe.current = null), oe.current(null), je.current(null);
  }, []), { actualDuration: Be, timelineWidth: at } = n.useMemo(() => {
    const y = p / w, Q = Math.max(y, 10), pe = O > 0 ? O : 1920, rt = L(Q);
    return {
      actualDuration: Q,
      timelineWidth: nl({
        contentWidth: rt,
        viewportWidth: pe
      })
    };
  }, [p, w, L, O]);
  Te.current = Be, n.useLayoutEffect(() => {
    if (le || !G) return;
    const y = Ce.current, Q = O > 0 ? O : y?.clientWidth ?? 0;
    if (Q <= 0) return;
    const pe = Te.current, rt = Ba(Q, pe, { maxDurationSeconds: 30 });
    C(rt), y && (y.scrollLeft = 0), br.getState().setPendingInitialZoomFit(!1);
  }, [le, G, O, C]);
  const Ge = n.useCallback((y) => {
    const Q = Ce.current;
    if (!Q) return;
    const pe = ie.current, rt = Math.max(pn, Math.min(Pn, y));
    if (rt === pe) return;
    const Ke = ze.current, mt = Q.scrollLeft + Ke, Dt = pe * 100, Lt = Math.min(
      mt / Dt,
      Te.current
    ), Nt = rt * 100, Bt = Lt * Nt - Ke, cn = Math.max(0, Bt);
    et.current = cn, ue.current = cn, C(rt);
  }, [C]), Ve = n.useCallback((y) => {
    Ge(y);
  }, [Ge]), dt = n.useCallback(() => {
    const y = Math.min(Pn, ie.current * 1.2);
    Ge(y);
  }, [Ge]), Me = n.useCallback(() => {
    const y = Math.max(pn, ie.current / 1.2);
    Ge(y);
  }, [Ge]), ut = n.useRef(O);
  ut.current = O;
  const Ut = n.useCallback(() => {
    const y = Ce.current;
    if (!y) return;
    const Q = ut.current > 0 ? ut.current : y.clientWidth, pe = Te.current, rt = Ba(Q, pe);
    V(rt), y.scrollLeft = 0;
  }, [V]), Mt = n.useCallback((y) => {
    const Q = Ce.current;
    if (!Q) return;
    const pe = he.getState().fps, rt = y / pe * 100, Ke = ut.current > 0 ? ut.current : Q.clientWidth, mt = Math.max(0, rt - Ke / 2);
    et.current = mt, ue.current = mt, C(1);
  }, [C]);
  n.useEffect(() => (Xa(Mt), () => Xa(null)), [Mt]), n.useEffect(() => {
    R && R({
      handleZoomChange: Ve,
      handleZoomIn: dt,
      handleZoomOut: Me,
      handleZoomToFit: Ut
    });
  }, []), n.useEffect(() => {
    N?.({
      actualDuration: Be,
      timelineWidth: at
    });
  }, [Be, N, at]);
  const Ot = n.useCallback((y) => y instanceof Element ? y.closest("[data-track-section-scroll]") : null, []), Yt = n.useCallback(() => {
    Ae.current === null && (Ae.current = requestAnimationFrame(() => {
      if (Ae.current = null, !Ce.current) {
        Se.current = 0;
        return;
      }
      const Q = Se.current;
      if (Se.current = 0, Q === 0)
        return;
      const pe = Math.sign(Q) * Math.min(Math.abs(Q), Eu), rt = Math.exp(-pe / Du);
      ze.current = We.current;
      const Ke = ie.current, mt = Math.max(pn, Math.min(Pn, Ke * rt));
      mt !== Ke && Ge(mt);
    }));
  }, [Ge]);
  n.useEffect(() => {
    const y = Ce.current;
    if (!y) return;
    const Q = (pe) => {
      if (pe.ctrlKey || pe.metaKey) {
        pe.preventDefault();
        const Lt = y.getBoundingClientRect();
        We.current = pe.clientX - Lt.left;
        const Nt = pe.deltaMode === 1 ? pe.deltaY * 16 : pe.deltaY;
        Se.current += Nt, Yt();
        return;
      }
      if (pe.altKey) {
        const Nt = (pe.target instanceof Element ? pe.target.closest("[data-track-section-scroll]") : null)?.dataset.trackSectionScroll;
        if (Nt) {
          pe.preventDefault();
          const tn = pe.deltaY > 0 ? -4 : 4, Bt = lt.getState().tracks, cn = rl(Bt, Nt, tn);
          cn !== Bt && (lt.getState().setTracks(cn), br.getState().markDirty());
        }
        return;
      }
      if (pe.preventDefault(), pe.shiftKey || Math.abs(pe.deltaX) > Math.abs(pe.deltaY)) {
        const Lt = Math.abs(pe.deltaX) > Math.abs(pe.deltaY) ? pe.deltaX : pe.deltaY, Nt = Math.sign(Lt) * Math.min(Math.abs(Lt), Pu);
        y.scrollLeft = Math.max(0, y.scrollLeft + Nt), ue.current = y.scrollLeft, vt(), Ne.current === null && (Ne.current = setTimeout(() => {
          Ne.current = null, qe(ue.current);
        }, 50));
        return;
      }
      se.current = Ot(pe.target);
      const mt = se.current;
      if (mt) {
        mt.scrollTop = Math.max(
          0,
          mt.scrollTop + pe.deltaY
        );
        return;
      }
      const Dt = y.querySelector(
        "[data-track-section-scroll]"
      );
      Dt && (Dt.scrollTop = Math.max(0, Dt.scrollTop + pe.deltaY));
    };
    return y.addEventListener("wheel", Q, { passive: !1 }), () => {
      y.removeEventListener("wheel", Q), Ae.current !== null && (cancelAnimationFrame(Ae.current), Ae.current = null);
    };
  }, [Ot, Yt, vt, qe]);
  const yt = n.useCallback((y) => {
    const Q = Ce.current;
    if (!Q)
      return null;
    const pe = Q.scrollLeft || 0, rt = Q.getBoundingClientRect(), Ke = y.clientX - rt.left + pe;
    return h(Ke);
  }, [h]), xt = n.useCallback(() => De && s.some((y) => y.id === De) ? De : s[0]?.id ?? null, [De, s]), Yn = n.useCallback((y) => {
    vr(y) && y.preventDefault();
  }, []), en = n.useCallback((y) => {
    if (!vr(y)) return;
    const Q = Va(y.clientX, y.clientY), pe = xt(), rt = Q ?? pe;
    if (!rt || Jr(rt)) {
      y.preventDefault(), y.dataTransfer.dropEffect = "none";
      return;
    }
    y.preventDefault(), y.dataTransfer.dropEffect = "copy";
  }, [xt]), ln = n.useCallback((y) => {
    if (!vr(y))
      return;
    const Q = xt();
    if (!Q || Jr(Q)) {
      y.preventDefault(), y.dataTransfer.dropEffect = "none";
      return;
    }
    y.preventDefault(), y.dataTransfer.dropEffect = "copy";
  }, [xt]), Zn = n.useCallback(async (y) => {
    y.preventDefault(), y.stopPropagation();
    const Q = Va(y.clientX, y.clientY) ?? xt();
    if (!Q)
      return;
    const pe = yt(y);
    pe !== null && await zs({
      dataTransfer: y.dataTransfer,
      dropFrame: pe,
      dropTargetTrackId: Q
    });
  }, [yt, xt]), gn = n.useCallback((y) => {
    if (y.target !== y.currentTarget || !vr(y)) return;
    const Q = xt();
    if (!Q || Jr(Q)) {
      y.preventDefault(), y.dataTransfer.dropEffect = "none";
      return;
    }
    y.preventDefault(), y.dataTransfer.dropEffect = "copy";
  }, [xt]), g = n.useCallback(async (y) => {
    if (y.target !== y.currentTarget) return;
    y.preventDefault();
    const Q = xt();
    if (!Q)
      return;
    const pe = yt(y);
    pe !== null && await zs({
      dataTransfer: y.dataTransfer,
      dropFrame: pe,
      dropTargetTrackId: Q
    });
  }, [yt, xt]), q = f.length > 0 ? f : T, we = f.length > 0 ? "video" : "audio", Ee = f.length > 0 ? d : b, Qe = f.length > 0 ? J : A, Tt = f.length > 0 ? $ : v, Rt = (y, Q) => /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: Q.scrollRef,
      "data-track-section-scroll": Q.section,
      className: "min-h-0 overflow-y-auto overflow-x-hidden",
      style: { height: `${Q.height}px` },
      children: /* @__PURE__ */ e.jsx("div", { className: `relative flex min-w-0 flex-col ${Q.section === "audio" ? "min-h-full" : ""}`, children: /* @__PURE__ */ e.jsxs("div", { className: "relative flex w-full min-w-0 flex-col", children: [
        Q.section === "video" && Q.anchorTrackId && /* @__PURE__ */ e.jsx(
          Ai,
          {
            height: Wo,
            zone: "video",
            anchorTrackId: Q.anchorTrackId,
            placement: "top"
          }
        ),
        y.map((pe, rt) => /* @__PURE__ */ e.jsx(
          Gl,
          {
            multipleLanes: y.length > 1,
            showTopDivider: Q.showTopDividerForFirstTrack && rt === 0,
            children: /* @__PURE__ */ e.jsx(gp, { track: pe, timelineWidth: at })
          },
          pe.id
        )),
        Q.section === "audio" && Q.anchorTrackId && /* @__PURE__ */ e.jsx(
          Ai,
          {
            height: Q.zoneHeight,
            zone: "audio",
            anchorTrackId: Q.anchorTrackId,
            placement: "bottom"
          }
        ),
        Q.section === "audio" && !Q.anchorTrackId && /* @__PURE__ */ e.jsx("div", { "aria-hidden": "true", style: { height: `${Q.zoneHeight}px` } })
      ] }) })
    }
  );
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: ft,
      "data-timeline-scroll-container": !0,
      className: "timeline-container relative flex flex-1 flex-col overflow-x-auto overflow-y-hidden bg-background/30",
      style: {
        scrollBehavior: "auto",
        willChange: "scroll-position"
      },
      onDragEnter: Yn,
      onDragOverCapture: en,
      onMouseDownCapture: P,
      onClick: l,
      onMouseMove: be,
      onMouseLeave: ae,
      children: [
        /* @__PURE__ */ e.jsx(Yl, { marqueeState: ht }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "relative z-30 shrink-0 timeline-ruler bg-background",
            style: { width: `${at}px` },
            onDragOver: ln,
            onDrop: Zn,
            children: [
              /* @__PURE__ */ e.jsx(Jm, { duration: Be, width: at }),
              /* @__PURE__ */ e.jsx(li, { inRuler: !0, maxFrame: u }),
              /* @__PURE__ */ e.jsx(ii, { inRuler: !0, maxFrame: u })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            ref: ye,
            className: "relative timeline-tracks flex flex-1 min-h-0 flex-col",
            style: {
              width: `${at}px`,
              contain: "layout style paint",
              willChange: "contents"
            },
            onDragOver: gn,
            onDrop: g,
            children: [
              H ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                Rt(f, {
                  section: "video",
                  height: d,
                  zoneHeight: 0,
                  anchorTrackId: $,
                  showTopDividerForFirstTrack: !0,
                  scrollRef: c
                }),
                /* @__PURE__ */ e.jsx(Ul, { onMouseDown: M }),
                Rt(T, {
                  section: "audio",
                  height: b,
                  zoneHeight: A,
                  anchorTrackId: v,
                  showTopDividerForFirstTrack: !1,
                  scrollRef: m
                })
              ] }) : Rt(q, {
                section: we,
                height: Ee,
                zoneHeight: Qe,
                anchorTrackId: Tt,
                showTopDividerForFirstTrack: !0,
                scrollRef: i
              }),
              te && /* @__PURE__ */ e.jsx(
                xp,
                {
                  activeSnapTarget: U
                }
              ),
              /* @__PURE__ */ e.jsx(li, { maxFrame: u }),
              /* @__PURE__ */ e.jsx(ii, { maxFrame: u })
            ]
          }
        )
      ]
    }
  );
}), Zl = 40;
function wp({
  timelineWidth: r,
  viewportWidth: t,
  trackWidth: s,
  scrollLeft: o,
  minThumbWidth: i = Zl
}) {
  const c = Math.max(r, t || 0, 1), m = Math.max(0, c - t), d = t > 0 ? Math.min(1, t / c) : 1, b = s > 0 ? d >= 1 ? s : Math.max(i, d * s) : 0, M = Math.max(0, s - b), R = m > 0 && M > 0 ? o / m * M : 0;
  return {
    maxScrollLeft: m,
    thumbWidthRatio: d,
    thumbWidth: b,
    thumbTravel: M,
    thumbLeft: R
  };
}
function Ip({
  dragTarget: r,
  deltaX: t,
  dragStartThumbLeft: s,
  dragStartThumbWidth: o,
  trackWidth: i,
  viewportWidth: c,
  contentDuration: m,
  minThumbWidth: d = Zl
}) {
  const b = r === "left" ? Math.max(d, Math.min(i, o - t)) : Math.max(d, Math.min(i, o + t)), M = c > 0 ? Math.max(c, c * i / b) : Math.max(i, 1), R = Fu(c), N = Math.max(0, M - R), w = Math.max(0.01, Math.min(2, N / (m * 100))), f = m * w * 100, T = nl({
    contentWidth: f,
    viewportWidth: c
  }), H = Math.max(0, T - c), E = Math.max(0, i - b), K = s + o, $ = r === "left" ? Math.max(0, Math.min(E, K - b)) : Math.max(0, Math.min(E, s)), v = E > 0 && H > 0 ? $ / E * H : 0;
  return {
    targetThumbWidth: b,
    nextZoom: w,
    nextTimelineWidth: T,
    nextMaxScrollLeft: H,
    nextThumbLeft: $,
    nextThumbTravel: E,
    nextScrollLeft: v
  };
}
function Cp({
  actualDuration: r,
  timelineWidth: t,
  scrollContainerRef: s
}) {
  const o = n.useRef(null), i = n.useRef(null), c = he((h) => h.fps), m = Lu((h) => h.setZoomLevelImmediate), d = Kn((h) => h.scrollLeft), b = Kn((h) => h.viewportWidth), [M, R] = n.useState(0), [N, w] = n.useState(null), [f, T] = n.useState(0), [H, E] = n.useState(0), [K, $] = n.useState(0), v = he(
    (h) => h.items.reduce((V, C) => Math.max(V, C.from + C.durationInFrames), 0)
  ), Y = n.useMemo(() => {
    const h = v / c;
    return Math.max(r, h, 10);
  }, [r, c, v]), { maxScrollLeft: S, thumbWidth: J, thumbTravel: A, thumbLeft: p } = wp({
    timelineWidth: t,
    viewportWidth: b,
    trackWidth: M,
    scrollLeft: d
  }), u = n.useCallback((h) => {
    const V = s.current;
    V && (V.scrollLeft = h);
  }, [s]), L = n.useCallback((h, V) => {
    h.preventDefault(), h.stopPropagation(), w(V), T(h.clientX), E(p), $(J);
  }, [p, J]), I = n.useCallback((h) => {
    if (!o.current || N || S <= 0 || A <= 0)
      return;
    const V = o.current.getBoundingClientRect(), C = h.clientX - V.left, G = Math.max(0, Math.min(A, C - J / 2)) / A * S;
    u(G);
  }, [N, S, u, A, J]);
  return n.useEffect(() => {
    const h = o.current;
    if (!h || (R(h.clientWidth), typeof ResizeObserver > "u"))
      return;
    const V = new ResizeObserver((C) => {
      const D = C[0];
      D && R(D.contentRect.width);
    });
    return V.observe(h), () => {
      V.disconnect();
    };
  }, []), n.useEffect(() => () => {
    i.current !== null && cancelAnimationFrame(i.current);
  }, []), n.useEffect(() => {
    if (!N) return;
    const h = (C) => {
      if (!o.current) return;
      const D = o.current.clientWidth;
      if (D <= 0) return;
      const G = C.clientX - f;
      if (N === "thumb") {
        if (A <= 0 || S <= 0) return;
        const z = Math.max(0, Math.min(A, H + G)) / A * S;
        u(z);
        return;
      }
      if (Y <= 0) return;
      const { nextZoom: le, nextScrollLeft: B } = Ip({
        dragTarget: N,
        deltaX: G,
        dragStartThumbLeft: H,
        dragStartThumbWidth: K,
        trackWidth: D,
        viewportWidth: b,
        contentDuration: Y
      });
      m(le), i.current !== null && cancelAnimationFrame(i.current), i.current = requestAnimationFrame(() => {
        i.current = null, u(B);
      });
    }, V = () => {
      w(null);
    };
    return window.addEventListener("mousemove", h), window.addEventListener("mouseup", V), () => {
      window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", V);
    };
  }, [
    Y,
    H,
    K,
    f,
    N,
    S,
    m,
    u,
    A,
    b
  ]), S <= 0 ? null : /* @__PURE__ */ e.jsx("div", { className: "h-5 border-t border-border bg-background/80 px-2 py-1", children: /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: o,
      className: "relative h-full rounded-sm bg-secondary/70",
      onClick: I,
      children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: Pe(
            "absolute top-0 flex h-full items-center justify-between rounded-sm bg-muted-foreground/55 transition-colors",
            N ? "cursor-grabbing bg-muted-foreground/75" : "cursor-grab hover:bg-muted-foreground/70"
          ),
          style: {
            left: p,
            width: J
          },
          onMouseDown: (h) => L(h, "thumb"),
          onClick: (h) => h.stopPropagation(),
          "data-testid": "timeline-navigator-thumb",
          children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "flex h-full w-3 items-center justify-center cursor-ew-resize",
                onMouseDown: (h) => L(h, "left"),
                children: /* @__PURE__ */ e.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-background/90" })
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "h-2 w-8 rounded-full bg-background/20" }),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "flex h-full w-3 items-center justify-center cursor-ew-resize",
                onMouseDown: (h) => L(h, "right"),
                children: /* @__PURE__ */ e.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-background/90" })
              }
            )
          ]
        }
      )
    }
  ) });
}
const os = Dm, Sp = Rm, ql = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsx(
  Nl,
  {
    className: Pe(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      r
    ),
    ...t,
    ref: s
  }
));
ql.displayName = Nl.displayName;
const kr = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsxs(Sp, { container: Nn(), children: [
  /* @__PURE__ */ e.jsx(ql, {}),
  /* @__PURE__ */ e.jsx(
    Ml,
    {
      ref: s,
      className: Pe(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        r
      ),
      ...t
    }
  )
] }));
kr.displayName = Ml.displayName;
const Tr = ({
  className: r,
  ...t
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: Pe(
      "flex flex-col space-y-2 text-center sm:text-left",
      r
    ),
    ...t
  }
);
Tr.displayName = "AlertDialogHeader";
const Nr = ({
  className: r,
  ...t
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: Pe(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      r
    ),
    ...t
  }
);
Nr.displayName = "AlertDialogFooter";
const Mr = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsx(
  Rl,
  {
    ref: s,
    className: Pe("text-lg font-semibold", r),
    ...t
  }
));
Mr.displayName = Rl.displayName;
const Rr = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsx(
  Dl,
  {
    ref: s,
    className: Pe("text-sm text-muted-foreground", r),
    ...t
  }
));
Rr.displayName = Dl.displayName;
const Dr = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsx(
  El,
  {
    ref: s,
    className: Pe(Go(), r),
    ...t
  }
));
Dr.displayName = El.displayName;
const Er = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsx(
  Pl,
  {
    ref: s,
    className: Pe(
      Go({ variant: "outline" }),
      "mt-2 sm:mt-0",
      r
    ),
    ...t
  }
));
Er.displayName = Pl.displayName;
function jp(r, t) {
  return r.track === t.track && r.isActive === t.isActive && r.isSelected === t.isSelected && r.canDeleteTrack === t.canDeleteTrack && r.canDeleteEmptyTracks === t.canDeleteEmptyTracks;
}
const kp = n.memo(function({
  track: t,
  isActive: s,
  isSelected: o,
  canDeleteTrack: i,
  canDeleteEmptyTracks: c,
  onToggleMute: m,
  onToggleVisibility: d,
  onToggleLock: b,
  onSelect: M,
  onAddVideoTrack: R,
  onAddAudioTrack: N,
  onDeleteTrack: w,
  onDeleteEmptyTracks: f
}) {
  const [T, H] = n.useState(!1), E = kn(t), K = t.muted, $ = t.visible === !1, v = i && !t.locked, { handleDragStart: Y } = Au(t), S = () => {
    v && H(!0);
  }, J = (u) => {
    if (vr(u)) {
      if (t.locked || Jr(t.id)) {
        u.preventDefault(), u.dataTransfer.dropEffect = "none";
        return;
      }
      u.preventDefault(), u.dataTransfer.dropEffect = "copy";
    }
  }, A = async (u) => {
    if (!vr(u) || (u.preventDefault(), u.stopPropagation(), t.locked || Jr(t.id)))
      return;
    const L = Ue.getState().currentFrame;
    await zs({
      dataTransfer: u.dataTransfer,
      dropFrame: L,
      dropTargetTrackId: t.id
    });
  }, p = "h-7 w-7 shrink-0 rounded p-0";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(On, { children: [
      /* @__PURE__ */ e.jsx(_n, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `
            group flex cursor-grab items-center gap-2 overflow-hidden px-2.5 active:cursor-grabbing
            ${o ? "bg-primary/10" : "hover:bg-secondary/50"}
            ${s ? "border-l-[3px] border-l-primary" : "border-l-[3px] border-l-transparent"}
            transition-colors duration-150
          `,
          style: {
            height: `${t.height}px`,
            contentVisibility: "auto",
            containIntrinsicSize: `${Ou}px ${t.height}px`
          },
          onClick: M,
          onMouseDown: Y,
          onDragOver: J,
          onDrop: A,
          "data-track-id": t.id,
          children: [
            E === "video" && /* @__PURE__ */ e.jsx(hn, { className: "size-3.5 shrink-0 text-muted-foreground opacity-70", "aria-hidden": !0 }),
            E === "audio" && /* @__PURE__ */ e.jsx(sl, { className: "size-3.5 shrink-0 text-muted-foreground opacity-70", "aria-hidden": !0 }),
            /* @__PURE__ */ e.jsx("span", { className: "min-w-0 flex-1 truncate text-left text-xs font-medium leading-none", children: t.name }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex shrink-0 items-center gap-0.5", children: [
              E === "video" && /* @__PURE__ */ e.jsx(
                Ze,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  className: p,
                  onClick: (u) => {
                    u.stopPropagation(), d();
                  },
                  onMouseDown: (u) => u.stopPropagation(),
                  "aria-label": $ ? "Show track" : "Hide track",
                  "data-tooltip": $ ? "Show track" : "Hide track",
                  children: $ ? /* @__PURE__ */ e.jsx(_u, { className: "size-3.5 text-destructive" }) : /* @__PURE__ */ e.jsx(zu, { className: "size-3.5 text-muted-foreground" })
                }
              ),
              E === "audio" && /* @__PURE__ */ e.jsx(
                Ze,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  className: p,
                  onClick: (u) => {
                    u.stopPropagation(), m();
                  },
                  onMouseDown: (u) => u.stopPropagation(),
                  "aria-label": K ? "Unmute track" : "Mute track",
                  "data-tooltip": K ? "Unmute track" : "Mute track",
                  children: K ? /* @__PURE__ */ e.jsx(ol, { className: "size-3.5 text-destructive" }) : /* @__PURE__ */ e.jsx(al, { className: "size-3.5 text-muted-foreground" })
                }
              ),
              /* @__PURE__ */ e.jsx(
                Ze,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  className: Pe(
                    p,
                    v ? "text-destructive hover:bg-destructive/15 hover:text-destructive focus-visible:ring-destructive" : "text-muted-foreground"
                  ),
                  disabled: !v,
                  onClick: (u) => {
                    u.stopPropagation(), S();
                  },
                  onMouseDown: (u) => u.stopPropagation(),
                  "aria-label": v ? "Delete track" : t.locked ? "Unlock track to delete it" : "Cannot delete the only track",
                  "data-tooltip": i ? t.locked ? "Unlock track to delete it" : "Delete track and clips on it" : "Cannot delete the only track",
                  children: /* @__PURE__ */ e.jsx(sn, { className: "size-3.5" })
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ e.jsxs(Tn, { className: "w-52", children: [
        /* @__PURE__ */ e.jsxs(it, { onClick: b, children: [
          /* @__PURE__ */ e.jsx(Hu, { className: "mr-2 size-3.5" }),
          t.locked ? "Unlock track" : "Lock track"
        ] }),
        /* @__PURE__ */ e.jsx(Vt, {}),
        /* @__PURE__ */ e.jsx(it, { onClick: R, children: "Add video track" }),
        /* @__PURE__ */ e.jsx(it, { onClick: N, children: "Add audio track" }),
        /* @__PURE__ */ e.jsx(Vt, {}),
        /* @__PURE__ */ e.jsx(
          it,
          {
            disabled: !v,
            className: "text-destructive focus:text-destructive",
            onSelect: () => {
              S();
            },
            children: "Delete track"
          }
        ),
        /* @__PURE__ */ e.jsx(it, { disabled: !c, onClick: f, children: "Delete empty tracks" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(os, { open: T, onOpenChange: H, children: /* @__PURE__ */ e.jsxs(kr, { children: [
      /* @__PURE__ */ e.jsxs(Tr, { children: [
        /* @__PURE__ */ e.jsxs(Mr, { children: [
          "Delete track “",
          t.name,
          "”?"
        ] }),
        /* @__PURE__ */ e.jsx(Rr, { children: "This removes the entire lane and all clips on it (including linked audio/video). You can still undo afterward from the Edit menu or with your usual Undo shortcut." })
      ] }),
      /* @__PURE__ */ e.jsxs(Nr, { children: [
        /* @__PURE__ */ e.jsx(Er, { children: "Cancel" }),
        /* @__PURE__ */ e.jsx(
          Dr,
          {
            className: Go({ variant: "destructive" }),
            onClick: () => {
              w();
            },
            children: "Delete track"
          }
        )
      ] })
    ] }) })
  ] });
}, jp), Tp = n.memo(function() {
  const t = Kt((s) => s.invalidHint);
  return t ? ss.createPortal(
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "pointer-events-none",
        style: {
          position: "fixed",
          left: t.x,
          top: t.y - 12,
          transform: "translate(-50%, -100%)",
          zIndex: 1e4
        },
        children: /* @__PURE__ */ e.jsx("div", { className: "max-w-[220px] rounded-md border border-slate-200/70 bg-slate-900/92 px-2.5 py-1.5 text-[11px] font-medium text-slate-50 shadow-xl backdrop-blur-sm", children: t.message })
      }
    ),
    Nn() ?? document.body
  ) : null;
}), Np = n.memo(function() {
  const t = Gt((o) => o.breadcrumbs), s = Gt((o) => o.navigateTo);
  return t.length <= 1 ? null : /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-1 px-3 py-1.5 bg-background/80 backdrop-blur-sm border-b border-border text-xs", children: t.map((o, i) => {
    const c = i === t.length - 1;
    return /* @__PURE__ */ e.jsxs("span", { className: "flex items-center gap-1", children: [
      i > 0 && /* @__PURE__ */ e.jsx(Ys, { className: "h-3 w-3 text-muted-foreground" }),
      c ? /* @__PURE__ */ e.jsx("span", { className: "text-foreground font-medium", children: o.label }) : /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          className: "text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
          onClick: () => s(i),
          children: o.label
        }
      )
    ] }, o.compositionId ?? "root");
  }) });
}), Mp = n.memo(function() {
  const t = Gr((s) => s.topVideoNewLaneDropActive);
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      "aria-hidden": !0,
      "data-track-header-new-zone": "video-top",
      className: "relative shrink-0",
      style: { height: `${Wo}px` },
      children: t && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "pointer-events-none absolute inset-x-0 top-0 z-[35] h-[3px] bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.65)]",
          "aria-hidden": !0
        }
      )
    }
  );
}), Rp = an("Timeline"), fh = n.memo(function({ duration: t }) {
  const s = Us(), o = Ft((l) => l.colorScopesOpen), i = Ft((l) => l.toggleColorScopesOpen), c = es((l) => l.editorDensity), m = Xi(c), {
    tracks: d,
    addTrack: b,
    removeTracks: M,
    toggleTrackMute: R,
    toggleTrackVisibility: N,
    toggleTrackLock: w
  } = $u(), f = _e((l) => l.activeTrackId), T = _e((l) => l.selectedTrackIds), H = _e((l) => l.setActiveTrack), E = _e((l) => l.toggleTrackSelection), K = _e((l) => l.selectTracks), $ = n.useMemo(() => new Set(T), [T]), v = d, Y = lt(
    n.useCallback((l) => {
      let X = 0;
      for (const P of d)
        (l.itemsByTrackId[P.id]?.length ?? 0) === 0 && (X += 1);
      return X === 0 ? !1 : X < d.length ? !0 : d.length > 1;
    }, [d])
  ), S = n.useMemo(
    () => v.filter((l) => kn(l) === "video"),
    [v]
  ), J = n.useMemo(
    () => v.filter((l) => kn(l) === "audio"),
    [v]
  ), A = S.length > 0 && J.length > 0, p = n.useRef(null), u = n.useRef(null), L = n.useRef(null), I = n.useRef(null), h = n.useRef(null), V = n.useRef(null), C = n.useRef(null), D = n.useRef(null), G = n.useRef(null), le = n.useRef(null), B = n.useRef(null), ge = n.useRef(null), [z, te] = n.useState(null), [U, De] = n.useState({
    actualDuration: Math.max(t, 10),
    timelineWidth: 0
  }), Ce = Kn((l) => l.viewportWidth), ye = n.useMemo(
    () => U.timelineWidth > 0 && Ce > 0 && U.timelineWidth > Ce,
    [U.timelineWidth, Ce]
  ), [O, W] = n.useState(0), [Ie, re] = n.useState(null), j = Ft((l) => l.toggleKeyframeEditorOpen), x = he((l) => l.setTracks);
  fr(
    s.TOGGLE_KEYFRAME_EDITOR,
    (l) => {
      l.preventDefault(), j();
    },
    pr,
    [j]
  );
  const [se, ne] = n.useState(-1), oe = _e(
    (l) => (l.dragState?.isDragging && l.dragState.draggedTrackIds && l.dragState.draggedTrackIds.length > 0) ?? !1
  ), fe = n.useMemo(() => Bu({
    viewportHeight: O,
    tracks: v,
    sectionDividerPosition: Ie,
    trackTitleBarHeight: m.timelineClipLabelRowHeight
  }), [m.timelineClipLabelRowHeight, Ie, O, v]), {
    clampedSectionDividerPosition: je,
    videoPaneHeight: xe,
    audioPaneHeight: ve,
    videoSectionHeight: F,
    audioSectionHeight: _
  } = fe, { handleTrackResizeStart: ce, handleTrackResizeReset: ie } = Xu(), Te = n.useMemo(
    () => $s(xe, F),
    [xe, F]
  ), ze = n.useMemo(
    () => $s(ve, _),
    [ve, _]
  ), Se = n.useCallback((l, X, P = 0) => P + l.slice(0, Math.max(0, Math.min(X, l.length))).reduce((be, ae) => be + ae.height, 0), []);
  n.useLayoutEffect(() => {
    const l = L.current;
    if (!l) return;
    const X = () => {
      W(l.clientHeight);
    };
    X();
    const P = new ResizeObserver(X);
    return P.observe(l), () => P.disconnect();
  }, []), n.useEffect(() => {
    const l = p.current;
    if (!l) return;
    const X = (P) => {
      const be = h.current, ae = u.current;
      !be || !ae || be.contains(P.target) || ae.contains(P.target) && (P.preventDefault(), P.stopPropagation(), be.dispatchEvent(
        new WheelEvent("wheel", {
          bubbles: !0,
          cancelable: !0,
          deltaX: P.deltaX,
          deltaY: P.deltaY,
          deltaZ: P.deltaZ,
          deltaMode: P.deltaMode,
          clientX: P.clientX,
          clientY: P.clientY,
          ctrlKey: P.ctrlKey,
          metaKey: P.metaKey,
          shiftKey: P.shiftKey,
          altKey: P.altKey,
          view: window
        })
      ));
    };
    return l.addEventListener("wheel", X, { capture: !0, passive: !1 }), () => {
      l.removeEventListener("wheel", X, { capture: !0 });
    };
  }, []), n.useEffect(() => {
    const l = (X) => {
      !X.ctrlKey && !X.metaKey || !p.current?.contains(X.target) || X.preventDefault();
    };
    return document.addEventListener("wheel", l, { capture: !0, passive: !1 }), () => {
      document.removeEventListener("wheel", l, { capture: !0 });
    };
  }, []), n.useEffect(() => {
    const l = L.current;
    if (!l) return;
    const X = (P) => {
      if (!P.altKey) return;
      P.preventDefault();
      const ae = (P.target instanceof Element ? P.target.closest("[data-track-section-scroll]") : null)?.dataset.trackSectionScroll;
      if (!ae) return;
      const Be = P.deltaY > 0 ? -4 : 4, at = lt.getState().tracks, Ge = rl(at, ae, Be);
      Ge !== at && (lt.getState().setTracks(Ge), br.getState().markDirty());
    };
    return l.addEventListener("wheel", X, { passive: !1 }), () => l.removeEventListener("wheel", X);
  }, []);
  const Ae = n.useCallback((l) => {
    if (!A) return;
    l.preventDefault(), l.stopPropagation(), ge.current = {
      startY: l.clientY,
      startDividerPosition: je
    }, document.body.style.userSelect = "none", document.body.style.cursor = "row-resize";
    const X = (be) => {
      const ae = ge.current;
      if (!ae) return;
      const Be = be.clientY - ae.startY;
      re(Gu({
        viewportHeight: O,
        tracks: v,
        requestedDividerPosition: ae.startDividerPosition + Be,
        trackTitleBarHeight: m.timelineClipLabelRowHeight
      }));
    }, P = () => {
      ge.current = null, document.body.style.userSelect = "", document.body.style.cursor = "", window.removeEventListener("mousemove", X), window.removeEventListener("mouseup", P);
    };
    window.addEventListener("mousemove", X), window.addEventListener("mouseup", P);
  }, [
    je,
    m.timelineClipLabelRowHeight,
    A,
    O,
    v
  ]), We = d.length, et = d[0]?.id;
  n.useEffect(() => {
    We > 0 && !f && et && H(et);
  }, [We, f, et, H]), n.useEffect(() => {
    const X = [
      {
        source: G.current,
        target: V.current
      },
      {
        source: le.current,
        target: C.current
      },
      {
        source: B.current,
        target: D.current
      }
    ].filter((P) => P.source !== null && P.target !== null).map(({ source: P, target: be }) => {
      const ae = () => {
        be.scrollTop !== P.scrollTop && (be.scrollTop = P.scrollTop);
      };
      return ae(), P.addEventListener("scroll", ae, { passive: !0 }), () => P.removeEventListener("scroll", ae);
    });
    return () => {
      for (const P of X)
        P();
    };
  }, [J.length, A, We, S.length]), n.useLayoutEffect(() => {
    const l = A ? le.current : S.length > 0 ? G.current : null, X = A ? C.current : S.length > 0 ? V.current : null, P = (be) => {
      be && (be.scrollTop = Math.max(0, be.scrollHeight - be.clientHeight));
    };
    P(l), P(X);
  }, [G, V, A, xe, F, S.length]), n.useEffect(() => {
    if (!oe) {
      ne(-1);
      return;
    }
    let l;
    const X = () => {
      const P = Uu.current;
      ne((be) => be !== P ? P : be), l = requestAnimationFrame(X);
    };
    return l = requestAnimationFrame(X), () => {
      l && cancelAnimationFrame(l);
    };
  }, [oe]), n.useEffect(() => {
    if (!oe) return;
    const l = _e.getState().dragState;
    if (!l?.draggedTrackIds?.length) return;
    const X = new Set(l.draggedTrackIds), P = I.current;
    if (!P) return;
    let be;
    const ae = () => {
      const Be = Yu.current, at = P.querySelectorAll("[data-track-id]");
      for (const Ge of at) {
        const Ve = Ge.getAttribute("data-track-id");
        Ve && X.has(Ve) && (Ge.style.transform = `translateY(${Be}px) scale(1.02)`, Ge.style.zIndex = "100", Ge.style.opacity = "0.5", Ge.style.transition = "none", Ge.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1)");
      }
      be = requestAnimationFrame(ae);
    };
    return be = requestAnimationFrame(ae), () => {
      if (cancelAnimationFrame(be), P) {
        const Be = P.querySelectorAll("[data-track-id]");
        for (const at of Be)
          at.style.transform = "", at.style.zIndex = "", at.style.opacity = "", at.style.transition = "", at.style.boxShadow = "";
      }
    };
  }, [oe]), n.useEffect(() => {
    const l = (X) => {
      if (X.defaultPrevented) return;
      const P = X.target;
      if (P.tagName === "INPUT" || P.tagName === "TEXTAREA" || P.isContentEditable)
        return;
      const be = X.key.toLowerCase();
      if (be === "escape" && !X.metaKey && !X.ctrlKey && !X.shiftKey && !X.altKey) {
        const ae = Gt.getState();
        if (ae.activeCompositionId !== null) {
          X.preventDefault(), ae.exitComposition();
          return;
        }
      }
      if (be === "i" && !X.metaKey && !X.ctrlKey && !X.shiftKey && !X.altKey) {
        X.preventDefault();
        const { currentFrame: ae } = Ue.getState();
        he.getState().setInPoint(ae);
      } else if (be === "i" && !X.metaKey && !X.ctrlKey && X.shiftKey && !X.altKey) {
        X.preventDefault();
        const { hoverFrame: ae, currentFrame: Be } = Ue.getState();
        he.getState().setInPoint(ae ?? Be);
      }
      if (be === "o" && !X.metaKey && !X.ctrlKey && !X.shiftKey && !X.altKey) {
        X.preventDefault();
        const { currentFrame: ae } = Ue.getState();
        he.getState().setOutPoint(ae);
      } else if (be === "o" && !X.metaKey && !X.ctrlKey && X.shiftKey && !X.altKey) {
        X.preventDefault();
        const { hoverFrame: ae, currentFrame: Be } = Ue.getState();
        he.getState().setOutPoint(ae ?? Be);
      }
    };
    return window.addEventListener("keydown", l), () => {
      window.removeEventListener("keydown", l);
    };
  }, []);
  const Ye = n.useCallback((l, X) => {
    const P = new Set(l), be = _e.getState(), ae = be.selectedTrackIds.filter(
      (Be) => !P.has(Be)
    );
    if (ae.length > 0) {
      be.selectTracks(ae);
      return;
    }
    be.activeTrackId && !P.has(be.activeTrackId) || be.setActiveTrack(X);
  }, []), Xe = n.useCallback(() => {
    const l = Ka({
      tracks: d,
      kind: "video",
      order: 0,
      height: m.timelineTrackHeight
    });
    b(l), setTimeout(() => {
      H(l.id);
    }, 0);
  }, [b, m.timelineTrackHeight, H, d]), vt = n.useCallback(() => {
    const l = J[J.length - 1] ?? S[S.length - 1] ?? d[d.length - 1] ?? null, X = Ka({
      tracks: d,
      kind: "audio",
      order: l ? Vu(d, l, "below") : 0,
      height: m.timelineTrackHeight
    });
    x([...d, X]), setTimeout(() => {
      H(X.id);
    }, 0);
  }, [J, m.timelineTrackHeight, H, x, d, S]), ft = n.useCallback((l) => {
    if (d.length <= 1) {
      Rp.warn("Cannot remove all tracks");
      return;
    }
    if (d.find((Ge) => Ge.id === l)?.locked)
      return;
    const P = lt.getState().items.filter((Ge) => Ge.trackId === l).map((Ge) => Ge.id);
    P.length > 0 && he.getState().removeItems(P);
    const be = _e.getState(), ae = lt.getState().itemById, Be = be.selectedItemIds.filter((Ge) => Ge in ae);
    Be.length !== be.selectedItemIds.length && be.selectItems(Be), M([l]);
    const at = d.filter((Ge) => Ge.id !== l);
    Ye([l], at[0]?.id ?? null);
  }, [M, Ye, d]), ue = n.useCallback((l) => {
    const X = Ku(
      d,
      lt.getState().itemsByTrackId,
      l
    );
    if (X.length === 0) return;
    const P = new Set(X);
    M(X);
    const be = d.filter((ae) => !P.has(ae.id));
    Ye(X, be[0]?.id ?? null);
  }, [M, Ye, d]), Ne = oe && se >= 0 && se <= S.length ? se : -1, Fe = oe && se >= S.length && se <= v.length ? se - S.length : -1, qe = S.length > 0 ? "video" : "audio", nt = S.length > 0 ? S : J, Je = S.length > 0 ? xe : ve, pt = S.length > 0 ? Te : ze, kt = !A && oe && se >= 0 && se <= v.length ? se : -1, ht = (l, X) => /* @__PURE__ */ e.jsx("div", { className: "relative min-h-0 overflow-hidden", style: { height: `${X.height}px` }, "data-track-section-scroll": X.section, children: /* @__PURE__ */ e.jsx("div", { ref: X.scrollRef, className: "h-full overflow-hidden", children: /* @__PURE__ */ e.jsx("div", { className: "relative flex min-h-full min-w-0 flex-col", children: /* @__PURE__ */ e.jsxs("div", { className: "relative flex w-full min-w-0 flex-col", children: [
    X.section === "video" && /* @__PURE__ */ e.jsx(Mp, {}),
    l.map((P, be) => /* @__PURE__ */ e.jsx(
      Gl,
      {
        multipleLanes: l.length > 1,
        showTopDivider: X.showTopDividerForFirstTrack && be === 0,
        onResizeMouseDown: (ae) => ce(ae, P.id),
        onResizeDoubleClick: (ae) => ie(ae, P.id),
        resizeHandleLabel: `Resize ${P.name} height`,
        resizeHandlePosition: kn(P) === "video" ? "top" : "bottom",
        children: /* @__PURE__ */ e.jsx(
          kp,
          {
            track: P,
            isActive: f === P.id,
            isSelected: $.has(P.id),
            canDeleteTrack: d.length > 1,
            canDeleteEmptyTracks: Y,
            onToggleMute: () => R(P.id),
            onToggleVisibility: () => N(P.id),
            onToggleLock: () => w(P.id),
            onAddVideoTrack: Xe,
            onAddAudioTrack: vt,
            onDeleteTrack: () => ft(P.id),
            onDeleteEmptyTracks: () => ue(P.id),
            onSelect: (ae) => {
              if (!Zu.current)
                if (ae.shiftKey && f) {
                  const Be = v.findIndex((Ge) => Ge.id === f), at = v.findIndex((Ge) => Ge.id === P.id);
                  if (Be !== -1 && at !== -1) {
                    const Ge = Math.min(Be, at), Ve = Math.max(Be, at), dt = v.slice(Ge, Ve + 1).map((Me) => Me.id);
                    K(dt);
                  }
                } else ae.metaKey || ae.ctrlKey ? E(P.id) : H(P.id);
            }
          }
        )
      },
      P.id
    )),
    X.section === "video" && /* @__PURE__ */ e.jsx(
      "div",
      {
        "aria-hidden": "true",
        "data-track-header-new-zone": "video",
        style: { height: `${X.zoneHeight}px` }
      }
    ),
    X.section === "audio" && /* @__PURE__ */ e.jsx(
      "div",
      {
        "aria-hidden": "true",
        "data-track-header-new-zone": "audio",
        style: { height: `${X.zoneHeight}px` }
      }
    ),
    X.dropIndicatorLocalIndex >= 0 && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "absolute left-0 right-0 h-0.5 pointer-events-none z-50 shadow-lg bg-primary",
        style: {
          top: Se(
            l,
            X.dropIndicatorLocalIndex,
            X.section === "video" ? Wo : 0
          )
        }
      }
    )
  ] }) }) }) });
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "timeline-bg panel h-full border-t border-border flex flex-col overflow-hidden rounded-sm",
      role: "region",
      "aria-label": "Timeline",
      children: [
        /* @__PURE__ */ e.jsx(
          Bm,
          {
            onZoomChange: z?.handleZoomChange,
            onZoomIn: z?.handleZoomIn,
            onZoomOut: z?.handleZoomOut,
            isScopesPanelOpen: o,
            onToggleScopesPanel: i
          }
        ),
        /* @__PURE__ */ e.jsx(Np, {}),
        /* @__PURE__ */ e.jsxs("div", { ref: p, className: "flex-1 flex overflow-hidden min-h-0", children: [
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: u,
              className: "panel-bg flex flex-shrink-0 flex-col overflow-x-hidden",
              style: { width: St.timelineSidebarWidth },
              children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "flex flex-shrink-0 items-center justify-end border-b border-border bg-secondary/20 px-2",
                    style: { height: St.timelineTracksHeaderHeight },
                    children: /* @__PURE__ */ e.jsxs(ts, { children: [
                      /* @__PURE__ */ e.jsx(ns, { asChild: !0, children: /* @__PURE__ */ e.jsx(
                        Ze,
                        {
                          type: "button",
                          variant: "ghost",
                          size: "icon",
                          className: "h-5 w-5",
                          "aria-label": "Add track",
                          children: /* @__PURE__ */ e.jsx(Wu, { className: "h-3 w-3" })
                        }
                      ) }),
                      /* @__PURE__ */ e.jsxs(rs, { align: "end", children: [
                        /* @__PURE__ */ e.jsx(Pt, { onClick: Xe, children: "Add video track" }),
                        /* @__PURE__ */ e.jsx(Pt, { onClick: vt, children: "Add audio track" })
                      ] })
                    ] })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    ref: L,
                    className: "relative flex-1 overflow-hidden border-r border-border",
                    children: /* @__PURE__ */ e.jsx("div", { ref: I, className: "flex h-full min-h-0 flex-col", children: A ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                      ht(S, {
                        section: "video",
                        height: xe,
                        zoneHeight: 0,
                        scrollRef: C,
                        dropIndicatorLocalIndex: Ne,
                        showTopDividerForFirstTrack: !0
                      }),
                      /* @__PURE__ */ e.jsx(Ul, { onMouseDown: Ae }),
                      ht(J, {
                        section: "audio",
                        height: ve,
                        zoneHeight: ze,
                        scrollRef: D,
                        dropIndicatorLocalIndex: Fe,
                        showTopDividerForFirstTrack: !1
                      })
                    ] }) : ht(nt, {
                      section: qe,
                      height: Je,
                      zoneHeight: pt,
                      scrollRef: V,
                      dropIndicatorLocalIndex: kt,
                      showTopDividerForFirstTrack: !0
                    }) })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            yp,
            {
              duration: t,
              tracks: v,
              scrollRef: h,
              allTracksScrollRef: G,
              videoTracksScrollRef: le,
              audioTracksScrollRef: B,
              videoPaneHeight: xe,
              audioPaneHeight: ve,
              onSectionDividerMouseDown: A ? Ae : void 0,
              onZoomHandlersReady: te,
              onMetricsChange: De
            }
          )
        ] }),
        ye && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-shrink-0 overflow-hidden", children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "panel-bg flex-shrink-0 border-r border-border",
              style: { width: St.timelineSidebarWidth }
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ e.jsx(
            Cp,
            {
              actualDuration: U.actualDuration,
              timelineWidth: U.timelineWidth,
              scrollContainerRef: h
            }
          ) })
        ] }),
        /* @__PURE__ */ e.jsx(Tp, {})
      ]
    }
  );
}), Yo = Fm, Dp = Em, Jl = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsx(
  Fl,
  {
    ref: s,
    className: Pe(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      r
    ),
    ...t
  }
));
Jl.displayName = Fl.displayName;
const eo = n.forwardRef(({ className: r, children: t, hideCloseButton: s, overlayClassName: o, ...i }, c) => /* @__PURE__ */ e.jsxs(Dp, { container: Nn(), children: [
  /* @__PURE__ */ e.jsx(Jl, { className: o }),
  /* @__PURE__ */ e.jsxs(
    Ll,
    {
      ref: c,
      className: Pe(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        r
      ),
      ...i,
      children: [
        t,
        !s && /* @__PURE__ */ e.jsxs(Pm, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ e.jsx(Gn, { className: "h-4 w-4" }),
          /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
eo.displayName = Ll.displayName;
const to = ({
  className: r,
  ...t
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: Pe(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      r
    ),
    ...t
  }
);
to.displayName = "DialogHeader";
const Zo = ({
  className: r,
  ...t
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: Pe(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      r
    ),
    ...t
  }
);
Zo.displayName = "DialogFooter";
const no = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsx(
  Al,
  {
    ref: s,
    className: Pe(
      "text-lg font-semibold leading-none tracking-tight",
      r
    ),
    ...t
  }
));
no.displayName = Al.displayName;
const ro = n.forwardRef(({ className: r, ...t }, s) => /* @__PURE__ */ e.jsx(
  Ol,
  {
    ref: s,
    className: Pe("text-sm text-muted-foreground", r),
    ...t
  }
));
ro.displayName = Ol.displayName;
const mr = 32, jo = 6, Ep = 0.6, Vr = 100, Pp = 500, Fp = 0.8, Ql = "timeline:keyframeEditorMode", Oi = [
  { value: "linear", label: "Linear" },
  { value: "ease-in", label: "Ease In" },
  { value: "ease-in-out", label: "Ease In-Out" },
  { value: "ease-out", label: "Ease Out" }
], ko = [
  { value: "soft", label: "Soft", points: { x1: 0.42, y1: 0, x2: 0.58, y2: 1 } },
  { value: "ease-out", label: "Ease Out", points: { x1: 0.215, y1: 0.61, x2: 0.355, y2: 1 } },
  { value: "ease-in", label: "Ease In", points: { x1: 0.55, y1: 0.055, x2: 0.675, y2: 0.19 } },
  { value: "ease-in-out", label: "Ease In-Out", points: { x1: 0.645, y1: 0.045, x2: 0.355, y2: 1 } },
  { value: "overshoot", label: "Overshoot", points: { x1: 0.34, y1: 1.56, x2: 0.64, y2: 1 } }
], Lp = ["x1", "y1", "x2", "y2"], Ap = ["tension", "friction", "mass"];
function Op(r, t, s) {
  for (const o of s)
    if (r >= o.start && r < o.end) {
      if (t < o.start) return o.start - 1;
      if (t >= o.end) return o.end;
      const i = r - o.start, c = o.end - r;
      return i < c ? o.start - 1 : o.end;
    }
  return r;
}
function To(r, t, s) {
  return t === "volume" ? r.volume ?? 0 : am(r, s, im(r))[t];
}
function Kr(r, t) {
  const s = om(r);
  if (s)
    return {
      type: "cubic-bezier",
      bezier: s
    };
  if (r === "cubic-bezier")
    return {
      type: "cubic-bezier",
      bezier: t?.type === "cubic-bezier" && t.bezier ? t.bezier : { ...hr }
    };
  if (r === "spring")
    return {
      type: "spring",
      spring: t?.type === "spring" && t.spring ? t.spring : { ...Sn }
    };
}
function _i(r, t) {
  return r.x1 === t.x1 && r.y1 === t.y1 && r.x2 === t.x2 && r.y2 === t.y2;
}
function _p(r, t) {
  return r === "x1" || r === "x2" ? Math.max(0, Math.min(1, t)) : Math.max(-2, Math.min(3, t));
}
function zp(r, t) {
  switch (r) {
    case "tension":
      return Math.max(1, Math.min(500, t));
    case "friction":
      return Math.max(1, Math.min(100, t));
    case "mass":
      return Math.max(0.1, Math.min(10, t));
  }
}
function Hp() {
  try {
    const r = localStorage.getItem(Ql);
    if (r === "graph" || r === "dopesheet" || r === "split")
      return r;
  } catch {
  }
  return "graph";
}
const ph = n.memo(function({
  isOpen: t,
  onClose: s,
  placement: o = "bottom"
}) {
  const i = Us(), c = o === "top", m = n.useRef(null), d = n.useRef(null), [b, M] = n.useState(0), [R, N] = n.useState(0), [w, f] = n.useState(0), T = n.useRef(!1), [H, E] = n.useState(Vr), K = mr + (c ? 0 : jo), $ = w > 0 ? Math.max(
    Vr,
    c ? w - mr - 16 : Math.floor(w * Fp) - K
  ) : Pp;
  n.useEffect(() => {
    if (!c && w > 0 && !T.current) {
      T.current = !0;
      const g = mr + jo, q = Math.floor(w * Ep) - g;
      E(Math.max(Vr, Math.min($, q)));
    }
  }, [c, w, $]);
  const [v, Y] = n.useState(!1), S = n.useRef(0), J = n.useRef(0);
  n.useEffect(() => {
    const g = m.current;
    if (!g) return;
    const q = () => {
      M(g.clientWidth), N(g.clientHeight);
    };
    q();
    const we = new ResizeObserver(q);
    return we.observe(g), () => {
      we.disconnect();
    };
  }, [t]), n.useEffect(() => {
    const q = d.current?.parentElement;
    if (!q) return;
    const we = () => f(q.clientHeight);
    we();
    const Ee = new ResizeObserver(we);
    return Ee.observe(q), () => Ee.disconnect();
  }, [t]);
  const A = n.useCallback((g) => {
    g.preventDefault(), g.stopPropagation(), Y(!0), S.current = g.clientY, J.current = H;
  }, [H]);
  n.useEffect(() => {
    if (c || !v) return;
    const g = (we) => {
      const Ee = S.current - we.clientY, Qe = Math.min(
        $,
        Math.max(Vr, J.current + Ee)
      );
      E(Qe);
    }, q = () => {
      Y(!1);
    };
    return document.addEventListener("mousemove", g), document.addEventListener("mouseup", q), () => {
      document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", q);
    };
  }, [v, o, $, c]);
  const p = _e((g) => g.selectedItemIds), u = lt(
    n.useCallback((g) => {
      for (const q of p) {
        const we = g.itemById[q];
        if (we)
          return we;
      }
      return null;
    }, [p])
  ), L = Eo(
    n.useCallback(
      (g) => u ? g.keyframesByItemId[u.id] ?? null : null,
      [u]
    )
  ), I = rn(
    Jt(
      n.useCallback((g) => u ? g.transitions.filter(
        (q) => q.leftClipId === u.id || q.rightClipId === u.id
      ) : [], [u])
    )
  ), h = Eo((g) => g._updateKeyframe), V = Zs((g) => g.currentProject), C = n.useRef(null), D = wn((g) => g.selectedKeyframes), G = wn((g) => g.selectKeyframe), le = wn((g) => g.selectKeyframes), B = wn((g) => g.clearSelection), ge = wn((g) => g.clipboard), z = wn((g) => g.isCut), te = wn((g) => g.copySelectedKeyframes), U = wn((g) => g.cutSelectedKeyframes), De = wn((g) => g.clearClipboard), Ce = Ue((g) => g.currentFrame), [ye, O] = n.useState(null), [W, Ie] = n.useState(() => Hp()), [re, j] = n.useState(0), [x, se] = n.useState({
    x1: String(hr.x1),
    y1: String(hr.y1),
    x2: String(hr.x2),
    y2: String(hr.y2)
  }), [ne, oe] = n.useState({
    tension: String(Sn.tension),
    friction: String(Sn.friction),
    mass: String(Sn.mass)
  }), fe = n.useRef(null);
  n.useEffect(() => {
    try {
      localStorage.setItem(Ql, W);
    } catch {
    }
  }, [W]);
  const je = n.useMemo(() => ({
    width: V?.metadata.width ?? 1920,
    height: V?.metadata.height ?? 1080,
    fps: V?.metadata.fps ?? 30
  }), [V]), xe = n.useMemo(
    () => u ? qu(u) : [],
    [u]
  );
  n.useEffect(() => {
    ye && !xe.includes(ye) && O(null);
  }, [xe, ye]);
  const ve = n.useMemo(() => {
    if (!u) return {};
    const g = new Map(
      (L?.properties ?? []).map((we) => [we.property, we.keyframes])
    ), q = {};
    for (const we of xe)
      q[we] = g.get(we) ?? [];
    return q;
  }, [xe, u, L]), F = n.useMemo(() => {
    if (!u) return /* @__PURE__ */ new Set();
    const g = /* @__PURE__ */ new Set();
    for (const q of D)
      q.itemId === u.id && g.add(q.keyframeId);
    return g;
  }, [D, u]), _ = n.useMemo(() => {
    if (!u || !L) return [];
    const g = [];
    for (const q of D) {
      if (q.itemId !== u.id) continue;
      const we = L.properties.find((Ee) => Ee.property === q.property)?.keyframes.find((Ee) => Ee.id === q.keyframeId);
      we && g.push({ ref: q, keyframe: we });
    }
    return g;
  }, [u, L, D]), ce = n.useMemo(() => {
    if (_.length === 0) return;
    const g = _[0]?.keyframe.easing;
    if (g)
      return _.every(({ keyframe: q }) => q.easing === g) ? g : void 0;
  }, [_]), ie = n.useMemo(() => {
    if (ce !== "cubic-bezier" || _.length === 0)
      return null;
    const g = Kr("cubic-bezier", _[0]?.keyframe.easingConfig);
    return g?.type !== "cubic-bezier" || !g.bezier ? { ...hr } : g.bezier;
  }, [ce, _]), Te = n.useMemo(() => ie ? ko.find((q) => _i(q.points, ie))?.value ?? "custom" : "custom", [ie]), ze = n.useMemo(() => ie ? _.some(({ keyframe: g }) => {
    const q = Kr("cubic-bezier", g.easingConfig);
    return !q?.bezier || !_i(q.bezier, ie);
  }) : !1, [ie, _]), Se = n.useMemo(() => {
    if (ce !== "spring" || _.length === 0)
      return null;
    const g = Kr("spring", _[0]?.keyframe.easingConfig);
    return g?.type !== "spring" || !g.spring ? { ...Sn } : g.spring;
  }, [ce, _]), Ae = n.useMemo(() => Se ? _.some(({ keyframe: g }) => {
    const we = Kr("spring", g.easingConfig)?.spring;
    return !we || we.tension !== Se.tension || we.friction !== Se.friction || we.mass !== Se.mass;
  }) : !1, [_, Se]), We = n.useMemo(() => u ? Math.max(0, Ce - u.from) : 0, [Ce, u]), et = n.useMemo(() => u ? Ju(
    u.id,
    u,
    I
  ) : [], [u, I]);
  n.useEffect(() => {
    ie && se({
      x1: String(ie.x1),
      y1: String(ie.y1),
      x2: String(ie.x2),
      y2: String(ie.y2)
    });
  }, [ie]), n.useEffect(() => {
    Se && oe({
      tension: String(Se.tension),
      friction: String(Se.friction),
      mass: String(Se.mass)
    });
  }, [Se]), n.useEffect(() => {
    const g = fe.current;
    if (!g) {
      j(0);
      return;
    }
    const q = () => {
      j(g.offsetHeight);
    };
    q();
    const we = new ResizeObserver(q);
    return we.observe(g), () => we.disconnect();
  }, [ce, _.length, b]);
  const Ye = n.useCallback(() => {
    C.current = Qu();
  }, []), Xe = n.useCallback(() => {
    const g = C.current;
    g && (em.getState().addUndoEntry(
      { type: "MOVE_KEYFRAME_GRAPH", payload: {} },
      g
    ), br.getState().markDirty(), C.current = null);
  }, []), vt = n.useCallback(
    (g, q, we) => {
      const Qe = L?.properties.find((Rt) => Rt.property === g.property)?.keyframes.find((Rt) => Rt.id === g.keyframeId)?.frame ?? q, Tt = Op(
        Math.max(0, Math.round(q)),
        Qe,
        et
      );
      h(g.itemId, g.property, g.keyframeId, {
        frame: Tt,
        value: we
      });
    },
    [h, L, et]
  ), ft = n.useCallback(
    (g, q) => {
      const Ee = L?.properties.find((Qe) => Qe.property === g.property)?.keyframes.find((Qe) => Qe.id === g.keyframeId)?.easing;
      h(g.itemId, g.property, g.keyframeId, {
        easing: Ee === "ease-in" || Ee === "ease-out" || Ee === "ease-in-out" || Ee === "linear" ? Ee : "cubic-bezier",
        easingConfig: {
          type: "cubic-bezier",
          bezier: q
        }
      });
    },
    [h, L]
  ), ue = n.useCallback(
    (g) => {
      if (!u) return;
      const q = [];
      for (const we of g)
        for (const Ee of L?.properties ?? [])
          if (Ee.keyframes.find((Tt) => Tt.id === we)) {
            q.push({
              itemId: u.id,
              property: Ee.property,
              keyframeId: we
            });
            break;
          }
      q.length === 0 ? B() : q.length === 1 && q[0] ? G(q[0]) : q.length > 1 && le(q);
    },
    [u, L, B, G, le]
  ), Ne = n.useCallback((g) => {
    O(g);
  }, []), Fe = n.useCallback(() => {
    _.length !== 0 && te();
  }, [te, _.length]), qe = n.useCallback(() => {
    _.length !== 0 && U();
  }, [U, _.length]), nt = n.useCallback(
    (g) => {
      if (_.length === 0) return;
      const q = g;
      Wa(
        _.map(({ ref: we, keyframe: Ee }) => ({
          itemId: we.itemId,
          property: we.property,
          keyframeId: we.keyframeId,
          updates: {
            easing: q,
            easingConfig: Kr(q, Ee.easingConfig)
          }
        }))
      );
    },
    [_]
  ), Je = n.useCallback(
    (g) => {
      _.length !== 0 && Wa(
        _.map(({ ref: q, keyframe: we }) => ({
          itemId: q.itemId,
          property: q.property,
          keyframeId: q.keyframeId,
          updates: g(we, q)
        }))
      );
    },
    [_]
  ), pt = n.useCallback(
    (g) => {
      if (g === "custom") return;
      const q = ko.find((we) => we.value === g);
      q && (se({
        x1: String(q.points.x1),
        y1: String(q.points.y1),
        x2: String(q.points.x2),
        y2: String(q.points.y2)
      }), Je(() => ({
        easing: "cubic-bezier",
        easingConfig: {
          type: "cubic-bezier",
          bezier: { ...q.points }
        }
      })));
    },
    [Je]
  ), kt = n.useCallback((g, q) => {
    se((we) => ({ ...we, [g]: q }));
  }, []), ht = n.useCallback(
    (g) => {
      if (!ie) return;
      const q = Number(x[g]);
      if (!Number.isFinite(q)) {
        se((Ee) => ({
          ...Ee,
          [g]: String(ie[g])
        }));
        return;
      }
      const we = {
        ...ie,
        [g]: _p(g, q)
      };
      se({
        x1: String(we.x1),
        y1: String(we.y1),
        x2: String(we.x2),
        y2: String(we.y2)
      }), Je(() => ({
        easing: "cubic-bezier",
        easingConfig: {
          type: "cubic-bezier",
          bezier: we
        }
      }));
    },
    [Je, x, ie]
  ), l = n.useCallback((g, q) => {
    oe((we) => ({ ...we, [g]: q }));
  }, []), X = n.useCallback(
    (g) => {
      if (!Se) return;
      const q = Number(ne[g]);
      if (!Number.isFinite(q)) {
        oe((Ee) => ({
          ...Ee,
          [g]: String(Se[g])
        }));
        return;
      }
      const we = {
        ...Se,
        [g]: zp(g, q)
      };
      oe({
        tension: String(we.tension),
        friction: String(we.friction),
        mass: String(we.mass)
      }), Je(() => ({
        easing: "spring",
        easingConfig: {
          type: "spring",
          spring: we
        }
      }));
    },
    [Je, Se, ne]
  ), P = n.useCallback(
    (g, q) => {
      g.key === "Enter" && (g.preventDefault(), q(), g.currentTarget.blur()), g.key === "Escape" && (g.preventDefault(), g.currentTarget.blur());
    },
    []
  ), be = n.useCallback(() => {
    if (!u || !ge || ge.keyframes.length === 0)
      return;
    const g = (Ke) => et.some((mt) => Ke >= mt.start && Ke < mt.end), q = Math.max(
      0,
      Math.min(u.durationInFrames - 1, We)
    ), we = [];
    let Ee = 0, Qe = 0;
    if (ge.keyframes.forEach((Ke) => {
      if (!xe.includes(Ke.property)) {
        Ee += 1;
        return;
      }
      const mt = Math.max(
        0,
        Math.min(u.durationInFrames - 1, q + Ke.frame)
      );
      if (g(mt)) {
        Qe += 1;
        return;
      }
      we.push({
        itemId: u.id,
        property: Ke.property,
        frame: mt,
        value: Ke.value,
        easing: Ke.easing,
        easingConfig: Ke.easingConfig
      });
    }), z && (Ee > 0 || Qe > 0)) {
      const Ke = [];
      Ee > 0 && Ke.push(`${Ee} unsupported by the selected clip`), Qe > 0 && Ke.push(`${Qe} blocked by transition regions`), jt.warning("Unable to paste cut keyframes here", {
        description: `${Ke.join(". ")}. The cut keyframes stay in the clipboard.`
      });
      return;
    }
    if (we.length === 0) {
      const Ke = [];
      Ee > 0 && Ke.push(
        `${Ee} unsupported by the selected clip`
      ), Qe > 0 && Ke.push(
        `${Qe} blocked by transition regions`
      ), jt.warning("No keyframes pasted", {
        description: Ke.join(". ")
      });
      return;
    }
    const Rt = xo(we).map((Ke, mt) => ({
      itemId: u.id,
      property: we[mt].property,
      keyframeId: Ke
    }));
    Rt.length > 0 ? le(Rt) : B(), z && De();
    const y = Rt.length, Q = Ee + Qe, pe = z ? "Moved" : "Pasted", rt = `${y} keyframe${y === 1 ? "" : "s"}`;
    if (Q > 0) {
      const Ke = [];
      Ee > 0 && Ke.push(
        `${Ee} unsupported by the selected clip`
      ), Qe > 0 && Ke.push(
        `${Qe} blocked by transition regions`
      ), jt.warning(`${pe} ${rt}`, {
        description: `${Q} skipped. ${Ke.join(". ")}`
      });
      return;
    }
    jt.success(`${pe} ${rt}`);
  }, [
    xe,
    De,
    B,
    z,
    ge,
    We,
    le,
    u,
    et
  ]);
  fr(
    i.KEYFRAME_EDITOR_GRAPH,
    (g) => {
      g.preventDefault(), Ie("graph");
    },
    { ...pr, enabled: t },
    [t]
  ), fr(
    i.KEYFRAME_EDITOR_DOPESHEET,
    (g) => {
      g.preventDefault(), Ie("dopesheet");
    },
    { ...pr, enabled: t },
    [t]
  ), fr(
    i.COPY,
    (g) => {
      g.preventDefault(), Fe();
    },
    {
      ...pr,
      enabled: t && _.length > 0
    },
    [Fe, t, _.length]
  ), fr(
    i.CUT,
    (g) => {
      g.preventDefault(), qe();
    },
    {
      ...pr,
      enabled: t && _.length > 0
    },
    [qe, t, _.length]
  ), fr(
    i.PASTE,
    (g) => {
      g.preventDefault(), be();
    },
    {
      ...pr,
      enabled: t && !!u && !!ge
    },
    [be, t, ge, u]
  );
  const ae = n.useCallback(
    (g) => {
      if (!u) return;
      const q = u.from + g;
      Ue.getState().setScrubFrame(q, u.id);
    },
    [u]
  ), Be = n.useCallback(() => {
    Ue.getState().setPreviewFrame(null);
  }, []), at = n.useCallback(
    (g, q) => {
      if (!u) return;
      const we = ve[g] ?? [], Ee = To(u, g, je), Qe = bo(we, q, Ee);
      Ga(
        u.id,
        g,
        q,
        Qe
      );
    },
    [je, ve, u]
  ), Ge = n.useCallback(
    (g) => {
      if (!u || g.length === 0) return;
      const q = g.map(({ property: we, frame: Ee }) => {
        const Qe = ve[we] ?? [], Tt = To(u, we, je), Rt = bo(Qe, Ee, Tt);
        return {
          itemId: u.id,
          property: we,
          frame: Ee,
          value: Rt
        };
      });
      xo(q);
    },
    [je, ve, u]
  ), Ve = n.useCallback(
    (g) => {
      if (!u || g.length === 0) return;
      const q = g.flatMap(({ ref: Qe, frame: Tt, value: Rt }) => {
        const y = ve[Qe.property]?.find(
          (Q) => Q.id === Qe.keyframeId
        );
        return y ? [{
          itemId: u.id,
          property: Qe.property,
          frame: Tt,
          value: Rt,
          easing: y.easing,
          easingConfig: y.easingConfig
        }] : [];
      });
      if (q.length === 0) return;
      const Ee = xo(q).map((Qe, Tt) => ({
        itemId: u.id,
        property: q[Tt].property,
        keyframeId: Qe
      }));
      Ee.length > 0 && le(Ee);
    },
    [ve, le, u]
  ), dt = n.useMemo(() => {
    if (!u) return {};
    const g = {};
    for (const q of xe) {
      const we = ve[q] ?? [], Ee = To(u, q, je);
      g[q] = bo(we, We, Ee);
    }
    return g;
  }, [xe, je, ve, We, u]), Me = n.useCallback(
    (g, q, we) => {
      if (!u) return;
      const Ee = ve[g]?.find(
        (Tt) => Tt.frame === We
      );
      if (Ee) {
        tm(
          u.id,
          g,
          Ee.id,
          { value: q }
        ), G({
          itemId: u.id,
          property: g,
          keyframeId: Ee.id
        });
        return;
      }
      if (we?.allowCreate === !1)
        return;
      const Qe = Ga(
        u.id,
        g,
        We,
        q
      );
      Qe && G({
        itemId: u.id,
        property: g,
        keyframeId: Qe
      });
    },
    [ve, We, G, u]
  ), ut = n.useCallback(
    (g) => {
      g.length !== 0 && nm(g);
    },
    []
  ), Ut = n.useCallback(
    (g) => {
      if (!u) return;
      const q = u.from + g;
      Ue.getState().setCurrentFrame(q);
    },
    [u]
  ), Mt = Math.min(H, $), Ot = t ? mr + jo + Mt : mr, Yt = Math.max(0, b - 16), yt = ce === "cubic-bezier", xt = ce === "spring", Yn = yt || xt, en = c && w > 0 ? Math.max(Vr, w - mr) : 0, ln = c ? R > 0 ? R : en > 0 ? en : Mt : Mt, Zn = Math.max(
    0,
    ln - 16 - re - (Yn ? 8 : 0)
  );
  if (!t)
    return null;
  const gn = /* @__PURE__ */ e.jsx(
    "div",
    {
      "data-resize-handle": !0,
      className: Pe(
        "h-1.5 cursor-ns-resize flex items-center justify-center",
        "bg-secondary/30 hover:bg-primary/30 transition-colors",
        v && "bg-primary/50"
      ),
      onMouseDown: A,
      children: /* @__PURE__ */ e.jsx("div", { className: "w-8 h-0.5 rounded-full bg-muted-foreground/30" })
    }
  );
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: d,
      className: Pe(
        c ? "flex flex-1 min-h-0 h-full flex-col overflow-hidden bg-background border-b border-border" : "flex-shrink-0 bg-background overflow-hidden",
        !c && "border-t border-border",
        t ? "opacity-100" : "opacity-90",
        !v && "transition-all duration-200"
      ),
      style: c ? void 0 : { height: Ot },
      children: [
        o === "bottom" && gn,
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "h-8 flex items-center justify-between gap-2 border-b border-border/50 bg-secondary/20 px-3",
            children: [
              /* @__PURE__ */ e.jsx("div", { className: "flex min-w-0 flex-1 items-center", children: /* @__PURE__ */ e.jsxs("span", { className: "min-w-0 truncate text-xs font-medium text-muted-foreground", children: [
                "Keyframe Editor",
                u && /* @__PURE__ */ e.jsxs("span", { className: "ml-2 text-foreground", children: [
                  "— ",
                  u.label || u.type,
                  /* @__PURE__ */ e.jsxs("span", { className: "ml-1 text-muted-foreground", children: [
                    "(",
                    u.id.slice(0, 8),
                    ")"
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex flex-shrink-0 items-center gap-1", children: [
                /* @__PURE__ */ e.jsx(
                  Ze,
                  {
                    variant: W === "graph" ? "secondary" : "ghost",
                    size: "sm",
                    className: "h-5 px-1.5 text-[10px]",
                    onClick: (g) => {
                      g.stopPropagation(), Ie("graph");
                    },
                    children: "Graph"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  Ze,
                  {
                    variant: W === "dopesheet" ? "secondary" : "ghost",
                    size: "sm",
                    className: "h-5 px-1.5 text-[10px]",
                    onClick: (g) => {
                      g.stopPropagation(), Ie("dopesheet");
                    },
                    children: "Sheet"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  Ze,
                  {
                    variant: W === "split" ? "secondary" : "ghost",
                    size: "sm",
                    className: "h-5 px-1.5 text-[10px]",
                    onClick: (g) => {
                      g.stopPropagation(), Ie("split");
                    },
                    children: "Split"
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "w-px h-4 bg-border/70 mx-1" }),
                /* @__PURE__ */ e.jsxs(
                  Ua,
                  {
                    value: ce,
                    onValueChange: nt,
                    disabled: _.length === 0,
                    children: [
                      /* @__PURE__ */ e.jsx(
                        Ya,
                        {
                          className: "h-5 w-[110px] px-1.5 text-[10px] focus:ring-0 focus:ring-offset-0",
                          onClick: (g) => g.stopPropagation(),
                          onPointerDown: (g) => g.stopPropagation(),
                          "aria-label": "Selected keyframe interpolation",
                          children: /* @__PURE__ */ e.jsx(
                            Za,
                            {
                              placeholder: _.length === 0 ? "Interpolation" : "Mixed easing"
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ e.jsx(qa, { children: Oi.map((g) => /* @__PURE__ */ e.jsx(vo, { value: g.value, className: "text-xs", children: g.label }, g.value)) })
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  Ze,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-5 w-5 p-0",
                    onClick: (g) => {
                      g.stopPropagation(), Fe();
                    },
                    disabled: _.length === 0,
                    title: "Copy selected keyframes",
                    children: /* @__PURE__ */ e.jsx(il, { className: "w-3 h-3" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  Ze,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-5 w-5 p-0",
                    onClick: (g) => {
                      g.stopPropagation(), qe();
                    },
                    disabled: _.length === 0,
                    title: "Cut selected keyframes",
                    children: /* @__PURE__ */ e.jsx(zl, { className: "w-3 h-3" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  Ze,
                  {
                    variant: z ? "secondary" : "ghost",
                    size: "icon",
                    className: "h-5 w-5 p-0",
                    onClick: (g) => {
                      g.stopPropagation(), be();
                    },
                    disabled: !u || !ge,
                    title: z ? "Move keyframes from clipboard" : "Paste keyframes",
                    children: /* @__PURE__ */ e.jsx(rm, { className: "w-3 h-3" })
                  }
                ),
                z && ge && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-medium text-primary", children: "Cut" }),
                /* @__PURE__ */ e.jsx(
                  Ze,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-5 w-5 p-0",
                    onClick: (g) => {
                      g.stopPropagation(), s();
                    },
                    children: /* @__PURE__ */ e.jsx(Gn, { className: "w-3 h-3" })
                  }
                )
              ] })
            ]
          }
        ),
        t && /* @__PURE__ */ e.jsxs(
          "div",
          {
            ref: m,
            className: Pe(
              "flex min-h-0 flex-col p-2",
              c && "min-h-0 flex-1 overflow-auto"
            ),
            style: c ? void 0 : { height: Mt },
            children: [
              Yn && /* @__PURE__ */ e.jsxs(
                "div",
                {
                  ref: fe,
                  className: "mb-2 rounded-md border border-border bg-secondary/20 px-2 py-1.5",
                  children: [
                    yt && ie && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-foreground", children: "Bezier" }),
                      /* @__PURE__ */ e.jsxs(Ua, { value: Te, onValueChange: pt, children: [
                        /* @__PURE__ */ e.jsx(Ya, { className: "h-7 w-[130px] text-xs focus:ring-0 focus:ring-offset-0", children: /* @__PURE__ */ e.jsx(Za, { placeholder: "Preset" }) }),
                        /* @__PURE__ */ e.jsxs(qa, { children: [
                          ko.map((g) => /* @__PURE__ */ e.jsx(vo, { value: g.value, className: "text-xs", children: g.label }, g.value)),
                          /* @__PURE__ */ e.jsx(vo, { value: "custom", className: "text-xs", children: "Custom" })
                        ] })
                      ] }),
                      Lp.map((g) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-1 text-[11px] text-muted-foreground", children: [
                        /* @__PURE__ */ e.jsx("span", { className: "uppercase", children: g }),
                        /* @__PURE__ */ e.jsx(
                          Bs,
                          {
                            value: x[g],
                            onChange: (q) => kt(g, q.target.value),
                            onBlur: () => ht(g),
                            onKeyDown: (q) => P(q, () => ht(g)),
                            className: "h-7 w-16 px-2 text-xs",
                            inputMode: "decimal"
                          }
                        )
                      ] }, g)),
                      /* @__PURE__ */ e.jsx(
                        Ze,
                        {
                          variant: "ghost",
                          size: "sm",
                          className: "h-7 px-2 text-[11px]",
                          onClick: () => pt("soft"),
                          children: "Reset"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-muted-foreground", children: ze ? "Mixed curves selected" : "Drag graph handles for custom curves" })
                    ] }),
                    xt && Se && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-foreground", children: "Spring" }),
                      Ap.map((g) => /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-1 text-[11px] text-muted-foreground", children: [
                        /* @__PURE__ */ e.jsx("span", { className: "capitalize", children: g }),
                        /* @__PURE__ */ e.jsx(
                          Bs,
                          {
                            value: ne[g],
                            onChange: (q) => l(g, q.target.value),
                            onBlur: () => X(g),
                            onKeyDown: (q) => P(q, () => X(g)),
                            className: Pe(
                              "h-7 px-2 text-xs",
                              g === "mass" ? "w-16" : "w-[72px]"
                            ),
                            inputMode: "decimal"
                          }
                        )
                      ] }, g)),
                      /* @__PURE__ */ e.jsx(
                        Ze,
                        {
                          variant: "ghost",
                          size: "sm",
                          className: "h-7 px-2 text-[11px]",
                          onClick: () => {
                            oe({
                              tension: String(Sn.tension),
                              friction: String(Sn.friction),
                              mass: String(Sn.mass)
                            }), Je(() => ({
                              easing: "spring",
                              easingConfig: {
                                type: "spring",
                                spring: { ...Sn }
                              }
                            }));
                          },
                          children: "Reset"
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[11px] text-muted-foreground", children: Ae ? "Mixed spring settings selected" : "Lower friction increases bounce" })
                    ] })
                  ]
                }
              ),
              u && b > 0 ? /* @__PURE__ */ e.jsx($m, { level: "component", children: /* @__PURE__ */ e.jsx(
                sm,
                {
                  itemId: u.id,
                  keyframesByProperty: ve,
                  propertyValues: dt,
                  selectedProperty: ye,
                  selectedKeyframeIds: F,
                  currentFrame: We,
                  globalFrame: Ce,
                  totalFrames: u.durationInFrames,
                  fps: je.fps,
                  width: Yt,
                  height: Zn,
                  onKeyframeMove: vt,
                  onBezierHandleMove: ft,
                  onSelectionChange: ue,
                  onPropertyChange: Ne,
                  onActivePropertyChange: O,
                  onScrub: ae,
                  onScrubEnd: Be,
                  onDragStart: Ye,
                  onDragEnd: Xe,
                  onAddKeyframe: at,
                  onAddKeyframes: Ge,
                  onDuplicateKeyframes: Ve,
                  onPropertyValueCommit: Me,
                  onRemoveKeyframes: ut,
                  onCopyKeyframes: Fe,
                  onCutKeyframes: qe,
                  onPasteKeyframes: be,
                  hasKeyframeClipboard: !!ge?.keyframes.length,
                  isKeyframeClipboardCut: z,
                  selectedInterpolation: ce,
                  interpolationOptions: Oi,
                  onInterpolationChange: nt,
                  interpolationDisabled: _.length === 0,
                  onNavigateToKeyframe: Ut,
                  transitionBlockedRanges: et,
                  visualizationMode: W === "dopesheet" ? "dopesheet" : W === "split" ? "split" : "graph"
                }
              ) }) : /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-1 items-center justify-center rounded-md border border-border bg-muted/15 text-muted-foreground text-sm", children: u ? "Loading..." : "Select an item to view the editor" })
            ]
          }
        )
      ]
    }
  );
}), $p = Am, Bp = Om, ec = n.forwardRef(({ className: r, align: t = "center", sideOffset: s = 4, ...o }, i) => /* @__PURE__ */ e.jsx(Lm, { container: Nn(), children: /* @__PURE__ */ e.jsx(
  _l,
  {
    ref: i,
    align: t,
    sideOffset: s,
    className: Pe(
      "z-50 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "origin-[--radix-popover-content-transform-origin]",
      r
    ),
    ...o
  }
) }));
ec.displayName = _l.displayName;
function zi({ media: r, triggerClassName: t }) {
  const s = Ir(r.mimeType), o = s === "video" ? "Video" : s === "audio" ? "Audio" : "Image", i = [];
  if (i.push({ icon: /* @__PURE__ */ e.jsx(lm, { className: "w-3 h-3" }), label: "Type", value: `${o} (${r.mimeType.split("/")[1]})` }), (s === "video" || s === "audio") && r.duration > 0 && i.push({ icon: /* @__PURE__ */ e.jsx(cm, { className: "w-3 h-3" }), label: "Duration", value: Xs(r.duration) }), (s === "video" || s === "image") && r.width > 0 && r.height > 0 && i.push({ icon: /* @__PURE__ */ e.jsx(dm, { className: "w-3 h-3" }), label: "Dimensions", value: `${r.width} × ${r.height}` }), r.codec && r.codec !== "importing...") {
    let c = r.codec;
    r.audioCodec && (c += ` / ${r.audioCodec}`), i.push({ icon: /* @__PURE__ */ e.jsx(Cr, { className: "w-3 h-3" }), label: "Codec", value: c });
  }
  return i.push({ icon: /* @__PURE__ */ e.jsx(mm, { className: "w-3 h-3" }), label: "Size", value: um(r.fileSize) }), s === "video" && r.fps > 0 && i.push({ icon: /* @__PURE__ */ e.jsx(Cr, { className: "w-3 h-3" }), label: "Frame Rate", value: `${r.fps.toFixed(2)} fps` }), /* @__PURE__ */ e.jsxs($p, { children: [
    /* @__PURE__ */ e.jsx(Bp, { asChild: !0, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: (c) => c.stopPropagation(),
        className: t ?? "p-0.5 rounded bg-black/60 text-white/80 hover:text-white hover:bg-black/80 transition-colors",
        title: "Media info",
        children: /* @__PURE__ */ e.jsx(ll, { className: "w-3 h-3" })
      }
    ) }),
    /* @__PURE__ */ e.jsxs(
      ec,
      {
        side: "right",
        align: "start",
        sideOffset: 8,
        className: "w-56 p-0",
        onClick: (c) => c.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 border-b border-border/50", children: [
            s === "video" && /* @__PURE__ */ e.jsx(hn, { className: "w-3.5 h-3.5 text-primary" }),
            s === "audio" && /* @__PURE__ */ e.jsx(Un, { className: "w-3.5 h-3.5 text-green-500" }),
            s === "image" && /* @__PURE__ */ e.jsx(An, { className: "w-3.5 h-3.5 text-blue-500" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[11px] font-medium text-foreground truncate", children: r.fileName })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "p-3 space-y-1", children: i.map((c) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-[10px]", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground flex-shrink-0", children: c.icon }),
            /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground w-16 flex-shrink-0", children: c.label }),
            /* @__PURE__ */ e.jsx("span", { className: "text-foreground truncate", children: c.value })
          ] }, c.label)) })
        ]
      }
    )
  ] });
}
const tc = "group relative panel-bg border-2 rounded-lg overflow-hidden transition-colors aspect-square flex flex-col", nc = "group panel-bg border rounded overflow-hidden transition-colors flex items-center gap-2 px-2 py-1", Ks = {
  contain: "layout style paint",
  contentVisibility: "auto"
};
function Xp({ media: r, selected: t = !1, isBroken: s = !1, onSelect: o, onDoubleClick: i, onDelete: c, onRelink: m, viewMode: d = "grid" }) {
  const [b, M] = n.useState(null), [R, N] = n.useState(null), w = me((x) => x.selectedMediaIds), f = me((x) => x.mediaItems), T = me((x) => x.importingIds), H = me((x) => x.proxyStatus.get(r.id)), E = me((x) => x.proxyProgress.get(r.id));
  me((x) => x.transcriptStatus.get(r.id) ?? "idle");
  const K = me((x) => x.transcriptProgress.get(r.id)), $ = Ir(r.mimeType), v = T.includes(r.id), Y = dl, S = jn.needsProxy(
    r.width,
    r.height,
    r.mimeType,
    r.audioCodec
  ), J = H === "ready", [A, p] = n.useState(!1), u = n.useRef(null), L = n.useRef(null), I = n.useRef(null), h = n.useRef(null), V = Ft((x) => x.setMediaSkimPreview), C = Ft((x) => x.clearMediaSkimPreview), D = $ === "audio" && !s && !v;
  n.useEffect(() => {
    let x = !0;
    return (async () => {
      const ne = await Wn.getThumbnailBlobUrl(r.id);
      x && M(ne);
    })(), () => {
      x = !1;
    };
  }, [r.id, r.thumbnailId]);
  const G = (x) => {
    x.preventDefault(), x.stopPropagation(), c?.();
  }, le = async (x) => {
    x.preventDefault(), x.stopPropagation();
    try {
      const se = await Wn.getMediaBlobUrl(r.id);
      if (se) {
        const ne = Ms(r);
        jn.setProxyKey(r.id, ne), jn.generateProxy(r.id, se, r.width, r.height, ne);
      }
    } catch {
      me.getState().setProxyStatus(r.id, "error");
    }
  }, B = async (x) => {
    x.preventDefault(), x.stopPropagation();
    try {
      const se = Ms(r);
      await jn.deleteProxy(r.id, se);
      const ne = me.getState();
      for (const oe of ne.mediaItems)
        oe.mimeType.startsWith("video/") && Ms(oe) === se && (ne.clearProxyStatus(oe.id), jn.clearProxyKey(oe.id));
    } catch {
      me.getState().setProxyStatus(r.id, "error");
    }
  }, ge = n.useCallback((x) => {
    x.dataTransfer.effectAllowed = "copy";
    const se = w.includes(r.id), ne = w.length > 1;
    if (se && ne) {
      const je = {
        type: "media-items",
        items: w.map((ve) => f.find((F) => F.id === ve)).filter((ve) => ve !== void 0).map((ve) => ({
          mediaId: ve.id,
          mediaType: Ir(ve.mimeType),
          fileName: ve.fileName,
          duration: ve.duration
        }))
      }, xe = JSON.stringify(je);
      x.dataTransfer.setData("application/json", xe), x.dataTransfer.setData("text/plain", xe), Ho(je);
    } else {
      const fe = {
        type: "media-item",
        mediaId: r.id,
        mediaType: $,
        fileName: r.fileName,
        duration: r.duration
      }, je = JSON.stringify(fe);
      x.dataTransfer.setData("application/json", je), x.dataTransfer.setData("text/plain", je), Ho(fe);
    }
    const oe = L.current ?? x.currentTarget.querySelector("img[alt]");
    if (oe && oe.naturalWidth > 0) {
      const je = oe.naturalWidth / oe.naturalHeight, xe = je >= 1 ? 120 : Math.round(120 * je), ve = je >= 1 ? Math.round(120 / je) : 120, F = document.createElement("div");
      F.style.cssText = `position:fixed;top:-9999px;left:-9999px;width:${xe}px;height:${ve}px;border-radius:4px;overflow:hidden;opacity:0.85;`;
      const _ = document.createElement("img");
      _.src = oe.src, _.style.cssText = "width:100%;height:100%;object-fit:cover;", F.appendChild(_), document.body.appendChild(F), h.current = F, x.dataTransfer.setDragImage(F, xe / 2, ve / 2);
    }
  }, [w, r.id, r.fileName, r.duration, f, $]), z = n.useCallback(() => {
    cl(), h.current && (document.body.removeChild(h.current), h.current = null);
  }, []), te = (x) => {
    o?.(x);
  }, U = ($ === "video" || $ === "image") && !s && !v, De = $ === "video" && r.duration > 0 && !s && !v, Ce = n.useCallback((x) => {
    const se = I.current;
    if (!se || !U) return;
    if (!De) {
      N(null), V(r.id, 0);
      return;
    }
    const ne = se.getBoundingClientRect();
    if (ne.width <= 0) return;
    const oe = Math.max(0, Math.min(1, (x - ne.left) / ne.width)), fe = Math.max(1, Math.round(r.duration * (r.fps || 30))), je = Math.min(fe - 1, Math.max(0, Math.round(oe * (fe - 1))));
    N(oe), V(r.id, je);
  }, [U, De, r.duration, r.fps, r.id, V]), ye = n.useCallback((x) => {
    !U || x.pointerType === "touch" || Ce(x.clientX);
  }, [U, Ce]), O = n.useCallback((x) => {
    !De || x.pointerType === "touch" || Ce(x.clientX);
  }, [De, Ce]), W = n.useCallback(() => {
    U && (N(null), C());
  }, [U, C]);
  n.useEffect(() => {
    if (U)
      return () => {
        Ft.getState().mediaSkimPreviewMediaId === r.id && C();
      };
  }, [U, C, r.id]), n.useEffect(() => () => {
    u.current && (u.current.pause(), URL.revokeObjectURL(u.current.src), u.current = null);
  }, []);
  const Ie = n.useRef(!1), re = n.useCallback(async (x) => {
    if (x.stopPropagation(), x.preventDefault(), A && u.current) {
      u.current.pause(), u.current.currentTime = 0, p(!1);
      return;
    }
    if (u.current) {
      u.current.currentTime = 0, u.current.play(), p(!0);
      return;
    }
    if (!Ie.current) {
      Ie.current = !0;
      try {
        const se = await Wn.getMediaBlobUrl(r.id);
        if (!se) return;
        const ne = u.current;
        if (ne) {
          URL.revokeObjectURL(se), ne.currentTime = 0, ne.play(), p(!0);
          return;
        }
        const oe = new Audio(se);
        oe.addEventListener("ended", () => {
          p(!1);
        }), u.current = oe, oe.play(), p(!0);
      } finally {
        Ie.current = !1;
      }
    }
  }, [A, r.id]);
  K && `${fm(K.stage)}${Math.round(tl(K))}`;
  const j = () => {
    switch ($) {
      case "video":
        return /* @__PURE__ */ e.jsx(hn, { className: "w-5 h-5 text-primary" });
      case "audio":
        return /* @__PURE__ */ e.jsx(Un, { className: "w-5 h-5 text-green-500" });
      case "image":
        return /* @__PURE__ */ e.jsx(An, { className: "w-5 h-5 text-blue-500" });
      default:
        return /* @__PURE__ */ e.jsx(hn, { className: "w-5 h-5 text-muted-foreground" });
    }
  };
  return d === "list" ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: Ks,
      className: `
          ${nc} cursor-pointer
          ${t ? "border-primary ring-1 ring-primary/20" : "border-border hover:border-primary/50"}
          ${v ? "opacity-80 cursor-default" : ""}
        `,
      draggable: !v,
      onDragStart: v ? void 0 : ge,
      onDragEnd: v ? void 0 : z,
      onClick: v ? void 0 : te,
      onDoubleClick: v ? void 0 : (x) => {
        x.stopPropagation(), i?.();
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            ref: I,
            className: "w-12 h-9 bg-secondary rounded overflow-hidden flex-shrink-0 relative",
            onPointerEnter: ye,
            onPointerMove: O,
            onPointerLeave: W,
            children: [
              b ? /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: b,
                  alt: r.fileName,
                  className: "w-full h-full object-contain"
                }
              ) : /* @__PURE__ */ e.jsx("div", { className: "w-full h-full flex items-center justify-center", children: j() }),
              v && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-black/60 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(Qt, { className: "w-4 h-4 text-white animate-spin" }) }),
              s && !v && /* @__PURE__ */ e.jsx("div", { className: "absolute top-0.5 right-0.5 p-0.5 rounded bg-destructive/90 text-destructive-foreground", children: /* @__PURE__ */ e.jsx(wr, { className: "w-2.5 h-2.5" }) }),
              !s && !v && H === "generating" && /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-0.5 right-0.5 p-0.5 rounded bg-primary/90 text-primary-foreground", children: /* @__PURE__ */ e.jsx(Qt, { className: "w-2.5 h-2.5 animate-spin" }) }),
              !s && !v && J && /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-0.5 right-0.5 p-0.5 rounded bg-green-500/90 text-black", children: /* @__PURE__ */ e.jsx(Yr, { className: "w-2.5 h-2.5" }) }),
              De && R !== null && /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "absolute inset-y-0 w-px bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.25)] pointer-events-none",
                  style: { left: `${R * 100}%` }
                }
              ),
              D && /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: re,
                  "aria-label": A ? "Stop audio" : "Play audio",
                  "aria-pressed": A,
                  className: "absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-colors",
                  children: /* @__PURE__ */ e.jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center ${A ? "bg-white/90 text-black" : "bg-black/50 text-white"}`, children: A ? /* @__PURE__ */ e.jsx(Qa, { className: "w-2.5 h-2.5 fill-current" }) : /* @__PURE__ */ e.jsx(Ja, { className: "w-3 h-3 fill-current ml-0.5" }) })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1 min-w-0 flex items-center gap-1.5", children: v ? /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Importing..." }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs("div", { className: "p-0.5 rounded bg-primary/90 text-primary-foreground flex-shrink-0", children: [
            $ === "video" && /* @__PURE__ */ e.jsx(hn, { className: "w-2.5 h-2.5" }),
            $ === "audio" && /* @__PURE__ */ e.jsx(Un, { className: "w-2.5 h-2.5" }),
            $ === "image" && /* @__PURE__ */ e.jsx(An, { className: "w-2.5 h-2.5" })
          ] }),
          /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-medium text-foreground truncate", children: r.fileName }),
          ($ === "video" || $ === "audio") && r.duration > 0 && /* @__PURE__ */ e.jsx("span", { className: "text-[10px] text-muted-foreground flex-shrink-0", children: Xs(r.duration) })
        ] }) }),
        !v && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-0.5 flex-shrink-0", children: [
          /* @__PURE__ */ e.jsx(
            zi,
            {
              media: r,
              triggerClassName: "p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors"
            }
          ),
          /* @__PURE__ */ e.jsxs(ts, { children: [
            /* @__PURE__ */ e.jsx(ns, { asChild: !0, onClick: (x) => x.stopPropagation(), children: /* @__PURE__ */ e.jsx(
              Ze,
              {
                variant: "ghost",
                size: "icon",
                className: "h-6 w-6 transition-all hover:bg-primary/20 hover:text-primary flex-shrink-0",
                children: /* @__PURE__ */ e.jsx(ei, { className: "w-3 h-3" })
              }
            ) }),
            /* @__PURE__ */ e.jsxs(rs, { align: "start", onClick: (x) => x.stopPropagation(), children: [
              s && m && /* @__PURE__ */ e.jsxs(Pt, { onClick: (x) => {
                x.stopPropagation(), m();
              }, className: "text-primary focus:text-primary", children: [
                /* @__PURE__ */ e.jsx(Ln, { className: "w-3 h-3 mr-2" }),
                "Relink File..."
              ] }),
              S && !J && H !== "generating" && /* @__PURE__ */ e.jsxs(Pt, { onClick: le, children: [
                /* @__PURE__ */ e.jsx(Yr, { className: "w-3 h-3 mr-2" }),
                "Generate Proxy"
              ] }),
              Y,
              Y,
              H === "generating" && /* @__PURE__ */ e.jsxs(Pt, { disabled: !0, children: [
                /* @__PURE__ */ e.jsx(Qt, { className: "w-3 h-3 mr-2 animate-spin" }),
                "Generating Proxy",
                E != null ? ` (${Math.round(E * 100)}%)` : "..."
              ] }),
              J && /* @__PURE__ */ e.jsxs(Pt, { onClick: B, className: "text-destructive focus:text-destructive", children: [
                /* @__PURE__ */ e.jsx(sn, { className: "w-3 h-3 mr-2" }),
                "Delete Proxy"
              ] }),
              /* @__PURE__ */ e.jsxs(Pt, { onClick: G, className: "text-destructive focus:text-destructive", children: [
                /* @__PURE__ */ e.jsx(sn, { className: "w-3 h-3 mr-2" }),
                "Delete"
              ] })
            ] })
          ] })
        ] })
      ]
    }
  ) : /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: Ks,
      className: `
        ${tc} cursor-pointer
        ${t ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"}
        ${v ? "cursor-default" : ""}
      `,
      draggable: !v,
      onDragStart: v ? void 0 : ge,
      onDragEnd: v ? void 0 : z,
      onClick: v ? void 0 : te,
      onDoubleClick: v ? void 0 : (x) => {
        x.stopPropagation(), i?.();
      },
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-muted to-secondary" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-muted to-secondary" }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            ref: I,
            className: "flex-1 bg-secondary relative overflow-hidden min-h-0",
            onPointerEnter: ye,
            onPointerMove: O,
            onPointerLeave: W,
            children: [
              b ? /* @__PURE__ */ e.jsx(
                "img",
                {
                  ref: L,
                  src: b,
                  alt: r.fileName,
                  className: "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                }
              ) : /* @__PURE__ */ e.jsx("div", { className: "w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-panel-bg", children: j() }),
              t && !v && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-primary/10 pointer-events-none" }),
              v && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 pointer-events-none", children: [
                /* @__PURE__ */ e.jsx(Qt, { className: "w-6 h-6 text-white animate-spin" }),
                /* @__PURE__ */ e.jsx("div", { className: "text-[9px] text-white/60 uppercase tracking-wider", children: "Importing" })
              ] }),
              !v && /* @__PURE__ */ e.jsxs("div", { className: "absolute top-1 right-1 z-10 flex flex-col items-end gap-0.5", children: [
                s && /* @__PURE__ */ e.jsx("div", { className: "p-1 rounded bg-destructive/90 text-destructive-foreground", children: /* @__PURE__ */ e.jsx(wr, { className: "w-3 h-3" }) }),
                !s && H === "generating" && /* @__PURE__ */ e.jsx("div", { className: "p-0.5 rounded bg-amber-500/90 text-black pointer-events-none", children: /* @__PURE__ */ e.jsx(Qt, { className: "w-2.5 h-2.5 animate-spin" }) }),
                !s && J && /* @__PURE__ */ e.jsx("div", { className: "p-0.5 rounded bg-green-500/90 text-black pointer-events-none", children: /* @__PURE__ */ e.jsx(Yr, { className: "w-2.5 h-2.5" }) }),
                /* @__PURE__ */ e.jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ e.jsx(zi, { media: r }) })
              ] }),
              D && /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: re,
                  "aria-label": A ? "Stop audio" : "Play audio",
                  "aria-pressed": A,
                  className: "absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-colors group/play",
                  children: /* @__PURE__ */ e.jsx("div", { className: `w-10 h-10 rounded-full flex items-center justify-center transition-all ${A ? "bg-white/90 text-black" : "bg-black/50 text-white group-hover/play:bg-white/90 group-hover/play:text-black"}`, children: A ? /* @__PURE__ */ e.jsx(Qa, { className: "w-4 h-4 fill-current" }) : /* @__PURE__ */ e.jsx(Ja, { className: "w-5 h-5 fill-current ml-0.5" }) })
                }
              ),
              !v && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-x-0 bottom-0 px-1.5 py-1 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between gap-1 pointer-events-none", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "p-0.5 rounded bg-primary/90 text-primary-foreground", children: [
                  $ === "video" && /* @__PURE__ */ e.jsx(hn, { className: "w-2.5 h-2.5" }),
                  $ === "audio" && /* @__PURE__ */ e.jsx(Un, { className: "w-2.5 h-2.5" }),
                  $ === "image" && /* @__PURE__ */ e.jsx(An, { className: "w-2.5 h-2.5" })
                ] }),
                ($ === "video" || $ === "audio") && r.duration > 0 && /* @__PURE__ */ e.jsx("div", { className: "px-1 py-0.5 bg-black/70 border border-white/20 rounded text-[8px] font-mono text-white", children: Xs(r.duration) })
              ] }),
              De && R !== null && /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "absolute inset-y-0 w-px bg-white/85 shadow-[0_0_0_1px_rgba(0,0,0,0.3)] pointer-events-none",
                  style: { left: `${R * 100}%` }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "px-1.5 py-1 bg-panel-bg/50 flex-shrink-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ e.jsx("h3", { className: "text-[10px] font-medium text-foreground truncate group-hover:text-primary transition-colors", children: r.fileName }) }),
          !v && /* @__PURE__ */ e.jsxs(ts, { children: [
            /* @__PURE__ */ e.jsx(ns, { asChild: !0, onClick: (x) => x.stopPropagation(), children: /* @__PURE__ */ e.jsx(
              Ze,
              {
                variant: "ghost",
                size: "icon",
                className: "h-5 w-5 transition-all hover:bg-primary/20 hover:text-primary flex-shrink-0",
                children: /* @__PURE__ */ e.jsx(ei, { className: "w-2.5 h-2.5" })
              }
            ) }),
            /* @__PURE__ */ e.jsxs(rs, { align: "start", onClick: (x) => x.stopPropagation(), children: [
              s && m && /* @__PURE__ */ e.jsxs(Pt, { onClick: (x) => {
                x.stopPropagation(), m();
              }, className: "text-primary focus:text-primary", children: [
                /* @__PURE__ */ e.jsx(Ln, { className: "w-3 h-3 mr-2" }),
                "Relink File..."
              ] }),
              S && !J && H !== "generating" && /* @__PURE__ */ e.jsxs(Pt, { onClick: le, children: [
                /* @__PURE__ */ e.jsx(Yr, { className: "w-3 h-3 mr-2" }),
                "Generate Proxy"
              ] }),
              Y,
              Y,
              H === "generating" && /* @__PURE__ */ e.jsxs(Pt, { disabled: !0, children: [
                /* @__PURE__ */ e.jsx(Qt, { className: "w-3 h-3 mr-2 animate-spin" }),
                "Generating Proxy",
                E != null ? ` (${Math.round(E * 100)}%)` : "..."
              ] }),
              J && /* @__PURE__ */ e.jsxs(Pt, { onClick: B, className: "text-destructive focus:text-destructive", children: [
                /* @__PURE__ */ e.jsx(sn, { className: "w-3 h-3 mr-2" }),
                "Delete Proxy"
              ] }),
              /* @__PURE__ */ e.jsxs(Pt, { onClick: G, className: "text-destructive focus:text-destructive", children: [
                /* @__PURE__ */ e.jsx(sn, { className: "w-3 h-3 mr-2" }),
                "Delete"
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border via-muted to-border opacity-50" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border via-muted to-border opacity-50" })
      ]
    }
  );
}
function Vp(r) {
  const [t, s] = n.useState(() => Math.max(0, (Date.now() - r) / 1e3));
  return n.useEffect(() => {
    const o = setInterval(() => s(Math.max(0, (Date.now() - r) / 1e3)), 1e3);
    return () => clearInterval(o);
  }, [r]), t;
}
function Kp({
  pending: r,
  viewMode: t = "grid"
}) {
  const s = Vp(r.createdAt), o = r.estimatedTimeSeconds, i = o && o > 0 ? Math.min(0.95, s / o) : null;
  return t === "list" ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      "data-kubeez-pending-id": r.id,
      className: "panel-bg flex min-h-[3.25rem] items-stretch gap-3 overflow-hidden rounded-lg border border-dashed border-primary/35",
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex w-12 shrink-0 items-center justify-center border-r border-border/50 bg-muted/40", children: /* @__PURE__ */ e.jsx(Qt, { className: "h-5 w-5 animate-spin text-primary/50", "aria-hidden": !0 }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-1 flex-col justify-center gap-0.5 py-2 pr-2", children: [
          /* @__PURE__ */ e.jsx("p", { className: "truncate text-xs font-medium text-foreground", children: r.modelDisplayName }),
          /* @__PURE__ */ e.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Generating…" })
        ] })
      ]
    }
  ) : /* @__PURE__ */ e.jsxs(
    "div",
    {
      "data-kubeez-pending-id": r.id,
      className: "panel-bg relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-primary/30 bg-muted/10",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative mb-2 flex items-center justify-center", children: [
          /* @__PURE__ */ e.jsxs("svg", { className: "h-12 w-12 -rotate-90", viewBox: "0 0 44 44", children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: "22",
                cy: "22",
                r: "18",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.5",
                className: "text-muted/30"
              }
            ),
            i != null && /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: "22",
                cy: "22",
                r: "18",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeDasharray: `${2 * Math.PI * 18}`,
                strokeDashoffset: `${2 * Math.PI * 18 * (1 - i)}`,
                className: "text-primary transition-[stroke-dashoffset] duration-1000 ease-linear"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: Pe(
            "absolute text-[10px] font-bold tabular-nums",
            i != null ? "text-foreground" : "text-muted-foreground"
          ), children: i != null ? `${Math.round(i * 100)}%` : /* @__PURE__ */ e.jsx(Qt, { className: "h-4 w-4 animate-spin text-primary/50" }) })
        ] }),
        /* @__PURE__ */ e.jsx("p", { className: "max-w-full truncate px-2 text-[10px] font-medium text-foreground/70", children: r.modelDisplayName })
      ]
    }
  );
}
const Ws = {
  1: 80,
  2: 110,
  3: 140,
  4: 200,
  5: 280
}, Gs = {
  1: "gap-1",
  2: "gap-1.5",
  3: "gap-2",
  4: "gap-3",
  5: "gap-3"
}, No = an("MediaGrid"), rc = n.memo(function({
  onMediaSelect: t,
  viewMode: s = "grid",
  itemSize: o = 3,
  items: i,
  kubeezPendingForCategory: c
}) {
  const [m, d] = n.useState(!1), [b, M] = n.useState(null), R = n.useRef(null), N = ul(), w = i ?? N, f = me((B) => B.currentProjectId), T = me((B) => B.kubeezPendingGenerations), H = me((B) => B.isLoading), E = n.useMemo(() => {
    if (!f) return [];
    const B = T.filter((z) => z.projectId === f);
    return i !== void 0 ? c == null ? [] : B.filter((z) => z.filterMimeCategory === c) : B;
  }, [f, T, c, i]), K = w.length > 0 || E.length > 0, $ = me((B) => B.selectedMediaIds), v = me((B) => B.selectedCompositionIds), Y = me((B) => B.brokenMediaIds), S = me((B) => B.toggleMediaSelection), J = me((B) => B.setSelection), A = me((B) => B.deleteMedia), p = me((B) => B.relinkMedia), u = me((B) => B.importMedia), L = Ft((B) => B.setSourcePreviewMediaId), I = n.useMemo(() => b ? ml([b]) : { itemIds: [], rootReferenceCount: 0, nestedReferenceCount: 0, totalReferenceCount: 0 }, [b]), h = (B, ge) => {
    if (ge?.shiftKey && R.current) {
      const z = w.findIndex((U) => U.id === R.current), te = w.findIndex((U) => U.id === B);
      if (z !== -1 && te !== -1) {
        const U = Math.min(z, te), De = Math.max(z, te), Ce = w.slice(U, De + 1).map((ye) => ye.id);
        if (ge.ctrlKey || ge.metaKey) {
          const ye = [.../* @__PURE__ */ new Set([...$, ...Ce])];
          J({ mediaIds: ye, compositionIds: v });
        } else
          J({ mediaIds: Ce, compositionIds: [] });
      }
    } else ge?.ctrlKey || ge?.metaKey ? (S(B), R.current = B) : (J({ mediaIds: [B], compositionIds: [] }), R.current = B);
    t?.(B);
  }, V = (B) => {
    M(B), d(!0);
  }, C = async () => {
    if (b) {
      d(!1);
      try {
        I.itemIds.length > 0 && pl(I.itemIds), await A(b);
      } catch (B) {
        No.error("Failed to delete media:", B);
      } finally {
        M(null);
      }
    }
  }, D = () => {
    d(!1), M(null);
  }, G = async (B) => {
    try {
      const z = (await window.showOpenFilePicker({
        multiple: !1,
        types: [
          {
            description: "Media files",
            accept: {
              "video/*": [".mp4", ".webm", ".mov", ".avi", ".mkv"],
              "audio/*": [".mp3", ".wav", ".ogg", ".m4a", ".aac"],
              "image/*": [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]
            }
          }
        ]
      }))[0];
      if (!z) return;
      await p(B, z);
    } catch (ge) {
      ge instanceof Error && ge.name !== "AbortError" && No.error("Failed to relink media:", ge);
    }
  }, le = async () => {
    try {
      await u();
    } catch (B) {
      No.error("Import failed:", B);
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex min-h-0 flex-1 flex-col", children: [
    !i && H ? /* @__PURE__ */ e.jsx("div", { className: "flex flex-1 py-4", children: /* @__PURE__ */ e.jsxs("div", { className: "m-auto flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx(Qt, { className: "w-12 h-12 animate-spin text-primary" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 w-12 h-12 rounded-full border-2 border-primary/20 animate-pulse" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-sm font-mono text-foreground tracking-wider mb-1", children: "LOADING MEDIA LIBRARY" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-xs text-muted-foreground font-mono", children: "Initializing storage..." })
      ] })
    ] }) }) : !i && !K ? /* @__PURE__ */ e.jsx("div", { className: "flex flex-1 py-4", children: /* @__PURE__ */ e.jsxs("div", { className: "m-auto max-w-md text-center", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "w-16 h-16 mx-auto mb-3 rounded-full border-2 border-dashed border-border flex items-center justify-center bg-secondary hover:border-primary/50 hover:bg-secondary/80 cursor-pointer transition-colors",
          onClick: le,
          children: /* @__PURE__ */ e.jsx(fl, { className: "w-8 h-8 text-muted-foreground" })
        }
      ),
      /* @__PURE__ */ e.jsx("p", { className: "text-base font-bold text-foreground mb-1 tracking-wide", children: "NO MEDIA FILES" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-muted-foreground font-light mb-2", children: "Drag and drop files or click to browse" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap justify-center gap-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "MP4" }),
        /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "WebM" }),
        /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "MOV" }),
        /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "MP3" }),
        /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "WAV" }),
        /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "JPG" }),
        /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "PNG" })
      ] })
    ] }) }) : /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: s === "grid" ? `grid ${Gs[o] ?? Gs[3]}` : "space-y-1",
        style: s === "grid" ? { gridTemplateColumns: `repeat(auto-fill, minmax(min(${Ws[o] ?? Ws[3]}px, 100%), 1fr))` } : void 0,
        children: [
          E.map((B) => /* @__PURE__ */ e.jsx("div", { "data-kubeez-pending-wrap": B.id, children: /* @__PURE__ */ e.jsx(Kp, { pending: B, viewMode: s }) }, B.id)),
          w.map((B) => /* @__PURE__ */ e.jsx(
            "div",
            {
              "data-media-id": B.id,
              children: /* @__PURE__ */ e.jsx(
                Xp,
                {
                  media: B,
                  selected: $.includes(B.id),
                  isBroken: Y.includes(B.id),
                  onSelect: (ge) => h(B.id, ge),
                  onDoubleClick: () => L(B.id),
                  onDelete: () => V(B.id),
                  onRelink: () => G(B.id),
                  viewMode: s
                }
              )
            },
            B.id
          ))
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(os, { open: m, onOpenChange: (B) => !B && D(), children: /* @__PURE__ */ e.jsxs(kr, { children: [
      /* @__PURE__ */ e.jsxs(Tr, { children: [
        /* @__PURE__ */ e.jsx(Mr, { children: "Delete media file?" }),
        /* @__PURE__ */ e.jsx(Rr, { asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ e.jsxs("p", { children: [
            'Are you sure you want to delete "',
            w.find((B) => B.id === b)?.fileName,
            '"? This action cannot be undone.'
          ] }),
          I.totalReferenceCount > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-2 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-md", children: [
            /* @__PURE__ */ e.jsx(Qr, { className: "w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-yellow-600 dark:text-yellow-400", children: [
              /* @__PURE__ */ e.jsx("p", { className: "font-medium", children: "Timeline clips will be removed" }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-xs mt-1 text-yellow-600/80 dark:text-yellow-400/80", children: [
                I.totalReferenceCount,
                " clip",
                I.totalReferenceCount > 1 ? "s" : "",
                " across the timeline and nested compound clips reference this media and will also be deleted."
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsxs(Nr, { children: [
        /* @__PURE__ */ e.jsx(Er, { onClick: D, children: "Cancel" }),
        /* @__PURE__ */ e.jsxs(Dr, { onClick: C, className: "bg-destructive text-destructive-foreground hover:bg-destructive/90", children: [
          "Delete",
          I.totalReferenceCount > 0 ? ` & ${I.totalReferenceCount} clip${I.totalReferenceCount > 1 ? "s" : ""}` : ""
        ] })
      ] })
    ] }) })
  ] });
});
function Wp() {
  const r = $t((I) => I.compositions), t = $t((I) => I.compositionById), s = Gt((I) => I.enterComposition), o = Gt((I) => I.activeCompositionId), i = me((I) => I.viewMode), c = me((I) => I.mediaItemSize), m = me((I) => I.selectedMediaIds), d = me((I) => I.selectedCompositionIds), b = me((I) => I.toggleCompositionSelection), M = me((I) => I.setSelection), [R, N] = n.useState(!0), [w, f] = n.useState(null), [T, H] = n.useState(null), [E, K] = n.useState(""), $ = n.useRef(!1), v = n.useRef(null), Y = (I) => {
    s(I.id, I.name);
  }, S = (I) => {
    f(I);
  }, J = n.useCallback(
    (I, h) => {
      if (h?.shiftKey && v.current) {
        const V = r.findIndex((D) => D.id === v.current), C = r.findIndex((D) => D.id === I);
        if (V !== -1 && C !== -1) {
          const D = Math.min(V, C), G = Math.max(V, C), le = r.slice(D, G + 1).map((B) => B.id);
          h.ctrlKey || h.metaKey ? M({
            mediaIds: m,
            compositionIds: [.../* @__PURE__ */ new Set([...d, ...le])]
          }) : M({ mediaIds: [], compositionIds: le });
          return;
        }
      }
      if (h?.ctrlKey || h?.metaKey) {
        b(I), v.current = I;
        return;
      }
      M({ mediaIds: [], compositionIds: [I] }), v.current = I;
    },
    [r, d, m, M, b]
  ), A = () => {
    w && (vl([w.id]), M({
      mediaIds: m,
      compositionIds: d.filter((I) => I !== w.id)
    }), f(null));
  }, p = (I) => {
    H(I.id), K(I.name);
  }, u = (I) => {
    if ($.current) {
      $.current = !1, H(null);
      return;
    }
    const h = E.trim();
    h && h !== $t.getState().getComposition(I)?.name && pm(I, h), H(null);
  }, L = w ? hl([w.id]) : { totalReferenceCount: 0 };
  return r.length === 0 ? null : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(gl, { open: R, onOpenChange: N, children: [
      /* @__PURE__ */ e.jsxs(xl, { className: "flex items-center gap-2 w-full py-2 hover:bg-secondary/50 rounded-md px-2 -mx-2 transition-colors", children: [
        /* @__PURE__ */ e.jsx(
          Ys,
          {
            className: Pe(
              "w-3 h-3 text-muted-foreground transition-transform",
              R && "rotate-90"
            )
          }
        ),
        /* @__PURE__ */ e.jsx(Ur, { className: "w-3 h-3 text-violet-400" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-xs font-semibold tracking-wide uppercase text-muted-foreground", children: "Compound Clips" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-[10px] tabular-nums text-muted-foreground/60", children: r.length })
      ] }),
      /* @__PURE__ */ e.jsx(
        bl,
        {
          className: Pe(
            "pt-1 pb-2",
            i === "grid" ? `grid ${Gs[c] ?? Gs[3]}` : "space-y-1"
          ),
          style: i === "grid" ? { gridTemplateColumns: `repeat(auto-fill, minmax(min(${Ws[c] ?? Ws[3]}px, 100%), 1fr))` } : void 0,
          children: r.map((I) => /* @__PURE__ */ e.jsx(
            Gp,
            {
              composition: I,
              viewMode: i,
              selected: d.includes(I.id),
              dragDisabled: Hs({
                parentCompositionId: o,
                insertedCompositionId: I.id,
                compositionById: t
              }),
              isEditing: T === I.id,
              editValue: E,
              onEditValueChange: K,
              onSelect: (h) => J(I.id, h),
              onEnter: Y,
              onDelete: S,
              onStartRename: p,
              onCommitRename: u,
              onCancelRename: () => {
                $.current = !0, H(null);
              }
            },
            I.id
          ))
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(os, { open: w !== null, onOpenChange: (I) => !I && f(null), children: /* @__PURE__ */ e.jsxs(kr, { children: [
      /* @__PURE__ */ e.jsxs(Tr, { children: [
        /* @__PURE__ */ e.jsx(Mr, { children: "Delete compound clip?" }),
        /* @__PURE__ */ e.jsx(Rr, { asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ e.jsxs("p", { children: [
            "Are you sure you want to delete “",
            w?.name,
            "”? This action cannot be undone."
          ] }),
          L.totalReferenceCount > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-2 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-md", children: [
            /* @__PURE__ */ e.jsx(sn, { className: "w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-yellow-600 dark:text-yellow-400", children: [
              /* @__PURE__ */ e.jsx("p", { className: "font-medium", children: "All remaining instances will be removed" }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-xs mt-1 text-yellow-600/80 dark:text-yellow-400/80", children: [
                L.totalReferenceCount,
                " compound clip instance",
                L.totalReferenceCount > 1 ? "s" : "",
                " across the timeline and nested compound clips will also be deleted."
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsxs(Nr, { children: [
        /* @__PURE__ */ e.jsx(Er, { children: "Cancel" }),
        /* @__PURE__ */ e.jsx(
          Dr,
          {
            onClick: A,
            className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            children: "Delete"
          }
        )
      ] })
    ] }) })
  ] });
}
function Gp({
  composition: r,
  viewMode: t,
  selected: s,
  dragDisabled: o,
  isEditing: i,
  editValue: c,
  onEditValueChange: m,
  onSelect: d,
  onEnter: b,
  onDelete: M,
  onStartRename: R,
  onCommitRename: N,
  onCancelRename: w
}) {
  const f = n.useRef(null), T = n.useRef(null), [H, E] = n.useState(null), [K, $] = n.useState(null), v = $t(
    n.useCallback((z) => z.compositionById[r.id], [r.id])
  ), Y = Ft((z) => z.setCompoundClipSkimPreview), S = Ft((z) => z.clearCompoundClipSkimPreview);
  n.useEffect(() => {
    i && f.current && (f.current.focus(), f.current.select());
  }, [i]), n.useEffect(() => {
    let z = !0;
    return (async () => {
      const U = await hm.getThumbnailBlobUrl(r.id);
      z && E(U);
    })(), () => {
      z = !1, Ft.getState().compoundClipSkimPreviewCompositionId === r.id && S();
    };
  }, [S, r.id, v]);
  const J = n.useCallback(
    (z) => {
      if (o) {
        z.preventDefault();
        return;
      }
      const te = {
        type: "composition",
        compositionId: r.id,
        name: r.name,
        durationInFrames: r.durationInFrames,
        width: r.width,
        height: r.height
      }, U = JSON.stringify(te);
      z.dataTransfer.setData("application/json", U), z.dataTransfer.setData("text/plain", U), z.dataTransfer.effectAllowed = "copy", Ho(te);
    },
    [r, o]
  ), A = n.useCallback(() => {
    cl();
  }, []), p = n.useCallback(() => {
    b(r);
  }, [r, b]), u = n.useCallback(
    (z) => {
      z.key === "Enter" ? N(r.id) : z.key === "Escape" && w();
    },
    [r.id, N, w]
  ), L = n.useCallback(
    (z) => {
      i || d(z);
    },
    [i, d]
  ), I = r.durationInFrames > 0, h = n.useCallback((z) => {
    const te = T.current;
    if (!te || !I) return;
    const U = te.getBoundingClientRect();
    if (U.width <= 0) return;
    const De = Math.max(0, Math.min(1, (z - U.left) / U.width)), Ce = Math.min(
      r.durationInFrames - 1,
      Math.max(0, Math.round(De * Math.max(0, r.durationInFrames - 1)))
    );
    $(De), Y(r.id, Ce);
  }, [I, r.durationInFrames, r.id, Y]), V = n.useCallback((z) => {
    !I || z.pointerType === "touch" || h(z.clientX);
  }, [I, h]), C = n.useCallback((z) => {
    !I || z.pointerType === "touch" || h(z.clientX);
  }, [I, h]), D = n.useCallback(() => {
    I && ($(null), S());
  }, [I, S]), G = r.items.length, le = r.fps || 30, B = r.durationInFrames / le, ge = B < 60 ? `${B.toFixed(1)}s` : `${Math.floor(B / 60)}:${String(Math.floor(B % 60)).padStart(2, "0")}`;
  return t === "grid" ? /* @__PURE__ */ e.jsxs(On, { children: [
    /* @__PURE__ */ e.jsx(_n, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        "data-composition-id": r.id,
        draggable: !o && !i,
        onDragStart: J,
        onDragEnd: A,
        onClick: L,
        onDoubleClick: p,
        style: Ks,
        className: Pe(
          tc,
          o ? "opacity-50 cursor-not-allowed border-border" : Pe(
            "cursor-grab",
            s ? "border-violet-500 ring-2 ring-violet-500/20 shadow-lg shadow-violet-500/10" : "border-border hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10"
          )
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: T,
              className: "flex-1 bg-secondary relative overflow-hidden min-h-0 flex items-center justify-center bg-gradient-to-br from-violet-600/20 to-violet-900/30",
              onPointerEnter: V,
              onPointerMove: C,
              onPointerLeave: D,
              children: [
                H ? /* @__PURE__ */ e.jsx(
                  "img",
                  {
                    src: H,
                    alt: r.name,
                    className: "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  }
                ) : /* @__PURE__ */ e.jsx(Ur, { className: "w-8 h-8 text-violet-400/70" }),
                /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-x-0 bottom-0 px-1.5 py-1 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between gap-1 pointer-events-none", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "p-0.5 rounded bg-violet-600/90 text-white", children: /* @__PURE__ */ e.jsx(Ur, { className: "w-2.5 h-2.5" }) }),
                  /* @__PURE__ */ e.jsx("div", { className: "px-1 py-0.5 bg-black/70 border border-white/20 rounded text-[8px] font-mono text-white", children: ge })
                ] }),
                K !== null && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "absolute inset-y-0 w-px bg-white/85 shadow-[0_0_0_1px_rgba(0,0,0,0.3)] pointer-events-none",
                    style: { left: `${K * 100}%` }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: "px-1.5 py-1 bg-panel-bg/50 flex-shrink-0", children: /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-1", children: /* @__PURE__ */ e.jsx("div", { className: "flex-1 min-w-0", children: i ? /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: f,
              value: c,
              onChange: (z) => m(z.target.value),
              onBlur: () => N(r.id),
              onKeyDown: u,
              className: "w-full bg-transparent border border-primary rounded px-1 py-0.5 text-[10px] text-foreground outline-none"
            }
          ) : /* @__PURE__ */ e.jsx("h3", { className: "text-[10px] font-medium text-foreground truncate group-hover:text-violet-400 transition-colors", children: r.name }) }) }) }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border via-muted to-border opacity-50" }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border via-muted to-border opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ e.jsxs(Tn, { children: [
      /* @__PURE__ */ e.jsx(it, { onClick: () => b(r), children: "Enter Compound Clip" }),
      /* @__PURE__ */ e.jsx(it, { onClick: () => R(r), children: "Rename" }),
      /* @__PURE__ */ e.jsx(
        it,
        {
          onClick: () => M(r),
          className: "text-destructive focus:text-destructive",
          children: "Delete"
        }
      )
    ] })
  ] }) : /* @__PURE__ */ e.jsxs(On, { children: [
    /* @__PURE__ */ e.jsx(_n, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        "data-composition-id": r.id,
        draggable: !o && !i,
        onDragStart: J,
        onDragEnd: A,
        onClick: L,
        onDoubleClick: p,
        style: Ks,
        className: Pe(
          nc,
          o ? "opacity-50 cursor-not-allowed border-border" : Pe(
            "cursor-grab",
            s ? "border-violet-500 ring-1 ring-violet-500/20" : "border-border hover:border-violet-500/50"
          )
        ),
        children: [
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              ref: T,
              className: "w-16 h-12 bg-secondary rounded overflow-hidden flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-violet-600/20 to-violet-900/30 relative",
              onPointerEnter: V,
              onPointerMove: C,
              onPointerLeave: D,
              children: [
                H ? /* @__PURE__ */ e.jsx(
                  "img",
                  {
                    src: H,
                    alt: r.name,
                    className: "w-full h-full object-contain"
                  }
                ) : /* @__PURE__ */ e.jsx(Ur, { className: "w-5 h-5 text-violet-400" }),
                K !== null && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "absolute inset-y-0 w-px bg-white/85 shadow-[0_0_0_1px_rgba(0,0,0,0.3)] pointer-events-none",
                    style: { left: `${K * 100}%` }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
            i ? /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: f,
                value: c,
                onChange: (z) => m(z.target.value),
                onBlur: () => N(r.id),
                onKeyDown: u,
                className: "w-full bg-transparent border border-primary rounded px-1 py-0.5 text-xs text-foreground outline-none"
              }
            ) : /* @__PURE__ */ e.jsx("h3", { className: "text-xs font-medium text-foreground truncate", children: r.name }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
              /* @__PURE__ */ e.jsx("div", { className: "p-0.5 rounded bg-violet-600/90 text-white flex-shrink-0", children: /* @__PURE__ */ e.jsx(Ur, { className: "w-2.5 h-2.5" }) }),
              /* @__PURE__ */ e.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                ge,
                " · ",
                G,
                " item",
                G !== 1 ? "s" : ""
              ] })
            ] })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ e.jsxs(Tn, { children: [
      /* @__PURE__ */ e.jsx(it, { onClick: () => b(r), children: "Enter Compound Clip" }),
      /* @__PURE__ */ e.jsx(it, { onClick: () => R(r), children: "Rename" }),
      /* @__PURE__ */ e.jsx(
        it,
        {
          onClick: () => M(r),
          className: "text-destructive focus:text-destructive",
          children: "Delete"
        }
      )
    ] })
  ] });
}
const Wr = an("MissingMediaDialog");
function Up() {
  const r = me((h) => h.showMissingMediaDialog), t = me((h) => h.closeMissingMediaDialog), s = me((h) => h.brokenMediaInfo), o = me((h) => h.relinkMedia), i = me((h) => h.relinkMediaBatch), c = me((h) => h.markMediaHealthy), m = Zs((h) => h.currentProject), d = m?.rootFolderHandle, b = m?.rootFolderName, [M, R] = n.useState(null), [N, w] = n.useState(!1), [f, T] = n.useState(!1), [H, E] = n.useState(/* @__PURE__ */ new Set()), [K, $] = n.useState(!1), v = n.useMemo(
    () => Array.from(s.values()).filter(
      (h) => !H.has(h.mediaId)
    ),
    [s, H]
  ), Y = v.filter(
    (h) => h.errorType === "permission_denied"
  ), S = v.filter((h) => h.errorType === "file_missing"), J = n.useCallback(async (h, V) => {
    const C = [];
    for await (const D of h.values())
      if (D.kind === "file") {
        const G = V.find(
          (le) => le.fileName.toLowerCase() === D.name.toLowerCase()
        );
        G && C.push({
          mediaId: G.mediaId,
          handle: D
        });
      }
    return C;
  }, []), A = n.useCallback(async () => {
    if (!(!d || v.length === 0)) {
      T(!0);
      try {
        if (await d.queryPermission({ mode: "read" }) !== "granted" && await d.requestPermission({ mode: "read" }) !== "granted") {
          Wr.warn("Permission denied for project folder");
          return;
        }
        const V = await J(d, v);
        if (V.length > 0) {
          const { success: C } = await i(V);
          E((D) => /* @__PURE__ */ new Set([...D, ...C])), Wr.info(`Auto-relinked ${C.length} files from project folder`);
        }
      } catch (h) {
        h instanceof Error && h.name !== "AbortError" && Wr.error("Project folder scan failed:", h);
      } finally {
        T(!1);
      }
    }
  }, [d, v, i, J]);
  n.useEffect(() => {
    r && d && v.length > 0 && !K && ($(!0), A());
  }, [r, d, v.length, K, A]), n.useEffect(() => {
    r || $(!1);
  }, [r]);
  const p = async (h) => {
    R(h);
    try {
      const C = (await window.showOpenFilePicker({
        multiple: !1,
        types: [
          {
            description: "Media files",
            accept: {
              "video/*": [".mp4", ".webm", ".mov", ".avi", ".mkv"],
              "audio/*": [".mp3", ".wav", ".ogg", ".m4a", ".aac"],
              "image/*": [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]
            }
          }
        ]
      }))[0];
      if (!C) return;
      await o(h, C) && E((G) => /* @__PURE__ */ new Set([...G, h]));
    } catch (V) {
      V instanceof Error && V.name !== "AbortError" && Wr.error("Relink failed:", V);
    } finally {
      R(null);
    }
  }, u = async () => {
    w(!0);
    try {
      const h = await window.showDirectoryPicker({
        mode: "read"
      }), V = await J(h, v);
      if (V.length > 0) {
        const { success: C } = await i(V);
        E((D) => /* @__PURE__ */ new Set([...D, ...C]));
      }
    } catch (h) {
      h instanceof Error && h.name !== "AbortError" && Wr.error("Folder scan failed:", h);
    } finally {
      w(!1);
    }
  }, L = () => {
    v.forEach((h) => c(h.mediaId)), E(/* @__PURE__ */ new Set()), t();
  }, I = () => {
    E(/* @__PURE__ */ new Set()), t();
  };
  return r && v.length === 0 ? (I(), null) : /* @__PURE__ */ e.jsx(Yo, { open: r, onOpenChange: (h) => !h && I(), children: /* @__PURE__ */ e.jsxs(eo, { className: "sm:max-w-[600px] max-h-[80vh]", children: [
    /* @__PURE__ */ e.jsxs(to, { children: [
      /* @__PURE__ */ e.jsxs(no, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(wr, { className: "w-5 h-5 text-destructive" }),
        "Missing Media Files"
      ] }),
      /* @__PURE__ */ e.jsxs(ro, { children: [
        v.length,
        " media file",
        v.length !== 1 ? "s" : "",
        " could not be located."
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 py-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2 text-xs", children: [
        Y.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 px-2 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded", children: [
          /* @__PURE__ */ e.jsx(Qr, { className: "w-3 h-3 text-yellow-500" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            Y.length,
            " need permission"
          ] })
        ] }),
        S.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 px-2 py-1 bg-destructive/10 border border-destructive/30 rounded", children: [
          /* @__PURE__ */ e.jsx(Gn, { className: "w-3 h-3 text-destructive" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            S.length,
            " not found"
          ] })
        ] })
      ] }),
      d && /* @__PURE__ */ e.jsxs(
        Ze,
        {
          variant: "default",
          className: "w-full",
          onClick: A,
          disabled: f,
          children: [
            f ? /* @__PURE__ */ e.jsx(Ln, { className: "w-4 h-4 mr-2 animate-spin" }) : /* @__PURE__ */ e.jsx(gm, { className: "w-4 h-4 mr-2" }),
            "Scan Project Folder (",
            b,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        Ze,
        {
          variant: "outline",
          className: "w-full",
          onClick: u,
          disabled: N,
          children: [
            N ? /* @__PURE__ */ e.jsx(Ln, { className: "w-4 h-4 mr-2 animate-spin" }) : /* @__PURE__ */ e.jsx(yl, { className: "w-4 h-4 mr-2" }),
            d ? "Browse Another Folder..." : "Locate Folder (auto-match by filename)"
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto space-y-2 pr-2", children: v.map((h) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-border",
          children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `p-1.5 rounded ${h.errorType === "permission_denied" ? "bg-yellow-500/20" : "bg-destructive/20"}`,
                children: h.errorType === "permission_denied" ? /* @__PURE__ */ e.jsx(Qr, { className: "w-4 h-4 text-yellow-500" }) : /* @__PURE__ */ e.jsx(Gn, { className: "w-4 h-4 text-destructive" })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium truncate", children: h.fileName }),
              /* @__PURE__ */ e.jsx("p", { className: "text-xs text-muted-foreground", children: h.errorType === "permission_denied" ? "Permission expired - relink to restore" : "File moved or deleted" })
            ] }),
            /* @__PURE__ */ e.jsx(
              Ze,
              {
                size: "sm",
                variant: "outline",
                onClick: () => p(h.mediaId),
                disabled: M === h.mediaId,
                children: M === h.mediaId ? /* @__PURE__ */ e.jsx(Ln, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsx(qs, { className: "w-3 h-3 mr-1" }),
                  "Locate"
                ] })
              }
            )
          ]
        },
        h.mediaId
      )) })
    ] }),
    /* @__PURE__ */ e.jsxs(Zo, { className: "flex-col sm:flex-row gap-2", children: [
      /* @__PURE__ */ e.jsx(
        Ze,
        {
          variant: "ghost",
          onClick: L,
          className: "text-muted-foreground",
          children: "Work Offline"
        }
      ),
      /* @__PURE__ */ e.jsx(Ze, { variant: "outline", onClick: I, children: "Close" })
    ] })
  ] }) });
}
const Yp = {
  video: hn,
  audio: Un,
  image: An,
  unknown: Cr
};
function Zp({
  media: r,
  onSelect: t
}) {
  const [s, o] = n.useState(null), i = Ir(r.mimeType), c = Yp[i] || Cr;
  return n.useEffect(() => {
    let m = !0;
    return Wn.getThumbnailBlobUrl(r.id).then((d) => {
      m && o(d);
    }), () => {
      m = !1;
    };
  }, [r.id]), /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: t,
      className: "group flex flex-col overflow-hidden rounded-lg border border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:bg-card hover:shadow-md",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative aspect-video w-full overflow-hidden bg-secondary/50", children: [
          s ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: s,
              alt: r.fileName,
              className: "h-full w-full object-cover transition-transform group-hover:scale-105"
            }
          ) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ e.jsx(c, { className: "h-6 w-6 text-muted-foreground/40" }) }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-white/90", children: i === "audio" || i === "video" ? Xs(r.duration) : r.width && r.height ? `${r.width}×${r.height}` : i })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1.5", children: /* @__PURE__ */ e.jsx("p", { className: "truncate text-[11px] font-medium leading-tight text-foreground/80 group-hover:text-foreground", children: r.fileName }) })
      ]
    }
  );
}
function qp({
  open: r,
  onClose: t,
  onSelect: s,
  filterType: o,
  filterItem: i,
  title: c = "Select Media",
  description: m
}) {
  const d = me((f) => f.mediaItems), b = me((f) => f.isLoading), [M, R] = n.useState("");
  n.useEffect(() => {
    r && R("");
  }, [r]);
  const N = n.useMemo(() => {
    let f = d;
    if (o) {
      const T = `${o}/`;
      f = f.filter((H) => H.mimeType.startsWith(T));
    }
    if (i && (f = f.filter(i)), M.trim()) {
      const T = M.toLowerCase();
      f = f.filter((H) => H.fileName.toLowerCase().includes(T));
    }
    return f;
  }, [d, o, i, M]), w = (f) => {
    s(f), t();
  };
  return /* @__PURE__ */ e.jsx(Yo, { open: r, onOpenChange: (f) => !f && t(), children: /* @__PURE__ */ e.jsxs(eo, { className: "flex h-[min(70vh,520px)] w-[min(92vw,540px)] max-w-[540px] flex-col gap-0 overflow-hidden p-0", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "shrink-0 space-y-3 border-b border-border/60 px-4 pb-3 pt-4", children: [
      /* @__PURE__ */ e.jsxs(to, { className: "space-y-1", children: [
        /* @__PURE__ */ e.jsx(no, { className: "text-sm font-semibold", children: c }),
        m && /* @__PURE__ */ e.jsx(ro, { className: "text-[11px]", children: m })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx(qs, { className: "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ e.jsx(
          Bs,
          {
            placeholder: "Search...",
            value: M,
            onChange: (f) => R(f.target.value),
            className: "h-8 pl-8 text-xs"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "min-h-0 flex-1 overflow-y-auto p-3 [scrollbar-width:thin]", children: b ? /* @__PURE__ */ e.jsx("div", { className: "flex min-h-[200px] items-center justify-center", children: /* @__PURE__ */ e.jsx(Qt, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }) : N.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "flex min-h-[200px] flex-col items-center justify-center gap-2 text-center", children: [
      /* @__PURE__ */ e.jsx(Cr, { className: "h-8 w-8 text-muted-foreground/30" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-xs text-muted-foreground", children: M ? "No media matches your search." : o ? `No ${o} files in library.` : "No media in library." })
    ] }) : /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-3 gap-2", children: N.map((f) => /* @__PURE__ */ e.jsx(
      Zp,
      {
        media: f,
        onSelect: () => w(f.id)
      },
      f.id
    )) }) })
  ] }) });
}
const Ss = an("OrphanedClipsDialog"), Jp = {
  video: hn,
  audio: sl,
  image: An
};
function Qp() {
  const r = me((p) => p.showOrphanedClipsDialog), t = me((p) => p.closeOrphanedClipsDialog), s = me((p) => p.orphanedClips), o = me((p) => p.mediaItems), i = me((p) => p.relinkOrphanedClip), c = me((p) => p.removeOrphanedClips), [m, d] = n.useState(null), [b, M] = n.useState(!1), [R, N] = n.useState(/* @__PURE__ */ new Set()), [w, f] = n.useState(!1), [T, H] = n.useState(null), E = n.useMemo(
    () => s.filter((p) => !R.has(p.itemId)),
    [s, R]
  ), K = n.useCallback(async () => {
    M(!0);
    try {
      const p = xm(E, o);
      if (p.size === 0) {
        Ss.info("No auto-matches found");
        return;
      }
      for (const [u, L] of p)
        d(u), await i(u, L) && N((h) => /* @__PURE__ */ new Set([...h, u]));
      Ss.info(`Auto-matched ${p.size} clip(s)`);
    } catch (p) {
      Ss.error("Auto-match failed:", p);
    } finally {
      M(!1), d(null);
    }
  }, [E, o, i]), $ = n.useCallback((p) => {
    H(p), f(!0);
  }, []), v = n.useCallback(async (p) => {
    if (T) {
      f(!1), d(T.itemId);
      try {
        await i(T.itemId, p) && N((L) => /* @__PURE__ */ new Set([...L, T.itemId]));
      } catch (u) {
        Ss.error("Relink failed:", u);
      } finally {
        d(null), H(null);
      }
    }
  }, [T, i]), Y = n.useCallback((p) => {
    c([p]), N((u) => /* @__PURE__ */ new Set([...u, p]));
  }, [c]), S = n.useCallback(() => {
    const p = E.map((u) => u.itemId);
    c(p), N(/* @__PURE__ */ new Set()), t();
  }, [E, c, t]), J = n.useCallback(() => {
    N(/* @__PURE__ */ new Set()), t();
  }, [t]), A = n.useCallback(() => {
    N(/* @__PURE__ */ new Set()), t();
  }, [t]);
  return n.useEffect(() => {
    r && E.length === 0 && A();
  }, [r, E.length, A]), !r || E.length === 0 ? null : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(Yo, { open: r, onOpenChange: (p) => !p && A(), children: /* @__PURE__ */ e.jsxs(eo, { className: "max-h-[80vh] w-[min(92vw,960px)] max-w-[960px]", children: [
      /* @__PURE__ */ e.jsxs(to, { children: [
        /* @__PURE__ */ e.jsxs(no, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(wr, { className: "w-5 h-5 text-destructive" }),
          "Missing Media References"
        ] }),
        /* @__PURE__ */ e.jsxs(ro, { children: [
          E.length,
          " timeline clip",
          E.length !== 1 ? "s" : "",
          " reference",
          E.length === 1 ? "s" : "",
          " media that no longer exists."
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 py-4", children: [
        /* @__PURE__ */ e.jsxs(
          Ze,
          {
            variant: "outline",
            className: "w-full",
            onClick: K,
            disabled: b || o.length === 0,
            children: [
              b ? /* @__PURE__ */ e.jsx(Ln, { className: "w-4 h-4 mr-2 animate-spin" }) : /* @__PURE__ */ e.jsx(_m, { className: "w-4 h-4 mr-2" }),
              "Auto-match from Library (by filename)"
            ]
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "max-h-[300px] overflow-y-auto space-y-2 pr-2", children: E.map((p) => {
          const u = Jp[p.itemType];
          return /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: "flex items-start gap-3 rounded-lg border border-border bg-secondary/50 p-3",
              children: [
                /* @__PURE__ */ e.jsx("div", { className: "p-1.5 rounded bg-destructive/20", children: /* @__PURE__ */ e.jsx(u, { className: "w-4 h-4 text-destructive" }) }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium leading-snug break-words", children: p.fileName }),
                  /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    p.itemType,
                    " clip - Media deleted"
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex shrink-0 gap-1 self-center", children: [
                  /* @__PURE__ */ e.jsx(
                    Ze,
                    {
                      size: "sm",
                      variant: "outline",
                      onClick: () => $(p),
                      disabled: m === p.itemId,
                      children: m === p.itemId ? /* @__PURE__ */ e.jsx(Ln, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                        /* @__PURE__ */ e.jsx(qs, { className: "w-3 h-3 mr-1" }),
                        "Select"
                      ] })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    Ze,
                    {
                      size: "sm",
                      variant: "ghost",
                      onClick: () => Y(p.itemId),
                      className: "text-muted-foreground hover:text-destructive",
                      children: /* @__PURE__ */ e.jsx(sn, { className: "w-3 h-3" })
                    }
                  )
                ] })
              ]
            },
            p.itemId
          );
        }) })
      ] }),
      /* @__PURE__ */ e.jsxs(Zo, { className: "flex-col sm:flex-row gap-2", children: [
        /* @__PURE__ */ e.jsxs(
          Ze,
          {
            variant: "destructive",
            onClick: S,
            className: "order-2 sm:order-1",
            children: [
              /* @__PURE__ */ e.jsx(sn, { className: "w-4 h-4 mr-2" }),
              "Remove All Clips"
            ]
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ e.jsx(
          Ze,
          {
            variant: "ghost",
            onClick: J,
            className: "text-muted-foreground order-1 sm:order-2",
            children: "Keep as Broken"
          }
        ),
        /* @__PURE__ */ e.jsx(Ze, { variant: "outline", onClick: A, className: "order-3", children: "Close" })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(
      qp,
      {
        open: w,
        onClose: () => {
          f(!1), H(null);
        },
        onSelect: v,
        filterType: T?.itemType,
        title: `Select replacement for "${T?.fileName}"`
      }
    )
  ] });
}
function eh({
  open: r,
  files: t,
  onConfirm: s,
  onCancel: o
}) {
  return /* @__PURE__ */ e.jsx(os, { open: r, onOpenChange: (i) => !i && o(), children: /* @__PURE__ */ e.jsxs(kr, { className: "sm:max-w-[500px] overflow-hidden", children: [
    /* @__PURE__ */ e.jsxs(Tr, { className: "overflow-hidden", children: [
      /* @__PURE__ */ e.jsxs(Mr, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(ol, { className: "w-5 h-5 text-yellow-500 shrink-0" }),
        "Unsupported Audio Codec"
      ] }),
      /* @__PURE__ */ e.jsx(Rr, { asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e.jsxs("p", { children: [
          t.length === 1 ? "This file uses" : `${t.length} files use`,
          " ",
          "an audio codec that cannot be decoded in the browser. Audio waveform visualization will not be available."
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "max-h-[200px] overflow-y-auto overflow-x-hidden space-y-2", children: t.map((i, c) => /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "grid grid-cols-[auto_1fr_auto] items-center gap-2 p-2 bg-secondary/50 rounded text-sm",
            children: [
              /* @__PURE__ */ e.jsx(al, { className: "w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ e.jsx("span", { className: "truncate", title: i.fileName, children: i.fileName }),
              /* @__PURE__ */ e.jsx("span", { className: "text-xs text-muted-foreground px-1.5 py-0.5 bg-secondary rounded uppercase whitespace-nowrap", children: i.audioCodec })
            ]
          },
          c
        )) }),
        /* @__PURE__ */ e.jsx("p", { className: "text-xs text-muted-foreground", children: "Video playback and editing will work normally. Only audio waveform display is affected." })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs(Nr, { children: [
      /* @__PURE__ */ e.jsx(Er, { onClick: o, children: "Cancel Import" }),
      /* @__PURE__ */ e.jsx(Dr, { onClick: s, children: "Import Anyway" })
    ] })
  ] }) });
}
const th = Js((r) => ({
  isOpen: !1,
  open: () => r({ isOpen: !0 }),
  close: () => r({ isOpen: !1 })
})), js = an("MediaLibrary");
function nh({ text: r }) {
  const [t, s] = n.useState(!1), o = n.useCallback(() => {
    navigator.clipboard.writeText(r), s(!0), setTimeout(() => s(!1), 2e3);
  }, [r]);
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: o,
      className: "inline-flex items-center justify-center h-5 w-5 rounded hover:bg-muted transition-colors",
      title: "Copy to clipboard",
      children: t ? /* @__PURE__ */ e.jsx(Im, { className: "h-3 w-3 text-green-500" }) : /* @__PURE__ */ e.jsx(il, { className: "h-3 w-3 text-muted-foreground" })
    }
  );
}
const rh = {
  video: hn,
  audio: Un,
  image: An,
  gif: Cr
};
function Hi(r) {
  return r === "video" ? "video" : r === "audio" ? "audio" : r === "image" ? "image" : null;
}
const sh = n.memo(function({
  groupKey: t,
  label: s,
  icon: o,
  items: i,
  isOpen: c,
  onToggle: m,
  onMediaSelect: d,
  viewMode: b,
  itemSize: M
}) {
  const R = rh[o], N = me((T) => T.currentProjectId), w = me((T) => T.kubeezPendingGenerations), f = n.useMemo(() => {
    const T = Hi(t);
    return !N || !T ? 0 : w.filter(
      (H) => H.projectId === N && H.filterMimeCategory === T
    ).length;
  }, [N, t, w]);
  return /* @__PURE__ */ e.jsxs(gl, { open: c, onOpenChange: (T) => m(t, T), children: [
    /* @__PURE__ */ e.jsxs(xl, { className: "flex items-center gap-2 w-full py-2 hover:bg-secondary/50 rounded-md px-2 -mx-2 transition-colors", children: [
      /* @__PURE__ */ e.jsx(
        Ys,
        {
          className: Pe(
            "w-3 h-3 text-muted-foreground transition-transform",
            c && "rotate-90"
          )
        }
      ),
      /* @__PURE__ */ e.jsx(R, { className: "w-3 h-3 text-muted-foreground" }),
      /* @__PURE__ */ e.jsx("span", { className: "text-xs font-semibold tracking-wide uppercase text-muted-foreground", children: s }),
      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] tabular-nums text-muted-foreground/60", children: i.length + f })
    ] }),
    /* @__PURE__ */ e.jsx(bl, { className: "pt-1 pb-2", children: /* @__PURE__ */ e.jsx(
      rc,
      {
        items: i,
        onMediaSelect: d,
        viewMode: b,
        itemSize: M,
        kubeezPendingForCategory: Hi(t)
      }
    ) })
  ] });
}), hh = n.memo(function({ onMediaSelect: t }) {
  const s = n.useRef(null), o = n.useRef(null), i = n.useRef(!1), [c, m] = n.useState(!1), [d, b] = n.useState({ mediaIds: [], compositionIds: [] }), [M, R] = n.useState(() => /* @__PURE__ */ new Set(["video", "audio", "image", "gif"])), [N, w] = n.useState(!1);
  th((l) => l.open);
  const f = me((l) => l.currentProjectId), T = me((l) => l.setCurrentProject), H = me((l) => l.loadMediaItems), E = me((l) => l.importMedia), K = me((l) => l.importHandles), $ = me((l) => l.deleteMediaBatch), v = me((l) => l.showNotification), Y = me((l) => l.searchQuery), S = me((l) => l.setSearchQuery), J = me((l) => l.filterByType), A = me((l) => l.setFilterByType), p = me((l) => l.sortBy), u = me((l) => l.setSortBy), L = me((l) => l.viewMode), I = me((l) => l.setViewMode), h = me((l) => l.mediaItemSize), V = me((l) => l.setMediaItemSize), C = me((l) => l.selectedMediaIds), D = me((l) => l.selectedCompositionIds), G = me((l) => l.setSelection), le = me((l) => l.mediaById), B = me((l) => l.clearSelection), ge = me((l) => l.error), z = me((l) => l.errorLink), te = me((l) => l.clearError), U = me((l) => l.notification), De = me((l) => l.clearNotification), Ce = me((l) => l.brokenMediaIds), ye = me((l) => l.openMissingMediaDialog), O = Zs((l) => l.currentProject?.id ?? null), W = me((l) => l.proxyStatus), Ie = me((l) => l.proxyProgress), re = me((l) => l.kubeezPendingGenerations), j = ul(), x = n.useMemo(() => {
    const l = [], X = [], P = [], be = [], ae = [];
    for (const Me of j)
      if (Me.mimeType === "image/gif")
        be.push(Me);
      else {
        const ut = Ir(Me.mimeType);
        ut === "video" ? X.push(Me) : ut === "audio" ? P.push(Me) : ae.push(Me);
      }
    const Be = f, at = (Me) => Be ? re.filter((ut) => ut.projectId === Be && ut.filterMimeCategory === Me).length : 0, Ge = at("video") > 0, Ve = at("audio") > 0, dt = at("image") > 0;
    return (X.length > 0 || Ge) && l.push({ key: "video", label: "Videos", icon: "video", items: X }), (P.length > 0 || Ve) && l.push({ key: "audio", label: "Audio", icon: "audio", items: P }), (ae.length > 0 || dt) && l.push({ key: "image", label: "Images", icon: "image", items: ae }), be.length > 0 && l.push({ key: "gif", label: "GIFs", icon: "gif", items: be }), l;
  }, [j, f, re]), se = $t((l) => l.compositions), ne = Gt((l) => l.activeCompositionId), oe = Gt((l) => l.breadcrumbs), fe = Gt((l) => l.exitComposition), je = oe.length > 1 ? oe[oe.length - 1]?.label : null, xe = me((l) => l.unsupportedCodecFiles), ve = me((l) => l.showUnsupportedCodecDialog), F = me((l) => l.resolveUnsupportedCodecDialog);
  n.useEffect(() => {
    !f && O && (T(O), H().catch((l) => {
      js.error("Failed to load media library during store recovery:", l);
    }));
  }, [f, H, O, T]);
  const _ = C.length + D.length, ce = d.mediaIds.length + d.compositionIds.length, ie = n.useMemo(
    () => [
      ...se.map((l) => ({
        id: `composition:${l.id}`,
        getBoundingRect: () => {
          const X = o.current?.querySelector(`[data-composition-id="${l.id}"]`);
          if (!X) return null;
          const P = X.getBoundingClientRect();
          return {
            left: P.left,
            top: P.top,
            right: P.right,
            bottom: P.bottom,
            width: P.width,
            height: P.height
          };
        }
      })),
      ...j.map((l) => ({
        id: `media:${l.id}`,
        getBoundingRect: () => {
          const X = o.current?.querySelector(`[data-media-id="${l.id}"]`);
          if (!X) return null;
          const P = X.getBoundingClientRect();
          return {
            left: P.left,
            top: P.top,
            right: P.right,
            bottom: P.bottom,
            width: P.width,
            height: P.height
          };
        }
      }))
    ],
    [se, j]
  ), { marqueeState: Te } = $l({
    containerRef: o,
    items: ie,
    enabled: ie.length > 0,
    onSelectionChange: (l) => {
      const X = [], P = [];
      for (const be of l)
        be.startsWith("media:") ? X.push(be.slice(6)) : be.startsWith("composition:") && P.push(be.slice(12));
      G({ mediaIds: X, compositionIds: P });
    }
  });
  n.useEffect(() => {
    const l = (X) => {
      s.current?.contains(X.target) ? i.current = !0 : (i.current = !1, _ > 0 && B());
    };
    return document.addEventListener("mousedown", l, !0), () => {
      document.removeEventListener("mousedown", l, !0);
    };
  }, [_, B]), n.useEffect(() => {
    const l = (X) => {
      if (X.key !== "Delete" || !i.current || _ === 0 || c) return;
      const P = X.target;
      P.tagName === "INPUT" || P.tagName === "TEXTAREA" || P.isContentEditable || (X.preventDefault(), b({
        mediaIds: [...C],
        compositionIds: [...D]
      }), m(!0));
    };
    return document.addEventListener("keydown", l), () => {
      document.removeEventListener("keydown", l);
    };
  }, [_, D, C, c]);
  const ze = async () => {
    try {
      await E();
    } catch (l) {
      js.error("Import failed:", l);
    }
  }, Se = n.useCallback(async (l) => {
    try {
      await K(l);
    } catch (X) {
      js.error("Import failed:", X);
    }
  }, [K]), Ae = n.useRef(0), We = n.useCallback((l) => {
    l.preventDefault(), l.stopPropagation(), Ae.current++, Ae.current === 1 && !l.dataTransfer.types.includes("application/json") && w(!0);
  }, []), et = n.useCallback((l) => {
    l.preventDefault(), l.stopPropagation(), l.dataTransfer.dropEffect = "copy";
  }, []), Ye = n.useCallback((l) => {
    l.preventDefault(), l.stopPropagation(), Ae.current--, Ae.current <= 0 && (Ae.current = 0, w(!1));
  }, []), Xe = n.useCallback(async (l) => {
    l.preventDefault(), l.stopPropagation(), Ae.current = 0, w(!1);
    try {
      const ae = l.dataTransfer.getData("application/json");
      if (ae) {
        const Be = JSON.parse(ae);
        if (Be.type === "media-item" || Be.type === "media-items" || Be.type === "composition")
          return;
      }
    } catch {
    }
    const { supported: X, entries: P, errors: be } = await _s(l.dataTransfer);
    if (!X) {
      v({ type: "warning", message: "Drag-drop not supported in this browser. Use Chrome or Edge." });
      return;
    }
    be.length > 0 && v({ type: "error", message: `Some files were rejected: ${be.join(", ")}` }), P.length > 0 && await Se(P.map((ae) => ae.handle));
  }, [v, Se]), vt = n.useMemo(() => {
    let l = 0;
    for (const X of W.values())
      X === "generating" && l++;
    return l;
  }, [W]), ft = n.useMemo(() => {
    if (vt === 0) return 0;
    let l = 0, X = 0;
    for (const [P, be] of W.entries())
      be === "generating" && (l += Ie.get(P) ?? 0, X++);
    return X > 0 ? l / X : 0;
  }, [W, Ie, vt]), ue = async () => {
    const l = C.map((P) => le[P]).filter(
      (P) => P !== void 0 && jn.needsProxy(P.width, P.height, P.mimeType, P.audioCodec) && W.get(P.id) !== "ready" && W.get(P.id) !== "generating"
    ), X = await Promise.all(
      l.map((P) => Wn.getMediaBlobUrl(P.id))
    );
    l.forEach((P, be) => {
      const ae = X[be];
      if (ae) {
        const Be = Ms(P);
        jn.setProxyKey(P.id, Be), jn.generateProxy(P.id, ae, P.width, P.height, Be);
      }
    });
  }, Ne = n.useMemo(() => C.filter((l) => {
    const X = le[l];
    return X && jn.needsProxy(X.width, X.height, X.mimeType, X.audioCodec) && W.get(l) !== "ready" && W.get(l) !== "generating";
  }).length, [C, le, W]), Fe = n.useMemo(() => {
    const l = [];
    return d.mediaIds.length > 0 && l.push(`${d.mediaIds.length} media item${d.mediaIds.length === 1 ? "" : "s"}`), d.compositionIds.length > 0 && l.push(`${d.compositionIds.length} compound clip${d.compositionIds.length === 1 ? "" : "s"}`), l.join(" and ");
  }, [d.compositionIds.length, d.mediaIds.length]), qe = n.useMemo(() => d.mediaIds.length > 0 ? ml(d.mediaIds) : { itemIds: [], rootReferenceCount: 0, nestedReferenceCount: 0, totalReferenceCount: 0 }, [d.mediaIds]), nt = n.useMemo(() => d.compositionIds.length > 0 ? hl(d.compositionIds) : { rootReferenceCount: 0, nestedReferenceCount: 0, totalReferenceCount: 0 }, [d.compositionIds]), Je = qe.totalReferenceCount + nt.totalReferenceCount, pt = () => {
    _ !== 0 && (b({
      mediaIds: [...C],
      compositionIds: [...D]
    }), m(!0));
  }, kt = async () => {
    m(!1);
    try {
      qe.itemIds.length > 0 && pl(qe.itemIds), d.mediaIds.length > 0 && await $(d.mediaIds), d.compositionIds.length > 0 && vl(d.compositionIds), B(), b({ mediaIds: [], compositionIds: [] });
    } catch (l) {
      js.error("Delete failed:", l), b({ mediaIds: [], compositionIds: [] });
    }
  }, ht = n.useCallback((l) => {
    if (Vm()) return;
    l.target.closest("[data-media-id], [data-composition-id]") || B();
  }, [B]);
  return /* @__PURE__ */ e.jsxs("div", { ref: s, className: "h-full flex flex-col", children: [
    /* @__PURE__ */ e.jsx("div", { className: "px-3 py-2 border-b border-border flex-shrink-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: ze,
          disabled: !f,
          className: `flex items-center gap-1.5 h-7 px-2.5 rounded-md
              bg-primary text-primary-foreground
              hover:bg-primary/90
              disabled:opacity-40 disabled:cursor-not-allowed
              transition-colors duration-150`,
          title: "Import media files",
          children: [
            /* @__PURE__ */ e.jsx(yl, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "Import" })
          ]
        }
      ),
      dl,
      Ce.length > 0 && /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: ye,
          className: `flex items-center gap-1.5 h-7 px-2.5 rounded-md
                bg-destructive/10 border border-destructive/25 text-destructive
                hover:bg-destructive/20 hover:border-destructive/40
                transition-colors duration-150`,
          title: "View missing media files",
          children: [
            /* @__PURE__ */ e.jsx(wr, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsxs("span", { children: [
              Ce.length,
              " Missing"
            ] })
          ]
        }
      ),
      _ > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "h-4 w-px bg-border" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 h-7 pl-2 pr-1 rounded-md bg-accent/50 border border-border", children: [
          /* @__PURE__ */ e.jsx("span", { className: "tabular-nums", children: _ }),
          /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "selected" }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: B,
              className: "ml-0.5 p-1 rounded hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-colors",
              title: "Clear selection",
              children: /* @__PURE__ */ e.jsx(Gn, { className: "w-3 h-3" })
            }
          )
        ] }),
        Ne > 0 && /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: ue,
            className: `flex items-center gap-1 h-7 px-2 rounded-md
                    text-muted-foreground hover:text-primary hover:bg-primary/10
                    transition-colors duration-150`,
            title: "Generate proxies for selected",
            children: [
              /* @__PURE__ */ e.jsx(Yr, { className: "w-3 h-3" }),
              /* @__PURE__ */ e.jsxs("span", { children: [
                "Proxy (",
                Ne,
                ")"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: pt,
            className: `flex items-center gap-1 h-7 px-2 rounded-md
                  text-destructive/80 hover:text-destructive hover:bg-destructive/10
                  transition-colors duration-150`,
            title: "Delete selected",
            children: [
              /* @__PURE__ */ e.jsx(sn, { className: "w-3 h-3" }),
              /* @__PURE__ */ e.jsx("span", { children: "Delete" })
            ]
          }
        )
      ] })
    ] }) }),
    ge && /* @__PURE__ */ e.jsx("div", { className: "mx-4 mt-3 p-3 bg-destructive/10 border border-destructive/50 rounded text-xs animate-in slide-in-from-top-2 duration-200", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-destructive leading-relaxed flex-1", children: [
        /* @__PURE__ */ e.jsx("p", { children: ge }),
        z && /* @__PURE__ */ e.jsxs("div", { className: "mt-2 flex items-center gap-1.5", children: [
          /* @__PURE__ */ e.jsx("code", { className: "rounded bg-muted px-1.5 py-0.5 text-[11px] text-foreground select-text", children: z }),
          /* @__PURE__ */ e.jsx(nh, { text: z })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        Ze,
        {
          variant: "ghost",
          size: "sm",
          onClick: te,
          className: "h-6 px-2 text-[10px] text-destructive hover:text-destructive hover:bg-destructive/10",
          children: "Dismiss"
        }
      )
    ] }) }),
    U && /* @__PURE__ */ e.jsx("div", { className: `mx-4 mt-3 p-2.5 rounded text-xs animate-in slide-in-from-top-2 duration-200 ${U.type === "info" ? "bg-primary/10 border border-primary/30" : U.type === "warning" ? "bg-yellow-500/10 border border-yellow-500/30" : U.type === "success" ? "bg-green-500/10 border border-green-500/30" : "bg-destructive/10 border border-destructive/50"}`, children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
        /* @__PURE__ */ e.jsx(ll, { className: `w-3.5 h-3.5 flex-shrink-0 ${U.type === "info" ? "text-primary" : U.type === "warning" ? "text-yellow-500" : U.type === "success" ? "text-green-500" : "text-destructive"}` }),
        /* @__PURE__ */ e.jsx("p", { className: `leading-relaxed line-clamp-2 ${U.type === "info" ? "text-primary" : U.type === "warning" ? "text-yellow-600 dark:text-yellow-400" : U.type === "success" ? "text-green-600 dark:text-green-400" : "text-destructive"}`, children: U.message })
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: De,
          className: "text-muted-foreground hover:text-foreground transition-colors flex-shrink-0",
          children: /* @__PURE__ */ e.jsx(Gn, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "px-4 pt-3 pb-2 space-y-2 flex-shrink-0", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ e.jsx(qs, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" }),
        /* @__PURE__ */ e.jsx(
          Bs,
          {
            placeholder: "Search media...",
            value: Y,
            onChange: (l) => S(l.target.value),
            className: "pl-8 h-7 bg-secondary border border-border focus:border-primary text-foreground placeholder:text-muted-foreground text-xs"
          }
        ),
        Y && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => S(""),
            className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors",
            children: /* @__PURE__ */ e.jsx(Gn, { className: "w-3 h-3" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "@container flex items-center gap-1.5 min-w-0", children: [
        /* @__PURE__ */ e.jsxs(ts, { children: [
          /* @__PURE__ */ e.jsx(ns, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
            Ze,
            {
              variant: "outline",
              size: "sm",
              className: `h-6 bg-secondary border text-[10px] px-2 flex-shrink-0 ${J ? "border-primary text-primary hover:bg-primary/10" : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"}`,
              children: [
                /* @__PURE__ */ e.jsx(bm, { className: "w-2.5 h-2.5" }),
                /* @__PURE__ */ e.jsx("span", { className: "hidden @[280px]:inline ml-1", children: J ? J.toUpperCase() : "ALL" })
              ]
            }
          ) }),
          /* @__PURE__ */ e.jsxs(rs, { align: "start", className: "bg-popover border border-border", children: [
            /* @__PURE__ */ e.jsx(
              Pt,
              {
                onClick: () => A(null),
                className: "text-xs hover:bg-accent hover:text-accent-foreground",
                children: "All Types"
              }
            ),
            /* @__PURE__ */ e.jsx(vm, { className: "bg-border" }),
            /* @__PURE__ */ e.jsxs(
              Pt,
              {
                onClick: () => A("video"),
                className: "text-xs hover:bg-accent hover:text-accent-foreground",
                children: [
                  /* @__PURE__ */ e.jsx(hn, { className: "w-3 h-3 mr-2" }),
                  "Video"
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              Pt,
              {
                onClick: () => A("audio"),
                className: "text-xs hover:bg-accent hover:text-accent-foreground",
                children: [
                  /* @__PURE__ */ e.jsx(Un, { className: "w-3 h-3 mr-2" }),
                  "Audio"
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              Pt,
              {
                onClick: () => A("image"),
                className: "text-xs hover:bg-accent hover:text-accent-foreground",
                children: [
                  /* @__PURE__ */ e.jsx(An, { className: "w-3 h-3 mr-2" }),
                  "Image"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs(ts, { children: [
          /* @__PURE__ */ e.jsx(ns, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
            Ze,
            {
              variant: "outline",
              size: "sm",
              className: "h-6 bg-secondary border border-border text-muted-foreground hover:border-primary/50 hover:text-primary text-[10px] px-2 flex-shrink-0",
              children: [
                /* @__PURE__ */ e.jsx(ym, { className: "w-2.5 h-2.5" }),
                /* @__PURE__ */ e.jsx("span", { className: "hidden @[280px]:inline ml-1", children: p === "name" ? "NAME" : p === "date" ? "DATE" : "SIZE" })
              ]
            }
          ) }),
          /* @__PURE__ */ e.jsxs(rs, { align: "start", className: "bg-popover border border-border", children: [
            /* @__PURE__ */ e.jsx(
              Pt,
              {
                onClick: () => u("date"),
                className: "text-xs hover:bg-accent hover:text-accent-foreground",
                children: "Date (Newest)"
              }
            ),
            /* @__PURE__ */ e.jsx(
              Pt,
              {
                onClick: () => u("name"),
                className: "text-xs hover:bg-accent hover:text-accent-foreground",
                children: "Name (A-Z)"
              }
            ),
            /* @__PURE__ */ e.jsx(
              Pt,
              {
                onClick: () => u("size"),
                className: "text-xs hover:bg-accent hover:text-accent-foreground",
                children: "Size (Largest)"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0 justify-end", children: [
          L === "grid" && /* @__PURE__ */ e.jsx(
            Uo,
            {
              min: 1,
              max: 5,
              step: 1,
              value: [h],
              onValueChange: ([l]) => V(l ?? 3),
              className: "flex-1 min-w-6 max-w-24",
              "aria-label": "Grid item size"
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border border-border rounded bg-secondary flex-shrink-0", children: [
            /* @__PURE__ */ e.jsx(
              Ze,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => I("grid"),
                className: `h-6 w-6 p-0 rounded-none rounded-l ${L === "grid" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`,
                children: /* @__PURE__ */ e.jsx(wm, { className: "w-3 h-3" })
              }
            ),
            /* @__PURE__ */ e.jsx(
              Ze,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => I("list"),
                className: `h-6 w-6 p-0 rounded-none rounded-r ${L === "list" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`,
                children: /* @__PURE__ */ e.jsx(zm, { className: "w-3 h-3" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    ne !== null && je && /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-1.5 border-b border-violet-500/30 bg-violet-500/10 flex items-center gap-2 flex-shrink-0", children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: fe,
          className: "flex items-center gap-1.5 text-xs text-violet-300 hover:text-violet-100 transition-colors",
          children: [
            /* @__PURE__ */ e.jsx(Hm, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e.jsx("span", { children: "Back" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("span", { className: "text-xs text-violet-400/60", children: "/" }),
      /* @__PURE__ */ e.jsx("span", { className: "text-xs text-violet-300 font-medium truncate", children: je })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex-1 relative min-h-0", children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          ref: o,
          className: "relative flex h-full flex-col overflow-y-auto px-4 pb-4 [scrollbar-gutter:stable]",
          onClick: ht,
          onDragEnter: We,
          onDragOver: et,
          onDragLeave: Ye,
          onDrop: Xe,
          children: [
            /* @__PURE__ */ e.jsx(Yl, { marqueeState: Te }),
            /* @__PURE__ */ e.jsx(Wp, {}),
            x.map((l) => /* @__PURE__ */ e.jsx(
              sh,
              {
                groupKey: l.key,
                label: l.label,
                icon: l.icon,
                items: l.items,
                isOpen: M.has(l.key),
                onToggle: (X, P) => R((be) => {
                  const ae = new Set(be);
                  return P ? ae.add(X) : ae.delete(X), ae;
                }),
                onMediaSelect: t,
                viewMode: L,
                itemSize: h
              },
              l.key
            )),
            x.length === 0 && /* @__PURE__ */ e.jsx(
              rc,
              {
                onMediaSelect: t,
                viewMode: L,
                itemSize: h
              }
            )
          ]
        }
      ),
      N && /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 border-2 border-dashed border-primary z-50 flex items-center justify-center pointer-events-none", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-primary" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-primary" }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-primary" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center bg-primary/20 border-2 border-primary", children: /* @__PURE__ */ e.jsx(fl, { className: "w-7 h-7 text-primary animate-bounce" }) }),
          /* @__PURE__ */ e.jsx("p", { className: "text-base font-bold tracking-wide text-primary", children: "DROP FILES HERE" }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap justify-center gap-2 mt-2", children: [
            /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "MP4" }),
            /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "WebM" }),
            /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "MOV" }),
            /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "MP3" }),
            /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "WAV" }),
            /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "JPG" }),
            /* @__PURE__ */ e.jsx("span", { className: "px-2 py-0.5 bg-secondary border border-border rounded text-xs font-mono text-muted-foreground", children: "PNG" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" }) })
      ] })
    ] }),
    vt > 0 && /* @__PURE__ */ e.jsx("div", { className: "px-3 py-2 border-t border-border flex-shrink-0 bg-panel-bg/50", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
      /* @__PURE__ */ e.jsx(Qt, { className: "w-3.5 h-3.5 text-primary animate-spin flex-shrink-0" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
            "Generating ",
            vt,
            " ",
            vt === 1 ? "proxy" : "proxies"
          ] }),
          /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground tabular-nums", children: [
            Math.round(ft * 100),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "h-1 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "h-full bg-primary rounded-full transition-all duration-300",
            style: { width: `${Math.round(ft * 100)}%` }
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(
      os,
      {
        open: c,
        onOpenChange: (l) => {
          m(l), l || b({ mediaIds: [], compositionIds: [] });
        },
        children: /* @__PURE__ */ e.jsxs(kr, { children: [
          /* @__PURE__ */ e.jsxs(Tr, { children: [
            /* @__PURE__ */ e.jsx(Mr, { children: "Delete selected assets?" }),
            /* @__PURE__ */ e.jsx(Rr, { asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ e.jsxs("p", { children: [
                "Are you sure you want to delete ",
                Fe || `${ce} selected asset${ce === 1 ? "" : "s"}`,
                "? This action cannot be undone."
              ] }),
              Je > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-2 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-md", children: [
                /* @__PURE__ */ e.jsx(Qr, { className: "w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-yellow-600 dark:text-yellow-400", children: [
                  /* @__PURE__ */ e.jsx("p", { className: "font-medium", children: "Linked instances will be removed" }),
                  /* @__PURE__ */ e.jsxs("p", { className: "text-xs mt-1 text-yellow-600/80 dark:text-yellow-400/80", children: [
                    Je,
                    " clip",
                    Je > 1 ? "s" : "",
                    " across the timeline and nested compound clips reference these assets and will also be deleted."
                  ] })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ e.jsxs(Nr, { children: [
            /* @__PURE__ */ e.jsx(Er, { children: "Cancel" }),
            /* @__PURE__ */ e.jsxs(Dr, { onClick: kt, className: "bg-destructive text-destructive-foreground hover:bg-destructive/90", children: [
              "Delete ",
              Fe || `${ce} asset${ce === 1 ? "" : "s"}`,
              Je > 0 ? ` & ${Je} clip${Je > 1 ? "s" : ""}` : ""
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(Up, {}),
    /* @__PURE__ */ e.jsx(Qp, {}),
    /* @__PURE__ */ e.jsx(
      eh,
      {
        open: ve,
        files: xe.map((l) => ({
          fileName: l.fileName,
          audioCodec: l.audioCodec
        })),
        onConfirm: () => F(!0),
        onCancel: () => F(!1)
      }
    )
  ] });
});
export {
  $m as E,
  ph as K,
  Yl as M,
  $o as S,
  Bl as T,
  $l as a,
  hh as b,
  fh as c,
  Vm as i,
  Kt as u
};
