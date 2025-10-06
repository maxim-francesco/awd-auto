import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";
import type { AttributeDefinition } from "@/hooks/useFilterAttributes";
import { getAttributeStats } from "@/services/apiFilters";

interface NumberRangeFilterProps {
  attribute: AttributeDefinition;
  onChange: (attributeName: string, value: any) => void;
}

const NumberRangeFilter = ({ attribute, onChange }: NumberRangeFilterProps) => {
  const [stats, setStats] = useState<{ min: number; max: number } | null>(null);
  const [value, setValue] = useState<number[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await getAttributeStats(attribute.id);
        setStats(data);
        // Setăm valoarea inițială a slider-ului, dar NU apelăm onChange
        setValue([data.min, data.max]);
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
  
  const handleValueChange = (newRange: number[]) => {
    setValue(newRange);
  };

  const handleValueCommit = (committedRange: number[]) => {
    const attributeName = attribute.name.replace(/ /g, '_');
    // Verificăm dacă intervalul s-a schimbat față de cel inițial
    if (committedRange[0] !== stats.min) {
      onChange(`${attributeName}_min`, committedRange[0]);
    } else {
      // Dacă e la valoarea minimă, ștergem filtrul
      onChange(`${attributeName}_min`, undefined);
    }

    if (committedRange[1] !== stats.max) {
      onChange(`${attributeName}_max`, committedRange[1]);
    } else {
      // Dacă e la valoarea maximă, ștergem filtrul
      onChange(`${attributeName}_max`, undefined);
    }
  };

  const currentRange = value || [stats.min, stats.max];
  const stepValue = attribute.name.toLowerCase().includes('an') ? 1 : 1000;

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium capitalize flex justify-between">
        <span>{attribute.name}</span>
        <span className="text-luxury-gold font-semibold">
          {`${currentRange[0].toLocaleString()} - ${currentRange[1].toLocaleString()}`}
        </span>
      </Label>
      <Slider
        value={currentRange}
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
        max={stats.max}
        min={stats.min}
        step={stepValue}
        className="w-full"
      />
    </div>
  );
};

export default NumberRangeFilter;
