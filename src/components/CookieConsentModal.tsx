import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CookieConsentModal = () => {
  // This state will control the visibility. Default to false.
  const [showModal, setShowModal] = useState(false);

  // This useEffect will run ONLY ONCE after the component mounts in the browser.
  useEffect(() => {
    // We check for the cookie here.
    const consentCookie = Cookies.get('awdAutoCookieConsent');

    // If the cookie does NOT exist, THEN we set the state to show the modal.
    if (!consentCookie) {
      setShowModal(true);
    }
  }, []); // The empty dependency array [] is crucial for this to run only once.

  const handleAccept = () => {
    // Set the cookie to expire in 150 days and hide the modal.
    Cookies.set('awdAutoCookieConsent', 'accepted', { expires: 150 });
    setShowModal(false);
  };

  const handleDecline = () => {
    // We still set a cookie to remember the user's choice and hide the modal.
    Cookies.set('awdAutoCookieConsent', 'declined', { expires: 150 });
    setShowModal(false);
  };

  // If the state tells us not to show the modal, we render nothing.
  if (!showModal) {
    return null;
  }

  // If we need to show the modal, we render the full JSX.
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]">
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