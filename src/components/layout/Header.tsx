"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import awdLogo from "@/assets/awd_final.png"
import { Menu, X, Phone, Sparkles, MapPin } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30)
  })
  
  const isActive = (path: string) => location.pathname === path

  const navigation = [
    { name: "Acasă", href: "/" },
    { name: "Mașini Disponibile", href: "/masini-disponibile" },
    { name: "Mașini la Comandă", href: "/masini-la-comanda" },
    { name: "Finanțare", href: "/finantare" },
    { name: "Beneficii & Garanție", href: "/beneficii-si-garantie" },
    { name: "Despre Noi", href: "/despre-noi" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0D1117]/95 backdrop-blur-xl border-b border-white/10 shadow-xl' 
          : 'bg-[#0D1117]/90 backdrop-blur-md border-b border-white/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Luxury Announcement Strip */}
      <div className="bg-gradient-to-r from-[#141922] via-[#1E2530] to-[#141922] border-b border-white/5 py-1.5 px-4 text-xs">
        <div className="container mx-auto max-w-screen-2xl flex items-center justify-between text-slate-300">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C8A86B]/20 text-[#D8BA81] text-[11px] font-semibold">
              <Sparkles className="w-3 h-3" />
              Propunere Redesign
            </span>
            <span className="hidden sm:inline text-slate-400">
              AWD Auto Showroom Cluj-Napoca • Strada Plevnei 117
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:inline text-slate-400">L-V: 09:00 - 18:00</span>
            <a 
              href="tel:0752228593" 
              className="font-semibold text-[#D8BA81] hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>0752 228 593</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto flex h-20 items-center justify-between max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <img 
            src={awdLogo} 
            alt="AWD Auto" 
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold transition-all relative py-1.5 ${
                isActive(item.href)
                  ? "text-[#D8BA81]"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A86B] rounded-full"
                  layoutId="activeNav"
                  transition={{ duration: 0.2 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:0752228593"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide uppercase bg-gradient-to-r from-[#C29D5D] to-[#D8BA81] text-[#0F1318] hover:brightness-110 shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>0752 228 593</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="tel:0752228593"
            className="p-2.5 rounded-xl bg-white/10 text-[#D8BA81] sm:hidden"
            aria-label="Sună acum"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
            aria-label="Deschide meniul"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="bg-[#0D1117] border-t border-white/10 lg:hidden shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1 p-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-white/10 text-[#D8BA81] font-bold"
                    : "text-slate-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
              <a 
                href="tel:0752228593"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#C29D5D] to-[#D8BA81] text-[#0F1318]"
              >
                <Phone className="h-4 w-4"/>
                <span>Sună Dealer: 0752 228 593</span>
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#C8A86B]" />
                <span>Strada Plevnei 117, Cluj-Napoca</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </motion.header>
  )
}

export default Header
