import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios'; 
import UseAxioSecure from '../../../Hook/UseAxioSecure';
import Swal from 'sweetalert2';

const Blog_create = () => {

    const axiosSecure = UseAxioSecure();
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

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axiosSecure.post("/news/post",
        formData, 
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
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Create Blogs Post </h1>
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
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              rows={4}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="image" className="block text-lg font-semibold mb-2 text-gray-700">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
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

export default Blog_create;
