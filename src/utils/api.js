import axios from "axios";
import { getToken } from "./auth";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach JWT to every request automatically
API.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
