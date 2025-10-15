"use client"

import Layout from "@/components/layout/Layout"
import Container from "@/components/ui/Container"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/luxury-button"
import { Link } from "react-router-dom"

const Index = () => {
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-darker via-luxury-dark to-luxury-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />
        </div>
        
        <Container className="relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="font-luxury text-4xl md:text-6xl font-black bg-gradient-to-r from-luxury-gold via-white to-luxury-gold bg-clip-text text-transparent mb-6 leading-tight">
              Calitate și Încredere pe Piața Auto din Cluj
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Descoperă o selecție de mașini rulate, verificate riguros, oferite cu garanție și transparență totală.
            </p>
            <Button asChild size="lg">
              <Link to="/masini-disponibile">Vezi Toate Mașinile Disponibile</Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </Layout>
  );
};

export default Index;
