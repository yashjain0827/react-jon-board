// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000";

export const registerCompany = async (data) => {
  return axios.post(`${API_URL}/api/register`, data);
};
