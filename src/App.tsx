
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WohnmobilberaterProvider } from "./context/WohnmobilberaterContext";
import Index from "./pages/Index";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelleOverview from "./pages/ModelleOverview";
import ProductDetail from "./pages/ProductDetail";
import Haendlersuche from "./pages/Haendlersuche";
import Karriere from "./pages/Karriere";
import Unternehmen from "./pages/Unternehmen";
import Downloads from "./pages/Downloads";
import GebrauchtMietfahrzeuge from "./pages/GebrauchtMietfahrzeuge";
import Wohnmobiltypen from "./pages/Wohnmobiltypen";
import ActivaOneDetail from "./pages/ActivaOneDetail";
import Konfigurator from "./pages/Konfigurator";
import QualitaetVorteile from "./pages/QualitaetVorteile";
import SealedStructure from "./pages/quality/SealedStructure";
import Winterfestigkeit from "./pages/quality/Winterfestigkeit";
import Leichtbauarchitektur from "./pages/quality/Leichtbauarchitektur";
import Moebelbau from "./pages/quality/Moebelbau";
import Doppelboden from "./pages/quality/Doppelboden";
import Schlafkomfort from "./pages/quality/Schlafkomfort";
import Kuechenwelt from "./pages/quality/Kuechenwelt";
import Wellness from "./pages/quality/Wellness";
import Kontakt from "./pages/Kontakt";
import Modellvergleich from "./pages/Modellvergleich";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WohnmobilberaterProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/berater" element={<Index />} />
            <Route path="/modelle" element={<ModelleOverview />} />
            <Route path="/wohnmobiltypen" element={<Wohnmobiltypen />} />
            <Route path="/modelle/:modelId" element={<ProductDetail />} />
            <Route path="/modelle/activa-one" element={<ActivaOneDetail />} />
            <Route path="/haendler" element={<Haendlersuche />} />
            <Route path="/karriere" element={<Karriere />} />
            <Route path="/unternehmen" element={<Unternehmen />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/gebrauchtfahrzeuge" element={<GebrauchtMietfahrzeuge />} />
            <Route path="/konfigurator" element={<Konfigurator />} />
            <Route path="/modellvergleich" element={<Modellvergleich />} />
            <Route path="/qualitaet" element={<QualitaetVorteile />} />
            <Route path="/qualitaet/sealed-structure" element={<SealedStructure />} />
            <Route path="/qualitaet/winterfestigkeit" element={<Winterfestigkeit />} />
            <Route path="/qualitaet/leichtbau" element={<Leichtbauarchitektur />} />
            <Route path="/qualitaet/moebelbau" element={<Moebelbau />} />
            <Route path="/qualitaet/doppelboden" element={<Doppelboden />} />
            <Route path="/qualitaet/schlafkomfort" element={<Schlafkomfort />} />
            <Route path="/qualitaet/kuechenwelt" element={<Kuechenwelt />} />
            <Route path="/qualitaet/wellnessbereich" element={<Wellness />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="/service" element={<NotFound />} />
            <Route path="/ueber-uns" element={<NotFound />} />
            <Route path="/haendler-login" element={<NotFound />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </WohnmobilberaterProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
