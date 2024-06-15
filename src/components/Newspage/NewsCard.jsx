import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, cover, subtitle, tags, date, description } = news;
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className='border poppins rounded-md'>
            <img src={cover} className='rounded-t h-48 object-cover w-full' alt="" />
            <div className='p-3 flex flex-col justify-around gap-3'>
                <p className='text-xs font-normal'>{tags[0]} | {tags[1]} | {tags[2]}</p>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-medium'>{title}</p>
                    <p className='text-xs'>{description.length > 120 ? description.slice(0, 120) : description} ... <Link className='text-red-600 hover:text-red-800'>details</Link></p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;