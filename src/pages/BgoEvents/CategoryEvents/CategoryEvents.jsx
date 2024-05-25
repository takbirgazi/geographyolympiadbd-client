import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import button1 from "../../../assets/images/bgoEvents/button1.jpg";
import button2 from "../../../assets/images/bgoEvents/button2.jpg";
import button3 from "../../../assets/images/bgoEvents/button3.jpg";

const CategoryEvents = () => {
    const catInfo =[
        {
            _id: 1,
            catImg: button1,
            catTittle: "Higher Secondary Level",
            catDesc: "This level can be able to participate the international Geographical Olympiad...",
        },
        {   
            _id: 2,
            catImg: button2,
            catTittle: "Secondary Level",
            catDesc: "This category includes Secondary School Certificate (SSC) or O-Level or Classes/Grades 9-10...",
        },
        {
            _id: 3,
            catImg: button3,
            catTittle: "Junior Level",
            catDesc: "This Junior category includes Grades or Classes between 6 and 8 for Bangladesh students...",
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

export default CategoryEvents;