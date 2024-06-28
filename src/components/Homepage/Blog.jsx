import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fadeIn } from '../../../lib/variants';
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const localData = "../../../public/news.json";
  const api = 'https://multigym-premium-server.vercel.app/news/get-all/'
  console.log(blogData)
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          localData
        );
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <section className='bg-primary-300 text-white py-24' id='blog'>
      <div className='screen'>
        <div className='container mx-auto'>
          <motion.h2
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='h2 text-center mb-8'
          >
            Blogs
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3 },
                1400: { slidesPerView: 4 },
              }}
              className='h-[420px] md:max-w-[660px] flex justify-between relative lg:max-w-none mb-3 '
            >
              {blogData.map((post, index) => (
                <SwiperSlide key={index}>
                  <div className='flex flex-col justify-start h-full w-full mx-auto '>
                    <img src={post.cover} alt='' className='rounded-t h-48 object-cover w-full hover:opacity-95' />
                    <div className='flex flex-col items-start bg-gray-700 p-5 rounded-b'>
                      <p className='max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1'>
                        {post.date}
                      </p>
                      <Link
                        className='hover:text-accent transition-all duration-300'
                        to={post.href}
                      >
                        <p className=''>{post.title}</p>
                      </Link>
                      <p className='text-xs  font-normal mt-3'>{post.tags[0]} | {post.tags[1]} | {post.tags[2]}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className='flex'>
                <SwiperNavButtons
                  containerStyles='absolute bottom-[50%] w-full mx-auto z-50 flex justify-between gap-1'
                  btnStyles='bg-accent rounded-full text-white p-3 hover:bg-black flex justify-center items-center hover:bg-accent transition-all duration-300'
                  iconStyles='text-xl'
                />
              </div>
            </Swiper>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
          >
            <CustomButton containerStyles='btn block border-none mx-auto' text='View all' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
