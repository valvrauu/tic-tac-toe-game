import { describe, test, expect } from "vitest";
import { getStatus } from "./getStatus";
import { Board } from "@/types";

// prettier-ignore
describe("getStatus", () => {
  describe("singleplayer mode", () => {
    const humanPlayer = "x";
    const aiPlayer = "o";

    // Human wins
    test("should return a win status when the human player wins", () => {
      const board: Board = [
        ["x", "x", "x"],
        ["o", "o", "x"],
        ["x", "o", "o"]
      ];

      const result = getStatus({
        mode: "singleplayer",
        board,
        players: { player: humanPlayer, opponent: aiPlayer }
      });

      expect(result).toEqual({
        status: "win",
        roundOutcomeTitle: "Takes the Round",
        roundOutcomeMessage: "You Won!",
        winnerResult: {
          winner: "x",
          winningLine: [[0, 0],[0, 1],[0, 2]],
          lineType: "row"
        }
      });
    });

    // Human loses
    test("should return a win status when the AI wins", () => {
      const board: Board = [
        ["o", "o", "x"],
        ["o", "x", "x"],
        ["o", "x", "o"]
      ];

      const result = getStatus({
        mode: "singleplayer",
        board,
        players: { player: humanPlayer, opponent: aiPlayer }
      });

      expect(result).toEqual({
        status: "win",
        roundOutcomeTitle: "Takes the Round",
        roundOutcomeMessage: "Oh No, You Lost…",
        winnerResult: {
          winner: "o",
          winningLine: [[0, 0],[1, 0],[2, 0]],
          lineType: "column"
        }
      });
    });

    // Draw
    test("should return a draw status when the board is full with no winner", () => {
      const board: Board = [
        ["o", "x", "o"],
        ["x", "x", "o"],
        ["o", "o", "x"]
      ];

      const result = getStatus({
        mode: "singleplayer",
        board,
        players: { player: humanPlayer, opponent: aiPlayer }
      });

      expect(result).toEqual({
        status: "draw",
        roundOutcomeTitle: "Round Tied",
        roundOutcomeMessage: null,
        winnerResult: null
      });
    });
  });

  describe("multiplayer mode", () => {
    const player1 = "x";
    const player2 = "o";

    // Player 1 wins
    test("should return a win status when Player 1 wins", () => {
      const board: Board = [
        ["x", "x", "x"],
        ["o", "o", "x"],
        ["x", "o", "o"]
      ];

      const result = getStatus({
        mode: "multiplayer",
        board,
        players: { player: player1, opponent: player2 }
      });

      expect(result).toEqual({
        status: "win",
        roundOutcomeTitle: "Takes the Round",
        roundOutcomeMessage: "Player 1 Wins",
        winnerResult: {
          winner: "x",
          winningLine: [[0, 0],[0, 1],[0, 2]],
          lineType: "row"
        }
      });
    });

    // Player 2 wins
    test("should return a win status when Player 2 wins", () => {
      const board: Board = [
        ["o", "o", "x"],
        ["o", "x", "x"],
        ["o", "x", "o"]
      ];

      const result = getStatus({
        mode: "multiplayer",
        board,
        players: { player: player1, opponent: player2 }
      });

      expect(result).toEqual({
        status: "win",
        roundOutcomeTitle: "Takes the Round",
        roundOutcomeMessage: "Player 2 Wins",
        winnerResult: {
          winner: "o",
          winningLine: [[0, 0],[1, 0],[2, 0]],
          lineType: "column"
        }
      });
    });

    // Draw
    test("should return a draw status when the board is full with no winner", () => {
      const board: Board = [
        ["o", "x", "o"],
        ["x", "x", "o"],
        ["o", "o", "x"]
      ];

      const result = getStatus({
        mode: "multiplayer",
        board,
        players: { player: player1, opponent: player2 }
      });

      expect(result).toEqual({
        status: "draw",
        roundOutcomeTitle: "Round Tied",
        roundOutcomeMessage: null,
        winnerResult: null
      });
    });
  });

  test("should return a progress status when the game is still ongoing", () => {
    const board: Board = [
      ["x", null, "o"],
      ["x", "o", null],
      [null, null, null]
    ];

    const result = getStatus({
      mode: "singleplayer",
      board,
      players: { player: "x", opponent: "o" }
    });

    expect(result).toEqual({
      status: "progress",
      roundOutcomeTitle: null,
      roundOutcomeMessage: null,
      winnerResult: null
    });
  });
});
