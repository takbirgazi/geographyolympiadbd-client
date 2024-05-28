import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import button1 from "../../../assets/images/gallery/button1.jpg";
import button2 from "../../../assets/images/gallery/button2.jpg";
import button3 from "../../../assets/images/gallery/button3.jpg";

const GalleryCategory = () => {
    const catInfo =[
        {
            _id: 1,
            catImg: button1,
            catTittle: "Video",
            catDesc: "Information regarding different programmers and issues can be store with videos...",
        },
        {   
            _id: 2,
            catImg: button2,
            catTittle: "Photographs",
            catDesc: "Photographs of any programme and issue relevant to Geography Olympiad are to kept...",
        },
        {
            _id: 3,
            catImg: button3,
            catTittle: "Audio",
            catDesc: "Audio information for different aspects will be stored here in favour of Geographical data...",
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

export default GalleryCategory;