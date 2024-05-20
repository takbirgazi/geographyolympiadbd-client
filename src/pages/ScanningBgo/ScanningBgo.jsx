import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";
import scanningBanner from "../../assets/images/pageBanner/sanningBanner.jpg"
import CategoryScanning from "./CategoryScanning/CategoryScanning";
import AboutInfoScanning from "./AboutInfoScanning/AboutInfoScanning";

const ScanningBgo = () => {
    const bannerInfo = {
        bgImg: scanningBanner,
        optioanTextColor:"text-yellow-500",
        headingColor:"text-[#6f2f9f]",
        specialColorTextColor:" ",
        optioanText:"",
        beforeText:"Information About Bangladesh",
        specialColorText:" ",
        afterText:"Geography Olympiad",
    }

    return (
        <div>
             <Helmet>
                <title>Scanning BGO - Geography Olympiad BD</title>
           </Helmet>
           <PageBanner pageBannerInfo={bannerInfo}></PageBanner>
           <div className="bg-[#f5f5f5] border-t-4 border-b-4 border-[#83c9eb] mt-5 py-5">
                <AboutInfoScanning></AboutInfoScanning>
                <div className="lg:w-1/2 w-11/12 mx-auto pt-5">
                    <CategoryScanning></CategoryScanning>
                </div>
           </div>
        </div>
    );
};

export default ScanningBgo;