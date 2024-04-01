import axios from "axios";
const token = localStorage.getItem("authorizations");

const axiosInstance = axios.create({
  // baseURL: "https://admin108builder.pits.com.np/", // Replace this with your API base URL
  baseURL: "http://localhost:4000/", // Replace this with your API base URL
  // Other Axios configuration options can be added here
  headers: {
    "Content-Type": "multipart/form-data",
    Authorizations: `${token}`,
  },
});

export default axiosInstance;
