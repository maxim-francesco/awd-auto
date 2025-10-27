import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/luxury-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Car, FileText, CheckCircle, Calculator, ShieldCheck, UserCheck, Percent, Banknote, Building } from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import Container from "@/components/ui/Container"

// Import logos
import btDirectLogo from '@/assets/logos/btlogo.png';
import mogoLogo from '@/assets/logos/mogo.png';
import tbiLogo from '@/assets/logos/tbi-featured_logo.png';
import unicreditLogo from '@/assets/logos/UniCredit-Bank-Emblem.png';
import porscheLogo from '@/assets/logos/porsche2.png';
import tbiBanner from '@/assets/logos/tbi_banner1.jpg';


const Finantare = () => {
  const [carPrice, setCarPrice] = useState(125000)
  const [period, setPeriod] = useState(60)

  const interestRate = 0.08 // 8% dobândă anuală DAE
  const monthlyInterestRate = interestRate / 12
  const monthlyPayment = (
    (carPrice * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -period))
  ).toFixed(0)
  const totalPayment = (parseFloat(monthlyPayment) * period).toLocaleString('ro-RO')

  return (
    <Layout>
      {/* Unified Hero and Partners Section */}
      <section className="bg-background py-16 md:py-20">
        <Container>
            {/* Main Title Block */}
            <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-luxury">
                    Soluții de Finanțare Adaptate Nevoilor Tale
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Obține aprobarea pentru mașina visurilor tale cu ajutorul partenerilor noștri de încredere. Oferim atât opțiuni de credit auto, cât și de leasing.
                </p>
            </div>

            {/* --- NEW TWO-COLUMN LAYOUT --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* --- Column 1: Credit Auto --- */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-center text-luxury-gold">Credit Auto</h3>
                    <p className="text-center text-muted-foreground text-sm">
                        Soluții clasice de finanțare, ideale pentru achiziția directă a vehiculului.
                    </p>
                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="flex flex-col items-center justify-center gap-4">
                            <img src={unicreditLogo} alt="UniCredit Bank Logo" className="h-16 w-auto object-contain" />
                            <p className="font-semibold text-muted-foreground">UniCredit Bank</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <img src={tbiLogo} alt="TBI Bank Logo" className="h-16 w-auto object-contain" />
                            <p className="font-semibold text-muted-foreground">TBI Bank</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <img src={btDirectLogo} alt="BT Direct Logo" className="h-16 w-auto object-contain" />
                            <p className="font-semibold text-muted-foreground">BT Direct</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <img src={mogoLogo} alt="Mogo Logo" className="h-16 w-auto object-contain" />
                            <p className="font-semibold text-muted-foreground">Mogo</p>
                        </div>
                    </div>
                </div>

                {/* --- Column 2: Leasing Auto --- */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-center text-luxury-gold">Leasing Auto</h3>
                    <p className="text-center text-muted-foreground text-sm">
                        Opțiuni flexibile de leasing, potrivite atât pentru persoane fizice, cât și juridice.
                    </p>
                    <div className="pt-4 flex justify-center">
                        <div className="flex flex-col items-center justify-center gap-4 p-6 border border-border rounded-lg bg-card w-full max-w-xs">
                            <img src={porscheLogo} alt="Porsche Leasing Logo" className="h-16 w-auto object-contain" />
                            <p className="font-semibold text-muted-foreground">Porsche Leasing</p>
                        </div>
                    </div>
                </div>
            </div>

            <Card className="luxury-card mt-16 max-w-4xl mx-auto bg-luxury-gold/5 border-luxury-gold/20">
              <div className="grid md:grid-cols-3 items-center">
                <div className="md:col-span-1 flex items-center justify-center p-8 bg-luxury-darker/50 rounded-l-lg">
                  <img src={mogoLogo} alt="Mogo Logo" className="w-40 h-auto" />
                </div>
                <div className="md:col-span-2 p-8">
                  <CardHeader className="p-0 mb-4">
                      <CardTitle className="font-luxury text-xl text-luxury-gold">Finanțare și cu Istoric Negativ?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                      <p className="text-muted-foreground">Prin parteneriatul nostru strategic cu <strong className="text-foreground">Mogo</strong>, oferim soluții de finanțare chiar și persoanelor cu istoric negativ în biroul de credit. Înțelegem că fiecare situație este unică, de aceea te încurajăm să ne contactezi pentru o evaluare personalizată și confidențială.</p>
                  </CardContent>
                </div>
              </div>
            </Card>
        </Container>
      </section>

      {/* TBI Bank Criteria Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-luxury">
              Detalii Finanțare prin TBI Bank
            </h2>
          </div>
          
           <div className="max-w-4xl mx-auto my-8">
            <img 
              src={tbiBanner} 
              alt="TBI Bank Finanțare Auto" 
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Column: Persoane Fizice */}
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-luxury-gold" />
                  <span className="text-2xl">Finanțare Persoane Fizice</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Criterii de eligibilitate:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Vârsta: 18-75 ani (la terminarea creditului)</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Vechime de minim 3 luni la actualul angajator</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Salariul minim: 2000 RON</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Pensie minimă: 1250 RON</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Venituri acceptate: salarii, pensii, PFA, șoferi cu diurne, chirii, dividente, indemnizații</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Se acceptă un codebitor (nu este obligatoriu să fie din familie)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Detalii Credit:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><Banknote className="h-4 w-4 mr-2 mt-1 text-blue-400 flex-shrink-0" /> Sumă finanțată: 3.000 - 150.000 RON</li>
                    <li className="flex items-start"><Banknote className="h-4 w-4 mr-2 mt-1 text-blue-400 flex-shrink-0" /> Timp de răspuns: 15 - 120 minute</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Documente Necesare:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><FileText className="h-4 w-4 mr-2 mt-1 text-purple-400 flex-shrink-0" /> Buletin, e-mail și număr de telefon (pentru semnarea electronică a acordurilor GDPR, ANAF și Birou Credit)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Criterii pentru Venituri din Străinătate:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Vechime de minim 6 luni cu contract de muncă pe perioadă nedeterminată.</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Contractul de muncă trebuie tradus de un traducător autorizat.</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Dacă aveți istoric de creditare în România în ultimii 5 ani, nu este necesar un girant.</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Dacă nu aveți istoric de creditare, este necesar un girant din România (angajat de min. 3 luni sau pensionar).</li>
                  </ul>
                </div>
                 <div>
                  <h4 className="font-semibold text-foreground mb-3">Documente Necesare (Venituri din Străinătate):</h4>
                  <ul className="space-y-2 text-muted-foreground">
                     <li className="flex items-start"><FileText className="h-4 w-4 mr-2 mt-1 text-purple-400 flex-shrink-0" /> Contract de muncă original și tradus</li>
                    <li className="flex items-start"><FileText className="h-4 w-4 mr-2 mt-1 text-purple-400 flex-shrink-0" /> Extrase de cont cu venitul lunar</li>
                    <li className="flex items-start"><FileText className="h-4 w-4 mr-2 mt-1 text-purple-400 flex-shrink-0" /> Poză după buletin</li>
                    <li className="flex items-start"><FileText className="h-4 w-4 mr-2 mt-1 text-purple-400 flex-shrink-0" /> Adresă de e-mail</li>
                    <li className="flex items-start"><FileText className="h-4 w-4 mr-2 mt-1 text-purple-400 flex-shrink-0" /> Număr de telefon de România</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Right Column: Persoane Juridice */}
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-luxury-gold" />
                  <span className="text-2xl">Finanțare Persoane Juridice</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div>
                  <h4 className="font-semibold text-foreground mb-3">Criterii de Eligibilitate:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Cifră de afaceri minimă: 500.000 RON</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Cifră de afaceri minimă pentru firme de transport și construcții: 1.500.000 RON</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Vechime firmă: minim 1 an</li>
                    <li className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" /> Bilanțul pe anul anterior trebuie să fie depus.</li>
                  </ul>
                </div>
                 <div>
                  <h4 className="font-semibold text-foreground mb-3">Detalii Finanțare:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><Banknote className="h-4 w-4 mr-2 mt-1 text-blue-400 flex-shrink-0" /> Sumă maximă finanțată: 250.000 RON</li>
                    <li className="flex items-start"><Banknote className="h-4 w-4 mr-2 mt-1 text-blue-400 flex-shrink-0" /> Se finanțează până la 10% din cifra de afaceri.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Financing Calculator */}
      <AnimatedSection className="py-20 bg-luxury-darker">
        <Container>
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
                      <Label>Suma dorită (RON)</Label>
                      <span className="text-luxury-gold font-semibold">{carPrice.toLocaleString()} RON</span>
                    </div>
                    <Slider
                      value={[carPrice]}
                      onValueChange={(value) => setCarPrice(value[0])}
                      min={25000}
                      max={250000}
                      step={2500}
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
                      max={60}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Rată lunară</p>
                      <p className="font-bold text-lg text-foreground">{monthlyPayment} RON</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Dobândă (DAE)</p>
                      <p className="font-bold text-lg text-foreground">~{(interestRate * 100).toFixed(1)}%</p>
                  </div>
                   <div className="bg-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Total de plată</p>
                      <p className="font-bold text-lg text-foreground">{totalPayment} RON</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  *Acest calcul este informativ și nu are valoare contractuală. Dobânda poate varia.
                </p>

              </CardContent>
            </Card>
          </div>
        </Container>
      </AnimatedSection>
      

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-background">
        <Container>
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
        </Container>
      </AnimatedSection>
    </Layout>
  )
}

export default Finantare
