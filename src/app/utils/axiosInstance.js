"use client";
import axios from "axios";
const token = localStorage.getItem("authorizations");

const axiosInstance = axios.create({
   baseURL: "https://admin108builder.pits.com.np/", // Replace this with your API base URL
  // baseURL: "http://192.168.1.142:4000/", // Replace this with your API base URL
  // Other Axios configuration options can be added here
  headers: {
    "Content-Type": "multipart/form-data",
    Authorizations: `${token}`,
  },
});

// export default axiosInstance;
// import axios from "axios";
// // import Cookies from "js-cookie";

// // Retrieve the token from the cookie
// const token = localStorage.get("authorization");

// const axiosInstance = axios.create({
//   baseURL: "https://admin108builder.pits.com.np/", // Replace this with your API base URL
//   // baseURL: "http://192.168.1.142:4000/", // Replace this with your API base URL
//   // Other Axios configuration options can be added here
//   headers: {
//     "Content-Type": "multipart/form-data",
//     Authorization: `${token}`, // Note: it should be "Authorization" instead of "Authorizations"
//   },
// });

export default axiosInstance;
