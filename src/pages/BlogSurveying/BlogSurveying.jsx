import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageLeftSidebar from "../../components/PageLeftSidebar/PageLeftSidebar";
import BlogCategory from "../BlogFactsAndFigures/BlogCategory/BlogCategory";
import blogBanner from "../../assets/images/pageBanner/blogBanner.jpg";
import blogLeftSidebar from "../../assets/images/blog/blogLeftSidebar.png"
import SurveyInfo from "./SurveyInfo/SurveyInfo";


const BlogSurveying = () => {
    const bannerInfo = {
        bgImg: blogBanner,
        optioanTextColor: "text-yellow-500",
        headingColor: "text-[#6f2f9f]",
        specialColorTextColor: "text-[#ffff00]",
        optioanText: "",
        beforeText: "Blog:",
        specialColorText: "Surveying",
        afterText: " for Bangladesh Geography Olympiad",
    }

    return (
        <div>
            <Helmet>
                <title>Blog:Previous Survey Results - Geography Olympiad BD</title>
           </Helmet>
           <PageBanner pageBannerInfo={bannerInfo}></PageBanner>
            <div className="bg-[#f5f5f5] border-t-4 border-b-4 border-[#83c9eb] mt-5 py-5">
                <div className="border-b-4 border-[#83c9eb] pb-5">
                    <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
                        <PageLeftSidebar tittle=" BLOG " image={blogLeftSidebar}></PageLeftSidebar>
                        <SurveyInfo></SurveyInfo>
                    </div>
                </div>
                <div className="lg:w-1/2 w-11/12 mx-auto pt-5">
                   <BlogCategory></BlogCategory>
                </div>
            </div>
        </div>
    );
};

export default BlogSurveying;