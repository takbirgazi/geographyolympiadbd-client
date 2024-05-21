import { useLocation } from "react-router-dom";


const SignUp = () => {
    const location = useLocation();
    const goto = location.state?.from.pathname || "/";

    console.log(goto)
    return (
        <div>
            This is Sign Up Page
        </div>
    );
};

export default SignUp;