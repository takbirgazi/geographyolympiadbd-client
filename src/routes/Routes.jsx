import { createBrowserRouter } from "react-router-dom";
import Root from './../layout/Root';
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ScanningBgo from './../pages/ScanningBgo/ScanningBgo';
import BgoEvents from './../pages/BgoEvents/BgoEvents';
import Contact from './../pages/Contact/Contact';
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import BgoCommittee from "../pages/BgoCommittee/BgoCommittee";
import BgoConstitution from "../pages/BgoConstitution/BgoConstitution";
import ReadingZones from './../pages/ReadingZones/ReadingZones';
import PreviousQuestionPapers from './../pages/PreviousQuestionPapers/PreviousQuestionPapers';
import GeoEventContents from './../pages/GeoEventContents/GeoEventContents';
import GalleryAudio from "../pages/GalleryAudio/GalleryAudio";
import GalleryVideo from "../pages/GalleryVideo/GalleryVideo";
import GalleryPhoto from "../pages/GalleryPhoto/GalleryPhoto";
import BlogFactsAndFigures from "../pages/BlogFactsAndFigures/BlogFactsAndFigures";
import BlogSurveying from "../pages/BlogSurveying/BlogSurveying";
import BlogPrevSurvey from "../pages/BlogPrevSurvey/BlogPrevSurvey";


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
                path: 'reading',
                element: <ReadingZones></ReadingZones>
            },
            {
                path: 'question',
                element: <PreviousQuestionPapers></PreviousQuestionPapers>
            },
            {
                path: 'contents',
                element: <GeoEventContents></GeoEventContents>
            },
            {
                path: 'GalleryVideo',
                element: <GalleryVideo></GalleryVideo>
            },
            {
                path: 'GalleryAudio',
                element: <GalleryAudio></GalleryAudio>
            },
            {
                path: 'GalleryPhoto',
                element: <GalleryPhoto></GalleryPhoto>
            },
            {
                path: 'factsFigures',
                element: <BlogFactsAndFigures></BlogFactsAndFigures>
            },
            {
                path: 'surveying',
                element: <BlogSurveying></BlogSurveying>
            },
            {
                path: 'PrevSurvey',
                element: <BlogPrevSurvey></BlogPrevSurvey>
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