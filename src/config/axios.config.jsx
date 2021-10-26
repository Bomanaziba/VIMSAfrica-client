import axios from "axios";

export default function (authToken) {

  axios.defaults.baseURL = window.configs.baseURL;

  axios.interceptors.request.use(

    config => {
      const token = authToken || sessionStorage.getItem("token");

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    error => {
      Promise.reject(error);
    }
  );

}
