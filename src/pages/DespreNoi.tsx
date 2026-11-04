import Layout from "@/components/layout/Layout"
import { Shield, Search, Handshake, CheckCircle, Star } from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import Container from "@/components/ui/Container"

const DespreNoi = () => {
  const benefits = [
    "Stoc diversificat de mașini rulate și verificate",
    "Kilometraj real și istoric de service la cerere",
    "RAR efectuat pentru toate autoturismele",
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
      {/* 1. Hero Section - Auto Mivrus Style */}
      <section className="bg-ink-deep border-b border-ink-border text-ink-foreground py-20 lg:py-28 text-center">
        <Container>
          <AnimatedSection className="max-w-4xl mx-auto">
            <p className="eyebrow text-gold mb-3">Despre noi</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink-foreground mb-6">
              Pasiune pentru Mașini de Calitate, <span className="text-gold-gradient">Respect pentru Clienți</span>
            </h1>
            <p className="text-base sm:text-xl text-ink-muted leading-relaxed max-w-3xl mx-auto">
              La AWD Auto, nu vindem doar mașini, ci construim relații bazate pe încredere și transparență. Descoperă povestea noastră și valorile care ne ghidează în fiecare zi.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* 2. Founder's Story Section - Warm Light Surface */}
      <section className="py-16 lg:py-24 bg-background text-foreground">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="eyebrow text-gold-contrast">Filosofia noastră</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Povestea Noastră
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Motorul și sufletul acestei afaceri de familie este Laurentiu Csibi, omul care demonstrează că pasiunea, onestitatea și responsabilitatea față de clienți sunt valorile care ne propulsează către succes.
              </p>
              <div className="rounded-xl border border-border bg-card shadow-card p-8 text-left my-6">
                <blockquote className="border-l-4 border-gold pl-6 py-2 italic text-foreground/90 text-base sm:text-lg leading-relaxed">
                  "Fiecare mașină are o poveste și fiecare client are un vis. Misiunea mea este să le aduc împreună. La AWD Auto, nu facem compromisuri când vine vorba de calitate și corectitudine. O mașină excelentă și un client fericit sunt cea mai mare satisfacție a mea."
                </blockquote>
                <p className="mt-4 font-bold text-foreground text-right">- Laurentiu Csibi, Fondator AWD Auto</p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* 3. Testimonials Section - Deep Dark Surface */}
      <section className="py-16 lg:py-24 bg-ink border-y border-ink-border text-ink-foreground">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow text-gold mb-3">Experiențe reale</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-foreground mb-4">
              Ce Spun Clienții Noștri
            </h2>
            <p className="text-ink-muted max-w-2xl mx-auto text-base sm:text-lg">
              Încrederea și satisfacția clienților sunt cartea noastră de vizită.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <StaggeredItem key={index}>
                <div className="h-full flex flex-col rounded-xl border border-ink-border bg-ink-raised p-8 shadow-card">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed italic flex-grow">
                    "{testimonial.review}"
                  </p>
                  <footer className="mt-6 font-bold text-ink-foreground text-right border-t border-ink-border/60 pt-4">
                    — {testimonial.name}
                  </footer>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </Container>
      </section>

      {/* 4. Mission & Values Section - Warm Light Surface */}
      <section className="py-16 lg:py-24 bg-background text-foreground">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow text-gold-contrast mb-3">Angajamentul nostru</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Valorile care Ne Ghidează
            </h2>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggeredItem>
              <div className="h-full rounded-xl border border-border bg-card shadow-card p-8 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold mx-auto mb-6">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Transparență
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Oferim istoric verificat și informații complete pentru fiecare mașină. 
                  Credem că un client informat este un client mulțumit.
                </p>
              </div>
            </StaggeredItem>

            <StaggeredItem>
              <div className="h-full rounded-xl border border-border bg-card shadow-card p-8 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold mx-auto mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Calitate Garantată
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Fiecare vehicul este supus unei inspecții riguroase înainte de a fi listat. 
                  Standardele noastre sunt ridicate pentru că respectăm investiția dumneavoastră.
                </p>
              </div>
            </StaggeredItem>

            <StaggeredItem>
              <div className="h-full rounded-xl border border-border bg-card shadow-card p-8 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold mx-auto mb-6">
                  <Handshake className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Respect pentru Client
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Construim relații pe termen lung bazate pe încredere și consultanță onestă. 
                  Succesul nostru se măsoară prin satisfacția clienților noștri.
                </p>
              </div>
            </StaggeredItem>
          </StaggeredGrid>
        </Container>
      </section>

      {/* 5. Why Choose Us Section - Deep Dark Surface */}
      <section className="py-16 lg:py-24 bg-ink-deep border-t border-ink-border text-ink-foreground">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <p className="eyebrow text-gold mb-3">Avantaje exclusive</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink-foreground mb-4">
                Beneficiile AWD Auto
              </h2>
            </AnimatedSection>

            <div className="rounded-xl border border-ink-border bg-ink-raised shadow-card p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="grid h-7 w-7 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="text-ink-muted text-sm leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default DespreNoi
