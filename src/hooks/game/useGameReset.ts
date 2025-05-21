import { useGameContext } from "@/contexts/GameContext";
import { resetBoard } from "@/utils/game";

function useGameReset() {
  const { setTurn, setBoard } = useGameContext();

  function handleReset() {
    setBoard(resetBoard());
    setTurn("x");
  }

  return { handleReset };
}

export { useGameReset };
