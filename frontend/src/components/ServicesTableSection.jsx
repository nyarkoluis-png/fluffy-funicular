import { Check } from "lucide-react";

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
            {advantages.map((advantage, index) =>
            <div key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                <span className="text-[#A1A1AA]">{advantage}</span>
              </div>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Kategorie 1 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Klimaservice</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Klimaanlagen-Check</span>
                </div>
                <span className="font-semibold !opacity-[0%] text-[#F97316]">ab 29€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Absaugen und Recycling</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Funktions- und Sichtprüfung</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Neubefüllung</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">und vieles mehr</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
            </div>
          </div>

          {/* Kategorie 2 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">HU & AU (Prüfer GTÜ)</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Lenkung und Achsen</span>
                </div>
                <span className="font-semibold !opacity-[0%] text-[#F97316]">ab 49€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Auslesen des Fehlerspeichers</span>
                </div>
                <span className="font-semibold !opacity-[0%] text-[#F97316]">ab 39€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Prüfung der Abgaswerte</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 119€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Bremsanlage</span>
                </div>
                <span className="text-[#F97316] font-semibold">auf Anfrage</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">und vieles mehr</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 29€</span>
              </div>
            </div>
          </div>

          {/* Kategorie 3 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">KFZ-Gutachten</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Unfallgutachten</span>
                </div>
                <span className="text-[#F97316] font-semibold">auf Anfrage</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Wertgutachten</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 149€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Gebrauchtwagen-Check</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 79€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Schadensdokumentation</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 59€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Kurzgutachten</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 99€</span>
              </div>
            </div>
          </div>

          {/* Kategorie 4 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Karosserie & Lackarbeiten</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Beulen-Entfernung</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 99€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Lackschaden-Reparatur</span>
                </div>
                <span className="text-[#F97316] font-semibold">auf Anfrage</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Smart-Repair</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 149€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Steinschlag-Reparatur</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 49€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Komplettlackierung</span>
                </div>
                <span className="text-[#F97316] font-semibold">auf Anfrage</span>
              </div>
            </div>
          </div>

          {/* Kategorie 5 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Motor & Getriebe</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Motordiagnose</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 49€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Ölwechsel inkl. Filter</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 69€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Zahnriemenwechsel</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 349€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Getriebe-Reparatur</span>
                </div>
                <span className="text-[#F97316] font-semibold">auf Anfrage</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Turbolader-Service</span>
                </div>
                <span className="text-[#F97316] font-semibold">auf Anfrage</span>
              </div>
            </div>
          </div>

          {/* Kategorie 6 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Bremsen & Fahrwerk</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Bremsbeläge wechseln</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 89€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Bremsscheiben wechseln</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 149€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Stoßdämpfer-Wechsel</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 179€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Achsvermessung</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 69€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Spurstangen-Wechsel</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 99€</span>
              </div>
            </div>
          </div>

          {/* Kategorie 7 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Elektrik & Elektronik</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Batterie-Check</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 19€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Batterie-Wechsel</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 29€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Lichtanlage prüfen</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 19€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Starter-Reparatur</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 149€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Lichtmaschine-Wechsel</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 199€</span>
              </div>
            </div>
          </div>

          {/* Kategorie 8 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Reifen & Räder</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Reifenwechsel (4 Stück)</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 29€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Reifenmontage mit Wuchten</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 49€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Reifeneinlagerung</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 39€/Saison</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Reifenreparatur</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 19€</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">RDKS-Service</span>
                </div>
                <span className="text-[#F97316] font-semibold">ab 29€</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-[#71717A] text-sm">
            * Alle Preise sind Richtwerte und können je nach Fahrzeugtyp und Aufwand variieren.
            Gerne erstellen wir Ihnen ein individuelles Angebot.
          </p>
        </div>
      </div>
    </section>);

}