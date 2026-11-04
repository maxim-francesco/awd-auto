import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/luxury-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ListChecks, Truck, MessageSquare } from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import Container from "@/components/ui/Container"
import { toast } from "sonner"

const MasiniLaComanda = () => {
  const [isGdprChecked, setIsGdprChecked] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      setMessage("");
      setIsGdprChecked(false);
    }, 600);
  };

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
      {/* Hero Section - Auto Mivrus Style */}
      <section className="bg-ink-deep border-b border-ink-border text-ink-foreground py-20 lg:py-28 text-center">
        <Container>
          <AnimatedSection className="max-w-4xl mx-auto">
            <p className="eyebrow text-gold mb-3">La comandă</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink-foreground mb-6">
              Nu găsești mașina dorită? <br/><span className="text-gold-gradient">O aducem noi pentru tine!</span>
            </h1>
            <p className="text-base sm:text-xl text-ink-muted max-w-3xl mx-auto">
              Spune-ne ce cauți și echipa noastră se va ocupa de tot procesul, de la căutare și verificare, până la livrare direct la ușa ta.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* How it Works Section - Warm Light Surface */}
      <section className="py-16 lg:py-24 bg-background text-foreground">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow text-gold-contrast mb-3">Proces simplificat</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Cum Funcționează?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Procesul nostru este simplu, transparent și conceput pentru a-ți oferi liniște și siguranță.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <StaggeredItem key={index}>
                <div className="h-full flex flex-col rounded-xl border border-border bg-card shadow-card p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1">
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold mx-auto mb-6">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </Container>
      </section>

      {/* Contact Form Section - Deep Dark Section */}
      <section className="py-16 lg:py-24 bg-ink border-t border-ink-border text-ink-foreground">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-ink-border bg-ink-raised shadow-card p-6 sm:p-10">
              <div className="text-center mb-8">
                <p className="eyebrow text-gold mb-2">Configurare personalizată</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-ink-foreground">
                  Trimite o Cerere de Ofertă
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-semibold text-ink-foreground">Nume și Prenume</Label>
                    <Input
                      id="name"
                      placeholder="Numele tău"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-ink border-ink-border text-ink-foreground focus-visible:ring-gold"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-semibold text-ink-foreground">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+40 722 123 456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-ink border-ink-border text-ink-foreground focus-visible:ring-gold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-semibold text-ink-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="adresa@email.ro"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-ink border-ink-border text-ink-foreground focus-visible:ring-gold"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-semibold text-ink-foreground">Descrie mașina dorită</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Ex: Audi A6, după 2019, sub 100.000 km, buget ~25.000€, scaune încălzite, trapă..."
                    className="min-h-[140px] bg-ink border-ink-border text-ink-foreground focus-visible:ring-gold"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="gdpr-comanda"
                    checked={isGdprChecked}
                    onCheckedChange={(checked) => setIsGdprChecked(checked as boolean)}
                    className="data-[state=checked]:bg-gold data-[state=checked]:text-ink mt-0.5 border-ink-border"
                  />
                  <Label htmlFor="gdpr-comanda" className="text-sm font-normal text-ink-muted leading-snug">
                    Am citit și sunt de acord cu <a href="/politica-confidentialitate" target="_blank" rel="noopener noreferrer" className="underline text-gold hover:text-gold-soft font-semibold">Politica de Confidențialitate</a> a site-ului.
                  </Label>
                </div>

                <button
                  type="submit"
                  disabled={!isGdprChecked || isSubmitting}
                  className="btn-gold w-full min-h-[48px] text-base font-bold text-ink"
                >
                  {isSubmitting ? "Se trimite..." : "Trimite Cererea"}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default MasiniLaComanda;
