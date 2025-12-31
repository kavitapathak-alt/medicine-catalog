"use client"

import { Plus, ShoppingCart, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md py-4 border-b" : "py-8"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-primary flex items-center justify-center transition-transform group-hover:rotate-90">
            <Plus className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-[0.2em] uppercase">MedCatalog</span>
        </div>

        <nav className="hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-widest">
          {["Collection", "Clinics", "Science", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-primary transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-8">
          <button className="relative group">
            <ShoppingCart className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            <span className="absolute -top-2 -right-2 text-[9px] font-bold bg-accent text-white w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <Menu className="h-6 w-6 lg:hidden" />
          <Button
            variant="outline"
            className="hidden lg:flex border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 tracking-widest text-[10px] uppercase font-bold bg-transparent"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  )
}
