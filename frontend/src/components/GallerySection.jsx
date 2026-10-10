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
          
          {/* Bild 1 - Porsche 911 Turbo S von vorne */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/wdev0m88_IMG-20260909-WA3075.webp" 
              alt="Porsche 911 Turbo S von vorne" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-1"
            />
          </div>

          {/* Bild 2 - Porsche 911 Turbo S von der Seite */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/4mhwyaq9_IMG-20260909-WA9081.webp" 
              alt="Porsche 911 Turbo S von der Seite" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-2"
            />
          </div>

          {/* Bild 3 - Porsche 911 Turbo S von hinten */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/2yatwtjz_IMG-20260909-WA0011.jpg" 
              alt="Porsche 911 Turbo S von hinten vor der Werkstatt" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-3"
            />
          </div>

          {/* Bild 4 - Porsche 911 Turbo S Innenraum */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/tajkv6wj_IMG-20260909-WA7794.webp" 
              alt="Porsche 911 Turbo S Innenraum mit rotem Leder" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-4"
            />
          </div>

          {/* Bild 5 - Dodge Durango auf Hebebühne */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/6vlyz63b_IMG-20260829-WA0006~2.webp" 
              alt="Dodge Durango auf Hebebühne" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-5"
            />
          </div>

          {/* Bild 6 - Silbernes Elektroauto von hinten */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/og0i1rmw_IMG-20260829-WA0008~2.jpg" 
              alt="Silbernes Elektroauto in der Werkstatt" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-6"
            />
          </div>

          {/* Bild 7 - Werkstatt Panorama */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/og3vq029_IMG-20260829-WA0009~2.jpg" 
              alt="Werkstatt Panorama mit mehreren Autos" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-7"
            />
          </div>

          {/* Bild 8 - Mechaniker mit Motor */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/ckdczfzs_IMG-20260607-WA0004~2.jpg" 
              alt="Mechaniker bei Motorarbeiten" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-8"
            />
          </div>

          {/* Bild 9 - Porsche mit offener Haube */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/4zqx6pbh_IMG-20260607-WA0006~2.jpg" 
              alt="Porsche mit offener Haube" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-9"
            />
          </div>

          {/* Bild 10 - BMW M3 hellblau */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/0kpibm88_IMG-20260829-WA0004~2.jpg" 
              alt="BMW M3 hellblau in der Werkstatt" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-10"
            />
          </div>

          {/* Bild 11 - VW T-Cross mit Smart auf Hebebühne */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/lq5anb00_IMG-20260829-WA0002~2.jpg" 
              alt="VW T-Cross mit Smart auf Hebebühne" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-11"
            />
          </div>

          {/* Bild 12 - Mercedes C-Klasse weiß vor Werkstatt */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/fzkokl9m_IMG-20260829-WA0005~2.jpg" 
              alt="Mercedes C-Klasse weiß vor der Werkstatt" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-12"
            />
          </div>

          {/* Bild 13 - Dodge Charger Sheriff (ohne Kennzeichen) */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/9fh17ke8_IMG-20260619-WA0001~2.jpg" 
              alt="Dodge Charger Sheriff Style ohne Kennzeichen" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-13"
            />
          </div>

          {/* Bild 14 - Porsche 911 Turbo S silber von hinten */}
          <div className="break-inside-avoid">
            <img 
              src="https://static.prod-images.emergentagent.com/jobs/a3fad17f-228c-4b72-ab0f-5f0517912e8d/images/3d72247d72557f1a0c0b62b426f4b2faff5a84840acc86282a70e6c35c97c5c2.jpeg" 
              alt="Porsche 911 Turbo S silber von hinten vor der Werkstatt" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-14"
            />
          </div>

          {/* Bild 15 - Porsche 911 Turbo S silber schräg von vorne */}
          <div className="break-inside-avoid">
            <img 
              src="https://static.prod-images.emergentagent.com/jobs/a3fad17f-228c-4b72-ab0f-5f0517912e8d/images/f71b4def32faac0fd6cfcc42ef2c84f9292b1403f6e723dd011f35a711bd3187.jpeg" 
              alt="Porsche 911 Turbo S silber schräg von vorne" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-15"
            />
          </div>

          {/* Bild 16 - Porsche 911 Turbo S silber direkt von vorne */}
          <div className="break-inside-avoid">
            <img 
              src="https://static.prod-images.emergentagent.com/jobs/a3fad17f-228c-4b72-ab0f-5f0517912e8d/images/865eef1539d7e1680cbb87f4cb05f5384ee27111aee2273b155c470b93ff038f.jpeg" 
              alt="Porsche 911 Turbo S silber direkt von vorne" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-16"
            />
          </div>

          {/* Bild 17 - Porsche 911 Turbo S silber mit Fahrer */}
          <div className="break-inside-avoid">
            <img 
              src="https://customer-assets-lqy194kg.emergentagent.net/job_a3fad17f-228c-4b72-ab0f-5f0517912e8d/artifacts/fb1027887c5991b5_WhatsApp%20Image%202026-10-10%20at%2012.02.24..jpeg" 
              alt="Porsche 911 Turbo S silber mit Fahrer vor KFZ-Technik Dreieich" 
              className="w-full h-auto rounded-lg border border-[#27272A] hover:border-[#F97316] transition-all"
              data-testid="gallery-image-17"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
