export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-[#141414]"
      data-testid="gallery-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#F97316] mb-4 block">
            Unsere Werkstatt
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Einblick in unsere Werkstatt
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Modernste Ausstattung und professionelles Equipment für alle Reparaturen und Wartungsarbeiten.
          </p>
        </div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          
          {/* Bild 1 - BMW M2 hellblau */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-eiarnc6j.emergentagent.net/job_kfz-reparatur-pro/artifacts/rml7d3d0_IMG-20260619-WA0001%281%29.jpg" 
              alt="BMW M2 hellblau in der Werkstatt" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 2 - VW T-Cross mit Smart */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-eiarnc6j.emergentagent.net/job_kfz-reparatur-pro/artifacts/3k9pqvys_IMG-20260607-WA0006.jpg" 
              alt="VW T-Cross mit Smart auf Hebebühne" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 3 - Elektroauto grau */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-eiarnc6j.emergentagent.net/job_kfz-reparatur-pro/artifacts/64xhgom5_IMG-20260607-WA0004.jpg" 
              alt="Elektroauto in der Werkstatt" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 4 - Dodge Durango auf Hebebühne */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-eiarnc6j.emergentagent.net/job_kfz-reparatur-pro/artifacts/722bq21x_IMG-20260829-WA0002.jpg" 
              alt="Dodge Durango auf Hebebühne" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 5 - Dodge Charger Sheriff */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-eiarnc6j.emergentagent.net/job_kfz-reparatur-pro/artifacts/jr3v947s_IMG-20260829-WA0004.jpg" 
              alt="Dodge Charger Sheriff Style" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
