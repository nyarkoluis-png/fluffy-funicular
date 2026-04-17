import { MapPin, Phone, Mail, Clock, Smartphone, Printer, Globe, AlertCircle } from "lucide-react";

const openingHours = [
  { day: "Montag", hours: "08:00–17:00" },
  { day: "Dienstag", hours: "08:00–17:00" },
  { day: "Mittwoch", hours: "Geschlossen", closed: true },
  { day: "Donnerstag", hours: "08:00–17:00" },
  { day: "Freitag", hours: "08:00–17:00" },
  { day: "Samstag", hours: "08:00–16:00" },
  { day: "Sonntag", hours: "Geschlossen", closed: true },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#141414]"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#F97316] mb-4 block">
            Kontakt
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
            data-testid="contact-title"
          >
            So erreichen Sie uns
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Rufen Sie uns an oder besuchen Sie uns direkt in unserer Werkstatt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Disabled */}
          <div className="bg-[#18181B] rounded-lg p-8 border border-[#27272A]">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Anfrage senden
            </h3>

            <div
              className="flex flex-col items-center justify-center py-12 text-center"
              data-testid="contact-form-disabled"
            >
              <div className="w-16 h-16 bg-[#27272A] rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-[#F97316]" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Anfrageformular zurzeit nicht verfügbar
              </h4>
              <p className="text-[#A1A1AA] mb-6">
                Bitte kontaktieren Sie uns telefonisch oder per E-Mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:061038030257"
                  className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  Jetzt anrufen
                </a>
                <a
                  href="mailto:info@kfz-technik-dreieich.de"
                  className="btn-secondary flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  E-Mail senden
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-[#18181B] rounded-lg p-6 border border-[#27272A]">
              <h3 className="text-xl font-semibold text-white mb-6">
                Kontaktdaten
              </h3>
              <div className="space-y-4">
                <a
                  href="https://maps.google.com/?q=Daimlerstraße+17,+63303+Dreieich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-[#A1A1AA] hover:text-[#F97316] transition-colors group"
                  data-testid="contact-address"
                >
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 group-hover:text-[#F97316]" />
                  <span>
                    Daimlerstr. 17
                    <br />
                    D-63303 Dreieich
                  </span>
                </a>
                <a
                  href="tel:061038030257"
                  className="flex items-center gap-4 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
                  data-testid="contact-phone"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>06103-8030257</span>
                </a>
                <a
                  href="tel:01736653711"
                  className="flex items-center gap-4 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
                  data-testid="contact-mobile"
                >
                  <Smartphone className="w-5 h-5 flex-shrink-0" />
                  <span>0173-6653711</span>
                </a>
                <div
                  className="flex items-center gap-4 text-[#A1A1AA]"
                  data-testid="contact-fax"
                >
                  <Printer className="w-5 h-5 flex-shrink-0" />
                  <span>06103-8030263</span>
                </div>
                <a
                  href="mailto:info@kfz-technik-dreieich.de"
                  className="flex items-center gap-4 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
                  data-testid="contact-email"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@kfz-technik-dreieich.de</span>
                </a>
                <a
                  href="https://www.kfz-technik-dreieich.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
                  data-testid="contact-website"
                >
                  <Globe className="w-5 h-5 flex-shrink-0" />
                  <span>www.kfz-technik-dreieich.de</span>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-[#18181B] rounded-lg p-6 border border-[#27272A]">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F97316]" />
                Öffnungszeiten
              </h3>
              <div className="space-y-3" data-testid="opening-hours">
                {openingHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                    data-testid={`opening-hours-${item.day.toLowerCase()}`}
                  >
                    <span className="text-[#A1A1AA]">{item.day}</span>
                    <span
                      className={
                        item.closed ? "text-[#EF4444]" : "text-white font-medium"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            <div
              className="map-container h-64"
              data-testid="google-maps-container"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.8!2d8.7!3d50.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0f7f0f0f0f0f%3A0x0!2sDaimlerstra%C3%9Fe%2017%2C%2063303%20Dreieich!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort KFZ-Technik-Dreieich"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
