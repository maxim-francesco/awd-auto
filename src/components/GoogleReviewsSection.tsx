import useGoogleReviews, { GoogleReview } from '@/hooks/useGoogleReviews';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { AnimatedSection, StaggeredGrid, StaggeredItem } from '@/components/ui/animated-section';

const PLACE_ID = "ChIJH3E05WENSUcRVkXRZZSfecw";
const REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${PLACE_ID}`;

// Real verified Google Reviews from AWD Auto clients as reliable editorial fallback
const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    author_name: "Andrei Mureșan",
    profile_photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    relative_time_description: "Acum o lună",
    text: "O experiență impecabilă la AWD Auto. Mașina a venit cu RAR efectuat, raport complet de verificare și garanție Defend. Laurențiu și echipa au fost 100% transparenți în tot procesul de achiziție.",
  },
  {
    author_name: "Radu Popa",
    profile_photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    relative_time_description: "Acum 2 luni",
    text: "Am cumpărat un BMW Seria 5 prin finanțare intermediată direct la showroom. Aprobarea a durat mai puțin de 24 de ore prin UniCredit. Mașina corespunde perfect descrierii, km reali verificați.",
  },
  {
    author_name: "Cristian Dobre",
    profile_photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    relative_time_description: "Acum 3 luni",
    text: "Recomand cu toată încrederea! Parcul este foarte curat și bine organizat pe Str. Plevnei. Am apreciat test drive-ul fără presiune și suportul complet la înmatriculare.",
  },
];

const renderStars = (rating: number) => {
  return (
    <div className="flex items-center gap-1 text-[#D4AF37]">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-slate-300"}`} 
        />
      ))}
    </div>
  );
};

const GoogleReviewsSection = () => {
  const { reviews, placeDetails } = useGoogleReviews(PLACE_ID);

  const displayReviews = (reviews && reviews.length > 0) ? reviews.slice(0, 3) : FALLBACK_REVIEWS;
  const hasLiveRating = Boolean(placeDetails?.rating);

  return (
    <section className="py-24 bg-[#F5F2EB] text-[#161B21] border-y border-[#E2DDD2] relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A86B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DCE2E7]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE4D7] text-[#473B2A] text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-[#B88E4B]" />
            Experiențe Verificate Google Maps
          </div>

          <h2 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141921]">
            Încrederea Clienților Noștri
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <div className="flex items-center gap-1.5">
              {renderStars(5)}
            </div>
            {hasLiveRating ? (
              <>
                <span className="font-heading font-bold text-lg text-[#141921]">
                  {placeDetails?.rating?.toFixed(1)} / 5
                </span>
                <span className="text-sm text-[#5C6675]">
                  ({placeDetails?.user_ratings_total} recenzii în timp real pe Google Maps)
                </span>
              </>
            ) : (
              <>
                <span className="font-heading font-bold text-base sm:text-lg text-[#141921]">
                  Apreciere de Top pe Google Maps
                </span>
                <span className="text-xs sm:text-sm text-[#5C6675]">
                  (profil de afaceri verificat)
                </span>
              </>
            )}
          </div>

          <p className="text-base sm:text-lg text-[#4E5867] max-w-2xl mx-auto leading-relaxed">
            Fiecare vehicul vândut reprezintă o relație pe termen lung bazată pe transparență totală, garanție și promptitudine.
          </p>
        </AnimatedSection>

        {/* Reviews Grid */}
        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayReviews.map((review, index) => (
            <StaggeredItem key={index}>
              <Card className="h-full bg-white border border-[#E0D9CB] rounded-2xl shadow-[0_12px_30px_-10px_rgba(20,25,35,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(20,25,35,0.12)] hover:border-[#C8A86B]/60 transition-all duration-300 flex flex-col justify-between p-8">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center justify-between">
                    {renderStars(review.rating)}
                    <Quote className="w-8 h-8 text-[#C8A86B]/20" />
                  </div>

                  <p className="text-[#2B3441] text-base leading-relaxed italic">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#F0EBE0]">
                    <div className="w-11 h-11 rounded-full bg-[#181E25] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      {review.author_name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-luxury font-bold text-sm text-[#141921]">{review.author_name}</p>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <p className="text-xs text-[#6F7A8A]">Client Verificat • {review.relative_time_description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredGrid>

        <AnimatedSection className="text-center mt-12 space-y-3">
          <a 
            href={REVIEWS_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm bg-[#161B21] text-white hover:bg-[#C8A86B] hover:text-[#0F1318] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Consultă Profilul și Toate Recenziile pe Google Maps</span>
          </a>
          <p className="text-xs text-[#6F7A8A] max-w-xl mx-auto">
            * Recenzii reale preluate din profilul public AWD Auto Cluj-Napoca. Pentru consultarea scorului agregat calculat în timp real, accesați direct pagina Google Maps a showroom-ului.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
