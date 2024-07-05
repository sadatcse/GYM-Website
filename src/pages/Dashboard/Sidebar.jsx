import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaCog, FaBlog, FaComments, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import logo from "../../assets/logo.png"
// import logo from "../../assets/gymlogo.jpg"

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
        <div   className="border-r right-inner-shadow border-gray-400 border-dashed h-screen poppins text-[#737373] max-w-[200px]">
            {/* <img src={logo} alt="multygym premium" className='w-16' /> */}
            <div className=''>
                <p className='text-lg font-semibold mx-5'>Logo</p>
                <nav className=''>
                    <ul>
                        <li className="text-sm text-left mt-3  mx-5">Blogs</li>
                        <li className="text-left mt-3  mx-5">
                            <Link to="/blogs/view" className="flex gap-3 items-center">
                                <FaBlog className="" />
                                List
                            </Link>
                        </li>
                        <li className="text-left mt-3  mx-5">
                            <Link to="/blogs/create" className="flex gap-3 items-center">
                                <FaBlog className="" />
                                Create
                            </Link>
                        </li>
                        <li className="text-sm text-left mt-3  mx-5">Testimonial</li>
                        <li className="text-left mt-3  mx-5">
                            <Link to="/testimonials/view" className="flex gap-3 items-center">
                                <FaComments className="" />
                                List
                            </Link>
                        </li>
                        <li className="text-left mt-3  mx-5">
                            <Link to="/testimonials/create" className="flex gap-3 items-center">
                                <FaComments className="" />
                                Create
                            </Link>
                        </li>
                        <li className="text-sm text-left mt-3  mx-5">Teams</li>
                        <li className="text-left mt-3  mx-5">
                            <Link to="/teams/view" className="flex gap-3 items-center">
                                <FaUsers className="" />
                                List
                            </Link>
                        </li>
                        <li className="text-left mt-3  mx-5">
                            <Link to="/teams/add" className="flex gap-3 items-center">
                                <FaUsers className="" />
                                Add
                            </Link>
                        </li>
                        <li className="text-left mt-3  mx-5">
                            <Link onClick={handleLogOut} className="flex gap-3 items-center ">
                                <FaSignOutAlt className="" />
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
