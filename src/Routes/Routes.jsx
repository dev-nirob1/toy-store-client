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
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        
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
                path: "/add-toy",
                element: <PrivateRoutes><AddToy /></PrivateRoutes>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/all-toys",
                element: <AllToys />
            },
            {
                path: "/my-toys",
                element: <PrivateRoutes><MyToys /></PrivateRoutes>,
            },
            {
                path: "/toy-details/:id",
                element: <PrivateRoutes><SingleToyDetails /></PrivateRoutes>
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