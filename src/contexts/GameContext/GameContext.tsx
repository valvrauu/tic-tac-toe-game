import { createContext } from "react";

type GameContextProps = {
  playerMark: "X" | "O";
  mode: "CPU" | "Player";
  setPlayerMark: (mark: "X" | "O") => void;
  setMode: (mode: "CPU" | "Player") => void;
};

export const GameContext = createContext<GameContextProps | null>(null);
