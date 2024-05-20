import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [fixed, setFixed] = useState(false);
    const navLinks = <>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/scanningbgo">Scanning BGO</NavLink></li>
                            <li><NavLink to="/bgoevents">BGO Events</NavLink></li>
                            <li><NavLink to="/resource">Resource</NavLink></li>
                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/signUp">Sign Up</NavLink></li>
                            <li><NavLink to="/logIn">Log In</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                    </>
    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 100){
            setFixed(true);
        }else{
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
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;