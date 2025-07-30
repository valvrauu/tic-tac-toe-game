import { useGameContext } from "@/contexts/GameContext";
import { useGameStatus } from "@/hooks/game";
import {
  checkMovesLeft,
  checkWinner,
  findBestMove,
  makeMove
} from "@/utils/game";

function useGameLogic() {
  const { turn, mode, board, players, setTurn, setBoard, setScores } =
    useGameContext();
  const { status } = useGameStatus();

  const isGameActive = status === "progress";
  const isSinglePlayer = mode === "singleplayer";

  const humanCanPlay = isSinglePlayer
    ? players.player === turn && isGameActive
    : isGameActive;

  const isCpuThinking =
    isSinglePlayer && players.opponent === turn && isGameActive;

  function makeCpuMove() {
    if (!isGameActive) return;

    const bestMove = findBestMove(board, players.player, players.opponent);
    if (!bestMove) return;

    handleMakeMove(bestMove.row, bestMove.column);
  }

  function handleMakeMove(row: number, column: number) {
    if (!isGameActive) return;

    const move = makeMove(board, row, column, turn);
    if (move.status === "invalid") return;

    const hasWinner = checkWinner(move.board);
    const isDraw = !hasWinner && !checkMovesLeft(move.board);

    setBoard(move.board);

    if (!hasWinner && !isDraw) {
      setTurn(turn === "x" ? "o" : "x");
    } else {
      setScores((prevScores) => {
        if (isSinglePlayer) {
          return {
            ...prevScores,
            singleplayer: {
              ...prevScores.singleplayer,
              ...(hasWinner?.winner === players.player
                ? { human: prevScores.singleplayer.human + 1 }
                : hasWinner?.winner === players.opponent
                  ? { cpu: prevScores.singleplayer.cpu + 1 }
                  : { ties: prevScores.singleplayer.ties + 1 })
            }
          };
        } else {
          return {
            ...prevScores,
            multiplayer: {
              ...prevScores.multiplayer,
              ...(hasWinner?.winner === players.player
                ? { player1: prevScores.multiplayer.player1 + 1 }
                : hasWinner?.winner === players.opponent
                  ? { player2: prevScores.multiplayer.player2 + 1 }
                  : { ties: prevScores.multiplayer.ties + 1 })
            }
          };
        }
      });
    }
  }

  return { isCpuThinking, humanCanPlay, makeCpuMove, handleMakeMove };
}

export { useGameLogic };
