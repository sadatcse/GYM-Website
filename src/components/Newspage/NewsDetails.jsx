import axios from "axios";
import { useState } from "react";
import { SlSocialReddit } from "react-icons/sl";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { RiFacebookFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";


import Footer from "../Footer";
const NewsDetails = () => {

    const ob = {
        title: "IOC implements AI for athlete safety at Paris Olympics",
        subtitle: "Despite upcoming snap parliamentary elections in France, the IOC remains confident that preparations and the Games will proceed without disruption.",
        cover: "https://diplo-media.s3.eu-central-1.amazonaws.com/2024/06/contest-1227639_1280-1024x686.jpg",
        description: "The International Olympic Committee (IOC) will deploy AI to combat social media abuse directed at 15,000 athletes and officials during the Paris Olympics next month, IOC President Thomas Bach announced on Friday. With the Games set to begin on 26 July, more than 10,500 athletes will compete across 32 sports, generating over half a billion social media engagements.\n\nThe AI system aims to safeguard athletes by monitoring and automatically erasing abusive posts to provide extensive protection against cyber abuse. That initiative comes amid ongoing global conflicts, including the wars in Ukraine and Gaza, which have already led to social media abuse cases.\n\nRussian and Belarusian athletes, who will compete as neutral athletes without their national flags, are included in the protective measures. The IOC did not specify the level of access athletes would need to grant for the AI monitoring.\n\nDespite recent political developments in France, including a snap parliamentary election called by President Emmanuel Macron, Bach assured that preparations for the Olympics remain on track. He emphasised that both the government and opposition are determined to ensure that France presents itself well during the Games.",
        tags: ["Olympics", "Athlete Safety"],
        date: "June 10, 2024"
    };

    return (
        <div>
            <div className="screen px-6 mt-4 mb-3  border-gray-300 rounded-lg">
                <div className="">
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><a>Gym</a></li>
                            <li><a>News</a></li>
                            <li>{ob.title}</li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-3 mt-10 gap-10">
                    <div className="col-span-2 pr-20">
                        <p className="text-4xl font-semibold mb-5">{ob.title}</p>
                        <p className="text-2xl font-thin mb-2">{ob.date}</p>
                        {/* <p className="italic mb-5">{ob.subtitle}</p> */}
                        <p className="text-2xl font-thin leading-8 mt-3">{ob.description}</p>
                        <p className="text-red-500 mt-3 text-lg font-thin  cursor-pointer max-w-fit">Go Back</p>
                    </div>
                    <div className="pl-5">
                        <img className="w-full rounded-t-md" src={ob.cover} alt="" />
                        <div className="bg-slate-50 p-8">
                            <p className="font-bold text-red-600 text-lg">STORY TYPE</p>
                            <p className="text-red-600 my-4 font-thin">Latest News</p>
                            <p className="font-bold text-red-600 text-lg">POST TAGS</p>
                            <div className="flex gap-4 py-4 font-thin">
                                {
                                    ob.tags.map(tag => <p className="text-red-600">{tag}</p>)
                                }
                            </div>
                            <p className="font-bold text-red-600 mt-3 text-lg">FOLLOW THE LATEST</p>
                            <div className="flex my-5 mb-7 justify-start gap-4 items-center text-4xl">
                                <CiFacebook className="text-gray-600" />
                                <SlSocialTwitter className="text-gray-600 text-3xl" />
                                <SlSocialReddit className="text-gray-600" />
                                <TiSocialPinterestCircular className="text-gray-600" />
                            </div>
                            <p className="font-bold text-red-600 text-lg">GET UPDATES</p>
                            <input type="text" placeholder="Email" className="outline-none p-2 px-3 w-full rounded my-4 border" />
                            <button className="btn w-full rounded text-white bg-red-500 hover:text-red-500 hover:bg-transparent border hover:border-red-500">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default NewsDetails;