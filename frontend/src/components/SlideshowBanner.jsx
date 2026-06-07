// Visitenkarte
const cardImage = "https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/bsjjjay6_file_0000000083687243bfab7d225a7395a7.png";

// Werkstatt Bilder
const workshopImages = [
  { src: cardImage, alt: "KFZ-Technik Dreieich Visitenkarte", isCard: true },
  { src: "https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/5nigukgx_IMG-20260607-WA0001.jpg", alt: "LKW Reparatur" },
  { src: "https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/bu6wdcs9_IMG-20260607-WA0002.jpg", alt: "Motor Reparatur" },
  { src: "https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/0nrmxs2h_IMG-20260607-WA0003.jpg", alt: "Werkstatt BMW" },
  { src: "https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/rq54ffon_IMG-20260607-WA0005.jpg", alt: "Auto auf Hebebühne" },
  { src: "https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/iqfxnrqb_IMG-20260607-WA0006.jpg", alt: "VW Service" },
];

export default function SlideshowBanner() {
  // Double the images for seamless infinite scroll
  const allImages = [...workshopImages, ...workshopImages];

  return (
    <div
      className="w-full bg-[#0A0A0A] overflow-hidden border-b border-[#27272A]"
      data-testid="slideshow-banner"
    >
      <div className="slideshow-track flex items-center h-32 md:h-40">
        {allImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-full flex items-center justify-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`h-full object-contain ${image.isCard ? 'px-2' : 'px-1'}`}
              style={{
                maxWidth: image.isCard ? 'auto' : '200px'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
