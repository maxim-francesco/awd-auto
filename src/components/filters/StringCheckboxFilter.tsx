import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import type { AttributeDefinition } from "@/hooks/useFilterAttributes";
import { getUniqueAttributeValues } from "@/services/apiFilters";

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
  
  if(options.length === 0) return null;

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium capitalize">{attribute.name}</Label>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`${attribute.id}-${option}`}
              onCheckedChange={(checked) => handleCheckedChange(checked, option)}
              checked={selectedValues.includes(option)}
            />
            <Label htmlFor={`${attribute.id}-${option}`} className="text-sm font-normal cursor-pointer">
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StringCheckboxFilter;
