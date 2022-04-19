import axiosInstance from "../configs/axios";

const getUserTasks = () => {
  return axiosInstance.get("user/me/tasks");
};

const getUserTasksByDate = (date) => {
  return axiosInstance.get(`user/me/tasks?date=${date}`);
};

const addUserTask = (taskForm) => {
  return axiosInstance.post("user/me/tasks", taskForm);
};

const taskService = { getUserTasks, getUserTasksByDate, addUserTask };

export default taskService;
