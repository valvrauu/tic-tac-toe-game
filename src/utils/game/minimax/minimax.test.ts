import { describe, test, expect } from "vitest";
import { minimax } from "./minimax";
import { Board } from "@/types";

describe("minimax", () => {
  const human = "x";
  const cpu = "o";

  test("should return 10 - depth when CPU wins", () => {
    const board: Board = [
      ["o", "o", "o"],
      [null, "x", null],
      [null, null, "x"]
    ];

    const result = minimax(board, 0, false, human, cpu);

    expect(result).toBe(10);
  });

  test("should return 10 - depth (ex: 7) when CPU can win in next move", () => {
    const board: Board = [
      ["x", null, null],
      ["x", "o", null],
      ["o", null, null]
    ];

    const result = minimax(board, 2, true, human, cpu);

    expect(result).toBe(7);
  });

  test("should return depth - 10 when the human player wins", () => {
    const board: Board = [
      ["x", "x", "x"],
      [null, "o", null],
      [null, null, "o"]
    ];

    const result = minimax(board, 0, false, human, cpu);

    expect(result).toBe(-10);
  });

  test("should return depth - 10 (ex: -7) when human can win in next move", () => {
    const board: Board = [
      ["x", "x", null],
      ["o", "o", null],
      [null, null, null]
    ];

    const result = minimax(board, 2, false, human, cpu);

    expect(result).toBe(-7);
  });

  test("should return 0 when it's a draw", () => {
    const board: Board = [
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["o", "x", "x"]
    ];

    const result = minimax(board, 0, false, human, cpu);

    expect(result).toBe(0);
  });

  test("should return 0 when only draw is possible", () => {
    const board: Board = [
      ["x", "o", "x"],
      ["x", "x", "o"],
      ["o", null, null]
    ];

    const result = minimax(board, 0, true, human, cpu);

    expect(result).toBe(0);
  });
});
