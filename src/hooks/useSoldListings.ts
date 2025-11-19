import { useState, useEffect } from 'react';
import type { APIListing } from './useListings'; // Reusing the type from existing hooks

const useSoldListings = (limit: number = 4) => {
  const [soldListings, setSoldListings] = useState<APIListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSoldListings = async () => {
      try {
        setLoading(true);
        setError(null);
        const businessId = "cmg5ligro0175s52cn0jimm7s";
        
        const url = `https://saas-platform-backend.onrender.com/api/public/listings/status/sold?businessId=${businessId}&limit=${limit}`;
        console.log("Fetching from:", url); // Keep for debug

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response Data:", result); // Keep for debug

        // ROBUST DATA HANDLING:
        if (result && Array.isArray(result.data)) {
          // Handle case where data is wrapped in a 'data' property
          setSoldListings(result.data);
        } else if (Array.isArray(result)) {
           // Handle case where API returns a direct array
          setSoldListings(result);
        } else {
          console.warn("Unexpected data format received:", result);
          setSoldListings([]); // Fallback to empty array
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
