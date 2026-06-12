import { Camera } from "lucide-react";

// Platzhalter für 15 Bilder - URLs hier einfügen wenn verfügbar
const galleryImages = [
  { id: 1, src: null, alt: "Werkstatt Equipment 1" },
  { id: 2, src: null, alt: "Werkstatt Equipment 2" },
  { id: 3, src: null, alt: "Werkstatt Equipment 3" },
  { id: 4, src: null, alt: "Werkstatt Equipment 4" },
  { id: 5, src: null, alt: "Werkstatt Equipment 5" },
  { id: 6, src: null, alt: "Werkstatt Equipment 6" },
  { id: 7, src: null, alt: "Werkstatt Equipment 7" },
  { id: 8, src: null, alt: "Werkstatt Equipment 8" },
  { id: 9, src: null, alt: "Werkstatt Equipment 9" },
  { id: 10, src: null, alt: "Werkstatt Equipment 10" },
  { id: 11, src: null, alt: "Werkstatt Equipment 11" },
  { id: 12, src: null, alt: "Werkstatt Equipment 12" },
  { id: 13, src: null, alt: "Werkstatt Equipment 13" },
  { id: 14, src: null, alt: "Werkstatt Equipment 14" },
  { id: 15, src: null, alt: "Werkstatt Equipment 15" },
];

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
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
            data-testid="gallery-title"
          >
            Einblick in unsere Werkstatt
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Modernste Ausstattung und professionelles Equipment für alle Reparaturen und Wartungsarbeiten.
          </p>
        </div>

        {/* Masonry Grid - Auto-adapting to image sizes */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid"
              data-testid={`gallery-image-${image.id}`}
            >
              {image.src ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all duration-300 hover:scale-[1.02]"
                />
              ) : (
                <div 
                  className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors"
                  style={{ minHeight: `${150 + (image.id % 3) * 50}px` }}
                >
                  <Camera className="w-12 h-12 text-[#27272A] mb-3" />
                  <span className="text-[#71717A] text-sm">Bild {image.id}</span>
                  <span className="text-[#3F3F46] text-xs mt-1">Platzhalter</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
