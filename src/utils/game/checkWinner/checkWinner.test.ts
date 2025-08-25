import { describe, test, expect } from "vitest";
import { checkWinner } from "./checkWinner";
import { Board } from "@/types";

// prettier-ignore
describe("checkWinner", () => {
  test("should return winner 'x' with correct horizontal winning line and line type 'row'", () => {
    const board = [
      ["x", "x", "x"],
      ["o", null, "o"],
      [null, "x", null]
    ] as Board;

    expect(checkWinner(board)).toEqual({
      winner: "x",
      winningLine: [[0, 0],[0, 1],[0, 2]],
      lineType: "row"
    });
  });

  test("should return winner 'o' with correct horizontal winning line and line type 'row'", () => {
    const board = [
      ["x", null, "x"],
      ["o", "o", "o"],
      [null, "x", null]
    ] as Board;

    expect(checkWinner(board)).toEqual({
      winner: "o",
      winningLine: [[1, 0],[1, 1],[1, 2]],
      lineType: "row"
    });
  });

  test("should return winner 'x' with correct vertical winning line and line type 'column'", () => {
    const board = [
      ["x", "o", null],
      ["x", "o", null],
      ["x", null, "o"]
    ] as Board;

    expect(checkWinner(board)).toEqual({
      winner: "x",
      winningLine: [[0, 0],[1, 0],[2, 0]],
      lineType: "column"
    });
  });

  test("should return winner 'o' with correct vertical winning line and line type 'column'", () => {
    const board = [
      ["o", "x", null],
      ["o", null, "x"],
      ["o", "x", null]
    ] as Board;

    expect(checkWinner(board)).toEqual({
      winner: "o",
      winningLine: [[0, 0],[1, 0],[2, 0]],
      lineType: "column"
    });
  });

  test("should return winner 'x' with correct diagonal winning line and line type 'diagonal'", () => {
    const board = [
      ["x", "o", null],
      [null, "x", "o"],
      [null, null, "x"]
    ] as Board;

    expect(checkWinner(board)).toEqual({
      winner: "x",
      winningLine: [[0, 0],[1, 1],[2, 2]],
      lineType: "diagonal"
    });
  });

  test("should return winner 'o' with correct diagonal winning line and line type 'diagonal'", () => {
    const board = [
      ["x", "x", "o"],
      [null, "o", "x"],
      ["o", null, null]
    ] as Board;

    expect(checkWinner(board)).toEqual({
      winner: "o",
      winningLine: [[0, 2],[1, 1],[2, 0]],
      lineType: "diagonal"
    });
  });

  test("should return null when board is full with no winner (draw)", () => {
    const board = [
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["o", "x", "x"]
    ] as Board;

    expect(checkWinner(board)).toBeNull();
  });

  test("should return null when no winning line is present and game is still in progress", () => {
    const board = [
      ["x", null, "o"],
      [null, "o", null],
      ["x", null, "x"]
    ] as Board;

    expect(checkWinner(board)).toBeNull();
  });
});
