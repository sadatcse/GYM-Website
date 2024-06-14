import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Root = () => {
    return (
        <div>
            <div className="mx-auto w-[95%]">
                <Navbar />
            </div>
            {/* Dynamic section */}
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;