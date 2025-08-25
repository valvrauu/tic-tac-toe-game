import { Board } from "@/types";

function checkMovesLeft(board: Board): boolean {
  return board.some((row) => row.some((col) => col === null));
}

export { checkMovesLeft };
