import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./views/unauthorized_view/views_main/AboutUs";
import LandingPage from "./views/unauthorized_view/views_main/LandingPage";
import Login from "./views/unauthorized_view/views_main/Login";
import GuestLayout from "./views/unauthorized_view/views_main/GuestLayout";
import DefaultLayout from "./views/authorized_view/views_main/DefaultLayout";
import Home from "./views/authorized_view/views_main/Home";
import Accounts from "./views/authorized_view/views_main/Accounts"
import PreRegistration from "./views/authorized_view/views_main/PreRegistration"
import Links from "./views/authorized_view/views_main/Links";
import AdminLayout from "./views/authorized_view/views_main/AdminLayout";
import Dashboard from "./views/authorized_view/views_main/Dashboard";
import ManageUsers from "./views/authorized_view/views_main/ManageUsers";
import StudentList from "./views/authorized_view/views_components/StudentList";
import EmployeeList from "./views/authorized_view/views_components/EmployeeList";
import PreEnrollment from "./views/authorized_view/views_main/PreEnrollment"

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <AdminLayout />,
        children:[
            {
                path: '',
                element: <Home />
            },
           

            {
        
                path: 'preregistration',
                element: <PreRegistration />
                
            },

            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'preenrollment',
                element: <PreEnrollment />
            },
            {
                path: 'links',
                element: <Links />
            },

            {
                path: 'manageusers',
                element: <ManageUsers />,
                children:[
                    {
                        path: '',
                        element: <StudentList />
                    },

                    {
                        path: '',
                        element: <EmployeeList />
                    }
                ]
            }
        ]
    },
    
    
    
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