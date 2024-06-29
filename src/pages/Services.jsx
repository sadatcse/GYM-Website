import React from 'react';



// I am giving you a link. This is for the service page. Please copy the entire page from A to Z. Use fake data for now, and ensure that the page works well if I decide to increase or decrease the amount of fake data.
// https://www.texasfamilyfitness.com/services
const servicesData = [
    {
        title: "Coffeeshop",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
        icon: "☕",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
    {
        title: "Large Free Weight Center",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
        icon: "🏋️",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
    {
        title: "Huge Cardio Center",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
        icon: "🏃",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
    {
        title: "Group Exercise Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
        icon: "🧘",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
    {
        title: "Personal Training",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
        icon: "🏅",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
    {
        title: "Any",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat, libero praesentium voluptatem, enim molestiae dolores doloremque officia quibusdam quia ea cum sapiente? Eos doloribus autem sunt, praesentium quaerat nihil ratione, ducimus quibusdam accusantium laborum repellendus sint? Voluptatum voluptate tempora excepturi aut. Explicabo sunt magnam voluptate dolorum neque itaque quasi. Iste sequi officia molestias consectetur.",
        icon: "✨",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
];

const Services = () => {
    // icon
    // title
    // description
    // image
    return (
        <div className="py-12 screen">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Our Services</h2>
            <p className="text-center mb-10">We're more than just a fitness club — we provide the tools, support, and resources you need to achieve your goals.</p>
            <div className="grid grid-cols-1 gap-3">
                {servicesData.map((service, index) => (
                    index % 2 == 0 ?
                        <>
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2  border rounded-lg shadow-lg">
                                <div className='p-4 px-9'>
                                    <div className='flex items-center mt-4 gap-4'>
                                        <h3 className="text-3xl font-semibold text-red-600">{service.title}</h3>
                                        <div className="text-2xl">{service.icon}</div>
                                    </div>
                                    <p className="mt-2 text-gray-600">{service.description}</p>
                                </div>
                                <div className='p-4'>
                                    <img src={service.image} alt={service.title} className="w-full  object-cover h-64 rounded-lg" />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2  border rounded-lg shadow-lg">
                                <div className='p-4'>
                                    <img src={service.image} alt={service.title} className="w-full  object-cover h-64 rounded-lg" />
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center mt-4 gap-4'>
                                        <h3 className="text-3xl font-semibold text-red-600">{service.title}</h3>
                                        <div className="text-2xl">{service.icon}</div>
                                    </div>
                                    <p className="mt-2 text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        </>
                ))}
            </div>
        </div>
    );
};

export default Services;


