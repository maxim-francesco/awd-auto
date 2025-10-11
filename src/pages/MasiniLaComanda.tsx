import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/luxury-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ListChecks, Truck, MessageSquare } from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"

const MasiniLaComanda = () => {

  const steps = [
    {
      icon: MessageSquare,
      title: "Pasul 1: Consultanță",
      description: "Ne spui ce mașină visezi, ce buget ai și care sunt dotările esențiale. Stabilim împreună toate detaliile pentru a găsi exact ce îți dorești."
    },
    {
      icon: Search,
      title: "Pasul 2: Căutare și Selecție",
      description: "Căutăm în rețeaua noastră de parteneri europeni de încredere și îți prezentăm cele mai bune opțiuni, cu transparență totală asupra costurilor."
    },
    {
      icon: ListChecks,
      title: "Pasul 3: Verificare Completă",
      description: "Verificăm tehnic și estetic fiecare mașină selectată pentru a ne asigura că respectă standardele noastre de calitate. Primești raportul complet."
    },
    {
      icon: Truck,
      title: "Pasul 4: Livrare în Siguranță",
      description: "Ne ocupăm de toată logistica, inclusiv transport, formalități vamale și înmatriculare, și îți livrăm mașina direct în Cluj-Napoca."
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-darker via-luxury-dark to-luxury-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.1),transparent_50%)]" />
        </div>
        
        <AnimatedSection className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-luxury text-4xl md:text-6xl font-bold bg-gradient-to-r from-luxury-gold via-white to-luxury-gold bg-clip-text text-transparent mb-6">
            Nu găsești mașina dorită? <br/>O aducem noi pentru tine!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Spune-ne ce cauți și echipa noastră se va ocupa de tot procesul, de la căutare și verificare, până la livrare direct la ușa ta.
          </p>
        </AnimatedSection>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cum Funcționează?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Procesul nostru este simplu, transparent și conceput pentru a-ți oferi liniște și siguranță.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StaggeredItem key={index}>
                <Card className="luxury-card h-full text-center">
                  <CardContent className="p-8">
                    <div className="bg-luxury-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-10 w-10 text-luxury-gold" />
                    </div>
                    <h3 className="font-luxury text-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-luxury-darker">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <Card className="luxury-card">
                <CardHeader className="text-center">
                    <CardTitle className="font-luxury text-2xl md:text-3xl text-luxury-gold">
                    Trimite o Cerere de Ofertă
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nume și Prenume</Label>
                        <Input id="name" placeholder="Numele tău" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" type="tel" placeholder="+40 722 123 456" />
                    </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="adresa@email.ro" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Descrie mașina dorită</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Ex: Audi A6, după 2019, sub 100.000 km, buget ~25.000€, scaune încălzite, trapă..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <Button className="w-full" size="lg">
                        Trimite Cererea
                    </Button>
                </CardContent>
                </Card>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export default MasiniLaComanda;
