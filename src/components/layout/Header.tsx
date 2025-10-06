"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/luxury-button"
import { Link, useLocation } from "react-router-dom"
import awdLogo from "@/assets/awd-auto-logo.jpg"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })
  
  const isActive = (path: string) => location.pathname === path

  const navigation = [
    { name: "Acasă", href: "/" },
    { name: "Mașini Disponibile", href: "/masini-disponibile" },
    { name: "Finanțare", href: "/finantare" },
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
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={awdLogo} 
              alt="AWD Auto" 
              className="h-10 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <motion.div
              key={item.name}
              className="relative"
              whileHover="hover"
              initial="initial"
            >
              <Link
                to={item.href}
                className={`text-sm font-medium transition-colors relative ${
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

        {/* CTA Button */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button size="sm" asChild>
            <Link to="/contact">
              Contactează-ne
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header