import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, Facebook, Instagram, Youtube } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import MegaMenu from "./MegaMenu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  const handleMouseEnter = (menuKey: string) => {
    if (window.innerWidth >= 768) { // Only for desktop
      setActiveMenu(menuKey);
      setMegaMenuOpen(true);
    }
  };
  
  const handleClick = (menuKey: string) => {
    if (window.innerWidth < 768) { // Only for mobile
      if (activeMenu === menuKey && megaMenuOpen) {
        setMegaMenuOpen(false);
      } else {
        setActiveMenu(menuKey);
        setMegaMenuOpen(true);
      }
    }
  };
  
  const closeMegaMenu = () => {
    setMegaMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          EURA MOBIL
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button
            className="text-sm font-medium hover:text-blue-600"
            onMouseEnter={() => handleMouseEnter("wohnmobile")}
            onClick={() => handleClick("wohnmobile")}
          >
            Wohnmobile & Vans
          </button>
          <button
            className="text-sm font-medium hover:text-blue-600"
            onMouseEnter={() => handleMouseEnter("kaufen")}
            onClick={() => handleClick("kaufen")}
          >
            Kaufen & Mieten
          </button>
          <button
            className="text-sm font-medium hover:text-blue-600"
            onMouseEnter={() => handleMouseEnter("qualitaet")}
            onClick={() => handleClick("qualitaet")}
          >
            Qualität & Vorteile
          </button>
          <button
            className="text-sm font-medium hover:text-blue-600"
            onMouseEnter={() => handleMouseEnter("unternehmen")}
            onClick={() => handleClick("unternehmen")}
          >
            Unternehmen
          </button>
          <button
            className="text-sm font-medium hover:text-blue-600"
            onMouseEnter={() => handleMouseEnter("karriere")}
            onClick={() => handleClick("karriere")}
          >
            Karriere
          </button>
          <button
            className="text-sm font-medium hover:text-blue-600"
            onMouseEnter={() => handleMouseEnter("service")}
            onClick={() => handleClick("service")}
          >
            Service
          </button>
        </div>
        
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
                    <button 
                      className="text-left w-full hover:text-blue-600"
                      onClick={() => handleClick("wohnmobile")}
                    >
                      Wohnmobile & Vans
                    </button>
                  </li>
                  <li>
                    <button 
                      className="text-left w-full hover:text-blue-600"
                      onClick={() => handleClick("kaufen")}
                    >
                      Kaufen & Mieten
                    </button>
                  </li>
                  <li>
                    <button 
                      className="text-left w-full hover:text-blue-600"
                      onClick={() => handleClick("qualitaet")}
                    >
                      Qualität & Vorteile
                    </button>
                  </li>
                  <li>
                    <button 
                      className="text-left w-full hover:text-blue-600"
                      onClick={() => handleClick("unternehmen")}
                    >
                      Unternehmen
                    </button>
                  </li>
                  <li>
                    <button 
                      className="text-left w-full hover:text-blue-600"
                      onClick={() => handleClick("karriere")}
                    >
                      Karriere
                    </button>
                  </li>
                  <li>
                    <button 
                      className="text-left w-full hover:text-blue-600"
                      onClick={() => handleClick("service")}
                    >
                      Service
                    </button>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link to="/kontakt" className="block hover:text-blue-600">Kontakt</Link>
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <Link to="/downloads" className="block hover:text-blue-600">Downloads</Link>
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
        
        {/* MegaMenu Overlay */}
        <MegaMenu 
          isOpen={megaMenuOpen} 
          activeMenu={activeMenu} 
          onClose={closeMegaMenu} 
        />
        
        {/* Backdrop for desktop hover */}
        {megaMenuOpen && window.innerWidth >= 768 && (
          <div
            className="fixed inset-0 bg-transparent z-40"
            onMouseEnter={closeMegaMenu}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
