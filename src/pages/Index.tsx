"use client"

import { motion } from "framer-motion"
import Layout from "@/components/layout/Layout"
import CarCard from "@/components/CarCard"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/luxury-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CreditCard, ArrowRight, AlertCircle, CheckCircle, FileCheck, Star } from "lucide-react"
import { Link } from "react-router-dom"
import heroImage from "@/assets/hero-car.jpg"
import useLatestListings, { type APIListing } from "@/hooks/useLatestListings"
import { Skeleton } from "@/components/ui/skeleton"

const Index = () => {
  const { listings, loading, error } = useLatestListings()

  const whyUsFeatures = [
    {
      icon: FileCheck,
      title: "Istoric Verificat",
      description: "Transparență totală. Oferim istoricul complet de service pentru fiecare vehicul, pentru o achiziție fără surprize."
    },
    {
      icon: Shield,
      title: "Garanție Extinsă",
      description: "Colaborăm cu Defend Insurance pentru a-ți oferi garanție de până la 36 de luni, cu un număr nelimitat de kilometri."
    },
    {
      icon: CreditCard,
      title: "Finanțare Personalizată",
      description: "Indiferent de situația ta financiară, găsim soluții de finanțare flexibile și rapide, adaptate nevoilor tale."
    },
    {
      icon: CheckCircle,
      title: "Certificat de Calitate",
      description: "Fiecare mașină trece printr-o inspecție tehnică riguroasă în peste 150 de puncte înainte de a fi listată."
    }
  ]

  const carBrands = ["Audi", "BMW", "Mercedes-Benz", "Porsche", "Volkswagen", "Skoda"]

  const testimonials = [
    {
      quote: "Procesul a fost incredibil de simplu și transparent. Am primit toate actele la zi, iar mașina este exact cum a fost descrisă. Domnul Laurențiu este un profesionist. Recomand cu încredere!",
      author: "Andrei P., Cluj-Napoca"
    },
    {
      quote: "După luni de căutări, am găsit la AWD Auto mașina perfectă pentru familia mea. Am apreciat onestitatea și răbdarea echipei. Cu siguranță voi reveni.",
      author: "Maria V., Florești"
    },
    {
      quote: "Garanția extinsă mi-a oferit liniștea de care aveam nevoie. O experiență de 5 stele, de la primul contact până la predarea cheilor.",
      author: "Ionuț S., Baciu"
    }
  ]
  
  const renderLatestCars = () => {
    if (loading) {
      return (
        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, index) => (
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
      )
    }

    if (error) {
      return (
        <div className="text-center text-red-500 bg-red-500/10 p-6 rounded-lg border border-red-500/30">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold">A apărut o eroare</h3>
          <p>Nu am putut încărca anunțurile. Te rugăm să încerci din nou mai târziu.</p>
        </div>
      )
    }

    if (listings.length === 0) {
      return (
        <div className="text-center text-muted-foreground bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-semibold">Nicio mașină găsită</h3>
          <p>Momentan nu sunt noutăți în stoc. Vă rugăm să reveniți.</p>
        </div>
      );
    }

    return (
      <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {listings.map((listing: APIListing) => (
          <StaggeredItem key={listing.id}>
            <CarCard listing={listing} />
          </StaggeredItem>
        ))}
      </StaggeredGrid>
    )
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-6 bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30">
              Dealer Auto de Încredere în Cluj-Napoca
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="hero-text mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mașini Rulate Verificate.<br />
            Experiențe Reale.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-luxury-silver mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Fiecare mașină din parcul nostru este atent selecționată și verificată pentru a-ți oferi siguranța pe care o meriți.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="lg" asChild>
              <Link to="/masini-disponibile">
                Vezi Mașinile Disponibile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Contactează-ne
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="py-20 bg-luxury-dark">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-luxury-gold to-luxury-gold/50 opacity-20 blur-xl"></div>
                  <img 
                    src="https://picsum.photos/seed/founder/800/1000" 
                    alt="Csibi Laurentiu, Administrator AWD Auto"
                    className="relative w-full h-auto object-cover rounded-xl shadow-2xl"
                    data-ai-hint="man portrait professional"
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="space-y-6">
                <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground">
                  Povestea Noastră: <span className="text-luxury-gold">Pasiune și Încredere</span>, de la Om la Om
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AWD Auto nu este doar un parc auto. Este viziunea lui Csibi Laurentiu, un pasionat de mașini care, acum 2 ani, a decis să transforme modul în care clujenii cumpără o mașină rulată. Totul a pornit de la o idee simplă: transparență totală și respect pentru fiecare client.
                </p>
                <blockquote className="border-l-4 border-luxury-gold pl-6 italic text-muted-foreground bg-luxury-darker/50 p-6 rounded-r-lg">
                  <p className="mb-4">
                    "Scopul meu a fost să creez un loc unde prietenii și familia mea ar veni cu încredere să cumpere o mașină. După doi ani și zeci de clienți mulțumiți, mă bucur să spun că am reușit să construim exact asta: o comunitate bazată pe onestitate."
                  </p>
                  <footer className="text-right not-italic">
                    <span className="font-semibold text-foreground">- Csibi Laurentiu</span><br />
                    <span className="text-sm text-luxury-gold">Administrator AWD Auto</span>
                  </footer>
                </blockquote>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Latest Arrivals */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Noutăți în Parcul Auto
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vezi cele mai recente vehicule atent selecționate care au intrat în parcul nostru auto.
            </p>
          </AnimatedSection>

          {renderLatestCars()}

          <AnimatedSection className="text-center" delay={0.2}>
            <Button asChild>
              <Link to="/masini-disponibile">
                Vezi Toate Mașinile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ce Spun Clienții Noștri
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experiențe reale de la clienți care au avut încredere în noi.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <StaggeredItem key={index}>
                 <Card className="luxury-card h-full flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-luxury-gold fill-current" />
                      ))}
                    </div>
                    <blockquote className="italic text-muted-foreground flex-1">
                      "{testimonial.quote}"
                    </blockquote>
                    <footer className="mt-6 text-right not-italic">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                    </footer>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              De ce să alegi AWD Auto?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ne dedicăm să oferim o experiență de cumpărare sigură, transparentă și plăcută.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsFeatures.map((feature, index) => (
              <StaggeredItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="luxury-card text-center group h-full">
                    <CardContent className="p-8">
                      <motion.div 
                        className="bg-luxury-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/20 transition-colors"
                      >
                        <feature.icon className="h-8 w-8 text-luxury-gold" />
                      </motion.div>
                      <h3 className="font-luxury text-xl font-bold text-foreground mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mărci Populare în Stoc
            </h2>
            <p className="text-lg text-muted-foreground">
              Avem o selecție variată de la cele mai respectate mărci auto.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {carBrands.map((brand, index) => (
              <StaggeredItem key={index}>
                <motion.div 
                  className="luxury-card p-6 text-center group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-luxury text-lg font-bold text-luxury-gold group-hover:text-luxury-gold-hover transition-colors">
                    {brand}
                  </h3>
                </motion.div>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-luxury-silver/10" />
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sunteți Gata să Vă Găsiți Următoarea Mașină?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Vă invităm la sediul nostru din Cluj-Napoca pentru a vedea mașinile și pentru a discuta cu unul dintre consultanții noștri.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <Link to="/masini-disponibile">
                  Explorează Stocul
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Programează o Vizită
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  )
}

export default Index
