import { Board } from "@/types";

function resetBoard(): Board {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
}

export { resetBoard };
