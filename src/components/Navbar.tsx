import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "../context/AppContext";
import "../sass/components/navbar.scss";
import Brand from "./Brand";

const Navbar = () => {
  const { dispatch } = useContext(AppContext);

  const handleSidebarOpenning = () => {
    dispatch({ type: "OPEN-SIDEBAR" });
  };

  return (
    <nav className="container navbar">
      <MenuIcon className="navbar__icon-menu" onClick={handleSidebarOpenning} />
      <Brand />
    </nav>
  );
};

export default Navbar;
