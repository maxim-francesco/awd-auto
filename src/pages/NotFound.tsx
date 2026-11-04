import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-deep text-white px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-fade pointer-events-none opacity-40" />
      <div className="text-center max-w-md mx-auto relative z-10">
        <span className="eyebrow mb-2">Eroare 404</span>
        <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-soft to-gold my-2 tracking-tight">
          404
        </h1>
        <p className="text-2xl font-bold text-white mb-2">
          Oops! Pagina nu a fost găsită
        </p>
        <p className="text-steel mb-8 text-sm leading-relaxed">
          Pagina pe care o căutați nu există sau a fost mutată.
        </p>
        <a 
          href="/" 
          className="btn-gold inline-flex items-center justify-center gap-2 text-ink-deep font-bold px-6 py-3 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Înapoi Acasă
        </a>
      </div>
    </div>
  );
};

export default NotFound;
