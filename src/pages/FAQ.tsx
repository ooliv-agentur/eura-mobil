
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      id: "item-1",
      question: "Wie lange ist die Garantie auf mein Wohnmobil?",
      answer: "Unsere Wohnmobile haben eine Herstellergarantie von 2 Jahren auf das Fahrzeug und 3 Jahren auf die Aufbauteile. Zusätzlich bieten wir erweiterte Garantieoptionen an."
    },
    {
      id: "item-2", 
      question: "Wo finde ich die nächste Servicewerkstatt?",
      answer: "Nutzen Sie unsere Händlersuche auf der Website, um die nächstgelegene autorisierte Servicewerkstatt zu finden. Dort erhalten Sie professionellen Service und Originalersatzteile."
    },
    {
      id: "item-3",
      question: "Kann ich mein Wohnmobil individuell konfigurieren?",
      answer: "Ja, wir bieten verschiedene Ausstattungsoptionen und Sonderausstattungen an. Nutzen Sie unseren Online-Konfigurator oder sprechen Sie mit einem unserer Händler über Ihre individuellen Wünsche."
    },
    {
      id: "item-4",
      question: "Wie funktioniert die Winterfestigkeit bei Eura Mobil?",
      answer: "Unsere Wohnmobile sind standardmäßig winterfest ausgelegt. Die Sealed Structure Technologie und spezielle Isolierung sorgen dafür, dass Sie auch bei niedrigen Temperaturen komfortabel reisen können."
    },
    {
      id: "item-5",
      question: "Welche Führerscheinklasse benötige ich?",
      answer: "Die meisten unserer Wohnmobile können mit einem normalen Pkw-Führerschein (Klasse B) gefahren werden. Für Fahrzeuge über 3,5t ist ein C1-Führerschein erforderlich. Die genauen Angaben finden Sie in den Fahrzeugspezifikationen."
    },
    {
      id: "item-6",
      question: "Wie kann ich eine Probefahrt vereinbaren?",
      answer: "Kontaktieren Sie einen unserer autorisierten Händler über unsere Händlersuche. Dort können Sie einen Termin für eine Probefahrt vereinbaren und sich das Wohnmobil Ihrer Wahl ausführlich zeigen lassen."
    },
    {
      id: "item-7",
      question: "Was ist in der regelmäßigen Wartung enthalten?",
      answer: "Die regelmäßige Wartung umfasst die Überprüfung aller sicherheitsrelevanten Systeme, Dichtigkeitsprüfung, Gasprüfung und technische Inspektion. Ihr Händler erstellt einen individuellen Wartungsplan für Ihr Fahrzeug."
    },
    {
      id: "item-8",
      question: "Wie funktioniert die Gasanlage im Wohnmobil?",
      answer: "Unsere Wohnmobile sind mit einer sicheren Gasanlage ausgestattet, die für Heizung, Warmwasser und Kochen verwendet wird. Eine regelmäßige Gasprüfung alle 2 Jahre ist gesetzlich vorgeschrieben."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#E5E7EB] h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div className="text-center z-10 px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Häufig gestellte Fragen
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Um Ihnen schnellstmöglich weiterhelfen zu können, haben wir bereits eine Menge Fragen für Sie beantwortet. Sollten Sie hier nicht die gewünschte Antwort finden, nutzen Sie bitte das Kontaktformular.
          </p>
          <Button asChild size="lg" className="px-8">
            <a href="/kontakt">Kontakt aufnehmen</a>
          </Button>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-0">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Additional Contact Section */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Haben Sie weitere Fragen? Unser Team steht Ihnen gerne zur Verfügung.
            </p>
            <Button asChild size="lg" className="px-8">
              <a href="/kontakt">Jetzt Kontakt aufnehmen</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
