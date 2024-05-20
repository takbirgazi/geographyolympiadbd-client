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
            catDesc: "A brief information about Bangladesh Geography Olympiad with Committee and Constitution...",
        },
        {   
            _id: 2,
            catImg: button2,
            catTittle: "BGO Events",
            catDesc: "Information about Olympiad Events in Bangladesh with different levels of education...",
        },
        {
            _id: 3,
            catImg: button3,
            catTittle: "Resources",
            catDesc: "Contains relevant resources in terms of question papers, reading materials, and many more...",
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