import Layout from "@/components/layout/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, Building, FileText, CheckCircle, Banknote, ShieldCheck } from "lucide-react"
import Container from "@/components/ui/Container"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/luxury-button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


// Import logos
import btDirectLogo from '@/assets/logos/btlogo.png';
import mogoLogo from '@/assets/logos/mogo.png';
import tbiLogo from '@/assets/logos/tbi-featured_logo.png';
import unicreditLogo from '@/assets/logos/UniCredit-Bank-Emblem.png';
import porscheLogo from '@/assets/logos/porsche2.png';
import tbiBanner from '@/assets/logos/banner1.jpg';
import heroBg from '@/assets/logos/banner1.jpg';


const Finantare = () => {
  const [isGdprChecked, setIsGdprChecked] = useState(false);

  return (
    <Layout>
      {/* New Hero Section */}
      <section 
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-luxury">
              Finanțare
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Colaborăm cu parteneri financiari de renume pentru a oferi soluții de leasing și credit auto personalizate, adaptate nevoilor dumneavoastră.
            </p>
          </div>
        </Container>
      </section>

      {/* Pay in installments Section */}
      <section className="py-20 bg-background">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-luxury">
                        Plătește în rate fără avans
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Aplică folosind formularul alăturat pentru a vedea dacă ești eligibil pentru finanțare.
                    </p>
                    <div className="flex justify-center md:justify-start">
                         <img src={tbiLogo} alt="TBI Bank Logo" className="h-20 w-auto object-contain" />
                    </div>
                </div>

                {/* Right Column - Form */}
                <div>
                     <Card className="luxury-card">
                        <CardContent className="p-8 space-y-6">
                             <div className="space-y-2">
                                <Label htmlFor="name-contact">Nume*</Label>
                                <Input id="name-contact" placeholder="Numele tău" required />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email-contact">Email*</Label>
                                <Input id="email-contact" type="email" placeholder="adresa@email.ro" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone-contact">Număr de telefon*</Label>
                                <Input id="phone-contact" type="tel" placeholder="+40 722 123 456" required />
                            </div>
                            <div className="flex items-start space-x-3 pt-2">
                                <Checkbox id="gdpr-finantare" onCheckedChange={(checked) => setIsGdprChecked(checked as boolean)} />
                                <Label htmlFor="gdpr-finantare" className="text-xs font-normal text-muted-foreground leading-snug">
                                    Sunt de acord ca datele mele să fie procesate în vederea realizării ofertei solicitate.
                                </Label>
                            </div>
                            <Button className="w-full" size="lg" disabled={!isGdprChecked}>
                                Aplică Acum
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Container>
      </section>

      {/* TBI Bank Criteria Section */}
      <section className="py-20 bg-luxury-darker">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-luxury">
              Detalii Finanțare prin TBI Bank
            </h2>
          </div>
          
           <div className="max-w-2xl mx-auto my-8">
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

      {/* Individuals Documentation Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-luxury">
                Persoane Fizice: Documentația Necesară
              </h2>
              <p className="text-muted-foreground">
                Procesul de finanțare pentru persoane fizice este simplificat pentru a vă oferi o experiență cât mai rapidă și eficientă.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Cerere de Finanțare</h4>
                    <p className="text-sm text-muted-foreground">Completați formularul standard de aplicare pus la dispoziție de partenerul nostru financiar.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Copie a Cărții de Identitate</h4>
                    <p className="text-sm text-muted-foreground">O copie validă a actului de identitate al solicitantului.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img 
                data-ai-hint="happy driver"
                src="https://picsum.photos/seed/financedriver/600/500"
                alt="Persoana fericita in masina noua"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </Container>
      </section>
      
      {/* Business Documentation Section */}
      <section className="py-20 bg-luxury-darker">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                data-ai-hint="car keys deal"
                src="https://picsum.photos/seed/businessdeal/600/500"
                alt="Predare chei masina"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-luxury">
                Afaceri: Documentația Necesară
              </h2>
              <p className="text-muted-foreground">
                Oferim soluții de finanțare și pentru persoane juridice, cu un pachet de documente adaptat nevoilor de business.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Cerere de Finanțare</h4>
                    <p className="text-sm text-muted-foreground">Formularul de aplicare specific persoanelor juridice.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Identificare Reprezentant Legal</h4>
                    <p className="text-sm text-muted-foreground">Copie a actului de identitate pentru administratorul sau reprezentantul legal al firmei.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <Building className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Certificat de Înregistrare</h4>
                    <p className="text-sm text-muted-foreground">Copie a Certificatului de Înregistrare a companiei (CUI).</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Bilanțuri și Balanțe Contabile</h4>
                    <p className="text-sm text-muted-foreground">Ultimele bilanțuri anuale și cea mai recentă balanță contabilă lunară.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      
    </Layout>
  )
}

export default Finantare
