
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Calendar, ExternalLink } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useOverlay } from "@/context/OverlayContext";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const { setActiveOverlay } = useOverlay();

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto">
      <div className="container mx-auto px-4 py-6 h-full">
        <div className="flex flex-col h-full">
          {/* Top Area with Logo and Close - stays in the same position */}
          <div className="mb-8">
            <Link to="/" onClick={onClose} className="font-bold text-xl">
              EURA MOBIL
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Section 1: Entdecken (Main Navigation) */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Entdecken</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Link 
                  to="/wohnmobiltypen" 
                  onClick={onClose}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  Wohnmobiltypen im Überblick
                </Link>
                <Link 
                  to="/modelle" 
                  onClick={onClose}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  Alle Modelle entdecken
                </Link>
                <Link 
                  to="/modellvergleich" 
                  onClick={onClose}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  Modellvergleich starten
                </Link>
                <Link 
                  to="/berater" 
                  onClick={onClose}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  Wohnmobilberater
                </Link>
                <a 
                  href="https://konfigurator.euramobil.de" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="text-lg font-medium hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                  Konfigurator
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link 
                  to="/haendler" 
                  onClick={onClose}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  Händler in Ihrer Nähe
                </Link>
              </div>
            </div>
            
            {/* Section 2: Informationen (compact text list) */}
            <div>
              <h2 className="text-xl font-bold mb-4">Informationen</h2>
              <Separator className="mb-4" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <div>
                  <h3 className="font-medium mb-3">Qualität & Vorteile</h3>
                  <ul className="space-y-2">
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
                
                <div>
                  <h3 className="font-medium mb-3">Service</h3>
                  <ul className="space-y-2">
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
                        to="/downloads" 
                        onClick={onClose}
                        className="hover:text-blue-600 transition-colors"
                      >
                        Downloads
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
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Section 3: Unternehmen & Karriere */}
            <div>
              <h2 className="text-xl font-bold mb-4">Unternehmen & Karriere</h2>
              <Separator className="mb-4" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <div>
                  <ul className="space-y-2">
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
                
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="/karriere" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="hover:text-blue-600 transition-colors flex items-center gap-1"
                      >
                        Stellenangebote
                        <ExternalLink className="h-4 w-4" />
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
                    <li className="flex gap-2 flex-wrap">
                      <Link 
                        to="/impressum" 
                        onClick={onClose}
                        className="hover:text-blue-600 transition-colors text-sm"
                      >
                        Impressum
                      </Link>
                      <span className="text-gray-300">|</span>
                      <Link 
                        to="/datenschutz" 
                        onClick={onClose}
                        className="hover:text-blue-600 transition-colors text-sm"
                      >
                        Datenschutz
                      </Link>
                      <span className="text-gray-300">|</span>
                      <Link 
                        to="/agb" 
                        onClick={onClose}
                        className="hover:text-blue-600 transition-colors text-sm"
                      >
                        AGB
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom fixed area with CTA, social links and language selector */}
          <div className="mt-auto pt-12">
            <div className="border-t py-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <Select defaultValue="de">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Sprache" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="en">Englisch</SelectItem>
                    <SelectItem value="fr">Französisch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Prominent CTA button */}
              <div className="my-6 md:my-0 w-full md:w-auto">
                <Button className="w-full md:w-auto" asChild>
                  <Link to="/berater" onClick={onClose}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Jetzt Beratung starten
                  </Link>
                </Button>
              </div>
              
              {/* Social icons */}
              <div className="flex gap-6">
                <a 
                  href="https://www.instagram.com/euramobil/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-600 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.youtube.com/@euramobil" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-600 transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/EuraMobil" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-600 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenMenu;
