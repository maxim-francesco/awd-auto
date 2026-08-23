import { useState, useEffect } from 'react';
import { API_BASE_URL, BUSINESS_ID } from '@/config/apiConfig';
import { buildFilterParams } from '@/lib/filterKeyMap';


// Tipuri partajate, ar putea fi mutate într-un fișier dedicat de tipuri
export interface ListingImage {
  url: string;
}

export interface Attribute {
  attribute: {
    name: string;
    type: string;
  };
  stringValue?: string;
  numberValue?: number;
  booleanValue?: boolean;
}

export interface APIListing {
  id: string;
  title: string;
  description: string;
  price: number | null;
  createdAt: string;
  status?: 'AVAILABLE' | 'SOLD'; // Added optional status
  youtubeVideoId?: string | null;
  attributeValues: Attribute[];
  images: ListingImage[];
}

// Interfață pentru obiectul de paginare returnat de API
export interface PaginationData {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}


const useListings = () => {
  const [listings, setListings] = useState<APIListing[]>([]);
  const [pagination, setPagination] = useState<PaginationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const businessId = BUSINESS_ID;
        const categoryId = "cmg5m9pkm017bs52coh75y43d";
        
        // The backend defaults to 10 listings if limit is absent.
        // This site performs filtering client-side over the entire catalog.
        // limit=200 is a ceiling for client-side filtering, not a hard guarantee.
        const params = new URLSearchParams({
          businessId,
          categoryId,
          limit: '200'
        });
        
        const url = `${API_BASE_URL}/api/public/listings/search?${params.toString()}`;
        console.log('%c URL Final apelat de hook:', 'color: blue; font-weight: bold;', url);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('%c Răspuns RAW de la server:', 'color: purple; font-weight: bold;', result);

        const rawListings: APIListing[] = result.data || [];
        
        setListings(rawListings);
        setPagination(result.pagination || null);

      } catch (e: any) {
        setError(e);
        console.error("Failed to fetch listings:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  return { listings, pagination, loading, error };
};

export default useListings;
