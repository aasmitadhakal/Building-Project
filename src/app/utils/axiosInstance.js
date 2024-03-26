// utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Replace this with your API base URL
  // Other Axios configuration options can be added here
});

export default axiosInstance;
