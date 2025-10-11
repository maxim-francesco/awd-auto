"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"
import awdLogo from "@/assets/awd-auto-logo.jpg"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-luxury-darker border-t border-border/40">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coloana 1 - Despre */}
          <div className="space-y-4">
            <img 
              src={awdLogo} 
              alt="AWD Auto Logo" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              AWD Auto - Partenerul tău de încredere pentru achiziționarea mașinii perfecte. Calitate, transparență și servicii premium în Cluj-Napoca.
            </p>
          </div>

          {/* Coloana 2 - Linkuri Rapide */}
          <div className="space-y-4">
            <h3 className="font-luxury font-semibold text-luxury-gold">Link-uri Utile</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                Acasă
              </Link>
              <Link to="/masini-disponibile" className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                Mașini Disponibile
              </Link>
              <Link to="/masini-la-comanda" className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                Mașini la Comandă
              </Link>
              <Link to="/finantare" className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                Finanțare
              </Link>
              <Link to="/despre-noi" className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                Despre Noi
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Coloana 3 - Contact și Program */}
          <div className="space-y-4">
            <h3 className="font-luxury font-semibold text-luxury-gold">Contact și Program</h3>
            <div className="space-y-3">
              <a href="tel:0752228593" className="flex items-center space-x-3 group">
                <Phone className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                <span className="text-muted-foreground group-hover:text-luxury-gold text-sm transition-colors">
                  0752 228 593
                </span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Strada Exemplului, Cluj-Napoca
                </span>
              </div>
              <a href="mailto:contact@awdauto-cluj.ro" className="flex items-center space-x-3 group">
                <Mail className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                <span className="text-muted-foreground group-hover:text-luxury-gold text-sm transition-colors">
                  contact@awdauto-cluj.ro
                </span>
              </a>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">Luni - Vineri: 09:00 - 18:00</p>
                <p className="text-sm text-muted-foreground">Sâmbătă: 10:00 - 14:00</p>
                <p className="text-sm text-muted-foreground">Duminică: Închis</p>
              </div>
            </div>
          </div>

          {/* Coloana 4 - Juridic și Social Media */}
          <div className="space-y-4">
            <h3 className="font-luxury font-semibold text-luxury-gold">Legal și Social</h3>
            <div className="flex flex-col space-y-2">
               <Link to="/termeni-conditii" className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                Termeni și Condiții
              </Link>
              <Link to="/politica-confidentialitate" className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                Politica de Confidențialitate
              </Link>
              <a 
                href="https://anpc.ro/ce-este-sal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm"
              >
                Soluționarea litigiilor (ANPC)
              </a>
            </div>
            <div className="flex space-x-4 pt-4">
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-luxury-gold transition-colors"
                whileHover={{ scale: 1.1, color: "hsl(var(--luxury-gold))" }}
                transition={{ duration: 0.2 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-luxury-gold transition-colors"
                whileHover={{ scale: 1.1, color: "hsl(var(--luxury-gold))" }}
                transition={{ duration: 0.2 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Linia de Copyright și Credit */}
        <div className="mt-8 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-muted-foreground text-sm">
              © {currentYear} AWD Auto. Toate drepturile rezervate.
            </p>
          </div>
          <div className="text-center text-xs text-gray-400 mt-4">
            <p>
              Dezvoltat de <a href="https://www.instagram.com/francesco.maximm/" target="_blank" rel="noopener noreferrer" className="font-medium text-muted-foreground hover:text-luxury-gold transition-colors">Maxim Francesco</a>
              <span className="mx-2">|</span>
              <a href="tel:+40783117797" className="font-medium text-muted-foreground hover:text-luxury-gold transition-colors">+40783117797</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
