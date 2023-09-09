import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <span className="loading h-screen text-center flex justify-center items-center loading-bars loading-lg"></span>;
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login"/>

};

export default PrivateRoutes;
