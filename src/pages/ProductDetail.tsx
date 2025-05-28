
import React from "react";
import { useParams } from "react-router-dom";
import { ProductLayout } from "@/components/ProductLayout";
import { ModelHero } from "@/components/model/ModelHero";
import { ModelIntro } from "@/components/model/ModelIntro";
import { ModelHighlights } from "@/components/model/ModelHighlights";
import { ModelFloorplans } from "@/components/model/ModelFloorplans";
import { ModelInteriorHotspots } from "@/components/model/ModelInteriorHotspots";
import { ModelUpholstery } from "@/components/model/ModelUpholstery";
import { ModelEquipmentTabs } from "@/components/model/ModelEquipmentTabs";
import { ModelFinalCTA } from "@/components/model/ModelFinalCTA";
import { ModelCategorySection } from "@/components/model/ModelCategorySection";
import { modelsData } from "@/data/modelsData";
import NotFound from "@/pages/NotFound";

const ProductDetail = () => {
  const { modelId } = useParams<{ modelId: string }>();
  
  if (!modelId) {
    return <NotFound />;
  }

  const modelDetails = modelsData[modelId];
  
  if (!modelDetails) {
    return <NotFound />;
  }

  // Determine category from model ID
  const getCategory = (id: string) => {
    if (id.includes("activa") || id.includes("alkoven")) return "alkoven";
    if (id.includes("profila")) return "teilintegriert";
    if (id.includes("integra") || id.includes("contura") || id.includes("xtura")) return "integriert";
    if (id.includes("van")) return "van";
    return "teilintegriert";
  };

  const category = getCategory(modelId);

  return (
    <ProductLayout modelName={modelDetails.name}>
      <div className="container mx-auto px-4">
        <ModelHero 
          headline={modelDetails.name}
          subline={modelDetails.intro?.split('\n\n')[0] || ''}
        />
        <ModelIntro 
          title={modelDetails.name}
          content={modelDetails.intro || ''}
          interiorHotspots={modelDetails.interior}
        />
        <ModelHighlights highlights={modelDetails.highlights || []} />
        <ModelFloorplans floorplans={modelDetails.layouts || []} />
        <ModelInteriorHotspots interiorItems={modelDetails.interior || []} />
        <ModelUpholstery upholsteryTypes={modelDetails.upholsteryTypes || []} />
        <ModelEquipmentTabs equipment={modelDetails.equipment || {}} />
        <ModelCategorySection currentModelId={modelId} category={category} />
        <ModelFinalCTA modelName={modelDetails.name} />
      </div>
    </ProductLayout>
  );
};

export default ProductDetail;
