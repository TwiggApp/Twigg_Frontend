import axios, { AxiosInstance, isAxiosError } from "axios";
import toast from "react-hot-toast";

export const apiClient: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
});

apiClient.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("authToken");
  const magicToken = localStorage.getItem("magicToken");
  const tempToken = localStorage.getItem("tempToken");

  if (authToken) config.headers["x-access-token"] = authToken;
  if (magicToken) config.headers["x-access-token"] = magicToken;
  if (tempToken) config.headers["x-temp-token"] = tempToken;

  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
      if (error.response?.data?.message === "Vaidation Failure") {
        toast.error(Object.values(error.response?.data?.validationErrors as object)[0], {
          position: "top-right",
        });
      }
    }
    return Promise.reject(error);
  }
);
