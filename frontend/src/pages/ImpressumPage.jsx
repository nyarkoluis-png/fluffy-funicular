import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Building2, FileText, Scale } from "lucide-react";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <header className="bg-[#141414] border-b border-[#27272A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
            data-testid="back-to-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-testid="impressum-content">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Impressum
        </h1>

        {/* Angaben gemäß § 5 TMG/DDG */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Angaben gemäß § 5 TMG / § 5 DDG
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6 space-y-4">
            <div>
              <p className="text-white font-semibold text-lg">Kfz-Technik Dreieich GmbH</p>
            </div>
            <div className="flex items-start gap-3 text-[#A1A1AA]">
              <MapPin className="w-5 h-5 mt-0.5 text-[#F97316] flex-shrink-0" />
              <div>
                <p>Daimlerstraße 17</p>
                <p>63303 Dreieich</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vertreten durch */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Vertreten durch
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-white">Geschäftsführer: <span className="font-semibold">Sasa Bajalovic</span></p>
          </div>
        </section>

        {/* Kontakt */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Kontakt
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6 space-y-3">
            <a
              href="tel:061038030257"
              className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#F97316]" />
              <span>Telefon: 06103 8030257</span>
            </a>
            <a
              href="mailto:info@kfz-technik-dreieich.de"
              className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
            >
              <Mail className="w-5 h-5 text-[#F97316]" />
              <span>E-Mail: info@kfz-technik-dreieich.de</span>
            </a>
          </div>
        </section>

        {/* Registereintrag */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5" />
            Registereintrag
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6 space-y-2">
            <p className="text-[#A1A1AA]">
              <span className="text-white">Registergericht:</span> Amtsgericht Offenbach am Main
            </p>
            <p className="text-[#A1A1AA]">
              <span className="text-white">Registernummer:</span> HRB 50632
            </p>
          </div>
        </section>

        {/* Umsatzsteuer-ID */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4">
            Umsatzsteuer-Identifikationsnummer
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA]">
              <span className="text-white">USt-IdNr.:</span> DE316708197
            </p>
            <p className="text-[#71717A] text-sm mt-2">
              gemäß § 27a Umsatzsteuergesetz
            </p>
          </div>
        </section>

        {/* Haftungsausschluss */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4">
            Haftung für Inhalte
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA] leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine 
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten 
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen 
              werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>
        </section>

        {/* Haftung für Links */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4">
            Haftung für Links
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA] leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
              Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten 
              ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei 
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>
        </section>

        {/* Urheberrecht */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4">
            Urheberrecht
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA] leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
              nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf 
              dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie 
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
              Inhalte umgehend entfernen.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#141414] border-t border-[#27272A] py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#71717A] text-sm">
              © {new Date().getFullYear()} KFZ-Technik-Dreieich GmbH
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-[#F97316]">Impressum</span>
              <Link
                to="/datenschutz"
                className="text-[#71717A] hover:text-[#F97316] transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
