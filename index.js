import { r as n, j as r, b as cd, d as Rl } from "./react-vendor-18pR7s9b.js";
import { u as $a, T as ld, a as ud, i as Pl, M as dd, E as Uo, K as fd, b as md, S as Go, c as hd } from "./feature-editing-ui-atq7xlDf.js";
import { e2 as pd, e3 as Qr, dj as Il, c as fr, b as ke, d as It, e4 as Hi, dp as gd, e5 as Po, e6 as xd, e7 as bd, e8 as vd, e9 as yd, ea as xa, eb as ba, j as ne, ec as Wn, dg as Tr, df as Kr, ed as va, ee as wd, ef as Ka, eg as Vo, eh as Ya, ei as Sd, ej as kd, dZ as Xe, ek as ya, el as Mn, em as Or, cd as Wo, au as mn, en as Cd, eo as Ui, ep as Tl, eq as El, bQ as Fl, er as jl, bp as Xt, J as hn, P as zo, es as Md, bm as Nl, U as Qt, bW as Rd, et as Pd, eu as Id, c9 as wa, ev as Td, ew as Er, ex as ze, a8 as Ed, $ as Jt, bM as Al, ce as Fd, aO as vs, ey as Dl, ez as fa, eA as Ol, eB as $o, eC as _l, C as Ll, eD as jd, aG as gs, aH as kn, aJ as Io, aK as xs, eE as Nd, eF as ls, eG as Gi, eH as Ad, eI as Ys, eJ as qa, eK as Vi, eL as Xa, eM as Za, eN as Wi, E as qe, eO as Bl, ds as Dd, B as be, eP as Hl, eQ as Ms, eR as Ul, dw as Gl, a7 as Rs, eS as Vl, eT as Od, eU as _d, eV as zn, cK as Wl, cL as zl, n as Ld, cN as $l, cO as Kl, eW as Ps, eX as Ko, eY as Yl, eZ as ql, e_ as Yo, dq as Bd, aZ as Zt, q as es, s as Sa, cT as Xl, e as Ct, e$ as Hd, f0 as cr, f1 as lr, f2 as Ud, f3 as ur, f4 as Gd, f5 as Vd, f6 as Wd, V as zi, f7 as zd, f8 as $d, f9 as Kd, l as Yd, fa as qd, dk as To, c2 as sr, fb as Xd, dQ as Zd, fc as $i, bU as Ja, bS as Qa, fd as Jd, bV as oa, fe as us, ff as Qd, fg as ef, d_ as eo, d$ as tf, dl as Zl, fh as qo, dG as Ki, dt as rf, du as nf, fi as sf, fj as Xo, fk as Zo, fl as af, cZ as of, c_ as cf, fm as lf, e0 as mr, fn as uf, dX as Gt, dU as Ke, a5 as df, fo as ff, fp as Kt, L as mf, a6 as hf, dV as dr, d5 as ys, d6 as ws, d7 as Ss, d8 as ks, fq as pf, fr as Jl, fs as Ql, d9 as Kn, ft as gf, al as xf, fu as ma, cv as bf, fv as vf, am as yf, fw as wf, fx as Sf, fy as kf, fz as Cf, dr as Mf, fA as Rf, d1 as Pf, cA as eu, fB as tu, fC as If, fD as ds, dN as Tf, dc as ru, dT as Ef, fE as Ff, dW as Yn, M as jf, dx as Nf, fF as Yi, bK as nu, fG as qi, fH as Af, fI as Df, fJ as Of, u as _f, cD as Xi, cE as Zi, fK as Lf, fL as Bf, fM as Hf, c6 as Uf, fN as Gf, fO as Vf, fP as Ji, fQ as Wf, fR as su, c4 as zf, fS as au, fT as $f, fU as Kf } from "./feature-editing-core-BWRx0hG-.js";
import { fV as ev } from "./feature-editing-core-BWRx0hG-.js";
import "./gif-processing-CfWcW1Gl.js";
import { c as ka, a as Yf } from "./core-logger-Dau_Juxv.js";
import { an as qf, ag as Eo, am as Cs, ao as Fo, ap as Qi, aq as ec, ar as Xf, as as Zf, at as Jf, au as Qf, av as em, aw as tm, al as rm, ax as nm, ay as Jo, af as ou, az as sm, aA as am, aB as om, aC as im, aD as cm, ah as iu, aE as lm, aF as um, aj as dm, aG as fm, aH as mm, aI as hm, aJ as pm, aK as gm, aL as xm, aM as bm, aN as vm, aO as ym, aP as wm, aQ as Sm, aR as km, aS as Cm, aT as Mm, aU as Rm, aV as Pm, aW as Im, aX as Tm, aY as Em, aZ as Fm, a_ as jm } from "./vendor-icons-Ce83X_M4.js";
import { u as pn } from "./state-vendor-Ctus6aXD.js";
import { E as to, u as Nm, a as Am } from "./feature-effects-DET5ggOo.js";
import { ae as cu, af as lu, ag as uu, ah as du, ai as Dm } from "./vendor-ui-KmnPcjbe.js";
const Om = {
  top: "translate(-50%, -100%)",
  bottom: "translate(-50%, 0)",
  left: "translate(-100%, -50%)",
  right: "translate(0, -50%)"
}, _m = {
  top: "bottom center",
  bottom: "top center",
  left: "right center",
  right: "left center"
}, Lm = {
  top: "slide-in-from-bottom-2",
  bottom: "slide-in-from-top-2",
  left: "slide-in-from-right-2",
  right: "slide-in-from-left-2"
};
function Bm() {
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
        transform: Om[e.side],
        zIndex: 50,
        pointerEvents: "none"
      },
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          role: "tooltip",
          className: `overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 ${Lm[e.side]}`,
          style: { transformOrigin: _m[e.side] },
          children: e.text
        }
      )
    }
  ) : null;
}
const Hm = ({ ...e }) => /* @__PURE__ */ r.jsx(
  pd,
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
), fu = [
  { label: "24 fps (Film)", value: 24 },
  { label: "25 fps (PAL)", value: 25 },
  { label: "30 fps (Standard)", value: 30 },
  { label: "50 fps (PAL High)", value: 50 },
  { label: "60 fps (Smooth)", value: 60 }
], Um = [
  { label: "120 fps (Legacy)", value: 120 },
  { label: "240 fps (Legacy)", value: 240 }
];
[
  ...fu.map((e) => e.value),
  ...Um.map((e) => e.value)
];
[
  ...fu.map((e) => e.value)
];
function tc(e) {
  return Math.max(0, Math.min(1, e));
}
function ro(e, t) {
  const s = Math.cos(e * Math.PI / 2);
  return t ? s * s : 1 - s * s;
}
const Gm = {
  gpuTransitionId: "fade",
  calculateStyles(e, t) {
    const s = tc(e);
    return {
      opacity: ro(s, t)
    };
  },
  renderCanvas(e, t, s, a) {
    const o = tc(a), i = ro(o, !0), c = ro(o, !1);
    e.save(), e.globalCompositeOperation = "copy", e.globalAlpha = c, e.drawImage(s, 0, 0), e.globalCompositeOperation = "lighter", e.globalAlpha = i, e.drawImage(t, 0, 0), e.restore();
  }
}, Vm = {
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
function Wm(e) {
  e.register("fade", Vm, Gm);
}
const zm = ["from-left", "from-right", "from-top", "from-bottom"], $m = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function jo(e) {
  return Math.max(0, Math.min(1, e));
}
function Km(e, t, s) {
  const a = jo(e), o = 1 - a;
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
const Ym = {
  gpuTransitionId: "wipe",
  calculateStyles(e, t, s, a, o) {
    const i = jo(e), l = Km(i, o || "from-left", t);
    return {
      clipPath: l,
      webkitClipPath: l,
      opacity: 1
    };
  },
  renderCanvas(e, t, s, a, o, i) {
    const c = jo(a), l = o || "from-left", u = i?.width ?? t.width, d = i?.height ?? t.height, f = new Path2D(), m = new Path2D();
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
}, qm = {
  id: "wipe",
  label: "Wipe",
  description: "Wipe reveal from one direction",
  category: "wipe",
  icon: "ArrowRight",
  hasDirection: !0,
  directions: zm,
  supportedTimings: [...$m],
  defaultDuration: 30,
  minDuration: 5,
  maxDuration: 90
};
function Xm(e) {
  e.register("wipe", qm, Ym);
}
const Zm = ["from-left", "from-right", "from-top", "from-bottom"], Jm = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function rc(e, t, s, a, o) {
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
const Qm = {
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
    const c = o || "from-left", l = i?.width ?? t.width, u = i?.height ?? t.height, d = rc(a, c, !1, l, u);
    e.drawImage(s, d.x, d.y);
    const f = rc(a, c, !0, l, u);
    e.drawImage(t, f.x, f.y);
  }
}, eh = {
  id: "slide",
  label: "Slide",
  description: "Slide in from a direction",
  category: "slide",
  icon: "MoveRight",
  hasDirection: !0,
  directions: Zm,
  supportedTimings: [...Jm],
  defaultDuration: 30,
  minDuration: 5,
  maxDuration: 90
};
function th(e) {
  e.register("slide", eh, Qm);
}
const rh = ["from-left", "from-right", "from-top", "from-bottom"], nh = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"], sh = {
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
}, ah = {
  id: "flip",
  label: "Flip",
  description: "3D flip transition",
  category: "flip",
  icon: "FlipHorizontal",
  hasDirection: !0,
  directions: rh,
  supportedTimings: [...nh],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 60
};
function oh(e) {
  e.register("flip", ah, sh);
}
const mu = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function ha(e) {
  return Math.max(0, Math.min(1, e));
}
function hu(e, t, s) {
  const a = e?.[t];
  return typeof a != "number" || !Number.isFinite(a) ? s : a;
}
function nc(e, t) {
  return Math.sqrt(Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) * 1.2;
}
const ih = {
  gpuTransitionId: "clockWipe",
  calculateStyles(e, t, s, a, o, i) {
    const c = ha(e), l = Math.max(0, hu(i, "edgeSoftness", 8));
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
    const c = ha(a), l = i?.width ?? t.width, u = i?.height ?? t.height, d = l / 2, f = u / 2, m = Math.sqrt(l * l + u * u), b = -Math.PI / 2, h = c * Math.PI * 2, x = b + h;
    e.save(), e.globalAlpha = 0.85 + 0.15 * c, e.drawImage(s, 0, 0, l, u), e.restore(), e.save();
    const v = new Path2D();
    v.moveTo(d, f), v.arc(d, f, m, x, b + Math.PI * 2, !1), v.closePath(), e.clip(v), e.globalAlpha = 1 - 0.1 * c, e.drawImage(t, 0, 0, l, u), e.restore();
  }
}, ch = {
  id: "clockWipe",
  label: "Clock Wipe",
  description: "Circular wipe like a clock hand",
  category: "mask",
  icon: "Clock",
  hasDirection: !1,
  supportedTimings: [...mu],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 90
}, lh = {
  gpuTransitionId: "iris",
  calculateStyles(e, t, s, a, o, i) {
    const c = ha(e), l = Math.max(0, hu(i, "edgeSoftness", 6));
    if (t) {
      const u = nc(s, a), d = c * u, f = Math.max(0, d - l), m = d + l, b = `radial-gradient(circle at center, transparent ${f}px, rgba(0,0,0,0.85) ${d}px, black ${m}px)`;
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
    const c = ha(a), l = i?.width ?? t.width, u = i?.height ?? t.height, d = nc(l, u), f = c * d, m = l / 2, b = u / 2;
    e.save(), e.globalAlpha = 0.85 + 0.15 * c, e.drawImage(s, 0, 0, l, u), e.restore(), e.save();
    const h = new Path2D();
    h.rect(0, 0, l, u), h.arc(m, b, f, 0, Math.PI * 2), e.clip(h, "evenodd"), e.globalAlpha = 1 - 0.1 * c, e.drawImage(t, 0, 0, l, u), e.restore();
  }
}, uh = {
  id: "iris",
  label: "Iris",
  description: "Circular iris expanding/contracting",
  category: "mask",
  icon: "Circle",
  hasDirection: !1,
  supportedTimings: [...mu],
  defaultDuration: 30,
  minDuration: 10,
  maxDuration: 90
};
function dh(e) {
  e.register("clockWipe", ch, ih), e.register("iris", uh, lh);
}
const In = ["linear", "spring", "ease-in", "ease-out", "ease-in-out", "cubic-bezier"];
function ar(e) {
  return Math.max(0, Math.min(1, e));
}
function $n(e, t, s) {
  const a = Math.max(t - e, Number.EPSILON), o = ar((s - e) / a);
  return o * o * (3 - 2 * o);
}
function qs(e, t, s) {
  const a = e?.[t];
  return typeof a != "number" || !Number.isFinite(a) ? s : a;
}
function Mr(e) {
  const t = Math.sin(e * 12.9898 + 78.233) * 43758.5453123;
  return t - Math.floor(t);
}
function vr(e, t) {
  return t ? Math.cos(e * Math.PI / 2) : Math.sin(e * Math.PI / 2);
}
function fh(e, t, s, a, o, i) {
  e.beginPath();
  for (let c = 0; c < 8; c += 1) {
    const l = i + Math.PI / 4 * c, u = c % 2 === 0 ? a : o, d = t + Math.cos(l) * u, f = s + Math.sin(l) * u;
    c === 0 ? e.moveTo(d, f) : e.lineTo(d, f);
  }
  e.closePath();
}
function no(e, t, s, a, o, i, c = 1, l = 1) {
  e.save(), e.translate(t, s), e.rotate(i), e.scale(c, l), fh(e, 0, 0, a, o, 0), e.fill(), e.restore();
}
function mh(e, t, s, a, o, i) {
  const c = ar(a), l = o?.width ?? t.width, u = o?.height ?? t.height, d = Math.max(0.55, qs(i, "sparkleScale", 1)), f = Math.max(0.35, qs(i, "intensity", 1)), m = Math.max(0.5, qs(i, "density", 1)), b = Math.max(0, qs(i, "glow", 1)), h = 1 - $n(0.74, 1, c);
  e.save(), e.drawImage(s, 0, 0, l, u), e.restore();
  const x = new OffscreenCanvas(l, u), v = x.getContext("2d");
  if (!v) {
    e.save(), e.globalAlpha = vr(c, !0), e.drawImage(t, 0, 0, l, u), e.restore();
    return;
  }
  v.clearRect(0, 0, l, u), v.save(), v.drawImage(t, 0, 0, l, u), v.restore();
  const S = Math.round(24 + m * 22), y = [];
  for (let w = 0; w < S; w += 1) {
    const k = w + 1, R = Math.min(
      0.94,
      0.04 + Mr(k * 31.7) * 0.72 + Mr(k * 7.9) * 0.16
    ), O = 0.14 + Mr(k * 41.9) * 0.18, L = ar((c - R) / O), I = $n(0, 0.16, L), j = 1 - $n(0.3, 0.95, L), P = I * j, T = $n(0.06, 0.72, L);
    if (P <= 0.01 && T <= 0.02) continue;
    const F = L * (3.6 + Mr(k * 5.3) * 3.8) + Mr(k * 11.1), E = 0.35 + 0.65 * ((Math.sin(F * Math.PI * 2) + 1) / 2), N = Math.min(1, P * E * f), z = Math.min(1, T * (0.25 + E * 0.35) * f), M = Mr(k * 13.1) * l, q = Mr(k * 17.9) * u, V = Math.pow(Mr(k * 19.7), 0.55), X = (4 + V * 34) * d * (0.55 + P * 1.15), D = Mr(k * 23.3) * Math.PI * 2, W = Math.cos(D), Y = Math.sin(D), pe = (10 + V * 28) * P, C = (3 + V * 10) * P, B = D + L * (2.4 + Mr(k * 29.1) * 4.5) * Math.PI, U = M + W * pe + Math.cos(B) * C, J = q + Y * pe + Math.sin(B) * C * 0.8, re = D + L * (2 + V * 3.5) * Math.PI;
    v.save(), v.globalCompositeOperation = "destination-out", v.globalAlpha = N, v.fillStyle = "rgba(0, 0, 0, 1)", no(v, U, J, X, X * 0.24, re), v.globalAlpha = N * 0.46, no(
      v,
      U - W * X * 0.9,
      J - Y * X * 0.9,
      X * 0.78,
      X * 0.14,
      re - 0.45,
      1.9,
      0.58
    ), v.globalAlpha = N * 0.22, no(
      v,
      U - W * X * 1.55,
      J - Y * X * 1.55,
      X * 0.52,
      X * 0.12,
      re - 0.7,
      2.4,
      0.42
    );
    const me = 3 + Math.round(V * 2);
    v.globalAlpha = z * 0.08;
    for (let xe = 0; xe < me; xe += 1) {
      const ye = k * 53.1 + xe * 7.3, Re = Mr(ye) * Math.PI * 2, Be = X * (1.3 + Mr(ye * 1.7) * 2.1) * (0.5 + T), Fe = X * (0.14 + Mr(ye * 2.9) * 0.24) * (0.55 + T);
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
      alpha: Math.min(1, N + z * 0.45),
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
const hh = {
  gpuTransitionId: "dissolve",
  calculateStyles(e, t) {
    return { opacity: vr(ar(e), t) };
  },
  renderCanvas(e, t, s, a) {
    const o = ar(a);
    e.save(), e.globalAlpha = vr(o, !1), e.drawImage(s, 0, 0), e.restore(), e.save(), e.globalAlpha = vr(o, !0), e.drawImage(t, 0, 0), e.restore();
  }
}, ph = {
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
}, gh = {
  gpuTransitionId: "sparkles",
  calculateStyles(e, t) {
    const s = ar(e), a = Math.sin(s * Math.PI), o = t ? 0.2 : 1.05, i = 14 * a, c = Math.sin(s * Math.PI * 2.2 + o) * i * 0.55, l = Math.cos(s * Math.PI * 1.6 + o) * i * 0.28, u = Math.sin(s * Math.PI * 1.8 + o) * a * 1.6, d = t ? 1 - 0.03 * s : 1.03 - 0.03 * s;
    return {
      opacity: t ? 1 - $n(0.2, 0.94, s) : $n(0.06, 0.8, s),
      transform: a > 0.08 ? `translate(${c}px, ${l}px) rotate(${u}deg) scale(${d})` : void 0
    };
  },
  renderCanvas(e, t, s, a, o, i, c) {
    mh(e, t, s, a, i, c);
  }
}, xh = {
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
}, bh = {
  gpuTransitionId: "glitch",
  calculateStyles(e, t) {
    const s = ar(e), a = Math.sin(s * Math.PI), o = Math.sin(s * 47) * a * 5, i = 0.5;
    return t ? {
      opacity: s < i ? 1 : 0,
      transform: a > 0.2 ? `translateX(${o}px)` : void 0
    } : {
      opacity: s >= i ? 1 : 0,
      transform: a > 0.2 ? `translateX(${-o}px)` : void 0
    };
  },
  renderCanvas(e, t, s, a) {
    ar(a) < 0.5 ? e.drawImage(t, 0, 0) : e.drawImage(s, 0, 0);
  }
}, vh = {
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
}, yh = {
  gpuTransitionId: "lightLeak",
  calculateStyles(e, t) {
    return { opacity: vr(ar(e), t) };
  },
  renderCanvas(e, t, s, a, o, i) {
    const c = ar(a), l = i?.width ?? t.width, u = i?.height ?? t.height, d = o || "from-left";
    e.save(), e.globalAlpha = vr(c, !1), e.drawImage(s, 0, 0, l, u), e.restore(), e.save(), e.globalAlpha = vr(c, !0), e.drawImage(t, 0, 0, l, u), e.restore();
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
}, wh = {
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
}, Sh = {
  gpuTransitionId: "pixelate",
  calculateStyles(e, t) {
    return { opacity: vr(ar(e), t) };
  },
  renderCanvas(e, t, s, a) {
    ar(a) < 0.5 ? e.drawImage(t, 0, 0) : e.drawImage(s, 0, 0);
  }
}, kh = {
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
}, Ch = {
  gpuTransitionId: "chromatic",
  calculateStyles(e, t) {
    return { opacity: vr(ar(e), t) };
  },
  renderCanvas(e, t, s, a, o, i) {
    const c = ar(a), l = i?.width ?? t.width, u = i?.height ?? t.height;
    e.save(), e.globalAlpha = vr(c, !1), e.drawImage(s, 0, 0, l, u), e.restore(), e.save(), e.globalAlpha = vr(c, !0), e.drawImage(t, 0, 0, l, u), e.restore();
  }
}, Mh = {
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
}, Rh = {
  gpuTransitionId: "radialBlur",
  calculateStyles(e, t) {
    const s = ar(e), a = Math.sin(s * Math.PI), o = 1 + a * 0.02;
    return {
      opacity: vr(s, t),
      transform: a > 0.1 ? `scale(${o})` : void 0
    };
  },
  renderCanvas(e, t, s, a) {
    const o = ar(a);
    e.save(), e.globalAlpha = vr(o, !1), e.drawImage(s, 0, 0), e.restore(), e.save(), e.globalAlpha = vr(o, !0), e.drawImage(t, 0, 0), e.restore();
  }
}, Ph = {
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
function Ih(e) {
  e.register("dissolve", ph, hh), e.register("sparkles", xh, gh), e.register("glitch", vh, bh), e.register("lightLeak", wh, yh), e.register("pixelate", kh, Sh), e.register("chromatic", Mh, Ch), e.register("radialBlur", Ph, Rh);
}
let sc = !1;
function Th() {
  sc || (sc = !0, Wm(Qr), Xm(Qr), th(Qr), oh(Qr), dh(Qr), Ih(Qr));
}
Th();
const Eh = {
  Blend: Jo,
  ArrowRight: nm,
  ArrowLeft: rm,
  ArrowDown: tm,
  ArrowUp: em,
  MoveRight: Qf,
  MoveLeft: Jf,
  MoveDown: Zf,
  MoveUp: Xf,
  FlipHorizontal: ec,
  FlipHorizontal2: ec,
  FlipVertical: Qi,
  FlipVertical2: Qi,
  Clock: Il,
  Circle: Fo,
  Sparkles: Cs,
  Zap: Eo,
  Sun: qf
}, pu = {
  basic: { title: "Basic" },
  wipe: { title: "Wipe" },
  slide: { title: "Slide" },
  flip: { title: "Flip" },
  mask: { title: "Mask" },
  light: { title: "Light" },
  chromatic: { title: "Chromatic" },
  custom: { title: "Custom" }
}, pa = [
  "basic",
  "wipe",
  "slide",
  "flip",
  "mask",
  "light",
  "chromatic",
  "custom"
], Fh = {
  "from-left": { label: "Left", icon: "ArrowRight" },
  "from-right": { label: "Right", icon: "ArrowLeft" },
  "from-top": { label: "Top", icon: "ArrowDown" },
  "from-bottom": { label: "Bottom", icon: "ArrowUp" }
};
function jh(e) {
  return e.hasDirection && e.directions && e.directions.length > 0 ? e.directions.map((t) => {
    const s = Fh[t] || { label: t, icon: e.icon };
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
function Nh() {
  const e = /* @__PURE__ */ new Map(), t = [], s = new Set(pa);
  for (const a of Qr.getDefinitions()) {
    const o = jh(a);
    if (!s.has(a.category)) {
      t.push(...o);
      continue;
    }
    const i = e.get(a.category) ?? [];
    i.push(...o), e.set(a.category, i);
  }
  return [
    ...pa.flatMap((a) => e.get(a) ?? []),
    ...t
  ];
}
let ia = null, Gn = null, No = null;
function Qo() {
  if (ia) return;
  ia = Nh(), Gn = {}, No = {};
  for (const t of ia)
    Gn[t.category] || (Gn[t.category] = []), Gn[t.category].push(t);
  let e = 0;
  for (const t of pa)
    No[t] = e, e += Gn[t]?.length || 0;
}
function ac() {
  return Qo(), ia;
}
function gu() {
  return Qo(), Gn;
}
function Ah() {
  return Qo(), No;
}
const Dh = n.memo(function({
  config: t,
  configIndex: s,
  onApply: a,
  clickDisabled: o,
  onDragStart: i,
  onDragEnd: c
}) {
  const l = Eh[t.icon] ?? Jo, u = n.useCallback(() => {
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
}), Oh = n.memo(function({
  category: t,
  configs: s,
  startIndex: a,
  onApply: o,
  clickDisabled: i,
  onDragStart: c,
  onDragEnd: l
}) {
  const u = pu[t] || { title: t };
  return s.length === 0 ? null : /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ r.jsx("div", { className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider", children: u.title }),
    /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-4 gap-1.5", children: s.map((d, f) => /* @__PURE__ */ r.jsx(
      Dh,
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
}), _h = n.memo(function() {
  const t = ke((S) => S.addTransition), s = ke((S) => S.updateTransition), a = ke((S) => S.items), o = ke((S) => S.transitions), i = It((S) => S.selectedItemIds), c = i.length, l = c === 1 ? i[0] : null, u = n.useMemo(() => l ? Hi({ selectedItemIds: [l], items: a, transitions: o }) : null, [l, a, o]), d = $a((S) => S.setDraggedTransition), f = $a((S) => S.setInvalidHint), m = $a((S) => S.clearDrag), b = n.useCallback((S, y) => {
    const w = ac()[y];
    if (!w) return;
    const k = {
      presentation: w.id,
      direction: w.direction
    };
    S.dataTransfer.effectAllowed = "copy", S.dataTransfer.setData(ld, JSON.stringify(k)), d(k), f(null);
  }, [d, f]), h = n.useCallback(() => {
    m();
  }, [m]), x = n.useCallback(
    (S) => {
      const y = ac()[S];
      if (!y) return;
      const { items: w, transitions: k } = ke.getState(), R = It.getState().selectedItemIds, O = Hi({
        selectedItemIds: R,
        items: w,
        transitions: k
      });
      if (!O || !O.hasExisting && !O.canApply) return;
      const { leftClipId: L, rightClipId: I, hasExisting: j, existingTransitionId: P } = O, T = y.id, F = y.direction;
      j && P ? s(P, { presentation: T, direction: F }) : t(
        L,
        I,
        "crossfade",
        O.suggestedDurationInFrames,
        T,
        F
      );
    },
    [t, s]
  ), v = !!u && (u.hasExisting || u.canApply);
  return /* @__PURE__ */ r.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ r.jsx("div", { className: "px-3 py-2 border-b border-border bg-secondary/30", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-2 text-xs", children: [
      /* @__PURE__ */ r.jsx(gd, { className: "w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5" }),
      /* @__PURE__ */ r.jsx("div", { className: "text-muted-foreground leading-relaxed", children: v ? /* @__PURE__ */ r.jsx("span", { className: "text-primary", children: "Click to apply to the selected cut, or drag a transition onto any valid cut in the timeline." }) : u?.reason ? /* @__PURE__ */ r.jsxs("span", { children: [
        "Drag a transition onto a valid cut. Click-to-apply is unavailable here: ",
        u.reason,
        "."
      ] }) : c === 1 ? /* @__PURE__ */ r.jsx("span", { children: "Drag a transition onto a valid cut, or place clips next to each other and select one clip to click-apply." }) : c > 1 ? /* @__PURE__ */ r.jsx("span", { children: "Drag a transition onto a valid cut, or select a single video or image clip to click-apply." }) : /* @__PURE__ */ r.jsx("span", { children: "Drag a transition onto a valid cut, or select a video or image clip to add a transition to its neighbor." }) })
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-4", children: pa.map((S) => {
      const y = gu()[S];
      return !y || y.length === 0 ? null : /* @__PURE__ */ r.jsx(
        Oh,
        {
          category: S,
          configs: y,
          startIndex: Ah()[S],
          onApply: x,
          clickDisabled: !v,
          onDragStart: b,
          onDragEnd: h
        },
        S
      );
    }) })
  ] });
}), Lh = ka("PlayerEmitter");
class Bh {
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
        Lh.error(`Error in event listener for ${t}:`, i);
      }
  }
}
const xu = n.createContext(void 0);
function bu() {
  const e = n.useContext(xu);
  if (!e)
    throw new Error("usePlayerEmitter must be used within a Player component");
  return e;
}
const Ca = ({ children: e, emitter: t }) => {
  const s = n.useMemo(() => t ?? new Bh(), [t]);
  return /* @__PURE__ */ r.jsx(xu.Provider, { value: s, children: e });
};
function vu(e, t = {}) {
  const { loop: s = !1, onEnded: a } = t, { playing: o, imperativePlaying: i, playbackRate: c } = Po(), { setPlaying: l } = xd(), u = bd(), d = bu(), [f, m] = n.useState(!1), b = n.useRef(0), h = n.useRef(0), x = n.useRef(!1), v = vd(e), S = yd(), y = Po().frame;
  h.current = y;
  const w = n.useCallback(
    (M) => {
      let q = Math.max(S, Math.min(M, v));
      q < S && (q = S), q > v && (q = v), h.current = q, u(q), d.dispatchSeek(q);
    },
    [S, v, u, d]
  ), k = n.useCallback(() => {
    i.current || (m(!0), h.current >= v && w(S), i.current = !0, l(!0), d.dispatchPlay());
  }, [i, v, S, l, d, w]), R = n.useCallback(() => {
    i.current && (i.current = !1, l(!1), d.dispatchPause());
  }, [i, l, d]), O = n.useCallback(() => {
    i.current && (i.current = !1, h.current = b.current, u(b.current), l(!1), d.dispatchPause());
  }, [i, u, l, d]), L = n.useCallback(() => {
    i.current ? R() : k();
  }, [i, R, k]), I = n.useCallback(() => i.current, [i]), j = n.useCallback(() => h.current, []), P = n.useCallback(() => c, [c]), T = n.useCallback(
    (M) => {
      d.dispatchRateChange(M);
    },
    [d]
  ), F = n.useCallback(() => x.current, []), E = n.useCallback(
    (M) => {
      if (i.current)
        return;
      const q = h.current, V = Math.max(S, q - M);
      q !== V && w(V);
    },
    [i, S, w]
  ), N = n.useCallback(
    (M) => {
      if (i.current)
        return;
      const q = h.current, V = Math.min(v, q + M);
      q !== V && w(V);
    },
    [i, v, w]
  );
  return n.useMemo(() => ({
    frameBack: E,
    frameForward: N,
    isLastFrame: h.current === v,
    isFirstFrame: h.current === S,
    emitter: d,
    playing: o,
    play: k,
    pause: R,
    pauseAndReturnToPlayStart: O,
    seek: w,
    getCurrentFrame: j,
    isPlaying: I,
    hasPlayed: f,
    isBuffering: F,
    toggle: L,
    setPlaybackRate: T,
    getPlaybackRate: P
  }), [
    E,
    N,
    v,
    S,
    d,
    o,
    k,
    R,
    O,
    w,
    j,
    I,
    f,
    F,
    L,
    T,
    P
  ]);
}
const Hh = ({ isPlaying: e, onToggle: t }) => /* @__PURE__ */ r.jsx(
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
), Uh = ({ currentFrame: e, durationInFrames: t, seek: s }) => {
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
}, Gh = ({
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
      Uh,
      {
        currentFrame: t,
        durationInFrames: s,
        seek: l
      }
    ) }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx(
          Hh,
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
}, Vh = n.forwardRef(
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
  }, S) => {
    const [y, w] = n.useState(!1), k = n.useRef(null), R = n.useRef(null), O = n.useRef(null), L = n.useCallback(() => {
      const z = k.current, M = R.current, q = O.current;
      if (!z || !M || !q) return;
      const V = z.clientWidth, X = z.clientHeight, D = V > 0 && X > 0 ? Math.min(V / m, X / b) : 1, W = m * D, Y = b * D;
      M.style.width = `${W}px`, M.style.height = `${Y}px`, M.style.marginLeft = `${-W / 2}px`, M.style.marginTop = `${-Y / 2}px`, q.style.width = `${m}px`, q.style.height = `${b}px`, q.style.transform = `scale(${D})`;
    }, [b, m]);
    n.useEffect(() => {
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
    const I = vu(t, { loop: o, onEnded: h }), {
      frame: j,
      playing: P,
      playbackRate: T,
      setPlaybackRate: F
    } = Po(), E = bu();
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
      k.current && (document.fullscreenElement ? await document.exitFullscreen() : await k.current.requestFullscreen());
    }, []);
    return n.useEffect(() => {
      const z = () => {
        w(!!document.fullscreenElement);
      };
      return document.addEventListener("fullscreenchange", z), () => {
        document.removeEventListener("fullscreenchange", z);
      };
    }, []), n.useImperativeHandle(
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
          i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "absolute inset-0 cursor-pointer",
                onClick: () => I.toggle()
              }
            ),
            /* @__PURE__ */ r.jsx(
              Gh,
              {
                isPlaying: P,
                currentFrame: j,
                durationInFrames: t,
                fps: s,
                playbackRate: T,
                isFullscreen: y,
                onTogglePlay: I.toggle,
                onSeek: I.seek,
                onPlaybackRateChange: F,
                onToggleFullscreen: N
              }
            )
          ] })
        ]
      }
    );
  }
), yu = n.forwardRef(
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
    return /* @__PURE__ */ r.jsx(Ca, { children: /* @__PURE__ */ r.jsx(
      xa,
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
          ba,
          {
            fps: a,
            width: e.width ?? 1280,
            height: e.height ?? 720,
            durationInFrames: s,
            children: /* @__PURE__ */ r.jsx(Vh, { ...e, ref: t })
          }
        )
      }
    ) });
  }
);
yu.displayName = "Player";
function Wh(e, t) {
  const s = ke((h) => h.keyframes), a = n.useMemo(
    () => s.find((h) => h.itemId === e.id),
    [s, e.id]
  ), o = ne((h) => h.currentFrame), i = ne((h) => h.previewFrame), c = ne((h) => h.displayedFrame), l = ne((h) => h.isPlaying), u = ne((h) => h.currentFrameEpoch), d = ne((h) => h.previewFrameEpoch), m = Wn({
    currentFrame: o,
    previewFrame: i,
    displayedFrame: c,
    isPlaying: l,
    currentFrameEpoch: u,
    previewFrameEpoch: d
  }) - e.from;
  return {
    transform: n.useMemo(() => {
      const h = Tr(e), x = Kr(
        e,
        { width: t.width, height: t.height },
        h
      );
      return a ? va(x, a, m) : x;
    }, [e, t, a, m]),
    hasKeyframes: !!a,
    relativeFrame: m
  };
}
function zh(e, t, s, a, o) {
  if (a < 0 || a >= o)
    return { handled: !1 };
  const c = t?.properties.find((l) => l.property === s)?.keyframes.find((l) => l.frame === a);
  return c ? { handled: !0, action: "update", existingKeyframeId: c.id } : wd(e, s) ? { handled: !0, action: "add" } : { handled: !1 };
}
function Xn(e, t, s, a, o) {
  const i = o - e.from, c = zh(
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
const $h = ["x", "y", "width", "height", "rotation"];
function wu(e, t) {
  const s = n.useEffectEvent((a) => {
    a.key === "Escape" && t();
  });
  n.useEffect(() => {
    if (e)
      return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [e]);
}
const Kh = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
function Su({
  bounds: e,
  rotation: t,
  isInteracting: s,
  isMask: a = !1,
  onTranslateStart: o,
  onScaleStart: i,
  onRotateStart: c
}) {
  const l = (d) => {
    const f = Ya / 2, { width: m, height: b } = e, h = {
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
      width: Ya,
      height: Ya,
      ...h[d],
      cursor: Vo(d, t)
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
    Kh.map((d) => {
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
          top: -Ka,
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
          top: -Ka + 10,
          height: Ka - 10
        }
      }
    )
  ] });
}
function ku(e, t, s) {
  return Sd(e, t, s);
}
function Cu(e, t, s, a) {
  if (e.type !== "video" && e.type !== "image") return null;
  const o = Tr(e);
  return !o || !Number.isFinite(t) || !Number.isFinite(s) || t <= 0 || s <= 0 ? null : kd(
    o.width,
    o.height,
    t,
    s,
    a
  ).viewportRect;
}
function Yh({
  item: e,
  coordParams: t,
  onTransformStart: s,
  onTransformEnd: a,
  isPlaying: o = !1
}) {
  const i = Xe((N) => N.activeGizmo), c = Xe((N) => N.previewTransform), l = Xe(
    n.useCallback((N) => N.preview?.[e.id], [e.id])
  ), u = Xe((N) => N.startTranslate), d = Xe((N) => N.startScale), f = Xe((N) => N.startRotate), m = Xe((N) => N.updateInteraction), b = Xe((N) => N.endInteraction), h = Xe((N) => N.clearInteraction), x = Xe((N) => N.cancelInteraction), v = i?.itemId === e.id, { transform: S } = Wh(e, t.projectSize), y = n.useMemo(() => {
    if (v && c)
      return c;
    let N = {
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
        ...N,
        cornerRadius: N.cornerRadius ?? 0
      };
      N = ku(
        e,
        M,
        l?.properties
      );
    }
    const z = l?.transform;
    return z ? { ...N, ...z } : N;
  }, [S, v, c, e, l]), w = n.useMemo(() => {
    const N = l?.properties?.crop ?? ("crop" in e ? e.crop : void 0);
    return Cu(
      e,
      y.width,
      y.height,
      N
    );
  }, [e, l, y.width, y.height]), R = n.useMemo(() => {
    const N = ya(y, t);
    if (e.type === "shape") {
      const M = l?.properties?.strokeWidth ?? e.strokeWidth ?? 0;
      if (M > 0) {
        const q = t.playerSize.width / t.projectSize.width, V = M * q;
        N.left -= V / 2, N.top -= V / 2, N.width += V, N.height += V;
      }
    }
    return N;
  }, [y, t, e, l]), O = n.useMemo(() => {
    if (!w) return null;
    const N = Mn(t);
    return {
      left: w.x * N,
      top: w.y * N,
      width: w.width * N,
      height: w.height * N
    };
  }, [w, t]), L = n.useCallback(
    (N) => Or(N.clientX, N.clientY, t),
    [t]
  ), I = n.useCallback((N, z) => Math.abs(N.x - z.x) > 0.01 || Math.abs(N.y - z.y) > 0.01 || Math.abs(N.width - z.width) > 0.01 || Math.abs(N.height - z.height) > 0.01 || Math.abs(N.rotation - z.rotation) > 0.01, []), j = e.type === "shape" ? e.strokeWidth ?? 0 : 0, P = n.useCallback(
    (N) => {
      N.stopPropagation(), N.preventDefault();
      const z = L(N), M = { ...y };
      u(e.id, z, y, j, w ?? void 0), s(), document.body.style.cursor = "move";
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
    [e.id, y, L, u, m, b, h, s, a, I, j, w]
  ), T = n.useCallback(
    (N, z) => {
      z.stopPropagation(), z.preventDefault();
      const M = L(z), q = { ...y };
      d(e.id, N, M, y, e.type, e.transform?.aspectRatioLocked, j, w ?? void 0), s(), document.body.style.cursor = Vo(N, y.rotation);
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
    [e.id, y, L, d, m, b, h, s, a, I, j, w]
  ), F = n.useCallback(
    (N) => {
      N.stopPropagation(), N.preventDefault();
      const z = L(N), M = { ...y };
      f(e.id, z, y, j), s(), document.body.style.cursor = "crosshair";
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
    [e.id, y, L, f, m, b, h, s, a, I, j, w]
  );
  wu(
    v,
    n.useCallback(() => {
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
            Su,
            {
              bounds: E,
              rotation: y.rotation,
              isInteracting: v,
              isMask: e.type === "shape" && e.isMask,
              onTranslateStart: P,
              onScaleStart: T,
              onRotateStart: F
            }
          )
        }
      )
    }
  );
}
function so(e, t, s) {
  return e.type !== "text" ? t : ku(e, t, s?.[e.id]?.properties);
}
function ei(e, t) {
  const s = Wo((v) => v.fps), a = n.useMemo(() => e.map((v) => v.id), [e]), o = mn(
    pn(
      n.useCallback(
        (v) => a.map((S) => v.keyframesByItemId[S] ?? null),
        [a]
      )
    )
  ), i = ne((v) => v.currentFrame), c = ne((v) => v.previewFrame), l = ne((v) => v.displayedFrame), u = ne((v) => v.isPlaying), d = ne((v) => v.currentFrameEpoch), f = ne((v) => v.previewFrameEpoch), m = Xe((v) => v.activeGizmo), b = Xe((v) => v.previewTransform), h = Xe((v) => v.preview), x = Wn({
    currentFrame: i,
    previewFrame: c,
    displayedFrame: l,
    isPlaying: u,
    currentFrameEpoch: d,
    previewFrameEpoch: f
  });
  return n.useMemo(() => {
    const v = /* @__PURE__ */ new Map(), S = { width: t.width, height: t.height };
    for (const [y, w] of e.entries()) {
      const k = o[y] ?? void 0, R = Cd(w, {
        canvas: S,
        frame: x,
        keyframes: k
      });
      if (m?.itemId === w.id && b) {
        let L = Ui(R, b);
        L = so(w, L, h), v.set(w.id, L);
        continue;
      }
      const O = h?.[w.id]?.transform;
      if (O) {
        let L = Ui(R, O);
        L = so(w, L, h), v.set(w.id, L);
        continue;
      }
      v.set(w.id, so(w, R, h));
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
const Xs = 20;
function Mu(e, t, s) {
  let a = 1 / 0, o = 1 / 0, i = -1 / 0, c = -1 / 0;
  for (const l of e.values()) {
    const u = Tl(l, t, s), d = l.width / 2, f = l.height / 2;
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
      const h = El(b, u, l.rotation);
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
function ao(e, t, s, a) {
  const o = Mu(t, s, a), i = {
    x: (o.left + o.right) / 2,
    y: (o.top + o.bottom) / 2
  }, c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  for (const [u, d] of t) {
    const f = Tl(d, s, a);
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
function qh(e, t, s) {
  const a = /* @__PURE__ */ new Map();
  for (const [o, i] of e.itemTransforms)
    a.set(o, {
      ...i,
      x: i.x + t,
      y: i.y + s
    });
  return a;
}
function Xh(e, t, s, a, o, i = !0) {
  const c = /* @__PURE__ */ new Map(), { groupCenter: l, itemOffsets: u, itemTransforms: d } = e, f = i ? Math.max(t, s) : 1, m = i ? f : t, b = i ? f : s, h = Xs / Math.max(...Array.from(d.values()).map((y) => y.width)), x = Xs / Math.max(...Array.from(d.values()).map((y) => y.height)), v = Math.max(h, m), S = Math.max(x, b);
  for (const [y, w] of d) {
    const k = u.get(y), R = k.x * v, O = k.y * S, L = l.x + R, I = l.y + O;
    c.set(y, {
      ...w,
      x: L - a / 2,
      y: I - o / 2,
      width: Math.max(Xs, w.width * v),
      height: Math.max(Xs, w.height * S)
    });
  }
  return c;
}
function Zh(e, t, s, a) {
  const o = /* @__PURE__ */ new Map(), { groupCenter: i, itemOffsets: c, itemTransforms: l, itemRotations: u } = e;
  for (const [d, f] of l) {
    const m = c.get(d), b = u.get(d), h = {
      x: i.x + m.x,
      y: i.y + m.y
    }, x = El(h, i, t), v = x.x - s / 2, S = x.y - a / 2;
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
function Jh(e, t, s) {
  const { groupCenter: a } = e, o = Math.sqrt(
    Math.pow(t.x - a.x, 2) + Math.pow(t.y - a.y, 2)
  ), i = Math.sqrt(
    Math.pow(s.x - a.x, 2) + Math.pow(s.y - a.y, 2)
  );
  return o > 0 ? i / o : 1;
}
function Qh(e, t, s) {
  const { groupCenter: a } = e, o = Math.atan2(
    t.y - a.y,
    t.x - a.x
  ) * (180 / Math.PI);
  return Math.atan2(
    s.y - a.y,
    s.x - a.x
  ) * (180 / Math.PI) - o;
}
function ep({
  items: e,
  coordParams: t,
  onTransformStart: s,
  onTransformEnd: a,
  onItemClick: o,
  isPlaying: i = !1
}) {
  const [c, l] = n.useState("idle"), u = n.useRef(null), d = n.useRef(null), f = n.useRef(/* @__PURE__ */ new Map()), m = n.useRef(null), b = Xe((M) => M.setPreview), h = Xe((M) => M.clearPreview), { projectSize: x } = t, v = Mn(t), S = ei(e, x), y = n.useMemo(() => {
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
  }, [S]), w = n.useCallback((M) => {
    const q = {};
    for (const [V, X] of M)
      q[V] = { transform: X };
    return q;
  }, []), k = n.useCallback((M) => {
    m.current = M, M ? b(w(M)) : h();
  }, [b, h, w]), R = y, O = n.useMemo(() => Mu(R, x.width, x.height), [R, x]), L = n.useMemo(() => {
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
  }, [O, v, e]), I = 0, j = n.useCallback(
    (M) => Or(M.clientX, M.clientY, t),
    [t]
  ), P = n.useCallback(
    (M, q) => {
      for (const [X, D] of M) {
        const W = q.get(X);
        if (!W || Math.abs(D.x - W.x) > 0.01 || Math.abs(D.y - W.y) > 0.01 || Math.abs(D.width - W.width) > 0.01 || Math.abs(D.height - W.height) > 0.01 || Math.abs(D.rotation - W.rotation) > 0.01)
          return !0;
      }
      return !1;
    },
    []
  ), T = n.useCallback(
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
  ), F = n.useCallback(
    (M) => {
      M.stopPropagation(), M.preventDefault();
      const q = j(M), V = ao(
        e.map((B) => B.id),
        y,
        x.width,
        x.height
      );
      u.current = V, d.current = q, f.current = new Map(y), l("translate"), s(), document.body.style.cursor = "move";
      let X = !1;
      const D = 5, W = M.clientX, Y = M.clientY, pe = (B) => {
        if (!X) {
          const xe = Math.abs(B.clientX - W), ye = Math.abs(B.clientY - Y);
          (xe > D || ye > D) && (X = !0);
        }
        const U = j(B), J = U.x - q.x, re = U.y - q.y, me = qh(V, J, re);
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
    [e, y, x, j, s, a, P, k, o, T]
  ), E = n.useCallback(
    (M, q) => {
      q.stopPropagation(), q.preventDefault();
      const V = j(q), X = ao(
        e.map((Y) => Y.id),
        y,
        x.width,
        x.height
      );
      u.current = X, d.current = V, f.current = new Map(y), l("scale"), s(), document.body.style.cursor = Vo(M, I);
      const D = (Y) => {
        const pe = j(Y), C = Jh(X, V, pe), B = !Y.shiftKey, U = Xh(
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
    [e, y, x, j, s, a, P, I, k]
  ), N = n.useCallback(
    (M) => {
      M.stopPropagation(), M.preventDefault();
      const q = j(M), V = ao(
        e.map((W) => W.id),
        y,
        x.width,
        x.height
      );
      u.current = V, d.current = q, f.current = new Map(y), l("rotate"), s(), document.body.style.cursor = "crosshair";
      const X = (W) => {
        const Y = j(W);
        let pe = Qh(V, q, Y);
        W.shiftKey && (pe = Math.round(pe / 15) * 15);
        const C = Zh(
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
    [e, y, x, j, s, a, P, k]
  );
  wu(
    c !== "idle",
    n.useCallback(() => {
      l("idle"), k(null), u.current = null, d.current = null, document.body.style.cursor = "";
    }, [k])
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
        Su,
        {
          bounds: L,
          rotation: I,
          isInteracting: z,
          onTranslateStart: F,
          onScaleStart: E,
          onRotateStart: N
        }
      )
    }
  );
}
function tp({
  item: e,
  transform: t,
  coordParams: s,
  isSelected: a = !1,
  onSelect: o,
  onDragStart: i
}) {
  const [c, l] = n.useState(!1), u = n.useMemo(() => {
    const m = ya(t, s);
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
function rp({ snapLines: e, coordParams: t }) {
  const s = n.useMemo(() => Mn(t), [t]);
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
function Cn(e) {
  return e === "video" || e === "image";
}
function oc(e) {
  if (!Number.isFinite(e) || e <= 0)
    return 0;
  const t = Math.round(e);
  return t % 2 === 0 ? t : t + 1;
}
function np(e) {
  const t = oc(e.width), s = oc(e.height);
  return t === 0 || s === 0 ? null : { width: t, height: s };
}
function sp(e) {
  return e === "match-both" || e === "size-only";
}
function ap(e, t, s) {
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
function oo(e) {
  const t = Nl();
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
      if (!Cn(o))
        return {
          allowed: !1,
          source: "library",
          title: "Audio Goes On Timeline",
          description: "Canvas drop places visual layers only."
        };
    }
    return t.type === "media-item" && !Cn(t.mediaType) ? {
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
function op({
  coordParams: e,
  projectSize: t
}) {
  const s = n.useRef(0), [a, o] = n.useState(null), i = n.useCallback(() => {
    s.current = 0, o(null);
  }, []), c = n.useCallback(async ({
    media: h,
    mediaType: x,
    label: v,
    clientX: S,
    clientY: y,
    placementProjectSize: w,
    preserveInitialPlacement: k = !1
  }) => {
    if (!e || !Cn(x))
      return;
    const R = w ?? t, O = ke.getState(), L = ne.getState(), I = It.getState(), j = Fl(h, x, O.fps), P = jl({
      tracks: O.tracks,
      items: O.items,
      activeTrackId: I.activeTrackId,
      proposedFrame: L.currentFrame,
      durationInFrames: j,
      itemType: x === "image" ? "image" : "video"
    });
    if (!P) {
      Xt.warning("No unlocked visible track is available for this drop.");
      return;
    }
    const T = await hn(h.id);
    if (!T) {
      Xt.error("Unable to load dropped media.");
      return;
    }
    const F = await zo.getThumbnailBlobUrl(h.id), E = Md({
      media: h,
      mediaId: h.id,
      mediaType: x,
      label: v,
      timelineFps: O.fps,
      blobUrl: T,
      thumbnailUrl: F,
      canvasWidth: R.width,
      canvasHeight: R.height,
      placement: {
        trackId: P.trackId,
        from: P.from,
        durationInFrames: j
      }
    }), N = k ? E : ap(
      E,
      Or(S, y, e),
      R
    );
    O.addItem(N), I.setActiveTrack(P.trackId), I.selectItems([N.id]);
  }, [e, t]), l = n.useCallback(async (h, x) => {
    if (!x.allowed) {
      Xt.warning(x.description);
      return;
    }
    const v = Nl();
    if (!v)
      return;
    let S, y, w;
    if (v.type === "media-item" && v.mediaId && v.mediaType && v.fileName) {
      if (!Cn(v.mediaType)) {
        Xt.warning("Canvas drop places visual layers only.");
        return;
      }
      S = v.mediaId, y = v.mediaType, w = v.fileName;
    } else if (v.type === "media-items" && v.items?.length === 1) {
      const R = v.items[0];
      if (!R || !Cn(R.mediaType)) {
        Xt.warning("Canvas drop places visual layers only.");
        return;
      }
      S = R.mediaId, y = R.mediaType, w = R.fileName;
    }
    if (!S || !y || !w)
      return;
    const k = Qt.getState().mediaById[S] ?? Qt.getState().mediaItems.find((R) => R.id === S);
    if (!k) {
      Xt.error("Dropped media is no longer available.");
      return;
    }
    await c({
      media: k,
      mediaType: y,
      label: w,
      clientX: h.clientX,
      clientY: h.clientY
    });
  }, [c]), u = n.useCallback(async (h, x) => {
    if (!x.allowed) {
      Xt.warning(x.description);
      return;
    }
    const { supported: v, entries: S, errors: y } = await Rd(
      h.dataTransfer
    );
    if (!v) {
      Xt.warning("Drag-drop not supported in this browser. Use Chrome or Edge.");
      return;
    }
    y.length > 0 && Xt.error(`Some files were rejected: ${y.join(", ")}`);
    const w = S[0];
    if (!w)
      return;
    if (!Cn(w.mediaType)) {
      Xt.warning("Drop audio on the timeline instead.");
      return;
    }
    const k = Qt.getState(), R = k.currentProjectId, O = k.mediaItems.some((E) => E.mimeType.startsWith("video/"));
    let L = null;
    if (w.mediaType === "video" && R && !O)
      try {
        const E = Pd(w.file), { metadata: N } = await Id.processMedia(w.file, E, {
          generateThumbnail: !1
        });
        if (N.type !== "video") {
          Xt.error("Unable to inspect dropped video.");
          return;
        }
        L = N;
      } catch (E) {
        Xt.error("Unable to inspect dropped file.", {
          description: E instanceof Error ? E.message : "Please try again."
        });
        return;
      }
    const j = (await Qt.getState().importHandlesForPlacement([w.handle]))[0];
    if (!j) {
      Xt.error("Unable to import dropped file.");
      return;
    }
    const P = wa(j.mimeType);
    if (!Cn(P)) {
      Xt.warning("Drop audio on the timeline instead.");
      return;
    }
    let T, F = !1;
    if (L && R) {
      const E = await Td.getState().requestProjectMediaMatch(R, {
        fileName: w.file.name,
        width: L.width,
        height: L.height,
        fps: L.fps
      });
      F = sp(E), F && (T = np(L) ?? void 0);
    }
    await c({
      media: j,
      mediaType: P,
      label: j.fileName,
      clientX: h.clientX,
      clientY: h.clientY,
      placementProjectSize: T,
      preserveInitialPlacement: F
    });
  }, [c]), d = n.useCallback((h) => {
    const x = oo(h.dataTransfer);
    x && (h.preventDefault(), s.current += 1, o(x));
  }, []), f = n.useCallback((h) => {
    const x = oo(h.dataTransfer);
    x && (h.preventDefault(), h.dataTransfer.dropEffect = x.allowed ? "copy" : "none", o((v) => v?.allowed === x.allowed && v?.source === x.source && v?.title === x.title && v?.description === x.description ? v : x));
  }, []), m = n.useCallback((h) => {
    a && (h.preventDefault(), s.current = Math.max(0, s.current - 1), s.current === 0 && o(null));
  }, [a]), b = n.useCallback(async (h) => {
    const x = oo(h.dataTransfer);
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
function ip({
  containerRect: e,
  playerSize: t,
  projectSize: s,
  zoom: a,
  hitAreaRef: o,
  overlayPadding: i = 100
}) {
  const c = n.useRef(null), [l, u] = n.useState(null), d = It((H) => H.selectedItemIds), f = It((H) => H.selectItems), m = n.useMemo(() => new Set(d), [d]), b = ke(
    pn(
      (H) => H.items.filter((ue) => ue.type !== "audio" && ue.type !== "adjustment")
    )
  ), h = ke((H) => H.tracks), x = ke((H) => H.snapEnabled), v = ke((H) => H.updateItemTransform), S = ke((H) => H.updateItemsTransformMap), y = ke((H) => H.applyAutoKeyframeOperations), w = n.useRef(!1), k = ne((H) => H.isPlaying), R = ne.getState(), O = n.useRef(
    Wn(R)
  );
  n.useEffect(() => {
    if (!k) {
      const H = ne.getState();
      O.current = Wn(H);
    }
  }, [k]), n.useEffect(() => {
    let H = ne.getState().currentFrame;
    return ne.subscribe((ue, Ce) => {
      const Ve = ue.currentFrame;
      if (ue.isPlaying) {
        const Me = ke.getState().items, _ = Math.min(H, Ve), he = Math.max(H, Ve);
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
  const [L, I] = n.useState(0), j = Xe((H) => H.setCanvasSize), P = Xe((H) => H.setSnappingEnabled), T = Xe((H) => H.snapLines), F = Er((H) => H.isEditing), E = ze((H) => H.isEditing), N = Xe((H) => H.startTranslate), z = Xe((H) => H.updateInteraction), M = Xe((H) => H.endInteraction), q = Xe((H) => H.clearInteraction);
  n.useEffect(() => {
    j(s.width, s.height);
  }, [s.width, s.height, j]), n.useEffect(() => {
    P(x);
  }, [x, P]);
  const V = n.useMemo(() => {
    const H = O.current, ue = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map();
    for (const Me of h)
      ue.set(Me.id, Me.visible), Ce.set(Me.id, Me.locked), Ve.set(Me.id, Me.order);
    return b.filter((Me) => {
      if (!ue.get(Me.trackId) || Ce.get(Me.trackId)) return !1;
      const _ = Me.from + Me.durationInFrames;
      return H >= Me.from && H < _;
    }).toSorted((Me, _) => (Ve.get(_.trackId) ?? 0) - (Ve.get(Me.trackId) ?? 0));
  }, [b, h, k, L]), X = n.useMemo(() => V.filter((H) => m.has(H.id)), [V, m]), D = n.useMemo(() => V.filter((H) => !m.has(H.id)), [V, m]), W = n.useMemo(() => e ? {
    containerRect: e,
    playerSize: t,
    projectSize: s,
    zoom: a
  } : null, [e, t, s, a]), {
    dropState: Y,
    handleDragEnter: pe,
    handleDragLeave: C,
    handleDragOver: B,
    handleDrop: U
  } = op({
    coordParams: W,
    projectSize: s
  }), J = ei(V, s), re = n.useMemo(() => !W || !e ? [] : V.map((H) => {
    const ue = J.get(H.id);
    if (!ue) return { id: H.id, getBoundingRect: () => ({ left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 }) };
    const Ce = ya(
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
  }), [V, W, e, J]), { marqueeState: me } = ud({
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
      const Ve = ne.getState().currentFrame, Me = b.find((ct) => ct.id === H);
      if (!Me) return;
      const _ = mn.getState().keyframesByItemId[H], he = {
        x: ue.x,
        y: ue.y,
        width: ue.width,
        height: ue.height,
        rotation: ue.rotation,
        opacity: ue.opacity,
        cornerRadius: ue.cornerRadius ?? 0
      }, et = /* @__PURE__ */ new Set(), Ye = [];
      for (const ct of $h) {
        const pt = Xn(
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
  ), Re = n.useCallback(
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
  ), Be = n.useCallback(
    (H) => {
      w.current || Pl() || H.target.closest("[data-gizmo]") || (H.stopPropagation(), It.getState().clearItemSelection());
    },
    []
  ), Fe = n.useCallback(
    (H, ue) => {
      ue.stopPropagation();
      const Ce = m.has(H), Ve = d.length > 1;
      ue.shiftKey ? f(Ce ? d.filter((Me) => Me !== H) : [...d, H]) : Ce && Ve ? f([H]) : Ce || f([H]);
    },
    [f, d, m]
  ), De = n.useCallback(
    (H) => {
      const ue = s.width / 2, Ce = s.height / 2, Ve = [];
      for (const Me of V) {
        const _ = J.get(Me.id);
        if (!_) continue;
        const he = ue + _.x, et = Ce + _.y, Ye = he - _.width / 2, $e = he + _.width / 2, ct = et - _.height / 2, pt = et + _.height / 2;
        H.x >= Ye && H.x <= $e && H.y >= ct && H.y <= pt && Ve.push(Me);
      }
      return Ve;
    },
    [V, s, J]
  ), Qe = n.useCallback(
    (H) => {
      if (!W) return;
      H.preventDefault(), H.stopPropagation();
      const ue = Or(H.clientX, H.clientY, W), Ce = De(ue);
      Ce.length > 1 ? u({
        x: H.clientX,
        y: H.clientY,
        items: Ce
      }) : Ce.length === 1 && f([Ce[0].id]);
    },
    [W, De, f]
  ), je = n.useCallback(
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
  const ee = n.useCallback((H, ue) => Math.abs(H.x - ue.x) > 0.01 || Math.abs(H.y - ue.y) > 0.01 || Math.abs(H.width - ue.width) > 0.01 || Math.abs(H.height - ue.height) > 0.01 || Math.abs(H.rotation - ue.rotation) > 0.01, []), Ge = n.useCallback(
    (H, ue, Ce) => {
      if (!W) return;
      const Ve = { ...Ce }, Me = Or(ue.clientX, ue.clientY, W), _ = b.find((pt) => pt.id === H), et = Xe.getState().preview?.[H]?.properties?.crop ?? (_ && "crop" in _ ? _.crop : void 0), Ye = _ ? Cu(_, Ce.width, Ce.height, et) : void 0;
      N(H, Me, Ce, void 0, Ye ?? void 0), document.body.style.cursor = "move";
      const $e = (pt) => {
        const Vt = Or(pt.clientX, pt.clientY, W);
        z(Vt, pt.shiftKey, pt.ctrlKey, pt.altKey);
      }, ct = () => {
        window.removeEventListener("mousemove", $e), window.removeEventListener("mouseup", ct), document.body.style.cursor = "";
        const pt = M();
        pt && ee(Ve, pt) && ye(H, pt, "move"), requestAnimationFrame(() => {
          q();
        });
      };
      window.addEventListener("mousemove", $e), window.addEventListener("mouseup", ct);
    },
    [W, N, z, M, q, ye, ee, b]
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
        !F && !E && /* @__PURE__ */ r.jsx(dd, { marqueeState: me }),
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "absolute",
            style: {
              top: i,
              left: i,
              width: t.width,
              height: t.height,
              pointerEvents: F || E ? "none" : "auto"
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
                  tp,
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
              F || E ? null : X.length === 1 && X[0] ? /* @__PURE__ */ r.jsx(
                Yh,
                {
                  item: X[0],
                  coordParams: W,
                  onTransformStart: xe,
                  onTransformEnd: (H, ue) => ye(X[0].id, H, ue),
                  isPlaying: k
                }
              ) : X.length > 1 ? /* @__PURE__ */ r.jsx(
                ep,
                {
                  items: X,
                  coordParams: W,
                  onTransformStart: xe,
                  onTransformEnd: Re,
                  onItemClick: (H) => f([H]),
                  isPlaying: k
                }
              ) : null,
              /* @__PURE__ */ r.jsx(rp, { snapLines: T, coordParams: W })
            ]
          }
        ),
        l && cd.createPortal(
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
          Ed() ?? document.body
        )
      ]
    }
  ) : null;
}
const ic = 0.25;
function Ru(e) {
  return {
    position: [...e.position],
    inHandle: [...e.inHandle],
    outHandle: [...e.outHandle]
  };
}
function cc([e, t]) {
  return Math.hypot(e, t);
}
function qn([e, t]) {
  const s = Math.hypot(e, t);
  return s <= Number.EPSILON ? [0, 0] : [e / s, t / s];
}
function cp(e, t, s) {
  const a = qn([
    t[0] - e[0],
    t[1] - e[1]
  ]), o = qn([
    s[0] - t[0],
    s[1] - t[1]
  ]), i = qn([
    a[0] + o[0],
    a[1] + o[1]
  ]);
  return i[0] !== 0 || i[1] !== 0 ? i : o[0] !== 0 || o[1] !== 0 ? o : a;
}
function lp(e, t) {
  const s = e[t], a = e[(t + 1) % e.length], o = (s.position[0] + a.position[0]) / 2, i = (s.position[1] + a.position[1]) / 2, c = {
    position: [o, i],
    inHandle: [0, 0],
    outHandle: [0, 0]
  }, l = [...e];
  return l.splice(t + 1, 0, c), l;
}
function Pu(e, t) {
  if (t < 0 || t >= e.length)
    return e;
  const s = e.map(Ru);
  return s[t] = {
    ...s[t],
    inHandle: [0, 0],
    outHandle: [0, 0]
  }, s;
}
function up(e, t) {
  if (e.length < 2 || t < 0 || t >= e.length)
    return e;
  const s = e.map(Ru), a = s[t], o = s[(t - 1 + s.length) % s.length], i = s[(t + 1) % s.length], c = cc(a.inHandle), l = cc(a.outHandle), u = Math.hypot(
    a.position[0] - o.position[0],
    a.position[1] - o.position[1]
  ), d = Math.hypot(
    i.position[0] - a.position[0],
    i.position[1] - a.position[1]
  ), f = c || u * ic, m = l || d * ic, b = c > 0 ? qn([-a.inHandle[0], -a.inHandle[1]]) : null, h = l > 0 ? qn(a.outHandle) : null, x = b && h ? qn([
    b[0] + h[0],
    b[1] + h[1]
  ]) : null, v = x && (x[0] !== 0 || x[1] !== 0) ? x : h ?? b ?? cp(o.position, a.position, i.position);
  return v[0] === 0 && v[1] === 0 ? Pu(s, t) : (a.inHandle = [-v[0] * f, -v[1] * f], a.outHandle = [v[0] * m, v[1] * m], s);
}
function lc(e, t) {
  if (e.length <= 3) return null;
  const s = [...e];
  return s.splice(t, 1), s;
}
const uc = 1e-10;
function dc(e, t, s, a, o) {
  const i = 1 - o;
  return i * i * i * e + 3 * i * i * o * t + 3 * i * o * o * s + o * o * o * a;
}
function fc(e, t, s, a) {
  const o = -e + 3 * t - 3 * s + a, i = 3 * e - 6 * t + 3 * s, c = -3 * e + 3 * t, l = 3 * o, u = 2 * i, d = c;
  if (Math.abs(l) < 1e-8) {
    if (Math.abs(u) < 1e-8) return [];
    const x = -d / u;
    return x > 0 && x < 1 ? [x] : [];
  }
  const f = u * u - 4 * l * d;
  if (f < 0) return [];
  if (Math.abs(f) < uc) {
    const x = -u / (2 * l);
    return x > 0 && x < 1 ? [x] : [];
  }
  const m = Math.sqrt(f), b = (-u + m) / (2 * l), h = (-u - m) / (2 * l);
  return [b, h].filter((x) => x > 0 && x < 1).filter(
    (x, v, S) => S.findIndex((y) => Math.abs(y - x) < uc) === v
  );
}
function Iu(e) {
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
    const l = e[c], u = e[(c + 1) % e.length], d = l.position[0], f = l.position[1], m = l.position[0] + l.outHandle[0], b = l.position[1] + l.outHandle[1], h = u.position[0] + u.inHandle[0], x = u.position[1] + u.inHandle[1], v = u.position[0], S = u.position[1], y = /* @__PURE__ */ new Set([
      0,
      1,
      ...fc(d, m, h, v),
      ...fc(f, b, x, S)
    ]);
    for (const w of y)
      i(
        dc(d, m, h, v, w),
        dc(f, b, x, S, w)
      );
  }
  return { minX: t, minY: s, maxX: a, maxY: o };
}
function mc(e, t, s) {
  const a = Iu(e);
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
const hc = 5, dp = 8, Zs = 4, ln = 8, fp = 12, io = 3, pc = 10, Js = 16, mp = /^Track\s+(\d+)$/i, hp = ["x", "y", "width", "height"];
function Jr(e) {
  return e.map((t) => ({
    position: [...t.position],
    inHandle: [...t.inHandle],
    outHandle: [...t.outHandle]
  }));
}
function gc(e, t, s) {
  e.beginPath(), e.arc(t, s, dp, 0, Math.PI * 2), e.fillStyle = "rgba(251, 191, 36, 0.18)", e.fill(), e.strokeStyle = "#f59e0b", e.lineWidth = 1.5, e.stroke();
}
function pp(e) {
  const t = /* @__PURE__ */ new Set();
  for (const a of e) {
    const o = a.name.match(mp);
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
function Hn(e, t, s, a, o) {
  const i = 1 - o;
  return i * i * i * e + 3 * i * i * o * t + 3 * i * o * o * s + o * o * o * a;
}
function gp(e, t, s) {
  let a = !1;
  for (let o = 0, i = s.length - 1; o < s.length; i = o++) {
    const [c, l] = s[o], [u, d] = s[i];
    l > t != d > t && e < (u - c) * (t - l) / (d - l || Number.EPSILON) + c && (a = !a);
  }
  return a;
}
function xc(e, t, s, a, o, i) {
  const c = o - s, l = i - a, u = c * c + l * l;
  if (u === 0)
    return Math.hypot(e - s, t - a);
  const d = Math.max(
    0,
    Math.min(1, ((e - s) * c + (t - a) * l) / u)
  ), f = s + d * c, m = a + d * l;
  return Math.hypot(e - f, t - m);
}
function xp(e, t) {
  return Math.abs(e.x - t.x) > 0.01 || Math.abs(e.y - t.y) > 0.01 || Math.abs(e.width - t.width) > 0.01 || Math.abs(e.height - t.height) > 0.01 || Math.abs(e.rotation - t.rotation) > 0.01;
}
function bc(e, t) {
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
const bp = n.memo(function({
  coordParams: t,
  playerSize: s,
  itemTransform: a
}) {
  const o = n.useRef(null), [i, c] = n.useState(!1), [l, u] = n.useState(null), [d, f] = n.useState(null), [m, b] = n.useState(null), h = ze((g) => g.isEditing), x = ze((g) => g.editingItemId), v = ze((g) => g.draggingVertexIndex), S = ze((g) => g.draggingHandle), y = ze((g) => g.previewVertices), w = ze((g) => g.selectedVertexIndices), k = ze((g) => g.selectedVertexIndex), R = ze((g) => g.hoveredVertexIndex), O = ze((g) => g.hoveredHandle), L = ze((g) => g.penMode), I = ze((g) => g.penVertices), j = ze((g) => g.penDraggingHandle), P = ze((g) => g.penCursorPos), T = ze((g) => g.finishPenRequestVersion), F = ze((g) => g.cancelPenRequestVersion), E = ze(
    (g) => g.convertSelectedVertexRequestVersion
  ), N = ze(
    (g) => g.convertSelectedVertexRequestMode
  ), z = ke((g) => g.commitMaskEdit), M = ze((g) => g.selectVertices), q = ze((g) => g.selectVertex), V = ze((g) => g.startVertexDrag), X = ze((g) => g.startHandleDrag), D = ze((g) => g.updatePreview), W = ze((g) => g.endDrag), Y = ze((g) => g.setHover), pe = ze((g) => g.stopEditing), C = ze((g) => g.addPenVertex), B = ze((g) => g.setPenVertices), U = ze((g) => g.updatePenLastHandle), J = ze((g) => g.setPenDragging), re = ze((g) => g.setPenCursorPos), me = ze((g) => g.cancelPenMode), xe = Xe((g) => g.startTranslate), ye = Xe((g) => g.updateInteraction), Re = Xe((g) => g.endInteraction), Be = Xe((g) => g.clearInteraction), Fe = d?.transform ?? a, De = n.useCallback(() => ya(Fe, t), [Fe, t]), Qe = n.useCallback(
    (g) => {
      const G = De();
      return [
        G.left + g[0] * G.width,
        G.top + g[1] * G.height
      ];
    },
    [De]
  ), je = n.useCallback(
    (g) => Qe(g.position),
    [Qe]
  ), ee = n.useCallback(
    (g, G) => {
      const te = G === "in" ? g.inHandle : g.outHandle;
      return Qe([g.position[0] + te[0], g.position[1] + te[1]]);
    },
    [Qe]
  ), Ge = n.useCallback(
    (g, G) => {
      const te = Or(g, G, t), oe = De(), K = Mn(t), Z = oe.left / K, ie = oe.top / K, Ie = oe.width / K, Te = oe.height / K;
      return [
        (te.x - Z) / Ie,
        (te.y - ie) / Te
      ];
    },
    [t, De]
  ), H = n.useCallback(() => {
    if (d) return d.vertices;
    if (y) return y;
    if (!x) return null;
    const G = Jt.getState().items.find((te) => te.id === x);
    return G?.type === "shape" && G.shapeType === "path" ? G.pathVertices ?? null : null;
  }, [d, x, y]), ue = n.useCallback(
    (g, G) => ({
      left: Math.min(g[0], G[0]),
      top: Math.min(g[1], G[1]),
      width: Math.abs(G[0] - g[0]),
      height: Math.abs(G[1] - g[1])
    }),
    []
  ), Ce = n.useCallback(
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
  ), Ve = n.useCallback(() => {
    const g = o.current;
    if (!g) return;
    const G = g.getContext("2d");
    if (!G) return;
    const te = window.devicePixelRatio || 1;
    g.width = s.width * te, g.height = s.height * te, G.scale(te, te), G.clearRect(0, 0, s.width, s.height), L ? et(G) : (_(G), he(G));
  }, [s, L, I, P, j, H, je, ee, Qe, v, S, w, k, R, O, l, m]), Me = n.useCallback((g, G, te) => {
    const oe = G.outHandle, K = te.inHandle;
    if (oe[0] === 0 && oe[1] === 0 && K[0] === 0 && K[1] === 0) {
      const [ie, Ie] = je(te);
      g.lineTo(ie, Ie);
    } else {
      const [ie, Ie] = ee(G, "out"), [Te, Ze] = ee(te, "in"), [ot, ht] = je(te);
      g.bezierCurveTo(ie, Ie, Te, Ze, ot, ht);
    }
  }, [je, ee]), _ = n.useCallback((g) => {
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
  }, [H, je, ee, v, S, w, R, O, l, Me]), he = n.useCallback((g) => {
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
    if (P && !j && !oe) {
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
        g.beginPath(), g.moveTo(ie, Ie), g.lineTo(it, ft), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(it, ft, Zs, 0, Math.PI * 2);
        const vt = v === K && S === "out", Pr = R === K && O === "out";
        g.fillStyle = vt ? "#fff" : Pr ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
      }
      if (Ze) {
        const [it, ft] = ee(Z, "in");
        g.beginPath(), g.moveTo(ie, Ie), g.lineTo(it, ft), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(it, ft, Zs, 0, Math.PI * 2);
        const vt = v === K && S === "in", Pr = R === K && O === "in";
        g.fillStyle = vt ? "#fff" : Pr ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
      }
      const ht = K === 0 && I.length >= 3 && P != null && (() => {
        const [it, ft] = je(I[0]), [vt, Pr] = Qe(P);
        return Math.hypot(vt - it, Pr - ft) < fp;
      })(), at = v === K && S === null, st = w.includes(K), rt = R === K && O === null;
      st && gc(g, ie, Ie), g.beginPath(), g.arc(ie, Ie, hc, 0, Math.PI * 2), g.fillStyle = st ? at ? "#fde68a" : "#fef3c7" : at ? "#fff" : ht || rt ? "#22d3ee" : "#0e7490", g.fill(), g.strokeStyle = st ? "#f59e0b" : ht || at ? "#fff" : "#22d3ee", g.lineWidth = ht || st ? 2.5 : 1.5, g.stroke();
    }
  }, [I, P, j, je, ee, Qe, v, S, w, R, O, Me]), Ye = n.useCallback((g, G, te) => {
    const [oe, K] = je(G), Z = G.inHandle[0] !== 0 || G.inHandle[1] !== 0, ie = G.outHandle[0] !== 0 || G.outHandle[1] !== 0;
    if (Z) {
      const [ot, ht] = ee(G, "in");
      g.beginPath(), g.moveTo(oe, K), g.lineTo(ot, ht), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(ot, ht, Zs, 0, Math.PI * 2);
      const at = R === te && O === "in";
      g.fillStyle = at ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
    }
    if (ie) {
      const [ot, ht] = ee(G, "out");
      g.beginPath(), g.moveTo(oe, K), g.lineTo(ot, ht), g.strokeStyle = "rgba(34, 211, 238, 0.5)", g.lineWidth = 1, g.stroke(), g.beginPath(), g.arc(ot, ht, Zs, 0, Math.PI * 2);
      const at = R === te && O === "out";
      g.fillStyle = at ? "#22d3ee" : "rgba(34, 211, 238, 0.6)", g.fill(), g.strokeStyle = "#fff", g.lineWidth = 1, g.stroke();
    }
    const Ie = v === te && S === null, Te = w.includes(te), Ze = R === te && O === null;
    Te && gc(g, oe, K), g.beginPath(), g.arc(oe, K, hc, 0, Math.PI * 2), g.fillStyle = Te ? Ie ? "#fde68a" : "#fef3c7" : Ie ? "#fff" : Ze ? "#22d3ee" : "#0e7490", g.fill(), g.strokeStyle = Te ? "#f59e0b" : "#22d3ee", g.lineWidth = Te ? 2.5 : 1.5, g.stroke();
  }, [je, ee, v, S, w, R, O]);
  n.useEffect(() => {
    Ve();
  }, [Ve]), n.useEffect(() => {
    c(!1), u(null), f(null), b(null), q(null);
  }, [x, L, q]);
  const $e = n.useCallback(
    (g, G) => {
      const te = H();
      if (!te) return null;
      for (let oe = 0; oe < te.length; oe++) {
        const K = te[oe];
        if (K.inHandle[0] !== 0 || K.inHandle[1] !== 0) {
          const [Z, ie] = ee(K, "in");
          if (Math.hypot(g - Z, G - ie) < ln)
            return { type: "inHandle", index: oe };
        }
        if (K.outHandle[0] !== 0 || K.outHandle[1] !== 0) {
          const [Z, ie] = ee(K, "out");
          if (Math.hypot(g - Z, G - ie) < ln)
            return { type: "outHandle", index: oe };
        }
      }
      for (let oe = 0; oe < te.length; oe++) {
        const [K, Z] = je(te[oe]);
        if (Math.hypot(g - K, G - Z) < ln)
          return { type: "vertex", index: oe };
      }
      for (let oe = 0; oe < te.length; oe++) {
        const K = te[oe], Z = te[(oe + 1) % te.length], [ie, Ie] = je(K), [Te, Ze] = je(Z);
        if (K.outHandle[0] === 0 && K.outHandle[1] === 0 && Z.inHandle[0] === 0 && Z.inHandle[1] === 0) {
          if (xc(g, G, ie, Ie, Te, Ze) < ln)
            return { type: "segment", index: oe };
          continue;
        }
        const [ht, at] = ee(K, "out"), [st, rt] = ee(Z, "in");
        let it = ie, ft = Ie;
        for (let vt = 1; vt <= Js; vt++) {
          const Pr = vt / Js, Br = Hn(ie, ht, st, Te, Pr), xn = Hn(Ie, at, rt, Ze, Pr);
          if (xc(g, G, it, ft, Br, xn) < ln)
            return { type: "segment", index: oe };
          it = Br, ft = xn;
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
          for (let ft = 1; ft <= Js; ft++) {
            const vt = ft / Js;
            oe.push([
              Hn(Ie, at, rt, Ze, vt),
              Hn(Te, st, it, ot, vt)
            ]);
          }
        }
        if (gp(g, G, oe))
          return { type: "shape" };
      }
      return null;
    },
    [H, je, ee]
  ), ct = n.useCallback(
    (g, G) => {
      for (let te = 0; te < I.length; te++) {
        const oe = I[te];
        if (oe.inHandle[0] !== 0 || oe.inHandle[1] !== 0) {
          const [K, Z] = ee(oe, "in");
          if (Math.hypot(g - K, G - Z) < ln)
            return { type: "inHandle", index: te };
        }
        if (oe.outHandle[0] !== 0 || oe.outHandle[1] !== 0) {
          const [K, Z] = ee(oe, "out");
          if (Math.hypot(g - K, G - Z) < ln)
            return { type: "outHandle", index: te };
        }
      }
      for (let te = 0; te < I.length; te++) {
        const [oe, K] = je(I[te]);
        if (Math.hypot(g - oe, G - K) < ln)
          return { type: "vertex", index: te };
      }
      return null;
    },
    [I, je, ee]
  ), pt = n.useRef(null), Vt = n.useRef(null), yr = n.useRef(null), Bt = n.useCallback(() => {
    Vt.current = null, J(!1), W(), Y(null);
  }, [W, Y, J]), _r = n.useCallback(
    (g, G, te, oe) => {
      const K = Or(G, te, t), Z = De(), ie = Mn(t), Ie = Z.width / ie, Te = Z.height / ie, Ze = K.x - g.startCanvasPos[0], ot = K.y - g.startCanvasPos[1], ht = Jr(g.startVertices);
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
  ), hr = n.useCallback(
    (g) => {
      g.stopPropagation(), g.preventDefault();
      const G = Ge(g.clientX, g.clientY);
      re(G);
      const te = o.current?.getBoundingClientRect();
      if (!te) return;
      const oe = g.clientX - te.left, K = g.clientY - te.top, Z = ct(oe, K), ie = Or(g.clientX, g.clientY, t);
      if (Z) {
        const Te = Z.type === "inHandle" ? "in" : Z.type === "outHandle" ? "out" : null, Ze = Z.type === "vertex" && Z.index === 0 && I.length >= 3;
        Vt.current = Ze ? {
          type: "close-or-drag",
          vertexIndex: Z.index,
          // Match normal point placement: drag sets the anchor's outgoing direction.
          handleType: "out",
          startScreenPos: [g.clientX, g.clientY],
          startCanvasPos: [ie.x, ie.y],
          startVertices: Jr(I),
          hasMoved: !1
        } : Z.type === "vertex" ? {
          type: "vertex",
          vertexIndex: Z.index,
          handleType: null,
          startScreenPos: [g.clientX, g.clientY],
          startCanvasPos: [ie.x, ie.y],
          startVertices: Jr(I),
          hasMoved: !1
        } : {
          type: "handle",
          vertexIndex: Z.index,
          handleType: Te,
          startScreenPos: [g.clientX, g.clientY],
          startCanvasPos: [ie.x, ie.y],
          startVertices: Jr(I),
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
      re,
      ct,
      t,
      J,
      Y,
      V,
      X,
      C
    ]
  ), wr = n.useCallback(
    (g) => {
      const G = Ge(g.clientX, g.clientY);
      re(G);
      const te = Vt.current;
      if (te) {
        const Ie = Math.hypot(
          g.clientX - te.startScreenPos[0],
          g.clientY - te.startScreenPos[1]
        );
        if (te.type === "create") {
          if (Ie < pc) return;
          const Ze = ze.getState().penVertices, ot = Ze[Ze.length - 1];
          if (!ot) return;
          X(te.vertexIndex, "out"), U([
            G[0] - ot.position[0],
            G[1] - ot.position[1]
          ]);
          return;
        }
        const Te = te.type === "close-or-drag" ? pc : io;
        if (Ie < Te && !te.hasMoved)
          return;
        te.hasMoved || (te.hasMoved = !0, te.type === "vertex" ? V(te.vertexIndex) : te.type === "close-or-drag" ? X(te.vertexIndex, te.handleType ?? "in") : te.handleType && X(te.vertexIndex, te.handleType)), B(_r(te, g.clientX, g.clientY, g.altKey));
        return;
      }
      const oe = o.current?.getBoundingClientRect();
      if (!oe) return;
      const K = g.clientX - oe.left, Z = g.clientY - oe.top, ie = ct(K, Z);
      ie ? ie.type === "vertex" ? Y(ie.index, null) : Y(ie.index, ie.type === "inHandle" ? "in" : "out") : Y(null);
    },
    [
      Ge,
      re,
      X,
      U,
      V,
      B,
      _r,
      ct,
      Y
    ]
  ), Lr = n.useCallback(
    (g) => {
      const G = Vt.current;
      if (!G) return;
      if (g.stopPropagation(), g.preventDefault(), o.current?.releasePointerCapture(g.pointerId), Vt.current = null, J(!1), W(), G.type === "close-or-drag") {
        yr.current?.();
        return;
      }
      const te = Ge(g.clientX, g.clientY);
      re(te);
      const oe = o.current?.getBoundingClientRect();
      if (!oe) {
        Y(null);
        return;
      }
      const K = g.clientX - oe.left, Z = g.clientY - oe.top, ie = ct(K, Z);
      ie ? ie.type === "vertex" ? Y(ie.index, null) : Y(ie.index, ie.type === "inHandle" ? "in" : "out") : Y(null);
    },
    [J, W, Ge, re, ct, Y]
  ), Sr = n.useCallback(
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
  ), At = n.useCallback((g) => {
    const G = Iu(g);
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
    })), Ze = ((G.minX + G.maxX) / 2 - 0.5) * te, ot = ((G.minY + G.maxY) / 2 - 0.5) * oe, { tracks: ht, fps: at, addItem: st, setTracks: rt } = ke.getState(), it = Jt.getState().items, { activeTrackId: ft, selectItems: vt, setActiveTrack: Pr } = It.getState(), Br = ne.getState().currentFrame, xn = at * 60;
    let Hr = jl({
      tracks: ht,
      items: it,
      activeTrackId: ft,
      proposedFrame: Br,
      durationInFrames: xn,
      itemType: "shape"
    });
    if (!Hr) {
      me();
      return;
    }
    const bn = Hr.trackId, qr = Al(ht).filter(
      (Ft) => Ft.visible !== !1 && !Ft.locked && !Ft.muted && !Ft.isGroup
    ), pr = ft ? qr.find((Ft) => Ft.id === ft) : void 0, Ur = qr.find((Ft) => Ft.id === bn);
    if (!Hr.preservedTime || bn !== ft && !!pr && !!Ur && Ur.order > pr.order) {
      const Ft = ht.find((ts) => ts.id === bn), Fa = ht.length > 0 ? Math.min(...ht.map((ts) => ts.order ?? 0)) : 0, Fs = {
        id: `track-${Date.now()}`,
        name: pp(ht),
        height: Ft?.height ?? 72,
        locked: !1,
        visible: !0,
        muted: !1,
        solo: !1,
        order: Fa - 1,
        items: []
      };
      rt([Fs, ...ht]), Hr = {
        trackId: Fs.id,
        from: Br,
        preservedTime: !0
      };
    }
    const Ir = {
      id: crypto.randomUUID(),
      type: "shape",
      trackId: Hr.trackId,
      from: Hr.from,
      durationInFrames: xn,
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
    st(Ir), Pr(Ir.trackId), vt([Ir.id]), Fd.getState().requestScrollToFrame(Ir.from), pe();
  }, [t, me, pe]), Ue = n.useCallback(() => {
    const g = ze.getState(), G = g.penVertices;
    if (Bt(), !g.shapePenMode || G.length < 3) {
      me();
      return;
    }
    At(G);
  }, [me, At, Bt]);
  yr.current = Ue;
  const Pt = n.useCallback(() => {
    Bt(), me();
  }, [me, Bt]), zt = n.useRef(0), Pe = n.useRef(0), er = n.useRef(0);
  n.useEffect(() => {
    zt.current = 0, Pe.current = 0, er.current = 0;
  }, [x, L]), n.useEffect(() => {
    L && T !== 0 && T !== zt.current && (zt.current = T, Ue());
  }, [L, T, Ue]), n.useEffect(() => {
    L && F !== 0 && F !== Pe.current && (Pe.current = F, Pt());
  }, [L, F, Pt]);
  const Yt = n.useCallback(() => {
    const g = ze.getState();
    if (g.penVertices.length === 0) return;
    const G = g.penVertices.slice(0, -1);
    Vt.current = null, J(!1), W(), B(G), Y(G.length > 0 ? G.length - 1 : null);
  }, [W, Y, J, B]);
  n.useEffect(() => {
    if (!L) return;
    const g = (G) => {
      if (!(G.key === "Shift" || G.key === "Alt" || G.key === "Control" || G.key === "Meta")) {
        if (G.stopPropagation(), G.stopImmediatePropagation(), G.key === "Escape") {
          G.preventDefault(), Pt();
          return;
        }
        if (G.key === "Backspace" || G.key === "Delete") {
          G.preventDefault(), Yt();
          return;
        }
        G.preventDefault();
      }
    };
    return window.addEventListener("keydown", g, !0), () => window.removeEventListener("keydown", g, !0);
  }, [L, Pt, Yt]);
  const Ht = n.useRef(!1), or = n.useRef(t);
  or.current = t;
  const Rr = n.useRef(De);
  Rr.current = De;
  const Ut = n.useRef(x);
  Ut.current = x;
  const Tn = n.useRef(Fe);
  Tn.current = Fe;
  const Yr = n.useRef([]);
  n.useEffect(() => () => {
    for (const G of Yr.current)
      cancelAnimationFrame(G);
    Yr.current = [], Xe.getState().activeGizmo?.itemId === Ut.current && Xe.getState().clearInteraction();
  }, []);
  const en = n.useCallback(() => {
    for (const G of Yr.current)
      cancelAnimationFrame(G);
    Yr.current = [];
    const g = requestAnimationFrame(() => {
      const G = requestAnimationFrame(() => {
        Yr.current = [], f(null), Be(), W();
      });
      Yr.current = [g, G];
    });
    Yr.current = [g];
  }, [Be, W]), gn = n.useCallback(
    (g, G, te) => {
      const oe = mn.getState().keyframesByItemId[g.id], K = {}, Z = [], ie = te - g.from, Ie = ie >= 0 && ie < g.durationInFrames;
      for (const Te of hp) {
        const Ze = G[Te];
        if (typeof Ze != "number")
          continue;
        const ot = oe?.properties.find((at) => at.property === Te), ht = Xn(
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
          const at = vs.getState().transitions;
          if (!Dl(ie, g.id, g, at)) {
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
  ), Fr = n.useCallback(
    (g) => {
      if (!x) return;
      const G = Jt.getState().itemById[x];
      if (G?.type === "shape" && G.shapeType === "path") {
        const te = ne.getState().currentFrame, oe = mc(g, a, G.transform), { baseTransform: K, autoKeyframeOperations: Z } = gn(
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
          vertices: Jr(oe.pathVertices),
          transform: bc(oe.transform, a)
        }), z(x, {
          pathVertices: Jr(oe.pathVertices),
          transform: K,
          autoKeyframeOperations: Z
        }), en();
      }
    },
    [gn, z, x, a, en]
  ), En = n.useCallback(() => {
    const g = H();
    if (!g) return;
    const G = w.length > 0 ? w.filter((Te) => Number.isInteger(Te) && Te >= 0 && Te < g.length) : k !== null && g[k] ? [k] : [];
    if (G.length === 0 || g.length - G.length < 3) return;
    const te = [...G].sort((Te, Ze) => Ze - Te);
    let oe = g;
    for (const Te of te)
      oe = oe ? lc(oe, Te) : null;
    if (!oe) return;
    const K = new Set(G), Z = w.filter((Te) => !K.has(Te)).map((Te) => Te - G.filter((Ze) => Ze < Te).length), ie = k === null || K.has(k) ? null : k - G.filter((Te) => Te < k).length, Ie = ie !== null && Z.includes(ie) ? ie : Z[Z.length - 1] ?? null;
    M(Z, Ie), Fr(oe);
  }, [Fr, H, M, k, w]);
  n.useEffect(() => {
    if (!h || L) return;
    const g = (G) => {
      G.key === "Shift" || G.key === "Alt" || G.key === "Control" || G.key === "Meta" || G.key !== "Backspace" && G.key !== "Delete" || (G.preventDefault(), G.stopPropagation(), G.stopImmediatePropagation(), En());
    };
    return window.addEventListener("keydown", g, !0), () => window.removeEventListener("keydown", g, !0);
  }, [h, L, En]), n.useEffect(() => {
    if (!h || L || E === 0 || E === er.current || v !== null || S !== null || (er.current = E, w.length === 0 && k === null || !N))
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
    const te = Jr(g);
    for (const oe of G) {
      const Z = (N === "corner" ? Pu(g, oe) : up(g, oe))[oe];
      Z && (te[oe] = {
        position: [...Z.position],
        inHandle: [...Z.inHandle],
        outHandle: [...Z.outHandle]
      });
    }
    Fr(te);
  }, [
    h,
    L,
    v,
    S,
    w,
    k,
    E,
    N,
    H,
    Fr,
    q
  ]);
  const tn = n.useCallback(
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
        }, c(!1), u(null), Y(null), b(null);
        return;
      }
      g.stopPropagation(), g.preventDefault();
      const Z = H();
      if (!Z) return;
      o.current.setPointerCapture(g.pointerId), Ht.current = !0;
      const ie = Or(g.clientX, g.clientY, t);
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
        }, u(null), Y(null), c(!0);
      }
    },
    [
      $e,
      H,
      t,
      V,
      X,
      Fr,
      Y,
      xe
    ]
  ), Is = n.useCallback(
    (g) => {
      if (Ht.current) {
        const Z = pt.current;
        if (!Z) return;
        if (Z.type === "marquee") {
          const rt = [
            g.clientX - (o.current?.getBoundingClientRect().left ?? 0),
            g.clientY - (o.current?.getBoundingClientRect().top ?? 0)
          ], it = ue(Z.startScreenPos, rt), ft = it.width >= io || it.height >= io;
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
        const ie = Or(g.clientX, g.clientY, or.current);
        if (Z.type === "shape") {
          ye(ie, g.shiftKey, g.ctrlKey, g.altKey);
          return;
        }
        const Ie = ie.x - Z.startCanvasPos[0], Te = ie.y - Z.startCanvasPos[1], Ze = Rr.current(), ot = Mn(or.current), ht = Ze.width / ot, at = Ze.height / ot, st = Z.startVertices.map((rt) => ({
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
      K ? K.type === "vertex" ? (c(!1), u(null), Y(K.index, null)) : K.type === "inHandle" ? (c(!1), u(null), Y(K.index, "in")) : K.type === "outHandle" ? (c(!1), u(null), Y(K.index, "out")) : K.type === "segment" ? (c(!1), u(K.index), Y(null)) : (u(null), c(!0), Y(null)) : (c(!1), u(null), Y(null));
    },
    [ue, Ce, $e, M, Y, D, ye]
  ), Ts = n.useCallback(
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
        if (K && oe && xp(G.startTransform, K)) {
          const Z = Jt.getState().items.find((ie) => ie.id === oe);
          if (Z?.type === "shape" && Z.shapeType === "path") {
            const ie = ne.getState().currentFrame, { baseTransform: Ie, autoKeyframeOperations: Te } = gn(
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
        en();
      } else if (te && oe) {
        const K = Jt.getState().items.find((Z) => Z.id === oe);
        if (K?.type === "shape" && K.shapeType === "path") {
          const Z = ne.getState().currentFrame, ie = mc(te, a, K.transform), { baseTransform: Ie, autoKeyframeOperations: Te } = gn(
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
            vertices: Jr(ie.pathVertices),
            transform: bc(ie.transform, a)
          }), z(oe, {
            pathVertices: Jr(ie.pathVertices),
            transform: Ie,
            autoKeyframeOperations: Te
          });
        }
        en();
      } else
        en();
      pt.current = null;
    },
    [
      gn,
      z,
      Re,
      ue,
      Ce,
      a,
      en,
      q,
      M
    ]
  ), Ea = n.useCallback(
    (g) => {
      const G = o.current?.getBoundingClientRect();
      if (!G) return;
      const te = g.clientX - G.left, oe = g.clientY - G.top, K = $e(te, oe);
      if (K?.type === "vertex") {
        g.preventDefault(), g.stopPropagation();
        const Z = H();
        if (!Z) return;
        const ie = lc(Z, K.index);
        if (ie) {
          const Ie = w.filter((ot) => ot !== K.index).map((ot) => ot > K.index ? ot - 1 : ot), Te = k === null || k === K.index ? null : k > K.index ? k - 1 : k, Ze = Te !== null && Ie.includes(Te) ? Te : Ie[Ie.length - 1] ?? null;
          M(Ie, Ze), Fr(ie);
        }
      }
    },
    [$e, H, w, k, M, Fr]
  ), jr = n.useCallback(
    (g) => {
      const G = o.current?.getBoundingClientRect();
      if (!G) return;
      const te = g.clientX - G.left, oe = g.clientY - G.top, K = $e(te, oe);
      if (K?.type !== "segment") return;
      g.preventDefault(), g.stopPropagation();
      const Z = H();
      if (!Z) return;
      const ie = lp(Z, K.index);
      q(K.index + 1), Fr(ie), c(!1), u(null);
    },
    [$e, H, q, Fr]
  );
  if (!h) return null;
  const Es = i ? "move" : "crosshair";
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
            cursor: Es
          },
          onPointerDown: L ? hr : tn,
          onPointerMove: L ? wr : Is,
          onPointerUp: L ? Lr : Ts,
          onContextMenu: L ? Sr : Ea,
          onDoubleClick: L ? void 0 : jr
        }
      )
    }
  );
}), vp = n.memo(function({
  containerRect: t,
  playerSize: s,
  projectSize: a,
  zoom: o
}) {
  const i = ze((b) => b.isEditing), c = ze((b) => b.editingItemId), l = ze((b) => b.shapePenMode), u = Jt(
    n.useCallback(
      (b) => c ? b.itemById[c] ?? null : null,
      [c]
    )
  ), d = ei(u ? [u] : [], a), f = n.useMemo(() => t ? { containerRect: t, playerSize: s, projectSize: a, zoom: o } : null, [t, s, a, o]), m = n.useMemo(() => {
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
  return !i || !f || !m ? null : /* @__PURE__ */ r.jsx(Uo, { level: "component", children: /* @__PURE__ */ r.jsx(
    bp,
    {
      coordParams: f,
      playerSize: s,
      itemTransform: m
    }
  ) });
}), vc = 6, yc = 12, zr = 20, co = ["topLeft", "topRight", "bottomRight", "bottomLeft"], wc = {
  topLeft: [0, 0],
  topRight: [0, 0],
  bottomRight: [0, 0],
  bottomLeft: [0, 0]
}, yp = n.memo(function({
  coordParams: t,
  playerSize: s,
  itemTransform: a
}) {
  const o = n.useRef(null), i = n.useRef(!1), c = n.useRef(null), l = n.useRef(wc), {
    editingItemId: u,
    draggingHandle: d,
    hoveredHandle: f,
    previewCornerPin: m,
    setHovered: b
  } = Er(), v = Jt((z) => z.items).find((z) => z.id === u)?.cornerPin ?? wc, S = m ?? v, y = Mn(t), w = n.useRef(t);
  w.current = t;
  const k = n.useRef(a);
  k.current = a;
  const R = n.useRef(y);
  R.current = y;
  const O = n.useRef(u);
  O.current = u;
  const L = n.useRef(v);
  L.current = v;
  const I = n.useCallback(
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
        const C = M.width / 2 + a.x, B = M.height / 2 + a.y, U = a.rotation * Math.PI / 180, J = Math.cos(U), re = Math.sin(U), me = W - C, xe = Y - B;
        W = C + me * J - xe * re, Y = B + me * re + xe * J;
      }
      return [W * y + zr, Y * y + zr];
    },
    [t, a, S, y]
  ), j = n.useCallback(
    (z, M, q) => {
      const V = k.current, X = R.current, { projectSize: D } = w.current, W = V.width, Y = V.height;
      let pe = (M - zr) / X, C = (q - zr) / X;
      if (V.rotation !== 0) {
        const J = D.width / 2 + V.x, re = D.height / 2 + V.y, me = -V.rotation * Math.PI / 180, xe = Math.cos(me), ye = Math.sin(me), Re = pe - J, Be = C - re;
        pe = J + Re * xe - Be * ye, C = re + Re * ye + Be * xe;
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
  ), P = n.useCallback(() => {
    const z = o.current;
    if (!z) return;
    const M = z.getContext("2d");
    if (!M) return;
    const q = window.devicePixelRatio || 1;
    M.setTransform(q, 0, 0, q, 0, 0), M.clearRect(0, 0, z.width, z.height);
    const V = co.map((D) => I(D));
    M.beginPath(), M.moveTo(V[0][0], V[0][1]), M.lineTo(V[1][0], V[1][1]), M.lineTo(V[2][0], V[2][1]), M.lineTo(V[3][0], V[3][1]), M.closePath(), M.strokeStyle = "#22d3ee", M.lineWidth = 1.5, M.setLineDash([4, 4]), M.stroke(), M.setLineDash([]), M.beginPath(), M.moveTo(V[0][0], V[0][1]), M.lineTo(V[2][0], V[2][1]), M.moveTo(V[1][0], V[1][1]), M.lineTo(V[3][0], V[3][1]), M.strokeStyle = "rgba(34, 211, 238, 0.3)", M.lineWidth = 1, M.stroke();
    const X = ["TL", "TR", "BR", "BL"];
    for (let D = 0; D < 4; D++) {
      const [W, Y] = V[D], pe = co[D], C = d === pe, B = f === pe, U = C || B ? vc + 2 : vc;
      M.beginPath(), M.arc(W, Y, U, 0, Math.PI * 2), M.fillStyle = C ? "#22d3ee" : B ? "rgba(34, 211, 238, 0.8)" : "white", M.fill(), M.strokeStyle = "#22d3ee", M.lineWidth = 2, M.stroke(), M.fillStyle = C ? "white" : "#22d3ee", M.font = "9px monospace", M.textAlign = "center", M.fillText(X[D], W, Y - U - 4);
    }
  }, [I, d, f]), T = n.useCallback(
    (z, M) => {
      for (const q of co) {
        const [V, X] = I(q), D = z - V, W = M - X;
        if (D * D + W * W <= yc * yc)
          return q;
      }
      return null;
    },
    [I]
  ), F = n.useCallback(
    (z) => {
      if (i.current) return;
      const M = o.current?.getBoundingClientRect();
      if (!M) return;
      const q = z.clientX - M.left, V = z.clientY - M.top, X = T(q, V);
      !X || !O.current || (z.stopPropagation(), z.preventDefault(), o.current.setPointerCapture(z.pointerId), i.current = !0, c.current = X, l.current = { ...L.current }, Er.getState().setDragging(X));
    },
    [T]
  ), E = n.useCallback(
    (z) => {
      const M = o.current?.getBoundingClientRect();
      if (!M) return;
      const q = z.clientX - M.left, V = z.clientY - M.top;
      if (i.current && c.current) {
        const W = j(c.current, q, V), Y = [
          Math.round(W[0] * 10) / 10,
          Math.round(W[1] * 10) / 10
        ];
        Er.getState().setPreview({
          ...l.current,
          [c.current]: Y
        });
        return;
      }
      const X = T(q, V);
      b(X);
      const D = o.current;
      D && (D.style.cursor = X ? "move" : "default");
    },
    [T, j, b]
  ), N = n.useCallback(
    (z) => {
      if (!i.current) return;
      z.stopPropagation(), z.preventDefault(), o.current?.releasePointerCapture(z.pointerId), i.current = !1;
      const M = c.current;
      c.current = null;
      const q = Er.getState().previewCornerPin, V = O.current;
      q && V && M && ke.getState().updateItem(V, { cornerPin: q }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          Er.getState().clearPreview();
        });
      });
    },
    []
  );
  return n.useEffect(() => {
    const z = o.current;
    if (!z) return;
    const M = window.devicePixelRatio || 1, q = (s.width + zr * 2) * M, V = (s.height + zr * 2) * M;
    (z.width !== q || z.height !== V) && (z.width = q, z.height = V), P();
  }, [s, P]), /* @__PURE__ */ r.jsx(
    "canvas",
    {
      ref: o,
      className: "absolute z-20",
      style: {
        top: -zr,
        left: -zr,
        width: s.width + zr * 2,
        height: s.height + zr * 2,
        pointerEvents: "auto"
      },
      onPointerDown: F,
      onPointerMove: E,
      onPointerUp: N,
      onClick: (z) => z.stopPropagation()
    }
  );
}), wp = n.memo(function({
  containerRect: t,
  playerSize: s,
  projectSize: a,
  zoom: o
}) {
  const i = Er((h) => h.isEditing), c = Er((h) => h.editingItemId), l = Er((h) => h.stopEditing), u = It((h) => h.selectedItemIds), d = Jt((h) => h.items);
  n.useEffect(() => {
    i && c && !u.includes(c) && l();
  }, [i, c, u, l]);
  const f = n.useMemo(
    () => c ? d.find((h) => h.id === c) : null,
    [c, d]
  ), m = n.useMemo(() => t ? { containerRect: t, playerSize: s, projectSize: a, zoom: o } : null, [t, s, a, o]), b = n.useMemo(() => {
    if (!f) return null;
    const h = { width: a.width, height: a.height }, x = Kr(f, h, Tr(f));
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
    yp,
    {
      coordParams: m,
      playerSize: s,
      itemTransform: b
    }
  );
});
function Zn(e) {
  return e && (e.type === "video" || e.type === "image") && e.sourceWidth && e.sourceHeight ? e.sourceWidth / e.sourceHeight : 16 / 9;
}
function Tu(e, t, s) {
  let a = e, o = e / s;
  return o > t && (o = t, a = t * s), {
    mediaWidth: Math.max(a, 1),
    mediaHeight: Math.max(o, 1)
  };
}
function Eu(e, t, s, a) {
  return e ? e.type === "video" ? a.renderVideo(e, t ?? 0) : e.type === "image" ? a.renderImage(e) : a.renderPlaceholder(e.type, s ?? e.type) : a.renderPlaceholder("gap", s ?? "GAP");
}
const Sp = {
  image: "#22c55e",
  text: "#f59e0b",
  shape: "#8b5cf6",
  adjustment: "#6b7280",
  composition: "#3b82f6",
  audio: "#ec4899",
  gap: "#111827"
}, kp = 56, Sc = 8, Fu = 280, ju = 158, Cp = 2, Mp = 60, kc = 1 / 60;
let Rp = 0, Pp = 0, lo = null;
function Ip() {
  return lo || (lo = new _l()), lo;
}
function Nu(e, t) {
  const [s, a] = n.useState(null), o = Ol(), i = n.useRef(null);
  return n.useEffect(() => {
    let c = !1;
    const l = `${e ?? "none"}:${t ? "proxy" : "source"}`;
    if (i.current !== l && (i.current = l, a(null)), !e)
      return () => {
        c = !0;
      };
    if (t) {
      const u = $o(e);
      if (u)
        return a(u), () => {
          c = !0;
        };
    }
    return hn(e).then((u) => {
      c || a(u || null);
    }).catch(() => {
      c || a(null);
    }), () => {
      c = !0;
    };
  }, [e, t, o]), s;
}
function bs({ leftPanel: e, rightPanel: t }) {
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
  const i = Math.max((a.width - Sc) / 2, 1), c = a.height - kp, l = i / Zn(e.item), u = i / Zn(t.item), d = Math.max(1, Math.min(Math.max(l, u), c));
  return /* @__PURE__ */ r.jsxs("div", { ref: s, className: "absolute inset-0 z-30 bg-black flex items-center", style: { gap: Sc }, children: [
    /* @__PURE__ */ r.jsx(
      Cc,
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
      Cc,
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
function Cc({
  item: e,
  sourceTime: t,
  timecode: s,
  label: a,
  areaHeight: o,
  panelWidth: i,
  placeholderText: c
}) {
  const l = Zn(e), { mediaWidth: u, mediaHeight: d } = Tu(i, o, l);
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
            children: Eu(e, t, c, {
              renderVideo: (f, m) => /* @__PURE__ */ r.jsx(ti, { item: f, sourceTime: m }),
              renderImage: (f) => /* @__PURE__ */ r.jsx(ri, { item: f }),
              renderPlaceholder: (f, m) => /* @__PURE__ */ r.jsx(ni, { type: f, text: m })
            })
          }
        )
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "text-lg font-mono text-white/90 tabular-nums pt-1", children: s })
  ] });
}
function Tp({ item: e, sourceTime: t }) {
  const [s, a] = n.useState(!1);
  n.useEffect(() => {
    a(!1);
  }, [e.id, e.mediaId]);
  const o = n.useCallback(() => {
    a((i) => i || !0);
  }, []);
  return s ? /* @__PURE__ */ r.jsx(jp, { item: e, sourceTime: t }) : /* @__PURE__ */ r.jsx(
    Fp,
    {
      item: e,
      sourceTime: t,
      onDecodeFailure: o
    }
  );
}
function Ep(e) {
  return Math.round(e / kc) * kc;
}
function Fp({
  item: e,
  sourceTime: t,
  onDecodeFailure: s
}) {
  const a = n.useRef(null), o = n.useRef(Ip()), i = n.useRef(`edit-preview-strict-${++Pp}`), c = n.useRef(null), l = n.useRef(!0), u = n.useRef(!1), d = n.useRef(!1), f = n.useRef(null), m = n.useRef(0), b = n.useRef(Math.max(0, t)), h = ne((O) => O.useProxy), x = Nu(e.mediaId, h), v = n.useRef(null), S = `${e.id}:${i.current}`, y = n.useRef(/* @__PURE__ */ new Map()), w = n.useRef([]);
  n.useEffect(() => (l.current = !0, () => {
    l.current = !1;
    for (const O of y.current.values())
      O.close();
    y.current.clear();
  }), []);
  const k = n.useCallback(async (O) => {
    const L = c.current, I = a.current;
    if (!L || !I) return !1;
    let j = v.current;
    if (!j) {
      if (j = I.getContext("2d"), !j) return !1;
      v.current = j;
    }
    const { width: P, height: T } = L.getDimensions(), F = Math.max(1, Math.round(P || Fu)), E = Math.max(1, Math.round(T || ju));
    (I.width !== F || I.height !== E) && (I.width = F, I.height = E);
    const N = Ep(O), z = y.current, M = w.current, q = z.get(N);
    if (q) {
      j.drawImage(q, 0, 0, I.width, I.height);
      const X = M.indexOf(N);
      return X !== -1 && (M.splice(X, 1), M.push(N)), !0;
    }
    if (!await L.drawFrame(j, Math.max(0, O), 0, 0, I.width, I.height)) return !1;
    try {
      const X = await createImageBitmap(I);
      for (z.set(N, X), M.push(N); M.length > Mp; ) {
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
          if (f.current = null, await k(L).catch(() => !1)) {
            m.current = 0;
            continue;
          }
          if ((c.current?.getLastFailureKind() ?? "decode-error") === "decode-error" && (m.current += 1, m.current >= Cp)) {
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
  }, [k, s]);
  return n.useEffect(() => {
    u.current = !1, c.current = null, f.current = null, m.current = 0, v.current = null;
    for (const j of y.current.values())
      j.close();
    if (y.current.clear(), w.current.length = 0, !x) return;
    const O = o.current, L = O.getOrCreateItemExtractor(S, x);
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
      I = !0, u.current = !1, c.current = null, f.current = null, O.releaseItem(S);
    };
  }, [x, S, s, R]), n.useEffect(() => {
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
function jp({ item: e, sourceTime: t }) {
  const s = n.useRef(null), a = n.useRef(fa()), o = n.useRef(`edit-preview-${++Rp}`), i = n.useRef(null), c = ne((x) => x.useProxy), l = Nu(e.mediaId, c), u = n.useRef(null), d = n.useRef(!1), f = n.useRef(null), m = n.useRef(0), b = n.useCallback(() => {
    const x = i.current, v = s.current;
    if (!x || !v || x.readyState < 2) return;
    let S = u.current;
    if (!S) {
      if (S = v.getContext("2d"), !S) return;
      u.current = S;
    }
    (v.width !== x.videoWidth || v.height !== x.videoHeight) && (v.width = x.videoWidth || Fu, v.height = x.videoHeight || ju), S.drawImage(x, 0, 0, v.width, v.height);
  }, []), h = n.useCallback((x) => {
    const v = i.current;
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
  return n.useEffect(() => {
    if (!l) return;
    const x = a.current, v = o.current;
    d.current = !1, f.current = null, x.preloadSource(l).catch(() => {
    });
    const S = x.acquireForClip(v, l);
    if (!S) return;
    S.preload = "auto", S.muted = !0, S.playsInline = !0, i.current = S;
    const y = () => {
      if (d.current = !1, b(), f.current !== null) {
        const k = f.current;
        f.current = null, h(k);
      }
    }, w = () => {
      Math.abs(S.currentTime - m.current) < 1e-3 && b();
    };
    return S.addEventListener("seeked", y), S.addEventListener("loadeddata", w), () => {
      S.removeEventListener("seeked", y), S.removeEventListener("loadeddata", w), S.pause(), i.current = null, d.current = !1, f.current = null, x.releaseClip(v);
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
const Np = (e, t) => e.sourceTime === t.sourceTime && e.item.id === t.item.id && e.item.mediaId === t.item.mediaId, ti = n.memo(Tp, Np);
function Ap({ item: e }) {
  const t = n.useRef(null), [s, a] = n.useState(null);
  return n.useEffect(() => {
    let o = !1;
    if (e.mediaId)
      return hn(e.mediaId).then((i) => {
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
const Dp = (e, t) => e.item.id === t.item.id && e.item.mediaId === t.item.mediaId, ri = n.memo(Ap, Dp);
function ni({ type: e, text: t }) {
  const s = Sp[e] ?? "#6b7280";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "w-full h-full flex items-center justify-center",
      style: { backgroundColor: s },
      children: /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium text-white/90 uppercase tracking-wide", children: t })
    }
  );
}
function br(e, t, s) {
  const a = e.sourceFps ?? s, o = e.speed ?? 1, i = e.sourceStart ?? 0, c = jd(
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
    timecode: Ll(l, a)
  };
}
function Op({ fps: e }) {
  const t = gs((S) => S.trimmedItemId), s = gs((S) => S.neighborItemId), a = gs((S) => S.handle), o = gs((S) => S.neighborDelta), i = ke((S) => S.items), c = n.useMemo(() => new Map(i.map((S) => [S.id, S])), [i]);
  if (!t || !s || !a) return null;
  const l = c.get(t), u = c.get(s);
  if (!l || !u) return null;
  const d = a === "end" ? l : u, f = a === "end" ? u : l, m = a === "end" ? d.from + d.durationInFrames + o : f.from + o, b = Math.max(0, m - d.from - 1), h = Math.max(0, m - f.from), x = br(d, b, e), v = br(f, h, e);
  return /* @__PURE__ */ r.jsx(
    bs,
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
function _p(e, t) {
  if (t.length === 0) return null;
  const s = e.from + e.durationInFrames;
  let a = null, o = Number.POSITIVE_INFINITY;
  for (const i of t) {
    const c = Math.abs(i.from - s);
    (c < o || c === o && a && i.from < a.from) && (a = i, o = c);
  }
  return a;
}
function Lp(e, t) {
  let s = null, a = -1 / 0;
  for (const o of t) {
    if (o.id === e.id) continue;
    const i = o.from + o.durationInFrames;
    i <= e.from && i > a && (s = o, a = i);
  }
  return s;
}
function Bp({ fps: e }) {
  const t = kn((k) => k.trimmedItemId), s = kn((k) => k.handle), a = kn((k) => k.trackId), o = kn((k) => k.downstreamItemIds), i = kn((k) => k.delta), c = kn((k) => k.trimDelta), l = ke((k) => k.items), u = n.useMemo(() => new Map(l.map((k) => [k.id, k])), [l]), d = t ? u.get(t) ?? null : null, f = n.useMemo(
    () => l.filter((k) => o.has(k.id)),
    [l, o]
  ), m = n.useMemo(
    () => d && s === "end" ? _p(d, f) : null,
    [d, s, f]
  ), b = n.useMemo(
    () => a ? l.filter((k) => k.trackId === a) : [],
    [l, a]
  ), h = n.useMemo(
    () => d && s === "start" ? Lp(d, b) : null,
    [d, s, b]
  );
  if (!d || !s) return null;
  if (s === "end") {
    const k = d.from + d.durationInFrames + i, R = Math.max(0, k - d.from - 1), O = br(d, R, e), L = k, I = m ? m.from + i : 1 / 0;
    if (!m || I > L)
      return /* @__PURE__ */ r.jsx(
        bs,
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
      bs,
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
  const x = br(d, c, e), v = h ? h.from + h.durationInFrames : -1 / 0;
  if (!h || v < d.from)
    return /* @__PURE__ */ r.jsx(
      bs,
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
    bs,
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
const Hp = 56, Mc = 8, Up = 0.22;
function Au({
  leftPanel: e,
  rightPanel: t,
  topLeftCorner: s,
  topRightCorner: a
}) {
  const o = n.useRef(null), [i, c] = n.useState({ width: 0, height: 0 });
  if (n.useEffect(() => {
    const x = o.current;
    if (!x) return;
    const v = new ResizeObserver(([S]) => {
      if (!S) return;
      const { width: y, height: w } = S.contentRect;
      c(
        (k) => k.width === y && k.height === w ? k : { width: y, height: w }
      );
    });
    return v.observe(x), () => v.disconnect();
  }, []), i.width <= 0 || i.height <= 0)
    return /* @__PURE__ */ r.jsx("div", { ref: o, className: "absolute inset-0 z-30 bg-black" });
  const l = Math.max((i.width - Mc) / 2, 1), u = i.height - Hp, d = l / Zn(e.item), f = l / Zn(t.item), m = Math.max(
    1,
    Math.min(Math.max(d, f), u)
  ), b = Math.max(l * Up, 1), h = Math.max(b / (16 / 9), 1);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: o,
      className: "absolute inset-0 z-30 bg-black flex items-center",
      style: { gap: Mc },
      children: [
        s?.item && /* @__PURE__ */ r.jsx(
          Pc,
          {
            item: s.item,
            sourceTime: s.sourceTime,
            width: b,
            height: h,
            position: "top-left"
          }
        ),
        a?.item && /* @__PURE__ */ r.jsx(
          Pc,
          {
            item: a.item,
            sourceTime: a.sourceTime,
            width: b,
            height: h,
            position: "top-right"
          }
        ),
        /* @__PURE__ */ r.jsx(Rc, { data: e, areaHeight: m, panelWidth: l }),
        /* @__PURE__ */ r.jsx(Rc, { data: t, areaHeight: m, panelWidth: l })
      ]
    }
  );
}
function Rc({ data: e, areaHeight: t, panelWidth: s }) {
  const a = Zn(e.item), { mediaWidth: o, mediaHeight: i } = Tu(s, t, a);
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
            children: Eu(e.item, e.sourceTime, e.placeholderText, {
              renderVideo: (c, l) => /* @__PURE__ */ r.jsx(ti, { item: c, sourceTime: l }),
              renderImage: (c) => /* @__PURE__ */ r.jsx(ri, { item: c }),
              renderPlaceholder: (c, l) => /* @__PURE__ */ r.jsx(ni, { type: c, text: l })
            })
          }
        )
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "text-lg font-mono text-white/90 tabular-nums pt-1", children: e.timecode })
  ] });
}
function Pc({ item: e, sourceTime: t, width: s, height: a, position: o }) {
  const i = e.type === "video", c = e.type === "image", l = o === "top-left" ? "left-2 top-2" : "right-2 top-2";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `absolute ${l} z-40 overflow-hidden border border-white/20 rounded-sm shadow-lg`,
      style: { width: s, height: a },
      children: i ? /* @__PURE__ */ r.jsx(ti, { item: e, sourceTime: t ?? 0 }) : c ? /* @__PURE__ */ r.jsx(ri, { item: e }) : /* @__PURE__ */ r.jsx(ni, { type: e.type, text: e.type })
    }
  );
}
function Gp({ fps: e }) {
  const t = Io((b) => b.itemId), s = Io((b) => b.slipDelta), a = ke((b) => b.items), o = n.useMemo(() => new Map(a.map((b) => [b.id, b])), [a]), i = t ? o.get(t) ?? null : null;
  if (!i) return null;
  const c = Math.max(0, i.durationInFrames - 1), l = br(i, 0, e), u = br(i, c, e), d = {
    ...i,
    sourceStart: (i.sourceStart ?? 0) + s,
    sourceEnd: i.sourceEnd !== void 0 ? i.sourceEnd + s : void 0
  }, f = br(d, 0, e), m = br(d, c, e);
  return /* @__PURE__ */ r.jsx(
    Au,
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
function Vp({ fps: e }) {
  const t = xs((x) => x.itemId), s = xs((x) => x.leftNeighborId), a = xs((x) => x.rightNeighborId), o = xs((x) => x.slideDelta), i = ke((x) => x.items), c = n.useMemo(() => new Map(i.map((x) => [x.id, x])), [i]);
  if (!t || !c.get(t)) return null;
  const u = s ? c.get(s) ?? null : null, d = a ? c.get(a) ?? null : null, f = u ? (() => {
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
    Au,
    {
      leftPanel: b,
      rightPanel: h,
      topLeftCorner: f,
      topRightCorner: m
    }
  );
}
function Wp({
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
function zp(e, t = {}) {
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
function $p(e, t, s, a = 0) {
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
function Vn(e) {
  return e.isPlaying ? "playing" : e.isGizmoInteracting ? "gizmo_dragging" : e.previewFrame !== null ? "scrubbing" : "paused";
}
function ca(e, t) {
  return e === "scrubbing" && t.previewFrame !== null ? t.previewFrame : t.currentFrame;
}
function Kp(e) {
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
const Yp = 1.5;
function qp(e, t, s = Yp) {
  if (e <= 0) return !1;
  const a = Math.max(8, Math.round(t * s));
  return e <= a;
}
function Xp(e) {
  return e.interactionMode === "scrubbing" && e.prevInteractionMode !== "scrubbing" ? "scrub_enter" : e.interactionMode !== "playing" && e.interactionMode !== "scrubbing" && e.currentFrame !== e.prevCurrentFrame && qp(
    Math.abs(e.currentFrame - e.prevCurrentFrame),
    e.fps
  ) ? "paused_short_seek" : "none";
}
function Zp({
  interactionMode: e,
  previewFrameChanged: t
}) {
  return !!(e === "gizmo_dragging" || e === "scrubbing" && t);
}
function Ic(e) {
  const t = Vn({
    isPlaying: e.isPlaying,
    previewFrame: e.previewFrame,
    isGizmoInteracting: e.isGizmoInteracting
  }), s = ca(t, {
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
function Ao(e) {
  const t = Ic(e.prev), s = Ic(e.next), a = s.currentFrame !== t.currentFrame, o = s.previewFrame !== t.previewFrame, i = typeof e.fps == "number" ? Xp({
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
    shouldSkipCurrentFrameSeek: Zp({
      interactionMode: s.mode,
      previewFrameChanged: o
    }),
    preloadBurstTrigger: i
  };
}
function Jp(e) {
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
function Qp(e, t, s) {
  return e.length < s ? [...e, t] : [...e.slice(e.length - s + 1), t];
}
const eg = {
  emaAlpha: 0.2,
  degradeThresholdRatio: 1.2,
  recoverThresholdRatio: 0.85,
  degradeSamples: 10,
  recoverSamples: 36,
  changeCooldownMs: 1200
};
function tg(e) {
  return e === 1 ? 0.5 : e === 0.5 ? 0.33 : 0.25;
}
function rg(e) {
  return e === 0.25 ? 0.33 : e === 0.33 ? 0.5 : 1;
}
function Tc(e = 1) {
  return {
    qualityCap: e,
    frameTimeEmaMs: 0,
    overBudgetSamples: 0,
    underBudgetSamples: 0,
    lastQualityChangeAtMs: 0
  };
}
function ng(e, t) {
  return e <= t ? e : t;
}
function sg(e, t) {
  const s = Number.isFinite(e) && e > 0 ? e : 30, a = Number.isFinite(t) && t > 0 ? t : 1;
  return 1e3 / Math.max(1, s * a);
}
function ag({
  state: e,
  sampleMsPerFrame: t,
  frameBudgetMs: s,
  userQuality: a,
  nowMs: o,
  allowRecovery: i = !0,
  options: c
}) {
  const l = { ...eg, ...c }, u = Math.max(0, t), d = e.frameTimeEmaMs === 0 ? u : e.frameTimeEmaMs + (u - e.frameTimeEmaMs) * l.emaAlpha, f = s * l.degradeThresholdRatio, m = s * l.recoverThresholdRatio;
  let b = e.overBudgetSamples, h = e.underBudgetSamples;
  d > f ? (b += 1, h = 0) : d < m ? (h += 1, b = 0) : (b = 0, h = 0);
  let x = e.qualityCap, v = null, S = e.lastQualityChangeAtMs;
  const y = o - e.lastQualityChangeAtMs >= l.changeCooldownMs, w = ng(a, x);
  if (y && b >= l.degradeSamples && w > 0.25)
    x = tg(w), v = "degrade", S = o, b = 0, h = 0;
  else if (i && y && h >= l.recoverSamples && x < a) {
    const k = rg(x);
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
function og(e, t) {
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
function ig(e, t) {
  if (e.length === 0)
    return !1;
  const s = /* @__PURE__ */ new Map();
  for (const a of t)
    s.set(a.itemId, a);
  return e.some((a) => og(a, s));
}
function Du(e, t, s, a) {
  return Number.isFinite(s) ? e.some(
    (o) => s >= o.from && s < o.from + o.durationInFrames && ((a?.get(o.id) ?? o.effects)?.some(
      (i) => i.enabled && i.effect.type === "gpu-effect"
    ) || o.blendMode && o.blendMode !== "normal")
  ) : !1;
}
function cg(...e) {
  const [t, s] = n.useState(!1);
  return n.useEffect(() => {
    const a = () => {
      const u = Jt.getState().items, d = vs.getState().transitions, f = ne.getState(), m = f.previewFrame ?? f.currentFrame, b = Xe.getState().preview, h = b ? new Map(
        Object.entries(b).filter(([, x]) => Array.isArray(x.effects)).map(([x, v]) => [x, v.effects])
      ) : void 0;
      s((x) => {
        const v = Du(
          u,
          d.length,
          m,
          h
        );
        return x === v ? x : v;
      });
    };
    a();
    const o = Jt.subscribe(a), i = vs.subscribe(a), c = Xe.subscribe((u, d) => {
      u.preview !== d.preview && a();
    }), l = ne.subscribe((u, d) => {
      u.currentFrame === d.currentFrame && u.previewFrame === d.previewFrame || a();
    });
    return () => {
      o(), i(), c(), l();
    };
  }, []), t;
}
const Ec = 5, lg = 10, ug = 6, dg = 3, Fc = 6, fg = 1, mg = 4, hg = 1, pg = 24, gg = 12, xg = 3, bg = 180, vg = 0.5, yg = 256, wg = 96, Sg = 1, kg = 2, Cg = 2, Mg = 6, Rg = 6, Pg = !0, Ig = 3, Tg = 2, Eg = 0, Fg = 1, jg = 24, Ng = 24, jc = 2, Ag = 8, Nc = 16, Dg = 200, Og = 20, Ac = 2, _g = 8, Lg = 8, Bg = 3, Hg = 20, Dc = 24, Ug = 40, Gg = 4, Oc = 2500, Vg = 300, Wg = 400, zg = 8e3, $g = 6, Kg = 12, Yg = 8, qg = 4, Xg = 120, Zg = 6;
function Jg(e) {
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
function _c(e) {
  return e === "scrubbing" ? dg : e === "playing" ? lg : ug;
}
function Qg(e) {
  return e === "scrubbing" ? qg : e === "playing" ? Kg : Yg;
}
function uo(e) {
  if (!e) return 0;
  const t = e.toLowerCase();
  return t.includes("ec-3") || t.includes("eac3") || t.includes("ac-3") || t.includes("ac3") ? 5 : t.includes("avc") || t.includes("h264") ? 2 : t.includes("hevc") || t.includes("h265") ? 3 : 1;
}
function e0(e) {
  if (!e) return 1;
  let t = 1;
  if (e.mimeType.startsWith("video/")) {
    const s = Math.max(0, e.width) * Math.max(0, e.height);
    s >= 3840 * 2160 ? t += 6 : s >= 2560 * 1440 ? t += 4 : s >= 1920 * 1080 ? t += 3 : s >= 1280 * 720 && (t += 2), t += uo(e.codec), t += uo(e.audioCodec);
  } else e.mimeType.startsWith("audio/") && (t += uo(e.audioCodec));
  return Math.max(1, t);
}
function Lc(e, t) {
  return t >= 10 ? Math.max(1, e - 5) : t >= 7 ? Math.max(1, e - 3) : t >= 4 ? Math.max(1, e - 1) : e;
}
function t0(e, t, s) {
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
function Ou(e, t) {
  return t > e ? 1 : t < e ? -1 : 0;
}
async function Bc(e) {
  return new Promise((t, s) => {
    const a = new FileReader();
    a.onload = () => {
      typeof a.result == "string" ? t(a.result) : s(new Error("Invalid data URL result"));
    }, a.onerror = () => s(a.error ?? new Error("Failed to read blob")), a.readAsDataURL(e);
  });
}
const Hc = ka("useCustomPlayer");
function r0(e, t, s, a, o) {
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
    } catch (k) {
      Hc.error("Failed to seek Player:", k);
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
        const { currentFrame: w, setPreviewFrame: k } = ne.getState(), R = x();
        if ((R === null || Math.abs(R - w) > 1) && (b.current = !0, o?.(w), e.current.seekTo(w), u.current = w, d.current = w), k(null), !ne.getState().isPlaying) {
          b.current = !1;
          return;
        }
        e.current?.play(), b.current = !1;
        return;
      } else !i && y && e.current.pause();
    } catch (w) {
      Hc.error("Failed to control playback:", w);
    }
  }, [i, e, x, o]);
  const S = Wo((y) => y.isTimelineLoading);
  return n.useEffect(() => {
    if (!c || !e.current || S) return;
    const y = ne.getState().currentFrame, w = x();
    return u.current = y, d.current = y, w !== y && o?.(y), e.current.seekTo(y), ne.subscribe((R, O) => {
      if (!e.current) return;
      const L = Ao({
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
  }, [c, S, e, x, v, a, o]), n.useEffect(() => {
    if (!(!c || !e.current))
      return ne.subscribe((y, w) => {
        if (!e.current) return;
        const k = Ao({
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
        if (!s?.current && R === "scrubbing" && y.previewFrame !== null && y.currentFrame === y.previewFrame && y.currentFrameEpoch === y.previewFrameEpoch) {
          f.current = 0, m.current = null;
          return;
        }
        const L = k.next.anchorFrame;
        if ((R === "scrubbing" ? Ou(k.prev.anchorFrame, k.next.anchorFrame) : 0) < 0) {
          const j = performance.now(), P = Math.floor(
            L / Ac
          ) * Ac, T = m.current, F = j - f.current < Og, E = T === null ? Number.POSITIVE_INFINITY : Math.abs(P - T);
          if (F && E < _g)
            return;
          f.current = j, m.current = P, v(P);
          return;
        }
        f.current = 0, m.current = null, v(L);
      });
  }, [c, e, v, t, s, a]), { ignorePlayerUpdatesRef: b };
}
const Uc = /* @__PURE__ */ new WeakMap();
function Jn(e) {
  if (e === null)
    return "null";
  if (typeof e !== "object")
    return JSON.stringify(e);
  const s = e, a = Uc.get(s);
  if (a !== void 0)
    return a;
  let o;
  if (Array.isArray(e))
    o = `[${e.map((i) => Jn(i)).join(",")}]`;
  else {
    const i = e;
    o = `{${Object.keys(i).filter((l) => i[l] !== void 0).sort().map((l) => `${JSON.stringify(l)}:${Jn(i[l])}`).join(",")}}`;
  }
  return Uc.set(s, o), o;
}
function _u(e, t) {
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
    if (i !== c && Jn(i) !== Jn(c))
      return !1;
  }
  return !0;
}
function n0(e, t) {
  const s = Qn(e), a = Qn(t);
  if (s.size !== a.size)
    return !1;
  for (const [o, i] of s)
    if (a.get(o) !== i)
      return !1;
  return !0;
}
function Qn(e) {
  const t = /* @__PURE__ */ new Map();
  for (const s of e)
    for (const a of s.items)
      t.set(a.id, a);
  return t;
}
function Gc(e) {
  return !e || e.length === 0 ? /* @__PURE__ */ new Map() : new Map(e.map((t) => [t.itemId, t]));
}
function Vc(e) {
  if (!e) return null;
  const t = Math.trunc(e.from), s = Math.trunc(e.from + e.durationInFrames);
  return !Number.isFinite(t) || !Number.isFinite(s) || s <= t ? null : { startFrame: t, endFrame: s };
}
function s0({
  previousTracks: e,
  nextTracks: t,
  previousKeyframes: s,
  nextKeyframes: a
}) {
  if (e === t && s === a)
    return [];
  const o = Qn(e), i = Qn(t), c = Gc(s), l = Gc(a), u = /* @__PURE__ */ new Set();
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
    const m = Vc(o.get(f));
    m && d.push(m);
    const b = Vc(i.get(f));
    b && d.push(b);
  }
  return Nd(d);
}
function a0(e) {
  const t = { ...e };
  for (const s of ["effects", "waveformData"]) {
    const a = t[s];
    Array.isArray(a) && a.length === 0 && delete t[s];
  }
  return t;
}
function Wc(e) {
  const { text: t, label: s, ...a } = e;
  return a0(a);
}
function o0(e, t) {
  return Jn(Wc(e)) === Jn(Wc(t));
}
function i0(e, t, s, a) {
  if (e === t && s === a)
    return { ok: !1, reason: "same_refs" };
  const o = Qn(e), i = Qn(t);
  if (!_u(s, a))
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
    if (!o0(u, d))
      return { ok: !1, reason: "text_body_mismatch_other_fields" };
  }
  return { ok: !0 };
}
function c0(e, t, s, a) {
  return i0(
    e,
    t,
    s,
    a
  );
}
const Nr = ka("VideoPreview");
function l0(e, t) {
  return Math.abs(e.left - t.left) < 0.5 && Math.abs(e.top - t.top) < 0.5 && Math.abs(e.width - t.width) < 0.5 && Math.abs(e.height - t.height) < 0.5;
}
const u0 = n.memo(function({
  project: t,
  containerSize: s,
  suspendOverlay: a = !1
}) {
  const o = n.useRef(null), i = n.useRef(null), c = n.useRef(null), l = n.useRef(null), u = n.useRef(null), d = n.useRef(!1), f = n.useRef(!1), m = n.useRef(null), b = n.useRef(null), h = n.useRef(null), x = n.useRef(null), v = n.useRef(null), S = n.useRef(null), y = n.useRef(!1), w = n.useRef(0), k = n.useRef(null), R = n.useRef(null), O = n.useRef(null), L = n.useRef(null), I = n.useRef(!1), j = n.useRef([]), P = n.useRef(/* @__PURE__ */ new Set()), T = n.useRef([]), F = n.useRef(/* @__PURE__ */ new Set()), E = n.useRef(/* @__PURE__ */ new Set()), N = n.useRef([]), z = n.useRef(/* @__PURE__ */ new Map()), M = n.useRef(null), q = n.useRef(null), V = n.useRef(null), X = n.useRef(null), D = n.useRef(null), W = n.useRef(null), Y = n.useRef(/* @__PURE__ */ new Map()), pe = n.useRef(/* @__PURE__ */ new Map()), C = n.useRef(/* @__PURE__ */ new Map()), B = n.useRef(/* @__PURE__ */ new Map()), U = n.useRef(null), J = n.useRef(null), re = n.useRef(null), me = n.useRef(null), xe = n.useRef(null), ye = n.useRef(0), Re = n.useRef(!1), Be = n.useRef(!1), Fe = n.useRef(0), De = n.useRef(0), Qe = n.useRef(0), je = n.useRef(null), ee = n.useRef(null), Ge = n.useRef(0), H = n.useRef(null), ue = n.useRef(() => {
  }), Ce = n.useRef(!0), [Ve, Me] = n.useState(!1), [_, he] = n.useState(!1), et = n.useRef(!1), Ye = n.useRef(!1), $e = n.useRef("player"), ct = n.useRef(0), pt = n.useRef([]);
  n.useRef(null), n.useRef({
    samples: 0,
    totalMs: 0,
    lastMs: 0,
    timeouts: 0
  });
  const [Vt, yr] = n.useState(!1), [Bt, _r] = n.useState(null), hr = n.useRef(null), wr = n.useRef({
    sessionCount: 0,
    lastPrepareMs: 0,
    lastReadyLeadMs: 0,
    lastEntryMisses: 0,
    lastSessionDurationMs: 0
  }), Lr = n.useRef(null), Sr = n.useRef(null), At = n.useCallback((p, A = {}) => {
  }, []), [Ue, Pt] = n.useState(null), zt = n.useCallback((p) => {
    i.current = p;
  }, []), Pe = Wo((p) => p.fps), er = Jt((p) => p.tracks), Yt = mn((p) => p.keyframes), Ht = Jt((p) => p.items), or = Jt((p) => p.itemsByTrackId), Rr = ls((p) => p.mediaDependencyVersion), Ut = vs((p) => p.transitions), Tn = Qt((p) => p.mediaById), Yr = gs(
    (p) => !!(p.trimmedItemId && p.neighborItemId && p.handle)
  ), en = kn((p) => !!(p.trimmedItemId && p.handle)), gn = Io((p) => !!p.itemId), Fr = xs((p) => !!p.itemId), En = Xe((p) => p.activeGizmo?.itemId ?? null), tn = Xe((p) => p.activeGizmo !== null), Is = ze((p) => p.isEditing), Ts = ne((p) => p.isPlaying), Ea = cg(u, i, x, d), jr = ne((p) => p.zoom), Es = ne((p) => p.useProxy), g = Qt((p) => {
    let A = 0;
    for (const $ of p.proxyStatus.values())
      $ === "ready" && A++;
    return A;
  }), G = n.useMemo(
    () => En ? Ht.find((p) => p.id === En)?.type ?? null : null,
    [En, Ht]
  ), te = n.useRef(tn);
  te.current = tn;
  const oe = n.useRef(!1), K = n.useRef(!1), Z = n.useRef(Tc(1)), ie = n.useRef(null), [Ie, Te] = n.useState(1), Ze = n.useCallback((p) => oe.current || K.current && p !== null, []), ot = n.useCallback((p) => {
  }, []), ht = n.useCallback((p) => {
  }, []), at = n.useCallback(() => {
    ee.current = null, Ge.current = 0, H.current !== null && (cancelAnimationFrame(H.current), H.current = null);
  }, []), st = n.useCallback(() => {
    at(), et.current = !1, Me(!1), f.current = !1;
  }, [at]), rt = n.useCallback(() => {
    Ye.current = !1, he(!1);
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
        if (performance.now() - Ge.current >= Dg) {
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
    ee.current = p, Ge.current = performance.now(), ft();
  }, [ft]), Pr = n.useCallback(() => {
    at(), Ye.current = !1, he(!1), et.current = !0, Me(!0), f.current = !0;
  }, [at]), Br = n.useCallback(() => {
    at(), et.current = !1, Me(!1), Ye.current = !0, he(!0), f.current = !1;
  }, [at]), { ignorePlayerUpdatesRef: xn } = r0(
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
    if (te.current = tn, !tn) return;
    const p = ne.getState();
    p.previewFrame !== null && (p.currentFrame !== p.previewFrame && p.setCurrentFrame(p.previewFrame), p.setPreviewFrame(null));
  }, [tn]), n.useEffect(() => {
    if (Ts) {
      ie.current = null;
      return;
    }
    ie.current = null, Z.current = Tc(1), Ie !== 1 && Te(1);
  }, [Ie, Ts]);
  const Hr = ne((p) => p.setCaptureFrame), bn = ne((p) => p.setCaptureFrameImageData), qr = ne((p) => p.setDisplayedFrame), [pr, Ur] = n.useState(/* @__PURE__ */ new Map()), li = Ol(), [Ir, Ft] = n.useState(!1), [Fa, Fs] = n.useState(0), [ts, ui] = n.useState(0), Fn = n.useRef([]), jn = n.useRef(/* @__PURE__ */ new Set()), Xu = n.useRef(/* @__PURE__ */ new Map()), ja = n.useRef(!1), rn = n.useRef(0), rs = n.useRef(0), ns = n.useRef(0), di = n.useRef(null), Nn = n.useRef(/* @__PURE__ */ new Map()), An = n.useRef(/* @__PURE__ */ new Map()), nn = n.useRef(null), Na = n.useRef(!1), nt = n.useRef({
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
  }), fi = n.useRef(-1), Aa = Ve || _;
  n.useEffect(() => {
    et.current = Ve, Ye.current = _;
    const p = Ve ? "fast_scrub_overlay" : _ ? "playback_transition_overlay" : "player", A = $e.current;
    A !== p && (ct.current += 1, pt.current = Qp(
      pt.current,
      {
        ts: Date.now(),
        atFrame: ne.getState().currentFrame,
        from: A,
        to: p
      },
      Zg
    )), $e.current = p;
  }, [Ve, _]), n.useEffect(() => {
    Aa || qr(null);
  }, [Aa, qr]);
  const ss = n.useCallback((p) => {
    const A = ls.getState().mediaIds, $ = /* @__PURE__ */ new Set();
    for (const ae of A)
      p.has(ae) || $.add(ae);
    return jn.current = $, Fn.current = [...$], Fn.current;
  }, []), js = n.useCallback((p) => {
    if (p.length === 0) return;
    const A = ls.getState().mediaIds, $ = new Set(A), ae = jn.current;
    let se = !1;
    for (const we of p)
      $.has(we) && (ae.has(we) || (ae.add(we), se = !0));
    se && (Fn.current = [...ae]);
  }, []), Ns = n.useCallback((p) => {
    if (p.length === 0) return;
    const A = jn.current;
    let $ = !1;
    for (const ae of p)
      A.delete(ae) && ($ = !0);
    $ && (Fn.current = [...A]);
  }, []), sn = n.useCallback((p) => {
    if (p.length !== 0)
      for (const A of p)
        Nn.current.delete(A), An.current.delete(A);
  }, []), mi = n.useCallback((p) => {
    for (const A of Nn.current.keys())
      p.has(A) || Nn.current.delete(A);
    for (const A of An.current.keys())
      p.has(A) || An.current.delete(A);
  }, []), As = n.useCallback((p) => {
    if (p.length === 0) return null;
    const A = Date.now();
    let $ = null;
    for (const ae of p) {
      const se = (Nn.current.get(ae) ?? 0) + 1;
      Nn.current.set(ae, se);
      const we = Math.min(se - 1, 6), Ae = Math.min(
        zg,
        Wg * Math.pow(2, we)
      ), Se = A + Ae;
      An.current.set(ae, Se), ($ === null || Se < $) && ($ = Se);
    }
    return $;
  }, []), as = n.useCallback((p) => An.current.get(p) ?? 0, []), Xr = n.useCallback((p) => {
    if (nn.current && (clearTimeout(nn.current), nn.current = null), p === null) return;
    const A = Math.max(0, p - Date.now());
    nn.current = setTimeout(() => {
      nn.current = null, ui(($) => $ + 1);
    }, A);
  }, []), Dn = n.useCallback(() => {
    Nn.current.clear(), An.current.clear(), nn.current && (clearTimeout(nn.current), nn.current = null);
  }, []), os = n.useCallback(() => {
    Na.current || ui((p) => p + 1);
  }, []), hi = n.useCallback((p) => {
    const A = Xu.current, $ = A.get(p);
    if ($)
      return $;
    const ae = hn(p).then((se) => se ?? null).catch(() => null).finally(() => {
      A.delete(p);
    });
    return A.set(p, ae), ae;
  }, []), Ds = n.useCallback(async (p) => {
    if (p.length === 0)
      return { resolvedEntries: [], failedIds: [] };
    const A = [], $ = [];
    let ae = 0;
    const se = Math.min($g, p.length);
    return await Promise.all(
      Array.from({ length: se }, async () => {
        for (; ; ) {
          const we = ae;
          if (ae += 1, we >= p.length) break;
          const Ae = p[we], Se = await hi(Ae);
          Se ? A.push({ mediaId: Ae, url: Se }) : $.push(Ae);
        }
      })
    ), { resolvedEntries: A, failedIds: $ };
  }, [hi]), jt = n.useMemo(() => Al(er).toSorted((A, $) => $.order - A.order).map((A) => ({
    ...A,
    items: or[A.id] ?? []
  })), [er, or]), On = n.useMemo(() => {
    const p = /* @__PURE__ */ new Map();
    for (const [A, $] of Object.entries(Tn))
      p.set(A, e0($));
    return p;
  }, [Tn]), {
    resolvedTracks: pi,
    fastScrubTracks: gi,
    playbackVideoSourceSpans: xi,
    scrubVideoSourceSpans: bi,
    fastScrubBoundaryFrames: Da,
    fastScrubBoundarySources: Oa,
    fastScrubTracksFingerprint: _a
  } = n.useMemo(() => {
    const p = [], A = [], $ = [], ae = [], se = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map();
    for (const fe of jt) {
      const Ee = [], tt = [];
      for (const Ne of fe.items) {
        if (!Ne.mediaId || Ne.type !== "video" && Ne.type !== "audio" && Ne.type !== "image") {
          Ee.push(Ne), tt.push(Ne);
          continue;
        }
        const lt = pr.get(Ne.mediaId) ?? "", gt = Ne.type === "video" && $o(Ne.mediaId) || lt, Et = Es && Ne.type === "video" ? gt : lt, Wt = Ne.type === "video" ? gt : lt, _t = "src" in Ne && Ne.src === Et ? Ne : { ...Ne, src: Et }, Lt = "src" in Ne && Ne.src === Wt ? Ne : { ...Ne, src: Wt };
        if (Ee.push(_t), tt.push(Lt), _t.type === "video" && Et && $.push({
          src: Et,
          startFrame: _t.from,
          endFrame: _t.from + _t.durationInFrames
        }), Lt.type === "video" && Wt && (ae.push({
          src: Wt,
          startFrame: Lt.from,
          endFrame: Lt.from + Lt.durationInFrames
        }), Lt.durationInFrames > 0)) {
          const rr = Lt.from, Tt = Lt.from + Lt.durationInFrames;
          se.add(rr), se.add(Tt);
          let Q = we.get(rr);
          Q || (Q = /* @__PURE__ */ new Set(), we.set(rr, Q)), Q.add(Wt);
          let de = we.get(Tt);
          de || (de = /* @__PURE__ */ new Set(), we.set(Tt, de)), de.add(Wt);
        }
      }
      p.push({ ...fe, items: Ee }), A.push({ ...fe, items: tt });
    }
    const Ae = [...se].sort((fe, Ee) => fe - Ee), Se = [...we.entries()].map(([fe, Ee]) => ({ frame: fe, srcs: [...Ee] })).sort((fe, Ee) => fe.frame - Ee.frame);
    return {
      resolvedTracks: p,
      fastScrubTracks: A,
      playbackVideoSourceSpans: $,
      scrubVideoSourceSpans: ae,
      fastScrubBoundaryFrames: Ae,
      fastScrubBoundarySources: Se,
      fastScrubTracksFingerprint: Jg(A)
    };
  }, [jt, pr, Es, g]), Zu = Qt((p) => p.brokenMediaIds.length), La = n.useMemo(
    () => Ht.reduce((p, A) => Math.max(p, A.from + A.durationInFrames), 0),
    [Ht]
  ), Ju = n.useMemo(() => La === 0 ? 900 : La + Pe * 5, [La, Pe]), Ba = Qt((p) => p.brokenMediaIds), vi = n.useRef([]);
  n.useEffect(() => {
    const p = vi.current;
    vi.current = Ba;
    const A = p.filter(($) => !Ba.includes($));
    A.length > 0 && (sn(A), js(A), Ur(($) => {
      const ae = new Map($);
      let se = !1;
      for (const we of A)
        ae.delete(we) && (se = !0);
      return se ? ae : $;
    }));
  }, [js, Ba, sn]), n.useEffect(() => {
    if (pr.size === 0)
      return;
    const p = ls.getState().mediaIds;
    if (p.length === 0)
      return;
    const A = new Set(p), $ = [];
    for (const [ae, se] of pr.entries()) {
      if (!A.has(ae)) continue;
      Gi.get(ae) !== se && $.push(ae);
    }
    $.length !== 0 && (sn($), js($), Ur((ae) => {
      const se = new Map(ae);
      let we = !1;
      for (const Ae of $)
        se.delete(Ae) && (we = !0);
      return we ? se : ae;
    }), os());
  }, [
    js,
    li,
    sn,
    os,
    pr
  ]), n.useEffect(() => {
    let p = !1;
    async function A() {
      Na.current = !0;
      try {
        const $ = ls.getState().mediaIds;
        if ($.length === 0) {
          jn.current.clear(), Fn.current = [], Dn(), Ur(/* @__PURE__ */ new Map()), Ft(!1);
          return;
        }
        const ae = new Set($);
        mi(ae);
        let se = pr, we = Fn.current;
        if (fi.current !== Rr) {
          if (fi.current = Rr, pr.size > 0) {
            const le = /* @__PURE__ */ new Map();
            for (const [Oe, ut] of pr.entries())
              ae.has(Oe) && le.set(Oe, ut);
            se = le, le.size !== pr.size && Ur(le);
          }
          we = ss(se);
        } else we.length === 0 && (we = ss(se));
        if (we.length === 0) {
          Xr(null), Ft(!1);
          return;
        }
        const Ae = new Set(we), Se = Date.now();
        let fe = null;
        const Ee = ne.getState(), tt = Vn({
          isPlaying: Ee.isPlaying,
          previewFrame: Ee.previewFrame,
          isGizmoInteracting: te.current
        }), Ne = ca(tt, {
          currentFrame: Ee.currentFrame,
          previewFrame: Ee.previewFrame
        });
        if (tt === "scrubbing" && se.size > 0) {
          Xr(Date.now() + Xg), Ft(!1);
          return;
        }
        const lt = Math.max(12, Math.round(Pe * 0.6)), gt = Math.max(24, Math.round(Pe * Ec)), Et = Ne - gt, Wt = Ne + gt, _t = /* @__PURE__ */ new Map();
        let Lt = 0;
        for (const le of jt)
          for (const Oe of le.items) {
            if (!Oe.mediaId || !Ae.has(Oe.mediaId)) continue;
            const ut = Oe.from + Oe.durationInFrames, Nt = Ne < Oe.from ? Oe.from - Ne : Ne > ut ? Ne - ut : 0, Dt = On.get(Oe.mediaId) ?? 1, Ot = Nt + Dt * lt, dt = _t.get(Oe.mediaId);
            (dt === void 0 || Ot < dt) && _t.set(Oe.mediaId, Ot), ut < Et || Oe.from > Wt || Dt > Lt && (Lt = Dt);
          }
        const rr = [];
        for (const le of we) {
          const Oe = as(le);
          if (Oe > Se) {
            (fe === null || Oe < fe) && (fe = Oe);
            continue;
          }
          const ut = On.get(le) ?? 1, Nt = gt * 4 + ut * lt;
          rr.push({
            mediaId: le,
            score: _t.get(le) ?? Nt
          });
        }
        if (rr.length === 0) {
          Xr(fe), Ft(!1);
          return;
        }
        const Tt = Lc(
          Qg(tt),
          Lt
        ), Q = rr.toSorted((le, Oe) => le.score - Oe.score).slice(0, Tt).map((le) => le.mediaId), de = rr.length > Q.length;
        if (Xr(null), se.size === 0 && (Ft(!0), await new Promise((le) => setTimeout(le, 150))), p) {
          Ft(!1);
          return;
        }
        try {
          const le = new Map(se), Oe = performance.now(), { resolvedEntries: ut, failedIds: Nt } = await Ds(Q), Dt = performance.now() - Oe;
          nt.current.resolveSamples += 1, nt.current.resolveTotalMs += Dt, nt.current.resolveTotalIds += Q.length, nt.current.resolveLastMs = Dt, nt.current.resolveLastIds = Q.length;
          const Ot = ut.map((Mt) => Mt.mediaId);
          for (const Mt of ut)
            le.set(Mt.mediaId, Mt.url);
          sn(Ot);
          const dt = As(Nt);
          dt !== null && Xr(dt), de && Xr(Date.now() + 16), Ns(Ot), p || Ur(le);
        } catch (le) {
          Nr.error("Failed to resolve media URLs:", le);
        } finally {
          Ft(!1);
        }
      } finally {
        Na.current = !1;
      }
    }
    return A(), () => {
      p = !0;
    };
  }, [
    sn,
    jt,
    Pe,
    as,
    As,
    On,
    mi,
    ss,
    Ns,
    Dn,
    Ds,
    ts,
    Xr,
    Rr,
    Zu,
    Fa
  ]), n.useEffect(() => {
  }, []), n.useEffect(() => {
  }, []), n.useEffect(() => {
    const p = fa();
    if (pr.size === 0) {
      p.pruneUnused(/* @__PURE__ */ new Set());
      const Se = p.getStats();
      nt.current.sourceWarmTarget = 0, nt.current.sourceWarmKeep = 0, nt.current.sourcePoolSources = Se.sourceCount, nt.current.sourcePoolElements = Se.totalElements, nt.current.sourcePoolActiveClips = Se.activeClips;
      return;
    }
    const A = /* @__PURE__ */ new Map();
    let $ = null;
    const ae = (Se, fe, Ee, tt, Ne) => {
      const lt = fe - Ee, gt = fe + Ee;
      for (const Et of Se) {
        if (Et.endFrame < lt || Et.startFrame > gt) continue;
        const Wt = fe < Et.startFrame ? Et.startFrame - fe : fe > Et.endFrame ? fe - Et.endFrame : 0, _t = tt + Wt, Lt = Ne.get(Et.src);
        (Lt === void 0 || _t < Lt) && Ne.set(Et.src, _t);
      }
    }, se = () => {
      const Se = performance.now(), fe = ne.getState(), Ee = Vn({
        isPlaying: fe.isPlaying,
        previewFrame: fe.previewFrame,
        isGizmoInteracting: te.current
      }), tt = p.getStats(), Ne = Jp({
        mode: Ee,
        currentPoolSourceCount: tt.sourceCount,
        currentPoolElementCount: tt.totalElements,
        maxSources: Hg,
        minSources: Gg,
        hardCapSources: Dc,
        hardCapElements: Ug
      }), lt = /* @__PURE__ */ new Map(), gt = Math.max(12, Math.round(Pe * Lg)), Et = Math.max(8, Math.round(Pe * Bg));
      ae(
        xi,
        fe.currentFrame,
        gt,
        100,
        lt
      ), Ee === "scrubbing" && fe.previewFrame !== null && ae(
        bi,
        fe.previewFrame,
        Et,
        0,
        lt
      );
      const Wt = [...lt.entries()].sort((de, le) => de[1] - le[1]).slice(0, Ne).map(([de]) => de);
      for (const de of Wt)
        A.set(de, Se), p.preloadSource(de).catch(() => {
        });
      const _t = new Set(Wt), Lt = [...A.entries()].filter(
        ([de, le]) => !_t.has(de) && Se - le <= Oc
      ).sort((de, le) => le[1] - de[1]);
      for (const [de] of Lt) {
        if (_t.size >= Ne) break;
        _t.add(de);
      }
      let rr = 0;
      for (const [de, le] of A.entries())
        Se - le > Oc && (A.delete(de), rr += 1);
      const Tt = Math.max(0, A.size - Dc);
      if (Tt > 0) {
        const de = [...A.entries()].filter(([le]) => !_t.has(le)).sort((le, Oe) => le[1] - Oe[1]);
        for (let le = 0; le < de.length && le < Tt; le++) {
          const [Oe] = de[le];
          A.delete(Oe) && (rr += 1);
        }
      }
      p.pruneUnused(_t);
      const Q = p.getStats();
      nt.current.sourceWarmTarget = Ne, nt.current.sourceWarmKeep = _t.size, nt.current.sourceWarmEvictions += rr, nt.current.sourcePoolSources = Q.sourceCount, nt.current.sourcePoolElements = Q.totalElements, nt.current.sourcePoolActiveClips = Q.activeClips;
    };
    se();
    const we = setInterval(se, Vg), Ae = ne.subscribe((Se, fe) => {
      (Se.currentFrame !== fe.currentFrame || Se.previewFrame !== fe.previewFrame || Se.isPlaying !== fe.isPlaying) && (Se.isPlaying && !fe.isPlaying ? ($ !== null && (cancelAnimationFrame($), $ = null), se()) : ($ !== null && cancelAnimationFrame($), $ = requestAnimationFrame(() => {
        $ = null, se();
      })));
    });
    return () => {
      Ae(), clearInterval(we), $ !== null && cancelAnimationFrame($);
    };
  }, [pr, xi, bi, Pe]);
  const Qu = n.useMemo(() => ({
    fps: Pe,
    width: t.width,
    height: t.height,
    tracks: pi,
    transitions: Ut,
    backgroundColor: t.backgroundColor,
    keyframes: Yt
  }), [Pe, t.width, t.height, pi, Ut, t.backgroundColor, Yt]), an = n.useMemo(() => {
    const p = Math.max(2, t.width), A = Math.max(2, t.height);
    return { width: p, height: A };
  }, [t.width, t.height]), Gr = n.useMemo(() => {
    const p = Math.max(1, Math.round(t.width)), A = Math.max(1, Math.round(t.height));
    return { width: Math.max(2, p), height: Math.max(2, A) };
  }, [t.width, t.height]), Os = n.useCallback((p) => {
    const A = Xe.getState(), $ = A.preview?.[p]?.transform;
    if ($) return $;
    if (A.activeGizmo?.itemId === p && A.previewTransform)
      return A.previewTransform;
  }, []), _s = n.useCallback((p) => Xe.getState().preview?.[p]?.effects, []), Ls = n.useCallback((p) => {
    const A = Er.getState();
    if (A.editingItemId === p && A.previewCornerPin)
      return A.previewCornerPin;
  }, []), Bs = n.useCallback((p) => {
    const A = ze.getState();
    if (A.editingItemId === p && A.previewVertices)
      return A.previewVertices;
  }, []), nr = n.useMemo(() => gi, [
    gi,
    _a
  ]), yi = n.useMemo(() => {
    const p = /* @__PURE__ */ new Map();
    for (const A of nr)
      for (const $ of A.items)
        p.set($.id, $);
    return p;
  }, [nr]), wi = n.useRef(yi);
  wi.current = yi;
  const Si = n.useMemo(() => new Map(Yt.map((p) => [p.itemId, p])), [Yt]), ki = n.useRef(Si);
  ki.current = Si;
  const Hs = n.useCallback((p) => wi.current.get(p), []), Us = n.useCallback((p) => ki.current.get(p), []), Zr = n.useMemo(() => Yt, [
    Yt
  ]), Ha = n.useRef({
    tracks: nr,
    keyframes: Zr
  }), Ci = n.useMemo(() => ({
    fps: Pe,
    width: t.width,
    height: t.height,
    tracks: nr,
    transitions: Ut,
    backgroundColor: t.backgroundColor,
    keyframes: Zr
  }), [
    Pe,
    t.width,
    t.height,
    nr,
    Ut,
    t.backgroundColor,
    Zr
  ]), Ua = n.useRef(Ci);
  Ua.current = Ci;
  const Mi = n.useMemo(() => Ut.map((p) => `${p.id}:${p.type}:${p.leftClipId}:${p.rightClipId}:${p.trackId ?? ""}:${p.durationInFrames}:${p.presentation ?? ""}:${p.timing ?? ""}`).join("|"), [Ut]), Vr = n.useMemo(() => [
    Pe,
    t.width,
    t.height,
    t.backgroundColor ?? "",
    _a,
    Mi
  ].join("::"), [
    _a,
    Pe,
    Mi,
    t.backgroundColor,
    t.height,
    t.width
  ]), ir = n.useMemo(() => {
    const p = /* @__PURE__ */ new Map();
    for (const A of nr)
      for (const $ of A.items)
        p.set($.id, $);
    return Ad(Ut, p);
  }, [nr, Ut]), Ri = n.useMemo(
    () => nr.flatMap((p) => p.items),
    [nr]
  ), _n = n.useMemo(
    () => Math.max(2, Math.round(Pe * 0.25)),
    [Pe]
  ), Ln = n.useMemo(
    () => Math.max(2, Math.round(Pe * 0.1)),
    [Pe]
  ), Pi = n.useMemo(
    () => Math.max(_n, Math.round(Pe * 3)),
    [Pe, _n]
  ), Ii = n.useMemo(
    () => Math.max(_n, Math.round(Pe * 1.5)),
    [Pe, _n]
  ), is = 8, Ti = n.useMemo(() => {
    const p = ($) => $.effects?.some((ae) => ae.enabled) || $.blendMode !== void 0 && $.blendMode !== "normal", A = /* @__PURE__ */ new Set();
    for (const $ of ir)
      (p($.leftClip) || p($.rightClip)) && A.add($.startFrame);
    return A;
  }, [ir]), Ei = n.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    for (const A of ir) {
      const $ = A.leftClip.speed ?? 1, ae = A.rightClip.speed ?? 1;
      (Math.abs($ - 1) > 1e-3 || Math.abs(ae - 1) > 1e-3) && p.add(A.startFrame);
    }
    return p;
  }, [ir]), vn = n.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    for (const A of Ti)
      p.add(A);
    for (const A of Ei)
      p.add(A);
    return p;
  }, [Ti, Ei]), Gs = n.useCallback((p) => p ? !vn.has(p.startFrame) : !0, [vn]), yn = n.useCallback((p) => p === null ? null : ir.find((A) => A.startFrame === p) ?? null, [ir]), Vs = n.useCallback((p) => {
    const A = p.leftClip.originId, $ = p.rightClip.originId;
    return A && $ && A === $ ? 0 : Ln;
  }, [Ln]), on = n.useCallback((p) => ir.find((A) => p >= A.startFrame && p < A.endFrame + Vs(A)) ?? null, [Vs, ir]), Fi = n.useCallback((p) => ir.find((A) => p >= A.startFrame && p < A.endFrame) ?? null, [ir]), ed = n.useMemo(
    () => ir.map((p) => ({
      startFrame: p.startFrame,
      endFrame: p.endFrame,
      cooldownFrames: Vs(p)
    })),
    [Vs, ir]
  ), td = n.useCallback((p) => p === null ? !1 : on(p) !== null ? !0 : Du(Ri, Ut.length, p), [Ri, on, Ut.length]), gr = n.useCallback(() => {
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
    const A = W.current;
    if (A) {
      const $ = ne.getState().currentFrame;
      for (const ae of [A.leftClip, A.rightClip]) {
        if (ae.type !== "video") continue;
        const se = Y.current.get(ae.id);
        if (!se) continue;
        const we = $ - ae.from;
        if (we < 0) continue;
        const Ae = ae.sourceStart ?? ae.trimStart ?? 0, Se = ae.sourceFps ?? Pe, fe = ae.speed ?? 1, Ee = Ae / Se + we * fe / Pe, tt = se.duration || 1 / 0, Ne = Math.min(Math.max(0, Ee), tt - 0.05), lt = Math.abs(se.currentTime - Ne);
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
  }, [Pe, At]), kr = n.useCallback((p) => {
    if (!p)
      return gr(), null;
    const A = W.current;
    if (A?.transition.id === p.transition.id && A.startFrame === p.startFrame)
      return A;
    gr(), W.current = p;
    const $ = Yf(), ae = Nr.startEvent("preview_transition_session", $), se = p.leftClip.speed ?? 1, we = p.rightClip.speed ?? 1, Ae = !!p.leftClip.effects?.some((lt) => lt.enabled), Se = !!p.rightClip.effects?.some((lt) => lt.enabled), fe = Gs(p) ? "dom" : "render", Ee = fe === "render";
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
    }, At("session_start", {
      opId: $,
      mode: fe,
      complex: Ee,
      startFrame: p.startFrame,
      endFrame: p.endFrame,
      leftClipId: p.leftClip.id,
      rightClipId: p.rightClip.id,
      leftSpeed: se,
      rightSpeed: we,
      leftHasEffects: Ae,
      rightHasEffects: Se
    });
    const tt = ne.getState().isPlaying, Ne = /* @__PURE__ */ new Map();
    for (const lt of [p.leftClip, p.rightClip]) {
      const gt = Ys(lt.id);
      if (Ne.set(lt.id, gt), gt && tt) {
        gt.dataset.transitionHold = "1";
        const Et = lt.speed ?? 1;
        if (gt.readyState >= 2)
          qa(gt, Et);
        else {
          const Wt = () => {
            gt.removeEventListener("canplay", Wt), gt.dataset.transitionHold === "1" && gt.paused && qa(gt, Et);
          };
          gt.addEventListener("canplay", Wt, { once: !0 });
        }
      }
    }
    return Y.current = Ne, B.current.clear(), p;
  }, [gr, At, Gs]), Ws = n.useCallback((p) => {
    const A = W.current;
    if (!(A?.leftClip.id === p || A?.rightClip.id === p)) {
      const Ee = Ys(p);
      if (Ee)
        return pe.current.delete(p), Ee;
      const tt = pe.current.get(p);
      return tt?.isConnected && tt.readyState >= 2 ? tt : (pe.current.delete(p), null);
    }
    const ae = ne.getState().isPlaying;
    if (!ae && !Gs(A))
      return null;
    const se = A?.leftClip.id === p ? A.leftClip.speed ?? 1 : A?.rightClip.id === p ? A.rightClip.speed ?? 1 : 1, we = (Ee) => {
      ae && (Ee.dataset.transitionHold = "1", qa(Ee, se));
    }, Ae = Y.current.get(p) ?? null;
    if (Ae && Ae.isConnected && Ae.readyState >= 2 && Ae.videoWidth > 0)
      return we(Ae), Ae;
    const Se = Y.current.get(p) ?? null;
    Se && Se !== Ae && delete Se.dataset.transitionHold;
    const fe = Ys(p);
    return fe && fe.readyState >= 2 && we(fe), Y.current.set(p, fe), fe;
  }, [Gs]), zs = n.useCallback((p, A, $) => {
    const ae = ir.find((se) => !(p > se.startFrame || $?.complexOnly && !vn.has(se.startFrame)));
    return !ae || ae.startFrame - p > A ? null : ae.startFrame;
  }, [vn, ir]), Ga = n.useCallback((p) => zs(p, Pi), [zs, Pi]), ji = n.useCallback((p) => zs(p, Ii), [zs, Ii]), yt = Ea, wn = n.useCallback((p, A) => !A.isPlaying && A.previewFrame === null && !yt && Fi(p) !== null, [yt, Fi]), Ni = !yt && ig(jt, Yt), rd = !yt && tn && G === "text";
  oe.current = rd, K.current = Ni, n.useLayoutEffect(() => {
    const p = l.current;
    p && (p.width !== an.width && (p.width = an.width), p.height !== an.height && (p.height = an.height));
  }, [an.width, an.height]);
  const Wr = n.useCallback(() => {
    if (at(), b.current = null, h.current = null, k.current = null, y.current = !1, j.current = [], P.current.clear(), T.current = [], F.current.clear(), E.current.clear(), N.current = [], z.current.clear(), M.current = null, q.current = null, V.current = null, X.current = null, D.current !== null && (clearTimeout(D.current), D.current = null), gr(), J.current = null, nt.current.fastScrubPrewarmedSources = 0, f.current = !1, m.current) {
      try {
        m.current.dispose();
      } catch (p) {
        Nr.warn("Failed to dispose renderer:", p);
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
  }, [at, gr]), nd = n.useCallback(async () => typeof OffscreenCanvas > "u" || Ir ? null : (R.current && L.current !== Vr && Wr(), R.current ? R.current : (O.current || (O.current = (async () => {
    try {
      const p = new OffscreenCanvas(Gr.width, Gr.height), A = p.getContext("2d");
      if (!A) return null;
      const $ = await Vi(Ua.current, p, A, {
        mode: "preview",
        getPreviewTransformOverride: Os,
        getPreviewEffectsOverride: _s,
        getPreviewCornerPinOverride: Ls,
        getPreviewPathVerticesOverride: Bs,
        getLiveItemSnapshot: Hs,
        getLiveKeyframes: Us
      });
      return "warmGpuPipeline" in $ && $.warmGpuPipeline(), R.current = $, L.current = Vr, $;
    } catch {
      return null;
    } finally {
      O.current = null;
    }
  })()), O.current)), [
    Wr,
    Vr,
    Hs,
    Us,
    Ls,
    _s,
    Bs,
    Os,
    Ir,
    Gr.width,
    Gr.height
  ]), Cr = n.useCallback(async () => typeof OffscreenCanvas > "u" || Ir ? null : (m.current && S.current !== Vr && Wr(), m.current ? m.current : (b.current || (b.current = (async () => {
    try {
      const p = new OffscreenCanvas(Gr.width, Gr.height), A = p.getContext("2d");
      if (!A) return null;
      const $ = await Vi(Ua.current, p, A, {
        mode: "preview",
        getPreviewTransformOverride: Os,
        getPreviewEffectsOverride: _s,
        getPreviewCornerPinOverride: Ls,
        getPreviewPathVerticesOverride: Bs,
        getLiveItemSnapshot: Hs,
        getLiveKeyframes: Us
      }), ae = ne.getState(), se = Vn({
        isPlaying: ae.isPlaying,
        previewFrame: ae.previewFrame,
        isGizmoInteracting: te.current
      }), we = ca(se, {
        currentFrame: ae.currentFrame,
        previewFrame: ae.previewFrame
      }), Ae = $.preload({
        priorityFrame: we,
        priorityWindowFrames: Math.max(12, Math.round(Pe * 4))
      }).catch((Se) => {
        Nr.warn("Renderer preload failed:", Se);
      }).finally(() => {
        h.current === Ae && (h.current = null);
      });
      return h.current = Ae, await Promise.race([
        Ae,
        new Promise((Se) => {
          setTimeout(Se, bg);
        })
      ]), x.current = p, v.current = A, M.current = null, m.current = $, S.current = Vr, "warmGpuPipeline" in $ && $.warmGpuPipeline(), $;
    } catch (p) {
      return Nr.warn("Failed to initialize renderer, falling back to Player seeks:", p), m.current = null, x.current = null, v.current = null, M.current = null, null;
    } finally {
      b.current = null;
    }
  })()), b.current)), [
    Wr,
    Vr,
    Pe,
    Hs,
    Us,
    Os,
    _s,
    Ls,
    Bs,
    Ir,
    Gr.height,
    Gr.width
  ]), Bn = n.useCallback(async (p) => {
    const A = x.current;
    if (A && M.current === p)
      return A;
    const $ = await Cr(), ae = x.current;
    return !$ || !ae ? null : (M.current !== p && (await $.renderFrame(p), M.current = p), ae);
  }, [Cr]), cs = n.useCallback((p) => {
    const A = x.current;
    if (!A || !W.current) return;
    const $ = new OffscreenCanvas(A.width, A.height), ae = $.getContext("2d");
    if (!ae) return;
    ae.drawImage(A, 0, 0), B.current.set(p, $);
    const se = hr.current;
    se && (se.lastPreparedFrame = p, se.bufferedFramesPeak = Math.max(
      se.bufferedFramesPeak,
      B.current.size
    ), se.firstPreparedAtMs === null && (se.firstPreparedAtMs = performance.now(), At("prepare_ready", {
      opId: se.opId,
      preparedFrame: p,
      bufferedFrames: B.current.size
    })));
    const we = is + Ln + 2;
    for (; B.current.size > we; ) {
      const Ae = B.current.keys().next().value;
      if (Ae === void 0) break;
      B.current.delete(Ae);
    }
  }, [Ln, is, At]), Va = n.useCallback(async (p) => {
    if (p < 0) return !1;
    if (M.current === p)
      return !0;
    if (V.current === p && q.current)
      return q.current;
    if (y.current)
      return !1;
    V.current = p;
    const A = ne.getState().isPlaying && yt, $ = (async () => {
      A || (y.current = !0);
      try {
        kr(yn(p));
        const ae = performance.now(), se = hr.current;
        se && (se.prepareStartedAtMs = ae, At("prepare_start", {
          opId: se.opId,
          targetFrame: p,
          mode: se.mode,
          complex: se.complex
        }));
        const we = await Cr();
        if (!we || !Ce.current) return !1;
        "setDomVideoElementProvider" in we && we.setDomVideoElementProvider(Ws);
        const Ae = vn.has(p), Se = yt || Ae;
        Se && (await we.renderFrame(p), cs(p));
        for (let Ee = 1; Ee < is; Ee += 1) {
          const tt = p + Ee;
          yt && !Ae ? (await we.renderFrame(tt), cs(tt)) : await we.prewarmFrame(tt);
        }
        if (Se || (await we.renderFrame(p), cs(p)), !Ce.current) return !1;
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
        return Nr.debug("Hidden transition prerender failed:", p, ae), !1;
      } finally {
        A || (y.current = !1), V.current === p && (V.current = null, q.current = null), k.current !== null && ue.current();
      }
    })();
    return q.current = $, $;
  }, [
    Cr,
    Ws,
    yn,
    kr,
    cs,
    yt,
    vn,
    is,
    At
  ]);
  n.useEffect(() => {
    Wr();
  }, [Wr, Vr, Gr.height, Gr.width]), n.useEffect(() => {
    const p = Ha.current;
    if (p.tracks !== nr && _u(p.keyframes, Zr) && n0(p.tracks, nr)) {
      Ha.current = {
        tracks: nr,
        keyframes: Zr
      };
      return;
    }
    Ha.current = {
      tracks: nr,
      keyframes: Zr
    };
    const A = s0({
      previousTracks: p.tracks,
      nextTracks: nr,
      previousKeyframes: p.keyframes,
      nextKeyframes: Zr
    }), ae = c0(
      p.tracks,
      nr,
      p.keyframes,
      Zr
    ).ok;
    if (A.length === 0)
      return;
    const se = m.current, we = R.current, Ae = S.current === Vr, Se = L.current === Vr;
    if (!Ae && !Se)
      return;
    const fe = { ranges: A };
    se && Ae && se.invalidateFrameCache(fe), we && Se && we.invalidateFrameCache(fe);
    const Ee = ne.getState(), tt = Ee.previewFrame ?? Ee.currentFrame, Ne = Xa(tt, A);
    M.current !== null && Xa(M.current, A) && (M.current = null);
    let lt = !1;
    for (const gt of [...B.current.keys()])
      Xa(gt, A) && (B.current.delete(gt), lt = !0);
    lt && (Lr.current = null), !ae && se && Ae && Ne && (yt || Ee.previewFrame !== null || et.current || Ye.current) && (k.current = tt, queueMicrotask(() => {
      ue.current();
    }));
  }, [
    Zr,
    nr,
    Vr,
    yt
  ]);
  const Ai = n.useCallback(async (p) => {
    if (re.current)
      return re.current;
    const A = (async () => {
      try {
        const $ = ne.getState(), ae = $.previewFrame ?? $.currentFrame, se = await Bn(ae);
        if (!se) return null;
        const we = p?.format ?? "image/jpeg", Ae = p?.quality ?? 0.9, Se = Math.max(2, Math.round(p?.width ?? se.width)), fe = Math.max(2, Math.round(p?.height ?? se.height));
        if (!(!p?.fullResolution && (Se !== se.width || fe !== se.height))) {
          const gt = await se.convertToBlob({
            type: we,
            quality: Ae
          });
          return Bc(gt);
        }
        const tt = document.createElement("canvas");
        tt.width = Se, tt.height = fe;
        const Ne = tt.getContext("2d");
        if (!Ne) return null;
        Ne.drawImage(se, 0, 0, Se, fe);
        const lt = await new Promise((gt) => {
          tt.toBlob(gt, we, Ae);
        });
        return lt ? Bc(lt) : null;
      } catch ($) {
        return Nr.warn("Failed to capture frame:", $), null;
      } finally {
        re.current = null;
      }
    })();
    return re.current = A, A;
  }, [Bn]), Di = n.useCallback(async (p) => {
    if (me.current)
      return me.current;
    const A = (async () => {
      try {
        const $ = ne.getState(), ae = $.previewFrame ?? $.currentFrame, se = await Bn(ae);
        if (!se) return null;
        const we = Math.max(2, Math.round(p?.width ?? se.width)), Ae = Math.max(2, Math.round(p?.height ?? se.height));
        if (!(!p?.fullResolution && (we !== se.width || Ae !== se.height))) {
          const tt = v.current ?? se.getContext("2d", { willReadFrequently: !0 });
          return tt ? tt.getImageData(0, 0, se.width, se.height) : null;
        }
        let fe = xe.current;
        fe || (fe = document.createElement("canvas"), xe.current = fe), (fe.width !== we || fe.height !== Ae) && (fe.width = we, fe.height = Ae);
        const Ee = fe.getContext("2d", { willReadFrequently: !0 });
        return Ee ? (Ee.clearRect(0, 0, we, Ae), Ee.drawImage(se, 0, 0, we, Ae), Ee.getImageData(0, 0, we, Ae)) : null;
      } catch ($) {
        return Nr.warn("Failed to capture raw frame:", $), null;
      } finally {
        me.current = null;
      }
    })();
    return me.current = A, A;
  }, [Bn]), Oi = n.useCallback(async () => {
    if (J.current)
      return J.current;
    const p = (async () => {
      try {
        const A = ne.getState(), $ = A.previewFrame ?? A.currentFrame;
        return await Bn($);
      } catch (A) {
        return Nr.warn("Failed to capture canvas source:", A), null;
      } finally {
        J.current = null;
      }
    })();
    return J.current = p, p;
  }, [Bn]), Wa = ne((p) => p.setCaptureCanvasSource);
  n.useEffect(() => (Hr(Ai), bn?.(Di), Wa?.(Oi), () => {
    Hr(null), bn?.(null), Wa?.(null), qr(null), re.current = null, me.current = null, xe.current = null;
  }), [Ai, Di, Oi, Hr, bn, Wa, qr]), n.useEffect(() => {
    (async () => {
      try {
        const { EffectsPipeline: p } = await import("./feature-editing-core-BWRx0hG-.js").then(($) => $.fW), A = await p.requestCachedDevice();
        if (A) {
          const $ = await p.create();
          if ($)
            try {
              const { TransitionPipeline: ae } = await import("./feature-editing-core-BWRx0hG-.js").then((se) => se.fX);
              ae.create(A)?.destroy();
            } finally {
              $.destroy();
            }
        }
      } catch {
      }
    })();
  }, []), n.useEffect(() => {
    if (Ir || m.current || b.current) return;
    let p = !1;
    const A = () => {
      p || m.current || b.current || Cr();
    };
    let $ = null, ae = null;
    return typeof window < "u" && "requestIdleCallback" in window ? $ = window.requestIdleCallback(() => A(), { timeout: 400 }) : ae = setTimeout(A, 120), () => {
      p = !0, $ !== null && typeof window < "u" && "cancelIdleCallback" in window && window.cancelIdleCallback($), ae !== null && clearTimeout(ae);
    };
  }, [Cr, Ir]), n.useEffect(() => {
    Ce.current = !0;
    const p = (Q, de) => {
      const le = l.current;
      if (!le) return;
      const Oe = le.getContext("2d");
      Oe && (Oe.clearRect(0, 0, le.width, le.height), Oe.drawImage(Q, 0, 0, le.width, le.height), qr(de));
    }, A = (Q) => {
      const de = x.current;
      de && p(de, Q);
    }, $ = (Q) => $p(
      ed,
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
        })), p(de, Q), Br(), !0;
      }
      if (M.current !== Q)
        return !1;
      const le = hr.current;
      return le && le.enteredAtMs === null && (le.enteredAtMs = performance.now(), At("entry_show", {
        opId: le.opId,
        frame: Q,
        via: "offscreen",
        bufferedFrames: B.current.size
      })), A(Q), Br(), !0;
    }, se = (Q) => {
      if (Q === null) {
        X.current = null, D.current !== null && (clearTimeout(D.current), D.current = null);
        return;
      }
      X.current = Q, y.current || Va(Q);
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
        const Oe = hr.current;
        Oe && At("prepare_opportunistic", {
          opId: Oe.opId,
          targetFrame: Q
        }), X.current = null, Va(Q);
      }, 0));
    }, Se = async () => {
      if (y.current) return;
      y.current = !0;
      const Q = w.current, de = () => w.current !== Q;
      try {
        const le = (dt) => {
          if (!(dt < 0) && !P.current.has(dt) && !F.current.has(dt))
            for (P.current.add(dt), j.current.push(dt); j.current.length > jg; ) {
              const Mt = j.current.shift();
              Mt !== void 0 && P.current.delete(Mt);
            }
        }, Oe = (dt) => {
          if (!F.current.has(dt) && (F.current.add(dt), T.current.push(dt), T.current.length > yg)) {
            const Mt = T.current.shift();
            Mt !== void 0 && F.current.delete(Mt);
          }
        }, ut = (dt) => {
          if (Da.length === 0) return;
          const Mt = Math.max(
            4,
            Math.round(Pe * vg)
          ), kt = dt - Mt, Rt = dt + Mt, xt = ye.current, wt = [], ve = [];
          for (const ce of Da)
            if (!(ce < kt)) {
              if (ce > Rt) break;
              ve.push(ce), !(xt > 0 && ce < dt - 1) && (xt < 0 && ce > dt + 1 || wt.push(ce));
            }
          const Le = wt.length > 0 ? wt : ve;
          if (Le.length === 0) return;
          const He = [...Le].sort((ce, _e) => Math.abs(ce - dt) - Math.abs(_e - dt)).slice(0, kg);
          for (const ce of He)
            le(Math.max(0, ce - 1)), le(ce), le(ce + 1);
        }, Nt = (dt) => {
          if (Oa.length === 0) return;
          const Mt = fa(), kt = z.current, Rt = (ge, Je) => {
            const bt = kt.get(ge);
            if (bt !== void 0 && Math.abs(Je - bt) < Rg)
              return !1;
            kt.set(ge, Je);
            const St = E.current, tr = N.current, qt = tr.indexOf(ge);
            for (qt >= 0 ? tr.splice(qt, 1) : St.add(ge), tr.push(ge); tr.length > wg; ) {
              const xr = tr.shift();
              if (xr === void 0) break;
              St.delete(xr) && (kt.delete(xr), nt.current.fastScrubPrewarmSourceEvictions += 1);
            }
            return nt.current.fastScrubPrewarmedSources = St.size, !0;
          }, xt = Math.max(
            8,
            Math.round(Pe * Sg)
          ), wt = dt - xt, ve = dt + xt, Le = ye.current, He = [], ce = [];
          for (const ge of Oa)
            if (!(ge.frame < wt)) {
              if (ge.frame > ve) break;
              ce.push(ge), !(Le > 0 && ge.frame < dt - 1) && (Le < 0 && ge.frame > dt + 1 || He.push(ge));
            }
          const _e = He.length > 0 ? He : ce;
          if (_e.length === 0) return;
          const mt = [..._e].sort((ge, Je) => Math.abs(ge.frame - dt) - Math.abs(Je.frame - dt)).slice(0, Cg);
          let We = Mg;
          for (const ge of mt)
            for (const Je of ge.srcs) {
              if (We <= 0) return;
              const bt = E.current.has(Je);
              Rt(Je, dt) && (We -= 1, bt || Mt.preloadSource(Je).catch(() => {
              }));
            }
        }, Dt = (dt) => {
          const Mt = zp(ye.current, {
            forwardSteps: Ig,
            backwardSteps: Tg,
            oppositeSteps: Eg,
            neutralRadius: Fg
          });
          for (const kt of Mt)
            le(dt + kt);
        };
        let Ot = 0;
        for (; Ce.current; ) {
          if (Ze(ne.getState().previewFrame)) {
            st(), rt(), k.current = null;
            break;
          }
          if (Be.current) {
            k.current = null, j.current = [], P.current.clear(), st(), rt();
            break;
          }
          const dt = k.current, Mt = dt !== null, kt = Mt ? dt : j.current.shift() ?? null;
          if (kt === null) break;
          if (Mt)
            k.current = null, Ot = 0;
          else {
            if (P.current.delete(kt), k.current !== null || Re.current)
              continue;
            if (ne.getState().isPlaying || Ot > 0 && performance.now() - Ot > Nc)
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
              const wt = on(kt);
              if (wt) {
                const ve = W.current, Le = !ve || ve.transition.id !== wt.transition.id;
                kr(wt), U.current && (await U.current, U.current = null), Le && "prewarmItems" in Rt && await Rt.prewarmItems(
                  [wt.leftClip.id, wt.rightClip.id],
                  kt
                );
              }
              Rt.setDomVideoElementProvider(Ws);
            } else
              Rt.setDomVideoElementProvider(void 0);
          if (Mt) {
            const xt = performance.now();
            await Rt.renderFrame(kt);
            const wt = performance.now() - xt;
            M.current = kt;
          } else {
            const xt = [kt];
            for (; j.current.length > 0 && !(k.current !== null || Re.current || ne.getState().isPlaying || Ot > 0 && performance.now() - Ot > Nc); ) {
              const wt = j.current.shift();
              P.current.delete(wt), xt.push(wt);
            }
            await Rt.prewarmFrames(xt);
            for (const wt of xt)
              Oe(wt);
          }
          if (!Ce.current || de()) break;
          if (Mt) {
            const xt = ne.getState(), wt = $(kt), ve = xt.isPlaying && xt.previewFrame === null && (wt.hasActiveTransition || wt.shouldHoldOverlay) && !yt;
            if (Be.current) {
              st(), rt();
              continue;
            }
            const Le = kt === xt.currentFrame && wn(kt, xt);
            if (!ve && !yt && !Le && !Wp({
              isGizmoInteracting: te.current,
              isPlaying: xt.isPlaying,
              currentFrame: xt.currentFrame,
              previewFrame: xt.previewFrame,
              renderedFrame: kt
            })) {
              nt.current.staleScrubOverlayDrops += 1, st(), rt();
              continue;
            }
            A(kt), ve ? Br() : Pr(), !ve && !Re.current && (Dt(kt), ut(kt), Nt(kt)), X.current !== null && Ae(), Ot = performance.now();
          } else
            Oe(kt);
        }
      } catch (le) {
        Nr.warn("Render failed, using Player seek fallback:", le), st(), rt(), Wr();
      } finally {
        w.current === Q && (y.current = !1, X.current !== null && Ae(), k.current !== null && Se());
      }
    };
    ue.current = () => {
      Se();
    };
    let fe = null, Ee = -1, tt = !1;
    const Ne = /* @__PURE__ */ new Set();
    let lt = -1;
    const gt = () => {
      if (fe = null, !Ce.current) return;
      const Q = ne.getState();
      if (!Q.isPlaying || !yt) return;
      const de = Q.currentFrame;
      if (de !== Ee) {
        Ee = de;
        const le = B.current.get(de);
        if (le) {
          p(le, de), M.current = de, lt = de;
          const Oe = de + 1;
          !B.current.has(Oe) && !y.current && (k.current = Oe, Se());
        } else
          k.current = de, y.current || Se();
      } else lt !== de && M.current === de && (A(de), lt = de);
      fe = requestAnimationFrame(gt);
    }, Et = Math.round(Pe * 3), Wt = ne.subscribe((Q, de) => {
      if (Q.currentFrame !== de.currentFrame && Math.abs(Q.currentFrame - de.currentFrame) >= Et && !Q.isPlaying) {
        const ve = Q.currentFrame, Le = /* @__PURE__ */ new Map();
        for (const He of jt)
          for (const ce of He.items) {
            if (ce.type !== "video" || !("src" in ce) || !ce.src || ve < ce.from || ve >= ce.from + ce.durationInFrames || !ce.sourceFps) continue;
            const _e = ve - ce.from, mt = ce.sourceStart ?? ce.trimStart ?? 0, We = ce.speed ?? 1, ge = mt / ce.sourceFps + _e / Pe * We, Je = Le.get(ce.src);
            Je ? Je.push(ge) : Le.set(ce.src, [ge]);
          }
        for (const [He, ce] of Le)
          Za(He, ce);
      }
      if (Q.isPlaying && yt && !de.isPlaying) {
        if (fe === null) {
          Ee = -1, w.current += 1, y.current = !1, j.current = [], P.current.clear();
          const ve = Q.currentFrame, Le = [];
          for (const We of jt)
            for (const ge of We.items) {
              if (ge.type !== "video" || ve < ge.from || ve >= ge.from + ge.durationInFrames) continue;
              const Je = ge.speed ?? 1;
              if (Math.abs(Je - 1) < 0.01) continue;
              ve - ge.from <= 2 && Le.push(ge.id);
            }
          for (const We of jt)
            for (const ge of We.items) {
              if (ge.type !== "video" || !("src" in ge) || !ge.src) continue;
              const Je = ge.speed ?? 1;
              if (Math.abs(Je - 1) < 0.01) continue;
              const bt = ge.from + ge.durationInFrames, St = Math.round(Pe * 3);
              if (ge.from <= ve + St && bt > ve) {
                const tr = Math.min(ve + St, bt - 1), qt = Math.max(0, tr - ge.from), xr = ge.sourceStart ?? ge.trimStart ?? 0, $s = ge.sourceFps ?? Pe, za = xr / $s + qt / Pe * Je;
                Wi(ge.src, za);
              }
            }
          const He = [], ce = Math.round(Pe * 3);
          for (const We of jt)
            for (const ge of We.items) {
              if (ge.type !== "video" || !("src" in ge) || !ge.src || !ge.sourceFps) continue;
              const Je = ge.speed ?? 1;
              if (Math.abs(Je - 1) >= 0.01 || ge.from + ge.durationInFrames <= ve || ge.from > ve + ce) continue;
              const St = Ys(ge.id);
              if (!St) continue;
              const qt = Math.max(ve, ge.from) - ge.from, $s = (ge.sourceStart ?? ge.trimStart ?? 0) / ge.sourceFps + qt / Pe * Je;
              Math.abs(St.currentTime - $s) < 0.05 || He.push(new Promise((za) => {
                let Bi = !1;
                const Ks = () => {
                  Bi || (Bi = !0, St.removeEventListener("seeked", Ks), clearTimeout(id), za());
                };
                St.addEventListener("seeked", Ks, { once: !0 });
                const id = setTimeout(Ks, 200);
                try {
                  St.currentTime = $s;
                } catch {
                  Ks();
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
                Je.length > 0 && await ge.prewarmItems(Je, ve);
              }
            })()), mt && We.push(Promise.all(He)), await Promise.all(We), Ne.clear(), tt = !1, fe === null && ne.getState().isPlaying && (fe = requestAnimationFrame(gt));
          })()) : fe = requestAnimationFrame(gt);
        }
      } else !Q.isPlaying && fe !== null && (cancelAnimationFrame(fe), fe = null, Sr.current = null, gr());
      if (Q.isPlaying && yt) {
        const ve = on(Q.currentFrame);
        if (ve && !W.current) {
          kr(ve), Sr.current = ve.startFrame;
          const ce = m.current;
          ce && "prewarmItems" in ce && ce.prewarmItems(
            [ve.leftClip.id, ve.rightClip.id],
            Q.currentFrame
          );
          {
            const _e = [ve.leftClip, ve.rightClip], mt = /* @__PURE__ */ new Map();
            for (const We of _e)
              if (We.type === "video" && "src" in We && We.src && We.sourceFps) {
                const ge = Q.currentFrame - We.from, Je = We.sourceStart ?? We.trimStart ?? 0, bt = We.speed ?? 1, St = Je / We.sourceFps + ge / Pe * bt, tr = mt.get(We.src);
                tr ? tr.push(St) : mt.set(We.src, [St]);
              }
            for (const [We, ge] of mt)
              Za(We, ge);
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
              const qt = St.count + 1;
              if (C.current.set(ce.id, { ct: St.ct, count: qt }), qt >= 3) {
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
            const tr = _e.currentTime - bt;
            if (Math.abs(tr) > 0.2) {
              try {
                _e.currentTime = bt;
              } catch {
              }
              _e.playbackRate = Je;
            } else if (Math.abs(tr) > 0.016) {
              const qt = -tr * 0.25, xr = Math.max(0.03, Je * 0.06);
              _e.playbackRate = Math.max(
                Je - xr,
                Math.min(Je + xr, Je + qt)
              );
            }
          }
        else C.current.size > 0 && C.current.clear();
        const He = !ve && !W.current ? ji(Q.currentFrame) : null;
        if (He !== null) {
          const ce = yn(He);
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
                    const tr = ce.startFrame + St - ge.from, qt = ge.sourceStart ?? ge.trimStart ?? 0, xr = ge.speed ?? 1;
                    Je.push(qt / ge.sourceFps + tr / Pe * xr);
                  }
                  const bt = We.get(ge.src);
                  bt ? bt.push(...Je) : We.set(ge.src, Je);
                }
                for (const [ge, Je] of We)
                  Za(ge, Je);
              }
            }
            At("playing_prearm", {
              targetFrame: He
            });
          }
        } else if (!ve) {
          Sr.current = null;
          const ce = W.current;
          ce && Q.currentFrame >= ce.endFrame && gr();
        }
      }
      if (!Q.isPlaying && Q.previewFrame === null && de.currentFrame !== Q.currentFrame) {
        const ve = [];
        let Le = Q.currentFrame;
        const He = Math.round(Pe * 3);
        for (const ce of jt)
          for (const _e of ce.items) {
            if (_e.type !== "video") continue;
            const mt = _e.speed ?? 1;
            if (Math.abs(mt - 1) < 0.01) continue;
            const We = _e.from + _e.durationInFrames;
            _e.from > Q.currentFrame && _e.from <= Q.currentFrame + He && (ve.push(_e.id), Le = Math.max(Le, Math.min(Q.currentFrame + He, We - 1)));
          }
        if (ve.length > 0) {
          const ce = (() => {
            for (const We of jt) {
              if (!We.items.find((St) => ve.includes(St.id))) continue;
              const Je = We.order ?? 0;
              let bt = Q.currentFrame;
              for (const St of jt)
                if (!((St.order ?? 0) >= Je))
                  for (const qt of St.items) {
                    if (qt.type === "audio" || qt.type === "adjustment") continue;
                    const xr = qt.from + qt.durationInFrames;
                    qt.from <= Q.currentFrame + He && xr > Q.currentFrame && (bt = Math.max(bt, xr));
                  }
              return bt;
            }
            return Q.currentFrame;
          })();
          for (const We of ve) Ne.add(We);
          const _e = Math.max(Q.currentFrame, ce - 1), mt = m.current;
          mt && "prewarmItems" in mt && mt.prewarmItems(ve, _e);
        }
      }
      if (!Q.isPlaying && Q.previewFrame === null) {
        const ve = on(Q.currentFrame), Le = ve?.startFrame ?? Ga(Q.currentFrame);
        if (Le !== null) {
          if (yt) {
            const He = ve ?? yn(Le);
            He && (kr(He), Lr.current !== Le && (async () => {
              const ce = await Cr();
              ce && "prewarmItems" in ce && await ce.prewarmItems(
                [He.leftClip.id, He.rightClip.id],
                He.startFrame
              );
              for (const _e of [He.leftClip, He.rightClip])
                if (_e.type === "video" && "src" in _e && _e.src && _e.sourceFps) {
                  const mt = He.startFrame - _e.from, We = _e.sourceStart ?? _e.trimStart ?? 0, ge = _e.speed ?? 1, Je = We / _e.sourceFps + mt / Pe * ge;
                  Wi(_e.src, Je);
                }
              if (!ne.getState().isPlaying && ce) {
                const _e = Math.min(is, He.endFrame - He.startFrame);
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
          } else ve ? (kr(ve), k.current = Q.currentFrame, Se()) : se(Le);
          Lr.current !== Le && (Lr.current = Le, At("paused_prearm", {
            targetFrame: Le
          }));
        } else
          (de.currentFrame !== Q.currentFrame || de.isPlaying !== Q.isPlaying) && (Lr.current = null, se(null), gr());
      }
      if (Ze(Q.previewFrame)) {
        k.current = null, ye.current = 0, Re.current = !1, Be.current = !1, De.current = 0, Qe.current = 0, je.current = null, j.current = [], P.current.clear(), st(), rt();
        return;
      }
      if (Q.isPlaying && !yt) {
        k.current = null, ye.current = 0, Re.current = !1, Be.current = !1, De.current = 0, Qe.current = 0, je.current = null, j.current = [], P.current.clear();
        const ve = $(Q.currentFrame);
        if (ve.shouldPrewarm && (Cr(), !ve.hasActiveTransition && ve.nextTransitionStartFrame !== null && se(ve.nextTransitionStartFrame)), !(ve.hasActiveTransition || ve.shouldHoldOverlay)) {
          ve.shouldPrewarm || gr(), st(), rt();
          return;
        }
        if (at(), et.current && st(), ae(Q.currentFrame))
          return;
        if (ve.hasActiveTransition) {
          const Le = hr.current;
          Le && Le.lastEntryMissFrame !== Q.currentFrame && (Le.entryMisses += 1, Le.lastEntryMissFrame = Q.currentFrame, At("entry_miss", {
            opId: Le.opId,
            frame: Q.currentFrame,
            bufferedFrames: B.current.size
          }));
        }
        k.current = Q.currentFrame, Se();
        return;
      }
      const le = wn(Q.currentFrame, Q), Oe = yt || le, ut = wn(de.currentFrame, de), Nt = yt || ut, Dt = Q.previewFrame ?? (Oe ? Q.currentFrame : null), Ot = de.previewFrame ?? (Nt ? de.currentFrame : null), dt = Q.isPlaying !== de.isPlaying, Mt = Q.previewFrame !== null && Q.currentFrame === Q.previewFrame && Q.currentFrameEpoch === Q.previewFrameEpoch;
      if (Dt === Ot && !dt) return;
      if (Q.previewFrame !== null && de.previewFrame !== null) {
        const ve = Q.previewFrame - de.previewFrame;
        ye.current = ve > 0 ? 1 : ve < 0 ? -1 : 0;
        const Le = Math.abs(ve);
        nt.current.scrubUpdates += 1, Le > 1 && (nt.current.scrubDroppedFrames += Le - 1);
      } else if (Dt !== null && Ot !== null) {
        const ve = Dt - Ot;
        ye.current = ve > 0 ? 1 : ve < 0 ? -1 : 0;
      } else Dt !== null && (ye.current = 0);
      Dt !== null && m.current && "getScrubbingCache" in m.current && m.current.getScrubbingCache()?.setEvictionHint(
        Dt,
        ye.current
      );
      const kt = ye.current < 0, Rt = td(
        Dt
      ), xt = !yt && Pg && ye.current < 0 && !Mt && !Rt;
      if (kt !== Re.current && (Re.current = kt, j.current = [], P.current.clear()), xt !== Be.current && (Be.current = xt, k.current = null, j.current = [], P.current.clear(), xt && (st(), rt())), Be.current && Dt !== null) {
        st(), rt();
        return;
      }
      if (Dt === null) {
        k.current = null, ye.current = 0, Re.current = !1, Be.current = !1, De.current = 0, Qe.current = 0, je.current = null, j.current = [], P.current.clear(), at(), f.current = !1;
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
      if (at(), k.current === Dt)
        return;
      let wt = Dt;
      if (ye.current < 0 && !Mt && !Rt) {
        const ve = performance.now(), Le = Math.floor(
          Dt / jc
        ) * jc, He = je.current, ce = ve - Qe.current < Ng, _e = He === null ? Number.POSITIVE_INFINITY : Math.abs(Le - He);
        if (ce && _e < Ag)
          return;
        Qe.current = ve, je.current = Le, wt = Le;
      } else
        Qe.current = 0, je.current = null;
      j.current = [], P.current.clear(), k.current = wt, fe === null && !tt && Se();
    }), _t = Xe.subscribe((Q, de) => {
      if (Ze(ne.getState().previewFrame) || !yt) return;
      const le = Q.preview !== de.preview, Oe = Q.previewTransform !== de.previewTransform;
      if (!le && !(Oe && Q.activeGizmo)) return;
      const Nt = ne.getState().currentFrame;
      (le || Oe) && m.current && m.current.invalidateFrameCache({ frames: [Nt] }), k.current = Nt, Se();
    }), Lt = Er.subscribe((Q, de) => {
      if (Q.previewCornerPin === de.previewCornerPin) return;
      const le = ne.getState();
      if (!yt && !wn(le.currentFrame, le)) return;
      const Oe = le.currentFrame;
      m.current && m.current.invalidateFrameCache({ frames: [Oe] }), k.current = Oe, Se();
    }), rr = ze.subscribe((Q, de) => {
      const le = Q.previewVertices !== de.previewVertices, Oe = Q.editingItemId !== de.editingItemId;
      if (!le && !Oe) return;
      const ut = ne.getState();
      if (Ze(ut.previewFrame)) return;
      const Nt = ut.previewFrame ?? ut.currentFrame;
      !yt && ut.previewFrame === null && !wn(Nt, ut) || (m.current && m.current.invalidateFrameCache({ frames: [Nt] }), k.current = Nt, Se());
    }), Tt = ne.getState();
    if (Tt.isPlaying && yt) {
      const Q = on(Tt.currentFrame);
      if (Q)
        kr(Q), Sr.current = Q.startFrame;
      else {
        const de = ji(Tt.currentFrame);
        if (de !== null) {
          Sr.current = de;
          const le = yn(de);
          le && kr(le);
        }
      }
    }
    if (!Tt.isPlaying && Tt.previewFrame === null) {
      const Q = on(Tt.currentFrame), de = Q?.startFrame ?? Ga(Tt.currentFrame);
      if (de !== null) {
        if (Lr.current = de, yt) {
          const le = yn(de);
          le && (kr(le), (async () => {
            const Oe = await Cr();
            if (Oe && "prewarmItems" in Oe && await Oe.prewarmItems(
              [le.leftClip.id, le.rightClip.id],
              le.startFrame
            ), !I.current) {
              I.current = !0;
              try {
                const ut = await nd();
                ut && !ne.getState().isPlaying && (await ut.renderFrame(le.startFrame), cs(le.startFrame), At("bg_prerender", { frame: le.startFrame }));
              } catch (ut) {
                Nr.debug("Background transition pre-render failed:", ut);
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
    if (wn(Tt.currentFrame, Tt) && (k.current = Tt.currentFrame, Se()), !Tt.isPlaying && Tt.previewFrame !== null && !yt && !Ze(Tt.previewFrame)) {
      const Q = $(Tt.previewFrame);
      Q.shouldPrewarm && !Q.hasActiveTransition && Q.nextTransitionStartFrame !== null && se(Q.nextTransitionStartFrame), k.current = Tt.previewFrame, Se();
    } else if (yt) {
      const Q = ne.getState(), de = $(Q.currentFrame);
      if (Q.isPlaying && de.shouldPrewarm && de.nextTransitionStartFrame !== null)
        if (yt) {
          const Oe = yn(de.nextTransitionStartFrame);
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
      k.current = le, Se(), Q.isPlaying && yt && fe === null && (fe = requestAnimationFrame(gt));
    } else if (ne.getState().isPlaying && !yt) {
      const Q = ne.getState(), de = $(Q.currentFrame);
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
        k.current = Q.currentFrame, Se();
      } else
        de.shouldPrewarm || gr(), st(), rt();
    } else (Ze(ne.getState().previewFrame) || ne.getState().previewFrame === null) && (gr(), st(), rt());
    return () => {
      Ce.current = !1, Re.current = !1, Be.current = !1, Qe.current = 0, je.current = null, at(), we(), gr(), rt(), fe !== null && (cancelAnimationFrame(fe), fe = null), ue.current = () => {
      }, Wt(), _t(), Lt(), rr();
    };
  }, [
    Wr,
    Cr,
    Da,
    Oa,
    yt,
    Pe,
    Ni,
    at,
    gr,
    Ga,
    Ws,
    on,
    st,
    rt,
    wn,
    kr,
    Va,
    Br,
    vt,
    it,
    ft,
    vn,
    Ln,
    _n,
    ir,
    At,
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
      if (ja.current || jt.length === 0) return;
      const Ae = rn.current > 0;
      Ae && (rn.current = Math.max(0, rn.current - 1));
      const Se = ne.getState(), fe = Vn({
        isPlaying: Se.isPlaying,
        previewFrame: Se.previewFrame,
        isGizmoInteracting: te.current
      }), Ee = ca(fe, {
        currentFrame: Se.currentFrame,
        previewFrame: Se.previewFrame
      }), tt = di.current;
      di.current = Ee;
      const Ne = fe === "scrubbing" && tt !== null ? Ou(tt, Ee) : 0;
      if (fe === "scrubbing" && Ne < 0) {
        nt.current.preloadCandidateIds = 0, nt.current.preloadBudgetBase = _c(fe), nt.current.preloadBudgetAdjusted = 0, nt.current.preloadWindowMaxCost = 0, nt.current.preloadScrubDirection = Ne, nt.current.preloadDirectionPenaltyCount = 0;
        return;
      }
      const { startFrame: lt, endFrame: gt } = Kp({
        mode: fe,
        anchorFrame: Ee,
        scrubDirection: Ne,
        fps: Pe,
        aheadSeconds: Ec
      }), Et = _c(fe), Wt = fe === "scrubbing" && Ne < 0 ? hg : 0, _t = Ae ? Math.min(
        gg,
        Et + mg + Wt
      ) : Et + Wt, Lt = Date.now(), rr = jn.current, Tt = Math.max(8, Math.round(Pe * 0.6)), Q = Math.max(
        8,
        Math.round(Pe * fg)
      ), de = performance.now();
      let le = 0, Oe = 0, ut = !1, Nt = (rs.current % jt.length + jt.length) % jt.length, Dt = Math.max(0, ns.current);
      const Ot = /* @__PURE__ */ new Map();
      if (fe === "scrubbing") {
        for (let Rt = 0; Rt < jt.length; Rt++) {
          const xt = (Nt + Rt) % jt.length, ve = jt[xt].items;
          if (ve.length === 0) continue;
          const Le = Ne < 0 ? -1 : 1;
          let He = t0(
            ve,
            Ee,
            Ne
          );
          for (; He >= 0 && He < ve.length; ) {
            const ce = ve[He];
            if (!ce.mediaId) {
              He += Le;
              continue;
            }
            const _e = ce.from + ce.durationInFrames;
            if (ce.from <= gt && _e >= lt && rr.has(ce.mediaId) && as(ce.mediaId) <= Lt) {
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
            if (performance.now() - de >= Fc) {
              rs.current = xt, ns.current = 0, ut = !0;
              break;
            }
            He += Le;
          }
          if (ut) break;
        }
        ut || (rs.current = (Nt + 1) % jt.length, ns.current = 0);
      } else {
        for (let Rt = 0; Rt < jt.length; Rt++) {
          const wt = jt[Nt].items, ve = Rt === 0 ? Dt : 0;
          for (let Le = ve; Le < wt.length; Le++) {
            const He = wt[Le];
            if (!He.mediaId) continue;
            const ce = He.from + He.durationInFrames;
            if (He.from <= gt && ce >= lt && rr.has(He.mediaId) && as(He.mediaId) <= Lt) {
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
            if (performance.now() - de >= Fc) {
              let _e = Nt, mt = Le + 1;
              mt >= wt.length && (_e = (Nt + 1) % jt.length, mt = 0), rs.current = _e, ns.current = mt, ut = !0;
              break;
            }
          }
          if (ut) break;
          Nt = (Nt + 1) % jt.length, Dt = 0;
        }
        ut || (rs.current = Nt, ns.current = 0);
      }
      const dt = performance.now() - de;
      nt.current.preloadScanSamples += 1, nt.current.preloadScanTotalMs += dt, nt.current.preloadScanLastMs = dt, ut && (nt.current.preloadScanBudgetYields += 1);
      const Mt = Lc(_t, le);
      if (nt.current.preloadCandidateIds = Ot.size, nt.current.preloadBudgetBase = Et, nt.current.preloadBudgetAdjusted = Mt, nt.current.preloadWindowMaxCost = le, nt.current.preloadScrubDirection = Ne, nt.current.preloadDirectionPenaltyCount = Oe, Ot.size === 0) {
        (ut || rn.current > 0) && $();
        return;
      }
      const kt = [...Ot.entries()].sort((Rt, xt) => Rt[1] - xt[1]).slice(0, Mt).map(([Rt]) => Rt);
      ja.current = !0;
      try {
        const Rt = performance.now(), { resolvedEntries: xt, failedIds: wt } = await Ds(kt), ve = performance.now() - Rt;
        if (nt.current.preloadBatchSamples += 1, nt.current.preloadBatchTotalMs += ve, nt.current.preloadBatchLastMs = ve, nt.current.preloadBatchLastIds = kt.length, xt.length > 0) {
          const Le = [], He = [];
          for (const ce of xt)
            jn.current.has(ce.mediaId) && (Le.push(ce.mediaId), He.push(ce));
          Ur((ce) => {
            const _e = new Map(ce);
            let mt = !1;
            for (const We of He)
              _e.get(We.mediaId) !== We.url && (_e.set(We.mediaId, We.url), mt = !0);
            return mt ? _e : ce;
          }), sn(Le), Ns(Le);
        }
        if (wt.length > 0) {
          const Le = As(wt);
          Le !== null && Xr(Le);
        }
      } finally {
        ja.current = !1, (ut || rn.current > 0) && $();
      }
    }, se = () => {
      rn.current = Math.max(
        rn.current,
        xg
      ), ae();
    };
    ae();
    const we = ne.subscribe((Ae, Se) => {
      const fe = Ao({
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
        fps: Pe
      }), Ee = fe.next.mode, tt = fe.preloadBurstTrigger;
      if (fe.enteredPlaying)
        Fe.current = 0, De.current = 0, ae(), p = setInterval(() => {
          ae();
        }, 1e3);
      else if (tt === "scrub_enter")
        Fe.current = 0, De.current = 0, se(), os();
      else if (Ee === "scrubbing" && fe.previewFrameChanged) {
        const Ne = (Ae.previewFrame ?? 0) - (Se.previewFrame ?? 0);
        if (Ne < 0)
          return;
        if (Ne > 0) {
          const lt = performance.now();
          if (lt - Fe.current < pg)
            return;
          Fe.current = lt;
        }
        ae();
      } else Ee !== "playing" && Ee !== "scrubbing" && fe.currentFrameChanged ? (Fe.current = 0, De.current = 0, tt === "paused_short_seek" ? se() : ae(), os()) : fe.exitedPlaying && (Fe.current = 0, De.current = 0, p && (clearInterval(p), p = null));
    });
    return () => {
      we(), p && clearInterval(p), A !== null && clearTimeout(A), Fe.current = 0, De.current = 0, rn.current = 0;
    };
  }, [
    sn,
    Pe,
    jt,
    as,
    As,
    On,
    os,
    Ds,
    Ns,
    Xr
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
        await Dd.refreshAllBlobUrls();
      } catch {
      }
      Gi.invalidateAll();
      const ae = /* @__PURE__ */ new Map();
      Dn(), Ur(ae), ss(ae), Fs((se) => se + 1);
    };
    return document.addEventListener("visibilitychange", $), () => {
      document.removeEventListener("visibilitychange", $);
    };
  }, [ss, Dn]), n.useEffect(() => () => {
    Ce.current = !1, Dn(), Wr();
  }, [Wr, Dn]);
  const cn = n.useMemo(() => {
    const p = t.width / t.height;
    if (jr === -1) {
      if (s.width > 0 && s.height > 0) {
        const ae = s.width / s.height;
        let se, we;
        return ae > p ? (we = s.height, se = we * p) : (se = s.width, we = se / p), { width: se, height: we };
      }
      return { width: t.width, height: t.height };
    }
    const A = t.width * jr, $ = t.height * jr;
    return { width: A, height: $ };
  }, [t.width, t.height, jr, s]), sd = n.useMemo(() => jr === -1 || s.width === 0 || s.height === 0 ? !1 : cn.width > s.width || cn.height > s.height, [jr, cn, s]);
  n.useLayoutEffect(() => {
    if (a) return;
    const p = i.current;
    if (!p) return;
    const A = () => {
      const se = i.current;
      if (!se) return;
      const we = se.getBoundingClientRect();
      queueMicrotask(() => {
        Pt((Ae) => Ae && l0(Ae, we) ? Ae : we);
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
  const _i = n.useRef(null), Li = n.useCallback((p) => {
    if (Is) {
      p.stopPropagation();
      return;
    }
    Pl() || p.target.closest("[data-gizmo]") || It.getState().clearItemSelection();
  }, [Is]), ad = n.useCallback((p) => {
    const A = Math.round(p);
    ht(A), it(A);
    const $ = ee.current;
    if ($ !== null && A !== $) {
      ft();
      return;
    }
    if (xn.current) return;
    const ae = ne.getState(), se = Vn({
      isPlaying: ae.isPlaying,
      previewFrame: ae.previewFrame,
      isGizmoInteracting: te.current
    });
    if (se === "scrubbing") return;
    if (se === "playing") {
      const Se = performance.now(), fe = ie.current;
      if (fe && A !== fe.frame) {
        const Ee = Math.max(1, Math.abs(A - fe.frame)), tt = Se - fe.tsMs;
        if (tt > 0) {
          const Ne = ag({
            state: Z.current,
            sampleMsPerFrame: tt / Ee,
            frameBudgetMs: sg(Pe, ae.playbackRate),
            userQuality: ae.previewQuality,
            nowMs: Se,
            allowRecovery: !1
          });
          Z.current = Ne.state, Ne.qualityChanged && (Ne.qualityChangeDirection === "degrade" ? nt.current.adaptiveQualityDowngrades += 1 : Ne.qualityChangeDirection === "recover" && (nt.current.adaptiveQualityRecovers += 1), Te(Ne.state.qualityCap));
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
    Pe,
    it,
    ht,
    ft
  ]), od = n.useCallback((p) => {
    p ? ne.getState().play() : ne.getState().pause();
  }, []);
  return Bt?.renderSourceHistory[Bt.renderSourceHistory.length - 1], /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: _i,
      className: "w-full h-full panel-bg relative",
      style: { overflow: sd ? "auto" : "visible" },
      onClick: Li,
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
          onClick: Li,
          children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              ref: zt,
              "data-player-container": !0,
              className: "relative shrink-0",
              style: {
                width: `${cn.width}px`,
                height: `${cn.height}px`,
                transition: "none",
                outline: "2px solid hsl(var(--border))",
                outlineOffset: 0
              },
              onDoubleClick: (p) => p.preventDefault(),
              children: [
                Ir && /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50 z-20", children: /* @__PURE__ */ r.jsx("p", { className: "text-white text-sm", children: "Loading media..." }) }),
                /* @__PURE__ */ r.jsx(
                  yu,
                  {
                    ref: o,
                    durationInFrames: Ju,
                    fps: Pe,
                    width: an.width,
                    height: an.height,
                    autoPlay: !1,
                    loop: !1,
                    controls: !1,
                    style: {
                      width: "100%",
                      height: "100%"
                    },
                    onFrameChange: ad,
                    onPlayStateChange: od,
                    children: /* @__PURE__ */ r.jsx(Bl, { ...Qu })
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
                      visibility: Aa ? "visible" : "hidden"
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
                Yr ? /* @__PURE__ */ r.jsx(Op, { fps: Pe }) : en ? /* @__PURE__ */ r.jsx(Bp, { fps: Pe }) : gn ? /* @__PURE__ */ r.jsx(Gp, { fps: Pe }) : Fr ? /* @__PURE__ */ r.jsx(Vp, { fps: Pe }) : null,
                !a && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                  /* @__PURE__ */ r.jsx(
                    ip,
                    {
                      containerRect: Ue,
                      playerSize: cn,
                      projectSize: { width: t.width, height: t.height },
                      zoom: jr,
                      hitAreaRef: _i
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    vp,
                    {
                      containerRect: Ue,
                      playerSize: cn,
                      projectSize: { width: t.width, height: t.height },
                      zoom: jr
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    wp,
                    {
                      containerRect: Ue,
                      playerSize: cn,
                      projectSize: { width: t.width, height: t.height },
                      zoom: jr
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
async function d0(e, t) {
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
async function f0(e) {
  return (await fetch(e)).blob();
}
function m0(e) {
  if (typeof window < "u" && "requestIdleCallback" in window) {
    window.requestIdleCallback(() => URL.revokeObjectURL(e));
    return;
  }
  setTimeout(() => URL.revokeObjectURL(e), 0);
}
function h0(e, t) {
  const s = URL.createObjectURL(e), a = document.createElement("a");
  a.href = s, a.download = t, document.body.appendChild(a), a.click(), document.body.removeChild(a), m0(s);
}
function p0(e, t, s) {
  const a = Math.max(0, Math.round(e)), o = Number.isFinite(t) && t > 0 ? t : 30, i = Math.max(String(Math.max(0, s - 1)).length, 1), c = String(a).padStart(i, "0"), l = Ll(a, o).replaceAll(":", "-");
  return `frame-${c}-${l}.png`;
}
const Sn = { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize };
function g0({ totalFrames: e, fps: t }) {
  const [s, a] = n.useState(!1), o = ne((w) => w.isPlaying), i = ne((w) => w.useProxy), c = ne((w) => w.togglePlayPause), l = ne((w) => w.setCurrentFrame), u = ne((w) => w.setPreviewFrame), d = ne((w) => w.setDisplayedFrame), f = ne((w) => w.toggleUseProxy), m = Math.max(0, e - 1), b = (w) => {
    u(null), d(null), l(w);
  }, h = () => b(0), x = () => b(m), v = () => {
    const w = ne.getState().currentFrame;
    b(Math.max(0, w - 1));
  }, S = () => {
    const w = ne.getState().currentFrame;
    b(Math.min(m, w + 1));
  }, y = async () => {
    if (!s) {
      a(!0);
      try {
        const w = ne.getState(), k = w.previewFrame ?? w.currentFrame, R = p0(k, t, e);
        let O = null, L, I;
        if (w.captureCanvasSource) {
          const F = await w.captureCanvasSource();
          F && (O = await d0(F, "image/png"), L = F.width, I = F.height);
        }
        if (!O && w.captureFrame) {
          const F = await w.captureFrame({
            format: "image/png",
            quality: 1,
            fullResolution: !0
          });
          F && (O = await f0(F));
        }
        if (!O) {
          Xt.error("Failed to capture the current frame.");
          return;
        }
        h0(O, R);
        const j = Qt.getState().currentProjectId;
        if (!j) {
          Xt.error("Downloaded the frame, but no project is selected for media library import.");
          return;
        }
        const P = new File([O], R, {
          type: "image/png",
          lastModified: Date.now()
        }), T = await zo.importGeneratedImage(P, j, {
          width: L,
          height: I,
          tags: ["frame-capture"],
          codec: "png"
        });
        Qt.setState((F) => ({
          mediaItems: [T, ...F.mediaItems]
        })), Xt.success(`Saved "${T.fileName}" to the media library and started the download.`);
      } catch (w) {
        const k = w instanceof Error ? w.message : "Failed to save frame.";
        Xt.error(`Downloaded frame, but could not save it to the media library. ${k}`);
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
          style: Sn,
          onClick: h,
          "data-tooltip": "Go to Start (Home)",
          "aria-label": "Go to start",
          children: /* @__PURE__ */ r.jsx(Hl, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "flex-shrink-0",
          style: Sn,
          onClick: v,
          "data-tooltip": "Previous Frame (Left Arrow)",
          "aria-label": "Previous frame",
          children: /* @__PURE__ */ r.jsx(Ms, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          size: "icon",
          className: "flex-shrink-0",
          style: Sn,
          onClick: c,
          "data-tooltip": o ? "Pause (Space)" : "Play (Space)",
          "aria-label": o ? "Pause" : "Play",
          children: o ? /* @__PURE__ */ r.jsx(Ul, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(Gl, { className: "w-3.5 h-3.5 ml-0.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "flex-shrink-0",
          style: Sn,
          onClick: S,
          "data-tooltip": "Next Frame (Right Arrow)",
          "aria-label": "Next frame",
          children: /* @__PURE__ */ r.jsx(Rs, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx(
        be,
        {
          variant: "ghost",
          size: "icon",
          className: "flex-shrink-0",
          style: Sn,
          onClick: x,
          "data-tooltip": "Go to End (End)",
          "aria-label": "Go to end",
          children: /* @__PURE__ */ r.jsx(Vl, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "hidden @min-[440px]:flex items-center gap-1.5 flex-shrink-0 pl-1", children: /* @__PURE__ */ r.jsx(
      be,
      {
        variant: "ghost",
        size: "icon",
        className: "flex-shrink-0",
        style: Sn,
        onClick: () => {
          y();
        },
        disabled: s,
        "data-tooltip": s ? "Saving Frame..." : "Save Frame",
        "aria-label": s ? "Saving frame" : "Save frame",
        children: s ? /* @__PURE__ */ r.jsx(ou, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ r.jsx(Od, { className: "w-3.5 h-3.5" })
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: "hidden @min-[440px]:flex items-center gap-1.5 flex-shrink-0 pl-1", children: /* @__PURE__ */ r.jsx(
      be,
      {
        variant: "ghost",
        size: "icon",
        style: Sn,
        className: `flex-shrink-0 ${i ? "text-green-500 hover:text-green-400 hover:bg-green-500/10" : "text-muted-foreground hover:text-foreground"}`,
        onClick: f,
        "data-tooltip": i ? "Proxy Playback: On" : "Proxy Playback: Off",
        "aria-label": i ? "Disable proxy playback" : "Enable proxy playback",
        children: /* @__PURE__ */ r.jsx(_d, { className: "w-3.5 h-3.5" })
      }
    ) })
  ] });
}
function x0({ fps: e, totalFrames: t }) {
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
      o.current && (o.current.textContent = d.current ? b(x) : zn(x, f.current));
    };
    return h(ne.getState().currentFrame), ne.subscribe((x) => {
      h(x.currentFrame);
    });
  }, [b]), n.useEffect(() => {
    if (!o.current) return;
    const h = ne.getState().currentFrame;
    o.current.textContent = s ? b(h) : zn(h, e);
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
            children: s ? b(ne.getState().currentFrame) : zn(ne.getState().currentFrame, e)
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground/50", children: "/" }),
        /* @__PURE__ */ r.jsx("span", { children: s ? b(l) : zn(l, e) })
      ]
    }
  );
}
const b0 = [
  { label: "Auto", value: "fit" },
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 }
];
function v0() {
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
    zoomPresets: b0,
    handlePresetZoom: s,
    zoomIn: a,
    zoomOut: o,
    resetZoom: i
  };
}
function y0() {
  const { zoom: e, zoomPresets: t, handlePresetZoom: s } = v0(), a = n.useRef(null), o = e === -1 ? "Auto" : t.find((c) => c.value === e)?.label || `${Math.round(e * 100)}%`, i = n.useCallback(() => {
    a.current?.blur();
  }, []);
  return /* @__PURE__ */ r.jsxs(
    Wl,
    {
      onOpenChange: (c) => {
        c || requestAnimationFrame(i);
      },
      children: [
        /* @__PURE__ */ r.jsx(zl, { asChild: !0, children: /* @__PURE__ */ r.jsxs(
          be,
          {
            ref: a,
            variant: "ghost",
            className: "flex-shrink-0 text-muted-foreground hover:text-foreground gap-1 px-1.5",
            style: { height: qe.previewControlButtonSize },
            "data-tooltip": `Zoom: ${o}`,
            "aria-label": `Preview zoom: ${o}`,
            onKeyDown: (c) => {
              (c.key === " " || c.code === "Space") && c.preventDefault();
            },
            children: [
              /* @__PURE__ */ r.jsx(Ld, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ r.jsx("span", { className: "text-[10px] leading-none", children: o })
            ]
          }
        ) }),
        /* @__PURE__ */ r.jsx(
          $l,
          {
            align: "end",
            onCloseAutoFocus: (c) => {
              c.preventDefault(), requestAnimationFrame(i);
            },
            children: t.map((c) => /* @__PURE__ */ r.jsx(
              Kl,
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
let w0 = 0, S0 = 0, fo = null;
const k0 = 2, C0 = 90, zc = 1 / 60, M0 = 6;
function R0() {
  return fo || (fo = new _l()), fo;
}
function P0(e) {
  return Math.round(e / zc) * zc;
}
function Lu(e, t, s) {
  return Math.abs(e - t) * s >= M0;
}
function I0(e, t) {
  const s = ne((o) => o.useProxy), a = Qt((o) => e ? o.proxyStatus.get(e) ?? null : null);
  return n.useMemo(() => t ? s && e && $o(e) || t : "", [e, a, t, s]);
}
function Bu({ mediaId: e, src: t, mediaType: s, fileName: a }) {
  return s === "video" ? /* @__PURE__ */ r.jsx(T0, { mediaId: e, src: t }) : s === "image" ? /* @__PURE__ */ r.jsx(E0, { src: t }) : /* @__PURE__ */ r.jsx(F0, { src: t, fileName: a });
}
function T0({ mediaId: e, src: t }) {
  const s = I0(e, t), a = Ps(), o = Ko(), i = Yl(), c = n.useRef(null), l = n.useRef(null), u = n.useRef(fa()), d = n.useRef(`source-monitor-${++w0}`), f = n.useRef(R0()), m = n.useRef(`source-monitor-strict-${++S0}`), b = n.useRef(null), h = n.useRef(null), x = n.useRef(null), v = n.useRef(!0), S = n.useRef(!1), y = n.useRef(!1), w = n.useRef(null), k = n.useRef(0), R = n.useRef(0), O = n.useRef(/* @__PURE__ */ new Map()), L = n.useRef([]), { fps: I } = ql(), j = n.useRef(a.currentFrame), P = n.useRef(o), T = `${e ?? "source-monitor"}:${m.current}`, [F, E] = n.useState(!1), [N, z] = n.useState(!1), [M, q] = n.useState(!1);
  n.useEffect(() => {
    P.current = o;
  }, [o]), n.useEffect(() => (v.current = !0, () => {
    v.current = !1;
    for (const Y of O.current.values())
      Y.close();
    O.current.clear(), L.current = [];
  }), []), n.useEffect(() => {
    E(!1), q(!1);
  }, [s, e]);
  const V = n.useCallback(async (Y) => {
    const pe = b.current, C = h.current;
    if (!pe || !C) return !1;
    let B = x.current;
    if (!B) {
      if (B = C.getContext("2d"), !B) return !1;
      x.current = B;
    }
    const { width: U, height: J } = pe.getDimensions(), re = Math.max(1, Math.round(U || 640)), me = Math.max(1, Math.round(J || 360));
    (C.width !== re || C.height !== me) && (C.width = re, C.height = me);
    const xe = P0(Y), ye = O.current, Re = L.current, Be = ye.get(xe);
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
      for (ye.set(xe, De), Re.push(xe); Re.length > C0; ) {
        const Qe = Re.shift();
        if (Qe === void 0) break;
        const je = ye.get(Qe);
        je && (je.close(), ye.delete(Qe));
      }
    } catch {
    }
    return !0;
  }, []), X = n.useCallback(() => {
    if (y.current) return;
    y.current = !0, (async () => {
      try {
        for (; S.current && w.current !== null && v.current && !P.current; ) {
          const pe = w.current;
          if (w.current = null, await V(pe).catch(() => !1)) {
            R.current = 0, q(!0);
            continue;
          }
          if ((b.current?.getLastFailureKind() ?? "decode-error") === "decode-error" && (R.current += 1, R.current >= k0)) {
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
  n.useEffect(() => {
    if (!s) return;
    const Y = u.current, pe = d.current;
    Y.preloadSource(s).catch(() => {
    });
    const C = Y.acquireForClip(pe, s);
    if (!C) return;
    C.muted = !1, C.volume = 1, C.playsInline = !0, C.style.width = "100%", C.style.height = "100%", C.style.objectFit = "contain", C.style.display = "block", C.style.position = "absolute", C.style.top = "0", C.style.left = "0";
    const B = c.current;
    return B && C.parentElement !== B && B.appendChild(C), l.current = C, () => {
      C.pause(), C.parentElement && C.parentElement.removeChild(C), Y.releaseClip(pe), l.current = null;
    };
  }, [s]), n.useEffect(() => {
    S.current = !1, z(!1), q(!1), b.current = null, w.current = null, R.current = 0, x.current = null;
    for (const B of O.current.values())
      B.close();
    if (O.current.clear(), L.current = [], !s) return;
    const Y = f.current, pe = Y.getOrCreateItemExtractor(T, s);
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
  }, [s, T, X]);
  const D = n.useCallback((Y) => {
    const pe = l.current, C = Y / I;
    if (k.current = C, j.current = Y, !P.current && !F && (w.current = C, S.current && X()), !(!pe || !s || !(pe.readyState >= 1)) && !(!P.current && N && M && !F)) {
      if (P.current) {
        if (!Lu(pe.currentTime, C, I))
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
  }, [s, I, M, X, N, F]);
  n.useEffect(() => (D(a.currentFrame), a.onFrameChange((Y) => {
    D(Y);
  })), [a, D]), n.useEffect(() => {
    D(a.currentFrame);
  }, [a, o, D]), n.useEffect(() => {
    const Y = l.current;
    if (!(!Y || !s))
      if (o) {
        if (Y.playbackRate = i, Y.readyState >= 1)
          try {
            Y.currentTime = k.current;
          } catch {
          }
        Y.play().catch(() => {
        });
      } else
        Y.pause();
  }, [s, i, o]);
  const W = !o && N && M && !F;
  return /* @__PURE__ */ r.jsxs(Yo, { children: [
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
function E0({ src: e }) {
  return /* @__PURE__ */ r.jsx(Yo, { children: /* @__PURE__ */ r.jsx(
    "img",
    {
      src: e,
      style: { width: "100%", height: "100%", objectFit: "contain" },
      alt: "Source preview"
    }
  ) });
}
function F0({ src: e, fileName: t }) {
  const s = n.useRef(null), a = Ps(), o = Ko(), i = Yl(), { fps: c } = ql(), l = n.useRef(a.currentFrame), u = n.useCallback((d) => {
    const f = s.current;
    if (!f || !e) return;
    const m = d / c;
    if (l.current = d, f.readyState >= 1 && !(o && !Lu(f.currentTime, m, c)))
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
  }, [o, i, e, c]), /* @__PURE__ */ r.jsxs(Yo, { style: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1a1a2e" }, children: [
    /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }, children: [
      /* @__PURE__ */ r.jsx(Bd, { style: { width: 48, height: 48, color: "#22c55e" } }),
      /* @__PURE__ */ r.jsx("span", { style: { color: "#a1a1aa", fontSize: 14, maxWidth: 200, textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: t })
    ] }),
    /* @__PURE__ */ r.jsx("audio", { ref: s, src: e, preload: "auto" })
  ] });
}
const j0 = 33, N0 = n.memo(function({
  mediaId: t,
  onClose: s,
  variant: a = "panel",
  interactive: o = !0,
  seekFrame: i = null
}) {
  const [c, l] = n.useState(""), u = Qt((x) => x.mediaItems.find((v) => v.id === t));
  if (n.useEffect(() => {
    if (o)
      return Zt.getState().setCurrentMediaId(t), () => {
        Zt.getState().setCurrentMediaId(null);
      };
  }, [o, t]), n.useEffect(() => {
    u || s?.();
  }, [u, s]), n.useEffect(() => {
    let x = !1;
    return hn(t).then((v) => {
      x || l(v);
    }).catch(() => {
    }), () => {
      x = !0;
    };
  }, [t]), !u) return null;
  const d = wa(u.mimeType);
  if (d === "unknown") return null;
  const f = u.fps || 30, m = u.width || 640, b = u.height || 360, h = d === "image" ? 1 : Math.max(1, Math.round(u.duration * f));
  return /* @__PURE__ */ r.jsx(Ca, { children: /* @__PURE__ */ r.jsx(
    xa,
    {
      fps: f,
      durationInFrames: h,
      onVolumeChange: () => {
      },
      children: /* @__PURE__ */ r.jsx(
        ba,
        {
          fps: f,
          width: m,
          height: b,
          durationInFrames: h,
          children: /* @__PURE__ */ r.jsx(
            A0,
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
function A0({
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
  const h = n.useRef(null), x = n.useRef(null), v = n.useRef(null), S = n.useRef(null), y = es((F) => F.editorDensity), w = Sa(y), k = n.useCallback(() => {
    const F = h.current, E = x.current, N = v.current;
    if (!F || !E || !N) return;
    const z = Math.max(0, F.clientWidth - w.previewPadding), M = Math.max(0, F.clientHeight - w.previewPadding), q = z > 0 && M > 0 ? Math.min(z / i, M / c) : 1, V = i * q, X = c * q, D = S.current;
    D && D.scaledWidth === V && D.scaledHeight === X && D.scale === q || (S.current = {
      scaledWidth: V,
      scaledHeight: X,
      scale: q
    }, E.style.width = `${V}px`, E.style.height = `${X}px`, E.style.marginLeft = `${-V / 2}px`, E.style.marginTop = `${-X / 2}px`, N.style.width = `${i}px`, N.style.height = `${c}px`, N.style.transform = `scale(${q})`);
  }, [w.previewPadding, i, c]);
  n.useEffect(() => {
    const F = h.current;
    if (!F) return;
    let E = null, N = 0;
    const z = () => {
      E === null && (E = requestAnimationFrame(() => {
        const q = performance.now();
        if (q - N < j0) {
          E = requestAnimationFrame(() => {
            E = null, N = performance.now(), k();
          });
          return;
        }
        E = null, N = q, k();
      }));
    }, M = new ResizeObserver(z);
    return M.observe(F), k(), () => {
      M.disconnect(), E !== null && cancelAnimationFrame(E);
    };
  }, [k]), n.useEffect(() => {
    if (!t) return;
    const F = requestAnimationFrame(() => {
      k();
    });
    return () => {
      cancelAnimationFrame(F);
    };
  }, [t, k]);
  const R = Zt((F) => F.setHoveredPanel), O = Zt((F) => F.setPlayerMethods);
  n.useEffect(() => {
    if (f)
      return () => {
        R(null), O(null);
      };
  }, [f, R, O]);
  const L = n.useRef(null), I = n.useRef(!1), j = n.useCallback((F) => {
    if (!f || F.target instanceof HTMLInputElement || F.target instanceof HTMLTextAreaElement) return;
    const { currentSourceFrame: E, setInPoint: N, setOutPoint: z, clearInOutPoints: M } = Zt.getState();
    F.key === "i" || F.key === "I" ? (F.preventDefault(), F.stopPropagation(), N(E)) : F.key === "o" || F.key === "O" ? (F.preventDefault(), F.stopPropagation(), z(E)) : F.altKey && (F.key === "x" || F.key === "X") && (F.preventDefault(), F.stopPropagation(), M());
  }, [f]), P = n.useCallback(() => {
    if (!f) return;
    R("source");
    const F = document.activeElement;
    (F === document.body || L.current?.contains(F)) && (L.current?.focus(), I.current = !0);
  }, [f, R]), T = n.useCallback(() => {
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
      onKeyDown: j,
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
                  children: /* @__PURE__ */ r.jsx(Xl, { className: "w-3.5 h-3.5 text-muted-foreground" })
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
                      Bu,
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
          D0,
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
function D0({
  durationInFrames: e,
  fps: t,
  mediaType: s,
  hasAudio: a,
  interactive: o,
  seekFrame: i
}) {
  const c = Ps(), l = vu(e), u = Ko(), d = Math.max(0, e - 1), f = Jt((ee) => ee.tracks), m = It((ee) => ee.activeTrackId), b = Ct((ee) => ee.sourcePatchVideoEnabled), h = Ct((ee) => ee.sourcePatchAudioEnabled), x = Ct((ee) => ee.toggleSourcePatchVideoEnabled), v = Ct((ee) => ee.toggleSourcePatchAudioEnabled), S = n.useRef(c.currentFrame), y = n.useRef(null), w = n.useRef(null), k = n.useRef(Zt.getState().outPoint), [R, O] = n.useState(!1), L = n.useRef(R);
  L.current = R;
  const I = Math.max(e.toString().length, 1), j = n.useCallback(
    (ee) => ee.toString().padStart(I, "0"),
    [I]
  ), P = n.useCallback(
    (ee) => L.current ? j(ee) : zn(ee, t),
    [t, j]
  ), T = n.useCallback((ee) => {
    if (S.current = ee, o && Zt.getState().setCurrentSourceFrame(ee), y.current) {
      const Ge = d > 0 ? ee / d * 100 : 0;
      y.current.style.width = `${Ge}%`;
    }
    w.current && (w.current.textContent = L.current ? j(ee) : zn(ee, t));
  }, [t, j, o, d]);
  n.useEffect(() => {
    if (!o) return;
    const ee = Zt.getState().setPlayerMethods;
    return ee({
      toggle: l.toggle,
      seek: l.seek,
      frameBack: l.frameBack,
      frameForward: l.frameForward,
      getDurationInFrames: () => e
    }), () => {
      Zt.getState().setPlayerMethods(null);
    };
  }, [e, o, l.toggle, l.seek, l.frameBack, l.frameForward]), n.useEffect(() => (T(c.currentFrame), c.onFrameChange((ee) => {
    T(ee), Re.current && c.isPlaying && k.current !== null && ee >= k.current && (l.pause(), Re.current = !1);
  })), [c, l, T]);
  const F = Zt((ee) => ee.pendingSeekFrame);
  n.useEffect(() => {
    o && F !== null && (l.seek(F), Zt.getState().setPendingSeekFrame(null));
  }, [o, F, l]), n.useEffect(() => {
    i !== null && l.seek(i);
  }, [l, i]);
  const E = Zt((ee) => ee.inPoint), N = Zt((ee) => ee.outPoint);
  n.useEffect(() => {
    k.current = N;
  }, [N]);
  const z = n.useRef(null), M = n.useRef(!1), q = n.useRef(null), V = n.useRef(null), X = n.useCallback(
    (ee) => {
      const Ge = z.current;
      if (!Ge) return;
      const H = Ge.getBoundingClientRect(), ue = Math.max(0, Math.min(1, (ee - H.left) / H.width));
      l.seek(Math.round(ue * d));
    },
    [l, d]
  ), D = n.useCallback(
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
  n.useEffect(() => () => {
    q.current && (document.removeEventListener("mousemove", q.current), q.current = null), V.current && (document.removeEventListener("mouseup", V.current), V.current = null), M.current = !1;
  }, []);
  const W = o && E !== null && d > 0 ? E / d * 100 : null, Y = o && N !== null && d > 0 ? N / d * 100 : null, pe = n.useRef(null), C = n.useRef(null), B = n.useCallback(
    (ee) => {
      const Ge = pe.current;
      if (!Ge) return 0;
      const H = Ge.getBoundingClientRect(), ue = Math.max(0, Math.min(1, (ee - H.left) / H.width));
      return Math.round(ue * d);
    },
    [d]
  ), U = n.useCallback(
    (ee, Ge) => {
      ee.preventDefault(), ee.stopPropagation();
      const H = document.body.style.cursor;
      document.body.style.cursor = "col-resize";
      const ue = Zt.getState, Ce = (Me) => {
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
  ), J = n.useCallback(
    (ee) => {
      ee.preventDefault(), ee.stopPropagation();
      const Ge = Zt.getState, H = Ge().inPoint, ue = Ge().outPoint;
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
  n.useEffect(() => () => C.current?.(), []);
  const re = o && E !== null && N !== null ? P(N - E) : null, me = n.useCallback(() => {
    Zt.getState().setInPoint(S.current);
  }, []), xe = n.useCallback(() => {
    Zt.getState().setOutPoint(S.current);
  }, []), ye = n.useCallback(() => {
    Zt.getState().clearInOutPoints();
  }, []), Re = n.useRef(!1);
  n.useEffect(() => {
    u || (Re.current = !1);
  }, [u]);
  const Be = n.useCallback(() => {
    const { inPoint: ee, outPoint: Ge } = Zt.getState();
    ee === null && Ge === null || (Re.current = !0, l.seek(ee ?? 0), l.play());
  }, [l]), Fe = n.useMemo(
    () => m ? f.find((ee) => ee.id === m) ?? null : null,
    [m, f]
  ), De = n.useMemo(() => {
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
    const ee = Hd({
      tracks: f,
      activeTrackId: m,
      mediaType: s,
      hasAudio: a,
      patchVideo: b,
      patchAudio: h,
      preferredTrackHeight: Fe.height
    });
    if (!ee) {
      let H = "Enable V and/or A";
      return s === "audio" && !h ? H = "Enable A" : (s === "video" || s === "image") && !b && !a && (H = "Enable V"), {
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
    s,
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
                style: { width: `${d > 0 ? c.currentFrame / d * 100 : 0}%` }
              }
            )
          }
        )
      ] }),
      o && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
        /* @__PURE__ */ r.jsxs(cr, { children: [
          /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(
            be,
            {
              variant: "ghost",
              size: "icon",
              style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize },
              disabled: E === null && N === null,
              onClick: Be,
              children: /* @__PURE__ */ r.jsx(Ud, { className: "w-3 h-3" })
            }
          ) }),
          /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Play In to Out" })
        ] }),
        /* @__PURE__ */ r.jsxs(cr, { children: [
          /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: me, children: /* @__PURE__ */ r.jsx(sm, { className: "w-3 h-3" }) }) }),
          /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Mark In (I)" })
        ] }),
        /* @__PURE__ */ r.jsxs(cr, { children: [
          /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: xe, children: /* @__PURE__ */ r.jsx(am, { className: "w-3 h-3" }) }) }),
          /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Mark Out (O)" })
        ] }),
        /* @__PURE__ */ r.jsxs(cr, { children: [
          /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: ye, children: /* @__PURE__ */ r.jsx(Gd, { className: "w-3 h-3" }) }) }),
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
                /* @__PURE__ */ r.jsx("span", { ref: w, className: "text-primary font-semibold", children: P(c.currentFrame) }),
                /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground/50", children: "/" }),
                /* @__PURE__ */ r.jsx("span", { children: P(d) })
              ]
            }
          ),
          /* @__PURE__ */ r.jsx("span", { className: "text-[11px] font-mono text-primary/70 shrink-0 hidden @min-[480px]:inline", children: re ? `[${re}]` : "" }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => l.seek(0), children: /* @__PURE__ */ r.jsx(Hl, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Go to start (Home)" })
            ] }),
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => l.frameBack(1), children: /* @__PURE__ */ r.jsx(Ms, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Previous frame (←)" })
            ] }),
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => l.toggle(), children: u ? /* @__PURE__ */ r.jsx(Ul, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(Gl, { className: "w-3.5 h-3.5 ml-0.5" }) }) }),
              /* @__PURE__ */ r.jsxs(ur, { side: "top", children: [
                u ? "Pause" : "Play",
                " (Space)"
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => l.frameForward(1), children: /* @__PURE__ */ r.jsx(Rs, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Next frame (→)" })
            ] }),
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => l.seek(d), children: /* @__PURE__ */ r.jsx(Vl, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Go to end (End)" })
            ] })
          ] }),
          o ? /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 shrink-0", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5 rounded-md border border-border bg-secondary/50 px-1 py-0.5", children: [
                /* @__PURE__ */ r.jsxs(cr, { children: [
                  /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(
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
                  /* @__PURE__ */ r.jsx(ur, { side: "top", children: Qe })
                ] }),
                /* @__PURE__ */ r.jsxs(cr, { children: [
                  /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(
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
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => Vd(), children: /* @__PURE__ */ r.jsx(om, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Insert (,)" })
            ] }),
            /* @__PURE__ */ r.jsxs(cr, { children: [
              /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(be, { variant: "ghost", size: "icon", style: { width: qe.toolbarButtonSize, height: qe.toolbarButtonSize }, onClick: () => Wd(), children: /* @__PURE__ */ r.jsx(im, { className: "w-3.5 h-3.5" }) }) }),
              /* @__PURE__ */ r.jsx(ur, { side: "top", children: "Overwrite (.)" })
            ] })
          ] }) : /* @__PURE__ */ r.jsx("div", { className: "w-[11ch] shrink-0", "aria-hidden": "true" })
        ]
      }
    )
  ] });
}
function O0({ frame: e }) {
  const t = Ps();
  return n.useEffect(() => {
    t.seekToFrame(e ?? 0);
  }, [t, e]), null;
}
const _0 = n.memo(function({
  mediaId: t,
  seekFrame: s,
  containerSize: a
}) {
  const [o, i] = n.useState(""), c = Qt((v) => v.mediaById[t]), l = ne((v) => v.zoom), u = c?.width || 640, d = c?.height || 360;
  n.useEffect(() => {
    let v = !1;
    return i(""), hn(t).then((S) => {
      v || i(S);
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
  const b = wa(c.mimeType);
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
              children: o ? /* @__PURE__ */ r.jsx(Ca, { children: /* @__PURE__ */ r.jsx(
                xa,
                {
                  fps: h,
                  durationInFrames: x,
                  initialFrame: s ?? 0,
                  onVolumeChange: () => {
                  },
                  children: /* @__PURE__ */ r.jsxs(
                    ba,
                    {
                      fps: h,
                      width: u,
                      height: d,
                      durationInFrames: x,
                      children: [
                        /* @__PURE__ */ r.jsx(O0, { frame: s }),
                        /* @__PURE__ */ r.jsx(
                          Bu,
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
function L0({ frame: e }) {
  const t = Ps();
  return n.useEffect(() => {
    t.seekToFrame(e ?? 0);
  }, [t, e]), null;
}
const B0 = n.memo(function({
  compositionId: t,
  seekFrame: s,
  containerSize: a
}) {
  const o = zi((S) => S.compositionById[t]), i = zi((S) => S.compositionById), c = ne((S) => S.zoom), [l, u] = n.useState(null), d = n.useMemo(
    () => o ? zd(o) : null,
    [o]
  );
  n.useEffect(() => {
    if (!o || !d) {
      u(null);
      return;
    }
    let S = !1;
    return u(null), (async () => {
      const w = $d(t, i);
      await Promise.all(w.map((R) => hn(R)));
      const k = await Kd(d.tracks, { useProxy: !1 });
      S || u(k);
    })().catch(() => {
      S || u([]);
    }), () => {
      S = !0;
    };
  }, [o, i, t, d]);
  const f = o?.width || 640, m = o?.height || 360, b = Math.min(
    Math.max(1, o?.durationInFrames ?? 1) - 1,
    Math.max(0, s ?? 0)
  ), h = n.useMemo(() => {
    const S = f / m;
    if (c === -1) {
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
              children: l ? /* @__PURE__ */ r.jsx(Ca, { children: /* @__PURE__ */ r.jsx(
                xa,
                {
                  fps: o.fps,
                  durationInFrames: v,
                  initialFrame: b,
                  onVolumeChange: () => {
                  },
                  children: /* @__PURE__ */ r.jsxs(
                    ba,
                    {
                      fps: o.fps,
                      width: o.width,
                      height: o.height,
                      durationInFrames: v,
                      children: [
                        /* @__PURE__ */ r.jsx(L0, { frame: b }),
                        /* @__PURE__ */ r.jsx(
                          Bl,
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
}), H0 = (
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
), U0 = (
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
class G0 {
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
      compute: { module: t.createShaderModule({ code: H0 }), entryPoint: "main" }
    }), this.renderBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 4, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "uniform" } }
      ]
    });
    const o = t.createShaderModule({ code: U0 });
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
    }), S = b.beginRenderPass({
      colorAttachments: [{
        view: s.getCurrentTexture().createView(),
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
const V0 = (
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
), W0 = (
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
), mo = 1024, Qs = 512;
class z0 {
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
    const a = mo * Qs * 4;
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
      compute: { module: t.createShaderModule({ code: V0 }), entryPoint: "main" }
    }), this.renderBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "uniform" } },
        { binding: 4, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } }
      ]
    });
    const o = t.createShaderModule({ code: W0 });
    this.renderPipeline = t.createRenderPipeline({
      layout: t.createPipelineLayout({ bindGroupLayouts: [this.renderBGL] }),
      vertex: { module: o, entryPoint: "vs" },
      fragment: { module: o, entryPoint: "fs", targets: [{ format: s }] }
    });
  }
  accumulate(t, s, a, o, i) {
    const c = this.device, l = t.width, u = t.height, d = new ArrayBuffer(32);
    new Uint32Array(d, 0, 4).set([mo, Qs, l, u]), new Float32Array(d, 16, 4).set([s, a, o, i]), c.queue.writeBuffer(this.computeParams, 0, d);
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
    const o = this.device, i = Math.sqrt(a / Qs) * 40, c = new ArrayBuffer(32);
    new Float32Array(c, 0, 4).set([mo, Qs, i, 0.9]), new Uint32Array(c, 16, 4).set([s, 0, 0, 0]), o.queue.writeBuffer(this.renderParams, 0, c);
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
const $0 = (
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
), K0 = (
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
class Y0 {
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
      compute: { module: t.createShaderModule({ code: $0 }), entryPoint: "main" }
    }), this.renderBGL = t.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "read-only-storage" } },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "uniform" } }
      ]
    });
    const o = t.createShaderModule({ code: K0 });
    this.renderPipeline = t.createRenderPipeline({
      layout: t.createPipelineLayout({ bindGroupLayouts: [this.renderBGL] }),
      vertex: { module: o, entryPoint: "vs" },
      fragment: { module: o, entryPoint: "fs", targets: [{ format: s }] }
    });
  }
  render(t, s, a, o) {
    const i = this.device, c = t.width, l = t.height, u = new ArrayBuffer(32);
    new Uint32Array(u, 0, 4).set([Un, c, l, 0]), new Float32Array(u, 16, 4).set([a, o, 0, 0]), i.queue.writeBuffer(this.computeParams, 0, u);
    const d = Math.sqrt(c * l / (Un * Un)) * 18;
    i.queue.writeBuffer(this.renderParams, 0, new Float32Array([Un, d, 0, 0]));
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
class si {
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
    this.device = t, this.format = navigator.gpu.getPreferredCanvasFormat(), this.histogram = new G0(t, this.format), this.waveform = new z0(t, this.format), this.vectorscope = new Y0(t, this.format);
  }
  static async create() {
    if (typeof navigator > "u" || !navigator.gpu) return null;
    try {
      const t = await navigator.gpu.requestAdapter();
      if (!t) return null;
      const s = await t.requestDevice();
      return new si(s);
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
const $c = 384, Kc = 216, Yc = 256, qc = 144, q0 = 66, X0 = 220, Hu = "timeline:scopes:colorMatrix", Uu = "timeline:scopes:rangeMode", Gu = "timeline:scopes:stackLayout", Xc = { rgb: 0, r: 1, g: 2, b: 3, luma: 4 };
function Ma(e) {
  return e === "bt601" ? { kr: 0.299, kb: 0.114 } : { kr: 0.2126, kb: 0.0722 };
}
function Z0() {
  try {
    const e = localStorage.getItem(Hu);
    if (e === "bt601" || e === "bt709") return e;
  } catch {
  }
  return "bt709";
}
function J0() {
  try {
    const e = localStorage.getItem(Uu);
    if (e === "full" || e === "legal") return e;
  } catch {
  }
  return "full";
}
function Q0() {
  try {
    const e = localStorage.getItem(Gu);
    if (e === "three-up" || e === "all") return e;
  } catch {
  }
  return "three-up";
}
function ai(e, t) {
  if (t === "legal") {
    const s = 0.06274509803921569, a = 235 / 255;
    return Math.max(0, Math.min(1, (e - s) / (a - s)));
  }
  return Math.max(0, Math.min(1, e));
}
function oi(e, t, s) {
  e.save(), e.strokeStyle = "rgba(148, 163, 184, 0.18)", e.lineWidth = 1, e.fillStyle = "rgba(148, 163, 184, 0.8)", e.font = "10px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
  for (const a of [0, 25, 50, 75, 100]) {
    const o = Math.round(s - 1 - a / 100 * (s - 1));
    e.beginPath(), e.moveTo(0, o + 0.5), e.lineTo(t, o + 0.5), e.stroke(), e.fillText(String(a), 4, Math.max(10, o - 2));
  }
  e.restore();
}
function ex(e, t, s, a, o, i) {
  const { kr: c, kb: l } = Ma(s), u = 1 - c - l, { data: d, width: f, height: m } = e, b = new Uint16Array(o * i);
  let h = 0;
  for (let y = 0; y < m; y++)
    for (let w = 0; w < f; w++) {
      const k = (y * f + w) * 4, R = (d[k] ?? 0) / 255, O = (d[k + 1] ?? 0) / 255, L = (d[k + 2] ?? 0) / 255, I = ai(c * R + u * O + l * L, a), j = Math.floor(w / Math.max(1, f - 1) * (o - 1)), T = (i - 1 - Math.floor(I * (i - 1))) * o + j, F = (b[T] ?? 0) + 1;
      b[T] = F, F > h && (h = F);
    }
  const x = t.createImageData(o, i), v = x.data, S = Math.log1p(Math.max(1, h));
  for (let y = 0; y < b.length; y++) {
    const w = b[y] ?? 0;
    if (w <= 0) continue;
    const k = Math.log1p(w) / S;
    if (k <= 0) continue;
    const R = y * 4;
    v[R] = 40, v[R + 1] = Math.min(255, Math.round(65 + k * 190)), v[R + 2] = 120, v[R + 3] = Math.min(255, Math.round(95 + k * 160));
  }
  t.fillStyle = "#030712", t.fillRect(0, 0, o, i), t.putImageData(x, 0, 0), oi(t, o, i);
}
function tx(e, t, s, a, o) {
  const { data: i, width: c, height: l } = e, u = new Uint16Array(a * o);
  let d = 0;
  const f = Math.floor(a / 3), m = [[255, 80, 80], [60, 255, 120], [90, 130, 255]];
  for (let v = 0; v < l; v++)
    for (let S = 0; S < c; S++) {
      const y = (v * c + S) * 4, w = [(i[y] ?? 0) / 255, (i[y + 1] ?? 0) / 255, (i[y + 2] ?? 0) / 255], k = Math.floor(S / Math.max(1, c - 1) * (f - 1));
      for (let R = 0; R < 3; R++) {
        const O = ai(w[R] ?? 0, s), L = R * f + k, j = (o - 1 - Math.floor(O * (o - 1))) * a + L, P = (u[j] ?? 0) + 1;
        u[j] = P, P > d && (d = P);
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
  t.fillStyle = "#030712", t.fillRect(0, 0, a, o), t.putImageData(b, 0, 0), oi(t, a, o), t.save(), t.strokeStyle = "rgba(148, 163, 184, 0.28)", t.lineWidth = 1;
  for (let v = 1; v < 3; v++) {
    const S = v * f;
    t.beginPath(), t.moveTo(S + 0.5, 0), t.lineTo(S + 0.5, o), t.stroke();
  }
  t.fillStyle = "rgba(148, 163, 184, 0.9)", t.font = "10px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", t.fillText("R", 8, 12), t.fillText("G", f + 8, 12), t.fillText("B", f * 2 + 8, 12), t.restore();
}
function rx(e, t, s, a, o, i) {
  const { kr: c, kb: l } = Ma(s), u = 1 - c - l, { data: d, width: f, height: m } = e, b = new Uint32Array(256);
  let h = 0;
  for (let v = 0; v < m; v++)
    for (let S = 0; S < f; S++) {
      const y = (v * f + S) * 4, w = (d[y] ?? 0) / 255, k = (d[y + 1] ?? 0) / 255, R = (d[y + 2] ?? 0) / 255, O = ai(c * w + u * k + l * R, a), L = Math.max(0, Math.min(255, Math.round(O * 255))), I = (b[L] ?? 0) + 1;
      b[L] = I, I > h && (h = I);
    }
  t.fillStyle = "#030712", t.fillRect(0, 0, o, i), oi(t, o, i);
  const x = Math.log1p(Math.max(1, h));
  for (let v = 0; v < 256; v++) {
    const S = b[v] ?? 0;
    if (S <= 0) continue;
    const y = Math.log1p(S) / x, w = Math.round(v / 255 * (o - 1)), k = Math.max(1, Math.round(y * (i - 1)));
    t.fillStyle = `rgba(116, 232, 195, ${0.35 + y * 0.65})`, t.fillRect(w, i - k, Math.max(1, Math.round(o / 256)), k);
  }
}
function nx(e, t, s, a) {
  const { kr: o, kb: i } = Ma(s), c = 1 - o - i, { data: l, width: u, height: d } = e, f = new Uint32Array(a * a);
  let m = 0;
  const b = Math.floor(a / 2), h = b - 2;
  for (let y = 0; y < d; y++)
    for (let w = 0; w < u; w++) {
      const k = (y * u + w) * 4, R = (l[k] ?? 0) / 255, O = (l[k + 1] ?? 0) / 255, L = (l[k + 2] ?? 0) / 255, I = o * R + c * O + i * L, j = (L - I) / (2 * (1 - i)), P = (R - I) / (2 * (1 - o)), T = Math.round(b + j * h * 2), F = Math.round(b - P * h * 2);
      if (T < 0 || T >= a || F < 0 || F >= a) continue;
      const E = F * a + T, N = (f[E] ?? 0) + 1;
      f[E] = N, N > m && (m = N);
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
function ea(e, t, s, a, o) {
  const i = e.getBoundingClientRect(), c = Math.max(2, Math.min(a, Math.round(i.width || t))), l = Math.max(2, Math.min(o, Math.round(i.height || s)));
  return (e.width !== c || e.height !== l) && (e.width = c, e.height = l), { width: c, height: l };
}
function fs({
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
function ta(e, t, s, a = !0) {
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
        const S = d / s;
        S <= f ? h = S : (h = f, b = f * s);
      }
      const x = Math.round(b * m), v = Math.round(h * m);
      (i.width !== x || i.height !== v) && (i.width = x, i.height = v, i.style.width = `${Math.round(b)}px`, i.style.height = `${Math.round(h)}px`);
    });
    return c.observe(o), () => c.disconnect();
  }, [s, e, t, a]);
}
const sx = n.memo(function({
  open: t,
  embedded: s = !1,
  embeddedLayout: a = "grid"
}) {
  const [o, i] = n.useState(() => Z0()), [c, l] = n.useState(() => J0()), [u, d] = n.useState("idle"), [f, m] = n.useState(null), [b, h] = n.useState("luma"), [x, v] = n.useState("rgb"), [S, y] = n.useState(() => Q0()), w = ne((Fe) => Fe.isPlaying), k = ne((Fe) => Fe.captureFrameImageData), R = ne((Fe) => Fe.captureFrame), O = s && a === "stack", L = s && (!O || S === "all"), I = n.useRef(null), j = n.useRef(null), P = n.useRef(null), T = n.useRef(null), F = n.useRef(null), E = n.useRef(null), N = n.useRef(null), z = n.useRef(null), M = n.useRef(null), q = n.useRef(/* @__PURE__ */ new Map()), V = n.useRef(!1), X = n.useRef(!1), D = n.useRef(!1), W = n.useRef(!1), Y = n.useRef(null), pe = n.useRef(0), C = n.useRef(o);
  C.current = o;
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
      localStorage.setItem(Hu, o);
    } catch {
    }
  }, [o]), n.useEffect(() => {
    try {
      localStorage.setItem(Uu, c);
    } catch {
    }
  }, [c]), n.useEffect(() => {
    try {
      localStorage.setItem(Gu, S);
    } catch {
    }
  }, [S]), ta(I, F), ta(j, E), ta(T, z, void 0, L), ta(P, N, 1), n.useEffect(() => {
    !t || V.current || (V.current = !0, si.create().then((Fe) => {
      Fe ? (M.current = Fe, m(!0)) : m(!1);
    }));
  }, [t]), n.useEffect(() => () => {
    M.current?.destroy(), M.current = null, q.current.clear();
  }, []);
  const ye = n.useCallback((Fe) => {
    if (!Fe) return null;
    const De = M.current;
    if (!De) return null;
    const Qe = q.current;
    let je = Qe.get(Fe);
    return je || (je = De.configureCanvas(Fe) ?? void 0, je && Qe.set(Fe, je), je ?? null);
  }, []);
  n.useEffect(() => {
    if (f !== !0 || !t) return;
    const Fe = M.current;
    if (!Fe) return;
    let De = !1, Qe = 0;
    const je = (H) => {
      De || (H - Qe >= q0 && !X.current && (Qe = H, ee()), requestAnimationFrame(je));
    }, ee = async () => {
      if (X.current) return;
      X.current = !0;
      const { kr: H, kb: ue } = Ma(C.current), [Ce, Ve] = B.current === "legal" ? [16 / 255, 235 / 255] : [0, 1];
      Fe.setMatrix(H, ue), Fe.setRange(Ce, Ve);
      try {
        const Me = ne.getState().captureCanvasSource;
        if (Me) {
          const Ye = await Me();
          Ye && !De ? Fe.uploadFromCanvas(Ye) : De || await Ge(Fe);
        } else
          await Ge(Fe);
        if (De) return;
        const _ = ye(I.current), he = [];
        if (_ && he.push({ ctx: _, mode: Xc[me.current] }), J.current) {
          const Ye = ye(j.current);
          if (Ye && he.push({ ctx: Ye, mode: 5 }), re.current) {
            const $e = ye(T.current);
            $e && Fe.renderHistogram($e, Xc[xe.current]);
          }
        }
        he.length > 0 && Fe.renderWaveforms(he);
        const et = ye(P.current);
        et && Fe.renderVectorscope(et), d("live");
      } catch {
        d("error");
      } finally {
        X.current = !1;
      }
    }, Ge = async (H) => {
      const Ce = ne.getState().captureFrameImageData;
      if (!Ce) return;
      const Ve = U.current ? Yc : $c, Me = U.current ? qc : Kc, _ = await Ce({ width: Ve, height: Me });
      _ && H.uploadFrame(_);
    };
    return requestAnimationFrame(je), () => {
      De = !0;
    };
  }, [f, t, ye]);
  const Re = n.useCallback(async (Fe = 0) => {
    if (!t || f !== !1 || !k && !R) return;
    const De = () => {
      const Ye = ne.getState();
      return Ye.previewFrame ?? Ye.currentFrame;
    }, Qe = De(), je = I.current, ee = P.current;
    if (!je || !ee) return;
    const Ge = ea(je, 512, 256, 1920, 1080), H = j.current ? ea(j.current, 512, 256, 1920, 1080) : null, ue = T.current ? ea(T.current, 512, 256, 1920, 1080) : null, Ce = ea(ee, 256, 256, 1024, 1024), Ve = Math.max(2, Math.min(Ce.width, Ce.height));
    (ee.width !== Ve || ee.height !== Ve) && (ee.width = Ve, ee.height = Ve);
    const Me = je.getContext("2d"), _ = j.current?.getContext("2d") ?? null, he = ee.getContext("2d"), et = T.current?.getContext("2d") ?? null;
    if (!(!Me || !he))
      try {
        const Ye = w ? Yc : $c, $e = w ? qc : Kc;
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
            const _r = Bt.getContext("2d", { willReadFrequently: !0 });
            if (!_r) return;
            _r.clearRect(0, 0, Ye, $e), _r.drawImage(yr, 0, 0, Ye, $e), ct = _r.getImageData(0, 0, Ye, $e);
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
        ex(ct, Me, o, c, Ge.width, Ge.height);
        const pt = !w || pe.current % 2 === 0;
        pe.current += 1, s && _ && H && pt && tx(ct, _, c, H.width, H.height), nx(ct, he, o, Ve), L && et && ue && pt && rx(ct, et, o, c, ue.width, ue.height), d("live");
      } catch {
        d("error");
      }
  }, [k, R, t, f, o, c, s, w, L]), Be = n.useCallback(async () => {
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
  return n.useEffect(() => {
    if (f !== !1 || !t || w) return;
    let Fe = null;
    const De = () => {
      Fe === null && (Fe = requestAnimationFrame(() => {
        Fe = null, Be();
      }));
    };
    De();
    const Qe = ne.subscribe((je, ee) => {
      if (je.isPlaying)
        return;
      const Ge = je.previewFrame ?? je.currentFrame, H = ee.previewFrame ?? ee.currentFrame;
      Ge !== H && De();
    });
    return () => {
      Qe(), Fe !== null && cancelAnimationFrame(Fe), W.current = !1;
    };
  }, [f, t, w, Be]), n.useEffect(() => {
    if (f !== !1 || !t || !w) return;
    let Fe = !1;
    return (async () => {
      for (; !Fe; )
        await Be(), await new Promise((De) => setTimeout(De, X0));
    })(), () => {
      Fe = !0;
    };
  }, [f, t, w, Be]), t ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: fr(
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
                    variant: S === "three-up" ? "secondary" : "ghost",
                    size: "sm",
                    className: "h-5 px-1.5 text-[10px]",
                    onClick: () => y("three-up"),
                    children: "3-Up"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  be,
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
              Yd,
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
              f && /* @__PURE__ */ r.jsx(fs, { mode: b, onChange: h })
            ] }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                ref: F,
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
              f && /* @__PURE__ */ r.jsx(fs, { mode: x, onChange: v })
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
                f && /* @__PURE__ */ r.jsx(fs, { mode: b, onChange: h })
              ] }),
              /* @__PURE__ */ r.jsx("div", { ref: F, className: "flex-1 min-h-[108px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: I, className: "w-full h-full" }) })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex min-h-0 flex-col", children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-[10px] mb-1 text-muted-foreground", children: "RGB Parade" }),
              /* @__PURE__ */ r.jsx("div", { ref: E, className: "flex-1 min-h-[108px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: j, className: "w-full h-full" }) })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "col-span-2 flex min-h-0 flex-col", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Histogram" }),
                f && /* @__PURE__ */ r.jsx(fs, { mode: x, onChange: v })
              ] }),
              /* @__PURE__ */ r.jsx("div", { ref: z, className: "flex-1 min-h-[88px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: T, className: "w-full h-full" }) })
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
              f && /* @__PURE__ */ r.jsx(fs, { mode: b, onChange: h })
            ] }),
            /* @__PURE__ */ r.jsx("div", { ref: F, className: "w-[220px] h-[110px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: I, className: "w-full h-full" }) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("div", { className: "text-[10px] mb-1 text-muted-foreground", children: "Vectorscope" }),
            /* @__PURE__ */ r.jsx("div", { ref: N, className: "w-[160px] h-[160px] rounded border border-border/70 bg-black/80", children: /* @__PURE__ */ r.jsx("canvas", { ref: P, className: "w-full h-full" }) })
          ] })
        ] })
      ]
    }
  ) : null;
}), ax = sx;
function ox({ onClose: e }) {
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
              children: /* @__PURE__ */ r.jsx(Xl, { className: "w-3.5 h-3.5 text-muted-foreground" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-3 panel-bg [scrollbar-gutter:stable]", children: /* @__PURE__ */ r.jsx(ax, { open: !0, embedded: !0, embeddedLayout: "stack" }) })
  ] });
}
function Ra(e = {}) {
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
function ix({
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
function cx({
  isFullscreen: e,
  onToggle: t
}) {
  return /* @__PURE__ */ r.jsxs(cr, { children: [
    /* @__PURE__ */ r.jsx(lr, { asChild: !0, children: /* @__PURE__ */ r.jsx(
      be,
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
        children: e ? /* @__PURE__ */ r.jsx(qd, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(To, { className: "w-3.5 h-3.5" })
      }
    ) }),
    /* @__PURE__ */ r.jsx(ur, { side: "top", children: e ? "Exit fullscreen (Esc)" : "Fullscreen program monitor" })
  ] });
}
const Zc = [
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
], lx = 0.02;
function ux(e, t) {
  if (e <= 0 || t <= 0) return "horizontal";
  const s = e / t;
  return Math.abs(s - 1) < lx ? "square" : s > 1 ? "horizontal" : "vertical";
}
function dx({
  width: e,
  height: t
}) {
  const s = sr((x) => x.currentProject?.id), a = sr((x) => x.updateProject), [o, i] = n.useState(!1), c = n.useRef(null), l = n.useCallback(() => {
    c.current?.blur();
  }, []), u = ux(e, t), d = Zc.find((x) => x.id === u), f = d?.label ?? `${e}×${t}`, m = u === "vertical" ? cm : u === "square" ? iu : lm, b = async (x, v) => {
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
    Wl,
    {
      onOpenChange: (x) => {
        x || requestAnimationFrame(l);
      },
      children: [
        /* @__PURE__ */ r.jsx(zl, { asChild: !0, children: /* @__PURE__ */ r.jsxs(
          be,
          {
            ref: c,
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
          $l,
          {
            align: "end",
            className: "min-w-[240px]",
            onCloseAutoFocus: (x) => {
              x.preventDefault(), requestAnimationFrame(l);
            },
            children: [
              /* @__PURE__ */ r.jsxs(Xd, { className: "text-xs font-normal text-muted-foreground", children: [
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
              /* @__PURE__ */ r.jsx(Zd, {}),
              Zc.map((x) => {
                const v = u === x.id;
                return /* @__PURE__ */ r.jsxs(
                  Kl,
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
const fx = n.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  cu,
  {
    ref: s,
    className: fr(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
fx.displayName = cu.displayName;
const mx = [
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
  mx.flatMap(
    (e) => e.items.flatMap((t) => t.keys.map((s) => [s, t]))
  )
);
const hx = null, ho = ka("MediaSidebar"), po = "min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 [scrollbar-gutter:stable]", px = n.memo(function({ fillContainer: t = !1 }) {
  const s = es((C) => C.editorDensity), a = Sa(s), o = Ct((C) => C.leftSidebarOpen), i = Ct((C) => C.toggleLeftSidebar), c = Ct((C) => C.mediaFullColumn), l = Ct((C) => C.toggleMediaFullColumn), u = Ct((C) => C.setKeyframeEditorOpen), d = Ct((C) => C.toggleKeyframeEditorOpen), f = Ct((C) => C.activeTab), m = f === "keyframes", b = Ct((C) => C.setActiveTab), h = Ct((C) => C.sidebarWidth), x = Ct((C) => C.setSidebarWidth), v = n.useRef(m), S = n.useRef(null);
  n.useEffect(() => {
    if (t) return;
    const C = v.current;
    if (v.current = m, m && !C) {
      const B = Math.floor(window.innerWidth * 0.35), U = $i(B, a);
      U > h && (S.current = h, x(U));
    } else !m && C && S.current !== null && (x(S.current), S.current = null);
  }, [t, m, a, h, x]);
  const y = n.useRef(!1), w = n.useRef(0), k = n.useRef(0), R = n.useRef(!1), O = n.useCallback((C) => {
    C.preventDefault(), y.current = !0, w.current = C.clientX, k.current = h, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
  }, [h]);
  n.useEffect(() => {
    const C = (U) => {
      if (!y.current) return;
      const J = U.clientX - w.current, re = $i(k.current + J, a);
      x(re);
    }, B = () => {
      y.current && (y.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "");
    };
    return document.addEventListener("mousemove", C), document.addEventListener("mouseup", B), () => {
      document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", B), y.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "";
    };
  }, [a, x]);
  const L = n.useCallback((C) => {
    const { tracks: B, items: U, fps: J, addItem: re } = ke.getState(), { activeTrackId: me, selectItems: xe } = It.getState(), ye = sr.getState().currentProject, Re = Ja({
      tracks: B,
      items: U,
      itemType: "text",
      preferredTrackId: me
    });
    if (!Re) {
      ho.warn("No available track for text item");
      return;
    }
    const Be = oa(J), Fe = ne.getState().currentFrame, De = Qa(
      Fe,
      Be,
      Re.id,
      U
    ) ?? Fe, Qe = ye?.metadata.width ?? 1920, je = ye?.metadata.height ?? 1080, Ge = {
      ...Jd({
        trackId: Re.id,
        from: De,
        durationInFrames: Be,
        canvasWidth: Qe,
        canvasHeight: je
      }),
      ...C.getItemOverrides()
    };
    re(Ge), xe([Ge.id]);
  }, []), I = n.useCallback(() => {
    L(us);
  }, [L]), j = n.useCallback((C) => {
    const { tracks: B, items: U, fps: J, addItem: re } = ke.getState(), { activeTrackId: me, selectItems: xe } = It.getState(), ye = sr.getState().currentProject, Re = Ja({
      tracks: B,
      items: U,
      itemType: "shape",
      preferredTrackId: me
    });
    if (!Re) {
      ho.warn("No available track for shape item");
      return;
    }
    const Be = oa(J), Fe = ne.getState().currentFrame, De = Qa(
      Fe,
      Be,
      Re.id,
      U
    ) ?? Fe, Qe = ye?.metadata.width ?? 1920, je = ye?.metadata.height ?? 1080, ee = Qd({
      trackId: Re.id,
      from: De,
      durationInFrames: Be,
      canvasWidth: Qe,
      canvasHeight: je,
      shapeType: C
    });
    re(ee), xe([ee.id]);
  }, []), P = n.useCallback((C, B) => {
    const { tracks: U, items: J, fps: re, addItem: me } = ke.getState(), { activeTrackId: xe, selectItems: ye } = It.getState(), Re = Ja({
      tracks: U,
      items: J,
      itemType: "adjustment",
      preferredTrackId: xe
    });
    if (!Re) {
      ho.warn("No available track for adjustment layer");
      return;
    }
    const Be = oa(re), Fe = ne.getState().currentFrame, De = Qa(
      Fe,
      Be,
      Re.id,
      J
    ) ?? Fe, Qe = ef({
      trackId: Re.id,
      from: De,
      durationInFrames: Be,
      effects: C,
      label: B
    });
    me(Qe), ye([Qe.id]);
  }, []), T = n.useCallback((C) => {
    const B = to.find((U) => U.id === C);
    B && P(B.effects, B.name);
  }, [P]), F = n.useCallback((C) => {
    const { selectedItemIds: B } = It.getState(), { items: U, addEffect: J } = ke.getState(), re = B.filter((me) => {
      const xe = U.find((ye) => ye.id === me);
      return xe && xe.type !== "audio";
    });
    if (re.length > 0) {
      const me = eo(C), xe = {
        type: "gpu-effect",
        gpuEffectType: C,
        params: me
      };
      re.forEach((ye) => J(ye, xe));
    } else {
      const me = eo(C);
      P(
        [{ type: "gpu-effect", gpuEffectType: C, params: me }]
      );
    }
  }, [P]), E = n.useMemo(() => tf(), []), N = n.useMemo(
    () => E.flatMap(
      ({ effects: C }) => C.map((B) => ({ id: B.id, def: B }))
    ),
    [E]
  ), z = n.useMemo(() => to.map((C) => C.id), []), { previews: M, trigger: q } = Nm(N, z), V = [
    { id: "media", icon: Zl, label: "Media" },
    { id: "text", icon: qo, label: "Text" },
    { id: "shapes", icon: um, label: "Shapes" },
    { id: "effects", icon: Ki, label: "Effects" },
    { id: "transitions", icon: Jo, label: "Transitions" },
    { id: "ai", icon: dm, label: "AI" }
  ].filter((C) => C.id !== "ai"), X = n.useCallback(() => R.current ? (R.current = !1, !0) : !1, []), D = n.useCallback((C) => (B) => {
    B.dataTransfer.effectAllowed = "copy";
    const U = {
      type: "timeline-template",
      ...C
    };
    R.current = !0;
    const J = JSON.stringify(U);
    B.dataTransfer.setData("application/json", J), B.dataTransfer.setData("text/plain", J), rf(U);
  }, []), W = n.useCallback(() => {
    nf(), window.setTimeout(() => {
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
                      onClick: i,
                      className: "rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors",
                      style: { width: qe.sidebarHeaderButtonSize, height: qe.sidebarHeaderButtonSize },
                      "data-tooltip": o ? "Collapse Panel" : "Expand Panel",
                      "data-tooltip-side": "right",
                      children: o ? /* @__PURE__ */ r.jsx(Ms, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(Rs, { className: "w-3.5 h-3.5" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-1 py-1.5", children: [
                V.map(({ id: C, icon: B, label: U }) => /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    onClick: () => {
                      f === C && o ? i() : (b(C), o || i(), C === "effects" && q());
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
                    children: /* @__PURE__ */ r.jsx(sf, { className: "w-4 h-4" })
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
              /* @__PURE__ */ r.jsx(n.Activity, { mode: o ? "visible" : "hidden", children: /* @__PURE__ */ r.jsxs("div", { className: "flex h-full min-h-0 min-w-0 flex-1 flex-col w-full", style: pe, children: [
                /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: m ? "flex-1 min-h-0 flex flex-col overflow-hidden" : "contents",
                    children: /* @__PURE__ */ r.jsx(
                      fd,
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
                          be,
                          {
                            variant: "ghost",
                            size: "icon",
                            className: "shrink-0",
                            style: { width: qe.sidebarHeaderButtonSize, height: qe.sidebarHeaderButtonSize },
                            onClick: l,
                            "data-tooltip": c ? "Dock to preview" : "Expand full column",
                            "data-tooltip-side": "bottom",
                            children: c ? /* @__PURE__ */ r.jsx(Xo, { className: "w-3 h-3" }) : /* @__PURE__ */ r.jsx(Zo, { className: "w-3 h-3" })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ r.jsx("div", { className: `min-h-0 flex-1 overflow-hidden ${f === "media" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsx(md, {}) }),
                  /* @__PURE__ */ r.jsx("div", { className: `${po} ${f === "text" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Plain text" }),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          draggable: !0,
                          onDragStart: D({
                            itemType: "text",
                            label: us.label,
                            stylePresetId: us.id
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
                              style: { background: us.cardBg },
                              children: /* @__PURE__ */ r.jsx("span", { style: us.previewStyle, children: "Text" })
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground", children: "Text styles" }) }),
                      /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-2 gap-2", children: af.map((C) => /* @__PURE__ */ r.jsxs(
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
                  /* @__PURE__ */ r.jsx("div", { className: `${po} ${f === "shapes" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-3 gap-1.5", children: [
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
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(iu, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Fo, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(fm, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(Fo, { className: "w-3.5 h-2.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(mm, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(hm, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(pm, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
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
                          /* @__PURE__ */ r.jsx("div", { className: "w-7 h-7 rounded border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70", children: /* @__PURE__ */ r.jsx(gm, { className: "w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("span", { className: "text-[9px] text-muted-foreground group-hover:text-foreground", children: "Pen" })
                        ]
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ r.jsx("div", { className: `${po} ${f === "effects" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsxs("div", { className: "space-y-3", children: [
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
                          /* @__PURE__ */ r.jsx("div", { className: "w-8 h-8 rounded-md border border-border bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70 flex-shrink-0", children: /* @__PURE__ */ r.jsx(Ki, { className: "w-4 h-4 text-muted-foreground group-hover:text-foreground" }) }),
                          /* @__PURE__ */ r.jsx("div", { className: "text-left", children: /* @__PURE__ */ r.jsx("div", { className: "text-xs text-muted-foreground group-hover:text-foreground", children: "Blank Adjustment Layer" }) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5", children: "Presets" }),
                      /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-3 gap-1.5", children: to.map((C) => /* @__PURE__ */ r.jsxs(
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
                            ) : /* @__PURE__ */ r.jsx("div", { className: "w-full aspect-video rounded-sm bg-muted flex items-center justify-center", children: /* @__PURE__ */ r.jsx(Cs, { className: "w-3 h-3 text-muted-foreground/50" }) }),
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
                              params: eo(U.id)
                            }]
                          }),
                          onDragEnd: W,
                          onClick: () => {
                            X() || F(U.id);
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
                  /* @__PURE__ */ r.jsx("div", { className: `min-h-0 flex-1 overflow-hidden ${f === "transitions" ? "block" : "hidden"}`, children: /* @__PURE__ */ r.jsx(_h, {}) }),
                  hx
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
function Jc(e) {
  return e ?? "#000000";
}
function gx(e, t) {
  const s = e.metadata;
  return t.width !== void 0 && t.width !== s.width || t.height !== void 0 && t.height !== s.height || t.fps !== void 0 && t.fps !== s.fps || t.backgroundColor !== void 0 && Jc(t.backgroundColor) !== Jc(s.backgroundColor);
}
async function xx({
  project: e,
  updates: t,
  command: s,
  updateProject: a,
  markDirty: o,
  onApplied: i
}) {
  if (!gx(e, t))
    return null;
  const c = of(), l = await a(e.id, t);
  return i?.(l), o(), cf.getState().addUndoEntry(s, c), l;
}
const bx = n.memo(function({
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
    i && /* @__PURE__ */ r.jsx("div", { className: "absolute top-8 left-0 z-50 p-2 bg-popover border border-border rounded-lg shadow-lg", children: /* @__PURE__ */ r.jsx(lf, { color: a, onChange: f }) })
  ] });
}), go = 320, xo = 240, bo = 7680, vo = 4320, vx = n.memo(function() {
  const t = sr((R) => R.currentProject), s = sr((R) => R.updateProject), a = ke((R) => R.fps), o = ke((R) => R.markDirty), [i, c] = n.useState(!1), l = ke(
    (R) => R.items.length === 0 ? 0 : Math.max(...R.items.map((O) => O.from + O.durationInFrames))
  ), u = t?.metadata.width ?? 1920, d = t?.metadata.height ?? 1080, f = t?.metadata.backgroundColor ?? "#000000", m = n.useCallback(async (R, O) => {
    if (t)
      try {
        await xx({
          project: t,
          updates: R,
          command: O,
          updateProject: s,
          markDirty: o
        });
      } catch (L) {
        Xt.error("Failed to update canvas settings", {
          description: L instanceof Error ? L.message : "Please try again."
        });
      }
  }, [t, o, s]), b = n.useCallback(() => {
    c((R) => !R);
  }, []), h = n.useCallback(
    (R) => {
      let O = Math.round(R / 2) * 2;
      if (O = Math.min(bo, Math.max(go, O)), i && d > 0) {
        const L = u / d;
        let I = Math.round(O / L);
        I = Math.round(I / 2) * 2, I = Math.min(vo, Math.max(xo, I)), m(
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
      if (O = Math.min(vo, Math.max(xo, O)), i && u > 0) {
        const L = u / d;
        let I = Math.round(O * L);
        I = Math.round(I / 2) * 2, I = Math.min(bo, Math.max(go, I)), m(
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
  }, [m, d, u]), S = n.useCallback(() => {
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
  }, [m, f]), k = (R) => {
    const O = R / a, L = Math.floor(O / 60), I = Math.floor(O % 60), j = R % a;
    return `${String(L).padStart(2, "0")}:${String(I).padStart(2, "0")}.${String(j).padStart(2, "0")}`;
  };
  return t ? /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ r.jsxs(mr, { title: "Canvas", icon: xm, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(
        uf,
        {
          width: u,
          height: d,
          aspectLocked: i,
          onWidthChange: h,
          onHeightChange: x,
          onAspectLockToggle: b,
          minWidth: go,
          minHeight: xo,
          maxWidth: bo,
          maxHeight: vo,
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
              /* @__PURE__ */ r.jsx(bm, { className: "w-3 h-3 mr-1.5" }),
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
          bx,
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
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx(Go, {}),
    /* @__PURE__ */ r.jsxs(mr, { title: "Duration", icon: Il, defaultOpen: !0, children: [
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
}), yx = Dm, Vu = n.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  lu,
  {
    ref: s,
    className: fr(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Vu.displayName = lu.displayName;
const la = n.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  uu,
  {
    ref: s,
    className: fr(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e
    ),
    ...t
  }
));
la.displayName = uu.displayName;
const ua = n.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  du,
  {
    ref: s,
    className: fr(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
ua.displayName = du.displayName;
function fn({
  itemIds: e,
  property: t,
  currentValue: s,
  className: a,
  disabled: o = !1
}) {
  const i = Ra(), c = e[0], l = mn(
    n.useCallback(
      (O) => c ? O.keyframesByItemId[c] : void 0,
      [c]
    )
  ), u = ke((O) => O.addKeyframe), d = ke((O) => O.removeKeyframe), f = Jt(
    n.useCallback(
      (O) => c ? O.itemById[c] : void 0,
      [c]
    )
  ), m = vs(
    pn(
      n.useCallback(
        (O) => c ? O.transitions.filter(
          (L) => L.leftClipId === c || L.rightClipId === c
        ) : [],
        [c]
      )
    )
  ), b = n.useMemo(() => f ? i - f.from : 0, [i, f]), h = n.useMemo(() => {
    if (!(!f || !c))
      return Dl(b, c, f, m);
  }, [b, c, f, m]), x = h !== void 0, v = n.useMemo(() => {
    if (!l) return;
    const O = l.properties.find((L) => L.property === t);
    if (O)
      return O.keyframes.find((L) => L.frame === b);
  }, [l, t, b]), S = v !== void 0, y = n.useMemo(() => {
    if (!l) return !1;
    const O = l.properties.find((L) => L.property === t);
    return O ? O.keyframes.length > 0 : !1;
  }, [l, t]), w = n.useCallback(() => {
    o || x || !c || b < 0 || (S && v ? d(c, t, v.id) : u(c, t, b, s));
  }, [
    o,
    x,
    c,
    b,
    S,
    v,
    d,
    u,
    t,
    s
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
          df,
          {
            className: fr(
              "w-3 h-3 rotate-0 transition-transform",
              S && !x && "fill-current"
            )
          }
        )
      }
    ) }),
    /* @__PURE__ */ r.jsx(ur, { side: "top", className: "text-xs max-w-[200px]", children: x && h ? /* @__PURE__ */ r.jsx(r.Fragment, { children: ff(h) }) : k ? /* @__PURE__ */ r.jsx(r.Fragment, { children: "Playhead is outside clip bounds" }) : S ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      "Remove keyframe at frame ",
      b
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      "Add keyframe at frame ",
      b
    ] }) })
  ] });
}
const wx = n.memo(function({
  items: t,
  canvas: s,
  onTransformChange: a,
  aspectLocked: o,
  onAspectLockToggle: i
}) {
  const c = n.useMemo(() => t.map((U) => U.id), [t]), l = n.useMemo(() => new Set(c), [c]), u = n.useMemo(() => new Map(t.map((U) => [U.id, U])), [t]), d = Ra(), f = mn(
    pn(
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
  }, [c, f]), b = Xe((U) => U.setTransformPreview), h = Xe((U) => U.clearPreview), x = Xe((U) => U.activeGizmo), v = Xe((U) => U.previewTransform), S = n.useMemo(() => !x || !v || !l.has(x.itemId) ? null : {
    itemId: x.itemId,
    transform: v
  }, [x, v, l]), y = n.useMemo(() => {
    const U = /* @__PURE__ */ new Map();
    for (const J of t) {
      const re = (() => {
        if (S && S.itemId === J.id)
          return S.transform;
        const me = Tr(J), xe = Kr(J, s, me), ye = m.get(J.id) ?? void 0;
        if (!ye) return xe;
        const Re = d - J.from;
        return va(xe, ye, Re);
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
  }, [t, s, S, m, d]), { x: w, y: k, width: R, height: O, rotation: L } = n.useMemo(() => {
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
  }, [t, y]), I = n.useMemo(() => R === "mixed" || O === "mixed" ? 1 : O > 0 ? R / O : 1, [R, O]), j = ke((U) => U.applyAutoKeyframeOperations), P = ke((U) => U.updateItemsTransformMap), T = n.useCallback(
    (U, J, re) => {
      const me = u.get(U);
      if (!me) return null;
      const xe = m.get(U) ?? void 0;
      return Xn(me, xe, J, re, d);
    },
    [d, u, m]
  ), F = n.useCallback(
    (U) => {
      const J = {};
      t.forEach((re) => {
        J[re.id] = { x: U };
      }), b(J);
    },
    [t, b]
  ), E = n.useCallback(
    (U) => {
      const J = [], re = [];
      for (const me of c) {
        const xe = T(me, "x", U);
        xe ? J.push(xe) : re.push(me);
      }
      J.length > 0 && j(J), re.length > 0 && a(re, { x: U }), queueMicrotask(() => h());
    },
    [c, a, h, T, j]
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
        const xe = T(me, "y", U);
        xe ? J.push(xe) : re.push(me);
      }
      J.length > 0 && j(J), re.length > 0 && a(re, { y: U }), queueMicrotask(() => h());
    },
    [c, a, h, T, j]
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
  ), q = n.useCallback(
    (U) => {
      const J = o && O !== "mixed" ? Math.round(U / I) : null, re = [], me = /* @__PURE__ */ new Map();
      for (const xe of c) {
        const ye = T(xe, "width", U), Re = J !== null ? T(xe, "height", J) : null;
        ye && re.push(ye), Re && re.push(Re);
        const Be = {};
        ye || (Be.width = U), J !== null && !Re && (Be.height = J), Object.keys(Be).length > 0 && me.set(xe, Be);
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
      T,
      j,
      P
    ]
  ), V = n.useCallback(
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
        const ye = T(xe, "height", U), Re = J !== null ? T(xe, "width", J) : null;
        ye && re.push(ye), Re && re.push(Re);
        const Be = {};
        ye || (Be.height = U), J !== null && !Re && (Be.width = J), Object.keys(Be).length > 0 && me.set(xe, Be);
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
      T,
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
        const xe = T(me, "rotation", U);
        xe ? J.push(xe) : re.push(me);
      }
      J.length > 0 && j(J), re.length > 0 && a(re, { rotation: U }), queueMicrotask(() => h());
    },
    [c, a, h, T, j]
  ), Y = Qt((U) => U.mediaItems), pe = n.useCallback(() => {
    t.forEach((J) => {
      const re = Tr(J), me = Kr(J, s, re);
      if (J.type === "shape" || J.type === "text") {
        const Re = Math.min(me.width, me.height), Be = {};
        Math.abs(me.width - Re) > 0.5 && (Be.width = Re), Math.abs(me.height - Re) > 0.5 && (Be.height = Re), Object.keys(Be).length > 0 && a([J.id], Be);
        return;
      }
      let xe = Tr(J);
      if (!xe && J.mediaId) {
        const Re = Y.find((Be) => Be.id === J.mediaId);
        Re && Re.width && Re.height && (xe = { width: Re.width, height: Re.height });
      }
      if (!xe) return;
      const ye = {};
      Math.abs(me.width - xe.width) > 0.5 && (ye.width = xe.width), Math.abs(me.height - xe.height) > 0.5 && (ye.height = xe.height), Object.keys(ye).length !== 0 && a([J.id], ye);
    });
  }, [t, a, Y, s]), C = n.useCallback(() => {
    t.forEach((J) => {
      const re = Tr(J), me = Kr(J, s, re), xe = {};
      Math.abs(me.x) > 0.5 && (xe.x = 0), Math.abs(me.y) > 0.5 && (xe.y = 0), Object.keys(xe).length !== 0 && a([J.id], xe);
    });
  }, [t, a, s]), B = n.useCallback(() => {
    t.forEach((J) => {
      const re = Tr(J), me = Kr(J, s, re);
      Math.abs(me.rotation) <= 0.5 || a([J.id], { rotation: 0 });
    });
  }, [t, a, s]);
  return /* @__PURE__ */ r.jsxs(mr, { title: "Transform", icon: vm, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Position", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-1 w-full", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-1 flex-1", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ r.jsx(
            Kt,
            {
              value: w,
              onChange: E,
              onLiveChange: F,
              label: "X",
              unit: "px",
              step: 1,
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ r.jsx(
            fn,
            {
              itemIds: c,
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
              onLiveChange: N,
              label: "Y",
              unit: "px",
              step: 1,
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ r.jsx(
            fn,
            {
              itemIds: c,
              property: "y",
              currentValue: k === "mixed" ? 0 : k
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
        fn,
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
          children: o ? /* @__PURE__ */ r.jsx(mf, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ r.jsx(hf, { className: "w-3.5 h-3.5" })
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
        fn,
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
        fn,
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
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) })
  ] });
}), Sx = n.memo(function({
  items: t,
  canvas: s,
  onTransformChange: a
}) {
  const o = n.useMemo(() => t.map((T) => T.id), [t]), i = n.useMemo(() => new Map(t.map((T) => [T.id, T])), [t]), c = Ra(), l = mn(
    pn(
      n.useCallback(
        (T) => o.map((F) => T.keyframesByItemId[F] ?? null),
        [o]
      )
    )
  ), u = n.useMemo(() => {
    const T = /* @__PURE__ */ new Map();
    for (const [F, E] of o.entries())
      T.set(E, l[F] ?? null);
    return T;
  }, [o, l]), d = ke((T) => T.updateItem), f = Xe((T) => T.setTransformPreview), m = Xe((T) => T.clearPreview), { opacityRaw: b, cornerRadius: h } = n.useMemo(() => {
    if (t.length === 0)
      return { opacityRaw: 1, cornerRadius: 0 };
    const T = t.map((E) => {
      const N = Tr(E), z = Kr(E, s, N), M = u.get(E.id) ?? void 0;
      if (M) {
        const q = c - E.from;
        return va(z, M, q);
      }
      return z;
    }), F = (E) => {
      const N = T.map(E), z = N[0];
      return N.every((M) => Math.abs(M - z) < 0.01) ? z : "mixed";
    };
    return {
      opacityRaw: F((E) => E.opacity),
      cornerRadius: F((E) => E.cornerRadius)
    };
  }, [t, s, u, c]), x = b === "mixed" ? "mixed" : Math.round(b * 100), v = ke((T) => T.applyAutoKeyframeOperations), S = n.useCallback(
    (T, F) => {
      const E = i.get(T);
      if (!E) return null;
      const N = u.get(T) ?? void 0;
      return Xn(E, N, "opacity", F, c);
    },
    [c, i, u]
  ), y = n.useCallback(
    (T, F) => {
      const E = i.get(T);
      if (!E) return null;
      const N = u.get(T) ?? void 0;
      return Xn(E, N, "cornerRadius", F, c);
    },
    [c, i, u]
  ), w = n.useCallback(
    (T) => {
      const F = {};
      t.forEach((E) => {
        F[E.id] = { opacity: T / 100 };
      }), f(F);
    },
    [t, f]
  ), k = n.useCallback(
    (T) => {
      const F = T / 100, E = [], N = [];
      for (const z of o) {
        const M = S(z, F);
        M ? E.push(M) : N.push(z);
      }
      E.length > 0 && v(E), N.length > 0 && a(N, { opacity: F }), queueMicrotask(() => m());
    },
    [o, a, m, S, v]
  ), R = n.useCallback(
    (T) => {
      const F = {};
      t.forEach((E) => {
        F[E.id] = { cornerRadius: T };
      }), f(F);
    },
    [t, f]
  ), O = n.useCallback(
    (T) => {
      const F = [], E = [];
      for (const N of o) {
        const z = y(N, T);
        z ? F.push(z) : E.push(N);
      }
      F.length > 0 && v(F), E.length > 0 && a(E, { cornerRadius: T }), queueMicrotask(() => m());
    },
    [o, a, m, y, v]
  ), L = n.useMemo(() => {
    if (t.length === 0) return "normal";
    const T = t[0].blendMode ?? "normal";
    return t.every((E) => (E.blendMode ?? "normal") === T) ? T : "mixed";
  }, [t]), I = n.useCallback(
    (T) => {
      for (const F of o)
        d(F, { blendMode: T });
    },
    [o, d]
  ), j = n.useCallback(() => {
    t.some((E) => {
      const N = Tr(E), z = Kr(E, s, N);
      return Math.abs(z.opacity - 1) > 0.01;
    }) && a(o, { opacity: 1 });
  }, [t, o, a, s]), P = n.useCallback(() => {
    t.some((E) => {
      const N = Tr(E);
      return Kr(E, s, N).cornerRadius > 0.5;
    }) && a(o, { cornerRadius: 0 });
  }, [t, o, a, s]);
  return /* @__PURE__ */ r.jsxs(mr, { title: "Composite", icon: ym, defaultOpen: !0, children: [
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
        fn,
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
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(Ke, { label: "Blend", children: /* @__PURE__ */ r.jsxs(
      ys,
      {
        value: L === "mixed" ? void 0 : L,
        onValueChange: I,
        children: [
          /* @__PURE__ */ r.jsx(ws, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(Ss, { placeholder: L === "mixed" ? "Mixed" : "Normal" }) }),
          /* @__PURE__ */ r.jsx(ks, { children: pf.map((T) => /* @__PURE__ */ r.jsxs(Jl, { children: [
            /* @__PURE__ */ r.jsx(Ql, { className: "text-[10px] text-muted-foreground", children: T.label }),
            T.modes.map((F) => /* @__PURE__ */ r.jsx(Kn, { value: F, className: "text-xs", children: gf[F] }, F))
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
        fn,
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
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) })
  ] });
}), kx = 0.01;
function Dr(e, t, s) {
  if (e.length === 0) return s;
  const a = e.map((c) => t(c) ?? s), o = a[0];
  return a.every((c) => typeof c == "number" && typeof o == "number" ? Math.abs(c - o) < kx : c === o) ? o : "mixed";
}
const Qc = 0.1, el = 10, ms = 0.1, tl = 0.01;
function Pa(e) {
  return Math.max(1, e.sourceWidth ?? e.transform?.width ?? 1920);
}
function Ia(e) {
  return Math.max(1, e.sourceHeight ?? e.transform?.height ?? 1080);
}
function hs(e, t) {
  const s = t === "left" || t === "right" ? Pa(e) : Ia(e);
  return kf(e.crop?.[t], s);
}
function ii(e) {
  return Math.max(1, vf(Pa(e), Ia(e)));
}
function rl(e) {
  return Cf(e.crop?.softness, ii(e));
}
function nl(e, t, s) {
  const a = t === "left" || t === "right" ? Pa(e) : Ia(e);
  return ma({
    ...e.crop,
    [t]: wf(s, a)
  });
}
function sl(e, t) {
  return ma({
    ...e.crop,
    softness: Sf(t, ii(e))
  });
}
function $r(e) {
  return e.toFixed(3);
}
function Cx({ items: e }) {
  const t = ke((D) => D.rateStretchItem), s = ke((D) => D.updateItem), a = Xe((D) => D.setPropertiesPreviewNew), o = Xe((D) => D.clearPreview), i = n.useMemo(
    () => e.filter((D) => D.type === "video"),
    [e]
  ), c = n.useMemo(() => i.map((D) => D.id), [i]), l = n.useMemo(
    () => e.filter((D) => D.type === "video" || D.type === "audio").map((D) => D.id),
    [e]
  ), u = Dr(i, (D) => D.speed, 1), d = Dr(i, (D) => D.fadeIn, 0), f = Dr(i, (D) => D.fadeOut, 0), m = Dr(i, (D) => hs(D, "left"), 0), b = Dr(i, (D) => hs(D, "right"), 0), h = Dr(i, (D) => hs(D, "top"), 0), x = Dr(i, (D) => hs(D, "bottom"), 0), v = Dr(i, rl, 0), S = n.useMemo(
    () => Math.max(1, ...i.map(Pa)),
    [i]
  ), y = n.useMemo(
    () => Math.max(1, ...i.map(Ia)),
    [i]
  ), w = n.useMemo(
    () => Math.max(1, ...i.map(ii)),
    [i]
  ), k = n.useCallback(
    (D) => {
      const W = Math.round(D * 100) / 100, Y = Math.max(Qc, Math.min(el, W)), { items: pe, fps: C } = ke.getState();
      pe.filter((B) => (B.type === "video" || B.type === "audio") && l.includes(B.id)).forEach((B) => {
        const U = B.speed || 1, J = B.sourceFps ?? C, re = B.sourceEnd !== void 0 && B.sourceStart !== void 0 ? B.sourceEnd - B.sourceStart : xf(B.durationInFrames, U, C, J), me = Math.max(1, yf(re, Y, J, C));
        t(B.id, B.from, me, Y);
      });
    },
    [l, t]
  ), R = n.useCallback(() => {
    queueMicrotask(() => o());
  }, [o]), O = n.useCallback(
    (D) => {
      const W = {};
      c.forEach((Y) => {
        W[Y] = { fadeIn: D };
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
      c.forEach((Y) => {
        W[Y] = { fadeOut: D };
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
      const Y = {};
      i.forEach((pe) => {
        Y[pe.id] = {
          crop: nl(pe, D, W)
        };
      }), a(Y);
    },
    [a, i]
  ), T = n.useCallback(
    (D, W) => {
      i.forEach((Y) => {
        s(Y.id, {
          crop: nl(Y, D, W)
        });
      }), R();
    },
    [i, s, R]
  ), F = n.useCallback(
    (D) => {
      const W = {};
      i.forEach((Y) => {
        W[Y.id] = {
          crop: sl(Y, D)
        };
      }), a(W);
    },
    [a, i]
  ), E = n.useCallback(
    (D) => {
      i.forEach((W) => {
        s(W.id, {
          crop: sl(W, D)
        });
      }), R();
    },
    [i, s, R]
  ), N = n.useCallback(
    (D) => {
      i.some((Y) => hs(Y, D) > tl) && i.forEach((Y) => {
        s(Y.id, {
          crop: ma({
            ...Y.crop,
            [D]: 0
          })
        });
      });
    },
    [s, i]
  ), z = n.useCallback(() => {
    i.some((W) => Math.abs(rl(W)) > tl) && i.forEach((W) => {
      s(W.id, {
        crop: ma({
          ...W.crop,
          softness: 0
        })
      });
    });
  }, [s, i]), M = ke((D) => D.resetSpeedWithRipple), q = n.useCallback(() => {
    M(l);
  }, [l, M]), V = n.useCallback(() => {
    ke.getState().items.some(
      (pe) => c.includes(pe.id) && (pe.fadeIn ?? 0) > 0.01
    ) && c.forEach((pe) => s(pe, { fadeIn: 0 }));
  }, [c, s]), X = n.useCallback(() => {
    ke.getState().items.some(
      (pe) => c.includes(pe.id) && (pe.fadeOut ?? 0) > 0.01
    ) && c.forEach((pe) => s(pe, { fadeOut: 0 }));
  }, [c, s]);
  return i.length === 0 ? null : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(mr, { title: "Playback", icon: bf, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Speed", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          dr,
          {
            value: u,
            onChange: k,
            min: Qc,
            max: el,
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
          be,
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
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsxs(mr, { title: "Cropping", icon: wm, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Left", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
        /* @__PURE__ */ r.jsx(
          dr,
          {
            value: m,
            onChange: (D) => T("left", D),
            onLiveChange: (D) => P("left", D),
            min: 0,
            max: S,
            step: ms,
            unit: "px",
            formatValue: $r,
            formatInputValue: $r,
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
            step: ms,
            unit: "px",
            formatValue: $r,
            formatInputValue: $r,
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
            step: ms,
            unit: "px",
            formatValue: $r,
            formatInputValue: $r,
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
            step: ms,
            unit: "px",
            formatValue: $r,
            formatInputValue: $r,
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
            onLiveChange: F,
            min: -w,
            max: w,
            step: ms,
            unit: "px",
            formatValue: $r,
            formatInputValue: $r,
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
            children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) })
    ] })
  ] });
}
const al = 0.1, ol = 10;
function yo(e) {
  if (e.type !== "image") return !1;
  const t = e.label?.toLowerCase() ?? "";
  return t.endsWith(".gif") || t.endsWith(".webp");
}
function Mx({ items: e }) {
  const t = ke((l) => l.rateStretchItem), s = n.useMemo(
    () => e.filter(yo),
    [e]
  ), a = n.useMemo(() => s.map((l) => l.id), [s]), o = Dr(s, (l) => l.speed, 1), i = n.useCallback(
    (l) => {
      const u = Math.round(l * 100) / 100, d = Math.max(al, Math.min(ol, u));
      ke.getState().items.filter((m) => yo(m) && a.includes(m.id)).forEach((m) => {
        t(m.id, m.from, m.durationInFrames, d);
      });
    },
    [a, t]
  ), c = n.useCallback(() => {
    ke.getState().items.filter((d) => yo(d) && a.includes(d.id)).forEach((d) => {
      const f = d.speed || 1;
      Math.abs(f - 1) <= 0.01 || t(d.id, d.from, d.durationInFrames, 1);
    });
  }, [a, t]);
  return s.length === 0 ? null : /* @__PURE__ */ r.jsx(mr, { title: "Animation", icon: Mf, defaultOpen: !0, children: /* @__PURE__ */ r.jsx(Ke, { label: "Speed", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
    /* @__PURE__ */ r.jsx(
      Kt,
      {
        value: o,
        onChange: i,
        min: al,
        max: ol,
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
        children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
      }
    )
  ] }) }) });
}
function Rx(e) {
  const t = e.filter(
    (s) => s.type === "audio"
  );
  return t.length > 0 ? t : e.filter(
    (s) => s.type === "video" || s.type === "audio"
  );
}
const Px = -60, Ix = 12;
function Tx({ items: e }) {
  const t = ke((j) => j.updateItem), s = Xe((j) => j.setPropertiesPreviewNew), a = Xe((j) => j.clearPreview), o = Ra(), i = ke((j) => j.applyAutoKeyframeOperations), c = n.useMemo(
    () => Rx(e),
    [e]
  ), l = n.useMemo(() => c.map((j) => j.id), [c]), u = n.useMemo(() => new Map(c.map((j) => [j.id, j])), [c]), d = mn(
    pn(
      n.useCallback(
        (j) => l.map((P) => j.keyframesByItemId[P] ?? null),
        [l]
      )
    )
  ), f = n.useMemo(() => {
    const j = /* @__PURE__ */ new Map();
    for (const [P, T] of l.entries())
      j.set(T, d[P] ?? null);
    return j;
  }, [l, d]), m = n.useMemo(() => {
    if (c.length === 0) return 0;
    const j = c.map((T) => {
      const F = T.volume ?? 0, E = f.get(T.id) ?? void 0;
      if (E) {
        const N = Rf(E, "volume");
        if (N.length > 0) {
          const z = o - T.from;
          return Pf(N, z, F);
        }
      }
      return F;
    }), P = j[0];
    return j.every((T) => Math.abs(T - P) < 0.01) ? Math.round(P * 10) / 10 : "mixed";
  }, [c, f, o]), b = Dr(c, (j) => j.audioFadeIn, 0), h = Dr(c, (j) => j.audioFadeOut, 0), x = n.useCallback(
    (j, P) => {
      const T = u.get(j);
      if (!T) return null;
      const F = f.get(j) ?? void 0;
      return Xn(T, F, "volume", P, o);
    },
    [u, o, f]
  ), v = n.useCallback(
    (j) => {
      const P = {};
      l.forEach((T) => {
        P[T] = { volume: j };
      }), s(P);
    },
    [l, s]
  ), S = n.useCallback(
    (j) => {
      const P = [], T = [];
      for (const F of l) {
        const E = x(F, j);
        E ? P.push(E) : T.push(F);
      }
      P.length > 0 && i(P), T.length > 0 && T.forEach((F) => t(F, { volume: j })), queueMicrotask(() => a());
    },
    [l, t, a, x, i]
  ), y = n.useCallback(
    (j) => {
      const P = {};
      l.forEach((T) => {
        P[T] = { audioFadeIn: j };
      }), s(P);
    },
    [l, s]
  ), w = n.useCallback(
    (j) => {
      l.forEach((P) => t(P, { audioFadeIn: j })), queueMicrotask(() => a());
    },
    [l, t, a]
  ), k = n.useCallback(
    (j) => {
      const P = {};
      l.forEach((T) => {
        P[T] = { audioFadeOut: j };
      }), s(P);
    },
    [l, s]
  ), R = n.useCallback(
    (j) => {
      l.forEach((P) => t(P, { audioFadeOut: j })), queueMicrotask(() => a());
    },
    [l, t, a]
  ), O = n.useCallback(() => {
    ke.getState().items.some(
      (F) => l.includes(F.id) && Math.abs(F.volume ?? 0) > 0.1
    ) && l.forEach((F) => t(F, { volume: 0 }));
  }, [l, t]), L = n.useCallback(() => {
    ke.getState().items.some(
      (F) => l.includes(F.id) && (F.audioFadeIn ?? 0) > 0.01
    ) && l.forEach((F) => t(F, { audioFadeIn: 0 }));
  }, [l, t]), I = n.useCallback(() => {
    ke.getState().items.some(
      (F) => l.includes(F.id) && (F.audioFadeOut ?? 0) > 0.01
    ) && l.forEach((F) => t(F, { audioFadeOut: 0 }));
  }, [l, t]);
  return c.length === 0 ? null : /* @__PURE__ */ r.jsxs(mr, { title: "Audio", icon: eu, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Gain", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
      /* @__PURE__ */ r.jsx(
        dr,
        {
          value: m,
          onChange: S,
          onLiveChange: v,
          min: Px,
          max: Ix,
          step: 0.1,
          unit: "dB",
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ r.jsx(
        fn,
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
        be,
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
        be,
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
const Wu = n.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: fr(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
        e
      ),
      ref: s,
      ...t
    }
  )
);
Wu.displayName = "Textarea";
const Ex = "The quick brown fox jumps over the lazy dog", Fx = 512, jx = 4, Nx = 120;
function Ax({
  value: e,
  placeholder: t = "Select font",
  previewText: s,
  onValueChange: a
}) {
  const o = n.useRef(null), i = n.useRef(null), c = n.useRef(/* @__PURE__ */ new Map()), [l, u] = n.useState(!1), [d, f] = n.useState(""), [m, b] = n.useState(null), [h, x] = n.useState(tu), [v, S] = n.useState(!1);
  n.useEffect(() => {
    if (!l)
      return;
    let P = !1;
    return f(""), S(!0), If().then((T) => {
      P || x(T);
    }).finally(() => {
      P || S(!1);
    }), () => {
      P = !0;
    };
  }, [l]);
  const y = n.useMemo(() => {
    const P = d.trim().toLowerCase();
    return P ? h.filter((T) => T.label.toLowerCase().includes(P)) : h;
  }, [h, d]), w = n.useMemo(() => {
    const P = s && s.length > 0 ? s.slice(0, Fx) : "";
    return (P.trim().length > 0 ? P : Ex).replace(/\s+/g, " ").slice(0, 72);
  }, [s]), k = n.useMemo(() => {
    const P = m ?? e ?? y[0]?.value;
    return P ? h.find((T) => T.value === P) ?? null : null;
  }, [y, h, m, e]), R = n.useMemo(() => {
    const P = [
      e,
      m,
      ...y.slice(0, jx).map((T) => T.value)
    ].filter((T) => typeof T == "string" && T.trim().length > 0);
    return [...new Set(P)];
  }, [y, m, e]);
  n.useEffect(() => {
    if (!l || R.length === 0)
      return;
    const P = window.setTimeout(() => {
      ds(R, [400]);
    }, Nx);
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
    const P = (T) => {
      const F = T.target;
      if (F instanceof Node && o.current?.contains(F))
        return;
      const E = i.current;
      if (E) {
        const N = E.getBoundingClientRect(), z = 8, { clientX: M, clientY: q } = T;
        if (M >= N.left - z && M <= N.right + z && q >= N.top - z && q <= N.bottom + z)
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
      ds([P.value], P.weights), a(P.value), u(!1);
    },
    [a]
  ), L = n.useCallback(
    (P) => {
      const T = y[P];
      if (!T)
        return;
      const F = c.current.get(T.value);
      F && F.focus(), b(T.value), ds([T.value], [400]);
    },
    [y]
  ), I = n.useCallback(
    (P, T) => {
      if (P.key === "Escape") {
        P.preventDefault(), P.stopPropagation(), u(!1);
        return;
      }
      if (y.length === 0)
        return;
      const F = y.findIndex((E) => E.value === T.value);
      if (F !== -1)
        switch (P.key) {
          case "ArrowDown":
            P.preventDefault(), L((F + 1) % y.length);
            break;
          case "ArrowUp":
            P.preventDefault(), L((F - 1 + y.length) % y.length);
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
          /* @__PURE__ */ r.jsx(qo, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" })
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
            /* @__PURE__ */ r.jsx(Tf, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ r.jsx(
              ru,
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
              children: v ? /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center py-8 text-muted-foreground", children: /* @__PURE__ */ r.jsx(ou, { className: "h-4 w-4 animate-spin" }) }) : y.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "py-8 text-center text-sm text-muted-foreground", children: "No fonts match your search." }) : y.map((P) => {
                const T = P.value === e;
                return /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    ref: (F) => {
                      F ? c.current.set(P.value, F) : c.current.delete(P.value);
                    },
                    type: "button",
                    role: "option",
                    "aria-selected": T,
                    onClick: () => O(P),
                    onPointerEnter: () => {
                      b(P.value), ds([P.value], [400]);
                    },
                    onFocus: () => {
                      b(P.value), ds([P.value], [400]);
                    },
                    onKeyDown: (F) => I(F, P),
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
                      T ? /* @__PURE__ */ r.jsx(Ef, { className: "h-3.5 w-3.5 text-primary" }) : null
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
const zu = [
  { id: "fade", label: "Fade" },
  { id: "rise", label: "Rise" },
  { id: "drop", label: "Drop" },
  { id: "left", label: "Left" },
  { id: "right", label: "Right" },
  { id: "tilt", label: "Tilt" }
], il = [
  { id: "none", label: "None" },
  ...zu
], Dx = [
  "opacity",
  "x",
  "y",
  "rotation"
], Ox = 0.35, _x = "ease-out", Lx = "linear", cl = 8, Bx = 0.01;
function ll(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
function Do(e, t, s) {
  return e?.properties.find((a) => a.property === t)?.keyframes.find((a) => a.frame === s);
}
function Hx(e, t) {
  return e <= 1 ? 0 : Math.max(
    1,
    Math.min(e - 1, Math.round(t * Ox))
  );
}
function ci(e, t, s) {
  const a = Hx(e, t);
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
function $u(e, t, s) {
  const a = ll(s.width * 0.12, 32, 120), o = ll(s.height * 0.2, 24, 96), i = t === "intro";
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
          startValue: i ? s.rotation - cl : s.rotation,
          endValue: i ? s.rotation : s.rotation + cl
        }
      };
  }
}
function ul(e, t) {
  return Math.abs(e - t) < Bx;
}
function Ux(e, t, s, a, o) {
  const i = ci(s, a, t);
  return !e || !i ? [] : Dx.filter((c) => {
    const l = Do(
      e,
      c,
      i.startFrame
    ), u = Do(e, c, i.endFrame);
    return !l || !u ? !1 : zu.some((d) => {
      const f = $u(d.id, t, o)[c];
      return !!f && ul(l.value, f.startValue) && ul(u.value, f.endValue);
    });
  });
}
function Gx({
  item: e,
  presetId: t,
  phase: s,
  fps: a,
  anchorTransform: o,
  itemKeyframes: i
}) {
  const c = ci(e.durationInFrames, a, s);
  if (!c)
    return [];
  const l = Ux(
    i,
    s,
    e.durationInFrames,
    a,
    o
  ), u = t === "none" ? {} : $u(t, s, o), d = /* @__PURE__ */ new Set([
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
    }, h = Do(
      i,
      m,
      c.endFrame
    );
    f.push({
      itemId: e.id,
      property: m,
      frame: c.startFrame,
      value: b.startValue,
      easing: _x
    }), f.push({
      itemId: e.id,
      property: m,
      frame: c.endFrame,
      value: b.endValue,
      easing: h?.easing ?? Lx,
      easingConfig: h?.easingConfig
    });
  }), f;
}
const ra = [
  { value: "normal", label: "Regular" },
  { value: "medium", label: "Medium" },
  { value: "semibold", label: "Semibold" },
  { value: "bold", label: "Bold" }
], Vx = Ff, dl = 1e5, fl = 120, Wx = 512;
function zx(e) {
  const t = e.split(`
`)[0] ?? "", s = t.length > fl ? t.slice(0, fl) : t;
  return s.trim().length > 0 ? s : "Text";
}
const $x = {
  offsetX: 0,
  offsetY: 0,
  blur: 0,
  color: "#000000"
}, Kx = {
  width: 0,
  color: "#111827"
}, ml = [
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
function un(e) {
  if (!(e.offsetX === 0 && e.offsetY === 0 && e.blur === 0))
    return e;
}
function na(e) {
  if (!(e.width <= 0))
    return e;
}
function hl({
  items: e,
  canvas: t,
  showContentSection: s = !0,
  showEffectSection: a = !0,
  showAnimationSection: o = !0
}) {
  const i = ke((_) => _.updateItem), c = ke((_) => _.addKeyframes), l = Xe((_) => _.setPropertiesPreviewNew), u = Xe((_) => _.clearPreview), d = n.useMemo(
    () => e.filter((_) => _.type === "text"),
    [e]
  ), f = n.useMemo(() => d.map((_) => _.id), [d]), m = n.useMemo(
    () => ({ ...$x, ...d[0]?.textShadow ?? {} }),
    [d]
  ), b = n.useMemo(
    () => ({ ...Kx, ...d[0]?.stroke ?? {} }),
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
      return ra;
    const he = tu.find(
      (Ye) => Ye.family === _ || Ye.value === _
    );
    if (!he)
      return ra;
    const et = ra.filter(
      (Ye) => he.weights.includes(Vx[Ye.value])
    );
    return et.length > 0 ? et : ra;
  }, [h?.fontFamily]), v = n.useRef(h?.fontFamily), S = n.useRef(h?.fontWeight);
  S.current = h?.fontWeight;
  const y = n.useCallback(
    (_) => {
      d.forEach((he) => {
        i(he.id, _);
      });
    },
    [d, i]
  ), w = n.useRef(y);
  w.current = y;
  const k = n.useCallback(
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
      he.length > dl && (he = he.slice(0, dl));
      const et = zx(he);
      d.forEach((Ye) => {
        i(Ye.id, { text: he, label: et });
      });
    },
    [d, i]
  ), L = n.useCallback(
    (_) => {
      k({ fontSize: _ });
    },
    [k]
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
  ), T = n.useCallback(() => {
    if (!x.some((he) => he.value === "bold"))
      return;
    const _ = h?.fontWeight === "bold" ? "normal" : "bold";
    y({ fontWeight: _ });
  }, [h?.fontWeight, x, y]), F = n.useCallback(() => {
    const _ = h?.fontStyle === "italic" ? "normal" : "italic";
    y({ fontStyle: _ });
  }, [h?.fontStyle, y]), E = n.useCallback(() => {
    y({ underline: !(h?.underline ?? !1) });
  }, [h?.underline, y]);
  n.useEffect(() => {
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
  const N = n.useCallback(
    (_) => {
      k({ color: _ });
    },
    [k]
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
  ), q = n.useCallback(
    (_) => {
      y({ verticalAlign: _ });
    },
    [y]
  ), V = n.useCallback(
    (_) => {
      k({ letterSpacing: _ });
    },
    [k]
  ), X = n.useCallback(
    (_) => {
      y({ letterSpacing: _ }), R();
    },
    [R, y]
  ), D = n.useCallback(
    (_) => {
      k({ lineHeight: _ });
    },
    [k]
  ), W = n.useCallback(
    (_) => {
      y({ lineHeight: _ }), R();
    },
    [R, y]
  ), Y = n.useCallback(
    (_) => {
      k({
        textShadow: un({
          ...m,
          color: _
        })
      });
    },
    [m, k]
  ), pe = n.useCallback(
    (_) => {
      y({
        textShadow: un({
          ...m,
          color: _
        })
      }), R();
    },
    [m, R, y]
  ), C = n.useCallback(
    (_) => {
      k({
        textShadow: un({
          ...m,
          offsetX: _
        })
      });
    },
    [m, k]
  ), B = n.useCallback(
    (_) => {
      y({
        textShadow: un({
          ...m,
          offsetX: _
        })
      }), R();
    },
    [m, R, y]
  ), U = n.useCallback(
    (_) => {
      k({
        textShadow: un({
          ...m,
          offsetY: _
        })
      });
    },
    [m, k]
  ), J = n.useCallback(
    (_) => {
      y({
        textShadow: un({
          ...m,
          offsetY: _
        })
      }), R();
    },
    [m, R, y]
  ), re = n.useCallback(
    (_) => {
      k({
        textShadow: un({
          ...m,
          blur: _
        })
      });
    },
    [m, k]
  ), me = n.useCallback(
    (_) => {
      y({
        textShadow: un({
          ...m,
          blur: _
        })
      }), R();
    },
    [m, R, y]
  ), xe = n.useCallback(
    (_) => {
      k({
        stroke: na({
          ...b,
          width: _
        })
      });
    },
    [b, k]
  ), ye = n.useCallback(
    (_) => {
      y({
        stroke: na({
          ...b,
          width: _
        })
      }), R();
    },
    [b, R, y]
  ), Re = n.useCallback(
    (_) => {
      k({
        stroke: na({
          ...b,
          color: _
        })
      });
    },
    [b, k]
  ), Be = n.useCallback(
    (_) => {
      y({
        stroke: na({
          ...b,
          color: _
        })
      }), R();
    },
    [b, R, y]
  ), Fe = n.useCallback(
    (_) => {
      const he = ml.find((Ye) => Ye.id === _);
      if (!he)
        return;
      const et = h?.color ?? d[0]?.color ?? "#ffffff";
      y(he.getUpdates(et)), R();
    },
    [R, h?.color, d, y]
  ), De = n.useCallback(
    (_, he) => {
      const et = ke.getState().keyframes, Ye = d.flatMap(($e) => {
        const ct = Kr($e, t, Tr($e)), pt = et.find((Bt) => Bt.itemId === $e.id), Vt = ci(
          $e.durationInFrames,
          t.fps,
          _
        );
        if (!Vt)
          return [];
        const yr = va(
          ct,
          pt,
          _ === "intro" ? Vt.endFrame : Vt.startFrame
        );
        return Gx({
          item: $e,
          presetId: he,
          phase: _,
          fps: t.fps,
          anchorTransform: yr,
          itemKeyframes: pt
        });
      });
      Ye.length !== 0 && c(Ye);
    },
    [c, t, d]
  );
  if (d.length === 0 || !h)
    return null;
  const Qe = (h.text ?? d[0]?.text ?? "").slice(0, Wx), je = h.fontWeight === "bold", ee = x.some((_) => _.value === "bold"), Ge = h.fontStyle === "italic", H = h.underline === !0, ue = h.shadowOffsetX, Ce = h.shadowOffsetY, Ve = h.shadowBlur, Me = h.strokeWidth;
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    s && /* @__PURE__ */ r.jsxs(mr, { title: "Text", icon: qo, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Content", children: /* @__PURE__ */ r.jsx(
        Wu,
        {
          value: h.text ?? "",
          onChange: O,
          placeholder: h.text === void 0 ? "Mixed" : "Enter text...",
          className: "min-h-[60px] text-xs flex-1 min-w-0",
          rows: 3
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Font", className: "items-start", children: /* @__PURE__ */ r.jsx(
        Ax,
        {
          value: h.fontFamily,
          placeholder: h.fontFamily === void 0 ? "Mixed" : "Select font",
          previewText: Qe,
          onValueChange: j
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
        ys,
        {
          value: h.fontWeight,
          onValueChange: P,
          children: [
            /* @__PURE__ */ r.jsx(ws, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(Ss, { placeholder: h.fontWeight === void 0 ? "Mixed" : "Select weight" }) }),
            /* @__PURE__ */ r.jsx(ks, { children: x.map((_) => /* @__PURE__ */ r.jsx(Kn, { value: _.value, className: "text-xs", children: _.label }, _.value)) })
          ]
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ke, { label: "Style", children: /* @__PURE__ */ r.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: je ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: T,
            title: ee ? "Bold" : "Bold is not available for this font",
            "aria-label": "Bold",
            "aria-pressed": je,
            disabled: !ee,
            children: /* @__PURE__ */ r.jsx(Sm, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: Ge ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: F,
            title: "Italic",
            "aria-label": "Italic",
            "aria-pressed": Ge,
            children: /* @__PURE__ */ r.jsx(km, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: H ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: E,
            title: "Underline",
            "aria-label": "Underline",
            "aria-pressed": H,
            children: /* @__PURE__ */ r.jsx(Cm, { className: "w-3.5 h-3.5" })
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
            children: /* @__PURE__ */ r.jsx(Mm, { className: "w-3.5 h-3.5" })
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
            children: /* @__PURE__ */ r.jsx(Rm, { className: "w-3.5 h-3.5" })
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
            children: /* @__PURE__ */ r.jsx(Pm, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx("div", { className: "w-px h-5 bg-border mx-1" }),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: h.verticalAlign === "top" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => q("top"),
            title: "Align Top",
            children: /* @__PURE__ */ r.jsx(Im, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: h.verticalAlign === "middle" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => q("middle"),
            title: "Align Middle",
            children: /* @__PURE__ */ r.jsx(Tm, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          be,
          {
            variant: h.verticalAlign === "bottom" ? "secondary" : "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => q("bottom"),
            title: "Align Bottom",
            children: /* @__PURE__ */ r.jsx(Em, { className: "w-3.5 h-3.5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(
        Yn,
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
    a && /* @__PURE__ */ r.jsxs(mr, { title: "Effects", icon: Cs, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Presets", className: "items-start", children: /* @__PURE__ */ r.jsx("div", { className: "grid w-full grid-cols-2 gap-1.5", children: ml.map((_) => /* @__PURE__ */ r.jsx(
        be,
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
          onLiveChange: re,
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
          onChange: ye,
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
    o && /* @__PURE__ */ r.jsxs(mr, { title: "Animation", icon: Cs, defaultOpen: !0, children: [
      /* @__PURE__ */ r.jsx(Ke, { label: "Intro", className: "items-start", children: /* @__PURE__ */ r.jsx("div", { className: "grid w-full grid-cols-4 gap-1.5", children: il.map((_) => /* @__PURE__ */ r.jsx(
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
      /* @__PURE__ */ r.jsx(Ke, { label: "Outro", className: "items-start", children: /* @__PURE__ */ r.jsx("div", { className: "grid w-full grid-cols-4 gap-1.5", children: il.map((_) => /* @__PURE__ */ r.jsx(
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
const pl = [
  { value: "rectangle", label: "Rectangle" },
  { value: "circle", label: "Circle" },
  { value: "triangle", label: "Triangle" },
  { value: "ellipse", label: "Ellipse" },
  { value: "star", label: "Star" },
  { value: "polygon", label: "Polygon" },
  { value: "heart", label: "Heart" }
], Yx = [
  { value: "up", label: "Up", icon: Xo },
  { value: "down", label: "Down", icon: Zo },
  { value: "left", label: "Left", icon: Ms },
  { value: "right", label: "Right", icon: Rs }
];
function qx({ items: e }) {
  const t = ke((C) => C.updateItem), { isEditing: s, editingItemId: a, penMode: o, startEditing: i, stopEditing: c } = ze(), l = Xe((C) => C.setPropertiesPreviewNew), u = Xe((C) => C.clearPreview), d = n.useMemo(
    () => e.filter((C) => C.type === "shape"),
    [e]
  ), f = n.useMemo(() => d.map((C) => C.id), [d]), m = n.useMemo(() => {
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
  }, [d]), b = m?.shapeType && ["rectangle", "triangle", "star", "polygon"].includes(m.shapeType), h = m?.shapeType === "triangle", x = m?.shapeType && ["star", "polygon"].includes(m.shapeType), v = m?.shapeType === "star", S = d.length === 1 && d[0]?.shapeType === "path" ? d[0] : null, y = !!S && s && !o && a === S.id, w = n.useCallback(
    (C) => {
      d.forEach((B) => {
        t(B.id, C);
      });
    },
    [d, t]
  ), k = n.useCallback(
    (C) => {
      const U = pl.find((J) => J.value === C)?.label ?? C;
      w({ shapeType: C, label: U });
    },
    [w]
  ), R = n.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { fillColor: C };
      }), l(B);
    },
    [f, l]
  ), O = n.useCallback(
    (C) => {
      w({ fillColor: C }), queueMicrotask(() => u());
    },
    [w, u]
  ), L = n.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { strokeColor: C };
      }), l(B);
    },
    [f, l]
  ), I = n.useCallback(
    (C) => {
      w({ strokeColor: C || void 0 }), queueMicrotask(() => u());
    },
    [w, u]
  ), j = n.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        C > 0 && !m?.strokeColor ? B[U] = { strokeWidth: C, strokeColor: "#1e40af" } : B[U] = { strokeWidth: C };
      }), l(B);
    },
    [f, l, m?.strokeColor]
  ), P = n.useCallback(
    (C) => {
      C > 0 && m?.strokeWidth === 0 && !m?.strokeColor ? w({ strokeWidth: C, strokeColor: "#1e40af" }) : w({ strokeWidth: C }), queueMicrotask(() => u());
    },
    [w, u, m?.strokeWidth, m?.strokeColor]
  ), T = n.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { cornerRadius: C };
      }), l(B);
    },
    [f, l]
  ), F = n.useCallback(
    (C) => {
      w({ cornerRadius: C }), queueMicrotask(() => u());
    },
    [w, u]
  ), E = n.useCallback(
    (C) => {
      w({ direction: C });
    },
    [w]
  ), N = n.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { points: C };
      }), l(B);
    },
    [f, l]
  ), z = n.useCallback(
    (C) => {
      w({ points: C }), queueMicrotask(() => u());
    },
    [w, u]
  ), M = n.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { innerRadius: C };
      }), l(B);
    },
    [f, l]
  ), q = n.useCallback(
    (C) => {
      w({ innerRadius: C }), queueMicrotask(() => u());
    },
    [w, u]
  ), V = n.useCallback(
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
  ), X = n.useCallback(
    (C) => {
      const B = C;
      w({
        maskType: B,
        maskFeather: B === "alpha" ? typeof m?.maskFeather == "number" && m.maskFeather > 0 ? m.maskFeather : 10 : 0
      });
    },
    [m?.maskFeather, w]
  ), D = n.useCallback(
    (C) => {
      const B = {};
      f.forEach((U) => {
        B[U] = { maskFeather: C };
      }), l(B);
    },
    [f, l]
  ), W = n.useCallback(
    (C) => {
      w({ maskFeather: C }), queueMicrotask(() => u());
    },
    [w, u]
  ), Y = n.useCallback(() => {
    w({ maskFeather: 10 });
  }, [w]), pe = n.useCallback(
    (C) => {
      w({ maskInvert: C });
    },
    [w]
  );
  return d.length === 0 || !m ? null : /* @__PURE__ */ r.jsxs(mr, { title: "Shape", icon: Fm, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Type", children: /* @__PURE__ */ r.jsxs(
      ys,
      {
        value: m.shapeType,
        onValueChange: k,
        children: [
          /* @__PURE__ */ r.jsx(ws, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(Ss, { placeholder: m.shapeType === void 0 ? "Mixed" : "Select shape" }) }),
          /* @__PURE__ */ r.jsx(ks, { children: pl.map((C) => /* @__PURE__ */ r.jsx(Kn, { value: C.value, className: "text-xs", children: C.label }, C.value)) })
        ]
      }
    ) }),
    S && /* @__PURE__ */ r.jsx(Ke, { label: "Path", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 w-full", children: [
      /* @__PURE__ */ r.jsxs(
        be,
        {
          variant: y ? "default" : "outline",
          size: "sm",
          className: "h-7 text-xs gap-1.5",
          onClick: () => {
            y ? c() : i(S.id);
          },
          children: [
            /* @__PURE__ */ r.jsx(jf, { className: "w-3.5 h-3.5" }),
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
        onLiveChange: j,
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
        onChange: F,
        onLiveChange: T,
        min: 0,
        max: 100,
        step: 1,
        unit: "px",
        className: "flex-1 min-w-0"
      }
    ) }),
    h && /* @__PURE__ */ r.jsx(Ke, { label: "Direction", children: /* @__PURE__ */ r.jsx("div", { className: "flex gap-1", children: Yx.map((C) => /* @__PURE__ */ r.jsx(
      be,
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
        onLiveChange: N,
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
      be,
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
        ys,
        {
          value: m.maskType,
          onValueChange: X,
          disabled: m.isMask !== !0,
          children: [
            /* @__PURE__ */ r.jsx(ws, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(Ss, { placeholder: m.maskType === void 0 ? "Mixed" : "Select type" }) }),
            /* @__PURE__ */ r.jsxs(ks, { children: [
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
          be,
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
const gl = {
  topLeft: [0, 0],
  topRight: [0, 0],
  bottomRight: [0, 0],
  bottomLeft: [0, 0]
}, xl = {
  topLeft: "TL",
  topRight: "TR",
  bottomRight: "BR",
  bottomLeft: "BL"
}, Xx = n.memo(function({
  items: t
}) {
  const s = ke((x) => x.updateItem), {
    isEditing: a,
    editingItemId: o,
    startEditing: i,
    stopEditing: c
  } = Er(), l = t.length === 1 ? t[0] : null, u = l?.cornerPin ?? gl, d = a && o === l?.id, f = n.useMemo(() => u.topLeft[0] !== 0 || u.topLeft[1] !== 0 || u.topRight[0] !== 0 || u.topRight[1] !== 0 || u.bottomRight[0] !== 0 || u.bottomRight[1] !== 0 || u.bottomLeft[0] !== 0 || u.bottomLeft[1] !== 0, [u]), m = n.useCallback(
    (x, v, S) => {
      if (!l) return;
      const y = l.cornerPin ?? gl, w = [...y[x]];
      w[v] = S, s(l.id, {
        cornerPin: { ...y, [x]: w }
      });
    },
    [l, s]
  ), b = n.useCallback(() => {
    l && s(l.id, { cornerPin: void 0 });
  }, [l, s]), h = n.useCallback(() => {
    d ? c() : l && i(l.id);
  }, [d, l, i, c]);
  return !l || t.length > 1 ? null : /* @__PURE__ */ r.jsxs(mr, { title: "Corner Pin", icon: To, defaultOpen: !1, children: [
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
            /* @__PURE__ */ r.jsx(To, { className: "w-3 h-3" }),
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
          children: /* @__PURE__ */ r.jsx(Gt, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    Object.keys(xl).map((x) => /* @__PURE__ */ r.jsx(Ke, { label: xl[x], children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 w-full", children: [
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
function Zx(e) {
  return e.type === "image" && (e.label?.toLowerCase().endsWith(".gif") ?? !1);
}
function Jx(e) {
  const t = new Set(e.map((a) => a.type)), s = e.some(Zx);
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
const Qx = n.memo(function() {
  const t = Ct((M) => M.clipInspectorTab), s = Ct((M) => M.setClipInspectorTab), a = It((M) => M.selectedItemIds), o = ke((M) => M.updateItemsTransform), i = sr((M) => M.currentProject?.metadata.width ?? 1920), c = sr((M) => M.currentProject?.metadata.height ?? 1080), l = sr((M) => M.currentProject?.metadata.fps ?? 30), u = Jt(
    pn(
      n.useCallback((M) => {
        const q = [];
        for (const V of a) {
          const X = M.itemById[V];
          X && q.push(X);
        }
        return q;
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
    () => Jx(u),
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
  } = f, k = n.useMemo(
    () => u.filter((M) => M.type !== "audio" && M.type !== "adjustment"),
    [u]
  ), R = n.useMemo(
    () => u.filter((M) => M.type !== "audio"),
    [u]
  ), O = n.useMemo(() => {
    if (u.length === 0) return !0;
    const M = u.find(
      (q) => q.transform?.aspectRatioLocked !== void 0
    );
    return M ? M.transform.aspectRatioLocked : !w;
  }, [u, w]), L = n.useCallback(() => {
    const M = !O, q = u.map((V) => V.id);
    o(q, { aspectRatioLocked: M });
  }, [O, u, o]), I = n.useCallback(
    (M, q) => {
      o(M, q);
    },
    [o]
  ), j = k.length > 0, P = x, T = m, F = n.useMemo(() => {
    const M = [];
    return j && M.push("video"), P && M.push("audio"), T && M.push("effects"), M;
  }, [P, T, j]), E = F[0] ?? "video", N = F.includes(t) ? t : E;
  n.useEffect(() => {
    u.length !== 0 && t !== N && s(N);
  }, [N, t, u.length, s]);
  const z = n.useCallback((M) => {
    s(M);
  }, [s]);
  return u.length === 0 ? null : /* @__PURE__ */ r.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ r.jsxs(yx, { value: N, onValueChange: z, className: "w-full", children: [
    /* @__PURE__ */ r.jsxs(Vu, { className: "grid w-full grid-cols-3 h-8", children: [
      /* @__PURE__ */ r.jsxs(
        la,
        {
          value: "video",
          disabled: !j,
          className: "text-xs gap-1 px-2",
          children: [
            /* @__PURE__ */ r.jsx(Zl, { className: "h-3 w-3" }),
            "Video"
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs(
        la,
        {
          value: "audio",
          disabled: !P,
          className: "text-xs gap-1 px-2",
          children: [
            /* @__PURE__ */ r.jsx(eu, { className: "h-3 w-3" }),
            "Audio"
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs(
        la,
        {
          value: "effects",
          disabled: !T,
          className: "text-xs gap-1 px-2",
          children: [
            /* @__PURE__ */ r.jsx(Cs, { className: "h-3 w-3" }),
            "Effects"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx(ua, { value: "video", className: "mt-3", children: j && /* @__PURE__ */ r.jsxs("div", { className: "divide-y divide-border [&>*]:py-4 [&>*:first-child]:pt-0 [&>*:last-child]:pb-0", children: [
      j && /* @__PURE__ */ r.jsx(
        wx,
        {
          items: k,
          canvas: d,
          onTransformChange: I,
          aspectLocked: O,
          onAspectLockToggle: L
        }
      ),
      b && /* @__PURE__ */ r.jsx(Cx, { items: u }),
      j && /* @__PURE__ */ r.jsx(
        Sx,
        {
          items: k,
          canvas: d,
          onTransformChange: I
        }
      ),
      j && /* @__PURE__ */ r.jsx(Xx, { items: k }),
      v && /* @__PURE__ */ r.jsx(
        hl,
        {
          items: u,
          canvas: d,
          showEffectSection: !1,
          showAnimationSection: !1
        }
      ),
      S && /* @__PURE__ */ r.jsx(qx, { items: u }),
      h && /* @__PURE__ */ r.jsx(Mx, { items: u })
    ] }) }),
    /* @__PURE__ */ r.jsxs(ua, { value: "audio", className: "space-y-4 mt-3", children: [
      x && /* @__PURE__ */ r.jsx(Tx, { items: u }),
      Nf
    ] }),
    /* @__PURE__ */ r.jsx(ua, { value: "effects", className: "space-y-4 mt-3", children: m && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      y && /* @__PURE__ */ r.jsx("div", { className: "px-2 py-2 text-xs text-muted-foreground bg-purple-500/10 rounded border border-purple-500/20", children: "Effects on adjustment layers apply to all items on tracks above." }),
      /* @__PURE__ */ r.jsx(Am, { items: R }),
      v && /* @__PURE__ */ r.jsx(Go, {}),
      v && /* @__PURE__ */ r.jsx(
        hl,
        {
          items: u,
          canvas: d,
          showContentSection: !1
        }
      )
    ] }) })
  ] }) });
}), wo = "oklch(0.65 0.20 250)", eb = [
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
function tb() {
  const e = It((h) => h.selectedMarkerId), t = It((h) => h.clearSelection), s = ke((h) => h.markers), a = ke((h) => h.updateMarker), o = ke((h) => h.removeMarker), i = ke((h) => h.fps), c = n.useMemo(
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
    e && c?.color !== wo && a(e, { color: wo });
  }, [e, c?.color, a]), b = n.useCallback(
    (h) => {
      const x = h / i, v = Math.floor(x / 60), S = Math.floor(x % 60), y = h % i;
      return `${String(v).padStart(2, "0")}:${String(S).padStart(2, "0")}.${String(y).padStart(2, "0")}`;
    },
    [i]
  );
  return c ? /* @__PURE__ */ r.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ r.jsxs(mr, { title: "Marker", icon: Yi, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Frame", children: /* @__PURE__ */ r.jsx(
      Kt,
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
      ru,
      {
        value: c.label || "",
        onChange: u,
        placeholder: "Enter label...",
        className: "h-7 text-xs flex-1 min-w-0"
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      Yn,
      {
        label: "Color",
        color: c.color,
        onChange: d,
        onReset: m,
        defaultColor: wo,
        presets: eb
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
          /* @__PURE__ */ r.jsx(nu, { className: "w-3 h-3 mr-1.5" }),
          "Delete Marker"
        ]
      }
    ) })
  ] }) }) : /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
    /* @__PURE__ */ r.jsx(Yi, { className: "w-8 h-8 text-muted-foreground/50 mb-2" }),
    /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground", children: "Marker not found" })
  ] });
}
function sa(e) {
  return e.direction ? `${e.id}:${e.direction}` : e.id;
}
function rb(e) {
  return e.direction ? e.description : e.label;
}
const nb = [
  { value: "linear", label: "Linear" },
  { value: "ease-in", label: "In" },
  { value: "ease-out", label: "Out" },
  { value: "ease-in-out", label: "In & Out" }
];
function bl(e) {
  return nb.filter((t) => e.includes(t.value));
}
function sb() {
  const e = It(
    (E) => E.selectedTransitionId
  ), t = It(
    (E) => E.clearSelection
  ), s = ke((E) => E.transitions), a = ke(
    (E) => E.updateTransition
  ), o = ke(
    (E) => E.removeTransition
  ), i = ke((E) => E.fps), c = ke((E) => E.items), l = n.useMemo(
    () => s.find((E) => E.id === e),
    [s, e]
  ), u = l && l.type in qi ? qi[l.type] : null, d = n.useMemo(
    () => l ? c.find((E) => E.id === l.leftClipId) : null,
    [c, l]
  ), f = n.useMemo(
    () => l ? c.find((E) => E.id === l.rightClipId) : null,
    [c, l]
  ), m = n.useMemo(
    () => Object.entries(gu()).filter(([, E]) => E.length > 0),
    []
  ), b = n.useMemo(
    () => m.flatMap(([, E]) => E),
    [m]
  ), h = n.useMemo(
    () => b.find((E) => E.id === l?.presentation && (E.direction ?? void 0) === (l?.direction ?? void 0)),
    [b, l?.presentation, l?.direction]
  ), x = n.useMemo(
    () => l ? Qr.getDefinition(l.presentation) : void 0,
    [l]
  ), v = n.useMemo(
    () => bl(x?.supportedTimings ?? []),
    [x]
  ), S = 1, y = n.useMemo(() => {
    if (!u || !l || !d || !f)
      return i * 3;
    const E = d.from + d.durationInFrames;
    if (!(Math.abs(E - f.from) <= 1)) {
      const M = Math.floor(Math.min(d.durationInFrames, f.durationInFrames) - 1);
      return Math.max(S, Math.max(l.durationInFrames, Math.min(i * 3, M)));
    }
    const z = Af(d, f, l.alignment);
    return Math.max(S, Math.max(l.durationInFrames, Math.min(i * 3, z)));
  }, [u, l, d, f, i]), w = n.useCallback(
    (E, N) => {
      if (e) {
        const z = { presentation: E, direction: N }, M = Qr.getDefinition(E), V = bl(M?.supportedTimings ?? [])[0], X = l?.timing;
        V && M && X && !M.supportedTimings.includes(X) && (z.timing = V.value), a(e, z);
      }
    },
    [e, l?.timing, a]
  ), k = n.useCallback((E) => {
    const N = b.find((z) => sa(z) === E);
    N && w(N.id, N.direction);
  }, [w, b]), R = n.useCallback(
    (E) => {
      if (e && u) {
        const N = Math.max(
          S,
          Math.min(y, Math.round(E))
        );
        a(e, { durationInFrames: N });
      }
    },
    [e, u, a, S, y]
  ), O = Math.min(i, y), L = n.useCallback(() => {
    if (e && u) {
      const E = Math.max(
        S,
        Math.min(y, O)
      );
      a(e, { durationInFrames: E });
    }
  }, [e, u, a, O, S, y]), I = n.useCallback(
    (E) => {
      e && a(e, { timing: E });
    },
    [e, a]
  ), j = n.useCallback(() => {
    e && (o(e), t());
  }, [e, o, t]), P = n.useCallback(
    (E) => `${(E / i).toFixed(2)}s`,
    [i]
  ), T = n.useCallback(
    (E) => (E / i).toFixed(2),
    [i]
  ), F = n.useCallback(
    (E) => {
      const N = E.trim().replace(/s$/i, ""), z = parseFloat(N);
      return Number.isFinite(z) ? z * i : Number.NaN;
    },
    [i]
  );
  return !l || !u ? /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
    /* @__PURE__ */ r.jsx(Eo, { className: "w-8 h-8 text-muted-foreground/50 mb-2" }),
    /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground", children: "Transition not found" })
  ] }) : /* @__PURE__ */ r.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ r.jsxs(mr, { title: "Transition", icon: Eo, defaultOpen: !0, children: [
    /* @__PURE__ */ r.jsx(Ke, { label: "Preset", tooltip: "Transition style preset", children: /* @__PURE__ */ r.jsx("div", { className: "w-full", children: /* @__PURE__ */ r.jsxs(
      ys,
      {
        value: h ? sa(h) : void 0,
        onValueChange: k,
        children: [
          /* @__PURE__ */ r.jsx(ws, { className: "h-7 text-xs flex-1 min-w-0", children: /* @__PURE__ */ r.jsx(Ss, { placeholder: "Select preset" }) }),
          /* @__PURE__ */ r.jsx(ks, { children: m.map(([E, N]) => /* @__PURE__ */ r.jsxs(Jl, { children: [
            /* @__PURE__ */ r.jsx(Ql, { className: "text-[10px] text-muted-foreground", children: pu[E]?.title ?? E }),
            N.map((z) => /* @__PURE__ */ r.jsx(
              Kn,
              {
                value: sa(z),
                className: "text-xs",
                children: rb(z)
              },
              sa(z)
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
          parseInputValue: F,
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
      be,
      {
        variant: "destructive",
        size: "sm",
        className: "w-full h-7 text-xs",
        onClick: j,
        children: [
          /* @__PURE__ */ r.jsx(nu, { className: "w-3 h-3 mr-1.5" }),
          "Delete"
        ]
      }
    ) })
  ] }) });
}
function ab(e) {
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
function ob(e) {
  const t = ab(e), s = t.length;
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
const ib = n.memo(function({ fillContainer: t = !1 }) {
  const s = es((I) => I.editorDensity), a = Sa(s), o = Ct((I) => I.rightSidebarOpen), i = Ct((I) => I.toggleRightSidebar), c = Ct((I) => I.rightSidebarWidth), l = Ct((I) => I.setRightSidebarWidth), u = Ct((I) => I.propertiesFullColumn), d = Ct((I) => I.togglePropertiesFullColumn), f = It((I) => I.selectedItemIds), m = It((I) => I.selectedMarkerId), b = It((I) => I.selectedTransitionId), h = Jt(
    pn(
      n.useCallback((I) => {
        const j = [];
        for (const P of f) {
          const T = I.itemById[P];
          T && j.push(T);
        }
        return j;
      }, [f])
    )
  ), x = f.length > 0, v = n.useMemo(
    () => ob(h),
    [h]
  ), S = !b && !m ? v : null, y = n.useRef(!1), w = n.useRef(0), k = n.useRef(0), R = n.useCallback((I) => {
    I.preventDefault(), y.current = !0, w.current = I.clientX, k.current = c, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
  }, [c]);
  n.useEffect(() => {
    const I = (P) => {
      if (!y.current) return;
      const T = w.current - P.clientX, F = Of(k.current + T, a);
      l(F);
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
                style: { height: qe.sidebarHeaderHeight },
                children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "min-w-0 flex items-center gap-1", children: [
                    !t && /* @__PURE__ */ r.jsx(
                      be,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "shrink-0",
                        style: { width: qe.sidebarHeaderButtonSize, height: qe.sidebarHeaderButtonSize },
                        onClick: d,
                        "data-tooltip": u ? "Dock to preview" : "Expand full column",
                        "data-tooltip-side": "bottom",
                        children: u ? /* @__PURE__ */ r.jsx(Xo, { className: "w-3 h-3" }) : /* @__PURE__ */ r.jsx(Zo, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ r.jsx(Df, { className: "w-3 h-3 shrink-0 text-muted-foreground" }),
                    /* @__PURE__ */ r.jsxs("h2", { className: "min-w-0 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground", children: [
                      /* @__PURE__ */ r.jsx("span", { className: "shrink-0 uppercase tracking-wide", children: "Properties" }),
                      S && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                        /* @__PURE__ */ r.jsx("span", { className: "shrink-0", children: "-" }),
                        /* @__PURE__ */ r.jsx("span", { className: "truncate normal-case tracking-normal", title: S.title, children: S.text })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ r.jsx(
                    be,
                    {
                      variant: "ghost",
                      size: "icon",
                      style: { width: qe.sidebarHeaderButtonSize, height: qe.sidebarHeaderButtonSize },
                      onClick: i,
                      children: /* @__PURE__ */ r.jsx(Rs, { className: "w-3.5 h-3.5" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto overflow-x-hidden p-3 [scrollbar-gutter:stable]", children: b ? /* @__PURE__ */ r.jsx(sb, {}) : m ? /* @__PURE__ */ r.jsx(tb, {}) : x ? /* @__PURE__ */ r.jsx(Qx, {}) : /* @__PURE__ */ r.jsx(vx, {}) })
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
        style: { height: qe.sidebarRevealToggleHeight },
        "data-tooltip": "Show Properties Panel",
        "data-tooltip-side": "left",
        children: /* @__PURE__ */ r.jsx(Ms, { className: "w-3 h-3 text-muted-foreground" })
      }
    )
  ] });
});
function aa({
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
      className: fr(
        i ? "relative flex h-full min-h-0 w-full flex-col" : "relative min-h-0",
        s
      ),
      "data-interaction-locked": e ? "true" : "false",
      style: o,
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: fr(
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
const cb = 10, lb = 33, vl = 33, yl = 50, wl = 32, ps = 22, So = 55;
function Sl({
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
          children: /* @__PURE__ */ r.jsx(jm, { className: "w-3.5 h-3.5 text-muted-foreground" })
        }
      )
    }
  );
}
const ub = n.memo(function({
  project: t,
  containerSize: s,
  suspendOverlay: a
}) {
  const o = Ct((u) => u.mediaSkimPreviewMediaId), i = Ct((u) => u.mediaSkimPreviewFrame), c = Ct((u) => u.compoundClipSkimPreviewCompositionId), l = Ct((u) => u.compoundClipSkimPreviewFrame);
  return /* @__PURE__ */ r.jsx(Uo, { level: "component", children: c ? /* @__PURE__ */ r.jsx(
    B0,
    {
      compositionId: c,
      seekFrame: l,
      containerSize: s
    }
  ) : o ? /* @__PURE__ */ r.jsx(
    _0,
    {
      mediaId: o,
      seekFrame: i,
      containerSize: s
    }
  ) : /* @__PURE__ */ r.jsx(
    u0,
    {
      project: t,
      containerSize: s,
      suspendOverlay: a
    }
  ) });
}), db = n.memo(function({ project: t }) {
  const s = n.useRef(null), a = n.useRef(null), { isFullscreen: o, toggleFullscreen: i } = ix({ containerRef: a }), [c, l] = n.useState({ width: 0, height: 0 }), u = es((Ue) => Ue.editorDensity), d = Sa(u), f = ze((Ue) => Ue.isEditing), m = ze((Ue) => Ue.penMode), b = ze((Ue) => Ue.shapePenMode), h = ze((Ue) => Ue.editingItemId), x = ze((Ue) => Ue.selectedVertexIndices), v = ze((Ue) => Ue.selectedVertexIndex), S = ze((Ue) => Ue.penVertices.length), y = ze((Ue) => Ue.previewVertices?.length ?? 0), w = ze((Ue) => Ue.requestFinishPenMode), k = ze((Ue) => Ue.requestCancelPenMode), R = ze((Ue) => Ue.requestConvertSelectedVertex), O = ze((Ue) => Ue.stopEditing), L = Jt(
    n.useCallback((Ue) => {
      if (!h) return 0;
      const Pt = Ue.items.find((zt) => zt.id === h);
      return Pt?.type === "shape" && Pt.shapeType === "path" ? Pt.pathVertices?.length ?? 0 : 0;
    }, [h])
  ), I = sr((Ue) => Ue.currentProject?.metadata.width), j = sr((Ue) => Ue.currentProject?.metadata.height), P = sr((Ue) => Ue.currentProject?.metadata.fps), T = sr((Ue) => Ue.currentProject?.metadata.backgroundColor), F = I ?? t.width, E = j ?? t.height, N = P ?? t.fps, z = T ?? "#000000", q = ke((Ue) => {
    if (Ue.items.length === 0) return null;
    let Pt = 0;
    for (const zt of Ue.items) {
      const Pe = zt.from + zt.durationInFrames;
      Pe > Pt && (Pt = Pe);
    }
    return Pt;
  }) ?? N * cb, V = f && !m, X = b && S >= 3, D = x.length, W = D > 0, Y = Math.max(0, 3 - S), pe = y || L, C = X ? "Close the path from here, or click the first node." : S === 0 ? "Click in the preview to place your first point." : `Add ${Y} more ${Y === 1 ? "point" : "points"} to finish.`, B = pe > 0 ? "Drag points, handles, or the mask body to adjust the shape." : "Drag inside the mask to move it.", U = D === 0 ? "Select a point to enable corner and bezier conversion." : D === 1 && v !== null ? `Point ${v + 1} selected for knot conversion.` : `${D} points selected for knot conversion.`;
  n.useEffect(() => {
    const Ue = s.current;
    if (!Ue) return;
    let Pt = null, zt = 0;
    const Pe = () => {
      const Ht = Ue.getBoundingClientRect(), or = Math.max(0, Math.floor(Ht.width - d.previewPadding)), Rr = Math.max(0, Math.floor(Ht.height - d.previewPadding));
      l((Ut) => Ut.width === or && Ut.height === Rr ? Ut : { width: or, height: Rr });
    }, er = () => {
      Pt === null && (Pt = requestAnimationFrame(() => {
        const Ht = performance.now();
        if (Ht - zt < lb) {
          Pt = requestAnimationFrame(() => {
            Pt = null, zt = performance.now(), Pe();
          });
          return;
        }
        Pt = null, zt = Ht, Pe();
      }));
    };
    Pe();
    const Yt = new ResizeObserver(er);
    return Yt.observe(Ue), () => {
      Yt.disconnect(), Pt !== null && cancelAnimationFrame(Pt);
    };
  }, [d.previewPadding]);
  const J = n.useMemo(
    () => ({ width: F, height: E, fps: N, backgroundColor: z }),
    [F, E, N, z]
  ), re = Ct((Ue) => Ue.sourcePreviewMediaId), me = Ct((Ue) => Ue.colorScopesOpen), [xe, ye] = n.useState(yl), [Re, Be] = n.useState(wl), [Fe, De] = n.useState(!1), Qe = n.useRef(null), je = n.useRef(!1), ee = n.useRef(null), Ge = n.useRef(null), H = n.useRef(0), ue = n.useRef(null), Ce = n.useRef(!1), Ve = n.useRef(null), Me = n.useRef(null), _ = n.useRef(0), he = n.useRef(null), et = n.useCallback(() => {
    Ct.getState().setSourcePreviewMediaId(null);
  }, []), Ye = n.useCallback(() => {
    Ct.getState().setColorScopesOpen(!1);
  }, []), $e = me ? Math.max(ps, Math.min(So, Re)) : 0, ct = 100 - $e, pt = xe / 100 * ct, Vt = re ? Math.max(
    ps,
    Math.min(ct - ps, pt)
  ) : 0, yr = yl, Bt = wl, _r = n.useCallback(() => {
    ye(yr);
  }, [yr]), hr = n.useCallback(() => {
    Be(Bt);
  }, [Bt]), wr = n.useCallback((Ue) => {
    Ue.preventDefault(), je.current = !0, De(!0), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
    const Pt = (er) => {
      if (!je.current || !Qe.current) return;
      const Yt = Qe.current.getBoundingClientRect(), Ht = (er.clientX - Yt.left) / Yt.width * 100, or = 100 - (me ? $e : 0);
      ee.current = or > 0 ? Math.max(0, Math.min(100, Ht / or * 100)) : 50, Ge.current === null && (Ge.current = requestAnimationFrame(() => {
        Ge.current = null;
        const Rr = performance.now();
        if (Rr - H.current < vl)
          return;
        H.current = Rr;
        const Ut = ee.current;
        Ut !== null && ye(Ut);
      }));
    }, zt = () => {
      const er = ee.current;
      er !== null && ye(er), Ge.current !== null && (cancelAnimationFrame(Ge.current), Ge.current = null), je.current = !1, ee.current = null, De(!1), document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", Pt), document.removeEventListener("mouseup", Pe), ue.current = null;
    }, Pe = () => {
      zt();
    };
    ue.current = zt, document.addEventListener("mousemove", Pt), document.addEventListener("mouseup", Pe);
  }, [me, $e]), Lr = n.useCallback((Ue) => {
    Ue.preventDefault(), Ce.current = !0, De(!0), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
    const Pt = (er) => {
      if (!Ce.current || !Qe.current) return;
      const Yt = Qe.current.getBoundingClientRect();
      Ve.current = (Yt.right - er.clientX) / Yt.width * 100, Me.current === null && (Me.current = requestAnimationFrame(() => {
        Me.current = null;
        const Ht = performance.now();
        if (Ht - _.current < vl)
          return;
        _.current = Ht;
        const or = Ve.current;
        or !== null && Be(
          Math.max(ps, Math.min(So, or))
        );
      }));
    }, zt = () => {
      const er = Ve.current;
      er !== null && Be(
        Math.max(ps, Math.min(So, er))
      ), Me.current !== null && (cancelAnimationFrame(Me.current), Me.current = null), Ce.current = !1, Ve.current = null, De(!1), document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", Pt), document.removeEventListener("mouseup", Pe), he.current = null;
    }, Pe = () => {
      zt();
    };
    he.current = zt, document.addEventListener("mousemove", Pt), document.addEventListener("mouseup", Pe);
  }, []);
  n.useEffect(() => () => {
    ue.current?.(), he.current?.();
  }, []);
  const Sr = !!re || me, At = Math.max(
    0,
    100 - Vt - $e
  );
  return /* @__PURE__ */ r.jsxs("div", { ref: Qe, className: "flex-1 flex min-h-0 min-w-0 relative", role: "region", "aria-label": "Preview area", children: [
    re && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        aa,
        {
          locked: f,
          fillHeight: !0,
          className: "h-full",
          overlayClassName: "rounded-none",
          style: { width: `${Vt}%` },
          children: /* @__PURE__ */ r.jsx("div", { className: "flex h-full flex-col min-w-0", children: /* @__PURE__ */ r.jsx(
            N0,
            {
              mediaId: re,
              onClose: et
            },
            re
          ) })
        }
      ),
      /* @__PURE__ */ r.jsx(aa, { locked: f, overlayClassName: "rounded-none", children: /* @__PURE__ */ r.jsx(
        Sl,
        {
          onMouseDown: wr,
          onReset: _r,
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
            /* @__PURE__ */ r.jsx("div", { ref: s, className: "flex-1 min-h-0 relative overflow-hidden", "aria-label": "Preview canvas region", children: /* @__PURE__ */ r.jsx(
              ub,
              {
                project: J,
                containerSize: c,
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
                style: { height: qe.previewControlsHeight },
                children: [
                  /* @__PURE__ */ r.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ r.jsx(x0, { fps: N, totalFrames: q }) }),
                  /* @__PURE__ */ r.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ r.jsx("div", { className: "pointer-events-auto flex items-center gap-2.5", children: /* @__PURE__ */ r.jsx(g0, { totalFrames: q, fps: N }) }) }),
                  /* @__PURE__ */ r.jsxs("div", { className: "ml-auto flex flex-shrink-0 items-center gap-0.5", children: [
                    /* @__PURE__ */ r.jsx(y0, {}),
                    /* @__PURE__ */ r.jsx(Go, { orientation: "vertical", className: "h-4" }),
                    /* @__PURE__ */ r.jsx(dx, { width: F, height: E }),
                    /* @__PURE__ */ r.jsx(cx, { isFullscreen: o, onToggle: i })
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    ),
    me && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(aa, { locked: f, overlayClassName: "rounded-none", children: /* @__PURE__ */ r.jsx(
        Sl,
        {
          onMouseDown: Lr,
          onReset: hr,
          showReset: Math.abs($e - Bt) > 0.5,
          resetLabel: "Reset color scopes width",
          resetTooltip: "Reset Color Scopes Width"
        }
      ) }),
      /* @__PURE__ */ r.jsx(
        aa,
        {
          locked: f,
          fillHeight: !0,
          className: "h-full",
          overlayClassName: "rounded-none",
          style: { width: `${$e}%` },
          children: /* @__PURE__ */ r.jsx("div", { className: "flex h-full flex-col min-w-0", children: /* @__PURE__ */ r.jsx(ox, { onClose: Ye }) })
        }
      )
    ] })
  ] });
});
function fb(e = {}) {
  const t = _f();
  Xi(
    t.SAVE,
    (s) => {
      s.preventDefault(), e.onSave && e.onSave();
    },
    Zi,
    [e.onSave]
  ), Xi(
    t.EXPORT,
    (s) => {
      s.preventDefault(), e.onExport && e.onExport();
    },
    { ...Zi, eventListenerOptions: { capture: !0 } },
    [e.onExport]
  );
}
const mb = 350, hb = 8;
function Rn(e, t, s, a, o) {
  const i = new DragEvent(t, { bubbles: !0, cancelable: !0, composed: !0, clientX: a, clientY: o, dataTransfer: s });
  return e.dispatchEvent(i);
}
function pb(e) {
  const t = e.getBoundingClientRect(), s = e.cloneNode(!0);
  return Object.assign(s.style, {
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
  }), (e.closest(".kc-embed") ?? document.body).appendChild(s), s;
}
function gb(e, t, s) {
  const { width: a, height: o } = e.ghost.getBoundingClientRect();
  e.ghost.style.transform = `translate(${t - a / 2}px, ${s - o / 2}px) scale(0.8)`;
}
function ko(e, t, s) {
  gb(e, t, s);
  const a = document.elementFromPoint(t, s);
  a !== e.over && (a && Rn(a, "dragenter", e.data, t, s), e.over && Rn(e.over, "dragleave", e.data, t, s), e.over = a), e.accepted = a ? !Rn(a, "dragover", e.data, t, s) : !1;
}
function xb(e, t, s, a) {
  e.ghost.remove(), !a && e.over && e.accepted ? Rn(e.over, "drop", e.data, t, s) : e.over && Rn(e.over, "dragleave", e.data, t, s), Rn(e.source, "dragend", e.data, t, s);
}
let kl = !1;
function bb() {
  if (kl || typeof DragEvent > "u" || typeof DataTransfer > "u") return;
  kl = !0;
  let e = null, t = null, s = null;
  const a = () => {
    t && clearTimeout(t), t = null, s = null;
  };
  document.addEventListener("pointerdown", (c) => {
    if (c.pointerType === "mouse" || e) return;
    const l = c.target?.closest?.('.kc-embed [draggable="true"]');
    l && (s = { x: c.clientX, y: c.clientY, id: c.pointerId, source: l }, t = setTimeout(() => {
      if (!s) return;
      const u = new DataTransfer();
      if (u.effectAllowed = "all", !Rn(s.source, "dragstart", u, s.x, s.y)) {
        a();
        return;
      }
      navigator.vibrate?.(10), e = { source: s.source, data: u, ghost: pb(s.source), over: null, accepted: !1 }, ko(e, s.x, s.y), t = null;
    }, mb));
  }, !0), document.addEventListener("pointermove", (c) => {
    !s || c.pointerId !== s.id || (e ? c.pointerType !== "touch" && ko(e, c.clientX, c.clientY) : Math.hypot(c.clientX - s.x, c.clientY - s.y) > hb && a());
  }, !0);
  const o = (c, l, u) => {
    e && (xb(e, c, l, u), e = null), a();
  };
  document.addEventListener("pointerup", (c) => {
    s && c.pointerId === s.id && !(e && c.pointerType === "touch") && o(c.clientX, c.clientY, !1);
  }, !0), document.addEventListener("pointercancel", (c) => {
    s && c.pointerId === s.id && !e && a();
  }, !0), document.addEventListener("touchmove", (c) => {
    if (!e) return;
    c.preventDefault();
    const l = c.touches[0];
    l && ko(e, l.clientX, l.clientY);
  }, { passive: !1, capture: !0 });
  const i = (c) => (l) => {
    if (!e) return;
    const u = l.changedTouches[0];
    o(u?.clientX ?? 0, u?.clientY ?? 0, c);
  };
  document.addEventListener("touchend", i(!1), !0), document.addEventListener("touchcancel", i(!0), !0), document.addEventListener("contextmenu", (c) => {
    (e || t) && c.preventDefault();
  }, !0), document.addEventListener("dragstart", (c) => {
    c.isTrusted && (e || t) && c.preventDefault();
  }, !0);
}
const vb = 'input,textarea,select,[contenteditable="true"],[draggable="true"]';
function Co(e, t, s, a) {
  t.dispatchEvent(new MouseEvent(e, {
    bubbles: !0,
    cancelable: !0,
    composed: !0,
    view: window,
    clientX: s.clientX,
    clientY: s.clientY,
    screenX: s.screenX,
    screenY: s.screenY,
    button: 0,
    buttons: a,
    detail: 1,
    shiftKey: s.shiftKey,
    altKey: s.altKey,
    ctrlKey: s.ctrlKey,
    metaKey: s.metaKey
  }));
}
let Cl = !1;
function yb() {
  if (Cl) return;
  Cl = !0;
  let e = null;
  document.addEventListener("pointerdown", (s) => {
    if (s.pointerType === "mouse" || !s.isPrimary || e !== null) return;
    const a = s.target;
    !a?.closest?.("[data-kc-touch-mouse]") || a.closest(vb) || (s.preventDefault(), e = s.pointerId, Co("mousedown", a, s, 1));
  }, !0), document.addEventListener("pointermove", (s) => {
    s.pointerId === e && Co("mousemove", document.elementFromPoint(s.clientX, s.clientY) ?? document, s, 1);
  }, !0);
  const t = (s) => {
    s.pointerId === e && (e = null, Co("mouseup", document.elementFromPoint(s.clientX, s.clientY) ?? document, s, 0));
  };
  document.addEventListener("pointerup", t, !0), document.addEventListener("pointercancel", t, !0);
}
const Oo = /* @__PURE__ */ new Set();
let _o = 0;
function wb() {
  if (_o > 0) return !0;
  const e = document.activeElement;
  for (const t of Oo)
    if (t.matches(":hover") || e && t.contains(e)) return !0;
  return !1;
}
function Ku(e) {
  return Oo.add(e), Bf(wb), () => Oo.delete(e);
}
const Sb = {
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
function Vb(e) {
  const t = es.getState();
  if (t.resetHotkeys(), e === "blender")
    for (const [s, a] of Object.entries(Sb)) t.setHotkeyBinding(s, a);
}
function Yu(e) {
  return es.getState().hotkeyOverrides[e] ?? Lf[e];
}
const kb = {
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
function Cb(e) {
  const t = Yu(e).split(",")[0].split("+"), s = t.pop(), [a, o] = kb[s] ?? (/^[a-z]$/.test(s) ? [s, `Key${s.toUpperCase()}`] : /^\d$/.test(s) ? [s, `Digit${s}`] : [s, s]), i = /Mac|iPhone|iPad/.test(navigator.platform), c = {
    key: a,
    code: o,
    bubbles: !0,
    cancelable: !0,
    shiftKey: t.includes("shift"),
    altKey: t.includes("alt"),
    ctrlKey: t.includes("ctrl") || t.includes("mod") && !i,
    metaKey: t.includes("meta") || t.includes("mod") && i
  };
  _o++;
  try {
    document.dispatchEvent(new KeyboardEvent("keydown", c)), document.dispatchEvent(new KeyboardEvent("keyup", c));
  } finally {
    _o--;
  }
}
const Mb = {
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
}, Rb = (e) => e.split(",")[0].split("+").map((t) => Mb[t] ?? t.toUpperCase()).join(" "), $t = (e, t, s) => ({ label: e, keys: Rb(Yu(t)), run: () => Cb(t), enabled: s }), da = () => It.getState().selectedItemIds, dn = () => da().length > 0;
function Pb() {
  return ke.getState().tracks.filter((e) => !e.isGroup && e.kind !== "audio").sort((e, t) => e.order - t.order)[0]?.id;
}
function Mo(e, t) {
  const s = Pb();
  if (!s) return;
  const a = ke.getState().fps, o = sr.getState().currentProject, i = Uf({
    template: { type: "timeline-template", itemType: e, label: t, ...e === "shape" ? { shapeType: "rectangle" } : {} },
    placement: {
      trackId: s,
      from: Math.round(ne.getState().currentFrame),
      durationInFrames: oa(a),
      canvasWidth: o?.metadata.width ?? 1920,
      canvasHeight: o?.metadata.height ?? 1080
    }
  });
  ke.getState().addItems([i]), It.getState().selectItems([i.id]);
}
async function Ro(e) {
  const t = await Qt.getState().importMedia();
  let s = Math.round(ne.getState().currentFrame);
  const a = ke.getState().fps;
  for (const o of t ?? [])
    await e(o.id, s), s += Math.max(1, Math.round((o.duration || 3) * a));
}
function Ib(e) {
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
      { label: "All", keys: "A", run: () => It.getState().selectItems(ke.getState().items.map((t) => t.id)) },
      { label: "None", keys: "Alt A", run: () => It.getState().clearSelection() },
      {
        label: "Invert",
        keys: "Ctrl I",
        run: () => {
          const t = new Set(da());
          It.getState().selectItems(ke.getState().items.map((s) => s.id).filter((s) => !t.has(s)));
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
      { label: "Movie...", run: () => Ro(e) },
      { label: "Sound...", run: () => Ro(e) },
      { label: "Image/Sequence...", run: () => Ro(e) },
      "-",
      { label: "Color", run: () => Mo("shape", "Color") },
      { label: "Text", run: () => Mo("text", "Text") },
      { label: "Adjustment Layer", run: () => Mo("adjustment", "Adjustment Layer") }
    ],
    Strip: [
      $t("Split", "SPLIT_AT_PLAYHEAD", dn),
      $t("Join", "JOIN_ITEMS", () => da().length > 1),
      $t("Freeze Frame", "FREEZE_FRAME", dn),
      "-",
      $t("Copy", "COPY", dn),
      $t("Paste", "PASTE"),
      {
        label: "Duplicate",
        keys: "Shift D",
        enabled: dn,
        run: () => {
          const t = ke.getState().items.filter((i) => da().includes(i.id));
          if (!t.length) return;
          const s = Math.max(...t.map((i) => i.from + i.durationInFrames)), a = Math.min(...t.map((i) => i.from)), o = Hf(t.map((i) => i.id), t.map((i) => ({ from: i.from - a + s, trackId: i.trackId })));
          It.getState().selectItems(o.map((i) => i.id));
        }
      },
      "-",
      $t("Delete", "DELETE_SELECTED", dn),
      $t("Ripple Delete", "RIPPLE_DELETE", dn),
      "-",
      $t("Link Audio and Video", "LINK_AUDIO_VIDEO", dn),
      $t("Unlink Audio and Video", "UNLINK_AUDIO_VIDEO", dn)
    ]
  };
}
let Pn = null, Ar = null, Lo = null, Ml, Bo, Ho, qu;
const ga = /* @__PURE__ */ new Set();
function Tb() {
  return Kf(), fb({ onSave: () => {
    Pn && ke.getState().saveTimeline(Pn.project.id);
  } }), null;
}
function Eb() {
  if (Ar) return Ar;
  Ar = document.createElement("div"), Ar.className = "kc-embed kc-embed-portals dark", document.body.append(Ar), au(Ar);
  const e = Rl.createRoot(Ar.appendChild(document.createElement("div")));
  return e.render(
    /* @__PURE__ */ r.jsxs(su, { delayDuration: 300, children: [
      /* @__PURE__ */ r.jsx(Tb, {}),
      /* @__PURE__ */ r.jsx(Bm, {}),
      /* @__PURE__ */ r.jsx(Hm, {})
    ] })
  ), Lo = e, qu = Ku(Ar), Ar;
}
async function Wb(e) {
  Pn = e;
  const t = e.project;
  await Gf(t.id) || await Vf({
    id: t.id,
    name: t.name,
    description: "",
    duration: 0,
    schemaVersion: Ji,
    metadata: { width: t.width, height: t.height, fps: t.fps, backgroundColor: t.backgroundColor },
    createdAt: Date.now(),
    updatedAt: Date.now()
  }), ne.getState().setPreviewFrame(null);
  const s = Qt.getState();
  s.setCurrentProject(t.id), s.loadMediaItems().catch((i) => e.notify?.(`Media library: ${String(i)}`, "error")), sr.getState().setCurrentProject({
    id: t.id,
    name: t.name,
    description: "",
    duration: 0,
    schemaVersion: Ji,
    metadata: { width: t.width, height: t.height, fps: t.fps, backgroundColor: t.backgroundColor },
    createdAt: Date.now(),
    updatedAt: Date.now()
  }), await ke.getState().loadTimeline(t.id, { allowProjectUpgrade: !0 }), Bo?.(), Bo = Wf(), Ml?.(), Ml = Qt.subscribe((i, c) => {
    i.error && i.error !== c.error && Pn?.notify?.(i.error, "error");
  }), Ho?.();
  let a, o = !1;
  Ho = ke.subscribe(() => {
    const i = ke.getState().isDirty;
    if (!i || o) {
      o = i;
      return;
    }
    o = i, clearTimeout(a), a = setTimeout(() => {
      ke.getState().saveTimeline(t.id).then(() => Pn?.commit?.("Sequencer edit"));
    }, 400);
  });
}
function Ta(e, t, { touchMouse: s = !1 } = {}) {
  Eb(), bb(), s && yb(), e.classList.add("kc-embed", "dark");
  const a = Rl.createRoot(e);
  a.render(
    /* @__PURE__ */ r.jsx(n.StrictMode, { children: /* @__PURE__ */ r.jsx("div", { className: "kc-island", "data-kc-touch-mouse": s || void 0, children: /* @__PURE__ */ r.jsx(Uo, { level: "feature", children: /* @__PURE__ */ r.jsx(su, { delayDuration: 300, children: t }) }) }) })
  ), ga.add(a);
  const o = Ku(e);
  return {
    dispose() {
      o(), ga.delete(a), a.unmount(), e.classList.remove("kc-embed", "dark");
    }
  };
}
function Fb() {
  const e = ke((s) => s.fps), t = Jt((s) => s.maxItemEndFrame);
  return /* @__PURE__ */ r.jsx(hd, { duration: Math.max(t / Math.max(e, 1), 10) });
}
function jb() {
  const e = Pn?.project;
  return e ? /* @__PURE__ */ r.jsx(db, { project: e }) : null;
}
const zb = (e) => Ta(e, /* @__PURE__ */ r.jsx(Fb, {})), $b = (e) => Ta(e, /* @__PURE__ */ r.jsx(jb, {}), { touchMouse: !0 }), Kb = (e) => Ta(e, /* @__PURE__ */ r.jsx(px, { fillContainer: !0 })), Yb = (e) => Ta(e, /* @__PURE__ */ r.jsx(ib, { fillContainer: !0 }));
async function qb(e) {
  return Qt.getState().importHandles(e);
}
async function Nb(e, { frame: t } = {}) {
  const s = Qt.getState().mediaItems.find((S) => S.id === e);
  if (!s) throw new Error(`Unknown media: ${e}`);
  const a = wa(s.mimeType), o = ke.getState(), i = o.fps, c = o.tracks.filter((S) => !S.isGroup).sort((S, y) => S.order - y.order), l = c.find((S) => S.kind !== "audio"), u = c.find((S) => S.kind === "audio"), d = a === "audio" ? u : l;
  if (!d) throw new Error("No track for this media type");
  const f = Math.max(0, Math.round(t ?? ne.getState().currentFrame)), m = Fl(s, a, i), [b, h] = await Promise.all([
    hn(e),
    a === "audio" ? Promise.resolve(null) : zo.getThumbnailBlobUrl(e)
  ]);
  if (!b) throw new Error(`Media is not readable: ${s.fileName}`);
  const x = sr.getState().currentProject, v = zf({
    media: s,
    mediaId: e,
    mediaType: a,
    label: s.fileName,
    timelineFps: i,
    blobUrl: b,
    thumbnailUrl: h,
    canvasWidth: x?.metadata.width ?? 1920,
    canvasHeight: x?.metadata.height ?? 1080,
    placement: {
      primary: { trackId: d.id, from: f, durationInFrames: m },
      linkedAudio: a === "video" && s.audioCodec && u ? { trackId: u.id, from: f, durationInFrames: m } : void 0
    }
  });
  return o.addItems(v), v.map((S) => S.id);
}
function Xb() {
  return Ib((e, t) => Nb(e, { frame: t }));
}
function Zb() {
  for (const e of [...ga]) e.unmount();
  ga.clear(), Lo?.unmount(), Lo = null, qu?.(), Ar?.remove(), Ar = null, au(void 0), Bo?.(), Ho?.(), ne.getState().pause(), $f(), Pn = null;
}
export {
  Sb as BLENDER_KEYMAP,
  Nb as addMediaStrip,
  Zb as disposeAll,
  qb as importMedia,
  Xb as menus,
  Kb as mountMedia,
  $b as mountPreview,
  zb as mountSequencer,
  Yb as mountStripProperties,
  Wb as openProject,
  ev as setIconBase,
  Vb as setKeymap
};
