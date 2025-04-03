import { useState } from "react";

import IconX from "../assets/icons/icon-x.svg?react";
import IconO from "../assets/icons/icon-o.svg?react";

function PickPlayer() {
  const [playerMark, setplayerMark] = useState("X");

  return (
    <div className="bg-te-papa-green text-casper inset-shadow-lg inset-shadow-big-stone grid justify-items-center gap-4 rounded-lg px-6 pt-6 pb-7.5">
      <h2 className="mb-2 text-lg leading-[normal] font-bold tracking-wider uppercase">
        Pick Player 1’s Mark
      </h2>
      <div className="bg-mirage mb-[calc(--spacing(0.5)-1px)] grid grid-cols-2 justify-self-stretch rounded-sm px-2 py-[calc(--spacing(2)+1px)]">
        <label
          htmlFor="X"
          className={`${playerMark === "X" ? "bg-casper" : "hover:bg-casper/5"} grid cursor-pointer justify-items-center rounded-sm p-[calc(--spacing(2.5)+1px)] duration-200`}
        >
          <IconX
            className={`${playerMark === "X" ? "fill-mirage" : "fill-casper"} duration-200`}
          />
        </label>
        <input
          type="radio"
          name="playerMark"
          id="X"
          className="sr-only"
          value="X"
          checked={playerMark === "X"}
          onChange={() => setplayerMark("X")}
        />
        <label
          htmlFor="O"
          className={`${playerMark === "O" ? "bg-casper" : "hover:bg-casper/5"} grid cursor-pointer justify-items-center rounded-sm p-[calc(--spacing(2.5)+1px)] duration-200`}
        >
          <IconO
            className={`${playerMark === "O" ? "fill-mirage" : "fill-casper"} duration-200`}
          />
        </label>
        <input
          type="radio"
          name="playerMark"
          id="O"
          className="sr-only"
          value="O"
          checked={playerMark === "O"}
          onChange={() => setplayerMark("O")}
        />
      </div>
      <span className="leading-[normal] font-medium tracking-wider uppercase">
        Remember : X Goes First
      </span>
    </div>
  );
}

export default PickPlayer;
