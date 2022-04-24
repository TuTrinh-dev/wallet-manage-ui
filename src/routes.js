import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Wallet from "./views/Wallet";
import SignUp from "./views/authentication/SignUp";
import SignIn from "./views/authentication/SignIn";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Tổng quan",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/wallets",
    name: "My Wallets",
    rtlName: "Ví của tôi",
    icon: "tim-icons icon-chart-pie-36",
    component: Wallet,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "Icons",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "Thông báo",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "Hồ sơ người dùng",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "Typography",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "RTL Hỗ trợ",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl",
  },
  // {
  //   path: "/sign-up",
  //   name: "Sign Up",
  //   rtlName: "Đăng kí",
  //   icon: "tim-icons icon-world",
  //   component: SignUp,
  //   layout: "/pages"
  // },
  {
    path: "/sign-in",
    name: "Sign In",
    rtlName: "Đăng nhập",
    icon: "tim-icons icon-world",
    component: SignIn,
  },
];
export default routes;
