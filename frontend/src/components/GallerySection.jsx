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

        {/* Gallery Grid - 15 Images */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          
          {/* Bild 1 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x300/18181B/71717A?text=Bild+1" 
              alt="Werkstatt Bild 1" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 2 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x350/18181B/71717A?text=Bild+2" 
              alt="Werkstatt Bild 2" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 3 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x280/18181B/71717A?text=Bild+3" 
              alt="Werkstatt Bild 3" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 4 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x320/18181B/71717A?text=Bild+4" 
              alt="Werkstatt Bild 4" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 5 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x380/18181B/71717A?text=Bild+5" 
              alt="Werkstatt Bild 5" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 6 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x290/18181B/71717A?text=Bild+6" 
              alt="Werkstatt Bild 6" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 7 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x340/18181B/71717A?text=Bild+7" 
              alt="Werkstatt Bild 7" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 8 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x260/18181B/71717A?text=Bild+8" 
              alt="Werkstatt Bild 8" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 9 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x360/18181B/71717A?text=Bild+9" 
              alt="Werkstatt Bild 9" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 10 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x310/18181B/71717A?text=Bild+10" 
              alt="Werkstatt Bild 10" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 11 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x270/18181B/71717A?text=Bild+11" 
              alt="Werkstatt Bild 11" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 12 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x350/18181B/71717A?text=Bild+12" 
              alt="Werkstatt Bild 12" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 13 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x290/18181B/71717A?text=Bild+13" 
              alt="Werkstatt Bild 13" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 14 */}
          <div className="break-inside-avoid">
            <img 
              src="https://placehold.co/400x330/18181B/71717A?text=Bild+14" 
              alt="Werkstatt Bild 14" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
            />
          </div>

          {/* Bild 15 */}
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
