import { Wrench, Search, Settings, Cog, Battery, Clock } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Fehlerdiagnose & Reparatur",
    description:
      "Wir finden Probleme, wo andere Werkstätten scheitern. Präzise Diagnose mit modernster Technik.",
  },
  {
    icon: Settings,
    title: "Inspektion & Wartung",
    description:
      "Regelmäßige Wartung für lange Lebensdauer und optimale Leistung Ihres Fahrzeugs.",
  },
  {
    icon: Cog,
    title: "Ersatzteile & Einbau",
    description:
      "Hochwertige Ersatzteile zu fairen Preisen mit fachgerechtem Einbau.",
  },
  {
    icon: Battery,
    title: "Batterie- & Elektrikservice",
    description:
      "Kompletter Service für die Fahrzeugelektrik und Batterie-Management.",
  },
  {
    icon: Clock,
    title: "Schneller Service",
    description:
      "Auch kurzfristig möglich. Wir sind für Sie da, wenn Sie uns brauchen.",
  },
  {
    icon: Wrench,
    title: "Allgemeine Reparaturen",
    description:
      "Von klein bis groß – wir kümmern uns um alle mechanischen Reparaturen.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#0A0A0A]"
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#FACC15] mb-4 block">
            Was wir bieten
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
            data-testid="services-title"
          >
            Unsere Leistungen im Überblick
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Wir finden Probleme, wo andere Werkstätten scheitern, und bieten
            schnelle sowie zuverlässige Lösungen zu fairen Preisen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-[#18181B] rounded-lg p-6"
              data-testid={`service-card-${index}`}
            >
              <div className="service-icon w-14 h-14 bg-[#141414] rounded-lg flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-[#A1A1AA]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
