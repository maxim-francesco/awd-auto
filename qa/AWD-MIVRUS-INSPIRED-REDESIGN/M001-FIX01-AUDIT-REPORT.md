# AWD Auto — M001-FIX01 Visual Fidelity & Vehicle Data Integrity Report

## Executive Summary
This fix addresses and resolves all issues identified in QA review regarding vehicle card photography, dark header fidelity, title wrapping, and sold vehicle presentation for AWD Auto.

- **Feature Branch**: `feature/awd-mivrus-inspired-redesign`
- **Latest Commit**: `8ee7f2e` (pushed to origin)
- **Production Baseline**: `dbac04f7f17dc5443a3d349d87dc1d5c2fffbb0f`
- **Authorized Isolated Preview URL**: [https://awd-auto-mivrus-inspired-preview.vercel.app](https://awd-auto-mivrus-inspired-preview.vercel.app)
- **Production Isolation**: 100% verified. Main branch, DNS, backend database, and existing preview projects (`awd-auto-color-flow-preview`, `awd-auto-redesign-v2-preview`, `awd-auto-redesign-preview`) remain completely untouched.

---

## 1. P0 Root Cause Analysis: Duplicate Sports Car Fallback
* **Root Cause**: In `CarCard.tsx`, the component attempted to access `listing.photos[0]`. However, the AWD Auto API and data model provide vehicle photographs via `listing.images[0].url` (matching the baseline implementation in `dbac04f7f17dc5443a3d349d87dc1d5c2fffbb0f`). Because `listing.photos` was `undefined`, every single vehicle card fell back to the hardcoded sports car Unsplash image.
* **Resolution**:
  1. Updated `CarCard.tsx` to read `listing.images[0]?.url`.
  2. Replaced the external fallback with a neutral inline SVG placeholder showing `"Fotografie indisponibilă"`. No external fake sports car or third-party vehicle image can ever be displayed.
  3. Verified across all routes:
     - Dacia Duster Prestige: `https://res.cloudinary.com/dbrxai6cz/.../jgzlqabxpfnnr6cilvqz.jpg` (naturalWidth: 1600, naturalHeight: 989)
     - Mazda CX-5 Revolution: `https://res.cloudinary.com/dbrxai6cz/.../byvddk6erinbxe2exxfz.jpg` (naturalWidth: 1600, naturalHeight: 923)
     - Audi A4 Allroad - Quattro: `https://res.cloudinary.com/dbrxai6cz/.../lwb9ylvkio7vssjrgdr5.jpg` (naturalWidth: 1600, naturalHeight: 931)
     - Ford Focus Cool & Connect: `https://res.cloudinary.com/dbrxai6cz/.../ubxf1qbqbvl2lhgj47yu.jpg` (naturalWidth: 1600, naturalHeight: 900)
     - And all 28+ available and sold vehicles in full inventory.

---

## 2. P1 Header Visual Fidelity Fix
* **Issue**: The header previously appeared light because `bg-ink-deep/95` failed to compile an opacity variant from CSS variable `--ink-deep: #08090B`, resulting in a transparent background showing the light canvas `#F5F4F0` beneath it.
* **Resolution**:
  1. Configured direct hex/rgba color definitions in `tailwind.config.ts` for `ink` and `gold`, enabling native Tailwind alpha-channel compilation.
  2. Updated `Header.tsx` to explicitly enforce `bg-[#08090B] border-b border-white/[0.08] shadow-md sticky top-0 z-50`.
  3. Computed styles verified in browser: `backgroundColor: rgb(8, 9, 11)`, `borderBottomColor: rgba(255, 255, 255, 0.08)`.
  4. Preserved AWD logo, full original navigation destinations, phone badge (`#D9AC46`/`#E8C46B`), and gold active link underline indicator.

---

## 3. P1 Vehicle Card Accuracy & Sold Vehicles Parity
* **Vehicle Titles**: Replaced `line-clamp-1` with `line-clamp-2 min-h-[3.25rem]`, allowing titles such as *"Ford Focus Cool & Connect 1.5 Tdci"* to wrap naturally without truncating words while maintaining consistent card height alignment.
* **Sold Vehicles Parity**:
  - Restored baseline behavior where sold vehicle cards display a grayscale filter and a bold `VÂNDUT` stamp over the photo.
  - Eliminated the `N/A · N/A · N/A` specifications grid on sold cards (matching baseline `{!isSold && (...)}`).
  - Restored disabled status CTA button (`<button disabled>Vândut</button>`) instead of clickable "Vezi Detalii" links.

---

## 4. P2 Google Reviews Diagnostic
* **Investigation**: `useGoogleReviews.ts` requires `VITE_GOOGLE_MAPS_API_KEY` to load the Google Places script (`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`).
* **Findings**:
  - `VITE_GOOGLE_MAPS_API_KEY` is not present in Vercel environment variables or git history.
  - Baseline capture of official production (`https://www.awdauto.ro/`) confirms this error is pre-existing in production (*"Google Maps API key is missing"*).
* **Action**: Per instructions, no dummy reviews or fabricated ratings were introduced. The client can resolve this at any time by configuring the Google Maps API key in Vercel environment settings.

---

## 5. Automated DOM & Parity Verification
- **Verified URLs HTTP Status**:
  - `https://www.awdauto.ro/` => HTTP 200 (Untouched)
  - `https://awd-auto-redesign-preview.vercel.app` => HTTP 200 (Untouched)
  - `https://awd-auto-redesign-v2-preview.vercel.app` => HTTP 200 (Untouched)
  - `https://awd-auto-color-flow-preview.vercel.app` => HTTP 200 (Untouched)
  - `https://awd-auto-mivrus-inspired-preview.vercel.app` => HTTP 200 (Updated)

