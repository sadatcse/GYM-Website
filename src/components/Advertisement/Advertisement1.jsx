import React, { useState, useEffect } from 'react';
import membershipCardFront from './../../assets/card/1.png';
import membershipCardBack from './../../assets/card/2.png';
import './JoinOurGym.css';

const JoinOurGym = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showFront, setShowFront] = useState(true);

  useEffect(() => {
    // Show the popup after 10 seconds
    const showTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    // Hide the popup after 200 seconds
    const hideTimeout = setTimeout(() => {
      setShowPopup(false);
    }, 200000);

    // Toggle the images every 3 seconds
    const animationDuration = 2500; 
    const imageToggleInterval = setInterval(() => {
      setShowFront((prev) => !prev);
    }, animationDuration);

    // Clean up the timeouts and intervals when the component unmounts
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearInterval(imageToggleInterval);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-0 right-0 mb-8 ml-4 z-50 mx-5">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={showFront ? membershipCardFront : membershipCardBack}
              alt="Gym Membership Card" 
              className="sm:w-20 h-16 mb-5 md:w-32 md:h-32 lg:w-64 lg:h-40 animate-spin-slow"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default JoinOurGym;
