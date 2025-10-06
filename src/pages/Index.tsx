"use client"

import { motion } from "framer-motion"
import Layout from "@/components/layout/Layout"
import CarCard from "@/components/CarCard"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/luxury-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CreditCard, Star, ArrowRight, AlertCircle } from "lucide-react"
import { Link } from "react-router-dom"
import heroImage from "@/assets/hero-car.jpg"
import useLatestListings, { Listing } from "@/hooks/useLatestListings"
import { Skeleton } from "@/components/ui/skeleton"

const Index = () => {
  const { listings, loading, error } = useLatestListings()

  const whyUsFeatures = [
    {
      icon: Shield,
      title: "Garanție Verificată",
      description: "Toate mașinile noastre sunt verificate complet și vin cu garanție extinsă pentru liniștea dumneavoastră."
    },
    {
      icon: CreditCard,
      title: "Soluții de Finanțare",
      description: "Oferim diverse opțiuni de finanțare flexibile pentru a face achiziția mai accesibilă."
    },
    {
      icon: Star,
      title: "Servicii Premium",
      description: "Echipa noastră de experți vă oferă servicii de cea mai înaltă calitate și suport complet."
    }
  ]

  const carBrands = ["Audi", "BMW", "Mercedes-Benz", "Porsche", "Lamborghini", "Ferrari"]
  
  // Helper function to extract attribute values
  const getAttribute = (listing: Listing, attributeName: string) => {
    const attr = listing.attributeValues.find(
      (av) => av.attribute.name.toLowerCase() === attributeName.toLowerCase()
    );

    if (!attr) return "N/A";
    
    switch (attr.attribute.type) {
      case "STRING":
        return attr.stringValue || "N/A";
      case "NUMBER":
        return attr.numberValue?.toString() || "N/A";
      case "BOOLEAN":
        return attr.booleanValue ? "Da" : "Nu";
      default:
        return "N/A";
    }
  };

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

    return (
      <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {listings.map((car) => (
          <StaggeredItem key={car.id}>
            <CarCard
              id={car.id}
              image={car.images?.[0]?.url || "https://via.placeholder.com/600x400.png?text=AWD+Auto"}
              make={getAttribute(car, "marca")}
              model={getAttribute(car, "model")}
              price={`€${car.price.toLocaleString()}`}
              year={getAttribute(car, "an fabricatie")}
              mileage={`${parseInt(getAttribute(car, "kilometraj")).toLocaleString()} km`}
              fuelType={getAttribute(car, "combustibil")}
              engine={`${getAttribute(car, "capacitate cilindrica")} cm³`}
            />
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
              Premium Auto Dealership
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="hero-text mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Excelență în Performanță.<br />
            Eleganță în Design.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-luxury-silver mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Descoperă cele mai premium mașini sport și de lux, selecționate cu atenție pentru clienții exigenți.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="lg" asChild>
              <Link to="/masini-disponibile">
                Vezi Ofertele Noastre
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

      {/* Latest Arrivals */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ultimele Noutăți în Stoc
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cele mai recente adăugiri în colecția noastră de mași premium
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

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              De ce să alegi AWD Auto?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ne mândrim cu excelența în servicii și calitatea mașinilor pe care le oferim
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsFeatures.map((feature, index) => (
              <StaggeredItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="luxury-card text-center group">
                    <CardContent className="p-8">
                      <motion.div 
                        className="bg-luxury-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/20 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="h-8 w-8 text-luxury-gold" />
                      </motion.div>
                      <h3 className="font-luxury text-xl font-bold text-foreground mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
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
              Mărci Premium în Stoc
            </h2>
            <p className="text-lg text-muted-foreground">
              Oferim cele mai prestigioase mărci auto din lume
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
              Găsește Mașina Ta Perfectă
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cu o experiență de peste 15 ani în industria auto premium, suntem partenerii tăi de încredere pentru următoarea achiziție extraordinară.
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
