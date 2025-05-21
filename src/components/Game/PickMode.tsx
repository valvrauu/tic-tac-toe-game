import Game from "@/components/Game";
import { useGameReset } from "@/hooks/game";
import cn from "@/utils/cn";

type PickModeProps = {
  className?: string;
};

function PickMode({ className }: PickModeProps) {
  const { handleReset } = useGameReset();

  return (
    <div className={cn("tablet:gap-5 grid gap-4", className)}>
      <Game.LinkButton
        variant="primary"
        color="yellow"
        to="/singleplayer"
        onClick={handleReset}
      >
        New Game (Vs Cpu)
      </Game.LinkButton>
      <Game.LinkButton
        variant="primary"
        color="blue"
        to="/multiplayer"
        onClick={handleReset}
      >
        New Game (Vs Player)
      </Game.LinkButton>
    </div>
  );
}

export { PickMode };
