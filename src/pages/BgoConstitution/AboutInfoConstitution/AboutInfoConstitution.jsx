import scanningSideImg from "../../../assets/images/scanningBgo/scanningSideImg.jpg";
import { Fade } from "react-awesome-reveal";

const AboutInfoConstitution = () => {
    return (
        <div className="border-b-4 border-[#83c9eb] pb-5">
            <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
                <div className="lg:w-1/3 w-full">
                    <div className="flex gap-3 items-center">
                        <span className="w-20 bg-red-500 h-4"> </span>
                        <p className="font-bold tracking-widest"> BGO CONSTITUTION </p>
                    </div>
                    <div className="border mt-10">
                        <img className="w-full" src={scanningSideImg} alt="Sidebar Image" />
                    </div>
                </div>
                <div className="lg:w-2/3 w-full">
                    <div className="pb-8 border-b-2 border-blue-300 border-dotted">
                        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Constitution and Bindings </h2>
                        <p className="my-5 text-xl font-semibold tracking-tight opacity-80 leading-tight">Bangladesh Geography Olympiad (BGO) has been formed by Professor Dr. M. Manzurul Hassan as an Association. BGO will follow general rules of association as per the Laws of the Land. However, considering the nature of the association, this BGO will follow the following Rules and Regulations.</p>

                        <Fade direction="right">
                            <h2 className="font-bold text-xl">Bangladesh Geography Olympiad: </h2>
                            <p className="mb-5 text-xl font-semibold tracking-tight opacity-80 leading-tight flex gap-2">
                                    <span>1.</span>
                                    <p>The Rules and Regulations of BGO were developed and amended by a vote of the BGO Committee (BGOC) through an online meeting on 20 May 2023.</p>
                                </p>
                        </Fade>
                        <Fade direction="right">
                            <h2 className="font-bold text-xl">Scope of Bangladesh Geography Olympiad: </h2>
                            <p className="mb-5 text-xl font-semibold tracking-tight opacity-80 leading-tight flex gap-2">
                                    <span>1.</span>
                                    <p>The Rules and Regulations of BGO were developed and amended by a vote of the BGO Committee (BGOC) through an online meeting on 20 May 2023.</p>
                            </p>
                        </Fade>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInfoConstitution;