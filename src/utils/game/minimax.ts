import { Symbol, Board } from "@/types";
import { checkMovesLeft, checkWinner } from "@/utils/game";

function minimax(
  board: Board,
  depth: number,
  isMax: boolean,
  human: Symbol,
  cpu: Symbol
) {
  const hasWinner = checkWinner(board);
  const isDraw = !checkMovesLeft(board);

  if (hasWinner) {
    if (hasWinner.winner === human) return depth - 10;
    if (hasWinner.winner === cpu) return 10 - depth;
  }

  if (isDraw) {
    return 0;
  }

  if (isMax) {
    let bestScore = -Infinity;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === null) {
          const tempBoard = board.map((row) => [...row]) as Board;
          tempBoard[i][j] = cpu;

          const score = minimax(tempBoard, depth + 1, false, human, cpu);
          bestScore = Math.max(bestScore, score);
        }
      }
    }

    return bestScore;
  }

  let bestScore = +Infinity;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        const tempBoard = board.map((row) => [...row]) as Board;
        tempBoard[i][j] = human;

        const score = minimax(tempBoard, depth + 1, true, human, cpu);
        bestScore = Math.min(bestScore, score);
      }
    }
  }

  return bestScore;
}

export { minimax };
