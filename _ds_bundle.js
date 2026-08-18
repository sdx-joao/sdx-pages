/* @ds-bundle: {"format":4,"namespace":"RuaSaturnoDesignSystem_46e477","components":[{"name":"Planet","sourcePath":"components/brand/Planet.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"PhotoCard","sourcePath":"components/media/PhotoCard.jsx"},{"name":"RevealText","sourcePath":"components/motion/RevealText.jsx"},{"name":"StarField","sourcePath":"components/motion/StarField.jsx"}],"sourceHashes":{"components/brand/Planet.jsx":"a40c573254fe","components/core/Badge.jsx":"3fbc867dd18c","components/core/Button.jsx":"233b16d6d474","components/media/PhotoCard.jsx":"b08b8c8e3291","components/motion/RevealText.jsx":"17155704356b","components/motion/StarField.jsx":"754862fd753d","ui_kits/site/AddressScene.jsx":"d366ef978b61","ui_kits/site/ClosingScene.jsx":"10369789df41","ui_kits/site/GalleryScene.jsx":"4b195f7345e5","ui_kits/site/HeroScene.jsx":"ea93da2db1ba"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RuaSaturnoDesignSystem_46e477 = window.RuaSaturnoDesignSystem_46e477 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Planet.jsx
try { (() => {
function Planet({
  size = 220,
  tilt = -18,
  style
}) {
  const ringW = size * 1.9;
  const ringH = size * 0.62;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: ringW,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: ringW,
      height: ringH,
      transform: `translate(-50%,-50%) rotate(${tilt}deg)`,
      borderRadius: "50%",
      border: `${Math.max(6, size * 0.045)}px solid var(--marigold)`,
      opacity: 0.55,
      boxShadow: "0 0 30px rgba(244,169,76,0.25)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: size,
      height: size,
      transform: "translate(-50%,-50%)",
      borderRadius: "50%",
      background: "radial-gradient(circle at 32% 30%, var(--starlight), var(--marigold) 55%, var(--rose-dim) 100%)",
      boxShadow: "var(--shadow-glow), inset -14px -10px 30px rgba(0,0,0,0.35)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: ringW,
      height: ringH,
      transform: `translate(-50%,-50%) rotate(${tilt}deg)`,
      borderRadius: "50%",
      borderTop: `${Math.max(6, size * 0.045)}px solid var(--rose)`,
      borderBottom: "none",
      borderLeft: "none",
      borderRight: "none",
      clipPath: "inset(0 0 55% 0)",
      opacity: 0.9
    }
  }));
}
Object.assign(__ds_scope, { Planet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Planet.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = "marigold",
  children
}) {
  const tones = {
    marigold: {
      background: "rgba(244,169,76,0.16)",
      color: "var(--marigold)",
      border: "1px solid rgba(244,169,76,0.4)"
    },
    rose: {
      background: "rgba(232,116,138,0.16)",
      color: "var(--rose)",
      border: "1px solid rgba(232,116,138,0.4)"
    },
    cream: {
      background: "rgba(253,246,236,0.08)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-subtle)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 16px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  disabled,
  style
}) {
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: size === "sm" ? "var(--size-xs)" : "var(--size-sm)",
    letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase",
    border: "1px solid transparent",
    borderRadius: "var(--radius-pill)",
    padding: size === "sm" ? "10px 20px" : "14px 30px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "transform var(--duration-fast) var(--ease-standard), background var(--duration-fast), box-shadow var(--duration-fast)",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px"
  };
  const variants = {
    primary: {
      background: "var(--gradient-warm)",
      color: "var(--night-1)",
      boxShadow: "var(--shadow-glow)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      borderColor: "var(--border-strong)"
    },
    text: {
      background: "transparent",
      color: "var(--accent-primary)",
      padding: "4px 2px",
      borderRadius: 0
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.transform = "translateY(-2px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = "translateY(-2px)";
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoCard.jsx
try { (() => {
const {
  useState
} = React;
function PhotoCard({
  src,
  alt = "",
  caption,
  tag,
  tone = "marigold",
  rotate = 0
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("figure", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      background: "var(--bg-surface)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-2)",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-md)",
      transform: `rotate(${rotate}deg) translateY(${hover ? -6 : 0}px)`,
      transition: "transform var(--duration-base) var(--ease-soft), box-shadow var(--duration-base)",
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      aspectRatio: "4/5"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), (caption || tag) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "var(--space-3) var(--space-2) var(--space-1)"
    }
  }, tag && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      marginBottom: 6,
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      fontSize: "var(--size-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: tone === "rose" ? "var(--rose)" : "var(--marigold)",
      background: tone === "rose" ? "rgba(232,116,138,0.16)" : "rgba(244,169,76,0.16)"
    }
  }, tag), caption && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-small)",
      color: "var(--text-primary)",
      margin: 0
    }
  }, caption)));
}
Object.assign(__ds_scope, { PhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoCard.jsx", error: String((e && e.message) || e) }); }

// components/motion/RevealText.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
function RevealText({
  text,
  as = "p",
  style,
  speed = 32,
  startDelay = 0
}) {
  const [shown, setShown] = useState("");
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
        setStarted(true);
        return true;
      }
      return false;
    };
    if (check()) return;
    let obs;
    if (typeof IntersectionObserver !== "undefined") {
      obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) setStarted(true);
      }, {
        threshold: 0.1
      });
      obs.observe(el);
    }
    const poll = setInterval(() => {
      if (check()) clearInterval(poll);
    }, 120);
    const stopPolling = setTimeout(() => clearInterval(poll), 15000);
    return () => {
      clearInterval(poll);
      clearTimeout(stopPolling);
      if (obs) obs.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const t0 = setTimeout(function tick() {
      i++;
      setShown(text.slice(0, i));
      if (i < text.length) setTimeout(tick, speed);
    }, startDelay);
    return () => clearTimeout(t0);
  }, [started]);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    style: style
  }, shown, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: shown.length < text.length ? 1 : 0,
      display: "inline-block",
      width: "3px",
      height: "1em",
      maxHeight: "28px",
      background: "var(--accent-primary)",
      verticalAlign: "-0.1em",
      marginLeft: "4px"
    }
  }));
}
Object.assign(__ds_scope, { RevealText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/RevealText.jsx", error: String((e && e.message) || e) }); }

// components/motion/StarField.jsx
try { (() => {
const {
  useMemo
} = React;
function StarField({
  density = 80,
  twinkle = true,
  meteors = 0,
  style
}) {
  const stars = useMemo(() => {
    const seeded = [];
    for (let i = 0; i < density; i++) {
      seeded.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.6 + 0.6,
        delay: Math.random() * 6,
        dur: 3 + Math.random() * 4
      });
    }
    return seeded;
  }, [density]);
  const streaks = useMemo(() => {
    const seeded = [];
    for (let i = 0; i < meteors; i++) {
      seeded.push({
        x: Math.random() * 90,
        y: Math.random() * 40,
        delay: Math.random() * 8,
        dur: 1.8 + Math.random() * 1.4
      });
    }
    return seeded;
  }, [meteors]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
      ...style
    }
  }, stars.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: `${s.x}%`,
      top: `${s.y}%`,
      width: s.size,
      height: s.size,
      borderRadius: "50%",
      background: "var(--accent-star)",
      opacity: 0.8,
      animation: twinkle ? `rs-twinkle ${s.dur}s ${s.delay}s ease-in-out infinite` : "none"
    }
  })), streaks.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: "m" + i,
    style: {
      position: "absolute",
      left: `${m.x}%`,
      top: `${m.y}%`,
      width: 2,
      height: 2,
      borderRadius: "50%",
      background: "var(--cream)",
      boxShadow: "0 0 6px 1px var(--starlight)",
      animation: `rs-meteor ${m.dur}s ${m.delay}s cubic-bezier(.3,.7,.4,1) infinite`
    }
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes rs-twinkle{0%,100%{opacity:.2}50%{opacity:1}}
@keyframes rs-meteor{0%{transform:translate(0,0) scaleX(1);opacity:0}8%{opacity:1}18%{transform:translate(160px,90px) scaleX(3);opacity:0}100%{opacity:0}}`));
}
Object.assign(__ds_scope, { StarField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/StarField.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/AddressScene.jsx
try { (() => {
function AddressScene() {
  const {
    StarField,
    RevealText,
    Badge
  } = window.RuaSaturnoDesignSystem_46e477;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "var(--space-6)",
      overflow: "hidden",
      background: "var(--bg-surface)"
    }
  }, /*#__PURE__*/React.createElement(StarField, {
    density: 50
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "marigold"
  }, "onde ela mora"), /*#__PURE__*/React.createElement(RevealText, {
    as: "h2",
    text: "Rua Saturno, 637.",
    speed: 44,
    style: {
      font: "var(--text-h1)",
      color: "var(--text-primary)",
      margin: "var(--space-4) 0 var(--space-3)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, "Sim, o nome \xE9 esse mesmo. E n\xE3o, n\xE3o foi coincid\xEAncia escolher esse tema pra essa p\xE1gina."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-7)",
      display: "flex",
      justifyContent: "center",
      gap: "var(--space-5)"
    }
  }, ["Mercúrio", "Vênus", "Terra", "Saturno"].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: i === 3 ? 26 : 12,
      height: i === 3 ? 26 : 12,
      borderRadius: "50%",
      background: i === 3 ? "var(--gradient-warm)" : "var(--bg-inset)",
      boxShadow: i === 3 ? "var(--shadow-glow)" : "none",
      border: i === 3 ? "3px solid var(--night-2)" : "none",
      outline: i === 3 ? "1px solid var(--marigold-dim)" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-2xs,12px)/1 var(--font-body)",
      color: i === 3 ? "var(--marigold)" : "var(--text-secondary)",
      fontSize: 12
    }
  }, p))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/AddressScene.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ClosingScene.jsx
