const cardImage = "https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/bsjjjay6_file_0000000083687243bfab7d225a7395a7.png";

// Placeholder for more images - add more URLs here later
const slideshowImages = [
  { src: cardImage, alt: "KFZ-Technik Dreieich" },
  { src: cardImage, alt: "KFZ-Technik Dreieich" },
  { src: cardImage, alt: "KFZ-Technik Dreieich" },
  { src: cardImage, alt: "KFZ-Technik Dreieich" },
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
            className="flex-shrink-0 h-24 md:h-28 flex items-center justify-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
