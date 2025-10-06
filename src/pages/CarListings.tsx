"use client"

import { motion } from "framer-motion"
import { useState, useMemo, useEffect } from "react"
import Layout from "@/components/layout/Layout"
import CarCard from "@/components/CarCard"
import { StaggeredGrid, StaggeredItem, AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/luxury-button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter } from "lucide-react"
import useListings from "@/hooks/useListings"
import FilterSidebar from "@/components/filters/FilterSidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const CarListings = () => {
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  const [sortOption, setSortOption] = useState("newest");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    console.log('%c Starea FILTERS s-a actualizat:', 'color: orange; font-weight: bold;', filters);
  }, [filters]);
  
  const finalFilters = useMemo(() => ({
    ...activeFilters,
    sortBy: sortOption,
  }), [activeFilters, sortOption]);

  console.log('%c Filtre ACTIVE trimise către hook:', 'color: green; font-weight: bold;', finalFilters);
  const { listings, loading, error } = useListings(finalFilters);
  
  const handleFilterChange = (attributeName: string, value: any) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };

      // Dacă valoarea este un array gol sau nedefinită, ștergem cheia
      if ((Array.isArray(value) && value.length === 0) || value === undefined || value === null) {
        delete newFilters[attributeName];
      } else {
        newFilters[attributeName] = value;
      }
      
      return newFilters;
    });
  };

  const handleApplyFilters = () => {
    const cleanedFilters: Record<string, any> = {};
    for (const key in filters) {
      const value = filters[key];
      // Adăugăm filtrul doar dacă are o valoare validă
      // (nu e null/undefined, nu e un string gol, nu e un array gol)
      if (value !== null && value !== undefined && value !== '' && (!Array.isArray(value) || value.length > 0)) {
        cleanedFilters[key] = value;
      }
    }
    setActiveFilters(cleanedFilters);
    setIsSheetOpen(false); // Close sheet on mobile after applying
  };
  
  const renderListings = () => {
    if (loading) {
      return (
        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {[...Array(9)].map((_, index) => (
            <StaggeredItem key={index}>
              <Card className="luxury-card">
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
            </StaggeredItem>
          ))}
        </StaggeredGrid>
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
    
    if (listings.length === 0) {
      return (
         <div className="text-center text-muted-foreground bg-card p-6 rounded-lg border border-border col-span-full">
          <h3 className="text-xl font-semibold">Nicio mașină găsită</h3>
          <p>Momentan nu sunt anunțuri în stoc care să corespundă filtrelor tale.</p>
        </div>
      )
    }

    return (
      <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {listings.map((listing) => (
          <StaggeredItem key={listing.id}>
            <CarCard listing={listing} />
          </StaggeredItem>
        ))}
      </StaggeredGrid>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar for Desktop */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="luxury-card p-6 sticky top-24">
               <FilterSidebar 
                onFilterChange={handleFilterChange}
                onApplyFilters={handleApplyFilters}
               />
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Header */}
            <AnimatedSection className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
              <motion.h1 
                className="font-luxury text-3xl font-bold text-foreground bg-gradient-to-r from-luxury-gold to-luxury-silver bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Mașini Disponibile
              </motion.h1>

              <div className="flex items-center gap-4">
                 {/* Mobile Filter Trigger */}
                <div className="lg:hidden">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Filter className="h-5 w-5" />
                                <span className="sr-only">Filtre</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0">
                           <FilterSidebar 
                                onFilterChange={handleFilterChange}
                                onApplyFilters={handleApplyFilters}
                                isMobile={true}
                            />
                        </SheetContent>
                    </Sheet>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-48">
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
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Car Grid */}
            {renderListings()}

            {/* Pagination */}
            <div className="flex justify-center space-x-2">
              <Button variant="outline" disabled>
                Anterior
              </Button>
              <Button size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline">
                Următor
              </Button>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default CarListings
