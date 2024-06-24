import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact_us = () => {
    return (
        <div className="screen mt-4">
            <div className="grid border grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10 p-7">
                <div className="flex flex-col justify-center">
                    <p className="text-3xl font-bold poppins">MULTIGYM PREMIUM DHAKA CITY</p>
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <div className="flex items-center mt-8 mb-3 gap-3">
                                <div>
                                    <FaPhoneAlt />
                                </div>
                                <p className="font-bold text-lg">(+880) 1313-197435</p>
                            </div>
                            <div className="flex  items-start gap-3">
                                <FaLocationDot className="mt-1 text-3xl text-red-700" />
                                <div className="flex flex-col gap-5">
                                    <p>24/1,24/2(3rd & 4th floor) , Ring Road , Shia Masjid Mor, Mohammadpur , Dhaka 1207</p>
                                    <Link className="font-bold  text-red-600 text-xl" to="" target="_blank" >GET DIRECTION</Link>
                                </div>

                            </div>

                        </div>
                        <div>
                            <div className="flex items-center mt-8 mb-3 gap-3">
                                <div>
                                    <FaPhoneAlt />
                                </div>
                                <p className="font-bold text-lg">(+880) 1313-197427</p>
                            </div>
                            <div className="flex  items-start gap-3">
                                <FaLocationDot className="mt-1 text-3xl text-red-700" />
                                <div className="flex flex-col gap-5">
                                    <p>Lalmatia Shopping Center (2nd floor), Lalmatia New Coloni  Beside of Fire Service & Civil Defence , Dhaka </p>
                                    <Link className="font-bold  text-red-600 text-xl" to="" target="_blank" >GET DIRECTION</Link>
                                </div>


                            </div>

                        </div>


                    </div>

                </div>
                <div>
                    <h1 className="text-4xl font-bold">GET IN TOUCH</h1>
                    <h4 className="mt-6">
                        Have a comment or general question? Fill out the form below and a member of our <br />team will reach out to you shortly.
                    </h4>
                    <div className="flex flex-col gap-5 mt-7">
                        <div className="flex justify-between gap-7">
                            <input type="text" placeholder="First Name" className="outline-none rounded w-full border-2  focus:border-b-red-800 p-3 border-b-red-600 shadow" />
                            <input type="text" placeholder="Last Name" className="outline-none rounded w-full border-2  focus:border-b-red-800 p-3 border-b-red-600 shadow" />
                        </div>
                        <div className="flex justify-between gap-7">
                            <input type="text" placeholder="Email Address" className="outline-none rounded w-full border-2  focus:border-b-red-800 p-3 border-b-red-600 shadow" />
                            <input type="text" placeholder="Phone Number" className="outline-none rounded w-full border-2  focus:border-b-red-800 p-3 border-b-red-600 shadow" />
                        </div>
                        <input type="text" placeholder="Zip/Postal Code" className="outline-none rounded w-full border-2  focus:border-b-red-800 p-3 border-b-red-600 shadow" />
                        <textarea placeholder="Comments/Questions" name="" className="outline-none rounded w-full border-2  focus:border-b-red-800 p-3 border-b-red-600 shadow resize-none  h-24" id=""></textarea>
                    </div>
                    <p className="mt-3 text-sm">By clicking SUBMIT below, you. agree to the <span className="text-red-600">Privacy Policy</span> and authorize Multi Gym Premium.</p>
                    <button className="btn rounded-md mt-4 bg-red-600 text-white text-lg hover:text-red-600 hover:bg-white hover:border-red-600 w-1/3">Submit</button>
                </div>
            </div>


            {/* <div className="flex justify-between">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.568667696019!2d90.35654327533634!3d23.762756078661923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf2476ff0fd5%3A0x55d28ddfdbff1096!2sMulti%20Gym%20Premium%2C%20Shia%20Masjid!5e0!3m2!1sen!2sbd!4v1719082531018!5m2!1sen!2sbd" width="600" height="450" className="rounded-lg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.69158478031!2d90.36839267997814!3d23.758375133480182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf213d5bc75f%3A0xf5a881e8d0507a36!2sMulti%20Gym%20Premium%2C%20Lalmatia%20Branch!5e0!3m2!1sen!2sbd!4v1719082681089!5m2!1sen!2sbd" width="600" height="450" className="rounded-lg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
        </div>
    );
};

export default Contact_us;