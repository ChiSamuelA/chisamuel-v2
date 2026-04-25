# Chi Samuel — Portfolio Design Handoff

> A complete design package for `chisamuel.com` v3. Four pages. One cinematic aesthetic. Ready to be built in **Next.js 15 + Tailwind CSS**.

---

## 📁 What's in this repo

```
.
├── Portfolio Pages.html           # The canonical design — open in a browser
├── Portfolio Directions.html      # 6 initial explorations (reference only)
├── pages/                         # ⭐ THE REAL DESIGN LIVES HERE
│   ├── page-home.jsx              # Home page
│   ├── page-case-study.jsx        # Per-project case study template
│   ├── page-cv.jsx                # CV / resume
│   └── page-contact.jsx           # Contact (portrait lives here)
├── directions/
│   ├── shared.jsx                 # ⭐ DESIGN TOKENS + PROJECT DATA
│   ├── dir-01-editorial.jsx       # Direction explorations (reference)
│   ├── dir-02-terminal.jsx
│   ├── dir-03-cinematic.jsx       # ← the one chosen
│   ├── dir-04-archive.jsx
│   ├── dir-05-brutalist.jsx
│   └── dir-06-warm.jsx
├── lib/
│   └── design-canvas.jsx          # 🚫 Canvas viewer tool — don't port this
└── README.md                      # You are here
```

**When handing this off to Claude Code / Gemini CLI / Cursor:** point them at `pages/*.jsx` and `directions/shared.jsx`. Everything else is reference or tooling.

---

## 🎨 Design system

### Colors (OKLCH)

| Token        | Value                      | Use                                |
|--------------|----------------------------|------------------------------------|
| `INK_DEEP`   | `oklch(0.12 0.005 80)`     | Page background                    |
| `INK`        | `oklch(0.18 0.005 80)`     | Secondary dark / light-mode text   |
| `PAPER`      | `oklch(0.96 0.005 80)`     | Primary text on dark / light bg    |
| `PAPER_DIM`  | `oklch(0.88 0.005 80)`     | Secondary body text on dark        |
| `MUTED`      | `oklch(0.60 0.005 80)`     | Captions, metadata                 |
| `COPPER`     | `oklch(0.72 0.16 55)` ✨    | The only accent color              |
| `COPPER_DIM` | `oklch(0.55 0.12 55)`      | Hovered / pressed copper           |

**Rule:** one accent. Never introduce a second. All warmth comes from the off-whites (`80° hue`).

### Typography

| Role           | Font                | Weights used | Usage                                   |
|----------------|---------------------|--------------|-----------------------------------------|
| **Display**    | `Instrument Serif`  | 400, 400 italic | Headlines, project names, hero        |
| **Body / UI**  | `Inter`             | 200, 300, 400, 500, 700, 900 | Everything else        |
| **Metadata**   | `JetBrains Mono`    | 400, 500     | Labels, numbers, meta, nav, timestamps  |

Google Fonts import (already in the HTML):
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@200;300;400;500;700;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type scale (observed in designs)

- Hero display: 156–176px · line-height 0.92–0.95 · letter-spacing -4 to -5
- Section title serif: 48–72px · letter-spacing -1 to -1.5
- Project name (index): 28–32px serif
- Body: 15–17px sans, line-height 1.55–1.7
- Meta / mono labels: 11px uppercase, letter-spacing 1.5–2
- Numbers / outcome metrics: 56–112px serif

### Spacing & layout

- Page gutter: `56px` (desktop 1440)
- Section separators: `1px solid oklch(0.2 0.005 80)` (subtle)
- Grids: usually `320px | 1fr` for section-label + content, or `1fr 1fr` for two-col, or bento (`2fr 1fr` with row-span)
- Radius: `4–6px` on cards · `50%` on the sphere · nothing in between
- Cards on dark: `background: oklch(0.22 0.005 80); border: 1px solid oklch(0.28 0.005 80)`

---

## ✨ The signature element — the copper sphere

**It is not an image. It's pure CSS.** Reproduce it with:

```css
.sphere {
  width: 820px; height: 820px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%,
    oklch(0.85 0.15 55) 0%,
    oklch(0.72 0.16 55) 18%,
    oklch(0.5 0.15 40) 45%,
    oklch(0.25 0.08 30) 75%,
    oklch(0.15 0.02 30) 100%
  );
  box-shadow:
    inset -80px -140px 200px oklch(0.08 0.01 30),
    0 0 200px oklch(0.45 0.2 55 / 0.35),
    0 0 400px oklch(0.55 0.2 55 / 0.2);
}
```

**Recommended upgrade for the "wow" factor** → swap the CSS sphere for a real WebGL one using `@react-three/fiber` + `@react-three/drei`:
- Parallax on mouse position
- Gentle continuous rotation
- Noise displacement shader for surface life
- Same color palette via an emissive material

Keep the CSS version as a fallback for `prefers-reduced-motion`.

---

## 📄 Page inventory

### 1. Home (`pages/page-home.jsx`)
Hero sphere · about strip · 4-column stack strip · featured bento (1 large + 3 small) · full 16-project index · big CTA.

