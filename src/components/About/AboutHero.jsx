
import about from "../../assets/img/about/about.png"
import { FaPlay } from "react-icons/fa";
import { useState } from 'react';
import { GrClose } from "react-icons/gr";

function AboutHero() {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <section className="  relative z-[1] pb-40 pt-8 bg-[#f4cb71] dark:bg-transparent">
            <div className=" h-full absolute top-0 left-0 z-[-1] opacity-20" >

            </div>
            <div className="w-[90%] container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm xl:max-w-2xl lg:text-left items-center sm:items-start dark:text-white">
                    <h1 className="text-5xl font-semibold leading-tight">Welcome to Multigym Premium <span className='text-[#d4000d] dark:text-gray-400'> where  </span> your transformation
                    is our mission.
                    </h1>,  
                    <div className="max-w-md  pt-12 flex flex-col sm:flex-row items-center sm:justify-start sm:space-x-6">
                        <div className=' shadow-lg border border-b-0 animate-bounce dark:border cursor-pointer p-4 flex items-center rounded-full'>
                            <FaPlay className='text-2xl text-[#00ABE4] dark:text-white' onClick={toggleModal} />
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-4 ">
                            <div>
                                <h2 className="text-2xl font-semibold">Achieve More at Multigym Premium</h2>
                                <span className="text-sm">Join Us for a Healthier, Stronger You </span>
                            </div>
                        </div>
                    </div>

                </div>
                <img src={about} className='w-full sm:w-[500px] object-cover' width={500} height={500} alt='gym image' />
            </div>
            {showModal && (
                <div className="fixed z-50 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
                    <div className="relative max-w-3xl mx-auto">
                        <div className="relative flex items-start rounded-lg overflow-hidden">
                            {/* You can replace the iframe with the embed code for your video */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/O9xPyY8LC2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <button className="mb-4 mx-2 rounded-full p-1 bg-white text-black" onClick={toggleModal}>
                                <GrClose className='text-sm'/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default AboutHero