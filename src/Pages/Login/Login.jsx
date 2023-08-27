
const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="w-full md:w-1/2 bg-white bg-opacity-90 p-8 rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form className="space-y-4">
                <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Password"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
                >
                    Login
                </button>
            </form>
            <div className="mt-4 text-center">
                <a href="#" className="text-blue-500 underline">
                    Don't have an account? Register here.
                </a>
            </div>
            <div className="mt-4 text-center">
                <button
                    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring"
                >
                    Sign in with Google
                </button>
            </div>
        </div>

    );
};

export default Login;