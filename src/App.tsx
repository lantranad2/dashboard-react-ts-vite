import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { AppContextProvider } from "./context/AppContext";
import Home from "./pages/Home";
import List from "./pages/List";
import New from "./pages/New";
import Single from "./pages/Single";
import "./sass/layouts/app.scss";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/users", element: <List /> },
  { path: "/users/:userId", element: <Single /> },
  { path: "/users/new", element: <New /> },
]);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <AppContextProvider>
        <div className="app">
          <Navbar />
          <Sidebar />
          <RouterProvider router={router} />
        </div>
      </AppContextProvider>
    </StyledEngineProvider>
  );
}

export default App;
