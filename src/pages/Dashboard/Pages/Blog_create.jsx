import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import UseAxioSecure from '../../../Hook/UseAxioSecure';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hook/useAxiosPublic';
const Blog_create = () => {
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


    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        category: '',
        tags: '',
        date: new Date(),
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDescriptionChange = (value) => {
        setFormData({
            ...formData,
            description: value,
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            date: date,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        // Format the date to include only month, day, and year
        const formattedDate = formData.date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        try {
            const response = await axiosSecure.post("/news/post",
                { ...formData, date: formattedDate },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Response:", response.data);

            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Blog added successfully",
            });

        } catch (error) {
            console.error("Error adding Blog:", error);

            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Failed to add Blog",
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
            <Helmet>
                <title>Create | Add Blogs</title>
            </Helmet>
            <div className="bg-blue-100 p-8 rounded-lg shadow-2xl w-full max-w-lg">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Create Blogs Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-lg font-semibold mb-2 text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-lg font-semibold mb-2 text-gray-700">Description</label>
                        <ReactQuill
                            id="description"
                            value={formData.description}
                            onChange={handleDescriptionChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            modules={Blog_create.modules}
                            formats={Blog_create.formats}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <div><h1>Upload Blog post Image</h1>
                            <div className="form-control w-full my-6">
                                <input onChange={handleImageUpload} type="file" className="file-input w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="image" className="block text-lg font-semibold mb-2 text-gray-700">Image URL</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={imageurl}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="category" className="block text-lg font-semibold mb-2 text-gray-700">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            required
                        >
                            <option value="">Select</option>
                            <option value="celebrations">Celebrations</option>
                            <option value="announcements">Announcements</option>
                            <option value="events">Events</option>
                            <option value="meetings">Meetings</option>
                            <option value="fitness">Fitness</option>
                            <option value="achievements">Achievements</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="tags" className="block text-lg font-semibold mb-2 text-gray-700">Tags</label>
                        <input
                            type="text"
                            id="tags"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="date" className="block text-lg font-semibold mb-2 text-gray-700">Date</label>
                        <DatePicker
                            selected={formData.date}
                            onChange={handleDateChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline">
                            Create Blog Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Modules and formats for the editor
Blog_create.modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
      
        ['clean']                                         
    ],
};

Blog_create.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
];

export default Blog_create;
