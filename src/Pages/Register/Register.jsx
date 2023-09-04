import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, photoUrl)

        createUser(email, password)
        .then(result => {
            const newUser = result.user;
            if(newUser){
                alert('User Created Successfully')
            }
            console.log(newUser)
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result => {
            const user = result.user;
            if(user){
                alert('Login Succesfull')
            }
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="flex justify-center items-center">
            <div className="max-w-md w-full bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Register</h2>
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
                    <input type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn-block"
                        value="Register"
                    />
                    <div className="mt-4 text-center">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none btn-block focus:shadow-outline mt-5"
                            type="button"
                            onClick={handleGoogleLogin}
                        >
                            Sign in with Google
                        </button>
                        {/* <span>Or register with: </span>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline">
                        Google
                    </button> */}
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <span>Already have an account? <Link className="text-blue-500" to="/login">Login</Link></span>
                </div>
                <div className="mt-4 text-center">
                    {/* <button
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none btn-block focus:shadow-outline mt-5"
                        type="button"
                    >
                        Sign in with Google
                    </button> */}
                    {/* <span>Or register with: </span>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline">
                        Google
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Register;