import { Outlet } from "react-router-dom";
import NavBar from './../components/NavBar/NavBar';
import Footer from './../components/Footer/Footer';
import TopNavBar from "./../components/NavBar/TopNavBar";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <TopNavBar></TopNavBar>
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;