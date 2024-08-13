import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../css/navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = false;

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);

    // Close the dropdown after 3 seconds
    if (!isDropdownOpen) {
      setTimeout(() => {
        setIsDropdownOpen(false);
      }, 3000);
    }
  };

  const menu = (
    <>
      <NavLink className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")} to="/aboutus/about">About us</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")} to="/service">Service</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")} to="/trainers">Team</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")} to="/explore">Explore</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")} to="/contactus">Contact Us</NavLink>
    </>
  );

  const avatar = (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:rounded-lg hover:bg-transparent avatar">
          <div className="w-10 rounded-lg">
            <img alt="User Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  );

  const buttons = (
    <div>
      {/* desktop sign up button */}
      <Link to="/under"><button className="btn hidden md:block md:px-6 md:font-medium text-white bg-red-600 rounded-md border-none hover:text-red-600 hover:bg-white hover:border-red-600 poppins">Sign Up</button></Link>
      {/* mobile sign up button */}
      <Link to="/under"><button className="block md:hidden py-2 px-4 text-xs md:text-sm md:font-medium text-white bg-red-600 rounded-md border-none poppins">Sign Up</button></Link>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-custom-black px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" onClick={handleDropdownToggle} className="z-50 btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#f4cb71">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul tabIndex={0} className="poppins relative menu menu-sm dropdown-content gap-1 bg-transparent text-white rounded-box z-[5] mt-3 w-40 p-3 shadow">
                <div className='absolute bg-black w-full top-0 opacity-90 border border-gray-700 -left-1 h-full rounded-lg -z-10'></div>
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/" onClick={handleDropdownToggle}>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/aboutus/about" onClick={handleDropdownToggle}>About us</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/service" onClick={handleDropdownToggle}>Service</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/trainers" onClick={handleDropdownToggle}>Trainer</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/explore" onClick={handleDropdownToggle}>Explore</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/contactus" onClick={handleDropdownToggle}>Contact Us</NavLink>
              </ul>
            )}
          </div>
          <Link to="/" className="btn btn-ghost text-xl z-50">
  <img className='h-24 w-26 hidden md:block' src={Logo} alt="Logo" />
</Link>
<Link to="/" className="btn btn-ghost text-xl z-50">
  <img className='w-10 block md:hidden' src={Logo} alt="Logo" />
</Link>
        </div>
        <div className="flex navbar-end w-full justify-end ">
          <div className="hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 space-x-6 font-medium text-sm flex mr-3 items-center poppins">
              {menu}
            </ul>
          </div>
          {user ? avatar : buttons}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
