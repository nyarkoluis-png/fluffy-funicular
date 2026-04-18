import { Phone, Mail, MapPin, Smartphone } from "lucide-react";

// Separate logo image
const logoImage = "https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/2bqgiooy_20260417_213332~2.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-[#0A0A0A] border-t border-[#27272A]"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "#hero")}
              className="flex items-center mb-6"
              data-testid="footer-logo"
            >
              <img
                src={logoImage}
                alt="KFZ-Technik Dreieich Logo"
                className="h-16 w-auto object-contain rounded-xl"
              />
            </a>
            <p className="text-[#A1A1AA] mb-4">
              <strong className="text-white">Saša Bajalović</strong>
              <br />
              Geschäftsführer
            </p>
            <p className="text-[#A1A1AA] mb-6 max-w-md leading-relaxed">
              Ihre zuverlässige KFZ-Meisterwerkstatt in Dreieich. Schnell, fair und
              professionell – für alle Reparaturen, Diagnosen und Wartungen.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[#F97316] font-bold text-xl">4.8</span>
              <span className="text-[#F97316]">★★★★★</span>
              <span className="text-[#71717A] text-sm">aus 37 Bewertungen</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <nav className="space-y-3">
              {[
                { name: "Start", href: "#hero" },
                { name: "Leistungen", href: "#services" },
                { name: "Preise", href: "#services-table" },
                { name: "Über uns", href: "#about" },
                { name: "Bewertungen", href: "#reviews" },
                { name: "Kontakt", href: "#contact" },
                { name: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-[#A1A1AA] hover:text-[#F97316] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Kontakt</h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=Daimlerstraße+17,+63303+Dreieich"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Daimlerstr. 17
                  <br />
                  D-63303 Dreieich
                </span>
              </a>
              <a
                href="tel:061038030257"
                className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>06103-8030257</span>
              </a>
              <a
                href="tel:01736653711"
                className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
              >
                <Smartphone className="w-5 h-5 flex-shrink-0" />
                <span>0173-6653711</span>
              </a>
              <a
                href="mailto:info@kfz-technik-dreieich.de"
                className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@kfz-technik-dreieich.de</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#27272A]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#71717A] text-sm">
              © {currentYear} KFZ-Technik-Dreieich GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-[#71717A] hover:text-[#F97316] transition-colors"
              >
                Impressum
              </a>
              <a
                href="#"
                className="text-[#71717A] hover:text-[#F97316] transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
