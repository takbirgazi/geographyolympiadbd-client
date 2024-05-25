import scanningSideImg from "../../../assets/images/scanningBgo/scanningSideImg.jpg";
import PageLeftSidebar from "../../../components/PageLeftSidebar/PageLeftSidebar";
import ConstitutionInfoText from "./ConstitutionInfoText";

const AboutInfoConstitution = () => {
    return (
        <div className="border-b-4 border-[#83c9eb]">
            <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
                <PageLeftSidebar tittle="BGO CONSTITUTION" image={scanningSideImg}></PageLeftSidebar>
                <ConstitutionInfoText></ConstitutionInfoText>
            </div>
        </div>
    );
};

export default AboutInfoConstitution;