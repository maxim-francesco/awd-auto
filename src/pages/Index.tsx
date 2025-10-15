"use client"

import Layout from "@/components/layout/Layout"
import Container from "@/components/ui/Container"
import { AnimatedSection } from "@/components/ui/animated-section"
import useLatestListings from "@/hooks/useLatestListings"
import CarCard from "@/components/CarCard"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Shield, Search, Handshake } from "lucide-react"
import { Button } from "@/components/ui/luxury-button"
import { Link } from "react-router-dom"
import laurentiuImage from '@/assets/laurentiu.png';

const Index = () => {
  const { listings, loading, error } = useLatestListings();

  const renderLatestListings = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
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
          <p>Nu am putut încărca cele mai noi anunțuri. Te rugăm să încerci din nou mai târziu.</p>
        </div>
      );
    }
    
    if (listings.length === 0) {
      return (
         <div className="text-center text-muted-foreground bg-card p-6 rounded-lg border border-border col-span-full">
          <h3 className="text-xl font-semibold">Nicio mașină găsită</h3>
          <p>Momentan nu sunt anunțuri recente în stoc.</p>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
            <CarCard key={listing.id} listing={listing} />
        ))}
      </div>
    );
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-darker via-luxury-dark to-luxury-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />
        </div>
        
        <Container className="relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="font-luxury text-4xl md:text-6xl font-black bg-gradient-to-r from-luxury-gold via-white to-luxury-gold bg-clip-text text-transparent mb-6 leading-tight">
              Excelență în Automobile Rulate. Partenerul Tău de Încredere.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Descoperă o selecție premium de mașini verificate, cu garanție inclusă și istoric transparent. La AWD Auto, pasiunea pentru calitate se întâlnește cu respectul pentru client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/masini-disponibile">Vezi Mașinile Disponibile</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/masini-la-comanda">Mașină la Comandă</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Latest Listings Section */}
      <section className="py-20 bg-background">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ultimele Mașini Adăugate
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fii primul care descoperă cele mai noi vehicule din parcul nostru. Calitate și transparență garantate.
            </p>
          </AnimatedSection>
          
          {renderLatestListings()}
          
          <AnimatedSection className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/masini-disponibile">Vezi Tot Stocul</Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>

       {/* Our Promise Section */}
      <section className="py-20 bg-luxury-darker">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Promisiunea Noastră
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="luxury-card h-full">
                <CardContent className="p-8 text-center">
                  <div className="bg-luxury-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-10 w-10 text-luxury-gold" />
                  </div>
                  <h3 className="font-luxury text-xl font-bold text-foreground mb-4">
                    Transparență
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Oferim istoric verificat și informații complete pentru fiecare mașină. 
                    Credem că un client informat este un client mulțumit.
                  </p>
                </CardContent>
              </Card>

              <Card className="luxury-card h-full">
                <CardContent className="p-8 text-center">
                  <div className="bg-luxury-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-10 w-10 text-luxury-gold" />
                  </div>
                  <h3 className="font-luxury text-xl font-bold text-foreground mb-4">
                    Calitate Garantată
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fiecare vehicul este supus unei inspecții riguroase înainte de a fi listat. 
                    Standardele noastre sunt ridicate pentru că respectăm investiția dumneavoastră.
                  </p>
                </CardContent>
              </Card>

              <Card className="luxury-card h-full">
                <CardContent className="p-8 text-center">
                  <div className="bg-luxury-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Handshake className="h-10 w-10 text-luxury-gold" />
                  </div>
                  <h3 className="font-luxury text-xl font-bold text-foreground mb-4">
                    Respect pentru Client
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Construim relații pe termen lung bazate pe încredere și consultanță onestă. 
                    Succesul nostru se măsoară prin satisfacția clienților noștri.
                  </p>
                </CardContent>
              </Card>
          </div>
        </Container>
      </section>

      {/* Founder's Story Section */}
      <section className="py-20 bg-background">
        <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection className="flex justify-center">
                    <img src={laurentiuImage} alt="Csibi Laurentiu, Fondator AWD Auto" className="rounded-xl shadow-lg w-full max-w-md object-cover"/>
                </AnimatedSection>
                <AnimatedSection delay={0.2} className="space-y-6">
                    <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground">Povestea Noastră</h2>
                    <p className="text-muted-foreground leading-relaxed">Motorul și sufletul acestei afaceri de familie este <strong>Csibi Laurentiu</strong>, omul care demonstrează că pasiunea, onestitatea și responsabilitatea față de clienți sunt valorile care ne propulsează către succes.</p>
                     <blockquote className="border-l-4 border-luxury-gold pl-6 py-2 italic text-foreground/80">
                        "Fiecare mașină are o poveste și fiecare client are un vis. Misiunea mea este să le aduc împreună."
                    </blockquote>
                    <Button asChild>
                        <Link to="/despre-noi">Află mai multe despre noi</Link>
                    </Button>
                </AnimatedSection>
            </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Index;
