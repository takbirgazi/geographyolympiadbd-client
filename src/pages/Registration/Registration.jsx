import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";
import registration from "../../assets/images/pageBanner/registrationBanner.jpg"
import AboutRegistration from "./AboutRegistration/AboutRegistration";

const Registration = () => {
    const bannerInfo = {
        bgImg: registration,
        optioanTextColor: "text-yellow-500",
        headingColor: "text-[#6f2f9f]",
        specialColorTextColor: "text-red-500",
        optioanText: "",
        beforeText: "",
        specialColorText: "Registration:",
        afterText: "for Bangladesh Geography Olympiad ",
    }
    return (
        <div>
            <Helmet>
                <title>Registration - Geography Olympiad BD</title>
            </Helmet>
            <PageBanner pageBannerInfo={bannerInfo}></PageBanner>
            <div className="bg-[#f5f5f5] border-t-4 border-b-4 border-[#83c9eb] mt-5 py-5">
                <AboutRegistration></AboutRegistration>
            </div>
        </div>
    );
};

export default Registration;