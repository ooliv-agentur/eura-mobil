
import React from "react";
import { Layout } from "@/components/Layout";

const Kontakt = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[color:var(--placeholder-color)] h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Wir helfen Ihnen weiter – Kontakt</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        
        {/* Introductory Text */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg">
              Um Ihnen schnellstmöglich weiterhelfen zu können, haben wir bereits eine Menge Fragen für Sie beantwortet. Sollten Sie hier nicht die gewünschte Antwort finden, nutzen Sie bitte das Kontaktformular.
            </p>
          </div>
        </section>

        {/* Information Block */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-lg">
                Um Ihre Anfrage zügig bearbeiten zu können, benötigen wir von Ihnen ein paar Informationen, welche Sie bequem über das nachstehende Kontaktformular in die entsprechenden Felder eingeben können. Wenn Sie eine allgemeine Anfrage haben und KEINE Service-Anfrage, dann füllen Sie bitte in das Pflichtfeld „Fahrzeug-Identnummer" mit „Nicht vorhanden" aus. Bitte beachten Sie, dass wir, ohne die Angabe der Fahrgestell-Identnummer (FIN), KEINE spezifischen Aussagen zu Ihrem Fahrzeug machen können. Die FIN finden Sie am schnellsten in Ihrem Fahrzeugschein/Garantieheft oder auf dem Typenschild in Ihrem Fahrzeug.
              </p>
            </div>
          </div>
        </section>

        {/* Ansprechpartner Placeholder */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-xl font-medium">Ansprechpartner Placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Placeholder */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-xl font-medium">Contact Information Placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-xl font-medium">Map Placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Placeholder */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-xl font-medium">Contact Form Placeholder</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Kontakt;
