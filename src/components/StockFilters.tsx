import { useState, useMemo, useEffect, useRef } from "react";
import { FilterState, APIListing, getAttributeValueById, normalizeText } from "@/lib/attributes";
import { SlidersHorizontal, X, Search, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/luxury-button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

export function useStockFacets(allListings: APIListing[], filters: FilterState) {
  const matchListingExcluding = (car: APIListing, excludeKeys: string[]) => {
    // 1. Text search
    if (!excludeKeys.includes("q") && filters.q.trim()) {
      const words = normalizeText(filters.q).split(/\s+/).filter(Boolean);
      const title = normalizeText(car.title);
      const make = normalizeText(String(getAttributeValueById(car, ["attr:brand", "attr:make"], ["marca", "brand"]) ?? ""));
      const model = normalizeText(String(getAttributeValueById(car, ["attr:model"], ["model"]) ?? ""));
      const fuel = normalizeText(String(getAttributeValueById(car, ["attr:fuelType"], ["combustibil"]) ?? ""));

      const allMatch = words.every(
        (w) => title.includes(w) || make.includes(w) || model.includes(w) || fuel.includes(w)
      );
      if (!allMatch) return false;
    }

    // 2. Marca
    if (!excludeKeys.includes("marca") && filters.marca.length > 0) {
      const val = getAttributeValueById(car, ["attr:brand", "attr:make"], ["marca", "brand"]);
      if (!val || !filters.marca.some((m) => normalizeText(String(val)) === normalizeText(m))) {
        return false;
      }
    }

    // 3. Model
    if (!excludeKeys.includes("model") && filters.model.length > 0) {
      const val = getAttributeValueById(car, ["attr:model"], ["model"]);
      if (!val || !filters.model.some((m) => normalizeText(String(val)) === normalizeText(m))) {
        return false;
      }
    }

    // 4. Combustibil
    if (!excludeKeys.includes("combustibil") && filters.combustibil.length > 0) {
      const val = getAttributeValueById(car, ["attr:fuelType"], ["combustibil"]);
      if (!val || !filters.combustibil.some((c) => normalizeText(String(val)) === normalizeText(c))) {
        return false;
      }
    }

    // 5. Cutie de viteze
    if (!excludeKeys.includes("cutie") && filters.cutie.length > 0) {
      const val = getAttributeValueById(car, ["attr:gearbox", "attr:transmission"], ["cutie de viteze", "transmisie"]);
      if (!val || !filters.cutie.some((g) => normalizeText(String(val)) === normalizeText(g))) {
        return false;
      }
    }

    // 6. Caroserie
    if (!excludeKeys.includes("caroserie") && filters.caroserie.length > 0) {
      const val = getAttributeValueById(car, ["attr:bodyType"], ["caroserie"]);
      if (!val || !filters.caroserie.some((b) => normalizeText(String(val)) === normalizeText(b))) {
        return false;
      }
    }

    // 7. An
    if (!excludeKeys.includes("an")) {
      const yearVal = getAttributeValueById(car, ["attr:year"], ["an"]);
      const year = typeof yearVal === "number" ? yearVal : (typeof yearVal === "string" ? parseInt(yearVal, 10) : null);
      if (year !== null && !isNaN(year)) {
        if (filters.an_min && year < Number(filters.an_min)) return false;
        if (filters.an_max && year > Number(filters.an_max)) return false;
      }
    }

    // 8. Preț
    if (!excludeKeys.includes("pret") && car.price !== null && car.price !== undefined) {
      if (filters.pret_min && car.price < Number(filters.pret_min)) return false;
      if (filters.pret_max && car.price > Number(filters.pret_max)) return false;
    }

    // 9. Kilometraj
    if (!excludeKeys.includes("km")) {
      const kmVal = getAttributeValueById(car, ["attr:mileage"], ["kilometraj", "rulaj"]);
      const km = typeof kmVal === "number" ? kmVal : (typeof kmVal === "string" ? parseInt(kmVal, 10) : null);
      if (km !== null && !isNaN(km)) {
        if (filters.km_min && km < Number(filters.km_min)) return false;
        if (filters.km_max && km > Number(filters.km_max)) return false;
      }
    }

    return true;
  };

  return useMemo(() => {
    // 1. Marca facet
    const marcaSubset = allListings.filter((c) => matchListingExcluding(c, ["marca"]));
    const marcaCountsMap = new Map<string, { display: string; count: number }>();
    marcaSubset.forEach((c) => {
      const val = getAttributeValueById(c, ["attr:brand", "attr:make"], ["marca", "brand"]);
      if (val && typeof val === "string") {
        const key = val.trim();
        const normKey = normalizeText(key);
        const existing = Array.from(marcaCountsMap.values()).find(
          (item) => normalizeText(item.display) === normKey
        );
        if (existing) {
          existing.count += 1;
        } else {
          marcaCountsMap.set(key, { display: key, count: 1 });
        }
      }
    });
    const marcaOptions = Array.from(marcaCountsMap.values()).sort((a, b) =>
      a.display.localeCompare(b.display)
    );

    // 2. Model facet (DEPENDENT)
    const modelSubset = allListings.filter((c) => matchListingExcluding(c, ["model"]));
    const modelCountsMap = new Map<string, { display: string; count: number }>();
    modelSubset.forEach((c) => {
      const val = getAttributeValueById(c, ["attr:model"], ["model"]);
      if (val && typeof val === "string") {
        const key = val.trim();
        const normKey = normalizeText(key);
        const existing = Array.from(modelCountsMap.values()).find(
          (item) => normalizeText(item.display) === normKey
        );
        if (existing) {
          existing.count += 1;
        } else {
          modelCountsMap.set(key, { display: key, count: 1 });
        }
      }
    });
    const modelOptions = Array.from(modelCountsMap.values()).sort((a, b) =>
      a.display.localeCompare(b.display)
    );

    // 3. Combustibil facet
    const fuelSubset = allListings.filter((c) => matchListingExcluding(c, ["combustibil"]));
    const fuelCountsMap = new Map<string, { display: string; count: number }>();
    fuelSubset.forEach((c) => {
      const val = getAttributeValueById(c, ["attr:fuelType"], ["combustibil"]);
      if (val && typeof val === "string") {
        const key = val.trim();
        const normKey = normalizeText(key);
        const existing = Array.from(fuelCountsMap.values()).find(
          (item) => normalizeText(item.display) === normKey
        );
        if (existing) {
          existing.count += 1;
        } else {
          fuelCountsMap.set(key, { display: key, count: 1 });
        }
      }
    });
    const fuelOptions = Array.from(fuelCountsMap.values()).sort((a, b) =>
      a.display.localeCompare(b.display)
    );

    // 4. Cutie facet
    const gearboxSubset = allListings.filter((c) => matchListingExcluding(c, ["cutie"]));
    const gearboxCountsMap = new Map<string, { display: string; count: number }>();
    gearboxSubset.forEach((c) => {
      const val = getAttributeValueById(c, ["attr:gearbox", "attr:transmission"], ["cutie de viteze", "transmisie"]);
      if (val && typeof val === "string") {
        const key = val.trim();
        const normKey = normalizeText(key);
        const existing = Array.from(gearboxCountsMap.values()).find(
          (item) => normalizeText(item.display) === normKey
        );
        if (existing) {
          existing.count += 1;
        } else {
          gearboxCountsMap.set(key, { display: key, count: 1 });
        }
      }
    });
    const gearboxOptions = Array.from(gearboxCountsMap.values()).sort((a, b) =>
      a.display.localeCompare(b.display)
    );

    // 5. Caroserie facet
    const bodySubset = allListings.filter((c) => matchListingExcluding(c, ["caroserie"]));
    const bodyCountsMap = new Map<string, { display: string; count: number }>();
    bodySubset.forEach((c) => {
      const val = getAttributeValueById(c, ["attr:bodyType"], ["caroserie"]);
      if (val && typeof val === "string") {
        const key = val.trim();
        const normKey = normalizeText(key);
        const existing = Array.from(bodyCountsMap.values()).find(
          (item) => normalizeText(item.display) === normKey
        );
        if (existing) {
          existing.count += 1;
        } else {
          bodyCountsMap.set(key, { display: key, count: 1 });
        }
      }
    });
    const bodyOptions = Array.from(bodyCountsMap.values()).sort((a, b) =>
      a.display.localeCompare(b.display)
    );

    // 6. An range bounds
    const anSubset = allListings.filter((c) => matchListingExcluding(c, ["an"]));
    let minYear = Infinity;
    let maxYear = -Infinity;
    anSubset.forEach((c) => {
      const yearVal = getAttributeValueById(c, ["attr:year"], ["an"]);
      const y = typeof yearVal === "number" ? yearVal : (typeof yearVal === "string" ? parseInt(yearVal, 10) : null);
      if (y !== null && !isNaN(y)) {
        if (y < minYear) minYear = y;
        if (y > maxYear) maxYear = y;
      }
    });
    const yearBounds =
      minYear !== Infinity && maxYear !== -Infinity ? { min: minYear, max: maxYear } : null;

    // 7. Preț range bounds
    const pretSubset = allListings.filter((c) => matchListingExcluding(c, ["pret"]));
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    pretSubset.forEach((c) => {
      if (c.price !== null && c.price !== undefined) {
        if (c.price < minPrice) minPrice = c.price;
        if (c.price > maxPrice) maxPrice = c.price;
      }
    });
    const priceBounds =
      minPrice !== Infinity && maxPrice !== -Infinity
        ? { min: minPrice, max: maxPrice }
        : null;

    // 8. Kilometraj range bounds
    const kmSubset = allListings.filter((c) => matchListingExcluding(c, ["km"]));
    let minKm = Infinity;
    let maxKm = -Infinity;
    kmSubset.forEach((c) => {
      const kmVal = getAttributeValueById(c, ["attr:mileage"], ["kilometraj", "rulaj"]);
      const km = typeof kmVal === "number" ? kmVal : (typeof kmVal === "string" ? parseInt(kmVal, 10) : null);
      if (km !== null && !isNaN(km)) {
        if (km < minKm) minKm = km;
        if (km > maxKm) maxKm = km;
      }
    });
    const kmBounds =
      minKm !== Infinity && maxKm !== -Infinity ? { min: minKm, max: maxKm } : null;

    // 9. Fully filtered listings
    const filteredListings = allListings.filter((c) => matchListingExcluding(c, []));

    return {
      marcaOptions,
      modelOptions,
      fuelOptions,
      gearboxOptions,
      bodyOptions,
      yearBounds,
      priceBounds,
      kmBounds,
      filteredListings,
    };
  }, [allListings, filters]);
}

// Subcomponent: Option List for a Facet (with search filter & expand/collapse)
function FacetOptionList({
  options,
  selectedValues,
  onToggle,
}: {
  options: { display: string; count: number }[];
  selectedValues: string[];
  onToggle: (val: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState("");

  const filteredOptions = useMemo(() => {
    if (!search.trim()) return options;
    const norm = normalizeText(search);
    return options.filter((o) => normalizeText(o.display).includes(norm));
  }, [options, search]);

  const visibleOptions = expanded ? filteredOptions : filteredOptions.slice(0, 8);

  return (
    <div className="space-y-2">
      {options.length > 12 && (
        <div className="relative mb-2">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Caută..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-8 pl-8 pr-3 text-xs bg-muted/50 border-none focus-visible:ring-1"
          />
        </div>
      )}

      <div className="space-y-1">
        {visibleOptions.map((opt) => {
          const isChecked = selectedValues.some(
            (v) => normalizeText(v) === normalizeText(opt.display)
          );
          return (
            <div
              key={opt.display}
              onClick={() => onToggle(opt.display)}
              className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-muted/40 cursor-pointer min-h-[44px] select-none transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={() => onToggle(opt.display)}
                  className="data-[state=checked]:bg-luxury-gold data-[state=checked]:text-black"
                />
                <span className="text-sm font-normal text-foreground truncate">
                  {opt.display}
                </span>
              </div>
              <span className="text-xs text-muted-foreground tabular-nums ml-2 shrink-0">
                {opt.count}
              </span>
            </div>
          );
        })}
      </div>

      {filteredOptions.length > 8 && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 pt-1 min-h-[36px]"
        >
          {expanded ? (
            <>
              Arată mai puține <ChevronUp className="w-3 h-3" />
            </>
          ) : (
            <>
              Arată toate ({filteredOptions.length}) <ChevronDown className="w-3 h-3" />
            </>
          )}
        </button>
      )}
    </div>
  );
}

const getActiveKeys = (f: FilterState): string[] => {
  const keys: string[] = [];
  if (f.marca.length > 0) keys.push("marca");
  if (f.model.length > 0) keys.push("model");
  if (f.combustibil.length > 0) keys.push("combustibil");
  if (f.cutie.length > 0) keys.push("cutie");
  if (f.caroserie.length > 0) keys.push("caroserie");
  if (f.an_min || f.an_max) keys.push("an");
  if (f.pret_min || f.pret_max) keys.push("pret");
  if (f.km_min || f.km_max) keys.push("km");
  return keys;
};

// Facet Accordion Panel Content
function FacetsAccordionContent({
  facets,
  filters,
  onFilterChange,
}: {
  facets: ReturnType<typeof useStockFacets>;
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
}) {
  const toggleMultiSelect = (
    key: "marca" | "model" | "combustibil" | "cutie" | "caroserie",
    value: string
  ) => {
    const current = filters[key];
    const exists = current.some((v) => normalizeText(v) === normalizeText(value));
    const updated = exists
      ? current.filter((v) => normalizeText(v) !== normalizeText(value))
      : [...current, value];
    onFilterChange({ ...filters, [key]: updated });
  };

  // Initialize with active keys from URL on mount
  const [openItems, setOpenItems] = useState<string[]>(() => getActiveKeys(filters));
  const prevActiveKeysRef = useRef<string[]>(getActiveKeys(filters));

  // Auto-open a facet ONLY on transition from inactive to active (0 to 1+ selected)
  useEffect(() => {
    const currentActiveKeys = getActiveKeys(filters);
    const prevActiveKeys = prevActiveKeysRef.current;

    const newlyActivatedKeys = currentActiveKeys.filter(
      (key) => !prevActiveKeys.includes(key)
    );

    if (newlyActivatedKeys.length > 0) {
      setOpenItems((prevOpen) => {
        const nextOpen = [...prevOpen];
        newlyActivatedKeys.forEach((key) => {
          if (!nextOpen.includes(key)) {
            nextOpen.push(key);
          }
        });
        return nextOpen;
      });
    }

    prevActiveKeysRef.current = currentActiveKeys;
  }, [filters]);

  return (
    <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full">
      {/* Marca Facet */}
      {facets.marcaOptions.length > 0 && (
        <AccordionItem value="marca" className="border-border/60">
          <AccordionTrigger className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground py-3 hover:no-underline">
            <span className="flex items-center gap-2">
              Marcă
              {filters.marca.length > 0 && (
                <span className="text-[11px] font-normal text-muted-foreground">
                  ({filters.marca.length})
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <FacetOptionList
              options={facets.marcaOptions}
              selectedValues={filters.marca}
              onToggle={(val) => toggleMultiSelect("marca", val)}
            />
          </AccordionContent>
        </AccordionItem>
      )}

      {/* Model Facet (DEPENDENT) */}
      {facets.modelOptions.length > 0 && (
        <AccordionItem value="model" className="border-border/60">
          <AccordionTrigger className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground py-3 hover:no-underline">
            <span className="flex items-center gap-2">
              Model
              {filters.model.length > 0 && (
                <span className="text-[11px] font-normal text-muted-foreground">
                  ({filters.model.length})
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <FacetOptionList
              options={facets.modelOptions}
              selectedValues={filters.model}
              onToggle={(val) => toggleMultiSelect("model", val)}
            />
          </AccordionContent>
        </AccordionItem>
      )}

      {/* Combustibil Facet */}
      {facets.fuelOptions.length > 0 && (
        <AccordionItem value="combustibil" className="border-border/60">
          <AccordionTrigger className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground py-3 hover:no-underline">
            <span className="flex items-center gap-2">
              Combustibil
              {filters.combustibil.length > 0 && (
                <span className="text-[11px] font-normal text-muted-foreground">
                  ({filters.combustibil.length})
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <FacetOptionList
              options={facets.fuelOptions}
              selectedValues={filters.combustibil}
              onToggle={(val) => toggleMultiSelect("combustibil", val)}
            />
          </AccordionContent>
        </AccordionItem>
      )}

      {/* Cutie de viteze Facet */}
      {facets.gearboxOptions.length > 0 && (
        <AccordionItem value="cutie" className="border-border/60">
          <AccordionTrigger className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground py-3 hover:no-underline">
            <span className="flex items-center gap-2">
              Cutie de viteze
              {filters.cutie.length > 0 && (
                <span className="text-[11px] font-normal text-muted-foreground">
                  ({filters.cutie.length})
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <FacetOptionList
              options={facets.gearboxOptions}
              selectedValues={filters.cutie}
              onToggle={(val) => toggleMultiSelect("cutie", val)}
            />
          </AccordionContent>
        </AccordionItem>
      )}

      {/* Caroserie Facet */}
      {facets.bodyOptions.length > 0 && (
        <AccordionItem value="caroserie" className="border-border/60">
          <AccordionTrigger className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground py-3 hover:no-underline">
            <span className="flex items-center gap-2">
              Caroserie
              {filters.caroserie.length > 0 && (
                <span className="text-[11px] font-normal text-muted-foreground">
                  ({filters.caroserie.length})
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <FacetOptionList
              options={facets.bodyOptions}
              selectedValues={filters.caroserie}
              onToggle={(val) => toggleMultiSelect("caroserie", val)}
            />
          </AccordionContent>
        </AccordionItem>
      )}

      {/* Preț Range */}
      <AccordionItem value="pret" className="border-border/60">
        <AccordionTrigger className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground py-3 hover:no-underline">
          <span className="flex items-center gap-2">
            Preț (€)
            {(filters.pret_min || filters.pret_max) && (
              <span className="text-[11px] font-normal text-muted-foreground">(Activ)</span>
            )}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">De la</label>
              <Input
                type="number"
                placeholder={facets.priceBounds ? `${facets.priceBounds.min} €` : "Min €"}
                value={filters.pret_min}
                onChange={(e) => onFilterChange({ ...filters, pret_min: e.target.value })}
                className="h-10 text-xs bg-muted/40 border-border min-h-[44px]"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Până la</label>
              <Input
                type="number"
                placeholder={facets.priceBounds ? `${facets.priceBounds.max} €` : "Max €"}
                value={filters.pret_max}
                onChange={(e) => onFilterChange({ ...filters, pret_max: e.target.value })}
                className="h-10 text-xs bg-muted/40 border-border min-h-[44px]"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* An Range */}
      <AccordionItem value="an" className="border-border/60">
        <AccordionTrigger className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground py-3 hover:no-underline">
          <span className="flex items-center gap-2">
            An Fabricație
            {(filters.an_min || filters.an_max) && (
              <span className="text-[11px] font-normal text-muted-foreground">(Activ)</span>
            )}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">De la</label>
              <Input
                type="number"
                placeholder={facets.yearBounds ? `${facets.yearBounds.min}` : "Min"}
                value={filters.an_min}
                onChange={(e) => onFilterChange({ ...filters, an_min: e.target.value })}
                className="h-10 text-xs bg-muted/40 border-border min-h-[44px]"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Până la</label>
              <Input
                type="number"
                placeholder={facets.yearBounds ? `${facets.yearBounds.max}` : "Max"}
                value={filters.an_max}
                onChange={(e) => onFilterChange({ ...filters, an_max: e.target.value })}
                className="h-10 text-xs bg-muted/40 border-border min-h-[44px]"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Kilometraj Range */}
      <AccordionItem value="km" className="border-border/60">
        <AccordionTrigger className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground py-3 hover:no-underline">
          <span className="flex items-center gap-2">
            Kilometraj (km)
            {(filters.km_min || filters.km_max) && (
              <span className="text-[11px] font-normal text-muted-foreground">(Activ)</span>
            )}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">De la</label>
              <Input
                type="number"
                placeholder={facets.kmBounds ? `${facets.kmBounds.min.toLocaleString()} km` : "Min km"}
                value={filters.km_min}
                onChange={(e) => onFilterChange({ ...filters, km_min: e.target.value })}
                className="h-10 text-xs bg-muted/40 border-border min-h-[44px]"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Până la</label>
              <Input
                type="number"
                placeholder={facets.kmBounds ? `${facets.kmBounds.max.toLocaleString()} km` : "Max km"}
                value={filters.km_max}
                onChange={(e) => onFilterChange({ ...filters, km_max: e.target.value })}
                className="h-10 text-xs bg-muted/40 border-border min-h-[44px]"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

interface StockFiltersProps {
  facets: ReturnType<typeof useStockFacets>;
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  filteredCount: number;
  totalCount: number;
}

export function StockFilters({
  facets,
  filters,
  onFilterChange,
  filteredCount,
  totalCount,
}: StockFiltersProps) {
  const hasActiveFilters =
    filters.marca.length > 0 ||
    filters.model.length > 0 ||
    filters.combustibil.length > 0 ||
    filters.cutie.length > 0 ||
    filters.caroserie.length > 0 ||
    Boolean(filters.an_min) ||
    Boolean(filters.an_max) ||
    Boolean(filters.pret_min) ||
    Boolean(filters.pret_max) ||
    Boolean(filters.km_min) ||
    Boolean(filters.km_max) ||
    Boolean(filters.q.trim());

  const activeCount =
    filters.marca.length +
    filters.model.length +
    filters.combustibil.length +
    filters.cutie.length +
    filters.caroserie.length +
    (filters.an_min || filters.an_max ? 1 : 0) +
    (filters.pret_min || filters.pret_max ? 1 : 0) +
    (filters.km_min || filters.km_max ? 1 : 0) +
    (filters.q.trim() ? 1 : 0);

  const clearAllFilters = () => {
    onFilterChange({
      marca: [],
      model: [],
      combustibil: [],
      cutie: [],
      caroserie: [],
      an_min: "",
      an_max: "",
      pret_min: "",
      pret_max: "",
      km_min: "",
      km_max: "",
      q: "",
    });
  };

  return (
    <div>
      {/* Search Input & Mobile Trigger */}
      <div className="flex gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Caută după titlu, marcă sau model..."
            value={filters.q}
            onChange={(e) => onFilterChange({ ...filters, q: e.target.value })}
            className="pl-10 min-h-[44px] bg-muted/40 border-border text-sm"
          />
        </div>

        {/* Mobile Filter Sheet Trigger (lg:hidden) */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="min-h-[44px] px-4 gap-2 border-border">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filtre</span>
                {activeCount > 0 && (
                  <Badge variant="secondary" className="px-1.5 py-0.5 text-xs font-semibold">
                    {activeCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:max-w-md flex flex-col p-0 bg-background">
              <SheetHeader className="p-4 border-b border-border text-left">
                <SheetTitle className="text-base font-semibold">Filtre Stoc</SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <FacetsAccordionContent
                  facets={facets}
                  filters={filters}
                  onFilterChange={onFilterChange}
                />
              </div>

              <SheetFooter className="p-4 border-t border-border bg-background flex flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={clearAllFilters}
                  className="flex-1 min-h-[44px]"
                >
                  Resetează
                </Button>
                <SheetClose asChild>
                  <Button className="flex-1 min-h-[44px]">
                    Vezi {filteredCount} mașini
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Active Filter Pills Bar */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 pb-3 mb-4">
          {filters.marca.map((m) => (
            <span
              key={`marca-${m}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/80 border border-border text-foreground text-xs shrink-0"
            >
              Marcă: {m}
              <button
                type="button"
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    marca: filters.marca.filter((item) => item !== m),
                  })
                }
                className="hover:text-primary min-w-[20px] min-h-[20px] flex items-center justify-center"
                aria-label={`Șterge marca ${m}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {filters.model.map((m) => (
            <span
              key={`model-${m}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/80 border border-border text-foreground text-xs shrink-0"
            >
              Model: {m}
              <button
                type="button"
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    model: filters.model.filter((item) => item !== m),
                  })
                }
                className="hover:text-primary min-w-[20px] min-h-[20px] flex items-center justify-center"
                aria-label={`Șterge modelul ${m}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {filters.combustibil.map((c) => (
            <span
              key={`combustibil-${c}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/80 border border-border text-foreground text-xs shrink-0"
            >
              Combustibil: {c}
              <button
                type="button"
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    combustibil: filters.combustibil.filter((item) => item !== c),
                  })
                }
                className="hover:text-primary min-w-[20px] min-h-[20px] flex items-center justify-center"
                aria-label={`Șterge combustibil ${c}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {filters.cutie.map((g) => (
            <span
              key={`cutie-${g}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/80 border border-border text-foreground text-xs shrink-0"
            >
              Cutie: {g}
              <button
                type="button"
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    cutie: filters.cutie.filter((item) => item !== g),
                  })
                }
                className="hover:text-primary min-w-[20px] min-h-[20px] flex items-center justify-center"
                aria-label={`Șterge cutie de viteze ${g}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {filters.caroserie.map((b) => (
            <span
              key={`caroserie-${b}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/80 border border-border text-foreground text-xs shrink-0"
            >
              Caroserie: {b}
              <button
                type="button"
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    caroserie: filters.caroserie.filter((item) => item !== b),
                  })
                }
                className="hover:text-primary min-w-[20px] min-h-[20px] flex items-center justify-center"
                aria-label={`Șterge caroserie ${b}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {(filters.an_min || filters.an_max) && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/80 border border-border text-foreground text-xs shrink-0">
              An: {filters.an_min || "Min"} - {filters.an_max || "Max"}
              <button
                type="button"
                onClick={() => onFilterChange({ ...filters, an_min: "", an_max: "" })}
                className="hover:text-primary min-w-[20px] min-h-[20px] flex items-center justify-center"
                aria-label="Șterge filtru an"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {(filters.pret_min || filters.pret_max) && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/80 border border-border text-foreground text-xs shrink-0">
              Preț: {filters.pret_min ? `${filters.pret_min} €` : "Min"} - {filters.pret_max ? `${filters.pret_max} €` : "Max"}
              <button
                type="button"
                onClick={() => onFilterChange({ ...filters, pret_min: "", pret_max: "" })}
                className="hover:text-primary min-w-[20px] min-h-[20px] flex items-center justify-center"
                aria-label="Șterge filtru preț"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {(filters.km_min || filters.km_max) && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/80 border border-border text-foreground text-xs shrink-0">
              KM: {filters.km_min || "Min"} - {filters.km_max || "Max"}
              <button
                type="button"
                onClick={() => onFilterChange({ ...filters, km_min: "", km_max: "" })}
                className="hover:text-primary min-w-[20px] min-h-[20px] flex items-center justify-center"
                aria-label="Șterge filtru kilometraj"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.q.trim() && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/80 border border-border text-foreground text-xs shrink-0">
              Căutare: "{filters.q}"
              <button
                type="button"
                onClick={() => onFilterChange({ ...filters, q: "" })}
                className="hover:text-primary min-w-[20px] min-h-[20px] flex items-center justify-center"
                aria-label="Șterge căutare text"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          <button
            type="button"
            onClick={clearAllFilters}
            className="text-xs font-semibold text-luxury-gold hover:underline px-2 py-1 min-h-[44px] flex items-center shrink-0"
          >
            Șterge tot
          </button>
        </div>
      )}
    </div>
  );
}

export function DesktopFilterSidebar({
  facets,
  filters,
  onFilterChange,
  filteredCount,
  totalCount,
}: StockFiltersProps) {
  const hasActiveFilters =
    filters.marca.length > 0 ||
    filters.model.length > 0 ||
    filters.combustibil.length > 0 ||
    filters.cutie.length > 0 ||
    filters.caroserie.length > 0 ||
    Boolean(filters.an_min) ||
    Boolean(filters.an_max) ||
    Boolean(filters.pret_min) ||
    Boolean(filters.pret_max) ||
    Boolean(filters.km_min) ||
    Boolean(filters.km_max) ||
    Boolean(filters.q.trim());

  const clearAllFilters = () => {
    onFilterChange({
      marca: [],
      model: [],
      combustibil: [],
      cutie: [],
      caroserie: [],
      an_min: "",
      an_max: "",
      pret_min: "",
      pret_max: "",
      km_min: "",
      km_max: "",
      q: "",
    });
  };

  return (
    <aside className="hidden lg:block lg:col-span-1">
      <div className="luxury-card p-6 sticky top-24">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
          <h2 className="font-luxury text-xl font-bold text-luxury-gold">Filtre Stoc</h2>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-xs text-muted-foreground hover:text-luxury-gold min-h-[36px] flex items-center"
            >
              Șterge tot
            </button>
          )}
        </div>

        <FacetsAccordionContent
          facets={facets}
          filters={filters}
          onFilterChange={onFilterChange}
        />
      </div>
    </aside>
  );
}
