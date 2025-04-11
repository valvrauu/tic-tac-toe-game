import { Outlet } from "react-router";
import { GameContextProvider } from "../contexts/GameContext";

function RootLayout() {
  return (
    <GameContextProvider>
      <main>
        <Outlet />
      </main>
    </GameContextProvider>
  );
}

export default RootLayout;
