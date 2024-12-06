import { useDispatch, useSelector } from "react-redux";
import { googleLogin } from "../../redux/features/userSlice";

const Button = () => {
    const {isLoading} = useSelector(state => state.usersReducer)
    const dispatch = useDispatch()
    const handleGoogleLogin = () => {
        const res = dispatch(googleLogin())
        console.log(res);
    }

    return (
        <button
            className={`bg-red-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'} text-white font-semibold py-2 px-4 rounded focus:outline-none btn-block focus:shadow-outline mt-5"
            type="button`}
            onClick={handleGoogleLogin}
        >
            Sign in with Google
        </button>
    );
};

export default Button;