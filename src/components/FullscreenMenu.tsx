import React from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, Facebook, Instagram, Youtube, Compare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MenuLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, children, className }) => (
  <Link 
    to={to}
    className={cn(
      "text-gray-800 hover:text-blue-600 transition-colors duration-200",
      className
    )}
  >
    {children}
  </Link>
);

interface MenuSectionProps {
  title: string;
  children: React.ReactNode;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const [languageOpen, setLanguageOpen] = React.useState(false);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-end mb-4">
          <Button variant="ghost" size="icon" onClick={onClose} className="h-10 w-10">
            <X className="h-6 w-6" />
            <span className="sr-only">Schließen</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MenuSection title="Wohnmobile & Vans">
            <div>
              <h3 className="font-medium mb-2">Modelle:</h3>
              <div className="flex flex-col space-y-1 ml-3">
                <MenuLink to="/modelle/activa-one">Activa One</MenuLink>
                <MenuLink to="/modelle/xtura">Xtura</MenuLink>
                <MenuLink to="/modelle/integra">Integra</MenuLink>
                <MenuLink to="/modelle/profila-t">Profila T</MenuLink>
                <MenuLink to="/modelle/profila-rs">Profila RS</MenuLink>
                <MenuLink to="/modelle/contura">Contura</MenuLink>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Wohnmobiltypen:</h3>
              <div className="flex flex-col space-y-1 ml-3">
                <MenuLink to="/wohnmobiltypen/alkoven">Alkoven</MenuLink>
                <MenuLink to="/wohnmobiltypen/teilintegriert">Teilintegriert</MenuLink>
                <MenuLink to="/wohnmobiltypen/integriert">Integriert</MenuLink>
                <MenuLink to="/wohnmobiltypen/vans">Vans</MenuLink>
              </div>
            </div>
            <div className="flex mt-3 items-center">
              <Compare className="h-4 w-4 mr-2" />
              <MenuLink to="/modellvergleich">Modell vergleichen</MenuLink>
            </div>
          </MenuSection>

          <MenuSection title="Kaufen & Mieten">
            <div className="flex flex-col space-y-2 ml-3">
              <MenuLink to="/berater">Wohnmobilberater</MenuLink>
              <MenuLink to="/konfigurator">Konfigurator</MenuLink>
              <MenuLink to="/mietfahrzeuge">Mietfahrzeuge</MenuLink>
              <MenuLink to="/gebrauchtfahrzeuge">Gebrauchtfahrzeuge</MenuLink>
              <MenuLink to="/haendler">Händlersuche</MenuLink>
            </div>
          </MenuSection>

          <MenuSection title="Qualität & Vorteile">
            <div className="flex flex-col space-y-2 ml-3">
              <MenuLink to="/qualitaet/sealed-structure">Sealed Structure</MenuLink>
              <MenuLink to="/qualitaet/winterfestigkeit">Winterfestigkeit</MenuLink>
              <MenuLink to="/qualitaet/leichtbau">Leichtbauarchitektur</MenuLink>
              <MenuLink to="/qualitaet/moebelbau">Möbelbau</MenuLink>
              <MenuLink to="/qualitaet/doppelboden">Doppelboden</MenuLink>
              <MenuLink to="/qualitaet/schlafkomfort">Schlafkomfort</MenuLink>
              <MenuLink to="/qualitaet/kuechenwelt">Küchen</MenuLink>
              <MenuLink to="/qualitaet/wellnessbereich">Wellness</MenuLink>
            </div>
          </MenuSection>

          <MenuSection title="Unternehmen">
            <div className="flex flex-col space-y-2 ml-3">
              <MenuLink to="/unternehmen">Unternehmen</MenuLink>
              <MenuLink to="/werksbesichtigung">Werksführung</MenuLink>
              <MenuLink to="/reisemobil-forum">Reisemobil Forum</MenuLink>
              <MenuLink to="/eura-mobil-card">Eura Mobil Card</MenuLink>
              <MenuLink to="/eura-mobil-club">Eura Mobil Club</MenuLink>
              <MenuLink to="/videos">Videos</MenuLink>
            </div>
          </MenuSection>

          <MenuSection title="Karriere">
            <div className="flex flex-col space-y-2 ml-3">
              <MenuLink to="/karriere/stellenangebote">Stellenangebote</MenuLink>
              <MenuLink to="/karriere/ausbildung">Ausbildung & Praktikum</MenuLink>
            </div>
          </MenuSection>

          <MenuSection title="Service">
            <div className="flex flex-col space-y-2 ml-3">
              <MenuLink to="/kontakt">Kontakt</MenuLink>
              <MenuLink to="/downloads">Downloads</MenuLink>
              <MenuLink to="/newsletter">Newsletter</MenuLink>
              <MenuLink to="/garantie">Garantie</MenuLink>
              <MenuLink to="/finanzierung-leasing">Finanzierung & Leasing</MenuLink>
            </div>
          </MenuSection>
        </div>
        
        {/* Menu extras */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          {/* Contact block */}
          <div className="mb-6">
            <h3 className="font-bold mb-3">Kontakt</h3>
            <div className="text-sm">
              <p>Eura Mobil GmbH</p>
              <p>Kreuznacher Straße 78</p>
              <p>55576 Sprendlingen / Rhh.</p>
              <p className="mt-2">Tel: +49 6701 20 30</p>
              <p>E-Mail: info@euramobil.de</p>
            </div>
          </div>
          
          {/* Language selector */}
          <div className="mb-6">
            <h3 className="font-bold mb-3">Sprache</h3>
            <div className="relative">
              <Button 
                variant="outline" 
                className="flex items-center justify-between w-48"
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                <span>Deutsch</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", languageOpen ? "rotate-180" : "")} />
              </Button>
              
              {languageOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Deutsch</button>
                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Englisch</button>
                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Französisch</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Social icons */}
          <div>
            <h3 className="font-bold mb-3">Social Media</h3>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenMenu;
