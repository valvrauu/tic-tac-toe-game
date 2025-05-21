import React from "react";
import cn from "@/utils/cn";

import { Box } from "./Box";
import { Button, LinkButton, AnchorButton } from "./Button";
import { Cell } from "./Cell";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Logo } from "./Logo";
import { Modal } from "./Modal";
import { PickMode } from "./PickMode";
import { PickOption } from "./PickOption";
import { PickPlayer } from "./PickPlayer";
import { Restart } from "./Restart";
import { Score } from "./Score";
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

Game.Box = Box;
Game.Button = Button;
Game.LinkButton = LinkButton;
Game.AnchorButton = AnchorButton;
Game.Cell = Cell;
Game.Footer = Footer;
Game.Header = Header;
Game.Logo = Logo;
Game.Modal = Modal;
Game.PickMode = PickMode;
Game.PickOption = PickOption;
Game.PickPlayer = PickPlayer;
Game.Restart = Restart;
Game.Score = Score;
Game.Turn = Turn;

export default Game;
