import { r as s, j as r, b as bd, d as El } from "./react-vendor-18pR7s9b.js";
import { u as Qa, T as vd, a as yd, i as Fl, M as wd, E as Yo, K as Sd, b as kd, S as qo, c as Cd } from "./feature-editing-ui-BcqaI7d6.js";
import { e2 as Md, e3 as en, dj as jl, c as fr, b as be, d as Pt, e4 as $i, dp as Rd, e5 as Ao, e6 as Pd, e7 as Id, e8 as Td, e9 as Ed, ea as Ca, eb as Ma, j as re, ec as Wn, dg as Er, df as Yr, ed as Ra, ee as Fd, ef as eo, eg as Xo, eh as to, ei as jd, ej as Nd, dZ as Xe, ek as Pa, el as Rn, em as _r, cd as Is, au as hn, en as Ad, eo as Ki, ep as Nl, eq as Al, bQ as Dl, er as Ol, bp as Zt, J as pn, P as Zo, es as Dd, bm as _l, U as Qt, bW as Od, et as _d, eu as Ld, c9 as Ia, ev as Bd, ew as Fr, ex as ze, a8 as Hd, $ as Yt, bM as Ll, ce as Ud, aO as Ss, ey as Bl, ez as ga, eA as Hl, eB as Jo, eC as Ul, C as Gl, eD as Gd, aG as xs, aH as Cn, aJ as Do, aK as bs, eE as Vd, eF as us, eG as Yi, eH as Wd, eI as Qs, eJ as ro, eK as Oo, eL as no, eM as Vl, eN as so, eO as qi, E as qe, eP as Wl, ds as zd, B as ve, eQ as zl, eR as Ts, eS as $l, dw as Kl, a7 as Es, eT as Yl, eU as $d, eV as Kd, eW as zn, cK as ql, cL as Xl, n as Yd, cN as Zl, cO as Jl, eX as Fs, eY as Qo, eZ as Ql, e_ as eu, e$ as ei, dq as qd, aZ as Jt, q as ts, s as Ta, cT as tu, e as Ct, f0 as Xd, f1 as cr, f2 as lr, f3 as Zd, f4 as ur, f5 as Jd, f6 as Qd, f7 as ef, V as Xi, f8 as tf, f9 as rf, fa as ru, l as nf, fb as sf, dk as _o, c2 as er, fc as af, dQ as of, fd as Zi, bU as ao, bS as oo, fe as cf, bV as da, ff as ds, fg as lf, fh as uf, d_ as io, d$ as df, dl as nu, fi as ti, dG as Ji, dt as ff, du as mf, fj as hf, fk as ri, fl as ni, fm as pf, cZ as gf, c_ as xf, fn as bf, e0 as mr, fo as vf, dX as Gt, dU as Ke, a5 as yf, fp as wf, fq as Kt, L as Sf, a6 as kf, dV as dr, d5 as ks, d6 as Cs, d7 as Ms, d8 as Rs, fr as Cf, fs as su, ft as au, d9 as Kn, fu as Mf, al as Rf, fv as xa, cv as Pf, fw as If, am as Tf, fx as Ef, fy as Ff, fz as jf, fA as Nf, dr as Af, fB as Df, d1 as Of, cA as ou, fC as iu, fD as _f, fE as fs, dN as Lf, dc as cu, dT as Bf, fF as Hf, dW as Yn, M as Uf, dx as Gf, fG as Qi, bK as lu, fH as ec, fI as Vf, fJ as Wf, fK as zf, fL as uu, fM as Ea, fN as $f, fO as tc, fP as Kf, fQ as Yf, bq as qf, fR as Xf, fS as Zf, u as Jf, cD as rc, cE as nc, fT as Qf, fU as sc, c6 as em, fV as tm, cH as rm, cI as nm, fW as sm, fX as am, fY as om, fZ as im, f_ as cm, f$ as du, c4 as lm, g0 as fu, g1 as um, g2 as dm } from "./feature-editing-core-BfTqGYFs.js";
import { g3 as Tv } from "./feature-editing-core-BfTqGYFs.js";
import "./gif-processing-CfWcW1Gl.js";
import { c as Fa, a as fm } from "./core-logger-Dau_Juxv.js";
import { an as mm, ag as Lo, am as Ps, ao as Bo, ap as ac, aq as oc, ar as hm, as as pm, at as gm, au as xm, av as bm, aw as vm, al as ym, ax as wm, ay as si, af as mu, az as Sm, aA as km, aB as Cm, aC as Mm, aD as Rm, ah as hu, aE as Pm, aF as Im, aj as Tm, aG as Em, aH as Fm, aI as jm, aJ as Nm, aK as Am, aL as Dm, aM as Om, aN as _m, aO as Lm, aP as Bm, aQ as Hm, aR as Um, aS as Gm, aT as Vm, aU as Wm, aV as zm, aW as $m, aX as Km, aY as Ym, aZ as qm, a_ as Xm } from "./vendor-icons-Ce83X_M4.js";
import { u as gn } from "./state-vendor-Ctus6aXD.js";
import { E as co, u as Zm, a as Jm } from "./feature-effects-CqMVvs2p.js";
import { ae as pu, af as gu, ag as xu, ah as bu, ai as Qm } from "./vendor-ui-KmnPcjbe.js";
const eh = {
  top: "translate(-50%, -100%)",
  bottom: "translate(-50%, 0)",
  left: "translate(-100%, -50%)",
  right: "translate(0, -50%)"
}, th = {
  top: "bottom center",
  bottom: "top center",
  left: "right center",
  right: "left center"
}, rh = {
  top: "slide-in-from-bottom-2",
  bottom: "slide-in-from-top-2",
  left: "slide-in-from-right-2",
  right: "slide-in-from-left-2"
};
function nh() {
  const [e, t] = s.useState({
    visible: !1,
    text: "",
    x: 0,
    y: 0,
    side: "top"
  }), n = s.useRef(null), a = s.useRef(null), o = s.useCallback((i) => {
    const l = i.getAttribute("data-tooltip");
    if (!l) return;
    const u = i.getBoundingClientRect(), d = i.getAttribute("data-tooltip-side") || "top", f = 4;
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
  }, []), c = s.useCallback(() => {
    t((i) => ({ ...i, visible: !1 }));
  }, []);
  return s.useEffect(() => {
    const i = (d) => {
      const f = d.target;
      if (!f || typeof f.closest != "function") {
        const b = f?.parentElement;
        if (!b) return;
        const h = b.closest("[data-tooltip]");
        if (!h) return;
        n.current && (clearTimeout(n.current), n.current = null), n.current = setTimeout(() => o(h), 300);
        return;
      }
      const m = f.closest("[data-tooltip]");
      m && (n.current && (clearTimeout(n.current), n.current = null), n.current = setTimeout(() => {
        o(m);
      }, 300));
    }, l = (d) => {
      const f = d.target, m = f?.nodeType === Node.ELEMENT_NODE ? f : f?.parentElement;
      !m || !m.closest("[data-tooltip]") || (n.current && (clearTimeout(n.current), n.current = null), c());
    }, u = (d) => {
      const f = d.target, m = f?.nodeType === Node.ELEMENT_NODE ? f : f?.parentElement;
      !m || !m.closest("[data-tooltip]") || (n.current && (clearTimeout(n.current), n.current = null), c());
    };
    return document.addEventListener("mouseenter", i, !0), document.addEventListener("mouseleave", l, !0), document.addEventListener("click", u, !0), () => {
      document.removeEventListener("mouseenter", i, !0), document.removeEventListener("mouseleave", l, !0), document.removeEventListener("click", u, !0), n.current && clearTimeout(n.current);
    };
  }, [o, c]), e.visible ? /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: a,
      style: {
        position: "fixed",
        left: e.x,
        top: e.y,
        transform: eh[e.side],
        zIndex: 50,
        pointerEvents: "none"
      },
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          role: "tooltip",
          className: `overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 ${rh[e.side]}`,
          style: { transformOrigin: th[e.side] },
          children: e.text
        }
      )
    }
  ) : null;
}
const sh = ({ ...e }) => /* @__PURE__ */ r.jsx(
  Md,
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
), vu = [
  { label: "24 fps (Film)", value: 24 },
  { label: "25 fps (PAL)", value: 25 },
  { label: "30 fps (Standard)", value: 30 },
  { label: "50 fps (PAL High)", value: 50 },
  { label: "60 fps (Smooth)", value: 60 }
], ah = [
  { label: "120 fps (Legacy)", value: 120 },
  { label: "240 fps (Legacy)", value: 240 }
];
[
  ...vu.map((e) => e.value),
  ...ah.map((e) => e.value)
];
[
  ...vu.map((e) => e.value)
];
function ic(e) {
  return Math.max(0, Math.min(1, e));
}
function lo(e, t) {
  const n = Math.cos(e * Math.PI / 2);
  return t ? n * n : 1 - n * n;
}
const oh = {
  gpuTransitionId: "fade",
  calculateStyles(e, t) {
    const n = ic(e);
    return {
      opacity: lo(n, t)
    };
  },
  renderCanvas(e, t, n, a) {
    const o = ic(a), c = lo(o, !0), i = lo(o, !1);
    e.save(), e.globalCompositeOperation = "copy", e.globalAlpha = i, e.drawImage(n, 0, 0), e.globalCompositeOperation = "lighter", e.globalAlpha = c, e.drawImage(t, 0, 0), e.restore();
  }
}, ih = {
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
function ch(e) {
  e.register("fade", ih, oh);
}
const lh = ["from-left", "from-right", "from-top", "from-bottom"], uh = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function Ho(e) {
  return Math.max(0, Math.min(1, e));
}
function dh(e, t, n) {
  const a = Ho(e), o = 1 - a;
  switch (t) {
    case "from-left":
      return n ? `inset(0 0 0 ${a * 100}%)` : `inset(0 ${o * 100}% 0 0)`;
    case "from-right":
      return n ? `inset(0 ${a * 100}% 0 0)` : `inset(0 0 0 ${o * 100}%)`;
    case "from-top":
      return n ? `inset(${a * 100}% 0 0 0)` : `inset(0 0 ${o * 100}% 0)`;
    case "from-bottom":
      return n ? `inset(0 0 ${a * 100}% 0)` : `inset(${o * 100}% 0 0 0)`;
    default:
      return "none";
  }
}
const fh = {
  gpuTransitionId: "wipe",
  calculateStyles(e, t, n, a, o) {
    const c = Ho(e), l = dh(c, o || "from-left", t);
    return {
      clipPath: l,
      webkitClipPath: l,
      opacity: 1
    };
  },
  renderCanvas(e, t, n, a, o, c) {
    const i = Ho(a), l = o || "from-left", u = c?.width ?? t.width, d = c?.height ?? t.height, f = new Path2D(), m = new Path2D();
    switch (l) {
      case "from-left":
        m.rect(0, 0, i * u, d), f.rect(i * u, 0, u, d);
        break;
      case "from-right":
        m.rect((1 - i) * u, 0, u, d), f.rect(0, 0, (1 - i) * u, d);
        break;
      case "from-top":
        m.rect(0, 0, u, i * d), f.rect(0, i * d, u, d);
        break;
      case "from-bottom":
        m.rect(0, (1 - i) * d, u, d), f.rect(0, 0, u, (1 - i) * d);
        break;
    }
    e.save(), e.clip(m), e.drawImage(n, 0, 0), e.restore(), e.save(), e.clip(f), e.drawImage(t, 0, 0), e.restore();
  }
}, mh = {
  id: "wipe",
  label: "Wipe",
  description: "Wipe reveal from one direction",
  category: "wipe",
  icon: "ArrowRight",
  hasDirection: !0,
  directions: lh,
  supportedTimings: [...uh],
  defaultDuration: 30,
  minDuration: 5,
  maxDuration: 90
};
function hh(e) {
  e.register("wipe", mh, fh);
}
const ph = ["from-left", "from-right", "from-top", "from-bottom"], gh = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function cc(e, t, n, a, o) {
  const c = n ? e : e - 1;
  switch (t) {
    case "from-left":
      return { x: Math.round(c * a), y: 0 };
    case "from-right":
      return { x: Math.round(-c * a), y: 0 };
    case "from-top":
      return { x: 0, y: Math.round(c * o) };
    case "from-bottom":
      return { x: 0, y: Math.round(-c * o) };
    default:
      return { x: 0, y: 0 };
  }
}
const xh = {
  gpuTransitionId: "slide",
  calculateStyles(e, t, n, a, o) {
    const c = o || "from-left", i = t ? e : e - 1;
    let l;
    switch (c) {
      case "from-left":
        l = `translateX(${i * n}px)`;
        break;
      case "from-right":
        l = `translateX(${-i * n}px)`;
        break;
      case "from-top":
        l = `translateY(${i * a}px)`;
        break;
      case "from-bottom":
        l = `translateY(${-i * a}px)`;
        break;
      default:
        l = "none";
    }
    return { transform: l };
  },
  renderCanvas(e, t, n, a, o, c) {
    const i = o || "from-left", l = c?.width ?? t.width, u = c?.height ?? t.height, d = cc(a, i, !1, l, u);
    e.drawImage(n, d.x, d.y);
    const f = cc(a, i, !0, l, u);
    e.drawImage(t, f.x, f.y);
  }
}, bh = {
  id: "slide",
  label: "Slide",
  description: "Slide in from a direction",
  category: "slide",
  icon: "MoveRight",
  hasDirection: !0,
  directions: ph,
  supportedTimings: [...gh],
  defaultDuration: 30,
  minDuration: 5,
  maxDuration: 90
};
function vh(e) {
  e.register("slide", bh, xh);
}
const yh = ["from-left", "from-right", "from-top", "from-bottom"], wh = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"], Sh = {
  gpuTransitionId: "flip",
  calculateStyles(e, t, n, a, o) {
    const c = o || "from-left", i = c === "from-left" || c === "from-right" ? "Y" : "X", l = c === "from-right" || c === "from-bottom" ? -1 : 1, u = 0.5, d = t ? e < u ? 1 : 0 : e >= u ? 1 : 0;
    let f;
    if (t) {
      const m = Math.min(e / u, 1);
      f = `perspective(1000px) rotate${i}(${l * m * 90}deg)`;
    } else {
      const m = Math.max((e - u) / u, 0);
      f = `perspective(1000px) rotate${i}(${l * (-90 + m * 90)}deg)`;
    }
    return { transform: f, opacity: d };
  },
  renderCanvas(e, t, n, a, o, c) {
    const i = Math.max(0, Math.min(1, a)), l = o || "from-left", u = l === "from-left" || l === "from-right", d = c?.width ?? t.width, f = c?.height ?? t.height, m = 0.5;
    if (i < m) {
      const b = i / m, h = Math.cos(b * Math.PI / 2);
      e.save(), e.translate(d / 2, f / 2), u ? e.scale(h, 1) : e.scale(1, h), e.translate(-d / 2, -f / 2), e.drawImage(t, 0, 0), e.restore();
    } else {
      const b = (i - m) / m, h = Math.sin(b * Math.PI / 2);
      e.save(), e.translate(d / 2, f / 2), u ? e.scale(h, 1) : e.scale(1, h), e.translate(-d / 2, -f / 2), e.drawImage(n, 0, 0), e.restore();
    }
  }
}, kh = {
  id: "flip",
  label: "Flip",
  description: "3D flip transition",
  category: "flip",
  icon: "FlipHorizontal",
  hasDirection: !0,
  directions: yh,
  supportedTimings: [...wh],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 60
};
function Ch(e) {
  e.register("flip", kh, Sh);
}
const yu = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function ba(e) {
  return Math.max(0, Math.min(1, e));
}
function wu(e, t, n) {
  const a = e?.[t];
  return typeof a != "number" || !Number.isFinite(a) ? n : a;
}
function lc(e, t) {
  return Math.sqrt(Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) * 1.2;
}
const Mh = {
  gpuTransitionId: "clockWipe",
  calculateStyles(e, t, n, a, o, c) {
    const i = ba(e), l = Math.max(0, wu(c, "edgeSoftness", 8));
    if (t) {
      const u = i * 360, f = `conic-gradient(from -90deg, transparent ${Math.max(0, u - l)}deg, rgba(0,0,0,0.8) ${u}deg, black ${Math.min(360, u + l)}deg)`;
      return {
        maskImage: f,
        webkitMaskImage: f,
        maskSize: "100% 100%",
        webkitMaskSize: "100% 100%",
        opacity: 1 - 0.1 * i
      };
    }
    return {
      opacity: 0.85 + 0.15 * i
    };
  },
  renderCanvas(e, t, n, a, o, c) {
    const i = ba(a), l = c?.width ?? t.width, u = c?.height ?? t.height, d = l / 2, f = u / 2, m = Math.sqrt(l * l + u * u), b = -Math.PI / 2, h = i * Math.PI * 2, x = b + h;
    e.save(), e.globalAlpha = 0.85 + 0.15 * i, e.drawImage(n, 0, 0, l, u), e.restore(), e.save();
    const v = new Path2D();
    v.moveTo(d, f), v.arc(d, f, m, x, b + Math.PI * 2, !1), v.closePath(), e.clip(v), e.globalAlpha = 1 - 0.1 * i, e.drawImage(t, 0, 0, l, u), e.restore();
  }
}, Rh = {
  id: "clockWipe",
  label: "Clock Wipe",
  description: "Circular wipe like a clock hand",
  category: "mask",
  icon: "Clock",
  hasDirection: !1,
  supportedTimings: [...yu],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 90
}, Ph = {
  gpuTransitionId: "iris",
  calculateStyles(e, t, n, a, o, c) {
    const i = ba(e), l = Math.max(0, wu(c, "edgeSoftness", 6));
    if (t) {
      const u = lc(n, a), d = i * u, f = Math.max(0, d - l), m = d + l, b = `radial-gradient(circle at center, transparent ${f}px, rgba(0,0,0,0.85) ${d}px, black ${m}px)`;
      return {
        maskImage: b,
        webkitMaskImage: b,
        maskSize: "100% 100%",
        webkitMaskSize: "100% 100%",
        opacity: 1 - 0.1 * i
      };
    }
    return {
      opacity: 0.85 + 0.15 * i
    };
  },
  renderCanvas(e, t, n, a, o, c) {
    const i = ba(a), l = c?.width ?? t.width, u = c?.height ?? t.height, d = lc(l, u), f = i * d, m = l / 2, b = u / 2;
    e.save(), e.globalAlpha = 0.85 + 0.15 * i, e.drawImage(n, 0, 0, l, u), e.restore(), e.save();
    const h = new Path2D();
    h.rect(0, 0, l, u), h.arc(m, b, f, 0, Math.PI * 2), e.clip(h, "evenodd"), e.globalAlpha = 1 - 0.1 * i, e.drawImage(t, 0, 0, l, u), e.restore();
  }
}, Ih = {
  id: "iris",
  label: "Iris",
  description: "Circular iris expanding/contracting",
  category: "mask",
  icon: "Circle",
  hasDirection: !1,
  supportedTimings: [...yu],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 90
};
function Th(e) {
  e.register("clockWipe", Rh, Mh), e.register("iris", Ih, Ph);
}
const In = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function ar(e) {
  return Math.max(0, Math.min(1, e));
}
function $n(e, t, n) {
  const a = Math.max(t - e, Number.EPSILON), o = ar((n - e) / a);
  return o * o * (3 - 2 * o);
}
function ea(e, t, n) {
  const a = e?.[t];
  return typeof a != "number" || !Number.isFinite(a) ? n : a;
}
function Mr(e) {
  const t = Math.sin(e * 12.9898 + 78.233) * 43758.5453123;
  return t - Math.floor(t);
}
function vr(e, t) {
  return t ? Math.cos(e * Math.PI / 2) : Math.sin(e * Math.PI / 2);
}
function Eh(e, t, n, a, o, c) {
  e.beginPath();
  for (let i = 0; i < 8; i += 1) {
    const l = c + Math.PI / 4 * i, u = i % 2 === 0 ? a : o, d = t + Math.cos(l) * u, f = n + Math.sin(l) * u;
    i === 0 ? e.moveTo(d, f) : e.lineTo(d, f);
  }
  e.closePath();
}
function uo(e, t, n, a, o, c, i = 1, l = 1) {
  e.save(), e.translate(t, n), e.rotate(c), e.scale(i, l), Eh(e, 0, 0, a, o, 0), e.fill(), e.restore();
}
function Fh(e, t, n, a, o, c) {
  const i = ar(a), l = o?.width ?? t.width, u = o?.height ?? t.height, d = Math.max(0.55, ea(c, "sparkleScale", 1)), f = Math.max(0.35, ea(c, "intensity", 1)), m = Math.max(0.5, ea(c, "density", 1)), b = Math.max(0, ea(c, "glow", 1)), h = 1 - $n(0.74, 1, i);
  e.save(), e.drawImage(n, 0, 0, l, u), e.restore();
  const x = new OffscreenCanvas(l, u), v = x.getContext("2d");
  if (!v) {
    e.save(), e.globalAlpha = vr(i, !0), e.drawImage(t, 0, 0, l, u), e.restore();
    return;
  }
  v.clearRect(0, 0, l, u), v.save(), v.drawImage(t, 0, 0, l, u), v.restore();
  const S = Math.round(24 + m * 22), y = [];
  for (let w = 0; w < S; w += 1) {
    const k = w + 1, R = Math.min(
      0.94,
      0.04 + Mr(k * 31.7) * 0.72 + Mr(k * 7.9) * 0.16
    ), O = 0.14 + Mr(k * 41.9) * 0.18, L = ar((i - R) / O), I = $n(0, 0.16, L), N = 1 - $n(0.3, 0.95, L), P = I * N, T = $n(0.06, 0.72, L);
    if (P <= 0.01 && T <= 0.02) continue;
    const j = L * (3.6 + Mr(k * 5.3) * 3.8) + Mr(k * 11.1), E = 0.35 + 0.65 * ((Math.sin(j * Math.PI * 2) + 1) / 2), A = Math.min(1, P * E * f), z = Math.min(1, T * (0.25 + E * 0.35) * f), M = Mr(k * 13.1) * l, q = Mr(k * 17.9) * u, V = Math.pow(Mr(k * 19.7), 0.55), X = (4 + V * 34) * d * (0.55 + P * 1.15), D = Mr(k * 23.3) * Math.PI * 2, W = Math.cos(D), Y = Math.sin(D), pe = (10 + V * 28) * P, C = (3 + V * 10) * P, B = D + L * (2.4 + Mr(k * 29.1) * 4.5) * Math.PI, U = M + W * pe + Math.cos(B) * C, J = q + Y * pe + Math.sin(B) * C * 0.8, ne = D + L * (2 + V * 3.5) * Math.PI;
    v.save(), v.globalCompositeOperation = "destination-out", v.globalAlpha = A, v.fillStyle = "rgba(0, 0, 0, 1)", uo(v, U, J, X, X * 0.24, ne), v.globalAlpha = A * 0.46, uo(
      v,
      U - W * X * 0.9,
      J - Y * X * 0.9,
      X * 0.78,
      X * 0.14,
      ne - 0.45,
      1.9,
      0.58
    ), v.globalAlpha = A * 0.22, uo(
      v,
      U - W * X * 1.55,
      J - Y * X * 1.55,
      X * 0.52,
      X * 0.12,
      ne - 0.7,
      2.4,
      0.42
    );
    const me = 3 + Math.round(V * 2);
    v.globalAlpha = z * 0.08;
    for (let xe = 0; xe < me; xe += 1) {
      const we = k * 53.1 + xe * 7.3, Re = Mr(we) * Math.PI * 2, Be = X * (1.3 + Mr(we * 1.7) * 2.1) * (0.5 + T), Fe = X * (0.14 + Mr(we * 2.9) * 0.24) * (0.55 + T);
      v.beginPath(), v.arc(
        U + Math.cos(Re) * Be,
        J + Math.sin(Re) * Be * 0.85,
        Fe,
        0,
        Math.PI * 2
      ), v.fill();
    }
    v.beginPath(), v.arc(U, J, X * 0.24, 0, Math.PI * 2), v.fill(), v.restore(), y.push({
      x: U,
      y: J,
      radius: X * 2.6,
      alpha: Math.min(1, A + z * 0.45),
      veilRadius: X * 5.4
    });
  }
  if (y.length > 0 && b > 0) {
    e.save(), e.globalCompositeOperation = "screen";
    for (const w of y) {
      const k = e.createRadialGradient(
        w.x,
        w.y,
        0,
        w.x,
        w.y,
        w.veilRadius
      );
      k.addColorStop(0, `rgba(255, 245, 228, ${0.12 * w.alpha * b})`), k.addColorStop(0.45, `rgba(255, 226, 184, ${0.06 * w.alpha * b})`), k.addColorStop(1, "rgba(255, 214, 165, 0)"), e.fillStyle = k, e.fillRect(
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
      const k = e.createRadialGradient(
        w.x,
        w.y,
        0,
        w.x,
        w.y,
        w.radius
      );
      k.addColorStop(0, `rgba(255, 252, 240, ${0.38 * w.alpha * b})`), k.addColorStop(0.32, `rgba(255, 224, 170, ${0.26 * w.alpha * b})`), k.addColorStop(1, "rgba(255, 210, 150, 0)"), e.fillStyle = k, e.fillRect(
        w.x - w.radius,
        w.y - w.radius,
        w.radius * 2,
        w.radius * 2
      );
    }
    e.restore();
  }
}
const jh = {
  gpuTransitionId: "dissolve",
  calculateStyles(e, t) {
    return { opacity: vr(ar(e), t) };
  },
  renderCanvas(e, t, n, a) {
    const o = ar(a);
    e.save(), e.globalAlpha = vr(o, !1), e.drawImage(n, 0, 0), e.restore(), e.save(), e.globalAlpha = vr(o, !0), e.drawImage(t, 0, 0), e.restore();
  }
}, Nh = {
  id: "dissolve",
  label: "Dissolve",
  description: "Noise-based organic dissolve between clips",
  category: "basic",
  icon: "Sparkles",
  hasDirection: !1,
  supportedTimings: [...In],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 90
}, Ah = {
  gpuTransitionId: "sparkles",
  calculateStyles(e, t) {
    const n = ar(e), a = Math.sin(n * Math.PI), o = t ? 0.2 : 1.05, c = 14 * a, i = Math.sin(n * Math.PI * 2.2 + o) * c * 0.55, l = Math.cos(n * Math.PI * 1.6 + o) * c * 0.28, u = Math.sin(n * Math.PI * 1.8 + o) * a * 1.6, d = t ? 1 - 0.03 * n : 1.03 - 0.03 * n;
    return {
      opacity: t ? 1 - $n(0.2, 0.94, n) : $n(0.06, 0.8, n),
      transform: a > 0.08 ? `translate(${i}px, ${l}px) rotate(${u}deg) scale(${d})` : void 0
    };
  },
  renderCanvas(e, t, n, a, o, c, i) {
    Fh(e, t, n, a, c, i);
  }
}, Dh = {
  id: "sparkles",
  label: "Sparkles",
  description: "Twinkling star bursts reveal the next clip",
  category: "custom",
  icon: "Sparkles",
  hasDirection: !1,
  supportedTimings: [...In],
  defaultDuration: 24,
  minDuration: 8,
  maxDuration: 72
}, Oh = {
  gpuTransitionId: "glitch",
  calculateStyles(e, t) {
    const n = ar(e), a = Math.sin(n * Math.PI), o = Math.sin(n * 47) * a * 5, c = 0.5;
    return t ? {
      opacity: n < c ? 1 : 0,
      transform: a > 0.2 ? `translateX(${o}px)` : void 0
    } : {
      opacity: n >= c ? 1 : 0,
      transform: a > 0.2 ? `translateX(${-o}px)` : void 0
    };
  },
  renderCanvas(e, t, n, a) {
    ar(a) < 0.5 ? e.drawImage(t, 0, 0) : e.drawImage(n, 0, 0);
  }
}, _h = {
  id: "glitch",
  label: "Glitch",
  description: "Digital glitch with RGB split and block displacement",
  category: "custom",
  icon: "Zap",
  hasDirection: !1,
  supportedTimings: [...In],
  defaultDuration: 20,
  minDuration: 5,
  maxDuration: 60
}, Lh = {
  gpuTransitionId: "lightLeak",
  calculateStyles(e, t) {
    return { opacity: vr(ar(e), t) };
  },
  renderCanvas(e, t, n, a, o, c) {
    const i = ar(a), l = c?.width ?? t.width, u = c?.height ?? t.height, d = o || "from-left";
    e.save(), e.globalAlpha = vr(i, !1), e.drawImage(n, 0, 0, l, u), e.restore(), e.save(), e.globalAlpha = vr(i, !0), e.drawImage(t, 0, 0, l, u), e.restore();
    const f = Math.sin(i * Math.PI);
    if (f > 0.1) {
      e.save();
      let m, b;
      switch (d) {
        case "from-left":
          m = i * l, b = u / 2;
          break;
        case "from-right":
          m = (1 - i) * l, b = u / 2;
          break;
        case "from-top":
          m = l / 2, b = i * u;
          break;
        case "from-bottom":
          m = l / 2, b = (1 - i) * u;
          break;
        default:
          m = i * l, b = u / 2;
      }
      const h = Math.max(l, u) * 0.4, x = e.createRadialGradient(m, b, 0, m, b, h);
      x.addColorStop(0, `rgba(255, 230, 180, ${0.3 * f})`), x.addColorStop(1, "rgba(255, 230, 180, 0)"), e.globalCompositeOperation = "lighter", e.fillStyle = x, e.fillRect(0, 0, l, u), e.restore();
    }
  }
}, Bh = {
  id: "lightLeak",
  label: "Light Leak",
  description: "Warm light sweep revealing the next clip",
  category: "light",
  icon: "Sun",
  hasDirection: !0,
  directions: ["from-left", "from-right", "from-top", "from-bottom"],
  supportedTimings: [...In],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 90
}, Hh = {
  gpuTransitionId: "pixelate",
  calculateStyles(e, t) {
    return { opacity: vr(ar(e), t) };
  },
  renderCanvas(e, t, n, a) {
    ar(a) < 0.5 ? e.drawImage(t, 0, 0) : e.drawImage(n, 0, 0);
  }
}, Uh = {
  id: "pixelate",
  label: "Pixelate",
  description: "Mosaic pixelation dissolve between clips",
  category: "custom",
  icon: "Grid3x3",
  hasDirection: !1,
  supportedTimings: [...In],
  defaultDuration: 20,
  minDuration: 8,
  maxDuration: 60
}, Gh = {
  gpuTransitionId: "chromatic",
  calculateStyles(e, t) {
    return { opacity: vr(ar(e), t) };
  },
  renderCanvas(e, t, n, a, o, c) {
    const i = ar(a), l = c?.width ?? t.width, u = c?.height ?? t.height;
    e.save(), e.globalAlpha = vr(i, !1), e.drawImage(n, 0, 0, l, u), e.restore(), e.save(), e.globalAlpha = vr(i, !0), e.drawImage(t, 0, 0, l, u), e.restore();
  }
}, Vh = {
  id: "chromatic",
  label: "Chromatic",
  description: "RGB channel split with directional sweep",
  category: "chromatic",
  icon: "Aperture",
  hasDirection: !0,
  directions: ["from-left", "from-right", "from-top", "from-bottom"],
  supportedTimings: [...In],
  defaultDuration: 25,
  minDuration: 10,
  maxDuration: 60
}, Wh = {
  gpuTransitionId: "radialBlur",
  calculateStyles(e, t) {
    const n = ar(e), a = Math.sin(n * Math.PI), o = 1 + a * 0.02;
    return {
      opacity: vr(n, t),
      transform: a > 0.1 ? `scale(${o})` : void 0
    };
  },
  renderCanvas(e, t, n, a) {
    const o = ar(a);
    e.save(), e.globalAlpha = vr(o, !1), e.drawImage(n, 0, 0), e.restore(), e.save(), e.globalAlpha = vr(o, !0), e.drawImage(t, 0, 0), e.restore();
  }
}, zh = {
  id: "radialBlur",
  label: "Radial Blur",
  description: "Zoom and spin blur transition",
  category: "custom",
  icon: "CircleDot",
  hasDirection: !1,
  supportedTimings: [...In],
  defaultDuration: 25,
  minDuration: 10,
  maxDuration: 60
};
function $h(e) {
  e.register("dissolve", Nh, jh), e.register("sparkles", Dh, Ah), e.register("glitch", _h, Oh), e.register("lightLeak", Bh, Lh), e.register("pixelate", Uh, Hh), e.register("chromatic", Vh, Gh), e.register("radialBlur", zh, Wh);
}
let uc = !1;
function Kh() {
  uc || (uc = !0, ch(en), hh(en), vh(en), Ch(en), Th(en), $h(en));
}
Kh();
const Yh = {
  Blend: si,
  ArrowRight: wm,
  ArrowLeft: ym,
  ArrowDown: vm,
  ArrowUp: bm,
  MoveRight: xm,
  MoveLeft: gm,
  MoveDown: pm,
  MoveUp: hm,
  FlipHorizontal: oc,
  FlipHorizontal2: oc,
  FlipVertical: ac,
  FlipVertical2: ac,
  Clock: jl,
  Circle: Bo,
  Sparkles: Ps,
  Zap: Lo,
  Sun: mm
}, Su = {
  basic: { title: "Basic" },
  wipe: { title: "Wipe" },
  slide: { title: "Slide" },
  flip: { title: "Flip" },
  mask: { title: "Mask" },
  light: { title: "Light" },
  chromatic: { title: "Chromatic" },
  custom: { title: "Custom" }
}, va = [
  "basic",
  "wipe",
  "slide",
  "flip",
  "mask",
  "light",
  "chromatic",
  "custom"
], qh = {
  "from-left": { label: "Left", icon: "ArrowRight" },
  "from-right": { label: "Right", icon: "ArrowLeft" },
  "from-top": { label: "Top", icon: "ArrowDown" },
  "from-bottom": { label: "Bottom", icon: "ArrowUp" }
};
function Xh(e) {
  return e.hasDirection && e.directions && e.directions.length > 0 ? e.directions.map((t) => {
    const n = qh[t] || { label: t, icon: e.icon };
    return {
      id: e.id,
      label: n.label,
      description: `${e.label} ${n.label.toLowerCase()}`,
      icon: n.icon,
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
function Zh() {
  const e = /* @__PURE__ */ new Map(), t = [], n = new Set(va);
  for (const a of en.getDefinitions()) {
    const o = Xh(a);
    if (!n.has(a.category)) {
      t.push(...o);
      continue;
    }
    const c = e.get(a.category) ?? [];
    c.push(...o), e.set(a.category, c);
  }
  return [
    ...va.flatMap((a) => e.get(a) ?? []),
    ...t
  ];
}
let fa = null, Gn = null, Uo = null;
function ai() {
  if (fa) return;
  fa = Zh(), Gn = {}, Uo = {};
  for (const t of fa)
    Gn[t.category] || (Gn[t.category] = []), Gn[t.category].push(t);
  let e = 0;
  for (const t of va)
    Uo[t] = e, e += Gn[t]?.length || 0;
}
function dc() {
  return ai(), fa;
}
function ku() {
  return ai(), Gn;
}
function Jh() {
  return ai(), Uo;
}
const Qh = s.memo(function({
  config: t,
  configIndex: n,
  onApply: a,
  clickDisabled: o,
  onDragStart: c,
  onDragEnd: i
}) {
  const l = Yh[t.icon] ?? si, u = s.useCallback(() => {
    o || a(n);
  }, [o, n, a]);
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      onClick: u,
      draggable: !0,
      onDragStart: (d) => c(d, n),
      onDragEnd: i,
      "aria-disabled": o,
      className: fr(
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
}), ep = s.memo(function({
  category: t,
  configs: n,
  startIndex: a,
  onApply: o,
  clickDisabled: c,
  onDragStart: i,
  onDragEnd: l
}) {
  const u = Su[t] || { title: t };
  return n.length === 0 ? null : /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ r.jsx("div", { className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider", children: u.title }),
    /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-4 gap-1.5", children: n.map((d, f) => /* @__PURE__ */ r.jsx(
      Qh,
      {
        config: d,
        configIndex: a + f,
        onApply: o,
        clickDisabled: c,
        onDragStart: i,
        onDragEnd: l
      },
      `${d.id}-${d.direction || f}`
    )) })
  ] });
}), tp = s.memo(function() {
  const t = be((S) => S.addTransition), n = be((S) => S.updateTransition), a = be((S) => S.items), o = be((S) => S.transitions), c = Pt((S) => S.selectedItemIds), i = c.length, l = i === 1 ? c[0] : null, u = s.useMemo(() => l ? $i({ selectedItemIds: [l], items: a, transitions: o }) : null, [l, a, o]), d = Qa((S) => S.setDraggedTransition), f = Qa((S) => S.setInvalidHint), m = Qa((S) => S.clearDrag), b = s.useCallback((S, y) => {
    const w = dc()[y];
    if (!w) return;
    const k = {
      presentation: w.id,
      direction: w.direction
    };
    S.dataTransfer.effectAllowed = "copy", S.dataTransfer.setData(vd, JSON.stringify(k)), d(k), f(null);
  }, [d, f]), h = s.useCallback(() => {
    m();
  }, [m]), x = s.useCallback(
    (S) => {
      const y = dc()[S];
      if (!y) return;
      const { items: w, transitions: k } = be.getState(), R = Pt.getState().selectedItemIds, O = $i({
        selectedItemIds: R,
        items: w,
        transitions: k
      });
      if (!O || !O.hasExisting && !O.canApply) return;
      const { leftClipId: L, rightClipId: I, hasExisting: N, existingTransitionId: P } = O, T = y.id, j = y.direction;
      N && P ? n(P, { presentation: T, direction: j }) : t(
        L,
        I,
        "crossfade",
        O.suggestedDurationInFrames,
        T,
        j
      );
    },
    [t, n]
  ), v = !!u && (u.hasExisting || u.canApply);
  return /* @__PURE__ */ r.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ r.jsx("div", { className: "px-3 py-2 border-b border-border bg-secondary/30", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-2 text-xs", children: [
      /* @__PURE__ */ r.jsx(Rd, { className: "w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5" }),
      /* @__PURE__ */ r.jsx("div", { className: "text-muted-foreground leading-relaxed", children: v ? /* @__PURE__ */ r.jsx("span", { className: "text-primary", children: "Click to apply to the selected cut, or drag a transition onto any valid cut in the timeline." }) : u?.reason ? /* @__PURE__ */ r.jsxs("span", { children: [
        "Drag a transition onto a valid cut. Click-to-apply is unavailable here: ",
        u.reason,
        "."
      ] }) : i === 1 ? /* @__PURE__ */ r.jsx("span", { children: "Drag a transition onto a valid cut, or place clips next to each other and select one clip to click-apply." }) : i > 1 ? /* @__PURE__ */ r.jsx("span", { children: "Drag a transition onto a valid cut, or select a single video or image clip to click-apply." }) : /* @__PURE__ */ r.jsx("span", { children: "Drag a transition onto a valid cut, or select a video or image clip to add a transition to its neighbor." }) })
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-4", children: va.map((S) => {
      const y = ku()[S];
      return !y || y.length === 0 ? null : /* @__PURE__ */ r.jsx(
        ep,
        {
          category: S,
          configs: y,
          startIndex: Jh()[S],
          onApply: x,
          clickDisabled: !v,
          onDragStart: b,
          onDragEnd: h
        },
        S
      );
    }) })
  ] });
}), rp = Fa("PlayerEmitter");
class np {
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
  addEventListener(t, n) {
    this.listeners[t].push(n);
  }
  removeEventListener(t, n) {
    this.listeners[t] = this.listeners[t].filter((a) => a !== n);
  }
  once(t, n) {
    const a = (o) => {
      n(o), this.removeEventListener(t, a);
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
  dispatchVolumeChange(t, n) {
    this.dispatchEvent("volumechange", { volume: t, isMuted: n });
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
  dispatchEvent(t, n) {
    const a = this.listeners[t];
    for (const o of a)
      try {
        o({ detail: n });
      } catch (c) {
        rp.error(`Error in event listener for ${t}:`, c);
      }
  }
}
const Cu = s.createContext(void 0);
function Mu() {
  const e = s.useContext(Cu);
  if (!e)
    throw new Error("usePlayerEmitter must be used within a Player component");
  return e;
}
const ja = ({ children: e, emitter: t }) => {
  const n = s.useMemo(() => t ?? new np(), [t]);
  return /* @__PURE__ */ r.jsx(Cu.Provider, { value: n, children: e });
};
function Ru(e, t = {}) {
  const { loop: n = !1, onEnded: a } = t, { playing: o, imperativePlaying: c, playbackRate: i } = Ao(), { setPlaying: l } = Pd(), u = Id(), d = Mu(), [f, m] = s.useState(!1), b = s.useRef(0), h = s.useRef(0), x = s.useRef(!1), v = Td(e), S = Ed(), y = Ao().frame;
  h.current = y;
  const w = s.useCallback(
    (M) => {
      let q = Math.max(S, Math.min(M, v));
      q < S && (q = S), q > v && (q = v), h.current = q, u(q), d.dispatchSeek(q);
    },
    [S, v, u, d]
  ), k = s.useCallback(() => {
    c.current || (m(!0), h.current >= v && w(S), c.current = !0, l(!0), d.dispatchPlay());
  }, [c, v, S, l, d, w]), R = s.useCallback(() => {
    c.current && (c.current = !1, l(!1), d.dispatchPause());
  }, [c, l, d]), O = s.useCallback(() => {
    c.current && (c.current = !1, h.current = b.current, u(b.current), l(!1), d.dispatchPause());
  }, [c, u, l, d]), L = s.useCallback(() => {
    c.current ? R() : k();
  }, [c, R, k]), I = s.useCallback(() => c.current, [c]), N = s.useCallback(() => h.current, []), P = s.useCallback(() => i, [i]), T = s.useCallback(
    (M) => {
      d.dispatchRateChange(M);
    },
    [d]
  ), j = s.useCallback(() => x.current, []), E = s.useCallback(
    (M) => {
      if (c.current)
        return;
      const q = h.current, V = Math.max(S, q - M);
      q !== V && w(V);
    },
    [c, S, w]
  ), A = s.useCallback(
    (M) => {
      if (c.current)
        return;
      const q = h.current, V = Math.min(v, q + M);
      q !== V && w(V);
    },
    [c, v, w]
  );
  return s.useMemo(() => ({
    frameBack: E,
    frameForward: A,
    isLastFrame: h.current === v,
    isFirstFrame: h.current === S,
    emitter: d,
    playing: o,
    play: k,
    pause: R,
    pauseAndReturnToPlayStart: O,
    seek: w,
    getCurrentFrame: N,
    isPlaying: I,
    hasPlayed: f,
    isBuffering: j,
    toggle: L,
    setPlaybackRate: T,
    getPlaybackRate: P
  }), [
    E,
    A,
    v,
    S,
    d,
    o,
    k,
    R,
    O,
    w,
    N,
    I,
    f,
    j,
    L,
    T,
    P
  ]);
}
const sp = ({ isPlaying: e, onToggle: t }) => /* @__PURE__ */ r.jsx(
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
), ap = ({ currentFrame: e, durationInFrames: t, seek: n }) => {
  const a = t > 0 ? e / t * 100 : 0, o = s.useRef(null), c = s.useRef(!1), i = s.useRef(null), l = s.useRef(null), u = s.useCallback(
    (f) => {
      const m = o.current;
      if (!m) return;
      const b = m.getBoundingClientRect(), h = f - b.left, x = Math.max(0, Math.min(1, h / b.width)), v = Math.round(x * t);
      n(Math.max(0, Math.min(v, t - 1)));
    },
    [t, n]
  ), d = s.useCallback(
    (f) => {
      f.preventDefault(), f.stopPropagation(), c.current = !0, u(f.clientX);
      const m = (h) => {
        c.current && u(h.clientX);
      }, b = () => {
        c.current = !1, i.current && (document.removeEventListener("mousemove", i.current), i.current = null), l.current && (document.removeEventListener("mouseup", l.current), l.current = null);
      };
      i.current = m, l.current = b, document.addEventListener("mousemove", m), document.addEventListener("mouseup", b);
    },
    [u]
  );
  return s.useEffect(() => () => {
    i.current && (document.removeEventListener("mousemove", i.current), i.current = null), l.current && (document.removeEventListener("mouseup", l.current), l.current = null), c.current = !1;
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
}, op = ({
  isPlaying: e,
  currentFrame: t,
  durationInFrames: n,
  fps: a,
  playbackRate: o,
  isFullscreen: c,
  onTogglePlay: i,
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
      ap,
      {
        currentFrame: t,
        durationInFrames: n,
        seek: l
      }
    ) }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx(
          sp,
          {
            isPlaying: e,
            onToggle: i
          }
        ),
        /* @__PURE__ */ r.jsxs("span", { className: "text-sm text-white ml-2", children: [
          f(t),
          " / ",
          f(n - 1)
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
            "aria-label": c ? "Exit fullscreen" : "Enter fullscreen",
            children: c ? /* @__PURE__ */ r.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }) }) : /* @__PURE__ */ r.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ r.jsx("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }) })
          }
        )
      ] })
    ] })
  ] });
}, ip = s.forwardRef(
  ({
    children: e,
    durationInFrames: t,
    fps: n,
    initialFrame: a = 0,
    loop: o = !1,
    controls: c = !0,
    autoPlay: i = !1,
    initiallyMuted: l = !1,
    playbackRate: u = 1,
    className: d,
    style: f,
    width: m = 1280,
    height: b = 720,
    onEnded: h,
    onFrameChange: x,
    onPlayStateChange: v
  }, S) => {
    const [y, w] = s.useState(!1), k = s.useRef(null), R = s.useRef(null), O = s.useRef(null), L = s.useCallback(() => {
      const z = k.current, M = R.current, q = O.current;
      if (!z || !M || !q) return;
      const V = z.clientWidth, X = z.clientHeight, D = V > 0 && X > 0 ? Math.min(V / m, X / b) : 1, W = m * D, Y = b * D;
      M.style.width = `${W}px`, M.style.height = `${Y}px`, M.style.marginLeft = `${-W / 2}px`, M.style.marginTop = `${-Y / 2}px`, q.style.width = `${m}px`, q.style.height = `${b}px`, q.style.transform = `scale(${D})`;
    }, [b, m]);
    s.useEffect(() => {
      const z = k.current;
      if (!z) return;
      let M = null;
      const q = () => {
        M === null && (M = requestAnimationFrame(() => {
          M = null, L();
        }));
      }, V = new ResizeObserver(q);
      return V.observe(z), L(), () => {
        V.disconnect(), M !== null && cancelAnimationFrame(M);
      };
    }, [L]);
    const I = Ru(t, { loop: o, onEnded: h }), {
      frame: N,
      playing: P,
      playbackRate: T,
      setPlaybackRate: j
    } = Ao(), E = Mu();
    s.useEffect(() => {
      a > 0 && N === 0 && I.seek(a);
    }, [a, N, I]), s.useEffect(() => {
      i && !P && I.play();
    }, [i, P, I]), s.useEffect(() => {
      x?.(N);
    }, [N, x]), s.useEffect(() => {
      v?.(P);
    }, [P, v]);
    const A = s.useCallback(async () => {
      k.current && (document.fullscreenElement ? await document.exitFullscreen() : await k.current.requestFullscreen());
    }, []);
    return s.useEffect(() => {
      const z = () => {
        w(!!document.fullscreenElement);
      };
      return document.addEventListener("fullscreenchange", z), () => {
        document.removeEventListener("fullscreenchange", z);
      };
    }, []), s.useImperativeHandle(
      S,
      () => ({
        play: () => I.play(),
        pause: () => I.pause(),
        toggle: () => I.toggle(),
        seekTo: (z) => I.seek(z),
        getCurrentFrame: () => I.getCurrentFrame(),
        isPlaying: () => I.isPlaying(),
        addEventListener: (z, M) => {
          E.addEventListener(z, M);
        },
        removeEventListener: (z, M) => {
          E.removeEventListener(z, M);
        }
      }),
      [I, E]
    ), /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: k,
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
          c && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "absolute inset-0 cursor-pointer",
                onClick: () => I.toggle()
              }
            ),
            /* @__PURE__ */ r.jsx(
              op,
              {
                isPlaying: P,
                currentFrame: N,
                durationInFrames: t,
                fps: n,
                playbackRate: T,
                isFullscreen: y,
                onTogglePlay: I.toggle,
                onSeek: I.seek,
                onPlaybackRateChange: j,
                onToggleFullscreen: A
              }
            )
          ] })
        ]
      }
    );
  }
), Pu = s.forwardRef(
  (e, t) => {
    const {
      durationInFrames: n,
      fps: a,
      initialFrame: o,
      initiallyMuted: c,
      playbackRate: i,
      loop: l,
      onEnded: u
    } = e;
    return /* @__PURE__ */ r.jsx(ja, { children: /* @__PURE__ */ r.jsx(
      Ca,
      {
        fps: a,
        durationInFrames: n,
        initialFrame: o,
        initiallyMuted: c,
        initialPlaybackRate: i,
        loop: l,
        onEnded: u,
        onVolumeChange: () => {
        },
        children: /* @__PURE__ */ r.jsx(
          Ma,
          {
            fps: a,
            width: e.width ?? 1280,
            height: e.height ?? 720,
            durationInFrames: n,
            children: /* @__PURE__ */ r.jsx(ip, { ...e, ref: t })
          }
        )
      }
    ) });
  }
);
Pu.displayName = "Player";
function cp(e, t) {
  const n = be((h) => h.keyframes), a = s.useMemo(
    () => n.find((h) => h.itemId === e.id),
    [n, e.id]
  ), o = re((h) => h.currentFrame), c = re((h) => h.previewFrame), i = re((h) => h.displayedFrame), l = re((h) => h.isPlaying), u = re((h) => h.currentFrameEpoch), d = re((h) => h.previewFrameEpoch), m = Wn({
    currentFrame: o,
    previewFrame: c,
    displayedFrame: i,
    isPlaying: l,
    currentFrameEpoch: u,
    previewFrameEpoch: d
  }) - e.from;
  return {
    transform: s.useMemo(() => {
      const h = Er(e), x = Yr(
        e,
        { width: t.width, height: t.height },
        h
      );
      return a ? Ra(x, a, m) : x;
    }, [e, t, a, m]),
    hasKeyframes: !!a,
    relativeFrame: m
  };
}
function lp(e, t, n, a, o) {
  if (a < 0 || a >= o)
    return { handled: !1 };
  const i = t?.properties.find((l) => l.property === n)?.keyframes.find((l) => l.frame === a);
  return i ? { handled: !0, action: "update", existingKeyframeId: i.id } : Fd(e, n) ? { handled: !0, action: "add" } : { handled: !1 };
}
function Zn(e, t, n, a, o) {
  const c = o - e.from, i = lp(
    e.id,
    t,
    n,
    c,
    e.durationInFrames
  );
  return i.handled ? i.action === "update" && i.existingKeyframeId ? {
    type: "update",
    itemId: e.id,
    property: n,
    keyframeId: i.existingKeyframeId,
    updates: { value: a }
  } : {
    type: "add",
    itemId: e.id,
    property: n,
    frame: c,
    value: a,
    easing: "linear"
  } : null;
}
const up = ["x", "y", "width", "height", "rotation"];
function Iu(e, t) {
  const n = s.useEffectEvent((a) => {
    a.key === "Escape" && t();
  });
  s.useEffect(() => {
    if (e)
      return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [e]);
}
const dp = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
function Tu({
  bounds: e,
  rotation: t,
  isInteracting: n,
  isMask: a = !1,
  onTranslateStart: o,
  onScaleStart: c,
  onRotateStart: i
}) {
  const l = (d) => {
    const f = to / 2, { width: m, height: b } = e, h = {
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
      width: to,
      height: to,
      ...h[d],
      cursor: Xo(d, t)
    };
  }, u = a ? n ? "#0891b2" : "#06b6d4" : n ? "#4547c8" : "#5b5df1";
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
    dp.map((d) => {
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
          onMouseDown: (m) => c(d, m)
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
          top: -eo,
          marginLeft: -5,
          zIndex: 102
        },
        role: "button",
        "aria-label": "Rotate selected element",
        tabIndex: 0,
        "data-gizmo": "rotate",
        onMouseDown: i
      }
    ),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "absolute border-l border-dashed border-primary pointer-events-none",
        style: {
          left: "50%",
          top: -eo + 10,
          height: eo - 10
        }
      }
    )
  ] });
}
function Eu(e, t, n) {
  return jd(e, t, n);
}
function Fu(e, t, n, a) {
  if (e.type !== "video" && e.type !== "image") return null;
  const o = Er(e);
  return !o || !Number.isFinite(t) || !Number.isFinite(n) || t <= 0 || n <= 0 ? null : Nd(
    o.width,
    o.height,
    t,
    n,
    a
  ).viewportRect;
}
function fp({
  item: e,
  coordParams: t,
  onTransformStart: n,
  onTransformEnd: a,
  isPlaying: o = !1
}) {
  const c = Xe((A) => A.activeGizmo), i = Xe((A) => A.previewTransform), l = Xe(
    s.useCallback((A) => A.preview?.[e.id], [e.id])
  ), u = Xe((A) => A.startTranslate), d = Xe((A) => A.startScale), f = Xe((A) => A.startRotate), m = Xe((A) => A.updateInteraction), b = Xe((A) => A.endInteraction), h = Xe((A) => A.clearInteraction), x = Xe((A) => A.cancelInteraction), v = c?.itemId === e.id, { transform: S } = cp(e, t.projectSize), y = s.useMemo(() => {
    if (v && i)
      return i;
    let A = {
      x: S.x,
      y: S.y,
      width: S.width,
      height: S.height,
      rotation: S.rotation,
      opacity: S.opacity,
      cornerRadius: S.cornerRadius
    };
    if (e.type === "text") {
      const M = {
        ...A,
        cornerRadius: A.cornerRadius ?? 0
      };
      A = Eu(
        e,
        M,
        l?.properties
      );
    }
    const z = l?.transform;
    return z ? { ...A, ...z } : A;
  }, [S, v, i, e, l]), w = s.useMemo(() => {
    const A = l?.properties?.crop ?? ("crop" in e ? e.crop : void 0);
    return Fu(
      e,
      y.width,
      y.height,
      A
    );
  }, [e, l, y.width, y.height]), R = s.useMemo(() => {
    const A = Pa(y, t);
    if (e.type === "shape") {
      const M = l?.properties?.strokeWidth ?? e.strokeWidth ?? 0;
      if (M > 0) {
        const q = t.playerSize.width / t.projectSize.width, V = M * q;
        A.left -= V / 2, A.top -= V / 2, A.width += V, A.height += V;
      }
    }
    return A;
  }, [y, t, e, l]), O = s.useMemo(() => {
    if (!w) return null;
    const A = Rn(t);
    return {
      left: w.x * A,
      top: w.y * A,
      width: w.width * A,
      height: w.height * A
    };
  }, [w, t]), L = s.useCallback(
    (A) => _r(A.clientX, A.clientY, t),
    [t]
  ), I = s.useCallback((A, z) => Math.abs(A.x - z.x) > 0.01 || Math.abs(A.y - z.y) > 0.01 || Math.abs(A.width - z.width) > 0.01 || Math.abs(A.height - z.height) > 0.01 || Math.abs(A.rotation - z.rotation) > 0.01, []), N = e.type === "shape" ? e.strokeWidth ?? 0 : 0, P = s.useCallback(
    (A) => {
      A.stopPropagation(), A.preventDefault();
      const z = L(A), M = { ...y };
      u(e.id, z, y, N, w ?? void 0), n(), document.body.style.cursor = "move";
      const q = (X) => {
        const D = L(X);
        m(D, X.shiftKey, X.ctrlKey, X.altKey);
      }, V = () => {
        window.removeEventListener("mousemove", q), window.removeEventListener("mouseup", V), document.body.style.cursor = "";
        const X = b();
        X && I(M, X) && a(X, "move"), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            h();
          });
        });
      };
      window.addEventListener("mousemove", q), window.addEventListener("mouseup", V);
    },
    [e.id, y, L, u, m, b, h, n, a, I, N, w]
  ), T = s.useCallback(
    (A, z) => {
      z.stopPropagation(), z.preventDefault();
      const M = L(z), q = { ...y };
      d(e.id, A, M, y, e.type, e.transform?.aspectRatioLocked, N, w ?? void 0), n(), document.body.style.cursor = Xo(A, y.rotation);
      const V = (D) => {
        const W = L(D);
        m(W, D.shiftKey, D.ctrlKey, D.altKey);
      }, X = () => {
        window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", X), document.body.style.cursor = "";
        const D = b();
        D && I(q, D) && a(D, "resize"), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            h();
          });
        });
      };
      window.addEventListener("mousemove", V), window.addEventListener("mouseup", X);
    },
    [e.id, y, L, d, m, b, h, n, a, I, N, w]
  ), j = s.useCallback(
    (A) => {
      A.stopPropagation(), A.preventDefault();
      const z = L(A), M = { ...y };
      f(e.id, z, y, N), n(), document.body.style.cursor = "crosshair";
      const q = (X) => {
        const D = L(X);
        m(D, X.shiftKey, X.ctrlKey, X.altKey);
      }, V = () => {
        window.removeEventListener("mousemove", q), window.removeEventListener("mouseup", V), document.body.style.cursor = "";
        const X = b();
        X && I(M, X) && a(X, "rotate"), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            h();
          });
        });
      };
      window.addEventListener("mousemove", q), window.addEventListener("mouseup", V);
    },
    [e.id, y, L, f, m, b, h, n, a, I, N, w]
  );
  Iu(
    v,
    s.useCallback(() => {
      x(), document.body.style.cursor = "";
    }, [x])
  );
  const E = {
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
      onMouseDown: (A) => A.stopPropagation(),
      onDoubleClick: (A) => A.stopPropagation(),
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
          onMouseDown: (A) => A.stopPropagation(),
          onDoubleClick: (A) => A.stopPropagation(),
          children: /* @__PURE__ */ r.jsx(
            Tu,
            {
              bounds: E,
              rotation: y.rotation,
              isInteracting: v,
              isMask: e.type === "shape" && e.isMask,
              onTranslateStart: P,
              onScaleStart: T,
              onRotateStart: j
            }
          )
        }
      )
    }
  );
}
function fo(e, t, n) {
  return e.type !== "text" ? t : Eu(e, t, n?.[e.id]?.properties);
}
function oi(e, t) {
  const n = Is((v) => v.fps), a = s.useMemo(() => e.map((v) => v.id), [e]), o = hn(
    gn(
      s.useCallback(
        (v) => a.map((S) => v.keyframesByItemId[S] ?? null),
        [a]
      )
    )
  ), c = re((v) => v.currentFrame), i = re((v) => v.previewFrame), l = re((v) => v.displayedFrame), u = re((v) => v.isPlaying), d = re((v) => v.currentFrameEpoch), f = re((v) => v.previewFrameEpoch), m = Xe((v) => v.activeGizmo), b = Xe((v) => v.previewTransform), h = Xe((v) => v.preview), x = Wn({
    currentFrame: c,
    previewFrame: i,
    displayedFrame: l,
    isPlaying: u,
    currentFrameEpoch: d,
    previewFrameEpoch: f
  });
  return s.useMemo(() => {
    const v = /* @__PURE__ */ new Map(), S = { width: t.width, height: t.height };
    for (const [y, w] of e.entries()) {
      const k = o[y] ?? void 0, R = Ad(w, {
        canvas: S,
        frame: x,
        keyframes: k
      });
      if (m?.itemId === w.id && b) {
        let L = Ki(R, b);
        L = fo(w, L, h), v.set(w.id, L);
        continue;
      }
      const O = h?.[w.id]?.transform;
      if (O) {
        let L = Ki(R, O);
        L = fo(w, L, h), v.set(w.id, L);
        continue;
      }
      v.set(w.id, fo(w, R, h));
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
    n
  ]);
}
const ta = 20;
function ju(e, t, n) {
  let a = 1 / 0, o = 1 / 0, c = -1 / 0, i = -1 / 0;
  for (const l of e.values()) {
    const u = Nl(l, t, n), d = l.width / 2, f = l.height / 2;
    if (l.rotation === 0) {
      a = Math.min(a, u.x - d), o = Math.min(o, u.y - f), c = Math.max(c, u.x + d), i = Math.max(i, u.y + f);
      continue;
    }
    const m = [
      { x: u.x - d, y: u.y - f },
      { x: u.x + d, y: u.y - f },
      { x: u.x + d, y: u.y + f },
      { x: u.x - d, y: u.y + f }
    ];
    for (const b of m) {
      const h = Al(b, u, l.rotation);
      a = Math.min(a, h.x), o = Math.min(o, h.y), c = Math.max(c, h.x), i = Math.max(i, h.y);
    }
  }
  return {
    left: a,
    top: o,
    right: c,
    bottom: i,
    width: c - a,
    height: i - o
  };
}
function mo(e, t, n, a) {
  const o = ju(t, n, a), c = {
    x: (o.left + o.right) / 2,
    y: (o.top + o.bottom) / 2
  }, i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  for (const [u, d] of t) {
    const f = Nl(d, n, a);
    i.set(u, {
      x: f.x - c.x,
      y: f.y - c.y
    }), l.set(u, d.rotation);
  }
  return {
    itemIds: e,
    groupBounds: o,
    groupCenter: c,
    itemTransforms: new Map(t),
    itemOffsets: i,
    itemRotations: l
  };
}
function mp(e, t, n) {
  const a = /* @__PURE__ */ new Map();
  for (const [o, c] of e.itemTransforms)
    a.set(o, {
      ...c,
      x: c.x + t,
      y: c.y + n
    });
  return a;
}
function hp(e, t, n, a, o, c = !0) {
  const i = /* @__PURE__ */ new Map(), { groupCenter: l, itemOffsets: u, itemTransforms: d } = e, f = c ? Math.max(t, n) : 1, m = c ? f : t, b = c ? f : n, h = ta / Math.max(...Array.from(d.values()).map((y) => y.width)), x = ta / Math.max(...Array.from(d.values()).map((y) => y.height)), v = Math.max(h, m), S = Math.max(x, b);
  for (const [y, w] of d) {
    const k = u.get(y), R = k.x * v, O = k.y * S, L = l.x + R, I = l.y + O;
    i.set(y, {
      ...w,
      x: L - a / 2,
      y: I - o / 2,
      width: Math.max(ta, w.width * v),
      height: Math.max(ta, w.height * S)
    });
  }
  return i;
}
function pp(e, t, n, a) {
  const o = /* @__PURE__ */ new Map(), { groupCenter: c, itemOffsets: i, itemTransforms: l, itemRotations: u } = e;
  for (const [d, f] of l) {
    const m = i.get(d), b = u.get(d), h = {
      x: c.x + m.x,
      y: c.y + m.y
    }, x = Al(h, c, t), v = x.x - n / 2, S = x.y - a / 2;
    let y = b + t;
    for (; y > 180; ) y -= 360;
    for (; y < -180; ) y += 360;
    o.set(d, {
      ...f,
      x: v,
      y: S,
      rotation: y
    });
  }
  return o;
}
function gp(e, t, n) {
  const { groupCenter: a } = e, o = Math.sqrt(
    Math.pow(t.x - a.x, 2) + Math.pow(t.y - a.y, 2)
  ), c = Math.sqrt(
    Math.pow(n.x - a.x, 2) + Math.pow(n.y - a.y, 2)
  );
  return o > 0 ? c / o : 1;
}
function xp(e, t, n) {
  const { groupCenter: a } = e, o = Math.atan2(
    t.y - a.y,
    t.x - a.x
  ) * (180 / Math.PI);
  return Math.atan2(
    n.y - a.y,
    n.x - a.x
  ) * (180 / Math.PI) - o;
}
function bp({
  items: e,
  coordParams: t,
  onTransformStart: n,
  onTransformEnd: a,
  onItemClick: o,
  isPlaying: c = !1
}) {
  const [i, l] = s.useState("idle"), u = s.useRef(null), d = s.useRef(null), f = s.useRef(/* @__PURE__ */ new Map()), m = s.useRef(null), b = Xe((M) => M.setPreview), h = Xe((M) => M.clearPreview), { projectSize: x } = t, v = Rn(t), S = oi(e, x), y = s.useMemo(() => {
    const M = /* @__PURE__ */ new Map();
    for (const [q, V] of S)
      M.set(q, {
        x: V.x,
        y: V.y,
        width: V.width,
        height: V.height,
        rotation: V.rotation,
        opacity: V.opacity,
        cornerRadius: V.cornerRadius
      });
    return M;
  }, [S]), w = s.useCallback((M) => {
    const q = {};
    for (const [V, X] of M)
      q[V] = { transform: X };
    return q;
  }, []), k = s.useCallback((M) => {
    m.current = M, M ? b(w(M)) : h();
  }, [b, h, w]), R = y, O = s.useMemo(() => ju(R, x.width, x.height), [R, x]), L = s.useMemo(() => {
    const M = {
      left: O.left * v,
      top: O.top * v,
      width: O.width * v,
      height: O.height * v
    };
    let q = 0;
    for (const V of e)
      V.type === "shape" && V.strokeWidth && (q = Math.max(q, V.strokeWidth));
    if (q > 0) {
      const V = q * v;
      M.left -= V / 2, M.top -= V / 2, M.width += V, M.height += V;
    }
    return M;
  }, [O, v, e]), I = 0, N = s.useCallback(
    (M) => _r(M.clientX, M.clientY, t),
    [t]
  ), P = s.useCallback(
    (M, q) => {
      for (const [X, D] of M) {
        const W = q.get(X);
        if (!W || Math.abs(D.x - W.x) > 0.01 || Math.abs(D.y - W.y) > 0.01 || Math.abs(D.width - W.width) > 0.01 || Math.abs(D.height - W.height) > 0.01 || Math.abs(D.rotation - W.rotation) > 0.01)
          return !0;
      }
      return !1;
    },
    []
  ), T = s.useCallback(
    (M) => {
      const q = x.width / 2, V = x.height / 2;
      for (let X = e.length - 1; X >= 0; X--) {
        const D = e[X];
        if (!D) continue;
        const W = y.get(D.id);
        if (!W) continue;
        const Y = q + W.x, pe = V + W.y, C = Y - W.width / 2, B = Y + W.width / 2, U = pe - W.height / 2, J = pe + W.height / 2;
        if (M.x >= C && M.x <= B && M.y >= U && M.y <= J)
          return D.id;
      }
      return null;
    },
    [e, y, x]
  ), j = s.useCallback(
    (M) => {
      M.stopPropagation(), M.preventDefault();
      const q = N(M), V = mo(
        e.map((B) => B.id),
        y,
        x.width,
        x.height
      );
      u.current = V, d.current = q, f.current = new Map(y), l("translate"), n(), document.body.style.cursor = "move";
      let X = !1;
      const D = 5, W = M.clientX, Y = M.clientY, pe = (B) => {
        if (!X) {
          const xe = Math.abs(B.clientX - W), we = Math.abs(B.clientY - Y);
          (xe > D || we > D) && (X = !0);
        }
        const U = N(B), J = U.x - q.x, ne = U.y - q.y, me = mp(V, J, ne);
        k(me);
      }, C = () => {
        if (window.removeEventListener("mousemove", pe), window.removeEventListener("mouseup", C), document.body.style.cursor = "", !X && o) {
          const U = T(q);
          if (U) {
            l("idle"), k(null), u.current = null, d.current = null, o(U);
            return;
          }
        }
        const B = m.current ?? y;
        P(f.current, B) && a(B, "move"), l("idle"), k(null), u.current = null, d.current = null;
      };
      window.addEventListener("mousemove", pe), window.addEventListener("mouseup", C);
    },
    [e, y, x, N, n, a, P, k, o, T]
  ), E = s.useCallback(
    (M, q) => {
      q.stopPropagation(), q.preventDefault();
      const V = N(q), X = mo(
        e.map((Y) => Y.id),
        y,
        x.width,
        x.height
      );
      u.current = X, d.current = V, f.current = new Map(y), l("scale"), n(), document.body.style.cursor = Xo(M, I);
      const D = (Y) => {
        const pe = N(Y), C = gp(X, V, pe), B = !Y.shiftKey, U = hp(
          X,
          C,
          C,
          x.width,
          x.height,
          B
        );
        k(U);
      }, W = () => {
        window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", W), document.body.style.cursor = "";
        const Y = m.current ?? y;
        P(f.current, Y) && a(Y, "resize"), l("idle"), k(null), u.current = null, d.current = null;
      };
      window.addEventListener("mousemove", D), window.addEventListener("mouseup", W);
    },
    [e, y, x, N, n, a, P, I, k]
  ), A = s.useCallback(
    (M) => {
      M.stopPropagation(), M.preventDefault();
      const q = N(M), V = mo(
        e.map((W) => W.id),
        y,
        x.width,
        x.height
      );
      u.current = V, d.current = q, f.current = new Map(y), l("rotate"), n(), document.body.style.cursor = "crosshair";
      const X = (W) => {
        const Y = N(W);
        let pe = xp(V, q, Y);
        W.shiftKey && (pe = Math.round(pe / 15) * 15);
        const C = pp(
          V,
          pe,
          x.width,
          x.height
        );
        k(C);
      }, D = () => {
        window.removeEventListener("mousemove", X), window.removeEventListener("mouseup", D), document.body.style.cursor = "";
        const W = m.current ?? y;
        P(f.current, W) && a(W, "rotate"), l("idle"), k(null), u.current = null, d.current = null;
      };
      window.addEventListener("mousemove", X), window.addEventListener("mouseup", D);
    },
    [e, y, x, N, n, a, P, k]
  );
  Iu(
    i !== "idle",
    s.useCallback(() => {
      l("idle"), k(null), u.current = null, d.current = null, document.body.style.cursor = "";
    }, [k])
  );
  const z = i !== "idle";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "absolute transition-opacity duration-150",
      style: {
        left: L.left,
        top: L.top,
        width: L.width,
        height: L.height,
        opacity: c ? 0 : 1,
        // High z-index to ensure gizmo is always above SelectableItems
        zIndex: 100,
        // Container captures events to block SelectableItems below
        pointerEvents: "auto"
      },
      onMouseDown: (M) => M.stopPropagation(),
      onDoubleClick: (M) => M.stopPropagation(),
      children: /* @__PURE__ */ r.jsx(
        Tu,
        {
          bounds: L,
          rotation: I,
          isInteracting: z,
          onTranslateStart: j,
          onScaleStart: E,
          onRotateStart: A
        }
      )
    }
  );
}
function vp({
  item: e,
  transform: t,
  coordParams: n,
  isSelected: a = !1,
  onSelect: o,
  onDragStart: c
}) {
  const [i, l] = s.useState(!1), u = s.useMemo(() => {
    const m = Pa(t, n);
    if (e.type === "shape") {
      const b = e.strokeWidth ?? 0;
      if (b > 0) {
        const h = n.playerSize.width / n.projectSize.width, x = b * h;
        m.left -= x / 2, m.top -= x / 2, m.width += x, m.height += x;
      }
    }
    return m;
  }, [t, n, e]), d = s.useCallback((m) => {
    m.stopPropagation(), m.preventDefault(), o(m), c && c(m, t);
  }, [o, c, t]), f = i && !a;
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
function yp({ snapLines: e, coordParams: t }) {
  const n = s.useMemo(() => Rn(t), [t]);
  return e.length === 0 ? null : /* @__PURE__ */ r.jsx(r.Fragment, { children: e.map((a, o) => {
    const c = a.position * n;
    return a.type === "vertical" ? /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "absolute pointer-events-none",
        style: {
          left: c,
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
          top: c,
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
function Mn(e) {
  return e === "video" || e === "image";
}
function fc(e) {
  if (!Number.isFinite(e) || e <= 0)
    return 0;
  const t = Math.round(e);
  return t % 2 === 0 ? t : t + 1;
}
function wp(e) {
  const t = fc(e.width), n = fc(e.height);
  return t === 0 || n === 0 ? null : { width: t, height: n };
}
function Sp(e) {
  return e === "match-both" || e === "size-only";
}
function kp(e, t, n) {
  if (!e.transform)
    return e;
  const a = e.transform.width ?? n.width, o = e.transform.height ?? n.height, c = a / 2, i = o / 2, l = c, u = Math.max(c, n.width - c), d = i, f = Math.max(i, n.height - i), m = l > u ? n.width / 2 : Math.min(u, Math.max(l, t.x)), b = d > f ? n.height / 2 : Math.min(f, Math.max(d, t.y));
  return {
    ...e,
    transform: {
      ...e.transform,
      x: m - n.width / 2,
      y: b - n.height / 2
    }
  };
}
function ho(e) {
  const t = _l();
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
      if (!Mn(o))
        return {
          allowed: !1,
          source: "library",
          title: "Audio Goes On Timeline",
          description: "Canvas drop places visual layers only."
        };
    }
    return t.type === "media-item" && !Mn(t.mediaType) ? {
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
function Cp({
  coordParams: e,
  projectSize: t
}) {
  const n = s.useRef(0), [a, o] = s.useState(null), c = s.useCallback(() => {
    n.current = 0, o(null);
  }, []), i = s.useCallback(async ({
    media: h,
    mediaType: x,
    label: v,
    clientX: S,
    clientY: y,
    placementProjectSize: w,
    preserveInitialPlacement: k = !1
  }) => {
    if (!e || !Mn(x))
      return;
    const R = w ?? t, O = be.getState(), L = re.getState(), I = Pt.getState(), N = Dl(h, x, O.fps), P = Ol({
      tracks: O.tracks,
      items: O.items,
      activeTrackId: I.activeTrackId,
      proposedFrame: L.currentFrame,
      durationInFrames: N,
      itemType: x === "image" ? "image" : "video"
    });
    if (!P) {
      Zt.warning("No unlocked visible track is available for this drop.");
      return;
    }
    const T = await pn(h.id);
    if (!T) {
      Zt.error("Unable to load dropped media.");
      return;
    }
    const j = await Zo.getThumbnailBlobUrl(h.id), E = Dd({
      media: h,
      mediaId: h.id,
      mediaType: x,
      label: v,
      timelineFps: O.fps,
      blobUrl: T,
      thumbnailUrl: j,
      canvasWidth: R.width,
      canvasHeight: R.height,
      placement: {
        trackId: P.trackId,
        from: P.from,
        durationInFrames: N
      }
    }), A = k ? E : kp(
      E,
      _r(S, y, e),
      R
    );
    O.addItem(A), I.setActiveTrack(P.trackId), I.selectItems([A.id]);
  }, [e, t]), l = s.useCallback(async (h, x) => {
    if (!x.allowed) {
      Zt.warning(x.description);
      return;
    }
    const v = _l();
    if (!v)
      return;
    let S, y, w;
    if (v.type === "media-item" && v.mediaId && v.mediaType && v.fileName) {
      if (!Mn(v.mediaType)) {
        Zt.warning("Canvas drop places visual layers only.");
        return;
      }
      S = v.mediaId, y = v.mediaType, w = v.fileName;
    } else if (v.type === "media-items" && v.items?.length === 1) {
      const R = v.items[0];
      if (!R || !Mn(R.mediaType)) {
        Zt.warning("Canvas drop places visual layers only.");
        return;
      }
      S = R.mediaId, y = R.mediaType, w = R.fileName;
    }
    if (!S || !y || !w)
      return;
    const k = Qt.getState().mediaById[S] ?? Qt.getState().mediaItems.find((R) => R.id === S);
    if (!k) {
      Zt.error("Dropped media is no longer available.");
      return;
    }
    await i({
      media: k,
      mediaType: y,
      label: w,
      clientX: h.clientX,
      clientY: h.clientY
    });
  }, [i]), u = s.useCallback(async (h, x) => {
    if (!x.allowed) {
      Zt.warning(x.description);
      return;
    }
    const { supported: v, entries: S, errors: y } = await Od(
      h.dataTransfer
    );
    if (!v) {
      Zt.warning("Drag-drop not supported in this browser. Use Chrome or Edge.");
      return;
    }
    y.length > 0 && Zt.error(`Some files were rejected: ${y.join(", ")}`);
    const w = S[0];
    if (!w)
      return;
    if (!Mn(w.mediaType)) {
      Zt.warning("Drop audio on the timeline instead.");
      return;
    }
    const k = Qt.getState(), R = k.currentProjectId, O = k.mediaItems.some((E) => E.mimeType.startsWith("video/"));
    let L = null;
    if (w.mediaType === "video" && R && !O)
      try {
        const E = _d(w.file), { metadata: A } = await Ld.processMedia(w.file, E, {
          generateThumbnail: !1
        });
        if (A.type !== "video") {
          Zt.error("Unable to inspect dropped video.");
          return;
        }
        L = A;
      } catch (E) {
        Zt.error("Unable to inspect dropped file.", {
          description: E instanceof Error ? E.message : "Please try again."
        });
        return;
      }
    const N = (await Qt.getState().importHandlesForPlacement([w.handle]))[0];
    if (!N) {
      Zt.error("Unable to import dropped file.");
      return;
    }
    const P = Ia(N.mimeType);
    if (!Mn(P)) {
      Zt.warning("Drop audio on the timeline instead.");
      return;
    }
    let T, j = !1;
    if (L && R) {
      const E = await Bd.getState().requestProjectMediaMatch(R, {
        fileName: w.file.name,
        width: L.width,
        height: L.height,
        fps: L.fps
      });
      j = Sp(E), j && (T = wp(L) ?? void 0);
    }
    await i({
      media: N,
      mediaType: P,
      label: N.fileName,
      clientX: h.clientX,
      clientY: h.clientY,
      placementProjectSize: T,
      preserveInitialPlacement: j
    });
  }, [i]), d = s.useCallback((h) => {
    const x = ho(h.dataTransfer);
    x && (h.preventDefault(), n.current += 1, o(x));
  }, []), f = s.useCallback((h) => {
    const x = ho(h.dataTransfer);
    x && (h.preventDefault(), h.dataTransfer.dropEffect = x.allowed ? "copy" : "none", o((v) => v?.allowed === x.allowed && v?.source === x.source && v?.title === x.title && v?.description === x.description ? v : x));
  }, []), m = s.useCallback((h) => {
    a && (h.preventDefault(), n.current = Math.max(0, n.current - 1), n.current === 0 && o(null));
  }, [a]), b = s.useCallback(async (h) => {
    const x = ho(h.dataTransfer);
    if (c(), !!x && (h.preventDefault(), !!e)) {
      if (x.source === "library") {
        await l(h, x);
        return;
      }
      await u(h, x);
    }
  }, [c, e, u, l]);
  return {
    dropState: a,
    handleDragEnter: d,
    handleDragLeave: m,
    handleDragOver: f,
    handleDrop: b
  };
}
function Mp({
  containerRect: e,
  playerSize: t,
  projectSize: n,
  zoom: a,
  hitAreaRef: o,
  overlayPadding: c = 100
}) {
  const i = s.useRef(null), [l, u] = s.useState(null), d = Pt((H) => H.selectedItemIds), f = Pt((H) => H.selectItems), m = s.useMemo(() => new Set(d), [d]), b = be(
    gn(
      (H) => H.items.filter((ue) => ue.type !== "audio" && ue.type !== "adjustment")
    )
  ), h = be((H) => H.tracks), x = be((H) => H.snapEnabled), v = be((H) => H.updateItemTransform), S = be((H) => H.updateItemsTransformMap), y = be((H) => H.applyAutoKeyframeOperations), w = s.useRef(!1), k = re((H) => H.isPlaying), R = re.getState(), O = s.useRef(
    Wn(R)
  );
  s.useEffect(() => {
    if (!k) {
      const H = re.getState();
      O.current = Wn(H);
    }
  }, [k]), s.useEffect(() => {
    let H = re.getState().currentFrame;
    return re.subscribe((ue, Ce) => {
      const Ve = ue.currentFrame;
      if (ue.isPlaying) {
        const Me = be.getState().items, _ = Math.min(H, Ve), he = Math.max(H, Ve);
        for (const et of Me) {
          const Ye = et.from, $e = et.from + et.durationInFrames;
          if (Ye > _ && Ye <= he || $e > _ && $e <= he) {
            O.current = Ve, I((ct) => ct + 1);
            break;
          }
        }
      } else {
        const Me = Wn(ue), _ = Wn(Ce);
        Me !== _ && (O.current = Me, I((he) => he + 1));
      }
      H = Ve;
    });
  }, []);
  const [L, I] = s.useState(0), N = Xe((H) => H.setCanvasSize), P = Xe((H) => H.setSnappingEnabled), T = Xe((H) => H.snapLines), j = Fr((H) => H.isEditing), E = ze((H) => H.isEditing), A = Xe((H) => H.startTranslate), z = Xe((H) => H.updateInteraction), M = Xe((H) => H.endInteraction), q = Xe((H) => H.clearInteraction);
  s.useEffect(() => {
    N(n.width, n.height);
  }, [n.width, n.height, N]), s.useEffect(() => {
    P(x);
  }, [x, P]);
  const V = s.useMemo(() => {
    const H = O.current, ue = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map();
    for (const Me of h)
      ue.set(Me.id, Me.visible), Ce.set(Me.id, Me.locked), Ve.set(Me.id, Me.order);
    return b.filter((Me) => {
      if (!ue.get(Me.trackId) || Ce.get(Me.trackId)) return !1;
      const _ = Me.from + Me.durationInFrames;
      return H >= Me.from && H < _;
    }).toSorted((Me, _) => (Ve.get(_.trackId) ?? 0) - (Ve.get(Me.trackId) ?? 0));
  }, [b, h, k, L]), X = s.useMemo(() => V.filter((H) => m.has(H.id)), [V, m]), D = s.useMemo(() => V.filter((H) => !m.has(H.id)), [V, m]), W = s.useMemo(() => e ? {
    containerRect: e,
    playerSize: t,
    projectSize: n,
    zoom: a
  } : null, [e, t, n, a]), {
    dropState: Y,
    handleDragEnter: pe,
    handleDragLeave: C,
    handleDragOver: B,
    handleDrop: U
  } = Cp({
    coordParams: W,
    projectSize: n
  }), J = oi(V, n), ne = s.useMemo(() => !W || !e ? [] : V.map((H) => {
    const ue = J.get(H.id);
    if (!ue) return { id: H.id, getBoundingRect: () => ({ left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 }) };
    const Ce = Pa(
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
    ), Ve = {
      left: e.left + Ce.left,
      top: e.top + Ce.top,
      right: e.left + Ce.left + Ce.width,
      bottom: e.top + Ce.top + Ce.height,
      width: Ce.width,
      height: Ce.height
    };
    return {
      id: H.id,
      getBoundingRect: () => Ve
    };
  }), [V, W, e, J]), { marqueeState: me } = yd({
    containerRef: i,
    hitAreaRef: o,
    items: ne,
    onSelectionChange: s.useCallback(
      (H) => {
        f(H);
      },
      [f]
    ),
    enabled: !0,
    threshold: 5
  }), xe = s.useCallback(() => {
  }, []), we = s.useCallback(
    (H, ue, Ce = "move") => {
      const Ve = re.getState().currentFrame, Me = b.find((ct) => ct.id === H);
      if (!Me) return;
      const _ = hn.getState().keyframesByItemId[H], he = {
        x: ue.x,
        y: ue.y,
        width: ue.width,
        height: ue.height,
        rotation: ue.rotation,
        opacity: ue.opacity,
        cornerRadius: ue.cornerRadius ?? 0
      }, et = /* @__PURE__ */ new Set(), Ye = [];
      for (const ct of up) {
        const pt = Zn(
          Me,
          _,
          ct,
          he[ct],
          Ve
        );
        pt && (Ye.push(pt), et.add(ct));
      }
      Ye.length > 0 && y(Ye);
      const $e = {};
      et.has("x") || ($e.x = ue.x), et.has("y") || ($e.y = ue.y), et.has("width") || ($e.width = ue.width), et.has("height") || ($e.height = ue.height), et.has("rotation") || ($e.rotation = ue.rotation), $e.cornerRadius = ue.cornerRadius, (Object.keys($e).length > 1 || !et.size) && v(H, $e, { operation: Ce }), w.current = !0, setTimeout(() => {
        w.current = !1;
      }, 100);
    },
    [b, v, y]
  ), Re = s.useCallback(
    (H, ue) => {
      const Ce = /* @__PURE__ */ new Map();
      for (const [Ve, Me] of H)
        Ce.set(Ve, {
          x: Me.x,
          y: Me.y,
          width: Me.width,
          height: Me.height,
          rotation: Me.rotation,
          opacity: Me.opacity,
          cornerRadius: Me.cornerRadius
        });
      S(Ce, { operation: ue }), w.current = !0, setTimeout(() => {
        w.current = !1;
      }, 100);
    },
    [S]
  ), Be = s.useCallback(
    (H) => {
      w.current || Fl() || H.target.closest("[data-gizmo]") || (H.stopPropagation(), Pt.getState().clearItemSelection());
    },
    []
  ), Fe = s.useCallback(
    (H, ue) => {
      ue.stopPropagation();
      const Ce = m.has(H), Ve = d.length > 1;
      ue.shiftKey ? f(Ce ? d.filter((Me) => Me !== H) : [...d, H]) : Ce && Ve ? f([H]) : Ce || f([H]);
    },
    [f, d, m]
  ), De = s.useCallback(
    (H) => {
      const ue = n.width / 2, Ce = n.height / 2, Ve = [];
      for (const Me of V) {
        const _ = J.get(Me.id);
        if (!_) continue;
        const he = ue + _.x, et = Ce + _.y, Ye = he - _.width / 2, $e = he + _.width / 2, ct = et - _.height / 2, pt = et + _.height / 2;
        H.x >= Ye && H.x <= $e && H.y >= ct && H.y <= pt && Ve.push(Me);
      }
      return Ve;
    },
    [V, n, J]
  ), Qe = s.useCallback(
    (H) => {
      if (!W) return;
      H.preventDefault(), H.stopPropagation();
      const ue = _r(H.clientX, H.clientY, W), Ce = De(ue);
      Ce.length > 1 ? u({
        x: H.clientX,
        y: H.clientY,
        items: Ce
      }) : Ce.length === 1 && f([Ce[0].id]);
    },
    [W, De, f]
  ), je = s.useCallback(
    (H) => {
      f([H]), u(null);
    },
    [f]
  );
  s.useEffect(() => {
    if (!l) return;
    const H = () => u(null);
    return window.addEventListener("click", H), window.addEventListener("contextmenu", H), () => {
      window.removeEventListener("click", H), window.removeEventListener("contextmenu", H);
    };
  }, [l]);
  const ee = s.useCallback((H, ue) => Math.abs(H.x - ue.x) > 0.01 || Math.abs(H.y - ue.y) > 0.01 || Math.abs(H.width - ue.width) > 0.01 || Math.abs(H.height - ue.height) > 0.01 || Math.abs(H.rotation - ue.rotation) > 0.01, []), Ge = s.useCallback(
    (H, ue, Ce) => {
      if (!W) return;
      const Ve = { ...Ce }, Me = _r(ue.clientX, ue.clientY, W), _ = b.find((pt) => pt.id === H), et = Xe.getState().preview?.[H]?.properties?.crop ?? (_ && "crop" in _ ? _.crop : void 0), Ye = _ ? Fu(_, Ce.width, Ce.height, et) : void 0;
      A(H, Me, Ce, void 0, Ye ?? void 0), document.body.style.cursor = "move";
      const $e = (pt) => {
        const Vt = _r(pt.clientX, pt.clientY, W);
        z(Vt, pt.shiftKey, pt.ctrlKey, pt.altKey);
      }, ct = () => {
        window.removeEventListener("mousemove", $e), window.removeEventListener("mouseup", ct), document.body.style.cursor = "";
        const pt = M();
        pt && ee(Ve, pt) && we(H, pt, "move"), requestAnimationFrame(() => {
          q();
        });
      };
      window.addEventListener("mousemove", $e), window.addEventListener("mouseup", ct);
    },
    [W, A, z, M, q, we, ee, b]
  );
  return W ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: i,
      className: "absolute z-10",
      style: {
        top: -c,
        left: -c,
        width: t.width + c * 2,
        height: t.height + c * 2,
        pointerEvents: "none"
      },
      onDoubleClick: (H) => H.stopPropagation(),
      children: [
        !j && !E && /* @__PURE__ */ r.jsx(wd, { marqueeState: me }),
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "absolute",
            style: {
              top: c,
              left: c,
              width: t.width,
              height: t.height,
              pointerEvents: j || E ? "none" : "auto"
            },
            onClick: Be,
            onContextMenu: Qe,
            onDragEnter: pe,
            onDragOver: B,
            onDragLeave: C,
            onDrop: U,
            children: [
              Y && /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: `absolute inset-0 pointer-events-none z-20 flex items-center justify-center border-2 border-dashed ${Y.allowed ? "border-primary/70 bg-primary/10" : "border-destructive/60 bg-destructive/10"}`,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "rounded-lg border border-border/70 bg-background/90 px-4 py-3 text-center shadow-lg backdrop-blur-sm", children: [
                    /* @__PURE__ */ r.jsx("p", { className: `text-sm font-semibold ${Y.allowed ? "text-primary" : "text-destructive"}`, children: Y.title }),
                    /* @__PURE__ */ r.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: Y.description })
                  ] })
                }
              ),
              D.map((H) => {
                const ue = J.get(H.id);
                return ue ? /* @__PURE__ */ r.jsx(
                  vp,
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
                    onSelect: (Ce) => Fe(H.id, Ce),
                    onDragStart: (Ce, Ve) => Ge(H.id, Ce, Ve)
                  },
                  H.id
                ) : null;
              }),
              j || E ? null : X.length === 1 && X[0] ? /* @__PURE__ */ r.jsx(
                fp,
                {
                  item: X[0],
                  coordParams: W,
                  onTransformStart: xe,
                  onTransformEnd: (H, ue) => we(X[0].id, H, ue),
                  isPlaying: k
                }
              ) : X.length > 1 ? /* @__PURE__ */ r.jsx(
                bp,
                {
                  items: X,
                  coordParams: W,
                  onTransformStart: xe,
                  onTransformEnd: Re,
                  onItemClick: (H) => f([H]),
                  isPlaying: k
                }
              ) : null,
              /* @__PURE__ */ r.jsx(yp, { snapLines: T, coordParams: W })
            ]
          }
        ),
        l && bd.createPortal(
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
                  const Ve = h.find((_) => _.id === H.trackId)?.name ?? `Track ${ue + 1}`, Me = H.label || `${H.type} clip`;
                  return /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      className: "w-full px-3 py-1.5 text-sm text-left hover:bg-accent hover:text-accent-foreground flex items-center gap-2",
                      onClick: () => je(H.id),
                      children: [
                        /* @__PURE__ */ r.jsxs("span", { className: "text-muted-foreground text-xs", children: [
                          Ve,
                          ":"
                        ] }),
                        /* @__PURE__ */ r.jsx("span", { className: "truncate", children: Me })
                      ]
                    },
                    H.id
                  );
                })
              ]
            }
          ),
          Hd() ?? document.body
        )
      ]
    }
  ) : null;
}
const mc = 0.25;
function Nu(e) {
  return {
    position: [...e.position],
    inHandle: [...e.inHandle],
    outHandle: [...e.outHandle]
  };
}
function hc([e, t]) {
  return Math.hypot(e, t);
}
function qn([e, t]) {
  const n = Math.hypot(e, t);
  return n <= Number.EPSILON ? [0, 0] : [e / n, t / n];
}
function Rp(e, t, n) {
  const a = qn([
    t[0] - e[0],
    t[1] - e[1]
  ]), o = qn([
    n[0] - t[0],
    n[1] - t[1]
  ]), c = qn([
    a[0] + o[0],
    a[1] + o[1]
  ]);
  return c[0] !== 0 || c[1] !== 0 ? c : o[0] !== 0 || o[1] !== 0 ? o : a;
}
function Pp(e, t) {
  const n = e[t], a = e[(t + 1) % e.length], o = (n.position[0] + a.position[0]) / 2, c = (n.position[1] + a.position[1]) / 2, i = {
    position: [o, c],
    inHandle: [0, 0],
    outHandle: [0, 0]
  }, l = [...e];
  return l.splice(t + 1, 0, i), l;
}
function Au(e, t) {
  if (t < 0 || t >= e.length)
    return e;
  const n = e.map(Nu);
  return n[t] = {
    ...n[t],
    inHandle: [0, 0],
    outHandle: [0, 0]
  }, n;
}
function Ip(e, t) {
  if (e.length < 2 || t < 0 || t >= e.length)
    return e;
  const n = e.map(Nu), a = n[t], o = n[(t - 1 + n.length) % n.length], c = n[(t + 1) % n.length], i = hc(a.inHandle), l = hc(a.outHandle), u = Math.hypot(
    a.position[0] - o.position[0],
    a.position[1] - o.position[1]
  ), d = Math.hypot(
    c.position[0] - a.position[0],
    c.position[1] - a.position[1]
  ), f = i || u * mc, m = l || d * mc, b = i > 0 ? qn([-a.inHandle[0], -a.inHandle[1]]) : null, h = l > 0 ? qn(a.outHandle) : null, x = b && h ? qn([
    b[0] + h[0],
    b[1] + h[1]
  ]) : null, v = x && (x[0] !== 0 || x[1] !== 0) ? x : h ?? b ?? Rp(o.position, a.position, c.position);
  return v[0] === 0 && v[1] === 0 ? Au(n, t) : (a.inHandle = [-v[0] * f, -v[1] * f], a.outHandle = [v[0] * m, v[1] * m], n);
}
function pc(e, t) {
  if (e.length <= 3) return null;
  const n = [...e];
  return n.splice(t, 1), n;
}
const gc = 1e-10;
function xc(e, t, n, a, o) {
  const c = 1 - o;
  return c * c * c * e + 3 * c * c * o * t + 3 * c * o * o * n + o * o * o * a;
}
function bc(e, t, n, a) {
  const o = -e + 3 * t - 3 * n + a, c = 3 * e - 6 * t + 3 * n, i = -3 * e + 3 * t, l = 3 * o, u = 2 * c, d = i;
  if (Math.abs(l) < 1e-8) {
    if (Math.abs(u) < 1e-8) return [];
    const x = -d / u;
    return x > 0 && x < 1 ? [x] : [];
  }
  const f = u * u - 4 * l * d;
  if (f < 0) return [];
  if (Math.abs(f) < gc) {
    const x = -u / (2 * l);
    return x > 0 && x < 1 ? [x] : [];
  }
  const m = Math.sqrt(f), b = (-u + m) / (2 * l), h = (-u - m) / (2 * l);
  return [b, h].filter((x) => x > 0 && x < 1).filter(
    (x, v, S) => S.findIndex((y) => Math.abs(y - x) < gc) === v
  );
}
function Du(e) {
  if (e.length === 0) return null;
  let t = 1 / 0, n = 1 / 0, a = -1 / 0, o = -1 / 0;
  const c = (i, l) => {
    t = Math.min(t, i), n = Math.min(n, l), a = Math.max(a, i), o = Math.max(o, l);
  };
  if (e.length === 1) {
    const [i, l] = e[0].position;
    return c(i, l), { minX: t, minY: n, maxX: a, maxY: o };
  }
  for (let i = 0; i < e.length; i++) {
    const l = e[i], u = e[(i + 1) % e.length], d = l.position[0], f = l.position[1], m = l.position[0] + l.outHandle[0], b = l.position[1] + l.outHandle[1], h = u.position[0] + u.inHandle[0], x = u.position[1] + u.inHandle[1], v = u.position[0], S = u.position[1], y = /* @__PURE__ */ new Set([
      0,
      1,
      ...bc(d, m, h, v),
      ...bc(f, b, x, S)
    ]);
    for (const w of y)
      c(
        xc(d, m, h, v, w),
        xc(f, b, x, S, w)
      );
  }
  return { minX: t, minY: n, maxX: a, maxY: o };
}
function vc(e, t, n) {
  const a = Du(e);
  if (!a)
    return {
      pathVertices: e,
      transform: n ?? {}
    };
  const o = Math.max(t.width, 1), c = Math.max(t.height, 1), i = Math.max(a.maxX - a.minX, 2 / o), l = Math.max(a.maxY - a.minY, 2 / c), u = ((a.minX + a.maxX) / 2 - 0.5) * t.width, d = ((a.minY + a.maxY) / 2 - 0.5) * t.height, f = t.rotation * Math.PI / 180, m = Math.cos(f), b = Math.sin(f);
  return {
    pathVertices: e.map((h) => ({
      position: [
        (h.position[0] - a.minX) / i,
        (h.position[1] - a.minY) / l
      ],
      inHandle: [
        h.inHandle[0] / i,
        h.inHandle[1] / l
      ],
      outHandle: [
        h.outHandle[0] / i,
        h.outHandle[1] / l
      ]
    })),
    transform: {
      ...n,
      x: t.x + u * m - d * b,
      y: t.y + u * b + d * m,
      width: Math.max(t.width * i, 2),
      height: Math.max(t.height * l, 2),
      rotation: t.rotation,
      opacity: t.opacity,
      cornerRadius: t.cornerRadius
    }
  };
}
const yc = 5, Tp = 8, ra = 4, un = 8, Ep = 12, po = 3, wc = 10, na = 16, Fp = /^Track\s+(\d+)$/i, jp = ["x", "y", "width", "height"];
function Qr(e) {
  return e.map((t) => ({
    position: [...t.position],
    inHandle: [...t.inHandle],
    outHandle: [...t.outHandle]
  }));
}
function Sc(e, t, n) {
  e.beginPath(), e.arc(t, n, Tp, 0, Math.PI * 2), e.fillStyle = "rgba(251, 191, 36, 0.18)", e.fill(), e.strokeStyle = "#f59e0b", e.lineWidth = 1.5, e.stroke();
}
function Np(e) {
  const t = /* @__PURE__ */ new Set();
  for (const a of e) {
    const o = a.name.match(Fp);
    if (!o?.[1])
      continue;
    const c = Number.parseInt(o[1], 10);
    Number.isFinite(c) && c > 0 && t.add(c);
  }
  let n = 1;
  for (; t.has(n); )
    n++;
  return `Track ${n}`;
}
function Hn(e, t, n, a, o) {
  const c = 1 - o;
  return c * c * c * e + 3 * c * c * o * t + 3 * c * o * o * n + o * o * o * a;
}
function Ap(e, t, n) {
  let a = !1;
  for (let o = 0, c = n.length - 1; o < n.length; c = o++) {
    const [i, l] = n[o], [u, d] = n[c];
    l > t != d > t && e < (u - i) * (t - l) / (d - l || Number.EPSILON) + i && (a = !a);
  }
  return a;
}
function kc(e, t, n, a, o, c) {
  const i = o - n, l = c - a, u = i * i + l * l;
  if (u === 0)
    return Math.hypot(e - n, t - a);
  const d = Math.max(
    0,
    Math.min(1, ((e - n) * i + (t - a) * l) / u)
  ), f = n + d * i, m = a + d * l;
  return Math.hypot(e - f, t - m);
}
function Dp(e, t) {
  return Math.abs(e.x - t.x) > 0.01 || Math.abs(e.y - t.y) > 0.01 || Math.abs(e.width - t.width) > 0.01 || Math.abs(e.height - t.height) > 0.01 || Math.abs(e.rotation - t.rotation) > 0.01;
}
function Cc(e, t) {
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
const Op = s.memo(function({
  coordParams: t,
  playerSize: n,
  itemTransform: a
}) {
  const o = s.useRef(null), [c, i] = s.useState(!1), [l, u] = s.useState(null), [d, f] = s.useState(null), [m, b] = s.useState(null), h = ze((g) => g.isEditing), x = ze((g) => g.editingItemId), v = ze((g) => g.draggingVertexIndex), S = ze((g) => g.draggingHandle), y = ze((g) => g.previewVertices), w = ze((g) => g.selectedVertexIndices), k = ze((g) => g.selectedVertexIndex), R = ze((g) => g.hoveredVertexIndex), O = ze((g) => g.hoveredHandle), L = ze((g) => g.penMode), I = ze((g) => g.penVertices), N = ze((g) => g.penDraggingHandle), P = ze((g) => g.penCursorPos), T = ze((g) => g.finishPenRequestVersion), j = ze((g) => g.cancelPenRequestVersion), E = ze(
    (g) => g.convertSelectedVertexRequestVersion
  ), A = ze(
    (g) => g.convertSelectedVertexRequestMode
  ), z = be((g) => g.commitMaskEdit), M = ze((g) => g.selectVertices), q = ze((g) => g.selectVertex), V = ze((g) => g.startVertexDrag), X = ze((g) => g.startHandleDrag), D = ze((g) => g.updatePreview), W = ze((g) => g.endDrag), Y = ze((g) => g.setHover), pe = ze((g) => g.stopEditing), C = ze((g) => g.addPenVertex), B = ze((g) => g.setPenVertices), U = ze((g) => g.updatePenLastHandle), J = ze((g) => g.setPenDragging), ne = ze((g) => g.setPenCursorPos), me = ze((g) => g.cancelPenMode), xe = Xe((g) => g.startTranslate), we = Xe((g) => g.updateInteraction), Re = Xe((g) => g.endInteraction), Be = Xe((g) => g.clearInteraction), Fe = d?.transform ?? a, De = s.useCallback(() => Pa(Fe, t), [Fe, t]), Qe = s.useCallback(
    (g) => {
      const G = De();
      return [
        G.left + g[0] * G.width,
        G.top + g[1] * G.height
      ];
    },
    [De]
  ), je = s.useCallback(
    (g) => Qe(g.position),
    [Qe]
  ), ee = s.useCallback(
    (g, G) => {
      const te = G === "in" ? g.inHandle : g.outHandle;
      return Qe([g.position[0] + te[0], g.position[1] + te[1]]);
    },
    [Qe]
  ), Ge = s.useCallback(
    (g, G) => {
      const te = _r(g, G, t), oe = De(), K = Rn(t), Z = oe.left / K, ie = oe.top / K, Ie = oe.width / K, Te = oe.height / K;
      return [
        (te.x - Z) / Ie,
        (te.y - ie) / Te
      ];
    },
    [t, De]
  ), H = s.useCallback(() => {
    if (d) return d.vertices;
    if (y) return y;
    if (!x) return null;
    const G = Yt.getState().items.find((te) => te.id === x);
    return G?.type === "shape" && G.shapeType === "path" ? G.pathVertices ?? null : null;
  }, [d, x, y]), ue = s.useCallback(
    (g, G) => ({
      left: Math.min(g[0], G[0]),
      top: Math.min(g[1], G[1]),
      width: Math.abs(G[0] - g[0]),
      height: Math.abs(G[1] - g[1])
    }),
    []
  ), Ce = s.useCallback(
    (g) => {
      const G = H();
      if (!G) return [];
      const te = g.left + g.width, oe = g.top + g.height, K = [];
      for (let Z = 0; Z < G.length; Z++) {
        const [ie, Ie] = je(G[Z]);
        ie >= g.left && ie <= te && Ie >= g.top && Ie <= oe && K.push(Z);
      }
      return K;
    },
    [H, je]
  ), Ve = s.useCallback(() => {
    const g = o.current;
    if (!g) return;
    const G = g.getContext("2d");
    if (!G) return;
    const te = window.devicePixelRatio || 1;
    g.width = n.width * te, g.height = n.height * te, G.scale(te, te), G.clearRect(0, 0, n.width, n.height), L ? et(G) : (_(G), he(G));
  }, [n, L, I, P, N, H, je, ee, Qe, v, S, w, k, R, O, l, m]), Me = s.useCallback((g, G, te) => {
    const oe = G.outHandle, K = te.inHandle;
    if (oe[0] === 0 && oe[1] === 0 && K[0] === 0 && K[1] === 0) {
      const [ie, Ie] = je(te);
      g.lineTo(ie, Ie);
    } else {
      const [ie, Ie] = ee(G, "out"), [Te, Ze] = ee(te, "in"), [ot, ht] = je(te);
      g.bezierCurveTo(ie, Ie, Te, Ze, ot, ht);
    }
  }, [je, ee]), _ = s.useCallback((g) => {
    const G = H();
    if (!G || G.length < 2) return;
    g.beginPath();
    const [te, oe] = je(G[0]);
    g.moveTo(te, oe);
    for (let K = 0; K < G.length; K++) {
      const Z = G[K], ie = G[(K + 1) % G.length];
      Me(g, Z, ie);
    }
    if (g.closePath(), g.strokeStyle = "#22d3ee", g.lineWidth = 1.5, g.stroke(), g.fillStyle = "rgba(34, 211, 238, 0.08)", g.fill(), l !== null) {
      const K = G[l], Z = G[(l + 1) % G.length];
      if (K && Z) {
        g.beginPath();
        const [ie, Ie] = je(K), [Te, Ze] = je(Z);
        g.moveTo(ie, Ie), Me(g, K, Z), g.strokeStyle = "#67e8f9", g.lineWidth = 3, g.stroke();
        const ot = K.outHandle[0] === 0 && K.outHandle[1] === 0 && Z.inHandle[0] === 0 && Z.inHandle[1] === 0, [ht, at] = ot ? [
          (ie + Te) / 2,
          (Ie + Ze) / 2
        ] : (() => {
          const [st, rt] = ee(K, "out"), [it, ft] = ee(Z, "in");
          return [
            Hn(ie, st, it, Te, 0.5),
            Hn(Ie, rt, ft, Ze, 0.5)
          ];
        })();
        g.beginPath(), g.arc(ht, at, 4, 0, Math.PI * 2), g.fillStyle = "#ffffff", g.fill(), g.strokeStyle = "#22d3ee", g.lineWidth = 1.5, g.stroke();
      }
    }
    for (let K = 0; K < G.length; K++)
      Ye(g, G[K], K);
  }, [H, je, ee, v, S, w, R, O, l, Me]), he = s.useCallback((g) => {
    !m || m.width < 1 && m.height < 1 || (g.save(), g.beginPath(), g.rect(
      m.left,
      m.top,
      m.width,
      m.height
    ), g.fillStyle = "rgba(34, 211, 238, 0.12)", g.fill(), g.strokeStyle = "rgba(103, 232, 249, 0.95)", g.lineWidth = 1, g.setLineDash([6, 4]), g.stroke(), g.restore());
  }, [m]), et = s.useCallback((g) => {
    if (I.length === 0) {
      if (P) {
        const [K, Z] = Qe(P);
        g.beginPath(), g.arc(K, Z, 3, 0, Math.PI * 2), g.fillStyle = "rgba(34, 211, 238, 0.5)", g.fill();
      }
      return;
    }
    g.beginPath();
    const [G, te] = je(I[0]);
    g.moveTo(G, te);
    for (let K = 0; K < I.length - 1; K++)
      Me(g, I[K], I[K + 1]);
    g.strokeStyle = "#22d3ee", g.lineWidth = 1.5, g.stroke();
    const oe = I.length >= 3 && v === 0 && S === "out";
    if (oe) {
      const K = I[I.length - 1], Z = I[0];
      g.beginPath();
      const [ie, Ie] = je(K);
      g.moveTo(ie, Ie), Me(g, K, Z), g.strokeStyle = "rgba(34, 211, 238, 0.4)", g.lineWidth = 1, g.setLineDash([4, 4]), g.stroke(), g.setLineDash([]);
    }
    if (P && !N && !oe) {
      const K = I[I.length - 1], [Z, ie] = je(K), [Ie, Te] = Qe(P);
      if (g.beginPath(), g.moveTo(Z, ie), K.outHandle[0] !== 0 || K.outHandle[1] !== 0) {
        const [Ze, ot] = ee(K, "out");
        g.quadraticCurveTo(Ze, ot, Ie, Te);
      } else
        g.lineTo(Ie, Te);
      g.strokeStyle = "rgba(34, 211, 238, 0.4)", g.lineWidth = 1, g.setLineDash([4, 4]), g.stroke(), g.setLineDash([]);
    }
    for (let K = 0; K < I.length; K++) {
      const Z = I[K], [ie, Ie] = je(Z), Te = Z.outHandle[0] !== 0 || Z.outHandle[1] !== 0, Ze = Z.inHandle[0] !== 0 || Z.inHandle[1] !== 0;
      if (Te) {
        const [it, ft] = ee(Z, "out");
        g.beginPath(), g.moveTo(ie, Ie), g.lineTo(it, ft), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(it, ft, ra, 0, Math.PI * 2);
        const vt = v === K && S === "out", Ir = R === K && O === "out";
        g.fillStyle = vt ? "#fff" : Ir ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
      }
      if (Ze) {
        const [it, ft] = ee(Z, "in");
        g.beginPath(), g.moveTo(ie, Ie), g.lineTo(it, ft), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(it, ft, ra, 0, Math.PI * 2);
        const vt = v === K && S === "in", Ir = R === K && O === "in";
        g.fillStyle = vt ? "#fff" : Ir ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
      }
      const ht = K === 0 && I.length >= 3 && P != null && (() => {
        const [it, ft] = je(I[0]), [vt, Ir] = Qe(P);
        return Math.hypot(vt - it, Ir - ft) < Ep;
      })(), at = v === K && S === null, st = w.includes(K), rt = R === K && O === null;
      st && Sc(g, ie, Ie), g.beginPath(), g.arc(ie, Ie, yc, 0, Math.PI * 2), g.fillStyle = st ? at ? "#fde68a" : "#fef3c7" : at ? "#fff" : ht || rt ? "#22d3ee" : "#0e7490", g.fill(), g.strokeStyle = st ? "#f59e0b" : ht || at ? "#fff" : "#22d3ee", g.lineWidth = ht || st ? 2.5 : 1.5, g.stroke();
    }
  }, [I, P, N, je, ee, Qe, v, S, w, R, O, Me]), Ye = s.useCallback((g, G, te) => {
    const [oe, K] = je(G), Z = G.inHandle[0] !== 0 || G.inHandle[1] !== 0, ie = G.outHandle[0] !== 0 || G.outHandle[1] !== 0;
    if (Z) {
      const [ot, ht] = ee(G, "in");
      g.beginPath(), g.moveTo(oe, K), g.lineTo(ot, ht), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(ot, ht, ra, 0, Math.PI * 2);
      const at = R === te && O === "in";
      g.fillStyle = at ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
    }
    if (ie) {
      const [ot, ht] = ee(G, "out");
      g.beginPath(), g.moveTo(oe, K), g.lineTo(ot, ht), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(ot, ht, ra, 0, Math.PI * 2);
      const at = R === te && O === "out";
      g.fillStyle = at ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
    }
    const Ie = v === te && S === null, Te = w.includes(te), Ze = R === te && O === null;
    Te && Sc(g, oe, K), g.beginPath(), g.arc(oe, K, yc, 0, Math.PI * 2), g.fillStyle = Te ? Ie ? "#fde68a" : "#fef3c7" : Ie ? "#fff" : Ze ? "#22d3ee" : "#0e7490", g.fill(), g.strokeStyle = Te ? "#f59e0b" : "#22d3ee", g.lineWidth = Te ? 2.5 : 1.5, g.stroke();
  }, [je, ee, v, S, w, R, O]);
  s.useEffect(() => {
    Ve();
  }, [Ve]), s.useEffect(() => {
    i(!1), u(null), f(null), b(null), q(null);
  }, [x, L, q]);
  const $e = s.useCallback(
    (g, G) => {
      const te = H();
      if (!te) return null;
      for (let oe = 0; oe < te.length; oe++) {
        const K = te[oe];
        if (K.inHandle[0] !== 0 || K.inHandle[1] !== 0) {
          const [Z, ie] = ee(K, "in");
          if (Math.hypot(g - Z, G - ie) < un)
            return { type: "inHandle", index: oe };
        }
        if (K.outHandle[0] !== 0 || K.outHandle[1] !== 0) {
          const [Z, ie] = ee(K, "out");
          if (Math.hypot(g - Z, G - ie) < un)
            return { type: "outHandle", index: oe };
        }
      }
      for (let oe = 0; oe < te.length; oe++) {
        const [K, Z] = je(te[oe]);
        if (Math.hypot(g - K, G - Z) < un)
          return { type: "vertex", index: oe };
      }
      for (let oe = 0; oe < te.length; oe++) {
        const K = te[oe], Z = te[(oe + 1) % te.length], [ie, Ie] = je(K), [Te, Ze] = je(Z);
        if (K.outHandle[0] === 0 && K.outHandle[1] === 0 && Z.inHandle[0] === 0 && Z.inHandle[1] === 0) {
          if (kc(g, G, ie, Ie, Te, Ze) < un)
            return { type: "segment", index: oe };
          continue;
        }
        const [ht, at] = ee(K, "out"), [st, rt] = ee(Z, "in");
        let it = ie, ft = Ie;
        for (let vt = 1; vt <= na; vt++) {
          const Ir = vt / na, Hr = Hn(ie, ht, st, Te, Ir), bn = Hn(Ie, at, rt, Ze, Ir);
          if (kc(g, G, it, ft, Hr, bn) < un)
            return { type: "segment", index: oe };
          it = Hr, ft = bn;
        }
      }
      if (te.length >= 3) {
        const oe = [je(te[0])];
        for (let K = 0; K < te.length; K++) {
          const Z = te[K], ie = te[(K + 1) % te.length], [Ie, Te] = je(Z), [Ze, ot] = je(ie);
          if (Z.outHandle[0] === 0 && Z.outHandle[1] === 0 && ie.inHandle[0] === 0 && ie.inHandle[1] === 0) {
            oe.push([Ze, ot]);
            continue;
          }
          const [at, st] = ee(Z, "out"), [rt, it] = ee(ie, "in");
          for (let ft = 1; ft <= na; ft++) {
            const vt = ft / na;
            oe.push([
              Hn(Ie, at, rt, Ze, vt),
              Hn(Te, st, it, ot, vt)
            ]);
          }
        }
        if (Ap(g, G, oe))
          return { type: "shape" };
      }
      return null;
    },
    [H, je, ee]
  ), ct = s.useCallback(
    (g, G) => {
      for (let te = 0; te < I.length; te++) {
        const oe = I[te];
        if (oe.inHandle[0] !== 0 || oe.inHandle[1] !== 0) {
          const [K, Z] = ee(oe, "in");
          if (Math.hypot(g - K, G - Z) < un)
            return { type: "inHandle", index: te };
        }
        if (oe.outHandle[0] !== 0 || oe.outHandle[1] !== 0) {
          const [K, Z] = ee(oe, "out");
          if (Math.hypot(g - K, G - Z) < un)
            return { type: "outHandle", index: te };
        }
      }
      for (let te = 0; te < I.length; te++) {
        const [oe, K] = je(I[te]);
        if (Math.hypot(g - oe, G - K) < un)
          return { type: "vertex", index: te };
      }
      return null;
    },
    [I, je, ee]
  ), pt = s.useRef(null), Vt = s.useRef(null), yr = s.useRef(null), Bt = s.useCallback(() => {
    Vt.current = null, J(!1), W(), Y(null);
  }, [W, Y, J]), Lr = s.useCallback(
    (g, G, te, oe) => {
      const K = _r(G, te, t), Z = De(), ie = Rn(t), Ie = Z.width / ie, Te = Z.height / ie, Ze = K.x - g.startCanvasPos[0], ot = K.y - g.startCanvasPos[1], ht = Qr(g.startVertices);
      if (g.handleType === null) {
        const ft = ht[g.vertexIndex], vt = g.startVertices[g.vertexIndex];
        return ft.position[0] = vt.position[0] + Ze / Ie, ft.position[1] = vt.position[1] + ot / Te, ht;
      }
      const at = ht[g.vertexIndex], st = g.startVertices[g.vertexIndex], rt = g.handleType === "in" ? st.inHandle : st.outHandle, it = [
        rt[0] + Ze / Ie,
        rt[1] + ot / Te
      ];
      return g.handleType === "in" ? (at.inHandle = it, oe || (at.outHandle = [-it[0], -it[1]])) : (at.outHandle = it, oe || (at.inHandle = [-it[0], -it[1]])), ht;
    },
    [t, De]
  ), hr = s.useCallback(
    (g) => {
      g.stopPropagation(), g.preventDefault();
      const G = Ge(g.clientX, g.clientY);
      ne(G);
      const te = o.current?.getBoundingClientRect();
      if (!te) return;
      const oe = g.clientX - te.left, K = g.clientY - te.top, Z = ct(oe, K), ie = _r(g.clientX, g.clientY, t);
      if (Z) {
        const Te = Z.type === "inHandle" ? "in" : Z.type === "outHandle" ? "out" : null, Ze = Z.type === "vertex" && Z.index === 0 && I.length >= 3;
        Vt.current = Ze ? {
          type: "close-or-drag",
          vertexIndex: Z.index,
          // Match normal point placement: drag sets the anchor's outgoing direction.
          handleType: "out",
          startScreenPos: [g.clientX, g.clientY],
          startCanvasPos: [ie.x, ie.y],
          startVertices: Qr(I),
          hasMoved: !1
        } : Z.type === "vertex" ? {
          type: "vertex",
          vertexIndex: Z.index,
          handleType: null,
          startScreenPos: [g.clientX, g.clientY],
          startCanvasPos: [ie.x, ie.y],
          startVertices: Qr(I),
          hasMoved: !1
        } : {
          type: "handle",
          vertexIndex: Z.index,
          handleType: Te,
          startScreenPos: [g.clientX, g.clientY],
          startCanvasPos: [ie.x, ie.y],
          startVertices: Qr(I),
          hasMoved: !1
        }, J(!0), Y(Z.index, Te), Z.type === "vertex" && !Ze ? V(Z.index) : Te && X(Z.index, Te), o.current?.setPointerCapture(g.pointerId);
        return;
      }
      C({
        position: G,
        inHandle: [0, 0],
        outHandle: [0, 0]
      }), J(!0), Y(I.length, null), Vt.current = {
        type: "create",
        vertexIndex: I.length,
        startScreenPos: [g.clientX, g.clientY]
      }, o.current?.setPointerCapture(g.pointerId);
    },
    [
      I,
      Ge,
      ne,
      ct,
      t,
      J,
      Y,
      V,
      X,
      C
    ]
  ), wr = s.useCallback(
    (g) => {
      const G = Ge(g.clientX, g.clientY);
      ne(G);
      const te = Vt.current;
      if (te) {
        const Ie = Math.hypot(
          g.clientX - te.startScreenPos[0],
          g.clientY - te.startScreenPos[1]
        );
        if (te.type === "create") {
          if (Ie < wc) return;
          const Ze = ze.getState().penVertices, ot = Ze[Ze.length - 1];
          if (!ot) return;
          X(te.vertexIndex, "out"), U([
            G[0] - ot.position[0],
            G[1] - ot.position[1]
          ]);
          return;
        }
        const Te = te.type === "close-or-drag" ? wc : po;
        if (Ie < Te && !te.hasMoved)
          return;
        te.hasMoved || (te.hasMoved = !0, te.type === "vertex" ? V(te.vertexIndex) : te.type === "close-or-drag" ? X(te.vertexIndex, te.handleType ?? "in") : te.handleType && X(te.vertexIndex, te.handleType)), B(Lr(te, g.clientX, g.clientY, g.altKey));
        return;
      }
      const oe = o.current?.getBoundingClientRect();
      if (!oe) return;
      const K = g.clientX - oe.left, Z = g.clientY - oe.top, ie = ct(K, Z);
      ie ? ie.type === "vertex" ? Y(ie.index, null) : Y(ie.index, ie.type === "inHandle" ? "in" : "out") : Y(null);
    },
    [
      Ge,
      ne,
      X,
      U,
      V,
      B,
      Lr,
      ct,
      Y
    ]
  ), Br = s.useCallback(
    (g) => {
      const G = Vt.current;
      if (!G) return;
      if (g.stopPropagation(), g.preventDefault(), o.current?.releasePointerCapture(g.pointerId), Vt.current = null, J(!1), W(), G.type === "close-or-drag") {
        yr.current?.();
        return;
      }
      const te = Ge(g.clientX, g.clientY);
      ne(te);
      const oe = o.current?.getBoundingClientRect();
      if (!oe) {
        Y(null);
        return;
      }
      const K = g.clientX - oe.left, Z = g.clientY - oe.top, ie = ct(K, Z);
      ie ? ie.type === "vertex" ? Y(ie.index, null) : Y(ie.index, ie.type === "inHandle" ? "in" : "out") : Y(null);
    },
    [J, W, Ge, ne, ct, Y]
  ), Sr = s.useCallback(
    (g) => {
      const G = o.current?.getBoundingClientRect();
      if (!G) return;
      const te = g.clientX - G.left, oe = g.clientY - G.top, K = ct(te, oe);
      if (K?.type !== "vertex") return;
      g.preventDefault(), g.stopPropagation();
      const Z = I.filter((ie, Ie) => Ie !== K.index);
      B(Z), Z.length === 0 ? Y(null) : K.index >= Z.length ? Y(Z.length - 1, null) : Y(K.index, null);
    },
    [ct, I, B, Y]
  ), At = s.useCallback((g) => {
    const G = Du(g);
    if (!G) {
      me();
      return;
    }
    const { width: te, height: oe } = t.projectSize, K = Math.max(G.maxX - G.minX, 2 / te), Z = Math.max(G.maxY - G.minY, 2 / oe), ie = K * te, Ie = Z * oe;
    if (ie < 2 || Ie < 2) {
      me();
      return;
    }
    const Te = g.map((Ft) => ({
      position: [
        (Ft.position[0] - G.minX) / K,
        (Ft.position[1] - G.minY) / Z
      ],
      // Scale handles proportionally
      inHandle: [
        Ft.inHandle[0] / K,
        Ft.inHandle[1] / Z
      ],
      outHandle: [
        Ft.outHandle[0] / K,
        Ft.outHandle[1] / Z
      ]
    })), Ze = ((G.minX + G.maxX) / 2 - 0.5) * te, ot = ((G.minY + G.maxY) / 2 - 0.5) * oe, { tracks: ht, fps: at, addItem: st, setTracks: rt } = be.getState(), it = Yt.getState().items, { activeTrackId: ft, selectItems: vt, setActiveTrack: Ir } = Pt.getState(), Hr = re.getState().currentFrame, bn = at * 60;
    let Ur = Ol({
      tracks: ht,
      items: it,
      activeTrackId: ft,
      proposedFrame: Hr,
      durationInFrames: bn,
      itemType: "shape"
    });
    if (!Ur) {
      me();
      return;
    }
    const vn = Ur.trackId, Xr = Ll(ht).filter(
      (Ft) => Ft.visible !== !1 && !Ft.locked && !Ft.muted && !Ft.isGroup
    ), pr = ft ? Xr.find((Ft) => Ft.id === ft) : void 0, Gr = Xr.find((Ft) => Ft.id === vn);
    if (!Ur.preservedTime || vn !== ft && !!pr && !!Gr && Gr.order > pr.order) {
      const Ft = ht.find((rs) => rs.id === vn), Ba = ht.length > 0 ? Math.min(...ht.map((rs) => rs.order ?? 0)) : 0, Ds = {
        id: `track-${Date.now()}`,
        name: Np(ht),
        height: Ft?.height ?? 72,
        locked: !1,
        visible: !0,
        muted: !1,
        solo: !1,
        order: Ba - 1,
        items: []
      };
      rt([Ds, ...ht]), Ur = {
        trackId: Ds.id,
        from: Hr,
        preservedTime: !0
      };
    }
    const Tr = {
      id: crypto.randomUUID(),
      type: "shape",
      trackId: Ur.trackId,
      from: Ur.from,
      durationInFrames: bn,
      label: "Path Mask",
      shapeType: "path",
      pathVertices: Te,
      fillColor: "#ffffff",
      isMask: !0,
      maskType: "alpha",
      transform: {
        x: Ze,
        y: ot,
        width: ie,
        height: Ie,
        rotation: 0,
        opacity: 1,
        aspectRatioLocked: !1
      }
    };
    st(Tr), Ir(Tr.trackId), vt([Tr.id]), Ud.getState().requestScrollToFrame(Tr.from), pe();
  }, [t, me, pe]), Ue = s.useCallback(() => {
    const g = ze.getState(), G = g.penVertices;
    if (Bt(), !g.shapePenMode || G.length < 3) {
      me();
      return;
    }
    At(G);
  }, [me, At, Bt]);
  yr.current = Ue;
  const It = s.useCallback(() => {
    Bt(), me();
  }, [me, Bt]), zt = s.useRef(0), Pe = s.useRef(0), tr = s.useRef(0);
  s.useEffect(() => {
    zt.current = 0, Pe.current = 0, tr.current = 0;
  }, [x, L]), s.useEffect(() => {
    L && T !== 0 && T !== zt.current && (zt.current = T, Ue());
  }, [L, T, Ue]), s.useEffect(() => {
    L && j !== 0 && j !== Pe.current && (Pe.current = j, It());
  }, [L, j, It]);
  const qt = s.useCallback(() => {
    const g = ze.getState();
    if (g.penVertices.length === 0) return;
    const G = g.penVertices.slice(0, -1);
    Vt.current = null, J(!1), W(), B(G), Y(G.length > 0 ? G.length - 1 : null);
  }, [W, Y, J, B]);
  s.useEffect(() => {
    if (!L) return;
    const g = (G) => {
      if (!(G.key === "Shift" || G.key === "Alt" || G.key === "Control" || G.key === "Meta")) {
        if (G.stopPropagation(), G.stopImmediatePropagation(), G.key === "Escape") {
          G.preventDefault(), It();
          return;
        }
        if (G.key === "Backspace" || G.key === "Delete") {
          G.preventDefault(), qt();
          return;
        }
        G.preventDefault();
      }
    };
    return window.addEventListener("keydown", g, !0), () => window.removeEventListener("keydown", g, !0);
  }, [L, It, qt]);
  const Ht = s.useRef(!1), or = s.useRef(t);
  or.current = t;
  const Pr = s.useRef(De);
  Pr.current = De;
  const Ut = s.useRef(x);
  Ut.current = x;
  const Tn = s.useRef(Fe);
  Tn.current = Fe;
  const qr = s.useRef([]);
  s.useEffect(() => () => {
    for (const G of qr.current)
      cancelAnimationFrame(G);
    qr.current = [], Xe.getState().activeGizmo?.itemId === Ut.current && Xe.getState().clearInteraction();
  }, []);
  const tn = s.useCallback(() => {
    for (const G of qr.current)
      cancelAnimationFrame(G);
    qr.current = [];
    const g = requestAnimationFrame(() => {
      const G = requestAnimationFrame(() => {
        qr.current = [], f(null), Be(), W();
      });
      qr.current = [g, G];
    });
    qr.current = [g];
  }, [Be, W]), xn = s.useCallback(
    (g, G, te) => {
      const oe = hn.getState().keyframesByItemId[g.id], K = {}, Z = [], ie = te - g.from, Ie = ie >= 0 && ie < g.durationInFrames;
      for (const Te of jp) {
        const Ze = G[Te];
        if (typeof Ze != "number")
          continue;
        const ot = oe?.properties.find((at) => at.property === Te), ht = Zn(
          g,
          oe,
          Te,
          Ze,
          te
        );
        if (ht) {
          Z.push(ht);
          continue;
        }
        if (Ie && ot && ot.keyframes.length > 0) {
          const at = Ss.getState().transitions;
          if (!Bl(ie, g.id, g, at)) {
            Z.push({
              type: "add",
              itemId: g.id,
              property: Te,
              frame: ie,
              value: Ze,
              easing: "linear"
            });
            continue;
          }
        }
        K[Te] = Ze;
      }
      return { baseTransform: K, autoKeyframeOperations: Z };
    },
    []
  ), jr = s.useCallback(
    (g) => {
      if (!x) return;
      const G = Yt.getState().itemById[x];
      if (G?.type === "shape" && G.shapeType === "path") {
        const te = re.getState().currentFrame, oe = vc(g, a, G.transform), { baseTransform: K, autoKeyframeOperations: Z } = xn(
          G,
          {
            x: oe.transform.x,
            y: oe.transform.y,
            width: oe.transform.width,
            height: oe.transform.height
          },
          te
        );
        f({
          vertices: Qr(oe.pathVertices),
          transform: Cc(oe.transform, a)
        }), z(x, {
          pathVertices: Qr(oe.pathVertices),
          transform: K,
          autoKeyframeOperations: Z
        }), tn();
      }
    },
    [xn, z, x, a, tn]
  ), En = s.useCallback(() => {
    const g = H();
    if (!g) return;
    const G = w.length > 0 ? w.filter((Te) => Number.isInteger(Te) && Te >= 0 && Te < g.length) : k !== null && g[k] ? [k] : [];
    if (G.length === 0 || g.length - G.length < 3) return;
    const te = [...G].sort((Te, Ze) => Ze - Te);
    let oe = g;
    for (const Te of te)
      oe = oe ? pc(oe, Te) : null;
    if (!oe) return;
    const K = new Set(G), Z = w.filter((Te) => !K.has(Te)).map((Te) => Te - G.filter((Ze) => Ze < Te).length), ie = k === null || K.has(k) ? null : k - G.filter((Te) => Te < k).length, Ie = ie !== null && Z.includes(ie) ? ie : Z[Z.length - 1] ?? null;
    M(Z, Ie), jr(oe);
  }, [jr, H, M, k, w]);
  s.useEffect(() => {
    if (!h || L) return;
    const g = (G) => {
      G.key === "Shift" || G.key === "Alt" || G.key === "Control" || G.key === "Meta" || G.key !== "Backspace" && G.key !== "Delete" || (G.preventDefault(), G.stopPropagation(), G.stopImmediatePropagation(), En());
    };
    return window.addEventListener("keydown", g, !0), () => window.removeEventListener("keydown", g, !0);
  }, [h, L, En]), s.useEffect(() => {
    if (!h || L || E === 0 || E === tr.current || v !== null || S !== null || (tr.current = E, w.length === 0 && k === null || !A))
      return;
    const g = H();
    if (!g) {
      q(null);
      return;
    }
    const G = w.length > 0 ? w.filter((oe) => !!g[oe]) : k !== null && g[k] ? [k] : [];
    if (G.length === 0) {
      q(null);
      return;
    }
    const te = Qr(g);
    for (const oe of G) {
      const Z = (A === "corner" ? Au(g, oe) : Ip(g, oe))[oe];
      Z && (te[oe] = {
        position: [...Z.position],
        inHandle: [...Z.inHandle],
        outHandle: [...Z.outHandle]
      });
    }
    jr(te);
  }, [
    h,
    L,
    v,
    S,
    w,
    k,
    E,
    A,
    H,
    jr,
    q
  ]);
  const rn = s.useCallback(
    (g) => {
      if (Ht.current) return;
      const G = o.current?.getBoundingClientRect();
      if (!G) return;
      const te = g.clientX - G.left, oe = g.clientY - G.top, K = $e(te, oe);
      if (!K) {
        g.stopPropagation(), g.preventDefault(), o.current.setPointerCapture(g.pointerId), Ht.current = !0, pt.current = {
          type: "marquee",
          startScreenPos: [te, oe],
          currentScreenPos: [te, oe],
          hasMoved: !1
        }, i(!1), u(null), Y(null), b(null);
        return;
      }
      g.stopPropagation(), g.preventDefault();
      const Z = H();
      if (!Z) return;
      o.current.setPointerCapture(g.pointerId), Ht.current = !0;
      const ie = _r(g.clientX, g.clientY, t);
      if (K.type === "vertex")
        V(K.index), pt.current = {
          type: "vertex",
          startVertices: Z.map((Ie) => ({
            position: [...Ie.position],
            inHandle: [...Ie.inHandle],
            outHandle: [...Ie.outHandle]
          })),
          vertexIndex: K.index,
          handleType: null,
          startCanvasPos: [ie.x, ie.y]
        };
      else if (K.type === "inHandle" || K.type === "outHandle") {
        const Ie = K.type === "inHandle" ? "in" : "out";
        X(K.index, Ie), pt.current = {
          type: "handle",
          startVertices: Z.map((Te) => ({
            position: [...Te.position],
            inHandle: [...Te.inHandle],
            outHandle: [...Te.outHandle]
          })),
          vertexIndex: K.index,
          handleType: Ie,
          startCanvasPos: [ie.x, ie.y]
        };
      } else {
        const Ie = Ut.current;
        if (!Ie) return;
        xe(Ie, ie, Tn.current), pt.current = {
          type: "shape",
          startTransform: Tn.current
        }, u(null), Y(null), i(!0);
      }
    },
    [
      $e,
      H,
      t,
      V,
      X,
      jr,
      Y,
      xe
    ]
  ), js = s.useCallback(
    (g) => {
      if (Ht.current) {
        const Z = pt.current;
        if (!Z) return;
        if (Z.type === "marquee") {
          const rt = [
            g.clientX - (o.current?.getBoundingClientRect().left ?? 0),
            g.clientY - (o.current?.getBoundingClientRect().top ?? 0)
          ], it = ue(Z.startScreenPos, rt), ft = it.width >= po || it.height >= po;
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
        const ie = _r(g.clientX, g.clientY, or.current);
        if (Z.type === "shape") {
          we(ie, g.shiftKey, g.ctrlKey, g.altKey);
          return;
        }
        const Ie = ie.x - Z.startCanvasPos[0], Te = ie.y - Z.startCanvasPos[1], Ze = Pr.current(), ot = Rn(or.current), ht = Ze.width / ot, at = Ze.height / ot, st = Z.startVertices.map((rt) => ({
          position: [...rt.position],
          inHandle: [...rt.inHandle],
          outHandle: [...rt.outHandle]
        }));
        if (Z.handleType === null) {
          const rt = st[Z.vertexIndex], it = Z.startVertices[Z.vertexIndex];
          rt.position[0] = it.position[0] + Ie / ht, rt.position[1] = it.position[1] + Te / at;
        } else {
          const rt = st[Z.vertexIndex], it = Z.startVertices[Z.vertexIndex], ft = Z.handleType === "in" ? it.inHandle : it.outHandle, vt = [
            ft[0] + Ie / ht,
            ft[1] + Te / at
          ];
          Z.handleType === "in" ? (rt.inHandle = vt, g.altKey || (rt.outHandle = [-vt[0], -vt[1]])) : (rt.outHandle = vt, g.altKey || (rt.inHandle = [-vt[0], -vt[1]]));
        }
        D(st);
        return;
      }
      const G = o.current?.getBoundingClientRect();
      if (!G) return;
      const te = g.clientX - G.left, oe = g.clientY - G.top, K = $e(te, oe);
      K ? K.type === "vertex" ? (i(!1), u(null), Y(K.index, null)) : K.type === "inHandle" ? (i(!1), u(null), Y(K.index, "in")) : K.type === "outHandle" ? (i(!1), u(null), Y(K.index, "out")) : K.type === "segment" ? (i(!1), u(K.index), Y(null)) : (u(null), i(!0), Y(null)) : (i(!1), u(null), Y(null));
    },
    [ue, Ce, $e, M, Y, D, we]
  ), Ns = s.useCallback(
    (g) => {
      if (!Ht.current) return;
      g.stopPropagation(), g.preventDefault(), o.current?.releasePointerCapture(g.pointerId), Ht.current = !1;
      const G = pt.current, te = ze.getState().previewVertices, oe = Ut.current;
      if (G?.type === "marquee")
        if (b(null), G.hasMoved) {
          const K = ue(G.startScreenPos, G.currentScreenPos), Z = Ce(K);
          M(
            Z,
            Z[Z.length - 1] ?? null
          );
        } else
          q(null);
      else if (G?.type === "shape") {
        const K = Re();
        if (K && oe && Dp(G.startTransform, K)) {
          const Z = Yt.getState().items.find((ie) => ie.id === oe);
          if (Z?.type === "shape" && Z.shapeType === "path") {
            const ie = re.getState().currentFrame, { baseTransform: Ie, autoKeyframeOperations: Te } = xn(
              Z,
              {
                x: K.x,
                y: K.y
              },
              ie
            );
            z(oe, {
              transform: Ie,
              autoKeyframeOperations: Te
            }, { operation: "move" });
          }
        }
        tn();
      } else if (te && oe) {
        const K = Yt.getState().items.find((Z) => Z.id === oe);
        if (K?.type === "shape" && K.shapeType === "path") {
          const Z = re.getState().currentFrame, ie = vc(te, a, K.transform), { baseTransform: Ie, autoKeyframeOperations: Te } = xn(
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
            vertices: Qr(ie.pathVertices),
            transform: Cc(ie.transform, a)
          }), z(oe, {
            pathVertices: Qr(ie.pathVertices),
            transform: Ie,
            autoKeyframeOperations: Te
          });
        }
        tn();
      } else
        tn();
      pt.current = null;
    },
    [
      xn,
      z,
      Re,
      ue,
      Ce,
      a,
      tn,
      q,
      M
    ]
  ), La = s.useCallback(
    (g) => {
      const G = o.current?.getBoundingClientRect();
      if (!G) return;
      const te = g.clientX - G.left, oe = g.clientY - G.top, K = $e(te, oe);
      if (K?.type === "vertex") {
        g.preventDefault(), g.stopPropagation();
        const Z = H();
        if (!Z) return;
        const ie = pc(Z, K.index);
        if (ie) {
          const Ie = w.filter((ot) => ot !== K.index).map((ot) => ot > K.index ? ot - 1 : ot), Te = k === null || k === K.index ? null : k > K.index ? k - 1 : k, Ze = Te !== null && Ie.includes(Te) ? Te : Ie[Ie.length - 1] ?? null;
          M(Ie, Ze), jr(ie);
        }
      }
    },
    [$e, H, w, k, M, jr]
  ), Nr = s.useCallback(
    (g) => {
      const G = o.current?.getBoundingClientRect();
      if (!G) return;
      const te = g.clientX - G.left, oe = g.clientY - G.top, K = $e(te, oe);
      if (K?.type !== "segment") return;
      g.preventDefault(), g.stopPropagation();
      const Z = H();
      if (!Z) return;
      const ie = Pp(Z, K.index);
      q(K.index + 1), jr(ie), i(!1), u(null);
    },
    [$e, H, q, jr]
  );
  if (!h) return null;
  const As = c ? "move" : "crosshair";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "absolute z-20",
      style: {
        top: 0,
        left: 0,
        width: n.width,
        height: n.height,
        pointerEvents: "none"
      },
      children: /* @__PURE__ */ r.jsx(
        "canvas",
        {
          ref: o,
          className: "absolute inset-0",
          style: {
            width: n.width,
            height: n.height,
            pointerEvents: "auto",
            cursor: As
          },
          onPointerDown: L ? hr : rn,
          onPointerMove: L ? wr : js,
          onPointerUp: L ? Br : Ns,
          onContextMenu: L ? Sr : La,
          onDoubleClick: L ? void 0 : Nr
        }
      )
    }
  );
}), _p = s.memo(function({
  containerRect: t,
  playerSize: n,
  projectSize: a,
  zoom: o
}) {
  const c = ze((b) => b.isEditing), i = ze((b) => b.editingItemId), l = ze((b) => b.shapePenMode), u = Yt(
    s.useCallback(
      (b) => i ? b.itemById[i] ?? null : null,
      [i]
    )
  ), d = oi(u ? [u] : [], a), f = s.useMemo(() => t ? { containerRect: t, playerSize: n, projectSize: a, zoom: o } : null, [t, n, a, o]), m = s.useMemo(() => {
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
  return !c || !f || !m ? null : /* @__PURE__ */ r.jsx(Yo, { level: "component", children: /* @__PURE__ */ r.jsx(
    Op,
    {
      coordParams: f,
      playerSize: n,
      itemTransform: m
    }
  ) });
}), Mc = 6, Rc = 12, $r = 20, go = ["topLeft", "topRight", "bottomRight", "bottomLeft"], Pc = {
  topLeft: [0, 0],
  topRight: [0, 0],
  bottomRight: [0, 0],
  bottomLeft: [0, 0]
}, Lp = s.memo(function({
  coordParams: t,
  playerSize: n,
  itemTransform: a
}) {
  const o = s.useRef(null), c = s.useRef(!1), i = s.useRef(null), l = s.useRef(Pc), {
    editingItemId: u,
    draggingHandle: d,
    hoveredHandle: f,
    previewCornerPin: m,
    setHovered: b
  } = Fr(), v = Yt((z) => z.items).find((z) => z.id === u)?.cornerPin ?? Pc, S = m ?? v, y = Rn(t), w = s.useRef(t);
  w.current = t;
  const k = s.useRef(a);
  k.current = a;
  const R = s.useRef(y);
  R.current = y;
  const O = s.useRef(u);
  O.current = u;
  const L = s.useRef(v);
  L.current = v;
  const I = s.useCallback(
    (z) => {
      const { projectSize: M } = t, q = a.width, V = a.height, X = M.width / 2 + a.x - q / 2, D = M.height / 2 + a.y - V / 2;
      let W, Y;
      const pe = S[z];
      switch (z) {
        case "topLeft":
          W = X + pe[0], Y = D + pe[1];
          break;
        case "topRight":
          W = X + q + pe[0], Y = D + pe[1];
          break;
        case "bottomRight":
          W = X + q + pe[0], Y = D + V + pe[1];
          break;
        case "bottomLeft":
          W = X + pe[0], Y = D + V + pe[1];
          break;
      }
      if (a.rotation !== 0) {
        const C = M.width / 2 + a.x, B = M.height / 2 + a.y, U = a.rotation * Math.PI / 180, J = Math.cos(U), ne = Math.sin(U), me = W - C, xe = Y - B;
        W = C + me * J - xe * ne, Y = B + me * ne + xe * J;
      }
      return [W * y + $r, Y * y + $r];
    },
    [t, a, S, y]
  ), N = s.useCallback(
    (z, M, q) => {
      const V = k.current, X = R.current, { projectSize: D } = w.current, W = V.width, Y = V.height;
      let pe = (M - $r) / X, C = (q - $r) / X;
      if (V.rotation !== 0) {
        const J = D.width / 2 + V.x, ne = D.height / 2 + V.y, me = -V.rotation * Math.PI / 180, xe = Math.cos(me), we = Math.sin(me), Re = pe - J, Be = C - ne;
        pe = J + Re * xe - Be * we, C = ne + Re * we + Be * xe;
      }
      const B = D.width / 2 + V.x - W / 2, U = D.height / 2 + V.y - Y / 2;
      switch (z) {
        case "topLeft":
          return [pe - B, C - U];
        case "topRight":
          return [pe - (B + W), C - U];
        case "bottomRight":
          return [pe - (B + W), C - (U + Y)];
        case "bottomLeft":
          return [pe - B, C - (U + Y)];
      }
    },
    []
  ), P = s.useCallback(() => {
    const z = o.current;
    if (!z) return;
    const M = z.getContext("2d");
    if (!M) return;
    const q = window.devicePixelRatio || 1;
    M.setTransform(q, 0, 0, q, 0, 0), M.clearRect(0, 0, z.width, z.height);
    const V = go.map((D) => I(D));
    M.beginPath(), M.moveTo(V[0][0], V[0][1]), M.lineTo(V[1][0], V[1][1]), M.lineTo(V[2][0], V[2][1]), M.lineTo(V[3][0], V[3][1]), M.closePath(), M.strokeStyle = "#22d3ee", M.lineWidth = 1.5, M.setLineDash([4, 4]), M.stroke(), M.setLineDash([]), M.beginPath(), M.moveTo(V[0][0], V[0][1]), M.lineTo(V[2][0], V[2][1]), M.moveTo(V[1][0], V[1][1]), M.lineTo(V[3][0], V[3][1]), M.strokeStyle = "rgba(34, 211, 238, 0.3)", M.lineWidth = 1, M.stroke();
    const X = ["TL", "TR", "BR", "BL"];
    for (let D = 0; D < 4; D++) {
      const [W, Y] = V[D], pe = go[D], C = d === pe, B = f === pe, U = C || B ? Mc + 2 : Mc;
      M.beginPath(), M.arc(W, Y, U, 0, Math.PI * 2), M.fillStyle = C ? "#22d3ee" : B ? "rgba(34, 211, 238, 0.8)" : "white", M.fill(), M.strokeStyle = "#22d3ee", M.lineWidth = 2, M.stroke(), M.fillStyle = C ? "white" : "#22d3ee", M.font = "9px monospace", M.textAlign = "center", M.fillText(X[D], W, Y - U - 4);
    }
  }, [I, d, f]), T = s.useCallback(
    (z, M) => {
      for (const q of go) {
        const [V, X] = I(q), D = z - V, W = M - X;
        if (D * D + W * W <= Rc * Rc)
          return q;
      }
      return null;
    },
    [I]
  ), j = s.useCallback(
    (z) => {
      if (c.current) return;
      const M = o.current?.getBoundingClientRect();
      if (!M) return;
      const q = z.clientX - M.left, V = z.clientY - M.top, X = T(q, V);
      !X || !O.current || (z.stopPropagation(), z.preventDefault(), o.current.setPointerCapture(z.pointerId), c.current = !0, i.current = X, l.current = { ...L.current }, Fr.getState().setDragging(X));
    },
    [T]
  ), E = s.useCallback(
    (z) => {
      const M = o.current?.getBoundingClientRect();
      if (!M) return;
      const q = z.clientX - M.left, V = z.clientY - M.top;
      if (c.current && i.current) {
        const W = N(i.current, q, V), Y = [
          Math.round(W[0] * 10) / 10,
          Math.round(W[1] * 10) / 10
        ];
        Fr.getState().setPreview({
          ...l.current,
          [i.current]: Y
        });
        return;
      }
      const X = T(q, V);
      b(X);
      const D = o.current;
      D && (D.style.cursor = X ? "move" : "default");
    },
    [T, N, b]
  ), A = s.useCallback(
    (z) => {
      if (!c.current) return;
      z.stopPropagation(), z.preventDefault(), o.current?.releasePointerCapture(z.pointerId), c.current = !1;
      const M = i.current;
      i.current = null;
      const q = Fr.getState().previewCornerPin, V = O.current;
      q && V && M && be.getState().updateItem(V, { cornerPin: q }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          Fr.getState().clearPreview();
        });
      });
    },
    []
  );
  return s.useEffect(() => {
    const z = o.current;
    if (!z) return;
    const M = window.devicePixelRatio || 1, q = (n.width + $r * 2) * M, V = (n.height + $r * 2) * M;
    (z.width !== q || z.height !== V) && (z.width = q, z.height = V), P();
  }, [n, P]), /* @__PURE__ */ r.jsx(
    "canvas",
    {
      ref: o,
      className: "absolute z-20",
      style: {
        top: -$r,
        left: -$r,
        width: n.width + $r * 2,
        height: n.height + $r * 2,
        pointerEvents: "auto"
      },
      onPointerDown: j,
      onPointerMove: E,
      onPointerUp: A,
      onClick: (z) => z.stopPropagation()
    }
  );
}), Bp = s.memo(function({
  containerRect: t,
  playerSize: n,
  projectSize: a,
  zoom: o
}) {
  const c = Fr((h) => h.isEditing), i = Fr((h) => h.editingItemId), l = Fr((h) => h.stopEditing), u = Pt((h) => h.selectedItemIds), d = Yt((h) => h.items);
  s.useEffect(() => {
    c && i && !u.includes(i) && l();
  }, [c, i, u, l]);
  const f = s.useMemo(
    () => i ? d.find((h) => h.id === i) : null,
    [i, d]
  ), m = s.useMemo(() => t ? { containerRect: t, playerSize: n, projectSize: a, zoom: o } : null, [t, n, a, o]), b = s.useMemo(() => {
    if (!f) return null;
    const h = { width: a.width, height: a.height }, x = Yr(f, h, Er(f));
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
  return !c || !m || !b ? null : /* @__PURE__ */ r.jsx(
    Lp,
    {
      coordParams: m,
      playerSize: n,
      itemTransform: b
    }
  );
});
function Jn(e) {
  return e && (e.type === "video" || e.type === "image") && e.sourceWidth && e.sourceHeight ? e.sourceWidth / e.sourceHeight : 16 / 9;
}
function Ou(e, t, n) {
  let a = e, o = e / n;
  return o > t && (o = t, a = t * n), {
    mediaWidth: Math.max(a, 1),
    mediaHeight: Math.max(o, 1)
  };
}
function _u(e, t, n, a) {
  return e ? e.type === "video" ? a.renderVideo(e, t ?? 0) : e.type === "image" ? a.renderImage(e) : a.renderPlaceholder(e.type, n ?? e.type) : a.renderPlaceholder("gap", n ?? "GAP");
}
const Hp = {
  image: "#22c55e",
  text: "#f59e0b",
  shape: "#8b5cf6",
  adjustment: "#6b7280",
  composition: "#3b82f6",
  audio: "#ec4899",
  gap: "#111827"
}, Up = 56, Ic = 8, Lu = 280, Bu = 158, Gp = 2, Vp = 60, Tc = 1 / 60;
let Wp = 0, zp = 0, xo = null;
function $p() {
  return xo || (xo = new Ul()), xo;
}
function Hu(e, t) {
  const [n, a] = s.useState(null), o = Hl(), c = s.useRef(null);
  return s.useEffect(() => {
    let i = !1;
    const l = `${e ?? "none"}:${t ? "proxy" : "source"}`;
    if (c.current !== l && (c.current = l, a(null)), !e)
      return () => {
        i = !0;
      };
    if (t) {
      const u = Jo(e);
      if (u)
        return a(u), () => {
          i = !0;
        };
    }
    return pn(e).then((u) => {
      i || a(u || null);
    }).catch(() => {
      i || a(null);
    }), () => {
      i = !0;
    };
  }, [e, t, o]), n;
}
function vs({ leftPanel: e, rightPanel: t }) {
  const n = s.useRef(null), [a, o] = s.useState({ width: 0, height: 0 });
  s.useEffect(() => {
    const f = n.current;
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
  const c = Math.max((a.width - Ic) / 2, 1), i = a.height - Up, l = c / Jn(e.item), u = c / Jn(t.item), d = Math.max(1, Math.min(Math.max(l, u), i));
  return /* @__PURE__ */ r.jsxs("div", { ref: n, className: "absolute inset-0 z-30 bg-black flex items-center", style: { gap: Ic }, children: [
    /* @__PURE__ */ r.jsx(
      Ec,
      {
        item: e.item,
        sourceTime: e.sourceTime,
        timecode: e.timecode,
        label: e.label,
        areaHeight: d,
        panelWidth: c,
        placeholderText: e.placeholderText
      }
    ),
    /* @__PURE__ */ r.jsx(
      Ec,
      {
        item: t.item,
        sourceTime: t.sourceTime,
        timecode: t.timecode,
        label: t.label,
        areaHeight: d,
        panelWidth: c,
        placeholderText: t.placeholderText
      }
    )
  ] });
}
function Ec({
  item: e,
  sourceTime: t,
  timecode: n,
  label: a,
  areaHeight: o,
  panelWidth: c,
  placeholderText: i
}) {
  const l = Jn(e), { mediaWidth: u, mediaHeight: d } = Ou(c, o, l);
  return /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ r.jsx("span", { className: "text-base font-semibold tracking-widest text-white/80 uppercase pb-1", children: a }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "flex items-center justify-center shrink-0 bg-black",
        style: { width: c, height: o },
        children: /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "overflow-hidden border border-white/10",
            style: { width: u, height: d },
            children: _u(e, t, i, {
              renderVideo: (f, m) => /* @__PURE__ */ r.jsx(ii, { item: f, sourceTime: m }),
              renderImage: (f) => /* @__PURE__ */ r.jsx(ci, { item: f }),
              renderPlaceholder: (f, m) => /* @__PURE__ */ r.jsx(li, { type: f, text: m })
            })
          }
        )
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "text-lg font-mono text-white/90 tabular-nums pt-1", children: n })
  ] });
}
function Kp({ item: e, sourceTime: t }) {
  const [n, a] = s.useState(!1);
  s.useEffect(() => {
    a(!1);
  }, [e.id, e.mediaId]);
  const o = s.useCallback(() => {
    a((c) => c || !0);
  }, []);
  return n ? /* @__PURE__ */ r.jsx(Xp, { item: e, sourceTime: t }) : /* @__PURE__ */ r.jsx(
    qp,
    {
      item: e,
      sourceTime: t,
      onDecodeFailure: o
    }
  );
}
function Yp(e) {
  return Math.round(e / Tc) * Tc;
}
function qp({
  item: e,
  sourceTime: t,
  onDecodeFailure: n
}) {
  const a = s.useRef(null), o = s.useRef($p()), c = s.useRef(`edit-preview-strict-${++zp}`), i = s.useRef(null), l = s.useRef(!0), u = s.useRef(!1), d = s.useRef(!1), f = s.useRef(null), m = s.useRef(0), b = s.useRef(Math.max(0, t)), h = re((O) => O.useProxy), x = Hu(e.mediaId, h), v = s.useRef(null), S = `${e.id}:${c.current}`, y = s.useRef(/* @__PURE__ */ new Map()), w = s.useRef([]);
  s.useEffect(() => (l.current = !0, () => {
    l.current = !1;
    for (const O of y.current.values())
      O.close();
    y.current.clear();
  }), []);
  const k = s.useCallback(async (O) => {
    const L = i.current, I = a.current;
    if (!L || !I) return !1;
    let N = v.current;
    if (!N) {
      if (N = I.getContext("2d"), !N) return !1;
      v.current = N;
    }
    const { width: P, height: T } = L.getDimensions(), j = Math.max(1, Math.round(P || Lu)), E = Math.max(1, Math.round(T || Bu));
    (I.width !== j || I.height !== E) && (I.width = j, I.height = E);
    const A = Yp(O), z = y.current, M = w.current, q = z.get(A);
    if (q) {
      N.drawImage(q, 0, 0, I.width, I.height);
      const X = M.indexOf(A);
      return X !== -1 && (M.splice(X, 1), M.push(A)), !0;
    }
    if (!await L.drawFrame(N, Math.max(0, O), 0, 0, I.width, I.height)) return !1;
    try {
      const X = await createImageBitmap(I);
      for (z.set(A, X), M.push(A); M.length > Vp; ) {
        const D = M.shift(), W = z.get(D);
        W && (W.close(), z.delete(D));
      }
    } catch {
    }
    return !0;
  }, []), R = s.useCallback(() => {
    if (d.current) return;
    d.current = !0, (async () => {
      try {
        for (; u.current && f.current !== null && l.current; ) {
          const L = f.current;
          if (f.current = null, await k(L).catch(() => !1)) {
            m.current = 0;
            continue;
          }
          if ((i.current?.getLastFailureKind() ?? "decode-error") === "decode-error" && (m.current += 1, m.current >= Gp)) {
            n();
            return;
          }
        }
      } finally {
        d.current = !1, u.current && f.current !== null && l.current && queueMicrotask(() => {
          l.current && R();
        });
      }
    })();
  }, [k, n]);
  return s.useEffect(() => {
    u.current = !1, i.current = null, f.current = null, m.current = 0, v.current = null;
    for (const N of y.current.values())
      N.close();
    if (y.current.clear(), w.current.length = 0, !x) return;
    const O = o.current, L = O.getOrCreateItemExtractor(S, x);
    i.current = L;
    let I = !1;
    return L.init().then((N) => {
      if (!(I || !l.current)) {
        if (!N) {
          n();
          return;
        }
        u.current = !0, f.current = b.current, R();
      }
    }).catch(() => {
      I || !l.current || n();
    }), () => {
      I = !0, u.current = !1, i.current = null, f.current = null, O.releaseItem(S);
    };
  }, [x, S, n, R]), s.useEffect(() => {
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
function Xp({ item: e, sourceTime: t }) {
  const n = s.useRef(null), a = s.useRef(ga()), o = s.useRef(`edit-preview-${++Wp}`), c = s.useRef(null), i = re((x) => x.useProxy), l = Hu(e.mediaId, i), u = s.useRef(null), d = s.useRef(!1), f = s.useRef(null), m = s.useRef(0), b = s.useCallback(() => {
    const x = c.current, v = n.current;
    if (!x || !v || x.readyState < 2) return;
    let S = u.current;
    if (!S) {
      if (S = v.getContext("2d"), !S) return;
      u.current = S;
    }
    (v.width !== x.videoWidth || v.height !== x.videoHeight) && (v.width = x.videoWidth || Lu, v.height = x.videoHeight || Bu), S.drawImage(x, 0, 0, v.width, v.height);
  }, []), h = s.useCallback((x) => {
    const v = c.current;
    if (!v) return;
    const S = 1e-3;
    if (d.current) {
      f.current = x;
      return;
    }
    if (Math.abs(v.currentTime - x) < S) {
      b();
      return;
    }
    d.current = !0, v.currentTime = x;
  }, [b]);
  return s.useEffect(() => {
    if (!l) return;
    const x = a.current, v = o.current;
    d.current = !1, f.current = null, x.preloadSource(l).catch(() => {
    });
    const S = x.acquireForClip(v, l);
    if (!S) return;
    S.preload = "auto", S.muted = !0, S.playsInline = !0, c.current = S;
    const y = () => {
      if (d.current = !1, b(), f.current !== null) {
        const k = f.current;
        f.current = null, h(k);
      }
    }, w = () => {
      Math.abs(S.currentTime - m.current) < 1e-3 && b();
    };
    return S.addEventListener("seeked", y), S.addEventListener("loadeddata", w), () => {
      S.removeEventListener("seeked", y), S.removeEventListener("loadeddata", w), S.pause(), c.current = null, d.current = !1, f.current = null, x.releaseClip(v);
    };
  }, [l, b, h]), s.useEffect(() => {
    if (!c.current || !l) return;
    const v = Math.max(0, t);
    m.current = v, h(v);
  }, [t, l, h]), /* @__PURE__ */ r.jsx(
    "canvas",
    {
      ref: n,
      className: "w-full h-full object-contain",
      style: { imageRendering: "auto" }
    }
  );
}
const Zp = (e, t) => e.sourceTime === t.sourceTime && e.item.id === t.item.id && e.item.mediaId === t.item.mediaId, ii = s.memo(Kp, Zp);
function Jp({ item: e }) {
  const t = s.useRef(null), [n, a] = s.useState(null);
  return s.useEffect(() => {
    let o = !1;
    if (e.mediaId)
      return pn(e.mediaId).then((c) => {
        !o && c && a(c);
      }), () => {
        o = !0;
      };
  }, [e.mediaId]), s.useEffect(() => {
    if (!n) return;
    const o = t.current;
    if (!o) return;
    const c = new Image();
    return c.onload = () => {
      o.width = c.naturalWidth || 280, o.height = c.naturalHeight || 158;
      const i = o.getContext("2d");
      i && i.drawImage(c, 0, 0, o.width, o.height);
    }, c.src = n, () => {
      c.onload = null;
    };
  }, [n]), /* @__PURE__ */ r.jsx(
    "canvas",
    {
      ref: t,
      className: "w-full h-full object-contain"
    }
  );
}
const Qp = (e, t) => e.item.id === t.item.id && e.item.mediaId === t.item.mediaId, ci = s.memo(Jp, Qp);
function li({ type: e, text: t }) {
  const n = Hp[e] ?? "#6b7280";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "w-full h-full flex items-center justify-center",
      style: { backgroundColor: n },
      children: /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium text-white/90 uppercase tracking-wide", children: t })
    }
  );
}
function br(e, t, n) {
  const a = e.sourceFps ?? n, o = e.speed ?? 1, c = e.sourceStart ?? 0, i = Gd(
    c,
    a,
    t,
    o,
    n,
    0
  ), l = Math.max(0, Math.round(i * a));
  return {
    sourceTime: i,
    sourceFrame: l,
    sourceFps: a,
    timecode: Gl(l, a)
  };
}
function eg({ fps: e }) {
  const t = xs((S) => S.trimmedItemId), n = xs((S) => S.neighborItemId), a = xs((S) => S.handle), o = xs((S) => S.neighborDelta), c = be((S) => S.items), i = s.useMemo(() => new Map(c.map((S) => [S.id, S])), [c]);
  if (!t || !n || !a) return null;
  const l = i.get(t), u = i.get(n);
  if (!l || !u) return null;
  const d = a === "end" ? l : u, f = a === "end" ? u : l, m = a === "end" ? d.from + d.durationInFrames + o : f.from + o, b = Math.max(0, m - d.from - 1), h = Math.max(0, m - f.from), x = br(d, b, e), v = br(f, h, e);
  return /* @__PURE__ */ r.jsx(
    vs,
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
function tg(e, t) {
  if (t.length === 0) return null;
  const n = e.from + e.durationInFrames;
  let a = null, o = Number.POSITIVE_INFINITY;
  for (const c of t) {
    const i = Math.abs(c.from - n);
    (i < o || i === o && a && c.from < a.from) && (a = c, o = i);
  }
  return a;
}
function rg(e, t) {
  let n = null, a = -1 / 0;
  for (const o of t) {
    if (o.id === e.id) continue;
    const c = o.from + o.durationInFrames;
    c <= e.from && c > a && (n = o, a = c);
  }
  return n;
}
function ng({ fps: e }) {
  const t = Cn((k) => k.trimmedItemId), n = Cn((k) => k.handle), a = Cn((k) => k.trackId), o = Cn((k) => k.downstreamItemIds), c = Cn((k) => k.delta), i = Cn((k) => k.trimDelta), l = be((k) => k.items), u = s.useMemo(() => new Map(l.map((k) => [k.id, k])), [l]), d = t ? u.get(t) ?? null : null, f = s.useMemo(
    () => l.filter((k) => o.has(k.id)),
    [l, o]
  ), m = s.useMemo(
    () => d && n === "end" ? tg(d, f) : null,
    [d, n, f]
  ), b = s.useMemo(
    () => a ? l.filter((k) => k.trackId === a) : [],
    [l, a]
  ), h = s.useMemo(
    () => d && n === "start" ? rg(d, b) : null,
    [d, n, b]
  );
  if (!d || !n) return null;
  if (n === "end") {
    const k = d.from + d.durationInFrames + c, R = Math.max(0, k - d.from - 1), O = br(d, R, e), L = k, I = m ? m.from + c : 1 / 0;
    if (!m || I > L)
      return /* @__PURE__ */ r.jsx(
        vs,
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
    const P = br(m, 0, e);
    return /* @__PURE__ */ r.jsx(
      vs,
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
  const x = br(d, i, e), v = h ? h.from + h.durationInFrames : -1 / 0;
  if (!h || v < d.from)
    return /* @__PURE__ */ r.jsx(
      vs,
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
  const y = Math.max(0, h.durationInFrames - 1), w = br(h, y, e);
  return /* @__PURE__ */ r.jsx(
    vs,
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
const sg = 56, Fc = 8, ag = 0.22;
function Uu({
  leftPanel: e,
  rightPanel: t,
  topLeftCorner: n,
  topRightCorner: a
}) {
  const o = s.useRef(null), [c, i] = s.useState({ width: 0, height: 0 });
  if (s.useEffect(() => {
    const x = o.current;
    if (!x) return;
    const v = new ResizeObserver(([S]) => {
      if (!S) return;
      const { width: y, height: w } = S.contentRect;
      i(
        (k) => k.width === y && k.height === w ? k : { width: y, height: w }
      );
    });
    return v.observe(x), () => v.disconnect();
  }, []), c.width <= 0 || c.height <= 0)
    return /* @__PURE__ */ r.jsx("div", { ref: o, className: "absolute inset-0 z-30 bg-black" });
  const l = Math.max((c.width - Fc) / 2, 1), u = c.height - sg, d = l / Jn(e.item), f = l / Jn(t.item), m = Math.max(
    1,
    Math.min(Math.max(d, f), u)
  ), b = Math.max(l * ag, 1), h = Math.max(b / (16 / 9), 1);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: o,
      className: "absolute inset-0 z-30 bg-black flex items-center",
      style: { gap: Fc },
      children: [
        n?.item && /* @__PURE__ */ r.jsx(
          Nc,
          {
            item: n.item,
            sourceTime: n.sourceTime,
            width: b,
            height: h,
            position: "top-left"
          }
        ),
        a?.item && /* @__PURE__ */ r.jsx(
          Nc,
          {
            item: a.item,
            sourceTime: a.sourceTime,
            width: b,
            height: h,
            position: "top-right"
          }
        ),
        /* @__PURE__ */ r.jsx(jc, { data: e, areaHeight: m, panelWidth: l }),
        /* @__PURE__ */ r.jsx(jc, { data: t, areaHeight: m, panelWidth: l })
      ]
    }
  );
}
function jc({ data: e, areaHeight: t, panelWidth: n }) {
  const a = Jn(e.item), { mediaWidth: o, mediaHeight: c } = Ou(n, t, a);
  return /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ r.jsx("span", { className: "text-base font-semibold tracking-widest text-white/80 uppercase pb-1", children: e.label }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "flex items-center justify-center shrink-0 bg-black",
        style: { width: n, height: t },
        children: /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "overflow-hidden border border-white/10",
            style: { width: o, height: c },
            children: _u(e.item, e.sourceTime, e.placeholderText, {
              renderVideo: (i, l) => /* @__PURE__ */ r.jsx(ii, { item: i, sourceTime: l }),
              renderImage: (i) => /* @__PURE__ */ r.jsx(ci, { item: i }),
              renderPlaceholder: (i, l) => /* @__PURE__ */ r.jsx(li, { type: i, text: l })
            })
          }
        )
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "text-lg font-mono text-white/90 tabular-nums pt-1", children: e.timecode })
  ] });
}
function Nc({ item: e, sourceTime: t, width: n, height: a, position: o }) {
  const c = e.type === "video", i = e.type === "image", l = o === "top-left" ? "left-2 top-2" : "right-2 top-2";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `absolute ${l} z-40 overflow-hidden border border-white/20 rounded-sm shadow-lg`,
      style: { width: n, height: a },
      children: c ? /* @__PURE__ */ r.jsx(ii, { item: e, sourceTime: t ?? 0 }) : i ? /* @__PURE__ */ r.jsx(ci, { item: e }) : /* @__PURE__ */ r.jsx(li, { type: e.type, text: e.type })
    }
  );
}
function og({ fps: e }) {
  const t = Do((b) => b.itemId), n = Do((b) => b.slipDelta), a = be((b) => b.items), o = s.useMemo(() => new Map(a.map((b) => [b.id, b])), [a]), c = t ? o.get(t) ?? null : null;
  if (!c) return null;
  const i = Math.max(0, c.durationInFrames - 1), l = br(c, 0, e), u = br(c, i, e), d = {
    ...c,
    sourceStart: (c.sourceStart ?? 0) + n,
    sourceEnd: c.sourceEnd !== void 0 ? c.sourceEnd + n : void 0
  }, f = br(d, 0, e), m = br(d, i, e);
  return /* @__PURE__ */ r.jsx(
    Uu,
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
        item: c,
        sourceTime: l.sourceTime,
        timecode: l.timecode,
        label: ""
      },
      topRightCorner: {
        item: c,
        sourceTime: u.sourceTime,
        timecode: u.timecode,
        label: ""
      }
    }
  );
}
function ig({ fps: e }) {
  const t = bs((x) => x.itemId), n = bs((x) => x.leftNeighborId), a = bs((x) => x.rightNeighborId), o = bs((x) => x.slideDelta), c = be((x) => x.items), i = s.useMemo(() => new Map(c.map((x) => [x.id, x])), [c]);
  if (!t || !i.get(t)) return null;
  const u = n ? i.get(n) ?? null : null, d = a ? i.get(a) ?? null : null, f = u ? (() => {
    const x = Math.max(0, u.durationInFrames - 1), v = br(u, x, e);
    return {
      item: u,
      sourceTime: v.sourceTime,
      timecode: v.timecode,
      label: ""
    };
  })() : void 0, m = d ? (() => {
    const x = br(d, 0, e);
    return {
      item: d,
      sourceTime: x.sourceTime,
      timecode: x.timecode,
      label: ""
    };
  })() : void 0, b = u ? (() => {
    const x = Math.max(0, u.durationInFrames + o - 1), v = br(u, x, e);
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
    const v = br(d, o, e);
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
    Uu,
    {
      leftPanel: b,
      rightPanel: h,
      topLeftCorner: f,
      topRightCorner: m
    }
  );
}
function cg({
  isGizmoInteracting: e,
  isPlaying: t,
  currentFrame: n,
  previewFrame: a,
  renderedFrame: o
}) {
  if (t) return !1;
  const c = e ? n : a;
  return c === null ? !1 : c === o;
}
function lg(e, t = {}) {
  const n = Math.max(1, t.forwardSteps ?? 4), a = Math.max(1, t.backwardSteps ?? 8), o = Math.max(0, t.oppositeSteps ?? 2), c = Math.max(1, t.neutralRadius ?? 2);
  if (e === 0) {
    const u = [];
    for (let d = 1; d <= c; d++)
      u.push(-d, d);
    return u;
  }
  const i = e < 0 ? a : n, l = [];
  for (let u = 1; u <= i; u++)
    l.push(u * e);
  for (let u = 1; u <= o; u++)
    l.push(-(u * e));
  return l;
}
function ug(e, t, n, a = 0) {
  const o = Math.max(0, n), c = Math.max(0, a);
  let i = null, l = !1;
  for (const u of e) {
    const d = Math.max(0, u.cooldownFrames ?? c);
    if (t >= u.startFrame && t < u.endFrame)
      return {
        hasActiveTransition: !0,
        shouldHoldOverlay: !0,
        shouldPrewarm: !0,
        nextTransitionStartFrame: u.startFrame
      };
    if (t >= u.endFrame && t < u.endFrame + d && (l = !0), t < u.startFrame) {
      i = u.startFrame;
      break;
    }
  }
  return {
    hasActiveTransition: !1,
    shouldHoldOverlay: l,
    shouldPrewarm: i !== null && i - t <= o,
    nextTransitionStartFrame: i
  };
}
function Vn(e) {
  return e.isPlaying ? "playing" : e.isGizmoInteracting ? "gizmo_dragging" : e.previewFrame !== null ? "scrubbing" : "paused";
}
function ma(e, t) {
  return e === "scrubbing" && t.previewFrame !== null ? t.previewFrame : t.currentFrame;
}
function dg(e) {
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
  const n = Math.floor(t / 2);
  return {
    startFrame: e.anchorFrame - n,
    endFrame: e.anchorFrame + (t - n)
  };
}
const fg = 1.5;
function mg(e, t, n = fg) {
  if (e <= 0) return !1;
  const a = Math.max(8, Math.round(t * n));
  return e <= a;
}
function hg(e) {
  return e.interactionMode === "scrubbing" && e.prevInteractionMode !== "scrubbing" ? "scrub_enter" : e.interactionMode !== "playing" && e.interactionMode !== "scrubbing" && e.currentFrame !== e.prevCurrentFrame && mg(
    Math.abs(e.currentFrame - e.prevCurrentFrame),
    e.fps
  ) ? "paused_short_seek" : "none";
}
function pg({
  interactionMode: e,
  previewFrameChanged: t
}) {
  return !!(e === "gizmo_dragging" || e === "scrubbing" && t);
}
function Ac(e) {
  const t = Vn({
    isPlaying: e.isPlaying,
    previewFrame: e.previewFrame,
    isGizmoInteracting: e.isGizmoInteracting
  }), n = ma(t, {
    currentFrame: e.currentFrame,
    previewFrame: e.previewFrame
  });
  return {
    mode: t,
    anchorFrame: n,
    currentFrame: e.currentFrame,
    previewFrame: e.previewFrame
  };
}
function Go(e) {
  const t = Ac(e.prev), n = Ac(e.next), a = n.currentFrame !== t.currentFrame, o = n.previewFrame !== t.previewFrame, c = typeof e.fps == "number" ? hg({
    interactionMode: n.mode,
    prevInteractionMode: t.mode,
    currentFrame: n.currentFrame,
    prevCurrentFrame: t.currentFrame,
    fps: e.fps
  }) : "none";
  return {
    prev: t,
    next: n,
    currentFrameChanged: a,
    previewFrameChanged: o,
    enteredPlaying: n.mode === "playing" && t.mode !== "playing",
    exitedPlaying: n.mode !== "playing" && t.mode === "playing",
    enteredScrubbing: n.mode === "scrubbing" && t.mode !== "scrubbing",
    exitedScrubbing: n.mode !== "scrubbing" && t.mode === "scrubbing",
    shouldSkipCurrentFrameSeek: pg({
      interactionMode: n.mode,
      previewFrameChanged: o
    }),
    preloadBurstTrigger: c
  };
}
function gg(e) {
  const {
    mode: t,
    currentPoolSourceCount: n,
    currentPoolElementCount: a,
    maxSources: o,
    minSources: c,
    hardCapSources: i,
    hardCapElements: l
  } = e, u = t === "playing" ? o : t === "scrubbing" ? Math.max(c, o - 4) : Math.max(c, o - 8), d = Math.max(0, n - i), f = Math.max(0, a - l), m = Math.ceil(f / 2), b = u - d - m;
  return Math.max(c, Math.min(o, b));
}
function xg(e, t, n) {
  return e.length < n ? [...e, t] : [...e.slice(e.length - n + 1), t];
}
const bg = {
  emaAlpha: 0.2,
  degradeThresholdRatio: 1.2,
  recoverThresholdRatio: 0.85,
  degradeSamples: 10,
  recoverSamples: 36,
  changeCooldownMs: 1200
};
function vg(e) {
  return e === 1 ? 0.5 : e === 0.5 ? 0.33 : 0.25;
}
function yg(e) {
  return e === 0.25 ? 0.33 : e === 0.33 ? 0.5 : 1;
}
function Dc(e = 1) {
  return {
    qualityCap: e,
    frameTimeEmaMs: 0,
    overBudgetSamples: 0,
    underBudgetSamples: 0,
    lastQualityChangeAtMs: 0
  };
}
function wg(e, t) {
  return e <= t ? e : t;
}
function Sg(e, t) {
  const n = Number.isFinite(e) && e > 0 ? e : 30, a = Number.isFinite(t) && t > 0 ? t : 1;
  return 1e3 / Math.max(1, n * a);
}
function kg({
  state: e,
  sampleMsPerFrame: t,
  frameBudgetMs: n,
  userQuality: a,
  nowMs: o,
  allowRecovery: c = !0,
  options: i
}) {
  const l = { ...bg, ...i }, u = Math.max(0, t), d = e.frameTimeEmaMs === 0 ? u : e.frameTimeEmaMs + (u - e.frameTimeEmaMs) * l.emaAlpha, f = n * l.degradeThresholdRatio, m = n * l.recoverThresholdRatio;
  let b = e.overBudgetSamples, h = e.underBudgetSamples;
  d > f ? (b += 1, h = 0) : d < m ? (h += 1, b = 0) : (b = 0, h = 0);
  let x = e.qualityCap, v = null, S = e.lastQualityChangeAtMs;
  const y = o - e.lastQualityChangeAtMs >= l.changeCooldownMs, w = wg(a, x);
  if (y && b >= l.degradeSamples && w > 0.25)
    x = vg(w), v = "degrade", S = o, b = 0, h = 0;
  else if (c && y && h >= l.recoverSamples && x < a) {
    const k = yg(x);
    x = k > a ? a : k, v = "recover", S = o, b = 0, h = 0;
  }
  return {
    state: {
      qualityCap: x,
      frameTimeEmaMs: d,
      overBudgetSamples: b,
      underBudgetSamples: h,
      lastQualityChangeAtMs: S
    },
    qualityChanged: v !== null,
    qualityChangeDirection: v
  };
}
function Cg(e, t) {
  if (!e.visible) return !1;
  for (const n of e.items) {
    if (n.type !== "text" || !(!!n.textShadow || (n.stroke?.width ?? 0) > 0)) continue;
    const c = !!t.get(n.id)?.properties.some(
      (l) => l.keyframes.length > 0
    ), i = (n.fadeIn ?? 0) > 0 || (n.fadeOut ?? 0) > 0;
    if (c || i)
      return !0;
  }
  return !1;
}
function Mg(e, t) {
  if (e.length === 0)
    return !1;
  const n = /* @__PURE__ */ new Map();
  for (const a of t)
    n.set(a.itemId, a);
  return e.some((a) => Cg(a, n));
}
function Gu(e, t, n, a) {
  return Number.isFinite(n) ? e.some(
    (o) => n >= o.from && n < o.from + o.durationInFrames && ((a?.get(o.id) ?? o.effects)?.some(
      (c) => c.enabled && c.effect.type === "gpu-effect"
    ) || o.blendMode && o.blendMode !== "normal")
  ) : !1;
}
function Rg(...e) {
  const [t, n] = s.useState(!1);
  return s.useEffect(() => {
    const a = () => {
      const u = Yt.getState().items, d = Ss.getState().transitions, f = re.getState(), m = f.previewFrame ?? f.currentFrame, b = Xe.getState().preview, h = b ? new Map(
        Object.entries(b).filter(([, x]) => Array.isArray(x.effects)).map(([x, v]) => [x, v.effects])
      ) : void 0;
      n((x) => {
        const v = Gu(
          u,
          d.length,
          m,
          h
        );
        return x === v ? x : v;
      });
    };
    a();
    const o = Yt.subscribe(a), c = Ss.subscribe(a), i = Xe.subscribe((u, d) => {
      u.preview !== d.preview && a();
    }), l = re.subscribe((u, d) => {
      u.currentFrame === d.currentFrame && u.previewFrame === d.previewFrame || a();
    });
    return () => {
      o(), c(), i(), l();
    };
  }, []), t;
}
const Oc = 5, Pg = 10, Ig = 6, Tg = 3, _c = 6, Eg = 1, Fg = 4, jg = 1, Ng = 24, Ag = 12, Dg = 3, Og = 180, _g = 0.5, Lg = 256, Bg = 96, Hg = 1, Ug = 2, Gg = 2, Vg = 6, Wg = 6, zg = !0, $g = 3, Kg = 2, Yg = 0, qg = 1, Xg = 24, Zg = 24, Lc = 2, Jg = 8, Bc = 16, Qg = 200, e0 = 20, Hc = 2, t0 = 8, r0 = 8, n0 = 3, s0 = 20, Uc = 24, a0 = 40, o0 = 4, Gc = 2500, i0 = 300, c0 = 400, l0 = 8e3, u0 = 6, d0 = 12, f0 = 8, m0 = 4, h0 = 120, p0 = 6;
function g0(e) {
  const t = [];
  for (const n of e) {
    t.push(
      `t:${n.id}:${n.order}:${n.visible ? 1 : 0}:${n.solo ? 1 : 0}:${n.muted ? 1 : 0}:${n.volume ?? 0}`
    );
    for (const a of n.items) {
      const o = "src" in a ? a.src ?? "" : "";
      t.push(
        `i:${a.id}:${a.type}:${a.from}:${a.durationInFrames}:${a.mediaId ?? ""}:${o}:${a.speed ?? 1}:${a.volume ?? 1}:${a.sourceStart ?? 0}:${a.sourceEnd ?? 0}`
      );
    }
  }
  return t.join("|");
}
function Vc(e) {
  return e === "scrubbing" ? Tg : e === "playing" ? Pg : Ig;
}
function x0(e) {
  return e === "scrubbing" ? m0 : e === "playing" ? d0 : f0;
}
function bo(e) {
  if (!e) return 0;
  const t = e.toLowerCase();
  return t.includes("ec-3") || t.includes("eac3") || t.includes("ac-3") || t.includes("ac3") ? 5 : t.includes("avc") || t.includes("h264") ? 2 : t.includes("hevc") || t.includes("h265") ? 3 : 1;
}
function b0(e) {
  if (!e) return 1;
  let t = 1;
  if (e.mimeType.startsWith("video/")) {
    const n = Math.max(0, e.width) * Math.max(0, e.height);
    n >= 3840 * 2160 ? t += 6 : n >= 2560 * 1440 ? t += 4 : n >= 1920 * 1080 ? t += 3 : n >= 1280 * 720 && (t += 2), t += bo(e.codec), t += bo(e.audioCodec);
  } else e.mimeType.startsWith("audio/") && (t += bo(e.audioCodec));
  return Math.max(1, t);
}
function Wc(e, t) {
  return t >= 10 ? Math.max(1, e - 5) : t >= 7 ? Math.max(1, e - 3) : t >= 4 ? Math.max(1, e - 1) : e;
}
function v0(e, t, n) {
  if (e.length === 0) return -1;
  let a = 0, o = e.length;
  for (; a < o; ) {
    const i = Math.floor((a + o) / 2);
    e[i].from < t ? a = i + 1 : o = i;
  }
  const c = a;
  if (n < 0) {
    let i = c;
    return i >= e.length ? i = e.length - 1 : e[i].from > t && i > 0 && (i -= 1), i;
  }
  return Math.max(0, c - 1);
}
function Vu(e, t) {
  return t > e ? 1 : t < e ? -1 : 0;
}
async function zc(e) {
  return new Promise((t, n) => {
    const a = new FileReader();
    a.onload = () => {
      typeof a.result == "string" ? t(a.result) : n(new Error("Invalid data URL result"));
    }, a.onerror = () => n(a.error ?? new Error("Failed to read blob")), a.readAsDataURL(e);
  });
}
const $c = Fa("useCustomPlayer");
function y0(e, t, n, a, o) {
  const c = re((y) => y.isPlaying), [i, l] = s.useState(!1), u = s.useRef(0), d = s.useRef(null), f = s.useRef(0), m = s.useRef(null), b = s.useRef(!1), h = s.useRef(c), x = s.useCallback(() => {
    const y = e.current?.getCurrentFrame();
    return Number.isFinite(y) ? Math.round(y) : null;
  }, [e]), v = s.useCallback((y) => {
    if (!e.current || d.current === y) return;
    const w = x();
    if (w !== null && w === y) {
      u.current = y, d.current = y;
      return;
    }
    b.current = !0;
    try {
      o?.(y), e.current.seekTo(y), u.current = y, d.current = y;
    } catch (k) {
      $c.error("Failed to seek Player:", k);
    }
    requestAnimationFrame(() => {
      b.current = !1;
    });
  }, [e, x, o]);
  s.useEffect(() => {
    e.current && !i && l(!0);
    const y = setInterval(() => {
      e.current && !i && (l(!0), clearInterval(y));
    }, 50), w = setTimeout(() => clearInterval(y), 1e3);
    return () => {
      clearInterval(y), clearTimeout(w);
    };
  }, [e, i]), s.useEffect(() => {
    if (!e.current) return;
    const y = h.current;
    h.current = c;
    try {
      if (c && !y) {
        const { currentFrame: w, setPreviewFrame: k } = re.getState(), R = x();
        if ((R === null || Math.abs(R - w) > 1) && (b.current = !0, o?.(w), e.current.seekTo(w), u.current = w, d.current = w), k(null), !re.getState().isPlaying) {
          b.current = !1;
          return;
        }
        e.current?.play(), b.current = !1;
        return;
      } else !c && y && e.current.pause();
    } catch (w) {
      $c.error("Failed to control playback:", w);
    }
  }, [c, e, x, o]);
  const S = Is((y) => y.isTimelineLoading);
  return s.useEffect(() => {
    if (!i || !e.current || S) return;
    const y = re.getState().currentFrame, w = x();
    return u.current = y, d.current = y, w !== y && o?.(y), e.current.seekTo(y), re.subscribe((R, O) => {
      if (!e.current) return;
      const L = Go({
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
  }, [i, S, e, x, v, a, o]), s.useEffect(() => {
    if (!(!i || !e.current))
      return re.subscribe((y, w) => {
        if (!e.current) return;
        const k = Go({
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
        if (!k.previewFrameChanged) return;
        const R = k.next.mode;
        if (R === "playing" || R === "gizmo_dragging") {
          f.current = 0, m.current = null;
          return;
        }
        if (R === "scrubbing" && t?.current) {
          f.current = 0, m.current = null;
          return;
        }
        if (!n?.current && R === "scrubbing" && y.previewFrame !== null && y.currentFrame === y.previewFrame && y.currentFrameEpoch === y.previewFrameEpoch) {
          f.current = 0, m.current = null;
          return;
        }
        const L = k.next.anchorFrame;
        if ((R === "scrubbing" ? Vu(k.prev.anchorFrame, k.next.anchorFrame) : 0) < 0) {
          const N = performance.now(), P = Math.floor(
            L / Hc
          ) * Hc, T = m.current, j = N - f.current < e0, E = T === null ? Number.POSITIVE_INFINITY : Math.abs(P - T);
          if (j && E < t0)
            return;
          f.current = N, m.current = P, v(P);
          return;
        }
        f.current = 0, m.current = null, v(L);
      });
  }, [i, e, v, t, n, a]), { ignorePlayerUpdatesRef: b };
}
const Kc = /* @__PURE__ */ new WeakMap();
function Qn(e) {
  if (e === null)
    return "null";
  if (typeof e !== "object")
    return JSON.stringify(e);
  const n = e, a = Kc.get(n);
  if (a !== void 0)
    return a;
  let o;
  if (Array.isArray(e))
    o = `[${e.map((c) => Qn(c)).join(",")}]`;
  else {
    const c = e;
    o = `{${Object.keys(c).filter((l) => c[l] !== void 0).sort().map((l) => `${JSON.stringify(l)}:${Qn(c[l])}`).join(",")}}`;
  }
  return Kc.set(n, o), o;
}
function Wu(e, t) {
  if (e === t)
    return !0;
  const n = e ?? [], a = t ?? [];
  if (n.length !== a.length)
    return !1;
  const o = new Map(a.map((c) => [c.itemId, c]));
  if (o.size !== a.length)
    return !1;
  for (const c of n) {
    const i = o.get(c.itemId);
    if (!i)
      return !1;
    if (c !== i && Qn(c) !== Qn(i))
      return !1;
  }
  return !0;
}
function w0(e, t) {
  const n = es(e), a = es(t);
  if (n.size !== a.size)
    return !1;
  for (const [o, c] of n)
    if (a.get(o) !== c)
      return !1;
  return !0;
}
function es(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e)
    for (const a of n.items)
      t.set(a.id, a);
  return t;
}
function Yc(e) {
  return !e || e.length === 0 ? /* @__PURE__ */ new Map() : new Map(e.map((t) => [t.itemId, t]));
}
function Vo(e) {
  if (!e) return null;
  const t = Math.trunc(e.from), n = Math.trunc(e.from + e.durationInFrames);
  return !Number.isFinite(t) || !Number.isFinite(n) || n <= t ? null : { startFrame: t, endFrame: n };
}
function S0(e) {
  return e.flatMap((t) => t.items).filter((t) => t.type === "scene").map(Vo).filter((t) => t !== null);
}
function k0({
  previousTracks: e,
  nextTracks: t,
  previousKeyframes: n,
  nextKeyframes: a
}) {
  if (e === t && n === a)
    return [];
  const o = es(e), c = es(t), i = Yc(n), l = Yc(a), u = /* @__PURE__ */ new Set();
  for (const [f, m] of o)
    c.get(f) !== m && u.add(f);
  for (const [f, m] of c)
    o.get(f) !== m && u.add(f);
  for (const [f, m] of i)
    l.get(f) !== m && u.add(f);
  for (const [f, m] of l)
    i.get(f) !== m && u.add(f);
  const d = [];
  for (const f of u) {
    const m = Vo(o.get(f));
    m && d.push(m);
    const b = Vo(c.get(f));
    b && d.push(b);
  }
  return Vd(d);
}
function C0(e) {
  const t = { ...e };
  for (const n of ["effects", "waveformData"]) {
    const a = t[n];
    Array.isArray(a) && a.length === 0 && delete t[n];
  }
  return t;
}
function qc(e) {
  const { text: t, label: n, ...a } = e;
  return C0(a);
}
function M0(e, t) {
  return Qn(qc(e)) === Qn(qc(t));
}
function R0(e, t, n, a) {
  if (e === t && n === a)
    return { ok: !1, reason: "same_refs" };
  const o = es(e), c = es(t);
  if (!Wu(n, a))
    return { ok: !1, reason: "keyframes_mismatch" };
  const i = /* @__PURE__ */ new Set();
  for (const [l, u] of o)
    c.get(l) !== u && i.add(l);
  for (const [l, u] of c)
    o.get(l) !== u && i.add(l);
  if (i.size === 0)
    return { ok: !1, reason: "no_item_ref_change" };
  for (const l of i) {
    const u = o.get(l), d = c.get(l);
    if (!u || !d)
      return { ok: !1, reason: "item_added_or_removed" };
    if (u.type !== "text" || d.type !== "text")
      return { ok: !1, reason: "non_text_item" };
    if (!M0(u, d))
      return { ok: !1, reason: "text_body_mismatch_other_fields" };
  }
  return { ok: !0 };
}
function P0(e, t, n, a) {
  return R0(
    e,
    t,
    n,
    a
  );
}
const Ar = Fa("VideoPreview");
function I0(e, t) {
  return Math.abs(e.left - t.left) < 0.5 && Math.abs(e.top - t.top) < 0.5 && Math.abs(e.width - t.width) < 0.5 && Math.abs(e.height - t.height) < 0.5;
}
const T0 = s.memo(function({
  project: t,
  containerSize: n,
  suspendOverlay: a = !1
}) {
  const o = s.useRef(null), c = s.useRef(null), i = s.useRef(null), l = s.useRef(null), u = s.useRef(null), d = s.useRef(!1), f = s.useRef(!1), m = s.useRef(null), b = s.useRef(null), h = s.useRef(null), x = s.useRef(null), v = s.useRef(null), S = s.useRef(null), y = s.useRef(!1), w = s.useRef(0), k = s.useRef(null), R = s.useRef(null), O = s.useRef(null), L = s.useRef(null), I = s.useRef(!1), N = s.useRef([]), P = s.useRef(/* @__PURE__ */ new Set()), T = s.useRef([]), j = s.useRef(/* @__PURE__ */ new Set()), E = s.useRef(/* @__PURE__ */ new Set()), A = s.useRef([]), z = s.useRef(/* @__PURE__ */ new Map()), M = s.useRef(null), q = s.useRef(null), V = s.useRef(null), X = s.useRef(null), D = s.useRef(null), W = s.useRef(null), Y = s.useRef(/* @__PURE__ */ new Map()), pe = s.useRef(/* @__PURE__ */ new Map()), C = s.useRef(/* @__PURE__ */ new Map()), B = s.useRef(/* @__PURE__ */ new Map()), U = s.useRef(null), J = s.useRef(null), ne = s.useRef(null), me = s.useRef(null), xe = s.useRef(null), we = s.useRef(0), Re = s.useRef(!1), Be = s.useRef(!1), Fe = s.useRef(0), De = s.useRef(0), Qe = s.useRef(0), je = s.useRef(null), ee = s.useRef(null), Ge = s.useRef(0), H = s.useRef(null), ue = s.useRef(() => {
  }), Ce = s.useRef(!0), [Ve, Me] = s.useState(!1), [_, he] = s.useState(!1), et = s.useRef(!1), Ye = s.useRef(!1), $e = s.useRef("player"), ct = s.useRef(0), pt = s.useRef([]);
  s.useRef(null), s.useRef({
    samples: 0,
    totalMs: 0,
    lastMs: 0,
    timeouts: 0
  });
  const [Vt, yr] = s.useState(!1), [Bt, Lr] = s.useState(null), hr = s.useRef(null), wr = s.useRef({
    sessionCount: 0,
    lastPrepareMs: 0,
    lastReadyLeadMs: 0,
    lastEntryMisses: 0,
    lastSessionDurationMs: 0
  }), Br = s.useRef(null), Sr = s.useRef(null), At = s.useCallback((p, F = {}) => {
  }, []), [Ue, It] = s.useState(null), zt = s.useCallback((p) => {
    c.current = p;
  }, []), Pe = Is((p) => p.fps), tr = Yt((p) => p.tracks), qt = hn((p) => p.keyframes), Ht = Yt((p) => p.items), or = Yt((p) => p.itemsByTrackId), Pr = us((p) => p.mediaDependencyVersion), Ut = Ss((p) => p.transitions), Tn = Qt((p) => p.mediaById), qr = xs(
    (p) => !!(p.trimmedItemId && p.neighborItemId && p.handle)
  ), tn = Cn((p) => !!(p.trimmedItemId && p.handle)), xn = Do((p) => !!p.itemId), jr = bs((p) => !!p.itemId), En = Xe((p) => p.activeGizmo?.itemId ?? null), rn = Xe((p) => p.activeGizmo !== null), js = ze((p) => p.isEditing), Ns = re((p) => p.isPlaying), La = Rg(u, c, x, d), Nr = re((p) => p.zoom), As = re((p) => p.useProxy), g = Qt((p) => {
    let F = 0;
    for (const $ of p.proxyStatus.values())
      $ === "ready" && F++;
    return F;
  }), G = s.useMemo(
    () => En ? Ht.find((p) => p.id === En)?.type ?? null : null,
    [En, Ht]
  ), te = s.useRef(rn);
  te.current = rn;
  const oe = s.useRef(!1), K = s.useRef(!1), Z = s.useRef(Dc(1)), ie = s.useRef(null), [Ie, Te] = s.useState(1), Ze = s.useCallback((p) => oe.current || K.current && p !== null, []), ot = s.useCallback((p) => {
  }, []), ht = s.useCallback((p) => {
  }, []), at = s.useCallback(() => {
    ee.current = null, Ge.current = 0, H.current !== null && (cancelAnimationFrame(H.current), H.current = null);
  }, []), st = s.useCallback(() => {
    at(), et.current = !1, Me(!1), f.current = !1;
  }, [at]), rt = s.useCallback(() => {
    Ye.current = !1, he(!1);
  }, []), it = s.useCallback((p) => {
    const F = ee.current;
    if (F === null) return !1;
    let $ = p ?? null;
    if ($ === null) {
      const ae = o.current?.getCurrentFrame();
      $ = Number.isFinite(ae) ? Math.round(ae) : null;
    }
    return $ !== F ? !1 : (st(), !0);
  }, [st]), ft = s.useCallback(() => {
    ee.current !== null && H.current === null && (H.current = requestAnimationFrame(() => {
      if (H.current = null, ee.current === null) return;
      const p = re.getState();
      if (p.previewFrame !== null) {
        at();
        return;
      }
      if (p.isPlaying || Ze(p.previewFrame)) {
        st();
        return;
      }
      if (!it()) {
        if (performance.now() - Ge.current >= Qg) {
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
  ]), vt = s.useCallback((p) => {
    ee.current = p, Ge.current = performance.now(), ft();
  }, [ft]), Ir = s.useCallback(() => {
    at(), Ye.current = !1, he(!1), et.current = !0, Me(!0), f.current = !0;
  }, [at]), Hr = s.useCallback(() => {
    at(), et.current = !1, Me(!1), Ye.current = !0, he(!0), f.current = !1;
  }, [at]), { ignorePlayerUpdatesRef: bn } = y0(
    o,
    f,
    K,
    te,
    ot
  );
  s.useEffect(() => {
    const p = re.getState();
    p.previewFrame !== null && (p.currentFrame !== p.previewFrame && p.setCurrentFrame(p.previewFrame), p.setPreviewFrame(null));
  }, []), s.useEffect(() => {
    if (te.current = rn, !rn) return;
    const p = re.getState();
    p.previewFrame !== null && (p.currentFrame !== p.previewFrame && p.setCurrentFrame(p.previewFrame), p.setPreviewFrame(null));
  }, [rn]), s.useEffect(() => {
    if (Ns) {
      ie.current = null;
      return;
    }
    ie.current = null, Z.current = Dc(1), Ie !== 1 && Te(1);
  }, [Ie, Ns]);
  const Ur = re((p) => p.setCaptureFrame), vn = re((p) => p.setCaptureFrameImageData), Xr = re((p) => p.setDisplayedFrame), [pr, Gr] = s.useState(/* @__PURE__ */ new Map()), pi = Hl(), [Tr, Ft] = s.useState(!1), [Ba, Ds] = s.useState(0), [rs, gi] = s.useState(0), Fn = s.useRef([]), jn = s.useRef(/* @__PURE__ */ new Set()), od = s.useRef(/* @__PURE__ */ new Map()), Ha = s.useRef(!1), nn = s.useRef(0), ns = s.useRef(0), ss = s.useRef(0), xi = s.useRef(null), Nn = s.useRef(/* @__PURE__ */ new Map()), An = s.useRef(/* @__PURE__ */ new Map()), sn = s.useRef(null), Ua = s.useRef(!1), nt = s.useRef({
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
  }), bi = s.useRef(-1), Ga = Ve || _;
  s.useEffect(() => {
    et.current = Ve, Ye.current = _;
    const p = Ve ? "fast_scrub_overlay" : _ ? "playback_transition_overlay" : "player", F = $e.current;
    F !== p && (ct.current += 1, pt.current = xg(
      pt.current,
      {
        ts: Date.now(),
        atFrame: re.getState().currentFrame,
        from: F,
        to: p
      },
      p0
    )), $e.current = p;
  }, [Ve, _]), s.useEffect(() => {
    Ga || Xr(null);
  }, [Ga, Xr]);
  const as = s.useCallback((p) => {
    const F = us.getState().mediaIds, $ = /* @__PURE__ */ new Set();
    for (const ae of F)
      p.has(ae) || $.add(ae);
    return jn.current = $, Fn.current = [...$], Fn.current;
  }, []), Os = s.useCallback((p) => {
    if (p.length === 0) return;
    const F = us.getState().mediaIds, $ = new Set(F), ae = jn.current;
    let se = !1;
    for (const Se of p)
      $.has(Se) && (ae.has(Se) || (ae.add(Se), se = !0));
    se && (Fn.current = [...ae]);
  }, []), _s = s.useCallback((p) => {
    if (p.length === 0) return;
    const F = jn.current;
    let $ = !1;
    for (const ae of p)
      F.delete(ae) && ($ = !0);
    $ && (Fn.current = [...F]);
  }, []), an = s.useCallback((p) => {
    if (p.length !== 0)
      for (const F of p)
        Nn.current.delete(F), An.current.delete(F);
  }, []), vi = s.useCallback((p) => {
    for (const F of Nn.current.keys())
      p.has(F) || Nn.current.delete(F);
    for (const F of An.current.keys())
      p.has(F) || An.current.delete(F);
  }, []), Ls = s.useCallback((p) => {
    if (p.length === 0) return null;
    const F = Date.now();
    let $ = null;
    for (const ae of p) {
      const se = (Nn.current.get(ae) ?? 0) + 1;
      Nn.current.set(ae, se);
      const Se = Math.min(se - 1, 6), Ae = Math.min(
        l0,
        c0 * Math.pow(2, Se)
      ), ke = F + Ae;
      An.current.set(ae, ke), ($ === null || ke < $) && ($ = ke);
    }
    return $;
  }, []), os = s.useCallback((p) => An.current.get(p) ?? 0, []), Zr = s.useCallback((p) => {
    if (sn.current && (clearTimeout(sn.current), sn.current = null), p === null) return;
    const F = Math.max(0, p - Date.now());
    sn.current = setTimeout(() => {
      sn.current = null, gi(($) => $ + 1);
    }, F);
  }, []), Dn = s.useCallback(() => {
    Nn.current.clear(), An.current.clear(), sn.current && (clearTimeout(sn.current), sn.current = null);
  }, []), is = s.useCallback(() => {
    Ua.current || gi((p) => p + 1);
  }, []), yi = s.useCallback((p) => {
    const F = od.current, $ = F.get(p);
    if ($)
      return $;
    const ae = pn(p).then((se) => se ?? null).catch(() => null).finally(() => {
      F.delete(p);
    });
    return F.set(p, ae), ae;
  }, []), Bs = s.useCallback(async (p) => {
    if (p.length === 0)
      return { resolvedEntries: [], failedIds: [] };
    const F = [], $ = [];
    let ae = 0;
    const se = Math.min(u0, p.length);
    return await Promise.all(
      Array.from({ length: se }, async () => {
        for (; ; ) {
          const Se = ae;
          if (ae += 1, Se >= p.length) break;
          const Ae = p[Se], ke = await yi(Ae);
          ke ? F.push({ mediaId: Ae, url: ke }) : $.push(Ae);
        }
      })
    ), { resolvedEntries: F, failedIds: $ };
  }, [yi]), jt = s.useMemo(() => Ll(tr).toSorted((F, $) => $.order - F.order).map((F) => ({
    ...F,
    items: or[F.id] ?? []
  })), [tr, or]), On = s.useMemo(() => {
    const p = /* @__PURE__ */ new Map();
    for (const [F, $] of Object.entries(Tn))
      p.set(F, b0($));
    return p;
  }, [Tn]), {
    resolvedTracks: wi,
    fastScrubTracks: Si,
    playbackVideoSourceSpans: ki,
    scrubVideoSourceSpans: Ci,
    fastScrubBoundaryFrames: Va,
    fastScrubBoundarySources: Wa,
    fastScrubTracksFingerprint: za
  } = s.useMemo(() => {
    const p = [], F = [], $ = [], ae = [], se = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Map();
    for (const fe of jt) {
      const Ee = [], tt = [];
      for (const Ne of fe.items) {
        if (!Ne.mediaId || Ne.type !== "video" && Ne.type !== "audio" && Ne.type !== "image") {
          Ee.push(Ne), tt.push(Ne);
          continue;
        }
        const lt = pr.get(Ne.mediaId) ?? "", gt = Ne.type === "video" && Jo(Ne.mediaId) || lt, Et = As && Ne.type === "video" ? gt : lt, Wt = Ne.type === "video" ? gt : lt, _t = "src" in Ne && Ne.src === Et ? Ne : { ...Ne, src: Et }, Lt = "src" in Ne && Ne.src === Wt ? Ne : { ...Ne, src: Wt };
        if (Ee.push(_t), tt.push(Lt), _t.type === "video" && Et && $.push({
          src: Et,
          startFrame: _t.from,
          endFrame: _t.from + _t.durationInFrames
        }), Lt.type === "video" && Wt && (ae.push({
          src: Wt,
          startFrame: Lt.from,
          endFrame: Lt.from + Lt.durationInFrames
        }), Lt.durationInFrames > 0)) {
          const nr = Lt.from, Tt = Lt.from + Lt.durationInFrames;
          se.add(nr), se.add(Tt);
          let Q = Se.get(nr);
          Q || (Q = /* @__PURE__ */ new Set(), Se.set(nr, Q)), Q.add(Wt);
          let de = Se.get(Tt);
          de || (de = /* @__PURE__ */ new Set(), Se.set(Tt, de)), de.add(Wt);
        }
      }
      p.push({ ...fe, items: Ee }), F.push({ ...fe, items: tt });
    }
    const Ae = [...se].sort((fe, Ee) => fe - Ee), ke = [...Se.entries()].map(([fe, Ee]) => ({ frame: fe, srcs: [...Ee] })).sort((fe, Ee) => fe.frame - Ee.frame);
    return {
      resolvedTracks: p,
      fastScrubTracks: F,
      playbackVideoSourceSpans: $,
      scrubVideoSourceSpans: ae,
      fastScrubBoundaryFrames: Ae,
      fastScrubBoundarySources: ke,
      fastScrubTracksFingerprint: g0(F)
    };
  }, [jt, pr, As, g]), id = Qt((p) => p.brokenMediaIds.length), $a = s.useMemo(
    () => Ht.reduce((p, F) => Math.max(p, F.from + F.durationInFrames), 0),
    [Ht]
  ), cd = s.useMemo(() => $a === 0 ? 900 : $a + Pe * 5, [$a, Pe]), Ka = Qt((p) => p.brokenMediaIds), Mi = s.useRef([]);
  s.useEffect(() => {
    const p = Mi.current;
    Mi.current = Ka;
    const F = p.filter(($) => !Ka.includes($));
    F.length > 0 && (an(F), Os(F), Gr(($) => {
      const ae = new Map($);
      let se = !1;
      for (const Se of F)
        ae.delete(Se) && (se = !0);
      return se ? ae : $;
    }));
  }, [Os, Ka, an]), s.useEffect(() => {
    if (pr.size === 0)
      return;
    const p = us.getState().mediaIds;
    if (p.length === 0)
      return;
    const F = new Set(p), $ = [];
    for (const [ae, se] of pr.entries()) {
      if (!F.has(ae)) continue;
      Yi.get(ae) !== se && $.push(ae);
    }
    $.length !== 0 && (an($), Os($), Gr((ae) => {
      const se = new Map(ae);
      let Se = !1;
      for (const Ae of $)
        se.delete(Ae) && (Se = !0);
      return Se ? se : ae;
    }), is());
  }, [
    Os,
    pi,
    an,
    is,
    pr
  ]), s.useEffect(() => {
    let p = !1;
    async function F() {
      Ua.current = !0;
      try {
        const $ = us.getState().mediaIds;
        if ($.length === 0) {
          jn.current.clear(), Fn.current = [], Dn(), Gr(/* @__PURE__ */ new Map()), Ft(!1);
          return;
        }
        const ae = new Set($);
        vi(ae);
        let se = pr, Se = Fn.current;
        if (bi.current !== Pr) {
          if (bi.current = Pr, pr.size > 0) {
            const le = /* @__PURE__ */ new Map();
            for (const [Oe, ut] of pr.entries())
              ae.has(Oe) && le.set(Oe, ut);
            se = le, le.size !== pr.size && Gr(le);
          }
          Se = as(se);
        } else Se.length === 0 && (Se = as(se));
        if (Se.length === 0) {
          Zr(null), Ft(!1);
          return;
        }
        const Ae = new Set(Se), ke = Date.now();
        let fe = null;
        const Ee = re.getState(), tt = Vn({
          isPlaying: Ee.isPlaying,
          previewFrame: Ee.previewFrame,
          isGizmoInteracting: te.current
        }), Ne = ma(tt, {
          currentFrame: Ee.currentFrame,
          previewFrame: Ee.previewFrame
        });
        if (tt === "scrubbing" && se.size > 0) {
          Zr(Date.now() + h0), Ft(!1);
          return;
        }
        const lt = Math.max(12, Math.round(Pe * 0.6)), gt = Math.max(24, Math.round(Pe * Oc)), Et = Ne - gt, Wt = Ne + gt, _t = /* @__PURE__ */ new Map();
        let Lt = 0;
        for (const le of jt)
          for (const Oe of le.items) {
            if (!Oe.mediaId || !Ae.has(Oe.mediaId)) continue;
            const ut = Oe.from + Oe.durationInFrames, Nt = Ne < Oe.from ? Oe.from - Ne : Ne > ut ? Ne - ut : 0, Dt = On.get(Oe.mediaId) ?? 1, Ot = Nt + Dt * lt, dt = _t.get(Oe.mediaId);
            (dt === void 0 || Ot < dt) && _t.set(Oe.mediaId, Ot), ut < Et || Oe.from > Wt || Dt > Lt && (Lt = Dt);
          }
        const nr = [];
        for (const le of Se) {
          const Oe = os(le);
          if (Oe > ke) {
            (fe === null || Oe < fe) && (fe = Oe);
            continue;
          }
          const ut = On.get(le) ?? 1, Nt = gt * 4 + ut * lt;
          nr.push({
            mediaId: le,
            score: _t.get(le) ?? Nt
          });
        }
        if (nr.length === 0) {
          Zr(fe), Ft(!1);
          return;
        }
        const Tt = Wc(
          x0(tt),
          Lt
        ), Q = nr.toSorted((le, Oe) => le.score - Oe.score).slice(0, Tt).map((le) => le.mediaId), de = nr.length > Q.length;
        if (Zr(null), se.size === 0 && (Ft(!0), await new Promise((le) => setTimeout(le, 150))), p) {
          Ft(!1);
          return;
        }
        try {
          const le = new Map(se), Oe = performance.now(), { resolvedEntries: ut, failedIds: Nt } = await Bs(Q), Dt = performance.now() - Oe;
          nt.current.resolveSamples += 1, nt.current.resolveTotalMs += Dt, nt.current.resolveTotalIds += Q.length, nt.current.resolveLastMs = Dt, nt.current.resolveLastIds = Q.length;
          const Ot = ut.map((Mt) => Mt.mediaId);
          for (const Mt of ut)
            le.set(Mt.mediaId, Mt.url);
          an(Ot);
          const dt = Ls(Nt);
          dt !== null && Zr(dt), de && Zr(Date.now() + 16), _s(Ot), p || Gr(le);
        } catch (le) {
          Ar.error("Failed to resolve media URLs:", le);
        } finally {
          Ft(!1);
        }
      } finally {
        Ua.current = !1;
      }
    }
    return F(), () => {
      p = !0;
    };
  }, [
    an,
    jt,
    Pe,
    os,
    Ls,
    On,
    vi,
    as,
    _s,
    Dn,
    Bs,
    rs,
    Zr,
    Pr,
    id,
    Ba
  ]), s.useEffect(() => {
  }, []), s.useEffect(() => {
  }, []), s.useEffect(() => {
    const p = ga();
    if (pr.size === 0) {
      p.pruneUnused(/* @__PURE__ */ new Set());
      const ke = p.getStats();
      nt.current.sourceWarmTarget = 0, nt.current.sourceWarmKeep = 0, nt.current.sourcePoolSources = ke.sourceCount, nt.current.sourcePoolElements = ke.totalElements, nt.current.sourcePoolActiveClips = ke.activeClips;
      return;
    }
    const F = /* @__PURE__ */ new Map();
    let $ = null;
    const ae = (ke, fe, Ee, tt, Ne) => {
      const lt = fe - Ee, gt = fe + Ee;
      for (const Et of ke) {
        if (Et.endFrame < lt || Et.startFrame > gt) continue;
        const Wt = fe < Et.startFrame ? Et.startFrame - fe : fe > Et.endFrame ? fe - Et.endFrame : 0, _t = tt + Wt, Lt = Ne.get(Et.src);
        (Lt === void 0 || _t < Lt) && Ne.set(Et.src, _t);
      }
    }, se = () => {
      const ke = performance.now(), fe = re.getState(), Ee = Vn({
        isPlaying: fe.isPlaying,
        previewFrame: fe.previewFrame,
        isGizmoInteracting: te.current
      }), tt = p.getStats(), Ne = gg({
        mode: Ee,
        currentPoolSourceCount: tt.sourceCount,
        currentPoolElementCount: tt.totalElements,
        maxSources: s0,
        minSources: o0,
        hardCapSources: Uc,
        hardCapElements: a0
      }), lt = /* @__PURE__ */ new Map(), gt = Math.max(12, Math.round(Pe * r0)), Et = Math.max(8, Math.round(Pe * n0));
      ae(
        ki,
        fe.currentFrame,
        gt,
        100,
        lt
      ), Ee === "scrubbing" && fe.previewFrame !== null && ae(
        Ci,
        fe.previewFrame,
        Et,
        0,
        lt
      );
      const Wt = [...lt.entries()].sort((de, le) => de[1] - le[1]).slice(0, Ne).map(([de]) => de);
      for (const de of Wt)
        F.set(de, ke), p.preloadSource(de).catch(() => {
        });
      const _t = new Set(Wt), Lt = [...F.entries()].filter(
        ([de, le]) => !_t.has(de) && ke - le <= Gc
      ).sort((de, le) => le[1] - de[1]);
      for (const [de] of Lt) {
        if (_t.size >= Ne) break;
        _t.add(de);
      }
      let nr = 0;
      for (const [de, le] of F.entries())
        ke - le > Gc && (F.delete(de), nr += 1);
      const Tt = Math.max(0, F.size - Uc);
      if (Tt > 0) {
        const de = [...F.entries()].filter(([le]) => !_t.has(le)).sort((le, Oe) => le[1] - Oe[1]);
        for (let le = 0; le < de.length && le < Tt; le++) {
          const [Oe] = de[le];
          F.delete(Oe) && (nr += 1);
        }
      }
      p.pruneUnused(_t);
      const Q = p.getStats();
      nt.current.sourceWarmTarget = Ne, nt.current.sourceWarmKeep = _t.size, nt.current.sourceWarmEvictions += nr, nt.current.sourcePoolSources = Q.sourceCount, nt.current.sourcePoolElements = Q.totalElements, nt.current.sourcePoolActiveClips = Q.activeClips;
    };
    se();
    const Se = setInterval(se, i0), Ae = re.subscribe((ke, fe) => {
      (ke.currentFrame !== fe.currentFrame || ke.previewFrame !== fe.previewFrame || ke.isPlaying !== fe.isPlaying) && (ke.isPlaying && !fe.isPlaying ? ($ !== null && (cancelAnimationFrame($), $ = null), se()) : ($ !== null && cancelAnimationFrame($), $ = requestAnimationFrame(() => {
        $ = null, se();
      })));
    });
    return () => {
      Ae(), clearInterval(Se), $ !== null && cancelAnimationFrame($);
    };
  }, [pr, ki, Ci, Pe]);
  const ld = s.useMemo(() => ({
    fps: Pe,
    width: t.width,
    height: t.height,
    tracks: wi,
    transitions: Ut,
    backgroundColor: t.backgroundColor,
    keyframes: qt
  }), [Pe, t.width, t.height, wi, Ut, t.backgroundColor, qt]), on = s.useMemo(() => {
    const p = Math.max(2, t.width), F = Math.max(2, t.height);
    return { width: p, height: F };
  }, [t.width, t.height]), Vr = s.useMemo(() => {
    const p = Math.max(1, Math.round(t.width)), F = Math.max(1, Math.round(t.height));
    return { width: Math.max(2, p), height: Math.max(2, F) };
  }, [t.width, t.height]), Hs = s.useCallback((p) => {
    const F = Xe.getState(), $ = F.preview?.[p]?.transform;
    if ($) return $;
    if (F.activeGizmo?.itemId === p && F.previewTransform)
      return F.previewTransform;
  }, []), Us = s.useCallback((p) => Xe.getState().preview?.[p]?.effects, []), Gs = s.useCallback((p) => {
    const F = Fr.getState();
    if (F.editingItemId === p && F.previewCornerPin)
      return F.previewCornerPin;
  }, []), Vs = s.useCallback((p) => {
    const F = ze.getState();
    if (F.editingItemId === p && F.previewVertices)
      return F.previewVertices;
  }, []), sr = s.useMemo(() => Si, [
    Si,
    za
  ]), Ri = s.useMemo(() => {
    const p = /* @__PURE__ */ new Map();
    for (const F of sr)
      for (const $ of F.items)
        p.set($.id, $);
    return p;
  }, [sr]), Pi = s.useRef(Ri);
  Pi.current = Ri;
  const Ii = s.useMemo(() => new Map(qt.map((p) => [p.itemId, p])), [qt]), Ti = s.useRef(Ii);
  Ti.current = Ii;
  const Ws = s.useCallback((p) => Pi.current.get(p), []), zs = s.useCallback((p) => Ti.current.get(p), []), Jr = s.useMemo(() => qt, [
    qt
  ]), $s = s.useRef({
    tracks: sr,
    keyframes: Jr
  }), Ei = s.useMemo(() => ({
    fps: Pe,
    width: t.width,
    height: t.height,
    tracks: sr,
    transitions: Ut,
    backgroundColor: t.backgroundColor,
    keyframes: Jr
  }), [
    Pe,
    t.width,
    t.height,
    sr,
    Ut,
    t.backgroundColor,
    Jr
  ]), Ya = s.useRef(Ei);
  Ya.current = Ei;
  const Fi = s.useMemo(() => Ut.map((p) => `${p.id}:${p.type}:${p.leftClipId}:${p.rightClipId}:${p.trackId ?? ""}:${p.durationInFrames}:${p.presentation ?? ""}:${p.timing ?? ""}`).join("|"), [Ut]), Wr = s.useMemo(() => [
    Pe,
    t.width,
    t.height,
    t.backgroundColor ?? "",
    za,
    Fi
  ].join("::"), [
    za,
    Pe,
    Fi,
    t.backgroundColor,
    t.height,
    t.width
  ]), ir = s.useMemo(() => {
    const p = /* @__PURE__ */ new Map();
    for (const F of sr)
      for (const $ of F.items)
        p.set($.id, $);
    return Wd(Ut, p);
  }, [sr, Ut]), ji = s.useMemo(
    () => sr.flatMap((p) => p.items),
    [sr]
  ), _n = s.useMemo(
    () => Math.max(2, Math.round(Pe * 0.25)),
    [Pe]
  ), Ln = s.useMemo(
    () => Math.max(2, Math.round(Pe * 0.1)),
    [Pe]
  ), Ni = s.useMemo(
    () => Math.max(_n, Math.round(Pe * 3)),
    [Pe, _n]
  ), Ai = s.useMemo(
    () => Math.max(_n, Math.round(Pe * 1.5)),
    [Pe, _n]
  ), cs = 8, Di = s.useMemo(() => {
    const p = ($) => $.effects?.some((ae) => ae.enabled) || $.blendMode !== void 0 && $.blendMode !== "normal", F = /* @__PURE__ */ new Set();
    for (const $ of ir)
      (p($.leftClip) || p($.rightClip)) && F.add($.startFrame);
    return F;
  }, [ir]), Oi = s.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    for (const F of ir) {
      const $ = F.leftClip.speed ?? 1, ae = F.rightClip.speed ?? 1;
      (Math.abs($ - 1) > 1e-3 || Math.abs(ae - 1) > 1e-3) && p.add(F.startFrame);
    }
    return p;
  }, [ir]), yn = s.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    for (const F of Di)
      p.add(F);
    for (const F of Oi)
      p.add(F);
    return p;
  }, [Di, Oi]), Ks = s.useCallback((p) => p ? !yn.has(p.startFrame) : !0, [yn]), wn = s.useCallback((p) => p === null ? null : ir.find((F) => F.startFrame === p) ?? null, [ir]), Ys = s.useCallback((p) => {
    const F = p.leftClip.originId, $ = p.rightClip.originId;
    return F && $ && F === $ ? 0 : Ln;
  }, [Ln]), cn = s.useCallback((p) => ir.find((F) => p >= F.startFrame && p < F.endFrame + Ys(F)) ?? null, [Ys, ir]), _i = s.useCallback((p) => ir.find((F) => p >= F.startFrame && p < F.endFrame) ?? null, [ir]), ud = s.useMemo(
    () => ir.map((p) => ({
      startFrame: p.startFrame,
      endFrame: p.endFrame,
      cooldownFrames: Ys(p)
    })),
    [Ys, ir]
  ), dd = s.useCallback((p) => p === null ? !1 : cn(p) !== null ? !0 : Gu(ji, Ut.length, p), [ji, cn, Ut.length]), gr = s.useCallback(() => {
    const p = hr.current;
    if (p) {
      const $ = performance.now();
      p.exitedAtMs = $, wr.current.lastPrepareMs = p.lastPrepareMs, wr.current.lastEntryMisses = p.entryMisses, wr.current.lastSessionDurationMs = Math.max(0, $ - p.startedAtMs), wr.current.lastReadyLeadMs = p.enteredAtMs !== null && p.firstPreparedAtMs !== null ? Math.max(0, p.enteredAtMs - p.firstPreparedAtMs) : 0, p.event.success({
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
        readyLeadMs: wr.current.lastReadyLeadMs,
        sessionDurationMs: wr.current.lastSessionDurationMs
      }), At("session_end", {
        opId: p.opId,
        mode: p.mode,
        complex: p.complex,
        startFrame: p.startFrame,
        endFrame: p.endFrame,
        prepareMs: p.lastPrepareMs,
        preparedFrame: p.lastPreparedFrame,
        bufferedFramesPeak: p.bufferedFramesPeak,
        entryMisses: p.entryMisses,
        readyLeadMs: wr.current.lastReadyLeadMs,
        sessionDurationMs: wr.current.lastSessionDurationMs
      }), hr.current = null;
    }
    const F = W.current;
    if (F) {
      const $ = re.getState().currentFrame;
      for (const ae of [F.leftClip, F.rightClip]) {
        if (ae.type !== "video") continue;
        const se = Y.current.get(ae.id);
        if (!se) continue;
        const Se = $ - ae.from;
        if (Se < 0) continue;
        const Ae = ae.sourceStart ?? ae.trimStart ?? 0, ke = ae.sourceFps ?? Pe, fe = ae.speed ?? 1, Ee = Ae / ke + Se * fe / Pe, tt = se.duration || 1 / 0, Ne = Math.min(Math.max(0, Ee), tt - 0.05), lt = Math.abs(se.currentTime - Ne);
        if (lt > 0.15)
          try {
            se.currentTime = Ne;
          } catch {
          }
        else lt > 0.016 && (se.playbackRate = fe);
      }
    }
    W.current = null;
    for (const $ of Y.current.values())
      $ && delete $.dataset.transitionHold;
    pe.current = new Map(Y.current), Y.current.clear(), C.current.clear(), B.current.clear(), U.current = null;
  }, [Pe, At]), kr = s.useCallback((p) => {
    if (!p)
      return gr(), null;
    const F = W.current;
    if (F?.transition.id === p.transition.id && F.startFrame === p.startFrame)
      return F;
    gr(), W.current = p;
    const $ = fm(), ae = Ar.startEvent("preview_transition_session", $), se = p.leftClip.speed ?? 1, Se = p.rightClip.speed ?? 1, Ae = !!p.leftClip.effects?.some((lt) => lt.enabled), ke = !!p.rightClip.effects?.some((lt) => lt.enabled), fe = Ks(p) ? "dom" : "render", Ee = fe === "render";
    wr.current.sessionCount += 1, hr.current = {
      opId: $,
      event: ae,
      startedAtMs: performance.now(),
      startFrame: p.startFrame,
      endFrame: p.endFrame,
      mode: fe,
      complex: Ee,
      leftClipId: p.leftClip.id,
      rightClipId: p.rightClip.id,
      leftSpeed: se,
      rightSpeed: Se,
      leftHasEffects: Ae,
      rightHasEffects: ke,
      prepareStartedAtMs: null,
      firstPreparedAtMs: null,
      enteredAtMs: null,
      exitedAtMs: null,
      lastPrepareMs: 0,
      lastPreparedFrame: -1,
      bufferedFramesPeak: 0,
      entryMisses: 0,
      lastEntryMissFrame: null
    }, At("session_start", {
      opId: $,
      mode: fe,
      complex: Ee,
      startFrame: p.startFrame,
      endFrame: p.endFrame,
      leftClipId: p.leftClip.id,
      rightClipId: p.rightClip.id,
      leftSpeed: se,
      rightSpeed: Se,
      leftHasEffects: Ae,
      rightHasEffects: ke
    });
    const tt = re.getState().isPlaying, Ne = /* @__PURE__ */ new Map();
    for (const lt of [p.leftClip, p.rightClip]) {
      const gt = Qs(lt.id);
      if (Ne.set(lt.id, gt), gt && tt) {
        gt.dataset.transitionHold = "1";
        const Et = lt.speed ?? 1;
        if (gt.readyState >= 2)
          ro(gt, Et);
        else {
          const Wt = () => {
            gt.removeEventListener("canplay", Wt), gt.dataset.transitionHold === "1" && gt.paused && ro(gt, Et);
          };
          gt.addEventListener("canplay", Wt, { once: !0 });
        }
      }
    }
    return Y.current = Ne, B.current.clear(), p;
  }, [gr, At, Ks]), qs = s.useCallback((p) => {
    const F = W.current;
    if (!(F?.leftClip.id === p || F?.rightClip.id === p)) {
      const Ee = Qs(p);
      if (Ee)
        return pe.current.delete(p), Ee;
      const tt = pe.current.get(p);
      return tt?.isConnected && tt.readyState >= 2 ? tt : (pe.current.delete(p), null);
    }
    const ae = re.getState().isPlaying;
    if (!ae && !Ks(F))
      return null;
    const se = F?.leftClip.id === p ? F.leftClip.speed ?? 1 : F?.rightClip.id === p ? F.rightClip.speed ?? 1 : 1, Se = (Ee) => {
      ae && (Ee.dataset.transitionHold = "1", ro(Ee, se));
    }, Ae = Y.current.get(p) ?? null;
    if (Ae && Ae.isConnected && Ae.readyState >= 2 && Ae.videoWidth > 0)
      return Se(Ae), Ae;
    const ke = Y.current.get(p) ?? null;
    ke && ke !== Ae && delete ke.dataset.transitionHold;
    const fe = Qs(p);
    return fe && fe.readyState >= 2 && Se(fe), Y.current.set(p, fe), fe;
  }, [Ks]), Xs = s.useCallback((p, F, $) => {
    const ae = ir.find((se) => !(p > se.startFrame || $?.complexOnly && !yn.has(se.startFrame)));
    return !ae || ae.startFrame - p > F ? null : ae.startFrame;
  }, [yn, ir]), qa = s.useCallback((p) => Xs(p, Ni), [Xs, Ni]), Li = s.useCallback((p) => Xs(p, Ai), [Xs, Ai]), yt = La, Sn = s.useCallback((p, F) => !F.isPlaying && F.previewFrame === null && !yt && _i(p) !== null, [yt, _i]), Bi = !yt && Mg(jt, qt), fd = !yt && rn && G === "text";
  oe.current = fd, K.current = Bi, s.useLayoutEffect(() => {
    const p = l.current;
    p && (p.width !== on.width && (p.width = on.width), p.height !== on.height && (p.height = on.height));
  }, [on.width, on.height]);
  const zr = s.useCallback(() => {
    if (at(), b.current = null, h.current = null, k.current = null, y.current = !1, N.current = [], P.current.clear(), T.current = [], j.current.clear(), E.current.clear(), A.current = [], z.current.clear(), M.current = null, q.current = null, V.current = null, X.current = null, D.current !== null && (clearTimeout(D.current), D.current = null), gr(), J.current = null, nt.current.fastScrubPrewarmedSources = 0, f.current = !1, m.current) {
      try {
        m.current.dispose();
      } catch (p) {
        Ar.warn("Failed to dispose renderer:", p);
      }
      m.current = null;
    }
    if (S.current = null, x.current = null, v.current = null, R.current) {
      try {
        R.current.dispose();
      } catch {
      }
      R.current = null;
    }
    L.current = null, O.current = null, I.current = !1;
  }, [at, gr]), md = s.useCallback(async () => typeof OffscreenCanvas > "u" || Tr ? null : (R.current && L.current !== Wr && zr(), R.current ? R.current : (O.current || (O.current = (async () => {
    try {
      const p = new OffscreenCanvas(Vr.width, Vr.height), F = p.getContext("2d");
      if (!F) return null;
      const $ = await Oo(Ya.current, p, F, {
        mode: "preview",
        getPreviewTransformOverride: Hs,
        getPreviewEffectsOverride: Us,
        getPreviewCornerPinOverride: Gs,
        getPreviewPathVerticesOverride: Vs,
        getLiveItemSnapshot: Ws,
        getLiveKeyframes: zs
      });
      return "warmGpuPipeline" in $ && $.warmGpuPipeline(), R.current = $, L.current = Wr, $;
    } catch {
      return null;
    } finally {
      O.current = null;
    }
  })()), O.current)), [
    zr,
    Wr,
    Ws,
    zs,
    Gs,
    Us,
    Vs,
    Hs,
    Tr,
    Vr.width,
    Vr.height
  ]), Cr = s.useCallback(async () => typeof OffscreenCanvas > "u" || Tr ? null : (m.current && S.current !== Wr && zr(), m.current ? m.current : (b.current || (b.current = (async () => {
    try {
      const p = new OffscreenCanvas(Vr.width, Vr.height), F = p.getContext("2d");
      if (!F) return null;
      const $ = await Oo(Ya.current, p, F, {
        mode: "preview",
        getPreviewTransformOverride: Hs,
        getPreviewEffectsOverride: Us,
        getPreviewCornerPinOverride: Gs,
        getPreviewPathVerticesOverride: Vs,
        getLiveItemSnapshot: Ws,
        getLiveKeyframes: zs
      }), ae = re.getState(), se = Vn({
        isPlaying: ae.isPlaying,
        previewFrame: ae.previewFrame,
        isGizmoInteracting: te.current
      }), Se = ma(se, {
        currentFrame: ae.currentFrame,
        previewFrame: ae.previewFrame
      }), Ae = $.preload({
        priorityFrame: Se,
        priorityWindowFrames: Math.max(12, Math.round(Pe * 4))
      }).catch((ke) => {
        Ar.warn("Renderer preload failed:", ke);
      }).finally(() => {
        h.current === Ae && (h.current = null);
      });
      return h.current = Ae, await Promise.race([
        Ae,
        new Promise((ke) => {
          setTimeout(ke, Og);
        })
      ]), x.current = p, v.current = F, M.current = null, m.current = $, S.current = Wr, "warmGpuPipeline" in $ && $.warmGpuPipeline(), $;
    } catch (p) {
      return Ar.warn("Failed to initialize renderer, falling back to Player seeks:", p), m.current = null, x.current = null, v.current = null, M.current = null, null;
    } finally {
      b.current = null;
    }
  })()), b.current)), [
    zr,
    Wr,
    Pe,
    Ws,
    zs,
    Hs,
    Us,
    Gs,
    Vs,
    Tr,
    Vr.height,
    Vr.width
  ]), Bn = s.useCallback(async (p) => {
    const F = x.current;
    if (F && M.current === p)
      return F;
    const $ = await Cr(), ae = x.current;
    return !$ || !ae ? null : (M.current !== p && (await $.renderFrame(p), M.current = p), ae);
  }, [Cr]), ls = s.useCallback((p) => {
    const F = x.current;
    if (!F || !W.current) return;
    const $ = new OffscreenCanvas(F.width, F.height), ae = $.getContext("2d");
    if (!ae) return;
    ae.drawImage(F, 0, 0), B.current.set(p, $);
    const se = hr.current;
    se && (se.lastPreparedFrame = p, se.bufferedFramesPeak = Math.max(
      se.bufferedFramesPeak,
      B.current.size
    ), se.firstPreparedAtMs === null && (se.firstPreparedAtMs = performance.now(), At("prepare_ready", {
      opId: se.opId,
      preparedFrame: p,
      bufferedFrames: B.current.size
    })));
    const Se = cs + Ln + 2;
    for (; B.current.size > Se; ) {
      const Ae = B.current.keys().next().value;
      if (Ae === void 0) break;
      B.current.delete(Ae);
    }
  }, [Ln, cs, At]), Xa = s.useCallback(async (p) => {
    if (p < 0) return !1;
    if (M.current === p)
      return !0;
    if (V.current === p && q.current)
      return q.current;
    if (y.current)
      return !1;
    V.current = p;
    const F = re.getState().isPlaying && yt, $ = (async () => {
      F || (y.current = !0);
      try {
        kr(wn(p));
        const ae = performance.now(), se = hr.current;
        se && (se.prepareStartedAtMs = ae, At("prepare_start", {
          opId: se.opId,
          targetFrame: p,
          mode: se.mode,
          complex: se.complex
        }));
        const Se = await Cr();
        if (!Se || !Ce.current) return !1;
        "setDomVideoElementProvider" in Se && Se.setDomVideoElementProvider(qs);
        const Ae = yn.has(p), ke = yt || Ae;
        ke && (await Se.renderFrame(p), ls(p));
        for (let Ee = 1; Ee < cs; Ee += 1) {
          const tt = p + Ee;
          yt && !Ae ? (await Se.renderFrame(tt), ls(tt)) : await Se.prewarmFrame(tt);
        }
        if (ke || (await Se.renderFrame(p), ls(p)), !Ce.current) return !1;
        M.current = p;
        const fe = performance.now();
        return se && (se.lastPrepareMs = Math.max(0, fe - ae), At("prepare_done", {
          opId: se.opId,
          targetFrame: p,
          prepareMs: se.lastPrepareMs,
          preparedFrame: se.lastPreparedFrame,
          bufferedFrames: B.current.size
        })), !0;
      } catch (ae) {
        return Ar.debug("Hidden transition prerender failed:", p, ae), !1;
      } finally {
        F || (y.current = !1), V.current === p && (V.current = null, q.current = null), k.current !== null && ue.current();
      }
    })();
    return q.current = $, $;
  }, [
    Cr,
    qs,
    wn,
    kr,
    ls,
    yt,
    yn,
    cs,
    At
  ]);
  s.useEffect(() => {
    zr();
  }, [zr, Wr, Vr.height, Vr.width]), s.useEffect(() => {
    const p = $s.current;
    if (p.tracks !== sr && Wu(p.keyframes, Jr) && w0(p.tracks, sr)) {
      $s.current = {
        tracks: sr,
        keyframes: Jr
      };
      return;
    }
    $s.current = {
      tracks: sr,
      keyframes: Jr
    };
    const F = k0({
      previousTracks: p.tracks,
      nextTracks: sr,
      previousKeyframes: p.keyframes,
      nextKeyframes: Jr
    }), ae = P0(
      p.tracks,
      sr,
      p.keyframes,
      Jr
    ).ok;
    if (F.length === 0)
      return;
    const se = m.current, Se = R.current, Ae = S.current === Wr, ke = L.current === Wr;
    if (!Ae && !ke)
      return;
    const fe = { ranges: F };
    se && Ae && se.invalidateFrameCache(fe), Se && ke && Se.invalidateFrameCache(fe);
    const Ee = re.getState(), tt = Ee.previewFrame ?? Ee.currentFrame, Ne = no(tt, F);
    M.current !== null && no(M.current, F) && (M.current = null);
    let lt = !1;
    for (const gt of [...B.current.keys()])
      no(gt, F) && (B.current.delete(gt), lt = !0);
    lt && (Br.current = null), !ae && se && Ae && Ne && (yt || Ee.previewFrame !== null || et.current || Ye.current) && (k.current = tt, queueMicrotask(() => {
      ue.current();
    }));
  }, [
    Jr,
    sr,
    Wr,
    yt
  ]), s.useEffect(() => Vl()?.subscribe?.(() => {
    const p = S0($s.current.tracks);
    if (p.length === 0) return;
    m.current?.invalidateFrameCache({ ranges: p }), R.current?.invalidateFrameCache({ ranges: p }), M.current = null;
    const F = re.getState();
    k.current = F.previewFrame ?? F.currentFrame, ue.current();
  }), []);
  const Hi = s.useCallback(async (p) => {
    if (ne.current)
      return ne.current;
    const F = (async () => {
      try {
        const $ = re.getState(), ae = $.previewFrame ?? $.currentFrame, se = await Bn(ae);
        if (!se) return null;
        const Se = p?.format ?? "image/jpeg", Ae = p?.quality ?? 0.9, ke = Math.max(2, Math.round(p?.width ?? se.width)), fe = Math.max(2, Math.round(p?.height ?? se.height));
        if (!(!p?.fullResolution && (ke !== se.width || fe !== se.height))) {
          const gt = await se.convertToBlob({
            type: Se,
            quality: Ae
          });
          return zc(gt);
        }
        const tt = document.createElement("canvas");
        tt.width = ke, tt.height = fe;
        const Ne = tt.getContext("2d");
        if (!Ne) return null;
        Ne.drawImage(se, 0, 0, ke, fe);
        const lt = await new Promise((gt) => {
          tt.toBlob(gt, Se, Ae);
        });
        return lt ? zc(lt) : null;
      } catch ($) {
        return Ar.warn("Failed to capture frame:", $), null;
      } finally {
        ne.current = null;
      }
    })();
    return ne.current = F, F;
  }, [Bn]), Ui = s.useCallback(async (p) => {
    if (me.current)
      return me.current;
    const F = (async () => {
      try {
        const $ = re.getState(), ae = $.previewFrame ?? $.currentFrame, se = await Bn(ae);
        if (!se) return null;
        const Se = Math.max(2, Math.round(p?.width ?? se.width)), Ae = Math.max(2, Math.round(p?.height ?? se.height));
        if (!(!p?.fullResolution && (Se !== se.width || Ae !== se.height))) {
          const tt = v.current ?? se.getContext("2d", { willReadFrequently: !0 });
          return tt ? tt.getImageData(0, 0, se.width, se.height) : null;
        }
        let fe = xe.current;
        fe || (fe = document.createElement("canvas"), xe.current = fe), (fe.width !== Se || fe.height !== Ae) && (fe.width = Se, fe.height = Ae);
        const Ee = fe.getContext("2d", { willReadFrequently: !0 });
        return Ee ? (Ee.clearRect(0, 0, Se, Ae), Ee.drawImage(se, 0, 0, Se, Ae), Ee.getImageData(0, 0, Se, Ae)) : null;
      } catch ($) {
        return Ar.warn("Failed to capture raw frame:", $), null;
      } finally {
        me.current = null;
      }
    })();
    return me.current = F, F;
  }, [Bn]), Gi = s.useCallback(async () => {
    if (J.current)
      return J.current;
    const p = (async () => {
      try {
        const F = re.getState(), $ = F.previewFrame ?? F.currentFrame;
        return await Bn($);
      } catch (F) {
        return Ar.warn("Failed to capture canvas source:", F), null;
      } finally {
        J.current = null;
      }
    })();
    return J.current = p, p;
  }, [Bn]), Za = re((p) => p.setCaptureCanvasSource);
  s.useEffect(() => (Ur(Hi), vn?.(Ui), Za?.(Gi), () => {
    Ur(null), vn?.(null), Za?.(null), Xr(null), ne.current = null, me.current = null, xe.current = null;
  }), [Hi, Ui, Gi, Ur, vn, Za, Xr]), s.useEffect(() => {
    (async () => {
      try {
        const { EffectsPipeline: p } = await import("./feature-editing-core-BfTqGYFs.js").then(($) => $.gf), F = await p.requestCachedDevice();
        if (F) {
          const $ = await p.create();
          if ($)
            try {
              const { TransitionPipeline: ae } = await import("./feature-editing-core-BfTqGYFs.js").then((se) => se.gg);
              ae.create(F)?.destroy();
            } finally {
              $.destroy();
            }
        }
      } catch {
      }
    })();
  }, []), s.useEffect(() => {
    if (Tr || m.current || b.current) return;
    let p = !1;
    const F = () => {
      p || m.current || b.current || Cr();
    };
    let $ = null, ae = null;
    return typeof window < "u" && "requestIdleCallback" in window ? $ = window.requestIdleCallback(() => F(), { timeout: 400 }) : ae = setTimeout(F, 120), () => {
      p = !0, $ !== null && typeof window < "u" && "cancelIdleCallback" in window && window.cancelIdleCallback($), ae !== null && clearTimeout(ae);
    };
  }, [Cr, Tr]), s.useEffect(() => {
    Ce.current = !0;
    const p = (Q, de) => {
      const le = l.current;
      if (!le) return;
      const Oe = le.getContext("2d");
      Oe && (Oe.clearRect(0, 0, le.width, le.height), Oe.drawImage(Q, 0, 0, le.width, le.height), Xr(de));
    }, F = (Q) => {
      const de = x.current;
      de && p(de, Q);
    }, $ = (Q) => ug(
      ud,
      Q,
      _n,
      Ln
    ), ae = (Q) => {
      const de = B.current.get(Q);
      if (de) {
        const Oe = hr.current;
        return Oe && Oe.enteredAtMs === null && (Oe.enteredAtMs = performance.now(), At("entry_show", {
          opId: Oe.opId,
          frame: Q,
          via: "buffer",
          bufferedFrames: B.current.size
        })), p(de, Q), Hr(), !0;
      }
      if (M.current !== Q)
        return !1;
      const le = hr.current;
      return le && le.enteredAtMs === null && (le.enteredAtMs = performance.now(), At("entry_show", {
        opId: le.opId,
        frame: Q,
        via: "offscreen",
        bufferedFrames: B.current.size
      })), F(Q), Hr(), !0;
    }, se = (Q) => {
      if (Q === null) {
        X.current = null, D.current !== null && (clearTimeout(D.current), D.current = null);
        return;
      }
      X.current = Q, y.current || Xa(Q);
    }, Se = () => {
      D.current !== null && (clearTimeout(D.current), D.current = null);
    }, Ae = () => {
      const Q = X.current;
      if (Q === null) {
        Se();
        return;
      }
      D.current === null && (D.current = window.setTimeout(() => {
        if (D.current = null, !Ce.current) return;
        const de = re.getState();
        if (!de.isPlaying) return;
        const le = $(de.currentFrame);
        if (!le.shouldPrewarm || le.nextTransitionStartFrame !== Q)
          return;
        if (y.current) {
          Ae();
          return;
        }
        const Oe = hr.current;
        Oe && At("prepare_opportunistic", {
          opId: Oe.opId,
          targetFrame: Q
        }), X.current = null, Xa(Q);
      }, 0));
    }, ke = async () => {
      if (y.current) return;
      y.current = !0;
      const Q = w.current, de = () => w.current !== Q;
      try {
        const le = (dt) => {
          if (!(dt < 0) && !P.current.has(dt) && !j.current.has(dt))
            for (P.current.add(dt), N.current.push(dt); N.current.length > Xg; ) {
              const Mt = N.current.shift();
              Mt !== void 0 && P.current.delete(Mt);
            }
        }, Oe = (dt) => {
          if (!j.current.has(dt) && (j.current.add(dt), T.current.push(dt), T.current.length > Lg)) {
            const Mt = T.current.shift();
            Mt !== void 0 && j.current.delete(Mt);
          }
        }, ut = (dt) => {
          if (Va.length === 0) return;
          const Mt = Math.max(
            4,
            Math.round(Pe * _g)
          ), kt = dt - Mt, Rt = dt + Mt, xt = we.current, wt = [], ye = [];
          for (const ce of Va)
            if (!(ce < kt)) {
              if (ce > Rt) break;
              ye.push(ce), !(xt > 0 && ce < dt - 1) && (xt < 0 && ce > dt + 1 || wt.push(ce));
            }
          const Le = wt.length > 0 ? wt : ye;
          if (Le.length === 0) return;
          const He = [...Le].sort((ce, _e) => Math.abs(ce - dt) - Math.abs(_e - dt)).slice(0, Ug);
          for (const ce of He)
            le(Math.max(0, ce - 1)), le(ce), le(ce + 1);
        }, Nt = (dt) => {
          if (Wa.length === 0) return;
          const Mt = ga(), kt = z.current, Rt = (ge, Je) => {
            const bt = kt.get(ge);
            if (bt !== void 0 && Math.abs(Je - bt) < Wg)
              return !1;
            kt.set(ge, Je);
            const St = E.current, rr = A.current, Xt = rr.indexOf(ge);
            for (Xt >= 0 ? rr.splice(Xt, 1) : St.add(ge), rr.push(ge); rr.length > Bg; ) {
              const xr = rr.shift();
              if (xr === void 0) break;
              St.delete(xr) && (kt.delete(xr), nt.current.fastScrubPrewarmSourceEvictions += 1);
            }
            return nt.current.fastScrubPrewarmedSources = St.size, !0;
          }, xt = Math.max(
            8,
            Math.round(Pe * Hg)
          ), wt = dt - xt, ye = dt + xt, Le = we.current, He = [], ce = [];
          for (const ge of Wa)
            if (!(ge.frame < wt)) {
              if (ge.frame > ye) break;
              ce.push(ge), !(Le > 0 && ge.frame < dt - 1) && (Le < 0 && ge.frame > dt + 1 || He.push(ge));
            }
          const _e = He.length > 0 ? He : ce;
          if (_e.length === 0) return;
          const mt = [..._e].sort((ge, Je) => Math.abs(ge.frame - dt) - Math.abs(Je.frame - dt)).slice(0, Gg);
          let We = Vg;
          for (const ge of mt)
            for (const Je of ge.srcs) {
              if (We <= 0) return;
              const bt = E.current.has(Je);
              Rt(Je, dt) && (We -= 1, bt || Mt.preloadSource(Je).catch(() => {
              }));
            }
        }, Dt = (dt) => {
          const Mt = lg(we.current, {
            forwardSteps: $g,
            backwardSteps: Kg,
            oppositeSteps: Yg,
            neutralRadius: qg
          });
          for (const kt of Mt)
            le(dt + kt);
        };
        let Ot = 0;
        for (; Ce.current; ) {
          if (Ze(re.getState().previewFrame)) {
            st(), rt(), k.current = null;
            break;
          }
          if (Be.current) {
            k.current = null, N.current = [], P.current.clear(), st(), rt();
            break;
          }
          const dt = k.current, Mt = dt !== null, kt = Mt ? dt : N.current.shift() ?? null;
          if (kt === null) break;
          if (Mt)
            k.current = null, Ot = 0;
          else {
            if (P.current.delete(kt), k.current !== null || Re.current)
              continue;
            if (re.getState().isPlaying || Ot > 0 && performance.now() - Ot > Bc)
              break;
          }
          const Rt = await Cr();
          if (!Rt || !Ce.current) {
            st();
            break;
          }
          if (!Mt && de()) break;
          if ("setDomVideoElementProvider" in Rt)
            if (re.getState().isPlaying) {
              const wt = cn(kt);
              if (wt) {
                const ye = W.current, Le = !ye || ye.transition.id !== wt.transition.id;
                kr(wt), U.current && (await U.current, U.current = null), Le && "prewarmItems" in Rt && await Rt.prewarmItems(
                  [wt.leftClip.id, wt.rightClip.id],
                  kt
                );
              }
              Rt.setDomVideoElementProvider(qs);
            } else
              Rt.setDomVideoElementProvider(void 0);
          if (Mt) {
            const xt = performance.now();
            await Rt.renderFrame(kt);
            const wt = performance.now() - xt;
            M.current = kt;
          } else {
            const xt = [kt];
            for (; N.current.length > 0 && !(k.current !== null || Re.current || re.getState().isPlaying || Ot > 0 && performance.now() - Ot > Bc); ) {
              const wt = N.current.shift();
              P.current.delete(wt), xt.push(wt);
            }
            await Rt.prewarmFrames(xt);
            for (const wt of xt)
              Oe(wt);
          }
          if (!Ce.current || de()) break;
          if (Mt) {
            const xt = re.getState(), wt = $(kt), ye = xt.isPlaying && xt.previewFrame === null && (wt.hasActiveTransition || wt.shouldHoldOverlay) && !yt;
            if (Be.current) {
              st(), rt();
              continue;
            }
            const Le = kt === xt.currentFrame && Sn(kt, xt);
            if (!ye && !yt && !Le && !cg({
              isGizmoInteracting: te.current,
              isPlaying: xt.isPlaying,
              currentFrame: xt.currentFrame,
              previewFrame: xt.previewFrame,
              renderedFrame: kt
            })) {
              nt.current.staleScrubOverlayDrops += 1, st(), rt();
              continue;
            }
            F(kt), ye ? Hr() : Ir(), !ye && !Re.current && (Dt(kt), ut(kt), Nt(kt)), X.current !== null && Ae(), Ot = performance.now();
          } else
            Oe(kt);
        }
      } catch (le) {
        Ar.warn("Render failed, using Player seek fallback:", le), st(), rt(), zr();
      } finally {
        w.current === Q && (y.current = !1, X.current !== null && Ae(), k.current !== null && ke());
      }
    };
    ue.current = () => {
      ke();
    };
    let fe = null, Ee = -1, tt = !1;
    const Ne = /* @__PURE__ */ new Set();
    let lt = -1;
    const gt = () => {
      if (fe = null, !Ce.current) return;
      const Q = re.getState();
      if (!Q.isPlaying || !yt) return;
      const de = Q.currentFrame;
      if (de !== Ee) {
        Ee = de;
        const le = B.current.get(de);
        if (le) {
          p(le, de), M.current = de, lt = de;
          const Oe = de + 1;
          !B.current.has(Oe) && !y.current && (k.current = Oe, ke());
        } else
          k.current = de, y.current || ke();
      } else lt !== de && M.current === de && (F(de), lt = de);
      fe = requestAnimationFrame(gt);
    }, Et = Math.round(Pe * 3), Wt = re.subscribe((Q, de) => {
      if (Q.currentFrame !== de.currentFrame && Math.abs(Q.currentFrame - de.currentFrame) >= Et && !Q.isPlaying) {
        const ye = Q.currentFrame, Le = /* @__PURE__ */ new Map();
        for (const He of jt)
          for (const ce of He.items) {
            if (ce.type !== "video" || !("src" in ce) || !ce.src || ye < ce.from || ye >= ce.from + ce.durationInFrames || !ce.sourceFps) continue;
            const _e = ye - ce.from, mt = ce.sourceStart ?? ce.trimStart ?? 0, We = ce.speed ?? 1, ge = mt / ce.sourceFps + _e / Pe * We, Je = Le.get(ce.src);
            Je ? Je.push(ge) : Le.set(ce.src, [ge]);
          }
        for (const [He, ce] of Le)
          so(He, ce);
      }
      if (Q.isPlaying && yt && !de.isPlaying) {
        if (fe === null) {
          Ee = -1, w.current += 1, y.current = !1, N.current = [], P.current.clear();
          const ye = Q.currentFrame, Le = [];
          for (const We of jt)
            for (const ge of We.items) {
              if (ge.type !== "video" || ye < ge.from || ye >= ge.from + ge.durationInFrames) continue;
              const Je = ge.speed ?? 1;
              if (Math.abs(Je - 1) < 0.01) continue;
              ye - ge.from <= 2 && Le.push(ge.id);
            }
          for (const We of jt)
            for (const ge of We.items) {
              if (ge.type !== "video" || !("src" in ge) || !ge.src) continue;
              const Je = ge.speed ?? 1;
              if (Math.abs(Je - 1) < 0.01) continue;
              const bt = ge.from + ge.durationInFrames, St = Math.round(Pe * 3);
              if (ge.from <= ye + St && bt > ye) {
                const rr = Math.min(ye + St, bt - 1), Xt = Math.max(0, rr - ge.from), xr = ge.sourceStart ?? ge.trimStart ?? 0, Zs = ge.sourceFps ?? Pe, Ja = xr / Zs + Xt / Pe * Je;
                qi(ge.src, Ja);
              }
            }
          const He = [], ce = Math.round(Pe * 3);
          for (const We of jt)
            for (const ge of We.items) {
              if (ge.type !== "video" || !("src" in ge) || !ge.src || !ge.sourceFps) continue;
              const Je = ge.speed ?? 1;
              if (Math.abs(Je - 1) >= 0.01 || ge.from + ge.durationInFrames <= ye || ge.from > ye + ce) continue;
              const St = Qs(ge.id);
              if (!St) continue;
              const Xt = Math.max(ye, ge.from) - ge.from, Zs = (ge.sourceStart ?? ge.trimStart ?? 0) / ge.sourceFps + Xt / Pe * Je;
              Math.abs(St.currentTime - Zs) < 0.05 || He.push(new Promise((Ja) => {
                let zi = !1;
                const Js = () => {
                  zi || (zi = !0, St.removeEventListener("seeked", Js), clearTimeout(xd), Ja());
                };
                St.addEventListener("seeked", Js, { once: !0 });
                const xd = setTimeout(Js, 200);
                try {
                  St.currentTime = Zs;
                } catch {
                  Js();
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
                  (bt) => !Ne.has(bt)
                );
                Je.length > 0 && await ge.prewarmItems(Je, ye);
              }
            })()), mt && We.push(Promise.all(He)), await Promise.all(We), Ne.clear(), tt = !1, fe === null && re.getState().isPlaying && (fe = requestAnimationFrame(gt));
          })()) : fe = requestAnimationFrame(gt);
        }
      } else !Q.isPlaying && fe !== null && (cancelAnimationFrame(fe), fe = null, Sr.current = null, gr());
      if (Q.isPlaying && yt) {
        const ye = cn(Q.currentFrame);
        if (ye && !W.current) {
          kr(ye), Sr.current = ye.startFrame;
          const ce = m.current;
          ce && "prewarmItems" in ce && ce.prewarmItems(
            [ye.leftClip.id, ye.rightClip.id],
            Q.currentFrame
          );
          {
            const _e = [ye.leftClip, ye.rightClip], mt = /* @__PURE__ */ new Map();
            for (const We of _e)
              if (We.type === "video" && "src" in We && We.src && We.sourceFps) {
                const ge = Q.currentFrame - We.from, Je = We.sourceStart ?? We.trimStart ?? 0, bt = We.speed ?? 1, St = Je / We.sourceFps + ge / Pe * bt, rr = mt.get(We.src);
                rr ? rr.push(St) : mt.set(We.src, [St]);
              }
            for (const [We, ge] of mt)
              so(We, ge);
          }
        }
        const Le = W.current;
        if (Le && Y.current.size > 0)
          for (const ce of [Le.leftClip, Le.rightClip]) {
            if (ce.type !== "video") continue;
            const _e = Y.current.get(ce.id);
            if (!_e || _e.dataset.transitionHold !== "1") continue;
            const mt = Q.currentFrame - ce.from;
            if (mt < 0) continue;
            const We = ce.sourceStart ?? ce.trimStart ?? 0, ge = ce.sourceFps ?? Pe, Je = ce.speed ?? 1, bt = We / ge + mt * Je / Pe, St = C.current.get(ce.id);
            if (St && Math.abs(_e.currentTime - St.ct) < 1e-3) {
              const Xt = St.count + 1;
              if (C.current.set(ce.id, { ct: St.ct, count: Xt }), Xt >= 3) {
                try {
                  _e.currentTime = bt;
                } catch {
                }
                _e.playbackRate = Je, _e.play().catch(() => {
                }), C.current.set(ce.id, { ct: bt, count: 0 });
                continue;
              }
            } else
              C.current.set(ce.id, { ct: _e.currentTime, count: 0 });
            const rr = _e.currentTime - bt;
            if (Math.abs(rr) > 0.2) {
              try {
                _e.currentTime = bt;
              } catch {
              }
              _e.playbackRate = Je;
            } else if (Math.abs(rr) > 0.016) {
              const Xt = -rr * 0.25, xr = Math.max(0.03, Je * 0.06);
              _e.playbackRate = Math.max(
                Je - xr,
                Math.min(Je + xr, Je + Xt)
              );
            }
          }
        else C.current.size > 0 && C.current.clear();
        const He = !ye && !W.current ? Li(Q.currentFrame) : null;
        if (He !== null) {
          const ce = wn(He);
          if (ce && kr(ce), Sr.current !== He) {
            if (Sr.current = He, ce) {
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
                    const rr = ce.startFrame + St - ge.from, Xt = ge.sourceStart ?? ge.trimStart ?? 0, xr = ge.speed ?? 1;
                    Je.push(Xt / ge.sourceFps + rr / Pe * xr);
                  }
                  const bt = We.get(ge.src);
                  bt ? bt.push(...Je) : We.set(ge.src, Je);
                }
                for (const [ge, Je] of We)
                  so(ge, Je);
              }
            }
            At("playing_prearm", {
              targetFrame: He
            });
          }
        } else if (!ye) {
          Sr.current = null;
          const ce = W.current;
          ce && Q.currentFrame >= ce.endFrame && gr();
        }
      }
      if (!Q.isPlaying && Q.previewFrame === null && de.currentFrame !== Q.currentFrame) {
        const ye = [];
        let Le = Q.currentFrame;
        const He = Math.round(Pe * 3);
        for (const ce of jt)
          for (const _e of ce.items) {
            if (_e.type !== "video") continue;
            const mt = _e.speed ?? 1;
            if (Math.abs(mt - 1) < 0.01) continue;
            const We = _e.from + _e.durationInFrames;
            _e.from > Q.currentFrame && _e.from <= Q.currentFrame + He && (ye.push(_e.id), Le = Math.max(Le, Math.min(Q.currentFrame + He, We - 1)));
          }
        if (ye.length > 0) {
          const ce = (() => {
            for (const We of jt) {
              if (!We.items.find((St) => ye.includes(St.id))) continue;
              const Je = We.order ?? 0;
              let bt = Q.currentFrame;
              for (const St of jt)
                if (!((St.order ?? 0) >= Je))
                  for (const Xt of St.items) {
                    if (Xt.type === "audio" || Xt.type === "adjustment") continue;
                    const xr = Xt.from + Xt.durationInFrames;
                    Xt.from <= Q.currentFrame + He && xr > Q.currentFrame && (bt = Math.max(bt, xr));
                  }
              return bt;
            }
            return Q.currentFrame;
          })();
          for (const We of ye) Ne.add(We);
          const _e = Math.max(Q.currentFrame, ce - 1), mt = m.current;
          mt && "prewarmItems" in mt && mt.prewarmItems(ye, _e);
        }
      }
      if (!Q.isPlaying && Q.previewFrame === null) {
        const ye = cn(Q.currentFrame), Le = ye?.startFrame ?? qa(Q.currentFrame);
        if (Le !== null) {
          if (yt) {
            const He = ye ?? wn(Le);
            He && (kr(He), Br.current !== Le && (async () => {
              const ce = await Cr();
              ce && "prewarmItems" in ce && await ce.prewarmItems(
                [He.leftClip.id, He.rightClip.id],
                He.startFrame
              );
              for (const _e of [He.leftClip, He.rightClip])
                if (_e.type === "video" && "src" in _e && _e.src && _e.sourceFps) {
                  const mt = He.startFrame - _e.from, We = _e.sourceStart ?? _e.trimStart ?? 0, ge = _e.speed ?? 1, Je = We / _e.sourceFps + mt / Pe * ge;
                  qi(_e.src, Je);
                }
              if (!re.getState().isPlaying && ce) {
                const _e = Math.min(cs, He.endFrame - He.startFrame);
                for (let mt = 0; mt < _e && !re.getState().isPlaying; mt++) {
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
          } else ye ? (kr(ye), k.current = Q.currentFrame, ke()) : se(Le);
          Br.current !== Le && (Br.current = Le, At("paused_prearm", {
            targetFrame: Le
          }));
        } else
          (de.currentFrame !== Q.currentFrame || de.isPlaying !== Q.isPlaying) && (Br.current = null, se(null), gr());
      }
      if (Ze(Q.previewFrame)) {
        k.current = null, we.current = 0, Re.current = !1, Be.current = !1, De.current = 0, Qe.current = 0, je.current = null, N.current = [], P.current.clear(), st(), rt();
        return;
      }
      if (Q.isPlaying && !yt) {
        k.current = null, we.current = 0, Re.current = !1, Be.current = !1, De.current = 0, Qe.current = 0, je.current = null, N.current = [], P.current.clear();
        const ye = $(Q.currentFrame);
        if (ye.shouldPrewarm && (Cr(), !ye.hasActiveTransition && ye.nextTransitionStartFrame !== null && se(ye.nextTransitionStartFrame)), !(ye.hasActiveTransition || ye.shouldHoldOverlay)) {
          ye.shouldPrewarm || gr(), st(), rt();
          return;
        }
        if (at(), et.current && st(), ae(Q.currentFrame))
          return;
        if (ye.hasActiveTransition) {
          const Le = hr.current;
          Le && Le.lastEntryMissFrame !== Q.currentFrame && (Le.entryMisses += 1, Le.lastEntryMissFrame = Q.currentFrame, At("entry_miss", {
            opId: Le.opId,
            frame: Q.currentFrame,
            bufferedFrames: B.current.size
          }));
        }
        k.current = Q.currentFrame, ke();
        return;
      }
      const le = Sn(Q.currentFrame, Q), Oe = yt || le, ut = Sn(de.currentFrame, de), Nt = yt || ut, Dt = Q.previewFrame ?? (Oe ? Q.currentFrame : null), Ot = de.previewFrame ?? (Nt ? de.currentFrame : null), dt = Q.isPlaying !== de.isPlaying, Mt = Q.previewFrame !== null && Q.currentFrame === Q.previewFrame && Q.currentFrameEpoch === Q.previewFrameEpoch;
      if (Dt === Ot && !dt) return;
      if (Q.previewFrame !== null && de.previewFrame !== null) {
        const ye = Q.previewFrame - de.previewFrame;
        we.current = ye > 0 ? 1 : ye < 0 ? -1 : 0;
        const Le = Math.abs(ye);
        nt.current.scrubUpdates += 1, Le > 1 && (nt.current.scrubDroppedFrames += Le - 1);
      } else if (Dt !== null && Ot !== null) {
        const ye = Dt - Ot;
        we.current = ye > 0 ? 1 : ye < 0 ? -1 : 0;
      } else Dt !== null && (we.current = 0);
      Dt !== null && m.current && "getScrubbingCache" in m.current && m.current.getScrubbingCache()?.setEvictionHint(
        Dt,
        we.current
      );
      const kt = we.current < 0, Rt = dd(
        Dt
      ), xt = !yt && zg && we.current < 0 && !Mt && !Rt;
      if (kt !== Re.current && (Re.current = kt, N.current = [], P.current.clear()), xt !== Be.current && (Be.current = xt, k.current = null, N.current = [], P.current.clear(), xt && (st(), rt())), Be.current && Dt !== null) {
        st(), rt();
        return;
      }
      if (Dt === null) {
        k.current = null, we.current = 0, Re.current = !1, Be.current = !1, De.current = 0, Qe.current = 0, je.current = null, N.current = [], P.current.clear(), at(), f.current = !1;
        try {
          const ye = o.current?.getCurrentFrame(), Le = Number.isFinite(ye) ? Math.round(ye) : null;
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
      if (at(), k.current === Dt)
        return;
      let wt = Dt;
      if (we.current < 0 && !Mt && !Rt) {
        const ye = performance.now(), Le = Math.floor(
          Dt / Lc
        ) * Lc, He = je.current, ce = ye - Qe.current < Zg, _e = He === null ? Number.POSITIVE_INFINITY : Math.abs(Le - He);
        if (ce && _e < Jg)
          return;
        Qe.current = ye, je.current = Le, wt = Le;
      } else
        Qe.current = 0, je.current = null;
      N.current = [], P.current.clear(), k.current = wt, fe === null && !tt && ke();
    }), _t = Xe.subscribe((Q, de) => {
      if (Ze(re.getState().previewFrame) || !yt) return;
      const le = Q.preview !== de.preview, Oe = Q.previewTransform !== de.previewTransform;
      if (!le && !(Oe && Q.activeGizmo)) return;
      const Nt = re.getState().currentFrame;
      (le || Oe) && m.current && m.current.invalidateFrameCache({ frames: [Nt] }), k.current = Nt, ke();
    }), Lt = Fr.subscribe((Q, de) => {
      if (Q.previewCornerPin === de.previewCornerPin) return;
      const le = re.getState();
      if (!yt && !Sn(le.currentFrame, le)) return;
      const Oe = le.currentFrame;
      m.current && m.current.invalidateFrameCache({ frames: [Oe] }), k.current = Oe, ke();
    }), nr = ze.subscribe((Q, de) => {
      const le = Q.previewVertices !== de.previewVertices, Oe = Q.editingItemId !== de.editingItemId;
      if (!le && !Oe) return;
      const ut = re.getState();
      if (Ze(ut.previewFrame)) return;
      const Nt = ut.previewFrame ?? ut.currentFrame;
      !yt && ut.previewFrame === null && !Sn(Nt, ut) || (m.current && m.current.invalidateFrameCache({ frames: [Nt] }), k.current = Nt, ke());
    }), Tt = re.getState();
    if (Tt.isPlaying && yt) {
      const Q = cn(Tt.currentFrame);
      if (Q)
        kr(Q), Sr.current = Q.startFrame;
      else {
        const de = Li(Tt.currentFrame);
        if (de !== null) {
          Sr.current = de;
          const le = wn(de);
          le && kr(le);
        }
      }
    }
    if (!Tt.isPlaying && Tt.previewFrame === null) {
      const Q = cn(Tt.currentFrame), de = Q?.startFrame ?? qa(Tt.currentFrame);
      if (de !== null) {
        if (Br.current = de, yt) {
          const le = wn(de);
          le && (kr(le), (async () => {
            const Oe = await Cr();
            if (Oe && "prewarmItems" in Oe && await Oe.prewarmItems(
              [le.leftClip.id, le.rightClip.id],
              le.startFrame
            ), !I.current) {
              I.current = !0;
              try {
                const ut = await md();
                ut && !re.getState().isPlaying && (await ut.renderFrame(le.startFrame), ls(le.startFrame), At("bg_prerender", { frame: le.startFrame }));
              } catch (ut) {
                Ar.debug("Background transition pre-render failed:", ut);
              } finally {
                I.current = !1;
              }
            }
          })());
        } else Q ? kr(Q) : se(de);
        At("paused_prearm", {
          targetFrame: de
        });
      }
    }
    if (Sn(Tt.currentFrame, Tt) && (k.current = Tt.currentFrame, ke()), !Tt.isPlaying && Tt.previewFrame !== null && !yt && !Ze(Tt.previewFrame)) {
      const Q = $(Tt.previewFrame);
      Q.shouldPrewarm && !Q.hasActiveTransition && Q.nextTransitionStartFrame !== null && se(Q.nextTransitionStartFrame), k.current = Tt.previewFrame, ke();
    } else if (yt) {
      const Q = re.getState(), de = $(Q.currentFrame);
      if (Q.isPlaying && de.shouldPrewarm && de.nextTransitionStartFrame !== null)
        if (yt) {
          const Oe = wn(de.nextTransitionStartFrame);
          if (Oe) {
            kr(Oe);
            const ut = m.current;
            ut && "prewarmItems" in ut && ut.prewarmItems(
              [Oe.leftClip.id, Oe.rightClip.id],
              Oe.startFrame
            );
          }
        } else
          se(de.nextTransitionStartFrame);
      const le = Q.previewFrame ?? Q.currentFrame;
      k.current = le, ke(), Q.isPlaying && yt && fe === null && (fe = requestAnimationFrame(gt));
    } else if (re.getState().isPlaying && !yt) {
      const Q = re.getState(), de = $(Q.currentFrame);
      if (de.shouldPrewarm && (Cr(), !de.hasActiveTransition && de.nextTransitionStartFrame !== null && se(de.nextTransitionStartFrame)), de.hasActiveTransition || de.shouldHoldOverlay) {
        if (ae(Q.currentFrame))
          return;
        if (de.hasActiveTransition) {
          const le = hr.current;
          le && le.lastEntryMissFrame !== Q.currentFrame && (le.entryMisses += 1, le.lastEntryMissFrame = Q.currentFrame, At("entry_miss", {
            opId: le.opId,
            frame: Q.currentFrame,
            bufferedFrames: B.current.size
          }));
        }
        k.current = Q.currentFrame, ke();
      } else
        de.shouldPrewarm || gr(), st(), rt();
    } else (Ze(re.getState().previewFrame) || re.getState().previewFrame === null) && (gr(), st(), rt());
    return () => {
      Ce.current = !1, Re.current = !1, Be.current = !1, Qe.current = 0, je.current = null, at(), Se(), gr(), rt(), fe !== null && (cancelAnimationFrame(fe), fe = null), ue.current = () => {
      }, Wt(), _t(), Lt(), nr();
    };
  }, [
    zr,
    Cr,
    Va,
    Wa,
    yt,
    Pe,
    Bi,
    at,
    gr,
    qa,
    qs,
    cn,
    st,
    rt,
    Sn,
    kr,
    Xa,
    Hr,
    vt,
    it,
    ft,
    yn,
    Ln,
    _n,
    ir,
    At,
    Xr,
    Ze,
    ot
  ]), s.useEffect(() => {
    let p = null, F = null;
    const $ = () => {
      F === null && (nt.current.preloadContinuations += 1, F = setTimeout(() => {
        F = null, ae();
      }, 16));
    }, ae = async () => {
      if (Ha.current || jt.length === 0) return;
      const Ae = nn.current > 0;
      Ae && (nn.current = Math.max(0, nn.current - 1));
      const ke = re.getState(), fe = Vn({
        isPlaying: ke.isPlaying,
        previewFrame: ke.previewFrame,
        isGizmoInteracting: te.current
      }), Ee = ma(fe, {
        currentFrame: ke.currentFrame,
        previewFrame: ke.previewFrame
      }), tt = xi.current;
      xi.current = Ee;
      const Ne = fe === "scrubbing" && tt !== null ? Vu(tt, Ee) : 0;
      if (fe === "scrubbing" && Ne < 0) {
        nt.current.preloadCandidateIds = 0, nt.current.preloadBudgetBase = Vc(fe), nt.current.preloadBudgetAdjusted = 0, nt.current.preloadWindowMaxCost = 0, nt.current.preloadScrubDirection = Ne, nt.current.preloadDirectionPenaltyCount = 0;
        return;
      }
      const { startFrame: lt, endFrame: gt } = dg({
        mode: fe,
        anchorFrame: Ee,
        scrubDirection: Ne,
        fps: Pe,
        aheadSeconds: Oc
      }), Et = Vc(fe), Wt = fe === "scrubbing" && Ne < 0 ? jg : 0, _t = Ae ? Math.min(
        Ag,
        Et + Fg + Wt
      ) : Et + Wt, Lt = Date.now(), nr = jn.current, Tt = Math.max(8, Math.round(Pe * 0.6)), Q = Math.max(
        8,
        Math.round(Pe * Eg)
      ), de = performance.now();
      let le = 0, Oe = 0, ut = !1, Nt = (ns.current % jt.length + jt.length) % jt.length, Dt = Math.max(0, ss.current);
      const Ot = /* @__PURE__ */ new Map();
      if (fe === "scrubbing") {
        for (let Rt = 0; Rt < jt.length; Rt++) {
          const xt = (Nt + Rt) % jt.length, ye = jt[xt].items;
          if (ye.length === 0) continue;
          const Le = Ne < 0 ? -1 : 1;
          let He = v0(
            ye,
            Ee,
            Ne
          );
          for (; He >= 0 && He < ye.length; ) {
            const ce = ye[He];
            if (!ce.mediaId) {
              He += Le;
              continue;
            }
            const _e = ce.from + ce.durationInFrames;
            if (ce.from <= gt && _e >= lt && nr.has(ce.mediaId) && os(ce.mediaId) <= Lt) {
              const mt = On.get(ce.mediaId) ?? 1;
              mt > le && (le = mt);
              let ge = (Ee < ce.from ? ce.from - Ee : Ee > _e ? Ee - _e : 0) + mt * Tt;
              if (Ne !== 0) {
                const bt = ce.from + ce.durationInFrames * 0.5;
                (Ne > 0 ? bt >= Ee : bt <= Ee) || (ge += Q, Oe += 1);
              }
              const Je = Ot.get(ce.mediaId);
              (Je === void 0 || ge < Je) && Ot.set(ce.mediaId, ge);
            }
            if (performance.now() - de >= _c) {
              ns.current = xt, ss.current = 0, ut = !0;
              break;
            }
            He += Le;
          }
          if (ut) break;
        }
        ut || (ns.current = (Nt + 1) % jt.length, ss.current = 0);
      } else {
        for (let Rt = 0; Rt < jt.length; Rt++) {
          const wt = jt[Nt].items, ye = Rt === 0 ? Dt : 0;
          for (let Le = ye; Le < wt.length; Le++) {
            const He = wt[Le];
            if (!He.mediaId) continue;
            const ce = He.from + He.durationInFrames;
            if (He.from <= gt && ce >= lt && nr.has(He.mediaId) && os(He.mediaId) <= Lt) {
              const _e = On.get(He.mediaId) ?? 1;
              _e > le && (le = _e);
              let We = (Ee < He.from ? He.from - Ee : Ee > ce ? Ee - ce : 0) + _e * Tt;
              if (Ne !== 0) {
                const Je = He.from + He.durationInFrames * 0.5;
                (Ne > 0 ? Je >= Ee : Je <= Ee) || (We += Q, Oe += 1);
              }
              const ge = Ot.get(He.mediaId);
              (ge === void 0 || We < ge) && Ot.set(He.mediaId, We);
            }
            if (performance.now() - de >= _c) {
              let _e = Nt, mt = Le + 1;
              mt >= wt.length && (_e = (Nt + 1) % jt.length, mt = 0), ns.current = _e, ss.current = mt, ut = !0;
              break;
            }
          }
          if (ut) break;
          Nt = (Nt + 1) % jt.length, Dt = 0;
        }
        ut || (ns.current = Nt, ss.current = 0);
      }
      const dt = performance.now() - de;
      nt.current.preloadScanSamples += 1, nt.current.preloadScanTotalMs += dt, nt.current.preloadScanLastMs = dt, ut && (nt.current.preloadScanBudgetYields += 1);
      const Mt = Wc(_t, le);
      if (nt.current.preloadCandidateIds = Ot.size, nt.current.preloadBudgetBase = Et, nt.current.preloadBudgetAdjusted = Mt, nt.current.preloadWindowMaxCost = le, nt.current.preloadScrubDirection = Ne, nt.current.preloadDirectionPenaltyCount = Oe, Ot.size === 0) {
        (ut || nn.current > 0) && $();
        return;
      }
      const kt = [...Ot.entries()].sort((Rt, xt) => Rt[1] - xt[1]).slice(0, Mt).map(([Rt]) => Rt);
      Ha.current = !0;
      try {
        const Rt = performance.now(), { resolvedEntries: xt, failedIds: wt } = await Bs(kt), ye = performance.now() - Rt;
        if (nt.current.preloadBatchSamples += 1, nt.current.preloadBatchTotalMs += ye, nt.current.preloadBatchLastMs = ye, nt.current.preloadBatchLastIds = kt.length, xt.length > 0) {
          const Le = [], He = [];
          for (const ce of xt)
            jn.current.has(ce.mediaId) && (Le.push(ce.mediaId), He.push(ce));
          Gr((ce) => {
            const _e = new Map(ce);
            let mt = !1;
            for (const We of He)
              _e.get(We.mediaId) !== We.url && (_e.set(We.mediaId, We.url), mt = !0);
            return mt ? _e : ce;
          }), an(Le), _s(Le);
        }
        if (wt.length > 0) {
          const Le = Ls(wt);
          Le !== null && Zr(Le);
        }
      } finally {
        Ha.current = !1, (ut || nn.current > 0) && $();
      }
    }, se = () => {
      nn.current = Math.max(
        nn.current,
        Dg
      ), ae();
    };
    ae();
    const Se = re.subscribe((Ae, ke) => {
      const fe = Go({
        prev: {
          isPlaying: ke.isPlaying,
          previewFrame: ke.previewFrame,
          currentFrame: ke.currentFrame,
          isGizmoInteracting: te.current
        },
        next: {
          isPlaying: Ae.isPlaying,
          previewFrame: Ae.previewFrame,
          currentFrame: Ae.currentFrame,
          isGizmoInteracting: te.current
        },
        fps: Pe
      }), Ee = fe.next.mode, tt = fe.preloadBurstTrigger;
      if (fe.enteredPlaying)
        Fe.current = 0, De.current = 0, ae(), p = setInterval(() => {
          ae();
        }, 1e3);
      else if (tt === "scrub_enter")
        Fe.current = 0, De.current = 0, se(), is();
      else if (Ee === "scrubbing" && fe.previewFrameChanged) {
        const Ne = (Ae.previewFrame ?? 0) - (ke.previewFrame ?? 0);
        if (Ne < 0)
          return;
        if (Ne > 0) {
          const lt = performance.now();
          if (lt - Fe.current < Ng)
            return;
          Fe.current = lt;
        }
        ae();
      } else Ee !== "playing" && Ee !== "scrubbing" && fe.currentFrameChanged ? (Fe.current = 0, De.current = 0, tt === "paused_short_seek" ? se() : ae(), is()) : fe.exitedPlaying && (Fe.current = 0, De.current = 0, p && (clearInterval(p), p = null));
    });
    return () => {
      Se(), p && clearInterval(p), F !== null && clearTimeout(F), Fe.current = 0, De.current = 0, nn.current = 0;
    };
  }, [
    an,
    Pe,
    jt,
    os,
    Ls,
    On,
    is,
    Bs,
    _s,
    Zr
  ]), s.useEffect(() => {
    let p = 0;
    const F = 3e4, $ = async () => {
      if (document.hidden) {
        p = Date.now();
        return;
      }
      if (p === 0 || Date.now() - p < F)
        return;
      try {
        await zd.refreshAllBlobUrls();
      } catch {
      }
      Yi.invalidateAll();
      const ae = /* @__PURE__ */ new Map();
      Dn(), Gr(ae), as(ae), Ds((se) => se + 1);
    };
    return document.addEventListener("visibilitychange", $), () => {
      document.removeEventListener("visibilitychange", $);
    };
  }, [as, Dn]), s.useEffect(() => () => {
    Ce.current = !1, Dn(), zr();
  }, [zr, Dn]);
  const ln = s.useMemo(() => {
    const p = t.width / t.height;
    if (Nr === -1) {
      if (n.width > 0 && n.height > 0) {
        const ae = n.width / n.height;
        let se, Se;
        return ae > p ? (Se = n.height, se = Se * p) : (se = n.width, Se = se / p), { width: se, height: Se };
      }
      return { width: t.width, height: t.height };
    }
    const F = t.width * Nr, $ = t.height * Nr;
    return { width: F, height: $ };
  }, [t.width, t.height, Nr, n]), hd = s.useMemo(() => Nr === -1 || n.width === 0 || n.height === 0 ? !1 : ln.width > n.width || ln.height > n.height, [Nr, ln, n]);
  s.useLayoutEffect(() => {
    if (a) return;
    const p = c.current;
    if (!p) return;
    const F = () => {
      const se = c.current;
      if (!se) return;
      const Se = se.getBoundingClientRect();
      queueMicrotask(() => {
        It((Ae) => Ae && I0(Ae, Se) ? Ae : Se);
      });
    }, $ = () => {
      i.current === null && (i.current = requestAnimationFrame(() => {
        i.current = null, F();
      }));
    };
    $();
    const ae = new ResizeObserver($);
    return ae.observe(p), window.addEventListener("scroll", $, !0), () => {
      i.current !== null && (cancelAnimationFrame(i.current), i.current = null), ae.disconnect(), window.removeEventListener("scroll", $, !0);
    };
  }, [a]);
  const Vi = s.useRef(null), Wi = s.useCallback((p) => {
    if (js) {
      p.stopPropagation();
      return;
    }
    Fl() || p.target.closest("[data-gizmo]") || Pt.getState().clearItemSelection();
  }, [js]), pd = s.useCallback((p) => {
    const F = Math.round(p);
    ht(F), it(F);
    const $ = ee.current;
    if ($ !== null && F !== $) {
      ft();
      return;
    }
    if (bn.current) return;
    const ae = re.getState(), se = Vn({
      isPlaying: ae.isPlaying,
      previewFrame: ae.previewFrame,
      isGizmoInteracting: te.current
    });
    if (se === "scrubbing") return;
    if (se === "playing") {
      const ke = performance.now(), fe = ie.current;
      if (fe && F !== fe.frame) {
        const Ee = Math.max(1, Math.abs(F - fe.frame)), tt = ke - fe.tsMs;
        if (tt > 0) {
          const Ne = kg({
            state: Z.current,
            sampleMsPerFrame: tt / Ee,
            frameBudgetMs: Sg(Pe, ae.playbackRate),
            userQuality: ae.previewQuality,
            nowMs: ke,
            allowRecovery: !1
          });
          Z.current = Ne.state, Ne.qualityChanged && (Ne.qualityChangeDirection === "degrade" ? nt.current.adaptiveQualityDowngrades += 1 : Ne.qualityChangeDirection === "recover" && (nt.current.adaptiveQualityRecovers += 1), Te(Ne.state.qualityCap));
        }
      }
      ie.current = { frame: F, tsMs: ke };
    } else
      ie.current = null, (Z.current.overBudgetSamples !== 0 || Z.current.underBudgetSamples !== 0) && (Z.current = {
        ...Z.current,
        overBudgetSamples: 0,
        underBudgetSamples: 0
      });
    const { currentFrame: Se, setCurrentFrame: Ae } = ae;
    Se !== F && Ae(F);
  }, [
    Pe,
    it,
    ht,
    ft
  ]), gd = s.useCallback((p) => {
    p ? re.getState().play() : re.getState().pause();
  }, []);
  return Bt?.renderSourceHistory[Bt.renderSourceHistory.length - 1], /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: Vi,
      className: "w-full h-full panel-bg relative",
      style: { overflow: hd ? "auto" : "visible" },
      onClick: Wi,
      role: "img",
      "aria-label": "Video preview",
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "flex min-h-full w-full flex-col items-center justify-end",
          style: {
            paddingLeft: `calc(${qe.previewPadding} / 2)`,
            paddingRight: `calc(${qe.previewPadding} / 2)`,
            paddingBottom: 6
          },
          onClick: Wi,
          children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              ref: zt,
              "data-player-container": !0,
              className: "relative shrink-0",
              style: {
                width: `${ln.width}px`,
                height: `${ln.height}px`,
                transition: "none",
                outline: "2px solid hsl(var(--border))",
                outlineOffset: 0
              },
              onDoubleClick: (p) => p.preventDefault(),
              children: [
                Tr && /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50 z-20", children: /* @__PURE__ */ r.jsx("p", { className: "text-white text-sm", children: "Loading media..." }) }),
                /* @__PURE__ */ r.jsx(
                  Pu,
                  {
                    ref: o,
                    durationInFrames: cd,
                    fps: Pe,
                    width: on.width,
                    height: on.height,
                    autoPlay: !1,
                    loop: !1,
                    controls: !1,
                    style: {
                      width: "100%",
                      height: "100%"
                    },
                    onFrameChange: pd,
                    onPlayStateChange: gd,
                    children: /* @__PURE__ */ r.jsx(Wl, { ...ld })
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
                      visibility: Ga ? "visible" : "hidden"
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
                qr ? /* @__PURE__ */ r.jsx(eg, { fps: Pe }) : tn ? /* @__PURE__ */ r.jsx(ng, { fps: Pe }) : xn ? /* @__PURE__ */ r.jsx(og, { fps: Pe }) : jr ? /* @__PURE__ */ r.jsx(ig, { fps: Pe }) : null,
                !a && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                  /* @__PURE__ */ r.jsx(
                    Mp,
                    {
                      containerRect: Ue,
                      playerSize: ln,
                      projectSize: { width: t.width, height: t.height },
                      zoom: Nr,
                      hitAreaRef: Vi
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    _p,
                    {
                      containerRect: Ue,
                      playerSize: ln,
                      projectSize: { width: t.width, height: t.height },
                      zoom: Nr
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    Bp,
                    {
                      containerRect: Ue,
                      playerSize: ln,
                      projectSize: { width: t.width, height: t.height },
                      zoom: Nr
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
async function E0(e, t) {
  return "convertToBlob" in e ? e.convertToBlob({ type: t }) : new Promise((n, a) => {
    e.toBlob((o) => {
      if (o) {
        n(o);
        return;
      }
      a(new Error("Failed to convert frame to blob"));
    }, t);
  });
}
async function F0(e) {
  return (await fetch(e)).blob();
}
function j0(e) {
  if (typeof window < "u" && "requestIdleCallback" in window) {
    window.requestIdleCallback(() => URL.revokeObjectURL(e));
    return;
  }
  setTimeout(() => URL.revokeObjectURL(e), 0);
}
function N0(e, t) {
  const n = URL.createObjectURL(e), a = document.createElement("a");
  a.href = n, a.download = t, document.body.appendChild(a), a.click(), document.body.removeChild(a), j0(n);
}
function A0(e, t, n) {
  const a = Math.max(0, Math.round(e)), o = Number.isFinite(t) && t > 0 ? t : 30, c = Math.max(String(Math.max(0, n - 1)).length, 1), i = String(a).padStart(c, "0"), l = Gl(a, o).replaceAll(":", "-");
  return `frame-${i}-${l}.png`;
}
const kn = { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize };
function D0({ totalFrames: e, fps: t }) {
  const [n, a] = s.useState(!1), o = re((w) => w.isPlaying), c = re((w) => w.useProxy), i = re((w) => w.togglePlayPause), l = re((w) => w.setCurrentFrame), u = re((w) => w.setPreviewFrame), d = re((w) => w.setDisplayedFrame), f = re((w) => w.toggleUseProxy), m = Math.max(0, e - 1), b = (w) => {
    u(null), d(null), l(w);
  }, h = () => b(0), x = () => b(m), v = () => {
    const w = re.getState().currentFrame;
    b(Math.max(0, w - 1));
  }, S = () => {
    const w = re.getState().currentFrame;
    b(Math.min(m, w + 1));
  }, y = async () => {
    if (!n) {
      a(!0);
      try {
        const w = re.getState(), k = w.previewFrame ?? w.currentFrame, R = A0(k, t, e);
        let O = null, L, I;
        if (w.captureCanvasSource) {
          const j = await w.captureCanvasSource();
          j && (O = await E0(j, "image/png"), L = j.width, I = j.height);
        }
        if (!O && w.captureFrame) {
          const j = await w.captureFrame({
            format: "image/png",
            quality: 1,
            fullResolution: !0
          });
          j && (O = await F0(j));
        }
        if (!O) {
          Zt.error("Failed to capture the current frame.");
          return;
        }
        N0(O, R);
        const N = Qt.getState().currentProjectId;
        if (!N) {
          Zt.error("Downloaded the frame, but no project is selected for media library import.");
          return;
        }
        const P = new File([O], R, {
          type: "image/png",
          lastModified: Date.now()
        }), T = await Zo.importGeneratedImage(P, N, {
          width: L,
          height: I,
          tags: ["frame-capture"],
          codec: "png"
        });
        Qt.setState((j) => ({
          mediaItems: [T, ...j.mediaItems]
        })), Zt.success(`Saved "${T.fileName}" to the media library and started the download.`);
      } catch (w) {
        const k = w instanceof Error ? w.message : "Failed to save frame.";
        Zt.error(`Downloaded frame, but could not save it to the media library. ${k}`);
      } finally {
        a(!1);
      }
    }
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 flex-shrink-0", children: [
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "flex-shrink-0",
          style: kn,
          onClick: h,
          "data-tooltip": "Go to Start (Home)",
          "aria-label": "Go to start",
          children: /* @__PURE__ */ r.jsx(zl, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "flex-shrink-0",
          style: kn,
          onClick: v,
          "data-tooltip": "Previous Frame (Left Arrow)",
          "aria-label": "Previous frame",
          children: /* @__PURE__ */ r.jsx(Ts, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          size: "icon",
          className: "flex-shrink-0",
          style: kn,
          onClick: i,
          "data-tooltip": o ? "Pause (Space)" : "Play (Space)",
          "aria-label": o ? "Pause" : "Play",
          children: o ? /* @__PURE__ */ r.jsx($l, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(Kl, { className: "w-3.5 h-3.5 ml-0.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "flex-shrink-0",
          style: kn,
          onClick: S,
          "data-tooltip": "Next Frame (Right Arrow)",
          "aria-label": "Next frame",
          children: /* @__PURE__ */ r.jsx(Es, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "flex-shrink-0",
          style: kn,
          onClick: x,
          "data-tooltip": "Go to End (End)",
          "aria-label": "Go to end",
          children: /* @__PURE__ */ r.jsx(Yl, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "hidden @min-[440px]:flex items-center gap-1.5 flex-shrink-0 pl-1", children: /* @__PURE__ */ r.jsx(
      ve,
      {
        variant: "ghost",
        size: "icon",
        className: "flex-shrink-0",
        style: kn,
        onClick: () => {
          y();
        },
        disabled: n,
        "data-tooltip": n ? "Saving Frame..." : "Save Frame",
        "aria-label": n ? "Saving frame" : "Save frame",
        children: n ? /* @__PURE__ */ r.jsx(mu, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ r.jsx($d, { className: "w-3.5 h-3.5" })
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: "hidden @min-[440px]:flex items-center gap-1.5 flex-shrink-0 pl-1", children: /* @__PURE__ */ r.jsx(
      ve,
      {
        variant: "ghost",
        size: "icon",
        style: kn,
        className: `flex-shrink-0 ${c ? "text-green-500 hover:text-green-400 hover:bg-green-500/10" : "text-muted-foreground hover:text-foreground"}`,
        onClick: f,
        "data-tooltip": c ? "Proxy Playback: On" : "Proxy Playback: Off",
        "aria-label": c ? "Disable proxy playback" : "Enable proxy playback",
        children: /* @__PURE__ */ r.jsx(Kd, { className: "w-3.5 h-3.5" })
      }
    ) })
  ] });
}
function O0({ fps: e, totalFrames: t }) {
  const [n, a] = s.useState(!1), o = s.useRef(null), c = Math.max(t.toString().length, 1), i = Math.max(c, 8), l = Math.max(0, t - 1), u = `calc(${i * 2 + 1}ch + 0.75rem)`, d = s.useRef(n);
  d.current = n;
  const f = s.useRef(e);
  f.current = e;
  const m = s.useRef(t);
  m.current = t;
  const b = s.useCallback((h) => {
    const x = Math.max(m.current.toString().length, 1);
    return h.toString().padStart(x, "0");
  }, []);
  return s.useEffect(() => {
    const h = (x) => {
      o.current && (o.current.textContent = d.current ? b(x) : zn(x, f.current));
    };
    return h(re.getState().currentFrame), re.subscribe((x) => {
      h(x.currentFrame);
    });
  }, [b]), s.useEffect(() => {
    if (!o.current) return;
    const h = re.getState().currentFrame;
    o.current.textContent = n ? b(h) : zn(h, e);
  }, [n, e, b]), /* @__PURE__ */ r.jsxs(
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
            children: n ? b(re.getState().currentFrame) : zn(re.getState().currentFrame, e)
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground/50", children: "/" }),
        /* @__PURE__ */ r.jsx("span", { children: n ? b(l) : zn(l, e) })
      ]
    }
  );
}
const _0 = [
  { label: "Auto", value: "fit" },
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 }
];
function L0() {
  const e = re((i) => i.zoom), t = re((i) => i.setZoom), n = s.useCallback(
    (i) => {
      i.value === "fit" ? t(-1) : t(i.value);
    },
    [t]
  ), a = s.useCallback(() => {
    t(Math.min(2, Number((e * 1.2).toFixed(2))));
  }, [e, t]), o = s.useCallback(() => {
    t(Math.max(0.1, Number((e / 1.2).toFixed(2))));
  }, [e, t]), c = s.useCallback(() => {
    t(1);
  }, [t]);
  return {
    zoom: e,
    setZoom: t,
    zoomPresets: _0,
    handlePresetZoom: n,
    zoomIn: a,
    zoomOut: o,
    resetZoom: c
  };
}
function B0() {
  const { zoom: e, zoomPresets: t, handlePresetZoom: n } = L0(), a = s.useRef(null), o = e === -1 ? "Auto" : t.find((i) => i.value === e)?.label || `${Math.round(e * 100)}%`, c = s.useCallback(() => {
    a.current?.blur();
  }, []);
  return /* @__PURE__ */ r.jsxs(
    ql,
    {
      onOpenChange: (i) => {
        i || requestAnimationFrame(c);
      },
      children: [
        /* @__PURE__ */ r.jsx(Xl, { asChild: !0, children: /* @__PURE__ */ r.jsxs(
          ve,
          {
            ref: a,
            variant: "ghost",
            className: "flex-shrink-0 text-muted-foreground hover:text-foreground gap-1 px-1.5",
            style: { height: qe.previewControlButtonSize },
            "data-tooltip": `Zoom: ${o}`,
            "aria-label": `Preview zoom: ${o}`,
            onKeyDown: (i) => {
              (i.key === " " || i.code === "Space") && i.preventDefault();
            },
            children: [
              /* @__PURE__ */ r.jsx(Yd, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ r.jsx("span", { className: "text-[10px] leading-none", children: o })
            ]
          }
        ) }),
        /* @__PURE__ */ r.jsx(
          Zl,
          {
            align: "end",
            onCloseAutoFocus: (i) => {
              i.preventDefault(), requestAnimationFrame(c);
            },
            children: t.map((i) => /* @__PURE__ */ r.jsx(
              Jl,
              {
                className: "text-xs",
                onSelect: () => n(i),
                children: /* @__PURE__ */ r.jsx("span", { className: e === i.value || i.value === "fit" && e === -1 ? "font-semibold" : "", children: i.label })
              },
              i.label
            ))
          }
        )
      ]
    }
  );
}
let H0 = 0, U0 = 0, vo = null;
const G0 = 2, V0 = 90, Xc = 1 / 60, W0 = 6;
function z0() {
  return vo || (vo = new Ul()), vo;
}
function $0(e) {
  return Math.round(e / Xc) * Xc;
}
function zu(e, t, n) {
  return Math.abs(e - t) * n >= W0;
}
function K0(e, t) {
  const n = re((o) => o.useProxy), a = Qt((o) => e ? o.proxyStatus.get(e) ?? null : null);
  return s.useMemo(() => t ? n && e && Jo(e) || t : "", [e, a, t, n]);
}
function $u({ mediaId: e, src: t, mediaType: n, fileName: a }) {
  return n === "video" ? /* @__PURE__ */ r.jsx(Y0, { mediaId: e, src: t }) : n === "image" ? /* @__PURE__ */ r.jsx(q0, { src: t }) : /* @__PURE__ */ r.jsx(X0, { src: t, fileName: a });
}
function Y0({ mediaId: e, src: t }) {
  const n = K0(e, t), a = Fs(), o = Qo(), c = Ql(), i = s.useRef(null), l = s.useRef(null), u = s.useRef(ga()), d = s.useRef(`source-monitor-${++H0}`), f = s.useRef(z0()), m = s.useRef(`source-monitor-strict-${++U0}`), b = s.useRef(null), h = s.useRef(null), x = s.useRef(null), v = s.useRef(!0), S = s.useRef(!1), y = s.useRef(!1), w = s.useRef(null), k = s.useRef(0), R = s.useRef(0), O = s.useRef(/* @__PURE__ */ new Map()), L = s.useRef([]), { fps: I } = eu(), N = s.useRef(a.currentFrame), P = s.useRef(o), T = `${e ?? "source-monitor"}:${m.current}`, [j, E] = s.useState(!1), [A, z] = s.useState(!1), [M, q] = s.useState(!1);
  s.useEffect(() => {
    P.current = o;
  }, [o]), s.useEffect(() => (v.current = !0, () => {
    v.current = !1;
    for (const Y of O.current.values())
      Y.close();
    O.current.clear(), L.current = [];
  }), []), s.useEffect(() => {
    E(!1), q(!1);
  }, [n, e]);
  const V = s.useCallback(async (Y) => {
    const pe = b.current, C = h.current;
    if (!pe || !C) return !1;
    let B = x.current;
    if (!B) {
      if (B = C.getContext("2d"), !B) return !1;
      x.current = B;
    }
    const { width: U, height: J } = pe.getDimensions(), ne = Math.max(1, Math.round(U || 640)), me = Math.max(1, Math.round(J || 360));
    (C.width !== ne || C.height !== me) && (C.width = ne, C.height = me);
    const xe = $0(Y), we = O.current, Re = L.current, Be = we.get(xe);
    if (Be) {
      B.clearRect(0, 0, C.width, C.height), B.drawImage(Be, 0, 0, C.width, C.height);
      const De = Re.indexOf(xe);
      return De !== -1 && (Re.splice(De, 1), Re.push(xe)), !0;
    }
    if (!await pe.drawFrame(
      B,
      Math.max(0, Y),
      0,
      0,
      C.width,
      C.height
    )) return !1;
    try {
      const De = await createImageBitmap(C);
      for (we.set(xe, De), Re.push(xe); Re.length > V0; ) {
        const Qe = Re.shift();
        if (Qe === void 0) break;
        const je = we.get(Qe);
        je && (je.close(), we.delete(Qe));
      }
    } catch {
    }
    return !0;
  }, []), X = s.useCallback(() => {
    if (y.current) return;
    y.current = !0, (async () => {
      try {
        for (; S.current && w.current !== null && v.current && !P.current; ) {
          const pe = w.current;
          if (w.current = null, await V(pe).catch(() => !1)) {
            R.current = 0, q(!0);
            continue;
          }
          if ((b.current?.getLastFailureKind() ?? "decode-error") === "decode-error" && (R.current += 1, R.current >= G0)) {
            S.current = !1, z(!1), E((U) => U || !0);
            return;
          }
        }
      } finally {
        y.current = !1, S.current && w.current !== null && v.current && !P.current && queueMicrotask(() => {
          v.current && X();
        });
      }
    })();
  }, [V]);
  s.useEffect(() => {
    if (!n) return;
    const Y = u.current, pe = d.current;
    Y.preloadSource(n).catch(() => {
    });
    const C = Y.acquireForClip(pe, n);
    if (!C) return;
    C.muted = !1, C.volume = 1, C.playsInline = !0, C.style.width = "100%", C.style.height = "100%", C.style.objectFit = "contain", C.style.display = "block", C.style.position = "absolute", C.style.top = "0", C.style.left = "0";
    const B = i.current;
    return B && C.parentElement !== B && B.appendChild(C), l.current = C, () => {
      C.pause(), C.parentElement && C.parentElement.removeChild(C), Y.releaseClip(pe), l.current = null;
    };
  }, [n]), s.useEffect(() => {
    S.current = !1, z(!1), q(!1), b.current = null, w.current = null, R.current = 0, x.current = null;
    for (const B of O.current.values())
      B.close();
    if (O.current.clear(), L.current = [], !n) return;
    const Y = f.current, pe = Y.getOrCreateItemExtractor(T, n);
    b.current = pe;
    let C = !1;
    return pe.init().then((B) => {
      if (!(C || !v.current)) {
        if (!B) {
          E((U) => U || !0);
          return;
        }
        S.current = !0, z(!0), w.current = k.current, P.current || X();
      }
    }).catch(() => {
      C || !v.current || E((B) => B || !0);
    }), () => {
      C = !0, S.current = !1, z(!1), b.current = null, w.current = null, Y.releaseItem(T);
    };
  }, [n, T, X]);
  const D = s.useCallback((Y) => {
    const pe = l.current, C = Y / I;
    if (k.current = C, N.current = Y, !P.current && !j && (w.current = C, S.current && X()), !(!pe || !n || !(pe.readyState >= 1)) && !(!P.current && A && M && !j)) {
      if (P.current) {
        if (!zu(pe.currentTime, C, I))
          return;
        try {
          pe.currentTime = C;
        } catch {
        }
        return;
      }
      try {
        u.current.seekClip(d.current, Y / I, { fast: !0 });
      } catch {
      }
    }
  }, [n, I, M, X, A, j]);
  s.useEffect(() => (D(a.currentFrame), a.onFrameChange((Y) => {
    D(Y);
  })), [a, D]), s.useEffect(() => {
    D(a.currentFrame);
  }, [a, o, D]), s.useEffect(() => {
    const Y = l.current;
    if (!(!Y || !n))
      if (o) {
        if (Y.playbackRate = c, Y.readyState >= 1)
          try {
            Y.currentTime = k.current;
          } catch {
          }
        Y.play().catch(() => {
        });
      } else
        Y.pause();
  }, [n, c, o]);
  const W = !o && A && M && !j;
  return /* @__PURE__ */ r.jsxs(ei, { children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: i,
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
function q0({ src: e }) {
  return /* @__PURE__ */ r.jsx(ei, { children: /* @__PURE__ */ r.jsx(
    "img",
    {
      src: e,
      style: { width: "100%", height: "100%", objectFit: "contain" },
      alt: "Source preview"
    }
  ) });
}
function X0({ src: e, fileName: t }) {
  const n = s.useRef(null), a = Fs(), o = Qo(), c = Ql(), { fps: i } = eu(), l = s.useRef(a.currentFrame), u = s.useCallback((d) => {
    const f = n.current;
    if (!f || !e) return;
    const m = d / i;
    if (l.current = d, f.readyState >= 1 && !(o && !zu(f.currentTime, m, i)))
      try {
        f.currentTime = m;
      } catch {
      }
  }, [i, o, e]);
  return s.useEffect(() => (u(a.currentFrame), a.onFrameChange((d) => {
    u(d);
  })), [a, u]), s.useEffect(() => {
    u(a.currentFrame);
  }, [a, o, u]), s.useEffect(() => {
    const d = n.current;
    if (!(!d || !e))
      if (o) {
        if (d.playbackRate = c, d.readyState >= 1)
          try {
            d.currentTime = l.current / i;
          } catch {
          }
        d.play().catch(() => {
        });
      } else
        d.pause();
  }, [o, c, e, i]), /* @__PURE__ */ r.jsxs(ei, { style: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1a1a2e" }, children: [
    /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }, children: [
      /* @__PURE__ */ r.jsx(qd, { style: { width: 48, height: 48, color: "#22c55e" } }),
      /* @__PURE__ */ r.jsx("span", { style: { color: "#a1a1aa", fontSize: 14, maxWidth: 200, textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: t })
    ] }),
    /* @__PURE__ */ r.jsx("audio", { ref: n, src: e, preload: "auto" })
  ] });
}
const Z0 = 33, J0 = s.memo(function({
  mediaId: t,
  onClose: n,
  variant: a = "panel",
  interactive: o = !0,
  seekFrame: c = null
}) {
  const [i, l] = s.useState(""), u = Qt((x) => x.mediaItems.find((v) => v.id === t));
  if (s.useEffect(() => {
    if (o)
      return Jt.getState().setCurrentMediaId(t), () => {
        Jt.getState().setCurrentMediaId(null);
      };
  }, [o, t]), s.useEffect(() => {
    u || n?.();
  }, [u, n]), s.useEffect(() => {
    let x = !1;
    return pn(t).then((v) => {
      x || l(v);
    }).catch(() => {
    }), () => {
      x = !0;
    };
  }, [t]), !u) return null;
  const d = Ia(u.mimeType);
  if (d === "unknown") return null;
  const f = u.fps || 30, m = u.width || 640, b = u.height || 360, h = d === "image" ? 1 : Math.max(1, Math.round(u.duration * f));
  return /* @__PURE__ */ r.jsx(ja, { children: /* @__PURE__ */ r.jsx(
    Ca,
    {
      fps: f,
      durationInFrames: h,
      onVolumeChange: () => {
      },
      children: /* @__PURE__ */ r.jsx(
        Ma,
        {
          fps: f,
          width: m,
          height: b,
          durationInFrames: h,
          children: /* @__PURE__ */ r.jsx(
            Q0,
            {
              mediaId: t,
              src: i,
              mediaType: d,
              hasAudio: d === "video" && !!u.audioCodec,
              fileName: u.fileName,
              mediaWidth: m,
              mediaHeight: b,
              durationInFrames: h,
              fps: f,
              variant: a,
              interactive: o,
              seekFrame: c,
              onClose: n
            }
          )
        }
      )
    }
  ) });
});
function Q0({
  mediaId: e,
  src: t,
  mediaType: n,
  hasAudio: a,
  fileName: o,
  mediaWidth: c,
  mediaHeight: i,
  durationInFrames: l,
  fps: u,
  variant: d,
  interactive: f,
  seekFrame: m,
  onClose: b
}) {
  const h = s.useRef(null), x = s.useRef(null), v = s.useRef(null), S = s.useRef(null), y = ts((j) => j.editorDensity), w = Ta(y), k = s.useCallback(() => {
    const j = h.current, E = x.current, A = v.current;
    if (!j || !E || !A) return;
    const z = Math.max(0, j.clientWidth - w.previewPadding), M = Math.max(0, j.clientHeight - w.previewPadding), q = z > 0 && M > 0 ? Math.min(z / c, M / i) : 1, V = c * q, X = i * q, D = S.current;
    D && D.scaledWidth === V && D.scaledHeight === X && D.scale === q || (S.current = {
      scaledWidth: V,
      scaledHeight: X,
      scale: q
    }, E.style.width = `${V}px`, E.style.height = `${X}px`, E.style.marginLeft = `${-V / 2}px`, E.style.marginTop = `${-X / 2}px`, A.style.width = `${c}px`, A.style.height = `${i}px`, A.style.transform = `scale(${q})`);
  }, [w.previewPadding, c, i]);
  s.useEffect(() => {
    const j = h.current;
    if (!j) return;
    let E = null, A = 0;
    const z = () => {
      E === null && (E = requestAnimationFrame(() => {
        const q = performance.now();
        if (q - A < Z0) {
          E = requestAnimationFrame(() => {
            E = null, A = performance.now(), k();
          });
          return;
        }
        E = null, A = q, k();
      }));
    }, M = new ResizeObserver(z);
    return M.observe(j), k(), () => {
      M.disconnect(), E !== null && cancelAnimationFrame(E);
    };
  }, [k]), s.useEffect(() => {
    if (!t) return;
    const j = requestAnimationFrame(() => {
      k();
    });
    return () => {
      cancelAnimationFrame(j);
    };
  }, [t, k]);
  const R = Jt((j) => j.setHoveredPanel), O = Jt((j) => j.setPlayerMethods);
  s.useEffect(() => {
    if (f)
      return () => {
        R(null), O(null);
      };
  }, [f, R, O]);
  const L = s.useRef(null), I = s.useRef(!1), N = s.useCallback((j) => {
    if (!f || j.target instanceof HTMLInputElement || j.target instanceof HTMLTextAreaElement) return;
    const { currentSourceFrame: E, setInPoint: A, setOutPoint: z, clearInOutPoints: M } = Jt.getState();
    j.key === "i" || j.key === "I" ? (j.preventDefault(), j.stopPropagation(), A(E)) : j.key === "o" || j.key === "O" ? (j.preventDefault(), j.stopPropagation(), z(E)) : j.altKey && (j.key === "x" || j.key === "X") && (j.preventDefault(), j.stopPropagation(), M());
  }, [f]), P = s.useCallback(() => {
    if (!f) return;
    R("source");
    const j = document.activeElement;
    (j === document.body || L.current?.contains(j)) && (L.current?.focus(), I.current = !0);
  }, [f, R]), T = s.useCallback(() => {
    f && (R(null), I.current && (L.current?.blur(), I.current = !1));
  }, [f, R]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: L,
      tabIndex: -1,
      className: "flex-1 flex flex-col min-w-0 outline-none",
      onMouseEnter: P,
      onMouseLeave: T,
      onKeyDown: N,
      children: [
        d === "panel" && /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "flex items-center px-3 justify-between shrink-0",
            style: { height: qe.previewSplitHeaderHeight },
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
                  children: /* @__PURE__ */ r.jsx(tu, { className: "w-3.5 h-3.5 text-muted-foreground" })
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
                      $u,
                      {
                        mediaId: e,
                        src: t,
                        mediaType: n,
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
          ex,
          {
            durationInFrames: l,
            fps: u,
            mediaType: n,
            hasAudio: a,
            interactive: f,
            seekFrame: m
          }
        )
      ]
    }
  );
}
function ex({
  durationInFrames: e,
  fps: t,
  mediaType: n,
  hasAudio: a,
  interactive: o,
  seekFrame: c
}) {
  const i = Fs(), l = Ru(e), u = Qo(), d = Math.max(0, e - 1), f = Yt((ee) => ee.tracks), m = Pt((ee) => ee.activeTrackId), b = Ct((ee) => ee.sourcePatchVideoEnabled), h = Ct((ee) => ee.sourcePatchAudioEnabled), x = Ct((ee) => ee.toggleSourcePatchVideoEnabled), v = Ct((ee) => ee.toggleSourcePatchAudioEnabled), S = s.useRef(i.currentFrame), y = s.useRef(null), w = s.useRef(null), k = s.useRef(Jt.getState().outPoint), [R, O] = s.useState(!1), L = s.useRef(R);
  L.current = R;
  const I = Math.max(e.toString().length, 1), N = s.useCallback(
    (ee) => ee.toString().padStart(I, "0"),
    [I]
  ), P = s.useCallback(
    (ee) => L.current ? N(ee) : zn(ee, t),
    [t, N]
  ), T = s.useCallback((ee) => {
    if (S.current = ee, o && Jt.getState().setCurrentSourceFrame(ee), y.current) {
      const Ge = d > 0 ? ee / d * 100 : 0;
      y.current.style.width = `${Ge}%`;
    }
    w.current && (w.current.textContent = L.current ? N(ee) : zn(ee, t));
  }, [t, N, o, d]);
  s.useEffect(() => {
    if (!o) return;
    const ee = Jt.getState().setPlayerMethods;
    return ee({
      toggle: l.toggle,
      seek: l.seek,
      frameBack: l.frameBack,
      frameForward: l.frameForward,
      getDurationInFrames: () => e
    }), () => {
      Jt.getState().setPlayerMethods(null);
    };
  }, [e, o, l.toggle, l.seek, l.frameBack, l.frameForward]), s.useEffect(() => (T(i.currentFrame), i.onFrameChange((ee) => {
    T(ee), Re.current && i.isPlaying && k.current !== null && ee >= k.current && (l.pause(), Re.current = !1);
  })), [i, l, T]);
  const j = Jt((ee) => ee.pendingSeekFrame);
  s.useEffect(() => {
    o && j !== null && (l.seek(j), Jt.getState().setPendingSeekFrame(null));
  }, [o, j, l]), s.useEffect(() => {
    c !== null && l.seek(c);
  }, [l, c]);
  const E = Jt((ee) => ee.inPoint), A = Jt((ee) => ee.outPoint);
  s.useEffect(() => {
    k.current = A;
  }, [A]);
  const z = s.useRef(null), M = s.useRef(!1), q = s.useRef(null), V = s.useRef(null), X = s.useCallback(
    (ee) => {
      const Ge = z.current;
      if (!Ge) return;
      const H = Ge.getBoundingClientRect(), ue = Math.max(0, Math.min(1, (ee - H.left) / H.width));
      l.seek(Math.round(ue * d));
    },
    [l, d]
  ), D = s.useCallback(
    (ee) => {
      ee.preventDefault(), ee.stopPropagation(), M.current = !0, X(ee.clientX);
      const Ge = (ue) => {
        M.current && X(ue.clientX);
      }, H = () => {
        M.current = !1, q.current && (document.removeEventListener("mousemove", q.current), q.current = null), V.current && (document.removeEventListener("mouseup", V.current), V.current = null);
      };
      q.current = Ge, V.current = H, document.addEventListener("mousemove", Ge), document.addEventListener("mouseup", H);
    },
    [X]
  );
  s.useEffect(() => () => {
    q.current && (document.removeEventListener("mousemove", q.current), q.current = null), V.current && (document.removeEventListener("mouseup", V.current), V.current = null), M.current = !1;
  }, []);
  const W = o && E !== null && d > 0 ? E / d * 100 : null, Y = o && A !== null && d > 0 ? A / d * 100 : null, pe = s.useRef(null), C = s.useRef(null), B = s.useCallback(
    (ee) => {
      const Ge = pe.current;
      if (!Ge) return 0;
      const H = Ge.getBoundingClientRect(), ue = Math.max(0, Math.min(1, (ee - H.left) / H.width));
      return Math.round(ue * d);
    },
    [d]
  ), U = s.useCallback(
    (ee, Ge) => {
      ee.preventDefault(), ee.stopPropagation();
      const H = document.body.style.cursor;
      document.body.style.cursor = "col-resize";
      const ue = Jt.getState, Ce = (Me) => {
        const _ = B(Me.clientX);
        if (Ge === "in") {
          const he = ue().outPoint;
          ue().setInPoint(he !== null ? Math.min(_, he) : _);
        } else {
          const he = ue().inPoint;
          ue().setOutPoint(he !== null ? Math.max(_, he) : _);
        }
      }, Ve = () => {
        document.body.style.cursor = H, document.removeEventListener("mousemove", Ce), document.removeEventListener("mouseup", Ve), C.current = null;
      };
      C.current = Ve, document.addEventListener("mousemove", Ce), document.addEventListener("mouseup", Ve);
    },
    [B]
  ), J = s.useCallback(
    (ee) => {
      ee.preventDefault(), ee.stopPropagation();
      const Ge = Jt.getState, H = Ge().inPoint, ue = Ge().outPoint;
      if (H === null || ue === null) return;
      const Ce = B(ee.clientX), Ve = document.body.style.cursor;
      document.body.style.cursor = "grabbing";
      const Me = (he) => {
        const Ye = B(he.clientX) - Ce, $e = Math.max(0, Math.min(d, H + Ye)), ct = Math.max(0, Math.min(d, ue + Ye));
        $e > ct || (Ge().setInPoint($e), Ge().setOutPoint(ct));
      }, _ = () => {
        document.body.style.cursor = Ve, document.removeEventListener("mousemove", Me), document.removeEventListener("mouseup", _), C.current = null;
      };
      C.current = _, document.addEventListener("mousemove", Me), document.addEventListener("mouseup", _);
    },
    [B, d]
  );
  s.useEffect(() => () => C.current?.(), []);
  const ne = o && E !== null && A !== null ? P(A - E) : null, me = s.useCallback(() => {
    Jt.getState().setInPoint(S.current);
  }, []), xe = s.useCallback(() => {
    Jt.getState().setOutPoint(S.current);
  }, []), we = s.useCallback(() => {
    Jt.getState().clearInOutPoints();
  }, []), Re = s.useRef(!1);
  s.useEffect(() => {
    u || (Re.current = !1);
  }, [u]);
  const Be = s.useCallback(() => {
    const { inPoint: ee, outPoint: Ge } = Jt.getState();
    ee === null && Ge === null || (Re.current = !0, l.seek(ee ?? 0), l.play());
  }, [l]), Fe = s.useMemo(
    () => m ? f.find((ee) => ee.id === m) ?? null : null,
    [m, f]
  ), De = s.useMemo(() => {
    if (!m || !Fe)
      return {
        videoTargetName: null,
        audioTargetName: null,
        status: "Select target track"
      };
    if (Fe.locked)
      return {
        videoTargetName: null,
        audioTargetName: null,
        status: "Target track locked"
      };
    const ee = Xd({
      tracks: f,
      activeTrackId: m,
      mediaType: n,
      hasAudio: a,
      patchVideo: b,
      patchAudio: h,
      preferredTrackHeight: Fe.height
    });
    if (!ee) {
      let H = "Enable V and/or A";
      return n === "audio" && !h ? H = "Enable A" : (n === "video" || n === "image") && !b && !a && (H = "Enable V"), {
        videoTargetName: null,
        audioTargetName: null,
        status: H
      };
    }
    const Ge = ee.tracks;
    return {
      videoTargetName: ee.videoTrackId ? Ge.find((H) => H.id === ee.videoTrackId)?.name ?? null : null,
      audioTargetName: ee.audioTrackId ? Ge.find((H) => H.id === ee.audioTrackId)?.name ?? null : null,
      status: null
    };
  }, [
    Fe,
    m,
    a,
    n,
    h,
    b,
    f
  ]), Qe = De.videoTargetName ? `Video Source Patch On -> ${De.videoTargetName}` : b ? "Video Source Patch On" : "Video Source Patch Off", je = De.audioTargetName ? `Audio Source Patch On -> ${De.audioTargetName}` : h ? "Audio Source Patch On" : "Audio Source Patch Off";
  return /* @__PURE__ */ r.jsxs("div", { className: "@container flex flex-col shrink-0", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "border-t border-border panel-header flex items-center gap-2 px-4 h-7 shrink-0", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex-1 flex flex-col justify-center gap-[2px] min-w-0", children: [
        o && (W !== null || Y !== null) && /* @__PURE__ */ r.jsxs("div", { ref: pe, className: "w-full h-2.5 relative shrink-0", children: [
          W !== null && Y !== null && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "absolute inset-y-0 cursor-grab active:cursor-grabbing",
              style: {
                left: `${W}%`,
                width: `${Math.max(0.5, Y - W)}%`,
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
          Y !== null && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "absolute top-0 bottom-0",
              style: {
                left: `${Y}%`,
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
          Y !== null && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "absolute cursor-col-resize",
              style: {
                left: `calc(${Y}% - 10px)`,
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
                style: { width: `${d > 0 ? i.currentFrame / d * 100 : 0}%` }
              }
            )
          }
        )
      ] }),
      o && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
        /* @__PURE__ */ r.jsxs(cr, { children: [
          /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(
            ve,
            {
              variant: "ghost",
              size: "icon",
              style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize },
              disabled: E === null && A === null,
              onClick: Be,
              children: /* @__PURE__ */ r.jsx(Zd, { className: "w-3 h-3" })
            }
          ) }),
          /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Play In to Out" })
        ] }),
        /* @__PURE__ */ r.jsxs(cr, { children: [
          /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(ve, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: me, children: /* @__PURE__ */ r.jsx(Sm, { className: "w-3 h-3" }) }) }),
          /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Mark In (I)" })
        ] }),
        /* @__PURE__ */ r.jsxs(cr, { children: [
          /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(ve, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: xe, children: /* @__PURE__ */ r.jsx(km, { className: "w-3 h-3" }) }) }),
          /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Mark Out (O)" })
        ] }),
        /* @__PURE__ */ r.jsxs(cr, { children: [
          /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(ve, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: we, children: /* @__PURE__ */ r.jsx(Jd, { className: "w-3 h-3" }) }) }),
          /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Clear In/Out (Alt+X)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "border-t border-border panel-header flex items-center justify-between px-4 shrink-0",
        style: { height: qe.previewControlsHeight },
        children: [
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              type: "button",
              className: "inline-flex items-center gap-1.5 bg-transparent p-0 font-mono text-[11px] tabular-nums text-left transition-colors select-none text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm shrink-0",
              onClick: () => O((ee) => !ee),
              children: [
                /* @__PURE__ */ r.jsx("span", { ref: w, className: "text-primary font-semibold", children: P(i.currentFrame) }),
                /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground/50", children: "/" }),
                /* @__PURE__ */ r.jsx("span", { children: P(d) })
              ]
            }
          ),
          /* @__PURE__ */ r.jsx("span", { className: "text-[11px] font-mono text-primary/70 shrink-0 hidden @min-[480px]:inline", children: ne ? `[${ne}]` : "" }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(ve, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => l.seek(0), children: /* @__PURE__ */ r.jsx(zl, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Go to start (Home)" })
            ] }),
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(ve, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => l.frameBack(1), children: /* @__PURE__ */ r.jsx(Ts, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Previous frame (←)" })
            ] }),
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(ve, { size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => l.toggle(), children: u ? /* @__PURE__ */ r.jsx($l, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(Kl, { className: "w-3.5 h-3.5 ml-0.5" }) }) }),
              /* @__PURE__ */ r.jsxs(ur, { side: "top", children: [
                u ? "Pause" : "Play",
                " (Space)"
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(ve, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => l.frameForward(1), children: /* @__PURE__ */ r.jsx(Es, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Next frame (→)" })
            ] }),
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(ve, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => l.seek(d), children: /* @__PURE__ */ r.jsx(Yl, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Go to end (End)" })
            ] })
          ] }),
          o ? /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 rounded-md border border-border bg-secondary/50 px-1 py-0.5", children: [
                /* @__PURE__ */ r.jsxs(cr, { children: [
                  /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(
                    ve,
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
                  /* @__PURE__ */ r.jsx(ur, { side: "top", children: Qe })
                ] }),
                /* @__PURE__ */ r.jsxs(cr, { children: [
                  /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(
                    ve,
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
                  /* @__PURE__ */ r.jsx(ur, { side: "top", children: je })
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
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(ve, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => Qd(), children: /* @__PURE__ */ r.jsx(Cm, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Insert (,)" })
            ] }),
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(ve, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => ef(), children: /* @__PURE__ */ r.jsx(Mm, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Overwrite (.)" })
            ] })
          ] }) : /* @__PURE__ */ r.jsx("div", { className: "w-[11ch] shrink-0", "aria-hidden": "true" })
        ]
      }
    )
  ] });
}
function tx({ frame: e }) {
  const t = Fs();
  return s.useEffect(() => {
    t.seekToFrame(e ?? 0);
  }, [t, e]), null;
}
const rx = s.memo(function({
  mediaId: t,
  seekFrame: n,
  containerSize: a
}) {
  const [o, c] = s.useState(""), i = Qt((v) => v.mediaById[t]), l = re((v) => v.zoom), u = i?.width || 640, d = i?.height || 360;
  s.useEffect(() => {
    let v = !1;
    return c(""), pn(t).then((S) => {
      v || c(S);
    }).catch(() => {
    }), () => {
      v = !0;
    };
  }, [t]);
  const f = s.useMemo(() => {
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
  }, [a.height, a.width, d, u, l]), m = s.useMemo(() => l === -1 || a.width === 0 || a.height === 0 ? !1 : f.width > a.width || f.height > a.height, [a.height, a.width, f.height, f.width, l]);
  if (!i)
    return /* @__PURE__ */ r.jsx("div", { className: "w-full h-full panel-bg flex items-center justify-center text-sm text-muted-foreground", children: "Loading media..." });
  const b = Ia(i.mimeType);
  if (b === "unknown")
    return null;
  const h = i.fps || 30, x = b === "image" ? 1 : Math.max(1, Math.round(i.duration * h));
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
            paddingLeft: `calc(${qe.previewPadding} / 2)`,
            paddingRight: `calc(${qe.previewPadding} / 2)`,
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
              children: o ? /* @__PURE__ */ r.jsx(ja, { children: /* @__PURE__ */ r.jsx(
                Ca,
                {
                  fps: h,
                  durationInFrames: x,
                  initialFrame: n ?? 0,
                  onVolumeChange: () => {
                  },
                  children: /* @__PURE__ */ r.jsxs(
                    Ma,
                    {
                      fps: h,
                      width: u,
                      height: d,
                      durationInFrames: x,
                      children: [
                        /* @__PURE__ */ r.jsx(tx, { frame: n }),
                        /* @__PURE__ */ r.jsx(
                          $u,
                          {
                            mediaId: t,
                            src: o,
                            mediaType: b,
                            fileName: i.fileName
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
function nx({ frame: e }) {
  const t = Fs();
  return s.useEffect(() => {
    t.seekToFrame(e ?? 0);
  }, [t, e]), null;
}
const sx = s.memo(function({
  compositionId: t,
  seekFrame: n,
  containerSize: a
}) {
  const o = Xi((S) => S.compositionById[t]), c = Xi((S) => S.compositionById), i = re((S) => S.zoom), [l, u] = s.useState(null), d = s.useMemo(
    () => o ? tf(o) : null,
    [o]
  );
  s.useEffect(() => {
    if (!o || !d) {
      u(null);
      return;
    }
    let S = !1;
    return u(null), (async () => {
      const w = rf(t, c);
      await Promise.all(w.map((R) => pn(R)));
      const k = await ru(d.tracks, { useProxy: !1 });
      S || u(k);
    })().catch(() => {
      S || u([]);
    }), () => {
      S = !0;
    };
  }, [o, c, t, d]);
  const f = o?.width || 640, m = o?.height || 360, b = Math.min(
    Math.max(1, o?.durationInFrames ?? 1) - 1,
    Math.max(0, n ?? 0)
  ), h = s.useMemo(() => {
    const S = f / m;
    if (i === -1) {
      if (a.width > 0 && a.height > 0) {
        if (a.width / a.height > S) {
          const k = a.height;
          return { width: k * S, height: k };
        }
        const w = a.width;
        return { width: w, height: w / S };
      }
      return { width: f, height: m };
    }
    return {
      width: f * i,
      height: m * i
    };
  }, [m, f, a.height, a.width, i]), x = s.useMemo(() => i === -1 || a.width === 0 || a.height === 0 ? !1 : h.width > a.width || h.height > a.height, [a.height, a.width, h.height, h.width, i]);
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
            paddingLeft: `calc(${qe.previewPadding} / 2)`,
            paddingRight: `calc(${qe.previewPadding} / 2)`,
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
              children: l ? /* @__PURE__ */ r.jsx(ja, { children: /* @__PURE__ */ r.jsx(
                Ca,
                {
                  fps: o.fps,
                  durationInFrames: v,
                  initialFrame: b,
                  onVolumeChange: () => {
                  },
                  children: /* @__PURE__ */ r.jsxs(
                    Ma,
                    {
                      fps: o.fps,
                      width: o.width,
                      height: o.height,
                      durationInFrames: v,
                      children: [
                        /* @__PURE__ */ r.jsx(nx, { frame: b }),
                        /* @__PURE__ */ r.jsx(
                          Wl,
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
}), ax = (
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
), ox = (
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
class ix {
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
  constructor(t, n) {
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
      compute: { module: t.createShaderModule({ code: ax }), entryPoint: "main" }
    }), this.renderBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 4, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "uniform" } }
      ]
    });
    const o = t.createShaderModule({ code: ox });
    this.renderPipeline = t.createRenderPipeline({
      layout: t.createPipelineLayout({ bindGroupLayouts: [this.renderBGL] }),
      vertex: { module: o, entryPoint: "vs" },
      fragment: { module: o, entryPoint: "fs", targets: [{ format: n }] }
    });
  }
  render(t, n, a, o, c, i, l) {
    const u = this.device, d = t.width, f = t.height, m = new ArrayBuffer(32);
    new Uint32Array(m, 0, 4).set([d, f, 0, 0]), new Float32Array(m, 16, 4).set([o, c, i, l]), u.queue.writeBuffer(this.computeParams, 0, m), u.queue.writeBuffer(this.renderParams, 0, new Float32Array([d * f, a, 0, 0]));
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
    }), S = b.beginRenderPass({
      colorAttachments: [{
        view: n.getCurrentTexture().createView(),
        loadOp: "clear",
        storeOp: "store",
        clearValue: { r: 0.04, g: 0.04, b: 0.04, a: 1 }
      }]
    });
    S.setPipeline(this.renderPipeline), S.setBindGroup(0, v), S.draw(3), S.end(), u.queue.submit([b.finish()]);
  }
  destroy() {
    for (const t of [this.histR, this.histG, this.histB, this.histL, this.computeParams, this.renderParams])
      t?.destroy();
  }
}
const cx = (
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
), lx = (
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
), yo = 1024, sa = 512;
class ux {
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
  constructor(t, n) {
    this.device = t;
    const a = yo * sa * 4;
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
      compute: { module: t.createShaderModule({ code: cx }), entryPoint: "main" }
    }), this.renderBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "uniform" } },
        { binding: 4, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } }
      ]
    });
    const o = t.createShaderModule({ code: lx });
    this.renderPipeline = t.createRenderPipeline({
      layout: t.createPipelineLayout({ bindGroupLayouts: [this.renderBGL] }),
      vertex: { module: o, entryPoint: "vs" },
      fragment: { module: o, entryPoint: "fs", targets: [{ format: n }] }
    });
  }
  accumulate(t, n, a, o, c) {
    const i = this.device, l = t.width, u = t.height, d = new ArrayBuffer(32);
    new Uint32Array(d, 0, 4).set([yo, sa, l, u]), new Float32Array(d, 16, 4).set([n, a, o, c]), i.queue.writeBuffer(this.computeParams, 0, d);
    const f = i.createCommandEncoder();
    f.clearBuffer(this.accumR), f.clearBuffer(this.accumG), f.clearBuffer(this.accumB), f.clearBuffer(this.accumL);
    const m = i.createBindGroup({
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
    return b.setPipeline(this.computePipeline), b.setBindGroup(0, m), b.dispatchWorkgroups(Math.ceil(l / 16), Math.ceil(u / 16)), b.end(), i.queue.submit([f.finish()]), u;
  }
  renderAccumulated(t, n, a) {
    const o = this.device, c = Math.sqrt(a / sa) * 40, i = new ArrayBuffer(32);
    new Float32Array(i, 0, 4).set([yo, sa, c, 0.9]), new Uint32Array(i, 16, 4).set([n, 0, 0, 0]), o.queue.writeBuffer(this.renderParams, 0, i);
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
  render(t, n, a, o, c, i, l) {
    this.renderBatch(t, [{ ctx: n, mode: a }], o, c, i, l);
  }
  renderBatch(t, n, a, o, c, i) {
    if (n.length === 0) return;
    const l = this.accumulate(t, a, o, c, i);
    for (const { ctx: u, mode: d } of n)
      this.renderAccumulated(u, d, l);
  }
  destroy() {
    for (const t of [this.accumR, this.accumG, this.accumB, this.accumL, this.computeParams, this.renderParams])
      t?.destroy();
  }
}
const dx = (
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
), fx = (
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
), Un = 512;
class mx {
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
  constructor(t, n) {
    this.device = t;
    const a = Un * Un * 4;
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
      compute: { module: t.createShaderModule({ code: dx }), entryPoint: "main" }
    }), this.renderBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "uniform" } }
      ]
    });
    const o = t.createShaderModule({ code: fx });
    this.renderPipeline = t.createRenderPipeline({
      layout: t.createPipelineLayout({ bindGroupLayouts: [this.renderBGL] }),
      vertex: { module: o, entryPoint: "vs" },
      fragment: { module: o, entryPoint: "fs", targets: [{ format: n }] }
    });
  }
  render(t, n, a, o) {
    const c = this.device, i = t.width, l = t.height, u = new ArrayBuffer(32);
    new Uint32Array(u, 0, 4).set([Un, i, l, 0]), new Float32Array(u, 16, 4).set([a, o, 0, 0]), c.queue.writeBuffer(this.computeParams, 0, u);
    const d = Math.sqrt(i * l / (Un * Un)) * 18;
    c.queue.writeBuffer(this.renderParams, 0, new Float32Array([Un, d, 0, 0]));
    const f = c.createCommandEncoder();
    f.clearBuffer(this.accumR), f.clearBuffer(this.accumG), f.clearBuffer(this.accumB);
    const m = c.createBindGroup({
      layout: this.computeBGL,
      entries: [
        { binding: 0, resource: t.createView() },
        { binding: 1, resource: { buffer: this.accumR } },
        { binding: 2, resource: { buffer: this.accumG } },
        { binding: 3, resource: { buffer: this.accumB } },
        { binding: 4, resource: { buffer: this.computeParams } }
      ]
    }), b = f.beginComputePass();
    b.setPipeline(this.computePipeline), b.setBindGroup(0, m), b.dispatchWorkgroups(Math.ceil(i / 16), Math.ceil(l / 16)), b.end();
    const h = c.createBindGroup({
      layout: this.renderBGL,
      entries: [
        { binding: 0, resource: { buffer: this.accumR } },
        { binding: 1, resource: { buffer: this.accumG } },
        { binding: 2, resource: { buffer: this.accumB } },
        { binding: 3, resource: { buffer: this.renderParams } }
      ]
    }), x = f.beginRenderPass({
      colorAttachments: [{
        view: n.getCurrentTexture().createView(),
        loadOp: "clear",
        storeOp: "store",
        clearValue: { r: 0.04, g: 0.04, b: 0.04, a: 1 }
      }]
    });
    x.setPipeline(this.renderPipeline), x.setBindGroup(0, h), x.draw(3), x.end(), c.queue.submit([f.finish()]);
  }
  destroy() {
    for (const t of [this.accumR, this.accumG, this.accumB, this.computeParams, this.renderParams])
      t?.destroy();
  }
}
class ui {
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
    this.device = t, this.format = navigator.gpu.getPreferredCanvasFormat(), this.histogram = new ix(t, this.format), this.waveform = new ux(t, this.format), this.vectorscope = new mx(t, this.format);
  }
  static async create() {
    if (typeof navigator > "u" || !navigator.gpu) return null;
    try {
      const t = await navigator.gpu.requestAdapter();
      if (!t) return null;
      const n = await t.requestDevice();
      return new ui(n);
    } catch {
      return null;
    }
  }
  configureCanvas(t) {
    try {
      const n = t.getContext("webgpu");
      return n ? (n.configure({ device: this.device, format: this.format, alphaMode: "opaque" }), n) : null;
    } catch {
      return null;
    }
  }
  setMatrix(t, n) {
    this.kr = t, this.kb = n;
  }
  setRange(t, n) {
    this.rangeMin = t, this.rangeMax = n;
  }
  ensureTexture(t, n) {
    this.srcTexture && this.srcW === t && this.srcH === n || (this.srcTexture?.destroy(), this.srcTexture = this.device.createTexture({
      size: { width: t, height: n },
      format: "rgba8unorm",
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
    }), this.srcW = t, this.srcH = n);
  }
  /** Near-zero-copy: GPU-accelerated transfer from canvas (avoids getImageData CPU readback) */
  uploadFromCanvas(t) {
    const n = t.width, a = t.height;
    n < 2 || a < 2 || (this.ensureTexture(n, a), this.device.queue.copyExternalImageToTexture(
      { source: t, flipY: !1 },
      { texture: this.srcTexture, mipLevel: 0 },
      { width: n, height: a }
    ));
  }
  /** Fallback: upload from ImageData (CPU → GPU transfer) */
  uploadFrame(t) {
    const n = t.width, a = t.height;
    this.ensureTexture(n, a), this.device.queue.writeTexture(
      { texture: this.srcTexture },
      t.data,
      { bytesPerRow: n * 4 },
      { width: n, height: a }
    );
  }
  renderWaveform(t, n) {
    this.srcTexture && this.waveform.renderBatch(
      this.srcTexture,
      [{ ctx: t, mode: n }],
      this.kr,
      this.kb,
      this.rangeMin,
      this.rangeMax
    );
  }
  renderWaveforms(t) {
    !this.srcTexture || t.length === 0 || this.waveform.renderBatch(this.srcTexture, t, this.kr, this.kb, this.rangeMin, this.rangeMax);
  }
  renderHistogram(t, n) {
    this.srcTexture && this.histogram.render(this.srcTexture, t, n, this.kr, this.kb, this.rangeMin, this.rangeMax);
  }
  renderVectorscope(t) {
    this.srcTexture && this.vectorscope.render(this.srcTexture, t, this.kr, this.kb);
  }
  clearScope(t) {
    try {
      const n = this.device.createCommandEncoder();
      n.beginRenderPass({
        colorAttachments: [{
          view: t.getCurrentTexture().createView(),
          loadOp: "clear",
          storeOp: "store",
          clearValue: { r: 0.04, g: 0.04, b: 0.04, a: 1 }
        }]
      }).end(), this.device.queue.submit([n.finish()]);
    } catch {
    }
  }
  destroy() {
    this.srcTexture?.destroy(), this.srcTexture = null, this.waveform.destroy(), this.histogram.destroy(), this.vectorscope.destroy();
  }
}
const Zc = 384, Jc = 216, Qc = 256, el = 144, hx = 66, px = 220, Ku = "timeline:scopes:colorMatrix", Yu = "timeline:scopes:rangeMode", qu = "timeline:scopes:stackLayout", tl = { rgb: 0, r: 1, g: 2, b: 3, luma: 4 };
function Na(e) {
  return e === "bt601" ? { kr: 0.299, kb: 0.114 } : { kr: 0.2126, kb: 0.0722 };
}
function gx() {
  try {
    const e = localStorage.getItem(Ku);
    if (e === "bt601" || e === "bt709") return e;
  } catch {
  }
  return "bt709";
}
function xx() {
  try {
    const e = localStorage.getItem(Yu);
    if (e === "full" || e === "legal") return e;
  } catch {
  }
  return "full";
}
function bx() {
  try {
    const e = localStorage.getItem(qu);
    if (e === "three-up" || e === "all") return e;
  } catch {
  }
  return "three-up";
}
function di(e, t) {
  if (t === "legal") {
    const n = 0.06274509803921569, a = 235 / 255;
    return Math.max(0, Math.min(1, (e - n) / (a - n)));
  }
  return Math.max(0, Math.min(1, e));
}
function fi(e, t, n) {
  e.save(), e.strokeStyle = "rgba(148, 163, 184, 0.18)", e.lineWidth = 1, e.fillStyle = "rgba(148, 163, 184, 0.8)", e.font = "10px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
  for (const a of [0, 25, 50, 75, 100]) {
    const o = Math.round(n - 1 - a / 100 * (n - 1));
    e.beginPath(), e.moveTo(0, o + 0.5), e.lineTo(t, o + 0.5), e.stroke(), e.fillText(String(a), 4, Math.max(10, o - 2));
  }
  e.restore();
}
function vx(e, t, n, a, o, c) {
  const { kr: i, kb: l } = Na(n), u = 1 - i - l, { data: d, width: f, height: m } = e, b = new Uint16Array(o * c);
  let h = 0;
  for (let y = 0; y < m; y++)
    for (let w = 0; w < f; w++) {
      const k = (y * f + w) * 4, R = (d[k] ?? 0) / 255, O = (d[k + 1] ?? 0) / 255, L = (d[k + 2] ?? 0) / 255, I = di(i * R + u * O + l * L, a), N = Math.floor(w / Math.max(1, f - 1) * (o - 1)), T = (c - 1 - Math.floor(I * (c - 1))) * o + N, j = (b[T] ?? 0) + 1;
      b[T] = j, j > h && (h = j);
    }
  const x = t.createImageData(o, c), v = x.data, S = Math.log1p(Math.max(1, h));
  for (let y = 0; y < b.length; y++) {
    const w = b[y] ?? 0;
    if (w <= 0) continue;
    const k = Math.log1p(w) / S;
    if (k <= 0) continue;
    const R = y * 4;
    v[R] = 40, v[R + 1] = Math.min(255, Math.round(65 + k * 190)), v[R + 2] = 120, v[R + 3] = Math.min(255, Math.round(95 + k * 160));
  }
  t.fillStyle = "#030712", t.fillRect(0, 0, o, c), t.putImageData(x, 0, 0), fi(t, o, c);
}
function yx(e, t, n, a, o) {
  const { data: c, width: i, height: l } = e, u = new Uint16Array(a * o);
  let d = 0;
  const f = Math.floor(a / 3), m = [[255, 80, 80], [60, 255, 120], [90, 130, 255]];
  for (let v = 0; v < l; v++)
    for (let S = 0; S < i; S++) {
      const y = (v * i + S) * 4, w = [(c[y] ?? 0) / 255, (c[y + 1] ?? 0) / 255, (c[y + 2] ?? 0) / 255], k = Math.floor(S / Math.max(1, i - 1) * (f - 1));
      for (let R = 0; R < 3; R++) {
        const O = di(w[R] ?? 0, n), L = R * f + k, N = (o - 1 - Math.floor(O * (o - 1))) * a + L, P = (u[N] ?? 0) + 1;
        u[N] = P, P > d && (d = P);
      }
    }
  const b = t.createImageData(a, o), h = b.data, x = Math.log1p(Math.max(1, d));
  for (let v = 0; v < o; v++)
    for (let S = 0; S < a; S++) {
      const y = v * a + S, w = u[y] ?? 0;
      if (w <= 0) continue;
      const k = Math.log1p(w) / x, R = Math.min(2, Math.floor(S / Math.max(1, f))), O = m[R] ?? [180, 180, 180], L = y * 4;
      h[L] = Math.min(255, Math.round((O[0] ?? 180) * (0.25 + 0.75 * k))), h[L + 1] = Math.min(255, Math.round((O[1] ?? 180) * (0.25 + 0.75 * k))), h[L + 2] = Math.min(255, Math.round((O[2] ?? 180) * (0.25 + 0.75 * k))), h[L + 3] = Math.min(255, Math.round(85 + k * 160));
    }
  t.fillStyle = "#030712", t.fillRect(0, 0, a, o), t.putImageData(b, 0, 0), fi(t, a, o), t.save(), t.strokeStyle = "rgba(148, 163, 184, 0.28)", t.lineWidth = 1;
  for (let v = 1; v < 3; v++) {
    const S = v * f;
    t.beginPath(), t.moveTo(S + 0.5, 0), t.lineTo(S + 0.5, o), t.stroke();
  }
  t.fillStyle = "rgba(148, 163, 184, 0.9)", t.font = "10px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", t.fillText("R", 8, 12), t.fillText("G", f + 8, 12), t.fillText("B", f * 2 + 8, 12), t.restore();
}
function wx(e, t, n, a, o, c) {
  const { kr: i, kb: l } = Na(n), u = 1 - i - l, { data: d, width: f, height: m } = e, b = new Uint32Array(256);
  let h = 0;
  for (let v = 0; v < m; v++)
    for (let S = 0; S < f; S++) {
      const y = (v * f + S) * 4, w = (d[y] ?? 0) / 255, k = (d[y + 1] ?? 0) / 255, R = (d[y + 2] ?? 0) / 255, O = di(i * w + u * k + l * R, a), L = Math.max(0, Math.min(255, Math.round(O * 255))), I = (b[L] ?? 0) + 1;
      b[L] = I, I > h && (h = I);
    }
  t.fillStyle = "#030712", t.fillRect(0, 0, o, c), fi(t, o, c);
  const x = Math.log1p(Math.max(1, h));
  for (let v = 0; v < 256; v++) {
    const S = b[v] ?? 0;
    if (S <= 0) continue;
    const y = Math.log1p(S) / x, w = Math.round(v / 255 * (o - 1)), k = Math.max(1, Math.round(y * (c - 1)));
    t.fillStyle = `rgba(116, 232, 195, ${0.35 + y * 0.65})`, t.fillRect(w, c - k, Math.max(1, Math.round(o / 256)), k);
  }
}
function Sx(e, t, n, a) {
  const { kr: o, kb: c } = Na(n), i = 1 - o - c, { data: l, width: u, height: d } = e, f = new Uint32Array(a * a);
  let m = 0;
  const b = Math.floor(a / 2), h = b - 2;
  for (let y = 0; y < d; y++)
    for (let w = 0; w < u; w++) {
      const k = (y * u + w) * 4, R = (l[k] ?? 0) / 255, O = (l[k + 1] ?? 0) / 255, L = (l[k + 2] ?? 0) / 255, I = o * R + i * O + c * L, N = (L - I) / (2 * (1 - c)), P = (R - I) / (2 * (1 - o)), T = Math.round(b + N * h * 2), j = Math.round(b - P * h * 2);
      if (T < 0 || T >= a || j < 0 || j >= a) continue;
      const E = j * a + T, A = (f[E] ?? 0) + 1;
      f[E] = A, A > m && (m = A);
    }
  t.fillStyle = "#030712", t.fillRect(0, 0, a, a);
  const x = t.createImageData(a, a), v = x.data, S = Math.log1p(Math.max(1, m));
  for (let y = 0; y < f.length; y++) {
    const w = f[y] ?? 0;
    if (w <= 0) continue;
    const k = Math.log1p(w) / S;
    if (k <= 0) continue;
    const R = y * 4;
    v[R] = 70, v[R + 1] = Math.min(255, Math.round(70 + k * 185)), v[R + 2] = 255, v[R + 3] = Math.min(255, Math.round(90 + k * 165));
  }
  t.putImageData(x, 0, 0), t.strokeStyle = "rgba(148, 163, 184, 0.25)", t.lineWidth = 1, t.beginPath(), t.arc(b, b, h, 0, Math.PI * 2), t.stroke(), t.beginPath(), t.arc(b, b, Math.floor(h * 0.66), 0, Math.PI * 2), t.stroke(), t.beginPath(), t.moveTo(b, 0), t.lineTo(b, a), t.moveTo(0, b), t.lineTo(a, b), t.stroke();
}
function aa(e, t, n, a, o) {
  const c = e.getBoundingClientRect(), i = Math.max(2, Math.min(a, Math.round(c.width || t))), l = Math.max(2, Math.min(o, Math.round(c.height || n)));
  return (e.width !== i || e.height !== l) && (e.width = i, e.height = l), { width: i, height: l };
}
function ms({
  mode: e,
  onChange: t
}) {
  const n = [
    { value: "rgb", label: "RGB" },
    { value: "r", label: "R", activeColor: "#ff6666" },
    { value: "g", label: "G", activeColor: "#66cc66" },
    { value: "b", label: "B", activeColor: "#6688ff" },
    { value: "luma", label: "Y", activeColor: "#ccccaa" }
  ];
  return /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-0.5", children: n.map((a) => /* @__PURE__ */ r.jsx(
    "button",
    {
      className: fr(
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
function oa(e, t, n, a = !0) {
  s.useEffect(() => {
    if (!a) return;
    const o = t.current, c = e.current;
    if (!o || !c) return;
    const i = new ResizeObserver((l) => {
      const u = l[0];
      if (!u) return;
      const { width: d, height: f } = u.contentRect, m = window.devicePixelRatio || 1;
      let b = d, h = f;
      if (n) {
        const S = d / n;
        S <= f ? h = S : (h = f, b = f * n);
      }
      const x = Math.round(b * m), v = Math.round(h * m);
      (c.width !== x || c.height !== v) && (c.width = x, c.height = v, c.style.width = `${Math.round(b)}px`, c.style.height = `${Math.round(h)}px`);
    });
    return i.observe(o), () => i.disconnect();
  }, [n, e, t, a]);
}
const kx = s.memo(function({
  open: t,
  embedded: n = !1,
  embeddedLayout: a = "grid"
}) {
  const [o, c] = s.useState(() => gx()), [i, l] = s.useState(() => xx()), [u, d] = s.useState("idle"), [f, m] = s.useState(null), [b, h] = s.useState("luma"), [x, v] = s.useState("rgb"), [S, y] = s.useState(() => bx()), w = re((Fe) => Fe.isPlaying), k = re((Fe) => Fe.captureFrameImageData), R = re((Fe) => Fe.captureFrame), O = n && a === "stack", L = n && (!O || S === "all"), I = s.useRef(null), N = s.useRef(null), P = s.useRef(null), T = s.useRef(null), j = s.useRef(null), E = s.useRef(null), A = s.useRef(null), z = s.useRef(null), M = s.useRef(null), q = s.useRef(/* @__PURE__ */ new Map()), V = s.useRef(!1), X = s.useRef(!1), D = s.useRef(!1), W = s.useRef(!1), Y = s.useRef(null), pe = s.useRef(0), C = s.useRef(o);
  C.current = o;
  const B = s.useRef(i);
  B.current = i;
  const U = s.useRef(w);
  U.current = w;
  const J = s.useRef(n);
  J.current = n;
  const ne = s.useRef(L);
  ne.current = L;
  const me = s.useRef(b);
  me.current = b;
  const xe = s.useRef(x);
  xe.current = x, s.useEffect(() => {
    try {
      localStorage.setItem(Ku, o);
    } catch {
    }
  }, [o]), s.useEffect(() => {
    try {
      localStorage.setItem(Yu, i);
    } catch {
    }
  }, [i]), s.useEffect(() => {
    try {
      localStorage.setItem(qu, S);
    } catch {
    }
  }, [S]), oa(I, j), oa(N, E), oa(T, z, void 0, L), oa(P, A, 1), s.useEffect(() => {
    !t || V.current || (V.current = !0, ui.create().then((Fe) => {
      Fe ? (M.current = Fe, m(!0)) : m(!1);
    }));
  }, [t]), s.useEffect(() => () => {
    M.current?.destroy(), M.current = null, q.current.clear();
  }, []);
  const we = s.useCallback((Fe) => {
    if (!Fe) return null;
    const De = M.current;
    if (!De) return null;
    const Qe = q.current;
    let je = Qe.get(Fe);
    return je || (je = De.configureCanvas(Fe) ?? void 0, je && Qe.set(Fe, je), je ?? null);
  }, []);
  s.useEffect(() => {
    if (f !== !0 || !t) return;
    const Fe = M.current;
    if (!Fe) return;
    let De = !1, Qe = 0;
    const je = (H) => {
      De || (H - Qe >= hx && !X.current && (Qe = H, ee()), requestAnimationFrame(je));
    }, ee = async () => {
      if (X.current) return;
      X.current = !0;
      const { kr: H, kb: ue } = Na(C.current), [Ce, Ve] = B.current === "legal" ? [16 / 255, 235 / 255] : [0, 1];
      Fe.setMatrix(H, ue), Fe.setRange(Ce, Ve);
      try {
        const Me = re.getState().captureCanvasSource;
        if (Me) {
          const Ye = await Me();
          Ye && !De ? Fe.uploadFromCanvas(Ye) : De || await Ge(Fe);
        } else
          await Ge(Fe);
        if (De) return;
        const _ = we(I.current), he = [];
        if (_ && he.push({ ctx: _, mode: tl[me.current] }), J.current) {
          const Ye = we(N.current);
          if (Ye && he.push({ ctx: Ye, mode: 5 }), ne.current) {
            const $e = we(T.current);
            $e && Fe.renderHistogram($e, tl[xe.current]);
          }
        }
        he.length > 0 && Fe.renderWaveforms(he);
        const et = we(P.current);
        et && Fe.renderVectorscope(et), d("live");
      } catch {
        d("error");
      } finally {
        X.current = !1;
      }
    }, Ge = async (H) => {
      const Ce = re.getState().captureFrameImageData;
      if (!Ce) return;
      const Ve = U.current ? Qc : Zc, Me = U.current ? el : Jc, _ = await Ce({ width: Ve, height: Me });
      _ && H.uploadFrame(_);
    };
    return requestAnimationFrame(je), () => {
      De = !0;
    };
  }, [f, t, we]);
  const Re = s.useCallback(async (Fe = 0) => {
    if (!t || f !== !1 || !k && !R) return;
    const De = () => {
      const Ye = re.getState();
      return Ye.previewFrame ?? Ye.currentFrame;
    }, Qe = De(), je = I.current, ee = P.current;
    if (!je || !ee) return;
    const Ge = aa(je, 512, 256, 1920, 1080), H = N.current ? aa(N.current, 512, 256, 1920, 1080) : null, ue = T.current ? aa(T.current, 512, 256, 1920, 1080) : null, Ce = aa(ee, 256, 256, 1024, 1024), Ve = Math.max(2, Math.min(Ce.width, Ce.height));
    (ee.width !== Ve || ee.height !== Ve) && (ee.width = Ve, ee.height = Ve);
    const Me = je.getContext("2d"), _ = N.current?.getContext("2d") ?? null, he = ee.getContext("2d"), et = T.current?.getContext("2d") ?? null;
    if (!(!Me || !he))
      try {
        const Ye = w ? Qc : Zc, $e = w ? el : Jc;
        let ct = null;
        if (k && (ct = await k({ width: Ye, height: $e })), !ct && R) {
          const Vt = await R({
            width: Ye,
            height: $e,
            format: "image/jpeg",
            quality: w ? 0.72 : 0.85
          });
          if (Vt) {
            const yr = new Image();
            yr.src = Vt, await yr.decode();
            let Bt = Y.current;
            Bt || (Bt = document.createElement("canvas"), Y.current = Bt), (Bt.width !== Ye || Bt.height !== $e) && (Bt.width = Ye, Bt.height = $e);
            const Lr = Bt.getContext("2d", { willReadFrequently: !0 });
            if (!Lr) return;
            Lr.clearRect(0, 0, Ye, $e), Lr.drawImage(yr, 0, 0, Ye, $e), ct = Lr.getImageData(0, 0, Ye, $e);
          }
        }
        if (!ct) {
          d("idle");
          return;
        }
        if (De() !== Qe) {
          Fe < 1 && await Re(Fe + 1);
          return;
        }
        vx(ct, Me, o, i, Ge.width, Ge.height);
        const pt = !w || pe.current % 2 === 0;
        pe.current += 1, n && _ && H && pt && yx(ct, _, i, H.width, H.height), Sx(ct, he, o, Ve), L && et && ue && pt && wx(ct, et, o, i, ue.width, ue.height), d("live");
      } catch {
        d("error");
      }
  }, [k, R, t, f, o, i, n, w, L]), Be = s.useCallback(async () => {
    if (D.current) {
      W.current = !0;
      return;
    }
    D.current = !0;
    try {
      do
        W.current = !1, await Re();
      while (W.current);
    } finally {
      D.current = !1;
    }
  }, [Re]);
  return s.useEffect(() => {
    if (f !== !1 || !t || w) return;
    let Fe = null;
    const De = () => {
      Fe === null && (Fe = requestAnimationFrame(() => {
        Fe = null, Be();
      }));
    };
    De();
    const Qe = re.subscribe((je, ee) => {
      if (je.isPlaying)
        return;
      const Ge = je.previewFrame ?? je.currentFrame, H = ee.previewFrame ?? ee.currentFrame;
      Ge !== H && De();
    });
    return () => {
      Qe(), Fe !== null && cancelAnimationFrame(Fe), W.current = !1;
    };
  }, [f, t, w, Be]), s.useEffect(() => {
    if (f !== !1 || !t || !w) return;
    let Fe = !1;
    return (async () => {
      for (; !Fe; )
        await Be(), await new Promise((De) => setTimeout(De, px));
    })(), () => {
      Fe = !0;
    };
  }, [f, t, w, Be]), t ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: fr(
        n ? "min-h-0 w-full rounded-md border border-border bg-background p-2" : "absolute bottom-3 right-3 z-20 rounded-md border border-border bg-background/95 backdrop-blur-sm shadow-lg p-2 pointer-events-none"
      ),
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "mb-2 flex flex-col gap-1.5", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1", children: [
            /* @__PURE__ */ r.jsx("div", { className: "shrink-0 text-[10px] uppercase tracking-wide text-muted-foreground", children: "Scopes" }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex min-w-0 flex-wrap items-center gap-1", children: [
              /* @__PURE__ */ r.jsx(
                ve,
                {
                  variant: o === "bt709" ? "secondary" : "ghost",
                  size: "sm",
                  className: "h-5 px-1.5 text-[10px]",
                  onClick: () => c("bt709"),
                  children: "709"
                }
              ),
              /* @__PURE__ */ r.jsx(
                ve,
                {
                  variant: o === "bt601" ? "secondary" : "ghost",
                  size: "sm",
                  className: "h-5 px-1.5 text-[10px]",
                  onClick: () => c("bt601"),
                  children: "601"
                }
              ),
              /* @__PURE__ */ r.jsx(
                ve,
                {
                  variant: i === "full" ? "secondary" : "ghost",
                  size: "sm",
                  className: "h-5 px-1.5 text-[10px]",
                  onClick: () => l("full"),
                  children: "Full"
                }
              ),
              /* @__PURE__ */ r.jsx(
                ve,
                {
                  variant: i === "legal" ? "secondary" : "ghost",
                  size: "sm",
                  className: "h-5 px-1.5 text-[10px]",
                  onClick: () => l("legal"),
                  children: "Legal"
                }
              ),
              O && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                /* @__PURE__ */ r.jsx(
                  ve,
                  {
                    variant: S === "three-up" ? "secondary" : "ghost",
                    size: "sm",
                    className: "h-5 px-1.5 text-[10px]",
                    onClick: () => y("three-up"),
                    children: "3-Up"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  ve,
                  {
                    variant: S === "all" ? "secondary" : "ghost",
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
              nf,
              {
                className: `h-3 w-3 shrink-0 ${u === "live" ? "text-emerald-500" : u === "error" ? "text-red-500" : ""}`,
                "aria-hidden": !0
              }
            ),
            /* @__PURE__ */ r.jsx("span", { className: "min-w-0 break-words [overflow-wrap:anywhere]", children: u === "live" ? `${f ? "gpu" : "cpu"} ${o === "bt709" ? "709" : "601"} ${i}` : u === "error" ? "err" : "idle" })
          ] })
        ] }),
        n ? a === "stack" ? /* @__PURE__ */ r.jsxs("div", { className: "flex w-full flex-col gap-3", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex shrink-0 flex-col", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "mb-1 flex items-center justify-between", children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Waveform" }),
              f && /* @__PURE__ */ r.jsx(ms, { mode: b, onChange: h })
            ] }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: j,
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
                ref: E,
                className: "h-[108px] w-full rounded border border-border/70 bg-black/80",
                children: /* @__PURE__ */ r.jsx("canvas", { ref: N, className: "h-full w-full" })
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex min-w-0 shrink-0 flex-col", children: [
            /* @__PURE__ */ r.jsx("div", { className: "mb-1 text-[10px] text-muted-foreground", children: "Vectorscope" }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: A,
                className: fr(
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
              f && /* @__PURE__ */ r.jsx(ms, { mode: x, onChange: v })
            ] }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: z,
                className: "h-[88px] w-full rounded border border-border/70 bg-black/80",
                children: /* @__PURE__ */ r.jsx("canvas", { ref: T, className: "h-full w-full" })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ r.jsxs("div", { className: "h-[calc(100%-22px)] min-h-0 flex gap-3", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "min-w-0 flex-1 grid grid-cols-2 gap-3 auto-rows-fr", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex min-h-0 flex-col", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Waveform" }),
                f && /* @__PURE__ */ r.jsx(ms, { mode: b, onChange: h })
              ] }),
              /* @__PURE__ */ r.jsx("div", { ref: j, className: "flex-1 min-h-[108px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: I, className: "w-full h-full" }) })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex min-h-0 flex-col", children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-[10px] mb-1 text-muted-foreground", children: "RGB Parade" }),
              /* @__PURE__ */ r.jsx("div", { ref: E, className: "flex-1 min-h-[108px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: N, className: "w-full h-full" }) })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "col-span-2 flex min-h-0 flex-col", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Histogram" }),
                f && /* @__PURE__ */ r.jsx(ms, { mode: x, onChange: v })
              ] }),
              /* @__PURE__ */ r.jsx("div", { ref: z, className: "flex-1 min-h-[88px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: T, className: "w-full h-full" }) })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "basis-[32%] min-w-[220px] max-w-[380px] flex min-h-0 flex-col", children: [
            /* @__PURE__ */ r.jsx("div", { className: "text-[10px] mb-1 text-muted-foreground", children: "Vectorscope" }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: A,
                className: "flex flex-1 min-h-0 items-center justify-center rounded border border-border/70 bg-black/80",
                children: /* @__PURE__ */ r.jsx("canvas", { ref: P, className: "max-w-full max-h-full aspect-square" })
              }
            )
          ] })
        ] }) : /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Waveform" }),
              f && /* @__PURE__ */ r.jsx(ms, { mode: b, onChange: h })
            ] }),
            /* @__PURE__ */ r.jsx("div", { ref: j, className: "w-[220px] h-[110px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: I, className: "w-full h-full" }) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("div", { className: "text-[10px] mb-1 text-muted-foreground", children: "Vectorscope" }),
            /* @__PURE__ */ r.jsx("div", { ref: A, className: "w-[160px] h-[160px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: P, className: "w-full h-full" }) })
          ] })
        ] })
      ]
    }
  ) : null;
}), Cx = kx;
function Mx({ onClose: e }) {
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-1 flex-col min-h-0 min-w-0", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "flex items-center justify-between px-3 shrink-0",
        style: { height: qe.previewSplitHeaderHeight },
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted-foreground truncate", children: "Color Scopes" }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: e,
              className: "p-1 rounded hover:bg-muted transition-colors shrink-0",
              "aria-label": "Close color scopes",
              children: /* @__PURE__ */ r.jsx(tu, { className: "w-3.5 h-3.5 text-muted-foreground" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-3 panel-bg [scrollbar-gutter:stable]", children: /* @__PURE__ */ r.jsx(Cx, { open: !0, embedded: !0, embeddedLayout: "stack" }) })
  ] });
}
function Aa(e = {}) {
  const { updateDuringPlayback: t = !1, throttleMs: n = 100 } = e, [a, o] = s.useState(
    () => re.getState().currentFrame
  ), c = s.useRef(0);
  return s.useEffect(() => {
    let i = re.getState().isPlaying;
    const l = re.subscribe((u) => {
      const d = u.isPlaying, f = u.currentFrame;
      if (i && !d) {
        o(f), i = d;
        return;
      }
      if (i = d, !d) {
        o(f);
        return;
      }
      if (!t)
        return;
      const m = performance.now();
      m - c.current >= n && (o(f), c.current = m);
    });
    return () => {
      l();
    };
  }, [t, n]), a;
}
function Rx({
  containerRef: e
}) {
  const [t, n] = s.useState(!1);
  s.useEffect(() => {
    const o = () => {
      n(document.fullscreenElement !== null);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, []);
  const a = s.useCallback(() => {
    e.current && (document.fullscreenElement ? document.exitFullscreen() : e.current.requestFullscreen());
  }, [e]);
  return { isFullscreen: t, toggleFullscreen: a };
}
function Px({
  isFullscreen: e,
  onToggle: t
}) {
  return /* @__PURE__ */ r.jsxs(cr, { children: [
    /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(
      ve,
      {
        type: "button",
        variant: "ghost",
        size: "icon",
        className: "flex-shrink-0 text-muted-foreground hover:text-foreground",
        style: {
          width: qe.previewControlButtonSize,
          height: qe.previewControlButtonSize
        },
        "aria-label": e ? "Exit fullscreen" : "Fullscreen preview",
        onClick: t,
        children: e ? /* @__PURE__ */ r.jsx(sf, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(_o, { className: "w-3.5 h-3.5" })
      }
    ) }),
    /* @__PURE__ */ r.jsx(ur, { side: "top", children: e ? "Exit fullscreen (Esc)" : "Fullscreen program monitor" })
  ] });
}
const rl = [
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
], Ix = 0.02;
function Tx(e, t) {
  if (e <= 0 || t <= 0) return "horizontal";
  const n = e / t;
  return Math.abs(n - 1) < Ix ? "square" : n > 1 ? "horizontal" : "vertical";
}
function Ex({
  width: e,
  height: t
}) {
  const n = er((x) => x.currentProject?.id), a = er((x) => x.updateProject), [o, c] = s.useState(!1), i = s.useRef(null), l = s.useCallback(() => {
    i.current?.blur();
  }, []), u = Tx(e, t), d = rl.find((x) => x.id === u), f = d?.label ?? `${e}×${t}`, m = u === "vertical" ? Rm : u === "square" ? hu : Pm, b = async (x, v) => {
    if (!(!n || o)) {
      c(!0);
      try {
        await a(n, { width: x, height: v });
      } finally {
        c(!1);
      }
    }
  }, h = !n || o;
  return /* @__PURE__ */ r.jsxs(
    ql,
    {
      onOpenChange: (x) => {
        x || requestAnimationFrame(l);
      },
      children: [
        /* @__PURE__ */ r.jsx(Xl, { asChild: !0, children: /* @__PURE__ */ r.jsxs(
          ve,
          {
            ref: i,
            type: "button",
            variant: "ghost",
            disabled: h,
            className: "flex-shrink-0 gap-1 px-1.5 text-muted-foreground hover:text-foreground",
            style: { height: qe.previewControlButtonSize },
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
          Zl,
          {
            align: "end",
            className: "min-w-[240px]",
            onCloseAutoFocus: (x) => {
              x.preventDefault(), requestAnimationFrame(l);
            },
            children: [
              /* @__PURE__ */ r.jsxs(af, { className: "text-xs font-normal text-muted-foreground", children: [
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
              /* @__PURE__ */ r.jsx(of, {}),
              rl.map((x) => {
                const v = u === x.id;
                return /* @__PURE__ */ r.jsxs(
                  Jl,
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
const Fx = s.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r.jsx(
  pu,
  {
    ref: n,
    className: fr(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
Fx.displayName = pu.displayName;
const jx = [
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
  jx.flatMap(
    (e) => e.items.flatMap((t) => t.keys.map((n) => [n, t]))
  )
);
const Nx = null, wo = Fa("MediaSidebar"), So = "min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 [scrollbar-gutter:stable]", Ax = s.memo(function({ fillContainer: t = !1 }) {
  const n = ts((C) => C.editorDensity), a = Ta(n), o = Ct((C) => C.leftSidebarOpen), c = Ct((C) => C.toggleLeftSidebar), i = Ct((C) => C.mediaFullColumn), l = Ct((C) => C.toggleMediaFullColumn), u = Ct((C) => C.setKeyframeEditorOpen), d = Ct((C) => C.toggleKeyframeEditorOpen), f = Ct((C) => C.activeTab), m = f === "keyframes", b = Ct((C) => C.setActiveTab), h = Ct((C) => C.sidebarWidth), x = Ct((C) => C.setSidebarWidth), v = s.useRef(m), S = s.useRef(null);
  s.useEffect(() => {
    if (t) return;
    const C = v.current;
    if (v.current = m, m && !C) {
      const B = Math.floor(window.innerWidth * 0.35), U = Zi(B, a);
      U > h && (S.current = h, x(U));
    } else !m && C && S.current !== null && (x(S.current), S.current = null);
  }, [t, m, a, h, x]);
  const y = s.useRef(!1), w = s.useRef(0), k = s.useRef(0), R = s.useRef(!1), O = s.useCallback((C) => {
    C.preventDefault(), y.current = !0, w.current = C.clientX, k.current = h, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
  }, [h]);
  s.useEffect(() => {
    const C = (U) => {
      if (!y.current) return;
      const J = U.clientX - w.current, ne = Zi(k.current + J, a);
      x(ne);
    }, B = () => {
      y.current && (y.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "");
    };
    return document.addEventListener("mousemove", C), document.addEventListener("mouseup", B), () => {
      document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", B), y.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "";
    };
  }, [a, x]);
  const L = s.useCallback((C) => {
    const { tracks: B, items: U, fps: J, addItem: ne } = be.getState(), { activeTrackId: me, selectItems: xe } = Pt.getState(), we = er.getState().currentProject, Re = ao({
      tracks: B,
      items: U,
      itemType: "text",
      preferredTrackId: me
    });
    if (!Re) {
      wo.warn("No available track for text item");
      return;
    }
    const Be = da(J), Fe = re.getState().currentFrame, De = oo(
      Fe,
      Be,
      Re.id,
      U
    ) ?? Fe, Qe = we?.metadata.width ?? 1920, je = we?.metadata.height ?? 1080, Ge = {
      ...cf({
        trackId: Re.id,
        from: De,
        durationInFrames: Be,
        canvasWidth: Qe,
        canvasHeight: je
      }),
      ...C.getItemOverrides()
    };
    ne(Ge), xe([Ge.id]);
  }, []), I = s.useCallback(() => {
    L(ds);
  }, [L]), N = s.useCallback((C) => {
    const { tracks: B, items: U, fps: J, addItem: ne } = be.getState(), { activeTrackId: me, selectItems: xe } = Pt.getState(), we = er.getState().currentProject, Re = ao({
      tracks: B,
      items: U,
      itemType: "shape",
      preferredTrackId: me
    });
    if (!Re) {
      wo.warn("No available track for shape item");
      return;
    }
    const Be = da(J), Fe = re.getState().currentFrame, De = oo(
      Fe,
      Be,
      Re.id,
      U
    ) ?? Fe, Qe = we?.metadata.width ?? 1920, je = we?.metadata.height ?? 1080, ee = lf({
      trackId: Re.id,
      from: De,
      durationInFrames: Be,
      canvasWidth: Qe,
      canvasHeight: je,
      shapeType: C
    });
    ne(ee), xe([ee.id]);
  }, []), P = s.useCallback((C, B) => {
    const { tracks: U, items: J, fps: ne, addItem: me } = be.getState(), { activeTrackId: xe, selectItems: we } = Pt.getState(), Re = ao({
      tracks: U,
      items: J,
      itemType: "adjustment",
      preferredTrackId: xe
    });
    if (!Re) {
      wo.warn("No available track for adjustment layer");
      return;
    }
    const Be = da(ne), Fe = re.getState().currentFrame, De = oo(
      Fe,
      Be,
      Re.id,
      J
    ) ?? Fe, Qe = uf({
      trackId: Re.id,
      from: De,
      durationInFrames: Be,
      effects: C,
      label: B
    });
    me(Qe), we([Qe.id]);
  }, []), T = s.useCallback((C) => {
    const B = co.find((U) => U.id === C);
    B && P(B.effects, B.name);
  }, [P]), j = s.useCallback((C) => {
    const { selectedItemIds: B } = Pt.getState(), { items: U, addEffect: J } = be.getState(), ne = B.filter((me) => {
      const xe = U.find((we) => we.id === me);
      return xe && xe.type !== "audio";
    });
    if (ne.length > 0) {
      const me = io(C), xe = {
        type: "gpu-effect",
        gpuEffectType: C,
        params: me
      };
      ne.forEach((we) => J(we, xe));
    } else {
      const me = io(C);
      P(
        [{ type: "gpu-effect", gpuEffectType: C, params: me }]
      );
    }
  }, [P]), E = s.useMemo(() => df(), []), A = s.useMemo(
    () => E.flatMap(
      ({ effects: C }) => C.map((B) => ({ id: B.id, def: B }))
    ),
    [E]
  ), z = s.useMemo(() => co.map((C) => C.id), []), { previews: M, trigger: q } = Zm(A, z), V = [
    { id: "media", icon: nu, label: "Media" },
    { id: "text", icon: ti, label: "Text" },
    { id: "shapes", icon: Im, label: "Shapes" },
    { id: "effects", icon: Ji, label: "Effects" },
    { id: "transitions", icon: si, label: "Transitions" },
    { id: "ai", icon: Tm, label: "AI" }
  ].filter((C) => C.id !== "ai"), X = s.useCallback(() => R.current ? (R.current = !1, !0) : !1, []), D = s.useCallback((C) => (B) => {
    B.dataTransfer.effectAllowed = "copy";
    const U = {
      type: "timeline-template",
      ...C
    };
    R.current = !0;
    const J = JSON.stringify(U);
    B.dataTransfer.setData("application/json", J), B.dataTransfer.setData("text/plain", J), ff(U);
  }, []), W = s.useCallback(() => {
    mf(), window.setTimeout(() => {
      R.current = !1;
    }, 0);
  }, []), Y = t ? void 0 : { width: h, transition: y.current ? "none" : "width 200ms" }, pe = t ? void 0 : { width: h };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `flex h-full min-h-0 w-full ${t ? "min-w-0 flex-1" : "flex-shrink-0"}`,
      children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "panel-header flex h-full min-h-0 flex-shrink-0 flex-col items-center self-stretch border-r border-border",
            style: { width: qe.sidebarRailWidth },
            children: [
              /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: "flex items-center justify-center border-b border-border w-full",
                  style: { height: qe.sidebarHeaderHeight },
                  children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      onClick: c,
                      className: "rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors",
                      style: { width: qe.sidebarHeaderButtonSize, height: qe.sidebarHeaderButtonSize },
                      "data-tooltip": o ? "Collapse Panel" : "Expand Panel",
                      "data-tooltip-side": "right",
                      children: o ? /* @__PURE__ */ r.jsx(Ts, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(Es, { className: "w-3.5 h-3.5" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-1 py-1.5", children: [
                V.map(({ id: C, icon: B, label: U }) => /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    onClick: () => {
                      f === C && o ? c() : (b(C), o || c(), C === "effects" && q());
                    },
                    className: `
                w-9 h-9 rounded-lg flex items-center justify-center transition-all
                ${f === C && o ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}
              `,
                    "data-tooltip": U,
                    "data-tooltip-side": "right",
                    children: /* @__PURE__ */ r.jsx(B, { className: "w-4 h-4" })
                  },
                  C
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
                    children: /* @__PURE__ */ r.jsx(hf, { className: "w-4 h-4" })
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
            style: o ? Y : { transition: "width 200ms" },
            children: [
              /* @__PURE__ */ r.jsx(s.Activity, { mode: o ? "visible" : "hidden", children: /* @__PURE__ */ r.jsxs("div", { className: "flex h-full min-h-0 min-w-0 flex-1 flex-col w-full", style: pe, children: [
                /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: m ? "flex-1 min-h-0 flex flex-col overflow-hidden" : "contents",
                    children: /* @__PURE__ */ r.jsx(
                      Sd,
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
                      style: { height: qe.sidebarHeaderHeight },
                      children: [
                        /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium text-foreground", children: V.find((C) => C.id === f)?.label }),
                        !t && /* @__PURE__ */ r.jsx(
                          ve,
                          {
                            variant: "ghost",
                            size: "icon",
                            className: "shrink-0",
                            style: { width: qe.sidebarHeaderButtonSize, height: qe.sidebarHeaderButtonSize },
                            onClick: l,
                            "data-tooltip": i ? "Dock to preview" : "Expand full column",
                            "data-tooltip-side": "bottom",
                            children: i ? /* @__PURE__ */ r.jsx(ri, { className: "w-3 h-3" }) : /* @__PURE__ */ r.jsx(ni, { className: "w-3 h-3" })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ r.jsx("div", { className: `min-h-0 flex-1 overflow-hidden ${f === "media" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsx(kd, {}) }),
                  /* @__PURE__ */ r.jsx("div", { className: `${So} ${f === "text" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Plain text" }),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          draggable: !0,
                          onDragStart: D({
                            itemType: "text",
                            label: ds.label,
                            stylePresetId: ds.id
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
                              style: { background: ds.cardBg },
                              children: /* @__PURE__ */ r.jsx("span", { style: ds.previewStyle, children: "Text" })
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground", children: "Text styles" }) }),
                      /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-2 gap-2", children: pf.map((C) => /* @__PURE__ */ r.jsxs(
                        "button",
                        {
                          type: "button",
                          draggable: !0,
                          onDragStart: D({
                            itemType: "text",
                            label: C.label,
                            stylePresetId: C.id
                          }),
                          onDragEnd: W,
                          onClick: () => {
                            X() || L(C);
                          },
                          className: "flex flex-col rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary/50 transition-colors overflow-hidden text-center",
                          children: [
                            /* @__PURE__ */ r.jsx(
                              "div",
                              {
                                className: "flex min-h-[56px] items-center justify-center px-1.5 py-2",
                                style: { background: C.cardBg },
                                children: /* @__PURE__ */ r.jsx("span", { style: C.previewStyle, children: "Text" })
                              }
                            ),
                            /* @__PURE__ */ r.jsx("span", { className: "text-[10px] leading-tight text-muted-foreground px-1 py-1.5 truncate", children: C.label })
                          ]
                        },
                        C.id
                      )) })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ r.jsx("div", { className: `${So} ${f === "shapes" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-3 gap-1.5", children: [
                    /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        draggable: !0,
                        onDragStart: D({ itemType: "shape", label: "Rectangle", shapeType: "rectangle" }),
                        onDragEnd: W,
                        onClick: () => {
                          X() || N("rectangle");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(hu, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          X() || N("circle");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Bo, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          X() || N("triangle");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Em, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          X() || N("ellipse");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Bo, { className: "w-3.5 h-2.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          X() || N("star");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Fm, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          X() || N("polygon");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(jm, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          X() || N("heart");
                        },
                        className: "flex flex-col items-center justify-center gap-1 p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Nm, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Am, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground", children: "Pen" })
                        ]
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ r.jsx("div", { className: `${So} ${f === "effects" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsxs("div", { className: "space-y-3", children: [
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
                          /* @__PURE__ */ r.jsx("div", { className: "w-8 h-8 rounded-md border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70 flex-shrink-0", children: /* @__PURE__ */ r.jsx(Ji, { className: "w-4 h-4 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("div", { className: "text-left", children: /* @__PURE__ */ r.jsx("div", { className: "text-xs text-muted-foreground group-hover:text-foreground", children: "Blank Adjustment Layer" }) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5", children: "Presets" }),
                      /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-3 gap-1.5", children: co.map((C) => /* @__PURE__ */ r.jsxs(
                        "button",
                        {
                          draggable: !0,
                          onDragStart: D({
                            itemType: "adjustment",
                            label: C.name,
                            effects: C.effects
                          }),
                          onDragEnd: W,
                          onClick: () => {
                            X() || T(C.id);
                          },
                          className: "flex flex-col items-center gap-1 p-1.5 rounded-md border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-colors group",
                          children: [
                            M.has(`preset:${C.id}`) ? /* @__PURE__ */ r.jsx(
                              "img",
                              {
                                src: M.get(`preset:${C.id}`),
                                alt: "",
                                draggable: !1,
                                className: "w-full aspect-video rounded-sm object-cover"
                              }
                            ) : /* @__PURE__ */ r.jsx("div", { className: "w-full aspect-video rounded-sm bg-muted flex items-center justify-center", children: /* @__PURE__ */ r.jsx(Ps, { className: "w-3 h-3 text-muted-foreground/50" }) }),
                            /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground text-center leading-tight", children: C.name })
                          ]
                        },
                        C.id
                      )) })
                    ] }),
                    E.map(({ category: C, effects: B }) => /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5", children: C }),
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
                              params: io(U.id)
                            }]
                          }),
                          onDragEnd: W,
                          onClick: () => {
                            X() || j(U.id);
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
                    ] }, C))
                  ] }) }),
                  /* @__PURE__ */ r.jsx("div", { className: `min-h-0 flex-1 overflow-hidden ${f === "transitions" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsx(tp, {}) }),
                  Nx
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
function nl(e) {
  return e ?? "#000000";
}
function Dx(e, t) {
  const n = e.metadata;
  return t.width !== void 0 && t.width !== n.width || t.height !== void 0 && t.height !== n.height || t.fps !== void 0 && t.fps !== n.fps || t.backgroundColor !== void 0 && nl(t.backgroundColor) !== nl(n.backgroundColor);
}
async function Ox({
  project: e,
  updates: t,
  command: n,
  updateProject: a,
  markDirty: o,
  onApplied: c
}) {
  if (!Dx(e, t))
    return null;
  const i = gf(), l = await a(e.id, t);
  return c?.(l), o(), xf.getState().addUndoEntry(n, i), l;
}
const _x = s.memo(function({
  initialColor: t,
  onColorChange: n
}) {
  const [a, o] = s.useState(t), [c, i] = s.useState(!1), l = s.useRef(null), u = Xe((h) => h.setCanvasBackgroundPreview), d = Xe((h) => h.clearCanvasBackgroundPreview);
  s.useEffect(() => {
    o(t);
  }, [t]);
  const f = s.useCallback((h) => {
    o(h), u(h);
  }, [u]), m = s.useCallback(() => {
    d(), n(a);
  }, [a, n, d]), b = s.useCallback(() => {
    m(), i(!1);
  }, [m]);
  return s.useEffect(() => {
    if (!c) return;
    const h = (x) => {
      l.current && !l.current.contains(x.target) && b();
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [c, b]), /* @__PURE__ */ r.jsxs("div", { ref: l, className: "relative flex-1", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        onClick: () => i(!c),
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
    c && /* @__PURE__ */ r.jsx("div", { className: "absolute top-8 left-0 z-50 p-2 bg-popover border border-border rounded-lg shadow-lg", children: /* @__PURE__ */ r.jsx(bf, { color: a, onChange: f }) })
  ] });
}), ko = 320, Co = 240, Mo = 7680, Ro = 4320, Lx = s.memo(function() {
  const t = er((R) => R.currentProject), n = er((R) => R.updateProject), a = be((R) => R.fps), o = be((R) => R.markDirty), [c, i] = s.useState(!1), l = be(
    (R) => R.items.length === 0 ? 0 : Math.max(...R.items.map((O) => O.from + O.durationInFrames))
  ), u = t?.metadata.width ?? 1920, d = t?.metadata.height ?? 1080, f = t?.metadata.backgroundColor ?? "#000000", m = s.useCallback(async (R, O) => {
    if (t)
      try {
        await Ox({
          project: t,
          updates: R,
          command: O,
          updateProject: n,
          markDirty: o
        });
      } catch (L) {
        Zt.error("Failed to update canvas settings", {
          description: L instanceof Error ? L.message : "Please try again."
        });
      }
  }, [t, o, n]), b = s.useCallback(() => {
    i((R) => !R);
  }, []), h = s.useCallback(
    (R) => {
      let O = Math.round(R / 2) * 2;
      if (O = Math.min(Mo, Math.max(ko, O)), c && d > 0) {
        const L = u / d;
        let I = Math.round(O / L);
        I = Math.round(I / 2) * 2, I = Math.min(Ro, Math.max(Co, I)), m(
          { width: O, height: I },
          { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["width", "height"] } }
        );
      } else
        m(
          { width: O },
          { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["width"] } }
        );
    },
    [m, c, d, u]
  ), x = s.useCallback(
    (R) => {
      let O = Math.round(R / 2) * 2;
      if (O = Math.min(Ro, Math.max(Co, O)), c && u > 0) {
        const L = u / d;
        let I = Math.round(O * L);
        I = Math.round(I / 2) * 2, I = Math.min(Mo, Math.max(ko, I)), m(
          { width: I, height: O },
          { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["width", "height"] } }
        );
      } else
        m(
          { height: O },
          { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["height"] } }
        );
    },
    [m, c, d, u]
  ), v = s.useCallback(() => {
    m(
      { width: d, height: u },
      { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["width", "height"], operation: "swap" } }
    );
  }, [m, d, u]), S = s.useCallback(() => {
    m(
      { width: 1920, height: 1080 },
      { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["width", "height"], operation: "reset" } }
    );
  }, [m]), y = s.useCallback(
    (R) => {
      m(
        { backgroundColor: R },
        { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["backgroundColor"] } }
      );
    },
    [m]
  ), w = s.useCallback(() => {
    f !== "#000000" && m(
      { backgroundColor: "#000000" },
      { type: "UPDATE_PROJECT_METADATA", payload: { fields: ["backgroundColor"], operation: "reset" } }
    );
  }, [m, f]), k = (R) => {
    const O = R / a, L = Math.floor(O / 60), I = Math.floor(O % 60), N = R % a;
    return `${String(L).padStart(2, "0")}:${String(I).padStart(2, "0")}.${String(N).padStart(2, "0")}`;
  };
  return t ? /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ r.jsxs(mr, { title: "Canvas", icon: Dm, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(
        vf,
        {
          width: u,
          height: d,
          aspectLocked: c,
          onWidthChange: h,
          onHeightChange: x,
          onAspectLockToggle: b,
          minWidth: ko,
          minHeight: Co,
          maxWidth: Mo,
          maxHeight: Ro,
          step: 2
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2 mt-2", children: [
        /* @__PURE__ */ r.jsxs(
          ve,
          {
            variant: "outline",
            size: "sm",
            className: "flex-1 h-7 text-xs",
            onClick: v,
            children: [
              /* @__PURE__ */ r.jsx(Om, { className: "w-3 h-3 mr-1.5" }),
              "Swap"
            ]
          }
        ),
        /* @__PURE__ */ r.jsxs(
          ve,
          {
            variant: "outline",
            size: "sm",
            className: "flex-1 h-7 text-xs",
            onClick: S,
            children: [
              /* @__PURE__ */ r.jsx(Gt, { className: "w-3 h-3 mr-1.5" }),
              "Reset"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Background", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          _x,
          {
            initialColor: f,
            onColorChange: y
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: w,
            title: "Reset to black",
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx(qo, {}),
    /* @__PURE__ */ r.jsxs(mr, { title: "Duration", icon: jl, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Duration", children: /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted-foreground tabular-nums", children: k(l) }) }),
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
}), Bx = Qm, Xu = s.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r.jsx(
  gu,
  {
    ref: n,
    className: fr(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Xu.displayName = gu.displayName;
const ha = s.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r.jsx(
  xu,
  {
    ref: n,
    className: fr(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e
    ),
    ...t
  }
));
ha.displayName = xu.displayName;
const pa = s.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r.jsx(
  bu,
  {
    ref: n,
    className: fr(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
pa.displayName = bu.displayName;
function mn({
  itemIds: e,
  property: t,
  currentValue: n,
  className: a,
  disabled: o = !1
}) {
  const c = Aa(), i = e[0], l = hn(
    s.useCallback(
      (O) => i ? O.keyframesByItemId[i] : void 0,
      [i]
    )
  ), u = be((O) => O.addKeyframe), d = be((O) => O.removeKeyframe), f = Yt(
    s.useCallback(
      (O) => i ? O.itemById[i] : void 0,
      [i]
    )
  ), m = Ss(
    gn(
      s.useCallback(
        (O) => i ? O.transitions.filter(
          (L) => L.leftClipId === i || L.rightClipId === i
        ) : [],
        [i]
      )
    )
  ), b = s.useMemo(() => f ? c - f.from : 0, [c, f]), h = s.useMemo(() => {
    if (!(!f || !i))
      return Bl(b, i, f, m);
  }, [b, i, f, m]), x = h !== void 0, v = s.useMemo(() => {
    if (!l) return;
    const O = l.properties.find((L) => L.property === t);
    if (O)
      return O.keyframes.find((L) => L.frame === b);
  }, [l, t, b]), S = v !== void 0, y = s.useMemo(() => {
    if (!l) return !1;
    const O = l.properties.find((L) => L.property === t);
    return O ? O.keyframes.length > 0 : !1;
  }, [l, t]), w = s.useCallback(() => {
    o || x || !i || b < 0 || (S && v ? d(i, t, v.id) : u(i, t, b, n));
  }, [
    o,
    x,
    i,
    b,
    S,
    v,
    d,
    u,
    t,
    n
  ]), k = !f || b < 0 || b >= f.durationInFrames, R = o || x || k;
  return /* @__PURE__ */ r.jsxs(cr, { children: [
    /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        onClick: w,
        disabled: R,
        className: fr(
          "flex items-center justify-center w-5 h-5 rounded-sm transition-colors",
          "hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          R && "opacity-50 cursor-not-allowed",
          x && "line-through",
          S && !x && "text-primary",
          !S && y && !x && "text-primary/50",
          !S && !y && !x && "text-muted-foreground",
          x && "text-muted-foreground/50",
          a
        ),
        "aria-label": x ? "Keyframes blocked (transition region)" : k ? "Playhead outside clip bounds" : S ? "Remove keyframe" : "Add keyframe",
        children: /* @__PURE__ */ r.jsx(
          yf,
          {
            className: fr(
              "w-3 h-3 rotate-0 transition-transform",
              S && !x && "fill-current"
            )
          }
        )
      }
    ) }),
    /* @__PURE__ */ r.jsx(ur, { side: "top", className: "text-xs max-w-[200px]", children: x && h ? /* @__PURE__ */ r.jsx(r.Fragment, { children: wf(h) }) : k ? /* @__PURE__ */ r.jsx(r.Fragment, { children: "Playhead is outside clip bounds" }) : S ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      "Remove keyframe at frame ",
      b
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      "Add keyframe at frame ",
      b
    ] }) })
  ] });
}
const Hx = s.memo(function({
  items: t,
  canvas: n,
  onTransformChange: a,
  aspectLocked: o,
  onAspectLockToggle: c
}) {
  const i = s.useMemo(() => t.map((U) => U.id), [t]), l = s.useMemo(() => new Set(i), [i]), u = s.useMemo(() => new Map(t.map((U) => [U.id, U])), [t]), d = Aa(), f = hn(
    gn(
      s.useCallback(
        (U) => i.map((J) => U.keyframesByItemId[J] ?? null),
        [i]
      )
    )
  ), m = s.useMemo(() => {
    const U = /* @__PURE__ */ new Map();
    for (const [J, ne] of i.entries())
      U.set(ne, f[J] ?? null);
    return U;
  }, [i, f]), b = Xe((U) => U.setTransformPreview), h = Xe((U) => U.clearPreview), x = Xe((U) => U.activeGizmo), v = Xe((U) => U.previewTransform), S = s.useMemo(() => !x || !v || !l.has(x.itemId) ? null : {
    itemId: x.itemId,
    transform: v
  }, [x, v, l]), y = s.useMemo(() => {
    const U = /* @__PURE__ */ new Map();
    for (const J of t) {
      const ne = (() => {
        if (S && S.itemId === J.id)
          return S.transform;
        const me = Er(J), xe = Yr(J, n, me), we = m.get(J.id) ?? void 0;
        if (!we) return xe;
        const Re = d - J.from;
        return Ra(xe, we, Re);
      })();
      U.set(J.id, {
        x: ne.x,
        y: ne.y,
        width: ne.width,
        height: ne.height,
        rotation: ne.rotation
      });
    }
    return U;
  }, [t, n, S, m, d]), { x: w, y: k, width: R, height: O, rotation: L } = s.useMemo(() => {
    if (t.length === 0)
      return { x: 0, y: 0, width: 0, height: 0, rotation: 0 };
    const U = t.map((ne) => y.get(ne.id)).filter((ne) => ne !== void 0);
    if (U.length === 0)
      return { x: 0, y: 0, width: 0, height: 0, rotation: 0 };
    const J = (ne) => {
      const me = U.map(ne), xe = me[0];
      return me.every((we) => Math.abs(we - xe) < 0.1) ? xe : "mixed";
    };
    return {
      x: J((ne) => ne.x),
      y: J((ne) => ne.y),
      width: J((ne) => ne.width),
      height: J((ne) => ne.height),
      rotation: J((ne) => ne.rotation)
    };
  }, [t, y]), I = s.useMemo(() => R === "mixed" || O === "mixed" ? 1 : O > 0 ? R / O : 1, [R, O]), N = be((U) => U.applyAutoKeyframeOperations), P = be((U) => U.updateItemsTransformMap), T = s.useCallback(
    (U, J, ne) => {
      const me = u.get(U);
      if (!me) return null;
      const xe = m.get(U) ?? void 0;
      return Zn(me, xe, J, ne, d);
    },
    [d, u, m]
  ), j = s.useCallback(
    (U) => {
      const J = {};
      t.forEach((ne) => {
        J[ne.id] = { x: U };
      }), b(J);
    },
    [t, b]
  ), E = s.useCallback(
    (U) => {
      const J = [], ne = [];
      for (const me of i) {
        const xe = T(me, "x", U);
        xe ? J.push(xe) : ne.push(me);
      }
      J.length > 0 && N(J), ne.length > 0 && a(ne, { x: U }), queueMicrotask(() => h());
    },
    [i, a, h, T, N]
  ), A = s.useCallback(
    (U) => {
      const J = {};
      t.forEach((ne) => {
        J[ne.id] = { y: U };
      }), b(J);
    },
    [t, b]
  ), z = s.useCallback(
    (U) => {
      const J = [], ne = [];
      for (const me of i) {
        const xe = T(me, "y", U);
        xe ? J.push(xe) : ne.push(me);
      }
      J.length > 0 && N(J), ne.length > 0 && a(ne, { y: U }), queueMicrotask(() => h());
    },
    [i, a, h, T, N]
  ), M = s.useCallback(
    (U) => {
      const J = {};
      t.forEach((ne) => {
        if (o && O !== "mixed") {
          const me = Math.round(U / I);
          J[ne.id] = { width: U, height: me };
        } else
          J[ne.id] = { width: U };
      }), b(J);
    },
    [t, b, o, O, I]
  ), q = s.useCallback(
    (U) => {
      const J = o && O !== "mixed" ? Math.round(U / I) : null, ne = [], me = /* @__PURE__ */ new Map();
      for (const xe of i) {
        const we = T(xe, "width", U), Re = J !== null ? T(xe, "height", J) : null;
        we && ne.push(we), Re && ne.push(Re);
        const Be = {};
        we || (Be.width = U), J !== null && !Re && (Be.height = J), Object.keys(Be).length > 0 && me.set(xe, Be);
      }
      ne.length > 0 && N(ne), me.size > 0 && P(me, { operation: "resize" }), queueMicrotask(() => h());
    },
    [
      i,
      a,
      h,
      o,
      O,
      I,
      T,
      N,
      P
    ]
  ), V = s.useCallback(
    (U) => {
      const J = {};
      t.forEach((ne) => {
        if (o && R !== "mixed") {
          const me = Math.round(U * I);
          J[ne.id] = { width: me, height: U };
        } else
          J[ne.id] = { height: U };
      }), b(J);
    },
    [t, b, o, R, I]
  ), X = s.useCallback(
    (U) => {
      const J = o && R !== "mixed" ? Math.round(U * I) : null, ne = [], me = /* @__PURE__ */ new Map();
      for (const xe of i) {
        const we = T(xe, "height", U), Re = J !== null ? T(xe, "width", J) : null;
        we && ne.push(we), Re && ne.push(Re);
        const Be = {};
        we || (Be.height = U), J !== null && !Re && (Be.width = J), Object.keys(Be).length > 0 && me.set(xe, Be);
      }
      ne.length > 0 && N(ne), me.size > 0 && P(me, { operation: "resize" }), queueMicrotask(() => h());
    },
    [
      i,
      a,
      h,
      o,
      R,
      I,
      T,
      N,
      P
    ]
  ), D = s.useCallback(
    (U) => {
      const J = {};
      t.forEach((ne) => {
        J[ne.id] = { rotation: U };
      }), b(J);
    },
    [t, b]
  ), W = s.useCallback(
    (U) => {
      const J = [], ne = [];
      for (const me of i) {
        const xe = T(me, "rotation", U);
        xe ? J.push(xe) : ne.push(me);
      }
      J.length > 0 && N(J), ne.length > 0 && a(ne, { rotation: U }), queueMicrotask(() => h());
    },
    [i, a, h, T, N]
  ), Y = Qt((U) => U.mediaItems), pe = s.useCallback(() => {
    t.forEach((J) => {
      const ne = Er(J), me = Yr(J, n, ne);
      if (J.type === "shape" || J.type === "text") {
        const Re = Math.min(me.width, me.height), Be = {};
        Math.abs(me.width - Re) > 0.5 && (Be.width = Re), Math.abs(me.height - Re) > 0.5 && (Be.height = Re), Object.keys(Be).length > 0 && a([J.id], Be);
        return;
      }
      let xe = Er(J);
      if (!xe && J.mediaId) {
        const Re = Y.find((Be) => Be.id === J.mediaId);
        Re && Re.width && Re.height && (xe = { width: Re.width, height: Re.height });
      }
      if (!xe) return;
      const we = {};
      Math.abs(me.width - xe.width) > 0.5 && (we.width = xe.width), Math.abs(me.height - xe.height) > 0.5 && (we.height = xe.height), Object.keys(we).length !== 0 && a([J.id], we);
    });
  }, [t, a, Y, n]), C = s.useCallback(() => {
    t.forEach((J) => {
      const ne = Er(J), me = Yr(J, n, ne), xe = {};
      Math.abs(me.x) > 0.5 && (xe.x = 0), Math.abs(me.y) > 0.5 && (xe.y = 0), Object.keys(xe).length !== 0 && a([J.id], xe);
    });
  }, [t, a, n]), B = s.useCallback(() => {
    t.forEach((J) => {
      const ne = Er(J), me = Yr(J, n, ne);
      Math.abs(me.rotation) <= 0.5 || a([J.id], { rotation: 0 });
    });
  }, [t, a, n]);
  return /* @__PURE__ */ r.jsxs(mr, { title: "Transform", icon: _m, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Position", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-1 w-full", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-1 flex-1", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ r.jsx(
            Kt,
            {
              value: w,
              onChange: E,
              onLiveChange: j,
              label: "X",
              unit: "px",
              step: 1,
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ r.jsx(
            mn,
            {
              itemIds: i,
              property: "x",
              currentValue: w === "mixed" ? 0 : w
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ r.jsx(
            Kt,
            {
              value: k,
              onChange: z,
              onLiveChange: A,
              label: "Y",
              unit: "px",
              step: 1,
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ r.jsx(
            mn,
            {
              itemIds: i,
              property: "y",
              currentValue: k === "mixed" ? 0 : k
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: C,
          title: "Reset to center",
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Size", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        Kt,
        {
          value: R,
          onChange: q,
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
        mn,
        {
          itemIds: i,
          property: "width",
          currentValue: R === "mixed" ? 100 : R
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: `h-7 w-7 flex-shrink-0 ${o ? "text-primary" : ""}`,
          onClick: c,
          title: o ? "Unlock aspect ratio" : "Lock aspect ratio",
          children: o ? /* @__PURE__ */ r.jsx(Sf, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(kf, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        Kt,
        {
          value: O,
          onChange: X,
          onLiveChange: V,
          label: "H",
          unit: "px",
          min: 1,
          max: 7680,
          step: 1,
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        mn,
        {
          itemIds: i,
          property: "height",
          currentValue: O === "mixed" ? 100 : O
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: pe,
          title: "Reset to original size",
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Rotation", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        dr,
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
        mn,
        {
          itemIds: i,
          property: "rotation",
          currentValue: L === "mixed" ? 0 : L
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: B,
          title: "Reset rotation",
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) })
  ] });
}), Ux = s.memo(function({
  items: t,
  canvas: n,
  onTransformChange: a
}) {
  const o = s.useMemo(() => t.map((T) => T.id), [t]), c = s.useMemo(() => new Map(t.map((T) => [T.id, T])), [t]), i = Aa(), l = hn(
    gn(
      s.useCallback(
        (T) => o.map((j) => T.keyframesByItemId[j] ?? null),
        [o]
      )
    )
  ), u = s.useMemo(() => {
    const T = /* @__PURE__ */ new Map();
    for (const [j, E] of o.entries())
      T.set(E, l[j] ?? null);
    return T;
  }, [o, l]), d = be((T) => T.updateItem), f = Xe((T) => T.setTransformPreview), m = Xe((T) => T.clearPreview), { opacityRaw: b, cornerRadius: h } = s.useMemo(() => {
    if (t.length === 0)
      return { opacityRaw: 1, cornerRadius: 0 };
    const T = t.map((E) => {
      const A = Er(E), z = Yr(E, n, A), M = u.get(E.id) ?? void 0;
      if (M) {
        const q = i - E.from;
        return Ra(z, M, q);
      }
      return z;
    }), j = (E) => {
      const A = T.map(E), z = A[0];
      return A.every((M) => Math.abs(M - z) < 0.01) ? z : "mixed";
    };
    return {
      opacityRaw: j((E) => E.opacity),
      cornerRadius: j((E) => E.cornerRadius)
    };
  }, [t, n, u, i]), x = b === "mixed" ? "mixed" : Math.round(b * 100), v = be((T) => T.applyAutoKeyframeOperations), S = s.useCallback(
    (T, j) => {
      const E = c.get(T);
      if (!E) return null;
      const A = u.get(T) ?? void 0;
      return Zn(E, A, "opacity", j, i);
    },
    [i, c, u]
  ), y = s.useCallback(
    (T, j) => {
      const E = c.get(T);
      if (!E) return null;
      const A = u.get(T) ?? void 0;
      return Zn(E, A, "cornerRadius", j, i);
    },
    [i, c, u]
  ), w = s.useCallback(
    (T) => {
      const j = {};
      t.forEach((E) => {
        j[E.id] = { opacity: T / 100 };
      }), f(j);
    },
    [t, f]
  ), k = s.useCallback(
    (T) => {
      const j = T / 100, E = [], A = [];
      for (const z of o) {
        const M = S(z, j);
        M ? E.push(M) : A.push(z);
      }
      E.length > 0 && v(E), A.length > 0 && a(A, { opacity: j }), queueMicrotask(() => m());
    },
    [o, a, m, S, v]
  ), R = s.useCallback(
    (T) => {
      const j = {};
      t.forEach((E) => {
        j[E.id] = { cornerRadius: T };
      }), f(j);
    },
    [t, f]
  ), O = s.useCallback(
    (T) => {
      const j = [], E = [];
      for (const A of o) {
        const z = y(A, T);
        z ? j.push(z) : E.push(A);
      }
      j.length > 0 && v(j), E.length > 0 && a(E, { cornerRadius: T }), queueMicrotask(() => m());
    },
    [o, a, m, y, v]
  ), L = s.useMemo(() => {
    if (t.length === 0) return "normal";
    const T = t[0].blendMode ?? "normal";
    return t.every((E) => (E.blendMode ?? "normal") === T) ? T : "mixed";
  }, [t]), I = s.useCallback(
    (T) => {
      for (const j of o)
        d(j, { blendMode: T });
    },
    [o, d]
  ), N = s.useCallback(() => {
    t.some((E) => {
      const A = Er(E), z = Yr(E, n, A);
      return Math.abs(z.opacity - 1) > 0.01;
    }) && a(o, { opacity: 1 });
  }, [t, o, a, n]), P = s.useCallback(() => {
    t.some((E) => {
      const A = Er(E);
      return Yr(E, n, A).cornerRadius > 0.5;
    }) && a(o, { cornerRadius: 0 });
  }, [t, o, a, n]);
  return /* @__PURE__ */ r.jsxs(mr, { title: "Composite", icon: Lm, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Opacity", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        dr,
        {
          value: x,
          onChange: k,
          onLiveChange: w,
          min: 0,
          max: 100,
          step: 1,
          unit: "%",
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        mn,
        {
          itemIds: o,
          property: "opacity",
          currentValue: b === "mixed" ? 1 : b
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: N,
          title: "Reset to 100%",
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Blend", children: /* @__PURE__ */ r.jsxs(
      ks,
      {
        value: L === "mixed" ? void 0 : L,
        onValueChange: I,
        children: [
          /* @__PURE__ */ r.jsx(Cs, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(Ms, { placeholder: L === "mixed" ? "Mixed" : "Normal" }) }),
          /* @__PURE__ */ r.jsx(Rs, { children: Cf.map((T) => /* @__PURE__ */ r.jsxs(su, { children: [
            /* @__PURE__ */ r.jsx(au, { className: "text-[10px] text-muted-foreground", children: T.label }),
            T.modes.map((j) => /* @__PURE__ */ r.jsx(Kn, { value: j, className: "text-xs", children: Mf[j] }, j))
          ] }, T.label)) })
        ]
      }
    ) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Radius", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        Kt,
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
        mn,
        {
          itemIds: o,
          property: "cornerRadius",
          currentValue: h === "mixed" ? 0 : h
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: P,
          title: "Reset to 0",
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) })
  ] });
}), Gx = 0.01;
function Or(e, t, n) {
  if (e.length === 0) return n;
  const a = e.map((i) => t(i) ?? n), o = a[0];
  return a.every((i) => typeof i == "number" && typeof o == "number" ? Math.abs(i - o) < Gx : i === o) ? o : "mixed";
}
const sl = 0.1, al = 10, hs = 0.1, ol = 0.01;
function Da(e) {
  return Math.max(1, e.sourceWidth ?? e.transform?.width ?? 1920);
}
function Oa(e) {
  return Math.max(1, e.sourceHeight ?? e.transform?.height ?? 1080);
}
function ps(e, t) {
  const n = t === "left" || t === "right" ? Da(e) : Oa(e);
  return jf(e.crop?.[t], n);
}
function mi(e) {
  return Math.max(1, If(Da(e), Oa(e)));
}
function il(e) {
  return Nf(e.crop?.softness, mi(e));
}
function cl(e, t, n) {
  const a = t === "left" || t === "right" ? Da(e) : Oa(e);
  return xa({
    ...e.crop,
    [t]: Ef(n, a)
  });
}
function ll(e, t) {
  return xa({
    ...e.crop,
    softness: Ff(t, mi(e))
  });
}
function Kr(e) {
  return e.toFixed(3);
}
function Vx({ items: e }) {
  const t = be((D) => D.rateStretchItem), n = be((D) => D.updateItem), a = Xe((D) => D.setPropertiesPreviewNew), o = Xe((D) => D.clearPreview), c = s.useMemo(
    () => e.filter((D) => D.type === "video"),
    [e]
  ), i = s.useMemo(() => c.map((D) => D.id), [c]), l = s.useMemo(
    () => e.filter((D) => D.type === "video" || D.type === "audio").map((D) => D.id),
    [e]
  ), u = Or(c, (D) => D.speed, 1), d = Or(c, (D) => D.fadeIn, 0), f = Or(c, (D) => D.fadeOut, 0), m = Or(c, (D) => ps(D, "left"), 0), b = Or(c, (D) => ps(D, "right"), 0), h = Or(c, (D) => ps(D, "top"), 0), x = Or(c, (D) => ps(D, "bottom"), 0), v = Or(c, il, 0), S = s.useMemo(
    () => Math.max(1, ...c.map(Da)),
    [c]
  ), y = s.useMemo(
    () => Math.max(1, ...c.map(Oa)),
    [c]
  ), w = s.useMemo(
    () => Math.max(1, ...c.map(mi)),
    [c]
  ), k = s.useCallback(
    (D) => {
      const W = Math.round(D * 100) / 100, Y = Math.max(sl, Math.min(al, W)), { items: pe, fps: C } = be.getState();
      pe.filter((B) => (B.type === "video" || B.type === "audio") && l.includes(B.id)).forEach((B) => {
        const U = B.speed || 1, J = B.sourceFps ?? C, ne = B.sourceEnd !== void 0 && B.sourceStart !== void 0 ? B.sourceEnd - B.sourceStart : Rf(B.durationInFrames, U, C, J), me = Math.max(1, Tf(ne, Y, J, C));
        t(B.id, B.from, me, Y);
      });
    },
    [l, t]
  ), R = s.useCallback(() => {
    queueMicrotask(() => o());
  }, [o]), O = s.useCallback(
    (D) => {
      const W = {};
      i.forEach((Y) => {
        W[Y] = { fadeIn: D };
      }), a(W);
    },
    [i, a]
  ), L = s.useCallback(
    (D) => {
      i.forEach((W) => n(W, { fadeIn: D })), R();
    },
    [i, n, R]
  ), I = s.useCallback(
    (D) => {
      const W = {};
      i.forEach((Y) => {
        W[Y] = { fadeOut: D };
      }), a(W);
    },
    [i, a]
  ), N = s.useCallback(
    (D) => {
      i.forEach((W) => n(W, { fadeOut: D })), R();
    },
    [i, n, R]
  ), P = s.useCallback(
    (D, W) => {
      const Y = {};
      c.forEach((pe) => {
        Y[pe.id] = {
          crop: cl(pe, D, W)
        };
      }), a(Y);
    },
    [a, c]
  ), T = s.useCallback(
    (D, W) => {
      c.forEach((Y) => {
        n(Y.id, {
          crop: cl(Y, D, W)
        });
      }), R();
    },
    [c, n, R]
  ), j = s.useCallback(
    (D) => {
      const W = {};
      c.forEach((Y) => {
        W[Y.id] = {
          crop: ll(Y, D)
        };
      }), a(W);
    },
    [a, c]
  ), E = s.useCallback(
    (D) => {
      c.forEach((W) => {
        n(W.id, {
          crop: ll(W, D)
        });
      }), R();
    },
    [c, n, R]
  ), A = s.useCallback(
    (D) => {
      c.some((Y) => ps(Y, D) > ol) && c.forEach((Y) => {
        n(Y.id, {
          crop: xa({
            ...Y.crop,
            [D]: 0
          })
        });
      });
    },
    [n, c]
  ), z = s.useCallback(() => {
    c.some((W) => Math.abs(il(W)) > ol) && c.forEach((W) => {
      n(W.id, {
        crop: xa({
          ...W.crop,
          softness: 0
        })
      });
    });
  }, [n, c]), M = be((D) => D.resetSpeedWithRipple), q = s.useCallback(() => {
    M(l);
  }, [l, M]), V = s.useCallback(() => {
    be.getState().items.some(
      (pe) => i.includes(pe.id) && (pe.fadeIn ?? 0) > 0.01
    ) && i.forEach((pe) => n(pe, { fadeIn: 0 }));
  }, [i, n]), X = s.useCallback(() => {
    be.getState().items.some(
      (pe) => i.includes(pe.id) && (pe.fadeOut ?? 0) > 0.01
    ) && i.forEach((pe) => n(pe, { fadeOut: 0 }));
  }, [i, n]);
  return c.length === 0 ? null : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(mr, { title: "Playback", icon: Pf, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Speed", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          dr,
          {
            value: u,
            onChange: k,
            min: sl,
            max: al,
            step: 0.01,
            unit: "x",
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: q,
            title: "Reset to 1x",
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Fade In", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          dr,
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
          ve,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: V,
            title: "Reset to 0",
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Fade Out", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          dr,
          {
            value: f,
            onChange: N,
            onLiveChange: I,
            min: 0,
            max: 5,
            step: 0.1,
            unit: "s",
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: X,
            title: "Reset to 0",
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsxs(mr, { title: "Cropping", icon: Bm, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Left", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          dr,
          {
            value: m,
            onChange: (D) => T("left", D),
            onLiveChange: (D) => P("left", D),
            min: 0,
            max: S,
            step: hs,
            unit: "px",
            formatValue: Kr,
            formatInputValue: Kr,
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: () => A("left"),
            title: "Reset left crop",
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Right", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          dr,
          {
            value: b,
            onChange: (D) => T("right", D),
            onLiveChange: (D) => P("right", D),
            min: 0,
            max: S,
            step: hs,
            unit: "px",
            formatValue: Kr,
            formatInputValue: Kr,
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: () => A("right"),
            title: "Reset right crop",
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Top", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          dr,
          {
            value: h,
            onChange: (D) => T("top", D),
            onLiveChange: (D) => P("top", D),
            min: 0,
            max: y,
            step: hs,
            unit: "px",
            formatValue: Kr,
            formatInputValue: Kr,
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: () => A("top"),
            title: "Reset top crop",
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Bottom", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          dr,
          {
            value: x,
            onChange: (D) => T("bottom", D),
            onLiveChange: (D) => P("bottom", D),
            min: 0,
            max: y,
            step: hs,
            unit: "px",
            formatValue: Kr,
            formatInputValue: Kr,
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: () => A("bottom"),
            title: "Reset bottom crop",
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Softness", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          dr,
          {
            value: v,
            onChange: E,
            onLiveChange: j,
            min: -w,
            max: w,
            step: hs,
            unit: "px",
            formatValue: Kr,
            formatInputValue: Kr,
            className: "flex-1 min-w-0"
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: z,
            title: "Reset crop softness",
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) })
    ] })
  ] });
}
const ul = 0.1, dl = 10;
function Po(e) {
  if (e.type !== "image") return !1;
  const t = e.label?.toLowerCase() ?? "";
  return t.endsWith(".gif") || t.endsWith(".webp");
}
function Wx({ items: e }) {
  const t = be((l) => l.rateStretchItem), n = s.useMemo(
    () => e.filter(Po),
    [e]
  ), a = s.useMemo(() => n.map((l) => l.id), [n]), o = Or(n, (l) => l.speed, 1), c = s.useCallback(
    (l) => {
      const u = Math.round(l * 100) / 100, d = Math.max(ul, Math.min(dl, u));
      be.getState().items.filter((m) => Po(m) && a.includes(m.id)).forEach((m) => {
        t(m.id, m.from, m.durationInFrames, d);
      });
    },
    [a, t]
  ), i = s.useCallback(() => {
    be.getState().items.filter((d) => Po(d) && a.includes(d.id)).forEach((d) => {
      const f = d.speed || 1;
      Math.abs(f - 1) <= 0.01 || t(d.id, d.from, d.durationInFrames, 1);
    });
  }, [a, t]);
  return n.length === 0 ? null : /* @__PURE__ */ r.jsx(mr, { title: "Animation", icon: Af, defaultOpen: !0, children: /* @__PURE__ */ r.jsx(Ke, { label: "Speed", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
    /* @__PURE__ */ r.jsx(
      Kt,
      {
        value: o,
        onChange: c,
        min: ul,
        max: dl,
        step: 0.1,
        unit: "x",
        className: "flex-1 min-w-0"
      }
    ),
    /* @__PURE__ */ r.jsx(
      ve,
      {
        variant: "ghost",
        size: "icon",
        className: "h-7 w-7 flex-shrink-0",
        onClick: i,
        title: "Reset to 1x",
        children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
      }
    )
  ] }) }) });
}
function zx(e) {
  const t = e.filter(
    (n) => n.type === "audio"
  );
  return t.length > 0 ? t : e.filter(
    (n) => n.type === "video" || n.type === "audio"
  );
}
const $x = -60, Kx = 12;
function Yx({ items: e }) {
  const t = be((N) => N.updateItem), n = Xe((N) => N.setPropertiesPreviewNew), a = Xe((N) => N.clearPreview), o = Aa(), c = be((N) => N.applyAutoKeyframeOperations), i = s.useMemo(
    () => zx(e),
    [e]
  ), l = s.useMemo(() => i.map((N) => N.id), [i]), u = s.useMemo(() => new Map(i.map((N) => [N.id, N])), [i]), d = hn(
    gn(
      s.useCallback(
        (N) => l.map((P) => N.keyframesByItemId[P] ?? null),
        [l]
      )
    )
  ), f = s.useMemo(() => {
    const N = /* @__PURE__ */ new Map();
    for (const [P, T] of l.entries())
      N.set(T, d[P] ?? null);
    return N;
  }, [l, d]), m = s.useMemo(() => {
    if (i.length === 0) return 0;
    const N = i.map((T) => {
      const j = T.volume ?? 0, E = f.get(T.id) ?? void 0;
      if (E) {
        const A = Df(E, "volume");
        if (A.length > 0) {
          const z = o - T.from;
          return Of(A, z, j);
        }
      }
      return j;
    }), P = N[0];
    return N.every((T) => Math.abs(T - P) < 0.01) ? Math.round(P * 10) / 10 : "mixed";
  }, [i, f, o]), b = Or(i, (N) => N.audioFadeIn, 0), h = Or(i, (N) => N.audioFadeOut, 0), x = s.useCallback(
    (N, P) => {
      const T = u.get(N);
      if (!T) return null;
      const j = f.get(N) ?? void 0;
      return Zn(T, j, "volume", P, o);
    },
    [u, o, f]
  ), v = s.useCallback(
    (N) => {
      const P = {};
      l.forEach((T) => {
        P[T] = { volume: N };
      }), n(P);
    },
    [l, n]
  ), S = s.useCallback(
    (N) => {
      const P = [], T = [];
      for (const j of l) {
        const E = x(j, N);
        E ? P.push(E) : T.push(j);
      }
      P.length > 0 && c(P), T.length > 0 && T.forEach((j) => t(j, { volume: N })), queueMicrotask(() => a());
    },
    [l, t, a, x, c]
  ), y = s.useCallback(
    (N) => {
      const P = {};
      l.forEach((T) => {
        P[T] = { audioFadeIn: N };
      }), n(P);
    },
    [l, n]
  ), w = s.useCallback(
    (N) => {
      l.forEach((P) => t(P, { audioFadeIn: N })), queueMicrotask(() => a());
    },
    [l, t, a]
  ), k = s.useCallback(
    (N) => {
      const P = {};
      l.forEach((T) => {
        P[T] = { audioFadeOut: N };
      }), n(P);
    },
    [l, n]
  ), R = s.useCallback(
    (N) => {
      l.forEach((P) => t(P, { audioFadeOut: N })), queueMicrotask(() => a());
    },
    [l, t, a]
  ), O = s.useCallback(() => {
    be.getState().items.some(
      (j) => l.includes(j.id) && Math.abs(j.volume ?? 0) > 0.1
    ) && l.forEach((j) => t(j, { volume: 0 }));
  }, [l, t]), L = s.useCallback(() => {
    be.getState().items.some(
      (j) => l.includes(j.id) && (j.audioFadeIn ?? 0) > 0.01
    ) && l.forEach((j) => t(j, { audioFadeIn: 0 }));
  }, [l, t]), I = s.useCallback(() => {
    be.getState().items.some(
      (j) => l.includes(j.id) && (j.audioFadeOut ?? 0) > 0.01
    ) && l.forEach((j) => t(j, { audioFadeOut: 0 }));
  }, [l, t]);
  return i.length === 0 ? null : /* @__PURE__ */ r.jsxs(mr, { title: "Audio", icon: ou, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Gain", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        dr,
        {
          value: m,
          onChange: S,
          onLiveChange: v,
          min: $x,
          max: Kx,
          step: 0.1,
          unit: "dB",
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        mn,
        {
          itemIds: l,
          property: "volume",
          currentValue: m === "mixed" ? 0 : m
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: O,
          title: "Reset to 0 dB",
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Fade In", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        dr,
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
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: L,
          title: "Reset to 0",
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Fade Out", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        dr,
        {
          value: h,
          onChange: R,
          onLiveChange: k,
          min: 0,
          max: 5,
          step: 0.1,
          unit: "s",
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: I,
          title: "Reset to 0",
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) })
  ] });
}
const Zu = s.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: fr(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Zu.displayName = "Textarea";
const qx = "The quick brown fox jumps over the lazy dog", Xx = 512, Zx = 4, Jx = 120;
function Qx({
  value: e,
  placeholder: t = "Select font",
  previewText: n,
  onValueChange: a
}) {
  const o = s.useRef(null), c = s.useRef(null), i = s.useRef(/* @__PURE__ */ new Map()), [l, u] = s.useState(!1), [d, f] = s.useState(""), [m, b] = s.useState(null), [h, x] = s.useState(iu), [v, S] = s.useState(!1);
  s.useEffect(() => {
    if (!l)
      return;
    let P = !1;
    return f(""), S(!0), _f().then((T) => {
      P || x(T);
    }).finally(() => {
      P || S(!1);
    }), () => {
      P = !0;
    };
  }, [l]);
  const y = s.useMemo(() => {
    const P = d.trim().toLowerCase();
    return P ? h.filter((T) => T.label.toLowerCase().includes(P)) : h;
  }, [h, d]), w = s.useMemo(() => {
    const P = n && n.length > 0 ? n.slice(0, Xx) : "";
    return (P.trim().length > 0 ? P : qx).replace(/\s+/g, " ").slice(0, 72);
  }, [n]), k = s.useMemo(() => {
    const P = m ?? e ?? y[0]?.value;
    return P ? h.find((T) => T.value === P) ?? null : null;
  }, [y, h, m, e]), R = s.useMemo(() => {
    const P = [
      e,
      m,
      ...y.slice(0, Zx).map((T) => T.value)
    ].filter((T) => typeof T == "string" && T.trim().length > 0);
    return [...new Set(P)];
  }, [y, m, e]);
  s.useEffect(() => {
    if (!l || R.length === 0)
      return;
    const P = window.setTimeout(() => {
      fs(R, [400]);
    }, Jx);
    return () => {
      window.clearTimeout(P);
    };
  }, [l, R]), s.useEffect(() => {
    if (!l) {
      b(null);
      return;
    }
    b(e ?? null);
  }, [l, e]), s.useEffect(() => {
    if (!l)
      return;
    const P = (T) => {
      const j = T.target;
      if (j instanceof Node && o.current?.contains(j))
        return;
      const E = c.current;
      if (E) {
        const A = E.getBoundingClientRect(), z = 8, { clientX: M, clientY: q } = T;
        if (M >= A.left - z && M <= A.right + z && q >= A.top - z && q <= A.bottom + z)
          return;
      }
      u(!1);
    };
    return document.addEventListener("pointerdown", P, !0), () => {
      document.removeEventListener("pointerdown", P, !0);
    };
  }, [l]);
  const O = s.useCallback(
    (P) => {
      fs([P.value], P.weights), a(P.value), u(!1);
    },
    [a]
  ), L = s.useCallback(
    (P) => {
      const T = y[P];
      if (!T)
        return;
      const j = i.current.get(T.value);
      j && j.focus(), b(T.value), fs([T.value], [400]);
    },
    [y]
  ), I = s.useCallback(
    (P, T) => {
      if (P.key === "Escape") {
        P.preventDefault(), P.stopPropagation(), u(!1);
        return;
      }
      if (y.length === 0)
        return;
      const j = y.findIndex((E) => E.value === T.value);
      if (j !== -1)
        switch (P.key) {
          case "ArrowDown":
            P.preventDefault(), L((j + 1) % y.length);
            break;
          case "ArrowUp":
            P.preventDefault(), L((j - 1 + y.length) % y.length);
            break;
          case "Home":
            P.preventDefault(), L(0);
            break;
          case "End":
            P.preventDefault(), L(y.length - 1);
            break;
          case "Enter":
          case " ": {
            P.preventDefault(), O(T);
            break;
          }
        }
    },
    [y, L, O]
  ), N = e ?? t;
  return /* @__PURE__ */ r.jsxs("div", { ref: o, className: "w-full", children: [
    /* @__PURE__ */ r.jsxs(
      ve,
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
              children: N
            }
          ),
          /* @__PURE__ */ r.jsx(ti, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" })
        ]
      }
    ),
    l ? /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: c,
        className: "mt-2 space-y-2 rounded-md border bg-popover p-2 shadow-sm",
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ r.jsx(Lf, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ r.jsx(
              cu,
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
            /* @__PURE__ */ r.jsx("p", { className: "text-[11px] uppercase tracking-wide text-muted-foreground", children: k?.label ?? "Live Preview" }),
            /* @__PURE__ */ r.jsx(
              "p",
              {
                className: "mt-1 truncate text-lg",
                style: k ? { fontFamily: `"${k.family}", sans-serif` } : void 0,
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
              children: v ? /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center py-8 text-muted-foreground", children: /* @__PURE__ */ r.jsx(mu, { className: "h-4 w-4 animate-spin" }) }) : y.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "py-8 text-center text-sm text-muted-foreground", children: "No fonts match your search." }) : y.map((P) => {
                const T = P.value === e;
                return /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    ref: (j) => {
                      j ? i.current.set(P.value, j) : i.current.delete(P.value);
                    },
                    type: "button",
                    role: "option",
                    "aria-selected": T,
                    onClick: () => O(P),
                    onPointerEnter: () => {
                      b(P.value), fs([P.value], [400]);
                    },
                    onFocus: () => {
                      b(P.value), fs([P.value], [400]);
                    },
                    onKeyDown: (j) => I(j, P),
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
                      T ? /* @__PURE__ */ r.jsx(Bf, { className: "h-3.5 w-3.5 text-primary" }) : null
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
const Ju = [
  { id: "fade", label: "Fade" },
  { id: "rise", label: "Rise" },
  { id: "drop", label: "Drop" },
  { id: "left", label: "Left" },
  { id: "right", label: "Right" },
  { id: "tilt", label: "Tilt" }
], fl = [
  { id: "none", label: "None" },
  ...Ju
], eb = [
  "opacity",
  "x",
  "y",
  "rotation"
], tb = 0.35, rb = "ease-out", nb = "linear", ml = 8, sb = 0.01;
function hl(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Wo(e, t, n) {
  return e?.properties.find((a) => a.property === t)?.keyframes.find((a) => a.frame === n);
}
function ab(e, t) {
  return e <= 1 ? 0 : Math.max(
    1,
    Math.min(e - 1, Math.round(t * tb))
  );
}
function hi(e, t, n) {
  const a = ab(e, t);
  if (a <= 0)
    return null;
  if (n === "intro")
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
function Qu(e, t, n) {
  const a = hl(n.width * 0.12, 32, 120), o = hl(n.height * 0.2, 24, 96), c = t === "intro";
  switch (e) {
    case "fade":
      return {
        opacity: {
          startValue: c ? 0 : n.opacity,
          endValue: c ? n.opacity : 0
        }
      };
    case "rise":
      return {
        opacity: {
          startValue: c ? 0 : n.opacity,
          endValue: c ? n.opacity : 0
        },
        y: {
          startValue: c ? n.y + o : n.y,
          endValue: c ? n.y : n.y - o
        }
      };
    case "drop":
      return {
        opacity: {
          startValue: c ? 0 : n.opacity,
          endValue: c ? n.opacity : 0
        },
        y: {
          startValue: c ? n.y - o : n.y,
          endValue: c ? n.y : n.y + o
        }
      };
    case "left":
      return {
        opacity: {
          startValue: c ? 0 : n.opacity,
          endValue: c ? n.opacity : 0
        },
        x: {
          startValue: c ? n.x - a : n.x,
          endValue: c ? n.x : n.x - a
        }
      };
    case "right":
      return {
        opacity: {
          startValue: c ? 0 : n.opacity,
          endValue: c ? n.opacity : 0
        },
        x: {
          startValue: c ? n.x + a : n.x,
          endValue: c ? n.x : n.x + a
        }
      };
    case "tilt":
      return {
        opacity: {
          startValue: c ? 0 : n.opacity,
          endValue: c ? n.opacity : 0
        },
        rotation: {
          startValue: c ? n.rotation - ml : n.rotation,
          endValue: c ? n.rotation : n.rotation + ml
        }
      };
  }
}
function pl(e, t) {
  return Math.abs(e - t) < sb;
}
function ob(e, t, n, a, o) {
  const c = hi(n, a, t);
  return !e || !c ? [] : eb.filter((i) => {
    const l = Wo(
      e,
      i,
      c.startFrame
    ), u = Wo(e, i, c.endFrame);
    return !l || !u ? !1 : Ju.some((d) => {
      const f = Qu(d.id, t, o)[i];
      return !!f && pl(l.value, f.startValue) && pl(u.value, f.endValue);
    });
  });
}
function ib({
  item: e,
  presetId: t,
  phase: n,
  fps: a,
  anchorTransform: o,
  itemKeyframes: c
}) {
  const i = hi(e.durationInFrames, a, n);
  if (!i)
    return [];
  const l = ob(
    c,
    n,
    e.durationInFrames,
    a,
    o
  ), u = t === "none" ? {} : Qu(t, n, o), d = /* @__PURE__ */ new Set([
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
    }, h = Wo(
      c,
      m,
      i.endFrame
    );
    f.push({
      itemId: e.id,
      property: m,
      frame: i.startFrame,
      value: b.startValue,
      easing: rb
    }), f.push({
      itemId: e.id,
      property: m,
      frame: i.endFrame,
      value: b.endValue,
      easing: h?.easing ?? nb,
      easingConfig: h?.easingConfig
    });
  }), f;
}
const ia = [
  { value: "normal", label: "Regular" },
  { value: "medium", label: "Medium" },
  { value: "semibold", label: "Semibold" },
  { value: "bold", label: "Bold" }
], cb = Hf, gl = 1e5, xl = 120, lb = 512;
function ub(e) {
  const t = e.split(`
`)[0] ?? "", n = t.length > xl ? t.slice(0, xl) : t;
  return n.trim().length > 0 ? n : "Text";
}
const db = {
  offsetX: 0,
  offsetY: 0,
  blur: 0,
  color: "#000000"
}, fb = {
  width: 0,
  color: "#111827"
}, bl = [
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
function dn(e) {
  if (!(e.offsetX === 0 && e.offsetY === 0 && e.blur === 0))
    return e;
}
function ca(e) {
  if (!(e.width <= 0))
    return e;
}
function vl({
  items: e,
  canvas: t,
  showContentSection: n = !0,
  showEffectSection: a = !0,
  showAnimationSection: o = !0
}) {
  const c = be((_) => _.updateItem), i = be((_) => _.addKeyframes), l = Xe((_) => _.setPropertiesPreviewNew), u = Xe((_) => _.clearPreview), d = s.useMemo(
    () => e.filter((_) => _.type === "text"),
    [e]
  ), f = s.useMemo(() => d.map((_) => _.id), [d]), m = s.useMemo(
    () => ({ ...db, ...d[0]?.textShadow ?? {} }),
    [d]
  ), b = s.useMemo(
    () => ({ ...fb, ...d[0]?.stroke ?? {} }),
    [d]
  ), h = s.useMemo(() => {
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
  }, [d]), x = s.useMemo(() => {
    const _ = h?.fontFamily;
    if (!_)
      return ia;
    const he = iu.find(
      (Ye) => Ye.family === _ || Ye.value === _
    );
    if (!he)
      return ia;
    const et = ia.filter(
      (Ye) => he.weights.includes(cb[Ye.value])
    );
    return et.length > 0 ? et : ia;
  }, [h?.fontFamily]), v = s.useRef(h?.fontFamily), S = s.useRef(h?.fontWeight);
  S.current = h?.fontWeight;
  const y = s.useCallback(
    (_) => {
      d.forEach((he) => {
        c(he.id, _);
      });
    },
    [d, c]
  ), w = s.useRef(y);
  w.current = y;
  const k = s.useCallback(
    (_) => {
      const he = {};
      f.forEach((et) => {
        he[et] = _;
      }), l(he);
    },
    [f, l]
  ), R = s.useCallback(() => {
    queueMicrotask(() => u());
  }, [u]), O = s.useCallback(
    (_) => {
      let he = _.target.value;
      he.length > gl && (he = he.slice(0, gl));
      const et = ub(he);
      d.forEach((Ye) => {
        c(Ye.id, { text: he, label: et });
      });
    },
    [d, c]
  ), L = s.useCallback(
    (_) => {
      k({ fontSize: _ });
    },
    [k]
  ), I = s.useCallback(
    (_) => {
      y({ fontSize: _ }), R();
    },
    [R, y]
  ), N = s.useCallback(
    (_) => {
      y({ fontFamily: _ });
    },
    [y]
  ), P = s.useCallback(
    (_) => {
      x.some((he) => he.value === _) && y({ fontWeight: _ });
    },
    [x, y]
  ), T = s.useCallback(() => {
    if (!x.some((he) => he.value === "bold"))
      return;
    const _ = h?.fontWeight === "bold" ? "normal" : "bold";
    y({ fontWeight: _ });
  }, [h?.fontWeight, x, y]), j = s.useCallback(() => {
    const _ = h?.fontStyle === "italic" ? "normal" : "italic";
    y({ fontStyle: _ });
  }, [h?.fontStyle, y]), E = s.useCallback(() => {
    y({ underline: !(h?.underline ?? !1) });
  }, [h?.underline, y]);
  s.useEffect(() => {
    const _ = h?.fontFamily;
    if (v.current === _)
      return;
    v.current = _;
    const he = S.current;
    if (!he || x.some((Ye) => Ye.value === he))
      return;
    const et = x[0]?.value;
    et && w.current({ fontWeight: et });
  }, [h?.fontFamily, x]);
  const A = s.useCallback(
    (_) => {
      k({ color: _ });
    },
    [k]
  ), z = s.useCallback(
    (_) => {
      y({ color: _ }), R();
    },
    [R, y]
  ), M = s.useCallback(
    (_) => {
      y({ textAlign: _ });
    },
    [y]
  ), q = s.useCallback(
    (_) => {
      y({ verticalAlign: _ });
    },
    [y]
  ), V = s.useCallback(
    (_) => {
      k({ letterSpacing: _ });
    },
    [k]
  ), X = s.useCallback(
    (_) => {
      y({ letterSpacing: _ }), R();
    },
    [R, y]
  ), D = s.useCallback(
    (_) => {
      k({ lineHeight: _ });
    },
    [k]
  ), W = s.useCallback(
    (_) => {
      y({ lineHeight: _ }), R();
    },
    [R, y]
  ), Y = s.useCallback(
    (_) => {
      k({
        textShadow: dn({
          ...m,
          color: _
        })
      });
    },
    [m, k]
  ), pe = s.useCallback(
    (_) => {
      y({
        textShadow: dn({
          ...m,
          color: _
        })
      }), R();
    },
    [m, R, y]
  ), C = s.useCallback(
    (_) => {
      k({
        textShadow: dn({
          ...m,
          offsetX: _
        })
      });
    },
    [m, k]
  ), B = s.useCallback(
    (_) => {
      y({
        textShadow: dn({
          ...m,
          offsetX: _
        })
      }), R();
    },
    [m, R, y]
  ), U = s.useCallback(
    (_) => {
      k({
        textShadow: dn({
          ...m,
          offsetY: _
        })
      });
    },
    [m, k]
  ), J = s.useCallback(
    (_) => {
      y({
        textShadow: dn({
          ...m,
          offsetY: _
        })
      }), R();
    },
    [m, R, y]
  ), ne = s.useCallback(
    (_) => {
      k({
        textShadow: dn({
          ...m,
          blur: _
        })
      });
    },
    [m, k]
  ), me = s.useCallback(
    (_) => {
      y({
        textShadow: dn({
          ...m,
          blur: _
        })
      }), R();
    },
    [m, R, y]
  ), xe = s.useCallback(
    (_) => {
      k({
        stroke: ca({
          ...b,
          width: _
        })
      });
    },
    [b, k]
  ), we = s.useCallback(
    (_) => {
      y({
        stroke: ca({
          ...b,
          width: _
        })
      }), R();
    },
    [b, R, y]
  ), Re = s.useCallback(
    (_) => {
      k({
        stroke: ca({
          ...b,
          color: _
        })
      });
    },
    [b, k]
  ), Be = s.useCallback(
    (_) => {
      y({
        stroke: ca({
          ...b,
          color: _
        })
      }), R();
    },
    [b, R, y]
  ), Fe = s.useCallback(
    (_) => {
      const he = bl.find((Ye) => Ye.id === _);
      if (!he)
        return;
      const et = h?.color ?? d[0]?.color ?? "#ffffff";
      y(he.getUpdates(et)), R();
    },
    [R, h?.color, d, y]
  ), De = s.useCallback(
    (_, he) => {
      const et = be.getState().keyframes, Ye = d.flatMap(($e) => {
        const ct = Yr($e, t, Er($e)), pt = et.find((Bt) => Bt.itemId === $e.id), Vt = hi(
          $e.durationInFrames,
          t.fps,
          _
        );
        if (!Vt)
          return [];
        const yr = Ra(
          ct,
          pt,
          _ === "intro" ? Vt.endFrame : Vt.startFrame
        );
        return ib({
          item: $e,
          presetId: he,
          phase: _,
          fps: t.fps,
          anchorTransform: yr,
          itemKeyframes: pt
        });
      });
      Ye.length !== 0 && i(Ye);
    },
    [i, t, d]
  );
  if (d.length === 0 || !h)
    return null;
  const Qe = (h.text ?? d[0]?.text ?? "").slice(0, lb), je = h.fontWeight === "bold", ee = x.some((_) => _.value === "bold"), Ge = h.fontStyle === "italic", H = h.underline === !0, ue = h.shadowOffsetX, Ce = h.shadowOffsetY, Ve = h.shadowBlur, Me = h.strokeWidth;
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    n && /* @__PURE__ */ r.jsxs(mr, { title: "Text", icon: ti, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Content", children: /* @__PURE__ */ r.jsx(
        Zu,
        {
          value: h.text ?? "",
          onChange: O,
          placeholder: h.text === void 0 ? "Mixed" : "Enter text...",
          className: "min-h-[60px] text-xs flex-1 min-w-0",
          rows: 3
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Font", className: "items-start", children: /* @__PURE__ */ r.jsx(
        Qx,
        {
          value: h.fontFamily,
          placeholder: h.fontFamily === void 0 ? "Mixed" : "Select font",
          previewText: Qe,
          onValueChange: N
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Size", children: /* @__PURE__ */ r.jsx(
        Kt,
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
        ks,
        {
          value: h.fontWeight,
          onValueChange: P,
          children: [
            /* @__PURE__ */ r.jsx(Cs, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(Ms, { placeholder: h.fontWeight === void 0 ? "Mixed" : "Select weight" }) }),
            /* @__PURE__ */ r.jsx(Rs, { children: x.map((_) => /* @__PURE__ */ r.jsx(Kn, { value: _.value, className: "text-xs", children: _.label }, _.value)) })
          ]
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Style", children: /* @__PURE__ */ r.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: je ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: T,
            title: ee ? "Bold" : "Bold is not available for this font",
            "aria-label": "Bold",
            "aria-pressed": je,
            disabled: !ee,
            children: /* @__PURE__ */ r.jsx(Hm, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: Ge ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: j,
            title: "Italic",
            "aria-label": "Italic",
            "aria-pressed": Ge,
            children: /* @__PURE__ */ r.jsx(Um, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: H ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: E,
            title: "Underline",
            "aria-label": "Underline",
            "aria-pressed": H,
            children: /* @__PURE__ */ r.jsx(Gm, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Align", children: /* @__PURE__ */ r.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: h.textAlign === "left" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => M("left"),
            title: "Align Left",
            children: /* @__PURE__ */ r.jsx(Vm, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: h.textAlign === "center" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => M("center"),
            title: "Align Center",
            children: /* @__PURE__ */ r.jsx(Wm, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: h.textAlign === "right" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => M("right"),
            title: "Align Right",
            children: /* @__PURE__ */ r.jsx(zm, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx("div", { className: "w-px h-5 bg-border mx-1" }),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: h.verticalAlign === "top" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => q("top"),
            title: "Align Top",
            children: /* @__PURE__ */ r.jsx($m, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: h.verticalAlign === "middle" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => q("middle"),
            title: "Align Middle",
            children: /* @__PURE__ */ r.jsx(Km, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          ve,
          {
            variant: h.verticalAlign === "bottom" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => q("bottom"),
            title: "Align Bottom",
            children: /* @__PURE__ */ r.jsx(Ym, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(
        Yn,
        {
          label: "Color",
          color: h.color ?? "#ffffff",
          onChange: z,
          onLiveChange: A,
          onReset: () => z("#ffffff"),
          defaultColor: "#ffffff"
        }
      ),
      /* @__PURE__ */ r.jsx(Ke, { label: "Spacing", children: /* @__PURE__ */ r.jsx(
        Kt,
        {
          value: h.letterSpacing,
          onChange: X,
          onLiveChange: V,
          min: -20,
          max: 100,
          step: 1,
          unit: "px",
          className: "flex-1 min-w-0"
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Line H.", children: /* @__PURE__ */ r.jsx(
        Kt,
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
    a && /* @__PURE__ */ r.jsxs(mr, { title: "Effects", icon: Ps, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Presets", className: "items-start", children: /* @__PURE__ */ r.jsx("div", { className: "grid w-full grid-cols-2 gap-1.5", children: bl.map((_) => /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "outline",
          size: "sm",
          className: "h-7 text-[11px]",
          onClick: () => Fe(_.id),
          children: _.label
        },
        _.id
      )) }) }),
      /* @__PURE__ */ r.jsx(
        Yn,
        {
          label: "Shadow",
          color: h.shadowColor || "#000000",
          onChange: pe,
          onLiveChange: Y,
          onReset: () => pe("#000000"),
          defaultColor: "#000000"
        }
      ),
      /* @__PURE__ */ r.jsx(Ke, { label: "Shadow X", children: /* @__PURE__ */ r.jsx(
        Kt,
        {
          value: ue,
          onChange: B,
          onLiveChange: C,
          min: -100,
          max: 100,
          step: 1,
          unit: "px",
          className: "flex-1 min-w-0"
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Shadow Y", children: /* @__PURE__ */ r.jsx(
        Kt,
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
        Kt,
        {
          value: Ve,
          onChange: me,
          onLiveChange: ne,
          min: 0,
          max: 80,
          step: 1,
          unit: "px",
          className: "flex-1 min-w-0"
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Stroke W.", children: /* @__PURE__ */ r.jsx(
        Kt,
        {
          value: Me,
          onChange: we,
          onLiveChange: xe,
          min: 0,
          max: 24,
          step: 1,
          unit: "px",
          className: "flex-1 min-w-0"
        }
      ) }),
      (Me === "mixed" || Me > 0) && /* @__PURE__ */ r.jsx(
        Yn,
        {
          label: "Stroke",
          color: h.strokeColor || "#111827",
          onChange: Be,
          onLiveChange: Re,
          onReset: () => Be("#111827"),
          defaultColor: "#111827"
        }
      )
    ] }),
    o && /* @__PURE__ */ r.jsxs(mr, { title: "Animation", icon: Ps, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Intro", className: "items-start", children: /* @__PURE__ */ r.jsx("div", { className: "grid w-full grid-cols-4 gap-1.5", children: fl.map((_) => /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "outline",
          size: "sm",
          className: "h-7 text-[11px]",
          onClick: () => De("intro", _.id),
          children: _.label
        },
        _.id
      )) }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Outro", className: "items-start", children: /* @__PURE__ */ r.jsx("div", { className: "grid w-full grid-cols-4 gap-1.5", children: fl.map((_) => /* @__PURE__ */ r.jsx(
        ve,
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
const yl = [
  { value: "rectangle", label: "Rectangle" },
  { value: "circle", label: "Circle" },
  { value: "triangle", label: "Triangle" },
  { value: "ellipse", label: "Ellipse" },
  { value: "star", label: "Star" },
  { value: "polygon", label: "Polygon" },
  { value: "heart", label: "Heart" }
], mb = [
  { value: "up", label: "Up", icon: ri },
  { value: "down", label: "Down", icon: ni },
  { value: "left", label: "Left", icon: Ts },
  { value: "right", label: "Right", icon: Es }
];
function hb({ items: e }) {
  const t = be((C) => C.updateItem), { isEditing: n, editingItemId: a, penMode: o, startEditing: c, stopEditing: i } = ze(), l = Xe((C) => C.setPropertiesPreviewNew), u = Xe((C) => C.clearPreview), d = s.useMemo(
    () => e.filter((C) => C.type === "shape"),
    [e]
  ), f = s.useMemo(() => d.map((C) => C.id), [d]), m = s.useMemo(() => {
    if (d.length === 0) return null;
    const C = d[0];
    return {
      shapeType: d.every((B) => B.shapeType === C.shapeType) ? C.shapeType : void 0,
      fillColor: d.every((B) => B.fillColor === C.fillColor) ? C.fillColor : void 0,
      strokeColor: d.every((B) => (B.strokeColor ?? "") === (C.strokeColor ?? "")) ? C.strokeColor ?? "" : void 0,
      strokeWidth: d.every((B) => (B.strokeWidth ?? 0) === (C.strokeWidth ?? 0)) ? C.strokeWidth ?? 0 : "mixed",
      cornerRadius: d.every((B) => (B.cornerRadius ?? 0) === (C.cornerRadius ?? 0)) ? C.cornerRadius ?? 0 : "mixed",
      direction: d.every((B) => (B.direction ?? "up") === (C.direction ?? "up")) ? C.direction ?? "up" : void 0,
      points: d.every((B) => (B.points ?? 5) === (C.points ?? 5)) ? C.points ?? 5 : "mixed",
      innerRadius: d.every((B) => (B.innerRadius ?? 0.5) === (C.innerRadius ?? 0.5)) ? C.innerRadius ?? 0.5 : "mixed",
      // Mask properties
      isMask: d.every((B) => (B.isMask ?? !1) === (C.isMask ?? !1)) ? C.isMask ?? !1 : "mixed",
      maskType: d.every((B) => (B.maskType ?? "clip") === (C.maskType ?? "clip")) ? C.maskType ?? "clip" : void 0,
      maskFeather: d.every((B) => (B.maskFeather ?? 10) === (C.maskFeather ?? 10)) ? C.maskFeather ?? 10 : "mixed",
      maskInvert: d.every((B) => (B.maskInvert ?? !1) === (C.maskInvert ?? !1)) ? C.maskInvert ?? !1 : "mixed"
    };
  }, [d]), b = m?.shapeType && ["rectangle", "triangle", "star", "polygon"].includes(m.shapeType), h = m?.shapeType === "triangle", x = m?.shapeType && ["star", "polygon"].includes(m.shapeType), v = m?.shapeType === "star", S = d.length === 1 && d[0]?.shapeType === "path" ? d[0] : null, y = !!S && n && !o && a === S.id, w = s.useCallback(
    (C) => {
      d.forEach((B) => {
        t(B.id, C);
      });
    },
    [d, t]
  ), k = s.useCallback(
    (C) => {
      const U = yl.find((J) => J.value === C)?.label ?? C;
      w({ shapeType: C, label: U });
    },
    [w]
  ), R = s.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { fillColor: C };
      }), l(B);
    },
    [f, l]
  ), O = s.useCallback(
    (C) => {
      w({ fillColor: C }), queueMicrotask(() => u());
    },
    [w, u]
  ), L = s.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { strokeColor: C };
      }), l(B);
    },
    [f, l]
  ), I = s.useCallback(
    (C) => {
      w({ strokeColor: C || void 0 }), queueMicrotask(() => u());
    },
    [w, u]
  ), N = s.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        C > 0 && !m?.strokeColor ? B[U] = { strokeWidth: C, strokeColor: "#1e40af" } : B[U] = { strokeWidth: C };
      }), l(B);
    },
    [f, l, m?.strokeColor]
  ), P = s.useCallback(
    (C) => {
      C > 0 && m?.strokeWidth === 0 && !m?.strokeColor ? w({ strokeWidth: C, strokeColor: "#1e40af" }) : w({ strokeWidth: C }), queueMicrotask(() => u());
    },
    [w, u, m?.strokeWidth, m?.strokeColor]
  ), T = s.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { cornerRadius: C };
      }), l(B);
    },
    [f, l]
  ), j = s.useCallback(
    (C) => {
      w({ cornerRadius: C }), queueMicrotask(() => u());
    },
    [w, u]
  ), E = s.useCallback(
    (C) => {
      w({ direction: C });
    },
    [w]
  ), A = s.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { points: C };
      }), l(B);
    },
    [f, l]
  ), z = s.useCallback(
    (C) => {
      w({ points: C }), queueMicrotask(() => u());
    },
    [w, u]
  ), M = s.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { innerRadius: C };
      }), l(B);
    },
    [f, l]
  ), q = s.useCallback(
    (C) => {
      w({ innerRadius: C }), queueMicrotask(() => u());
    },
    [w, u]
  ), V = s.useCallback(
    (C) => {
      w({
        isMask: C,
        // Set defaults when enabling mask
        maskType: C ? "clip" : void 0,
        maskFeather: C ? 0 : void 0,
        maskInvert: C ? !1 : void 0
      });
    },
    [w]
  ), X = s.useCallback(
    (C) => {
      const B = C;
      w({
        maskType: B,
        maskFeather: B === "alpha" ? typeof m?.maskFeather == "number" && m.maskFeather > 0 ? m.maskFeather : 10 : 0
      });
    },
    [m?.maskFeather, w]
  ), D = s.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { maskFeather: C };
      }), l(B);
    },
    [f, l]
  ), W = s.useCallback(
    (C) => {
      w({ maskFeather: C }), queueMicrotask(() => u());
    },
    [w, u]
  ), Y = s.useCallback(() => {
    w({ maskFeather: 10 });
  }, [w]), pe = s.useCallback(
    (C) => {
      w({ maskInvert: C });
    },
    [w]
  );
  return d.length === 0 || !m ? null : /* @__PURE__ */ r.jsxs(mr, { title: "Shape", icon: qm, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Type", children: /* @__PURE__ */ r.jsxs(
      ks,
      {
        value: m.shapeType,
        onValueChange: k,
        children: [
          /* @__PURE__ */ r.jsx(Cs, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(Ms, { placeholder: m.shapeType === void 0 ? "Mixed" : "Select shape" }) }),
          /* @__PURE__ */ r.jsx(Rs, { children: yl.map((C) => /* @__PURE__ */ r.jsx(Kn, { value: C.value, className: "text-xs", children: C.label }, C.value)) })
        ]
      }
    ) }),
    S && /* @__PURE__ */ r.jsx(Ke, { label: "Path", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 w-full", children: [
      /* @__PURE__ */ r.jsxs(
        ve,
        {
          variant: y ? "default" : "outline",
          size: "sm",
          className: "h-7 text-xs gap-1.5",
          onClick: () => {
            y ? i() : c(S.id);
          },
          children: [
            /* @__PURE__ */ r.jsx(Uf, { className: "w-3.5 h-3.5" }),
            y ? "Done" : "Edit Path"
          ]
        }
      ),
      /* @__PURE__ */ r.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Drag points and handles in the preview." })
    ] }) }),
    /* @__PURE__ */ r.jsx(
      Yn,
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
      Kt,
      {
        value: m.strokeWidth,
        onChange: P,
        onLiveChange: N,
        min: 0,
        max: 50,
        step: 1,
        unit: "px",
        className: "flex-1 min-w-0"
      }
    ) }),
    (m.strokeWidth === "mixed" || m.strokeWidth > 0) && /* @__PURE__ */ r.jsx(
      Yn,
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
      Kt,
      {
        value: m.cornerRadius,
        onChange: j,
        onLiveChange: T,
        min: 0,
        max: 100,
        step: 1,
        unit: "px",
        className: "flex-1 min-w-0"
      }
    ) }),
    h && /* @__PURE__ */ r.jsx(Ke, { label: "Direction", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1", children: mb.map((C) => /* @__PURE__ */ r.jsx(
      ve,
      {
        variant: m.direction === C.value ? "secondary" : "ghost",
        size: "icon",
        className: "h-7 w-7",
        onClick: () => E(C.value),
        title: C.label,
        children: /* @__PURE__ */ r.jsx(C.icon, { className: "w-3.5 h-3.5" })
      },
      C.value
    )) }) }),
    x && /* @__PURE__ */ r.jsx(Ke, { label: "Points", children: /* @__PURE__ */ r.jsx(
      Kt,
      {
        value: m.points,
        onChange: z,
        onLiveChange: A,
        min: 3,
        max: 12,
        step: 1,
        className: "flex-1 min-w-0"
      }
    ) }),
    v && /* @__PURE__ */ r.jsx(Ke, { label: "Inner R.", children: /* @__PURE__ */ r.jsx(
      Kt,
      {
        value: m.innerRadius,
        onChange: q,
        onLiveChange: M,
        min: 0.1,
        max: 0.9,
        step: 0.05,
        className: "flex-1 min-w-0"
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: "border-t border-border my-3" }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Use as Mask", children: /* @__PURE__ */ r.jsx(
      ve,
      {
        variant: m.isMask === !0 ? "secondary" : "ghost",
        size: "sm",
        className: "h-7 text-xs flex-1 min-w-0",
        onClick: () => V(m.isMask !== !0),
        disabled: m.isMask === "mixed",
        children: m.isMask === "mixed" ? "Mixed" : m.isMask ? "On" : "Off"
      }
    ) }),
    (m.isMask === !0 || m.isMask === "mixed") && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Mask Type", children: /* @__PURE__ */ r.jsxs(
        ks,
        {
          value: m.maskType,
          onValueChange: X,
          disabled: m.isMask !== !0,
          children: [
            /* @__PURE__ */ r.jsx(Cs, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(Ms, { placeholder: m.maskType === void 0 ? "Mixed" : "Select type" }) }),
            /* @__PURE__ */ r.jsxs(Rs, { children: [
              /* @__PURE__ */ r.jsx(Kn, { value: "clip", className: "text-xs", children: "Clip (Hard edges)" }),
              /* @__PURE__ */ r.jsx(Kn, { value: "alpha", className: "text-xs", children: "Alpha (Soft edges)" })
            ] })
          ]
        }
      ) }),
      m.maskType === "alpha" && /* @__PURE__ */ r.jsx(Ke, { label: "Feather", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          dr,
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
          ve,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 flex-shrink-0",
            onClick: Y,
            title: "Reset to 10px",
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Invert", children: /* @__PURE__ */ r.jsx(
        ve,
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
const wl = {
  topLeft: [0, 0],
  topRight: [0, 0],
  bottomRight: [0, 0],
  bottomLeft: [0, 0]
}, Sl = {
  topLeft: "TL",
  topRight: "TR",
  bottomRight: "BR",
  bottomLeft: "BL"
}, pb = s.memo(function({
  items: t
}) {
  const n = be((x) => x.updateItem), {
    isEditing: a,
    editingItemId: o,
    startEditing: c,
    stopEditing: i
  } = Fr(), l = t.length === 1 ? t[0] : null, u = l?.cornerPin ?? wl, d = a && o === l?.id, f = s.useMemo(() => u.topLeft[0] !== 0 || u.topLeft[1] !== 0 || u.topRight[0] !== 0 || u.topRight[1] !== 0 || u.bottomRight[0] !== 0 || u.bottomRight[1] !== 0 || u.bottomLeft[0] !== 0 || u.bottomLeft[1] !== 0, [u]), m = s.useCallback(
    (x, v, S) => {
      if (!l) return;
      const y = l.cornerPin ?? wl, w = [...y[x]];
      w[v] = S, n(l.id, {
        cornerPin: { ...y, [x]: w }
      });
    },
    [l, n]
  ), b = s.useCallback(() => {
    l && n(l.id, { cornerPin: void 0 });
  }, [l, n]), h = s.useCallback(() => {
    d ? i() : l && c(l.id);
  }, [d, l, c, i]);
  return !l || t.length > 1 ? null : /* @__PURE__ */ r.jsxs(mr, { title: "Corner Pin", icon: _o, defaultOpen: !1, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 px-1 mb-2", children: [
      /* @__PURE__ */ r.jsxs(
        ve,
        {
          variant: d ? "default" : "outline",
          size: "sm",
          className: "h-7 text-xs flex-1 gap-1",
          onClick: h,
          title: d ? "Exit corner pin editor" : "Edit corners on preview",
          children: [
            /* @__PURE__ */ r.jsx(_o, { className: "w-3 h-3" }),
            d ? "Editing..." : "Edit"
          ]
        }
      ),
      f && /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: b,
          title: "Reset corner pin",
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    Object.keys(Sl).map((x) => /* @__PURE__ */ r.jsx(Ke, { label: Sl[x], children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        Kt,
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
        Kt,
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
function gb(e) {
  return e.type === "image" && (e.label?.toLowerCase().endsWith(".gif") ?? !1);
}
function xb(e) {
  const t = new Set(e.map((a) => a.type)), n = e.some(gb);
  return {
    hasVisualItems: t.has("video") || t.has("image") || t.has("text") || t.has("shape") || t.has("adjustment") || t.has("composition"),
    hasVideoItems: t.has("video"),
    hasGifItems: n,
    hasAudioItems: t.has("video") || t.has("audio"),
    hasTextItems: t.has("text"),
    hasShapeItems: t.has("shape"),
    hasAdjustmentItems: t.has("adjustment"),
    isOnlyTextOrShape: e.length > 0 && e.every(
      (a) => a.type === "text" || a.type === "shape"
    )
  };
}
const bb = s.memo(function() {
  const t = Ct((M) => M.clipInspectorTab), n = Ct((M) => M.setClipInspectorTab), a = Pt((M) => M.selectedItemIds), o = be((M) => M.updateItemsTransform), c = er((M) => M.currentProject?.metadata.width ?? 1920), i = er((M) => M.currentProject?.metadata.height ?? 1080), l = er((M) => M.currentProject?.metadata.fps ?? 30), u = Yt(
    gn(
      s.useCallback((M) => {
        const q = [];
        for (const V of a) {
          const X = M.itemById[V];
          X && q.push(X);
        }
        return q;
      }, [a])
    )
  ), d = s.useMemo(
    () => ({
      width: c,
      height: i,
      fps: l
    }),
    [l, i, c]
  ), f = s.useMemo(
    () => xb(u),
    [u]
  ), {
    hasVisualItems: m,
    hasVideoItems: b,
    hasGifItems: h,
    hasAudioItems: x,
    hasTextItems: v,
    hasShapeItems: S,
    hasAdjustmentItems: y,
    isOnlyTextOrShape: w
  } = f, k = s.useMemo(
    () => u.filter((M) => M.type !== "audio" && M.type !== "adjustment"),
    [u]
  ), R = s.useMemo(
    () => u.filter((M) => M.type !== "audio"),
    [u]
  ), O = s.useMemo(() => {
    if (u.length === 0) return !0;
    const M = u.find(
      (q) => q.transform?.aspectRatioLocked !== void 0
    );
    return M ? M.transform.aspectRatioLocked : !w;
  }, [u, w]), L = s.useCallback(() => {
    const M = !O, q = u.map((V) => V.id);
    o(q, { aspectRatioLocked: M });
  }, [O, u, o]), I = s.useCallback(
    (M, q) => {
      o(M, q);
    },
    [o]
  ), N = k.length > 0, P = x, T = m, j = s.useMemo(() => {
    const M = [];
    return N && M.push("video"), P && M.push("audio"), T && M.push("effects"), M;
  }, [P, T, N]), E = j[0] ?? "video", A = j.includes(t) ? t : E;
  s.useEffect(() => {
    u.length !== 0 && t !== A && n(A);
  }, [A, t, u.length, n]);
  const z = s.useCallback((M) => {
    n(M);
  }, [n]);
  return u.length === 0 ? null : /* @__PURE__ */ r.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ r.jsxs(Bx, { value: A, onValueChange: z, className: "w-full", children: [
    /* @__PURE__ */ r.jsxs(Xu, { className: "grid w-full grid-cols-3 h-8", children: [
      /* @__PURE__ */ r.jsxs(
        ha,
        {
          value: "video",
          disabled: !N,
          className: "text-xs gap-1 px-2",
          children: [
            /* @__PURE__ */ r.jsx(nu, { className: "h-3 w-3" }),
            "Video"
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs(
        ha,
        {
          value: "audio",
          disabled: !P,
          className: "text-xs gap-1 px-2",
          children: [
            /* @__PURE__ */ r.jsx(ou, { className: "h-3 w-3" }),
            "Audio"
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs(
        ha,
        {
          value: "effects",
          disabled: !T,
          className: "text-xs gap-1 px-2",
          children: [
            /* @__PURE__ */ r.jsx(Ps, { className: "h-3 w-3" }),
            "Effects"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx(pa, { value: "video", className: "mt-3", children: N && /* @__PURE__ */ r.jsxs("div", { className: "divide-y divide-border [&>*]:py-4 [&>*:first-child]:pt-0 [&>*:last-child]:pb-0", children: [
      N && /* @__PURE__ */ r.jsx(
        Hx,
        {
          items: k,
          canvas: d,
          onTransformChange: I,
          aspectLocked: O,
          onAspectLockToggle: L
        }
      ),
      b && /* @__PURE__ */ r.jsx(Vx, { items: u }),
      N && /* @__PURE__ */ r.jsx(
        Ux,
        {
          items: k,
          canvas: d,
          onTransformChange: I
        }
      ),
      N && /* @__PURE__ */ r.jsx(pb, { items: k }),
      v && /* @__PURE__ */ r.jsx(
        vl,
        {
          items: u,
          canvas: d,
          showEffectSection: !1,
          showAnimationSection: !1
        }
      ),
      S && /* @__PURE__ */ r.jsx(hb, { items: u }),
      h && /* @__PURE__ */ r.jsx(Wx, { items: u })
    ] }) }),
    /* @__PURE__ */ r.jsxs(pa, { value: "audio", className: "space-y-4 mt-3", children: [
      x && /* @__PURE__ */ r.jsx(Yx, { items: u }),
      Gf
    ] }),
    /* @__PURE__ */ r.jsx(pa, { value: "effects", className: "space-y-4 mt-3", children: m && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      y && /* @__PURE__ */ r.jsx("div", { className: "px-2 py-2 text-xs text-muted-foreground bg-purple-500/10 rounded border border-purple-500/20", children: "Effects on adjustment layers apply to all items on tracks above." }),
      /* @__PURE__ */ r.jsx(Jm, { items: R }),
      v && /* @__PURE__ */ r.jsx(qo, {}),
      v && /* @__PURE__ */ r.jsx(
        vl,
        {
          items: u,
          canvas: d,
          showContentSection: !1
        }
      )
    ] }) })
  ] }) });
}), Io = "oklch(0.65 0.20 250)", vb = [
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
function yb() {
  const e = Pt((h) => h.selectedMarkerId), t = Pt((h) => h.clearSelection), n = be((h) => h.markers), a = be((h) => h.updateMarker), o = be((h) => h.removeMarker), c = be((h) => h.fps), i = s.useMemo(
    () => n.find((h) => h.id === e),
    [n, e]
  ), l = s.useCallback(
    (h) => {
      e && a(e, { frame: Math.max(0, Math.round(h)) });
    },
    [e, a]
  ), u = s.useCallback(
    (h) => {
      e && a(e, { label: h.target.value || void 0 });
    },
    [e, a]
  ), d = s.useCallback(
    (h) => {
      e && a(e, { color: h });
    },
    [e, a]
  ), f = s.useCallback(() => {
    e && (o(e), t());
  }, [e, o, t]), m = s.useCallback(() => {
    e && i?.color !== Io && a(e, { color: Io });
  }, [e, i?.color, a]), b = s.useCallback(
    (h) => {
      const x = h / c, v = Math.floor(x / 60), S = Math.floor(x % 60), y = h % c;
      return `${String(v).padStart(2, "0")}:${String(S).padStart(2, "0")}.${String(y).padStart(2, "0")}`;
    },
    [c]
  );
  return i ? /* @__PURE__ */ r.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ r.jsxs(mr, { title: "Marker", icon: Qi, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Frame", children: /* @__PURE__ */ r.jsx(
      Kt,
      {
        value: i.frame,
        onChange: l,
        min: 0,
        step: 1,
        unit: "fr",
        className: "flex-1 min-w-0"
      }
    ) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Time", children: /* @__PURE__ */ r.jsx("span", { className: "text-xs font-mono tabular-nums text-muted-foreground", children: b(i.frame) }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Label", children: /* @__PURE__ */ r.jsx(
      cu,
      {
        value: i.label || "",
        onChange: u,
        placeholder: "Enter label...",
        className: "h-7 text-xs flex-1 min-w-0"
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      Yn,
      {
        label: "Color",
        color: i.color,
        onChange: d,
        onReset: m,
        defaultColor: Io,
        presets: vb
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "pt-2", children: /* @__PURE__ */ r.jsxs(
      ve,
      {
        variant: "destructive",
        size: "sm",
        className: "w-full h-7 text-xs",
        onClick: f,
        children: [
          /* @__PURE__ */ r.jsx(lu, { className: "w-3 h-3 mr-1.5" }),
          "Delete Marker"
        ]
      }
    ) })
  ] }) }) : /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
    /* @__PURE__ */ r.jsx(Qi, { className: "w-8 h-8 text-muted-foreground/50 mb-2" }),
    /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground", children: "Marker not found" })
  ] });
}
function la(e) {
  return e.direction ? `${e.id}:${e.direction}` : e.id;
}
function wb(e) {
  return e.direction ? e.description : e.label;
}
const Sb = [
  { value: "linear", label: "Linear" },
  { value: "ease-in", label: "In" },
  { value: "ease-out", label: "Out" },
  { value: "ease-in-out", label: "In & Out" }
];
function kl(e) {
  return Sb.filter((t) => e.includes(t.value));
}
function kb() {
  const e = Pt(
    (E) => E.selectedTransitionId
  ), t = Pt(
    (E) => E.clearSelection
  ), n = be((E) => E.transitions), a = be(
    (E) => E.updateTransition
  ), o = be(
    (E) => E.removeTransition
  ), c = be((E) => E.fps), i = be((E) => E.items), l = s.useMemo(
    () => n.find((E) => E.id === e),
    [n, e]
  ), u = l && l.type in ec ? ec[l.type] : null, d = s.useMemo(
    () => l ? i.find((E) => E.id === l.leftClipId) : null,
    [i, l]
  ), f = s.useMemo(
    () => l ? i.find((E) => E.id === l.rightClipId) : null,
    [i, l]
  ), m = s.useMemo(
    () => Object.entries(ku()).filter(([, E]) => E.length > 0),
    []
  ), b = s.useMemo(
    () => m.flatMap(([, E]) => E),
    [m]
  ), h = s.useMemo(
    () => b.find((E) => E.id === l?.presentation && (E.direction ?? void 0) === (l?.direction ?? void 0)),
    [b, l?.presentation, l?.direction]
  ), x = s.useMemo(
    () => l ? en.getDefinition(l.presentation) : void 0,
    [l]
  ), v = s.useMemo(
    () => kl(x?.supportedTimings ?? []),
    [x]
  ), S = 1, y = s.useMemo(() => {
    if (!u || !l || !d || !f)
      return c * 3;
    const E = d.from + d.durationInFrames;
    if (!(Math.abs(E - f.from) <= 1)) {
      const M = Math.floor(Math.min(d.durationInFrames, f.durationInFrames) - 1);
      return Math.max(S, Math.max(l.durationInFrames, Math.min(c * 3, M)));
    }
    const z = Vf(d, f, l.alignment);
    return Math.max(S, Math.max(l.durationInFrames, Math.min(c * 3, z)));
  }, [u, l, d, f, c]), w = s.useCallback(
    (E, A) => {
      if (e) {
        const z = { presentation: E, direction: A }, M = en.getDefinition(E), V = kl(M?.supportedTimings ?? [])[0], X = l?.timing;
        V && M && X && !M.supportedTimings.includes(X) && (z.timing = V.value), a(e, z);
      }
    },
    [e, l?.timing, a]
  ), k = s.useCallback((E) => {
    const A = b.find((z) => la(z) === E);
    A && w(A.id, A.direction);
  }, [w, b]), R = s.useCallback(
    (E) => {
      if (e && u) {
        const A = Math.max(
          S,
          Math.min(y, Math.round(E))
        );
        a(e, { durationInFrames: A });
      }
    },
    [e, u, a, S, y]
  ), O = Math.min(c, y), L = s.useCallback(() => {
    if (e && u) {
      const E = Math.max(
        S,
        Math.min(y, O)
      );
      a(e, { durationInFrames: E });
    }
  }, [e, u, a, O, S, y]), I = s.useCallback(
    (E) => {
      e && a(e, { timing: E });
    },
    [e, a]
  ), N = s.useCallback(() => {
    e && (o(e), t());
  }, [e, o, t]), P = s.useCallback(
    (E) => `${(E / c).toFixed(2)}s`,
    [c]
  ), T = s.useCallback(
    (E) => (E / c).toFixed(2),
    [c]
  ), j = s.useCallback(
    (E) => {
      const A = E.trim().replace(/s$/i, ""), z = parseFloat(A);
      return Number.isFinite(z) ? z * c : Number.NaN;
    },
    [c]
  );
  return !l || !u ? /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
    /* @__PURE__ */ r.jsx(Lo, { className: "w-8 h-8 text-muted-foreground/50 mb-2" }),
    /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground", children: "Transition not found" })
  ] }) : /* @__PURE__ */ r.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ r.jsxs(mr, { title: "Transition", icon: Lo, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Preset", tooltip: "Transition style preset", children: /* @__PURE__ */ r.jsx("div", { className: "w-full", children: /* @__PURE__ */ r.jsxs(
      ks,
      {
        value: h ? la(h) : void 0,
        onValueChange: k,
        children: [
          /* @__PURE__ */ r.jsx(Cs, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(Ms, { placeholder: "Select preset" }) }),
          /* @__PURE__ */ r.jsx(Rs, { children: m.map(([E, A]) => /* @__PURE__ */ r.jsxs(su, { children: [
            /* @__PURE__ */ r.jsx(au, { className: "text-[10px] text-muted-foreground", children: Su[E]?.title ?? E }),
            A.map((z) => /* @__PURE__ */ r.jsx(
              Kn,
              {
                value: la(z),
                className: "text-xs",
                children: wb(z)
              },
              la(z)
            ))
          ] }, E)) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Duration", tooltip: "Transition duration", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        dr,
        {
          value: l.durationInFrames,
          onChange: R,
          min: S,
          max: y,
          step: 1,
          formatValue: P,
          formatInputValue: T,
          parseInputValue: j,
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        ve,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 flex-shrink-0",
          onClick: L,
          title: "Reset to 1s",
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    v.length > 0 && /* @__PURE__ */ r.jsx(Ke, { label: "Ease", tooltip: "Easing curve for the transition", children: /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-0.5 p-0.5 bg-secondary rounded-md", children: v.map((E) => /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        onClick: () => I(E.value),
        className: fr(
          "px-3 py-1 text-xs rounded transition-colors",
          l.timing === E.value ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
        ),
        children: E.label
      },
      E.value
    )) }) }),
    /* @__PURE__ */ r.jsx("div", { className: "pt-2", children: /* @__PURE__ */ r.jsxs(
      ve,
      {
        variant: "destructive",
        size: "sm",
        className: "w-full h-7 text-xs",
        onClick: N,
        children: [
          /* @__PURE__ */ r.jsx(lu, { className: "w-3 h-3 mr-1.5" }),
          "Delete"
        ]
      }
    ) })
  ] }) });
}
function Cb(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const a = n.linkedGroupId ?? n.id, o = n.label.trim() || null, c = t.get(a);
    if (!c) {
      t.set(a, {
        displayLabel: o,
        labels: o ? [o] : [],
        audioOnly: n.type === "audio"
      });
      continue;
    }
    o && (c.labels.push(o), (!c.displayLabel || c.audioOnly && n.type !== "audio") && (c.displayLabel = o)), n.type !== "audio" && (c.audioOnly = !1);
  }
  return Array.from(t.values(), (n) => ({
    displayLabel: n.displayLabel,
    title: n.labels.filter((a, o, c) => c.indexOf(a) === o).join(", ")
  }));
}
function Mb(e) {
  const t = Cb(e), n = t.length;
  if (n === 0) return null;
  if (n === 1 && t[0]?.displayLabel)
    return {
      text: t[0].displayLabel,
      title: t[0].title || t[0].displayLabel
    };
  const a = `${n} clip${n === 1 ? "" : "s"} selected`;
  return {
    text: a,
    title: t.map((o) => o.title || o.displayLabel).filter(Boolean).join(", ") || a
  };
}
const Rb = s.memo(function({ fillContainer: t = !1 }) {
  const n = ts((I) => I.editorDensity), a = Ta(n), o = Ct((I) => I.rightSidebarOpen), c = Ct((I) => I.toggleRightSidebar), i = Ct((I) => I.rightSidebarWidth), l = Ct((I) => I.setRightSidebarWidth), u = Ct((I) => I.propertiesFullColumn), d = Ct((I) => I.togglePropertiesFullColumn), f = Pt((I) => I.selectedItemIds), m = Pt((I) => I.selectedMarkerId), b = Pt((I) => I.selectedTransitionId), h = Yt(
    gn(
      s.useCallback((I) => {
        const N = [];
        for (const P of f) {
          const T = I.itemById[P];
          T && N.push(T);
        }
        return N;
      }, [f])
    )
  ), x = f.length > 0, v = s.useMemo(
    () => Mb(h),
    [h]
  ), S = !b && !m ? v : null, y = s.useRef(!1), w = s.useRef(0), k = s.useRef(0), R = s.useCallback((I) => {
    I.preventDefault(), y.current = !0, w.current = I.clientX, k.current = i, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
  }, [i]);
  s.useEffect(() => {
    const I = (P) => {
      if (!y.current) return;
      const T = w.current - P.clientX, j = zf(k.current + T, a);
      l(j);
    }, N = () => {
      y.current && (y.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "");
    };
    return document.addEventListener("mousemove", I), document.addEventListener("mouseup", N), () => {
      document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", N), y.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "";
    };
  }, [a, l]);
  const O = o ? t ? void 0 : { width: i, transition: y.current ? "none" : "width 200ms" } : { transition: "width 200ms" }, L = t ? void 0 : { width: i };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `panel-bg border-l border-border shrink-0 relative h-full ${o ? t ? "flex-1 min-w-0 w-full" : "" : "w-0"}`,
        style: O,
        children: [
          /* @__PURE__ */ r.jsx(s.Activity, { mode: o ? "visible" : "hidden", children: /* @__PURE__ */ r.jsxs("div", { className: "h-full flex flex-col w-full", style: L, children: [
            /* @__PURE__ */ r.jsxs(
              "div",
              {
                className: "flex items-center justify-between px-3 border-b border-border flex-shrink-0",
                style: { height: qe.sidebarHeaderHeight },
                children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "min-w-0 flex items-center gap-1", children: [
                    !t && /* @__PURE__ */ r.jsx(
                      ve,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "shrink-0",
                        style: { width: qe.sidebarHeaderButtonSize, height: qe.sidebarHeaderButtonSize },
                        onClick: d,
                        "data-tooltip": u ? "Dock to preview" : "Expand full column",
                        "data-tooltip-side": "bottom",
                        children: u ? /* @__PURE__ */ r.jsx(ri, { className: "w-3 h-3" }) : /* @__PURE__ */ r.jsx(ni, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ r.jsx(Wf, { className: "w-3 h-3 shrink-0 text-muted-foreground" }),
                    /* @__PURE__ */ r.jsxs("h2", { className: "min-w-0 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground", children: [
                      /* @__PURE__ */ r.jsx("span", { className: "shrink-0 uppercase tracking-wide", children: "Properties" }),
                      S && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                        /* @__PURE__ */ r.jsx("span", { className: "shrink-0", children: "-" }),
                        /* @__PURE__ */ r.jsx("span", { className: "truncate normal-case tracking-normal", title: S.title, children: S.text })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ r.jsx(
                    ve,
                    {
                      variant: "ghost",
                      size: "icon",
                      style: { width: qe.sidebarHeaderButtonSize, height: qe.sidebarHeaderButtonSize },
                      onClick: c,
                      children: /* @__PURE__ */ r.jsx(Es, { className: "w-3.5 h-3.5" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto overflow-x-hidden p-3 [scrollbar-gutter:stable]", children: b ? /* @__PURE__ */ r.jsx(kb, {}) : m ? /* @__PURE__ */ r.jsx(yb, {}) : x ? /* @__PURE__ */ r.jsx(bb, {}) : /* @__PURE__ */ r.jsx(Lx, {}) })
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
        onClick: c,
        className: "absolute right-0 top-3 z-10 w-6 bg-secondary/50 hover:bg-secondary border border-border rounded-l-md flex items-center justify-center transition-all hover:w-7",
        style: { height: qe.sidebarRevealToggleHeight },
        "data-tooltip": "Show Properties Panel",
        "data-tooltip-side": "left",
        children: /* @__PURE__ */ r.jsx(Ts, { className: "w-3 h-3 text-muted-foreground" })
      }
    )
  ] });
});
function ua({
  locked: e,
  children: t,
  className: n,
  overlayClassName: a,
  style: o,
  fillHeight: c = !1
}) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: fr(
        c ? "relative flex h-full min-h-0 w-full flex-col" : "relative min-h-0",
        n
      ),
      "data-interaction-locked": e ? "true" : "false",
      style: o,
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: fr(
              c ? "flex min-h-0 flex-1 flex-col" : "h-full min-h-0",
              e ? "pointer-events-none select-none opacity-60" : void 0
            ),
            children: t
          }
        ),
        e ? /* @__PURE__ */ r.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: fr(
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
const Pb = 10, Ib = 33, Cl = 33, Ml = 50, Rl = 32, gs = 22, To = 55;
function Pl({
  onMouseDown: e,
  onReset: t,
  showReset: n,
  resetLabel: a,
  resetTooltip: o
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      onMouseDown: e,
      className: "w-1.5 cursor-col-resize hover:bg-primary/50 active:bg-primary/70 bg-border transition-colors flex-shrink-0 relative group",
      children: n && /* @__PURE__ */ r.jsx(
        "button",
        {
          onMouseDown: (c) => c.stopPropagation(),
          onClick: t,
          className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-primary hover:border-primary hover:[&>svg]:text-primary-foreground",
          "aria-label": a,
          "data-tooltip": o,
          children: /* @__PURE__ */ r.jsx(Xm, { className: "w-3.5 h-3.5 text-muted-foreground" })
        }
      )
    }
  );
}
const Tb = s.memo(function({
  project: t,
  containerSize: n,
  suspendOverlay: a
}) {
  const o = Ct((u) => u.mediaSkimPreviewMediaId), c = Ct((u) => u.mediaSkimPreviewFrame), i = Ct((u) => u.compoundClipSkimPreviewCompositionId), l = Ct((u) => u.compoundClipSkimPreviewFrame);
  return /* @__PURE__ */ r.jsx(Yo, { level: "component", children: i ? /* @__PURE__ */ r.jsx(
    sx,
    {
      compositionId: i,
      seekFrame: l,
      containerSize: n
    }
  ) : o ? /* @__PURE__ */ r.jsx(
    rx,
    {
      mediaId: o,
      seekFrame: c,
      containerSize: n
    }
  ) : /* @__PURE__ */ r.jsx(
    T0,
    {
      project: t,
      containerSize: n,
      suspendOverlay: a
    }
  ) });
}), Eb = s.memo(function({ project: t }) {
  const n = s.useRef(null), a = s.useRef(null), { isFullscreen: o, toggleFullscreen: c } = Rx({ containerRef: a }), [i, l] = s.useState({ width: 0, height: 0 }), u = ts((Ue) => Ue.editorDensity), d = Ta(u), f = ze((Ue) => Ue.isEditing), m = ze((Ue) => Ue.penMode), b = ze((Ue) => Ue.shapePenMode), h = ze((Ue) => Ue.editingItemId), x = ze((Ue) => Ue.selectedVertexIndices), v = ze((Ue) => Ue.selectedVertexIndex), S = ze((Ue) => Ue.penVertices.length), y = ze((Ue) => Ue.previewVertices?.length ?? 0), w = ze((Ue) => Ue.requestFinishPenMode), k = ze((Ue) => Ue.requestCancelPenMode), R = ze((Ue) => Ue.requestConvertSelectedVertex), O = ze((Ue) => Ue.stopEditing), L = Yt(
    s.useCallback((Ue) => {
      if (!h) return 0;
      const It = Ue.items.find((zt) => zt.id === h);
      return It?.type === "shape" && It.shapeType === "path" ? It.pathVertices?.length ?? 0 : 0;
    }, [h])
  ), I = er((Ue) => Ue.currentProject?.metadata.width), N = er((Ue) => Ue.currentProject?.metadata.height), P = er((Ue) => Ue.currentProject?.metadata.fps), T = er((Ue) => Ue.currentProject?.metadata.backgroundColor), j = I ?? t.width, E = N ?? t.height, A = P ?? t.fps, z = T ?? "#000000", q = be((Ue) => {
    if (Ue.items.length === 0) return null;
    let It = 0;
    for (const zt of Ue.items) {
      const Pe = zt.from + zt.durationInFrames;
      Pe > It && (It = Pe);
    }
    return It;
  }) ?? A * Pb, V = f && !m, X = b && S >= 3, D = x.length, W = D > 0, Y = Math.max(0, 3 - S), pe = y || L, C = X ? "Close the path from here, or click the first node." : S === 0 ? "Click in the preview to place your first point." : `Add ${Y} more ${Y === 1 ? "point" : "points"} to finish.`, B = pe > 0 ? "Drag points, handles, or the mask body to adjust the shape." : "Drag inside the mask to move it.", U = D === 0 ? "Select a point to enable corner and bezier conversion." : D === 1 && v !== null ? `Point ${v + 1} selected for knot conversion.` : `${D} points selected for knot conversion.`;
  s.useEffect(() => {
    const Ue = n.current;
    if (!Ue) return;
    let It = null, zt = 0;
    const Pe = () => {
      const Ht = Ue.getBoundingClientRect(), or = Math.max(0, Math.floor(Ht.width - d.previewPadding)), Pr = Math.max(0, Math.floor(Ht.height - d.previewPadding));
      l((Ut) => Ut.width === or && Ut.height === Pr ? Ut : { width: or, height: Pr });
    }, tr = () => {
      It === null && (It = requestAnimationFrame(() => {
        const Ht = performance.now();
        if (Ht - zt < Ib) {
          It = requestAnimationFrame(() => {
            It = null, zt = performance.now(), Pe();
          });
          return;
        }
        It = null, zt = Ht, Pe();
      }));
    };
    Pe();
    const qt = new ResizeObserver(tr);
    return qt.observe(Ue), () => {
      qt.disconnect(), It !== null && cancelAnimationFrame(It);
    };
  }, [d.previewPadding]);
  const J = s.useMemo(
    () => ({ width: j, height: E, fps: A, backgroundColor: z }),
    [j, E, A, z]
  ), ne = Ct((Ue) => Ue.sourcePreviewMediaId), me = Ct((Ue) => Ue.colorScopesOpen), [xe, we] = s.useState(Ml), [Re, Be] = s.useState(Rl), [Fe, De] = s.useState(!1), Qe = s.useRef(null), je = s.useRef(!1), ee = s.useRef(null), Ge = s.useRef(null), H = s.useRef(0), ue = s.useRef(null), Ce = s.useRef(!1), Ve = s.useRef(null), Me = s.useRef(null), _ = s.useRef(0), he = s.useRef(null), et = s.useCallback(() => {
    Ct.getState().setSourcePreviewMediaId(null);
  }, []), Ye = s.useCallback(() => {
    Ct.getState().setColorScopesOpen(!1);
  }, []), $e = me ? Math.max(gs, Math.min(To, Re)) : 0, ct = 100 - $e, pt = xe / 100 * ct, Vt = ne ? Math.max(
    gs,
    Math.min(ct - gs, pt)
  ) : 0, yr = Ml, Bt = Rl, Lr = s.useCallback(() => {
    we(yr);
  }, [yr]), hr = s.useCallback(() => {
    Be(Bt);
  }, [Bt]), wr = s.useCallback((Ue) => {
    Ue.preventDefault(), je.current = !0, De(!0), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
    const It = (tr) => {
      if (!je.current || !Qe.current) return;
      const qt = Qe.current.getBoundingClientRect(), Ht = (tr.clientX - qt.left) / qt.width * 100, or = 100 - (me ? $e : 0);
      ee.current = or > 0 ? Math.max(0, Math.min(100, Ht / or * 100)) : 50, Ge.current === null && (Ge.current = requestAnimationFrame(() => {
        Ge.current = null;
        const Pr = performance.now();
        if (Pr - H.current < Cl)
          return;
        H.current = Pr;
        const Ut = ee.current;
        Ut !== null && we(Ut);
      }));
    }, zt = () => {
      const tr = ee.current;
      tr !== null && we(tr), Ge.current !== null && (cancelAnimationFrame(Ge.current), Ge.current = null), je.current = !1, ee.current = null, De(!1), document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", It), document.removeEventListener("mouseup", Pe), ue.current = null;
    }, Pe = () => {
      zt();
    };
    ue.current = zt, document.addEventListener("mousemove", It), document.addEventListener("mouseup", Pe);
  }, [me, $e]), Br = s.useCallback((Ue) => {
    Ue.preventDefault(), Ce.current = !0, De(!0), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
    const It = (tr) => {
      if (!Ce.current || !Qe.current) return;
      const qt = Qe.current.getBoundingClientRect();
      Ve.current = (qt.right - tr.clientX) / qt.width * 100, Me.current === null && (Me.current = requestAnimationFrame(() => {
        Me.current = null;
        const Ht = performance.now();
        if (Ht - _.current < Cl)
          return;
        _.current = Ht;
        const or = Ve.current;
        or !== null && Be(
          Math.max(gs, Math.min(To, or))
        );
      }));
    }, zt = () => {
      const tr = Ve.current;
      tr !== null && Be(
        Math.max(gs, Math.min(To, tr))
      ), Me.current !== null && (cancelAnimationFrame(Me.current), Me.current = null), Ce.current = !1, Ve.current = null, De(!1), document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", It), document.removeEventListener("mouseup", Pe), he.current = null;
    }, Pe = () => {
      zt();
    };
    he.current = zt, document.addEventListener("mousemove", It), document.addEventListener("mouseup", Pe);
  }, []);
  s.useEffect(() => () => {
    ue.current?.(), he.current?.();
  }, []);
  const Sr = !!ne || me, At = Math.max(
    0,
    100 - Vt - $e
  );
  return /* @__PURE__ */ r.jsxs("div", { ref: Qe, className: "flex-1 flex min-h-0 min-w-0 relative", role: "region", "aria-label": "Preview area", children: [
    ne && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        ua,
        {
          locked: f,
          fillHeight: !0,
          className: "h-full",
          overlayClassName: "rounded-none",
          style: { width: `${Vt}%` },
          children: /* @__PURE__ */ r.jsx("div", { className: "flex h-full flex-col min-w-0", children: /* @__PURE__ */ r.jsx(
            J0,
            {
              mediaId: ne,
              onClose: et
            },
            ne
          ) })
        }
      ),
      /* @__PURE__ */ r.jsx(ua, { locked: f, overlayClassName: "rounded-none", children: /* @__PURE__ */ r.jsx(
        Pl,
        {
          onMouseDown: wr,
          onReset: Lr,
          showReset: Math.abs(Vt - yr) > 0.5,
          resetLabel: "Reset source monitor width",
          resetTooltip: "Reset Source Monitor Width"
        }
      ) })
    ] }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: a,
        className: `flex flex-col min-w-0 min-h-0 panel-bg ${Sr ? "" : "flex-1"} ${o ? "min-h-screen rounded-none border-0 bg-background" : ""}`,
        style: Sr ? { width: `${At}%` } : void 0,
        role: "region",
        "aria-label": "Program monitor",
        children: [
          Sr && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "flex items-center px-3 flex-shrink-0",
              style: { height: qe.previewSplitHeaderHeight },
              children: /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted-foreground", children: "Program" })
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "flex-1 flex flex-col min-w-0 min-h-0", children: [
            /* @__PURE__ */ r.jsx("div", { ref: n, className: "flex-1 min-h-0 relative overflow-hidden", "aria-label": "Preview canvas region", children: /* @__PURE__ */ r.jsx(
              Tb,
              {
                project: J,
                containerSize: i,
                suspendOverlay: Fe
              }
            ) }),
            m ? /* @__PURE__ */ r.jsxs(
              "div",
              {
                className: "flex items-center px-3 flex-shrink-0 gap-3 overflow-hidden",
                style: { height: qe.previewControlsHeight },
                role: "toolbar",
                "aria-label": "Mask pen controls",
                children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
                    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                      /* @__PURE__ */ r.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-500", children: "Pen Tool" }),
                      /* @__PURE__ */ r.jsxs("span", { className: "rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-600", children: [
                        S,
                        " ",
                        S === 1 ? "point" : "points"
                      ] })
                    ] }),
                    /* @__PURE__ */ r.jsx("span", { className: "min-w-0 truncate text-xs text-muted-foreground", children: C })
                  ] }),
                  /* @__PURE__ */ r.jsxs("div", { className: "flex flex-shrink-0 items-center gap-2", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "hidden text-[11px] text-muted-foreground lg:inline", children: "Backspace removes the last point." }),
                    /* @__PURE__ */ r.jsx(
                      ve,
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
                      ve,
                      {
                        type: "button",
                        size: "sm",
                        variant: "ghost",
                        className: "h-8 px-3 text-[11px]",
                        onClick: k,
                        children: "Cancel"
                      }
                    )
                  ] })
                ]
              }
            ) : V ? /* @__PURE__ */ r.jsxs(
              "div",
              {
                className: "flex items-center px-3 flex-shrink-0 gap-3 overflow-hidden",
                style: { height: qe.previewControlsHeight },
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
                      ve,
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
                      ve,
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
                      ve,
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
                style: { height: qe.previewControlsHeight },
                children: [
                  /* @__PURE__ */ r.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ r.jsx(O0, { fps: A, totalFrames: q }) }),
                  /* @__PURE__ */ r.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ r.jsx("div", { className: "pointer-events-auto flex items-center gap-2.5", children: /* @__PURE__ */ r.jsx(D0, { totalFrames: q, fps: A }) }) }),
                  /* @__PURE__ */ r.jsxs("div", { className: "ml-auto flex flex-shrink-0 items-center gap-0.5", children: [
                    /* @__PURE__ */ r.jsx(B0, {}),
                    /* @__PURE__ */ r.jsx(qo, { orientation: "vertical", className: "h-4" }),
                    /* @__PURE__ */ r.jsx(Ex, { width: j, height: E }),
                    /* @__PURE__ */ r.jsx(Px, { isFullscreen: o, onToggle: c })
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    ),
    me && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(ua, { locked: f, overlayClassName: "rounded-none", children: /* @__PURE__ */ r.jsx(
        Pl,
        {
          onMouseDown: Br,
          onReset: hr,
          showReset: Math.abs($e - Bt) > 0.5,
          resetLabel: "Reset color scopes width",
          resetTooltip: "Reset Color Scopes Width"
        }
      ) }),
      /* @__PURE__ */ r.jsx(
        ua,
        {
          locked: f,
          fillHeight: !0,
          className: "h-full",
          overlayClassName: "rounded-none",
          style: { width: `${$e}%` },
          children: /* @__PURE__ */ r.jsx("div", { className: "flex h-full flex-col min-w-0", children: /* @__PURE__ */ r.jsx(Mx, { onClose: Ye }) })
        }
      )
    ] })
  ] });
});
function Fb() {
  return { schemaVersion: Ea, timeline: uu() };
}
function jb(e, t) {
  if (e.schemaVersion === Ea) return e.timeline;
  const n = {
    id: t.id,
    name: t.name,
    description: "",
    duration: 0,
    schemaVersion: e.schemaVersion,
    metadata: { width: t.width, height: t.height, fps: t.fps },
    createdAt: 0,
    updatedAt: 0,
    timeline: e.timeline
  };
  return Kf(n).project.timeline ?? { tracks: [], items: [] };
}
function ed(e, t) {
  const n = e ? jb(e, t) : { tracks: [], items: [] };
  $f(n, { defaultTracks: () => Yf(qf) }), Is.getState().setTimelineLoading(!1);
}
function Nb(e) {
  return tc({
    commit: (t) => e.commit(Fb(), t),
    undo: () => e.undo(),
    redo: () => e.redo()
  }), () => tc(null);
}
const zo = /* @__PURE__ */ new Set();
let $o = 0;
function td() {
  if ($o > 0) return !0;
  const e = document.activeElement;
  for (const t of zo)
    if (t.matches(":hover") || e && t.contains(e)) return !0;
  return !1;
}
function rd(e) {
  return zo.add(e), Zf(td), () => zo.delete(e);
}
const Ab = {
  SPLIT_AT_PLAYHEAD: "k",
  DELETE_SELECTED: "x",
  DELETE_SELECTED_ALT: "delete",
  RIPPLE_DELETE: "shift+delete",
  RIPPLE_DELETE_ALT: "shift+x",
  GO_TO_START: "shift+left",
  GO_TO_END: "shift+right",
  NUDGE_LEFT: "alt+left",
  NUDGE_RIGHT: "alt+right",
  NUDGE_UP: "alt+up",
  NUDGE_DOWN: "alt+down",
  ZOOM_TO_FIT: "home",
  ZOOM_IN: "equal",
  ZOOM_OUT: "minus",
  TOGGLE_SNAP: "shift+tab",
  CLEAR_KEYFRAMES: "alt+i",
  TOGGLE_KEYFRAME_EDITOR: "mod+tab",
  PREVIOUS_MARKER: "shift+bracketleft",
  NEXT_MARKER: "shift+bracketright"
};
function gv(e) {
  const t = ts.getState();
  if (t.resetHotkeys(), e === "blender")
    for (const [n, a] of Object.entries(Ab)) t.setHotkeyBinding(n, a);
}
function nd(e) {
  return ts.getState().hotkeyOverrides[e] ?? Xf[e];
}
const Db = {
  space: [" ", "Space"],
  left: ["ArrowLeft", "ArrowLeft"],
  right: ["ArrowRight", "ArrowRight"],
  up: ["ArrowUp", "ArrowUp"],
  down: ["ArrowDown", "ArrowDown"],
  home: ["Home", "Home"],
  end: ["End", "End"],
  delete: ["Delete", "Delete"],
  backspace: ["Backspace", "Backspace"],
  tab: ["Tab", "Tab"],
  equal: ["=", "Equal"],
  minus: ["-", "Minus"],
  backslash: ["\\", "Backslash"],
  bracketleft: ["[", "BracketLeft"],
  bracketright: ["]", "BracketRight"],
  comma: [",", "Comma"],
  period: [".", "Period"]
};
function Ob(e) {
  const t = nd(e).split(",")[0].split("+"), n = t.pop(), [a, o] = Db[n] ?? (/^[a-z]$/.test(n) ? [n, `Key${n.toUpperCase()}`] : /^\d$/.test(n) ? [n, `Digit${n}`] : [n, n]), c = /Mac|iPhone|iPad/.test(navigator.platform), i = {
    key: a,
    code: o,
    bubbles: !0,
    cancelable: !0,
    shiftKey: t.includes("shift"),
    altKey: t.includes("alt"),
    ctrlKey: t.includes("ctrl") || t.includes("mod") && !c,
    metaKey: t.includes("meta") || t.includes("mod") && c
  };
  $o++;
  try {
    document.dispatchEvent(new KeyboardEvent("keydown", i)), document.dispatchEvent(new KeyboardEvent("keyup", i));
  } finally {
    $o--;
  }
}
const _b = 2;
function Lb(e) {
  let t = !1;
  const n = (u) => {
    t = !0;
    try {
      u();
    } finally {
      t = !1;
    }
  }, a = () => {
    const u = re.getState(), d = Math.round(e.frame);
    n(() => {
      e.playing !== u.isPlaying && (e.playing ? (u.setCurrentFrame(d), u.play()) : u.pause());
      const f = re.getState(), m = Math.abs(f.currentFrame - d);
      (f.isPlaying ? m > _b : m > 0) && f.setCurrentFrame(d);
    });
  }, o = () => Yt.getState().maxItemEndFrame ?? 0, c = (u, d) => {
    if (!t) {
      if (u.isPlaying !== d.isPlaying) {
        u.isPlaying && !e.playing ? e.play() : !u.isPlaying && e.playing && u.currentFrame < o() - 1 && e.pause();
        return;
      }
      u.isPlaying || u.currentFrame === d.currentFrame || u.currentFrame === Math.round(e.frame) || (td() ? e.seek(u.currentFrame) : a());
    }
  };
  a();
  const i = e.subscribe(a), l = re.subscribe(c);
  return () => {
    i(), l();
  };
}
function Bb(e = {}) {
  const t = Jf();
  rc(
    t.SAVE,
    (n) => {
      n.preventDefault(), e.onSave && e.onSave();
    },
    nc,
    [e.onSave]
  ), rc(
    t.EXPORT,
    (n) => {
      n.preventDefault(), e.onExport && e.onExport();
    },
    { ...nc, eventListenerOptions: { capture: !0 } },
    [e.onExport]
  );
}
const Hb = 350, Ub = 8;
function Pn(e, t, n, a, o) {
  const c = new DragEvent(t, { bubbles: !0, cancelable: !0, composed: !0, clientX: a, clientY: o, dataTransfer: n });
  return e.dispatchEvent(c);
}
function Gb(e) {
  const t = e.getBoundingClientRect(), n = e.cloneNode(!0);
  return Object.assign(n.style, {
    position: "fixed",
    left: "0",
    top: "0",
    width: `${t.width}px`,
    height: `${t.height}px`,
    margin: "0",
    opacity: "0.75",
    pointerEvents: "none",
    zIndex: "2147483647",
    transformOrigin: "center"
  }), (e.closest(".kc-embed") ?? document.body).appendChild(n), n;
}
function Vb(e, t, n) {
  const { width: a, height: o } = e.ghost.getBoundingClientRect();
  e.ghost.style.transform = `translate(${t - a / 2}px, ${n - o / 2}px) scale(0.8)`;
}
function Eo(e, t, n) {
  Vb(e, t, n);
  const a = document.elementFromPoint(t, n);
  a !== e.over && (a && Pn(a, "dragenter", e.data, t, n), e.over && Pn(e.over, "dragleave", e.data, t, n), e.over = a), e.accepted = a ? !Pn(a, "dragover", e.data, t, n) : !1;
}
function Wb(e, t, n, a) {
  e.ghost.remove(), !a && e.over && e.accepted ? Pn(e.over, "drop", e.data, t, n) : e.over && Pn(e.over, "dragleave", e.data, t, n), Pn(e.source, "dragend", e.data, t, n);
}
let Il = !1;
function zb() {
  if (Il || typeof DragEvent > "u" || typeof DataTransfer > "u") return;
  Il = !0;
  let e = null, t = null, n = null;
  const a = () => {
    t && clearTimeout(t), t = null, n = null;
  };
  document.addEventListener("pointerdown", (i) => {
    if (i.pointerType === "mouse" || e) return;
    const l = i.target?.closest?.('.kc-embed [draggable="true"]');
    l && (n = { x: i.clientX, y: i.clientY, id: i.pointerId, source: l }, t = setTimeout(() => {
      if (!n) return;
      const u = new DataTransfer();
      if (u.effectAllowed = "all", !Pn(n.source, "dragstart", u, n.x, n.y)) {
        a();
        return;
      }
      navigator.vibrate?.(10), e = { source: n.source, data: u, ghost: Gb(n.source), over: null, accepted: !1 }, Eo(e, n.x, n.y), t = null;
    }, Hb));
  }, !0), document.addEventListener("pointermove", (i) => {
    !n || i.pointerId !== n.id || (e ? i.pointerType !== "touch" && Eo(e, i.clientX, i.clientY) : Math.hypot(i.clientX - n.x, i.clientY - n.y) > Ub && a());
  }, !0);
  const o = (i, l, u) => {
    e && (Wb(e, i, l, u), e = null), a();
  };
  document.addEventListener("pointerup", (i) => {
    n && i.pointerId === n.id && !(e && i.pointerType === "touch") && o(i.clientX, i.clientY, !1);
  }, !0), document.addEventListener("pointercancel", (i) => {
    n && i.pointerId === n.id && !e && a();
  }, !0), document.addEventListener("touchmove", (i) => {
    if (!e) return;
    i.preventDefault();
    const l = i.touches[0];
    l && Eo(e, l.clientX, l.clientY);
  }, { passive: !1, capture: !0 });
  const c = (i) => (l) => {
    if (!e) return;
    const u = l.changedTouches[0];
    o(u?.clientX ?? 0, u?.clientY ?? 0, i);
  };
  document.addEventListener("touchend", c(!1), !0), document.addEventListener("touchcancel", c(!0), !0), document.addEventListener("contextmenu", (i) => {
    (e || t) && i.preventDefault();
  }, !0), document.addEventListener("dragstart", (i) => {
    i.isTrusted && (e || t) && i.preventDefault();
  }, !0);
}
const $b = 'input,textarea,select,[contenteditable="true"],[draggable="true"]';
function Fo(e, t, n, a) {
  t.dispatchEvent(new MouseEvent(e, {
    bubbles: !0,
    cancelable: !0,
    composed: !0,
    view: window,
    clientX: n.clientX,
    clientY: n.clientY,
    screenX: n.screenX,
    screenY: n.screenY,
    button: 0,
    buttons: a,
    detail: 1,
    shiftKey: n.shiftKey,
    altKey: n.altKey,
    ctrlKey: n.ctrlKey,
    metaKey: n.metaKey
  }));
}
let Tl = !1;
function Kb() {
  if (Tl) return;
  Tl = !0;
  let e = null;
  document.addEventListener("pointerdown", (n) => {
    if (n.pointerType === "mouse" || !n.isPrimary || e !== null) return;
    const a = n.target;
    !a?.closest?.("[data-kc-touch-mouse]") || a.closest($b) || (n.preventDefault(), e = n.pointerId, Fo("mousedown", a, n, 1));
  }, !0), document.addEventListener("pointermove", (n) => {
    n.pointerId === e && Fo("mousemove", document.elementFromPoint(n.clientX, n.clientY) ?? document, n, 1);
  }, !0);
  const t = (n) => {
    n.pointerId === e && (e = null, Fo("mouseup", document.elementFromPoint(n.clientX, n.clientY) ?? document, n, 0));
  };
  document.addEventListener("pointerup", t, !0), document.addEventListener("pointercancel", t, !0);
}
const Yb = {
  mod: /Mac|iPhone|iPad/.test(navigator.platform) ? "Cmd" : "Ctrl",
  shift: "Shift",
  alt: "Alt",
  ctrl: "Ctrl",
  meta: "Cmd",
  left: "Left",
  right: "Right",
  up: "Up",
  down: "Down",
  home: "Home",
  end: "End",
  space: "Space",
  delete: "Delete",
  backspace: "Backspace",
  tab: "Tab",
  equal: "Numpad +",
  minus: "Numpad -",
  bracketleft: "[",
  bracketright: "]",
  backslash: "\\",
  comma: ",",
  period: "."
}, qb = (e) => e.split(",")[0].split("+").map((t) => Yb[t] ?? t.toUpperCase()).join(" "), $t = (e, t, n) => ({ label: e, keys: qb(nd(t)), run: () => Ob(t), enabled: n }), Xn = () => Pt.getState().selectedItemIds, fn = () => Xn().length > 0;
function sd(e) {
  const { tracks: t, items: n, transitions: a, setTracks: o } = be.getState(), c = Math.round(re.getState().currentFrame), i = t.filter((f) => !f.isGroup && f.kind !== "audio").sort((f, m) => m.order - f.order), l = i.find((f) => !tm("", c, e, f.id, n, a));
  if (l) return { trackId: l.id, from: c };
  const u = i[i.length - 1], d = rm({ tracks: t, kind: "video", order: u ? nm(t, u, "above") : 0 });
  return o([...t, d]), { trackId: d.id, from: c };
}
function jo(e, t) {
  const n = be.getState().fps, a = da(n), o = sd(a), c = er.getState().currentProject, i = em({
    template: { type: "timeline-template", itemType: e, label: t, ...e === "shape" ? { shapeType: "rectangle" } : {} },
    placement: {
      ...o,
      durationInFrames: a,
      canvasWidth: c?.metadata.width ?? 1920,
      canvasHeight: c?.metadata.height ?? 1080
    }
  });
  be.getState().addItems([i]), Pt.getState().selectItems([i.id]);
}
async function No(e) {
  const t = await Qt.getState().importMedia();
  let n = Math.round(re.getState().currentFrame);
  const a = be.getState().fps;
  for (const o of t ?? [])
    await e(o.id, n), n += Math.max(1, Math.round((o.duration || 3) * a));
}
function Xb(e) {
  const t = e.frameEnd - e.frameStart + 1, n = sd(t), a = {
    id: crypto.randomUUID(),
    type: "scene",
    label: e.name,
    scene: e.id,
    ...n,
    durationInFrames: t,
    sourceStart: e.frameStart,
    sourceEnd: e.frameEnd + 1,
    sourceDuration: e.frameEnd + 1,
    sourceFps: be.getState().fps,
    sourceWidth: e.width,
    sourceHeight: e.height
  };
  be.getState().addItems([a]), Pt.getState().selectItems([a.id]);
}
async function Zb() {
  const e = Vl()?.bake, t = er.getState().currentProject?.metadata;
  if (!e || !t) return;
  const n = be.getState().items.filter((a) => a.type === "scene" && Xn().includes(a.id));
  for (const a of n) {
    const o = sc(a, 0, t.width, t.height, "preview");
    await e(o, sc(a, a.durationInFrames - 1, t.width, t.height, "preview").frame);
  }
}
const Jb = () => be.getState().items.some((e) => e.type === "scene" && Xn().includes(e.id));
function Qb(e, t = () => []) {
  return {
    View: [
      $t("Frame All", "ZOOM_TO_FIT"),
      $t("Zoom In", "ZOOM_IN"),
      $t("Zoom Out", "ZOOM_OUT"),
      "-",
      $t("Play Animation", "PLAY_PAUSE"),
      $t("Jump to Start", "GO_TO_START"),
      $t("Jump to End", "GO_TO_END"),
      "-",
      $t("Snapping", "TOGGLE_SNAP")
    ],
    Select: [
      { label: "All", keys: "A", run: () => Pt.getState().selectItems(be.getState().items.map((n) => n.id)) },
      { label: "None", keys: "Alt A", run: () => Pt.getState().clearSelection() },
      {
        label: "Invert",
        keys: "Ctrl I",
        run: () => {
          const n = new Set(Xn());
          Pt.getState().selectItems(be.getState().items.map((a) => a.id).filter((a) => !n.has(a)));
        }
      }
    ],
    Marker: [
      $t("Add Marker", "ADD_MARKER"),
      $t("Delete Marker", "REMOVE_MARKER"),
      "-",
      $t("Jump to Previous Marker", "PREVIOUS_MARKER"),
      $t("Jump to Next Marker", "NEXT_MARKER")
    ],
    Add: [
      { label: "Movie...", run: () => No(e) },
      { label: "Sound...", run: () => No(e) },
      { label: "Image/Sequence...", run: () => No(e) },
      { label: "Scene", items: () => t().map((n) => ({ label: n.name, run: () => Xb(n) })), enabled: () => t().length > 0 },
      "-",
      { label: "Color", run: () => jo("shape", "Color") },
      { label: "Text", run: () => jo("text", "Text") },
      { label: "Adjustment Layer", run: () => jo("adjustment", "Adjustment Layer") }
    ],
    Strip: [
      $t("Split", "SPLIT_AT_PLAYHEAD", fn),
      $t("Join", "JOIN_ITEMS", () => Xn().length > 1),
      $t("Freeze Frame", "FREEZE_FRAME", fn),
      "-",
      $t("Copy", "COPY", fn),
      $t("Paste", "PASTE"),
      {
        label: "Duplicate",
        keys: "Shift D",
        enabled: fn,
        run: () => {
          const n = be.getState().items.filter((i) => Xn().includes(i.id));
          if (!n.length) return;
          const a = Math.max(...n.map((i) => i.from + i.durationInFrames)), o = Math.min(...n.map((i) => i.from)), c = Qf(n.map((i) => i.id), n.map((i) => ({ from: i.from - o + a, trackId: i.trackId })));
          Pt.getState().selectItems(c.map((i) => i.id));
        }
      },
      "-",
      $t("Delete", "DELETE_SELECTED", fn),
      $t("Ripple Delete", "RIPPLE_DELETE", fn),
      "-",
      { label: "Rebuild Proxy", run: Zb, enabled: Jb },
      "-",
      $t("Link Audio and Video", "LINK_AUDIO_VIDEO", fn),
      $t("Unlink Audio and Video", "UNLINK_AUDIO_VIDEO", fn)
    ]
  };
}
async function xv({ frameStart: e, frameEnd: t, width: n, height: a }) {
  const o = uu(), c = er.getState().currentProject, i = sm(
    o.tracks,
    o.items,
    o.transitions ?? [],
    be.getState().fps,
    n,
    a,
    e,
    t + 1,
    o.keyframes ?? [],
    c?.metadata.backgroundColor
  );
  i.tracks = await ru(i.tracks, { useProxy: !1 });
  const l = new OffscreenCanvas(n, a), u = await Oo(i, l, l.getContext("2d"), { mode: "export" });
  return await u.preload(), {
    async renderFrame(d) {
      return await u.renderFrame(d - e), l;
    },
    async audio(d) {
      const f = await import("./canvas-audio-CPOXynfi.js");
      return await f.hasAudioContent(i) ? f.processAudio(i, d) : null;
    },
    dispose: () => u.dispose()
  };
}
let Rr = null, Dr = null, Ko = null, ya, wa, ys, ws, Sa, ad;
const ka = /* @__PURE__ */ new Set();
function ev() {
  return dm(), Bb({ onSave: () => {
    Rr && !Rr.history && be.getState().saveTimeline(Rr.project.id);
  } }), null;
}
function tv() {
  if (Dr) return Dr;
  Dr = document.createElement("div"), Dr.className = "kc-embed kc-embed-portals dark", document.body.append(Dr), fu(Dr);
  const e = El.createRoot(Dr.appendChild(document.createElement("div")));
  return e.render(
    /* @__PURE__ */ r.jsxs(du, { delayDuration: 300, children: [
      /* @__PURE__ */ r.jsx(ev, {}),
      /* @__PURE__ */ r.jsx(nh, {}),
      /* @__PURE__ */ r.jsx(sh, {})
    ] })
  ), Ko = e, ad = rd(Dr), Dr;
}
async function bv(e) {
  Rr = e;
  const t = e.project;
  await am(t.id) || await om({
    id: t.id,
    name: t.name,
    description: "",
    duration: 0,
    schemaVersion: Ea,
    metadata: { width: t.width, height: t.height, fps: t.fps, backgroundColor: t.backgroundColor },
    createdAt: Date.now(),
    updatedAt: Date.now()
  }), re.getState().setPreviewFrame(null);
  const n = Qt.getState();
  n.setCurrentProject(t.id), n.loadMediaItems().catch((a) => e.notify?.(`Media library: ${String(a)}`, "error")), nv(t), ws?.(), ws = void 0, ys?.(), ys = void 0, e.history ? (ed(e.edit, t), ws = Nb(e.history)) : (await be.getState().loadTimeline(t.id, { allowProjectUpgrade: !0 }), ys = rv(t.id)), Sa?.(), Sa = e.clock ? Lb(e.clock) : void 0, im(e.frames ?? null), wa?.(), wa = cm(), ya?.(), ya = Qt.subscribe((a, o) => {
    a.error && a.error !== o.error && Rr?.notify?.(a.error, "error");
  });
}
function rv(e) {
  let t, n = !1;
  const a = be.subscribe(() => {
    const o = be.getState().isDirty;
    if (!o || n) {
      n = o;
      return;
    }
    n = o, clearTimeout(t), t = setTimeout(() => {
      be.getState().saveTimeline(e);
    }, 400);
  });
  return () => {
    clearTimeout(t), a();
  };
}
function nv({ width: e, height: t, fps: n }) {
  if (!Rr) return;
  Rr.project = { ...Rr.project, width: e, height: t, fps: n };
  const a = Rr.project;
  er.getState().setCurrentProject({
    id: a.id,
    name: a.name,
    description: "",
    duration: 0,
    schemaVersion: Ea,
    metadata: { width: e, height: t, fps: n, backgroundColor: a.backgroundColor },
    createdAt: 0,
    updatedAt: 0
  }), Is.getState().setFps(n);
}
function vv(e) {
  Rr && ed(e, Rr.project);
}
function _a(e, t, { touchMouse: n = !1 } = {}) {
  tv(), zb(), n && Kb(), e.classList.add("kc-embed", "dark");
  const a = El.createRoot(e);
  a.render(
    /* @__PURE__ */ r.jsx(s.StrictMode, { children: /* @__PURE__ */ r.jsx("div", { className: "kc-island", "data-kc-touch-mouse": n || void 0, children: /* @__PURE__ */ r.jsx(Yo, { level: "feature", children: /* @__PURE__ */ r.jsx(du, { delayDuration: 300, children: t }) }) }) })
  ), ka.add(a);
  const o = rd(e);
  return {
    dispose() {
      o(), ka.delete(a), a.unmount(), e.classList.remove("kc-embed", "dark");
    }
  };
}
function sv() {
  const e = be((n) => n.fps), t = Yt((n) => n.maxItemEndFrame);
  return /* @__PURE__ */ r.jsx(Cd, { duration: Math.max(t / Math.max(e, 1), 10) });
}
function av() {
  const e = er((t) => t.currentProject?.metadata);
  return e ? /* @__PURE__ */ r.jsx(Eb, { project: e }) : null;
}
const yv = (e) => _a(e, /* @__PURE__ */ r.jsx(sv, {})), wv = (e) => _a(e, /* @__PURE__ */ r.jsx(av, {}), { touchMouse: !0 }), Sv = (e) => _a(e, /* @__PURE__ */ r.jsx(Ax, { fillContainer: !0 })), kv = (e) => _a(e, /* @__PURE__ */ r.jsx(Rb, { fillContainer: !0 }));
async function Cv(e) {
  return Qt.getState().importHandles(e);
}
async function ov(e, { frame: t } = {}) {
  const n = Qt.getState().mediaItems.find((S) => S.id === e);
  if (!n) throw new Error(`Unknown media: ${e}`);
  const a = Ia(n.mimeType), o = be.getState(), c = o.fps, i = o.tracks.filter((S) => !S.isGroup).sort((S, y) => S.order - y.order), l = i.find((S) => S.kind !== "audio"), u = i.find((S) => S.kind === "audio"), d = a === "audio" ? u : l;
  if (!d) throw new Error("No track for this media type");
  const f = Math.max(0, Math.round(t ?? re.getState().currentFrame)), m = Dl(n, a, c), [b, h] = await Promise.all([
    pn(e),
    a === "audio" ? Promise.resolve(null) : Zo.getThumbnailBlobUrl(e)
  ]);
  if (!b) throw new Error(`Media is not readable: ${n.fileName}`);
  const x = er.getState().currentProject, v = lm({
    media: n,
    mediaId: e,
    mediaType: a,
    label: n.fileName,
    timelineFps: c,
    blobUrl: b,
    thumbnailUrl: h,
    canvasWidth: x?.metadata.width ?? 1920,
    canvasHeight: x?.metadata.height ?? 1080,
    placement: {
      primary: { trackId: d.id, from: f, durationInFrames: m },
      linkedAudio: a === "video" && n.audioCodec && u ? { trackId: u.id, from: f, durationInFrames: m } : void 0
    }
  });
  return o.addItems(v), v.map((S) => S.id);
}
function Mv() {
  return Qb((e, t) => ov(e, { frame: t }), () => Rr?.scenes?.() ?? []);
}
function Rv() {
  for (const e of [...ka]) e.unmount();
  ka.clear(), Ko?.unmount(), Ko = null, ad?.(), Dr?.remove(), Dr = null, fu(void 0), wa?.(), ys?.(), ws?.(), Sa?.(), ya?.(), wa = ys = ws = Sa = ya = void 0, re.getState().pause(), um(), Rr = null;
}
export {
  Ab as BLENDER_KEYMAP,
  ov as addMediaStrip,
  Rv as disposeAll,
  Fb as getEdit,
  Cv as importMedia,
  Mv as menus,
  Sv as mountMedia,
  wv as mountPreview,
  yv as mountSequencer,
  kv as mountStripProperties,
  xv as openCompositor,
  bv as openProject,
  vv as setHostEdit,
  Tv as setIconBase,
  gv as setKeymap,
  nv as setProjectFormat
};
