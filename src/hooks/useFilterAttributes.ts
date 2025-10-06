import { useState, useEffect } from 'react';

export interface AttributeDefinition {
  id: string;
  name: string;
  type: 'STRING' | 'NUMBER' | 'BOOLEAN';
  categoryId: string;
}

const useFilterAttributes = () => {
  const [attributes, setAttributes] = useState<AttributeDefinition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAttributes = async () => {
      try {
        setLoading(true);
        setError(null);
        const categoryId = "cmg5m9pkm017bs52coh75y43d";
        const url = `https://saas-platform-backend.onrender.com/api/public/categories/${categoryId}/attributes`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result: AttributeDefinition[] = await response.json();
        
        // Filtrăm atributele pe care nu dorim să le afișăm ca filtre
        const hiddenAttributes = ['pret', 'price', 'kilometraj', 'capacitate cilindrica'];
        const filteredAttributes = result.filter(attr => !hiddenAttributes.includes(attr.name.toLowerCase()));
        
        setAttributes(filteredAttributes);
      } catch (e: any) {
        setError(e);
        console.error("Failed to fetch filter attributes:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchAttributes();
  }, []);

  return { attributes, loading, error };
};

export default useFilterAttributes;
