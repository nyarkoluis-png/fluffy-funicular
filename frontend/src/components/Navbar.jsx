import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// New high-quality logo image
const logoImage = "https://customer-assets.emergentagent.com/job_kfz-reparatur-pro/artifacts/ladyvxa6_file_0000000083687243bfab7d225a7395a7~2.png";

const navLinks = [
  { name: "Start", href: "#hero" },
  { name: "Leistungen", href: "#services" },
  { name: "Preise", href: "#services-table" },
  { name: "Über uns", href: "#about" },
  { name: "Bewertungen", href: "#reviews" },
  { name: "Kontakt", href: "#contact" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#27272A]"
          : "bg-[#0A0A0A] border-b border-[#27272A]"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - rounded corners, full image, adjusted size */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center"
            data-testid="navbar-logo"
          >
            <img
              src={logoImage}
              alt="KFZ-Technik Dreieich Logo"
              className="h-12 w-12 object-cover rounded-xl"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="nav-link text-[#A1A1AA] hover:text-[#F97316] text-sm font-medium uppercase tracking-wider"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:061038030257"
              className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
              data-testid="navbar-phone"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">06103-8030257</span>
            </a>
            <Button
              onClick={(e) => scrollToSection(e, "#contact")}
              className="btn-primary px-6 py-2 rounded-md font-semibold"
              data-testid="navbar-cta"
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-[#0A0A0A] border-t border-[#27272A]"
          data-testid="mobile-menu"
        >
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-6 py-3 text-[#A1A1AA] hover:text-[#F97316] hover:bg-[#141414] transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 py-4 border-t border-[#27272A] mt-2">
              <a
                href="tel:061038030257"
                className="flex items-center gap-2 text-[#F97316] mb-4"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">06103-8030257</span>
              </a>
              <Button
                onClick={(e) => scrollToSection(e, "#contact")}
                className="btn-primary w-full py-3 rounded-md font-semibold"
              >
                Kontakt
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
