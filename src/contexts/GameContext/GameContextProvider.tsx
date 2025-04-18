import { useState, ReactNode } from "react";
import { GameContext } from "./GameContext";

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [playerMark, setPlayerMark] = useState<"x" | "o">("x");
  const [mode, setMode] = useState<"cpu" | "player">("cpu");

  return (
    <GameContext.Provider value={{ playerMark, mode, setPlayerMark, setMode }}>
      {children}
    </GameContext.Provider>
  );
}
