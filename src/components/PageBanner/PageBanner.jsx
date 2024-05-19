import logo from "../../assets/logo.png";
import PropTypes from 'prop-types';
import { Parallax, } from 'react-parallax';

const PageBanner = ({pageBannerInfo}) => {
    const {bgImg,optioanTextColor,optioanText,headingColor,beforeText,specialColorText,specialColorTextColor,afterText } = pageBannerInfo;
    return (
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={bgImg}
        bgImageAlt="Background"
        strength={-200}
        className="flex items-center justify-center size-fit w-full"
    >
        <div className="flex items-center justify-center flex-col gap-3 py-16 my-10 w-full">
            <img className="h-32 w-32" src={logo} alt="Logo" />
            <p className={`font-bold ${optioanTextColor}`}>{optioanText}</p>
            <h2 className={`font-bold text-3xl lg:w-2/3 md:w-9/12 w-11/12 mx-auto text-center ${headingColor}`}>{beforeText}  <span className={specialColorTextColor}> {specialColorText} </span> {afterText} </h2>
        </div>
    </Parallax>
    );
};

export default PageBanner;

PageBanner.propTypes = {
    pageBannerInfo: PropTypes.object,
}