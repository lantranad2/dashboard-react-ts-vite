import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { AppContext, AppContextProvider } from "./context/AppContext";
import "./sass/layouts/app.scss";

function App() {
  const { state } = useContext(AppContext);

  useEffect(() => {
    document.body.classList.toggle("dark-mode");
  }, [state.darkMode]);

  return (
    <div className="container app">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
