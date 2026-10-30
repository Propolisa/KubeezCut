import { dU as A, dV as ne, B as W, d5 as Pe, d6 as Re, d7 as Me, d8 as Se, d9 as Le, dW as Te, dX as pe, cy as me, cx as he, bK as ve, dY as $e, b as ee, dZ as ye, d_ as je, d$ as De, e0 as Ge, cM as We, dN as Ae, e1 as Ke, a8 as Ie } from "./feature-editing-core-PcYBNJHk.js";
import "./gif-processing-CfWcW1Gl.js";
import { r as a, j as e, b as ze } from "./react-vendor-18pR7s9b.js";
import { am as Ve } from "./vendor-icons-Ce83X_M4.js";
const se = [
  {
    id: "vintage",
    name: "Vintage",
    effects: [
      { type: "gpu-effect", gpuEffectType: "gpu-sepia", params: { amount: 0.4 } },
      { type: "gpu-effect", gpuEffectType: "gpu-contrast", params: { amount: 1.1 } },
      { type: "gpu-effect", gpuEffectType: "gpu-brightness", params: { amount: -0.1 } }
    ]
  },
  {
    id: "noir",
    name: "Noir",
    effects: [
      { type: "gpu-effect", gpuEffectType: "gpu-grayscale", params: { amount: 1 } },
      { type: "gpu-effect", gpuEffectType: "gpu-contrast", params: { amount: 1.3 } }
    ]
  },
  {
    id: "cold",
    name: "Cold",
    effects: [
      { type: "gpu-effect", gpuEffectType: "gpu-hue-shift", params: { shift: 0.5 } },
      { type: "gpu-effect", gpuEffectType: "gpu-saturation", params: { amount: 0.8 } }
    ]
  },
  {
    id: "warm",
    name: "Warm",
    effects: [
      { type: "gpu-effect", gpuEffectType: "gpu-sepia", params: { amount: 0.2 } },
      { type: "gpu-effect", gpuEffectType: "gpu-saturation", params: { amount: 1.2 } }
    ]
  },
  {
    id: "dramatic",
    name: "Dramatic",
    effects: [
      { type: "gpu-effect", gpuEffectType: "gpu-contrast", params: { amount: 1.5 } },
      { type: "gpu-effect", gpuEffectType: "gpu-saturation", params: { amount: 1.3 } }
    ]
  },
  {
    id: "faded",
    name: "Faded",
    effects: [
      { type: "gpu-effect", gpuEffectType: "gpu-contrast", params: { amount: 0.8 } },
      { type: "gpu-effect", gpuEffectType: "gpu-brightness", params: { amount: 0.1 } },
      { type: "gpu-effect", gpuEffectType: "gpu-saturation", params: { amount: 0.7 } }
    ]
  }
];
function ge({
  effectId: i,
  enabled: t,
  isDefault: o,
  onReset: d,
  onToggle: f,
  onRemove: r
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      W,
      {
        variant: "ghost",
        size: "icon",
        className: `h-6 w-6 flex-shrink-0 ${o ? "opacity-30" : ""}`,
        onClick: () => d(i),
        title: "Reset to defaults",
        disabled: o,
        children: /* @__PURE__ */ e.jsx(pe, { className: "w-3 h-3" })
      }
    ),
    /* @__PURE__ */ e.jsx(
      W,
      {
        variant: "ghost",
        size: "icon",
        className: "h-6 w-6 flex-shrink-0",
        onClick: () => f(i),
        title: t ? "Disable effect" : "Enable effect",
        children: t ? /* @__PURE__ */ e.jsx(me, { className: "w-3 h-3" }) : /* @__PURE__ */ e.jsx(he, { className: "w-3 h-3 text-muted-foreground" })
      }
    ),
    /* @__PURE__ */ e.jsx(
      W,
      {
        variant: "ghost",
        size: "icon",
        className: "h-6 w-6 flex-shrink-0",
        onClick: () => r(i),
        title: "Remove effect",
        children: /* @__PURE__ */ e.jsx(ve, { className: "w-3 h-3" })
      }
    )
  ] });
}
const Oe = a.memo(function({
  effect: t,
  gpuEffect: o,
  definition: d,
  onParamChange: f,
  onParamLiveChange: r,
  onReset: p,
  onToggle: m,
  onRemove: h
}) {
  const w = Object.entries(d.params), n = w.every(
    ([l, x]) => o.params[l] === x.default
  );
  if (w.length === 1 && w[0][1].type === "number") {
    const [l, x] = w[0], C = o.params[l] ?? x.default;
    return /* @__PURE__ */ e.jsx(A, { label: d.name, children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 min-w-0 w-full", children: [
      /* @__PURE__ */ e.jsx(
        ne,
        {
          value: C,
          onChange: (S) => f(t.id, l, S),
          onLiveChange: (S) => r(t.id, l, S),
          min: x.min ?? 0,
          max: x.max ?? 1,
          step: x.step ?? 0.01,
          disabled: !t.enabled,
          className: "flex-1 min-w-0"
        }
      ),
      /* @__PURE__ */ e.jsx(
        ge,
        {
          effectId: t.id,
          enabled: t.enabled,
          isDefault: n,
          onReset: p,
          onToggle: m,
          onRemove: h
        }
      )
    ] }) });
  }
  return w.length === 0 ? /* @__PURE__ */ e.jsx(A, { label: d.name, children: /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-1 min-w-0 w-full justify-end", children: /* @__PURE__ */ e.jsx(
    ge,
    {
      effectId: t.id,
      enabled: t.enabled,
      isDefault: n,
      onReset: p,
      onToggle: m,
      onRemove: h
    }
  ) }) }) : /* @__PURE__ */ e.jsxs("div", { className: "space-y-0", children: [
    /* @__PURE__ */ e.jsx(A, { label: d.name, children: /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-1 min-w-0 w-full justify-end", children: /* @__PURE__ */ e.jsx(
      ge,
      {
        effectId: t.id,
        enabled: t.enabled,
        isDefault: n,
        onReset: p,
        onToggle: m,
        onRemove: h
      }
    ) }) }),
    w.map(([l, x]) => {
      const C = o.params[l] ?? x.default;
      if (!(x.visibleWhen?.(o.params) ?? !0)) return null;
      const M = t.enabled;
      return x.type === "number" ? /* @__PURE__ */ e.jsx(
        A,
        {
          label: x.label,
          className: M ? void 0 : "opacity-50",
          children: /* @__PURE__ */ e.jsx(
            ne,
            {
              value: C,
              onChange: (g) => f(t.id, l, g),
              onLiveChange: (g) => r(t.id, l, g),
              min: x.min ?? 0,
              max: x.max ?? 1,
              step: x.step ?? 0.01,
              disabled: !M,
              className: "flex-1 min-w-0"
            }
          )
        },
        l
      ) : x.type === "boolean" ? /* @__PURE__ */ e.jsx(
        A,
        {
          label: x.label,
          className: M ? void 0 : "opacity-50",
          children: /* @__PURE__ */ e.jsx(
            W,
            {
              variant: C ? "default" : "outline",
              size: "sm",
              className: "h-6 text-xs",
              onClick: () => f(t.id, l, !C),
              disabled: !M,
              children: C ? "On" : "Off"
            }
          )
        },
        l
      ) : x.type === "select" && x.options ? /* @__PURE__ */ e.jsx(
        A,
        {
          label: x.label,
          className: M ? void 0 : "opacity-50",
          children: /* @__PURE__ */ e.jsxs(
            Pe,
            {
              value: C,
              onValueChange: (g) => f(t.id, l, g),
              disabled: !M,
              children: [
                /* @__PURE__ */ e.jsx(Re, { className: "h-6 text-xs flex-1 min-w-0", children: /* @__PURE__ */ e.jsx(Me, {}) }),
                /* @__PURE__ */ e.jsx(Se, { children: x.options.map((g) => /* @__PURE__ */ e.jsx(Le, { value: g.value, children: g.label }, g.value)) })
              ]
            }
          )
        },
        l
      ) : x.type === "color" ? /* @__PURE__ */ e.jsx(
        A,
        {
          label: x.label,
          className: M ? void 0 : "opacity-50",
          children: /* @__PURE__ */ e.jsx(
            Te,
            {
              color: C,
              onChange: (g) => f(t.id, l, g),
              onLiveChange: (g) => r(t.id, l, g),
              disabled: !M
            }
          )
        },
        l
      ) : null;
    })
  ] });
});
function de(i, t, o) {
  return Math.max(t, Math.min(o, i));
}
const Ee = 100, Be = 64, Ye = 4, ue = 4;
function Fe(i, t, o) {
  const d = o.getBoundingClientRect(), f = d.left + d.width / 2, r = d.top + d.height / 2, p = i - f, m = t - r, h = Math.sqrt(p * p + m * m), w = Math.max(1, d.width / 2 - ue - 1), n = de(h / w, 0, 1);
  return { hue: (Math.atan2(m, p) * 180 / Math.PI + 360) % 360, amount: n };
}
const He = a.memo(function({
  label: t,
  hue: o,
  amount: d,
  size: f,
  disabled: r,
  onLiveChange: p,
  onCommit: m,
  onReset: h
}) {
  const w = a.useRef(null), [n, l] = a.useState(!1), [x, C] = a.useState(o), [S, M] = a.useState(de(d, 0, 1));
  a.useEffect(() => {
    n || (C(o), M(de(d, 0, 1)));
  }, [d, n, o]);
  const g = a.useCallback((L) => {
    const G = w.current;
    if (!G) return null;
    const V = Fe(L.clientX, L.clientY, G);
    return C(V.hue), M(V.amount), p(V.hue, V.amount), V;
  }, [p]), b = a.useCallback((L) => {
    if (r) return;
    const G = w.current;
    G && (G.setPointerCapture(L.pointerId), l(!0), g(L));
  }, [r, g]), j = a.useCallback((L) => {
    r || !n || g(L);
  }, [r, n, g]), P = a.useCallback((L) => {
    if (r || !n) return;
    const G = g(L);
    G ? m(G.hue, G.amount) : m(x, S), l(!1);
  }, [r, n, S, x, m, g]), T = a.useCallback(() => {
    n && (m(x, S), l(!1));
  }, [n, S, x, m]), K = f / 2 - ue - 1, z = Math.cos(x * Math.PI / 180) * (K * S), U = Math.sin(x * Math.PI / 180) * (K * S);
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: w,
        type: "button",
        disabled: r,
        "aria-disabled": r,
        className: `relative rounded-full border border-border/70 ${r ? "opacity-60 cursor-not-allowed" : "cursor-crosshair"}`,
        style: {
          width: `${f}px`,
          height: `${f}px`,
          touchAction: "none",
          backgroundImage: "radial-gradient(circle at center, hsl(0 0% 18%) 0%, hsl(0 0% 10%) 26%, transparent 28%), conic-gradient(from 0deg, #ff3b30, #ff9500, #ffcc00, #34c759, #00c7be, #007aff, #5856d6, #ff2d55, #ff3b30)"
        },
        onPointerDown: b,
        onPointerMove: j,
        onPointerUp: P,
        onPointerCancel: T,
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute rounded-full border border-black/60 shadow-sm",
            style: {
              width: `${ue * 2}px`,
              height: `${ue * 2}px`,
              background: "#f8fafc",
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${z}px, ${U}px)`
            }
          }
        )
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "text-[10px] text-muted-foreground", children: t }),
    /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono", children: [
      Math.round(x),
      "° • ",
      Math.round(S * 100),
      "%"
    ] }),
    /* @__PURE__ */ e.jsx(
      W,
      {
        variant: "ghost",
        size: "icon",
        className: "h-5 w-5",
        onClick: h,
        disabled: r,
        title: `Reset ${t}`,
        children: /* @__PURE__ */ e.jsx(pe, { className: "w-3 h-3" })
      }
    )
  ] });
}), _e = [
  { label: "Shadows", hueKey: "shadowsHue", amountKey: "shadowsAmount" },
  { label: "Midtones", hueKey: "midtonesHue", amountKey: "midtonesAmount" },
  { label: "Highlights", hueKey: "highlightsHue", amountKey: "highlightsAmount" }
], Ue = ["temperature", "tint", "saturation"], qe = a.memo(function({
  effect: t,
  gpuEffect: o,
  definition: d,
  onParamChange: f,
  onParamLiveChange: r,
  onParamsBatchChange: p,
  onParamsBatchLiveChange: m,
  onReset: h,
  onToggle: w,
  onRemove: n
}) {
  const l = a.useRef(null), [x, C] = a.useState(Ee), M = Object.entries(d.params).every(
    ([b, j]) => o.params[b] === j.default
  );
  a.useEffect(() => {
    const b = l.current;
    if (!b) return;
    const j = () => {
      const K = (b.clientWidth - Ye * 2) / 3;
      C(de(Math.floor(K), Be, Ee));
    };
    if (j(), typeof ResizeObserver > "u") return;
    const P = new ResizeObserver(() => j());
    return P.observe(b), () => P.disconnect();
  }, []);
  const g = "[&>span]:w-[84px] [&>span]:min-w-[84px]";
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-0", children: [
    /* @__PURE__ */ e.jsx(A, { label: d.name, children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 min-w-0 w-full justify-end", children: [
      /* @__PURE__ */ e.jsx(
        W,
        {
          variant: "ghost",
          size: "icon",
          className: `h-6 w-6 flex-shrink-0 ${M ? "opacity-30" : ""}`,
          onClick: () => h(t.id),
          title: "Reset to defaults",
          disabled: M,
          children: /* @__PURE__ */ e.jsx(pe, { className: "w-3 h-3" })
        }
      ),
      /* @__PURE__ */ e.jsx(
        W,
        {
          variant: "ghost",
          size: "icon",
          className: "h-6 w-6 flex-shrink-0",
          onClick: () => w(t.id),
          title: t.enabled ? "Disable effect" : "Enable effect",
          children: t.enabled ? /* @__PURE__ */ e.jsx(me, { className: "w-3 h-3" }) : /* @__PURE__ */ e.jsx(he, { className: "w-3 h-3 text-muted-foreground" })
        }
      ),
      /* @__PURE__ */ e.jsx(
        W,
        {
          variant: "ghost",
          size: "icon",
          className: "h-6 w-6 flex-shrink-0",
          onClick: () => n(t.id),
          title: "Remove effect",
          children: /* @__PURE__ */ e.jsx(ve, { className: "w-3 h-3" })
        }
      )
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "px-2 pb-2", children: /* @__PURE__ */ e.jsx("div", { ref: l, className: "grid grid-cols-3 gap-1", children: _e.map((b) => /* @__PURE__ */ e.jsx(
      He,
      {
        label: b.label,
        hue: o.params[b.hueKey] ?? 0,
        amount: o.params[b.amountKey] ?? 0,
        size: x,
        disabled: !t.enabled,
        onLiveChange: (j, P) => {
          m(t.id, {
            [b.hueKey]: j,
            [b.amountKey]: P
          });
        },
        onCommit: (j, P) => {
          p(t.id, {
            [b.hueKey]: j,
            [b.amountKey]: P
          });
        },
        onReset: () => {
          p(t.id, {
            [b.hueKey]: 0,
            [b.amountKey]: 0
          });
        }
      },
      b.label
    )) }) }),
    Ue.map((b) => {
      const j = d.params[b];
      if (!j) return null;
      const P = o.params[b] ?? j.default;
      return /* @__PURE__ */ e.jsx(A, { label: j.label, className: g, children: /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-1 min-w-0 w-full", children: /* @__PURE__ */ e.jsx(
        ne,
        {
          value: P,
          onChange: (T) => f(t.id, b, T),
          onLiveChange: (T) => r(t.id, b, T),
          min: j.min ?? -100,
          max: j.max ?? 100,
          step: j.step ?? 1,
          disabled: !t.enabled,
          className: "flex-1 min-w-0"
        }
      ) }) }, b);
    })
  ] });
});
function X(i, t, o) {
  return Math.max(t, Math.min(o, i));
}
const D = 230, fe = 64;
function Xe(i, t) {
  const o = 1 - i;
  return i + o * o * t * 0.5;
}
function Ze(i, t) {
  const o = 4 * i * (1 - i);
  return i + o * t * 0.25;
}
function Qe(i, t) {
  return i + i * i * t * 0.5;
}
function Je(i, t) {
  return (i - 0.5) * (1 + t) + 0.5;
}
function xe(i, t, o, d, f) {
  let r = i;
  return r = Xe(r, t / 100), r = Ze(r, o / 100), r = Qe(r, d / 100), r = Je(r, f / 100), X(r, 0, 1);
}
function et(i, t, o, d, f) {
  const r = [];
  for (let p = 0; p <= fe; p++) {
    const m = p / fe, h = xe(m, i, t, o, d), w = m * f, n = (1 - h) * f;
    r.push(`${w.toFixed(1)} ${n.toFixed(1)}`);
  }
  return `M ${r.join(" L ")}`;
}
function be(i, t, o, d, f, r) {
  const p = [];
  for (let m = 0; m <= fe; m++) {
    const h = m / fe, w = X(xe(h, i, t, o, d) + f, 0, 1), n = h * r, l = (1 - w) * r;
    p.push(`${n.toFixed(1)} ${l.toFixed(1)}`);
  }
  return `M ${p.join(" L ")}`;
}
function Ce(i, t, o, d) {
  let f = -100, r = 100;
  for (let p = 0; p < 30; p++) {
    const m = (f + r) / 2, h = { ...d, [o]: m };
    xe(i, h.shadows, h.midtones, h.highlights, h.contrast) < t ? f = m : r = m;
  }
  return Math.round((f + r) / 2);
}
const Ne = [
  { key: "master", label: "Master", color: "#e5e7eb" },
  { key: "red", label: "Red", color: "#ef4444" },
  { key: "green", label: "Green", color: "#22c55e" },
  { key: "blue", label: "Blue", color: "#3b82f6" }
], tt = [
  { paramKey: "shadows", inputX: 0.25 },
  { paramKey: "midtones", inputX: 0.5 },
  { paramKey: "highlights", inputX: 0.75 }
];
function ke(i) {
  return {
    shadows: i.params.shadows ?? 0,
    midtones: i.params.midtones ?? 0,
    highlights: i.params.highlights ?? 0,
    contrast: i.params.contrast ?? 0,
    red: i.params.red ?? 0,
    green: i.params.green ?? 0,
    blue: i.params.blue ?? 0
  };
}
const st = a.memo(function({
  effect: t,
  gpuEffect: o,
  definition: d,
  onParamChange: f,
  onParamLiveChange: r,
  onReset: p,
  onToggle: m,
  onRemove: h
}) {
  const w = a.useRef(null), [n, l] = a.useState("master"), [x, C] = a.useState(!1), [S, M] = a.useState(() => ke(o));
  a.useEffect(() => {
    x || M(ke(o));
  }, [o, x]);
  const { shadows: g, midtones: b, highlights: j, contrast: P, red: T, green: K, blue: z } = S, U = a.useRef(null), L = a.useRef(null), V = Object.entries(d.params).every(
    ([c, v]) => o.params[c] === v.default
  ), Z = a.useMemo(
    () => et(g, b, j, P, D),
    [g, b, j, P]
  ), Y = a.useMemo(
    () => be(g, b, j, P, T / 200, D),
    [g, b, j, P, T]
  ), Q = a.useMemo(
    () => be(g, b, j, P, K / 200, D),
    [g, b, j, P, K]
  ), O = a.useMemo(
    () => be(g, b, j, P, z / 200, D),
    [g, b, j, P, z]
  ), J = a.useMemo(
    () => tt.map(({ paramKey: c, inputX: v }) => ({
      paramKey: c,
      inputX: v,
      outputY: xe(v, g, b, j, P)
    })),
    [g, b, j, P]
  ), F = a.useCallback((c) => {
    const v = w.current;
    if (!v) return null;
    const E = v.getBoundingClientRect();
    return E.height <= 0 ? null : X(1 - (c - E.top) / E.height, 0, 1);
  }, []);
  a.useEffect(() => {
    const c = (E) => {
      const k = U.current;
      if (!k) return;
      const s = F(E.clientY);
      if (s === null) return;
      const u = X(
        Ce(k.inputX, s, k.paramKey, { shadows: g, midtones: b, highlights: j, contrast: P }),
        -100,
        100
      );
      M((y) => ({ ...y, [k.paramKey]: u })), r(t.id, k.paramKey, u);
    }, v = (E) => {
      const k = U.current;
      if (!k) return;
      const s = F(E.clientY);
      if (s !== null) {
        const u = X(
          Ce(k.inputX, s, k.paramKey, { shadows: g, midtones: b, highlights: j, contrast: P }),
          -100,
          100
        );
        f(t.id, k.paramKey, u);
      }
      U.current = null, C(!1);
    };
    return window.addEventListener("mousemove", c), window.addEventListener("mouseup", v), () => {
      window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", v);
    };
  }, [g, b, j, P, t.id, F, f, r]);
  const ae = a.useCallback(
    (c, v, E) => {
      t.enabled && (c.preventDefault(), c.stopPropagation(), U.current = { paramKey: v, inputX: E }, C(!0));
    },
    [t.enabled]
  );
  a.useEffect(() => {
    const c = (E) => {
      const k = L.current;
      if (!k) return;
      const s = w.current;
      if (!s) return;
      const u = s.getBoundingClientRect(), y = E.clientY - u.top, R = (k.startY - y) / u.height * 200, $ = X(Math.round(k.startValue + R), -100, 100);
      M((I) => ({ ...I, [k.channel]: $ })), r(t.id, k.channel, $);
    }, v = (E) => {
      const k = L.current;
      if (!k) return;
      const s = w.current;
      if (!s) return;
      const u = s.getBoundingClientRect(), y = E.clientY - u.top, R = (k.startY - y) / u.height * 200, $ = X(Math.round(k.startValue + R), -100, 100);
      f(t.id, k.channel, $), L.current = null, C(!1);
    };
    return window.addEventListener("mousemove", c), window.addEventListener("mouseup", v), () => {
      window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", v);
    };
  }, [t.id, f, r]);
  const re = a.useCallback(
    (c, v) => {
      if (!t.enabled || n === "master") return;
      c.preventDefault(), c.stopPropagation();
      const E = w.current;
      if (!E) return;
      const k = E.getBoundingClientRect(), s = c.clientY - k.top, u = v === "red" ? T : v === "green" ? K : z;
      L.current = { channel: v, startY: s, startValue: u }, C(!0);
    },
    [t.enabled, n, T, K, z]
  ), oe = a.useCallback(
    (c, v) => {
      M((E) => ({ ...E, [c]: v })), r(t.id, c, v);
    },
    [t.id, r]
  ), le = Ne.find((c) => c.key === n), ce = n === "master" ? Z : n === "red" ? Y : n === "green" ? Q : O;
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-0", children: [
    /* @__PURE__ */ e.jsx(A, { label: d.name, children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 min-w-0 w-full justify-end", children: [
      /* @__PURE__ */ e.jsx(
        W,
        {
          variant: "ghost",
          size: "icon",
          className: `h-6 w-6 flex-shrink-0 ${V ? "opacity-30" : ""}`,
          onClick: () => p(t.id),
          title: "Reset to defaults",
          disabled: V,
          children: /* @__PURE__ */ e.jsx(pe, { className: "w-3 h-3" })
        }
      ),
      /* @__PURE__ */ e.jsx(
        W,
        {
          variant: "ghost",
          size: "icon",
          className: "h-6 w-6 flex-shrink-0",
          onClick: () => m(t.id),
          title: t.enabled ? "Disable effect" : "Enable effect",
          children: t.enabled ? /* @__PURE__ */ e.jsx(me, { className: "w-3 h-3" }) : /* @__PURE__ */ e.jsx(he, { className: "w-3 h-3 text-muted-foreground" })
        }
      ),
      /* @__PURE__ */ e.jsx(
        W,
        {
          variant: "ghost",
          size: "icon",
          className: "h-6 w-6 flex-shrink-0",
          onClick: () => h(t.id),
          title: "Remove effect",
          children: /* @__PURE__ */ e.jsx(ve, { className: "w-3 h-3" })
        }
      )
    ] }) }),
    /* @__PURE__ */ e.jsx(A, { label: "Channel", children: /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-1 flex-wrap", children: Ne.map((c) => /* @__PURE__ */ e.jsx(
      W,
      {
        variant: n === c.key ? "secondary" : "outline",
        size: "sm",
        className: "h-7 px-2 text-xs",
        onClick: () => l(c.key),
        children: c.label
      },
      c.key
    )) }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "px-2", children: [
      /* @__PURE__ */ e.jsx("div", { className: "relative rounded border border-border/70 bg-black/50 overflow-hidden", children: /* @__PURE__ */ e.jsxs(
        "svg",
        {
          ref: w,
          viewBox: `0 0 ${D} ${D}`,
          className: "w-full aspect-square cursor-default",
          children: [
            [0.25, 0.5, 0.75].map((c) => /* @__PURE__ */ e.jsxs("g", { children: [
              /* @__PURE__ */ e.jsx(
                "line",
                {
                  x1: c * D,
                  y1: 0,
                  x2: c * D,
                  y2: D,
                  stroke: "rgba(148,163,184,0.22)",
                  strokeWidth: 1
                }
              ),
              /* @__PURE__ */ e.jsx(
                "line",
                {
                  x1: 0,
                  y1: c * D,
                  x2: D,
                  y2: c * D,
                  stroke: "rgba(148,163,184,0.22)",
                  strokeWidth: 1
                }
              )
            ] }, c)),
            /* @__PURE__ */ e.jsx(
              "path",
              {
                d: `M 0 ${D} L ${D} 0`,
                stroke: "rgba(148,163,184,0.35)",
                strokeWidth: 1,
                fill: "none",
                strokeDasharray: "4 4"
              }
            ),
            n === "master" && T !== 0 && /* @__PURE__ */ e.jsx("path", { d: Y, stroke: "#ef4444", strokeWidth: 1, fill: "none", opacity: 0.3 }),
            n === "master" && K !== 0 && /* @__PURE__ */ e.jsx("path", { d: Q, stroke: "#22c55e", strokeWidth: 1, fill: "none", opacity: 0.3 }),
            n === "master" && z !== 0 && /* @__PURE__ */ e.jsx("path", { d: O, stroke: "#3b82f6", strokeWidth: 1, fill: "none", opacity: 0.3 }),
            /* @__PURE__ */ e.jsx(
              "path",
              {
                d: ce,
                stroke: le.color,
                strokeWidth: 2,
                fill: "none",
                className: "pointer-events-none"
              }
            ),
            n !== "master" && /* @__PURE__ */ e.jsx(
              "path",
              {
                d: ce,
                stroke: "transparent",
                strokeWidth: 16,
                fill: "none",
                pointerEvents: "stroke",
                className: t.enabled ? "cursor-ns-resize" : "pointer-events-none",
                onMouseDown: (c) => re(c, n)
              }
            ),
            n === "master" && J.map(({ paramKey: c, inputX: v, outputY: E }) => /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: v * D,
                cy: (1 - E) * D,
                r: 5,
                fill: le.color,
                stroke: "rgba(3,7,18,0.95)",
                strokeWidth: 1.5,
                className: t.enabled ? "cursor-ns-resize" : "pointer-events-none",
                onMouseDown: (k) => ae(k, c, v)
              },
              c
            ))
          ]
        }
      ) }),
      n !== "master" && /* @__PURE__ */ e.jsxs("div", { className: "text-[10px] text-muted-foreground text-center mt-1", children: [
        "Drag curve up/down to adjust ",
        n,
        " offset"
      ] })
    ] }),
    n === "master" ? /* @__PURE__ */ e.jsx(e.Fragment, { children: ["shadows", "midtones", "highlights", "contrast"].map((c) => {
      const v = d.params[c];
      return v ? /* @__PURE__ */ e.jsx(A, { label: v.label, children: /* @__PURE__ */ e.jsx(
        ne,
        {
          value: S[c],
          onChange: (E) => f(t.id, c, E),
          onLiveChange: (E) => oe(c, E),
          min: v.min ?? -100,
          max: v.max ?? 100,
          step: v.step ?? 1,
          disabled: !t.enabled,
          className: "flex-1 min-w-0"
        }
      ) }, c) : null;
    }) }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: ["red", "green", "blue"].map((c) => {
      const v = d.params[c];
      return v ? /* @__PURE__ */ e.jsx(A, { label: v.label, children: /* @__PURE__ */ e.jsx(
        ne,
        {
          value: S[c],
          onChange: (E) => f(t.id, c, E),
          onLiveChange: (E) => oe(c, E),
          min: v.min ?? -100,
          max: v.max ?? 100,
          step: v.step ?? 1,
          disabled: !t.enabled,
          className: "flex-1 min-w-0"
        }
      ) }, c) : null;
    }) })
  ] });
}), H = 80, _ = 45, q = /* @__PURE__ */ new Map();
let ie = null, te = null;
async function nt() {
  return ie || te || (te = $e.create(), ie = await te, te = null, ie);
}
function at() {
  const i = new OffscreenCanvas(H, _), t = i.getContext("2d"), o = t.createLinearGradient(0, 0, H, _);
  o.addColorStop(0, "#9b9df5"), o.addColorStop(0.3, "#d45d5d"), o.addColorStop(0.6, "#5b8fbf"), o.addColorStop(1, "#4aab7a"), t.fillStyle = o, t.fillRect(0, 0, H, _);
  const d = t.createRadialGradient(
    H / 2,
    _ / 2,
    _ * 0.3,
    H / 2,
    _ / 2,
    H * 0.7
  );
  return d.addColorStop(0, "rgba(255,255,255,0.1)"), d.addColorStop(1, "rgba(0,0,0,0.25)"), t.fillStyle = d, t.fillRect(0, 0, H, _), i;
}
function rt(i) {
  const t = {};
  for (const [o, d] of Object.entries(i.params))
    if (d.type === "number") {
      const f = d.min ?? 0, r = d.max ?? 1, p = d.default;
      p === f ? t[o] = f + (r - f) * 0.3 : p === r ? t[o] = p : t[o] = p + (r - p) * 0.3;
    } else
      t[o] = d.default;
  return t;
}
async function ot(i, t, o, d) {
  const f = rt(d), r = {
    id: "preview",
    type: o,
    name: d.name,
    enabled: !0,
    params: f
  }, p = i.applyEffectsToCanvas(t, [r]);
  if (!p) return null;
  const m = await createImageBitmap(p), h = new OffscreenCanvas(H, _);
  h.getContext("2d").drawImage(m, 0, 0), m.close();
  const n = await h.convertToBlob({ type: "image/jpeg", quality: 0.85 });
  return URL.createObjectURL(n);
}
async function lt(i, t, o) {
  const d = se.find((n) => n.id === o);
  if (!d) return null;
  const f = d.effects.map((n, l) => ({
    id: `preset-${l}`,
    type: n.gpuEffectType,
    name: n.gpuEffectType,
    enabled: !0,
    params: n.params
  })), r = i.applyEffectsToCanvas(t, f);
  if (!r) return null;
  const p = await createImageBitmap(r), m = new OffscreenCanvas(H, _);
  m.getContext("2d").drawImage(p, 0, 0), p.close();
  const w = await m.convertToBlob({ type: "image/jpeg", quality: 0.85 });
  return URL.createObjectURL(w);
}
function ct(i, t) {
  const [o, d] = a.useState(() => {
    const p = /* @__PURE__ */ new Map();
    for (const { id: m } of i) {
      const h = q.get(m);
      h && p.set(m, h);
    }
    for (const m of t) {
      const h = q.get(`preset:${m}`);
      h && p.set(`preset:${m}`, h);
    }
    return p;
  }), f = a.useRef(!1), r = a.useCallback(() => {
    const p = [
      ...i.map(({ id: h }) => h),
      ...t.map((h) => `preset:${h}`)
    ];
    p.filter((h) => !q.has(h)).length === 0 || f.current || (f.current = !0, (async () => {
      const h = await nt();
      if (!h) {
        f.current = !1;
        return;
      }
      const w = at();
      for (const { id: l, def: x } of i) {
        if (q.has(l)) continue;
        const C = await ot(h, w, l, x);
        C && q.set(l, C);
      }
      for (const l of t) {
        const x = `preset:${l}`;
        if (q.has(x)) continue;
        const C = await lt(h, w, l);
        C && q.set(x, C);
      }
      const n = /* @__PURE__ */ new Map();
      for (const l of p) {
        const x = q.get(l);
        x && n.set(l, x);
      }
      d(n), f.current = !1;
    })());
  }, [i, t]);
  return { previews: o, trigger: r };
}
const pt = a.memo(function({ items: t }) {
  const o = ee((s) => s.addEffect), d = ee((s) => s.addEffects), f = ee((s) => s.updateEffect), r = ee((s) => s.removeEffect), p = ee((s) => s.toggleEffect), m = ye((s) => s.setEffectsPreviewNew), h = ye((s) => s.clearPreview), w = t, n = a.useMemo(() => w.map((s) => s.id), [w]), l = w[0]?.effects ?? [], x = a.useCallback(
    (s) => {
      const u = je(s);
      n.forEach((y) => {
        o(y, {
          type: "gpu-effect",
          gpuEffectType: s,
          params: u
        });
      });
    },
    [n, o]
  ), C = a.useMemo(() => De(), []), S = a.useMemo(
    () => C.flatMap(
      ({ effects: s }) => s.map((u) => ({ id: u.id, def: u }))
    ),
    [C]
  ), M = a.useMemo(() => se.map((s) => s.id), []), { previews: g, trigger: b } = ct(S, M), j = a.useCallback(
    (s, u, y) => {
      const N = l.find(($) => $.id === s);
      if (!N || N.effect.type !== "gpu-effect") return;
      const R = N.effect;
      n.forEach(($) => {
        f($, s, {
          effect: {
            ...R,
            params: { ...R.params, [u]: y }
          }
        });
      }), queueMicrotask(() => h());
    },
    [l, n, f, h]
  ), P = a.useCallback(
    (s, u) => {
      const y = l.find((R) => R.id === s);
      if (!y || y.effect.type !== "gpu-effect") return;
      const N = y.effect;
      n.forEach((R) => {
        f(R, s, {
          effect: {
            ...N,
            params: { ...N.params, ...u }
          }
        });
      }), queueMicrotask(() => h());
    },
    [l, n, f, h]
  ), T = a.useCallback(
    (s, u, y) => {
      const N = l.find(($) => $.id === s);
      if (!N || N.effect.type !== "gpu-effect") return;
      const R = {};
      n.forEach(($) => {
        const I = w.find((B) => B.id === $);
        I && (R[$] = (I.effects ?? []).map((B) => {
          if (B.id !== s || B.effect.type !== "gpu-effect") return B;
          const we = B.effect;
          return {
            ...B,
            effect: {
              ...we,
              params: { ...we.params, [u]: y }
            }
          };
        }));
      }), m(R);
    },
    [l, n, w, m]
  ), K = a.useCallback(
    (s, u) => {
      const y = l.find((R) => R.id === s);
      if (!y || y.effect.type !== "gpu-effect") return;
      const N = {};
      n.forEach((R) => {
        const $ = w.find((I) => I.id === R);
        $ && (N[R] = ($.effects ?? []).map((I) => {
          if (I.id !== s || I.effect.type !== "gpu-effect") return I;
          const B = I.effect;
          return {
            ...I,
            effect: {
              ...B,
              params: { ...B.params, ...u }
            }
          };
        }));
      }), m(N);
    },
    [l, n, w, m]
  ), z = a.useCallback(
    (s) => {
      const u = l.find((R) => R.id === s);
      if (!u || u.effect.type !== "gpu-effect") return;
      const y = u.effect, N = je(y.gpuEffectType);
      n.forEach((R) => {
        f(R, s, {
          effect: { ...y, params: N }
        });
      });
    },
    [l, n, f]
  ), U = a.useCallback(
    (s) => {
      const u = se.find((N) => N.id === s);
      if (!u) return;
      const y = n.map((N) => ({
        itemId: N,
        effects: u.effects
      }));
      d(y);
    },
    [n, d]
  ), L = a.useCallback(
    (s) => {
      n.forEach((u) => p(u, s));
    },
    [n, p]
  ), G = a.useMemo(
    () => l.length > 0 && l.every((s) => s.enabled),
    [l]
  ), V = a.useCallback(() => {
    const s = !G;
    n.forEach((u) => {
      l.forEach((y) => {
        y.enabled !== s && p(u, y.id);
      });
    });
  }, [n, l, G, p]), Z = a.useCallback(
    (s) => {
      n.forEach((u) => r(u, s));
    },
    [n, r]
  ), [Y, Q] = a.useState(!1), [O, J] = a.useState(""), F = a.useRef(null), ae = a.useRef(null), re = a.useRef(null), [oe, le] = a.useState({}), ce = a.useCallback(() => {
    b(), J(""), Q(!0);
  }, [b]), c = a.useCallback(() => {
    Q(!1), J(""), F.current?.blur();
  }, []);
  a.useEffect(() => {
    if (!Y || !F.current) return;
    const s = F.current.getBoundingClientRect();
    le({
      position: "fixed",
      top: `${s.bottom + 4}px`,
      left: `${s.left}px`,
      width: `${s.width}px`
    }), requestAnimationFrame(() => re.current?.focus());
  }, [Y]), a.useEffect(() => {
    if (!Y) return;
    const s = (y) => {
      ae.current?.contains(y.target) || F.current?.contains(y.target) || c();
    }, u = (y) => {
      y.key === "Escape" && c();
    };
    return document.addEventListener("pointerdown", s), document.addEventListener("keydown", u), () => {
      document.removeEventListener("pointerdown", s), document.removeEventListener("keydown", u);
    };
  }, [Y, c]);
  const v = a.useMemo(() => {
    if (!O.trim()) return C;
    const s = O.toLowerCase();
    return C.map(({ category: u, effects: y }) => ({
      category: u,
      effects: y.filter((N) => N.name.toLowerCase().includes(s))
    })).filter(({ effects: u }) => u.length > 0);
  }, [C, O]), E = a.useMemo(() => {
    if (!O.trim()) return se;
    const s = O.toLowerCase();
    return se.filter((u) => u.name.toLowerCase().includes(s));
  }, [O]), k = v.length > 0 || E.length > 0;
  return w.length === 0 ? null : /* @__PURE__ */ e.jsxs(Ge, { title: "Effects", icon: Ve, defaultOpen: !0, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "px-2 pb-2 flex gap-1", children: [
      /* @__PURE__ */ e.jsxs(
        W,
        {
          ref: F,
          variant: "outline",
          size: "sm",
          className: "flex-1 h-7 text-xs",
          onClick: () => Y ? c() : ce(),
          children: [
            /* @__PURE__ */ e.jsx(We, { className: "w-3 h-3 mr-1" }),
            "Add Effect"
          ]
        }
      ),
      Y && ze.createPortal(
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            ref: ae,
            style: oe,
            className: "z-50 rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 slide-in-from-top-2",
            children: [
              /* @__PURE__ */ e.jsx("div", { className: "p-1.5 border-b", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ e.jsx(Ae, { className: "absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    ref: re,
                    type: "text",
                    value: O,
                    onChange: (s) => J(s.target.value),
                    placeholder: "Search effects...",
                    className: "w-full h-7 pl-7 pr-2 text-xs bg-transparent rounded-sm border border-input placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  }
                )
              ] }) }),
              /* @__PURE__ */ e.jsxs("div", { className: "max-h-[280px] overflow-y-auto overflow-x-hidden p-1", children: [
                v.map(({ category: s, effects: u }, y) => /* @__PURE__ */ e.jsxs("div", { children: [
                  y > 0 && /* @__PURE__ */ e.jsx("div", { className: "-mx-1 my-1 h-px bg-muted" }),
                  /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-xs font-medium text-muted-foreground", children: s.charAt(0).toUpperCase() + s.slice(1) }),
                  u.map((N) => /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-xs outline-none hover:bg-accent hover:text-accent-foreground",
                      onClick: () => {
                        x(N.id), c();
                      },
                      children: [
                        g.has(N.id) ? /* @__PURE__ */ e.jsx(
                          "img",
                          {
                            src: g.get(N.id),
                            alt: "",
                            className: "w-8 h-[18px] rounded-sm object-cover flex-shrink-0"
                          }
                        ) : /* @__PURE__ */ e.jsx("span", { className: "w-8 h-[18px] rounded-sm bg-muted flex-shrink-0" }),
                        N.name
                      ]
                    },
                    N.id
                  ))
                ] }, s)),
                E.length > 0 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  v.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "-mx-1 my-1 h-px bg-muted" }),
                  /* @__PURE__ */ e.jsx("div", { className: "px-2 py-1 text-xs font-medium text-muted-foreground", children: "Presets" }),
                  E.map((s) => /* @__PURE__ */ e.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-xs outline-none hover:bg-accent hover:text-accent-foreground",
                      onClick: () => {
                        U(s.id), c();
                      },
                      children: [
                        g.has(`preset:${s.id}`) ? /* @__PURE__ */ e.jsx(
                          "img",
                          {
                            src: g.get(`preset:${s.id}`),
                            alt: "",
                            className: "w-8 h-[18px] rounded-sm object-cover flex-shrink-0"
                          }
                        ) : /* @__PURE__ */ e.jsx("span", { className: "w-8 h-[18px] rounded-sm bg-muted flex-shrink-0" }),
                        s.name
                      ]
                    },
                    s.id
                  ))
                ] }),
                !k && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-4 text-xs text-muted-foreground text-center", children: "No effects found" })
              ] })
            ]
          }
        ),
        Ie() ?? document.body
      ),
      l.length > 0 && /* @__PURE__ */ e.jsx(
        W,
        {
          variant: "outline",
          size: "sm",
          className: "h-7 px-2",
          onClick: V,
          title: G ? "Disable all effects" : "Enable all effects",
          children: G ? /* @__PURE__ */ e.jsx(he, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ e.jsx(me, { className: "w-3.5 h-3.5" })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "space-y-0", children: l.map((s) => {
      if (s.effect.type === "gpu-effect") {
        const u = s.effect, y = Ke(u.gpuEffectType);
        return y ? u.gpuEffectType === "gpu-curves" ? /* @__PURE__ */ e.jsx(
          st,
          {
            effect: s,
            gpuEffect: u,
            definition: y,
            onParamChange: j,
            onParamLiveChange: T,
            onReset: z,
            onToggle: L,
            onRemove: Z
          },
          s.id
        ) : u.gpuEffectType === "gpu-color-wheels" ? /* @__PURE__ */ e.jsx(
          qe,
          {
            effect: s,
            gpuEffect: u,
            definition: y,
            onParamChange: j,
            onParamLiveChange: T,
            onParamsBatchChange: P,
            onParamsBatchLiveChange: K,
            onReset: z,
            onToggle: L,
            onRemove: Z
          },
          s.id
        ) : /* @__PURE__ */ e.jsx(
          Oe,
          {
            effect: s,
            gpuEffect: u,
            definition: y,
            onParamChange: j,
            onParamLiveChange: T,
            onReset: z,
            onToggle: L,
            onRemove: Z
          },
          s.id
        ) : null;
      }
      return null;
    }) }),
    l.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "px-2 py-3 text-xs text-muted-foreground text-center", children: 'No effects applied. Click "Add Effect" to get started.' })
  ] });
});
export {
  se as E,
  pt as a,
  ct as u
};
