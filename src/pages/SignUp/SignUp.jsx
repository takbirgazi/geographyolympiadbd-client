import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { FaGoogle, FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import sidebar from "../../assets/signupImage.png"
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const imageBBUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBBAPIKEY}`;

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const isRegister = "User";

    const onSubmit = async (data) => {
        setDisable(true);
        setErrorText('');
        if (data.password.length > 5 && data.password.length < 13) {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(data.password)) {
                const imageFile = { image: data.image[0] };
                const res = await axiosPublic.post(imageBBUrl, imageFile, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                createUser(data.email, data.password)
                    .then(() => {
                        updateUser(data.name);
                        const addUser = { name: data.name, email: data.email, profile: res?.data?.data?.display_url, password: data.password, isRegister };
                        axiosPublic.post("/users", addUser)
                            .then(() => {
                                toast.success("Sign Up Successful!");
                                setTimeout(() => {
                                    navigate(from, { replace: true });
                                    setDisable(false)
                                }, 1000);
                            })
                    })
                    .catch(err => {
                        const msg = err?.code.split('/')[1] || "Sign Up Failed";
                        toast.error(msg);
                        setErrorText(msg);
                    })
            } else {
                setErrorText("Password must have Uppercase Lowercase and Number")
            }
        } else {
            setErrorText("Password should be 6 to 12 character");
        }
    }

    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const [showPass, setShowPass] = useState(false);
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate();
    const { createUser, updateUser, googleSign } = useAuth()
    const from = location.state?.from.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const checkCaptcha = (eventCaptcha) => {
        eventCaptcha.preventDefault();
        const refValue = captchaRef.current.value;
        if (validateCaptcha(refValue)) {
            setDisable(false)
        } else {
            setDisable(true);
        }
    }
    const googleHndler = () => {
        googleSign()
            .then(res => {
                const addUser = { name: res.user.displayName, email: res.user.email, profile: res.user?.photoURL, password: "", isRegister };
                axiosPublic.post("/users", addUser)
                    .then(() => {
                        toast.success("Sign Up Successful!");
                        navigate(from, { replace: true });
                    })
            })
            .catch(() => {
                toast.error("Log in Failed");
            })
    }
    return (
        <div className={`bg-white min-h-screen flex items-center justify-center`}>
            <Helmet>
                <title>Sign Up - Geography Olympiad BD</title>
            </Helmet>
            <div className="my-10 w-full">
                <div className="hero w-11/12 mx-auto border rounded-md shadow-xl bg-opacity-15">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left lg:w-1/2 w-full">
                            <img src={sidebar} alt="" />
                        </div>
                        <div className="card lg:w-1/2 w-full  shadow-2xl bg-white ">
                            <h2 className="font-bold text-xl text-center mt-10 ">Sign Up Now</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <span className="text-red-500">{errorText}</span>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="input input-bordered flex items-center relative">
                                        <input type={
                                            showPass ? "text" : "password"
                                        }
                                            {...register("password", { required: true })} placeholder="password" className="w-full" />
                                        <div onClick={() => setShowPass(!showPass)} name="showHidden" className="absolute right-3">
                                            {
                                                showPass ? <FaEyeSlash /> : <FaEye />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Profile</span>
                                    </label>
                                    <input type="file" {...register("image", { required: true })} accept="image/*" className="file-input file-input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <div className="border rounded-lg mb-2 px-4 py-2 bg-white">
                                        <LoadCanvasTemplate />
                                    </div>
                                    <div className="flex gap-1">
                                        <input ref={captchaRef} name="captcha" type="text" placeholder="Type here" className="input input-bordered w-5/6" required />
                                        <button onClick={checkCaptcha} className="input input-bordered w-1/6 flex items-center justify-center"><FaCheck /></button>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" name="submit" disabled={disable} className="btn btn-primary" value="Register" />
                                </div>
                            </form>
                            <div>
                                <div className="text-center text-yellow-600">Already registered? <NavLink to="/login" className="cursor-pointer font-bold underline">Go to log in</NavLink></div>
                                <div className="text-center my-4">Or sign up with</div>
                                <div className="flex gap-5 justify-center items-center mb-10">
                                    <div onClick={googleHndler} className="border flex items-center rounded-full bg-blue-500 cursor-pointer">
                                        <div className="border rounded-full p-3 cursor-pointer flex gap-3 items-center bg-gray-50">
                                            <FaGoogle className="text-xl text-blue-500" />
                                        </div>
                                        <p className="text-white px-4">Log In With Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;