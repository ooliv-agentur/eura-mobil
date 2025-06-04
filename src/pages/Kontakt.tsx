import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

        {/* Contact Form */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Kontaktformular</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="thema">Thema *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Bitte wählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="allgemeine-anfrage">Allgemeine Anfrage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fahrzeug-id">Fahrzeug-Identnummer *</Label>
                      <Input id="fahrzeug-id" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vertragshaendler">Vertragshändler</Label>
                      <Input id="vertragshaendler" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="anrede">Anrede *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Bitte wählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="herr">Herr</SelectItem>
                          <SelectItem value="frau">Frau</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vorname">Vorname *</Label>
                      <Input id="vorname" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nachname">Nachname *</Label>
                      <Input id="nachname" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="strasse">Straße</Label>
                      <Input id="strasse" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nr">Nr.</Label>
                      <Input id="nr" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plz">PLZ</Label>
                      <Input id="plz" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ort">Ort</Label>
                      <Input id="ort" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="land">Land</Label>
                      <Input id="land" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail Adresse *</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nachricht">Nachricht *</Label>
                    <Textarea id="nachricht" rows={6} required />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="event-info" />
                      <Label htmlFor="event-info" className="text-sm leading-relaxed">
                        Ja, ich bin damit einverstanden, dass meine hier eingetragenen Daten von der Eura Mobil GmbH für die Einladung zu Events, Informationen über neue Produkte und die Zusendung von Kundenjournalen genutzt werden.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                        Ja, ich bin damit einverstanden, dass mir die Gesellschaft Eura Mobil per E-Mail Informationen in regelmäßigen Abständen (einmal monatlich) rund um neue Produkte, Sonderaktionen oder Veranstaltungen zum Zwecke der Werbung übersendet. Diese Einwilligung kann ich jederzeit schriftlich mit Wirkung für die Zukunft widerrufen werden.
                      </Label>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 mb-4">
                    Die Informationen über die Verarbeitung Ihrer personenbezogenen Daten bei der Eura Mobil GmbH entnehmen Sie unserer Datenschutzerklärung.
                  </div>

                  <Button type="submit" className="w-full bg-gray-400 hover:bg-gray-500 text-gray-700">
                    ABSENDEN
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Ansprechpartner</h2>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="space-y-6">
                {/* Company Name */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-lg">Eura Mobil GmbH</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="text-lg">Kreuznacher Straße 78</p>
                    <p className="text-lg">55576 Sprendlingen / Rhh.</p>
                    <p className="text-lg">Germany</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-lg">
                      <span className="font-medium">Telefon:</span> +49 6701 20 30
                    </p>
                  </div>
                </div>

                {/* Fax */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-lg">
                      <span className="font-medium">Fax:</span> +49 6701 20 32 10
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-lg">
                      <span className="font-medium">E-Mail:</span>{" "}
                      <a 
                        href="mailto:info@euramobil.de"
                        className="text-blue-600 hover:underline"
                      >
                        info@euramobil.de
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder Section */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-xl font-medium">Map Placeholder</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Kontakt;
