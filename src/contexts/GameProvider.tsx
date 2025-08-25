import React, { useState } from "react";
import { Players, Symbol, Mode, Board, Scores } from "@/types";
import { GameContext } from "@/contexts/GameContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { resetBoard } from "@/utils/game";

type GameProviderProps = {
  children: React.ReactNode;
};

function GameProvider({ children }: GameProviderProps) {
  const [turn, setTurn] = useState<Symbol>("x");
  const [mode, setMode] = useState<Mode>("singleplayer");
  const [board, setBoard] = useState<Board>(resetBoard());

  const [players, setPlayers] = useState<Players>({
    player: "x",
    opponent: "o"
  });

  const [scores, setScores] = useLocalStorage<Scores>("scores", {
    singleplayer: { human: 0, ties: 0, cpu: 0 },
    multiplayer: { player1: 0, ties: 0, player2: 0 }
  });

  return (
    <GameContext.Provider
      value={{
        turn,
        mode,
        board,
        players,
        scores,
        setTurn,
        setMode,
        setBoard,
        setPlayers,
        setScores
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export { GameProvider };
