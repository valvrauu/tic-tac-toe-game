import { Outlet } from "react-router";
import { GameContextProvider } from "../contexts/GameContext";

function RootLayout() {
  return (
    <GameContextProvider>
      <Outlet />
    </GameContextProvider>
  );
}

export default RootLayout;
