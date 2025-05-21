import { useGameContext } from "@/contexts/GameContext";
import { getStatus } from "@/utils/game";

function useGameStatus() {
  const context = useGameContext();
  return getStatus(context);
}

export { useGameStatus };
