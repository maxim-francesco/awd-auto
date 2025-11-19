
import Layout from "@/components/layout/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, Building, FileText, CheckCircle } from "lucide-react"
import Container from "@/components/ui/Container"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/luxury-button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


// Import logos
import btDirectLogo from '@/assets/logos/btlogo.png';
import mogoLogo from '@/assets/logos/mogo.png';
import tbiLogo from '@/assets/logos/tbi-featured_logo.png';
import unicreditLogo from '@/assets/logos/UniCredit-Bank-Emblem.png';
import porscheLogo from '@/assets/logos/porsche2.png';
import tbiBanner from '@/assets/logos/banner1.jpg';
import b1Image from '@/assets/logos/b1.png';
import b2Image from '@/assets/logos/b2.png';


const Finantare = () => {
  const [isGdprChecked, setIsGdprChecked] = useState(false);

  return (
    <Layout>
      {/* New Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-darker via-luxury-dark to-luxury-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.1),transparent_50%)]" />
        </div>
        
        <Container className="relative z-10 text-center">
          <AnimatedSection>
            <h1 className="font-luxury text-4xl md:text-6xl font-bold bg-gradient-to-r from-luxury-gold via-white to-luxury-gold bg-clip-text text-transparent mb-6">
              Finanțare
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
               Colaborăm cu parteneri financiari de renume pentru a oferi soluții de leasing și credit auto personalizate, adaptate nevoilor dumneavoastră.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Pay in installments Section */}
      <section className="py-20 bg-background">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-luxury">
                        Plătește în rate fără avans
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Aplică folosind formularul alăturat pentru a vedea dacă ești eligibil pentru finanțare.
                    </p>
                    <img 
                        src={tbiBanner} 
                        alt="TBI Bank Finanțare Auto" 
                        className="w-full rounded-lg shadow-md mt-4" 
                    />
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

      {/* --- Detailed Criteria Section with Tabs --- */}
      <section className="py-20 bg-luxury-darker">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-luxury">
              Detalii Finanțare Parteneri
            </h2>
          </div>

          <Tabs defaultValue="tbi" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tbi">Detalii TBI Bank</TabsTrigger>
              <TabsTrigger value="unicredit">Detalii UniCredit Consumer Finacing</TabsTrigger>
            </TabsList>

            {/* --- TBI Bank Content --- */}
            <TabsContent value="tbi" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Persoane Fizice */}
                <div className="space-y-6 luxury-card p-8">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-4 border-b border-border pb-3">
                    Finanțare Persoane Fizice
                  </h3>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Criterii de eligibilitate:</h4>
                    <ul className="list-none space-y-2 pl-2">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Vârsta: 18-75 ani (la terminarea creditului)</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Minim 3 luni la actualul angajator (3 salarii încasate și declarate la ANAF)</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Salariu minim: 2000 lei</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Pensie minimă: 1250 lei</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Acceptăm venit din: salarii, pensii, PFA, șoferi cu diurne, chirii, dividente, indemnizații</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Dacă clientul nu se încadrează singur, TBI Bank acceptă un codebitor (nu este obligatoriu să fie din familie)</span></li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Detalii Credit:</h4>
                    <ul className="list-none space-y-2 pl-2">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Sumă finanțată: 3.000 - 150.000 RON</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Timp de răspuns: 15 min - 120 min</span></li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Documente necesare pentru analiză:</h4>
                    <ul className="list-none space-y-2 pl-2">
                       <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Buletin, email, telefon (pentru semnarea electronică a acordului GDPR, ANAF și BIROU CREDIT)</span></li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Criterii pentru Venituri din Străinătate:</h4>
                    <ul className="list-none space-y-2 pl-2">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Contract de muncă pe perioadă nedeterminată, cu o vechime de minim 6 luni.</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Dacă aveți Istoric Creditare în România în ultimii 5 ani, nu aveți nevoie de girant. Dacă nu, este nevoie de un girant angajat de minim 3 luni (se acceptă și pensionari).</span></li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Documente Necesare (Venituri din Străinătate):</h4>
                    <ul className="list-none space-y-2 pl-2">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Contract de muncă original și tradus de un traducător autorizat</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Extrase de cont cu venitul lunar</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Poză după buletin</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Adresă de e-mail</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Număr de telefon de România</span></li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Persoane Juridice */}
                <div className="space-y-6 luxury-card p-8">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-4 border-b border-border pb-3">
                    Finanțare Persoane Juridice
                  </h3>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Criterii de Eligibilitate:</h4>
                    <ul className="list-none space-y-2 pl-2">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Cifră de afaceri minimă: 500.000 RON</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Cifră de afaceri minimă (transport și construcții): 1.500.000 RON</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Vechime firmă: minim 1 an</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Bilanțul pe anul anterior trebuie să fie depus.</span></li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Detalii Finanțare:</h4>
                    <ul className="list-none space-y-2 pl-2">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Sumă maximă finanțată: 250.000 RON</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Se finanțează până la 10% din cifra de afaceri.</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* --- UniCredit Consumer Finacing Content --- */}
            <TabsContent value="unicredit" className="mt-6 p-6 bg-card rounded-lg">
                <div className="text-center mb-6">
                    <img 
                    src={unicreditLogo} 
                    alt="UniCredit Consumer Finacing" 
                    className="h-16 w-auto mx-auto object-contain" 
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* --- Left Column: Product Features --- */}
                    <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-3 text-luxury-gold">Caracteristici Produs</h3>
                    
                    <ul className="list-none space-y-3 text-muted-foreground">
                        <li><strong className="text-foreground">Tip bun:</strong> Autoturism rulat</li>
                        <li><strong className="text-foreground">Perioadă maximă:</strong> Până la 5 ani</li>
                        <li><strong className="text-foreground">Dobândă:</strong> Fixă pe toată perioada creditului</li>
                        <li><strong className="text-foreground">Valoare finanțată:</strong> 16.000 - 300.000 Lei</li>
                        <li><strong className="text-foreground">Codebitor:</strong> Acceptat</li>
                        <li><strong className="text-foreground">Asigurare de viață:</strong> Opțională</li>
                        <li><strong className="text-foreground">Avans minim:</strong>
                        <ul className="list-['-_'] list-outside pl-5 mt-1 space-y-1">
                            <li><strong>0%</strong> pentru credite de până la 150.000 RON</li>
                            <li><strong>10%</strong> pentru credite între 150.001 și 200.000 RON</li>
                            <li><strong>20%</strong> pentru credite de peste 200.000 RON</li>
                        </ul>
                        </li>
                    </ul>
                    </div>

                    {/* --- Right Column: Eligibility & Documents --- */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold mb-3 text-luxury-gold">Condiții de Acordare (Persoane Fizice)</h3>
                        
                        <p className="text-muted-foreground">Vârsta între <strong>22 și 70 de ani</strong> (la finalizarea contractului).</p>

                        <h4 className="font-semibold text-foreground pt-2">Documente Necesare:</h4>
                        <ul className="list-none space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Actul de identitate</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Acord de consultare ANAF (se completează la locație)</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span>Documente doveditoare pentru alte venituri (chirii, dividente, etc.)</span></li>
                        </ul>

                    </div>
                </div>
            </TabsContent>
            
          </Tabs>
        </Container>
      </section>

      {/* Individuals Documentation Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             {/* Right Column (Image) */}
             <div>
              <img 
                src={b1Image}
                alt="Documentație finanțare persoane fizice"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            {/* Left Column (Text) */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-luxury">
                Persoane Fizice: Documentația Necesară pentru Finanțare
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
          </div>
        </Container>
      </section>
      
      {/* Business Documentation Section */}
      <section className="py-20 bg-luxury-darker">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column (Text) */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-luxury">
                Afaceri: Documentația Necesară Pentru Finanțare
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
                    <FileText className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Bilanțuri Contabile</h4>
                     <p className="text-sm text-muted-foreground">Ultimele bilanțuri contabile anuale.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Balanță Contabilă Lunară</h4>
                     <p className="text-sm text-muted-foreground">Cea mai recentă balanță contabilă lunară.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-luxury-gold" />
                  </div>
                   <div>
                    <h4 className="font-semibold text-foreground">Identificare Semnatar</h4>
                    <p className="text-sm text-muted-foreground">Copie a actului de identitate pentru semnatarul contractului.</p>
                  </div>
                </li>
              </ul>
            </div>
             {/* Right Column (Image) */}
             <div className="order-first md:order-last">
              <img 
                src={b2Image}
                alt="Documentație finanțare persoane juridice"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* --- NEW FINANCIAL PARTNERS SECTION --- */}
      <section className="py-16 bg-background">
        <Container>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-luxury">
              Partenerii Noștri de Încredere
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Colaborăm cu lideri de piață pentru a vă oferi cele mai avantajoase și flexibile soluții de finanțare.
            </p>
          </div>

          {/* Two-column layout for the partners */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* --- Column 1: Credit Auto --- */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center text-foreground">Credit Auto</h3>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="flex flex-col items-center justify-center gap-4">
                  <img src={unicreditLogo} alt="UniCredit Consumer Finacing Logo" className="h-16 w-auto object-contain" />
                  <p className="font-semibold text-muted-foreground">UniCredit Consumer Finacing</p>
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
              <h3 className="text-2xl font-semibold text-center text-foreground">Leasing Auto</h3>
              <div className="pt-4 flex justify-center">
                  <div className="flex flex-col items-center justify-center gap-4 p-6 w-full max-w-xs">
                    <img src={porscheLogo} alt="Porsche Leasing Logo" className="h-16 w-auto object-contain" />
                    <p className="font-semibold text-muted-foreground">Porsche Leasing</p>                  </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default Finantare;
