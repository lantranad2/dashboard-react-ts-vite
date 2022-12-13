import DashboardIcon from "@mui/icons-material/Dashboard";

import UsersIcon from "@mui/icons-material/PersonOutlined";
import ProductsIcon from "@mui/icons-material/StoreOutlined";
import OrdersIcon from "@mui/icons-material/CreditCardOutlined";
import DeliveryIcon from "@mui/icons-material/LocalShippingOutlined";

import StatsIcon from "@mui/icons-material/InsertChartOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";

import SystemHealthIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import LogsIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsIcon from "@mui/icons-material/SettingsApplicationsOutlined";

import ProfileIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/ExitToAppOutlined";

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface ItemType {
  id: number;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  text: string;
}

interface SubListType {
  title: string;
  items: ItemType[];
}

const mainData: SubListType = {
  title: "main",
  items: [{ id: 1, Icon: DashboardIcon, text: "Dashboard" }],
};

const listsData: SubListType = {
  title: "lists",
  items: [
    { id: 1, Icon: UsersIcon, text: "Users" },
    { id: 2, Icon: ProductsIcon, text: "Products" },
    { id: 3, Icon: OrdersIcon, text: "Orders" },
    { id: 4, Icon: DeliveryIcon, text: "Delivery" },
  ],
};

const usefulData: SubListType = {
  title: "useful",
  items: [
    { id: 1, Icon: StatsIcon, text: "Stats" },
    { id: 2, Icon: NotificationsIcon, text: "Notifications" },
  ],
};

const serviceData: SubListType = {
  title: "service",
  items: [
    { id: 1, Icon: SystemHealthIcon, text: "System Health" },
    { id: 2, Icon: LogsIcon, text: "Logs" },
    { id: 3, Icon: SettingsIcon, text: "Settings" },
  ],
};

const userData: SubListType = {
  title: "user",
  items: [
    { id: 1, Icon: ProfileIcon, text: "Profile" },
    { id: 2, Icon: LogoutIcon, text: "Logout" },
  ],
};

export type { SubListType };
export { mainData, listsData, usefulData, serviceData, userData };
