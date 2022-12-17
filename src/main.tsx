import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Single from "./pages/Single";
import { StyledEngineProvider } from "@mui/material/styles";
import { AppContextProvider } from "./context/AppContext";
import Users from "./pages/Users";
import Products from "./pages/Products";
import List from "./pages/List";
import { usersColumns, usersRows } from "./components/table-list/data";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "users",
        element: <List />,
      },
      { path: "users/:userId", element: <Single /> },
      { path: "users/new", element: <New /> },
      {
        path: "products",
        element: <List />,
      },
      { path: "products/:productId", element: <Single /> },
      { path: "products/new", element: <New /> },
      { path: "*", element: <span>Not Found</span> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
