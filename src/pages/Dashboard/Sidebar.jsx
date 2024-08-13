import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaCog, FaBlog, FaComments, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import logo from "../../assets/logo.png"
// import logo from "../../assets/gymlogo.jpg"
import { RiListCheck2 } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { BsPlusCircleDotted } from "react-icons/bs";
import { VscNewFile } from "react-icons/vsc";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiMessageSquareAdd } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { GrLineChart } from "react-icons/gr";
import { TbLayoutDashboard } from "react-icons/tb";



const Sidebar = () => {

    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out',
                    text: 'User logged out successfully',
                }).then(() => {
                    navigate("/");
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Logout Failed',
                    text: 'Logout failed. Please try again later.',
                });
                console.error(error);
            });
    };

    return (
        <div className="border-r right-inner-shadow border-gray-400 border-dashed h-screen poppins text-[#737373] w-[200px]">
            <img src={logo} alt="multygym premium" className='w-16 ml-5 py-7' />
            <div className=''>
                {/* <p className='text-lg font-semibold mx-5'>Logo</p> */}
                <nav className=''>
                    <ul className=''>
                        <li className="text-sm text-left pl-1 mx-5">Overview</li>
                        <li className="text-left mt-2 mx-5">
                            <NavLink to="dashboard" className="flex routes gap-4 items-center">
                                <TbLayoutDashboard className='text-xl' />
                                Panel
                            </NavLink>
                        </li>
                        <li className="text-sm text-left pl-1 mt-2 mx-5">Blogs</li>
                        <li className="text-left mt-2 mx-5">
                            <NavLink to="blog_view" className="flex routes gap-4 items-center">
                                <RiListCheck2 className='text-xl' />
                                List
                            </NavLink>
                        </li>
                        <li className="text-left  mx-5">
                            <NavLink to="blog_create" className="flex routes gap-4 items-center">
                                <VscNewFile className='text-xl' />
                                Create
                            </NavLink>
                        </li>
                        <li className="text-sm text-left pl-1 mt-2 mx-5">Testimonial</li>
                        <li className="text-left mt-2  mx-5">
                            <NavLink to="testimonial_view" className="flex routes gap-4 items-center">
                                <LuMessagesSquare className='text-xl' />
                                List
                            </NavLink>
                        </li>
                        <li className="text-left  mx-5">
                            <NavLink to="testimonial_create" className="flex routes gap-4 items-center">
                                <BiMessageSquareAdd className='text-xl' />
                                Create
                            </NavLink>
                        </li>
                        <li className="text-sm text-left pl-1 mt-2 mx-5">Teams</li>
                        <li className="text-left mt-2 mx-5">
                            <NavLink to="team_view" className="flex routes gap-4 items-center">
                                <AiOutlineTeam className='text-xl' />
                                List
                            </NavLink>
                        </li>
                        <li className="text-left  mx-5">
                            <NavLink to="team_add" className="flex gap-4 routes items-center">
                                <AiOutlineUserAdd className='text-xl' />
                                Add
                            </NavLink>
                        </li>
                        <li className="text-sm text-left pl-1 mt-2 mx-5">Notice</li>
                        <li className="text-left mt-2 mx-5">
                            <NavLink to="notice_view" className="flex routes gap-4 items-center">
                                <AiOutlineTeam className='text-xl' />
                                List
                            </NavLink>
                        </li>
                        <li className="text-left  mx-5">
                            <NavLink to="notice_create" className="flex gap-4 routes items-center">
                                <AiOutlineUserAdd className='text-xl' />
                                Add
                            </NavLink>
                        </li>
                        <li className="text-left mt-5 mx-5">
                            <Link onClick={handleLogOut} className="flex gap-4 routes items-center ">
                                <CiLogout className='text-xl' />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
