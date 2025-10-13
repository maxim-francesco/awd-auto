"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/luxury-button"
import { Link, useLocation } from "react-router-dom"
import awdLogo from "@/assets/awd-auto-logo.jpg"
import { Menu, X, Phone } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
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
      className={`sticky top-0 z-50 w-full border-b border-border/40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-luxury-darker/80 backdrop-blur-xl shadow-lg' 
          : 'bg-luxury-darker/95 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex h-16 lg:h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={awdLogo} 
              alt="AWD Auto" 
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navigation.map((item) => (
            <motion.div
              key={item.name}
              className="relative"
              whileHover="hover"
              initial="initial"
            >
              <Link
                to={item.href}
                className={`text-sm lg:text-base font-medium transition-colors relative ${
                  isActive(item.href)
                    ? "text-luxury-gold font-semibold"
                    : "text-foreground hover:text-luxury-gold"
                }`}
              >
                {item.name}
              </Link>
              <motion.div
                className="absolute -bottom-1 left-1/2 h-0.5 bg-luxury-gold"
                variants={{
                  initial: { width: isActive(item.href) ? "100%" : 0, x: "-50%" },
                  hover: { width: "100%", x: "-50%" }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:block"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button size="sm" className="lg:text-base lg:px-6 lg:py-3" asChild>
            <a href="tel:0752228593">
              <Phone className="h-4 w-4 mr-2"/>
              Sună-ne
            </a>
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none focus:ring-0"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground hover:text-foreground" /> : <Menu className="h-6 w-6 text-foreground hover:text-foreground" />}
            <span className="sr-only">Deschide meniul</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu Panel */}
      <div className={`absolute top-full left-0 w-full bg-luxury-darker z-40 border-t border-border transition-all duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col space-y-4 p-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium transition-colors ${
                isActive(item.href)
                  ? "text-luxury-gold"
                  : "text-foreground hover:text-luxury-gold"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="mt-4" asChild>
            <a href="tel:0752228593">
              <Phone className="h-4 w-4 mr-2"/>
              Sună-ne
            </a>
          </Button>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
