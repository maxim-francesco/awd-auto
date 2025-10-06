
import useFilterAttributes from "@/hooks/useFilterAttributes"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import NumberRangeFilter from "@/components/filters/NumberRangeFilter"
import StringCheckboxFilter from "@/components/filters/StringCheckboxFilter"
import { Button } from "@/components/ui/luxury-button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface FilterSidebarProps {
  onFilterChange: (attributeName: string, value: any) => void;
  onApplyFilters: () => void;
  isMobile?: boolean;
}

const FilterSidebar = ({ onFilterChange, onApplyFilters, isMobile = false }: FilterSidebarProps) => {
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

    return attributes.map((attr, index) => (
      <div key={attr.id}>
        {index > 0 && <Separator className="my-6" />}
        {attr.type === 'NUMBER' && <NumberRangeFilter attribute={attr} onChange={onFilterChange} />}
        {attr.type === 'STRING' && <StringCheckboxFilter attribute={attr} onChange={onFilterChange} />}
      </div>
    ));
  };
  
  const content = (
    <>
      <h2 className="font-luxury text-xl font-bold text-luxury-gold mb-6">
        Filtrează Rezultatele
      </h2>
      
      <div className="space-y-6">
        {renderFilters()}
      </div>
    </>
  )
  
  if(isMobile){
     return (
        <div className="flex flex-col h-full bg-card">
            <div className="p-6 border-b border-border">
                {content}
            </div>
            <ScrollArea className="flex-1 p-6">
                {/* Filters will be rendered inside the header for mobile, this area is for future use or can be removed */}
            </ScrollArea>
            <div className="p-6 border-t border-border mt-auto">
                 <Button className="w-full" size="sm" onClick={onApplyFilters}>
                  Aplică Filtrele
                </Button>
            </div>
        </div>
     )
  }

  return (
    <>
        {content}
        <Button className="w-full mt-6" size="sm" onClick={onApplyFilters}>
            Aplică Filtrele
        </Button>
    </>
  );
};

export default FilterSidebar;
