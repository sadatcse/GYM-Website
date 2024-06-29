import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFacebook, FaInstagram, FaMobileAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import { Link } from 'react-router-dom';
import Title from './Title';
import CustomButton from './CustomButton';

const Team = () => {
  const [trainerData, setTrainerData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        // Check if data is already cached (localStorage or sessionStorage)
        const cachedData = JSON.parse(localStorage.getItem('trainerData'));
        if (cachedData) {
          setTrainerData(cachedData);
          setLoading(false);
          return;
        }

        // Fetch data if not cached or cache expired
        const response = await axios.get('https://multigym-premium-server.vercel.app/trainer/get-all');
        const newData = response.data;

        // Store fetched data in localStorage (or sessionStorage for session-based caching)
        localStorage.setItem('trainerData', JSON.stringify(newData));

        setTrainerData(newData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trainers:', error);
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  const sliceText = (text, count) => {
    const words = text.split(' ');
    if (words.length > count) {
      return words.slice(0, count).join(' ') + '...';
    }
    return text;
  };

  const shuffledData = trainerData.sort(() => 0.5 - Math.random());
  const selectedTrainers = shuffledData.slice(0, 4);


  return (
    <section className='screen py-12 xl:h-[110vh]' id='team'>
      <div className='container mx-auto h-full flex flex-col items-center justify-center'>
      
      <Title title="TEAM MEMBERS" subtitle="TEAM OF EXPERT COACHES" />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* trainers grid */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className='w-full grid gap-14 md:gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
            >
              {selectedTrainers.map((trainer) => (
                <div className='flex flex-col items-center text-center' key={trainer._id}>
                  {/* image */}
                  <div className='relative mx-auto '>
                    <img src={trainer.image_url} alt={trainer.full_name} className='rounded-lg bg-gray-50 w-full border ' />
                  </div>
                  {/* name */}
                  <h4 className='h4 mt-1 mb-2'>{trainer.full_name}</h4>
                  {/* role */}
                  <p className='uppercase text-xs tracking-[3px] mb-2'>Fitness Trainer</p>
                  {/* bio */}
                  {/* certifications */}
                  <p className='mb-5 px-3 mx-auto text-base'>{trainer.certification}</p>
                  {/* socials */}
                  <div className='flex justify-center gap-5'>
                    {trainer.Instagram && (
                      <div>
                        <Link to={trainer.Instagram} target='_blank' className='hover:text-accent transition-all'>
                          <FaInstagram className='text-2xl' />
                        </Link>
                      </div>
                    )}
                    {trainer.facebook && (
                      <div>
                        <Link to={trainer.facebook} target='_blank' className='hover:text-accent transition-all'>
                          <FaFacebook className='text-2xl' />
                        </Link>
                      </div>
                    )}
                    {trainer.mobile && (
                      <div>
                        <a href={`tel:${trainer.mobile}`} className='hover:text-accent transition-all'>
                          <FaMobileAlt className='text-2xl' />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
            {/* btn */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Link to="/trainers" ><CustomButton containerStyles='btn mt-9' text='See all trainers' /></Link>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Team;