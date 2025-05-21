import { Cell as CellType } from "@/types";
import cn from "@/utils/cn";
import IconX from "@/assets/icons/icon-x.svg?react";
import IconO from "@/assets/icons/icon-o.svg?react";

type CellProps = {
  mark: CellType;
  isHighlighted?: boolean;
  className?: string;
  onClick: () => void;
};

const MARK_ICONS = {
  x: <IconX className="fill-turquoise stroke-turquoise" />,
  o: <IconO className="fill-saffron stroke-saffron" />
} as const;

const HIGHLIGHT_STYLES = {
  x: "bg-turquoise inset-shadow-blue-chill [&>svg]:fill-te-papa-green",
  o: "bg-saffron inset-shadow-pizza [&>svg]:fill-te-papa-green"
} as const;

function Cell({ mark, isHighlighted = false, className, onClick }: CellProps) {
  const isMarked = !!mark;
  const icon = isMarked ? MARK_ICONS[mark] : null;

  return (
    <button
      className={cn(
        "bg-te-papa-green inset-shadow-lg inset-shadow-big-stone mobile-lg:[&>svg]:size-13 tablet:[&>svg]:size-16 inline-flex aspect-square cursor-pointer items-center justify-center rounded-md pb-2 [&>svg]:size-10 [&>svg]:transition-colors [&>svg]:duration-200 hover:[&>svg]:fill-transparent hover:[&>svg]:stroke-2",
        mark && isHighlighted && HIGHLIGHT_STYLES[mark],
        className
      )}
      onClick={onClick}
      disabled={isMarked}
      aria-label={isMarked ? `Cell marked with ${mark}` : "Empty cell"}
    >
      {icon}
    </button>
  );
}

export { Cell };
