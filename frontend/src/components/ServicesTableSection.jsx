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
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Bremsanlage</span>
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

          {/* Kategorie 3 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">KFZ-Gutachten</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Demontage von Bauteilen</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Erkennung verdeckter Schäden</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Untersuchung auf der Hebebühne</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Fahrzeug-Identifikation</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Kurzgutachten</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
            </div>
          </div>

          {/* Kategorie 4 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Karosserie & Lackarbeiten    (über Fremdfirma)</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Austausch von Karosserieteilen</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Richtbankarbeiten</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Ausbeulen ohne Lackieren (Dellendrücken)</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Unfallinstandsetzung</span>
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

          {/* Kategorie 5 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Frontscheibenaustausch und andere Teilkaskoschäden</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Feinstaubplaketten-Ersatz</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Kamerajustierung (ADAS)</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Fachgerechter Ausbau</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Prüfung auf Reparaturfähigkeit</span>
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

          {/* Kategorie 6 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Reparaturen aller Art</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Fahrzeugelektrik & Elektronik</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Auspuff- und Abgassysteme</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Fahrwerk- und Bremsen-Service</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Motor- und Getriebeinstandsetzung</span>
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

          {/* Kategorie 7 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Inspektionen</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Zünd- und Glühkerzen-Service</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Filterwechsel</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Eintrag ins digitale Serviceheft</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Licht- und Elektronik-Test</span>
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

          {/* Kategorie 8 */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg overflow-hidden">
            <div className="bg-[#F97316] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Rädermontage</h3>
            </div>
            <div className="divide-y divide-[#27272A]">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">RDKS-Service (Reifendruckkontrollsystem)</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Präzises Auswuchten</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Saisonaler Radwechsel (O bis O)</span>
                </div>
                <span className="text-[#F97316] font-semibold"></span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 hover:bg-[#1C1C1E] transition-colors">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-white">Reifenmontage</span>
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

        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-[#71717A] text-sm">


          </p>
        </div>
      </div>
    </section>);

}