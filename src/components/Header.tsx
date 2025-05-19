
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import FullscreenMenu from "./FullscreenMenu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          EURA MOBIL
        </Link>
        
        {/* Burger Menu Button */}
        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menü öffnen">
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
        
        {/* Fullscreen Menu Overlay */}
        <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
