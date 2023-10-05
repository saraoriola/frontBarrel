import { createBrowserRouter } from "react-router-dom";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";

const routes = createBrowserRouter([
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
