import axios from 'axios';
export const axiosSecure = axios.create({
    baseURL: 'https:/multigym-premium-server.vercel.app/'
})
const UseAxioSecure = () => {
    return axiosSecure;

};

export default UseAxioSecure;