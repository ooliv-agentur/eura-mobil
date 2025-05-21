
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube, Calendar, X, ChevronDown, ExternalLink, Square } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useOverlay } from "@/context/OverlayContext";
import { useWohnmobilberaterTrigger } from "@/hooks/useWohnmobilberaterTrigger";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  NavigationMenuPreviewContainer,
  NavigationMenuPreviewImage,
  NavigationMenuPreviewText,
  NavigationMenuPreviewFacts,
  NavigationMenuPreviewFactItem
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Dummy data for model previews
const modelPreviewData = {
  "van": {
    text: "Kompakter Van mit flexiblem Innenraum. Ideal für Reisende, die ein wendiges Fahrzeug für Städte und kleine Straßen suchen.",
    facts: [
      { label: "Länge", value: "5,4 - 6,0 m" },
      { label: "Sitzplätze", value: "2 - 4" },
      { label: "Schlafplätze", value: "2 - 3" }
    ]
  },
  "activa-one": {
    text: "Teilintegriertes Wohnmobil mit optimiertem Raumangebot. Perfekt für Paare und kleine Familien auf der Suche nach Komfort.",
    facts: [
      { label: "Länge", value: "6,5 - 7,1 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "2 - 4" }
    ]
  },
  "xtura": {
    text: "Geräumiges Reisemobil mit luxuriöser Ausstattung. Bietet hohen Komfort für anspruchsvolle Reisende auf langen Strecken.",
    facts: [
      { label: "Länge", value: "7,4 - 7,9 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "profila-t-fiat": {
    text: "Teilintegriertes Wohnmobil auf Fiat-Basis mit flexiblem Grundriss. Ideal für komfortable Reisen mit praktischer Ausstattung.",
    facts: [
      { label: "Länge", value: "7,1 - 7,4 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "2 - 4" }
    ]
  },
  "profila-t-mercedes": {
    text: "Premium-Teilintegrierten auf Mercedes-Basis. Bietet hohen Fahrkomfort und erstklassige Verarbeitung für anspruchsvolle Reisende.",
    facts: [
      { label: "Länge", value: "7,2 - 7,5 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "2 - 4" }
    ]
  },
  "profila-rs": {
    text: "Sportliches Reisemobil mit dynamischer Linie. Kombiniert Fahrkomfort mit praktischer Raumnutzung für aktive Reisende.",
    facts: [
      { label: "Länge", value: "7,1 - 7,5 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "contura": {
    text: "Elegantes Wohnmobil mit großzügigem Raumkonzept. Bietet Wohnkomfort auf höchstem Niveau mit durchdachten Details.",
    facts: [
      { label: "Länge", value: "7,6 - 8,0 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "integra-line-fiat": {
    text: "Vollintegriertes Reisemobil auf Fiat-Basis. Überzeugt durch harmonisches Raumkonzept und hochwertige Verarbeitung.",
    facts: [
      { label: "Länge", value: "7,1 - 7,6 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "integra-line-gt-mercedes": {
    text: "Premium-Vollintegrierter auf Mercedes-Basis mit GT-Ausstattung. Vereint Luxus und Funktionalität für höchste Ansprüche.",
    facts: [
      { label: "Länge", value: "7,2 - 7,7 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "integra": {
    text: "Luxuriöses Flaggschiff mit exklusiver Ausstattung. Bietet maximalen Wohnkomfort für anspruchsvolle Reisende auf langen Strecken.",
    facts: [
      { label: "Länge", value: "7,9 - 8,9 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  }
};

// Mobile model preview component with collapsible content
const MobileModelEntry = ({ 
  modelId, 
  modelName, 
  onClose,
  activeModel,
  setActiveModel
}: { 
  modelId: string; 
  modelName: string;
  onClose: () => void;
  activeModel: string | null;
  setActiveModel: (id: string | null) => void;
}) => {
  const isActive = activeModel === modelId;
  const modelData = modelPreviewData[modelId as keyof typeof modelPreviewData];
  
  return (
    <li className="mb-4">
      <Collapsible 
        open={isActive} 
        onOpenChange={(isOpen) => {
          // If opening this model, close any other open model
          if (isOpen) {
            setActiveModel(modelId);
          } else if (activeModel === modelId) {
            setActiveModel(null);
          }
        }}
      >
        <CollapsibleTrigger asChild>
          <button className="group flex items-center w-full justify-between hover:bg-gray-100 p-2 rounded-md transition-colors">
            <div className="flex items-center">
              <div className="bg-gray-200 rounded-md w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                <Square className="h-6 w-6 text-gray-400" />
              </div>
              <span>{modelName}</span>
            </div>
            <ChevronDown 
              className={`h-5 w-5 transition-transform ${isActive ? 'rotate-180' : ''}`} 
            />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 ml-12 mb-4 space-y-3">
          <NavigationMenuPreviewImage className="w-full h-40" />
          <NavigationMenuPreviewText>
            {modelData.text}
          </NavigationMenuPreviewText>
          <NavigationMenuPreviewFacts>
            {modelData.facts.map((fact, index) => (
              <NavigationMenuPreviewFactItem key={index}>
                <span className="font-medium text-gray-900 mb-1">{fact.label}</span>
                <span className="text-gray-600">{fact.value}</span>
              </NavigationMenuPreviewFactItem>
            ))}
          </NavigationMenuPreviewFacts>
          <Button size="sm" variant="outline" className="w-full" asChild>
            <Link to={`/modelle/${modelId}`} onClick={onClose}>
              Mehr erfahren
            </Link>
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
};

// Desktop model entry component with preview
const DesktopModelEntry = ({ 
  modelId, 
  modelName, 
  onClose,
  activeModel,
  setActiveModel
}: { 
  modelId: string; 
  modelName: string;
  onClose: () => void;
  activeModel: string | null;
  setActiveModel: (id: string | null) => void;
}) => {
  const isActive = activeModel === modelId;
  
  return (
    <li className="mb-2">
      <button 
        className={`flex items-center w-full rounded-md p-2 transition-colors text-left ${
          activeModel === modelId 
            ? 'bg-gray-100 text-blue-600' 
            : 'hover:bg-gray-50 hover:text-blue-600'
        }`}
        onClick={() => {
          // Toggle active model, or set to this model if another is active
          setActiveModel(activeModel === modelId ? null : modelId);
        }}
      >
        <div className="flex items-center w-full">
          <div className="bg-gray-200 rounded-md w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
            <Square className="h-6 w-6 text-gray-400" />
          </div>
          <span>{modelName}</span>
        </div>
      </button>
    </li>
  );
};

// Model preview panel for desktop view - now with fixed positioning
const DesktopModelPreview = ({
  modelId,
  onClose
}: {
  modelId: string | null;
  onClose: () => void;
}) => {
  if (!modelId) return null;
  
  const modelData = modelPreviewData[modelId as keyof typeof modelPreviewData];
  if (!modelData) return null;
  
  return (
    <div className="h-full">
      <NavigationMenuPreviewContainer className="sticky top-6">
        <NavigationMenuPreviewImage />
        <NavigationMenuPreviewText>
          {modelData.text}
        </NavigationMenuPreviewText>
        <NavigationMenuPreviewFacts>
          {modelData.facts.map((fact, index) => (
            <NavigationMenuPreviewFactItem key={index}>
              <span className="font-medium text-gray-900 mb-1">{fact.label}</span>
              <span className="text-gray-600">{fact.value}</span>
            </NavigationMenuPreviewFactItem>
          ))}
        </NavigationMenuPreviewFacts>
        <Button size="sm" variant="outline" className="w-full" asChild>
          <Link to={`/modelle/${modelId}`} onClick={onClose}>
            Mehr erfahren
          </Link>
        </Button>
      </NavigationMenuPreviewContainer>
    </div>
  );
};

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const { setActiveOverlay } = useOverlay();
  const { startBeraterFlow } = useWohnmobilberaterTrigger();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [activeModel, setActiveModel] = useState<string | null>(null);
  
  // Control body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on the background content
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = '';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset active model when closing menu
  useEffect(() => {
    if (!isOpen) {
      setActiveModel(null);
    }
  }, [isOpen]);

  // Check if we're on the konfigurator page
  const isKonfiguratorPage = location.pathname === '/konfigurator';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto">
      <div className="container mx-auto px-4 py-6 h-full">
        <div className="flex flex-col h-full">
          {/* Top Area with Logo and Close */}
          <div className="flex justify-between items-center mb-4">
            <Link to="/" onClick={onClose} className="font-bold text-xl">
              EURA MOBIL
            </Link>
            <button 
              onClick={onClose}
              className="p-2" 
              aria-label="Menü schließen"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* CTA Button moved below logo - left aligned with increased spacing */}
          <div className="mb-12">
            <Button className="w-full md:w-auto" asChild>
              <Link to="/berater?step=1" onClick={onClose}>
                <Calendar className="mr-2 h-4 w-4" />
                Welches Wohnmobil passt zu mir?
              </Link>
            </Button>
          </div>
          
          <div className="overflow-y-auto flex-grow">
            {/* Enhanced Desktop Grid Layout with improved spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {/* 01 Wohnmobile & Vans */}
              <div className="mb-8 bg-gray-50 p-5 rounded-lg transition-all group hover:shadow-md relative">
                <h2 className="text-lg font-bold mb-2">
                  <span className="text-gray-400">01</span> Wohnmobile & Vans
                </h2>
                <Separator className="mb-4" />
                
                {/* Add the new Wohnmobiltypen overview link before models list */}
                <div className="mb-4">
                  <Link 
                    to="/wohnmobiltypen" 
                    onClick={onClose}
                    className="group flex items-center hover:text-blue-600 transition-colors"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                    Wohnmobiltypen im Überblick
                  </Link>
                </div>
                
                {/* Desktop view with separate models list and preview panel side by side */}
                {!isMobile && (
                  <div className="flex gap-6">
                    {/* Models list column */}
                    <div className="w-full">
                      <ul className="space-y-1 relative">
                        <DesktopModelEntry modelId="van" modelName="Van" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                        <DesktopModelEntry modelId="activa-one" modelName="Activa One" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                        <DesktopModelEntry modelId="xtura" modelName="Xtura" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                        <DesktopModelEntry modelId="profila-t-fiat" modelName="Profila T – Fiat" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                        <DesktopModelEntry modelId="profila-t-mercedes" modelName="Profila T – Mercedes" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                        <DesktopModelEntry modelId="profila-rs" modelName="Profila RS" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                        <DesktopModelEntry modelId="contura" modelName="Contura" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                        <DesktopModelEntry modelId="integra-line-fiat" modelName="Integra Line – Fiat" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                        <DesktopModelEntry modelId="integra-line-gt-mercedes" modelName="Integra Line GT – Mercedes" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                        <DesktopModelEntry modelId="integra" modelName="Integra" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                      </ul>
                    </div>
                    
                    {/* Preview panel column - reserved space for the active model preview */}
                    {activeModel && (
                      <div className="w-full">
                        <DesktopModelPreview modelId={activeModel} onClose={onClose} />
                      </div>
                    )}
                  </div>
                )}
                
                {/* Mobile view with collapsible accordions */}
                {isMobile && (
                  <ul className="space-y-1 relative">
                    <MobileModelEntry modelId="van" modelName="Van" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                    <MobileModelEntry modelId="activa-one" modelName="Activa One" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                    <MobileModelEntry modelId="xtura" modelName="Xtura" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                    <MobileModelEntry modelId="profila-t-fiat" modelName="Profila T – Fiat" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                    <MobileModelEntry modelId="profila-t-mercedes" modelName="Profila T – Mercedes" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                    <MobileModelEntry modelId="profila-rs" modelName="Profila RS" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                    <MobileModelEntry modelId="contura" modelName="Contura" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                    <MobileModelEntry modelId="integra-line-fiat" modelName="Integra Line – Fiat" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                    <MobileModelEntry modelId="integra-line-gt-mercedes" modelName="Integra Line GT – Mercedes" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                    <MobileModelEntry modelId="integra" modelName="Integra" onClose={onClose} activeModel={activeModel} setActiveModel={setActiveModel} />
                  </ul>
                )}
              </div>

              {/* 02 Kaufen & Mieten */}
              <div className="mb-8 bg-gray-50 p-5 rounded-lg transition-all group hover:shadow-md">
                <h2 className="text-lg font-bold mb-2">
                  <span className="text-gray-400">02</span> Kaufen & Mieten
                </h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/berater?step=1" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Wohnmobilberater
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="/konfigurator" 
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                        Konfigurator
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <Link 
                      to="/mietfahrzeuge" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Mietfahrzeuge
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/gebrauchtfahrzeuge" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Gebrauchtfahrzeuge
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/haendler" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Händlersuche
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 03 Qualität & Vorteile */}
              <div className="mb-8 bg-gray-50 p-5 rounded-lg transition-all group hover:shadow-md">
                <h2 className="text-lg font-bold mb-2">
                  <span className="text-gray-400">03</span> Qualität & Vorteile
                </h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/qualitaet/sealed-structure" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Sealed Structure
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/qualitaet/winterfestigkeit" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Winterfestigkeit
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/qualitaet/leichtbau" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Leichtbau
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/qualitaet/moebelbau" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Möbelbau
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/qualitaet/doppelboden" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Doppelboden
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/qualitaet/schlafkomfort" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Schlafkomfort
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/qualitaet/kuechenwelt" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Küchen
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/qualitaet/wellnessbereich" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Wellness
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 04 Unternehmen */}
              <div className="mb-8 bg-gray-50 p-5 rounded-lg transition-all group hover:shadow-md">
                <h2 className="text-lg font-bold mb-2">
                  <span className="text-gray-400">04</span> Unternehmen
                </h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/unternehmen" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Unternehmen
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/unternehmen/werksfuehrung" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Werksführung
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/unternehmen/forum" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Forum
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/unternehmen/club" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Club
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/unternehmen/card" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Card
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/unternehmen/videos" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Videos
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 05 Karriere & Service */}
              <div className="mb-8 bg-gray-50 p-5 rounded-lg transition-all group hover:shadow-md">
                <h2 className="text-lg font-bold mb-2">
                  <span className="text-gray-400">05</span> Karriere & Service
                </h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="/karriere" 
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                        Stellenangebote
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <Link 
                      to="/karriere/ausbildung" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Ausbildung
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/kontakt" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Kontakt
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/garantie" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Garantie
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/newsletter" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/downloads" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Downloads
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 06 Social Links */}
              <div className="mb-8 bg-gray-50 p-5 rounded-lg transition-all group hover:shadow-md">
                <h2 className="text-lg font-bold mb-2">
                  <span className="text-gray-400">06</span> Social Links
                </h2>
                <Separator className="mb-4" />
                <div className="flex gap-6">
                  <a 
                    href="https://www.instagram.com/euramobil/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/EuraMobil" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@euramobil" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Language Selector */}
              <div className="mb-8 bg-gray-50 p-5 rounded-lg transition-all group hover:shadow-md">
                <h2 className="text-lg font-bold mb-2">Sprache</h2>
                <Separator className="mb-4" />
                <Select defaultValue="de">
                  <SelectTrigger className="w-full sm:w-36">
                    <SelectValue placeholder="Sprache" />
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
        </div>
      </div>
    </div>
  );
};

export default FullscreenMenu;
