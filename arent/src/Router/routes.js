import React from 'react';
import MyPage from '../Page/MyPage';
import MyRecord from '../Page/MyRecord';
import Column from '../Page/Column';
export const routes = [
    {
        path: "/",
        exact: false,
        main: <MyPage/>
    },
    {
        path: "/my-record",
        exact: false,
        main: <MyRecord />
    },
    {
        path: "/column",
        exact: false,
        main: <Column />
    }
];