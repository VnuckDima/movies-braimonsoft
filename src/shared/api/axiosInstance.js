import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  timeout: 10000,
});

export default axiosInstance;