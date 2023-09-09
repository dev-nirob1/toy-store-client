import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  // console.log(user)

  const navItems = <>
    <li><Link className="py-2 md:py-0 my-2 md:my-0 text-gray-100 hover:text-gray-200" to="/">Home</Link></li>
    <li><Link className="py-2 md:py-0 my-2 md:my-0 text-gray-100 hover:text-gray-200" to="/blog">Blog</Link></li>
    <li><Link className="py-2 md:py-0 my-2 md:my-0 text-gray-100 hover:text-gray-200" to="/addToy">Add Toys</Link></li>
    <li><Link className="py-2 md:py-0 my-2 md:my-0 text-gray-100 hover:text-gray-200" to="/my-toys">My Toys</Link></li>
    <li><Link className="py-2 md:py-0 my-2 md:my-0 text-gray-100 hover:text-gray-200" to="/allToys">All Toys</Link></li>
  </>

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        alert(`${error.message}`)
      })
  }

  return (
    <div className="bg-[#342F46] h-20">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown z-20">
            <label tabIndex={0} className="text-red-500 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] py-5 shadow bg-[#342F46] rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to="/"><img src="logo.png" className="h-16 w-20 ml-3" alt="website logo" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">

          {
            user ?
              <>
                <img src={user && user.photoURL} className="w-10 h-10 md:w-14 md:h-14 border border-white rounded-full mr-4 md:mr-5" title={user.displayName} alt="profile image" />
                <button className="px-6 py-3 md:px-8 md:py-3 bg-red-500 text-medium font-medium hover:bg-red-700 text-gray-100 rounded-md" onClick={handleLogout}>Logout</button>

              </>
              :
              <Link className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 font-semibold text-lg rounded-lg " to="/login"><button>login</button></Link>


          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;