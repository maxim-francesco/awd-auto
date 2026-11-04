# AWD Auto — Mivrus-Inspired Premium Redesign (Mission M001)

## 1. Project & Mission Overview
- **Dealership Client**: AWD Auto Trade SRL (Cluj-Napoca, România)
- **Approved Visual Reference**: Auto Mivrus (`https://automivrusrulate.ro/`)
- **Baseline Git Commit**: `dbac04f7f17dc5443a3d349d87dc1d5c2fffbb0f` (Official Production)
- **Feature Branch**: `feature/awd-mivrus-inspired-redesign`
- **New Isolated Vercel Preview**: [https://awd-auto-mivrus-inspired-preview.vercel.app](https://awd-auto-mivrus-inspired-preview.vercel.app)
- **Previous Previews Status**: All 100% untouched and active:
  - Official Production: `https://www.awdauto.ro/`
  - V1 Redesign: `https://awd-auto-redesign-preview.vercel.app`
  - V2 Redesign: `https://awd-auto-redesign-v2-preview.vercel.app`
  - Color Flow Redesign: `https://awd-auto-color-flow-preview.vercel.app`

---

## 2. Design System Tokens Extracted from Auto Mivrus
- **Surfaces**:
  - Ink Deep: `#08090B` (Primary dark background, header, footer, deep sections)
  - Ink Raised: `#101215` / `#16181C` (Dark container cards, hero highlights)
  - Warm Light Canvas: `#F5F4F0` (Alternating light sections)
  - Crisp White Cards: `#FFFFFF` (Inventory cards, Google reviews, forms)
- **Gold Accents**:
  - Primary Gold: `#D9AC46`
  - Soft Gold: `#E8C46B`
  - Contrast Gold (for text on light surfaces): `#835C0D`
- **Neutral Steel**:
  - Text Muted / Icons: `#858A91` / `#A1A1AA`
- **Typography**:
  - `Manrope`, sans-serif (Weights 400, 500, 600, 700, 800)
- **Borders & Radii**:
  - Radius: `0.75rem` (12px)
  - Border dark: `rgba(255, 255, 255, 0.08)`
  - Border light: `rgba(0, 0, 0, 0.08)`

---

## 3. Vehicle Cards Redesign
- **Proportions**: Aspect ratio 3:2 (16:10) for photography with subtle hover scale `1.04`.
- **Badges**: Frosted dark glass TVA Deductibil pill (`bg-ink-deep/85 text-gold-soft border border-gold/30 backdrop-blur-md`), Disponibil emerald pill, and subtle VÂNDUT overlay.
- **Metadata**: Clean uppercase `[An] · [Combustibil] · [Transmisie]` hierarchy.
- **Specifications**: 4-point grid with steel icons (Kilometraj, An, Combustibil, Transmisie).
- **Price & CTA**: Bold high-contrast price with TVA indicator, and full-width `.btn-gold` button with hover animation and `ArrowRight`.

---

## 4. Content & Business Logic Parity
- **Parity Result**: 100% 1:1 match across all headings, vehicle listings, contact forms, warranty packages, and legal disclosures.
- **Form Data Isolation**: Client test submissions on preview show safe demonstrative feedback without polluting production leads.

---

## 5. Artifacts Catalog
- `reference/`: 7 high-res captures of Auto Mivrus across mobile, tablet, desktop, and closeup cards.
- `baseline/`: 5 high-res captures of official AWD Auto production.
- `redesign/`: 12 high-res captures of new Mivrus-inspired AWD Auto (homepage all breakpoints, stock, details, sold, orders, financing, warranty, about, contact).
- `comparison/`: 3 multi-panel side-by-side comparison images.
- `content-parity-report.md`: Automated parity audit across all routes.

