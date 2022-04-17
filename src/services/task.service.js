import axiosInstance from "../configs/axios";

const getUserTasks = () => {
  return axiosInstance.get("user/me/tasks");
};

const getUserTasksByDate = (date) => {
  return axiosInstance.get(`user/me/tasks?date=${date}`);
};

const taskService = { getUserTasks, getUserTasksByDate };

export default taskService;
