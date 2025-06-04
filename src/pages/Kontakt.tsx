
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
          <div className="mb-4 p-4 bg-gray-400 text-white rounded">
            Hero Placeholder
          </div>
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

        {/* Ansprechpartner Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ansprechpartner</h2>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Profile Picture Placeholder */}
              <div className="w-full md:w-48 h-48 bg-[color:var(--placeholder-color)] rounded-lg flex items-center justify-center">
                <p className="text-gray-600 font-medium">Profile Picture Placeholder</p>
              </div>
              
              {/* Contact Details */}
              <div className="flex-1 space-y-4">
                <div className="h-8 bg-[color:var(--placeholder-color)] rounded flex items-center px-4">
                  <span className="text-gray-600">Name Placeholder</span>
                </div>
                <div className="h-8 bg-[color:var(--placeholder-color)] rounded flex items-center px-4">
                  <span className="text-gray-600">Position Placeholder</span>
                </div>
                <div className="h-8 bg-[color:var(--placeholder-color)] rounded flex items-center px-4">
                  <span className="text-gray-600">Phone Placeholder</span>
                </div>
                <div className="h-8 bg-[color:var(--placeholder-color)] rounded flex items-center px-4">
                  <span className="text-gray-600">Email Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Contact Information */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Kontaktinformationen</h2>
            <div className="bg-[color:var(--placeholder-color)] p-8 rounded-lg">
              <div className="mb-4 p-2 bg-gray-400 text-white rounded text-center">
                Company Contact Information Placeholder
              </div>
              <div className="space-y-2 text-lg">
                <p className="font-bold">Eura Mobil GmbH</p>
                <p>Kreuznacher Straße 78, 55576 Sprendlingen, Germany</p>
                <p>Telefon: +49 6701 20 30</p>
                <p>Fax: +49 6701 20 32 10</p>
                <p>E-Mail: info@euramobil.de</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="h-64 bg-[color:var(--placeholder-color)] rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-xl font-medium">Map Placeholder</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Kontaktformular</h2>
            <form className="space-y-6">
              
              {/* Thema */}
              <div>
                <label className="block text-sm font-medium mb-2">Thema*</label>
                <Select>
                  <SelectTrigger className="w-full h-12 bg-[color:var(--placeholder-color)]">
                    <SelectValue placeholder="Allgemeine Anfrage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="allgemein">Allgemeine Anfrage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Fahrzeug-Identnummer */}
              <div>
                <label className="block text-sm font-medium mb-2">Fahrzeug-Identnummer*</label>
                <Input className="h-12 bg-[color:var(--placeholder-color)]" placeholder="Fahrzeug-Identnummer" />
              </div>

              {/* Vertragshändler */}
              <div>
                <label className="block text-sm font-medium mb-2">Vertragshändler</label>
                <Input className="h-12 bg-[color:var(--placeholder-color)]" placeholder="Vertragshändler" />
              </div>

              {/* Anrede */}
              <div>
                <label className="block text-sm font-medium mb-2">Anrede*</label>
                <Select>
                  <SelectTrigger className="w-full h-12 bg-[color:var(--placeholder-color)]">
                    <SelectValue placeholder="Anrede wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="herr">Herr</SelectItem>
                    <SelectItem value="frau">Frau</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Vorname*</label>
                  <Input className="h-12 bg-[color:var(--placeholder-color)]" placeholder="Vorname" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nachname*</label>
                  <Input className="h-12 bg-[color:var(--placeholder-color)]" placeholder="Nachname" />
                </div>
              </div>

              {/* Address Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Straße</label>
                  <Input className="h-12 bg-[color:var(--placeholder-color)]" placeholder="Straße" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nr.</label>
                  <Input className="h-12 bg-[color:var(--placeholder-color)]" placeholder="Nr." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">PLZ</label>
                  <Input className="h-12 bg-[color:var(--placeholder-color)]" placeholder="PLZ" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Ort</label>
                  <Input className="h-12 bg-[color:var(--placeholder-color)]" placeholder="Ort" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Land</label>
                  <Input className="h-12 bg-[color:var(--placeholder-color)]" placeholder="Land" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">E-Mail Adresse*</label>
                <Input className="h-12 bg-[color:var(--placeholder-color)]" placeholder="E-Mail Adresse" type="email" />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Nachricht*</label>
                <Textarea className="min-h-32 bg-[color:var(--placeholder-color)]" placeholder="Ihre Nachricht" />
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-[color:var(--placeholder-color)] rounded border mt-1"></div>
                  <label className="text-sm leading-5">
                    Ja, ich bin damit einverstanden, dass meine hier eingetragenen Daten von der Eura Mobil GmbH für die Einladung zu Events, Informationen über neue Produkte und die Zusendung von Kundenjournalen genutzt werden.
                  </label>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-[color:var(--placeholder-color)] rounded border mt-1"></div>
                  <label className="text-sm leading-5">
                    Ja, ich bin damit einverstanden, dass mir die Gesellschaft Eura Mobil per E-Mail Informationen in regelmäßigen Abständen (einmal monatlich) rund um neue Produkte, Sonderaktionen oder Veranstaltungen zum Zwecke der Werbung übersendet. Diese Einwilligung kann ich jederzeit schriftlich mit Wirkung für die Zukunft widerrufen werden.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <div className="w-32 h-12 bg-[color:var(--placeholder-color)] rounded flex items-center justify-center">
                  <span className="text-gray-600 font-medium">ABSENDEN</span>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Footer Placeholder */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-32 bg-[color:var(--placeholder-color)] rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-xl font-medium">Footer Placeholder</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Kontakt;
