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
    <header className="sticky top-0 z-50 w-full bg-ink-deep/95 backdrop-blur-md border-b border-ink-border transition-all duration-300">
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
          <nav className="hidden lg:flex items-center space-x-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-xs uppercase tracking-wider font-semibold transition-colors duration-200 py-2 ${
                  isActive(item.href)
                    ? "text-gold font-bold"
                    : "text-steel hover:text-white"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Contact / CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a 
              href="tel:0752228593" 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-xs font-semibold text-gold-soft hover:bg-gold/20 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>0752 228 593</span>
            </a>

            <Link
              to="/masini-disponibile"
              className="btn-gold hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-ink-deep transition-all"
            >
              <span>Vezi Stocul</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a 
              href="tel:0752228593" 
              className="p-2 rounded-lg border border-gold/30 bg-gold/10 text-gold sm:hidden"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-steel hover:text-white hover:bg-ink-raised transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gold" />
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
        <div className="lg:hidden bg-ink-deep border-b border-ink-border px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-gold/10 text-gold border-l-2 border-gold pl-4"
                  : "text-steel hover:bg-ink-raised hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-ink-border space-y-3">
            <a 
              href="tel:0752228593" 
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-gold/30 bg-gold/10 text-xs font-bold text-gold-soft"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>0752 228 593 / 0752 575 616</span>
            </a>

            <Link
              to="/masini-disponibile"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-gold flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-ink-deep"
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
