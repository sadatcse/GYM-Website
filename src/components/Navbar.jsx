import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const user = false;

    // Menu and route links are here
    const menu =
        <>
            <NavLink className="text-red-600" to="/">Home</NavLink>
            <NavLink to="/">Trainers</NavLink>
            <NavLink to="/">News</NavLink>
            <NavLink to="/">Explore</NavLink>
            <NavLink to="/">About Us</NavLink>
            <NavLink to="/">Contact Us</NavLink>
        </>
    const avatar = <div className="navbar-end">
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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

    const buttons = <div className="">
        <Link><button className="btn px-6 font-semibold text-white bg-red-600 rounded-md border hover:text-red-600 hover:bg-transparent  hover:border-red-600">Sign Up</button></Link>
    </div>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Multigym</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3 font-semibold text-sm flex items-center">
                        {menu}
                    </ul>
                </div>

                {
                    // If user exists then show avatar else sign up
                    user ?
                        <>
                            {avatar}
                        </>
                        :
                        <>
                            <div className="navbar-end">
                                {buttons}
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;