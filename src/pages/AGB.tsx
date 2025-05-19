
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const AGB = () => {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-8">
          <FileText className="mx-auto mb-4 text-gray-400" size={64} />
          <h1 className="text-3xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-xl text-gray-600">
            Die AGB werden aktuell überarbeitet.
          </p>
          <p className="text-gray-500 mt-2">
            Bitte kontaktieren Sie uns bei Fragen direkt unter info@euramobil.de
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <a href="/">Zurück zur Startseite</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AGB;
