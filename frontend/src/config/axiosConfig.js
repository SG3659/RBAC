import axios from "axios";
// console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);

const apiConfig = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default apiConfig;
