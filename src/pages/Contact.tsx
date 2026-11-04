import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/luxury-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import Container from "@/components/ui/Container"
import { toast } from "sonner"

const Contact = () => {
  const [isGdprChecked, setIsGdprChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isGdprChecked) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.info(
        "Mod demonstrativ de previzualizare: formularul este funcțional, dar nicio solicitare reală nu a fost transmisă către server."
      );
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setIsGdprChecked(false);
    }, 600);
  };

  return (
    <Layout>
      {/* Dark Page Hero */}
      <section className="relative bg-ink-deep border-b border-ink-border py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-fade pointer-events-none opacity-40" />
        <Container className="relative z-10 text-center">
          <span className="eyebrow mb-3">Suntem la dispoziția ta</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-4xl mx-auto">
            Contactează AWD Auto - Parc Auto în Cluj-Napoca
          </h1>
          <p className="text-base md:text-lg text-steel max-w-2xl mx-auto">
            Suntem aici să vă ajutăm să găsiți mașina perfectă pentru dumneavoastră. Contactați-ne pentru mai multe informații.
          </p>
        </Container>
      </section>

      {/* Light Content Section */}
      <section className="bg-background py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Contact Information & Map */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informații de Contact
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-card border border-border p-5 rounded-xl shadow-card flex items-start space-x-4">
                    <div className="bg-gold/10 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">Adresa</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Strada Plevnei 117<br />
                        Cluj-Napoca, 400394, România
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border border-border p-5 rounded-xl shadow-card flex items-start space-x-4">
                    <div className="bg-gold/10 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground text-sm mb-1">Telefon</h3>
                      <a href="tel:0752228593" className="block text-muted-foreground hover:text-gold text-xs transition-colors">
                        0752 228 593
                      </a>
                      <a href="tel:0752575616" className="block text-muted-foreground hover:text-gold text-xs transition-colors">
                        0752 575 616
                      </a>
                    </div>
                  </div>

                  <div className="bg-card border border-border p-5 rounded-xl shadow-card flex items-start space-x-4">
                    <div className="bg-gold/10 p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">Email</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        contact@awdauto.ro<br />
                        vanzari@awdauto.ro
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border border-border p-5 rounded-xl shadow-card flex items-start space-x-4">
                    <div className="bg-gold/10 p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">Program</h3>
                      <div className="text-muted-foreground text-xs space-y-0.5 leading-relaxed">
                        <p>Luni - Vineri: 09:00 - 18:00</p>
                        <p>Sâmbătă: 09:00 - 14:00</p>
                        <p>Duminică: Închis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-card border border-border rounded-xl shadow-card overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.991192070335!2d23.62140881585293!3d46.7820649791395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c10257e8e5b%3A0x8686d45e76472251!2sStrada%20Plevnei%20117%2C%20Cluj-Napoca%20400394!5e0!3m2!1sen!2sro!4v1668583488772!5m2!1sen!2sro" 
                  width="100%" 
                  height="340" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AWD Auto Locație"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl shadow-card p-6 md:p-8">
              <div className="mb-6">
                <span className="eyebrow">Scrie-ne</span>
                <h2 className="text-2xl font-bold text-foreground mt-1">
                  Trimite-ne un Mesaj
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-xs font-semibold text-foreground">Prenume</Label>
                    <Input
                      id="firstName"
                      placeholder="Prenumele tău"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="bg-white border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-xs font-semibold text-foreground">Nume</Label>
                    <Input
                      id="lastName"
                      placeholder="Numele tău"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="bg-white border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-semibold text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="adresa@email.ro"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-semibold text-foreground">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+40 722 123 456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-xs font-semibold text-foreground">Subiect</Label>
                  <Input
                    id="subject"
                    placeholder="Subiectul mesajului"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-white border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-semibold text-foreground">Mesajul tău</Label>
                  <Textarea
                    id="message"
                    placeholder="Spune-ne cum te putem ajuta..."
                    className="min-h-[120px] bg-white border-border"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox 
                    id="gdpr-contact" 
                    checked={isGdprChecked} 
                    onCheckedChange={(checked) => setIsGdprChecked(checked as boolean)} 
                  />
                  <Label htmlFor="gdpr-contact" className="text-xs font-normal text-muted-foreground leading-snug cursor-pointer">
                    Am citit și sunt de acord cu <a href="/politica-confidentialitate" target="_blank" rel="noopener noreferrer" className="underline text-gold hover:text-gold-soft font-medium">Politica de Confidențialitate</a> a site-ului.
                  </Label>
                </div>

                <button 
                  type="submit" 
                  disabled={!isGdprChecked || isSubmitting}
                  className="btn-gold w-full flex items-center justify-center gap-2 mt-4 text-ink-deep font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Se trimite..." : "Trimite Mesajul"}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default Contact
