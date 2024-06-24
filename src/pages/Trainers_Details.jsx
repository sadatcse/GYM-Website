import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FiMail, FiInstagram, FiFacebook } from 'react-icons/fi';

const Trainers_Details = () => {
    const data = useLoaderData();
    console.log(data);

    // Conditional rendering to check if data exists before displaying
    if (!data) {
        return <div>Loading...</div>; // Handle loading state if data is not available yet
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative pb-48 overflow-hidden">
                    {data.image_url && (
                        <img
                            className="absolute inset-0 h-full w-full object-cover"
                            src={data.image_url}
                            alt={data.full_name}
                        />
                    )}
                </div>
                <div className="p-4">
                    <h1 className="text-3xl font-bold mb-2">{data.full_name}</h1>
                    {data.short_name && (
                        <p className="text-gray-600 text-sm mb-4">{data.short_name}</p>
                    )}
                    {data.bio && (
                        <p className="text-gray-700 leading-relaxed">{data.bio}</p>
                    )}
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold mb-2">Certifications</h2>
                        {data.certification && (
                            <p>{data.certification}</p>
                        )}
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold mb-2">Contact</h2>
                        {data.email && (
                            <div className="flex items-center space-x-2">
                                <FiMail className="text-gray-600" />
                                <a href={`mailto:${data.email}`} className="text-blue-600 hover:underline">{data.email}</a>
                            </div>
                        )}
                        {data.Instagram && (
                            <div className="flex items-center space-x-2 mt-2">
                                <FiInstagram className="text-gray-600" />
                                <a href={`https://instagram.com/${data.Instagram}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{data.Instagram}</a>
                            </div>
                        )}
                        {data.facebook && (
                            <div className="flex items-center space-x-2 mt-2">
                                <FiFacebook className="text-gray-600" />
                                <a href={`https://facebook.com/${data.facebook}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{data.facebook}</a>
                            </div>
                        )}
                        {data.mobile && (
                            <div className="flex items-center space-x-2 mt-2">
                                <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <a href={`tel:${data.mobile}`} className="text-blue-600 hover:underline">{data.mobile}</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainers_Details;
