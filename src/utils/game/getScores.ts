import { Mode, Players, Scores } from "@/types";

type getScoreProps = {
  mode: Mode;
  players: Players;
  scores: Scores;
};

// prettier-ignore
function getScore({ mode, players, scores }: getScoreProps) {
  const isSinglePlayer = mode === "singleplayer";
  const isPlayerX = players.player === "x";

  const playerLabel = isSinglePlayer
    ? isPlayerX ? "You" : "CPU"
    : isPlayerX ? "P1" : "P2";

  const opponentLabel = isSinglePlayer
    ? !isPlayerX ? "You" : "CPU"
    : !isPlayerX ? "P1" : "P2";

  return {
    labels: {
      player: `X (${playerLabel})`,
      ties: "Ties",
      opponent: `O (${opponentLabel})`
    },
    score: {
      player: isSinglePlayer
        ? isPlayerX
          ? scores.singleplayer.human
          : scores.singleplayer.cpu
        : isPlayerX
          ? scores.multiplayer.player1
          : scores.multiplayer.player2,
      ties: isSinglePlayer
        ? scores.singleplayer.ties
        : scores.multiplayer.ties,
      opponent: isSinglePlayer
        ? isPlayerX
          ? scores.singleplayer.cpu
          : scores.singleplayer.human
        : isPlayerX
          ? scores.multiplayer.player2
          : scores.multiplayer.player1
    }
  };
}

export { getScore };
