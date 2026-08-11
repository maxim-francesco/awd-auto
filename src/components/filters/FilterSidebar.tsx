import useFilterAttributes from "@/hooks/useFilterAttributes";
import { Skeleton } from "@/components/ui/skeleton";
import NumberRangeFilter from "@/components/filters/NumberRangeFilter";
import StringCheckboxFilter from "@/components/filters/StringCheckboxFilter";
import BooleanCheckboxFilter from "@/components/filters/BooleanCheckboxFilter";
import { Button } from "@/components/ui/luxury-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { X, RotateCcw } from "lucide-react";

interface FilterSidebarProps {
  onFilterChange: (attributeName: string, value: any) => void;
  onReset: () => void;
  activeCount?: number;
  isMobile?: boolean;
  onClose?: () => void;
}

const FilterSidebar = ({
  onFilterChange,
  onReset,
  activeCount = 0,
  isMobile = false,
  onClose,
}: FilterSidebarProps) => {
  const { attributes, loading: attributesLoading } = useFilterAttributes();

  const renderFilters = () => {
    if (attributesLoading) {
      return (
        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-5 w-full" />
              <div className="flex justify-between">
                <Skeleton className="h-3 w-1/4" />
                <Skeleton className="h-3 w-1/4" />
              </div>
            </div>
          ))}
        </div>
      );
    }

    const firstThreeIds = attributes.slice(0, 3).map((attr) => attr.id);

    return (
      <Accordion type="multiple" defaultValue={firstThreeIds} className="w-full">
        {attributes.map((attr) => {
          let filterContent = null;
          switch (attr.type) {
            case "NUMBER":
              filterContent = <NumberRangeFilter attribute={attr} onChange={onFilterChange} />;
              break;
            case "STRING":
              filterContent = <StringCheckboxFilter attribute={attr} onChange={onFilterChange} />;
              break;
            case "BOOLEAN":
              filterContent = <BooleanCheckboxFilter attribute={attr} onChange={onFilterChange} />;
              break;
            default:
              return null;
          }

          return (
            <AccordionItem key={attr.id} value={attr.id} className="border-b border-luxury-gold/10 py-2">
              <AccordionTrigger className="text-foreground font-semibold hover:text-luxury-gold hover:no-underline capitalize text-sm py-3">
                {attr.name}
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                {filterContent}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  };

  if (isMobile) {
    return (
      <div className="flex flex-col h-full bg-card">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-luxury text-xl font-bold text-luxury-gold">
              Filtrează Rezultatele
            </h2>
            {activeCount > 0 && (
              <Badge variant="default" className="h-5 min-w-5 flex items-center justify-center p-0 text-[10px]">
                {activeCount}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onReset}
              disabled={activeCount === 0}
              className="text-xs text-muted-foreground hover:text-luxury-gold flex items-center gap-1 h-8 px-2"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Resetează</span>
            </Button>
            {onClose && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 text-muted-foreground hover:text-luxury-gold"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        <ScrollArea className="flex-1 p-6">
          {renderFilters()}
        </ScrollArea>
        <div className="p-6 border-t border-border mt-auto">
          <Button className="w-full" size="sm" onClick={onClose}>
            Vezi rezultatele
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="font-luxury text-xl font-bold text-luxury-gold">
            Filtrează Rezultatele
          </h2>
          {activeCount > 0 && (
            <Badge variant="default" className="h-5 min-w-5 flex items-center justify-center p-0 text-[10px]">
              {activeCount}
            </Badge>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          disabled={activeCount === 0}
          className="text-xs text-muted-foreground hover:text-luxury-gold flex items-center gap-1 h-8 px-2"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Resetează</span>
        </Button>
      </div>

      <div className="space-y-6">
        {renderFilters()}
      </div>
    </div>
  );
};

export default FilterSidebar;
