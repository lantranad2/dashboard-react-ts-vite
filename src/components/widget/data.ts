import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import UsersIcon from "@mui/icons-material/PersonOutlined";
import OrdersIcon from "@mui/icons-material/ShoppingCartOutlined";
import EarningsIcon from "@mui/icons-material/MonetizationOnOutlined";
import BalanceIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

interface WidgetType {
  title: string;
  percent: number;
  number: number;
  link: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  currency?: string;
}

const users: WidgetType = {
  title: "users",
  percent: -20,
  number: 100,
  link: "See all users",
  Icon: UsersIcon,
};

const orders: WidgetType = {
  title: "orders",
  percent: -10,
  number: 94,
  link: "View all orders",
  Icon: OrdersIcon,
};

const earnings: WidgetType = {
  title: "earnings",
  percent: 17,
  number: 245,
  link: "View net earnings",
  Icon: EarningsIcon,
  currency: "$",
};

const balance: WidgetType = {
  title: "balance",
  percent: 39,
  number: 391,
  link: "See details",
  Icon: BalanceIcon,
  currency: "$",
};

export type { WidgetType };
export { users, orders, earnings, balance };
