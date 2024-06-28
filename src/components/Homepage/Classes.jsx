import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import CustomButton from './CustomButton';

import Image1 from "../../assets/img/classes/1.jpg"
import Image2 from "../../assets/img/classes/2.jpg"
import Image3 from "../../assets/img/classes/3.jpg"
import Image4 from "../../assets/img/classes/4.jpg"

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
    <section id='class' className='screen'>
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='grid gap-1 grid-cols-1 lg:grid-cols-2'
      >
        {classes.map((item, index) => {
          return (
            // single card
            <div
              className='relative'
              key={index}
            >
              <div className='relative'>
                {/* overlay */}
                <div className='bg-black/50 w-full h-full  absolute top-0 z-10'></div>
                <img src={item.img} fill className='object-cover' alt=''></img>
              </div>
              {/* text & btn */}
              <div className='text-center flex flex-col gap-3 absolute z-50 top-24  md:px-11'>
                <motion.h3
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className='h3 text-accent'
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn('up', 0.6)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className='text-white'
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn('up', 0.8)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CustomButton
                    containerStyles='btn border-none hover:bg-transparent'
                    text='Read more'
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Classes;
