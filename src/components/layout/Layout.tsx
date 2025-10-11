"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import awdLogo from "@/assets/awd-auto-logo.jpg"
import CookieConsent from "react-cookie-consent"
import { useState, useEffect } from "react"


interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
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
      {isMounted && (
        <CookieConsent
          buttonText="Acceptă"
          declineButtonText="Refuză"
          cookieName="awdAutoCookieConsent"
          expires={150}
          enableDeclineButton

          overlay
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}

          style={{ zIndex: 1000 }}

          contentStyle={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#1c1c1c',
            padding: '2rem',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            border: '1px solid #333',
            textAlign: 'center'
          }}

          buttonStyle={{ 
            position: 'relative',
            width: '100%',
            color: "#1c1c1c", 
            fontSize: "14px", 
            fontWeight: "bold",
            background: "#fde047", 
            borderRadius: "8px",
            padding: "12px 24px",
            marginTop: '1.5rem'
          }}
          declineButtonStyle={{
            position: 'relative',
            width: '100%',
            background: '#333',
            color: '#fff',
            fontSize: "14px", 
            fontWeight: "bold",
            borderRadius: "8px",
            padding: "12px 24px",
            marginTop: '0.5rem',
            margin: '0'
          }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
            Confidențialitatea ta este importantă pentru noi
          </h3>
          <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.5' }}>
            Acest site folosește cookie-uri pentru a îmbunătăți experiența. Prin acceptarea acestora, ne permiți să îți oferim un conținut mai relevant. Poți afla mai multe în{" "}
            <a href="/politica-confidentialitate" style={{ color: "#fde047", textDecoration: "underline" }}>
              Politica noastră de Confidențialitate
            </a>.
          </p>
        </CookieConsent>
      )}
    </div>
  )
}

export default Layout
