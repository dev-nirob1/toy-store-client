import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const navItems = <>
    <li><Link className=" text-gray-200 border md:border-none py-2 md:py-0 my-2 md:my-0 hover:text-gray-300" to="/">Home</Link></li>
    <li><Link className=" text-gray-200 border md:border-none py-2 md:py-0 my-2 md:my-0 hover:text-gray-300" to="/about">About</Link></li>
    <li><Link className=" text-gray-200 border md:border-none py-2 md:py-0 my-2 md:my-0 hover:text-gray-300" to="/blog">Blog</Link></li>
    {user?.email &&
      <>
        <li><Link className=" text-gray-200  border md:border-none py-2 md:py-0 my-2 md:my-0 hover:text-gray-300" to="/addToy">Add Toys</Link></li>
        <li><Link className=" text-gray-200  border md:border-none py-2 md:py-0 my-2 md:my-0 hover:text-gray-300" to="/my-toys">My Toys</Link></li>
        <li><Link className=" text-gray-200  border md:border-none py-2 md:py-0 my-2 md:my-0 hover:text-gray-300" to="/allToys">All Toys</Link></li>
      </>
    }
  </>

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  return (
    <div className="navbar bg-[#342F46]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="text-[#26B8A5] lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] py-5 shadow bg-[#26B8A5] rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-[#26B8A5] text-xl">toyCars</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ?
            <button className="btn" onClick={handleLogout}>Logout</button>
            :
            <Link className="btn" to="/login"><button>login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;