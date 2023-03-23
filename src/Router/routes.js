import React from 'react';
import MyPage from '../Page/MyPage';
import MyRecord from '../Page/MyRecord';
import Column from '../Page/Column';
import {
    Navigate,
  } from "react-router-dom";
export const routes = [
    {
        path: "/s",
        exact: false,
        element: <Navigate to="/homepage"/>,
    },
    {
        path: "/",
        exact: false,
        element: <MyPage/>,
    },
    {
        path: "/my-record",
        exact: false,
        element: <MyRecord />
    },
    {
        path: "/column",
        exact: false,
        element: <Column />
    }
];