import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import button1 from "../../../assets/images/blog/button1.jpg";
import button2 from "../../../assets/images/blog/button2.jpg";
import button3 from "../../../assets/images/blog/button3.jpg";

const BlogCategory = () => {
    const catInfo =[
        {
            _id: 1,
            catImg: button1,
            catTittle: "Facts and Figures",
            catDesc: "Discussions regarding problems and potential to improve and disseminate geographical knowledge...",
        },
        {   
            _id: 2,
            catImg: button2,
            catTittle: "Surveying",
            catDesc: "Survey process can be implemented for different contemporary geographical issue...",
        },
        {
            _id: 3,
            catImg: button3,
            catTittle: "Previous Survey Result",
            catDesc: "Result for previous surveys will be here to disseminate and use for further development...",
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

export default BlogCategory;