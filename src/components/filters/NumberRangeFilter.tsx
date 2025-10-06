import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import type { AttributeDefinition } from "@/hooks/useFilterAttributes";

interface NumberRangeFilterProps {
  attribute: AttributeDefinition;
}

const NumberRangeFilter = ({ attribute }: NumberRangeFilterProps) => {
  // TODO: Fetch min/max values and handle state
  const min = 0;
  const max = 2024;
  
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium capitalize">{attribute.name}</Label>
      <Slider
        defaultValue={[max]}
        max={max}
        min={min}
        step={1}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default NumberRangeFilter;
