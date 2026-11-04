import useGoogleReviews from '@/hooks/useGoogleReviews';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, StarHalf, AlertCircle } from 'lucide-react';
import { AnimatedSection, StaggeredGrid, StaggeredItem } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/luxury-button';

const PLACE_ID = "ChIJH3E05WENSUcRVkXRZZSfecw";
const REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${PLACE_ID}`;

// Helper function to render star ratings with Mivrus gold
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center text-gold">
      {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} fill="currentColor" size={18} />)}
      {halfStar && <StarHalf key="half" fill="currentColor" size={18} />}
      {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} size={18} className="text-border" />)}
    </div>
  );
};

const GoogleReviewsSection = () => {
  const { reviews, placeDetails, loading, error } = useGoogleReviews(PLACE_ID);
  const topReviews = reviews.slice(0, 5);

  return (
    <section className="py-16 lg:py-24 bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="eyebrow text-gold-contrast mb-3">Recenzii verificate</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Ce spun clienții noștri
          </h2>
          {placeDetails && (
            <p className="text-muted-foreground text-base sm:text-lg">
              Bazat pe {placeDetails.user_ratings_total} de recenzii cu o notă medie de {placeDetails.rating} din 5.
            </p>
          )}
        </AnimatedSection>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-12 w-12 rounded-full bg-muted" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-3/4 bg-muted" />
                    <Skeleton className="h-3 w-1/2 bg-muted" />
                  </div>
                </div>
                <Skeleton className="h-4 w-1/3 bg-muted" />
                <Skeleton className="h-16 w-full bg-muted" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 bg-red-50 p-6 rounded-xl border border-red-200">
            <AlertCircle className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold">Eroare la încărcare</h3>
            <p className="mt-1 text-sm text-red-700">{error}</p>
          </div>
        )}

        {!loading && !error && topReviews.length > 0 && (
          <>
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topReviews.map((review, index) => (
                <StaggeredItem key={index}>
                  <div className="group h-full flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-12 h-12 rounded-full object-cover border border-border"
                      />
                      <div>
                        <p className="font-bold text-foreground text-base leading-snug">{review.author_name}</p>
                        <p className="text-xs text-muted-foreground">{review.relative_time_description}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-foreground/85 text-sm leading-relaxed italic flex-grow">
                      "{review.text}"
                    </p>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredGrid>

            <AnimatedSection className="text-center mt-12">
              <Button asChild variant="outline" className="btn-outline-dark min-w-48 font-bold">
                <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                  Vezi toate recenziile
                </a>
              </Button>
            </AnimatedSection>
          </>
        )}
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
