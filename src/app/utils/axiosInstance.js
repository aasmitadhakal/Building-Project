
import axios from "axios";
const token = localStorage.getItem("authorizations");
console.log(token);
const axiosInstance = axios.create({
  baseURL: "http://192.168.1.143:4000", // Replace this with your API base URL
  // Other Axios configuration options can be added here
  headers: {
    "Content-Type": "multipart/form-data",
    Authorizations: `${token}`,
  },
});
 
export default axiosInstance;