import { useState, useEffect } from 'react';
import type { APIListing, Attribute } from './useListings'; // Refolosim tipurile

// Tip extins pentru detaliile complete ale mașinii
export interface ProcessedCarDetails extends Omit<APIListing, 'attributeValues'> {
    image: string;
    make: string;
    model: string;
    variant: string;
    year: string;
    mileage: string;
    fuelType: string;
    engine: string;
    power: string;
    transmission: string;
    features: string[];
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

// Functie pentru a extrage dotările. Presupunem că sunt atribute de tip BOOLEAN.
const getFeatures = (attributes: Attribute[]): string[] => {
    return attributes
        .filter(attr => attr.attribute.type === 'BOOLEAN' && attr.booleanValue === true)
        .map(attr => attr.attribute.name);
}

const useListingDetails = (listingId: string | undefined) => {
  const [listing, setListing] = useState<ProcessedCarDetails | null>(null);
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
        
        const url = `https://saas-platform-backend.onrender.com/api/public/listings/${listingId}`;
        console.log(`%c Fetching details from: ${url}`, 'color: cyan');

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const rawListing: APIListing = await response.json();
        
        // Procesăm datele brute într-un format prietenos pentru UI
        const processedDetails: ProcessedCarDetails = {
            id: rawListing.id,
            title: rawListing.title,
            description: rawListing.description,
            price: rawListing.price ?? 0,
            createdAt: rawListing.createdAt,
            images: rawListing.images,
            image: rawListing.images?.[0]?.url || "https://via.placeholder.com/1200x800.png?text=AWD+Auto",
            make: getAttributeValue(rawListing.attributeValues, 'marca'),
            model: getAttributeValue(rawListing.attributeValues, 'model'),
            variant: getAttributeValue(rawListing.attributeValues, 'model'), // Presupunem ca 'variant' e tot 'model'
            year: getAttributeValue(rawListing.attributeValues, 'an fabricatie'),
            mileage: `${parseInt(getAttributeValue(rawListing.attributeValues, 'kilometraj')).toLocaleString()} km`,
            fuelType: getAttributeValue(rawListing.attributeValues, 'combustibil'),
            engine: `${getAttributeValue(rawListing.attributeValues, 'capacitate cilindrica')} cm³`,
            power: `${getAttributeValue(rawListing.attributeValues, 'putere')} CP`,
            transmission: getAttributeValue(rawListing.attributeValues, 'transmisie'),
            features: getFeatures(rawListing.attributeValues)
        };
        
        setListing(processedDetails);

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
