
import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MenuLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, children, className, onClick }) => {
  return (
    <Link 
      to={to}
      onClick={onClick}
      className={cn(
        "text-sm hover:text-blue-600 transition-colors duration-200",
        className
      )}
    >
      {children}
    </Link>
  );
};

interface MegaMenuProps {
  isOpen: boolean;
  activeMenu: string | null;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, activeMenu, onClose }) => {
  if (!isOpen) return null;

  const renderMenuContent = () => {
    switch (activeMenu) {
      case "wohnmobile":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Modelle</h3>
              <div className="space-y-2">
                {/* Updated order of models to match the specified sequence */}
                <div><MenuLink to="/modelle/van" onClick={onClose}>Van</MenuLink></div>
                <div><MenuLink to="/modelle/activa-one" onClick={onClose}>Activa One</MenuLink></div>
                <div><MenuLink to="/modelle/profila-t-fiat" onClick={onClose}>Profila T - Fiat</MenuLink></div>
                <div><MenuLink to="/modelle/profila-rs" onClick={onClose}>Profila RS</MenuLink></div>
                <div><MenuLink to="/modelle/profila-t-mercedes" onClick={onClose}>Profila T - Mercedes</MenuLink></div>
                <div><MenuLink to="/modelle/contura" onClick={onClose}>Contura</MenuLink></div>
                <div><MenuLink to="/modelle/integra-line-fiat" onClick={onClose}>Integra Line - Fiat</MenuLink></div>
                <div><MenuLink to="/modelle/integra-line-gt-mercedes" onClick={onClose}>Integra Line GT - Mercedes</MenuLink></div>
                <div><MenuLink to="/modelle/integra" onClick={onClose}>Integra</MenuLink></div>
                <div><MenuLink to="/modelle/xtura" onClick={onClose}>Xtura</MenuLink></div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Typen</h3>
              <div className="space-y-2">
                <div><MenuLink to="/wohnmobiltypen" onClick={onClose}>Wohnmobiltypen Übersicht</MenuLink></div>
                <div><MenuLink to="/wohnmobiltypen#van" onClick={onClose}>Vans</MenuLink></div>
                <div><MenuLink to="/wohnmobiltypen#alkoven" onClick={onClose}>Alkoven</MenuLink></div>
                <div><MenuLink to="/wohnmobiltypen#teilintegriert" onClick={onClose}>Teilintegriert</MenuLink></div>
                <div><MenuLink to="/wohnmobiltypen#integriert" onClick={onClose}>Integriert</MenuLink></div>
              </div>
            </div>

            <div className="hidden md:block">
              {/* Placeholder for model image */}
              <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                <span className="text-gray-400">Modellbild-Placeholder</span>
              </div>
            </div>

            <div className="col-span-1 md:col-span-3 mt-4">
              <Button variant="outline" className="w-full md:w-auto" asChild>
                <Link to="/modelle" onClick={onClose}>Alle Modelle ansehen</Link>
              </Button>
            </div>
          </div>
        );
      
      case "kaufen":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div><MenuLink to="/wohnmobiltypen" onClick={onClose}>Wohnmobiltypen Übersicht</MenuLink></div>
              <div><MenuLink to="/berater" onClick={onClose}>Wohnmobilberater</MenuLink></div>
              <div><MenuLink to="/konfigurator" onClick={onClose}>Konfigurator</MenuLink></div>
              <div><MenuLink to="/mietfahrzeuge" onClick={onClose}>Mietfahrzeuge</MenuLink></div>
              <div><MenuLink to="/gebrauchtfahrzeuge" onClick={onClose}>Gebrauchtfahrzeuge</MenuLink></div>
            </div>
            <div>
              <Button className="mt-4 w-full md:w-auto" asChild>
                <Link to="/haendler" onClick={onClose}>Jetzt Händler finden</Link>
              </Button>
            </div>
          </div>
        );
      
      case "qualitaet":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div><MenuLink to="/qualitaet/sealed-structure" onClick={onClose}>Sealed Structure</MenuLink></div>
              <div><MenuLink to="/qualitaet/winterfestigkeit" onClick={onClose}>Winterfestigkeit</MenuLink></div>
              <div><MenuLink to="/qualitaet/leichtbau" onClick={onClose}>Leichtbau</MenuLink></div>
            </div>
            <div className="space-y-2">
              <div><MenuLink to="/qualitaet/moebelbau" onClick={onClose}>Möbelbau</MenuLink></div>
              <div><MenuLink to="/qualitaet/schlafkomfort" onClick={onClose}>Schlafkomfort</MenuLink></div>
              <div><MenuLink to="/qualitaet/kuechenwelt" onClick={onClose}>Küche</MenuLink></div>
            </div>
            <div className="space-y-2">
              <div><MenuLink to="/qualitaet/doppelboden" onClick={onClose}>Doppelboden</MenuLink></div>
              <div><MenuLink to="/qualitaet/wellnessbereich" onClick={onClose}>Wellness</MenuLink></div>
            </div>
            <div className="col-span-1 md:col-span-3 mt-4">
              <Button variant="outline" className="w-full md:w-auto" asChild>
                <Link to="/qualitaet" onClick={onClose}>Alle Vorteile im Überblick</Link>
              </Button>
            </div>
          </div>
        );
      
      case "unternehmen":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div><MenuLink to="/unternehmen#ueber-uns" onClick={onClose}>Eura Mobil GmbH</MenuLink></div>
              <div><MenuLink to="/werksbesichtigung" onClick={onClose}>Werksführung</MenuLink></div>
              <div><MenuLink to="/reisemobil-forum" onClick={onClose}>Reisemobil Forum</MenuLink></div>
            </div>
            <div className="space-y-2">
              <div><MenuLink to="/eura-mobil-card" onClick={onClose}>Eura Mobil Card</MenuLink></div>
              <div><MenuLink to="/eura-mobil-club" onClick={onClose}>Eura Mobil Club</MenuLink></div>
            </div>
          </div>
        );
      
      case "karriere":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div><MenuLink to="/karriere/stellenangebote" onClick={onClose}>Stellenangebote</MenuLink></div>
              <div><MenuLink to="/karriere/ausbildung" onClick={onClose}>Ausbildung & Praktikum</MenuLink></div>
              <div><MenuLink to="/karriere/werte" onClick={onClose}>Unternehmenswerte</MenuLink></div>
            </div>
          </div>
        );
      
      case "service":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div><MenuLink to="/garantie" onClick={onClose}>Garantie</MenuLink></div>
              <div><MenuLink to="/downloads" onClick={onClose}>Downloads</MenuLink></div>
            </div>
            <div className="space-y-2">
              <div><MenuLink to="/newsletter" onClick={onClose}>Newsletter</MenuLink></div>
              <div><MenuLink to="/kontakt" onClick={onClose}>Kontakt</MenuLink></div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-end">
          <Button variant="ghost" size="icon" onClick={onClose} className="mb-6">
            <X className="h-6 w-6" />
            <span className="sr-only">Schließen</span>
          </Button>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">{getMegaMenuTitle(activeMenu)}</h2>
          {renderMenuContent()}
        </div>
      </div>
    </div>
  );
};

function getMegaMenuTitle(menuKey: string | null): string {
  switch (menuKey) {
    case "wohnmobile":
      return "Wohnmobile & Vans";
    case "kaufen":
      return "Kaufen & Mieten";
    case "qualitaet":
      return "Qualität & Vorteile";
    case "unternehmen":
      return "Unternehmen";
    case "karriere":
      return "Karriere";
    case "service":
      return "Service";
    default:
      return "";
  }
}

export default MegaMenu;
