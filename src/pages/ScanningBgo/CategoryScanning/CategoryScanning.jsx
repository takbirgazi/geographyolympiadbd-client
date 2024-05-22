import CategoryCard from "../../../components/CategoryCard/CategoryCard";

import button1 from "../../../assets/images/scanningBgo/button1.jpg";
import button2 from "../../../assets/images/scanningBgo/button2.jpg";
import button3 from "../../../assets/images/scanningBgo/button3.jpg";

const CategoryScanning = () => {

    const catInfo =[
        {
            _id: 1,
            catImg: button1,
            catTittle: "About BGO",
            catDesc: "A brief information about Bangladesh Geography Olympiad with Objective, Vision, and Mission . . .",
        },
        {   
            _id: 2,
            catImg: button2,
            catTittle: "BGO Committee",
            catDesc: "Information regarding the existing Executive Members of BGO with their short biography...",
        },
        {
            _id: 3,
            catImg: button3,
            catTittle: "Constitution",
            catDesc: "Contains the Rules and Regulations about a number of phenomena to run BGO smoothly...",
        }
    ]

    return (
        <div>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    catInfo.map((card) => <CategoryCard key={card._id} categoryCardInfo={card}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryScanning;