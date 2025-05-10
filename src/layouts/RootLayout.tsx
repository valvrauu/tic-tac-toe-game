import { Outlet } from "react-router";
import { GameProvider } from "@/contexts/GameProvider";

function RootLayout() {
  return (
    <GameProvider>
      <Outlet />
    </GameProvider>
  );
}

export default RootLayout;
