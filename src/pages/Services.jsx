import React from 'react';
import { FaChild, FaDumbbell, FaRunning, FaUsers, FaUser, FaParking, FaCoffee, FaAppleAlt, FaLock } from 'react-icons/fa';

const servicesData = [
    {
        "title": "Large Free Weight Center",
        "description": "Unlock your inner strength in our state-of-the-art free weight center! Work with our staff to find the right program to power your results.",
        "icon": <FaDumbbell />,
        "image": "https://i.ibb.co/Sr5psxK/DSC01496.jpg"
    },
    {
        "title": "Huge Cardio Center",
        "description": "Are you all about your daily treadmill sprints or looking to wind down on an elliptical? Whatever your favorite machine is, we are here to help you get moving with the best cardio equipment.",
        "icon": <FaRunning />,
        "image": "https://i.ibb.co/K0s9C4P/DSC01350.jpg"
    },
    {
        "title": "Group Exercise Classes",
        "description": "As part of our commitment to being the best FIT for your family, Multigym premium offers a variety of classes at our fitness clubs. Our group fitness classes are fun, cutting-edge, and driven by community.",
        "icon": <FaUsers />,
        "video": "https://www.youtube.com/embed/oQ_KqkxyVyE"
    },
    {
        "title": "Personal Training",
        "description": "Meet your goals with private personal training and Ignite group fitness. Our passionate and skilled personal trainers will customize a fitness program based on your needs.",
        "icon": <FaUser />,
        "image": "https://www.texasfamilyfitness.com/hubfs/IMG_1321.jpg"
    },
    {
        "title": "Parking Space",
        "description": "Convenient and ample parking space for all our members. Easy access ensures that you can get to your workout without any hassle.",
        "icon": <FaParking />,
        "image": "https://i.ibb.co/ts40Qfx/117292323-2139147922889072-5827792306607486822-n.jpg"
    },
    {
        "title": "Coffee Shop",
        "description": "Relax and unwind at our on-site coffee shop. Enjoy a variety of beverages and snacks before or after your workout.",
        "icon": <FaCoffee />,
        "image": "https://i.ibb.co/t3b5nZJ/coffecup.jpg"
    },
    {
        "title": "Nutrition Service",
        "description": "Get personalized nutrition advice and meal plans from our certified nutritionists to complement your fitness regime.",
        "icon": <FaAppleAlt />,
        "image": "https://www.sustagen.com.my/sites/malaysiasustagen/files/Your_0.png"
    },
    {
        "title": "Personal Locker Service",
        "description": "Keep your belongings safe and secure with our personal locker service. Enjoy peace of mind while you work out.",
        "icon": <FaLock />,
        "image": "https://i.ibb.co/2N6zfpK/DSC01415.jpg"
    }
]

const Header = () => {
    return (
        <div className="relative h-64">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://www.teambath.com/wp-content/uploads/2023/11/Gym-landscape-for-facilities-page-2023.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative flex items-center justify-center h-full">
                <div className='flex flex-col items-center gap-4'>
                    <h1 className="text-custom-yellow text-4xl font-bold">Our Services</h1>
                    <p className="text-center text-accent font-semibold text-xl">We're more than just a fitness club — we provide the tools, support, and resources you need to achieve your goals.</p>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <div>
            <Header />
            <div className="py-12 screen mt-5">
                <div className="grid grid-cols-1 gap-28">
                    {servicesData.map((service, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center gap-7`}>
                            <div className=''>
                                {service.image && (
                                    <img src={service.image} alt={service.title} className="object-cover max-w-[600px] h-80" />
                                )}
                                {service.video && (
                                    <iframe
                                        width="600"
                                        height="315"
                                        src={service.video}
                                        title={service.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="object-cover max-w-[600px] h-80"
                                    ></iframe>
                                )}
                            </div>
                            <div className='p-4'>
                                <div className='flex flex-col text-center items-center'>
                                <div className='text-4xl mb-4 text-red-600'>{service.icon}</div>
                                    <p className="font-normal text-3xl poppins text-red-600">{service.title}</p>
                                    <p className="mt-2 text-gray-600 font-medium max-w-96">{service.description}</p>
                                    <p className='uppercase font-bold border-b-2 hover:border-red-700 cursor-pointer mt-4 text-lg text-red-700'>Learn More</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
