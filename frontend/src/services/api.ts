import axios, { AxiosRequestHeaders } from 'axios'
import { Buffer } from 'buffer'

const URL_BACKEND = process.env.REACT_APP_URL_BACKEND
const AUTH_USER = process.env.REACT_APP_AUTH_USER
const AUTH_PASS = process.env.REACT_APP_AUTH_PASS

console.log('URL_BACKEND', URL_BACKEND)

const api = axios.create({
  baseURL: URL_BACKEND
})

api.interceptors.request.use((config) => {
  const base64encodedData = Buffer.from(`${AUTH_USER}:${AUTH_PASS}`).toString('base64')

  config.headers = {
    Authorization: `Basic ${base64encodedData}`
  } as AxiosRequestHeaders

  return config
})

export default api
