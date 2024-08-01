import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ImageUpload = ({ setImageUrl }) => {
    const handleImageUpload = async (e) => {
        const imageFile = e.target.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);
        
        try {
            const response = await axios.post('https://image.multigympremium.com/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            const data = response.data;
    
            if (response.status === 200) {
                setImageUrl(data.path);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Image uploaded successfully',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: data.message || 'Failed to upload image',
                });
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to upload image',
            });
        }
    };

    return (
        <div className="form-control border rounded-lg shadow-sm my-6">
            <input onChange={handleImageUpload} type="file" className="file-input outline-none focus:outline-none" />
        </div>
    );
};

export default ImageUpload;
