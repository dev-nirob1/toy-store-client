import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)
  console.log(user)
  const navItems = <>
    <li><Link className=" text-gray-200 focus:text-white hover:bg-bg-gray-200 py-2 md:py-0 my-2 md:my-0 hover:text-gray-300" to="/">Home</Link></li>
    <li><Link className=" text-gray-200 focus:text-white border md:border-none py-2 md:py-0 my-2 md:my-0 hover:text-gray-300" to="/blog">Blog</Link></li>
    <li><Link className=" text-gray-200 focus:text-white  border md:border-none py-2 md:py-0 my-2 md:my-0 hover:text-gray-300" to="/addToy">Add Toys</Link></li>
    <li><Link className=" text-gray-200 focus:text-white  border md:border-none py-2 md:py-0 my-2 md:my-0 hover:text-gray-300" to="/my-toys">My Toys</Link></li>
    <li><Link className=" text-gray-200 focus:text-white  border md:border-none py-2 md:py-0 my-2 md:my-0 hover:text-gray-300" to="/allToys">All Toys</Link></li>
  </>

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  return (
    <div className="bg-[#342F46] h-20">
      <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown z-20">
          <label tabIndex={0} className="text-[#26B8A5] lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] py-5 shadow bg-[#342F46] rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl"><img src="logo.png" className="h-16 w-20" alt="" /></Link>
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
              <img src={user && user.photoURL} className="w-14 h-14 rounded-full mr-5" title={user.displayName} alt="profile image" />
              <button className="px-8 py-3 bg-red-500 text-lg font-semibold hover:bg-red-700 text-gray-100 rounded-lg" onClick={handleLogout}>Logout</button>
              {/* <button className="px-8 py-3 bg-[#00A65A] text-[#342F46] text-lg font-semibold hover:bg-[#CCCCCC] hover:text-white rounded-lg" onClick={handleLogout}>Logout</button> */}
            </>
            :
            // <Link className="bg-[#2ECC71] hover:bg-[] text-white px-8 py-3 font-semibold text-lg rounded-lg " to="/login"><button>login</button></Link>
            <Link className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 font-semibold text-lg rounded-lg " to="/login"><button>login</button></Link>


        }
      </div>
    </div>
    </div>
  );
};

export default Navbar;