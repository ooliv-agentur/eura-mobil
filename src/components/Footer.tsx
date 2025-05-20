
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-3">Über uns</h3>
            <ul className="space-y-2">
              <li><Link to="/unternehmen" className="text-gray-600 hover:text-blue-600 block py-1">Unsere Geschichte</Link></li>
              <li><Link to="/qualitaet" className="text-gray-600 hover:text-blue-600 block py-1">Qualitätsversprechen</Link></li>
              <li><Link to="/unternehmen#standort" className="text-gray-600 hover:text-blue-600 block py-1">Standorte</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Service</h3>
            <ul className="space-y-2">
              <li><Link to="/berater?step=1" className="text-gray-600 hover:text-blue-600 block py-1">Wohnmobilberater</Link></li>
              <li><Link to="/haendler" className="text-gray-600 hover:text-blue-600 block py-1">Händlersuche</Link></li>
              <li><Link to="/kontakt" className="text-gray-600 hover:text-blue-600 block py-1">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Karriere</h3>
            <ul className="space-y-2">
              <li><Link to="/karriere" className="text-gray-600 hover:text-blue-600 block py-1">Stellenangebote</Link></li>
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
        
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} EURA MOBIL. Alle Rechte vorbehalten.
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
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
    </footer>
  );
};

export default Footer;
