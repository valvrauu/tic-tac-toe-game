import { Symbol, Board } from "@/types";
import { minimax } from "@/utils/game";

function findBestMove(board: Board, human: Symbol, cpu: Symbol) {
  let bestScore = -Infinity;
  let bestMove = null;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        const tempBoard = board.map((row) => [...row]) as Board;
        tempBoard[i][j] = cpu;

        const score = minimax(tempBoard, 0, false, human, cpu);

        if (score > bestScore) {
          bestScore = score;
          bestMove = { row: i, column: j };
        }
      }
    }
  }

  return bestMove;
}

export { findBestMove };
