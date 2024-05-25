
import { PropTypes } from 'prop-types';
import { Fade } from 'react-awesome-reveal';
const PageLeftSidebar = ({tittle, image}) => {
    return (
        <div className="lg:w-1/3 w-full">
        <Fade direction='left'>
            <div className="flex gap-3 items-center">
                <span className="w-20 bg-red-500 h-4"> </span>
                <p className="font-bold tracking-widest">{tittle}</p>
            </div>
            <div className="border mt-10">
                <img className="w-full" src={image} alt="Sidebar Image" />
            </div>
        </Fade>
        </div>
    );
};

export default PageLeftSidebar;

PageLeftSidebar.propTypes ={
    tittle: PropTypes.string,
    image: PropTypes.string
}