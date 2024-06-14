import logo from "../assets/gymlogo.jpg"
const Footer = () => {
    return (
        <div className="poppins">
            <footer className=" bg-neutral-900 text-white">
                <div className="footer py-10 mx-auto w-[95%] flex justify-between">
                    <nav>
                        <h6 className="footer-title">Categories</h6>
                        <a className="hover:text-red-600 cursor-pointer">Basic Yoga</a>
                        <a className="hover:text-red-600 cursor-pointer">Body Building</a>
                        <a className="hover:text-red-600 cursor-pointer">Weigth loss</a>
                        <a className="hover:text-red-600 cursor-pointer">Strength Training</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="hover:text-red-600 cursor-pointer">Branding</a>
                        <a className="hover:text-red-600 cursor-pointer">Design</a>
                        <a className="hover:text-red-600 cursor-pointer">Marketing</a>
                        <a className="hover:text-red-600 cursor-pointer">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="hover:text-red-600 cursor-pointer">About us</a>
                        <a className="hover:text-red-600 cursor-pointer">Contact</a>
                        <a className="hover:text-red-600 cursor-pointer">Jobs</a>
                        <a className="hover:text-red-600 cursor-pointer">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="hover:text-red-600 cursor-pointer">Terms of use</a>
                        <a className="hover:text-red-600 cursor-pointer">Privacy policy</a>
                        <a className="hover:text-red-600 cursor-pointer">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="form-control w-80">

                            <div className="join">
                                <input type="text" placeholder="Enter your email" className="input input-bordered join-item" />
                                <button className="btn bg-red-600 hover:text-red-600 hover:bg-white text-white join-item">Subscribe</button>
                            </div>
                            <p className="mt-3 text-neutral-300">Never miss an  update & news to your email</p>
                        </fieldset>
                    </form>
                </div>
                <div className="w-[95%] mx-auto">
                    <footer className="footer items-center py-4 bg-neutral-900 border-t text-white flex justify-between">
                        <div className="flex items-center gap-2 justify-between">
                            <img src={logo} className="w-10" alt="" />
                            <p>Multigym Premium</p>
                        </div>
                        <p>Copyright © 2024 - All right reserved</p>
                        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                            </a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </nav>
                    </footer>
                </div>
            </footer>
        </div>
    );
};

export default Footer;