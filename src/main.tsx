import "preact/debug"; // Enable Preact DevTools
import { render } from "preact";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { ConvexProvider, convex } from "./lib/convex";
import "./index.css";

render(
  <ConvexProvider client={convex}>
    <RouterProvider router={router} />
  </ConvexProvider>,
  document.getElementById("app")!
);
