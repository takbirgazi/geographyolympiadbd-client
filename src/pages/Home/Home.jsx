import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";
import home_banner from "../../assets/images/pageBanner/home_banner.jpg";
import AboutInfoHome from "./AboutInfoHome/AboutInfoHome";
import Category from "./Category/Category";


const Home = () => {
    const bannerInfo = {
        bgImg: home_banner,
        optioanTextColor:"text-yellow-500",
        headingColor:"text-[#6f2f9f]",
        specialColorTextColor:" ",
        optioanText:"WELCOME TO",
        beforeText:"The Information Hub of Bangladesh",
        specialColorText:" ",
        afterText:"Geography Olympiad",
    }
    return (
        <div>
           <Helmet>
                <title>Home - Geography Olympiad BD</title>
           </Helmet>
           <PageBanner pageBannerInfo={bannerInfo}></PageBanner>
           <div className="bg-[#f5f5f5] border-t-4 border-b-4 border-[#83c9eb] mt-5 py-5">
                <AboutInfoHome></AboutInfoHome>
                <div className="lg:w-1/2 w-11/12 mx-auto pt-5">
                    <Category></Category>
                </div>
           </div>
        </div>
    );
};

export default Home;