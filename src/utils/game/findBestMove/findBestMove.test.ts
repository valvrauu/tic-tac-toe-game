import { describe, test, expect } from "vitest";
import { findBestMove } from "./findBestMove";
import { Board } from "@/types";

describe("findBestMove", () => {
  test("should return center position on an empty board", () => {
    const board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ] as Board;

    const bestMove = findBestMove(board, "x", "o");
    expect(bestMove).toEqual({ row: 1, column: 1 });
  });

  test("should pick a corner when the center is taken", () => {
    const board = [
      [null, null, null],
      [null, "x", null],
      [null, null, null]
    ] as Board;

    const corners = [
      { row: 0, column: 0 },
      { row: 0, column: 2 },
      { row: 2, column: 0 },
      { row: 2, column: 2 }
    ];

    const bestMove = findBestMove(board, "x", "o");
    expect(corners).toContainEqual(bestMove);
  });

  test("should win when it has a winning move", () => {
    const board = [
      ["x", null, null],
      [null, "o", "x"],
      ["o", null, null]
    ] as Board;

    const bestMove = findBestMove(board, "x", "o");
    expect(bestMove).toEqual({ row: 0, column: 2 });
  });

  test("should prefer winning over drawing", () => {
    const board = [
      ["x", "x", null],
      ["o", "o", null],
      [null, null, null]
    ] as Board;

    const bestMove = findBestMove(board, "x", "o");
    expect(bestMove).toEqual({ row: 1, column: 2 });
  });

  test("should block the opponent's winning move", () => {
    const board = [
      ["x", "x", null],
      ["o", null, null],
      [null, "o", null]
    ] as Board;

    const bestMove = findBestMove(board, "x", "o");
    expect(bestMove).toEqual({ row: 0, column: 2 });
  });

  test("should choose a draw when no win is possible", () => {
    const board = [
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["o", "x", null]
    ] as Board;

    const bestMove = findBestMove(board, "x", "o");
    expect(bestMove).toEqual({ row: 2, column: 2 });
  });

  test("should return null when board is full", () => {
    const board = [
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["o", "x", "x"]
    ] as Board;

    const bestMove = findBestMove(board, "x", "o");
    expect(bestMove).toBeNull();
  });

  test("should never select a cell that is already occupied", () => {
    const board = [
      ["x", null, null],
      [null, "o", null],
      [null, null, "x"]
    ] as Board;

    const bestMove = findBestMove(board, "x", "o");
    expect(board[bestMove!.row][bestMove!.column]).toBeNull();
  });

  test("should return the best move based on minimax evaluation", () => {
    const board = [
      [null, "x", null],
      [null, null, "x"],
      ["o", "o", "x"]
    ] as Board;

    const bestMove = findBestMove(board, "x", "o");
    expect(bestMove).toEqual({ row: 0, column: 2 });
  });
});
