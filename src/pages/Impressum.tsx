
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Impressum = () => {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-12 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-2">EURA MOBIL GmbH</p>
            <p className="mb-2">Kreuznacher Straße 78</p>
            <p className="mb-2">55576 Sprendlingen</p>
            <p className="mb-2">Deutschland</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone className="mr-2" size={18} />
                <span>Telefon: +49 (0) 6701 / 203 0</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" size={18} />
                <span>E-Mail: info@euramobil.de</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Vertretungsberechtigter Geschäftsführer</h2>
            <p>Wolfgang Speck</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Registereintrag</h2>
            <p className="mb-2">Eintragung im Handelsregister.</p>
            <p className="mb-2">Registergericht: Amtsgericht Mainz</p>
            <p className="mb-2">Registernummer: HRB 21973</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>DE 812525272</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Streitschlichtung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <a href="/">Zurück zur Startseite</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Impressum;
