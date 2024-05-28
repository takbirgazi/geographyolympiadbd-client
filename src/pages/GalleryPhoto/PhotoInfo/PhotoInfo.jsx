import { Fade } from "react-awesome-reveal";

const PhotoInfo = () => {
    return (
        <div className="lg:w-2/3 w-full">
            <div className="pb-8">
                <Fade direction="right">
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Gallery: Photographs</h2>
                </Fade>
            </div>
            <div className="border bg-white h-96 p-4 rounded-xl">
                Photographs
            </div>
        </div>
    );
};

export default PhotoInfo;