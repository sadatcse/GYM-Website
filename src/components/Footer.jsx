import { Link } from "react-router-dom";
import logo from "../assets/gymlogo.jpg";
import CustomButton from './../components/Homepage/CustomButton';
import { motion } from 'framer-motion';

const Footer = () => {
    const footerContainerVariant = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.6,
                duration: 0.5,
                ease: 'linear',
            },
        },
    };

    const footerItem = {
        hidden: {
            y: 20,
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
    };

    return (
        <div className="poppins mt-10 ">
            <footer className="bg-primary-300 text-white px-5">
                <div className="footer py-10 mx-auto w-[95%] flex justify-between">
                    <motion.div
                        variants={footerContainerVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12"
                    >
                        {/* Categories */}
                        <motion.div variants={footerItem} className="flex flex-col gap-4">
                            <h6 className="footer-title">Categories</h6>
                            <a className="hover:text-red-600 cursor-pointer">Basic Yoga</a>
                            <a className="hover:text-red-600 cursor-pointer">Body Building</a>
                            <a className="hover:text-red-600 cursor-pointer">Weight Loss</a>
                            <a className="hover:text-red-600 cursor-pointer">Strength Training</a>
                        </motion.div>

                        {/* Services */}
                        <motion.div variants={footerItem} className="flex flex-col gap-4">
                            <h6 className="footer-title">Services</h6>
                            <a className="hover:text-red-600 cursor-pointer">Personal Training</a>
                            <a className="hover:text-red-600 cursor-pointer">Steam Bath</a>
                            <a className="hover:text-red-600 cursor-pointer">Sauna bath</a>
                            <a className="hover:text-red-600 cursor-pointer">NutrItion Services</a>
                        </motion.div>

               

                        {/* Legal */}
                        <motion.div variants={footerItem} className="flex flex-col gap-4">
                            <h6 className="footer-title">Legal</h6>
                            <Link to="/legal/termsofuse"><a className="hover:text-red-600 cursor-pointer">Terms of use</a></Link>
                            <Link to="/legal/appprivacypolicy"><a className="hover:text-red-600 cursor-pointer">Privacy policy</a></Link>
                            <Link to="/legal/cookiepolicy"><a className="hover:text-red-600 cursor-pointer">Cookie policy</a></Link>
                            <Link to="/legal/refundpolicy"><a className="hover:text-red-600 cursor-pointer">Refund policy</a></Link>
                          
                        </motion.div>

                        {/* Newsletter */}
                        <motion.div variants={footerItem} className="flex flex-col gap-4">
                            <h6 className="footer-title">Newsletter</h6>
                            <form className="form-control w-80">
                                <div className="join">
                                    <input type="text" placeholder="Enter your email" className="input input-bordered join-item" />
                                    <button className="btn bg-red-600 hover:text-red-600 hover:bg-white text-white join-item">Subscribe</button>
                                </div>
                                <p className="mt-3 text-neutral-300">Never miss an update & news to your email</p>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
                
                <div className="w-[95%] mx-auto">
                    <footer className="footer items-center py-4 bg-primary-300 border-t text-white flex justify-between">
                        <div className="flex items-center gap-2">
                            <img src={logo} className="w-10" alt="Logo" />
                            <p>Multigym Premium</p>
                        </div>
                        <p>Copyright © 2024 - All rights reserved</p>
                        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </nav>
                    </footer>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
