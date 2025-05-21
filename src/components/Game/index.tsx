import React from "react";
import cn from "@/utils/cn";

import { Logo } from "./Logo";
import { PickOption } from "./PickOption";
import { PickPlayer } from "./PickPlayer";

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

Game.Logo = Logo;
Game.PickOption = PickOption;
Game.PickPlayer = PickPlayer;

export default Game;
