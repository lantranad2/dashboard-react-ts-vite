import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { AppContextProvider } from "./context/AppContext";
import "./sass/layouts/app.scss";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <AppContextProvider>
        <div className="app">
          <Navbar />
          <Sidebar />
          <Outlet />
        </div>
      </AppContextProvider>
    </StyledEngineProvider>
  );
}

export default App;
