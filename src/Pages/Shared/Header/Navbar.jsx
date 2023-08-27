import { Link } from "react-router-dom";


const Navbar = () => {

 const navItems = <>
    <li><Link className=" hover:text-gray-200 border hover:border border-[#26B8A5]" to="/">Home</Link></li>
    <li><Link className=" hover:text-gray-200 border hover:border border-[#26B8A5]" to="/about">About</Link></li>
    <li><Link className=" hover:text-gray-200 border hover:border border-[#26B8A5]" to="/blog">Blog</Link></li>
    <li><Link className=" hover:text-gray-200 border hover:border border-[#26B8A5]" to="/addToy">Add Toy</Link></li>
    <li><Link className=" hover:text-gray-200 border hover:border border-[#26B8A5]" to="/allToy">Add Toy</Link></li>
  </>

  return (
    <div className="navbar bg-[#342F46]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-[#26B8A5] bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-[#26B8A5] text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-white font-semibold">
         {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;