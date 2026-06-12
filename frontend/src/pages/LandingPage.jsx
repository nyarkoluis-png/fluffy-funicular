import { useState } from "react";
import Navbar from "@/components/Navbar";
import SlideshowBanner from "@/components/SlideshowBanner";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServicesTableSection from "@/components/ServicesTableSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A]" data-testid="landing-page">
      <SlideshowBanner />
      <Navbar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main>
        <HeroSection />
        <ServicesSection />
        <ServicesTableSection />
        <AboutSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
