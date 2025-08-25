import { describe, test, expect } from "vitest";
import { makeMove } from "./makeMove";
import { Board } from "@/types";

describe("makeMove", () => {
  test("returns valid status with updated board when move is made on an empty cell", () => {
    const board: Board = [
      ["x", null, "o"],
      [null, "x", "o"],
      ["x", "o", null]
    ];

    const result = makeMove(board, 1, 0, "o");

    expect(result).toEqual({
      status: "valid",
      board: [
        ["x", null, "o"],
        ["o", "x", "o"],
        ["x", "o", null]
      ]
    });
  });

  test("returns invalid status when the game is already won", () => {
    const board: Board = [
      ["x", null, "o"],
      ["x", "x", "o"],
      ["x", "o", null]
    ];

    const result = makeMove(board, 1, 1, "x");

    expect(result).toEqual({
      status: "invalid",
      reason: "game_over"
    });
  });

  test("returns invalid status when the game is a draw", () => {
    const board: Board = [
      ["x", "x", "o"],
      ["o", "x", "o"],
      ["x", "o", "x"]
    ];

    const result = makeMove(board, 1, 1, "o");

    expect(result).toEqual({
      status: "invalid",
      reason: "game_over"
    });
  });

  test("returns invalid status when trying to play in an occupied cell", () => {
    const board: Board = [
      ["x", null, "o"],
      [null, "x", "o"],
      ["x", "o", null]
    ];

    const result = makeMove(board, 1, 1, "x");

    expect(result).toEqual({
      status: "invalid",
      reason: "cell_occupied"
    });
  });
});
