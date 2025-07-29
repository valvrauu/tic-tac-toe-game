import { ReactElement } from "react";
import { Cell, Mode } from "@/types";
import Game from "@/components/Game";
import cn from "@/utils/cn";
import IconX from "@/assets/icons/icon-x.svg?react";
import IconO from "@/assets/icons/icon-o.svg?react";

type ModalButtonProps = {
  text: string;
  onClick: () => void;
};

type ModalLinkProps = {
  to: "/" | `/${Mode}`;
} & ModalButtonProps;

type ModalProps = {
  title: string | null;
  subTitle: string | null;
  icon: Cell | null;
  onCancel: ModalLinkProps;
  onAccept: ModalButtonProps;
  className?: string;
};

function getIconData(icon: Cell): { element: ReactElement; color: string } {
  switch (icon) {
    case "x":
      return {
        element: (
          <IconX className="fill-turquoise stroke-turquoise tablet:size-16 size-7" />
        ),
        color: "text-turquoise"
      };
    case "o":
      return {
        element: (
          <IconO className="fill-saffron stroke-saffron tablet:size-16 size-7.5" />
        ),
        color: "text-saffron"
      };
    default:
      return {
        element: <></>,
        color: "text-casper"
      };
  }
}

function Modal({
  title,
  subTitle,
  icon,
  onCancel,
  onAccept,
  className
}: ModalProps) {
  const { element, color } = getIconData(icon);

  return (
    <div className="absolute inset-0 flex min-w-75 items-center bg-black/50">
      <div
        className={cn(
          "bg-te-papa-green tablet:min-h-66.5 flex min-h-57 w-full flex-col items-center justify-center gap-6",
          className
        )}
      >
        <div className="flex flex-col-reverse gap-4 font-bold uppercase">
          {title && (
            <h1
              className={cn(
                "tablet:gap-6 tablet:text-3xl flex items-center gap-2 text-2xl tracking-wider",
                color
              )}
            >
              {element}
              {title}
            </h1>
          )}

          {subTitle && (
            <h2 className="tablet:text-lg text-center tracking-wider">
              {subTitle}
            </h2>
          )}
        </div>

        <div className="flex gap-4">
          <Game.LinkButton
            color="gray"
            variant="secondary"
            to={onCancel.to}
            onClick={onCancel.onClick}
          >
            {onCancel.text}
          </Game.LinkButton>
          <Game.Button
            color="yellow"
            variant="secondary"
            onClick={onAccept.onClick}
          >
            {onAccept.text}
          </Game.Button>
        </div>
      </div>
    </div>
  );
}

export { Modal };
