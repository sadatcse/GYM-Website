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

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('https://multigym-premium-server.vercel.app/news/get-all/');
        setBlogData(response.data); 
      } catch (error) {
        console.error('Error fetching blog data:', error);
    
      }
    };

    fetchBlogData();
  }, []);

  return (
    <section className='bg-primary-300 text-white py-24' id='blog'>
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
            className='h-[420px] md:max-w-[660px] lg:max-w-none mb-8'
          >
            {blogData.map((post, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col justify-start h-full max-w-[320px] mx-auto'>
                  <img src={post.image}  alt='' className='mb-6 h-64 w-84' />
                  <div className='flex flex-col items-start'>
                    <p className='max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1'>
                      {post.createdDate}
                    </p>
                    <Link
                      className='hover:text-accent transition-all duration-300'
                      to={`/blog/${post._id}`}
                    >
                      <h5 className='h5'>{post.title}</h5>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons
              containerStyles='absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1'
              btnStyles='bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300'
              iconStyles='text-2xl'
            />
          </Swiper>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
         <Link to="/blog"><CustomButton containerStyles='block w-[196px] h-[62px] mx-auto' text='View all' /></Link> 
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
