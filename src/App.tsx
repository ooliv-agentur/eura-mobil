import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WohnmobilberaterProvider } from "./context/WohnmobilberaterContext";
import { OverlayProvider } from "./context/OverlayContext";
import { ScrollToTop } from "./components/ScrollToTop";
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
import Werksfuehrung from "./pages/Werksfuehrung";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WohnmobilberaterProvider>
        <OverlayProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/berater" element={<Index />} />
              
              {/* New URLs for model pages */}
              <Route path="/wohnmobile" element={<ModelleOverview />} />
              <Route path="/wohnmobile/vans" element={<ProductDetail />} />
              <Route path="/wohnmobile/alkoven" element={<ProductDetail />} />
              <Route path="/wohnmobile/teilintegrierte/profila-t-fiat" element={<ProductDetail />} />
              <Route path="/wohnmobile/teilintegrierte/profila-t-mercedes" element={<ProductDetail />} />
              <Route path="/wohnmobile/teilintegrierte/profila-rs" element={<ProductDetail />} />
              <Route path="/wohnmobile/teilintegrierte/contura" element={<ProductDetail />} />
              <Route path="/wohnmobile/teilintegrierte/xtura" element={<ProductDetail />} />
              <Route path="/wohnmobile/integrierte/integra-line-fiat" element={<ProductDetail />} />
              <Route path="/wohnmobile/integrierte/integra-line-gt-mercedes" element={<ProductDetail />} />
              <Route path="/wohnmobile/integrierte/integra" element={<ProductDetail />} />
              
              {/* Floor plan detail pages */}
              <Route path="/wohnmobile/vans/:floorplanId" element={<ProductDetail />} />
              <Route path="/wohnmobile/alkoven/:floorplanId" element={<ProductDetail />} />
              <Route path="/wohnmobile/teilintegrierte/:modelId/:floorplanId" element={<ProductDetail />} />
              <Route path="/wohnmobile/integrierte/:modelId/:floorplanId" element={<ProductDetail />} />
              
              {/* Model comparison page with query params */}
              <Route path="/wohnmobile/modellvergleich" element={<Modellvergleich />} />
              
              {/* Redirects from old to new URLs */}
              <Route path="/modelle" element={<Navigate to="/wohnmobile" replace />} />
              <Route path="/modellvergleich" element={<Navigate to="/wohnmobile/modellvergleich" replace />} />
              <Route path="/modelle/van" element={<Navigate to="/wohnmobile/vans" replace />} />
              <Route path="/modelle/activa-one" element={<Navigate to="/wohnmobile/alkoven" replace />} />
              <Route path="/modelle/profila-t-fiat" element={<Navigate to="/wohnmobile/teilintegrierte/profila-t-fiat" replace />} />
              <Route path="/modelle/profila-rs" element={<Navigate to="/wohnmobile/teilintegrierte/profila-rs" replace />} />
              <Route path="/modelle/profila-t-mercedes" element={<Navigate to="/wohnmobile/teilintegrierte/profila-t-mercedes" replace />} />
              <Route path="/modelle/contura" element={<Navigate to="/wohnmobile/teilintegrierte/contura" replace />} />
              <Route path="/modelle/integra-line-fiat" element={<Navigate to="/wohnmobile/integrierte/integra-line-fiat" replace />} />
              <Route path="/modelle/integra-line-gt-mercedes" element={<Navigate to="/wohnmobile/integrierte/integra-line-gt-mercedes" replace />} />
              <Route path="/modelle/integra" element={<Navigate to="/wohnmobile/integrierte/integra" replace />} />
              <Route path="/modelle/xtura" element={<Navigate to="/wohnmobile/teilintegrierte/xtura" replace />} />
              <Route path="/modelle/:modelId" element={<Navigate to="/wohnmobile" replace />} />
              
              {/* Keep existing non-model related routes */}
              <Route path="/wohnmobiltypen" element={<Wohnmobiltypen />} />
              <Route path="/haendler" element={<Haendlersuche />} />
              <Route path="/karriere" element={<Karriere />} />
              <Route path="/unternehmen" element={<Unternehmen />} />
              <Route path="/werksfuehrung" element={<Werksfuehrung />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/gebrauchtfahrzeuge" element={<GebrauchtMietfahrzeuge />} />
              <Route path="/konfigurator" element={<Konfigurator />} />
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
              <Route path="/ueber-eura-mobil" element={<Navigate to="/unternehmen" replace />} />
              <Route path="/haendler-login" element={<NotFound />} />
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </OverlayProvider>
      </WohnmobilberaterProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
