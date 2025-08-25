import { describe, test, expect } from "vitest";
import { resetBoard } from "@/utils/game";

describe("resetBoard", () => {
  test("should return an empty 3x3 board", () => {
    const expectedBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];

    const board = resetBoard();

    expect(board).toEqual(expectedBoard);
  });
});
