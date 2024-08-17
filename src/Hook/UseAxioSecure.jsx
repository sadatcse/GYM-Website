
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: `https://images.multigympremium.com/api`,
    withCredentials: true, // This ensures cookies are sent with the request

})

const UseAxioSecure = () => {
    return axiosSecure;
};

export default UseAxioSecure;