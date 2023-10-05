import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Layout/Header/Header";

const App = () => {
    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
};

export default App;
