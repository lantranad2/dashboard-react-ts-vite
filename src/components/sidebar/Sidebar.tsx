import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import "../../sass/components/sidebar.scss";
import SubList from "./SubList";
import { mainData, listsData, usefulData, serviceData, userData } from "./data";
import Brand from "../Brand";
import { AppContext } from "../../context/AppContext";

const Sidebar = () => {
  const { state, dispatch } = useContext(AppContext);
  const handleSidebarClosing = () => {
    dispatch({ type: "CLOSE-SIDEBAR" });
  };
  return (
    <aside
      className={state.openSidebar ? `sidebar sidebar--opened` : `sidebar`}
    >
      <div className="sidebar__brand">
        <Brand />
        <CloseIcon
          className="sidebar__close-icon"
          onClick={handleSidebarClosing}
        />
      </div>
      <div className="sidebar__list">
        <SubList data={mainData} />
        <SubList data={listsData} />
        <SubList data={usefulData} />
        <SubList data={serviceData} />
        <SubList data={userData} />
      </div>
    </aside>
  );
};

export default Sidebar;
