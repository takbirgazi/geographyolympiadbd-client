import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import "./InfoText.css"


const InfoText = () => {
    const [errorText, setErrorText] = useState('');
    const [disable, setDisable] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [checked, setChecked] = useState(true);

    return (
        <div className="lg:w-2/3 w-full">
            <div className="pb-8">
                <Fade direction="right">
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Registration</h2>
                </Fade>
            </div>
            <div className="border rounded-md">
                <form className="card-body">
                    <span className="text-red-500">{errorText}</span>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Full Name:</span>
                            </label>
                            <input type="text" name="name" placeholder="Write YourName" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Date of Birth:</span>
                            </label>
                            <div className="input input-bordered flex items-center gap-2">
                                <SlCalender className="font-semibold" /> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Mobile Number:</span>
                            </label>
                            <input type="text" name="name" placeholder="01XXX-XXXXXX" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Email Address: </span>
                            </label>
                            <input type="email" name="email" placeholder="Write Email Address" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Present Address: </span>
                            </label>
                            <textarea name="presentAddr" placeholder="Write Present Address" className="input input-bordered h-16 pt-4" required></textarea>
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">Permanent Address: </span>
                            </label>
                            <textarea name="permanentAdr" placeholder="Write Permanent Address" className="input input-bordered h-16 pt-4" required></textarea>
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Expected Level of Registration: </span>
                            </label>
                            <textarea name="permanentAdr" placeholder="Write Permanent Address" className="input input-bordered h-16 pt-4" required></textarea>
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">School/College Name: </span>
                            </label>
                            <textarea name="permanentAdr" placeholder="Write Permanent Address" className="input input-bordered h-16 pt-4" required></textarea>
                        </div>
                        <div className="form-control md:col-span-1 col-span-2">
                            <label className="label">
                                <span className="label-text">School/College Address: </span>
                            </label>
                            <textarea name="permanentAdr" placeholder="Write Permanent Address" className="input input-bordered h-16 pt-4" required></textarea>
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Whether Geography is offered in this School/College? </span>
                            </label>
                            <div className="flex gap-5 items-center ml-10 mt-2">
                                <div onClick={() => setChecked(true)} className={`cursor-pointer border rounded-md px-5 py-2 ${checked && "bg-blue-500 text-white"}`}>Yes</div>
                                <div onClick={() => setChecked(false)} className={`cursor-pointer border rounded-md px-5 py-2 ${checked || "bg-blue-500 text-white"}`}>No</div>
                            </div>
                        </div>
                        {
                            checked && <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Head Teacher/Principal of Provided School/College with the following information:</span>
                                </label>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Name:</span>
                                        </label>
                                        <input type="text" name="email" placeholder="Name" className="input input-bordered" required /></div>
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Designation:</span>
                                        </label>
                                        <input type="text" name="email" placeholder="Designation" className="input input-bordered" required /></div>
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">School/College:</span>
                                        </label>
                                        <input type="text" name="email" placeholder="School/College" className="input input-bordered" required /></div>
                                </div>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3">
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Mobile Phone:</span>
                                        </label>
                                        <input type="text" name="email" placeholder="Mobile Phone" className="input input-bordered" required />
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Landline:</span>
                                        </label>
                                        <input type="text" name="email" placeholder="Landline" className="input input-bordered" required />
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Email address:</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Email address" className="input input-bordered" required />
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
                                        <input type="text" name="email" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label className="label">
                                            <span className="label-text">Date of Birth:</span>
                                        </label>
                                        <div className="input input-bordered flex items-center gap-2">
                                            <SlCalender className="font-semibold" /> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3">
                                    <div className="grid grid-cols-1">
                                        <label htmlFor="" className="label">
                                            <span className="label-text">Issuing Place:</span>
                                        </label>
                                        <input type="text" name="email" placeholder="Issuing Place" className="input input-bordered" required />
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label htmlFor="" className="label">
                                            <span className="label-text">Issuing date:</span>
                                        </label>
                                        <div className="input input-bordered flex items-center gap-2">
                                            <SlCalender className="font-semibold" /> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <label htmlFor="" className="label">
                                            <span className="label-text">Expiry date:</span>
                                        </label>
                                        <div className="input input-bordered flex items-center gap-2">
                                            <SlCalender className="font-semibold" /> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6 md:col-span-1 col-span-2">
                            <input type="submit" name="submit" disabled={disable} className="btn btn-primary" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InfoText;