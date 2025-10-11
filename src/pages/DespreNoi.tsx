import Layout from "@/components/layout/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Search, Handshake, CheckCircle } from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import Container from "@/components/ui/Container"

const DespreNoi = () => {
  const teamMembers = [
    {
      name: "Mihai Popescu",
      role: "Manager Vânzări",
      bio: "Cu peste 10 ani de experiență în industria auto, Mihai este dedicat să ofere fiecărui client consultanță personalizată și soluții adaptate nevoilor lor."
    },
    {
      name: "Elena Ionescu",
      role: "Specialist Finanțare",
      bio: "Elena coordonează toate aspectele legate de finanțare și se asigură că fiecare client primește cele mai avantajoase condiții de creditare."
    },
    {
      name: "Andrei Munteanu",
      role: "Expert Tehnic",
      bio: "Responsabil cu inspecția tehnică a vehiculelor, Andrei garantează că fiecare mașină din parcul nostru îndeplinește standardele cele mai înalte de calitate."
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
              Povestea Noastră
            </h1>
            <p className="font-luxury text-2xl text-luxury-gold mb-6">
              Pasiune pentru Mașini de Calitate, Respect pentru Clienți
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
             Motorul și sufletul acestei afaceri de familie este Csibi Laurentiu, omul care demonstrează că pasiunea, onestitatea și responsabilitatea față de clienți sunt valorile care ne propulsează către succes.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-background">
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

      {/* Meet the Team Section */}
      <AnimatedSection className="py-20 bg-luxury-darker">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Faceți cunoștință cu Echipa Noastră
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profesioniști pasionați, gata să vă ajute să găsiți mașina perfectă
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="luxury-card">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 mx-auto mb-6 flex items-center justify-center border-2 border-luxury-gold/30">
                    <span className="font-luxury text-4xl text-luxury-gold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-luxury text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-luxury-gold font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-20 bg-background">
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

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-luxury-darker">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sunteți Pregătit să Găsiți Mașina Potrivită?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Echipa noastră este aici pentru a vă ghida prin fiecare pas al procesului. 
              Vă invităm să ne vizitați sau să ne contactați pentru o consultație personalizată.
            </p>
          </div>
        </Container>
      </AnimatedSection>
    </Layout>
  )
}

export default DespreNoi
