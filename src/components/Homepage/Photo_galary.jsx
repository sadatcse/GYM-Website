

import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import Title from './Title';
import AOS from 'aos';

const animations = [
    'fade',
    'fade-up',
    'fade-down',
    'fade-left',
    'fade-right',
    'fade-up-right',
    'fade-up-left',
    'fade-down-right',
    'fade-down-left',
    'flip-up',
    'flip-down',
    'flip-left',
    'flip-right',
    'slide-up',
    'slide-down',
    'slide-left',
    'slide-right',
    'zoom-in',
    'zoom-in-up',
    'zoom-in-down',
    'zoom-in-left',
    'zoom-in-right',
    'zoom-out',
    'zoom-out-up',
    'zoom-out-down',
    'zoom-out-left',
    'zoom-out-right'
  ];
  
  const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  };


const images = [
    'https://www.castlehillfitness.com/wp-content/uploads/photo-gallery/imported_from_media_libray/2-Main-Gym.jpg',
    'https://www.castlehillfitness.com/wp-content/uploads/photo-gallery/imported_from_media_libray/3-Main-Cardio.jpg',
    'https://www.castlehillfitness.com/wp-content/uploads/photo-gallery/imported_from_media_libray/4-The-Arena.jpg',
    'https://www.castlehillfitness.com/wp-content/uploads/photo-gallery/imported_from_media_libray/5-Free-Weights-Dumbbells.jpg',
    'https://www.castlehillfitness.com/wp-content/uploads/photo-gallery/imported_from_media_libray/6-Stretch-Room.jpg',
    'https://www.castlehillfitness.com/wp-content/uploads/photo-gallery/imported_from_media_libray/7-Chakras-Yoga-Studio.jpg',
    'https://www.castlehillfitness.com/wp-content/uploads/photo-gallery/imported_from_media_libray/8-Multisport-Room.jpg',
    'https://www.castlehillfitness.com/wp-content/uploads/photo-gallery/imported_from_media_libray/9-Pilates-Equipment-Studio.jpg',
    'https://www.castlehillfitness.com/wp-content/uploads/photo-gallery/imported_from_media_libray/10-Lotus-Room.jpg',
    'https://www.castlehillfitness.com/wp-content/uploads/photo-gallery/imported_from_media_libray/11-Upstairs-Cardio.jpg'
];

const Photo_galary = () => {
    useEffect(() => {
        AOS.init(); 
    }, []);
    const [currentImage, setCurrentImage] = useState(null);
    const randomAnimation = getRandomAnimation();

    const openModal = (index) => {
        setCurrentImage(index);
    };

    const closeModal = () => {
        setCurrentImage(null);
    };

    const nextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="mt-10 pt-5 p-4 container mx-auto">
<Title title="PHOTO GALLERY" subtitle="Watch Real Gym Pictures" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {images.map((src, index) => (
                    <img data-aos={randomAnimation} data-aos-offset={index*100} data-aos-easing={randomAnimation}  data-aos-duration={index*500}
                        key={index}
                        src={src}
                        alt={`Gallery Image ${index + 1}`}
                        className="cursor-pointer rounded-lg"
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            {currentImage !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative">
                        <img src={images[currentImage]} alt={`Gallery Image ${currentImage + 1}`} className="max-h-screen max-w-full rounded-lg" />
                        <button
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 rounded-full p-2"
                            onClick={prevImage}
                        >
                            &#8592;
                        </button>
                        <button
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 rounded-full p-2"
                            onClick={nextImage}
                        >
                            &#8594;
                        </button>
                        <button
                            className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full p-2"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Photo_galary;