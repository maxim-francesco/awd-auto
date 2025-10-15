import Layout from "@/components/layout/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Search, Handshake, CheckCircle, Star } from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import Container from "@/components/ui/Container"
import laurentiuImage from '@/assets/laurentiu.png';

const DespreNoi = () => {
  const teamMembers = [
    {
      name: "Csibi Laurentiu",
      role: "Administrator & Fondator",
      image: laurentiuImage,
      bio: "Pasionat de mașini și dedicat fiecărui client, Laurențiu a fondat AWD Auto pe principiile transparenței și încrederii, asigurându-se personal că fiecare mașină respectă cele mai înalte standarde."
    },
    {
      name: "Nume Prenume",
      role: "Rol în Companie",
      image: null,
      bio: "Acest membru al echipei contribuie la succesul nostru prin dedicarea și profesionalismul său, asigurând servicii de calitate pentru clienții noștri."
    }
  ]

  const benefits = [
    "Stoc diversificat de mașini rulate și verificate",
    "Kilometraj real și istoric de service la cerere",
    "Garanție inclusă pentru majoritatea vehiculelor",
    "Consultanță specializată și test drive",
    "Proces de achiziție rapid și transparent",
    "Suport post-vânzare dedicat"
  ]

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.15),transparent_50%)]" />
        </div>
        
        <Container className="relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="font-luxury text-4xl md:text-6xl font-bold bg-gradient-to-r from-luxury-gold via-white to-luxury-gold bg-clip-text text-transparent mb-6">
              Pasiune pentru Mașini de Calitate, Respect pentru Clienți
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La AWD Auto, nu vindem doar mașini, ci construim relații bazate pe încredere și transparență. Descoperă povestea noastră și valorile care ne ghidează în fiecare zi.
            </p>
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

      {/* Mission & Values Section */}
      <section className="py-20 bg-luxury-darker">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Valorile care Ne Ghidează
            </h2>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggeredItem>
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
            </StaggeredItem>

            <StaggeredItem>
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
            </StaggeredItem>

            <StaggeredItem>
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
            </StaggeredItem>
          </StaggeredGrid>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
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

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-20 bg-luxury-darker">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
                Beneficiile AWD Auto
              </h2>
            </div>

            <Card className="luxury-card">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-luxury-gold/10 w-8 h-8 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </AnimatedSection>
    </Layout>
  )
}

export default DespreNoi
