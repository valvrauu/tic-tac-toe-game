import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";

import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import Game from "./pages/Game";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/game",
        element: <Game />
      }
    ]
  }
]);

const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={router} />);
