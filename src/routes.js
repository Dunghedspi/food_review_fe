/* eslint-disable react/jsx-no-undef */
import React from "react";
import UserLayout from "layouts/UserLayout";
import HomePage from "views/User/HomePage/HomePage";
import LoginPage from "views/LoginPage/LoginPage";
import FoodDetails from "views/User/FoodDetails/";
import ShopLayout from "layouts/ShopLayout/index";
import AccountView from "views/Shop/account/AccountView/index";
import DashboardView from "views/Shop/reports/DashboardView";
import ProductListView from "views/Shop/Food/index";
import SettingsView from "views/Shop/SettingsView/index";

const routes = [
  {
    path: "/*",
    element: <UserLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product", element: <FoodDetails /> },
    ],
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "shop/*",
    element: <ShopLayout />,
    children: [
      { path: "account", element: <AccountView /> },
      { path: "dashboard", element: <DashboardView /> },
      { path: "foods/*", element: <ProductListView /> },
      { path: "settings", element: <SettingsView /> },
      // { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
