"use client"

import { motion } from "framer-motion"
import Layout from "@/components/layout/Layout"
import CarCard from "@/components/CarCard"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/luxury-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CreditCard, ArrowRight, AlertCircle, CheckCircle, FileCheck, Star, Users, Search } from "lucide-react"
import { Link } from "react-router-dom"
import heroImage from "@/assets/hero-car.jpg"
import useLatestListings, { type APIListing } from "@/hooks/useLatestListings"
import { Skeleton } from "@/components/ui/skeleton"

const Index = () => {
  const { listings, loading, error } = useLatestListings()

  const whyUsFeatures = [
    {
      icon: Search,
      title: "Selecție Riguroasă",
      description: "Refuzăm orice compromis. Fiecare mașină este aleasă personal de Laurențiu și inspectată tehnic în detaliu. Doar vehiculele care trec standardele noastre ajung în parcul auto."
    },
    {
      icon: FileCheck,
      title: "Transparență Totală",
      description: "Credem că o afacere corectă se construiește pe încredere. De aceea, îți oferim istoricul complet și răspundem onest la fiecare întrebare, fără secrete sau surprize."
    },
    {
      icon: Users,
      title: "O Experiență Centrată pe Tine",
      description: "De la primul telefon și până la momentul în care pleci la volanul noii tale mașini, suntem aici să te ghidăm. Nu vindem doar mașini, ci construim parteneriate de lungă durată."
    },
    {
      icon: Shield,
      title: "Garanție și Suport",
      description: "Prin parteneriatul cu Defend Insurance, oferim garanție extinsă și suport post-vânzare, pentru ca tu să conduci fără nicio grijă."
    }
  ]

  const carBrands = ["Audi", "BMW", "Mercedes-Benz", "Porsche", "Volkswagen", "Skoda"]

  const testimonials = [
    {
      quote: "Experiența foarte plăcută. Proprietarul parcului a fost extrem de binevoitor si a dat dovadă de profesionalism pe tot parcursul procesului. Suntem foarte încântați de achiziția făcută. Recomandăm cu căldură acest dealer auto. Mulțumim.",
      author: "- Nelutu Hoza"
    },
    {
      quote: "Am achiziționat un Audi A4 B9 de la Parcul Auto AWD și pot spune cu încredere că a fost o alegere foarte bună. Mașina este întreținută atât estetic, cât și mecanic, exact cum mi-a fost prezentată. Tot procesul de cumpărare a decurs foarte transparent, fără ascunzișuri sau promisiuni false. Cel mai mult am apreciat seriozitatea și corectitudinea deținătorului parcului, un om deosebit, care pune accent pe calitate și pe mulțumirea clientului. Se vede că mașinile sunt selectate cu grijă și menținute la standarde înalte. Recomand cu toată încrederea Auto AWD oricui își dorește o mașină bună și o experiență de cumpărare fără stres.",
      author: "- Lascu Daniel"
    },
    {
      quote: "Am ajuns la AWD Auto Cluj după ce am văzut un anunț legat de un Volvo V40, noi fiind din București. Am telefonat parcul auto pentru mai multe detalii legate de mașină, și am fost plăcut surprinși de amabilitatea și disponibilitatea domnului Laurențiu. Experiența noastră la AWD Auto poate fi descrisă doar prin laude la adresa dânsului, fiind extrem de înțelegător și receptiv, oferindu-ne mai multe informații și suport decât ne-am fi așteptat. Mai mult decât atât, oferă posibilitatea achiziționării unei asigurări de tip casco tehnic, care este foarte avantajoasă. Ne declarăm mulțumiți de alegerea făcută și recomandăm 100% achiziționarea unui autoturism de la AWD Auto!",
      author: "- Cristian Cucu"
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

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Our Promise Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Promisiunea Noastră Pentru Tine
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

    