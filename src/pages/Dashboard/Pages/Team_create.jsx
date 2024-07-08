import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import UseAxioSecure from '../../../Hook/UseAxioSecure';
import useAxiosPublic from '../../../Hook/useAxiosPublic';
import Swal from 'sweetalert2';

const Team_create = () => {
    const axiosSecure = UseAxioSecure();
    const axiosPublic = useAxiosPublic();
    const [imageurl, setimageurl] = useState('');
    const [formData, setFormData] = useState({
        full_name: '',
        short_name: '',
        image_url: '',
        bio: '',
        certification: '',
        email: '',
        Instagram: '',
        facebook: '',
        mobile: '',
        role: '',
        position_title: '',
        date: new Date(),
    });

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
                image_url: res.data.data.url
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
            const response = await axiosSecure.post("/trainer/post",
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
                text: "Team member added successfully",
            });

        } catch (error) {
            console.error("Error adding team member:", error);

            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Failed to add team member",
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
            <Helmet>
                <title>Create | Add Team Member</title>
            </Helmet>
            <div className="bg-blue-100 p-8 rounded-lg shadow-2xl w-full max-w-lg">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Create Team Member</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full_name">
                            Full Name
                        </label>
                        <input
                            id="full_name"
                            name="full_name"
                            type="text"
                            value={formData.full_name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="short_name">
                            Short Name
                        </label>
                        <input
                            id="short_name"
                            name="short_name"
                            type="text"
                            value={formData.short_name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <div><h1>Upload Team Member Profile Image</h1>
                            <div className="form-control w-full my-6">
                                <input onChange={handleImageUpload} type="file" className="file-input w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p>Full Image Url</p>
                        <input onChange={handleChange} className="mb-2 relative border w-full py-2 px-4"
                            value={imageurl}
                            type="text" name="image_url"
                            placeholder="image_url"
                            id="image_url"
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                            Bio
                        </label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="certification">
                            Certification
                        </label>
                        <input
                            id="certification"
                            name="certification"
                            type="text"
                            value={formData.certification}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Instagram">
                            Instagram
                        </label>
                        <input
                            id="Instagram"
                            name="Instagram"
                            type="text"
                            value={formData.Instagram}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="facebook">
                            Facebook
                        </label>
                        <input
                            id="facebook"
                            name="facebook"
                            type="text"
                            value={formData.facebook}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                            Mobile
                        </label>
                        <input
                            id="mobile"
                            name="mobile"
                            type="text"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        >
                            <option value="" disabled>Select Role</option>
                            <option value="Group Fitness Instructor">Group Fitness Instructor</option>
                            <option value="Personal Trainer">Personal Trainer</option>
                            <option value="Nutritionist">Nutritionist</option>
                            <option value="Front Desk Receptionist">Front Desk Receptionist</option>
                            <option value="Maintenance Staff">Maintenance Staff</option>
                            <option value="Sales Representative">Sales Representative</option>
                            <option value="Cleaning Staff">Cleaning Staff</option>
                            <option value="Security Personnel">Security Personnel</option>
                            <option value="Marketing Specialist">Marketing Specialist</option>
                            <option value="Office Staff">Office Staff</option>
                            <option value="Manager">Manager</option>
                            <option value="Trainer">Trainer</option>
                            <option value="Spotter">Spotter</option>
                            <option value="Assistant Trainer">Assistant Trainer</option>
                            <option value="Customer Service Representative">Customer Service Representative</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position_title">
                            Position Title
                        </label>
                        <input
                            id="position_title"
                            name="position_title"
                            type="text"
                            value={formData.position_title}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Team_create;
