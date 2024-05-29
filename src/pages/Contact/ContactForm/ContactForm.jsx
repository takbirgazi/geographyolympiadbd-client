import { Fade } from "react-awesome-reveal";

const ContactForm = () => {
    return (
        <div className="lg:w-2/3 w-full">
            <div className="pb-8">
                <Fade direction="right">
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">Contact Us:</h2>
                </Fade>
            </div>
            <div className="border rounded md:p-4 p-0">
                <Fade direction="right">
                    <form className="p-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Write Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Write Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" name="subject" placeholder="Write Your Subject" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea name="message" className="input input-bordered h-40 w-full p-2" placeholder="Write Your Message..." cols="30" rows="10"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" name="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </form>
                </Fade>
            </div>

        </div>
    );
};

export default ContactForm;