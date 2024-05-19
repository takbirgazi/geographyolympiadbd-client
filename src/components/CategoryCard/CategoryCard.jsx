import PropTypes  from 'prop-types';


const CategoryCard = ({categoryCardInfo}) => {
    const {catImg, catTittle, catDesc} = categoryCardInfo;

    return (
        <div className="border rounded">
            <div className="bg-black flex items-center justify-center">
                <img className="h-36" src={catImg} alt="Logo" />
            </div>
            <div className="p-4">
                <h3 className="font-bold text-xl">{catTittle}</h3>
                <p className="text-sm my-3">{catDesc}</p>
            </div>
        </div>
    );
};

export default CategoryCard;

CategoryCard.propTypes = {
    categoryCardInfo: PropTypes.object,
}