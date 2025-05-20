
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube, Calendar, X, ArrowRight, ExternalLink } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useOverlay } from "@/context/OverlayContext";
import { useWohnmobilberaterTrigger } from "@/hooks/useWohnmobilberaterTrigger";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const { setActiveOverlay } = useOverlay();
  const { startBeraterFlow } = useWohnmobilberaterTrigger();
  const location = useLocation();
  
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
          
          {/* CTA Button moved below logo */}
          <div className="mb-8">
            <Button className="w-full md:w-auto" asChild>
              <Link to="/berater?step=1" onClick={onClose}>
                <Calendar className="mr-2 h-4 w-4" />
                Welches Wohnmobil passt zu mir?
              </Link>
            </Button>
          </div>
          
          <div className="overflow-y-auto flex-grow">
            {/* Enhanced Desktop Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 01 Wohnmobile & Vans */}
              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2">01 Wohnmobile & Vans</h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/modelle/activa-one" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Activa One
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/modelle/xtura" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Xtura
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/modelle/profila-t-fiat" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Profila T – Fiat
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/modelle/profila-t-mercedes" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Profila T – Mercedes
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/modelle/profila-rs" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Profila RS
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/modelle/contura" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Contura
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/modelle/integra-line-fiat" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Integra Line – Fiat
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/modelle/integra-line-gt-mercedes" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Integra Line GT – Mercedes
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/modelle/integra" 
                      onClick={onClose}
                      className="group flex items-center hover:text-blue-600 transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                      Integra
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 02 Kaufen & Mieten */}
              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2">02 Kaufen & Mieten</h2>
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
                    <Link 
                      to="/konfigurator" 
                      onClick={onClose}
                      className="group flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                        Konfigurator
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                    </Link>
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
              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2">03 Qualität & Vorteile</h2>
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
              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2">04 Unternehmen</h2>
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
              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2">05 Karriere & Service</h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/karriere" 
                      onClick={onClose}
                      className="group flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="inline-block w-1.5 h-1.5 bg-gray-400 mr-2 rounded-full"></span>
                        Stellenangebote
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                    </Link>
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
              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2">06 Social Links</h2>
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
              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
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
