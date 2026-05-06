import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import HomePage from "../Pages/HomePage";

const routes = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout />,
        children: [{
            index: true,
            element: <HomePage />
        }]
    },
]);

export default routes;