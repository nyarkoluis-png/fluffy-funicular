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
          
          {/* Bild 1 - Werkstatt Außenansicht */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/8bbter4o_file_000000006cc4720a8a1e61b411dc40b6.png" 
              alt="Werkstatt Außenansicht Daimlerstraße 17" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 2 - Diagnosegerät */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/3x4rrf0w_file_00000000793871f4ba02a43648dca315%20%281%29.png" 
              alt="Professionelles Diagnosegerät" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 3 - Werkstatt Innen mit BMW */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/bld8cumq_webseite_optimiert_1.jpg" 
              alt="Werkstatt mit BMW auf Hebebühne" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 4 - Bremsflüssigkeitsgerät */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/55x9fnki_webseite_optimiert_2.jpg" 
              alt="ATE FB30 Bremsflüssigkeits-Wechselgerät" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 5 - Reifenmontiermaschine */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/j2t29eqx_webseite_optimiert_3.jpg" 
              alt="Tecnohelp Reifenmontiermaschine" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 6 - Hebebühne Steuerung */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/tckoo43r_20260612_132349~2.jpg" 
              alt="Longus Hebebühne Steuerung" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 7 - Nummernschilder Sammlung */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/w204n4un_20260612_132504~3.jpg" 
              alt="Nummernschilder Sammlung" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 8 - Reifen & Motor */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/oiugokkg_20260612_132812~2.jpg" 
              alt="Reifen Stapel und Motor" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 9 - BMW M2 Wandbild */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/0ggto5ue_20260612_132838~2.jpg" 
              alt="BMW M2 Wandkunst" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 10 - Werkstatt Lager */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/hdjcngcp_file_000000006340720abac62a26d481f19a.png" 
              alt="Werkstatt Lagerraum mit Equipment" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Platzhalter 11 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x340/18181B/71717A?text=Bild+11" 
              alt="Werkstatt Bild 11" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Platzhalter 12 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x260/18181B/71717A?text=Bild+12" 
              alt="Werkstatt Bild 12" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Platzhalter 13 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x310/18181B/71717A?text=Bild+13" 
              alt="Werkstatt Bild 13" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Platzhalter 14 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x330/18181B/71717A?text=Bild+14" 
              alt="Werkstatt Bild 14" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Platzhalter 15 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x300/18181B/71717A?text=Bild+15" 
              alt="Werkstatt Bild 15" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
