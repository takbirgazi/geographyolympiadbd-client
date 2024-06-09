import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Registered = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const [regInfo, setRegInfo] = useState([]);

    axiosPublic.get(`/registration/${user.email}`)
        .then(res => setRegInfo(res.data));

    const regDataHndler = () => {
        axiosPublic.post(`/order`, regInfo)
            .then(res => window.location.replace(res.data.url))
    }
    return (
        <div className="shadow-md border rounded">
            <div className="grid md:grid-cols-2 grid-cols-1 p-4 gap-2">
                <p className="flex flex-col py-1 border-b-2"><span className="font-bold">Name: </span> <span className="mb-2">{regInfo.stdName}</span></p>
                <p className="flex flex-col py-1 border-b-2"><span className="font-bold">Email: </span> <span className="mb-2">{regInfo.stdEmail}</span></p>
                <p className="flex flex-col py-1 border-b-2"><span className="font-bold">Date of Birth:</span> <span className="mb-2">{regInfo.stdDOB}</span></p>
                <p className="flex flex-col py-1 border-b-2"><span className="font-bold">Phone: </span> <span className="mb-2">{regInfo.stdPhone}</span></p>
                <p className="flex flex-col py-1 border-b-2"><span className="font-bold">Present Address: </span> <span className="mb-2">{regInfo.stdPresentAddr}</span></p>
                <p className="flex flex-col py-1 border-b-2"><span className="font-bold">Permanent Address: </span> <span className="mb-2">{regInfo.stdPermanentAddr}</span></p>
                <p className="flex flex-col py-1 border-b-2"><span className="font-bold">Expected Level of Registration: </span> <span className="mb-2">{regInfo.expectedLevel}</span></p>
                <p className="flex flex-col py-1 border-b-2"><span className="font-bold">School/College Name: </span> <span className="mb-2">{regInfo.stdSclClzName}</span></p>
                <p className="flex flex-col py-1 border-b-2"><span className="font-bold">School/College Address: </span> <span className="mb-2">{regInfo.stdSclClzAddr}</span></p>
                <p className="flex flex-col py-1 border-b-2"><span className="font-bold">Passport Expiry date: </span> <span className="mb-2">{regInfo.pssExprDate}</span></p>
            </div>
            <div className="flex justify-center items-center py-5">
                <div onClick={regDataHndler} className="btn btn-outline btn-accent font-bold">Pay Online</div>
            </div>
        </div>
    );
};

export default Registered;