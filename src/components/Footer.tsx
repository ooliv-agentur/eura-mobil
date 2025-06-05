
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
        {/* Main 3-section layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* 1️⃣ Contact & Address (left side) */}
          <div className="lg:col-span-3">
            <h3 className="font-bold mb-4">EURA Mobil GmbH</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
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

          {/* 2️⃣ Navigation Links (center, 3 columns) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Products & Services */}
            <div>
              <h3 className="font-bold mb-3">Products & Services</h3>
              <ul className="space-y-2">
                <li><Link to="/berater" className="text-gray-600 hover:text-blue-600 block py-1">Wohnmobilberater</Link></li>
                <li><a href="https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 block py-1 flex items-center">Konfigurator <ExternalLink className="ml-1 h-3 w-3" /></a></li>
                <li><a href="https://www.drm.de/de/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 block py-1">Mietfahrzeuge</a></li>
                <li><Link to="/gebrauchtfahrzeuge" className="text-gray-600 hover:text-blue-600 block py-1">Gebrauchtfahrzeuge</Link></li>
                <li><Link to="/haendler" className="text-gray-600 hover:text-blue-600 block py-1">Händlersuche</Link></li>
              </ul>
            </div>

            {/* Column 2: Quality & Advantages */}
            <div>
              <h3 className="font-bold mb-3">Quality & Advantages</h3>
              <ul className="space-y-2">
                <li><Link to="/qualitaet" className="text-gray-600 hover:text-blue-600 block py-1">Alle Vorteile im Überblick</Link></li>
                <li><Link to="/qualitaet/sealed-structure" className="text-gray-600 hover:text-blue-600 block py-1">Sealed Structure</Link></li>
                <li><Link to="/qualitaet/winterfestigkeit" className="text-gray-600 hover:text-blue-600 block py-1">Winterfestigkeit</Link></li>
                <li><Link to="/qualitaet/leichtbauarchitektur" className="text-gray-600 hover:text-blue-600 block py-1">Leichtbau</Link></li>
                <li><Link to="/qualitaet/moebelbau" className="text-gray-600 hover:text-blue-600 block py-1">Möbelbau</Link></li>
                <li><Link to="/qualitaet/doppelboden" className="text-gray-600 hover:text-blue-600 block py-1">Doppelboden</Link></li>
                <li><Link to="/qualitaet/schlafkomfort" className="text-gray-600 hover:text-blue-600 block py-1">Schlafkomfort</Link></li>
                <li><Link to="/qualitaet/kuechenwelt" className="text-gray-600 hover:text-blue-600 block py-1">Küchenwelt</Link></li>
                <li><Link to="/qualitaet/wellness" className="text-gray-600 hover:text-blue-600 block py-1">Wellness</Link></li>
              </ul>
            </div>

            {/* Column 3: Company & Legal */}
            <div>
              <h3 className="font-bold mb-3">Company & Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/unternehmen" className="text-gray-600 hover:text-blue-600 block py-1">Über EURA MOBIL</Link></li>
                <li><Link to="/werksfuehrung" className="text-gray-600 hover:text-blue-600 block py-1">Werksführung</Link></li>
                <li><Link to="/club" className="text-gray-600 hover:text-blue-600 block py-1">Club</Link></li>
                <li><Link to="/videos" className="text-gray-600 hover:text-blue-600 block py-1">Videos</Link></li>
                <li><Link to="/impressum" className="text-gray-600 hover:text-blue-600 block py-1">Impressum</Link></li>
                <li><Link to="/datenschutz" className="text-gray-600 hover:text-blue-600 block py-1">Datenschutz</Link></li>
                <li><Link to="/agb" className="text-gray-600 hover:text-blue-600 block py-1">AGB</Link></li>
              </ul>
            </div>
          </div>

          {/* 3️⃣ Social Media & Language (right side) */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Language Dropdown */}
              <div>
                <h3 className="font-bold mb-3">Eura Mobil International</h3>
                <Select defaultValue="de">
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue placeholder="Deutsch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="en">Englisch</SelectItem>
                    <SelectItem value="fr">Französisch</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold mb-3">Folgen Sie uns</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/euramobil/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                  </a>
                  <a href="https://www.facebook.com/EuraMobil" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                  </a>
                  <a href="https://www.youtube.com/@euramobil" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} EURA MOBIL. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
