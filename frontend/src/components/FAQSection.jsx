import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer:
      "Meist kurzfristig möglich. Rufen Sie uns einfach an oder nutzen Sie unser Kontaktformular, und wir finden schnell einen passenden Termin für Sie.",
  },
  {
    question: "Sind die Preise fair?",
    answer:
      "Ja, wir bieten transparente und faire Preise. Vor jeder Reparatur erhalten Sie einen Kostenvoranschlag, damit Sie genau wissen, was auf Sie zukommt.",
  },
  {
    question: "Muss ich einen Termin machen?",
    answer:
      "Ja, ein Termin wird empfohlen, um Wartezeiten zu vermeiden und sicherzustellen, dass wir genügend Zeit für Ihr Fahrzeug haben. In dringenden Fällen helfen wir aber auch gerne spontan.",
  },
  {
    question: "Welche Fahrzeugmarken reparieren Sie?",
    answer:
      "Wir reparieren alle gängigen Fahrzeugmarken. Egal ob Audi, BMW, Mercedes, VW oder andere – wir sind für Sie da.",
  },
  {
    question: "Bieten Sie auch Abholung und Bringservice an?",
    answer:
      "In bestimmten Fällen können wir einen Hol- und Bringservice anbieten. Sprechen Sie uns einfach darauf an.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-[#0A0A0A]"
      data-testid="faq-section"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#F97316] mb-4 block">
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
            data-testid="faq-title"
          >
            Häufig gestellte Fragen
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4" data-testid="faq-accordion">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="faq-item border-b-0 bg-[#18181B] rounded-lg px-6 border border-[#27272A]"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="faq-trigger py-5 text-left text-lg font-medium text-white hover:text-[#FACC15] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[#A1A1AA] leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
