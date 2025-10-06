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
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <img 
              src={awdLogo} 
              alt="AWD Auto" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Excelență în performanță. Eleganță în design. AWD Auto vă oferă cele mai premium mașini sport și de lux.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-luxury font-semibold text-luxury-gold">Link-uri Utile</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                Acasă
              </Link>
              <Link to="/masini-disponibile" className="text-muted-foreground hover:text-luxury-gold transition-colors text-sm">
                Mașini Disponibile
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

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-luxury font-semibold text-luxury-gold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Strada Automobilului 123, București, România
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  +40 21 123 4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  contact@awdauto.ro
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-luxury font-semibold text-luxury-gold">Urmărește-ne</h3>
            <div className="flex space-x-4">
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

        {/* Copyright & Legal Links */}
        <div className="mt-8 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-muted-foreground text-sm">
              © {currentYear} AWD Auto. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link to="/termeni-conditii" className="hover:text-luxury-gold transition-colors">
                Termeni și Condiții
              </Link>
              <span>|</span>
              <Link to="/politica-confidentialitate" className="hover:text-luxury-gold transition-colors">
                Politica de Confidențialitate
              </Link>
              <span>|</span>
              <a 
                href="https://anpc.ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors"
              >
                ANPC
              </a>
            </div>
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
