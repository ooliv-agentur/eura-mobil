
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, Facebook, Instagram, Youtube } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          Wohnmobile Deluxe
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/wohnmobiltypen" className="hover:text-blue-600">Wohnmobiltypen</Link></li>
            <li><Link to="/modelle" className="hover:text-blue-600">Modelle</Link></li>
            <li><Link to="/konfigurator" className="hover:text-blue-600">Konfigurator</Link></li>
            <li><Link to="/gebrauchtfahrzeuge" className="hover:text-blue-600">Gebraucht & Miete</Link></li>
            <li><Link to="/berater" className="hover:text-blue-600">Beratung</Link></li>
            <li><Link to="/haendler" className="hover:text-blue-600">Händler</Link></li>
            <li><Link to="/downloads" className="hover:text-blue-600">Downloads</Link></li>
            <li><Link to="/karriere" className="hover:text-blue-600">Karriere</Link></li>
            <li><Link to="/unternehmen" className="hover:text-blue-600">Unternehmen</Link></li>
          </ul>
        </nav>
        
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menü öffnen</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80">
            <nav className="flex flex-col h-full">
              <div className="flex-1 mt-8">
                <ul className="space-y-6 text-lg font-medium">
                  <li>
                    <SheetClose asChild>
                      <Link to="/wohnmobiltypen" className="block hover:text-blue-600">Wohnmobiltypen</Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link to="/modelle" className="block hover:text-blue-600">Wohnmobile</Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link to="/konfigurator" className="block hover:text-blue-600">Konfigurator</Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link to="/gebrauchtfahrzeuge" className="block hover:text-blue-600">Gebraucht & Miete</Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link to="/haendler" className="block hover:text-blue-600">Kaufen & Mieten</Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link to="/service" className="block hover:text-blue-600">Service</Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link to="/downloads" className="block hover:text-blue-600">Downloads</Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link to="/unternehmen" className="block hover:text-blue-600">Eura Mobil Welt</Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link to="/karriere" className="block hover:text-blue-600">Jobs</Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link to="/kontakt" className="block hover:text-blue-600">Kontakt</Link>
                    </SheetClose>
                  </li>
                </ul>
              </div>
              
              {/* Footer area with social media and dealer login */}
              <div className="py-4 border-t border-gray-200">
                <div className="flex space-x-4 mb-4 justify-center">
                  <Link to="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link to="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link to="#" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
                
                <div className="text-center">
                  <Button variant="outline" size="sm" className="text-sm" asChild>
                    <Link to="/haendler-login">Händlerlogin</Link>
                  </Button>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
