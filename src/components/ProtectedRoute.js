import react from "react";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    if(!isAuthenticated) {
        return <Navigate to='/'/>
    }
    return children;
}

export default ProtectedRoute;