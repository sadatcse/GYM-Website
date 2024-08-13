import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCalendar, AiOutlineUser, AiOutlineTag } from 'react-icons/ai';
import useAxiosPublic from '../Hook/useAxiosPublic';

const Notice = () => {
    const [notices, setNotices] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await axiosPublic.get('/notice/get-all');
                setNotices(response.data);
            } catch (error) {
                console.error('Error fetching notices:', error);
            }
        };

        fetchNotices();
    }, [axiosPublic]);

    return (
        <div className="container mx-auto p-5 flex">
            {/* Left Menu */}
            <nav className="w-1/4 pr-5">
                <ul className="space-y-4">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-500 font-semibold" : "text-gray-700"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-500 font-semibold" : "text-gray-700"
                            }
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/services" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-500 font-semibold" : "text-gray-700"
                            }
                        >
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-500 font-semibold" : "text-gray-700"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/notices" 
                            className={({ isActive }) => 
                                isActive ? "text-blue-500 font-semibold" : "text-gray-700"
                            }
                        >
                            Notices
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Right Notice List */}
            <div className="w-3/4">
                {notices.map((notice, index) => (
                    <div 
                        key={index} 
                        className="bg-base-100 shadow-lg rounded-lg overflow-hidden mb-6"
                    >
                        <img 
                            src={notice.image} 
                            alt={notice.title} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                            <h2 className="text-2xl font-semibold mb-3">{notice.title}</h2>
                            <p className="text-gray-600 mb-3">{notice.description}</p>
                            <div className="text-sm text-gray-500 mb-2 flex items-center">
                                <AiOutlineCalendar className="mr-2" />
                                Date: {notice.date}
                            </div>
                            <div className="text-sm text-gray-500 mb-2 flex items-center">
                                <AiOutlineUser className="mr-2" />
                                Author: {notice.author}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                                <AiOutlineTag className="mr-2" />
                                Category: {notice.category}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notice;
