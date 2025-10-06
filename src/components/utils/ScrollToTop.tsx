import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extrage 'pathname' din locația curentă. 'pathname' este partea din URL de după domeniu (ex: /masini-disponibile)
  const { pathname } = useLocation();

  // Folosim un useEffect care se va rula de fiecare dată când 'pathname' se schimbă
  useEffect(() => {
    // Această comandă a browser-ului derulează fereastra la coordonatele (0, 0) - adică în colțul stânga-sus.
    window.scrollTo(0, 0);
  }, [pathname]); // Array-ul de dependențe asigură că efectul se declanșează doar la schimbarea paginii

  // Această componentă nu trebuie să afișeze nimic vizual
  return null;
};

export default ScrollToTop;
