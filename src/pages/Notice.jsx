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
                const sortedNotices = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setNotices(sortedNotices);
                console.log(sortedNotices)
            } catch (error) {
                console.error('Error fetching notices:', error);
            }
        };

        fetchNotices();
    }, [axiosPublic]);

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
                        <p className="text-center text-white font-semibold text-xl">Stay informed with the latest updates, announcements, and important notices. Keep track of what’s happening!</p>
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
                        <div className=" col-span-full gap-3 overflow-hidden mb-28 flex flex-col lg:flex-row   ">
                            <img
                                src={notices[0].image}
                                alt={notices[0].title}
                                className="w-full lg:w-1/2 h-64 lg:h-auto  rounded-xl object-cover mr-5"
                            />
                            <div className="flex flex-col justify-between lg:w-1/2">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4">{notices[0].title}</h2>
                                    <div className='border-b border-gray-300 mb-4'></div>
                                    <p
                                        className="text-gray-700 lg:text-lg mb-4"
                                        dangerouslySetInnerHTML={{ __html: notices[0].description }}
                                    ></p>                                </div>
                                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-1">
                                    <div className=" text-gray-500 flex items-center mb-2 lg:mb-0">
                                        <AiOutlineCalendar className="mr-2" />
                                        <span className='text-sm'>Posted on: {new Date(notices[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    <div className=" text-gray-500 flex items-center mb-2 lg:mb-0">
                                        <AiOutlineUser className="mr-2" />
                                        <span className='text-sm'>Author: {notices[0].author}</span>
                                    </div>
                                    <div className=" text-gray-500 flex items-center">
                                        <AiOutlineTag className="mr-2" />
                                        <span className='text-sm'>Category: {notices[0].category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {notices.slice(1).map((notice, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-between h-full shadow rounded-lg overflow-hidden"
                                >
                                    <img
                                        src={notice.image}
                                        alt={notice.title}
                                        className="w-full h-60 object-cover"
                                    />
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-lg text-center font-semibold px-2 mb-1 mt-5 text-yellow-600">{notice.title}</h3>
                                        <p className="text-gray-600 text-center text-sm mt-2 px-4">
                                            {notice.description.replace(/<[^>]+>/g, '').slice(0, 200)}{notice.description.length > 200 ? '...' : ''}
                                        </p>
                                    </div>
                                    <div className='p-4 '>
                                        <button className="btn hover:bg-custom-yellow bg-yellow-500 text-white w-full mt-3">Details</button>
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