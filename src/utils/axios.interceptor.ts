import axios from "axios"
import {envs} from "../config/envs"

const axiosInstance = axios.create({
    baseURL: `${envs.API_URL}:${envs.API_PORT}/api`
})
axiosInstance.interceptors.request.use(
    (config) => config,
    (error) => error
)
export default axiosInstance;