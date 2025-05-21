import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "@/routes";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={router} />);
