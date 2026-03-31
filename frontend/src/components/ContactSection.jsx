import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const openingHours = [
{ day: "Montag", hours: "08:00\u201317:00" },
{ day: "Dienstag", hours: "08:00\u201317:00" },
{ day: "Mittwoch", hours: "Geschlossen", closed: true },
{ day: "Donnerstag", hours: "08:00–18:00" },
{ day: "Freitag", hours: "08:00–18:00" },
{ day: "Samstag", hours: "08:00–16:00" },
{ day: "Sonntag", hours: "Geschlossen", closed: true }];


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSubmitted(true);
      toast.success("Anfrage erfolgreich gesendet!", {
        description: "Wir melden uns schnellstmöglich bei Ihnen."
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Fehler beim Senden", {
        description: "Bitte versuchen Sie es erneut oder rufen Sie uns an."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#141414]"
      data-testid="contact-section">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#FACC15] mb-4 block">
            Kontakt
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
            data-testid="contact-title">

            Jetzt Termin sichern
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Jetzt Termin sichern oder Beratung anfragen – schnell und
            unkompliziert.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#18181B] rounded-lg p-8 border border-[#27272A]">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Anfrage senden
            </h3>

            {isSubmitted ?
            <div
              className="flex flex-col items-center justify-center py-12 text-center"
              data-testid="contact-form-success">

                <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Anfrage gesendet!
                </h4>
                <p className="text-[#A1A1AA]">
                  Wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </div> :

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-testid="contact-form">

                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                    Name *
                  </label>
                  <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  required
                  className="contact-input w-full px-4 py-3 rounded-md"
                  data-testid="contact-input-name" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                    Telefonnummer *
                  </label>
                  <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ihre Telefonnummer"
                  required
                  className="contact-input w-full px-4 py-3 rounded-md"
                  data-testid="contact-input-phone" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                    E-Mail *
                  </label>
                  <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ihre E-Mail-Adresse"
                  required
                  className="contact-input w-full px-4 py-3 rounded-md"
                  data-testid="contact-input-email" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                    Nachricht *
                  </label>
                  <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  required
                  rows={4}
                  className="contact-input w-full px-4 py-3 rounded-md resize-none"
                  data-testid="contact-input-message" />

                </div>
                <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 rounded-md font-semibold flex items-center justify-center gap-2"
                data-testid="contact-submit-button">

                  {isSubmitting ?
                <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Wird gesendet...
                    </> :

                <>
                      <Send className="w-5 h-5" />
                      Anfrage senden
                    </>
                }
                </Button>
              </form>
            }
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
                  className="flex items-start gap-4 text-[#A1A1AA] hover:text-[#FACC15] transition-colors group"
                  data-testid="contact-address">

                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 group-hover:text-[#FACC15]" />
                  <span>
                    Daimlerstraße 17
                    <br />
                    63303 Dreieich
                  </span>
                </a>
                <a
                  href="tel:061038030257"
                  className="flex items-center gap-4 text-[#A1A1AA] hover:text-[#FACC15] transition-colors"
                  data-testid="contact-phone">

                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>06103 8030257</span>
                </a>
                <a
                  href="mailto:info@kfztechnik-dreieich.de"
                  className="flex items-center gap-4 text-[#A1A1AA] hover:text-[#FACC15] transition-colors"
                  data-testid="contact-email">

                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@kfztechnik-dreieich.de</span>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-[#18181B] rounded-lg p-6 border border-[#27272A]">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FACC15]" />
                Öffnungszeiten
              </h3>
              <div className="space-y-3" data-testid="opening-hours">
                {openingHours.map((item, index) =>
                <div
                  key={index}
                  className="flex justify-between items-center"
                  data-testid={`opening-hours-${item.day.toLowerCase()}`}>

                    <span className="text-[#A1A1AA]">{item.day}</span>
                    <span
                    className={
                    item.closed ? "text-[#EF4444]" : "text-white font-medium"
                    }>

                      {item.hours}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Google Maps */}
            <div
              className="map-container h-64"
              data-testid="google-maps-container">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.8!2d8.7!3d50.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0f7f0f0f0f0f%3A0x0!2sDaimlerstra%C3%9Fe%2017%2C%2063303%20Dreieich!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort KFZ-Technik-Dreieich" />

            </div>
          </div>
        </div>
      </div>
    </section>);

}