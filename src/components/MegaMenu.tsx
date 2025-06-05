
import React from "react";
import { Link } from "react-router-dom";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MenuLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, children, className, onClick, external = false }) => {
  if (external) {
    return (
      <a 
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cn(
          "text-sm hover:text-blue-600 transition-colors duration-200 flex items-center gap-1",
          className
        )}
      >
        {children}
        <ExternalLink className="h-3 w-3" />
      </a>
    );
  }

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

  const handleLinkClick = () => {
    setTimeout(() => onClose(), 50);
  };

  const renderMenuContent = () => {
    switch (activeMenu) {
      case "wohnmobile":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Überblick</h3>
              <div className="space-y-2">
                <div><MenuLink to="/modelle" onClick={handleLinkClick}>Modelle Overview</MenuLink></div>
                <div><MenuLink to="/wohnmobiltypen" onClick={handleLinkClick}>Wohnmobiltypen Overview</MenuLink></div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Modelle A-M</h3>
              <div className="space-y-2">
                <div><MenuLink to="/modelle/van" onClick={handleLinkClick}>Van</MenuLink></div>
                <div><MenuLink to="/modelle/activa-one" onClick={handleLinkClick}>Activa One</MenuLink></div>
                <div><MenuLink to="/modelle/profila-t-fiat" onClick={handleLinkClick}>Profila T – Fiat</MenuLink></div>
                <div><MenuLink to="/modelle/profila-rs" onClick={handleLinkClick}>Profila RS</MenuLink></div>
                <div><MenuLink to="/modelle/profila-t-mercedes" onClick={handleLinkClick}>Profila T – Mercedes</MenuLink></div>
                <div><MenuLink to="/modelle/contura" onClick={handleLinkClick}>Contura</MenuLink></div>
                <div><MenuLink to="/modelle/integra-line-fiat" onClick={handleLinkClick}>Integra Line – Fiat</MenuLink></div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Modelle N-Z</h3>
              <div className="space-y-2">
                <div><MenuLink to="/modelle/integra-line-gt-mercedes" onClick={handleLinkClick}>Integra Line GT – Mercedes</MenuLink></div>
                <div><MenuLink to="/modelle/integra" onClick={handleLinkClick}>Integra</MenuLink></div>
                <div><MenuLink to="/modelle/xtura" onClick={handleLinkClick}>Xtura</MenuLink></div>
              </div>
            </div>
          </div>
        );
      
      case "kaufen":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Beratung & Konfiguration</h3>
              <div className="space-y-2">
                <div><MenuLink to="/berater" onClick={handleLinkClick}>Wohnmobilberater</MenuLink></div>
                <div><MenuLink to="https://konfigurator.euramobil.de/" external onClick={handleLinkClick}>Konfigurator</MenuLink></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Fahrzeuge & Service</h3>
              <div className="space-y-2">
                <div><MenuLink to="https://www.drm.de/de/" external onClick={handleLinkClick}>Mietfahrzeuge</MenuLink></div>
                <div><MenuLink to="/gebrauchtfahrzeuge" onClick={handleLinkClick}>Gebrauchtfahrzeuge</MenuLink></div>
                <div><MenuLink to="/finanzierung-leasing" onClick={handleLinkClick}>Finanzierung & Leasing</MenuLink></div>
                <div><MenuLink to="/haendler" onClick={handleLinkClick}>Händlersuche</MenuLink></div>
              </div>
            </div>
          </div>
        );
      
      case "qualitaet":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Überblick</h3>
              <div className="space-y-2">
                <div><MenuLink to="/qualitaet" onClick={handleLinkClick}>Alle Vorteile im Überblick</MenuLink></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Konstruktion & Technik</h3>
              <div className="space-y-2">
                <div><MenuLink to="/qualitaet/sealed-structure" onClick={handleLinkClick}>Sealed Structure</MenuLink></div>
                <div><MenuLink to="/qualitaet/winterfestigkeit" onClick={handleLinkClick}>Winterfestigkeit</MenuLink></div>
                <div><MenuLink to="/qualitaet/leichtbau" onClick={handleLinkClick}>Leichtbau</MenuLink></div>
                <div><MenuLink to="/qualitaet/moebelbau" onClick={handleLinkClick}>Möbelbau</MenuLink></div>
                <div><MenuLink to="/qualitaet/doppelboden" onClick={handleLinkClick}>Doppelboden</MenuLink></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Wohnen & Komfort</h3>
              <div className="space-y-2">
                <div><MenuLink to="/qualitaet/schlafkomfort" onClick={handleLinkClick}>Schlafkomfort</MenuLink></div>
                <div><MenuLink to="/qualitaet/kuechenwelt" onClick={handleLinkClick}>Küchenwelt</MenuLink></div>
                <div><MenuLink to="/qualitaet/wellnessbereich" onClick={handleLinkClick}>Wellnessbereich</MenuLink></div>
              </div>
            </div>
          </div>
        );
      
      case "unternehmen":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Über uns</h3>
              <div className="space-y-2">
                <div><MenuLink to="/unternehmen" onClick={handleLinkClick}>Über EURA MOBIL</MenuLink></div>
                <div><MenuLink to="/werksfuehrung" onClick={handleLinkClick}>Werksführung</MenuLink></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Community</h3>
              <div className="space-y-2">
                <div><MenuLink to="https://reisemobil-forum.de/" external onClick={handleLinkClick}>Reisemobil Forum</MenuLink></div>
              </div>
            </div>
          </div>
        );

      case "karriere":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Jobs & Karriere</h3>
              <div className="space-y-2">
                <div><MenuLink to="/karriere" onClick={handleLinkClick}>Karriere</MenuLink></div>
                <div><MenuLink to="/stellenangebote" onClick={handleLinkClick}>Stellenangebote</MenuLink></div>
                <div><MenuLink to="/ausbildung" onClick={handleLinkClick}>Ausbildung</MenuLink></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Kundenservice</h3>
              <div className="space-y-2">
                <div><MenuLink to="/kontakt" onClick={handleLinkClick}>Kontakt</MenuLink></div>
                <div><MenuLink to="/garantie" onClick={handleLinkClick}>Garantie</MenuLink></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Informationen</h3>
              <div className="space-y-2">
                <div><MenuLink to="/newsletter" onClick={handleLinkClick}>Newsletter</MenuLink></div>
                <div><MenuLink to="/downloads" onClick={handleLinkClick}>Downloads</MenuLink></div>
              </div>
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
      return "Karriere & Service";
    default:
      return "";
  }
}

export default MegaMenu;
