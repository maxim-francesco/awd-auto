import Layout from "@/components/layout/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Search, ListChecks, Percent, Shield, Clock, HardDrive, Cpu, Check, Calendar, Users, Target, ShieldCheck } from "lucide-react"
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
      icon: ListChecks,
      title: "Inspecție Tehnică Riguroasă",
      description: "Înainte de a fi listată, fiecare mașină este supusă unei inspecții amănunțite în peste 100 de puncte de către mecanicii noștri parteneri."
    },
    {
      icon: ShieldCheck,
      title: "RAR Efectuat",
      description: "Pentru siguranța ta și un plus de confort, toate mașinile noastre vin cu RAR-ul deja efectuat. Ne asigurăm că fiecare detaliu tehnic este în regulă, oferindu-ți servicii de cea mai înaltă calitate."
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
      {/* Hero Section - Dark Cinematic */}
      <section className="bg-[#0C1015] border-b border-white/10 py-16 md:py-24 text-white relative">
        <Container className="text-center">
            <AnimatedSection className="max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D8BA81] text-xs font-semibold uppercase tracking-wider border border-white/10">
                  Parteneriat Oficial Defend Insurance
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold font-luxury text-white">
                  Liniștea Ta Este Prioritatea Noastră
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Fiecare autoturism AWD Auto include pachetul de garanție de bază PLUS. Descoperă opțiunile de acoperire extinsă pentru siguranță deplină pe orice traseu.
                </p>
            </AnimatedSection>
        </Container>
      </section>

      {/* Warranty Plans Section - Warm Light Showroom */}
      <section className="py-20 bg-[#F5F2EB] text-[#141921] border-b border-[#E3DDD1]">
        <Container>
          <AnimatedSection className="text-center mb-16 space-y-3">
            <h2 className="font-luxury text-3xl md:text-4xl font-extrabold text-[#141921]">
              Pachete de Garanție Extinsă
            </h2>
            <p className="text-[#55606E] max-w-2xl mx-auto text-base">
              Oferite prin partenerul nostru de încredere <strong className="text-[#141921]">Defend Insurance</strong>, pentru o experiență fără griji.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {warrantyPlans.map((plan, index) => (
              <StaggeredItem key={index}>
                <Card className={`relative bg-white border border-[#E2DDD2] shadow-md rounded-2xl h-full flex flex-col border-t-4 ${plan.borderColor} transition-all duration-300 hover:shadow-xl`}>
                 {plan.isIncluded && (
                    <div className="absolute -top-4 right-4 bg-[#C8A86B] text-[#0F1318] px-3.5 py-1 rounded-full text-xs font-extrabold shadow-md">
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
                        <p className="text-xs font-semibold text-[#6B7888] uppercase tracking-wider mt-1">Opțiune de Upgrade</p>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-6 flex-grow flex flex-col p-6">
                    <div className="space-y-4 text-center">
                      <div className="bg-[#F8F6F0] p-4 rounded-xl border border-[#EAE4D7]">
                        <p className="text-xs font-semibold text-[#5B6776] uppercase tracking-wider">Eligibilitate</p>
                        <div className="flex justify-center gap-4 mt-2">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-[#5B6776]" />
                                <span className="text-sm font-semibold text-[#141921]">Maxim {plan.eligibility.age} ani</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Target className="h-4 w-4 text-[#5B6776]" />
                                <span className="text-sm font-semibold text-[#141921]">Maxim {plan.eligibility.mileage.toLocaleString()} km</span>
                            </div>
                        </div>
                      </div>
                      
                      <div className="bg-[#F8F6F0] p-4 rounded-xl border border-[#EAE4D7]">
                          <p className="text-xs font-semibold text-[#5B6776] uppercase tracking-wider">Acoperire</p>
                          <p className="text-sm text-[#242C37] mt-1 font-medium">{plan.coverage}</p>
                      </div>
                       
                       {plan.claimLimit && (
                        <div className="bg-[#F8F6F0] p-4 rounded-xl border border-[#EAE4D7]">
                          <p className="text-xs font-semibold text-[#5B6776] uppercase tracking-wider">Limită Despăgubire</p>
                          <p className="text-sm text-[#242C37] mt-1 font-bold">{plan.claimLimit}</p>
                      </div>
                      )}
                    </div>
                    
                    <Separator className="bg-[#EAE4D7]" />
                    
                    <div className="space-y-3">
                        <h4 className="font-luxury font-bold text-sm text-[#141921] text-center">Componente Asigurate</h4>
                        <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
                            {plan.coveredComponents.map((comp, i) => (
                                <li key={i} className="flex items-center gap-1.5 text-[#3E4A59]">
                                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                                    <span className="truncate">{comp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto pt-6">
                        <Separator className="mb-6 bg-[#EAE4D7]"/>
                        <h4 className="font-semibold text-luxury-gold text-center mb-3">Parametri Opționali</h4>
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
                    <h4 className="font-semibold text-luxury-gold">Notă importantă pentru vehicule hibrid</h4>
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
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-luxury-gold mb-4">
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
                    <h3 className="font-luxury text-xl font-bold text-luxury-gold mb-4">
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
            <h2 className="font-luxury text-3xl md:text-4xl font-bold text-luxury-gold mb-4">
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
