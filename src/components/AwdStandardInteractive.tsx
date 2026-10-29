"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, FileCheck, Award, Zap, CheckCircle2, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface StandardStation {
  id: string
  number: string
  title: string
  badge: string
  shortDesc: string
  fullDescription: string
  highlights: string[]
  stats: { value: string; label: string }
  image: string
  tagline: string
}

const STATIONS: StandardStation[] = [
  {
    id: "inspectie",
    number: "01",
    title: "Inspecție Riguroasă 150+ Puncte",
    badge: "Control Tehnic Multi-Punct",
    shortDesc: "Diagnoză computerizată completă, verificarea trenului de rulare, a motorului și a elementelor de siguranță activă.",
    fullDescription:
      "Fiecare automobil care intră în showroom-ul AWD Auto parcurge o procedură tehnică exhaustivă. De la compresie și parametri motor până la geometria direcției și integritatea structurală, nicio mașină nu este pusă în vânzare fără avizul tehnic favorabil.",
    highlights: [
      "Diagnoză electronică completă pentru toți parametrii OBD",
      "Verificare suspensie, frânare și componente de siguranță",
      "Inspecție structurală a caroseriei fără daune majore",
      "Test drive dinamic extins înainte de expunere"
    ],
    stats: { value: "150+", label: "Puncte verificate minuțios" },
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80",
    tagline: "Standardul ingineresc aplicat fiecărui vehicul din stoc."
  },
  {
    id: "legal",
    number: "02",
    title: "RAR Efectuat & Kilometraj Certificat",
    badge: "Certificare & Conformitate",
    shortDesc: "Cartea de Identitate a Vehiculului (CIV) eliberată, inspecție tehnică periodică validă și rulaj asumat pe factură.",
    fullDescription:
      "Eliminăm birocrația și incertitudinea. Toate autovehiculele noastre dețin documentația completă pregătită pentru înmatricularea imediată, iar istoricul de rulaj este verificat în baze internaționale și trecut explicit pe factura fiscală.",
    highlights: [
      "CIV (Cartea de Identitate a Vehiculului) emisă de R.A.R.",
      "Kilometri garantați juridic și menționați pe contract",
      "Verificare istoric daune și baze de date internaționale",
      "Dovada fiscală eliberată pe loc, fără datorii"
    ],
    stats: { value: "100%", label: "Transparență contractuală" },
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80",
    tagline: "Fără surprize administrative, gata de drum din prima zi."
  },
  {
    id: "garantie",
    number: "03",
    title: "Garanție Extinsă Defend până la 36 Luni",
    badge: "Siguranță Post-Vânzare",
    shortDesc: "Pachete premium de acoperire pentru cutie de viteze, motor, turbină și sisteme de injecție cu acoperire națională.",
    fullDescription:
      "Parteneriatul nostru oficial cu Defend Insurance îți asigură liniștea deplină la volan. Beneficiezi de acoperire în rețeaua autorizată la nivel național și european, inclusiv asistență rutieră dedicată.",
    highlights: [
      "Acoperire completă pentru motor și transmisie",
      "Valabilitate în orice service autorizat din România",
      "Asistență rutieră non-stop și opțiuni de mobilitate",
      "Flexibilitate: pachete de la 12 până la 36 de luni"
    ],
    stats: { value: "36", label: "Luni garanție maximă disponibilă" },
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    tagline: "Protecție financiară completă după momentul achiziției."
  },
  {
    id: "finantare",
    number: "04",
    title: "Finanțare Rapidă cu Aprobare în 24H",
    badge: "Soluții Leasing & Credit",
    shortDesc: "Condiții avantajoase pentru persoane fizice și juridice, rate fixe în lei sau euro, chiar și cu 0% avans.",
    fullDescription:
      "Consultantul financiar AWD Auto gestionează dosarul tău direct cu principalii parteneri bancari (BT Leasing, BCR, Idea Leasing, Porsche Bank, TBI Bank). Răspunsul pre-aprobat este primit de regulă în mai puțin de o zi lucrătoare.",
    highlights: [
      "Avans flexibil începând de la 0% pentru persoane fizice",
      "Dobânzi competitive și rate fixe pe toată perioada",
      "Procesare 100% online fără drumuri la bancă",
      "Acceptăm venituri din străinătate, diurne și contracte PFA"
    ],
    stats: { value: "24h", label: "Timp mediu de aprobare dosar" },
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80",
    tagline: "Acces facil și transparent la vehiculul dorit."
  }
]

export default function AwdStandardInteractive() {
  const [activeStationIndex, setActiveStationIndex] = useState(0)
  const currentStation = STATIONS[activeStationIndex]

  return (
    <section className="relative bg-[#0B0E14] text-white py-24 sm:py-32 overflow-hidden border-t border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C8A86B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A86B]/30 bg-[#C8A86B]/10 text-[#E5D5B8] text-xs font-bold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C8A86B]" />
            Experiența AWD Auto
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading">
            THE AWD STANDARD
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Nu vindem simple automobile. Oferim certitudini tehnice, transparență juridică și siguranță financiară pentru fiecare kilometru parcurs.
          </p>
        </div>

        {/* Stations Navigation Switcher (Desktop & Mobile Tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {STATIONS.map((station, idx) => {
            const isActive = idx === activeStationIndex
            return (
              <button
                key={station.id}
                onClick={() => setActiveStationIndex(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative ${
                  isActive
                    ? "bg-white/[0.08] border-[#C8A86B] shadow-[0_0_25px_rgba(200,168,107,0.15)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold tracking-wider ${
                      isActive ? "text-[#C8A86B]" : "text-slate-500"
                    }`}
                  >
                    PILON {station.number}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="w-2 h-2 rounded-full bg-[#C8A86B]"
                    />
                  )}
                </div>
                <h4
                  className={`text-sm sm:text-base font-bold transition-colors line-clamp-1 ${
                    isActive ? "text-white font-semibold" : "text-slate-300"
                  }`}
                >
                  {station.title.split(" ")[0]} {station.title.split(" ")[1]}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-1 mt-1 hidden sm:block">
                  {station.badge}
                </p>
              </button>
            )
          })}
        </div>

        {/* Interactive Station Showcase Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#121620] via-[#151A24] to-[#0D1016] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStation.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Visual Artwork & Live Stat Callout */}
              <div className="lg:col-span-6 relative order-2 lg:order-1">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <img
                    src={currentStation.image}
                    alt={currentStation.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-black/20" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-bold tracking-wide">
                      {currentStation.badge}
                    </span>
                  </div>

                  {/* Floating Stat Card */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/15">
                    <div className="text-3xl font-black text-[#C8A86B] tracking-tight">
                      {currentStation.stats.value}
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">
                      {currentStation.stats.label}
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-500 italic text-center sm:text-left">
                  {currentStation.tagline}
                </p>
              </div>

              {/* Right Column: Detailed Editorial & Highlights */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#C8A86B] uppercase">
                      STANDARDE DE CALITATE • ETAPA {currentStation.number}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {currentStation.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {currentStation.fullDescription}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Garanții operaționale incluse:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStation.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C8A86B] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/masini-disponibile"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C8A86B] text-[#0B0E14] font-bold text-sm hover:bg-[#d8b87b] transition-all shadow-lg"
                  >
                    <span>Descoperă Vehiculele Certificate</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/finantare"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-all"
                  >
                    <span>Calculator Finanțare</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
