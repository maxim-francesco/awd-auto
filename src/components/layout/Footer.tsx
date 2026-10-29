"use client"

import { Link } from "react-router-dom"
import { Facebook, Instagram, Phone, Mail, MapPin, ShieldCheck, Clock } from "lucide-react"
import awdLogo from "@/assets/awd_final.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0D12] text-slate-300 border-t border-white/10">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Brand & Identity */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={awdLogo} 
                alt="AWD Auto Logo" 
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Showroom auto dedicat calității și transparenței în Cluj-Napoca. Autoturisme rulate premium verificate tehnic, cu kilometraj garantat contractual și garanție inclusă.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1 border-t border-white/5 pt-3">
              <p className="font-semibold text-slate-400">AWD Auto Trade SRL</p>
              <p>Sediul social: Cluj-Napoca, Str. Beclean Nr. 3, Ap. 1</p>
              <p>J12/306/2022 • CUI: RO45508352</p>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="space-y-4">
            <h3 className="font-luxury font-bold text-base text-white tracking-wide uppercase">
              Navigare Rapidă
            </h3>
            <nav className="flex flex-col space-y-2.5 text-sm">
              <Link to="/" className="text-slate-400 hover:text-[#D8BA81] transition-colors">
                Acasă
              </Link>
              <Link to="/masini-disponibile" className="text-slate-400 hover:text-[#D8BA81] transition-colors">
                Mașini Disponibile în Stoc
              </Link>
              <Link to="/masini-la-comanda" className="text-slate-400 hover:text-[#D8BA81] transition-colors">
                Consultanță Mașini la Comandă
              </Link>
              <Link to="/finantare" className="text-slate-400 hover:text-[#D8BA81] transition-colors">
                Finanțare Auto & Leasing
              </Link>
              <Link to="/beneficii-si-garantie" className="text-slate-400 hover:text-[#D8BA81] transition-colors">
                Garanție Extinsă Defend
              </Link>
              <Link to="/masini-vandute" className="text-slate-400 hover:text-[#D8BA81] transition-colors">
                Portofoliu Mașini Vândute
              </Link>
              <Link to="/despre-noi" className="text-slate-400 hover:text-[#D8BA81] transition-colors">
                Despre Showroom
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-[#D8BA81] transition-colors">
                Contact & Program
              </Link>
            </nav>
          </div>

          {/* Column 3 - Contact & Schedule */}
          <div className="space-y-4">
            <h3 className="font-luxury font-bold text-base text-white tracking-wide uppercase">
              Showroom & Contact
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="h-4 w-4 text-[#C8A86B] flex-shrink-0 mt-0.5" />
                <span>Strada Plevnei 117, Cluj-Napoca, 400394</span>
              </div>

              <div className="flex items-start space-x-3 text-slate-300">
                <Clock className="h-4 w-4 text-[#C8A86B] flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p><span className="text-white font-medium">Luni - Vineri:</span> 09:00 - 18:00</p>
                  <p><span className="text-white font-medium">Sâmbătă:</span> 09:00 - 14:00</p>
                  <p><span className="text-slate-500">Duminică:</span> Închis</p>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <a href="tel:0752228593" className="flex items-center space-x-2 text-slate-300 hover:text-[#D8BA81] transition-colors">
                  <Phone className="h-4 w-4 text-[#C8A86B]" />
                  <span className="font-medium">0752 228 593</span>
                </a>
                <a href="tel:0752575616" className="flex items-center space-x-2 text-slate-300 hover:text-[#D8BA81] transition-colors">
                  <Phone className="h-4 w-4 text-[#C8A86B]" />
                  <span className="font-medium">0752 575 616</span>
                </a>
              </div>

              <a href="mailto:contact@awdauto.ro" className="flex items-center space-x-2 text-slate-300 hover:text-[#D8BA81] transition-colors">
                <Mail className="h-4 w-4 text-[#C8A86B]" />
                <span>contact@awdauto.ro</span>
              </a>
            </div>
          </div>

          {/* Column 4 - Legal & Trust */}
          <div className="space-y-4">
            <h3 className="font-luxury font-bold text-base text-white tracking-wide uppercase">
              Siguranță & Juridic
            </h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/termeni-conditii" className="text-slate-400 hover:text-[#D8BA81] transition-colors">
                Termeni și Condiții
              </Link>
              <Link to="/politica-confidentialitate" className="text-slate-400 hover:text-[#D8BA81] transition-colors">
                Politica de Confidențialitate
              </Link>
              <a 
                href="https://anpc.ro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#D8BA81] transition-colors"
              >
                Protecția Consumatorului (ANPC)
              </a>
            </div>

            <div className="pt-3">
              <p className="text-xs text-slate-400 mb-2 font-medium">Urmărește activitatea noastră:</p>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=100063581410840" 
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#C8A86B] hover:text-[#0F1318] transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook AWD Auto"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com" 
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#C8A86B] hover:text-[#0F1318] transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram AWD Auto"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} AWD Auto Trade SRL. Toate drepturile rezervate.</p>
          <div className="flex items-center gap-2">
            <span>Dezvoltat de</span>
            <a 
              href="https://prezentareauto.maximfrancesco.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium text-slate-300 hover:text-[#D8BA81] transition-colors"
            >
              Maxim Francesco
            </a>
            <span>|</span>
            <a href="tel:+40783117797" className="hover:text-[#D8BA81] transition-colors">
              +40 783 117 797
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
