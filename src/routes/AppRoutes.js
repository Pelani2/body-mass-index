import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
]);

export default AppRoutes;