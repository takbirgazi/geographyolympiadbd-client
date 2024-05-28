import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";
import galleryBanner from '../../assets/images/pageBanner/galleryBanner.jpg'
import sidebarImage from "../../assets/images/gallery/leftSidebar.png"
import PageLeftSidebar from "../../components/PageLeftSidebar/PageLeftSidebar";
import GalleryCategory from "./GalleryCategory/GalleryCategory";
import AudioInfo from "./AudioInfo/AudioInfo";



const GalleryAudio = () => {
    const bannerInfo = {
        bgImg: galleryBanner,
        optioanTextColor: "text-yellow-500",
        headingColor: "text-[#6f2f9f]",
        specialColorTextColor: "text-white",
        optioanText: "",
        beforeText: "Gallery:",
        specialColorText: "Audio Documents",
        afterText: " for Bangladesh Geography Olympiad",
    }

    return (
        <div>
            <Helmet>
                <title>Gallery Audio - Geography Olympiad BD</title>
            </Helmet>
            <PageBanner pageBannerInfo={bannerInfo}></PageBanner>
            <div className="bg-[#f5f5f5] border-t-4 border-b-4 border-[#83c9eb] mt-5 py-5">
                <div className="border-b-4 border-[#83c9eb] pb-5">
                    <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
                        <PageLeftSidebar tittle=" GALLERY " image={sidebarImage}></PageLeftSidebar>
                        <AudioInfo></AudioInfo>
                    </div>
                </div>
                <div className="lg:w-1/2 w-11/12 mx-auto pt-5">
                    <GalleryCategory></GalleryCategory>
                </div>
            </div>
        </div>
    );
};

export default GalleryAudio;