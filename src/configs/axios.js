import axios from "axios";

const API_URL = "http://localhost:4001/";

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
