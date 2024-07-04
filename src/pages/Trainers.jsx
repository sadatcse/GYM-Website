import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/variants';
const Trainers = () => {
    const [data, setData] = useState([]);
    // const data = useLoaderData();
    useEffect(() => {
        axios.get("https://multigym-premium-server.vercel.app/trainer/get-all/")
            .then(data => setData(data.data));
    }, [])

    console.log("hi" + data)
    return (
        <div className="w-[90%] mx-auto my-4 md:mb-16">
                    <div className='flex flex-col items-center gap-2 mb-8'>
          <motion.h2
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='h2 text-center'
          >
           Our Trainer 
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='max-w-[600px] mx-auto text-center'
          >
            Meet the Trainer
          </motion.p>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {/* {data.map((trainer, index) => (
                    <div key={index} className="bg-gray-800 text-gray-300 rounded-lg p-6 shadow-lg">
                        <img
                            src={trainer.image_url}
                            alt={trainer.full_name}
                            className="w-full h-96 object-cover rounded-lg mb-4 hover:scale-120"
                        />
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-center">{trainer.full_name} ({trainer.short_name})</h3>
                            <p className="text-center">
                                <a href={`/trainers/${trainer.short_name}`} className="text-blue-500 hover:underline">
                                    Read more
                                </a>
                            </p>
                        </div>
                    </div>
                ))} */}
                {/* // image_url
                // full_name
                // certification */}
                {data.length == 0 &&
                    <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </>
                }

                {data &&
                    // if data available
                    <>
                        {
                            data.map((trainer, index) => (
                                <section key={index} >
                                    <div className="bg-gray-100 pt-3 text-gray-300 rounded overflow-hidden">
                                        <Link to={`/trainers/${trainer.short_name}`}>
                                            <div className='flex justify-center'>
                                                <img
                                                    src={trainer.image_url}
                                                    alt={trainer.full_name}
                                                    className="h-96 cursor-pointer object-cover rounded hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='text-center'>
                                        <p className='font-semibold text-2xl mt-2 uppercase'>{trainer.full_name}</p>
                                        <p className='font-semibold text-lg mt-1 text-gray-500'>PERSONAL COACH</p>
                                        {/* <p className=''>{trainer.certification}</p> */}
                                    </div>
                                </section>
                            ))
                        }
                    </>
                }

            </div>
        </div>
    );
};

const Skeleton = () => {
    return (
        <div className=' skeleton bg-gray-100 w-full rounded h-96 '>
        </div>
    )
}

export default Trainers;
