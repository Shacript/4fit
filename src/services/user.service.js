import axiosInstance from "../configs/axios";

const getUserInformation = () => {
  return axiosInstance.get("user/me");
};

const userService = { getUserInformation };

export default userService;
