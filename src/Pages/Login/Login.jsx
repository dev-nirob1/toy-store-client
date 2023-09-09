import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
    useTitle('Login')
    const [error, setError] = useState('')

    const { login, googleLogin } = useContext(AuthContext)
    const location = useLocation();
    const Navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    console.log(location)

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        setError('')

        login(email, password)
            .then(result => {
                const loggedUser = result.user;

                if (loggedUser) {
                    alert('Login SuccessFull')
                    form.reset('')
                    Navigate(from, { replace: true })
                }

            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
                
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                if (user) {
                    alert('Login SuccessFull')
                    Navigate(from, { replace: true })
                }
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div className="flex bg-gradient-to-tr from-slate-200 to-gray-100">
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
                        <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none btn-block focus:shadow-outline" value="Login"/>

                        <p className='text-red-600'>{error}</p>

                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none btn-block focus:shadow-outline mt-5"
                            type="button"
                            onClick={handleGoogleLogin}
                        >
                            Sign in with Google
                        </button>
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