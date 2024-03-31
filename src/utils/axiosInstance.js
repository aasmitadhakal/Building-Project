// utils/axiosInstance.js
import axios from "axios";
const token = localStorage.getItem("authorization");
const axiosInstance = axios.create({
  // baseURL: "http://192.168.1.143:4000",
  baseURL: "https://admin108builder.pits.com.np/",
  // Other Axios configuration options can be added here
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `${token}`,
  },
});

export default axiosInstance;
