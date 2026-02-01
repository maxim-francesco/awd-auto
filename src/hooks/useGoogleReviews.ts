import { useState, useEffect } from 'react';

// Define the structure of a single Google Review
export interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

// Define the structure for the overall place details
interface PlaceDetails {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
}

// The API key is now read from an environment variable
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;

// Custom hook to fetch Google Reviews
const useGoogleReviews = (placeId: string) => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!API_KEY) {
        setError("Google Maps API key is missing.");
        setLoading(false);
        return;
    }

    if (window.google && window.google.maps && window.google.maps.places) {
      fetchReviews();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => fetchReviews();
      script.onerror = () => {
        setError("Failed to load Google Maps script.");
        setLoading(false);
      };
      document.head.appendChild(script);
    }
  }, [placeId]);

  const fetchReviews = () => {
    const mapDiv = document.createElement('div');
    document.body.appendChild(mapDiv);
    
    const service = new window.google.maps.places.PlacesService(mapDiv);
    
    service.getDetails({
      placeId: placeId,
      fields: ['reviews', 'rating', 'user_ratings_total'],
      language: 'ro'
    }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
        setReviews(place.reviews || []);
        setPlaceDetails({
            reviews: place.reviews || [],
            rating: place.rating || 0,
            user_ratings_total: place.user_ratings_total || 0
        });
        setLoading(false);
      } else {
        setError(`Failed to fetch reviews. Status: ${status}`);
        setLoading(false);
      }
      document.body.removeChild(mapDiv);
    });
  };

  return { reviews, placeDetails, loading, error };
};

export default useGoogleReviews;
