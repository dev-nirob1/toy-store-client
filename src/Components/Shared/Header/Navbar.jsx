// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../../Provider/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import auth from "../../../Firebase/firebase.config";
import { logout } from "../../../redux/features/userSlice";


const Navbar = () => {
  const dispatch = useDispatch()
  const { name, email, profileImage } = useSelector((state) => state.usersReducer)
  console.log(profileImage)
  const handleLogout = () => {
    signOut(auth)
    dispatch(logout())
  }

  const navItems = <>
    <li>
      <NavLink className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-100'} py-2 md:py-0 my-2 md:my-0`} to="/">Home</NavLink>
    </li>

    <li>
      <NavLink className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-100'} py-2 md:py-0 my-2 md:my-0`} to="/all-toys">Toys</NavLink>
    </li>
    <li>
      <NavLink className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-100'} py-2 md:py-0 my-2 md:my-0`} to="/about">About</NavLink>
    </li>
    <li>
      <NavLink className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-100'} py-2 md:py-0 my-2 md:my-0`} to="/contact">Contact</NavLink>
    </li>

    {
      email && <li>
        <NavLink className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-100'} py-2 md:py-0 my-2 md:my-0`} to="/add-toy">Add Toy</NavLink>
      </li>
    }
    {
      email && <li>
        <NavLink className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-100'} py-2 md:py-0 my-2 md:my-0`} to="/my-toys">My Toys</NavLink>
      </li>
    }
  </>

  return (
    <div className="bg-slate-950 h-20">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown z-20">
            <label tabIndex={0} className="text-red-500 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] py-5 shadow bg-slate-950 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to="/"><img src="logo.webp" className="h-16 w-20 ml-3" alt="website logo" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">

          {
            email ?
              <>
                <img src={profileImage} className="w-10 h-10 md:w-14 md:h-14 border border-white rounded-full mr-4 md:mr-5" alt="profile image" title={name} />
                <button onClick={handleLogout} className="px-6 py-3 md:px-8 md:py-3 bg-red-500 text-medium font-medium hover:bg-red-700 text-gray-100 rounded-md">Logout</button>
              </>
              :
              <Link className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 font-semibold text-lg rounded-lg " to="/login"><button>Login</button></Link>


          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;