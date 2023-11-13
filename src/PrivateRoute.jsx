import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const {loggedinuser, loading} = useContext(AuthContext);
    
    const location = useLocation();
    if (loading) {return (<p>Loading!!</p>);}
    if (loggedinuser) {return children;} 
    return (
        <Navigate to='/login' state={{from : location}} replace></Navigate>
    );
};

export default PrivateRoute;