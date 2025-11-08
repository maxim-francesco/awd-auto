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
        
        // Atribute numerice care sunt gestionate separat (ex: prin range sliders)
        const numericHandledSeparately = ['pret', 'price', 'kilometraj', 'capacitate cilindrica', 'an'];
        
        const filteredAttributes = result.filter(attr => {
          const nameLower = attr.name.toLowerCase();

          // 1. Excludem atributele care nu trebuie să fie niciodată filtre
          if (nameLower === 'link video') {
            return false;
          }
          
          // 2. Excludem atributele numerice care sunt deja gestionate
          if (numericHandledSeparately.includes(nameLower)) {
              return ['an', 'pret'].includes(nameLower); // Păstrăm doar An și Preț ca filtre numerice de bază
          }

          // 3. Pentru atributele BOOLEAN, păstrăm doar 'TVA Deductibil'
          if (attr.type === 'BOOLEAN') {
            return nameLower === 'tva deductibil';
          }

          // 4. Păstrăm toate celelalte atribute (în principal STRING)
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
