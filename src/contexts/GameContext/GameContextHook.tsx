import { useContext } from "react";
import { GameContext } from "./GameContext";

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context)
    throw new Error(
      "useGameContext must be used inside the GameContextProvider"
    );
  return context;
}
