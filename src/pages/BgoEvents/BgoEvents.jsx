import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";
import bgoEvents from "../../assets/images/pageBanner/bgoEvents.jpg";
import CategoryEvents from "./CategoryEvents/CategoryEvents";
import AboutEvents from "./AboutEvents/AboutEvents";

const BgoEvents = () => {
    const bannerInfo = {
        bgImg: bgoEvents,
        optioanTextColor:"text-yellow-500",
        headingColor:"text-[#6f2f9f]",
        specialColorTextColor:" ",
        optioanText:"",
        beforeText:"Annual Events for Bangladesh",
        specialColorText:" ",
        afterText:"Geography Olympiad",
    }
    return (
        <div>
            <Helmet>
                <title>BGO Events - Geography Olympiad BD</title>
           </Helmet>
           <PageBanner pageBannerInfo={bannerInfo}></PageBanner>
           <div className="bg-[#f5f5f5] border-t-4 border-b-4 border-[#83c9eb] mt-5 py-5">
                    <AboutEvents></AboutEvents>
                <div className="lg:w-1/2 w-11/12 mx-auto pt-5">
                    <CategoryEvents></CategoryEvents>
                </div>
           </div>           
        </div>
    );
};

export default BgoEvents;