import axiosInstance from "../configs/axios";

const getUserTasks = () => {
  return axiosInstance.get("user/me/tasks");
};

const getUserTasksByDate = (date) => {
  return axiosInstance.get(`user/me/tasks?date=${date}`);
};

const getUserTask = (_id) => {
  return axiosInstance.get(`user/me/tasks/${_id}`);
};

const addUserTask = (taskForm) => {
  return axiosInstance.post("user/me/tasks", taskForm);
};

const updateUserTask = (_id, taskForm) => {
  return axiosInstance.put(`user/me/tasks/${_id}`, taskForm);
};

const removeUserTask = (_id) => {
  return axiosInstance.delete(`user/me/tasks/${_id}`);
};

const taskService = {
  getUserTasks,
  getUserTasksByDate,
  getUserTask,
  addUserTask,
  updateUserTask,
  removeUserTask,
};

export default taskService;
