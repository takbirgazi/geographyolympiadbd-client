import { createBrowserRouter } from "react-router-dom";
import Root from './../layout/Root';
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ScanningBgo from './../pages/ScanningBgo/ScanningBgo';
import BgoEvents from './../pages/BgoEvents/BgoEvents';
import Resource from './../pages/Resource/Resource';
import Blog from './../pages/Blog/Blog';
import Gallery from './../pages/Gallery/Gallery';
import Registration from './../pages/Registration/Registration';
import Contact from './../pages/Contact/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/scanningbgo',
                element: <ScanningBgo></ScanningBgo>
            },
            {
                path: '/bgoevents',
                element: <BgoEvents></BgoEvents>
            },
            {
                path: '/resource',
                element: <Resource></Resource>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;