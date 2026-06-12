import { Check } from "lucide-react";

const services = [
  {
    category: "Klimaservice",
    items: [
      { name: "Klimaanlagen-Check", price: "ab 29€" },
      { name: "Klimaanlagen-Desinfektion", price: "ab 49€" },
      { name: "Kältemittel nachfüllen", price: "ab 79€" },
      { name: "Klimakompressor-Reparatur", price: "auf Anfrage" },
      { name: "Klimaschlauch-Wechsel", price: "ab 89€" },
    ],
  },
  {
    category: "HU & AU (Prüfer GTÜ)",
    items: [
      { name: "HU Vorbereitung", price: "ab 49€" },
      { name: "AU Abgasuntersuchung", price: "ab 39€" },
      { name: "HU + AU Komplett", price: "ab 119€" },
      { name: "Mängel-Beseitigung", price: "auf Anfrage" },
      { name: "Nachuntersuchung", price: "ab 29€" },
    ],
  },
  {
    category: "KFZ-Gutachten",
    items: [
      { name: "Unfallgutachten", price: "auf Anfrage" },
      { name: "Wertgutachten", price: "ab 149€" },
      { name: "Gebrauchtwagen-Check", price: "ab 79€" },
      { name: "Schadensdokumentation", price: "ab 59€" },
      { name: "Kurzgutachten", price: "ab 99€" },
    ],
  },
  {
    category: "Karosserie & Lackarbeiten",
    items: [
      { name: "Beulen-Entfernung", price: "ab 99€" },
      { name: "Lackschaden-Reparatur", price: "auf Anfrage" },
      { name: "Smart-Repair", price: "ab 149€" },
      { name: "Steinschlag-Reparatur", price: "ab 49€" },
      { name: "Komplettlackierung", price: "auf Anfrage" },
    ],
  },
  {
    category: "Motor & Getriebe",
    items: [
      { name: "Motordiagnose", price: "ab 49€" },
      { name: "Ölwechsel inkl. Filter", price: "ab 69€" },
      { name: "Zahnriemenwechsel", price: "ab 349€" },
      { name: "Getriebe-Reparatur", price: "auf Anfrage" },
      { name: "Turbolader-Service", price: "auf Anfrage" },
    ],
  },
  {
    category: "Bremsen & Fahrwerk",
    items: [
      { name: "Bremsbeläge wechseln", price: "ab 89€" },
      { name: "Bremsscheiben wechseln", price: "ab 149€" },
      { name: "Stoßdämpfer-Wechsel", price: "ab 179€" },
      { name: "Achsvermessung", price: "ab 69€" },
      { name: "Spurstangen-Wechsel", price: "ab 99€" },
    ],
  },
  {
    category: "Elektrik & Elektronik",
    items: [
      { name: "Batterie-Check", price: "ab 19€" },
      { name: "Batterie-Wechsel", price: "ab 29€" },
      { name: "Lichtanlage prüfen", price: "ab 19€" },
      { name: "Starter-Reparatur", price: "ab 149€" },
      { name: "Lichtmaschine-Wechsel", price: "ab 199€" },
    ],
  },
  {
    category: "Reifen & Räder",
    items: [
      { name: "Reifenwechsel (4 Stück)", price: "ab 29€" },
      { name: "Reifenmontage mit Wuchten", price: "ab 49€" },
      { name: "Reifeneinlagerung", price: "ab 39€/Saison" },
      { name: "Reifenreparatur", price: "ab 19€" },
      { name: "RDKS-Service", price: "ab 29€" },
    ],
  },
];

const advantages = [
  "Meisterwerkstatt-Qualität",
  "Faire & transparente Preise",
  "Schnelle Terminvergabe",
  "Originalteile & Qualitätsersatzteile",
  "Persönliche Beratung",
  "Garantie auf alle Arbeiten",
];

export default function ServicesTableSection() {
  return (
    <section
      id="services-table"
      className="py-24 md:py-32 bg-[#0A0A0A]"
      data-testid="services-table-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#F97316] mb-4 block">
            Preisübersicht
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
            data-testid="services-table-title"
          >
            Unsere Dienstleistungen & Preise
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Transparente Preise ohne versteckte Kosten. Alle Preise verstehen sich zzgl. Material.
          </p>
        </div>

        {/* Advantages Banner */}
        <div className="bg-[#18181B] border border-[#27272A] rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Warum KFZ-Technik Dreieich?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm"
                data-testid={`advantage-${index}`}
              >
                <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                <span className="text-[#A1A1AA]">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid - 8 Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden"
              data-testid={`service-category-${catIndex}`}
            >
              {/* Category Header */}
              <div className="bg-[#F97316] px-6 py-4">
                <h3 className="text-xl font-bold text-white" data-testid={`category-title-${catIndex}`}>
                  {category.category}
                </h3>
              </div>

              {/* Items List */}
              <div className="divide-y divide-[#27272A]">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors"
                    data-testid={`service-item-${catIndex}-${itemIndex}`}
                  >
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#22C55E]" />
                      <span className="text-white" data-testid={`service-name-${catIndex}-${itemIndex}`}>{item.name}</span>
                    </div>
                    <span className="text-[#F97316] font-semibold whitespace-nowrap" data-testid={`service-price-${catIndex}-${itemIndex}`}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-[#71717A] text-sm">
            * Alle Preise sind Richtwerte und können je nach Fahrzeugtyp und Aufwand variieren.
            Gerne erstellen wir Ihnen ein individuelles Angebot.
          </p>
        </div>
      </div>
    </section>
  );
}
