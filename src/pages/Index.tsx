"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Layout from "@/components/layout/Layout"
import Container from "@/components/ui/Container"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import useLatestListings from "@/hooks/useLatestListings"
import useSoldListings from "@/hooks/useSoldListings"
import CarCard from "@/components/CarCard"
import ShowroomSpotlight from "@/components/ShowroomSpotlight"
import AwdStandardInteractive from "@/components/AwdStandardInteractive"
import FinanceCalculatorWidget from "@/components/FinanceCalculatorWidget"
import GoogleReviewsSection from "@/components/GoogleReviewsSection"
import heroBg from "@/assets/logos/herocar.jpg"
import uniCreditLogo from "@/assets/logos/UniCreditBank.png"
import btDirectLogo from "@/assets/logos/bt-direct_2187_4_1730210636.png"
import tbiLogo from "@/assets/logos/tbi-featured_logo.png"
import { 
  ShieldCheck, 
  FileCheck, 
  BadgePercent, 
  Car, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  Clock,
  ChevronRight,
  AlertCircle,
  ChevronDown
} from "lucide-react"

const Index = () => {
  const { listings, loading, error } = useLatestListings()
  const { soldListings, loading: soldLoading, error: soldError } = useSoldListings(4)
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>("all")

  // Filter cars if a brand is selected
  const spotlightCar = listings && listings.length > 0 ? listings[0] : null
  const showroomCars = listings && listings.length > 0
    ? (selectedBrandFilter === "all" 
        ? listings.slice(1, 5) 
        : listings.filter(c => c.title.toLowerCase().includes(selectedBrandFilter.toLowerCase())).slice(0, 4))
    : []

  const brands = [
    { label: "Toate Mărcile", value: "all" },
    { label: "BMW", value: "BMW" },
    { label: "Mercedes-Benz", value: "Mercedes" },
    { label: "Audi", value: "Audi" },
    { label: "Volkswagen", value: "Volkswagen" },
    { label: "Renault", value: "Renault" }
  ]

  return (
    <Layout>
      {/* ========================================================
          1. CINEMATIC HERO V2 — ASYMMETRIC AUTOMOTIVE EDITORIAL
      ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center bg-[#090C11] overflow-hidden pt-12 pb-20">
        {/* Background automotive image with controlled focal lighting */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-[center_right_20%] opacity-90 scale-100 transition-transform duration-1000"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient overlays designed so car silhouette remains clearly visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090C11] via-[#090C11]/85 to-transparent md:w-3/4 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090C11] via-transparent to-[#090C11]/60 pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column: Bold Editorial Hierarchy */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              {/* Badge with stock counter */}
              <AnimatedSection>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#C8A86B] animate-pulse" />
                  <span className="font-semibold text-[#E5D5B8]">Showroom Cluj-Napoca</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/80">{listings ? `${listings.length} vehicule verificate în stoc` : "Stoc Premium Disponibil"}</span>
                </div>
              </AnimatedSection>

              {/* Main Headline */}
              <AnimatedSection>
                <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
                  Automobile Rulate. <br />
                  <span className="bg-gradient-to-r from-[#D8BA81] via-[#F5EAD4] to-[#C8A86B] bg-clip-text text-transparent">
                    Standardul Transparenței.
                  </span>
                </h1>
              </AnimatedSection>

              {/* Subtitle */}
              <AnimatedSection>
                <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                  Fiecare automobil este inspectat tehnic în peste 100 de puncte, deține RAR efectuat cu CIV inclus, kilometraj garantat pe contract și consultanță dedicată de finanțare.
                </p>
              </AnimatedSection>

              {/* Primary & Secondary Action CTAs */}
              <AnimatedSection>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link 
                    to="/masini-disponibile" 
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-[#C29D5D] via-[#D8BA81] to-[#C29D5D] text-[#0A0D12] hover:brightness-110 shadow-[0_15px_30px_-8px_rgba(200,168,107,0.45)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Car className="w-5 h-5" />
                    <span>Explorează Stocul Disponibil</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>

                  <a 
                    href="tel:0752228593" 
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4 text-[#D8BA81]" />
                    <span>0752 228 593 • Showroom</span>
                  </a>
                </div>
              </AnimatedSection>

              {/* Trust Indicators */}
              <AnimatedSection>
                <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A86B] shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">100% RAR & CIV Efectuat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A86B] shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">Garanție Inclusă Defend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A86B] shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">Km Certificați pe Factură</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A86B] shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">Finanțare Online Rapidă</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>

        {/* Scroll Discovery Cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs hidden md:flex flex-col items-center gap-1 pointer-events-none">
          <span className="tracking-widest uppercase font-mono text-[10px]">Descoperă Showroom-ul</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C8A86B]" />
        </div>
      </section>

      {/* ========================================================
          2. SHOWROOM EDITORIAL V2 — WARM IVORY WITH SPOTLIGHT
      ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#F6F4EE] text-[#141921] border-b border-[#E3DDD1] relative">
        <Container>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <AnimatedSection className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D7] text-[#554734] text-xs font-bold tracking-wider uppercase">
                <Car className="w-3.5 h-3.5 text-[#B88E4B]" />
                Colecția Curentă • Showroom Cluj-Napoca
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#141921]">
                Selecția Editorială AWD Auto
              </h2>
              <p className="text-[#55606E] text-base sm:text-lg">
                Fiecare automobil din stoc este verificat tehnic riguros, are revizia la zi și documentele pregătite pentru înmatriculare imediată.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <Link 
                to="/masini-disponibile" 
                className="inline-flex items-center gap-2 text-sm font-bold text-[#141921] hover:text-[#B88E4B] transition-colors group"
              >
                <span>Vezi toate cele {listings?.length || 33} mașini</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#B88E4B]" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Featured Spotlight Vehicle (If loaded) */}
          {spotlightCar && (
            <AnimatedSection>
              <ShowroomSpotlight listing={spotlightCar} />
            </AnimatedSection>
          )}

          {/* Brand Filter Shortcuts */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2 shrink-0">
              Filtrare Rapidă:
            </span>
            {brands.map((b) => (
              <button
                key={b.value}
                onClick={() => setSelectedBrandFilter(b.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide shrink-0 transition-all ${
                  selectedBrandFilter === b.value
                    ? "bg-[#141921] text-white shadow-md"
                    : "bg-white text-slate-700 border border-[#E3DDD1] hover:border-slate-400"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {loading ? (
              [...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 space-y-4 shadow-sm animate-pulse border border-[#E5DFD4]">
                  <div className="aspect-[16/10] bg-slate-200 rounded-xl" />
                  <div className="h-5 bg-slate-200 rounded w-3/4" />
                  <div className="h-6 bg-slate-200 rounded w-1/2" />
                  <div className="h-10 bg-slate-200 rounded" />
                </div>
              ))
            ) : error ? (
              <div className="col-span-full text-center p-8 bg-amber-50 rounded-2xl border border-amber-200">
                <AlertCircle className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <p className="font-semibold text-amber-900">Nu am putut încărca stocul în acest moment.</p>
                <Link to="/masini-disponibile" className="text-sm font-bold text-amber-700 underline mt-2 inline-block">
                  Reîncearcă pagina de stoc
                </Link>
              </div>
            ) : (
              showroomCars.map((car) => (
                <CarCard key={car.id} listing={car} variant="light" />
              ))
            )}
          </div>

          {/* Bottom Callout */}
          <AnimatedSection className="text-center pt-4">
            <Link 
              to="/masini-disponibile" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[#161B21] text-white hover:bg-[#C8A86B] hover:text-[#0F1318] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Explorează Întregul Parc Auto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </Container>
      </section>

      {/* ========================================================
          3. THE AWD STANDARD — SIGNATURE INTERACTIVE EXPERIENCE V2
      ======================================================== */}
      <AwdStandardInteractive />

      {/* ========================================================
          4. FINANȚARE ȘI CALCULATOR INTERACTIV — SILVER MIST V2
      ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#EAEEF2] text-[#141921] border-b border-[#D8DFE4]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE2E8] text-[#344050] text-xs font-bold tracking-wider uppercase">
              <BadgePercent className="w-3.5 h-3.5 text-[#B88E4B]" />
              Finanțare Transparentă
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#141921]">
              Planuri de Finanțare Adaptate Bugetului Tău
            </h2>
            <p className="text-[#4A5568] text-base sm:text-lg">
              Consultanță dedicată, soluții flexibile cu avans de la 0% pentru persoane fizice și parteneriate oficiale cu UniCredit Consumer Financing, TBI Bank și BT Direct.
            </p>
          </div>

          {/* Embedded Interactive Finance Calculator */}
          <div className="max-w-5xl mx-auto mb-16">
            <FinanceCalculatorWidget initialPrice={15000} />
          </div>

          {/* Banking Partners Banner */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-[#D5DCE2] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-base font-extrabold text-slate-900">Parteneri Financiari Acreditați</h4>
              <p className="text-xs text-slate-500">Colaborare directă pentru persoane fizice și persoane juridice.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <img src={uniCreditLogo} alt="UniCredit Bank" className="h-8 w-auto object-contain max-w-[130px]" />
              <img src={btDirectLogo} alt="BT Direct" className="h-7 w-auto object-contain max-w-[120px]" />
              <img src={tbiLogo} alt="TBI Bank" className="h-7 w-auto object-contain max-w-[110px]" />
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          5. MAȘINI VÂNDUTE — DARK AUTOMOTIVE GALLERY
      ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#0D1016] text-white border-b border-white/5">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <AnimatedSection className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D8BA81] text-xs font-semibold tracking-wider uppercase border border-white/10">
                <Car className="w-3.5 h-3.5" />
                Portofoliu AWD Auto
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                Vehicule Livrate Clienților
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Fiecare mașină livrată este o mărturie a încrederii pe care o construim zi de zi la showroom-ul nostru din Cluj-Napoca.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <Link 
                to="/masini-vandute" 
                className="inline-flex items-center gap-2 text-sm font-bold text-[#D8BA81] hover:text-white transition-colors group"
              >
                <span>Vezi galeria completă a mașinilor vândute</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Sold grid */}
          {soldLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-[#161B22] rounded-2xl p-4 space-y-4 animate-pulse border border-white/10">
                  <div className="aspect-[16/10] bg-white/5 rounded-xl" />
                  <div className="h-5 bg-white/5 rounded w-3/4" />
                  <div className="h-4 bg-white/5 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : soldError ? (
            <div className="p-8 text-center text-slate-400 bg-white/5 rounded-2xl">
              Nu am putut încărca mașinile vândute momentan.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {soldListings.slice(0, 4).map((car) => (
                <CarCard key={car.id} listing={{ ...car, status: 'SOLD' }} variant="dark" />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* ========================================================
          6. TESTIMONIALE — WARM LIGHT
      ======================================================== */}
      <GoogleReviewsSection />

      {/* ========================================================
          7. SHOWROOM VISIT & FINAL CTA — DARK OBSIDIAN
      ======================================================== */}
      <section className="py-24 bg-[#0A0D11] text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-radial-gradient from-[#C8A86B]/10 via-transparent to-transparent pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#141922] to-[#10141B] border border-white/10 rounded-3xl p-8 sm:p-14 text-center space-y-8 shadow-2xl">
            <AnimatedSection className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#D8BA81] text-xs font-semibold tracking-wider uppercase border border-white/10">
                <MapPin className="w-3.5 h-3.5" />
                Vino la Showroom
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Te Așteptăm la un Test Drive în Cluj-Napoca
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Descoperă mașina dorită în showroom-ul nostru de pe Strada Plevnei 117. Echipa noastră îți pune la dispoziție istoricul complet, cheile pentru test drive și consultanță financiară dedicată.
              </p>
            </AnimatedSection>

            {/* Visit Details */}
            <AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left border-y border-white/10 py-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C8A86B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Adresă Showroom</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Strada Plevnei 117, Cluj-Napoca, 400394</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C8A86B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Program de Lucru</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Luni - Vineri: 09:00 - 18:00<br />Sâmbătă: 09:00 - 14:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C8A86B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Contact Vânzări</h4>
                    <p className="text-xs text-slate-400 mt-0.5">0752 228 593<br />0752 575 616</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Actions */}
            <AnimatedSection>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a 
                  href="tel:0752228593" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-[#C29D5D] via-[#D8BA81] to-[#C29D5D] text-[#0F1318] hover:brightness-110 shadow-lg transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Programează o Vizită la Showroom</span>
                </a>

                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Indicații de Orientare pe Hartă</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default Index
