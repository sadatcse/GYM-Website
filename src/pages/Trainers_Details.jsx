import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const Trainers_Details = () => {
    const data = useLoaderData();

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-[90%] mx-auto'>
            <div className='my-16 md: overflow-x-hidden flex flex-col relative lg:flex-row items-center'>
                <div className='md:w-1/2'>
                    <img src={data.image_url} className='w-full' alt='' />
                </div>
                <div className=''>
                    <p className='font-bold text-3xl text-center md:text-left mt-4 md:mt-0 md:text-6xl'>{data.full_name}</p>
                    <p className='md:text-3xl mt-3 md:mt-5 font-semibold text-center md:text-left'>{data.certification}</p>
                    <p className='md:text-xl mt-5 md:max-w-[700px] font-normal text-gray-500 text-center md:text-left'>
                        {data.bio.split('\n').map((paragraph, index) => (
                            <React.Fragment key={index}>
                                {paragraph}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <div className='flex gap-5 mt-5 md:text-2xl justify-center md:justify-start text-xl'>
                        <a href={`https://www.facebook.com/${data.facebook}`} target='_blank' rel='noopener noreferrer'>
                            <FaFacebookF />
                        </a>
                        <a href={`https://www.instagram.com/${data.Instagram}`} target='_blank' rel='noopener noreferrer'>
                            <FaInstagram />
                        </a>
                        <a href={`tel:${data.mobile}`}>
                            <FaPhoneAlt />
                        </a>
                        <a href={`mailto:${data.email}`}>
                            <MdOutlineEmail />
                        </a>
                    </div>
                </div>
                <p className='absolute text-9xl font-extrabold -z-10 top-0 uppercase left-0 opacity-10 lg:block hidden'>
                    {data.short_name}
                </p>
            </div>
        </div>
    );
};

export default Trainers_Details;
