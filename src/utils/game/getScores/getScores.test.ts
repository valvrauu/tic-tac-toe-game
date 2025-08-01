import { describe, test, expect } from "vitest";
import { getScores } from "./getScores";

describe("getScores", () => {
  const mockScores = {
    singleplayer: {
      human: 4,
      cpu: 7,
      ties: 3
    },
    multiplayer: {
      player1: 4,
      player2: 5,
      ties: 2
    }
  };

  test("should return correct labels and scores for player X in singleplayer mode", () => {
    const result = getScores({
      mode: "singleplayer",
      players: { player: "x", opponent: "o" },
      scores: mockScores
    });

    expect(result.labels).toEqual({
      player: "X (You)",
      ties: "Ties",
      opponent: "O (CPU)"
    });

    expect(result.score).toEqual({
      player: 4,
      ties: 3,
      opponent: 7
    });
  });

  test("should return correct labels and scores for player O in singleplayer mode", () => {
    const result = getScores({
      mode: "singleplayer",
      players: { player: "o", opponent: "x" },
      scores: mockScores
    });

    expect(result.labels).toEqual({
      player: "X (CPU)",
      ties: "Ties",
      opponent: "O (You)"
    });

    expect(result.score).toEqual({
      player: 7,
      ties: 3,
      opponent: 4
    });
  });

  test("should return correct labels and scores for player X in multiplayer mode", () => {
    const result = getScores({
      mode: "multiplayer",
      players: { player: "x", opponent: "o" },
      scores: mockScores
    });

    expect(result.labels).toEqual({
      player: "X (P1)",
      ties: "Ties",
      opponent: "O (P2)"
    });

    expect(result.score).toEqual({
      player: 4,
      ties: 2,
      opponent: 5
    });
  });

  test("should return correct labels and scores for player O in multiplayer mode", () => {
    const result = getScores({
      mode: "multiplayer",
      players: { player: "o", opponent: "x" },
      scores: mockScores
    });

    expect(result.labels).toEqual({
      player: "X (P2)",
      ties: "Ties",
      opponent: "O (P1)"
    });

    expect(result.score).toEqual({
      player: 5,
      ties: 2,
      opponent: 4
    });
  });
});
