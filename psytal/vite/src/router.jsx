import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./views/unauthorized_view/views_main/AboutUs";
import LandingPage from "./views/unauthorized_view/views_main/LandingPage";
import Login from "./views/unauthorized_view/views_main/Login";
import GuestLayout from "./views/unauthorized_view/views_main/GuestLayout";
import DefaultLayout from "./views/authorized_view/views_main/DefaultLayout";
import Home from "./views/authorized_view/views_main/Home";
import Accounts from "./views/authorized_view/views_main/Accounts"
import PreRegistration from "./views/authorized_view/views_main/PreRegistration"
import AddUser from "./views/authorized_view/views_main/AddUser";

const router = createBrowserRouter([
    

    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/home',
                element: <Home />
            },

            {
                path: '/accounts',
                element: <Accounts />
            },
            
            {
                path: '/adduser',
                element: <AddUser />
            },

            {
                path: '/preregistration',
                element: <PreRegistration />
            }
            
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/aboutus',
                element: <AboutUs />
            },

            {
                path: '/landingpage',
                element: <LandingPage />
            },

            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router;