import axios, {AxiosHeaders, AxiosInstance} from 'axios'
import router from '../router'

// @ts-ignore
const baseURL = import.meta.env.VITE_API_URL

export const API = axios.create({
    baseURL: baseURL
})

// Request interceptor
API.interceptors.request.use(request => {
    const token = localStorage.getItem('token');
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`
    }
    return request;
})

export class BaseApiService {
    getApi(): AxiosInstance {
        return API;
    }
}