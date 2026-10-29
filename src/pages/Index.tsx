"use client"

import { Link } from "react-router-dom"
import Layout from "@/components/layout/Layout"
import Container from "@/components/ui/Container"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import useLatestListings from "@/hooks/useLatestListings"
import useSoldListings from "@/hooks/useSoldListings"
import CarCard from "@/components/CarCard"
import GoogleReviewsSection from '@/components/GoogleReviewsSection'
import heroBg from '@/assets/logos/herocar.jpg'
import uniCreditLogo from '@/assets/logos/UniCreditBank.png'
import btDirectLogo from '@/assets/logos/bt-direct_2187_4_1730210636.png'
import tbiLogo from '@/assets/logos/tbi-featured_logo.png'
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
  AlertCircle
} from "lucide-react"

const Index = () => {
  const { listings, loading, error } = useLatestListings();
  const { soldListings, loading: soldLoading, error: soldError } = useSoldListings(4);

  const pillars = [
    {
      num: "01",
      icon: FileCheck,
      title: "Istoric 100% Transparent",
      desc: "Documente complete de service, kilometraj certificat contractual și verificare riguroasă a fiecărui vehicul înainte de expunere.",
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "RAR Deja Efectuat",
      desc: "Autoturismele vin cu Cartea de Identitate a Vehiculului (CIV) și inspecția tehnică RAR finalizată. Economisești timp și efort.",
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Garanție Inclusă Defend",
      desc: "Fiecare mașină comercializată beneficiază de pachetul de garanție extinsă Defend Insurance, asigurându-ți mobilitate fără griji.",
    },
    {
      num: "04",
      icon: BadgePercent,
      title: "Finanțare Rapidă PF & PJ",
      desc: "Leasing sau credit auto cu aprobare în maximum 24h prin partenerii noștri bancari: UniCredit, BT Direct și TBI Bank.",
    },
  ];

  return (
    <Layout>
      {/* ========================================================
          1. HERO — DARK CINEMATIC
      ======================================================== */}
      <section className="relative min-h-[88vh] flex items-center justify-center bg-[#0C1015] overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1015]/95 via-[#0C1015]/85 to-[#0C1015]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1015] via-transparent to-[#0C1015]/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/70 pointer-events-none" />

        <Container className="relative z-10 py-20 sm:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Top pill badge */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#C8A86B] animate-pulse" />
                <span>Showroom Auto Cluj-Napoca • Str. Plevnei 117</span>
              </div>
            </AnimatedSection>

            {/* Main Title */}
            <AnimatedSection>
              <h1 className="font-luxury text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Excelență Auto. <br />
                <span className="bg-gradient-to-r from-[#D8BA81] via-[#F4E8D1] to-[#C8A86B] bg-clip-text text-transparent">
                  Transparență Fără Compromis.
                </span>
              </h1>
            </AnimatedSection>

            {/* Subtitle */}
            <AnimatedSection>
              <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
                Descoperă selecția de autoturisme rulate premium verificate pe 150+ puncte, cu RAR efectuat, kilometraj garantat și finanțare pe loc.
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link 
                  to="/masini-disponibile" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-gradient-to-r from-[#C29D5D] via-[#D8BA81] to-[#C29D5D] text-[#0F1318] hover:brightness-110 shadow-[0_15px_30px_-10px_rgba(200,168,107,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Car className="w-5 h-5" />
                  <span>Vezi Mașinile Disponibile</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <a 
                  href="tel:0752228593" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-[#D8BA81]" />
                  <span>Sună la Showroom</span>
                </a>
              </div>
            </AnimatedSection>

            {/* Trust Highlights Row */}
            <AnimatedSection>
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A86B] shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">100% RAR Efectuat</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A86B] shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">Garanție Extinsă Defend</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A86B] shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">Km Certificați pe Factură</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#C8A86B] shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">Finanțare Rapidă 24h</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ========================================================
          2. STOC AUTO — PREMIUM LIGHT SHOWROOM (WARM IVORY)
      ======================================================== */}
      <section className="py-24 bg-[#F5F2EB] text-[#141921] border-b border-[#E3DDD1] relative">
        <Container>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <AnimatedSection className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E2D5] text-[#524430] text-xs font-semibold tracking-wider uppercase">
                <Car className="w-3.5 h-3.5 text-[#B88E4B]" />
                Showroom Cluj-Napoca
              </div>
              <h2 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141921]">
                Ultimele Sosiri în Stoc
              </h2>
              <p className="text-[#55606E] text-base sm:text-lg">
                Fiecare vehicul este atent selecționat, inspectat tehnic și pregătit pentru predare imediată.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <Link 
                to="/masini-disponibile" 
                className="inline-flex items-center gap-2 text-sm font-bold text-[#141921] hover:text-[#B88E4B] transition-colors group"
              >
                <span>Explorează tot stocul disponibil</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#B88E4B]" />
              </Link>
            </AnimatedSection>
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
              listings.slice(0, 4).map((car) => (
                <CarCard key={car.id} listing={car} variant="light" />
              ))
            )}
          </div>

          {/* Bottom Callout */}
          <AnimatedSection className="text-center pt-6">
            <Link 
              to="/masini-disponibile" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-[#161B21] text-white hover:bg-[#C8A86B] hover:text-[#0F1318] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Vezi Toate Mașinile Disponibile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </Container>
      </section>

      {/* ========================================================
          3. AVANTAJE AWD AUTO — GRAPHITE DARK
      ======================================================== */}
      <section className="py-24 bg-[#141921] text-white relative overflow-hidden border-b border-white/5">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#C8A86B]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D8BA81] text-xs font-semibold tracking-wider uppercase border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              Standardul AWD Auto
            </div>

            <h2 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              De Ce Clienții Aleg AWD Auto
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Achiziția unei mașini rulate trebuie să ofere aceeași siguranță și încântare ca un automobil nou. Iată pilonii garantați pentru fiecare client.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <StaggeredItem key={index}>
                <div className="h-full bg-[#1A202A] border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-[#C8A86B]/50 transition-all duration-300 group hover:-translate-y-1">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D8BA81] group-hover:bg-[#C8A86B] group-hover:text-[#0F1318] transition-colors duration-300">
                        <pillar.icon className="w-6 h-6" />
                      </div>
                      <span className="font-luxury text-xs font-bold text-slate-500 tracking-wider">
                        {pillar.num}
                      </span>
                    </div>

                    <h3 className="font-luxury text-xl font-bold text-white group-hover:text-[#D8BA81] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-1.5 text-xs font-semibold text-[#D8BA81] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Află mai multe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </Container>
      </section>

      {/* ========================================================
          4. FINANȚARE ȘI PARTENERI — SOPHISTICATED LIGHT (SILVER MIST)
      ======================================================== */}
      <section className="py-24 bg-[#E8ECEF] text-[#141921] border-b border-[#D8DFE4]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE2E7] text-[#344050] text-xs font-semibold tracking-wider uppercase">
                <BadgePercent className="w-3.5 h-3.5 text-[#B88E4B]" />
                Soluții Financiare Flexibile
              </div>

              <h2 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141921] leading-tight">
                Finanțare Auto pe Loc. <br />
                <span className="text-[#B88E4B]">Fără Bătăi de Cap.</span>
              </h2>

              <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed">
                Colaborăm direct cu cele mai renumite instituții financiare pentru a-ți asigura cele mai avantajoase condiții de credit auto sau leasing financiar. Aprobare rapidă, avans de la 0% și rate fixe în lei sau euro.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#D5DCE2] shadow-sm">
                  <h4 className="font-luxury font-bold text-base text-[#141921] mb-1">Persoane Fizice</h4>
                  <p className="text-xs text-[#5D6B7C]">Credit auto doar cu buletinul, venituri declarate ANAF, rate fixe pe toată perioada.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#D5DCE2] shadow-sm">
                  <h4 className="font-luxury font-bold text-base text-[#141921] mb-1">Persoane Juridice</h4>
                  <p className="text-xs text-[#5D6B7C]">Leasing financiar deductibil, avans flexibil, finanțare inclusiv pentru firme noi.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link 
                  to="/finantare" 
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#161B21] text-white hover:bg-[#C8A86B] hover:text-[#0F1318] transition-all duration-300 shadow-md"
                >
                  <span>Calculează Rata Estimată</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/masini-la-comanda" 
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-white border border-[#CCD4DC] text-[#141921] hover:bg-[#F0F3F6] transition-all duration-300"
                >
                  <span>Mașini la Comandă</span>
                </Link>
              </div>
            </div>

            {/* Right Card with Banking Partners */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 border border-[#D2DCE3] shadow-[0_20px_50px_-15px_rgba(20,30,45,0.08)] space-y-6">
                <h3 className="font-luxury font-bold text-xl text-[#141921] pb-2 border-b border-[#E8EEF2]">
                  Parteneri Financiari Oficiali
                </h3>

                <div className="space-y-4">
                  {/* UniCredit */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#F6F8FA] border border-[#E3E8EC]">
                    <img 
                      src={uniCreditLogo} 
                      alt="UniCredit Bank" 
                      className="h-9 w-auto object-contain max-w-[150px]" 
                    />
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#E8EEF2] text-[#334155]">
                      Leasing & Credit
                    </span>
                  </div>

                  {/* BT Direct */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#F6F8FA] border border-[#E3E8EC]">
                    <img 
                      src={btDirectLogo} 
                      alt="BT Direct" 
                      className="h-8 w-auto object-contain max-w-[140px]" 
                    />
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#E8EEF2] text-[#334155]">
                      Credit Rapid
                    </span>
                  </div>

                  {/* TBI Bank */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#F6F8FA] border border-[#E3E8EC]">
                    <img 
                      src={tbiLogo} 
                      alt="TBI Bank" 
                      className="h-8 w-auto object-contain max-w-[130px]" 
                    />
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#E8EEF2] text-[#334155]">
                      Rate Online
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#EAF0F6] border border-[#D5E1EC] flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#2A6496] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#2A4365] leading-relaxed">
                    Îți oferim asistență completă pentru dosarul de finanțare, fără deplasări suplimentare la bănci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          5. MAȘINI VÂNDUTE — DARK AUTOMOTIVE GALLERY
      ======================================================== */}
      <section className="py-24 bg-[#0F1318] text-white border-b border-white/5">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <AnimatedSection className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D8BA81] text-xs font-semibold tracking-wider uppercase border border-white/10">
                <Car className="w-3.5 h-3.5" />
                Portofoliu AWD Auto
              </div>
              <h2 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
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

              <h2 className="font-luxury text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
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
                    <h4 className="font-luxury font-bold text-sm text-white">Adresă Showroom</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Strada Plevnei 117, Cluj-Napoca, 400394</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C8A86B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-luxury font-bold text-sm text-white">Program de Lucru</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Luni - Vineri: 09:00 - 18:00<br />Sâmbătă: 09:00 - 14:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C8A86B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-luxury font-bold text-sm text-white">Contact Vânzări</h4>
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-gradient-to-r from-[#C29D5D] via-[#D8BA81] to-[#C29D5D] text-[#0F1318] hover:brightness-110 shadow-lg transition-all duration-300"
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
