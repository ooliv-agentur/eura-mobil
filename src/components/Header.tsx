
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, Facebook, Instagram, Youtube } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          Wohnmobile Deluxe
        </Link>
        
        {/* Desktop Navigation with Megamenu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {/* 1. Wohnmobile & Vans */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Wohnmobile & Vans</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                    <div>
                      <h3 className="font-medium mb-2 text-sm">Modelle</h3>
                      <div className="space-y-1">
                        <NavigationMenuLink asChild>
                          <Link to="/modelle/activa-one" className="block text-sm hover:text-blue-600">Activa One</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/modelle/integra" className="block text-sm hover:text-blue-600">Integra</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/modelle/profila-t" className="block text-sm hover:text-blue-600">Profila T</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/modelle/profila-rs" className="block text-sm hover:text-blue-600">Profila RS</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/modelle/contura" className="block text-sm hover:text-blue-600">Contura</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/modelle/xtura" className="block text-sm hover:text-blue-600">Xtura</Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-sm">Wohnmobiltypen</h3>
                      <div className="space-y-1">
                        <NavigationMenuLink asChild>
                          <Link to="/wohnmobiltypen/vans" className="block text-sm hover:text-blue-600">Vans</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/wohnmobiltypen/teilintegriert" className="block text-sm hover:text-blue-600">Teilintegriert</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/wohnmobiltypen/alkoven" className="block text-sm hover:text-blue-600">Alkoven</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/wohnmobiltypen/integriert" className="block text-sm hover:text-blue-600">Integriert</Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                    <NavigationMenuLink asChild className="col-span-2">
                      <Link to="/modelle" className="flex mt-3 w-full justify-center items-center py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm">
                        Alle Modelle ansehen
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* 2. Kaufen & Mieten */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Kaufen & Mieten</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px]">
                    <div className="space-y-1">
                      <NavigationMenuLink asChild>
                        <Link to="/berater" className="block text-sm hover:text-blue-600">Wohnmobilberater</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/konfigurator" className="block text-sm hover:text-blue-600">Konfigurator</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/mietfahrzeuge" className="block text-sm hover:text-blue-600">Mietfahrzeuge</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/gebrauchtfahrzeuge" className="block text-sm hover:text-blue-600">Gebrauchtfahrzeuge</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/haendler" className="block text-sm hover:text-blue-600">Händlersuche</Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* 3. Qualität & Vorteile */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Qualität & Vorteile</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                    <div className="space-y-1">
                      <NavigationMenuLink asChild>
                        <Link to="/qualitaet/sealed-structure" className="block text-sm hover:text-blue-600">Sealed Structure</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/qualitaet/winterfestigkeit" className="block text-sm hover:text-blue-600">Winterfestigkeit</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/qualitaet/leichtbau" className="block text-sm hover:text-blue-600">Leichtbauarchitektur</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/qualitaet/moebelbau" className="block text-sm hover:text-blue-600">Möbelbau</Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="space-y-1">
                      <NavigationMenuLink asChild>
                        <Link to="/qualitaet/schlafkomfort" className="block text-sm hover:text-blue-600">Schlafkomfort</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/qualitaet/kuechenwelt" className="block text-sm hover:text-blue-600">Küchenwelt</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/qualitaet/wellnessbereich" className="block text-sm hover:text-blue-600">Wellness</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/qualitaet/doppelboden" className="block text-sm hover:text-blue-600">Doppelboden</Link>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink asChild className="col-span-2">
                      <Link to="/qualitaet" className="flex mt-3 w-full justify-center items-center py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm">
                        Alle Vorteile im Überblick
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* 4. Unternehmen */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Unternehmen</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                    <div className="space-y-1">
                      <NavigationMenuLink asChild>
                        <Link to="/unternehmen#geschichte" className="block text-sm hover:text-blue-600">Geschichte</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/unternehmen#standort" className="block text-sm hover:text-blue-600">Standort</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/unternehmen#mission" className="block text-sm hover:text-blue-600">Mission</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/werksbesichtigung" className="block text-sm hover:text-blue-600">Werksführung</Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="space-y-1">
                      <NavigationMenuLink asChild>
                        <Link to="/reisemobil-forum" className="block text-sm hover:text-blue-600">Reisemobil Forum</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/eura-mobil-club" className="block text-sm hover:text-blue-600">Eura Mobil Club</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/eura-mobil-card" className="block text-sm hover:text-blue-600">Eura Mobil Card</Link>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink asChild className="col-span-2">
                      <Link to="/unternehmen" className="flex mt-3 w-full justify-center items-center py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm">
                        Zum Unternehmen
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* 5. Karriere */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Karriere</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[300px]">
                    <div className="space-y-1">
                      <NavigationMenuLink asChild>
                        <Link to="/karriere/stellenangebote" className="block text-sm hover:text-blue-600">Stellenangebote</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/karriere/ausbildung" className="block text-sm hover:text-blue-600">Ausbildung & Praktikum</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/karriere/kontakt" className="block text-sm hover:text-blue-600">Kontakt HR</Link>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link to="/karriere" className="flex mt-3 w-full justify-center items-center py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm">
                        Karriereportal
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* 6. Service */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Service</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[300px]">
                    <div className="space-y-1">
                      <NavigationMenuLink asChild>
                        <Link to="/garantie" className="block text-sm hover:text-blue-600">Garantie</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/downloads" className="block text-sm hover:text-blue-600">Downloads</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/newsletter" className="block text-sm hover:text-blue-600">Newsletter</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/kontakt" className="block text-sm hover:text-blue-600">Kontakt</Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
                      <Link to="/qualitaet" className="block hover:text-blue-600">Qualität & Vorteile</Link>
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
