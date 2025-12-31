"use client"

import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: number
  name: string
  category: string
  image: string
  price: string
  index: number
}

export function ProductCard({ name, category, image, price, index }: ProductCardProps) {
  return (
    <div className="group relative animate-reveal opacity-0" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
      <div className="aspect-[3/4] overflow-hidden bg-white relative mb-6">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Interactive Hover State */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <Button className="rounded-none bg-white text-primary hover:bg-primary hover:text-white px-8 uppercase tracking-widest text-[10px] font-bold">
            Add to Cart
          </Button>
        </div>
        <div className="absolute top-6 left-6 text-[9px] font-bold uppercase tracking-[0.2em] py-1 px-3 bg-white/90 backdrop-blur">
          {category}
        </div>
      </div>

      <div className="space-y-2 px-2 text-center md:text-left">
        <h3 className="text-lg font-serif italic text-primary">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            Price upon request
          </span>
          <span className="text-lg font-medium">{price}</span>
        </div>
      </div>
    </div>
  )
}
