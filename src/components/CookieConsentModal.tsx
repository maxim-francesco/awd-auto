import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CookieConsentModal = () => {
  const [showModal, setShowModal] = useState(false);

  // La prima încărcare, verificăm dacă cookie-ul de consimțământ NU există
  useEffect(() => {
    const consentCookie = Cookies.get('awdAutoCookieConsent');
    if (!consentCookie) {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    // Setăm cookie-ul să expire în 150 de zile
    Cookies.set('awdAutoCookieConsent', 'true', { expires: 150 });
    setShowModal(false);
  };

  const handleDecline = () => {
    Cookies.set('awdAutoCookieConsent', 'false', { expires: 150 });
    setShowModal(false);
  };

  // Dacă nu trebuie să arătăm modalul, nu randăm nimic
  if (!showModal) {
    return null;
  }

  return (
    // Overlay-ul care acoperă toată pagina
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]">
      {/* Containerul modalului, centrat */}
      <div className="bg-[#1c1c1c] text-white p-8 rounded-xl shadow-lg max-w-md w-[90%] text-center border border-gray-700">
        <h3 className="text-xl font-bold mb-4">
          Confidențialitatea ta este importantă pentru noi
        </h3>
        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
          Acest site folosește cookie-uri pentru a îmbunătăți experiența. Prin acceptarea acestora, ne permiți să îți oferim un conținut mai relevant. Poți afla mai multe în{" "}
          <Link to="/politica-confidentialitate" className="text-yellow-400 underline hover:text-yellow-300">
            Politica noastră de Confidențialitate
          </Link>.
        </p>

        {/* Containerul pentru butoane */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleDecline}
            className="w-full bg-[#333] hover:bg-[#444] text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Refuză
          </button>
          <button
            onClick={handleAccept}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Acceptă
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentModal;
