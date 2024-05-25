import { Fade } from "react-awesome-reveal";
import committeeLeft from "../../../assets/images/bgoCommittee/committeeLeft.jpg";
import manzurul from '../../../assets/images/home/manzurul.jpg';
import image1 from "../../../assets/images/bgoCommittee/image1.jpg";
import image2 from "../../../assets/images/bgoCommittee/image2.jpg";
import image3 from "../../../assets/images/bgoCommittee/image3.jpg";
import image4 from "../../../assets/images/bgoCommittee/image4.jpg";
import image5 from "../../../assets/images/bgoCommittee/image5.jpg";
import image6 from "../../../assets/images/bgoCommittee/image6.png";
import patnor1 from "../../../assets/images/bgoCommittee/patnor1.png";
import patnor2 from "../../../assets/images/bgoCommittee/patnor2.png";
import patnor3 from "../../../assets/images/bgoCommittee/patnor3.png";
import PageLeftSidebar from "../../../components/PageLeftSidebar/PageLeftSidebar";


const AboutCommittee = () => {
    const committee = [
        {
            _id: 1,
            image: image1,
            name: "Dr. Md. Humayun Kabir.",
            tittle: "Deputy Team Leader",
            desc: "Dr Md Humayun Kabir is Professor in the Department of Geography and Environment at the University of Dhaka.He graduated with his PhD from Humboldt- University of Berlin.His research interests span over environment, natural resources, disaster management, and renewable energy. "
        },
        {
            _id: 2,
            image: image2,
            name: "Mr. Md. Jamail Basir",
            tittle: "General Secretary",
            desc: "Mr. Jamail Basir is a geographer with a GIS-RS background. He did his MSc from the Department of Geography and Environment at Jahangirnagar University, Dhaka. He is a Professional Trainer on Geographical Information Systems (GIS), Remote Sensing (RS), and Global navigation satellite system (GNSS)."
        },
        {
            _id: 3,
            image: image3,
            name: "Ms. Lutfun Nahar",
            tittle: "Treasurer",
            desc: "Ms. Lutfun Nahar is a geographer with a GIS-RS background. She graduated with an MSc from Jahangirnagar University, Dhaka. She is an Assistant Professor in the Department of Geography and Environment, Government Brajalal College, Khulna. She conducted a number of research works with GIS techniques."
        },{
            _id: 4,
            image: image4,
            name: "Professor Dr. Alak Paul",
            tittle: "Member",
            desc: "Dr. Alak Paul, Professor of the Department of Geography & Environmental Studies, University of Chittagong, Bangladesh, received his PhD from the University of Durham, UK. Being an empirical geographer, his research and teaching interest spans over public health; society and environment; and disaster management using mostly qualitative approach."
        },
        {
            _id: 5,
            image: image5,
            name: "Ms. Nazmoon N. Sumiya",
            tittle: "Member",
            desc: "Ms. Nazmoon Nahar Sumiya, Assistant Professor, Department of Geography and Environment, University of Dhaka graduated with an MSc from the University of Manchester, UK with the Commonwealth Scholarship Programme. Her research encompasses GIS, Remote Sensing, Climate Change, and Environmental Pollution."
        },
        {
            _id: 6,
            image: image6,
            name: "Mr. Syed Nazrul Ahsan",
            tittle: "Member",
            desc: "Mr. Syed Nazrul Ahsan is a reputed Geography Teacher at SFX Greenherald International School and Maple Leaf International School in Dhaka. He also teaches Environmental management, and Bangladesh Studies. He is the coordinator of the Access Program of Language Proficiency Center in Dhaka. He is the Moderator of Greenherald Debating Society, and also engaged as Teacher Trainer."
        },
        {
            _id: 7,
            image: 'jhkfg.jpg',
            name: "Mr. Mohammad Yakub ",
            tittle: "Member",
            desc: "Mr. Mohammad Yakub is a reputed Geography Teacher at SFX Greenherald International School. He also teaches Environmental management, and Bangladesh Studies."
        },
        
    ]

return (
    <div className="border-b-4 border-[#83c9eb] pb-5">
        <div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
            <PageLeftSidebar tittle="BGO COMMITTEE" image={committeeLeft}></PageLeftSidebar>
            <div className="lg:w-2/3 w-full">
                <div className="pb-8">
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Committee Members of Bangladesh Geography Olympiad</h2>
                    <h3 className="lg:text-2xl md:text-xl mt-5 font-semibold">Executive Committee:</h3>
                    <p className="mb-5 text-xl tracking-tight opacity-80 leading-tight">(First Committee Establishment: 30 April 2023) </p>
                    <img src={manzurul} className="w-40" alt="Image" />
                    <p>Professor Dr Manzurul Hassan </p>
                    <p>Team Leader, BGO</p>
                    <p className="my-2 font-semibold">Dr M Manzurul Hassan is a Professor, Department of Geography and Environment,Jahangirnagar University, Dhaka, Bangladesh. He graduated with his PhD in Social Sciences and Health from Durham University, UK with the Commonwealth Scholarships Programme. His research delves into environmental health, environmental risk management, and environmental legal issues. </p>

                    <Fade direction="right" duration={2000}>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5">
                            {
                                committee.map(card => <div className="p-2 border" key={card._id}>
                                    <img className="w-2/3 mx-auto text-center border" src={card.image} alt={card.name} />
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-center text-blue-500 font-semibold">{card.name}</h3>
                                        <h4 className="text-center font-semibold mb-2">{card.tittle}</h4>
                                        <p>{card.desc}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </Fade>

                    <div>
                        <h3 className="text-xl font-bold text-blue-500 py-5">Advisory Committee:</h3>
                        <Fade direction="up">
                            <div className="my-2">
                                <h3 className="font-semibold">Professor Nazrul Islam</h3>
                                <p className="text-sm">Em. Prof., Department of Geography and Environment</p>
                                <p className="text-sm">Dhaka University, Dhaka, Bangladesh</p>
                            </div>

                            <div className="my-2">
                                <h3 className="font-semibold">Professor Dr. A. Q. M. Mahbub</h3>
                                <p className="text-sm">Vice Chancellor</p>
                                <p className="text-sm">Bangabandhu Sheikh Mujibur Rahman Science and Technology University,</p>
                                <p>Gopalganj, Bangladesh</p>
                            </div>

                            <div className="my-2">
                                <h3 className="font-semibold">Professor Dr. Hafiza Khatun</h3>
                                <p className="text-sm">Vice Chancellor</p>
                                <p className="text-sm">Pabna University of Science and Technology,</p>
                                <p>Pabna, Bangladesh</p>
                            </div>

                            <div className="my-2">
                                <h3 className="font-semibold">Professor Dr. Raquib Ahmed</h3>
                                <p className="text-sm">Vice Chancellor</p>
                                <p className="text-sm">Fareast International University,</p>
                                <p>Uttra, Dhaka, Bangladesh</p>
                            </div>

                        </Fade>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-blue-500 py-5">BGO Patrons:</h3>
                        <div className="flex gap-5">
                            <img className="w-30 h-20 border" src={patnor1} alt="" />
                            <img className="w-30 h-20" src={patnor2} alt="" />
                            <img className="w-20 h-20" src={patnor3} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
);
};

export default AboutCommittee;

