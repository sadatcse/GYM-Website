import React from 'react';

// I am giving you a link. This is for the service page. Please copy the entire page from A to Z. Use fake data for now, and ensure that the page works well if I decide to increase or decrease the amount of fake data.
// https://www.texasfamilyfitness.com/services
// const servicesData = [
//     {
//         title: "Coffeeshop",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
//         icon: "☕",
//         image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
//     },
//     {
//         title: "Large Free Weight Center",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
//         icon: "🏋️",
//         image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
//     },
//     {
//         title: "Huge Cardio Center",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
//         icon: "🏃",
//         image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
//     },
//     {
//         title: "Group Exercise Classes",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
//         icon: "🧘",
//         image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
//     },
//     {
//         title: "Personal Training",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
//         icon: "🏅",
//         image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
//     },
//     {
//         title: "Any",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
//         icon: "✨",
//         image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
//     },
// ];

const servicesData = [
    {
        "title": "Kids Club",
        "description": "Bring your kids along to our fitness club for Kids Club. Your children will enjoy a large selection of games, check out our movie theater (available at select locations) or play on indoor jungle gyms.",
        "icon": "https://www.texasfamilyfitness.com/hs-fs/hubfs/TFF_July_2018/Home/kids-club.png?width=82&name=kids-club.png",
        "image": "https://www.texasfamilyfitness.com/hs-fs/hubfs/IMG_0038.jpg?width=612&name=IMG_0038.jpg"
    },
    {
        "title": "Large Free Weight Center",
        "description": "Unlock your inner strength in our state-of-the-art free weight center! Work with our staff to find the right program to power your results.",
        "icon": "https://www.texasfamilyfitness.com/hs-fs/hubfs/TFF_July_2018/Home/large-free-weight-center.png?width=112&name=large-free-weight-center.png",
        "image": "https://www.texasfamilyfitness.com/hubfs/IMG_0942.jpg"
    },
    {
        "title": "Huge Cardio Center",
        "description": "Are you all about your daily treadmill sprints or looking to wind down on an elliptical? Whatever your favorite machine is, we are here to help you get moving with the best cardio equipment.",
        "icon": "https://www.texasfamilyfitness.com/hs-fs/hubfs/TFF_July_2018/Home/huge-cardio-center.png?width=82&name=huge-cardio-center.png",
        "image": "https://www.texasfamilyfitness.com/hs-fs/hubfs/CardioUpstairs.jpg?width=556&height=371&name=CardioUpstairs.jpg"
    },
    {
        "title": "Group Exercise Classes",
        "description": "As part of our commitment to being the best FIT for your family, Texas Family Fitness offers a variety of classes at our fitness clubs. Our group fitness classes are fun, cutting-edge, and driven by community.",
        "icon": "https://www.texasfamilyfitness.com/hs-fs/hubfs/TFF_July_2018/Home/group-exercise-classes.png?width=116&name=group-exercise-classes.png",
        "image": "https://www.texasfamilyfitness.com/hs-fs/hubfs/TFF_July_2018/Personal%20Training/Group-Exercise-Classes.jpg?width=1200&name=Group-Exercise-Classes.jpg"
    },
    {
        "title": "Personal Training",
        "description": "Meet your goals with private personal training and Ignite group fitness. Our passionate and skilled personal trainers will customize a fitness program based on your needs.",
        "icon": "https://www.texasfamilyfitness.com/hs-fs/hubfs/TFF_July_2018/Home/personal-training-icon.png?width=98&name=personal-training-icon.png",
        "image": "https://www.texasfamilyfitness.com/hubfs/IMG_1321.jpg"
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
                    <h1 className="text-white text-4xl font-bold">Our Services</h1>
                    <p className="text-center text-white font-semibold text-xl">We're more than just a fitness club — we provide the tools, support, and resources you need to achieve your goals.</p>
                </div>
            </div>
        </div>
    );
};


const Services = () => {
    // icon
    // title
    // description
    // image
    return (
        <div>
            <Header></Header>
            <div className="py-12 screen mt-5">
                <div className="grid grid-cols-1 gap-28">
                    {servicesData.map((service, index) => (
                        index % 2 == 0 ?
                            <>
                                <div key={index} className="flex  flex-col md:flex-row-reverse items-center justify-center gap-7">
                                    <div className=''>
                                        <img src={service.image} alt={service.title} className="object-cover max-w-[600px] h-80" />
                                    </div>
                                    <div className='p-4'>
                                        <div className='flex flex-col text-center items-center'>
                                            <img src={service.icon} alt="" className='w-14 mb-4' />
                                            <p className="font-normal text-3xl poppins text-red-600">{service.title}</p>
                                            <p className="mt-2 text-gray-600 font-medium max-w-96">{service.description}</p>
                                            <p className='uppercase font-bold border-b-2 hover:border-red-700 cursor-pointer mt-4 text-lg text-red-700'>Learn More</p>
                                        </div>
                                    </div>
                                </div>
                            </> : <>
                                <div key={index} className="flex  flex-col md:flex-row items-center justify-center gap-7">
                                    <div className=''>
                                        <img src={service.image} alt={service.title} className="object-cover max-w-[600px] h-80" />
                                    </div>
                                    <div className='p-4'>
                                        <div className='flex flex-col text-center items-center'>
                                            <img src={service.icon} alt="" className='w-14 mb-4' />
                                            <p className="font-normal text-3xl poppins text-red-600">{service.title}</p>
                                            <p className="mt-2 text-gray-600 font-medium max-w-96">{service.description}</p>
                                            <p className='uppercase font-bold border-b-2 hover:border-red-700 cursor-pointer mt-4 text-lg text-red-700'>Learn More</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;


