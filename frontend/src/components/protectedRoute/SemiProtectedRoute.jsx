import React, { Fragment } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const SemiProtectedRoute = ({isActivated}) => {
    const location = useLocation();
    console.log("activated", isActivated);
    // if the user is authenticated , then redirect to the 
    // requested page,i.e., /account page,
    //  else redirecting to login page
    return (
        <Fragment>
            
            {/* we need to fix thiis , redirect the  already authorized one to rooms page */}
            {(isActivated===true)
                ? 
                 <Navigate to="/room" replace state={{ from: location }} />
                 :<Outlet />}
        
        </Fragment>
    );
};

export default SemiProtectedRoute;