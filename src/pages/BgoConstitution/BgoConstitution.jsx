import { Helmet } from 'react-helmet-async';
import PageBanner from './../../components/PageBanner/PageBanner';
import scanningBanner from '../../assets/images/pageBanner/sanningBanner.jpg';
import AboutInfoConstitution from './AboutInfoConstitution/AboutInfoConstitution';
import CategoryScanning from '../ScanningBgo/CategoryScanning/CategoryScanning';

const BgoConstitution = () => {
    const bannerInfo = {
        bgImg: scanningBanner,
        optioanTextColor:"text-yellow-500",
        headingColor:"text-[#6f2f9f]",
        specialColorTextColor:" ",
        optioanText:"",
        beforeText:"Constitution and Bindings for",
        specialColorText:" ",
        afterText:"Bangladesh Geography Olympiad",
    }
    return (
        <div>
             <Helmet>
                <title>Scanning BGO - Geography Olympiad BD</title>
           </Helmet>
           <PageBanner pageBannerInfo={bannerInfo}></PageBanner>
           <div className="bg-[#f5f5f5] border-t-4 border-b-4 border-[#83c9eb] mt-5 py-5">
                <AboutInfoConstitution></AboutInfoConstitution>
                <div className="lg:w-1/2 w-11/12 mx-auto pt-5">
                    <CategoryScanning></CategoryScanning>
                </div>
           </div>
        </div>
    );
};

export default BgoConstitution;