
import React from 'react';

const Blog_list = () => {
    return (
        <div>
            
        </div>
    );
};

export default Blog_list;

// import React, { useState } from 'react';
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hook/UseAxioSecure";
// import { FaRemoveFormat, FaTrashAlt } from 'react-icons/fa';
// import Swal from "sweetalert2";
// import toast from 'react-hot-toast';
// import { Helmet } from 'react-helmet-async';

// const Blog_list = () => {
//     const axiosSecure = useAxiosSecure();
//     const [count, setCount] = useState(0);

//     const { data: usersData = [], isLoading, isError, refetch } = useQuery({
//         queryKey: ['users'],
//         queryFn: async () => {
//             try {
//                 const res = await axiosSecure.get('/user/get-all');
//                 setCount(res.data.length); 
//                 return res.data;
//             } catch (error) {
//                 throw new Error(error)
//             }
//         },
//     });
    
//     const users = Array.isArray(usersData) ? usersData : [];

//     const [selectedUser, setSelectedUser] = useState(null);
//     const [itemsPerPage, setItemsPerPage] = useState(5);
//     const [currentPage, setCurrentPage] = useState(0);
    
//     const numberOfPages = Math.ceil(count / itemsPerPage);

//     const handleMakeAdmin = (user) => {
//         setSelectedUser(user);
//     };

//     const confirmRoleChange = async (selectedRole) => {
//         if (selectedUser) {
//             try {
//                 await axiosSecure.patch(`/user/patch/${selectedRole}/${selectedUser._id}`);
//                 setSelectedUser(null);
//                 refetch();
//                 toast.success("User update successful");
//             } catch (error) {
//                 toast.error("Failed to update user");
//             }
//         }
//     };

//     const handleDeleteUser = async (user) => {
//         try {
//             const result = await Swal.fire({
//                 title: "Are you sure?",
//                 text: "You won't be able to revert this!",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Yes, delete it!"
//             });

//             if (result.isConfirmed) {
//                 const res = await axiosSecure.delete(`/user/delete/${user._id}`);
//                 if (res.data.deletedCount > 0) {
//                     refetch();
//                     await Swal.fire({
//                         title: "Deleted!",
//                         text: "The user has been deleted.",
//                         icon: "success"
//                     });
//                 }
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleBlockUser = async (user) => {
//         try {
//             const result = await Swal.fire({
//                 title: "Are you sure?",
//                 text: "You won't be able to revert this!",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Yes, block it!"
//             });

//             if (result.isConfirmed) {
//                 const res = 1;
//                 if (res > 0) {
//                     await Swal.fire({
//                         title: "Blocked!",
//                         text: "The user has been blocked.",
//                         icon: "success"
//                     });
//                 }
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const updateUserData = () => {
//         const startIndex = currentPage * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         return users.slice(startIndex, endIndex);
//     };

//     return (
//         <div>
//             <Helmet>
//         <title>Admin | Manage User</title>
//       </Helmet> 
//         <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
//             <div className="container mx-auto">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-4xl font-bold text-white">All Users</h2>
//                     <h2 className="text-4xl font-bold text-white">Total Users: {users.length}</h2>
//                 </div>
//                 <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
//                     <table className="min-w-full table-auto">
//                         <thead>
//                             <tr className="bg-gray-800 text-white">
//                                 <th className="px-4 py-2">#</th>
//                                 <th className="px-4 py-2">Name</th>
//                                 <th className="px-4 py-2">Email</th>
//                                 <th className="px-4 py-2">Role</th>
//                                 <th className="px-4 py-2">Action</th>
//                                 <th className="px-4 py-2">Block</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {updateUserData().map((user, index) => (
//                                 <tr key={user._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
//                                     <td className="border px-4 py-2 text-center">{index + 1}</td>
//                                     <td className="border px-4 py-2">{user.name}</td>
//                                     <td className="border px-4 py-2">{user.email}</td>
//                                     <td className="border px-4 py-2 text-center">
//                                         {user.role === 'admin' ? (
//                                             <button
//                                                 onClick={() => handleMakeAdmin(user)}
//                                                 className="bg-red-500 text-white py-1 px-3 rounded-lg"
//                                             >
//                                                 Admin
//                                             </button>
//                                         ) : user.role === 'creator' ? (
//                                             <button
//                                                 onClick={() => handleMakeAdmin(user)}
//                                                 className="bg-orange-500 text-white py-1 px-3 rounded-lg"
//                                             >
//                                                 Creator
//                                             </button>
//                                         ) : (
//                                             <button
//                                                 onClick={() => handleMakeAdmin(user)}
//                                                 className="bg-blue-500 text-white py-1 px-3 rounded-lg"
//                                             >
//                                                 Regular User
//                                             </button>
//                                         )}
//                                     </td>
//                                     <td className="border px-4 py-2 text-center">
//                                         <button
//                                             onClick={() => handleDeleteUser(user)}
//                                             className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
//                                         >
//                                             <FaTrashAlt />
//                                         </button>
//                                     </td>
//                                     <td className="border px-4 py-2 text-center">
//                                         <button
//                                             onClick={() => handleBlockUser(user)}
//                                             className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600"
//                                         >
//                                             <FaRemoveFormat />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 {/* Modal for role selection */}
//                 {selectedUser && (
//                     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                         <div className="bg-white p-6 rounded-md shadow-lg">
//                             <h2 className="text-xl font-semibold mb-4">Select Role for {selectedUser.name}</h2>
//                             <div className="flex justify-between">
//                                 <button
//                                     onClick={() => confirmRoleChange('admin')}
//                                     className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-red-600"
//                                 >
//                                     Admin
//                                 </button>
//                                 <button
//                                     onClick={() => confirmRoleChange('creator')}
//                                     className="bg-orange-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-orange-600"
//                                 >
//                                     Creator
//                                 </button>
//                                 <button
//                                     onClick={() => confirmRoleChange('user')}
//                                     className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//                                 >
//                                     Regular User
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {count >= 5 && (
//                     <div className="pagination flex items-center justify-center mt-6 space-x-4">
//                         <p className="text-white">Current Page: {currentPage + 1}</p>
//                         <button
//                             onClick={() => setCurrentPage(currentPage - 1)}
//                             className={`px-4 py-2 rounded ${currentPage === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
//                             disabled={currentPage === 0}
//                         >
//                             Prev
//                         </button>
//                         {[...Array(numberOfPages)].map((_, index) => (
//                             <button
//                                 onClick={() => setCurrentPage(index)}
//                                 key={index}
//                                 className={`px-4 py-2 rounded ${currentPage === index ? 'bg-yellow-500' : 'bg-gray-300 hover:bg-gray-400'}`}
//                             >
//                                 {index + 1}
//                             </button>
//                         ))}
//                         <button
//                             onClick={() => setCurrentPage(currentPage + 1)}
//                             className={`px-4 py-2 rounded ${currentPage === numberOfPages - 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
//                             disabled={currentPage === numberOfPages - 1}
//                         >
//                             Next
//                         </button>
//                         <select
//                             value={itemsPerPage}
//                             onChange={(e) => {
//                                 setItemsPerPage(Number(e.target.value));
//                                 setCurrentPage(0);
//                             }}
//                             className="px-4 py-2 border border-gray-300 rounded"
//                         >
//                             <option value="5">5</option>
//                             <option value="10">10</option>
//                             <option value="15">15</option>
//                             <option value="20">20</option>
//                             <option value="25">25</option>
//                         </select>
//                     </div>
//                 )}
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Blog_list;

