import axiosClient from "./axiosClient";

const taskApi = {
  getAllProject: () => {
    const url = "/projects";
    return axiosClient.get(url, {});
  },
  getAProject: (id) => {
    const url = "/projects/" + id;
    return axiosClient.get(url, {});
  },
  getActiveTasks: () => {
    const url = "/tasks";
    return axiosClient.get(url, {});
  },
  createTask: (data) => {
    const url = "/tasks";
    return axiosClient.post(url, data, {});
  },
  updateTask: (data) => {
    const url = "/tasks/" + data.id;
    return axiosClient.post(url, data.content, {});
  },
  delTask: (id) => {
    const url = "/tasks/" + id;
    return axiosClient.delete(url, {});
  },
};

export default taskApi;
