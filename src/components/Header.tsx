
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          Wohnmobile Deluxe
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/modelle" className="hover:text-blue-600">Modelle</Link></li>
            <li><Link to="/berater" className="hover:text-blue-600">Beratung</Link></li>
            <li><Link to="/haendler" className="hover:text-blue-600">Händler</Link></li>
            <li><Link to="/news" className="hover:text-blue-600">News</Link></li>
          </ul>
        </nav>
        <Button variant="outline" className="md:hidden">
          Menü
        </Button>
      </div>
    </header>
  );
};

export default Header;
