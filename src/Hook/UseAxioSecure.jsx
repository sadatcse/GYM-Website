import axios from 'axios';
export const axiosSecure = axios.create({
    // baseURL: 'https:/multigym-premium-server.vercel.app/'
    baseURL: 'https://multi-gym-server-vwyee.ondigitalocean.app/'
})
const UseAxioSecure = () => {
    axiosSecure.defaults.withCredentials = true ;
    return axiosSecure;

};

export default UseAxioSecure;