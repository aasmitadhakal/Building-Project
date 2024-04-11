"use client";
import axios from "axios";
var token;
// Check if user is authenticated
if (typeof window !== "undefined") {
  // Access localStorage only when running in the browser
  token = localStorage.getItem("authorization");
}
const axiosInstance = axios.create({
  baseURL: "https://admin108builder.pits.com.np/", // Replace this with your API base URL
  //  baseURL: "http://192.168.1.5:4000/",
  //  baseURL: "https://l4dlhcnd-4000.asse.devtunnels.ms/", // Replace this with your API base URL
  // Other Axios configuration options can be added here
  headers: {
    "Content-Type": "multipart/form-data",
    authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
