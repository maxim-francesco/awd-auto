import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";
import type { AttributeDefinition } from "@/hooks/useFilterAttributes";
import { getAttributeStats } from "@/services/apiFilters";

interface NumberRangeFilterProps {
  attribute: AttributeDefinition;
  onChange: (attributeName: string, value: number | undefined) => void;
}

const NumberRangeFilter = ({ attribute, onChange }: NumberRangeFilterProps) => {
  const [stats, setStats] = useState<{ min: number; max: number } | null>(null);
  const [value, setValue] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await getAttributeStats(attribute.id);
        setStats(data);
        // Setăm valoarea inițială a slider-ului, dar NU apelăm onChange
        setValue(data.max);
      } catch (error) {
        console.error(`Failed to fetch stats for ${attribute.name}:`, error);
        setStats({ min: 0, max: 100 }); // Fallback
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [attribute.id, attribute.name]);
  
  if (loading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-4 w-2/5" />
        <Skeleton className="h-5 w-full" />
        <div className="flex justify-between">
          <Skeleton className="h-3 w-1/4" />
          <Skeleton className="h-3 w-1/4" />
        </div>
      </div>
    );
  }

  if (!stats) return null;

  const handleValueChange = (vals: number[]) => {
    const newValue = vals[0];
    setValue(newValue);
    // Apelăm onChange doar când utilizatorul interacționează cu slider-ul
    onChange(`${attribute.name.replace(/ /g, '_')}_max`, newValue);
  };

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium capitalize flex justify-between">
        <span>{attribute.name} (max)</span>
        {value !== undefined && <span className="text-luxury-gold font-semibold">{value.toLocaleString()}</span>}
      </Label>
      <Slider
        value={[value ?? stats.max]}
        onValueChange={handleValueChange}
        max={stats.max}
        min={stats.min}
        step={attribute.name.toLowerCase().includes('an') ? 1 : 1000}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{stats.min.toLocaleString()}</span>
        <span>{stats.max.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default NumberRangeFilter;
