import { Wrench, Phone, Mail, MapPin } from "lucide-react";

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
              className="flex items-center gap-3 mb-6"
              data-testid="footer-logo"
            >
              <div className="w-10 h-10 bg-[#FACC15] rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">KFZ-Technik</span>
                <span className="text-xl font-bold text-[#FACC15]">-Dreieich</span>
              </div>
            </a>
            <p className="text-[#A1A1AA] mb-6 max-w-md leading-relaxed">
              Ihre zuverlässige KFZ-Werkstatt in Dreieich. Schnell, fair und
              professionell – für alle Reparaturen, Diagnosen und Wartungen.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[#FACC15] font-bold text-xl">4.8</span>
              <span className="text-[#A1A1AA]">★★★★★</span>
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
                { name: "Über uns", href: "#about" },
                { name: "Bewertungen", href: "#reviews" },
                { name: "Kontakt", href: "#contact" },
                { name: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-[#A1A1AA] hover:text-[#FACC15] transition-colors"
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
                className="flex items-start gap-3 text-[#A1A1AA] hover:text-[#FACC15] transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Daimlerstraße 17
                  <br />
                  63303 Dreieich
                </span>
              </a>
              <a
                href="tel:061038030257"
                className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#FACC15] transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>06103 8030257</span>
              </a>
              <a
                href="mailto:info@kfztechnik-dreieich.de"
                className="flex items-center gap-3 text-[#A1A1AA] hover:text-[#FACC15] transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@kfztechnik-dreieich.de</span>
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
                className="text-[#71717A] hover:text-[#FACC15] transition-colors"
              >
                Impressum
              </a>
              <a
                href="#"
                className="text-[#71717A] hover:text-[#FACC15] transition-colors"
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
