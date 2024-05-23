import scanningSideImg from "../../../assets/images/scanningBgo/scanningSideImg.jpg";
import ConstitutionInfoText from "./ConstitutionInfoText";

const AboutInfoConstitution = () => {
    return (
        <div className="border-b-4 border-[#83c9eb]">
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
                <ConstitutionInfoText></ConstitutionInfoText>
            </div>
        </div>
    );
};

export default AboutInfoConstitution;