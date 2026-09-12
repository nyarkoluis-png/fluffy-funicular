import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Cookie, Server, Lock, Eye, UserCheck, Mail } from "lucide-react";

export default function DatenschutzPage() {
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-testid="datenschutz-content">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Datenschutzerklärung
        </h1>

        {/* Einleitung */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            1. Datenschutz auf einen Blick
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6 space-y-4">
            <h3 className="text-white font-semibold">Allgemeine Hinweise</h3>
            <p className="text-[#A1A1AA] leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter 
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </div>
        </section>

        {/* Datenerfassung */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <Server className="w-5 h-5" />
            2. Datenerfassung auf dieser Website
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6 space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
                Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in 
                dieser Datenschutzerklärung entnehmen.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Wie erfassen wir Ihre Daten?</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei 
                kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. 
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. 
                Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung 
                dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Wofür nutzen wir Ihre Daten?</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
                zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem 
                ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine 
                Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu 
                verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen 
                Aufsichtsbehörde zu.
              </p>
            </div>
          </div>
        </section>

        {/* Verantwortliche Stelle */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <UserCheck className="w-5 h-5" />
            3. Verantwortliche Stelle
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6 space-y-3">
            <p className="text-white font-semibold">Kfz-Technik Dreieich GmbH</p>
            <p className="text-[#A1A1AA]">Daimlerstraße 17</p>
            <p className="text-[#A1A1AA]">63303 Dreieich</p>
            <p className="text-[#A1A1AA] mt-4">
              Telefon: <a href="tel:061038030257" className="text-[#F97316] hover:underline">06103 8030257</a>
            </p>
            <p className="text-[#A1A1AA]">
              E-Mail: <a href="mailto:info@kfz-technik-dreieich.de" className="text-[#F97316] hover:underline">info@kfz-technik-dreieich.de</a>
            </p>
            <p className="text-[#71717A] text-sm mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
              Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </div>
        </section>

        {/* Speicherdauer */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5" />
            4. Speicherdauer
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA] leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
              Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen 
              oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
              sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
              personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche 
              Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall 
              dieser Gründe.
            </p>
          </div>
        </section>

        {/* Rechtsgrundlagen */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4">
            5. Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA] leading-relaxed">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre 
              personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 
              Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO 
              verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung 
              personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf 
              Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies 
              oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) 
              eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 
              Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur 
              Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, 
              verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </div>
        </section>

        {/* Widerruf */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4">
            6. Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA] leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung 
              möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die 
              Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf 
              unberührt.
            </p>
          </div>
        </section>

        {/* Beschwerderecht */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4">
            7. Beschwerderecht bei der zuständigen Aufsichtsbehörde
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA] leading-relaxed">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht 
              bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen 
              Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das 
              Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder 
              gerichtlicher Rechtsbehelfe.
            </p>
          </div>
        </section>

        {/* Recht auf Datenübertragbarkeit */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4">
            8. Recht auf Datenübertragbarkeit
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA] leading-relaxed">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in 
              Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten 
              in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die 
              direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt 
              dies nur, soweit es technisch machbar ist.
            </p>
          </div>
        </section>

        {/* Auskunft, Berichtigung, Löschung */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5" />
            9. Auskunft, Berichtigung und Löschung
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA] leading-relaxed">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf 
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren 
              Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf 
              Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema 
              personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>
          </div>
        </section>

        {/* SSL/TLS */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5" />
            10. SSL- bzw. TLS-Verschlüsselung
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA] leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
              Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber 
              senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen 
              Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt 
              und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung 
              aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten 
              mitgelesen werden.
            </p>
          </div>
        </section>

        {/* Server-Log-Dateien */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <Server className="w-5 h-5" />
            11. Server-Log-Dateien
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6 space-y-4">
            <p className="text-[#A1A1AA] leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so 
              genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="text-[#A1A1AA] list-disc list-inside space-y-1 ml-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-[#A1A1AA] leading-relaxed">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der 
              Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien 
              Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Dateien 
              erfasst werden.
            </p>
          </div>
        </section>

        {/* Kontaktformular */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            12. Kontaktformular
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#A1A1AA] leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser 
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit 
              der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher 
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf 
              unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten 
              Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 
              lit. a DSGVO) sofern diese abgefragt wurde. Die von Ihnen im Kontaktformular 
              eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre 
              Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung 
              entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende 
              gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center gap-2">
            <Cookie className="w-5 h-5" />
            13. Cookies
          </h2>
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6 space-y-4">
            <p className="text-[#A1A1AA] leading-relaxed">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine 
              Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder 
              vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft 
              (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach 
              Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem 
              Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung 
              durch Ihren Webbrowser erfolgt.
            </p>
            <p className="text-[#A1A1AA] leading-relaxed">
              Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen 
              (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung 
              bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. 
              Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p className="text-[#A1A1AA] leading-relaxed">
              Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO 
              gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung 
              von technisch notwendigen Cookies zur technisch fehlerfreien und optimierten 
              Bereitstellung seiner Dienste.
            </p>
          </div>
        </section>

        {/* Stand */}
        <section className="mb-10">
          <div className="bg-[#141414] rounded-lg border border-[#27272A] p-6">
            <p className="text-[#71717A] text-sm">
              Stand: September 2026
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
              <Link
                to="/impressum"
                className="text-[#71717A] hover:text-[#F97316] transition-colors"
              >
                Impressum
              </Link>
              <span className="text-[#F97316]">Datenschutz</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