try { (() => {
function ClosingScene() {
  const {
    StarField,
    RevealText,
    Button
  } = window.RuaSaturnoDesignSystem_46e477;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "var(--space-6)",
      overflow: "hidden",
      background: "var(--bg-surface)"
    }
  }, /*#__PURE__*/React.createElement(StarField, {
    density: 110
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(RevealText, {
    as: "h2",
    text: "S\xF3 isso mesmo.",
    speed: 40,
    style: {
      font: "var(--text-h1)",
      color: "var(--text-primary)",
      margin: "0 0 var(--space-3)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body)",
      color: "var(--text-secondary)",
      margin: "0 0 var(--space-7)"
    }
  }, "Um site inteiro s\xF3 pra dizer que a rua onde voc\xEA mora tem nome de planeta e voc\xEA \xE9 melhor que ele. Com carinho, Jo\xE3o Marcos."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setSent(true),
    disabled: sent
  }, sent ? "recebido ✓" : "gostou amanda? me fala aqui"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-small)",
      color: "var(--text-secondary)",
      opacity: 0.6,
      marginTop: "var(--space-6)"
    }
  }, "feito com amor e carinho por Jo\xE3o Marcos (kim cardmaster)")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ClosingScene.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/GalleryScene.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const photos = [{
  src: "../../assets/photos/amanda-01-varanda.jpg",
  tag: "atenta",
  tone: "marigold",
  rotate: -3,
  caption: "Aquele jeito de olhar sério que na verdade é só concentração."
}, {
  src: "../../assets/photos/amanda-02-parede.jpg",
  tag: "leveza",
  tone: "rose",
  rotate: 2,
  caption: "Qualquer luz vira boa foto quando é ela."
}, {
  src: "../../assets/photos/amanda-03-mcdonalds.jpg",
  tag: "esforçada",
  tone: "marigold",
  rotate: -2,
  caption: "De boné do McDonald's e ainda assim linda. Talento raro."
}, {
  src: "../../assets/photos/amanda-06-drink-b.jpg",
  tag: "curte a vida",
  tone: "rose",
  rotate: 3,
  caption: "Sabe aproveitar um fim de tarde como poucas."
}, {
  src: "../../assets/photos/amanda-07-chocolates.jpg",
  tag: "doce",
  tone: "marigold",
  rotate: -1,
  caption: "Combina mais com a vitrine de chocolates do que ela imagina."
}, {
  src: "../../assets/photos/amanda-04-rio.jpg",
  tag: "aventura",
  tone: "rose",
  rotate: 1,
  caption: "Rio de Janeiro, um dos dias bons da lista."
}];
function GalleryScene() {
  const {
    RevealText,
    PhotoCard,
    Badge
  } = window.RuaSaturnoDesignSystem_46e477;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: "100vh",
      padding: "var(--space-9) var(--space-6)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(RevealText, {
    as: "h2",
    text: "Olha como ela \xE9.",
    speed: 40,
    style: {
      font: "var(--text-h1)",
      color: "var(--text-primary)",
      margin: "0 0 var(--space-8)",
      textAlign: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-6)",
      justifyContent: "center",
      maxWidth: "var(--container-max)"
    }
  }, photos.map(p => /*#__PURE__*/React.createElement(PhotoCard, _extends({
    key: p.src
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      textAlign: "center",
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cream"
  }, "curiosidade"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body)",
      color: "var(--text-secondary)",
      margin: "var(--space-3) 0 0"
    }
  }, "E, sim, a main dela em League of Legends \xE9 a Soraka \u2014 a curandeira que manda estrela do c\xE9u. Combinou direto com o tema.")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/GalleryScene.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HeroScene.jsx
