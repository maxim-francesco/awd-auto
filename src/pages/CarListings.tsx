"use client"

import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import Layout from "@/components/layout/Layout"
import CarCard from "@/components/CarCard"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import useListings, { APIListing } from "@/hooks/useListings"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Container from "@/components/ui/Container"
import { StockFilters, DesktopFilterSidebar, useStockFacets } from "@/components/StockFilters"
import { FilterState, getAttributeValueById } from "@/lib/attributes"
import { Button } from "@/components/ui/luxury-button"

const CarListings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { listings: allListings, loading, error } = useListings();

  // 1. Parse FilterState from useSearchParams
  const filters: FilterState = useMemo(() => {
    return {
      marca: searchParams.get("marca") ? searchParams.get("marca")!.split(",").filter(Boolean) : [],
      model: searchParams.get("model") ? searchParams.get("model")!.split(",").filter(Boolean) : [],
      combustibil: searchParams.get("combustibil") ? searchParams.get("combustibil")!.split(",").filter(Boolean) : [],
      cutie: searchParams.get("cutie") ? searchParams.get("cutie")!.split(",").filter(Boolean) : [],
      caroserie: searchParams.get("caroserie") ? searchParams.get("caroserie")!.split(",").filter(Boolean) : [],
      an_min: searchParams.get("an_min") || "",
      an_max: searchParams.get("an_max") || "",
      pret_min: searchParams.get("pret_min") || "",
      pret_max: searchParams.get("pret_max") || "",
      km_min: searchParams.get("km_min") || "",
      km_max: searchParams.get("km_max") || "",
      q: searchParams.get("q") || "",
    };
  }, [searchParams]);

  const sortOption = searchParams.get("sort") || "newest";

  // 2. Call useStockFacets ONCE
  const facets = useStockFacets(allListings, filters);

  // 3. Client-side Sort of filteredListings
  const sortedFilteredListings = useMemo(() => {
    const list = [...facets.filteredListings];
    if (sortOption === "price_asc") {
      list.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    } else if (sortOption === "price_desc") {
      list.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    } else if (sortOption === "mileage_asc") {
      list.sort((a, b) => {
        const kmA = getAttributeValueById(a, ["attr:mileage"], ["kilometraj", "rulaj"]);
        const kmB = getAttributeValueById(b, ["attr:mileage"], ["kilometraj", "rulaj"]);
        const numA = typeof kmA === "number" ? kmA : (typeof kmA === "string" ? parseInt(kmA, 10) : 0);
        const numB = typeof kmB === "number" ? kmB : (typeof kmB === "string" ? parseInt(kmB, 10) : 0);
        return numA - numB;
      });
    } else if (sortOption === "mileage_desc") {
      list.sort((a, b) => {
        const kmA = getAttributeValueById(a, ["attr:mileage"], ["kilometraj", "rulaj"]);
        const kmB = getAttributeValueById(b, ["attr:mileage"], ["kilometraj", "rulaj"]);
        const numA = typeof kmA === "number" ? kmA : (typeof kmA === "string" ? parseInt(kmA, 10) : 0);
        const numB = typeof kmB === "number" ? kmB : (typeof kmB === "string" ? parseInt(kmB, 10) : 0);
        return numB - numA;
      });
    } else {
      // "newest"
      list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return list;
  }, [facets.filteredListings, sortOption]);

  // 4. Filter change handler updating searchParams
  const handleFilterChange = (newFilters: FilterState) => {
    const params = new URLSearchParams(searchParams);

    const setOrDelete = (key: string, val: string | string[]) => {
      if (Array.isArray(val)) {
        if (val.length > 0) params.set(key, val.join(","));
        else params.delete(key);
      } else {
        if (val && val.trim()) params.set(key, val.trim());
        else params.delete(key);
      }
    };

    setOrDelete("marca", newFilters.marca);
    setOrDelete("model", newFilters.model);
    setOrDelete("combustibil", newFilters.combustibil);
    setOrDelete("cutie", newFilters.cutie);
    setOrDelete("caroserie", newFilters.caroserie);
    setOrDelete("an_min", newFilters.an_min);
    setOrDelete("an_max", newFilters.an_max);
    setOrDelete("pret_min", newFilters.pret_min);
    setOrDelete("pret_max", newFilters.pret_max);
    setOrDelete("km_min", newFilters.km_min);
    setOrDelete("km_max", newFilters.km_max);
    setOrDelete("q", newFilters.q);

    setSearchParams(params, { replace: true });
  };

  const handleSortChange = (newSort: string) => {
    const params = new URLSearchParams(searchParams);
    if (newSort && newSort !== "newest") {
      params.set("sort", newSort);
    } else {
      params.delete("sort");
    }
    setSearchParams(params, { replace: true });
  };

  const clearAllFilters = () => {
    const params = new URLSearchParams();
    if (sortOption && sortOption !== "newest") {
      params.set("sort", sortOption);
    }
    setSearchParams(params, { replace: true });
  };

  const renderListings = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="luxury-card">
              <Skeleton className="h-48 w-full rounded-t-xl" />
              <CardContent className="p-6 space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-8 w-1/2" />
                <div className="grid grid-cols-2 gap-3">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                </div>
                <Skeleton className="h-9 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center text-red-500 bg-red-500/10 p-6 rounded-lg border border-red-500/30 col-span-full">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold">A apărut o eroare</h3>
          <p>Nu am putut încărca anunțurile. Te rugăm să încerci din nou mai târziu.</p>
        </div>
      );
    }

    if (sortedFilteredListings.length === 0) {
      return (
        <div className="text-center text-muted-foreground bg-card p-8 rounded-lg border border-border col-span-full my-8 space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Nicio mașină găsită</h3>
          <p className="max-w-md mx-auto text-sm">
            Niciun autoturism nu corespunde filtrelor selectate. Încearcă să elimini din filtre sau să cauți altceva.
          </p>
          <Button onClick={clearAllFilters} variant="outline" className="min-h-[44px] px-6">
            Șterge tot
          </Button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {sortedFilteredListings.map((listing: APIListing) => (
          <CarCard key={listing.id} listing={listing} />
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <Container className="py-8">
        <section className="text-center py-8 md:py-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-luxury-gold">
            Găsește Mașina Potrivită în Stocul Nostru
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Folosește filtrele de mai jos pentru a explora oferta noastră completă de autoturisme rulate.
          </p>
        </section>

        {/* Top Search & Active Filters Bar */}
        <StockFilters
          facets={facets}
          filters={filters}
          onFilterChange={handleFilterChange}
          filteredCount={facets.filteredListings.length}
          totalCount={allListings.length}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <DesktopFilterSidebar
            facets={facets}
            filters={filters}
            onFilterChange={handleFilterChange}
            filteredCount={facets.filteredListings.length}
            totalCount={allListings.length}
          />

          {/* Main Listings Content */}
          <main className="lg:col-span-3">
            {/* Header Result Count & Sort Dropdown */}
            <AnimatedSection className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <div className="text-sm text-muted-foreground font-medium">
                {!loading && (
                  <span>
                    Afișare <strong className="text-foreground">{facets.filteredListings.length}</strong> din{" "}
                    <strong className="text-foreground">{allListings.length}</strong> mașini
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Select value={sortOption} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-48 min-h-[44px]">
                    <SelectValue placeholder="Sortează după" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Cele mai noi</SelectItem>
                    <SelectItem value="price_asc">Preț crescător</SelectItem>
                    <SelectItem value="price_desc">Preț descrescător</SelectItem>
                    <SelectItem value="mileage_asc">Kilometraj crescător</SelectItem>
                    <SelectItem value="mileage_desc">Kilometraj descrescător</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </AnimatedSection>

            {/* Car Grid */}
            {renderListings()}
          </main>
        </div>
      </Container>
    </Layout>
  );
};

export default CarListings;
