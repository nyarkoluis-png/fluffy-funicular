import { Camera } from "lucide-react";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-[#141414]"
      data-testid="gallery-section">

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

        {/* Gallery Grid - 15 Image Placeholders */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          
          {/* Bild 1 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 1" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full border border-dashed border-[#27272A] flex flex-col items-center justify-center hover:border-[#F97316] transition-colors min-h-[170px] !py-[32px] !px-[32px] !rounded-lg !bg-[#18181B]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 1</span>
            </div>
          </div>

          {/* Bild 2 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 2" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[200px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 2</span>
            </div>
          </div>

          {/* Bild 3 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 3" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[180px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 3</span>
            </div>
          </div>

          {/* Bild 4 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 4" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[160px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 4</span>
            </div>
          </div>

          {/* Bild 5 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 5" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[220px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 5</span>
            </div>
          </div>

          {/* Bild 6 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 6" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full border border-dashed border-[#27272A] flex flex-col items-center justify-center hover:border-[#F97316] transition-colors min-h-[190px] !py-[32px] !px-[32px] !rounded-lg !bg-[#18181B]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 6</span>
            </div>
          </div>

          {/* Bild 7 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 7" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[190px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 7</span>
            </div>
          </div>

          {/* Bild 8 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 8" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[150px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 8</span>
            </div>
          </div>

          {/* Bild 9 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 9" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[210px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 9</span>
            </div>
          </div>

          {/* Bild 10 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 10" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[180px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 10</span>
            </div>
          </div>

          {/* Bild 11 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 11" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[160px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 11</span>
            </div>
          </div>

          {/* Bild 12 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 12" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[200px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 12</span>
            </div>
          </div>

          {/* Bild 13 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 13" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[170px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 13</span>
            </div>
          </div>

          {/* Bild 14 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 14" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[190px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 14</span>
            </div>
          </div>

          {/* Bild 15 */}
          <div className="break-inside-avoid">
            <img src="" alt="Werkstatt Bild 15" className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all hidden" />
            <div className="w-full bg-[#18181B] border border-dashed border-[#27272A] rounded-lg flex flex-col items-center justify-center p-8 hover:border-[#F97316] transition-colors min-h-[150px]">
              <Camera className="w-12 h-12 text-[#27272A] mb-3" />
              <span className="text-[#71717A] text-sm">Bild 15</span>
            </div>
          </div>

        </div>
      </div>
    </section>);

}