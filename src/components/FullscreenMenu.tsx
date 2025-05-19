
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube, Calendar, X } from "lucide-react";
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

  const handleStartBerater = () => {
    onClose(); // Close the menu first
    setTimeout(() => {
      // On the konfigurator page, open Berater fullscreen
      const isKonfiguratorPage = location.pathname === '/konfigurator';
      startBeraterFlow({
        mode: isKonfiguratorPage ? "fullpage" : "dialog"
      });
    }, 150); // Small delay to ensure smooth transition
  };

  // Check if we're on the konfigurator page
  const isKonfiguratorPage = location.pathname === '/konfigurator';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto">
      <div className="container mx-auto px-4 py-6 h-full">
        <div className="flex flex-col h-full">
          {/* Top Area with Logo and Close */}
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
          
          {/* CTA Button moved out of the flex row */}
          <div className="mb-8">
            <Button className="w-full" onClick={handleStartBerater}>
              <Calendar className="mr-2 h-4 w-4" />
              {isKonfiguratorPage ? "Wohnmobil finden" : "Jetzt Beratung vereinbaren"}
            </Button>
          </div>
          
          <div className="overflow-y-auto flex-grow">
            {/* Scrollable Menu Sections */}
            
            {/* 01 Wohnmobile & Vans */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">01 Wohnmobile & Vans</h2>
              <Separator className="mb-4" />
              <ul className="space-y-3">
                <li><Link to="/modelle/activa-one" onClick={onClose}>Activa One</Link></li>
                <li><Link to="/modelle/xtura" onClick={onClose}>Xtura</Link></li>
                <li><Link to="/modelle/profila-t-fiat" onClick={onClose}>Profila T – Fiat</Link></li>
                <li><Link to="/modelle/profila-t-mercedes" onClick={onClose}>Profila T – Mercedes</Link></li>
                <li><Link to="/modelle/profila-rs" onClick={onClose}>Profila RS</Link></li>
                <li><Link to="/modelle/contura" onClick={onClose}>Contura</Link></li>
                <li><Link to="/modelle/integra-line-fiat" onClick={onClose}>Integra Line – Fiat</Link></li>
                <li><Link to="/modelle/integra-line-gt-mercedes" onClick={onClose}>Integra Line GT – Mercedes</Link></li>
                <li><Link to="/modelle/integra" onClick={onClose}>Integra</Link></li>
              </ul>
            </div>

            {/* 02 Kaufen & Mieten */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">02 Kaufen & Mieten</h2>
              <Separator className="mb-4" />
              <ul className="space-y-3">
                <li><Link to="/berater?step=1" onClick={onClose}>Wohnmobilberater</Link></li>
                <li><Link to="/konfigurator" onClick={onClose}>Konfigurator</Link></li>
                <li><Link to="/mietfahrzeuge" onClick={onClose}>Mietfahrzeuge</Link></li>
                <li><Link to="/gebrauchtfahrzeuge" onClick={onClose}>Gebrauchtfahrzeuge</Link></li>
                <li><Link to="/haendler" onClick={onClose}>Händlersuche</Link></li>
              </ul>
            </div>

            {/* 03 Qualität & Vorteile */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">03 Qualität & Vorteile</h2>
              <Separator className="mb-4" />
              <ul className="space-y-3">
                <li><Link to="/qualitaet/sealed-structure" onClick={onClose}>Sealed Structure</Link></li>
                <li><Link to="/qualitaet/winterfestigkeit" onClick={onClose}>Winterfestigkeit</Link></li>
                <li><Link to="/qualitaet/leichtbau" onClick={onClose}>Leichtbau</Link></li>
                <li><Link to="/qualitaet/moebelbau" onClick={onClose}>Möbelbau</Link></li>
                <li><Link to="/qualitaet/doppelboden" onClick={onClose}>Doppelboden</Link></li>
                <li><Link to="/qualitaet/schlafkomfort" onClick={onClose}>Schlafkomfort</Link></li>
                <li><Link to="/qualitaet/kuechenwelt" onClick={onClose}>Küchen</Link></li>
                <li><Link to="/qualitaet/wellnessbereich" onClick={onClose}>Wellness</Link></li>
              </ul>
            </div>

            {/* 04 Unternehmen */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">04 Unternehmen</h2>
              <Separator className="mb-4" />
              <ul className="space-y-3">
                <li><Link to="/unternehmen" onClick={onClose}>Unternehmen</Link></li>
                <li><Link to="/unternehmen/werksfuehrung" onClick={onClose}>Werksführung</Link></li>
                <li><Link to="/unternehmen/forum" onClick={onClose}>Forum</Link></li>
                <li><Link to="/unternehmen/club" onClick={onClose}>Club</Link></li>
                <li><Link to="/unternehmen/card" onClick={onClose}>Card</Link></li>
                <li><Link to="/unternehmen/videos" onClick={onClose}>Videos</Link></li>
              </ul>
            </div>

            {/* 05 Karriere & Service */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">05 Karriere & Service</h2>
              <Separator className="mb-4" />
              <ul className="space-y-3">
                <li><Link to="/karriere" onClick={onClose}>Stellenangebote</Link></li>
                <li><Link to="/karriere/ausbildung" onClick={onClose}>Ausbildung</Link></li>
                <li><Link to="/kontakt" onClick={onClose}>Kontakt</Link></li>
                <li><Link to="/garantie" onClick={onClose}>Garantie</Link></li>
                <li><Link to="/newsletter" onClick={onClose}>Newsletter</Link></li>
                <li><Link to="/downloads" onClick={onClose}>Downloads</Link></li>
              </ul>
            </div>

            {/* 06 Social Links */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">06 Social Links</h2>
              <Separator className="mb-4" />
              <div className="flex gap-6">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="p-2">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="p-2">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="p-2">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            {/* Language Selector moved to the bottom */}
            <div className="mb-8">
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
  );
};

export default FullscreenMenu;
