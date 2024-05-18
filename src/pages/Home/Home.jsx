import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";


const Home = () => {
    const bannerInfo = {
        bgImg: "./assets/images/pageBanner/banner1.jpg",
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
        </div>
    );
};

export default Home;