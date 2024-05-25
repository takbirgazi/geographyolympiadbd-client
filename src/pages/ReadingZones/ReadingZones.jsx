import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";
import readingZone from "../../assets/images/pageBanner/raedingZone.jpg";
import ResourchCategory from "./ResourchCategory/ResourchCategory";
import AboutReadingZones from "./AboutReadingZones/AboutReadingZones";

const ReadingZones = () => {
    const bannerInfo = {
        bgImg: readingZone,
        optioanTextColor:"text-yellow-500",
        headingColor:"text-[#6f2f9f]",
        specialColorTextColor:" ",
        optioanText:"",
        beforeText:"Resources: Reading Zones for",
        specialColorText:" ",
        afterText:"Geography Olympiad Preparation",
    }
    return (
        <div>
            <Helmet>
                <title>Reading Zones - Geography Olympiad BD</title>
           </Helmet>
           <PageBanner pageBannerInfo={bannerInfo}></PageBanner>
           <div className="bg-[#f5f5f5] border-t-4 border-b-4 border-[#83c9eb] mt-5 py-5">
                   <AboutReadingZones></AboutReadingZones>
                <div className="lg:w-1/2 w-11/12 mx-auto pt-5">
                   <ResourchCategory></ResourchCategory>
                </div>
           </div> 
        </div>
    );
};

export default ReadingZones;