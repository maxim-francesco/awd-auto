import Layout from "@/components/layout/Layout"
import { CheckCircle, UserCheck, Building, FileText } from "lucide-react"
import Container from "@/components/ui/Container"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

// Import logos
import tbiLogo from '@/assets/logos/tbi-featured_logo.png';
import unicreditLogo from '@/assets/logos/ucfin-logo-white.svg';
import porscheLogo from '@/assets/logos/porsche2.png';
import b2Image from '@/assets/logos/b2.png';

const Finantare = () => {
  const [isGdprChecked, setIsGdprChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isGdprChecked) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.info("Mod demonstrativ de previzualizare: formularul este funcțional, dar nicio solicitare reală nu a fost transmisă către server.");
      setName("");
      setEmail("");
      setPhone("");
      setIsGdprChecked(false);
    }, 600);
  };

  return (
    <Layout>
      {/* 1. Page Hero - Auto Mivrus Style */}
      <section className="bg-ink-deep border-b border-ink-border text-ink-foreground py-20 lg:py-28 text-center">
        <Container>
          <AnimatedSection className="max-w-4xl mx-auto">
            <p className="eyebrow text-gold mb-3">Soluții flexibile</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink-foreground mb-6">
              Finanțare Auto
            </h1>
            <p className="text-base sm:text-lg text-ink-muted max-w-3xl mx-auto">
              Colaborăm cu parteneri financiari de renume pentru a oferi soluții de leasing și credit auto personalizate, adaptate nevoilor dumneavoastră.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* 2. Pay in installments Section - Warm Light Surface */}
      <section className="py-16 lg:py-24 bg-background text-foreground">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-4 text-center md:text-left">
              <p className="eyebrow text-gold-contrast">Credit rapid</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
                Plătește în rate fără avans
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Aplică folosind formularul alăturat pentru a vedea dacă ești eligibil pentru finanțare.
              </p>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="rounded-xl border border-border bg-card shadow-card p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name-contact" className="text-xs font-semibold text-foreground">Nume*</Label>
                    <Input
                      id="name-contact"
                      placeholder="Numele tău"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-background border-border text-foreground focus-visible:ring-gold"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-contact" className="text-xs font-semibold text-foreground">Email*</Label>
                    <Input
                      id="email-contact"
                      type="email"
                      placeholder="adresa@email.ro"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background border-border text-foreground focus-visible:ring-gold"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone-contact" className="text-xs font-semibold text-foreground">Număr de telefon*</Label>
                    <Input
                      id="phone-contact"
                      type="tel"
                      placeholder="+40 722 123 456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-background border-border text-foreground focus-visible:ring-gold"
                      required
                    />
                  </div>
                  <div className="flex items-start space-x-3 pt-2">
                    <Checkbox
                      id="gdpr-finantare"
                      checked={isGdprChecked}
                      onCheckedChange={(checked) => setIsGdprChecked(checked as boolean)}
                      className="data-[state=checked]:bg-gold data-[state=checked]:text-ink mt-0.5 border-border"
                    />
                    <Label htmlFor="gdpr-finantare" className="text-xs font-normal text-muted-foreground leading-snug">
                      Sunt de acord ca datele mele să fie procesate în vederea realizării ofertei solicitate.
                    </Label>
                  </div>
                  <button
                    type="submit"
                    disabled={!isGdprChecked || isSubmitting}
                    className="btn-gold w-full min-h-[46px] text-base font-bold text-ink"
                  >
                    {isSubmitting ? "Se trimite..." : "Aplică Acum"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Detailed Criteria Section with Tabs - Deep Dark Surface */}
      <section className="py-16 lg:py-24 bg-ink border-y border-ink-border text-ink-foreground">
        <Container>
          <div className="text-center mb-12">
            <p className="eyebrow text-gold mb-3">Transparență și criterii</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink-foreground">
              Detalii Finanțare Parteneri
            </h2>
          </div>

          <Tabs defaultValue="unicredit" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 h-auto bg-ink-raised border border-ink-border p-1.5 rounded-xl">
              <TabsTrigger
                value="tbi"
                className="py-3 rounded-lg text-sm font-semibold text-ink-muted data-[state=active]:bg-gold data-[state=active]:text-ink data-[state=active]:font-bold transition-all"
              >
                Detalii TBI Bank
              </TabsTrigger>
              <TabsTrigger
                value="unicredit"
                className="py-3 rounded-lg text-sm font-semibold text-ink-muted data-[state=active]:bg-gold data-[state=active]:text-ink data-[state=active]:font-bold transition-all"
              >
                Detalii UniCredit Consumer Financing
              </TabsTrigger>
            </TabsList>

            {/* --- TBI Bank Content --- */}
            <TabsContent value="tbi" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {/* Left Column - Persoane Fizice */}
                <div className="space-y-6 rounded-xl border border-ink-border bg-ink-raised p-8">
                  <h3 className="text-2xl font-bold text-ink-foreground mb-4 border-b border-ink-border pb-3">
                    Finanțare Persoane Fizice
                  </h3>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gold">Criterii de eligibilitate:</h4>
                    <ul className="list-none space-y-2.5 text-sm text-ink-muted">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Vârsta: 18-75 ani (la terminarea creditului)</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Minim 3 luni la actualul angajator (3 salarii încasate și declarate la ANAF)</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Salariu minim: 2000 lei</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Pensie minimă: 1250 lei</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Acceptăm venit din: salarii, pensii, PFA, șoferi cu diurne, chirii, dividente, indemnizații</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Dacă clientul nu se încadrează singur, TBI Bank acceptă un codebitor (nu este obligatoriu să fie din familie)</span></li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gold">Detalii Credit:</h4>
                    <ul className="list-none space-y-2 text-sm text-ink-muted">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Sumă finanțată: 3.000 - 150.000 RON</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Timp de răspuns: 15 min - 120 min</span></li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gold">Criterii pentru Venituri din Străinătate:</h4>
                    <ul className="list-none space-y-2 text-sm text-ink-muted">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Contract de muncă pe perioadă nedeterminată, cu o vechime de minim 6 luni.</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Dacă aveți Istoric Creditare în România în ultimii 5 ani, nu aveți nevoie de girant. Dacă nu, este nevoie de un girant angajat de minim 3 luni (se acceptă și pensionari).</span></li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Persoane Juridice */}
                <div className="space-y-6 rounded-xl border border-ink-border bg-ink-raised p-8">
                  <h3 className="text-2xl font-bold text-ink-foreground mb-4 border-b border-ink-border pb-3">
                    Finanțare Persoane Juridice
                  </h3>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gold">Criterii de Eligibilitate:</h4>
                    <ul className="list-none space-y-2.5 text-sm text-ink-muted">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Cifră de afaceri minimă: 500.000 RON</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Cifră de afaceri minimă (transport și construcții): 1.500.000 RON</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Vechime firmă: minim 1 an</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Bilanțul pe anul anterior trebuie să fie depus.</span></li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gold">Detalii Finanțare:</h4>
                    <ul className="list-none space-y-2 text-sm text-ink-muted">
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Sumă maximă finanțată: 250.000 RON</span></li>
                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Se finanțează până la 10% din cifra de afaceri.</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* --- UniCredit Consumer Financing Content --- */}
            <TabsContent value="unicredit" className="mt-8 rounded-xl border border-ink-border bg-ink-raised p-8">
              <div className="text-center mb-8">
                <img 
                  src={unicreditLogo} 
                  alt="UniCredit Consumer Financing" 
                  className="h-16 md:h-20 w-auto mx-auto object-contain" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* --- Left Column: Product Features --- */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-3 text-gold">Caracteristici Produs</h3>
                  
                  <ul className="list-none space-y-3 text-sm text-ink-muted">
                    <li><strong className="text-ink-foreground">Tip bun:</strong> Autoturism rulat</li>
                    <li><strong className="text-ink-foreground">Perioadă maximă:</strong> Până la 5 ani</li>
                    <li><strong className="text-ink-foreground">Dobândă:</strong> Fixă pe toată perioada creditului</li>
                    <li><strong className="text-ink-foreground">Valoare finanțată:</strong> 16.000 - 300.000 Lei</li>
                    <li><strong className="text-ink-foreground">Codebitor:</strong> Acceptat</li>
                    <li><strong className="text-ink-foreground">Asigurare de viață:</strong> Opțională</li>
                    <li>
                      <strong className="text-ink-foreground">Avans minim:</strong>
                      <ul className="list-['-_'] list-outside pl-5 mt-1 space-y-1 text-xs">
                        <li><strong>0%</strong> pentru credite de până la 150.000 RON</li>
                        <li><strong>10%</strong> pentru credite între 150.001 și 200.000 RON</li>
                        <li><strong>20%</strong> pentru credite de peste 200.000 RON</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* --- Right Column: Eligibility & Documents --- */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-3 text-gold">Condiții de Acordare (Persoane Fizice)</h3>
                  
                  <p className="text-sm text-ink-muted">Vârsta între <strong className="text-ink-foreground">22 și 70 de ani</strong> (la finalizarea contractului).</p>

                  <h4 className="font-semibold text-gold pt-2">Documente Necesare:</h4>
                  <ul className="list-none space-y-2 text-sm text-ink-muted">
                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Actul de identitate</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Acord de consultare ANAF (se completează la locație)</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" /><span>Documente doveditoare pentru alte venituri (chirii, dividente, etc.)</span></li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </section>
      
      {/* 4. Business Documentation Section - Warm Light Surface */}
      <section className="py-16 lg:py-24 bg-background text-foreground">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column (Text) */}
            <div className="space-y-6">
              <p className="eyebrow text-gold-contrast">Corporate</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
                Afaceri: Documentația Necesară Pentru Finanțare
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Oferim soluții de finanțare și pentru persoane juridice, cu un pachet de documente adaptat nevoilor de business.
              </p>
              <ul className="space-y-4 pt-2">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center text-gold">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Identificare Reprezentant Legal</h4>
                    <p className="text-sm text-muted-foreground">Copie a actului de identitate pentru administratorul sau reprezentantul legal al firmei.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center text-gold">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Certificat de Înregistrare</h4>
                    <p className="text-sm text-muted-foreground">Copie a Certificatului de Înregistrare a companiei (CUI).</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center text-gold">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Bilanțuri Contabile</h4>
                    <p className="text-sm text-muted-foreground">Ultimele bilanțuri contabile anuale.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center text-gold">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Balanță Contabilă Lunară</h4>
                    <p className="text-sm text-muted-foreground">Cea mai recentă balanță contabilă lunară.</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Right Column (Image) */}
            <div className="order-first md:order-last overflow-hidden rounded-2xl border border-border shadow-card">
              <img 
                src={b2Image}
                alt="Documentație finanțare persoane juridice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Financial Partners Section - Deep Dark Surface */}
      <section className="py-16 lg:py-24 bg-ink-deep border-t border-ink-border text-ink-foreground">
        <Container>
          <div className="text-center mb-12">
            <p className="eyebrow text-gold mb-3">Rețea bancară</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink-foreground">
              Partenerii Noștri de Încredere
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-ink-muted text-base">
              Colaborăm cu lideri de piață pentru a vă oferi cele mai avantajoase și flexibile soluții de finanțare.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
            {/* Credit Auto */}
            <div className="rounded-xl border border-ink-border bg-ink-raised p-8 text-center space-y-6">
              <h3 className="text-xl font-bold text-gold">Credit Auto</h3>
              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img src={unicreditLogo} alt="Logo UniCredit Consumer Financing" className="h-16 w-auto object-contain" />
                  <p className="text-xs font-semibold text-ink-muted">UniCredit Consumer Financing</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <img src={tbiLogo} alt="TBI Bank Logo" className="h-14 w-auto object-contain" />
                  <p className="text-xs font-semibold text-ink-muted">TBI Bank</p>
                </div>
              </div>
            </div>

            {/* Leasing Auto */}
            <div className="rounded-xl border border-ink-border bg-ink-raised p-8 text-center space-y-6">
              <h3 className="text-xl font-bold text-gold">Leasing Auto</h3>
              <div className="flex flex-col items-center justify-center gap-3 pt-2">
                <img src={porscheLogo} alt="Porsche Leasing Logo" className="h-16 w-auto object-contain" />
                <p className="text-xs font-semibold text-ink-muted">Porsche Leasing</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default Finantare;
