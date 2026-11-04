"use client"

import { Link } from "react-router-dom"
import { Calendar, Fuel, Gauge, Settings, ArrowRight } from "lucide-react"
import { APIListing, getAttributeValueById } from "@/lib/attributes"

interface CarCardProps {
  listing: APIListing;
}

const CarCard = ({ listing }: CarCardProps) => {
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

  const priceVal = listing.price ? `€${listing.price.toLocaleString()}` : "La cerere";

  const mainPhoto = listing.photos && listing.photos.length > 0
    ? (typeof listing.photos[0] === 'string' ? listing.photos[0] : (listing.photos[0] as any)?.url)
    : "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg">
      {/* Photo Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-raised">
        <img
          src={mainPhoto}
          alt={listing.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none">
          <div className="flex items-center justify-between gap-2">
            {isVatDeductible ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-ink-deep/85 text-gold-soft border border-gold/30 backdrop-blur-md">
                TVA Deductibil
              </span>
            ) : <span />}

            {isSold ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-rose-600/90 text-white uppercase tracking-wider backdrop-blur-md">
                Vândut
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                Disponibil
              </span>
            )}
          </div>
        </div>

        {isSold && (
          <div className="absolute inset-0 bg-ink-deep/50 flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
            <div className="border-2 border-white/80 bg-ink-deep/90 text-white text-lg font-black px-5 py-1.5 -rotate-12 uppercase tracking-widest">
              VÂNDUT
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Subtitle / Meta */}
          <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
            {[year !== "N/A" ? year : null, fuelType !== "N/A" ? fuelType : null, transmission !== "N/A" ? transmission : null]
              .filter(Boolean)
              .join(" · ")}
          </div>

          {/* Title */}
          <Link to={`/masini-disponibile/${listing.id}`}>
            <h3 className="font-bold text-foreground text-lg leading-snug line-clamp-1 group-hover:text-gold transition-colors">
              {listing.title}
            </h3>
          </Link>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-3 mt-4 pt-3 border-t border-border text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-steel flex-shrink-0" />
              <span className="truncate">{mileage} km</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-steel flex-shrink-0" />
              <span className="truncate">An {year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-3.5 h-3.5 text-steel flex-shrink-0" />
              <span className="truncate">{fuelType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="w-3.5 h-3.5 text-steel flex-shrink-0" />
              <span className="truncate">{transmission}</span>
            </div>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="mt-5 pt-3 border-t border-border">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-2xl font-black text-foreground tracking-tight">
                {priceVal}
              </span>
              {listing.price && (
                <span className="block text-[11px] text-muted-foreground">
                  {isVatDeductible ? "TVA inclus și deductibil" : "TVA inclus"}
                </span>
              )}
            </div>
          </div>

          <Link
            to={`/masini-disponibile/${listing.id}`}
            className="btn-gold w-full flex items-center justify-center gap-2 text-ink-deep font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider transition-all"
          >
            <span>Vezi Detalii</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
