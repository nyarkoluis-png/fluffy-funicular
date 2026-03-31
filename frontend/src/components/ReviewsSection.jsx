import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Michael S.",
    text: "Super freundlich, sehr gute Beratung. Kann die Werkstatt nur weiterempfehlen!",
    rating: 5,
  },
  {
    name: "Sandra K.",
    text: "Sehr gute Werkstatt, professionell, freundlich und hilfsbereit. Faire Preise und schneller Service.",
    rating: 5,
  },
  {
    name: "Thomas M.",
    text: "Findet Fehler schnell, wo andere Werkstätten verzweifeln. Top Werkstatt!",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-24 md:py-32 bg-[#0A0A0A]"
      data-testid="reviews-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#FACC15] mb-4 block">
            Kundenstimmen
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
            data-testid="reviews-title"
          >
            Das sagen unsere Kunden
          </h2>

          {/* Overall Rating */}
          <div
            className="inline-flex items-center gap-4 bg-[#18181B] px-8 py-4 rounded-lg"
            data-testid="reviews-overall-rating"
          >
            <div className="text-4xl font-bold text-[#FACC15]">4.8</div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FACC15] text-[#FACC15]"
                  />
                ))}
              </div>
              <span className="text-[#A1A1AA] text-sm">aus 37 Bewertungen</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card rounded-lg p-6"
              data-testid={`review-card-${index}`}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#FACC15] mb-4" />

              {/* Review Text */}
              <p className="text-lg text-[#A1A1AA] mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-[#27272A]">
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-[#71717A]">Verifizierter Kunde</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FACC15] text-[#FACC15]"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
