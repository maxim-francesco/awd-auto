import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/config/apiConfig';


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
        const url = `${API_BASE_URL}/api/public/categories/${categoryId}/attributes`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result: AttributeDefinition[] = await response.json();
        
        const norm = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
        const filteredAttributes = result.filter(attr => {
          const n = norm(attr.name);
          // never-filters
          if (['link video', 'vin'].includes(n)) return false;
          // numeric: keep ONLY an + pret; drop kilometraj, capacitate cilindrica, putere (cp), and any other NUMBER
          if (attr.type === 'NUMBER') return n === 'an' || n === 'pret';
          // boolean: keep ONLY tva deductibil
          if (attr.type === 'BOOLEAN') return n === 'tva deductibil';
          // string: keep all remaining (marca, model, combustibil, cutie de viteze, tractiune, caroserie, norma de poluare, culoare, tara de origine)
          return true;
        });
        
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
