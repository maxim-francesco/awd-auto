"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import awdLogo from "@/assets/awd-auto-logo.jpg"
import CookieConsent from "react-cookie-consent"


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
      <CookieConsent
        location="bottom"
        buttonText="Acceptă"
        declineButtonText="Refuză"
        cookieName="awdAutoCookieConsent"
        style={{ background: "#2B373B", borderTop: "1px solid #4a5559" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px", background: "#fde047", borderRadius: "8px" }}
        declineButtonStyle={{ margin: "10px 10px 10px 0", borderRadius: "8px" }}
        expires={150}
        enableDeclineButton
      >
        Acest site folosește cookie-uri pentru a îmbunătăți experiența utilizatorilor. Prin continuarea navigării, vă exprimați acordul cu folosirea acestora. Pentru mai multe detalii, vă rugăm să consultați{" "}
        <a href="/politica-confidentialitate" style={{ color: "#fde047", textDecoration: "underline" }}>
          Politica noastră de Confidențialitate
        </a>.
      </CookieConsent>
    </div>
  )
}

export default Layout
