import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Helmet } from 'react-helmet-async';
import ReactQuill from 'react-quill';
import { useLoaderData } from 'react-router-dom';
import UseAxioSecure from '../../../Hook/UseAxioSecure';
import useAxiosPublic from '../../../Hook/useAxiosPublic';

const Blog_edit = () => {
    
    const { category, date, description, image, tags, title, _id } = useLoaderData();
    const handleSubmit = () =>{

    }
    const [formData, setFormData] = useState({
        title: title,
        description: description,
        image: image,
        category: category,
        tags: tags,
        date: null,
    });
    console.log(typeof(formData.category))
    const axiosSecure = UseAxioSecure();
    const [imageurl, setimageurl] = useState('');
    const axiosPublic = useAxiosPublic();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const handleImageUpload = async (e) => {
        const imageFile = e.target.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setimageurl(res.data.data.url);
            setFormData((prevData) => ({
                ...prevData,
                image: res.data.data.url
            }));

            await Swal.fire({
                icon: 'success',
                title: 'Image uploaded successfully!',
                text: `Image URL: ${res.data.data.url}`,
            });
        } catch (error) {
            await Swal.fire({
                icon: 'error',
                title: 'Error uploading image',
                text: error.message,
            });
        }
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            date: date,
        });
    };
    const handleDescriptionChange = (value) => {
        setFormData({
            ...formData,
            description: value,
        });
    };

    return (
        <div className="poppins">
            <Helmet>
                <title>Edit Blog</title>
            </Helmet>

            {/* Top content */}
            <p className='text-2xl font-bold'>Edit : <span className='text-gray-700'>  {title}</span></p>

            {/* breadcrumbs */}
            <div className="breadcrumbs mt-2 text-xs text-black">
                <ul>
                    <li className='text-gray-400'><a>Home</a></li>
                    <li className='text-gray-400'><a>admin</a></li>
                    <li className='text-gray-400'>blog</li>
                    <li className='text-gray-500'>edit</li>
                </ul>
            </div>
            <div className="mt-9 ml-4">
                <p className='font-medium text-2xl'>Details</p>
                <form onSubmit={handleSubmit}>
                    <div className="mt-6">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder='Blog title'
                            className="appearance-none text-sm border shadow-sm rounded-xl  w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <input
                            type="text"
                            id="tags"
                            name="tags"
                            placeholder='Blog tags'
                            value={formData.tags}
                            onChange={handleChange}
                            className="appearance-none text-sm border shadow-sm rounded-xl  w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex justify-between gap-5 mt-6">
                        <DatePicker
                            selected={formData.date}
                            onChange={handleDateChange}
                            placeholderText='Select a date'
                            className="appearance-none text-gray-400 text-sm border shadow-sm rounded-xl  w-full py-4 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        <select
                            id="category"
                            name="category"
                            value={category}
                            // value={formData.category}
                            onChange={handleChange}
                            className="appearance-none text-sm border shadow-sm rounded-xl cursor-pointer w-full py-4 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        >
                            <option value="" className='text-gray-400'>Category</option>
                            <option value="celebrations">Celebrations</option>
                            <option value="announcements">Announcements</option>
                            <option value="events">Events</option>
                            <option value="meetings">Meetings</option>
                            <option value="fitness">Fitness</option>
                            <option value="achievements">Achievements</option>
                        </select>
                    </div>
                    <div className="mt-6">
                        <ReactQuill
                            id="description"
                            value={formData.description}
                            onChange={handleDescriptionChange}
                            className="appearance-none text-sm border shadow-sm rounded-xl lg:h-52 w-full py-4 lg:pb-14 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            modules={Blog_edit.modules}
                            formats={Blog_edit.formats}
                            required
                        />
                        {/* <textarea
                            id="description"
                            // value={formData.description}
                            onChange={handleDescriptionChange}
                            className="appearance-none resize-none text-sm border shadow-sm rounded-xl h-36 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Description"
                            required
                        /> */}
                    </div>

                    <div className="flex  items-center gap-5">
                        <div className='w-1/2'>
                            <div className="form-control border rounded-lg shadow-sm my-6">
                                <input onChange={handleImageUpload} type="file" className="file-input outline-none focus:outline-none" />
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                value={imageurl}
                                onChange={handleChange}
                                className="appearance-none text-sm border shadow-sm rounded-xl w-full py-4 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                                placeholder="Enter image URL"
                            />
                        </div>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                            Create Blog Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
// Modules and formats for the editor
Blog_edit.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],

        ['clean']
    ],
};

Blog_edit.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
];
export default Blog_edit;