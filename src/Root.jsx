import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Root = () => {
    return (
        <div>
            <div className="mx-auto">
                <Navbar />
            </div>
            {/* Dynamic section */}
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Root;