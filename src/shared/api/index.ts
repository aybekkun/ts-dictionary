import axios from 'axios'
import type {InternalAxiosRequestConfig} from 'axios';

const _API_KEY = 'https://py.injiniring-kompaniya.uz/api/v1'
const $authHost = axios.create({
  baseURL: _API_KEY,
})

$authHost.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token')

  config.headers.Authorization = `Bearer ${token ?? ''}`

  return config
})

const $host = axios.create({
  baseURL: _API_KEY,
})

export { $host, $authHost }
