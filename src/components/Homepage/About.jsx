import { FaUser, FaDumbbell, FaHeartbeat, FaUsers, FaSun } from 'react-icons/fa';
import { IoIosPricetags, IoIosNutrition } from 'react-icons/io';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import Achievements from './Achievements';
import Title from './Title';

const featured = [
  {
    icon: FaDumbbell,
    title: 'FREE WEIGHTS',
    subtitle: 'Discover the ultimate freedom in your fitness routine with our state-of-the-art Free Weights. Elevate your workout experience and sculpt your physique with a diverse range of premium weights, all available to enhance your training sessions.',
  },
  {
    icon: IoIosNutrition,
    title: 'NUTRITION SERVICES',
    subtitle: 'Achieve your goals with our coaches who provide personalized programming and in-person sessions tailored to your specific needs. Benefit from targeted training that is designed to help you reach your desired outcomes.',
  },
  {
    icon: FaHeartbeat,
    title: 'CARDIO',
    subtitle: 'Experience the heart-pounding energy of our cutting-edge cardio machines that take your fitness journey to new heights. From treadmills that ignite your run to ellipticals that elevate your endurance, our gym offers a dynamic range of cardio equipment to keep you motivated and moving.',
  },
  {
    icon: FaUsers,
    title: 'GROUP CLASSES',
    subtitle: 'Get ready to move and groove in our exciting dance class, where rhythm meets fitness for an exhilarating workout experience. Join our passionate instructors and fellow enthusiasts as you learn vibrant dance routines, boosting your energy and confidence on the dance floor and beyond.',
  },
  {
    icon: FaSun,
    title: 'TANNING',
    subtitle: 'Elevate your glow at our gym with our premium tanning services. Achieve that sun-kissed look while maintaining your fitness routine, all conveniently under one roof.',
  },
  {
    icon: FaUser,
    title: 'PERSONAL TRAINING',
    subtitle: 'Achieve your goals with our coaches who provide personalized programming and in-person sessions tailored to your specific needs. Benefit from targeted training that is designed to help you reach your desired goals.',
  },
];

const About = () => {
  return (
    <section className='pt-8 pb-14 lg:pt-16 lg:pb-28' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-2 mb-8'>
        <Title title="WHY CHOOSE US" subtitle="BUILD YOUR BEST BODY" />
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'
        >
          {featured.map((feature, index) => {
            return (
              <div
                className='flex flex-col justify-center items-center gap-4 border p-10 hover:bg-[#f4cb71] rounded-md  hover: hover:scale-110 transition-all duration-300 dark:text-white dark:hover:text-neutral'
                key={index}
              >
                <div className='text-4xl bg-primary-300 text-custom-yellow w-[80px] h-[80px] rounded-full flex justify-center items-center group-hover:rotate-180 transition-all  duration-300 text-3xl'>
                  <feature.icon />
                </div>
                <div className='flex flex-col justify-center items-center gap-2 text-center'>
                  <h4 className='h4 text-accent'>{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn('up', 1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
