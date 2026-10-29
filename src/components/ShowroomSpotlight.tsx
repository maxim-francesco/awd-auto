"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ShieldCheck, Calendar, Gauge, Fuel, Settings, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { APIListing, getAttributeValueById } from "@/lib/attributes"

interface ShowroomSpotlightProps {
  listing: APIListing;
}

const ShowroomSpotlight = ({ listing }: ShowroomSpotlightProps) => {
  const yearVal = getAttributeValueById(listing, ["attr:year"], ["an"]);
  const year = yearVal !== null && yearVal !== undefined ? String(yearVal) : "2020";

  const kmVal = getAttributeValueById(listing, ["attr:mileage"], ["kilometraj", "rulaj"]);
  const mileageNum = typeof kmVal === "number" ? kmVal : (typeof kmVal === "string" ? parseInt(kmVal, 10) : null);
  const mileage = mileageNum !== null && !isNaN(mileageNum) ? mileageNum.toLocaleString() : "106,500";

  const fuelVal = getAttributeValueById(listing, ["attr:fuelType"], ["combustibil"]);
  const fuelType = fuelVal !== null && fuelVal !== undefined ? String(fuelVal) : "Diesel";

  const transVal = getAttributeValueById(listing, ["attr:gearbox", "attr:transmission"], ["cutie de viteze", "transmisie"]);
  const transmission = transVal !== null && transVal !== undefined ? String(transVal) : "Manuală";

  const vatVal = getAttributeValueById(listing, ["attr:vatDeductible"], ["tva deductibil"]);
  const isVatDeductible = vatVal === true || String(vatVal).toLowerCase() === "true";

  const price = listing.price || 0;
  const estimatedMonthly = price > 0 ? Math.round(price * 0.017) : 190;

  return (
    <div className="relative bg-gradient-to-br from-[#12161E] via-[#161B23] to-[#0F1318] border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 text-white mb-12">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#C8A86B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Big Vehicle Imagery */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
            {/* Top badges */}
            <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C8A86B] text-[#0F1318] text-[10px] sm:text-xs font-black tracking-wide shadow-lg">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>VEHICUL SPOTLIGHT<span className="hidden sm:inline"> • RECOMANDAREA SĂPTĂMÂNII</span></span>
              </span>

              {isVatDeductible && (
                <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-white/90 text-[#0F1318] backdrop-blur-md">
                  TVA Deductibil
                </span>
              )}
            </div>

            <img
              src={listing.images?.[0]?.url || 'https://via.placeholder.com/800x500.png?text=AWD+Auto'}
              alt={listing.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12161E] via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Quick thumbnails strip preview if available */}
          {listing.images && listing.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2.5">
              {listing.images.slice(1, 5).map((img, idx) => (
                <div key={idx} className="aspect-[16/10] rounded-lg overflow-hidden border border-white/10 opacity-75 hover:opacity-100 transition-opacity">
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Editorial Specifications & Commercial Call to Action */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D8BA81] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C8A86B]" />
              Inspecție 100+ Puncte • RAR & CIV Efectuat
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {listing.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              Autoturism pregătit pentru livrare imediată din parcul nostru din Cluj-Napoca. Garanție de bază Defend inclusă în preț și inspecție tehnică amănunțită în peste 100 de puncte.
            </p>
          </div>

          {/* Price & Monthly badge */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400">Preț Vânzare</div>
              <div className="font-heading text-3xl font-extrabold text-[#D8BA81]">
                €{price.toLocaleString()}
              </div>
              {isVatDeductible && <span className="text-[11px] text-slate-400">TVA inclus și deductibil</span>}
            </div>

            <div className="text-right border-l border-white/10 pl-5">
              <div className="text-xs text-slate-400">Rată estimativă</div>
              <div className="font-heading text-xl font-bold text-white">
                ~€{estimatedMonthly} <span className="text-xs font-normal text-slate-400">/lună</span>
              </div>
              <span className="text-[10px] text-slate-400">Simulare Ipotetică</span>
            </div>
          </div>

          {/* Key Specs Matrix */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
              <Calendar className="w-4 h-4 text-[#C8A86B]" />
              <div>
                <div className="text-[10px] text-slate-400">An Fabricație</div>
                <div className="font-semibold text-white">{year}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
              <Gauge className="w-4 h-4 text-[#C8A86B]" />
              <div>
                <div className="text-[10px] text-slate-400">Kilometraj Certificat</div>
                <div className="font-semibold text-white">{mileage} km</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
              <Fuel className="w-4 h-4 text-[#C8A86B]" />
              <div>
                <div className="text-[10px] text-slate-400">Combustibil</div>
                <div className="font-semibold text-white">{fuelType}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
              <Settings className="w-4 h-4 text-[#C8A86B]" />
              <div>
                <div className="text-[10px] text-slate-400">Cutie de Viteze</div>
                <div className="font-semibold text-white">{transmission}</div>
              </div>
            </div>
          </div>

          {/* Guarantee highlights */}
          <div className="space-y-2 pt-1 border-t border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garanție Defend inclusă în prețul afișat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Inspecție RAR și CIV finalizate</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              to={`/masini-disponibile/${listing.id}`}
              state={{ listing }}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#C29D5D] via-[#D8BA81] to-[#C29D5D] text-[#0F1318] hover:brightness-110 shadow-lg transition-all"
            >
              <span>Vezi Galeria & Toate Detaliile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:0752228593"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
            >
              <span>Sună Dealer</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowroomSpotlight
