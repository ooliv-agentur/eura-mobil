
import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import BeraterButton from "@/components/BeraterButton";

const Index = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4">Wohnmobilberater</h1>
          <p className="mb-6">
            Finden Sie das perfekte Wohnmobil für Ihre Bedürfnisse.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <BeraterButton />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
