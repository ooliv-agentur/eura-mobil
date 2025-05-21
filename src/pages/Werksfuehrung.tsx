
import React from "react";
import { Layout } from "@/components/Layout";

const Werksfuehrung = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Werksführung</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Begleiten Sie uns auf einen Rundgang durch unsere moderne Fertigung in Sprendlingen. 
            Erleben Sie, wie aus hochwertigen Komponenten und handwerklicher Präzision eines der besten Wohnmobile Europas entsteht.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Besichtigungstermine</h2>
          <p className="mb-6">
            Werksführungen finden regelmäßig nach vorheriger Terminvereinbarung statt. 
            Bitte kontaktieren Sie uns für weitere Informationen und zur Anmeldung.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Was Sie erwartet</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Einblicke in alle Produktionsschritte</li>
            <li>Erläuterungen zur innovativen Leichtbauweise</li>
            <li>Vorstellung unseres Sealed Structure-Konzepts</li>
            <li>Demonstration der Qualitätskontrolle</li>
            <li>Besichtigung der Möbelschreinerei</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Anfahrt</h2>
          <p className="mb-2">
            EURA MOBIL GmbH<br />
            Kreuznacher Straße 78<br />
            55576 Sprendlingen
          </p>
          
          <div className="mt-8 bg-gray-200 p-6 rounded-md">
            <h3 className="text-xl font-medium mb-2">Anfrage Werksführung</h3>
            <p>
              Für Informationen zu Terminen oder um eine Werksführung zu buchen, kontaktieren Sie uns bitte über unsere 
              <a href="/kontakt" className="text-blue-600 hover:underline ml-1">Kontaktseite</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Werksfuehrung;
