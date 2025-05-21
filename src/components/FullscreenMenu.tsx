
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube, X, ExternalLink } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useOverlay } from "@/context/OverlayContext";
import { useIsMobile } from "@/hooks/use-mobile";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Dummy data for model previews
const modelPreviewData = {
  "van": {
    title: "Van",
    text: "Kompakter Van mit flexiblem Innenraum. Ideal für Reisende, die ein wendiges Fahrzeug für Städte und kleine Straßen suchen.",
    facts: [
      { label: "Länge", value: "5,4 - 6,0 m" },
      { label: "Sitzplätze", value: "2 - 4" },
      { label: "Schlafplätze", value: "2 - 3" }
    ]
  },
  "activa-one": {
    title: "Activa One",
    text: "Teilintegriertes Wohnmobil mit optimiertem Raumangebot. Perfekt für Paare und kleine Familien auf der Suche nach Komfort.",
    facts: [
      { label: "Länge", value: "6,5 - 7,1 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "2 - 4" }
    ]
  },
  "xtura": {
    title: "Xtura",
    text: "Geräumiges Reisemobil mit luxuriöser Ausstattung. Bietet hohen Komfort für anspruchsvolle Reisende auf langen Strecken.",
    facts: [
      { label: "Länge", value: "7,4 - 7,9 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "profila-t-fiat": {
    title: "Profila T – Fiat",
    text: "Teilintegriertes Wohnmobil auf Fiat-Basis mit flexiblem Grundriss. Ideal für komfortable Reisen mit praktischer Ausstattung.",
    facts: [
      { label: "Länge", value: "7,1 - 7,4 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "2 - 4" }
    ]
  },
  "profila-t-mercedes": {
    title: "Profila T – Mercedes",
    text: "Premium-Teilintegrierten auf Mercedes-Basis. Bietet hohen Fahrkomfort und erstklassige Verarbeitung für anspruchsvolle Reisende.",
    facts: [
      { label: "Länge", value: "7,2 - 7,5 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "2 - 4" }
    ]
  },
  "profila-rs": {
    title: "Profila RS",
    text: "Sportliches Reisemobil mit dynamischer Linie. Kombiniert Fahrkomfort mit praktischer Raumnutzung für aktive Reisende.",
    facts: [
      { label: "Länge", value: "7,1 - 7,5 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "contura": {
    title: "Contura",
    text: "Elegantes Wohnmobil mit großzügigem Raumkonzept. Bietet Wohnkomfort auf höchstem Niveau mit durchdachten Details.",
    facts: [
      { label: "Länge", value: "7,6 - 8,0 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "integra-line-fiat": {
    title: "Integra Line – Fiat",
    text: "Vollintegriertes Reisemobil auf Fiat-Basis. Überzeugt durch harmonisches Raumkonzept und hochwertige Verarbeitung.",
    facts: [
      { label: "Länge", value: "7,1 - 7,6 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "integra-line-gt-mercedes": {
    title: "Integra Line GT – Mercedes",
    text: "Premium-Vollintegrierter auf Mercedes-Basis mit GT-Ausstattung. Vereint Luxus und Funktionalität für höchste Ansprüche.",
    facts: [
      { label: "Länge", value: "7,2 - 7,7 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  },
  "integra": {
    title: "Integra",
    text: "Luxuriöses Flaggschiff mit exklusiver Ausstattung. Bietet maximalen Wohnkomfort für anspruchsvolle Reisende auf langen Strecken.",
    facts: [
      { label: "Länge", value: "7,9 - 8,9 m" },
      { label: "Sitzplätze", value: "4" },
      { label: "Schlafplätze", value: "4" }
    ]
  }
};

// Model preview component for the hero section
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
      {/* Grey dummy image placeholder */}
      <div className="bg-gray-200 w-full aspect-video mb-4"></div>
      
      <h3 className="text-xl font-medium mb-2">{modelData.title}</h3>
      
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {modelData.text}
      </p>
      
      <div className="grid grid-cols-3 gap-4 mb-6 text-xs">
        {modelData.facts.map((fact, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-medium text-gray-900 mb-1">{fact.label}</span>
            <span className="text-gray-600">{fact.value}</span>
          </div>
        ))}
      </div>
      
      <Button size="sm" variant="outline" className="w-full" asChild>
        <Link to={`/modelle/${modelId}`} onClick={onClose}>
          Mehr erfahren
        </Link>
      </Button>
    </div>
  );
};

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const { setActiveOverlay } = useOverlay();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [activeModel, setActiveModel] = useState<string | null>("van"); // Default to first model
  
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

  // Array of all model IDs for easy iteration
  const modelIds = Object.keys(modelPreviewData);

  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
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
        
        {/* 1. Wohnmobile & Vans - Full-width Hero Section */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-6">Wohnmobile & Vans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left side: Model list */}
            <div className="md:col-span-1">
              <ul className="space-y-4">
                {modelIds.map(modelId => {
                  const model = modelPreviewData[modelId as keyof typeof modelPreviewData];
                  return (
                    <li key={modelId}>
                      <button 
                        className={`flex items-center w-full text-left ${activeModel === modelId ? 'text-blue-600' : ''} hover:text-blue-600`}
                        onClick={() => handleModelSelect(modelId)}
                      >
                        {/* Small dummy image */}
                        <div className="bg-gray-200 w-16 h-12 mr-3 flex-shrink-0"></div>
                        <span>{model.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            {/* Right side: Preview for selected model */}
            <div className="md:col-span-2">
              <ModelPreviewHero modelId={activeModel} onClose={onClose} />
            </div>
          </div>
          
          {/* Prominent Links below hero section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Button variant="outline" asChild>
              <Link to="/modellvergleich" onClick={onClose}>
                Modelle vergleichen
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <a 
                href="https://konfigurator.euramobil.de" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={onClose}
              >
                Jetzt konfigurieren
              </a>
            </Button>
            
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/berater" onClick={onClose}>
                Beratung starten
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Separator between hero and regular menu sections */}
        <Separator className="my-8" />
        
        {/* 2. Regular Menu Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
          {/* Qualität & Vorteile */}
          <div>
            <h3 className="font-medium text-lg mb-4">Qualität & Vorteile</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/qualitaet/sealed-structure" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Sealed Structure
                </Link>
              </li>
              <li>
                <Link 
                  to="/qualitaet/winterfestigkeit" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Winterfestigkeit
                </Link>
              </li>
              <li>
                <Link 
                  to="/qualitaet/leichtbau" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Leichtbau
                </Link>
              </li>
              <li>
                <Link 
                  to="/qualitaet/moebelbau" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Möbelbau
                </Link>
              </li>
              <li>
                <Link 
                  to="/qualitaet/doppelboden" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Doppelboden
                </Link>
              </li>
              <li>
                <Link 
                  to="/qualitaet/schlafkomfort" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Schlafkomfort
                </Link>
              </li>
              <li>
                <Link 
                  to="/qualitaet/kuechenwelt" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Küchen
                </Link>
              </li>
              <li>
                <Link 
                  to="/qualitaet/wellnessbereich" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Wellness
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Kaufen & Mieten */}
          <div>
            <h3 className="font-medium text-lg mb-4">Kaufen & Mieten</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/berater" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Wohnmobilberater
                </Link>
              </li>
              <li>
                <a 
                  href="https://konfigurator.euramobil.de" 
                  onClick={onClose}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <span>Konfigurator</span>
                  <ExternalLink className="ml-1 h-3.5 w-3.5 text-gray-400" />
                </a>
              </li>
              <li>
                <Link 
                  to="/mietfahrzeuge" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Mietfahrzeuge
                </Link>
              </li>
              <li>
                <Link 
                  to="/gebrauchtfahrzeuge" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Gebrauchtfahrzeuge
                </Link>
              </li>
              <li>
                <Link 
                  to="/haendler" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Händlersuche
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Unternehmen */}
          <div>
            <h3 className="font-medium text-lg mb-4">Unternehmen</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/unternehmen" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Über EURA MOBIL
                </Link>
              </li>
              <li>
                <Link 
                  to="/unternehmen/werksfuehrung" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Werksführung
                </Link>
              </li>
              <li>
                <Link 
                  to="/unternehmen/club" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Club
                </Link>
              </li>
              <li>
                <Link 
                  to="/unternehmen/videos" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Videos
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Karriere & Service */}
          <div>
            <h3 className="font-medium text-lg mb-4">Karriere & Service</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/karriere" 
                  onClick={onClose}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <span>Stellenangebote</span>
                  <ExternalLink className="ml-1 h-3.5 w-3.5 text-gray-400" />
                </a>
              </li>
              <li>
                <Link 
                  to="/karriere/ausbildung" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Ausbildung
                </Link>
              </li>
              <li>
                <Link 
                  to="/kontakt" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link 
                  to="/garantie" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Garantie
                </Link>
              </li>
              <li>
                <Link 
                  to="/newsletter" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link 
                  to="/downloads" 
                  onClick={onClose}
                  className="hover:text-blue-600 transition-colors"
                >
                  Downloads
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer area with legal links, social media, and language selector */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Legal links */}
            <div className="mb-6 md:mb-0">
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                <li>
                  <Link 
                    to="/impressum" 
                    onClick={onClose}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/datenschutz" 
                    onClick={onClose}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/agb" 
                    onClick={onClose}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Language selector and social media */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Language selector */}
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
              
              {/* Social media icons */}
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
        
        {/* Fixed prominent CTA at the bottom */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden">
          <Button className="w-full" asChild>
            <Link to="/berater" onClick={onClose}>
              Jetzt Beratung starten
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FullscreenMenu;
