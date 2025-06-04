
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Werksfuehrung = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[color:var(--placeholder-color)] h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="bg-gray-400 text-gray-700 px-4 py-2 rounded mb-4 inline-block">
            Hero Placeholder
          </div>
          <h1 className="text-4xl font-bold">Eura Mobil entdecken – Werksführungen</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Introductory Text */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Lernen Sie unsere Produktion kennen!</h2>
            <div className="space-y-4 text-lg">
              <p>
                Wir bieten montags bis donnerstags eine Werksführung durch unsere Produktion an. 
                Bitte dazu über dieses Formular anmelden.
              </p>
              <p>
                Nach einer kurzen Sicherheitseinweisung geht's direkt los: Produktion, Möbelvormontage, 
                Qualitätssicherung usw. Die Werksführung dauert ca. 1 Stunde. Im Anschluss erhalten Sie 
                einen Kaffee in unserem Reisemobil Forum.
              </p>
              <p>
                Wir freuen uns auf Ihren Besuch!
              </p>
              <p>
                <strong>P.S.:</strong> Die Führung ist aufgrund einiger Treppen für Personen mit 
                eingeschränkter Mobilität leider nicht geeignet.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Werkstour Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Interaktive Werkstour</h2>
            
            {/* Interactive Map Placeholder */}
            <div className="placeholder-image h-96 rounded-lg flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="bg-gray-400 text-gray-700 px-4 py-2 rounded mb-2 inline-block">
                  Interactive Map Placeholder
                </div>
                <p className="text-gray-600">(clickable stations planned)</p>
              </div>
            </div>

            {/* Tour Stations List */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Tour Stationen:</h3>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>Reisemobil Forum (Start/Ziel)</li>
                <li>Bandeinlauf</li>
                <li>Bodenmontage</li>
                <li>Alkoven Vorrichtung</li>
                <li>Möbelmontage</li>
                <li>CNC Fräse / Nesting</li>
                <li>Baugruppen-Installation</li>
                <li>Deckenmontage</li>
                <li>Qualitätskontrolle</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Registration Information */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-lg mb-4">
                Wir bieten Ihnen täglich* eine Werksführung durch unsere Produktion an. Treffpunkt ist um 09:45 Uhr im Reisemobil Forum, die Führung startet pünktlich um 10:00 Uhr. Nach einer kurzen Sicherheitseinweisung geht's direkt los: Produktion, Möbelmontage, Qualitätssicherung usw. Die Werksführung dauert ca. 1 Stunde. Zur besseren Planung der Werksführungen, bitten wir Sie, sich vorab anzumelden:
              </p>
              <p className="text-lg font-semibold">
                Wir freuen uns auf Ihren Besuch!
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Anmeldung Werksführung</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="anrede">Anrede</Label>
                      <select id="anrede" className="w-full p-2 border border-gray-300 rounded">
                        <option value="">Bitte wählen</option>
                        <option value="herr">Herr</option>
                        <option value="frau">Frau</option>
                      </select>
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
                      <Label htmlFor="strasse">Straße, Nr.</Label>
                      <Input id="strasse" />
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
                      <Label htmlFor="telefon">Telefon</Label>
                      <Input id="telefon" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="termin">Gewünschter Termin (nur Mo.-Do.!) *</Label>
                      <Input id="termin" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="personen">Personenanzahl *</Label>
                      <Input id="personen" type="number" min="1" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="kommentar">Kommentar</Label>
                    <Textarea id="kommentar" rows={4} />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                        Ja, ich bin damit einverstanden, dass mir die Gesellschaft Eura Mobil / Reisemobil Forum per E-Mail Informationen in regelmäßigen Abständen (einmal monatlich) rund um neue Produkte, Sonderaktionen oder Veranstaltungen zum Zwecke der Werbung übersendet. Diese Einwilligung kann ich jederzeit schriftlich mit Wirkung für die Zukunft widerrufen werden.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="datenspeicherung" />
                      <Label htmlFor="datenspeicherung" className="text-sm leading-relaxed">
                        Ja, ich bin damit einverstanden, dass meine hier eingetragenen personenbezogenen Daten für die schriftliche Kundenbetreuung der Gesellschaft Eura Mobil / Reisemobil Forum und z.B. für Einladungen zu Events, Informationen über neue Produkte, Zusendung von Kundenjournalen sowie die Betreuung durch unsere Handelspartner gespeichert werden.
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gray-400 hover:bg-gray-500 text-gray-700">
                    Anmeldung absenden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety Notes */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Bitte beachten Sie folgende Hinweise:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Aus Sicherheitsgründen ist die Teilnahme erst ab 16 Jahren möglich.</li>
                <li>• Festes Schuhwerk ist obligatorisch. Sicherheits-Überziehschuhe werden gestellt. Gerne können Sie auch Ihre eigenen Sicherheitsschuhe anziehen.</li>
                <li>• Aufgrund einiger Treppen ist die Führung für Personen mit eingeschränkter Mobilität leider nicht geeignet.</li>
                <li>• Keine Haustiere</li>
              </ul>
              <p className="text-sm mt-4">
                <strong>*Bitte beachten Sie, dass die Werksführungen nur an unseren regulären Öffnungszeiten stattfinden (Mo.-Do., außer Feiertage).</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Werksfuehrung;
