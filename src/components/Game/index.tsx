import React from "react";
import cn from "@/utils/cn";

import { Button, LinkButton, AnchorButton } from "./Button";
import { Logo } from "./Logo";
import { PickOption } from "./PickOption";
import { PickPlayer } from "./PickPlayer";
import { Turn } from "./Turn";

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

Game.Button = Button;
Game.LinkButton = LinkButton;
Game.AnchorButton = AnchorButton;
Game.Logo = Logo;
Game.PickOption = PickOption;
Game.PickPlayer = PickPlayer;
Game.Turn = Turn;

export default Game;
