# Handoff: Apex Floorings — Homepage

## Overview
A single-screen, full-bleed homepage for **Apex Floorings**, a premium interlocking-tile flooring company based in Lagos, Nigeria. The page is built around a fixed-viewport hero slideshow with an auto-rotating photo carousel, animated text overlays, a vertical color-swatch strip showing the brand's tile range, and a yellow ticker strip at the bottom.

The design is **dark, industrial, and confident** — full-screen photography, all-caps Bebas Neue / Jost typography, and the brand's signature acid yellow (`#CFDB30`) used as the singular accent color.

## About the Design Files
The files in this bundle are **design references created in HTML / inline JSX** — prototypes showing intended look and behavior, not production code to ship directly.

The task is to **recreate this design in the target codebase's existing environment** (React, Next.js, Vue, Astro, etc.) using its established patterns, component library, and asset pipeline. If no environment exists yet, use Next.js (App Router) + Tailwind as the default — the design maps cleanly onto utility classes and a single client component for the slider.

The inline-style JSX in `source/apex-home.jsx` is intentionally verbose so every value (color, size, spacing, transition) is explicit and copyable. Replace inline styles with Tailwind utilities or the codebase's styling system as appropriate.

## Fidelity
**High-fidelity (hifi).** Pixel-perfect mockup with final colors, typography, spacing, and interactions specified. Recreate the UI as-built, with the exact tokens listed below.

## Screens / Views

### Homepage (single full-viewport screen)
- **Name:** Homepage / Hero
- **Purpose:** Brand-forward landing experience; visitor sees brand identity, product positioning, and CTAs within one screen. The slideshow surfaces 4 product/service narratives.
- **Layout:**
  - Full viewport (`100vw × 100vh`), `display: flex; flex-direction: column`, background `#0E0E0E`.
  - **Slot 1 (flex: 1):** Hero region — `position: relative`, contains absolute-positioned Nav, full-bleed photo stack, vertical color strip on right edge, and bottom-anchored text overlay.
  - **Slot 2 (flex-shrink: 0):** Yellow ticker strip — `padding: 11px 56px`, brand yellow background.

#### Components

**1. Nav (absolute, top:0, left:0, right:0, height: 76px, z:30)**
- Linear gradient overlay top→bottom: `rgba(14,14,14,0.85) → transparent`
- Padding: `0 56px`
- **Logo (left):** 4×36px vertical yellow bar (`#CFDB30`) + stacked text:
  - `APEX` — Bebas Neue, 22px, white, letter-spacing 3px
  - `FLOORINGS` — Jost 500, 9px, yellow, letter-spacing 4px, uppercase
- **Nav links (center):** PRODUCTS · SERVICES · PROJECTS · ABOUT · CONTACT — Jost 500, 11px, color `rgba(255,255,255,0.65)`, letter-spacing 2px. Hover: color → `#CFDB30`.
- **CTA button (right):** "GET A QUOTE" — Jost 700, 11px, padding 11×24px, bg `#CFDB30`, color `#111`, letter-spacing 2px, uppercase.

**2. Hero Slider (absolute fill)**
- 4 slides, auto-advance every **5500ms**, paused on hover.
- **Photo layer:** All 4 slides stacked absolutely. Active slide `opacity: 1`, others `0`. Cross-fade transition `opacity 1.2s ease-in-out`. Active slide `transform: scale(1.05)` with a 7s ease-out transform — subtle Ken Burns effect.
- `object-fit: cover; object-position: center 30%`.
- **Bottom gradient:** `linear-gradient(to top, rgba(14,14,14,0.92) 0%, rgba(14,14,14,0.5) 28%, rgba(14,14,14,0) 55%)` — z:2, pointer-events: none. This is what makes the bottom text legible over any photo.

**3. Color swatch strip (absolute, top:76, right:0, bottom:0, width:72, z:5)**
- 6 colored panels stacked vertically, equal flex by default.
- On hover: hovered panel grows to `flex: 2`, transition `flex 0.35s ease`.
- Hovered panel reveals vertical text label (Jost 700, 9px, letter-spacing 2px, uppercase, `writing-mode: vertical-rl`).
- Tile colors:
  - Red Terra `#E8453C`
  - Ocean Blue `#3B7FE8`
  - Fuchsia `#E83AAE`
  - Urban Grey `#9B9B9B`
  - Apex Yellow `#CFDB30`
  - Onyx Black `#1C1C1C`
- Label color is `#fff` for dark swatches, `#111` for yellow / urban grey.

