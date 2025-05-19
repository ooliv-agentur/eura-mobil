
import { useWohnmobilberater } from "@/context/WohnmobilberaterContext";

export const useWohnmobilberaterTrigger = () => {
  const { startBerater, setDisplayMode } = useWohnmobilberater();

  const startBeraterFlow = (options?: {
    mode?: "dialog" | "inline" | "fullpage";
    initialStep?: number;
    prefilled?: string[];
  }) => {
    const { mode = "dialog", initialStep = 1, prefilled = [] } = options || {};
    setDisplayMode(mode);
    startBerater(initialStep, prefilled);
  };

  return { startBeraterFlow };
};
