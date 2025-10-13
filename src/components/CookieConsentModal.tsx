import { useState } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CookieConsentModal = () => {
  // THE KEY CHANGE:
  // We read the cookie immediately and initialize the state based on its presence.
  // If the cookie exists, `!Cookies.get(...)` will be `false`.
  // If the cookie does NOT exist, `!Cookies.get(...)` will be `true`.
  // This is more direct and avoids lifecycle issues.
  const [showModal, setShowModal] = useState(!Cookies.get('awdAutoCookieConsent'));

  const handleAccept = () => {
    // Set the cookie to remember the choice for 150 days.
    Cookies.set('awdAutoCookieConsent', 'accepted', { expires: 150 });
    // Hide the modal by updating the state.
    setShowModal(false);
  };

  const handleDecline = () => {
    // We still set a cookie to remember the 'decline' choice.
    Cookies.set('awdAutoCookieConsent', 'declined', { expires: 150 });
    // Hide the modal by updating the state.
    setShowModal(false);
  };

  // If the state is false (either from initialization or after a click), render nothing.
  if (!showModal) {
    return null;
  }

  // Otherwise, render the modal.
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]">
      <div className="bg-[#1c1c1c] text-white p-8 rounded-xl shadow-lg max-w-md w-[90%] text-center border border-gray-700">
        <h3 className="text-xl font-bold mb-4">
          Confidențialitatea ta este importantă pentru noi
        </h3>
        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
          Acest site folosește cookie-uri pentru a îmbunătăți experiența. Prin acceptarea acestora, ne permiți să îți oferim un conținut mai relevant. Poți afla mai multe în{" "}
          <Link to="/politica-confidentialitate" className="text-luxury-gold underline hover:text-luxury-gold-hover">
            Politica noastră de Confidențialitate
          </Link>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleDecline}
            className="w-full bg-[#333] hover:bg-[#444] text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Refuză
          </button>
          <button
            onClick={handleAccept}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Acceptă
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentModal;
