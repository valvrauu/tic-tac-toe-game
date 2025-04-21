import { createContext } from "react";

type GameContextProps = {
  playerMark: "x" | "o";
  mode: "solo" | "multiplayer";
  setPlayerMark: (mark: "x" | "o") => void;
  setMode: (mode: "solo" | "multiplayer") => void;
};

export const GameContext = createContext<GameContextProps | null>(null);
