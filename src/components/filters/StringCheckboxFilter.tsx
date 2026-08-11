import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import type { AttributeDefinition } from "@/hooks/useFilterAttributes";
import { getUniqueAttributeValues } from "@/services/apiFilters";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StringCheckboxFilterProps {
  attribute: AttributeDefinition;
  onChange: (attributeName: string, value: string[]) => void;
}

const StringCheckboxFilter = ({ attribute, onChange }: StringCheckboxFilterProps) => {
  const [options, setOptions] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        setLoading(true);
        const data = await getUniqueAttributeValues(attribute.id);
        setOptions(data);
      } catch (error) {
        console.error(`Failed to fetch options for ${attribute.name}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchOptions();
  }, [attribute.id, attribute.name]);

  const handleCheckedChange = (checked: boolean | "indeterminate", option: string) => {
    const newSelectedValues = checked
      ? [...selectedValues, option]
      : selectedValues.filter(v => v !== option);
    setSelectedValues(newSelectedValues);
    onChange(attribute.name.replace(/ /g, '_'), newSelectedValues);
  };

  if (loading) {
    return (
       <div className="space-y-3">
        <Skeleton className="h-4 w-2/5" />
        <div className="space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
        </div>
      </div>
    )
  }
  
  if (options.length === 0) return null;

  const optionsList = (
    <div className="space-y-1.5">
      {options.map((option) => (
        <div key={option} className="flex items-center space-x-2 hover:bg-luxury-gold/5 rounded px-2 py-1.5 transition-colors">
          <Checkbox
            id={`${attribute.id}-${option}`}
            onCheckedChange={(checked) => handleCheckedChange(checked, option)}
            checked={selectedValues.includes(option)}
          />
          <Label htmlFor={`${attribute.id}-${option}`} className="text-sm font-normal cursor-pointer flex-1 py-0.5">
            {option}
          </Label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-3">
      {options.length > 6 ? (
        <ScrollArea className="h-48 pr-3">
          {optionsList}
        </ScrollArea>
      ) : (
        optionsList
      )}
    </div>
  );
};

export default StringCheckboxFilter;
