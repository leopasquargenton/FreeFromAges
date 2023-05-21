import axios, { AxiosError } from 'axios';

interface AxiosErrorResponse {
  code?: string;
}

export const api = axios.create({
  baseURL: 'http://192.168.0.40:8085/',
});


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<AxiosErrorResponse>) => {
    console.log(JSON.stringify(error));
    return Promise.reject(error);
  }
);