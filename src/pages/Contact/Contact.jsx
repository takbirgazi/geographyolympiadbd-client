import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";
import contactBanner from "../../assets/images/contact/contactBanner.jpg";
import ContactForm from "./ContactForm/ContactForm";
import { Fade } from "react-awesome-reveal";
import { TiMessages } from "react-icons/ti";

const Contact = () => {
    const bannerInfo = {
        bgImg: contactBanner,
        optioanTextColor: "text-yellow-500",
        headingColor: "text-[#6f2f9f]",
        specialColorTextColor: "text-red-500",
        optioanText: "",
        beforeText: "",
        specialColorText: "Contact",
        afterText: "for any Enquiry Regarding Bangladesh Geography Olympiad",
    }

    return (
        <div>
            <Helmet>
                <title>Contact - Geography Olympiad BD</title>
            </Helmet>
            <PageBanner pageBannerInfo={bannerInfo}></PageBanner>
            <div className="bg-[#f5f5f5] border-t-4 border-b-4 border-[#83c9eb] mt-5 py-5">
                <div className="border-b-4 border-[#83c9eb] pb-5">
                    <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
                        <div className="lg:w-1/3 w-full">
                            <Fade direction='left'>
                                <div className="flex gap-3 items-center">
                                    <span className="w-20 bg-red-500 h-4"> </span>
                                    <p className="font-bold tracking-widest"> Contact </p>
                                </div>
                                <div className="mt-10">
                                    <div className="bg-orange-500 pl-9 py-5 rounded-full flex items-center justify-between relative">
                                        <p className="text-white font-bold text-xl uppercase">Contact Us</p>
                                        <p className="absolute right-0 bg-white rounded-full p-3"><TiMessages className="text-4xl text-orange-500" /></p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;