
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import FullscreenMenu from "./FullscreenMenu";
import SearchOverlay from "./SearchOverlay";
import { useOverlay } from "@/context/OverlayContext";

const Header = () => {
  const { activeOverlay, setActiveOverlay, isOverlayActive } = useOverlay();
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Sync search state with overlay context
  useEffect(() => {
    if (searchOpen && activeOverlay !== "search") {
      setSearchOpen(false);
    } else if (!searchOpen && activeOverlay === "search") {
      setSearchOpen(true);
    }
  }, [activeOverlay, searchOpen]);

  const toggleMenu = () => {
    if (isOverlayActive("menu")) {
      setActiveOverlay("none");
    } else {
      setActiveOverlay("menu");
    }
  };

  const toggleSearch = () => {
    if (isOverlayActive("search")) {
      setActiveOverlay("none");
    } else {
      setActiveOverlay("search");
    }
  };

  return (
    <header className="sticky top-0 z-[50] bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold text-xl">
            EURA MOBIL
          </Link>
          
          <div className="flex items-center gap-2 relative z-[60]">
            {/* Search Icon Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSearch}
              aria-label="Suche öffnen"
              className="mr-1"
            >
              <Search className="h-6 w-6" />
            </Button>
            
            {/* Hamburger menu button with animated transition to X */}
            <button
              onClick={toggleMenu}
              aria-label={isOverlayActive("menu") ? "Menü schließen" : "Menü öffnen"}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center relative"
            >
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <span 
                  className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-transform duration-300 ease-in-out ${
                    isOverlayActive("menu") ? 'absolute rotate-45' : 'mb-1.5'
                  }`} 
                />
                <span 
                  className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-opacity duration-300 ease-in-out ${
                    isOverlayActive("menu") ? 'opacity-0' : ''
                  }`} 
                />
                <span 
                  className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-transform duration-300 ease-in-out ${
                    isOverlayActive("menu") ? 'absolute -rotate-45' : 'mt-1.5'
                  }`} 
                />
              </div>
            </button>
          </div>
          
          {/* Fullscreen Menu Overlay */}
          <FullscreenMenu 
            isOpen={isOverlayActive("menu")} 
            onClose={() => setActiveOverlay("none")} 
          />
          
          {/* Search Overlay */}
          <SearchOverlay 
            isOpen={searchOpen} 
            onClose={() => setActiveOverlay("none")} 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
