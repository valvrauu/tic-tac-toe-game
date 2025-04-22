import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import MenuPage from "./pages/MenuPage";
import GamePage from "./pages/GamePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MenuPage /> },
      { path: "/game/:mode", element: <GamePage /> }
    ]
  }
]);
