import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/luxury-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Car, FileText, CheckCircle, Calculator, ShieldCheck, UserCheck, Percent } from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { useState } from "react"

const Finantare = () => {
  const [carPrice, setCarPrice] = useState(25000)
  const [period, setPeriod] = useState(60)

  const interestRate = 0.08 // 8% dobândă anuală DAE
  const monthlyInterestRate = interestRate / 12
  const monthlyPayment = (
    (carPrice * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -period))
  ).toFixed(0)
  const totalPayment = (parseFloat(monthlyPayment) * period).toLocaleString('ro-RO')

  const partners = ["Unicredit", "TBI Bank", "BT Direct", "Mogo"]
  
  const warrantyFeatures = [
      "Motor", "Transmisie", "Diferențial", "Ambreiaj", "Tracțiune pe 4 roți", "Frâne",
      "Sistem de alimentare", "Instalație electrică", "Direcție", "Sistemul de injecție", "Sistem răcire", "Aer condiționat"
  ]

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
      
      {/* Financial Partners Section */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partenerii Noștri Financiari
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Colaborăm cu lideri de piață pentru a-ți oferi cele mai avantajoase condiții de creditare și leasing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            {partners.map((partner) => (
              <Card key={partner} className="luxury-card border-border/60">
                <CardContent className="p-8 flex items-center justify-center">
                  <p className="font-luxury text-xl text-foreground">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>

           <Card className="luxury-card mt-12 max-w-4xl mx-auto bg-luxury-gold/5 border-luxury-gold/20">
              <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                      <img src="https://mogo.ro/favicon.ico" alt="Mogo" className="h-8 w-8" />
                      <span className="font-luxury text-xl text-luxury-gold">Finanțare și cu Istoric Negativ?</span>
                  </CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">Prin parteneriatul nostru strategic cu <strong className="text-foreground">Mogo</strong>, oferim soluții de finanțare chiar și persoanelor cu istoric negativ în biroul de credit. Înțelegem că fiecare situație este unică, de aceea te încurajăm să ne contactezi pentru o evaluare personalizată și confidențială.</p>
              </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      {/* Financing Calculator */}
      <AnimatedSection className="py-20 bg-luxury-darker">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-md">
                <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Calculează-ți Rata
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Folosește calculatorul nostru interactiv pentru a obține o estimare rapidă a ratei lunare. Ajustează suma și perioada pentru a găsi planul perfect pentru bugetul tău.
                </p>
            </div>
            <Card className="luxury-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-luxury-gold/10 p-3 rounded-lg">
                    <Calculator className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <CardTitle className="font-luxury text-2xl text-luxury-gold">
                    Estimator Credit Auto
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between font-medium">
                      <Label>Suma dorită (EUR)</Label>
                      <span className="text-luxury-gold font-semibold">€{carPrice.toLocaleString()}</span>
                    </div>
                    <Slider
                      value={[carPrice]}
                      onValueChange={(value) => setCarPrice(value[0])}
                      min={5000}
                      max={100000}
                      step={1000}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between font-medium">
                      <Label>Perioada (luni)</Label>
                      <span className="text-luxury-gold font-semibold">{period} luni</span>
                    </div>
                    <Slider
                      value={[period]}
                      onValueChange={(value) => setPeriod(value[0])}
                      min={12}
                      max={84}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Rata lunară</p>
                      <p className="font-bold text-lg text-foreground">€{monthlyPayment}</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Dobândă (DAE)</p>
                      <p className="font-bold text-lg text-foreground">~{(interestRate * 100).toFixed(1)}%</p>
                  </div>
                   <div className="bg-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Total de plată</p>
                      <p className="font-bold text-lg text-foreground">€{totalPayment}</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  *Acest calcul este informativ și nu are valoare contractuală. Dobânda poate varia.
                </p>

                <Button className="w-full" size="lg">
                  Aplică Acum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Warranty Section */}
      <AnimatedSection className="py-20 bg-background">
          <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                   <div className="max-w-md">
                      <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Garanție Extinsă DEFEND Car Protect
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Condu fără griji! Prin parteneriatul cu <strong className="text-foreground">DEFEND Insurance</strong>, îți oferim programul de garanție <strong className="text-foreground">PLUS</strong>, special conceput pentru vehiculele rulate.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="h-6 w-6 text-luxury-gold" />
                            <p className="font-medium">Acoperire pentru daune mecanice, electrice și electronice.</p>
                        </div>
                         <div className="flex items-center gap-3">
                            <UserCheck className="h-6 w-6 text-luxury-gold" />
                            <p className="font-medium">Vârsta maximă a vehiculului: 15 ani.</p>
                        </div>
                         <div className="flex items-center gap-3">
                            <Percent className="h-6 w-6 text-luxury-gold" />
                            <p className="font-medium">Limită de despăgubire generoasă, până la prețul de achiziție.</p>
                        </div>
                      </div>
                  </div>
                  <Card className="luxury-card">
                      <CardHeader>
                          <CardTitle className="font-luxury text-xl text-luxury-gold">Componente Acoperite de Programul PLUS</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                              {warrantyFeatures.map(feature => (
                                  <div key={feature} className="flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                                      <span className="text-sm text-muted-foreground">{feature}</span>
                                  </div>
                              ))}
                          </div>
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
                  Perioada de finanțare poate varia în funcție de partenerul financiar și de vechimea vehiculului, 
                  dar în general aceasta poate ajunge până la 60 de luni (5 ani). Vom găsi împreună soluția cea mai 
                  potrivită pentru bugetul și nevoile dumneavoastră.
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
