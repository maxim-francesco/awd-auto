import Layout from "@/components/layout/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCheck, Building, FileText, CheckCircle, Banknote } from "lucide-react"
import Container from "@/components/ui/Container"

// Import logos
import btDirectLogo from '@/assets/logos/btlogo.png';
import mogoLogo from '@/assets/logos/mogo.png';
import tbiLogo from '@/assets/logos/tbi-featured_logo.png';
import unicreditLogo from '@/assets/logos/UniCredit-Bank-Emblem.png';
import porscheLogo from '@/assets/logos/porsche2.png';
import tbiBanner from '@/assets/logos/banner1.jpg';
import heroBg from '@/assets/logos/banner1.jpg';


const Finantare = () => {

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

      {/* Partners Section - Moved from old hero */}
      <section className="py-16 bg-background">
        <Container>
             <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-luxury">
                    Partenerii Noștri Financiari
                </h2>
                <p className="mt-2 text-muted-foreground">Soluții de credit și leasing de la instituții de încredere.</p>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* --- Column 1: Credit Auto --- */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-center text-luxury-gold">Credit Auto</h3>
                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="flex flex-col items-center justify-center gap-4">
                            <img src={unicreditLogo} alt="UniCredit Bank Logo" className="h-16 w-auto object-contain" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <img src={tbiLogo} alt="TBI Bank Logo" className="h-16 w-auto object-contain" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <img src={btDirectLogo} alt="BT Direct Logo" className="h-16 w-auto object-contain" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <img src={mogoLogo} alt="Mogo Logo" className="h-16 w-auto object-contain" />
                        </div>
                    </div>
                </div>

                {/* --- Column 2: Leasing Auto --- */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-center text-luxury-gold">Leasing Auto</h3>
                    <div className="pt-4 flex justify-center">
                        <div className="flex flex-col items-center justify-center gap-4 p-6 border border-border rounded-lg bg-card w-full max-w-xs">
                            <img src={porscheLogo} alt="Porsche Leasing Logo" className="h-16 w-auto object-contain" />
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
      
    </Layout>
  )
}

export default Finantare
