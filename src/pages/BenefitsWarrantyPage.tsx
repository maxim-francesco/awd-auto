
import Layout from "@/components/layout/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ListChecks, Percent, Shield } from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"

const BenefitsWarrantyPage = () => {
  const benefits = [
    {
      icon: Search,
      title: "Istoric Verificat",
      description: "Fiecare mașină din parcul nostru vine cu un istoric de service transparent. Cumpără cu încredere, știind exact trecutul mașinii tale."
    },
    {
      icon: ListChecks,
      title: "Inspecție Tehnică Riguroasă",
      description: "Înainte de a fi listată, fiecare mașină este supusă unei inspecții amănunțite în peste 100 de puncte de către mecanicii noștri parteneri."
    },
    {
      icon: Percent,
      title: "Finanțare Personalizată",
      description: "Oferim soluții de finanțare rapide și flexibile prin partenerii noștri de încredere, adaptate perfect bugetului și nevoilor tale."
    },
    {
      icon: Shield,
      title: "Garanție Extinsă",
      description: "Condu fără griji. Îți oferim pachete de garanție extinsă prin parteneriatul cu Defend Insurance, valabile până la 36 de luni."
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/warranty-hero/1920/1080')" }}
        data-ai-hint="car interior dashboard"
      >
        <div className="absolute inset-0 bg-black/60" />
        
        <AnimatedSection className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-luxury text-4xl md:text-6xl font-bold bg-gradient-to-r from-luxury-gold via-white to-luxury-gold bg-clip-text text-transparent mb-6">
            Liniștea Ta Este Prioritatea Noastră
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Descoperă avantajele de a cumpăra de la AWD Auto, de la istoricul verificat al mașinilor și până la pachetele de garanție extinsă.
          </p>
        </AnimatedSection>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beneficiile Tale Când Alegi AWD Auto
            </h2>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <StaggeredItem key={index}>
                <Card className="luxury-card h-full text-center group">
                  <CardContent className="p-8">
                    <div className="bg-luxury-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-luxury-gold/20 group-hover:scale-110">
                      <benefit.icon className="h-10 w-10 text-luxury-gold" />
                    </div>
                    <h3 className="font-luxury text-xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>
    </Layout>
  )
}

export default BenefitsWarrantyPage;
