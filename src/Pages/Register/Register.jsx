import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { toast, ToastContainer } from "react-toastify";
import { createUser } from "../../redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/Shared/Button";


const Register = () => {
    useTitle('Register')
    const [errorMessage, setErrorMessage] = useState('');
    const regex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{6,}$/;
    const urlValidation = /^(ftp|http|https):\/\/[^ "]+$/;
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const disptach = useDispatch()
    const { isLoading, isSuccess, isError, error } = useSelector(state => state.usersReducer)

    useEffect(() => {
        if (isSuccess && !isLoading) {
            navigate(from, { replace: true });
            toast.success('Welcome Back!');
        } else if (isError && !isLoading) {
            setErrorMessage(error);
        }
    }, [isSuccess, isError, isLoading, error, from, navigate]);

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        setErrorMessage('');

        if (name === '') {
            setErrorMessage('Please provide your name');
            return;
        } else if (photoUrl === '') {
            setErrorMessage('Please fill the photoUrl field');
            return;
        } else if (!urlValidation.test(photoUrl)) {
            setErrorMessage('Please add a valid url')
            return
        } else if (password.length < 6) {
            setErrorMessage('Your password must be at least 6 characters long');
            return;
        } else if (!regex.test(password)) {
            setErrorMessage(
                'Password must contain at least one special character, one number, and one capital letter'
            );
            return;
        }

        const res = disptach(createUser({ email, password }))
        console.log(res)

    }

    return (
        <div className="flex justify-center items-center bg-gradient-to-tr from-slate-200 to-slate-100">
            <div className=" w-11/12 md:w-1/3 bg-white px-5 md:px-8 py-6 my-6 md:my-10 shadow-2xl rounded-lg">
                <h2 className="text-3xl text-center text-gray-700 font-bold mb-6">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            type="email"
                            placeholder="Enter your email"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            placeholder="Enter your password"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
                            Photo URL
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photoURL"
                            name="photoUrl"
                            type="text"
                            placeholder="Enter your photo URL"

                        />
                    </div>
                    {isError && <p className="text-red-500 mb-3">{errorMessage}</p>}
                    <input
                        type="submit"
                        disabled={isLoading}
                        className={`bg-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded focus:outline-none btn-block focus:shadow-outline`}
                        value={isLoading ? 'Loading...' : 'Login'}
                    />
                    <div className="mt-4 text-center">
                        <Button />
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <span>Already have an account? <Link className="text-blue-500" to="/login">Login</Link></span>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;