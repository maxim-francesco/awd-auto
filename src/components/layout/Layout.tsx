"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import awdLogo from "@/assets/awd-auto-logo.jpg"


interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
       <FloatingWhatsApp
        phoneNumber="0752228593"
        accountName="AWD Auto"
        avatar={awdLogo}
        statusMessage="Online"
        chatMessage="Bună ziua! Aș dori mai multe informații despre..."
        placeholder="Scrie un mesaj..."
        allowClickAway
        notification
        notificationSound
      />
    </div>
  )
}

export default Layout
