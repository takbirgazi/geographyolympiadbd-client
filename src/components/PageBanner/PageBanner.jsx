import logo from "../../assets/logo.png";
import PropTypes from 'prop-types';

const PageBanner = ({pageBannerInfo}) => {
    const {bgImg,optioanTextColor,optioanText,headingColor,beforeText,specialColorText,specialColorTextColor,afterText } = pageBannerInfo;
    return (
        <div className={`my-5 ${bgImg} bg-cover bg-no-repeat bg-center border`}>
           <div className="flex items-center justify-center flex-col gap-3 py-16 bg-white bg-opacity-50">
                <img className="h-32 w-32" src={logo} alt="" />
                <p className={`font-bold ${optioanTextColor}`}>{optioanText}</p>
                <h2 className={`font-bold text-3xl lg:w-1/2 md:w-9/12 w-11/12 mx-auto text-center ${headingColor}`}>{beforeText}  <span className={specialColorTextColor}> {specialColorText} </span> {afterText} </h2>
           </div>
        </div>
    );
};

export default PageBanner;

PageBanner.propTypes = {
    pageBannerInfo: PropTypes.object,
}