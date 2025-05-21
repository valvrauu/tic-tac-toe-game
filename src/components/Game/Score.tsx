import cn from "@/utils/cn";

type ScoreProps = {
  color: "yellow" | "blue" | "gray";
  label: string;
  score: number;
  className?: string;
};

const styles = {
  base: "tablet:rounded-lg rounded-md p-3 text-mirage grid text-center uppercase",
  colors: {
    yellow: "bg-saffron",
    blue: "bg-turquoise",
    gray: "bg-casper"
  }
};

function Score({ color, label, score, className }: ScoreProps) {
  return (
    <div className={cn(styles.base, styles.colors[color], className)}>
      <span className="tablet:text-base text-sm font-medium">{label}</span>
      <span className="tablet:text-2xl text-xl font-bold">{score}</span>
    </div>
  );
}

export { Score };
