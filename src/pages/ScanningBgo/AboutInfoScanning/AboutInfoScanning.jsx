import scanningSideImg from "../../../assets/images/scanningBgo/scanningSideImg.jpg";
import objective from "../../../assets/images/scanningBgo/objective.png";
import vision from "../../../assets/images/scanningBgo/vision.png";
import mission from "../../../assets/images/scanningBgo/mission.png";
import { Fade } from "react-awesome-reveal";

const AboutInfoScanning = () => {
    const target = [
        {
            _id: 1,
            image: objective,
            tittle: "Objective.",
            desc: "The main objective of Bangladesh Geography Olympiad (BGO) is to disseminate the importance of geographical knowledge to interested students nationally."
        },
        {
            _id: 2,
            image: vision,
            tittle: "Vision.",
            desc: "Encouraging young students to know about sustainable development with geographical theories and methodologies."
        },
        {
            _id: 3,
            image: mission,
            tittle: "Mission.",
            desc: "BGO is to disseminate the modern geographical skills through hands-on training and organizing geography events to tackle climate and environmental challenges."
        }
    ]
    return (
        <div className="border-b-4 border-[#83c9eb] pb-5">
            <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
                <div className="lg:w-1/3 w-full">
                    <div className="flex gap-3 items-center">
                        <span className="w-20 bg-red-500 h-4"> </span>
                        <p className="font-bold tracking-widest"> ABOUT BGO </p>
                    </div>
                    <div className="border mt-10">
                        <img className="w-full" src={scanningSideImg} alt="Sidebar Image" />
                    </div>
                </div>
                <div className="lg:w-2/3 w-full">
                    <div className="pb-8 border-b-2 border-blue-300 border-dotted">
                        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">About Bangladesh Geography Olympiad</h2>
                        <p className="my-5 text-xl font-semibold tracking-tight opacity-80 leading-tight">Bangladesh Geography Olympiad (BGO) has been established to make an opportunity as a way to get students interested in Geography. It is an avenue to learn the interaction between biotic and abiotic factors to analyse the existing situation of ecology. </p>
                        <p className="text-[#00afef] ml-10 my-5 text-xl font-semibold tracking-tight opacity-80 leading-tight">The geographical knowledge can be utilized to explain environmental justice with people and places. </p>
                        <p className="my-5 text-xl font-semibold tracking-tight opacity-80 leading-tight">Students will also learn geographical techniques to transfer these phenomena into maps for visualizing the real-world scenario as well as to learn how to formulate spatial decision-support policy with spatial mapping. </p>
                    </div>
                    <div className="mt-5">
                        <Fade direction="right">
                            {
                                target.map(card => <div key={card._id} className="py-5 flex md:flex-row flex-col items-center gap-2">
                                    <div className="md:w-2/12">
                                        <img src={card.image} className="p-4 w-full" alt="Mission" />
                                    </div>
                                    <div className=" md:w-10/12 w-11/12">
                                        <h2 className="text-2xl font-bold opacity-80 mb-5">{card.tittle}</h2>
                                        <p className="text-lg font-semibold tracking-tight opacity-80 leading-tight">{card.desc}</p>
                                    </div>
                                </div>)
                            }
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInfoScanning;