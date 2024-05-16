import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="text-2xl font-bold my-3">404 | Page Not Found</h2>
            <NavLink className="px-2 py-1 border rounded bg-blue-500 text-white">Go to Home</NavLink>
        </div>
    );
};

export default ErrorPage;