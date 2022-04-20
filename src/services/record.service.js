import axiosInstance from "../configs/axios";

const getUserRecordsChart = (type) => {
  return axiosInstance.get(`user/me/records/chart?type=${type}`);
}

const getUesrRecords = (type, date) => {
  return axiosInstance.get(`user/me/records?type=${type}&date=${date}`);
};

const addUserRecord = (records) => {
  return axiosInstance.post("user/me/records/", records);
};

const recordService = {
  getUserRecordsChart,
  getUesrRecords,
  addUserRecord,
};

export default recordService;
