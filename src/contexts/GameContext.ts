import React, { createContext, useContext } from "react";
import { Symbol, Mode, Board, Players, Scores } from "@/types";

type GameContextProps = {
  turn: Symbol;
  mode: Mode;
  board: Board;
  players: Players;
  scores: Scores;

  setTurn: React.Dispatch<React.SetStateAction<Symbol>>;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
  setPlayers: React.Dispatch<React.SetStateAction<Players>>;
  setScores: React.Dispatch<React.SetStateAction<Scores>>;
};

const GameContext = createContext<GameContextProps | null>(null);

function useGameContext() {
  const context = useContext(GameContext);

  if (!context)
    throw new Error("useGameContext must be used inside the GameProvider");

  return context;
}

export { GameContext, useGameContext };
