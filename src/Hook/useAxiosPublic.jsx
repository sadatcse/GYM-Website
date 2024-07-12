import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://multigym-premium-server.vercel.app/'
    baseURL: 'https://multi-gym-server-vwyee.ondigitalocean.app/'
    // baseURL: 'http://localhost:5000/'
})

const useAxiosPublic = () => {
    axiosPublic.defaults.withCredentials = true ;
    return axiosPublic;
};

export default useAxiosPublic;  