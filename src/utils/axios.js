import axios from "axios";

const url = "http://10.202.100.84:3003";

export const register = (email, password) => {
  return axios.post(url + "/v1/userregister", { email, password });
};

export const login = (username, password) => {
  return axios.post(url + "/api/login", { username, password });
};
