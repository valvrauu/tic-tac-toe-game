type Symbol = "x" | "o";
type Mode = "singleplayer" | "multiplayer";

type Cell = Symbol | null;
type Board = [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];

type Players = {
  player: Symbol;
  opponent: Symbol;
};

type SingleplayerScore = {
  human: number;
  ties: number;
  cpu: number;
};

type MultiplayerScore = {
  player1: number;
  ties: number;
  player2: number;
};

type Scores = {
  singleplayer: SingleplayerScore;
  multiplayer: MultiplayerScore;
};

export type { Symbol, Mode, Cell, Board, Players, Scores };
