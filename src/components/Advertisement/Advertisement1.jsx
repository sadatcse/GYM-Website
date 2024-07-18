import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

import './JoinOurGym.css';
const JoinOurGym = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 10 seconds
    const showTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    // Hide the popup after another 10 seconds
    const hideTimeout = setTimeout(() => {
      setShowPopup(false);
    }, 20000);

    // Clean up the timeouts when the component unmounts
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-0 right-0 mb-4 ml-4 z-50">
          <div className="max-w-md text-center p-10 bg-black bg-opacity-50 backdrop-blur-lg rounded-lg shadow-2xl transform hover:scale-105 transition duration-500">
            <div className="flex items-center justify-center mb-6">
              <FaHeart className="text-6xl text-red-500" />
            </div>
            <h1 className="text-5xl font-extrabold mb-4">Join Our Gym Now</h1>
    
            <div className="flex items-center justify-center mb-6">
              <img 
                src="https://cdn.venngage.com/template/thumbnail/310/11f3bbf7-1d82-432c-826a-6edca317dec0.webp"
                alt="Gym Membership Card" 
                className="w-64 h-32 animate-spin-slow"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Sign Up Today
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinOurGym;
