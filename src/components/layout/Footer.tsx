"use client"

import { Link } from "react-router-dom"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"
import awdLogo from "@/assets/awd_final.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink-deep border-t border-ink-border text-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coloana 1 - Despre */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={awdLogo} 
                alt="AWD Auto Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-steel text-sm leading-relaxed">
              AWD Auto - Partenerul tău de încredere pentru achiziționarea mașinii perfecte. Calitate, transparență și servicii premium în Cluj-Napoca.
            </p>
            <div className="pt-2 text-xs text-steel/80 space-y-1">
              <p className="text-white font-medium">AWD Auto Trade SRL</p>
              <p>Sediul social: Cluj-Napoca, Str. Beclean Nr. 3, Ap. 1</p>
              <p>J12/306/2022</p>
              <p>CUI: RO45508352</p>
            </div>
          </div>

          {/* Coloana 2 - Linkuri Rapide */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-gold">Link-uri Utile</h3>
            <nav className="flex flex-col space-y-2.5">
              <Link to="/" className="text-steel hover:text-white transition-colors text-sm">
                Acasă
              </Link>
              <Link to="/masini-disponibile" className="text-steel hover:text-white transition-colors text-sm">
                Mașini Disponibile
              </Link>
              <Link to="/masini-la-comanda" className="text-steel hover:text-white transition-colors text-sm">
                Mașini la Comandă
              </Link>
              <Link to="/finantare" className="text-steel hover:text-white transition-colors text-sm">
                Finanțare
              </Link>
              <Link to="/beneficii-si-garantie" className="text-steel hover:text-white transition-colors text-sm">
                Beneficii & Garanție
              </Link>
              <Link to="/despre-noi" className="text-steel hover:text-white transition-colors text-sm">
                Despre Noi
              </Link>
              <Link to="/contact" className="text-steel hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Coloana 3 - Contact și Program */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-gold">Contact și Program</h3>
            <div className="space-y-3">
              <a href="tel:0752228593" className="flex items-center space-x-3 group">
                <div className="p-1.5 rounded-md bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-steel group-hover:text-white text-sm transition-colors">
                  0752 228 593
                </span>
              </a>
              <a href="tel:0752575616" className="flex items-center space-x-3 group">
                <div className="p-1.5 rounded-md bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-steel group-hover:text-white text-sm transition-colors">
                  0752 575 616
                </span>
              </a>
              <div className="flex items-center space-x-3">
                <div className="p-1.5 rounded-md bg-gold/10 text-gold">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-steel text-sm">
                  Strada Plevnei 117, Cluj-Napoca, 400394
                </span>
              </div>
              <a href="mailto:contact@awdauto.ro" className="flex items-center space-x-3 group">
                <div className="p-1.5 rounded-md bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-steel group-hover:text-white text-sm transition-colors">
                  contact@awdauto.ro
                </span>
              </a>
              <div className="pt-2 text-xs text-steel/80 space-y-1 border-t border-ink-border">
                <p>Luni - Vineri: 09:00 - 18:00</p>
                <p>Sâmbătă: 09:00 - 14:00</p>
                <p>Duminică: Închis</p>
              </div>
            </div>
          </div>

          {/* Coloana 4 - Juridic și Social Media */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-gold">Legal și Social</h3>
            <div className="flex flex-col space-y-2.5">
              <Link to="/termeni-conditii" className="text-steel hover:text-white transition-colors text-sm">
                Termeni și Condiții
              </Link>
              <Link to="/politica-confidentialitate" className="text-steel hover:text-white transition-colors text-sm">
                Politica de Confidențialitate
              </Link>
              <a 
                href="https://anpc.ro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-steel hover:text-white transition-colors text-sm"
              >
                Soluționarea litigiilor (ANPC)
              </a>
            </div>
            <div className="flex space-x-3 pt-3">
              <a 
                href="https://www.facebook.com/profile.php?id=100063581410840" 
                className="p-2.5 rounded-lg border border-ink-border bg-ink-raised text-steel hover:text-gold hover:border-gold/40 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook AWD Auto"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2.5 rounded-lg border border-ink-border bg-ink-raised text-steel hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Instagram AWD Auto"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Linia de Copyright și Credit */}
        <div className="mt-12 pt-8 border-t border-ink-border text-center">
          <p className="text-xs text-steel">
            © {currentYear} AWD Auto. Toate drepturile rezervate.
          </p>
          <div className="text-[11px] text-steel/70 mt-2">
            <p>
              Dezvoltat de <a href="https://prezentareauto.maximfrancesco.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:text-gold transition-colors">Maxim Francesco</a>
              <span className="mx-2">|</span>
              <a href="tel:+40783117797" className="font-medium text-white hover:text-gold transition-colors">+40783117797</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
