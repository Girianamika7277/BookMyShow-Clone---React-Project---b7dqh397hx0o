import React from 'react';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const authentication = JSON.parse(localStorage.getItem('isAuth'));
    
    if (!authentication) {
        return <Navigate to="/signup" />;
    }
    return children;
}

export default PrivateRoute;
