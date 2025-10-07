import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
