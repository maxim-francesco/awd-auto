"use client"

import Layout from "@/components/layout/Layout"
import Container from "@/components/ui/Container"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/luxury-button"
import { Link } from "react-router-dom"
import useLatestListings from "@/hooks/useLatestListings"
import CarCard from "@/components/CarCard"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, Star } from "lucide-react"
import laurentiuImage from '@/assets/laurentiu.png';
import { Card, CardContent } from "@/components/ui/card"


const Index = () => {
  const { listings, loading, error } = useLatestListings();

  const testimonials = [
    {
      name: "Petru Minu",
      review: "Profesionalism, seriozitate și promptitudine. Am achiziționat de curând un autoturism de la ei și sunt extrem de mulțumit. Mașina este impecabilă, exact ca în descriere. Recomand cu încredere!",
      stars: 5,
    },
    {
      name: "Lascu Daniel",
      review: "Servicii de nota 10. Laurențiu este un om deosebit, foarte amabil și dispus să ajute cu orice informație. Totul a decurs rapid și fără bătăi de cap. Voi reveni cu siguranță pe viitor.",
      stars: 5,
    },
    {
      name: "Cristian Cucu",
      review: "Cea mai bună experiență pe care am avut-o la un parc auto. Mașina a fost pregătită exemplar, iar tot procesul a fost transparent. Am primit toate actele și un istoric complet. 5 stele!",
      stars: 5,
    },
  ];
  
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
                        "Fiecare mașină are o poveste și fiecare client are un vis. Misiunea mea este să le aduc împreună. La AWD Auto, nu facem compromisuri când vine vorba de calitate și corectitudine. O mașină excelentă și un client fericit sunt cea mai mare satisfacție a mea."
                    </blockquote>
                    <p className="font-semibold text-foreground">- Csibi Laurentiu, Fondator AWD Auto</p>
                </AnimatedSection>
            </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-luxury-darker">
        <Container>
            <AnimatedSection className="text-center mb-16">
                 <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Ce Spun Clienții Noștri
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Încrederea și satisfacția clienților sunt cartea noastră de vizită.
                </p>
            </AnimatedSection>

            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {testimonials.map((testimonial, index) => (
                <StaggeredItem key={index}>
                    <Card className="luxury-card h-full flex flex-col">
                        <CardContent className="p-8 flex-grow flex flex-col">
                            <div className="flex mb-4">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-luxury-gold fill-luxury-gold" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic flex-grow">"{testimonial.review}"</p>
                            <footer className="mt-6 font-bold text-foreground text-right">
                                — {testimonial.name}
                            </footer>
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
