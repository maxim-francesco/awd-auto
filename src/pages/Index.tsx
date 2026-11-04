"use client"

import Layout from "@/components/layout/Layout"
import Container from "@/components/ui/Container"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/luxury-button"
import { Link } from "react-router-dom"
import useLatestListings from "@/hooks/useLatestListings"
import useSoldListings from "@/hooks/useSoldListings"
import CarCard from "@/components/CarCard"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, Shield, Search, Handshake, ShieldCheck, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import heroBg from '@/assets/logos/herocar.jpg';
import GoogleReviewsSection from '@/components/GoogleReviewsSection';

const Index = () => {
  const { listings, loading, error } = useLatestListings();
  const { soldListings, loading: soldLoading, error: soldError } = useSoldListings(4);
  
  const benefits = [
    {
      icon: Search,
      title: "Istoric Verificat",
      description: "Fiecare mașină din parcul nostru vine cu un istoric de service transparent. Cumpără cu încredere, știind exact trecutul mașinii tale."
    },
    {
      icon: ShieldCheck,
      title: "RAR Efectuat",
      description: "Pentru siguranța ta și un plus de confort, toate mașinile noastre vin cu RAR-ul deja efectuat. Ne asigurăm că fiecare detaliu tehnic este în regulă, oferindu-ți servicii de cea mai înaltă calitate."
    },
    {
      icon: Shield,
      title: "Garanție Inclusă",
      description: "Condu fără griji din prima zi. Fiecare mașină vândută de noi beneficiază de pachetul de garanție de bază PLUS, oferit prin partenerul nostru Defend Insurance."
    },
    {
      icon: Handshake,
      title: "Finanțare Personalizată",
      description: "Oferim soluții de finanțare rapide și flexibile prin partenerii noștri de încredere, adaptate perfect bugetului și nevoilor tale."
    }
  ]
  
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative isolate overflow-hidden bg-ink-deep text-ink-foreground py-24 sm:py-32 lg:py-40"
      >
        <img
          src={heroBg}
          alt="AWD Auto parc auto Cluj-Napoca"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-40"
          fetchPriority="high"
        />
        <div className="bg-hero-fade absolute inset-0 -z-10 lg:hidden" />
        <div className="bg-side-fade absolute inset-0 -z-10 hidden lg:block" />
        <div className="absolute inset-0 -z-10 bg-ink-deep/60" />
      
        <Container className="relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <p className="eyebrow mb-4 text-gold tracking-[0.2em]">AWD Auto Trade · Cluj-Napoca</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] max-w-4xl mx-auto mb-8 text-ink-foreground">
              Explorează oferta parcului nostru auto. <span className="text-gold-gradient">Toate vehiculele sunt verificate</span> și disponibile pentru test drive.
            </h1>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="btn-gold min-w-48 text-ink font-bold shadow-gold">
                <Link to="/masini-disponibile" className="inline-flex items-center gap-2">
                  Vezi Toate Mașinile Disponibile <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="lg" className="min-w-48 !text-white font-bold border-white/40 bg-white/10 hover:!border-gold hover:!text-gold-soft hover:bg-gold/15 shadow-sm">
                <a href="tel:0752228593">Suna-ne</a>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Latest Cars Teaser Section - Warm Light Surface */}
      <section className="py-16 lg:py-24 bg-background text-foreground">
        <Container>
          <AnimatedSection className="text-center mb-14">
            <p className="eyebrow text-gold-contrast mb-3">Stoc actualizat</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Ultimele Noutăți în Stoc
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {loading ? (
              [...Array(4)].map((_, index) => (
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
                <p className="mt-1 text-sm text-red-700">Nu am putut prelua ultimele noutăți. Te rugăm să încerci din nou mai târziu.</p>
              </div>
            ) : (
              listings.map(listing => <CarCard key={listing.id} listing={listing} />)
            )}
          </div>
          
          <AnimatedSection className="text-center">
            <Button asChild variant="outline" className="btn-outline-dark min-w-48 font-bold">
              <Link to="/masini-disponibile">Vezi Tot Stocul</Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* --- SECȚIUNEA ULTIMELE VÂNDUTE - Dark Section --- */}
      <section className="py-16 lg:py-24 bg-ink-deep border-y border-ink-border text-ink-foreground">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <p className="eyebrow text-gold mb-3">Portofoliu</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-foreground">
              Ultimele Vândute
            </h2>
          </AnimatedSection>

          {soldLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="overflow-hidden rounded-xl border border-ink-border bg-ink-raised shadow-card">
                  <Skeleton className="aspect-[3/2] w-full rounded-t-xl bg-ink-border/50" />
                  <div className="p-5 space-y-4">
                    <Skeleton className="h-6 w-3/4 bg-ink-border/50" />
                    <Skeleton className="h-4 w-1/2 bg-ink-border/50" />
                    <Skeleton className="h-8 w-1/3 bg-ink-border/50" />
                    <Skeleton className="h-11 w-full rounded-xl bg-ink-border/50" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {soldError && (
            <div className="col-span-full text-center text-red-400 bg-red-950/30 p-6 rounded-xl border border-red-800/40">
              <AlertCircle className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold">Eroare la încărcare</h3>
              <p className="mt-1 text-sm text-red-300">Nu am putut prelua ultimele mașini vândute.</p>
            </div>
          )}

          {!soldLoading && !soldError && soldListings.length === 0 && (
            <div className="text-center p-8 border border-dashed border-ink-border bg-ink-raised/50 rounded-xl my-8">
              <p className="text-lg text-ink-muted">
                Nu sunt mașini vândute de afișat momentan.
              </p>
            </div>
          )}

          {soldListings.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {soldListings.map((listing) => (
                <CarCard key={listing.id} listing={{ ...listing, status: 'SOLD' }} tone="dark" />
              ))}
            </div>
          )}
          
          <AnimatedSection className="text-center mt-12">
            <Button asChild variant="outline-light" className="min-w-48 !text-white font-semibold border-white/35 bg-white/10 hover:!border-gold hover:!text-gold-soft hover:bg-gold/15 shadow-sm">
              <Link to="/masini-vandute">Vezi toate vândute</Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
      
      {/* Google Reviews Section - Warm Light Surface */}
      <GoogleReviewsSection />

      {/* Benefits Section - Dark Deep Surface */}
      <section className="py-16 lg:py-24 bg-ink border-t border-ink-border text-ink-foreground">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow text-gold mb-3">Garanția calității</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-foreground mb-4">
              Promisiunea Noastră: Pasiune și Încredere
            </h2>
            <p className="text-ink-muted max-w-2xl mx-auto text-base sm:text-lg">
              La AWD Auto, fiecare mașină este mai mult decât un produs. Este o promisiune a calității, siguranței și transparenței pe care o oferim fiecărui client.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <StaggeredItem key={index}>
                <div className="group h-full flex flex-col items-center rounded-xl border border-ink-border bg-ink-raised p-8 text-center transition-all duration-300 hover:border-gold/60">
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-gold/20">
                    <benefit.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-ink-muted leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </Container>
      </section>
    </Layout>
  );
};

export default Index;
