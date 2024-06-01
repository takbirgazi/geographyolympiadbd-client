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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name:</span>
                            </label>
                            <input type="text" name="name" placeholder="Write YourName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date of Birth:</span>
                            </label>
                            <input type="text" name="birthday" placeholder="Write YourName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Number:</span>
                            </label>
                            <input type="text" name="name" placeholder="01XXX-XXXXXX" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address: </span>
                            </label>
                            <input type="email" name="email" placeholder="Write Email Address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Present Address: </span>
                            </label>
                            <textarea name="presentAddr" placeholder="Write Present Address" className="input input-bordered h-16 pt-4" required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Permanent Address: </span>
                            </label>
                            <textarea name="permanentAdr" placeholder="Write Permanent Address" className="input input-bordered h-16 pt-4" required></textarea>
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