import Axios, { AxiosError, AxiosInstance } from "axios"
import Config from "../../config"
import { ApiResponse } from "./api.types"
import { clientStorage } from "app/utils/storage"

export const apiInstance: AxiosInstance = Axios.create({
  baseURL: Config.API_URL,
  timeout: 1e5,
  headers: {
    "Content-Type": "application/json",
  },
})

apiInstance.interceptors.request.use((config) => {
  const token = clientStorage.loadString("token")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

apiInstance.interceptors.response.use(
  (response) => {
    const customResponse: ApiResponse = { ...response, kind: "ok" }
    return customResponse
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)
