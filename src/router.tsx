import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  Link,
} from "@tanstack/react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "20px" }}>
          About
        </Link>
        <Link to="/contact" style={{ marginRight: "20px" }}>
          Contact
        </Link>
      </nav>
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, contactRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
