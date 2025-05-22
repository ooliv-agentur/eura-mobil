import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WohnmobilberaterProvider } from "./context/WohnmobilberaterContext";
import { OverlayProvider } from "./context/OverlayContext";
import { ComparisonProvider } from "./context/ComparisonContext";
import { ScrollToTop } from "./components/ScrollToTop";

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
                
                {/* Explicit routes for models in the correct order matching the specified sequence */}
                <Route path="/modelle/van" element={<ProductDetail />} />
                <Route path="/modelle/activa-one" element={<ProductDetail />} />
                <Route path="/modelle/profila-t-fiat" element={<ProductDetail />} />
                <Route path="/modelle/profila-rs" element={<ProductDetail />} />
                <Route path="/modelle/profila-t-mercedes" element={<ProductDetail />} />
                <Route path="/modelle/contura" element={<ProductDetail />} />
                <Route path="/modelle/integra-line-fiat" element={<ProductDetail />} />
                <Route path="/modelle/integra-line-gt-mercedes" element={<ProductDetail />} />
                <Route path="/modelle/integra" element={<ProductDetail />} />
                <Route path="/modelle/xtura" element={<ProductDetail />} />
                
                {/* Dynamic route as fallback for other models */}
                <Route path="/modelle/:modelId" element={<ProductDetail />} />
                
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
            </BrowserRouter>
          </ComparisonProvider>
        </OverlayProvider>
      </WohnmobilberaterProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
