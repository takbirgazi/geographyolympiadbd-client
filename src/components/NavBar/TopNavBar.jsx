import logo from "../../assets/logo.png";
import { MdOutlineCall } from "react-icons/md";
import { FaRegEnvelope} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const TopNavBar = () => {
    return (
        <div className="bg-white py-2 shadow-sm w-11/12 mx-auto">
           <div className="md:max-h-16 flex flex-col md:flex-row md:justify-between md:items-center justify-start items-start gap-2">
                <div className="flex justify-center items-center w-full md:block md:w-fit">
                    <NavLink to="/"><img src={logo} alt="Logo" className="h-14 " /></NavLink>
                </div>
                <div className="flex gap-1 items-center">
                   <div className="border rounded-full p-1 bg-slate-200 h-12 w-12 flex items-center justify-center">
                        <FaRegEnvelope className="text-3xl" />
                   </div>
                    <div className="flex flex-col -gap-1">
                        <p className="font-bold p-0 m-0">Email: </p>
                        <p className="p-0 m-0 -mt-1">info@geographyolympiadbd.com</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <div className="border rounded-full p-1 bg-slate-200 h-12 w-12 flex items-center justify-center">
                        <MdOutlineCall className="text-3xl" />
                   </div>
                    <div className="flex flex-col -gap-1">
                        <p className="font-bold p-0 m-0">Voice: </p>
                        <p className="p-0 m-0 -mt-1">+8801913171704  (General Secretary)</p>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default TopNavBar;