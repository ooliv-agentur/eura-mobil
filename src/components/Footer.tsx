

import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section - Added above the grid */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h3 className="font-bold mb-3">EURA Mobil GmbH</h3>
              <div className="space-y-3 md:space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                  <span className="text-gray-600">Kreuznacher Str. 78, 55576 Sprendlingen, Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <a href="tel:+4967012030" className="text-gray-600 hover:text-blue-600">+49 6701 20 30</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a href="mailto:info@euramobil.de" className="text-gray-600 hover:text-blue-600">info@euramobil.de</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column grid structure */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1: Kaufen & Mieten */}
          <div>
            <h3 className="font-bold mb-3">Kaufen & Mieten</h3>
            <ul className="space-y-2">
              <li><Link to="/berater" className="text-gray-600 hover:text-blue-600 block py-1">Wohnmobilberater</Link></li>
              <li><a href="https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 block py-1 flex items-center">Konfigurator <ExternalLink className="ml-1 h-3 w-3" /></a></li>
              <li><a href="https://www.drm.de/de/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 block py-1 flex items-center">Mietfahrzeuge <ExternalLink className="ml-1 h-3 w-3" /></a></li>
              <li><Link to="/gebrauchtfahrzeuge" className="text-gray-600 hover:text-blue-600 block py-1">Gebrauchtfahrzeuge</Link></li>
              <li><Link to="/finanzierung-leasing" className="text-gray-600 hover:text-blue-600 block py-1">Finanzierung & Leasing</Link></li>
              <li><Link to="/haendler" className="text-gray-600 hover:text-blue-600 block py-1">Händlersuche</Link></li>
            </ul>
          </div>
          
          {/* Column 2: Qualität & Vorteile - Single link only */}
          <div>
            <h3 className="font-bold mb-3">
              <Link to="/qualitaet" className="text-gray-900 hover:text-blue-600">
                Qualität & Vorteile
              </Link>
            </h3>
          </div>

          {/* Column 3: Service & Support */}
          <div>
            <h3 className="font-bold mb-3">Service & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/garantie" className="text-gray-600 hover:text-blue-600 block py-1">Garantie</Link></li>
              <li><Link to="/kontakt" className="text-gray-600 hover:text-blue-600 block py-1">Kontakt</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-blue-600 block py-1">FAQ</Link></li>
              <li><Link to="/newsletter" className="text-gray-600 hover:text-blue-600 block py-1">Newsletter</Link></li>
              <li><Link to="/downloads" className="text-gray-600 hover:text-blue-600 block py-1">Downloads</Link></li>
              <li><Link to="/karriere" className="text-gray-600 hover:text-blue-600 block py-1">Karriere</Link></li>
              <li><Link to="/stellenangebote" className="text-gray-600 hover:text-blue-600 block py-1">Stellenangebote</Link></li>
              <li><Link to="/ausbildung" className="text-gray-600 hover:text-blue-600 block py-1">Ausbildung</Link></li>
            </ul>
          </div>

          {/* Column 4: Unternehmen & Rechtliches + Language & Social Links */}
          <div>
            <h3 className="font-bold mb-3">Unternehmen & Rechtliches</h3>
            <ul className="space-y-2 mb-6">
              <li><Link to="/unternehmen" className="text-gray-600 hover:text-blue-600 block py-1">Über EURA MOBIL</Link></li>
              <li><Link to="/werksfuehrung" className="text-gray-600 hover:text-blue-600 block py-1">Werksführung</Link></li>
              <li><Link to="/club" className="text-gray-600 hover:text-blue-600 block py-1">Club</Link></li>
              <li><Link to="/videos" className="text-gray-600 hover:text-blue-600 block py-1">Videos</Link></li>
              <li><Link to="/impressum" className="text-gray-600 hover:text-blue-600 block py-1">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-gray-600 hover:text-blue-600 block py-1">Datenschutz</Link></li>
              <li><Link to="/agb" className="text-gray-600 hover:text-blue-600 block py-1">AGB</Link></li>
            </ul>

            <h3 className="font-bold mb-3">Eura Mobil International</h3>
            <div className="max-w-xs mb-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Deutsch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="en">Englisch</SelectItem>
                  <SelectItem value="fr">Französisch</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <h4 className="font-bold mb-3">Folgen Sie uns</h4>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@euramobil" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </a>
              <a href="https://www.instagram.com/euramobil/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </a>
              <a href="https://www.facebook.com/EuraMobil" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} EURA MOBIL. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

