import axios from "axios";

const API_BASE = "/api";

export const submitContactForm = async (payload) => {
  const response = await axios.post(`${API_BASE}/contact`, payload);
  return response.data;
};

export const pingApi = async () => {
  const response = await axios.get(`${API_BASE}/status`);
  return response.data;
};
