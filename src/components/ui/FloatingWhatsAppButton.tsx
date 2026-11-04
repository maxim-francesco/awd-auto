import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/40752228593";

  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full p-3 sm:p-4 shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactează-ne pe WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
    </a>
  );
};

export default FloatingWhatsAppButton;
