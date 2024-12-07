import { Outlet } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser, toggleLoading } from './redux/features/userSlice';
import auth from './Firebase/firebase.config';
import Footer from './Components/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Shared/Header/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          name: user?.displayName || 'Guest',
          email: user?.email,
        }));
      }
      dispatch(toggleLoading(false)); 
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <ToastContainer/>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-100px)]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
