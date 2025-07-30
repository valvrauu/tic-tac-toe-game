import { Symbol, Board } from "@/types";
import { checkMovesLeft, checkWinner } from "@/utils/game";

type MakeMoveResult =
  | { status: "invalid"; reason: "game_over" | "cell_occupied" }
  | { status: "valid"; board: Board };

function makeMove(
  board: Board,
  row: number,
  col: number,
  playerMark: Symbol
): MakeMoveResult {
  const hasWinner = checkWinner(board);
  const isDraw = !hasWinner && !checkMovesLeft(board);

  if (hasWinner || isDraw) {
    return { status: "invalid", reason: "game_over" };
  }

  if (board[row][col]) {
    return { status: "invalid", reason: "cell_occupied" };
  }

  const updatedBoard = board.map((rowData, rowIndex) =>
    rowData.map((columnData, columnIndex) =>
      row === rowIndex && col === columnIndex ? playerMark : columnData
    )
  ) as Board;

  return { status: "valid", board: updatedBoard };
}

export { makeMove };
