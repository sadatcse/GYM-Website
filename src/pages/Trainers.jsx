import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
const Trainers = () => {
    const [data, setData] = useState([]);
    // const data = useLoaderData();
    useEffect(() => {
        axios.get("https://multigym-premium-server.vercel.app/trainer/get-all")
            .then(data => setData(data.data));
    }, [])

    console.log("hi" + data)
    return (
        <div className="screen mt-4">
            <h2 className="text-3xl font-bold text-center mb-6">Meet the Trainers</h2>
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
                                        <img
                                            src={trainer.image_url}
                                            alt={trainer.full_name}
                                            className="w-full h-96 cursor-pointer object-cover rounded hover:scale-105 transition-transform duration-300"
                                        />
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
