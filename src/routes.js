/* eslint-disable react/jsx-no-undef */
import React from "react";
import UserLayout from "layouts/UserLayout";
import HomePage from "views/User/HomePage/HomePage";
import LoginPage from "views/LoginPage/index";
import FoodDetails from "views/User/FoodDetails/";
import ShopAdminLayout from "layouts/ShopAdminLayout/index";
import AccountView from "views/Shop/account/AccountView/index";
import DashboardView from "views/Shop/reports/DashboardView";
import ProductListView from "views/Shop/Food/index";
import SettingsView from "views/Shop/SettingsView/index";
import SignUpPage from "views/SignUpPage/SignUpPage";
import ResetPassPage from "views/ResetPassPage";
import AdminLayout from "layouts/Auth";
import UserDetailsView from "views/User/ProfilePage";
import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: <Navigate to="/food" />,
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [{ path: "/", element: <UserDetailsView /> }],
  },
  {
    path: "/food",
    element: <UserLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/token", element: <FoodDetails /> },
    ],
  },
  {
    path: "/auth/*",
    element: <AdminLayout />,
    children: [
      {
        path: "/signin",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/reset-password",
        element: <ResetPassPage />,
      },
    ],
  },
  {
    path: "shop/*",
    element: <ShopAdminLayout />,
    children: [
      { path: "account", element: <AccountView /> },
      { path: "dashboard", element: <DashboardView /> },
      { path: "foods/*", element: <ProductListView /> },
      { path: "settings", element: <SettingsView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "admin/",
    element: <ShopAdminLayout />,
    children: [
      { path: "account", element: <AccountView /> },
      { path: "dashboard", element: <DashboardView /> },
      { path: "foods/*", element: <ProductListView /> },
      { path: "settings", element: <SettingsView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
