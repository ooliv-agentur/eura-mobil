
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import BeraterFlow from "./BeraterFlow";
import { ComparisonBar } from "@/components/comparison/ComparisonBar";
import { ComparisonModal } from "@/components/comparison/ComparisonModal";
import { useComparison } from "@/context/ComparisonContext";
import { useState } from "react";

interface BeraterOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const BeraterOverlay: React.FC<BeraterOverlayProps> = ({ isOpen, onClose }) => {
  const { selectedModels } = useComparison();
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const handleCompareClick = () => {
    setShowComparisonModal(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent 
          className="max-w-6xl w-[95vw] h-[90vh] p-0 overflow-hidden"
          hideCloseButton={true}
        >
          <div className="h-full overflow-y-auto">
            <BeraterFlow />
          </div>
        </DialogContent>
      </Dialog>

      {/* Render ComparisonBar outside dialog when dialog is open and models are selected */}
      {isOpen && selectedModels.length > 0 && (
        <ComparisonBar onCompareClick={handleCompareClick} />
      )}
      
      <ComparisonModal 
        open={showComparisonModal} 
        onOpenChange={setShowComparisonModal} 
      />
    </>
  );
};

export default BeraterOverlay;
