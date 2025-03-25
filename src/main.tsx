import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import Game from "./pages/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/game",
    element: <Game />
  }
]);

const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={router} />);
