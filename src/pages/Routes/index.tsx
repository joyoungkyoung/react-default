import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RoutesString from '@Utils/RoutesString';
import { Login, Test } from '@Pages/index';
import App from '@Root/App';

const router = createBrowserRouter([
    {
        path: RoutesString.Home,
        element: <App />,
        children: [
            { path: `${RoutesString.Login}`, element: <Login /> },
            { path: `${RoutesString.Test}`, element: <Test /> },
        ],
    },
]);

export default router;
