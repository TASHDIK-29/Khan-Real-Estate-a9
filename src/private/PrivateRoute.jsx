import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <div className="flex justify-center"><span className="loading loading-infinity loading-lg"></span></div>
    }

    if(user){
        return children ;
    }
    return <Navigate to = '/login' state={location?.pathname || '/'}></Navigate>;
};

export default PrivateRoute;