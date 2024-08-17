import axios from "axios";

const axiosPublic = axios.create({
    baseURL: `https://images.multigympremium.com/api`
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;