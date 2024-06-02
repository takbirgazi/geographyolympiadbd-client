import { useState } from "react";
import { Fade } from "react-awesome-reveal";


const InfoText = () => {
    const [errorText, setErrorText] = useState('');
    const [disable, setDisable] = useState(true);

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
                            <input type="text" name="birthday" placeholder="Write YourName" className="input input-bordered" required />
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
                            <textarea name="permanentAdr" placeholder="Write Permanent Address" className="input input-bordered h-16 pt-4" required></textarea>
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Head Teacher/Principal of Provided School/College with the following information:</span>
                            </label>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                                <input type="text" name="email" placeholder="Name" className="input input-bordered" required />
                                <input type="text" name="email" placeholder="Designation" className="input input-bordered" required />
                                <input type="text" name="email" placeholder="School/College" className="input input-bordered" required />
                            </div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3">
                                <input type="text" name="email" placeholder="Mobile Phone" className="input input-bordered" required />
                                <input type="text" name="email" placeholder="Landline" className="input input-bordered" required />
                                <input type="email" name="email" placeholder="Email address" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Passport Details <span className="text-red-600">(must be one year valid)</span>:</span>
                            </label>
                            <div className="flex flex-col">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                                    <input type="text" name="email" placeholder="Name" className="input input-bordered" required />
                                    <input type="text" name="email" placeholder="Date of Birth" className="input input-bordered" required />
                                </div>
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-3">
                                    <input type="text" name="email" placeholder="Issuing Place" className="input input-bordered" required />
                                    <input type="text" name="email" placeholder="Issuing date" className="input input-bordered" required />
                                    <input type="email" name="email" placeholder="Expiry date" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" name="submit" disabled={disable} className="btn btn-primary" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InfoText;