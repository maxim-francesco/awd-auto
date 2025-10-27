import Layout from "@/components/layout/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, Building, FileText } from "lucide-react"
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
        className="bg-background py-20"
      >
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-luxury">
              Finanțare
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
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

      {/* Individuals Documentation Section */}
      <section className="py-20 bg-luxury-darker">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             {/* Right Column (Image) */}
             <div>
              <img 
                data-ai-hint="happy driver car"
                src="https://picsum.photos/seed/financedriver/600/500"
                alt="Persoana fericita in masina noua"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            {/* Left Column (Text) */}
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
          </div>
        </Container>
      </section>
      
      {/* Business Documentation Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column (Text) */}
            <div className="space-y-6">
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
              </ul>
            </div>
             {/* Right Column (Image) */}
             <div className="order-first md:order-last">
              <img 
                data-ai-hint="car keys deal"
                src="https://picsum.photos/seed/businessdeal/600/500"
                alt="Predare chei masina"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* --- NEW FINANCIAL PARTNERS SECTION --- */}
      <section className="py-16 bg-luxury-darker">
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
              <h3 className="text-2xl font-semibold text-center text-foreground">Leasing Auto</h3>
              <div className="pt-4 flex justify-center">
                  <div className="flex flex-col items-center justify-center gap-4 p-6 w-full max-w-xs">
                    <img src={porscheLogo} alt="Porsche Leasing Logo" className="h-16 w-auto object-contain" />
                    <p className="font-semibold text-muted-foreground">Porsche Leasing</p>
                  </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default Finantare
