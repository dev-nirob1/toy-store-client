import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { loginUser } from "../../redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../../Components/Shared/Button";

const Login = () => {
    useTitle('Login')
    const { isLoading, isSuccess, isError, error } = useSelector(state => state.usersReducer)
    const dispatch = useDispatch()
    const Navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (isSuccess && !isLoading) {
            Navigate(from, { replace: true });
            toast.success('Welcome Back!');
        } else if (isError && !isLoading) {
            setErrorMessage(error);
        }
    }, [isSuccess, isError, isLoading, error, from, Navigate]);

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setErrorMessage('')
        dispatch(loginUser({ email, password }))

    }

    return (
        <div className="flex bg-gradient-to-tr from-slate-200 to-gray-100">
            <ToastContainer />
            <div className="mx-auto my-6 md:my-10 w-11/12 md:w-1/3">
                <div className="bg-white px-5 md:px-8 py-6 rounded shadow-xl">
                    <h2 className="text-center text-3xl text-gray-700 font-semibold mb-6">Please Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border round5ed w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <input
                            type="submit"
                            disabled={isLoading}
                            className={`bg-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded focus:outline-none btn-block focus:shadow-outline`}
                            value={isLoading ? 'Loading...' : 'Login'}
                        />

                        <p className='text-red-600 text-sm text-center mt-1'>{errorMessage}</p>
                        <Button /> 
                    </form>
                    <div className="text-center mt-4">
                        <span>Don`t have an account? <Link className="text-blue-500" to="/register">Register</Link></span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;