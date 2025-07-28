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
  const { isActive } = useGameStatus();

  const humanCanPlay =
    mode === "singleplayer" ? players.player === turn && isActive : isActive;
  const isCpuThinking =
    mode === "singleplayer" && players.opponent === turn && isActive;

  function handleMakeMove(row: number = -1, column: number = -1) {
    if (!isActive || isCpuThinking) return;

    const bestMove = findBestMove(board, players.player, players.opponent);

    if (bestMove) {
      row = bestMove.row;
      column = bestMove.column;
    }

    const updatedBoard = makeMove(board, row, column, turn);
    if (!updatedBoard) return;

    const hasWinner = checkWinner(updatedBoard);
    const isDraw = !hasWinner && !checkMovesLeft(updatedBoard);

    setBoard(updatedBoard);

    if (!hasWinner && !isDraw) {
      setTurn(turn === "x" ? "o" : "x");
    } else {
      setScores((prevScores) => {
        if (mode === "singleplayer") {
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

  return { isCpuThinking, humanCanPlay, handleMakeMove };
}

export { useGameLogic };
