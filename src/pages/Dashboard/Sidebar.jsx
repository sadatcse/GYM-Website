import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaCog, FaBlog, FaComments, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

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
        <div className="w-64 bg-gray-800 text-white p-5">
            <h2 className="text-2xl mb-6">Dashboard</h2>
            <nav>
                <ul>
                    <li className="mt-6 mb-2 text-xl border-b">Blogs</li>
                    <li className="mb-4">
                        <Link to="/blogs/view" className="flex items-center">
                            <FaBlog className="mr-2" />
                            View Blogs
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/blogs/create" className="flex items-center">
                            <FaBlog className="mr-2" />
                            Create Blog
                        </Link>
                    </li>
                    <li className="mt-6 mb-2 text-xl border-b">Testimonial</li>
                    <li className="mb-4">
                        <Link to="/testimonials/view" className="flex items-center">
                            <FaComments className="mr-2" />
                            View Testimonials
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/testimonials/create" className="flex items-center">
                            <FaComments className="mr-2" />
                            Create Testimonial
                        </Link>
                    </li>
                    <li className="mt-6 mb-2 text-xl border-b">Teams</li>
                    <li className="mb-4">
                        <Link to="/teams/view" className="flex items-center">
                            <FaUsers className="mr-2" />
                            View Teams
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/teams/add" className="flex items-center">
                            <FaUsers className="mr-2" />
                            Add Team Member
                        </Link>
                    </li>
                    <li className="mt-6 mb-4">
                        <Link onClick={handleLogOut} className="flex items-center text-white hover:bg-orange-500">
                            <FaSignOutAlt className="mr-2" />
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