try { (() => {
function HeroScene() {
  const {
    StarField,
    RevealText,
    Planet
  } = window.RuaSaturnoDesignSystem_46e477;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "var(--space-6)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(StarField, {
    density: 140,
    meteors: 5
  }), /*#__PURE__*/React.createElement(Planet, {
    size: 200,
    tilt: -16,
    style: {
      position: "absolute",
      top: "4%",
      right: "3%",
      opacity: 0.5,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(RevealText, {
    as: "h1",
    text: "Oi.",
    speed: 90,
    style: {
      font: "var(--text-display)",
      color: "var(--text-primary)",
      margin: 0
    }
  }), /*#__PURE__*/React.createElement(RevealText, {
    as: "h2",
    text: "Essa \xE9 a Amanda Lohany.",
    speed: 38,
    startDelay: 900,
    style: {
      font: "var(--text-h1)",
      color: "var(--text-secondary)",
      margin: "var(--space-3) 0 0"
    }
  }), /*#__PURE__*/React.createElement(RevealText, {
    as: "p",
    text: "Desde que eu, Jo\xE3o Marcos, a vi, meu mundo mudou.",
    speed: 34,
    startDelay: 1800,
    style: {
      font: "var(--text-body)",
      color: "var(--text-secondary)",
      opacity: 0.85,
      margin: "var(--space-4) 0 0"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body)",
      color: "var(--text-secondary)",
      opacity: 0.75,
      marginTop: "var(--space-6)"
    }
  }, "role pra baixo \u2193")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HeroScene.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Planet = __ds_scope.Planet;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PhotoCard = __ds_scope.PhotoCard;

__ds_ns.RevealText = __ds_scope.RevealText;

__ds_ns.StarField = __ds_scope.StarField;

})();
