import useGoogleReviews, { GoogleReview } from '@/hooks/useGoogleReviews';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, StarHalf, AlertCircle } from 'lucide-react';
import { AnimatedSection, StaggeredGrid, StaggeredItem } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/luxury-button';

// The Place ID remains here, but the API Key is now handled by the hook via environment variables.
const PLACE_ID = "ChIJH3E05WENSUcRVkXRZZSfecw";
const REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${PLACE_ID}`;

// Helper function to render star ratings
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center text-yellow-500">
      {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} fill="currentColor" size={20} />)}
      {halfStar && <StarHalf key="half" fill="currentColor" size={20} />}
      {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} size={20} />)}
    </div>
  );
};

const GoogleReviewsSection = () => {
  // The hook now only needs the Place ID, as the API key is sourced from the environment.
  const { reviews, placeDetails, loading, error } = useGoogleReviews(PLACE_ID);

  const topReviews = reviews.slice(0, 5);

  return (
    <section className="py-20 bg-luxury-darker">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce spun clienții noștri
          </h2>
          {placeDetails && (
            <p className="text-muted-foreground">
              Bazat pe {placeDetails.user_ratings_total} de recenzii cu o notă medie de {placeDetails.rating} din 5.
            </p>
          )}
        </AnimatedSection>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="luxury-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="ml-4 w-full">
                      <Skeleton className="h-5 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-1/4 mb-4" />
                  <Skeleton className="h-16 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 bg-red-500/10 p-6 rounded-lg border border-red-500/30">
            <AlertCircle className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">Eroare la încărcare</h3>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && topReviews.length > 0 && (
          <>
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topReviews.map((review, index) => (
                <StaggeredItem key={index}>
                  <Card className="luxury-card h-full flex flex-col">
                    <CardContent className="p-6 flex-grow">
                      <div className="flex items-center mb-4">
                        <img src={review.profile_photo_url} alt={review.author_name} className="w-12 h-12 rounded-full mr-4" />
                        <div>
                          <p className="font-bold text-foreground">{review.author_name}</p>
                          <p className="text-sm text-muted-foreground">{review.relative_time_description}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed italic">"{review.text}"</p>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </StaggeredGrid>

            <AnimatedSection className="text-center mt-12">
              <Button asChild variant="outline">
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
