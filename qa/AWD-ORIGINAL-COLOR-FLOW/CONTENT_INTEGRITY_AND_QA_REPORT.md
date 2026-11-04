# AWD AUTO — CONTENT INTEGRITY & QA REPORT (`AWD-ORIGINAL-COLOR-FLOW`)

## 1. Original Production Baseline & Git Isolation
- **Production Domain:** `https://www.awdauto.ro/`
- **Verified Production Baseline Branch:** `main` (`origin/main`)
- **Verified Baseline Commit:** `dbac04f7f17dc5443a3d349d87dc1d5c2fffbb0f` (`feat(stock-filters): add a VAT facet with deductible and non-deductible options`)
- **Isolated Redesign Branch:** `feature/awd-original-premium-color-flow` (created directly from `main`, zero commits cherry-picked from V1 or V2).
- **Unmodified Branches Verified:**
  - `main` (`dbac04f7f17dc5443a3d349d87dc1d5c2fffbb0f`)
  - `feature/awd-premium-light-dark-redesign` (V1)
  - `feature/awd-premium-experience-v2` (V2)

---

## 2. Automated Content Integrity Verification (1:1 Match)

Automated DOM comparison (`content_integrity_comparison.json`) between `baseline_inventory.json` (captured on `main`) and `after_inventory.json` (captured on `feature/awd-original-premium-color-flow`) across all 11 public routes confirms **ZERO unauthorized content changes** (`totalDiffs: 0`):

| Public Route | Section Count Match | Headings Match (H1–H4) | CTAs & Links Match | Form Inputs Match | Full Body Text 1:1 Match | Horizontal Overflow |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `/` (Homepage) | **PASS** (5/5) | **PASS** | **PASS** | **PASS** | **PASS** | `false` |
| `/masini-disponibile` | **PASS** (1/1) | **PASS** | **PASS** | **PASS** | **PASS** | `false` |
| `/masini-disponibile/:listingId` | **PASS** (0/0) | **PASS** | **PASS** | **PASS** | **PASS** | `false` |
| `/masini-la-comanda` | **PASS** (3/3) | **PASS** | **PASS** | **PASS** | **PASS** | `false` |
| `/finantare` | **PASS** (4/4) | **PASS** | **PASS** | **PASS** | **PASS** | `false` |
| `/beneficii-si-garantie` | **PASS** (3/3) | **PASS** | **PASS** | **PASS** | **PASS** | `false` |
| `/despre-noi` | **PASS** (4/4) | **PASS** | **PASS** | **PASS** | **PASS** | `false` |
| `/contact` | **PASS** (0/0) | **PASS** | **PASS** | **PASS** | **PASS** | `false` |
| `/masini-vandute` | **PASS** (1/1) | **PASS** | **PASS** | **PASS** | **PASS** | `false` |
| `/termeni-conditii` | **PASS** (0/0) | **PASS** | **PASS** | **PASS** | **PASS** | `false` |
| `/politica-confidentialitate` | **PASS** (0/0) | **PASS** | **PASS** | **PASS** | **PASS** | `false` |

### Intentional Preview Safety Isolations (Stage 08 & Stage 10)
1. **Form Submission Interception (No Production Lead Mutation):**
   - In `CarDetails.tsx`, `MasiniLaComanda.tsx`, `Finantare.tsx`, and `Contact.tsx`, submitting a form simulates a 600ms request and displays a clear Sonner toast notification: *"Mediu de previzualizare: solicitarea a fost simulată și nu a fost transmisă către AWD Auto."*
   - Zero permanent visible text, labels, placeholders, or form fields were altered.
2. **Search Engine Indexing Prevention:**
   - Added `<meta name="robots" content="noindex, nofollow" />` in `index.html` and `X-Robots-Tag: noindex, nofollow` in `vercel.json` exclusively on this preview branch.

---

## 3. Summary of Visual Changes & Signature Color Transitions

### Color System Palette
- **Dark Surfaces:**
  - Deep Obsidian (`#0D1117`)
  - Graphite (`#1C242C`)
  - Soft Charcoal (`#313A43`)
- **Light Surfaces:**
  - Warm Ivory (`#F4F0E8`)
  - Soft Stone (`#E9E4DC`)
  - Silver Mist (`#E3E8EB`)
  - Pearl White (`#F9F7F2`)
