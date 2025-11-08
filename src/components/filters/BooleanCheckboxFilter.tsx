import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
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
    <>
      <Separator className="my-6" />
      <div className="space-y-3">
         <Label className="text-sm font-medium capitalize">{attribute.name}</Label>
        <div className="flex items-center space-x-2 pt-2">
          <Checkbox
            id={attribute.id}
            checked={isChecked}
            onCheckedChange={handleChange}
          />
          <Label htmlFor={attribute.id} className="text-sm font-normal cursor-pointer">
            Afișează doar mașinile cu TVA deductibil
          </Label>
        </div>
      </div>
    </>
  );
};

export default BooleanCheckboxFilter;
