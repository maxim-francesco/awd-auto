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
  price: number | null;
  createdAt: string;
  attributeValues: Attribute[];
  images: ListingImage[];
}

export interface ProcessedListing {
  id: string;
  title: string;
  price: number;
  createdAt: string;
  image: string;
  mileage: string;
  fuelType: string;
  engine: string;
}

const getAttributeValue = (attributes: Attribute[], name: string): string => {
  const attr = attributes.find(a => a.attribute.name.toLowerCase() === name.toLowerCase());
  if (!attr) return "N/A";
  
  if (attr.attribute.type === "NUMBER" && attr.numberValue !== undefined && attr.numberValue !== null) {
      return attr.numberValue.toString();
  }
  if (attr.attribute.type === "STRING" && attr.stringValue) {
      return attr.stringValue;
  }
  if (attr.attribute.type === "BOOLEAN" && attr.booleanValue !== undefined) {
      return attr.booleanValue ? "Da" : "Nu";
  }
  
  return "N/A";
};

const processListings = (listings: APIListing[]): ProcessedListing[] => {
  if (!listings) return [];
  return listings.map(listing => ({
    id: listing.id,
    title: listing.title,
    price: listing.price ?? 0,
    createdAt: listing.createdAt,
    image: listing.images?.[0]?.url || "https://via.placeholder.com/600x400.png?text=AWD+Auto",
    mileage: `${parseInt(getAttributeValue(listing.attributeValues, 'kilometraj')).toLocaleString()} km`,
    fuelType: getAttributeValue(listing.attributeValues, 'combustibil'),
    engine: `${getAttributeValue(listing.attributeValues, 'capacitate cilindrica')} cm³`,
  }));
};

const useListings = (activeFilters: Record<string, any>) => {
  const [listings, setListings] = useState<ProcessedListing[]>([]);
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
        });

        for (const key in activeFilters) {
          const value = activeFilters[key];
          if (Array.isArray(value) && value.length > 0) {
            value.forEach(v => params.append(key, v));
          } else if (value !== undefined && value !== null && value !== '' && !Array.isArray(value)) {
            params.append(key, value);
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
        
        const processed = processListings(rawListings);

        setListings(processed);
      } catch (e: any) {
        setError(e);
        console.error("Failed to fetch listings:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [activeFilters]);

  return { listings, loading, error };
};

export default useListings;
