import { signOut } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../../redux/features/userSlice";
import auth from "../../../Firebase/firebase.config";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const dispatch = useDispatch()
  const { name, email, profileImage } = useSelector(state => state.usersReducer)

  const handleLogout = () => {
    signOut(auth)
    dispatch(logout())
  }

  return (
    <header className="bg-slate-950 py-3 relative">
      <nav className="container mx-auto px-4 flex items-center justify-between text-white text-lg font-medium">

        <div className="flex items-center justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden h-8 w-8 text-gray-200 flex justify-center items-center"
          >

            {
              isOpen ?

                <FaXmark size={25} />
                :
                <FaBars size={25} />
            }
          </button>
          <Link className="/">
            <img className="w-20 h-16" src="logo.webp" alt="logo" />
          </Link>
        </div>


        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-[998]"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
        {isDropdownOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-[998]"
            onClick={() => setIsDropdownOpen(false)}
          ></div>
        )}
        <ul className={`${isOpen ? 'block absolute top-16 left-0 bg-slate-950 w-[40vw] py-10' : 'hidden'} z-[999] space-y-3 md:space-y-0 md:flex items-center justify-center gap-1`}>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg ${isActive ? 'text-orange-600 hover:text-white' : 'text-white'} hover:bg-orange-600`
              }
              to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg ${isActive ? 'text-orange-600 hover:text-white' : 'text-white'} hover:bg-orange-600`
              }
              to="/all-toys">
              Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg ${isActive ? 'text-orange-600  hover:text-white' : 'text-white'} hover:bg-orange-600`
              }
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg ${isActive ? 'text-orange-600 hover:text-white' : 'text-white'} hover:bg-orange-600 hover:text-white`
              }
              to="/contact">
              Contact
            </NavLink>
          </li>

        </ul>

        {
          email ?
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center"
              >
                <img
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src={profileImage}
                  alt="user avatar"
                  title={name}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-[1000] text-gray-800"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-200" to="/add-toy">
                    Add Toy
                  </NavLink>
                  <NavLink
                    to="/my-toys"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    My Toys
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
            :
            <Link className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 font-semibold text-lg rounded-lg " to="/login"><button>Login</button></Link>
        }
      </nav>
    </header>
  );
};

export default Navbar;