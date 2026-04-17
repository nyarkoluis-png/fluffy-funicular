import { CheckCircle, Shield, ThumbsUp, Users } from "lucide-react";

const founderImage = "https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/87foup5b_image.png";

const features = [
  {
    icon: Shield,
    title: "Ehrliche Arbeit",
    description: "Transparente Kommunikation und keine versteckten Kosten.",
  },
  {
    icon: ThumbsUp,
    title: "Faire Preise",
    description: "Qualität zum fairen Preis – garantiert.",
  },
  {
    icon: Users,
    title: "Freundlicher Service",
    description: "Persönliche Beratung und Kundenorientierung.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#141414]"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Founder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden border-4 border-[#F97316]">
              <img
                src={founderImage}
                alt="Geschäftsführer KFZ-Technik-Dreieich"
                className="w-full h-full object-cover"
                data-testid="about-image"
              />
            </div>
            {/* Name Badge */}
            <div className="absolute -bottom-4 left-1/2 lg:left-8 transform -translate-x-1/2 lg:translate-x-0 bg-[#18181B] border border-[#27272A] px-6 py-3 rounded-lg">
              <p className="text-white font-semibold text-lg">Saša Bajalović</p>
              <p className="text-[#F97316] text-sm">Gründer & Geschäftsführer</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm uppercase tracking-widest font-semibold text-[#F97316] mb-4 block">
              Über uns
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
              data-testid="about-title"
            >
              Ihre Werkstatt des Vertrauens
            </h2>
            <p className="text-lg text-[#A1A1AA] mb-8 leading-relaxed">
              KFZ-Technik-Dreieich steht für ehrliche Arbeit, faire Preise und
              schnellen Service. Unsere Kunden schätzen besonders unsere
              Freundlichkeit, Kompetenz und Zuverlässigkeit. Viele kommen immer
              wieder und empfehlen uns weiter.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  data-testid={`about-feature-${index}`}
                >
                  <div className="w-12 h-12 bg-[#F97316] rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-[#A1A1AA]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-[#27272A]">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#22C55E]" />
                <span className="text-[#A1A1AA]">
                  Über <span className="text-white font-semibold">1000+</span>{" "}
                  zufriedene Kunden
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
