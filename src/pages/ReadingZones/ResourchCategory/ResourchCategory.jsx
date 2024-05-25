import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import button1 from "../../../assets/images/readingZone/button1.jpg";
import button2 from "../../../assets/images/readingZone/button2.jpg";
import button3 from "../../../assets/images/readingZone/button3.jpg";


const ResourchCategory = () => {
    const catInfo =[
        {
            _id: 1,
            catImg: button1,
            catTittle: "Reading Zones",
            catDesc: "Students will get the relevant materials and many supporting documents here...",
        },
        {   
            _id: 2,
            catImg: button2,
            catTittle: "Question Papers",
            catDesc: "Question papers for previous Geography Olympiads and competition can be available here...",
        },
        {
            _id: 3,
            catImg: button3,
            catTittle: "iGeo Event Contents",
            catDesc: "Student will get some information about the iGeo Event Contents from here...",
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

export default ResourchCategory;