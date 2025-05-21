import { useGameContext } from "@/contexts/GameContext";
import Game from "@/components/Game";
import IconX from "@/assets/icons/icon-x.svg?react";
import IconO from "@/assets/icons/icon-o.svg?react";

function PickPlayer() {
  const { players, setPlayers } = useGameContext();

  return (
    <div className="bg-te-papa-green text-casper inset-shadow-lg inset-shadow-big-stone grid justify-items-center gap-4 rounded-lg px-6 pt-6 pb-7.5">
      <h2 className="mb-2 text-lg font-bold uppercase">Pick Player 1’s Mark</h2>

      <div className="bg-mirage mb-px grid grid-cols-2 justify-self-stretch rounded-md px-2 py-[calc(--spacing(2)+1px)]">
        <Game.PickOption
          id="x"
          Icon={IconX}
          selected={players.player === "x"}
          onChange={() => setPlayers({ player: "x", opponent: "o" })}
        />
        <Game.PickOption
          id="o"
          Icon={IconO}
          selected={players.player === "o"}
          onChange={() => setPlayers({ player: "o", opponent: "x" })}
        />
      </div>

      <span className="font-medium tracking-wider uppercase">
        Remember : x Goes First
      </span>
    </div>
  );
}

export { PickPlayer };
