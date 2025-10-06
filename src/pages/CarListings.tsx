"use client"

import { motion } from "framer-motion"
import Layout from "@/components/layout/Layout"
import CarCard from "@/components/CarCard"
import { StaggeredGrid, StaggeredItem, AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/luxury-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import car1 from "@/assets/car-1.jpg"
import car2 from "@/assets/car-2.jpg"
import car3 from "@/assets/car-3.jpg"
import car4 from "@/assets/car-4.jpg"

const CarListings = () => {
  // Mock car data
  const cars = [
    {
      image: car1,
      make: "Porsche",
      model: "911 Turbo S",
      price: "€185,000",
      year: "2023",
      mileage: "2,500 km",
      fuelType: "Benzină",
      engine: "3800 cm³"
    },
    {
      image: car2,
      make: "BMW",
      model: "M4 Competition",
      price: "€95,000",
      year: "2022",
      mileage: "8,000 km",
      fuelType: "Benzină",
      engine: "2993 cm³"
    },
    {
      image: car3,
      make: "Audi",
      model: "RS6 Avant",
      price: "€125,000",
      year: "2023",
      mileage: "5,200 km",
      fuelType: "Benzină",
      engine: "3996 cm³"
    },
    {
      image: car4,
      make: "Mercedes-AMG",
      model: "GT 63 S",
      price: "€165,000",
      year: "2022",
      mileage: "12,000 km",
      fuelType: "Benzină",
      engine: "3982 cm³"
    },
    // Duplicate for more listings
    {
      image: car1,
      make: "Porsche",
      model: "Cayenne Turbo",
      price: "€155,000",
      year: "2023",
      mileage: "1,800 km",
      fuelType: "Benzină",
      engine: "4000 cm³"
    },
    {
      image: car2,
      make: "BMW",
      model: "X6 M Competition",
      price: "€135,000",
      year: "2022",
      mileage: "15,000 km",
      fuelType: "Benzină",
      engine: "4395 cm³"
    },
    {
      image: car3,
      make: "Audi",
      model: "R8 V10",
      price: "€195,000",
      year: "2023",
      mileage: "3,500 km",
      fuelType: "Benzină",
      engine: "5204 cm³"
    },
    {
      image: car4,
      make: "Mercedes-AMG",
      model: "C63 S",
      price: "€85,000",
      year: "2022",
      mileage: "18,000 km",
      fuelType: "Benzină",
      engine: "3982 cm³"
    },
    {
      image: car1,
      make: "Porsche",
      model: "Macan GTS",
      price: "€78,000",
      year: "2022",
      mileage: "22,000 km",
      fuelType: "Benzină",
      engine: "2894 cm³"
    },
    {
      image: car2,
      make: "BMW",
      model: "M8 Gran Coupe",
      price: "€175,000",
      year: "2023",
      mileage: "4,200 km",
      fuelType: "Benzină",
      engine: "4395 cm³"
    },
    {
      image: car3,
      make: "Audi",
      model: "SQ8",
      price: "€115,000",
      year: "2022",
      mileage: "14,500 km",
      fuelType: "Benzină",
      engine: "4000 cm³"
    },
    {
      image: car4,
      make: "Mercedes-AMG",
      model: "GLS 63",
      price: "€145,000",
      year: "2023",
      mileage: "6,800 km",
      fuelType: "Benzină",
      engine: "3982 cm³"
    }
  ]

  const brands = ["Audi", "BMW", "Mercedes-Benz", "Porsche"]

  return (
    <Layout>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="luxury-card p-6 sticky top-24">
              <h2 className="font-luxury text-xl font-bold text-luxury-gold mb-6">
                Filtrează Rezultatele
              </h2>
              
              <div className="space-y-6">
                {/* Price Range */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Preț (€)</Label>
                  <Slider
                    defaultValue={[50000]}
                    max={300000}
                    min={20000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>€20,000</span>
                    <span>€300,000</span>
                  </div>
                </div>

                <Separator />

                {/* Brand Filter */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Marcă</Label>
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={brand} />
                      <Label htmlFor={brand} className="text-sm">
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Year Range */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">An fabricație</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="De la" />
                    <Input placeholder="Până la" />
                  </div>
                </div>

                <Button className="w-full" size="sm">
                  Aplică Filtrele
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <AnimatedSection className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
              <motion.h1 
                className="font-luxury text-3xl font-bold text-foreground bg-gradient-to-r from-luxury-gold to-luxury-silver bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Mașini Disponibile
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sortează după" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">Preț crescător</SelectItem>
                    <SelectItem value="price-desc">Preț descrescător</SelectItem>
                    <SelectItem value="year-desc">An nou întâi</SelectItem>
                    <SelectItem value="mileage-asc">Kilometraj mic</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            </AnimatedSection>

            {/* Car Grid */}
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {cars.map((car, index) => (
                <StaggeredItem key={index}>
                  <CarCard {...car} />
                </StaggeredItem>
              ))}
            </StaggeredGrid>

            {/* Pagination */}
            <div className="flex justify-center space-x-2">
              <Button variant="outline" disabled>
                Anterior
              </Button>
              <Button size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline">
                Următor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CarListings