import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      colors: {
        ink: {
          DEFAULT: "oklch(0.18 0.005 80)",
          deep:    "oklch(0.12 0.005 80)",
        },
        paper: {
          DEFAULT: "oklch(0.96 0.005 80)",
          dim:     "oklch(0.88 0.005 80)",
        },
        muted:  "oklch(0.60 0.005 80)",
        copper: {
          DEFAULT: "oklch(0.72 0.16 55)",
          dim:     "oklch(0.55 0.12 55)",
        },
        // v2 palette — lives alongside the dark tokens until every page is migrated
        brand:    "#6514E8",
        charcoal: "#1E1E1E",
        lilac:    "#EEE3FF",
        glow:     "#C17EFF", // design uses it at 50% alpha → bg-glow/50
        mist:     "#FBF9FF", // light lavender section background
      },
      fontFamily: {
        serif: ["var(--font-serif)", '"Instrument Serif"', "serif"],
        sans:  ["var(--font-sans)", '"Inter"', "system-ui", "sans-serif"],
        mono:  ["var(--font-mono)", '"JetBrains Mono"', "ui-monospace", "monospace"],
        // v2 fonts
        heading: ["var(--font-heading)", '"Hanken Grotesk"', "system-ui", "sans-serif"],
        body:    ["var(--font-body)", '"Poppins"', "system-ui", "sans-serif"],
        signature: ['"Designer Signature"', "cursive"],
      },
      letterSpacing: {
        "display":       "-0.04em",
        "display-tight": "-0.06em",
        "label":          "0.12em",
      },
      keyframes: {
        "nav-in": {
          from: { opacity: "0", transform: "translateY(-100%)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "rise-in": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "line-up": {
          from: { transform: "translateY(105%)" },
          to:   { transform: "translateY(0)" },
        },
        "portrait-in": {
          from: { opacity: "0", transform: "translateY(8%)", filter: "blur(10px)" },
          to:   { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        "glow-drift": {
          from: { transform: "translate(0, 0) scale(1)" },
          to:   { transform: "translate(6%, -8%) scale(1.15)" },
        },
      },
      animation: {
        "nav-in": "nav-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "rise-in": "rise-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "line-up": "line-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "portrait-in": "portrait-in 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "glow-drift": "glow-drift 14s ease-in-out infinite alternate",
      },
    },
  },
} satisfies Config;
