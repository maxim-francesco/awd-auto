"use client"

import { Link } from "react-router-dom"
import { Calendar, Fuel, Gauge, Settings, ArrowRight } from "lucide-react"
import { APIListing, getAttributeValueById } from "@/lib/attributes"
import { cn } from "@/lib/utils"

interface CarCardProps {
  listing: APIListing;
}

// Neutral placeholder SVG when a listing genuinely has no photos
const PLACEHOLDER_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%20fill%3D%22%2316181C%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23101215%22%2F%3E%3Cpath%20d%3D%22M260%20270l40-60h160l40%2060H260zm-30%2030c0-11%209-20%2020-20s20%209%2020%2020-9%2020-20%2020-20-9-20-20zm260%200c0-11%209-20%2020-20s20%209%2020%2020-9%2020-20%2020-20-9-20-20z%22%20fill%3D%22%23858A91%22%20opacity%3D%220.4%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2268%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23858A91%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22600%22%3EFotografie%20indisponibil%C4%83%3C%2Ftext%3E%3C%2Fsvg%3E";

const CarCard = ({ listing }: CarCardProps) => {
  const isSold = listing.status === 'SOLD';

  const yearVal = getAttributeValueById(listing, ["attr:year"], ["an"]);
  const year = yearVal !== null && yearVal !== undefined ? String(yearVal) : null;

  const kmVal = getAttributeValueById(listing, ["attr:mileage"], ["kilometraj", "rulaj"]);
  const mileageNum = typeof kmVal === "number" ? kmVal : (typeof kmVal === "string" ? parseInt(kmVal, 10) : null);
  const mileage = mileageNum !== null && !isNaN(mileageNum) ? mileageNum.toLocaleString() : null;

  const fuelVal = getAttributeValueById(listing, ["attr:fuelType"], ["combustibil"]);
  const fuelType = fuelVal !== null && fuelVal !== undefined ? String(fuelVal) : null;

  const transVal = getAttributeValueById(listing, ["attr:gearbox", "attr:transmission"], ["cutie de viteze", "transmisie"]);
  const transmission = transVal !== null && transVal !== undefined ? String(transVal) : null;

  const vatVal = getAttributeValueById(listing, ["attr:vatDeductible"], ["tva deductibil"]);
  const isVatDeductible = vatVal === true || String(vatVal).toLowerCase() === "true";

  // Use the real photo from listing.images array (matching baseline behavior)
  const mainPhoto = (listing.images && listing.images.length > 0 && listing.images[0]?.url)
    ? listing.images[0].url
    : PLACEHOLDER_IMAGE;

  const priceVal = listing.price ? `€${listing.price.toLocaleString()}` : "La cerere";

  return (
    <div className={cn(
      "group relative flex flex-col h-full overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300",
      !isSold && "hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
    )}>
      {/* Photo Container with 16:10 / 3:2 Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-raised">
        <img
          src={mainPhoto}
          alt={listing.title + ' de vânzare la AWD Auto'}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500",
            !isSold && "group-hover:scale-[1.04]",
            isSold && "grayscale contrast-90"
          )}
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none">
          <div className="flex items-center justify-between gap-2">
            {isVatDeductible && !isSold ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-ink-deep/90 text-gold-soft border border-gold/30 backdrop-blur-md shadow-sm">
                TVA Deductibil
              </span>
            ) : <span />}

            {!isSold && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                Disponibil
              </span>
            )}
          </div>
        </div>

        {/* Sold Overlay matching baseline */}
        {isSold && (
          <div className="absolute inset-0 bg-ink-deep/60 flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
            <div className="border-2 border-white/90 bg-ink-deep/90 text-white text-lg font-black px-6 py-2 -rotate-12 uppercase tracking-widest shadow-xl">
              VÂNDUT
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Subtitle / Meta (only for available cars with valid specs) */}
          {!isSold && (year || fuelType || transmission) && (
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
              {[year, fuelType, transmission].filter(Boolean).join(" · ")}
            </div>
          )}

          {/* Title - Allows 2 lines without truncating words */}
          {!isSold ? (
            <Link to={`/masini-disponibile/${listing.id}`} state={{ listing }} className="block">
              <h3 className="font-bold text-foreground text-lg leading-snug line-clamp-2 min-h-[3.25rem] group-hover:text-gold transition-colors">
                {listing.title}
              </h3>
            </Link>
          ) : (
            <h3 className="font-bold text-muted-foreground text-lg leading-snug line-clamp-2 min-h-[3.25rem]">
              {listing.title}
            </h3>
          )}

          {/* Specs Grid - Rendered exclusively for available vehicles, matching baseline */}
          {!isSold && (
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-3 mt-4 pt-3.5 border-t border-border text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Gauge className="w-3.5 h-3.5 text-steel flex-shrink-0" />
                <span className="truncate">{mileage ? `${mileage} km` : "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-steel flex-shrink-0" />
                <span className="truncate">{year ? `An ${year}` : "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Fuel className="w-3.5 h-3.5 text-steel flex-shrink-0" />
                <span className="truncate">{fuelType || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-3.5 h-3.5 text-steel flex-shrink-0" />
                <span className="truncate">{transmission || "N/A"}</span>
              </div>
            </div>
          )}
        </div>

        {/* Price & CTA Section */}
        <div className="mt-5 pt-3.5 border-t border-border">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className={cn(
                "text-2xl font-black tracking-tight",
                isSold ? "text-muted-foreground" : "text-foreground"
              )}>
                {priceVal}
              </span>
              {!isSold && listing.price ? (
                <span className="block text-[11px] text-muted-foreground">
                  {isVatDeductible ? "TVA inclus și deductibil" : "TVA inclus"}
                </span>
              ) : isSold ? (
                <span className="block text-[11px] text-muted-foreground">
                  Vehicul tranzacționat
                </span>
              ) : null}
            </div>
          </div>

          {/* CTA matching baseline behavior: clickable for available, disabled for sold */}
          {!isSold ? (
            <Link
              to={`/masini-disponibile/${listing.id}`}
              state={{ listing }}
              className="btn-gold w-full flex items-center justify-center gap-2 text-ink-deep font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider transition-all"
            >
              <span>Vezi Detalii</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <button
              disabled
              className="w-full flex items-center justify-center gap-2 bg-muted/80 text-muted-foreground font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider cursor-not-allowed border border-border/60"
            >
              <span>Vândut</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
