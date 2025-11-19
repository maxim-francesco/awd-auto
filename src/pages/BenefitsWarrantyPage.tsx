import Layout from "@/components/layout/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Search, ListChecks, Percent, Shield, Clock, HardDrive, Cpu, Check, Calendar, Users, Target, ShieldCheck, Wrench } from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Container from "@/components/ui/Container";

const BenefitsWarrantyPage = () => {
  const benefits = [
    {
      icon: Search,
      title: "Istoric Verificat",
      description: "Fiecare mașină din parcul nostru vine cu un istoric de service transparent. Cumpără cu încredere, știind exact trecutul mașinii tale."
    },
    {
      icon: Wrench,
      title: "Revizie",
      description: "Pentru a ne asigura că pleci la drum în siguranță, efectuăm o revizie completă înainte de predarea mașinii, ce include schimbul de ulei și filtre motor."
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
      title: "Garanție Inclusă",
      description: "Condu fără griji din prima zi. Fiecare mașină vândută de noi beneficiază de pachetul de garanție de bază PLUS, oferit prin partenerul nostru Defend Insurance."
    }
  ]

  const warrantyPlans = [
     {
      title: "DELUXE",
      isUpgrade: true,
      icon: ShieldCheck,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-500/30",
      eligibility: { age: 6, mileage: 160000 },
      coverage: "Asigurare împotriva daunelor mecanice, electrice și electronice.",
      coveredComponents: [
        "Transmisie", "Motor", "Diferențial", "Consumabile", "Tractare auto",
        "Tracțiune pe 4 roți", "Ambreiaj", "Frâne",
        "Sistem de alimentare", "Instalație electrică",
        "Direcție (inclusiv servodirecție)", "Sistem de răcire al motorului",
        "Sistem de injecție de combustibil", "Aer condiționat"
      ],
      period: "12, 24, sau 36 de luni",
      claimLimit: "Până la prețul de achiziție"
    },
    {
      title: "ADVANTAGE",
      isUpgrade: true,
      icon: HardDrive,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500/30",
      eligibility: { age: 6, mileage: 200000 },
      coverage: "Asigurare împotriva daunelor mecanice, electrice și electronice.",
      coveredComponents: [
        "Transmisie", "Motor", "Diferențial", "Consumabile", "Tractare auto",
        "Tracțiune pe 4 roți", "Ambreiaj", "Frâne",
        "Sistem de alimentare", "Instalație electrică",
        "Direcție (inclusiv servodirecție)", "Sistem de răcire al motorului",
        "Sistem de injecție de combustibil", "Aer condiționat"
      ],
      period: "12, 24, sau 36 de luni"
    },
    {
      title: "COMFORT",
      isUpgrade: true,
      icon: Cpu,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/30",
      eligibility: { age: 10, mileage: 250000 },
      coverage: "Asigurare împotriva daunelor mecanice sau electrice.",
      coveredComponents: [
        "Transmisie", "Motor", "Diferențial", "Consumabile", "Tractare auto",
        "Tracțiune pe 4 roți", "Ambreiaj", "Frâne",
        "Sistem de alimentare", "Instalație electrică",
        "Direcție (inclusiv servodirecție)", "Sistem de răcire al motorului"
      ],
      period: "12, 24, sau 36 de luni"
    },
    {
      title: "PLUS",
      isIncluded: true,
      icon: Shield,
      color: "text-luxury-gold",
      bgColor: "bg-luxury-gold/10",
      borderColor: "border-luxury-gold",
      eligibility: { age: 15, mileage: 300000 },
      coverage: "Asigurare împotriva daunelor mecanice.",
      coveredComponents: [
        "Transmisie", "Motor", "Diferențial", "Consumabile", "Tractare auto"
      ],
      period: "12, 24, sau 36 de luni"
    }
  ]

  const faqItems = [
    {
      question: "Ce înseamnă \"istoric verificat\"?",
      answer: "Înseamnă că am verificat istoricul de service și daunalitate al mașinii prin reprezentanțe și baze de date specializate. Vă oferim un raport detaliat pentru a garanta transparența totală a achiziției dumneavoastră."
    },
    {
      question: "Pachetul de garanție PLUS este inclus în prețul mașinii?",
      answer: "Da, pachetul de garanție de bază PLUS este inclus pentru majoritatea vehiculelor eligibile din parcul nostru. Există posibilitatea de a face upgrade la un pachet superior (Comfort, Advantage, Deluxe) contra unui cost suplimentar, în funcție de preferințele dumneavoastră și de eligibilitatea vehiculului."
    },
    {
      question: "Unde pot efectua reparațiile în caz de daună acoperită de garanție?",
      answer: "Reparațiile se pot efectua în orice service autorizat RAR din România. Partenerul nostru, Defend Insurance, vă va ghida pe parcursul întregului proces de notificare și soluționare a daunei."
    },
    {
      question: "Pot achiziționa o mașină dacă nu sunt din Cluj-Napoca?",
      answer: "Desigur. Oferim consultanță online și video pentru a vă prezenta mașina în detaliu. De asemenea, vă putem asista cu obținerea numerelor provizorii pentru a putea pleca în siguranță spre localitatea dumneavoastră."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
       <section className="bg-luxury-darker py-16 md:py-20">
        <Container className="text-center">
            <AnimatedSection>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-luxury">
                Liniștea Ta Este Prioritatea Noastră
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Află detalii despre pachetul de garanție PLUS inclus la fiecare achiziție și despre opțiunile de upgrade disponibile pentru liniștea ta completă.
                </p>
            </AnimatedSection>
        </Container>
      </section>

      {/* Warranty Plans Section */}
      <section className="py-20 bg-luxury-darker">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pachete de Garanție Extinsă
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferite prin partenerul nostru de încredere <strong className="text-foreground">Defend Insurance</strong>, pentru o experiență fără griji.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {warrantyPlans.map((plan, index) => (
              <StaggeredItem key={index}>
                <Card className={`relative luxury-card h-full flex flex-col border-t-4 ${plan.borderColor}`}>
                 {plan.isIncluded && (
                    <div className="absolute -top-4 right-4 bg-luxury-gold text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      INCLUS ÎN PREȚ
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className={`${plan.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border ${plan.borderColor}`}>
                       <plan.icon className={`h-8 w-8 ${plan.color}`} />
                    </div>
                    <CardTitle className={`font-luxury text-2xl font-bold ${plan.color}`}>
                      Programul {plan.title}
                    </CardTitle>
                    {plan.isUpgrade && (
                        <p className="text-sm font-semibold text-muted-foreground">Opțiune de Upgrade</p>
                    )}
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
                       
                       {plan.claimLimit && (
                        <div className="bg-card p-4 rounded-lg">
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Limită de îndeplinire</p>
                          <p className="text-foreground mt-1">{plan.claimLimit}</p>
                      </div>
                      )}
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-center">Exemple de componente acoperite</h4>
                        <ul className={`grid grid-cols-2 gap-x-4 gap-y-2`}>
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
                        </div>
                    </div>

                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
          
          <AnimatedSection className="max-w-4xl mx-auto mt-12">
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 flex items-center gap-4">
                <AlertCircle className="h-8 w-8 text-blue-400 flex-shrink-0" />
                <div>
                    <h4 className="font-semibold text-foreground">Notă importantă pentru vehicule hibrid</h4>
                    <p className="text-sm text-muted-foreground">Pentru mașinile de tip PHEV (Plug-in Hybrid) și HEV (Hybrid), pachetele de garanție acoperă și componentele specifice sistemului de propulsie hibrid.</p>
                </div>
            </div>
          </AnimatedSection>

        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beneficiile Tale Când Alegi AWD Auto
            </h2>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
        </Container>
      </section>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-background">
        <Container className="max-w-screen-lg">
          <div className="text-center mb-16">
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-foreground mb-4">
              Întrebări Frecvente
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="luxury-card border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </AnimatedSection>
    </Layout>
  )
}

export default BenefitsWarrantyPage;
