
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import FullscreenMenu from "./FullscreenMenu";
import SearchOverlay from "./SearchOverlay";
import { cn } from "@/lib/utils";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          EURA MOBIL
        </Link>
        
        <div className="flex items-center gap-2">
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
          
          {/* Burger Menu Button */}
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menü öffnen">
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        
        {/* Fullscreen Menu Overlay */}
        <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        
        {/* Search Overlay */}
        <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
