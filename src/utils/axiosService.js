/* eslint-disable prettier/prettier */
import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'https://movie-sharkers.herokuapp.com/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default axiosService;

export const backendRequest = (token) => {
  const functionInstance = axios.create({
    baseURL: 'https://movie-sharkers.herokuapp.com/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  return functionInstance;
};
