"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/luxury-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Gauge, 
  Fuel, 
  Calendar, 
  Cog, 
  Zap, 
  Settings,
  ArrowLeft,
  Video,
  AlertCircle,
  Image as ImageIcon,
  Send,
  Phone
} from "lucide-react"
import { AnimatedSection, StaggeredGrid, StaggeredItem } from "@/components/ui/animated-section"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import useListingDetails from "@/hooks/useListingDetails"
import { APIListing, getAttributeValueById } from "@/lib/attributes";
import Container from "@/components/ui/Container"
import FullscreenGallery from "@/components/FullscreenGallery";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { toast } from "sonner"
import { API_BASE_URL, BUSINESS_ID } from "@/config/apiConfig"
import { formatVideoUrl } from "@/lib/videoUtils"

const CarDetails = () => {
  const { listingId } = useParams<{ listingId: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  
  const listingFromState = location.state?.listing as APIListing | undefined;
  const { listing: fetchedCar, loading: apiLoading, error: apiError } = useListingDetails(listingId);

  const car = fetchedCar || listingFromState;
  
  // State to control if the fullscreen gallery is open
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // State to store the index of the currently displayed image in the fullscreen gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const loading = apiLoading && !listingFromState;
  const error = !car && apiError

  const [selectedImage, setSelectedImage] = useState(0)

  // Form State for Inline Enquiry
  const [enquiryName, setEnquiryName] = useState("");
  const [enquiryPhone, setEnquiryPhone] = useState("");
  const [enquiryEmail, setEnquiryEmail] = useState("");
  const [enquiryMessage, setEnquiryMessage] = useState("");
  const [enquiryGdpr, setEnquiryGdpr] = useState(false);
  const [isSubmittingEnquiry, setIsSubmittingEnquiry] = useState(false);

  useEffect(() => {
    if (car) {
      console.log("Date complete pentru mașina selectată:", car);
      setEnquiryMessage(`Bună ziua, sunt interesat de ${car.title}. Aș dori mai multe detalii.`);
    }
  }, [car]);

  const getAttrVal = (attrIds: string | string[], fallbackNames: string[]): string => {
    if (!car) return "N/A";
    const val = getAttributeValueById(car, attrIds, fallbackNames);
    if (val === null || val === undefined || val === "") return "N/A";
    if (typeof val === "boolean") return val ? "Da" : "Nu";
    return String(val);
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!car) return;

    if (!enquiryName.trim()) {
      toast.error("Vă rugăm să introduceți numele dumneavoastră.");
      return;
    }
    if (!enquiryPhone.trim()) {
      toast.error("Vă rugăm să introduceți numărul de telefon.");
      return;
    }
    if (!enquiryEmail.trim()) {
      toast.error("Vă rugăm să introduceți adresa de email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(enquiryEmail.trim())) {
      toast.error("Vă rugăm să introduceți o adresă de email validă.");
      return;
    }

    if (!enquiryGdpr) {
      toast.error("Trebuie să fiți de acord cu politica de confidențialitate.");
      return;
    }

    setIsSubmittingEnquiry(true);
    setTimeout(() => {
      setIsSubmittingEnquiry(false);
      toast.info("Mod demonstrativ de previzualizare: formularul este funcțional, dar nicio solicitare reală nu a fost transmisă către server.");
      setEnquiryName("");
      setEnquiryPhone("");
      setEnquiryEmail("");
      setEnquiryGdpr(false);
    }, 600);
  };

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
  
  // Get video URL: check top-level youtubeVideoId first, fallback to "attr:videoUrl" / "link video" attribute
  const rawVideoLink = car?.youtubeVideoId?.trim() || getAttrVal(["attr:videoUrl"], ["link video"]);
  const videoUrl = formatVideoUrl(rawVideoLink);
  const hasVideo = Boolean(videoUrl);
  
  // Processed values for display
  const kmString = getAttrVal(["attr:mileage"], ["kilometraj", "rulaj"]);
  const kmNum = parseInt(kmString, 10);
  const formattedKm = !isNaN(kmNum) ? `${kmNum.toLocaleString()} km` : "N/A";

  const ccString = getAttrVal(["attr:engineCapacity"], ["capacitate cilindrica"]);
  const formattedCc = ccString !== "N/A" ? `${ccString} cm³` : "N/A";

  const hpString = getAttrVal(["attr:powerHp"], ["putere (cp)", "putere"]);
  const formattedHp = hpString !== "N/A" ? `${hpString} CP` : "N/A";

  const carData = {
    title: car.title,
    year: getAttrVal(["attr:year"], ["an"]),
    variant: getAttrVal(["attr:bodyType"], ["caroserie"]),
    price: car.price ?? 0,
    images: car.images,
    description: car.description.replace(/"/g, '\\"'), // Escape quotes for JSON
    specs: [
      { icon: Gauge, label: "Rulaj", value: formattedKm },
      { icon: Cog, label: "Capacitate cilindrică", value: formattedCc },
      { icon: Zap, label: "Putere", value: formattedHp },
      { icon: Fuel, label: "Combustibil", value: getAttrVal(["attr:fuelType"], ["combustibil"]) },
      { icon: Settings, label: "Transmisie", value: getAttrVal(["attr:gearbox", "attr:transmission"], ["cutie de viteze", "transmisie"]) },
      { icon: Calendar, label: "An fabricație", value: getAttrVal(["attr:year"], ["an"]) }
    ]
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
                  "value": ${!isNaN(kmNum) ? kmNum : 0},
                  "unitCode": "KMT"
              },
              "productionDate": "${carData.year}"
            }
          `}
        </script>
      </Helmet>
      {/* --- PART 1: "AT-A-GLANCE" SECTION (Dark Mivrus Surface) --- */}
      <section className="bg-ink-deep border-b border-ink-border text-ink-foreground py-8 sm:py-12">
        <Container>
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-ink-muted hover:text-gold transition-colors mb-6"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-semibold">Înapoi la listă</span>
          </motion.button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Gallery */}
            <AnimatedSection>
              <div className="space-y-4">
                {/* Main Image */}
                <motion.div 
                  className="relative aspect-video rounded-2xl overflow-hidden border border-ink-border bg-ink-raised cursor-pointer shadow-card"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Thumbnails slider */}
                {carData.images && carData.images.length > 1 && (
                  <div className="space-y-2">
                    {/* Photo counter */}
                    <div className="flex items-center justify-between px-1">
                      <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                        <ImageIcon className="h-3.5 w-3.5 text-gold" />
                        {selectedImage + 1} / {carData.images.length} fotografii
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-ink-muted/80 hidden sm:inline">
                        Glisează pentru mai multe
                      </span>
                    </div>

                    <Carousel
                      opts={{ align: "start", dragFree: true, containScroll: "trimSnaps" }}
                      className="w-full px-1"
                    >
                      <CarouselContent className="-ml-2">
                        {carData.images.map((image, index) => (
                          <CarouselItem
                            key={index}
                            className="pl-2 basis-1/3 sm:basis-1/4 lg:basis-1/5"
                          >
                            <motion.button
                              onClick={() => setSelectedImage(index)}
                              className={`relative aspect-video w-full rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                                selectedImage === index
                                  ? "border-gold ring-1 ring-gold/40"
                                  : "border-ink-border hover:border-gold/50"
                              }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <img
                                src={image.url}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(index);
                                  setIsGalleryOpen(true);
                                }}
                              />
                              {selectedImage !== index && (
                                <div className="absolute inset-0 bg-black/30 hover:bg-transparent transition-colors pointer-events-none" />
                              )}
                            </motion.button>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0 bg-ink-raised/90 border-gold/40 text-gold-soft hover:bg-gold hover:text-ink" />
                      <CarouselNext className="right-0 bg-ink-raised/90 border-gold/40 text-gold-soft hover:bg-gold hover:text-ink" />
                    </Carousel>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Right Column - Information */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                {/* Title & Price */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-foreground mb-3">
                    {carData.title}
                  </h1>
                  
                  {/* Badges Row */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {carData.year && carData.year !== 'N/A' && (
                      <span className="rounded-md border border-gold/40 text-gold-soft bg-gold/10 px-3 py-1 text-xs font-semibold">
                        {carData.year}
                      </span>
                    )}
                    {carData.variant && carData.variant !== 'N/A' && (
                      <span className="rounded-md border border-gold/40 text-gold-soft bg-gold/10 px-3 py-1 text-xs font-semibold">
                        {carData.variant}
                      </span>
                    )}
                    {getAttrVal(["attr:fuelType"], ["combustibil"]) !== 'N/A' && (
                      <span className="rounded-md border border-gold/40 text-gold-soft bg-gold/10 px-3 py-1 text-xs font-semibold">
                        {getAttrVal(["attr:fuelType"], ["combustibil"])}
                      </span>
                    )}
                  </div>

                  {/* Price Row & Desktop Video CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-gold-soft">
                        {carData.price.toLocaleString()} €
                      </span>
                      <span className="text-sm text-ink-muted">(TVA Inclus)</span>
                    </div>

                    {hasVideo && (
                      <Button asChild variant="outline" className="btn-outline-light hidden lg:inline-flex min-h-[44px] px-6 gap-2" size="lg">
                        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                          <Video className="h-5 w-5 text-gold" />
                          Vezi Video
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Key Specifications - Staggered Grid of Tiles */}
                <StaggeredGrid className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 py-6 border-y border-ink-border">
                  {carData.specs.map((spec, index) => (
                    <StaggeredItem key={index} className="rounded-xl border border-ink-border bg-ink-raised p-4 flex items-start gap-3">
                      <div className="p-2 rounded-full border border-gold/30 bg-gold/10 flex-shrink-0 text-gold">
                        <spec.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-ink-muted">{spec.label}</p>
                        <p className="text-sm font-bold text-ink-foreground mt-0.5">{spec.value}</p>
                      </div>
                    </StaggeredItem>
                  ))}
                </StaggeredGrid>

                {/* Quick Action row */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="tel:0752228593"
                    className="btn-gold min-h-[44px] px-8 text-sm font-bold text-ink inline-flex items-center gap-2"
                  >
                    Sună la 0752 228 593
                  </a>
                  {hasVideo && (
                    <div className="lg:hidden w-full">
                      <Button asChild variant="outline" className="btn-outline-light w-full min-h-[44px] px-8 gap-2" size="lg">
                        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                          <Video className="h-5 w-5 text-gold" />
                          Vezi Video
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* --- PART 2: INLINE ENQUIRY FORM & "IN-DEPTH" SECTION (Deep Black Background with Isolated White Description Card) --- */}
      <section
        id="detalii-si-descriere"
        className="w-full bg-[#08090B] text-ink-foreground py-12 lg:py-16 border-t border-white/[0.08]"
        style={{ backgroundColor: '#08090B' }}
      >
        <Container>
          <div className="max-w-5xl mx-auto space-y-8">

            {/* Description - Isolated White Card on Deep Black Background */}
            {car.description && car.description.trim().length > 0 && (
              <div
                className="rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-2xl p-6 sm:p-8 lg:p-10"
                style={{ backgroundColor: '#FFFFFF', color: '#111827' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-6 bg-gold rounded-full flex-shrink-0" />
                  <h2
                    className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight"
                    style={{ color: '#111827' }}
                  >
                    Descriere Detaliată
                  </h2>
                </div>
                <p
                  className="text-neutral-800 leading-relaxed whitespace-pre-wrap text-sm sm:text-base font-normal"
                  style={{ color: '#1F2937' }}
                >
                  {car.description}
                </p>
              </div>
            )}

            {/* Inline Enquiry Form */}
            <AnimatedSection>
              <div
                className="rounded-xl border border-white/[0.08] bg-[#16181C] shadow-card p-6 sm:p-8 text-white"
                style={{ backgroundColor: '#16181C' }}
              >
                <div className="mb-6">
                  <p className="eyebrow text-gold mb-2">Contact direct</p>
                  <h2 className="text-2xl font-extrabold text-white">
                    Ești interesat de această mașină?
                  </h2>
                  <p className="text-sm text-steel mt-1">
                    Lasă-ne datele tale și te contactăm în cel mai scurt timp.
                  </p>
                </div>

                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="enquiry-name" className="text-xs font-semibold text-white/90">Nume și Prenume *</Label>
                      <Input
                        id="enquiry-name"
                        type="text"
                        placeholder="Numele tău"
                        value={enquiryName}
                        onChange={(e) => setEnquiryName(e.target.value)}
                        className="min-h-[44px] text-sm bg-[#08090B] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-gold"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="enquiry-phone" className="text-xs font-semibold text-white/90">Telefon *</Label>
                      <Input
                        id="enquiry-phone"
                        type="tel"
                        placeholder="+40 722 123 456"
                        value={enquiryPhone}
                        onChange={(e) => setEnquiryPhone(e.target.value)}
                        className="min-h-[44px] text-sm bg-[#08090B] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-gold"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="enquiry-email" className="text-xs font-semibold text-white/90">Email *</Label>
                      <Input
                        id="enquiry-email"
                        type="email"
                        placeholder="adresa@email.ro"
                        value={enquiryEmail}
                        onChange={(e) => setEnquiryEmail(e.target.value)}
                        className="min-h-[44px] text-sm bg-[#08090B] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-gold"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="enquiry-message" className="text-xs font-semibold text-white/90">Mesaj</Label>
                    <Textarea
                      id="enquiry-message"
                      value={enquiryMessage}
                      onChange={(e) => setEnquiryMessage(e.target.value)}
                      className="min-h-[90px] text-sm bg-[#08090B] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-gold"
                    />
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <Checkbox
                      id="enquiry-gdpr"
                      checked={enquiryGdpr}
                      onCheckedChange={(checked) => setEnquiryGdpr(checked as boolean)}
                      className="data-[state=checked]:bg-gold data-[state=checked]:text-ink mt-0.5 border-white/30"
                    />
                    <Label htmlFor="enquiry-gdpr" className="text-xs font-normal text-steel leading-snug">
                      Am citit și sunt de acord cu{" "}
                      <a
                        href="/politica-confidentialitate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-gold hover:text-gold-soft font-semibold"
                      >
                        Politica de Confidențialitate
                      </a>{" "}
                      a site-ului.
                    </Label>
                  </div>

                  <button
                    type="submit"
                    disabled={!enquiryGdpr || isSubmittingEnquiry}
                    className="btn-gold w-full sm:w-auto min-h-[44px] px-8 text-sm font-bold text-ink inline-flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmittingEnquiry ? "Se trimite..." : "Trimite solicitarea"}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

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
