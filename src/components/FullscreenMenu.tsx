
import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const FullscreenMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-40 overflow-y-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* First Column - Qualität & Vorteile */}
          <div>
            <h2 className="font-bold text-xl mb-6">Qualität & Vorteile</h2>
            <ul className="space-y-4">
              <li>
                <Link to="/qualitaet" className="hover:text-blue-600" onClick={onClose}>
                  Alle Vorteile im Überblick
                </Link>
              </li>
              <li>
                <Link to="/qualitaet/sealed-structure" className="hover:text-blue-600" onClick={onClose}>
                  Sealed Structure
                </Link>
              </li>
              <li>
                <Link to="/qualitaet/winterfestigkeit" className="hover:text-blue-600" onClick={onClose}>
                  Winterfestigkeit
                </Link>
              </li>
              <li>
                <Link to="/qualitaet/leichtbau" className="hover:text-blue-600" onClick={onClose}>
                  Leichtbau
                </Link>
              </li>
              <li>
                <Link to="/qualitaet/moebelbau" className="hover:text-blue-600" onClick={onClose}>
                  Möbelbau
                </Link>
              </li>
              <li>
                <Link to="/qualitaet/doppelboden" className="hover:text-blue-600" onClick={onClose}>
                  Doppelboden
                </Link>
              </li>
              <li>
                <Link to="/qualitaet/schlafkomfort" className="hover:text-blue-600" onClick={onClose}>
                  Schlafkomfort
                </Link>
              </li>
              <li>
                <Link to="/qualitaet/kuechenwelt" className="hover:text-blue-600" onClick={onClose}>
                  Küchen
                </Link>
              </li>
              <li>
                <Link to="/qualitaet/wellnessbereich" className="hover:text-blue-600" onClick={onClose}>
                  Wellness
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Second Column - Kaufen & Mieten */}
          <div>
            <h2 className="font-bold text-xl mb-6">Kaufen & Mieten</h2>
            <ul className="space-y-4">
              <li>
                <Link to="/berater" className="hover:text-blue-600" onClick={onClose}>
                  Wohnmobilberater
                </Link>
              </li>
              <li>
                <Link to="/konfigurator" className="hover:text-blue-600" onClick={onClose}>
                  Konfigurator
                </Link>
                <ExternalLink className="inline-block ml-1 h-4 w-4" />
              </li>
              <li>
                <Link to="/mietfahrzeuge" className="hover:text-blue-600" onClick={onClose}>
                  Mietfahrzeuge
                </Link>
              </li>
              <li>
                <Link to="/gebrauchtfahrzeuge" className="hover:text-blue-600" onClick={onClose}>
                  Gebrauchtfahrzeuge
                </Link>
              </li>
              <li>
                <Link to="/haendler" className="hover:text-blue-600" onClick={onClose}>
                  Händlersuche
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Third Column - Unternehmen */}
          <div>
            <h2 className="font-bold text-xl mb-6">Unternehmen</h2>
            <ul className="space-y-4">
              <li>
                <Link to="/unternehmen#ueber-uns" className="hover:text-blue-600" onClick={onClose}>
                  Über EURA MOBIL
                </Link>
              </li>
              <li>
                <Link to="/werksbesichtigung" className="hover:text-blue-600" onClick={onClose}>
                  Werksführung
                </Link>
              </li>
              <li>
                <Link to="/reisemobil-forum" className="hover:text-blue-600" onClick={onClose}>
                  Reisemobil Forum
                </Link>
              </li>
              <li>
                <Link to="/eura-mobil-club" className="hover:text-blue-600" onClick={onClose}>
                  Eura Mobil Club
                </Link>
              </li>
              <li>
                <Link to="/eura-mobil-card" className="hover:text-blue-600" onClick={onClose}>
                  Eura Mobil Card
                </Link>
              </li>
              <li>
                <Link to="/videos" className="hover:text-blue-600" onClick={onClose}>
                  Videos
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Fourth Column - Karriere & Service */}
          <div>
            <h2 className="font-bold text-xl mb-6">Karriere & Service</h2>
            <ul className="space-y-4">
              <li>
                <Link to="/karriere/stellenangebote" className="hover:text-blue-600" onClick={onClose}>
                  Stellenangebote
                </Link>
                <ExternalLink className="inline-block ml-1 h-4 w-4" />
              </li>
              <li>
                <Link to="/karriere/ausbildung" className="hover:text-blue-600" onClick={onClose}>
                  Ausbildung
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-blue-600" onClick={onClose}>
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/garantie" className="hover:text-blue-600" onClick={onClose}>
                  Garantie
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="hover:text-blue-600" onClick={onClose}>
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-blue-600" onClick={onClose}>
                  Downloads
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Close button at bottom of menu */}
        <div className="mt-10 text-center">
          <button 
            onClick={onClose}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Menü schließen
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullscreenMenu;
