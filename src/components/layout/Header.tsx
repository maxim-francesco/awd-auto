"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import awdLogo from "@/assets/awd_final.png"
import { Menu, X, Phone, ArrowRight } from "lucide-react"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  
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
    <header className="sticky top-0 z-50 w-full bg-[#08090B] border-b border-white/[0.08] shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={awdLogo} 
              alt="AWD Auto" 
              className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-7 whitespace-nowrap">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-[11px] xl:text-xs uppercase tracking-wider font-semibold transition-colors duration-200 py-2 whitespace-nowrap ${
                  isActive(item.href)
                    ? "text-[#E8C46B] font-bold"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D9AC46] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Contact / CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a 
              href="tel:0752228593" 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9AC46]/35 bg-[#D9AC46]/10 text-xs font-semibold text-[#E8C46B] hover:bg-[#D9AC46]/20 hover:border-[#D9AC46]/60 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9AC46]" />
              <span>0752 228 593</span>
            </a>

            <Link
              to="/masini-disponibile"
              className="btn-gold hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-[#08090B] shadow-sm transition-all"
            >
              <span>Vezi Stocul</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a 
              href="tel:0752228593" 
              className="p-2 rounded-lg border border-[#D9AC46]/35 bg-[#D9AC46]/10 text-[#D9AC46] sm:hidden"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-[#16181C] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-[#D9AC46]" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Deschide meniul</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#08090B] border-b border-white/[0.08] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-[#D9AC46]/10 text-[#E8C46B] border-l-2 border-[#D9AC46] pl-4 font-bold"
                  : "text-white/75 hover:bg-[#16181C] hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-white/[0.08] space-y-3">
            <a 
              href="tel:0752228593" 
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-[#D9AC46]/35 bg-[#D9AC46]/10 text-xs font-bold text-[#E8C46B]"
            >
              <Phone className="w-4 h-4 text-[#D9AC46]" />
              <span>0752 228 593 / 0752 575 616</span>
            </a>

            <Link
              to="/masini-disponibile"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-gold flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#08090B]"
            >
              <span>Explorează Stocul</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
