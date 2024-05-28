import logo from '../../assets/logo.png';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaRegEnvelope, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const TopFooter = () => {
    return (
        <div>
           <footer className="footer p-10 bg-[#dae9f7] text-base-content">
                <aside>
                    <img src={logo} alt="Logo" className='h-14 w-14' />
                    <h2 className='font-bold text-xl'>Geography Olympiad BD</h2>
                </aside> 
                <nav>
                    <h6 className="footer-title">Get In Touch</h6> 
                    <p className='flex gap-2 font-bold items-center'><IoLocationOutline /><span>Dhaka, Bangladesh</span></p>
                    <p className='flex gap-2 font-bold items-center'><MdOutlineCall /><span>+8801913171704 </span></p>
                    <p className='flex gap-2 font-bold items-center'><FaRegEnvelope /><span>info@geographyolympiadbd.com </span></p>
                    <div className='flex gap-3 items-center justify-center w-full mx-auto my-5'>
                         <FaFacebookF title='Facebook' className='text-4xl border p-1 border-black rounded-full' />
                         <FaInstagram title='Instagram' className='text-3xl border p-1 border-black rounded-full' />
                         <FaTwitter title='Twitter' className='text-2xl border p-1 border-black rounded-full' />
                         <FaYoutube title='You Tube' className='text-3xl border p-1 border-black rounded-full' />
                         <FaLinkedinIn title='LinkedIn' className='text-4xl border p-1 border-black rounded-full' />
                    </div>
                </nav> 
                <nav>
                    <h6 className="footer-title">Main Links</h6> 
                    <NavLink className="link link-hover" to="/scanningbgo">Scanning BGO</NavLink>
                    <NavLink className="link link-hover" to="/bgoevents">BGO Events</NavLink>
                    <NavLink className="link link-hover" to="/reading">Resource</NavLink>
                    <NavLink className="link link-hover" to="/galleryPhoto">Gallery</NavLink>
                    <NavLink className="link link-hover" to="/factsFigures">Blog</NavLink>
                    <NavLink className="link link-hover" to="/registration">Registration</NavLink>
                    <NavLink className="link link-hover" to="/contact">Contact</NavLink>
                </nav> 
            </footer>
        </div>
    );
};

export default TopFooter;