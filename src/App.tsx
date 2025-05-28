
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WohnmobilberaterProvider } from "./context/WohnmobilberaterContext";
import { OverlayProvider } from "./context/OverlayContext";
import { ComparisonProvider } from "./context/ComparisonContext";
import { ScrollToTop } from "./components/ScrollToTop";
import BeraterContainer from "./components/Wohnmobilberater/BeraterContainer";
import Index from "./pages/Index";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelleOverview from "./pages/ModelleOverview";
import ProductDetail from "./pages/ProductDetail";
import FloorplanDetail from "./pages/FloorplanDetail";
import ActivaOneDetail from "./pages/ActivaOneDetail";
import Haendlersuche from "./pages/Haendlersuche";
import Karriere from "./pages/Karriere";
import Unternehmen from "./pages/Unternehmen";
import Downloads from "./pages/Downloads";
import GebrauchtMietfahrzeuge from "./pages/GebrauchtMietfahrzeuge";
import Wohnmobiltypen from "./pages/Wohnmobiltypen";
import VansOverview from "./pages/VansOverview";
import AlkovenOverview from "./pages/AlkovenOverview";
import IntegrierteOverview from "./pages/IntegrierteOverview";
import TeilintegrierteOverview from "./pages/TeilintegrierteOverview";
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
          <ComparisonProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/berater" element={<Index />} />
                <Route path="/modelle" element={<ModelleOverview />} />
                <Route path="/wohnmobiltypen" element={<Wohnmobiltypen />} />
                <Route path="/wohnmobiltypen/vans" element={<VansOverview />} />
                <Route path="/wohnmobiltypen/alkoven" element={<AlkovenOverview />} />
                <Route path="/wohnmobiltypen/integriert" element={<IntegrierteOverview />} />
                <Route path="/wohnmobiltypen/teilintegriert" element={<TeilintegrierteOverview />} />
                
                {/* Nested routes for model series and individual floor plans */}
                <Route path="/modelle/:modelId/:floorplanId" element={<FloorplanDetail />} />
                
                {/* Dynamic route for model series overview */}
                <Route path="/modelle/:modelId" element={<ProductDetail />} />
                
                {/* Special route for Activa One that uses its own component */}
                <Route path="/modelle/activa-one" element={<ActivaOneDetail />} />
                
                {/* Redirect modellvergleich to modelle */}
                <Route path="/modellvergleich" element={<Navigate to="/modelle" replace />} />
                
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
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <BeraterContainer />
            </BrowserRouter>
          </ComparisonProvider>
        </OverlayProvider>
      </WohnmobilberaterProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
