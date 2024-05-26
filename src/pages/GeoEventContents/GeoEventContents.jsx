import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";
import ResourchCategory from "../ReadingZones/ResourchCategory/ResourchCategory";
import eventContents from "../../assets/images/pageBanner/eventContents.jpg"
import AboutEventContents from "./AboutEventContents/AboutEventContents";

const GeoEventContents = () => {
    const bannerInfo = {
        bgImg: eventContents,
        optioanTextColor:"text-yellow-500",
        headingColor:"text-[#6f2f9f]",
        specialColorTextColor:" ",
        optioanText:"",
        beforeText:"Resources: iGeo Event Contents ",
        specialColorText:" ",
        afterText:"for Olympiad Preparation",
    }
    return (
        <div>
        <Helmet>
            <title>Previous Question Papers - Geography Olympiad BD</title>
       </Helmet>
       <PageBanner pageBannerInfo={bannerInfo}></PageBanner>
       <div className="bg-[#f5f5f5] border-t-4 border-b-4 border-[#83c9eb] mt-5 py-5">
               <AboutEventContents></AboutEventContents>
            <div className="lg:w-1/2 w-11/12 mx-auto pt-5">
               <ResourchCategory></ResourchCategory>
            </div>
       </div> 
    </div>
    );
};

export default GeoEventContents;