"use client"

import Layout from "@/components/layout/Layout"
import Container from "@/components/ui/Container"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/luxury-button"
import { Link } from "react-router-dom"
import useLatestListings from "@/hooks/useLatestListings"
import CarCard from "@/components/CarCard"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from "lucide-react"


const Index = () => {
  const { listings, loading, error } = useLatestListings();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-darker via-luxury-dark to-luxury-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />
        </div>
        
        <Container className="relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="font-luxury text-4xl md:text-6xl font-black bg-gradient-to-r from-luxury-gold via-white to-luxury-gold bg-clip-text text-transparent mb-6 leading-tight">
              Mașini Alese Personal, Pentru Liniștea Ta.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Descoperă o selecție de autoturisme rulate, verificate cu atenție de către echipa noastră, gata să îți ofere o experiență de condus excepțională.
            </p>
            <Button asChild size="lg">
              <Link to="/masini-disponibile">Vezi Toate Mașinile Disponibile</Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* Latest Cars Teaser Section */}
      <section className="py-20 bg-luxury-darker">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ultimele Noutăți în Stoc
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {loading ? (
              [...Array(4)].map((_, index) => (
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
                <p>Nu am putut prelua ultimele noutăți. Te rugăm să încerci din nou mai târziu.</p>
              </div>
            ) : (
              listings.map(listing => <CarCard key={listing.id} listing={listing} />)
            )}
          </div>
          
          <AnimatedSection className="text-center">
            <Button asChild variant="outline">
              <Link to="/masini-disponibile">Vezi Tot Stocul</Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </Layout>
  );
};

export default Index;