- **Adaptive Typography & Accent Calibration:**
  - On dark surfaces, metallic champagne gold (`hsl(43 59% 59%)` / `#E0BA65`) and crisp ivory foreground text (`#F9F7F2`) provide luminous contrast.
  - On light surfaces (`Warm Ivory`, `Soft Stone`, `Silver Mist`), `--luxury-gold` automatically recalibrates to a rich burnished bronze-gold (`hsl(37 68% 36%)` / `#9A6B1D`) with deep obsidian body copy (`#121820`), achieving WCAG AA+ readability while maintaining the unmistakable AWD Auto brand identity.

### Homepage Signature Transitions (Stage 04)
1. **Hero (`Deep Obsidian` over `herocar.jpg`) → Latest Stock (`Warm Ivory #F4F0E8`) — `.awd-hero-atmosphere`:**
   - A multi-layered radial champagne mist and vertical atmospheric fade (`110px` height) dissolves the lower edge of the dark hero photography directly into the Warm Ivory showroom floor without a hard horizontal border.
2. **Latest Stock (`Warm Ivory #F4F0E8` & `Pearl White` cards) → Recently Sold (`Soft Charcoal #313A43` & `Graphite #1C242C`) — `.awd-flow-ivory-to-charcoal`:**
   - The Warm Ivory background transitions through Soft Stone (`#EFEAE0` → `#E5DFD3`) with subtle radial ambient lighting into a sculpted `177.2deg` asymmetrical diagonal boundary (`::after`) that introduces the Graphite & Soft Charcoal "Ultimele Vândute" showcase.
3. **Recently Sold (`Soft Charcoal #313A43`) → Google Reviews (`Silver Mist #E3E8EB` & `Pearl White #F9F7F2`) — `.awd-flow-charcoal-to-mist`:**
   - Restrained radial gold and slate diffusion in the dark section softens through an atmospheric multi-stop gradient (`#1C242C` → `#313A43` → `#6B7680` → `#E3E8EB`) into the bright Silver Mist & Pearl White surface of "Ce spun clienții noștri".
4. **Google Reviews (`Silver Mist #E3E8EB` → `Warm Ivory #F4F0E8`) → Benefits (`Deep Obsidian #0D1117` & `Graphite #1C242C`) — `.awd-flow-mist-to-obsidian`:**
   - Uses a wide elliptical architectural arch (`radial-gradient(120% 100% at 62% 100%, #141B22 54%, transparent 55%)`) over a warm stone-to-obsidian tonal shift, guiding the eye into "Promisiunea Noastră: Pasiune și Încredere".
5. **Benefits (`Deep Obsidian` & `Graphite` Ambient Stage) → Footer (`Deep Obsidian #0D1117`) — `.awd-stage-obsidian-ambient`:**
   - Features a subtle overhead radial gold halo (`rgba(212, 176, 88, 0.11)`) and soft charcoal depth that settles into the Deep Obsidian footer.

### Secondary Pages Color Rhythm
- **Mașini Disponibile (`/masini-disponibile`) & Mașini Vândute (`/masini-vandute`):** Deep Obsidian header stage melting smoothly into a Warm Ivory & Soft Stone catalog canvas with elevated Pearl White vehicle cards and filter sidebar.
- **Car Details (`/masini-disponibile/:listingId`):** Deep Obsidian & Graphite gallery/specifications stage transitioning into a Soft Stone & Pearl White detailed description and inline enquiry section.
- **Mașini la Comandă (`/masini-la-comanda`):** Obsidian hero → Warm Ivory 4-step process cards → Deep Obsidian ambient request form.
- **Finanțare (`/finantare`):** Obsidian hero → Warm Ivory rate application section → Graphite partner criteria tabs (TBI Bank & UniCredit) → Soft Stone business documentation section → Obsidian financial partners showcase.
- **Beneficii & Garanție (`/beneficii-si-garantie`):** Obsidian hero & Graphite Defend Insurance warranty cards → Warm Ivory 5-column benefits showcase → Deep Obsidian FAQ accordion.
- **Despre Noi (`/despre-noi`):** Obsidian hero → Warm Ivory founder's story & quote card → Graphite client testimonials → Soft Stone core values → Deep Obsidian AWD Auto benefits checklist.
- **Contact (`/contact`) & Legal Pages (`/termeni-conditii`, `/politica-confidentialitate`):** Deep Obsidian title banner transitioning into Warm Ivory with elevated Pearl White cards.

---

## 4. Responsive Viewport QA Results
Tested across all required viewports (`375px`, `390px`, `768px`, `1440px`, `1920px`):
- **Build & Typecheck:** `npm run build` and `npx tsc --noEmit` completed with `0` errors and `0` CSS warnings.
- **Horizontal Overflow:** `0px` overflow (`scrollWidth === clientWidth`) verified across every viewport and route.
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` respected in `src/index.css`.

