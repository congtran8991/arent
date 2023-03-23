import React from "react";
import MyPage from "../Page/MyPage";
import MyRecord from "../Page/MyRecord";
import Column from "../Page/Column";
import { Navigate } from "react-router-dom";
export const routes = [
  {
    path: "/arent",
    exact: true,
    element: <Navigate to="/homepage" />,
  },
  {
    path: "/homepage",
    exact: true,
    element: <MyPage />,
  },
  {
    path: "/my-record",
    exact: true,
    element: <MyRecord />,
  },
  {
    path: "/column",
    exact: true,
    element: <Column />,
  },
];
