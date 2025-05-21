import { createBrowserRouter } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import MenuPage from "@/pages/MenuPage";
import GamePage from "@/pages/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MenuPage /> },
      { path: "/singleplayer", element: <GamePage mode="singleplayer" /> },
      { path: "/multiplayer", element: <GamePage mode="multiplayer" /> }
    ]
  }
]);

export default router;
