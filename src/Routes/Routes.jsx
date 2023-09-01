import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";

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
                element: <Register />
            },
            {
                path: "/about",
                element: <Register />
            },
            {
                path: "/addToy",
                element: <AddToy />
            },
            {
                path: "/allToys",
                element: <AllToys />,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: "/myToys",
                element: <MyToys />,
            },
        ]
    },
]);

export default router;