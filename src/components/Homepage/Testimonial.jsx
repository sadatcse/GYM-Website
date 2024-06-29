import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import Title from './Title';
const Testimonial = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const maxLength = 260;
    useEffect(() => {
       
        const data = [
            {
              "title": "Software Engineer",
              "name": "Showkat Ali Chowdhury",
              "comment": "As a software engineer, balancing long hours at the desk with maintaining fitness was challenging. Multigym Premium provided me with the perfect environment to regain my health. I lost 20kg by following a tailored workout plan and nutritious diet. Now, I feel more energetic and focused at work.",
              "image": "https://www.ebl.com.bd/assets/aboutus/directors/Showkat_Ali_Chowdhury.jpg"
            },
            {
              "title": "Marketing Manager",
              "name": "Ghaziul Haque",
              "comment": "Being a marketing manager, my schedule is demanding. Multigym Premium helped me achieve my fitness goals through personalized training and diet advice. I lost 15kg and gained confidence both personally and professionally. Thank you, Multigym Premium!",
              "image": "https://www.ebl.com.bd/assets/aboutus/directors/2__M__Ghaziul_Haque.jpg"
            },
            {
              "title": "Graphic Designer",
              "name": "Salina Ali",
              "comment": "As a graphic designer, sitting for long hours was affecting my health. Joining Multigym Premium was a game-changer. I lost 12kg and improved my stamina significantly. The supportive trainers and vibrant atmosphere kept me motivated throughout.",
              "image": "https://www.ebl.com.bd/assets/aboutus/directors/4__Salina_Ali.jpg"
            },
            {
              "title": "Financial Analyst",
              "name": "Anis Ahmed",
              "comment": "As a financial analyst, I needed a structured fitness routine to balance my sedentary job. Multigym Premium offered tailored workouts that helped me lose 18kg and improve my overall health. Now, I'm more productive and focused at work.",
              "image": "https://www.ebl.com.bd/assets/aboutus/directors/5__Anis_Ahmed.jpg"
            },
            {
              "title": "Teacher",
              "name": "K.J.S Banu",
              "comment": "Teaching is fulfilling but demanding. Multigym Premium helped me maintain a healthy lifestyle despite my busy schedule. I lost 10kg and gained strength and flexibility. The gym's facilities and friendly staff made every workout enjoyable.",
              "image": "https://www.ebl.com.bd/assets/aboutus/directors/K_J_S_Banu.jpg"
            },
            {
              "title": "Entrepreneur",
              "name": "Toufic Ahmad Choudhury",
              "comment": "Running my own business kept me busy round the clock. Multigym Premium provided me with the structure and motivation to prioritize my health. I lost 25kg and feel more energetic and focused in both my personal and professional life.",
              "image": "https://www.ebl.com.bd/assets/aboutus/directors/Toufic_Ahmad_Choudhury.jpg"
            },
            {
              "title": "Nurse",
              "name": "Mahreen Nasir",
              "comment": "Working as a nurse is physically and mentally demanding. Multigym Premium's holistic approach to fitness helped me regain my health. I lost 14kg and now feel stronger and more resilient at work. Thank you for supporting healthcare professionals like me!",
              "image": "https://www.ebl.com.bd/assets/aboutus/directors/Mahreen-Nasir.jpg"
            },
            {
              "title": "Consultant",
              "name": "Tanjib-ul Alam",
              "comment": "Being a consultant requires constant travel and irregular hours. Multigym Premium's flexible schedule and expert trainers enabled me to stay fit and healthy. I lost 16kg and feel more confident and focused in my professional engagements.",
              "image": "https://www.ebl.com.bd/assets/aboutus/directors/Tanjib-ul-Alam-24.jpg"
            },
            {
              "title": "Architect",
              "name": "Atique-e-Rabbani",
              "comment": "Architecture demands creativity and attention to detail, often leading to long hours at the drawing board. Multigym Premium's personalized fitness plan helped me shed 17kg. Now, I feel more agile and focused in both my designs and daily life.",
              "image": "https://www.ebl.com.bd/assets/aboutus/directors/Khondkar-Atique-e-Rabbani.jpg"
            },
            {
              "title": "Journalist",
              "name": "Reza Iftekhar",
              "comment": "Journalism is fast-paced and unpredictable. Multigym Premium's structured approach to fitness helped me stay resilient and focused. I lost 13kg and gained confidence in both my reporting and personal life. Thank you for helping me achieve my goals!",
              "image": "https://www.ebl.com.bd/assets/aboutus/directors/Ali_Reza_Iftekhar.jpg"
            }
          ]

        setTestimonialData(data);
    }, []);
    return (
        <div className='py-10 container mx-auto mt-5'>
<Title title="FEEDBACKS" subtitle="Trusted Testimonials" />
          
            <Marquee pauseOnHover={true}>
                <div className="flex mt-8">
                    {testimonialData &&
                        testimonialData.map((item, ind) => (
                            <div
                                key={ind}
                                className="flex flex-col justify-center px-8 mx-6 my-12 text-center rounded-md w-96 shadow bg-white transition-all duration-300 hover:bg-custom-yellow text-gray-800 hover:text-white-100 group"
                            >
                                <img
                                    className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 object-cover"
                                    src={item?.image}
                                    alt="Profile"
                                />
                                <div className="flex-1 my-4">
                                    <p className="text-xl font-semibold leading-tight">{item.name}</p>
                                    <p>{item?.title}</p>
                                    <p className="mt-4">
                                        <span className="text-3xl font-bold">“</span>
                                        {item?.comment.length > maxLength ? `${item?.comment.slice(0, maxLength)}...` : item?.comment}
                                      
                                        <span className="text-3xl font-bold">”</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Testimonial;