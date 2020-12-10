import React from "react";
import UserLayout from "layouts/UserLayout";
import HomePage from "views/HomePage/HomePage";
import LoginPage from "views/LoginPage/LoginPage";
import FoodDetails from "views/FoodDetails";
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
];

export default routes;
