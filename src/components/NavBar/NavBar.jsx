import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
    const [fixed, setFixed] = useState(false);
    const { user } = useContext(AuthContext);
    console.log(user);
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li className="z-20">
            <details>
                <summary>Scanning BGO</summary>
                <ul className="p-2 flex flex-col gap-1">
                    <li><NavLink to="/scanningbgo">About</NavLink></li>
                    <li><NavLink to="/committee">Committee</NavLink></li>
                    <li><NavLink to="/constitution">Constitution</NavLink></li>
                </ul>
            </details>
        </li>
        <li><NavLink to="/bgoevents">BGO Events</NavLink></li>
        <li className="z-20">
            <details>
                <summary>Resource</summary>
                <ul className="p-2 flex flex-col gap-1">
                    <li><NavLink to="/reading">Reading</NavLink></li>
                    <li><NavLink to="/question">Question</NavLink></li>
                    <li><NavLink to="/contents">Contents</NavLink></li>
                </ul>
            </details>
        </li>
        <li className="z-20">
            <details>
                <summary>Gallery</summary>
                <ul className="p-2 flex flex-col gap-1 w-36">
                    <li><NavLink to="/galleryPhoto">Gallery Photo</NavLink></li>
                    <li><NavLink to="/galleryAudio">Gallery Audio</NavLink></li>
                    <li><NavLink to="/galleryVideo">Gallery Video</NavLink></li>
                </ul>
            </details>
        </li>
        <li className="z-20">
            <details>
                <summary>Blog</summary>
                <ul className="p-2 flex flex-col gap-1 w-40">
                    <li><NavLink to="/factsFigures">Facts and Figures</NavLink></li>
                    <li><NavLink to="/surveying">Surveying</NavLink></li>
                    <li><NavLink to="/PrevSurvey">Previous Survey</NavLink></li>
                </ul>
            </details>
        </li>
        <li><NavLink to="/signUp">Sign Up</NavLink></li>
        <li><NavLink to="/logIn">Log In</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    })
    return (
        <div className={`navbar bg-gray-300 border-b shadow-sm ${fixed && 'fixed top-0 max-w-screen-xl mx-auto z-10'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        {navLinks}
                    </ul>
                </div>
                <NavLink className="btn btn-ghost text-xl">Geography Olympiad BD</NavLink>
            </div>
            <div className="navbar hidden lg:flex justify-end">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;