import React from 'react';

const MessageFromChairman = () => {
  return (
    <div style={{ backgroundColor: '#616c7d' }}>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-10 h-screen " >
      <div className="flex justify-center items-center">
        <img src='https://www.aavplc.com/storage/about-aav/message/executive-chairman.png' alt='Chairman' className='' />
      </div>
      <div className='p-10'>
        <h2 className="text-4xl font-semibold mb-4 text-custom-yellow ">Message from the Chairman</h2>
        <p className="mb-4 text-xl">
          <p className='text-3xl font-semibold mb-4  py-2'>Dear Members and Visitors,</p><br />
          Welcome to Multigym Premium! As the chairman, I am delighted to see our gym thriving and making a positive impact on so many lives. Our goal has always been to create a space where individuals can come together to improve their health, push their limits, and build a sense of community.
        </p>
        <p className="mb-4 text-xl">
          We understand that each member has unique fitness goals, and our team is dedicated to providing the support and resources needed to achieve them. From our state-of-the-art equipment to our diverse class offerings, we strive to offer the best possible fitness experience.
        </p>
        <p className="mb-4 text-xl">
          Our commitment to excellence extends beyond just fitness. We aim to foster a welcoming and inclusive environment where everyone feels valued and motivated. We are continually working to enhance our facilities and services to ensure that Multigym Premium remains your preferred fitness destination.
        </p>
        <p className="mb-4 text-xl">
          Thank you for being a part of our community. Together, we can achieve great things and lead healthier, happier lives.
        </p>
        <p className="mt-4 text-2xl">
          Warm regards,<br />
          <img className='h-16 w-32'  src='https://i.ibb.co/VYmJZsZ/6358905a49d944cee775366a9485c59a.png'></img>
          <strong>Abul Kalam Azad</strong><br />
          Chairman, Multigym Premium
        </p>
      </div>
    </div>
    </div>

  );
};

export default MessageFromChairman;
