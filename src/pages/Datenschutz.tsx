
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Datenschutz = () => {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-12 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Shield className="mr-4 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Verantwortliche Stelle</h3>
                    <p>
                      EURA MOBIL GmbH<br />
                      Kreuznacher Straße 78<br />
                      55576 Sprendlingen<br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-medium mb-3">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-medium mb-3">Datenerfassung auf dieser Website</h3>
            <h4 className="text-lg font-medium mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-medium mb-3">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie 
              dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-medium mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              EURA MOBIL GmbH<br />
              Kreuznacher Straße 78<br />
              55576 Sprendlingen<br /><br />
              Telefon: +49 (0) 6701 / 203 0<br />
              E-Mail: info@euramobil.de
            </p>

            <p className="mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-medium mb-3">Cookies</h3>
            <p className="mb-4">
              Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen 
              Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver 
              und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr 
              Browser speichert.
            </p>

            <h3 className="text-xl font-medium mb-3">Server-Log-Dateien</h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>

            <h3 className="text-xl font-medium mb-3">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Externe Dienste und Inhalte</h2>
            
            <h3 className="text-xl font-medium mb-3">Google Maps</h3>
            <p className="mb-4">
              Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), 
              Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, 
              Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in 
              den USA übertragen und dort gespeichert.
            </p>

            <h3 className="text-xl font-medium mb-3">Chatbot</h3>
            <p className="mb-4">
              Unsere Website nutzt einen Chatbot zur Beantwortung häufiger Fragen. Beim Nutzen des Chatbots 
              werden Ihre Eingaben und Interaktionen verarbeitet, um Ihre Fragen zu beantworten. Die Daten werden 
              anonymisiert gespeichert, um den Service zu verbessern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Ihre Rechte</h2>
            
            <p className="mb-4">Sie haben als betroffene Person folgende Rechte:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung oder Löschung (Art. 16, 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p className="mb-4">
              Darüber hinaus haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung 
              Ihrer personenbezogenen Daten durch uns zu beschweren.
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

export default Datenschutz;
