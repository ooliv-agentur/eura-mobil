
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 bg-white overflow-y-auto">
      <div className="container mx-auto px-4 py-8 h-full">
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            {/* Wohnmobile & Vans */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">Wohnmobile & Vans</h2>
              <ul className="space-y-2">
                <li><Link to="/modelle" onClick={onClose}>Modelle: Activa One, Xtura, Integra etc.</Link></li>
                <li><Link to="/wohnmobiltypen" onClick={onClose}>Wohnmobiltypen: Alkoven, Teilintegriert, Integriert, Vans</Link></li>
                <li><Link to="/modellvergleich" onClick={onClose}>Modell vergleichen</Link></li>
              </ul>
            </div>

            {/* Kaufen & Mieten */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">Kaufen & Mieten</h2>
              <ul className="space-y-2">
                <li><Link to="/berater" onClick={onClose}>Wohnmobilberater</Link></li>
                <li><Link to="/konfigurator" onClick={onClose}>Konfigurator</Link></li>
                <li><Link to="/mietfahrzeuge" onClick={onClose}>Mietfahrzeuge</Link></li>
                <li><Link to="/gebrauchtfahrzeuge" onClick={onClose}>Gebrauchtfahrzeuge</Link></li>
                <li><Link to="/haendler" onClick={onClose}>Händlersuche</Link></li>
              </ul>
            </div>

            {/* Qualität & Vorteile */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">Qualität & Vorteile</h2>
              <ul className="space-y-2">
                <li><Link to="/qualitaet/sealed-structure" onClick={onClose}>Sealed Structure</Link></li>
                <li><Link to="/qualitaet/winterfestigkeit" onClick={onClose}>Winterfestigkeit</Link></li>
                <li><Link to="/qualitaet/leichtbau" onClick={onClose}>Leichtbauarchitektur</Link></li>
                <li><Link to="/qualitaet/moebelbau" onClick={onClose}>Möbelbau</Link></li>
                <li><Link to="/qualitaet/doppelboden" onClick={onClose}>Doppelboden</Link></li>
                <li><Link to="/qualitaet/schlafkomfort" onClick={onClose}>Schlafkomfort</Link></li>
                <li><Link to="/qualitaet/kuechenwelt" onClick={onClose}>Küchen</Link></li>
                <li><Link to="/qualitaet/wellnessbereich" onClick={onClose}>Wellness</Link></li>
              </ul>
            </div>

            {/* Unternehmen */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">Unternehmen</h2>
              <ul className="space-y-2">
                <li><Link to="/unternehmen" onClick={onClose}>Unternehmen</Link></li>
                <li><Link to="/unternehmen/werksfuehrung" onClick={onClose}>Werksführung</Link></li>
                <li><Link to="/unternehmen/forum" onClick={onClose}>Reisemobil Forum</Link></li>
                <li><Link to="/unternehmen/card" onClick={onClose}>Eura Mobil Card</Link></li>
                <li><Link to="/unternehmen/club" onClick={onClose}>Eura Mobil Club</Link></li>
                <li><Link to="/unternehmen/videos" onClick={onClose}>Videos</Link></li>
              </ul>
            </div>

            {/* Karriere */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">Karriere</h2>
              <ul className="space-y-2">
                <li><Link to="/karriere" onClick={onClose}>Stellenangebote</Link></li>
                <li><Link to="/karriere/ausbildung" onClick={onClose}>Ausbildung & Praktikum</Link></li>
              </ul>
            </div>

            {/* Service */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">Service</h2>
              <ul className="space-y-2">
                <li><Link to="/kontakt" onClick={onClose}>Kontakt</Link></li>
                <li><Link to="/downloads" onClick={onClose}>Downloads</Link></li>
                <li><Link to="/newsletter" onClick={onClose}>Newsletter</Link></li>
                <li><Link to="/garantie" onClick={onClose}>Garantie</Link></li>
                <li><Link to="/finanzierung" onClick={onClose}>Finanzierung & Leasing</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer section with contact and social */}
          <div className="mt-auto pt-8 border-t border-gray-200">
            {/* Contact Block */}
            <div className="mb-4">
              <p className="font-bold">EURA MOBIL GmbH</p>
              <p>Kreuznacher Straße 78</p>
              <p>55576 Sprendlingen, Deutschland</p>
              <p>Tel: +49 6701 203 0</p>
              <p>E-Mail: info@euramobil.de</p>
            </div>

            {/* Language Selection */}
            <div className="mb-4">
              <select className="px-2 py-1 border rounded">
                <option value="de">Deutsch</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenMenu;
