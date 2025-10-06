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

interface APIListing {
  id: string;
  title: string;
  price: number;
  attributeValues: Attribute[];
  images: ListingImage[];
}

export interface ProcessedListing {
  id: string;
  title: string;
  price: number;
  image: string;
  make: string;
  model: string;
  year: string;
  mileage: string;
  fuelType: string;
  engine: string;
}

const getAttributeValue = (attributes: Attribute[], name: string): string => {
  const attr = attributes.find(a => a.attribute.name.toLowerCase() === name.toLowerCase());
  if (!attr) return "N/A";
  switch (attr.attribute.type) {
    case "STRING": return attr.stringValue || "N/A";
    case "NUMBER": return attr.numberValue?.toLocaleString() || "N/A";
    case "BOOLEAN": return attr.booleanValue ? "Da" : "Nu";
    default: return "N/A";
  }
};

const useLatestListings = () => {
  const [listings, setListings] = useState<ProcessedListing[]>([]);
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
        const rawListings: APIListing[] = result.data || [];
        
        // Procesăm datele pentru a se potrivi cu ce așteaptă CarCard
        const processed = rawListings.map(listing => ({
          id: listing.id,
          title: listing.title,
          price: listing.price,
          image: listing.images?.[0]?.url || "https://via.placeholder.com/600x400.png?text=AWD+Auto",
          make: getAttributeValue(listing.attributeValues, 'marca'),
          model: getAttributeValue(listing.attributeValues, 'model'),
          year: getAttributeValue(listing.attributeValues, 'an fabricatie'),
          mileage: `${parseInt(getAttributeValue(listing.attributeValues, 'kilometraj')).toLocaleString()} km`,
          fuelType: getAttributeValue(listing.attributeValues, 'combustibil'),
          engine: `${getAttributeValue(listing.attributeValues, 'capacitate cilindrica')} cm³`,
        }));

        setListings(processed);
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
