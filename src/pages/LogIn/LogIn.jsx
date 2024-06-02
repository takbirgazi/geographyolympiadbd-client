import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { FaCheck, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import sidebar from "../../assets/signupImage.png"
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const LogIn = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const [showPass, setShowPass] = useState(false);
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate();
    const { googleSign, logInUser } = useAuth()

    const location = useLocation();
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
            .then(() => {
                toast.success("Log in Successful!");
                navigate(from, { replace: true });
            })
            .catch(() => {
                toast.error("Log in Failed");
            })
    }

    const logInHandler = event => {
        event.preventDefault();
        setDisable(true)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setErrorText('');

        logInUser(email, password)
            .then(() => {
                form.reset();
                toast.success("Sign Up Successful!");
                setTimeout(() => {
                    navigate(from, { replace: true });
                    setDisable(false)
                }, 1000);
            })
            .catch((err) => {
                const msg = err?.code.split('/')[1] || "Sign Up Failed";
                toast.error(msg);
                setErrorText(msg);
            })
    }

    return (
        <div className={`bg-white min-h-screen flex items-center justify-center`}>
            <Helmet>
                <title>Log In - Geography Olympiad BD</title>
            </Helmet>
            <div className="my-10 w-full">
                <div className="hero w-11/12 mx-auto border rounded-md shadow-xl bg-opacity-15">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left lg:w-1/2 w-full">
                            <img src={sidebar} alt="" />
                        </div>
                        <div className="card lg:w-1/2 w-full  shadow-2xl bg-white">
                            <h2 className="font-bold text-xl text-center mt-10 ">Log In</h2>
                            <form onSubmit={logInHandler} className="card-body">
                                <span className="text-red-500">{errorText}</span>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="input input-bordered flex items-center relative">
                                        <input type={
                                            showPass ? "text" : "password"
                                        }
                                            name="password" placeholder="password" className="w-full" required />
                                        <div onClick={() => setShowPass(!showPass)} name="showHidden" className="absolute right-3">
                                            {
                                                showPass ? <FaEyeSlash /> : <FaEye />
                                            }
                                        </div>
                                    </div>
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
                                    <input type="submit" name="submit" disabled={disable} className="btn btn-primary" value="Log In" />
                                </div>
                            </form>
                            <div>
                                <div className="text-center text-yellow-600">New here? <NavLink to='/signup' className="cursor-pointer font-bold underline">Create a New Account</NavLink></div>
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

export default LogIn;