import axios from "axios";

export const bookBaseUrl = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/book`,
});