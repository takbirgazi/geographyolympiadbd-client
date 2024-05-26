import { Fade } from "react-awesome-reveal";
import pdf from "../../../assets/images/questionPaper/pdf.png";

const InfoTextQuestionPaper = () => {

    const allQuestion = [
        {
            _id: 1,
            tittle: "This is Question 1",
            file: pdf,
        },
        {
            _id: 2,
            tittle: "This is Question 2",
            file: pdf,
        },
        {
            _id: 3,
            tittle: "This is Question 3",
            file: pdf,
        },
        {
            _id: 4,
            tittle: "This is Question 4",
            file: pdf,
        },
        {
            _id: 5,
            tittle: "This is Question 5",
            file: pdf,
        }
    ];

    return (
        <div className="lg:w-2/3 w-full">
            <div className="pb-8">
                <Fade direction="right">
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Previous Question Papers</h2>
                </Fade>
                <Fade direction="up">
                    <p className="my-5 text-xl text-[#00af50] tracking-tight opacity-80 leading-tight">(18th iGeo Competition, Paris 2022)</p>
                </Fade>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
                {
                    allQuestion.map(question => <div key={question._id} className="p-4 border rounded">
                        <Fade direction="right">
                            <img className="" src={pdf} alt="" />
                            <a href={pdf} download={question.file} >{question.tittle}</a>
                        </Fade>
                    </div>)
                }
            </div>
        </div>
    );
};

export default InfoTextQuestionPaper;