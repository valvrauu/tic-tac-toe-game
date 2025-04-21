import React from "react";
import { GameContext } from "./GameContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

// prettier-ignore
export function GameContextProvider({ children }: { children: React.ReactNode }) {
  const [playerMark, setPlayerMark] = useLocalStorage<"x" | "o">("playerMark", "x");
  const [mode, setMode] = useLocalStorage<"solo" | "multiplayer">("mode", "solo");

  return (
    <GameContext.Provider value={{ playerMark, mode, setPlayerMark, setMode }}>
      {children}
    </GameContext.Provider>
  );
}
