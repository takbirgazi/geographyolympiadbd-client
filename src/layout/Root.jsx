import { Outlet } from "react-router-dom";
import NavBar from './../components/NavBar/NavBar';
import Footer from './../components/Footer/Footer';
import TopNavBar from "./../components/NavBar/TopNavBar";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto bg-white text-black">
            <TopNavBar></TopNavBar>
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Root;