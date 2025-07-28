import { useGameContext } from "@/contexts/GameContext";
import { getScores } from "@/utils/game";

function useGameScores() {
  const context = useGameContext();
  return getScores(context);
}

export { useGameScores };
