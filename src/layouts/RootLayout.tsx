import { Outlet, useLocation } from "react-router";
import { GameContextProvider } from "../contexts/GameContext";
import clsx from "clsx";

const styles = {
  base: "flex flex-1 flex-col",
  center: "items-center justify-center"
};

function RootLayout() {
  const location = useLocation();
  const isMenu = location.pathname === "/";

  return (
    <GameContextProvider>
      <main className={clsx(styles.base, isMenu ? styles.center : "")}>
        <Outlet />
      </main>
    </GameContextProvider>
  );
}

export default RootLayout;
