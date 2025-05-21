import { Mode, Players, Board } from "@/types";
import { checkWinner, checkMovesLeft } from "@/utils/game";

type getStatusProps = {
  mode: Mode;
  board: Board;
  players: Players;
};

function getStatus({ mode, board, players }: getStatusProps) {
  const isSinglePlayer = mode === "singleplayer";

  const hasWinner = checkWinner(board);
  const isDraw = !hasWinner && !checkMovesLeft(board);
  const isActive = !hasWinner && !isDraw;

  const title = hasWinner ? "Takes the Round" : "Round Tied";

  const subTitle = hasWinner
    ? isSinglePlayer
      ? hasWinner.winner === players.player
        ? "You Won!"
        : "Oh No, You Lost…"
      : hasWinner.winner === players.player
        ? "Player 1 Wins"
        : "Player 2 Wins"
    : "It's a draw!";

  const icon = hasWinner ? hasWinner.winner : null;

  return {
    title,
    subTitle,
    icon,
    hasWinner,
    isDraw,
    isActive
  };
}

export { getStatus };
