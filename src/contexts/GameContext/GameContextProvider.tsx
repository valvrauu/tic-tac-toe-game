import { useState, ReactNode } from "react";
import { GameContext } from "./GameContext";

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [playerMark, setPlayerMark] = useState<"X" | "O">("X");
  const [mode, setMode] = useState<"CPU" | "Player">("CPU");

  return (
    <GameContext.Provider value={{ playerMark, mode, setPlayerMark, setMode }}>
      {children}
    </GameContext.Provider>
  );
}
