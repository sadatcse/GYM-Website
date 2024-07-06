import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from './../../../Hook/useAxiosPublic';

const Team_list = () => {
    const axiosSecure = useAxiosPublic();
    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [count, setCount] = useState(0);
    const [selectedPost, setSelectedPost] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosSecure.get('/trainer/get-all');
                setUsersData(res.data);
                setCount(res.data.length);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [axiosSecure]);

    const updateUserData = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return usersData.slice(startIndex, endIndex);
    };

    const handleEdit = (post) => {
        console.log('Editing post:', post);
        // Add your edit logic here
    };

    const handleDelete = async (postId) => {
        try {
            await axiosSecure.delete(`/trainer/delete/${postId}`);
            const res = await axiosSecure.get('/trainer/get-all');
            setUsersData(res.data);
            setCount(res.data.length);
        } catch (error) {
            console.error('Error deleting trainer:', error);
            setIsError(true); // Optionally set an error state to display an error message
        }
    };

    const handleView = (post) => {
        console.log('Viewing post:', post);
    };

    const numberOfPages = Math.ceil(count / itemsPerPage);

    return (
        <div>
            <Helmet>
                <title>Admin | Trainer Lists</title>
            </Helmet>
            <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-4xl font-bold text-white">Total Trainers</h2>
                        <h2 className="text-4xl font-bold text-white">Total Trainers: {usersData.length}</h2>
                    </div>
                    <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Full Name</th>
                                    <th className="px-4 py-2">Certification</th>
                                    <th className="px-4 py-2">Role</th>
                                    <th className="px-4 py-2">Edit</th>
                                    <th className="px-4 py-2">Delete</th>
                                    <th className="px-4 py-2">View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {updateUserData().map((trainer, index) => (
                                    <tr key={trainer._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                                        <td className="border px-4 py-2 text-center">{index + 1}</td>
                                        <td className="border px-4 py-2">{trainer.full_name}</td>
                                        <td className="border px-4 py-2">{trainer.certification}</td>
                                        <td className="border px-4 py-2">{trainer.role}</td>
                                        <td className="border px-4 py-2 text-center">
                                            <button
                                                onClick={() => handleEdit(trainer)}
                                                className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            <button
                                                onClick={() => handleDelete(trainer._id)}
                                                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                                            >
                                                Delete
                                                <FaTrashAlt className="ml-1" />
                                            </button>
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            <button
                                                onClick={() => handleView(trainer)}
                                                className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600"
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                
                    {count >= itemsPerPage && (
                        <div className="pagination flex items-center justify-center mt-6 space-x-4">
                            <p className="text-white">Current Page: {currentPage + 1}</p>
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                className={`px-4 py-2 rounded ${currentPage === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                                disabled={currentPage === 0}
                            >
                                Prev
                            </button>
                            {[...Array(numberOfPages)].map((_, index) => (
                                <button
                                    onClick={() => setCurrentPage(index)}
                                    key={index}
                                    className={`px-4 py-2 rounded ${currentPage === index ? 'bg-yellow-500' : 'bg-gray-300 hover:bg-gray-400'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className={`px-4 py-2 rounded ${currentPage === numberOfPages - 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                                disabled={currentPage === numberOfPages - 1}
                            >
                                Next
                            </button>
                            <select
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value));
                                    setCurrentPage(0);
                                }}
                                className="px-4 py-2 border border-gray-300 rounded"
                            >
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Team_list;
