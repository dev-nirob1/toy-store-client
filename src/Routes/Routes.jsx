import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import SingleToyDetails from "../Pages/SignleToys/SingleToyDetails";
import UpdateToy from "../Pages/UpdateToyInfo/UpdateToy";
import Blog from "../Pages/Blog/Blog";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        //   errorElement: <
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/addToy",
                element: <PrivateRoutes><AddToy /></PrivateRoutes>
            },
            {
                path: "/allToys",
                element: <AllToys />,
                loader: () => fetch('https://toy-store-server-blond.vercel.app/toys')
            },
            {
                path: "/my-toys",
                element: <PrivateRoutes><MyToys /></PrivateRoutes>,
            },
            {
                path: "/toy-details/:id",
                element: <PrivateRoutes><SingleToyDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://toy-store-server-blond.vercel.app/toys/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <UpdateToy />,
                loader: ({ params }) => fetch(`https://toy-store-server-blond.vercel.app/toys/${params.id}`)
            },
        ]
    },
]);

export default router;