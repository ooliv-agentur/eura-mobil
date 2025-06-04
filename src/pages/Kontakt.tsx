
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

const Kontakt = () => {
  const [formData, setFormData] = useState({
    thema: "",
    fahrzeugId: "",
    vertragshaendler: "",
    anrede: "",
    vorname: "",
    nachname: "",
    strasse: "",
    nummer: "",
    plz: "",
    ort: "",
    land: "",
    email: "",
    nachricht: "",
    newsletter: false,
    events: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      {/* Hero Section - Updated to match homepage font sizes and order */}
      <section className="relative bg-[#E5E7EB] h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div className="text-center z-10 px-4 max-w-6xl">
          <p className="text-lg md:text-xl mb-4">
            Um Ihnen schnellstmöglich weiterhelfen zu können, haben wir bereits eine Menge Fragen für Sie beantwortet. Sollten Sie hier nicht die gewünschte Antwort finden, nutzen Sie bitte das Kontaktformular.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Wir helfen Ihnen weiter – Kontakt
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        
        {/* Ansprechpartner Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Ansprechpartner</h2>
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Profile Picture */}
                  <div className="w-full md:w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Profilbild</span>
                  </div>
                  
                  {/* Contact Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Max Mustermann</h3>
                      <p className="text-gray-600">Kundenbetreuung</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <span>+49 6701 20 30</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <span>m.mustermann@euramobil.de</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Contact Information */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Kontaktinformationen</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Eura Mobil GmbH</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <span>Kreuznacher Straße 78, 55576 Sprendlingen, Germany</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span>Telefon: +49 6701 20 30</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span>Fax: +49 6701 20 32 10</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <span>E-Mail: info@euramobil.de</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 text-lg">Karte wird geladen...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Kontaktformular</h2>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Thema */}
                  <div>
                    <Label htmlFor="thema" className="text-sm font-medium">Thema*</Label>
                    <Select value={formData.thema} onValueChange={(value) => handleInputChange('thema', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Allgemeine Anfrage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="allgemein">Allgemeine Anfrage</SelectItem>
                        <SelectItem value="service">Service & Wartung</SelectItem>
                        <SelectItem value="garantie">Garantie</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Fahrzeug-Identnummer */}
                  <div>
                    <Label htmlFor="fahrzeugId" className="text-sm font-medium">Fahrzeug-Identnummer*</Label>
                    <Input 
                      id="fahrzeugId"
                      className="mt-2" 
                      placeholder="Fahrzeug-Identnummer" 
                      value={formData.fahrzeugId}
                      onChange={(e) => handleInputChange('fahrzeugId', e.target.value)}
                    />
                  </div>

                  {/* Vertragshändler */}
                  <div>
                    <Label htmlFor="vertragshaendler" className="text-sm font-medium">Vertragshändler</Label>
                    <Input 
                      id="vertragshaendler"
                      className="mt-2" 
                      placeholder="Vertragshändler" 
                      value={formData.vertragshaendler}
                      onChange={(e) => handleInputChange('vertragshaendler', e.target.value)}
                    />
                  </div>

                  {/* Anrede */}
                  <div>
                    <Label htmlFor="anrede" className="text-sm font-medium">Anrede*</Label>
                    <Select value={formData.anrede} onValueChange={(value) => handleInputChange('anrede', value)}>
                      <SelectTrigger className="mt-2">
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
                      <Label htmlFor="vorname" className="text-sm font-medium">Vorname*</Label>
                      <Input 
                        id="vorname"
                        className="mt-2" 
                        placeholder="Vorname" 
                        value={formData.vorname}
                        onChange={(e) => handleInputChange('vorname', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="nachname" className="text-sm font-medium">Nachname*</Label>
                      <Input 
                        id="nachname"
                        className="mt-2" 
                        placeholder="Nachname" 
                        value={formData.nachname}
                        onChange={(e) => handleInputChange('nachname', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Address Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="strasse" className="text-sm font-medium">Straße</Label>
                      <Input 
                        id="strasse"
                        className="mt-2" 
                        placeholder="Straße" 
                        value={formData.strasse}
                        onChange={(e) => handleInputChange('strasse', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="nummer" className="text-sm font-medium">Nr.</Label>
                      <Input 
                        id="nummer"
                        className="mt-2" 
                        placeholder="Nr." 
                        value={formData.nummer}
                        onChange={(e) => handleInputChange('nummer', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="plz" className="text-sm font-medium">PLZ</Label>
                      <Input 
                        id="plz"
                        className="mt-2" 
                        placeholder="PLZ" 
                        value={formData.plz}
                        onChange={(e) => handleInputChange('plz', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="ort" className="text-sm font-medium">Ort</Label>
                      <Input 
                        id="ort"
                        className="mt-2" 
                        placeholder="Ort" 
                        value={formData.ort}
                        onChange={(e) => handleInputChange('ort', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="land" className="text-sm font-medium">Land</Label>
                      <Input 
                        id="land"
                        className="mt-2" 
                        placeholder="Land" 
                        value={formData.land}
                        onChange={(e) => handleInputChange('land', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">E-Mail Adresse*</Label>
                    <Input 
                      id="email"
                      className="mt-2" 
                      placeholder="E-Mail Adresse" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="nachricht" className="text-sm font-medium">Nachricht*</Label>
                    <Textarea 
                      id="nachricht"
                      className="mt-2 min-h-32" 
                      placeholder="Ihre Nachricht" 
                      value={formData.nachricht}
                      onChange={(e) => handleInputChange('nachricht', e.target.value)}
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="events"
                        checked={formData.events}
                        onCheckedChange={(checked) => handleInputChange('events', checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="events" className="text-sm leading-5">
                        Ja, ich bin damit einverstanden, dass meine hier eingetragenen Daten von der Eura Mobil GmbH für die Einladung zu Events, Informationen über neue Produkte und die Zusendung von Kundenjournalen genutzt werden.
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="newsletter" className="text-sm leading-5">
                        Ja, ich bin damit einverstanden, dass mir die Gesellschaft Eura Mobil per E-Mail Informationen in regelmäßigen Abständen (einmal monatlich) rund um neue Produkte, Sonderaktionen oder Veranstaltungen zum Zwecke der Werbung übersendet. Diese Einwilligung kann ich jederzeit schriftlich mit Wirkung für die Zukunft widerrufen werden.
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" size="lg" className="px-8">
                      ABSENDEN
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Kontakt;
