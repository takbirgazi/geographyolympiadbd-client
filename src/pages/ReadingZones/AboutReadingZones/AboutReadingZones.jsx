import PageLeftSidebar from "../../../components/PageLeftSidebar/PageLeftSidebar";
import sidebarImage from "../../../assets/images/readingZone/sidebarRight.png";
import InfoTextReadingZone from "../InfoTextReadingZone/InfoTextReadingZone";

const AboutReadingZones = () => {
    return (
        <div className="border-b-4 border-[#83c9eb] pb-5">
            <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
                <PageLeftSidebar tittle=" RESOURCES " image={sidebarImage}></PageLeftSidebar>
                <InfoTextReadingZone></InfoTextReadingZone>
            </div>
        </div>
    );
};

export default AboutReadingZones;