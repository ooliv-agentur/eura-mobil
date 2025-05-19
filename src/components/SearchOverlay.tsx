
import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  path: string;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// Dummy search data - in a real application this would come from a backend
const dummySearchData: SearchResult[] = [
  {
    id: "1",
    title: "Activa One",
    description: "Kompaktes Einsteigermodell mit cleverer Raumnutzung",
    path: "/modelle/activa-one"
  },
  {
    id: "2",
    title: "Xtura",
    description: "Das luxuriöse Wohnmobil für anspruchsvolle Reisende",
    path: "/modelle/xtura"
  },
  {
    id: "3",
    title: "Integra",
    description: "Premium-Integriertes Wohnmobil mit maximalen Komfort",
    path: "/modelle/integra"
  },
  {
    id: "4",
    title: "Händlersuche",
    description: "Finden Sie einen EURA MOBIL Händler in Ihrer Nähe",
    path: "/haendler"
  },
  {
    id: "5",
    title: "Wohnmobiltypen",
    description: "Informationen zu verschiedenen Wohnmobiltypen",
    path: "/wohnmobiltypen"
  }
];

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    
    if (!isOpen) {
      setSearchTerm("");
      setResults([]);
      setHasSearched(false);
    }
  }, [isOpen]);

  const performSearch = () => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }
    
    const searchTermLower = searchTerm.toLowerCase();
    
    // Filter the dummy data based on the search term
    const filteredResults = dummySearchData.filter(item => 
      item.title.toLowerCase().includes(searchTermLower) || 
      item.description.toLowerCase().includes(searchTermLower)
    );
    
    setResults(filteredResults);
    setHasSearched(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-95 flex flex-col overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Suchergebnisse für: {searchTerm}</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            aria-label="Suche schließen"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Suchbegriff eingeben ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">Suchen</Button>
          </div>
        </form>

        <div className="mt-6">
          {hasSearched && results.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">Keine passenden Inhalte gefunden.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {results.map((result) => (
                <li key={result.id} className="border-b pb-4">
                  <h3 className="text-lg font-medium">{result.title}</h3>
                  <p className="text-gray-600 mt-1">{result.description}</p>
                  <p className="text-gray-400 text-sm mt-2">{result.path}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
