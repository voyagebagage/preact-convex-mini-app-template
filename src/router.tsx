import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  Link,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { App } from "./app";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <header class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <svg
                class="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h1 class="text-xl font-bold text-gray-900">Preact App</h1>
            </div>

            <nav class="flex space-x-8">
              <Link
                to="/"
                class="text-gray-600 hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <Link
                to="/about"
                class="text-gray-600 hover:text-indigo-600 transition-colors">
                About
              </Link>
              <Link
                to="/contact"
                class="text-gray-600 hover:text-indigo-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
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
