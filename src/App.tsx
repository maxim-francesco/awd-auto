
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CarListings from "./pages/CarListings";
import CarDetails from "./pages/CarDetails";
import Finantare from "./pages/Finantare";
import DespreNoi from "./pages/DespreNoi";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/utils/ScrollToTop";
import MasiniLaComanda from "./pages/MasiniLaComanda";
import TermeniConditii from "./pages/TermeniConditii";
import PoliticaConfidentialitate from "./pages/PoliticaConfidentialitate";
import CookieConsentModal from "./components/CookieConsentModal";
import BenefitsWarrantyPage from "./pages/BenefitsWarrantyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieConsentModal />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/masini-disponibile" element={<CarListings />} />
          <Route path="/masini-disponibile/:listingId" element={<CarDetails />} />
          <Route path="/masini-la-comanda" element={<MasiniLaComanda />} />
          <Route path="/finantare" element={<Finantare />} />
          <Route path="/beneficii-si-garantie" element={<BenefitsWarrantyPage />} />
          <Route path="/despre-noi" element={<DespreNoi />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termeni-conditii" element={<TermeniConditii />} />
          <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
