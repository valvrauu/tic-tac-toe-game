import { createContext } from "react";

type GameContextProps = {
  playerMark: "x" | "o";
  mode: "cpu" | "player";
  setPlayerMark: (mark: "x" | "o") => void;
  setMode: (mode: "cpu" | "player") => void;
};

export const GameContext = createContext<GameContextProps | null>(null);
