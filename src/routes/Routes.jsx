import { createBrowserRouter } from "react-router-dom";
import Root from './../layout/Root';
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ScanningBgo from './../pages/ScanningBgo/ScanningBgo';
import BgoEvents from './../pages/BgoEvents/BgoEvents';
import Resource from './../pages/Resource/Resource';
import Blog from './../pages/Blog/Blog';
import Gallery from './../pages/Gallery/Gallery';
import Contact from './../pages/Contact/Contact';
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import BgoCommittee from "../pages/BgoCommittee/BgoCommittee";
import BgoConstitution from "../pages/BgoConstitution/BgoConstitution";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'scanningbgo',
                element: <ScanningBgo></ScanningBgo>
            },
            {
                path: "committee",
                element: <BgoCommittee></BgoCommittee>
            },
            {
                path: 'constitution',
                element: <BgoConstitution></BgoConstitution>
            },
            {
                path: 'bgoevents',
                element: <BgoEvents></BgoEvents>
            },
            {
                path: 'resource',
                element: <Resource></Resource>
            },
            {
                path: 'gallery',
                element: <Gallery></Gallery>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'logIn',
                element: <LogIn></LogIn>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'registration',
                element: <PrivateRoute><Registration></Registration></PrivateRoute>
            }
        ]
    }
])

export default router;