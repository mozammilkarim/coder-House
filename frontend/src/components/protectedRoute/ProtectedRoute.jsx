import React, { Fragment } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const ProtectedRoute = ({isAuthenticated}) => {
    const location = useLocation();
    console.log("authLogin", isAuthenticated);
    // if the user is authenticated , then redirect to the 
    // requested page,i.e., /account page,
    //  else redirecting to login page
    return (
        <Fragment>
            
            {/* we need to fix thiis */}
            {(isAuthenticated!==true)
                ? 
                 <Navigate to="/register" replace state={{ from: location }} />
                 :<Outlet />}
        
        </Fragment>
    );
};

export default ProtectedRoute;