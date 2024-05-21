import CategoryCard from "../../../components/CategoryCard/CategoryCard";

import button1 from "../../../assets/images/home/button1.jpg";
import button2 from "../../../assets/images/home/button2.jpg";
import button3 from "../../../assets/images/home/button3.jpg";
import button4 from "../../../assets/images/home/button4.jpg";
import button5 from "../../../assets/images/home/button5.jpg";
import button6 from "../../../assets/images/home/button6.jpg";

const CategoryHome = () => {
    const catInfo = [
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
        },
        {
            _id: 4,
            catImg: button4,
            catTittle: "Gallery",
            catDesc: "Still Photographs, Audio, and Video, for historical snapshots of Geography Olympiad...",
        },
        {
            _id: 5,
            catImg: button5,
            catTittle: "Blog",
            catDesc: "People's opinions regarding many aspects about Bangladesh Geography Olympiad...",
        },
        {
            _id: 6,
            catImg: button6,
            catTittle: "Registration",
            catDesc: "Information about the Registration Process for Geography Olympiad in Bangladesh...",
        }
    ]
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                catInfo.map((card) => <CategoryCard key={card._id} categoryCardInfo={card}></CategoryCard>)
            }
        </div>
    );
};

export default CategoryHome;