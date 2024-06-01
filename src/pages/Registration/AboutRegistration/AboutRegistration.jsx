import PageLeftSidebar from "../../../components/PageLeftSidebar/PageLeftSidebar";
import sidebarImage from "../../../assets/images/registration/registrationSidebar.png";
import InfoText from "./InfoText";

const AboutRegistration = () => {
    return (
        <div className="border-b-4 border-[#83c9eb] pb-5">
            <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
                <PageLeftSidebar tittle=" REGISTRATION " image={sidebarImage}></PageLeftSidebar>
                <InfoText></InfoText>
            </div>
        </div>
    );
};

export default AboutRegistration;