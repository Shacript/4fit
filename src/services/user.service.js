import axiosInstance from "../configs/axios";

const getUserInformation = () => {
  return axiosInstance.get("user/me");
};

const updateUserInformation = (updatedBody) => {
  return axiosInstance.put("user/me", updatedBody);
};

const userService = { getUserInformation, updateUserInformation };

export default userService;
