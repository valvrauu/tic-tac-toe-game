import { useEffect } from "react";
import { Mode } from "@/types";
import Game from "@/components/Game";
import { useGameContext } from "@/contexts/GameContext";

type GamePageProps = {
  mode: Mode;
};

function GamePage({ mode = "singleplayer" }: GamePageProps) {
  const { setMode } = useGameContext();

  useEffect(() => {
    setMode(mode);
  }, [mode, setMode]);

  return (
    <main className="tablet:justify-center flex min-w-[calc(100%+1px)] flex-1 flex-col items-center">
      <Game className="tablet:gap-[calc(--spacing(5)-1px)] gap-6.5">
        <Game.Header />
        <Game.Box>
          <Game.Board />
          <Game.Footer />
        </Game.Box>
      </Game>
    </main>
  );
}

export default GamePage;
