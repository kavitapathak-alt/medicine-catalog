import { Search, Pill, ShieldCheck, Thermometer, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Sample Medicine Data
const MEDICINES = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    description: "Effective relief from fever and mild to moderate pain like headaches and toothaches.",
    category: "Pain Relief",
    image: "/paracetamol-box.jpg",
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    description: "Broad-spectrum antibiotic used to treat various bacterial infections in children and adults.",
    category: "Antibiotics",
    image: "/antibiotic-pills.jpg",
  },
  {
    id: 3,
    name: "Cetirizine 10mg",
    description: "Antihistamine that reduces the natural chemical histamine in the body for allergy relief.",
    category: "Allergy",
    image: "/allergy-medicine.png",
  },
  {
    id: 4,
    name: "Ibuprofen 400mg",
    description: "Nonsteroidal anti-inflammatory drug (NSAID) used for treating pain, fever, and inflammation.",
    category: "Pain Relief",
    image: "/ibuprofen-capsules.jpg",
  },
  {
    id: 5,
    name: "Vitamin C 1000mg",
    description: "High-potency antioxidant supplement to support immune health and collagen production.",
    category: "Supplements",
    image: "/vitamin-c-tablets.png",
  },
  {
    id: 6,
    name: "Omeprazole 20mg",
    description: "Proton pump inhibitor that decreases the amount of acid produced in the stomach.",
    category: "Digestive Health",
    image: "/stomach-medicine.png",
  },
]

export default function MedicineCatalog() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Pill className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">MedCatalog</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Prescriptions
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Emergency
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                0
              </span>
            </Button>
            <Button className="rounded-full px-6">Login</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center py-12 md:py-24 overflow-hidden bg-gradient-to-br from-secondary/50 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance leading-[1.1]">
                Aapki Sehat, <br />
                <span className="text-primary italic">Hamari Zimmedari</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 text-pretty">
                Browse our comprehensive catalog of verified medications and healthcare supplies delivered with care to
                your home.
              </p>

              <div className="max-w-xl mx-auto lg:mx-0 relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                </div>
                <Input
                  type="text"
                  placeholder="Medicine search karein..."
                  className="w-full pl-12 h-14 rounded-full border-2 border-primary/10 bg-white shadow-xl shadow-primary/5 focus-visible:ring-primary text-lg"
                />
              </div>
            </div>

            {/* Updated hero image grid to be visible on mobile and optimized for smaller screens */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 relative mt-8 lg:mt-0">
              <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl rotate-[-2deg] border-2 md:border-4 border-white">
                  <img
                    src="/pharmacist-helping-patient.jpg"
                    alt="Healthcare"
                    className="w-full h-32 md:h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl rotate-[2deg] border-2 md:border-4 border-white">
                  <img src="/medical-pills-capsules.jpg" alt="Medicines" className="w-full h-40 md:h-64 object-cover" />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl rotate-[1deg] border-2 md:border-4 border-white">
                  <img src="/doctor-stethoscope.jpg" alt="Expert Care" className="w-full h-40 md:h-64 object-cover" />
                </div>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl rotate-[-3deg] border-2 md:border-4 border-white">
                  <img
                    src="/diverse-medical-equipment.png"
                    alt="Supplies"
                    className="w-full h-32 md:h-48 object-cover"
                  />
                </div>
              </div>

              {/* Decorative Blur */}
              <div className="absolute -z-10 inset-0 bg-primary/10 blur-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="container mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: ShieldCheck, title: "FDA Approved", desc: "100% genuine medications" },
            { icon: Thermometer, title: "Careful Storage", desc: "Temperature controlled" },
            { icon: Pill, title: "Expert Support", desc: "Certified pharmacists" },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/10 p-3 rounded-xl">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <main className="container mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Catalog</span>
            <h2 className="text-3xl font-bold">Featured Medicines</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {["All", "Pain Relief", "Antibiotics", "Allergy", "Vitamins"].map((cat) => (
              <Button key={cat} variant={cat === "All" ? "default" : "outline"} className="rounded-full">
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEDICINES.map((med) => (
            <div
              key={med.id}
              className="group bg-white rounded-3xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
            >
              {/* Maximized image height for a professional catalog feel */}
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img
                  src={med.image || "/placeholder.svg"}
                  alt={med.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/10">
                  {med.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {med.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">{med.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase font-semibold">Price</span>
                    <span className="text-xl font-bold text-primary">₹249.00</span>
                  </div>
                  <Button size="lg" className="rounded-2xl px-8 shadow-lg shadow-primary/20">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary p-1.5 rounded-lg">
                  <Pill className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">MedCatalog</span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-8">
                Your reliable health partner, delivering authentic medicines and expert healthcare advice directly to
                your doorstep.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer" />
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer" />
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    All Medicines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Wellness Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Lab Tests
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Help & Support</h4>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Customer Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground">
            <p>© 2025 MedCatalog Healthcare. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
