import axios, { AxiosRequestHeaders } from 'axios'
import { Buffer } from 'buffer';

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

api.interceptors.request.use((config) => {

  const username = 'renan';
  const password = 'test';
  const base64encodedData = Buffer.from(`${username}:${password}`).toString('base64');

    config.headers = {
      Authorization: `Basic ${base64encodedData}`
    } as AxiosRequestHeaders

  return config
})

export default api