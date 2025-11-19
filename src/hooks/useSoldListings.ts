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
        console.log("Fetching sold listings...");
        const businessId = "cmg5ligro0175s52cn0jimm7s";
        
        const url = `https://saas-platform-backend.onrender.com/api/public/listings/status/sold?businessId=${businessId}&limit=${limit}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok while fetching sold listings');
        }

        const result = await response.json();
        console.log("Sold listings response:", result); // <-- Check this in console

        // API returns an object like { data: [...] }
        if (result && Array.isArray(result.data)) {
          setSoldListings(result.data);
        } else {
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
