"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/luxury-button"
import { Calendar, Fuel, Gauge, Settings } from "lucide-react"
import type { APIListing } from "@/hooks/useLatestListings"
import { cn } from "@/lib/utils"

interface CarCardProps {
  listing: APIListing;
}

const CarCard = ({ listing }: CarCardProps) => {
  const getAttributeValue = (attributeName: string) => {
    if (!listing || !listing.attributeValues) {
      return 'N/A';
    }
  
    const attribute = listing.attributeValues.find(
      (attr) => attr.attribute.name.toLowerCase() === attributeName.toLowerCase()
    );
  
    if (!attribute) {
      return 'N/A';
    }
    
    // Returnează valoarea care nu este null
    const value = attribute.stringValue || attribute.numberValue;
    return value !== undefined && value !== null ? value.toString() : 'N/A';
  };

  const mileageValue = getAttributeValue('kilometraj');
  const mileage = !isNaN(parseInt(mileageValue)) ? parseInt(mileageValue).toLocaleString() : 'N/A';
  const fuelType = getAttributeValue('combustibil');
  const year = getAttributeValue('An');
  const transmission = getAttributeValue('Cutie de viteze');

  const isVatDeductible = listing.attributeValues && listing.attributeValues.find(
    (attr) => attr.attribute.name.toLowerCase() === 'tva deductibil' && attr.booleanValue === true
  );

  const isSold = listing.status === 'SOLD';

  return (
    <motion.div 
      className="luxury-card group"
      whileHover={{ 
        scale: isSold ? 1 : 1.03, 
        y: isSold ? 0 : -5,
        boxShadow: isSold ? "0 10px 30px -10px hsl(220 13% 6% / 0.8)" : "0 25px 50px -12px hsl(var(--luxury-gold) / 0.4)"
      }}
      transition={{ 
        duration: 0.3, 
        ease: [0.4, 0, 0.2, 1] 
      }}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        {isSold && (
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/30">
            <div className="border-4 border-white bg-black/60 text-white text-2xl font-bold px-6 py-2 -rotate-12 transform uppercase tracking-widest backdrop-blur-sm">
              VÂNDUT
            </div>
          </div>
        )}
        
        {isVatDeductible && !isSold && (
          <span 
            className="absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10"
            style={{ 
              backgroundColor: 'hsl(var(--luxury-gold))',
              color: '#1c1c1c'
            }}
          >
            TVA Deductibil
          </span>
        )}
        <img 
          src={listing.images?.[0]?.url || 'https://via.placeholder.com/600x400.png?text=AWD+Auto'} 
          alt={listing.title + ' de vânzare la parc auto Cluj-Napoca'}
          className={cn(
            "w-full h-48 object-cover transition-transform duration-500",
            !isSold && "group-hover:scale-110",
            isSold && "grayscale"
          )}
        />
        <div className={cn("absolute inset-0 bg-gradient-to-t from-black/60 to-transparent", isSold && "from-black/80")} />
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className={cn(
            "font-luxury text-xl font-bold text-foreground transition-colors",
            isSold ? "whitespace-normal" : "truncate group-hover:text-luxury-gold"
          )}>
            {listing.title}
          </h3>
          <p className={cn("text-2xl font-bold text-luxury-gold", isSold && "text-muted-foreground")}>
            €{(listing.price || 0).toLocaleString()}
          </p>
        </div>

        {!isSold && (
            <>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-luxury-gold" />
                    <span>{year}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Gauge className="h-4 w-4 text-luxury-gold" />
                    <span>{mileage} km</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Fuel className="h-4 w-4 text-luxury-gold" />
                    <span>{fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Settings className="h-4 w-4 text-luxury-gold" />
                    <span>{transmission}</span>
                  </div>
                </div>

                <div className="pt-2">
                    <Link to={`/masini-disponibile/${listing.id}`} state={{ listing }} className="block">
                        <Button className="w-full" size="sm">
                            Vezi Detalii
                        </Button>
                    </Link>
                </div>
            </>
        )}
        
         {isSold && (
            <div className="pt-2">
                <Button className="w-full" size="sm" disabled>
                    Vândut
                </Button>
            </div>
        )}
      </div>
    </motion.div>
  )
}

export default CarCard
