import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCalendar, AiOutlineUser, AiOutlineTag } from 'react-icons/ai';
import useAxiosPublic from '../Hook/useAxiosPublic';
import { Helmet } from 'react-helmet-async';

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

    // const notices = [
    //     {
    //         "_id": "66b9f3172bda247a314a6c0b",
    //         "title": "Important Update on Office Hours",
    //         "description": "The office will be closed on Friday for maintenance. Please plan accordingly. The office will be closed on Friday for maintenance. Please plan accordingly. The office will be closed on Friday for maintenance. Please plan accordingly. ",
    //         "date": "2024-08-12",
    //         "author": "HR Department",
    //         "category": "General",
    //         "image": "https://www.lswgcpa.com/wp-content/uploads/2021/10/IMPORTANT-UPDATE.jpg"
    //     },
    //     {
    //         "_id": "66b9f3172bda247a314a6c0c",
    //         "title": "Annual General Meeting Announcement",
    //         "description": "The Annual General Meeting will take place on August 20, 2024. Attendance is mandatory.",
    //         "date": "2024-08-10",
    //         "author": "Management",
    //         "category": "Event",
    //         "image": "https://relinconsultants.com/wp-content/uploads/2023/03/Annual-General-Meeting-under-the-Company-Act-of-Bangladesh-768x398.jpg"
    //     },
    //     {
    //         "_id": "66b9f3172bda247a314a6c0d",
    //         "title": "New Health and Safety Guidelines",
    //         "description": "Please review the new health and safety guidelines effective immediately.",
    //         "date": "2024-08-05",
    //         "author": "Safety Committee",
    //         "category": "Policy",
    //         "image": "https://www.deenscollege.com/wp-content/uploads/2018/11/Safety-guidelines.jpg"
    //     },
    //     {
    //         "_id": "66b9f3172bda247a314a6c0e",
    //         "title": "IT System Maintenance",
    //         "description": "The IT systems will undergo maintenance on Saturday from 10 AM to 2 PM. Please save your work.",
    //         "date": "2024-08-08",
    //         "author": "IT Department",
    //         "category": "Maintenance",
    //         "image": "https://anarsolutions.com/wp-content/uploads/2016/12/Maintenance-300x200.jpg"
    //     },
    //     {
    //         "_id": "66b9f3172bda247a314a6c0f",
    //         "title": "Team Building Activity",
    //         "description": "Join us for a team-building activity on August 15th. It's going to be fun and engaging!",
    //         "date": "2024-08-07",
    //         "author": "HR Department",
    //         "category": "Event",
    //         "image": "https://relinconsultants.com/wp-content/uploads/2023/03/Annual-General-Meeting-under-the-Company-Act-of-Bangladesh-768x398.jpg"
    //     },
    //     {
    //         "_id": "66b9f3172bda247a314a6c10",
    //         "title": "New Office Dress Code",
    //         "description": "A new dress code policy will be implemented starting September 1st. Please adhere to the guidelines.",
    //         "date": "2024-08-14",
    //         "author": "Management",
    //         "category": "Policy",
    //         "image": "https://www.deenscollege.com/wp-content/uploads/2018/11/Safety-guidelines.jpg"
    //     },
    //     {
    //         "_id": "66b9f3172bda247a314a6c11",
    //         "title": "Software Update Notice",
    //         "description": "All systems will be updated on August 18th. Ensure your devices are ready.",
    //         "date": "2024-08-09",
    //         "author": "IT Department",
    //         "category": "Maintenance",
    //         "image": "https://anarsolutions.com/wp-content/uploads/2016/12/Maintenance-300x200.jpg"
    //     }
    // ];

    const Header = () => {
        return (
            <div className="relative h-64">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://www.teambath.com/wp-content/uploads/2023/11/Gym-landscape-for-facilities-page-2023.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative flex items-center justify-center h-full">
                    <div className='flex flex-col items-center gap-4'>
                        <h1 className="text-custom-yellow text-4xl font-bold">Notice </h1>
                        <p className="text-center text-accent font-semibold text-xl">Stay informed with the latest updates, announcements, and important notices. Keep track of what’s happening!</p>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="">
<Helmet>
    <title>Notice Board - Multigym Premium</title>
    <meta name="description" content="Stay updated with the latest notices, announcements, and important information from Multigym Premium. Keep track of everything you need to know." />
</Helmet>
<Header />

            {/* Notice List */}
            <section className=" m-10 gap-5 grid items-center justify-center w-4/5 mx-auto">
                {notices.length > 0 && (
                    <>
                        {/* First Notice */}
                        <div className=" col-span-full bg-white shadow-lg rounded-lg overflow-hidden mb-6 flex flex-col lg:flex-row">
                            <img
                                src={notices[0].image}
                                alt={notices[0].title}
                                className="w-full lg:w-1/2 h-64 lg:h-auto object-cover mr-5"
                            />
                            <div className="flex flex-col justify-between lg:w-1/2">
                                <div>
                                    <h2 className="text-4xl font-bold mb-4">{notices[0].title}</h2>
                                    <p
    className="text-gray-700 text-base lg:text-lg mb-4"
    dangerouslySetInnerHTML={{ __html: notices[0].description }}
></p>                                </div>
                                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mr-5">
                                    <div className=" text-gray-500 flex items-center mb-2 lg:mb-0">
                                        <AiOutlineCalendar className="mr-2" />
                                        <span>Posted on: {new Date(notices[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    <div className=" text-gray-500 flex items-center mb-2 lg:mb-0">
                                        <AiOutlineUser className="mr-2" />
                                        <span>Author: {notices[0].author}</span>
                                    </div>
                                    <div className=" text-gray-500 flex items-center">
                                        <AiOutlineTag className="mr-2" />
                                        <span>Category: {notices[0].category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Other Notices */}
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {notices.slice(1).map((notice, index) => (
                                <div
                                    key={index}
                                    className="bg-base-100 border shadow rounded-lg overflow-hidden flex"
                                >
                                    <img
                                        src={notice.image}
                                        alt={notice.title}
                                        className="w-1/3 h-auto object-cover"
                                    />
                                    <div className="p-4 w-2/3 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">{notice.title}</h3>
                                            <p className="text-gray-600 text-sm mb-2">{notice.description}</p>
                                        </div>
                                        <div className="mt-auto">
                                            <div className="text-xs text-gray-500 flex items-center mb-1">
                                                <AiOutlineCalendar className="mr-2" />
                                                Posted on: {notice.date}
                                            </div>
                                            <div className="text-xs text-gray-500 flex items-center mb-1">
                                                <AiOutlineUser className="mr-2" />
                                                Author: {notice.author}
                                            </div>
                                            <div className="text-xs text-gray-500 flex items-center">
                                                <AiOutlineTag className="mr-2" />
                                                Category: {notice.category}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </>
                )}
                {notices.length === 0 && (
                    <div className="space-y-5">
                        {/* First Notice Skeleton */}
                        <div className="col-span-full bg-base-200 shadow rounded-lg overflow-hidden mb-6 flex animate-pulse">
                            <div className="w-2/5 bg-gray-300 h-80"></div>
                            <div className="p-4 w-3/5 flex flex-col justify-between">
                                <div>
                                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded mb-3"></div>
                                    <div className="h-4 bg-gray-300 rounded"></div>
                                </div>
                                <div className="text-xs text-gray-500 flex justify-between">
                                    <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
                                    <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
                                    <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Other Notices Skeletons */}
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="bg-base-200 border h-24 rounded-lg overflow-hidden flex animate-pulse">
                                    <div className="w-1/3 bg-gray-300 h-auto"></div>
                                    <div className="p-4 w-2/3">
                                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                        <div className="h-3 bg-gray-300 rounded mb-2"></div>
                                        <div className="h-3 bg-gray-300 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </section>
        </div>
    );
};

export default Notice;