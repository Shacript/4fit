import axios from "axios";

const API_URL = "https://4fit-back-end.vercel.app/api/";

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
