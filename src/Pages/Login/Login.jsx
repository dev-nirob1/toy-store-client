import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="flex h-screen bg-gradient-to-r from-gray-500 to-gray-800">
            <div className="m-auto md:w-1/3">
                <div className="bg-white px-8 py-6 rounded shadow-md">
                    <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
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
                            />
                        </div>
                        <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none btn-block focus:shadow-outline" value="Login" />
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none btn-block focus:shadow-outline mt-5"
                        type="button"
                    >
                        Sign in with Google
                    </button>
                    </form>
                    <div className="text-center mt-4">
                    <span>Don`t have an account? <Link className="text-blue-500" to="/register">Register</Link></span>
                        {/* <Link
                            to="/register"
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        >
                            Create an account
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;