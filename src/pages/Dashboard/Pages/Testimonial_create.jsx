import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-quill/dist/quill.snow.css';
import UseAxioSecure from '../../../Hook/UseAxioSecure';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hook/useAxiosPublic';
const Testimonial_create = () => {
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
        name: '',
        comment: '',
        image: '',
        date: new Date(),
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCommentChange = (value) => {
        setFormData({
            ...formData,
            comment: value,
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
            const response = await axiosSecure.post("/testimonial/post",
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
                text: "Testimonial added successfully",
            });

            // Optionally, reset form fields after successful submission
            setFormData({
                title: '',
                name: '',
                comment: '',
                image: '',
                date: new Date(),
            });

        } catch (error) {
            console.error("Error adding Testimonial:", error);

            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Failed to add Testimonial",
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
            <Helmet>
                <title>Create | Add Testimonial</title>
            </Helmet>
            <div className="bg-blue-100 p-8 rounded-lg shadow-2xl w-full max-w-lg">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Create Testimonial</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Testimonial Person Position Eg .Manager</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter title"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Testimonial Person Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">Testimonial Person Comment</label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={formData.comment}
                            onChange={(e) => handleCommentChange(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                            placeholder="Enter testimonial comment"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <div><h1>Upload Testimonial User Image</h1>
                            <div className="form-control w-full my-6">
                                <input onChange={handleImageUpload} type="file" className="file-input w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Testimonial Person Image URL</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={imageurl}
                            onChange={handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter image URL"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Create Testimonial
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Testimonial_create;
