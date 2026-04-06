import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://chatapp-backend-irel.onrender.com/api",
    withCredentials:true
})