import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
import { MdOutlineEmail } from "react-icons/md";

const Trainers_Details = () => {
    const data = useLoaderData();
    console.log(data);
    // data.image_url
    // data.full_name
    // data.short_name
    // data.certification
    // data.email
    // data.Instagram
    // data.facebook
    // data.mobile
    // data.bio
    // Conditional rendering to check if data exists before displaying
    if (!data) {
        return <div>Loading...</div>; // Handle loading state if data is not available yet
    }

    return (
        // <div className="max-w-4xl mx-auto px-4 py-8">
        //     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        //         <div className="relative pb-48 overflow-hidden">
        //             {data.image_url && (
        //                 <img
        //                     className="absolute inset-0 h-full w-full object-cover"
        //                     src={data.image_url}
        //                     alt={data.full_name}
        //                 />
        //             )}
        //         </div>
        //         <div className="p-4">
        //             <h1 className="text-3xl font-bold mb-2">{data.full_name}</h1>
        //             {data.short_name && (
        //                 <p className="text-gray-600 text-sm mb-4">{data.short_name}</p>
        //             )}
        //             {data.bio && (
        //                 <p className="text-gray-700 leading-relaxed">{data.bio}</p>
        //             )}
        //             <div className="mt-4">
        //                 <h2 className="text-xl font-semibold mb-2">Certifications</h2>
        //                 {data.certification && (
        //                     <p>{data.certification}</p>
        //                 )}
        //             </div>
        //             <div className="mt-4">
        //                 <h2 className="text-xl font-semibold mb-2">Contact</h2>
        //                 {data.email && (
        //                     <div className="flex items-center space-x-2">
        //                         <FiMail className="text-gray-600" />
        //                         <a href={`mailto:${data.email}`} className="text-blue-600 hover:underline">{data.email}</a>
        //                     </div>
        //                 )}
        //                 {data.Instagram && (
        //                     <div className="flex items-center space-x-2 mt-2">
        //                         <FiInstagram className="text-gray-600" />
        //                         <a href={`https://instagram.com/${data.Instagram}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{data.Instagram}</a>
        //                     </div>
        //                 )}
        //                 {data.facebook && (
        //                     <div className="flex items-center space-x-2 mt-2">
        //                         <FiFacebook className="text-gray-600" />
        //                         <a href={`https://facebook.com/${data.facebook}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{data.facebook}</a>
        //                     </div>
        //                 )}
        //                 {data.mobile && (
        //                     <div className="flex items-center space-x-2 mt-2">
        //                         <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        //                         </svg>
        //                         <a href={`tel:${data.mobile}`} className="text-blue-600 hover:underline">{data.mobile}</a>
        //                     </div>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='w-[90%] mx-auto'>
            <div className='my-16 md:border-b overflow-x-hidden flex flex-col relative lg:flex-row  items-center'>
                <div className='md:w-1/2'>
                    <img src={data.image_url} className='w-full' alt="" />
                </div>
                <div className=''>
                    <p className='font-bold text-3xl text-center md:text-left mt-4 md:mt-0 md:text-6xl'>{data.full_name} </p>
                    <p className=' md:text-3xl mt-3 md:mt-5 font-semibold text-center md:text-left'>{data.certification}</p>
                    <p className='md:text-xl mt-5 md:max-w-[700px] font-normal text-gray-500 text-center md:text-left'>{data.bio}</p>
                    <div className='flex gap-5 mt-5 md:text-2xl  justify-center md:justify-start text-xl'>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaPhoneAlt />
                        <MdOutlineEmail />
                    </div>
                </div>
                <p className='absolute text-9xl font-extrabold -z-10 top-0 uppercase  left-0 opacity-10 lg:block hidden'>{data.short_name}</p>
            </div>
        </div>
    );
};

export default Trainers_Details;
