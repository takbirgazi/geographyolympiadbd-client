import { useLocation } from "react-router-dom";

const LogIn = () => {
    const location = useLocation();
    const goto = location.state?.from.pathname || "/";

    console.log(goto)
    return (
        <div>
            This is Log In Page 
        </div>
    );
};

export default LogIn;