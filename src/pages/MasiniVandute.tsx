"use client"

import Layout from "@/components/layout/Layout"
import Container from "@/components/ui/Container"
import { AnimatedSection } from "@/components/ui/animated-section"
import useSoldListings from "@/hooks/useSoldListings"
import CarCard from "@/components/CarCard"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from "lucide-react"

const MasiniVandute = () => {
  const { soldListings, loading, error } = useSoldListings()

  return (
    <Layout>
      {/* Page Hero - Auto Mivrus Style */}
      <section className="bg-ink-deep border-b border-ink-border text-ink-foreground py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow text-gold mb-3">Portofoliu</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-foreground">
              Mașini Vândute
            </h1>
            <p className="mt-3 text-base sm:text-lg text-ink-muted">
              Descoperă vehiculele livrate cu succes de echipa AWD Auto către clienții noștri.
            </p>
          </div>
        </Container>
      </section>

      {/* Grid Content - Warm Light Surface */}
      <section className="py-12 lg:py-16 bg-background text-foreground">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {loading ? (
              [...Array(8)].map((_, index) => (
                <div key={index} className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                  <Skeleton className="aspect-[3/2] w-full rounded-t-xl bg-muted" />
                  <div className="p-5 space-y-4">
                    <Skeleton className="h-6 w-3/4 bg-muted" />
                    <Skeleton className="h-4 w-1/2 bg-muted" />
                    <Skeleton className="h-8 w-1/3 bg-muted" />
                    <Skeleton className="h-11 w-full rounded-xl bg-muted" />
                  </div>
                </div>
              ))
            ) : error ? (
              <div className="col-span-full text-center text-red-600 bg-red-50 p-6 rounded-xl border border-red-200">
                <AlertCircle className="mx-auto h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold">Eroare la încărcare</h3>
                <p className="mt-1 text-sm text-red-700">Nu am putut prelua mașinile vândute. Te rugăm să încerci din nou mai târziu.</p>
              </div>
            ) : soldListings.length > 0 ? (
              soldListings.map(listing => <CarCard key={listing.id} listing={{...listing, status: 'SOLD'}} />)
            ) : (
              <div className="col-span-full text-center p-8 border border-dashed border-border bg-card rounded-xl">
                <p className="text-lg text-muted-foreground">
                  Nu sunt mașini vândute de afișat momentan.
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default MasiniVandute
