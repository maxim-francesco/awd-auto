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
import { AlertCircle, Shield, Search, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import heroBg from '@/assets/logos/herocar.jpg';
import GoogleReviewsSection from '@/components/GoogleReviewsSection'; // Import the new component

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
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div> 
      
        <Container className="relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="font-luxury text-4xl md:text-5xl font-bold leading-relaxed max-w-3xl mx-auto mb-8 bg-gradient-to-r from-primary to-white text-transparent bg-clip-text drop-shadow-md">
              Explorează oferta parcului nostru auto. Toate vehiculele sunt verificate și disponibile pentru test drive.
            </h1>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button asChild size="lg">
                <Link to="/masini-disponibile">Vezi Toate Mașinile Disponibile</Link>
               </Button>
               <Button asChild variant="outline" size="lg">
                <a href="tel:0752228593">Suna-ne</a>
              </Button>
            </div>
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

      {/* --- SECȚIUNEA ULTIMELE VÂNDUTE --- */}
      <section className="py-12 bg-gray-900/50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Ultimele Vândute
          </h2>

          {soldLoading && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="luxury-card">
                    <Skeleton className="h-48 w-full rounded-t-xl" />
                    <div className="p-6 space-y-4">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-8 w-1/2" />
                        <Skeleton className="h-9 w-full" />
                    </div>
                    </div>
                ))}
            </div>
          )}

          {soldError && (
            <div className="col-span-full text-center text-red-500 bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                <AlertCircle className="mx-auto h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold">Eroare la încărcare</h3>
                <p>Nu am putut prelua ultimele mașini vândute.</p>
            </div>
          )}

          {!soldLoading && !soldError && soldListings.length === 0 && (
            <div className="text-center p-6 border border-dashed border-gray-600 rounded-lg">
              <p className="text-xl text-muted-foreground">
                Nu sunt mașini vândute de afișat momentan.
              </p>
            </div>
          )}

          {soldListings.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {soldListings.map((listing) => (
                <CarCard key={listing.id} listing={{ ...listing, status: 'SOLD' }} />
              ))}
            </div>
          )}
           <AnimatedSection className="text-center mt-12">
                <Button asChild variant={"outline"}>
                    <Link to="/masini-vandute">Vezi toate vândute</Link>
                </Button>
            </AnimatedSection>
        </Container>
      </section>
      
      {/* Google Reviews Section */}
      <GoogleReviewsSection />

      {/* Benefits Section */}
      <section className="py-20 bg-luxury-darker">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Promisiunea Noastră: Pasiune și Încredere
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La AWD Auto, fiecare mașină este mai mult decât un produs. Este o promisiune a calității, siguranței și transparenței pe care o oferim fiecărui client.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <StaggeredItem key={index}>
                <Card className="luxury-card h-full text-center group">
                  <CardContent className="p-8">
                    <div className="bg-luxury-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-luxury-gold/20 group-hover:scale-110">
                      <benefit.icon className="h-10 w-10 text-luxury-gold" />
                    </div>
                    <h3 className="font-luxury text-xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </Container>
      </section>
    </Layout>
  );
};

export default Index;
