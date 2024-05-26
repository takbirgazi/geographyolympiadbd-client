
import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";
import ResourchCategory from "../ReadingZones/ResourchCategory/ResourchCategory";
import questionPaper from "../../assets/images/pageBanner/questionPaper.jpg";
import AboutQuestionPaper from "./AboutQuestionPaper/AboutQuestionPaper";


const PreviousQuestionPapers = () => {
    const bannerInfo = {
        bgImg: questionPaper,
        optioanTextColor:"text-yellow-500",
        headingColor:"text-[#6f2f9f]",
        specialColorTextColor:" ",
        optioanText:"",
        beforeText:"Resources: Previous Question Papers for",
        specialColorText:" ",
        afterText:"the Preparation Geography Olympiad",
    }
    return (
        <div>
            <Helmet>
                <title>Previous Question Papers - Geography Olympiad BD</title>
           </Helmet>
           <PageBanner pageBannerInfo={bannerInfo}></PageBanner>
           <div className="bg-[#f5f5f5] border-t-4 border-b-4 border-[#83c9eb] mt-5 py-5">
                   <AboutQuestionPaper></AboutQuestionPaper>
                <div className="lg:w-1/2 w-11/12 mx-auto pt-5">
                   <ResourchCategory></ResourchCategory>
                </div>
           </div> 
        </div>
    );
};

export default PreviousQuestionPapers;