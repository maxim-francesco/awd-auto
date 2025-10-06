import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/luxury-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12">
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
                          Strada Automobilului 123<br />
                          Sector 1, București, România<br />
                          010101
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
                          +40 21 123 4567<br />
                          +40 722 123 456
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
                          <p>Luni - Vineri: 09:00 - 19:00</p>
                          <p>Sâmbătă: 09:00 - 17:00</p>
                          <p>Duminică: 10:00 - 16:00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="luxury-card">
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                    <p className="text-muted-foreground">Hartă Google Maps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="luxury-card">
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

                <Button className="w-full">
                  Trimite Mesajul
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact