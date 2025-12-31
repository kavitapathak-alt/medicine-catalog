export function Footer() {
  return (
    <footer className="bg-primary text-white pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-32">
          <div>
            <span className="text-[120px] font-serif italic leading-none opacity-20 block mb-12">Med</span>
            <p className="text-primary-foreground/60 text-sm max-w-xs leading-relaxed">
              Dedicated to Creativity, Culture & Health. We help brands find their voice through storytelling and
              medical precision.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Practice</h4>
              <ul className="space-y-4 text-sm font-medium">
                {["All Services", "The Team", "Case Studies", "Contact"].map((u) => (
                  <li key={u}>
                    <a href="#" className="hover:opacity-60 transition-opacity">
                      {u}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Journal</h4>
              <ul className="space-y-4 text-sm font-medium">
                {["Research", "FAQ", "Logistics", "Privacy"].map((u) => (
                  <li key={u}>
                    <a href="#" className="hover:opacity-60 transition-opacity">
                      {u}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Location</h4>
            <p className="text-sm leading-loose">
              124 Healthcare Boulevard <br />
              Mumbai, MH 400001 <br />
              hello@medcatalog.com
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">
          <p>© 2025 MedCatalog Healthcare. Built for Excellence.</p>
          <div className="flex gap-12">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">X / Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
