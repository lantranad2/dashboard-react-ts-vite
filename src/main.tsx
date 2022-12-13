import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import New from "./pages/New";
import Single from "./pages/Single";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "users", element: <List /> },
      { path: "users/:userId", element: <Single /> },
      { path: "users/new", element: <New /> },
      { path: "products", element: <List /> },
      { path: "products/:productId", element: <Single /> },
      { path: "products/new", element: <New /> },
      { path: "*", element: <span>Not Found</span> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
