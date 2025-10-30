"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/luxury-button"
import { Calendar, Fuel, Gauge, Settings, Cog } from "lucide-react"
import type { APIListing } from "@/hooks/useLatestListings" // Changed to APIListing

interface CarCardProps {
  listing: APIListing; // Changed to APIListing
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

  return (
    <motion.div 
      className="luxury-card group"
      whileHover={{ 
        scale: 1.03, 
        y: -5,
        boxShadow: "0 25px 50px -12px hsl(var(--luxury-gold) / 0.4)"
      }}
      transition={{ 
        duration: 0.3, 
        ease: [0.4, 0, 0.2, 1] 
      }}
    >
      {/* Car Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={listing.images?.[0]?.url || 'https://via.placeholder.com/600x400.png?text=AWD+Auto'} 
          alt={listing.title + ' de vânzare la parc auto Cluj-Napoca'}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Title and Price */}
        <div className="space-y-2">
          <h3 className="font-luxury text-xl font-bold text-foreground group-hover:text-luxury-gold transition-colors truncate">
            {listing.title}
          </h3>
          <p className="text-2xl font-bold text-luxury-gold">
            €{(listing.price || 0).toLocaleString()}
          </p>
        </div>

        {/* Specifications */}
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

        {/* Action Button */}
        <Link to={`/masini-disponibile/${listing.id}`} state={{ listing }} className="block">
          <Button className="w-full" size="sm">
            Vezi Detalii
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

export default CarCard
