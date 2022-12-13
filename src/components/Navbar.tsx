import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import { AppContext } from "../context/AppContext";
import "../sass/components/navbar.scss";
import Brand from "./Brand";
import profileAdmin from "../assets/profile-admin.jpeg";

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleSidebarOpenning = () => {
    dispatch({ type: "OPEN-SIDEBAR" });
  };

  return (
    <nav className="navbar">
      <MenuIcon className="navbar__icon-menu" onClick={handleSidebarOpenning} />
      <Brand />
      <div className="navbar__search">
        <input
          className="navbar__search-input"
          type="text"
          placeholder="Search..."
        />
        <SearchOutlinedIcon className="navbar__icon navbar__icon--search" />
      </div>
      {state.darkMode ? (
        <LightModeOutlinedIcon
          className="navbar__icon navbar__icon--mode"
          onClick={() => dispatch({ type: "TOGGLE-MODE" })}
        />
      ) : (
        <DarkModeOutlinedIcon
          className="navbar__icon navbar__icon--mode"
          onClick={() => dispatch({ type: "TOGGLE-MODE" })}
        />
      )}

      <div className="navbar__notification">
        <NotificationsOutlinedIcon className="navbar__icon" />
        <span className="navbar__notification-text">5</span>
      </div>
      <div className="navbar__message">
        <ChatBubbleOutlineOutlinedIcon className="navbar__icon" />
        <span className="navbar__message-text">19</span>
      </div>
      <img className="navbar__img" src={profileAdmin} alt="Admin" />
    </nav>
  );
};

export default Navbar;
