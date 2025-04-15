import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Menu from "./pages/Menu";
import Game from "./pages/Game";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Menu /> },
      { path: "game", element: <Game /> }
    ]
  }
]);
