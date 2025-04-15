import { Outlet, useLocation } from "react-router";
import { GameContextProvider } from "../contexts/GameContext";

function RootLayout() {
  const location = useLocation();
  const isMenu = location.pathname === "/";

  return (
    <GameContextProvider>
      <main className={isMenu ? "flex-1 flex-col flex items-center justify-center" : ""}>
        <Outlet />
      </main>
    </GameContextProvider>
  );
}

export default RootLayout;
