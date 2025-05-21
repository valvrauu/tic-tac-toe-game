import Game from "@/components/Game";
import { useGameScore } from "@/hooks/game";
import cn from "@/utils/cn";

type FooterProps = {
  className?: string;
};

function Footer({ className }: FooterProps) {
  const { labels, score } = useGameScore();

  return (
    <footer className={cn("grid grid-cols-3 gap-5", className)}>
      <Game.Score color="blue" label={labels.player} score={score.player} />
      <Game.Score color="gray" label={labels.ties} score={score.ties} />
      <Game.Score
        color="yellow"
        label={labels.opponent}
        score={score.opponent}
      />
    </footer>
  );
}

export { Footer };
