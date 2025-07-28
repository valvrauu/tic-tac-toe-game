import { Symbol, Board } from "@/types";

type BoardPosition = [row: number, col: number];
type WinningLine = [BoardPosition, BoardPosition, BoardPosition];

type WinnerResult = {
  winner: Symbol;
  winningLine: WinningLine;
  lineType: "row" | "column" | "diagonal";
};

// prettier-ignore
function checkWinner(board: Board): WinnerResult | null {
  const winningPatterns: {
    positions: WinningLine;
    type: "row" | "column" | "diagonal";
  }[] = [
    // Horizontal lines
    { positions: [[0, 0], [0, 1], [0, 2]], type: "row" },
    { positions: [[1, 0], [1, 1], [1, 2]], type: "row" },
    { positions: [[2, 0], [2, 1], [2, 2]], type: "row" },

    // Vertical columns
    { positions: [[0, 0], [1, 0], [2, 0]], type: "column" },
    { positions: [[0, 1], [1, 1], [2, 1]], type: "column" },
    { positions: [[0, 2], [1, 2], [2, 2]], type: "column" },

    // Diagonals
    { positions: [[0, 0], [1, 1], [2, 2]], type: "diagonal" },
    { positions: [[0, 2], [1, 1], [2, 0]], type: "diagonal" },
  ];

  for (const pattern of winningPatterns) {
    const [firstPos, secondPos, thirdPos] = pattern.positions;

    const firstCell = board[firstPos[0]][firstPos[1]];
    const secondCell = board[secondPos[0]][secondPos[1]];
    const thirdCell = board[thirdPos[0]][thirdPos[1]];

    const isWinningLine =
      firstCell && firstCell === secondCell && firstCell === thirdCell;

    if (isWinningLine) {
      return {
        winner: firstCell,
        winningLine: pattern.positions,
        lineType: pattern.type
      };
    }
  }

  return null;
}

export { checkWinner };
