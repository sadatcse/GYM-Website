import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <p>I am root page</p>
            {/* Dynamic section */}
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;