import { createBrowserRouter } from "react-router-dom";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";
import Home from "./components/Home/Home";
import GetStarted from "./components/Layout/GetStarted/GetStarted";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        },
    {
            path: "/welcome",
            element: <GetStarted />,
            },
    {
        path: "login",
        element: <Login />,
        },
    {
        path: "register",
        element: <Register />,
    },

]);

export default routes;
