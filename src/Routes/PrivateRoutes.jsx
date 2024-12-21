import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import { setUser, toggleLoading } from '../redux/features/userSlice';
import Loading from '../Components/Loading/Loading';

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { email, isLoading } = useSelector((state) => state.usersReducer)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({
                    name: user?.displayName,
                    email: user?.email
                }))
                dispatch(toggleLoading(false))
            }
            else {
                dispatch(toggleLoading(false))
            }
        });
    }, [dispatch])


    if (isLoading) {
        return <Loading />
    }
    if (email) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" />

};

export default PrivateRoutes;
