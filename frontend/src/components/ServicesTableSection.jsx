import { Check, X } from "lucide-react";

const services = [
{
  category: "Klimaservice",
  items: [
  { name: "Computergestützte Fehlerdiagnose", price: "ab 49€", included: true },
  { name: "Motorinstandsetzung", price: "auf Anfrage", included: true },
  { name: "Getriebe-Reparatur", price: "auf Anfrage", included: true },
  { name: "Bremsen-Service", price: "ab 89€", included: true },
  { name: "Auspuffanlage", price: "ab 79€", included: true }]

},
{
  category: "HU & AU     (Pr\xFCfer GT\xDC)",
  items: [
  { name: "Kleine Inspektion", price: "ab 149€", included: true },
  { name: "Große Inspektion", price: "ab 299€", included: true },
  { name: "Ölwechsel inkl. Filter", price: "ab 69€", included: true },
  { name: "Zahnriemenwechsel", price: "ab 349€", included: true },
  { name: "Klimaanlagen-Service", price: "ab 79€", included: true }]

},
{
  category: "KFZ - Gutachten",
  items: [
  { name: "Batterie-Check & Austausch", price: "ab 29€", included: true },
  { name: "Lichtanlage prüfen", price: "ab 19€", included: true },
  { name: "Starter & Lichtmaschine", price: "auf Anfrage", included: true },
  { name: "Bordcomputer-Diagnose", price: "ab 49€", included: true },
  { name: "Elektrik-Fehlersuche", price: "ab 59€", included: true }]

},
{
  category: "Karosserie & Lackarbeiten",
  items: [
  { name: "HU/AU Vorbereitung", price: "ab 49€", included: true },
  { name: "Reifenwechsel (4 Reifen)", price: "ab 29€", included: true },
  { name: "Achsvermessung", price: "ab 69€", included: true },
  { name: "Stoßdämpfer-Wechsel", price: "ab 149€", included: true },
  { name: "Scheibenwischer-Service", price: "ab 15€", included: true }]

}];


const advantages = [
"Meisterwerkstatt-Qualität",
"Faire & transparente Preise",
"Schnelle Terminvergabe",
"Originalteile & Qualitätsersatzteile",
"Persönliche Beratung",
"Garantie auf alle Arbeiten"];


export default function ServicesTableSection() {
  return (
    <section
      id="services-table"
      className="py-24 md:py-32 bg-[#0A0A0A]"
      data-testid="services-table-section">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#F97316] mb-4 block">
            Preisübersicht
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
            data-testid="services-table-title">

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
            {advantages.map((advantage, index) =>
            <div
              key={index}
              className="flex items-center gap-2 text-sm"
              data-testid={`advantage-${index}`}>

                <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                <span className="text-[#A1A1AA]">{advantage}</span>
              </div>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((category, catIndex) =>
          <div
            key={catIndex}
            className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden"
            data-testid={`service-category-${catIndex}`}>

              {/* Category Header */}
              <div className="bg-[#F97316] px-6 py-4">
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Items List */}
              <div className="divide-y divide-[#27272A]">
                {category.items.map((item, itemIndex) =>
              <div
                key={itemIndex}
                className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">

                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#22C55E]" />
                      <span className="Funktions- und Sichtpr\xFCfung">{item.name}</span>
                    </div>
                    <span className="!opacity-[0%]">
                      {item.price}
                    </span>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="kk">
            utzzhrh
            <br />
            
          </p>
        </div>
      </div>
    </section>);

}