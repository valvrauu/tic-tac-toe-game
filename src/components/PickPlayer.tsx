import { useGameContext } from "../contexts/GameContext";

import IconX from "../assets/icons/icon-x.svg?react";
import IconO from "../assets/icons/icon-o.svg?react";

function PickPlayer() {
  const { playerMark, setPlayerMark } = useGameContext();

  return (
    <div className="bg-te-papa-green text-casper inset-shadow-lg inset-shadow-big-stone grid justify-items-center gap-4 rounded-lg px-6 pt-6 pb-7.5">
      <h2 className="mb-2 text-lg leading-[normal] font-bold tracking-wider uppercase">
        Pick Player 1’s Mark
      </h2>
      <div className="bg-mirage mb-[calc(--spacing(0.5)-1px)] grid grid-cols-2 justify-self-stretch rounded-md px-2 py-[calc(--spacing(2)+1px)]">
        <label
          htmlFor="x"
          className={`${playerMark === "x" ? "bg-casper" : "hover:bg-casper/5"} grid cursor-pointer justify-items-center rounded-md p-[calc(--spacing(2.5)+1px)] duration-200`}
        >
          <IconX
            className={`${playerMark === "x" ? "fill-mirage" : "fill-casper"} duration-200`}
          />
        </label>
        <input
          type="radio"
          name="playerMark"
          id="x"
          className="sr-only"
          value="x"
          checked={playerMark === "x"}
          onChange={() => setPlayerMark("x")}
        />
        <label
          htmlFor="o"
          className={`${playerMark === "o" ? "bg-casper" : "hover:bg-casper/5"} grid cursor-pointer justify-items-center rounded-md p-[calc(--spacing(2.5)+1px)] duration-200`}
        >
          <IconO
            className={`${playerMark === "o" ? "fill-mirage" : "fill-casper"} duration-200`}
          />
        </label>
        <input
          type="radio"
          name="playerMark"
          id="o"
          className="sr-only"
          value="o"
          checked={playerMark === "o"}
          onChange={() => setPlayerMark("o")}
        />
      </div>
      <span className="leading-[normal] font-medium tracking-wider uppercase">
        Remember : x Goes First
      </span>
    </div>
  );
}

export default PickPlayer;
