import { useState } from "react";
import { createPortal } from "react-dom";
import { useGameContext } from "@/contexts/GameContext";
import Game from "@/components/Game";
import { useGameReset } from "@/hooks/game";
import IconRestart from "@/assets/icons/icon-restart.svg?react";

type RestartProps = {
  className?: string;
};

function Restart({ className }: RestartProps) {
  const [showModal, setShowModal] = useState(false);

  const { handleReset } = useGameReset();
  const { mode } = useGameContext();

  function handleAccept() {
    handleReset();
    setShowModal(false);
  }

  return (
    <>
      <Game.Button
        className={className}
        color="gray"
        variant="icon"
        onClick={() => setShowModal(true)}
      >
        <IconRestart />
      </Game.Button>
      {showModal &&
        createPortal(
          <Game.Modal
            className="gap-8"
            title="Restart Game?"
            subTitle=""
            icon={null}
            onCancel={{
              text: "No, Cancel",
              to: `/${mode}`,
              onClick: () => setShowModal(false)
            }}
            onAccept={{
              text: "Yes, Restart",
              onClick: handleAccept
            }}
          />,
          document.body
        )}
    </>
  );
}

export { Restart };
