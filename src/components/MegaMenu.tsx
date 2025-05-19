
import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MenuLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, children, className }) => {
  return (
    <Link 
      to={to}
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
                <div><MenuLink to="/modelle/activa-one">Activa One</MenuLink></div>
                <div><MenuLink to="/modelle/integra">Integra</MenuLink></div>
                <div><MenuLink to="/modelle/profila-t">Profila T</MenuLink></div>
                <div><MenuLink to="/modelle/profila-rs">Profila RS</MenuLink></div>
                <div><MenuLink to="/modelle/contura">Contura</MenuLink></div>
                <div><MenuLink to="/modelle/xtura">Xtura</MenuLink></div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Typen</h3>
              <div className="space-y-2">
                <div><MenuLink to="/wohnmobiltypen/alkoven">Alkoven</MenuLink></div>
                <div><MenuLink to="/wohnmobiltypen/teilintegriert">Teilintegriert</MenuLink></div>
                <div><MenuLink to="/wohnmobiltypen/integriert">Integriert</MenuLink></div>
                <div><MenuLink to="/wohnmobiltypen/vans">Vans</MenuLink></div>
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
                <Link to="/modelle">Alle Modelle ansehen</Link>
              </Button>
            </div>
          </div>
        );
      
      case "kaufen":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div><MenuLink to="/berater">Wohnmobilberater</MenuLink></div>
              <div><MenuLink to="/konfigurator">Konfigurator</MenuLink></div>
              <div><MenuLink to="/mietfahrzeuge">Mietfahrzeuge</MenuLink></div>
              <div><MenuLink to="/gebrauchtfahrzeuge">Gebrauchtfahrzeuge</MenuLink></div>
            </div>
            <div>
              <Button className="mt-4 w-full md:w-auto" asChild>
                <Link to="/haendler">Jetzt Händler finden</Link>
              </Button>
            </div>
          </div>
        );
      
      case "qualitaet":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div><MenuLink to="/qualitaet/sealed-structure">Sealed Structure</MenuLink></div>
              <div><MenuLink to="/qualitaet/winterfestigkeit">Winterfestigkeit</MenuLink></div>
              <div><MenuLink to="/qualitaet/leichtbau">Leichtbau</MenuLink></div>
            </div>
            <div className="space-y-2">
              <div><MenuLink to="/qualitaet/moebelbau">Möbelbau</MenuLink></div>
              <div><MenuLink to="/qualitaet/schlafkomfort">Schlafkomfort</MenuLink></div>
              <div><MenuLink to="/qualitaet/kuechenwelt">Küche</MenuLink></div>
            </div>
            <div className="space-y-2">
              <div><MenuLink to="/qualitaet/doppelboden">Doppelboden</MenuLink></div>
              <div><MenuLink to="/qualitaet/wellnessbereich">Wellness</MenuLink></div>
            </div>
            <div className="col-span-1 md:col-span-3 mt-4">
              <Button variant="outline" className="w-full md:w-auto" asChild>
                <Link to="/qualitaet">Alle Vorteile im Überblick</Link>
              </Button>
            </div>
          </div>
        );
      
      case "unternehmen":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div><MenuLink to="/unternehmen#ueber-uns">Eura Mobil GmbH</MenuLink></div>
              <div><MenuLink to="/werksbesichtigung">Werksführung</MenuLink></div>
              <div><MenuLink to="/reisemobil-forum">Reisemobil Forum</MenuLink></div>
            </div>
            <div className="space-y-2">
              <div><MenuLink to="/eura-mobil-card">Eura Mobil Card</MenuLink></div>
              <div><MenuLink to="/eura-mobil-club">Eura Mobil Club</MenuLink></div>
            </div>
          </div>
        );
      
      case "karriere":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div><MenuLink to="/karriere/stellenangebote">Stellenangebote</MenuLink></div>
              <div><MenuLink to="/karriere/ausbildung">Ausbildung & Praktikum</MenuLink></div>
              <div><MenuLink to="/karriere/werte">Unternehmenswerte</MenuLink></div>
            </div>
          </div>
        );
      
      case "service":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div><MenuLink to="/garantie">Garantie</MenuLink></div>
              <div><MenuLink to="/downloads">Downloads</MenuLink></div>
            </div>
            <div className="space-y-2">
              <div><MenuLink to="/newsletter">Newsletter</MenuLink></div>
              <div><MenuLink to="/kontakt">Kontakt</MenuLink></div>
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
