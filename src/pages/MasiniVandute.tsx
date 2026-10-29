"use client"

import Layout from "@/components/layout/Layout"
import Container from "@/components/ui/Container"
import { AnimatedSection } from "@/components/ui/animated-section"
import useSoldListings from "@/hooks/useSoldListings"
import CarCard from "@/components/CarCard"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from "lucide-react"

const MasiniVandute = () => {
  // By calling the hook without a limit, we are now fetching all sold listings
  const { soldListings, loading, error } = useSoldListings()

  return (
    <Layout>
      <section className="awd-catalog-canvas min-h-screen">
        <div className="pt-10 pb-10 theme-dark-obsidian text-center">
          <Container>
            <AnimatedSection>
              <h2 className="font-luxury text-3xl md:text-5xl font-bold text-luxury-gold">
                Mașini Vândute
              </h2>
            </AnimatedSection>
          </Container>
        </div>

        <div className="pt-14 pb-24 theme-light-ivory">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-7 mb-12">
            {loading ? (
              // Show a reasonable number of skeletons while loading
              [...Array(8)].map((_, index) => (
                <div key={index} className="luxury-card">
                  <Skeleton className="h-48 w-full rounded-t-xl" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-9 w-full" />
                  </div>
                </div>
              ))
            ) : error ? (
              <div className="col-span-full text-center text-red-500 bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                <AlertCircle className="mx-auto h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold">Eroare la încărcare</h3>
                <p>Nu am putut prelua mașinile vândute. Te rugăm să încerci din nou mai târziu.</p>
              </div>
            ) : soldListings.length > 0 ? (
              soldListings.map(listing => <CarCard key={listing.id} listing={{...listing, status: 'SOLD'}} />)
            ) : (
              <div className="col-span-full text-center p-6 border border-dashed border-gray-600 rounded-lg">
                <p className="text-xl text-muted-foreground">
                  Nu sunt mașini vândute de afișat momentan.
                </p>
              </div>
            )}
            </div>
          </Container>
        </div>
      </section>
    </Layout>
  )
}

export default MasiniVandute
