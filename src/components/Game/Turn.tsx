import { useGameContext } from "@/contexts/GameContext";
import cn from "@/utils/cn";
import IconX from "@/assets/icons/icon-x.svg?react";
import IconO from "@/assets/icons/icon-o.svg?react";

type TurnProps = {
  className?: string;
};

function Turn({ className }: TurnProps) {
  const { turn } = useGameContext();
  const Icon: React.ElementType = turn === "x" ? IconX : IconO;

  return (
    <div
      className={cn(
        "bg-te-papa-green inset-shadow-big-stone tablet:rounded-md tablet:p-[calc(--spacing(3)+1px)] tablet:pb-[calc(--spacing(5)-1px)] tablet:[calc(--spacing(3)+1px)] tablet:text-lg inline-flex min-w-min items-center justify-center gap-[calc(--spacing(2)+1px)] rounded-sm p-[calc(--spacing(2)+1px)] pb-[calc(--spacing(3)+1px)] inset-shadow-sm",
        className
      )}
    >
      <Icon className="tablet:size-5 size-4 min-w-4" />
      <span className="font-bold uppercase">Turn</span>
    </div>
  );
}

export { Turn };
