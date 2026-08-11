import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { AttributeDefinition } from "@/hooks/useFilterAttributes";

interface BooleanCheckboxFilterProps {
  attribute: AttributeDefinition;
  onChange: (attributeName: string, value: boolean | undefined) => void;
}

const BooleanCheckboxFilter = ({ attribute, onChange }: BooleanCheckboxFilterProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked: boolean | "indeterminate") => {
    const newCheckedState = !!checked;
    setIsChecked(newCheckedState);
    // When checked, send `true`. When unchecked, send `undefined` to remove the filter.
    onChange(attribute.name.replace(/ /g, '_'), newCheckedState ? true : undefined);
  };

  return (
    <div className="flex items-center space-x-2 hover:bg-luxury-gold/5 rounded px-2 py-1.5 transition-colors">
      <Checkbox
        id={attribute.id}
        checked={isChecked}
        onCheckedChange={handleChange}
      />
      <Label htmlFor={attribute.id} className="text-sm font-normal cursor-pointer flex-1 py-0.5">
        Afișează doar mașinile cu TVA deductibil
      </Label>
    </div>
  );
};

export default BooleanCheckboxFilter;
