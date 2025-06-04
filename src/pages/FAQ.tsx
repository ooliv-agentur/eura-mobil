
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
      question: "Informationen zu Lieferterminen",
      answer: "Jeder Auftrag wird von Eura Mobil an den Vertragshändler mit Angabe des voraussichtlichen Liefertermins bestätigt. Bei Fragen zu Lieferstatus und zum konkreten Auslieferungstermin wenden Sie sich bitte direkt an Ihren Vertragshändler."
    },
    {
      id: "item-2",
      question: "Werksabholung",
      answer: "Eine Werksabholung bieten wir zur Zeit nicht an."
    },
    {
      id: "item-3",
      question: "Werksbesichtigung",
      answer: "Ab 11. April 2023 bieten wir wieder täglich eine Werksführung durch unsere Produktion an. Einfach montags bis freitags um kurz vor 10 Uhr zum Treffpunkt ins Reisemobil Forum kommen (Kreuznacher Str. 78, 55576 Sprendlingen). Nach einer kurzen Sicherheitseinweisung geht's direkt los: Produktion, Schreinerei, Möbelvormontage, Qualitätssicherung usw. Die Werksführung dauert ca. 1 Stunde. Im Anschluss erhalten Sie einen Kaffee in unserem Reisemobil Forum. Weitere Informationen finden Sie auf der Webseite des Reisemobil Forums!"
    },
    {
      id: "item-4",
      question: "Werksverkauf",
      answer: "Es findet kein Verkauf ab Werk statt. Den nächsten Eura Mobil Händler in Ihrer Region finden Sie unter „Händler"."
    },
    {
      id: "item-5",
      question: "Fahrzeugausstellung im Werk",
      answer: "Informationen zu unserem Reisemobil Forum finden Sie auf der Webseite vom Reisemobil Forum: https://www.reisemobilforum.de"
    },
    {
      id: "item-6",
      question: "Vermietung ab Werk",
      answer: "Es findet keine Vermietung ab Werk statt. Wenn Sie ein Eura Mobil mieten möchten, wenden Sie sich bitte an Ihren Eura Mobil Vertragshändler oder die Deutsche Reisemobil Vermietung DRM."
    },
    {
      id: "item-7",
      question: "Sonderausstattungen",
      answer: "Die ab Werk erhältlichen Sonderausstattungen finden Sie in der aktuellen Sonderausstattungsliste unter „Downloads" (Technische Daten). Gewünschte Änderungen am Ausstattungsumfang Ihres Neufahrzeuges klären Sie bitte direkt mit Ihrem Eura Mobil Vertragshändler."
    },
    {
      id: "item-8",
      question: "Länderausstattungen",
      answer: "Bei Bestellungen in anderen Ländern beachten Sie bitte die jeweiligen Länderausstattungen, die sich vom Ausstattungsumfang in Deutschland unterscheiden können."
    },
    {
      id: "item-9",
      question: "COC – Papiere / Homologation / Auflastungen",
      answer: "Bei Änderungen zur technischen Ausführung oder den Zulassungspapieren Ihres Eura Mobil Fahrzeuges wenden Sie sich bitte direkt an Ihren Vertragshändler, der von uns alle erforderlichen Informationen und Unterlagen erhält."
    },
    {
      id: "item-10",
      question: "Ersatzteile",
      answer: "Bei Fragen / Bestellungen zu Ersatzteilen ist Ihr Eura Mobil Service-Partner der kompetente Ansprechpartner. Anhand der Fahrgestellnummer kann er im elektronischen Ersatzteilkatalog Ihre Anfrage schnell und zuverlässig bearbeiten."
    },
    {
      id: "item-11",
      question: "Reparaturanweisungen / Montageanweisungen",
      answer: "Bitte haben Sie Verständnis dafür, dass wir Ihnen keine Reparatur- und Montageanleitungen für Arbeiten an unseren Fahrzeugen zukommen lassen können. Bitte wenden Sie sich dazu an Ihren Eura Mobil Vertragshändler."
    },
    {
      id: "item-12",
      question: "Individuelle Fahrzeuganfertigungen / Fahrzeugumbauten",
      answer: "Eura Mobil fertigt moderne Reisemobile in Serienproduktion. Individuelle Wünsche können im Rahmen unseres umfangreichen Sonderausstattungsprogramms berücksichtigt werden. Darüber hinaus gehende Sonderwünsche besprechen Sie bitte mit Ihrem Eura Mobil Vertragshändler."
    },
    {
      id: "item-13",
      question: "Garantie / Garantiebedingungen",
      answer: "Eura Mobil bietet auf die Reisemobile mit Aufbau (außer Vans) eine Dichtigkeitsgarantie von insgesamt 10 Jahren (bis 150.000 km) und eine Möbelgarantie von drei Jahren ab Modelljahr 2017. Ältere Modelle haben 6 Jahre Dichtigkeitsgarantie und 3 Jahre Möbelgarantie. Vans haben 6 Jahre Dichtigkeitsgarantie (bis 100.000 km). Voraussetzung ist die jährliche Dichtigkeitskontrolle beim autorisierten Eura Mobil Service Partner."
    },
    {
      id: "item-14",
      question: "Gewichtsangaben",
      answer: "Die Angaben zum Leergewicht ab Werk Ihres Eura Mobil Fahrzeuges finden Sie auf der ersten Seite des Serviceheftes. Beachten Sie vor dem Kauf auch das Gewicht der Sonderausstattung, die die Zuladung verringert."
    },
    {
      id: "item-15",
      question: "Informationen zu Gebrauchtfahrzeugen",
      answer: "Zu Eura Mobil Gebrauchtfahrzeugen berät Sie Ihr Vertragshändler gern."
    },
    {
      id: "item-16",
      question: "Händler",
      answer: "Den nächsten Eura Mobil Vertragshändler in Ihrer Region finden Sie unter „Händler"."
    },
    {
      id: "item-17",
      question: "Eura Mobil Club",
      answer: "Für gemeinsame Aktivitäten mit anderen Eura Mobil Besitzern empfehlen wir den werksunabhängigen Eura Mobil Club: www.euramobilclub.de"
    },
    {
      id: "item-18",
      question: "Reisemobilstellplatz",
      answer: "Der Reisemobilstellplatz bei uns am Werk ist geöffnet."
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
