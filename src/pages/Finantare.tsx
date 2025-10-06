import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/luxury-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Car, FileText, CheckCircle, Calculator } from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { useState } from "react"

const Finantare = () => {
  const [carPrice, setCarPrice] = useState(50000)
  const [downPayment, setDownPayment] = useState(10000)
  const [period, setPeriod] = useState(60)

  const monthlyPayment = ((carPrice - downPayment) / period * 1.05).toFixed(0)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-darker via-luxury-dark to-luxury-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        </div>
        
        <AnimatedSection className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-luxury text-4xl md:text-6xl font-bold bg-gradient-to-r from-luxury-gold via-white to-luxury-gold bg-clip-text text-transparent mb-6">
            Soluții de Finanțare Auto<br />Flexibile și Rapide
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Obține aprobarea pentru mașina visurilor tale cu ajutorul partenerilor noștri de încredere. Proces simplu, transparent și adaptat nevoilor tale.
          </p>
          <Button size="lg">
            Aplică pentru Finanțare
          </Button>
        </AnimatedSection>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cum Funcționează?
            </h2>
            <p className="text-lg text-luxury-gold">Proces Simplificat în 3 Pași</p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggeredItem>
              <Card className="luxury-card text-center h-full">
                <CardContent className="p-8">
                  <div className="bg-luxury-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Car className="h-10 w-10 text-luxury-gold" />
                  </div>
                  <h3 className="font-luxury text-xl font-bold text-foreground mb-3">
                    Alegi Mașina
                  </h3>
                  <p className="text-muted-foreground">
                    Explorează parcul nostru auto și alege vehiculul care ți se potrivește.
                  </p>
                </CardContent>
              </Card>
            </StaggeredItem>

            <StaggeredItem>
              <Card className="luxury-card text-center h-full">
                <CardContent className="p-8">
                  <div className="bg-luxury-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-10 w-10 text-luxury-gold" />
                  </div>
                  <h3 className="font-luxury text-xl font-bold text-foreground mb-3">
                    Completezi Cererea
                  </h3>
                  <p className="text-muted-foreground">
                    Completează formularul nostru online securizat în mai puțin de 5 minute.
                  </p>
                </CardContent>
              </Card>
            </StaggeredItem>

            <StaggeredItem>
              <Card className="luxury-card text-center h-full">
                <CardContent className="p-8">
                  <div className="bg-luxury-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-luxury-gold" />
                  </div>
                  <h3 className="font-luxury text-xl font-bold text-foreground mb-3">
                    Primești Aprobarea
                  </h3>
                  <p className="text-muted-foreground">
                    Analizăm rapid cererea ta și te contactăm cu cea mai bună ofertă de finanțare.
                  </p>
                </CardContent>
              </Card>
            </StaggeredItem>
          </StaggeredGrid>
        </div>
      </section>

      {/* Financial Partners Section */}
      <AnimatedSection className="py-20 bg-luxury-darker">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partenerii Noștri Financiari
            </h2>
            <p className="text-muted-foreground">
              Colaborăm cu lideri de piață pentru a-ți oferi cele mai avantajoase condiții
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['TBI Bank', 'BT Leasing', 'Cetelem', 'Raiffeisen Bank'].map((partner) => (
              <Card key={partner} className="luxury-card">
                <CardContent className="p-8 flex items-center justify-center">
                  <p className="font-luxury text-xl text-luxury-gold">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Financing Calculator */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="luxury-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-luxury-gold/10 p-3 rounded-lg">
                    <Calculator className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <CardTitle className="font-luxury text-2xl text-luxury-gold">
                    Calculează-ți Rata Lunară
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label>Preț mașină (EUR)</Label>
                      <span className="text-luxury-gold font-semibold">€{carPrice.toLocaleString()}</span>
                    </div>
                    <Slider
                      value={[carPrice]}
                      onValueChange={(value) => setCarPrice(value[0])}
                      min={10000}
                      max={200000}
                      step={5000}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label>Avans (EUR)</Label>
                      <span className="text-luxury-gold font-semibold">€{downPayment.toLocaleString()}</span>
                    </div>
                    <Slider
                      value={[downPayment]}
                      onValueChange={(value) => setDownPayment(value[0])}
                      min={0}
                      max={carPrice * 0.5}
                      step={1000}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label>Perioadă (luni)</Label>
                      <span className="text-luxury-gold font-semibold">{period} luni</span>
                    </div>
                    <Slider
                      value={[period]}
                      onValueChange={(value) => setPeriod(value[0])}
                      min={12}
                      max={84}
                      step={6}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="bg-luxury-gold/10 rounded-lg p-6 text-center border border-luxury-gold/20">
                  <p className="text-muted-foreground mb-2">Rată lunară estimată:</p>
                  <p className="font-luxury text-4xl font-bold text-luxury-gold">
                    €{monthlyPayment}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  *Această valoare este estimativă și nu are valoare contractuală. Pentru o ofertă personalizată, vă rugăm să ne contactați.
                </p>

                <Button className="w-full" size="lg">
                  Solicită Ofertă Personalizată
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-luxury-darker">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
                Întrebări Frecvente (FAQ)
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="luxury-card border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="font-semibold text-foreground text-left">
                    Ce acte sunt necesare pentru un credit auto?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Pentru solicitarea unui credit auto, sunt necesare: carte de identitate sau pașaport valabil, 
                  ultima fișă de salariu sau alte documente care atestă veniturile, extras de cont bancar pentru 
                  ultimele 3-6 luni, și actele mașinii pe care doriți să o achiziționați.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="luxury-card border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="font-semibold text-foreground text-left">
                    Pot obține finanțare dacă lucrez în străinătate?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Da, colaborăm cu instituții financiare care oferă soluții pentru persoanele care lucrează în 
                  străinătate. Veți avea nevoie de documente suplimentare care să ateste veniturile obținute în 
                  exterior și adresa din România unde va fi înmatriculat vehiculul.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="luxury-card border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="font-semibold text-foreground text-left">
                    Care este perioada maximă de finanțare?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Perioada de finanțare poate varia în funcție de partenerul financiar și de valoarea vehiculului, 
                  dar în general aceasta poate ajunge până la 84 de luni (7 ani). Vom găsi împreună soluția cea mai 
                  potrivită pentru bugetul și nevoile dumneavoastră.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="luxury-card border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="font-semibold text-foreground text-left">
                    Este necesar un avans minim?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Deși unele instituții financiare oferă posibilitatea finanțării fără avans, de obicei este 
                  recomandat un avans între 10% și 30% din valoarea vehiculului. Un avans mai mare poate reduce 
                  rata lunară și poate îmbunătăți condițiile de creditare.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  )
}

export default Finantare
