
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import BeraterButton from "@/components/Wohnmobilberater/BeraterButton";

const Index = () => {
  useEffect(() => {
    // Any initialization code can go here
  }, []);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4">Wohnmobilberater</h1>
          <p className="mb-6">
            Finden Sie das perfekte Wohnmobil für Ihre Bedürfnisse.
          </p>
          <BeraterButton />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
