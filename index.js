import { r as n, j as r, b as Gu, d as ul } from "./react-vendor-18pR7s9b.js";
import { u as Ha, T as Wu, a as zu, i as dl, M as $u, E as To, K as Ku, b as qu, S as Eo, c as Yu } from "./feature-editing-ui-BppCmFMU.js";
import { dk as Xu, dl as Jr, c as ur, b as Ne, d as Vt, dm as Fi, dn as bo, dp as Zu, dq as Ju, dr as Qu, ds as ed, dt as da, du as fa, j as ne, dv as Hn, cS as Ir, cR as $r, dw as ma, dx as td, dy as Ua, dz as jo, dA as Va, dB as rd, dC as nd, df as Xe, dD as ha, dE as Sn, dF as Ar, b_ as No, ag as dn, dG as sd, dH as Ti, dI as fl, dJ as ml, bB as ad, dK as hl, bb as Yt, z as Cn, F as pl, dL as od, b8 as gl, H as lr, bH as id, dM as cd, dN as ld, bW as Ao, dO as ud, dP as Fr, dQ as ze, U as dd, M as Zt, bx as xl, b$ as fd, aA as hs, dR as bl, dS as aa, dT as vl, dU as Do, dV as yl, v as wl, dW as md, as as ds, at as yn, av as vo, aw as fs, dX as hd, dY as ss, dZ as Ei, d_ as pd, d$ as Gs, e0 as Ga, e1 as ji, e2 as Wa, e3 as za, e4 as Ni, E as Ye, e5 as Sl, cV as gd, B as be, e6 as Un, co as Cl, cp as kl, cq as Ml, cr as Rl, e7 as ys, e8 as Oo, e9 as Pl, ea as Il, eb as _o, aL as Xt, m as pa, o as ga, e as kt, ec as xd, ed as ar, ee as or, ef as ir, eg as bd, eh as vd, I as Ai, ei as yd, ej as wd, ek as Sd, bP as gr, el as Cd, da as kd, em as Di, bF as $a, bD as Ka, en as Md, bG as qa, eo as as, ep as Rd, eq as Pd, dg as Ya, dh as Id, cW as Fd, cX as Td, er as Ed, cB as jd, cC as Nd, es as Ad, di as dr, et as Dd, db as Ke, eu as Od, ev as $t, dc as cr, cJ as ps, cK as gs, cL as xs, cM as bs, ew as _d, ex as Fl, ey as Tl, cN as Gn, ez as Ld, a7 as Bd, eA as oa, eB as Hd, a8 as Ud, eC as Vd, eD as Gd, eE as Wd, eF as zd, eG as $d, cF as Kd, eH as El, eI as qd, eJ as os, cO as jl, eK as Yd, dd as Wn, cZ as Xd, eL as Oi, eM as Zd, eN as Jd, eO as Qd, eP as ef, eQ as _i, eR as tf, eS as Nl, eT as Al, eU as rf } from "./feature-editing-core-Dd2wfVmB.js";
import "./gif-processing-CfWcW1Gl.js";
import { c as xa, a as nf } from "./core-logger-Dau_Juxv.js";
import { a8 as sf, N as yo, a7 as vs, a9 as wo, z as Dl, aa as Li, ab as Bi, ac as af, ad as of, ae as cf, af as lf, ag as uf, ah as df, a6 as ff, ai as mf, aj as Lo, I as hf, ak as Ol, c as ws, al as _l, Q as Ll, d as Ss, am as Bl, q as Hl, an as pf, g as gf, e as xf, J as bf, X as Ul, ao as vf, ap as yf, aq as wf, ar as Sf, as as Cf, at as kf, A as Mf, au as Rf, M as So, av as Pf, O as Vl, aw as If, B as Gl, ax as Bo, ay as Ff, Y as Hi, a1 as Tf, f as Ef, a as Ho, C as Uo, az as jf, aA as Nf, aB as Af, aC as Df, aD as Of, aE as _f, aF as Lf, R as Ut, D as Bf, aG as Hf, l as Uf, m as Vf, aH as Gf, V as Wf, aI as zf, K as $f, x as Wl, a0 as Kf, b as qf, aJ as Yf, aK as Xf, aL as Zf, aM as Jf, aN as Qf, aO as em, aP as tm, aQ as rm, aR as nm, aS as sm, p as am, aT as Ui, T as zl, aU as om, aV as im } from "./vendor-icons-BsfPWTmk.js";
import { u as fn } from "./state-vendor-CU0EznXq.js";
import { E as Xa, u as cm, a as lm } from "./feature-effects-DK96jkPd.js";
import { ae as $l, af as Kl, ag as ql, ah as Yl, ai as um } from "./vendor-ui-KmnPcjbe.js";
const dm = {
  top: "translate(-50%, -100%)",
  bottom: "translate(-50%, 0)",
  left: "translate(-100%, -50%)",
  right: "translate(0, -50%)"
}, fm = {
  top: "bottom center",
  bottom: "top center",
  left: "right center",
  right: "left center"
}, mm = {
  top: "slide-in-from-bottom-2",
  bottom: "slide-in-from-top-2",
  left: "slide-in-from-right-2",
  right: "slide-in-from-left-2"
};
function hm() {
  const [e, t] = n.useState({
    visible: !1,
    text: "",
    x: 0,
    y: 0,
    side: "top"
  }), s = n.useRef(null), a = n.useRef(null), o = n.useCallback((c) => {
    const l = c.getAttribute("data-tooltip");
    if (!l) return;
    const u = c.getBoundingClientRect(), d = c.getAttribute("data-tooltip-side") || "top", f = 4;
    let m, b;
    switch (d) {
      case "bottom":
        m = u.left + u.width / 2, b = u.bottom + f;
        break;
      case "left":
        m = u.left - f, b = u.top + u.height / 2;
        break;
      case "right":
        m = u.right + f, b = u.top + u.height / 2;
        break;
      case "top":
      default:
        m = u.left + u.width / 2, b = u.top - f;
        break;
    }
    t({ visible: !0, text: l, x: m, y: b, side: d });
  }, []), i = n.useCallback(() => {
    t((c) => ({ ...c, visible: !1 }));
  }, []);
  return n.useEffect(() => {
    const c = (d) => {
      const f = d.target;
      if (!f || typeof f.closest != "function") {
        const b = f?.parentElement;
        if (!b) return;
        const h = b.closest("[data-tooltip]");
        if (!h) return;
        s.current && (clearTimeout(s.current), s.current = null), s.current = setTimeout(() => o(h), 300);
        return;
      }
      const m = f.closest("[data-tooltip]");
      m && (s.current && (clearTimeout(s.current), s.current = null), s.current = setTimeout(() => {
        o(m);
      }, 300));
    }, l = (d) => {
      const f = d.target, m = f?.nodeType === Node.ELEMENT_NODE ? f : f?.parentElement;
      !m || !m.closest("[data-tooltip]") || (s.current && (clearTimeout(s.current), s.current = null), i());
    }, u = (d) => {
      const f = d.target, m = f?.nodeType === Node.ELEMENT_NODE ? f : f?.parentElement;
      !m || !m.closest("[data-tooltip]") || (s.current && (clearTimeout(s.current), s.current = null), i());
    };
    return document.addEventListener("mouseenter", c, !0), document.addEventListener("mouseleave", l, !0), document.addEventListener("click", u, !0), () => {
      document.removeEventListener("mouseenter", c, !0), document.removeEventListener("mouseleave", l, !0), document.removeEventListener("click", u, !0), s.current && clearTimeout(s.current);
    };
  }, [o, i]), e.visible ? /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: a,
      style: {
        position: "fixed",
        left: e.x,
        top: e.y,
        transform: dm[e.side],
        zIndex: 50,
        pointerEvents: "none"
      },
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          role: "tooltip",
          className: `overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 ${mm[e.side]}`,
          style: { transformOrigin: fm[e.side] },
          children: e.text
        }
      )
    }
  ) : null;
}
const pm = ({ ...e }) => /* @__PURE__ */ r.jsx(
  Xu,
  {
    theme: "dark",
    className: "toaster group",
    position: "top-right",
    closeButton: !0,
    richColors: !0,
    toastOptions: {
      classNames: {
        toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
      }
    },
    ...e
  }
), Xl = [
  { label: "24 fps (Film)", value: 24 },
  { label: "25 fps (PAL)", value: 25 },
  { label: "30 fps (Standard)", value: 30 },
  { label: "50 fps (PAL High)", value: 50 },
  { label: "60 fps (Smooth)", value: 60 }
], gm = [
  { label: "120 fps (Legacy)", value: 120 },
  { label: "240 fps (Legacy)", value: 240 }
];
[
  ...Xl.map((e) => e.value),
  ...gm.map((e) => e.value)
];
[
  ...Xl.map((e) => e.value)
];
function Vi(e) {
  return Math.max(0, Math.min(1, e));
}
function Za(e, t) {
  const s = Math.cos(e * Math.PI / 2);
  return t ? s * s : 1 - s * s;
}
const xm = {
  gpuTransitionId: "fade",
  calculateStyles(e, t) {
    const s = Vi(e);
    return {
      opacity: Za(s, t)
    };
  },
  renderCanvas(e, t, s, a) {
    const o = Vi(a), i = Za(o, !0), c = Za(o, !1);
    e.save(), e.globalCompositeOperation = "copy", e.globalAlpha = c, e.drawImage(s, 0, 0), e.globalCompositeOperation = "lighter", e.globalAlpha = i, e.drawImage(t, 0, 0), e.restore();
  }
}, bm = {
  id: "fade",
  label: "Fade",
  description: "Simple crossfade between clips",
  category: "basic",
  icon: "Blend",
  hasDirection: !1,
  supportedTimings: ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"],
  defaultDuration: 30,
  minDuration: 5,
  maxDuration: 90
};
function vm(e) {
  e.register("fade", bm, xm);
}
const ym = ["from-left", "from-right", "from-top", "from-bottom"], wm = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function Co(e) {
  return Math.max(0, Math.min(1, e));
}
function Sm(e, t, s) {
  const a = Co(e), o = 1 - a;
  switch (t) {
    case "from-left":
      return s ? `inset(0 0 0 ${a * 100}%)` : `inset(0 ${o * 100}% 0 0)`;
    case "from-right":
      return s ? `inset(0 ${a * 100}% 0 0)` : `inset(0 0 0 ${o * 100}%)`;
    case "from-top":
      return s ? `inset(${a * 100}% 0 0 0)` : `inset(0 0 ${o * 100}% 0)`;
    case "from-bottom":
      return s ? `inset(0 0 ${a * 100}% 0)` : `inset(${o * 100}% 0 0 0)`;
    default:
      return "none";
  }
}
const Cm = {
  gpuTransitionId: "wipe",
  calculateStyles(e, t, s, a, o) {
    const i = Co(e), l = Sm(i, o || "from-left", t);
    return {
      clipPath: l,
      webkitClipPath: l,
      opacity: 1
    };
  },
  renderCanvas(e, t, s, a, o, i) {
    const c = Co(a), l = o || "from-left", u = i?.width ?? t.width, d = i?.height ?? t.height, f = new Path2D(), m = new Path2D();
    switch (l) {
      case "from-left":
        m.rect(0, 0, c * u, d), f.rect(c * u, 0, u, d);
        break;
      case "from-right":
        m.rect((1 - c) * u, 0, u, d), f.rect(0, 0, (1 - c) * u, d);
        break;
      case "from-top":
        m.rect(0, 0, u, c * d), f.rect(0, c * d, u, d);
        break;
      case "from-bottom":
        m.rect(0, (1 - c) * d, u, d), f.rect(0, 0, u, (1 - c) * d);
        break;
    }
    e.save(), e.clip(m), e.drawImage(s, 0, 0), e.restore(), e.save(), e.clip(f), e.drawImage(t, 0, 0), e.restore();
  }
}, km = {
  id: "wipe",
  label: "Wipe",
  description: "Wipe reveal from one direction",
  category: "wipe",
  icon: "ArrowRight",
  hasDirection: !0,
  directions: ym,
  supportedTimings: [...wm],
  defaultDuration: 30,
  minDuration: 5,
  maxDuration: 90
};
function Mm(e) {
  e.register("wipe", km, Cm);
}
const Rm = ["from-left", "from-right", "from-top", "from-bottom"], Pm = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function Gi(e, t, s, a, o) {
  const i = s ? e : e - 1;
  switch (t) {
    case "from-left":
      return { x: Math.round(i * a), y: 0 };
    case "from-right":
      return { x: Math.round(-i * a), y: 0 };
    case "from-top":
      return { x: 0, y: Math.round(i * o) };
    case "from-bottom":
      return { x: 0, y: Math.round(-i * o) };
    default:
      return { x: 0, y: 0 };
  }
}
const Im = {
  gpuTransitionId: "slide",
  calculateStyles(e, t, s, a, o) {
    const i = o || "from-left", c = t ? e : e - 1;
    let l;
    switch (i) {
      case "from-left":
        l = `translateX(${c * s}px)`;
        break;
      case "from-right":
        l = `translateX(${-c * s}px)`;
        break;
      case "from-top":
        l = `translateY(${c * a}px)`;
        break;
      case "from-bottom":
        l = `translateY(${-c * a}px)`;
        break;
      default:
        l = "none";
    }
    return { transform: l };
  },
  renderCanvas(e, t, s, a, o, i) {
    const c = o || "from-left", l = i?.width ?? t.width, u = i?.height ?? t.height, d = Gi(a, c, !1, l, u);
    e.drawImage(s, d.x, d.y);
    const f = Gi(a, c, !0, l, u);
    e.drawImage(t, f.x, f.y);
  }
}, Fm = {
  id: "slide",
  label: "Slide",
  description: "Slide in from a direction",
  category: "slide",
  icon: "MoveRight",
  hasDirection: !0,
  directions: Rm,
  supportedTimings: [...Pm],
  defaultDuration: 30,
  minDuration: 5,
  maxDuration: 90
};
function Tm(e) {
  e.register("slide", Fm, Im);
}
const Em = ["from-left", "from-right", "from-top", "from-bottom"], jm = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"], Nm = {
  gpuTransitionId: "flip",
  calculateStyles(e, t, s, a, o) {
    const i = o || "from-left", c = i === "from-left" || i === "from-right" ? "Y" : "X", l = i === "from-right" || i === "from-bottom" ? -1 : 1, u = 0.5, d = t ? e < u ? 1 : 0 : e >= u ? 1 : 0;
    let f;
    if (t) {
      const m = Math.min(e / u, 1);
      f = `perspective(1000px) rotate${c}(${l * m * 90}deg)`;
    } else {
      const m = Math.max((e - u) / u, 0);
      f = `perspective(1000px) rotate${c}(${l * (-90 + m * 90)}deg)`;
    }
    return { transform: f, opacity: d };
  },
  renderCanvas(e, t, s, a, o, i) {
    const c = Math.max(0, Math.min(1, a)), l = o || "from-left", u = l === "from-left" || l === "from-right", d = i?.width ?? t.width, f = i?.height ?? t.height, m = 0.5;
    if (c < m) {
      const b = c / m, h = Math.cos(b * Math.PI / 2);
      e.save(), e.translate(d / 2, f / 2), u ? e.scale(h, 1) : e.scale(1, h), e.translate(-d / 2, -f / 2), e.drawImage(t, 0, 0), e.restore();
    } else {
      const b = (c - m) / m, h = Math.sin(b * Math.PI / 2);
      e.save(), e.translate(d / 2, f / 2), u ? e.scale(h, 1) : e.scale(1, h), e.translate(-d / 2, -f / 2), e.drawImage(s, 0, 0), e.restore();
    }
  }
}, Am = {
  id: "flip",
  label: "Flip",
  description: "3D flip transition",
  category: "flip",
  icon: "FlipHorizontal",
  hasDirection: !0,
  directions: Em,
  supportedTimings: [...jm],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 60
};
function Dm(e) {
  e.register("flip", Am, Nm);
}
const Zl = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function ia(e) {
  return Math.max(0, Math.min(1, e));
}
function Jl(e, t, s) {
  const a = e?.[t];
  return typeof a != "number" || !Number.isFinite(a) ? s : a;
}
function Wi(e, t) {
  return Math.sqrt(Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) * 1.2;
}
const Om = {
  gpuTransitionId: "clockWipe",
  calculateStyles(e, t, s, a, o, i) {
    const c = ia(e), l = Math.max(0, Jl(i, "edgeSoftness", 8));
    if (t) {
      const u = c * 360, f = `conic-gradient(from -90deg, transparent ${Math.max(0, u - l)}deg, rgba(0,0,0,0.8) ${u}deg, black ${Math.min(360, u + l)}deg)`;
      return {
        maskImage: f,
        webkitMaskImage: f,
        maskSize: "100% 100%",
        webkitMaskSize: "100% 100%",
        opacity: 1 - 0.1 * c
      };
    }
    return {
      opacity: 0.85 + 0.15 * c
    };
  },
  renderCanvas(e, t, s, a, o, i) {
    const c = ia(a), l = i?.width ?? t.width, u = i?.height ?? t.height, d = l / 2, f = u / 2, m = Math.sqrt(l * l + u * u), b = -Math.PI / 2, h = c * Math.PI * 2, x = b + h;
    e.save(), e.globalAlpha = 0.85 + 0.15 * c, e.drawImage(s, 0, 0, l, u), e.restore(), e.save();
    const v = new Path2D();
    v.moveTo(d, f), v.arc(d, f, m, x, b + Math.PI * 2, !1), v.closePath(), e.clip(v), e.globalAlpha = 1 - 0.1 * c, e.drawImage(t, 0, 0, l, u), e.restore();
  }
}, _m = {
  id: "clockWipe",
  label: "Clock Wipe",
  description: "Circular wipe like a clock hand",
  category: "mask",
  icon: "Clock",
  hasDirection: !1,
  supportedTimings: [...Zl],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 90
}, Lm = {
  gpuTransitionId: "iris",
  calculateStyles(e, t, s, a, o, i) {
    const c = ia(e), l = Math.max(0, Jl(i, "edgeSoftness", 6));
    if (t) {
      const u = Wi(s, a), d = c * u, f = Math.max(0, d - l), m = d + l, b = `radial-gradient(circle at center, transparent ${f}px, rgba(0,0,0,0.85) ${d}px, black ${m}px)`;
      return {
        maskImage: b,
        webkitMaskImage: b,
        maskSize: "100% 100%",
        webkitMaskSize: "100% 100%",
        opacity: 1 - 0.1 * c
      };
    }
    return {
      opacity: 0.85 + 0.15 * c
    };
  },
  renderCanvas(e, t, s, a, o, i) {
    const c = ia(a), l = i?.width ?? t.width, u = i?.height ?? t.height, d = Wi(l, u), f = c * d, m = l / 2, b = u / 2;
    e.save(), e.globalAlpha = 0.85 + 0.15 * c, e.drawImage(s, 0, 0, l, u), e.restore(), e.save();
    const h = new Path2D();
    h.rect(0, 0, l, u), h.arc(m, b, f, 0, Math.PI * 2), e.clip(h, "evenodd"), e.globalAlpha = 1 - 0.1 * c, e.drawImage(t, 0, 0, l, u), e.restore();
  }
}, Bm = {
  id: "iris",
  label: "Iris",
  description: "Circular iris expanding/contracting",
  category: "mask",
  icon: "Circle",
  hasDirection: !1,
  supportedTimings: [...Zl],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 90
};
function Hm(e) {
  e.register("clockWipe", _m, Om), e.register("iris", Bm, Lm);
}
const kn = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function rr(e) {
  return Math.max(0, Math.min(1, e));
}
function Vn(e, t, s) {
  const a = Math.max(t - e, Number.EPSILON), o = rr((s - e) / a);
  return o * o * (3 - 2 * o);
}
function Ws(e, t, s) {
  const a = e?.[t];
  return typeof a != "number" || !Number.isFinite(a) ? s : a;
}
function kr(e) {
  const t = Math.sin(e * 12.9898 + 78.233) * 43758.5453123;
  return t - Math.floor(t);
}
function br(e, t) {
  return t ? Math.cos(e * Math.PI / 2) : Math.sin(e * Math.PI / 2);
}
function Um(e, t, s, a, o, i) {
  e.beginPath();
  for (let c = 0; c < 8; c += 1) {
    const l = i + Math.PI / 4 * c, u = c % 2 === 0 ? a : o, d = t + Math.cos(l) * u, f = s + Math.sin(l) * u;
    c === 0 ? e.moveTo(d, f) : e.lineTo(d, f);
  }
  e.closePath();
}
function Ja(e, t, s, a, o, i, c = 1, l = 1) {
  e.save(), e.translate(t, s), e.rotate(i), e.scale(c, l), Um(e, 0, 0, a, o, 0), e.fill(), e.restore();
}
function Vm(e, t, s, a, o, i) {
  const c = rr(a), l = o?.width ?? t.width, u = o?.height ?? t.height, d = Math.max(0.55, Ws(i, "sparkleScale", 1)), f = Math.max(0.35, Ws(i, "intensity", 1)), m = Math.max(0.5, Ws(i, "density", 1)), b = Math.max(0, Ws(i, "glow", 1)), h = 1 - Vn(0.74, 1, c);
  e.save(), e.drawImage(s, 0, 0, l, u), e.restore();
  const x = new OffscreenCanvas(l, u), v = x.getContext("2d");
  if (!v) {
    e.save(), e.globalAlpha = br(c, !0), e.drawImage(t, 0, 0, l, u), e.restore();
    return;
  }
  v.clearRect(0, 0, l, u), v.save(), v.drawImage(t, 0, 0, l, u), v.restore();
  const C = Math.round(24 + m * 22), y = [];
  for (let w = 0; w < C; w += 1) {
    const S = w + 1, R = Math.min(
      0.94,
      0.04 + kr(S * 31.7) * 0.72 + kr(S * 7.9) * 0.16
    ), O = 0.14 + kr(S * 41.9) * 0.18, L = rr((c - R) / O), I = Vn(0, 0.16, L), j = 1 - Vn(0.3, 0.95, L), P = I * j, F = Vn(0.06, 0.72, L);
    if (P <= 0.01 && F <= 0.02) continue;
    const E = L * (3.6 + kr(S * 5.3) * 3.8) + kr(S * 11.1), T = 0.35 + 0.65 * ((Math.sin(E * Math.PI * 2) + 1) / 2), N = Math.min(1, P * T * f), z = Math.min(1, F * (0.25 + T * 0.35) * f), M = kr(S * 13.1) * l, Y = kr(S * 17.9) * u, G = Math.pow(kr(S * 19.7), 0.55), X = (4 + G * 34) * d * (0.55 + P * 1.15), D = kr(S * 23.3) * Math.PI * 2, W = Math.cos(D), q = Math.sin(D), pe = (10 + G * 28) * P, k = (3 + G * 10) * P, B = D + L * (2.4 + kr(S * 29.1) * 4.5) * Math.PI, U = M + W * pe + Math.cos(B) * k, J = Y + q * pe + Math.sin(B) * k * 0.8, re = D + L * (2 + G * 3.5) * Math.PI;
    v.save(), v.globalCompositeOperation = "destination-out", v.globalAlpha = N, v.fillStyle = "rgba(0, 0, 0, 1)", Ja(v, U, J, X, X * 0.24, re), v.globalAlpha = N * 0.46, Ja(
      v,
      U - W * X * 0.9,
      J - q * X * 0.9,
      X * 0.78,
      X * 0.14,
      re - 0.45,
      1.9,
      0.58
    ), v.globalAlpha = N * 0.22, Ja(
      v,
      U - W * X * 1.55,
      J - q * X * 1.55,
      X * 0.52,
      X * 0.12,
      re - 0.7,
      2.4,
      0.42
    );
    const me = 3 + Math.round(G * 2);
    v.globalAlpha = z * 0.08;
    for (let xe = 0; xe < me; xe += 1) {
      const ye = S * 53.1 + xe * 7.3, Me = kr(ye) * Math.PI * 2, Be = X * (1.3 + kr(ye * 1.7) * 2.1) * (0.5 + F), Te = X * (0.14 + kr(ye * 2.9) * 0.24) * (0.55 + F);
      v.beginPath(), v.arc(
        U + Math.cos(Me) * Be,
        J + Math.sin(Me) * Be * 0.85,
        Te,
        0,
        Math.PI * 2
      ), v.fill();
    }
    v.beginPath(), v.arc(U, J, X * 0.24, 0, Math.PI * 2), v.fill(), v.restore(), y.push({
      x: U,
      y: J,
      radius: X * 2.6,
      alpha: Math.min(1, N + z * 0.45),
      veilRadius: X * 5.4
    });
  }
  if (y.length > 0 && b > 0) {
    e.save(), e.globalCompositeOperation = "screen";
    for (const w of y) {
      const S = e.createRadialGradient(
        w.x,
        w.y,
        0,
        w.x,
        w.y,
        w.veilRadius
      );
      S.addColorStop(0, `rgba(255, 245, 228, ${0.12 * w.alpha * b})`), S.addColorStop(0.45, `rgba(255, 226, 184, ${0.06 * w.alpha * b})`), S.addColorStop(1, "rgba(255, 214, 165, 0)"), e.fillStyle = S, e.fillRect(
        w.x - w.veilRadius,
        w.y - w.veilRadius,
        w.veilRadius * 2,
        w.veilRadius * 2
      );
    }
    e.restore();
  }
  if (e.save(), e.globalAlpha = h, e.drawImage(x, 0, 0), e.restore(), !(y.length === 0 || b <= 0)) {
    e.save(), e.globalCompositeOperation = "lighter";
    for (const w of y) {
      const S = e.createRadialGradient(
        w.x,
        w.y,
        0,
        w.x,
        w.y,
        w.radius
      );
      S.addColorStop(0, `rgba(255, 252, 240, ${0.38 * w.alpha * b})`), S.addColorStop(0.32, `rgba(255, 224, 170, ${0.26 * w.alpha * b})`), S.addColorStop(1, "rgba(255, 210, 150, 0)"), e.fillStyle = S, e.fillRect(
        w.x - w.radius,
        w.y - w.radius,
        w.radius * 2,
        w.radius * 2
      );
    }
    e.restore();
  }
}
const Gm = {
  gpuTransitionId: "dissolve",
  calculateStyles(e, t) {
    return { opacity: br(rr(e), t) };
  },
  renderCanvas(e, t, s, a) {
    const o = rr(a);
    e.save(), e.globalAlpha = br(o, !1), e.drawImage(s, 0, 0), e.restore(), e.save(), e.globalAlpha = br(o, !0), e.drawImage(t, 0, 0), e.restore();
  }
}, Wm = {
  id: "dissolve",
  label: "Dissolve",
  description: "Noise-based organic dissolve between clips",
  category: "basic",
  icon: "Sparkles",
  hasDirection: !1,
  supportedTimings: [...kn],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 90
}, zm = {
  gpuTransitionId: "sparkles",
  calculateStyles(e, t) {
    const s = rr(e), a = Math.sin(s * Math.PI), o = t ? 0.2 : 1.05, i = 14 * a, c = Math.sin(s * Math.PI * 2.2 + o) * i * 0.55, l = Math.cos(s * Math.PI * 1.6 + o) * i * 0.28, u = Math.sin(s * Math.PI * 1.8 + o) * a * 1.6, d = t ? 1 - 0.03 * s : 1.03 - 0.03 * s;
    return {
      opacity: t ? 1 - Vn(0.2, 0.94, s) : Vn(0.06, 0.8, s),
      transform: a > 0.08 ? `translate(${c}px, ${l}px) rotate(${u}deg) scale(${d})` : void 0
    };
  },
  renderCanvas(e, t, s, a, o, i, c) {
    Vm(e, t, s, a, i, c);
  }
}, $m = {
  id: "sparkles",
  label: "Sparkles",
  description: "Twinkling star bursts reveal the next clip",
  category: "custom",
  icon: "Sparkles",
  hasDirection: !1,
  supportedTimings: [...kn],
  defaultDuration: 24,
  minDuration: 8,
  maxDuration: 72
}, Km = {
  gpuTransitionId: "glitch",
  calculateStyles(e, t) {
    const s = rr(e), a = Math.sin(s * Math.PI), o = Math.sin(s * 47) * a * 5, i = 0.5;
    return t ? {
      opacity: s < i ? 1 : 0,
      transform: a > 0.2 ? `translateX(${o}px)` : void 0
    } : {
      opacity: s >= i ? 1 : 0,
      transform: a > 0.2 ? `translateX(${-o}px)` : void 0
    };
  },
  renderCanvas(e, t, s, a) {
    rr(a) < 0.5 ? e.drawImage(t, 0, 0) : e.drawImage(s, 0, 0);
  }
}, qm = {
  id: "glitch",
  label: "Glitch",
  description: "Digital glitch with RGB split and block displacement",
  category: "custom",
  icon: "Zap",
  hasDirection: !1,
  supportedTimings: [...kn],
  defaultDuration: 20,
  minDuration: 5,
  maxDuration: 60
}, Ym = {
  gpuTransitionId: "lightLeak",
  calculateStyles(e, t) {
    return { opacity: br(rr(e), t) };
  },
  renderCanvas(e, t, s, a, o, i) {
    const c = rr(a), l = i?.width ?? t.width, u = i?.height ?? t.height, d = o || "from-left";
    e.save(), e.globalAlpha = br(c, !1), e.drawImage(s, 0, 0, l, u), e.restore(), e.save(), e.globalAlpha = br(c, !0), e.drawImage(t, 0, 0, l, u), e.restore();
    const f = Math.sin(c * Math.PI);
    if (f > 0.1) {
      e.save();
      let m, b;
      switch (d) {
        case "from-left":
          m = c * l, b = u / 2;
          break;
        case "from-right":
          m = (1 - c) * l, b = u / 2;
          break;
        case "from-top":
          m = l / 2, b = c * u;
          break;
        case "from-bottom":
          m = l / 2, b = (1 - c) * u;
          break;
        default:
          m = c * l, b = u / 2;
      }
      const h = Math.max(l, u) * 0.4, x = e.createRadialGradient(m, b, 0, m, b, h);
      x.addColorStop(0, `rgba(255, 230, 180, ${0.3 * f})`), x.addColorStop(1, "rgba(255, 230, 180, 0)"), e.globalCompositeOperation = "lighter", e.fillStyle = x, e.fillRect(0, 0, l, u), e.restore();
    }
  }
}, Xm = {
  id: "lightLeak",
  label: "Light Leak",
  description: "Warm light sweep revealing the next clip",
  category: "light",
  icon: "Sun",
  hasDirection: !0,
  directions: ["from-left", "from-right", "from-top", "from-bottom"],
  supportedTimings: [...kn],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 90
}, Zm = {
  gpuTransitionId: "pixelate",
  calculateStyles(e, t) {
    return { opacity: br(rr(e), t) };
  },
  renderCanvas(e, t, s, a) {
    rr(a) < 0.5 ? e.drawImage(t, 0, 0) : e.drawImage(s, 0, 0);
  }
}, Jm = {
  id: "pixelate",
  label: "Pixelate",
  description: "Mosaic pixelation dissolve between clips",
  category: "custom",
  icon: "Grid3x3",
  hasDirection: !1,
  supportedTimings: [...kn],
  defaultDuration: 20,
  minDuration: 8,
  maxDuration: 60
}, Qm = {
  gpuTransitionId: "chromatic",
  calculateStyles(e, t) {
    return { opacity: br(rr(e), t) };
  },
  renderCanvas(e, t, s, a, o, i) {
    const c = rr(a), l = i?.width ?? t.width, u = i?.height ?? t.height;
    e.save(), e.globalAlpha = br(c, !1), e.drawImage(s, 0, 0, l, u), e.restore(), e.save(), e.globalAlpha = br(c, !0), e.drawImage(t, 0, 0, l, u), e.restore();
  }
}, eh = {
  id: "chromatic",
  label: "Chromatic",
  description: "RGB channel split with directional sweep",
  category: "chromatic",
  icon: "Aperture",
  hasDirection: !0,
  directions: ["from-left", "from-right", "from-top", "from-bottom"],
  supportedTimings: [...kn],
  defaultDuration: 25,
  minDuration: 10,
  maxDuration: 60
}, th = {
  gpuTransitionId: "radialBlur",
  calculateStyles(e, t) {
    const s = rr(e), a = Math.sin(s * Math.PI), o = 1 + a * 0.02;
    return {
      opacity: br(s, t),
      transform: a > 0.1 ? `scale(${o})` : void 0
    };
  },
  renderCanvas(e, t, s, a) {
    const o = rr(a);
    e.save(), e.globalAlpha = br(o, !1), e.drawImage(s, 0, 0), e.restore(), e.save(), e.globalAlpha = br(o, !0), e.drawImage(t, 0, 0), e.restore();
  }
}, rh = {
  id: "radialBlur",
  label: "Radial Blur",
  description: "Zoom and spin blur transition",
  category: "custom",
  icon: "CircleDot",
  hasDirection: !1,
  supportedTimings: [...kn],
  defaultDuration: 25,
  minDuration: 10,
  maxDuration: 60
};
function nh(e) {
  e.register("dissolve", Wm, Gm), e.register("sparkles", $m, zm), e.register("glitch", qm, Km), e.register("lightLeak", Xm, Ym), e.register("pixelate", Jm, Zm), e.register("chromatic", eh, Qm), e.register("radialBlur", rh, th);
}
let zi = !1;
function sh() {
  zi || (zi = !0, vm(Jr), Mm(Jr), Tm(Jr), Dm(Jr), Hm(Jr), nh(Jr));
}
sh();
const ah = {
  Blend: Lo,
  ArrowRight: mf,
  ArrowLeft: ff,
  ArrowDown: df,
  ArrowUp: uf,
  MoveRight: lf,
  MoveLeft: cf,
  MoveDown: of,
  MoveUp: af,
  FlipHorizontal: Bi,
  FlipHorizontal2: Bi,
  FlipVertical: Li,
  FlipVertical2: Li,
  Clock: Dl,
  Circle: wo,
  Sparkles: vs,
  Zap: yo,
  Sun: sf
}, Ql = {
  basic: { title: "Basic" },
  wipe: { title: "Wipe" },
  slide: { title: "Slide" },
  flip: { title: "Flip" },
  mask: { title: "Mask" },
  light: { title: "Light" },
  chromatic: { title: "Chromatic" },
  custom: { title: "Custom" }
}, ca = [
  "basic",
  "wipe",
  "slide",
  "flip",
  "mask",
  "light",
  "chromatic",
  "custom"
], oh = {
  "from-left": { label: "Left", icon: "ArrowRight" },
  "from-right": { label: "Right", icon: "ArrowLeft" },
  "from-top": { label: "Top", icon: "ArrowDown" },
  "from-bottom": { label: "Bottom", icon: "ArrowUp" }
};
function ih(e) {
  return e.hasDirection && e.directions && e.directions.length > 0 ? e.directions.map((t) => {
    const s = oh[t] || { label: t, icon: e.icon };
    return {
      id: e.id,
      label: s.label,
      description: `${e.label} ${s.label.toLowerCase()}`,
      icon: s.icon,
      category: e.category,
      direction: t
    };
  }) : [{
    id: e.id,
    label: e.label,
    description: e.description,
    icon: e.icon,
    category: e.category
  }];
}
function ch() {
  const e = /* @__PURE__ */ new Map(), t = [], s = new Set(ca);
  for (const a of Jr.getDefinitions()) {
    const o = ih(a);
    if (!s.has(a.category)) {
      t.push(...o);
      continue;
    }
    const i = e.get(a.category) ?? [];
    i.push(...o), e.set(a.category, i);
  }
  return [
    ...ca.flatMap((a) => e.get(a) ?? []),
    ...t
  ];
}
let ta = null, Ln = null, ko = null;
function Vo() {
  if (ta) return;
  ta = ch(), Ln = {}, ko = {};
  for (const t of ta)
    Ln[t.category] || (Ln[t.category] = []), Ln[t.category].push(t);
  let e = 0;
  for (const t of ca)
    ko[t] = e, e += Ln[t]?.length || 0;
}
function $i() {
  return Vo(), ta;
}
function eu() {
  return Vo(), Ln;
}
function lh() {
  return Vo(), ko;
}
const uh = n.memo(function({
  config: t,
  configIndex: s,
  onApply: a,
  clickDisabled: o,
  onDragStart: i,
  onDragEnd: c
}) {
  const l = ah[t.icon] ?? Lo, u = n.useCallback(() => {
    o || a(s);
  }, [o, s, a]);
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      onClick: u,
      draggable: !0,
      onDragStart: (d) => i(d, s),
      onDragEnd: c,
      "aria-disabled": o,
      className: ur(
        "flex flex-col items-center justify-center gap-1 p-2 rounded-lg",
        "border border-border bg-secondary/30",
        "hover:bg-secondary/50 hover:border-primary/50",
        "transition-colors group text-center cursor-grab active:cursor-grabbing",
        "min-w-[60px] h-[56px]",
        o && "focus-visible:outline-muted-foreground/40"
      ),
      title: t.description,
      children: [
        /* @__PURE__ */ r.jsx(l, { className: "w-4 h-4 text-muted-foreground group-hover:text-foreground" }),
        /* @__PURE__ */ r.jsx("span", { className: "text-[10px] text-muted-foreground group-hover:text-foreground truncate w-full", children: t.label })
      ]
    }
  );
}), dh = n.memo(function({
  category: t,
  configs: s,
  startIndex: a,
  onApply: o,
  clickDisabled: i,
  onDragStart: c,
  onDragEnd: l
}) {
  const u = Ql[t] || { title: t };
  return s.length === 0 ? null : /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ r.jsx("div", { className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider", children: u.title }),
    /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-4 gap-1.5", children: s.map((d, f) => /* @__PURE__ */ r.jsx(
      uh,
      {
        config: d,
        configIndex: a + f,
        onApply: o,
        clickDisabled: i,
        onDragStart: c,
        onDragEnd: l
      },
      `${d.id}-${d.direction || f}`
    )) })
  ] });
}), fh = n.memo(function() {
  const t = Ne((C) => C.addTransition), s = Ne((C) => C.updateTransition), a = Ne((C) => C.items), o = Ne((C) => C.transitions), i = Vt((C) => C.selectedItemIds), c = i.length, l = c === 1 ? i[0] : null, u = n.useMemo(() => l ? Fi({ selectedItemIds: [l], items: a, transitions: o }) : null, [l, a, o]), d = Ha((C) => C.setDraggedTransition), f = Ha((C) => C.setInvalidHint), m = Ha((C) => C.clearDrag), b = n.useCallback((C, y) => {
    const w = $i()[y];
    if (!w) return;
    const S = {
      presentation: w.id,
      direction: w.direction
    };
    C.dataTransfer.effectAllowed = "copy", C.dataTransfer.setData(Wu, JSON.stringify(S)), d(S), f(null);
  }, [d, f]), h = n.useCallback(() => {
    m();
  }, [m]), x = n.useCallback(
    (C) => {
      const y = $i()[C];
      if (!y) return;
      const { items: w, transitions: S } = Ne.getState(), R = Vt.getState().selectedItemIds, O = Fi({
        selectedItemIds: R,
        items: w,
        transitions: S
      });
      if (!O || !O.hasExisting && !O.canApply) return;
      const { leftClipId: L, rightClipId: I, hasExisting: j, existingTransitionId: P } = O, F = y.id, E = y.direction;
      j && P ? s(P, { presentation: F, direction: E }) : t(
        L,
        I,
        "crossfade",
        O.suggestedDurationInFrames,
        F,
        E
      );
    },
    [t, s]
  ), v = !!u && (u.hasExisting || u.canApply);
  return /* @__PURE__ */ r.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ r.jsx("div", { className: "px-3 py-2 border-b border-border bg-secondary/30", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-2 text-xs", children: [
      /* @__PURE__ */ r.jsx(hf, { className: "w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5" }),
      /* @__PURE__ */ r.jsx("div", { className: "text-muted-foreground leading-relaxed", children: v ? /* @__PURE__ */ r.jsx("span", { className: "text-primary", children: "Click to apply to the selected cut, or drag a transition onto any valid cut in the timeline." }) : u?.reason ? /* @__PURE__ */ r.jsxs("span", { children: [
        "Drag a transition onto a valid cut. Click-to-apply is unavailable here: ",
        u.reason,
        "."
      ] }) : c === 1 ? /* @__PURE__ */ r.jsx("span", { children: "Drag a transition onto a valid cut, or place clips next to each other and select one clip to click-apply." }) : c > 1 ? /* @__PURE__ */ r.jsx("span", { children: "Drag a transition onto a valid cut, or select a single video or image clip to click-apply." }) : /* @__PURE__ */ r.jsx("span", { children: "Drag a transition onto a valid cut, or select a video or image clip to add a transition to its neighbor." }) })
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-4", children: ca.map((C) => {
      const y = eu()[C];
      return !y || y.length === 0 ? null : /* @__PURE__ */ r.jsx(
        dh,
        {
          category: C,
          configs: y,
          startIndex: lh()[C],
          onApply: x,
          clickDisabled: !v,
          onDragStart: b,
          onDragEnd: h
        },
        C
      );
    }) })
  ] });
}), mh = xa("PlayerEmitter");
class hh {
  listeners = {
    seeked: [],
    timeupdate: [],
    play: [],
    pause: [],
    ended: [],
    ratechange: [],
    volumechange: [],
    fullscreenchange: [],
    error: [],
    waiting: [],
    resume: []
  };
  addEventListener(t, s) {
    this.listeners[t].push(s);
  }
  removeEventListener(t, s) {
    this.listeners[t] = this.listeners[t].filter((a) => a !== s);
  }
  once(t, s) {
    const a = (o) => {
      s(o), this.removeEventListener(t, a);
    };
    this.addEventListener(t, a);
  }
  hasListeners(t) {
    return this.listeners[t].length > 0;
  }
  listenerCount(t) {
    return this.listeners[t].length;
  }
  removeAllListeners() {
    Object.keys(this.listeners).forEach((t) => {
      this.listeners[t] = [];
    });
  }
  dispatchSeek(t) {
    this.dispatchEvent("seeked", { frame: t });
  }
  dispatchTimeUpdate(t) {
    this.dispatchEvent("timeupdate", { frame: t });
  }
  dispatchPlay() {
    this.dispatchEvent("play", void 0);
  }
  dispatchPause() {
    this.dispatchEvent("pause", void 0);
  }
  dispatchEnded() {
    this.dispatchEvent("ended", void 0);
  }
  dispatchRateChange(t) {
    this.dispatchEvent("ratechange", { playbackRate: t });
  }
  dispatchVolumeChange(t, s) {
    this.dispatchEvent("volumechange", { volume: t, isMuted: s });
  }
  dispatchFullscreenChange(t) {
    this.dispatchEvent("fullscreenchange", { isFullscreen: t });
  }
  dispatchError(t) {
    this.dispatchEvent("error", { error: t });
  }
  dispatchWaiting() {
    this.dispatchEvent("waiting", {});
  }
  dispatchResume() {
    this.dispatchEvent("resume", {});
  }
  dispatchEvent(t, s) {
    const a = this.listeners[t];
    for (const o of a)
      try {
        o({ detail: s });
      } catch (i) {
        mh.error(`Error in event listener for ${t}:`, i);
      }
  }
}
const tu = n.createContext(void 0);
function ru() {
  const e = n.useContext(tu);
  if (!e)
    throw new Error("usePlayerEmitter must be used within a Player component");
  return e;
}
const ba = ({ children: e, emitter: t }) => {
  const s = n.useMemo(() => t ?? new hh(), [t]);
  return /* @__PURE__ */ r.jsx(tu.Provider, { value: s, children: e });
};
function nu(e, t = {}) {
  const { loop: s = !1, onEnded: a } = t, { playing: o, imperativePlaying: i, playbackRate: c } = bo(), { setPlaying: l } = Zu(), u = Ju(), d = ru(), [f, m] = n.useState(!1), b = n.useRef(0), h = n.useRef(0), x = n.useRef(!1), v = Qu(e), C = ed(), y = bo().frame;
  h.current = y;
  const w = n.useCallback(
    (M) => {
      let Y = Math.max(C, Math.min(M, v));
      Y < C && (Y = C), Y > v && (Y = v), h.current = Y, u(Y), d.dispatchSeek(Y);
    },
    [C, v, u, d]
  ), S = n.useCallback(() => {
    i.current || (m(!0), h.current >= v && w(C), i.current = !0, l(!0), d.dispatchPlay());
  }, [i, v, C, l, d, w]), R = n.useCallback(() => {
    i.current && (i.current = !1, l(!1), d.dispatchPause());
  }, [i, l, d]), O = n.useCallback(() => {
    i.current && (i.current = !1, h.current = b.current, u(b.current), l(!1), d.dispatchPause());
  }, [i, u, l, d]), L = n.useCallback(() => {
    i.current ? R() : S();
  }, [i, R, S]), I = n.useCallback(() => i.current, [i]), j = n.useCallback(() => h.current, []), P = n.useCallback(() => c, [c]), F = n.useCallback(
    (M) => {
      d.dispatchRateChange(M);
    },
    [d]
  ), E = n.useCallback(() => x.current, []), T = n.useCallback(
    (M) => {
      if (i.current)
        return;
      const Y = h.current, G = Math.max(C, Y - M);
      Y !== G && w(G);
    },
    [i, C, w]
  ), N = n.useCallback(
    (M) => {
      if (i.current)
        return;
      const Y = h.current, G = Math.min(v, Y + M);
      Y !== G && w(G);
    },
    [i, v, w]
  );
  return n.useMemo(() => ({
    frameBack: T,
    frameForward: N,
    isLastFrame: h.current === v,
    isFirstFrame: h.current === C,
    emitter: d,
    playing: o,
    play: S,
    pause: R,
    pauseAndReturnToPlayStart: O,
    seek: w,
    getCurrentFrame: j,
    isPlaying: I,
    hasPlayed: f,
    isBuffering: E,
    toggle: L,
    setPlaybackRate: F,
    getPlaybackRate: P
  }), [
    T,
    N,
    v,
    C,
    d,
    o,
    S,
    R,
    O,
    w,
    j,
    I,
    f,
    E,
    L,
    F,
    P
  ]);
}
const ph = ({ isPlaying: e, onToggle: t }) => /* @__PURE__ */ r.jsx(
  "button",
  {
    onClick: t,
    className: "p-2 rounded-full hover:bg-white/20 transition-colors",
    "aria-label": e ? "Pause" : "Play",
    children: e ? /* @__PURE__ */ r.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: [
      /* @__PURE__ */ r.jsx("rect", { x: "6", y: "4", width: "4", height: "16" }),
      /* @__PURE__ */ r.jsx("rect", { x: "14", y: "4", width: "4", height: "16" })
    ] }) : /* @__PURE__ */ r.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M8 5v14l11-7z" }) })
  }
), gh = ({ currentFrame: e, durationInFrames: t, seek: s }) => {
  const a = t > 0 ? e / t * 100 : 0, o = n.useRef(null), i = n.useRef(!1), c = n.useRef(null), l = n.useRef(null), u = n.useCallback(
    (f) => {
      const m = o.current;
      if (!m) return;
      const b = m.getBoundingClientRect(), h = f - b.left, x = Math.max(0, Math.min(1, h / b.width)), v = Math.round(x * t);
      s(Math.max(0, Math.min(v, t - 1)));
    },
    [t, s]
  ), d = n.useCallback(
    (f) => {
      f.preventDefault(), f.stopPropagation(), i.current = !0, u(f.clientX);
      const m = (h) => {
        i.current && u(h.clientX);
      }, b = () => {
        i.current = !1, c.current && (document.removeEventListener("mousemove", c.current), c.current = null), l.current && (document.removeEventListener("mouseup", l.current), l.current = null);
      };
      c.current = m, l.current = b, document.addEventListener("mousemove", m), document.addEventListener("mouseup", b);
    },
    [u]
  );
  return n.useEffect(() => () => {
    c.current && (document.removeEventListener("mousemove", c.current), c.current = null), l.current && (document.removeEventListener("mouseup", l.current), l.current = null), i.current = !1;
  }, []), /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: o,
      className: "w-full h-2 bg-white/20 rounded cursor-pointer overflow-hidden",
      onMouseDown: d,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "h-full bg-primary transition-none pointer-events-none",
          style: { width: `${a}%` }
        }
      )
    }
  );
}, xh = ({
  isPlaying: e,
  currentFrame: t,
  durationInFrames: s,
  fps: a,
  playbackRate: o,
  isFullscreen: i,
  onTogglePlay: c,
  onSeek: l,
  onPlaybackRateChange: u,
  onToggleFullscreen: d
}) => {
  const f = (m) => {
    const b = m / a, h = Math.floor(b / 60), x = Math.floor(b % 60);
    return `${h}:${x.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent", children: [
    /* @__PURE__ */ r.jsx("div", { className: "mb-3", children: /* @__PURE__ */ r.jsx(
      gh,
      {
        currentFrame: t,
        durationInFrames: s,
        seek: l
      }
    ) }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx(
          ph,
          {
            isPlaying: e,
            onToggle: c
          }
        ),
        /* @__PURE__ */ r.jsxs("span", { className: "text-sm text-white ml-2", children: [
          f(t),
          " / ",
          f(s - 1)
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsxs(
          "select",
          {
            value: o,
            onChange: (m) => {
              u(Number(m.target.value));
            },
            className: "bg-transparent text-sm text-white border border-white/30 rounded px-2 py-1",
            "aria-label": "Playback rate",
            children: [
              /* @__PURE__ */ r.jsx("option", { value: "0.5", children: "0.5x" }),
              /* @__PURE__ */ r.jsx("option", { value: "1", children: "1x" }),
              /* @__PURE__ */ r.jsx("option", { value: "1.5", children: "1.5x" }),
              /* @__PURE__ */ r.jsx("option", { value: "2", children: "2x" })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: d,
            className: "p-2 rounded-full hover:bg-white/20 transition-colors",
            "aria-label": i ? "Exit fullscreen" : "Enter fullscreen",
            children: i ? /* @__PURE__ */ r.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }) }) : /* @__PURE__ */ r.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }) })
          }
        )
      ] })
    ] })
  ] });
}, bh = n.forwardRef(
  ({
    children: e,
    durationInFrames: t,
    fps: s,
    initialFrame: a = 0,
    loop: o = !1,
    controls: i = !0,
    autoPlay: c = !1,
    initiallyMuted: l = !1,
    playbackRate: u = 1,
    className: d,
    style: f,
    width: m = 1280,
    height: b = 720,
    onEnded: h,
    onFrameChange: x,
    onPlayStateChange: v
  }, C) => {
    const [y, w] = n.useState(!1), S = n.useRef(null), R = n.useRef(null), O = n.useRef(null), L = n.useCallback(() => {
      const z = S.current, M = R.current, Y = O.current;
      if (!z || !M || !Y) return;
      const G = z.clientWidth, X = z.clientHeight, D = G > 0 && X > 0 ? Math.min(G / m, X / b) : 1, W = m * D, q = b * D;
      M.style.width = `${W}px`, M.style.height = `${q}px`, M.style.marginLeft = `${-W / 2}px`, M.style.marginTop = `${-q / 2}px`, Y.style.width = `${m}px`, Y.style.height = `${b}px`, Y.style.transform = `scale(${D})`;
    }, [b, m]);
    n.useEffect(() => {
      const z = S.current;
      if (!z) return;
      let M = null;
      const Y = () => {
        M === null && (M = requestAnimationFrame(() => {
          M = null, L();
        }));
      }, G = new ResizeObserver(Y);
      return G.observe(z), L(), () => {
        G.disconnect(), M !== null && cancelAnimationFrame(M);
      };
    }, [L]);
    const I = nu(t, { loop: o, onEnded: h }), {
      frame: j,
      playing: P,
      playbackRate: F,
      setPlaybackRate: E
    } = bo(), T = ru();
    n.useEffect(() => {
      a > 0 && j === 0 && I.seek(a);
    }, [a, j, I]), n.useEffect(() => {
      c && !P && I.play();
    }, [c, P, I]), n.useEffect(() => {
      x?.(j);
    }, [j, x]), n.useEffect(() => {
      v?.(P);
    }, [P, v]);
    const N = n.useCallback(async () => {
      S.current && (document.fullscreenElement ? await document.exitFullscreen() : await S.current.requestFullscreen());
    }, []);
    return n.useEffect(() => {
      const z = () => {
        w(!!document.fullscreenElement);
      };
      return document.addEventListener("fullscreenchange", z), () => {
        document.removeEventListener("fullscreenchange", z);
      };
    }, []), n.useImperativeHandle(
      C,
      () => ({
        play: () => I.play(),
        pause: () => I.pause(),
        toggle: () => I.toggle(),
        seekTo: (z) => I.seek(z),
        getCurrentFrame: () => I.getCurrentFrame(),
        isPlaying: () => I.isPlaying(),
        addEventListener: (z, M) => {
          T.addEventListener(z, M);
        },
        removeEventListener: (z, M) => {
          T.removeEventListener(z, M);
        }
      }),
      [I, T]
    ), /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: S,
        className: `relative bg-black ${d || ""}`,
        style: {
          ...f,
          overflow: "hidden"
        },
        "data-player-container": !0,
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              ref: R,
              style: {
                position: "absolute",
                left: "50%",
                top: "50%",
                width: m,
                height: b,
                marginLeft: -m / 2,
                marginTop: -b / 2,
                overflow: "hidden"
              },
              children: /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: O,
                  style: {
                    width: m,
                    height: b,
                    transform: "scale(1)",
                    transformOrigin: "top left"
                  },
                  children: e
                }
              )
            }
          ),
          i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "absolute inset-0 cursor-pointer",
                onClick: () => I.toggle()
              }
            ),
            /* @__PURE__ */ r.jsx(
              xh,
              {
                isPlaying: P,
                currentFrame: j,
                durationInFrames: t,
                fps: s,
                playbackRate: F,
                isFullscreen: y,
                onTogglePlay: I.toggle,
                onSeek: I.seek,
                onPlaybackRateChange: E,
                onToggleFullscreen: N
              }
            )
          ] })
        ]
      }
    );
  }
), su = n.forwardRef(
  (e, t) => {
    const {
      durationInFrames: s,
      fps: a,
      initialFrame: o,
      initiallyMuted: i,
      playbackRate: c,
      loop: l,
      onEnded: u
    } = e;
    return /* @__PURE__ */ r.jsx(ba, { children: /* @__PURE__ */ r.jsx(
      da,
      {
        fps: a,
        durationInFrames: s,
        initialFrame: o,
        initiallyMuted: i,
        initialPlaybackRate: c,
        loop: l,
        onEnded: u,
        onVolumeChange: () => {
        },
        children: /* @__PURE__ */ r.jsx(
          fa,
          {
            fps: a,
            width: e.width ?? 1280,
            height: e.height ?? 720,
            durationInFrames: s,
            children: /* @__PURE__ */ r.jsx(bh, { ...e, ref: t })
          }
        )
      }
    ) });
  }
);
su.displayName = "Player";
function vh(e, t) {
  const s = Ne((h) => h.keyframes), a = n.useMemo(
    () => s.find((h) => h.itemId === e.id),
    [s, e.id]
  ), o = ne((h) => h.currentFrame), i = ne((h) => h.previewFrame), c = ne((h) => h.displayedFrame), l = ne((h) => h.isPlaying), u = ne((h) => h.currentFrameEpoch), d = ne((h) => h.previewFrameEpoch), m = Hn({
    currentFrame: o,
    previewFrame: i,
    displayedFrame: c,
    isPlaying: l,
    currentFrameEpoch: u,
    previewFrameEpoch: d
  }) - e.from;
  return {
    transform: n.useMemo(() => {
      const h = Ir(e), x = $r(
        e,
        { width: t.width, height: t.height },
        h
      );
      return a ? ma(x, a, m) : x;
    }, [e, t, a, m]),
    hasKeyframes: !!a,
    relativeFrame: m
  };
}
function yh(e, t, s, a, o) {
  if (a < 0 || a >= o)
    return { handled: !1 };
  const c = t?.properties.find((l) => l.property === s)?.keyframes.find((l) => l.frame === a);
  return c ? { handled: !0, action: "update", existingKeyframeId: c.id } : td(e, s) ? { handled: !0, action: "add" } : { handled: !1 };
}
function $n(e, t, s, a, o) {
  const i = o - e.from, c = yh(
    e.id,
    t,
    s,
    i,
    e.durationInFrames
  );
  return c.handled ? c.action === "update" && c.existingKeyframeId ? {
    type: "update",
    itemId: e.id,
    property: s,
    keyframeId: c.existingKeyframeId,
    updates: { value: a }
  } : {
    type: "add",
    itemId: e.id,
    property: s,
    frame: i,
    value: a,
    easing: "linear"
  } : null;
}
const wh = ["x", "y", "width", "height", "rotation"];
function au(e, t) {
  const s = n.useEffectEvent((a) => {
    a.key === "Escape" && t();
  });
  n.useEffect(() => {
    if (e)
      return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [e]);
}
const Sh = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
function ou({
  bounds: e,
  rotation: t,
  isInteracting: s,
  isMask: a = !1,
  onTranslateStart: o,
  onScaleStart: i,
  onRotateStart: c
}) {
  const l = (d) => {
    const f = Va / 2, { width: m, height: b } = e, h = {
      nw: { left: -f, top: -f },
      n: { left: m / 2 - f, top: -f },
      ne: { left: m - f, top: -f },
      e: { left: m - f, top: b / 2 - f },
      se: { left: m - f, top: b - f },
      s: { left: m / 2 - f, top: b - f },
      sw: { left: -f, top: b - f },
      w: { left: -f, top: b / 2 - f }
    };
    return {
      position: "absolute",
      width: Va,
      height: Va,
      ...h[d],
      cursor: jo(d, t)
    };
  }, u = a ? s ? "#0891b2" : "#06b6d4" : s ? "#4547c8" : "#5b5df1";
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "absolute cursor-move",
        style: {
          inset: -2,
          border: `2px dashed ${u}`,
          boxSizing: "border-box",
          zIndex: 101
        },
        role: "button",
        "aria-label": "Move selected element",
        tabIndex: 0,
        "data-gizmo": "border",
        onMouseDown: o,
        onDoubleClick: (d) => d.stopPropagation()
      }
    ),
    Sh.map((d) => {
      const f = {
        nw: "Resize from top-left corner",
        n: "Resize from top edge",
        ne: "Resize from top-right corner",
        e: "Resize from right edge",
        se: "Resize from bottom-right corner",
        s: "Resize from bottom edge",
        sw: "Resize from bottom-left corner",
        w: "Resize from left edge",
        rotate: "Rotate element"
      };
      return /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "bg-white border border-primary",
          style: { ...l(d), zIndex: 102 },
          role: "button",
          "aria-label": f[d],
          tabIndex: 0,
          "data-gizmo": `scale-${d}`,
          onMouseDown: (m) => i(d, m)
        },
        d
      );
    }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "absolute bg-white border border-primary rounded-full cursor-crosshair",
        style: {
          width: 10,
          height: 10,
          left: "50%",
          top: -Ua,
          marginLeft: -5,
          zIndex: 102
        },
        role: "button",
        "aria-label": "Rotate selected element",
        tabIndex: 0,
        "data-gizmo": "rotate",
        onMouseDown: c
      }
    ),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "absolute border-l border-dashed border-primary pointer-events-none",
        style: {
          left: "50%",
          top: -Ua + 10,
          height: Ua - 10
        }
      }
    )
  ] });
}
function iu(e, t, s) {
  return rd(e, t, s);
}
function cu(e, t, s, a) {
  if (e.type !== "video" && e.type !== "image") return null;
  const o = Ir(e);
  return !o || !Number.isFinite(t) || !Number.isFinite(s) || t <= 0 || s <= 0 ? null : nd(
    o.width,
    o.height,
    t,
    s,
    a
  ).viewportRect;
}
function Ch({
  item: e,
  coordParams: t,
  onTransformStart: s,
  onTransformEnd: a,
  isPlaying: o = !1
}) {
  const i = Xe((N) => N.activeGizmo), c = Xe((N) => N.previewTransform), l = Xe(
    n.useCallback((N) => N.preview?.[e.id], [e.id])
  ), u = Xe((N) => N.startTranslate), d = Xe((N) => N.startScale), f = Xe((N) => N.startRotate), m = Xe((N) => N.updateInteraction), b = Xe((N) => N.endInteraction), h = Xe((N) => N.clearInteraction), x = Xe((N) => N.cancelInteraction), v = i?.itemId === e.id, { transform: C } = vh(e, t.projectSize), y = n.useMemo(() => {
    if (v && c)
      return c;
    let N = {
      x: C.x,
      y: C.y,
      width: C.width,
      height: C.height,
      rotation: C.rotation,
      opacity: C.opacity,
      cornerRadius: C.cornerRadius
    };
    if (e.type === "text") {
      const M = {
        ...N,
        cornerRadius: N.cornerRadius ?? 0
      };
      N = iu(
        e,
        M,
        l?.properties
      );
    }
    const z = l?.transform;
    return z ? { ...N, ...z } : N;
  }, [C, v, c, e, l]), w = n.useMemo(() => {
    const N = l?.properties?.crop ?? ("crop" in e ? e.crop : void 0);
    return cu(
      e,
      y.width,
      y.height,
      N
    );
  }, [e, l, y.width, y.height]), R = n.useMemo(() => {
    const N = ha(y, t);
    if (e.type === "shape") {
      const M = l?.properties?.strokeWidth ?? e.strokeWidth ?? 0;
      if (M > 0) {
        const Y = t.playerSize.width / t.projectSize.width, G = M * Y;
        N.left -= G / 2, N.top -= G / 2, N.width += G, N.height += G;
      }
    }
    return N;
  }, [y, t, e, l]), O = n.useMemo(() => {
    if (!w) return null;
    const N = Sn(t);
    return {
      left: w.x * N,
      top: w.y * N,
      width: w.width * N,
      height: w.height * N
    };
  }, [w, t]), L = n.useCallback(
    (N) => Ar(N.clientX, N.clientY, t),
    [t]
  ), I = n.useCallback((N, z) => Math.abs(N.x - z.x) > 0.01 || Math.abs(N.y - z.y) > 0.01 || Math.abs(N.width - z.width) > 0.01 || Math.abs(N.height - z.height) > 0.01 || Math.abs(N.rotation - z.rotation) > 0.01, []), j = e.type === "shape" ? e.strokeWidth ?? 0 : 0, P = n.useCallback(
    (N) => {
      N.stopPropagation(), N.preventDefault();
      const z = L(N), M = { ...y };
      u(e.id, z, y, j, w ?? void 0), s(), document.body.style.cursor = "move";
      const Y = (X) => {
        const D = L(X);
        m(D, X.shiftKey, X.ctrlKey, X.altKey);
      }, G = () => {
        window.removeEventListener("mousemove", Y), window.removeEventListener("mouseup", G), document.body.style.cursor = "";
        const X = b();
        X && I(M, X) && a(X, "move"), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            h();
          });
        });
      };
      window.addEventListener("mousemove", Y), window.addEventListener("mouseup", G);
    },
    [e.id, y, L, u, m, b, h, s, a, I, j, w]
  ), F = n.useCallback(
    (N, z) => {
      z.stopPropagation(), z.preventDefault();
      const M = L(z), Y = { ...y };
      d(e.id, N, M, y, e.type, e.transform?.aspectRatioLocked, j, w ?? void 0), s(), document.body.style.cursor = jo(N, y.rotation);
      const G = (D) => {
        const W = L(D);
        m(W, D.shiftKey, D.ctrlKey, D.altKey);
      }, X = () => {
        window.removeEventListener("mousemove", G), window.removeEventListener("mouseup", X), document.body.style.cursor = "";
        const D = b();
        D && I(Y, D) && a(D, "resize"), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            h();
          });
        });
      };
      window.addEventListener("mousemove", G), window.addEventListener("mouseup", X);
    },
    [e.id, y, L, d, m, b, h, s, a, I, j, w]
  ), E = n.useCallback(
    (N) => {
      N.stopPropagation(), N.preventDefault();
      const z = L(N), M = { ...y };
      f(e.id, z, y, j), s(), document.body.style.cursor = "crosshair";
      const Y = (X) => {
        const D = L(X);
        m(D, X.shiftKey, X.ctrlKey, X.altKey);
      }, G = () => {
        window.removeEventListener("mousemove", Y), window.removeEventListener("mouseup", G), document.body.style.cursor = "";
        const X = b();
        X && I(M, X) && a(X, "rotate"), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            h();
          });
        });
      };
      window.addEventListener("mousemove", Y), window.addEventListener("mouseup", G);
    },
    [e.id, y, L, f, m, b, h, s, a, I, j, w]
  );
  au(
    v,
    n.useCallback(() => {
      x(), document.body.style.cursor = "";
    }, [x])
  );
  const T = {
    left: R.left,
    top: R.top,
    width: O?.width ?? R.width,
    height: O?.height ?? R.height
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "absolute transition-opacity duration-150",
      style: {
        left: R.left,
        top: R.top,
        width: R.width,
        height: R.height,
        transform: `rotate(${y.rotation}deg)`,
        transformOrigin: "center center",
        opacity: o ? 0 : 1,
        zIndex: 100,
        pointerEvents: "none"
      },
      onMouseDown: (N) => N.stopPropagation(),
      onDoubleClick: (N) => N.stopPropagation(),
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "absolute",
          style: {
            left: O?.left ?? 0,
            top: O?.top ?? 0,
            width: O?.width ?? R.width,
            height: O?.height ?? R.height,
            pointerEvents: "auto"
          },
          onMouseDown: (N) => N.stopPropagation(),
          onDoubleClick: (N) => N.stopPropagation(),
          children: /* @__PURE__ */ r.jsx(
            ou,
            {
              bounds: T,
              rotation: y.rotation,
              isInteracting: v,
              isMask: e.type === "shape" && e.isMask,
              onTranslateStart: P,
              onScaleStart: F,
              onRotateStart: E
            }
          )
        }
      )
    }
  );
}
function Qa(e, t, s) {
  return e.type !== "text" ? t : iu(e, t, s?.[e.id]?.properties);
}
function Go(e, t) {
  const s = No((v) => v.fps), a = n.useMemo(() => e.map((v) => v.id), [e]), o = dn(
    fn(
      n.useCallback(
        (v) => a.map((C) => v.keyframesByItemId[C] ?? null),
        [a]
      )
    )
  ), i = ne((v) => v.currentFrame), c = ne((v) => v.previewFrame), l = ne((v) => v.displayedFrame), u = ne((v) => v.isPlaying), d = ne((v) => v.currentFrameEpoch), f = ne((v) => v.previewFrameEpoch), m = Xe((v) => v.activeGizmo), b = Xe((v) => v.previewTransform), h = Xe((v) => v.preview), x = Hn({
    currentFrame: i,
    previewFrame: c,
    displayedFrame: l,
    isPlaying: u,
    currentFrameEpoch: d,
    previewFrameEpoch: f
  });
  return n.useMemo(() => {
    const v = /* @__PURE__ */ new Map(), C = { width: t.width, height: t.height };
    for (const [y, w] of e.entries()) {
      const S = o[y] ?? void 0, R = sd(w, {
        canvas: C,
        frame: x,
        keyframes: S
      });
      if (m?.itemId === w.id && b) {
        let L = Ti(R, b);
        L = Qa(w, L, h), v.set(w.id, L);
        continue;
      }
      const O = h?.[w.id]?.transform;
      if (O) {
        let L = Ti(R, O);
        L = Qa(w, L, h), v.set(w.id, L);
        continue;
      }
      v.set(w.id, Qa(w, R, h));
    }
    return v;
  }, [
    e,
    t.height,
    t.width,
    o,
    x,
    m?.itemId,
    b,
    h,
    s
  ]);
}
const zs = 20;
function lu(e, t, s) {
  let a = 1 / 0, o = 1 / 0, i = -1 / 0, c = -1 / 0;
  for (const l of e.values()) {
    const u = fl(l, t, s), d = l.width / 2, f = l.height / 2;
    if (l.rotation === 0) {
      a = Math.min(a, u.x - d), o = Math.min(o, u.y - f), i = Math.max(i, u.x + d), c = Math.max(c, u.y + f);
      continue;
    }
    const m = [
      { x: u.x - d, y: u.y - f },
      { x: u.x + d, y: u.y - f },
      { x: u.x + d, y: u.y + f },
      { x: u.x - d, y: u.y + f }
    ];
    for (const b of m) {
      const h = ml(b, u, l.rotation);
      a = Math.min(a, h.x), o = Math.min(o, h.y), i = Math.max(i, h.x), c = Math.max(c, h.y);
    }
  }
  return {
    left: a,
    top: o,
    right: i,
    bottom: c,
    width: i - a,
    height: c - o
  };
}
function eo(e, t, s, a) {
  const o = lu(t, s, a), i = {
    x: (o.left + o.right) / 2,
    y: (o.top + o.bottom) / 2
  }, c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  for (const [u, d] of t) {
    const f = fl(d, s, a);
    c.set(u, {
      x: f.x - i.x,
      y: f.y - i.y
    }), l.set(u, d.rotation);
  }
  return {
    itemIds: e,
    groupBounds: o,
    groupCenter: i,
    itemTransforms: new Map(t),
    itemOffsets: c,
    itemRotations: l
  };
}
function kh(e, t, s) {
  const a = /* @__PURE__ */ new Map();
  for (const [o, i] of e.itemTransforms)
    a.set(o, {
      ...i,
      x: i.x + t,
      y: i.y + s
    });
  return a;
}
function Mh(e, t, s, a, o, i = !0) {
  const c = /* @__PURE__ */ new Map(), { groupCenter: l, itemOffsets: u, itemTransforms: d } = e, f = i ? Math.max(t, s) : 1, m = i ? f : t, b = i ? f : s, h = zs / Math.max(...Array.from(d.values()).map((y) => y.width)), x = zs / Math.max(...Array.from(d.values()).map((y) => y.height)), v = Math.max(h, m), C = Math.max(x, b);
  for (const [y, w] of d) {
    const S = u.get(y), R = S.x * v, O = S.y * C, L = l.x + R, I = l.y + O;
    c.set(y, {
      ...w,
      x: L - a / 2,
      y: I - o / 2,
      width: Math.max(zs, w.width * v),
      height: Math.max(zs, w.height * C)
    });
  }
  return c;
}
function Rh(e, t, s, a) {
  const o = /* @__PURE__ */ new Map(), { groupCenter: i, itemOffsets: c, itemTransforms: l, itemRotations: u } = e;
  for (const [d, f] of l) {
    const m = c.get(d), b = u.get(d), h = {
      x: i.x + m.x,
      y: i.y + m.y
    }, x = ml(h, i, t), v = x.x - s / 2, C = x.y - a / 2;
    let y = b + t;
    for (; y > 180; ) y -= 360;
    for (; y < -180; ) y += 360;
    o.set(d, {
      ...f,
      x: v,
      y: C,
      rotation: y
    });
  }
  return o;
}
function Ph(e, t, s) {
  const { groupCenter: a } = e, o = Math.sqrt(
    Math.pow(t.x - a.x, 2) + Math.pow(t.y - a.y, 2)
  ), i = Math.sqrt(
    Math.pow(s.x - a.x, 2) + Math.pow(s.y - a.y, 2)
  );
  return o > 0 ? i / o : 1;
}
function Ih(e, t, s) {
  const { groupCenter: a } = e, o = Math.atan2(
    t.y - a.y,
    t.x - a.x
  ) * (180 / Math.PI);
  return Math.atan2(
    s.y - a.y,
    s.x - a.x
  ) * (180 / Math.PI) - o;
}
function Fh({
  items: e,
  coordParams: t,
  onTransformStart: s,
  onTransformEnd: a,
  onItemClick: o,
  isPlaying: i = !1
}) {
  const [c, l] = n.useState("idle"), u = n.useRef(null), d = n.useRef(null), f = n.useRef(/* @__PURE__ */ new Map()), m = n.useRef(null), b = Xe((M) => M.setPreview), h = Xe((M) => M.clearPreview), { projectSize: x } = t, v = Sn(t), C = Go(e, x), y = n.useMemo(() => {
    const M = /* @__PURE__ */ new Map();
    for (const [Y, G] of C)
      M.set(Y, {
        x: G.x,
        y: G.y,
        width: G.width,
        height: G.height,
        rotation: G.rotation,
        opacity: G.opacity,
        cornerRadius: G.cornerRadius
      });
    return M;
  }, [C]), w = n.useCallback((M) => {
    const Y = {};
    for (const [G, X] of M)
      Y[G] = { transform: X };
    return Y;
  }, []), S = n.useCallback((M) => {
    m.current = M, M ? b(w(M)) : h();
  }, [b, h, w]), R = y, O = n.useMemo(() => lu(R, x.width, x.height), [R, x]), L = n.useMemo(() => {
    const M = {
      left: O.left * v,
      top: O.top * v,
      width: O.width * v,
      height: O.height * v
    };
    let Y = 0;
    for (const G of e)
      G.type === "shape" && G.strokeWidth && (Y = Math.max(Y, G.strokeWidth));
    if (Y > 0) {
      const G = Y * v;
      M.left -= G / 2, M.top -= G / 2, M.width += G, M.height += G;
    }
    return M;
  }, [O, v, e]), I = 0, j = n.useCallback(
    (M) => Ar(M.clientX, M.clientY, t),
    [t]
  ), P = n.useCallback(
    (M, Y) => {
      for (const [X, D] of M) {
        const W = Y.get(X);
        if (!W || Math.abs(D.x - W.x) > 0.01 || Math.abs(D.y - W.y) > 0.01 || Math.abs(D.width - W.width) > 0.01 || Math.abs(D.height - W.height) > 0.01 || Math.abs(D.rotation - W.rotation) > 0.01)
          return !0;
      }
      return !1;
    },
    []
  ), F = n.useCallback(
    (M) => {
      const Y = x.width / 2, G = x.height / 2;
      for (let X = e.length - 1; X >= 0; X--) {
        const D = e[X];
        if (!D) continue;
        const W = y.get(D.id);
        if (!W) continue;
        const q = Y + W.x, pe = G + W.y, k = q - W.width / 2, B = q + W.width / 2, U = pe - W.height / 2, J = pe + W.height / 2;
        if (M.x >= k && M.x <= B && M.y >= U && M.y <= J)
          return D.id;
      }
      return null;
    },
    [e, y, x]
  ), E = n.useCallback(
    (M) => {
      M.stopPropagation(), M.preventDefault();
      const Y = j(M), G = eo(
        e.map((B) => B.id),
        y,
        x.width,
        x.height
      );
      u.current = G, d.current = Y, f.current = new Map(y), l("translate"), s(), document.body.style.cursor = "move";
      let X = !1;
      const D = 5, W = M.clientX, q = M.clientY, pe = (B) => {
        if (!X) {
          const xe = Math.abs(B.clientX - W), ye = Math.abs(B.clientY - q);
          (xe > D || ye > D) && (X = !0);
        }
        const U = j(B), J = U.x - Y.x, re = U.y - Y.y, me = kh(G, J, re);
        S(me);
      }, k = () => {
        if (window.removeEventListener("mousemove", pe), window.removeEventListener("mouseup", k), document.body.style.cursor = "", !X && o) {
          const U = F(Y);
          if (U) {
            l("idle"), S(null), u.current = null, d.current = null, o(U);
            return;
          }
        }
        const B = m.current ?? y;
        P(f.current, B) && a(B, "move"), l("idle"), S(null), u.current = null, d.current = null;
      };
      window.addEventListener("mousemove", pe), window.addEventListener("mouseup", k);
    },
    [e, y, x, j, s, a, P, S, o, F]
  ), T = n.useCallback(
    (M, Y) => {
      Y.stopPropagation(), Y.preventDefault();
      const G = j(Y), X = eo(
        e.map((q) => q.id),
        y,
        x.width,
        x.height
      );
      u.current = X, d.current = G, f.current = new Map(y), l("scale"), s(), document.body.style.cursor = jo(M, I);
      const D = (q) => {
        const pe = j(q), k = Ph(X, G, pe), B = !q.shiftKey, U = Mh(
          X,
          k,
          k,
          x.width,
          x.height,
          B
        );
        S(U);
      }, W = () => {
        window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", W), document.body.style.cursor = "";
        const q = m.current ?? y;
        P(f.current, q) && a(q, "resize"), l("idle"), S(null), u.current = null, d.current = null;
      };
      window.addEventListener("mousemove", D), window.addEventListener("mouseup", W);
    },
    [e, y, x, j, s, a, P, I, S]
  ), N = n.useCallback(
    (M) => {
      M.stopPropagation(), M.preventDefault();
      const Y = j(M), G = eo(
        e.map((W) => W.id),
        y,
        x.width,
        x.height
      );
      u.current = G, d.current = Y, f.current = new Map(y), l("rotate"), s(), document.body.style.cursor = "crosshair";
      const X = (W) => {
        const q = j(W);
        let pe = Ih(G, Y, q);
        W.shiftKey && (pe = Math.round(pe / 15) * 15);
        const k = Rh(
          G,
          pe,
          x.width,
          x.height
        );
        S(k);
      }, D = () => {
        window.removeEventListener("mousemove", X), window.removeEventListener("mouseup", D), document.body.style.cursor = "";
        const W = m.current ?? y;
        P(f.current, W) && a(W, "rotate"), l("idle"), S(null), u.current = null, d.current = null;
      };
      window.addEventListener("mousemove", X), window.addEventListener("mouseup", D);
    },
    [e, y, x, j, s, a, P, S]
  );
  au(
    c !== "idle",
    n.useCallback(() => {
      l("idle"), S(null), u.current = null, d.current = null, document.body.style.cursor = "";
    }, [S])
  );
  const z = c !== "idle";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "absolute transition-opacity duration-150",
      style: {
        left: L.left,
        top: L.top,
        width: L.width,
        height: L.height,
        opacity: i ? 0 : 1,
        // High z-index to ensure gizmo is always above SelectableItems
        zIndex: 100,
        // Container captures events to block SelectableItems below
        pointerEvents: "auto"
      },
      onMouseDown: (M) => M.stopPropagation(),
      onDoubleClick: (M) => M.stopPropagation(),
      children: /* @__PURE__ */ r.jsx(
        ou,
        {
          bounds: L,
          rotation: I,
          isInteracting: z,
          onTranslateStart: E,
          onScaleStart: T,
          onRotateStart: N
        }
      )
    }
  );
}
function Th({
  item: e,
  transform: t,
  coordParams: s,
  isSelected: a = !1,
  onSelect: o,
  onDragStart: i
}) {
  const [c, l] = n.useState(!1), u = n.useMemo(() => {
    const m = ha(t, s);
    if (e.type === "shape") {
      const b = e.strokeWidth ?? 0;
      if (b > 0) {
        const h = s.playerSize.width / s.projectSize.width, x = b * h;
        m.left -= x / 2, m.top -= x / 2, m.width += x, m.height += x;
      }
    }
    return m;
  }, [t, s, e]), d = n.useCallback((m) => {
    m.stopPropagation(), m.preventDefault(), o(m), i && i(m, t);
  }, [o, i, t]), f = c && !a;
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "absolute cursor-move",
      style: {
        left: u.left,
        top: u.top,
        width: u.width,
        height: u.height,
        transform: `rotate(${t.rotation}deg)`,
        transformOrigin: "center center",
        // Z-index to render above GroupGizmo border but below handles
        zIndex: 5,
        // Subtle hover indicator (only for unselected items) - outline only
        border: f ? "3px solid rgba(249, 115, 22, 0.4)" : "2px solid transparent"
      },
      "data-gizmo": "selectable-item",
      onMouseDown: d,
      onDoubleClick: (m) => m.stopPropagation(),
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1)
    }
  );
}
function Eh({ snapLines: e, coordParams: t }) {
  const s = n.useMemo(() => Sn(t), [t]);
  return e.length === 0 ? null : /* @__PURE__ */ r.jsx(r.Fragment, { children: e.map((a, o) => {
    const i = a.position * s;
    return a.type === "vertical" ? /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "absolute pointer-events-none",
        style: {
          left: i,
          top: 0,
          width: 1,
          height: "100%",
          backgroundColor: "#f472b6",
          // Pink color for visibility
          boxShadow: "0 0 4px #f472b6"
        },
        children: a.label && /* @__PURE__ */ r.jsx(
          "span",
          {
            className: "absolute text-xs font-medium px-1 rounded",
            style: {
              top: 4,
              left: 4,
              backgroundColor: "#f472b6",
              color: "white",
              fontSize: 10,
              whiteSpace: "nowrap"
            },
            children: a.label
          }
        )
      },
      `v-${o}-${a.position}`
    ) : /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "absolute pointer-events-none",
        style: {
          left: 0,
          top: i,
          width: "100%",
          height: 1,
          backgroundColor: "#f472b6",
          boxShadow: "0 0 4px #f472b6"
        },
        children: a.label && /* @__PURE__ */ r.jsx(
          "span",
          {
            className: "absolute text-xs font-medium px-1 rounded",
            style: {
              left: 4,
              top: 4,
              backgroundColor: "#f472b6",
              color: "white",
              fontSize: 10,
              whiteSpace: "nowrap"
            },
            children: a.label
          }
        )
      },
      `h-${o}-${a.position}`
    );
  }) });
}
function wn(e) {
  return e === "video" || e === "image";
}
function Ki(e) {
  if (!Number.isFinite(e) || e <= 0)
    return 0;
  const t = Math.round(e);
  return t % 2 === 0 ? t : t + 1;
}
function jh(e) {
  const t = Ki(e.width), s = Ki(e.height);
  return t === 0 || s === 0 ? null : { width: t, height: s };
}
function Nh(e) {
  return e === "match-both" || e === "size-only";
}
function Ah(e, t, s) {
  if (!e.transform)
    return e;
  const a = e.transform.width ?? s.width, o = e.transform.height ?? s.height, i = a / 2, c = o / 2, l = i, u = Math.max(i, s.width - i), d = c, f = Math.max(c, s.height - c), m = l > u ? s.width / 2 : Math.min(u, Math.max(l, t.x)), b = d > f ? s.height / 2 : Math.min(f, Math.max(d, t.y));
  return {
    ...e,
    transform: {
      ...e.transform,
      x: m - s.width / 2,
      y: b - s.height / 2
    }
  };
}
function to(e) {
  const t = gl();
  if (t) {
    if (t.type === "composition")
      return {
        allowed: !1,
        source: "library",
        title: "Drop On Timeline",
        description: "Compound clips still place best on the timeline."
      };
    if (t.type === "timeline-template")
      return {
        allowed: !1,
        source: "library",
        title: "Drop On Timeline",
        description: "Text and shape presets still place best on the timeline."
      };
    if (t.type === "media-items") {
      if ((Array.isArray(t.items) ? t.items.length : 0) !== 1)
        return {
          allowed: !1,
          source: "library",
          title: "Drop One Item",
          description: "Place one media item at a time on the canvas."
        };
      const o = t.items?.[0]?.mediaType;
      if (!wn(o))
        return {
          allowed: !1,
          source: "library",
          title: "Audio Goes On Timeline",
          description: "Canvas drop places visual layers only."
        };
    }
    return t.type === "media-item" && !wn(t.mediaType) ? {
      allowed: !1,
      source: "library",
      title: "Audio Goes On Timeline",
      description: "Canvas drop places visual layers only."
    } : {
      allowed: !0,
      source: "library",
      title: "Drop To Place",
      description: "Add this media at the playhead and drop position."
    };
  }
  return e.types.includes("Files") ? e.items.length !== 1 ? {
    allowed: !1,
    source: "external-file",
    title: "Drop One File",
    description: "Canvas drop imports one visual file at a time."
  } : {
    allowed: !0,
    source: "external-file",
    title: "Import And Place",
    description: "Import this file and place it on the canvas."
  } : null;
}
function Dh({
  coordParams: e,
  projectSize: t
}) {
  const s = n.useRef(0), [a, o] = n.useState(null), i = n.useCallback(() => {
    s.current = 0, o(null);
  }, []), c = n.useCallback(async ({
    media: h,
    mediaType: x,
    label: v,
    clientX: C,
    clientY: y,
    placementProjectSize: w,
    preserveInitialPlacement: S = !1
  }) => {
    if (!e || !wn(x))
      return;
    const R = w ?? t, O = Ne.getState(), L = ne.getState(), I = Vt.getState(), j = ad(h, x, O.fps), P = hl({
      tracks: O.tracks,
      items: O.items,
      activeTrackId: I.activeTrackId,
      proposedFrame: L.currentFrame,
      durationInFrames: j,
      itemType: x === "image" ? "image" : "video"
    });
    if (!P) {
      Yt.warning("No unlocked visible track is available for this drop.");
      return;
    }
    const F = await Cn(h.id);
    if (!F) {
      Yt.error("Unable to load dropped media.");
      return;
    }
    const E = await pl.getThumbnailBlobUrl(h.id), T = od({
      media: h,
      mediaId: h.id,
      mediaType: x,
      label: v,
      timelineFps: O.fps,
      blobUrl: F,
      thumbnailUrl: E,
      canvasWidth: R.width,
      canvasHeight: R.height,
      placement: {
        trackId: P.trackId,
        from: P.from,
        durationInFrames: j
      }
    }), N = S ? T : Ah(
      T,
      Ar(C, y, e),
      R
    );
    O.addItem(N), I.setActiveTrack(P.trackId), I.selectItems([N.id]);
  }, [e, t]), l = n.useCallback(async (h, x) => {
    if (!x.allowed) {
      Yt.warning(x.description);
      return;
    }
    const v = gl();
    if (!v)
      return;
    let C, y, w;
    if (v.type === "media-item" && v.mediaId && v.mediaType && v.fileName) {
      if (!wn(v.mediaType)) {
        Yt.warning("Canvas drop places visual layers only.");
        return;
      }
      C = v.mediaId, y = v.mediaType, w = v.fileName;
    } else if (v.type === "media-items" && v.items?.length === 1) {
      const R = v.items[0];
      if (!R || !wn(R.mediaType)) {
        Yt.warning("Canvas drop places visual layers only.");
        return;
      }
      C = R.mediaId, y = R.mediaType, w = R.fileName;
    }
    if (!C || !y || !w)
      return;
    const S = lr.getState().mediaById[C] ?? lr.getState().mediaItems.find((R) => R.id === C);
    if (!S) {
      Yt.error("Dropped media is no longer available.");
      return;
    }
    await c({
      media: S,
      mediaType: y,
      label: w,
      clientX: h.clientX,
      clientY: h.clientY
    });
  }, [c]), u = n.useCallback(async (h, x) => {
    if (!x.allowed) {
      Yt.warning(x.description);
      return;
    }
    const { supported: v, entries: C, errors: y } = await id(
      h.dataTransfer
    );
    if (!v) {
      Yt.warning("Drag-drop not supported in this browser. Use Chrome or Edge.");
      return;
    }
    y.length > 0 && Yt.error(`Some files were rejected: ${y.join(", ")}`);
    const w = C[0];
    if (!w)
      return;
    if (!wn(w.mediaType)) {
      Yt.warning("Drop audio on the timeline instead.");
      return;
    }
    const S = lr.getState(), R = S.currentProjectId, O = S.mediaItems.some((T) => T.mimeType.startsWith("video/"));
    let L = null;
    if (w.mediaType === "video" && R && !O)
      try {
        const T = cd(w.file), { metadata: N } = await ld.processMedia(w.file, T, {
          generateThumbnail: !1
        });
        if (N.type !== "video") {
          Yt.error("Unable to inspect dropped video.");
          return;
        }
        L = N;
      } catch (T) {
        Yt.error("Unable to inspect dropped file.", {
          description: T instanceof Error ? T.message : "Please try again."
        });
        return;
      }
    const j = (await lr.getState().importHandlesForPlacement([w.handle]))[0];
    if (!j) {
      Yt.error("Unable to import dropped file.");
      return;
    }
    const P = Ao(j.mimeType);
    if (!wn(P)) {
      Yt.warning("Drop audio on the timeline instead.");
      return;
    }
    let F, E = !1;
    if (L && R) {
      const T = await ud.getState().requestProjectMediaMatch(R, {
        fileName: w.file.name,
        width: L.width,
        height: L.height,
        fps: L.fps
      });
      E = Nh(T), E && (F = jh(L) ?? void 0);
    }
    await c({
      media: j,
      mediaType: P,
      label: j.fileName,
      clientX: h.clientX,
      clientY: h.clientY,
      placementProjectSize: F,
      preserveInitialPlacement: E
    });
  }, [c]), d = n.useCallback((h) => {
    const x = to(h.dataTransfer);
    x && (h.preventDefault(), s.current += 1, o(x));
  }, []), f = n.useCallback((h) => {
    const x = to(h.dataTransfer);
    x && (h.preventDefault(), h.dataTransfer.dropEffect = x.allowed ? "copy" : "none", o((v) => v?.allowed === x.allowed && v?.source === x.source && v?.title === x.title && v?.description === x.description ? v : x));
  }, []), m = n.useCallback((h) => {
    a && (h.preventDefault(), s.current = Math.max(0, s.current - 1), s.current === 0 && o(null));
  }, [a]), b = n.useCallback(async (h) => {
    const x = to(h.dataTransfer);
    if (i(), !!x && (h.preventDefault(), !!e)) {
      if (x.source === "library") {
        await l(h, x);
        return;
      }
      await u(h, x);
    }
  }, [i, e, u, l]);
  return {
    dropState: a,
    handleDragEnter: d,
    handleDragLeave: m,
    handleDragOver: f,
    handleDrop: b
  };
}
function Oh({
  containerRect: e,
  playerSize: t,
  projectSize: s,
  zoom: a,
  hitAreaRef: o,
  overlayPadding: i = 100
}) {
  const c = n.useRef(null), [l, u] = n.useState(null), d = Vt((H) => H.selectedItemIds), f = Vt((H) => H.selectItems), m = n.useMemo(() => new Set(d), [d]), b = Ne(
    fn(
      (H) => H.items.filter((ue) => ue.type !== "audio" && ue.type !== "adjustment")
    )
  ), h = Ne((H) => H.tracks), x = Ne((H) => H.snapEnabled), v = Ne((H) => H.updateItemTransform), C = Ne((H) => H.updateItemsTransformMap), y = Ne((H) => H.applyAutoKeyframeOperations), w = n.useRef(!1), S = ne((H) => H.isPlaying), R = ne.getState(), O = n.useRef(
    Hn(R)
  );
  n.useEffect(() => {
    if (!S) {
      const H = ne.getState();
      O.current = Hn(H);
    }
  }, [S]), n.useEffect(() => {
    let H = ne.getState().currentFrame;
    return ne.subscribe((ue, Ce) => {
      const Ge = ue.currentFrame;
      if (ue.isPlaying) {
        const ke = Ne.getState().items, _ = Math.min(H, Ge), he = Math.max(H, Ge);
        for (const et of ke) {
          const qe = et.from, $e = et.from + et.durationInFrames;
          if (qe > _ && qe <= he || $e > _ && $e <= he) {
            O.current = Ge, I((ct) => ct + 1);
            break;
          }
        }
      } else {
        const ke = Hn(ue), _ = Hn(Ce);
        ke !== _ && (O.current = ke, I((he) => he + 1));
      }
      H = Ge;
    });
  }, []);
  const [L, I] = n.useState(0), j = Xe((H) => H.setCanvasSize), P = Xe((H) => H.setSnappingEnabled), F = Xe((H) => H.snapLines), E = Fr((H) => H.isEditing), T = ze((H) => H.isEditing), N = Xe((H) => H.startTranslate), z = Xe((H) => H.updateInteraction), M = Xe((H) => H.endInteraction), Y = Xe((H) => H.clearInteraction);
  n.useEffect(() => {
    j(s.width, s.height);
  }, [s.width, s.height, j]), n.useEffect(() => {
    P(x);
  }, [x, P]);
  const G = n.useMemo(() => {
    const H = O.current, ue = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Map();
    for (const ke of h)
      ue.set(ke.id, ke.visible), Ce.set(ke.id, ke.locked), Ge.set(ke.id, ke.order);
    return b.filter((ke) => {
      if (!ue.get(ke.trackId) || Ce.get(ke.trackId)) return !1;
      const _ = ke.from + ke.durationInFrames;
      return H >= ke.from && H < _;
    }).toSorted((ke, _) => (Ge.get(_.trackId) ?? 0) - (Ge.get(ke.trackId) ?? 0));
  }, [b, h, S, L]), X = n.useMemo(() => G.filter((H) => m.has(H.id)), [G, m]), D = n.useMemo(() => G.filter((H) => !m.has(H.id)), [G, m]), W = n.useMemo(() => e ? {
    containerRect: e,
    playerSize: t,
    projectSize: s,
    zoom: a
  } : null, [e, t, s, a]), {
    dropState: q,
    handleDragEnter: pe,
    handleDragLeave: k,
    handleDragOver: B,
    handleDrop: U
  } = Dh({
    coordParams: W,
    projectSize: s
  }), J = Go(G, s), re = n.useMemo(() => !W || !e ? [] : G.map((H) => {
    const ue = J.get(H.id);
    if (!ue) return { id: H.id, getBoundingRect: () => ({ left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 }) };
    const Ce = ha(
      {
        x: ue.x,
        y: ue.y,
        width: ue.width,
        height: ue.height,
        rotation: ue.rotation,
        opacity: ue.opacity,
        cornerRadius: ue.cornerRadius
      },
      W
    ), Ge = {
      left: e.left + Ce.left,
      top: e.top + Ce.top,
      right: e.left + Ce.left + Ce.width,
      bottom: e.top + Ce.top + Ce.height,
      width: Ce.width,
      height: Ce.height
    };
    return {
      id: H.id,
      getBoundingRect: () => Ge
    };
  }), [G, W, e, J]), { marqueeState: me } = zu({
    containerRef: c,
    hitAreaRef: o,
    items: re,
    onSelectionChange: n.useCallback(
      (H) => {
        f(H);
      },
      [f]
    ),
    enabled: !0,
    threshold: 5
  }), xe = n.useCallback(() => {
  }, []), ye = n.useCallback(
    (H, ue, Ce = "move") => {
      const Ge = ne.getState().currentFrame, ke = b.find((ct) => ct.id === H);
      if (!ke) return;
      const _ = dn.getState().keyframesByItemId[H], he = {
        x: ue.x,
        y: ue.y,
        width: ue.width,
        height: ue.height,
        rotation: ue.rotation,
        opacity: ue.opacity,
        cornerRadius: ue.cornerRadius ?? 0
      }, et = /* @__PURE__ */ new Set(), qe = [];
      for (const ct of wh) {
        const pt = $n(
          ke,
          _,
          ct,
          he[ct],
          Ge
        );
        pt && (qe.push(pt), et.add(ct));
      }
      qe.length > 0 && y(qe);
      const $e = {};
      et.has("x") || ($e.x = ue.x), et.has("y") || ($e.y = ue.y), et.has("width") || ($e.width = ue.width), et.has("height") || ($e.height = ue.height), et.has("rotation") || ($e.rotation = ue.rotation), $e.cornerRadius = ue.cornerRadius, (Object.keys($e).length > 1 || !et.size) && v(H, $e, { operation: Ce }), w.current = !0, setTimeout(() => {
        w.current = !1;
      }, 100);
    },
    [b, v, y]
  ), Me = n.useCallback(
    (H, ue) => {
      const Ce = /* @__PURE__ */ new Map();
      for (const [Ge, ke] of H)
        Ce.set(Ge, {
          x: ke.x,
          y: ke.y,
          width: ke.width,
          height: ke.height,
          rotation: ke.rotation,
          opacity: ke.opacity,
          cornerRadius: ke.cornerRadius
        });
      C(Ce, { operation: ue }), w.current = !0, setTimeout(() => {
        w.current = !1;
      }, 100);
    },
    [C]
  ), Be = n.useCallback(
    (H) => {
      w.current || dl() || H.target.closest("[data-gizmo]") || (H.stopPropagation(), Vt.getState().clearItemSelection());
    },
    []
  ), Te = n.useCallback(
    (H, ue) => {
      ue.stopPropagation();
      const Ce = m.has(H), Ge = d.length > 1;
      ue.shiftKey ? f(Ce ? d.filter((ke) => ke !== H) : [...d, H]) : Ce && Ge ? f([H]) : Ce || f([H]);
    },
    [f, d, m]
  ), De = n.useCallback(
    (H) => {
      const ue = s.width / 2, Ce = s.height / 2, Ge = [];
      for (const ke of G) {
        const _ = J.get(ke.id);
        if (!_) continue;
        const he = ue + _.x, et = Ce + _.y, qe = he - _.width / 2, $e = he + _.width / 2, ct = et - _.height / 2, pt = et + _.height / 2;
        H.x >= qe && H.x <= $e && H.y >= ct && H.y <= pt && Ge.push(ke);
      }
      return Ge;
    },
    [G, s, J]
  ), Qe = n.useCallback(
    (H) => {
      if (!W) return;
      H.preventDefault(), H.stopPropagation();
      const ue = Ar(H.clientX, H.clientY, W), Ce = De(ue);
      Ce.length > 1 ? u({
        x: H.clientX,
        y: H.clientY,
        items: Ce
      }) : Ce.length === 1 && f([Ce[0].id]);
    },
    [W, De, f]
  ), Ee = n.useCallback(
    (H) => {
      f([H]), u(null);
    },
    [f]
  );
  n.useEffect(() => {
    if (!l) return;
    const H = () => u(null);
    return window.addEventListener("click", H), window.addEventListener("contextmenu", H), () => {
      window.removeEventListener("click", H), window.removeEventListener("contextmenu", H);
    };
  }, [l]);
  const ee = n.useCallback((H, ue) => Math.abs(H.x - ue.x) > 0.01 || Math.abs(H.y - ue.y) > 0.01 || Math.abs(H.width - ue.width) > 0.01 || Math.abs(H.height - ue.height) > 0.01 || Math.abs(H.rotation - ue.rotation) > 0.01, []), Ve = n.useCallback(
    (H, ue, Ce) => {
      if (!W) return;
      const Ge = { ...Ce }, ke = Ar(ue.clientX, ue.clientY, W), _ = b.find((pt) => pt.id === H), et = Xe.getState().preview?.[H]?.properties?.crop ?? (_ && "crop" in _ ? _.crop : void 0), qe = _ ? cu(_, Ce.width, Ce.height, et) : void 0;
      N(H, ke, Ce, void 0, qe ?? void 0), document.body.style.cursor = "move";
      const $e = (pt) => {
        const Gt = Ar(pt.clientX, pt.clientY, W);
        z(Gt, pt.shiftKey, pt.ctrlKey, pt.altKey);
      }, ct = () => {
        window.removeEventListener("mousemove", $e), window.removeEventListener("mouseup", ct), document.body.style.cursor = "";
        const pt = M();
        pt && ee(Ge, pt) && ye(H, pt, "move"), requestAnimationFrame(() => {
          Y();
        });
      };
      window.addEventListener("mousemove", $e), window.addEventListener("mouseup", ct);
    },
    [W, N, z, M, Y, ye, ee, b]
  );
  return W ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: c,
      className: "absolute z-10",
      style: {
        top: -i,
        left: -i,
        width: t.width + i * 2,
        height: t.height + i * 2,
        pointerEvents: "none"
      },
      onDoubleClick: (H) => H.stopPropagation(),
      children: [
        !E && !T && /* @__PURE__ */ r.jsx($u, { marqueeState: me }),
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "absolute",
            style: {
              top: i,
              left: i,
              width: t.width,
              height: t.height,
              pointerEvents: E || T ? "none" : "auto"
            },
            onClick: Be,
            onContextMenu: Qe,
            onDragEnter: pe,
            onDragOver: B,
            onDragLeave: k,
            onDrop: U,
            children: [
              q && /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: `absolute inset-0 pointer-events-none z-20 flex items-center justify-center border-2 border-dashed ${q.allowed ? "border-primary/70 bg-primary/10" : "border-destructive/60 bg-destructive/10"}`,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "rounded-lg border border-border/70 bg-background/90 px-4 py-3 text-center shadow-lg backdrop-blur-sm", children: [
                    /* @__PURE__ */ r.jsx("p", { className: `text-sm font-semibold ${q.allowed ? "text-primary" : "text-destructive"}`, children: q.title }),
                    /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: q.description })
                  ] })
                }
              ),
              D.map((H) => {
                const ue = J.get(H.id);
                return ue ? /* @__PURE__ */ r.jsx(
                  Th,
                  {
                    item: H,
                    transform: {
                      x: ue.x,
                      y: ue.y,
                      width: ue.width,
                      height: ue.height,
                      rotation: ue.rotation,
                      opacity: ue.opacity,
                      cornerRadius: ue.cornerRadius
                    },
                    coordParams: W,
                    onSelect: (Ce) => Te(H.id, Ce),
                    onDragStart: (Ce, Ge) => Ve(H.id, Ce, Ge)
                  },
                  H.id
                ) : null;
              }),
              E || T ? null : X.length === 1 && X[0] ? /* @__PURE__ */ r.jsx(
                Ch,
                {
                  item: X[0],
                  coordParams: W,
                  onTransformStart: xe,
                  onTransformEnd: (H, ue) => ye(X[0].id, H, ue),
                  isPlaying: S
                }
              ) : X.length > 1 ? /* @__PURE__ */ r.jsx(
                Fh,
                {
                  items: X,
                  coordParams: W,
                  onTransformStart: xe,
                  onTransformEnd: Me,
                  onItemClick: (H) => f([H]),
                  isPlaying: S
                }
              ) : null,
              /* @__PURE__ */ r.jsx(Eh, { snapLines: F, coordParams: W })
            ]
          }
        ),
        l && Gu.createPortal(
          /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "fixed z-[9999] bg-popover border border-border rounded-md shadow-lg py-1 min-w-[160px]",
              style: {
                left: l.x,
                top: l.y
              },
              onClick: (H) => H.stopPropagation(),
              children: [
                /* @__PURE__ */ r.jsx("div", { className: "px-2 py-1.5 text-xs text-muted-foreground border-b border-border mb-1", children: "Select Layer" }),
                l.items.map((H, ue) => {
                  const Ge = h.find((_) => _.id === H.trackId)?.name ?? `Track ${ue + 1}`, ke = H.label || `${H.type} clip`;
                  return /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      className: "w-full px-3 py-1.5 text-sm text-left hover:bg-accent hover:text-accent-foreground flex items-center gap-2",
                      onClick: () => Ee(H.id),
                      children: [
                        /* @__PURE__ */ r.jsxs("span", { className: "text-muted-foreground text-xs", children: [
                          Ge,
                          ":"
                        ] }),
                        /* @__PURE__ */ r.jsx("span", { className: "truncate", children: ke })
                      ]
                    },
                    H.id
                  );
                })
              ]
            }
          ),
          dd() ?? document.body
        )
      ]
    }
  ) : null;
}
const qi = 0.25;
function uu(e) {
  return {
    position: [...e.position],
    inHandle: [...e.inHandle],
    outHandle: [...e.outHandle]
  };
}
function Yi([e, t]) {
  return Math.hypot(e, t);
}
function zn([e, t]) {
  const s = Math.hypot(e, t);
  return s <= Number.EPSILON ? [0, 0] : [e / s, t / s];
}
function _h(e, t, s) {
  const a = zn([
    t[0] - e[0],
    t[1] - e[1]
  ]), o = zn([
    s[0] - t[0],
    s[1] - t[1]
  ]), i = zn([
    a[0] + o[0],
    a[1] + o[1]
  ]);
  return i[0] !== 0 || i[1] !== 0 ? i : o[0] !== 0 || o[1] !== 0 ? o : a;
}
function Lh(e, t) {
  const s = e[t], a = e[(t + 1) % e.length], o = (s.position[0] + a.position[0]) / 2, i = (s.position[1] + a.position[1]) / 2, c = {
    position: [o, i],
    inHandle: [0, 0],
    outHandle: [0, 0]
  }, l = [...e];
  return l.splice(t + 1, 0, c), l;
}
function du(e, t) {
  if (t < 0 || t >= e.length)
    return e;
  const s = e.map(uu);
  return s[t] = {
    ...s[t],
    inHandle: [0, 0],
    outHandle: [0, 0]
  }, s;
}
function Bh(e, t) {
  if (e.length < 2 || t < 0 || t >= e.length)
    return e;
  const s = e.map(uu), a = s[t], o = s[(t - 1 + s.length) % s.length], i = s[(t + 1) % s.length], c = Yi(a.inHandle), l = Yi(a.outHandle), u = Math.hypot(
    a.position[0] - o.position[0],
    a.position[1] - o.position[1]
  ), d = Math.hypot(
    i.position[0] - a.position[0],
    i.position[1] - a.position[1]
  ), f = c || u * qi, m = l || d * qi, b = c > 0 ? zn([-a.inHandle[0], -a.inHandle[1]]) : null, h = l > 0 ? zn(a.outHandle) : null, x = b && h ? zn([
    b[0] + h[0],
    b[1] + h[1]
  ]) : null, v = x && (x[0] !== 0 || x[1] !== 0) ? x : h ?? b ?? _h(o.position, a.position, i.position);
  return v[0] === 0 && v[1] === 0 ? du(s, t) : (a.inHandle = [-v[0] * f, -v[1] * f], a.outHandle = [v[0] * m, v[1] * m], s);
}
function Xi(e, t) {
  if (e.length <= 3) return null;
  const s = [...e];
  return s.splice(t, 1), s;
}
const Zi = 1e-10;
function Ji(e, t, s, a, o) {
  const i = 1 - o;
  return i * i * i * e + 3 * i * i * o * t + 3 * i * o * o * s + o * o * o * a;
}
function Qi(e, t, s, a) {
  const o = -e + 3 * t - 3 * s + a, i = 3 * e - 6 * t + 3 * s, c = -3 * e + 3 * t, l = 3 * o, u = 2 * i, d = c;
  if (Math.abs(l) < 1e-8) {
    if (Math.abs(u) < 1e-8) return [];
    const x = -d / u;
    return x > 0 && x < 1 ? [x] : [];
  }
  const f = u * u - 4 * l * d;
  if (f < 0) return [];
  if (Math.abs(f) < Zi) {
    const x = -u / (2 * l);
    return x > 0 && x < 1 ? [x] : [];
  }
  const m = Math.sqrt(f), b = (-u + m) / (2 * l), h = (-u - m) / (2 * l);
  return [b, h].filter((x) => x > 0 && x < 1).filter(
    (x, v, C) => C.findIndex((y) => Math.abs(y - x) < Zi) === v
  );
}
function fu(e) {
  if (e.length === 0) return null;
  let t = 1 / 0, s = 1 / 0, a = -1 / 0, o = -1 / 0;
  const i = (c, l) => {
    t = Math.min(t, c), s = Math.min(s, l), a = Math.max(a, c), o = Math.max(o, l);
  };
  if (e.length === 1) {
    const [c, l] = e[0].position;
    return i(c, l), { minX: t, minY: s, maxX: a, maxY: o };
  }
  for (let c = 0; c < e.length; c++) {
    const l = e[c], u = e[(c + 1) % e.length], d = l.position[0], f = l.position[1], m = l.position[0] + l.outHandle[0], b = l.position[1] + l.outHandle[1], h = u.position[0] + u.inHandle[0], x = u.position[1] + u.inHandle[1], v = u.position[0], C = u.position[1], y = /* @__PURE__ */ new Set([
      0,
      1,
      ...Qi(d, m, h, v),
      ...Qi(f, b, x, C)
    ]);
    for (const w of y)
      i(
        Ji(d, m, h, v, w),
        Ji(f, b, x, C, w)
      );
  }
  return { minX: t, minY: s, maxX: a, maxY: o };
}
function ec(e, t, s) {
  const a = fu(e);
  if (!a)
    return {
      pathVertices: e,
      transform: s ?? {}
    };
  const o = Math.max(t.width, 1), i = Math.max(t.height, 1), c = Math.max(a.maxX - a.minX, 2 / o), l = Math.max(a.maxY - a.minY, 2 / i), u = ((a.minX + a.maxX) / 2 - 0.5) * t.width, d = ((a.minY + a.maxY) / 2 - 0.5) * t.height, f = t.rotation * Math.PI / 180, m = Math.cos(f), b = Math.sin(f);
  return {
    pathVertices: e.map((h) => ({
      position: [
        (h.position[0] - a.minX) / c,
        (h.position[1] - a.minY) / l
      ],
      inHandle: [
        h.inHandle[0] / c,
        h.inHandle[1] / l
      ],
      outHandle: [
        h.outHandle[0] / c,
        h.outHandle[1] / l
      ]
    })),
    transform: {
      ...s,
      x: t.x + u * m - d * b,
      y: t.y + u * b + d * m,
      width: Math.max(t.width * c, 2),
      height: Math.max(t.height * l, 2),
      rotation: t.rotation,
      opacity: t.opacity,
      cornerRadius: t.cornerRadius
    }
  };
}
const tc = 5, Hh = 8, $s = 4, cn = 8, Uh = 12, ro = 3, rc = 10, Ks = 16, Vh = /^Track\s+(\d+)$/i, Gh = ["x", "y", "width", "height"];
function Zr(e) {
  return e.map((t) => ({
    position: [...t.position],
    inHandle: [...t.inHandle],
    outHandle: [...t.outHandle]
  }));
}
function nc(e, t, s) {
  e.beginPath(), e.arc(t, s, Hh, 0, Math.PI * 2), e.fillStyle = "rgba(251, 191, 36, 0.18)", e.fill(), e.strokeStyle = "#f59e0b", e.lineWidth = 1.5, e.stroke();
}
function Wh(e) {
  const t = /* @__PURE__ */ new Set();
  for (const a of e) {
    const o = a.name.match(Vh);
    if (!o?.[1])
      continue;
    const i = Number.parseInt(o[1], 10);
    Number.isFinite(i) && i > 0 && t.add(i);
  }
  let s = 1;
  for (; t.has(s); )
    s++;
  return `Track ${s}`;
}
function On(e, t, s, a, o) {
  const i = 1 - o;
  return i * i * i * e + 3 * i * i * o * t + 3 * i * o * o * s + o * o * o * a;
}
function zh(e, t, s) {
  let a = !1;
  for (let o = 0, i = s.length - 1; o < s.length; i = o++) {
    const [c, l] = s[o], [u, d] = s[i];
    l > t != d > t && e < (u - c) * (t - l) / (d - l || Number.EPSILON) + c && (a = !a);
  }
  return a;
}
function sc(e, t, s, a, o, i) {
  const c = o - s, l = i - a, u = c * c + l * l;
  if (u === 0)
    return Math.hypot(e - s, t - a);
  const d = Math.max(
    0,
    Math.min(1, ((e - s) * c + (t - a) * l) / u)
  ), f = s + d * c, m = a + d * l;
  return Math.hypot(e - f, t - m);
}
function $h(e, t) {
  return Math.abs(e.x - t.x) > 0.01 || Math.abs(e.y - t.y) > 0.01 || Math.abs(e.width - t.width) > 0.01 || Math.abs(e.height - t.height) > 0.01 || Math.abs(e.rotation - t.rotation) > 0.01;
}
function ac(e, t) {
  return {
    x: e.x ?? t.x,
    y: e.y ?? t.y,
    width: e.width ?? t.width,
    height: e.height ?? t.height,
    rotation: e.rotation ?? t.rotation,
    opacity: e.opacity ?? t.opacity,
    cornerRadius: e.cornerRadius ?? t.cornerRadius,
    aspectRatioLocked: e.aspectRatioLocked ?? t.aspectRatioLocked
  };
}
const Kh = n.memo(function({
  coordParams: t,
  playerSize: s,
  itemTransform: a
}) {
  const o = n.useRef(null), [i, c] = n.useState(!1), [l, u] = n.useState(null), [d, f] = n.useState(null), [m, b] = n.useState(null), h = ze((g) => g.isEditing), x = ze((g) => g.editingItemId), v = ze((g) => g.draggingVertexIndex), C = ze((g) => g.draggingHandle), y = ze((g) => g.previewVertices), w = ze((g) => g.selectedVertexIndices), S = ze((g) => g.selectedVertexIndex), R = ze((g) => g.hoveredVertexIndex), O = ze((g) => g.hoveredHandle), L = ze((g) => g.penMode), I = ze((g) => g.penVertices), j = ze((g) => g.penDraggingHandle), P = ze((g) => g.penCursorPos), F = ze((g) => g.finishPenRequestVersion), E = ze((g) => g.cancelPenRequestVersion), T = ze(
    (g) => g.convertSelectedVertexRequestVersion
  ), N = ze(
    (g) => g.convertSelectedVertexRequestMode
  ), z = Ne((g) => g.commitMaskEdit), M = ze((g) => g.selectVertices), Y = ze((g) => g.selectVertex), G = ze((g) => g.startVertexDrag), X = ze((g) => g.startHandleDrag), D = ze((g) => g.updatePreview), W = ze((g) => g.endDrag), q = ze((g) => g.setHover), pe = ze((g) => g.stopEditing), k = ze((g) => g.addPenVertex), B = ze((g) => g.setPenVertices), U = ze((g) => g.updatePenLastHandle), J = ze((g) => g.setPenDragging), re = ze((g) => g.setPenCursorPos), me = ze((g) => g.cancelPenMode), xe = Xe((g) => g.startTranslate), ye = Xe((g) => g.updateInteraction), Me = Xe((g) => g.endInteraction), Be = Xe((g) => g.clearInteraction), Te = d?.transform ?? a, De = n.useCallback(() => ha(Te, t), [Te, t]), Qe = n.useCallback(
    (g) => {
      const V = De();
      return [
        V.left + g[0] * V.width,
        V.top + g[1] * V.height
      ];
    },
    [De]
  ), Ee = n.useCallback(
    (g) => Qe(g.position),
    [Qe]
  ), ee = n.useCallback(
    (g, V) => {
      const te = V === "in" ? g.inHandle : g.outHandle;
      return Qe([g.position[0] + te[0], g.position[1] + te[1]]);
    },
    [Qe]
  ), Ve = n.useCallback(
    (g, V) => {
      const te = Ar(g, V, t), oe = De(), K = Sn(t), Z = oe.left / K, ie = oe.top / K, Pe = oe.width / K, Ie = oe.height / K;
      return [
        (te.x - Z) / Pe,
        (te.y - ie) / Ie
      ];
    },
    [t, De]
  ), H = n.useCallback(() => {
    if (d) return d.vertices;
    if (y) return y;
    if (!x) return null;
    const V = Zt.getState().items.find((te) => te.id === x);
    return V?.type === "shape" && V.shapeType === "path" ? V.pathVertices ?? null : null;
  }, [d, x, y]), ue = n.useCallback(
    (g, V) => ({
      left: Math.min(g[0], V[0]),
      top: Math.min(g[1], V[1]),
      width: Math.abs(V[0] - g[0]),
      height: Math.abs(V[1] - g[1])
    }),
    []
  ), Ce = n.useCallback(
    (g) => {
      const V = H();
      if (!V) return [];
      const te = g.left + g.width, oe = g.top + g.height, K = [];
      for (let Z = 0; Z < V.length; Z++) {
        const [ie, Pe] = Ee(V[Z]);
        ie >= g.left && ie <= te && Pe >= g.top && Pe <= oe && K.push(Z);
      }
      return K;
    },
    [H, Ee]
  ), Ge = n.useCallback(() => {
    const g = o.current;
    if (!g) return;
    const V = g.getContext("2d");
    if (!V) return;
    const te = window.devicePixelRatio || 1;
    g.width = s.width * te, g.height = s.height * te, V.scale(te, te), V.clearRect(0, 0, s.width, s.height), L ? et(V) : (_(V), he(V));
  }, [s, L, I, P, j, H, Ee, ee, Qe, v, C, w, S, R, O, l, m]), ke = n.useCallback((g, V, te) => {
    const oe = V.outHandle, K = te.inHandle;
    if (oe[0] === 0 && oe[1] === 0 && K[0] === 0 && K[1] === 0) {
      const [ie, Pe] = Ee(te);
      g.lineTo(ie, Pe);
    } else {
      const [ie, Pe] = ee(V, "out"), [Ie, Ze] = ee(te, "in"), [ot, ht] = Ee(te);
      g.bezierCurveTo(ie, Pe, Ie, Ze, ot, ht);
    }
  }, [Ee, ee]), _ = n.useCallback((g) => {
    const V = H();
    if (!V || V.length < 2) return;
    g.beginPath();
    const [te, oe] = Ee(V[0]);
    g.moveTo(te, oe);
    for (let K = 0; K < V.length; K++) {
      const Z = V[K], ie = V[(K + 1) % V.length];
      ke(g, Z, ie);
    }
    if (g.closePath(), g.strokeStyle = "#22d3ee", g.lineWidth = 1.5, g.stroke(), g.fillStyle = "rgba(34, 211, 238, 0.08)", g.fill(), l !== null) {
      const K = V[l], Z = V[(l + 1) % V.length];
      if (K && Z) {
        g.beginPath();
        const [ie, Pe] = Ee(K), [Ie, Ze] = Ee(Z);
        g.moveTo(ie, Pe), ke(g, K, Z), g.strokeStyle = "#67e8f9", g.lineWidth = 3, g.stroke();
        const ot = K.outHandle[0] === 0 && K.outHandle[1] === 0 && Z.inHandle[0] === 0 && Z.inHandle[1] === 0, [ht, at] = ot ? [
          (ie + Ie) / 2,
          (Pe + Ze) / 2
        ] : (() => {
          const [st, rt] = ee(K, "out"), [it, ft] = ee(Z, "in");
          return [
            On(ie, st, it, Ie, 0.5),
            On(Pe, rt, ft, Ze, 0.5)
          ];
        })();
        g.beginPath(), g.arc(ht, at, 4, 0, Math.PI * 2), g.fillStyle = "#ffffff", g.fill(), g.strokeStyle = "#22d3ee", g.lineWidth = 1.5, g.stroke();
      }
    }
    for (let K = 0; K < V.length; K++)
      qe(g, V[K], K);
  }, [H, Ee, ee, v, C, w, R, O, l, ke]), he = n.useCallback((g) => {
    !m || m.width < 1 && m.height < 1 || (g.save(), g.beginPath(), g.rect(
      m.left,
      m.top,
      m.width,
      m.height
    ), g.fillStyle = "rgba(34, 211, 238, 0.12)", g.fill(), g.strokeStyle = "rgba(103, 232, 249, 0.95)", g.lineWidth = 1, g.setLineDash([6, 4]), g.stroke(), g.restore());
  }, [m]), et = n.useCallback((g) => {
    if (I.length === 0) {
      if (P) {
        const [K, Z] = Qe(P);
        g.beginPath(), g.arc(K, Z, 3, 0, Math.PI * 2), g.fillStyle = "rgba(34, 211, 238, 0.5)", g.fill();
      }
      return;
    }
    g.beginPath();
    const [V, te] = Ee(I[0]);
    g.moveTo(V, te);
    for (let K = 0; K < I.length - 1; K++)
      ke(g, I[K], I[K + 1]);
    g.strokeStyle = "#22d3ee", g.lineWidth = 1.5, g.stroke();
    const oe = I.length >= 3 && v === 0 && C === "out";
    if (oe) {
      const K = I[I.length - 1], Z = I[0];
      g.beginPath();
      const [ie, Pe] = Ee(K);
      g.moveTo(ie, Pe), ke(g, K, Z), g.strokeStyle = "rgba(34, 211, 238, 0.4)", g.lineWidth = 1, g.setLineDash([4, 4]), g.stroke(), g.setLineDash([]);
    }
    if (P && !j && !oe) {
      const K = I[I.length - 1], [Z, ie] = Ee(K), [Pe, Ie] = Qe(P);
      if (g.beginPath(), g.moveTo(Z, ie), K.outHandle[0] !== 0 || K.outHandle[1] !== 0) {
        const [Ze, ot] = ee(K, "out");
        g.quadraticCurveTo(Ze, ot, Pe, Ie);
      } else
        g.lineTo(Pe, Ie);
      g.strokeStyle = "rgba(34, 211, 238, 0.4)", g.lineWidth = 1, g.setLineDash([4, 4]), g.stroke(), g.setLineDash([]);
    }
    for (let K = 0; K < I.length; K++) {
      const Z = I[K], [ie, Pe] = Ee(Z), Ie = Z.outHandle[0] !== 0 || Z.outHandle[1] !== 0, Ze = Z.inHandle[0] !== 0 || Z.inHandle[1] !== 0;
      if (Ie) {
        const [it, ft] = ee(Z, "out");
        g.beginPath(), g.moveTo(ie, Pe), g.lineTo(it, ft), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(it, ft, $s, 0, Math.PI * 2);
        const vt = v === K && C === "out", Rr = R === K && O === "out";
        g.fillStyle = vt ? "#fff" : Rr ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
      }
      if (Ze) {
        const [it, ft] = ee(Z, "in");
        g.beginPath(), g.moveTo(ie, Pe), g.lineTo(it, ft), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(it, ft, $s, 0, Math.PI * 2);
        const vt = v === K && C === "in", Rr = R === K && O === "in";
        g.fillStyle = vt ? "#fff" : Rr ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
      }
      const ht = K === 0 && I.length >= 3 && P != null && (() => {
        const [it, ft] = Ee(I[0]), [vt, Rr] = Qe(P);
        return Math.hypot(vt - it, Rr - ft) < Uh;
      })(), at = v === K && C === null, st = w.includes(K), rt = R === K && O === null;
      st && nc(g, ie, Pe), g.beginPath(), g.arc(ie, Pe, tc, 0, Math.PI * 2), g.fillStyle = st ? at ? "#fde68a" : "#fef3c7" : at ? "#fff" : ht || rt ? "#22d3ee" : "#0e7490", g.fill(), g.strokeStyle = st ? "#f59e0b" : ht || at ? "#fff" : "#22d3ee", g.lineWidth = ht || st ? 2.5 : 1.5, g.stroke();
    }
  }, [I, P, j, Ee, ee, Qe, v, C, w, R, O, ke]), qe = n.useCallback((g, V, te) => {
    const [oe, K] = Ee(V), Z = V.inHandle[0] !== 0 || V.inHandle[1] !== 0, ie = V.outHandle[0] !== 0 || V.outHandle[1] !== 0;
    if (Z) {
      const [ot, ht] = ee(V, "in");
      g.beginPath(), g.moveTo(oe, K), g.lineTo(ot, ht), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(ot, ht, $s, 0, Math.PI * 2);
      const at = R === te && O === "in";
      g.fillStyle = at ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
    }
    if (ie) {
      const [ot, ht] = ee(V, "out");
      g.beginPath(), g.moveTo(oe, K), g.lineTo(ot, ht), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(ot, ht, $s, 0, Math.PI * 2);
      const at = R === te && O === "out";
      g.fillStyle = at ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
    }
    const Pe = v === te && C === null, Ie = w.includes(te), Ze = R === te && O === null;
    Ie && nc(g, oe, K), g.beginPath(), g.arc(oe, K, tc, 0, Math.PI * 2), g.fillStyle = Ie ? Pe ? "#fde68a" : "#fef3c7" : Pe ? "#fff" : Ze ? "#22d3ee" : "#0e7490", g.fill(), g.strokeStyle = Ie ? "#f59e0b" : "#22d3ee", g.lineWidth = Ie ? 2.5 : 1.5, g.stroke();
  }, [Ee, ee, v, C, w, R, O]);
  n.useEffect(() => {
    Ge();
  }, [Ge]), n.useEffect(() => {
    c(!1), u(null), f(null), b(null), Y(null);
  }, [x, L, Y]);
  const $e = n.useCallback(
    (g, V) => {
      const te = H();
      if (!te) return null;
      for (let oe = 0; oe < te.length; oe++) {
        const K = te[oe];
        if (K.inHandle[0] !== 0 || K.inHandle[1] !== 0) {
          const [Z, ie] = ee(K, "in");
          if (Math.hypot(g - Z, V - ie) < cn)
            return { type: "inHandle", index: oe };
        }
        if (K.outHandle[0] !== 0 || K.outHandle[1] !== 0) {
          const [Z, ie] = ee(K, "out");
          if (Math.hypot(g - Z, V - ie) < cn)
            return { type: "outHandle", index: oe };
        }
      }
      for (let oe = 0; oe < te.length; oe++) {
        const [K, Z] = Ee(te[oe]);
        if (Math.hypot(g - K, V - Z) < cn)
          return { type: "vertex", index: oe };
      }
      for (let oe = 0; oe < te.length; oe++) {
        const K = te[oe], Z = te[(oe + 1) % te.length], [ie, Pe] = Ee(K), [Ie, Ze] = Ee(Z);
        if (K.outHandle[0] === 0 && K.outHandle[1] === 0 && Z.inHandle[0] === 0 && Z.inHandle[1] === 0) {
          if (sc(g, V, ie, Pe, Ie, Ze) < cn)
            return { type: "segment", index: oe };
          continue;
        }
        const [ht, at] = ee(K, "out"), [st, rt] = ee(Z, "in");
        let it = ie, ft = Pe;
        for (let vt = 1; vt <= Ks; vt++) {
          const Rr = vt / Ks, _r = On(ie, ht, st, Ie, Rr), hn = On(Pe, at, rt, Ze, Rr);
          if (sc(g, V, it, ft, _r, hn) < cn)
            return { type: "segment", index: oe };
          it = _r, ft = hn;
        }
      }
      if (te.length >= 3) {
        const oe = [Ee(te[0])];
        for (let K = 0; K < te.length; K++) {
          const Z = te[K], ie = te[(K + 1) % te.length], [Pe, Ie] = Ee(Z), [Ze, ot] = Ee(ie);
          if (Z.outHandle[0] === 0 && Z.outHandle[1] === 0 && ie.inHandle[0] === 0 && ie.inHandle[1] === 0) {
            oe.push([Ze, ot]);
            continue;
          }
          const [at, st] = ee(Z, "out"), [rt, it] = ee(ie, "in");
          for (let ft = 1; ft <= Ks; ft++) {
            const vt = ft / Ks;
            oe.push([
              On(Pe, at, rt, Ze, vt),
              On(Ie, st, it, ot, vt)
            ]);
          }
        }
        if (zh(g, V, oe))
          return { type: "shape" };
      }
      return null;
    },
    [H, Ee, ee]
  ), ct = n.useCallback(
    (g, V) => {
      for (let te = 0; te < I.length; te++) {
        const oe = I[te];
        if (oe.inHandle[0] !== 0 || oe.inHandle[1] !== 0) {
          const [K, Z] = ee(oe, "in");
          if (Math.hypot(g - K, V - Z) < cn)
            return { type: "inHandle", index: te };
        }
        if (oe.outHandle[0] !== 0 || oe.outHandle[1] !== 0) {
          const [K, Z] = ee(oe, "out");
          if (Math.hypot(g - K, V - Z) < cn)
            return { type: "outHandle", index: te };
        }
      }
      for (let te = 0; te < I.length; te++) {
        const [oe, K] = Ee(I[te]);
        if (Math.hypot(g - oe, V - K) < cn)
          return { type: "vertex", index: te };
      }
      return null;
    },
    [I, Ee, ee]
  ), pt = n.useRef(null), Gt = n.useRef(null), vr = n.useRef(null), Lt = n.useCallback(() => {
    Gt.current = null, J(!1), W(), q(null);
  }, [W, q, J]), Dr = n.useCallback(
    (g, V, te, oe) => {
      const K = Ar(V, te, t), Z = De(), ie = Sn(t), Pe = Z.width / ie, Ie = Z.height / ie, Ze = K.x - g.startCanvasPos[0], ot = K.y - g.startCanvasPos[1], ht = Zr(g.startVertices);
      if (g.handleType === null) {
        const ft = ht[g.vertexIndex], vt = g.startVertices[g.vertexIndex];
        return ft.position[0] = vt.position[0] + Ze / Pe, ft.position[1] = vt.position[1] + ot / Ie, ht;
      }
      const at = ht[g.vertexIndex], st = g.startVertices[g.vertexIndex], rt = g.handleType === "in" ? st.inHandle : st.outHandle, it = [
        rt[0] + Ze / Pe,
        rt[1] + ot / Ie
      ];
      return g.handleType === "in" ? (at.inHandle = it, oe || (at.outHandle = [-it[0], -it[1]])) : (at.outHandle = it, oe || (at.inHandle = [-it[0], -it[1]])), ht;
    },
    [t, De]
  ), fr = n.useCallback(
    (g) => {
      g.stopPropagation(), g.preventDefault();
      const V = Ve(g.clientX, g.clientY);
      re(V);
      const te = o.current?.getBoundingClientRect();
      if (!te) return;
      const oe = g.clientX - te.left, K = g.clientY - te.top, Z = ct(oe, K), ie = Ar(g.clientX, g.clientY, t);
      if (Z) {
        const Ie = Z.type === "inHandle" ? "in" : Z.type === "outHandle" ? "out" : null, Ze = Z.type === "vertex" && Z.index === 0 && I.length >= 3;
        Gt.current = Ze ? {
          type: "close-or-drag",
          vertexIndex: Z.index,
          // Match normal point placement: drag sets the anchor's outgoing direction.
          handleType: "out",
          startScreenPos: [g.clientX, g.clientY],
          startCanvasPos: [ie.x, ie.y],
          startVertices: Zr(I),
          hasMoved: !1
        } : Z.type === "vertex" ? {
          type: "vertex",
          vertexIndex: Z.index,
          handleType: null,
          startScreenPos: [g.clientX, g.clientY],
          startCanvasPos: [ie.x, ie.y],
          startVertices: Zr(I),
          hasMoved: !1
        } : {
          type: "handle",
          vertexIndex: Z.index,
          handleType: Ie,
          startScreenPos: [g.clientX, g.clientY],
          startCanvasPos: [ie.x, ie.y],
          startVertices: Zr(I),
          hasMoved: !1
        }, J(!0), q(Z.index, Ie), Z.type === "vertex" && !Ze ? G(Z.index) : Ie && X(Z.index, Ie), o.current?.setPointerCapture(g.pointerId);
        return;
      }
      k({
        position: V,
        inHandle: [0, 0],
        outHandle: [0, 0]
      }), J(!0), q(I.length, null), Gt.current = {
        type: "create",
        vertexIndex: I.length,
        startScreenPos: [g.clientX, g.clientY]
      }, o.current?.setPointerCapture(g.pointerId);
    },
    [
      I,
      Ve,
      re,
      ct,
      t,
      J,
      q,
      G,
      X,
      k
    ]
  ), yr = n.useCallback(
    (g) => {
      const V = Ve(g.clientX, g.clientY);
      re(V);
      const te = Gt.current;
      if (te) {
        const Pe = Math.hypot(
          g.clientX - te.startScreenPos[0],
          g.clientY - te.startScreenPos[1]
        );
        if (te.type === "create") {
          if (Pe < rc) return;
          const Ze = ze.getState().penVertices, ot = Ze[Ze.length - 1];
          if (!ot) return;
          X(te.vertexIndex, "out"), U([
            V[0] - ot.position[0],
            V[1] - ot.position[1]
          ]);
          return;
        }
        const Ie = te.type === "close-or-drag" ? rc : ro;
        if (Pe < Ie && !te.hasMoved)
          return;
        te.hasMoved || (te.hasMoved = !0, te.type === "vertex" ? G(te.vertexIndex) : te.type === "close-or-drag" ? X(te.vertexIndex, te.handleType ?? "in") : te.handleType && X(te.vertexIndex, te.handleType)), B(Dr(te, g.clientX, g.clientY, g.altKey));
        return;
      }
      const oe = o.current?.getBoundingClientRect();
      if (!oe) return;
      const K = g.clientX - oe.left, Z = g.clientY - oe.top, ie = ct(K, Z);
      ie ? ie.type === "vertex" ? q(ie.index, null) : q(ie.index, ie.type === "inHandle" ? "in" : "out") : q(null);
    },
    [
      Ve,
      re,
      X,
      U,
      G,
      B,
      Dr,
      ct,
      q
    ]
  ), Or = n.useCallback(
    (g) => {
      const V = Gt.current;
      if (!V) return;
      if (g.stopPropagation(), g.preventDefault(), o.current?.releasePointerCapture(g.pointerId), Gt.current = null, J(!1), W(), V.type === "close-or-drag") {
        vr.current?.();
        return;
      }
      const te = Ve(g.clientX, g.clientY);
      re(te);
      const oe = o.current?.getBoundingClientRect();
      if (!oe) {
        q(null);
        return;
      }
      const K = g.clientX - oe.left, Z = g.clientY - oe.top, ie = ct(K, Z);
      ie ? ie.type === "vertex" ? q(ie.index, null) : q(ie.index, ie.type === "inHandle" ? "in" : "out") : q(null);
    },
    [J, W, Ve, re, ct, q]
  ), wr = n.useCallback(
    (g) => {
      const V = o.current?.getBoundingClientRect();
      if (!V) return;
      const te = g.clientX - V.left, oe = g.clientY - V.top, K = ct(te, oe);
      if (K?.type !== "vertex") return;
      g.preventDefault(), g.stopPropagation();
      const Z = I.filter((ie, Pe) => Pe !== K.index);
      B(Z), Z.length === 0 ? q(null) : K.index >= Z.length ? q(Z.length - 1, null) : q(K.index, null);
    },
    [ct, I, B, q]
  ), Nt = n.useCallback((g) => {
    const V = fu(g);
    if (!V) {
      me();
      return;
    }
    const { width: te, height: oe } = t.projectSize, K = Math.max(V.maxX - V.minX, 2 / te), Z = Math.max(V.maxY - V.minY, 2 / oe), ie = K * te, Pe = Z * oe;
    if (ie < 2 || Pe < 2) {
      me();
      return;
    }
    const Ie = g.map((Tt) => ({
      position: [
        (Tt.position[0] - V.minX) / K,
        (Tt.position[1] - V.minY) / Z
      ],
      // Scale handles proportionally
      inHandle: [
        Tt.inHandle[0] / K,
        Tt.inHandle[1] / Z
      ],
      outHandle: [
        Tt.outHandle[0] / K,
        Tt.outHandle[1] / Z
      ]
    })), Ze = ((V.minX + V.maxX) / 2 - 0.5) * te, ot = ((V.minY + V.maxY) / 2 - 0.5) * oe, { tracks: ht, fps: at, addItem: st, setTracks: rt } = Ne.getState(), it = Zt.getState().items, { activeTrackId: ft, selectItems: vt, setActiveTrack: Rr } = Vt.getState(), _r = ne.getState().currentFrame, hn = at * 60;
    let Lr = hl({
      tracks: ht,
      items: it,
      activeTrackId: ft,
      proposedFrame: _r,
      durationInFrames: hn,
      itemType: "shape"
    });
    if (!Lr) {
      me();
      return;
    }
    const pn = Lr.trackId, qr = xl(ht).filter(
      (Tt) => Tt.visible !== !1 && !Tt.locked && !Tt.muted && !Tt.isGroup
    ), mr = ft ? qr.find((Tt) => Tt.id === ft) : void 0, Br = qr.find((Tt) => Tt.id === pn);
    if (!Lr.preservedTime || pn !== ft && !!mr && !!Br && Br.order > mr.order) {
      const Tt = ht.find((Xn) => Xn.id === pn), Ma = ht.length > 0 ? Math.min(...ht.map((Xn) => Xn.order ?? 0)) : 0, Rs = {
        id: `track-${Date.now()}`,
        name: Wh(ht),
        height: Tt?.height ?? 72,
        locked: !1,
        visible: !0,
        muted: !1,
        solo: !1,
        order: Ma - 1,
        items: []
      };
      rt([Rs, ...ht]), Lr = {
        trackId: Rs.id,
        from: _r,
        preservedTime: !0
      };
    }
    const Pr = {
      id: crypto.randomUUID(),
      type: "shape",
      trackId: Lr.trackId,
      from: Lr.from,
      durationInFrames: hn,
      label: "Path Mask",
      shapeType: "path",
      pathVertices: Ie,
      fillColor: "#ffffff",
      isMask: !0,
      maskType: "alpha",
      transform: {
        x: Ze,
        y: ot,
        width: ie,
        height: Pe,
        rotation: 0,
        opacity: 1,
        aspectRatioLocked: !1
      }
    };
    st(Pr), Rr(Pr.trackId), vt([Pr.id]), fd.getState().requestScrollToFrame(Pr.from), pe();
  }, [t, me, pe]), Ue = n.useCallback(() => {
    const g = ze.getState(), V = g.penVertices;
    if (Lt(), !g.shapePenMode || V.length < 3) {
      me();
      return;
    }
    Nt(V);
  }, [me, Nt, Lt]);
  vr.current = Ue;
  const Pt = n.useCallback(() => {
    Lt(), me();
  }, [me, Lt]), zt = n.useRef(0), Re = n.useRef(0), Jt = n.useRef(0);
  n.useEffect(() => {
    zt.current = 0, Re.current = 0, Jt.current = 0;
  }, [x, L]), n.useEffect(() => {
    L && F !== 0 && F !== zt.current && (zt.current = F, Ue());
  }, [L, F, Ue]), n.useEffect(() => {
    L && E !== 0 && E !== Re.current && (Re.current = E, Pt());
  }, [L, E, Pt]);
  const Kt = n.useCallback(() => {
    const g = ze.getState();
    if (g.penVertices.length === 0) return;
    const V = g.penVertices.slice(0, -1);
    Gt.current = null, J(!1), W(), B(V), q(V.length > 0 ? V.length - 1 : null);
  }, [W, q, J, B]);
  n.useEffect(() => {
    if (!L) return;
    const g = (V) => {
      if (!(V.key === "Shift" || V.key === "Alt" || V.key === "Control" || V.key === "Meta")) {
        if (V.stopPropagation(), V.stopImmediatePropagation(), V.key === "Escape") {
          V.preventDefault(), Pt();
          return;
        }
        if (V.key === "Backspace" || V.key === "Delete") {
          V.preventDefault(), Kt();
          return;
        }
        V.preventDefault();
      }
    };
    return window.addEventListener("keydown", g, !0), () => window.removeEventListener("keydown", g, !0);
  }, [L, Pt, Kt]);
  const Bt = n.useRef(!1), nr = n.useRef(t);
  nr.current = t;
  const Mr = n.useRef(De);
  Mr.current = De;
  const Ht = n.useRef(x);
  Ht.current = x;
  const Mn = n.useRef(Te);
  Mn.current = Te;
  const Kr = n.useRef([]);
  n.useEffect(() => () => {
    for (const V of Kr.current)
      cancelAnimationFrame(V);
    Kr.current = [], Xe.getState().activeGizmo?.itemId === Ht.current && Xe.getState().clearInteraction();
  }, []);
  const Qr = n.useCallback(() => {
    for (const V of Kr.current)
      cancelAnimationFrame(V);
    Kr.current = [];
    const g = requestAnimationFrame(() => {
      const V = requestAnimationFrame(() => {
        Kr.current = [], f(null), Be(), W();
      });
      Kr.current = [g, V];
    });
    Kr.current = [g];
  }, [Be, W]), mn = n.useCallback(
    (g, V, te) => {
      const oe = dn.getState().keyframesByItemId[g.id], K = {}, Z = [], ie = te - g.from, Pe = ie >= 0 && ie < g.durationInFrames;
      for (const Ie of Gh) {
        const Ze = V[Ie];
        if (typeof Ze != "number")
          continue;
        const ot = oe?.properties.find((at) => at.property === Ie), ht = $n(
          g,
          oe,
          Ie,
          Ze,
          te
        );
        if (ht) {
          Z.push(ht);
          continue;
        }
        if (Pe && ot && ot.keyframes.length > 0) {
          const at = hs.getState().transitions;
          if (!bl(ie, g.id, g, at)) {
            Z.push({
              type: "add",
              itemId: g.id,
              property: Ie,
              frame: ie,
              value: Ze,
              easing: "linear"
            });
            continue;
          }
        }
        K[Ie] = Ze;
      }
      return { baseTransform: K, autoKeyframeOperations: Z };
    },
    []
  ), Tr = n.useCallback(
    (g) => {
      if (!x) return;
      const V = Zt.getState().itemById[x];
      if (V?.type === "shape" && V.shapeType === "path") {
        const te = ne.getState().currentFrame, oe = ec(g, a, V.transform), { baseTransform: K, autoKeyframeOperations: Z } = mn(
          V,
          {
            x: oe.transform.x,
            y: oe.transform.y,
            width: oe.transform.width,
            height: oe.transform.height
          },
          te
        );
        f({
          vertices: Zr(oe.pathVertices),
          transform: ac(oe.transform, a)
        }), z(x, {
          pathVertices: Zr(oe.pathVertices),
          transform: K,
          autoKeyframeOperations: Z
        }), Qr();
      }
    },
    [mn, z, x, a, Qr]
  ), Rn = n.useCallback(() => {
    const g = H();
    if (!g) return;
    const V = w.length > 0 ? w.filter((Ie) => Number.isInteger(Ie) && Ie >= 0 && Ie < g.length) : S !== null && g[S] ? [S] : [];
    if (V.length === 0 || g.length - V.length < 3) return;
    const te = [...V].sort((Ie, Ze) => Ze - Ie);
    let oe = g;
    for (const Ie of te)
      oe = oe ? Xi(oe, Ie) : null;
    if (!oe) return;
    const K = new Set(V), Z = w.filter((Ie) => !K.has(Ie)).map((Ie) => Ie - V.filter((Ze) => Ze < Ie).length), ie = S === null || K.has(S) ? null : S - V.filter((Ie) => Ie < S).length, Pe = ie !== null && Z.includes(ie) ? ie : Z[Z.length - 1] ?? null;
    M(Z, Pe), Tr(oe);
  }, [Tr, H, M, S, w]);
  n.useEffect(() => {
    if (!h || L) return;
    const g = (V) => {
      V.key === "Shift" || V.key === "Alt" || V.key === "Control" || V.key === "Meta" || V.key !== "Backspace" && V.key !== "Delete" || (V.preventDefault(), V.stopPropagation(), V.stopImmediatePropagation(), Rn());
    };
    return window.addEventListener("keydown", g, !0), () => window.removeEventListener("keydown", g, !0);
  }, [h, L, Rn]), n.useEffect(() => {
    if (!h || L || T === 0 || T === Jt.current || v !== null || C !== null || (Jt.current = T, w.length === 0 && S === null || !N))
      return;
    const g = H();
    if (!g) {
      Y(null);
      return;
    }
    const V = w.length > 0 ? w.filter((oe) => !!g[oe]) : S !== null && g[S] ? [S] : [];
    if (V.length === 0) {
      Y(null);
      return;
    }
    const te = Zr(g);
    for (const oe of V) {
      const Z = (N === "corner" ? du(g, oe) : Bh(g, oe))[oe];
      Z && (te[oe] = {
        position: [...Z.position],
        inHandle: [...Z.inHandle],
        outHandle: [...Z.outHandle]
      });
    }
    Tr(te);
  }, [
    h,
    L,
    v,
    C,
    w,
    S,
    T,
    N,
    H,
    Tr,
    Y
  ]);
  const en = n.useCallback(
    (g) => {
      if (Bt.current) return;
      const V = o.current?.getBoundingClientRect();
      if (!V) return;
      const te = g.clientX - V.left, oe = g.clientY - V.top, K = $e(te, oe);
      if (!K) {
        g.stopPropagation(), g.preventDefault(), o.current.setPointerCapture(g.pointerId), Bt.current = !0, pt.current = {
          type: "marquee",
          startScreenPos: [te, oe],
          currentScreenPos: [te, oe],
          hasMoved: !1
        }, c(!1), u(null), q(null), b(null);
        return;
      }
      g.stopPropagation(), g.preventDefault();
      const Z = H();
      if (!Z) return;
      o.current.setPointerCapture(g.pointerId), Bt.current = !0;
      const ie = Ar(g.clientX, g.clientY, t);
      if (K.type === "vertex")
        G(K.index), pt.current = {
          type: "vertex",
          startVertices: Z.map((Pe) => ({
            position: [...Pe.position],
            inHandle: [...Pe.inHandle],
            outHandle: [...Pe.outHandle]
          })),
          vertexIndex: K.index,
          handleType: null,
          startCanvasPos: [ie.x, ie.y]
        };
      else if (K.type === "inHandle" || K.type === "outHandle") {
        const Pe = K.type === "inHandle" ? "in" : "out";
        X(K.index, Pe), pt.current = {
          type: "handle",
          startVertices: Z.map((Ie) => ({
            position: [...Ie.position],
            inHandle: [...Ie.inHandle],
            outHandle: [...Ie.outHandle]
          })),
          vertexIndex: K.index,
          handleType: Pe,
          startCanvasPos: [ie.x, ie.y]
        };
      } else {
        const Pe = Ht.current;
        if (!Pe) return;
        xe(Pe, ie, Mn.current), pt.current = {
          type: "shape",
          startTransform: Mn.current
        }, u(null), q(null), c(!0);
      }
    },
    [
      $e,
      H,
      t,
      G,
      X,
      Tr,
      q,
      xe
    ]
  ), Cs = n.useCallback(
    (g) => {
      if (Bt.current) {
        const Z = pt.current;
        if (!Z) return;
        if (Z.type === "marquee") {
          const rt = [
            g.clientX - (o.current?.getBoundingClientRect().left ?? 0),
            g.clientY - (o.current?.getBoundingClientRect().top ?? 0)
          ], it = ue(Z.startScreenPos, rt), ft = it.width >= ro || it.height >= ro;
          if (pt.current = {
            type: "marquee",
            startScreenPos: Z.startScreenPos,
            currentScreenPos: rt,
            hasMoved: ft
          }, b(ft ? it : null), ft) {
            const vt = Ce(it);
            M(
              vt,
              vt[vt.length - 1] ?? null
            );
          }
          return;
        }
        const ie = Ar(g.clientX, g.clientY, nr.current);
        if (Z.type === "shape") {
          ye(ie, g.shiftKey, g.ctrlKey, g.altKey);
          return;
        }
        const Pe = ie.x - Z.startCanvasPos[0], Ie = ie.y - Z.startCanvasPos[1], Ze = Mr.current(), ot = Sn(nr.current), ht = Ze.width / ot, at = Ze.height / ot, st = Z.startVertices.map((rt) => ({
          position: [...rt.position],
          inHandle: [...rt.inHandle],
          outHandle: [...rt.outHandle]
        }));
        if (Z.handleType === null) {
          const rt = st[Z.vertexIndex], it = Z.startVertices[Z.vertexIndex];
          rt.position[0] = it.position[0] + Pe / ht, rt.position[1] = it.position[1] + Ie / at;
        } else {
          const rt = st[Z.vertexIndex], it = Z.startVertices[Z.vertexIndex], ft = Z.handleType === "in" ? it.inHandle : it.outHandle, vt = [
            ft[0] + Pe / ht,
            ft[1] + Ie / at
          ];
          Z.handleType === "in" ? (rt.inHandle = vt, g.altKey || (rt.outHandle = [-vt[0], -vt[1]])) : (rt.outHandle = vt, g.altKey || (rt.inHandle = [-vt[0], -vt[1]]));
        }
        D(st);
        return;
      }
      const V = o.current?.getBoundingClientRect();
      if (!V) return;
      const te = g.clientX - V.left, oe = g.clientY - V.top, K = $e(te, oe);
      K ? K.type === "vertex" ? (c(!1), u(null), q(K.index, null)) : K.type === "inHandle" ? (c(!1), u(null), q(K.index, "in")) : K.type === "outHandle" ? (c(!1), u(null), q(K.index, "out")) : K.type === "segment" ? (c(!1), u(K.index), q(null)) : (u(null), c(!0), q(null)) : (c(!1), u(null), q(null));
    },
    [ue, Ce, $e, M, q, D, ye]
  ), ks = n.useCallback(
    (g) => {
      if (!Bt.current) return;
      g.stopPropagation(), g.preventDefault(), o.current?.releasePointerCapture(g.pointerId), Bt.current = !1;
      const V = pt.current, te = ze.getState().previewVertices, oe = Ht.current;
      if (V?.type === "marquee")
        if (b(null), V.hasMoved) {
          const K = ue(V.startScreenPos, V.currentScreenPos), Z = Ce(K);
          M(
            Z,
            Z[Z.length - 1] ?? null
          );
        } else
          Y(null);
      else if (V?.type === "shape") {
        const K = Me();
        if (K && oe && $h(V.startTransform, K)) {
          const Z = Zt.getState().items.find((ie) => ie.id === oe);
          if (Z?.type === "shape" && Z.shapeType === "path") {
            const ie = ne.getState().currentFrame, { baseTransform: Pe, autoKeyframeOperations: Ie } = mn(
              Z,
              {
                x: K.x,
                y: K.y
              },
              ie
            );
            z(oe, {
              transform: Pe,
              autoKeyframeOperations: Ie
            }, { operation: "move" });
          }
        }
        Qr();
      } else if (te && oe) {
        const K = Zt.getState().items.find((Z) => Z.id === oe);
        if (K?.type === "shape" && K.shapeType === "path") {
          const Z = ne.getState().currentFrame, ie = ec(te, a, K.transform), { baseTransform: Pe, autoKeyframeOperations: Ie } = mn(
            K,
            {
              x: ie.transform.x,
              y: ie.transform.y,
              width: ie.transform.width,
              height: ie.transform.height
            },
            Z
          );
          f({
            vertices: Zr(ie.pathVertices),
            transform: ac(ie.transform, a)
          }), z(oe, {
            pathVertices: Zr(ie.pathVertices),
            transform: Pe,
            autoKeyframeOperations: Ie
          });
        }
        Qr();
      } else
        Qr();
      pt.current = null;
    },
    [
      mn,
      z,
      Me,
      ue,
      Ce,
      a,
      Qr,
      Y,
      M
    ]
  ), ka = n.useCallback(
    (g) => {
      const V = o.current?.getBoundingClientRect();
      if (!V) return;
      const te = g.clientX - V.left, oe = g.clientY - V.top, K = $e(te, oe);
      if (K?.type === "vertex") {
        g.preventDefault(), g.stopPropagation();
        const Z = H();
        if (!Z) return;
        const ie = Xi(Z, K.index);
        if (ie) {
          const Pe = w.filter((ot) => ot !== K.index).map((ot) => ot > K.index ? ot - 1 : ot), Ie = S === null || S === K.index ? null : S > K.index ? S - 1 : S, Ze = Ie !== null && Pe.includes(Ie) ? Ie : Pe[Pe.length - 1] ?? null;
          M(Pe, Ze), Tr(ie);
        }
      }
    },
    [$e, H, w, S, M, Tr]
  ), Er = n.useCallback(
    (g) => {
      const V = o.current?.getBoundingClientRect();
      if (!V) return;
      const te = g.clientX - V.left, oe = g.clientY - V.top, K = $e(te, oe);
      if (K?.type !== "segment") return;
      g.preventDefault(), g.stopPropagation();
      const Z = H();
      if (!Z) return;
      const ie = Lh(Z, K.index);
      Y(K.index + 1), Tr(ie), c(!1), u(null);
    },
    [$e, H, Y, Tr]
  );
  if (!h) return null;
  const Ms = i ? "move" : "crosshair";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "absolute z-20",
      style: {
        top: 0,
        left: 0,
        width: s.width,
        height: s.height,
        pointerEvents: "none"
      },
      children: /* @__PURE__ */ r.jsx(
        "canvas",
        {
          ref: o,
          className: "absolute inset-0",
          style: {
            width: s.width,
            height: s.height,
            pointerEvents: "auto",
            cursor: Ms
          },
          onPointerDown: L ? fr : en,
          onPointerMove: L ? yr : Cs,
          onPointerUp: L ? Or : ks,
          onContextMenu: L ? wr : ka,
          onDoubleClick: L ? void 0 : Er
        }
      )
    }
  );
}), qh = n.memo(function({
  containerRect: t,
  playerSize: s,
  projectSize: a,
  zoom: o
}) {
  const i = ze((b) => b.isEditing), c = ze((b) => b.editingItemId), l = ze((b) => b.shapePenMode), u = Zt(
    n.useCallback(
      (b) => c ? b.itemById[c] ?? null : null,
      [c]
    )
  ), d = Go(u ? [u] : [], a), f = n.useMemo(() => t ? { containerRect: t, playerSize: s, projectSize: a, zoom: o } : null, [t, s, a, o]), m = n.useMemo(() => {
    if (l)
      return {
        x: 0,
        y: 0,
        width: a.width,
        height: a.height,
        rotation: 0,
        opacity: 1,
        cornerRadius: 0
      };
    if (!u) return null;
    const b = d.get(u.id);
    return b ? {
      x: b.x,
      y: b.y,
      width: b.width,
      height: b.height,
      rotation: b.rotation,
      opacity: b.opacity,
      cornerRadius: b.cornerRadius
    } : null;
  }, [u, a, l, d]);
  return !i || !f || !m ? null : /* @__PURE__ */ r.jsx(To, { level: "component", children: /* @__PURE__ */ r.jsx(
    Kh,
    {
      coordParams: f,
      playerSize: s,
      itemTransform: m
    }
  ) });
}), oc = 6, ic = 12, Gr = 20, no = ["topLeft", "topRight", "bottomRight", "bottomLeft"], cc = {
  topLeft: [0, 0],
  topRight: [0, 0],
  bottomRight: [0, 0],
  bottomLeft: [0, 0]
}, Yh = n.memo(function({
  coordParams: t,
  playerSize: s,
  itemTransform: a
}) {
  const o = n.useRef(null), i = n.useRef(!1), c = n.useRef(null), l = n.useRef(cc), {
    editingItemId: u,
    draggingHandle: d,
    hoveredHandle: f,
    previewCornerPin: m,
    setHovered: b
  } = Fr(), v = Zt((z) => z.items).find((z) => z.id === u)?.cornerPin ?? cc, C = m ?? v, y = Sn(t), w = n.useRef(t);
  w.current = t;
  const S = n.useRef(a);
  S.current = a;
  const R = n.useRef(y);
  R.current = y;
  const O = n.useRef(u);
  O.current = u;
  const L = n.useRef(v);
  L.current = v;
  const I = n.useCallback(
    (z) => {
      const { projectSize: M } = t, Y = a.width, G = a.height, X = M.width / 2 + a.x - Y / 2, D = M.height / 2 + a.y - G / 2;
      let W, q;
      const pe = C[z];
      switch (z) {
        case "topLeft":
          W = X + pe[0], q = D + pe[1];
          break;
        case "topRight":
          W = X + Y + pe[0], q = D + pe[1];
          break;
        case "bottomRight":
          W = X + Y + pe[0], q = D + G + pe[1];
          break;
        case "bottomLeft":
          W = X + pe[0], q = D + G + pe[1];
          break;
      }
      if (a.rotation !== 0) {
        const k = M.width / 2 + a.x, B = M.height / 2 + a.y, U = a.rotation * Math.PI / 180, J = Math.cos(U), re = Math.sin(U), me = W - k, xe = q - B;
        W = k + me * J - xe * re, q = B + me * re + xe * J;
      }
      return [W * y + Gr, q * y + Gr];
    },
    [t, a, C, y]
  ), j = n.useCallback(
    (z, M, Y) => {
      const G = S.current, X = R.current, { projectSize: D } = w.current, W = G.width, q = G.height;
      let pe = (M - Gr) / X, k = (Y - Gr) / X;
      if (G.rotation !== 0) {
        const J = D.width / 2 + G.x, re = D.height / 2 + G.y, me = -G.rotation * Math.PI / 180, xe = Math.cos(me), ye = Math.sin(me), Me = pe - J, Be = k - re;
        pe = J + Me * xe - Be * ye, k = re + Me * ye + Be * xe;
      }
      const B = D.width / 2 + G.x - W / 2, U = D.height / 2 + G.y - q / 2;
      switch (z) {
        case "topLeft":
          return [pe - B, k - U];
        case "topRight":
          return [pe - (B + W), k - U];
        case "bottomRight":
          return [pe - (B + W), k - (U + q)];
        case "bottomLeft":
          return [pe - B, k - (U + q)];
      }
    },
    []
  ), P = n.useCallback(() => {
    const z = o.current;
    if (!z) return;
    const M = z.getContext("2d");
    if (!M) return;
    const Y = window.devicePixelRatio || 1;
    M.setTransform(Y, 0, 0, Y, 0, 0), M.clearRect(0, 0, z.width, z.height);
    const G = no.map((D) => I(D));
    M.beginPath(), M.moveTo(G[0][0], G[0][1]), M.lineTo(G[1][0], G[1][1]), M.lineTo(G[2][0], G[2][1]), M.lineTo(G[3][0], G[3][1]), M.closePath(), M.strokeStyle = "#22d3ee", M.lineWidth = 1.5, M.setLineDash([4, 4]), M.stroke(), M.setLineDash([]), M.beginPath(), M.moveTo(G[0][0], G[0][1]), M.lineTo(G[2][0], G[2][1]), M.moveTo(G[1][0], G[1][1]), M.lineTo(G[3][0], G[3][1]), M.strokeStyle = "rgba(34, 211, 238, 0.3)", M.lineWidth = 1, M.stroke();
    const X = ["TL", "TR", "BR", "BL"];
    for (let D = 0; D < 4; D++) {
      const [W, q] = G[D], pe = no[D], k = d === pe, B = f === pe, U = k || B ? oc + 2 : oc;
      M.beginPath(), M.arc(W, q, U, 0, Math.PI * 2), M.fillStyle = k ? "#22d3ee" : B ? "rgba(34, 211, 238, 0.8)" : "white", M.fill(), M.strokeStyle = "#22d3ee", M.lineWidth = 2, M.stroke(), M.fillStyle = k ? "white" : "#22d3ee", M.font = "9px monospace", M.textAlign = "center", M.fillText(X[D], W, q - U - 4);
    }
  }, [I, d, f]), F = n.useCallback(
    (z, M) => {
      for (const Y of no) {
        const [G, X] = I(Y), D = z - G, W = M - X;
        if (D * D + W * W <= ic * ic)
          return Y;
      }
      return null;
    },
    [I]
  ), E = n.useCallback(
    (z) => {
      if (i.current) return;
      const M = o.current?.getBoundingClientRect();
      if (!M) return;
      const Y = z.clientX - M.left, G = z.clientY - M.top, X = F(Y, G);
      !X || !O.current || (z.stopPropagation(), z.preventDefault(), o.current.setPointerCapture(z.pointerId), i.current = !0, c.current = X, l.current = { ...L.current }, Fr.getState().setDragging(X));
    },
    [F]
  ), T = n.useCallback(
    (z) => {
      const M = o.current?.getBoundingClientRect();
      if (!M) return;
      const Y = z.clientX - M.left, G = z.clientY - M.top;
      if (i.current && c.current) {
        const W = j(c.current, Y, G), q = [
          Math.round(W[0] * 10) / 10,
          Math.round(W[1] * 10) / 10
        ];
        Fr.getState().setPreview({
          ...l.current,
          [c.current]: q
        });
        return;
      }
      const X = F(Y, G);
      b(X);
      const D = o.current;
      D && (D.style.cursor = X ? "move" : "default");
    },
    [F, j, b]
  ), N = n.useCallback(
    (z) => {
      if (!i.current) return;
      z.stopPropagation(), z.preventDefault(), o.current?.releasePointerCapture(z.pointerId), i.current = !1;
      const M = c.current;
      c.current = null;
      const Y = Fr.getState().previewCornerPin, G = O.current;
      Y && G && M && Ne.getState().updateItem(G, { cornerPin: Y }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          Fr.getState().clearPreview();
        });
      });
    },
    []
  );
  return n.useEffect(() => {
    const z = o.current;
    if (!z) return;
    const M = window.devicePixelRatio || 1, Y = (s.width + Gr * 2) * M, G = (s.height + Gr * 2) * M;
    (z.width !== Y || z.height !== G) && (z.width = Y, z.height = G), P();
  }, [s, P]), /* @__PURE__ */ r.jsx(
    "canvas",
    {
      ref: o,
      className: "absolute z-20",
      style: {
        top: -Gr,
        left: -Gr,
        width: s.width + Gr * 2,
        height: s.height + Gr * 2,
        pointerEvents: "auto"
      },
      onPointerDown: E,
      onPointerMove: T,
      onPointerUp: N,
      onClick: (z) => z.stopPropagation()
    }
  );
}), Xh = n.memo(function({
  containerRect: t,
  playerSize: s,
  projectSize: a,
  zoom: o
}) {
  const i = Fr((h) => h.isEditing), c = Fr((h) => h.editingItemId), l = Fr((h) => h.stopEditing), u = Vt((h) => h.selectedItemIds), d = Zt((h) => h.items);
  n.useEffect(() => {
    i && c && !u.includes(c) && l();
  }, [i, c, u, l]);
  const f = n.useMemo(
    () => c ? d.find((h) => h.id === c) : null,
    [c, d]
  ), m = n.useMemo(() => t ? { containerRect: t, playerSize: s, projectSize: a, zoom: o } : null, [t, s, a, o]), b = n.useMemo(() => {
    if (!f) return null;
    const h = { width: a.width, height: a.height }, x = $r(f, h, Ir(f));
    return {
      x: x.x,
      y: x.y,
      width: x.width,
      height: x.height,
      rotation: x.rotation,
      opacity: x.opacity,
      cornerRadius: x.cornerRadius
    };
  }, [f, a]);
  return !i || !m || !b ? null : /* @__PURE__ */ r.jsx(
    Yh,
    {
      coordParams: m,
      playerSize: s,
      itemTransform: b
    }
  );
});
function Kn(e) {
  return e && (e.type === "video" || e.type === "image") && e.sourceWidth && e.sourceHeight ? e.sourceWidth / e.sourceHeight : 16 / 9;
}
function mu(e, t, s) {
  let a = e, o = e / s;
  return o > t && (o = t, a = t * s), {
    mediaWidth: Math.max(a, 1),
    mediaHeight: Math.max(o, 1)
  };
}
function hu(e, t, s, a) {
  return e ? e.type === "video" ? a.renderVideo(e, t ?? 0) : e.type === "image" ? a.renderImage(e) : a.renderPlaceholder(e.type, s ?? e.type) : a.renderPlaceholder("gap", s ?? "GAP");
}
const Zh = {
  image: "#22c55e",
  text: "#f59e0b",
  shape: "#8b5cf6",
  adjustment: "#6b7280",
  composition: "#3b82f6",
  audio: "#ec4899",
  gap: "#111827"
}, Jh = 56, lc = 8, pu = 280, gu = 158, Qh = 2, ep = 60, uc = 1 / 60;
let tp = 0, rp = 0, so = null;
function np() {
  return so || (so = new yl()), so;
}
function xu(e, t) {
  const [s, a] = n.useState(null), o = vl(), i = n.useRef(null);
  return n.useEffect(() => {
    let c = !1;
    const l = `${e ?? "none"}:${t ? "proxy" : "source"}`;
    if (i.current !== l && (i.current = l, a(null)), !e)
      return () => {
        c = !0;
      };
    if (t) {
      const u = Do(e);
      if (u)
        return a(u), () => {
          c = !0;
        };
    }
    return Cn(e).then((u) => {
      c || a(u || null);
    }).catch(() => {
      c || a(null);
    }), () => {
      c = !0;
    };
  }, [e, t, o]), s;
}
function ms({ leftPanel: e, rightPanel: t }) {
  const s = n.useRef(null), [a, o] = n.useState({ width: 0, height: 0 });
  n.useEffect(() => {
    const f = s.current;
    if (!f) return;
    const m = new ResizeObserver(([b]) => {
      if (!b) return;
      const { width: h, height: x } = b.contentRect;
      o(
        (v) => v.width === h && v.height === x ? v : { width: h, height: x }
      );
    });
    return m.observe(f), () => m.disconnect();
  }, []);
  const i = Math.max((a.width - lc) / 2, 1), c = a.height - Jh, l = i / Kn(e.item), u = i / Kn(t.item), d = Math.max(1, Math.min(Math.max(l, u), c));
  return /* @__PURE__ */ r.jsxs("div", { ref: s, className: "absolute inset-0 z-30 bg-black flex items-center", style: { gap: lc }, children: [
    /* @__PURE__ */ r.jsx(
      dc,
      {
        item: e.item,
        sourceTime: e.sourceTime,
        timecode: e.timecode,
        label: e.label,
        areaHeight: d,
        panelWidth: i,
        placeholderText: e.placeholderText
      }
    ),
    /* @__PURE__ */ r.jsx(
      dc,
      {
        item: t.item,
        sourceTime: t.sourceTime,
        timecode: t.timecode,
        label: t.label,
        areaHeight: d,
        panelWidth: i,
        placeholderText: t.placeholderText
      }
    )
  ] });
}
function dc({
  item: e,
  sourceTime: t,
  timecode: s,
  label: a,
  areaHeight: o,
  panelWidth: i,
  placeholderText: c
}) {
  const l = Kn(e), { mediaWidth: u, mediaHeight: d } = mu(i, o, l);
  return /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ r.jsx("span", { className: "text-base font-semibold tracking-widest text-white/80 uppercase pb-1", children: a }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "flex items-center justify-center shrink-0 bg-black",
        style: { width: i, height: o },
        children: /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "overflow-hidden border border-white/10",
            style: { width: u, height: d },
            children: hu(e, t, c, {
              renderVideo: (f, m) => /* @__PURE__ */ r.jsx(Wo, { item: f, sourceTime: m }),
              renderImage: (f) => /* @__PURE__ */ r.jsx(zo, { item: f }),
              renderPlaceholder: (f, m) => /* @__PURE__ */ r.jsx($o, { type: f, text: m })
            })
          }
        )
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "text-lg font-mono text-white/90 tabular-nums pt-1", children: s })
  ] });
}
function sp({ item: e, sourceTime: t }) {
  const [s, a] = n.useState(!1);
  n.useEffect(() => {
    a(!1);
  }, [e.id, e.mediaId]);
  const o = n.useCallback(() => {
    a((i) => i || !0);
  }, []);
  return s ? /* @__PURE__ */ r.jsx(ip, { item: e, sourceTime: t }) : /* @__PURE__ */ r.jsx(
    op,
    {
      item: e,
      sourceTime: t,
      onDecodeFailure: o
    }
  );
}
function ap(e) {
  return Math.round(e / uc) * uc;
}
function op({
  item: e,
  sourceTime: t,
  onDecodeFailure: s
}) {
  const a = n.useRef(null), o = n.useRef(np()), i = n.useRef(`edit-preview-strict-${++rp}`), c = n.useRef(null), l = n.useRef(!0), u = n.useRef(!1), d = n.useRef(!1), f = n.useRef(null), m = n.useRef(0), b = n.useRef(Math.max(0, t)), h = ne((O) => O.useProxy), x = xu(e.mediaId, h), v = n.useRef(null), C = `${e.id}:${i.current}`, y = n.useRef(/* @__PURE__ */ new Map()), w = n.useRef([]);
  n.useEffect(() => (l.current = !0, () => {
    l.current = !1;
    for (const O of y.current.values())
      O.close();
    y.current.clear();
  }), []);
  const S = n.useCallback(async (O) => {
    const L = c.current, I = a.current;
    if (!L || !I) return !1;
    let j = v.current;
    if (!j) {
      if (j = I.getContext("2d"), !j) return !1;
      v.current = j;
    }
    const { width: P, height: F } = L.getDimensions(), E = Math.max(1, Math.round(P || pu)), T = Math.max(1, Math.round(F || gu));
    (I.width !== E || I.height !== T) && (I.width = E, I.height = T);
    const N = ap(O), z = y.current, M = w.current, Y = z.get(N);
    if (Y) {
      j.drawImage(Y, 0, 0, I.width, I.height);
      const X = M.indexOf(N);
      return X !== -1 && (M.splice(X, 1), M.push(N)), !0;
    }
    if (!await L.drawFrame(j, Math.max(0, O), 0, 0, I.width, I.height)) return !1;
    try {
      const X = await createImageBitmap(I);
      for (z.set(N, X), M.push(N); M.length > ep; ) {
        const D = M.shift(), W = z.get(D);
        W && (W.close(), z.delete(D));
      }
    } catch {
    }
    return !0;
  }, []), R = n.useCallback(() => {
    if (d.current) return;
    d.current = !0, (async () => {
      try {
        for (; u.current && f.current !== null && l.current; ) {
          const L = f.current;
          if (f.current = null, await S(L).catch(() => !1)) {
            m.current = 0;
            continue;
          }
          if ((c.current?.getLastFailureKind() ?? "decode-error") === "decode-error" && (m.current += 1, m.current >= Qh)) {
            s();
            return;
          }
        }
      } finally {
        d.current = !1, u.current && f.current !== null && l.current && queueMicrotask(() => {
          l.current && R();
        });
      }
    })();
  }, [S, s]);
  return n.useEffect(() => {
    u.current = !1, c.current = null, f.current = null, m.current = 0, v.current = null;
    for (const j of y.current.values())
      j.close();
    if (y.current.clear(), w.current.length = 0, !x) return;
    const O = o.current, L = O.getOrCreateItemExtractor(C, x);
    c.current = L;
    let I = !1;
    return L.init().then((j) => {
      if (!(I || !l.current)) {
        if (!j) {
          s();
          return;
        }
        u.current = !0, f.current = b.current, R();
      }
    }).catch(() => {
      I || !l.current || s();
    }), () => {
      I = !0, u.current = !1, c.current = null, f.current = null, O.releaseItem(C);
    };
  }, [x, C, s, R]), n.useEffect(() => {
    b.current = Math.max(0, t), f.current = b.current, u.current && R();
  }, [t, R]), /* @__PURE__ */ r.jsx(
    "canvas",
    {
      ref: a,
      className: "w-full h-full object-contain",
      style: { imageRendering: "auto" }
    }
  );
}
function ip({ item: e, sourceTime: t }) {
  const s = n.useRef(null), a = n.useRef(aa()), o = n.useRef(`edit-preview-${++tp}`), i = n.useRef(null), c = ne((x) => x.useProxy), l = xu(e.mediaId, c), u = n.useRef(null), d = n.useRef(!1), f = n.useRef(null), m = n.useRef(0), b = n.useCallback(() => {
    const x = i.current, v = s.current;
    if (!x || !v || x.readyState < 2) return;
    let C = u.current;
    if (!C) {
      if (C = v.getContext("2d"), !C) return;
      u.current = C;
    }
    (v.width !== x.videoWidth || v.height !== x.videoHeight) && (v.width = x.videoWidth || pu, v.height = x.videoHeight || gu), C.drawImage(x, 0, 0, v.width, v.height);
  }, []), h = n.useCallback((x) => {
    const v = i.current;
    if (!v) return;
    const C = 1e-3;
    if (d.current) {
      f.current = x;
      return;
    }
    if (Math.abs(v.currentTime - x) < C) {
      b();
      return;
    }
    d.current = !0, v.currentTime = x;
  }, [b]);
  return n.useEffect(() => {
    if (!l) return;
    const x = a.current, v = o.current;
    d.current = !1, f.current = null, x.preloadSource(l).catch(() => {
    });
    const C = x.acquireForClip(v, l);
    if (!C) return;
    C.preload = "auto", C.muted = !0, C.playsInline = !0, i.current = C;
    const y = () => {
      if (d.current = !1, b(), f.current !== null) {
        const S = f.current;
        f.current = null, h(S);
      }
    }, w = () => {
      Math.abs(C.currentTime - m.current) < 1e-3 && b();
    };
    return C.addEventListener("seeked", y), C.addEventListener("loadeddata", w), () => {
      C.removeEventListener("seeked", y), C.removeEventListener("loadeddata", w), C.pause(), i.current = null, d.current = !1, f.current = null, x.releaseClip(v);
    };
  }, [l, b, h]), n.useEffect(() => {
    if (!i.current || !l) return;
    const v = Math.max(0, t);
    m.current = v, h(v);
  }, [t, l, h]), /* @__PURE__ */ r.jsx(
    "canvas",
    {
      ref: s,
      className: "w-full h-full object-contain",
      style: { imageRendering: "auto" }
    }
  );
}
const cp = (e, t) => e.sourceTime === t.sourceTime && e.item.id === t.item.id && e.item.mediaId === t.item.mediaId, Wo = n.memo(sp, cp);
function lp({ item: e }) {
  const t = n.useRef(null), [s, a] = n.useState(null);
  return n.useEffect(() => {
    let o = !1;
    if (e.mediaId)
      return Cn(e.mediaId).then((i) => {
        !o && i && a(i);
      }), () => {
        o = !0;
      };
  }, [e.mediaId]), n.useEffect(() => {
    if (!s) return;
    const o = t.current;
    if (!o) return;
    const i = new Image();
    return i.onload = () => {
      o.width = i.naturalWidth || 280, o.height = i.naturalHeight || 158;
      const c = o.getContext("2d");
      c && c.drawImage(i, 0, 0, o.width, o.height);
    }, i.src = s, () => {
      i.onload = null;
    };
  }, [s]), /* @__PURE__ */ r.jsx(
    "canvas",
    {
      ref: t,
      className: "w-full h-full object-contain"
    }
  );
}
const up = (e, t) => e.item.id === t.item.id && e.item.mediaId === t.item.mediaId, zo = n.memo(lp, up);
function $o({ type: e, text: t }) {
  const s = Zh[e] ?? "#6b7280";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "w-full h-full flex items-center justify-center",
      style: { backgroundColor: s },
      children: /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium text-white/90 uppercase tracking-wide", children: t })
    }
  );
}
function xr(e, t, s) {
  const a = e.sourceFps ?? s, o = e.speed ?? 1, i = e.sourceStart ?? 0, c = md(
    i,
    a,
    t,
    o,
    s,
    0
  ), l = Math.max(0, Math.round(c * a));
  return {
    sourceTime: c,
    sourceFrame: l,
    sourceFps: a,
    timecode: wl(l, a)
  };
}
function dp({ fps: e }) {
  const t = ds((C) => C.trimmedItemId), s = ds((C) => C.neighborItemId), a = ds((C) => C.handle), o = ds((C) => C.neighborDelta), i = Ne((C) => C.items), c = n.useMemo(() => new Map(i.map((C) => [C.id, C])), [i]);
  if (!t || !s || !a) return null;
  const l = c.get(t), u = c.get(s);
  if (!l || !u) return null;
  const d = a === "end" ? l : u, f = a === "end" ? u : l, m = a === "end" ? d.from + d.durationInFrames + o : f.from + o, b = Math.max(0, m - d.from - 1), h = Math.max(0, m - f.from), x = xr(d, b, e), v = xr(f, h, e);
  return /* @__PURE__ */ r.jsx(
    ms,
    {
      leftPanel: {
        item: d,
        sourceTime: x.sourceTime,
        timecode: x.timecode,
        label: "OUT"
      },
      rightPanel: {
        item: f,
        sourceTime: v.sourceTime,
        timecode: v.timecode,
        label: "IN"
      }
    }
  );
}
function fp(e, t) {
  if (t.length === 0) return null;
  const s = e.from + e.durationInFrames;
  let a = null, o = Number.POSITIVE_INFINITY;
  for (const i of t) {
    const c = Math.abs(i.from - s);
    (c < o || c === o && a && i.from < a.from) && (a = i, o = c);
  }
  return a;
}
function mp(e, t) {
  let s = null, a = -1 / 0;
  for (const o of t) {
    if (o.id === e.id) continue;
    const i = o.from + o.durationInFrames;
    i <= e.from && i > a && (s = o, a = i);
  }
  return s;
}
function hp({ fps: e }) {
  const t = yn((S) => S.trimmedItemId), s = yn((S) => S.handle), a = yn((S) => S.trackId), o = yn((S) => S.downstreamItemIds), i = yn((S) => S.delta), c = yn((S) => S.trimDelta), l = Ne((S) => S.items), u = n.useMemo(() => new Map(l.map((S) => [S.id, S])), [l]), d = t ? u.get(t) ?? null : null, f = n.useMemo(
    () => l.filter((S) => o.has(S.id)),
    [l, o]
  ), m = n.useMemo(
    () => d && s === "end" ? fp(d, f) : null,
    [d, s, f]
  ), b = n.useMemo(
    () => a ? l.filter((S) => S.trackId === a) : [],
    [l, a]
  ), h = n.useMemo(
    () => d && s === "start" ? mp(d, b) : null,
    [d, s, b]
  );
  if (!d || !s) return null;
  if (s === "end") {
    const S = d.from + d.durationInFrames + i, R = Math.max(0, S - d.from - 1), O = xr(d, R, e), L = S, I = m ? m.from + i : 1 / 0;
    if (!m || I > L)
      return /* @__PURE__ */ r.jsx(
        ms,
        {
          leftPanel: {
            item: d,
            sourceTime: O.sourceTime,
            timecode: O.timecode,
            label: "OUT"
          },
          rightPanel: {
            item: null,
            timecode: "--:--:--:--",
            label: "IN",
            placeholderText: "GAP"
          }
        }
      );
    const P = xr(m, 0, e);
    return /* @__PURE__ */ r.jsx(
      ms,
      {
        leftPanel: {
          item: d,
          sourceTime: O.sourceTime,
          timecode: O.timecode,
          label: "OUT"
        },
        rightPanel: {
          item: m,
          sourceTime: P.sourceTime,
          timecode: P.timecode,
          label: "IN"
        }
      }
    );
  }
  const x = xr(d, c, e), v = h ? h.from + h.durationInFrames : -1 / 0;
  if (!h || v < d.from)
    return /* @__PURE__ */ r.jsx(
      ms,
      {
        leftPanel: {
          item: null,
          timecode: "--:--:--:--",
          label: "OUT",
          placeholderText: "GAP"
        },
        rightPanel: {
          item: d,
          sourceTime: x.sourceTime,
          timecode: x.timecode,
          label: "IN"
        }
      }
    );
  const y = Math.max(0, h.durationInFrames - 1), w = xr(h, y, e);
  return /* @__PURE__ */ r.jsx(
    ms,
    {
      leftPanel: {
        item: h,
        sourceTime: w.sourceTime,
        timecode: w.timecode,
        label: "OUT"
      },
      rightPanel: {
        item: d,
        sourceTime: x.sourceTime,
        timecode: x.timecode,
        label: "IN"
      }
    }
  );
}
const pp = 56, fc = 8, gp = 0.22;
function bu({
  leftPanel: e,
  rightPanel: t,
  topLeftCorner: s,
  topRightCorner: a
}) {
  const o = n.useRef(null), [i, c] = n.useState({ width: 0, height: 0 });
  if (n.useEffect(() => {
    const x = o.current;
    if (!x) return;
    const v = new ResizeObserver(([C]) => {
      if (!C) return;
      const { width: y, height: w } = C.contentRect;
      c(
        (S) => S.width === y && S.height === w ? S : { width: y, height: w }
      );
    });
    return v.observe(x), () => v.disconnect();
  }, []), i.width <= 0 || i.height <= 0)
    return /* @__PURE__ */ r.jsx("div", { ref: o, className: "absolute inset-0 z-30 bg-black" });
  const l = Math.max((i.width - fc) / 2, 1), u = i.height - pp, d = l / Kn(e.item), f = l / Kn(t.item), m = Math.max(
    1,
    Math.min(Math.max(d, f), u)
  ), b = Math.max(l * gp, 1), h = Math.max(b / (16 / 9), 1);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: o,
      className: "absolute inset-0 z-30 bg-black flex items-center",
      style: { gap: fc },
      children: [
        s?.item && /* @__PURE__ */ r.jsx(
          hc,
          {
            item: s.item,
            sourceTime: s.sourceTime,
            width: b,
            height: h,
            position: "top-left"
          }
        ),
        a?.item && /* @__PURE__ */ r.jsx(
          hc,
          {
            item: a.item,
            sourceTime: a.sourceTime,
            width: b,
            height: h,
            position: "top-right"
          }
        ),
        /* @__PURE__ */ r.jsx(mc, { data: e, areaHeight: m, panelWidth: l }),
        /* @__PURE__ */ r.jsx(mc, { data: t, areaHeight: m, panelWidth: l })
      ]
    }
  );
}
function mc({ data: e, areaHeight: t, panelWidth: s }) {
  const a = Kn(e.item), { mediaWidth: o, mediaHeight: i } = mu(s, t, a);
  return /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ r.jsx("span", { className: "text-base font-semibold tracking-widest text-white/80 uppercase pb-1", children: e.label }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "flex items-center justify-center shrink-0 bg-black",
        style: { width: s, height: t },
        children: /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "overflow-hidden border border-white/10",
            style: { width: o, height: i },
            children: hu(e.item, e.sourceTime, e.placeholderText, {
              renderVideo: (c, l) => /* @__PURE__ */ r.jsx(Wo, { item: c, sourceTime: l }),
              renderImage: (c) => /* @__PURE__ */ r.jsx(zo, { item: c }),
              renderPlaceholder: (c, l) => /* @__PURE__ */ r.jsx($o, { type: c, text: l })
            })
          }
        )
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "text-lg font-mono text-white/90 tabular-nums pt-1", children: e.timecode })
  ] });
}
function hc({ item: e, sourceTime: t, width: s, height: a, position: o }) {
  const i = e.type === "video", c = e.type === "image", l = o === "top-left" ? "left-2 top-2" : "right-2 top-2";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `absolute ${l} z-40 overflow-hidden border border-white/20 rounded-sm shadow-lg`,
      style: { width: s, height: a },
      children: i ? /* @__PURE__ */ r.jsx(Wo, { item: e, sourceTime: t ?? 0 }) : c ? /* @__PURE__ */ r.jsx(zo, { item: e }) : /* @__PURE__ */ r.jsx($o, { type: e.type, text: e.type })
    }
  );
}
function xp({ fps: e }) {
  const t = vo((b) => b.itemId), s = vo((b) => b.slipDelta), a = Ne((b) => b.items), o = n.useMemo(() => new Map(a.map((b) => [b.id, b])), [a]), i = t ? o.get(t) ?? null : null;
  if (!i) return null;
  const c = Math.max(0, i.durationInFrames - 1), l = xr(i, 0, e), u = xr(i, c, e), d = {
    ...i,
    sourceStart: (i.sourceStart ?? 0) + s,
    sourceEnd: i.sourceEnd !== void 0 ? i.sourceEnd + s : void 0
  }, f = xr(d, 0, e), m = xr(d, c, e);
  return /* @__PURE__ */ r.jsx(
    bu,
    {
      leftPanel: {
        item: d,
        sourceTime: f.sourceTime,
        timecode: f.timecode,
        label: "IN"
      },
      rightPanel: {
        item: d,
        sourceTime: m.sourceTime,
        timecode: m.timecode,
        label: "OUT"
      },
      topLeftCorner: {
        item: i,
        sourceTime: l.sourceTime,
        timecode: l.timecode,
        label: ""
      },
      topRightCorner: {
        item: i,
        sourceTime: u.sourceTime,
        timecode: u.timecode,
        label: ""
      }
    }
  );
}
function bp({ fps: e }) {
  const t = fs((x) => x.itemId), s = fs((x) => x.leftNeighborId), a = fs((x) => x.rightNeighborId), o = fs((x) => x.slideDelta), i = Ne((x) => x.items), c = n.useMemo(() => new Map(i.map((x) => [x.id, x])), [i]);
  if (!t || !c.get(t)) return null;
  const u = s ? c.get(s) ?? null : null, d = a ? c.get(a) ?? null : null, f = u ? (() => {
    const x = Math.max(0, u.durationInFrames - 1), v = xr(u, x, e);
    return {
      item: u,
      sourceTime: v.sourceTime,
      timecode: v.timecode,
      label: ""
    };
  })() : void 0, m = d ? (() => {
    const x = xr(d, 0, e);
    return {
      item: d,
      sourceTime: x.sourceTime,
      timecode: x.timecode,
      label: ""
    };
  })() : void 0, b = u ? (() => {
    const x = Math.max(0, u.durationInFrames + o - 1), v = xr(u, x, e);
    return {
      item: u,
      sourceTime: v.sourceTime,
      timecode: v.timecode,
      label: "OUT"
    };
  })() : {
    item: null,
    timecode: "--:--:--:--",
    label: "OUT",
    placeholderText: "GAP"
  }, h = d ? (() => {
    const v = xr(d, o, e);
    return {
      item: d,
      sourceTime: v.sourceTime,
      timecode: v.timecode,
      label: "IN"
    };
  })() : {
    item: null,
    timecode: "--:--:--:--",
    label: "IN",
    placeholderText: "GAP"
  };
  return /* @__PURE__ */ r.jsx(
    bu,
    {
      leftPanel: b,
      rightPanel: h,
      topLeftCorner: f,
      topRightCorner: m
    }
  );
}
function vp({
  isGizmoInteracting: e,
  isPlaying: t,
  currentFrame: s,
  previewFrame: a,
  renderedFrame: o
}) {
  if (t) return !1;
  const i = e ? s : a;
  return i === null ? !1 : i === o;
}
function yp(e, t = {}) {
  const s = Math.max(1, t.forwardSteps ?? 4), a = Math.max(1, t.backwardSteps ?? 8), o = Math.max(0, t.oppositeSteps ?? 2), i = Math.max(1, t.neutralRadius ?? 2);
  if (e === 0) {
    const u = [];
    for (let d = 1; d <= i; d++)
      u.push(-d, d);
    return u;
  }
  const c = e < 0 ? a : s, l = [];
  for (let u = 1; u <= c; u++)
    l.push(u * e);
  for (let u = 1; u <= o; u++)
    l.push(-(u * e));
  return l;
}
function wp(e, t, s, a = 0) {
  const o = Math.max(0, s), i = Math.max(0, a);
  let c = null, l = !1;
  for (const u of e) {
    const d = Math.max(0, u.cooldownFrames ?? i);
    if (t >= u.startFrame && t < u.endFrame)
      return {
        hasActiveTransition: !0,
        shouldHoldOverlay: !0,
        shouldPrewarm: !0,
        nextTransitionStartFrame: u.startFrame
      };
    if (t >= u.endFrame && t < u.endFrame + d && (l = !0), t < u.startFrame) {
      c = u.startFrame;
      break;
    }
  }
  return {
    hasActiveTransition: !1,
    shouldHoldOverlay: l,
    shouldPrewarm: c !== null && c - t <= o,
    nextTransitionStartFrame: c
  };
}
function Bn(e) {
  return e.isPlaying ? "playing" : e.isGizmoInteracting ? "gizmo_dragging" : e.previewFrame !== null ? "scrubbing" : "paused";
}
function ra(e, t) {
  return e === "scrubbing" && t.previewFrame !== null ? t.previewFrame : t.currentFrame;
}
function Sp(e) {
  const t = Math.max(1, Math.round(e.fps * e.aheadSeconds));
  if (e.mode !== "scrubbing")
    return {
      startFrame: e.anchorFrame,
      endFrame: e.anchorFrame + t
    };
  if (e.scrubDirection > 0)
    return {
      startFrame: e.anchorFrame,
      endFrame: e.anchorFrame + t
    };
  if (e.scrubDirection < 0)
    return {
      startFrame: e.anchorFrame - t,
      endFrame: e.anchorFrame
    };
  const s = Math.floor(t / 2);
  return {
    startFrame: e.anchorFrame - s,
    endFrame: e.anchorFrame + (t - s)
  };
}
const Cp = 1.5;
function kp(e, t, s = Cp) {
  if (e <= 0) return !1;
  const a = Math.max(8, Math.round(t * s));
  return e <= a;
}
function Mp(e) {
  return e.interactionMode === "scrubbing" && e.prevInteractionMode !== "scrubbing" ? "scrub_enter" : e.interactionMode !== "playing" && e.interactionMode !== "scrubbing" && e.currentFrame !== e.prevCurrentFrame && kp(
    Math.abs(e.currentFrame - e.prevCurrentFrame),
    e.fps
  ) ? "paused_short_seek" : "none";
}
function Rp({
  interactionMode: e,
  previewFrameChanged: t
}) {
  return !!(e === "gizmo_dragging" || e === "scrubbing" && t);
}
function pc(e) {
  const t = Bn({
    isPlaying: e.isPlaying,
    previewFrame: e.previewFrame,
    isGizmoInteracting: e.isGizmoInteracting
  }), s = ra(t, {
    currentFrame: e.currentFrame,
    previewFrame: e.previewFrame
  });
  return {
    mode: t,
    anchorFrame: s,
    currentFrame: e.currentFrame,
    previewFrame: e.previewFrame
  };
}
function Mo(e) {
  const t = pc(e.prev), s = pc(e.next), a = s.currentFrame !== t.currentFrame, o = s.previewFrame !== t.previewFrame, i = typeof e.fps == "number" ? Mp({
    interactionMode: s.mode,
    prevInteractionMode: t.mode,
    currentFrame: s.currentFrame,
    prevCurrentFrame: t.currentFrame,
    fps: e.fps
  }) : "none";
  return {
    prev: t,
    next: s,
    currentFrameChanged: a,
    previewFrameChanged: o,
    enteredPlaying: s.mode === "playing" && t.mode !== "playing",
    exitedPlaying: s.mode !== "playing" && t.mode === "playing",
    enteredScrubbing: s.mode === "scrubbing" && t.mode !== "scrubbing",
    exitedScrubbing: s.mode !== "scrubbing" && t.mode === "scrubbing",
    shouldSkipCurrentFrameSeek: Rp({
      interactionMode: s.mode,
      previewFrameChanged: o
    }),
    preloadBurstTrigger: i
  };
}
function Pp(e) {
  const {
    mode: t,
    currentPoolSourceCount: s,
    currentPoolElementCount: a,
    maxSources: o,
    minSources: i,
    hardCapSources: c,
    hardCapElements: l
  } = e, u = t === "playing" ? o : t === "scrubbing" ? Math.max(i, o - 4) : Math.max(i, o - 8), d = Math.max(0, s - c), f = Math.max(0, a - l), m = Math.ceil(f / 2), b = u - d - m;
  return Math.max(i, Math.min(o, b));
}
function Ip(e, t, s) {
  return e.length < s ? [...e, t] : [...e.slice(e.length - s + 1), t];
}
const Fp = {
  emaAlpha: 0.2,
  degradeThresholdRatio: 1.2,
  recoverThresholdRatio: 0.85,
  degradeSamples: 10,
  recoverSamples: 36,
  changeCooldownMs: 1200
};
function Tp(e) {
  return e === 1 ? 0.5 : e === 0.5 ? 0.33 : 0.25;
}
function Ep(e) {
  return e === 0.25 ? 0.33 : e === 0.33 ? 0.5 : 1;
}
function gc(e = 1) {
  return {
    qualityCap: e,
    frameTimeEmaMs: 0,
    overBudgetSamples: 0,
    underBudgetSamples: 0,
    lastQualityChangeAtMs: 0
  };
}
function jp(e, t) {
  return e <= t ? e : t;
}
function Np(e, t) {
  const s = Number.isFinite(e) && e > 0 ? e : 30, a = Number.isFinite(t) && t > 0 ? t : 1;
  return 1e3 / Math.max(1, s * a);
}
function Ap({
  state: e,
  sampleMsPerFrame: t,
  frameBudgetMs: s,
  userQuality: a,
  nowMs: o,
  allowRecovery: i = !0,
  options: c
}) {
  const l = { ...Fp, ...c }, u = Math.max(0, t), d = e.frameTimeEmaMs === 0 ? u : e.frameTimeEmaMs + (u - e.frameTimeEmaMs) * l.emaAlpha, f = s * l.degradeThresholdRatio, m = s * l.recoverThresholdRatio;
  let b = e.overBudgetSamples, h = e.underBudgetSamples;
  d > f ? (b += 1, h = 0) : d < m ? (h += 1, b = 0) : (b = 0, h = 0);
  let x = e.qualityCap, v = null, C = e.lastQualityChangeAtMs;
  const y = o - e.lastQualityChangeAtMs >= l.changeCooldownMs, w = jp(a, x);
  if (y && b >= l.degradeSamples && w > 0.25)
    x = Tp(w), v = "degrade", C = o, b = 0, h = 0;
  else if (i && y && h >= l.recoverSamples && x < a) {
    const S = Ep(x);
    x = S > a ? a : S, v = "recover", C = o, b = 0, h = 0;
  }
  return {
    state: {
      qualityCap: x,
      frameTimeEmaMs: d,
      overBudgetSamples: b,
      underBudgetSamples: h,
      lastQualityChangeAtMs: C
    },
    qualityChanged: v !== null,
    qualityChangeDirection: v
  };
}
function Dp(e, t) {
  if (!e.visible) return !1;
  for (const s of e.items) {
    if (s.type !== "text" || !(!!s.textShadow || (s.stroke?.width ?? 0) > 0)) continue;
    const i = !!t.get(s.id)?.properties.some(
      (l) => l.keyframes.length > 0
    ), c = (s.fadeIn ?? 0) > 0 || (s.fadeOut ?? 0) > 0;
    if (i || c)
      return !0;
  }
  return !1;
}
function Op(e, t) {
  if (e.length === 0)
    return !1;
  const s = /* @__PURE__ */ new Map();
  for (const a of t)
    s.set(a.itemId, a);
  return e.some((a) => Dp(a, s));
}
function vu(e, t, s, a) {
  return Number.isFinite(s) ? e.some(
    (o) => s >= o.from && s < o.from + o.durationInFrames && ((a?.get(o.id) ?? o.effects)?.some(
      (i) => i.enabled && i.effect.type === "gpu-effect"
    ) || o.blendMode && o.blendMode !== "normal")
  ) : !1;
}
function _p(...e) {
  const [t, s] = n.useState(!1);
  return n.useEffect(() => {
    const a = () => {
      const u = Zt.getState().items, d = hs.getState().transitions, f = ne.getState(), m = f.previewFrame ?? f.currentFrame, b = Xe.getState().preview, h = b ? new Map(
        Object.entries(b).filter(([, x]) => Array.isArray(x.effects)).map(([x, v]) => [x, v.effects])
      ) : void 0;
      s((x) => {
        const v = vu(
          u,
          d.length,
          m,
          h
        );
        return x === v ? x : v;
      });
    };
    a();
    const o = Zt.subscribe(a), i = hs.subscribe(a), c = Xe.subscribe((u, d) => {
      u.preview !== d.preview && a();
    }), l = ne.subscribe((u, d) => {
      u.currentFrame === d.currentFrame && u.previewFrame === d.previewFrame || a();
    });
    return () => {
      o(), i(), c(), l();
    };
  }, []), t;
}
const xc = 5, Lp = 10, Bp = 6, Hp = 3, bc = 6, Up = 1, Vp = 4, Gp = 1, Wp = 24, zp = 12, $p = 3, Kp = 180, qp = 0.5, Yp = 256, Xp = 96, Zp = 1, Jp = 2, Qp = 2, eg = 6, tg = 6, rg = !0, ng = 3, sg = 2, ag = 0, og = 1, ig = 24, cg = 24, vc = 2, lg = 8, yc = 16, ug = 200, dg = 20, wc = 2, fg = 8, mg = 8, hg = 3, pg = 20, Sc = 24, gg = 40, xg = 4, Cc = 2500, bg = 300, vg = 400, yg = 8e3, wg = 6, Sg = 12, Cg = 8, kg = 4, Mg = 120, Rg = 6;
function Pg(e) {
  const t = [];
  for (const s of e) {
    t.push(
      `t:${s.id}:${s.order}:${s.visible ? 1 : 0}:${s.solo ? 1 : 0}:${s.muted ? 1 : 0}:${s.volume ?? 0}`
    );
    for (const a of s.items) {
      const o = "src" in a ? a.src ?? "" : "";
      t.push(
        `i:${a.id}:${a.type}:${a.from}:${a.durationInFrames}:${a.mediaId ?? ""}:${o}:${a.speed ?? 1}:${a.volume ?? 1}:${a.sourceStart ?? 0}:${a.sourceEnd ?? 0}`
      );
    }
  }
  return t.join("|");
}
function kc(e) {
  return e === "scrubbing" ? Hp : e === "playing" ? Lp : Bp;
}
function Ig(e) {
  return e === "scrubbing" ? kg : e === "playing" ? Sg : Cg;
}
function ao(e) {
  if (!e) return 0;
  const t = e.toLowerCase();
  return t.includes("ec-3") || t.includes("eac3") || t.includes("ac-3") || t.includes("ac3") ? 5 : t.includes("avc") || t.includes("h264") ? 2 : t.includes("hevc") || t.includes("h265") ? 3 : 1;
}
function Fg(e) {
  if (!e) return 1;
  let t = 1;
  if (e.mimeType.startsWith("video/")) {
    const s = Math.max(0, e.width) * Math.max(0, e.height);
    s >= 3840 * 2160 ? t += 6 : s >= 2560 * 1440 ? t += 4 : s >= 1920 * 1080 ? t += 3 : s >= 1280 * 720 && (t += 2), t += ao(e.codec), t += ao(e.audioCodec);
  } else e.mimeType.startsWith("audio/") && (t += ao(e.audioCodec));
  return Math.max(1, t);
}
function Mc(e, t) {
  return t >= 10 ? Math.max(1, e - 5) : t >= 7 ? Math.max(1, e - 3) : t >= 4 ? Math.max(1, e - 1) : e;
}
function Tg(e, t, s) {
  if (e.length === 0) return -1;
  let a = 0, o = e.length;
  for (; a < o; ) {
    const c = Math.floor((a + o) / 2);
    e[c].from < t ? a = c + 1 : o = c;
  }
  const i = a;
  if (s < 0) {
    let c = i;
    return c >= e.length ? c = e.length - 1 : e[c].from > t && c > 0 && (c -= 1), c;
  }
  return Math.max(0, i - 1);
}
function yu(e, t) {
  return t > e ? 1 : t < e ? -1 : 0;
}
async function Rc(e) {
  return new Promise((t, s) => {
    const a = new FileReader();
    a.onload = () => {
      typeof a.result == "string" ? t(a.result) : s(new Error("Invalid data URL result"));
    }, a.onerror = () => s(a.error ?? new Error("Failed to read blob")), a.readAsDataURL(e);
  });
}
const Pc = xa("useCustomPlayer");
function Eg(e, t, s, a, o) {
  const i = ne((y) => y.isPlaying), [c, l] = n.useState(!1), u = n.useRef(0), d = n.useRef(null), f = n.useRef(0), m = n.useRef(null), b = n.useRef(!1), h = n.useRef(i), x = n.useCallback(() => {
    const y = e.current?.getCurrentFrame();
    return Number.isFinite(y) ? Math.round(y) : null;
  }, [e]), v = n.useCallback((y) => {
    if (!e.current || d.current === y) return;
    const w = x();
    if (w !== null && w === y) {
      u.current = y, d.current = y;
      return;
    }
    b.current = !0;
    try {
      o?.(y), e.current.seekTo(y), u.current = y, d.current = y;
    } catch (S) {
      Pc.error("Failed to seek Player:", S);
    }
    requestAnimationFrame(() => {
      b.current = !1;
    });
  }, [e, x, o]);
  n.useEffect(() => {
    e.current && !c && l(!0);
    const y = setInterval(() => {
      e.current && !c && (l(!0), clearInterval(y));
    }, 50), w = setTimeout(() => clearInterval(y), 1e3);
    return () => {
      clearInterval(y), clearTimeout(w);
    };
  }, [e, c]), n.useEffect(() => {
    if (!e.current) return;
    const y = h.current;
    h.current = i;
    try {
      if (i && !y) {
        const { currentFrame: w, setPreviewFrame: S } = ne.getState(), R = x();
        if ((R === null || Math.abs(R - w) > 1) && (b.current = !0, o?.(w), e.current.seekTo(w), u.current = w, d.current = w), S(null), !ne.getState().isPlaying) {
          b.current = !1;
          return;
        }
        e.current?.play(), b.current = !1;
        return;
      } else !i && y && e.current.pause();
    } catch (w) {
      Pc.error("Failed to control playback:", w);
    }
  }, [i, e, x, o]);
  const C = No((y) => y.isTimelineLoading);
  return n.useEffect(() => {
    if (!c || !e.current || C) return;
    const y = ne.getState().currentFrame, w = x();
    return u.current = y, d.current = y, w !== y && o?.(y), e.current.seekTo(y), ne.subscribe((R, O) => {
      if (!e.current) return;
      const L = Mo({
        prev: {
          isPlaying: O.isPlaying,
          previewFrame: O.previewFrame,
          currentFrame: O.currentFrame,
          isGizmoInteracting: a?.current === !0
        },
        next: {
          isPlaying: R.isPlaying,
          previewFrame: R.previewFrame,
          currentFrame: R.currentFrame,
          isGizmoInteracting: a?.current === !0
        }
      });
      if (!L.currentFrameChanged) return;
      const I = R.currentFrame;
      if (Math.abs(I - u.current) !== 0) {
        if (L.next.mode === "playing") {
          const P = x();
          if (P !== null && Math.abs(P - I) <= 2) {
            u.current = I;
            return;
          }
        }
        if (L.shouldSkipCurrentFrameSeek) {
          u.current = I;
          return;
        }
        v(I);
      }
    });
  }, [c, C, e, x, v, a, o]), n.useEffect(() => {
    if (!(!c || !e.current))
      return ne.subscribe((y, w) => {
        if (!e.current) return;
        const S = Mo({
          prev: {
            isPlaying: w.isPlaying,
            previewFrame: w.previewFrame,
            currentFrame: w.currentFrame,
            isGizmoInteracting: a?.current === !0
          },
          next: {
            isPlaying: y.isPlaying,
            previewFrame: y.previewFrame,
            currentFrame: y.currentFrame,
            isGizmoInteracting: a?.current === !0
          }
        });
        if (!S.previewFrameChanged) return;
        const R = S.next.mode;
        if (R === "playing" || R === "gizmo_dragging") {
          f.current = 0, m.current = null;
          return;
        }
        if (R === "scrubbing" && t?.current) {
          f.current = 0, m.current = null;
          return;
        }
        if (!s?.current && R === "scrubbing" && y.previewFrame !== null && y.currentFrame === y.previewFrame && y.currentFrameEpoch === y.previewFrameEpoch) {
          f.current = 0, m.current = null;
          return;
        }
        const L = S.next.anchorFrame;
        if ((R === "scrubbing" ? yu(S.prev.anchorFrame, S.next.anchorFrame) : 0) < 0) {
          const j = performance.now(), P = Math.floor(
            L / wc
          ) * wc, F = m.current, E = j - f.current < dg, T = F === null ? Number.POSITIVE_INFINITY : Math.abs(P - F);
          if (E && T < fg)
            return;
          f.current = j, m.current = P, v(P);
          return;
        }
        f.current = 0, m.current = null, v(L);
      });
  }, [c, e, v, t, s, a]), { ignorePlayerUpdatesRef: b };
}
const Ic = /* @__PURE__ */ new WeakMap();
function qn(e) {
  if (e === null)
    return "null";
  if (typeof e !== "object")
    return JSON.stringify(e);
  const s = e, a = Ic.get(s);
  if (a !== void 0)
    return a;
  let o;
  if (Array.isArray(e))
    o = `[${e.map((i) => qn(i)).join(",")}]`;
  else {
    const i = e;
    o = `{${Object.keys(i).filter((l) => i[l] !== void 0).sort().map((l) => `${JSON.stringify(l)}:${qn(i[l])}`).join(",")}}`;
  }
  return Ic.set(s, o), o;
}
function wu(e, t) {
  if (e === t)
    return !0;
  const s = e ?? [], a = t ?? [];
  if (s.length !== a.length)
    return !1;
  const o = new Map(a.map((i) => [i.itemId, i]));
  if (o.size !== a.length)
    return !1;
  for (const i of s) {
    const c = o.get(i.itemId);
    if (!c)
      return !1;
    if (i !== c && qn(i) !== qn(c))
      return !1;
  }
  return !0;
}
function jg(e, t) {
  const s = Yn(e), a = Yn(t);
  if (s.size !== a.size)
    return !1;
  for (const [o, i] of s)
    if (a.get(o) !== i)
      return !1;
  return !0;
}
function Yn(e) {
  const t = /* @__PURE__ */ new Map();
  for (const s of e)
    for (const a of s.items)
      t.set(a.id, a);
  return t;
}
function Fc(e) {
  return !e || e.length === 0 ? /* @__PURE__ */ new Map() : new Map(e.map((t) => [t.itemId, t]));
}
function Tc(e) {
  if (!e) return null;
  const t = Math.trunc(e.from), s = Math.trunc(e.from + e.durationInFrames);
  return !Number.isFinite(t) || !Number.isFinite(s) || s <= t ? null : { startFrame: t, endFrame: s };
}
function Ng({
  previousTracks: e,
  nextTracks: t,
  previousKeyframes: s,
  nextKeyframes: a
}) {
  if (e === t && s === a)
    return [];
  const o = Yn(e), i = Yn(t), c = Fc(s), l = Fc(a), u = /* @__PURE__ */ new Set();
  for (const [f, m] of o)
    i.get(f) !== m && u.add(f);
  for (const [f, m] of i)
    o.get(f) !== m && u.add(f);
  for (const [f, m] of c)
    l.get(f) !== m && u.add(f);
  for (const [f, m] of l)
    c.get(f) !== m && u.add(f);
  const d = [];
  for (const f of u) {
    const m = Tc(o.get(f));
    m && d.push(m);
    const b = Tc(i.get(f));
    b && d.push(b);
  }
  return hd(d);
}
function Ag(e) {
  const t = { ...e };
  for (const s of ["effects", "waveformData"]) {
    const a = t[s];
    Array.isArray(a) && a.length === 0 && delete t[s];
  }
  return t;
}
function Ec(e) {
  const { text: t, label: s, ...a } = e;
  return Ag(a);
}
function Dg(e, t) {
  return qn(Ec(e)) === qn(Ec(t));
}
function Og(e, t, s, a) {
  if (e === t && s === a)
    return { ok: !1, reason: "same_refs" };
  const o = Yn(e), i = Yn(t);
  if (!wu(s, a))
    return { ok: !1, reason: "keyframes_mismatch" };
  const c = /* @__PURE__ */ new Set();
  for (const [l, u] of o)
    i.get(l) !== u && c.add(l);
  for (const [l, u] of i)
    o.get(l) !== u && c.add(l);
  if (c.size === 0)
    return { ok: !1, reason: "no_item_ref_change" };
  for (const l of c) {
    const u = o.get(l), d = i.get(l);
    if (!u || !d)
      return { ok: !1, reason: "item_added_or_removed" };
    if (u.type !== "text" || d.type !== "text")
      return { ok: !1, reason: "non_text_item" };
    if (!Dg(u, d))
      return { ok: !1, reason: "text_body_mismatch_other_fields" };
  }
  return { ok: !0 };
}
function _g(e, t, s, a) {
  return Og(
    e,
    t,
    s,
    a
  );
}
const jr = xa("VideoPreview");
function Lg(e, t) {
  return Math.abs(e.left - t.left) < 0.5 && Math.abs(e.top - t.top) < 0.5 && Math.abs(e.width - t.width) < 0.5 && Math.abs(e.height - t.height) < 0.5;
}
const Bg = n.memo(function({
  project: t,
  containerSize: s,
  suspendOverlay: a = !1
}) {
  const o = n.useRef(null), i = n.useRef(null), c = n.useRef(null), l = n.useRef(null), u = n.useRef(null), d = n.useRef(!1), f = n.useRef(!1), m = n.useRef(null), b = n.useRef(null), h = n.useRef(null), x = n.useRef(null), v = n.useRef(null), C = n.useRef(null), y = n.useRef(!1), w = n.useRef(0), S = n.useRef(null), R = n.useRef(null), O = n.useRef(null), L = n.useRef(null), I = n.useRef(!1), j = n.useRef([]), P = n.useRef(/* @__PURE__ */ new Set()), F = n.useRef([]), E = n.useRef(/* @__PURE__ */ new Set()), T = n.useRef(/* @__PURE__ */ new Set()), N = n.useRef([]), z = n.useRef(/* @__PURE__ */ new Map()), M = n.useRef(null), Y = n.useRef(null), G = n.useRef(null), X = n.useRef(null), D = n.useRef(null), W = n.useRef(null), q = n.useRef(/* @__PURE__ */ new Map()), pe = n.useRef(/* @__PURE__ */ new Map()), k = n.useRef(/* @__PURE__ */ new Map()), B = n.useRef(/* @__PURE__ */ new Map()), U = n.useRef(null), J = n.useRef(null), re = n.useRef(null), me = n.useRef(null), xe = n.useRef(null), ye = n.useRef(0), Me = n.useRef(!1), Be = n.useRef(!1), Te = n.useRef(0), De = n.useRef(0), Qe = n.useRef(0), Ee = n.useRef(null), ee = n.useRef(null), Ve = n.useRef(0), H = n.useRef(null), ue = n.useRef(() => {
  }), Ce = n.useRef(!0), [Ge, ke] = n.useState(!1), [_, he] = n.useState(!1), et = n.useRef(!1), qe = n.useRef(!1), $e = n.useRef("player"), ct = n.useRef(0), pt = n.useRef([]);
  n.useRef(null), n.useRef({
    samples: 0,
    totalMs: 0,
    lastMs: 0,
    timeouts: 0
  });
  const [Gt, vr] = n.useState(!1), [Lt, Dr] = n.useState(null), fr = n.useRef(null), yr = n.useRef({
    sessionCount: 0,
    lastPrepareMs: 0,
    lastReadyLeadMs: 0,
    lastEntryMisses: 0,
    lastSessionDurationMs: 0
  }), Or = n.useRef(null), wr = n.useRef(null), Nt = n.useCallback((p, A = {}) => {
  }, []), [Ue, Pt] = n.useState(null), zt = n.useCallback((p) => {
    i.current = p;
  }, []), Re = No((p) => p.fps), Jt = Zt((p) => p.tracks), Kt = dn((p) => p.keyframes), Bt = Zt((p) => p.items), nr = Zt((p) => p.itemsByTrackId), Mr = ss((p) => p.mediaDependencyVersion), Ht = hs((p) => p.transitions), Mn = lr((p) => p.mediaById), Kr = ds(
    (p) => !!(p.trimmedItemId && p.neighborItemId && p.handle)
  ), Qr = yn((p) => !!(p.trimmedItemId && p.handle)), mn = vo((p) => !!p.itemId), Tr = fs((p) => !!p.itemId), Rn = Xe((p) => p.activeGizmo?.itemId ?? null), en = Xe((p) => p.activeGizmo !== null), Cs = ze((p) => p.isEditing), ks = ne((p) => p.isPlaying), ka = _p(u, i, x, d), Er = ne((p) => p.zoom), Ms = ne((p) => p.useProxy), g = lr((p) => {
    let A = 0;
    for (const $ of p.proxyStatus.values())
      $ === "ready" && A++;
    return A;
  }), V = n.useMemo(
    () => Rn ? Bt.find((p) => p.id === Rn)?.type ?? null : null,
    [Rn, Bt]
  ), te = n.useRef(en);
  te.current = en;
  const oe = n.useRef(!1), K = n.useRef(!1), Z = n.useRef(gc(1)), ie = n.useRef(null), [Pe, Ie] = n.useState(1), Ze = n.useCallback((p) => oe.current || K.current && p !== null, []), ot = n.useCallback((p) => {
  }, []), ht = n.useCallback((p) => {
  }, []), at = n.useCallback(() => {
    ee.current = null, Ve.current = 0, H.current !== null && (cancelAnimationFrame(H.current), H.current = null);
  }, []), st = n.useCallback(() => {
    at(), et.current = !1, ke(!1), f.current = !1;
  }, [at]), rt = n.useCallback(() => {
    qe.current = !1, he(!1);
  }, []), it = n.useCallback((p) => {
    const A = ee.current;
    if (A === null) return !1;
    let $ = p ?? null;
    if ($ === null) {
      const ae = o.current?.getCurrentFrame();
      $ = Number.isFinite(ae) ? Math.round(ae) : null;
    }
    return $ !== A ? !1 : (st(), !0);
  }, [st]), ft = n.useCallback(() => {
    ee.current !== null && H.current === null && (H.current = requestAnimationFrame(() => {
      if (H.current = null, ee.current === null) return;
      const p = ne.getState();
      if (p.previewFrame !== null) {
        at();
        return;
      }
      if (p.isPlaying || Ze(p.previewFrame)) {
        st();
        return;
      }
      if (!it()) {
        if (performance.now() - Ve.current >= ug) {
          st();
          return;
        }
        ft();
      }
    }));
  }, [
    at,
    st,
    it,
    Ze
  ]), vt = n.useCallback((p) => {
    ee.current = p, Ve.current = performance.now(), ft();
  }, [ft]), Rr = n.useCallback(() => {
    at(), qe.current = !1, he(!1), et.current = !0, ke(!0), f.current = !0;
  }, [at]), _r = n.useCallback(() => {
    at(), et.current = !1, ke(!1), qe.current = !0, he(!0), f.current = !1;
  }, [at]), { ignorePlayerUpdatesRef: hn } = Eg(
    o,
    f,
    K,
    te,
    ot
  );
  n.useEffect(() => {
    const p = ne.getState();
    p.previewFrame !== null && (p.currentFrame !== p.previewFrame && p.setCurrentFrame(p.previewFrame), p.setPreviewFrame(null));
  }, []), n.useEffect(() => {
    if (te.current = en, !en) return;
    const p = ne.getState();
    p.previewFrame !== null && (p.currentFrame !== p.previewFrame && p.setCurrentFrame(p.previewFrame), p.setPreviewFrame(null));
  }, [en]), n.useEffect(() => {
    if (ks) {
      ie.current = null;
      return;
    }
    ie.current = null, Z.current = gc(1), Pe !== 1 && Ie(1);
  }, [Pe, ks]);
  const Lr = ne((p) => p.setCaptureFrame), pn = ne((p) => p.setCaptureFrameImageData), qr = ne((p) => p.setDisplayedFrame), [mr, Br] = n.useState(/* @__PURE__ */ new Map()), Jo = vl(), [Pr, Tt] = n.useState(!1), [Ma, Rs] = n.useState(0), [Xn, Qo] = n.useState(0), Pn = n.useRef([]), In = n.useRef(/* @__PURE__ */ new Set()), Eu = n.useRef(/* @__PURE__ */ new Map()), Ra = n.useRef(!1), tn = n.useRef(0), Zn = n.useRef(0), Jn = n.useRef(0), ei = n.useRef(null), Fn = n.useRef(/* @__PURE__ */ new Map()), Tn = n.useRef(/* @__PURE__ */ new Map()), rn = n.useRef(null), Pa = n.useRef(!1), nt = n.useRef({
    resolveSamples: 0,
    resolveTotalMs: 0,
    resolveTotalIds: 0,
    resolveLastMs: 0,
    resolveLastIds: 0,
    preloadScanSamples: 0,
    preloadScanTotalMs: 0,
    preloadScanLastMs: 0,
    preloadBatchSamples: 0,
    preloadBatchTotalMs: 0,
    preloadBatchLastMs: 0,
    preloadBatchLastIds: 0,
    preloadCandidateIds: 0,
    preloadBudgetBase: 0,
    preloadBudgetAdjusted: 0,
    preloadWindowMaxCost: 0,
    preloadScanBudgetYields: 0,
    preloadContinuations: 0,
    preloadScrubDirection: 0,
    preloadDirectionPenaltyCount: 0,
    sourceWarmTarget: 0,
    sourceWarmKeep: 0,
    sourceWarmEvictions: 0,
    sourcePoolSources: 0,
    sourcePoolElements: 0,
    sourcePoolActiveClips: 0,
    fastScrubPrewarmedSources: 0,
    fastScrubPrewarmSourceEvictions: 0,
    staleScrubOverlayDrops: 0,
    scrubDroppedFrames: 0,
    scrubUpdates: 0,
    adaptiveQualityDowngrades: 0,
    adaptiveQualityRecovers: 0
  }), ti = n.useRef(-1), Ia = Ge || _;
  n.useEffect(() => {
    et.current = Ge, qe.current = _;
    const p = Ge ? "fast_scrub_overlay" : _ ? "playback_transition_overlay" : "player", A = $e.current;
    A !== p && (ct.current += 1, pt.current = Ip(
      pt.current,
      {
        ts: Date.now(),
        atFrame: ne.getState().currentFrame,
        from: A,
        to: p
      },
      Rg
    )), $e.current = p;
  }, [Ge, _]), n.useEffect(() => {
    Ia || qr(null);
  }, [Ia, qr]);
  const Qn = n.useCallback((p) => {
    const A = ss.getState().mediaIds, $ = /* @__PURE__ */ new Set();
    for (const ae of A)
      p.has(ae) || $.add(ae);
    return In.current = $, Pn.current = [...$], Pn.current;
  }, []), Ps = n.useCallback((p) => {
    if (p.length === 0) return;
    const A = ss.getState().mediaIds, $ = new Set(A), ae = In.current;
    let se = !1;
    for (const we of p)
      $.has(we) && (ae.has(we) || (ae.add(we), se = !0));
    se && (Pn.current = [...ae]);
  }, []), Is = n.useCallback((p) => {
    if (p.length === 0) return;
    const A = In.current;
    let $ = !1;
    for (const ae of p)
      A.delete(ae) && ($ = !0);
    $ && (Pn.current = [...A]);
  }, []), nn = n.useCallback((p) => {
    if (p.length !== 0)
      for (const A of p)
        Fn.current.delete(A), Tn.current.delete(A);
  }, []), ri = n.useCallback((p) => {
    for (const A of Fn.current.keys())
      p.has(A) || Fn.current.delete(A);
    for (const A of Tn.current.keys())
      p.has(A) || Tn.current.delete(A);
  }, []), Fs = n.useCallback((p) => {
    if (p.length === 0) return null;
    const A = Date.now();
    let $ = null;
    for (const ae of p) {
      const se = (Fn.current.get(ae) ?? 0) + 1;
      Fn.current.set(ae, se);
      const we = Math.min(se - 1, 6), Ae = Math.min(
        yg,
        vg * Math.pow(2, we)
      ), Se = A + Ae;
      Tn.current.set(ae, Se), ($ === null || Se < $) && ($ = Se);
    }
    return $;
  }, []), es = n.useCallback((p) => Tn.current.get(p) ?? 0, []), Yr = n.useCallback((p) => {
    if (rn.current && (clearTimeout(rn.current), rn.current = null), p === null) return;
    const A = Math.max(0, p - Date.now());
    rn.current = setTimeout(() => {
      rn.current = null, Qo(($) => $ + 1);
    }, A);
  }, []), En = n.useCallback(() => {
    Fn.current.clear(), Tn.current.clear(), rn.current && (clearTimeout(rn.current), rn.current = null);
  }, []), ts = n.useCallback(() => {
    Pa.current || Qo((p) => p + 1);
  }, []), ni = n.useCallback((p) => {
    const A = Eu.current, $ = A.get(p);
    if ($)
      return $;
    const ae = Cn(p).then((se) => se ?? null).catch(() => null).finally(() => {
      A.delete(p);
    });
    return A.set(p, ae), ae;
  }, []), Ts = n.useCallback(async (p) => {
    if (p.length === 0)
      return { resolvedEntries: [], failedIds: [] };
    const A = [], $ = [];
    let ae = 0;
    const se = Math.min(wg, p.length);
    return await Promise.all(
      Array.from({ length: se }, async () => {
        for (; ; ) {
          const we = ae;
          if (ae += 1, we >= p.length) break;
          const Ae = p[we], Se = await ni(Ae);
          Se ? A.push({ mediaId: Ae, url: Se }) : $.push(Ae);
        }
      })
    ), { resolvedEntries: A, failedIds: $ };
  }, [ni]), Et = n.useMemo(() => xl(Jt).toSorted((A, $) => $.order - A.order).map((A) => ({
    ...A,
    items: nr[A.id] ?? []
  })), [Jt, nr]), jn = n.useMemo(() => {
    const p = /* @__PURE__ */ new Map();
    for (const [A, $] of Object.entries(Mn))
      p.set(A, Fg($));
    return p;
  }, [Mn]), {
    resolvedTracks: si,
    fastScrubTracks: ai,
    playbackVideoSourceSpans: oi,
    scrubVideoSourceSpans: ii,
    fastScrubBoundaryFrames: Fa,
    fastScrubBoundarySources: Ta,
    fastScrubTracksFingerprint: Ea
  } = n.useMemo(() => {
    const p = [], A = [], $ = [], ae = [], se = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map();
    for (const fe of Et) {
      const Fe = [], tt = [];
      for (const je of fe.items) {
        if (!je.mediaId || je.type !== "video" && je.type !== "audio" && je.type !== "image") {
          Fe.push(je), tt.push(je);
          continue;
        }
        const lt = mr.get(je.mediaId) ?? "", gt = je.type === "video" && Do(je.mediaId) || lt, Ft = Ms && je.type === "video" ? gt : lt, Wt = je.type === "video" ? gt : lt, Ot = "src" in je && je.src === Ft ? je : { ...je, src: Ft }, _t = "src" in je && je.src === Wt ? je : { ...je, src: Wt };
        if (Fe.push(Ot), tt.push(_t), Ot.type === "video" && Ft && $.push({
          src: Ft,
          startFrame: Ot.from,
          endFrame: Ot.from + Ot.durationInFrames
        }), _t.type === "video" && Wt && (ae.push({
          src: Wt,
          startFrame: _t.from,
          endFrame: _t.from + _t.durationInFrames
        }), _t.durationInFrames > 0)) {
          const er = _t.from, It = _t.from + _t.durationInFrames;
          se.add(er), se.add(It);
          let Q = we.get(er);
          Q || (Q = /* @__PURE__ */ new Set(), we.set(er, Q)), Q.add(Wt);
          let de = we.get(It);
          de || (de = /* @__PURE__ */ new Set(), we.set(It, de)), de.add(Wt);
        }
      }
      p.push({ ...fe, items: Fe }), A.push({ ...fe, items: tt });
    }
    const Ae = [...se].sort((fe, Fe) => fe - Fe), Se = [...we.entries()].map(([fe, Fe]) => ({ frame: fe, srcs: [...Fe] })).sort((fe, Fe) => fe.frame - Fe.frame);
    return {
      resolvedTracks: p,
      fastScrubTracks: A,
      playbackVideoSourceSpans: $,
      scrubVideoSourceSpans: ae,
      fastScrubBoundaryFrames: Ae,
      fastScrubBoundarySources: Se,
      fastScrubTracksFingerprint: Pg(A)
    };
  }, [Et, mr, Ms, g]), ju = lr((p) => p.brokenMediaIds.length), ja = n.useMemo(
    () => Bt.reduce((p, A) => Math.max(p, A.from + A.durationInFrames), 0),
    [Bt]
  ), Nu = n.useMemo(() => ja === 0 ? 900 : ja + Re * 5, [ja, Re]), Na = lr((p) => p.brokenMediaIds), ci = n.useRef([]);
  n.useEffect(() => {
    const p = ci.current;
    ci.current = Na;
    const A = p.filter(($) => !Na.includes($));
    A.length > 0 && (nn(A), Ps(A), Br(($) => {
      const ae = new Map($);
      let se = !1;
      for (const we of A)
        ae.delete(we) && (se = !0);
      return se ? ae : $;
    }));
  }, [Ps, Na, nn]), n.useEffect(() => {
    if (mr.size === 0)
      return;
    const p = ss.getState().mediaIds;
    if (p.length === 0)
      return;
    const A = new Set(p), $ = [];
    for (const [ae, se] of mr.entries()) {
      if (!A.has(ae)) continue;
      Ei.get(ae) !== se && $.push(ae);
    }
    $.length !== 0 && (nn($), Ps($), Br((ae) => {
      const se = new Map(ae);
      let we = !1;
      for (const Ae of $)
        se.delete(Ae) && (we = !0);
      return we ? se : ae;
    }), ts());
  }, [
    Ps,
    Jo,
    nn,
    ts,
    mr
  ]), n.useEffect(() => {
    let p = !1;
    async function A() {
      Pa.current = !0;
      try {
        const $ = ss.getState().mediaIds;
        if ($.length === 0) {
          In.current.clear(), Pn.current = [], En(), Br(/* @__PURE__ */ new Map()), Tt(!1);
          return;
        }
        const ae = new Set($);
        ri(ae);
        let se = mr, we = Pn.current;
        if (ti.current !== Mr) {
          if (ti.current = Mr, mr.size > 0) {
            const le = /* @__PURE__ */ new Map();
            for (const [Oe, ut] of mr.entries())
              ae.has(Oe) && le.set(Oe, ut);
            se = le, le.size !== mr.size && Br(le);
          }
          we = Qn(se);
        } else we.length === 0 && (we = Qn(se));
        if (we.length === 0) {
          Yr(null), Tt(!1);
          return;
        }
        const Ae = new Set(we), Se = Date.now();
        let fe = null;
        const Fe = ne.getState(), tt = Bn({
          isPlaying: Fe.isPlaying,
          previewFrame: Fe.previewFrame,
          isGizmoInteracting: te.current
        }), je = ra(tt, {
          currentFrame: Fe.currentFrame,
          previewFrame: Fe.previewFrame
        });
        if (tt === "scrubbing" && se.size > 0) {
          Yr(Date.now() + Mg), Tt(!1);
          return;
        }
        const lt = Math.max(12, Math.round(Re * 0.6)), gt = Math.max(24, Math.round(Re * xc)), Ft = je - gt, Wt = je + gt, Ot = /* @__PURE__ */ new Map();
        let _t = 0;
        for (const le of Et)
          for (const Oe of le.items) {
            if (!Oe.mediaId || !Ae.has(Oe.mediaId)) continue;
            const ut = Oe.from + Oe.durationInFrames, jt = je < Oe.from ? Oe.from - je : je > ut ? je - ut : 0, At = jn.get(Oe.mediaId) ?? 1, Dt = jt + At * lt, dt = Ot.get(Oe.mediaId);
            (dt === void 0 || Dt < dt) && Ot.set(Oe.mediaId, Dt), ut < Ft || Oe.from > Wt || At > _t && (_t = At);
          }
        const er = [];
        for (const le of we) {
          const Oe = es(le);
          if (Oe > Se) {
            (fe === null || Oe < fe) && (fe = Oe);
            continue;
          }
          const ut = jn.get(le) ?? 1, jt = gt * 4 + ut * lt;
          er.push({
            mediaId: le,
            score: Ot.get(le) ?? jt
          });
        }
        if (er.length === 0) {
          Yr(fe), Tt(!1);
          return;
        }
        const It = Mc(
          Ig(tt),
          _t
        ), Q = er.toSorted((le, Oe) => le.score - Oe.score).slice(0, It).map((le) => le.mediaId), de = er.length > Q.length;
        if (Yr(null), se.size === 0 && (Tt(!0), await new Promise((le) => setTimeout(le, 150))), p) {
          Tt(!1);
          return;
        }
        try {
          const le = new Map(se), Oe = performance.now(), { resolvedEntries: ut, failedIds: jt } = await Ts(Q), At = performance.now() - Oe;
          nt.current.resolveSamples += 1, nt.current.resolveTotalMs += At, nt.current.resolveTotalIds += Q.length, nt.current.resolveLastMs = At, nt.current.resolveLastIds = Q.length;
          const Dt = ut.map((Mt) => Mt.mediaId);
          for (const Mt of ut)
            le.set(Mt.mediaId, Mt.url);
          nn(Dt);
          const dt = Fs(jt);
          dt !== null && Yr(dt), de && Yr(Date.now() + 16), Is(Dt), p || Br(le);
        } catch (le) {
          jr.error("Failed to resolve media URLs:", le);
        } finally {
          Tt(!1);
        }
      } finally {
        Pa.current = !1;
      }
    }
    return A(), () => {
      p = !0;
    };
  }, [
    nn,
    Et,
    Re,
    es,
    Fs,
    jn,
    ri,
    Qn,
    Is,
    En,
    Ts,
    Xn,
    Yr,
    Mr,
    ju,
    Ma
  ]), n.useEffect(() => {
  }, []), n.useEffect(() => {
  }, []), n.useEffect(() => {
    const p = aa();
    if (mr.size === 0) {
      p.pruneUnused(/* @__PURE__ */ new Set());
      const Se = p.getStats();
      nt.current.sourceWarmTarget = 0, nt.current.sourceWarmKeep = 0, nt.current.sourcePoolSources = Se.sourceCount, nt.current.sourcePoolElements = Se.totalElements, nt.current.sourcePoolActiveClips = Se.activeClips;
      return;
    }
    const A = /* @__PURE__ */ new Map();
    let $ = null;
    const ae = (Se, fe, Fe, tt, je) => {
      const lt = fe - Fe, gt = fe + Fe;
      for (const Ft of Se) {
        if (Ft.endFrame < lt || Ft.startFrame > gt) continue;
        const Wt = fe < Ft.startFrame ? Ft.startFrame - fe : fe > Ft.endFrame ? fe - Ft.endFrame : 0, Ot = tt + Wt, _t = je.get(Ft.src);
        (_t === void 0 || Ot < _t) && je.set(Ft.src, Ot);
      }
    }, se = () => {
      const Se = performance.now(), fe = ne.getState(), Fe = Bn({
        isPlaying: fe.isPlaying,
        previewFrame: fe.previewFrame,
        isGizmoInteracting: te.current
      }), tt = p.getStats(), je = Pp({
        mode: Fe,
        currentPoolSourceCount: tt.sourceCount,
        currentPoolElementCount: tt.totalElements,
        maxSources: pg,
        minSources: xg,
        hardCapSources: Sc,
        hardCapElements: gg
      }), lt = /* @__PURE__ */ new Map(), gt = Math.max(12, Math.round(Re * mg)), Ft = Math.max(8, Math.round(Re * hg));
      ae(
        oi,
        fe.currentFrame,
        gt,
        100,
        lt
      ), Fe === "scrubbing" && fe.previewFrame !== null && ae(
        ii,
        fe.previewFrame,
        Ft,
        0,
        lt
      );
      const Wt = [...lt.entries()].sort((de, le) => de[1] - le[1]).slice(0, je).map(([de]) => de);
      for (const de of Wt)
        A.set(de, Se), p.preloadSource(de).catch(() => {
        });
      const Ot = new Set(Wt), _t = [...A.entries()].filter(
        ([de, le]) => !Ot.has(de) && Se - le <= Cc
      ).sort((de, le) => le[1] - de[1]);
      for (const [de] of _t) {
        if (Ot.size >= je) break;
        Ot.add(de);
      }
      let er = 0;
      for (const [de, le] of A.entries())
        Se - le > Cc && (A.delete(de), er += 1);
      const It = Math.max(0, A.size - Sc);
      if (It > 0) {
        const de = [...A.entries()].filter(([le]) => !Ot.has(le)).sort((le, Oe) => le[1] - Oe[1]);
        for (let le = 0; le < de.length && le < It; le++) {
          const [Oe] = de[le];
          A.delete(Oe) && (er += 1);
        }
      }
      p.pruneUnused(Ot);
      const Q = p.getStats();
      nt.current.sourceWarmTarget = je, nt.current.sourceWarmKeep = Ot.size, nt.current.sourceWarmEvictions += er, nt.current.sourcePoolSources = Q.sourceCount, nt.current.sourcePoolElements = Q.totalElements, nt.current.sourcePoolActiveClips = Q.activeClips;
    };
    se();
    const we = setInterval(se, bg), Ae = ne.subscribe((Se, fe) => {
      (Se.currentFrame !== fe.currentFrame || Se.previewFrame !== fe.previewFrame || Se.isPlaying !== fe.isPlaying) && (Se.isPlaying && !fe.isPlaying ? ($ !== null && (cancelAnimationFrame($), $ = null), se()) : ($ !== null && cancelAnimationFrame($), $ = requestAnimationFrame(() => {
        $ = null, se();
      })));
    });
    return () => {
      Ae(), clearInterval(we), $ !== null && cancelAnimationFrame($);
    };
  }, [mr, oi, ii, Re]);
  const Au = n.useMemo(() => ({
    fps: Re,
    width: t.width,
    height: t.height,
    tracks: si,
    transitions: Ht,
    backgroundColor: t.backgroundColor,
    keyframes: Kt
  }), [Re, t.width, t.height, si, Ht, t.backgroundColor, Kt]), sn = n.useMemo(() => {
    const p = Math.max(2, t.width), A = Math.max(2, t.height);
    return { width: p, height: A };
  }, [t.width, t.height]), Hr = n.useMemo(() => {
    const p = Math.max(1, Math.round(t.width)), A = Math.max(1, Math.round(t.height));
    return { width: Math.max(2, p), height: Math.max(2, A) };
  }, [t.width, t.height]), Es = n.useCallback((p) => {
    const A = Xe.getState(), $ = A.preview?.[p]?.transform;
    if ($) return $;
    if (A.activeGizmo?.itemId === p && A.previewTransform)
      return A.previewTransform;
  }, []), js = n.useCallback((p) => Xe.getState().preview?.[p]?.effects, []), Ns = n.useCallback((p) => {
    const A = Fr.getState();
    if (A.editingItemId === p && A.previewCornerPin)
      return A.previewCornerPin;
  }, []), As = n.useCallback((p) => {
    const A = ze.getState();
    if (A.editingItemId === p && A.previewVertices)
      return A.previewVertices;
  }, []), tr = n.useMemo(() => ai, [
    ai,
    Ea
  ]), li = n.useMemo(() => {
    const p = /* @__PURE__ */ new Map();
    for (const A of tr)
      for (const $ of A.items)
        p.set($.id, $);
    return p;
  }, [tr]), ui = n.useRef(li);
  ui.current = li;
  const di = n.useMemo(() => new Map(Kt.map((p) => [p.itemId, p])), [Kt]), fi = n.useRef(di);
  fi.current = di;
  const Ds = n.useCallback((p) => ui.current.get(p), []), Os = n.useCallback((p) => fi.current.get(p), []), Xr = n.useMemo(() => Kt, [
    Kt
  ]), Aa = n.useRef({
    tracks: tr,
    keyframes: Xr
  }), mi = n.useMemo(() => ({
    fps: Re,
    width: t.width,
    height: t.height,
    tracks: tr,
    transitions: Ht,
    backgroundColor: t.backgroundColor,
    keyframes: Xr
  }), [
    Re,
    t.width,
    t.height,
    tr,
    Ht,
    t.backgroundColor,
    Xr
  ]), Da = n.useRef(mi);
  Da.current = mi;
  const hi = n.useMemo(() => Ht.map((p) => `${p.id}:${p.type}:${p.leftClipId}:${p.rightClipId}:${p.trackId ?? ""}:${p.durationInFrames}:${p.presentation ?? ""}:${p.timing ?? ""}`).join("|"), [Ht]), Ur = n.useMemo(() => [
    Re,
    t.width,
    t.height,
    t.backgroundColor ?? "",
    Ea,
    hi
  ].join("::"), [
    Ea,
    Re,
    hi,
    t.backgroundColor,
    t.height,
    t.width
  ]), sr = n.useMemo(() => {
    const p = /* @__PURE__ */ new Map();
    for (const A of tr)
      for (const $ of A.items)
        p.set($.id, $);
    return pd(Ht, p);
  }, [tr, Ht]), pi = n.useMemo(
    () => tr.flatMap((p) => p.items),
    [tr]
  ), Nn = n.useMemo(
    () => Math.max(2, Math.round(Re * 0.25)),
    [Re]
  ), An = n.useMemo(
    () => Math.max(2, Math.round(Re * 0.1)),
    [Re]
  ), gi = n.useMemo(
    () => Math.max(Nn, Math.round(Re * 3)),
    [Re, Nn]
  ), xi = n.useMemo(
    () => Math.max(Nn, Math.round(Re * 1.5)),
    [Re, Nn]
  ), rs = 8, bi = n.useMemo(() => {
    const p = ($) => $.effects?.some((ae) => ae.enabled) || $.blendMode !== void 0 && $.blendMode !== "normal", A = /* @__PURE__ */ new Set();
    for (const $ of sr)
      (p($.leftClip) || p($.rightClip)) && A.add($.startFrame);
    return A;
  }, [sr]), vi = n.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    for (const A of sr) {
      const $ = A.leftClip.speed ?? 1, ae = A.rightClip.speed ?? 1;
      (Math.abs($ - 1) > 1e-3 || Math.abs(ae - 1) > 1e-3) && p.add(A.startFrame);
    }
    return p;
  }, [sr]), gn = n.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    for (const A of bi)
      p.add(A);
    for (const A of vi)
      p.add(A);
    return p;
  }, [bi, vi]), _s = n.useCallback((p) => p ? !gn.has(p.startFrame) : !0, [gn]), xn = n.useCallback((p) => p === null ? null : sr.find((A) => A.startFrame === p) ?? null, [sr]), Ls = n.useCallback((p) => {
    const A = p.leftClip.originId, $ = p.rightClip.originId;
    return A && $ && A === $ ? 0 : An;
  }, [An]), an = n.useCallback((p) => sr.find((A) => p >= A.startFrame && p < A.endFrame + Ls(A)) ?? null, [Ls, sr]), yi = n.useCallback((p) => sr.find((A) => p >= A.startFrame && p < A.endFrame) ?? null, [sr]), Du = n.useMemo(
    () => sr.map((p) => ({
      startFrame: p.startFrame,
      endFrame: p.endFrame,
      cooldownFrames: Ls(p)
    })),
    [Ls, sr]
  ), Ou = n.useCallback((p) => p === null ? !1 : an(p) !== null ? !0 : vu(pi, Ht.length, p), [pi, an, Ht.length]), hr = n.useCallback(() => {
    const p = fr.current;
    if (p) {
      const $ = performance.now();
      p.exitedAtMs = $, yr.current.lastPrepareMs = p.lastPrepareMs, yr.current.lastEntryMisses = p.entryMisses, yr.current.lastSessionDurationMs = Math.max(0, $ - p.startedAtMs), yr.current.lastReadyLeadMs = p.enteredAtMs !== null && p.firstPreparedAtMs !== null ? Math.max(0, p.enteredAtMs - p.firstPreparedAtMs) : 0, p.event.success({
        startFrame: p.startFrame,
        endFrame: p.endFrame,
        mode: p.mode,
        complex: p.complex,
        leftClipId: p.leftClipId,
        rightClipId: p.rightClipId,
        leftSpeed: p.leftSpeed,
        rightSpeed: p.rightSpeed,
        leftHasEffects: p.leftHasEffects,
        rightHasEffects: p.rightHasEffects,
        prepareMs: p.lastPrepareMs,
        preparedFrame: p.lastPreparedFrame,
        bufferedFramesPeak: p.bufferedFramesPeak,
        entryMisses: p.entryMisses,
        readyLeadMs: yr.current.lastReadyLeadMs,
        sessionDurationMs: yr.current.lastSessionDurationMs
      }), Nt("session_end", {
        opId: p.opId,
        mode: p.mode,
        complex: p.complex,
        startFrame: p.startFrame,
        endFrame: p.endFrame,
        prepareMs: p.lastPrepareMs,
        preparedFrame: p.lastPreparedFrame,
        bufferedFramesPeak: p.bufferedFramesPeak,
        entryMisses: p.entryMisses,
        readyLeadMs: yr.current.lastReadyLeadMs,
        sessionDurationMs: yr.current.lastSessionDurationMs
      }), fr.current = null;
    }
    const A = W.current;
    if (A) {
      const $ = ne.getState().currentFrame;
      for (const ae of [A.leftClip, A.rightClip]) {
        if (ae.type !== "video") continue;
        const se = q.current.get(ae.id);
        if (!se) continue;
        const we = $ - ae.from;
        if (we < 0) continue;
        const Ae = ae.sourceStart ?? ae.trimStart ?? 0, Se = ae.sourceFps ?? Re, fe = ae.speed ?? 1, Fe = Ae / Se + we * fe / Re, tt = se.duration || 1 / 0, je = Math.min(Math.max(0, Fe), tt - 0.05), lt = Math.abs(se.currentTime - je);
        if (lt > 0.15)
          try {
            se.currentTime = je;
          } catch {
          }
        else lt > 0.016 && (se.playbackRate = fe);
      }
    }
    W.current = null;
    for (const $ of q.current.values())
      $ && delete $.dataset.transitionHold;
    pe.current = new Map(q.current), q.current.clear(), k.current.clear(), B.current.clear(), U.current = null;
  }, [Re, Nt]), Sr = n.useCallback((p) => {
    if (!p)
      return hr(), null;
    const A = W.current;
    if (A?.transition.id === p.transition.id && A.startFrame === p.startFrame)
      return A;
    hr(), W.current = p;
    const $ = nf(), ae = jr.startEvent("preview_transition_session", $), se = p.leftClip.speed ?? 1, we = p.rightClip.speed ?? 1, Ae = !!p.leftClip.effects?.some((lt) => lt.enabled), Se = !!p.rightClip.effects?.some((lt) => lt.enabled), fe = _s(p) ? "dom" : "render", Fe = fe === "render";
    yr.current.sessionCount += 1, fr.current = {
      opId: $,
      event: ae,
      startedAtMs: performance.now(),
      startFrame: p.startFrame,
      endFrame: p.endFrame,
      mode: fe,
      complex: Fe,
      leftClipId: p.leftClip.id,
      rightClipId: p.rightClip.id,
      leftSpeed: se,
      rightSpeed: we,
      leftHasEffects: Ae,
      rightHasEffects: Se,
      prepareStartedAtMs: null,
      firstPreparedAtMs: null,
      enteredAtMs: null,
      exitedAtMs: null,
      lastPrepareMs: 0,
      lastPreparedFrame: -1,
      bufferedFramesPeak: 0,
      entryMisses: 0,
      lastEntryMissFrame: null
    }, Nt("session_start", {
      opId: $,
      mode: fe,
      complex: Fe,
      startFrame: p.startFrame,
      endFrame: p.endFrame,
      leftClipId: p.leftClip.id,
      rightClipId: p.rightClip.id,
      leftSpeed: se,
      rightSpeed: we,
      leftHasEffects: Ae,
      rightHasEffects: Se
    });
    const tt = ne.getState().isPlaying, je = /* @__PURE__ */ new Map();
    for (const lt of [p.leftClip, p.rightClip]) {
      const gt = Gs(lt.id);
      if (je.set(lt.id, gt), gt && tt) {
        gt.dataset.transitionHold = "1";
        const Ft = lt.speed ?? 1;
        if (gt.readyState >= 2)
          Ga(gt, Ft);
        else {
          const Wt = () => {
            gt.removeEventListener("canplay", Wt), gt.dataset.transitionHold === "1" && gt.paused && Ga(gt, Ft);
          };
          gt.addEventListener("canplay", Wt, { once: !0 });
        }
      }
    }
    return q.current = je, B.current.clear(), p;
  }, [hr, Nt, _s]), Bs = n.useCallback((p) => {
    const A = W.current;
    if (!(A?.leftClip.id === p || A?.rightClip.id === p)) {
      const Fe = Gs(p);
      if (Fe)
        return pe.current.delete(p), Fe;
      const tt = pe.current.get(p);
      return tt?.isConnected && tt.readyState >= 2 ? tt : (pe.current.delete(p), null);
    }
    const ae = ne.getState().isPlaying;
    if (!ae && !_s(A))
      return null;
    const se = A?.leftClip.id === p ? A.leftClip.speed ?? 1 : A?.rightClip.id === p ? A.rightClip.speed ?? 1 : 1, we = (Fe) => {
      ae && (Fe.dataset.transitionHold = "1", Ga(Fe, se));
    }, Ae = q.current.get(p) ?? null;
    if (Ae && Ae.isConnected && Ae.readyState >= 2 && Ae.videoWidth > 0)
      return we(Ae), Ae;
    const Se = q.current.get(p) ?? null;
    Se && Se !== Ae && delete Se.dataset.transitionHold;
    const fe = Gs(p);
    return fe && fe.readyState >= 2 && we(fe), q.current.set(p, fe), fe;
  }, [_s]), Hs = n.useCallback((p, A, $) => {
    const ae = sr.find((se) => !(p > se.startFrame || $?.complexOnly && !gn.has(se.startFrame)));
    return !ae || ae.startFrame - p > A ? null : ae.startFrame;
  }, [gn, sr]), Oa = n.useCallback((p) => Hs(p, gi), [Hs, gi]), wi = n.useCallback((p) => Hs(p, xi), [Hs, xi]), yt = ka, bn = n.useCallback((p, A) => !A.isPlaying && A.previewFrame === null && !yt && yi(p) !== null, [yt, yi]), Si = !yt && Op(Et, Kt), _u = !yt && en && V === "text";
  oe.current = _u, K.current = Si, n.useLayoutEffect(() => {
    const p = l.current;
    p && (p.width !== sn.width && (p.width = sn.width), p.height !== sn.height && (p.height = sn.height));
  }, [sn.width, sn.height]);
  const Vr = n.useCallback(() => {
    if (at(), b.current = null, h.current = null, S.current = null, y.current = !1, j.current = [], P.current.clear(), F.current = [], E.current.clear(), T.current.clear(), N.current = [], z.current.clear(), M.current = null, Y.current = null, G.current = null, X.current = null, D.current !== null && (clearTimeout(D.current), D.current = null), hr(), J.current = null, nt.current.fastScrubPrewarmedSources = 0, f.current = !1, m.current) {
      try {
        m.current.dispose();
      } catch (p) {
        jr.warn("Failed to dispose renderer:", p);
      }
      m.current = null;
    }
    if (C.current = null, x.current = null, v.current = null, R.current) {
      try {
        R.current.dispose();
      } catch {
      }
      R.current = null;
    }
    L.current = null, O.current = null, I.current = !1;
  }, [at, hr]), Lu = n.useCallback(async () => typeof OffscreenCanvas > "u" || Pr ? null : (R.current && L.current !== Ur && Vr(), R.current ? R.current : (O.current || (O.current = (async () => {
    try {
      const p = new OffscreenCanvas(Hr.width, Hr.height), A = p.getContext("2d");
      if (!A) return null;
      const $ = await ji(Da.current, p, A, {
        mode: "preview",
        getPreviewTransformOverride: Es,
        getPreviewEffectsOverride: js,
        getPreviewCornerPinOverride: Ns,
        getPreviewPathVerticesOverride: As,
        getLiveItemSnapshot: Ds,
        getLiveKeyframes: Os
      });
      return "warmGpuPipeline" in $ && $.warmGpuPipeline(), R.current = $, L.current = Ur, $;
    } catch {
      return null;
    } finally {
      O.current = null;
    }
  })()), O.current)), [
    Vr,
    Ur,
    Ds,
    Os,
    Ns,
    js,
    As,
    Es,
    Pr,
    Hr.width,
    Hr.height
  ]), Cr = n.useCallback(async () => typeof OffscreenCanvas > "u" || Pr ? null : (m.current && C.current !== Ur && Vr(), m.current ? m.current : (b.current || (b.current = (async () => {
    try {
      const p = new OffscreenCanvas(Hr.width, Hr.height), A = p.getContext("2d");
      if (!A) return null;
      const $ = await ji(Da.current, p, A, {
        mode: "preview",
        getPreviewTransformOverride: Es,
        getPreviewEffectsOverride: js,
        getPreviewCornerPinOverride: Ns,
        getPreviewPathVerticesOverride: As,
        getLiveItemSnapshot: Ds,
        getLiveKeyframes: Os
      }), ae = ne.getState(), se = Bn({
        isPlaying: ae.isPlaying,
        previewFrame: ae.previewFrame,
        isGizmoInteracting: te.current
      }), we = ra(se, {
        currentFrame: ae.currentFrame,
        previewFrame: ae.previewFrame
      }), Ae = $.preload({
        priorityFrame: we,
        priorityWindowFrames: Math.max(12, Math.round(Re * 4))
      }).catch((Se) => {
        jr.warn("Renderer preload failed:", Se);
      }).finally(() => {
        h.current === Ae && (h.current = null);
      });
      return h.current = Ae, await Promise.race([
        Ae,
        new Promise((Se) => {
          setTimeout(Se, Kp);
        })
      ]), x.current = p, v.current = A, M.current = null, m.current = $, C.current = Ur, "warmGpuPipeline" in $ && $.warmGpuPipeline(), $;
    } catch (p) {
      return jr.warn("Failed to initialize renderer, falling back to Player seeks:", p), m.current = null, x.current = null, v.current = null, M.current = null, null;
    } finally {
      b.current = null;
    }
  })()), b.current)), [
    Vr,
    Ur,
    Re,
    Ds,
    Os,
    Es,
    js,
    Ns,
    As,
    Pr,
    Hr.height,
    Hr.width
  ]), Dn = n.useCallback(async (p) => {
    const A = x.current;
    if (A && M.current === p)
      return A;
    const $ = await Cr(), ae = x.current;
    return !$ || !ae ? null : (M.current !== p && (await $.renderFrame(p), M.current = p), ae);
  }, [Cr]), ns = n.useCallback((p) => {
    const A = x.current;
    if (!A || !W.current) return;
    const $ = new OffscreenCanvas(A.width, A.height), ae = $.getContext("2d");
    if (!ae) return;
    ae.drawImage(A, 0, 0), B.current.set(p, $);
    const se = fr.current;
    se && (se.lastPreparedFrame = p, se.bufferedFramesPeak = Math.max(
      se.bufferedFramesPeak,
      B.current.size
    ), se.firstPreparedAtMs === null && (se.firstPreparedAtMs = performance.now(), Nt("prepare_ready", {
      opId: se.opId,
      preparedFrame: p,
      bufferedFrames: B.current.size
    })));
    const we = rs + An + 2;
    for (; B.current.size > we; ) {
      const Ae = B.current.keys().next().value;
      if (Ae === void 0) break;
      B.current.delete(Ae);
    }
  }, [An, rs, Nt]), _a = n.useCallback(async (p) => {
    if (p < 0) return !1;
    if (M.current === p)
      return !0;
    if (G.current === p && Y.current)
      return Y.current;
    if (y.current)
      return !1;
    G.current = p;
    const A = ne.getState().isPlaying && yt, $ = (async () => {
      A || (y.current = !0);
      try {
        Sr(xn(p));
        const ae = performance.now(), se = fr.current;
        se && (se.prepareStartedAtMs = ae, Nt("prepare_start", {
          opId: se.opId,
          targetFrame: p,
          mode: se.mode,
          complex: se.complex
        }));
        const we = await Cr();
        if (!we || !Ce.current) return !1;
        "setDomVideoElementProvider" in we && we.setDomVideoElementProvider(Bs);
        const Ae = gn.has(p), Se = yt || Ae;
        Se && (await we.renderFrame(p), ns(p));
        for (let Fe = 1; Fe < rs; Fe += 1) {
          const tt = p + Fe;
          yt && !Ae ? (await we.renderFrame(tt), ns(tt)) : await we.prewarmFrame(tt);
        }
        if (Se || (await we.renderFrame(p), ns(p)), !Ce.current) return !1;
        M.current = p;
        const fe = performance.now();
        return se && (se.lastPrepareMs = Math.max(0, fe - ae), Nt("prepare_done", {
          opId: se.opId,
          targetFrame: p,
          prepareMs: se.lastPrepareMs,
          preparedFrame: se.lastPreparedFrame,
          bufferedFrames: B.current.size
        })), !0;
      } catch (ae) {
        return jr.debug("Hidden transition prerender failed:", p, ae), !1;
      } finally {
        A || (y.current = !1), G.current === p && (G.current = null, Y.current = null), S.current !== null && ue.current();
      }
    })();
    return Y.current = $, $;
  }, [
    Cr,
    Bs,
    xn,
    Sr,
    ns,
    yt,
    gn,
    rs,
    Nt
  ]);
  n.useEffect(() => {
    Vr();
  }, [Vr, Ur, Hr.height, Hr.width]), n.useEffect(() => {
    const p = Aa.current;
    if (p.tracks !== tr && wu(p.keyframes, Xr) && jg(p.tracks, tr)) {
      Aa.current = {
        tracks: tr,
        keyframes: Xr
      };
      return;
    }
    Aa.current = {
      tracks: tr,
      keyframes: Xr
    };
    const A = Ng({
      previousTracks: p.tracks,
      nextTracks: tr,
      previousKeyframes: p.keyframes,
      nextKeyframes: Xr
    }), ae = _g(
      p.tracks,
      tr,
      p.keyframes,
      Xr
    ).ok;
    if (A.length === 0)
      return;
    const se = m.current, we = R.current, Ae = C.current === Ur, Se = L.current === Ur;
    if (!Ae && !Se)
      return;
    const fe = { ranges: A };
    se && Ae && se.invalidateFrameCache(fe), we && Se && we.invalidateFrameCache(fe);
    const Fe = ne.getState(), tt = Fe.previewFrame ?? Fe.currentFrame, je = Wa(tt, A);
    M.current !== null && Wa(M.current, A) && (M.current = null);
    let lt = !1;
    for (const gt of [...B.current.keys()])
      Wa(gt, A) && (B.current.delete(gt), lt = !0);
    lt && (Or.current = null), !ae && se && Ae && je && (yt || Fe.previewFrame !== null || et.current || qe.current) && (S.current = tt, queueMicrotask(() => {
      ue.current();
    }));
  }, [
    Xr,
    tr,
    Ur,
    yt
  ]);
  const Ci = n.useCallback(async (p) => {
    if (re.current)
      return re.current;
    const A = (async () => {
      try {
        const $ = ne.getState(), ae = $.previewFrame ?? $.currentFrame, se = await Dn(ae);
        if (!se) return null;
        const we = p?.format ?? "image/jpeg", Ae = p?.quality ?? 0.9, Se = Math.max(2, Math.round(p?.width ?? se.width)), fe = Math.max(2, Math.round(p?.height ?? se.height));
        if (!(!p?.fullResolution && (Se !== se.width || fe !== se.height))) {
          const gt = await se.convertToBlob({
            type: we,
            quality: Ae
          });
          return Rc(gt);
        }
        const tt = document.createElement("canvas");
        tt.width = Se, tt.height = fe;
        const je = tt.getContext("2d");
        if (!je) return null;
        je.drawImage(se, 0, 0, Se, fe);
        const lt = await new Promise((gt) => {
          tt.toBlob(gt, we, Ae);
        });
        return lt ? Rc(lt) : null;
      } catch ($) {
        return jr.warn("Failed to capture frame:", $), null;
      } finally {
        re.current = null;
      }
    })();
    return re.current = A, A;
  }, [Dn]), ki = n.useCallback(async (p) => {
    if (me.current)
      return me.current;
    const A = (async () => {
      try {
        const $ = ne.getState(), ae = $.previewFrame ?? $.currentFrame, se = await Dn(ae);
        if (!se) return null;
        const we = Math.max(2, Math.round(p?.width ?? se.width)), Ae = Math.max(2, Math.round(p?.height ?? se.height));
        if (!(!p?.fullResolution && (we !== se.width || Ae !== se.height))) {
          const tt = v.current ?? se.getContext("2d", { willReadFrequently: !0 });
          return tt ? tt.getImageData(0, 0, se.width, se.height) : null;
        }
        let fe = xe.current;
        fe || (fe = document.createElement("canvas"), xe.current = fe), (fe.width !== we || fe.height !== Ae) && (fe.width = we, fe.height = Ae);
        const Fe = fe.getContext("2d", { willReadFrequently: !0 });
        return Fe ? (Fe.clearRect(0, 0, we, Ae), Fe.drawImage(se, 0, 0, we, Ae), Fe.getImageData(0, 0, we, Ae)) : null;
      } catch ($) {
        return jr.warn("Failed to capture raw frame:", $), null;
      } finally {
        me.current = null;
      }
    })();
    return me.current = A, A;
  }, [Dn]), Mi = n.useCallback(async () => {
    if (J.current)
      return J.current;
    const p = (async () => {
      try {
        const A = ne.getState(), $ = A.previewFrame ?? A.currentFrame;
        return await Dn($);
      } catch (A) {
        return jr.warn("Failed to capture canvas source:", A), null;
      } finally {
        J.current = null;
      }
    })();
    return J.current = p, p;
  }, [Dn]), La = ne((p) => p.setCaptureCanvasSource);
  n.useEffect(() => (Lr(Ci), pn?.(ki), La?.(Mi), () => {
    Lr(null), pn?.(null), La?.(null), qr(null), re.current = null, me.current = null, xe.current = null;
  }), [Ci, ki, Mi, Lr, pn, La, qr]), n.useEffect(() => {
    (async () => {
      try {
        const { EffectsPipeline: p } = await import("./feature-editing-core-Dd2wfVmB.js").then(($) => $.eV), A = await p.requestCachedDevice();
        if (A) {
          const $ = await p.create();
          if ($)
            try {
              const { TransitionPipeline: ae } = await import("./feature-editing-core-Dd2wfVmB.js").then((se) => se.eW);
              ae.create(A)?.destroy();
            } finally {
              $.destroy();
            }
        }
      } catch {
      }
    })();
  }, []), n.useEffect(() => {
    if (Pr || m.current || b.current) return;
    let p = !1;
    const A = () => {
      p || m.current || b.current || Cr();
    };
    let $ = null, ae = null;
    return typeof window < "u" && "requestIdleCallback" in window ? $ = window.requestIdleCallback(() => A(), { timeout: 400 }) : ae = setTimeout(A, 120), () => {
      p = !0, $ !== null && typeof window < "u" && "cancelIdleCallback" in window && window.cancelIdleCallback($), ae !== null && clearTimeout(ae);
    };
  }, [Cr, Pr]), n.useEffect(() => {
    Ce.current = !0;
    const p = (Q, de) => {
      const le = l.current;
      if (!le) return;
      const Oe = le.getContext("2d");
      Oe && (Oe.clearRect(0, 0, le.width, le.height), Oe.drawImage(Q, 0, 0, le.width, le.height), qr(de));
    }, A = (Q) => {
      const de = x.current;
      de && p(de, Q);
    }, $ = (Q) => wp(
      Du,
      Q,
      Nn,
      An
    ), ae = (Q) => {
      const de = B.current.get(Q);
      if (de) {
        const Oe = fr.current;
        return Oe && Oe.enteredAtMs === null && (Oe.enteredAtMs = performance.now(), Nt("entry_show", {
          opId: Oe.opId,
          frame: Q,
          via: "buffer",
          bufferedFrames: B.current.size
        })), p(de, Q), _r(), !0;
      }
      if (M.current !== Q)
        return !1;
      const le = fr.current;
      return le && le.enteredAtMs === null && (le.enteredAtMs = performance.now(), Nt("entry_show", {
        opId: le.opId,
        frame: Q,
        via: "offscreen",
        bufferedFrames: B.current.size
      })), A(Q), _r(), !0;
    }, se = (Q) => {
      if (Q === null) {
        X.current = null, D.current !== null && (clearTimeout(D.current), D.current = null);
        return;
      }
      X.current = Q, y.current || _a(Q);
    }, we = () => {
      D.current !== null && (clearTimeout(D.current), D.current = null);
    }, Ae = () => {
      const Q = X.current;
      if (Q === null) {
        we();
        return;
      }
      D.current === null && (D.current = window.setTimeout(() => {
        if (D.current = null, !Ce.current) return;
        const de = ne.getState();
        if (!de.isPlaying) return;
        const le = $(de.currentFrame);
        if (!le.shouldPrewarm || le.nextTransitionStartFrame !== Q)
          return;
        if (y.current) {
          Ae();
          return;
        }
        const Oe = fr.current;
        Oe && Nt("prepare_opportunistic", {
          opId: Oe.opId,
          targetFrame: Q
        }), X.current = null, _a(Q);
      }, 0));
    }, Se = async () => {
      if (y.current) return;
      y.current = !0;
      const Q = w.current, de = () => w.current !== Q;
      try {
        const le = (dt) => {
          if (!(dt < 0) && !P.current.has(dt) && !E.current.has(dt))
            for (P.current.add(dt), j.current.push(dt); j.current.length > ig; ) {
              const Mt = j.current.shift();
              Mt !== void 0 && P.current.delete(Mt);
            }
        }, Oe = (dt) => {
          if (!E.current.has(dt) && (E.current.add(dt), F.current.push(dt), F.current.length > Yp)) {
            const Mt = F.current.shift();
            Mt !== void 0 && E.current.delete(Mt);
          }
        }, ut = (dt) => {
          if (Fa.length === 0) return;
          const Mt = Math.max(
            4,
            Math.round(Re * qp)
          ), Ct = dt - Mt, Rt = dt + Mt, xt = ye.current, wt = [], ve = [];
          for (const ce of Fa)
            if (!(ce < Ct)) {
              if (ce > Rt) break;
              ve.push(ce), !(xt > 0 && ce < dt - 1) && (xt < 0 && ce > dt + 1 || wt.push(ce));
            }
          const Le = wt.length > 0 ? wt : ve;
          if (Le.length === 0) return;
          const He = [...Le].sort((ce, _e) => Math.abs(ce - dt) - Math.abs(_e - dt)).slice(0, Jp);
          for (const ce of He)
            le(Math.max(0, ce - 1)), le(ce), le(ce + 1);
        }, jt = (dt) => {
          if (Ta.length === 0) return;
          const Mt = aa(), Ct = z.current, Rt = (ge, Je) => {
            const bt = Ct.get(ge);
            if (bt !== void 0 && Math.abs(Je - bt) < tg)
              return !1;
            Ct.set(ge, Je);
            const St = T.current, Qt = N.current, qt = Qt.indexOf(ge);
            for (qt >= 0 ? Qt.splice(qt, 1) : St.add(ge), Qt.push(ge); Qt.length > Xp; ) {
              const pr = Qt.shift();
              if (pr === void 0) break;
              St.delete(pr) && (Ct.delete(pr), nt.current.fastScrubPrewarmSourceEvictions += 1);
            }
            return nt.current.fastScrubPrewarmedSources = St.size, !0;
          }, xt = Math.max(
            8,
            Math.round(Re * Zp)
          ), wt = dt - xt, ve = dt + xt, Le = ye.current, He = [], ce = [];
          for (const ge of Ta)
            if (!(ge.frame < wt)) {
              if (ge.frame > ve) break;
              ce.push(ge), !(Le > 0 && ge.frame < dt - 1) && (Le < 0 && ge.frame > dt + 1 || He.push(ge));
            }
          const _e = He.length > 0 ? He : ce;
          if (_e.length === 0) return;
          const mt = [..._e].sort((ge, Je) => Math.abs(ge.frame - dt) - Math.abs(Je.frame - dt)).slice(0, Qp);
          let We = eg;
          for (const ge of mt)
            for (const Je of ge.srcs) {
              if (We <= 0) return;
              const bt = T.current.has(Je);
              Rt(Je, dt) && (We -= 1, bt || Mt.preloadSource(Je).catch(() => {
              }));
            }
        }, At = (dt) => {
          const Mt = yp(ye.current, {
            forwardSteps: ng,
            backwardSteps: sg,
            oppositeSteps: ag,
            neutralRadius: og
          });
          for (const Ct of Mt)
            le(dt + Ct);
        };
        let Dt = 0;
        for (; Ce.current; ) {
          if (Ze(ne.getState().previewFrame)) {
            st(), rt(), S.current = null;
            break;
          }
          if (Be.current) {
            S.current = null, j.current = [], P.current.clear(), st(), rt();
            break;
          }
          const dt = S.current, Mt = dt !== null, Ct = Mt ? dt : j.current.shift() ?? null;
          if (Ct === null) break;
          if (Mt)
            S.current = null, Dt = 0;
          else {
            if (P.current.delete(Ct), S.current !== null || Me.current)
              continue;
            if (ne.getState().isPlaying || Dt > 0 && performance.now() - Dt > yc)
              break;
          }
          const Rt = await Cr();
          if (!Rt || !Ce.current) {
            st();
            break;
          }
          if (!Mt && de()) break;
          if ("setDomVideoElementProvider" in Rt)
            if (ne.getState().isPlaying) {
              const wt = an(Ct);
              if (wt) {
                const ve = W.current, Le = !ve || ve.transition.id !== wt.transition.id;
                Sr(wt), U.current && (await U.current, U.current = null), Le && "prewarmItems" in Rt && await Rt.prewarmItems(
                  [wt.leftClip.id, wt.rightClip.id],
                  Ct
                );
              }
              Rt.setDomVideoElementProvider(Bs);
            } else
              Rt.setDomVideoElementProvider(void 0);
          if (Mt) {
            const xt = performance.now();
            await Rt.renderFrame(Ct);
            const wt = performance.now() - xt;
            M.current = Ct;
          } else {
            const xt = [Ct];
            for (; j.current.length > 0 && !(S.current !== null || Me.current || ne.getState().isPlaying || Dt > 0 && performance.now() - Dt > yc); ) {
              const wt = j.current.shift();
              P.current.delete(wt), xt.push(wt);
            }
            await Rt.prewarmFrames(xt);
            for (const wt of xt)
              Oe(wt);
          }
          if (!Ce.current || de()) break;
          if (Mt) {
            const xt = ne.getState(), wt = $(Ct), ve = xt.isPlaying && xt.previewFrame === null && (wt.hasActiveTransition || wt.shouldHoldOverlay) && !yt;
            if (Be.current) {
              st(), rt();
              continue;
            }
            const Le = Ct === xt.currentFrame && bn(Ct, xt);
            if (!ve && !yt && !Le && !vp({
              isGizmoInteracting: te.current,
              isPlaying: xt.isPlaying,
              currentFrame: xt.currentFrame,
              previewFrame: xt.previewFrame,
              renderedFrame: Ct
            })) {
              nt.current.staleScrubOverlayDrops += 1, st(), rt();
              continue;
            }
            A(Ct), ve ? _r() : Rr(), !ve && !Me.current && (At(Ct), ut(Ct), jt(Ct)), X.current !== null && Ae(), Dt = performance.now();
          } else
            Oe(Ct);
        }
      } catch (le) {
        jr.warn("Render failed, using Player seek fallback:", le), st(), rt(), Vr();
      } finally {
        w.current === Q && (y.current = !1, X.current !== null && Ae(), S.current !== null && Se());
      }
    };
    ue.current = () => {
      Se();
    };
    let fe = null, Fe = -1, tt = !1;
    const je = /* @__PURE__ */ new Set();
    let lt = -1;
    const gt = () => {
      if (fe = null, !Ce.current) return;
      const Q = ne.getState();
      if (!Q.isPlaying || !yt) return;
      const de = Q.currentFrame;
      if (de !== Fe) {
        Fe = de;
        const le = B.current.get(de);
        if (le) {
          p(le, de), M.current = de, lt = de;
          const Oe = de + 1;
          !B.current.has(Oe) && !y.current && (S.current = Oe, Se());
        } else
          S.current = de, y.current || Se();
      } else lt !== de && M.current === de && (A(de), lt = de);
      fe = requestAnimationFrame(gt);
    }, Ft = Math.round(Re * 3), Wt = ne.subscribe((Q, de) => {
      if (Q.currentFrame !== de.currentFrame && Math.abs(Q.currentFrame - de.currentFrame) >= Ft && !Q.isPlaying) {
        const ve = Q.currentFrame, Le = /* @__PURE__ */ new Map();
        for (const He of Et)
          for (const ce of He.items) {
            if (ce.type !== "video" || !("src" in ce) || !ce.src || ve < ce.from || ve >= ce.from + ce.durationInFrames || !ce.sourceFps) continue;
            const _e = ve - ce.from, mt = ce.sourceStart ?? ce.trimStart ?? 0, We = ce.speed ?? 1, ge = mt / ce.sourceFps + _e / Re * We, Je = Le.get(ce.src);
            Je ? Je.push(ge) : Le.set(ce.src, [ge]);
          }
        for (const [He, ce] of Le)
          za(He, ce);
      }
      if (Q.isPlaying && yt && !de.isPlaying) {
        if (fe === null) {
          Fe = -1, w.current += 1, y.current = !1, j.current = [], P.current.clear();
          const ve = Q.currentFrame, Le = [];
          for (const We of Et)
            for (const ge of We.items) {
              if (ge.type !== "video" || ve < ge.from || ve >= ge.from + ge.durationInFrames) continue;
              const Je = ge.speed ?? 1;
              if (Math.abs(Je - 1) < 0.01) continue;
              ve - ge.from <= 2 && Le.push(ge.id);
            }
          for (const We of Et)
            for (const ge of We.items) {
              if (ge.type !== "video" || !("src" in ge) || !ge.src) continue;
              const Je = ge.speed ?? 1;
              if (Math.abs(Je - 1) < 0.01) continue;
              const bt = ge.from + ge.durationInFrames, St = Math.round(Re * 3);
              if (ge.from <= ve + St && bt > ve) {
                const Qt = Math.min(ve + St, bt - 1), qt = Math.max(0, Qt - ge.from), pr = ge.sourceStart ?? ge.trimStart ?? 0, Us = ge.sourceFps ?? Re, Ba = pr / Us + qt / Re * Je;
                Ni(ge.src, Ba);
              }
            }
          const He = [], ce = Math.round(Re * 3);
          for (const We of Et)
            for (const ge of We.items) {
              if (ge.type !== "video" || !("src" in ge) || !ge.src || !ge.sourceFps) continue;
              const Je = ge.speed ?? 1;
              if (Math.abs(Je - 1) >= 0.01 || ge.from + ge.durationInFrames <= ve || ge.from > ve + ce) continue;
              const St = Gs(ge.id);
              if (!St) continue;
              const qt = Math.max(ve, ge.from) - ge.from, Us = (ge.sourceStart ?? ge.trimStart ?? 0) / ge.sourceFps + qt / Re * Je;
              Math.abs(St.currentTime - Us) < 0.05 || He.push(new Promise((Ba) => {
                let Ii = !1;
                const Vs = () => {
                  Ii || (Ii = !0, St.removeEventListener("seeked", Vs), clearTimeout(Vu), Ba());
                };
                St.addEventListener("seeked", Vs, { once: !0 });
                const Vu = setTimeout(Vs, 200);
                try {
                  St.currentTime = Us;
                } catch {
                  Vs();
                }
              }));
            }
          const _e = Le.length > 0, mt = He.length > 0;
          _e || mt ? (tt = !0, (async () => {
            const We = [];
            _e && We.push((async () => {
              const ge = await Cr();
              if (ge && "prewarmItems" in ge) {
                const Je = Le.filter(
                  (bt) => !je.has(bt)
                );
                Je.length > 0 && await ge.prewarmItems(Je, ve);
              }
            })()), mt && We.push(Promise.all(He)), await Promise.all(We), je.clear(), tt = !1, fe === null && ne.getState().isPlaying && (fe = requestAnimationFrame(gt));
          })()) : fe = requestAnimationFrame(gt);
        }
      } else !Q.isPlaying && fe !== null && (cancelAnimationFrame(fe), fe = null, wr.current = null, hr());
      if (Q.isPlaying && yt) {
        const ve = an(Q.currentFrame);
        if (ve && !W.current) {
          Sr(ve), wr.current = ve.startFrame;
          const ce = m.current;
          ce && "prewarmItems" in ce && ce.prewarmItems(
            [ve.leftClip.id, ve.rightClip.id],
            Q.currentFrame
          );
          {
            const _e = [ve.leftClip, ve.rightClip], mt = /* @__PURE__ */ new Map();
            for (const We of _e)
              if (We.type === "video" && "src" in We && We.src && We.sourceFps) {
                const ge = Q.currentFrame - We.from, Je = We.sourceStart ?? We.trimStart ?? 0, bt = We.speed ?? 1, St = Je / We.sourceFps + ge / Re * bt, Qt = mt.get(We.src);
                Qt ? Qt.push(St) : mt.set(We.src, [St]);
              }
            for (const [We, ge] of mt)
              za(We, ge);
          }
        }
        const Le = W.current;
        if (Le && q.current.size > 0)
          for (const ce of [Le.leftClip, Le.rightClip]) {
            if (ce.type !== "video") continue;
            const _e = q.current.get(ce.id);
            if (!_e || _e.dataset.transitionHold !== "1") continue;
            const mt = Q.currentFrame - ce.from;
            if (mt < 0) continue;
            const We = ce.sourceStart ?? ce.trimStart ?? 0, ge = ce.sourceFps ?? Re, Je = ce.speed ?? 1, bt = We / ge + mt * Je / Re, St = k.current.get(ce.id);
            if (St && Math.abs(_e.currentTime - St.ct) < 1e-3) {
              const qt = St.count + 1;
              if (k.current.set(ce.id, { ct: St.ct, count: qt }), qt >= 3) {
                try {
                  _e.currentTime = bt;
                } catch {
                }
                _e.playbackRate = Je, _e.play().catch(() => {
                }), k.current.set(ce.id, { ct: bt, count: 0 });
                continue;
              }
            } else
              k.current.set(ce.id, { ct: _e.currentTime, count: 0 });
            const Qt = _e.currentTime - bt;
            if (Math.abs(Qt) > 0.2) {
              try {
                _e.currentTime = bt;
              } catch {
              }
              _e.playbackRate = Je;
            } else if (Math.abs(Qt) > 0.016) {
              const qt = -Qt * 0.25, pr = Math.max(0.03, Je * 0.06);
              _e.playbackRate = Math.max(
                Je - pr,
                Math.min(Je + pr, Je + qt)
              );
            }
          }
        else k.current.size > 0 && k.current.clear();
        const He = !ve && !W.current ? wi(Q.currentFrame) : null;
        if (He !== null) {
          const ce = xn(He);
          if (ce && Sr(ce), wr.current !== He) {
            if (wr.current = He, ce) {
              const _e = m.current;
              _e && "prewarmItems" in _e && (U.current = _e.prewarmItems(
                [ce.leftClip.id, ce.rightClip.id],
                ce.startFrame
              ));
              {
                const mt = Math.min(8, ce.endFrame - ce.startFrame), We = /* @__PURE__ */ new Map();
                for (const ge of [ce.leftClip, ce.rightClip]) {
                  if (ge.type !== "video" || !("src" in ge) || !ge.src || !ge.sourceFps) continue;
                  const Je = [];
                  for (let St = 0; St < mt; St++) {
                    const Qt = ce.startFrame + St - ge.from, qt = ge.sourceStart ?? ge.trimStart ?? 0, pr = ge.speed ?? 1;
                    Je.push(qt / ge.sourceFps + Qt / Re * pr);
                  }
                  const bt = We.get(ge.src);
                  bt ? bt.push(...Je) : We.set(ge.src, Je);
                }
                for (const [ge, Je] of We)
                  za(ge, Je);
              }
            }
            Nt("playing_prearm", {
              targetFrame: He
            });
          }
        } else if (!ve) {
          wr.current = null;
          const ce = W.current;
          ce && Q.currentFrame >= ce.endFrame && hr();
        }
      }
      if (!Q.isPlaying && Q.previewFrame === null && de.currentFrame !== Q.currentFrame) {
        const ve = [];
        let Le = Q.currentFrame;
        const He = Math.round(Re * 3);
        for (const ce of Et)
          for (const _e of ce.items) {
            if (_e.type !== "video") continue;
            const mt = _e.speed ?? 1;
            if (Math.abs(mt - 1) < 0.01) continue;
            const We = _e.from + _e.durationInFrames;
            _e.from > Q.currentFrame && _e.from <= Q.currentFrame + He && (ve.push(_e.id), Le = Math.max(Le, Math.min(Q.currentFrame + He, We - 1)));
          }
        if (ve.length > 0) {
          const ce = (() => {
            for (const We of Et) {
              if (!We.items.find((St) => ve.includes(St.id))) continue;
              const Je = We.order ?? 0;
              let bt = Q.currentFrame;
              for (const St of Et)
                if (!((St.order ?? 0) >= Je))
                  for (const qt of St.items) {
                    if (qt.type === "audio" || qt.type === "adjustment") continue;
                    const pr = qt.from + qt.durationInFrames;
                    qt.from <= Q.currentFrame + He && pr > Q.currentFrame && (bt = Math.max(bt, pr));
                  }
              return bt;
            }
            return Q.currentFrame;
          })();
          for (const We of ve) je.add(We);
          const _e = Math.max(Q.currentFrame, ce - 1), mt = m.current;
          mt && "prewarmItems" in mt && mt.prewarmItems(ve, _e);
        }
      }
      if (!Q.isPlaying && Q.previewFrame === null) {
        const ve = an(Q.currentFrame), Le = ve?.startFrame ?? Oa(Q.currentFrame);
        if (Le !== null) {
          if (yt) {
            const He = ve ?? xn(Le);
            He && (Sr(He), Or.current !== Le && (async () => {
              const ce = await Cr();
              ce && "prewarmItems" in ce && await ce.prewarmItems(
                [He.leftClip.id, He.rightClip.id],
                He.startFrame
              );
              for (const _e of [He.leftClip, He.rightClip])
                if (_e.type === "video" && "src" in _e && _e.src && _e.sourceFps) {
                  const mt = He.startFrame - _e.from, We = _e.sourceStart ?? _e.trimStart ?? 0, ge = _e.speed ?? 1, Je = We / _e.sourceFps + mt / Re * ge;
                  Ni(_e.src, Je);
                }
              if (!ne.getState().isPlaying && ce) {
                const _e = Math.min(rs, He.endFrame - He.startFrame);
                for (let mt = 0; mt < _e && !ne.getState().isPlaying; mt++) {
                  const We = He.startFrame + mt;
                  try {
                    if (await ce.renderFrame(We), "getCanvas" in ce) {
                      const ge = ce.getCanvas(), Je = new OffscreenCanvas(ge.width, ge.height), bt = Je.getContext("2d");
                      bt && (bt.drawImage(ge, 0, 0), B.current.set(We, Je));
                    }
                  } catch {
                    break;
                  }
                }
              }
            })());
          } else ve ? (Sr(ve), S.current = Q.currentFrame, Se()) : se(Le);
          Or.current !== Le && (Or.current = Le, Nt("paused_prearm", {
            targetFrame: Le
          }));
        } else
          (de.currentFrame !== Q.currentFrame || de.isPlaying !== Q.isPlaying) && (Or.current = null, se(null), hr());
      }
      if (Ze(Q.previewFrame)) {
        S.current = null, ye.current = 0, Me.current = !1, Be.current = !1, De.current = 0, Qe.current = 0, Ee.current = null, j.current = [], P.current.clear(), st(), rt();
        return;
      }
      if (Q.isPlaying && !yt) {
        S.current = null, ye.current = 0, Me.current = !1, Be.current = !1, De.current = 0, Qe.current = 0, Ee.current = null, j.current = [], P.current.clear();
        const ve = $(Q.currentFrame);
        if (ve.shouldPrewarm && (Cr(), !ve.hasActiveTransition && ve.nextTransitionStartFrame !== null && se(ve.nextTransitionStartFrame)), !(ve.hasActiveTransition || ve.shouldHoldOverlay)) {
          ve.shouldPrewarm || hr(), st(), rt();
          return;
        }
        if (at(), et.current && st(), ae(Q.currentFrame))
          return;
        if (ve.hasActiveTransition) {
          const Le = fr.current;
          Le && Le.lastEntryMissFrame !== Q.currentFrame && (Le.entryMisses += 1, Le.lastEntryMissFrame = Q.currentFrame, Nt("entry_miss", {
            opId: Le.opId,
            frame: Q.currentFrame,
            bufferedFrames: B.current.size
          }));
        }
        S.current = Q.currentFrame, Se();
        return;
      }
      const le = bn(Q.currentFrame, Q), Oe = yt || le, ut = bn(de.currentFrame, de), jt = yt || ut, At = Q.previewFrame ?? (Oe ? Q.currentFrame : null), Dt = de.previewFrame ?? (jt ? de.currentFrame : null), dt = Q.isPlaying !== de.isPlaying, Mt = Q.previewFrame !== null && Q.currentFrame === Q.previewFrame && Q.currentFrameEpoch === Q.previewFrameEpoch;
      if (At === Dt && !dt) return;
      if (Q.previewFrame !== null && de.previewFrame !== null) {
        const ve = Q.previewFrame - de.previewFrame;
        ye.current = ve > 0 ? 1 : ve < 0 ? -1 : 0;
        const Le = Math.abs(ve);
        nt.current.scrubUpdates += 1, Le > 1 && (nt.current.scrubDroppedFrames += Le - 1);
      } else if (At !== null && Dt !== null) {
        const ve = At - Dt;
        ye.current = ve > 0 ? 1 : ve < 0 ? -1 : 0;
      } else At !== null && (ye.current = 0);
      At !== null && m.current && "getScrubbingCache" in m.current && m.current.getScrubbingCache()?.setEvictionHint(
        At,
        ye.current
      );
      const Ct = ye.current < 0, Rt = Ou(
        At
      ), xt = !yt && rg && ye.current < 0 && !Mt && !Rt;
      if (Ct !== Me.current && (Me.current = Ct, j.current = [], P.current.clear()), xt !== Be.current && (Be.current = xt, S.current = null, j.current = [], P.current.clear(), xt && (st(), rt())), Be.current && At !== null) {
        st(), rt();
        return;
      }
      if (At === null) {
        S.current = null, ye.current = 0, Me.current = !1, Be.current = !1, De.current = 0, Qe.current = 0, Ee.current = null, j.current = [], P.current.clear(), at(), f.current = !1;
        try {
          const ve = o.current?.getCurrentFrame(), Le = Number.isFinite(ve) ? Math.round(ve) : null;
          if (Le === Q.currentFrame) {
            o.current?.seekTo(Q.currentFrame), st(), rt();
            return;
          }
          et.current && Le !== Q.currentFrame && vt(Q.currentFrame), Le !== Q.currentFrame && ot(Q.currentFrame), o.current?.seekTo(Q.currentFrame), it() || (ee.current !== null ? ft() : (st(), rt()));
        } catch {
          st(), rt();
        }
        return;
      }
      if (at(), S.current === At)
        return;
      let wt = At;
      if (ye.current < 0 && !Mt && !Rt) {
        const ve = performance.now(), Le = Math.floor(
          At / vc
        ) * vc, He = Ee.current, ce = ve - Qe.current < cg, _e = He === null ? Number.POSITIVE_INFINITY : Math.abs(Le - He);
        if (ce && _e < lg)
          return;
        Qe.current = ve, Ee.current = Le, wt = Le;
      } else
        Qe.current = 0, Ee.current = null;
      j.current = [], P.current.clear(), S.current = wt, fe === null && !tt && Se();
    }), Ot = Xe.subscribe((Q, de) => {
      if (Ze(ne.getState().previewFrame) || !yt) return;
      const le = Q.preview !== de.preview, Oe = Q.previewTransform !== de.previewTransform;
      if (!le && !(Oe && Q.activeGizmo)) return;
      const jt = ne.getState().currentFrame;
      (le || Oe) && m.current && m.current.invalidateFrameCache({ frames: [jt] }), S.current = jt, Se();
    }), _t = Fr.subscribe((Q, de) => {
      if (Q.previewCornerPin === de.previewCornerPin) return;
      const le = ne.getState();
      if (!yt && !bn(le.currentFrame, le)) return;
      const Oe = le.currentFrame;
      m.current && m.current.invalidateFrameCache({ frames: [Oe] }), S.current = Oe, Se();
    }), er = ze.subscribe((Q, de) => {
      const le = Q.previewVertices !== de.previewVertices, Oe = Q.editingItemId !== de.editingItemId;
      if (!le && !Oe) return;
      const ut = ne.getState();
      if (Ze(ut.previewFrame)) return;
      const jt = ut.previewFrame ?? ut.currentFrame;
      !yt && ut.previewFrame === null && !bn(jt, ut) || (m.current && m.current.invalidateFrameCache({ frames: [jt] }), S.current = jt, Se());
    }), It = ne.getState();
    if (It.isPlaying && yt) {
      const Q = an(It.currentFrame);
      if (Q)
        Sr(Q), wr.current = Q.startFrame;
      else {
        const de = wi(It.currentFrame);
        if (de !== null) {
          wr.current = de;
          const le = xn(de);
          le && Sr(le);
        }
      }
    }
    if (!It.isPlaying && It.previewFrame === null) {
      const Q = an(It.currentFrame), de = Q?.startFrame ?? Oa(It.currentFrame);
      if (de !== null) {
        if (Or.current = de, yt) {
          const le = xn(de);
          le && (Sr(le), (async () => {
            const Oe = await Cr();
            if (Oe && "prewarmItems" in Oe && await Oe.prewarmItems(
              [le.leftClip.id, le.rightClip.id],
              le.startFrame
            ), !I.current) {
              I.current = !0;
              try {
                const ut = await Lu();
                ut && !ne.getState().isPlaying && (await ut.renderFrame(le.startFrame), ns(le.startFrame), Nt("bg_prerender", { frame: le.startFrame }));
              } catch (ut) {
                jr.debug("Background transition pre-render failed:", ut);
              } finally {
                I.current = !1;
              }
            }
          })());
        } else Q ? Sr(Q) : se(de);
        Nt("paused_prearm", {
          targetFrame: de
        });
      }
    }
    if (bn(It.currentFrame, It) && (S.current = It.currentFrame, Se()), !It.isPlaying && It.previewFrame !== null && !yt && !Ze(It.previewFrame)) {
      const Q = $(It.previewFrame);
      Q.shouldPrewarm && !Q.hasActiveTransition && Q.nextTransitionStartFrame !== null && se(Q.nextTransitionStartFrame), S.current = It.previewFrame, Se();
    } else if (yt) {
      const Q = ne.getState(), de = $(Q.currentFrame);
      if (Q.isPlaying && de.shouldPrewarm && de.nextTransitionStartFrame !== null)
        if (yt) {
          const Oe = xn(de.nextTransitionStartFrame);
          if (Oe) {
            Sr(Oe);
            const ut = m.current;
            ut && "prewarmItems" in ut && ut.prewarmItems(
              [Oe.leftClip.id, Oe.rightClip.id],
              Oe.startFrame
            );
          }
        } else
          se(de.nextTransitionStartFrame);
      const le = Q.previewFrame ?? Q.currentFrame;
      S.current = le, Se(), Q.isPlaying && yt && fe === null && (fe = requestAnimationFrame(gt));
    } else if (ne.getState().isPlaying && !yt) {
      const Q = ne.getState(), de = $(Q.currentFrame);
      if (de.shouldPrewarm && (Cr(), !de.hasActiveTransition && de.nextTransitionStartFrame !== null && se(de.nextTransitionStartFrame)), de.hasActiveTransition || de.shouldHoldOverlay) {
        if (ae(Q.currentFrame))
          return;
        if (de.hasActiveTransition) {
          const le = fr.current;
          le && le.lastEntryMissFrame !== Q.currentFrame && (le.entryMisses += 1, le.lastEntryMissFrame = Q.currentFrame, Nt("entry_miss", {
            opId: le.opId,
            frame: Q.currentFrame,
            bufferedFrames: B.current.size
          }));
        }
        S.current = Q.currentFrame, Se();
      } else
        de.shouldPrewarm || hr(), st(), rt();
    } else (Ze(ne.getState().previewFrame) || ne.getState().previewFrame === null) && (hr(), st(), rt());
    return () => {
      Ce.current = !1, Me.current = !1, Be.current = !1, Qe.current = 0, Ee.current = null, at(), we(), hr(), rt(), fe !== null && (cancelAnimationFrame(fe), fe = null), ue.current = () => {
      }, Wt(), Ot(), _t(), er();
    };
  }, [
    Vr,
    Cr,
    Fa,
    Ta,
    yt,
    Re,
    Si,
    at,
    hr,
    Oa,
    Bs,
    an,
    st,
    rt,
    bn,
    Sr,
    _a,
    _r,
    vt,
    it,
    ft,
    gn,
    An,
    Nn,
    sr,
    Nt,
    qr,
    Ze,
    ot
  ]), n.useEffect(() => {
    let p = null, A = null;
    const $ = () => {
      A === null && (nt.current.preloadContinuations += 1, A = setTimeout(() => {
        A = null, ae();
      }, 16));
    }, ae = async () => {
      if (Ra.current || Et.length === 0) return;
      const Ae = tn.current > 0;
      Ae && (tn.current = Math.max(0, tn.current - 1));
      const Se = ne.getState(), fe = Bn({
        isPlaying: Se.isPlaying,
        previewFrame: Se.previewFrame,
        isGizmoInteracting: te.current
      }), Fe = ra(fe, {
        currentFrame: Se.currentFrame,
        previewFrame: Se.previewFrame
      }), tt = ei.current;
      ei.current = Fe;
      const je = fe === "scrubbing" && tt !== null ? yu(tt, Fe) : 0;
      if (fe === "scrubbing" && je < 0) {
        nt.current.preloadCandidateIds = 0, nt.current.preloadBudgetBase = kc(fe), nt.current.preloadBudgetAdjusted = 0, nt.current.preloadWindowMaxCost = 0, nt.current.preloadScrubDirection = je, nt.current.preloadDirectionPenaltyCount = 0;
        return;
      }
      const { startFrame: lt, endFrame: gt } = Sp({
        mode: fe,
        anchorFrame: Fe,
        scrubDirection: je,
        fps: Re,
        aheadSeconds: xc
      }), Ft = kc(fe), Wt = fe === "scrubbing" && je < 0 ? Gp : 0, Ot = Ae ? Math.min(
        zp,
        Ft + Vp + Wt
      ) : Ft + Wt, _t = Date.now(), er = In.current, It = Math.max(8, Math.round(Re * 0.6)), Q = Math.max(
        8,
        Math.round(Re * Up)
      ), de = performance.now();
      let le = 0, Oe = 0, ut = !1, jt = (Zn.current % Et.length + Et.length) % Et.length, At = Math.max(0, Jn.current);
      const Dt = /* @__PURE__ */ new Map();
      if (fe === "scrubbing") {
        for (let Rt = 0; Rt < Et.length; Rt++) {
          const xt = (jt + Rt) % Et.length, ve = Et[xt].items;
          if (ve.length === 0) continue;
          const Le = je < 0 ? -1 : 1;
          let He = Tg(
            ve,
            Fe,
            je
          );
          for (; He >= 0 && He < ve.length; ) {
            const ce = ve[He];
            if (!ce.mediaId) {
              He += Le;
              continue;
            }
            const _e = ce.from + ce.durationInFrames;
            if (ce.from <= gt && _e >= lt && er.has(ce.mediaId) && es(ce.mediaId) <= _t) {
              const mt = jn.get(ce.mediaId) ?? 1;
              mt > le && (le = mt);
              let ge = (Fe < ce.from ? ce.from - Fe : Fe > _e ? Fe - _e : 0) + mt * It;
              if (je !== 0) {
                const bt = ce.from + ce.durationInFrames * 0.5;
                (je > 0 ? bt >= Fe : bt <= Fe) || (ge += Q, Oe += 1);
              }
              const Je = Dt.get(ce.mediaId);
              (Je === void 0 || ge < Je) && Dt.set(ce.mediaId, ge);
            }
            if (performance.now() - de >= bc) {
              Zn.current = xt, Jn.current = 0, ut = !0;
              break;
            }
            He += Le;
          }
          if (ut) break;
        }
        ut || (Zn.current = (jt + 1) % Et.length, Jn.current = 0);
      } else {
        for (let Rt = 0; Rt < Et.length; Rt++) {
          const wt = Et[jt].items, ve = Rt === 0 ? At : 0;
          for (let Le = ve; Le < wt.length; Le++) {
            const He = wt[Le];
            if (!He.mediaId) continue;
            const ce = He.from + He.durationInFrames;
            if (He.from <= gt && ce >= lt && er.has(He.mediaId) && es(He.mediaId) <= _t) {
              const _e = jn.get(He.mediaId) ?? 1;
              _e > le && (le = _e);
              let We = (Fe < He.from ? He.from - Fe : Fe > ce ? Fe - ce : 0) + _e * It;
              if (je !== 0) {
                const Je = He.from + He.durationInFrames * 0.5;
                (je > 0 ? Je >= Fe : Je <= Fe) || (We += Q, Oe += 1);
              }
              const ge = Dt.get(He.mediaId);
              (ge === void 0 || We < ge) && Dt.set(He.mediaId, We);
            }
            if (performance.now() - de >= bc) {
              let _e = jt, mt = Le + 1;
              mt >= wt.length && (_e = (jt + 1) % Et.length, mt = 0), Zn.current = _e, Jn.current = mt, ut = !0;
              break;
            }
          }
          if (ut) break;
          jt = (jt + 1) % Et.length, At = 0;
        }
        ut || (Zn.current = jt, Jn.current = 0);
      }
      const dt = performance.now() - de;
      nt.current.preloadScanSamples += 1, nt.current.preloadScanTotalMs += dt, nt.current.preloadScanLastMs = dt, ut && (nt.current.preloadScanBudgetYields += 1);
      const Mt = Mc(Ot, le);
      if (nt.current.preloadCandidateIds = Dt.size, nt.current.preloadBudgetBase = Ft, nt.current.preloadBudgetAdjusted = Mt, nt.current.preloadWindowMaxCost = le, nt.current.preloadScrubDirection = je, nt.current.preloadDirectionPenaltyCount = Oe, Dt.size === 0) {
        (ut || tn.current > 0) && $();
        return;
      }
      const Ct = [...Dt.entries()].sort((Rt, xt) => Rt[1] - xt[1]).slice(0, Mt).map(([Rt]) => Rt);
      Ra.current = !0;
      try {
        const Rt = performance.now(), { resolvedEntries: xt, failedIds: wt } = await Ts(Ct), ve = performance.now() - Rt;
        if (nt.current.preloadBatchSamples += 1, nt.current.preloadBatchTotalMs += ve, nt.current.preloadBatchLastMs = ve, nt.current.preloadBatchLastIds = Ct.length, xt.length > 0) {
          const Le = [], He = [];
          for (const ce of xt)
            In.current.has(ce.mediaId) && (Le.push(ce.mediaId), He.push(ce));
          Br((ce) => {
            const _e = new Map(ce);
            let mt = !1;
            for (const We of He)
              _e.get(We.mediaId) !== We.url && (_e.set(We.mediaId, We.url), mt = !0);
            return mt ? _e : ce;
          }), nn(Le), Is(Le);
        }
        if (wt.length > 0) {
          const Le = Fs(wt);
          Le !== null && Yr(Le);
        }
      } finally {
        Ra.current = !1, (ut || tn.current > 0) && $();
      }
    }, se = () => {
      tn.current = Math.max(
        tn.current,
        $p
      ), ae();
    };
    ae();
    const we = ne.subscribe((Ae, Se) => {
      const fe = Mo({
        prev: {
          isPlaying: Se.isPlaying,
          previewFrame: Se.previewFrame,
          currentFrame: Se.currentFrame,
          isGizmoInteracting: te.current
        },
        next: {
          isPlaying: Ae.isPlaying,
          previewFrame: Ae.previewFrame,
          currentFrame: Ae.currentFrame,
          isGizmoInteracting: te.current
        },
        fps: Re
      }), Fe = fe.next.mode, tt = fe.preloadBurstTrigger;
      if (fe.enteredPlaying)
        Te.current = 0, De.current = 0, ae(), p = setInterval(() => {
          ae();
        }, 1e3);
      else if (tt === "scrub_enter")
        Te.current = 0, De.current = 0, se(), ts();
      else if (Fe === "scrubbing" && fe.previewFrameChanged) {
        const je = (Ae.previewFrame ?? 0) - (Se.previewFrame ?? 0);
        if (je < 0)
          return;
        if (je > 0) {
          const lt = performance.now();
          if (lt - Te.current < Wp)
            return;
          Te.current = lt;
        }
        ae();
      } else Fe !== "playing" && Fe !== "scrubbing" && fe.currentFrameChanged ? (Te.current = 0, De.current = 0, tt === "paused_short_seek" ? se() : ae(), ts()) : fe.exitedPlaying && (Te.current = 0, De.current = 0, p && (clearInterval(p), p = null));
    });
    return () => {
      we(), p && clearInterval(p), A !== null && clearTimeout(A), Te.current = 0, De.current = 0, tn.current = 0;
    };
  }, [
    nn,
    Re,
    Et,
    es,
    Fs,
    jn,
    ts,
    Ts,
    Is,
    Yr
  ]), n.useEffect(() => {
    let p = 0;
    const A = 3e4, $ = async () => {
      if (document.hidden) {
        p = Date.now();
        return;
      }
      if (p === 0 || Date.now() - p < A)
        return;
      try {
        await gd.refreshAllBlobUrls();
      } catch {
      }
      Ei.invalidateAll();
      const ae = /* @__PURE__ */ new Map();
      En(), Br(ae), Qn(ae), Rs((se) => se + 1);
    };
    return document.addEventListener("visibilitychange", $), () => {
      document.removeEventListener("visibilitychange", $);
    };
  }, [Qn, En]), n.useEffect(() => () => {
    Ce.current = !1, En(), Vr();
  }, [Vr, En]);
  const on = n.useMemo(() => {
    const p = t.width / t.height;
    if (Er === -1) {
      if (s.width > 0 && s.height > 0) {
        const ae = s.width / s.height;
        let se, we;
        return ae > p ? (we = s.height, se = we * p) : (se = s.width, we = se / p), { width: se, height: we };
      }
      return { width: t.width, height: t.height };
    }
    const A = t.width * Er, $ = t.height * Er;
    return { width: A, height: $ };
  }, [t.width, t.height, Er, s]), Bu = n.useMemo(() => Er === -1 || s.width === 0 || s.height === 0 ? !1 : on.width > s.width || on.height > s.height, [Er, on, s]);
  n.useLayoutEffect(() => {
    if (a) return;
    const p = i.current;
    if (!p) return;
    const A = () => {
      const se = i.current;
      if (!se) return;
      const we = se.getBoundingClientRect();
      queueMicrotask(() => {
        Pt((Ae) => Ae && Lg(Ae, we) ? Ae : we);
      });
    }, $ = () => {
      c.current === null && (c.current = requestAnimationFrame(() => {
        c.current = null, A();
      }));
    };
    $();
    const ae = new ResizeObserver($);
    return ae.observe(p), window.addEventListener("scroll", $, !0), () => {
      c.current !== null && (cancelAnimationFrame(c.current), c.current = null), ae.disconnect(), window.removeEventListener("scroll", $, !0);
    };
  }, [a]);
  const Ri = n.useRef(null), Pi = n.useCallback((p) => {
    if (Cs) {
      p.stopPropagation();
      return;
    }
    dl() || p.target.closest("[data-gizmo]") || Vt.getState().clearItemSelection();
  }, [Cs]), Hu = n.useCallback((p) => {
    const A = Math.round(p);
    ht(A), it(A);
    const $ = ee.current;
    if ($ !== null && A !== $) {
      ft();
      return;
    }
    if (hn.current) return;
    const ae = ne.getState(), se = Bn({
      isPlaying: ae.isPlaying,
      previewFrame: ae.previewFrame,
      isGizmoInteracting: te.current
    });
    if (se === "scrubbing") return;
    if (se === "playing") {
      const Se = performance.now(), fe = ie.current;
      if (fe && A !== fe.frame) {
        const Fe = Math.max(1, Math.abs(A - fe.frame)), tt = Se - fe.tsMs;
        if (tt > 0) {
          const je = Ap({
            state: Z.current,
            sampleMsPerFrame: tt / Fe,
            frameBudgetMs: Np(Re, ae.playbackRate),
            userQuality: ae.previewQuality,
            nowMs: Se,
            allowRecovery: !1
          });
          Z.current = je.state, je.qualityChanged && (je.qualityChangeDirection === "degrade" ? nt.current.adaptiveQualityDowngrades += 1 : je.qualityChangeDirection === "recover" && (nt.current.adaptiveQualityRecovers += 1), Ie(je.state.qualityCap));
        }
      }
      ie.current = { frame: A, tsMs: Se };
    } else
      ie.current = null, (Z.current.overBudgetSamples !== 0 || Z.current.underBudgetSamples !== 0) && (Z.current = {
        ...Z.current,
        overBudgetSamples: 0,
        underBudgetSamples: 0
      });
    const { currentFrame: we, setCurrentFrame: Ae } = ae;
    we !== A && Ae(A);
  }, [
    Re,
    it,
    ht,
    ft
  ]), Uu = n.useCallback((p) => {
    p ? ne.getState().play() : ne.getState().pause();
  }, []);
  return Lt?.renderSourceHistory[Lt.renderSourceHistory.length - 1], /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: Ri,
      className: "w-full h-full panel-bg relative",
      style: { overflow: Bu ? "auto" : "visible" },
      onClick: Pi,
      role: "img",
      "aria-label": "Video preview",
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "flex min-h-full w-full flex-col items-center justify-end",
          style: {
            paddingLeft: `calc(${Ye.previewPadding} / 2)`,
            paddingRight: `calc(${Ye.previewPadding} / 2)`,
            paddingBottom: 6
          },
          onClick: Pi,
          children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              ref: zt,
              "data-player-container": !0,
              className: "relative shrink-0",
              style: {
                width: `${on.width}px`,
                height: `${on.height}px`,
                transition: "none",
                outline: "2px solid hsl(var(--border))",
                outlineOffset: 0
              },
              onDoubleClick: (p) => p.preventDefault(),
              children: [
                Pr && /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50 z-20", children: /* @__PURE__ */ r.jsx("p", { className: "text-white text-sm", children: "Loading media..." }) }),
                /* @__PURE__ */ r.jsx(
                  su,
                  {
                    ref: o,
                    durationInFrames: Nu,
                    fps: Re,
                    width: sn.width,
                    height: sn.height,
                    autoPlay: !1,
                    loop: !1,
                    controls: !1,
                    style: {
                      width: "100%",
                      height: "100%"
                    },
                    onFrameChange: Hu,
                    onPlayStateChange: Uu,
                    children: /* @__PURE__ */ r.jsx(Sl, { ...Au })
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "canvas",
                  {
                    ref: l,
                    className: "absolute inset-0 pointer-events-none",
                    style: {
                      width: "100%",
                      height: "100%",
                      zIndex: 4,
                      visibility: Ia ? "visible" : "hidden"
                    }
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "canvas",
                  {
                    ref: u,
                    className: "absolute inset-0 pointer-events-none",
                    style: {
                      width: "100%",
                      height: "100%",
                      zIndex: 5,
                      visibility: "hidden"
                    }
                  }
                ),
                !1,
                Kr ? /* @__PURE__ */ r.jsx(dp, { fps: Re }) : Qr ? /* @__PURE__ */ r.jsx(hp, { fps: Re }) : mn ? /* @__PURE__ */ r.jsx(xp, { fps: Re }) : Tr ? /* @__PURE__ */ r.jsx(bp, { fps: Re }) : null,
                !a && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                  /* @__PURE__ */ r.jsx(
                    Oh,
                    {
                      containerRect: Ue,
                      playerSize: on,
                      projectSize: { width: t.width, height: t.height },
                      zoom: Er,
                      hitAreaRef: Ri
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    qh,
                    {
                      containerRect: Ue,
                      playerSize: on,
                      projectSize: { width: t.width, height: t.height },
                      zoom: Er
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    Xh,
                    {
                      containerRect: Ue,
                      playerSize: on,
                      projectSize: { width: t.width, height: t.height },
                      zoom: Er
                    }
                  )
                ] })
              ]
            }
          )
        }
      )
    }
  );
});
async function Hg(e, t) {
  return "convertToBlob" in e ? e.convertToBlob({ type: t }) : new Promise((s, a) => {
    e.toBlob((o) => {
      if (o) {
        s(o);
        return;
      }
      a(new Error("Failed to convert frame to blob"));
    }, t);
  });
}
async function Ug(e) {
  return (await fetch(e)).blob();
}
function Vg(e) {
  if (typeof window < "u" && "requestIdleCallback" in window) {
    window.requestIdleCallback(() => URL.revokeObjectURL(e));
    return;
  }
  setTimeout(() => URL.revokeObjectURL(e), 0);
}
function Gg(e, t) {
  const s = URL.createObjectURL(e), a = document.createElement("a");
  a.href = s, a.download = t, document.body.appendChild(a), a.click(), document.body.removeChild(a), Vg(s);
}
function Wg(e, t, s) {
  const a = Math.max(0, Math.round(e)), o = Number.isFinite(t) && t > 0 ? t : 30, i = Math.max(String(Math.max(0, s - 1)).length, 1), c = String(a).padStart(i, "0"), l = wl(a, o).replaceAll(":", "-");
  return `frame-${c}-${l}.png`;
}
const vn = { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize };
function zg({ totalFrames: e, fps: t }) {
  const [s, a] = n.useState(!1), o = ne((w) => w.isPlaying), i = ne((w) => w.useProxy), c = ne((w) => w.togglePlayPause), l = ne((w) => w.setCurrentFrame), u = ne((w) => w.setPreviewFrame), d = ne((w) => w.setDisplayedFrame), f = ne((w) => w.toggleUseProxy), m = Math.max(0, e - 1), b = (w) => {
    u(null), d(null), l(w);
  }, h = () => b(0), x = () => b(m), v = () => {
    const w = ne.getState().currentFrame;
    b(Math.max(0, w - 1));
  }, C = () => {
    const w = ne.getState().currentFrame;
    b(Math.min(m, w + 1));
  }, y = async () => {
    if (!s) {
      a(!0);
      try {
        const w = ne.getState(), S = w.previewFrame ?? w.currentFrame, R = Wg(S, t, e);
        let O = null, L, I;
        if (w.captureCanvasSource) {
          const E = await w.captureCanvasSource();
          E && (O = await Hg(E, "image/png"), L = E.width, I = E.height);
        }
        if (!O && w.captureFrame) {
          const E = await w.captureFrame({
            format: "image/png",
            quality: 1,
            fullResolution: !0
          });
          E && (O = await Ug(E));
        }
        if (!O) {
          Yt.error("Failed to capture the current frame.");
          return;
        }
        Gg(O, R);
        const j = lr.getState().currentProjectId;
        if (!j) {
          Yt.error("Downloaded the frame, but no project is selected for media library import.");
          return;
        }
        const P = new File([O], R, {
          type: "image/png",
          lastModified: Date.now()
        }), F = await pl.importGeneratedImage(P, j, {
          width: L,
          height: I,
          tags: ["frame-capture"],
          codec: "png"
        });
        lr.setState((E) => ({
          mediaItems: [F, ...E.mediaItems]
        })), Yt.success(`Saved "${F.fileName}" to the media library and started the download.`);
      } catch (w) {
        const S = w instanceof Error ? w.message : "Failed to save frame.";
        Yt.error(`Downloaded frame, but could not save it to the media library. ${S}`);
      } finally {
        a(!1);
      }
    }
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 flex-shrink-0", children: [
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "flex-shrink-0",
          style: vn,
          onClick: h,
          "data-tooltip": "Go to Start (Home)",
          "aria-label": "Go to start",
          children: /* @__PURE__ */ r.jsx(Ol, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "flex-shrink-0",
          style: vn,
          onClick: v,
          "data-tooltip": "Previous Frame (Left Arrow)",
          "aria-label": "Previous frame",
          children: /* @__PURE__ */ r.jsx(ws, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          size: "icon",
          className: "flex-shrink-0",
          style: vn,
          onClick: c,
          "data-tooltip": o ? "Pause (Space)" : "Play (Space)",
          "aria-label": o ? "Pause" : "Play",
          children: o ? /* @__PURE__ */ r.jsx(_l, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(Ll, { className: "w-3.5 h-3.5 ml-0.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "flex-shrink-0",
          style: vn,
          onClick: C,
          "data-tooltip": "Next Frame (Right Arrow)",
          "aria-label": "Next frame",
          children: /* @__PURE__ */ r.jsx(Ss, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "flex-shrink-0",
          style: vn,
          onClick: x,
          "data-tooltip": "Go to End (End)",
          "aria-label": "Go to end",
          children: /* @__PURE__ */ r.jsx(Bl, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "hidden @min-[440px]:flex items-center gap-1.5 flex-shrink-0 pl-1", children: /* @__PURE__ */ r.jsx(
      be,
      {
        variant: "ghost",
        size: "icon",
        className: "flex-shrink-0",
        style: vn,
        onClick: () => {
          y();
        },
        disabled: s,
        "data-tooltip": s ? "Saving Frame..." : "Save Frame",
        "aria-label": s ? "Saving frame" : "Save frame",
        children: s ? /* @__PURE__ */ r.jsx(Hl, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ r.jsx(pf, { className: "w-3.5 h-3.5" })
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: "hidden @min-[440px]:flex items-center gap-1.5 flex-shrink-0 pl-1", children: /* @__PURE__ */ r.jsx(
      be,
      {
        variant: "ghost",
        size: "icon",
        style: vn,
        className: `flex-shrink-0 ${i ? "text-green-500 hover:text-green-400 hover:bg-green-500/10" : "text-muted-foreground hover:text-foreground"}`,
        onClick: f,
        "data-tooltip": i ? "Proxy Playback: On" : "Proxy Playback: Off",
        "aria-label": i ? "Disable proxy playback" : "Enable proxy playback",
        children: /* @__PURE__ */ r.jsx(gf, { className: "w-3.5 h-3.5" })
      }
    ) })
  ] });
}
function $g({ fps: e, totalFrames: t }) {
  const [s, a] = n.useState(!1), o = n.useRef(null), i = Math.max(t.toString().length, 1), c = Math.max(i, 8), l = Math.max(0, t - 1), u = `calc(${c * 2 + 1}ch + 0.75rem)`, d = n.useRef(s);
  d.current = s;
  const f = n.useRef(e);
  f.current = e;
  const m = n.useRef(t);
  m.current = t;
  const b = n.useCallback((h) => {
    const x = Math.max(m.current.toString().length, 1);
    return h.toString().padStart(x, "0");
  }, []);
  return n.useEffect(() => {
    const h = (x) => {
      o.current && (o.current.textContent = d.current ? b(x) : Un(x, f.current));
    };
    return h(ne.getState().currentFrame), ne.subscribe((x) => {
      h(x.currentFrame);
    });
  }, [b]), n.useEffect(() => {
    if (!o.current) return;
    const h = ne.getState().currentFrame;
    o.current.textContent = s ? b(h) : Un(h, e);
  }, [s, e, b]), /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: "inline-flex items-center gap-1.5 bg-transparent p-0 font-mono text-[11px] tabular-nums text-left transition-colors select-none text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm",
      style: { width: u },
      onClick: () => a((h) => !h),
      children: [
        /* @__PURE__ */ r.jsx(
          "span",
          {
            ref: o,
            className: "text-primary font-semibold",
            children: s ? b(ne.getState().currentFrame) : Un(ne.getState().currentFrame, e)
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground/50", children: "/" }),
        /* @__PURE__ */ r.jsx("span", { children: s ? b(l) : Un(l, e) })
      ]
    }
  );
}
const Kg = [
  { label: "Auto", value: "fit" },
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 }
];
function qg() {
  const e = ne((c) => c.zoom), t = ne((c) => c.setZoom), s = n.useCallback(
    (c) => {
      c.value === "fit" ? t(-1) : t(c.value);
    },
    [t]
  ), a = n.useCallback(() => {
    t(Math.min(2, Number((e * 1.2).toFixed(2))));
  }, [e, t]), o = n.useCallback(() => {
    t(Math.max(0.1, Number((e / 1.2).toFixed(2))));
  }, [e, t]), i = n.useCallback(() => {
    t(1);
  }, [t]);
  return {
    zoom: e,
    setZoom: t,
    zoomPresets: Kg,
    handlePresetZoom: s,
    zoomIn: a,
    zoomOut: o,
    resetZoom: i
  };
}
function Yg() {
  const { zoom: e, zoomPresets: t, handlePresetZoom: s } = qg(), a = n.useRef(null), o = e === -1 ? "Auto" : t.find((c) => c.value === e)?.label || `${Math.round(e * 100)}%`, i = n.useCallback(() => {
    a.current?.blur();
  }, []);
  return /* @__PURE__ */ r.jsxs(
    Cl,
    {
      onOpenChange: (c) => {
        c || requestAnimationFrame(i);
      },
      children: [
        /* @__PURE__ */ r.jsx(kl, { asChild: !0, children: /* @__PURE__ */ r.jsxs(
          be,
          {
            ref: a,
            variant: "ghost",
            className: "flex-shrink-0 text-muted-foreground hover:text-foreground gap-1 px-1.5",
            style: { height: Ye.previewControlButtonSize },
            "data-tooltip": `Zoom: ${o}`,
            "aria-label": `Preview zoom: ${o}`,
            onKeyDown: (c) => {
              (c.key === " " || c.code === "Space") && c.preventDefault();
            },
            children: [
              /* @__PURE__ */ r.jsx(xf, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ r.jsx("span", { className: "text-[10px] leading-none", children: o })
            ]
          }
        ) }),
        /* @__PURE__ */ r.jsx(
          Ml,
          {
            align: "end",
            onCloseAutoFocus: (c) => {
              c.preventDefault(), requestAnimationFrame(i);
            },
            children: t.map((c) => /* @__PURE__ */ r.jsx(
              Rl,
              {
                className: "text-xs",
                onSelect: () => s(c),
                children: /* @__PURE__ */ r.jsx("span", { className: e === c.value || c.value === "fit" && e === -1 ? "font-semibold" : "", children: c.label })
              },
              c.label
            ))
          }
        )
      ]
    }
  );
}
let Xg = 0, Zg = 0, oo = null;
const Jg = 2, Qg = 90, jc = 1 / 60, e0 = 6;
function t0() {
  return oo || (oo = new yl()), oo;
}
function r0(e) {
  return Math.round(e / jc) * jc;
}
function Su(e, t, s) {
  return Math.abs(e - t) * s >= e0;
}
function n0(e, t) {
  const s = ne((o) => o.useProxy), a = lr((o) => e ? o.proxyStatus.get(e) ?? null : null);
  return n.useMemo(() => t ? s && e && Do(e) || t : "", [e, a, t, s]);
}
function Cu({ mediaId: e, src: t, mediaType: s, fileName: a }) {
  return s === "video" ? /* @__PURE__ */ r.jsx(s0, { mediaId: e, src: t }) : s === "image" ? /* @__PURE__ */ r.jsx(a0, { src: t }) : /* @__PURE__ */ r.jsx(o0, { src: t, fileName: a });
}
function s0({ mediaId: e, src: t }) {
  const s = n0(e, t), a = ys(), o = Oo(), i = Pl(), c = n.useRef(null), l = n.useRef(null), u = n.useRef(aa()), d = n.useRef(`source-monitor-${++Xg}`), f = n.useRef(t0()), m = n.useRef(`source-monitor-strict-${++Zg}`), b = n.useRef(null), h = n.useRef(null), x = n.useRef(null), v = n.useRef(!0), C = n.useRef(!1), y = n.useRef(!1), w = n.useRef(null), S = n.useRef(0), R = n.useRef(0), O = n.useRef(/* @__PURE__ */ new Map()), L = n.useRef([]), { fps: I } = Il(), j = n.useRef(a.currentFrame), P = n.useRef(o), F = `${e ?? "source-monitor"}:${m.current}`, [E, T] = n.useState(!1), [N, z] = n.useState(!1), [M, Y] = n.useState(!1);
  n.useEffect(() => {
    P.current = o;
  }, [o]), n.useEffect(() => (v.current = !0, () => {
    v.current = !1;
    for (const q of O.current.values())
      q.close();
    O.current.clear(), L.current = [];
  }), []), n.useEffect(() => {
    T(!1), Y(!1);
  }, [s, e]);
  const G = n.useCallback(async (q) => {
    const pe = b.current, k = h.current;
    if (!pe || !k) return !1;
    let B = x.current;
    if (!B) {
      if (B = k.getContext("2d"), !B) return !1;
      x.current = B;
    }
    const { width: U, height: J } = pe.getDimensions(), re = Math.max(1, Math.round(U || 640)), me = Math.max(1, Math.round(J || 360));
    (k.width !== re || k.height !== me) && (k.width = re, k.height = me);
    const xe = r0(q), ye = O.current, Me = L.current, Be = ye.get(xe);
    if (Be) {
      B.clearRect(0, 0, k.width, k.height), B.drawImage(Be, 0, 0, k.width, k.height);
      const De = Me.indexOf(xe);
      return De !== -1 && (Me.splice(De, 1), Me.push(xe)), !0;
    }
    if (!await pe.drawFrame(
      B,
      Math.max(0, q),
      0,
      0,
      k.width,
      k.height
    )) return !1;
    try {
      const De = await createImageBitmap(k);
      for (ye.set(xe, De), Me.push(xe); Me.length > Qg; ) {
        const Qe = Me.shift();
        if (Qe === void 0) break;
        const Ee = ye.get(Qe);
        Ee && (Ee.close(), ye.delete(Qe));
      }
    } catch {
    }
    return !0;
  }, []), X = n.useCallback(() => {
    if (y.current) return;
    y.current = !0, (async () => {
      try {
        for (; C.current && w.current !== null && v.current && !P.current; ) {
          const pe = w.current;
          if (w.current = null, await G(pe).catch(() => !1)) {
            R.current = 0, Y(!0);
            continue;
          }
          if ((b.current?.getLastFailureKind() ?? "decode-error") === "decode-error" && (R.current += 1, R.current >= Jg)) {
            C.current = !1, z(!1), T((U) => U || !0);
            return;
          }
        }
      } finally {
        y.current = !1, C.current && w.current !== null && v.current && !P.current && queueMicrotask(() => {
          v.current && X();
        });
      }
    })();
  }, [G]);
  n.useEffect(() => {
    if (!s) return;
    const q = u.current, pe = d.current;
    q.preloadSource(s).catch(() => {
    });
    const k = q.acquireForClip(pe, s);
    if (!k) return;
    k.muted = !1, k.volume = 1, k.playsInline = !0, k.style.width = "100%", k.style.height = "100%", k.style.objectFit = "contain", k.style.display = "block", k.style.position = "absolute", k.style.top = "0", k.style.left = "0";
    const B = c.current;
    return B && k.parentElement !== B && B.appendChild(k), l.current = k, () => {
      k.pause(), k.parentElement && k.parentElement.removeChild(k), q.releaseClip(pe), l.current = null;
    };
  }, [s]), n.useEffect(() => {
    C.current = !1, z(!1), Y(!1), b.current = null, w.current = null, R.current = 0, x.current = null;
    for (const B of O.current.values())
      B.close();
    if (O.current.clear(), L.current = [], !s) return;
    const q = f.current, pe = q.getOrCreateItemExtractor(F, s);
    b.current = pe;
    let k = !1;
    return pe.init().then((B) => {
      if (!(k || !v.current)) {
        if (!B) {
          T((U) => U || !0);
          return;
        }
        C.current = !0, z(!0), w.current = S.current, P.current || X();
      }
    }).catch(() => {
      k || !v.current || T((B) => B || !0);
    }), () => {
      k = !0, C.current = !1, z(!1), b.current = null, w.current = null, q.releaseItem(F);
    };
  }, [s, F, X]);
  const D = n.useCallback((q) => {
    const pe = l.current, k = q / I;
    if (S.current = k, j.current = q, !P.current && !E && (w.current = k, C.current && X()), !(!pe || !s || !(pe.readyState >= 1)) && !(!P.current && N && M && !E)) {
      if (P.current) {
        if (!Su(pe.currentTime, k, I))
          return;
        try {
          pe.currentTime = k;
        } catch {
        }
        return;
      }
      try {
        u.current.seekClip(d.current, q / I, { fast: !0 });
      } catch {
      }
    }
  }, [s, I, M, X, N, E]);
  n.useEffect(() => (D(a.currentFrame), a.onFrameChange((q) => {
    D(q);
  })), [a, D]), n.useEffect(() => {
    D(a.currentFrame);
  }, [a, o, D]), n.useEffect(() => {
    const q = l.current;
    if (!(!q || !s))
      if (o) {
        if (q.playbackRate = i, q.readyState >= 1)
          try {
            q.currentTime = S.current;
          } catch {
          }
        q.play().catch(() => {
        });
      } else
        q.pause();
  }, [s, i, o]);
  const W = !o && N && M && !E;
  return /* @__PURE__ */ r.jsxs(_o, { children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: c,
        style: {
          width: "100%",
          height: "100%",
          position: "relative",
          display: W ? "none" : "block"
        }
      }
    ),
    /* @__PURE__ */ r.jsx(
      "canvas",
      {
        ref: h,
        style: {
          width: "100%",
          height: "100%",
          display: W ? "block" : "none"
        }
      }
    )
  ] });
}
function a0({ src: e }) {
  return /* @__PURE__ */ r.jsx(_o, { children: /* @__PURE__ */ r.jsx(
    "img",
    {
      src: e,
      style: { width: "100%", height: "100%", objectFit: "contain" },
      alt: "Source preview"
    }
  ) });
}
function o0({ src: e, fileName: t }) {
  const s = n.useRef(null), a = ys(), o = Oo(), i = Pl(), { fps: c } = Il(), l = n.useRef(a.currentFrame), u = n.useCallback((d) => {
    const f = s.current;
    if (!f || !e) return;
    const m = d / c;
    if (l.current = d, f.readyState >= 1 && !(o && !Su(f.currentTime, m, c)))
      try {
        f.currentTime = m;
      } catch {
      }
  }, [c, o, e]);
  return n.useEffect(() => (u(a.currentFrame), a.onFrameChange((d) => {
    u(d);
  })), [a, u]), n.useEffect(() => {
    u(a.currentFrame);
  }, [a, o, u]), n.useEffect(() => {
    const d = s.current;
    if (!(!d || !e))
      if (o) {
        if (d.playbackRate = i, d.readyState >= 1)
          try {
            d.currentTime = l.current / c;
          } catch {
          }
        d.play().catch(() => {
        });
      } else
        d.pause();
  }, [o, i, e, c]), /* @__PURE__ */ r.jsxs(_o, { style: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1a1a2e" }, children: [
    /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }, children: [
      /* @__PURE__ */ r.jsx(bf, { style: { width: 48, height: 48, color: "#22c55e" } }),
      /* @__PURE__ */ r.jsx("span", { style: { color: "#a1a1aa", fontSize: 14, maxWidth: 200, textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: t })
    ] }),
    /* @__PURE__ */ r.jsx("audio", { ref: s, src: e, preload: "auto" })
  ] });
}
const i0 = 33, c0 = n.memo(function({
  mediaId: t,
  onClose: s,
  variant: a = "panel",
  interactive: o = !0,
  seekFrame: i = null
}) {
  const [c, l] = n.useState(""), u = lr((x) => x.mediaItems.find((v) => v.id === t));
  if (n.useEffect(() => {
    if (o)
      return Xt.getState().setCurrentMediaId(t), () => {
        Xt.getState().setCurrentMediaId(null);
      };
  }, [o, t]), n.useEffect(() => {
    u || s?.();
  }, [u, s]), n.useEffect(() => {
    let x = !1;
    return Cn(t).then((v) => {
      x || l(v);
    }).catch(() => {
    }), () => {
      x = !0;
    };
  }, [t]), !u) return null;
  const d = Ao(u.mimeType);
  if (d === "unknown") return null;
  const f = u.fps || 30, m = u.width || 640, b = u.height || 360, h = d === "image" ? 1 : Math.max(1, Math.round(u.duration * f));
  return /* @__PURE__ */ r.jsx(ba, { children: /* @__PURE__ */ r.jsx(
    da,
    {
      fps: f,
      durationInFrames: h,
      onVolumeChange: () => {
      },
      children: /* @__PURE__ */ r.jsx(
        fa,
        {
          fps: f,
          width: m,
          height: b,
          durationInFrames: h,
          children: /* @__PURE__ */ r.jsx(
            l0,
            {
              mediaId: t,
              src: c,
              mediaType: d,
              hasAudio: d === "video" && !!u.audioCodec,
              fileName: u.fileName,
              mediaWidth: m,
              mediaHeight: b,
              durationInFrames: h,
              fps: f,
              variant: a,
              interactive: o,
              seekFrame: i,
              onClose: s
            }
          )
        }
      )
    }
  ) });
});
function l0({
  mediaId: e,
  src: t,
  mediaType: s,
  hasAudio: a,
  fileName: o,
  mediaWidth: i,
  mediaHeight: c,
  durationInFrames: l,
  fps: u,
  variant: d,
  interactive: f,
  seekFrame: m,
  onClose: b
}) {
  const h = n.useRef(null), x = n.useRef(null), v = n.useRef(null), C = n.useRef(null), y = pa((E) => E.editorDensity), w = ga(y), S = n.useCallback(() => {
    const E = h.current, T = x.current, N = v.current;
    if (!E || !T || !N) return;
    const z = Math.max(0, E.clientWidth - w.previewPadding), M = Math.max(0, E.clientHeight - w.previewPadding), Y = z > 0 && M > 0 ? Math.min(z / i, M / c) : 1, G = i * Y, X = c * Y, D = C.current;
    D && D.scaledWidth === G && D.scaledHeight === X && D.scale === Y || (C.current = {
      scaledWidth: G,
      scaledHeight: X,
      scale: Y
    }, T.style.width = `${G}px`, T.style.height = `${X}px`, T.style.marginLeft = `${-G / 2}px`, T.style.marginTop = `${-X / 2}px`, N.style.width = `${i}px`, N.style.height = `${c}px`, N.style.transform = `scale(${Y})`);
  }, [w.previewPadding, i, c]);
  n.useEffect(() => {
    const E = h.current;
    if (!E) return;
    let T = null, N = 0;
    const z = () => {
      T === null && (T = requestAnimationFrame(() => {
        const Y = performance.now();
        if (Y - N < i0) {
          T = requestAnimationFrame(() => {
            T = null, N = performance.now(), S();
          });
          return;
        }
        T = null, N = Y, S();
      }));
    }, M = new ResizeObserver(z);
    return M.observe(E), S(), () => {
      M.disconnect(), T !== null && cancelAnimationFrame(T);
    };
  }, [S]), n.useEffect(() => {
    if (!t) return;
    const E = requestAnimationFrame(() => {
      S();
    });
    return () => {
      cancelAnimationFrame(E);
    };
  }, [t, S]);
  const R = Xt((E) => E.setHoveredPanel), O = Xt((E) => E.setPlayerMethods);
  n.useEffect(() => {
    if (f)
      return () => {
        R(null), O(null);
      };
  }, [f, R, O]);
  const L = n.useRef(null), I = n.useRef(!1), j = n.useCallback((E) => {
    if (!f || E.target instanceof HTMLInputElement || E.target instanceof HTMLTextAreaElement) return;
    const { currentSourceFrame: T, setInPoint: N, setOutPoint: z, clearInOutPoints: M } = Xt.getState();
    E.key === "i" || E.key === "I" ? (E.preventDefault(), E.stopPropagation(), N(T)) : E.key === "o" || E.key === "O" ? (E.preventDefault(), E.stopPropagation(), z(T)) : E.altKey && (E.key === "x" || E.key === "X") && (E.preventDefault(), E.stopPropagation(), M());
  }, [f]), P = n.useCallback(() => {
    if (!f) return;
    R("source");
    const E = document.activeElement;
    (E === document.body || L.current?.contains(E)) && (L.current?.focus(), I.current = !0);
  }, [f, R]), F = n.useCallback(() => {
    f && (R(null), I.current && (L.current?.blur(), I.current = !1));
  }, [f, R]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: L,
      tabIndex: -1,
      className: "flex-1 flex flex-col min-w-0 outline-none",
      onMouseEnter: P,
      onMouseLeave: F,
      onKeyDown: j,
      children: [
        d === "panel" && /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "flex items-center px-3 justify-between shrink-0",
            style: { height: Ye.previewSplitHeaderHeight },
            children: [
              /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-muted-foreground truncate", children: [
                "Source: ",
                o
              ] }),
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  onClick: b,
                  className: "p-1 rounded hover:bg-muted transition-colors shrink-0",
                  "aria-label": "Close source monitor",
                  children: /* @__PURE__ */ r.jsx(Ul, { className: "w-3.5 h-3.5 text-muted-foreground" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: h,
            className: "flex-1 min-h-0 relative overflow-hidden panel-bg",
            children: t ? /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: x,
                style: {
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  overflow: "hidden"
                },
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    ref: v,
                    style: { transformOrigin: "top left" },
                    children: /* @__PURE__ */ r.jsx(
                      Cu,
                      {
                        mediaId: e,
                        src: t,
                        mediaType: s,
                        fileName: o
                      }
                    )
                  }
                )
              }
            ) : /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center h-full text-sm text-muted-foreground", children: "Loading media..." })
          }
        ),
        /* @__PURE__ */ r.jsx(
          u0,
          {
            durationInFrames: l,
            fps: u,
            mediaType: s,
            hasAudio: a,
            interactive: f,
            seekFrame: m
          }
        )
      ]
    }
  );
}
function u0({
  durationInFrames: e,
  fps: t,
  mediaType: s,
  hasAudio: a,
  interactive: o,
  seekFrame: i
}) {
  const c = ys(), l = nu(e), u = Oo(), d = Math.max(0, e - 1), f = Zt((ee) => ee.tracks), m = Vt((ee) => ee.activeTrackId), b = kt((ee) => ee.sourcePatchVideoEnabled), h = kt((ee) => ee.sourcePatchAudioEnabled), x = kt((ee) => ee.toggleSourcePatchVideoEnabled), v = kt((ee) => ee.toggleSourcePatchAudioEnabled), C = n.useRef(c.currentFrame), y = n.useRef(null), w = n.useRef(null), S = n.useRef(Xt.getState().outPoint), [R, O] = n.useState(!1), L = n.useRef(R);
  L.current = R;
  const I = Math.max(e.toString().length, 1), j = n.useCallback(
    (ee) => ee.toString().padStart(I, "0"),
    [I]
  ), P = n.useCallback(
    (ee) => L.current ? j(ee) : Un(ee, t),
    [t, j]
  ), F = n.useCallback((ee) => {
    if (C.current = ee, o && Xt.getState().setCurrentSourceFrame(ee), y.current) {
      const Ve = d > 0 ? ee / d * 100 : 0;
      y.current.style.width = `${Ve}%`;
    }
    w.current && (w.current.textContent = L.current ? j(ee) : Un(ee, t));
  }, [t, j, o, d]);
  n.useEffect(() => {
    if (!o) return;
    const ee = Xt.getState().setPlayerMethods;
    return ee({
      toggle: l.toggle,
      seek: l.seek,
      frameBack: l.frameBack,
      frameForward: l.frameForward,
      getDurationInFrames: () => e
    }), () => {
      Xt.getState().setPlayerMethods(null);
    };
  }, [e, o, l.toggle, l.seek, l.frameBack, l.frameForward]), n.useEffect(() => (F(c.currentFrame), c.onFrameChange((ee) => {
    F(ee), Me.current && c.isPlaying && S.current !== null && ee >= S.current && (l.pause(), Me.current = !1);
  })), [c, l, F]);
  const E = Xt((ee) => ee.pendingSeekFrame);
  n.useEffect(() => {
    o && E !== null && (l.seek(E), Xt.getState().setPendingSeekFrame(null));
  }, [o, E, l]), n.useEffect(() => {
    i !== null && l.seek(i);
  }, [l, i]);
  const T = Xt((ee) => ee.inPoint), N = Xt((ee) => ee.outPoint);
  n.useEffect(() => {
    S.current = N;
  }, [N]);
  const z = n.useRef(null), M = n.useRef(!1), Y = n.useRef(null), G = n.useRef(null), X = n.useCallback(
    (ee) => {
      const Ve = z.current;
      if (!Ve) return;
      const H = Ve.getBoundingClientRect(), ue = Math.max(0, Math.min(1, (ee - H.left) / H.width));
      l.seek(Math.round(ue * d));
    },
    [l, d]
  ), D = n.useCallback(
    (ee) => {
      ee.preventDefault(), ee.stopPropagation(), M.current = !0, X(ee.clientX);
      const Ve = (ue) => {
        M.current && X(ue.clientX);
      }, H = () => {
        M.current = !1, Y.current && (document.removeEventListener("mousemove", Y.current), Y.current = null), G.current && (document.removeEventListener("mouseup", G.current), G.current = null);
      };
      Y.current = Ve, G.current = H, document.addEventListener("mousemove", Ve), document.addEventListener("mouseup", H);
    },
    [X]
  );
  n.useEffect(() => () => {
    Y.current && (document.removeEventListener("mousemove", Y.current), Y.current = null), G.current && (document.removeEventListener("mouseup", G.current), G.current = null), M.current = !1;
  }, []);
  const W = o && T !== null && d > 0 ? T / d * 100 : null, q = o && N !== null && d > 0 ? N / d * 100 : null, pe = n.useRef(null), k = n.useRef(null), B = n.useCallback(
    (ee) => {
      const Ve = pe.current;
      if (!Ve) return 0;
      const H = Ve.getBoundingClientRect(), ue = Math.max(0, Math.min(1, (ee - H.left) / H.width));
      return Math.round(ue * d);
    },
    [d]
  ), U = n.useCallback(
    (ee, Ve) => {
      ee.preventDefault(), ee.stopPropagation();
      const H = document.body.style.cursor;
      document.body.style.cursor = "col-resize";
      const ue = Xt.getState, Ce = (ke) => {
        const _ = B(ke.clientX);
        if (Ve === "in") {
          const he = ue().outPoint;
          ue().setInPoint(he !== null ? Math.min(_, he) : _);
        } else {
          const he = ue().inPoint;
          ue().setOutPoint(he !== null ? Math.max(_, he) : _);
        }
      }, Ge = () => {
        document.body.style.cursor = H, document.removeEventListener("mousemove", Ce), document.removeEventListener("mouseup", Ge), k.current = null;
      };
      k.current = Ge, document.addEventListener("mousemove", Ce), document.addEventListener("mouseup", Ge);
    },
    [B]
  ), J = n.useCallback(
    (ee) => {
      ee.preventDefault(), ee.stopPropagation();
      const Ve = Xt.getState, H = Ve().inPoint, ue = Ve().outPoint;
      if (H === null || ue === null) return;
      const Ce = B(ee.clientX), Ge = document.body.style.cursor;
      document.body.style.cursor = "grabbing";
      const ke = (he) => {
        const qe = B(he.clientX) - Ce, $e = Math.max(0, Math.min(d, H + qe)), ct = Math.max(0, Math.min(d, ue + qe));
        $e > ct || (Ve().setInPoint($e), Ve().setOutPoint(ct));
      }, _ = () => {
        document.body.style.cursor = Ge, document.removeEventListener("mousemove", ke), document.removeEventListener("mouseup", _), k.current = null;
      };
      k.current = _, document.addEventListener("mousemove", ke), document.addEventListener("mouseup", _);
    },
    [B, d]
  );
  n.useEffect(() => () => k.current?.(), []);
  const re = o && T !== null && N !== null ? P(N - T) : null, me = n.useCallback(() => {
    Xt.getState().setInPoint(C.current);
  }, []), xe = n.useCallback(() => {
    Xt.getState().setOutPoint(C.current);
  }, []), ye = n.useCallback(() => {
    Xt.getState().clearInOutPoints();
  }, []), Me = n.useRef(!1);
  n.useEffect(() => {
    u || (Me.current = !1);
  }, [u]);
  const Be = n.useCallback(() => {
    const { inPoint: ee, outPoint: Ve } = Xt.getState();
    ee === null && Ve === null || (Me.current = !0, l.seek(ee ?? 0), l.play());
  }, [l]), Te = n.useMemo(
    () => m ? f.find((ee) => ee.id === m) ?? null : null,
    [m, f]
  ), De = n.useMemo(() => {
    if (!m || !Te)
      return {
        videoTargetName: null,
        audioTargetName: null,
        status: "Select target track"
      };
    if (Te.locked)
      return {
        videoTargetName: null,
        audioTargetName: null,
        status: "Target track locked"
      };
    const ee = xd({
      tracks: f,
      activeTrackId: m,
      mediaType: s,
      hasAudio: a,
      patchVideo: b,
      patchAudio: h,
      preferredTrackHeight: Te.height
    });
    if (!ee) {
      let H = "Enable V and/or A";
      return s === "audio" && !h ? H = "Enable A" : (s === "video" || s === "image") && !b && !a && (H = "Enable V"), {
        videoTargetName: null,
        audioTargetName: null,
        status: H
      };
    }
    const Ve = ee.tracks;
    return {
      videoTargetName: ee.videoTrackId ? Ve.find((H) => H.id === ee.videoTrackId)?.name ?? null : null,
      audioTargetName: ee.audioTrackId ? Ve.find((H) => H.id === ee.audioTrackId)?.name ?? null : null,
      status: null
    };
  }, [
    Te,
    m,
    a,
    s,
    h,
    b,
    f
  ]), Qe = De.videoTargetName ? `Video Source Patch On -> ${De.videoTargetName}` : b ? "Video Source Patch On" : "Video Source Patch Off", Ee = De.audioTargetName ? `Audio Source Patch On -> ${De.audioTargetName}` : h ? "Audio Source Patch On" : "Audio Source Patch Off";
  return /* @__PURE__ */ r.jsxs("div", { className: "@container flex flex-col shrink-0", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "border-t border-border panel-header flex items-center gap-2 px-4 h-7 shrink-0", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex-1 flex flex-col justify-center gap-[2px] min-w-0", children: [
        o && (W !== null || q !== null) && /* @__PURE__ */ r.jsxs("div", { ref: pe, className: "w-full h-2.5 relative shrink-0", children: [
          W !== null && q !== null && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "absolute inset-y-0 cursor-grab active:cursor-grabbing",
              style: {
                left: `${W}%`,
                width: `${Math.max(0.5, q - W)}%`,
                background: "linear-gradient(to bottom, var(--color-timeline-io-range-fill), color-mix(in oklch, var(--color-timeline-io-range-fill) 82%, black))",
                border: "1px solid var(--color-timeline-io-range-border)",
                borderRadius: "2px",
                boxShadow: "inset 0 1px 0 color-mix(in oklch, white 22%, transparent), 0 0 6px var(--color-timeline-io-range-glow)",
                zIndex: 10
              },
              onMouseDown: J
            }
          ),
          W !== null && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "absolute top-0 bottom-0",
              style: {
                left: `${W}%`,
                width: "5px",
                borderRadius: "2px",
                background: "linear-gradient(to bottom, var(--color-timeline-io-handle), color-mix(in oklch, var(--color-timeline-io-handle) 75%, black))",
                boxShadow: "0 0 5px color-mix(in oklch, var(--color-timeline-io-handle) 55%, transparent)",
                zIndex: 20,
                pointerEvents: "none"
              }
            }
          ),
          W !== null && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "absolute cursor-col-resize",
              style: {
                left: `calc(${W}% - 4px)`,
                top: 0,
                bottom: 0,
                width: "14px",
                zIndex: 21
              },
              onMouseDown: (ee) => U(ee, "in")
            }
          ),
          q !== null && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "absolute top-0 bottom-0",
              style: {
                left: `${q}%`,
                width: "5px",
                transform: "translateX(-100%)",
                borderRadius: "2px",
                background: "linear-gradient(to bottom, var(--color-timeline-io-handle), color-mix(in oklch, var(--color-timeline-io-handle) 75%, black))",
                boxShadow: "0 0 5px color-mix(in oklch, var(--color-timeline-io-handle) 55%, transparent)",
                zIndex: 20,
                pointerEvents: "none"
              }
            }
          ),
          q !== null && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "absolute cursor-col-resize",
              style: {
                left: `calc(${q}% - 10px)`,
                top: 0,
                bottom: 0,
                width: "14px",
                zIndex: 21
              },
              onMouseDown: (ee) => U(ee, "out")
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: z,
            className: "w-full h-1.5 bg-muted rounded cursor-pointer relative",
            onMouseDown: D,
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: y,
                className: "absolute inset-y-0 left-0 bg-primary transition-none pointer-events-none rounded-l",
                style: { width: `${d > 0 ? c.currentFrame / d * 100 : 0}%` }
              }
            )
          }
        )
      ] }),
      o && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
        /* @__PURE__ */ r.jsxs(ar, { children: [
          /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(
            be,
            {
              variant: "ghost",
              size: "icon",
              style: { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize },
              disabled: T === null && N === null,
              onClick: Be,
              children: /* @__PURE__ */ r.jsx(vf, { className: "w-3 h-3" })
            }
          ) }),
          /* @__PURE__ */ r.jsx(ir, { side: "top", children: "Play In to Out" })
        ] }),
        /* @__PURE__ */ r.jsxs(ar, { children: [
          /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize }, onClick: me, children: /* @__PURE__ */ r.jsx(yf, { className: "w-3 h-3" }) }) }),
          /* @__PURE__ */ r.jsx(ir, { side: "top", children: "Mark In (I)" })
        ] }),
        /* @__PURE__ */ r.jsxs(ar, { children: [
          /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize }, onClick: xe, children: /* @__PURE__ */ r.jsx(wf, { className: "w-3 h-3" }) }) }),
          /* @__PURE__ */ r.jsx(ir, { side: "top", children: "Mark Out (O)" })
        ] }),
        /* @__PURE__ */ r.jsxs(ar, { children: [
          /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize }, onClick: ye, children: /* @__PURE__ */ r.jsx(Sf, { className: "w-3 h-3" }) }) }),
          /* @__PURE__ */ r.jsx(ir, { side: "top", children: "Clear In/Out (Alt+X)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "border-t border-border panel-header flex items-center justify-between px-4 shrink-0",
        style: { height: Ye.previewControlsHeight },
        children: [
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              type: "button",
              className: "inline-flex items-center gap-1.5 bg-transparent p-0 font-mono text-[11px] tabular-nums text-left transition-colors select-none text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm shrink-0",
              onClick: () => O((ee) => !ee),
              children: [
                /* @__PURE__ */ r.jsx("span", { ref: w, className: "text-primary font-semibold", children: P(c.currentFrame) }),
                /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground/50", children: "/" }),
                /* @__PURE__ */ r.jsx("span", { children: P(d) })
              ]
            }
          ),
          /* @__PURE__ */ r.jsx("span", { className: "text-[11px] font-mono text-primary/70 shrink-0 hidden @min-[480px]:inline", children: re ? `[${re}]` : "" }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
            /* @__PURE__ */ r.jsxs(ar, { children: [
              /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize }, onClick: () => l.seek(0), children: /* @__PURE__ */ r.jsx(Ol, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ir, { side: "top", children: "Go to start (Home)" })
            ] }),
            /* @__PURE__ */ r.jsxs(ar, { children: [
              /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize }, onClick: () => l.frameBack(1), children: /* @__PURE__ */ r.jsx(ws, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ir, { side: "top", children: "Previous frame (←)" })
            ] }),
            /* @__PURE__ */ r.jsxs(ar, { children: [
              /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { size: "icon", style: { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize }, onClick: () => l.toggle(), children: u ? /* @__PURE__ */ r.jsx(_l, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(Ll, { className: "w-3.5 h-3.5 ml-0.5" }) }) }),
              /* @__PURE__ */ r.jsxs(ir, { side: "top", children: [
                u ? "Pause" : "Play",
                " (Space)"
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs(ar, { children: [
              /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize }, onClick: () => l.frameForward(1), children: /* @__PURE__ */ r.jsx(Ss, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ir, { side: "top", children: "Next frame (→)" })
            ] }),
            /* @__PURE__ */ r.jsxs(ar, { children: [
              /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize }, onClick: () => l.seek(d), children: /* @__PURE__ */ r.jsx(Bl, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ir, { side: "top", children: "Go to end (End)" })
            ] })
          ] }),
          o ? /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 rounded-md border border-border bg-secondary/50 px-1 py-0.5", children: [
                /* @__PURE__ */ r.jsxs(ar, { children: [
                  /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(
                    be,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: `h-6 min-w-6 px-1.5 font-mono text-[11px] ${b ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`,
                      onClick: x,
                      "aria-label": b ? "Disable video source patch target" : "Enable video source patch target",
                      "aria-pressed": b,
                      children: "V"
                    }
                  ) }),
                  /* @__PURE__ */ r.jsx(ir, { side: "top", children: Qe })
                ] }),
                /* @__PURE__ */ r.jsxs(ar, { children: [
                  /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(
                    be,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: `h-6 min-w-6 px-1.5 font-mono text-[11px] ${h ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`,
                      onClick: v,
                      "aria-label": h ? "Disable audio source patch target" : "Enable audio source patch target",
                      "aria-pressed": h,
                      children: "A"
                    }
                  ) }),
                  /* @__PURE__ */ r.jsx(ir, { side: "top", children: Ee })
                ] })
              ] }),
              De.status ? /* @__PURE__ */ r.jsx("span", { className: "text-[10px] font-mono text-muted-foreground whitespace-nowrap hidden @min-[560px]:inline", children: De.status }) : /* @__PURE__ */ r.jsxs("div", { className: "hidden @min-[560px]:flex items-center gap-1 text-[10px] font-mono text-muted-foreground whitespace-nowrap", children: [
                De.videoTargetName ? /* @__PURE__ */ r.jsxs("span", { className: "rounded border border-border/70 bg-secondary/60 px-1.5 py-0.5", children: [
                  "V->",
                  De.videoTargetName
                ] }) : null,
                De.audioTargetName ? /* @__PURE__ */ r.jsxs("span", { className: "rounded border border-border/70 bg-secondary/60 px-1.5 py-0.5", children: [
                  "A->",
                  De.audioTargetName
                ] }) : null
              ] })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "w-px h-4 bg-border mx-0.5" }),
            /* @__PURE__ */ r.jsxs(ar, { children: [
              /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize }, onClick: () => bd(), children: /* @__PURE__ */ r.jsx(Cf, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ir, { side: "top", children: "Insert (,)" })
            ] }),
            /* @__PURE__ */ r.jsxs(ar, { children: [
              /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: Ye.toolbarButtonSize, height: Ye.toolbarButtonSize }, onClick: () => vd(), children: /* @__PURE__ */ r.jsx(kf, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ir, { side: "top", children: "Overwrite (.)" })
            ] })
          ] }) : /* @__PURE__ */ r.jsx("div", { className: "w-[11ch] shrink-0", "aria-hidden": "true" })
        ]
      }
    )
  ] });
}
function d0({ frame: e }) {
  const t = ys();
  return n.useEffect(() => {
    t.seekToFrame(e ?? 0);
  }, [t, e]), null;
}
const f0 = n.memo(function({
  mediaId: t,
  seekFrame: s,
  containerSize: a
}) {
  const [o, i] = n.useState(""), c = lr((v) => v.mediaById[t]), l = ne((v) => v.zoom), u = c?.width || 640, d = c?.height || 360;
  n.useEffect(() => {
    let v = !1;
    return i(""), Cn(t).then((C) => {
      v || i(C);
    }).catch(() => {
    }), () => {
      v = !0;
    };
  }, [t]);
  const f = n.useMemo(() => {
    const v = u / d;
    if (l === -1) {
      if (a.width > 0 && a.height > 0) {
        if (a.width / a.height > v) {
          const w = a.height;
          return { width: w * v, height: w };
        }
        const y = a.width;
        return { width: y, height: y / v };
      }
      return { width: u, height: d };
    }
    return {
      width: u * l,
      height: d * l
    };
  }, [a.height, a.width, d, u, l]), m = n.useMemo(() => l === -1 || a.width === 0 || a.height === 0 ? !1 : f.width > a.width || f.height > a.height, [a.height, a.width, f.height, f.width, l]);
  if (!c)
    return /* @__PURE__ */ r.jsx("div", { className: "w-full h-full panel-bg flex items-center justify-center text-sm text-muted-foreground", children: "Loading media..." });
  const b = Ao(c.mimeType);
  if (b === "unknown")
    return null;
  const h = c.fps || 30, x = b === "image" ? 1 : Math.max(1, Math.round(c.duration * h));
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "w-full h-full panel-bg relative",
      style: { overflow: m ? "auto" : "visible" },
      "aria-label": "Inline media preview",
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "flex min-h-full w-full flex-col items-center justify-end",
          style: {
            paddingLeft: `calc(${Ye.previewPadding} / 2)`,
            paddingRight: `calc(${Ye.previewPadding} / 2)`,
            paddingBottom: 6
          },
          children: /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "relative shrink-0 overflow-hidden",
              style: {
                width: `${f.width}px`,
                height: `${f.height}px`,
                outline: "2px solid hsl(var(--border))",
                outlineOffset: 0
              },
              children: o ? /* @__PURE__ */ r.jsx(ba, { children: /* @__PURE__ */ r.jsx(
                da,
                {
                  fps: h,
                  durationInFrames: x,
                  initialFrame: s ?? 0,
                  onVolumeChange: () => {
                  },
                  children: /* @__PURE__ */ r.jsxs(
                    fa,
                    {
                      fps: h,
                      width: u,
                      height: d,
                      durationInFrames: x,
                      children: [
                        /* @__PURE__ */ r.jsx(d0, { frame: s }),
                        /* @__PURE__ */ r.jsx(
                          Cu,
                          {
                            mediaId: t,
                            src: o,
                            mediaType: b,
                            fileName: c.fileName
                          }
                        )
                      ]
                    }
                  )
                }
              ) }) : /* @__PURE__ */ r.jsx("div", { className: "w-full h-full flex items-center justify-center text-sm text-muted-foreground", children: "Loading media..." })
            }
          )
        }
      )
    }
  );
});
function m0({ frame: e }) {
  const t = ys();
  return n.useEffect(() => {
    t.seekToFrame(e ?? 0);
  }, [t, e]), null;
}
const h0 = n.memo(function({
  compositionId: t,
  seekFrame: s,
  containerSize: a
}) {
  const o = Ai((C) => C.compositionById[t]), i = Ai((C) => C.compositionById), c = ne((C) => C.zoom), [l, u] = n.useState(null), d = n.useMemo(
    () => o ? yd(o) : null,
    [o]
  );
  n.useEffect(() => {
    if (!o || !d) {
      u(null);
      return;
    }
    let C = !1;
    return u(null), (async () => {
      const w = wd(t, i);
      await Promise.all(w.map((R) => Cn(R)));
      const S = await Sd(d.tracks, { useProxy: !1 });
      C || u(S);
    })().catch(() => {
      C || u([]);
    }), () => {
      C = !0;
    };
  }, [o, i, t, d]);
  const f = o?.width || 640, m = o?.height || 360, b = Math.min(
    Math.max(1, o?.durationInFrames ?? 1) - 1,
    Math.max(0, s ?? 0)
  ), h = n.useMemo(() => {
    const C = f / m;
    if (c === -1) {
      if (a.width > 0 && a.height > 0) {
        if (a.width / a.height > C) {
          const S = a.height;
          return { width: S * C, height: S };
        }
        const w = a.width;
        return { width: w, height: w / C };
      }
      return { width: f, height: m };
    }
    return {
      width: f * c,
      height: m * c
    };
  }, [m, f, a.height, a.width, c]), x = n.useMemo(() => c === -1 || a.width === 0 || a.height === 0 ? !1 : h.width > a.width || h.height > a.height, [a.height, a.width, h.height, h.width, c]);
  if (!o || !d)
    return /* @__PURE__ */ r.jsx("div", { className: "w-full h-full panel-bg flex items-center justify-center text-sm text-muted-foreground", children: "Loading compound clip..." });
  const v = Math.max(1, o.durationInFrames);
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "w-full h-full panel-bg relative",
      style: { overflow: x ? "auto" : "visible" },
      "aria-label": "Inline compound clip preview",
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "flex min-h-full w-full flex-col items-center justify-end",
          style: {
            paddingLeft: `calc(${Ye.previewPadding} / 2)`,
            paddingRight: `calc(${Ye.previewPadding} / 2)`,
            paddingBottom: 6
          },
          children: /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "relative shrink-0 overflow-hidden",
              style: {
                width: `${h.width}px`,
                height: `${h.height}px`,
                outline: "2px solid hsl(var(--border))",
                outlineOffset: 0
              },
              children: l ? /* @__PURE__ */ r.jsx(ba, { children: /* @__PURE__ */ r.jsx(
                da,
                {
                  fps: o.fps,
                  durationInFrames: v,
                  initialFrame: b,
                  onVolumeChange: () => {
                  },
                  children: /* @__PURE__ */ r.jsxs(
                    fa,
                    {
                      fps: o.fps,
                      width: o.width,
                      height: o.height,
                      durationInFrames: v,
                      children: [
                        /* @__PURE__ */ r.jsx(m0, { frame: b }),
                        /* @__PURE__ */ r.jsx(
                          Sl,
                          {
                            ...d,
                            tracks: l
                          }
                        )
                      ]
                    }
                  )
                }
              ) }) : /* @__PURE__ */ r.jsx("div", { className: "w-full h-full flex items-center justify-center text-sm text-muted-foreground", children: "Loading compound clip..." })
            }
          )
        }
      )
    }
  );
}), p0 = (
  /* wgsl */
  `
struct Params {
  srcW: u32,
  srcH: u32,
  _pad0: u32,
  _pad1: u32,
  kr: f32,
  kb: f32,
  rangeMin: f32,
  rangeMax: f32,
}

@group(0) @binding(0) var inputTex: texture_2d<f32>;
@group(0) @binding(1) var<storage, read_write> histR: array<atomic<u32>>;
@group(0) @binding(2) var<storage, read_write> histG: array<atomic<u32>>;
@group(0) @binding(3) var<storage, read_write> histB: array<atomic<u32>>;
@group(0) @binding(4) var<storage, read_write> histL: array<atomic<u32>>;
@group(0) @binding(5) var<uniform> params: Params;

fn normRange(v: f32, rMin: f32, rMax: f32) -> f32 {
  return clamp((v - rMin) / max(rMax - rMin, 0.001), 0.0, 1.0);
}

@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= params.srcW || gid.y >= params.srcH) { return; }
  let pixel = textureLoad(inputTex, vec2i(gid.xy), 0);
  let rn = normRange(pixel.r, params.rangeMin, params.rangeMax);
  let gn = normRange(pixel.g, params.rangeMin, params.rangeMax);
  let bn = normRange(pixel.b, params.rangeMin, params.rangeMax);
  let r = min(u32(rn * 255.0), 255u);
  let g = min(u32(gn * 255.0), 255u);
  let b = min(u32(bn * 255.0), 255u);
  let kg = 1.0 - params.kr - params.kb;
  let luma = normRange(params.kr * pixel.r + kg * pixel.g + params.kb * pixel.b, params.rangeMin, params.rangeMax);
  let l = min(u32(luma * 255.0), 255u);
  atomicAdd(&histR[r], 1u);
  atomicAdd(&histG[g], 1u);
  atomicAdd(&histB[b], 1u);
  atomicAdd(&histL[l], 1u);
}
`
), g0 = (
  /* wgsl */
  `
struct VertexOutput { @builtin(position) pos: vec4f, @location(0) uv: vec2f }

@vertex
fn vs(@builtin(vertex_index) vid: u32) -> VertexOutput {
  var p = array<vec2f, 3>(vec2f(-1,-1), vec2f(3,-1), vec2f(-1,3));
  var out: VertexOutput;
  out.pos = vec4f(p[vid], 0, 1);
  out.uv = vec2f((p[vid].x + 1.0) * 0.5, (1.0 - p[vid].y) * 0.5);
  return out;
}

struct Params {
  totalPixels: f32,
  mode: f32,
  _pad1: f32,
  _pad2: f32,
}

@group(0) @binding(0) var<storage, read> histR: array<u32>;
@group(0) @binding(1) var<storage, read> histG: array<u32>;
@group(0) @binding(2) var<storage, read> histB: array<u32>;
@group(0) @binding(3) var<storage, read> histL: array<u32>;
@group(0) @binding(4) var<uniform> params: Params;

fn sampleHist(hist: ptr<storage, array<u32>, read>, fx: f32) -> f32 {
  let b0 = u32(clamp(fx, 0.0, 255.0));
  let b1 = min(b0 + 1u, 255u);
  let t = fract(fx);
  return mix(f32((*hist)[b0]), f32((*hist)[b1]), t);
}

@fragment
fn fs(in: VertexOutput) -> @location(0) vec4f {
  let uv = in.uv;
  if (uv.x < 0.0 || uv.x >= 1.0 || uv.y < 0.0 || uv.y >= 1.0) {
    return vec4f(0.04, 0.04, 0.04, 1.0);
  }

  let mode = u32(params.mode);
  let fx = uv.x * 255.0;
  let rVal = sampleHist(&histR, fx);
  let gVal = sampleHist(&histG, fx);
  let bVal = sampleHist(&histB, fx);
  let lVal = sampleHist(&histL, fx);

  let scale = 1.0 / sqrt(params.totalPixels * 0.08);
  let rH = sqrt(rVal) * scale;
  let gH = sqrt(gVal) * scale;
  let bH = sqrt(bVal) * scale;
  let lH = sqrt(lVal) * scale;

  let y = 1.0 - uv.y;
  let aaW = 0.004;
  var color = vec3f(0.0);

  if (mode == 0u) {
    let lFill = smoothstep(lH, lH - aaW, y);
    let rFill = smoothstep(rH, rH - aaW, y);
    let gFill = smoothstep(gH, gH - aaW, y);
    let bFill = smoothstep(bH, bH - aaW, y);
    let rGrad = 0.35 + 0.35 * (y / max(rH, 0.001));
    let gGrad = 0.35 + 0.35 * (y / max(gH, 0.001));
    let bGrad = 0.35 + 0.35 * (y / max(bH, 0.001));
    color += vec3f(0.08) * lFill;
    color += vec3f(rGrad, 0.05, 0.05) * rFill;
    color += vec3f(0.05, gGrad, 0.05) * gFill;
    color += vec3f(0.05, 0.05, bGrad) * bFill;
  } else if (mode == 1u) {
    let fill = smoothstep(rH, rH - aaW, y);
    let grad = 0.3 + 0.5 * (y / max(rH, 0.001));
    color = vec3f(grad, 0.08, 0.08) * fill;
  } else if (mode == 2u) {
    let fill = smoothstep(gH, gH - aaW, y);
    let grad = 0.3 + 0.5 * (y / max(gH, 0.001));
    color = vec3f(0.08, grad, 0.08) * fill;
  } else if (mode == 3u) {
    let fill = smoothstep(bH, bH - aaW, y);
    let grad = 0.3 + 0.5 * (y / max(bH, 0.001));
    color = vec3f(0.08, 0.08, grad) * fill;
  } else {
    let fill = smoothstep(lH, lH - aaW, y);
    let grad = 0.3 + 0.4 * (y / max(lH, 0.001));
    color = vec3f(grad) * fill;
  }

  let edgeW = 0.006;
  if (mode == 0u) {
    let rEdge = smoothstep(edgeW, 0.0, abs(y - rH)) * step(y, rH + edgeW);
    let gEdge = smoothstep(edgeW, 0.0, abs(y - gH)) * step(y, gH + edgeW);
    let bEdge = smoothstep(edgeW, 0.0, abs(y - bH)) * step(y, bH + edgeW);
    color += vec3f(0.6, 0.12, 0.12) * rEdge;
    color += vec3f(0.12, 0.55, 0.12) * gEdge;
    color += vec3f(0.12, 0.12, 0.6) * bEdge;
  } else if (mode == 1u) {
    let e = smoothstep(edgeW, 0.0, abs(y - rH)) * step(y, rH + edgeW);
    color += vec3f(0.7, 0.18, 0.18) * e;
  } else if (mode == 2u) {
    let e = smoothstep(edgeW, 0.0, abs(y - gH)) * step(y, gH + edgeW);
    color += vec3f(0.18, 0.65, 0.18) * e;
  } else if (mode == 3u) {
    let e = smoothstep(edgeW, 0.0, abs(y - bH)) * step(y, bH + edgeW);
    color += vec3f(0.18, 0.18, 0.7) * e;
  } else {
    let e = smoothstep(edgeW, 0.0, abs(y - lH)) * step(y, lH + edgeW);
    color += vec3f(0.6) * e;
  }

  let gridBins = array<f32, 3>(64.0, 128.0, 192.0);
  for (var i = 0u; i < 3u; i += 1u) {
    let gx = gridBins[i] / 256.0;
    let gAA = smoothstep(0.003, 0.001, abs(uv.x - gx));
    color = max(color, vec3f(0.10) * gAA);
  }
  for (var i = 1u; i < 4u; i += 1u) {
    let gy = f32(i) * 0.25;
    let hAA = smoothstep(0.004, 0.001, abs(y - gy));
    color = max(color, vec3f(0.07) * hAA);
  }

  return vec4f(clamp(color, vec3f(0.0), vec3f(1.0)), 1.0);
}
`
);
class x0 {
  device;
  computePipeline;
  renderPipeline;
  computeBGL;
  renderBGL;
  histR;
  histG;
  histB;
  histL;
  computeParams;
  renderParams;
  constructor(t, s) {
    this.device = t;
    const a = 256 * 4;
    this.histR = t.createBuffer({ size: a, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), this.histG = t.createBuffer({ size: a, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), this.histB = t.createBuffer({ size: a, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), this.histL = t.createBuffer({ size: a, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), this.computeParams = t.createBuffer({ size: 32, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), this.renderParams = t.createBuffer({ size: 16, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), this.computeBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.COMPUTE, texture: { sampleType: "float" } },
        { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
        { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
        { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
        { binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
        { binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: "uniform" } }
      ]
    }), this.computePipeline = t.createComputePipeline({
      layout: t.createPipelineLayout({ bindGroupLayouts: [this.computeBGL] }),
      compute: { module: t.createShaderModule({ code: p0 }), entryPoint: "main" }
    }), this.renderBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 4, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "uniform" } }
      ]
    });
    const o = t.createShaderModule({ code: g0 });
    this.renderPipeline = t.createRenderPipeline({
      layout: t.createPipelineLayout({ bindGroupLayouts: [this.renderBGL] }),
      vertex: { module: o, entryPoint: "vs" },
      fragment: { module: o, entryPoint: "fs", targets: [{ format: s }] }
    });
  }
  render(t, s, a, o, i, c, l) {
    const u = this.device, d = t.width, f = t.height, m = new ArrayBuffer(32);
    new Uint32Array(m, 0, 4).set([d, f, 0, 0]), new Float32Array(m, 16, 4).set([o, i, c, l]), u.queue.writeBuffer(this.computeParams, 0, m), u.queue.writeBuffer(this.renderParams, 0, new Float32Array([d * f, a, 0, 0]));
    const b = u.createCommandEncoder();
    b.clearBuffer(this.histR), b.clearBuffer(this.histG), b.clearBuffer(this.histB), b.clearBuffer(this.histL);
    const h = u.createBindGroup({
      layout: this.computeBGL,
      entries: [
        { binding: 0, resource: t.createView() },
        { binding: 1, resource: { buffer: this.histR } },
        { binding: 2, resource: { buffer: this.histG } },
        { binding: 3, resource: { buffer: this.histB } },
        { binding: 4, resource: { buffer: this.histL } },
        { binding: 5, resource: { buffer: this.computeParams } }
      ]
    }), x = b.beginComputePass();
    x.setPipeline(this.computePipeline), x.setBindGroup(0, h), x.dispatchWorkgroups(Math.ceil(d / 16), Math.ceil(f / 16)), x.end();
    const v = u.createBindGroup({
      layout: this.renderBGL,
      entries: [
        { binding: 0, resource: { buffer: this.histR } },
        { binding: 1, resource: { buffer: this.histG } },
        { binding: 2, resource: { buffer: this.histB } },
        { binding: 3, resource: { buffer: this.histL } },
        { binding: 4, resource: { buffer: this.renderParams } }
      ]
    }), C = b.beginRenderPass({
      colorAttachments: [{
        view: s.getCurrentTexture().createView(),
        loadOp: "clear",
        storeOp: "store",
        clearValue: { r: 0.04, g: 0.04, b: 0.04, a: 1 }
      }]
    });
    C.setPipeline(this.renderPipeline), C.setBindGroup(0, v), C.draw(3), C.end(), u.queue.submit([b.finish()]);
  }
  destroy() {
    for (const t of [this.histR, this.histG, this.histB, this.histL, this.computeParams, this.renderParams])
      t?.destroy();
  }
}
const b0 = (
  /* wgsl */
  `
struct Params {
  outW: u32,
  outH: u32,
  srcW: u32,
  srcH: u32,
  kr: f32,
  kb: f32,
  rangeMin: f32,
  rangeMax: f32,
}

@group(0) @binding(0) var inputTex: texture_2d<f32>;
@group(0) @binding(1) var<storage, read_write> accumR: array<atomic<u32>>;
@group(0) @binding(2) var<storage, read_write> accumG: array<atomic<u32>>;
@group(0) @binding(3) var<storage, read_write> accumB: array<atomic<u32>>;
@group(0) @binding(4) var<uniform> params: Params;
@group(0) @binding(5) var<storage, read_write> accumL: array<atomic<u32>>;

fn normRange(v: f32, rMin: f32, rMax: f32) -> f32 {
  return clamp((v - rMin) / max(rMax - rMin, 0.001), 0.0, 1.0);
}

@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= params.srcW || gid.y >= params.srcH) { return; }

  let pixel = textureLoad(inputTex, vec2i(gid.xy), 0);

  // Sub-pixel X: distribute weight across 2 adjacent columns (scale 256)
  let fxPos = f32(gid.x) * f32(params.outW) / f32(params.srcW);
  let x0 = u32(fxPos);
  let x1 = min(x0 + 1u, params.outW - 1u);
  let frac = fxPos - f32(x0);
  let w0 = u32((1.0 - frac) * 256.0);
  let w1 = 256u - w0;

  let hm1 = f32(params.outH - 1u);
  let maxY = i32(params.outH - 1u);

  // Gaussian vertical spread kernel — 5 rows for smooth traces
  let gK = array<f32, 5>(0.06, 0.24, 0.40, 0.24, 0.06);

  // Range-normalized channel values
  let rn = normRange(pixel.r, params.rangeMin, params.rangeMax);
  let gn = normRange(pixel.g, params.rangeMin, params.rangeMax);
  let bn = normRange(pixel.b, params.rangeMin, params.rangeMax);
  let kg = 1.0 - params.kr - params.kb;
  let ln = normRange(params.kr * pixel.r + kg * pixel.g + params.kb * pixel.b, params.rangeMin, params.rangeMax);

  // Red
  let ryC = i32(hm1 - clamp(rn, 0.0, 1.0) * hm1);
  for (var d: i32 = -2; d <= 2; d += 1) {
    let y = u32(clamp(ryC + d, 0, maxY));
    let yw = gK[u32(d + 2)];
    let idx = y * params.outW;
    let wA = u32(f32(w0) * yw);
    let wB = u32(f32(w1) * yw);
    if (wA > 0u) { atomicAdd(&accumR[idx + x0], wA); }
    if (wB > 0u) { atomicAdd(&accumR[idx + x1], wB); }
  }

  // Green
  let gyC = i32(hm1 - clamp(gn, 0.0, 1.0) * hm1);
  for (var d: i32 = -2; d <= 2; d += 1) {
    let y = u32(clamp(gyC + d, 0, maxY));
    let yw = gK[u32(d + 2)];
    let idx = y * params.outW;
    let wA = u32(f32(w0) * yw);
    let wB = u32(f32(w1) * yw);
    if (wA > 0u) { atomicAdd(&accumG[idx + x0], wA); }
    if (wB > 0u) { atomicAdd(&accumG[idx + x1], wB); }
  }

  // Blue
  let byC = i32(hm1 - clamp(bn, 0.0, 1.0) * hm1);
  for (var d: i32 = -2; d <= 2; d += 1) {
    let y = u32(clamp(byC + d, 0, maxY));
    let yw = gK[u32(d + 2)];
    let idx = y * params.outW;
    let wA = u32(f32(w0) * yw);
    let wB = u32(f32(w1) * yw);
    if (wA > 0u) { atomicAdd(&accumB[idx + x0], wA); }
    if (wB > 0u) { atomicAdd(&accumB[idx + x1], wB); }
  }

  // Luma
  let lyC = i32(hm1 - clamp(ln, 0.0, 1.0) * hm1);
  for (var d: i32 = -2; d <= 2; d += 1) {
    let y = u32(clamp(lyC + d, 0, maxY));
    let yw = gK[u32(d + 2)];
    let idx = y * params.outW;
    let wA = u32(f32(w0) * yw);
    let wB = u32(f32(w1) * yw);
    if (wA > 0u) { atomicAdd(&accumL[idx + x0], wA); }
    if (wB > 0u) { atomicAdd(&accumL[idx + x1], wB); }
  }
}
`
), v0 = (
  /* wgsl */
  `
struct VertexOutput {
  @builtin(position) pos: vec4f,
  @location(0) uv: vec2f,
}

@vertex
fn vs(@builtin(vertex_index) vid: u32) -> VertexOutput {
  var p = array<vec2f, 3>(vec2f(-1,-1), vec2f(3,-1), vec2f(-1,3));
  var out: VertexOutput;
  out.pos = vec4f(p[vid], 0, 1);
  out.uv = vec2f((p[vid].x + 1.0) * 0.5, (1.0 - p[vid].y) * 0.5);
  return out;
}

struct RenderParams {
  outW: f32,
  outH: f32,
  refValue: f32,
  intensity: f32,
  mode: u32,
  _pad0: u32,
  _pad1: u32,
  _pad2: u32,
}

@group(0) @binding(0) var<storage, read> accumR: array<u32>;
@group(0) @binding(1) var<storage, read> accumG: array<u32>;
@group(0) @binding(2) var<storage, read> accumB: array<u32>;
@group(0) @binding(3) var<uniform> params: RenderParams;
@group(0) @binding(4) var<storage, read> accumL: array<u32>;

fn sampleAccum(acc: ptr<storage, array<u32>, read>, fx: f32, fy: f32, w: u32, h: u32) -> f32 {
  let x0 = u32(clamp(fx, 0.0, f32(w - 1u)));
  let y0 = u32(clamp(fy, 0.0, f32(h - 1u)));
  let x1 = min(x0 + 1u, w - 1u);
  let y1 = min(y0 + 1u, h - 1u);
  let dx = fract(fx);
  let dy = fract(fy);
  let v00 = f32((*acc)[y0 * w + x0]);
  let v10 = f32((*acc)[y0 * w + x1]);
  let v01 = f32((*acc)[y1 * w + x0]);
  let v11 = f32((*acc)[y1 * w + x1]);
  return mix(mix(v00, v10, dx), mix(v01, v11, dx), dy);
}

fn readAccum(acc: ptr<storage, array<u32>, read>, x: i32, y: i32, w: i32, h: i32) -> f32 {
  return f32((*acc)[u32(clamp(y, 0, h - 1)) * u32(w) + u32(clamp(x, 0, w - 1))]);
}

fn bloomSingle(acc: ptr<storage, array<u32>, read>, ix: i32, iy: i32, w: i32, h: i32) -> f32 {
  let bK = array<f32, 3>(0.25, 0.50, 0.25);
  var total = 0.0;
  for (var dy: i32 = -1; dy <= 1; dy += 1) {
    for (var dx: i32 = -1; dx <= 1; dx += 1) {
      total += readAccum(acc, ix + dx * 4, iy + dy * 4, w, h) * bK[u32(dx + 1)] * bK[u32(dy + 1)];
    }
  }
  return total;
}

@fragment
fn fs(in: VertexOutput) -> @location(0) vec4f {
  let uv = in.uv;
  if (uv.x < 0.0 || uv.x >= 1.0 || uv.y < 0.0 || uv.y >= 1.0) {
    return vec4f(0.04, 0.04, 0.04, 1.0);
  }

  let w = u32(params.outW);
  let h = u32(params.outH);
  let iw = i32(w);
  let ih = i32(h);
  let mode = params.mode;
  let rv = params.refValue;
  let s = params.intensity;

  var color: vec3f;

  if (mode == 5u) {
    // Parade mode: R | G | B side by side
    let section = min(u32(uv.x * 3.0), 2u);
    let localX = fract(uv.x * 3.0);
    let pfx = localX * params.outW - 0.5;
    let pfy = uv.y * params.outH - 0.5;
    let pix = i32(pfx + 0.5);
    let piy = i32(pfy + 0.5);

    var cv: f32;
    var bv: f32;

    if (section == 0u) {
      cv = sampleAccum(&accumR, pfx, pfy, w, h);
      bv = bloomSingle(&accumR, pix, piy, iw, ih);
    } else if (section == 1u) {
      cv = sampleAccum(&accumG, pfx, pfy, w, h);
      bv = bloomSingle(&accumG, pix, piy, iw, ih);
    } else {
      cv = sampleAccum(&accumB, pfx, pfy, w, h);
      bv = bloomSingle(&accumB, pix, piy, iw, ih);
    }

    let vT = pow(clamp(sqrt(cv) / rv, 0.0, 1.0), 0.75) * s;
    let vG = pow(clamp(sqrt(bv) / rv, 0.0, 1.0), 0.65) * 0.12;
    let v = clamp(vT + vG, 0.0, 1.0);

    if (section == 0u) {
      color = vec3f(v, v * 0.15, v * 0.15);
    } else if (section == 1u) {
      color = vec3f(v * 0.15, v, v * 0.15);
    } else {
      color = vec3f(v * 0.15, v * 0.15, v);
    }

    // Section dividers (anti-aliased)
    let divW = 2.0 / params.outW;
    let d1 = smoothstep(divW, 0.0, abs(uv.x - 1.0 / 3.0));
    let d2 = smoothstep(divW, 0.0, abs(uv.x - 2.0 / 3.0));
    color = max(color, vec3f(0.18) * max(d1, d2));
  } else {
    // Standard waveform modes (0=RGB, 1=R, 2=G, 3=B, 4=Luma)
    let fx = uv.x * params.outW - 0.5;
    let fy = uv.y * params.outH - 0.5;

    let rCenter = sampleAccum(&accumR, fx, fy, w, h);
    let gCenter = sampleAccum(&accumG, fx, fy, w, h);
    let bCenter = sampleAccum(&accumB, fx, fy, w, h);
    let lCenter = sampleAccum(&accumL, fx, fy, w, h);

    let ix = i32(fx + 0.5);
    let iy = i32(fy + 0.5);
    let rBloom = bloomSingle(&accumR, ix, iy, iw, ih);
    let gBloom = bloomSingle(&accumG, ix, iy, iw, ih);
    let bBloom = bloomSingle(&accumB, ix, iy, iw, ih);
    let lBloom = bloomSingle(&accumL, ix, iy, iw, ih);

    let rT = pow(clamp(sqrt(rCenter) / rv, 0.0, 1.0), 0.75) * s;
    let gT = pow(clamp(sqrt(gCenter) / rv, 0.0, 1.0), 0.75) * s;
    let bT = pow(clamp(sqrt(bCenter) / rv, 0.0, 1.0), 0.75) * s;
    let lT = pow(clamp(sqrt(lCenter) / rv, 0.0, 1.0), 0.75) * s;

    let rG = pow(clamp(sqrt(rBloom) / rv, 0.0, 1.0), 0.65) * 0.12;
    let gG = pow(clamp(sqrt(gBloom) / rv, 0.0, 1.0), 0.65) * 0.12;
    let bG = pow(clamp(sqrt(bBloom) / rv, 0.0, 1.0), 0.65) * 0.12;
    let lG = pow(clamp(sqrt(lBloom) / rv, 0.0, 1.0), 0.65) * 0.12;

    if (mode == 0u) {
      color = clamp(vec3f(rT + rG, gT + gG, bT + bG), vec3f(0.0), vec3f(1.0));
    } else if (mode == 1u) {
      let v = clamp(rT + rG, 0.0, 1.0);
      color = vec3f(v, v * 0.15, v * 0.15);
    } else if (mode == 2u) {
      let v = clamp(gT + gG, 0.0, 1.0);
      color = vec3f(v * 0.15, v, v * 0.15);
    } else if (mode == 3u) {
      let v = clamp(bT + bG, 0.0, 1.0);
      color = vec3f(v * 0.15, v * 0.15, v);
    } else {
      let v = clamp(lT + lG, 0.0, 1.0);
      color = vec3f(v);
    }
  }

  // Grid: every 10 IRE (10% of height)
  let gridY = fract(uv.y * 10.0);
  let dGrid = min(gridY, 1.0 - gridY) * params.outH * 0.5;
  if (dGrid < 0.8) {
    let a = 0.15 * (1.0 - dGrid / 0.8);
    color = max(color, vec3f(0.55, 0.45, 0.12) * a);
  }

  return vec4f(color, 1.0);
}
`
), io = 1024, qs = 512;
class y0 {
  device;
  computePipeline;
  renderPipeline;
  computeBGL;
  renderBGL;
  accumR;
  accumG;
  accumB;
  accumL;
  computeParams;
  renderParams;
  constructor(t, s) {
    this.device = t;
    const a = io * qs * 4;
    this.accumR = t.createBuffer({ size: a, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), this.accumG = t.createBuffer({ size: a, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), this.accumB = t.createBuffer({ size: a, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), this.accumL = t.createBuffer({ size: a, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), this.computeParams = t.createBuffer({ size: 32, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), this.renderParams = t.createBuffer({ size: 32, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), this.computeBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.COMPUTE, texture: { sampleType: "float" } },
        { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
        { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
        { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
        { binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: "uniform" } },
        { binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } }
      ]
    }), this.computePipeline = t.createComputePipeline({
      layout: t.createPipelineLayout({ bindGroupLayouts: [this.computeBGL] }),
      compute: { module: t.createShaderModule({ code: b0 }), entryPoint: "main" }
    }), this.renderBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "uniform" } },
        { binding: 4, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } }
      ]
    });
    const o = t.createShaderModule({ code: v0 });
    this.renderPipeline = t.createRenderPipeline({
      layout: t.createPipelineLayout({ bindGroupLayouts: [this.renderBGL] }),
      vertex: { module: o, entryPoint: "vs" },
      fragment: { module: o, entryPoint: "fs", targets: [{ format: s }] }
    });
  }
  accumulate(t, s, a, o, i) {
    const c = this.device, l = t.width, u = t.height, d = new ArrayBuffer(32);
    new Uint32Array(d, 0, 4).set([io, qs, l, u]), new Float32Array(d, 16, 4).set([s, a, o, i]), c.queue.writeBuffer(this.computeParams, 0, d);
    const f = c.createCommandEncoder();
    f.clearBuffer(this.accumR), f.clearBuffer(this.accumG), f.clearBuffer(this.accumB), f.clearBuffer(this.accumL);
    const m = c.createBindGroup({
      layout: this.computeBGL,
      entries: [
        { binding: 0, resource: t.createView() },
        { binding: 1, resource: { buffer: this.accumR } },
        { binding: 2, resource: { buffer: this.accumG } },
        { binding: 3, resource: { buffer: this.accumB } },
        { binding: 4, resource: { buffer: this.computeParams } },
        { binding: 5, resource: { buffer: this.accumL } }
      ]
    }), b = f.beginComputePass();
    return b.setPipeline(this.computePipeline), b.setBindGroup(0, m), b.dispatchWorkgroups(Math.ceil(l / 16), Math.ceil(u / 16)), b.end(), c.queue.submit([f.finish()]), u;
  }
  renderAccumulated(t, s, a) {
    const o = this.device, i = Math.sqrt(a / qs) * 40, c = new ArrayBuffer(32);
    new Float32Array(c, 0, 4).set([io, qs, i, 0.9]), new Uint32Array(c, 16, 4).set([s, 0, 0, 0]), o.queue.writeBuffer(this.renderParams, 0, c);
    const l = o.createBindGroup({
      layout: this.renderBGL,
      entries: [
        { binding: 0, resource: { buffer: this.accumR } },
        { binding: 1, resource: { buffer: this.accumG } },
        { binding: 2, resource: { buffer: this.accumB } },
        { binding: 3, resource: { buffer: this.renderParams } },
        { binding: 4, resource: { buffer: this.accumL } }
      ]
    }), u = o.createCommandEncoder(), d = u.beginRenderPass({
      colorAttachments: [{
        view: t.getCurrentTexture().createView(),
        loadOp: "clear",
        storeOp: "store",
        clearValue: { r: 0.04, g: 0.04, b: 0.04, a: 1 }
      }]
    });
    d.setPipeline(this.renderPipeline), d.setBindGroup(0, l), d.draw(3), d.end(), o.queue.submit([u.finish()]);
  }
  render(t, s, a, o, i, c, l) {
    this.renderBatch(t, [{ ctx: s, mode: a }], o, i, c, l);
  }
  renderBatch(t, s, a, o, i, c) {
    if (s.length === 0) return;
    const l = this.accumulate(t, a, o, i, c);
    for (const { ctx: u, mode: d } of s)
      this.renderAccumulated(u, d, l);
  }
  destroy() {
    for (const t of [this.accumR, this.accumG, this.accumB, this.accumL, this.computeParams, this.renderParams])
      t?.destroy();
  }
}
const w0 = (
  /* wgsl */
  `
struct Params {
  outSize: u32,
  srcW: u32,
  srcH: u32,
  _pad: u32,
  kr: f32,
  kb: f32,
  _pad2: f32,
  _pad3: f32,
}

@group(0) @binding(0) var inputTex: texture_2d<f32>;
@group(0) @binding(1) var<storage, read_write> accumR: array<atomic<u32>>;
@group(0) @binding(2) var<storage, read_write> accumG: array<atomic<u32>>;
@group(0) @binding(3) var<storage, read_write> accumB: array<atomic<u32>>;
@group(0) @binding(4) var<uniform> params: Params;

@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= params.srcW || gid.y >= params.srcH) { return; }
  let pixel = textureLoad(inputTex, vec2i(gid.xy), 0);

  let r = pixel.r;
  let g = pixel.g;
  let b = pixel.b;
  let kg = 1.0 - params.kr - params.kb;

  // Y'CbCr from configurable matrix coefficients
  let y = params.kr * r + kg * g + params.kb * b;
  let cb = (b - y) / (2.0 * (1.0 - params.kb));
  let cr = (r - y) / (2.0 * (1.0 - params.kr));

  let center = f32(params.outSize) * 0.5;
  let scale = center * 0.92;
  // Cb/Cr are in [-0.5, 0.5], map to pixel coordinates
  let px = u32(clamp(center + cb * 2.0 * scale, 0.0, f32(params.outSize - 1u)));
  let py = u32(clamp(center - cr * 2.0 * scale, 0.0, f32(params.outSize - 1u)));

  let idx = py * params.outSize + px;
  // Accumulate raw pixel color scaled to [1, 255] for visible contribution
  atomicAdd(&accumR[idx], u32(max(r * 255.0, 1.0)));
  atomicAdd(&accumG[idx], u32(max(g * 255.0, 1.0)));
  atomicAdd(&accumB[idx], u32(max(b * 255.0, 1.0)));
}
`
), S0 = (
  /* wgsl */
  `
struct VertexOutput { @builtin(position) pos: vec4f, @location(0) uv: vec2f }

@vertex
fn vs(@builtin(vertex_index) vid: u32) -> VertexOutput {
  var p = array<vec2f, 3>(vec2f(-1,-1), vec2f(3,-1), vec2f(-1,3));
  var out: VertexOutput;
  out.pos = vec4f(p[vid], 0, 1);
  out.uv = vec2f((p[vid].x + 1.0) * 0.5, (1.0 - p[vid].y) * 0.5);
  return out;
}

struct Params { outSize: f32, refValue: f32, _p0: f32, _p1: f32 }

@group(0) @binding(0) var<storage, read> accumR: array<u32>;
@group(0) @binding(1) var<storage, read> accumG: array<u32>;
@group(0) @binding(2) var<storage, read> accumB: array<u32>;
@group(0) @binding(3) var<uniform> params: Params;

fn sampleVS(acc: ptr<storage, array<u32>, read>, fx: f32, fy: f32, sz: u32) -> f32 {
  let x0 = u32(clamp(fx, 0.0, f32(sz - 1u)));
  let y0 = u32(clamp(fy, 0.0, f32(sz - 1u)));
  let x1 = min(x0 + 1u, sz - 1u);
  let y1 = min(y0 + 1u, sz - 1u);
  let dx = fract(fx);
  let dy = fract(fy);
  let v00 = f32((*acc)[y0 * sz + x0]);
  let v10 = f32((*acc)[y0 * sz + x1]);
  let v01 = f32((*acc)[y1 * sz + x0]);
  let v11 = f32((*acc)[y1 * sz + x1]);
  return mix(mix(v00, v10, dx), mix(v01, v11, dx), dy);
}

fn readVS(acc: ptr<storage, array<u32>, read>, x: i32, y: i32, sz: i32) -> f32 {
  return f32((*acc)[u32(clamp(y, 0, sz - 1)) * u32(sz) + u32(clamp(x, 0, sz - 1))]);
}

@fragment
fn fs(in: VertexOutput) -> @location(0) vec4f {
  let uv = in.uv;
  let size = params.outSize;
  let sz = u32(size);
  let isz = i32(sz);
  let center = 0.5;
  let d = distance(uv, vec2f(center));
  let gratScale = 0.92;

  var color = vec3f(0.04);

  // Graticule circles: 100%, 75%, 25% saturation
  let radiusFull = gratScale * 0.5;
  let radius75 = gratScale * 0.5 * 0.75;
  let radius25 = gratScale * 0.5 * 0.25;
  let lineW = 1.2 / size;
  let aa = smoothstep(0.0, lineW, abs(d - radiusFull));
  color = mix(vec3f(0.20), color, aa);
  let aa75 = smoothstep(0.0, lineW, abs(d - radius75));
  color = mix(vec3f(0.14), color, aa75);
  let aa25 = smoothstep(0.0, lineW, abs(d - radius25));
  color = mix(vec3f(0.10), color, aa25);

  // Crosshair
  let crossW = 0.8 / size;
  if (d < radiusFull + 0.01) {
    let axH = smoothstep(0.0, crossW, abs(uv.y - center));
    let axV = smoothstep(0.0, crossW, abs(uv.x - center));
    color = mix(vec3f(0.12), color, axH);
    color = mix(vec3f(0.12), color, axV);
  }

  // Skin tone line (~123 degrees)
  let angle = atan2(-(uv.y - center), uv.x - center);
  let skinAngle = radians(123.0);
  let skinAA = smoothstep(0.0, crossW, abs(angle - skinAngle));
  if (d < radiusFull + 0.01 && d > 0.01) {
    color = mix(vec3f(0.28, 0.20, 0.08), color, skinAA);
  }

  // Color targets on 75% ring (R, MG, B, CY, G, YL)
  let targetAngles = array<f32, 6>(
    radians(103.0), radians(61.0), radians(-13.0),
    radians(-77.0), radians(-119.0), radians(167.0)
  );
  let targetColors = array<vec3f, 6>(
    vec3f(0.6, 0.15, 0.15), vec3f(0.5, 0.15, 0.5), vec3f(0.15, 0.15, 0.6),
    vec3f(0.15, 0.5, 0.5), vec3f(0.15, 0.5, 0.15), vec3f(0.5, 0.5, 0.1)
  );
  let dotR = 8.0 / size;
  let ringW = 2.0 / size;
  for (var i = 0u; i < 6u; i += 1u) {
    let ta = targetAngles[i];
    let tx = center + cos(ta) * radius75;
    let ty = center - sin(ta) * radius75;
    let td = distance(uv, vec2f(tx, ty));
    let dotAA = smoothstep(dotR, dotR - ringW, td);
    let ringAA = smoothstep(ringW * 0.5, 0.0, abs(td - dotR));
    color = mix(color, targetColors[i] * 0.5, dotAA);
    color = mix(color, targetColors[i], ringAA);
  }

  // Data visualization: bilinear center + bloom glow
  if (uv.x >= 0.0 && uv.x < 1.0 && uv.y >= 0.0 && uv.y < 1.0) {
    let fx = uv.x * size - 0.5;
    let fy = uv.y * size - 0.5;

    let rCenter = sampleVS(&accumR, fx, fy, sz);
    let gCenter = sampleVS(&accumG, fx, fy, sz);
    let bCenter = sampleVS(&accumB, fx, fy, sz);

    // Bloom: 3x3 gaussian at 3px step
    let ix = i32(fx + 0.5);
    let iy = i32(fy + 0.5);
    var rBloom = 0.0; var gBloom = 0.0; var bBloom = 0.0;
    let bK = array<f32, 3>(0.25, 0.50, 0.25);
    for (var by: i32 = -1; by <= 1; by += 1) {
      for (var bx: i32 = -1; bx <= 1; bx += 1) {
        let bw = bK[u32(bx + 1)] * bK[u32(by + 1)];
        rBloom += readVS(&accumR, ix + bx * 3, iy + by * 3, isz) * bw;
        gBloom += readVS(&accumG, ix + bx * 3, iy + by * 3, isz) * bw;
        bBloom += readVS(&accumB, ix + bx * 3, iy + by * 3, isz) * bw;
      }
    }

    let rv = params.refValue;
    let totalCenter = rCenter + gCenter + bCenter;
    let totalBloom = rBloom + gBloom + bBloom;
    let density = pow(clamp(sqrt(totalCenter / 3.0) / rv, 0.0, 1.0), 0.7);
    let bloomD = pow(clamp(sqrt(totalBloom / 3.0) / rv, 0.0, 1.0), 0.6) * 0.18;

    if (totalCenter > 0.0) {
      let rRatio = rCenter / totalCenter;
      let gRatio = gCenter / totalCenter;
      let bRatio = bCenter / totalCenter;
      let chromaColor = vec3f(rRatio, gRatio, bRatio) * 3.0;
      let whiteMix = density * density * 0.5;
      let traceColor = mix(chromaColor, vec3f(1.0), whiteMix) * (density + bloomD);
      color = max(color, clamp(traceColor, vec3f(0.0), vec3f(1.0)));
    }
  }

  return vec4f(color, 1.0);
}
`
), _n = 512;
class C0 {
  device;
  computePipeline;
  renderPipeline;
  computeBGL;
  renderBGL;
  accumR;
  accumG;
  accumB;
  computeParams;
  renderParams;
  constructor(t, s) {
    this.device = t;
    const a = _n * _n * 4;
    this.accumR = t.createBuffer({ size: a, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), this.accumG = t.createBuffer({ size: a, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), this.accumB = t.createBuffer({ size: a, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), this.computeParams = t.createBuffer({ size: 32, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), this.renderParams = t.createBuffer({ size: 16, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), this.computeBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.COMPUTE, texture: { sampleType: "float" } },
        { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
        { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
        { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: "storage" } },
        { binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: "uniform" } }
      ]
    }), this.computePipeline = t.createComputePipeline({
      layout: t.createPipelineLayout({ bindGroupLayouts: [this.computeBGL] }),
      compute: { module: t.createShaderModule({ code: w0 }), entryPoint: "main" }
    }), this.renderBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "uniform" } }
      ]
    });
    const o = t.createShaderModule({ code: S0 });
    this.renderPipeline = t.createRenderPipeline({
      layout: t.createPipelineLayout({ bindGroupLayouts: [this.renderBGL] }),
      vertex: { module: o, entryPoint: "vs" },
      fragment: { module: o, entryPoint: "fs", targets: [{ format: s }] }
    });
  }
  render(t, s, a, o) {
    const i = this.device, c = t.width, l = t.height, u = new ArrayBuffer(32);
    new Uint32Array(u, 0, 4).set([_n, c, l, 0]), new Float32Array(u, 16, 4).set([a, o, 0, 0]), i.queue.writeBuffer(this.computeParams, 0, u);
    const d = Math.sqrt(c * l / (_n * _n)) * 18;
    i.queue.writeBuffer(this.renderParams, 0, new Float32Array([_n, d, 0, 0]));
    const f = i.createCommandEncoder();
    f.clearBuffer(this.accumR), f.clearBuffer(this.accumG), f.clearBuffer(this.accumB);
    const m = i.createBindGroup({
      layout: this.computeBGL,
      entries: [
        { binding: 0, resource: t.createView() },
        { binding: 1, resource: { buffer: this.accumR } },
        { binding: 2, resource: { buffer: this.accumG } },
        { binding: 3, resource: { buffer: this.accumB } },
        { binding: 4, resource: { buffer: this.computeParams } }
      ]
    }), b = f.beginComputePass();
    b.setPipeline(this.computePipeline), b.setBindGroup(0, m), b.dispatchWorkgroups(Math.ceil(c / 16), Math.ceil(l / 16)), b.end();
    const h = i.createBindGroup({
      layout: this.renderBGL,
      entries: [
        { binding: 0, resource: { buffer: this.accumR } },
        { binding: 1, resource: { buffer: this.accumG } },
        { binding: 2, resource: { buffer: this.accumB } },
        { binding: 3, resource: { buffer: this.renderParams } }
      ]
    }), x = f.beginRenderPass({
      colorAttachments: [{
        view: s.getCurrentTexture().createView(),
        loadOp: "clear",
        storeOp: "store",
        clearValue: { r: 0.04, g: 0.04, b: 0.04, a: 1 }
      }]
    });
    x.setPipeline(this.renderPipeline), x.setBindGroup(0, h), x.draw(3), x.end(), i.queue.submit([f.finish()]);
  }
  destroy() {
    for (const t of [this.accumR, this.accumG, this.accumB, this.computeParams, this.renderParams])
      t?.destroy();
  }
}
class Ko {
  device;
  format;
  histogram;
  waveform;
  vectorscope;
  srcTexture = null;
  srcW = 0;
  srcH = 0;
  kr = 0.2126;
  kb = 0.0722;
  rangeMin = 0;
  rangeMax = 1;
  constructor(t) {
    this.device = t, this.format = navigator.gpu.getPreferredCanvasFormat(), this.histogram = new x0(t, this.format), this.waveform = new y0(t, this.format), this.vectorscope = new C0(t, this.format);
  }
  static async create() {
    if (typeof navigator > "u" || !navigator.gpu) return null;
    try {
      const t = await navigator.gpu.requestAdapter();
      if (!t) return null;
      const s = await t.requestDevice();
      return new Ko(s);
    } catch {
      return null;
    }
  }
  configureCanvas(t) {
    try {
      const s = t.getContext("webgpu");
      return s ? (s.configure({ device: this.device, format: this.format, alphaMode: "opaque" }), s) : null;
    } catch {
      return null;
    }
  }
  setMatrix(t, s) {
    this.kr = t, this.kb = s;
  }
  setRange(t, s) {
    this.rangeMin = t, this.rangeMax = s;
  }
  ensureTexture(t, s) {
    this.srcTexture && this.srcW === t && this.srcH === s || (this.srcTexture?.destroy(), this.srcTexture = this.device.createTexture({
      size: { width: t, height: s },
      format: "rgba8unorm",
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
    }), this.srcW = t, this.srcH = s);
  }
  /** Near-zero-copy: GPU-accelerated transfer from canvas (avoids getImageData CPU readback) */
  uploadFromCanvas(t) {
    const s = t.width, a = t.height;
    s < 2 || a < 2 || (this.ensureTexture(s, a), this.device.queue.copyExternalImageToTexture(
      { source: t, flipY: !1 },
      { texture: this.srcTexture, mipLevel: 0 },
      { width: s, height: a }
    ));
  }
  /** Fallback: upload from ImageData (CPU → GPU transfer) */
  uploadFrame(t) {
    const s = t.width, a = t.height;
    this.ensureTexture(s, a), this.device.queue.writeTexture(
      { texture: this.srcTexture },
      t.data,
      { bytesPerRow: s * 4 },
      { width: s, height: a }
    );
  }
  renderWaveform(t, s) {
    this.srcTexture && this.waveform.renderBatch(
      this.srcTexture,
      [{ ctx: t, mode: s }],
      this.kr,
      this.kb,
      this.rangeMin,
      this.rangeMax
    );
  }
  renderWaveforms(t) {
    !this.srcTexture || t.length === 0 || this.waveform.renderBatch(this.srcTexture, t, this.kr, this.kb, this.rangeMin, this.rangeMax);
  }
  renderHistogram(t, s) {
    this.srcTexture && this.histogram.render(this.srcTexture, t, s, this.kr, this.kb, this.rangeMin, this.rangeMax);
  }
  renderVectorscope(t) {
    this.srcTexture && this.vectorscope.render(this.srcTexture, t, this.kr, this.kb);
  }
  clearScope(t) {
    try {
      const s = this.device.createCommandEncoder();
      s.beginRenderPass({
        colorAttachments: [{
          view: t.getCurrentTexture().createView(),
          loadOp: "clear",
          storeOp: "store",
          clearValue: { r: 0.04, g: 0.04, b: 0.04, a: 1 }
        }]
      }).end(), this.device.queue.submit([s.finish()]);
    } catch {
    }
  }
  destroy() {
    this.srcTexture?.destroy(), this.srcTexture = null, this.waveform.destroy(), this.histogram.destroy(), this.vectorscope.destroy();
  }
}
const Nc = 384, Ac = 216, Dc = 256, Oc = 144, k0 = 66, M0 = 220, ku = "timeline:scopes:colorMatrix", Mu = "timeline:scopes:rangeMode", Ru = "timeline:scopes:stackLayout", _c = { rgb: 0, r: 1, g: 2, b: 3, luma: 4 };
function va(e) {
  return e === "bt601" ? { kr: 0.299, kb: 0.114 } : { kr: 0.2126, kb: 0.0722 };
}
function R0() {
  try {
    const e = localStorage.getItem(ku);
    if (e === "bt601" || e === "bt709") return e;
  } catch {
  }
  return "bt709";
}
function P0() {
  try {
    const e = localStorage.getItem(Mu);
    if (e === "full" || e === "legal") return e;
  } catch {
  }
  return "full";
}
function I0() {
  try {
    const e = localStorage.getItem(Ru);
    if (e === "three-up" || e === "all") return e;
  } catch {
  }
  return "three-up";
}
function qo(e, t) {
  if (t === "legal") {
    const s = 0.06274509803921569, a = 235 / 255;
    return Math.max(0, Math.min(1, (e - s) / (a - s)));
  }
  return Math.max(0, Math.min(1, e));
}
function Yo(e, t, s) {
  e.save(), e.strokeStyle = "rgba(148, 163, 184, 0.18)", e.lineWidth = 1, e.fillStyle = "rgba(148, 163, 184, 0.8)", e.font = "10px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
  for (const a of [0, 25, 50, 75, 100]) {
    const o = Math.round(s - 1 - a / 100 * (s - 1));
    e.beginPath(), e.moveTo(0, o + 0.5), e.lineTo(t, o + 0.5), e.stroke(), e.fillText(String(a), 4, Math.max(10, o - 2));
  }
  e.restore();
}
function F0(e, t, s, a, o, i) {
  const { kr: c, kb: l } = va(s), u = 1 - c - l, { data: d, width: f, height: m } = e, b = new Uint16Array(o * i);
  let h = 0;
  for (let y = 0; y < m; y++)
    for (let w = 0; w < f; w++) {
      const S = (y * f + w) * 4, R = (d[S] ?? 0) / 255, O = (d[S + 1] ?? 0) / 255, L = (d[S + 2] ?? 0) / 255, I = qo(c * R + u * O + l * L, a), j = Math.floor(w / Math.max(1, f - 1) * (o - 1)), F = (i - 1 - Math.floor(I * (i - 1))) * o + j, E = (b[F] ?? 0) + 1;
      b[F] = E, E > h && (h = E);
    }
  const x = t.createImageData(o, i), v = x.data, C = Math.log1p(Math.max(1, h));
  for (let y = 0; y < b.length; y++) {
    const w = b[y] ?? 0;
    if (w <= 0) continue;
    const S = Math.log1p(w) / C;
    if (S <= 0) continue;
    const R = y * 4;
    v[R] = 40, v[R + 1] = Math.min(255, Math.round(65 + S * 190)), v[R + 2] = 120, v[R + 3] = Math.min(255, Math.round(95 + S * 160));
  }
  t.fillStyle = "#030712", t.fillRect(0, 0, o, i), t.putImageData(x, 0, 0), Yo(t, o, i);
}
function T0(e, t, s, a, o) {
  const { data: i, width: c, height: l } = e, u = new Uint16Array(a * o);
  let d = 0;
  const f = Math.floor(a / 3), m = [[255, 80, 80], [60, 255, 120], [90, 130, 255]];
  for (let v = 0; v < l; v++)
    for (let C = 0; C < c; C++) {
      const y = (v * c + C) * 4, w = [(i[y] ?? 0) / 255, (i[y + 1] ?? 0) / 255, (i[y + 2] ?? 0) / 255], S = Math.floor(C / Math.max(1, c - 1) * (f - 1));
      for (let R = 0; R < 3; R++) {
        const O = qo(w[R] ?? 0, s), L = R * f + S, j = (o - 1 - Math.floor(O * (o - 1))) * a + L, P = (u[j] ?? 0) + 1;
        u[j] = P, P > d && (d = P);
      }
    }
  const b = t.createImageData(a, o), h = b.data, x = Math.log1p(Math.max(1, d));
  for (let v = 0; v < o; v++)
    for (let C = 0; C < a; C++) {
      const y = v * a + C, w = u[y] ?? 0;
      if (w <= 0) continue;
      const S = Math.log1p(w) / x, R = Math.min(2, Math.floor(C / Math.max(1, f))), O = m[R] ?? [180, 180, 180], L = y * 4;
      h[L] = Math.min(255, Math.round((O[0] ?? 180) * (0.25 + 0.75 * S))), h[L + 1] = Math.min(255, Math.round((O[1] ?? 180) * (0.25 + 0.75 * S))), h[L + 2] = Math.min(255, Math.round((O[2] ?? 180) * (0.25 + 0.75 * S))), h[L + 3] = Math.min(255, Math.round(85 + S * 160));
    }
  t.fillStyle = "#030712", t.fillRect(0, 0, a, o), t.putImageData(b, 0, 0), Yo(t, a, o), t.save(), t.strokeStyle = "rgba(148, 163, 184, 0.28)", t.lineWidth = 1;
  for (let v = 1; v < 3; v++) {
    const C = v * f;
    t.beginPath(), t.moveTo(C + 0.5, 0), t.lineTo(C + 0.5, o), t.stroke();
  }
  t.fillStyle = "rgba(148, 163, 184, 0.9)", t.font = "10px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", t.fillText("R", 8, 12), t.fillText("G", f + 8, 12), t.fillText("B", f * 2 + 8, 12), t.restore();
}
function E0(e, t, s, a, o, i) {
  const { kr: c, kb: l } = va(s), u = 1 - c - l, { data: d, width: f, height: m } = e, b = new Uint32Array(256);
  let h = 0;
  for (let v = 0; v < m; v++)
    for (let C = 0; C < f; C++) {
      const y = (v * f + C) * 4, w = (d[y] ?? 0) / 255, S = (d[y + 1] ?? 0) / 255, R = (d[y + 2] ?? 0) / 255, O = qo(c * w + u * S + l * R, a), L = Math.max(0, Math.min(255, Math.round(O * 255))), I = (b[L] ?? 0) + 1;
      b[L] = I, I > h && (h = I);
    }
  t.fillStyle = "#030712", t.fillRect(0, 0, o, i), Yo(t, o, i);
  const x = Math.log1p(Math.max(1, h));
  for (let v = 0; v < 256; v++) {
    const C = b[v] ?? 0;
    if (C <= 0) continue;
    const y = Math.log1p(C) / x, w = Math.round(v / 255 * (o - 1)), S = Math.max(1, Math.round(y * (i - 1)));
    t.fillStyle = `rgba(116, 232, 195, ${0.35 + y * 0.65})`, t.fillRect(w, i - S, Math.max(1, Math.round(o / 256)), S);
  }
}
function j0(e, t, s, a) {
  const { kr: o, kb: i } = va(s), c = 1 - o - i, { data: l, width: u, height: d } = e, f = new Uint32Array(a * a);
  let m = 0;
  const b = Math.floor(a / 2), h = b - 2;
  for (let y = 0; y < d; y++)
    for (let w = 0; w < u; w++) {
      const S = (y * u + w) * 4, R = (l[S] ?? 0) / 255, O = (l[S + 1] ?? 0) / 255, L = (l[S + 2] ?? 0) / 255, I = o * R + c * O + i * L, j = (L - I) / (2 * (1 - i)), P = (R - I) / (2 * (1 - o)), F = Math.round(b + j * h * 2), E = Math.round(b - P * h * 2);
      if (F < 0 || F >= a || E < 0 || E >= a) continue;
      const T = E * a + F, N = (f[T] ?? 0) + 1;
      f[T] = N, N > m && (m = N);
    }
  t.fillStyle = "#030712", t.fillRect(0, 0, a, a);
  const x = t.createImageData(a, a), v = x.data, C = Math.log1p(Math.max(1, m));
  for (let y = 0; y < f.length; y++) {
    const w = f[y] ?? 0;
    if (w <= 0) continue;
    const S = Math.log1p(w) / C;
    if (S <= 0) continue;
    const R = y * 4;
    v[R] = 70, v[R + 1] = Math.min(255, Math.round(70 + S * 185)), v[R + 2] = 255, v[R + 3] = Math.min(255, Math.round(90 + S * 165));
  }
  t.putImageData(x, 0, 0), t.strokeStyle = "rgba(148, 163, 184, 0.25)", t.lineWidth = 1, t.beginPath(), t.arc(b, b, h, 0, Math.PI * 2), t.stroke(), t.beginPath(), t.arc(b, b, Math.floor(h * 0.66), 0, Math.PI * 2), t.stroke(), t.beginPath(), t.moveTo(b, 0), t.lineTo(b, a), t.moveTo(0, b), t.lineTo(a, b), t.stroke();
}
function Ys(e, t, s, a, o) {
  const i = e.getBoundingClientRect(), c = Math.max(2, Math.min(a, Math.round(i.width || t))), l = Math.max(2, Math.min(o, Math.round(i.height || s)));
  return (e.width !== c || e.height !== l) && (e.width = c, e.height = l), { width: c, height: l };
}
function is({
  mode: e,
  onChange: t
}) {
  const s = [
    { value: "rgb", label: "RGB" },
    { value: "r", label: "R", activeColor: "#ff6666" },
    { value: "g", label: "G", activeColor: "#66cc66" },
    { value: "b", label: "B", activeColor: "#6688ff" },
    { value: "luma", label: "Y", activeColor: "#ccccaa" }
  ];
  return /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-0.5", children: s.map((a) => /* @__PURE__ */ r.jsx(
    "button",
    {
      className: ur(
        "h-4 px-1 text-[9px] font-semibold font-mono rounded transition-colors",
        e === a.value ? "text-white" : "text-muted-foreground/60 hover:text-muted-foreground"
      ),
      style: e === a.value ? { backgroundColor: `${a.activeColor ?? "#888"}33`, borderBottom: `1.5px solid ${a.activeColor ?? "#888"}` } : void 0,
      onClick: () => t(a.value),
      children: a.label
    },
    a.value
  )) });
}
function Xs(e, t, s, a = !0) {
  n.useEffect(() => {
    if (!a) return;
    const o = t.current, i = e.current;
    if (!o || !i) return;
    const c = new ResizeObserver((l) => {
      const u = l[0];
      if (!u) return;
      const { width: d, height: f } = u.contentRect, m = window.devicePixelRatio || 1;
      let b = d, h = f;
      if (s) {
        const C = d / s;
        C <= f ? h = C : (h = f, b = f * s);
      }
      const x = Math.round(b * m), v = Math.round(h * m);
      (i.width !== x || i.height !== v) && (i.width = x, i.height = v, i.style.width = `${Math.round(b)}px`, i.style.height = `${Math.round(h)}px`);
    });
    return c.observe(o), () => c.disconnect();
  }, [s, e, t, a]);
}
const N0 = n.memo(function({
  open: t,
  embedded: s = !1,
  embeddedLayout: a = "grid"
}) {
  const [o, i] = n.useState(() => R0()), [c, l] = n.useState(() => P0()), [u, d] = n.useState("idle"), [f, m] = n.useState(null), [b, h] = n.useState("luma"), [x, v] = n.useState("rgb"), [C, y] = n.useState(() => I0()), w = ne((Te) => Te.isPlaying), S = ne((Te) => Te.captureFrameImageData), R = ne((Te) => Te.captureFrame), O = s && a === "stack", L = s && (!O || C === "all"), I = n.useRef(null), j = n.useRef(null), P = n.useRef(null), F = n.useRef(null), E = n.useRef(null), T = n.useRef(null), N = n.useRef(null), z = n.useRef(null), M = n.useRef(null), Y = n.useRef(/* @__PURE__ */ new Map()), G = n.useRef(!1), X = n.useRef(!1), D = n.useRef(!1), W = n.useRef(!1), q = n.useRef(null), pe = n.useRef(0), k = n.useRef(o);
  k.current = o;
  const B = n.useRef(c);
  B.current = c;
  const U = n.useRef(w);
  U.current = w;
  const J = n.useRef(s);
  J.current = s;
  const re = n.useRef(L);
  re.current = L;
  const me = n.useRef(b);
  me.current = b;
  const xe = n.useRef(x);
  xe.current = x, n.useEffect(() => {
    try {
      localStorage.setItem(ku, o);
    } catch {
    }
  }, [o]), n.useEffect(() => {
    try {
      localStorage.setItem(Mu, c);
    } catch {
    }
  }, [c]), n.useEffect(() => {
    try {
      localStorage.setItem(Ru, C);
    } catch {
    }
  }, [C]), Xs(I, E), Xs(j, T), Xs(F, z, void 0, L), Xs(P, N, 1), n.useEffect(() => {
    !t || G.current || (G.current = !0, Ko.create().then((Te) => {
      Te ? (M.current = Te, m(!0)) : m(!1);
    }));
  }, [t]), n.useEffect(() => () => {
    M.current?.destroy(), M.current = null, Y.current.clear();
  }, []);
  const ye = n.useCallback((Te) => {
    if (!Te) return null;
    const De = M.current;
    if (!De) return null;
    const Qe = Y.current;
    let Ee = Qe.get(Te);
    return Ee || (Ee = De.configureCanvas(Te) ?? void 0, Ee && Qe.set(Te, Ee), Ee ?? null);
  }, []);
  n.useEffect(() => {
    if (f !== !0 || !t) return;
    const Te = M.current;
    if (!Te) return;
    let De = !1, Qe = 0;
    const Ee = (H) => {
      De || (H - Qe >= k0 && !X.current && (Qe = H, ee()), requestAnimationFrame(Ee));
    }, ee = async () => {
      if (X.current) return;
      X.current = !0;
      const { kr: H, kb: ue } = va(k.current), [Ce, Ge] = B.current === "legal" ? [16 / 255, 235 / 255] : [0, 1];
      Te.setMatrix(H, ue), Te.setRange(Ce, Ge);
      try {
        const ke = ne.getState().captureCanvasSource;
        if (ke) {
          const qe = await ke();
          qe && !De ? Te.uploadFromCanvas(qe) : De || await Ve(Te);
        } else
          await Ve(Te);
        if (De) return;
        const _ = ye(I.current), he = [];
        if (_ && he.push({ ctx: _, mode: _c[me.current] }), J.current) {
          const qe = ye(j.current);
          if (qe && he.push({ ctx: qe, mode: 5 }), re.current) {
            const $e = ye(F.current);
            $e && Te.renderHistogram($e, _c[xe.current]);
          }
        }
        he.length > 0 && Te.renderWaveforms(he);
        const et = ye(P.current);
        et && Te.renderVectorscope(et), d("live");
      } catch {
        d("error");
      } finally {
        X.current = !1;
      }
    }, Ve = async (H) => {
      const Ce = ne.getState().captureFrameImageData;
      if (!Ce) return;
      const Ge = U.current ? Dc : Nc, ke = U.current ? Oc : Ac, _ = await Ce({ width: Ge, height: ke });
      _ && H.uploadFrame(_);
    };
    return requestAnimationFrame(Ee), () => {
      De = !0;
    };
  }, [f, t, ye]);
  const Me = n.useCallback(async (Te = 0) => {
    if (!t || f !== !1 || !S && !R) return;
    const De = () => {
      const qe = ne.getState();
      return qe.previewFrame ?? qe.currentFrame;
    }, Qe = De(), Ee = I.current, ee = P.current;
    if (!Ee || !ee) return;
    const Ve = Ys(Ee, 512, 256, 1920, 1080), H = j.current ? Ys(j.current, 512, 256, 1920, 1080) : null, ue = F.current ? Ys(F.current, 512, 256, 1920, 1080) : null, Ce = Ys(ee, 256, 256, 1024, 1024), Ge = Math.max(2, Math.min(Ce.width, Ce.height));
    (ee.width !== Ge || ee.height !== Ge) && (ee.width = Ge, ee.height = Ge);
    const ke = Ee.getContext("2d"), _ = j.current?.getContext("2d") ?? null, he = ee.getContext("2d"), et = F.current?.getContext("2d") ?? null;
    if (!(!ke || !he))
      try {
        const qe = w ? Dc : Nc, $e = w ? Oc : Ac;
        let ct = null;
        if (S && (ct = await S({ width: qe, height: $e })), !ct && R) {
          const Gt = await R({
            width: qe,
            height: $e,
            format: "image/jpeg",
            quality: w ? 0.72 : 0.85
          });
          if (Gt) {
            const vr = new Image();
            vr.src = Gt, await vr.decode();
            let Lt = q.current;
            Lt || (Lt = document.createElement("canvas"), q.current = Lt), (Lt.width !== qe || Lt.height !== $e) && (Lt.width = qe, Lt.height = $e);
            const Dr = Lt.getContext("2d", { willReadFrequently: !0 });
            if (!Dr) return;
            Dr.clearRect(0, 0, qe, $e), Dr.drawImage(vr, 0, 0, qe, $e), ct = Dr.getImageData(0, 0, qe, $e);
          }
        }
        if (!ct) {
          d("idle");
          return;
        }
        if (De() !== Qe) {
          Te < 1 && await Me(Te + 1);
          return;
        }
        F0(ct, ke, o, c, Ve.width, Ve.height);
        const pt = !w || pe.current % 2 === 0;
        pe.current += 1, s && _ && H && pt && T0(ct, _, c, H.width, H.height), j0(ct, he, o, Ge), L && et && ue && pt && E0(ct, et, o, c, ue.width, ue.height), d("live");
      } catch {
        d("error");
      }
  }, [S, R, t, f, o, c, s, w, L]), Be = n.useCallback(async () => {
    if (D.current) {
      W.current = !0;
      return;
    }
    D.current = !0;
    try {
      do
        W.current = !1, await Me();
      while (W.current);
    } finally {
      D.current = !1;
    }
  }, [Me]);
  return n.useEffect(() => {
    if (f !== !1 || !t || w) return;
    let Te = null;
    const De = () => {
      Te === null && (Te = requestAnimationFrame(() => {
        Te = null, Be();
      }));
    };
    De();
    const Qe = ne.subscribe((Ee, ee) => {
      if (Ee.isPlaying)
        return;
      const Ve = Ee.previewFrame ?? Ee.currentFrame, H = ee.previewFrame ?? ee.currentFrame;
      Ve !== H && De();
    });
    return () => {
      Qe(), Te !== null && cancelAnimationFrame(Te), W.current = !1;
    };
  }, [f, t, w, Be]), n.useEffect(() => {
    if (f !== !1 || !t || !w) return;
    let Te = !1;
    return (async () => {
      for (; !Te; )
        await Be(), await new Promise((De) => setTimeout(De, M0));
    })(), () => {
      Te = !0;
    };
  }, [f, t, w, Be]), t ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ur(
        s ? "min-h-0 w-full rounded-md border border-border bg-background p-2" : "absolute bottom-3 right-3 z-20 rounded-md border border-border bg-background/95 backdrop-blur-sm shadow-lg p-2 pointer-events-none"
      ),
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "mb-2 flex flex-col gap-1.5", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1", children: [
            /* @__PURE__ */ r.jsx("div", { className: "shrink-0 text-[10px] uppercase tracking-wide text-muted-foreground", children: "Scopes" }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex min-w-0 flex-wrap items-center gap-1", children: [
              /* @__PURE__ */ r.jsx(
                be,
                {
                  variant: o === "bt709" ? "secondary" : "ghost",
                  size: "sm",
                  className: "h-5 px-1.5 text-[10px]",
                  onClick: () => i("bt709"),
                  children: "709"
                }
              ),
              /* @__PURE__ */ r.jsx(
                be,
                {
                  variant: o === "bt601" ? "secondary" : "ghost",
                  size: "sm",
                  className: "h-5 px-1.5 text-[10px]",
                  onClick: () => i("bt601"),
                  children: "601"
                }
              ),
              /* @__PURE__ */ r.jsx(
                be,
                {
                  variant: c === "full" ? "secondary" : "ghost",
                  size: "sm",
                  className: "h-5 px-1.5 text-[10px]",
                  onClick: () => l("full"),
                  children: "Full"
                }
              ),
              /* @__PURE__ */ r.jsx(
                be,
                {
                  variant: c === "legal" ? "secondary" : "ghost",
                  size: "sm",
                  className: "h-5 px-1.5 text-[10px]",
                  onClick: () => l("legal"),
                  children: "Legal"
                }
              ),
              O && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                /* @__PURE__ */ r.jsx(
                  be,
                  {
                    variant: C === "three-up" ? "secondary" : "ghost",
                    size: "sm",
                    className: "h-5 px-1.5 text-[10px]",
                    onClick: () => y("three-up"),
                    children: "3-Up"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  be,
                  {
                    variant: C === "all" ? "secondary" : "ghost",
                    size: "sm",
                    className: "h-5 px-1.5 text-[10px]",
                    onClick: () => y("all"),
                    children: "All"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex min-w-0 items-center gap-1.5 text-[10px] leading-tight text-muted-foreground", children: [
            /* @__PURE__ */ r.jsx(
              Mf,
              {
                className: `h-3 w-3 shrink-0 ${u === "live" ? "text-emerald-500" : u === "error" ? "text-red-500" : ""}`,
                "aria-hidden": !0
              }
            ),
            /* @__PURE__ */ r.jsx("span", { className: "min-w-0 break-words [overflow-wrap:anywhere]", children: u === "live" ? `${f ? "gpu" : "cpu"} ${o === "bt709" ? "709" : "601"} ${c}` : u === "error" ? "err" : "idle" })
          ] })
        ] }),
        s ? a === "stack" ? /* @__PURE__ */ r.jsxs("div", { className: "flex w-full flex-col gap-3", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex shrink-0 flex-col", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "mb-1 flex items-center justify-between", children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Waveform" }),
              f && /* @__PURE__ */ r.jsx(is, { mode: b, onChange: h })
            ] }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: E,
                className: "h-[108px] w-full rounded border border-border/70 bg-black/80",
                children: /* @__PURE__ */ r.jsx("canvas", { ref: I, className: "h-full w-full" })
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex shrink-0 flex-col", children: [
            /* @__PURE__ */ r.jsx("div", { className: "mb-1 text-[10px] text-muted-foreground", children: "RGB Parade" }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: T,
                className: "h-[108px] w-full rounded border border-border/70 bg-black/80",
                children: /* @__PURE__ */ r.jsx("canvas", { ref: j, className: "h-full w-full" })
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex min-w-0 shrink-0 flex-col", children: [
            /* @__PURE__ */ r.jsx("div", { className: "mb-1 text-[10px] text-muted-foreground", children: "Vectorscope" }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: N,
                className: ur(
                  "mx-auto flex aspect-square w-full max-w-full items-center justify-center overflow-hidden rounded border border-border/70 bg-black/80",
                  L ? "max-h-[200px] max-w-[200px]" : "max-h-[220px] max-w-[220px]"
                ),
                children: /* @__PURE__ */ r.jsx("canvas", { ref: P, className: "max-h-full max-w-full" })
              }
            )
          ] }),
          L && /* @__PURE__ */ r.jsxs("div", { className: "flex shrink-0 flex-col", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "mb-1 flex items-center justify-between", children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Histogram" }),
              f && /* @__PURE__ */ r.jsx(is, { mode: x, onChange: v })
            ] }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: z,
                className: "h-[88px] w-full rounded border border-border/70 bg-black/80",
                children: /* @__PURE__ */ r.jsx("canvas", { ref: F, className: "h-full w-full" })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ r.jsxs("div", { className: "h-[calc(100%-22px)] min-h-0 flex gap-3", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "min-w-0 flex-1 grid grid-cols-2 gap-3 auto-rows-fr", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex min-h-0 flex-col", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Waveform" }),
                f && /* @__PURE__ */ r.jsx(is, { mode: b, onChange: h })
              ] }),
              /* @__PURE__ */ r.jsx("div", { ref: E, className: "flex-1 min-h-[108px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: I, className: "w-full h-full" }) })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex min-h-0 flex-col", children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-[10px] mb-1 text-muted-foreground", children: "RGB Parade" }),
              /* @__PURE__ */ r.jsx("div", { ref: T, className: "flex-1 min-h-[108px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: j, className: "w-full h-full" }) })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "col-span-2 flex min-h-0 flex-col", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Histogram" }),
                f && /* @__PURE__ */ r.jsx(is, { mode: x, onChange: v })
              ] }),
              /* @__PURE__ */ r.jsx("div", { ref: z, className: "flex-1 min-h-[88px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: F, className: "w-full h-full" }) })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "basis-[32%] min-w-[220px] max-w-[380px] flex min-h-0 flex-col", children: [
            /* @__PURE__ */ r.jsx("div", { className: "text-[10px] mb-1 text-muted-foreground", children: "Vectorscope" }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: N,
                className: "flex flex-1 min-h-0 items-center justify-center rounded border border-border/70 bg-black/80",
                children: /* @__PURE__ */ r.jsx("canvas", { ref: P, className: "max-w-full max-h-full aspect-square" })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Waveform" }),
              f && /* @__PURE__ */ r.jsx(is, { mode: b, onChange: h })
            ] }),
            /* @__PURE__ */ r.jsx("div", { ref: E, className: "w-[220px] h-[110px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: I, className: "w-full h-full" }) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("div", { className: "text-[10px] mb-1 text-muted-foreground", children: "Vectorscope" }),
            /* @__PURE__ */ r.jsx("div", { ref: N, className: "w-[160px] h-[160px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: P, className: "w-full h-full" }) })
          ] })
        ] })
      ]
    }
  ) : null;
}), A0 = N0;
function D0({ onClose: e }) {
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-1 flex-col min-h-0 min-w-0", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "flex items-center justify-between px-3 shrink-0",
        style: { height: Ye.previewSplitHeaderHeight },
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted-foreground truncate", children: "Color Scopes" }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: e,
              className: "p-1 rounded hover:bg-muted transition-colors shrink-0",
              "aria-label": "Close color scopes",
              children: /* @__PURE__ */ r.jsx(Ul, { className: "w-3.5 h-3.5 text-muted-foreground" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-3 panel-bg [scrollbar-gutter:stable]", children: /* @__PURE__ */ r.jsx(A0, { open: !0, embedded: !0, embeddedLayout: "stack" }) })
  ] });
}
function ya(e = {}) {
  const { updateDuringPlayback: t = !1, throttleMs: s = 100 } = e, [a, o] = n.useState(
    () => ne.getState().currentFrame
  ), i = n.useRef(0);
  return n.useEffect(() => {
    let c = ne.getState().isPlaying;
    const l = ne.subscribe((u) => {
      const d = u.isPlaying, f = u.currentFrame;
      if (c && !d) {
        o(f), c = d;
        return;
      }
      if (c = d, !d) {
        o(f);
        return;
      }
      if (!t)
        return;
      const m = performance.now();
      m - i.current >= s && (o(f), i.current = m);
    });
    return () => {
      l();
    };
  }, [t, s]), a;
}
function O0({
  containerRef: e
}) {
  const [t, s] = n.useState(!1);
  n.useEffect(() => {
    const o = () => {
      s(document.fullscreenElement !== null);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, []);
  const a = n.useCallback(() => {
    e.current && (document.fullscreenElement ? document.exitFullscreen() : e.current.requestFullscreen());
  }, [e]);
  return { isFullscreen: t, toggleFullscreen: a };
}
function _0({
  isFullscreen: e,
  onToggle: t
}) {
  return /* @__PURE__ */ r.jsxs(ar, { children: [
    /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(
      be,
      {
        type: "button",
        variant: "ghost",
        size: "icon",
        className: "flex-shrink-0 text-muted-foreground hover:text-foreground",
        style: {
          width: Ye.previewControlButtonSize,
          height: Ye.previewControlButtonSize
        },
        "aria-label": e ? "Exit fullscreen" : "Fullscreen preview",
        onClick: t,
        children: e ? /* @__PURE__ */ r.jsx(Rf, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(So, { className: "w-3.5 h-3.5" })
      }
    ) }),
    /* @__PURE__ */ r.jsx(ir, { side: "top", children: e ? "Exit fullscreen (Esc)" : "Fullscreen program monitor" })
  ] });
}
const Lc = [
  {
    id: "square",
    label: "Square",
    ratioLabel: "1∶1",
    width: 1080,
    height: 1080,
    platforms: "Instagram & Facebook feed (square)"
  },
  {
    id: "vertical",
    label: "Vertical",
    ratioLabel: "9∶16",
    width: 1080,
    height: 1920,
    platforms: "TikTok, Instagram Reels, YouTube Shorts"
  },
  {
    id: "horizontal",
    label: "Horizontal",
    ratioLabel: "16∶9",
    width: 1920,
    height: 1080,
    platforms: "YouTube, Facebook landscape, X"
  }
], L0 = 0.02;
function B0(e, t) {
  if (e <= 0 || t <= 0) return "horizontal";
  const s = e / t;
  return Math.abs(s - 1) < L0 ? "square" : s > 1 ? "horizontal" : "vertical";
}
function H0({
  width: e,
  height: t
}) {
  const s = gr((x) => x.currentProject?.id), a = gr((x) => x.updateProject), [o, i] = n.useState(!1), c = n.useRef(null), l = n.useCallback(() => {
    c.current?.blur();
  }, []), u = B0(e, t), d = Lc.find((x) => x.id === u), f = d?.label ?? `${e}×${t}`, m = u === "vertical" ? Pf : u === "square" ? Vl : If, b = async (x, v) => {
    if (!(!s || o)) {
      i(!0);
      try {
        await a(s, { width: x, height: v });
      } finally {
        i(!1);
      }
    }
  }, h = !s || o;
  return /* @__PURE__ */ r.jsxs(
    Cl,
    {
      onOpenChange: (x) => {
        x || requestAnimationFrame(l);
      },
      children: [
        /* @__PURE__ */ r.jsx(kl, { asChild: !0, children: /* @__PURE__ */ r.jsxs(
          be,
          {
            ref: c,
            type: "button",
            variant: "ghost",
            disabled: h,
            className: "flex-shrink-0 gap-1 px-1.5 text-muted-foreground hover:text-foreground",
            style: { height: Ye.previewControlButtonSize },
            "aria-label": `Frame aspect: ${d?.label ?? "custom"} (${e}×${t})`,
            "data-tooltip": "Frame aspect: horizontal, vertical, or square (social presets)",
            onKeyDown: (x) => {
              (x.key === " " || x.code === "Space") && x.preventDefault();
            },
            children: [
              /* @__PURE__ */ r.jsx(m, { className: "w-3.5 h-3.5 shrink-0" }),
              /* @__PURE__ */ r.jsx("span", { className: "max-w-[64px] truncate text-[10px] leading-none", children: f })
            ]
          }
        ) }),
        /* @__PURE__ */ r.jsxs(
          Ml,
          {
            align: "end",
            className: "min-w-[240px]",
            onCloseAutoFocus: (x) => {
              x.preventDefault(), requestAnimationFrame(l);
            },
            children: [
              /* @__PURE__ */ r.jsxs(Cd, { className: "text-xs font-normal text-muted-foreground", children: [
                e,
                "×",
                t,
                " ",
                /* @__PURE__ */ r.jsxs("span", { className: "text-muted-foreground/80", children: [
                  "(",
                  d ? d.label : "Custom aspect",
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ r.jsx(kd, {}),
              Lc.map((x) => {
                const v = u === x.id;
                return /* @__PURE__ */ r.jsxs(
                  Rl,
                  {
                    className: "flex flex-col items-start gap-0.5 py-2 text-xs",
                    disabled: o,
                    onSelect: () => void b(x.width, x.height),
                    children: [
                      /* @__PURE__ */ r.jsxs("span", { className: v ? "font-semibold" : "font-medium", children: [
                        x.label,
                        /* @__PURE__ */ r.jsxs("span", { className: "font-normal text-muted-foreground", children: [
                          " ",
                          x.ratioLabel
                        ] }),
                        /* @__PURE__ */ r.jsxs("span", { className: "ml-1 tabular-nums text-muted-foreground", children: [
                          x.width,
                          "×",
                          x.height
                        ] })
                      ] }),
                      /* @__PURE__ */ r.jsx("span", { className: "text-[11px] leading-snug text-muted-foreground", children: x.platforms })
                    ]
                  },
                  x.id
                );
              })
            ]
          }
        )
      ]
    }
  );
}
const U0 = n.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  $l,
  {
    ref: s,
    className: ur(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
U0.displayName = $l.displayName;
const V0 = [
  {
    title: "Playback",
    blurb: "Transport, frame stepping, and timeline jumps.",
    items: [
      { label: "Play/Pause", keys: ["PLAY_PAUSE"] },
      { label: "Previous frame", keys: ["PREVIOUS_FRAME"] },
      { label: "Next frame", keys: ["NEXT_FRAME"] },
      { label: "Go to start", keys: ["GO_TO_START"] },
      { label: "Go to end", keys: ["GO_TO_END"] },
      { label: "Previous snap point", keys: ["PREVIOUS_SNAP_POINT"] },
      { label: "Next snap point", keys: ["NEXT_SNAP_POINT"] }
    ]
  },
  {
    title: "Editing",
    blurb: "Clip edits, delete flows, and precise canvas nudging.",
    items: [
      { label: "Split at playhead", keys: ["SPLIT_AT_PLAYHEAD"] },
      { label: "Join selected clips", keys: ["JOIN_ITEMS"] },
      { label: "Delete selected items", keys: ["DELETE_SELECTED", "DELETE_SELECTED_ALT"] },
      { label: "Ripple delete selected items", keys: ["RIPPLE_DELETE", "RIPPLE_DELETE_ALT"] },
      { label: "Insert freeze frame at playhead", keys: ["FREEZE_FRAME"] },
      { label: "Link selected clips", keys: ["LINK_AUDIO_VIDEO"] },
      { label: "Unlink selected clips", keys: ["UNLINK_AUDIO_VIDEO"] },
      { label: "Toggle linked selection", keys: ["TOGGLE_LINKED_SELECTION"] },
      { label: "Nudge (1px)", keys: ["NUDGE_LEFT", "NUDGE_RIGHT", "NUDGE_UP", "NUDGE_DOWN"] },
      { label: "Nudge (10px)", keys: ["NUDGE_LEFT_LARGE", "NUDGE_RIGHT_LARGE", "NUDGE_UP_LARGE", "NUDGE_DOWN_LARGE"] }
    ]
  },
  {
    title: "Tools",
    blurb: "Tool switching for timeline editing modes.",
    items: [
      { label: "Selection tool", keys: ["SELECTION_TOOL"] },
      { label: "Trim edit tool", keys: ["TRIM_EDIT_TOOL"] },
      { label: "Razor tool", keys: ["RAZOR_TOOL"] },
      { label: "Split at cursor", keys: ["SPLIT_AT_CURSOR"] },
      { label: "Rate stretch tool", keys: ["RATE_STRETCH_TOOL"] },
      { label: "Slip tool", keys: ["SLIP_TOOL"] },
      { label: "Slide tool", keys: ["SLIDE_TOOL"] }
    ]
  },
  {
    title: "History and UI",
    blurb: "Timeline history, zoom, and UI toggles.",
    items: [
      { label: "Undo", keys: ["UNDO"] },
      { label: "Redo", keys: ["REDO"] },
      { label: "Zoom in timeline", keys: ["ZOOM_IN"] },
      { label: "Zoom out timeline", keys: ["ZOOM_OUT"] },
      { label: "Zoom to fit all content", keys: ["ZOOM_TO_FIT"] },
      { label: "Zoom to 100%", keys: ["ZOOM_TO_100", "ZOOM_TO_100_ALT"] },
      { label: "Toggle snap", keys: ["TOGGLE_SNAP"] },
      { label: "Toggle keyframe editor panel", keys: ["TOGGLE_KEYFRAME_EDITOR"] }
    ]
  },
  {
    title: "Clipboard",
    blurb: "Copy, cut, and paste commands shared across editor surfaces.",
    items: [
      { label: "Copy selected items or keyframes", keys: ["COPY"] },
      { label: "Cut selected items or keyframes", keys: ["CUT"] },
      { label: "Paste items or keyframes", keys: ["PASTE"] }
    ]
  },
  {
    title: "Markers",
    blurb: "Marker creation, removal, and navigation.",
    items: [
      { label: "Add marker at playhead", keys: ["ADD_MARKER"] },
      { label: "Remove selected marker", keys: ["REMOVE_MARKER"] },
      { label: "Jump to previous marker", keys: ["PREVIOUS_MARKER"] },
      { label: "Jump to next marker", keys: ["NEXT_MARKER"] }
    ]
  },
  {
    title: "Keyframes",
    blurb: "Keyframe editor actions and view switching.",
    items: [
      { label: "Clear all keyframes from selected items", keys: ["CLEAR_KEYFRAMES"] },
      { label: "Switch keyframe editor to graph view", keys: ["KEYFRAME_EDITOR_GRAPH"] },
      { label: "Switch keyframe editor to dopesheet view", keys: ["KEYFRAME_EDITOR_DOPESHEET"] }
    ]
  },
  {
    title: "Source Monitor",
    blurb: "In and out points plus insert and overwrite edits.",
    items: [
      { label: "Mark In point", keys: ["MARK_IN"] },
      { label: "Mark Out point", keys: ["MARK_OUT"] },
      { label: "Clear In/Out points", keys: ["CLEAR_IN_OUT"] },
      { label: "Insert edit", keys: ["INSERT_EDIT"] },
      { label: "Overwrite edit", keys: ["OVERWRITE_EDIT"] }
    ]
  },
  {
    title: "Project",
    blurb: "Save and export flows.",
    items: [
      { label: "Save project", keys: ["SAVE"] },
      { label: "Export video", keys: ["EXPORT"] }
    ]
  }
];
Object.fromEntries(
  V0.flatMap(
    (e) => e.items.flatMap((t) => t.keys.map((s) => [s, t]))
  )
);
const G0 = null, co = xa("MediaSidebar"), lo = "min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 [scrollbar-gutter:stable]", W0 = n.memo(function({ fillContainer: t = !1 }) {
  const s = pa((k) => k.editorDensity), a = ga(s), o = kt((k) => k.leftSidebarOpen), i = kt((k) => k.toggleLeftSidebar), c = kt((k) => k.mediaFullColumn), l = kt((k) => k.toggleMediaFullColumn), u = kt((k) => k.setKeyframeEditorOpen), d = kt((k) => k.toggleKeyframeEditorOpen), f = kt((k) => k.activeTab), m = f === "keyframes", b = kt((k) => k.setActiveTab), h = kt((k) => k.sidebarWidth), x = kt((k) => k.setSidebarWidth), v = n.useRef(m), C = n.useRef(null);
  n.useEffect(() => {
    if (t) return;
    const k = v.current;
    if (v.current = m, m && !k) {
      const B = Math.floor(window.innerWidth * 0.35), U = Di(B, a);
      U > h && (C.current = h, x(U));
    } else !m && k && C.current !== null && (x(C.current), C.current = null);
  }, [t, m, a, h, x]);
  const y = n.useRef(!1), w = n.useRef(0), S = n.useRef(0), R = n.useRef(!1), O = n.useCallback((k) => {
    k.preventDefault(), y.current = !0, w.current = k.clientX, S.current = h, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
  }, [h]);
  n.useEffect(() => {
    const k = (U) => {
      if (!y.current) return;
      const J = U.clientX - w.current, re = Di(S.current + J, a);
      x(re);
    }, B = () => {
      y.current && (y.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "");
    };
    return document.addEventListener("mousemove", k), document.addEventListener("mouseup", B), () => {
      document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", B), y.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "";
    };
  }, [a, x]);
  const L = n.useCallback((k) => {
    const { tracks: B, items: U, fps: J, addItem: re } = Ne.getState(), { activeTrackId: me, selectItems: xe } = Vt.getState(), ye = gr.getState().currentProject, Me = $a({
      tracks: B,
      items: U,
      itemType: "text",
      preferredTrackId: me
    });
    if (!Me) {
      co.warn("No available track for text item");
      return;
    }
    const Be = qa(J), Te = ne.getState().currentFrame, De = Ka(
      Te,
      Be,
      Me.id,
      U
    ) ?? Te, Qe = ye?.metadata.width ?? 1920, Ee = ye?.metadata.height ?? 1080, Ve = {
      ...Md({
        trackId: Me.id,
        from: De,
        durationInFrames: Be,
        canvasWidth: Qe,
        canvasHeight: Ee
      }),
      ...k.getItemOverrides()
    };
    re(Ve), xe([Ve.id]);
  }, []), I = n.useCallback(() => {
    L(as);
  }, [L]), j = n.useCallback((k) => {
    const { tracks: B, items: U, fps: J, addItem: re } = Ne.getState(), { activeTrackId: me, selectItems: xe } = Vt.getState(), ye = gr.getState().currentProject, Me = $a({
      tracks: B,
      items: U,
      itemType: "shape",
      preferredTrackId: me
    });
    if (!Me) {
      co.warn("No available track for shape item");
      return;
    }
    const Be = qa(J), Te = ne.getState().currentFrame, De = Ka(
      Te,
      Be,
      Me.id,
      U
    ) ?? Te, Qe = ye?.metadata.width ?? 1920, Ee = ye?.metadata.height ?? 1080, ee = Rd({
      trackId: Me.id,
      from: De,
      durationInFrames: Be,
      canvasWidth: Qe,
      canvasHeight: Ee,
      shapeType: k
    });
    re(ee), xe([ee.id]);
  }, []), P = n.useCallback((k, B) => {
    const { tracks: U, items: J, fps: re, addItem: me } = Ne.getState(), { activeTrackId: xe, selectItems: ye } = Vt.getState(), Me = $a({
      tracks: U,
      items: J,
      itemType: "adjustment",
      preferredTrackId: xe
    });
    if (!Me) {
      co.warn("No available track for adjustment layer");
      return;
    }
    const Be = qa(re), Te = ne.getState().currentFrame, De = Ka(
      Te,
      Be,
      Me.id,
      J
    ) ?? Te, Qe = Pd({
      trackId: Me.id,
      from: De,
      durationInFrames: Be,
      effects: k,
      label: B
    });
    me(Qe), ye([Qe.id]);
  }, []), F = n.useCallback((k) => {
    const B = Xa.find((U) => U.id === k);
    B && P(B.effects, B.name);
  }, [P]), E = n.useCallback((k) => {
    const { selectedItemIds: B } = Vt.getState(), { items: U, addEffect: J } = Ne.getState(), re = B.filter((me) => {
      const xe = U.find((ye) => ye.id === me);
      return xe && xe.type !== "audio";
    });
    if (re.length > 0) {
      const me = Ya(k), xe = {
        type: "gpu-effect",
        gpuEffectType: k,
        params: me
      };
      re.forEach((ye) => J(ye, xe));
    } else {
      const me = Ya(k);
      P(
        [{ type: "gpu-effect", gpuEffectType: k, params: me }]
      );
    }
  }, [P]), T = n.useMemo(() => Id(), []), N = n.useMemo(
    () => T.flatMap(
      ({ effects: k }) => k.map((B) => ({ id: B.id, def: B }))
    ),
    [T]
  ), z = n.useMemo(() => Xa.map((k) => k.id), []), { previews: M, trigger: Y } = cm(N, z), G = [
    { id: "media", icon: Gl, label: "Media" },
    { id: "text", icon: Bo, label: "Text" },
    { id: "shapes", icon: Ff, label: "Shapes" },
    { id: "effects", icon: Hi, label: "Effects" },
    { id: "transitions", icon: Lo, label: "Transitions" },
    { id: "ai", icon: Tf, label: "AI" }
  ].filter((k) => k.id !== "ai"), X = n.useCallback(() => R.current ? (R.current = !1, !0) : !1, []), D = n.useCallback((k) => (B) => {
    B.dataTransfer.effectAllowed = "copy";
    const U = {
      type: "timeline-template",
      ...k
    };
    R.current = !0;
    const J = JSON.stringify(U);
    B.dataTransfer.setData("application/json", J), B.dataTransfer.setData("text/plain", J), Fd(U);
  }, []), W = n.useCallback(() => {
    Td(), window.setTimeout(() => {
      R.current = !1;
    }, 0);
  }, []), q = t ? void 0 : { width: h, transition: y.current ? "none" : "width 200ms" }, pe = t ? void 0 : { width: h };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `flex h-full min-h-0 w-full ${t ? "min-w-0 flex-1" : "flex-shrink-0"}`,
      children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "panel-header flex h-full min-h-0 flex-shrink-0 flex-col items-center self-stretch border-r border-border",
            style: { width: Ye.sidebarRailWidth },
            children: [
              /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: "flex items-center justify-center border-b border-border w-full",
                  style: { height: Ye.sidebarHeaderHeight },
                  children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      onClick: i,
                      className: "rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors",
                      style: { width: Ye.sidebarHeaderButtonSize, height: Ye.sidebarHeaderButtonSize },
                      "data-tooltip": o ? "Collapse Panel" : "Expand Panel",
                      "data-tooltip-side": "right",
                      children: o ? /* @__PURE__ */ r.jsx(ws, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(Ss, { className: "w-3.5 h-3.5" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-1 py-1.5", children: [
                G.map(({ id: k, icon: B, label: U }) => /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    onClick: () => {
                      f === k && o ? i() : (b(k), o || i(), k === "effects" && Y());
                    },
                    className: `
                w-9 h-9 rounded-lg flex items-center justify-center transition-all
                ${f === k && o ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}
              `,
                    "data-tooltip": U,
                    "data-tooltip-side": "right",
                    children: /* @__PURE__ */ r.jsx(B, { className: "w-4 h-4" })
                  },
                  k
                )),
                /* @__PURE__ */ r.jsx("div", { className: "w-6 border-t border-border mx-auto my-0.5" }),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    onClick: d,
                    className: `
              w-9 h-9 rounded-lg flex items-center justify-center transition-all
              ${m ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}
            `,
                    "data-tooltip": m ? "Hide Keyframe Editor" : "Keyframe Editor",
                    "data-tooltip-side": "right",
                    "aria-label": m ? "Hide keyframe editor" : "Show keyframe editor",
                    children: /* @__PURE__ */ r.jsx(Ef, { className: "w-4 h-4" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `panel-bg border-r border-border overflow-hidden relative h-full min-h-0 ${o ? t ? "flex flex-1 min-w-0 w-full flex-col" : "flex w-full flex-col" : ""}`,
            style: o ? q : { transition: "width 200ms" },
            children: [
              /* @__PURE__ */ r.jsx(n.Activity, { mode: o ? "visible" : "hidden", children: /* @__PURE__ */ r.jsxs("div", { className: "flex h-full min-h-0 min-w-0 flex-1 flex-col w-full", style: pe, children: [
                /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: m ? "flex-1 min-h-0 flex flex-col overflow-hidden" : "contents",
                    children: /* @__PURE__ */ r.jsx(
                      Ku,
                      {
                        isOpen: m,
                        onToggle: d,
                        onClose: () => u(!1),
                        placement: "top"
                      }
                    )
                  }
                ),
                !m && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                  /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: "flex items-center justify-between px-3 border-b border-border flex-shrink-0",
                      style: { height: Ye.sidebarHeaderHeight },
                      children: [
                        /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium text-foreground", children: G.find((k) => k.id === f)?.label }),
                        !t && /* @__PURE__ */ r.jsx(
                          be,
                          {
                            variant: "ghost",
                            size: "icon",
                            className: "shrink-0",
                            style: { width: Ye.sidebarHeaderButtonSize, height: Ye.sidebarHeaderButtonSize },
                            onClick: l,
                            "data-tooltip": c ? "Dock to preview" : "Expand full column",
                            "data-tooltip-side": "bottom",
                            children: c ? /* @__PURE__ */ r.jsx(Ho, { className: "w-3 h-3" }) : /* @__PURE__ */ r.jsx(Uo, { className: "w-3 h-3" })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ r.jsx("div", { className: `min-h-0 flex-1 overflow-hidden ${f === "media" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsx(qu, {}) }),
                  /* @__PURE__ */ r.jsx("div", { className: `${lo} ${f === "text" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Plain text" }),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          draggable: !0,
                          onDragStart: D({
                            itemType: "text",
                            label: as.label,
                            stylePresetId: as.id
                          }),
                          onDragEnd: W,
                          onClick: () => {
                            X() || I();
                          },
                          className: "w-full rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors overflow-hidden text-left",
                          children: /* @__PURE__ */ r.jsx(
                            "div",
                            {
                              className: "flex min-h-[72px] items-center justify-center px-3 py-4",
                              style: { background: as.cardBg },
                              children: /* @__PURE__ */ r.jsx("span", { style: as.previewStyle, children: "Text" })
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground", children: "Text styles" }) }),
                      /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-2 gap-2", children: Ed.map((k) => /* @__PURE__ */ r.jsxs(
                        "button",
                        {
                          type: "button",
                          draggable: !0,
                          onDragStart: D({
                            itemType: "text",
                            label: k.label,
                            stylePresetId: k.id
                          }),
                          onDragEnd: W,
                          onClick: () => {
                            X() || L(k);
                          },
                          className: "flex flex-col rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary/50 transition-colors overflow-hidden text-center",
                          children: [
                            /* @__PURE__ */ r.jsx(
                              "div",
                              {
                                className: "flex min-h-[56px] items-center justify-center px-1.5 py-2",
                                style: { background: k.cardBg },
                                children: /* @__PURE__ */ r.jsx("span", { style: k.previewStyle, children: "Text" })
                              }
                            ),
                            /* @__PURE__ */ r.jsx("span", { className: "text-[10px] leading-tight text-muted-foreground px-1 py-1.5 truncate", children: k.label })
                          ]
                        },
                        k.id
                      )) })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ r.jsx("div", { className: `${lo} ${f === "shapes" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-3 gap-1.5", children: [
                    /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        draggable: !0,
                        onDragStart: D({ itemType: "shape", label: "Rectangle", shapeType: "rectangle" }),
                        onDragEnd: W,
                        onClick: () => {
                          X() || j("rectangle");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Vl, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground", children: "Rectangle" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        draggable: !0,
                        onDragStart: D({ itemType: "shape", label: "Circle", shapeType: "circle" }),
                        onDragEnd: W,
                        onClick: () => {
                          X() || j("circle");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(wo, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground", children: "Circle" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        draggable: !0,
                        onDragStart: D({ itemType: "shape", label: "Triangle", shapeType: "triangle" }),
                        onDragEnd: W,
                        onClick: () => {
                          X() || j("triangle");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(jf, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground", children: "Triangle" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        draggable: !0,
                        onDragStart: D({ itemType: "shape", label: "Ellipse", shapeType: "ellipse" }),
                        onDragEnd: W,
                        onClick: () => {
                          X() || j("ellipse");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(wo, { className: "w-3.5 h-2.5 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground", children: "Ellipse" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        draggable: !0,
                        onDragStart: D({ itemType: "shape", label: "Star", shapeType: "star" }),
                        onDragEnd: W,
                        onClick: () => {
                          X() || j("star");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Nf, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground", children: "Star" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        draggable: !0,
                        onDragStart: D({ itemType: "shape", label: "Polygon", shapeType: "polygon" }),
                        onDragEnd: W,
                        onClick: () => {
                          X() || j("polygon");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Af, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground", children: "Polygon" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        draggable: !0,
                        onDragStart: D({ itemType: "shape", label: "Heart", shapeType: "heart" }),
                        onDragEnd: W,
                        onClick: () => {
                          X() || j("heart");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Df, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground", children: "Heart" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        onClick: () => ze.getState().startShapePenMode(),
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        title: "Draw a custom shape mask with the pen tool",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Of, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground", children: "Pen" })
                        ]
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ r.jsx("div", { className: `${lo} ${f === "effects" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        draggable: !0,
                        onDragStart: D({ itemType: "adjustment", label: "Adjustment Layer" }),
                        onDragEnd: W,
                        onClick: () => {
                          X() || P();
                        },
                        className: "w-full flex items-center gap-3 p-2.5 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-8 h-8 rounded-md border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70 flex-shrink-0", children: /* @__PURE__ */ r.jsx(Hi, { className: "w-4 h-4 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("div", { className: "text-left", children: /* @__PURE__ */ r.jsx("div", { className: "text-xs text-muted-foreground group-hover:text-foreground", children: "Blank Adjustment Layer" }) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5", children: "Presets" }),
                      /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-3 gap-1.5", children: Xa.map((k) => /* @__PURE__ */ r.jsxs(
                        "button",
                        {
                          draggable: !0,
                          onDragStart: D({
                            itemType: "adjustment",
                            label: k.name,
                            effects: k.effects
                          }),
                          onDragEnd: W,
                          onClick: () => {
                            X() || F(k.id);
                          },
                          className: "flex flex-col items-center gap-1 p-1.5 rounded-md border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                          children: [
                            M.has(`preset:${k.id}`) ? /* @__PURE__ */ r.jsx(
                              "img",
                              {
                                src: M.get(`preset:${k.id}`),
                                alt: "",
                                draggable: !1,
                                className: "w-full aspect-video rounded-sm object-cover"
                              }
                            ) : /* @__PURE__ */ r.jsx("div", { className: "w-full aspect-video rounded-sm bg-muted flex items-center justify-center", children: /* @__PURE__ */ r.jsx(vs, { className: "w-3 h-3 text-muted-foreground/50" }) }),
                            /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground text-center leading-tight", children: k.name })
                          ]
                        },
                        k.id
                      )) })
                    ] }),
                    T.map(({ category: k, effects: B }) => /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5", children: k }),
                      /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-3 gap-1.5", children: B.map((U) => /* @__PURE__ */ r.jsxs(
                        "button",
                        {
                          draggable: !0,
                          onDragStart: D({
                            itemType: "adjustment",
                            label: U.name,
                            effects: [{
                              type: "gpu-effect",
                              gpuEffectType: U.id,
                              params: Ya(U.id)
                            }]
                          }),
                          onDragEnd: W,
                          onClick: () => {
                            X() || E(U.id);
                          },
                          className: "flex flex-col items-center gap-1 p-1.5 rounded-md border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                          children: [
                            M.has(U.id) ? /* @__PURE__ */ r.jsx(
                              "img",
                              {
                                src: M.get(U.id),
                                alt: "",
                                draggable: !1,
                                className: "w-full aspect-video rounded-sm object-cover"
                              }
                            ) : /* @__PURE__ */ r.jsx("div", { className: "w-full aspect-video rounded-sm bg-muted" }),
                            /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground text-center leading-tight truncate w-full", children: U.name })
                          ]
                        },
                        U.id
                      )) })
                    ] }, k))
                  ] }) }),
                  /* @__PURE__ */ r.jsx("div", { className: `min-h-0 flex-1 overflow-hidden ${f === "transitions" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsx(fh, {}) }),
                  G0
                ] })
              ] }) }),
              o && !t && /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-resize-handle": !0,
                  onMouseDown: O,
                  className: "absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-primary/50 active:bg-primary/50 transition-colors z-10"
                }
              )
            ]
          }
        )
      ]
    }
  );
});
function Bc(e) {
  return e ?? "#000000";
}
function z0(e, t) {
  const s = e.metadata;
  return t.width !== void 0 && t.width !== s.width || t.height !== void 0 && t.height !== s.height || t.fps !== void 0 && t.fps !== s.fps || t.backgroundColor !== void 0 && Bc(t.backgroundColor) !== Bc(s.backgroundColor);
}
async function $0({
  project: e,
  updates: t,
  command: s,
  updateProject: a,
  markDirty: o,
  onApplied: i
}) {
  if (!z0(e, t))
    return null;
  const c = jd(), l = await a(e.id, t);
  return i?.(l), o(), Nd.getState().addUndoEntry(s, c), l;
}
const K0 = n.memo(function({
  initialColor: t,
  onColorChange: s
}) {
  const [a, o] = n.useState(t), [i, c] = n.useState(!1), l = n.useRef(null), u = Xe((h) => h.setCanvasBackgroundPreview), d = Xe((h) => h.clearCanvasBackgroundPreview);
  n.useEffect(() => {
    o(t);
  }, [t]);
  const f = n.useCallback((h) => {
    o(h), u(h);
  }, [u]), m = n.useCallback(() => {
    d(), s(a);
  }, [a, s, d]), b = n.useCallback(() => {
    m(), c(!1);
  }, [m]);
  return n.useEffect(() => {
    if (!i) return;
    const h = (x) => {
      l.current && !l.current.contains(x.target) && b();
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [i, b]), /* @__PURE__ */ r.jsxs("div", { ref: l, className: "relative flex-1", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        onClick: () => c(!i),
        className: "flex items-center gap-2 w-full",
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "w-6 h-6 rounded border border-border flex-shrink-0",
              style: { backgroundColor: a }
            }
          ),
          /* @__PURE__ */ r.jsx("span", { className: "text-xs font-mono text-muted-foreground uppercase", children: a })
        ]
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "absolute top-8 left-0 z-50 p-2 bg-popover border border-border rounded-lg shadow-lg", children: /* @__PURE__ */ r.jsx(Ad, { color: a, onChange: f }) })
  ] });
}), uo = 320, fo = 240, mo = 7680, ho = 4320, q0 = n.memo(function() {
  const t = gr((R) => R.currentProject), s = gr((R) => R.updateProject), a = Ne((R) => R.fps), o = Ne((R) => R.markDirty), [i, c] = n.useState(!1), l = Ne(
    (R) => R.items.length === 0 ? 0 : Math.max(...R.items.map((O) => O.from + O.durationInFrames))
  ), u = t?.metadata.width ?? 1920, d = t?.metadata.height ?? 1080, f = t?.metadata.backgroundColor ?? "#000000", m = n.useCallback(async (R, O) => {
    if (t)
      try {
        await $0({
          project: t,
          updates: R,
          command: O,
          updateProject: s,
          markDirty: o
        });
      } catch (L) {
        Yt.error("Failed to update canvas settings", {
          description: L instanceof Error ? L.message : "Please try again."
        });
      }
  }, [t, o, s]), b = n.useCallback(() => {
    c((R) => !R);
  }, []), h = n.useCallback(
    (R) => {
      let O = Math.round(R / 2) * 2;
      if (O = Math.min(mo, Math.max(uo, O)), i && d > 0) {
        const L = u / d;
        let I = Math.round(O / L);
        I = Math.round(I / 2) * 2, I = Math.min(ho, Math.max(fo, I)), m(
          { width: O, height: I },
          { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["width", "height"] } }
        );
      } else
        m(
          { width: O },
          { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["width"] } }
        );
    },
    [m, i, d, u]
  ), x = n.useCallback(
    (R) => {
      let O = Math.round(R / 2) * 2;
      if (O = Math.min(ho, Math.max(fo, O)), i && u > 0) {
        const L = u / d;
        let I = Math.round(O * L);
        I = Math.round(I / 2) * 2, I = Math.min(mo, Math.max(uo, I)), m(
          { width: I, height: O },
          { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["width", "height"] } }
        );
      } else
        m(
          { height: O },
          { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["height"] } }
        );
    },
    [m, i, d, u]
  ), v = n.useCallback(() => {
    m(
      { width: d, height: u },
      { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["width", "height"], operation: "swap" } }
    );
  }, [m, d, u]), C = n.useCallback(() => {
    m(
      { width: 1920, height: 1080 },
      { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["width", "height"], operation: "reset" } }
    );
  }, [m]), y = n.useCallback(
    (R) => {
      m(
        { backgroundColor: R },
        { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["backgroundColor"] } }
      );
    },
    [m]
  ), w = n.useCallback(() => {
    f !== "#000000" && m(
      { backgroundColor: "#000000" },
      { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["backgroundColor"], operation: "reset" } }
    );
  }, [m, f]), S = (R) => {
    const O = R / a, L = Math.floor(O / 60), I = Math.floor(O % 60), j = R % a;
    return `${String(L).padStart(2, "0")}:${String(I).padStart(2, "0")}.${String(j).padStart(2, "0")}`;
  };
  return t ? /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ r.jsxs(dr, { title: "Canvas", icon: _f, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(
        Dd,
        {
          width: u,
          height: d,
          aspectLocked: i,
          onWidthChange: h,
          onHeightChange: x,
          onAspectLockToggle: b,
          minWidth: uo,
          minHeight: fo,
          maxWidth: mo,
          maxHeight: ho,
          step: 2
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2 mt-2", children: [
        /* @__PURE__ */ r.jsxs(
          be,
          {
            variant: "outline",
            size: "sm",
            className: "flex-1 h-7 text-xs",
            onClick: v,
            children: [
              /* @__PURE__ */ r.jsx(Lf, { className: "w-3 h-3 mr-1.5" }),
              "Swap"
            ]
          }
        ),
        /* @__PURE__ */ r.jsxs(
          be,
          {
            variant: "outline",
            size: "sm",
            className: "flex-1 h-7 text-xs",
            onClick: C,
            children: [
              /* @__PURE__ */ r.jsx(Ut, { className: "w-3 h-3 mr-1.5" }),
              "Reset"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Background", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          K0,
          {
            initialColor: f,
            onColorChange: y
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: w,
            title: "Reset to black",
            children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx(Eo, {}),
    /* @__PURE__ */ r.jsxs(dr, { title: "Duration", icon: Dl, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Duration", children: /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted-foreground tabular-nums", children: S(l) }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Frame Rate", children: /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
        t.metadata.fps,
        " fps"
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Total Frames", children: /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
        l,
        " fr"
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ r.jsx("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground", children: "No project loaded" }) });
}), Y0 = um, Pu = n.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  Kl,
  {
    ref: s,
    className: ur(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Pu.displayName = Kl.displayName;
const na = n.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  ql,
  {
    ref: s,
    className: ur(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e
    ),
    ...t
  }
));
na.displayName = ql.displayName;
const sa = n.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  Yl,
  {
    ref: s,
    className: ur(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
sa.displayName = Yl.displayName;
function un({
  itemIds: e,
  property: t,
  currentValue: s,
  className: a,
  disabled: o = !1
}) {
  const i = ya(), c = e[0], l = dn(
    n.useCallback(
      (O) => c ? O.keyframesByItemId[c] : void 0,
      [c]
    )
  ), u = Ne((O) => O.addKeyframe), d = Ne((O) => O.removeKeyframe), f = Zt(
    n.useCallback(
      (O) => c ? O.itemById[c] : void 0,
      [c]
    )
  ), m = hs(
    fn(
      n.useCallback(
        (O) => c ? O.transitions.filter(
          (L) => L.leftClipId === c || L.rightClipId === c
        ) : [],
        [c]
      )
    )
  ), b = n.useMemo(() => f ? i - f.from : 0, [i, f]), h = n.useMemo(() => {
    if (!(!f || !c))
      return bl(b, c, f, m);
  }, [b, c, f, m]), x = h !== void 0, v = n.useMemo(() => {
    if (!l) return;
    const O = l.properties.find((L) => L.property === t);
    if (O)
      return O.keyframes.find((L) => L.frame === b);
  }, [l, t, b]), C = v !== void 0, y = n.useMemo(() => {
    if (!l) return !1;
    const O = l.properties.find((L) => L.property === t);
    return O ? O.keyframes.length > 0 : !1;
  }, [l, t]), w = n.useCallback(() => {
    o || x || !c || b < 0 || (C && v ? d(c, t, v.id) : u(c, t, b, s));
  }, [
    o,
    x,
    c,
    b,
    C,
    v,
    d,
    u,
    t,
    s
  ]), S = !f || b < 0 || b >= f.durationInFrames, R = o || x || S;
  return /* @__PURE__ */ r.jsxs(ar, { children: [
    /* @__PURE__ */ r.jsx(or, { asChild: !0, children: /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        onClick: w,
        disabled: R,
        className: ur(
          "flex items-center justify-center w-5 h-5 rounded-sm transition-colors",
          "hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          R && "opacity-50 cursor-not-allowed",
          x && "line-through",
          C && !x && "text-primary",
          !C && y && !x && "text-primary/50",
          !C && !y && !x && "text-muted-foreground",
          x && "text-muted-foreground/50",
          a
        ),
        "aria-label": x ? "Keyframes blocked (transition region)" : S ? "Playhead outside clip bounds" : C ? "Remove keyframe" : "Add keyframe",
        children: /* @__PURE__ */ r.jsx(
          Bf,
          {
            className: ur(
              "w-3 h-3 rotate-0 transition-transform",
              C && !x && "fill-current"
            )
          }
        )
      }
    ) }),
    /* @__PURE__ */ r.jsx(ir, { side: "top", className: "text-xs max-w-[200px]", children: x && h ? /* @__PURE__ */ r.jsx(r.Fragment, { children: Od(h) }) : S ? /* @__PURE__ */ r.jsx(r.Fragment, { children: "Playhead is outside clip bounds" }) : C ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      "Remove keyframe at frame ",
      b
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      "Add keyframe at frame ",
      b
    ] }) })
  ] });
}
const X0 = n.memo(function({
  items: t,
  canvas: s,
  onTransformChange: a,
  aspectLocked: o,
  onAspectLockToggle: i
}) {
  const c = n.useMemo(() => t.map((U) => U.id), [t]), l = n.useMemo(() => new Set(c), [c]), u = n.useMemo(() => new Map(t.map((U) => [U.id, U])), [t]), d = ya(), f = dn(
    fn(
      n.useCallback(
        (U) => c.map((J) => U.keyframesByItemId[J] ?? null),
        [c]
      )
    )
  ), m = n.useMemo(() => {
    const U = /* @__PURE__ */ new Map();
    for (const [J, re] of c.entries())
      U.set(re, f[J] ?? null);
    return U;
  }, [c, f]), b = Xe((U) => U.setTransformPreview), h = Xe((U) => U.clearPreview), x = Xe((U) => U.activeGizmo), v = Xe((U) => U.previewTransform), C = n.useMemo(() => !x || !v || !l.has(x.itemId) ? null : {
    itemId: x.itemId,
    transform: v
  }, [x, v, l]), y = n.useMemo(() => {
    const U = /* @__PURE__ */ new Map();
    for (const J of t) {
      const re = (() => {
        if (C && C.itemId === J.id)
          return C.transform;
        const me = Ir(J), xe = $r(J, s, me), ye = m.get(J.id) ?? void 0;
        if (!ye) return xe;
        const Me = d - J.from;
        return ma(xe, ye, Me);
      })();
      U.set(J.id, {
        x: re.x,
        y: re.y,
        width: re.width,
        height: re.height,
        rotation: re.rotation
      });
    }
    return U;
  }, [t, s, C, m, d]), { x: w, y: S, width: R, height: O, rotation: L } = n.useMemo(() => {
    if (t.length === 0)
      return { x: 0, y: 0, width: 0, height: 0, rotation: 0 };
    const U = t.map((re) => y.get(re.id)).filter((re) => re !== void 0);
    if (U.length === 0)
      return { x: 0, y: 0, width: 0, height: 0, rotation: 0 };
    const J = (re) => {
      const me = U.map(re), xe = me[0];
      return me.every((ye) => Math.abs(ye - xe) < 0.1) ? xe : "mixed";
    };
    return {
      x: J((re) => re.x),
      y: J((re) => re.y),
      width: J((re) => re.width),
      height: J((re) => re.height),
      rotation: J((re) => re.rotation)
    };
  }, [t, y]), I = n.useMemo(() => R === "mixed" || O === "mixed" ? 1 : O > 0 ? R / O : 1, [R, O]), j = Ne((U) => U.applyAutoKeyframeOperations), P = Ne((U) => U.updateItemsTransformMap), F = n.useCallback(
    (U, J, re) => {
      const me = u.get(U);
      if (!me) return null;
      const xe = m.get(U) ?? void 0;
      return $n(me, xe, J, re, d);
    },
    [d, u, m]
  ), E = n.useCallback(
    (U) => {
      const J = {};
      t.forEach((re) => {
        J[re.id] = { x: U };
      }), b(J);
    },
    [t, b]
  ), T = n.useCallback(
    (U) => {
      const J = [], re = [];
      for (const me of c) {
        const xe = F(me, "x", U);
        xe ? J.push(xe) : re.push(me);
      }
      J.length > 0 && j(J), re.length > 0 && a(re, { x: U }), queueMicrotask(() => h());
    },
    [c, a, h, F, j]
  ), N = n.useCallback(
    (U) => {
      const J = {};
      t.forEach((re) => {
        J[re.id] = { y: U };
      }), b(J);
    },
    [t, b]
  ), z = n.useCallback(
    (U) => {
      const J = [], re = [];
      for (const me of c) {
        const xe = F(me, "y", U);
        xe ? J.push(xe) : re.push(me);
      }
      J.length > 0 && j(J), re.length > 0 && a(re, { y: U }), queueMicrotask(() => h());
    },
    [c, a, h, F, j]
  ), M = n.useCallback(
    (U) => {
      const J = {};
      t.forEach((re) => {
        if (o && O !== "mixed") {
          const me = Math.round(U / I);
          J[re.id] = { width: U, height: me };
        } else
          J[re.id] = { width: U };
      }), b(J);
    },
    [t, b, o, O, I]
  ), Y = n.useCallback(
    (U) => {
      const J = o && O !== "mixed" ? Math.round(U / I) : null, re = [], me = /* @__PURE__ */ new Map();
      for (const xe of c) {
        const ye = F(xe, "width", U), Me = J !== null ? F(xe, "height", J) : null;
        ye && re.push(ye), Me && re.push(Me);
        const Be = {};
        ye || (Be.width = U), J !== null && !Me && (Be.height = J), Object.keys(Be).length > 0 && me.set(xe, Be);
      }
      re.length > 0 && j(re), me.size > 0 && P(me, { operation: "resize" }), queueMicrotask(() => h());
    },
    [
      c,
      a,
      h,
      o,
      O,
      I,
      F,
      j,
      P
    ]
  ), G = n.useCallback(
    (U) => {
      const J = {};
      t.forEach((re) => {
        if (o && R !== "mixed") {
          const me = Math.round(U * I);
          J[re.id] = { width: me, height: U };
        } else
          J[re.id] = { height: U };
      }), b(J);
    },
    [t, b, o, R, I]
  ), X = n.useCallback(
    (U) => {
      const J = o && R !== "mixed" ? Math.round(U * I) : null, re = [], me = /* @__PURE__ */ new Map();
      for (const xe of c) {
        const ye = F(xe, "height", U), Me = J !== null ? F(xe, "width", J) : null;
        ye && re.push(ye), Me && re.push(Me);
        const Be = {};
        ye || (Be.height = U), J !== null && !Me && (Be.width = J), Object.keys(Be).length > 0 && me.set(xe, Be);
      }
      re.length > 0 && j(re), me.size > 0 && P(me, { operation: "resize" }), queueMicrotask(() => h());
    },
    [
      c,
      a,
      h,
      o,
      R,
      I,
      F,
      j,
      P
    ]
  ), D = n.useCallback(
    (U) => {
      const J = {};
      t.forEach((re) => {
        J[re.id] = { rotation: U };
      }), b(J);
    },
    [t, b]
  ), W = n.useCallback(
    (U) => {
      const J = [], re = [];
      for (const me of c) {
        const xe = F(me, "rotation", U);
        xe ? J.push(xe) : re.push(me);
      }
      J.length > 0 && j(J), re.length > 0 && a(re, { rotation: U }), queueMicrotask(() => h());
    },
    [c, a, h, F, j]
  ), q = lr((U) => U.mediaItems), pe = n.useCallback(() => {
    t.forEach((J) => {
      const re = Ir(J), me = $r(J, s, re);
      if (J.type === "shape" || J.type === "text") {
        const Me = Math.min(me.width, me.height), Be = {};
        Math.abs(me.width - Me) > 0.5 && (Be.width = Me), Math.abs(me.height - Me) > 0.5 && (Be.height = Me), Object.keys(Be).length > 0 && a([J.id], Be);
        return;
      }
      let xe = Ir(J);
      if (!xe && J.mediaId) {
        const Me = q.find((Be) => Be.id === J.mediaId);
        Me && Me.width && Me.height && (xe = { width: Me.width, height: Me.height });
      }
      if (!xe) return;
      const ye = {};
      Math.abs(me.width - xe.width) > 0.5 && (ye.width = xe.width), Math.abs(me.height - xe.height) > 0.5 && (ye.height = xe.height), Object.keys(ye).length !== 0 && a([J.id], ye);
    });
  }, [t, a, q, s]), k = n.useCallback(() => {
    t.forEach((J) => {
      const re = Ir(J), me = $r(J, s, re), xe = {};
      Math.abs(me.x) > 0.5 && (xe.x = 0), Math.abs(me.y) > 0.5 && (xe.y = 0), Object.keys(xe).length !== 0 && a([J.id], xe);
    });
  }, [t, a, s]), B = n.useCallback(() => {
    t.forEach((J) => {
      const re = Ir(J), me = $r(J, s, re);
      Math.abs(me.rotation) <= 0.5 || a([J.id], { rotation: 0 });
    });
  }, [t, a, s]);
  return /* @__PURE__ */ r.jsxs(dr, { title: "Transform", icon: Hf, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Position", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-1 w-full", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-1 flex-1", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ r.jsx(
            $t,
            {
              value: w,
              onChange: T,
              onLiveChange: E,
              label: "X",
              unit: "px",
              step: 1,
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ r.jsx(
            un,
            {
              itemIds: c,
              property: "x",
              currentValue: w === "mixed" ? 0 : w
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ r.jsx(
            $t,
            {
              value: S,
              onChange: z,
              onLiveChange: N,
              label: "Y",
              unit: "px",
              step: 1,
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ r.jsx(
            un,
            {
              itemIds: c,
              property: "y",
              currentValue: S === "mixed" ? 0 : S
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: k,
          title: "Reset to center",
          children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Size", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        $t,
        {
          value: R,
          onChange: Y,
          onLiveChange: M,
          label: "W",
          unit: "px",
          min: 1,
          max: 7680,
          step: 1,
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        un,
        {
          itemIds: c,
          property: "width",
          currentValue: R === "mixed" ? 100 : R
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: `h-7 w-7 flex-shrink-0 ${o ? "text-primary" : ""}`,
          onClick: i,
          title: o ? "Unlock aspect ratio" : "Lock aspect ratio",
          children: o ? /* @__PURE__ */ r.jsx(Uf, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(Vf, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        $t,
        {
          value: O,
          onChange: X,
          onLiveChange: G,
          label: "H",
          unit: "px",
          min: 1,
          max: 7680,
          step: 1,
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        un,
        {
          itemIds: c,
          property: "height",
          currentValue: O === "mixed" ? 100 : O
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: pe,
          title: "Reset to original size",
          children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Rotation", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        cr,
        {
          value: L,
          onChange: W,
          onLiveChange: D,
          min: -180,
          max: 180,
          step: 1,
          unit: "°",
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        un,
        {
          itemIds: c,
          property: "rotation",
          currentValue: L === "mixed" ? 0 : L
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: B,
          title: "Reset rotation",
          children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) })
  ] });
}), Z0 = n.memo(function({
  items: t,
  canvas: s,
  onTransformChange: a
}) {
  const o = n.useMemo(() => t.map((F) => F.id), [t]), i = n.useMemo(() => new Map(t.map((F) => [F.id, F])), [t]), c = ya(), l = dn(
    fn(
      n.useCallback(
        (F) => o.map((E) => F.keyframesByItemId[E] ?? null),
        [o]
      )
    )
  ), u = n.useMemo(() => {
    const F = /* @__PURE__ */ new Map();
    for (const [E, T] of o.entries())
      F.set(T, l[E] ?? null);
    return F;
  }, [o, l]), d = Ne((F) => F.updateItem), f = Xe((F) => F.setTransformPreview), m = Xe((F) => F.clearPreview), { opacityRaw: b, cornerRadius: h } = n.useMemo(() => {
    if (t.length === 0)
      return { opacityRaw: 1, cornerRadius: 0 };
    const F = t.map((T) => {
      const N = Ir(T), z = $r(T, s, N), M = u.get(T.id) ?? void 0;
      if (M) {
        const Y = c - T.from;
        return ma(z, M, Y);
      }
      return z;
    }), E = (T) => {
      const N = F.map(T), z = N[0];
      return N.every((M) => Math.abs(M - z) < 0.01) ? z : "mixed";
    };
    return {
      opacityRaw: E((T) => T.opacity),
      cornerRadius: E((T) => T.cornerRadius)
    };
  }, [t, s, u, c]), x = b === "mixed" ? "mixed" : Math.round(b * 100), v = Ne((F) => F.applyAutoKeyframeOperations), C = n.useCallback(
    (F, E) => {
      const T = i.get(F);
      if (!T) return null;
      const N = u.get(F) ?? void 0;
      return $n(T, N, "opacity", E, c);
    },
    [c, i, u]
  ), y = n.useCallback(
    (F, E) => {
      const T = i.get(F);
      if (!T) return null;
      const N = u.get(F) ?? void 0;
      return $n(T, N, "cornerRadius", E, c);
    },
    [c, i, u]
  ), w = n.useCallback(
    (F) => {
      const E = {};
      t.forEach((T) => {
        E[T.id] = { opacity: F / 100 };
      }), f(E);
    },
    [t, f]
  ), S = n.useCallback(
    (F) => {
      const E = F / 100, T = [], N = [];
      for (const z of o) {
        const M = C(z, E);
        M ? T.push(M) : N.push(z);
      }
      T.length > 0 && v(T), N.length > 0 && a(N, { opacity: E }), queueMicrotask(() => m());
    },
    [o, a, m, C, v]
  ), R = n.useCallback(
    (F) => {
      const E = {};
      t.forEach((T) => {
        E[T.id] = { cornerRadius: F };
      }), f(E);
    },
    [t, f]
  ), O = n.useCallback(
    (F) => {
      const E = [], T = [];
      for (const N of o) {
        const z = y(N, F);
        z ? E.push(z) : T.push(N);
      }
      E.length > 0 && v(E), T.length > 0 && a(T, { cornerRadius: F }), queueMicrotask(() => m());
    },
    [o, a, m, y, v]
  ), L = n.useMemo(() => {
    if (t.length === 0) return "normal";
    const F = t[0].blendMode ?? "normal";
    return t.every((T) => (T.blendMode ?? "normal") === F) ? F : "mixed";
  }, [t]), I = n.useCallback(
    (F) => {
      for (const E of o)
        d(E, { blendMode: F });
    },
    [o, d]
  ), j = n.useCallback(() => {
    t.some((T) => {
      const N = Ir(T), z = $r(T, s, N);
      return Math.abs(z.opacity - 1) > 0.01;
    }) && a(o, { opacity: 1 });
  }, [t, o, a, s]), P = n.useCallback(() => {
    t.some((T) => {
      const N = Ir(T);
      return $r(T, s, N).cornerRadius > 0.5;
    }) && a(o, { cornerRadius: 0 });
  }, [t, o, a, s]);
  return /* @__PURE__ */ r.jsxs(dr, { title: "Composite", icon: Gf, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Opacity", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        cr,
        {
          value: x,
          onChange: S,
          onLiveChange: w,
          min: 0,
          max: 100,
          step: 1,
          unit: "%",
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        un,
        {
          itemIds: o,
          property: "opacity",
          currentValue: b === "mixed" ? 1 : b
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: j,
          title: "Reset to 100%",
          children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Blend", children: /* @__PURE__ */ r.jsxs(
      ps,
      {
        value: L === "mixed" ? void 0 : L,
        onValueChange: I,
        children: [
          /* @__PURE__ */ r.jsx(gs, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(xs, { placeholder: L === "mixed" ? "Mixed" : "Normal" }) }),
          /* @__PURE__ */ r.jsx(bs, { children: _d.map((F) => /* @__PURE__ */ r.jsxs(Fl, { children: [
            /* @__PURE__ */ r.jsx(Tl, { className: "text-[10px] text-muted-foreground", children: F.label }),
            F.modes.map((E) => /* @__PURE__ */ r.jsx(Gn, { value: E, className: "text-xs", children: Ld[E] }, E))
          ] }, F.label)) })
        ]
      }
    ) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Radius", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        $t,
        {
          value: h,
          onChange: O,
          onLiveChange: R,
          min: 0,
          max: 1e3,
          step: 1,
          unit: "px",
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        un,
        {
          itemIds: o,
          property: "cornerRadius",
          currentValue: h === "mixed" ? 0 : h
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: P,
          title: "Reset to 0",
          children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) })
  ] });
}), J0 = 0.01;
function Nr(e, t, s) {
  if (e.length === 0) return s;
  const a = e.map((c) => t(c) ?? s), o = a[0];
  return a.every((c) => typeof c == "number" && typeof o == "number" ? Math.abs(c - o) < J0 : c === o) ? o : "mixed";
}
const Hc = 0.1, Uc = 10, cs = 0.1, Vc = 0.01;
function wa(e) {
  return Math.max(1, e.sourceWidth ?? e.transform?.width ?? 1920);
}
function Sa(e) {
  return Math.max(1, e.sourceHeight ?? e.transform?.height ?? 1080);
}
function ls(e, t) {
  const s = t === "left" || t === "right" ? wa(e) : Sa(e);
  return Wd(e.crop?.[t], s);
}
function Xo(e) {
  return Math.max(1, Hd(wa(e), Sa(e)));
}
function Gc(e) {
  return zd(e.crop?.softness, Xo(e));
}
function Wc(e, t, s) {
  const a = t === "left" || t === "right" ? wa(e) : Sa(e);
  return oa({
    ...e.crop,
    [t]: Vd(s, a)
  });
}
function zc(e, t) {
  return oa({
    ...e.crop,
    softness: Gd(t, Xo(e))
  });
}
function Wr(e) {
  return e.toFixed(3);
}
function Q0({ items: e }) {
  const t = Ne((D) => D.rateStretchItem), s = Ne((D) => D.updateItem), a = Xe((D) => D.setPropertiesPreviewNew), o = Xe((D) => D.clearPreview), i = n.useMemo(
    () => e.filter((D) => D.type === "video"),
    [e]
  ), c = n.useMemo(() => i.map((D) => D.id), [i]), l = n.useMemo(
    () => e.filter((D) => D.type === "video" || D.type === "audio").map((D) => D.id),
    [e]
  ), u = Nr(i, (D) => D.speed, 1), d = Nr(i, (D) => D.fadeIn, 0), f = Nr(i, (D) => D.fadeOut, 0), m = Nr(i, (D) => ls(D, "left"), 0), b = Nr(i, (D) => ls(D, "right"), 0), h = Nr(i, (D) => ls(D, "top"), 0), x = Nr(i, (D) => ls(D, "bottom"), 0), v = Nr(i, Gc, 0), C = n.useMemo(
    () => Math.max(1, ...i.map(wa)),
    [i]
  ), y = n.useMemo(
    () => Math.max(1, ...i.map(Sa)),
    [i]
  ), w = n.useMemo(
    () => Math.max(1, ...i.map(Xo)),
    [i]
  ), S = n.useCallback(
    (D) => {
      const W = Math.round(D * 100) / 100, q = Math.max(Hc, Math.min(Uc, W)), { items: pe, fps: k } = Ne.getState();
      pe.filter((B) => (B.type === "video" || B.type === "audio") && l.includes(B.id)).forEach((B) => {
        const U = B.speed || 1, J = B.sourceFps ?? k, re = B.sourceEnd !== void 0 && B.sourceStart !== void 0 ? B.sourceEnd - B.sourceStart : Bd(B.durationInFrames, U, k, J), me = Math.max(1, Ud(re, q, J, k));
        t(B.id, B.from, me, q);
      });
    },
    [l, t]
  ), R = n.useCallback(() => {
    queueMicrotask(() => o());
  }, [o]), O = n.useCallback(
    (D) => {
      const W = {};
      c.forEach((q) => {
        W[q] = { fadeIn: D };
      }), a(W);
    },
    [c, a]
  ), L = n.useCallback(
    (D) => {
      c.forEach((W) => s(W, { fadeIn: D })), R();
    },
    [c, s, R]
  ), I = n.useCallback(
    (D) => {
      const W = {};
      c.forEach((q) => {
        W[q] = { fadeOut: D };
      }), a(W);
    },
    [c, a]
  ), j = n.useCallback(
    (D) => {
      c.forEach((W) => s(W, { fadeOut: D })), R();
    },
    [c, s, R]
  ), P = n.useCallback(
    (D, W) => {
      const q = {};
      i.forEach((pe) => {
        q[pe.id] = {
          crop: Wc(pe, D, W)
        };
      }), a(q);
    },
    [a, i]
  ), F = n.useCallback(
    (D, W) => {
      i.forEach((q) => {
        s(q.id, {
          crop: Wc(q, D, W)
        });
      }), R();
    },
    [i, s, R]
  ), E = n.useCallback(
    (D) => {
      const W = {};
      i.forEach((q) => {
        W[q.id] = {
          crop: zc(q, D)
        };
      }), a(W);
    },
    [a, i]
  ), T = n.useCallback(
    (D) => {
      i.forEach((W) => {
        s(W.id, {
          crop: zc(W, D)
        });
      }), R();
    },
    [i, s, R]
  ), N = n.useCallback(
    (D) => {
      i.some((q) => ls(q, D) > Vc) && i.forEach((q) => {
        s(q.id, {
          crop: oa({
            ...q.crop,
            [D]: 0
          })
        });
      });
    },
    [s, i]
  ), z = n.useCallback(() => {
    i.some((W) => Math.abs(Gc(W)) > Vc) && i.forEach((W) => {
      s(W.id, {
        crop: oa({
          ...W.crop,
          softness: 0
        })
      });
    });
  }, [s, i]), M = Ne((D) => D.resetSpeedWithRipple), Y = n.useCallback(() => {
    M(l);
  }, [l, M]), G = n.useCallback(() => {
    Ne.getState().items.some(
      (pe) => c.includes(pe.id) && (pe.fadeIn ?? 0) > 0.01
    ) && c.forEach((pe) => s(pe, { fadeIn: 0 }));
  }, [c, s]), X = n.useCallback(() => {
    Ne.getState().items.some(
      (pe) => c.includes(pe.id) && (pe.fadeOut ?? 0) > 0.01
    ) && c.forEach((pe) => s(pe, { fadeOut: 0 }));
  }, [c, s]);
  return i.length === 0 ? null : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(dr, { title: "Playback", icon: Wf, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Speed", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          cr,
          {
            value: u,
            onChange: S,
            min: Hc,
            max: Uc,
            step: 0.01,
            unit: "x",
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: Y,
            title: "Reset to 1x",
            children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Fade In", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          cr,
          {
            value: d,
            onChange: L,
            onLiveChange: O,
            min: 0,
            max: 5,
            step: 0.1,
            unit: "s",
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: G,
            title: "Reset to 0",
            children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Fade Out", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          cr,
          {
            value: f,
            onChange: j,
            onLiveChange: I,
            min: 0,
            max: 5,
            step: 0.1,
            unit: "s",
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: X,
            title: "Reset to 0",
            children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsxs(dr, { title: "Cropping", icon: zf, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Left", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          cr,
          {
            value: m,
            onChange: (D) => F("left", D),
            onLiveChange: (D) => P("left", D),
            min: 0,
            max: C,
            step: cs,
            unit: "px",
            formatValue: Wr,
            formatInputValue: Wr,
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: () => N("left"),
            title: "Reset left crop",
            children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Right", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          cr,
          {
            value: b,
            onChange: (D) => F("right", D),
            onLiveChange: (D) => P("right", D),
            min: 0,
            max: C,
            step: cs,
            unit: "px",
            formatValue: Wr,
            formatInputValue: Wr,
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: () => N("right"),
            title: "Reset right crop",
            children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Top", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          cr,
          {
            value: h,
            onChange: (D) => F("top", D),
            onLiveChange: (D) => P("top", D),
            min: 0,
            max: y,
            step: cs,
            unit: "px",
            formatValue: Wr,
            formatInputValue: Wr,
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: () => N("top"),
            title: "Reset top crop",
            children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Bottom", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          cr,
          {
            value: x,
            onChange: (D) => F("bottom", D),
            onLiveChange: (D) => P("bottom", D),
            min: 0,
            max: y,
            step: cs,
            unit: "px",
            formatValue: Wr,
            formatInputValue: Wr,
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: () => N("bottom"),
            title: "Reset bottom crop",
            children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Softness", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          cr,
          {
            value: v,
            onChange: T,
            onLiveChange: E,
            min: -w,
            max: w,
            step: cs,
            unit: "px",
            formatValue: Wr,
            formatInputValue: Wr,
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: z,
            title: "Reset crop softness",
            children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) })
    ] })
  ] });
}
const $c = 0.1, Kc = 10;
function po(e) {
  if (e.type !== "image") return !1;
  const t = e.label?.toLowerCase() ?? "";
  return t.endsWith(".gif") || t.endsWith(".webp");
}
function ex({ items: e }) {
  const t = Ne((l) => l.rateStretchItem), s = n.useMemo(
    () => e.filter(po),
    [e]
  ), a = n.useMemo(() => s.map((l) => l.id), [s]), o = Nr(s, (l) => l.speed, 1), i = n.useCallback(
    (l) => {
      const u = Math.round(l * 100) / 100, d = Math.max($c, Math.min(Kc, u));
      Ne.getState().items.filter((m) => po(m) && a.includes(m.id)).forEach((m) => {
        t(m.id, m.from, m.durationInFrames, d);
      });
    },
    [a, t]
  ), c = n.useCallback(() => {
    Ne.getState().items.filter((d) => po(d) && a.includes(d.id)).forEach((d) => {
      const f = d.speed || 1;
      Math.abs(f - 1) <= 0.01 || t(d.id, d.from, d.durationInFrames, 1);
    });
  }, [a, t]);
  return s.length === 0 ? null : /* @__PURE__ */ r.jsx(dr, { title: "Animation", icon: $f, defaultOpen: !0, children: /* @__PURE__ */ r.jsx(Ke, { label: "Speed", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
    /* @__PURE__ */ r.jsx(
      $t,
      {
        value: o,
        onChange: i,
        min: $c,
        max: Kc,
        step: 0.1,
        unit: "x",
        className: "flex-1 min-w-0"
      }
    ),
    /* @__PURE__ */ r.jsx(
      be,
      {
        variant: "ghost",
        size: "icon",
        className: "h-7 w-7 flex-shrink-0",
        onClick: c,
        title: "Reset to 1x",
        children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
      }
    )
  ] }) }) });
}
function tx(e) {
  const t = e.filter(
    (s) => s.type === "audio"
  );
  return t.length > 0 ? t : e.filter(
    (s) => s.type === "video" || s.type === "audio"
  );
}
const rx = -60, nx = 12;
function sx({ items: e }) {
  const t = Ne((j) => j.updateItem), s = Xe((j) => j.setPropertiesPreviewNew), a = Xe((j) => j.clearPreview), o = ya(), i = Ne((j) => j.applyAutoKeyframeOperations), c = n.useMemo(
    () => tx(e),
    [e]
  ), l = n.useMemo(() => c.map((j) => j.id), [c]), u = n.useMemo(() => new Map(c.map((j) => [j.id, j])), [c]), d = dn(
    fn(
      n.useCallback(
        (j) => l.map((P) => j.keyframesByItemId[P] ?? null),
        [l]
      )
    )
  ), f = n.useMemo(() => {
    const j = /* @__PURE__ */ new Map();
    for (const [P, F] of l.entries())
      j.set(F, d[P] ?? null);
    return j;
  }, [l, d]), m = n.useMemo(() => {
    if (c.length === 0) return 0;
    const j = c.map((F) => {
      const E = F.volume ?? 0, T = f.get(F.id) ?? void 0;
      if (T) {
        const N = $d(T, "volume");
        if (N.length > 0) {
          const z = o - F.from;
          return Kd(N, z, E);
        }
      }
      return E;
    }), P = j[0];
    return j.every((F) => Math.abs(F - P) < 0.01) ? Math.round(P * 10) / 10 : "mixed";
  }, [c, f, o]), b = Nr(c, (j) => j.audioFadeIn, 0), h = Nr(c, (j) => j.audioFadeOut, 0), x = n.useCallback(
    (j, P) => {
      const F = u.get(j);
      if (!F) return null;
      const E = f.get(j) ?? void 0;
      return $n(F, E, "volume", P, o);
    },
    [u, o, f]
  ), v = n.useCallback(
    (j) => {
      const P = {};
      l.forEach((F) => {
        P[F] = { volume: j };
      }), s(P);
    },
    [l, s]
  ), C = n.useCallback(
    (j) => {
      const P = [], F = [];
      for (const E of l) {
        const T = x(E, j);
        T ? P.push(T) : F.push(E);
      }
      P.length > 0 && i(P), F.length > 0 && F.forEach((E) => t(E, { volume: j })), queueMicrotask(() => a());
    },
    [l, t, a, x, i]
  ), y = n.useCallback(
    (j) => {
      const P = {};
      l.forEach((F) => {
        P[F] = { audioFadeIn: j };
      }), s(P);
    },
    [l, s]
  ), w = n.useCallback(
    (j) => {
      l.forEach((P) => t(P, { audioFadeIn: j })), queueMicrotask(() => a());
    },
    [l, t, a]
  ), S = n.useCallback(
    (j) => {
      const P = {};
      l.forEach((F) => {
        P[F] = { audioFadeOut: j };
      }), s(P);
    },
    [l, s]
  ), R = n.useCallback(
    (j) => {
      l.forEach((P) => t(P, { audioFadeOut: j })), queueMicrotask(() => a());
    },
    [l, t, a]
  ), O = n.useCallback(() => {
    Ne.getState().items.some(
      (E) => l.includes(E.id) && Math.abs(E.volume ?? 0) > 0.1
    ) && l.forEach((E) => t(E, { volume: 0 }));
  }, [l, t]), L = n.useCallback(() => {
    Ne.getState().items.some(
      (E) => l.includes(E.id) && (E.audioFadeIn ?? 0) > 0.01
    ) && l.forEach((E) => t(E, { audioFadeIn: 0 }));
  }, [l, t]), I = n.useCallback(() => {
    Ne.getState().items.some(
      (E) => l.includes(E.id) && (E.audioFadeOut ?? 0) > 0.01
    ) && l.forEach((E) => t(E, { audioFadeOut: 0 }));
  }, [l, t]);
  return c.length === 0 ? null : /* @__PURE__ */ r.jsxs(dr, { title: "Audio", icon: Wl, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Gain", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        cr,
        {
          value: m,
          onChange: C,
          onLiveChange: v,
          min: rx,
          max: nx,
          step: 0.1,
          unit: "dB",
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        un,
        {
          itemIds: l,
          property: "volume",
          currentValue: m === "mixed" ? 0 : m
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: O,
          title: "Reset to 0 dB",
          children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Fade In", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        cr,
        {
          value: b,
          onChange: w,
          onLiveChange: y,
          min: 0,
          max: 5,
          step: 0.1,
          unit: "s",
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: L,
          title: "Reset to 0",
          children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Fade Out", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        cr,
        {
          value: h,
          onChange: R,
          onLiveChange: S,
          min: 0,
          max: 5,
          step: 0.1,
          unit: "s",
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: I,
          title: "Reset to 0",
          children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) })
  ] });
}
const Iu = n.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: ur(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
        e
      ),
      ref: s,
      ...t
    }
  )
);
Iu.displayName = "Textarea";
const ax = "The quick brown fox jumps over the lazy dog", ox = 512, ix = 4, cx = 120;
function lx({
  value: e,
  placeholder: t = "Select font",
  previewText: s,
  onValueChange: a
}) {
  const o = n.useRef(null), i = n.useRef(null), c = n.useRef(/* @__PURE__ */ new Map()), [l, u] = n.useState(!1), [d, f] = n.useState(""), [m, b] = n.useState(null), [h, x] = n.useState(El), [v, C] = n.useState(!1);
  n.useEffect(() => {
    if (!l)
      return;
    let P = !1;
    return f(""), C(!0), qd().then((F) => {
      P || x(F);
    }).finally(() => {
      P || C(!1);
    }), () => {
      P = !0;
    };
  }, [l]);
  const y = n.useMemo(() => {
    const P = d.trim().toLowerCase();
    return P ? h.filter((F) => F.label.toLowerCase().includes(P)) : h;
  }, [h, d]), w = n.useMemo(() => {
    const P = s && s.length > 0 ? s.slice(0, ox) : "";
    return (P.trim().length > 0 ? P : ax).replace(/\s+/g, " ").slice(0, 72);
  }, [s]), S = n.useMemo(() => {
    const P = m ?? e ?? y[0]?.value;
    return P ? h.find((F) => F.value === P) ?? null : null;
  }, [y, h, m, e]), R = n.useMemo(() => {
    const P = [
      e,
      m,
      ...y.slice(0, ix).map((F) => F.value)
    ].filter((F) => typeof F == "string" && F.trim().length > 0);
    return [...new Set(P)];
  }, [y, m, e]);
  n.useEffect(() => {
    if (!l || R.length === 0)
      return;
    const P = window.setTimeout(() => {
      os(R, [400]);
    }, cx);
    return () => {
      window.clearTimeout(P);
    };
  }, [l, R]), n.useEffect(() => {
    if (!l) {
      b(null);
      return;
    }
    b(e ?? null);
  }, [l, e]), n.useEffect(() => {
    if (!l)
      return;
    const P = (F) => {
      const E = F.target;
      if (E instanceof Node && o.current?.contains(E))
        return;
      const T = i.current;
      if (T) {
        const N = T.getBoundingClientRect(), z = 8, { clientX: M, clientY: Y } = F;
        if (M >= N.left - z && M <= N.right + z && Y >= N.top - z && Y <= N.bottom + z)
          return;
      }
      u(!1);
    };
    return document.addEventListener("pointerdown", P, !0), () => {
      document.removeEventListener("pointerdown", P, !0);
    };
  }, [l]);
  const O = n.useCallback(
    (P) => {
      os([P.value], P.weights), a(P.value), u(!1);
    },
    [a]
  ), L = n.useCallback(
    (P) => {
      const F = y[P];
      if (!F)
        return;
      const E = c.current.get(F.value);
      E && E.focus(), b(F.value), os([F.value], [400]);
    },
    [y]
  ), I = n.useCallback(
    (P, F) => {
      if (P.key === "Escape") {
        P.preventDefault(), P.stopPropagation(), u(!1);
        return;
      }
      if (y.length === 0)
        return;
      const E = y.findIndex((T) => T.value === F.value);
      if (E !== -1)
        switch (P.key) {
          case "ArrowDown":
            P.preventDefault(), L((E + 1) % y.length);
            break;
          case "ArrowUp":
            P.preventDefault(), L((E - 1 + y.length) % y.length);
            break;
          case "Home":
            P.preventDefault(), L(0);
            break;
          case "End":
            P.preventDefault(), L(y.length - 1);
            break;
          case "Enter":
          case " ": {
            P.preventDefault(), O(F);
            break;
          }
        }
    },
    [y, L, O]
  ), j = e ?? t;
  return /* @__PURE__ */ r.jsxs("div", { ref: o, className: "w-full", children: [
    /* @__PURE__ */ r.jsxs(
      be,
      {
        type: "button",
        variant: "outline",
        className: "h-7 w-full justify-between px-2 text-xs font-normal",
        onClick: () => u((P) => !P),
        "aria-haspopup": "listbox",
        "aria-expanded": l,
        children: [
          /* @__PURE__ */ r.jsx(
            "span",
            {
              className: "truncate",
              style: e ? { fontFamily: `"${e}", sans-serif` } : void 0,
              children: j
            }
          ),
          /* @__PURE__ */ r.jsx(Bo, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" })
        ]
      }
    ),
    l ? /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: i,
        className: "mt-2 space-y-2 rounded-md border bg-popover p-2 shadow-sm",
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ r.jsx(Kf, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ r.jsx(
              jl,
              {
                value: d,
                onChange: (P) => f(P.target.value),
                placeholder: "Search fonts...",
                className: "h-8 pl-9 text-xs",
                autoFocus: !0
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "rounded-md border bg-muted/20 p-3", children: [
            /* @__PURE__ */ r.jsx("p", { className: "text-[11px] uppercase tracking-wide text-muted-foreground", children: S?.label ?? "Live Preview" }),
            /* @__PURE__ */ r.jsx(
              "p",
              {
                className: "mt-1 truncate text-lg",
                style: S ? { fontFamily: `"${S.family}", sans-serif` } : void 0,
                children: w
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between text-[11px] text-muted-foreground", children: [
            /* @__PURE__ */ r.jsx("span", { children: "All Fonts" }),
            /* @__PURE__ */ r.jsx("span", { children: y.length })
          ] }),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "max-h-52 space-y-1 overflow-y-auto pr-1 [scrollbar-gutter:stable]",
              role: "listbox",
              "aria-label": "Font options",
              onPointerDownCapture: (P) => {
                P.target === P.currentTarget && P.stopPropagation();
              },
              onMouseDownCapture: (P) => {
                P.target === P.currentTarget && P.stopPropagation();
              },
              children: v ? /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center py-8 text-muted-foreground", children: /* @__PURE__ */ r.jsx(Hl, { className: "h-4 w-4 animate-spin" }) }) : y.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "py-8 text-center text-sm text-muted-foreground", children: "No fonts match your search." }) : y.map((P) => {
                const F = P.value === e;
                return /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    ref: (E) => {
                      E ? c.current.set(P.value, E) : c.current.delete(P.value);
                    },
                    type: "button",
                    role: "option",
                    "aria-selected": F,
                    onClick: () => O(P),
                    onPointerEnter: () => {
                      b(P.value), os([P.value], [400]);
                    },
                    onFocus: () => {
                      b(P.value), os([P.value], [400]);
                    },
                    onKeyDown: (E) => I(E, P),
                    className: "w-full rounded-md border border-transparent px-2 py-1.5 text-left transition-colors hover:border-border hover:bg-accent/40",
                    children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ r.jsx(
                        "span",
                        {
                          className: "truncate text-xs",
                          style: { fontFamily: `"${P.family}", sans-serif` },
                          children: P.label
                        }
                      ),
                      F ? /* @__PURE__ */ r.jsx(qf, { className: "h-3.5 w-3.5 text-primary" }) : null
                    ] })
                  },
                  P.value
                );
              })
            }
          )
        ]
      }
    ) : null
  ] });
}
const Fu = [
  { id: "fade", label: "Fade" },
  { id: "rise", label: "Rise" },
  { id: "drop", label: "Drop" },
  { id: "left", label: "Left" },
  { id: "right", label: "Right" },
  { id: "tilt", label: "Tilt" }
], qc = [
  { id: "none", label: "None" },
  ...Fu
], ux = [
  "opacity",
  "x",
  "y",
  "rotation"
], dx = 0.35, fx = "ease-out", mx = "linear", Yc = 8, hx = 0.01;
function Xc(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
function Ro(e, t, s) {
  return e?.properties.find((a) => a.property === t)?.keyframes.find((a) => a.frame === s);
}
function px(e, t) {
  return e <= 1 ? 0 : Math.max(
    1,
    Math.min(e - 1, Math.round(t * dx))
  );
}
function Zo(e, t, s) {
  const a = px(e, t);
  if (a <= 0)
    return null;
  if (s === "intro")
    return {
      startFrame: 0,
      endFrame: a
    };
  const o = e - 1;
  return {
    startFrame: Math.max(0, o - a),
    endFrame: o
  };
}
function Tu(e, t, s) {
  const a = Xc(s.width * 0.12, 32, 120), o = Xc(s.height * 0.2, 24, 96), i = t === "intro";
  switch (e) {
    case "fade":
      return {
        opacity: {
          startValue: i ? 0 : s.opacity,
          endValue: i ? s.opacity : 0
        }
      };
    case "rise":
      return {
        opacity: {
          startValue: i ? 0 : s.opacity,
          endValue: i ? s.opacity : 0
        },
        y: {
          startValue: i ? s.y + o : s.y,
          endValue: i ? s.y : s.y - o
        }
      };
    case "drop":
      return {
        opacity: {
          startValue: i ? 0 : s.opacity,
          endValue: i ? s.opacity : 0
        },
        y: {
          startValue: i ? s.y - o : s.y,
          endValue: i ? s.y : s.y + o
        }
      };
    case "left":
      return {
        opacity: {
          startValue: i ? 0 : s.opacity,
          endValue: i ? s.opacity : 0
        },
        x: {
          startValue: i ? s.x - a : s.x,
          endValue: i ? s.x : s.x - a
        }
      };
    case "right":
      return {
        opacity: {
          startValue: i ? 0 : s.opacity,
          endValue: i ? s.opacity : 0
        },
        x: {
          startValue: i ? s.x + a : s.x,
          endValue: i ? s.x : s.x + a
        }
      };
    case "tilt":
      return {
        opacity: {
          startValue: i ? 0 : s.opacity,
          endValue: i ? s.opacity : 0
        },
        rotation: {
          startValue: i ? s.rotation - Yc : s.rotation,
          endValue: i ? s.rotation : s.rotation + Yc
        }
      };
  }
}
function Zc(e, t) {
  return Math.abs(e - t) < hx;
}
function gx(e, t, s, a, o) {
  const i = Zo(s, a, t);
  return !e || !i ? [] : ux.filter((c) => {
    const l = Ro(
      e,
      c,
      i.startFrame
    ), u = Ro(e, c, i.endFrame);
    return !l || !u ? !1 : Fu.some((d) => {
      const f = Tu(d.id, t, o)[c];
      return !!f && Zc(l.value, f.startValue) && Zc(u.value, f.endValue);
    });
  });
}
function xx({
  item: e,
  presetId: t,
  phase: s,
  fps: a,
  anchorTransform: o,
  itemKeyframes: i
}) {
  const c = Zo(e.durationInFrames, a, s);
  if (!c)
    return [];
  const l = gx(
    i,
    s,
    e.durationInFrames,
    a,
    o
  ), u = t === "none" ? {} : Tu(t, s, o), d = /* @__PURE__ */ new Set([
    ...l,
    ...Object.keys(u)
  ]);
  if (d.size === 0)
    return [];
  const f = [];
  return d.forEach((m) => {
    const b = u[m] ?? {
      startValue: o[m],
      endValue: o[m]
    }, h = Ro(
      i,
      m,
      c.endFrame
    );
    f.push({
      itemId: e.id,
      property: m,
      frame: c.startFrame,
      value: b.startValue,
      easing: fx
    }), f.push({
      itemId: e.id,
      property: m,
      frame: c.endFrame,
      value: b.endValue,
      easing: h?.easing ?? mx,
      easingConfig: h?.easingConfig
    });
  }), f;
}
const Zs = [
  { value: "normal", label: "Regular" },
  { value: "medium", label: "Medium" },
  { value: "semibold", label: "Semibold" },
  { value: "bold", label: "Bold" }
], bx = Yd, Jc = 1e5, Qc = 120, vx = 512;
function yx(e) {
  const t = e.split(`
`)[0] ?? "", s = t.length > Qc ? t.slice(0, Qc) : t;
  return s.trim().length > 0 ? s : "Text";
}
const wx = {
  offsetX: 0,
  offsetY: 0,
  blur: 0,
  color: "#000000"
}, Sx = {
  width: 0,
  color: "#111827"
}, el = [
  {
    id: "none",
    label: "None",
    getUpdates: () => ({
      textShadow: void 0,
      stroke: void 0
    })
  },
  {
    id: "shadow",
    label: "Shadow",
    getUpdates: () => ({
      textShadow: {
        offsetX: 4,
        offsetY: 6,
        blur: 12,
        color: "#000000"
      },
      stroke: void 0
    })
  },
  {
    id: "outline",
    label: "Outline",
    getUpdates: () => ({
      textShadow: void 0,
      stroke: {
        width: 3,
        color: "#111827"
      }
    })
  },
  {
    id: "glow",
    label: "Glow",
    getUpdates: (e) => ({
      textShadow: {
        offsetX: 0,
        offsetY: 0,
        blur: 18,
        color: e
      },
      stroke: {
        width: 1,
        color: e
      }
    })
  }
];
function ln(e) {
  if (!(e.offsetX === 0 && e.offsetY === 0 && e.blur === 0))
    return e;
}
function Js(e) {
  if (!(e.width <= 0))
    return e;
}
function tl({
  items: e,
  canvas: t,
  showContentSection: s = !0,
  showEffectSection: a = !0,
  showAnimationSection: o = !0
}) {
  const i = Ne((_) => _.updateItem), c = Ne((_) => _.addKeyframes), l = Xe((_) => _.setPropertiesPreviewNew), u = Xe((_) => _.clearPreview), d = n.useMemo(
    () => e.filter((_) => _.type === "text"),
    [e]
  ), f = n.useMemo(() => d.map((_) => _.id), [d]), m = n.useMemo(
    () => ({ ...wx, ...d[0]?.textShadow ?? {} }),
    [d]
  ), b = n.useMemo(
    () => ({ ...Sx, ...d[0]?.stroke ?? {} }),
    [d]
  ), h = n.useMemo(() => {
    if (d.length === 0) return null;
    const _ = d[0];
    return {
      text: d.every((he) => he.text === _.text) ? _.text : void 0,
      fontSize: d.every((he) => (he.fontSize ?? 60) === (_.fontSize ?? 60)) ? _.fontSize ?? 60 : "mixed",
      fontFamily: d.every((he) => (he.fontFamily ?? "Inter") === (_.fontFamily ?? "Inter")) ? _.fontFamily ?? "Inter" : void 0,
      fontWeight: d.every((he) => (he.fontWeight ?? "normal") === (_.fontWeight ?? "normal")) ? _.fontWeight ?? "normal" : void 0,
      fontStyle: d.every((he) => (he.fontStyle ?? "normal") === (_.fontStyle ?? "normal")) ? _.fontStyle ?? "normal" : void 0,
      underline: d.every((he) => (he.underline ?? !1) === (_.underline ?? !1)) ? _.underline ?? !1 : void 0,
      color: d.every((he) => he.color === _.color) ? _.color : void 0,
      textAlign: d.every((he) => (he.textAlign ?? "center") === (_.textAlign ?? "center")) ? _.textAlign ?? "center" : void 0,
      verticalAlign: d.every((he) => (he.verticalAlign ?? "middle") === (_.verticalAlign ?? "middle")) ? _.verticalAlign ?? "middle" : void 0,
      letterSpacing: d.every((he) => (he.letterSpacing ?? 0) === (_.letterSpacing ?? 0)) ? _.letterSpacing ?? 0 : "mixed",
      lineHeight: d.every((he) => (he.lineHeight ?? 1.2) === (_.lineHeight ?? 1.2)) ? _.lineHeight ?? 1.2 : "mixed",
      shadowColor: d.every((he) => (he.textShadow?.color ?? "") === (_.textShadow?.color ?? "")) ? _.textShadow?.color ?? "" : void 0,
      shadowOffsetX: d.every((he) => (he.textShadow?.offsetX ?? 0) === (_.textShadow?.offsetX ?? 0)) ? _.textShadow?.offsetX ?? 0 : "mixed",
      shadowOffsetY: d.every((he) => (he.textShadow?.offsetY ?? 0) === (_.textShadow?.offsetY ?? 0)) ? _.textShadow?.offsetY ?? 0 : "mixed",
      shadowBlur: d.every((he) => (he.textShadow?.blur ?? 0) === (_.textShadow?.blur ?? 0)) ? _.textShadow?.blur ?? 0 : "mixed",
      strokeColor: d.every((he) => (he.stroke?.color ?? "") === (_.stroke?.color ?? "")) ? _.stroke?.color ?? "" : void 0,
      strokeWidth: d.every((he) => (he.stroke?.width ?? 0) === (_.stroke?.width ?? 0)) ? _.stroke?.width ?? 0 : "mixed"
    };
  }, [d]), x = n.useMemo(() => {
    const _ = h?.fontFamily;
    if (!_)
      return Zs;
    const he = El.find(
      (qe) => qe.family === _ || qe.value === _
    );
    if (!he)
      return Zs;
    const et = Zs.filter(
      (qe) => he.weights.includes(bx[qe.value])
    );
    return et.length > 0 ? et : Zs;
  }, [h?.fontFamily]), v = n.useRef(h?.fontFamily), C = n.useRef(h?.fontWeight);
  C.current = h?.fontWeight;
  const y = n.useCallback(
    (_) => {
      d.forEach((he) => {
        i(he.id, _);
      });
    },
    [d, i]
  ), w = n.useRef(y);
  w.current = y;
  const S = n.useCallback(
    (_) => {
      const he = {};
      f.forEach((et) => {
        he[et] = _;
      }), l(he);
    },
    [f, l]
  ), R = n.useCallback(() => {
    queueMicrotask(() => u());
  }, [u]), O = n.useCallback(
    (_) => {
      let he = _.target.value;
      he.length > Jc && (he = he.slice(0, Jc));
      const et = yx(he);
      d.forEach((qe) => {
        i(qe.id, { text: he, label: et });
      });
    },
    [d, i]
  ), L = n.useCallback(
    (_) => {
      S({ fontSize: _ });
    },
    [S]
  ), I = n.useCallback(
    (_) => {
      y({ fontSize: _ }), R();
    },
    [R, y]
  ), j = n.useCallback(
    (_) => {
      y({ fontFamily: _ });
    },
    [y]
  ), P = n.useCallback(
    (_) => {
      x.some((he) => he.value === _) && y({ fontWeight: _ });
    },
    [x, y]
  ), F = n.useCallback(() => {
    if (!x.some((he) => he.value === "bold"))
      return;
    const _ = h?.fontWeight === "bold" ? "normal" : "bold";
    y({ fontWeight: _ });
  }, [h?.fontWeight, x, y]), E = n.useCallback(() => {
    const _ = h?.fontStyle === "italic" ? "normal" : "italic";
    y({ fontStyle: _ });
  }, [h?.fontStyle, y]), T = n.useCallback(() => {
    y({ underline: !(h?.underline ?? !1) });
  }, [h?.underline, y]);
  n.useEffect(() => {
    const _ = h?.fontFamily;
    if (v.current === _)
      return;
    v.current = _;
    const he = C.current;
    if (!he || x.some((qe) => qe.value === he))
      return;
    const et = x[0]?.value;
    et && w.current({ fontWeight: et });
  }, [h?.fontFamily, x]);
  const N = n.useCallback(
    (_) => {
      S({ color: _ });
    },
    [S]
  ), z = n.useCallback(
    (_) => {
      y({ color: _ }), R();
    },
    [R, y]
  ), M = n.useCallback(
    (_) => {
      y({ textAlign: _ });
    },
    [y]
  ), Y = n.useCallback(
    (_) => {
      y({ verticalAlign: _ });
    },
    [y]
  ), G = n.useCallback(
    (_) => {
      S({ letterSpacing: _ });
    },
    [S]
  ), X = n.useCallback(
    (_) => {
      y({ letterSpacing: _ }), R();
    },
    [R, y]
  ), D = n.useCallback(
    (_) => {
      S({ lineHeight: _ });
    },
    [S]
  ), W = n.useCallback(
    (_) => {
      y({ lineHeight: _ }), R();
    },
    [R, y]
  ), q = n.useCallback(
    (_) => {
      S({
        textShadow: ln({
          ...m,
          color: _
        })
      });
    },
    [m, S]
  ), pe = n.useCallback(
    (_) => {
      y({
        textShadow: ln({
          ...m,
          color: _
        })
      }), R();
    },
    [m, R, y]
  ), k = n.useCallback(
    (_) => {
      S({
        textShadow: ln({
          ...m,
          offsetX: _
        })
      });
    },
    [m, S]
  ), B = n.useCallback(
    (_) => {
      y({
        textShadow: ln({
          ...m,
          offsetX: _
        })
      }), R();
    },
    [m, R, y]
  ), U = n.useCallback(
    (_) => {
      S({
        textShadow: ln({
          ...m,
          offsetY: _
        })
      });
    },
    [m, S]
  ), J = n.useCallback(
    (_) => {
      y({
        textShadow: ln({
          ...m,
          offsetY: _
        })
      }), R();
    },
    [m, R, y]
  ), re = n.useCallback(
    (_) => {
      S({
        textShadow: ln({
          ...m,
          blur: _
        })
      });
    },
    [m, S]
  ), me = n.useCallback(
    (_) => {
      y({
        textShadow: ln({
          ...m,
          blur: _
        })
      }), R();
    },
    [m, R, y]
  ), xe = n.useCallback(
    (_) => {
      S({
        stroke: Js({
          ...b,
          width: _
        })
      });
    },
    [b, S]
  ), ye = n.useCallback(
    (_) => {
      y({
        stroke: Js({
          ...b,
          width: _
        })
      }), R();
    },
    [b, R, y]
  ), Me = n.useCallback(
    (_) => {
      S({
        stroke: Js({
          ...b,
          color: _
        })
      });
    },
    [b, S]
  ), Be = n.useCallback(
    (_) => {
      y({
        stroke: Js({
          ...b,
          color: _
        })
      }), R();
    },
    [b, R, y]
  ), Te = n.useCallback(
    (_) => {
      const he = el.find((qe) => qe.id === _);
      if (!he)
        return;
      const et = h?.color ?? d[0]?.color ?? "#ffffff";
      y(he.getUpdates(et)), R();
    },
    [R, h?.color, d, y]
  ), De = n.useCallback(
    (_, he) => {
      const et = Ne.getState().keyframes, qe = d.flatMap(($e) => {
        const ct = $r($e, t, Ir($e)), pt = et.find((Lt) => Lt.itemId === $e.id), Gt = Zo(
          $e.durationInFrames,
          t.fps,
          _
        );
        if (!Gt)
          return [];
        const vr = ma(
          ct,
          pt,
          _ === "intro" ? Gt.endFrame : Gt.startFrame
        );
        return xx({
          item: $e,
          presetId: he,
          phase: _,
          fps: t.fps,
          anchorTransform: vr,
          itemKeyframes: pt
        });
      });
      qe.length !== 0 && c(qe);
    },
    [c, t, d]
  );
  if (d.length === 0 || !h)
    return null;
  const Qe = (h.text ?? d[0]?.text ?? "").slice(0, vx), Ee = h.fontWeight === "bold", ee = x.some((_) => _.value === "bold"), Ve = h.fontStyle === "italic", H = h.underline === !0, ue = h.shadowOffsetX, Ce = h.shadowOffsetY, Ge = h.shadowBlur, ke = h.strokeWidth;
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    s && /* @__PURE__ */ r.jsxs(dr, { title: "Text", icon: Bo, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Content", children: /* @__PURE__ */ r.jsx(
        Iu,
        {
          value: h.text ?? "",
          onChange: O,
          placeholder: h.text === void 0 ? "Mixed" : "Enter text...",
          className: "min-h-[60px] text-xs flex-1 min-w-0",
          rows: 3
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Font", className: "items-start", children: /* @__PURE__ */ r.jsx(
        lx,
        {
          value: h.fontFamily,
          placeholder: h.fontFamily === void 0 ? "Mixed" : "Select font",
          previewText: Qe,
          onValueChange: j
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Size", children: /* @__PURE__ */ r.jsx(
        $t,
        {
          value: h.fontSize,
          onChange: I,
          onLiveChange: L,
          min: 8,
          max: 500,
          step: 1,
          unit: "px",
          className: "flex-1 min-w-0"
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Weight", children: /* @__PURE__ */ r.jsxs(
        ps,
        {
          value: h.fontWeight,
          onValueChange: P,
          children: [
            /* @__PURE__ */ r.jsx(gs, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(xs, { placeholder: h.fontWeight === void 0 ? "Mixed" : "Select weight" }) }),
            /* @__PURE__ */ r.jsx(bs, { children: x.map((_) => /* @__PURE__ */ r.jsx(Gn, { value: _.value, className: "text-xs", children: _.label }, _.value)) })
          ]
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Style", children: /* @__PURE__ */ r.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: Ee ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: F,
            title: ee ? "Bold" : "Bold is not available for this font",
            "aria-label": "Bold",
            "aria-pressed": Ee,
            disabled: !ee,
            children: /* @__PURE__ */ r.jsx(Yf, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: Ve ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: E,
            title: "Italic",
            "aria-label": "Italic",
            "aria-pressed": Ve,
            children: /* @__PURE__ */ r.jsx(Xf, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: H ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: T,
            title: "Underline",
            "aria-label": "Underline",
            "aria-pressed": H,
            children: /* @__PURE__ */ r.jsx(Zf, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Align", children: /* @__PURE__ */ r.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: h.textAlign === "left" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => M("left"),
            title: "Align Left",
            children: /* @__PURE__ */ r.jsx(Jf, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: h.textAlign === "center" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => M("center"),
            title: "Align Center",
            children: /* @__PURE__ */ r.jsx(Qf, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: h.textAlign === "right" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => M("right"),
            title: "Align Right",
            children: /* @__PURE__ */ r.jsx(em, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx("div", { className: "w-px h-5 bg-border mx-1" }),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: h.verticalAlign === "top" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => Y("top"),
            title: "Align Top",
            children: /* @__PURE__ */ r.jsx(tm, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: h.verticalAlign === "middle" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => Y("middle"),
            title: "Align Middle",
            children: /* @__PURE__ */ r.jsx(rm, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: h.verticalAlign === "bottom" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => Y("bottom"),
            title: "Align Bottom",
            children: /* @__PURE__ */ r.jsx(nm, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(
        Wn,
        {
          label: "Color",
          color: h.color ?? "#ffffff",
          onChange: z,
          onLiveChange: N,
          onReset: () => z("#ffffff"),
          defaultColor: "#ffffff"
        }
      ),
      /* @__PURE__ */ r.jsx(Ke, { label: "Spacing", children: /* @__PURE__ */ r.jsx(
        $t,
        {
          value: h.letterSpacing,
          onChange: X,
          onLiveChange: G,
          min: -20,
          max: 100,
          step: 1,
          unit: "px",
          className: "flex-1 min-w-0"
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Line H.", children: /* @__PURE__ */ r.jsx(
        $t,
        {
          value: h.lineHeight,
          onChange: W,
          onLiveChange: D,
          min: 0.5,
          max: 3,
          step: 0.1,
          unit: "x",
          className: "flex-1 min-w-0"
        }
      ) })
    ] }),
    a && /* @__PURE__ */ r.jsxs(dr, { title: "Effects", icon: vs, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Presets", className: "items-start", children: /* @__PURE__ */ r.jsx("div", { className: "grid w-full grid-cols-2 gap-1.5", children: el.map((_) => /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "outline",
          size: "sm",
          className: "h-7 text-[11px]",
          onClick: () => Te(_.id),
          children: _.label
        },
        _.id
      )) }) }),
      /* @__PURE__ */ r.jsx(
        Wn,
        {
          label: "Shadow",
          color: h.shadowColor || "#000000",
          onChange: pe,
          onLiveChange: q,
          onReset: () => pe("#000000"),
          defaultColor: "#000000"
        }
      ),
      /* @__PURE__ */ r.jsx(Ke, { label: "Shadow X", children: /* @__PURE__ */ r.jsx(
        $t,
        {
          value: ue,
          onChange: B,
          onLiveChange: k,
          min: -100,
          max: 100,
          step: 1,
          unit: "px",
          className: "flex-1 min-w-0"
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Shadow Y", children: /* @__PURE__ */ r.jsx(
        $t,
        {
          value: Ce,
          onChange: J,
          onLiveChange: U,
          min: -100,
          max: 100,
          step: 1,
          unit: "px",
          className: "flex-1 min-w-0"
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Shadow B.", children: /* @__PURE__ */ r.jsx(
        $t,
        {
          value: Ge,
          onChange: me,
          onLiveChange: re,
          min: 0,
          max: 80,
          step: 1,
          unit: "px",
          className: "flex-1 min-w-0"
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Stroke W.", children: /* @__PURE__ */ r.jsx(
        $t,
        {
          value: ke,
          onChange: ye,
          onLiveChange: xe,
          min: 0,
          max: 24,
          step: 1,
          unit: "px",
          className: "flex-1 min-w-0"
        }
      ) }),
      (ke === "mixed" || ke > 0) && /* @__PURE__ */ r.jsx(
        Wn,
        {
          label: "Stroke",
          color: h.strokeColor || "#111827",
          onChange: Be,
          onLiveChange: Me,
          onReset: () => Be("#111827"),
          defaultColor: "#111827"
        }
      )
    ] }),
    o && /* @__PURE__ */ r.jsxs(dr, { title: "Animation", icon: vs, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Intro", className: "items-start", children: /* @__PURE__ */ r.jsx("div", { className: "grid w-full grid-cols-4 gap-1.5", children: qc.map((_) => /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "outline",
          size: "sm",
          className: "h-7 text-[11px]",
          onClick: () => De("intro", _.id),
          children: _.label
        },
        _.id
      )) }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Outro", className: "items-start", children: /* @__PURE__ */ r.jsx("div", { className: "grid w-full grid-cols-4 gap-1.5", children: qc.map((_) => /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "outline",
          size: "sm",
          className: "h-7 text-[11px]",
          onClick: () => De("outro", _.id),
          children: _.label
        },
        `outro-${_.id}`
      )) }) }),
      /* @__PURE__ */ r.jsx("div", { className: "px-1 pt-1 text-[11px] text-muted-foreground", children: "Applies short ease-out text motion at the start or end of each selected clip." })
    ] })
  ] });
}
const rl = [
  { value: "rectangle", label: "Rectangle" },
  { value: "circle", label: "Circle" },
  { value: "triangle", label: "Triangle" },
  { value: "ellipse", label: "Ellipse" },
  { value: "star", label: "Star" },
  { value: "polygon", label: "Polygon" },
  { value: "heart", label: "Heart" }
], Cx = [
  { value: "up", label: "Up", icon: Ho },
  { value: "down", label: "Down", icon: Uo },
  { value: "left", label: "Left", icon: ws },
  { value: "right", label: "Right", icon: Ss }
];
function kx({ items: e }) {
  const t = Ne((k) => k.updateItem), { isEditing: s, editingItemId: a, penMode: o, startEditing: i, stopEditing: c } = ze(), l = Xe((k) => k.setPropertiesPreviewNew), u = Xe((k) => k.clearPreview), d = n.useMemo(
    () => e.filter((k) => k.type === "shape"),
    [e]
  ), f = n.useMemo(() => d.map((k) => k.id), [d]), m = n.useMemo(() => {
    if (d.length === 0) return null;
    const k = d[0];
    return {
      shapeType: d.every((B) => B.shapeType === k.shapeType) ? k.shapeType : void 0,
      fillColor: d.every((B) => B.fillColor === k.fillColor) ? k.fillColor : void 0,
      strokeColor: d.every((B) => (B.strokeColor ?? "") === (k.strokeColor ?? "")) ? k.strokeColor ?? "" : void 0,
      strokeWidth: d.every((B) => (B.strokeWidth ?? 0) === (k.strokeWidth ?? 0)) ? k.strokeWidth ?? 0 : "mixed",
      cornerRadius: d.every((B) => (B.cornerRadius ?? 0) === (k.cornerRadius ?? 0)) ? k.cornerRadius ?? 0 : "mixed",
      direction: d.every((B) => (B.direction ?? "up") === (k.direction ?? "up")) ? k.direction ?? "up" : void 0,
      points: d.every((B) => (B.points ?? 5) === (k.points ?? 5)) ? k.points ?? 5 : "mixed",
      innerRadius: d.every((B) => (B.innerRadius ?? 0.5) === (k.innerRadius ?? 0.5)) ? k.innerRadius ?? 0.5 : "mixed",
      // Mask properties
      isMask: d.every((B) => (B.isMask ?? !1) === (k.isMask ?? !1)) ? k.isMask ?? !1 : "mixed",
      maskType: d.every((B) => (B.maskType ?? "clip") === (k.maskType ?? "clip")) ? k.maskType ?? "clip" : void 0,
      maskFeather: d.every((B) => (B.maskFeather ?? 10) === (k.maskFeather ?? 10)) ? k.maskFeather ?? 10 : "mixed",
      maskInvert: d.every((B) => (B.maskInvert ?? !1) === (k.maskInvert ?? !1)) ? k.maskInvert ?? !1 : "mixed"
    };
  }, [d]), b = m?.shapeType && ["rectangle", "triangle", "star", "polygon"].includes(m.shapeType), h = m?.shapeType === "triangle", x = m?.shapeType && ["star", "polygon"].includes(m.shapeType), v = m?.shapeType === "star", C = d.length === 1 && d[0]?.shapeType === "path" ? d[0] : null, y = !!C && s && !o && a === C.id, w = n.useCallback(
    (k) => {
      d.forEach((B) => {
        t(B.id, k);
      });
    },
    [d, t]
  ), S = n.useCallback(
    (k) => {
      const U = rl.find((J) => J.value === k)?.label ?? k;
      w({ shapeType: k, label: U });
    },
    [w]
  ), R = n.useCallback(
    (k) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { fillColor: k };
      }), l(B);
    },
    [f, l]
  ), O = n.useCallback(
    (k) => {
      w({ fillColor: k }), queueMicrotask(() => u());
    },
    [w, u]
  ), L = n.useCallback(
    (k) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { strokeColor: k };
      }), l(B);
    },
    [f, l]
  ), I = n.useCallback(
    (k) => {
      w({ strokeColor: k || void 0 }), queueMicrotask(() => u());
    },
    [w, u]
  ), j = n.useCallback(
    (k) => {
      const B = {};
      f.forEach((U) => {
        k > 0 && !m?.strokeColor ? B[U] = { strokeWidth: k, strokeColor: "#1e40af" } : B[U] = { strokeWidth: k };
      }), l(B);
    },
    [f, l, m?.strokeColor]
  ), P = n.useCallback(
    (k) => {
      k > 0 && m?.strokeWidth === 0 && !m?.strokeColor ? w({ strokeWidth: k, strokeColor: "#1e40af" }) : w({ strokeWidth: k }), queueMicrotask(() => u());
    },
    [w, u, m?.strokeWidth, m?.strokeColor]
  ), F = n.useCallback(
    (k) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { cornerRadius: k };
      }), l(B);
    },
    [f, l]
  ), E = n.useCallback(
    (k) => {
      w({ cornerRadius: k }), queueMicrotask(() => u());
    },
    [w, u]
  ), T = n.useCallback(
    (k) => {
      w({ direction: k });
    },
    [w]
  ), N = n.useCallback(
    (k) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { points: k };
      }), l(B);
    },
    [f, l]
  ), z = n.useCallback(
    (k) => {
      w({ points: k }), queueMicrotask(() => u());
    },
    [w, u]
  ), M = n.useCallback(
    (k) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { innerRadius: k };
      }), l(B);
    },
    [f, l]
  ), Y = n.useCallback(
    (k) => {
      w({ innerRadius: k }), queueMicrotask(() => u());
    },
    [w, u]
  ), G = n.useCallback(
    (k) => {
      w({
        isMask: k,
        // Set defaults when enabling mask
        maskType: k ? "clip" : void 0,
        maskFeather: k ? 0 : void 0,
        maskInvert: k ? !1 : void 0
      });
    },
    [w]
  ), X = n.useCallback(
    (k) => {
      const B = k;
      w({
        maskType: B,
        maskFeather: B === "alpha" ? typeof m?.maskFeather == "number" && m.maskFeather > 0 ? m.maskFeather : 10 : 0
      });
    },
    [m?.maskFeather, w]
  ), D = n.useCallback(
    (k) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { maskFeather: k };
      }), l(B);
    },
    [f, l]
  ), W = n.useCallback(
    (k) => {
      w({ maskFeather: k }), queueMicrotask(() => u());
    },
    [w, u]
  ), q = n.useCallback(() => {
    w({ maskFeather: 10 });
  }, [w]), pe = n.useCallback(
    (k) => {
      w({ maskInvert: k });
    },
    [w]
  );
  return d.length === 0 || !m ? null : /* @__PURE__ */ r.jsxs(dr, { title: "Shape", icon: sm, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Type", children: /* @__PURE__ */ r.jsxs(
      ps,
      {
        value: m.shapeType,
        onValueChange: S,
        children: [
          /* @__PURE__ */ r.jsx(gs, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(xs, { placeholder: m.shapeType === void 0 ? "Mixed" : "Select shape" }) }),
          /* @__PURE__ */ r.jsx(bs, { children: rl.map((k) => /* @__PURE__ */ r.jsx(Gn, { value: k.value, className: "text-xs", children: k.label }, k.value)) })
        ]
      }
    ) }),
    C && /* @__PURE__ */ r.jsx(Ke, { label: "Path", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 w-full", children: [
      /* @__PURE__ */ r.jsxs(
        be,
        {
          variant: y ? "default" : "outline",
          size: "sm",
          className: "h-7 text-xs gap-1.5",
          onClick: () => {
            y ? c() : i(C.id);
          },
          children: [
            /* @__PURE__ */ r.jsx(am, { className: "w-3.5 h-3.5" }),
            y ? "Done" : "Edit Path"
          ]
        }
      ),
      /* @__PURE__ */ r.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Drag points and handles in the preview." })
    ] }) }),
    /* @__PURE__ */ r.jsx(
      Wn,
      {
        label: "Fill",
        color: m.fillColor ?? "#3b82f6",
        onChange: O,
        onLiveChange: R,
        onReset: () => O("#3b82f6"),
        defaultColor: "#3b82f6"
      }
    ),
    /* @__PURE__ */ r.jsx(Ke, { label: "Stroke W.", children: /* @__PURE__ */ r.jsx(
      $t,
      {
        value: m.strokeWidth,
        onChange: P,
        onLiveChange: j,
        min: 0,
        max: 50,
        step: 1,
        unit: "px",
        className: "flex-1 min-w-0"
      }
    ) }),
    (m.strokeWidth === "mixed" || m.strokeWidth > 0) && /* @__PURE__ */ r.jsx(
      Wn,
      {
        label: "Stroke",
        color: m.strokeColor || "#1e40af",
        onChange: I,
        onLiveChange: L,
        onReset: () => I(""),
        defaultColor: ""
      }
    ),
    b && /* @__PURE__ */ r.jsx(Ke, { label: "Radius", children: /* @__PURE__ */ r.jsx(
      $t,
      {
        value: m.cornerRadius,
        onChange: E,
        onLiveChange: F,
        min: 0,
        max: 100,
        step: 1,
        unit: "px",
        className: "flex-1 min-w-0"
      }
    ) }),
    h && /* @__PURE__ */ r.jsx(Ke, { label: "Direction", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1", children: Cx.map((k) => /* @__PURE__ */ r.jsx(
      be,
      {
        variant: m.direction === k.value ? "secondary" : "ghost",
        size: "icon",
        className: "h-7 w-7",
        onClick: () => T(k.value),
        title: k.label,
        children: /* @__PURE__ */ r.jsx(k.icon, { className: "w-3.5 h-3.5" })
      },
      k.value
    )) }) }),
    x && /* @__PURE__ */ r.jsx(Ke, { label: "Points", children: /* @__PURE__ */ r.jsx(
      $t,
      {
        value: m.points,
        onChange: z,
        onLiveChange: N,
        min: 3,
        max: 12,
        step: 1,
        className: "flex-1 min-w-0"
      }
    ) }),
    v && /* @__PURE__ */ r.jsx(Ke, { label: "Inner R.", children: /* @__PURE__ */ r.jsx(
      $t,
      {
        value: m.innerRadius,
        onChange: Y,
        onLiveChange: M,
        min: 0.1,
        max: 0.9,
        step: 0.05,
        className: "flex-1 min-w-0"
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: "border-t border-border my-3" }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Use as Mask", children: /* @__PURE__ */ r.jsx(
      be,
      {
        variant: m.isMask === !0 ? "secondary" : "ghost",
        size: "sm",
        className: "h-7 text-xs flex-1 min-w-0",
        onClick: () => G(m.isMask !== !0),
        disabled: m.isMask === "mixed",
        children: m.isMask === "mixed" ? "Mixed" : m.isMask ? "On" : "Off"
      }
    ) }),
    (m.isMask === !0 || m.isMask === "mixed") && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Mask Type", children: /* @__PURE__ */ r.jsxs(
        ps,
        {
          value: m.maskType,
          onValueChange: X,
          disabled: m.isMask !== !0,
          children: [
            /* @__PURE__ */ r.jsx(gs, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(xs, { placeholder: m.maskType === void 0 ? "Mixed" : "Select type" }) }),
            /* @__PURE__ */ r.jsxs(bs, { children: [
              /* @__PURE__ */ r.jsx(Gn, { value: "clip", className: "text-xs", children: "Clip (Hard edges)" }),
              /* @__PURE__ */ r.jsx(Gn, { value: "alpha", className: "text-xs", children: "Alpha (Soft edges)" })
            ] })
          ]
        }
      ) }),
      m.maskType === "alpha" && /* @__PURE__ */ r.jsx(Ke, { label: "Feather", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          cr,
          {
            value: m.maskFeather,
            onChange: W,
            onLiveChange: D,
            min: 0,
            max: 100,
            step: 1,
            unit: "px",
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: q,
            title: "Reset to 10px",
            children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Invert", children: /* @__PURE__ */ r.jsx(
        be,
        {
          variant: m.maskInvert === !0 ? "secondary" : "ghost",
          size: "sm",
          className: "h-7 text-xs flex-1 min-w-0",
          onClick: () => pe(m.maskInvert !== !0),
          disabled: m.isMask !== !0 || m.maskInvert === "mixed",
          children: m.maskInvert === "mixed" ? "Mixed" : m.maskInvert ? "On" : "Off"
        }
      ) })
    ] })
  ] });
}
const nl = {
  topLeft: [0, 0],
  topRight: [0, 0],
  bottomRight: [0, 0],
  bottomLeft: [0, 0]
}, sl = {
  topLeft: "TL",
  topRight: "TR",
  bottomRight: "BR",
  bottomLeft: "BL"
}, Mx = n.memo(function({
  items: t
}) {
  const s = Ne((x) => x.updateItem), {
    isEditing: a,
    editingItemId: o,
    startEditing: i,
    stopEditing: c
  } = Fr(), l = t.length === 1 ? t[0] : null, u = l?.cornerPin ?? nl, d = a && o === l?.id, f = n.useMemo(() => u.topLeft[0] !== 0 || u.topLeft[1] !== 0 || u.topRight[0] !== 0 || u.topRight[1] !== 0 || u.bottomRight[0] !== 0 || u.bottomRight[1] !== 0 || u.bottomLeft[0] !== 0 || u.bottomLeft[1] !== 0, [u]), m = n.useCallback(
    (x, v, C) => {
      if (!l) return;
      const y = l.cornerPin ?? nl, w = [...y[x]];
      w[v] = C, s(l.id, {
        cornerPin: { ...y, [x]: w }
      });
    },
    [l, s]
  ), b = n.useCallback(() => {
    l && s(l.id, { cornerPin: void 0 });
  }, [l, s]), h = n.useCallback(() => {
    d ? c() : l && i(l.id);
  }, [d, l, i, c]);
  return !l || t.length > 1 ? null : /* @__PURE__ */ r.jsxs(dr, { title: "Corner Pin", icon: So, defaultOpen: !1, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 px-1 mb-2", children: [
      /* @__PURE__ */ r.jsxs(
        be,
        {
          variant: d ? "default" : "outline",
          size: "sm",
          className: "h-7 text-xs flex-1 gap-1",
          onClick: h,
          title: d ? "Exit corner pin editor" : "Edit corners on preview",
          children: [
            /* @__PURE__ */ r.jsx(So, { className: "w-3 h-3" }),
            d ? "Editing..." : "Edit"
          ]
        }
      ),
      f && /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: b,
          title: "Reset corner pin",
          children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    Object.keys(sl).map((x) => /* @__PURE__ */ r.jsx(Ke, { label: sl[x], children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        $t,
        {
          value: u[x][0],
          onChange: (v) => m(x, 0, v),
          min: -2e3,
          max: 2e3,
          step: 1,
          unit: "x",
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        $t,
        {
          value: u[x][1],
          onChange: (v) => m(x, 1, v),
          min: -2e3,
          max: 2e3,
          step: 1,
          unit: "y",
          className: "flex-1 min-w-0"
        }
      )
    ] }) }, x))
  ] });
});
function Rx(e) {
  return e.type === "image" && (e.label?.toLowerCase().endsWith(".gif") ?? !1);
}
function Px(e) {
  const t = new Set(e.map((a) => a.type)), s = e.some(Rx);
  return {
    hasVisualItems: t.has("video") || t.has("image") || t.has("text") || t.has("shape") || t.has("adjustment") || t.has("composition"),
    hasVideoItems: t.has("video"),
    hasGifItems: s,
    hasAudioItems: t.has("video") || t.has("audio"),
    hasTextItems: t.has("text"),
    hasShapeItems: t.has("shape"),
    hasAdjustmentItems: t.has("adjustment"),
    isOnlyTextOrShape: e.length > 0 && e.every(
      (a) => a.type === "text" || a.type === "shape"
    )
  };
}
const Ix = n.memo(function() {
  const t = kt((M) => M.clipInspectorTab), s = kt((M) => M.setClipInspectorTab), a = Vt((M) => M.selectedItemIds), o = Ne((M) => M.updateItemsTransform), i = gr((M) => M.currentProject?.metadata.width ?? 1920), c = gr((M) => M.currentProject?.metadata.height ?? 1080), l = gr((M) => M.currentProject?.metadata.fps ?? 30), u = Zt(
    fn(
      n.useCallback((M) => {
        const Y = [];
        for (const G of a) {
          const X = M.itemById[G];
          X && Y.push(X);
        }
        return Y;
      }, [a])
    )
  ), d = n.useMemo(
    () => ({
      width: i,
      height: c,
      fps: l
    }),
    [l, c, i]
  ), f = n.useMemo(
    () => Px(u),
    [u]
  ), {
    hasVisualItems: m,
    hasVideoItems: b,
    hasGifItems: h,
    hasAudioItems: x,
    hasTextItems: v,
    hasShapeItems: C,
    hasAdjustmentItems: y,
    isOnlyTextOrShape: w
  } = f, S = n.useMemo(
    () => u.filter((M) => M.type !== "audio" && M.type !== "adjustment"),
    [u]
  ), R = n.useMemo(
    () => u.filter((M) => M.type !== "audio"),
    [u]
  ), O = n.useMemo(() => {
    if (u.length === 0) return !0;
    const M = u.find(
      (Y) => Y.transform?.aspectRatioLocked !== void 0
    );
    return M ? M.transform.aspectRatioLocked : !w;
  }, [u, w]), L = n.useCallback(() => {
    const M = !O, Y = u.map((G) => G.id);
    o(Y, { aspectRatioLocked: M });
  }, [O, u, o]), I = n.useCallback(
    (M, Y) => {
      o(M, Y);
    },
    [o]
  ), j = S.length > 0, P = x, F = m, E = n.useMemo(() => {
    const M = [];
    return j && M.push("video"), P && M.push("audio"), F && M.push("effects"), M;
  }, [P, F, j]), T = E[0] ?? "video", N = E.includes(t) ? t : T;
  n.useEffect(() => {
    u.length !== 0 && t !== N && s(N);
  }, [N, t, u.length, s]);
  const z = n.useCallback((M) => {
    s(M);
  }, [s]);
  return u.length === 0 ? null : /* @__PURE__ */ r.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ r.jsxs(Y0, { value: N, onValueChange: z, className: "w-full", children: [
    /* @__PURE__ */ r.jsxs(Pu, { className: "grid w-full grid-cols-3 h-8", children: [
      /* @__PURE__ */ r.jsxs(
        na,
        {
          value: "video",
          disabled: !j,
          className: "text-xs gap-1 px-2",
          children: [
            /* @__PURE__ */ r.jsx(Gl, { className: "h-3 w-3" }),
            "Video"
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs(
        na,
        {
          value: "audio",
          disabled: !P,
          className: "text-xs gap-1 px-2",
          children: [
            /* @__PURE__ */ r.jsx(Wl, { className: "h-3 w-3" }),
            "Audio"
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs(
        na,
        {
          value: "effects",
          disabled: !F,
          className: "text-xs gap-1 px-2",
          children: [
            /* @__PURE__ */ r.jsx(vs, { className: "h-3 w-3" }),
            "Effects"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx(sa, { value: "video", className: "mt-3", children: j && /* @__PURE__ */ r.jsxs("div", { className: "divide-y divide-border [&>*]:py-4 [&>*:first-child]:pt-0 [&>*:last-child]:pb-0", children: [
      j && /* @__PURE__ */ r.jsx(
        X0,
        {
          items: S,
          canvas: d,
          onTransformChange: I,
          aspectLocked: O,
          onAspectLockToggle: L
        }
      ),
      b && /* @__PURE__ */ r.jsx(Q0, { items: u }),
      j && /* @__PURE__ */ r.jsx(
        Z0,
        {
          items: S,
          canvas: d,
          onTransformChange: I
        }
      ),
      j && /* @__PURE__ */ r.jsx(Mx, { items: S }),
      v && /* @__PURE__ */ r.jsx(
        tl,
        {
          items: u,
          canvas: d,
          showEffectSection: !1,
          showAnimationSection: !1
        }
      ),
      C && /* @__PURE__ */ r.jsx(kx, { items: u }),
      h && /* @__PURE__ */ r.jsx(ex, { items: u })
    ] }) }),
    /* @__PURE__ */ r.jsxs(sa, { value: "audio", className: "space-y-4 mt-3", children: [
      x && /* @__PURE__ */ r.jsx(sx, { items: u }),
      Xd
    ] }),
    /* @__PURE__ */ r.jsx(sa, { value: "effects", className: "space-y-4 mt-3", children: m && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      y && /* @__PURE__ */ r.jsx("div", { className: "px-2 py-2 text-xs text-muted-foreground bg-purple-500/10 rounded border border-purple-500/20", children: "Effects on adjustment layers apply to all items on tracks above." }),
      /* @__PURE__ */ r.jsx(lm, { items: R }),
      v && /* @__PURE__ */ r.jsx(Eo, {}),
      v && /* @__PURE__ */ r.jsx(
        tl,
        {
          items: u,
          canvas: d,
          showContentSection: !1
        }
      )
    ] }) })
  ] }) });
}), go = "oklch(0.65 0.20 250)", Fx = [
  "oklch(0.65 0.20 250)",
  // Blue (default)
  "oklch(0.65 0.20 30)",
  // Red
  "oklch(0.70 0.20 140)",
  // Green
  "oklch(0.70 0.18 85)",
  // Yellow
  "oklch(0.60 0.20 310)",
  // Purple
  "oklch(0.70 0.15 180)"
  // Cyan
];
function Tx() {
  const e = Vt((h) => h.selectedMarkerId), t = Vt((h) => h.clearSelection), s = Ne((h) => h.markers), a = Ne((h) => h.updateMarker), o = Ne((h) => h.removeMarker), i = Ne((h) => h.fps), c = n.useMemo(
    () => s.find((h) => h.id === e),
    [s, e]
  ), l = n.useCallback(
    (h) => {
      e && a(e, { frame: Math.max(0, Math.round(h)) });
    },
    [e, a]
  ), u = n.useCallback(
    (h) => {
      e && a(e, { label: h.target.value || void 0 });
    },
    [e, a]
  ), d = n.useCallback(
    (h) => {
      e && a(e, { color: h });
    },
    [e, a]
  ), f = n.useCallback(() => {
    e && (o(e), t());
  }, [e, o, t]), m = n.useCallback(() => {
    e && c?.color !== go && a(e, { color: go });
  }, [e, c?.color, a]), b = n.useCallback(
    (h) => {
      const x = h / i, v = Math.floor(x / 60), C = Math.floor(x % 60), y = h % i;
      return `${String(v).padStart(2, "0")}:${String(C).padStart(2, "0")}.${String(y).padStart(2, "0")}`;
    },
    [i]
  );
  return c ? /* @__PURE__ */ r.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ r.jsxs(dr, { title: "Marker", icon: Ui, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Frame", children: /* @__PURE__ */ r.jsx(
      $t,
      {
        value: c.frame,
        onChange: l,
        min: 0,
        step: 1,
        unit: "fr",
        className: "flex-1 min-w-0"
      }
    ) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Time", children: /* @__PURE__ */ r.jsx("span", { className: "text-xs font-mono tabular-nums text-muted-foreground", children: b(c.frame) }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Label", children: /* @__PURE__ */ r.jsx(
      jl,
      {
        value: c.label || "",
        onChange: u,
        placeholder: "Enter label...",
        className: "h-7 text-xs flex-1 min-w-0"
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      Wn,
      {
        label: "Color",
        color: c.color,
        onChange: d,
        onReset: m,
        defaultColor: go,
        presets: Fx
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "pt-2", children: /* @__PURE__ */ r.jsxs(
      be,
      {
        variant: "destructive",
        size: "sm",
        className: "w-full h-7 text-xs",
        onClick: f,
        children: [
          /* @__PURE__ */ r.jsx(zl, { className: "w-3 h-3 mr-1.5" }),
          "Delete Marker"
        ]
      }
    ) })
  ] }) }) : /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
    /* @__PURE__ */ r.jsx(Ui, { className: "w-8 h-8 text-muted-foreground/50 mb-2" }),
    /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground", children: "Marker not found" })
  ] });
}
function Qs(e) {
  return e.direction ? `${e.id}:${e.direction}` : e.id;
}
function Ex(e) {
  return e.direction ? e.description : e.label;
}
const jx = [
  { value: "linear", label: "Linear" },
  { value: "ease-in", label: "In" },
  { value: "ease-out", label: "Out" },
  { value: "ease-in-out", label: "In & Out" }
];
function al(e) {
  return jx.filter((t) => e.includes(t.value));
}
function Nx() {
  const e = Vt(
    (T) => T.selectedTransitionId
  ), t = Vt(
    (T) => T.clearSelection
  ), s = Ne((T) => T.transitions), a = Ne(
    (T) => T.updateTransition
  ), o = Ne(
    (T) => T.removeTransition
  ), i = Ne((T) => T.fps), c = Ne((T) => T.items), l = n.useMemo(
    () => s.find((T) => T.id === e),
    [s, e]
  ), u = l && l.type in Oi ? Oi[l.type] : null, d = n.useMemo(
    () => l ? c.find((T) => T.id === l.leftClipId) : null,
    [c, l]
  ), f = n.useMemo(
    () => l ? c.find((T) => T.id === l.rightClipId) : null,
    [c, l]
  ), m = n.useMemo(
    () => Object.entries(eu()).filter(([, T]) => T.length > 0),
    []
  ), b = n.useMemo(
    () => m.flatMap(([, T]) => T),
    [m]
  ), h = n.useMemo(
    () => b.find((T) => T.id === l?.presentation && (T.direction ?? void 0) === (l?.direction ?? void 0)),
    [b, l?.presentation, l?.direction]
  ), x = n.useMemo(
    () => l ? Jr.getDefinition(l.presentation) : void 0,
    [l]
  ), v = n.useMemo(
    () => al(x?.supportedTimings ?? []),
    [x]
  ), C = 1, y = n.useMemo(() => {
    if (!u || !l || !d || !f)
      return i * 3;
    const T = d.from + d.durationInFrames;
    if (!(Math.abs(T - f.from) <= 1)) {
      const M = Math.floor(Math.min(d.durationInFrames, f.durationInFrames) - 1);
      return Math.max(C, Math.max(l.durationInFrames, Math.min(i * 3, M)));
    }
    const z = Zd(d, f, l.alignment);
    return Math.max(C, Math.max(l.durationInFrames, Math.min(i * 3, z)));
  }, [u, l, d, f, i]), w = n.useCallback(
    (T, N) => {
      if (e) {
        const z = { presentation: T, direction: N }, M = Jr.getDefinition(T), G = al(M?.supportedTimings ?? [])[0], X = l?.timing;
        G && M && X && !M.supportedTimings.includes(X) && (z.timing = G.value), a(e, z);
      }
    },
    [e, l?.timing, a]
  ), S = n.useCallback((T) => {
    const N = b.find((z) => Qs(z) === T);
    N && w(N.id, N.direction);
  }, [w, b]), R = n.useCallback(
    (T) => {
      if (e && u) {
        const N = Math.max(
          C,
          Math.min(y, Math.round(T))
        );
        a(e, { durationInFrames: N });
      }
    },
    [e, u, a, C, y]
  ), O = Math.min(i, y), L = n.useCallback(() => {
    if (e && u) {
      const T = Math.max(
        C,
        Math.min(y, O)
      );
      a(e, { durationInFrames: T });
    }
  }, [e, u, a, O, C, y]), I = n.useCallback(
    (T) => {
      e && a(e, { timing: T });
    },
    [e, a]
  ), j = n.useCallback(() => {
    e && (o(e), t());
  }, [e, o, t]), P = n.useCallback(
    (T) => `${(T / i).toFixed(2)}s`,
    [i]
  ), F = n.useCallback(
    (T) => (T / i).toFixed(2),
    [i]
  ), E = n.useCallback(
    (T) => {
      const N = T.trim().replace(/s$/i, ""), z = parseFloat(N);
      return Number.isFinite(z) ? z * i : Number.NaN;
    },
    [i]
  );
  return !l || !u ? /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
    /* @__PURE__ */ r.jsx(yo, { className: "w-8 h-8 text-muted-foreground/50 mb-2" }),
    /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground", children: "Transition not found" })
  ] }) : /* @__PURE__ */ r.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ r.jsxs(dr, { title: "Transition", icon: yo, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Preset", tooltip: "Transition style preset", children: /* @__PURE__ */ r.jsx("div", { className: "w-full", children: /* @__PURE__ */ r.jsxs(
      ps,
      {
        value: h ? Qs(h) : void 0,
        onValueChange: S,
        children: [
          /* @__PURE__ */ r.jsx(gs, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(xs, { placeholder: "Select preset" }) }),
          /* @__PURE__ */ r.jsx(bs, { children: m.map(([T, N]) => /* @__PURE__ */ r.jsxs(Fl, { children: [
            /* @__PURE__ */ r.jsx(Tl, { className: "text-[10px] text-muted-foreground", children: Ql[T]?.title ?? T }),
            N.map((z) => /* @__PURE__ */ r.jsx(
              Gn,
              {
                value: Qs(z),
                className: "text-xs",
                children: Ex(z)
              },
              Qs(z)
            ))
          ] }, T)) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Duration", tooltip: "Transition duration", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        cr,
        {
          value: l.durationInFrames,
          onChange: R,
          min: C,
          max: y,
          step: 1,
          formatValue: P,
          formatInputValue: F,
          parseInputValue: E,
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: L,
          title: "Reset to 1s",
          children: /* @__PURE__ */ r.jsx(Ut, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    v.length > 0 && /* @__PURE__ */ r.jsx(Ke, { label: "Ease", tooltip: "Easing curve for the transition", children: /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-0.5 p-0.5 bg-secondary rounded-md", children: v.map((T) => /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        onClick: () => I(T.value),
        className: ur(
          "px-3 py-1 text-xs rounded transition-colors",
          l.timing === T.value ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
        ),
        children: T.label
      },
      T.value
    )) }) }),
    /* @__PURE__ */ r.jsx("div", { className: "pt-2", children: /* @__PURE__ */ r.jsxs(
      be,
      {
        variant: "destructive",
        size: "sm",
        className: "w-full h-7 text-xs",
        onClick: j,
        children: [
          /* @__PURE__ */ r.jsx(zl, { className: "w-3 h-3 mr-1.5" }),
          "Delete"
        ]
      }
    ) })
  ] }) });
}
function Ax(e) {
  const t = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = s.linkedGroupId ?? s.id, o = s.label.trim() || null, i = t.get(a);
    if (!i) {
      t.set(a, {
        displayLabel: o,
        labels: o ? [o] : [],
        audioOnly: s.type === "audio"
      });
      continue;
    }
    o && (i.labels.push(o), (!i.displayLabel || i.audioOnly && s.type !== "audio") && (i.displayLabel = o)), s.type !== "audio" && (i.audioOnly = !1);
  }
  return Array.from(t.values(), (s) => ({
    displayLabel: s.displayLabel,
    title: s.labels.filter((a, o, i) => i.indexOf(a) === o).join(", ")
  }));
}
function Dx(e) {
  const t = Ax(e), s = t.length;
  if (s === 0) return null;
  if (s === 1 && t[0]?.displayLabel)
    return {
      text: t[0].displayLabel,
      title: t[0].title || t[0].displayLabel
    };
  const a = `${s} clip${s === 1 ? "" : "s"} selected`;
  return {
    text: a,
    title: t.map((o) => o.title || o.displayLabel).filter(Boolean).join(", ") || a
  };
}
const Ox = n.memo(function({ fillContainer: t = !1 }) {
  const s = pa((I) => I.editorDensity), a = ga(s), o = kt((I) => I.rightSidebarOpen), i = kt((I) => I.toggleRightSidebar), c = kt((I) => I.rightSidebarWidth), l = kt((I) => I.setRightSidebarWidth), u = kt((I) => I.propertiesFullColumn), d = kt((I) => I.togglePropertiesFullColumn), f = Vt((I) => I.selectedItemIds), m = Vt((I) => I.selectedMarkerId), b = Vt((I) => I.selectedTransitionId), h = Zt(
    fn(
      n.useCallback((I) => {
        const j = [];
        for (const P of f) {
          const F = I.itemById[P];
          F && j.push(F);
        }
        return j;
      }, [f])
    )
  ), x = f.length > 0, v = n.useMemo(
    () => Dx(h),
    [h]
  ), C = !b && !m ? v : null, y = n.useRef(!1), w = n.useRef(0), S = n.useRef(0), R = n.useCallback((I) => {
    I.preventDefault(), y.current = !0, w.current = I.clientX, S.current = c, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
  }, [c]);
  n.useEffect(() => {
    const I = (P) => {
      if (!y.current) return;
      const F = w.current - P.clientX, E = Jd(S.current + F, a);
      l(E);
    }, j = () => {
      y.current && (y.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "");
    };
    return document.addEventListener("mousemove", I), document.addEventListener("mouseup", j), () => {
      document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", j), y.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "";
    };
  }, [a, l]);
  const O = o ? t ? void 0 : { width: c, transition: y.current ? "none" : "width 200ms" } : { transition: "width 200ms" }, L = t ? void 0 : { width: c };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `panel-bg border-l border-border shrink-0 relative h-full ${o ? t ? "flex-1 min-w-0 w-full" : "" : "w-0"}`,
        style: O,
        children: [
          /* @__PURE__ */ r.jsx(n.Activity, { mode: o ? "visible" : "hidden", children: /* @__PURE__ */ r.jsxs("div", { className: "h-full flex flex-col w-full", style: L, children: [
            /* @__PURE__ */ r.jsxs(
              "div",
              {
                className: "flex items-center justify-between px-3 border-b border-border flex-shrink-0",
                style: { height: Ye.sidebarHeaderHeight },
                children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "min-w-0 flex items-center gap-1", children: [
                    !t && /* @__PURE__ */ r.jsx(
                      be,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "shrink-0",
                        style: { width: Ye.sidebarHeaderButtonSize, height: Ye.sidebarHeaderButtonSize },
                        onClick: d,
                        "data-tooltip": u ? "Dock to preview" : "Expand full column",
                        "data-tooltip-side": "bottom",
                        children: u ? /* @__PURE__ */ r.jsx(Ho, { className: "w-3 h-3" }) : /* @__PURE__ */ r.jsx(Uo, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ r.jsx(om, { className: "w-3 h-3 shrink-0 text-muted-foreground" }),
                    /* @__PURE__ */ r.jsxs("h2", { className: "min-w-0 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground", children: [
                      /* @__PURE__ */ r.jsx("span", { className: "shrink-0 uppercase tracking-wide", children: "Properties" }),
                      C && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                        /* @__PURE__ */ r.jsx("span", { className: "shrink-0", children: "-" }),
                        /* @__PURE__ */ r.jsx("span", { className: "truncate normal-case tracking-normal", title: C.title, children: C.text })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ r.jsx(
                    be,
                    {
                      variant: "ghost",
                      size: "icon",
                      style: { width: Ye.sidebarHeaderButtonSize, height: Ye.sidebarHeaderButtonSize },
                      onClick: i,
                      children: /* @__PURE__ */ r.jsx(Ss, { className: "w-3.5 h-3.5" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto overflow-x-hidden p-3 [scrollbar-gutter:stable]", children: b ? /* @__PURE__ */ r.jsx(Nx, {}) : m ? /* @__PURE__ */ r.jsx(Tx, {}) : x ? /* @__PURE__ */ r.jsx(Ix, {}) : /* @__PURE__ */ r.jsx(q0, {}) })
          ] }) }),
          o && !t && /* @__PURE__ */ r.jsx(
            "div",
            {
              onMouseDown: R,
              className: "absolute top-0 left-0 w-1 h-full cursor-col-resize hover:bg-primary/50 active:bg-primary/50 transition-colors z-10"
            }
          )
        ]
      }
    ),
    !o && /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: i,
        className: "absolute right-0 top-3 z-10 w-6 bg-secondary/50 hover:bg-secondary border border-border rounded-l-md flex items-center justify-center transition-all hover:w-7",
        style: { height: Ye.sidebarRevealToggleHeight },
        "data-tooltip": "Show Properties Panel",
        "data-tooltip-side": "left",
        children: /* @__PURE__ */ r.jsx(ws, { className: "w-3 h-3 text-muted-foreground" })
      }
    )
  ] });
});
function ea({
  locked: e,
  children: t,
  className: s,
  overlayClassName: a,
  style: o,
  fillHeight: i = !1
}) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ur(
        i ? "relative flex h-full min-h-0 w-full flex-col" : "relative min-h-0",
        s
      ),
      "data-interaction-locked": e ? "true" : "false",
      style: o,
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: ur(
              i ? "flex min-h-0 flex-1 flex-col" : "h-full min-h-0",
              e ? "pointer-events-none select-none opacity-60" : void 0
            ),
            children: t
          }
        ),
        e ? /* @__PURE__ */ r.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: ur(
              "absolute inset-0 z-10 cursor-not-allowed rounded-[inherit] bg-background/10",
              a
            ),
            title: "Finish or exit mask editing to continue"
          }
        ) : null
      ]
    }
  );
}
const _x = 10, Lx = 33, ol = 33, il = 50, cl = 32, us = 22, xo = 55;
function ll({
  onMouseDown: e,
  onReset: t,
  showReset: s,
  resetLabel: a,
  resetTooltip: o
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      onMouseDown: e,
      className: "w-1.5 cursor-col-resize hover:bg-primary/50 active:bg-primary/70 bg-border transition-colors flex-shrink-0 relative group",
      children: s && /* @__PURE__ */ r.jsx(
        "button",
        {
          onMouseDown: (i) => i.stopPropagation(),
          onClick: t,
          className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-primary hover:border-primary hover:[&>svg]:text-primary-foreground",
          "aria-label": a,
          "data-tooltip": o,
          children: /* @__PURE__ */ r.jsx(im, { className: "w-3.5 h-3.5 text-muted-foreground" })
        }
      )
    }
  );
}
const Bx = n.memo(function({
  project: t,
  containerSize: s,
  suspendOverlay: a
}) {
  const o = kt((u) => u.mediaSkimPreviewMediaId), i = kt((u) => u.mediaSkimPreviewFrame), c = kt((u) => u.compoundClipSkimPreviewCompositionId), l = kt((u) => u.compoundClipSkimPreviewFrame);
  return /* @__PURE__ */ r.jsx(To, { level: "component", children: c ? /* @__PURE__ */ r.jsx(
    h0,
    {
      compositionId: c,
      seekFrame: l,
      containerSize: s
    }
  ) : o ? /* @__PURE__ */ r.jsx(
    f0,
    {
      mediaId: o,
      seekFrame: i,
      containerSize: s
    }
  ) : /* @__PURE__ */ r.jsx(
    Bg,
    {
      project: t,
      containerSize: s,
      suspendOverlay: a
    }
  ) });
}), Hx = n.memo(function({ project: t }) {
  const s = n.useRef(null), a = n.useRef(null), { isFullscreen: o, toggleFullscreen: i } = O0({ containerRef: a }), [c, l] = n.useState({ width: 0, height: 0 }), u = pa((Ue) => Ue.editorDensity), d = ga(u), f = ze((Ue) => Ue.isEditing), m = ze((Ue) => Ue.penMode), b = ze((Ue) => Ue.shapePenMode), h = ze((Ue) => Ue.editingItemId), x = ze((Ue) => Ue.selectedVertexIndices), v = ze((Ue) => Ue.selectedVertexIndex), C = ze((Ue) => Ue.penVertices.length), y = ze((Ue) => Ue.previewVertices?.length ?? 0), w = ze((Ue) => Ue.requestFinishPenMode), S = ze((Ue) => Ue.requestCancelPenMode), R = ze((Ue) => Ue.requestConvertSelectedVertex), O = ze((Ue) => Ue.stopEditing), L = Zt(
    n.useCallback((Ue) => {
      if (!h) return 0;
      const Pt = Ue.items.find((zt) => zt.id === h);
      return Pt?.type === "shape" && Pt.shapeType === "path" ? Pt.pathVertices?.length ?? 0 : 0;
    }, [h])
  ), I = gr((Ue) => Ue.currentProject?.metadata.width), j = gr((Ue) => Ue.currentProject?.metadata.height), P = gr((Ue) => Ue.currentProject?.metadata.fps), F = gr((Ue) => Ue.currentProject?.metadata.backgroundColor), E = I ?? t.width, T = j ?? t.height, N = P ?? t.fps, z = F ?? "#000000", Y = Ne((Ue) => {
    if (Ue.items.length === 0) return null;
    let Pt = 0;
    for (const zt of Ue.items) {
      const Re = zt.from + zt.durationInFrames;
      Re > Pt && (Pt = Re);
    }
    return Pt;
  }) ?? N * _x, G = f && !m, X = b && C >= 3, D = x.length, W = D > 0, q = Math.max(0, 3 - C), pe = y || L, k = X ? "Close the path from here, or click the first node." : C === 0 ? "Click in the preview to place your first point." : `Add ${q} more ${q === 1 ? "point" : "points"} to finish.`, B = pe > 0 ? "Drag points, handles, or the mask body to adjust the shape." : "Drag inside the mask to move it.", U = D === 0 ? "Select a point to enable corner and bezier conversion." : D === 1 && v !== null ? `Point ${v + 1} selected for knot conversion.` : `${D} points selected for knot conversion.`;
  n.useEffect(() => {
    const Ue = s.current;
    if (!Ue) return;
    let Pt = null, zt = 0;
    const Re = () => {
      const Bt = Ue.getBoundingClientRect(), nr = Math.max(0, Math.floor(Bt.width - d.previewPadding)), Mr = Math.max(0, Math.floor(Bt.height - d.previewPadding));
      l((Ht) => Ht.width === nr && Ht.height === Mr ? Ht : { width: nr, height: Mr });
    }, Jt = () => {
      Pt === null && (Pt = requestAnimationFrame(() => {
        const Bt = performance.now();
        if (Bt - zt < Lx) {
          Pt = requestAnimationFrame(() => {
            Pt = null, zt = performance.now(), Re();
          });
          return;
        }
        Pt = null, zt = Bt, Re();
      }));
    };
    Re();
    const Kt = new ResizeObserver(Jt);
    return Kt.observe(Ue), () => {
      Kt.disconnect(), Pt !== null && cancelAnimationFrame(Pt);
    };
  }, [d.previewPadding]);
  const J = n.useMemo(
    () => ({ width: E, height: T, fps: N, backgroundColor: z }),
    [E, T, N, z]
  ), re = kt((Ue) => Ue.sourcePreviewMediaId), me = kt((Ue) => Ue.colorScopesOpen), [xe, ye] = n.useState(il), [Me, Be] = n.useState(cl), [Te, De] = n.useState(!1), Qe = n.useRef(null), Ee = n.useRef(!1), ee = n.useRef(null), Ve = n.useRef(null), H = n.useRef(0), ue = n.useRef(null), Ce = n.useRef(!1), Ge = n.useRef(null), ke = n.useRef(null), _ = n.useRef(0), he = n.useRef(null), et = n.useCallback(() => {
    kt.getState().setSourcePreviewMediaId(null);
  }, []), qe = n.useCallback(() => {
    kt.getState().setColorScopesOpen(!1);
  }, []), $e = me ? Math.max(us, Math.min(xo, Me)) : 0, ct = 100 - $e, pt = xe / 100 * ct, Gt = re ? Math.max(
    us,
    Math.min(ct - us, pt)
  ) : 0, vr = il, Lt = cl, Dr = n.useCallback(() => {
    ye(vr);
  }, [vr]), fr = n.useCallback(() => {
    Be(Lt);
  }, [Lt]), yr = n.useCallback((Ue) => {
    Ue.preventDefault(), Ee.current = !0, De(!0), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
    const Pt = (Jt) => {
      if (!Ee.current || !Qe.current) return;
      const Kt = Qe.current.getBoundingClientRect(), Bt = (Jt.clientX - Kt.left) / Kt.width * 100, nr = 100 - (me ? $e : 0);
      ee.current = nr > 0 ? Math.max(0, Math.min(100, Bt / nr * 100)) : 50, Ve.current === null && (Ve.current = requestAnimationFrame(() => {
        Ve.current = null;
        const Mr = performance.now();
        if (Mr - H.current < ol)
          return;
        H.current = Mr;
        const Ht = ee.current;
        Ht !== null && ye(Ht);
      }));
    }, zt = () => {
      const Jt = ee.current;
      Jt !== null && ye(Jt), Ve.current !== null && (cancelAnimationFrame(Ve.current), Ve.current = null), Ee.current = !1, ee.current = null, De(!1), document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", Pt), document.removeEventListener("mouseup", Re), ue.current = null;
    }, Re = () => {
      zt();
    };
    ue.current = zt, document.addEventListener("mousemove", Pt), document.addEventListener("mouseup", Re);
  }, [me, $e]), Or = n.useCallback((Ue) => {
    Ue.preventDefault(), Ce.current = !0, De(!0), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
    const Pt = (Jt) => {
      if (!Ce.current || !Qe.current) return;
      const Kt = Qe.current.getBoundingClientRect();
      Ge.current = (Kt.right - Jt.clientX) / Kt.width * 100, ke.current === null && (ke.current = requestAnimationFrame(() => {
        ke.current = null;
        const Bt = performance.now();
        if (Bt - _.current < ol)
          return;
        _.current = Bt;
        const nr = Ge.current;
        nr !== null && Be(
          Math.max(us, Math.min(xo, nr))
        );
      }));
    }, zt = () => {
      const Jt = Ge.current;
      Jt !== null && Be(
        Math.max(us, Math.min(xo, Jt))
      ), ke.current !== null && (cancelAnimationFrame(ke.current), ke.current = null), Ce.current = !1, Ge.current = null, De(!1), document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", Pt), document.removeEventListener("mouseup", Re), he.current = null;
    }, Re = () => {
      zt();
    };
    he.current = zt, document.addEventListener("mousemove", Pt), document.addEventListener("mouseup", Re);
  }, []);
  n.useEffect(() => () => {
    ue.current?.(), he.current?.();
  }, []);
  const wr = !!re || me, Nt = Math.max(
    0,
    100 - Gt - $e
  );
  return /* @__PURE__ */ r.jsxs("div", { ref: Qe, className: "flex-1 flex min-h-0 min-w-0 relative", role: "region", "aria-label": "Preview area", children: [
    re && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        ea,
        {
          locked: f,
          fillHeight: !0,
          className: "h-full",
          overlayClassName: "rounded-none",
          style: { width: `${Gt}%` },
          children: /* @__PURE__ */ r.jsx("div", { className: "flex h-full flex-col min-w-0", children: /* @__PURE__ */ r.jsx(
            c0,
            {
              mediaId: re,
              onClose: et
            },
            re
          ) })
        }
      ),
      /* @__PURE__ */ r.jsx(ea, { locked: f, overlayClassName: "rounded-none", children: /* @__PURE__ */ r.jsx(
        ll,
        {
          onMouseDown: yr,
          onReset: Dr,
          showReset: Math.abs(Gt - vr) > 0.5,
          resetLabel: "Reset source monitor width",
          resetTooltip: "Reset Source Monitor Width"
        }
      ) })
    ] }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: a,
        className: `flex flex-col min-w-0 min-h-0 panel-bg ${wr ? "" : "flex-1"} ${o ? "min-h-screen rounded-none border-0 bg-background" : ""}`,
        style: wr ? { width: `${Nt}%` } : void 0,
        role: "region",
        "aria-label": "Program monitor",
        children: [
          wr && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "flex items-center px-3 flex-shrink-0",
              style: { height: Ye.previewSplitHeaderHeight },
              children: /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted-foreground", children: "Program" })
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "flex-1 flex flex-col min-w-0 min-h-0", children: [
            /* @__PURE__ */ r.jsx("div", { ref: s, className: "flex-1 min-h-0 relative overflow-hidden", "aria-label": "Preview canvas region", children: /* @__PURE__ */ r.jsx(
              Bx,
              {
                project: J,
                containerSize: c,
                suspendOverlay: Te
              }
            ) }),
            m ? /* @__PURE__ */ r.jsxs(
              "div",
              {
                className: "flex items-center px-3 flex-shrink-0 gap-3 overflow-hidden",
                style: { height: Ye.previewControlsHeight },
                role: "toolbar",
                "aria-label": "Mask pen controls",
                children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
                    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                      /* @__PURE__ */ r.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-500", children: "Pen Tool" }),
                      /* @__PURE__ */ r.jsxs("span", { className: "rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-600", children: [
                        C,
                        " ",
                        C === 1 ? "point" : "points"
                      ] })
                    ] }),
                    /* @__PURE__ */ r.jsx("span", { className: "min-w-0 truncate text-xs text-muted-foreground", children: k })
                  ] }),
                  /* @__PURE__ */ r.jsxs("div", { className: "flex flex-shrink-0 items-center gap-2", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "hidden text-[11px] text-muted-foreground lg:inline", children: "Backspace removes the last point." }),
                    /* @__PURE__ */ r.jsx(
                      be,
                      {
                        type: "button",
                        size: "sm",
                        className: "h-8 px-3 text-[11px]",
                        disabled: !X,
                        onClick: w,
                        children: "Finish Shape"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      be,
                      {
                        type: "button",
                        size: "sm",
                        variant: "ghost",
                        className: "h-8 px-3 text-[11px]",
                        onClick: S,
                        children: "Cancel"
                      }
                    )
                  ] })
                ]
              }
            ) : G ? /* @__PURE__ */ r.jsxs(
              "div",
              {
                className: "flex items-center px-3 flex-shrink-0 gap-3 overflow-hidden",
                style: { height: Ye.previewControlsHeight },
                role: "toolbar",
                "aria-label": "Mask path edit controls",
                children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
                    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                      /* @__PURE__ */ r.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-500", children: "Path Edit" }),
                      /* @__PURE__ */ r.jsxs("span", { className: "rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-600", children: [
                        pe,
                        " ",
                        pe === 1 ? "point" : "points"
                      ] })
                    ] }),
                    /* @__PURE__ */ r.jsx("span", { className: "min-w-0 truncate text-xs text-muted-foreground", children: B })
                  ] }),
                  /* @__PURE__ */ r.jsxs("div", { className: "flex flex-shrink-0 items-center gap-2", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "hidden text-[11px] text-muted-foreground xl:inline", children: "Double-click an edge to add a point. Drag empty space to box-select points." }),
                    /* @__PURE__ */ r.jsx("span", { className: "hidden text-[11px] text-muted-foreground 2xl:inline", children: U }),
                    /* @__PURE__ */ r.jsx(
                      be,
                      {
                        type: "button",
                        size: "sm",
                        variant: W ? "secondary" : "outline",
                        className: "h-8 px-3 text-[11px]",
                        disabled: !W,
                        onClick: () => R("corner"),
                        children: "Corner"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      be,
                      {
                        type: "button",
                        size: "sm",
                        variant: W ? "secondary" : "outline",
                        className: "h-8 px-3 text-[11px]",
                        disabled: !W,
                        onClick: () => R("bezier"),
                        children: "Bezier"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      be,
                      {
                        type: "button",
                        size: "sm",
                        className: "h-8 px-3 text-[11px]",
                        onClick: O,
                        children: "Done"
                      }
                    )
                  ] })
                ]
              }
            ) : /* @__PURE__ */ r.jsxs(
              "div",
              {
                className: "@container relative flex flex-shrink-0 items-center overflow-hidden px-3",
                style: { height: Ye.previewControlsHeight },
                children: [
                  /* @__PURE__ */ r.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ r.jsx($g, { fps: N, totalFrames: Y }) }),
                  /* @__PURE__ */ r.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ r.jsx("div", { className: "pointer-events-auto flex items-center gap-2.5", children: /* @__PURE__ */ r.jsx(zg, { totalFrames: Y, fps: N }) }) }),
                  /* @__PURE__ */ r.jsxs("div", { className: "ml-auto flex flex-shrink-0 items-center gap-0.5", children: [
                    /* @__PURE__ */ r.jsx(Yg, {}),
                    /* @__PURE__ */ r.jsx(Eo, { orientation: "vertical", className: "h-4" }),
                    /* @__PURE__ */ r.jsx(H0, { width: E, height: T }),
                    /* @__PURE__ */ r.jsx(_0, { isFullscreen: o, onToggle: i })
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    ),
    me && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(ea, { locked: f, overlayClassName: "rounded-none", children: /* @__PURE__ */ r.jsx(
        ll,
        {
          onMouseDown: Or,
          onReset: fr,
          showReset: Math.abs($e - Lt) > 0.5,
          resetLabel: "Reset color scopes width",
          resetTooltip: "Reset Color Scopes Width"
        }
      ) }),
      /* @__PURE__ */ r.jsx(
        ea,
        {
          locked: f,
          fillHeight: !0,
          className: "h-full",
          overlayClassName: "rounded-none",
          style: { width: `${$e}%` },
          children: /* @__PURE__ */ r.jsx("div", { className: "flex h-full flex-col min-w-0", children: /* @__PURE__ */ r.jsx(D0, { onClose: qe }) })
        }
      )
    ] })
  ] });
});
let la = null, zr = null, Po = null, Io, Fo;
const ua = /* @__PURE__ */ new Set();
function Ux() {
  if (zr) return zr;
  zr = document.createElement("div"), zr.className = "kc-embed kc-embed-portals dark", document.body.append(zr), Al(zr);
  const e = ul.createRoot(zr.appendChild(document.createElement("div")));
  return e.render(
    /* @__PURE__ */ r.jsxs(Nl, { delayDuration: 300, children: [
      /* @__PURE__ */ r.jsx(hm, {}),
      /* @__PURE__ */ r.jsx(pm, {})
    ] })
  ), Po = e, zr;
}
async function Qx(e) {
  la = e;
  const t = e.project;
  await Qd(t.id) || await ef({
    id: t.id,
    name: t.name,
    description: "",
    duration: 0,
    schemaVersion: _i,
    metadata: { width: t.width, height: t.height, fps: t.fps, backgroundColor: t.backgroundColor },
    createdAt: Date.now(),
    updatedAt: Date.now()
  }), ne.getState().setPreviewFrame(null);
  const s = lr.getState();
  s.setCurrentProject(t.id), s.loadMediaItems().catch((i) => e.notify?.(`Media library: ${String(i)}`, "error")), gr.getState().setCurrentProject({
    id: t.id,
    name: t.name,
    description: "",
    duration: 0,
    schemaVersion: _i,
    metadata: { width: t.width, height: t.height, fps: t.fps, backgroundColor: t.backgroundColor },
    createdAt: Date.now(),
    updatedAt: Date.now()
  }), await Ne.getState().loadTimeline(t.id, { allowProjectUpgrade: !0 }), Io?.(), Io = tf(), Fo?.();
  let a, o = !1;
  Fo = Ne.subscribe(() => {
    const i = Ne.getState().isDirty;
    if (!i || o) {
      o = i;
      return;
    }
    o = i, clearTimeout(a), a = setTimeout(() => {
      Ne.getState().saveTimeline(t.id).then(() => la?.commit?.("Sequencer edit"));
    }, 400);
  });
}
function Ca(e, t) {
  Ux(), e.classList.add("kc-embed", "dark");
  const s = ul.createRoot(e);
  return s.render(
    /* @__PURE__ */ r.jsx(n.StrictMode, { children: /* @__PURE__ */ r.jsx(To, { level: "feature", children: /* @__PURE__ */ r.jsx(Nl, { delayDuration: 300, children: t }) }) })
  ), ua.add(s), {
    dispose() {
      ua.delete(s), s.unmount(), e.classList.remove("kc-embed", "dark");
    }
  };
}
function Vx() {
  const e = Ne((s) => s.fps), t = Zt((s) => s.maxItemEndFrame);
  return /* @__PURE__ */ r.jsx(Yu, { duration: Math.max(t / Math.max(e, 1), 10) });
}
function Gx() {
  const e = la?.project;
  return e ? /* @__PURE__ */ r.jsx(Hx, { project: e }) : null;
}
const eb = (e) => Ca(e, /* @__PURE__ */ r.jsx(Vx, {})), tb = (e) => Ca(e, /* @__PURE__ */ r.jsx(Gx, {})), rb = (e) => Ca(e, /* @__PURE__ */ r.jsx(W0, { fillContainer: !0 })), nb = (e) => Ca(e, /* @__PURE__ */ r.jsx(Ox, { fillContainer: !0 }));
function sb() {
  for (const e of [...ua]) e.unmount();
  ua.clear(), Po?.unmount(), Po = null, zr?.remove(), zr = null, Al(void 0), Io?.(), Fo?.(), ne.getState().pause(), rf(), la = null;
}
export {
  sb as disposeAll,
  rb as mountMedia,
  tb as mountPreview,
  eb as mountSequencer,
  nb as mountStripProperties,
  Qx as openProject
};
