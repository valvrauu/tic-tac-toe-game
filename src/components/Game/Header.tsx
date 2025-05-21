import Game from "@/components/Game";
import cn from "@/utils/cn";

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  return (
    <header className={cn("grid grid-cols-3 items-center gap-5", className)}>
      <Game.Logo className="justify-self-start" />
      <Game.Turn />
      <Game.Restart className="justify-self-end" />
    </header>
  );
}

export { Header };
