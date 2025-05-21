import { Symbol, Board } from "@/types";
import { checkMovesLeft, checkWinner } from "@/utils/game";

function makeMove(board: Board, row: number, col: number, playerMark: Symbol) {
  const hasWinner = checkWinner(board);
  const isDraw = !hasWinner && !checkMovesLeft(board);

  if (hasWinner || isDraw) return;
  if (board[row][col]) return;

  return board.map((rowData, rowIndex) =>
    rowData.map((columnData, columnIndex) =>
      row === rowIndex && col === columnIndex ? playerMark : columnData
    )
  ) as Board;
}

export { makeMove };
