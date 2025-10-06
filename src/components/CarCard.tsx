"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/luxury-button"
import { Calendar, Fuel, Gauge, Settings } from "lucide-react"
import type { ProcessedListing } from "@/hooks/useLatestListings"
import { format } from "date-fns"

interface CarCardProps {
  listing: ProcessedListing;
}

const CarCard = ({ listing }: CarCardProps) => {
  const postDate = format(new Date(listing.createdAt), 'dd.MM.yyyy');

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
          src={listing.image} 
          alt={listing.title}
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
            €{listing.price.toLocaleString()}
          </p>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-luxury-gold" />
            <span>{postDate}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Gauge className="h-4 w-4 text-luxury-gold" />
            <span>{listing.mileage}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Fuel className="h-4 w-4 text-luxury-gold" />
            <span>{listing.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Settings className="h-4 w-4 text-luxury-gold" />
            <span>{listing.engine}</span>
          </div>
        </div>

        {/* Action Button */}
        <Link to={`/masini-disponibile/${listing.id}`} className="block">
          <Button className="w-full" size="sm">
            Vezi Detalii
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

export default CarCard
