import axios from "axios";
import { useState } from "react";
import { SlSocialReddit } from "react-icons/sl";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { RiFacebookFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";

import Footer from "../Footer";
import { Link } from "react-router-dom";
const NewsDetails = () => {



    // related data fetch
    const [news, setNews] = useState([]);
    const api = "https://multigym-premium-server.vercel.app/news/get-all"
 
    axios.get(fakeData).then(data => {
        setNews(data.data);
    });



    return (
        <div>
            <div className="screen px-6 mt-4 mb-3  border-gray-300 rounded-lg">
                <div className="">
                    <div className="text-base text-gray-500 breadcrumbs poppins">
                        <ul>
                            <li><a><Link to="/">Gym</Link></a></li>
                            <li><a><Link to="/news">News</Link></a></li>
                            <li>{ob.title}</li>
                        </ul>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 mt-10 gap-10">
                    <div className="col-span-2 pr-20">
                        <p className="text-4xl font-semibold mb-5 poppins">{ob.title}</p>
                        <p className="text-2xl font-thin mb-2">{ob.date}</p>
                        {/* <p className="italic mb-5">{ob.subtitle}</p> */}
                        <p className="text-2xl font-thin leading-8 mt-3">{ob.description}</p>
                        <p className="text-red-500 mt-3 text-lg font-thin  cursor-pointer max-w-fit">Go Back</p>
                    </div>

                    {/* image part */}
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
                                <CiFacebook className="text-gray-600 cursor-pointer hover:text-red-600" />
                                <SlSocialTwitter className="text-gray-600 cursor-pointer hover:text-red-600 text-3xl" />
                                <SlSocialReddit className="text-gray-600 cursor-pointer hover:text-red-600" />
                                <TiSocialPinterestCircular className="text-gray-600 cursor-pointer hover:text-red-600" />
                            </div>
                            <p className="font-bold text-red-600 text-lg">GET UPDATES</p>
                            <input type="text" placeholder="Email" className="outline-none p-2 px-3 w-full rounded my-4 border" />
                            <button className="btn w-full rounded text-white bg-red-500 hover:text-red-500 hover:bg-transparent border hover:border-red-500">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* related news */}
                <section className="mt-20 mb-9">
                    <div>
                        <p className="text-3xl mb-7 ">Related News & Stories</p>
                    </div>
                    {/* News Cards */}
                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {
                            news.slice(news.length - 4, news.length).map((news) => {
                                return (
                                    <div className="relative">
                                        <img src={news.cover} className='rounded h-48 object-cover w-full hover:opacity-95' alt="" />
                                        {/* <div className="flex my-1 absolute bottom-14 left-2 -ml-1 gap-2 font-thin">
                                            {
                                                news.tags.slice(0,2).map(tag => <p className="text-sm bg-transparent text-black ml-1">{tag}</p>)
                                            }
                                        </div> */}
                                        <div className='flex flex-col justify-around gap-3 mt-1 border-t-0 rounded'>
                                            <div className='flex flex-col gap-2'>
                                                <p className='text-base font-semibold hover:text-red-700 cursor-pointer'>{news.title}</p>
                                                {/* <p className='text-xs'>{news.description.length > 60 ? news.description.slice(0, 60) : news.description} ... <Link className='text-red-600 hover:text-red-800'>details</Link></p> */}
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </section>
                </section>
            </div>
            <Footer />
        </div>

    );
};

export default NewsDetails;