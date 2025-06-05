
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenu from "./MegaMenu";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleMegaMenuToggle = (menuKey: string) => {
    if (activeMegaMenu === menuKey && megaMenuOpen) {
      setMegaMenuOpen(false);
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menuKey);
      setMegaMenuOpen(true);
    }
  };

  const handleLinkClick = () => {
    onClose();
  };

  const handleMegaMenuClose = () => {
    setMegaMenuOpen(false);
    setActiveMegaMenu(null);
  };

  return (
    <>
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
              <li>
                <button
                  onClick={() => handleMegaMenuToggle("wohnmobile")}
                  className="text-2xl font-bold hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 w-full text-left"
                >
                  Wohnmobile & Vans
                  <ChevronDown className="h-5 w-5" />
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => handleMegaMenuToggle("kaufen")}
                  className="text-2xl font-bold hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 w-full text-left"
                >
                  Kaufen & Mieten
                  <ChevronDown className="h-5 w-5" />
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => handleMegaMenuToggle("qualitaet")}
                  className="text-2xl font-bold hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 w-full text-left"
                >
                  Qualität & Vorteile
                  <ChevronDown className="h-5 w-5" />
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => handleMegaMenuToggle("unternehmen")}
                  className="text-2xl font-bold hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 w-full text-left"
                >
                  Unternehmen
                  <ChevronDown className="h-5 w-5" />
                </button>
              </li>

              <li>
                <Link
                  to="/berater"
                  onClick={handleLinkClick}
                  className="text-2xl font-bold hover:text-blue-600 transition-colors duration-200 block"
                >
                  Wohnmobilberater
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <MegaMenu
        isOpen={megaMenuOpen}
        activeMenu={activeMegaMenu}
        onClose={handleMegaMenuClose}
      />
    </>
  );
};

export default FullscreenMenu;
