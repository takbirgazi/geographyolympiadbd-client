import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import "./InfoText.css";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';


const InfoText = () => {
    const [errorText, setErrorText] = useState('');
    const [disable, setDisable] = useState(true);
    const [regDOb, setRegDOb] = useState(new Date());
    const [passDob, setPassDob] = useState(new Date());
    const [issuDate, setIssuDate] = useState(new Date());
    const [expDate, setExpDate] = useState(new Date());
    const [checked, setChecked] = useState(false);
    const [geography, setGeography] = useState(true);
    const axiosSecure = useAxiosSecure()

    const regInfoHndler = event => {
        event.preventDefault();
        const from = event.target;
        const stdName = from.name.value;
        const stdDOB = regDOb.getDate() + "/" + (regDOb.getMonth() + 1) + "/" + regDOb.getFullYear();
        const stdPhone = from.stdPhone.value;
        const stdEmail = from.stdEmail.value;
        const stdPresentAddr = from.presentAddr.value;
        const stdPermanentAddr = from.permanentAddr.value;
        const expectedLevel = from.expectedLevel.value;
        const stdSclClzName = from.sclClzName.value;
        const stdSclClzAddr = from.sclClzAddr.value;
        const isGeography = geography;

        const techNAme = from?.techNAme?.value || false;
        const techDeg = from?.techDeg?.value || false;
        const tecSclClzName = from?.tecSclClz?.value || false;
        const techPhone = from?.techPhone?.value || false;
        const techLand = from?.techLand?.value || false;
        const techEmail = from?.techEmail?.value || false;

        const passName = from.passName.value;
        const passDOB = (passDob.getMonth() + 1) + "/" + passDob.getDate() + "/" + passDob.getFullYear();
        const passPlace = from.passPlace.value;
        const passIssueDate = (issuDate.getMonth() + 1) + "/" + issuDate.getDate() + "/" + issuDate.getFullYear();
        const pssExprDate = (expDate.getMonth() + 1) + "/" + expDate.getDate() + "/" + expDate.getFullYear();

        const regInfo = { stdName, stdDOB, stdPhone, stdEmail, stdPresentAddr, stdPermanentAddr, expectedLevel, stdSclClzName, stdSclClzAddr, isGeography, techNAme, techDeg, tecSclClzName, techPhone, techLand, techEmail, passName, passDOB, passPlace, passIssueDate, pssExprDate, }

        if (parseInt(issuDate.getFullYear()) < parseInt(expDate.getFullYear())) {
            setErrorText("");
            axiosSecure.post("/registration", regInfo)
                .then(res => {
                    toast.success("Registration Successful!");
                    setDisable(!disable);
                    from.reset();
                    console.log(res);
                })

        } else {
            setErrorText("Please check your passport information!");
        }
    }

    return (
        <div className="lg:w-2/3 w-full">
            <div className="pb-8">
                <Fade direction="right">
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Registration</h2>
                </Fade>
            </div>
            <div className="border rounded-md">
                <form onSubmit={regInfoHndler} className="card-body">
                    <span className="text-red-500">{errorText}</span>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Full Name:</span>
                            </label>
                            <input type="text" name="name" placeholder="Write Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Date of Birth:</span>
                            </label>
                            <div className="input input-bordered flex items-center gap-2">
                                <SlCalender className="font-semibold text-xl" /> <DatePicker selected={regDOb} onChange={(date) => setRegDOb(date)} />
                            </div>
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Mobile Number:</span>
                            </label>
                            <input type="text" name="stdPhone" placeholder="01XXX-XXXXXX" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Email Address: </span>
                            </label>
                            <input type="email" name="stdEmail" placeholder="Write Your Email Address" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Present Address: </span>
                            </label>
                            <textarea name="presentAddr" placeholder="Write Your Present Address" className="input input-bordered h-16 pt-4" required></textarea>
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Permanent Address: </span>
                            </label>
                            <textarea name="permanentAddr" placeholder="Write Your Permanent Address" className="input input-bordered h-16 pt-4" required></textarea>
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Expected Level of Registration: </span>
                            </label>
                            <select name="expectedLevel" className="select select-bordered bg-white">
                                <option value="HSC">Higher Secondary Level (Grade/Class XI-XII)</option>
                                <option value="SSC">Secondary Level (Grade/Class IX-X)</option>
                                <option value="JSC">Junior Level (Class VI-VIII) </option>
                            </select>
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">School/College Name: </span>
                            </label>
                            <textarea name="sclClzName" placeholder="School/College Name" className="input input-bordered h-16 pt-4" required></textarea>
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">School/College Address: </span>
                            </label>
                            <textarea name="sclClzAddr" placeholder="School/College Address" className="input input-bordered h-16 pt-4" required></textarea>
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Whether Geography is offered in this School/College? </span>
                            </label>
                            <div className="flex gap-5 items-center ml-10 mt-2">
                                <div onClick={() => setGeography(true)} className={`cursor-pointer border rounded-md px-5 py-2 ${geography && "bg-blue-500 text-white"}`}>Yes</div>
                                <div onClick={() => setGeography(false)} className={`cursor-pointer border rounded-md px-5 py-2 ${geography || "bg-blue-500 text-white"}`}>No</div>
                            </div>
                        </div>
                        {
                            geography && <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Head Teacher/Principal of Provided School/College with the following information:</span>
                                </label>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Name:</span>
                                        </label>
                                        <input type="text" name="techNAme" placeholder="Name" className="input input-bordered" required /></div>
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Designation:</span>
                                        </label>
                                        <input type="text" name="techDeg" placeholder="Designation" className="input input-bordered" required /></div>
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">School/College:</span>
                                        </label>
                                        <input type="text" name="tecSclClz" placeholder="School/College" className="input input-bordered" required /></div>
                                </div>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3">
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Mobile Phone:</span>
                                        </label>
                                        <input type="text" name="techPhone" placeholder="Mobile Phone" className="input input-bordered" required />
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Landline:</span>
                                        </label>
                                        <input type="text" name="techLand" placeholder="Landline" className="input input-bordered" required />
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Email address:</span>
                                        </label>
                                        <input type="email" name="techEmail" placeholder="Email address" className="input input-bordered" required />
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text font-bold">Passport Details <span className="text-red-600">(must be one year valid)</span>:</span>
                            </label>
                            <div className="flex flex-col">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Name:</span>
                                        </label>
                                        <input type="text" name="passName" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Date of Birth:</span>
                                        </label>
                                        <div className="input input-bordered flex items-center gap-2">
                                            <SlCalender className="font-semibold text-xl" /> <DatePicker selected={passDob} onChange={(date) => setPassDob(date)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3">
                                    <div className="grid grid-cols-1">
                                        <label htmlFor="" className="label">
                                            <span className="label-text">Issuing Place:</span>
                                        </label>
                                        <input type="text" name="passPlace" placeholder="Issuing Place" className="input input-bordered" required />
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label htmlFor="" className="label">
                                            <span className="label-text">Issuing date:</span>
                                        </label>
                                        <div className="input input-bordered flex items-center gap-2">
                                            <SlCalender className="font-semibold text-xl" /> <DatePicker selected={issuDate} onChange={(date) => setIssuDate(date)} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label htmlFor="" className="label">
                                            <span className="label-text">Expiry date:</span>
                                        </label>
                                        <div className="input input-bordered flex items-center gap-2">
                                            <SlCalender className="font-semibold text-xl" /> <DatePicker selected={expDate} onChange={(date) => setExpDate(date)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <div className="my-3 flex gap-2">
                                <input
                                    checked={checked}
                                    onChange={() => { setChecked(!checked), setDisable(!disable) }}
                                    type="checkbox"
                                />
                                <p className={`text-red-500 ${checked && "text-green-500"}`}>All Information are valid</p>
                            </div>
                            <input type="submit" name="submit" disabled={disable} className="btn btn-primary" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InfoText;