import { useGameContext } from "@/contexts/GameContext";
import { getScore } from "@/utils/game";

function useGameScore() {
  const context = useGameContext();
  return getScore(context);
}

export { useGameScore };
