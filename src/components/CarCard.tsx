"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Calendar, Fuel, Gauge, Settings, ShieldCheck, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { APIListing, getAttributeValueById } from "@/lib/attributes"

interface CarCardProps {
  listing: APIListing;
  variant?: "light" | "dark";
  className?: string;
}

const CarCard = ({ listing, variant = "light", className }: CarCardProps) => {
  const yearVal = getAttributeValueById(listing, ["attr:year"], ["an"]);
  const year = yearVal !== null && yearVal !== undefined ? String(yearVal) : "N/A";

  const kmVal = getAttributeValueById(listing, ["attr:mileage"], ["kilometraj", "rulaj"]);
  const mileageNum = typeof kmVal === "number" ? kmVal : (typeof kmVal === "string" ? parseInt(kmVal, 10) : null);
  const mileage = mileageNum !== null && !isNaN(mileageNum) ? mileageNum.toLocaleString() : "N/A";

  const fuelVal = getAttributeValueById(listing, ["attr:fuelType"], ["combustibil"]);
  const fuelType = fuelVal !== null && fuelVal !== undefined ? String(fuelVal) : "N/A";

  const transVal = getAttributeValueById(listing, ["attr:gearbox", "attr:transmission"], ["cutie de viteze", "transmisie"]);
  const transmission = transVal !== null && transVal !== undefined ? String(transVal) : "N/A";

  const vatVal = getAttributeValueById(listing, ["attr:vatDeductible"], ["tva deductibil"]);
  const isVatDeductible = vatVal === true || String(vatVal).toLowerCase() === "true";

  const isSold = listing.status === 'SOLD';
  const price = listing.price || 0;
  const estimatedMonthly = price > 0 ? Math.round(price * 0.017) : null;

  const isLight = variant === "light";

  return (
    <motion.div 
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300",
        isLight 
          ? "bg-white border border-[#E4DEC3]/50 shadow-[0_10px_30px_-10px_rgba(20,25,35,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(20,25,35,0.12)] hover:border-[#C8A86B]/60" 
          : "bg-[#141921] border border-white/10 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)] hover:border-[#C8A86B]/50 hover:shadow-[0_20px_45px_-10px_rgba(200,168,107,0.18)]",
        className
      )}
      whileHover={{ y: isSold ? 0 : -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        {/* Sold Stamp */}
        {isSold && (
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/60 backdrop-blur-[2px]">
            <div className="border-2 border-white/90 bg-black/80 text-white text-lg font-bold px-5 py-1.5 -rotate-12 uppercase tracking-widest rounded-md shadow-2xl">
              VÂNDUT
            </div>
          </div>
        )}
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          {/* Warranty tag */}
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-black/60 text-white/90 backdrop-blur-md border border-white/10">
            <ShieldCheck className="w-3 h-3 text-[#D8BA81]" />
            Garanție Defend
          </span>

          {/* VAT tag */}
          {isVatDeductible && !isSold && (
            <span className="text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full bg-[#C8A86B] text-[#0F1318] shadow-md">
              TVA Deductibil
            </span>
          )}
        </div>

        <img 
          src={listing.images?.[0]?.url || 'https://via.placeholder.com/600x400.png?text=AWD+Auto'} 
          alt={`${listing.title} de vânzare la parc auto Cluj-Napoca`}
          loading="lazy"
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out",
            !isSold && "group-hover:scale-105",
            isSold && "grayscale contrast-125"
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t pointer-events-none",
          isLight ? "from-black/40 via-transparent to-black/20" : "from-[#141921] via-transparent to-black/30"
        )} />
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-3">
          {/* Title */}
          <h3 className={cn(
            "font-luxury text-lg font-bold leading-snug line-clamp-2 transition-colors",
            isLight 
              ? "text-[#141921] group-hover:text-[#B88E4B]" 
              : "text-[#FAF8F5] group-hover:text-[#D8BA81]"
          )}>
            {listing.title}
          </h3>

          {/* Price & Monthly estimate */}
          <div className="flex items-baseline justify-between gap-2 border-b pb-3 border-inherit/40">
            <div>
              <span className={cn(
                "font-luxury text-2xl font-extrabold tracking-tight",
                isSold 
                  ? "text-muted-foreground line-through opacity-70" 
                  : isLight ? "text-[#141921]" : "text-[#D8BA81]"
              )}>
                €{price.toLocaleString()}
              </span>
              {isVatDeductible && !isSold && (
                <span className="block text-[11px] font-medium text-muted-foreground">
                  incl. TVA
                </span>
              )}
            </div>

            {!isSold && estimatedMonthly && (
              <div className="text-right">
                <span className={cn(
                  "text-xs font-semibold px-2 py-0.5 rounded-md",
                  isLight ? "bg-[#EDE7DC] text-[#453A2A]" : "bg-white/10 text-[#D8BA81]"
                )}>
                  ~€{estimatedMonthly}/lună
                </span>
                <span className="block text-[10px] text-muted-foreground mt-0.5">
                  avans 15%
                </span>
              </div>
            )}
          </div>

          {/* Specifications Pills */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg",
              isLight ? "bg-[#F5F2EB] text-[#353E4A]" : "bg-white/5 text-slate-300"
            )}>
              <Calendar className="h-3.5 w-3.5 text-[#C8A86B] shrink-0" />
              <span className="truncate font-medium">{year}</span>
            </div>

            <div className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg",
              isLight ? "bg-[#F5F2EB] text-[#353E4A]" : "bg-white/5 text-slate-300"
            )}>
              <Gauge className="h-3.5 w-3.5 text-[#C8A86B] shrink-0" />
              <span className="truncate font-medium">{mileage} km</span>
            </div>

            <div className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg",
              isLight ? "bg-[#F5F2EB] text-[#353E4A]" : "bg-white/5 text-slate-300"
            )}>
              <Fuel className="h-3.5 w-3.5 text-[#C8A86B] shrink-0" />
              <span className="truncate font-medium">{fuelType}</span>
            </div>

            <div className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg",
              isLight ? "bg-[#F5F2EB] text-[#353E4A]" : "bg-white/5 text-slate-300"
            )}>
              <Settings className="h-3.5 w-3.5 text-[#C8A86B] shrink-0" />
              <span className="truncate font-medium">{transmission}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {!isSold ? (
            <Link 
              to={`/masini-disponibile/${listing.id}`} 
              state={{ listing }} 
              className="block w-full"
            >
              <div className={cn(
                "flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300",
                isLight 
                  ? "bg-[#181E25] hover:bg-[#C8A86B] text-white hover:text-[#0F1318] shadow-sm hover:shadow-md" 
                  : "bg-gradient-to-r from-[#C29D5D] to-[#D8BA81] text-[#0F1318] hover:brightness-110 shadow-sm"
              )}>
                <span>Vezi Detalii & Galerie</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ) : (
            <div className="w-full text-center py-2.5 rounded-xl text-xs font-semibold bg-white/5 text-muted-foreground border border-white/10">
              Vehicul Livrat către Client
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default CarCard
