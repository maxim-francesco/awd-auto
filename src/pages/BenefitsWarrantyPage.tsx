
import Layout from "@/components/layout/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ListChecks, Percent, Shield, Clock, HardDrive, Cpu, Check, Calendar, Users, Target } from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { Separator } from "@/components/ui/separator";

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

  const warrantyPlans = [
    {
      title: "ADVANTAGE",
      icon: HardDrive,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500/30",
      eligibility: { age: 6, mileage: 200000 },
      coverage: "Asigurare împotriva daunelor mecanice, electrice și electronice.",
      coveredComponents: ["Motor", "Transmisie", "Diferențial", "Sistem de frânare", "Sistem de direcție", "Componente electrice"],
      limit: 15000,
      period: "12, 24, sau 36 de luni",
      franchise: "Asigurare fără franșiză."
    },
    {
      title: "COMFORT",
      icon: Cpu,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/30",
      eligibility: { age: 10, mileage: 250000 },
      coverage: "Asigurare împotriva daunelor mecanice sau electrice.",
      coveredComponents: ["Motor", "Transmisie automată", "Sistem de frânare", "Sistem de direcție", "Ambreiaj"],
      limit: 15000,
      period: "12, 24, sau 36 de luni",
      franchise: "Asigurare fără franșiză."
    },
    {
      title: "PLUS",
      icon: Shield,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-500/30",
      eligibility: { age: 15, mileage: 300000 },
      coverage: "Asigurare împotriva daunelor mecanice.",
      coveredComponents: ["Motor", "Transmisie manuală", "Sistem de răcire", "Diferențial"],
      limit: 7500,
      period: "12, 24, sau 36 de luni",
      franchise: "Asigurare fără franșiză."
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
      
      {/* Warranty Plans Section */}
      <section className="py-20 bg-luxury-darker">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pachete de Garanție Extinsă
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferite prin partenerul nostru de încredere <strong className="text-foreground">Defend Insurance</strong>, pentru o experiență fără griji.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {warrantyPlans.map((plan, index) => (
              <StaggeredItem key={index}>
                <Card className={`luxury-card h-full flex flex-col border-t-4 ${plan.borderColor}`}>
                  <CardHeader className="text-center">
                    <div className={`${plan.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border ${plan.borderColor}`}>
                       <plan.icon className={`h-8 w-8 ${plan.color}`} />
                    </div>
                    <CardTitle className={`font-luxury text-2xl font-bold ${plan.color}`}>
                      Programul {plan.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 flex-grow flex flex-col">
                    <div className="space-y-4 text-center">
                      <div className="bg-card p-4 rounded-lg">
                        <p className="text-xs font-semibold text-muted-foreground uppercase">Eligibilitate</p>
                        <div className="flex justify-center gap-4 mt-2">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-foreground">Maxim {plan.eligibility.age} ani</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Target className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-foreground">Maxim {plan.eligibility.mileage.toLocaleString()} km</span>
                            </div>
                        </div>
                      </div>
                      
                      <div className="bg-card p-4 rounded-lg">
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Acoperire</p>
                          <p className="text-foreground mt-1">{plan.coverage}</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-center">Exemple de componente acoperite</h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {plan.coveredComponents.map((comp, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>{comp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto pt-6">
                        <Separator className="mb-6"/>
                        <h4 className="font-semibold text-foreground text-center mb-3">Parametri Opționali</h4>
                        <div className="space-y-2 text-sm">
                            <p><strong className="text-muted-foreground">Perioadă:</strong> <span className="text-foreground">{plan.period}</span></p>
                            <p><strong className="text-muted-foreground">Limită despăgubire:</strong> <span className="text-foreground">Până la {plan.limit.toLocaleString()} RON</span></p>
                            <p><strong className="text-muted-foreground">Franșiză:</strong> <span className="text-foreground">{plan.franchise}</span></p>
                        </div>
                    </div>

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
