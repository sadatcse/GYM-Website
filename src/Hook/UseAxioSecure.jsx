import axios from "axios";
import { useMemo } from "react";

const UseAxiosSecure = () => {
  const axiosSecure = useMemo(
    () =>
      axios.create({
        baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
      }),
    []
  );

  return axiosSecure;
};

export default UseAxiosSecure;
