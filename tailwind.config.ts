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
      },
      fontFamily: {
        serif: ["var(--font-serif)", '"Instrument Serif"', "serif"],
        sans:  ["var(--font-sans)", '"Inter"', "system-ui", "sans-serif"],
        mono:  ["var(--font-mono)", '"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "display":       "-0.04em",
        "display-tight": "-0.06em",
        "label":          "0.12em",
      },
    },
  },
} satisfies Config;
