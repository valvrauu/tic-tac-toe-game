import React from "react";
import cn from "@/utils/cn";

type GameProps = {
  className?: string;
  children: React.ReactNode;
};

function Game({ className, children }: GameProps) {
  return (
    <section className={cn("grid w-full max-w-115 gap-5", className)}>
      {children}
    </section>
  );
}

export default Game;
