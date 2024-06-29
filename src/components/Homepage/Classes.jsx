import React from 'react';
import CustomButton from './CustomButton';
import Image1 from '../../assets/img/classes/1.jpg';
import Image2 from '../../assets/img/classes/2.jpg';
import Image3 from '../../assets/img/classes/3.jpg';
import Image4 from '../../assets/img/classes/4.jpg';

const classes = [
  {
    name: 'body building',
    img: Image1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium suscipit incidunt sit.',
  },
  {
    name: 'cardio',
    img: Image2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium suscipit incidunt sit.',
  },
  {
    name: 'fitness',
    img: Image3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium suscipit incidunt sit.',
  },
  {
    name: 'crossfit',
    img: Image4,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium suscipit incidunt sit.',
  },
];

const Classes = () => {
  return (
      <div className='grid gap-1 grid-cols-1 lg:grid-cols-2'>
        {classes.map((item, index) => (
          <div key={index} className='relative'>
            <img src={item.img} alt={item.name} className='w-full h-auto' />
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4'>
              <h3 className='text-xl md:text-3xl text-accent'>{item.name}</h3>
              <p className='text-white text-sm md:text-base'>{item.description}</p>
              <CustomButton
                containerStyles='btn text-sm md:text-base border-none hover:bg-transparent mt-2'
                text='Read more'
              />
            </div>
          </div>
        ))}
      </div>
  
  );
};

export default Classes;
