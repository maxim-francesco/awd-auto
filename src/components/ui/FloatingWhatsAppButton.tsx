import React from 'react';

const WhatsAppIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.04 2C6.58 2 2.13 6.45 2.13 12C2.13 13.8 2.63 15.51 3.51 16.98L2.54 21.5L7.18 20.53C8.61 21.33 10.27 21.79 12.04 21.79C17.5 21.79 21.95 17.34 21.95 11.79C21.95 6.24 17.5 2 12.04 2ZM17.15 14.47C16.89 15.04 15.93 15.58 15.34 15.77C14.86 15.93 14.28 16.03 12.78 15.5C10.97 14.85 9.61 13.21 9.49 13.06C9.37 12.91 8.24 11.66 8.24 10.3C8.24 8.94 8.87 8.35 9.12 8.1C9.37 7.85 9.69 7.79 9.94 7.79C10.19 7.79 10.42 7.8 10.63 7.82C10.84 7.84 11.02 8.24 11.19 8.77C11.37 9.32 11.95 10.74 12.02 10.89C12.09 11.04 12.16 11.23 12.05 11.38C11.94 11.53 11.83 11.63 11.66 11.82C11.49 12.01 11.32 12.17 11.17 12.33C11.02 12.49 10.86 12.66 11.03 12.94C11.2 13.22 11.78 13.98 12.48 14.59C13.36 15.35 14.15 15.61 14.45 15.72C14.75 15.83 14.99 15.79 15.18 15.58C15.39 15.35 15.82 14.83 16.03 14.53C16.24 14.23 16.48 14.19 16.76 14.29C17.04 14.39 18.23 14.97 18.52 15.12C18.81 15.27 18.99 15.35 19.06 15.46C18.91 15.75 17.41 13.9 17.15 14.47Z"
    />
  </svg>
);


const FloatingWhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/40752228593";

  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactează-ne pe WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default FloatingWhatsAppButton;
