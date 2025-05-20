
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
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
    <header className="sticky top-0 z-[50] bg-white border-b border-gray-200 p-4">
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
          
          {/* Fixed-size container for menu icon with precise positioning */}
          <div className="relative w-10 h-10">
            {/* Single Button that toggles between icons */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label={isOverlayActive("menu") ? "Menü schließen" : "Menü öffnen"}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Absolutely positioned icons with identical center positioning */}
              <span className="absolute inset-0 flex items-center justify-center">
                {isOverlayActive("menu") ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </span>
            </Button>
          </div>
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
    </header>
  );
};

export default Header;
