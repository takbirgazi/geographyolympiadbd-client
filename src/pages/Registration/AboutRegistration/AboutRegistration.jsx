import PageLeftSidebar from "../../../components/PageLeftSidebar/PageLeftSidebar";
import sidebarImage from "../../../assets/images/registration/registrationSidebar.png";
import InfoText from "./InfoText";
import Registered from "./Registered";
import useAuth from "../../../hooks/useAuth";

const AboutRegistration = () => {
    const { user } = useAuth();
    console.log(user)
    const isRegister = false;

    return (
        <div className="border-b-4 border-[#83c9eb] pb-5">
            {
                isRegister ?
                    <>
                        <div>
                            <div className="flex items-center justify-center py-5">
                                <h2 className="font-bold text-2xl">Make a Payment</h2>
                            </div>
                            <div className="w-11/12 mx-auto py-5">
                                <Registered></Registered>
                            </div>
                        </div>
                    </>
                    :
                    <><div className="flex lg:flex-row lg:gap-10 gap-5 flex-col w-11/12 mx-auto pt-10">
                        <PageLeftSidebar tittle=" REGISTRATION " image={sidebarImage}></PageLeftSidebar>
                        <InfoText></InfoText>
                    </div>
                    </>
            }
        </div>
    );
};

export default AboutRegistration;