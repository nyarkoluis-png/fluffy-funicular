import { Phone, Calendar, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImage = "https://static.prod-images.emergentagent.com/jobs/f2aeb6e0-a067-49b3-b0ba-0ca922a99fe8/images/9d1d39540dca28b749f99d41d94a0e9313a2f0edaa305a9a6d5272782b05bc4f.png";

export default function HeroSection() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
      data-testid="hero-section"
    >
      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div
            className="inline-flex items-center gap-2 bg-[#141414]/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up"
            data-testid="hero-rating-badge"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 5 ? "fill-[#F97316] text-[#F97316]" : "text-[#27272A]"}`}
                />
              ))}
            </div>
            <span className="text-[#F97316] font-semibold">4.8</span>
            <span className="text-[#A1A1AA] text-sm">aus 37 Bewertungen</span>
          </div>

          {/* Meisterwerkstatt Badge */}
          <div className="inline-block bg-[#F97316] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-fade-in-up">
            Meisterwerkstatt
          </div>

          {/* Main Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white mb-4 animate-fade-in-up animation-delay-100"
            data-testid="hero-headline"
          >
            Ihre zuverlässige{" "}
            <span className="text-[#F97316]">KFZ-Werkstatt</span> in Dreieich
          </h1>

          {/* Subheadline */}
          <p
            className="text-2xl sm:text-3xl font-semibold text-[#F97316] mb-6 animate-fade-in-up animation-delay-200"
            data-testid="hero-subheadline"
          >
            Schnell. Fair. Professionell.
          </p>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-[#A1A1AA] mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-300"
            data-testid="hero-description"
          >
            Ob Reparatur, Diagnose oder Wartung – wir bringen Ihr Fahrzeug wieder
            sicher auf die Straße. Mit über 4,8 Sternen aus 37 Bewertungen zählen
            wir zu den bestbewerteten Werkstätten in der Region.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Button
              onClick={scrollToContact}
              className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-md"
              data-testid="hero-cta-appointment"
            >
              <Calendar className="w-5 h-5" />
              Jetzt Termin vereinbaren
            </Button>
            <a
              href="tel:061038030257"
              className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-md"
              data-testid="hero-cta-phone"
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen: 06103-8030257
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-[#A1A1AA] hover:text-[#F97316] transition-colors"
          data-testid="hero-scroll-indicator"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
