import { useLoaderData } from "react-router-dom";
import UseAxioSecure from "../../../Hook/UseAxioSecure";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import ImageUpload from '../../../components/Utility/ImageUploadcpanel';

const TeamEdit = () => {
    const {
        Instagram, certification, bio, email, facebook, full_name, image_url, mobile, position_title, role, short_name, _id
    } = useLoaderData();

    const axiosSecure = UseAxioSecure();
    const [imageurl, setImageUrl] = useState(image_url);
    const [previewImageUrl, setPreviewImageUrl] = useState(image_url);
    const [formData, setFormData] = useState({
        full_name,
        short_name,
        image_url,
        bio,
        certification,
        email,
        Instagram,
        facebook,
        mobile,
        role,
        position_title,
        date: new Date(),
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const id = _id;
        formData.image_url = imageurl;

        try {
            const response = await axiosSecure.put(`/trainer/put/${id}`, formData);
            if (response.data.modifiedCount > 0) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Trainer updated successfully!',
                    text: 'The trainer details have been updated.',
                });
            } else {
                await Swal.fire({
                    icon: 'success',
                    title: 'No Major Updates',
                    text: 'No major updates were made to the trainer details.',
                });
            }
        } catch (error) {
            await Swal.fire({
                icon: 'error',
                title: 'Error updating trainer',
                text: error.message,
            });
        }
    };
    
    return (
        <div className="poppins">
            <Helmet>
                <title>Edit Team Member</title>
            </Helmet>
            <div className="flex justify-between">
                <div>
                    <p className='text-2xl font-bold'>Edit Team</p>
                    <div className="breadcrumbs mt-2 text-xs text-black">
                        <ul>
                            <li className='text-gray-400'><a>Home</a></li>
                            <li className='text-gray-400'><a>Admin</a></li>
                            <li className='text-gray-400'>Team</li>
                            <li className='text-gray-500'>Edit</li>
                        </ul>
                    </div>
                </div>
                <img src={previewImageUrl} alt="Image Preview" className="w-44 h-full border mt-2" />
            </div>
            <div className="ml-4">
                <p className='font-medium text-2xl'>Details</p>
                <form onSubmit={handleSubmit}>
                    <div className="mt-5">
                        <input
                            id="full_name"
                            name="full_name"
                            type="text"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder='Full Name'
                            className="appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex gap-3 mt-5">
                        <input
                            id="short_name"
                            name="short_name"
                            placeholder='Short Name'
                            type="text"
                            value={formData.short_name}
                            onChange={handleChange}
                            className="appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        <input
                            id="certification"
                            name="certification"
                            type="text"
                            placeholder='Certification'
                            value={formData.certification}
                            onChange={handleChange}
                            className="appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="flex gap-3 mt-5">
                        <input
                            id="facebook"
                            name="facebook"
                            type="text"
                            placeholder='Facebook'
                            value={formData.facebook}
                            onChange={handleChange}
                            className="appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <input
                            id="Instagram"
                            name="Instagram"
                            type="text"
                            placeholder='Instagram'
                            value={formData.Instagram}
                            onChange={handleChange}
                            className="appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex gap-3 mt-5">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            className="appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        <input
                            id="mobile"
                            name="mobile"
                            type="text"
                            placeholder='Mobile No'
                            value={formData.mobile}
                            onChange={handleChange}
                            className="appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex gap-3 mt-5">
                        <input
                            id="position_title"
                            name="position_title"
                            type="text"
                            placeholder='Position Title'
                            value={formData.position_title}
                            onChange={handleChange}
                            className="appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="appearance-none text-gray-400 text-sm border shadow-sm rounded-xl w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
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

                    <div className="flex items-center gap-5">
                        <div className='w-1/2'>
                            <ImageUpload setImageUrl={setImageUrl} setPreviewImageUrl={setPreviewImageUrl} />
                        </div>
                        <div className='w-1/2'>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                value={imageurl}
                                onChange={handleChange}
                                className="appearance-none text-sm border shadow-sm rounded-xl w-full py-4 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                placeholder="Enter Image URL"
                            />
                        </div>
                    </div>

                    <div className='mt-3'>
                        <textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            placeholder='Bio'
                            className="appearance-none text-gray-700 text-sm border shadow-sm h-36 rounded-xl w-full py-4 px-3 resize-none leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end mt-5">
                        <button
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeamEdit;
