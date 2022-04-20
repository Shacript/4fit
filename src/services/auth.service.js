import axiosInstance from "../configs/axios";

const register = ({ username, email, password, first_name, last_name }) => {
  return axiosInstance.post("register", {
    username,
    email,
    password,
    first_name,
    last_name,
  });
};

const login = (username, password) => {
  return axiosInstance.post("login", {
    username: username,
    password: password,
  });
};

const logout = () => {
  return axiosInstance.get("logout");
};

const authService = { register, login, logout };

export default authService;
