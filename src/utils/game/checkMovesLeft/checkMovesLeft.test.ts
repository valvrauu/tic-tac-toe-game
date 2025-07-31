import { describe, test, expect } from "vitest";
import { checkMovesLeft } from "./checkMovesLeft";
import { Board } from "@/types";

describe("checkMovesLeft", () => {
  test("should return true when the board is completely empty", () => {
    const board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ] as Board;

    expect(checkMovesLeft(board)).toBe(true);
  });

  test("should return true when the board has at least one empty cell", () => {
    const board = [
      [null, "x", "x"],
      ["o", "o", null],
      ["x", null, "o"]
    ] as Board;

    expect(checkMovesLeft(board)).toBe(true);
  });

  test("should return false when the board is completely full", () => {
    const board = [
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["o", "x", "x"]
    ] as Board;

    expect(checkMovesLeft(board)).toBe(false);
  });
});
