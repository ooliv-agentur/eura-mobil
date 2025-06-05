
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDropdownToggle = (menuKey: string) => {
    setOpenDropdown(openDropdown === menuKey ? null : menuKey);
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white z-[100] overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-8">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
            <span className="sr-only">Menü schließen</span>
          </Button>
        </div>

        <nav className="max-w-4xl mx-auto">
          <ul className="space-y-6">
            {/* Wohnmobile & Vans */}
            <li>
              <button
                onClick={() => handleDropdownToggle("wohnmobile")}
                className="text-2xl font-bold hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 w-full text-left"
              >
                Wohnmobile & Vans
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${
                    openDropdown === "wohnmobile" ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openDropdown === "wohnmobile" && (
                <div className="mt-4 ml-6 space-y-2">
                  <div><Link to="/modelle" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Modelle Overview</Link></div>
                  <div><Link to="/wohnmobiltypen" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Wohnmobiltypen Overview</Link></div>
                  <div><Link to="/modelle/van" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Van</Link></div>
                  <div><Link to="/modelle/activa-one" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Activa One</Link></div>
                  <div><Link to="/modelle/profila-t-fiat" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Profila T – Fiat</Link></div>
                  <div><Link to="/modelle/profila-rs" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Profila RS</Link></div>
                  <div><Link to="/modelle/profila-t-mercedes" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Profila T – Mercedes</Link></div>
                  <div><Link to="/modelle/contura" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Contura</Link></div>
                  <div><Link to="/modelle/integra-line-fiat" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Integra Line – Fiat</Link></div>
                  <div><Link to="/modelle/integra-line-gt-mercedes" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Integra Line GT – Mercedes</Link></div>
                  <div><Link to="/modelle/integra" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Integra</Link></div>
                  <div><Link to="/modelle/xtura" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Xtura</Link></div>
                </div>
              )}
            </li>
            
            {/* Kaufen & Mieten */}
            <li>
              <button
                onClick={() => handleDropdownToggle("kaufen")}
                className="text-2xl font-bold hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 w-full text-left"
              >
                Kaufen & Mieten
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${
                    openDropdown === "kaufen" ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openDropdown === "kaufen" && (
                <div className="mt-4 ml-6 space-y-2">
                  <div><Link to="/berater" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Wohnmobilberater</Link></div>
                  <div><a href="https://konfigurator.euramobil.de/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-600">Konfigurator</a></div>
                  <div><a href="https://www.drm.de/de/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-600">Mietfahrzeuge</a></div>
                  <div><Link to="/gebrauchtfahrzeuge" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Gebrauchtfahrzeuge</Link></div>
                  <div><Link to="/finanzierung-leasing" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Finanzierung & Leasing</Link></div>
                  <div><Link to="/haendler" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Händlersuche</Link></div>
                </div>
              )}
            </li>
            
            {/* Qualität & Vorteile */}
            <li>
              <button
                onClick={() => handleDropdownToggle("qualitaet")}
                className="text-2xl font-bold hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 w-full text-left"
              >
                Qualität & Vorteile
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${
                    openDropdown === "qualitaet" ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openDropdown === "qualitaet" && (
                <div className="mt-4 ml-6 space-y-2">
                  <div><Link to="/qualitaet" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Alle Vorteile im Überblick</Link></div>
                  <div><Link to="/qualitaet/sealed-structure" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Sealed Structure</Link></div>
                  <div><Link to="/qualitaet/winterfestigkeit" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Winterfestigkeit</Link></div>
                  <div><Link to="/qualitaet/leichtbau" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Leichtbau</Link></div>
                  <div><Link to="/qualitaet/moebelbau" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Möbelbau</Link></div>
                  <div><Link to="/qualitaet/doppelboden" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Doppelboden</Link></div>
                  <div><Link to="/qualitaet/schlafkomfort" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Schlafkomfort</Link></div>
                  <div><Link to="/qualitaet/kuechenwelt" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Küchenwelt</Link></div>
                  <div><Link to="/qualitaet/wellnessbereich" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Wellnessbereich</Link></div>
                </div>
              )}
            </li>
            
            {/* Unternehmen */}
            <li>
              <button
                onClick={() => handleDropdownToggle("unternehmen")}
                className="text-2xl font-bold hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 w-full text-left"
              >
                Unternehmen
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${
                    openDropdown === "unternehmen" ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openDropdown === "unternehmen" && (
                <div className="mt-4 ml-6 space-y-2">
                  <div><Link to="/unternehmen" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Über EURA MOBIL</Link></div>
                  <div><Link to="/werksfuehrung" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Werksführung</Link></div>
                  <div><a href="https://reisemobil-forum.de/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-600">Reisemobil Forum</a></div>
                </div>
              )}
            </li>

            {/* Karriere & Service */}
            <li>
              <button
                onClick={() => handleDropdownToggle("karriere")}
                className="text-2xl font-bold hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 w-full text-left"
              >
                Karriere & Service
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${
                    openDropdown === "karriere" ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openDropdown === "karriere" && (
                <div className="mt-4 ml-6 space-y-2">
                  <div><Link to="/karriere" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Karriere</Link></div>
                  <div><Link to="/stellenangebote" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Stellenangebote</Link></div>
                  <div><Link to="/ausbildung" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Ausbildung</Link></div>
                  <div><Link to="/kontakt" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Kontakt</Link></div>
                  <div><Link to="/garantie" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Garantie</Link></div>
                  <div><Link to="/newsletter" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Newsletter</Link></div>
                  <div><Link to="/downloads" onClick={handleLinkClick} className="text-lg hover:text-blue-600">Downloads</Link></div>
                </div>
              )}
            </li>
          </ul>

          {/* Language Switcher at Bottom */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Sprache:</span>
              <Link 
                to="/" 
                className="ml-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                Eura Mobil International
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FullscreenMenu;
