import { useState, useEffect } from 'react';

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


const useListings = (activeFilters: Record<string, any>, page: number = 1) => {
  const [listings, setListings] = useState<APIListing[]>([]);
  const [pagination, setPagination] = useState<PaginationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const businessId = "cmg5ligro0175s52cn0jimm7s";
        const categoryId = "cmg5m9pkm017bs52coh75y43d";
        
        const params = new URLSearchParams({
          businessId,
          categoryId,
          page: page.toString(), // Adăugăm numărul paginii
          limit: '9' // Setăm o limită, de exemplu 9 anunturi pe pagina
        });

        // Verificăm dacă activeFilters este un obiect valid și nu este gol
        if (activeFilters && typeof activeFilters === 'object' && Object.keys(activeFilters).length > 0) {
          for (const key in activeFilters) {
            const value = activeFilters[key];
            if (Array.isArray(value) && value.length > 0) {
              value.forEach(v => params.append(key, v));
            } else if (value !== undefined && value !== null && value !== '' && !Array.isArray(value)) {
              params.append(key, value.toString());
            }
          }
        }
        
        const url = `https://saas-platform-backend.onrender.com/api/public/listings/search?${params.toString()}`;
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
  }, [activeFilters, page]);

  return { listings, pagination, loading, error };
};

export default useListings;
