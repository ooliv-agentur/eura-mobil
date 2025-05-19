
import React from "react";
import { Layout } from "@/components/Layout";
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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Kontakt zur Eura Mobil GmbH</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <address className="not-italic">
            <p className="font-medium">Eura Mobil GmbH</p>
            <p>Kreuznacher Straße 78</p>
            <p>55576 Sprendlingen / Rhh.</p>
            <div className="my-4">
              <p>
                <span className="font-medium">Telefon:</span> +49 6701 20 30
              </p>
              <p>
                <span className="font-medium">Fax:</span> +49 6701 20 32 10
              </p>
              <p>
                <span className="font-medium">E-Mail:</span>{" "}
                <a 
                  href="mailto:info@euramobil.de"
                  className="text-blue-600 hover:underline"
                >
                  info@euramobil.de
                </a>
              </p>
            </div>
          </address>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-medium mb-4">Eura Mobil International</h2>
          <div className="max-w-xs">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Deutsch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="en">Englisch</SelectItem>
                <SelectItem value="fr">Französisch</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kontakt;
