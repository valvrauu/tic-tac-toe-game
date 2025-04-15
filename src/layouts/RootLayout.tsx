import { Outlet, useLocation } from "react-router";
import { GameContextProvider } from "../contexts/GameContext";

function RootLayout() {
  const location = useLocation();
  const isMenu = location.pathname === "/";

  return (
    <GameContextProvider>
      <main className={isMenu ? "grid flex-1 place-content-center" : ""}>
        <Outlet />
      </main>
    </GameContextProvider>
  );
}

export default RootLayout;
