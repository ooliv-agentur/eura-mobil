
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye } from "lucide-react";

// Van model comparison data
const vanModelsData = {
  models: ["V 635 EB", "V 635 HB", "V 595 HB"],
  attributes: [
    { name: "Länge", values: ["6360 mm", "6360 mm", "5990 mm"] },
    { name: "Heckbett", values: ["1950×800 + 1860×800 mm", "1850 (1700) × 1600 mm", "1860 × 1490 mm"] },
    { name: "Masse fahrbereit", values: ["3031 (2879–3183) kg", "3031 (2879–3183) kg", "2921 (2775–3067) kg"] },
    { name: "Bettumbau Sitzgruppe", values: ["1560 × 950 (500) mm", "1560 × 950 (500) mm", "1600 × 950 (500) mm"] },
    { name: "Sitzplatzerweiterung", values: ["4", "4", "-"] }
  ],
  urls: [
    "/wohnmobile/vans/v-635-eb-2-2/",
    "/wohnmobile/vans/v-635-hb-2-2/",
    "/wohnmobile/vans/v-595-hb-2-2/"
  ]
};

export const VanModelsComparisonTable: React.FC = () => {
  return (
    <div className="py-16">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Modellvergleich: V 635 EB vs. V 635 HB vs. V 595 HB
      </h2>
      
      {/* Model images section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {vanModelsData.models.map((model, index) => (
          <div key={index} className="text-center">
            <AspectRatio ratio={4/3} className="bg-gray-200 mb-2">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Grundriss {model}
              </div>
            </AspectRatio>
          </div>
        ))}
      </div>
      
      {/* Comparison table */}
      <ScrollArea className="w-full mb-10">
        <div className="min-w-[700px]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Merkmal</th>
                {vanModelsData.models.map((model, index) => (
                  <th key={index} className="border border-gray-300 p-3 text-center">{model}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {vanModelsData.attributes.map((attribute, attrIndex) => (
                <tr key={attrIndex} className={attrIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-300 p-3 font-medium">{attribute.name}</td>
                  {attribute.values.map((value, valueIndex) => (
                    <td key={valueIndex} className="border border-gray-300 p-3 text-center">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollArea>
      
      {/* Action buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {vanModelsData.models.map((model, index) => (
          <Button key={index} asChild variant="outline">
            <Link to={vanModelsData.urls[index]}>
              <Eye className="mr-2 h-4 w-4" />
              Modell {model} ansehen
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