### 2. Case Study (`pages/page-case-study.jsx`)
Template uses **BarriereHilfe**. Sections (§01–§05): Overview · Challenge (4 cards) · Gallery (2fr:1fr) · Approach + stack chips · Outcomes (big numerals) · Next-project teaser.
**Duplicate this per project** — one URL like `/work/targetdesk`.

### 3. CV (`pages/page-cv.jsx`)
Hero · Summary · Experience (3 roles, bulleted) · Skills (4 groups) · Education. Include a `Download PDF` link.

### 4. Contact (`pages/page-contact.jsx`)
Portrait slot (3:4) on the left · greeting · 2×2 contact cards · inline message form · availability strip. **Portrait image goes here, not home.**

---

## ⚙️ Tailwind config — drop-in

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
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
        serif: ['"Instrument Serif"', "serif"],
        sans:  ['"Inter"', "system-ui", "sans-serif"],
        mono:  ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "display": "-0.04em",   // headlines
        "display-tight": "-0.06em",
        "label":   "0.12em",    // uppercase mono labels
      },
    },
  },
} satisfies Config;
```

### CSS variables (app/globals.css)

```css
:root {
  --ink-deep: oklch(0.12 0.005 80);
  --ink:      oklch(0.18 0.005 80);
  --paper:    oklch(0.96 0.005 80);
  --paper-dim:oklch(0.88 0.005 80);
  --muted:    oklch(0.60 0.005 80);
  --copper:   oklch(0.72 0.16 55);
}

body {
  background: var(--ink-deep);
  color: var(--paper);
  font-family: "Inter", system-ui, sans-serif;
  text-wrap: pretty;
}

.font-display { font-family: "Instrument Serif", serif; letter-spacing: -0.04em; }
.font-meta    { font-family: "JetBrains Mono", ui-monospace, monospace;
                letter-spacing: 0.12em; text-transform: uppercase; font-size: 11px; }
```

---

## 🤖 Prompt for Claude Code / Gemini CLI

Paste this after adding the designs to your Next.js project:

> I'm building my portfolio with Next.js 15 (App Router) and Tailwind CSS.
>
> Please read `directions/shared.jsx` (design tokens + project data) and `pages/*.jsx` (the four page designs). These files are React components with inline styles that act as pixel-accurate mockups.
>
> Convert them into a real Next.js app:
> - Routes: `/` (Home), `/work/[slug]` (Case Study), `/cv`, `/contact`
> - Move all inline styles to Tailwind classes using the tokens in `README.md`
> - Import Google Fonts (Instrument Serif, Inter, JetBrains Mono) via `next/font`
> - Keep the copper sphere as CSS for now; I'll upgrade it to react-three-fiber later
> - Make everything responsive (mobile first). On mobile, the hero display type should cap at ~64px; the bento collapses to a single column
> - The portrait on `/contact` should use `next/image` — I'll provide the file at `public/portrait.jpg`
> - Ignore `lib/design-canvas.jsx` and `Portfolio Directions.html` — they are not part of the site
>
> Use the project data from `directions/shared.jsx` as a seed for a `content/projects.ts` file.
>
> Match the designs pixel-for-pixel on desktop; use your judgment for mobile breakpoints.

---

## 📱 Responsive notes (not in the mocks — design calls)

The mocks are desktop-first (1440px). Suggested breakpoints:

| Element              | Desktop       | Tablet (md)   | Mobile (sm)      |
|----------------------|---------------|---------------|------------------|
| Hero display         | 176px         | 104px         | 64px             |
| Page gutter          | 56px          | 40px          | 20px             |
| Bento grid           | 2fr 1fr       | 1fr 1fr       | 1fr (single col) |
| Index row            | 5 cols        | 3 cols        | stacked (name + year) |
| About strip          | 2 cols        | 2 cols        | 1 col            |
| Contact hero         | portrait + text | stacked     | stacked          |

---

## 📋 TODO before shipping

- [ ] Source portrait photo (3:4, for `/contact`)
- [ ] Collect screenshots for 4 featured projects (hero + 2–3 in-product) each
- [ ] Write full case study copy for TargetDesk, ThriftPlug, We-Xperience
- [ ] Prepare CV PDF export
- [ ] Add OG image + meta tags
- [ ] (Optional) WebGL upgrade of hero sphere

---

## 🎯 Design rules — please don't break

1. **One accent. Copper. Forever.** No blue "info" state, no green "success". Muted grays only.
2. **Serif for display, mono for meta, sans for body.** Never mix.
3. **The sphere glows, it doesn't strobe.** If you animate it, keep it slow (>8s rotation, <0.3 opacity delta).
4. **Numbers are big.** Outcome metrics are the second-biggest type on the page after display headlines.
5. **Borders are 1px and `oklch(0.2 0.005 80)`.** Not dividers. Not white-with-alpha. That exact token.
6. **No emoji, no icons you didn't already see in the mocks.** The type system carries the visual weight.

---

Set in Instrument Serif · Inter · JetBrains Mono · © MMXXVI
