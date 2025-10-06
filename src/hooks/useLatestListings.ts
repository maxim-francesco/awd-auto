import { useState, useEffect } from 'react';

// Definirea tipurilor pentru a asigura siguranța datelor
interface ListingImage {
  url: string;
}

interface Attribute {
  attribute: {
    name: string;
    type: string;
  };
  stringValue?: string;
  numberValue?: number;
  booleanValue?: boolean;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  attributeValues: Attribute[];
  images: ListingImage[];
}

const useLatestListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLatestListings = async () => {
      try {
        setLoading(true);
        const businessId = "cmg5ligro0175s52cn0jimm7s";
        const categoryId = "cmg5m9pkm017bs52coh75y43d";
        const sortBy = "newest";
        const limit = 4;
        
        const url = `https://saas-platform-backend.onrender.com/api/public/listings/search?businessId=${businessId}&categoryId=${categoryId}&sortBy=${sortBy}&limit=${limit}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        
        // Conform analizei API, datele sunt în `result.data`
        setListings(result.data || []);
      } catch (e: any) {
        setError(e);
        console.error("Failed to fetch latest listings:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestListings();
  }, []); // Se execută o singură dată la montarea componentei

  return { listings, loading, error };
};

export default useLatestListings;
