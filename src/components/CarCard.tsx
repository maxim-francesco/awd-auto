"use client"

import { Link } from "react-router-dom"
import { Calendar, Fuel, Gauge, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
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

  return (
    <article
      data-card="car-card"
      data-sold={isSold ? "true" : "false"}
      className="awd-gallery-card luxury-card group h-full"
    >
      {/* 1. Vehicle Photograph — 3:2 Native Proportions, Unobstructed Framing */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#141B22]">
        {isSold && (
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-[#0D1117]/35 backdrop-blur-[1px]">
            <div className="border border-white/75 bg-[#0D1117]/82 text-[#F9F7F2] text-sm font-luxury font-bold px-5 py-2 rounded-md uppercase tracking-[0.22em] shadow-xl backdrop-blur-md">
              VÂNDUT
            </div>
          </div>
        )}

        <img
          src={listing.images?.[0]?.url || 'https://via.placeholder.com/600x400.png?text=AWD+Auto'}
          alt={listing.title + ' de vânzare la parc auto Cluj-Napoca'}
          loading="eager"
          decoding="async"
          className={cn(
            "w-full h-full object-cover object-center awd-gallery-photo",
            isSold && "grayscale contrast-95 opacity-90"
          )}
        />
      </div>

      {/* Card Editorial Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4">
        <div className="space-y-3">
          {/* 2. Full Vehicle Name — Natural Wrap, Never Truncated */}
          <h3 className="awd-gallery-card-title text-lg sm:text-[1.15rem] font-bold whitespace-normal break-words min-h-[3rem]">
            {listing.title}
          </h3>

          {/* 3. Price & Commercial VAT Badge */}
          <div className="flex items-center justify-between gap-2 pt-0.5 flex-wrap">
            <div className="flex items-baseline gap-2">
              <span
                aria-hidden="true"
                className="inline-block w-1 h-5 rounded-full bg-luxury-gold/80 self-center"
              />
              <p className="awd-gallery-card-price text-2xl font-bold">
                €{(listing.price || 0).toLocaleString()}
              </p>
            </div>

            {isVatDeductible && !isSold && (
              <span className="awd-gallery-vat-badge">
                TVA Deductibil
              </span>
            )}
          </div>
        </div>

        {/* 4. Technical Specifications & 5. Primary CTA */}
        {!isSold && (
          <div className="space-y-4 mt-auto pt-1">
            <div className="awd-gallery-spec-grid">
              <div className="awd-gallery-spec-item">
                <Calendar className="h-4 w-4 awd-gallery-spec-icon" />
                <span className="truncate">{year}</span>
              </div>
              <div className="awd-gallery-spec-item">
                <Gauge className="h-4 w-4 awd-gallery-spec-icon" />
                <span className="truncate">{mileage} km</span>
              </div>
              <div className="awd-gallery-spec-item">
                <Fuel className="h-4 w-4 awd-gallery-spec-icon" />
                <span className="truncate">{fuelType}</span>
              </div>
              <div className="awd-gallery-spec-item">
                <Settings className="h-4 w-4 awd-gallery-spec-icon" />
                <span className="truncate">{transmission}</span>
              </div>
            </div>

            <div className="pt-0.5">
              <Link
                to={`/masini-disponibile/${listing.id}`}
                state={{ listing }}
                className="awd-gallery-cta"
              >
                Vezi Detalii
              </Link>
            </div>
          </div>
        )}

        {isSold && (
          <div className="mt-auto pt-2">
            <button
              type="button"
              className="awd-gallery-cta-sold"
              disabled
            >
              Vândut
            </button>
          </div>
        )}
      </div>
    </article>
  )
}

export default CarCard
