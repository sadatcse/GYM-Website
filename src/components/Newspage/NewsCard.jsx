import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, category, tags, description, image, date, _id } = news;

    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className='border poppins rounded-md hover:shadow'>
            <img src={image} className='rounded-t h-48 object-cover w-full hover:opacity-95' alt="" />
            <div className='p-3 flex flex-col justify-around gap-3'>
                <p className='text-xs font-normal'>{tags[0]} | {tags[1]} | {tags[2]}</p>
                <div className='flex flex-col gap-2'>
                    <Link to={`/blog/${_id}`} className='text-sm font-medium hover:text-red-700 cursor-pointer'>{title}</Link>
                    <p className='text-xs'>{description.length > 120 ? `${description.slice(0, 120)} ...` : description} <Link className='text-red-600 hover:text-red-800' to={`/blog/${_id}`}>details</Link></p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;