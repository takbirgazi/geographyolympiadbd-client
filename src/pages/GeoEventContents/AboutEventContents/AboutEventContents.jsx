
import { Fade } from "react-awesome-reveal";
import sidebarImage from "../../../assets/images/readingZone/sidebarRight.png";
import PageLeftSidebar from "../../../components/PageLeftSidebar/PageLeftSidebar";
import eventContentsImage1 from "../../../assets/images/eventContents/eventContentsImage1.jpg"
import eventContentsImage2 from "../../../assets/images/eventContents/eventContentsImage2.jpg"



const AboutEventContents = () => {
    return (
        <div className="border-b-4 border-[#83c9eb] pb-5">
            <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
                <PageLeftSidebar tittle=" RESOURCES " image={sidebarImage}></PageLeftSidebar>
                <div className="lg:w-2/3 w-full">
                    <div className="pb-8">
                        <Fade direction="right">
                            <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">iGeo Event Contents</h2>
                        </Fade>
                    </div>

                    <div className="flex gap-3 ">
                        <div className="border">
                            <img src={eventContentsImage1} alt="" />
                        </div>
                        <div className="border">
                            <img src={eventContentsImage2} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutEventContents;
