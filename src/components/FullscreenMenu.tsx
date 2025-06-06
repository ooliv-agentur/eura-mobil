import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube, X, ExternalLink } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useOverlay } from "@/context/OverlayContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Updated model preview data with exact content from screenshots
const modelPreviewData = {
  "van": {
    title: "Van",
    text: "Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen. Nehmen Sie sich die Zeit und lassen Sie das Interieur auf sich wirken....",
    facts: [
      { label: "Länge", value: "5,99 - 6,36 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "2-3" }
    ]
  },
  "activa-one": {
    title: "Activa One",
    text: "Der neue Activa One ist ein wendiger Kompakt-Alkoven. Seine kompakten Außenmaße machen ihn zu einem agilen Gefährten für alle Abenteuer. Die großzügigen Platzverhältnisse drinnen sorgen für entspannte Reisen zu zweit oder zu viert. Das charakteristische, neue Gesicht des Activa One zeigt seine Zugehörigkeit zur Eura Mobil Familie - und macht ihn gleichzeitig zu etwas Besonderem.",
    facts: [
      { label: "Länge", value: "6,38 - 6,99 m" },
      { label: "Sitzplätze", value: "4 - 6" },
      { label: "Schlafplätze", value: "4 - 6" }
    ]
  },
  "profila-t-fiat": {
    title: "Profila T – Fiat",
    text: "Unbeschwert und ohne Hetze die Welt erfahren, dafür eignen sich sämtliche Modelle der Baureihe Profila T besonders gut. Neben ihrem eleganten und schnittigen Design bestechen sie durch die niedrige Gesamthöhe von weniger als 2,90 m bei einer Stehhöhe von 1,97 m im Innenraum.",
    facts: [
      { label: "Länge", value: "6,99 - 7,58 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "2" }
    ]
  },
  "profila-rs": {
    title: "Profila RS",
    text: "Mit dem Profila RS erleben Sie Reisemobil-Luxus der Spitzenklasse. Die neue Baureihe vereint ein durchdachtes Design mit hochwertiger Ausstattung und bietet alles, was das Herz von anspruchsvollen Reisenden höher schlagen lässt.",
    facts: [
      { label: "Länge", value: "6,99 - 7,58 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "profila-t-mercedes": {
    title: "Profila T – Mercedes",
    text: "Die Profila T auf Mercedes verkörpern die Top-Modelle innerhalb der Profila Baureihe. Mit AL-KO Tiefrahmen, Alde-Warmwasserheizung, 20 cm hohem Doppelboden und dem optional erhältlichen Panoramadach mit Aufstellfunktion verfügen diese Modelle über besondere Ausstattungsfeatures.",
    facts: [
      { label: "Länge", value: "7,12 - 7,54 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "2" }
    ]
  },
  "contura": {
    title: "Contura",
    text: "Der Contura ist ein elegantes Wohnmobil mit großzügigem Raumkonzept. Er bietet Wohnkomfort auf höchstem Niveau mit durchdachten Details und modernem Design für entspannte Reisen.",
    facts: [
      { label: "Länge", value: "7,6 - 8,0 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "integra-line-fiat": {
    title: "Integra Line – Fiat",
    text: "Sich einfach mal ganz weit wegträumen – oder einfach gleich hinfahren! Diese Freiheit genießen Sie ganz individuell mit dem Integra Line: das Reisemobil für alle, die ihren eigenen Weg gehen und dabei die ursprüngliche Vielfalt der Landschaft genießen wollen.",
    facts: [
      { label: "Länge", value: "7,30 - 7,84 m" },
      { label: "Sitzplätze", value: "4 - 6" },
      { label: "Schlafplätze", value: "2 - 4" }
    ]
  },
  "integra-line-gt-mercedes": {
    title: "Integra Line GT – Mercedes",
    text: "Der neue Integra Line GT schlägt ein neues Kapitel bei den Integrierten von Eura Mobil auf. Die Funktionalität der Liner Klasse vereint sich mit der Eleganz eines kompakten Integrierten und der Komfort der Luxusklasse paart sich im GT mit der Dynamik eines Teilintegrierten.",
    facts: [
      { label: "Länge", value: "7,47 - 7,64 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "integra": {
    title: "Integra",
    text: "Mit dem Integra hat Eura Mobil die Messlatte bei den Reisemobilen der Oberklasse auf ein völlig neues Niveau gehoben: Ein emotional markantes, gleichzeitig hochfunktionales und eindeutig sicherheitsorientiertes Lichtdesign innen wie außen untermalt den luxuriösen Charakter in dieser Klasse.",
    facts: [
      { label: "Länge", value: "7,89 - 8,99 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "xtura": {
    title: "Xtura",
    text: "Mit dem neuen Xtura als seinem ersten 4×4 Fernreisemobil hat Eura Mobil in der Saison auf Anhieb ein eigenes Marktsegment definiert: konsequent robust ausgestattet, mit hoher elektrischer Energieautarkie, busgesteuerter Onboard-Technik und der Möglichkeit zu weltweiter Satellitennavigation im Offroad-Bereich.",
    facts: [
      { label: "Länge", value: "6,88 m" },
      { label: "Sitzplätze", value: "3" },
      { label: "Schlafplätze", value: "2" }
    ]
  }
};

// Simplified model preview component with smaller aspect ratio and balanced spacing
const ModelPreviewHero = ({
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
    <div className="flex flex-col h-full">
      {/* Image placeholder with much smaller height - using 5:2 aspect ratio */}
      <AspectRatio ratio={5/2} className="mb-4 bg-gray-200 rounded-md overflow-hidden" />
      
      <h3 className="text-xl font-medium mb-2">{modelData.title}</h3>
      
      <p className="text-sm text-gray-600 mb-4">
        {modelData.text}
      </p>
      
      <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
        {modelData.facts.map((fact, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-medium text-gray-900 mb-0.5">{fact.label}</span>
            <span className="text-gray-600">{fact.value}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-auto">
        <Button variant="outline" className="w-full" asChild>
          <Link to={`/modelle/${modelId}`} onClick={onClose}>
            Mehr erfahren
          </Link>
        </Button>
      </div>
    </div>
  );
};

// Mobile Model Item component with expanding preview
const MobileModelItem = ({ 
  modelId, 
  isActive, 
  onSelect, 
  onClose 
}: { 
  modelId: string; 
  isActive: boolean; 
  onSelect: (id: string) => void; 
  onClose: () => void;
}) => {
  const model = modelPreviewData[modelId as keyof typeof modelPreviewData];
  
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button 
        className={cn(
          "flex items-center w-full text-left py-3 px-2 transition-colors",
          isActive ? "text-blue-600" : "text-gray-800"
        )}
        onClick={() => onSelect(modelId)}
      >
        {/* Small dummy image with reduced size */}
        <div className="bg-gray-200 w-16 h-6 mr-3 flex-shrink-0 rounded-sm"></div>
        <span className="font-medium flex-grow">{model.title}</span>
        {isActive ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      
      {/* Expandable preview section */}
      {isActive && (
        <div className="px-2 pb-4 animate-fade-in">
          <AspectRatio ratio={5/2} className="mb-3 bg-gray-200 rounded-md overflow-hidden" />
          
          <p className="text-sm text-gray-600 mb-3">
            {model.text}
          </p>
          
          <div className="grid grid-cols-3 gap-3 mb-4 text-xs">
            {model.facts.map((fact, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-medium text-gray-900 mb-0.5">{fact.label}</span>
                <span className="text-gray-600">{fact.value}</span>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full text-sm" asChild>
            <Link to={`/modelle/${modelId}`} onClick={onClose}>
              Mehr erfahren
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const { setActiveOverlay } = useOverlay();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [activeModel, setActiveModel] = useState<string | null>("van");
  
  // Control body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleModelSelect = (id: string) => {
    setActiveModel(id);
  };

  // Array of all model IDs in the specified order
  const modelIds = [
    "van",
    "activa-one",
    "profila-t-fiat",
    "profila-rs",
    "profila-t-mercedes",
    "contura",
    "integra-line-fiat",
    "integra-line-gt-mercedes",
    "integra",
    "xtura"
  ];

  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto">
      {/* Header with logo and close button */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={onClose} className="font-bold text-xl">
            EURA MOBIL
          </Link>
          
          {/* Close button */}
          <button 
            onClick={onClose}
            aria-label="Menü schließen"
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <X className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Main content with 12-column grid */}
      <div className="container mx-auto px-4 pb-16 md:pb-0">
        {/* 1. Wohnmobile & Vans section */}
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-3">Wohnmobile & Vans</h2>
          
          {/* Card-like wrapper with border */}
          <div className="rounded-md border border-gray-200 p-4 bg-gray-50/50">
            {/* Desktop: 12-column grid for model list and preview */}
            <div className="hidden md:grid grid-cols-12 gap-6">
              {/* Left side: Model list (4 columns) */}
              <div className="col-span-4">
                <ul className="space-y-1">
                  <li>
                    <Link 
                      to="/modelle"
                      onClick={onClose}
                      className="flex items-center w-full text-left py-4 pl-3 pr-2 rounded-sm transition-colors hover:bg-gray-100 hover:text-blue-600"
                    >
                      <div className="bg-gray-200 w-16 h-6 mr-3 flex-shrink-0 rounded-sm"></div>
                      <span className="font-medium">Modelle Übersicht</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/wohnmobiltypen"
                      onClick={onClose}
                      className="flex items-center w-full text-left py-4 pl-3 pr-2 rounded-sm transition-colors hover:bg-gray-100 hover:text-blue-600"
                    >
                      <div className="bg-gray-200 w-16 h-6 mr-3 flex-shrink-0 rounded-sm"></div>
                      <span className="font-medium">Wohnmobiltypen</span>
                    </Link>
                  </li>
                  {modelIds.map(modelId => {
                    const model = modelPreviewData[modelId as keyof typeof modelPreviewData];
                    return (
                      <li key={modelId}>
                        <button 
                          className={`flex items-center w-full text-left py-4 pl-3 pr-2 rounded-sm transition-colors
                            ${activeModel === modelId 
                              ? 'text-blue-600 bg-blue-50 border-l-2 border-blue-500' 
                              : 'hover:bg-gray-100 hover:text-blue-600'}`}
                          onClick={() => handleModelSelect(modelId)}
                        >
                          <div className="bg-gray-200 w-16 h-6 mr-3 flex-shrink-0 rounded-sm"></div>
                          <span className="font-medium">{model.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              {/* Right side: Preview (8 columns) */}
              <div className="col-span-8">
                <ModelPreviewHero modelId={activeModel} onClose={onClose} />
              </div>
            </div>
            
            {/* Mobile: Accordion style list with inline previews */}
            <div className="md:hidden">
              <div className="border-b border-gray-100 pb-2 mb-2">
                <Link 
                  to="/modelle"
                  onClick={onClose}
                  className="flex items-center w-full text-left py-3 px-2 transition-colors hover:text-blue-600"
                >
                  <div className="bg-gray-200 w-16 h-6 mr-3 flex-shrink-0 rounded-sm"></div>
                  <span className="font-medium">Modelle Übersicht</span>
                </Link>
              </div>
              <div className="border-b border-gray-100 pb-2 mb-2">
                <Link 
                  to="/wohnmobiltypen"
                  onClick={onClose}
                  className="flex items-center w-full text-left py-3 px-2 transition-colors hover:text-blue-600"
                >
                  <div className="bg-gray-200 w-16 h-6 mr-3 flex-shrink-0 rounded-sm"></div>
                  <span className="font-medium">Wohnmobiltypen</span>
                </Link>
              </div>
              {modelIds.map(modelId => (
                <MobileModelItem 
                  key={modelId}
                  modelId={modelId}
                  isActive={activeModel === modelId}
                  onSelect={handleModelSelect}
                  onClose={onClose}
                />
              ))}
            </div>
            
            {/* CTA Buttons in 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Button variant="outline" asChild>
                <Link to="/modelle" onClick={onClose}>
                  Modelle vergleichen
                </Link>
              </Button>
              
              <Button variant="outline" asChild>
                <a 
                  href="https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-center"
                >
                  <span>Jetzt konfigurieren</span>
                  <ExternalLink className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/berater" onClick={onClose}>
                  Beratung starten
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <Separator className="my-6" />
        
        {/* 2. Core navigation links as uniformly styled buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/berater" onClick={onClose}>
              Wohnmobilberater
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <a 
              href="https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              <span>Konfigurator</span>
              <ExternalLink className="ml-auto h-4 w-4" />
            </a>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <a 
              href="https://www.drm.de/de/" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              <span>Mietfahrzeuge</span>
              <ExternalLink className="ml-auto h-4 w-4" />
            </a>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/gebrauchtfahrzeuge" onClick={onClose}>
              Gebrauchtfahrzeuge
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/haendler" onClick={onClose}>
              Händlersuche
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/finanzierung-leasing" onClick={onClose}>
              Finanzierung & Leasing
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/qualitaet" onClick={onClose}>
              Qualität & Vorteile
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/unternehmen" onClick={onClose}>
              Über EURA MOBIL
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/werksfuehrung" onClick={onClose}>
              Werksführung
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Footer with language selector and social media - aligned to the grid */}
      <div className="mt-auto border-t border-gray-200 bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Language selector */}
            <div className="mb-4 md:mb-0">
              <h3 className="font-medium mb-3">Eura Mobil International</h3>
              <Select defaultValue="de">
                <SelectTrigger className="w-32 h-9 text-sm">
                  <SelectValue placeholder="Sprache" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="en">Englisch</SelectItem>
                  <SelectItem value="fr">Französisch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Social media icons */}
            <div>
              <h3 className="font-medium mb-3">Folgen Sie uns</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/euramobil/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/EuraMobil" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@euramobil" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile only: Fixed CTA at the bottom */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden">
          <Button className="w-full" asChild>
            <Link to="/berater" onClick={onClose}>
              Jetzt Beratung starten
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default FullscreenMenu;
