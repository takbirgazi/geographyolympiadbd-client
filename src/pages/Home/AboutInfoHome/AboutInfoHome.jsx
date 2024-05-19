import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import manjurul  from "../../../assets/images/home/manzurul.jpg";

const AboutInfoHome = () => {
    return (
        <div className="border-b-4 border-[#83c9eb] pb-5">
           <div className="flex lg:flex-row lg:gap-2 gap-5 flex-col px-2">
                <div className="lg:w-1/4 w-full">
                    <div className="flex gap-3 items-center">
                        <span className="w-20 bg-red-500 h-4"> </span>
                        <p className="font-bold">G R E E T I N G S </p>
                    </div>
                    <p className="text-sm my-5 font-semibold pr-5">Welcome to the official website of Bangladesh Geography Olympiad (BGO). </p>
                    <p className="text-sm my-5 font-semibold pr-5">Updated: 15 May 2024</p>
                    <div className="border-t border-b py-4">
                        <div className="flex gap-2 items-center justify-center">
                            <FaFacebookF title='Facebook' className='text-4xl border p-1 border-black rounded-full' />
                            <FaInstagram title='Instagram' className='text-4xl border p-1 border-black rounded-full' />
                            <FaTwitter title='Twitter' className='text-4xl border p-1 border-black rounded-full' />
                            <FaYoutube title='You Tube' className='text-4xl border p-1 border-black rounded-full' />
                            <FaLinkedinIn title='LinkedIn' className='text-4xl border p-1 border-black rounded-full' />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/4 w-full flex justify-center items-center">
                    <div>
                        <div className="flex justify-center">
                            <img src={manjurul} alt="" className="h-40 w-40 rounded-full" />
                        </div>
                        <div className="text-center">
                            <p className="text-[#26baf0]">Country Team Leader</p>
                            <p className="text-[#0e77c3]">(Bangladesh Geography Olympiad)</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/4 w-full">
                   <h2 className="text-[#00afef] lg:text-3xl md:text-2xl text-xl font-bold">Greetings from Bangladesh Geography Olympiad !!! </h2>
                   <p className="my-5">Welcome to the official website of Bangladesh Geography Olympiad (BGO). It is our intension to organize nationwide several events each year to make interest in Geography and Environment among young students. All the events will be arranged during May-June each year. School and College students will be able to participate in the events. Moreover, the selected candidates from different evets will be awarded credentials. The BGO Committee will select candidates from Higher Secondary level (16 to 19 years) every year for the International Geography Olympiad Competition. This year the event has been scheduled in Ireland by August <a target="_blank" href="https://igc2024dublin.org/olympiad/" className="text-blue-500">(https://igc2024dublin.org/olympiad/)</a> .</p>
                   <p className="my-3">Thanks for your patience! </p>
                </div>
           </div>
        </div>
    );
};

export default AboutInfoHome;