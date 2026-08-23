import { useState, useEffect } from 'react';
import { API_BASE_URL, BUSINESS_ID } from '@/config/apiConfig';


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

export interface ProcessedListing {
  id: string;
  title: string;
  price: number;
  createdAt: string; // Adăugat createdAt
  image: string;
  make: string;
  model: string;
  year: string;
  mileage: string;
  fuelType: string;
  engine: string;
}

const useLatestListings = () => {
  const [listings, setListings] = useState<APIListing[]>([]); // Changed to APIListing[]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLatestListings = async () => {
      try {
        setLoading(true);
        setError(null);
        const businessId = BUSINESS_ID;
        const categoryId = "cmg5m9pkm017bs52coh75y43d";
        const sortBy = "newest";
        const limit = 4;
        
        const url = `${API_BASE_URL}/api/public/listings/search?businessId=${businessId}&categoryId=${categoryId}&sortBy=${sortBy}&limit=${limit}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        const rawListings: APIListing[] = result.data || [];
        
        setListings(rawListings); // Set raw data
      } catch (e: any) {
        setError(e);
        console.error("Failed to fetch latest listings:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestListings();
  }, []);

  return { listings, loading, error };
};

export default useLatestListings;
