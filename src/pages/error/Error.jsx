import { useNavigate } from "react-router-dom";

const Error = () => {

    const navigate = useNavigate();
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-7xl font-bold text-gray-500 underline">404</h1>
            <h1 className="text-xl font-semibold">Page not found</h1>
            <button onClick={() => navigate(-1)} className="text-green-500 font-bold text-lg underline">Go Back</button>
        </div>
    );
};

export default Error;