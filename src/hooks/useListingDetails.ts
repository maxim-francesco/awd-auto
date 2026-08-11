import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/config/apiConfig';

import type { APIListing, Attribute } from './useListings'; // Refolosim tipurile

const useListingDetails = (listingId: string | undefined) => {
  const [listing, setListing] = useState<APIListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Nu facem apelul dacă nu avem un ID
    if (!listingId) {
      setLoading(false);
      setError(new Error("ID-ul anunțului nu este specificat."));
      return;
    }

    const fetchListingDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const url = `${API_BASE_URL}/api/public/listings/${listingId}`;
        console.log(`%c Fetching details from: ${url}`, 'color: cyan');

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const rawListing: APIListing = await response.json();
        
        setListing(rawListing);

      } catch (e: any) {
        setError(e);
        console.error(`Failed to fetch listing details for id ${listingId}:`, e);
      } finally {
        setLoading(false);
      }
    };

    fetchListingDetails();
  }, [listingId]); // Hook-ul se re-apelează doar dacă listingId se schimbă

  return { listing, loading, error };
};

export default useListingDetails;
