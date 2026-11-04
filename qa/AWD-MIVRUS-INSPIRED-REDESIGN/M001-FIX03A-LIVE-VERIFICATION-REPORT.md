# AWD AUTO — M001-FIX03A LIVE DEPLOYMENT VERIFICATION REPORT

## 1. Executive Summary & Root Cause Diagnosis
- **Defect Reported**: Client rejected M001-FIX03 because the public URL did not display the dark background around the white description card.
- **Root Cause Identified**:
  1. **Vercel Alias Stale Mapping**: Running `npx vercel` without `--prod` created isolated preview URLs (e.g. `...-13vwscu47.vercel.app`), but the canonical project alias `https://awd-auto-mivrus-inspired-preview.vercel.app` remained pinned to an older deployment (`...-9tfjkay2c.vercel.app` created 1 hour earlier). Anyone accessing the public URL was served the stale build.
  2. **Styling Robustness**: Enhanced `src/pages/CarDetails.tsx` with explicit semantic `<section id="detalii-si-descriere">`, full edge-to-edge `w-full bg-[#08090B]`, inline `style={{ backgroundColor: '#08090B' }}`, and an isolated pure white content card (`style={{ backgroundColor: '#FFFFFF', color: '#111827' }}`).
- **Corrective Deployment Action**:
  - Re-built and deployed commit `49cabd5` to `awd-auto-mivrus-inspired-preview` (`dpl_GeafzE28z79SHyZfGm6n2TFTWXTz`).
  - Explicitly updated canonical alias via:
    `npx vercel alias set awd-auto-mivrus-inspired-preview-723djuboy.vercel.app awd-auto-mivrus-inspired-preview.vercel.app --scope maxim-francescos-projects`
  - Validated live public URL with automated headless Chromium Playwright browser.

---

## 2. Live Public URL Computed DOM Styles
Extracted live from `https://awd-auto-mivrus-inspired-preview.vercel.app/masini-disponibile/cmvi6pg2708g3sx2abee72g1i`:

| Element | Tag & Classes | Computed Background | Computed Color | Dimensions |
| :--- | :--- | :--- | :--- | :--- |
| **Outer Section** | `<section id="detalii-si-descriere">` | `rgb(8, 9, 11)` (`#08090B`) | `rgb(244, 243, 240)` | Width: 1440px (100% viewport), Height: 2757px |
| **Description Card** | `<div className="rounded-xl border border-neutral-200 bg-white ...">` | `rgb(255, 255, 255)` (`#FFFFFF`) | `rgb(17, 24, 39)` | Width: 1024px (centered with 208px black margins left & right) |
| **Section Heading** | `<h2>Descriere Detaliată</h2>` | `rgba(0, 0, 0, 0)` | `rgb(17, 24, 39)` | Font: Extrabold, Size: 24px |
| **Body Paragraph** | `<p className="text-neutral-800 ...">` | `rgba(0, 0, 0, 0)` | `rgb(31, 41, 55)` | Line-height: Relaxed, Contrast: High |
| **Card Box Shadow** | — | — | — | `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px` |
| **Card Border** | — | — | — | `1px solid rgb(229, 229, 229)` |

---

## 3. Visual Verification Checklist
- [x] **Card Background**: Pure white (`#FFFFFF` / `rgb(255, 255, 255)`).
- [x] **Surrounding Area**: Solid deep black (`#08090B` / `rgb(8, 9, 11)`).
- [x] **Left / Right Area**: Solid black margin (208px on 1440px desktop).
- [x] **Top / Bottom Area**: Solid black padding (`py-12 lg:py-16`).
- [x] **Card Elevation**: Clean border (`border-neutral-200`) and subtle deep drop shadow (`shadow-2xl`).
- [x] **Text Contrast**: Dark text (`#111827` / `#1F2937`) on white surface.
- [x] **Content Parity**: Exact text, emojis, whitespace, and gold pill preserved 1:1.
- [x] **Responsiveness**: Tested and verified on 1440px Desktop, 390px Mobile, and 375px Mobile.
- [x] **Production & Sibling Isolation**:
  - `https://www.awdauto.ro/` -> 200 OK (Untouched)
  - `https://awd-auto-color-flow-preview.vercel.app` -> 200 OK (Untouched)
  - `https://awd-auto-redesign-v2-preview.vercel.app` -> 200 OK (Untouched)
  - `https://awd-auto-redesign-preview.vercel.app` -> 200 OK (Untouched)

---

## 4. Live Screenshot Evidence Files
All captured directly from the live public Vercel URL:
1. `M001_FIX03A_DESKTOP_1440_SECTION.png`: Full width 1440px desktop screenshot displaying the white card framed by black margins.
2. `M001_FIX03A_DESKTOP_CLOSEUP.png`: Close-up of card edges showing borders and shadow against the black surface.
3. `M001_FIX03A_MOBILE_390_SECTION.png`: Mobile 390px capture showing responsive padding and black surroundings.
4. `M001_FIX03A_MOBILE_375_SECTION.png`: Mobile 375px capture showing clean edge alignment on small viewport.
5. `M001_FIX03A_COMPUTED_STYLES.json`: Raw DOM computed styles from browser execution.
