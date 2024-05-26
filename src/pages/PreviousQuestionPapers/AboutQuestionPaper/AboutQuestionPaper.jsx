
import sidebarImage from "../../../assets/images/readingZone/sidebarRight.png";
import PageLeftSidebar from "../../../components/PageLeftSidebar/PageLeftSidebar";
import InfoTextQuestionPaper from "../InfoTextQuestionPaper/InfoTextQuestionPaper";


const AboutQuestionPaper = () => {
    return (
        <div className="border-b-4 border-[#83c9eb] pb-5">
            <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
                <PageLeftSidebar tittle=" RESOURCES " image={sidebarImage}></PageLeftSidebar>
                <InfoTextQuestionPaper></InfoTextQuestionPaper>
            </div>
        </div>
    );
};

export default AboutQuestionPaper;
