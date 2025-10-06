"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/luxury-button"
import { 
  Gauge, 
  Fuel, 
  Calendar, 
  Cog, 
  Zap, 
  Settings,
  Check,
  ArrowLeft,
  Phone,
  Mail,
  AlertCircle
} from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Skeleton } from "@/components/ui/skeleton"
import useListingDetails from "@/hooks/useListingDetails"
import type { APIListing, Attribute } from "@/hooks/useListings";

const CarDetails = () => {
  const { listingId } = useParams<{ listingId: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  
  const listingFromState = location.state?.listing as APIListing | undefined;

  const { listing: fetchedCar, loading: apiLoading, error: apiError } = useListingDetails(listingId)

  // Prioritize data from state, fallback to API fetch
  const car = listingFromState || fetchedCar

  // Loading is only true if we don't have state data and the API is fetching
  const loading = !car && apiLoading
  const error = !car && apiError

  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (car) {
      console.log("Date complete pentru mașina selectată:", car);
    }
  }, [car]);

  const getAttributeValue = (attributes: Attribute[], name: string): string => {
    const attr = attributes.find(a => a.attribute.name.toLowerCase() === name.toLowerCase());
    if (!attr) return "N/A";
    
    // Prioritize stringValue, then numberValue, then booleanValue
    if (attr.stringValue) return attr.stringValue;
    if (attr.numberValue !== null && attr.numberValue !== undefined) return attr.numberValue.toString();
    if (attr.booleanValue !== null && attr.booleanValue !== undefined) return attr.booleanValue ? "Da" : "Nu";
    
    return "N/A";
  };
  
  const getFeatures = (attributes: Attribute[]): string[] => {
      return attributes
          .filter(attr => attr.attribute.type === 'BOOLEAN' && attr.booleanValue === true)
          .map(attr => attr.attribute.name);
  }

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12">
            <Skeleton className="h-6 w-40 mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Skeleton for Gallery */}
                <div className="space-y-4">
                    <Skeleton className="aspect-video w-full rounded-2xl" />
                    <div className="grid grid-cols-6 gap-2">
                        {[...Array(6)].map((_, i) => <Skeleton key={i} className="aspect-video w-full rounded-lg" />)}
                    </div>
                </div>
                {/* Skeleton for Details */}
                <div className="space-y-6">
                    <Skeleton className="h-10 w-3/4" />
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-12 w-1/2" />
                    <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/40">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <Skeleton className="h-12 w-12 rounded-lg" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-5 w-24" />
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="flex flex-col sm:flex-row gap-3">
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-12 w-full" />
                    </div>
                    <div className="space-y-3 pt-4">
                        <Skeleton className="h-6 w-1/3" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-4/5" />
                    </div>
                </div>
            </div>
        </div>
      </Layout>
    )
  }

  if (error || !car) {
    return (
      <Layout>
          <div className="container mx-auto text-center py-20">
              <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-4">Eroare la încărcarea anunțului</h1>
              <p className="text-muted-foreground mb-8">
                  {error?.message || "Anunțul pe care îl căutați nu a putut fi găsit sau nu mai este disponibil."}
              </p>
              <Button onClick={() => navigate('/masini-disponibile')}>
                  Vezi alte mașini
              </Button>
          </div>
      </Layout>
    )
  }
  
  // Processed values for display
  const carData = {
    title: car.title,
    year: getAttributeValue(car.attributeValues, 'An'),
    variant: getAttributeValue(car.attributeValues, 'model'),
    price: car.price ?? 0,
    images: car.images,
    description: car.description,
    specs: [
      { icon: Gauge, label: "Rulaj", value: `${parseInt(getAttributeValue(car.attributeValues, 'kilometraj'), 10).toLocaleString()} km` },
      { icon: Cog, label: "Capacitate cilindrică", value: `${getAttributeValue(car.attributeValues, 'capacitate cilindrica')} cm³` },
      { icon: Zap, label: "Putere", value: `${getAttributeValue(car.attributeValues, 'Putere (CP)')} CP` },
      { icon: Fuel, label: "Combustibil", value: getAttributeValue(car.attributeValues, 'combustibil') },
      { icon: Settings, label: "Transmisie", value: getAttributeValue(car.attributeValues, 'Cutie de viteze') },
      { icon: Calendar, label: "An fabricație", value: getAttributeValue(car.attributeValues, 'An') }
    ],
    features: getFeatures(car.attributeValues)
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8 sm:py-12">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-luxury-gold transition-colors mb-6"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Înapoi la listă</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Gallery */}
            <AnimatedSection>
              <div className="space-y-4">
                {/* Main Image */}
                <motion.div 
                  className="relative aspect-video rounded-2xl overflow-hidden bg-luxury-darker border border-border/40"
                  layoutId={`car-image-${car.id}`}
                >
                  <img
                    src={carData.images?.length > 0 ? carData.images[selectedImage].url : 'https://via.placeholder.com/1200x800.png?text=AWD+Auto'}
                    alt={carData.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Thumbnails */}
                {carData.images && carData.images.length > 1 && (
                  <div className="grid grid-cols-6 gap-2">
                    {carData.images.map((image, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index 
                            ? "border-luxury-gold" 
                            : "border-border/40 hover:border-luxury-gold/50"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          src={image.url}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Right Column - Information */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                {/* Title & Price */}
                <div>
                  <h1 className="font-luxury text-3xl sm:text-4xl font-bold text-foreground mb-2">
                    {carData.title}, {carData.year}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">{carData.variant}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-luxury text-4xl sm:text-5xl font-bold text-luxury-gold">
                      {carData.price.toLocaleString()} €
                    </span>
                    <span className="text-sm text-muted-foreground">(TVA Inclus)</span>
                  </div>
                </div>

                {/* Key Specifications */}
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/40">
                  {carData.specs.map((spec, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-luxury-gold/10">
                        <spec.icon className="h-5 w-5 text-luxury-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{spec.label}</p>
                        <p className="text-sm font-semibold text-foreground">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1" size="lg">
                    <Phone className="h-5 w-5" />
                    Programează un Test Drive
                  </Button>
                  <Button variant="outline" className="flex-1" size="lg">
                    <Mail className="h-5 w-5" />
                    Cere Ofertă de Preț
                  </Button>
                </div>

                {/* Description */}
                <div className="pt-4">
                  <h2 className="font-luxury text-xl font-semibold text-foreground mb-3">
                    Descriere Detaliată
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {carData.description}
                  </p>
                </div>

                {/* Features */}
                {carData.features && carData.features.length > 0 && (
                  <div className="pt-4">
                    <h2 className="font-luxury text-xl font-semibold text-foreground mb-4">
                      Dotări și Opțiuni
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {carData.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                            <Check className="h-3 w-3 text-luxury-gold" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CarDetails

    