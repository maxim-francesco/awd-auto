"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate, useLocation, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async";
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
import Container from "@/components/ui/Container"
import FullscreenGallery from "@/components/FullscreenGallery";

const CarDetails = () => {
  const { listingId } = useParams<{ listingId: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  
  const listingFromState = location.state?.listing as APIListing | undefined;
  const { listing: fetchedCar, loading: apiLoading, error: apiError } = useListingDetails(listingId);

  // THE FIX:
  // We prioritize the fetchedCar (full data) as soon as it's available.
  // The listingFromState (partial data) is only used as a fallback while the API is loading.
  const car = fetchedCar || listingFromState;
  
  // State to control if the fullscreen gallery is open
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  // State to store the index of the currently displayed image in the fullscreen gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // THE NEW LOADING LOGIC:
  // We are "loading" ONLY if the API is still fetching AND we don't even have
  // the partial data from the state to show as a placeholder.
  const loading = apiLoading && !listingFromState;
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
        <Container className="py-12">
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
        </Container>
      </Layout>
    )
  }

  if (error || !car) {
    return (
      <Layout>
          <Container className="text-center py-20">
              <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-4">Eroare la încărcarea anunțului</h1>
              <p className="text-muted-foreground mb-8">
                  {error?.message || "Anunțul pe care îl căutați nu a putut fi găsit sau nu mai este disponibil."}
              </p>
              <Button onClick={() => navigate('/masini-disponibile')}>
                  Vezi alte mașini
              </Button>
          </Container>
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
    description: car.description.replace(/"/g, '\\"'), // Escape quotes for JSON
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
       <Helmet>
        <title>{`${carData.title} | AWD Auto Cluj`}</title>
        <meta name="description" content={`Cumpără ${carData.title} de la AWD Auto. Preț: ${carData.price.toLocaleString()}€. ${carData.description.substring(0, 120)}...`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Vehicle",
              "name": "${carData.title}",
              "image": "${carData.images?.[0]?.url}",
              "description": "${carData.description}",
              "brand": {
                "@type": "Brand",
                "name": "${carData.title.split(' ')[0]}"
              },
              "offers": {
                "@type": "Offer",
                "url": "${window.location.href}",
                "priceCurrency": "EUR",
                "price": "${carData.price}"
              },
              "mileageFromOdometer": {
                  "@type": "QuantitativeValue",
                  "value": ${parseInt(getAttributeValue(car.attributeValues, 'kilometraj'), 10)},
                  "unitCode": "KMT"
              },
              "productionDate": "${carData.year}"
            }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background py-8 sm:py-12">
        <Container>
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
                  className="relative aspect-video rounded-2xl overflow-hidden bg-luxury-darker border border-border/40 cursor-pointer"
                  layoutId={`car-image-${car.id}`}
                   onClick={() => {
                    setCurrentImageIndex(selectedImage);
                    setIsGalleryOpen(true);
                  }}
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
                        className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
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
                           onClick={(e) => {
                            e.stopPropagation(); // Prevent parent onClick from firing
                            setCurrentImageIndex(index);
                            setIsGalleryOpen(true);
                          }}
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
                    {carData.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">{carData.year}, {carData.variant}</p>
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
                  <Button asChild className="flex-1" size="lg">
                    <a href="tel:0752228593">
                      <Phone className="h-5 w-5" />
                      Programează un Test Drive
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1" size="lg">
                    <Link to="/contact">
                      <Mail className="h-5 w-5" />
                      Cere Ofertă de Preț
                    </Link>
                  </Button>
                </div>

                {/* Description */}
                <div className="pt-4">
                  <h2 className="font-luxury text-xl font-semibold text-foreground mb-3">
                    Descriere Detaliată
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {car.description}
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
        </Container>
      </div>

       <FullscreenGallery
        images={carData.images || []}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialImageIndex={currentImageIndex}
      />
    </Layout>
  )
}

export default CarDetails

    