**4. Bottom text overlay (absolute, left:56, right:96, bottom:60, z:10)**
- Flex row, items aligned to flex-end, justify space-between, gap 40px.
- **Left content (animated per slide):** Each slide fades in/up over 0.7s with 0.25s delay. The active slide is `position: relative`, others `absolute` and hidden.
  - Eyebrow row: 20×1px white-50 rule + Jost 400 9px eyebrow text (`rgba(255,255,255,0.6)`, letter-spacing 3px).
  - Headline: Jost 400, 32px, line-height 1.15, color white, three-word phrase (e.g. "PREMIUM FLOORING SOLUTIONS").
  - Subhead: Jost 300, 12px, max-width 480px, color `rgba(255,255,255,0.55)`, line-height 1.65.
- **CTAs (static, persist across slides):**
  - Primary: "VIEW PRODUCTS" — bg `#CFDB30`, color `#111`, Jost 600, 10px, padding 12×26, letter-spacing 2.
  - Secondary: "OUR WORK →" — transparent, 1px `rgba(255,255,255,0.25)` border, color white, Jost 400, 10px, padding 12×24.
- **Right controls (slide nav):**
  - Top: prev/next buttons — 38×38, Jost. Prev: transparent + 1px white-30 border, color white. Next: yellow bg, color `#111`.
  - Bottom: counter `01 / 04` (Jost 400, 11px, white-70) + dot indicators. Active dot: 22×2 yellow. Inactive: 10×2 white-30. Transition `all 0.3s ease`.

**5. Bottom yellow strip (flex-shrink: 0)**
- Bg `#CFDB30`, padding `11px 56px`.
- 3 text spans, justify space-between, all Jost 11px:
  - Left: "500+ COMPLETED PROJECTS ACROSS NIGERIA" (500 weight, color `#1a1a1a`, letter-spacing 1.5, uppercase)
  - Center: "Residential · Commercial · Sports · Industrial" (400 weight, color `rgba(0,0,0,0.55)`, letter-spacing 1)
  - Right: "LAGOS · ABUJA · PORT HARCOURT →" (500 weight, color `#1a1a1a`, letter-spacing 1.5, uppercase)

### Slide content (4 slides)

| # | Eyebrow | Headline | Subhead | Image |
|---|---------|----------|---------|-------|
| 1 | INTERLOCKING TILES | PREMIUM FLOORING SOLUTIONS | Interlocking tiles, sports surfaces and industrial flooring — engineered for performance, designed for beauty. | hero-1-team-portrait.jpg |
| 2 | SPORTS FLOORING | COURTS BUILT FOR CHAMPIONS | Professional sports surfaces — basketball courts, multi-purpose halls and training facilities. | hero-2-sports-flooring.jpg |
| 3 | INSTALLATION SERVICES | EXPERT INSTALLATION NATIONWIDE | From Lagos to Abuja, our team delivers precision installation on every project — on time, every time. | hero-3-warehouse-installation.jpg |
| 4 | COLOUR RANGE | TWENTY+ BOLD COLOURS | Twenty plus tile colours to match your space, your brand and your style. | hero-4-tile-stack-colors.jpg |

## Interactions & Behavior

- **Auto-advance:** Slide index `(idx + 1) % 4` every **5500ms** via `setInterval`. Cleared on unmount and when paused.
- **Pause on hover:** `onMouseEnter` on the slider sets `paused = true`; `onMouseLeave` resumes. Implementation note: pause flag is read by the effect dependency, so the interval resets cleanly.
- **Manual nav:** Prev/next buttons + clickable dots set `idx` directly. Manual change does NOT reset the interval; it just updates index — interval continues firing.
- **Slide cross-fade:** All slides rendered, opacity-toggled. Photo: `opacity 1.2s ease-in-out`. Photo zoom: `transform: scale(1.05)` over `transform 7s ease-out` on the active slide (subtle Ken Burns).
- **Text fade-in:** Active slide's text block: `opacity 0 → 1` and `translateY(16px) → 0` over 0.7s, 0.25s delay (so text appears slightly after the photo cross-fade starts).
- **Color swatch hover:** Hovered panel grows from `flex: 1` to `flex: 2` over 0.35s; vertical label appears. No click handler today — these are decorative product-color teasers (link them to product pages in production).
- **Nav link hover:** Color shifts to yellow `#CFDB30` (instant — could use 0.15s transition).

## State Management
Single client component (`HeroSlider`) holds:
- `idx: number` — active slide index (0–3).
- `paused: boolean` — pause flag for autoplay.
- `hoveredTile: number | null` — which color swatch is expanded.

