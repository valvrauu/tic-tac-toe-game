import { Mode, Players, Board } from "@/types";
import { checkWinner, WinnerResult } from "@/utils/game";
import { checkMovesLeft } from "@/utils/game";

type GetStatusProps = {
  mode: Mode;
  board: Board;
  players: Players;
};

type GetStatusResult =
  | {
      status: "win";
      roundOutcomeTitle: string;
      roundOutcomeMessage: string;
      winnerResult: WinnerResult;
    }
  | {
      status: "draw";
      roundOutcomeTitle: string;
      roundOutcomeMessage: string | null;
      winnerResult: null;
    }
  | {
      status: "progress";
      roundOutcomeTitle: null;
      roundOutcomeMessage: null;
      winnerResult: null;
    };

function getStatus({ mode, board, players }: GetStatusProps): GetStatusResult {
  const isSinglePlayer = mode === "singleplayer";
  const winnerResult = checkWinner(board);

  if (winnerResult) {
    const isPlayerWinner = winnerResult.winner === players.player;

    const roundOutcomeTitle = "Takes the Round";
    const roundOutcomeMessage = isSinglePlayer
      ? isPlayerWinner
        ? "You Won!"
        : "Oh No, You Lost…"
      : isPlayerWinner
        ? "Player 1 Wins"
        : "Player 2 Wins";

    return {
      status: "win",
      roundOutcomeTitle,
      roundOutcomeMessage,
      winnerResult
    };
  }

  const isDraw = !checkMovesLeft(board);

  if (isDraw) {
    return {
      status: "draw",
      roundOutcomeTitle: "Round Tied",
      roundOutcomeMessage: null,
      winnerResult: null
    };
  }

  return {
    status: "progress",
    roundOutcomeTitle: null,
    roundOutcomeMessage: null,
    winnerResult: null
  };
}

export { getStatus };
