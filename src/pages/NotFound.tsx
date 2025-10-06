import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-luxury-dark">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="mb-4 text-6xl font-bold text-luxury-gold">404</h1>
        <p className="mb-6 text-xl text-luxury-silver">Oops! Pagina nu a fost găsită</p>
        <p className="mb-8 text-muted-foreground">
          Pagina pe care o căutați nu există sau a fost mutată.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-luxury-gold text-luxury-dark font-semibold rounded-xl hover:bg-luxury-gold-hover transition-colors"
        >
          Înapoi Acasă
        </a>
      </div>
    </div>
  );
};

export default NotFound;
