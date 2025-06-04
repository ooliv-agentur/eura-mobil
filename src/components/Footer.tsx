
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
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
            
            {/* Social Media Icons - aligned with company name */}
            <div>
              <h3 className="font-bold mb-3">Folgen Sie uns</h3>
              <div className="flex space-x-4">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-3">Über uns</h3>
            <ul className="space-y-2">
              <li><Link to="/unternehmen#geschichte" className="text-gray-600 hover:text-blue-600 block py-1">Unsere Geschichte</Link></li>
              <li><Link to="/qualitaet" className="text-gray-600 hover:text-blue-600 block py-1">Qualitätsversprechen</Link></li>
              <li><Link to="/werksfuehrung" className="text-gray-600 hover:text-blue-600 block py-1">Werksführung</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Service</h3>
            <ul className="space-y-2">
              <li><Link to="/berater" className="text-gray-600 hover:text-blue-600 block py-1">Wohnmobilberater</Link></li>
              <li><Link to="/haendler" className="text-gray-600 hover:text-blue-600 block py-1">Händlersuche</Link></li>
              <li><Link to="/kontakt" className="text-gray-600 hover:text-blue-600 block py-1">Kontakt</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-blue-600 block py-1">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Karriere</h3>
            <ul className="space-y-2">
              <li><Link to="/karriere" className="text-gray-600 hover:text-blue-600 block py-1">Karriere</Link></li>
              <li><Link to="/karriere#stellenangebote" className="text-gray-600 hover:text-blue-600 block py-1">Stellenangebote</Link></li>
              <li><Link to="/karriere#ausbildung" className="text-gray-600 hover:text-blue-600 block py-1">Ausbildung</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="text-gray-600 hover:text-blue-600 block py-1">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-gray-600 hover:text-blue-600 block py-1">Datenschutz</Link></li>
              <li><Link to="/agb" className="text-gray-600 hover:text-blue-600 block py-1">AGB</Link></li>
            </ul>
          </div>
        </div>

        {/* Language Switcher Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="mb-4">
            <h3 className="font-bold mb-3">Eura Mobil International</h3>
            <div className="max-w-xs">
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
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} EURA MOBIL. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
