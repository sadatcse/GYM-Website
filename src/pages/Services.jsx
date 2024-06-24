import React from 'react';



// I am giving you a link. This is for the service page. Please copy the entire page from A to Z. Use fake data for now, and ensure that the page works well if I decide to increase or decrease the amount of fake data.
// https://www.texasfamilyfitness.com/services
const servicesData = [
    {
        title: "Coffeeshop",
        description: "A premium quality coffee available in our gym. Enjoy a coffee before starting your workout.",
        icon: "☕",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
    {
        title: "Large Free Weight Center",
        description: "Unlock your inner strength in our state-of-the-art free weight center! Work with our staff to find the right program to power your results.",
        icon: "🏋️",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
    {
        title: "Huge Cardio Center",
        description: "Whether you love treadmill sprints or prefer winding down on an elliptical, we offer the best cardio equipment to get you moving.",
        icon: "🏃",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
    {
        title: "Group Exercise Classes",
        description: "We offer a variety of fun, cutting-edge group fitness classes driven by community. Join us and get fit together!",
        icon: "🧘",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
    {
        title: "Personal Training",
        description: "Meet your goals with personalized training and Ignite group fitness. Our trainers customize programs to suit your needs.",
        icon: "🏅",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
    {
        title: "Any",
        description: "Any service description goes here.",
        icon: "✨",
        image: "https://methodicalcoffee.com/cdn/shop/articles/DUA_DC_inside.jpg?v=1704476259&width=1000"
    },
];

const Services = () => {
    return (
        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Our Services</h2>
            <p className="text-center mb-10">We're more than just a fitness club — we provide the tools, support, and resources you need to achieve your goals.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {servicesData.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg">
                        
                        <div className="text-6xl">{service.icon}</div>
                        <h3 className="mt-4 text-xl font-semibold text-red-600">{service.title}</h3>
                        <p className="mt-2 text-gray-600">{service.description}</p>
                        <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-t-lg mb-4"/>
                    
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;


