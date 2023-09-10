import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <div className='h-screen w-full flex items-center justify-center'>
            <span className="loading text-centerloading-bars loading-lg"></span>
        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" />

};

export default PrivateRoutes;
