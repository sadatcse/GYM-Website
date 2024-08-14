
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
    withCredentials: true, // This ensures cookies are sent with the request

})

const UseAxioSecure = () => {
    return axiosSecure;
};

export default UseAxioSecure;