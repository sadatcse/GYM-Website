import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import logo from "../assets/gymlogo.jpg";
import logo1 from "../assets/logo.png";
import android from "../assets/img/footer/playstore.png";
import ios from "../assets/img/footer/appsstore.png";

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
        <div className="poppins mt-10  ">
            <footer className="footer  bg-primary-300 text-white p-10">
            <aside className="">
  <h6 className="footer-title text-xl font-bold mb-4 text">CONTACT US</h6> 
  <div className="">
    
    <p className="font-semibold text-xl">MULTIGYM PREMIUM</p>
    <p>24/1, 24/2 (3rd & 4th floor), Ring Road</p>
    <p>Shia Masjid Mor, Mohammadpur</p>
    <p>Dhaka 1207</p>
    <p><span className="font-bold">Mobile :</span> 01313-197435,  01313-197427</p>
  </div>


</aside>
                <nav>
                    <h6 className="footer-title text-xl font-bold mb-4">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl font-bold mb-4">Legal</h6>
                    <Link to="/legal/termsofuse"><a className="hover:text-red-600 cursor-pointer">Terms of use</a></Link>
                    <Link to="/legal/appprivacypolicy"><a className="hover:text-red-600 cursor-pointer">Privacy policy</a></Link>
                    <Link to="/legal/cookiepolicy"><a className="hover:text-red-600 cursor-pointer">Cookie policy</a></Link>
                    <Link to="/legal/refundpolicy"><a className="hover:text-red-600 cursor-pointer">Refund policy</a></Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl font-bold mb-4">DOWNLOAD MULTIGYM PREMIUM APP</h6>
                    <div className="flex flex-col gap-4">
                        <a href="https://play.google.com/store/apps/details?id=com.example.android" target="_blank" rel="noopener noreferrer">
                            <img src={android} alt="Download on Android" />
                        </a>
                        <a href="https://apps.apple.com/us/app/example-ios-app/id123456789" target="_blank" rel="noopener noreferrer">
                            <img src={ios} alt="Download on iOS" />
                        </a>
                    </div>
                </nav>
            </footer>

            <div className="mx-auto">
                <footer className="footer items-center py-4 bg-primary-300 border-t text-white flex justify-between px-5">
                    <div className="flex items-center gap-2">
                        <img src={logo} className="w-10" alt="Logo" />
                        <p>Multigym Premium</p>
                    </div>
                    <p>Copyright © 2024 </p>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end   ">
                    <a href="https://www.twitter.com/MultiGymPremium" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://www.youtube.com/@MultiGymPremium" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube size={24} />
                        </a>
                        <a href="https://www.facebook.com/MultiGymPremium" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook size={24} />
                        </a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
