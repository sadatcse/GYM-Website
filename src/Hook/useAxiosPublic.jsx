import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://api.multigympremium.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;