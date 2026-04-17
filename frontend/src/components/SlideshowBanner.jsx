const logoImage = "https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/dc8xtdng_20260417_154112.jpg";

// Placeholder for more images - add more URLs here later
const slideshowImages = [
  { src: logoImage, alt: "KFZ-Technik Dreieich Logo" },
  { src: logoImage, alt: "KFZ-Technik Dreieich Logo" },
  { src: logoImage, alt: "KFZ-Technik Dreieich Logo" },
  { src: logoImage, alt: "KFZ-Technik Dreieich Logo" },
];

export default function SlideshowBanner() {
  // Double the images for seamless infinite scroll
  const allImages = [...slideshowImages, ...slideshowImages];

  return (
    <div
      className="w-full bg-[#1a1d24] overflow-hidden border-b border-[#27272A]"
      data-testid="slideshow-banner"
    >
      <div className="slideshow-track flex">
        {allImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-20 md:h-24 px-4 flex items-center justify-center overflow-hidden"
          >
            <div className="h-full w-40 md:w-48 overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover object-right"
                style={{ objectPosition: "70% center" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
