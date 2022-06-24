import axiosClient from "./axiosClient";

const crudAPi = {
  getData: (data_type, params) => {
    const url = "";
    return axiosClient.get(url, params);
  },
};

export default crudAPi;
