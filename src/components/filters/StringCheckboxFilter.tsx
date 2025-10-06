import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import type { AttributeDefinition } from "@/hooks/useFilterAttributes";

interface StringCheckboxFilterProps {
  attribute: AttributeDefinition;
}

const StringCheckboxFilter = ({ attribute }: StringCheckboxFilterProps) => {
  // TODO: Fetch unique values
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium capitalize">{attribute.name}</Label>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox id={`${attribute.id}-${option}`} />
            <Label htmlFor={`${attribute.id}-${option}`} className="text-sm font-normal">
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StringCheckboxFilter;
