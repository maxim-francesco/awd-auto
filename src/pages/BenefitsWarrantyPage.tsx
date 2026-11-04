import Layout from "@/components/layout/Layout"
import { AlertCircle, Search, ListChecks, Percent, Shield, HardDrive, Cpu, Check, Calendar, Target, ShieldCheck } from "lucide-react"
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
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-300",
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
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-300",
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
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      borderColor: "border-emerald-300",
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
      color: "text-gold-contrast",
      bgColor: "bg-gold/15",
      borderColor: "border-gold",
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
      {/* 1. Hero Section - Auto Mivrus Style */}
      <section className="bg-ink-deep border-b border-ink-border text-ink-foreground py-20 lg:py-28 text-center">
        <Container>
          <AnimatedSection className="max-w-4xl mx-auto">
            <p className="eyebrow text-gold mb-3">Garanție inclusă</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink-foreground mb-6">
              Liniștea Ta Este Prioritatea Noastră
            </h1>
            <p className="text-base sm:text-xl text-ink-muted max-w-3xl mx-auto">
              Află detalii despre pachetul de garanție PLUS inclus la fiecare achiziție și despre opțiunile de upgrade disponibile pentru liniștea ta completă.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* 2. Warranty Plans Section - Warm Light Surface */}
      <section className="py-16 lg:py-24 bg-background text-foreground">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow text-gold-contrast mb-3">Defend Insurance</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Pachete de Garanție Extinsă
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Oferite prin partenerul nostru de încredere <strong className="text-foreground">Defend Insurance</strong>, pentru o experiență fără griji.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warrantyPlans.map((plan, index) => (
              <StaggeredItem key={index}>
                <div className={`relative rounded-xl border border-border bg-card shadow-card h-full flex flex-col border-t-4 ${plan.borderColor} transition-all duration-300 hover:-translate-y-1`}>
                  {plan.isIncluded && (
                    <div className="absolute -top-3.5 right-4 btn-gold px-3 py-1 rounded-full text-xs font-bold text-ink shadow-sm">
                      INCLUS ÎN PREȚ
                    </div>
                  )}
                  <div className="p-6 text-center border-b border-border/60">
                    <div className={`${plan.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border ${plan.borderColor}`}>
                      <plan.icon className={`h-8 w-8 ${plan.color}`} />
                    </div>
                    <h3 className={`text-2xl font-extrabold ${plan.color}`}>
                      Programul {plan.title}
                    </h3>
                    {plan.isUpgrade && (
                      <p className="text-xs font-semibold text-muted-foreground mt-1">Opțiune de Upgrade</p>
                    )}
                  </div>
                  <div className="p-6 space-y-6 flex-grow flex flex-col">
                    <div className="space-y-3 text-center">
                      <div className="bg-muted/50 p-3.5 rounded-lg border border-border/40">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Eligibilitate</p>
                        <div className="flex justify-center gap-4 mt-2">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs font-semibold text-foreground">Max. {plan.eligibility.age} ani</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Target className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs font-semibold text-foreground">Max. {plan.eligibility.mileage.toLocaleString()} km</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-3.5 rounded-lg border border-border/40">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Acoperire</p>
                        <p className="text-xs font-medium text-foreground mt-1">{plan.coverage}</p>
                      </div>
                       
                      {plan.claimLimit && (
                        <div className="bg-muted/50 p-3.5 rounded-lg border border-border/40">
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Limită de îndeplinire</p>
                          <p className="text-xs font-medium text-foreground mt-1">{plan.claimLimit}</p>
                        </div>
                      )}
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground text-center">Exemple de componente acoperite</h4>
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-2">
                        {plan.coveredComponents.map((comp, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-xs text-foreground/80">
                            <Check className="h-3.5 w-3.5 text-gold shrink-0" />
                            <span className="truncate">{comp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border/60">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground text-center mb-2">Parametri Opționali</h4>
                      <p className="text-xs text-center"><strong className="text-muted-foreground">Perioadă:</strong> <span className="text-foreground font-semibold">{plan.period}</span></p>
                    </div>
                  </div>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
          
          <AnimatedSection className="max-w-4xl mx-auto mt-12">
            <div className="rounded-xl border border-blue-200 bg-blue-50/80 p-6 flex items-start sm:items-center gap-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <h4 className="font-bold text-blue-950 text-base">Notă importantă pentru vehicule hibrid</h4>
                <p className="text-sm text-blue-900 mt-1">Pentru mașinile de tip PHEV (Plug-in Hybrid) și HEV (Hybrid), pachetele de garanție acoperă și componentele specifice sistemului de propulsie hibrid.</p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* 3. Benefits Section - Deep Dark Surface */}
      <section className="py-16 lg:py-24 bg-ink border-y border-ink-border text-ink-foreground">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow text-gold mb-3">Standarde înalte</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-foreground mb-4">
              Beneficiile Tale Când Alegi AWD Auto
            </h2>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <StaggeredItem key={index}>
                <div className="h-full flex flex-col items-center rounded-xl border border-ink-border bg-ink-raised p-6 text-center transition-all duration-300 hover:border-gold/60">
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold mb-6 transition-transform duration-300 hover:scale-110">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-ink-muted leading-relaxed text-xs sm:text-sm">
                    {benefit.description}
                  </p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </Container>
      </section>

      {/* 4. FAQ Section - Warm Light Surface */}
      <section className="py-16 lg:py-24 bg-background text-foreground">
        <Container className="max-w-4xl">
          <div className="text-center mb-16">
            <p className="eyebrow text-gold-contrast mb-3">Informații utile</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Întrebări Frecvente
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-foreground hover:no-underline text-base sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>
    </Layout>
  )
}

export default BenefitsWarrantyPage;
