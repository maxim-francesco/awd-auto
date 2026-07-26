"use client"

import { motion } from "framer-motion"
import { useState, useMemo, useEffect } from "react"
import Layout from "@/components/layout/Layout"
import CarCard from "@/components/CarCard"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/luxury-button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter } from "lucide-react"
import useListings, { APIListing } from "@/hooks/useListings"
import FilterSidebar from "@/components/filters/FilterSidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Container from "@/components/ui/Container"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";


const CarListings = () => {
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  const [sortOption, setSortOption] = useState("newest");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log('%c Starea FILTERS s-a actualizat:', 'color: orange; font-weight: bold;', filters);
  }, [filters]);
  
  const finalFilters = useMemo(() => {
    const combinedFilters = { ...activeFilters };
    if (sortOption) {
      combinedFilters.sortBy = sortOption;
    }
    return combinedFilters;
  }, [activeFilters, sortOption]);


  console.log('%c Filtre ACTIVE trimise către hook:', 'color: green; font-weight: bold;', finalFilters);
  const { listings, pagination, loading, error } = useListings(finalFilters, currentPage);
  
  const handleFilterChange = (attributeName: string, value: any) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };

      const attributeKey = attributeName.replace(/ /g, '_');

      if ((Array.isArray(value) && value.length === 0) || value === undefined || value === null) {
        delete newFilters[attributeKey];
        delete newFilters[`${attributeKey}_min`];
        delete newFilters[`${attributeKey}_max`];
      } else {
        newFilters[attributeKey] = value;
      }
      
      return newFilters;
    });
  };

  const handleApplyFilters = () => {
    const cleanedFilters: Record<string, any> = {};
    for (const key in filters) {
      const value = filters[key];
      if (value !== null && value !== undefined && value !== '' && (!Array.isArray(value) || value.length > 0)) {
        cleanedFilters[key] = value;
      }
    }
    setActiveFilters(cleanedFilters);
    setCurrentPage(1); // Reset page to 1 when filters are applied
    setIsSheetOpen(false); // Close sheet on mobile after applying
  };
  
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const renderListings = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {[...Array(9)].map((_, index) => (
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
    
    if (listings.length === 0) {
      return (
         <div className="text-center text-muted-foreground bg-card p-6 rounded-lg border border-border col-span-full">
          <h3 className="text-xl font-semibold">Nicio mașină găsită</h3>
          <p>Momentan nu sunt anunțuri în stoc care să corespundă filtrelor tale.</p>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {listings.map((listing: APIListing) => (
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
               <div className="flex items-center gap-4">
                 {/* Mobile Filter Trigger */}
                <div className="lg:hidden">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                <span>Filtrează</span>
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

            {/* --- PAGINATION SECTION --- */}
            {pagination && pagination.totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    {/* Previous Button */}
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) {
                            handlePageChange(currentPage - 1);
                          }
                        }}
                        // Disable the button if we are on the first page
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>

                    {/* Page Number Buttons */}
                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                          // Highlight the currently active page
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    {/* Next Button */}
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < pagination.totalPages) {
                            handlePageChange(currentPage + 1);
                          }
                        }}
                        // Disable the button if we are on the last page
                        className={currentPage === pagination.totalPages ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </main>
        </div>
      </Container>
    </Layout>
  )
}

export default CarListings
