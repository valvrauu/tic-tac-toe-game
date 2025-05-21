import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useGameContext } from "@/contexts/GameContext";
import Game from "@/components/Game";
import { useGameLogic, useGameReset, useGameStatus } from "@/hooks/game";
import cn from "@/utils/cn";

type BoardProps = {
  className?: string;
};

function Board({ className }: BoardProps) {
  const { board } = useGameContext();
  const { isCpuThinking, humanCanPlay, handleMakeMove } = useGameLogic();
  const { title, subTitle, icon, hasWinner, isDraw } = useGameStatus();
  const { handleReset } = useGameReset();

  const isModalActive = hasWinner || isDraw;

  useEffect(() => {
    if (isCpuThinking) {
      const timer = setTimeout(() => {
        handleMakeMove();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isCpuThinking, handleMakeMove]);

  return (
    <div className={cn("grid gap-5", className)}>
      <div
        className={cn("text-center opacity-0", isCpuThinking && "opacity-100")}
      >
        AI Thinking...
      </div>
      <div className="grid grid-cols-3 gap-5">
        {board.map((row, rowIndex) =>
          row.map((column, columnIndex) => (
            <Game.Cell
              key={`${rowIndex}-${columnIndex}`}
              className={cn(isCpuThinking && "cursor-default")}
              mark={column}
              isHighlighted={
                hasWinner
                  ? hasWinner.winningLine.some(
                      ([r, c]) => r === rowIndex && c === columnIndex
                    )
                  : false
              }
              onClick={() =>
                humanCanPlay && handleMakeMove(rowIndex, columnIndex)
              }
            />
          ))
        )}
      </div>
      {isModalActive &&
        createPortal(
          <Game.Modal
            title={title}
            subTitle={subTitle}
            icon={icon}
            onCancel={{
              text: "Quit",
              to: "/",
              onClick: handleReset
            }}
            onAccept={{
              text: "Next Round",
              onClick: handleReset
            }}
          />,
          document.body
        )}
    </div>
  );
}

export { Board };