The slider is the only stateful piece. Nav and bottom strip are static.

## Design Tokens

### Colors
| Token | Value | Use |
|-------|-------|-----|
| `bg-base` | `#0E0E0E` | Page background, hero base |
| `accent-yellow` | `#CFDB30` | Brand accent — CTAs, ticker, active dot, logo bar |
| `text-on-yellow` | `#111` / `#1a1a1a` | Text on yellow surfaces |
| `text-primary` | `#FFFFFF` | Primary text on dark |
| `text-muted-1` | `rgba(255,255,255,0.65)` | Nav links default |
| `text-muted-2` | `rgba(255,255,255,0.55)` | Subheads |
| `text-muted-3` | `rgba(255,255,255,0.6)` | Eyebrows |
| `text-muted-4` | `rgba(255,255,255,0.30)` | Inactive dots, faint borders |
| `border-faint` | `rgba(255,255,255,0.25)` | Outline-button border |
| `tile-red` | `#E8453C` | Red Terra |
| `tile-blue` | `#3B7FE8` | Ocean Blue |
| `tile-pink` | `#E83AAE` | Fuchsia |
| `tile-grey` | `#9B9B9B` | Urban Grey |
| `tile-yellow` | `#CFDB30` | Apex Yellow |
| `tile-black` | `#1C1C1C` | Onyx Black |

### Typography
- **Display headings & all-caps brand mark:** `Bebas Neue` (Google Fonts).
- **All other UI text:** `Jost` weights 300 / 400 / 500 / 600 / 700 (Google Fonts).
- Most text is uppercase with generous letter-spacing (1–4px). Body copy uses 0–0.2px tracking.
- Sizes used: 9, 10, 11, 12, 22, 32 px.

### Spacing
- Page horizontal gutters: `56px` (nav, hero text), `96px` right gutter on text overlay (clears the 72px swatch strip).
- Vertical: nav 76px tall, ticker ~44px tall, bottom text anchored at `bottom: 60px`.
- Standard rhythm: 8 / 10 / 12 / 22 / 40 px gaps between elements.

### Other tokens
- Border radius: **0 everywhere** (sharp corners are intentional — industrial vibe).
- Shadows: none.
- Borders: 1px and 1.5px white-alpha for outlines.
- Slide interval: `5500ms`.
- Photo cross-fade: `1.2s ease-in-out`.
- Photo zoom: `7s ease-out` on `transform: scale(1.05)`.
- Text transition: `0.7s ease, 0.25s delay`.
- Swatch grow: `0.35s ease`.

## Assets
4 hero photos in `assets/`. Originals are professional shots of the Apex team and product:
- `hero-1-team-portrait.jpg` — team in hi-vis vests, white hard hats, indoor.
- `hero-2-sports-flooring.jpg` — installation of interlocking tiles on a sports court.
- `hero-3-warehouse-installation.jpg` — warehouse / install scene.
- `hero-4-tile-stack-colors.jpg` — overhead shot of the multi-color tile range.

In production, generate `webp` + `avif` variants and use `<picture>` / `next/image` with `priority` on the first slide. Recommended widths: 1280 / 1920 / 2560.

## Files
- `source/apex-home.jsx` — full inline-JSX implementation. The reference. Every style value is here.
- `source/apex-home.html` — host HTML that loads React + Babel + the JSX file.
- `standalone/apex-floorings-homepage.html` — single self-contained file (everything inlined). Useful as a visual reference when running offline.
- `assets/` — the 4 hero photos.

## Implementation notes for Claude Code
1. Spin up the homepage as a single client component (`HeroSlider`) — Nav and BottomStrip can be RSC / static.
2. Replace `setInterval` with a custom hook (`useInterval` or `useEffect` cleanup) — see the existing pattern in the JSX.
3. Lazy-load slides 2–4; only slide 1's image needs `priority` / eager.
4. The inline-JSX uses `font-family: 'Bebas Neue'` etc. — load these via `next/font/google` (or your codebase's font loader) so they're self-hosted and don't FOUT.
5. The full-viewport `100vh` layout is intentional for desktop. On mobile (< 768px), let the page scroll: stack nav → slider (auto height ~70vh) → bottom strip. Hide the right color-swatch strip below 1024px (not enough room).
6. Don't ship inline `style={{}}` to production — port to Tailwind / CSS modules / your codebase's convention. The values are 1:1 transferable.
7. Accessibility: prev/next buttons need `aria-label`s; dot buttons need `aria-label="Go to slide N"`; the swatch strip should be `<ul>` with `<button>` children if you make them clickable.
