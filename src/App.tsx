
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
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
          <Route path="/qualitaet" element={<QualitaetVorteile />} />
          <Route path="/service" element={<NotFound />} />
          <Route path="/ueber-uns" element={<NotFound />} />
          <Route path="/kontakt" element={<NotFound />} />
          <Route path="/haendler-login" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
