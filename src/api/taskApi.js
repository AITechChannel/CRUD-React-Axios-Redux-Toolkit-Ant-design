import axiosClient from "./axiosClient";

const taskApi = {
  getData: (category, params) => {
    const url = "/" + category;
    return axiosClient.get(url, params);
  },

  postData: (category, data) => {
    const url = "/" + category;
    return axiosClient.post(url, data);
  },
};

export default taskApi;
