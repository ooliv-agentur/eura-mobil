
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-3">Über uns</h3>
            <ul className="space-y-2">
              <li><Link to="/ueber-uns" className="text-gray-600 hover:text-blue-600">Unsere Geschichte</Link></li>
              <li><Link to="/qualitaet" className="text-gray-600 hover:text-blue-600">Qualitätsversprechen</Link></li>
              <li><Link to="/standorte" className="text-gray-600 hover:text-blue-600">Standorte</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Service</h3>
            <ul className="space-y-2">
              <li><Link to="/berater" className="text-gray-600 hover:text-blue-600">Wohnmobilberater</Link></li>
              <li><Link to="/haendler" className="text-gray-600 hover:text-blue-600">Händlersuche</Link></li>
              <li><Link to="/kontakt" className="text-gray-600 hover:text-blue-600">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Karriere</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-600 hover:text-blue-600">Stellenangebote</Link></li>
              <li><Link to="/ausbildung" className="text-gray-600 hover:text-blue-600">Ausbildung</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="text-gray-600 hover:text-blue-600">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-gray-600 hover:text-blue-600">Datenschutz</Link></li>
              <li><Link to="/agb" className="text-gray-600 hover:text-blue-600">AGB</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Wohnmobile Deluxe. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
