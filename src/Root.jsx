import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar />
            {/* Dynamic section */}
            <div>
                {/* <Outlet /> */}
            </div>
        </div>
    );
};

export default Root;