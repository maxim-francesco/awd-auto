import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/luxury-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import Container from "@/components/ui/Container"

const Contact = () => {
  const [isGdprChecked, setIsGdprChecked] = useState(false);

  return (
    <Layout>
      <Container className="py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactează-ne
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suntem aici să vă ajutăm să găsiți mașina perfectă pentru dumneavoastră. Contactați-ne pentru mai multe informații.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-luxury text-2xl font-bold text-luxury-gold mb-6">
                Informații de Contact
              </h2>
              
              <div className="space-y-6">
                <Card className="luxury-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-luxury-gold/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Adresa</h3>
                        <p className="text-muted-foreground">
                          Strada Plevnei 117<br />
                          Cluj-Napoca, 400394, România
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-luxury-gold/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                        <p className="text-muted-foreground">
                          0752 228 593
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-luxury-gold/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          contact@awdauto.ro<br />
                          vanzari@awdauto.ro
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-luxury-gold/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Program</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Luni - Vineri: 09:00 - 18:00</p>
                          <p>Sâmbătă: 10:00 - 14:00</p>
                          <p>Duminică: Închis</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="luxury-card overflow-hidden">
              <CardContent className="p-0 h-full">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.991192070335!2d23.62140881585293!3d46.7820649791395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c10257e8e5b%3A0x8686d45e76472251!2sStrada%20Plevnei%20117%2C%20Cluj-Napoca%20400394!5e0!3m2!1sen!2sro!4v1668583488772!5m2!1sen!2sro" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '450px' }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="luxury-card mt-12">
              <CardHeader>
                <CardTitle className="font-luxury text-2xl text-luxury-gold">
                  Trimite-ne un Mesaj
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prenume</Label>
                    <Input id="firstName" placeholder="Prenumele tău" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nume</Label>
                    <Input id="lastName" placeholder="Numele tău" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="adresa@email.ro" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" type="tel" placeholder="+40 722 123 456" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subiect</Label>
                  <Input id="subject" placeholder="Subiectul mesajului" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mesajul tău</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Spune-ne cum te putem ajuta..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox id="gdpr-contact" onCheckedChange={(checked) => setIsGdprChecked(checked as boolean)} />
                  <Label htmlFor="gdpr-contact" className="text-sm font-normal text-muted-foreground leading-snug">
                    Am citit și sunt de acord cu <a href="/politica-confidentialitate" target="_blank" rel="noopener noreferrer" className="underline text-luxury-gold hover:text-luxury-gold-hover">Politica de Confidențialitate</a> a site-ului.
                  </Label>
                </div>

                <Button className="w-full" disabled={!isGdprChecked}>
                  Trimite Mesajul
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Contact
