import { Fade } from "react-awesome-reveal";
import image1 from "../../../assets/images/readingZone/image1.jpg";
import image2 from "../../../assets/images/readingZone/image2.png";

const InfoTextReadingZone = () => {
    return (
        <div className="lg:w-2/3 w-full">
            <div className="pb-8">
                <Fade direction="right">
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Reading Zones</h2>
                </Fade>

                <Fade direction="up">
                    <p className="my-5 text-xl tracking-tight opacity-80 leading-tight">You can find here some tips that would be helpful for you to take prepare for Geography competition:</p>
                </Fade>

                <div className="ml-14">
                    <ul className="list-disc list-outside flex flex-col gap-4 ml-15">
                        <Fade direction="up">
                            <li className="list-outside">Collect books assigned for A-level and go through each chapter following the iGeo event contents.</li>
                        </Fade>
                        <Fade direction="up">
                            <li className="list-outside">Review the previous question papers that can be available in iGeo website and sites from different countries’ geography competitions.</li>
                        </Fade>
                        <Fade direction="up">
                            <li className="list-outside">We are trying to provide here, alternatively, you can visit many suitable websites.</li>
                        </Fade>
                        <Fade direction="up">
                            <li className="list-outside">This will be helpful for students to become comfortable with the types of questions they will encounter.</li>
                        </Fade>
                        <Fade direction="up">
                            <li className="list-outside">You can also visit the following sites. We will provide more here.</li>
                        </Fade>
                    </ul>
                </div>
                <div className="flex gap-2 items-center pt-8">
                    <img className="h-40 border" src={image2} alt="Image" />
                    <img className="h-40 border" src={image1} alt="Image" />
                </div>
               
            </div>
        </div>
    );
};

export default InfoTextReadingZone;