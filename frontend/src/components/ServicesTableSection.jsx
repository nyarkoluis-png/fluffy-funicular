import { Check } from "lucide-react";

const advantages = [
  "Meisterwerkstatt-Qualität",
  "Faire & transparente Preise",
  "Schnelle Terminvergabe",
  "Originalteile & Qualitätsersatzteile",
  "Persönliche Beratung",
  "Garantie auf alle Arbeiten",
];

function ServiceItem({ name, price }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
      <div className="flex items-center gap-3">
        <Check className="w-5 h-5 text-[#22C55E]" />
        <span className="text-white">{name}</span>
      </div>
      <span className="text-[#F97316] font-semibold whitespace-nowrap">{price}</span>
    </div>
  );
}

function ServiceCategory({ title, children }) {
  return (
    <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
      <div className="bg-[#F97316] px-6 py-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="divide-y divide-[#27272A]">
        {children}
      </div>
    </div>
  );
}

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
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
              <div key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                <span className="text-[#A1A1AA]">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid - 8 Categories with editable content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Kategorie 1: Klimaservice */}
          <ServiceCategory title="Klimaservice">
            <ServiceItem name="Klimaanlagen-Check" price="ab 29€" />
            <ServiceItem name="Klimaanlagen-Desinfektion" price="ab 49€" />
            <ServiceItem name="Kältemittel nachfüllen" price="ab 79€" />
            <ServiceItem name="Klimakompressor-Reparatur" price="auf Anfrage" />
            <ServiceItem name="Klimaschlauch-Wechsel" price="ab 89€" />
          </ServiceCategory>

          {/* Kategorie 2: HU & AU */}
          <ServiceCategory title="HU & AU (Prüfer GTÜ)">
            <ServiceItem name="HU Vorbereitung" price="ab 49€" />
            <ServiceItem name="AU Abgasuntersuchung" price="ab 39€" />
            <ServiceItem name="HU + AU Komplett" price="ab 119€" />
            <ServiceItem name="Mängel-Beseitigung" price="auf Anfrage" />
            <ServiceItem name="Nachuntersuchung" price="ab 29€" />
          </ServiceCategory>

          {/* Kategorie 3: KFZ-Gutachten */}
          <ServiceCategory title="KFZ-Gutachten">
            <ServiceItem name="Unfallgutachten" price="auf Anfrage" />
            <ServiceItem name="Wertgutachten" price="ab 149€" />
            <ServiceItem name="Gebrauchtwagen-Check" price="ab 79€" />
            <ServiceItem name="Schadensdokumentation" price="ab 59€" />
            <ServiceItem name="Kurzgutachten" price="ab 99€" />
          </ServiceCategory>

          {/* Kategorie 4: Karosserie & Lackarbeiten */}
          <ServiceCategory title="Karosserie & Lackarbeiten">
            <ServiceItem name="Beulen-Entfernung" price="ab 99€" />
            <ServiceItem name="Lackschaden-Reparatur" price="auf Anfrage" />
            <ServiceItem name="Smart-Repair" price="ab 149€" />
            <ServiceItem name="Steinschlag-Reparatur" price="ab 49€" />
            <ServiceItem name="Komplettlackierung" price="auf Anfrage" />
          </ServiceCategory>

          {/* Kategorie 5: Motor & Getriebe */}
          <ServiceCategory title="Motor & Getriebe">
            <ServiceItem name="Motordiagnose" price="ab 49€" />
            <ServiceItem name="Ölwechsel inkl. Filter" price="ab 69€" />
            <ServiceItem name="Zahnriemenwechsel" price="ab 349€" />
            <ServiceItem name="Getriebe-Reparatur" price="auf Anfrage" />
            <ServiceItem name="Turbolader-Service" price="auf Anfrage" />
          </ServiceCategory>

          {/* Kategorie 6: Bremsen & Fahrwerk */}
          <ServiceCategory title="Bremsen & Fahrwerk">
            <ServiceItem name="Bremsbeläge wechseln" price="ab 89€" />
            <ServiceItem name="Bremsscheiben wechseln" price="ab 149€" />
            <ServiceItem name="Stoßdämpfer-Wechsel" price="ab 179€" />
            <ServiceItem name="Achsvermessung" price="ab 69€" />
            <ServiceItem name="Spurstangen-Wechsel" price="ab 99€" />
          </ServiceCategory>

          {/* Kategorie 7: Elektrik & Elektronik */}
          <ServiceCategory title="Elektrik & Elektronik">
            <ServiceItem name="Batterie-Check" price="ab 19€" />
            <ServiceItem name="Batterie-Wechsel" price="ab 29€" />
            <ServiceItem name="Lichtanlage prüfen" price="ab 19€" />
            <ServiceItem name="Starter-Reparatur" price="ab 149€" />
            <ServiceItem name="Lichtmaschine-Wechsel" price="ab 199€" />
          </ServiceCategory>

          {/* Kategorie 8: Reifen & Räder */}
          <ServiceCategory title="Reifen & Räder">
            <ServiceItem name="Reifenwechsel (4 Stück)" price="ab 29€" />
            <ServiceItem name="Reifenmontage mit Wuchten" price="ab 49€" />
            <ServiceItem name="Reifeneinlagerung" price="ab 39€/Saison" />
            <ServiceItem name="Reifenreparatur" price="ab 19€" />
            <ServiceItem name="RDKS-Service" price="ab 29€" />
          </ServiceCategory>

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
