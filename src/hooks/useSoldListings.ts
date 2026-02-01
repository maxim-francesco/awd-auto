import { useState, useEffect } from 'react';
import type { APIListing } from './useListings';

// The hook now accepts an optional limit.
// If no limit is provided, it will fetch all sold listings.
const useSoldListings = (limit?: number) => {
  const [soldListings, setSoldListings] = useState<APIListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSoldListings = async () => {
      try {
        setLoading(true);
        setError(null);
        const businessId = "cmg5ligro0175s52cn0jimm7s";
        
        // Base URL
        let url = `https://saas-platform-backend.onrender.com/api/public/listings/status/sold?businessId=${businessId}`;

        // Conditionally add the limit parameter only if a limit is provided
        if (limit && limit > 0) {
          url += `&limit=${limit}`;
        }

        console.log("Fetching from:", url); // For debugging

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response Data:", result); // For debugging

        if (result && Array.isArray(result.data)) {
          setSoldListings(result.data);
        } else if (Array.isArray(result)) {
          setSoldListings(result);
        } else {
          console.warn("Unexpected data format received:", result);
          setSoldListings([]);
        }
        
      } catch (e: any) {
        console.error("Error fetching sold listings:", e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchSoldListings();
  }, [limit]);

  return { soldListings, loading, error };
};

export default useSoldListings;
