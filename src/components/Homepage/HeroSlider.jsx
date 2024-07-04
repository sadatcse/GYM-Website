// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import bg from "./../../assets/img/hero/bg.png"
import bg1 from "./../../assets/img/hero/bg2.png"
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// components
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';

import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  return (
    <Swiper className='h-full'>
      <SwiperSlide>
        <div className='h-full flex justify-end pt-48 relative'>
          <img
            src={bg1}
            alt='Slide 1'
            className='absolute inset-0 w-full h-full object-cover z-0'
          />
          <div className='flex flex-col items-center lg:items-start lg:max-w-[700px] relative z-10'>
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className='h1 text-center lg:text-left mb-2'
            >
              <p className='text-accent text-3xl md:text-5xl lg:text-7xl '>Where hard</p> <p className=' text-custom-yellow text-3xl md:text-5xl lg:text-7xl'>work meets success</p> 
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className='text-custom-yellow italic text-center lg:text-left mb-4'
            >
              Hard work meets success: the junction of effort and achievement.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
            >
             <Link to="/under"> <CustomButton
                text='Get started'
                containerStyles='w-[196px] h-[62px]'
              /></Link>
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='h-full flex justify-end pt-48 relative'>
          <img
            src={bg}
            alt='Slide 2'
            className='absolute inset-0 w-full h-full object-cover z-0'
          />
          <div className='flex flex-col items-center lg:items-start lg:max-w-[700px] relative z-10'>
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className='h1 text-center lg:text-left mb-2'
            >

              <p className='text-accent text-3xl  md:text-5xl lg:text-8xl '>Striving Towards</p> <p className=' text-custom-yellow text-3xl  md:text-5xl lg:text-8xl'>Fulfillment Achievement</p> 
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className='text-custom-yellow italic text-center lg:text-left mb-4'
            >
              Where Persistence and Determination Forge Pathways to Success.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
            >
               <Link to="/under"><CustomButton
                text='Get started'
                containerStyles='w-[196px] h-[62px]'
              /></Link>
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      {/* swiper nav buttons */}
      <SwiperNavButtons
        containerStyles='absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1'
        btnStyles='border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300'
        iconStyles='text-2xl'
      />
    </Swiper>
  );
};

export default HeroSlider;
