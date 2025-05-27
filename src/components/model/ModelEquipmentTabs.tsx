
import React from "react";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { equipmentTabs } from "@/data/modelsData";

interface ModelEquipmentTabsProps {
  equipment: Record<string, string[]>;
}

export const ModelEquipmentTabs: React.FC<ModelEquipmentTabsProps> = ({ equipment }) => {
  if (Object.keys(equipment).length === 0) return null;

  return (
    <section id="model-equipment-tabs" className="my-10 pt-8">
      {/* Equipment Tabs Section */}
      <h2 className="text-2xl font-semibold mb-6">Serienausstattung</h2>
      <div className="space-y-4">
        {Object.entries(equipment).map(([key, items]) => (
          <Accordion type="single" collapsible className="w-full" key={key}>
            <AccordionItem value={key} className="border rounded-lg bg-white">
              <AccordionTrigger className="px-4 py-3">
                <span className="text-lg font-medium">{equipmentTabs[key as keyof typeof equipmentTabs]}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};
