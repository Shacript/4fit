import axiosInstance from "../configs/axios";

const register = ({
  username,
  email,
  password,
  first_name,
  last_name,
  date_of_birth,
  weight,
  height,
}) => {
  return axiosInstance.post("register", {
    username,
    email,
    password,
    first_name,
    last_name,
    date_of_birth,
    weight,
    height,
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
