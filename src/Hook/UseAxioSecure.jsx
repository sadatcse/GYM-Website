
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`
})

const UseAxioSecure = () => {
    return axiosSecure;
};

export default UseAxioSecure;